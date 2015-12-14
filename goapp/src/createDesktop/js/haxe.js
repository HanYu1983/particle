(function (console, $global) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
Lambda.__name__ = true;
Lambda.foreach = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) return false;
	}
	return true;
};
Lambda.fold = function(it,f,first) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		first = f(x,first);
	}
	return first;
};
var List = function() {
	this.length = 0;
};
List.__name__ = true;
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l[0] == v) {
				if(prev == null) this.h = l[1]; else prev[1] = l[1];
				if(this.q == l) this.q = prev;
				this.length--;
				return true;
			}
			prev = l;
			l = l[1];
		}
		return false;
	}
	,__class__: List
};
var _$List_ListIterator = function(head) {
	this.head = head;
	this.val = null;
};
_$List_ListIterator.__name__ = true;
_$List_ListIterator.prototype = {
	hasNext: function() {
		return this.head != null;
	}
	,next: function() {
		this.val = this.head[0];
		this.head = this.head[1];
		return this.val;
	}
	,__class__: _$List_ListIterator
};
Math.__name__ = true;
var Main = function() { };
Main.__name__ = true;
Main.main = function() {
	window.document.addEventListener("contextmenu",function(e) {
		e.preventDefault();
	},false);
	org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new controller_MainController("",Main.j("#container_cards")));
	org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(controller_MainController.create_item,[Main.createItem([Math.floor(Math.random() * 500),Math.floor(Math.random() * 500)]),Main.createItem([Math.floor(Math.random() * 500),Math.floor(Math.random() * 500)]),Main.createItem([Math.floor(Math.random() * 500),Math.floor(Math.random() * 500)]),Main.createItem([Math.floor(Math.random() * 500),Math.floor(Math.random() * 500)],"map",700,700)]);
	Main.createSocket(Main.playerId);
};
Main.doAction = function(methodName,ary_item,extra) {
	var info;
	switch(methodName) {
	case "list":case "together":
		info = Main.collectInfo(ary_item);
		break;
	case "shuffle":
		Main.doShuffleModel(ary_item);
		info = { };
		break;
	case "reverse":
		Main.doReverseModel(ary_item);
		info = { };
		break;
	default:
		info = { };
	}
	var _g1 = 0;
	var _g = ary_item.length;
	while(_g1 < _g) {
		var i = _g1++;
		var itemModel = ary_item[i];
		var itemMediator = org_puremvc_haxe_patterns_facade_Facade.getInstance().retrieveMediator(itemModel.id);
		var item;
		item = js_Boot.__cast(itemMediator , view_IItem);
		if(methodName != "lock") {
			if(itemModel.lock) continue;
		}
		switch(methodName) {
		case "shuffle":case "together":case "reverse":
			var pos_mouse = Reflect.field(extra,"pos_mouse");
			Main.doTogetherModel(itemModel,i,pos_mouse);
			item.move(itemModel.pos[0],itemModel.pos[1]);
			Main.doZSort(itemMediator.getViewComponent());
			break;
		case "list":
			var pos_mouse1 = Reflect.field(extra,"pos_mouse");
			Main.doListModel(itemModel,i,pos_mouse1,info);
			item.move(itemModel.pos[0],itemModel.pos[1]);
			break;
		case "setViewer":
			if(itemModel.viewer == Main.playerId) itemModel.viewer = ""; else itemModel.viewer = Main.playerId;
			item.setViewer(itemModel.viewer == Main.playerId);
			break;
		case "setOwner":
			haxe_Log.trace(itemModel.owner,{ fileName : "Main.hx", lineNumber : 84, className : "Main", methodName : "doAction"});
			if(itemModel.owner == Main.playerId) itemModel.owner = ""; else itemModel.owner = Main.playerId;
			item.setOwner(itemModel.owner == Main.playerId);
			break;
		case "move":
			item.move(itemModel.pos[0],itemModel.pos[1]);
			break;
		case "flip":
			itemModel.back = !itemModel.back;
			item.flip(itemModel.back);
			break;
		case "rotateForward":
			var td = Math.floor(itemModel.deg + 90);
			item.rotateForward(itemModel.deg,td);
			itemModel.deg = td;
			break;
		case "rotateBackward":
			var td1 = Math.floor(itemModel.deg - 90);
			item.rotateForward(itemModel.deg,td1);
			itemModel.deg = td1;
			break;
		case "lock":
			itemModel.lock = !itemModel.lock;
			item.lock(itemModel.lock);
			break;
		}
	}
};
Main.messageSocket = function(toId,type,msg) {
	haxe_Log.trace("pushMessage",{ fileName : "Main.hx", lineNumber : 116, className : "Main", methodName : "messageSocket", customParams : [type]});
	Main.ary_sendMessage.push({ toId : toId, msg : { type : type, msg : JSON.parse(JSON.stringify(msg))}, channel : channel});
	var doNextChannel;
	var doNextChannel1 = null;
	doNextChannel1 = function() {
		if(Main.ary_sendMessage.length > 0) {
			Main.isSending = true;
			var m = Main.ary_sendMessage.shift();
			haxe_Log.trace("messageSocket",{ fileName : "Main.hx", lineNumber : 131, className : "Main", methodName : "messageSocket", customParams : [m.msg.type]});
			m.channel.sendChannelMessage(m.toId,JSON.stringify(m.msg),Main.handleResponse(function(ret) {
				Main.isSending = false;
				doNextChannel1();
			}));
		}
	};
	doNextChannel = doNextChannel1;
	if(Main.isSending) return;
	doNextChannel();
};
Main.createItem = function(pos,type,width,height,back,lock,owner,viewer) {
	if(viewer == null) viewer = "";
	if(owner == null) owner = "desktop";
	if(lock == null) lock = false;
	if(back == null) back = true;
	if(height == null) height = 100;
	if(width == null) width = 100;
	if(type == null) type = "card";
	return { type : type, width : width, height : height, pos : [Math.floor(Math.random() * 600),Math.floor(Math.random() * 600)], back : true, deg : 0, lock : false, owner : "desktop", viewer : "", id : Main.createDivId()};
};
Main.createSocket = function(id) {
	api.createChannel(id,{ onopen : function() {
		Main.messageSocket(Main.playerId,"addItems",[Main.tempItem]);
		Main.tempItem.pos[0] = 100;
		Main.tempItem.pos[1] = 0;
		Main.messageSocket(Main.playerId,"applyTransform",[Main.tempItem]);
		Main.messageSocket(Main.playerId,"applyRotateForward",[Main.tempItem]);
		Main.messageSocket(Main.playerId,"applyRotateForward",[Main.tempItem]);
		Main.messageSocket(Main.playerId,"applyRotateForward",[Main.tempItem]);
		Main.messageSocket(Main.playerId,"applyRotateBackward",[Main.tempItem]);
		Main.tempItem.pos[0] = 130;
		Main.tempItem.pos[1] = 200;
		Main.messageSocket(Main.playerId,"applyTransform",[Main.tempItem]);
		Main.messageSocket(Main.playerId,"applyFlip",[Main.tempItem]);
		Main.messageSocket(Main.playerId,"applyFlip",[Main.tempItem]);
		Main.tempItem.viewer = Main.playerId;
		Main.tempItem.owner = Main.playerId;
		Main.messageSocket(Main.playerId,"applyViewerOwner",[Main.tempItem]);
	}, onmessage : function(json) {
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(controller_MainController.on_receiveMessage,json.msg,json.type);
	}, onerror : function() {
	}, onclose : function() {
	}});
};
Main.getMediatorFromId = function(id) {
	return js_Boot.__cast(org_puremvc_haxe_patterns_facade_Facade.getInstance().retrieveMediator(id) , view_IItem);
};
Main.collectInfo = function(ary_item) {
	var mw = 0.0;
	var mh = 0.0;
	var firstPos = [];
	var _g1 = 0;
	var _g = ary_item.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(i == 0) firstPos = ary_item[i].pos.slice();
		mw = Math.max(mw,ary_item[i].width);
		mh = Math.max(mw,ary_item[i].height);
	}
	return { mw : mw, mh : mh, firstPos : firstPos};
};
Main.doZSort = function(dom) {
	dom.appendTo(dom.parent());
};
Main.doTogetherModel = function(itemModel,i,pos_mouse) {
	itemModel.pos[0] = i * 2 + pos_mouse[0];
	itemModel.pos[1] = i * 2 + pos_mouse[1];
};
Main.doListModel = function(itemModel,i,pos_mouse,info) {
	itemModel.pos[0] = i % 10 * (Reflect.field(info,"mw") + 4) + pos_mouse[0];
	itemModel.pos[1] = Math.floor(i / 10) * (Reflect.field(info,"mh") + 4) + pos_mouse[1];
};
Main.doShuffleModel = function(ary_item) {
	ary_item.sort(function(a,b) {
		if(Math.random() > .5) return 1; else return -1;
	});
};
Main.doReverseModel = function(ary_item) {
	ary_item.reverse();
};
Main.createItemDiv = function(type,model) {
	var div = Main.j("#tmpl_" + type).tmpl(model);
	return div;
};
Main.createDivId = function() {
	return leo.utils.generateUUID();
};
Main.slide = function(msg,time) {
	if(time == null) time = 2000;
	Main.j.messager.show({ title : "提示", msg : msg, timeout : time, showType : "slide"});
};
Main.alert = function(msg) {
	Main.j.messager.alert("錯誤",msg);
};
Main.handleResponse = function(cb) {
	return function(err,ret) {
		if(err != null) Main.alert(err); else cb(ret);
	};
};
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		return null;
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var Type = function() { };
Type.__name__ = true;
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw new js__$Boot_HaxeError("Too many arguments");
	}
	return null;
};
var org_puremvc_haxe_interfaces_INotifier = function() { };
org_puremvc_haxe_interfaces_INotifier.__name__ = true;
org_puremvc_haxe_interfaces_INotifier.prototype = {
	__class__: org_puremvc_haxe_interfaces_INotifier
};
var org_puremvc_haxe_patterns_observer_Notifier = function() {
	this.facade = org_puremvc_haxe_patterns_facade_Facade.getInstance();
};
org_puremvc_haxe_patterns_observer_Notifier.__name__ = true;
org_puremvc_haxe_patterns_observer_Notifier.__interfaces__ = [org_puremvc_haxe_interfaces_INotifier];
org_puremvc_haxe_patterns_observer_Notifier.prototype = {
	sendNotification: function(notificationName,body,type) {
		this.facade.sendNotification(notificationName,body,type);
	}
	,__class__: org_puremvc_haxe_patterns_observer_Notifier
};
var org_puremvc_haxe_interfaces_IMediator = function() { };
org_puremvc_haxe_interfaces_IMediator.__name__ = true;
org_puremvc_haxe_interfaces_IMediator.prototype = {
	__class__: org_puremvc_haxe_interfaces_IMediator
};
var org_puremvc_haxe_patterns_mediator_Mediator = function(mediatorName,viewComponent) {
	org_puremvc_haxe_patterns_observer_Notifier.call(this);
	if(mediatorName != null) this.mediatorName = mediatorName; else this.mediatorName = org_puremvc_haxe_patterns_mediator_Mediator.NAME;
	if(viewComponent != null) this.viewComponent = viewComponent;
};
org_puremvc_haxe_patterns_mediator_Mediator.__name__ = true;
org_puremvc_haxe_patterns_mediator_Mediator.__interfaces__ = [org_puremvc_haxe_interfaces_IMediator];
org_puremvc_haxe_patterns_mediator_Mediator.__super__ = org_puremvc_haxe_patterns_observer_Notifier;
org_puremvc_haxe_patterns_mediator_Mediator.prototype = $extend(org_puremvc_haxe_patterns_observer_Notifier.prototype,{
	getMediatorName: function() {
		return this.mediatorName;
	}
	,setViewComponent: function(viewComponent) {
		this.viewComponent = viewComponent;
	}
	,getViewComponent: function() {
		return this.viewComponent;
	}
	,listNotificationInterests: function() {
		return [];
	}
	,handleNotification: function(notification) {
	}
	,onRegister: function() {
	}
	,onRemove: function() {
	}
	,__class__: org_puremvc_haxe_patterns_mediator_Mediator
});
var controller_MainController = function(mediatorName,viewComponent) {
	this.isList = false;
	this.pos_mouse = [0,0];
	this.ary_allItem = [];
	this.ary_select = [];
	var _g = this;
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
	leo.utils.initRectSelect(function(ary) {
		haxe_Log.trace(ary,{ fileName : "MainController.hx", lineNumber : 35, className : "controller.MainController", methodName : "new"});
		_g.onSelectItems(ary);
	});
	Main.j("body").mousemove($bind(this,this.onBodyMouseMove));
	Main.j("body").keyup($bind(this,this.onBodyKeyUp));
};
controller_MainController.__name__ = true;
controller_MainController.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
controller_MainController.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return [controller_MainController.create_item,controller_MainController.on_select_cards,controller_MainController.on_receiveMessage,view_BasicItem.on_item_click,view_BasicItem.on_item_lock];
	}
	,handleNotification: function(notification) {
		var _g1 = this;
		var _g = notification.getName();
		var on_receiveMessage = _g;
		switch(_g) {
		case "on_item_lock":
			var div = notification.getBody().view;
			var lock = notification.getBody().lock;
			if(lock) this.viewComponent.prepend(div);
			break;
		case "on_item_click":
			var div1 = notification.getBody();
			this.viewComponent.append(div1);
			this.onSelectItems(div1,true);
			break;
		case "create_item":
			var ary_creates = notification.getBody();
			Lambda.foreach(ary_creates,function(c) {
				_g1.createItem(c);
				return true;
			});
			break;
		default:
			var _g11 = notification.getType();
			switch(_g11) {
			case "addItems":
				var tempItems = notification.getBody();
				Lambda.foreach(tempItems,function(c1) {
					_g1.createItem(c1);
					return true;
				});
				break;
			case "applyTransform":
				var tempItems1 = notification.getBody();
				var ary_items = tempItems1.map(function(tempItem) {
					var model = _g1.getItemFromPoolById(tempItem.id);
					model.pos = tempItem.pos.slice();
					return model;
				});
				this.doMoveItem(ary_items);
				break;
			case "applyRotateForward":
				var ary_items1 = this.receiveItemToLocalModel(notification.getBody());
				Main.doAction("rotateForward",ary_items1);
				break;
			case "applyRotateBackward":
				var ary_items2 = this.receiveItemToLocalModel(notification.getBody());
				Main.doAction("rotateBackward",ary_items2);
				break;
			case "applyViewerOwner":
				var ary_items3 = this.receiveItemToLocalModel(notification.getBody());
				Main.doAction("setOwner",ary_items3);
				Main.doAction("setViewer",ary_items3);
				break;
			case "applyFlip":
				var ary_items4 = this.receiveItemToLocalModel(notification.getBody());
				Main.doAction("flip",ary_items4);
				break;
			}
		}
	}
	,receiveItemToLocalModel: function(ary_receive) {
		var _g = this;
		return ary_receive.map(function(tempItem) {
			return _g.getItemFromPoolById(tempItem.id);
		});
	}
	,createItem: function(model) {
		var item;
		var _g = model.type;
		switch(_g) {
		case "card":
			item = new view_CardItem(model.id,Main.createItemDiv(model.type,model));
			break;
		case "map":
			item = new view_CardItem(model.id,Main.createItemDiv(model.type,model));
			break;
		default:
			item = new view_BasicItem(model.id,Main.createItemDiv(model.type,model));
		}
		item.viewComponent.css("left",model.pos[0] + "px");
		item.viewComponent.css("top",model.pos[1] + "px");
		this.facade.registerMediator(item);
		this.viewComponent.append(item.viewComponent);
		this.ary_allItem.push(model);
	}
	,onBodyKeyUp: function(e) {
		this.sendNotification(controller_MainController.on_press,null,e.which);
		var _g = e.which;
		switch(_g) {
		case 69:
			this.doSortingItem();
			Main.doAction("list",this.ary_select,{ pos_mouse : this.pos_mouse});
			break;
		case 87:
			Main.doAction("reverse",this.ary_select,{ pos_mouse : this.pos_mouse});
			break;
		case 81:
			Main.doAction("shuffle",this.ary_select,{ pos_mouse : this.pos_mouse});
			break;
		case 68:
			this.selectMyItem();
			break;
		case 83:
			if(this.isList) Main.doAction("together",this.ary_select,{ pos_mouse : this.pos_mouse}); else Main.doAction("list",this.ary_select,{ pos_mouse : this.pos_mouse});
			this.isList = !this.isList;
			break;
		case 67:
			Main.doAction("setOwner",this.ary_select);
			break;
		case 86:
			Main.doAction("setViewer",this.ary_select);
			break;
		case 65:
			this.doMoveItem(this.ary_select.slice(0));
			break;
		case 70:
			Main.doAction("flip",this.ary_select);
			break;
		case 88:
			Main.doAction("rotateForward",this.ary_select);
			break;
		case 90:
			Main.doAction("rotateBackward",this.ary_select);
			break;
		case 76:
			Main.doAction("lock",this.ary_select);
			break;
		}
	}
	,onSelectItems: function(ary,selectLock) {
		if(selectLock == null) selectLock = false;
		var _g = this;
		this.ary_select = ary.map(function(model) {
			return _g.getItemFromPoolById(model.id);
		});
		if(!selectLock) this.ary_select = this.filterLock(this.ary_select);
		this.sendNotification(controller_MainController.on_select_cards,{ ary_select : this.ary_select});
	}
	,selectMyItem: function() {
		this.ary_select = this.filterLock(this.getMyItemFromPool());
		this.sendNotification(controller_MainController.on_select_cards,{ ary_select : this.ary_select});
	}
	,doSortingItem: function() {
		var collectobj = { };
		Lambda.foreach(this.ary_select,function(card) {
			if(Reflect.field(collectobj,card.cardId) == null) collectobj[card.cardId] = [];
			Reflect.field(collectobj,card.cardId).push(card);
			return true;
		});
		var newary = [];
		var _g = 0;
		var _g1 = Reflect.fields(collectobj);
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			newary = newary.concat(Reflect.field(collectobj,c));
		}
		this.ary_select = newary;
	}
	,filterLock: function(ary) {
		var nary = Lambda.fold(ary,function(curr,first) {
			if(!curr.lock) first.push(curr);
			return first;
		},[]);
		return nary;
	}
	,onBodyMouseMove: function(e) {
		this.pos_mouse[0] = e.pageX;
		this.pos_mouse[1] = e.pageY;
	}
	,getItemFromPoolById: function(id) {
		return this.ary_allItem.filter(function(model) {
			return id == model.id;
		})[0];
	}
	,getMyItemFromPool: function() {
		return this.ary_allItem.filter(function(model) {
			return Main.playerId == model.owner;
		});
	}
	,doMoveItem: function(ary_items) {
		var moveTarget = { };
		ary_items.sort(function(ac,bc) {
			if(ac.pos[0] < bc.pos[0]) return -1;
			return 1;
		});
		moveTarget.x = ary_items[0].pos[0];
		ary_items.sort(function(ac1,bc1) {
			if(ac1.pos[1] < bc1.pos[1]) return -1;
			return 1;
		});
		moveTarget.y = ary_items[0].pos[1];
		var offset_0 = this.pos_mouse[0] - moveTarget.x;
		var offset_1 = this.pos_mouse[1] - moveTarget.y;
		Lambda.foreach(this.ary_select,function(select) {
			select.pos[0] += offset_0;
			select.pos[1] += offset_1;
			return true;
		});
		Main.doAction("move",ary_items);
	}
	,__class__: controller_MainController
});
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
var haxe_Log = function() { };
haxe_Log.__name__ = true;
haxe_Log.trace = function(v,infos) {
	js_Boot.__trace(v,infos);
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
	}
	,exists: function(key) {
		if(__map_reserved[key] != null) return this.existsReserved(key);
		return this.h.hasOwnProperty(key);
	}
	,setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) return null; else return this.rh["$" + key];
	}
	,existsReserved: function(key) {
		if(this.rh == null) return false;
		return this.rh.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		if(__map_reserved[key] != null) {
			key = "$" + key;
			if(this.rh == null || !this.rh.hasOwnProperty(key)) return false;
			delete(this.rh[key]);
			return true;
		} else {
			if(!this.h.hasOwnProperty(key)) return false;
			delete(this.h[key]);
			return true;
		}
	}
	,__class__: haxe_ds_StringMap
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js_Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js_Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js_Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js_Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) return o; else throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var org_puremvc_haxe_interfaces_IController = function() { };
org_puremvc_haxe_interfaces_IController.__name__ = true;
org_puremvc_haxe_interfaces_IController.prototype = {
	__class__: org_puremvc_haxe_interfaces_IController
};
var org_puremvc_haxe_core_Controller = function() {
	org_puremvc_haxe_core_Controller.instance = this;
	this.commandMap = new haxe_ds_StringMap();
	this.initializeController();
};
org_puremvc_haxe_core_Controller.__name__ = true;
org_puremvc_haxe_core_Controller.__interfaces__ = [org_puremvc_haxe_interfaces_IController];
org_puremvc_haxe_core_Controller.getInstance = function() {
	if(org_puremvc_haxe_core_Controller.instance == null) org_puremvc_haxe_core_Controller.instance = new org_puremvc_haxe_core_Controller();
	return org_puremvc_haxe_core_Controller.instance;
};
org_puremvc_haxe_core_Controller.prototype = {
	initializeController: function() {
		this.view = org_puremvc_haxe_core_View.getInstance();
	}
	,executeCommand: function(note) {
		var commandClassRef = this.commandMap.get(note.getName());
		if(commandClassRef == null) return;
		var commandInstance = Type.createInstance(commandClassRef,[]);
		commandInstance.execute(note);
	}
	,registerCommand: function(notificationName,commandClassRef) {
		if(!this.commandMap.exists(notificationName)) this.view.registerObserver(notificationName,new org_puremvc_haxe_patterns_observer_Observer($bind(this,this.executeCommand),this));
		this.commandMap.set(notificationName,commandClassRef);
	}
	,hasCommand: function(notificationName) {
		return this.commandMap.exists(notificationName);
	}
	,removeCommand: function(notificationName) {
		if(this.hasCommand(notificationName)) {
			this.view.removeObserver(notificationName,this);
			this.commandMap.remove(notificationName);
		}
	}
	,__class__: org_puremvc_haxe_core_Controller
};
var org_puremvc_haxe_interfaces_IModel = function() { };
org_puremvc_haxe_interfaces_IModel.__name__ = true;
org_puremvc_haxe_interfaces_IModel.prototype = {
	__class__: org_puremvc_haxe_interfaces_IModel
};
var org_puremvc_haxe_core_Model = function() {
	org_puremvc_haxe_core_Model.instance = this;
	this.proxyMap = new haxe_ds_StringMap();
	this.initializeModel();
};
org_puremvc_haxe_core_Model.__name__ = true;
org_puremvc_haxe_core_Model.__interfaces__ = [org_puremvc_haxe_interfaces_IModel];
org_puremvc_haxe_core_Model.getInstance = function() {
	if(org_puremvc_haxe_core_Model.instance == null) org_puremvc_haxe_core_Model.instance = new org_puremvc_haxe_core_Model();
	return org_puremvc_haxe_core_Model.instance;
};
org_puremvc_haxe_core_Model.prototype = {
	initializeModel: function() {
	}
	,registerProxy: function(proxy) {
		this.proxyMap.set(proxy.getProxyName(),proxy);
		proxy.onRegister();
	}
	,retrieveProxy: function(proxyName) {
		return this.proxyMap.get(proxyName);
	}
	,hasProxy: function(proxyName) {
		return this.proxyMap.exists(proxyName);
	}
	,removeProxy: function(proxyName) {
		var proxy = this.proxyMap.get(proxyName);
		if(proxy != null) {
			this.proxyMap.remove(proxyName);
			proxy.onRemove();
		}
		return proxy;
	}
	,__class__: org_puremvc_haxe_core_Model
};
var org_puremvc_haxe_interfaces_IView = function() { };
org_puremvc_haxe_interfaces_IView.__name__ = true;
org_puremvc_haxe_interfaces_IView.prototype = {
	__class__: org_puremvc_haxe_interfaces_IView
};
var org_puremvc_haxe_core_View = function() {
	org_puremvc_haxe_core_View.instance = this;
	this.mediatorMap = new haxe_ds_StringMap();
	this.observerMap = new haxe_ds_StringMap();
	this.initializeView();
};
org_puremvc_haxe_core_View.__name__ = true;
org_puremvc_haxe_core_View.__interfaces__ = [org_puremvc_haxe_interfaces_IView];
org_puremvc_haxe_core_View.getInstance = function() {
	if(org_puremvc_haxe_core_View.instance == null) org_puremvc_haxe_core_View.instance = new org_puremvc_haxe_core_View();
	return org_puremvc_haxe_core_View.instance;
};
org_puremvc_haxe_core_View.prototype = {
	initializeView: function() {
	}
	,registerObserver: function(notificationName,observer) {
		if(!this.observerMap.exists(notificationName)) this.observerMap.set(notificationName,new List());
		this.observerMap.get(notificationName).add(observer);
	}
	,notifyObservers: function(notification) {
		if(this.observerMap.exists(notification.getName())) {
			var observers_ref = this.observerMap.get(notification.getName());
			var observers = new List();
			var iterator_ref = new _$List_ListIterator(observers_ref.h);
			while( iterator_ref.hasNext() ) {
				var observer = iterator_ref.next();
				observers.add(observer);
			}
			var iterator = new _$List_ListIterator(observers.h);
			while( iterator.hasNext() ) {
				var observer1 = iterator.next();
				observer1.notifyObserver(notification);
			}
		}
	}
	,removeObserver: function(notificationName,notifyContext) {
		var observers = this.observerMap.get(notificationName);
		var _g_head = observers.h;
		var _g_val = null;
		while(_g_head != null) {
			var observer;
			observer = (function($this) {
				var $r;
				_g_val = _g_head[0];
				_g_head = _g_head[1];
				$r = _g_val;
				return $r;
			}(this));
			if(observer.compareNotifyContext(notifyContext) == true) {
				observers.remove(observer);
				break;
			}
		}
		if(observers.isEmpty()) this.observerMap.remove(notificationName);
	}
	,registerMediator: function(mediator) {
		if(this.mediatorMap.exists(mediator.getMediatorName())) return;
		this.mediatorMap.set(mediator.getMediatorName(),mediator);
		var interests = mediator.listNotificationInterests();
		if(interests.length > 0) {
			var observer = new org_puremvc_haxe_patterns_observer_Observer($bind(mediator,mediator.handleNotification),mediator);
			var _g1 = 0;
			var _g = interests.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.registerObserver(interests[i],observer);
			}
		}
		mediator.onRegister();
	}
	,retrieveMediator: function(mediatorName) {
		return this.mediatorMap.get(mediatorName);
	}
	,removeMediator: function(mediatorName) {
		var mediator = this.mediatorMap.get(mediatorName);
		if(mediator != null) {
			var interests = mediator.listNotificationInterests();
			var _g1 = 0;
			var _g = interests.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.removeObserver(interests[i],mediator);
			}
			this.mediatorMap.remove(mediatorName);
			mediator.onRemove();
		}
		return mediator;
	}
	,hasMediator: function(mediatorName) {
		return this.mediatorMap.exists(mediatorName);
	}
	,__class__: org_puremvc_haxe_core_View
};
var org_puremvc_haxe_interfaces_ICommand = function() { };
org_puremvc_haxe_interfaces_ICommand.__name__ = true;
org_puremvc_haxe_interfaces_ICommand.prototype = {
	__class__: org_puremvc_haxe_interfaces_ICommand
};
var org_puremvc_haxe_interfaces_IFacade = function() { };
org_puremvc_haxe_interfaces_IFacade.__name__ = true;
org_puremvc_haxe_interfaces_IFacade.prototype = {
	__class__: org_puremvc_haxe_interfaces_IFacade
};
var org_puremvc_haxe_interfaces_INotification = function() { };
org_puremvc_haxe_interfaces_INotification.__name__ = true;
org_puremvc_haxe_interfaces_INotification.prototype = {
	__class__: org_puremvc_haxe_interfaces_INotification
};
var org_puremvc_haxe_interfaces_IObserver = function() { };
org_puremvc_haxe_interfaces_IObserver.__name__ = true;
org_puremvc_haxe_interfaces_IObserver.prototype = {
	__class__: org_puremvc_haxe_interfaces_IObserver
};
var org_puremvc_haxe_interfaces_IProxy = function() { };
org_puremvc_haxe_interfaces_IProxy.__name__ = true;
org_puremvc_haxe_interfaces_IProxy.prototype = {
	__class__: org_puremvc_haxe_interfaces_IProxy
};
var org_puremvc_haxe_patterns_facade_Facade = function() {
	org_puremvc_haxe_patterns_facade_Facade.instance = this;
	this.initializeFacade();
};
org_puremvc_haxe_patterns_facade_Facade.__name__ = true;
org_puremvc_haxe_patterns_facade_Facade.__interfaces__ = [org_puremvc_haxe_interfaces_IFacade];
org_puremvc_haxe_patterns_facade_Facade.getInstance = function() {
	if(org_puremvc_haxe_patterns_facade_Facade.instance == null) org_puremvc_haxe_patterns_facade_Facade.instance = new org_puremvc_haxe_patterns_facade_Facade();
	return org_puremvc_haxe_patterns_facade_Facade.instance;
};
org_puremvc_haxe_patterns_facade_Facade.prototype = {
	initializeFacade: function() {
		this.initializeModel();
		this.initializeController();
		this.initializeView();
	}
	,initializeController: function() {
		if(this.controller != null) return;
		this.controller = org_puremvc_haxe_core_Controller.getInstance();
	}
	,initializeModel: function() {
		if(this.model != null) return;
		this.model = org_puremvc_haxe_core_Model.getInstance();
	}
	,initializeView: function() {
		if(this.view != null) return;
		this.view = org_puremvc_haxe_core_View.getInstance();
	}
	,registerCommand: function(notificationName,commandClassRef) {
		this.controller.registerCommand(notificationName,commandClassRef);
	}
	,removeCommand: function(notificationName) {
		this.controller.removeCommand(notificationName);
	}
	,hasCommand: function(notificationName) {
		return this.controller.hasCommand(notificationName);
	}
	,registerProxy: function(proxy) {
		this.model.registerProxy(proxy);
	}
	,retrieveProxy: function(proxyName) {
		return this.model.retrieveProxy(proxyName);
	}
	,removeProxy: function(proxyName) {
		var proxy = null;
		if(this.model != null) proxy = this.model.removeProxy(proxyName);
		return proxy;
	}
	,hasProxy: function(proxyName) {
		return this.model.hasProxy(proxyName);
	}
	,registerMediator: function(mediator) {
		if(this.view != null) this.view.registerMediator(mediator);
	}
	,retrieveMediator: function(mediatorName) {
		return this.view.retrieveMediator(mediatorName);
	}
	,removeMediator: function(mediatorName) {
		var mediator = null;
		if(this.view != null) mediator = this.view.removeMediator(mediatorName);
		return mediator;
	}
	,hasMediator: function(mediatorName) {
		return this.view.hasMediator(mediatorName);
	}
	,sendNotification: function(notificationName,body,type) {
		this.notifyObservers(new org_puremvc_haxe_patterns_observer_Notification(notificationName,body,type));
	}
	,notifyObservers: function(notification) {
		if(this.view != null) this.view.notifyObservers(notification);
	}
	,__class__: org_puremvc_haxe_patterns_facade_Facade
};
var org_puremvc_haxe_patterns_observer_Notification = function(name,body,type) {
	this.name = name;
	if(body != null) this.body = body;
	if(type != null) this.type = type;
};
org_puremvc_haxe_patterns_observer_Notification.__name__ = true;
org_puremvc_haxe_patterns_observer_Notification.__interfaces__ = [org_puremvc_haxe_interfaces_INotification];
org_puremvc_haxe_patterns_observer_Notification.prototype = {
	getName: function() {
		return this.name;
	}
	,setBody: function(body) {
		this.body = body;
	}
	,getBody: function() {
		return this.body;
	}
	,setType: function(type) {
		this.type = type;
	}
	,getType: function() {
		return this.type;
	}
	,toString: function() {
		var msg = "Notification Name: " + this.getName();
		msg += "\nBody:" + (this.body == null?"null":this.body.toString());
		msg += "\nType:" + (this.type == null?"null":this.type);
		return msg;
	}
	,__class__: org_puremvc_haxe_patterns_observer_Notification
};
var org_puremvc_haxe_patterns_observer_Observer = function(notifyMethod,notifyContext) {
	this.setNotifyMethod(notifyMethod);
	this.setNotifyContext(notifyContext);
};
org_puremvc_haxe_patterns_observer_Observer.__name__ = true;
org_puremvc_haxe_patterns_observer_Observer.__interfaces__ = [org_puremvc_haxe_interfaces_IObserver];
org_puremvc_haxe_patterns_observer_Observer.prototype = {
	setNotifyMethod: function(notifyMethod) {
		this.notify = notifyMethod;
	}
	,setNotifyContext: function(notifyContext) {
		this.context = notifyContext;
	}
	,getNotifyMethod: function() {
		return this.notify;
	}
	,getNotifyContext: function() {
		return this.context;
	}
	,notifyObserver: function(notification) {
		(this.getNotifyMethod())(notification);
	}
	,compareNotifyContext: function(object) {
		return object == this.context;
	}
	,__class__: org_puremvc_haxe_patterns_observer_Observer
};
var view_IItem = function() { };
view_IItem.__name__ = true;
view_IItem.prototype = {
	__class__: view_IItem
};
var view_BasicItem = function(mediatorName,viewComponent) {
	this._owner = false;
	this._viewer = false;
	this._filp = true;
	var _g = this;
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
	viewComponent.click(function(e) {
		_g.sendNotification(view_BasicItem.on_item_click,[viewComponent[0]]);
		_g.onSelect([viewComponent[0]]);
	});
};
view_BasicItem.__name__ = true;
view_BasicItem.__interfaces__ = [view_IItem];
view_BasicItem.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
view_BasicItem.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	lock: function(l) {
		if(l) this.viewComponent.find("#img_lock").show(); else this.viewComponent.find("#img_lock").hide();
		this.sendNotification(view_BasicItem.on_item_lock,{ view : this.viewComponent, lock : l});
	}
	,flip: function(f) {
		this._filp = f;
		this.checkViewerAndShowCard();
	}
	,focus: function(f) {
		if(f) this.viewComponent.addClass("focus"); else this.viewComponent.removeClass("focus");
	}
	,move: function(x,y) {
		this.viewComponent.animate({ left : x, top : y});
	}
	,rotateForward: function(sd,ed) {
	}
	,rotateBackward: function(sd,ed) {
	}
	,setViewer: function(v) {
		this._viewer = v;
		if(this._viewer) this.viewComponent.find("#txt_viewer").show(); else this.viewComponent.find("#txt_viewer").hide();
		this.checkViewerAndShowCard();
	}
	,setOwner: function(o) {
		this._owner = o;
		if(this._owner) this.viewComponent.find("#txt_owner").show(); else this.viewComponent.find("#txt_owner").hide();
		this.checkViewerAndShowCard();
	}
	,getViewer: function() {
		return this._viewer;
	}
	,getOwner: function() {
		return this._owner;
	}
	,listNotificationInterests: function() {
		return [controller_MainController.on_select_cards];
	}
	,handleNotification: function(notification) {
		var _g = notification.getName();
		switch(_g) {
		case "on_select_cards":
			this.onSelect(Reflect.field(notification.getBody(),"ary_select"));
			break;
		}
	}
	,checkViewerAndShowCard: function() {
		if(!this._filp) this.showItemForMe(); else if(this._viewer && this._owner) this.showItemForMe(); else this.hideItemForMe();
	}
	,showItemForMe: function() {
		this.viewComponent.find(".card_back").hide();
	}
	,hideItemForMe: function() {
		this.viewComponent.find(".card_back").show();
	}
	,onSelect: function(ary_select) {
		this.focus(false);
		if(this.checkSelf(ary_select)) this.focus(true);
	}
	,checkSelf: function(ary_select) {
		if(ary_select == null) return false;
		var isSelf = false;
		var _g1 = 0;
		var _g = ary_select.length;
		while(_g1 < _g) {
			var i = _g1++;
			var div = ary_select[i];
			var itemId = div.id;
			if(itemId == this.getMediatorName()) {
				isSelf = true;
				return isSelf;
			}
		}
		return isSelf;
	}
	,rotateAnimation: function(sd,ed) {
		var _g = this;
		Main.j({ deg : sd}).animate({ deg : ed},{ duration : 300, step : function(now) {
			_g.rotate(now);
		}});
	}
	,rotate: function(d) {
		this.getViewComponent().css({ '-moz-transform' : "rotate(" + d + "deg)", '-webkit-transform' : "rotate(" + d + "deg)", '-o-transform' : "rotate(" + d + "deg)", '-ms-transform' : "rotate(" + d + "deg)", 'transform' : "rotate(" + d + "deg)"});
	}
	,__class__: view_BasicItem
});
var view_CardItem = function(mediatorName,viewComponent) {
	view_BasicItem.call(this,mediatorName,viewComponent);
};
view_CardItem.__name__ = true;
view_CardItem.__super__ = view_BasicItem;
view_CardItem.prototype = $extend(view_BasicItem.prototype,{
	rotateForward: function(sd,ed) {
		this.rotateAnimation(sd,ed);
	}
	,rotateBackward: function(sd,ed) {
		this.rotateAnimation(sd,ed);
	}
	,__class__: view_CardItem
});
var view_MapItem = function(mediatorName,viewComponent) {
	view_BasicItem.call(this,mediatorName,viewComponent);
};
view_MapItem.__name__ = true;
view_MapItem.__interfaces__ = [view_IItem];
view_MapItem.__super__ = view_BasicItem;
view_MapItem.prototype = $extend(view_BasicItem.prototype,{
	rotateForward: function(sd,ed) {
		this.rotateAnimation(sd,ed);
	}
	,rotateBackward: function(sd,ed) {
		this.rotateAnimation(sd,ed);
	}
	,__class__: view_MapItem
});
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
if(Array.prototype.map == null) Array.prototype.map = function(f) {
	var a = [];
	var _g1 = 0;
	var _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		a[i] = f(this[i]);
	}
	return a;
};
if(Array.prototype.filter == null) Array.prototype.filter = function(f1) {
	var a1 = [];
	var _g11 = 0;
	var _g2 = this.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		var e = this[i1];
		if(f1(e)) a1.push(e);
	}
	return a1;
};
var __map_reserved = {}
Main.j = $;
Main.playerId = "vic";
Main.ary_sendMessage = [];
Main.isSending = false;
Main.tempItem = { type : "card", width : 200, height : 200, pos : [Math.floor(Math.random() * 600),Math.floor(Math.random() * 600)], back : true, deg : 0, lock : false, owner : "desktop", viewer : "", id : Main.createDivId()};
org_puremvc_haxe_patterns_mediator_Mediator.NAME = "Mediator";
controller_MainController.create_item = "create_item";
controller_MainController.on_receiveMessage = "on_receiveMessage";
controller_MainController.on_select_cards = "on_select_cards";
controller_MainController.on_press = "on_press";
js_Boot.__toStr = {}.toString;
view_BasicItem.on_item_click = "on_item_click";
view_BasicItem.on_item_lock = "on_item_lock";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=haxe.js.map