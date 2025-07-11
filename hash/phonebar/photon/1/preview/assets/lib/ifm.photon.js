
// (c) Base Digitale Platform

(function() {
  'use strict';

  if (!('namespace' in window)) {

    function namespace(globalNamespace) {
      if (!globalNamespace || typeof globalNamespace !== typeof '')
        throw TypeError('Invalid namespace definition.');

      const parts = globalNamespace.split('.');
      let ns = window;
      for (const part of parts) {
          ns[part] = ns[part] || {};
          ns = ns[part];
      }

      return ns;
    }

    // Exports //

    window.namespace = namespace;
  }
})();


(function(){
  'use strict';

  const _isHosted = typeof window.gc === typeof Function;

  const app = {

    isHosted : _isHosted,


    // The app can overwrite this function to get notified when the host
    // is about to close; the app che refuse termination returning an object
    // with a member "cancel" with value "true".
    onBeforeTerminate() { },


    host : {
      get autoHide() { return false; },
      set autoHide(value) { console.debug('Not implemented: host.set_autoHide()'); },

      get version() { return ''; },

      clearNotification(id, window) { console.debug('Not implemented: host.clearNotification()'); },

      openDevTools() { console.debug('Not implemented: host.openDevTools()'); },

      refresh() { console.debug('Not implemented: host.refresh()'); },

      reload() { console.debug('Not implemented: host.reload()'); },

      shakeWindow(window) { console.debug('Not implemented: host.shakeWindow()'); },

      showNotification(options, window) { console.debug('Not implemented: host.showNotification()'); }

    },


    createId() { return Math.random().toString(16).substring(2).toUpperCase(); },

    clearNotification(id, w) {
      if (this.isHosted && this.host.clearNotification) {
        this.host.clearNotification.apply(this.host, arguments);
      } else {
        console.debug('Not implemented: app.clearNotification()');
      }
    },

    showNotification(options, w) {
      if (this.isHosted && this.host.showNotification) {
        this.host.showNotification.apply(this.host, arguments);
      } else {
        console.debug('Not implemented: app.showNotification()');
      }
    }

  };

  // Exports //

  namespace('Ifm.Photon').app = app;
})();


(function() {
  'use strict';

  const Windows = {

    exists(id) {
      if (!_windows.has(id)) {
        return false;
      } else if (_windows.get(id).document.visibilityState !== 'visible') {
        // must check for misalignments with host: this
        // seems to be a reliable property to check:
        Windows.closed(id);
        return false;
      }
      return true;
    },

    get(id) {
      return Windows.exists(id) ? _windows.get(id) : null;
    },

    getBody(id) {
      const window = Windows.get(id);
      return window ? window.document : null;
    },

    open(url, id, options = {}, onload) {
      const popup    = (options.popup !== false); // true by default

      const left     = options.left     || 'auto';
      const top      = options.top      || 'auto';
      const width    = options.width    || 600;
      const height   = options.height   || 360;
      const layoutId = options.layoutId || 'page-layout';

      const position = (Number.isFinite(left) && Number.isFinite(top))
                     ? `, left=${left}, top=${top}` : '';

      const size = ((width >= 100) && (height >= 100))
                 ? `, width=${width}, height=${height}` : '';

      const features = `popup=${!!popup}` + position + size;

      // Photon-only window style options:
      const phOpts = {};

      if (options.showInTaskbar) {
        phOpts.showInTaskbar = 1;
      }

      if (options.topmost) {
        phOpts.topmost = 1;
      }

      if (Object.keys(phOpts).length) {
        const urlObj = new URL(url, window.location.href);
        urlObj.searchParams.append('phopts', encodeURIComponent(JSON.stringify(phOpts)));
        url = urlObj.href;
      }

      // // use standard browser features for window style options
      // if (options.minimizeOnClose) features += ', menubar=true';
      // if (options.resizable) features += ', scrollbars=true';
      // if (options.showInTaskbar) features += ', status=true';
      // if (options.toolWindow) features += ', toolbar=true';

      var newWindow = Windows.get(id) || window.open(url, id, features);
      if (newWindow) {
        // must check for misalignments with host: this
        // seems to be a reliable property to check:
        if (newWindow.document.visibilityState !== 'visible') {
          // window.open could have returned a still valid window (for js)
          // but with its actual webview2 chrome closed... try again:
          newWindow.close();
          newWindow = window.open(url, id, features);
        }
      }

      if (!newWindow) {
        console.error('Popups must be enabled for this page!');
        return null;
      }

      if (id !== undefined) {
        _windows.set(id, newWindow);
      }

      newWindow.focus();
      Ifm.Dom.whenWindowNavigates(newWindow, url, function(newDocument) {
          if (options.title) {
            newDocument.title = options.title;
          }

          // augment object with Card functions:
          newWindow.shake = Ifm.Photon.app.host.shakeWindow.bind(null, newWindow);

          const dialogBody = newDocument.getElementById(layoutId) || newDocument.body;
          if (dialogBody) {
            if (options.html) {
              dialogBody.innerHTML = options.html;
            }
    
            if (dialogBody.style.display === 'none') {
              dialogBody.style.removeProperty('display');
            }

            if (Ifm.Type.isFunction(onload)) {
              onload(newWindow, dialogBody);
            }
          } else {
            console.warn(`Window "${id}" (${url}) has no valid layout container or body`);
          }
      });

      return newWindow;
    },

    close(id) {
      if (Windows.exists(id)) {
        Windows.get(id).close();
      }
    },

    closed(id) {
      const window = _windows.get(id);
      if (window) {
        _windows.delete(id);
        window.close();
        if (Ifm.Type.isFunction(window.onclosed)) window.onclosed(window);
      }
    },

    shake(id) {
      const window = Windows.get(id);
      if (window) {
        Ifm.Photon.app.host.shakeWindow(window);
      }
    }

  };

  const _windows = new Map();

  // Export
  namespace('Ifm.Photon').Windows = Windows;
})();


