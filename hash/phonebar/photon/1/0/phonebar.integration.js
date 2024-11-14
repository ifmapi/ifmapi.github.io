
//============================================================================

// Copyright (c) Base Digitale Platform. All rights reserved.

//============================================================================

// Purpose   :  Predefined PhoneBar event handlers.

//============================================================================

"use strict";

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires once, when the PhoneBar is set up.
//
Ifm.PhoneBar.events.initialized = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { settings, options }

    //phonebar.log("Integration", "Debug", "Initialized");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the resource language is changed.
//
Ifm.PhoneBar.events.languagechanged = function(phonebar, e) {
    // argument 'e' has the following definition:
    // e { language }

    //phonebar.log("Integration", "Debug", "Changed language");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Ifm.PhoneBar.events (Agent State)

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the Agent enter pause state.
//
Ifm.PhoneBar.events.pause = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { reasonId, reasonText }

    //phonebar.log("Integration", "Debug", "Pause event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the Agent receives a booking notification for a pause state.
//
Ifm.PhoneBar.events.pausebooked = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { reasonId, reasonText }

    //phonebar.log("Integration", "Debug", "Pause booked");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the Agent gets back ready.
//
Ifm.PhoneBar.events.ready = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { callId || null }

    //phonebar.log("Integration", "Debug", "Ready event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the Agent changes state.
//
Ifm.PhoneBar.events.statechanged = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { currentState, previousState }

    //phonebar.log("Integration", "Debug", "Changed state",
    //             "from", e.previousState, "to", e.currentState);

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the Agent changes state.
//
Ifm.PhoneBar.events.statetimechanged = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { currentState, previousState }

    //phonebar.log("Integration", "Debug", "Changed state time");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the Agent receives a text message from the supervisor.
//
Ifm.PhoneBar.events.supervisormessage = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { message, severity }

    //phonebar.log("Integration", "Debug", "Supervisor message");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Ifm.PhoneBar.events (Call)

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires after an AssignmentRequest as been successfully replied.
//
Ifm.PhoneBar.events.assignment = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { callId, mediatype, campaignName, callData[],
    //     isRecording, recordingData {
    //         fileName, settings, rxChannelMuted, txChannelMuted
    //   }, otherData {
    //         serviceId, campaignId, scriptName, scriptParameters
    //   }
    // }

    //phonebar.log("Integration", "Debug", "Assignment event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires before the Agent gets assigned.
//
Ifm.PhoneBar.events.booked = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { mediatype, campaignName }

    //phonebar.log("Integration", "Debug", "Booked event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the call is ready (phone is ringing, chat is connecting).
//
Ifm.PhoneBar.events.alerting = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { callId }

    //phonebar.log("Integration", "Debug", "Alerting event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the call is answered.
//
Ifm.PhoneBar.events.answered = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { callId }

    //phonebar.log("Integration", "Debug", "Answered event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when a call transfer error happens.
//
Ifm.PhoneBar.events.callfailure = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { callId, cause,
    //     protocolTerminationCause, protocolTerminationDescription,
    //     detectedContentCode, detectedContentDescription
    //   }

    //phonebar.log("Integration", "Debug", "CallFailure event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when Agents begins a manual call.
//
Ifm.PhoneBar.events.othercall = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { }

    //phonebar.log("Integration", "Debug", "OtherCall event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the Agent can disconnect the call.
//
Ifm.PhoneBar.events.readyfordetach = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { callId }

    //phonebar.log("Integration", "Debug", "ReadyForDetach event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the call is about to be transferred.
//
Ifm.PhoneBar.events.readyfortransfer = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { callId, campaignName, agentFirstName, agentLastName }

    //phonebar.log("Integration", "Debug", "ReadyForTransfer event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the call is closed and eventually notifies if the Agent enters
// in post-call work state.
//
Ifm.PhoneBar.events.terminated = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { callId, postCallWork }

    //phonebar.log("Integration", "Debug", "Terminated event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Ifm.PhoneBar.events (Recording)

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when a recording request has been accepted and started.
//
Ifm.PhoneBar.events.recordingstarted = function(phonebar, e) {
    // argument 'e' has the following definition:
    // e { callId, fileName }

    //phonebar.log("Integration", "Debug", "RecordingStarted event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when a recording has been stopped of failed to start.
//
Ifm.PhoneBar.events.recordingstopped = function(phonebar, e) {
    // argument 'e' has the following definition:
    // e { callId, result }

    //phonebar.log("Integration", "Debug", "RecordingStopped event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the current recording has been muted or unmuted.
//
Ifm.PhoneBar.events.recordingmutechanged = function(phonebar, e) {
    // argument 'e' has the following definition:
    // e { callId, rxChannelMuted, txChannelMuted }

    //phonebar.log("Integration", "Debug", "RecordingMuteChanged event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Ifm.PhoneBar.Media.Xmpp.events (Reachability)

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the agents gets reachable for the xmpp-bases mediatypes.
//
Ifm.PhoneBar.Media.Xmpp.events.reachable = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { }

    //phonebar.log("Integration", "Debug", "[Xmpp] Reachable event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the agents gets reachable for the xmpp-bases mediatypes.
//
Ifm.PhoneBar.Media.Xmpp.events.unreachable = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { reason }

    //phonebar.log("Integration", "Debug", "[Xmpp] Unreachable event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Ifm.PhoneBar.Media.Xmpp.events (Call)

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the call is answered and the xmpp session is open.
//
Ifm.PhoneBar.Media.Xmpp.events.newcall = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { callId }

    //phonebar.log("Integration", "Debug", "[Xmpp] NewCall event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when a participant sends a message in the xmpp session.
//
Ifm.PhoneBar.Media.Xmpp.events.newmessage = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { callId, sender, sentFromHere, rawMessage, message
    //     timestamp, attributes }

    //phonebar.log("Integration", "Debug", "[Xmpp] NewMessage event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
// Fires when the xmpp session is closed; the call could be terminated
// or transferred.
//
Ifm.PhoneBar.Media.Xmpp.events.callclosed = function (phonebar, e) {
    // argument 'e' has the following definition:
    // e { callId }

    //phonebar.log("Integration", "Debug", "[Xmpp] CallClosed event");

    // todo: your code here
};

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
