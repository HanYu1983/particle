(function (console) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Main = function() {
	this.onView = component_OnView.inst;
	this.j = $;
	Reflect.setField(window,"haxeStart",$bind(this,this.start));
	Reflect.setField(window,"onHtmlClick",$bind(this,this.onHtmlClick));
};
Main.__name__ = true;
Main.getId = function() {
	return Math.floor(Math.random() * 10000) + "";
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
		this.tree.parserLoadData(this.loadSaveData());
		this.addListener();
		this.onResize(null);
	}
	,onHtmlClick: function(target) {
		var _g = this;
		var checkNodeAndThen = function(fn) {
			var selectNode = _g.tree.getSelectedNode();
			if(selectNode == null) {
				js_Browser.alert("請選擇發射器");
				return;
			} else if(selectNode.type == component_EParticleType.PARTICLE) {
				js_Browser.alert("只能增加粒子在發射器下");
				return;
			}
			fn(selectNode);
		};
		var _g1 = target.id;
		switch(_g1) {
		case "btn_addParticle":
			checkNodeAndThen(function(node) {
				_g.tree.addParticle(node,{ id : Main.getId()},component_EParticleType.PARTICLE,"test_particle");
			});
			break;
		case "btn_addEmitter":
			checkNodeAndThen(function(node1) {
				_g.tree.addParticle(node1,{ id : Main.getId()},component_EParticleType.EMITTER,"test_emitter");
			});
			break;
		case "btn_remove":
			var selectNode1 = this.tree.getSelectedNode();
			this.tree.removeParticle(selectNode1);
			break;
		}
	}
	,addListener: function() {
		this.j("body").mousemove($bind(this,this.onMousemove));
		this.j(window).resize($bind(this,this.onResize));
		this.tree.getEvent().on("onTreeNodeClick",function(e,params) {
			haxe_Log.trace(params.node.particle,{ fileName : "Main.hx", lineNumber : 78, className : "Main", methodName : "addListener"});
		});
	}
	,loadSaveData: function() {
		return testLoadData;
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
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
var component_EParticleType = { __ename__ : true, __constructs__ : ["PARTICLE","EMITTER"] };
component_EParticleType.PARTICLE = ["PARTICLE",0];
component_EParticleType.PARTICLE.toString = $estr;
component_EParticleType.PARTICLE.__enum__ = component_EParticleType;
component_EParticleType.EMITTER = ["EMITTER",1];
component_EParticleType.EMITTER.toString = $estr;
component_EParticleType.EMITTER.__enum__ = component_EParticleType;
var component_OnView = function() {
	this.onViewObj = common.onView;
};
component_OnView.__name__ = true;
component_OnView.prototype = {
	setObject: function(obj,fn) {
		if(obj == null) this.basicObj = { id : "root", lifetime : 10, emit : { prototype : [{ id : "root_particle", lifetime : 1, vel : [50,0,0]}]}, pos : [0,0,0], vel : [0,0,0]}; else this.basicObj = obj;
		this.goThroughAllParticle(fn);
		this.updateParticleRoot();
	}
	,getObject: function() {
		if(this.basicObj == null) throw new js__$Boot_HaxeError("you should set object first!");
		return this.basicObj;
	}
	,updateParticleRoot: function() {
		this.notify("edit-particle",this.getObject());
	}
	,goThroughAllParticle: function(fn) {
		var _findParticle;
		var _findParticle1 = null;
		_findParticle1 = function(fields,fn1) {
			fn1(fields);
			if(Object.prototype.hasOwnProperty.call(fields,"emit")) {
				var ary = fields.emit.prototype;
				var target = null;
				var _g1 = 0;
				var _g = ary.length;
				while(_g1 < _g) {
					var i = _g1++;
					_findParticle1(ary[i],fn1);
				}
				return target;
			} else return null;
		};
		_findParticle = _findParticle1;
		return _findParticle(this.getObject(),fn);
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
var inter_IParticle = function() { };
inter_IParticle.__name__ = true;
var component_Particle = function(id,parent,data) {
	this._ary_children = [];
	this._data = data;
	this._id = id;
	this._parent = parent;
};
component_Particle.__name__ = true;
component_Particle.__interfaces__ = [inter_IParticle];
component_Particle.prototype = {
	getId: function() {
		return this._id;
	}
	,getData: function() {
		return this._data;
	}
	,getParent: function() {
		return this._parent;
	}
	,getChildren: function() {
		return this._ary_children;
	}
	,addChild: function(particle) {
		this._ary_children.push(particle);
	}
	,getType: function() {
		if(Reflect.hasField(this.getData(),"emit")) return component_EParticleType.EMITTER;
		return component_EParticleType.PARTICLE;
	}
	,toString: function() {
		return JSON.stringify(this.getData());
	}
};
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
};
var inter_IEvent = function() { };
inter_IEvent.__name__ = true;
var inter_AbstractEvent = function(dom) {
	inter_AbstractDom.call(this,dom);
	this._event = this.j("<div></div>");
};
inter_AbstractEvent.__name__ = true;
inter_AbstractEvent.__interfaces__ = [inter_IEvent];
inter_AbstractEvent.__super__ = inter_AbstractDom;
inter_AbstractEvent.prototype = $extend(inter_AbstractDom.prototype,{
	getEvent: function() {
		return this._event;
	}
	,trigger: function(type,options) {
		haxe_Log.trace("trigger",{ fileName : "AbstractEvent.hx", lineNumber : 24, className : "inter.AbstractEvent", methodName : "trigger", customParams : [type,options]});
		this.getDom().trigger(type,options);
	}
	,on: function(type,fn) {
		haxe_Log.trace("on",{ fileName : "AbstractEvent.hx", lineNumber : 29, className : "inter.AbstractEvent", methodName : "on", customParams : [type,fn]});
		this.getDom().on(type,fn);
	}
});
var inter_ITree = function() { };
inter_ITree.__name__ = true;
var inter_AbstractTree = function(dom) {
	inter_AbstractEvent.call(this,dom);
};
inter_AbstractTree.__name__ = true;
inter_AbstractTree.__interfaces__ = [inter_ITree];
inter_AbstractTree.__super__ = inter_AbstractEvent;
inter_AbstractTree.prototype = $extend(inter_AbstractEvent.prototype,{
	parserLoadData: function(loadData) {
	}
	,addParticle: function(parentNode,particleData,type,name) {
	}
	,getRootNode: function() {
		return null;
	}
	,findNode: function(nodeId) {
		return null;
	}
	,getSelectedNode: function() {
		return null;
	}
	,removeParticle: function(node) {
	}
});
var component_Tree = function(dom) {
	inter_AbstractTree.call(this,dom);
};
component_Tree.__name__ = true;
component_Tree.__super__ = inter_AbstractTree;
component_Tree.prototype = $extend(inter_AbstractTree.prototype,{
	init: function() {
		var _g = this;
		inter_AbstractTree.prototype.init.call(this);
		this.getDom().tree({ onClick : function(node) {
			_g.getEvent().trigger("onTreeNodeClick",{ node : node});
		}, onDrop : function(target,source,point) {
			haxe_Log.trace(target,{ fileName : "Tree.hx", lineNumber : 31, className : "component.Tree", methodName : "init"});
			haxe_Log.trace(source,{ fileName : "Tree.hx", lineNumber : 32, className : "component.Tree", methodName : "init"});
			haxe_Log.trace(point,{ fileName : "Tree.hx", lineNumber : 33, className : "component.Tree", methodName : "init"});
		}});
	}
	,parserLoadData: function(loadData) {
		var _g = this;
		var _findParticle;
		var _findParticle1 = null;
		_findParticle1 = function(fields,parentNode) {
			_g.addParticle(parentNode,fields,component_EParticleType.EMITTER,fields.id);
			if(Object.prototype.hasOwnProperty.call(fields,"emit")) {
				var ary = fields.emit.prototype;
				var target = null;
				parentNode = _g.findNode(fields.id);
				var _g2 = 0;
				var _g1 = ary.length;
				while(_g2 < _g1) {
					var i = _g2++;
					_findParticle1(ary[i],parentNode);
				}
			}
		};
		_findParticle = _findParticle1;
		_findParticle(loadData,this.getRootNode());
	}
	,addParticle: function(parentNode,particleData,type,name) {
		this.addNode(parentNode,particleData,type,name);
	}
	,findNode: function(nodeId) {
		return this.getDom().tree("find",nodeId);
	}
	,getRootNode: function() {
		return this.getDom().tree("getRoot");
	}
	,getSelectedNode: function() {
		return this.getDom().tree("getSelected");
	}
	,removeParticle: function(node) {
		if(node && node.domId != "_easyui_tree_1") this.getDom().tree("remove",node.target);
	}
	,addNode: function(parentNode,particleData,type,name) {
		if(parentNode && (parentNode.domId == "_easyui_tree_1" || parentNode.type == component_EParticleType.EMITTER)) {
			var nodes = [{ id : particleData.id, text : name, type : type}];
			this.getDom().tree("append",{ parent : parentNode.target, data : nodes});
			this.trigger(component_Tree.ADD_NODE,{ particleData : particleData});
		}
	}
});
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
var js_Browser = function() { };
js_Browser.__name__ = true;
js_Browser.alert = function(v) {
	window.alert(js_Boot.__string_rec(v,""));
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
component_OnView.inst = new component_OnView();
component_Tree.ADD_NODE = "add_node";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=haxe.js.map