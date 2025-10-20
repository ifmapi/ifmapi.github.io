
// (c) Base Digitale Platform

(function() {
  'use strict';

  window.addEventListener('load', () => {
    if (typeof Ifm === typeof undefined || typeof Ifm.PhoneBar === typeof undefined) return; // not the PhoneBar page

    Ifm.PhoneBar.events.initialized                        = (_, e) => postPhoneBarEvent(e, 10001, 'initialized');
    Ifm.PhoneBar.events.languagechanged                    = (_, e) => postPhoneBarEvent(e, 10002, 'languagechanged');
    Ifm.PhoneBar.events.pause                              = (_, e) => postPhoneBarEvent(e, 10003, 'pause');
    Ifm.PhoneBar.events.pausebooked                        = (_, e) => postPhoneBarEvent(e, 10004, 'pausebooked');
    Ifm.PhoneBar.events.ready                              = (_, e) => postPhoneBarEvent(e, 10005, 'ready');
    Ifm.PhoneBar.events.statechanged                       = (_, e) => postPhoneBarEvent(e, 10006, 'statechanged');
    Ifm.PhoneBar.events.statetimechanged                   = (_, e) => postPhoneBarEvent(e, 10007, 'statetimechanged');
    Ifm.PhoneBar.events.supervisormessage                  = (_, e) => postPhoneBarEvent(e, 10008, 'supervisormessage');
    Ifm.PhoneBar.events.assignment                         = (_, e) => postPhoneBarEvent(e, 10009, 'assignment');
    Ifm.PhoneBar.events.booked                             = (_, e) => postPhoneBarEvent(e, 10010, 'booked');
    Ifm.PhoneBar.events.alerting                           = (_, e) => postPhoneBarEvent(e, 10011, 'alerting');
    Ifm.PhoneBar.events.answered                           = (_, e) => postPhoneBarEvent(e, 10012, 'answered');
    Ifm.PhoneBar.events.callfailure                        = (_, e) => postPhoneBarEvent(e, 10013, 'callfailure');
    Ifm.PhoneBar.events.othercall                          = (_, e) => postPhoneBarEvent(e, 10014, 'othercall');
    Ifm.PhoneBar.events.readyfordetach                     = (_, e) => postPhoneBarEvent(e, 10015, 'readyfordetach');
    Ifm.PhoneBar.events.readyfortransfer                   = (_, e) => postPhoneBarEvent(e, 10016, 'readyfortransfer');
    Ifm.PhoneBar.events.terminated                         = (_, e) => postPhoneBarEvent(e, 10017, 'terminated');
    Ifm.PhoneBar.events.recordingstarted                   = (_, e) => postPhoneBarEvent(e, 10018, 'recordingstarted');
    Ifm.PhoneBar.events.recordingstopped                   = (_, e) => postPhoneBarEvent(e, 10019, 'recordingstopped');
    Ifm.PhoneBar.events.recordingmutechanged               = (_, e) => postPhoneBarEvent(e, 10020, 'recordingmutechanged');
    Ifm.PhoneBar.events.maskeddigitreceived                = (_, e) => postPhoneBarEvent(e, 10021, 'maskeddigitreceived');
    Ifm.PhoneBar.events.maskedpayloadreceived              = (_, e) => postPhoneBarEvent(e, 10022, 'maskedpayloadreceived');
    Ifm.PhoneBar.events.newcall                            = (_, e) => postPhoneBarEvent(e, 10023, 'newcall');
    Ifm.PhoneBar.events.abortcall                          = (_, e) => postPhoneBarEvent(e, 10024, 'abortcall');

    Ifm.PhoneBar.Media.Phone.events.initialized            = (_, e) => postPhoneEvent(e, 11001, 'initialized');
    Ifm.PhoneBar.Media.Phone.events.connected              = (_, e) => postPhoneEvent(e, 11002, 'connected');
    Ifm.PhoneBar.Media.Phone.events.disconnected           = (_, e) => postPhoneEvent(e, 11003, 'disconnected');
    Ifm.PhoneBar.Media.Phone.events.registeredstatechanged = (_, e) => postPhoneEvent(e, 11004, 'registeredstatechanged');
    Ifm.PhoneBar.Media.Phone.events.linestatechanged       = (_, e) => postPhoneEvent(e, 11005, 'linestatechanged');
    Ifm.PhoneBar.Media.Phone.events.conferencestatechanged = (_, e) => postPhoneEvent(e, 11006, 'conferencestatechanged');
    Ifm.PhoneBar.Media.Phone.events.lineselected           = (_, e) => postPhoneEvent(e, 11007, 'lineselected');
    Ifm.PhoneBar.Media.Phone.events.calling                = (_, e) => postPhoneEvent(e, 11008, 'calling');
    Ifm.PhoneBar.Media.Phone.events.callconnected          = (_, e) => postPhoneEvent(e, 11009, 'callconnected');
    Ifm.PhoneBar.Media.Phone.events.calldisconnected       = (_, e) => postPhoneEvent(e, 11010, 'calldisconnected');
    Ifm.PhoneBar.Media.Phone.events.displayname            = (_, e) => postPhoneEvent(e, 11011, 'displayname');
    Ifm.PhoneBar.Media.Phone.events.incomingcall           = (_, e) => postPhoneEvent(e, 11012, 'incomingcall');
    Ifm.PhoneBar.Media.Phone.events.ringing                = (_, e) => postPhoneEvent(e, 11013, 'ringing');
    Ifm.PhoneBar.Media.Phone.events.mutechanged            = (_, e) => postPhoneEvent(e, 11014, 'mutechanged');
    Ifm.PhoneBar.Media.Phone.events.vumeter                = (_, e) => postPhoneEvent(e, 11015, 'vumeter');

    Ifm.PhoneBar.Media.Xmpp.events.initialized             = (_, e) => postXmppEvent(e, 12001, 'initialized');
    Ifm.PhoneBar.Media.Xmpp.events.reachable               = (_, e) => postXmppEvent(e, 12002, 'reachable');
    Ifm.PhoneBar.Media.Xmpp.events.unreachable             = (_, e) => postXmppEvent(e, 12003, 'unreachable');
    Ifm.PhoneBar.Media.Xmpp.events.newcall                 = (_, e) => postXmppEvent(e, 12004, 'newcall');
    Ifm.PhoneBar.Media.Xmpp.events.newmessage              = (_, e) => postXmppEvent(e, 12005, 'newmessage');
    Ifm.PhoneBar.Media.Xmpp.events.callclosed              = (_, e) => postXmppEvent(e, 12006, 'callclosed');
    Ifm.PhoneBar.Media.Xmpp.events.filetransfer            = (_, e) => postXmppEvent(e, 12007, 'filetransfer');
    Ifm.PhoneBar.Media.Xmpp.events.sysmessage              = (_, e) => postXmppEvent(e, 12008, 'sysmessage');

    Ifm.PhoneBar.UI.events.overridablebuttonclick    = (_, e) => postPhoneBarReply(e, 13001, 'overridablebuttonclick', e.owner, e.requestId);
  
  });

  const THIS = '[PhoneBarBridge]';

  const postPhoneBarEvent = (e, eventCode, eventName) => postEvent(e, 'phonebar-event', eventName, eventCode);
  const postPhoneEvent    = (e, eventCode, eventName) => postEvent(e, 'phonebar-phone-event', eventName, eventCode);
  const postXmppEvent     = (e, eventCode, eventName) => postEvent(e, 'phonebar-xmpp-event', eventName, eventCode);
  const postPhoneBarReply = (e, eventCode, eventName, destination, id) => postReply(e, 'phonebar-reply', eventName, eventCode, destination, id);

  // System notifications
  const ConnectionClosedEvent               = 90001;    // Parameters: { connectionId (string) }

  // To Phonebar requests
  const SnapshotRequest                     = 20000;    // Parameters: { }
  const AbortCallRequest                    = 20001;    // Parameters: { accepted (bool), }
  const AudioRecordingAppendCueSheetRequest = 20002;    // Parameters: { cueSheet (string) }
  const AudioRecordingMuteRequest           = 20003;    // Parameters: { muteTxChannel (bool), muteRxChannel (bool), [appendCueSheet (bool)], [cueSheet (string)] }
  const AudioRecordingStartRequest          = 20004;    // Parameters: { fileName (string), [settings (long)] }
  const AudioRecordingStopRequest           = 20005;    // Parameters: { }
  const GetAgentsListRequest                = 20006;    // Parameters: { mask (int), [campaignName (string)] }
  const GetCampaignsListRequest             = 20007;    // Parameters: { mask (int), [callId (long)], [mediatype (int)] }
  const GetPauseReasonsListRequest          = 20008;    // Parameters: { }
  const GetQueueInfoRequest                 = 20009;    // Parameters: { [campaignName (string)] }
  const LoginRequest                        = 20010;    // Parameters: { firstName (string), lastName (string), password (string), extension (string), server1 (string) service2 (string), service1 (string), service2 (string) }
  const LogoutRequest                       = 20011;    // Parameters: { }
  const MakeManualCallRequest               = 20012;    // Parameters: { line (int), phoneNumber (string), [video (bool)] }
  const MakeOutboundCallRequest             = 20013;    // Parameters: { phoneNumber (string), campaignName (string), callingNumber (string), scriptType (string) }
  const MuteRequest                         = 20014;    // Parameters: { mute (bool) }
  const PauseRequest                        = 20015;    // Parameters: { reasonId (int) }
  const ReadyRequest                        = 20016;    // Parameters: { }
  const RetrieveCallRequest                 = 20017;    // Parameters: { accepted (bool) }
  const SaveCallDataRequest                 = 20018;    // Parameters: { [callId (int)] }
  const SetButtonEnabledRequest             = 20019;    // Parameters: { buttonId (int), enabled (bool) }
  const SetHookStateRequest                 = 20020;    // Parameters: { state (bool) }
  const ShowCallTransferFormRequest         = 20021;    // Parameters: { }
  const ShutdownRequest                     = 20022;    // Parameters: { }
  const StartDtmfMaskingRequest             = 20023;    // Parameters: { numberOfDigits (int), terminationDigit (byte) }
  const StopDtmfMaskingRequest              = 20024;    // Parameters: { }
  const SwapCallsRequest                    = 20025;    // Parameters: { }
  const TransferCallRequest                 = 20026;    // Parameters: { campaignName (string), [firstName (string), lastName (string)], [mandatory (bool)], [mode (int)] }
  const SetCallDataRequest                  = 20027;    // Parameters: { callId (int), name (string), value (string) }
  const GetButtonEnabledRequest             = 20028;    // Parameters: { buttonId (int) }
  const LogDumpRequest                      = 20029;    // Parameters: { message (string), [context (string)] }
  const LogDebugRequest                     = 20030;    // Parameters: { context (string), message (string) }
  const LogInfoRequest                      = 20031;    // Parameters: { context (string), message (string) }
  const LogWarnRequest                      = 20032;    // Parameters: { context (string), message (string) }
  const LogErrorRequest                     = 20033;    // Parameters: { context (string), message (string) }
  const OverrideButtonRequest               = 20034;    // Parameters: { buttonId (int), override (bool) }

  // To Phonebar replies
  const OverridableButtonClickReply         = 20101;    // Parameters: { buttonId (int), requestId (string), managed (bool) }

  // To Phonebar phone device commands
  const PhoneDropConferenceRequest          = 21001;    // Parameters: { }
  const PhoneMakeConferenceRequest          = 21002;    // Parameters: { }
  const PhoneSetActiveLineRequest           = 21003;    // Parameters: { lineId (int) }
  const PhoneSwitchActiveLineRequest        = 21004;    // Parameters: { }

  // From Phonebar reply
  const SnapshotReply                       = 10000;    // Parameters: { }
  const AbortCallReply                      = 30001;    // Parameters: { accepted (bool), campaignName (string), callId (int) }
  const GetAgentsListReply                  = 30002;    // Parameters: { result (bool), agents (List<AgentInfo>) }
  const GetCampaignsListReply               = 30003;    // Parameters: { result (bool), campaigns (List<CampaignInfo>) }
  const GetPauseReasonsListReply            = 30004;    // Parameters: { result (bool), reasons (List<PauseReason>) }
  const GetQueueInfoReply                   = 30005;    // Parameters: { campaignName (string), callsNum (int), maxTime (int), avgTime (int) }
  const LoginReply                          = 30006;    // Parameters: { accepted (bool), agentId (string), firstName (string), lastName (stirng), username (string), extension (string) }
  const LogoutReply                         = 30007;    // Parameters: { accepted (bool) }
  const MakeOutboundCallReply               = 30008;    // Parameters: { callId (int), campaignName (string), accepted (bool) }
  const PauseReply                          = 30009;    // Parameters: { accepted (bool), reasonId (int), reasonText (string) }
  const ReadyReply                          = 30010;    // Parameters: { accepted (bool) }
  const RetrieveCallReply                   = 30011;    // Parameters: { accepted (bool), callId (int) }
  const TransferCallReply                   = 30012;    // Parameters: { accepted (bool), campaignName (string), callId (int) }
  const GetButtonEnabledReply               = 30013;    // Parameters: { buttonId (int), enabled (bool) }
  const OverrideButtonReply                 = 30014;    // Parameters: { buttonId (int), accepted (bool) }

  function postEvent(e, eventType, eventName, eventCode) {
    console.debug(`${THIS} Posting event; Type: ${eventType}, Name: ${eventName}, Code: ${eventCode}`, e);

    const eventData = {
      'Type': eventType,
      'Event': eventName,
      'Code': eventCode,
      'Data': e
    };

    try {
      window.chrome.webview.postMessage(eventData);
    }
    catch(err) {
      console.error(`${THIS} Error posting event; Type: ${eventType}, Name: ${eventName}, Code: ${eventCode}`, e, err);
    }
  }

  function postReply(e, eventType, eventName, eventCode, destination, id) {
    console.debug(`${THIS} Posting reply; Type: ${eventType}, Name: ${eventName}, Code: ${eventCode}, Destination: ${destination}, Id: ${id}`, e);

    const eventData = {
      'Type': eventType,
      'Event': eventName,
      'Code': eventCode,
      'Id': id,
      'SendTo': destination,
      'Data': e
    };

    try {
      window.chrome.webview.postMessage(eventData);
    }
    catch(err) {
      console.error(`${THIS} Error posting reply; Type: ${eventType}, Name: ${eventName}, Code: ${eventCode}`, e, err);
    }
  }

  window.chrome.webview && window.chrome.webview.addEventListener('message', ev => {
    const message = ev.data;
    if (message["Type"] === 'phonebar-interop') {
      const data = JSON.parse(message["Data"]);
      console.debug(`${THIS} Got message; Type: ${message["Type"]}, Code: ${data.Code}`, data);
      var call;
      var callId;

      try {
        switch (data.Code) {
          case ConnectionClosedEvent:
            Ifm.PhoneBar.UI.releasedOverriddenButtonsOf(message["Sender"]);
          break;
          case SnapshotRequest:
            var reply = {};
            reply.version = Ifm.PhoneBar.about.version;
            reply.currentState = Ifm.PhoneBar.instance.currentState();
            reply.currentStateReason = Ifm.PhoneBar.instance.currentStateReason();
            reply.currentStateReasonId = Ifm.PhoneBar.instance.currentStateReasonId();
            reply.currentStateTime = Ifm.PhoneBar.instance.currentStateTime();
            reply.agent = {};
            reply.agent.id = Ifm.PhoneBar.instance.agent.id;
            reply.agent.firstName = Ifm.PhoneBar.instance.agent.firstName;
            reply.agent.lastName = Ifm.PhoneBar.instance.agent.lastName;
            reply.agent.extension = Ifm.PhoneBar.instance.agent.extension;
            reply.agent.username = Ifm.PhoneBar.instance.agent.username;
            reply.calls = Ifm.PhoneBar.instance.calls();
            reply.phone = {};
            reply.phone.isConnected = Ifm.PhoneBar.instance.media.phone?.isConnected ?? false;
            reply.phone.isRegistered = Ifm.PhoneBar.instance.media.phone?.isRegistered ?? false;
            reply.phone.isInConference = Ifm.PhoneBar.instance.media.phone?.isInConference ?? false;
            reply.phone.supportsConference = Ifm.PhoneBar.instance.media.phone?.supportsConference ?? false;
            reply.phone.numberOfLines = Ifm.PhoneBar.instance.media.phone?.numberOfLines ?? 0;
            reply.phone.selectedLineId = Ifm.PhoneBar.instance.media.phone?.selectedLineId ?? 0;
            reply.phone.state = Ifm.PhoneBar.instance.media.phone?.state ?? '';
            reply.phone.isMuted = Ifm.PhoneBar.instance.media.phone?.isMuted ?? false;
            reply.phone.lineState = [];
            for (var i = 0; i < reply.phone.numberOfLines; i++) {
              reply.phone.lineState.push(Ifm.PhoneBar.instance.media.phone.getLineState(i));
            }
            reply.xmpp = {};
            reply.xmpp.isConnected = Ifm.PhoneBar.instance.media.xmpp?.isConnected() ?? false;
            postPhoneBarReply(reply, SnapshotReply, "snapshot-reply", message["Sender"], "");
            break;

          case LoginRequest:
            Ifm.PhoneBar.instance.login(data["Data"].firstName, data["Data"].lastName, data["Data"].password, data["Data"].extension, function (e) {
              postPhoneBarReply(e, LoginReply, "login-reply", message["Sender"], data.Id);
            });
            break;

          case LogoutRequest:
            Ifm.PhoneBar.instance.logout(function (e) {
              postPhoneBarReply(e, LogoutReply, "logout-reply", message["Sender"], data.Id);
            });
            break;

          case AbortCallRequest:
            Ifm.PhoneBar.instance.abortCall(function (e) {
              postPhoneBarReply(e, AbortCallReply, "abortcall-reply", message["Sender"], data.Id);
            });
            break;

          case AudioRecordingAppendCueSheetRequest:
            call = Ifm.PhoneBar.instance.calls(function (c) {
              return c.mediatype === Ifm.PhoneBar.Mediatypes.Voice;
            })[0] || null;
            if (call !== null) {
              Ifm.PhoneBar.instance.tagRecording(call.callId, data["Data"].cueSheet);
            }
            break;

          case AudioRecordingMuteRequest:
            call = Ifm.PhoneBar.instance.calls(function (c) {
              return c.mediatype === Ifm.PhoneBar.Mediatypes.Voice;
            })[0] || null;
            if (call !== null) {
              Ifm.PhoneBar.instance.muteRecording(call.callId, data["Data"].muteRxChannel, data["Data"].muteTxChannel, data["Data"].cueSheet);
            }
            break;

          case AudioRecordingStartRequest:
            call = Ifm.PhoneBar.instance.calls(function (c) {
              return c.mediatype === Ifm.PhoneBar.Mediatypes.Voice;
            })[0] || null;
            if (call !== null) {
              Ifm.PhoneBar.instance.startRecording(call.callId, data["Data"].fileName, data["Data"].settings);
            }
            break;

          case AudioRecordingStopRequest:
            call = Ifm.PhoneBar.instance.calls(function (c) {
              return c.mediatype === Ifm.PhoneBar.Mediatypes.Voice;
            })[0] || null;
            if (call !== null) {
              Ifm.PhoneBar.instance.stopRecording(call.callId);
            }
            break;

          case GetAgentsListRequest:
            Ifm.PhoneBar.instance.getAgentList(data["Data"].campaignName, data["Data"].mask, function (e) {
              postPhoneBarReply(e, GetAgentsListReply, "agentlist-reply", message["Sender"], data.Id);
            });
            break;

          case GetCampaignsListRequest:
            Ifm.PhoneBar.instance.getCampaignList(data["Data"].callId, data["Data"].mediatype, data["Data"].mask, function (e) {
              postPhoneBarReply(e, GetCampaignsListReply, "campaignlist-reply", message["Sender"], data.Id);
            });
            break;

          case GetPauseReasonsListRequest:
            Ifm.PhoneBar.instance.getPauseReasons(function (e) {
              postPhoneBarReply(e, GetPauseReasonsListReply, "pausereasonslist-reply", message["Sender"], data.Id);
            });
            break;

          case GetQueueInfoRequest:
            Ifm.PhoneBar.instance.getQueueInfo(data["Data"].campaignName, function (e) {
              postPhoneBarReply(e, GetQueueInfoReply, "queueinfo-reply", message["Sender"], data.Id);
            });
            break;

          case MakeManualCallRequest:
            Ifm.PhoneBar.instance.media.phone.dial(data["Data"].phoneNumber);
            break;

          case MakeOutboundCallRequest:
            Ifm.PhoneBar.instance.makeCall(data["Data"].phoneNumber, data["Data"].campaignName, data["Data"].callingNumber, function (e) {
              postPhoneBarReply(e, MakeOutboundCallReply, "makecall-reply", message["Sender"], data.Id);
            });
            break;

          case MuteRequest:
            if (data["Data"].muted === true || data["Data"].muted === 1 || data["Data"].muted === "1") {
              Ifm.PhoneBar.instance.media.phone.mute();
            }
            else {
              Ifm.PhoneBar.instance.media.phone.unmute();
            }
            break;

          case PauseRequest:
            var reasonId = undefined;
            if (data["Data"].reasonId !== undefined && !Number.isNaN(data["Data"].reasonId)) {
              reasonId = data["Data"].reasonId
            }
            Ifm.PhoneBar.instance.pause(reasonId, function (e) {
              postPhoneBarReply(e, PauseReply, "pause-reply", message["Sender"], data.Id);
            });
            break;

          case ReadyRequest:
            callId = undefined;
            if (data["Data"].callId !== undefined && !Number.isNaN(data["Data"].callId)) {
              callId = data["Data"].callId
            }
            Ifm.PhoneBar.instance.ready(callId, function (e) {
              postPhoneBarReply(e, ReadyReply, "ready-reply", message["Sender"], data.Id);
            });
            break;

          case RetrieveCallRequest:
            console.warn(`${THIS} RetriveCall not implemented`);
            var e = {};
            e.accepted = 0;
            e.callId = data["Data"].callId;
            postPhoneBarReply(e, RetrieveCallReply, "retrivecall-reply", message["Sender"], data.Id);
            break;

          case SaveCallDataRequest:
            if (data["Data"].callId !== undefined && !Number.isNaN(data["Data"].callId)) {
              call = Ifm.PhoneBar.instance.calls(data["Data"].callId);
            }
            else {
              call = Ifm.PhoneBar.instance.calls(function (c) {
                return c.mediatype === Ifm.PhoneBar.Mediatypes.Voice;
              })[0] || null;
            }
            if (call !== null && call.callData !== undefined) {
              call.callData.save();
            }
            break;

          case GetButtonEnabledRequest:
            postPhoneBarReply({
              buttonId: data["Data"].buttonId,
              enabled: !Ifm.PhoneBar.UI.forceControlDisabled(data["Data"].buttonId)
            }, GetButtonEnabledReply, "getbuttonenabled-reply", message["Sender"], data.Id);
            break;

          case SetButtonEnabledRequest:
            Ifm.PhoneBar.UI.forceControlDisabled(data["Data"].buttonId, !data["Data"].enabled);
            break;

          case SetHookStateRequest:
            if (data["Data"].state === true) {
              Ifm.PhoneBar.instance.media.phone.drop();
            }
            else {
              Ifm.PhoneBar.instance.media.phone.answer();
            }
            break;

          case ShowCallTransferFormRequest:
            console.warn(`${THIS} ShowCallTransferFormRequest not implemented`);
            break;

          case ShutdownRequest:
            console.warn(`${THIS} ShutdownRequest not implemented`);
            break;

          case StartDtmfMaskingRequest:
            call = Ifm.PhoneBar.instance.calls(function (c) {
              return c.mediatype === Ifm.PhoneBar.Mediatypes.Voice;
            })[0] || null;
            if (call !== null) {
              Ifm.PhoneBar.instance.startDTMFMasking(call.callId, data["Data"].numberOfDigits, data["Data"].terminationDigit);
            }
            break;

          case StopDtmfMaskingRequest:
            call = Ifm.PhoneBar.instance.calls(function (c) {
              return c.mediatype === Ifm.PhoneBar.Mediatypes.Voice;
            })[0] || null;
            if (call !== null) {
              Ifm.PhoneBar.instance.stopDTMFMasking(call.callId);
            }
            break;

          case SwapCallsRequest:
            console.warn(`${THIS} SwapCallsRequest not implemented`);
            break;

          case TransferCallRequest:
            call = Ifm.PhoneBar.instance.calls(function (c) {
              return c.mediatype === Ifm.PhoneBar.Mediatypes.Voice;
            })[0] || null;
            if (call !== null) {
              Ifm.PhoneBar.instance.transferCall(call.callId, data["Data"].campaignName, data["Data"].agentFirstName, data["Data"].agentLastName, data["Data"].mandatory, data["Data"].mode, function (e) {
                postPhoneBarReply(e, TransferCallReply, "transfercall-reply", message["Sender"], data.Id);
              });
            }
            break;

          case SetCallDataRequest:
            if (data["Data"].callId !== undefined && !Number.isNaN(data["Data"].callId)) {
              call = Ifm.PhoneBar.instance.calls(data["Data"].callId);
            }
            else {
              call = Ifm.PhoneBar.instance.calls(function (c) {
                return c.mediatype === Ifm.PhoneBar.Mediatypes.Voice;
              })[0] || null;
            }
            if (call !== null && call.callData !== undefined) {
              call.callData.set(data["Data"].name, data["Data"].value);
            }
            break;

          case PhoneDropConferenceRequest:
            Ifm.PhoneBar.instance.media.phone.leaveConference();
            break;

          case PhoneMakeConferenceRequest:
            Ifm.PhoneBar.instance.media.phone.enterConference();
            break;

          case PhoneSetActiveLineRequest:
            Ifm.PhoneBar.instance.media.phone.selectLine(data["Data"].lineId - 1);
            break;

          case PhoneSwitchActiveLineRequest:
            if (Ifm.PhoneBar.instance.media.phone.selectedLineId === 0) {
              Ifm.PhoneBar.instance.media.phone.selectLine(1);
            }
            else {
              Ifm.PhoneBar.instance.media.phone.selectLine(0);
            }
            break;

          case LogDumpRequest:
          case LogDebugRequest:
            writePhoneBarLog(data["Data"].context, "Debug", data["Data"].message);
            break;

          case LogInfoRequest:
            writePhoneBarLog(data["Data"].context, "Info", data["Data"].message);
            break;

          case LogWarnRequest:
            writePhoneBarLog(data["Data"].context, "Warn", data["Data"].message);
            break;

          case LogErrorRequest:
            writePhoneBarLog(data["Data"].context, "Error", data["Data"].message);
            break;

          case OverrideButtonRequest: {
            const buttonId = data["Data"].buttonId;
            const override = data["Data"].override;
            const accepted = Ifm.PhoneBar.UI.overrideButton(buttonId, message["Sender"], override);
            postPhoneBarReply({ buttonId, accepted }, OverrideButtonReply, "overridebutton-reply", message["Sender"], data.Id);
          }
          break;

          case OverridableButtonClickReply: {
            const buttonId = Number(data["Data"].buttonId);
            const requestId = data["Data"].requestId;
            const managed = Boolean(data["Data"].managed);
            Ifm.PhoneBar.UI.onOverridableButtonClickReply(buttonId, requestId, managed);
          }
          break;

        }
      }
      catch (exc) {
        console.error(`${THIS} ERROR decoding received message:`, exc);
      }
    }
  });

  function writePhoneBarLog(context, severity, message) {
    message && Ifm.PhoneBar.instance.log(context || "ScriptControl", severity, message);
  }

})();
