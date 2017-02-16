(function (console) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var AppConfig = function() { };
AppConfig.__name__ = true;
var AppController = function() {
};
AppController.__name__ = true;
AppController.prototype = {
	start: function() {
		this.domController = new DomController();
		this.threeEngineController = new ThreeEngineController();
		this.threeEngineController.mediator = this;
		this.threeEngineController.set_context(this.context);
		this.keyboardController = new KeyboardController();
		this.keyboardController.mediator = this;
		this.backendController = new FakeBackEndController();
		this.backendController.mediator = this;
		this.gameStart();
	}
	,addWebglListener: function(event,action) {
		this.domController.addWebglListener(event,action);
	}
	,setWebgl: function(dom) {
		this.domController.setWebgl(dom);
	}
	,gameStart: function() {
		this.threeEngineController.initGame();
		this.keyboardController.start();
		this.onClickRefreshFromHtml();
	}
	,onClickCmdFromHtml: function(val) {
		this.pushCommandAndSyncView(val);
	}
	,onClickRefreshFromHtml: function() {
		this.backendController.syncModel($bind(this,this.syncHtmlAndThree));
	}
	,createCmdButton: function(val) {
		this.domController.createCmdButton(val);
	}
	,clearCmdButton: function() {
		this.domController.clearCmdButton();
	}
	,getAll: function() {
		return this.backendController.getAll();
	}
	,syncHtml: function(val) {
		this.domController.syncView(val);
	}
	,getCardByUuid: function(uuid) {
		return this.threeEngineController.getCardByUuid(uuid);
	}
	,onFUp: function() {
	}
	,onAUp: function() {
		this.threeEngineController.selectPrev();
	}
	,onDUp: function() {
		this.threeEngineController.selectNext();
	}
	,isInTheHand: function(uid) {
		return this.backendController.isInTheHand(uid);
	}
	,pushCommandAndSyncView: function(val) {
		this.backendController.pushCommand(val,$bind(this,this.syncHtmlAndThree));
	}
	,syncHtmlAndThree: function(val) {
		this.domController.syncView(val);
		this.threeEngineController.syncView(val);
	}
};
var BasicController = function(_uid) {
	if(_uid == null) _uid = "";
	if(_uid == "") _uid = Tools.uuid();
	this.uid = _uid;
};
BasicController.__name__ = true;
var ICardController = function() { };
ICardController.__name__ = true;
var CardController = function(_uid) {
	this.standPos = null;
	BasicController.call(this,_uid);
};
CardController.__name__ = true;
CardController.__interfaces__ = [ICardController];
CardController.__super__ = BasicController;
CardController.prototype = $extend(BasicController.prototype,{
	set_mesh: function(m) {
		this.mesh = m;
		this.getFaceMesh().children[0].material = new THREE.MeshLambertMaterial();
		this.getFaceMesh().children[0].material.needsUpdate = true;
		this.getBackMesh().children[0].material.needsUpdate = true;
		return this.mesh;
	}
	,get_isFaceUp: function() {
		if(this.mesh == null) return false;
		return this.mesh.rotation.z < 0.055555555555555552 * Math.PI;
	}
	,setFaceTexture: function(texture) {
		this.getFaceMesh().children[0].material.map = texture;
	}
	,setBackTexture: function(texture) {
		this.getBackMesh().children[0].material.map = texture;
	}
	,flip: function() {
		if(this.get_isFaceUp()) this.addTweener(this.mesh.rotation,{ z : Math.PI, time : AppConfig.moveTime, transition : AppConfig.moveEasingType}); else this.addTweener(this.mesh.rotation,{ z : 0, time : AppConfig.moveTime, transition : AppConfig.moveEasingType});
	}
	,overCardInHand: function() {
		this.standPos = this.mesh.position.clone();
		var newPos = this.mesh.position.clone();
		newPos.y += 2;
		this.moveCard(newPos.x,newPos.y,newPos.z);
	}
	,releaseCardInHand: function() {
		if(this.standPos != null) this.moveCard(this.standPos.x,this.standPos.y,this.standPos.z);
	}
	,moveCard: function(x,y,z) {
		this.addTweener(this.mesh.position,{ x : x, y : y, z : z, time : AppConfig.moveTime, transition : AppConfig.moveEasingType});
	}
	,rotateCard: function(x,y,z) {
		this.addTweener(this.mesh.rotation,{ x : x, y : y, z : z, time : AppConfig.moveTime, transition : AppConfig.moveEasingType});
	}
	,getFaceMesh: function() {
		return this.mesh.children[1];
	}
	,getBackMesh: function() {
		return this.mesh.children[0];
	}
	,addTweener: function(obj,props) {
		Tweener.addTween(obj,props);
	}
});
var DomController = function(_uid) {
	if(_uid == null) _uid = "";
	this.acc_leftPanel = js.JQuery("#acc_leftPanel");
	this.dom_webgl = js.JQuery("#webgl");
	this.dia_command = js.JQuery("#dia_command");
	BasicController.call(this,_uid);
	AppConfig.screenWidth = this.dom_webgl.width();
	AppConfig.screenHeight = this.dom_webgl.height();
	this.acc_leftPanel.accordion("select",1);
};
DomController.__name__ = true;
DomController.__super__ = BasicController;
DomController.prototype = $extend(BasicController.prototype,{
	openDialogCommand: function(open,config) {
		this.dia_command.dialog(open?"open":"close");
	}
	,setWebgl: function(dom) {
		this.dom_webgl.append(dom);
	}
	,addWebglListener: function(event,action) {
		this.dom_webgl.on(event,action);
	}
	,createCmdButton: function(val) {
		window.createCmdButton(val);
	}
	,clearCmdButton: function() {
		window.clearCmdbutton();
	}
	,syncView: function(info) {
		window.showTableInfo(info);
	}
});
var FakeBackEndController = function(_uid) {
	if(_uid == null) _uid = "";
	this.players = [];
	BasicController.call(this,_uid);
	this.players.push({ deck : [], hand : []});
	this.players.push({ deck : ["ab","cc"], hand : []});
};
FakeBackEndController.__name__ = true;
FakeBackEndController.__super__ = BasicController;
FakeBackEndController.prototype = $extend(BasicController.prototype,{
	createPlayerDeck: function(callback) {
		this.clearDeckByPlayerId(0);
		var _g = 0;
		while(_g < 50) {
			var i = _g++;
			var uuid = Tools.uuid();
			this.addPlayerDeckCard(0,uuid);
		}
		callback(this.getAll());
	}
	,drawCardFromPlayerDeckToPlayerHand: function(fromPlayerId,toPlayerId,callback) {
		var deckFrom = this.getPlayerDeck(fromPlayerId);
		var toHand = this.getPlayerHand(toPlayerId);
		var uuid = deckFrom.pop();
		toHand.push(uuid);
		callback({ deckFrom : deckFrom, toHand : toHand});
	}
	,isInTheHand: function(uid) {
		var id = this.players[0].hand.indexOf(uid);
		return id != -1;
	}
	,getAll: function() {
		return this.tableInfo;
	}
	,syncModel: function(cb) {
		var _g = this;
		GameInfo.tableInfo(function(err,val) {
			if(GameInfo.isMe(val)) _g.collectCommand(); else _g.mediator.clearCmdButton();
			cb(val);
		});
	}
	,collectCommand: function() {
		var _g = this;
		GameInfo.collectCommand(function(err,val) {
			_g.mediator.createCmdButton(val);
		});
	}
	,pushCommand: function(cmd,cb) {
		var _g = this;
		GameInfo.pushCommand(cmd,function(err,val) {
			_g.syncModel(cb);
		});
	}
	,getPlayerDeck: function(id) {
		return this.players[id].deck;
	}
	,getPlayerHand: function(id) {
		return this.players[id].hand;
	}
	,addPlayerDeckCard: function(playerId,uuid) {
		this.getPlayerDeck(playerId).push(uuid);
	}
	,clearDeckByPlayerId: function(id) {
		var deck = this.getPlayerDeck(id);
		while(deck.length > 0) deck.pop();
	}
});
var GameInfo = function() {
};
GameInfo.__name__ = true;
GameInfo.get_roomID = function() {
	return GameInfo.roomData.ID;
};
GameInfo.get_roomRoles = function() {
	return GameInfo.roomData.Roles;
};
GameInfo.get_roomPlayers = function() {
	return GameInfo.roomData.Players;
};
GameInfo.tableInfo = function(cb) {
	model.game(GameInfo.get_roomID(),cb);
};
GameInfo.collectCommand = function(cb) {
	model.collectCommand(GameInfo.get_roomID(),GameInfo.userName,cb);
};
GameInfo.pushCommand = function(passCmd,cb) {
	model.pushCommand(GameInfo.get_roomID(),passCmd,cb);
};
GameInfo.isMe = function(gameInfo) {
	var priorityPlayer = gameInfo.PriorityPlayer;
	var id = GameInfo.get_roomRoles().indexOf(priorityPlayer);
	return GameInfo.get_roomPlayers()[id] == GameInfo.userName;
};
var KeyboardController = function(_uid) {
	BasicController.call(this,_uid);
};
KeyboardController.__name__ = true;
KeyboardController.__super__ = BasicController;
KeyboardController.prototype = $extend(BasicController.prototype,{
	start: function() {
		var _g1 = this;
		window.document.addEventListener("keyup",function(e) {
			var _g = e.keyCode;
			switch(_g) {
			case 70:
				_g1.mediator.onFUp();
				break;
			case 65:
				_g1.mediator.onAUp();
				break;
			case 68:
				_g1.mediator.onDUp();
				break;
			}
		});
	}
});
var Main = function() {
	Reflect.setField(window,"onHtmlClick",$bind(this,this.onHtmlClick));
};
Main.__name__ = true;
Main.main = function() {
	new Main();
};
Main.prototype = {
	createGame: function() {
		var _g = this;
		var gameStart = function(context) {
			_g.app = new AppController();
			_g.app.context = context;
			_g.app.start();
		};
		var waterFunc = [function(cb) {
			vic.tools.loadDAE("asset/scene.dae",function(dae) {
				cb(null,{ dae : dae});
			});
		},function(context1,cb1) {
			var ary_str = ["asset/sgs_desktop.jpg","asset/cardback3.png","asset/01030.jpg"];
			Main.async.map(ary_str,function(path,cb2) {
				var t = new THREE.TextureLoader();
				t.load(path,function(t1) {
					cb2(null,t1);
				});
			},function(err,result) {
				context1.textures = result;
				cb1(null,context1);
			});
		}];
		Main.async.waterfall(waterFunc,function(err1,context2) {
			if(err1 == null) gameStart(context2);
		});
	}
	,onHtmlClick: function(type,val) {
		switch(type) {
		case "onGameStart":
			GameInfo.userName = val.user;
			GameInfo.roomData = val.room;
			this.createGame();
			break;
		case "onCmdClick":
			if(this.app != null) this.app.onClickCmdFromHtml(val);
			break;
		case "onFreshClick":
			if(this.app != null) this.app.onClickRefreshFromHtml();
			break;
		}
	}
};
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
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
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
};
var ThreeEngineController = function(_uid) {
	this.mousePos = new THREE.Vector2();
	this.raycaster = new THREE.Raycaster();
	this.currentId = 0;
	this.cards = [];
	this.raycastMeshs = [];
	BasicController.call(this,_uid);
};
ThreeEngineController.__name__ = true;
ThreeEngineController.__super__ = BasicController;
ThreeEngineController.prototype = $extend(BasicController.prototype,{
	set_context: function(c) {
		this.context = c;
		this.createEnviroment();
		return this.context;
	}
	,createCard: function(texture,pos,uuid) {
		var card = new CardController(uuid);
		card.set_mesh(this.getMeshByName("Card",true));
		card.setFaceTexture(texture);
		card.setBackTexture(this.context.textures[1]);
		this.cards.push(card);
		card.mesh.position.x = pos.x;
		card.mesh.position.y = pos.y;
		card.mesh.position.z = pos.z;
		card.flip();
		this.scene.add(card.mesh);
		var mesh_needraycast = card.mesh.children[0].children[0];
		mesh_needraycast.target = card;
		this.raycastMeshs.push(mesh_needraycast);
		mesh_needraycast = card.mesh.children[1].children[0];
		mesh_needraycast.target = card;
		this.raycastMeshs.push(mesh_needraycast);
		return card.uid;
	}
	,moveCard: function(uuid,cards,pos) {
		if(pos == null) pos = { x : 0, y : 0, z : 0};
		var card = this.getCardByUuid(uuid);
		if(card == null) throw new js__$Boot_HaxeError("need have card!");
		var moveTo = this.getMeshByName("Player_hand_position").position.clone();
		card.moveCard(moveTo.x,moveTo.y,moveTo.z);
	}
	,getCardByUuid: function(uuid) {
		var _g = 0;
		var _g1 = this.cards;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c.uid == uuid) return c;
		}
		return null;
	}
	,flipCard: function() {
		var card = this.cards[this.cards.length - 1];
		card.flip();
	}
	,selectFirst: function() {
		var handCards = this.mediator.getAll()[0].hand;
		var handCount = handCards.length;
		if(handCount == 0) return;
		this.currentId = 0;
		this.syncView(null);
	}
	,selectNext: function() {
		var handCards = this.mediator.getAll()[0].hand;
		var handCount = handCards.length;
		if(handCount == 0) return;
		if(++this.currentId > handCount - 1) this.currentId = 0;
		this.syncView(null);
	}
	,selectPrev: function() {
		var handCards = this.mediator.getAll()[0].hand;
		var handCount = handCards.length;
		if(handCount == 0) return;
		if(--this.currentId < 0) {
			var max = handCount - 1;
			this.currentId = max;
		}
		this.syncView(null);
	}
	,initGame: function() {
		var board = this.getMeshByName("Board");
		board.children[0].material.map = this.context.textures[0];
		board.children[0].material.needsUpdate = true;
	}
	,syncView: function(val) {
	}
	,syncDeck: function(oneModel,isPlayer) {
		if(isPlayer == null) isPlayer = false;
		var moveTo = null;
		if(isPlayer) moveTo = this.getMeshByName("Player_deck_position").position.clone(); else moveTo = this.getMeshByName("Enemy_deck_position").position.clone();
		var _g1 = 0;
		var _g = oneModel.length;
		while(_g1 < _g) {
			var i = _g1++;
			var card = this.getCardByUuid(oneModel[i]);
			if(card == null) throw new js__$Boot_HaxeError("need have card!");
			card.moveCard(moveTo.x,moveTo.y + i * .05,moveTo.z);
		}
	}
	,syncHand: function(oneModel,isPlayer) {
		if(isPlayer == null) isPlayer = false;
		var moveTo = null;
		var rotTo = null;
		if(isPlayer) {
			moveTo = this.getMeshByName("Player_hand_position").position.clone();
			rotTo = this.getMeshByName("Player_hand_position").rotation.clone();
		} else {
			moveTo = this.getMeshByName("Enemy_hand_position").position.clone();
			rotTo = this.getMeshByName("Enemy_hand_position").rotation.clone();
		}
		var dist = 10 / oneModel.length;
		var _g1 = 0;
		var _g = oneModel.length;
		while(_g1 < _g) {
			var i = _g1++;
			var posFac = 0;
			if(oneModel.length > 1) posFac = i - oneModel.length / 2;
			if(oneModel.length < 5) dist = 2;
			var card = this.getCardByUuid(oneModel[i]);
			if(card == null) throw new js__$Boot_HaxeError("need have card!");
			card.moveCard(moveTo.x + posFac * dist,moveTo.y + i * .01,moveTo.z);
			card.rotateCard(rotTo.x,rotTo.y,rotTo.z);
			if(!card.get_isFaceUp()) card.flip();
		}
	}
	,createEnviroment: function() {
		this.renderer = new THREE.WebGLRenderer({ antialias : true});
		this.renderer.setClearColor(15790320);
		this.renderer.setPixelRatio(AppConfig.screenWidth / AppConfig.screenHeight);
		this.renderer.setSize(AppConfig.screenWidth,AppConfig.screenHeight);
		this.renderer.sortObjects = true;
		this.mediator.setWebgl(this.renderer.domElement);
		var autoCreate = vic.tools.createSceneByDae(this.context.dae.scene);
		this.scene = autoCreate.scene;
		this.camera = autoCreate.camera;
		this.camera.aspect = AppConfig.screenWidth / AppConfig.screenHeight;
		this.camera.updateProjectionMatrix();
		this.context.dae.scene = this.scene;
		this.mediator.addWebglListener("mousemove",$bind(this,this.onDocumentMouseMove));
		this.animate();
	}
	,animate: function() {
		requestAnimationFrame($bind(this,this.animate));
		this.onEngineUpdate();
	}
	,getMeshByName: function(name,clone) {
		if(clone == null) clone = false;
		var mesh = null;
		var _g1 = 0;
		var _g = this.context.dae.scene.children.length;
		while(_g1 < _g) {
			var i = _g1++;
			var obj = this.context.dae.scene.children[i];
			if(obj.name == name) mesh = obj;
		}
		if(mesh != null) {
			if(clone) return mesh.clone();
		}
		return mesh;
	}
	,onEngineUpdate: function() {
		var _g = 0;
		var _g1 = this.cards;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.mesh.updateMatrixWorld();
		}
		this.raycaster.setFromCamera(this.mousePos,this.camera);
		var intersects = this.raycaster.intersectObjects(this.raycastMeshs);
		if(intersects.length > 0) this.overCard(intersects[0].object.target); else if(this.currentOverCard != null) {
			this.currentOverCard.releaseCardInHand();
			this.currentOverCard = null;
		}
		this.renderer.render(this.scene,this.camera);
	}
	,overCard: function(card) {
		if(this.currentOverCard != null && this.currentOverCard != card) {
			this.currentOverCard.releaseCardInHand();
			this.currentOverCard = null;
		}
		var isInHand = this.mediator.isInTheHand(card.uid);
		if(isInHand) {
			if(this.currentOverCard == null || this.currentOverCard != card) {
				this.currentOverCard = card;
				this.currentOverCard.overCardInHand();
			}
		}
	}
	,onDocumentMouseMove: function(event) {
		event.preventDefault();
		this.mousePos.x = event.offsetX / AppConfig.screenWidth * 2 - 1;
		this.mousePos.y = -(event.offsetY / AppConfig.screenHeight) * 2 + 1;
	}
});
var Tools = function() { };
Tools.__name__ = true;
Tools.uuid = function() {
	var uid = new StringBuf();
	var a = 8;
	uid.add(StringTools.hex(Std["int"](new Date().getTime()),8));
	while(a++ < 36) uid.add((a * 51 & 52) != 0?StringTools.hex((a ^ 15) != 0?8 ^ Std["int"](Math.random() * ((a ^ 20) != 0?16:4)):4):"-");
	return uid.b.toLowerCase();
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
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
Date.__name__ = ["Date"];
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
AppConfig.screenWidth = 800;
AppConfig.screenHeight = 600;
AppConfig.moveTime = .05;
AppConfig.moveEasingType = "easeInSine";
Main.async = async;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
