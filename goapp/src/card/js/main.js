(function (console) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Animate = function() { };
Animate.__name__ = true;
Animate.addCardAndPrepare = function(cards) {
	return function() {
		var d = Main.j.Deferred();
		Main.ary_cards = Main.ary_cards.concat(cards);
		Lambda.foreach(Main.ary_cards,function(card) {
			Main.createCard(card);
			return true;
		});
		haxe_Log.trace(Main.ary_cards,{ fileName : "Animate.hx", lineNumber : 21, className : "Animate", methodName : "addCardAndPrepare"});
		Lambda.foreach(cards,function(card1) {
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(model_Model.on_state_change,{ select : card1, showOwner : Main.playerId == card1.owner, seeCard : card1.owner == card1.relate},"owner_change");
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(model_Model.on_state_change,{ select : card1, showRelate : Main.playerId == card1.relate, seeCard : card1.owner == card1.relate},"relate_change");
			return true;
		});
		haxe_Timer.delay(function() {
			d.resolve();
		},1000);
		return d;
	};
};
Animate.addCards = function(cards) {
	return function() {
		var d = Main.j.Deferred();
		Lambda.foreach(cards,function(card) {
			Main.createCard(card);
			return true;
		});
		haxe_Timer.delay(function() {
			d.resolve();
		},1000);
		return d;
	};
};
Animate.list = function(ary_select,pos_mouse) {
	return function() {
		var d = Main.j.Deferred();
		Main.listCard(ary_select,pos_mouse);
		haxe_Timer.delay(function() {
			d.resolve();
		},1000);
		return d;
	};
};
Animate.listSeparate = function(ary_select,pos_mouse) {
	return function() {
		var d = Main.j.Deferred();
		Main.listSeparate(ary_select,pos_mouse);
		haxe_Timer.delay(function() {
			d.resolve();
		},1000);
		return d;
	};
};
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
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
Lambda.array = function(it) {
	var a = [];
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
};
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
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
};
Lambda.find = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var v = $it0.next();
		if(f(v)) return v;
	}
	return null;
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
};
var Main = function() {
	this.lastPromise = null;
	var _g = this;
	haxe_Log.trace("playerId",{ fileName : "Main.hx", lineNumber : 28, className : "Main", methodName : "new", customParams : [Main.playerId]});
	org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new model_Model("model"));
	org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new mediator_Layer("layer",{ body : Main.j(window.document.body), container_cards : Main.j("#container_cards")}));
	Main.createUser({ FBID : Main.playerId, Name : Main.playerId},Main.handleResponse(function(ret) {
		_g.appStart();
		_g.callForOthers(function() {
			haxe_Log.trace(Main.otherPlayerId,{ fileName : "Main.hx", lineNumber : 39, className : "Main", methodName : "new"});
			Main.installPollMessageCallback({ FBID : Main.playerId},Main.handleResponse($bind(_g,_g.onBackCallback)));
			_g.createSelfStack();
		});
	}));
};
Main.__name__ = true;
Main.messageAll = function(content) {
	Lambda.foreach(Main.otherPlayerId,function(id) {
		Main.message({ FBID : Main.playerId, TargetUser : id, Content : JSON.stringify(content)},Main.handleResponse(function(ret) {
			haxe_Log.trace("on_message_cb",{ fileName : "Main.hx", lineNumber : 65, className : "Main", methodName : "messageAll", customParams : [ret]});
		}));
		return true;
	});
};
Main.createCard = function(model) {
	org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new mediator_Card(model.id,Main.tmpl_card.tmpl(model)));
};
Main.listCard = function(ary_select,pos_mouse) {
	Lambda.foreach(ary_select,function(select) {
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(model_Model.on_state_change,{ select : select, mouse : pos_mouse, pos : Lambda.indexOf(ary_select,select), count : ary_select.length},"list");
		return true;
	});
};
Main.listSeparate = function(ary_select,pos_mouse) {
	Lambda.foreach(ary_select,function(select) {
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(model_Model.on_state_change,{ select : select, mouse : pos_mouse, pos : Lambda.indexOf(ary_select,select), count : ary_select.length},"list_separate");
		return true;
	});
};
Main.getCardsById = function(id) {
	return Lambda.find(Main.ary_cards,function(card) {
		return id == card.id;
	});
};
Main.createUser = function(data,cb) {
	api.createUser(data,cb);
};
Main.users = function(cb) {
	api.users(cb);
};
Main.message = function(data,cb) {
	api.message(data,cb);
};
Main.installPollMessageCallback = function(data,cb) {
	api.installPollMessageCallback(data,cb);
};
Main.handleResponse = function(cb) {
	return function(err,ret) {
		haxe_Log.trace("handleResponse",{ fileName : "Main.hx", lineNumber : 284, className : "Main", methodName : "handleResponse", customParams : [err]});
		if(err != null) js_Browser.alert(err); else cb(ret);
	};
};
Main.main = function() {
	new Main();
};
Main.getId = function() {
	return leo.utils.generateUUID();
};
Main.prototype = {
	createSelfStack: function() {
		var stack;
		var _g = [];
		var _g1 = 0;
		while(_g1 < 30) {
			var i = _g1++;
			_g.push({ id : Main.getId(), name : i, owner : Main.playerId, relate : ""});
		}
		stack = _g;
		(Animate.addCardAndPrepare(stack))().done(function() {
			Main.messageAll({ cmd : "addCards", content : stack});
			haxe_Log.trace(Main.ary_cards,{ fileName : "Main.hx", lineNumber : 53, className : "Main", methodName : "createSelfStack"});
		});
	}
	,onBackCallback: function(ret) {
		var _g = this;
		var prev = this.lastPromise;
		Lambda.foreach(ret.Info,function(info) {
			_g.lastPromise = _g.callAction(JSON.parse(info.Content));
			if(prev != null) prev.pipe(_g.lastPromise);
			prev = _g.lastPromise;
			return true;
		});
		if(this.lastPromise != null) this.lastPromise().done(function() {
			_g.lastPromise = null;
		});
	}
	,callAction: function(content) {
		haxe_Log.trace("cmd",{ fileName : "Main.hx", lineNumber : 123, className : "Main", methodName : "callAction", customParams : [content.cmd]});
		var _g = content.cmd;
		switch(_g) {
		case "addCards":
			return Animate.addCardAndPrepare(content.content);
		case "listCard":
			return Animate.list(content.content.ary_select,content.content.pos_mouse);
		case "listSeparate":
			return Animate.listSeparate(content.content.ary_select,content.content.pos_mouse);
		default:
			return null;
		}
	}
	,callForOthers: function(cb) {
		var _g = this;
		Main.users(Main.handleResponse(function(ret) {
			if(ret.Info != null && ret.Info.length >= 2) {
				Lambda.fold(ret.Info,function(item,curr) {
					if(item.Key != Main.playerId) curr.push(item.Key);
					return curr;
				},Main.otherPlayerId);
				cb();
			} else haxe_Timer.delay(function() {
				_g.callForOthers(cb);
			},1000);
		}));
	}
	,appStart: function() {
	}
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
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
var js_Browser = function() { };
js_Browser.__name__ = true;
js_Browser.alert = function(v) {
	window.alert(js_Boot.__string_rec(v,""));
};
var org_puremvc_haxe_interfaces_INotifier = function() { };
org_puremvc_haxe_interfaces_INotifier.__name__ = true;
var org_puremvc_haxe_patterns_observer_Notifier = function() {
	this.facade = org_puremvc_haxe_patterns_facade_Facade.getInstance();
};
org_puremvc_haxe_patterns_observer_Notifier.__name__ = true;
org_puremvc_haxe_patterns_observer_Notifier.__interfaces__ = [org_puremvc_haxe_interfaces_INotifier];
org_puremvc_haxe_patterns_observer_Notifier.prototype = {
	sendNotification: function(notificationName,body,type) {
		this.facade.sendNotification(notificationName,body,type);
	}
};
var org_puremvc_haxe_interfaces_IMediator = function() { };
org_puremvc_haxe_interfaces_IMediator.__name__ = true;
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
});
var mediator_Card = function(mediatorName,viewComponent) {
	this._see = false;
	this._back = true;
	this._focus = false;
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
};
mediator_Card.__name__ = true;
mediator_Card.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
mediator_Card.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	onRegister: function() {
		this.sendNotification(mediator_Card.card_enter,this.getViewComponent());
		this.getViewComponent().click($bind(this,this.onCardClick));
		this.getViewComponent().mousedown($bind(this,this.onCardMouseDown));
	}
	,onRemove: function() {
		org_puremvc_haxe_patterns_mediator_Mediator.prototype.onRemove.call(this);
		this.getViewComponent().off("click");
	}
	,listNotificationInterests: function() {
		return [model_Model.on_card_flip_change,model_Model.on_state_change,model_Model.on_select_cards];
	}
	,handleNotification: function(notification) {
		var _g1 = this;
		var _g = notification.getName();
		switch(_g) {
		case "on_model_select_cards":
			this.focusCard(false);
			Lambda.foreach(Lambda.array(notification.getBody().ary_select),function(dom) {
				if(Main.j(dom).attr("id") == _g1.getMediatorName()) _g1.focusCard();
				return true;
			});
			break;
		case "on_state_change":
			var _g11 = notification.getType();
			switch(_g11) {
			case "owner_change":
				if(!this.checkSelf(notification.getBody().select.id)) return;
				this.showOnwer(notification.getBody().showOwner);
				this.seeCard(notification.getBody().seeCard);
				break;
			case "relate_change":
				if(!this.checkSelf(notification.getBody().select.id)) return;
				this.showRelate(notification.getBody().showRelate);
				this.seeCard(notification.getBody().seeCard);
				break;
			case "list":
				if(!this.checkSelf(notification.getBody().select.id)) return;
				this.sendNotification(mediator_Card.card_enter,this.getViewComponent());
				this.listStack(notification.getBody().mouse,notification.getBody().pos,2,2,notification.getBody().count);
				break;
			case "list_separate":
				haxe_Log.trace(notification.getBody(),{ fileName : "Card.hx", lineNumber : 76, className : "mediator.Card", methodName : "handleNotification"});
				if(!this.checkSelf(notification.getBody().select.id)) return;
				this.listStackSeprate(notification.getBody().mouse,notification.getBody().pos,100,100,notification.getBody().count);
				break;
			case "list_shuffle":
				if(!this.checkSelf(notification.getBody().select.id)) return;
				this.sendNotification(mediator_Card.card_enter,this.getViewComponent());
				this.listStack(notification.getBody().mouse,notification.getBody().pos,2,2,notification.getBody().count);
				break;
			}
			break;
		case "on_card_flip_change":
			haxe_Log.trace("ccc",{ fileName : "Card.hx", lineNumber : 86, className : "mediator.Card", methodName : "handleNotification", customParams : [notification.getBody().select.id]});
			if(!this.checkSelf(notification.getBody().select.id)) return;
			haxe_Log.trace("ccc",{ fileName : "Card.hx", lineNumber : 88, className : "mediator.Card", methodName : "handleNotification"});
			this.flip(notification.getBody().flip);
			break;
		}
	}
	,showOnwer: function(show) {
		if(show) this.getViewComponent().find("#img_owner").show(); else this.getViewComponent().find("#img_owner").hide();
	}
	,showRelate: function(show) {
		if(show) this.getViewComponent().find("#img_relate").show(); else this.getViewComponent().find("#img_relate").hide();
	}
	,listStack: function(initpos,pos,x,y,count) {
		this.moveCard(initpos[0] + pos * x,initpos[1] - pos * y);
	}
	,listStackSeprate: function(initpos,pos,x,y,count) {
		this.moveCard(initpos[0] + pos % 10 * x,initpos[1] + Math.floor(pos / 10) * y);
	}
	,checkSelf: function(id) {
		return this.getMediatorName() == id;
	}
	,moveCard: function(x,y) {
		this.getViewComponent().animate({ left : x, top : y});
	}
	,focusCard: function(focus) {
		if(focus != null) this._focus = focus; else this._focus = !this._focus;
		if(this._focus) this.getViewComponent().addClass("card_focus"); else this.getViewComponent().removeClass("card_focus");
	}
	,onCardClick: function(e) {
		this.focusCard();
		this.sendNotification(mediator_Card.card_click,{ id : this.getMediatorName(), focus : this._focus});
		this.sendNotification(mediator_Card.card_enter,this.getViewComponent());
	}
	,onCardMouseDown: function(e) {
		this.sendNotification(mediator_Card.card_down,{ id : this.getMediatorName()});
	}
	,flip: function(value) {
		if(value != null) this._back = value; else this._back = !this._back;
		this.setView();
	}
	,setView: function() {
		if(this._see) this.getViewComponent().find(".card_back").hide(); else if(this._back) this.getViewComponent().find(".card_back").show(); else this.getViewComponent().find(".card_back").hide();
		if(this._back) this.getViewComponent().find("#img_back").show(); else this.getViewComponent().find("#img_back").hide();
	}
	,seeCard: function(see) {
		this._see = see;
		this.setView();
	}
	,setState: function(state) {
		this.getViewComponent().find("#txt_state").html(state);
	}
});
var mediator_Layer = function(mediatorName,viewComponent) {
	this._currentMoveCardId = "";
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
	this._container_cards = viewComponent.container_cards;
	this._body = viewComponent.body;
};
mediator_Layer.__name__ = true;
mediator_Layer.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
mediator_Layer.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	onRegister: function() {
		var _g = this;
		org_puremvc_haxe_patterns_mediator_Mediator.prototype.onRegister.call(this);
		this._body.keyup($bind(this,this.onBodyKeyUp));
		this._body.mousemove($bind(this,this.onBodyMouseMove));
		this._body.mouseup($bind(this,this.onBodyMouseUp));
		leo.utils.initRectSelect(function(ary) {
			_g.sendNotification(mediator_Layer.on_select_cards,{ ary_select : ary});
		});
	}
	,listNotificationInterests: function() {
		return [model_Model.on_card_enter,mediator_Card.card_down];
	}
	,handleNotification: function(notification) {
		var _g = notification.getName();
		switch(_g) {
		case "on_card_enter":
			this._container_cards.append(notification.getBody());
			break;
		case "card_down":
			this._currentMoveCardId = notification.getBody().id;
			break;
		}
	}
	,onBodyMouseMove: function(e) {
		this.sendNotification(mediator_Layer.on_body_mousemove,{ x : e.pageX, y : e.pageY});
	}
	,onBodyMouseUp: function(e) {
		haxe_Log.trace(e.pageX,{ fileName : "Layer.hx", lineNumber : 71, className : "mediator.Layer", methodName : "onBodyMouseUp"});
	}
	,onBodyKeyUp: function(e) {
		haxe_Log.trace(e.which,{ fileName : "Layer.hx", lineNumber : 75, className : "mediator.Layer", methodName : "onBodyKeyUp"});
		var _g = e.which;
		switch(_g) {
		case 67:
			this.sendNotification(mediator_Layer.on_press_c);
			break;
		case 86:
			this.sendNotification(mediator_Layer.on_press_v);
			break;
		case 82:
			this.sendNotification(mediator_Layer.on_press_r);
			break;
		case 65:
			this.sendNotification(mediator_Layer.on_press_a);
			break;
		case 76:
			this.sendNotification(mediator_Layer.on_press_l);
			break;
		case 83:
			this.sendNotification(mediator_Layer.on_press_s);
			break;
		case 77:
			this.sendNotification(mediator_Layer.on_press_m);
			break;
		case 70:
			this.sendNotification(mediator_Layer.on_press_f);
			break;
		case 13:
			this.sendNotification(mediator_Layer.on_press_enter);
			break;
		}
	}
});
var model_Model = function(mediatorName,viewComponent) {
	this.pos_mouse = [0,0];
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
};
model_Model.__name__ = true;
model_Model.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
model_Model.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return [mediator_Card.card_click,mediator_Card.card_enter,mediator_Layer.on_layout_mouse_up,mediator_Layer.on_press_f,mediator_Layer.on_press_s,mediator_Layer.on_press_l,mediator_Layer.on_press_a,mediator_Layer.on_press_r,mediator_Layer.on_press_c,mediator_Layer.on_press_v,mediator_Layer.on_press_enter,mediator_Layer.on_body_mousemove,mediator_Layer.on_select_cards];
	}
	,handleNotification: function(notification) {
		var _g1 = this;
		var _g = notification.getName();
		switch(_g) {
		case "on_select_cards":
			var ori = notification.getBody().ary_select;
			ori.sort(function(a,b) {
				var ax = Std.parseInt(StringTools.replace(Main.j(a).css("left"),"px",""));
				var ay = Std.parseInt(StringTools.replace(Main.j(a).css("top"),"px",""));
				var bx = Std.parseInt(StringTools.replace(Main.j(b).css("left"),"px",""));
				var by = Std.parseInt(StringTools.replace(Main.j(b).css("top"),"px",""));
				if(bx < ax) return 1;
				return -1;
			});
			ori.sort(function(a1,b1) {
				var ax1 = Std.parseInt(StringTools.replace(Main.j(a1).css("left"),"px",""));
				var ay1 = Std.parseInt(StringTools.replace(Main.j(a1).css("top"),"px",""));
				var bx1 = Std.parseInt(StringTools.replace(Main.j(b1).css("left"),"px",""));
				var by1 = Std.parseInt(StringTools.replace(Main.j(b1).css("top"),"px",""));
				if(by1 < ay1) return 1;
				return -1;
			});
			this.ary_select = Lambda.fold(ori,function(dom,curr) {
				curr.push(Main.getCardsById(Main.j(dom).attr("id")));
				return curr;
			},[]);
			haxe_Log.trace(this.ary_select,{ fileName : "Model.hx", lineNumber : 81, className : "model.Model", methodName : "handleNotification"});
			this.sendNotification(model_Model.on_select_cards,{ ary_select : this.ary_select});
			break;
		case "on_press_enter":
			this.sendNotification(model_Model.on_state_change,{ x : this.pos_mouse[0], y : this.pos_mouse[1]},"move");
			break;
		case "on_body_mousemove":
			this.pos_mouse[0] = notification.getBody().x;
			this.pos_mouse[1] = notification.getBody().y;
			break;
		case "card_enter":
			this.sendNotification(model_Model.on_card_enter,notification.getBody());
			break;
		case "card_click":
			if(notification.getBody().focus) this.ary_select = [Main.getCardsById(notification.getBody().id)]; else this.ary_select = [];
			this.sendNotification(model_Model.on_select_cards,{ ary_select : this.ary_select});
			break;
		case "on_layout_mouse_up":
			this.sendNotification(model_Model.on_card_move,notification.getBody());
			break;
		case "on_press_c":
			Lambda.foreach(this.ary_select,function(card) {
				var _g11 = card.owner;
				var owner = _g11;
				switch(_g11) {
				case "":
					card.owner = Main.playerId;
					break;
				default:
					if(owner == Main.playerId) card.owner = "";
				}
				var seeCard;
				var _g12 = card.owner;
				var owner1 = _g12;
				switch(_g12) {
				case "":
					seeCard = false;
					break;
				default:
					seeCard = owner1 == card.relate;
				}
				_g1.sendNotification(model_Model.on_state_change,{ select : card, showOwner : Main.playerId == card.owner, seeCard : seeCard},"owner_change");
				return true;
			});
			break;
		case "on_press_v":
			Lambda.foreach(this.ary_select,function(card1) {
				if(card1.owner != Main.playerId) return true;
				var _g13 = card1.relate;
				var relate = _g13;
				switch(_g13) {
				case "":
					card1.relate = Main.playerId;
					break;
				default:
					if(relate == Main.playerId) card1.relate = "";
				}
				var seeCard1;
				var _g14 = card1.owner;
				var owner2 = _g14;
				switch(_g14) {
				case "":
					seeCard1 = false;
					break;
				default:
					seeCard1 = owner2 == card1.relate;
				}
				_g1.sendNotification(model_Model.on_state_change,{ select : card1, showRelate : Main.playerId == card1.relate, seeCard : seeCard1},"relate_change");
				return true;
			});
			break;
		case "on_press_r":
			this.ary_select.reverse();
			Main.listSeparate(this.ary_select,this.pos_mouse);
			break;
		case "on_press_f":
			Lambda.foreach(this.ary_select,function(card2) {
				if(card2.owner != Main.playerId) return true;
				_g1.sendNotification(model_Model.on_card_flip_change,{ select : card2});
				return true;
			});
			break;
		case "on_press_l":
			Main.messageAll({ cmd : "listCard", content : { ary_select : this.ary_select, pos_mouse : this.pos_mouse}});
			Main.listCard(this.ary_select,this.pos_mouse);
			break;
		case "on_press_a":
			Main.messageAll({ cmd : "listSeparate", content : { ary_select : this.ary_select, pos_mouse : this.pos_mouse}});
			Main.listSeparate(this.ary_select,this.pos_mouse);
			break;
		case "on_press_s":
			this.ary_select.sort(function(a2,b2) {
				if(Math.random() > .5) return 1; else return -1;
			});
			Lambda.foreach(this.ary_select,function(select) {
				_g1.sendNotification(model_Model.on_state_change,{ select : select, mouse : _g1.pos_mouse, pos : Lambda.indexOf(_g1.ary_select,select)},"list_shuffle");
				return true;
			});
			break;
		}
	}
});
var org_puremvc_haxe_interfaces_IController = function() { };
org_puremvc_haxe_interfaces_IController.__name__ = true;
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
};
var org_puremvc_haxe_interfaces_IModel = function() { };
org_puremvc_haxe_interfaces_IModel.__name__ = true;
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
};
var org_puremvc_haxe_interfaces_IView = function() { };
org_puremvc_haxe_interfaces_IView.__name__ = true;
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
};
var org_puremvc_haxe_interfaces_ICommand = function() { };
org_puremvc_haxe_interfaces_ICommand.__name__ = true;
var org_puremvc_haxe_interfaces_IFacade = function() { };
org_puremvc_haxe_interfaces_IFacade.__name__ = true;
var org_puremvc_haxe_interfaces_INotification = function() { };
org_puremvc_haxe_interfaces_INotification.__name__ = true;
var org_puremvc_haxe_interfaces_IObserver = function() { };
org_puremvc_haxe_interfaces_IObserver.__name__ = true;
var org_puremvc_haxe_interfaces_IProxy = function() { };
org_puremvc_haxe_interfaces_IProxy.__name__ = true;
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
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
var __map_reserved = {}
Main.j = $;
Main.playerId = Main.getId();
Main.otherPlayerId = [];
Main.ary_cards = [];
Main.tmpl_card = Main.j("#tmpl_card");
org_puremvc_haxe_patterns_mediator_Mediator.NAME = "Mediator";
mediator_Card.card_click = "card_click";
mediator_Card.card_down = "card_down";
mediator_Card.card_enter = "card_enter";
mediator_Layer.on_layout_mouse_up = "on_layout_mouse_up";
mediator_Layer.on_select_cards = "on_select_cards";
mediator_Layer.on_press_f = "on_press_f";
mediator_Layer.on_press_m = "on_press_m";
mediator_Layer.on_press_s = "on_press_s";
mediator_Layer.on_press_l = "on_press_l";
mediator_Layer.on_press_a = "on_press_a";
mediator_Layer.on_press_r = "on_press_r";
mediator_Layer.on_press_c = "on_press_c";
mediator_Layer.on_press_v = "on_press_v";
mediator_Layer.on_press_enter = "on_press_enter";
mediator_Layer.on_body_mousemove = "on_body_mousemove";
model_Model.on_card_flip_change = "on_card_flip_change";
model_Model.on_card_enter = "on_card_enter";
model_Model.on_card_move = "on_card_move";
model_Model.on_state_change = "on_state_change";
model_Model.on_select_cards = "on_model_select_cards";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=main.js.map