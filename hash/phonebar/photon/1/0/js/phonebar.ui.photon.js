
// (c) Base Digitale Platform

(function(){
  'use strict';

  const ProvisioningProduct = 'phonebar';
  const ProvisioningTopic   = 'ifm.provisioning.phonebar';
  const ProvisioningSubject = 'ifm.provisioning.phonebar.PhoneBar';

  const commands = Ifm.PhoneBar.UI.Commands;

  commands.about = function() {
    const html = `
  <div>
    <img src="assets/pb.png" alt="PhoneBar logo" style="float:right; height:160px;">
    <div style="background:white; padding:30px;">
      <h2>${Ifm.Photon.app.host.version}</h2>
      <h2>${Ifm.PhoneBar.version}</h2>
      <br>
      <h3>© 2024, Base Digitale Platform</h3>
    </div>
  </div>
`;

    Ifm.Dom.Photon.Cards.show(html, 'about-dialog', false, false, 0, 'PhoneBar',
      { width : 560, height : 160 });
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
      text: strings.ButtonOK,
      click: async function(dialog, dialogBody) {
          if (phonebar.currentState() !== Ifm.PhoneBar.States.NotLoggedIn) {
            return;
          }

          const username = dialogBody.querySelector('#usernametxt').value;
          phonebar.agent.username = username;

          const authConfig = await Ifm.Config.Provisioning.getAuthConfig(username,
                              ProvisioningProduct, ProvisioningTopic, ProvisioningSubject);
          if (authConfig.error) {
            alert(authConfig.error); // TBR
            return;
          }

          const authData = authConfig.data;
          authData.enableOAuth2 = true;
          if (!('usePopup' in authData)) {
            authData.usePopup = Ifm.Photon.app.isHosted;
          }

          const authInfo = await Ifm.Iam.OAuth2.getToken(authData, username);
          if (!authInfo || !authInfo.token) {
            alert('Invalid access token'); // TBR
            return;
          }

          const token = authInfo.token;

          const siteList = await Ifm.Config.Provisioning.getSiteList(username, token,
                          ProvisioningProduct, ProvisioningTopic, ProvisioningSubject);
          if (!siteList) {
            alert('Error retrieving site list'); // TBR
            return;
          } else if (siteList.error) {
            alert('Error retrieving site list: ' + siteList.error); // TBR
            return;
          }

          const sites = siteList.data || [];

          var site;
          if (sites.length === 0) {
            site = null;
          } else if (sites.length === 1) {
            site = sites[0];
          } else {
            alert('Site configuration choice is not implemented yet.');
            site = sites[0];
          }

          const siteDisplayName = site || 'Default';

          const configData = await Ifm.Config.Provisioning.getConfig(username, token, site,
                              ProvisioningProduct, ProvisioningTopic, ProvisioningSubject);
          if (!configData || !configData.data) {
            alert(`Invalid site configuration (${siteDisplayName})`); // TBR
            return;
          }

          const provisioningConfig = configData.data;
          provisioningConfig.config.useProvisioning = true;
          provisioningConfig.webrtcdefaults = custom.webrtcdefaults; // TBR: required but not in provisiong

          console.debug(`Site '${siteDisplayName}' configuration`, provisioningConfig);
          try {
            Ifm.PhoneBar.instance.initialize(provisioningConfig);
          } catch(err) {
            alert(`Configuration error (${siteDisplayName}) : ${err.message}`); // TBR
            return;
          }

          const extension = provisioningConfig.extension; // TBR: override?
          phonebar.loginWithToken(token, extension, function(e) {
            if (e.accepted) {
              dialog.close('login-dialog');
            } else {
              Ifm.Dom.Photon.Cards.shake('login-dialog');
              var cause;
              switch (e.failureCause) {
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

  commands.showOptionsDialog = function() {
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

    Ifm.Dom.Photon.Cards.show(html, 'login-dialog', strings.OptionsTitle, [{
      text: strings.ButtonOK,
      click: function(dialog, dialogBody) { }
    }, {
      text: strings.ButtonCancel
    }]);
  }

  commands.showMenu = function() {
    const phonebar = Ifm.PhoneBar.instance;
    const strings  = Ifm.PhoneBar.Strings[phonebar.language()];
    const alt   = Ifm.Photon.input.alt;
    const shift = Ifm.Photon.input.shift;
    const host  = Ifm.Photon.app.isHosted;
  
    const userinfo = phonebar.isLoggedIn()
          ? `${phonebar.agent.getName()} ${phonebar.agent.extension}`
          : strings.NotLoggedInState;
  
    Ifm.Dom.Photon.Menu.choose([
      { label : userinfo, disabled : true },
      //{ label : strings.MenuItemOptions, value : 'options' },
      { label : '-', visible : phonebar.isLoggedIn() },
      { label : strings.MenuItemPanic, value : 'panic', visible : phonebar.isLoggedIn() },
      //{ label : '-' },
      //{ label : strings.MenuItemQueueInfo, value : 'queue', checked : false },
      //{ label : strings.MenuItemDialpad, value : 'dialpad', checked : false },
      { label : '-', visible : (alt || shift) && host },
      { label : strings.MenuItemDevTools, value : 'devtools', visible : shift && host },
      { label : strings.MenuItemRefresh, value : 'refresh', visible : alt && host },
      //{ label : strings.MenuItemReload, value : 'reload', visible : alt && host },
      //{ label : strings.MenuItemShowLogs, value : 'logs', visible : shift && host },
      { label : '-' },
      { label : strings.MenuItemAutoHide, value : 'autohide', visible : host, checked : Ifm.Photon.app.host.autoHide },
      { label : strings.MenuItemAbout, value : 'about' },
      { label : strings.MenuItemExit, value : 'exit', visible : host }
    ], value => {
        switch(value) {
          case 'about'    : commands.about(); break;
          case 'autohide' : Ifm.Photon.app.host.autoHide = !Ifm.Photon.app.host.autoHide; break;
          case 'devtools' : Ifm.Photon.app.host.openDevTools(); break;
          case 'dialpad'  : break; // TODO: commands.toggleDialpad(); break;
          case 'exit'     : close(); break;
          case 'options'  : commands.showOptionsDialog(); break;
          case 'panic'    : commands.panic(); break;
          case 'queue'    : break; // TODO: commands.toggleQueueInfo(); break;
          case 'refresh'  : Ifm.Photon.app.host.refresh(); break;
          case 'reload'   : Ifm.Photon.app.host.reload(); break;
        }
    });
  };

})();
