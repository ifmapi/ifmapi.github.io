[Index](index.md)

PhoneBar Class
==============

Namespace: Ifm

Script Source:
```html
<script src="https://ifmapi.github.io/hash/phonebar/1.0/phonebar.min.js"></script>
```

Syntax
------

### Constructors ###

The PhoneBar object is a singleton.

There is no public constructor for this class.
Get a reference to the current object using:
```javascript
Ifm.PhoneBar.instance
```

### Static Methods ###

+ **canRun** : function()
	- _return_ : Boolean

### Static Properties ###

+ **instance** : Ifm.PhoneBar

### Constants ###

### Events ###

Phones Server notifications:

+ **assignment** : function(phonebar, e)
	- e : [Call](call.md)

+ **booked** : function(phonebar, e)
	- e : Object
		- mediatype : [Mediatypes](mediatypes.md)
		- campaignName : String

+ **alerting** : function(phonebar, e)
	- e : Object
		- callId : Number

+ **answered** : function(phonebar, e)
	- e : Object
		- callId : Number

+ **callfailure** : function(phonebar, e)
	- e : Object
		- callId : Number
		- cause : Number
		- protocolTerminationCause : Number

+ **othercall** : function(phonebar, e)
	- e : Object

+ **pause** : function(phonebar, e)
	- e : Object
		- reasonId : Number
		- reasonText : String

+ **ready** : function(phonebar, e)
	- e : Object
		- callId : Number

+ **readyfordetach** : function(phonebar, e)
	- e : Object
		- callId : Number

+ **readyfortransfer** : function(phonebar, e)
	- e : Object
		- callId : Number

+ **terminated** : function(phonebar, e)
	- e : Object
		- callId : Number
		- postCallWork : Boolean

Recording notifications:

+ **audiorecordingstarted** : function(phonebar, e)
	- e : Object
		- callId : Number
		- fileName : String

+ **audiorecordingmuted** : function(phonebar, e)
	- e : Object
		- callId : Number
		- rxChannel : Boolean
		- txChannel : Boolean

+ **audiorecordingcompleted** : function(phonebar, e)
	- e : Object
		- callId : Number
		- result : Number

State events:

+ **statechanged** : function(phonebar, e)
	- e : Object
		- previousState : [States](states.md)
		- currentState : [States](states.md)

+ **statetimechanged** : function(phonebar, e)
	- e : Object
		- stateTime : Date
		- startTimer : Boolean

Supervisor messages:

+ **supervisormessage** : function(phonebar, e)
	- e : Object
		- severity : Number
		- message : String

### Instance Methods ###

+ **calls** : function(*optional* filter)
	- filter : Number OR (Boolean) function(call)
	- _return_ : [Call](call.md)

+ **currentState** : function()
	- _return_ : [States](states.md)

+ **currentStateTime** : function()
	- _return_ : Date

+ **getAgentList** : function(campaignName, mask, callback)
	- campaignName : String
	- mask : Number
	- callback : function(e)

+ **getCampaignList** : function(callId, mediatype, mask, callback)
	- callId : Number
	- mediatype : [Mediatypes](mediatypes.md)
	- mask : Number
	- callback : function(e)

+ **getPauseReasons** : function(callback)
	- callback : function(e)

+ **getQueueInfo** : function(campaignName, callback)
	- campaignName : String
	- callback : function(e)

+ **initialize** : function(config, options)
	- config : Object
	- options : Object

+ **isLoggedIn** : function()
	- _return_ : Boolean

+ **language** : (String) function (*optional* lang)
	- lang : String ["en", "it"]

+ **login** : function (firstName, lastName, password, extension, *optional* callback)
	- firstName : String
	- lastName : String
	- password : String
	- extension : String
	- *optional* callback : function(e)

+ **logout** : function (*optional* callback)
	- *optional* callback : function(e)

+ **makeCall** : function (phoneNumber, campaignName, callingNumber, *optional* callback) {
	- phoneNumber : String
	- campaignName : String
	- callingNumber : String
	- *optional* callback : function(e)

+ **panic** : function ()

+ **pause** : function (*optional* reasonId, *optional* callback)
    - *optional* reasonId : Number
	- *optional* callback : function(e)

+ **ready** : function (*optional* callId, *optional* callback)
    - *optional* callId : Number
	- *optional* callback : function(e)

+ **transferCall** : function (callId, campaignName, *optional* agentFirstName, *optional* agentLastName, *optional* mandatory, *optional* mode, *optional* callback)
	- callId : Number
	- campaignName : String
	- *optional* agentFirstName : String
	- *optional* agentLastName : String
	- *optional* mandatory : Boolean
	- *optional* mode : Number
	- *optional* callback : function(e)

### Instance Properties ###

+ **agent** : Object
	- firstName : String
	- lastName : String
	- password : String
	- extension : String

Remarks
-------

Examples
--------

Get a reference to the object:
```javascript
var phonebar = Ifm.PhoneBar.instance;
```

Set an event handler for a specific event:
```javascript
Ifm.PhoneBar.events.statechanged = function (phonebar, e) { ... };
```

See Also
--------

* [Call class](call.md)
* [Mediatypes enum](mediatypes.md)
* [States enum](states.md)

``` Copyright © IFM Infomaster. All rights reserved. ```
