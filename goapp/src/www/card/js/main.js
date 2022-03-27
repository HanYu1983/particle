(function ($global) { "use strict";
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var CallJs = function() { };
CallJs.__name__ = true;
CallJs.setCookie = function(cmd,otherPlayers) {
	setCookie(cmd,otherPlayers);
};
CallJs.api_loadUserConfig = function(cmd,value) {
	return api.loadUserConfig(cmd,value);
};
CallJs.api_saveUserConfig = function(cmd,saveAry) {
	api.saveUserConfig(cmd,saveAry);
};
CallJs.api_getTimerContext = function() {
	return api.getTimerContext();
};
CallJs.api_getTime = function(name) {
	return api.getTime(name);
};
CallJs.api_getCardImageWithPackageName = function(select,key) {
	return api.getCardImageWithPackageName(select,key);
};
CallJs.cardinfoloader_load = function(game,lang,cb) {
	cardinfoloader.load(game,lang,cb);
};
CallJs.myapp_facebook_init = function(fbid,cb) {
	myapp.facebook.init(fbid,cb);
};
CallJs.cardSuit_defaultModel = function() {
	return cardSuit.defaultModel();
};
CallJs.api_resetTimer = function(playerId,otherPlayerIds,cb) {
	return api.resetTimer(playerId,otherPlayerIds,cb);
};
CallJs.api_stopTimer = function(playerId,otherPlayerIds,cb) {
	return api.stopTimer(playerId,otherPlayerIds,cb);
};
CallJs.api_startTimer = function(playerId,otherPlayerIds,cb) {
	api.startTimer(playerId,otherPlayerIds,cb);
};
CallJs.api_switchUser = function(playerId,otherPlayerIds,cb) {
	api.switchUser(playerId,otherPlayerIds,cb);
};
CallJs.api_startReceiveInvitation = function(playerId,otherPlayerIds,cb) {
	api.startReceiveInvitation(playerId,otherPlayerIds,cb);
};
CallJs.api_invite = function(playerId,otherPlayerIds,cb) {
	api.invite(playerId,otherPlayerIds,cb);
};
CallJs.myapp_facebook_login = function(cb) {
	myapp.facebook.login(cb);
};
CallJs.cardSuit_load2 = function(fbid,token,cb) {
	cardSuit.load2(fbid,token,cb);
};
CallJs.googleTracking_click = function(type) {
	googleTracking.click(type);
};
CallJs.getCookie = function(name) {
	return getCookie(name);
};
CallJs.api_startHeartbeat = function(playerId,otherPlayerId,cb) {
	api.startHeartbeat(playerId,otherPlayerId,cb);
};
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10 ? "0" + m : "" + m) + "-" + (d < 10 ? "0" + d : "" + d) + " " + (h < 10 ? "0" + h : "" + h) + ":" + (mi < 10 ? "0" + mi : "" + mi) + ":" + (s < 10 ? "0" + s : "" + s);
};
HxOverrides.remove = function(a,obj) {
	var i = a.indexOf(obj);
	if(i == -1) {
		return false;
	}
	a.splice(i,1);
	return true;
};
HxOverrides.now = function() {
	return Date.now();
};
var Lambda = function() { };
Lambda.__name__ = true;
Lambda.foreach = function(it,f) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		if(!f(x1)) {
			return false;
		}
	}
	return true;
};
Lambda.fold = function(it,f,first) {
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		first = f(x1,first);
	}
	return first;
};
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var _ = $getIterator(it);
		while(_.hasNext()) {
			var _1 = _.next();
			++n;
		}
	} else {
		var x = $getIterator(it);
		while(x.hasNext()) {
			var x1 = x.next();
			if(pred(x1)) {
				++n;
			}
		}
	}
	return n;
};
Lambda.find = function(it,f) {
	var v = $getIterator(it);
	while(v.hasNext()) {
		var v1 = v.next();
		if(f(v1)) {
			return v1;
		}
	}
	return null;
};
var Main = function() {
	var _gthis = this;
	window.document.addEventListener("contextmenu",function(e) {
		e.preventDefault();
	},false);
	Main.j(window.document).ready(function() {
		org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new controller_MainController(null,Main.j("#container_cards")));
		org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new controller_SocketController("SocketController"));
		org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new model_Model("model"));
		org_puremvc_haxe_patterns_facade_Facade.getInstance().registerMediator(new view_UI("UI",Main.j(".easyui-layout")));
		Main.openLoading("準備中...請稍等");
		var fbappId = config.fbid[config.fbid.which];
		CallJs.myapp_facebook_init(fbappId,function() {
			_gthis.updateGameUI(Main.currentSelect);
			Main.closeLoading();
			_gthis.prepareCardsuit(CallJs.cardSuit_defaultModel().cardSuit);
			Main.slide("所有卡牌準備完畢，登入並選擇填入對手的id後，才能開始創建套牌哦!");
		});
		window["onHtmlClick"] = $bind(_gthis,_gthis.onHtmlClick);
		if(CallJs.getCookie("otherPlayerId") != null) {
			Main.ary_ops = JSON.parse(CallJs.getCookie("otherPlayerId"));
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification("on_receiveOps",{ ary_ops : Main.ary_ops});
		} else {
			Main.ary_ops = [];
		}
		_gthis.timer = new haxe_Timer(1000);
		_gthis.timer.run = function() {
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification("on_timer_update");
		};
	});
};
Main.__name__ = true;
Main.changePlayer = function(player) {
	controller_SocketController.playerId = player;
};
Main.selectOps = function(ops) {
	try {
		controller_SocketController.otherPlayerIds = ops.split(",");
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification("setOpponents",controller_SocketController.otherPlayerIds);
		Main.otherPlayerId = ops;
	} catch( _g ) {
		Main.alert("對手欄位格式錯誤! 請檢查!");
	}
};
Main.setReceiveInvitation = function(otherIds) {
	CallJs.api_startReceiveInvitation(controller_SocketController.playerId,otherIds,function(err,data) {
		if(err == "收到的名稱和目前的名稱一樣") {
			Main.slide("已經互相連線成功!");
			return;
		} else if(err != null) {
			console.log("src/Main.hx:108:",err);
		} else {
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification("do_show_recevie",{ show : true, ops : data});
		}
	});
};
Main.saveOpponentToCookie = function(otherPlayerId) {
	if(Main.ary_ops.indexOf(otherPlayerId) == -1) {
		Main.ary_ops.push(otherPlayerId);
		if(Main.ary_ops.length > 10) {
			Main.ary_ops.shift();
		}
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification("on_receiveOps",{ ary_ops : Main.ary_ops});
	}
	CallJs.setCookie("otherPlayerId",JSON.stringify(Main.ary_ops));
};
Main.createSelfDeck = function(deckId) {
	if(Main.cardSuit == null) {
		return;
	}
	var deck = Main.cardSuit[deckId];
	if(deck == null) {
		return;
	}
	Main.createItem(Tool.createDataFromDeck(deck,controller_SocketController.playerId));
};
Main.loadDetail = function(game) {
	if(Reflect.field(Main.cardSuitsDetailsIsLoading,game) != null) {
		return;
	}
	Main.cardSuitsDetailsIsLoading[game] = true;
	if(Reflect.field(Main.cardSuitsDetails,game) == null) {
		CallJs.cardinfoloader_load(game,game == "sangoWar" ? "jp" : "ch",Main.onLoadGameCallback(game));
	}
};
Main.onLoadGameCallback = function(game) {
	return function(err,_cardlist) {
		Main.cardSuitsDetails[game] = _cardlist;
	};
};
Main.getCardDetailById = function(game,cid) {
	cid = StringTools.replace(cid,".jpg","");
	Main.loadDetail(game);
	if(Reflect.field(Main.cardSuitsDetails,game) == null) {
		return null;
	}
	return Lambda.find(Reflect.field(Main.cardSuitsDetails,game),function(cardDetail) {
		return cardDetail.id.indexOf(cid) == 0;
	});
};
Main.createItem = function(ary_data) {
	org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification("do_create_item",Tool.createItemFromData(ary_data));
};
Main.showDiceMessage = function(id,dice) {
	Main.slide("玩家 " + id + " 擲了 " + dice + " 點",4000);
};
Main.getCardImageUrlWithPackage = function(select,key) {
	return CallJs.api_getCardImageWithPackageName(select,key);
};
Main.slide = function(msg,time) {
	if(time == null) {
		time = 2000;
	}
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
		if(err != null) {
			Main.alert("錯誤:" + err);
		} else {
			cb(ret);
		}
	};
};
Main.main = function() {
	new Main();
};
Main.getId = function() {
	return leo.utils.generateUUID();
};
Main.prototype = {
	isCanCallTimer: function() {
		return CallJs.api_getTimerContext() != null;
	}
	,onHtmlClick: function(type,params) {
		var _gthis = this;
		switch(type) {
		case "onBtnCreateDeck":
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification("on_createDeck_click");
			break;
		case "onBtnCustomDeck":
			var str = Main.j("#txt_custom").textbox("getValue");
			str = "[" + str + "]";
			try {
				var createobj = JSON.parse(str);
				Main.createItem(Tool.createDataFromDeck({ backId : "0", cards : createobj, game : Main.currentSelect},controller_SocketController.playerId));
			} catch( _g ) {
				Main.alert("輸入格式錯誤哦，請檢查!");
			}
			break;
		case "onBtnInviteServer":
			if(controller_SocketController.playerId == "smart" || Main.otherPlayerId == "") {
				Main.slide("請先登入fb或者創建臨時id且並且填入對手");
				return;
			}
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification("do_startHeartbeat");
			Main.setReceiveInvitation(controller_SocketController.otherPlayerIds.join(","));
			CallJs.api_invite(controller_SocketController.playerId,controller_SocketController.otherPlayerIds,function(err,data) {
				if(err != null) {
					Main.alert(err);
				}
			});
			Main.saveOpponentToCookie(Main.otherPlayerId);
			break;
		case "onBtnLoadClick":
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification("on_load_click");
			break;
		case "onBtnLoadGameClick":
			Main.currentSelect = params;
			this.chooseCardSuit(params);
			break;
		case "onBtnLoginClick":
			Main.openLoading("登入並讀取資料中...");
			CallJs.myapp_facebook_login(function(ret) {
				Main.fbid = ret.authResponse.userID;
				Main.token = ret.authResponse.accessToken;
				Main.j("#txt_id").textbox("setValue",Main.fbid);
				CallJs.cardSuit_load2(Main.fbid,Main.token,Main.handleResponse(function(ret) {
					_gthis.prepareCardsuit(ret.cardSuit);
					Main.j("#btn_login").linkbutton("disable");
					Main.j("#btn_notLogin").linkbutton("disable");
					Main.closeLoading();
				}));
			});
			break;
		case "onBtnNotLoginClick":
			Main.j("#txt_id").textbox("setValue",Main.getId());
			break;
		case "onBtnRecordClick":
			break;
		case "onBtnSaveClick":
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification("do_getItemsString",{ callback : function(str) {
				org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification("on_save_click",{ str : str});
			}});
			break;
		case "onBtnStartServer":
			if(controller_SocketController.playerId == "smart") {
				Main.slide("請先登入fb或者創建臨時id");
				return;
			}
			Main.setReceiveInvitation("");
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification("createPlayerSocket",controller_SocketController.playerId);
			break;
		case "onBtnTableDeck":
			var str = Main.j("#txt_table").textbox("getValue");
			try {
				var obj_table = JSON.parse(str);
				var ary_create = Lambda.fold(obj_table,function(curr,first) {
					if(curr.count == null) {
						curr.count = 1;
					}
					var _g = 0;
					var _g1 = curr.count;
					while(_g < _g1) {
						var i = _g++;
						var copycurr = JSON.parse(JSON.stringify(curr));
						copycurr.owner = controller_SocketController.playerId;
						first.push(copycurr);
					}
					return first;
				},[]);
				Main.createItem(ary_create);
			} catch( _g ) {
				Main.alert("輸入格式錯誤哦，請檢查!");
			}
			break;
		case "onConcreteDiceClick":
			var _g = [];
			_g.push(0);
			_g.push(1);
			_g.push(2);
			_g.push(3);
			_g.push(4);
			_g.push(5);
			var _this = _g;
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = { extra : ["../common/images/createTable/other/dice_01.png","../common/images/createTable/other/dice_02.png","../common/images/createTable/other/dice_03.png","../common/images/createTable/other/dice_04.png","../common/images/createTable/other/dice_05.png","../common/images/createTable/other/dice_06.png"], pos : [100,100], type : "sequence", width : 50, height : 50};
			}
			var ary_data = result;
			Main.createItem(ary_data);
			break;
		case "onPokerClick":
			var ary_poker = ["10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","62"];
			var result = new Array(ary_poker.length);
			var _g = 0;
			var _g1 = ary_poker.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = { extra : [ary_poker[i],"34","poker"], pos : [100,100], type : "card", width : 50, height : 75, back : false, lock : false, owner : controller_SocketController.playerId};
			}
			var data = result;
			Main.createItem(data);
			break;
		case "onResetTimerClick":
			CallJs.api_resetTimer(controller_SocketController.playerId,controller_SocketController.otherPlayerIds,function(err,data) {
				if(err != null) {
					Main.alert(err);
				}
			});
			break;
		case "onShaClick":
			var ary_sangosha = ["b1_1_fight","b1_1_sanda","b1_2_cold","b1_2_double","b1_2_gua","b1_3_river","b1_3_steal","b1_4_river","b1_4_steal","b1_5_dragon","b1_5_shadow","b1_6_bluejian","b1_6_happy","b1_7_nan","b1_7_sa","b1_8_sa","b1_8_sa","b1_9_sa","b1_9_sa","b1_10_sa","b1_10_sa","b1_11_steal","b1_11_strong","b1_12_eight","b1_12_river","b1_13_horse","b1_13_nan","b2_1_fight","b2_1_nu","b2_2_gua","b2_2_sa","b2_2_shield","b2_3_river","b2_3_sa","b2_4_river","b2_4_sa","b2_5_horse","b2_5_sa","b2_6_happy","b2_6_sa","b2_7_nan","b2_7_sa","b2_8_sa","b2_8_sa","b2_9_sa","b2_9_sa","b2_10_sa","b2_10_sa","b2_11_sa","b2_11_sa","b2_12_dao","b2_12_strong","b2_13_dao","b2_13_strong","r1_1_spray","r1_1_together","r1_2_run","r1_2_run","r1_3_tao","r1_3_wugu","r1_4_tao","r1_4_wugu","r1_5_gilin","r1_5_redhourse","r1_6_happy","r1_6_tao","r1_7_born","r1_7_tao","r1_8_born","r1_8_tao","r1_9_born","r1_9_tao","r1_10_sa","r1_10_sa","r1_11_born","r1_11_sa","r1_12_river","r1_12_sanda","r1_12_tao","r1_13_horse","r1_13_run","r2_1_fight","r2_1_nu","r2_2_run","r2_2_run","r2_3_run","r2_3_steal","r2_4_run","r2_4_steal","r2_5_axe","r2_5_run","r2_6_run","r2_6_sa","r2_7_run","r2_7_sa","r2_8_run","r2_8_sa","r2_9_run","r2_9_sa","r2_10_run","r2_10_sa","r2_11_run","r2_11_run","r2_12_draw","r2_12_strong","r2_12_tao","r2_13_hourse","r2_13_sa","role_001","role_002","role_003","role_004","role_005","role_006","role_007","role_008","role_009","role_010","role_011","role_012","role_013","role_014","role_015","role_016","role_017","role_018","role_019","role_020","role_021","role_022","role_023","role_024","role_025","id_0","id_0","id_0","id_0","id_1","id_1","id_3","id_3","id_3","id_2"];
			var result = new Array(ary_sangosha.length);
			var _g = 0;
			var _g1 = ary_sangosha.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = { extra : [ary_sangosha[i],"49","sanguosha"], pos : [100,100], type : "card", width : 50, height : 75, back : false, lock : false, owner : controller_SocketController.playerId};
			}
			var data = result;
			Main.createItem(data);
			break;
		case "onStartTimerClick":
			org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification("on_startTimer_click");
			CallJs.api_resetTimer(controller_SocketController.playerId,controller_SocketController.otherPlayerIds,function(err,data) {
				if(err != null) {
					Main.alert(err);
				} else {
					CallJs.api_startTimer(controller_SocketController.playerId,controller_SocketController.otherPlayerIds,function(err,data) {
						if(err != null) {
							Main.alert(err);
						} else {
							org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification("sendMessage",{ type : "chat", msg : { id : controller_SocketController.playerId, msg : "開始計時!"}});
						}
					});
				}
			});
			break;
		case "onStopTimerClick":
			if(!this.isCanCallTimer()) {
				return;
			}
			CallJs.api_stopTimer(controller_SocketController.playerId,controller_SocketController.otherPlayerIds,function(err,data) {
				if(err != null) {
					Main.alert(err);
				}
			});
			break;
		case "onSwitchTimerClick":
			if(!this.isCanCallTimer()) {
				return;
			}
			CallJs.api_switchUser(controller_SocketController.playerId,controller_SocketController.otherPlayerIds,function(err,data) {
				if(err != null) {
					Main.alert(err);
				} else {
					org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification("sendMessage",{ type : "chat", msg : { id : controller_SocketController.playerId, msg : "切換玩家嘍~"}});
				}
			});
			break;
		case "onTokenClick":
			var ary_token = ["token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_0","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_1","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2","token_2"];
			var result = new Array(ary_token.length);
			var _g = 0;
			var _g1 = ary_token.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = { extra : [ary_token[i],"other"], pos : [100,100], type : "token", width : 50, height : 50, owner : controller_SocketController.playerId};
			}
			var data = result;
			Main.createItem(data);
			break;
		}
		CallJs.googleTracking_click(type);
	}
	,prepareCardsuit: function(inputCardsuit) {
		Main.cardSuits = { };
		Lambda.foreach(inputCardsuit,function(cs) {
			if(Reflect.field(Main.cardSuits,cs.game) == null) {
				Main.cardSuits[cs.game] = [];
			}
			Reflect.field(Main.cardSuits,cs.game).push(cs);
			return true;
		});
		this.chooseCardSuit(Main.currentSelect);
		this.updateGameUI(Main.currentSelect);
	}
	,updateGameUI: function(currentSelect) {
		switch(currentSelect) {
		case "army":
			Main.j("#btn_army").linkbutton("select");
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
		case "fighter":
			Main.j("#btn_fighter").linkbutton("select");
			break;
		case "gundamWar":
			Main.j("#btn_gundam").linkbutton("select");
			break;
		case "gundamWarN":
			Main.j("#btn_gundamN").linkbutton("select");
			break;
		case "magic":
			Main.j("#btn_magic").linkbutton("select");
			break;
		case "sangoWar":
			Main.j("#btn_sango").linkbutton("select");
			break;
		case "sgs":
			Main.j("#btn_sgs").linkbutton("select");
			break;
		case "ws":
			Main.j("#btn_ws").linkbutton("select");
			break;
		case "yugioh":
			Main.j("#btn_yugioh").linkbutton("select");
			break;
		}
	}
	,chooseCardSuit: function(suitName) {
		Main.cardSuit = Reflect.field(Main.cardSuits,suitName);
		if(Main.cardSuit == null) {
			Main.cardSuit = [];
		}
		org_puremvc_haxe_patterns_facade_Facade.getInstance().sendNotification("on_getSuit_success",{ cardSuit : Main.cardSuit});
	}
	,__class__: Main
};
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( _g ) {
		return null;
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
var Tool = function() { };
Tool.__name__ = true;
Tool.createItem = function(extra,pos,type,width,height,back,lock,owner,viewer) {
	if(viewer == null) {
		viewer = "";
	}
	if(owner == null) {
		owner = "desktop";
	}
	if(lock == null) {
		lock = false;
	}
	if(back == null) {
		back = true;
	}
	if(height == null) {
		height = 100;
	}
	if(width == null) {
		width = 100;
	}
	if(type == null) {
		type = "card";
	}
	return { type : type, width : width, height : height, pos : pos, back : back, deg : 0, lock : lock, owner : owner, viewer : viewer, cardId : extra[0], id : Tool.createDivId(), extra : extra, action : { sequence : Math.random()}};
};
Tool.createDataFromDeck = function(deck,owner) {
	return deck.cards.map(function(str) {
		return { extra : [str,deck.backId == null ? "0" : deck.backId,deck.game], pos : [100,100], type : "card", width : 50, height : 75, back : true, lock : false, owner : owner};
	});
};
Tool.createItemFromData = function(ary_data) {
	return ary_data.map(function(data) {
		return Tool.createItem(data.extra,data.pos,data.type,data.width,data.height,data.back,data.lock,data.owner);
	});
};
Tool.createItemDiv = function(type,model) {
	var div = Tool.j("#tmpl_" + type).tmpl(model);
	return div;
};
Tool.createDivId = function() {
	return leo.utils.generateUUID();
};
Tool.slide = function(msg,time) {
	if(time == null) {
		time = 2000;
	}
	Tool.j.messager.show({ title : "提示", msg : msg, timeout : time, showType : "slide"});
};
Tool.alert = function(msg) {
	Tool.j.messager.alert("錯誤",msg);
};
var Type = function() { };
Type.__name__ = true;
Type.createInstance = function(cl,args) {
	var ctor = Function.prototype.bind.apply(cl,[null].concat(args));
	return new (ctor);
};
var org_puremvc_haxe_interfaces_INotifier = function() { };
org_puremvc_haxe_interfaces_INotifier.__name__ = true;
org_puremvc_haxe_interfaces_INotifier.__isInterface__ = true;
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
org_puremvc_haxe_interfaces_IMediator.__isInterface__ = true;
org_puremvc_haxe_interfaces_IMediator.prototype = {
	__class__: org_puremvc_haxe_interfaces_IMediator
};
var org_puremvc_haxe_patterns_mediator_Mediator = function(mediatorName,viewComponent) {
	org_puremvc_haxe_patterns_observer_Notifier.call(this);
	this.mediatorName = mediatorName != null ? mediatorName : org_puremvc_haxe_patterns_mediator_Mediator.NAME;
	if(viewComponent != null) {
		this.viewComponent = viewComponent;
	}
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
	this.ary_record = null;
	this.isEnableCommand = true;
	this.isRecord = false;
	this.isCtrl = false;
	this.isList = false;
	this.ary_allItem = [];
	this.ary_select = [];
	var _gthis = this;
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
	leo.utils.initRectSelect(function(ary) {
		_gthis.onSelectItems(ary,false,_gthis.isCtrl);
		_gthis.zsorting();
	});
	Tool.j("body").mousemove($bind(this,this.onBodyMouseMove));
	Tool.j("body").keydown($bind(this,this.onBodyKeyDown));
	Tool.j("body").keyup($bind(this,this.onBodyKeyUp));
	Tool.j("body").mousedown($bind(this,this.onBodyKeyUp));
};
controller_MainController.__name__ = true;
controller_MainController.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
controller_MainController.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return ["do_create_item","do_getItemsString","on_sendMessage","on_receiveMessage","do_start_record","do_enable_command","do_update_view","on_item_click","on_item_lock","on_iconGenerator_close","on_confirmPanel_btnConfirm_click"];
	}
	,handleNotification: function(notification) {
		var _gthis = this;
		var _g = notification.getName();
		switch(_g) {
		case "on_confirmPanel_btnConfirm_click":
			if(notification.getBody()) {
				if(this.ary_readyForDelete != null && this.ary_readyForDelete.length > 0) {
					this.deleteModel(this.ary_readyForDelete);
					this.deleteView(this.ary_readyForDelete);
				}
			}
			this.ary_readyForDelete = null;
			break;
		case "on_iconGenerator_close":
			this.isEnableCommand = true;
			break;
		case "on_item_click":
			var div = notification.getBody();
			this.onSelectItems(div,true,this.isCtrl);
			this.zsorting();
			break;
		case "on_item_lock":
			var div = notification.getBody().view;
			var lock = notification.getBody().lock;
			if(lock) {
				this.viewComponent.prepend(div);
			}
			break;
		case "on_receiveMessage":
			var str = _g;
			if(str == "do_enable_command") {
				this.isEnableCommand = notification.getBody().enable;
			} else {
				var str = _g;
				if(str == "do_getItemsString") {
					var callback = notification.getBody().callback;
					var retobj = this.ary_record == null ? this.getFirstStepRecord() : this.ary_record;
					callback(JSON.stringify(retobj));
				} else {
					var str = _g;
					if(str == "do_update_view") {
						this.updateView(this.ary_allItem);
						this.sendNotification("sendMessage",{ type : "applyTransform", msg : { ary_item : this.ary_allItem, zs : false}});
					} else {
						var str = _g;
						if(str == "do_create_item") {
							var ary_creates = notification.getBody();
							Lambda.foreach(ary_creates,function(c) {
								_gthis.createItem(c);
								return true;
							});
							this.sendNotification("sendMessage",{ type : "addItems", msg : ary_creates});
						} else {
							var str = _g;
							if(str == "do_start_record") {
								this.setRecord(notification.getBody().record);
							} else {
								this.saveToRecord(notification.getBody());
								switch(notification.getType()) {
								case "addItems":
									var tempItems = notification.getBody();
									Lambda.foreach(tempItems,function(c) {
										_gthis.createItem(c);
										return true;
									});
									break;
								case "applyTransform":
									var needApply = notification.getBody().applyValue == null ? true : notification.getBody().applyValue;
									if(needApply) {
										this.updateView(this.updateModel(notification.getBody().ary_item),notification.getBody().zs);
									} else {
										this.updateView(notification.getBody().ary_item,notification.getBody().zs,needApply);
									}
									break;
								case "chat":
									break;
								case "deleteItem":
									var localModel = this.receiveItemToLocalModel(notification.getBody());
									this.deleteModel(localModel);
									this.deleteView(localModel);
									break;
								case "dice":
									this.sendNotification("on_dice",notification.getBody());
									break;
								}
							}
						}
					}
				}
			}
			break;
		case "on_sendMessage":
			var str = _g;
			if(str == "do_enable_command") {
				this.isEnableCommand = notification.getBody().enable;
			} else {
				var str = _g;
				if(str == "do_getItemsString") {
					var callback = notification.getBody().callback;
					var retobj = this.ary_record == null ? this.getFirstStepRecord() : this.ary_record;
					callback(JSON.stringify(retobj));
				} else {
					var str = _g;
					if(str == "do_update_view") {
						this.updateView(this.ary_allItem);
						this.sendNotification("sendMessage",{ type : "applyTransform", msg : { ary_item : this.ary_allItem, zs : false}});
					} else {
						var str = _g;
						if(str == "do_create_item") {
							var ary_creates = notification.getBody();
							Lambda.foreach(ary_creates,function(c) {
								_gthis.createItem(c);
								return true;
							});
							this.sendNotification("sendMessage",{ type : "addItems", msg : ary_creates});
						} else {
							var str = _g;
							if(str == "do_start_record") {
								this.setRecord(notification.getBody().record);
							} else {
								this.saveToRecord(notification.getBody());
							}
						}
					}
				}
			}
			break;
		default:
			var str = _g;
			if(str == "do_enable_command") {
				this.isEnableCommand = notification.getBody().enable;
			} else {
				var str = _g;
				if(str == "do_getItemsString") {
					var callback = notification.getBody().callback;
					var retobj = this.ary_record == null ? this.getFirstStepRecord() : this.ary_record;
					callback(JSON.stringify(retobj));
				} else {
					var str = _g;
					if(str == "do_update_view") {
						this.updateView(this.ary_allItem);
						this.sendNotification("sendMessage",{ type : "applyTransform", msg : { ary_item : this.ary_allItem, zs : false}});
					} else {
						var str = _g;
						if(str == "do_create_item") {
							var ary_creates = notification.getBody();
							Lambda.foreach(ary_creates,function(c) {
								_gthis.createItem(c);
								return true;
							});
							this.sendNotification("sendMessage",{ type : "addItems", msg : ary_creates});
						} else {
							var str = _g;
							if(str == "do_start_record") {
								this.setRecord(notification.getBody().record);
							}
						}
					}
				}
			}
		}
	}
	,saveToRecord: function(record) {
		if(this.ary_record != null) {
			this.ary_record.push(record);
		}
	}
	,getFirstStepRecord: function() {
		return [{ type : "addItems", msg : this.ary_allItem}];
	}
	,setRecord: function(r) {
		this.isRecord = r;
		if(this.isRecord) {
			this.ary_record = [];
		} else {
			this.ary_record = null;
		}
	}
	,updateModel: function(ary_receive) {
		var _gthis = this;
		return Lambda.fold(ary_receive,function(receive,curr) {
			var model = _gthis.getItemFromPoolById(receive.id);
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
		if(apply == null) {
			apply = true;
		}
		if(zs == null) {
			zs = false;
		}
		var _gthis = this;
		var updateRotate = function(item,dom,itemModel) {
			if(dom.attr("deg") == null) {
				item.rotate(0,itemModel.deg);
			} else {
				var oldDegree = dom.attr("deg");
				if(oldDegree != itemModel.deg) {
					item.rotate(oldDegree,itemModel.deg);
				}
			}
			dom.attr("deg",itemModel.deg);
		};
		var updateAction = function(item,itemModel) {
			item.action(itemModel.action);
		};
		var updateMove = function(item,dom,itemModel) {
			var dom_pos_0 = StringTools.replace(dom.css("left"),"px","");
			var dom_pos_1 = StringTools.replace(dom.css("top"),"px","");
			if(dom_pos_0 != itemModel.pos[0] || dom_pos_1 != itemModel.pos[1]) {
				item.move(itemModel.pos[0],itemModel.pos[1]);
			}
		};
		var updateOwner = function(item,itemModel) {
			item.setOwner(itemModel.owner);
		};
		var updateViewer = function(item,itemModel) {
			item.setViewer(itemModel.viewer);
		};
		var updateFlip = function(item,itemModel) {
			item.flip(itemModel.back);
		};
		var updateLock = function(item,itemModel) {
			item.lock(itemModel.lock);
		};
		Lambda.foreach(ary_item,function(itemModel) {
			if(itemModel == null) {
				return true;
			}
			var m = _gthis.facade.retrieveMediator(itemModel.id);
			if(m == null) {
				return true;
			}
			var item = js_Boot.__cast(m , view_IItem);
			var dom = _gthis.facade.retrieveMediator(itemModel.id).getViewComponent();
			if(apply) {
				updateRotate(item,dom,itemModel);
				updateMove(item,dom,itemModel);
				updateOwner(item,itemModel);
				updateViewer(item,itemModel);
				updateFlip(item,itemModel);
				updateLock(item,itemModel);
				updateAction(item,itemModel);
			}
			if(zs) {
				dom.appendTo(dom.parent());
			}
			return true;
		});
	}
	,receiveItemToLocalModel: function(ary_receive) {
		var _gthis = this;
		var result = new Array(ary_receive.length);
		var _g = 0;
		var _g1 = ary_receive.length;
		while(_g < _g1) {
			var i = _g++;
			result[i] = _gthis.getItemFromPoolById(ary_receive[i].id);
		}
		return result;
	}
	,createItem: function(model) {
		var item;
		switch(model.type) {
		case "card":
			var parseData = JSON.parse(JSON.stringify(model));
			parseData.extra = [api.getCardImageWithPackageName(model.extra[2],model.extra[0]),"../common/images/card/cardback_" + model.extra[1] + ".jpg"];
			item = new view_CardItem(model.id,Tool.createItemDiv(model.type,parseData));
			break;
		case "data":
			item = new view_DataItem(model.id,Tool.createItemDiv(model.type,model));
			break;
		case "sequence":
			item = new view_SequenceItem(model.id,Tool.createItemDiv(model.type,model));
			break;
		case "token":
			var parseData = JSON.parse(JSON.stringify(model));
			parseData.extra = [api.getCardImageWithPackageName(model.extra[1],model.extra[0])];
			item = new view_TokenItem(model.id,Tool.createItemDiv(model.type,parseData));
			break;
		case "tokenString":
			var parseData = JSON.parse(JSON.stringify(model));
			parseData.content = model.extra[2];
			parseData.path = model.extra[3];
			item = new view_TokenItem(model.id,Tool.createItemDiv(model.type,parseData));
			break;
		default:
			item = new view_BasicItem(model.id,Tool.createItemDiv(model.type,model));
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
	,onBodyKeyDown: function(e) {
		if(!this.isEnableCommand) {
			return;
		}
		if(e.which == 17) {
			this.isCtrl = true;
		}
	}
	,onBodyKeyUp: function(e) {
		if(!this.isEnableCommand) {
			return;
		}
		this.sendNotification("on_press",null,e.which);
		switch(e.which) {
		case 1:
			return;
		case 17:
			this.isCtrl = false;
			break;
		case 65:case 66:case 68:case 73:case 75:case 79:case 80:case 84:case 85:case 89:
			break;
		default:
			if(this.ary_select.length == 0) {
				return;
			}
		}
		switch(e.which) {
		case 3:case 65:
			this.moveModel();
			this.updateView(this.ary_select);
			break;
		case 66:
			(Reflect.field(window,"onHtmlClick"))("onSwitchTimerClick");
			break;
		case 67:
			this.setModelOwner();
			this.updateView(this.ary_select);
			break;
		case 68:
			this.selectMyItem();
			this.updateView(this.ary_select);
			break;
		case 69:
			this.sortModel();
			this.listModel();
			this.updateView(this.ary_select);
			break;
		case 70:
			this.flipModel();
			this.sendNotification("on_select_cards",{ ary_select : this.ary_select});
			this.updateView(this.ary_select);
			break;
		case 72:
			if(this.ary_select.length > 0) {
				this.ary_readyForDelete = this.ary_select.slice(0);
				this.sendNotification("on_readyToDeleteItem",{ count : this.ary_readyForDelete.length});
			}
			break;
		case 73:
			var token = Tool.createItem(["token_0","other"],controller_MainController.pos_mouse.slice(0),"token",50,50,true,false,controller_SocketController.playerId);
			this.createItem(token);
			this.sendNotification("sendMessage",{ type : "addItems", msg : [token]});
			break;
		case 75:
			this.unlockAllItem();
			this.updateView(this.ary_allItem);
			break;
		case 76:
			this.setModelLock();
			this.updateView(this.ary_select);
			break;
		case 79:
			var token = Tool.createItem(["token_1","other"],controller_MainController.pos_mouse.slice(0),"token",50,50,true,false,controller_SocketController.playerId);
			this.createItem(token);
			this.sendNotification("sendMessage",{ type : "addItems", msg : [token]});
			break;
		case 80:
			var token = Tool.createItem(["token_2","other"],controller_MainController.pos_mouse.slice(0),"token",50,50,true,false,controller_SocketController.playerId);
			this.createItem(token);
			this.sendNotification("sendMessage",{ type : "addItems", msg : [token]});
			break;
		case 81:
			this.shuffleModel();
			this.togetherModel();
			this.updateView(this.ary_select,true);
			break;
		case 82:
			this.actionModel();
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
		case 84:
			var dice = Math.floor(Math.random() * 100);
			this.sendNotification("on_dice",{ playerId : controller_SocketController.playerId, dice : dice});
			this.sendNotification("sendMessage",{ type : "dice", msg : { playerId : controller_SocketController.playerId, dice : dice}});
			break;
		case 86:
			this.setModelViewer();
			this.sendNotification("on_select_cards",{ ary_select : this.ary_select});
			this.updateView(this.ary_select);
			break;
		case 87:
			this.reverseModel();
			this.togetherModel();
			this.updateView(this.ary_select,true);
			break;
		case 88:
			this.rotateModel(90);
			this.updateView(this.ary_select);
			break;
		case 89:
			this.isEnableCommand = false;
			break;
		case 90:
			this.rotateModel(-90);
			this.updateView(this.ary_select);
			break;
		}
		switch(e.which) {
		case 17:
			break;
		case 72:
			this.sendNotification("sendMessage",{ type : "deleteItem", msg : this.ary_select});
			break;
		case 75:
			this.sendNotification("sendMessage",{ type : "applyTransform", msg : { ary_item : this.ary_allItem, zs : false}});
			break;
		case 73:case 79:case 80:case 84:
			break;
		case 81:case 83:case 87:
			this.sendNotification("sendMessage",{ type : "applyTransform", msg : { ary_item : this.ary_select, zs : true}});
			break;
		default:
			this.sendNotification("sendMessage",{ type : "applyTransform", msg : { ary_item : this.ary_select, zs : false}});
		}
	}
	,rotateModel: function(deg) {
		Lambda.foreach(this.ary_select,function(item) {
			item.deg += deg;
			return true;
		});
	}
	,onSelectItems: function(ary,selectLock,addSelect) {
		if(addSelect == null) {
			addSelect = false;
		}
		if(selectLock == null) {
			selectLock = false;
		}
		var _gthis = this;
		if(addSelect) {
			if(this.ary_select.length == 0) {
				var result = new Array(ary.length);
				var _g = 0;
				var _g1 = ary.length;
				while(_g < _g1) {
					var i = _g++;
					result[i] = _gthis.getItemFromPoolById(ary[i].id);
				}
				this.ary_select = result;
			} else {
				var needRemove = [];
				var needAdd = [];
				Lambda.foreach(ary,function(model) {
					var _g = 0;
					var _g1 = _gthis.ary_select.length;
					while(_g < _g1) {
						var i = _g++;
						if(_gthis.ary_select[i].id == model.id) {
							needRemove.push(model);
						}
					}
					if(needRemove.length == 0) {
						needAdd.push(model);
					}
					return true;
				});
				var _g = 0;
				var _g1 = needRemove.length;
				while(_g < _g1) {
					var j = _g++;
					var i = this.ary_select.length;
					while(i > 0) {
						--i;
						if(this.ary_select[i].id == needRemove[j].id) {
							this.ary_select.splice(i,1);
						}
					}
				}
				var tmp = this.ary_select;
				var result = new Array(needAdd.length);
				var _g = 0;
				var _g1 = needAdd.length;
				while(_g < _g1) {
					var i = _g++;
					result[i] = _gthis.getItemFromPoolById(needAdd[i].id);
				}
				this.ary_select = tmp.concat(result);
			}
		} else {
			var result = new Array(ary.length);
			var _g = 0;
			var _g1 = ary.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = _gthis.getItemFromPoolById(ary[i].id);
			}
			this.ary_select = result;
		}
		if(!selectLock) {
			this.ary_select = this.filterLock(this.ary_select);
		}
		this.indexSorting();
		this.sendNotification("on_select_cards",{ ary_select : this.ary_select});
		if(this.ary_select.length != 0) {
			this.sendNotification("sendMessage",{ type : "applyTransform", msg : { ary_item : this.ary_select, zs : true, applyValue : false}});
		}
	}
	,indexSorting: function() {
		this.ary_select.sort(function(a,b) {
			if(b.pos[0] < a.pos[0]) {
				return 1;
			}
			return -1;
		});
		this.ary_select.sort(function(a,b) {
			if(b.pos[1] < a.pos[1]) {
				return 1;
			}
			return -1;
		});
	}
	,selectMyItem: function() {
		this.ary_select = this.filterLock(this.getMyItemFromPool());
		this.sendNotification("on_select_cards",{ ary_select : this.ary_select});
	}
	,sortModel: function() {
		var collectobj = { };
		Lambda.foreach(this.ary_select,function(card) {
			if(Reflect.field(collectobj,card.cardId) == null) {
				collectobj[card.cardId] = [];
			}
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
		var _g = 0;
		var _g1 = this.ary_select.length;
		while(_g < _g1) {
			var i = _g++;
			var itemModel = this.ary_select[i];
			if(itemModel.owner == "" || itemModel.owner == controller_SocketController.playerId) {
				itemModel.lock = !itemModel.lock;
			} else {
				continue;
			}
		}
	}
	,unlockAllItem: function() {
		var _g = 0;
		var _g1 = this.ary_allItem.length;
		while(_g < _g1) {
			var i = _g++;
			var itemModel = this.ary_allItem[i];
			if(itemModel.owner == "" || itemModel.owner == controller_SocketController.playerId) {
				itemModel.lock = false;
			} else {
				continue;
			}
		}
	}
	,setModelOwner: function() {
		var _g = 0;
		var _g1 = this.ary_select.length;
		while(_g < _g1) {
			var i = _g++;
			var itemModel = this.ary_select[i];
			var item = js_Boot.__cast(this.facade.retrieveMediator(itemModel.id) , view_IItem);
			if(itemModel.owner == controller_SocketController.playerId) {
				itemModel.owner = "";
			} else if(itemModel.owner == "") {
				itemModel.owner = controller_SocketController.playerId;
			}
		}
	}
	,setModelViewer: function() {
		var _g = 0;
		var _g1 = this.ary_select.length;
		while(_g < _g1) {
			var i = _g++;
			var itemModel = this.ary_select[i];
			var item = js_Boot.__cast(this.facade.retrieveMediator(itemModel.id) , view_IItem);
			if(itemModel.viewer == controller_SocketController.playerId) {
				itemModel.viewer = "";
			} else {
				itemModel.viewer = controller_SocketController.playerId;
				if(itemModel.viewer == "") {
					itemModel.viewer = controller_SocketController.playerId;
				}
			}
		}
	}
	,listModel: function() {
		var info = this.collectInfo(this.ary_select);
		var _g = 0;
		var _g1 = this.ary_select.length;
		while(_g < _g1) {
			var i = _g++;
			var itemModel = this.ary_select[i];
			itemModel.pos[0] = i % 10 * (Reflect.field(info,"mw") + 4) + controller_MainController.pos_mouse[0];
			itemModel.pos[1] = Math.floor(i / 10) * (Reflect.field(info,"mh") + 4) + controller_MainController.pos_mouse[1];
		}
	}
	,togetherModel: function() {
		var _g = 0;
		var _g1 = this.ary_select.length;
		while(_g < _g1) {
			var i = _g++;
			var itemModel = this.ary_select[i];
			itemModel.pos[0] = i * 2 + controller_MainController.pos_mouse[0];
			itemModel.pos[1] = i * 2 + controller_MainController.pos_mouse[1];
		}
	}
	,flipModel: function() {
		var _g = 0;
		var _g1 = this.ary_select.length;
		while(_g < _g1) {
			var i = _g++;
			var itemModel = this.ary_select[i];
			if(itemModel.owner == "" || itemModel.owner == controller_SocketController.playerId) {
				itemModel.back = !itemModel.back;
			} else {
				continue;
			}
		}
	}
	,zsorting: function() {
		var _g = 0;
		var _g1 = this.ary_select.length;
		while(_g < _g1) {
			var i = _g++;
			var dom = this.facade.retrieveMediator(this.ary_select[i].id).getViewComponent();
			dom.appendTo(dom.parent());
		}
	}
	,shuffleModel: function() {
		this.ary_select.sort(function(a,b) {
			if(Math.random() > .5) {
				return 1;
			} else {
				return -1;
			}
		});
	}
	,reverseModel: function() {
		this.ary_select.reverse();
	}
	,collectInfo: function(ary_item) {
		var mw = 0.0;
		var mh = 0.0;
		var firstPos = [];
		var _g = 0;
		var _g1 = ary_item.length;
		while(_g < _g1) {
			var i = _g++;
			if(i == 0) {
				firstPos = ary_item[i].pos.slice();
			}
			mw = Math.max(mw,ary_item[i].width);
			mh = Math.max(mw,ary_item[i].height);
		}
		return { mw : mw, mh : mh, firstPos : firstPos};
	}
	,filterLock: function(ary) {
		var nary = Lambda.fold(ary,function(curr,first) {
			if(!curr.lock) {
				first.push(curr);
			}
			return first;
		},[]);
		return nary;
	}
	,onBodyMouseMove: function(e) {
		controller_MainController.pos_mouse[0] = e.pageX;
		controller_MainController.pos_mouse[1] = e.pageY;
	}
	,getItemFromPoolById: function(id) {
		var _g = [];
		var _g1 = 0;
		var _g2 = this.ary_allItem;
		while(_g1 < _g2.length) {
			var v = _g2[_g1];
			++_g1;
			if(id == v.id) {
				_g.push(v);
			}
		}
		return _g[0];
	}
	,getMyItemFromPool: function() {
		var _g = [];
		var _g1 = 0;
		var _g2 = this.ary_allItem;
		while(_g1 < _g2.length) {
			var v = _g2[_g1];
			++_g1;
			if(controller_SocketController.playerId == v.owner) {
				_g.push(v);
			}
		}
		return _g;
	}
	,actionModel: function() {
		Lambda.foreach(this.ary_select,function(item) {
			if(item.type == "sequence") {
				item.action.sequence = Math.random();
			}
			return true;
		});
	}
	,deleteModel: function(ary_receive) {
		var _gthis = this;
		Lambda.foreach(ary_receive,function(removeItem) {
			HxOverrides.remove(_gthis.ary_allItem,removeItem);
			return true;
		});
	}
	,deleteView: function(ary_receive) {
		var _gthis = this;
		Lambda.foreach(ary_receive,function(removeItem) {
			try {
				if(removeItem == null) {
					return true;
				}
				var m = _gthis.facade.retrieveMediator(removeItem.id);
				if(m != null) {
					m.getViewComponent().remove();
					_gthis.facade.removeMediator(m.getMediatorName());
				}
			} catch( _g ) {
				var e = haxe_Exception.caught(_g).unwrap();
				console.log("src/controller/MainController.hx:689:",e);
			}
			return true;
		});
	}
	,moveModel: function() {
		if(this.ary_select.length == 0) {
			return;
		}
		var moveTarget = { };
		this.ary_select.sort(function(ac,bc) {
			if(ac.pos[0] < bc.pos[0]) {
				return -1;
			}
			return 1;
		});
		moveTarget.x = this.ary_select[0].pos[0];
		this.ary_select.sort(function(ac,bc) {
			if(ac.pos[1] < bc.pos[1]) {
				return -1;
			}
			return 1;
		});
		moveTarget.y = this.ary_select[0].pos[1];
		var offset_1;
		var offset_0 = controller_MainController.pos_mouse[0] - moveTarget.x;
		offset_1 = controller_MainController.pos_mouse[1] - moveTarget.y;
		Lambda.foreach(this.ary_select,function(select) {
			select.pos[0] += offset_0;
			select.pos[1] += offset_1;
			return true;
		});
	}
	,__class__: controller_MainController
});
var controller_SocketController = function(mediatorName,viewComponent) {
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
};
controller_SocketController.__name__ = true;
controller_SocketController.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
controller_SocketController.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return ["setOpponents","sendMessage","do_startHeartbeat","createPlayerSocket"];
	}
	,handleNotification: function(notification) {
		var _g = notification.getName();
		var str = _g;
		if(str == "do_startHeartbeat") {
			this.startHeartbeat();
		} else {
			var str = _g;
			if(str == "sendMessage") {
				var type = notification.getBody().type;
				var msg = notification.getBody().msg;
				this.messageSocket(type,msg);
			} else {
				var str = _g;
				if(str == "setOpponents") {
					this.ary_ops = notification.getBody().slice();
				} else {
					var str = _g;
					if(str == "createPlayerSocket") {
						this.createSocket(notification.getBody());
					}
				}
			}
		}
	}
	,startHeartbeat: function() {
		var _gthis = this;
		var _g = 0;
		var _g1 = controller_SocketController.otherPlayerIds.length;
		while(_g < _g1) {
			var i = _g++;
			var fn = (function(_i) {
				return function(conn) {
					controller_SocketController.otherPlayerIdsForCheck[_i[0]] = conn;
					controller_SocketController.isConntect = Lambda.fold(controller_SocketController.otherPlayerIdsForCheck,(function() {
						return function(curr,first) {
							if(first) {
								return curr;
							} else {
								return false;
							}
						};
					})(),true);
					if(controller_SocketController.isConntect) {
						_gthis.sendNotification("on_searchComplete");
					}
					_gthis.sendNotification("on_heartbeat_event",{ conn : controller_SocketController.isConntect});
				};
			})([i]);
			CallJs.api_startHeartbeat(controller_SocketController.playerId,controller_SocketController.otherPlayerIds[i],fn);
		}
	}
	,createSocket: function(id) {
		var _gthis = this;
		var onSocketError = function() {
			controller_SocketController.isConntect = false;
			controller_SocketController.isCanSendMessage = false;
			_gthis.sendNotification("on_socket_error");
		};
		api.createChannel(id,{ onopen : function() {
			controller_SocketController.isCanSendMessage = true;
			_gthis.sendNotification("on_socket_success");
		}, onmessage : function(json) {
			_gthis.sendNotification("on_receiveMessage",json.msg,json.type);
		}, onerror : onSocketError, onclose : onSocketError});
	}
	,messageSocket: function(type,msg) {
		this.sendNotification("on_sendMessage",{ type : type, msg : msg});
		if(!controller_SocketController.isCanSendMessage) {
			return;
		}
		if(this.ary_ops == null) {
			return;
		}
		Lambda.foreach(this.ary_ops,function(op) {
			if(op != controller_SocketController.playerId) {
				api.sendMessageToSomeone(op,type,msg);
			}
			return true;
		});
	}
	,handleResponse: function(cb) {
		return function(err,ret) {
			if(err != null) {
				window.alert(Std.string("錯誤:" + err));
			} else {
				cb(ret);
			}
		};
	}
	,__class__: controller_SocketController
});
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
haxe_IMap.__isInterface__ = true;
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
haxe_Exception.__name__ = true;
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	unwrap: function() {
		return this.__nativeException;
	}
	,get_native: function() {
		return this.__nativeException;
	}
	,__class__: haxe_Exception
});
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
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe_Timer
};
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	unwrap: function() {
		return this.value;
	}
	,__class__: haxe_ValueException
});
var haxe_ds_List = function() {
	this.length = 0;
};
haxe_ds_List.__name__ = true;
haxe_ds_List.prototype = {
	add: function(item) {
		var x = new haxe_ds__$List_ListNode(item,null);
		if(this.h == null) {
			this.h = x;
		} else {
			this.q.next = x;
		}
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
			if(l.item == v) {
				if(prev == null) {
					this.h = l.next;
				} else {
					prev.next = l.next;
				}
				if(this.q == l) {
					this.q = prev;
				}
				this.length--;
				return true;
			}
			prev = l;
			l = l.next;
		}
		return false;
	}
	,__class__: haxe_ds_List
};
var haxe_ds__$List_ListNode = function(item,next) {
	this.item = item;
	this.next = next;
};
haxe_ds__$List_ListNode.__name__ = true;
haxe_ds__$List_ListNode.prototype = {
	__class__: haxe_ds__$List_ListNode
};
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	__class__: haxe_ds_StringMap
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
	,__class__: haxe_iterators_ArrayIterator
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if(o == null) {
		return null;
	} else if(((o) instanceof Array)) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g = 0;
		var _g1 = intf.length;
		while(_g < _g1) {
			var i = _g++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		return ((o) instanceof Array);
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return o != null;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return ((o | 0) === o);
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(js_Boot.__downcastCheck(o,cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(((o) instanceof cl)) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class ? o.__name__ != null : false) {
			return true;
		}
		if(cl == Enum ? o.__ename__ != null : false) {
			return true;
		}
		return false;
	}
};
js_Boot.__downcastCheck = function(o,cl) {
	if(!((o) instanceof cl)) {
		if(cl.__isInterface__) {
			return js_Boot.__interfLoop(js_Boot.getClass(o),cl);
		} else {
			return false;
		}
	} else {
		return true;
	}
};
js_Boot.__cast = function(o,t) {
	if(o == null || js_Boot.__instanceof(o,t)) {
		return o;
	} else {
		throw haxe_Exception.thrown("Cannot cast " + Std.string(o) + " to " + Std.string(t));
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var model_Model = function(mediatorName,viewComponent) {
	this.currentDeckId = 0;
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
};
model_Model.__name__ = true;
model_Model.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
model_Model.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return ["on_combo_deck_change","on_createDeck_click"];
	}
	,handleNotification: function(notification) {
		switch(notification.getName()) {
		case "on_combo_deck_change":
			this.currentDeckId = notification.getBody().deckId;
			break;
		case "on_createDeck_click":
			Main.createSelfDeck(this.currentDeckId);
			break;
		}
	}
	,__class__: model_Model
});
var org_puremvc_haxe_interfaces_IController = function() { };
org_puremvc_haxe_interfaces_IController.__name__ = true;
org_puremvc_haxe_interfaces_IController.__isInterface__ = true;
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
	if(org_puremvc_haxe_core_Controller.instance == null) {
		org_puremvc_haxe_core_Controller.instance = new org_puremvc_haxe_core_Controller();
	}
	return org_puremvc_haxe_core_Controller.instance;
};
org_puremvc_haxe_core_Controller.prototype = {
	initializeController: function() {
		this.view = org_puremvc_haxe_core_View.getInstance();
	}
	,executeCommand: function(note) {
		var _this = this.commandMap;
		var key = note.getName();
		var commandClassRef = _this.h[key];
		if(commandClassRef == null) {
			return;
		}
		var commandInstance = Type.createInstance(commandClassRef,[]);
		commandInstance.execute(note);
	}
	,registerCommand: function(notificationName,commandClassRef) {
		if(!Object.prototype.hasOwnProperty.call(this.commandMap.h,notificationName)) {
			this.view.registerObserver(notificationName,new org_puremvc_haxe_patterns_observer_Observer($bind(this,this.executeCommand),this));
		}
		this.commandMap.h[notificationName] = commandClassRef;
	}
	,hasCommand: function(notificationName) {
		return Object.prototype.hasOwnProperty.call(this.commandMap.h,notificationName);
	}
	,removeCommand: function(notificationName) {
		if(this.hasCommand(notificationName)) {
			this.view.removeObserver(notificationName,this);
			var _this = this.commandMap;
			if(Object.prototype.hasOwnProperty.call(_this.h,notificationName)) {
				delete(_this.h[notificationName]);
			}
		}
	}
	,__class__: org_puremvc_haxe_core_Controller
};
var org_puremvc_haxe_interfaces_IModel = function() { };
org_puremvc_haxe_interfaces_IModel.__name__ = true;
org_puremvc_haxe_interfaces_IModel.__isInterface__ = true;
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
	if(org_puremvc_haxe_core_Model.instance == null) {
		org_puremvc_haxe_core_Model.instance = new org_puremvc_haxe_core_Model();
	}
	return org_puremvc_haxe_core_Model.instance;
};
org_puremvc_haxe_core_Model.prototype = {
	initializeModel: function() {
	}
	,registerProxy: function(proxy) {
		var _this = this.proxyMap;
		var key = proxy.getProxyName();
		_this.h[key] = proxy;
		proxy.onRegister();
	}
	,retrieveProxy: function(proxyName) {
		return this.proxyMap.h[proxyName];
	}
	,hasProxy: function(proxyName) {
		return Object.prototype.hasOwnProperty.call(this.proxyMap.h,proxyName);
	}
	,removeProxy: function(proxyName) {
		var proxy = this.proxyMap.h[proxyName];
		if(proxy != null) {
			var _this = this.proxyMap;
			if(Object.prototype.hasOwnProperty.call(_this.h,proxyName)) {
				delete(_this.h[proxyName]);
			}
			proxy.onRemove();
		}
		return proxy;
	}
	,__class__: org_puremvc_haxe_core_Model
};
var org_puremvc_haxe_interfaces_IView = function() { };
org_puremvc_haxe_interfaces_IView.__name__ = true;
org_puremvc_haxe_interfaces_IView.__isInterface__ = true;
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
	if(org_puremvc_haxe_core_View.instance == null) {
		org_puremvc_haxe_core_View.instance = new org_puremvc_haxe_core_View();
	}
	return org_puremvc_haxe_core_View.instance;
};
org_puremvc_haxe_core_View.prototype = {
	initializeView: function() {
	}
	,registerObserver: function(notificationName,observer) {
		if(!Object.prototype.hasOwnProperty.call(this.observerMap.h,notificationName)) {
			var _this = this.observerMap;
			var value = new haxe_ds_List();
			_this.h[notificationName] = value;
		}
		this.observerMap.h[notificationName].add(observer);
	}
	,notifyObservers: function(notification) {
		var _this = this.observerMap;
		var key = notification.getName();
		if(Object.prototype.hasOwnProperty.call(_this.h,key)) {
			var _this = this.observerMap;
			var key = notification.getName();
			var observers_ref = _this.h[key];
			var observers = new haxe_ds_List();
			var observer_head = observers_ref.h;
			while(observer_head != null) {
				var val = observer_head.item;
				observer_head = observer_head.next;
				var observer = val;
				observers.add(observer);
			}
			var observer_head = observers.h;
			while(observer_head != null) {
				var val = observer_head.item;
				observer_head = observer_head.next;
				var observer = val;
				observer.notifyObserver(notification);
			}
		}
	}
	,removeObserver: function(notificationName,notifyContext) {
		var observers = this.observerMap.h[notificationName];
		var _g_head = observers.h;
		while(_g_head != null) {
			var val = _g_head.item;
			_g_head = _g_head.next;
			var observer = val;
			if(observer.compareNotifyContext(notifyContext) == true) {
				observers.remove(observer);
				break;
			}
		}
		if(observers.isEmpty()) {
			var _this = this.observerMap;
			if(Object.prototype.hasOwnProperty.call(_this.h,notificationName)) {
				delete(_this.h[notificationName]);
			}
		}
	}
	,registerMediator: function(mediator) {
		var _this = this.mediatorMap;
		var key = mediator.getMediatorName();
		if(Object.prototype.hasOwnProperty.call(_this.h,key)) {
			return;
		}
		var _this = this.mediatorMap;
		var key = mediator.getMediatorName();
		_this.h[key] = mediator;
		var interests = mediator.listNotificationInterests();
		if(interests.length > 0) {
			var observer = new org_puremvc_haxe_patterns_observer_Observer($bind(mediator,mediator.handleNotification),mediator);
			var _g = 0;
			var _g1 = interests.length;
			while(_g < _g1) {
				var i = _g++;
				this.registerObserver(interests[i],observer);
			}
		}
		mediator.onRegister();
	}
	,retrieveMediator: function(mediatorName) {
		return this.mediatorMap.h[mediatorName];
	}
	,removeMediator: function(mediatorName) {
		var mediator = this.mediatorMap.h[mediatorName];
		if(mediator != null) {
			var interests = mediator.listNotificationInterests();
			var _g = 0;
			var _g1 = interests.length;
			while(_g < _g1) {
				var i = _g++;
				this.removeObserver(interests[i],mediator);
			}
			var _this = this.mediatorMap;
			if(Object.prototype.hasOwnProperty.call(_this.h,mediatorName)) {
				delete(_this.h[mediatorName]);
			}
			mediator.onRemove();
		}
		return mediator;
	}
	,hasMediator: function(mediatorName) {
		return Object.prototype.hasOwnProperty.call(this.mediatorMap.h,mediatorName);
	}
	,__class__: org_puremvc_haxe_core_View
};
var org_puremvc_haxe_interfaces_ICommand = function() { };
org_puremvc_haxe_interfaces_ICommand.__name__ = true;
org_puremvc_haxe_interfaces_ICommand.__isInterface__ = true;
org_puremvc_haxe_interfaces_ICommand.prototype = {
	__class__: org_puremvc_haxe_interfaces_ICommand
};
var org_puremvc_haxe_interfaces_IFacade = function() { };
org_puremvc_haxe_interfaces_IFacade.__name__ = true;
org_puremvc_haxe_interfaces_IFacade.__isInterface__ = true;
org_puremvc_haxe_interfaces_IFacade.prototype = {
	__class__: org_puremvc_haxe_interfaces_IFacade
};
var org_puremvc_haxe_interfaces_INotification = function() { };
org_puremvc_haxe_interfaces_INotification.__name__ = true;
org_puremvc_haxe_interfaces_INotification.__isInterface__ = true;
org_puremvc_haxe_interfaces_INotification.prototype = {
	__class__: org_puremvc_haxe_interfaces_INotification
};
var org_puremvc_haxe_interfaces_IObserver = function() { };
org_puremvc_haxe_interfaces_IObserver.__name__ = true;
org_puremvc_haxe_interfaces_IObserver.__isInterface__ = true;
org_puremvc_haxe_interfaces_IObserver.prototype = {
	__class__: org_puremvc_haxe_interfaces_IObserver
};
var org_puremvc_haxe_interfaces_IProxy = function() { };
org_puremvc_haxe_interfaces_IProxy.__name__ = true;
org_puremvc_haxe_interfaces_IProxy.__isInterface__ = true;
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
	if(org_puremvc_haxe_patterns_facade_Facade.instance == null) {
		org_puremvc_haxe_patterns_facade_Facade.instance = new org_puremvc_haxe_patterns_facade_Facade();
	}
	return org_puremvc_haxe_patterns_facade_Facade.instance;
};
org_puremvc_haxe_patterns_facade_Facade.prototype = {
	initializeFacade: function() {
		this.initializeModel();
		this.initializeController();
		this.initializeView();
	}
	,initializeController: function() {
		if(this.controller != null) {
			return;
		}
		this.controller = org_puremvc_haxe_core_Controller.getInstance();
	}
	,initializeModel: function() {
		if(this.model != null) {
			return;
		}
		this.model = org_puremvc_haxe_core_Model.getInstance();
	}
	,initializeView: function() {
		if(this.view != null) {
			return;
		}
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
		if(this.model != null) {
			proxy = this.model.removeProxy(proxyName);
		}
		return proxy;
	}
	,hasProxy: function(proxyName) {
		return this.model.hasProxy(proxyName);
	}
	,registerMediator: function(mediator) {
		if(this.view != null) {
			this.view.registerMediator(mediator);
		}
	}
	,retrieveMediator: function(mediatorName) {
		return this.view.retrieveMediator(mediatorName);
	}
	,removeMediator: function(mediatorName) {
		var mediator = null;
		if(this.view != null) {
			mediator = this.view.removeMediator(mediatorName);
		}
		return mediator;
	}
	,hasMediator: function(mediatorName) {
		return this.view.hasMediator(mediatorName);
	}
	,sendNotification: function(notificationName,body,type) {
		this.notifyObservers(new org_puremvc_haxe_patterns_observer_Notification(notificationName,body,type));
	}
	,notifyObservers: function(notification) {
		if(this.view != null) {
			this.view.notifyObservers(notification);
		}
	}
	,__class__: org_puremvc_haxe_patterns_facade_Facade
};
var org_puremvc_haxe_patterns_observer_Notification = function(name,body,type) {
	this.name = name;
	if(body != null) {
		this.body = body;
	}
	if(type != null) {
		this.type = type;
	}
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
		msg += "\nBody:" + (this.body == null ? "null" : this.body.toString());
		msg += "\nType:" + (this.type == null ? "null" : this.type);
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
view_IItem.__isInterface__ = true;
view_IItem.prototype = {
	__class__: view_IItem
};
var view_BasicItem = function(mediatorName,viewComponent) {
	this._owner = "";
	this._viewer = "";
	this._filp = true;
	var _gthis = this;
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
	viewComponent.click(function(e) {
		_gthis.sendNotification("on_item_click",[viewComponent[0]]);
	});
};
view_BasicItem.__name__ = true;
view_BasicItem.__interfaces__ = [view_IItem];
view_BasicItem.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
view_BasicItem.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
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
		this.sendNotification("on_item_lock",{ view : this.viewComponent, lock : l});
	}
	,flip: function(f) {
		this._filp = f;
		this.checkViewerAndShowCard();
	}
	,focus: function(f) {
		if(f) {
			this.viewComponent.addClass("focus");
		} else {
			this.viewComponent.removeClass("focus");
		}
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
		if(this._owner == controller_SocketController.playerId) {
			this.viewComponent.find("#img_owner").show();
		} else {
			this.viewComponent.find("#img_owner").hide();
		}
		this.checkViewerAndShowCard();
	}
	,getViewer: function() {
		return this._viewer;
	}
	,getOwner: function() {
		return this._owner;
	}
	,listNotificationInterests: function() {
		return ["on_select_cards"];
	}
	,handleNotification: function(notification) {
		if(notification.getName() == "on_select_cards") {
			this.onSelect(Reflect.field(notification.getBody(),"ary_select"));
		}
	}
	,checkViewerAndShowCard: function() {
		var showViewerImg = false;
		var showRedback = false;
		if(!this._filp) {
			this.showItemForMe();
		} else if(this._viewer == this._owner) {
			if(this._viewer == controller_SocketController.playerId) {
				this.showItemForMe();
				showViewerImg = true;
			} else {
				this.hideItemForMe();
				if(this._viewer != "") {
					showRedback = true;
				}
			}
		} else {
			this.hideItemForMe();
		}
		if(this._owner == "") {
			this.viewComponent.css("opacity",.5);
		} else {
			this.viewComponent.css("opacity",1);
		}
		if(showViewerImg) {
			this.viewComponent.find("#img_viewer").show();
		} else {
			this.viewComponent.find("#img_viewer").hide();
		}
		if(showRedback) {
			this.viewComponent.find("#mc_see").show();
		} else {
			this.viewComponent.find("#mc_see").hide();
		}
	}
	,showItemForMe: function() {
		this.viewComponent.find(".card_back").hide();
	}
	,hideItemForMe: function() {
		this.viewComponent.find(".card_back").show();
	}
	,onSelect: function(ary_select) {
		this.focus(false);
		if(this.checkSelf(ary_select)) {
			this.focus(true);
		}
	}
	,checkSelf: function(ary_select) {
		if(ary_select == null) {
			return false;
		}
		var isSelf = false;
		var _g = 0;
		var _g1 = ary_select.length;
		while(_g < _g1) {
			var i = _g++;
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
		var _gthis = this;
		Tool.j({ deg : sd}).animate({ deg : ed},{ duration : 300, step : function(now) {
			_gthis.getViewComponent().css({ "-moz-transform" : "rotate(" + now + "deg)", "-webkit-transform" : "rotate(" + now + "deg)", "-o-transform" : "rotate(" + now + "deg)", "-ms-transform" : "rotate(" + now + "deg)", "transform" : "rotate(" + now + "deg)"});
		}});
	}
	,__class__: view_BasicItem
});
var view_CardItem = function(mediatorName,viewComponent) {
	view_BasicItem.call(this,mediatorName,viewComponent);
};
view_CardItem.__name__ = true;
view_CardItem.__super__ = view_BasicItem;
view_CardItem.prototype = $extend(view_BasicItem.prototype,{
	__class__: view_CardItem
});
var view_DataItem = function(mediatorName,viewComponent) {
	view_BasicItem.call(this,mediatorName,viewComponent);
};
view_DataItem.__name__ = true;
view_DataItem.__super__ = view_BasicItem;
view_DataItem.prototype = $extend(view_BasicItem.prototype,{
	__class__: view_DataItem
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
		if(this.viewComponent.attr("action") == null || this.viewComponent.attr("action") != value.sequence) {
			var _g = 0;
			while(_g < 30) {
				var i = [_g++];
				haxe_Timer.delay((function(i) {
					return function() {
						if(i[0] == 29) {
							showTarget(Math.floor(value.sequence * count));
						} else {
							showTarget(Math.floor(Math.random() * count));
						}
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
	,__class__: view_TokenItem
});
var view_UI = function(mediatorName,viewComponent) {
	this.browserNotify = null;
	this.isShowNotify = false;
	var _gthis = this;
	org_puremvc_haxe_patterns_mediator_Mediator.call(this,mediatorName,viewComponent);
	this.getViewComponent().layout();
	this.mc_layoutMain = this.getViewComponent();
	this.mc_layoutMain.layout("collapse","south");
	this.mc_detailContainer = this.getViewComponent().find("#mc_detailContainer");
	this.mc_messagePanel = this.getViewComponent().find("#mc_messagePanel");
	this.mc_messagePanel.attr("isOpen",0);
	this.mc_messagePanel.find("#txt_messageInput").textbox({ onChange : function(nv,ov) {
		if(nv != "") {
			_gthis.mc_messagePanel.find("#txt_messageInput").textbox("setValue","");
			_gthis.addSingleMessage(controller_SocketController.playerId,nv);
			_gthis.sendNotification("sendMessage",{ type : "chat", msg : { id : controller_SocketController.playerId, msg : nv}});
		}
	}});
	this.mc_messagePanel.find("#mc_quickButton > a").linkbutton({ onClick : function() {
		var buttonself = this;
		var msg;
		switch(buttonself.id) {
		case "btn_isCounter":
			msg = "尊貴的閣下，請問你要康這張牌嗎？";
			break;
		case "btn_isMyTurn":
			msg = "到我了嗎？我的朋友。";
			break;
		case "btn_no":
			msg = "否。";
			break;
		case "btn_turnEnd":
			msg = "我結束這個回合！";
			break;
		case "btn_yes":
			msg = "是，親愛的伙伴!";
			break;
		default:
			msg = "";
		}
		_gthis.addSingleMessage(controller_SocketController.playerId,msg);
		_gthis.sendNotification("sendMessage",{ type : "chat", msg : { id : controller_SocketController.playerId, msg : msg}});
	}});
	this.mc_messagePanel.find("input").focus(function() {
		_gthis.sendNotification("do_enable_command",{ enable : false});
	});
	this.mc_messagePanel.find("input").focusout(function() {
		_gthis.sendNotification("do_enable_command",{ enable : true});
	});
	this.mc_timerView = Main.j("#mc_timerView");
	this.combo_deck = this.getViewComponent().find("#combo_deck");
	this.combo_ops = this.getViewComponent().find("#combo_ops");
	this.txt_savestr = this.getViewComponent().find("#txt_savestr");
	this.mc_historyList = Main.j("#mc_historyList");
	this.btn_record = this.getViewComponent().find("#btn_record");
	this.mc_light = Main.j("#mc_light");
	this.dia_invite = Main.j("#dia_invite");
	this.dia_invite.find("#btn_receive").click(function() {
		var opsstr = _gthis.dia_invite.attr("ops");
		_gthis.sendNotification("on_been_invite",{ inviteId : opsstr});
		_gthis.sendNotification("do_startHeartbeat");
		_gthis.showReceive(false);
	});
	this.dia_iconGenerator = Main.j("#dia_iconGenerator");
	this.createIconDialog();
	this.dia_confirm = Main.j("#dia_confirm");
	this.dia_confirm.find("#btn_cancel").linkbutton({ onClick : function() {
		_gthis.sendNotification("on_confirmPanel_btnConfirm_click",false);
		_gthis.openConfirmPanel(false);
	}});
	this.dia_confirm.find("#btn_confirm").linkbutton({ onClick : function() {
		_gthis.sendNotification("on_confirmPanel_btnConfirm_click",true);
		_gthis.openConfirmPanel(false);
	}});
	this.combo_ops.combobox({ onChange : function(nv,ov) {
		Main.selectOps(nv);
	}});
	this.btn_record.linkbutton({ onClick : function() {
		var record = _gthis.btn_record.hasClass("l-btn-selected");
		_gthis.sendNotification("do_start_record",{ record : record});
	}});
	Main.j("#btn_connect").linkbutton();
	Main.j("#txt_id").textbox({ editable : false, onChange : function(nv,od) {
		Main.changePlayer(nv);
	}});
	Main.j(window).blur(function() {
		_gthis.isShowNotify = true;
	});
	Main.j(window).focus(function() {
		_gthis.isShowNotify = false;
		if(_gthis.browserNotify != null) {
			_gthis.browserNotify.close();
			_gthis.browserNotify = null;
		}
	});
};
view_UI.__name__ = true;
view_UI.__super__ = org_puremvc_haxe_patterns_mediator_Mediator;
view_UI.prototype = $extend(org_puremvc_haxe_patterns_mediator_Mediator.prototype,{
	listNotificationInterests: function() {
		return ["on_select_cards","on_dice","on_been_invite","on_press","on_readyToDeleteItem","on_socket_error","on_socket_success","on_getSuit_success","on_receiveOps","on_timer_update","on_searchComplete","on_heartbeat_event","on_receiveMessage","on_startTimer_click","on_createDeck_click","on_save_click","on_load_click","do_show_recevie"];
	}
	,handleNotification: function(notification) {
		var _gthis = this;
		var _g = notification.getName();
		switch(_g) {
		case "on_been_invite":
			this.combo_ops.combobox("setValue",notification.getBody().inviteId);
			break;
		case "on_createDeck_click":
			this.closeNorthPanel();
			break;
		case "on_dice":
			Main.showDiceMessage(notification.getBody().playerId,notification.getBody().dice);
			break;
		case "on_getSuit_success":
			this.createComboDeck(notification.getBody().cardSuit);
			break;
		case "on_heartbeat_event":
			this.showOnlineOffline(notification.getBody().conn);
			break;
		case "on_load_click":
			var loadstr = this.txt_savestr.val();
			try {
				var ary_cmds = JSON.parse(loadstr);
				ary_cmds.forEach(function(cmd) {
					if(cmd.type == "addItems") {
						_gthis.sendNotification("do_create_item",cmd.msg);
					}
					return true;
				});
				haxe_Timer.delay(function() {
					_gthis.sendNotification("do_update_view");
				},1000);
				this.txt_savestr.val("");
			} catch( _g1 ) {
				Main.alert("格式不對哦!");
			}
			break;
		case "on_press":
			var which = notification.getType();
			switch(which) {
			case 85:
				this.createCustomToken();
				break;
			case 89:
				this.openIconGenerator(true);
				break;
			}
			break;
		case "on_readyToDeleteItem":
			var count = notification.getBody().count;
			var msg = "你確定要刪除這" + count + "個物件嗎？";
			this.openConfirmPanel(true,msg);
			break;
		case "on_receiveMessage":
			switch(notification.getType()) {
			case "addItems":
				var ary_item = notification.getBody();
				this.pushHistoryMsg("對手新增了" + ary_item.length + "個實體");
				break;
			case "applyTransform":
				var ary_item = notification.getBody().ary_item;
				var updateLayer = notification.getBody().zs;
				if(!updateLayer) {
					this.pushHistoryMsg("對手操作了" + ary_item.length + "個實體");
				}
				break;
			case "chat":
				var id = notification.getBody().id;
				var msg = notification.getBody().msg;
				this.addSingleMessage(id,msg);
				Main.slide(id + "說:" + msg);
				break;
			case "deleteItem":
				var ary_item = notification.getBody();
				this.pushHistoryMsg("對手刪除了" + ary_item.length + "個實體");
				break;
			}
			if(this.isShowNotify && this.browserNotify == null) {
				this.browserNotify = google.notify("你的對戰卡友動作囉! 趕快回去卡牌風雲應戰吧","../common/images/logo.jpg");
			}
			break;
		case "on_receiveOps":
			var ary_ops = notification.getBody().ary_ops;
			this.setComboOps(ary_ops);
			this.combo_ops.combobox("select",ary_ops[ary_ops.length - 1]);
			break;
		case "on_save_click":
			this.txt_savestr.val(notification.getBody().str);
			break;
		case "on_searchComplete":
			this.disabledOpponent();
			break;
		case "on_select_cards":
			this.showCards(notification.getBody().ary_select);
			break;
		case "on_socket_error":
			this.onSocketError();
			break;
		case "on_socket_success":
			this.onSocketSuccess();
			break;
		case "on_startTimer_click":
			this.mc_layoutMain.layout("collapse","north");
			break;
		case "on_timer_update":
			var tcx = CallJs.api_getTimerContext();
			this.doUpdateTimerView(tcx);
			break;
		default:
			var str = _g;
			if(str == "do_show_recevie") {
				this.showReceive(notification.getBody().show,notification.getBody().ops);
			}
		}
	}
	,pushHistoryMsg: function(msg) {
		if(this.mc_historyList.find("p").length > 20) {
			this.mc_historyList.find("p").first().remove();
		}
		this.mc_historyList.append("<p style=\"font-size:12px; text-align:right;\">" + msg + "</p>");
	}
	,doUpdateTimerView: function(timerData) {
		if(timerData != null) {
			var _g = 0;
			var _g1 = Reflect.fields(timerData.users);
			while(_g < _g1.length) {
				var k = _g1[_g];
				++_g;
				var user = Reflect.field(timerData.users,k);
				var name = Reflect.field(user,"name").substr(0,5);
				var t = CallJs.api_getTime(Reflect.field(user,"name"));
				var t2 = new Date(t);
				var h = t2.getUTCHours();
				var m = t2.getUTCMinutes();
				var s = t2.getUTCSeconds();
				this.addTimerItem(name,h + "時" + m + "分" + s + "秒");
			}
			if(timerData.users[timerData.currUser].name == controller_SocketController.playerId) {
				this.mc_timerView.parent().addClass("timer_focus");
			} else {
				this.mc_timerView.parent().removeClass("timer_focus");
			}
		}
	}
	,createIconDialog: function() {
		var _gthis = this;
		var cookieData = CallJs.api_loadUserConfig("userIconContents",null);
		if(cookieData == null) {
			var _g = [];
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			_g.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
			cookieData = _g;
		}
		while(Lambda.count(cookieData) < 20) cookieData.push({ path : "../common/images/card/token_0.png", content : "天機桐人_1/1_宇"});
		var _g = 0;
		var _g1 = Lambda.count(cookieData);
		while(_g < _g1) {
			var i = _g++;
			this.addSingleIconData(i,cookieData[i]);
		}
		this.dia_iconGenerator.find(".easyui-linkbutton").linkbutton({ onClick : function() {
			var dom = Main.j(this);
			var createContent = dom.parents(".singleIconData").find(".easyui-textbox").textbox("getValue");
			var path = dom.parents(".singleIconData").find(".img_token").attr("src");
			_gthis.quickCustomToken = { createContent : createContent, path : path};
			_gthis.createCustomToken();
			_gthis.openIconGenerator(false);
		}});
		this.dia_iconGenerator.find(".img_token").click(function() {
			var dom = Main.j(this);
			var imgPath = dom.attr("src");
			if(imgPath.indexOf("token_0") != -1) {
				imgPath = StringTools.replace(imgPath,"token_0","token_1");
			} else if(imgPath.indexOf("token_1") != -1) {
				imgPath = StringTools.replace(imgPath,"token_1","token_2");
			} else if(imgPath.indexOf("token_2") != -1) {
				imgPath = StringTools.replace(imgPath,"token_2","token_0");
			}
			dom.attr("src",imgPath);
		});
		this.dia_iconGenerator.find(".easyui-textbox").textbox();
		this.dia_iconGenerator.dialog({ closed : true, onClose : function() {
			_gthis.saveIconContents();
			_gthis.facade.sendNotification("on_iconGenerator_close");
		}});
	}
	,saveIconContents: function() {
		var saveAry = [];
		this.dia_iconGenerator.find(".easyui-textbox").each(function() {
			var dom = Main.j(this);
			var content = dom.textbox("getValue");
			if(content == "") {
				content = "天機桐人_1/1_宇";
			}
			var path = dom.parents(".singleIconData").find(".img_token").attr("src");
			saveAry.push({ path : path, content : content});
		});
		CallJs.api_saveUserConfig("userIconContents",saveAry);
	}
	,openConfirmPanel: function(open,msg) {
		if(msg == null) {
			msg = "";
		}
		this.dia_confirm.find("p").html(msg);
		this.dia_confirm.dialog(open ? "open" : "close");
	}
	,openIconGenerator: function(open) {
		this.dia_iconGenerator.dialog(open ? "open" : "close");
	}
	,createCustomToken: function() {
		if(this.quickCustomToken != null) {
			this.facade.sendNotification("do_create_item",Tool.createItemFromData([{ extra : ["token_0","other",this.quickCustomToken.createContent,this.quickCustomToken.path], pos : controller_MainController.pos_mouse.slice(0), type : "tokenString", width : 50, height : 50, owner : controller_SocketController.playerId}]));
		} else {
			Main.slide("請先按Y來生成一個指示物!");
		}
	}
	,addSingleIconData: function(id,data) {
		var icondataDom = Main.j("#tmpl_singleIconData").tmpl({ buttonId : id, content : data.content, tokenPath : data.path});
		this.dia_iconGenerator.append(icondataDom);
	}
	,addSingleMessage: function(id,msg) {
		var mc_message = this.mc_messagePanel.find("#mc_message");
		var msgdom = Main.j("#tmpl_singleMessage").tmpl({ id : id + " : " + HxOverrides.dateStr(new Date()), msg : msg});
		if(id == controller_SocketController.playerId) {
			msgdom.find("#txt_message").css("color","lightblue");
		}
		mc_message.prepend(msgdom);
	}
	,addTimerItem: function(name,time) {
		if(this.hasTimerItem(name)) {
			this.getTimerItem(name).find("#usingTime").html(time);
		} else {
			var timerView = Main.j("#tmpl_timerItem").tmpl({ name : name, time : time});
			this.mc_timerView.prepend(timerView);
		}
	}
	,hasTimerItem: function(name) {
		return Reflect.field(this.mc_timerView.find("#" + name),"length") > 0;
	}
	,getTimerItem: function(name) {
		return this.mc_timerView.find("#" + name);
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
		} else {
			this.dia_invite.dialog("close");
		}
	}
	,showOnlineOffline: function(show) {
		if(show) {
			this.mc_light.css("background-color","green");
		} else {
			this.mc_light.css("background-color","red");
		}
	}
	,disabledOpponent: function() {
		this.combo_ops.combobox("disable");
	}
	,setComboOps: function(ary_ops) {
		var _gthis = this;
		this.combo_ops.empty();
		Lambda.foreach(ary_ops,function(str) {
			_gthis.combo_ops.append("<option value=\"" + str + "\">" + str + "</option>");
			return true;
		});
		this.combo_ops.combobox();
	}
	,createComboDeck: function(cardSuit) {
		var _gthis = this;
		if(cardSuit.length == 0) {
			this.combo_deck.empty();
			this.combo_deck.append("<option></option>");
			this.combo_deck.combobox();
			return;
		}
		this.combo_deck.empty();
		var _g = 0;
		var _g1 = cardSuit.length;
		while(_g < _g1) {
			var i = _g++;
			var deck = cardSuit[i];
			this.combo_deck.append("<option value=\"" + i + "\">" + deck.name + "</option>");
		}
		this.combo_deck.combobox({ onSelect : function(record) {
			_gthis.sendNotification("on_combo_deck_change",{ deckId : record.value});
		}});
		this.combo_deck.combobox("textbox").prop("placeholder","選擇套牌");
		this.combo_deck.combobox("setValue",0);
	}
	,showCards: function(ary_select) {
		var _gthis = this;
		if(ary_select == null) {
			return;
		}
		this.mc_detailContainer.empty();
		Lambda.foreach(ary_select,function(card) {
			_gthis.showCard(card);
			return true;
		});
	}
	,closeNorthPanel: function() {
		this.getViewComponent().layout("collapse","north");
	}
	,showCard: function(card) {
		if(card == null) {
			return;
		}
		if(!card.back || card.owner == controller_SocketController.playerId && card.viewer == controller_SocketController.playerId) {
			var game = card.extra[2];
			var cardId = card.extra[0];
			var div = Main.j("<div></div>");
			div.css("position","relative");
			var url = Main.getCardImageUrlWithPackage(game,cardId);
			if(url != null) {
				var img = Main.j("<img></img>");
				img.attr("src",url);
				img.css("position","relative");
				img.css("top","0");
				img.css("left","0");
				img.load(function() {
					img.css("width","100%");
				});
				div.append(img);
			}
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
					case "crusade":
						str += detail.info_2;
						str += "<br/>";
						str += detail.info_4;
						str += "<br/>";
						str += detail.info_16;
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
					case "fighter":
						str += detail.cname + " " + detail.ctype;
						str += "<br/>";
						str += "狀態能力:" + detail.abi1;
						str += "<br/>";
						str += "武器能力:" + detail.abi2;
						str += "<br/>";
						str += "手牌能力:" + detail.abi3;
						break;
					case "finalfantasy":
						str += detail.Element + " " + detail.Cost;
						str += "<br/>";
						str += detail.Name_EN + "(" + detail.Name + ")";
						str += "<br/>";
						str += detail.Type_EN + "(" + detail.Type + ")";
						str += "<br/>";
						str += detail.Job_EN + "(" + detail.Job + ")";
						str += "<br/>";
						str += detail.Category_1;
						str += "<br/>";
						str += detail.Text_EN;
						str += "<br/>";
						str += detail.Power;
						str += "<br/>";
						str += detail.Category_2;
						str += "<br/>";
						break;
					case "gundamCrossWar":
						str += detail.cname + " " + detail.size;
						str += "<br/>";
						str += detail.ch;
						str += "<br/>";
						str += detail.abi1;
						str += "<br/>";
						str += detail.abi2;
						break;
					case "gundamWar":
						str += detail.name;
						str += "<br/>";
						str += detail.context;
						break;
					case "gundamWarN":
						str += detail.info_2;
						str += "<br/>";
						str += detail.info_17;
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
					case "pokemon":
						str += detail.id;
						str += "<br/>";
						str += detail.name;
						str += "<br/>";
						str += detail.abiTxt;
						str += "<br/>";
						str += detail.body;
						str += "<br/>";
						var _g = 0;
						var _g1 = Reflect.fields(detail.powers);
						while(_g < _g1.length) {
							var i = _g1[_g];
							++_g;
							var power = Reflect.field(detail.powers,i);
							str += power.name;
							str += "<br/>";
							str += power.power;
							str += "<br/>";
							str += power.txt;
							str += "<br/>";
						}
						break;
					case "sangoWar":
						str += detail.cname + " " + detail.atype;
						str += "<br/>";
						str += detail.content;
						str += "<br/>";
						str += detail.counter;
						break;
					case "sengoku":
						str += detail.cname + " " + detail.atype + " " + detail.atype2;
						str += "<br/>";
						str += detail.symbol;
						str += "<br/>";
						str += detail.content;
						str += "<br/>";
						str += detail.counter;
						break;
					case "sgs":
						str += detail.name;
						str += "<br/>";
						str += detail.type;
						str += "<br/>";
						str += detail.text;
						break;
					case "ws":
						str += detail.id;
						str += "<br/>";
						str += detail.text;
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
				}
				detaildiv.text(str);
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
	,__class__: view_UI
});
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
var $_;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = "Date";
var Int = { };
var Dynamic = { };
var Float = Number;
var Bool = Boolean;
var Class = { };
var Enum = { };
js_Boot.__toStr = ({ }).toString;
Main.on_getSuit_success = "on_getSuit_success";
Main.on_createDeck_click = "on_createDeck_click";
Main.on_receiveOps = "on_receiveOps";
Main.on_save_click = "on_save_click";
Main.on_load_click = "on_load_click";
Main.on_startTimer_click = "on_startTimer_click";
Main.on_timer_update = "on_timer_update";
Main.j = $;
Main.fbid = "";
Main.token = "";
Main.otherPlayerId = "";
Main.currentSelect = "fighter";
Main.cardSuits = { };
Main.cardSuitsDetails = { };
Main.cardSuitsDetailsIsLoading = { };
Tool.j = $;
org_puremvc_haxe_patterns_mediator_Mediator.NAME = "Mediator";
controller_MainController.do_create_item = "do_create_item";
controller_MainController.do_getItemsString = "do_getItemsString";
controller_MainController.do_start_record = "do_start_record";
controller_MainController.do_enable_command = "do_enable_command";
controller_MainController.do_update_view = "do_update_view";
controller_MainController.on_been_invite = "on_been_invite";
controller_MainController.on_select_cards = "on_select_cards";
controller_MainController.on_press = "on_press";
controller_MainController.on_dice = "on_dice";
controller_MainController.on_readyToDeleteItem = "on_readyToDeleteItem";
controller_MainController.pos_mouse = [0,0];
controller_SocketController.setOpponents = "setOpponents";
controller_SocketController.sendMessage = "sendMessage";
controller_SocketController.createPlayerSocket = "createPlayerSocket";
controller_SocketController.do_startHeartbeat = "do_startHeartbeat";
controller_SocketController.on_searchComplete = "on_searchComplete";
controller_SocketController.on_heartbeat_event = "on_heartbeat_event";
controller_SocketController.on_sendMessage = "on_sendMessage";
controller_SocketController.on_receiveMessage = "on_receiveMessage";
controller_SocketController.playerId = "smart";
controller_SocketController.otherPlayerIds = [];
controller_SocketController.otherPlayerIdsForCheck = [];
controller_SocketController.isConntect = false;
controller_SocketController.isCanSendMessage = false;
controller_SocketController.on_socket_error = "on_socket_error";
controller_SocketController.on_socket_success = "on_socket_success";
view_BasicItem.on_item_click = "on_item_click";
view_BasicItem.on_item_lock = "on_item_lock";
view_UI.do_show_recevie = "do_show_recevie";
view_UI.on_combo_deck_change = "on_combo_deck_change";
view_UI.on_iconGenerator_close = "on_iconGenerator_close";
view_UI.on_confirmPanel_btnConfirm_click = "on_confirmPanel_btnConfirm_click";
Main.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
