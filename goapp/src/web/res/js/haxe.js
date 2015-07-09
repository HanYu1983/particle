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
		this.addListener();
	}
	,addListener: function() {
		this.j("body").mousemove($bind(this,this.onMousemove));
	}
	,onMousemove: function(e) {
		var px = e.clientX;
		var py = e.clientY;
		OnView.inst.moveParticle("root",px,py);
	}
};
var OnView = function() {
	this.onViewObj = common.onView;
};
OnView.prototype = {
	setObject: function(obj) {
		if(obj == null) this.basicObj = { id : "root", lifetime : 10, emit : { prototype : [{ id : "root_particle", lifetime : 1, vel : [50,0,0]}]}, pos : [0,0,0], vel : [0,0,0]}; else this.basicObj = obj;
		this.notify("edit-particle",this.basicObj);
	}
	,getObject: function() {
		if(this.basicObj == null) throw new js__$Boot_HaxeError("you should set object first!");
		return this.basicObj;
	}
	,updateParticleRoot: function() {
		this.notify("edit-particle",this.getObject());
	}
	,findParticle: function(id) {
		var _findParticle;
		var _findParticle1 = null;
		_findParticle1 = function(fields) {
			if(fields.id == id) return fields;
			if(Object.prototype.hasOwnProperty.call(fields,"emit")) {
				var ary = fields.emit.prototype;
				var target = null;
				var _g1 = 0;
				var _g = ary.length;
				while(_g1 < _g) {
					var i = _g1++;
					target = _findParticle1(ary[i]);
				}
				return target;
			} else return null;
		};
		_findParticle = _findParticle1;
		return _findParticle(this.getObject());
	}
	,moveParticle: function(id,x,y) {
		var p = this.findParticle(id);
		if(p != null) {
			p.pos[0] = x;
			p.pos[1] = y;
		}
		this.updateParticleRoot();
	}
	,notify: function(evt,value) {
		this.onViewObj.onNext([evt,value]);
	}
};
var Reflect = function() { };
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
OnView.inst = new OnView();
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=haxe.js.map