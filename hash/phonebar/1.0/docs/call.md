[Index](index.md)

Call Class
==========

Namespace: Ifm.PhoneBar

Script Source:
```html
<script src="https://ifmapi.github.io/hash/phonebar/1.0/phonebar.min.js"></script>
```

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

+ **mediatype** : [Mediatypes](mediatypes.md)

+ **recordingData** : Object
	- fileName : String
	- settings : Number
	- rxChannelMuted : Boolean
	- txChannelMuted : Boolean

+ **otherData** : Object
	- campaignId : String
	- serviceId : String
	- scriptName : String
	- scriptParameters : String

Remarks
-------

Examples
--------

Get a reference to the active calls array:
```javascript
var calls = phonebar.calls();
```

Get a reference to a specific call object:
```javascript
call = phonebar.calls(callId);
```

Find a reference to some calls:
```javascript
var found = phonebar.calls(function(call) { 
	// filter for social network calls:
	return call.mediatype === Ifm.PhoneBar.Mediatypes.StoreAndForward;
});
```

See Also
--------

* [PhoneBar class](phonebar.md)
* [Mediatypes enum](mediatypes.md)

``` Copyright © IFM Infomaster. All rights reserved. ```
