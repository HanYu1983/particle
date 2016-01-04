(function (console) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Helper = function() { };
Helper.__name__ = true;
Helper.initFb = function(cb) {
	myapp.facebook.init("425311264344425",cb);
};
Helper.loginFb = function(cb) {
	myapp.facebook.login(function(ret) {
		cb(ret.authResponse.userID,ret.authResponse.accessToken);
	});
};
Helper.getUUID = function() {
	return leo.utils.generateUUID();
};
Helper.getCardsuits = function(fbid,token,cb) {
	cardSuit.load2(fbid,token,Helper.handleModel(function(ret) {
		cb(ret);
	}));
};
Helper.saveDeck = function(fbid,token,model,cb) {
	cardSuit.save2(fbid,token,model,Helper.handleModel(function(ret) {
		cb(ret);
	}));
};
Helper.createItem = function(model) {
	model.url = Helper.getImageUrlByGameAndId(model.game,model.cards[0]);
	return Helper.j("#tmpl_item").tmpl(model);
};
Helper.loadDetail = function(game,cb) {
	api.cardInfo(game,function(err,data) {
		cb(data);
	});
};
Helper.loadList = function(cb) {
	api.load(cb);
};
Helper.getImageUrlByGameAndId = function(game,id) {
	return api.cardimageurl(game,id);
};
Helper.createDetail = function(game,card) {
	switch(game) {
	case "sangoWar":
		card.url = Helper.getImageUrlByGameAndId(game,sangoWar.formatKey(card.id));
		break;
	default:
		card.url = Helper.getImageUrlByGameAndId(game,card.id);
	}
	if(card.url == null) card.url = "../common/images/card/cardback_0.png";
	var div = Helper.j("#tmpl_bigCard").tmpl(card);
	div.find("div[game]").hide();
	div.find("div[game=" + game + "]").show();
	div.attr("data",JSON.stringify(card));
	return div;
};
Helper.EnToCh = function(en) {
	switch(en) {
	case "army":
		return "軍武gogogo";
	case "gundamWar":
		return "鋼彈大戰";
	case "gundamWarN":
		return "鋼彈大戰Nex-A";
	case "sangoWar":
		return "三國志大戰";
	case "sgs":
		return "三國殺陣面對決";
	case "magic":
		return "魔法風雲會";
	case "battleSpirit":
		return "戰魂";
	case "crusade":
		return "Crusade";
	case "ws":
		return "黑白雙翼";
	case "dragonZ":
		return "七龍珠TCG";
	case "yugioh":
		return "遊戲王";
	case "high_speed":
		return "小快";
	case "middle_speed":
		return "中速";
	case "low_speed":
		return "後期";
	case "balance":
		return "均衡";
	case "control":
		return "控制";
	case "disgust":
		return "噁心";
	default:
		return "";
	}
};
Helper.isAdmin = function() {
	return admin.admin;
};
Helper.handleModel = function(func) {
	return function(err,ret) {
		if(err != null) {
			js_Browser.alert(err);
			window.location.reload();
		} else func(ret);
	};
};
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
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
var Main = function() { };
Main.__name__ = true;
Main.main = function() {
	var j = $;
	org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new view_ViewController("ViewController",j("body")));
	org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new model_ModelController("ModelController"));
	org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(view_ViewController.do_show_loading,{ show : true});
	Helper.initFb(function() {
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(model_ModelController.do_load_all_list);
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(view_ViewController.do_show_loading,{ show : false});
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(view_ViewController.do_enable_login,{ enable : true});
	});
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
var model_ModelController = function(mediatorName,viewComponent) {
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
};
model_ModelController.__name__ = true;
model_ModelController.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
model_ModelController.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return [view_ViewController.on_item_click,view_ViewController.on_item_over,view_ViewController.on_input_search_change,view_ViewController.on_pag_page_change,view_ViewController.on_btn_output_click,view_ViewController.on_btn_gotoDeckManager_click,view_ViewController.on_btn_gotoGroup_click,view_ViewController.on_btn_login_click,view_ViewController.on_btn_addDeck_click,view_ViewController.on_btn_saveDeck_click,model_ModelController.do_load_all_list];
	}
	,handleNotification: function(notification) {
		var _g1 = this;
		var _g = notification.getName();
		var str = _g;
		switch(_g) {
		case "on_btn_saveDeck_click":
			this.sendNotification(view_ViewController.do_show_loading,{ show : true});
			Helper.saveDeck(this.fbid,this.token,notification.getBody().savedata,function(ret) {
				_g1.sendNotification(view_ViewController.do_show_loading,{ show : false});
				_g1.sendNotification(model_ModelController.on_cardsuit_save_success);
				_g1.doLoadList();
			});
			break;
		case "on_btn_login_click":
			this.sendNotification(view_ViewController.do_show_loading,{ show : true});
			Helper.loginFb(function(fbid,token) {
				_g1.fbid = fbid;
				_g1.token = token;
				_g1.sendNotification(model_ModelController.on_facebook_login,{ fbid : fbid, token : token});
				Helper.getCardsuits(fbid,token,function(ret1) {
					_g1.sendNotification(model_ModelController.on_cardsuit_load,{ cardsuit : ret1});
					_g1.sendNotification(view_ViewController.do_show_loading,{ show : false});
				});
			});
			break;
		case "on_btn_gotoDeckManager_click":
			var _g11 = this.currentGame;
			switch(_g11) {
			case "yugioh":
				window.open("../card/manager_deck.html?game=yugioh&lang=ch","_blank");
				break;
			default:
				window.open("../card/manager_deck.html?game=" + this.currentGame,"_blank");
			}
			break;
		case "on_btn_gotoGroup_click":
			window.open("https://www.facebook.com/groups/1521526761495948/","_blank");
			break;
		case "on_btn_output_click":
			this.sendNotification(view_ViewController.do_show_output,{ str : this.currentOutputStr});
			break;
		case "on_pag_page_change":
			var page = Math.floor(notification.getBody().number - 1);
			this.sendNotification(view_ViewController.do_show_list,{ data : this.filterByPage(this.ary_result,page), total : this.ary_result.length});
			break;
		case "on_input_search_change":
			var searchConditions = notification.getBody().value;
			var showData = this.multiSearch(searchConditions);
			this.sendNotification(view_ViewController.do_show_list,{ data : this.filterByPage(showData,0), total : showData.length});
			break;
		case "on_item_over":
			var id = notification.getBody().id;
			var game = notification.getBody().game;
			this.sendNotification(view_ViewController.do_show_showDetail,{ showDetail : this.findDataById(this.data,id)});
			break;
		case "on_item_click":
			var id1 = notification.getBody().id;
			var game1 = notification.getBody().game;
			var cards = this.findDataById(this.data,id1).cards;
			this.currentGame = game1;
			this.currentOutputStr = JSON.stringify(cards);
			this.sendNotification(view_ViewController.do_show_loading,{ show : true});
			Helper.loadDetail(game1,function(data) {
				var ary_showData = cards.map(function(str1) {
					str1 = StringTools.replace(str1,".jpg","");
					var retobj = Lambda.find(data,function(oriData) {
						return oriData.id.indexOf(str1) != -1;
					});
					return retobj;
				});
				_g1.sendNotification(view_ViewController.do_show_loading,{ show : false});
				_g1.sendNotification(view_ViewController.do_show_bigList,{ game : game1, ary_showData : ary_showData});
			});
			break;
		default:
			if(str == model_ModelController.do_load_all_list) this.doLoadList();
		}
	}
	,doLoadList: function() {
		var _g = this;
		this.sendNotification(view_ViewController.do_show_loading,{ show : true});
		Helper.loadList(function(err,data) {
			_g.doSetData(data);
			_g.sendNotification(view_ViewController.do_show_loading,{ show : false});
		});
	}
	,doSetData: function(data) {
		this.oriDataToUseData(data);
		this.sendNotification(view_ViewController.do_show_list,{ data : this.filterByPage(data,0), total : data.length});
	}
	,filterByPage: function(from,page) {
		if(page == null) page = 0;
		var sid = page * 10;
		var eid;
		if(sid + 10 < from.length) eid = sid + 10; else eid = from.length;
		var _g = from.length;
		var l = _g;
		if(l < 10) return from.slice(0,from.length); else return from.slice(sid,eid);
	}
	,multiSearch: function(value) {
		var ret = null;
		var _g = 0;
		var _g1 = Reflect.fields(value);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			switch(f) {
			case "author":
				if(ret == null) ret = this.filterDataByAuthor(this.data,Reflect.field(value,f)); else ret = this.filterDataByAuthor(ret,Reflect.field(value,f));
				break;
			case "game":
				if(ret == null) ret = this.filterDataByGame(this.data,Reflect.field(value,f)); else ret = this.filterDataByGame(ret,Reflect.field(value,f));
				break;
			case "type":
				if(ret == null) ret = this.filterDataByType(this.data,Reflect.field(value,f)); else ret = this.filterDataByType(ret,Reflect.field(value,f));
				break;
			}
		}
		return this.ary_result = ret;
	}
	,findDataById: function(from,id) {
		return Lambda.find(from,function(item) {
			return item.id == id;
		});
	}
	,filterDataByAuthor: function(from,author) {
		return from.filter(function(obj) {
			return obj.author.indexOf(author) != -1;
		});
	}
	,filterDataByGame: function(from,game) {
		return from.filter(function(obj) {
			return game == "" || obj.game == game;
		});
	}
	,filterDataByType: function(from,type) {
		return from.filter(function(obj) {
			return type == "" || obj.type == type;
		});
	}
	,oriDataToUseData: function(ori) {
		this.data = ori.map(function(item) {
			item.id = Helper.getUUID();
			item.author = item.username;
			item.gameName = Helper.EnToCh(item.game);
			return item;
		});
		this.ary_result = this.data;
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
var view_ViewController = function(mediatorName,viewComponent) {
	this.j = $;
	var _g1 = this;
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
	this.mc_itemContainer = viewComponent.find("#mc_itemContainer");
	this.mc_bigItemContainer = viewComponent.find("#mc_bigItemContainer");
	this.mc_deckDetail = viewComponent.find("#mc_deckDetail");
	this.input_search = viewComponent.find("#input_search");
	this.slt_game = viewComponent.find("#slt_game");
	this.slt_type = viewComponent.find("#slt_type");
	this.pag_page = viewComponent.find("#pag_page");
	this.btn_output = viewComponent.find("#btn_output");
	this.btn_login = viewComponent.find("#btn_login");
	this.btn_addDeck = viewComponent.find("#btn_addDeck");
	this.btn_saveDeck = viewComponent.find("#btn_saveDeck");
	this.dia_output = viewComponent.find("#dia_output");
	this.mc_backContainer = viewComponent.find("#mc_backContainer");
	this.mc_deckContainer = viewComponent.find("#mc_deckContainer");
	Lambda.foreach((function($this) {
		var $r;
		var _g = [];
		{
			var _g11 = 0;
			while(_g11 < 49) {
				var i = _g11++;
				_g.push(i);
			}
		}
		$r = _g;
		return $r;
	}(this)),function(bid) {
		var useId = bid + 1;
		var url = "../common/images/card/cardback_" + useId + ".png";
		var div = _g1.j("#tmpl_back").tmpl({ id : useId, url : url});
		div.hide();
		_g1.mc_backContainer.append(div);
		return true;
	});
	this.input_search.textbox({ onChange : function(nv,ov) {
		_g1.sendNotification(view_ViewController.on_input_search_change,{ value : _g1.getSearchConditions()});
	}});
	this.slt_game.combobox({ onChange : function(nv1,ov1) {
		_g1.sendNotification(view_ViewController.on_input_search_change,{ value : _g1.getSearchConditions()});
	}});
	this.slt_type.combobox({ onChange : function(nv2,ov2) {
		_g1.sendNotification(view_ViewController.on_input_search_change,{ value : _g1.getSearchConditions()});
	}});
	this.pag_page.pagination({ onSelectPage : function(number,size) {
		_g1.sendNotification(view_ViewController.on_pag_page_change,{ number : number, size : size});
	}});
	this.dia_output.dialog();
	this.dia_output.find("#btn_gotoGroup").click(function() {
		_g1.sendNotification(view_ViewController.on_btn_gotoGroup_click);
	});
	this.dia_output.find("#btn_gotoDeckManager").click(function() {
		_g1.sendNotification(view_ViewController.on_btn_gotoDeckManager_click);
	});
	this.btn_output.click(function() {
		_g1.sendNotification(view_ViewController.on_btn_output_click);
	});
	this.btn_login.linkbutton({ onClick : function() {
		_g1.sendNotification(view_ViewController.on_btn_login_click);
	}});
	this.btn_addDeck.click(function() {
		_g1.addDeck({ game : "army", name : "default", backId : "0", cards : []});
		_g1.enableSave(true);
	});
	this.btn_saveDeck.click(function() {
		_g1.sendNotification(view_ViewController.on_btn_saveDeck_click,{ savedata : _g1.getSaveDataFromDom()});
	});
	this.hideCardBackContainer();
};
view_ViewController.__name__ = true;
view_ViewController.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
view_ViewController.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return [view_ViewController.do_show_list,view_ViewController.do_show_bigList,view_ViewController.do_show_showDetail,view_ViewController.do_show_loading,view_ViewController.do_show_output,view_ViewController.do_enable_login,model_ModelController.on_facebook_login,model_ModelController.on_cardsuit_load,model_ModelController.on_cardsuit_save_success];
	}
	,handleNotification: function(notification) {
		var _g = notification.getName();
		var str = _g;
		var str1 = _g;
		var str2 = _g;
		var str3 = _g;
		var str4 = _g;
		var str5 = _g;
		switch(_g) {
		case "on_cardsuit_save_success":
			this.showMessage("存檔成功");
			this.enableSave(false);
			break;
		case "on_cardsuit_load":
			this.showDeckList(notification.getBody().cardsuit,true);
			this.enableAddDeck(true);
			this.showAllCardback();
			break;
		case "on_facebook_login":
			this.enableLogin(false);
			this.showMessage("登入成功");
			break;
		default:
			if(str == view_ViewController.do_enable_login) this.enableLogin(notification.getBody().enable); else if(str1 == view_ViewController.do_show_output) {
				if(notification.getBody().str == null) this.alert("請選擇套牌哦!"); else this.setOutput(notification.getBody().str);
			} else if(str2 == view_ViewController.do_show_loading) this.showLoading(notification.getBody().show); else if(str3 == view_ViewController.do_show_bigList) this.showBigList(notification.getBody().game,notification.getBody().ary_showData); else if(str4 == view_ViewController.do_show_list) {
				this.setPagPage(notification.getBody().total);
				this.showList(notification.getBody().data);
			} else if(str5 == view_ViewController.do_show_showDetail) this.showDetail(notification.getBody().showDetail);
		}
	}
	,showDeckList: function(retModel,sort) {
		if(sort == null) sort = false;
		var _g = this;
		var oldtop = this.mc_deckContainer.parent().parent().scrollTop();
		this.mc_deckContainer.empty();
		if(sort) retModel.cardSuit.sort(function(aobj,bobj) {
			return aobj.game.localeCompare(bobj.game);
		});
		retModel.cardSuit.forEach(function(deck) {
			_g.addDeck(deck);
		});
		this.mc_deckContainer.parent().parent().scrollTop(oldtop);
	}
	,getSaveDataFromDom: function() {
		var _g = this;
		var savefile = { cardSuit : []};
		this.mc_deckContainer.children().each(function(id,dom) {
			dom = _g.j(dom);
			var cardstr = dom.find("#txt_cards").textbox("getValue");
			cardstr = "[" + cardstr + "]";
			savefile.cardSuit.push({ name : dom.find("#txt_name").textbox("getValue"), game : dom.find(".easyui-combobox").combobox("getValue"), cards : JSON.parse(cardstr), backId : dom.find("#txt_back").textbox("getValue"), 'public' : dom.find("#btn_public").hasClass("l-btn-selected")});
		});
		return savefile;
	}
	,addDeck: function(deckModel) {
		var _g = this;
		var dom = this.j("#tmpl_deck").tmpl(deckModel);
		this.mc_deckContainer.append(dom);
		dom.find("#btn_public").linkbutton({ selected : Reflect.field(deckModel,"public") == null?false:Reflect.field(deckModel,"public"), onClick : function() {
			_g.enableSave(true);
		}});
		dom.find(".easyui-linkbutton").linkbutton();
		dom.find("#btn_remove").linkbutton({ onClick : function() {
			var _this = _g.j($(this));
			_this.parent().remove();
			_g.enableSave(true);
		}});
		dom.find(".easyui-combobox").combobox({ value : deckModel.game, onSelect : function() {
			_g.enableSave(true);
		}});
		dom.find(".easyui-textbox").textbox({ onChange : function(nv,ov) {
			var _this1 = $(this);
			var _g1 = _this1.attr("id");
			switch(_g1) {
			case "txt_cards":
				try {
					JSON.parse("[" + nv + "]");
					_g.enableSave(true);
				} catch( e ) {
					if (e instanceof js__$Boot_HaxeError) e = e.val;
					_g.alert("格式輸入錯誤，請檢查");
					_this1.textbox({ value : ""});
				}
				break;
			default:
				_g.enableSave(true);
			}
		}});
		var cardstr = (function() {
			var str = JSON.stringify(deckModel.cards);
			str = HxOverrides.substr(str,1,str.length - 2);
			return str;
		})();
		dom.find("#txt_cards").textbox({ value : cardstr});
		dom.find("#txt_name").textbox({ value : deckModel.name});
		if(!Helper.isAdmin()) dom.find("#txt_back").parent().hide();
	}
	,hideCardBackContainer: function() {
		if(!Helper.isAdmin()) this.mc_backContainer.parent().hide();
	}
	,showAllCardback: function() {
		this.mc_backContainer.find(".cardback").show();
	}
	,enableLogin: function(enable) {
		if(enable) this.btn_login.linkbutton("enable"); else this.btn_login.linkbutton("disable");
	}
	,enableSave: function(enable) {
		if(enable) this.btn_saveDeck.linkbutton("enable"); else this.btn_saveDeck.linkbutton("disable");
	}
	,enableAddDeck: function(enable) {
		if(enable) this.btn_addDeck.linkbutton("enable"); else this.btn_addDeck.linkbutton("disable");
	}
	,alert: function(msg) {
		this.j.messager.alert("提示",msg);
	}
	,setOutput: function(deckstr) {
		this.dia_output.dialog("open");
		deckstr = StringTools.replace(StringTools.replace(deckstr,"[",""),"]","");
		this.dia_output.find("#input_output").textbox("setValue",deckstr);
	}
	,showLoading: function(show) {
		if(show) this.j.messager.progress({ msg : "讀取資料中，請稍等…"}); else this.j.messager.progress("close");
	}
	,setPagPage: function(total) {
		this.pag_page.pagination("refresh",{ total : total});
	}
	,getSearchConditions: function() {
		return { author : this.input_search.textbox("getValue"), game : this.slt_game.combobox("getValue"), type : this.slt_type.combobox("getValue")};
	}
	,showDetail: function(detail) {
		this.mc_deckDetail.find("#mc_info1 > div").eq(0).html(detail.author);
		this.mc_deckDetail.find("#mc_info1 > div").eq(1).html(detail.gameName);
		this.mc_deckDetail.find("#mc_info1 > div").eq(2).html(detail.name);
		this.mc_deckDetail.find("#mc_info1 > div").eq(3).html(detail.typeName);
		this.mc_deckDetail.find("#mc_info2").html(detail.describe);
		this.mc_deckDetail.find("img").attr("src",Helper.getImageUrlByGameAndId(detail.game,detail.cards[0]));
	}
	,showBigList: function(game,ary_showData) {
		var _g = this;
		this.mc_bigItemContainer.empty();
		Lambda.foreach(ary_showData,function(item) {
			var dom = Helper.createDetail(game,item);
			dom.find("#mc_detail > div[game=" + game + "]").hide();
			dom.find("#mc_black").hide();
			_g.mc_bigItemContainer.append(dom);
			_g.overListener(game);
			return true;
		});
		googleTracking.event("showBigList:game=" + game);
	}
	,overListener: function(game) {
		var _g = this;
		this.mc_bigItemContainer.find(".big_card_root").off("mouseover");
		this.mc_bigItemContainer.find(".big_card_root").off("mouseout");
		this.mc_bigItemContainer.find(".big_card_root").mouseover(function(e) {
			_g.j(e.currentTarget).find("#mc_detail > div[game=" + game + "]").show();
			_g.j(e.currentTarget).find("#mc_black").show();
		});
		this.mc_bigItemContainer.find(".big_card_root").mouseout(function(e1) {
			_g.hideAllDetail(game);
		});
	}
	,hideAllDetail: function(game) {
		this.mc_bigItemContainer.find("#mc_detail > div[game=" + game + "]").hide();
		this.mc_bigItemContainer.find(".big_card_root > #mc_black").hide();
	}
	,showList: function(data) {
		var _g = this;
		this.mc_itemContainer.empty();
		Lambda.foreach(data,function(item) {
			var dom = Helper.createItem(item);
			dom.mouseover(function(e) {
				var dom1 = _g.j(e.currentTarget);
				dom1.css("border","1px solid yellow");
				_g.sendNotification(view_ViewController.on_item_over,{ id : dom1.attr("id"), game : dom1.attr("game")});
			});
			dom.mouseout(function(e1) {
				var dom2 = _g.j(e1.currentTarget);
				dom2.css("border","1px solid gray");
			});
			dom.click(function(e2) {
				var dom3 = _g.j(e2.currentTarget);
				_g.sendNotification(view_ViewController.on_item_click,{ id : dom3.attr("id"), game : dom3.attr("game")});
			});
			_g.mc_itemContainer.append(dom);
			return true;
		});
	}
	,showMessage: function(msg) {
		this.j.messager.show({ title : "提示", msg : msg, timeout : 2000, showType : "slide"});
	}
});
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
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
Helper.j = $;
org_puremvc_haxe_patterns_mediator_Mediator.NAME = "Mediator";
model_ModelController.do_load_all_list = "do_load_all_list";
model_ModelController.on_facebook_login = "on_facebook_login";
model_ModelController.on_cardsuit_load = "on_cardsuit_load";
model_ModelController.on_cardsuit_save_success = "on_cardsuit_save_success";
view_ViewController.do_show_list = "do_show_list";
view_ViewController.do_show_bigList = "do_show_bigList";
view_ViewController.do_show_showDetail = "do_show_showDetail";
view_ViewController.do_show_loading = "do_show_loading";
view_ViewController.do_show_output = "do_show_output";
view_ViewController.do_enable_login = "do_enable_login";
view_ViewController.on_item_click = "on_item_click";
view_ViewController.on_item_over = "on_item_over";
view_ViewController.on_input_search_change = "on_input_search_change";
view_ViewController.on_pag_page_change = "on_pag_page_change";
view_ViewController.on_btn_output_click = "on_btn_output_click";
view_ViewController.on_btn_login_click = "on_btn_login_click";
view_ViewController.on_btn_gotoGroup_click = "on_btn_gotoGroup_click";
view_ViewController.on_btn_gotoDeckManager_click = "on_btn_gotoDeckManager_click";
view_ViewController.on_btn_addDeck_click = "on_btn_addDeck_click";
view_ViewController.on_btn_saveDeck_click = "on_btn_saveDeck_click";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
