
//============================================================================

// Copyright (c) Base Digitale Platform. All rights reserved.

//============================================================================

var custom = custom || {};

custom.webrtcdefaults = {

  PhoneConfig: {
    reconnectIntervalMin: 2,
    reconnectIntervalMax: 30,

    // SIP 503 maintenance recovery.
    // Used when a draining PBX returns SIP 503 so the idle client
    // closes/reopens WSS and is rebalanced by NGINX to another node.
    sip503ReconnectDelayMinMs: 0,
    sip503ReconnectJitterMs: 100,
    sip503ReconnectAfterCallJitterMs: 0,
    sip503ReconnectCooldownMinMs: 500,
    sip503ReconnectCooldownMaxMs: 1000,

    registerExpires: 600,
    useSessionTimer: false,
    keepAlivePing: 10,

    // Version 1.9.0
    // keepAlivePong: 10,
    // keepAliveStats: 60,

    // Version 1.19.0
    keepAlivePong: false,
    keepAliveStats: false,

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
    version: '29-May-2022'
  }

};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
