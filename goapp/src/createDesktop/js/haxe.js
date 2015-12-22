(function (console, $global) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
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
var Main = function() { };
Main.__name__ = true;
Main.main = function() {
	window.document.addEventListener("contextmenu",function(e) {
		e.preventDefault();
	},false);
	Main.j(window.document).ready(function() {
		org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new controller_MainController("",Main.j("#container_cards")));
		org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new controller_UIController("UIController",Main.j(".easyui-layout")));
	});
	Reflect.setField(window,"onHtmlClick",Main.onHtmlClick);
};
Main.messageSocket = function(type,msg) {
	var messageSingle = function(toId,_type,_msg) {
		channel.sendChannelMessage(toId,JSON.stringify({ type : _type, msg : JSON.parse(JSON.stringify(_msg))}),Main.handleResponse(function(ret) {
			haxe_Log.trace(ret,{ fileName : "Main.hx", lineNumber : 63, className : "Main", methodName : "messageSocket"});
		}));
	};
	if(Main.ary_ops == null) return;
	Lambda.foreach(Main.ary_ops,function(op) {
		messageSingle(op,type,msg);
		return true;
	});
};
Main.createItem = function(extra,pos,type,width,height,back,lock,owner,viewer) {
	if(viewer == null) viewer = "";
	if(owner == null) owner = "desktop";
	if(lock == null) lock = false;
	if(back == null) back = true;
	if(height == null) height = 100;
	if(width == null) width = 100;
	if(type == null) type = "card";
	return { type : type, width : width, height : height, pos : pos, back : back, deg : 0, lock : lock, owner : owner, viewer : viewer, id : Main.createDivId(), extra : extra, action : { sequence : Math.random()}};
};
Main.createSocket = function(id) {
	api.createChannel(id,{ onopen : function() {
		haxe_Log.trace("ok",{ fileName : "Main.hx", lineNumber : 118, className : "Main", methodName : "createSocket"});
	}, onmessage : function(json) {
		haxe_Log.trace(json,{ fileName : "Main.hx", lineNumber : 121, className : "Main", methodName : "createSocket"});
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(controller_MainController.on_receiveMessage,json.msg,json.type);
	}, onerror : function() {
	}, onclose : function() {
	}});
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
Main.setSelectable = function(dom,s) {
	if(s) dom.addClass("lock"); else dom.removeClass("lock");
};
Main.handleResponse = function(cb) {
	return function(err,ret) {
		if(err != null) Main.alert(err); else cb(ret);
	};
};
Main.onHtmlClick = function(type) {
	org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(type);
};
Math.__name__ = true;
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
Reflect.setField = function(o,field,value) {
	o[field] = value;
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
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
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
		_g.onSelectItems(ary);
		_g.zsorting();
	});
	Main.j("body").mousemove($bind(this,this.onBodyMouseMove));
	Main.j("body").keyup($bind(this,this.onBodyKeyUp));
	Main.j("body").mousedown($bind(this,this.onBodyKeyUp));
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
			Main.messageSocket("addItems",ary_creates);
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
			case "deleteItem":
				var localModel = this.receiveItemToLocalModel(notification.getBody());
				this.deleteModel(localModel);
				this.deleteView(localModel);
				break;
			case "applyTransform":
				this.updateView(this.updateModel(notification.getBody()));
				break;
			}
		}
	}
	,updateModel: function(ary_receive) {
		var _g = this;
		return ary_receive.map(function(receive) {
			var model = _g.getItemFromPoolById(receive.id);
			model.pos = receive.pos.slice();
			model.deg = receive.deg;
			model.owner = receive.owner;
			model.viewer = receive.viewer;
			model.back = receive.back;
			model.lock = receive.lock;
			model.action = receive.action;
			return model;
		});
	}
	,updateView: function(ary_item) {
		var _g = this;
		var updateRotate = function(item,dom,itemModel) {
			if(dom.attr("deg") == null) item.rotate(0,itemModel.deg); else {
				var oldDegree = dom.attr("deg");
				if(oldDegree != itemModel.deg) item.rotate(oldDegree,itemModel.deg);
			}
			dom.attr("deg",itemModel.deg);
		};
		var updateAction = function(item1,itemModel1) {
			item1.action(itemModel1.action);
		};
		var updateMove = function(item2,dom1,itemModel2) {
			var dom_pos_0 = StringTools.replace(dom1.css("left"),"px","");
			var dom_pos_1 = StringTools.replace(dom1.css("top"),"px","");
			if(dom_pos_0 != itemModel2.pos[0] || dom_pos_1 != itemModel2.pos[1]) item2.move(itemModel2.pos[0],itemModel2.pos[1]);
		};
		var updateOwner = function(item3,itemModel3) {
			item3.setOwner(itemModel3.owner);
		};
		var updateViewer = function(item4,itemModel4) {
			item4.setViewer(itemModel4.viewer);
		};
		var updateFlip = function(item5,itemModel5) {
			item5.flip(itemModel5.back);
		};
		var updateLock = function(item6,itemModel6) {
			item6.lock(itemModel6.lock);
		};
		Lambda.foreach(ary_item,function(itemModel7) {
			var item7;
			item7 = js_Boot.__cast(_g.facade.retrieveMediator(itemModel7.id) , view_IItem);
			var dom2 = _g.facade.retrieveMediator(itemModel7.id).getViewComponent();
			updateRotate(item7,dom2,itemModel7);
			updateMove(item7,dom2,itemModel7);
			updateOwner(item7,itemModel7);
			updateViewer(item7,itemModel7);
			updateFlip(item7,itemModel7);
			updateLock(item7,itemModel7);
			updateAction(item7,itemModel7);
			dom2.appendTo(dom2.parent());
			return true;
		});
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
		case "sequence":
			item = new view_SequenceItem(model.id,Main.createItemDiv(model.type,model));
			break;
		case "token":
			item = new view_TokenItem(model.id,Main.createItemDiv(model.type,model));
			break;
		default:
			item = new view_BasicItem(model.id,Main.createItemDiv(model.type,model));
		}
		item.viewComponent.css("left",model.pos[0] + "px");
		item.viewComponent.css("top",model.pos[1] + "px");
		this.facade.registerMediator(item);
		this.viewComponent.append(item.viewComponent);
		(js_Boot.__cast(item , view_IItem)).setOwner(model.owner);
		(js_Boot.__cast(item , view_IItem)).setViewer(model.viewer);
		(js_Boot.__cast(item , view_IItem)).flip(model.back);
		(js_Boot.__cast(item , view_IItem)).action(model.action);
		this.ary_allItem.push(model);
	}
	,onBodyKeyUp: function(e) {
		this.sendNotification(controller_MainController.on_press,null,e.which);
		var _g = e.which;
		switch(_g) {
		case 68:
			break;
		case 75:
			break;
		default:
			if(this.ary_select.length == 0) return;
		}
		var _g1 = Std.parseInt(e.which);
		if(_g1 != null) switch(_g1) {
		case 72:
			this.deleteModel(this.ary_select);
			this.deleteView(this.ary_select);
			break;
		case 84:
			this.actionModel();
			this.updateView(this.ary_select);
			break;
		case 65:case 3:
			this.moveModel();
			this.updateView(this.ary_select);
			break;
		case 88:
			this.rotateModel(90);
			this.updateView(this.ary_select);
			break;
		case 90:
			this.rotateModel(-90);
			this.updateView(this.ary_select);
			break;
		case 69:
			this.sortModel();
			this.listModel();
			this.updateView(this.ary_select);
			break;
		case 87:
			this.reverseModel();
			this.togetherModel();
			this.updateView(this.ary_select);
			break;
		case 81:
			this.shuffleModel();
			this.togetherModel();
			this.updateView(this.ary_select);
			break;
		case 67:
			this.setModelOwner();
			this.updateView(this.ary_select);
			break;
		case 68:
			this.selectMyItem();
			this.updateView(this.ary_select);
			break;
		case 83:
			if(this.isList) this.togetherModel(); else this.listModel();
			this.isList = !this.isList;
			this.updateView(this.ary_select);
			break;
		case 86:
			this.setModelViewer();
			this.updateView(this.ary_select);
			break;
		case 70:
			this.flipModel();
			this.updateView(this.ary_select);
			break;
		case 76:
			this.setModelLock();
			this.updateView(this.ary_select);
			break;
		case 75:
			this.unlockAllItem();
			this.updateView(this.ary_allItem);
			break;
		}
		var _g2 = e.which;
		switch(_g2) {
		case 72:
			Main.messageSocket("deleteItem",this.ary_select);
			break;
		case 75:
			Main.messageSocket("applyTransform",this.ary_allItem);
			break;
		default:
			Main.messageSocket("applyTransform",this.ary_select);
		}
	}
	,rotateModel: function(deg) {
		Lambda.foreach(this.ary_select,function(item) {
			item.deg += deg;
			return true;
		});
	}
	,onSelectItems: function(ary,selectLock) {
		if(selectLock == null) selectLock = false;
		var _g = this;
		this.ary_select = ary.map(function(model) {
			return _g.getItemFromPoolById(model.id);
		});
		if(!selectLock) this.ary_select = this.filterLock(this.ary_select);
		this.sendNotification(controller_MainController.on_select_cards,{ ary_select : this.ary_select});
		Main.messageSocket("applyTransform",this.ary_select);
	}
	,selectMyItem: function() {
		this.ary_select = this.filterLock(this.getMyItemFromPool());
		this.sendNotification(controller_MainController.on_select_cards,{ ary_select : this.ary_select});
	}
	,sortModel: function() {
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
	,setModelLock: function() {
		var _g1 = 0;
		var _g = this.ary_select.length;
		while(_g1 < _g) {
			var i = _g1++;
			var itemModel = this.ary_select[i];
			if(itemModel.owner == "" || itemModel.owner == Main.playerId) itemModel.lock = !itemModel.lock; else continue;
		}
	}
	,unlockAllItem: function() {
		var _g1 = 0;
		var _g = this.ary_allItem.length;
		while(_g1 < _g) {
			var i = _g1++;
			var itemModel = this.ary_allItem[i];
			if(itemModel.owner == "" || itemModel.owner == Main.playerId) itemModel.lock = false; else continue;
		}
	}
	,setModelOwner: function() {
		var _g1 = 0;
		var _g = this.ary_select.length;
		while(_g1 < _g) {
			var i = _g1++;
			var itemModel = this.ary_select[i];
			var item;
			item = js_Boot.__cast(this.facade.retrieveMediator(itemModel.id) , view_IItem);
			if(itemModel.owner == Main.playerId) itemModel.owner = ""; else if(itemModel.owner == "") itemModel.owner = Main.playerId; else {
			}
		}
	}
	,setModelViewer: function() {
		var _g1 = 0;
		var _g = this.ary_select.length;
		while(_g1 < _g) {
			var i = _g1++;
			var itemModel = this.ary_select[i];
			var item;
			item = js_Boot.__cast(this.facade.retrieveMediator(itemModel.id) , view_IItem);
			if(itemModel.viewer == Main.playerId) itemModel.viewer = ""; else {
				itemModel.viewer = Main.playerId;
				if(itemModel.viewer == "") itemModel.viewer = Main.playerId;
			}
		}
	}
	,listModel: function() {
		var info = this.collectInfo(this.ary_select);
		var _g1 = 0;
		var _g = this.ary_select.length;
		while(_g1 < _g) {
			var i = _g1++;
			var itemModel = this.ary_select[i];
			itemModel.pos[0] = i % 10 * (Reflect.field(info,"mw") + 4) + this.pos_mouse[0];
			itemModel.pos[1] = Math.floor(i / 10) * (Reflect.field(info,"mh") + 4) + this.pos_mouse[1];
		}
	}
	,togetherModel: function() {
		var _g1 = 0;
		var _g = this.ary_select.length;
		while(_g1 < _g) {
			var i = _g1++;
			var itemModel = this.ary_select[i];
			itemModel.pos[0] = i * 2 + this.pos_mouse[0];
			itemModel.pos[1] = i * 2 + this.pos_mouse[1];
		}
	}
	,flipModel: function() {
		var _g1 = 0;
		var _g = this.ary_select.length;
		while(_g1 < _g) {
			var i = _g1++;
			var itemModel = this.ary_select[i];
			if(itemModel.owner == "" || itemModel.owner == Main.playerId) itemModel.back = !itemModel.back; else continue;
		}
	}
	,zsorting: function() {
		var _g1 = 0;
		var _g = this.ary_select.length;
		while(_g1 < _g) {
			var i = _g1++;
			var dom = this.facade.retrieveMediator(this.ary_select[i].id).getViewComponent();
			dom.appendTo(dom.parent());
		}
	}
	,shuffleModel: function() {
		this.ary_select.sort(function(a,b) {
			if(Math.random() > .5) return 1; else return -1;
		});
	}
	,reverseModel: function() {
		this.ary_select.reverse();
	}
	,collectInfo: function(ary_item) {
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
	,actionModel: function() {
		Lambda.foreach(this.ary_select,function(item) {
			var _g = item.type;
			switch(_g) {
			case "sequence":
				item.action.sequence = Math.random();
				break;
			default:
			}
			return true;
		});
	}
	,deleteModel: function(ary_receive) {
		var _g = this;
		Lambda.foreach(ary_receive,function(removeItem) {
			var rid = HxOverrides.indexOf(_g.ary_allItem,removeItem,0);
			_g.ary_allItem.splice(rid,1);
			return true;
		});
	}
	,deleteView: function(ary_receive) {
		var _g = this;
		Lambda.foreach(ary_receive,function(removeItem) {
			_g.facade.retrieveMediator(removeItem.id).getViewComponent().remove();
			return true;
		});
	}
	,moveModel: function() {
		var moveTarget = { };
		this.ary_select.sort(function(ac,bc) {
			if(ac.pos[0] < bc.pos[0]) return -1;
			return 1;
		});
		moveTarget.x = this.ary_select[0].pos[0];
		this.ary_select.sort(function(ac1,bc1) {
			if(ac1.pos[1] < bc1.pos[1]) return -1;
			return 1;
		});
		moveTarget.y = this.ary_select[0].pos[1];
		var offset_0 = this.pos_mouse[0] - moveTarget.x;
		var offset_1 = this.pos_mouse[1] - moveTarget.y;
		Lambda.foreach(this.ary_select,function(select) {
			select.pos[0] += offset_0;
			select.pos[1] += offset_1;
			return true;
		});
	}
	,__class__: controller_MainController
});
var controller_UIController = function(mediatorName,viewComponent) {
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
};
controller_UIController.__name__ = true;
controller_UIController.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
controller_UIController.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return [Main.onBtnStartServer,Main.onBtnPokerClick];
	}
	,handleNotification: function(notification) {
		var _g = notification.getName();
		switch(_g) {
		case "onBtnStartServer":
			this.startServer();
			break;
		case "onBtnPokerClick":
			this.createPoker();
			break;
		}
	}
	,createPoker: function() {
		var ary_create = [Main.createItem(["../common/images/createTable/yh/yh_03.jpg","../common/images/createTable/yh/yh_20.jpg"],[50,50],"card",100,200,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_13.jpg","../common/images/createTable/yh/yh_20.jpg"],[50,50],"card",100,200,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_14.jpg","../common/images/createTable/yh/yh_20.jpg"],[50,50],"card",100,200,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_19.jpg","../common/images/createTable/yh/yh_20.jpg"],[50,50],"card",100,200,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_35.jpg","../common/images/createTable/yh/yh_20.jpg"],[50,50],"card",100,200,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_37.jpg","../common/images/createTable/yh/yh_20.jpg"],[50,50],"card",100,200,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_39.jpg","../common/images/createTable/yh/yh_20.jpg"],[50,50],"card",100,200,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_41.jpg","../common/images/createTable/yh/yh_20.jpg"],[50,50],"card",100,200,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_01.jpg","../common/images/createTable/yh/yh_12.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_05.jpg","../common/images/createTable/yh/yh_12.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_06.jpg","../common/images/createTable/yh/yh_12.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_07.jpg","../common/images/createTable/yh/yh_12.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_08.jpg","../common/images/createTable/yh/yh_12.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_09.jpg","../common/images/createTable/yh/yh_12.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_10.jpg","../common/images/createTable/yh/yh_12.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_11.jpg","../common/images/createTable/yh/yh_12.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_15.jpg","../common/images/createTable/yh/yh_12.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_38.jpg","../common/images/createTable/yh/yh_12.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_42.jpg","../common/images/createTable/yh/yh_12.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_46.jpg","../common/images/createTable/yh/yh_12.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_47.jpg","../common/images/createTable/yh/yh_12.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_53.jpg","../common/images/createTable/yh/yh_12.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_54.jpg","../common/images/createTable/yh/yh_12.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_55.jpg","../common/images/createTable/yh/yh_12.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_02.jpg","../common/images/createTable/yh/yh_49.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_04.jpg","../common/images/createTable/yh/yh_49.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_17.jpg","../common/images/createTable/yh/yh_49.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_18.jpg","../common/images/createTable/yh/yh_49.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_21.jpg","../common/images/createTable/yh/yh_49.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_34.jpg","../common/images/createTable/yh/yh_49.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_36.jpg","../common/images/createTable/yh/yh_49.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_40.jpg","../common/images/createTable/yh/yh_49.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_43.jpg","../common/images/createTable/yh/yh_49.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_44.jpg","../common/images/createTable/yh/yh_49.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_45.jpg","../common/images/createTable/yh/yh_49.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_49.jpg","../common/images/createTable/yh/yh_49.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_50.jpg","../common/images/createTable/yh/yh_49.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_51.jpg","../common/images/createTable/yh/yh_49.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_52.jpg","../common/images/createTable/yh/yh_49.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_22.jpg","../common/images/createTable/yh/yh_56.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_23.jpg","../common/images/createTable/yh/yh_56.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_24.jpg","../common/images/createTable/yh/yh_56.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_25.jpg","../common/images/createTable/yh/yh_56.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_26.jpg","../common/images/createTable/yh/yh_56.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_27.jpg","../common/images/createTable/yh/yh_56.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_28.jpg","../common/images/createTable/yh/yh_56.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_29.jpg","../common/images/createTable/yh/yh_56.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_30.jpg","../common/images/createTable/yh/yh_56.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_31.jpg","../common/images/createTable/yh/yh_56.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_32.jpg","../common/images/createTable/yh/yh_56.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_33.jpg","../common/images/createTable/yh/yh_56.jpg"],[50,50],"card",100,100,false,false,Main.playerId),Main.createItem(["../common/images/createTable/yh/yh_16.jpg","../common/images/createTable/yh/yh_49.jpg"],[50,50],"card",900,900,false,false,Main.playerId),Main.createItem(["../common/images/createTable/other/role_01.png"],[50,50],"token",99,141,false,false,Main.playerId),Main.createItem(["../common/images/createTable/other/role_04.png"],[50,50],"token",196,146,false,false,Main.playerId),Main.createItem(["../common/images/createTable/other/dice_01.png","../common/images/createTable/other/dice_02.png","../common/images/createTable/other/dice_03.png","../common/images/createTable/other/dice_04.png","../common/images/createTable/other/dice_05.png","../common/images/createTable/other/dice_06.png"],[50,50],"sequence",50,50,false,false,Main.playerId)];
		this.facade.sendNotification(controller_MainController.create_item,ary_create);
	}
	,startServer: function() {
		var playerId = this.viewComponent.find("#txt_id").textbox("getValue");
		if(playerId == "") return;
		Main.playerId = playerId;
		Main.createSocket(playerId);
		var ops = this.viewComponent.find("#combo_ops").combobox("getValue");
		Main.ary_ops = ops.split(",");
	}
	,__class__: controller_UIController
});
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
var haxe_Log = function() { };
haxe_Log.__name__ = true;
haxe_Log.trace = function(v,infos) {
	js_Boot.__trace(v,infos);
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe_Timer
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
	this._owner = "";
	this._viewer = "";
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
	action: function(value) {
	}
	,lock: function(l) {
		if(l) this.viewComponent.find("#img_lock").show(); else this.viewComponent.find("#img_lock").hide();
		Main.setSelectable(this.viewComponent,l);
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
	,rotate: function(sd,ed) {
		this.rotateAnimation(sd,ed);
	}
	,setViewer: function(v) {
		this._viewer = v;
		this.checkViewerAndShowCard();
	}
	,setOwner: function(o) {
		this._owner = o;
		if(this._owner == Main.playerId) this.viewComponent.find("#img_owner").show(); else this.viewComponent.find("#img_owner").hide();
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
		var showViewerImg = false;
		var showRedback = false;
		if(!this._filp) this.showItemForMe(); else if(this._viewer == this._owner) {
			if(this._viewer == Main.playerId) {
				this.showItemForMe();
				showViewerImg = true;
			} else {
				this.hideItemForMe();
				if(this._viewer != "") showRedback = true;
			}
		} else this.hideItemForMe();
		if(this._owner == "") this.viewComponent.css("opacity",.5); else this.viewComponent.css("opacity",1);
		if(showViewerImg) this.viewComponent.find("#img_viewer").show(); else this.viewComponent.find("#img_viewer").hide();
		if(showRedback) this.viewComponent.find("#mc_see").show(); else this.viewComponent.find("#mc_see").hide();
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
			_g.getViewComponent().css({ '-moz-transform' : "rotate(" + now + "deg)", '-webkit-transform' : "rotate(" + now + "deg)", '-o-transform' : "rotate(" + now + "deg)", '-ms-transform' : "rotate(" + now + "deg)", 'transform' : "rotate(" + now + "deg)"});
		}});
	}
	,__class__: view_BasicItem
});
var view_CardItem = function(mediatorName,viewComponent) {
	haxe_Log.trace(mediatorName,{ fileName : "CardItem.hx", lineNumber : 11, className : "view.CardItem", methodName : "new", customParams : [viewComponent]});
	view_BasicItem.call(this,mediatorName,viewComponent);
};
view_CardItem.__name__ = true;
view_CardItem.__super__ = view_BasicItem;
view_CardItem.prototype = $extend(view_BasicItem.prototype,{
	__class__: view_CardItem
});
var view_SequenceItem = function(mediatorName,viewComponent) {
	view_BasicItem.call(this,mediatorName,viewComponent);
};
view_SequenceItem.__name__ = true;
view_SequenceItem.__super__ = view_BasicItem;
view_SequenceItem.prototype = $extend(view_BasicItem.prototype,{
	action: function(value) {
		var mc_seqs = this.viewComponent.find("#mc_seqs");
		var count = mc_seqs.children().length;
		var showTarget = function(index) {
			mc_seqs.find("img").hide();
			mc_seqs.children().eq(index).show();
		};
		haxe_Log.trace(value.sequence,{ fileName : "SequenceItem.hx", lineNumber : 27, className : "view.SequenceItem", methodName : "action", customParams : [this.viewComponent.attr("action")]});
		if(this.viewComponent.attr("action") == null || this.viewComponent.attr("action") != value.sequence) {
			var _g = 0;
			while(_g < 30) {
				var i = [_g++];
				haxe_Timer.delay((function(i) {
					return function() {
						if(i[0] == 29) showTarget(Math.floor(value.sequence * count)); else showTarget(Math.floor(Math.random() * count));
					};
				})(i),i[0] * 10);
			}
			this.viewComponent.attr("action",value.sequence);
		}
	}
	,__class__: view_SequenceItem
});
var view_TokenItem = function(mediatorName,viewComponent) {
	view_BasicItem.call(this,mediatorName,viewComponent);
};
view_TokenItem.__name__ = true;
view_TokenItem.__super__ = view_BasicItem;
view_TokenItem.prototype = $extend(view_BasicItem.prototype,{
	flip: function(f) {
	}
	,setOwner: function(o) {
	}
	,setViewer: function(v) {
	}
	,__class__: view_TokenItem
});
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
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
Main.onBtnStartServer = "onBtnStartServer";
Main.onBtnPokerClick = "onBtnPokerClick";
Main.playerId = "smart";
Main.ary_sendMessage = [];
Main.isSending = false;
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