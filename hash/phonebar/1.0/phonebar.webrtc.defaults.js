
//============================================================================

// Copyright © IFM Infomaster. All rights reserved.

//============================================================================

var custom = custom || {};

custom.webrtcdefaults = {

  PhoneConfig: {
    reconnectIntervalMin: 2,
    reconnectIntervalMax: 30,
    registerExpires: 600,
    useSessionTimer: false,
    keepAlivePing: 10,
    keepAlivePong: 10,
    keepAliveStats: 60,
    restoreCall: true,
    restoreCallMaxDelay: 20,

    // dtmfUseWebRTC: true, // RFC 2833/4733
    dtmfUseWebRTC: false,   // GBL: SIP_INFO simple to debug

    dtmfDuration: null,
    dtmfInterToneGap: null,
    avoidTwoWayHold: true,
    sendAlertInfoAutoAnswer: false,
    constraints: {
      chrome: {audio: {echoCancellation: true}},
      firefox: {audio: {echoCancellation: true}}
    },
    version: '2-Dec-2019'
  }

};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
