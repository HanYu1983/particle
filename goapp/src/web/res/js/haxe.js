(function (console) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Main = function() {
	this.j = $;
	Reflect.setField(window,"haxeStart",$bind(this,this.start));
};
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
var Reflect = function() { };
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
var inter_IDom = function() { };
var inter_AbstractDom = function(dom) {
	this._dom = dom;
	this.init();
};
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
var component_Tree = function(dom) {
	inter_AbstractDom.call(this,dom);
};
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
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=haxe.js.map