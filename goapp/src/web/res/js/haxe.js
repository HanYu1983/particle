(function (console) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Main = function() {
	this.j = $;
	Reflect.setField(window,"haxeStart",$bind(this,this.start));
	Reflect.setField(window,"onHtmlClick",$bind(this,this.onHtmlClick));
};
Main.__name__ = true;
Main.main = function() {
	new Main();
};
Main.prototype = {
	start: function() {
		this.canvas_container = this.j("#canvas_container");
		this.webgl = this.j("#webgl");
		this.tree_particle = this.j("#tree_particle");
		this.tree = new component_Tree(this.tree_particle);
		this.addListener();
		this.onResize(null);
	}
	,onHtmlClick: function(target) {
		console.log(target.id);
		var _g = target.id;
		switch(_g) {
		case "btn_addParticle":
			this.tree.addParticle(this.tree_particle,this.getId());
			break;
		case "btn_addEmitter":
			this.tree.addEmitter(this.tree_particle,this.getId());
			break;
		case "btn_remove":
			break;
		}
	}
	,getId: function() {
		return Math.floor(Math.random() * 10000) + "";
	}
	,addListener: function() {
		this.j("body").mousemove($bind(this,this.onMousemove));
		this.j(window).resize($bind(this,this.onResize));
	}
	,onResize: function(e) {
		this.webgl.attr("width",this.canvas_container.width());
		this.webgl.attr("height",this.canvas_container.height());
	}
	,onMousemove: function(e) {
		var px = e.clientX;
		var py = e.clientY;
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
var component_EParticleType = { __ename__ : true, __constructs__ : ["PARTICLE","EMITTER"] };
component_EParticleType.PARTICLE = ["PARTICLE",0];
component_EParticleType.PARTICLE.toString = $estr;
component_EParticleType.PARTICLE.__enum__ = component_EParticleType;
component_EParticleType.EMITTER = ["EMITTER",1];
component_EParticleType.EMITTER.toString = $estr;
component_EParticleType.EMITTER.__enum__ = component_EParticleType;
var inter_IDom = function() { };
inter_IDom.__name__ = true;
var inter_AbstractDom = function(dom) {
	this.j = $;
	this._dom = dom;
	this.init();
};
inter_AbstractDom.__name__ = true;
inter_AbstractDom.__interfaces__ = [inter_IDom];
inter_AbstractDom.prototype = {
	init: function() {
	}
	,getDom: function() {
		return this._dom;
	}
	,trigger: function(type,options) {
	}
	,on: function(evt,options) {
	}
};
var inter_ITree = function() { };
inter_ITree.__name__ = true;
var component_Tree = function(dom) {
	inter_AbstractDom.call(this,dom);
};
component_Tree.__name__ = true;
component_Tree.__interfaces__ = [inter_ITree];
component_Tree.__super__ = inter_AbstractDom;
component_Tree.prototype = $extend(inter_AbstractDom.prototype,{
	init: function() {
		inter_AbstractDom.prototype.init.call(this);
		this.getDom().tree({ onDrop : function(target,source,point) {
			console.log(target);
			console.log(source);
			console.log(point);
		}});
	}
	,addEmitter: function(parentDom,id) {
		var node = this.getDom().tree("getSelected");
		console.log(node);
		if(node && (node.domId == "_easyui_tree_1" || node.type == component_EParticleType.EMITTER)) {
			var nodes = [{ id : id, text : id + "_" + Std.string(component_EParticleType.EMITTER), type : component_EParticleType.EMITTER}];
			this.getDom().tree("append",{ parent : node.target, data : nodes});
		}
	}
	,addParticle: function(parentDom,id) {
		var node = this.getDom().tree("getSelected");
		console.log(node);
		if(node && (node.domId == "_easyui_tree_1" || node.type == component_EParticleType.EMITTER)) {
			var nodes = [{ id : id, text : id + "_" + Std.string(component_EParticleType.PARTICLE), type : component_EParticleType.PARTICLE}];
			this.getDom().tree("append",{ parent : node.target, data : nodes});
		}
	}
	,removeEmitter: function(id) {
	}
	,removeParticle: function(id) {
	}
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
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=haxe.js.map