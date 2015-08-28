(function (console) { "use strict";
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
};
var Main = function() {
	this.saver = new model_Saver();
	this.panelView = new view_PanelView();
	this.panelModel = new model_PanelModel();
	var _g = this;
	this.saver.addHandler(function(type,params) {
		switch(type) {
		case "ON_SAVE_SUCCESS":
			break;
		}
	});
	this.panelView.set_config({ doc : Main.j(document), body : Main.j(Main.j("body")), mc_accordionContainer : Main.j("#mc_accordionContainer"), tmpl_panel : Main.j("#tmpl_panel"), slt_stockId : Main.j("#slt_stockId"), swb_favor : Main.j("#swb_favor"), combo_favor : Main.j("#combo_favor"), btn_controller : Main.j("#btn_controller"), btn_addPanel : Main.j("#btn_addPanel"), txt_count : Main.j("#txt_count"), txt_offset : Main.j("#txt_offset"), txt_note : Main.j("#txt_note"), table_stockPrice : Main.j("#table_stockPrice"), btn_login : Main.j("#btn_login"), btn_logout : Main.j("#btn_logout")});
	this.panelView.addHandler(function(type1,params1) {
		haxe_Log.trace("panelView",{ fileName : "Main.hx", lineNumber : 53, className : "Main", methodName : "new", customParams : [type1]});
		_g.saver.startAuto();
		switch(type1) {
		case "on_btn_login_click":
			Main.showLoading();
			Main.fb_login(function(e) {
				var authResponse = e.authResponse;
				var _g1 = e.status;
				switch(_g1) {
				case "connected":
					_g.panelModel.set_currentFbId(authResponse.userID);
					Main.load(_g.panelModel.currentFbId,function(err,params2) {
						if(err == null) {
							Main.closeLoading();
							_g.panelModel.set_config(params2 == null?_g.panelModel.config:params2);
						}
					});
					Main.slideMessage("提示","歡迎登入!");
					break;
				case "unknown":
					Main.closeLoading();
					break;
				}
			});
			break;
		case "on_btn_logout_click":
			Main.fb_logout(function(e1) {
				_g.panelModel.set_currentFbId("");
			});
			break;
		case "on_txt_note_change":
			_g.panelModel.set_currentNote(params1.note);
			break;
		case "on_combo_favor_change":
			_g.panelModel.set_currentStockId(params1.stockId);
			break;
		case "on_favor_change":
			_g.panelModel.set_currentFavor(params1.favor);
			break;
		case "on_stockid_change":
			_g.panelModel.set_currentStockId(params1.stockId);
			break;
		case "on_offset_change":
			var _g11 = _g.panelModel;
			_g11.set_currentOffset(_g11.currentOffset + params1.value);
			break;
		case "on_showline_change":
			_g.panelModel.changeShow(params1.id,params1.type,params1.show);
			break;
		case "on_showline_value_change":
			_g.panelModel.changeShowValue(params1.id,params1.type,params1.value);
			break;
		case "on_showline_k_change":
			_g.panelModel.changeShowK(params1.id,params1.show);
			break;
		case "on_btn_addPanel_click":
			var penalObj = Main.createNewLine("none");
			_g.panelModel.addPanel(penalObj.id,penalObj,{ addToModel : true});
			break;
		case "on_btn_removePanel_click":
			_g.panelModel.removePanel(params1.id);
			break;
		case "on_txt_offset_change":
			_g.panelModel.set_currentOffset(params1.offset);
			break;
		case "on_txt_count_change":
			_g.panelModel.set_currentCount(params1.count);
			break;
		}
	});
	this.panelModel.addHandler(function(type2,params3) {
		haxe_Log.trace(type2,{ fileName : "Main.hx", lineNumber : 108, className : "Main", methodName : "new", customParams : [params3]});
		switch(type2) {
		case "on_init":
			_g.saver.set_saveobj(_g.panelModel.config);
			_g.panelView.setFavorsSelect(params3.favorList);
			break;
		case "on_favor_list_change":
			_g.panelView.setFavorsSelect(params3.favorList);
			break;
		case "on_offset_change":
			_g.panelView.changeOffset(_g.panelModel.currentOffset);
			_g.panelView.drawPrice(_g.panelModel.currentStockInfo,_g.panelModel.currentOffset);
			_g.panelView.scrollTo(_g.panelModel.getAryPanel(),0);
			_g.panelView.drawAllCanvas(_g.panelModel.currentStockId,_g.panelModel.currentOffset,_g.panelModel.currentCount,_g.panelModel.getAryPanel());
			break;
		case "on_count_change":
			_g.panelView.drawAllCanvas(_g.panelModel.currentStockId,_g.panelModel.currentOffset,_g.panelModel.currentCount,_g.panelModel.getAryPanel());
			break;
		case "on_add_panel":
			_g.panelView.addPanel(params3.stockId,_g.panelModel.currentOffset,_g.panelModel.currentCount,params3.panelObj);
			_g.panelView.resetAllCanvasListener(_g.panelModel.getAryPanel());
			break;
		case "on_remove_panel":
			_g.panelView.removePanel(params3.id);
			break;
		case "on_showline_change":
			_g.panelView.drawCanvas(_g.panelModel.currentStockId,_g.panelModel.currentOffset,_g.panelModel.currentCount,params3.panelData);
			break;
		case "on_stockid_change":
			_g.panelView.initPanel(_g.panelModel.config,params3.stock,_g.panelModel.currentStockInfo);
			_g.panelView.drawPrice(_g.panelModel.currentStockInfo,_g.panelModel.currentOffset);
			_g.saver.startAuto();
			break;
		case "on_login_change":
			_g.saver.set_fbid(params3.fbid);
			_g.panelView.setLogin(params3.fbid != "");
			break;
		}
	});
	Main.fb_init("425311264344425",function() {
		Main.showLoading();
		Main.fb_loginStatus(function(e2) {
			Main.slideMessage("歡迎使用","余氏k線圖幫您變成操盤達人!");
			var authResponse1 = e2.authResponse;
			var _g2 = e2.status;
			switch(_g2) {
			case "connected":
				_g.panelModel.set_currentFbId(authResponse1.userID);
				Main.load(_g.panelModel.currentFbId,function(err1,params4) {
					haxe_Log.trace(err1,{ fileName : "Main.hx", lineNumber : 157, className : "Main", methodName : "new", customParams : [params4]});
					Main.closeLoading();
					if(err1 == null) _g.panelModel.set_config(params4 == null?_g.newUser():params4); else {
						js_Browser.alert(err1);
						_g.panelModel.set_config(_g.newUser());
					}
				});
				Main.slideMessage("提示","歡迎登入!");
				break;
			case "unknown":
				Main.closeLoading();
				_g.panelModel.set_currentFbId("");
				_g.panelModel.set_config(_g.newUser());
				break;
			}
		});
	});
};
Main.__name__ = true;
Main.getId = function() {
	return Main.id++;
};
Main.main = function() {
	new Main();
};
Main.checkError = function() {
};
Main.showLoading = function() {
	Main.j.messager.progress({ title : "Please waiting", msg : "Loading data..."});
};
Main.closeLoading = function() {
	Main.j.messager.progress("close");
};
Main.slideMessage = function(title,msg) {
	Main.j.messager.show({ title : title, msg : msg, timeout : 5000, showType : "slide"});
};
Main.getStock = function(id,reset) {
	Main.showLoading();
	var d = Main.j.Deferred();
	api.stockId(id,reset,function() {
		d.resolve(id);
	});
	return d;
};
Main.getStockInfo = function(id) {
	var d = Main.j.Deferred();
	api.stockInfo(id,function(err,data) {
		d.resolve(err,data);
		Main.closeLoading();
	});
	return d;
};
Main.drawStock = function(canvas,id,type,offset,count,sub) {
	if(count == null) count = 100;
	if(offset == null) offset = 0;
	api.draw(canvas[0],id,type == null?"null":"" + type,offset,count,sub);
};
Main.save = function(fbid,data,cb) {
	haxe_Log.trace(data,{ fileName : "Main.hx", lineNumber : 245, className : "Main", methodName : "save"});
	api.save(fbid,data,cb);
};
Main.load = function(fbid,cb) {
	api.load(fbid,cb);
};
Main.fb_init = function(appId,cb) {
	myapp.facebook.init(appId,cb);
};
Main.fb_login = function(cb) {
	myapp.facebook.login(cb);
};
Main.fb_logout = function(cb) {
	myapp.facebook.logout(cb);
};
Main.fb_loginStatus = function(cb) {
	myapp.facebook.getLoginStatus(cb);
};
Main.createProp = function(ary) {
	return Lambda.fold(ary,function(obj,curr) {
		if(obj[0] == "group") curr.push({ type : obj[0], name : obj[1]}); else curr.push({ show : obj[1], type : obj[0], url : obj[6], value : { n : obj[2], m : obj[3], o : obj[4], p : obj[5]}});
		return curr;
	},[]);
};
Main.createNewStock = function(id,props) {
	return { id : id, count : 200, offset : 0, favor : false, note : "這個人很懶，什麼都沒有記下=3=", lines : [Main.createNewLine("volume",false,[["group","均線"],["ma",false,5,0,0,0]]),Main.createNewLine("kline")]};
};
Main.createNewLine = function(type,deletable,props) {
	if(deletable == null) deletable = true;
	return { id : Main.getId(), type : type, deletable : deletable, sub : Main.createProp(props == null?app.config.index:props)};
};
Main.prototype = {
	newUser: function() {
		return { stocks : []};
	}
};
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
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
Std.parseFloat = function(x) {
	return parseFloat(x);
};
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
var model_IModel = function() { };
model_IModel.__name__ = true;
var model_IPanel = function() { };
model_IPanel.__name__ = true;
model_IPanel.__interfaces__ = [model_IModel];
var model_Model = function() {
	this._ary_handler = [];
};
model_Model.__name__ = true;
model_Model.prototype = {
	addHandler: function(handler) {
		this._ary_handler.push(handler);
	}
	,notify: function(type,params) {
		Lambda.map(this._ary_handler,function(fn) {
			fn(type,params);
		});
	}
	,set_config: function(config) {
		this.config = config;
		this.init();
		return this.config;
	}
	,init: function() {
	}
};
var model_PanelModel = function() {
	this.ary_panel_obj = [];
	this.currentCount = 100;
	this.currentOffset = 0;
	model_Model.call(this);
};
model_PanelModel.__name__ = true;
model_PanelModel.__super__ = model_Model;
model_PanelModel.prototype = $extend(model_Model.prototype,{
	getAryPanel: function() {
		return this.ary_panel_obj;
	}
	,changeShow: function(id,type,show) {
		var panelData = this.getPanelById(id);
		Reflect.setField(this.getPanelSubByType(panelData,type),"show",show);
		this.notify(model_PanelModel.ON_SHOWLINE_CHANGE,{ panelData : panelData});
	}
	,changeShowK: function(id,show) {
		var panelData = this.getPanelById(id);
		if(show) panelData.data.type = "kline"; else panelData.data.type = "none";
		this.notify(model_PanelModel.ON_SHOWLINE_CHANGE,{ panelData : panelData});
	}
	,changeShowValue: function(id,type,value) {
		var panelData = this.getPanelById(id);
		var subObj = this.getPanelSubByType(panelData,type);
		subObj.value.n = value[0];
		subObj.value.m = value[1];
		subObj.value.o = value[2];
		subObj.value.p = value[3];
		this.notify(model_PanelModel.ON_SHOWLINE_CHANGE,{ panelData : panelData});
	}
	,addPanel: function(id,data,extra) {
		if(extra.addToModel) {
			var stock = this.getStockById(this.currentStockId);
			if(stock == null) {
				Main.slideMessage("錯誤","請先輸入股票代碼!");
				return;
			}
			stock.lines.push(data);
		}
		var obj = { id : id, data : data, needMove : data.type != "click", root : null};
		this.ary_panel_obj.push(obj);
		this.notify(model_PanelModel.ON_ADD_PANEL,{ stockId : this.currentStockId, panelObj : obj});
	}
	,removePanel: function(id) {
		var _g = this;
		Lambda.foreach(this.ary_panel_obj,function(stockMap) {
			if(stockMap.id == id) {
				HxOverrides.remove(_g.ary_panel_obj,stockMap);
				var ary_lines = _g.getStockById(_g.currentStockId).lines;
				Lambda.foreach(ary_lines,function(obj) {
					if(obj == stockMap.data) {
						HxOverrides.remove(ary_lines,obj);
						return false;
					}
					return true;
				});
				return false;
			}
			return true;
		});
		this.notify(model_PanelModel.ON_REMOVE_PANEL,{ id : id});
	}
	,init: function() {
		model_Model.prototype.init.call(this);
		var j = $;
		var stock = this.config.stocks[0];
		if(stock != null) this.set_currentStockId(stock.id);
		this.notify(model_PanelModel.ON_INIT,{ favorList : this.getFavorList()});
	}
	,setStockData: function(stock) {
		var _g = this;
		this.set_currentOffset(stock.offset);
		this.set_currentCount(stock.count);
		this.set_currentFavor(stock.favor);
		this.resetPanelData();
		Main.getStock(this.currentStockId,true).pipe(Main.getStockInfo).done(function(err,data) {
			var state = data[0];
			var dataInfo = data[1];
			var date = data[3];
			_g.set_currentStockInfo(dataInfo);
			_g.set_maxCount(dataInfo.length);
			Lambda.foreach(stock.lines,function(obj) {
				_g.addPanel(obj.id,obj,{ addToModel : false});
				return true;
			});
			_g.notify(model_PanelModel.ON_STOCKID_CHANGE,{ stock : stock});
		});
	}
	,resetPanelData: function() {
		var _g = this;
		Lambda.foreach(this.ary_panel_obj,function(panelObj) {
			_g.notify(model_PanelModel.ON_REMOVE_PANEL,{ id : panelObj.id});
			return true;
		});
		this.ary_panel_obj = [];
	}
	,getPanelById: function(id) {
		return Lambda.find(this.ary_panel_obj,function(panelObj) {
			return panelObj.id == id;
		});
	}
	,getPanelSubByType: function(panelData,type) {
		return Lambda.find(panelData.data.sub,function(subObj) {
			return subObj.type == type;
		});
	}
	,getStockById: function(stockId) {
		return Lambda.find(this.config.stocks,function(obj) {
			return obj.id == stockId;
		});
	}
	,getFavorList: function() {
		return Lambda.fold(this.config.stocks,function(stockobj,curr) {
			if(stockobj.favor) curr.push(stockobj.id);
			return curr;
		},[]);
	}
	,set_currentOffset: function(offset) {
		if(this.getStockById(this.currentStockId) == null) return this.currentOffset;
		this.currentOffset = offset;
		if(this.currentOffset < 0) this.currentOffset = 0; else if(this.currentOffset > this.maxCount - 1) this.currentOffset = this.maxCount - 1;
		this.getStockById(this.currentStockId).offset = this.currentOffset;
		this.notify(model_PanelModel.ON_OFFSET_CHANGE,{ stockId : this.currentStockId, offset : this.currentOffset});
		return this.currentOffset;
	}
	,set_currentCount: function(count) {
		this.currentCount = count;
		if(this.currentCount < 0) this.currentCount = 0;
		this.notify(model_PanelModel.ON_COUNT_CHANGE,{ stockId : this.currentStockId, count : this.currentCount});
		this.getStockById(this.currentStockId).count = this.currentCount;
		return this.currentCount;
	}
	,set_currentStockId: function(stockId) {
		this.currentStockId = stockId;
		this.setStockData((function($this) {
			var $r;
			var _g = $this.getStockById(stockId);
			$r = (function($this) {
				var $r;
				var o = _g;
				$r = _g == null?(function($this) {
					var $r;
					var obj = Main.createNewStock(stockId);
					$this.config.stocks.push(obj);
					$r = obj;
					return $r;
				}($this)):(function($this) {
					var $r;
					switch(_g) {
					default:
						$r = o;
					}
					return $r;
				}($this));
				return $r;
			}($this));
			return $r;
		}(this)));
		return this.currentStockId;
	}
	,set_maxCount: function(mcount) {
		return this.maxCount = mcount;
	}
	,set_currentStockInfo: function(info) {
		return this.currentStockInfo = info;
	}
	,set_currentFavor: function(favor) {
		if(this.getStockById(this.currentStockId) == null) return this.currentFavor = false;
		this.getStockById(this.currentStockId).favor = favor;
		this.notify(model_PanelModel.ON_FAVOR_LIST_CHANGE,{ favorList : this.getFavorList()});
		return this.currentFavor = favor;
	}
	,set_currentNote: function(note) {
		if(this.getStockById(this.currentStockId) == null) return this.currentNote = "";
		this.getStockById(this.currentStockId).note = note;
		return this.currentNote = note;
	}
	,set_currentFbId: function(fbid) {
		this.currentFbId = fbid;
		this.notify(model_PanelModel.ON_LOGIN_CHANGE,{ fbid : this.currentFbId});
		return this.currentFbId;
	}
});
var model_Saver = function() {
	this.fbid = "";
	model_Model.call(this);
};
model_Saver.__name__ = true;
model_Saver.__super__ = model_Model;
model_Saver.prototype = $extend(model_Model.prototype,{
	startAuto: function() {
		if(this.fbid == "") return;
		if(this._timer != null) this._timer.stop();
		this._timer = haxe_Timer.delay($bind(this,this.save),3000);
	}
	,save: function() {
		if(this.fbid == "") return;
		Main.save(this.fbid,this.saveobj,$bind(this,this.onSaveOk));
	}
	,load: function() {
	}
	,onSaveOk: function(e) {
		this.notify(model_Saver.ON_SAVE_SUCCESS);
	}
	,set_fbid: function(fbid) {
		return this.fbid = fbid;
	}
	,set_saveobj: function(saveobj) {
		return this.saveobj = saveobj;
	}
});
var view_IPanelView = function() { };
view_IPanelView.__name__ = true;
view_IPanelView.__interfaces__ = [model_IModel];
var view_PanelView = function() {
	this.currentScrollX = null;
	this.j = $;
	model_Model.call(this);
};
view_PanelView.__name__ = true;
view_PanelView.__super__ = model_Model;
view_PanelView.prototype = $extend(model_Model.prototype,{
	init: function() {
		var _g = this;
		model_Model.prototype.init.call(this);
		this.doc = this.config.doc;
		this.doc.keydown($bind(this,this.onKeyDown));
		this.doc.keyup($bind(this,this.onKeyUp));
		this.body = this.config.body;
		this.body.find(".easyui-tooltip").tooltip({ position : "right", onShow : function(e) {
			var self = _g.j(e.currentTarget);
			var hoverInfo = app.config.hoverInfo;
			var hoverstr;
			var _g1 = Reflect.field(hoverInfo,self.attr("id"));
			var hstr = _g1;
			if(_g1 == null) hoverstr = Reflect.field(hoverInfo,"default"); else switch(_g1) {
			default:
				hoverstr = hstr;
			}
			self.tooltip("update",hoverstr);
		}});
		this.mc_accordionContainer = this.config.mc_accordionContainer;
		this.mc_accordionContainer.accordion();
		this.tmpl_panel = this.config.tmpl_panel;
		this.btn_addPanel = this.config.btn_addPanel;
		this.btn_addPanel.click(function(e1) {
			_g.notify(view_PanelView.ON_BTN_ADDPANEL_CLICK);
		});
		this.btn_login = this.config.btn_login;
		this.btn_login.click(function() {
			_g.notify(view_PanelView.ON_BTN_LOGIN_CLICK);
		});
		this.btn_logout = this.config.btn_logout;
		this.btn_logout.click(function() {
			_g.notify(view_PanelView.ON_BTN_LOGOUT_CLICK);
		});
		this.txt_offset = this.config.txt_offset;
		this.txt_offset.textbox({ value : 0, onChange : function(newValue,oldValue) {
			_g.notify(view_PanelView.ON_TXT_OFFSET_CHANGE,{ offset : Std.parseInt(newValue)});
		}});
		this.txt_note = this.config.txt_note;
		this.txt_note.textbox({ onChange : function(newv,oldv) {
			_g.notify(view_PanelView.ON_TXT_NOTE_CHANGE,{ note : newv});
		}});
		this.txt_note.parent().focusin(function() {
			_g.doc.off("keydown");
			_g.doc.off("keyup");
		});
		this.txt_note.parent().focusout(function() {
			_g.doc.keydown($bind(_g,_g.onKeyDown));
			_g.doc.keyup($bind(_g,_g.onKeyUp));
		});
		this.txt_count = this.config.txt_count;
		this.txt_count.textbox({ value : 200, onChange : function(newValue1,oldValue1) {
			_g.notify(view_PanelView.ON_TXT_COUNT_CHANGE,{ count : Std.parseInt(newValue1)});
		}});
		this.slt_stockId = this.config.slt_stockId;
		this.slt_stockId.textbox({ onChange : function(newValue2,oldValue2) {
			var stockId = newValue2;
			_g.notify(view_PanelView.ON_SLT_STOCKID_CHANGE,{ 'stockId' : stockId});
		}});
		this.swb_favor = this.config.swb_favor;
		this.swb_favor.switchbutton({ onChange : function(checked) {
			_g.notify(view_PanelView.ON_SWB_FAVOR_CHANGE,{ favor : checked});
		}});
		this.combo_favor = this.config.combo_favor;
		this.combo_favor.combobox({ onSelect : function(record) {
			var value = record.value;
			_g.notify(view_PanelView.ON_COMBO_FAVOR_CHANGE,{ stockId : value});
		}});
		this.btn_controller = this.config.btn_controller;
		this.btn_controller.delegate(".btn_controller","click",function(e2) {
			var target = e2.currentTarget;
			var id = _g.j(target).attr("id");
			switch(id) {
			case "btn_first":
				_g.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : -10000});
				break;
			case "btn_prev10":
				_g.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : -20});
				break;
			case "btn_prev":
				_g.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : -1});
				break;
			case "btn_next":
				_g.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : 1});
				break;
			case "btn_next10":
				_g.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : 20});
				break;
			case "btn_last":
				_g.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : 10000});
				break;
			}
		});
		this.table_stockPrice = this.config.table_stockPrice;
	}
	,initPanel: function(model,stock,stockInfo) {
		var stockId = stock.id;
		var offset = stock.offset;
		var count = stock.count;
		var favor = stock.favor;
		var note = stock.note;
		this.setTxtStockId(stockId);
		this.setTxtNote(note);
		this.swb_favor.switchbutton({ checked : favor});
		this.changeOffset(offset);
		this.changeCount(count);
	}
	,setLogin: function(login) {
		if(login) {
			this.btn_login.hide();
			this.btn_logout.show();
		} else {
			this.btn_login.show();
			this.btn_logout.hide();
		}
	}
	,setTxtStockId: function(stockId) {
		this.slt_stockId.textbox({ value : stockId});
	}
	,setTxtNote: function(note) {
		this.txt_note.textbox({ value : note});
	}
	,setFavorsSelect: function(favors) {
		var _g = this;
		this.combo_favor.empty();
		this.combo_favor.append("<option value=\"999\">------<option>");
		Lambda.foreach(favors,function(str) {
			_g.combo_favor.append("<option value=\"" + str + "\">" + str + "<option>");
			return true;
		});
		this.combo_favor.combobox();
	}
	,drawPrice: function(stockInfo,offset) {
		if(offset == null) offset = 0;
		var _g = this;
		if(stockInfo == null) return;
		var eid;
		var _g1 = offset + 1;
		var o = _g1;
		if(o > stockInfo.length) eid = stockInfo.length; else {
			var o1 = _g1;
			eid = o1;
		}
		var oldrow = this.table_stockPrice.datagrid("getRows").length;
		while(oldrow > 0) this.table_stockPrice.datagrid("deleteRow",--oldrow);
		Lambda.foreach(stockInfo.slice(offset,eid),function(obj) {
			_g.table_stockPrice.datagrid("appendRow",{ date : obj[0], start : obj[1], top : obj[2], bottom : obj[3], close : obj[4], volume : obj[5]});
			return true;
		});
	}
	,changeOffset: function(offset) {
		var oldv = this.txt_offset.textbox("getValue");
		if(oldv != offset) this.txt_offset.textbox({ value : offset == null?"null":"" + offset});
	}
	,changeCount: function(count) {
		this.txt_count.textbox({ value : count == null?"null":"" + count});
	}
	,addPanel: function(stockId,offset,count,panelData) {
		var _g = this;
		var stockData = panelData.data;
		var id = stockData.id;
		var type = stockData.type;
		var props = stockData.sub;
		var deletable = stockData.deletable;
		var dom = this.tmpl_panel.tmpl({ id : id, type : type, deletable : deletable});
		this.mc_accordionContainer.accordion("add",{ id : "k_" + id, title : "k線: " + id, content : dom, selected : true});
		panelData.root = dom;
		if(type == "kline" || type == "none") dom.find("#slt_showKline").switchbutton({ checked : type == "kline", onChange : function(checked) {
			_g.notify(view_PanelView.ON_SWB_SHOWKLINE_CHANGE,{ id : panelData.id, show : checked});
		}});
		dom.find("#btn_removePanel").click(function() {
			_g.notify(view_PanelView.ON_BTN_REMOVEPANEL_CLICK,{ id : panelData.id});
		});
		if(props != null) this.createProp(dom.find("#mc_propContainer"),props,panelData);
		this.drawCanvas(stockId,offset,count,panelData);
	}
	,removePanel: function(id) {
		var deleteName = "k線: " + id;
		this.mc_accordionContainer.accordion("remove",deleteName);
	}
	,drawCanvas: function(stockId,offset,count,panelData) {
		Main.drawStock(panelData.root.find("#canvas_kline"),stockId,panelData.data.type,offset,count,this.propsToDraw(panelData.data.sub));
	}
	,drawAllCanvas: function(stockId,offset,count,ary_panel) {
		if(offset == null) offset = 0;
		var _g = this;
		Lambda.map(ary_panel,function(panelData) {
			_g.drawCanvas(stockId,offset,count,panelData);
		});
	}
	,propsToDraw: function(props) {
		return Lambda.fold(props,function(obj,current) {
			if(obj.show) current.push({ 't' : Std.string(obj.type), 'd' : { n : obj.value.n, m : obj.value.m, o : obj.value.o, p : obj.value.p}, 'color' : "red"});
			return current;
		},[]);
	}
	,createProp: function(container,props,panelData) {
		var _g = this;
		var onInputChange = function(dom) {
			return function(newv,oldv) {
				var target = _g.j(this);
				var type = dom.find(".easyui-switchbutton").attr("ktype");
				var value = [];
				dom.find(".easyui-textbox").each(function(id,subdom) {
					value.push(Std.parseFloat(_g.j(subdom).textbox("getValue")));
				});
				_g.notify(view_PanelView.ON_TXT_SHOWLINE_VALUE_CHANGE,{ id : panelData.id, type : type, value : value});
			};
		};
		Lambda.foreach(props,function(prop) {
			if(prop.type == "group") {
				var dom2 = _g.j("#tmpl_group_line").tmpl(prop);
				container.append(dom2);
				return true;
			}
			prop.sid = "swb_" + Std.string(prop.type);
			prop.nid = "input_n_" + Std.string(prop.type);
			prop.mid = "input_m_" + Std.string(prop.type);
			prop.domName = prop.type;
			if(prop.url == null) prop.url = "";
			var dom1 = _g.j("#tmpl_avg").tmpl(prop);
			container.append(dom1);
			dom1.find(".easyui-linkbutton").linkbutton();
			dom1.find(".easyui-switchbutton").switchbutton({ checked : prop.show, onChange : function(checked) {
				var target1 = _g.j(this);
				var type1 = target1.attr("ktype");
				_g.notify(view_PanelView.ON_SWB_SHOWLINE_CHANGE,{ id : panelData.id, type : type1, show : checked});
			}});
			dom1.find(".easyui-textbox").eq(0).textbox({ value : prop.value.n, onChange : onInputChange(dom1)});
			dom1.find(".easyui-textbox").eq(1).textbox({ value : prop.value.m, onChange : onInputChange(dom1)});
			dom1.find(".easyui-textbox").eq(2).textbox({ value : prop.value.o, onChange : onInputChange(dom1)});
			dom1.find(".easyui-textbox").eq(3).textbox({ value : prop.value.p, onChange : onInputChange(dom1)});
			dom1.find(".easyui-tooltip").tooltip({ position : "right", onShow : function(e) {
				var self = _g.j(e.currentTarget);
				var hoverInfo = app.config.hoverInfo.line;
				var hoverstr;
				var _g1 = Reflect.field(hoverInfo,self.attr("ptype"));
				var hstr = _g1;
				if(_g1 == null) hoverstr = Reflect.field(hoverInfo,"default"); else switch(_g1) {
				default:
					hoverstr = hstr;
				}
				self.tooltip("update",hoverstr);
			}});
			return true;
		});
	}
	,resetAllCanvasListener: function(ary_panel_obj) {
		var _g = this;
		Lambda.map(ary_panel_obj,function(stockMap) {
			if(stockMap.needMove) {
				var container = stockMap.root.find("#canvas_kline").parent().parent();
				if(_g.currentScrollX != null) container.scrollLeft(_g.currentScrollX);
				container.off("scroll");
				container.scroll(function(e) {
					var target = _g.j(e.currentTarget);
					_g.currentScrollX = target.scrollLeft();
					Lambda.map(ary_panel_obj,function(_stockMap) {
						container = _stockMap.root.find("#canvas_kline").parent().parent();
						container.scrollLeft(_g.currentScrollX);
					});
				});
			}
		});
	}
	,scrollTo: function(ary_panel_obj,scrollX) {
		var _g = this;
		this.currentScrollX = scrollX;
		Lambda.map(ary_panel_obj,function(stockMap) {
			if(stockMap.needMove) {
				var container = stockMap.root.find("#canvas_kline").parent().parent();
				container = stockMap.root.find("#canvas_kline").parent().parent();
				container.scrollLeft(_g.currentScrollX);
			}
		});
	}
	,onKeyDown: function(e) {
		var _g = e.which;
		switch(_g) {
		case 16:
			break;
		case 17:
			break;
		case 18:
			break;
		case 188:
			break;
		case 190:
			break;
		case 191:
			break;
		}
	}
	,onKeyUp: function(e) {
		haxe_Log.trace(e.which,{ fileName : "PanelView.hx", lineNumber : 513, className : "view.PanelView", methodName : "onKeyUp"});
		var _g = e.which;
		switch(_g) {
		case 66:
			this.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : -10000});
			break;
		case 78:
			this.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : -20});
			break;
		case 77:
			this.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : -1});
			break;
		case 188:
			this.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : 1});
			break;
		case 190:
			this.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : 20});
			break;
		case 191:
			this.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : 10000});
			break;
		case 16:
			break;
		case 17:
			break;
		case 87:
			break;
		case 65:
			break;
		case 83:
			break;
		case 68:
			break;
		case 18:
			break;
		case 38:
			break;
		case 37:
			break;
		case 40:
			break;
		case 39:
			break;
		case 70:
			break;
		}
	}
});
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
String.__name__ = true;
Array.__name__ = true;
Main.j = $;
Main.id = 0;
model_PanelModel.ON_INIT = "on_init";
model_PanelModel.ON_STOCKID_CHANGE = "on_stockid_change";
model_PanelModel.ON_CHANGE_STOCK_SUCCESS = "on_change_stock_success";
model_PanelModel.ON_OFFSET_CHANGE = "on_offset_change";
model_PanelModel.ON_COUNT_CHANGE = "on_count_change";
model_PanelModel.ON_SHOWLINE_CHANGE = "on_showline_change";
model_PanelModel.ON_ADD_PANEL = "on_add_panel";
model_PanelModel.ON_REMOVE_PANEL = "on_remove_panel";
model_PanelModel.ON_FAVOR_LIST_CHANGE = "on_favor_list_change";
model_PanelModel.ON_LOGIN_CHANGE = "on_login_change";
model_Saver.ON_SAVE_SUCCESS = "ON_SAVE_SUCCESS";
view_PanelView.ON_SLT_STOCKID_CHANGE = "on_stockid_change";
view_PanelView.ON_BTN_CONTROLLER_CLICK = "on_offset_change";
view_PanelView.ON_TXT_SHOWLINE_VALUE_CHANGE = "on_showline_value_change";
view_PanelView.ON_SWB_SHOWLINE_CHANGE = "on_showline_change";
view_PanelView.ON_SWB_SHOWKLINE_CHANGE = "on_showline_k_change";
view_PanelView.ON_SWB_FAVOR_CHANGE = "on_favor_change";
view_PanelView.ON_BTN_ADDPANEL_CLICK = "on_btn_addPanel_click";
view_PanelView.ON_BTN_REMOVEPANEL_CLICK = "on_btn_removePanel_click";
view_PanelView.ON_BTN_LOGIN_CLICK = "on_btn_login_click";
view_PanelView.ON_BTN_LOGOUT_CLICK = "on_btn_logout_click";
view_PanelView.ON_TXT_OFFSET_CHANGE = "on_txt_offset_change";
view_PanelView.ON_TXT_COUNT_CHANGE = "on_txt_count_change";
view_PanelView.ON_TXT_NOTE_CHANGE = "on_txt_note_change";
view_PanelView.ON_COMBO_FAVOR_CHANGE = "on_combo_favor_change";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
