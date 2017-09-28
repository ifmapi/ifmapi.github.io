
`` Copyright © IFM Infomaster. All rights reserved. ``

Call Class
==========

Namespace: Ifm.PhoneBar

Script Source:
``<script src="https://ifmapi.github.io/hash/phonebar/1.0/phonebar.min.js"></script>``

Syntax
------

### Constructors ###

There is no public constructor for this class.

### Static Methods ###

### Static Properties ###

### Constants ###

### Events ###

### Instance Methods ###

### Instance Properties ###

+ **callData** : Ifm.Messaging.FPropertyList

+ **callGuid** : String

+ **callId** : Number

+ **campaignName** : String

+ **mediatype** : Ifm.PhoneBar.Mediatypes

+ **otherData** : Object
	- campaignId : String
	- serviceId : String
    - recordingFileName : String
    - recordingSettings : Number
    - recordingState : Number
	- scriptName : String
	- scriptParameters : String

Remarks
-------

Examples
--------

Get a reference to the active calls array:
>	var calls = phonebar.calls();

Get a reference to a specific call object:
>	var call = phonebar.calls(callId);

Find a reference to some calls:
>	var found = phonebar.calls(function(call) { 
>	    // filter for social network calls:
>	    return call.mediatype === Ifm.PhoneBar.Mediatypes.StoreAndForward;
>	});

### See Also ###

* [PhoneBar class](phonebar.md)
* [Mediatypes enum](mediatypes.md)

`` https://ifmapi.github.io/hash/phonebar/1.0/doc/call.md ``