(function() {
  'use strict';

  const input = {
    alt   : false,
    ctrl  : false,
    shift : false
  };

  function onKey(ev) {
    input.alt   = ev.altKey;
    input.ctrl  = ev.ctrlKey;
    input.shift = ev.shiftKey;
  }

  document.addEventListener('keydown', onKey);
  document.addEventListener('keyup', onKey);

  // Export
  namespace('Ifm.Photon').input = input;
})();


(function() {
  'use strict';

  const Menu = {

    choose(items, callback) {
      const jsonItems = [];
      for (let item of items) {
        jsonItems.push(JSON.stringify(item));
      }

      if (jsonItems.length > 0 && (typeof callback === typeof Function)) {
        const commandId = Ifm.Photon.app.createId();

        function menuCallback(ev) {
          window.chrome.webview.removeEventListener('message', menuCallback);
          if (ev.data['Type'] === 'interaction-command-reply' && ev.data['CommandId'] === commandId) {
            callback(ev.data['CommandResult']);
          }
        }

        window.chrome.webview.addEventListener('message', menuCallback);

        const eventData = {
          'Type'      : 'interaction-command',
          'Command'   : 'menu',
          'CommandId' : commandId,
          'Items'     : jsonItems
        };

        window.chrome.webview.postMessage(eventData);
      }
    }

  };

  // Export
  namespace('Ifm.Photon').Menu = Menu;
})();


(function() {
  'use strict';

  const PhotonNS = Ifm.Photon.app.isHosted ? {
    // Photon App

    Cards : {

      show(html, id, dialog, fade, level, title, options = {}, onload) {
        options.url = options.url || 'popup.html'; // update options object
        options.html = html;
        options.title = title;
        return Ifm.Photon.Windows.open(options.url, id, options, onload);
      },

      showDialog(html, id, title, buttons, options = {}, onload) {
        const htmlDialog = Ifm.Dom.Cards._createDialogBody(html, title);
        const newWindow = PhotonNS.Cards.show(htmlDialog, id, true, null, 0, title, options);
        if (newWindow) {
          Ifm.Dom.whenWindowNavigates(newWindow, options.url, newDocument => {
            const dialogBody = newDocument.getElementById('page-layout') || newDocument.body;
            Ifm.Dom.Cards._createDialogButtons(newWindow, dialogBody, buttons);
            if (Ifm.Type.isFunction(onload)) {
              onload(newWindow, dialogBody);
            }
          });
        }
      },

      shake       : Ifm.Photon.Windows.shake,
      close       : Ifm.Photon.Windows.close,
      get         : Ifm.Photon.Windows.get,
      getBody     : Ifm.Photon.Windows.getBody,
      isShown(id) { return Ifm.Photon.Windows.exists(id); }
    },

    // dialogs : {
    //   create() { console.debug('Not supported: dialogs.create()'); },
    //   show()   { console.debug('Not supported: dialogs.show()'); },
    //   hide()   { console.debug('Not supported: dialogs.hide()'); }
    // },

    Menu : {
      choose : Ifm.Photon.Menu.choose
    }

  } : {
    // Web App

    Cards : Ifm.Dom.Cards,

    // dialogs : {
    //   create : Ifm.Dom.Dialogs.create,
    //   show   : Ifm.Dom.Dialogs.show,
    //   hide   : Ifm.Dom.Dialogs.hide
    // },

    Menu : new Ifm.Dom.Menu()

  };

  // Export:
  namespace('Ifm.Dom').Photon = PhotonNS;

})();
