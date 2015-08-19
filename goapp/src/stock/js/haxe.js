(function (console) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EType = { __ename__ : true, __constructs__ : ["volume","clock","kline"] };
EType.volume = ["volume",0];
EType.volume.toString = $estr;
EType.volume.__enum__ = EType;
EType.clock = ["clock",1];
EType.clock.toString = $estr;
EType.clock.__enum__ = EType;
EType.kline = ["kline",2];
EType.kline.toString = $estr;
EType.kline.__enum__ = EType;
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
	this.panelView = new view_PanelView();
	this.panelModel = new model_PanelModel();
	this.j = $;
	var _g = this;
	this.panelView.set_config({ mc_accordionContainer : this.j("#mc_accordionContainer"), tmpl_panel : this.j("#tmpl_panel"), slt_stockId : this.j("#slt_stockId"), btn_controller : this.j("#btn_controller")});
	this.panelView.addHandler(function(type,params) {
		switch(type) {
		case "on_stockid_change":
			_g.getStockAndDraw(params.stockId);
			break;
		case "on_offset_change":
			var _g1 = _g.panelModel;
			_g1.set_currentOffset(_g1.currentOffset + params.value);
			break;
		}
	});
	this.panelModel.addHandler(function(type1,params1) {
		switch(type1) {
		case "on_offset_change":
			_g.panelView.drawAllCanvas(params1.stockId,params1.offset,_g.panelModel.getAryPanel());
			break;
		case "on_init":
			_g.panelView.setShowId(params1.stockId);
			break;
		case "on_add_panel":
			_g.panelView.addPanel(params1.stockId,_g.panelModel.currentOffset,_g.panelModel.currentCount,params1.panelObj);
			break;
		case "on_remove_panel":
			_g.panelView.removePanel(params1.id);
			break;
		default:
		}
	});
	this.panelModel.set_config({ facebookId : "12233", stocks : [{ id : "2330", count : 200, offset : 13, lines : [{ id : 4, type : "kline", deletable : false, sub : [{ show : true, type : "ma", value : { n : 3, m : 9, color : ""}},{ show : true, type : "yu-sd", value : { n : 20, m : 100, color : ""}}]}]}]});
	Reflect.setField(window,"onHtmlTrigger",$bind(this,this.onHtmlTrigger));
};
Main.__name__ = true;
Main.getId = function() {
	return Main.id++;
};
Main.main = function() {
	new Main();
};
Main.getStock = function(id,reset,cb) {
	api.stockId(id,reset,cb);
};
Main.drawStock = function(canvas,id,type,offset,count,sub) {
	if(count == null) count = 100;
	if(offset == null) offset = 0;
	api.draw(canvas[0],id,Std.string(type),offset,count,sub);
};
Main.prototype = {
	getStockAndDraw: function(stockId) {
		var _g = this;
		Main.getStock(stockId,true,function(ret) {
			haxe_Log.trace("d",{ fileName : "Main.hx", lineNumber : 100, className : "Main", methodName : "getStockAndDraw", customParams : [ret]});
			_g.panelView.drawAllCanvas(stockId,null,_g.panelModel.getAryPanel());
		});
	}
	,resetAllCanvasListener: function() {
	}
	,onHtmlTrigger: function(name,params) {
		switch(name) {
		case "addPanel":
			break;
		case "removePanel":
			var panelDom = this.j(params.currentTarget).parent().parent().parent().parent();
			var id = panelDom.attr("id");
			this.panelModel.removePanel(id);
			break;
		}
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
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var Type = function() { };
Type.__name__ = true;
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw new js__$Boot_HaxeError("No such constructor " + constr);
	if(Reflect.isFunction(f)) {
		if(params == null) throw new js__$Boot_HaxeError("Constructor " + constr + " need parameters");
		return Reflect.callMethod(e,f,params);
	}
	if(params != null && params.length != 0) throw new js__$Boot_HaxeError("Constructor " + constr + " does not need parameters");
	return f;
};
var haxe_Log = function() { };
haxe_Log.__name__ = true;
haxe_Log.trace = function(v,infos) {
	js_Boot.__trace(v,infos);
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
model_PanelModel.__interfaces__ = [model_IPanel];
model_PanelModel.__super__ = model_Model;
model_PanelModel.prototype = $extend(model_Model.prototype,{
	getAryPanel: function() {
		return this.ary_panel_obj;
	}
	,changeStockId: function(stockId) {
		var _g = this;
		Main.getStock(stockId,true,function(params) {
			_g.notify(model_PanelModel.ON_CHANGE_STOCK_SUCCESS);
		});
	}
	,set_currentOffset: function(offset) {
		this.currentOffset = offset;
		if(this.currentOffset < 0) this.currentOffset = 0;
		this.notify(model_PanelModel.ON_OFFSET_CHANGE,{ stockId : this.currentStockId, offset : this.currentOffset});
		return this.currentOffset;
	}
	,addPanel: function(id,data,extra) {
		var obj = { id : id, data : data, root : null};
		this.ary_panel_obj.push(obj);
		this.notify(model_PanelModel.ON_ADD_PANEL,{ stockId : this.currentStockId, panelObj : obj});
	}
	,removePanel: function(id) {
		var _g = this;
		Lambda.foreach(this.ary_panel_obj,function(stockMap) {
			if(stockMap.id == id) {
				HxOverrides.remove(_g.ary_panel_obj,stockMap);
				return true;
			}
			return false;
		});
		this.notify(model_PanelModel.ON_REMOVE_PANEL,{ id : id});
	}
	,init: function() {
		var _g = this;
		model_Model.prototype.init.call(this);
		var j = $;
		var stock = this.config.stocks[0];
		this.currentStockId = stock.id;
		this.set_currentOffset(stock.offset);
		this.currentCount = stock.count;
		Lambda.foreach(stock.lines,function(obj) {
			obj.type = Type.createEnum(EType,obj.type);
			return true;
		});
		Main.getStock(this.currentStockId,true,function(params) {
			Lambda.foreach(stock.lines,function(obj1) {
				_g.addPanel(obj1.id,obj1);
				return true;
			});
			_g.notify(model_PanelModel.ON_INIT,{ 'stockId' : _g.currentStockId});
		});
	}
	,getSaveData: function() {
		var output = { facebookId : this.config.facebookId, stocks : this.config.stocks};
		return output;
	}
});
var view_IPanelView = function() { };
view_IPanelView.__name__ = true;
view_IPanelView.__interfaces__ = [model_IModel];
var view_PanelView = function() {
	this.j = $;
	model_Model.call(this);
};
view_PanelView.__name__ = true;
view_PanelView.__interfaces__ = [view_IPanelView];
view_PanelView.__super__ = model_Model;
view_PanelView.prototype = $extend(model_Model.prototype,{
	init: function() {
		var _g = this;
		model_Model.prototype.init.call(this);
		this.mc_accordionContainer = this.config.mc_accordionContainer;
		this.mc_accordionContainer.accordion();
		this.tmpl_panel = this.config.tmpl_panel;
		this.slt_stockId = this.config.slt_stockId;
		this.slt_stockId.textbox({ onChange : function(newValue,oldValue) {
			var stockId = newValue;
		}});
		this.btn_controller = this.config.btn_controller;
		this.btn_controller.delegate(".btn_controller","click",function(e) {
			var target = e.currentTarget;
			var id = _g.j(target).attr("id");
			switch(id) {
			case "btn_first":
				_g.notify(view_PanelView.ON_OFFSET_CHANGE,{ value : -10000});
				break;
			case "btn_prev10":
				_g.notify(view_PanelView.ON_OFFSET_CHANGE,{ value : -10});
				break;
			case "btn_prev":
				_g.notify(view_PanelView.ON_OFFSET_CHANGE,{ value : -1});
				break;
			case "btn_next":
				_g.notify(view_PanelView.ON_OFFSET_CHANGE,{ value : 1});
				break;
			case "btn_next10":
				_g.notify(view_PanelView.ON_OFFSET_CHANGE,{ value : 10});
				break;
			case "btn_last":
				_g.notify(view_PanelView.ON_OFFSET_CHANGE,{ value : 10000});
				break;
			}
		});
	}
	,setShowId: function(stockId) {
		this.slt_stockId.textbox("setValue",stockId);
	}
	,addPanel: function(stockId,offset,count,panelData) {
		var stockData = panelData.data;
		var id = stockData.id;
		var type = stockData.type;
		var props = stockData.sub;
		var deletable = stockData.deletable;
		var dom = this.tmpl_panel.tmpl({ id : id, type : type, deletable : deletable});
		this.mc_accordionContainer.accordion("add",{ id : "k_" + id, title : "k線: " + id, content : dom, selected : true});
		stockData.root = dom;
		if(type != EType.clock) dom.find("canvas").attr("width",dom.find("canvas").parent().width());
		if(props != null) this.createProp(dom.find("#mc_propContainer"),props);
		Main.drawStock(dom.find("#canvas_kline"),stockId,type,offset,count,this.propsToDraw(props));
	}
	,removePanel: function(id) {
		var deleteName = "k線: " + HxOverrides.substr(id,"k_".length,id.length);
		this.mc_accordionContainer.accordion("remove",deleteName);
	}
	,drawAllCanvas: function(stockId,offset,ary_panel) {
		if(offset == null) offset = 0;
		Lambda.map(ary_panel,function(stockMap) {
			Main.drawStock(stockMap.root.find("#canvas_kline"),stockId,stockMap.type,offset,null,{ });
		});
	}
	,propsToDraw: function(props) {
		return Lambda.fold(props,function(obj,current) {
			if(obj.show) current.push({ 't' : Std.string(obj.type), 'd' : { n : obj.value.n, m : obj.value.m}, 'color' : "red"});
			return current;
		},[]);
	}
	,createProp: function(container,props) {
		var _g1 = this;
		Lambda.foreach(props,function(prop) {
			prop.sid = "swb_" + Std.string(prop.type);
			prop.nid = "input_n_" + Std.string(prop.type);
			prop.mid = "input_m_" + Std.string(prop.type);
			var dom;
			var _g = prop.type;
			switch(_g) {
			case "ma":
				dom = _g1.j("#tmpl_avg").tmpl(prop);
				break;
			case "ema":
				dom = _g1.j("#tmpl_avg").tmpl(prop);
				break;
			case "kd":
				dom = _g1.j("#tmpl_avg").tmpl(prop);
				break;
			case "macd":
				dom = _g1.j("#tmpl_avg").tmpl(prop);
				break;
			case "yu-clock":
				dom = _g1.j("#tmpl_avg").tmpl(prop);
				break;
			case "yu-sd":
				dom = _g1.j("#tmpl_avg").tmpl(prop);
				break;
			case "Chaikin":
				dom = _g1.j("#tmpl_avg").tmpl(prop);
				break;
			default:
				throw new js__$Boot_HaxeError("do not enter here!");
			}
			container.append(dom);
			dom.find(".easyui-switchbutton").switchbutton({ checked : prop.show, onChange : function() {
				var target = _g1.j(this);
				haxe_Log.trace(target.attr("id"),{ fileName : "PanelView.hx", lineNumber : 155, className : "view.PanelView", methodName : "createProp"});
			}});
			dom.find(".easyui-textbox").eq(0).textbox({ value : prop.value.n});
			dom.find(".easyui-textbox").eq(1).textbox({ value : prop.value.m});
			return true;
		});
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
Main.id = 1;
model_PanelModel.ON_INIT = "on_init";
model_PanelModel.ON_CHANGE_STOCK_SUCCESS = "on_change_stock_success";
model_PanelModel.ON_OFFSET_CHANGE = "on_offset_change";
model_PanelModel.ON_ADD_PANEL = "on_add_panel";
model_PanelModel.ON_REMOVE_PANEL = "on_remove_panel";
view_PanelView.ON_STOCKID_CHANGE = "on_stockid_change";
view_PanelView.ON_OFFSET_CHANGE = "on_offset_change";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=haxe.js.map