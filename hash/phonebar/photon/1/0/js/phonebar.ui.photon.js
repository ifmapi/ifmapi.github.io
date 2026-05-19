
// (c) Base Digitale Platform

(function(){
  'use strict';

  const ProvisioningProduct = 'phonebar';
  const ProvisioningTopic   = 'ifm.provisioning.phonebar';
  const ProvisioningSubject = 'ifm.provisioning.phonebar.PhoneBar';

  const commands = Ifm.PhoneBar.UI.Commands;

  // PhoneBar Photon Commands //

  commands.about = function() {
    const html = `
  <div>
    <img src="assets/pb.png" alt="PhoneBar logo" style="float:right; height:160px;">
    <div style="background:white; padding:30px;">
      <h2>${Ifm.Photon.app.host.version}</h2>
      <h2>${Ifm.PhoneBar.version}</h2>
      <br>
      <h3>\u00A9 2024-2026, Base Digitale Platform</h3>
    </div>
  </div>
`;

    Ifm.Dom.Photon.Cards.show(html, 'about-dialog', false, false, 0, 'PhoneBar',
      { width : 560, height : 164 });
  };

  commands.provisioningAndLogin = function() {
    const phonebar = Ifm.PhoneBar.instance;
    const strings  = Ifm.PhoneBar.Strings[phonebar.language()];

    const html = `
  <fieldset class="phonebar-form">
    <div>
      <label class="phonebar-form-label" for="usernametxt">${strings.LoginUsername}</label>
      <input class="phonebar-form-input large" type="text" id="usernametxt" value="${phonebar.agent.username}">
    </div>
  </fieldset>
`;

    Ifm.Dom.Photon.Cards.showDialog(html, 'login-dialog', strings.LoginOAuth2Title, [{
      text: strings.ButtonOK, default: true,
      click: async function(dialog, dialogBody) {
          if (phonebar.currentState() !== Ifm.PhoneBar.States.NotLoggedIn) {
            return;
          }

          const username = dialogBody.querySelector('#usernametxt').value;
          phonebar.agent.username = username;

          //TBR:dialog.close();

          const authConfig = await Ifm.Config.Provisioning.getAuthConfig(username,
                              ProvisioningProduct, ProvisioningTopic, ProvisioningSubject);
          if (authConfig.error) {
            commands.showMessage(authConfig.error, 'error'); // TBR
            return;
          }

          const authData = authConfig.data;
          authData.enableOAuth2 = true;
          if (!('usePopup' in authData)) {
            authData.usePopup = Ifm.Photon.app.isHosted;
          }

          const authInfo = await Ifm.Iam.OAuth2.getToken(authData, username);
          if (!authInfo || !authInfo.token) {
            if (!authInfo.isRedirecting) {
              commands.showMessage('Authentication failed', 'error'); // TBR
            }

            return;
          }

          const token = authInfo.token;

          const siteList = await Ifm.Config.Provisioning.getSiteList(username, token,
                          ProvisioningProduct, ProvisioningTopic, ProvisioningSubject);
          if (!siteList) {
            commands.showMessage('Error retrieving site list', 'error'); // TBR
            return;
          } else if (siteList.error) {
            commands.showMessage('Error retrieving site list: ' + siteList.error, 'error'); // TBR
            return;
          }

          const sites = siteList.data || [];

          var site;
          if (sites.length === 0) {
            site = null;
          } else if (sites.length === 1) {
            site = sites[0];
          } else {
            const siteOptions = sites.map(s => ({ label: s, value: s }));
            Ifm.Dom.Photon.Menu.choose(siteOptions, (value) => site = value);
            if (site === null) {
              return;
            }
          }

          const siteDisplayName = site || 'Default';

          const configData = await Ifm.Config.Provisioning.getConfig(username, token, site,
                              ProvisioningProduct, ProvisioningTopic, ProvisioningSubject);
          if (!configData || !configData.data) {
            if (configData.error) {
              commands.showMessage(`Error retrieving site configuration: "${configData.error}"`, 'error'); // TBR
            } else {
              commands.showMessage(`Error retrieving '${siteDisplayName}' site configuration`, 'error'); // TBR
            }

            return;
          }

          const provisioningConfig = configData.data;
          provisioningConfig.webrtcdefaults = custom.webrtcdefaults; // TBR: required but not in provisiong

          console.debug(`[PhoneBar.UI.Photon] Site '${siteDisplayName}' configuration: ` + JSON.stringify(provisioningConfig));
          console.debug(provisioningConfig);

          try {
            await Ifm.PhoneBar.instance.initialize(provisioningConfig);
          } catch(err) {
            commands.showMessage(`Configuration error (${siteDisplayName}) : ${err.message}`, 'error'); // TBR
            return;
          }

          const extension = provisioningConfig.extension; // TBR: override?
          phonebar.loginWithToken(token, extension, null, function(e) {
            if (e.failed) {
              dialog.close();
              commands.showMessage(strings.ConnectionFailed, 'error');
          } else if (e.accepted) {
              //dialog.close();
            } else {
              //dialog.shake();
              var cause;
              switch (e.failureCause) {
                case 0:
                  cause = strings.UserOrExtensionTaken;
                  break;
                case 3: // WrongUsernameOrPassword
                  cause = strings.WrongCredentials;
                  break;
                case 7: // InvalidExtension
                  cause = strings.InvalidExtension;
                  break;
                case 8: // ExtensionAlreadyInUse
                  cause = strings.ExtensionInUse;
                  break;
                case 9: // TokenBasedLoginNotAvailable
                case 10: // InvalidToken
                  cause = strings.TokenBasedLoginError;
                  break;
                default:
                  cause = "Login error " + e.failureCause;
                  break;
              }
              commands.showMessage(cause, 'warning');
            }
          });
        }
    }, {
      text: strings.ButtonCancel
    }], { width : 600, height : 210 });
  };

  commands.showMenu = function() {
    const phonebar = Ifm.PhoneBar.instance;
    const strings  = Ifm.PhoneBar.Strings[phonebar.language()];
    const alt    = Ifm.Photon.input.alt;
    const shift  = Ifm.Photon.input.shift;
    const hosted = Ifm.Photon.app.isHosted;

    const loggedIn = phonebar.isLoggedIn();
    const paused = phonebar.currentState() === Ifm.PhoneBar.States.Paused;
    const userinfo = loggedIn
          ? `${phonebar.agent.getName()} ${phonebar.agent.extension}`
          : strings.NotLoggedInState;

    Ifm.Dom.Photon.Menu.choose([
      { label : userinfo, disabled : true },
      { label : strings.MenuItemOptions, value : 'options' },
      { label : strings.MenuItemHeadsets, value : 'headsets' },
      { label : '-', visible : loggedIn },
      { label : strings.MenuItemPanic, value : 'panic', visible : loggedIn },
      { label : '-', visible : loggedIn },
      { label : strings.MenuItemCampaigns, value : 'campaigns', visible : loggedIn, checked : Ifm.Dom.Photon.Cards.isShown('campaignlist-card') },
      { label : strings.MenuItemQueueInfo, value : 'queue', visible : loggedIn, checked : Ifm.Dom.Photon.Cards.isShown('queueinfo-card') },
      { label : strings.MenuItemDialpad, value : 'dialpad', visible : loggedIn && hosted, checked : Ifm.Dom.Photon.Cards.isShown('dialpad-card') },
      { label : strings.MenuItemCallRegistry, value : 'callregistry', visible : loggedIn },
      { label : '-', visible : (alt || shift) && hosted },
      { label : strings.MenuItemDevTools, value : 'devtools', visible : shift && hosted },
      { label : strings.MenuItemRefresh, value : 'refresh', visible : alt && hosted },
      { label : strings.MenuItemReload, value : 'reload', visible : alt && hosted },
      //{ label : strings.MenuItemShowLogs, value : 'logs', visible : shift && host },
      { label : '-', visible : hosted },
      { label : strings.MenuItemAutoHide, value : 'autohide', visible : hosted, checked : Ifm.Photon.app.host.autoHide },
      { label : '-' },
      { label : strings.MenuItemSettings, value : 'settings' },
      { label : strings.MenuItemAbout, value : 'about' },
      { label : strings.MenuItemExit, value : 'exit', disabled : loggedIn && !paused, visible : hosted }
    ], value => {
      switch(value) {
        case 'about'        : commands.about(); break;
        case 'autohide'     : Ifm.Photon.app.host.autoHide = !Ifm.Photon.app.host.autoHide; break;
        case 'callregistry' : commands.showCallRegistry(); break;
        case 'campaigns'    : commands.toggleCampaigns(); break;
        case 'devtools'     : Ifm.Photon.app.host.openDevTools(); break;
        case 'dialpad'      : commands.toggleDialpad(); break;
        case 'exit'         : close(); break;
        case 'headsets'     : commands.showHeadsetDialog(); break;
        case 'options'      : commands.showOptions(); break;
        case 'panic'        : commands.panic(); break;
        case 'queue'        : commands.toggleQueueInfo(); break;
        case 'refresh'      : Ifm.Photon.app.host.refresh(); break;
        case 'reload'       : Ifm.Photon.app.host.reload(); break;
        case 'settings'     : commands.showSettings(); break;
      }
    });
  };

  commands.toggleCampaigns = function() {
    if (Ifm.Dom.Photon.Cards.isShown('campaignlist-card')) {
      Ifm.Dom.Photon.Cards.close('campaignlist-card');
    } else {
      commands.showAssignedCampaignList();
    }
  };

  // PhoneBar Photon Overridden Methods //

  if (Ifm.Photon.app.isHosted) {

    commands.hideDialpad = function() {
      Ifm.Dom.Photon.Cards.close('dialpad-card');
    };

    commands.showDialpad = function() {
      const phonebar = Ifm.PhoneBar.instance;
      const strings  = Ifm.PhoneBar.Strings[phonebar.language()];

      if (Ifm.Dom.Photon.Cards.isShown('dialpad-card')) return;

      Ifm.Dom.Photon.Cards.show('', 'dialpad-card', false, false, 0,
        strings.DialpadTitle, { width : 220, height : 220, resize : false, topmost : true },
        function(card, body) {
          body.classList.add('alt-background');

          const buttons = document.getElementById('phonebar-phone-dialpad-buttons');

          for (const button of buttons.children) {
            button.removeAttribute('disabled');
          }

          body.appendChild(buttons);
          body.classList.add('phonebar-dialpad-card-content');

          card.onclosed = function() {
            // take buttons back
            document.getElementById('phonebar-phone-dialpad-holder').appendChild(buttons);
          };
        }
      );
    };

    commands.toggleDialpad = function() {
      if (Ifm.Dom.Photon.Cards.isShown('dialpad-card')) {
        commands.hideDialpad();
      } else {
        commands.showDialpad();
      }
    };

  }

  // PhoneBar Photon Event Handlers //

  if (Ifm.Photon.app.isHosted) {

    Ifm.Photon.app.onBeforeTerminate = function() {
      const phonebar = Ifm.PhoneBar.instance;
      if (phonebar.currentState() !== Ifm.PhoneBar.States.NotLoggedIn &&
          phonebar.currentState() !== Ifm.PhoneBar.States.Paused) {
        // don't let the user quit:
        return { cancel: true };
      }
    };

    Ifm.PhoneBar.events.statechanged = function(phonebar, e) {
      if (e.currentState === Ifm.PhoneBar.States.NotLoggedIn) {
        Ifm.Photon.app.clearNotification(NotificationId.PhoneConnectionLost);
        Ifm.Photon.app.clearNotification(NotificationId.PhoneNotRegistered);
      }
    };

    Ifm.PhoneBar.Media.Phone.events.connected = function(phone, e) {
      Ifm.Photon.app.clearNotification(NotificationId.PhoneConnectionLost);
    };

    Ifm.PhoneBar.Media.Phone.events.disconnected = function(phone, e) {
      const phonebar = Ifm.PhoneBar.instance;
      const strings  = Ifm.PhoneBar.Strings[phonebar.language()];

      if (phonebar.currentState() !== Ifm.PhoneBar.States.NotLoggedIn) {
        Ifm.Photon.app.clearNotification(NotificationId.PhoneNotRegistered);

        Ifm.Photon.app.showNotification({
          content: '', heading: strings.PhoneNotConnected, style:'Error',
          hideAfter: false, position:'TopCenter', id: NotificationId.PhoneConnectionLost });
      }
    };

    Ifm.PhoneBar.Media.Phone.events.registeredstatechanged = function(phone, e) {
      const phonebar = Ifm.PhoneBar.instance;
      const strings  = Ifm.PhoneBar.Strings[phonebar.language()];

      if (!e.isRegistered && phonebar.currentState() !== Ifm.PhoneBar.States.NotLoggedIn) {
        Ifm.Photon.app.showNotification({
          content: '', heading: strings.PhoneNotRegistered, style:'Warning',
          hideAfter: false, position:'TopCenter', id: NotificationId.PhoneNotRegistered });
      } else {
        Ifm.Photon.app.clearNotification(NotificationId.PhoneNotRegistered);
      }
    };

    Ifm.PhoneBar.Media.Phone.events.registrationfailed = function(phone, e) {
      const phonebar = Ifm.PhoneBar.instance;
      const strings  = Ifm.PhoneBar.Strings[phonebar.language()];

      commands.alert(strings.PhoneNotRegistered);

      /*
      const id = 'registrationfailed_notification';

      if (!e.isRegistered && phonebar.currentState() !== Ifm.PhoneBar.States.NotLoggedIn) {
        Ifm.Photon.app.showNotification({ content:'', heading:strings.PhoneNotRegistered, style:'Warning', hideAfter:false, position:'TopCenter', id });
      } else {
        Ifm.Photon.app.clearNotification(id);
      }
        */
    };

    const NotificationId = {
      PhoneConnectionLost : 'phone_connection_lost_notification',
      PhoneNotRegistered  : 'phone_registeredstatechanged_notification'
    };
  }

})();
