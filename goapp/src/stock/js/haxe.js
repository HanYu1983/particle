(function (console) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EProp = { __ename__ : true, __constructs__ : ["avg","kd"] };
EProp.avg = ["avg",0];
EProp.avg.toString = $estr;
EProp.avg.__enum__ = EProp;
EProp.kd = ["kd",1];
EProp.kd.toString = $estr;
EProp.kd.__enum__ = EProp;
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
	this.currentScrollX = null;
	this.currentStockId = null;
	this.j = $;
	var _g = this;
	this.slt_stockId = this.j("#slt_stockId");
	this.panelView.set_config({ mc_accordionContainer : this.j("#mc_accordionContainer"), tmpl_panel : this.j("#tmpl_panel")});
	this.panelModel.addHandler(function(type,params) {
		switch(type) {
		case "on_add_panel":
			_g.panelView.execute(model_PanelModel.ON_ADD_PANEL,params);
			break;
		default:
		}
	});
	this.panelModel.set_config({ panel : [{ id : 0, type : "clock", sub : [{ t : "ma", d : { n : 5, color : "blue"}},{ t : "ma", d : { n : 10, color : "yellow"}}]},{ id : 1, type : "volume", sub : [{ t : "ma", d : { n : 5, color : "blue"}},{ t : "ma", d : { n : 10, color : "yellow"}}]},{ id : 2, type : "kline", sub : [{ t : "ma", d : { n : 5, color : "blue"}},{ t : "ma", d : { n : 10, color : "yellow"}}]},{ id : 3, type : "kline", sub : [{ t : "ma", d : { n : 5, color : "blue"}},{ t : "ma", d : { n : 10, color : "yellow"}}]},{ id : 4, type : "kline", sub : [{ t : "ma", d : { n : 5, color : "blue"}},{ t : "ma", d : { n : 10, color : "yellow"}}]}]});
	this.slt_stockId.textbox({ onChange : function(newValue,oldValue) {
		var stockId = newValue;
		Main.getStock(stockId,true,function(ret) {
			_g.currentStockId = stockId;
			_g.panelView.execute("drawAllCanvas",{ 'ary_panel' : _g.panelModel.execute("getAry"), 'stockId' : stockId});
		});
	}});
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
	stockId(id,reset,cb);
};
Main.drawStock = function(canvas,id,type,params) {
	draw(canvas[0],id,Std.string(type),params);
};
Main.prototype = {
	drawAllCanvas: function(stockId) {
	}
	,resetAllCanvasListener: function() {
	}
	,onHtmlTrigger: function(name,params) {
		switch(name) {
		case "addPanel":
			this.addPanel(params);
			break;
		case "removePanel":
			this.removePanel(params);
			break;
		}
	}
	,addPanel: function(params) {
	}
	,removePanel: function(params) {
		var panelDom = this.j(params.currentTarget).parent().parent().parent().parent();
		var id = panelDom.attr("id");
		var deleteName = "k線: " + id.substr("k_".length,id.length);
	}
	,createAllProp: function() {
	}
	,createProp: function(container,props) {
		var _g1 = this;
		Lambda.map(props,function(prop) {
			prop.sid = "swb_" + Std.string(prop.type);
			prop.vid = "input_" + Std.string(prop.type);
			var dom;
			var _g = prop.type;
			switch(Type.enumIndex(_g)) {
			case 0:
				dom = _g1.j("#tmpl_avg").tmpl(prop);
				break;
			case 1:
				dom = _g1.j("#tmpl_avg").tmpl(prop);
				break;
			default:
				dom = null;
			}
			container.append(dom);
			dom.find(".easyui-switchbutton").switchbutton({ checked : prop.show});
			dom.find(".easyui-textbox").textbox({ value : prop.value});
		});
	}
	,onSwtChange: function(params) {
		console.log(params);
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
var Type = function() { };
Type.__name__ = true;
Type.enumIndex = function(e) {
	return e[1];
};
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
	,execute: function(type,params) {
		return null;
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
	model_Model.call(this);
};
model_PanelModel.__name__ = true;
model_PanelModel.__super__ = model_Model;
model_PanelModel.prototype = $extend(model_Model.prototype,{
	addPanel: function(id,type,needMove,props) {
		var obj = { id : id, needMove : needMove, type : type, props : props, root : null};
		this.ary_panel_obj.push(obj);
		this.notify(model_PanelModel.ON_ADD_PANEL,obj);
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
	}
	,execute: function(type,params) {
		switch(type) {
		case "getAry":
			return this.ary_panel_obj;
		default:
			return null;
		}
	}
	,init: function() {
		var _g1 = this;
		model_Model.prototype.init.call(this);
		var j = $;
		Lambda.map(this.config.panel,function(obj) {
			var _g = obj.id;
			switch(_g) {
			case 0:
				_g1.addPanel(obj.id,EType.clock,false,null);
				break;
			case 1:
				_g1.addPanel(obj.id,EType.volume,true,[{ type : EProp.avg, value : 1, show : false},{ type : EProp.kd, value : 2, show : true}]);
				break;
			case 2:
				_g1.addPanel(obj.id,EType.kline,true,[{ type : EProp.avg, value : 1, show : false},{ type : EProp.kd, value : 2, show : true}]);
				break;
			default:
				_g1.addPanel(obj.id,EType.kline,true,[{ type : EProp.avg, value : 1, show : false},{ type : EProp.kd, value : 2, show : true}]);
			}
		});
	}
});
var view_PanelView = function() {
	model_Model.call(this);
};
view_PanelView.__name__ = true;
view_PanelView.__super__ = model_Model;
view_PanelView.prototype = $extend(model_Model.prototype,{
	init: function() {
		model_Model.prototype.init.call(this);
		this.mc_accordionContainer = this.config.mc_accordionContainer;
		this.mc_accordionContainer.accordion();
		this.tmpl_panel = this.config.tmpl_panel;
	}
	,execute: function(type,params) {
		switch(type) {
		case "on_add_panel":
			var id = params.id;
			var dom = this.tmpl_panel.tmpl({ id : id, type : params.type});
			this.mc_accordionContainer.accordion("add",{ id : "k_" + id, title : "k線: " + id, content : dom, selected : true});
			params.root = dom;
			break;
		case "drawAllCanvas":
			Lambda.map(params.ary_panel,function(stockMap) {
				Main.drawStock(stockMap.root.find("#canvas_kline"),params.stockId,stockMap.type,{ });
			});
			break;
		}
		return null;
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
model_PanelModel.ON_ADD_PANEL = "on_add_panel";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=haxe.js.map