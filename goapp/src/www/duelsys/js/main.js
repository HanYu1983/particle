(function (console) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
EReg.__name__ = true;
EReg.prototype = {
	match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) return this.r.m[n]; else throw new js__$Boot_HaxeError("EReg::matched");
	}
	,matchedPos: function() {
		if(this.r.m == null) throw new js__$Boot_HaxeError("No string matched");
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchSub: function(s,pos,len) {
		if(len == null) len = -1;
		if(this.r.global) {
			this.r.lastIndex = pos;
			this.r.m = this.r.exec(len < 0?s:HxOverrides.substr(s,0,pos + len));
			var b = this.r.m != null;
			if(b) this.r.s = s;
			return b;
		} else {
			var b1 = this.match(len < 0?HxOverrides.substr(s,pos,null):HxOverrides.substr(s,pos,len));
			if(b1) {
				this.r.s = s;
				this.r.m.index += pos;
			}
			return b1;
		}
	}
	,map: function(s,f) {
		var offset = 0;
		var buf = new StringBuf();
		do {
			if(offset >= s.length) break; else if(!this.matchSub(s,offset)) {
				buf.add(HxOverrides.substr(s,offset,null));
				break;
			}
			var p = this.matchedPos();
			buf.add(HxOverrides.substr(s,offset,p.pos - offset));
			buf.add(f(this));
			if(p.len == 0) {
				buf.add(HxOverrides.substr(s,p.pos,1));
				offset = p.pos + 1;
			} else offset = p.pos + p.len;
		} while(this.r.global);
		if(!this.r.global && offset > 0 && offset < s.length) buf.add(HxOverrides.substr(s,offset,null));
		return buf.b;
	}
};
var Helper = function() { };
Helper.__name__ = true;
Helper.initFb = function(cb) {
	myapp.facebook.init("679171275511375",cb);
};
Helper.shareFb = function(name,link,picture,caption,description,cb) {
	myapp.facebook.postMessageToMyboard({ name : name, link : link, picture : picture, caption : caption, description : description, callback : cb});
};
Helper.loginFb = function(cb) {
	myapp.facebook.login(function(ret) {
		cb(ret.authResponse.userID,ret.authResponse.accessToken);
	});
};
Helper.getUUID = function() {
	return leo.utils.generateUUID();
};
Helper.drawTree = function(nodes,links,dom) {
	haxe_Log.trace(links,{ fileName : "Helper.hx", lineNumber : 41, className : "Helper", methodName : "drawTree"});
	app.drawTree(app.dataToTreeData(nodes,links),dom);
};
Helper.talk = function(cmd,cb,values) {
	api.talk(Helper.formatString(cmd,new EReg("\\(\\.\\+\\)","gm"),values),function(err,ret) {
		haxe_Log.trace(err,{ fileName : "Helper.hx", lineNumber : 47, className : "Helper", methodName : "talk", customParams : [err == null]});
		if(err == null) {
			if(cb != null) cb(ret);
		} else {
			haxe_Log.trace("DcCC",{ fileName : "Helper.hx", lineNumber : 51, className : "Helper", methodName : "talk"});
			js_Browser.alert(err);
		}
	});
};
Helper.formatString = function(oristr,reg,values) {
	haxe_Log.trace(values,{ fileName : "Helper.hx", lineNumber : 58, className : "Helper", methodName : "formatString"});
	var retstr = reg.map(oristr,function(e) {
		if(values.length == 0) throw new js__$Boot_HaxeError("not enough value!");
		return values.shift();
	});
	haxe_Log.trace(retstr,{ fileName : "Helper.hx", lineNumber : 63, className : "Helper", methodName : "formatString"});
	return retstr;
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
	per_vic_js_Jslib.j("body").ready(function() {
		Helper.initFb(function() {
			org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new view_UIMediator("",per_vic_js_Jslib.j("#layout_main")));
			org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new model_DataMediator());
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(model_DataMediator.do_get_duelContext);
		});
	});
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = true;
StringBuf.prototype = {
	add: function(x) {
		this.b += Std.string(x);
	}
};
var Talk = function() { };
Talk.__name__ = true;
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
var model_DataMediator = function(mediatorName,viewComponent) {
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
};
model_DataMediator.__name__ = true;
model_DataMediator.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
model_DataMediator.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return [model_DataMediator.do_get_duelContext,view_UIMediator.on_race_click,view_UIMediator.on_race_join_click,view_UIMediator.on_race_delete_click,view_UIMediator.on_race_time_setting,view_UIMediator.on_facebook_login_click];
	}
	,handleNotification: function(notification) {
		var _g1 = this;
		var _g = notification.getName();
		var str = _g;
		switch(_g) {
		case "on_facebook_login_click":
			Helper.loginFb(function(uid,token) {
				_g1.fb_id = uid;
				_g1.fb_token = token;
			});
			break;
		case "on_race_time_setting":
			var name = notification.getBody().name;
			var startTime = notification.getBody().startTime;
			var endTime = notification.getBody().endTime;
			var signTime = notification.getBody().signTime;
			this.createDuel(name,startTime,endTime,signTime);
			break;
		case "on_race_delete_click":
			var duelId = notification.getBody().duelId;
			this.deleteDuel(duelId);
			break;
		case "on_race_join_click":
			if(this.fb_id == null) {
				haxe_Log.trace("還沒有登入",{ fileName : "DataMediator.hx", lineNumber : 61, className : "model.DataMediator", methodName : "handleNotification"});
				return;
			}
			var duelId1 = notification.getBody().duelId;
			this.joinDuel(this.fb_id,duelId1);
			this.joinDuel("b_people",duelId1);
			this.joinDuel("c_people",duelId1);
			this.joinDuel("d_people",duelId1);
			this.joinDuel("e_people",duelId1);
			this.joinDuel("f_people",duelId1);
			break;
		case "on_race_click":
			this.currentDuelId = notification.getBody().id;
			var duel = this.getDuelByName(this.currentDuelId);
			haxe_Log.trace(duel,{ fileName : "DataMediator.hx", lineNumber : 74, className : "model.DataMediator", methodName : "handleNotification"});
			this.sendNotification(view_UIMediator.do_showDuelDetail,{ duel : duel});
			break;
		default:
			if(str == model_DataMediator.do_get_duelContext) this.getDuelContext();
		}
	}
	,createDuel: function(name,startTime,endTime,signTime) {
		var _g = this;
		var createTimeStr = function(time) {
			return time[3] + "-" + time[1] + "-" + time[2];
		};
		Helper.talk(Talk.createDuel,function(ret) {
			_g.getDuelContext();
		},[name,createTimeStr(startTime),createTimeStr(endTime),createTimeStr(signTime)]);
	}
	,deleteDuel: function(duelId) {
		haxe_Log.trace("delete",{ fileName : "DataMediator.hx", lineNumber : 95, className : "model.DataMediator", methodName : "deleteDuel", customParams : [duelId]});
	}
	,joinDuel: function(playerId,duelId) {
		var _g = this;
		Helper.talk(Talk.addPeople,function(ret) {
			_g.getDuelContext(function() {
				var duel = _g.getDuelByName(_g.currentDuelId);
				if(duel != null) _g.sendNotification(view_UIMediator.do_showDuelDetail,{ duel : duel});
			});
		},[playerId,duelId]);
	}
	,getDuelContext: function(cb) {
		var _g = this;
		Helper.talk(Talk.duelContext,function(ret) {
			_g.datas = ret;
			_g.sendNotification(view_UIMediator.do_setRaces,_g.datas);
			if(cb != null) cb();
		});
	}
	,getDuelByName: function(name) {
		return this.datas.Duels.find(function(duel) {
			return duel.Name == name;
		});
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
var per_vic_js_Jslib = function() { };
per_vic_js_Jslib.__name__ = true;
var view_UIMediator = function(mediatorName,viewComponent) {
	var _g = this;
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
	this.mc_raceContainer = viewComponent.find("#mc_raceContainer");
	this.mc_detailContainer = viewComponent.find("#mc_detailContainer");
	this.btn_create = viewComponent.find("#btn_create");
	this.btn_create.linkbutton({ onClick : function() {
		_g.win_create.window("open");
		var nowTime = new Date();
		_g.startTime = _g.endTime = _g.signTime = nowTime;
		_g.win_create.find(".easyui-calendar").calendar({ current : _g.startTime});
	}});
	this.btn_login = viewComponent.find("#btn_login");
	this.btn_login.linkbutton({ onClick : function() {
		_g.sendNotification(view_UIMediator.on_facebook_login_click);
	}});
	this.win_create = per_vic_js_Jslib.j("#win_create");
	this.win_create.find("#btn_create").linkbutton({ onClick : function() {
		var duelName = _g.win_create.find("#txt_name").textbox("getValue");
		_g.sendNotification(view_UIMediator.on_race_time_setting,{ name : duelName, startTime : new String(_g.startTime).split(" "), endTime : new String(_g.endTime).split(" "), signTime : new String(_g.signTime).split(" ")});
		_g.win_create.window("close");
	}});
	this.win_create.find(".easyui-calendar").calendar({ onChange : function(newDate,oldDate) {
		var self = this;
		var _g1 = self.id;
		switch(_g1) {
		case "cal_start":
			_g.startTime = newDate;
			break;
		case "cal_end":
			_g.endTime = newDate;
			break;
		case "cal_sign":
			_g.signTime = newDate;
			break;
		}
	}});
};
view_UIMediator.__name__ = true;
view_UIMediator.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
view_UIMediator.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return [view_UIMediator.do_setRaces,view_UIMediator.do_showDuelDetail];
	}
	,handleNotification: function(notification) {
		var _g = notification.getName();
		var str = _g;
		if(str == view_UIMediator.do_showDuelDetail) {
			var duel = notification.getBody().duel;
			this.setDetail(duel);
		} else {
			var str1 = _g;
			if(str1 == view_UIMediator.do_setRaces) this.setRaces(notification.getBody());
		}
	}
	,setDetail: function(duel) {
		var _g1 = this;
		var dom = per_vic_js_Jslib.j("#tmpl_detail").tmpl(duel);
		this.mc_detailContainer.empty().append(dom);
		this.mc_detailContainer.find(".easyui-linkbutton").linkbutton({ onClick : function(e1) {
			var btn = $(this);
			var duelId = btn.parent().attr("id");
			var _g = btn.attr("id");
			switch(_g) {
			case "btn_join":
				_g1.sendNotification(view_UIMediator.on_race_join_click,{ duelId : duelId});
				break;
			case "btn_delete":
				_g1.sendNotification(view_UIMediator.on_race_delete_click,{ duelId : duelId});
				break;
			}
		}});
		var replaceData = (function(oriobj,peopleMap) {
			var retstr = JSON.stringify(oriobj);
			var reg = new EReg("(\\d+)","g");
			retstr = reg.map(retstr,function(e) {
				var nowPosition = reg.matched(0);
				var p1 = Lambda.find(peopleMap,function(p) {
					return p.Position == nowPosition;
				});
				if(p1 == null) return "\"未決: " + nowPosition + "\""; else return "\"" + Std.string(p1.Name) + "\"";
			});
			return JSON.parse(retstr);
		})(duel.DuelTree,duel.Peoples);
		if(duel.DuelTree.Links != null) Helper.drawTree(replaceData.Nodes,replaceData.Links,dom.find("svg")[0]);
	}
	,setRaces: function(info) {
		var _g = this;
		var doms = per_vic_js_Jslib.j("#tmpl_race").tmpl(info);
		this.mc_raceContainer.empty().append(doms);
		this.mc_raceContainer.find(".raceItem").click(function(e) {
			var dom = per_vic_js_Jslib.j(e.currentTarget);
			var id = dom.attr("id");
			_g.sendNotification(view_UIMediator.on_race_click,{ id : id});
		});
	}
});
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
var __map_reserved = {}
Talk.createDuel = api.createDuel;
Talk.duelContext = api.duelContext;
Talk.addPeople = api.addPeople;
Talk.winState = api.winState;
Talk.assignWinner = api.assignWinner;
Talk.forward = api.forward;
Talk.whoistarget = api.whoistarget;
Talk.deletePeople = api.deletePeople;
org_puremvc_haxe_patterns_mediator_Mediator.NAME = "Mediator";
model_DataMediator.do_get_duelContext = "do_get_duelContext";
per_vic_js_Jslib.j = $;
view_UIMediator.do_setRaces = "do_setRaces";
view_UIMediator.do_showDuelDetail = "do_showDuelDetail";
view_UIMediator.on_race_click = "on_race_click";
view_UIMediator.on_race_join_click = "on_race_join_click";
view_UIMediator.on_race_delete_click = "on_race_delete_click";
view_UIMediator.on_facebook_login_click = "on_facebook_login_click";
view_UIMediator.on_race_time_setting = "on_race_time_setting";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=main.js.map