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
		Main.applyValue(cards,false);
		haxe_Timer.delay(function() {
			d.resolve();
		},0);
		return d;
	};
};
Animate.setOwner = function(ary_select) {
	return function() {
		var d = Main.j.Deferred();
		Main.applyValue(ary_select,false);
		haxe_Timer.delay(function() {
			d.resolve();
		},200);
		return d;
	};
};
Animate.setRelate = function(ary_select) {
	return function() {
		var d = Main.j.Deferred();
		Main.applyValue(ary_select,false);
		haxe_Timer.delay(function() {
			d.resolve();
		},200);
		return d;
	};
};
Animate.flip = function(ary_select) {
	return function() {
		var d = Main.j.Deferred();
		Main.applyValue(ary_select,false);
		haxe_Timer.delay(function() {
			d.resolve();
		},200);
		return d;
	};
};
Animate.rotate = function(ary_select,d) {
	return function() {
		var d1 = Main.j.Deferred();
		Main.applyValue(ary_select,false);
		haxe_Timer.delay(function() {
			d1.resolve();
		},300);
		return d1;
	};
};
Animate.list = function(ary_select,pos_mouse) {
	return function() {
		var d = Main.j.Deferred();
		Main.moveCards(ary_select,pos_mouse,true);
		haxe_Timer.delay(function() {
			d.resolve();
		},1000);
		return d;
	};
};
Animate.listSeparate = function(ary_select,pos_mouse) {
	return function() {
		var d = Main.j.Deferred();
		Main.moveCards(ary_select,pos_mouse,false);
		haxe_Timer.delay(function() {
			d.resolve();
		},1000);
		return d;
	};
};
Animate.moveCards = function(ary_select,pos_mouse) {
	return function() {
		var d = Main.j.Deferred();
		Main.moveCards(ary_select,pos_mouse,false);
		haxe_Timer.delay(function() {
			d.resolve();
		},1000);
		return d;
	};
};
Animate.removeCards = function(ary_select) {
	return function() {
		var d = Main.j.Deferred();
		Main.removeCards(ary_select);
		haxe_Timer.delay(function() {
			d.resolve();
		},10);
		return d;
	};
};
Animate.shuffle = function(ary_select,pos_mouse) {
	return function() {
		var d = Main.j.Deferred();
		Main.moveCards(ary_select,pos_mouse,true);
		haxe_Timer.delay(function() {
			d.resolve();
		},1000);
		return d;
	};
};
Animate.shuffleSeperate = function(ary_select,pos_mouse) {
	return function() {
		var d = Main.j.Deferred();
		Main.moveCards(ary_select,pos_mouse,false);
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
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
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
Lambda.map = function(it,f) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(x));
	}
	return l;
};
Lambda.foreach = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) return false;
	}
	return true;
};
Lambda.filter = function(it,f) {
	var l = new List();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
	}
	return l;
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
	,iterator: function() {
		return new _$List_ListIterator(this.h);
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
	var _g = this;
	Main.j("#txt_id").textbox({ editable : true, onChange : function(nv,od) {
		Main.playerId = nv;
		Main.createSocket(Main.playerId);
	}});
	Main.j("#txt_opponent").textbox({ onChange : function(nv1,od1) {
		Main.otherPlayerId = nv1;
	}});
	org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new mediator_UI(null,Main.j(".easyui-layout")));
	org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new model_Model("model"));
	org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new mediator_Layer("layer",{ body : Main.j(window.document.body), container_cards : Main.j("#container_cards")}));
	Main.openLoading("準備中...請稍等");
	var fbid = config.fbid[config.fbid.which];
	myapp.facebook.init(fbid,function() {
		_g.loadCardSuit("gundamWar",function() {
			_g.loadCardSuit("fighter",function() {
				_g.loadCardSuit("sangoWar",function() {
					Main.closeLoading();
					_g.chooseCardSuit("fighter");
					Main.slide("所有卡牌準備完畢，登入並選擇填入對手的id後，才能開始創建套牌哦!");
				});
			});
		});
	});
	Reflect.setField(window,"onHtmlClick",$bind(this,this.onHtmlClick));
};
Main.__name__ = true;
Main.createSelfDeck = function(deckId) {
	var deck = Main.cardSuit[deckId];
	var toDeck = Lambda.array(Lambda.map(deck.cards,function(cardId) {
		return { id : Main.getId(), cardId : cardId, owner : Main.playerId, relate : "", deg : 0, pos : [0,0], back : true, showTo : ""};
	}));
	(Animate.addCardAndPrepare(toDeck))().done(function() {
		Main.pushCmds({ cmd : "addCards", content : toDeck});
	});
};
Main.pushCmds = function(content) {
	var toId = Main.j("#txt_opponent").textbox("getValue");
	if(toId.length != 0) Main.messageSocket(toId,content.cmd,content);
	if(Main.keepOnlineTimer != null) {
		Main.keepOnlineTimer.stop();
		Main.keepOnlineTimer = null;
	}
	Main.keepOnlineTimer = haxe_Timer.delay(function() {
		Main.alert("連線超時，請重新整理!");
	},600000);
};
Main.messageAll = function(content) {
	Main.j("#txt_output2").html("messageAll");
};
Main.onBackCallback = function(ret) {
	(Main.callAction(ret.msg))();
};
Main.callAction = function(content) {
	if(content.content.ary_select != null) content.content.ary_select = Lambda.fold(content.content.ary_select,function(remoteCard,curr) {
		var localCard = Main.getCardsById(remoteCard.id);
		if(localCard != null) {
			localCard.owner = remoteCard.owner;
			localCard.relate = remoteCard.relate;
			localCard.back = remoteCard.back;
			localCard.pos = remoteCard.pos;
			localCard.deg = remoteCard.deg;
			curr.push(localCard);
		}
		return curr;
	},[]);
	Main.j("#txt_output2").html("receive: " + Std.string(content.cmd));
	var _g = content.cmd;
	switch(_g) {
	case "removeCards":
		return Animate.removeCards(content.content.ary_select);
	case "addCards":
		return Animate.addCardAndPrepare(content.content);
	case "listCard":
		return Animate.list(content.content.ary_select,content.content.pos_mouse);
	case "listSeparate":
		return Animate.listSeparate(content.content.ary_select,content.content.pos_mouse);
	case "flip":
		return Animate.flip(content.content.ary_select);
	case "setOwner":
		return Animate.setOwner(content.content.ary_select);
	case "setRelate":
		return Animate.setRelate(content.content.ary_select);
	case "shuffle":
		return Animate.shuffle(content.content.ary_select,content.content.pos_mouse);
	case "shuffleSeparate":
		return Animate.shuffleSeperate(content.content.ary_select,content.content.pos_mouse);
	case "rotate":
		return Animate.rotate(content.content.ary_select,content.content.deg);
	case "listCardReverse":
		return Animate.list(content.content.ary_select,content.content.pos_mouse);
	case "listSeparateReverse":
		return Animate.listSeparate(content.content.ary_select,content.content.pos_mouse);
	case "moveCards":
		return Animate.moveCards(content.content.ary_select,content.content.pos_mouse);
	default:
		return null;
	}
};
Main.pollAllMessage = function() {
	Main.pollMessage({ FBID : Main.playerId},Main.handleResponse(Main.onBackCallback));
};
Main.applyValue = function(ary_select,self) {
	Lambda.foreach(ary_select,function(card) {
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(model_Model.on_state_change,{ select : card, showRelate : Main.playerId == card.relate, showOwner : Main.playerId == card.owner, seeCard : Main.seeCard(card), notify : self},"ownerAndRelate_change");
		return true;
	});
};
Main.seeCard = function(card) {
	var _g = card.owner;
	var owner = _g;
	switch(_g) {
	case "":
		return false;
	default:
		return owner == card.relate && owner == Main.playerId;
	}
};
Main.setOwner = function(ary_select) {
	var send = false;
	Lambda.foreach(ary_select,function(card) {
		var _g = card.owner;
		var owner = _g;
		switch(_g) {
		case "":
			card.owner = Main.playerId;
			send = true;
			break;
		default:
			if(owner == Main.playerId) {
				card.owner = "";
				card.relate = "";
				send = true;
			}
		}
		return true;
	});
	Main.applyValue(ary_select,true);
	return send;
};
Main.setRelate = function(ary_select) {
	var send = false;
	Lambda.foreach(ary_select,function(card) {
		if(card.owner != Main.playerId) return true;
		var _g = card.relate;
		var relate = _g;
		switch(_g) {
		case "":
			card.relate = Main.playerId;
			send = true;
			break;
		default:
			if(relate == Main.playerId) {
				card.relate = "";
				send = true;
			}
		}
		return true;
	});
	Main.applyValue(ary_select,true);
	return send;
};
Main.rotate = function(ary_select,deg) {
	if(deg == null) deg = 90;
	Lambda.foreach(ary_select,function(card) {
		card.deg += deg;
		return true;
	});
	Main.applyValue(ary_select,true);
};
Main.createCard = function(model) {
	model.url = Main.getCardImageUrlWithPackage(Main.cardPackage,model.cardId);
	org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new mediator_Card(model.id,Main.tmpl_card.tmpl(model)));
};
Main.flip = function(ary_select) {
	var send = false;
	Lambda.foreach(ary_select,function(card) {
		if(card.owner == Main.playerId || card.owner == "") {
			send = true;
			card.back = !card.back;
		}
		return true;
	});
	Main.applyValue(ary_select,true);
	return send;
};
Main.moveCards = function(ary_select,pos_mouse,zsort) {
	Lambda.foreach(ary_select,function(select) {
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(model_Model.on_state_change,{ select : select, zsort : zsort, notify : false},"moveCards");
		return true;
	});
};
Main.getCardsById = function(id) {
	return Lambda.find(Main.ary_cards,function(card) {
		return id == card.id;
	});
};
Main.removeCards = function(ary_select) {
	Lambda.foreach(ary_select,function(card) {
		HxOverrides.remove(Main.ary_cards,card);
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(model_Model.on_card_remove,{ select : card});
		return true;
	});
};
Main.createSocket = function(id) {
	var _channel = channel;
	_channel.createChannel(id,function(err,ch) {
		if(err != null) {
			Main.alert("socket建立失敗!請重新整理");
			return;
		}
		_channel.addEventListenerAndOpenSocket(ch,{ onopen : function() {
			Main.slide("創建玩家成功");
		}, onmessage : function(path,option) {
			var origin = JSON.parse(path.data);
			var json = JSON.parse(origin);
			Main.onBackCallback(json);
		}, onerror : function() {
			Main.alert("已斷線，可能是網路不穩定");
		}, onclose : function() {
			Main.alert("已斷線，可能是網路不穩定");
		}});
	});
};
Main.messageSocket = function(toId,type,msg) {
	var _channel = channel;
	var msg1 = { type : type, msg : msg};
	_channel.sendChannelMessage(toId,JSON.stringify(msg1),Main.handleResponse(function(ret) {
	}));
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
Main.pollMessage = function(data,cb) {
	api.pollMessage(data,cb);
};
Main.installPollMessageCallback = function(data,cb) {
	api.installPollMessageCallback(data,cb);
};
Main.clear = function(cb) {
	api.clear(cb);
};
Main.getCardPackage = function(name,cb) {
	api.getCardPackage(name,cb);
};
Main.getCardPackageWithUrl = function(url,cb) {
	api.getCardPackageWithUrl(url,cb);
};
Main.getCardSuitPackageWithUrl = function(url,cb) {
	api.getCardSuitPackageWithUrl(url,cb);
};
Main.getCardImageUrlWithPackage = function(name,key) {
	var cpkg = null;
	var _g = 0;
	var _g1 = Reflect.fields(Main.cardPackages);
	while(_g < _g1.length) {
		var pkg = _g1[_g];
		++_g;
		if(Reflect.field(Reflect.field(Main.cardPackages,pkg).images,key) != null) {
			cpkg = Reflect.field(Main.cardPackages,pkg);
			break;
		}
	}
	if(cpkg == null) return "";
	return api.getCardImageUrlWithPackage(cpkg,key);
};
Main.getCardSuit = function(pkg) {
	return api.getCardSuit(pkg);
};
Main.slide = function(msg) {
	Main.j.messager.show({ title : "提示", msg : msg, timeout : 2000, showType : "slide"});
};
Main.alert = function(msg) {
	Main.j.messager.alert("錯誤",msg);
};
Main.openLoading = function(msg) {
	Main.j.messager.progress({ title : "", msg : msg});
};
Main.closeLoading = function() {
	Main.j.messager.progress("close");
};
Main.handleResponse = function(cb) {
	return function(err,ret) {
		if(err != null) Main.alert("錯誤已經回報"); else cb(ret);
	};
};
Main.main = function() {
	new Main();
};
Main.getId = function() {
	return leo.utils.generateUUID();
};
Main.prototype = {
	loadCardSuit: function(suitName,cb) {
		if(Reflect.field(Main.cardPackages,suitName) != null) {
			Main.cardPackage = Reflect.field(Main.cardPackages,suitName);
			Main.cardSuit = Reflect.field(Main.cardSuits,suitName);
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(Main.on_getSuit_success,{ cardSuit : Main.cardSuit});
			if(cb != null) cb();
		} else Main.getCardPackageWithUrl("../common/cardPackage/" + suitName + ".json",Main.handleResponse(function(ret) {
			Main.cardPackage = ret;
			Main.cardPackages[suitName] = Main.cardPackage;
			Main.getCardSuitPackageWithUrl("../common/cardPackage/" + suitName + "CardSuit.json",Main.handleResponse(function(ret1) {
				Main.cardSuits[suitName] = ret1.cardSuit;
				if(cb != null) cb();
			}));
		}));
	}
	,onHtmlClick: function(type,params) {
		switch(type) {
		case "onBtnLoginClick":
			myapp.facebook.login(function(ret) {
				var fbid = ret.authResponse.userID;
				Main.j("#txt_id").textbox("setValue",fbid);
			});
			break;
		case "onBtnLoadFighterClick":
			this.chooseCardSuit("fighter");
			break;
		case "onBtnLoadGundamWarClick":
			this.chooseCardSuit("gundamWar");
			break;
		case "onBtnLoadSangoWarClick":
			this.chooseCardSuit("sangoWar");
			break;
		case "onBtnCreateDeck":
			if(this.checkCanCreate()) {
				org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(Main.on_createDeck_click);
				Main.slide("創建卡片完成");
			} else Main.slide("沒有登入或者沒有對手時，不能創建卡牌哦");
			break;
		}
	}
	,checkCanCreate: function() {
		return Main.playerId != "" && Main.otherPlayerId != "";
	}
	,chooseCardSuit: function(suitName) {
		Main.cardPackage = Reflect.field(Main.cardPackages,suitName);
		Main.cardSuit = Reflect.field(Main.cardSuits,suitName);
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(Main.on_getSuit_success,{ cardSuit : Main.cardSuit});
	}
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
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
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
	this._deg = 0;
	this._back = true;
	this._focus = false;
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
};
mediator_Card.__name__ = true;
mediator_Card.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
mediator_Card.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	onRegister: function() {
		this.getViewComponent().css("top","100px");
		this.getViewComponent().css("left","100px");
		this.sendNotification(mediator_Card.card_enter,this.getViewComponent());
		this.getViewComponent().click($bind(this,this.onCardClick));
		this.getViewComponent().mousedown($bind(this,this.onCardMouseDown));
	}
	,onRemove: function() {
		org_puremvc_haxe_patterns_mediator_Mediator.prototype.onRemove.call(this);
		this.getViewComponent().off("click");
	}
	,listNotificationInterests: function() {
		return [model_Model.on_state_change,model_Model.on_select_cards,model_Model.on_card_remove];
	}
	,handleNotification: function(notification) {
		var _g1 = this;
		var _g = notification.getName();
		switch(_g) {
		case "on_card_remove":
			if(!this.checkSelf(notification.getBody().select.id)) return;
			this.sendNotification(mediator_Card.card_remove,{ dom : this.getViewComponent()});
			break;
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
			case "ownerAndRelate_change":
				if(!this.checkSelf(notification.getBody().select.id)) return;
				this._card = notification.getBody().select;
				this._back = notification.getBody().select.back;
				this.rotateAnimation(notification.getBody().select.deg);
				this.showOnwer(notification.getBody().showOwner);
				this.showRelate(notification.getBody().showRelate);
				this.seeCard(notification.getBody().seeCard);
				this.setView();
				break;
			case "moveCards":
				if(!this.checkSelf(notification.getBody().select.id)) return;
				this.moveCard(notification.getBody().select.pos[0],notification.getBody().select.pos[1]);
				if(notification.getBody().zsort) this.sendNotification(mediator_Card.card_enter,this.getViewComponent());
				break;
			case "list_shuffle":
				if(!this.checkSelf(notification.getBody().select.id)) return;
				this.sendNotification(mediator_Card.card_enter,this.getViewComponent());
				this.listStack(notification.getBody().mouse,notification.getBody().pos,2,2,notification.getBody().count);
				break;
			}
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
	,rotateAnimation: function(d) {
		var _g = this;
		Main.j({ deg : this._deg}).animate({ deg : d},{ duration : 300, step : function(now) {
			_g.rotate(now);
		}});
		this._deg = d;
	}
	,rotate: function(d) {
		this.getViewComponent().css({ '-moz-transform' : "rotate(" + d + "deg)", '-webkit-transform' : "rotate(" + d + "deg)", '-o-transform' : "rotate(" + d + "deg)", '-ms-transform' : "rotate(" + d + "deg)", 'transform' : "rotate(" + d + "deg)"});
	}
	,flip: function(value) {
		this._back = value;
		this.setView();
	}
	,setView: function() {
		if(this._see) {
			this.getViewComponent().find(".card_back").hide();
			this._card.showTo = Main.playerId;
		} else if(this._back) {
			this.getViewComponent().find(".card_back").show();
			this._card.showTo = "";
		} else {
			this.getViewComponent().find(".card_back").hide();
			this._card.showTo = Main.playerId;
		}
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
		leo.utils.initRectSelect(function(ary) {
			_g.sendNotification(mediator_Layer.on_select_cards,{ ary_select : ary});
		});
	}
	,listNotificationInterests: function() {
		return [model_Model.on_card_enter,mediator_Card.card_down,mediator_Card.card_remove];
	}
	,handleNotification: function(notification) {
		var _g = notification.getName();
		switch(_g) {
		case "on_card_enter":
			this._container_cards.append(notification.getBody());
			break;
		case "card_remove":
			notification.getBody().dom.remove();
			break;
		case "card_down":
			this._currentMoveCardId = notification.getBody().id;
			break;
		}
	}
	,onBodyMouseMove: function(e) {
		this.sendNotification(mediator_Layer.on_body_mousemove,{ x : e.pageX, y : e.pageY});
	}
	,onBodyKeyUp: function(e) {
		this.sendNotification(mediator_Layer.on_press,null,e.which);
	}
});
var mediator_UI = function(mediatorName,viewComponent) {
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
	this.mc_detailContainer = this.getViewComponent().find("#mc_detailContainer");
	this.combo_deck = this.getViewComponent().find("#combo_deck");
};
mediator_UI.__name__ = true;
mediator_UI.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
mediator_UI.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return [model_Model.on_select_cards,model_Model.on_state_change,Main.on_getSuit_success];
	}
	,handleNotification: function(notification) {
		var _g1 = this;
		var _g = notification.getName();
		switch(_g) {
		case "on_model_select_cards":
			this.showCards(notification.getBody().ary_select);
			break;
		case "on_state_change":
			var notify = notification.getBody().notify;
			if(!notify) return;
			this.mc_detailContainer.empty();
			haxe_Timer.delay(function() {
				_g1.showCard(notification.getBody().select);
			},10);
			break;
		case "on_getSuit_success":
			this.createComboDeck(notification.getBody().cardSuit);
			break;
		}
	}
	,createComboDeck: function(cardSuit) {
		var _g = this;
		var i = 0;
		this.combo_deck.empty();
		Lambda.foreach(cardSuit,function(deck) {
			_g.combo_deck.append("<option value=\"" + i++ + "\">" + deck.name + "</option>");
			return true;
		});
		this.combo_deck.combobox({ onSelect : function(record) {
			_g.sendNotification(mediator_UI.on_combo_deck_change,{ deckId : record.value});
		}});
		this.combo_deck.combobox("textbox").prop("placeholder","選擇套牌");
		this.combo_deck.combobox("setValue",0);
	}
	,showCards: function(ary_select) {
		var _g = this;
		if(ary_select == null) return;
		this.mc_detailContainer.empty();
		Lambda.foreach(ary_select,function(card) {
			_g.showCard(card);
			return true;
		});
	}
	,showCard: function(card) {
		if(card.showTo == Main.playerId) {
			var url = Main.getCardImageUrlWithPackage(Main.cardPackage,card.cardId);
			var img = Main.j("<img></img>");
			img.attr("src",url);
			img.load(function() {
				img.css("width","100%");
			});
			this.mc_detailContainer.append(img);
		}
	}
});
var model_Model = function(mediatorName,viewComponent) {
	this.pos_mouse = [0,0];
	this.isBack = true;
	this.isSeperate = false;
	this.currentDeckId = 0;
	this.ary_select = [];
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
};
model_Model.__name__ = true;
model_Model.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
model_Model.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return [mediator_Card.card_click,mediator_Card.card_enter,mediator_Layer.on_layout_mouse_up,mediator_Layer.on_press,mediator_Layer.on_body_mousemove,mediator_Layer.on_select_cards,mediator_UI.on_combo_deck_change,Main.on_createDeck_click];
	}
	,handleNotification: function(notification) {
		var _g = notification.getName();
		switch(_g) {
		case "on_createDeck_click":
			Main.createSelfDeck(this.currentDeckId);
			break;
		case "on_combo_deck_change":
			this.currentDeckId = notification.getBody().deckId;
			break;
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
			this.sendNotification(model_Model.on_select_cards,{ ary_select : this.ary_select});
			break;
		case "on_press":
			var _g1 = notification.getType();
			switch(_g1) {
			case 68:
				break;
			default:
				if(this.ary_select.length == 0) return;
			}
			var _g11 = notification.getType();
			switch(_g11) {
			case 71:
				break;
			case 72:
				Main.removeCards(this.ary_select);
				Main.pushCmds({ cmd : "removeCards", content : { ary_select : this.ary_select.slice(0)}});
				this.ary_select = [];
				break;
			case 67:
				if(Main.setOwner(this.ary_select)) Main.pushCmds({ cmd : "setOwner", content : { ary_select : this.ary_select.slice(0)}});
				break;
			case 86:
				if(Main.setRelate(this.ary_select)) Main.pushCmds({ cmd : "setRelate", content : { ary_select : this.ary_select.slice(0)}});
				break;
			case 90:
				Main.rotate(this.ary_select,-90);
				Main.pushCmds({ cmd : "rotate", content : { ary_select : this.ary_select.slice(0), deg : -90}});
				break;
			case 88:
				Main.rotate(this.ary_select,90);
				Main.pushCmds({ cmd : "rotate", content : { ary_select : this.ary_select.slice(0), deg : 90}});
				break;
			case 81:
				this.doListShuffle();
				break;
			case 87:
				this.doListReverse();
				break;
			case 69:
				break;
			case 82:
				break;
			case 65:
				this.doMoveCards();
				break;
			case 83:
				if(this.isSeperate) this.doList(); else this.doListSeperate();
				this.isSeperate = !this.isSeperate;
				break;
			case 68:
				this.ary_select = Lambda.array(Lambda.filter(Main.ary_cards,function(card) {
					return card.owner == Main.playerId;
				}));
				this.sendNotification(model_Model.on_select_cards,{ ary_select : this.ary_select});
				break;
			case 70:
				this.doFlip();
				break;
			case 32:
				break;
			}
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
			this.sendNotification(model_Model.on_select_cards,{ ary_select : this.ary_select.slice(0)});
			break;
		case "on_layout_mouse_up":
			this.sendNotification(model_Model.on_card_move,notification.getBody());
			break;
		}
	}
	,listCard: function() {
		var _g = this;
		Lambda.foreach(this.ary_select,function(select) {
			var cardIndex = Lambda.indexOf(_g.ary_select,select);
			select.pos[0] = _g.pos_mouse[0] + cardIndex * 2;
			select.pos[1] = _g.pos_mouse[1] + cardIndex * 2;
			return true;
		});
	}
	,listSeperate: function() {
		var _g = this;
		Lambda.foreach(this.ary_select,function(select) {
			var cardIndex = Lambda.indexOf(_g.ary_select,select);
			select.pos[0] = _g.pos_mouse[0] + cardIndex % 10 * 55;
			select.pos[1] = _g.pos_mouse[1] + Math.floor(cardIndex / 10) * 80;
			return true;
		});
	}
	,doFlip: function() {
		var _g = this;
		if(this.ary_select.length > 1) {
			this.isBack = !this.isBack;
			Lambda.foreach(this.ary_select,function(card) {
				if(card.owner == Main.playerId || card.owner == "") card.back = _g.isBack;
				return true;
			});
		} else {
			var card1 = this.ary_select[0];
			if(card1.owner == Main.playerId || card1.owner == "") card1.back = !card1.back;
		}
		Main.applyValue(this.ary_select,true);
		Main.pushCmds({ cmd : "flip", content : { ary_select : this.deepCopy(this.ary_select)}});
	}
	,doList: function() {
		this.listCard();
		Main.moveCards(this.ary_select,this.pos_mouse,true);
		Main.pushCmds({ cmd : "listCard", content : { ary_select : this.deepCopy(this.ary_select), pos_mouse : this.pos_mouse.slice(0)}});
	}
	,doListSeperate: function() {
		this.listSeperate();
		Main.moveCards(this.ary_select,this.pos_mouse,false);
		Main.pushCmds({ cmd : "listSeparate", content : { ary_select : this.deepCopy(this.ary_select), pos_mouse : this.pos_mouse.slice(0)}});
	}
	,doListReverse: function() {
		this.ary_select.reverse();
		this.listCard();
		Main.moveCards(this.ary_select,this.pos_mouse,true);
		Main.pushCmds({ cmd : "listCardReverse", content : { ary_select : this.deepCopy(this.ary_select), pos_mouse : this.pos_mouse.slice(0)}});
	}
	,doSeperateReverse: function() {
		this.ary_select.reverse();
		this.listSeperate();
		Main.moveCards(this.ary_select,this.pos_mouse,false);
		Main.pushCmds({ cmd : "listSeparateReverse", content : { ary_select : this.deepCopy(this.ary_select), pos_mouse : this.pos_mouse.slice(0)}});
	}
	,doListShuffle: function() {
		this.ary_select.sort(function(a,b) {
			if(Math.random() > .5) return 1; else return -1;
		});
		this.listCard();
		Main.moveCards(this.ary_select,this.pos_mouse,true);
		Main.pushCmds({ cmd : "shuffle", content : { ary_select : this.deepCopy(this.ary_select), pos_mouse : this.pos_mouse.slice(0)}});
	}
	,doSeperateShuffle: function() {
		this.ary_select.sort(function(a,b) {
			if(Math.random() > .5) return 1; else return -1;
		});
		this.listSeperate();
		Main.moveCards(this.ary_select,this.pos_mouse,false);
		Main.pushCmds({ cmd : "shuffleSeparate", content : { ary_select : this.deepCopy(this.ary_select), pos_mouse : this.pos_mouse.slice(0)}});
	}
	,doMoveCards: function() {
		var offset_0 = this.pos_mouse[0] - this.ary_select[0].pos[0];
		var offset_1 = this.pos_mouse[1] - this.ary_select[0].pos[1];
		Lambda.foreach(this.ary_select,function(select) {
			select.pos[0] += offset_0;
			select.pos[1] += offset_1;
			return true;
		});
		Main.moveCards(this.ary_select,this.pos_mouse,false);
		Main.pushCmds({ cmd : "moveCards", content : { ary_select : this.deepCopy(this.ary_select), pos_mouse : this.pos_mouse.slice(0)}});
	}
	,deepCopy: function(ary_select) {
		return Lambda.array(Lambda.map(ary_select,function(card) {
			return { id : card.id, cardId : card.cardId, name : card.name, owner : card.owner, relate : card.relate, deg : card.deg, pos : [card.pos[0],card.pos[1]], back : card.back, showTo : card.showTo};
		}));
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
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
String.__name__ = true;
Array.__name__ = true;
var __map_reserved = {}
Main.on_getSuit_success = "on_getSuit_success";
Main.on_createDeck_click = "on_createDeck_click";
Main.j = $;
Main.playerId = "";
Main.otherPlayerId = "";
Main.ary_cards = [];
Main.cardPackages = { };
Main.cardSuits = { };
Main.tmpl_card = Main.j("#tmpl_card");
Main.longPolling = config.longPolling;
Main.cardPackageUrlMapping = { };
org_puremvc_haxe_patterns_mediator_Mediator.NAME = "Mediator";
mediator_Card.card_click = "card_click";
mediator_Card.card_down = "card_down";
mediator_Card.card_enter = "card_enter";
mediator_Card.card_remove = "card_remove";
mediator_Layer.on_layout_mouse_up = "on_layout_mouse_up";
mediator_Layer.on_select_cards = "on_select_cards";
mediator_Layer.on_press = "on_press";
mediator_Layer.on_body_mousemove = "on_body_mousemove";
mediator_UI.on_combo_deck_change = "on_combo_deck_change";
model_Model.on_card_enter = "on_card_enter";
model_Model.on_card_remove = "on_card_remove";
model_Model.on_card_move = "on_card_move";
model_Model.on_state_change = "on_state_change";
model_Model.on_select_cards = "on_model_select_cards";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
