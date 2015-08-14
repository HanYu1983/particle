(function (console) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
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
	this.currentScrollX = null;
	this.currentStockId = null;
	this.ary_panel_obj = [];
	this.j = $;
	var _g = this;
	this.tmpl_panel = this.j("#tmpl_panel");
	this.slt_stockId = this.j("#slt_stockId");
	this.mc_accordionContainer = this.j("#mc_accordionContainer");
	this.ary_panel_obj.push({ canvas : this.j("#canvas_kline"), needMove : true, type : EType.kline});
	this.ary_panel_obj.push({ canvas : this.j("#canvas_exchange"), needMove : true, type : EType.volume});
	this.ary_panel_obj.push({ canvas : this.j("#canvas_clock"), needMove : false, type : EType.clock});
	this.slt_stockId.textbox({ onChange : function(newValue,oldValue) {
		var stockId = newValue;
		Main.getStock(stockId,true,function(ret) {
			_g.currentStockId = stockId;
			_g.drawAllCanvas(stockId);
		});
	}});
	this.resetAllCanvasListener();
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
		Lambda.map(this.ary_panel_obj,function(stockMap) {
			Main.drawStock(stockMap.canvas,stockId,stockMap.type,{ });
		});
	}
	,resetAllCanvasListener: function() {
		var _g = this;
		Lambda.map(this.ary_panel_obj,function(stockMap) {
			if(stockMap.needMove) {
				var container = stockMap.canvas.parent();
				if(_g.currentScrollX != null) container.scrollLeft(_g.currentScrollX);
				container.off("scroll");
				container.scroll(function(e) {
					var target = _g.j(e.currentTarget);
					_g.currentScrollX = target.scrollLeft();
					Lambda.map(_g.ary_panel_obj,function(_stockMap) {
						container = _stockMap.canvas.parent();
						container.scrollLeft(_g.currentScrollX);
					});
				});
			}
		});
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
		var id = Main.getId();
		var dom = this.tmpl_panel.tmpl({ id : id});
		this.mc_accordionContainer.accordion("add",{ id : "k_" + id, title : "k線: " + id, content : dom, selected : true});
		this.ary_panel_obj.push({ id : id, canvas : dom.find("#canvas_kline"), needMove : true, type : EType.kline});
		if(this.currentStockId != null) Main.drawStock(dom.find("#canvas_kline"),this.currentStockId,EType.kline,{ });
		this.resetAllCanvasListener();
	}
	,removePanel: function(params) {
		var _g = this;
		var panelDom = this.j(params.currentTarget).parent().parent().parent().parent();
		var id = panelDom.attr("id");
		var deleteName = "k線: " + id.substr("k_".length,id.length);
		this.mc_accordionContainer.accordion("remove",deleteName);
		Lambda.foreach(this.ary_panel_obj,function(stockMap) {
			if(stockMap.id == id) {
				HxOverrides.remove(_g.ary_panel_obj,stockMap);
				return true;
			}
			return false;
		});
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
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
String.__name__ = true;
Array.__name__ = true;
Main.id = 1;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=haxe.js.map