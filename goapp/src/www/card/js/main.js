(function (console, $global) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var CallJs = function() { };
CallJs.__name__ = true;
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
};
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
var Main = function() {
	var _g = this;
	window.document.addEventListener("contextmenu",function(e) {
		e.preventDefault();
	},false);
	Main.j(window.document).ready(function() {
		org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new per_vic_pureMVCref_tableGameModel_controller_MainController(null,Main.j("#container_cards")));
		org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new per_vic_pureMVCref_tableGameModel_controller_SocketController("SocketController"));
		org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new model_Model("model"));
		org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new mediator_UI("UI",Main.j(".easyui-layout")));
		Main.openLoading("準備中...請稍等");
		var fbappId = config.fbid[config.fbid.which];
		CallJs.myapp_facebook_init(fbappId,function() {
			_g.updateGameUI(Main.currentSelect);
			Main.closeLoading();
			_g.prepareCardsuit(CallJs.cardSuit_defaultModel().cardSuit);
			Main.slide("所有卡牌準備完畢，登入並選擇填入對手的id後，才能開始創建套牌哦!");
		});
		Reflect.setField(window,"onHtmlClick",$bind(_g,_g.onHtmlClick));
		if(CallJs.getCookie("otherPlayerId") != null) {
			Main.ary_ops = JSON.parse(CallJs.getCookie("otherPlayerId"));
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(Main.on_receiveOps,{ ary_ops : Main.ary_ops});
		} else Main.ary_ops = [];
	});
};
Main.__name__ = true;
Main.changePlayer = function(player) {
	per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId = player;
};
Main.selectOps = function(ops) {
	try {
		per_vic_pureMVCref_tableGameModel_controller_SocketController.otherPlayerIds = ops.split(",");
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.setOpponents,per_vic_pureMVCref_tableGameModel_controller_SocketController.otherPlayerIds);
		Main.otherPlayerId = ops;
	} catch( e ) {
		if (e instanceof js__$Boot_HaxeError) e = e.val;
		Main.alert("對手欄位格式錯誤! 請檢查!");
	}
};
Main.setReceiveInvitation = function(otherIds) {
	CallJs.api_startReceiveInvitation(per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId,otherIds,function(err,data) {
		if(err == "收到的名稱和目前的名稱一樣") {
			Main.slide("已經互相連線成功!");
			return;
		} else if(err != null) console.log(err); else org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(mediator_UI.do_show_recevie,{ show : true, ops : data});
	});
};
Main.saveOpponentToCookie = function(otherPlayerId) {
	if(HxOverrides.indexOf(Main.ary_ops,otherPlayerId,0) == -1) {
		Main.ary_ops.push(otherPlayerId);
		if(Main.ary_ops.length > 10) Main.ary_ops.shift();
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(Main.on_receiveOps,{ ary_ops : Main.ary_ops});
	}
	CallJs.setCookie("otherPlayerId",JSON.stringify(Main.ary_ops));
};
Main.createSelfDeck = function(deckId) {
	if(Main.cardSuit == null) return;
	var deck = Main.cardSuit[deckId];
	if(deck == null) return;
	Main.createItem(per_vic_pureMVCref_tableGameModel_Tool.createDataFromDeck(deck,per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId));
};
Main.loadDetail = function(game) {
	if(Reflect.field(Main.cardSuitsDetailsIsLoading,game) != null) return;
	Main.cardSuitsDetailsIsLoading[game] = true;
	if(Reflect.field(Main.cardSuitsDetails,game) == null) CallJs.cardinfoloader_load(game,"ch",Main.onLoadGameCallback(game));
};
Main.onLoadGameCallback = function(game) {
	return function(err,_cardlist) {
		Main.cardSuitsDetails[game] = _cardlist;
	};
};
Main.getCardDetailById = function(game,cid) {
	cid = StringTools.replace(cid,".jpg","");
	Main.loadDetail(game);
	if(Reflect.field(Main.cardSuitsDetails,game) == null) return null;
	return Lambda.find(Reflect.field(Main.cardSuitsDetails,game),function(cardDetail) {
		return cardDetail.id.indexOf(cid) == 0;
	});
};
Main.createItem = function(ary_data) {
	org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.do_create_item,per_vic_pureMVCref_tableGameModel_Tool.createItemFromData(ary_data));
};
Main.showDiceMessage = function(id,dice) {
	Main.slide("玩家 " + id + " 擲了 " + dice + " 點",4000);
};
Main.getCardImageUrlWithPackage = function(select,key) {
	return CallJs.api_getCardImageWithPackageName(select,key);
};
Main.slide = function(msg,time) {
	if(time == null) time = 2000;
	Main.j.messager.show({ title : "提示", msg : msg, timeout : time, showType : "slide", style : { left : "45%", top : "", bottom : 0}});
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
		if(err != null) Main.alert("錯誤:" + err); else cb(ret);
	};
};
Main.main = function() {
	new Main();
};
Main.getId = function() {
	return leo.utils.generateUUID();
};
Main.prototype = {
	onHtmlClick: function(type,params) {
		var _g = this;
		switch(type) {
		case "onBtnLoadGameClick":
			Main.currentSelect = params;
			this.chooseCardSuit(params);
			break;
		case "onBtnLoadClick":
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(Main.on_load_click);
			break;
		case "onBtnRecordClick":
			break;
		case "onBtnSaveClick":
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.do_getItemsString,{ callback : function(str) {
				org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(Main.on_save_click,{ str : str});
			}});
			break;
		case "onBtnInviteServer":
			if(per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId == "smart" || Main.otherPlayerId == "") {
				Main.slide("請先登入fb或者創建臨時id且並且填入對手");
				return;
			}
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.do_startHeartbeat);
			Main.setReceiveInvitation(per_vic_pureMVCref_tableGameModel_controller_SocketController.otherPlayerIds.join(","));
			CallJs.api_invite(per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId,per_vic_pureMVCref_tableGameModel_controller_SocketController.otherPlayerIds,function(err,data) {
				if(err != null) Main.alert(err);
			});
			Main.saveOpponentToCookie(Main.otherPlayerId);
			break;
		case "onBtnStartServer":
			if(per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId == "smart") {
				Main.slide("請先登入fb或者創建臨時id");
				return;
			}
			Main.setReceiveInvitation("");
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.createPlayerSocket,per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId);
			break;
		case "onBtnNotLoginClick":
			Main.j("#txt_id").textbox("setValue",Main.getId());
			break;
		case "onBtnLoginClick":
			Main.openLoading("登入並讀取資料中...");
			CallJs.myapp_facebook_login(function(ret) {
				Main.fbid = ret.authResponse.userID;
				Main.token = ret.authResponse.accessToken;
				Main.j("#txt_id").textbox("setValue",Main.fbid);
				CallJs.cardSuit_load2(Main.fbid,Main.token,Main.handleResponse(function(ret1) {
					_g.prepareCardsuit(ret1.cardSuit);
					Main.j("#btn_login").linkbutton("disable");
					Main.j("#btn_notLogin").linkbutton("disable");
					Main.closeLoading();
				}));
			});
			break;
		case "onBtnCreateDeck":
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(Main.on_createDeck_click);
			break;
		case "onBtnTableDeck":
			var str1 = Main.j("#txt_table").textbox("getValue");
			try {
				var obj_table = JSON.parse(str1);
				var ary_create = Lambda.fold(obj_table,function(curr,first) {
					if(curr.count == null) curr.count = 1;
					var _g1 = 0;
					var _g2 = curr.count;
					while(_g1 < _g2) {
						var i = _g1++;
						var copycurr = JSON.parse(JSON.stringify(curr));
						copycurr.owner = per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId;
						first.push(copycurr);
					}
					return first;
				},[]);
				Main.createItem(ary_create);
			} catch( e ) {
				if (e instanceof js__$Boot_HaxeError) e = e.val;
				Main.alert("輸入格式錯誤哦，請檢查!");
			}
			break;
		case "onBtnCustomDeck":
			var str2 = Main.j("#txt_custom").textbox("getValue");
			str2 = "[" + str2 + "]";
			try {
				var createobj = JSON.parse(str2);
				Main.createItem(per_vic_pureMVCref_tableGameModel_Tool.createDataFromDeck({ backId : "0", cards : createobj, game : Main.currentSelect},per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId));
			} catch( e1 ) {
				if (e1 instanceof js__$Boot_HaxeError) e1 = e1.val;
				Main.alert("輸入格式錯誤哦，請檢查!");
			}
			break;
		case "onConcreteDiceClick":
			var ary_data = ((function($this) {
				var $r;
				var _g3 = [];
				{
					var _g11 = 0;
					while(_g11 < 6) {
						var i1 = _g11++;
						_g3.push(i1);
					}
				}
				$r = _g3;
				return $r;
			}(this))).map(function(idstr) {
				return { extra : ["../common/images/createTable/other/dice_01.png","../common/images/createTable/other/dice_02.png","../common/images/createTable/other/dice_03.png","../common/images/createTable/other/dice_04.png","../common/images/createTable/other/dice_05.png","../common/images/createTable/other/dice_06.png"], pos : [100,100], type : "sequence", width : 50, height : 50};
			});
			Main.createItem(ary_data);
			break;
		case "onTokenClick":
			var ary_token = ["token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2"];
			var data1 = ary_token.map(function(idstr1) {
				return { extra : [idstr1,"other"], pos : [100,100], type : "token", width : 50, height : 50, owner : per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId};
			});
			Main.createItem(data1);
			break;
		case "onShaClick":
			var ary_sangosha = ["b1_1_fight","b1_1_sanda","b1_2_cold","b1_2_double","b1_2_gua","b1_3_river","b1_3_steal","b1_4_river","b1_4_steal","b1_5_dragon","b1_5_shadow","b1_6_bluejian","b1_6_happy","b1_7_nan","b1_7_sa","b1_8_sa","b1_8_sa","b1_9_sa","b1_9_sa","b1_10_sa","b1_10_sa","b1_11_steal","b1_11_strong","b1_12_eight","b1_12_river","b1_13_horse","b1_13_nan","b2_1_fight","b2_1_nu","b2_2_gua","b2_2_sa","b2_2_shield","b2_3_river","b2_3_sa","b2_4_river","b2_4_sa","b2_5_horse","b2_5_sa","b2_6_happy","b2_6_sa","b2_7_nan","b2_7_sa","b2_8_sa","b2_8_sa","b2_9_sa","b2_9_sa","b2_10_sa","b2_10_sa","b2_11_sa","b2_11_sa","b2_12_dao","b2_12_strong","b2_13_dao","b2_13_strong","r1_1_spray","r1_1_together","r1_2_run","r1_2_run","r1_3_tao","r1_3_wugu","r1_4_tao","r1_4_wugu","r1_5_gilin","r1_5_redhourse","r1_6_happy","r1_6_tao","r1_7_born","r1_7_tao","r1_8_born","r1_8_tao","r1_9_born","r1_9_tao","r1_10_sa","r1_10_sa","r1_11_born","r1_11_sa","r1_12_river","r1_12_sanda","r1_12_tao","r1_13_horse","r1_13_run","r2_1_fight","r2_1_nu","r2_2_run","r2_2_run","r2_3_run","r2_3_steal","r2_4_run","r2_4_steal","r2_5_axe","r2_5_run","r2_6_run","r2_6_sa","r2_7_run","r2_7_sa","r2_8_run","r2_8_sa","r2_9_run","r2_9_sa","r2_10_run","r2_10_sa","r2_11_run","r2_11_run","r2_12_draw","r2_12_strong","r2_12_tao","r2_13_hourse","r2_13_sa","role_001","role_002","role_003","role_004","role_005","role_006","role_007","role_008","role_009","role_010","role_011","role_012","role_013","role_014","role_015","role_016","role_017","role_018","role_019","role_020","role_021","role_022","role_023","role_024","role_025","id_0","id_0","id_0","id_0","id_1","id_1","id_3","id_3","id_3","id_2"];
			var data2 = ary_sangosha.map(function(idstr2) {
				return { extra : [idstr2,"49","sanguosha"], pos : [100,100], type : "card", width : 50, height : 75, back : false, lock : false, owner : per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId};
			});
			Main.createItem(data2);
			break;
		case "onPokerClick":
			var ary_poker = ["10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","62"];
			var data3 = ary_poker.map(function(idstr3) {
				return { extra : [idstr3,"34","poker"], pos : [100,100], type : "card", width : 50, height : 75, back : false, lock : false, owner : per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId};
			});
			Main.createItem(data3);
			break;
		}
		CallJs.googleTracking_click(type);
	}
	,prepareCardsuit: function(inputCardsuit) {
		Main.cardSuits = { };
		Lambda.foreach(inputCardsuit,function(cs) {
			if(Reflect.field(Main.cardSuits,cs.game) == null) Main.cardSuits[cs.game] = [];
			Reflect.field(Main.cardSuits,cs.game).push(cs);
			return true;
		});
		this.chooseCardSuit(Main.currentSelect);
		this.updateGameUI(Main.currentSelect);
	}
	,updateGameUI: function(currentSelect) {
		switch(currentSelect) {
		case "sangoWar":
			Main.j("#btn_sango").linkbutton("select");
			break;
		case "gundamWar":
			Main.j("#btn_gundam").linkbutton("select");
			break;
		case "gundamWarN":
			Main.j("#btn_gundamN").linkbutton("select");
			break;
		case "fighter":
			Main.j("#btn_fighter").linkbutton("select");
			break;
		case "magic":
			Main.j("#btn_magic").linkbutton("select");
			break;
		case "army":
			Main.j("#btn_army").linkbutton("select");
			break;
		case "yugioh":
			Main.j("#btn_yugioh").linkbutton("select");
			break;
		case "battleSpirits":
			Main.j("#btn_battleSpirits").linkbutton("select");
			break;
		case "crusade":
			Main.j("#btn_crusade").linkbutton("select");
			break;
		case "dragonZ":
			Main.j("#btn_dragonZ").linkbutton("select");
			break;
		case "sgs":
			Main.j("#btn_sgs").linkbutton("select");
			break;
		case "ws":
			Main.j("#btn_ws").linkbutton("select");
			break;
		}
	}
	,chooseCardSuit: function(suitName) {
		Main.cardSuit = Reflect.field(Main.cardSuits,suitName);
		var _g = Main.cardSuit;
		if(_g == null) Main.cardSuit = []; else switch(_g.length) {
		}
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification(Main.on_getSuit_success,{ cardSuit : Main.cardSuit});
	}
	,__class__: Main
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
var js_Browser = function() { };
js_Browser.__name__ = true;
js_Browser.alert = function(v) {
	window.alert(js_Boot.__string_rec(v,""));
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
var mediator_UI = function(mediatorName,viewComponent) {
	this.browserNotify = null;
	this.isShowNotify = false;
	var _g = this;
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
	this.getViewComponent().layout();
	this.mc_detailContainer = this.getViewComponent().find("#mc_detailContainer");
	this.mc_messagePanel = this.getViewComponent().find("#mc_messagePanel");
	this.mc_messagePanel.attr("isOpen",0);
	this.mc_messagePanel.find("#txt_messageInput").textbox({ onChange : function(nv,ov) {
		if(nv != "") {
			_g.mc_messagePanel.find("#txt_messageInput").textbox("setValue","");
			_g.addSingleMessage(per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId,nv);
			_g.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "chat", msg : { id : per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId, msg : nv}});
		}
	}});
	this.mc_messagePanel.find("#mc_quickButton > a").linkbutton({ onClick : function() {
		var buttonself = this;
		var msg;
		var _g1 = buttonself.id;
		switch(_g1) {
		case "btn_isCounter":
			msg = "尊貴的閣下，請問你要康這張牌嗎？";
			break;
		case "btn_isMyTurn":
			msg = "到我了嗎？我的朋友。";
			break;
		case "btn_yes":
			msg = "是，親愛的伙伴!";
			break;
		case "btn_no":
			msg = "否。";
			break;
		case "btn_turnEnd":
			msg = "趟~印度！";
			break;
		default:
			msg = "";
		}
		_g.addSingleMessage(per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId,msg);
		_g.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "chat", msg : { id : per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId, msg : msg}});
	}});
	this.mc_messagePanel.find("input").focus(function() {
		_g.sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.do_enable_command,{ enable : false});
	});
	this.mc_messagePanel.find("input").focusout(function() {
		_g.sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.do_enable_command,{ enable : true});
	});
	this.combo_deck = this.getViewComponent().find("#combo_deck");
	this.combo_ops = this.getViewComponent().find("#combo_ops");
	this.txt_savestr = this.getViewComponent().find("#txt_savestr");
	this.txt_savestr.find("input").focus(function() {
		_g.sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.do_enable_command,{ enable : false});
	});
	this.txt_savestr.find("input").focusout(function() {
		_g.sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.do_enable_command,{ enable : true});
	});
	this.btn_record = this.getViewComponent().find("#btn_record");
	this.mc_light = Main.j("#mc_light");
	this.dia_invite = Main.j("#dia_invite");
	this.dia_invite.find("#btn_receive").click(function() {
		var opsstr = _g.dia_invite.attr("ops");
		_g.sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.on_been_invite,{ inviteId : opsstr});
		_g.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.do_startHeartbeat);
		_g.showReceive(false);
	});
	this.combo_ops.combobox({ onChange : function(nv1,ov1) {
		Main.selectOps(nv1);
	}});
	this.btn_record.linkbutton({ onClick : function() {
		var record = _g.btn_record.hasClass("l-btn-selected");
		_g.sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.do_start_record,{ record : record});
	}});
	Main.j("#btn_connect").linkbutton();
	Main.j("#txt_id").textbox({ editable : false, onChange : function(nv2,od) {
		Main.changePlayer(nv2);
	}});
	Main.j(window).blur(function() {
		_g.isShowNotify = true;
	});
	Main.j(window).focus(function() {
		_g.isShowNotify = false;
		if(_g.browserNotify != null) {
			_g.browserNotify.close();
			_g.browserNotify = null;
		}
	});
};
mediator_UI.__name__ = true;
mediator_UI.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
mediator_UI.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return [per_vic_pureMVCref_tableGameModel_controller_MainController.on_select_cards,per_vic_pureMVCref_tableGameModel_controller_MainController.on_dice,per_vic_pureMVCref_tableGameModel_controller_MainController.on_been_invite,per_vic_pureMVCref_tableGameModel_controller_SocketController.on_socket_error,per_vic_pureMVCref_tableGameModel_controller_SocketController.on_socket_success,Main.on_getSuit_success,Main.on_receiveOps,per_vic_pureMVCref_tableGameModel_controller_SocketController.on_searchComplete,per_vic_pureMVCref_tableGameModel_controller_SocketController.on_heartbeat_event,per_vic_pureMVCref_tableGameModel_controller_SocketController.on_receiveMessage,Main.on_createDeck_click,Main.on_save_click,Main.on_load_click,mediator_UI.do_show_recevie];
	}
	,handleNotification: function(notification) {
		var _g2 = this;
		var _g = notification.getName();
		var str = _g;
		switch(_g) {
		case "on_receiveMessage":
			var _g1 = notification.getType();
			switch(_g1) {
			case "chat":
				var id = notification.getBody().id;
				var msg = notification.getBody().msg;
				this.addSingleMessage(id,msg);
				Main.slide(id + "說:" + msg);
				break;
			}
			if(this.isShowNotify && this.browserNotify == null) this.browserNotify = google.notify("你的對戰卡友動作囉! 趕快回去卡牌風雲應戰吧","../common/images/logo.jpg");
			break;
		case "on_socket_success":
			this.onSocketSuccess();
			break;
		case "on_socket_error":
			this.onSocketError();
			break;
		case "on_been_invite":
			this.combo_ops.combobox("setValue",notification.getBody().inviteId);
			break;
		case "on_dice":
			Main.showDiceMessage(notification.getBody().playerId,notification.getBody().dice);
			break;
		case "on_load_click":
			var loadstr = this.txt_savestr.textbox("getValue");
			try {
				var ary_cmds = JSON.parse(loadstr);
				ary_cmds.forEach(function(cmd) {
					var _g11 = cmd.type;
					switch(_g11) {
					case "addItems":
						_g2.sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.do_create_item,cmd.msg);
						haxe_Timer.delay(function() {
							_g2.sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.do_update_view);
						},1000);
						break;
					}
					return true;
				});
				this.txt_savestr.textbox("setValue","");
			} catch( error ) {
				if (error instanceof js__$Boot_HaxeError) error = error.val;
				Main.alert("格式不對哦!");
			}
			break;
		case "on_save_click":
			this.txt_savestr.textbox({ value : notification.getBody().str});
			break;
		case "on_createDeck_click":
			this.closeNorthPanel();
			break;
		case "on_heartbeat_event":
			this.showOnlineOffline(notification.getBody().conn);
			break;
		case "on_searchComplete":
			this.disabledOpponent();
			break;
		case "on_receiveOps":
			var ary_ops = notification.getBody().ary_ops;
			this.setComboOps(ary_ops);
			this.combo_ops.combobox("select",ary_ops[ary_ops.length - 1]);
			break;
		case "on_select_cards":
			this.showCards(notification.getBody().ary_select);
			break;
		case "on_getSuit_success":
			this.createComboDeck(notification.getBody().cardSuit);
			break;
		default:
			if(str == mediator_UI.do_show_recevie) this.showReceive(notification.getBody().show,notification.getBody().ops);
		}
	}
	,addSingleMessage: function(id,msg) {
		var mc_message = this.mc_messagePanel.find("#mc_message");
		var msgdom = Main.j("#tmpl_singleMessage").tmpl({ id : id + " : " + (function($this) {
			var $r;
			var _this = new Date();
			$r = HxOverrides.dateStr(_this);
			return $r;
		}(this)), msg : msg});
		if(id == per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId) msgdom.find("#txt_message").css("color","lightblue");
		mc_message.prepend(msgdom);
	}
	,showReceive: function(show,ops) {
		if(show) {
			this.dia_invite.dialog("open");
			this.dia_invite.attr("ops",ops);
			this.dia_invite.find("#txt_from").html(ops.split(",")[0]);
			var targetAry = ops.split(",");
			targetAry.shift();
			targetAry.unshift("你");
			this.dia_invite.find("#txt_output").html(targetAry.join(","));
		} else this.dia_invite.dialog("close");
	}
	,showOnlineOffline: function(show) {
		if(show) this.mc_light.css("background-color","green"); else this.mc_light.css("background-color","red");
	}
	,disabledOpponent: function() {
		this.combo_ops.combobox("disable");
	}
	,setComboOps: function(ary_ops) {
		var _g = this;
		this.combo_ops.empty();
		Lambda.foreach(ary_ops,function(str) {
			_g.combo_ops.append("<option value=\"" + str + "\">" + str + "</option>");
			return true;
		});
		this.combo_ops.combobox();
	}
	,createComboDeck: function(cardSuit) {
		var _g = this;
		if(cardSuit.length == 0) {
			this.combo_deck.empty();
			this.combo_deck.append("<option></option>");
			this.combo_deck.combobox();
			return;
		}
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
	,closeNorthPanel: function() {
		this.getViewComponent().layout("collapse","north");
	}
	,showCard: function(card) {
		if(card == null) return;
		if(!card.back || card.owner == per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId && card.viewer == per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId) {
			var game = card.extra[2];
			var cardId = card.extra[0];
			var url = Main.getCardImageUrlWithPackage(game,cardId);
			if(url == null) url = "../common/images/card/cardback_0.png";
			var div = Main.j("<div></div>");
			div.css("position","relative");
			var img = Main.j("<img></img>");
			img.attr("src",url);
			img.css("position","relative");
			img.css("top","0");
			img.css("left","0");
			img.load(function() {
				img.css("width","100%");
			});
			div.append(img);
			var img2 = Main.j("<img></img>");
			img2.css("position","absolute");
			img2.load(function() {
				img2.css("width","100%");
				img2.css("top","0");
				img2.css("left","0");
			});
			div.append(img2);
			if(game != "other" && game != "poker") {
				var detail = Main.getCardDetailById(game,cardId);
				var detaildiv = Main.j("<div></div>");
				detaildiv.css("position","relative");
				detaildiv.css("width","95%");
				detaildiv.css("top","0");
				detaildiv.css("left","0");
				detaildiv.css("font-size","16px");
				var str = "目前沒有資料或者資料還沒準備好哦，請稍後再點!";
				if(detail != null) {
					str = "";
					switch(game) {
					case "sengoku":
						str += detail.cname + " " + detail.atype;
						str += "<br/>";
						str += detail.content;
						str += "<br/>";
						str += detail.counter;
						break;
					case "ws":
						str += detail.id;
						str += "<br/>";
						str += detail.text;
						break;
					case "sgs":
						str += detail.name;
						str += "<br/>";
						str += detail.type;
						str += "<br/>";
						str += detail.text;
						break;
					case "dragonZ":
						str += detail.id;
						str += "<br/>";
						str += detail.name;
						str += "<br/>";
						str += detail.type;
						str += "<br/>";
						str += detail.descrition;
						break;
					case "crusade":
						str += detail.info_2;
						str += "<br/>";
						str += detail.info_4;
						str += "<br/>";
						str += detail.info_16;
						break;
					case "gundamWar":
						str += detail.name;
						str += "<br/>";
						str += detail.context;
						break;
					case "gundamWarN":
						str += detail.info_2;
						str += "<br/>";
						str += detail.info_11;
						str += "<br/>";
						str += detail.trans;
						str += "<br/>";
						str += detail.info_12;
						break;
					case "magic":
						str += detail.name + "(" + detail.id + ")";
						str += "<br/>";
						str += detail.text;
						break;
					case "battleSpirits":
						str += detail.info_41 + " " + detail.info_2;
						str += "<br/>";
						str += detail.info_5 + " " + detail.info_25 + " " + detail.info_3;
						str += "<br/>";
						str += detail.info_7 + " " + detail.info_8;
						str += "<br/>";
						str += detail.info_9 + " " + detail.info_10;
						str += "<br/>";
						str += detail.info_11 + " " + detail.info_12;
						str += "<br/>";
						str += detail.info_42;
						break;
					case "sangoWar":
						str += detail.cname + " " + detail.atype;
						str += "<br/>";
						str += detail.content;
						str += "<br/>";
						str += detail.counter;
						break;
					case "yugioh":
						str += detail.name;
						str += "<br/>";
						str += "level " + detail.level;
						str += "<br/>";
						str += detail.type;
						str += "<br/>";
						str += detail.desc;
						break;
					}
				} else if(game == null) {
					str = card.extra[0];
					str += "<br/>";
					str += card.extra[1];
				} else switch(game) {
				}
				detaildiv.html(str);
				div.append(detaildiv);
			}
			this.mc_detailContainer.append(div);
		}
	}
	,onSocketError: function() {
		Main.j("#btn_connect").linkbutton("enable");
		Main.alert("已斷線，請重新連線");
	}
	,onSocketSuccess: function() {
		Main.slide("連線成功");
		Main.j("#btn_connect").linkbutton("disable");
		Main.j("#btn_login").linkbutton("disable");
		Main.j("#btn_notLogin").linkbutton("disable");
	}
	,__class__: mediator_UI
});
var model_Model = function(mediatorName,viewComponent) {
	this.currentDeckId = 0;
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
};
model_Model.__name__ = true;
model_Model.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
model_Model.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return [mediator_UI.on_combo_deck_change,Main.on_createDeck_click];
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
		}
	}
	,__class__: model_Model
});
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
var per_vic_pureMVCref_tableGameModel_Tool = function() { };
per_vic_pureMVCref_tableGameModel_Tool.__name__ = true;
per_vic_pureMVCref_tableGameModel_Tool.createItem = function(extra,pos,type,width,height,back,lock,owner,viewer) {
	if(viewer == null) viewer = "";
	if(owner == null) owner = "desktop";
	if(lock == null) lock = false;
	if(back == null) back = true;
	if(height == null) height = 100;
	if(width == null) width = 100;
	if(type == null) type = "card";
	return { type : type, width : width, height : height, pos : pos, back : back, deg : 0, lock : lock, owner : owner, viewer : viewer, cardId : extra[0], id : per_vic_pureMVCref_tableGameModel_Tool.createDivId(), extra : extra, action : { sequence : Math.random()}};
};
per_vic_pureMVCref_tableGameModel_Tool.createDataFromDeck = function(deck,owner) {
	return deck.cards.map(function(str) {
		return { extra : [str,deck.backId == null?"0":deck.backId,deck.game], pos : [100,100], type : "card", width : 50, height : 75, back : true, lock : false, owner : owner};
	});
};
per_vic_pureMVCref_tableGameModel_Tool.createItemFromData = function(ary_data) {
	return ary_data.map(function(data) {
		return per_vic_pureMVCref_tableGameModel_Tool.createItem(data.extra,data.pos,data.type,data.width,data.height,data.back,data.lock,data.owner);
	});
};
per_vic_pureMVCref_tableGameModel_Tool.createItemDiv = function(type,model) {
	var div = per_vic_pureMVCref_tableGameModel_Tool.j("#tmpl_" + type).tmpl(model);
	return div;
};
per_vic_pureMVCref_tableGameModel_Tool.createDivId = function() {
	return leo.utils.generateUUID();
};
per_vic_pureMVCref_tableGameModel_Tool.slide = function(msg,time) {
	if(time == null) time = 2000;
	per_vic_pureMVCref_tableGameModel_Tool.j.messager.show({ title : "提示", msg : msg, timeout : time, showType : "slide"});
};
per_vic_pureMVCref_tableGameModel_Tool.alert = function(msg) {
	per_vic_pureMVCref_tableGameModel_Tool.j.messager.alert("錯誤",msg);
};
var per_vic_pureMVCref_tableGameModel_controller_MainController = function(mediatorName,viewComponent) {
	this.ary_record = null;
	this.isEnableCommand = true;
	this.isRecord = false;
	this.isCtrl = false;
	this.isList = false;
	this.pos_mouse = [0,0];
	this.ary_allItem = [];
	this.ary_select = [];
	var _g = this;
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
	leo.utils.initRectSelect(function(ary) {
		_g.onSelectItems(ary,false,_g.isCtrl);
		_g.zsorting();
	});
	per_vic_pureMVCref_tableGameModel_Tool.j("body").mousemove($bind(this,this.onBodyMouseMove));
	per_vic_pureMVCref_tableGameModel_Tool.j("body").keydown($bind(this,this.onBodyKeyDown));
	per_vic_pureMVCref_tableGameModel_Tool.j("body").keyup($bind(this,this.onBodyKeyUp));
	per_vic_pureMVCref_tableGameModel_Tool.j("body").mousedown($bind(this,this.onBodyKeyUp));
};
per_vic_pureMVCref_tableGameModel_controller_MainController.__name__ = true;
per_vic_pureMVCref_tableGameModel_controller_MainController.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
per_vic_pureMVCref_tableGameModel_controller_MainController.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return [per_vic_pureMVCref_tableGameModel_controller_MainController.do_create_item,per_vic_pureMVCref_tableGameModel_controller_MainController.do_getItemsString,per_vic_pureMVCref_tableGameModel_controller_SocketController.on_sendMessage,per_vic_pureMVCref_tableGameModel_controller_SocketController.on_receiveMessage,per_vic_pureMVCref_tableGameModel_controller_MainController.do_start_record,per_vic_pureMVCref_tableGameModel_controller_MainController.do_enable_command,per_vic_pureMVCref_tableGameModel_controller_MainController.do_update_view,per_vic_pureMVCref_tableGameModel_view_BasicItem.on_item_click,per_vic_pureMVCref_tableGameModel_view_BasicItem.on_item_lock];
	}
	,handleNotification: function(notification) {
		var _g1 = this;
		var _g = notification.getName();
		var str = _g;
		var str1 = _g;
		var str2 = _g;
		var str3 = _g;
		var str4 = _g;
		switch(_g) {
		case "on_item_lock":
			var div = notification.getBody().view;
			var lock = notification.getBody().lock;
			if(lock) this.viewComponent.prepend(div);
			break;
		case "on_item_click":
			var div1 = notification.getBody();
			this.onSelectItems(div1,true,this.isCtrl);
			this.zsorting();
			break;
		case "on_sendMessage":
			if(str == per_vic_pureMVCref_tableGameModel_controller_MainController.do_enable_command) this.isEnableCommand = notification.getBody().enable; else if(str1 == per_vic_pureMVCref_tableGameModel_controller_MainController.do_getItemsString) {
				var callback = notification.getBody().callback;
				var retobj;
				var _g11 = this.ary_record;
				if(_g11 == null) retobj = this.getFirstStepRecord(); else switch(_g11.length) {
				default:
					retobj = this.ary_record;
				}
				callback(JSON.stringify(retobj));
			} else if(str2 == per_vic_pureMVCref_tableGameModel_controller_MainController.do_update_view) {
				this.updateView(this.ary_allItem);
				this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "applyTransform", msg : { ary_item : this.ary_allItem, zs : false}});
			} else if(str3 == per_vic_pureMVCref_tableGameModel_controller_MainController.do_create_item) {
				var ary_creates = notification.getBody();
				Lambda.foreach(ary_creates,function(c) {
					_g1.createItem(c);
					return true;
				});
				this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "addItems", msg : ary_creates});
			} else if(str4 == per_vic_pureMVCref_tableGameModel_controller_MainController.do_start_record) this.setRecord(notification.getBody().record); else this.saveToRecord(notification.getBody());
			break;
		case "on_receiveMessage":
			if(str == per_vic_pureMVCref_tableGameModel_controller_MainController.do_enable_command) this.isEnableCommand = notification.getBody().enable; else if(str1 == per_vic_pureMVCref_tableGameModel_controller_MainController.do_getItemsString) {
				var callback1 = notification.getBody().callback;
				var retobj1;
				var _g12 = this.ary_record;
				if(_g12 == null) retobj1 = this.getFirstStepRecord(); else switch(_g12.length) {
				default:
					retobj1 = this.ary_record;
				}
				callback1(JSON.stringify(retobj1));
			} else if(str2 == per_vic_pureMVCref_tableGameModel_controller_MainController.do_update_view) {
				this.updateView(this.ary_allItem);
				this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "applyTransform", msg : { ary_item : this.ary_allItem, zs : false}});
			} else if(str3 == per_vic_pureMVCref_tableGameModel_controller_MainController.do_create_item) {
				var ary_creates1 = notification.getBody();
				Lambda.foreach(ary_creates1,function(c) {
					_g1.createItem(c);
					return true;
				});
				this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "addItems", msg : ary_creates1});
			} else if(str4 == per_vic_pureMVCref_tableGameModel_controller_MainController.do_start_record) this.setRecord(notification.getBody().record); else {
				this.saveToRecord(notification.getBody());
				var _g13 = notification.getType();
				switch(_g13) {
				case "chat":
					break;
				case "dice":
					this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.on_dice,notification.getBody());
					break;
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
					var needApply;
					if(notification.getBody().applyValue == null) needApply = true; else needApply = notification.getBody().applyValue;
					if(needApply) this.updateView(this.updateModel(notification.getBody().ary_item),notification.getBody().zs); else this.updateView(notification.getBody().ary_item,notification.getBody().zs,needApply);
					break;
				}
			}
			break;
		default:
			if(str == per_vic_pureMVCref_tableGameModel_controller_MainController.do_enable_command) this.isEnableCommand = notification.getBody().enable; else if(str1 == per_vic_pureMVCref_tableGameModel_controller_MainController.do_getItemsString) {
				var callback2 = notification.getBody().callback;
				var retobj2;
				var _g14 = this.ary_record;
				if(_g14 == null) retobj2 = this.getFirstStepRecord(); else switch(_g14.length) {
				default:
					retobj2 = this.ary_record;
				}
				callback2(JSON.stringify(retobj2));
			} else if(str2 == per_vic_pureMVCref_tableGameModel_controller_MainController.do_update_view) {
				this.updateView(this.ary_allItem);
				this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "applyTransform", msg : { ary_item : this.ary_allItem, zs : false}});
			} else if(str3 == per_vic_pureMVCref_tableGameModel_controller_MainController.do_create_item) {
				var ary_creates2 = notification.getBody();
				Lambda.foreach(ary_creates2,function(c) {
					_g1.createItem(c);
					return true;
				});
				this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "addItems", msg : ary_creates2});
			} else if(str4 == per_vic_pureMVCref_tableGameModel_controller_MainController.do_start_record) this.setRecord(notification.getBody().record);
		}
	}
	,saveToRecord: function(record) {
		if(this.ary_record != null) this.ary_record.push(record);
	}
	,getFirstStepRecord: function() {
		return [{ type : "addItems", msg : this.ary_allItem}];
	}
	,setRecord: function(r) {
		this.isRecord = r;
		if(this.isRecord) this.ary_record = []; else this.ary_record = null;
	}
	,updateModel: function(ary_receive) {
		var _g = this;
		return Lambda.fold(ary_receive,function(receive,curr) {
			var model = _g.getItemFromPoolById(receive.id);
			if(model != null) {
				model.pos = receive.pos.slice();
				model.deg = receive.deg;
				model.owner = receive.owner;
				model.viewer = receive.viewer;
				model.back = receive.back;
				model.lock = receive.lock;
				model.action = receive.action;
				curr.push(model);
			}
			return curr;
		},[]);
	}
	,updateView: function(ary_item,zs,apply) {
		if(apply == null) apply = true;
		if(zs == null) zs = false;
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
			if(itemModel7 == null) return true;
			var m = _g.facade.retrieveMediator(itemModel7.id);
			if(m == null) return true;
			var item7;
			item7 = js_Boot.__cast(m , per_vic_pureMVCref_tableGameModel_view_IItem);
			var dom2 = _g.facade.retrieveMediator(itemModel7.id).getViewComponent();
			if(apply) {
				updateRotate(item7,dom2,itemModel7);
				updateMove(item7,dom2,itemModel7);
				updateOwner(item7,itemModel7);
				updateViewer(item7,itemModel7);
				updateFlip(item7,itemModel7);
				updateLock(item7,itemModel7);
				updateAction(item7,itemModel7);
			}
			if(zs) dom2.appendTo(dom2.parent());
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
		case "data":
			item = new per_vic_pureMVCref_tableGameModel_view_DataItem(model.id,per_vic_pureMVCref_tableGameModel_Tool.createItemDiv(model.type,model));
			break;
		case "card":
			var parseData = JSON.parse(JSON.stringify(model));
			parseData.extra = [api.getCardImageWithPackageName(model.extra[2],model.extra[0]),"../common/images/card/cardback_" + model.extra[1] + ".jpg"];
			item = new per_vic_pureMVCref_tableGameModel_view_CardItem(model.id,per_vic_pureMVCref_tableGameModel_Tool.createItemDiv(model.type,parseData));
			break;
		case "sequence":
			item = new per_vic_pureMVCref_tableGameModel_view_SequenceItem(model.id,per_vic_pureMVCref_tableGameModel_Tool.createItemDiv(model.type,model));
			break;
		case "token":
			var parseData1 = JSON.parse(JSON.stringify(model));
			parseData1.extra = [api.getCardImageWithPackageName(model.extra[1],model.extra[0])];
			item = new per_vic_pureMVCref_tableGameModel_view_TokenItem(model.id,per_vic_pureMVCref_tableGameModel_Tool.createItemDiv(model.type,parseData1));
			break;
		default:
			item = new per_vic_pureMVCref_tableGameModel_view_BasicItem(model.id,per_vic_pureMVCref_tableGameModel_Tool.createItemDiv(model.type,model));
		}
		item.viewComponent.css("left",model.pos[0] + "px");
		item.viewComponent.css("top",model.pos[1] + "px");
		this.facade.registerMediator(item);
		this.viewComponent.append(item.viewComponent);
		(js_Boot.__cast(item , per_vic_pureMVCref_tableGameModel_view_IItem)).setOwner(model.owner);
		(js_Boot.__cast(item , per_vic_pureMVCref_tableGameModel_view_IItem)).setViewer(model.viewer);
		(js_Boot.__cast(item , per_vic_pureMVCref_tableGameModel_view_IItem)).flip(model.back);
		(js_Boot.__cast(item , per_vic_pureMVCref_tableGameModel_view_IItem)).action(model.action);
		this.ary_allItem.push(model);
	}
	,onBodyKeyDown: function(e) {
		var _g = Std.parseInt(e.which);
		if(_g != null) switch(_g) {
		case 17:
			this.isCtrl = true;
			break;
		}
	}
	,onBodyKeyUp: function(e) {
		if(!this.isEnableCommand) return;
		this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.on_press,null,e.which);
		var _g = Std.parseInt(e.which);
		if(_g != null) switch(_g) {
		case 84:case 68:case 65:case 75:case 73:case 79:case 80:
			break;
		case 17:
			this.isCtrl = false;
			break;
		case 1:
			return;
		default:
			if(this.ary_select.length == 0) return;
		} else if(this.ary_select.length == 0) return;
		var _g1 = Std.parseInt(e.which);
		if(_g1 != null) switch(_g1) {
		case 72:
			this.deleteModel(this.ary_select);
			this.deleteView(this.ary_select);
			break;
		case 73:
			var token = per_vic_pureMVCref_tableGameModel_Tool.createItem(["token_0","other"],this.pos_mouse.slice(0),"token",50,50,true,false,per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId);
			this.createItem(token);
			this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "addItems", msg : [token]});
			break;
		case 79:
			var token1 = per_vic_pureMVCref_tableGameModel_Tool.createItem(["token_1","other"],this.pos_mouse.slice(0),"token",50,50,true,false,per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId);
			this.createItem(token1);
			this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "addItems", msg : [token1]});
			break;
		case 80:
			var token2 = per_vic_pureMVCref_tableGameModel_Tool.createItem(["token_2","other"],this.pos_mouse.slice(0),"token",50,50,true,false,per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId);
			this.createItem(token2);
			this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "addItems", msg : [token2]});
			break;
		case 84:
			var dice = Math.floor(Math.random() * 100);
			this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.on_dice,{ playerId : per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId, dice : dice});
			this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "dice", msg : { playerId : per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId, dice : dice}});
			break;
		case 82:
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
			this.updateView(this.ary_select,true);
			break;
		case 81:
			this.shuffleModel();
			this.togetherModel();
			this.updateView(this.ary_select,true);
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
			if(this.isList) {
				this.togetherModel();
				this.updateView(this.ary_select,true);
			} else {
				this.listModel();
				this.updateView(this.ary_select);
			}
			this.isList = !this.isList;
			break;
		case 86:
			this.setModelViewer();
			this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.on_select_cards,{ ary_select : this.ary_select});
			this.updateView(this.ary_select);
			break;
		case 70:
			this.flipModel();
			this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.on_select_cards,{ ary_select : this.ary_select});
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
		case 17:
			break;
		case 84:case 73:case 79:case 80:
			break;
		case 72:
			this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "deleteItem", msg : this.ary_select});
			break;
		case 75:
			this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "applyTransform", msg : { ary_item : this.ary_allItem, zs : false}});
			break;
		case 87:case 81:case 83:
			this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "applyTransform", msg : { ary_item : this.ary_select, zs : true}});
			break;
		default:
			this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "applyTransform", msg : { ary_item : this.ary_select, zs : false}});
		}
	}
	,rotateModel: function(deg) {
		Lambda.foreach(this.ary_select,function(item) {
			item.deg += deg;
			return true;
		});
	}
	,onSelectItems: function(ary,selectLock,addSelect) {
		if(addSelect == null) addSelect = false;
		if(selectLock == null) selectLock = false;
		var _g = this;
		if(addSelect) {
			if(this.ary_select.length == 0) this.ary_select = ary.map(function(model) {
				return _g.getItemFromPoolById(model.id);
			}); else {
				var needRemove = [];
				var needAdd = [];
				Lambda.foreach(ary,function(model1) {
					var _g2 = 0;
					var _g1 = _g.ary_select.length;
					while(_g2 < _g1) {
						var i = _g2++;
						if(_g.ary_select[i].id == model1.id) needRemove.push(model1);
					}
					if(needRemove.length == 0) needAdd.push(model1);
					return true;
				});
				var _g11 = 0;
				var _g3 = needRemove.length;
				while(_g11 < _g3) {
					var j = _g11++;
					var i1 = this.ary_select.length;
					while(i1 > 0) {
						--i1;
						if(this.ary_select[i1].id == needRemove[j].id) this.ary_select.splice(i1,1);
					}
				}
				this.ary_select = this.ary_select.concat(needAdd.map(function(model2) {
					return _g.getItemFromPoolById(model2.id);
				}));
			}
		} else this.ary_select = ary.map(function(model3) {
			return _g.getItemFromPoolById(model3.id);
		});
		if(!selectLock) this.ary_select = this.filterLock(this.ary_select);
		this.indexSorting();
		this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.on_select_cards,{ ary_select : this.ary_select});
		if(this.ary_select.length != 0) this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,{ type : "applyTransform", msg : { ary_item : this.ary_select, zs : true, applyValue : false}});
	}
	,indexSorting: function() {
		this.ary_select.sort(function(a,b) {
			if(b.pos[0] < a.pos[0]) return 1;
			return -1;
		});
		this.ary_select.sort(function(a1,b1) {
			if(b1.pos[1] < a1.pos[1]) return 1;
			return -1;
		});
	}
	,selectMyItem: function() {
		this.ary_select = this.filterLock(this.getMyItemFromPool());
		this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_MainController.on_select_cards,{ ary_select : this.ary_select});
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
			if(itemModel.owner == "" || itemModel.owner == per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId) itemModel.lock = !itemModel.lock; else continue;
		}
	}
	,unlockAllItem: function() {
		var _g1 = 0;
		var _g = this.ary_allItem.length;
		while(_g1 < _g) {
			var i = _g1++;
			var itemModel = this.ary_allItem[i];
			if(itemModel.owner == "" || itemModel.owner == per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId) itemModel.lock = false; else continue;
		}
	}
	,setModelOwner: function() {
		var _g1 = 0;
		var _g = this.ary_select.length;
		while(_g1 < _g) {
			var i = _g1++;
			var itemModel = this.ary_select[i];
			var item;
			item = js_Boot.__cast(this.facade.retrieveMediator(itemModel.id) , per_vic_pureMVCref_tableGameModel_view_IItem);
			if(itemModel.owner == per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId) itemModel.owner = ""; else if(itemModel.owner == "") itemModel.owner = per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId; else {
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
			item = js_Boot.__cast(this.facade.retrieveMediator(itemModel.id) , per_vic_pureMVCref_tableGameModel_view_IItem);
			if(itemModel.viewer == per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId) itemModel.viewer = ""; else {
				itemModel.viewer = per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId;
				if(itemModel.viewer == "") itemModel.viewer = per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId;
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
			if(itemModel.owner == "" || itemModel.owner == per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId) itemModel.back = !itemModel.back; else continue;
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
			return per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId == model.owner;
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
			HxOverrides.remove(_g.ary_allItem,removeItem);
			return true;
		});
	}
	,deleteView: function(ary_receive) {
		var _g = this;
		Lambda.foreach(ary_receive,function(removeItem) {
			try {
				if(removeItem == null) return true;
				var m = _g.facade.retrieveMediator(removeItem.id);
				if(m != null) {
					m.getViewComponent().remove();
					_g.facade.removeMediator(m.getMediatorName());
				}
			} catch( e ) {
				if (e instanceof js__$Boot_HaxeError) e = e.val;
				console.log(e);
			}
			return true;
		});
	}
	,moveModel: function() {
		if(this.ary_select.length == 0) return;
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
	,__class__: per_vic_pureMVCref_tableGameModel_controller_MainController
});
var per_vic_pureMVCref_tableGameModel_controller_SocketController = function(mediatorName,viewComponent) {
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
};
per_vic_pureMVCref_tableGameModel_controller_SocketController.__name__ = true;
per_vic_pureMVCref_tableGameModel_controller_SocketController.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
per_vic_pureMVCref_tableGameModel_controller_SocketController.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return [per_vic_pureMVCref_tableGameModel_controller_SocketController.setOpponents,per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage,per_vic_pureMVCref_tableGameModel_controller_SocketController.do_startHeartbeat,per_vic_pureMVCref_tableGameModel_controller_SocketController.createPlayerSocket];
	}
	,handleNotification: function(notification) {
		var _g = notification.getName();
		var str = _g;
		if(str == per_vic_pureMVCref_tableGameModel_controller_SocketController.do_startHeartbeat) this.startHeartbeat(); else {
			var str1 = _g;
			if(str1 == per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage) {
				var type = notification.getBody().type;
				var msg = notification.getBody().msg;
				this.messageSocket(type,msg);
			} else {
				var str2 = _g;
				if(str2 == per_vic_pureMVCref_tableGameModel_controller_SocketController.setOpponents) this.ary_ops = notification.getBody().slice(); else {
					var str3 = _g;
					if(str3 == per_vic_pureMVCref_tableGameModel_controller_SocketController.createPlayerSocket) this.createSocket(notification.getBody());
				}
			}
		}
	}
	,startHeartbeat: function() {
		var _g2 = this;
		var _g1 = 0;
		var _g = per_vic_pureMVCref_tableGameModel_controller_SocketController.otherPlayerIds.length;
		while(_g1 < _g) {
			var i = _g1++;
			var fn = (function(_i) {
				return function(conn) {
					per_vic_pureMVCref_tableGameModel_controller_SocketController.otherPlayerIdsForCheck[_i] = conn;
					per_vic_pureMVCref_tableGameModel_controller_SocketController.isConntect = Lambda.fold(per_vic_pureMVCref_tableGameModel_controller_SocketController.otherPlayerIdsForCheck,function(curr,first) {
						return first && curr;
					},true);
					if(per_vic_pureMVCref_tableGameModel_controller_SocketController.isConntect) _g2.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.on_searchComplete);
					_g2.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.on_heartbeat_event,{ conn : per_vic_pureMVCref_tableGameModel_controller_SocketController.isConntect});
				};
			})(i);
			CallJs.api_startHeartbeat(per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId,per_vic_pureMVCref_tableGameModel_controller_SocketController.otherPlayerIds[i],fn);
		}
	}
	,createSocket: function(id) {
		var _g = this;
		var onSocketError = function() {
			per_vic_pureMVCref_tableGameModel_controller_SocketController.isConntect = false;
			per_vic_pureMVCref_tableGameModel_controller_SocketController.isCanSendMessage = false;
			_g.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.on_socket_error);
		};
		api.createChannel(id,{ onopen : function() {
			per_vic_pureMVCref_tableGameModel_controller_SocketController.isCanSendMessage = true;
			_g.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.on_socket_success);
		}, onmessage : function(json) {
			_g.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.on_receiveMessage,json.msg,json.type);
		}, onerror : onSocketError, onclose : onSocketError});
	}
	,messageSocket: function(type,msg) {
		this.sendNotification(per_vic_pureMVCref_tableGameModel_controller_SocketController.on_sendMessage,{ type : type, msg : msg});
		if(!per_vic_pureMVCref_tableGameModel_controller_SocketController.isCanSendMessage) return;
		if(this.ary_ops == null) return;
		Lambda.foreach(this.ary_ops,function(op) {
			if(op != per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId) api.sendMessageToSomeone(op,type,msg);
			return true;
		});
	}
	,handleResponse: function(cb) {
		return function(err,ret) {
			if(err != null) js_Browser.alert("錯誤:" + err); else cb(ret);
		};
	}
	,__class__: per_vic_pureMVCref_tableGameModel_controller_SocketController
});
var per_vic_pureMVCref_tableGameModel_view_IItem = function() { };
per_vic_pureMVCref_tableGameModel_view_IItem.__name__ = true;
per_vic_pureMVCref_tableGameModel_view_IItem.prototype = {
	__class__: per_vic_pureMVCref_tableGameModel_view_IItem
};
var per_vic_pureMVCref_tableGameModel_view_BasicItem = function(mediatorName,viewComponent) {
	this._owner = "";
	this._viewer = "";
	this._filp = true;
	var _g = this;
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
	viewComponent.click(function(e) {
		_g.sendNotification(per_vic_pureMVCref_tableGameModel_view_BasicItem.on_item_click,[viewComponent[0]]);
	});
};
per_vic_pureMVCref_tableGameModel_view_BasicItem.__name__ = true;
per_vic_pureMVCref_tableGameModel_view_BasicItem.__interfaces__ = [per_vic_pureMVCref_tableGameModel_view_IItem];
per_vic_pureMVCref_tableGameModel_view_BasicItem.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
per_vic_pureMVCref_tableGameModel_view_BasicItem.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	action: function(value) {
	}
	,lock: function(l) {
		if(l) {
			this.viewComponent.find("#img_lock").show();
			this.viewComponent.addClass("lock");
		} else {
			this.viewComponent.find("#img_lock").hide();
			this.viewComponent.removeClass("lock");
		}
		this.sendNotification(per_vic_pureMVCref_tableGameModel_view_BasicItem.on_item_lock,{ view : this.viewComponent, lock : l});
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
		if(this._owner == per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId) this.viewComponent.find("#img_owner").show(); else this.viewComponent.find("#img_owner").hide();
		this.checkViewerAndShowCard();
	}
	,getViewer: function() {
		return this._viewer;
	}
	,getOwner: function() {
		return this._owner;
	}
	,listNotificationInterests: function() {
		return [per_vic_pureMVCref_tableGameModel_controller_MainController.on_select_cards];
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
			if(this._viewer == per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId) {
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
		per_vic_pureMVCref_tableGameModel_Tool.j({ deg : sd}).animate({ deg : ed},{ duration : 300, step : function(now) {
			_g.getViewComponent().css({ '-moz-transform' : "rotate(" + now + "deg)", '-webkit-transform' : "rotate(" + now + "deg)", '-o-transform' : "rotate(" + now + "deg)", '-ms-transform' : "rotate(" + now + "deg)", 'transform' : "rotate(" + now + "deg)"});
		}});
	}
	,__class__: per_vic_pureMVCref_tableGameModel_view_BasicItem
});
var per_vic_pureMVCref_tableGameModel_view_CardItem = function(mediatorName,viewComponent) {
	per_vic_pureMVCref_tableGameModel_view_BasicItem.call(this,mediatorName,viewComponent);
};
per_vic_pureMVCref_tableGameModel_view_CardItem.__name__ = true;
per_vic_pureMVCref_tableGameModel_view_CardItem.__super__ = per_vic_pureMVCref_tableGameModel_view_BasicItem;
per_vic_pureMVCref_tableGameModel_view_CardItem.prototype = $extend(per_vic_pureMVCref_tableGameModel_view_BasicItem.prototype,{
	__class__: per_vic_pureMVCref_tableGameModel_view_CardItem
});
var per_vic_pureMVCref_tableGameModel_view_DataItem = function(mediatorName,viewComponent) {
	per_vic_pureMVCref_tableGameModel_view_BasicItem.call(this,mediatorName,viewComponent);
};
per_vic_pureMVCref_tableGameModel_view_DataItem.__name__ = true;
per_vic_pureMVCref_tableGameModel_view_DataItem.__super__ = per_vic_pureMVCref_tableGameModel_view_BasicItem;
per_vic_pureMVCref_tableGameModel_view_DataItem.prototype = $extend(per_vic_pureMVCref_tableGameModel_view_BasicItem.prototype,{
	__class__: per_vic_pureMVCref_tableGameModel_view_DataItem
});
var per_vic_pureMVCref_tableGameModel_view_SequenceItem = function(mediatorName,viewComponent) {
	per_vic_pureMVCref_tableGameModel_view_BasicItem.call(this,mediatorName,viewComponent);
};
per_vic_pureMVCref_tableGameModel_view_SequenceItem.__name__ = true;
per_vic_pureMVCref_tableGameModel_view_SequenceItem.__super__ = per_vic_pureMVCref_tableGameModel_view_BasicItem;
per_vic_pureMVCref_tableGameModel_view_SequenceItem.prototype = $extend(per_vic_pureMVCref_tableGameModel_view_BasicItem.prototype,{
	action: function(value) {
		var mc_seqs = this.viewComponent.find("#mc_seqs");
		var count = mc_seqs.children().length;
		var showTarget = function(index) {
			mc_seqs.find("img").hide();
			mc_seqs.children().eq(index).show();
		};
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
	,__class__: per_vic_pureMVCref_tableGameModel_view_SequenceItem
});
var per_vic_pureMVCref_tableGameModel_view_TokenItem = function(mediatorName,viewComponent) {
	per_vic_pureMVCref_tableGameModel_view_BasicItem.call(this,mediatorName,viewComponent);
};
per_vic_pureMVCref_tableGameModel_view_TokenItem.__name__ = true;
per_vic_pureMVCref_tableGameModel_view_TokenItem.__super__ = per_vic_pureMVCref_tableGameModel_view_BasicItem;
per_vic_pureMVCref_tableGameModel_view_TokenItem.prototype = $extend(per_vic_pureMVCref_tableGameModel_view_BasicItem.prototype,{
	flip: function(f) {
	}
	,__class__: per_vic_pureMVCref_tableGameModel_view_TokenItem
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
Date.prototype.__class__ = Date;
Date.__name__ = ["Date"];
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
CallJs.setCookie = setCookie;
CallJs.getCookie = getCookie;
CallJs.cardSuit_load2 = cardSuit.load2;
CallJs.cardSuit_defaultModel = cardSuit.defaultModel;
CallJs.api_invite = api.invite;
CallJs.api_startReceiveInvitation = api.startReceiveInvitation;
CallJs.api_createUser = api.createUser;
CallJs.api_users = api.users;
CallJs.api_message = api.message;
CallJs.api_pollMessage = api.pollMessage;
CallJs.api_installPollMessageCallback = api.installPollMessageCallback;
CallJs.api_clear = api.clear;
CallJs.api_getCardPackage = api.getCardPackage;
CallJs.api_getCardPackageWithUrl = api.getCardPackageWithUrl;
CallJs.api_getCardSuitPackageWithUrl = api.getCardSuitPackageWithUrl;
CallJs.api_getCardImageWithPackageName = api.getCardImageWithPackageName;
CallJs.api_getCardSuit = api.getCardSuit;
CallJs.api_startHeartbeat = api.startHeartbeat;
CallJs.api_createChannel = api.createChannel;
CallJs.myapp_facebook_login = myapp.facebook.login;
CallJs.myapp_facebook_init = myapp.facebook.init;
CallJs.leo_utils_initRectSelect = leo.utils.initRectSelect;
CallJs.yugioh_load = yugioh.load;
CallJs.sangoWar_loadCh = sangoWar.loadCh;
CallJs.gundamWar_load = gundamWar.load;
CallJs.gundamWarN_load = gundamWarN.load;
CallJs.battleSpirits_load = battleSpirits.load;
CallJs.sgs_load = sgs.load;
CallJs.dragonZ_load = dragonZ.load;
CallJs.crusade_load = crusade.load;
CallJs.ws_load = ws.load;
CallJs.magic_load = magic.load;
CallJs.googleTracking_click = googleTracking.click;
CallJs.cardinfoloader_load = cardinfoloader.load;
Main.on_getSuit_success = "on_getSuit_success";
Main.on_createDeck_click = "on_createDeck_click";
Main.on_receiveOps = "on_receiveOps";
Main.on_save_click = "on_save_click";
Main.on_load_click = "on_load_click";
Main.j = $;
Main.fbid = "";
Main.token = "";
Main.otherPlayerId = "";
Main.currentSelect = "yugioh";
Main.cardSuits = { };
Main.cardSuitsDetails = { };
Main.cardSuitsDetailsIsLoading = { };
js_Boot.__toStr = {}.toString;
org_puremvc_haxe_patterns_mediator_Mediator.NAME = "Mediator";
mediator_UI.do_show_recevie = "do_show_recevie";
mediator_UI.on_combo_deck_change = "on_combo_deck_change";
per_vic_pureMVCref_tableGameModel_Tool.j = $;
per_vic_pureMVCref_tableGameModel_controller_MainController.do_create_item = "do_create_item";
per_vic_pureMVCref_tableGameModel_controller_MainController.do_getItemsString = "do_getItemsString";
per_vic_pureMVCref_tableGameModel_controller_MainController.do_start_record = "do_start_record";
per_vic_pureMVCref_tableGameModel_controller_MainController.do_enable_command = "do_enable_command";
per_vic_pureMVCref_tableGameModel_controller_MainController.do_update_view = "do_update_view";
per_vic_pureMVCref_tableGameModel_controller_MainController.on_been_invite = "on_been_invite";
per_vic_pureMVCref_tableGameModel_controller_MainController.on_select_cards = "on_select_cards";
per_vic_pureMVCref_tableGameModel_controller_MainController.on_press = "on_press";
per_vic_pureMVCref_tableGameModel_controller_MainController.on_dice = "on_dice";
per_vic_pureMVCref_tableGameModel_controller_SocketController.setOpponents = "setOpponents";
per_vic_pureMVCref_tableGameModel_controller_SocketController.sendMessage = "sendMessage";
per_vic_pureMVCref_tableGameModel_controller_SocketController.createPlayerSocket = "createPlayerSocket";
per_vic_pureMVCref_tableGameModel_controller_SocketController.do_startHeartbeat = "do_startHeartbeat";
per_vic_pureMVCref_tableGameModel_controller_SocketController.on_searchComplete = "on_searchComplete";
per_vic_pureMVCref_tableGameModel_controller_SocketController.on_heartbeat_event = "on_heartbeat_event";
per_vic_pureMVCref_tableGameModel_controller_SocketController.on_sendMessage = "on_sendMessage";
per_vic_pureMVCref_tableGameModel_controller_SocketController.on_receiveMessage = "on_receiveMessage";
per_vic_pureMVCref_tableGameModel_controller_SocketController.playerId = "smart";
per_vic_pureMVCref_tableGameModel_controller_SocketController.otherPlayerIds = [];
per_vic_pureMVCref_tableGameModel_controller_SocketController.otherPlayerIdsForCheck = [];
per_vic_pureMVCref_tableGameModel_controller_SocketController.isConntect = false;
per_vic_pureMVCref_tableGameModel_controller_SocketController.isCanSendMessage = false;
per_vic_pureMVCref_tableGameModel_controller_SocketController.on_socket_error = "on_socket_error";
per_vic_pureMVCref_tableGameModel_controller_SocketController.on_socket_success = "on_socket_success";
per_vic_pureMVCref_tableGameModel_view_BasicItem.on_item_click = "on_item_click";
per_vic_pureMVCref_tableGameModel_view_BasicItem.on_item_lock = "on_item_lock";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
