(function (console) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
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
	this.model = new model_PanelModel();
	this.treeView = new view_TreeView();
	var _g = this;
	this.treeView.set_config({ btn_addTreeNode : Main.j("#btn_addTreeNode"), btn_removeTreeNode : Main.j("#btn_removeTreeNode"), tree_particle : Main.j("#tree_particle")});
	this.treeView.addHandler(function(type,params) {
		haxe_Log.trace(type,{ fileName : "Main.hx", lineNumber : 31, className : "Main", methodName : "new", customParams : [params]});
		switch(type) {
		case "ON_BTN_ADD_TREE_NODE_CLICK":
			if(params.selectNode.id == null) _g.model.addParticle(Main.getId(),999,{ }); else _g.model.addParticle(Main.getId(),params.selectNode.id,{ });
			break;
		case "ON_BTN_REMOVE_TREE_NODE_CLICK":
			_g.model.removeParticle(params.selectNode.id);
			break;
		case "ON_TREE_DRAG":
			var savestr = JSON.stringify(_g.model.getOutputData(_g.treeView.findNode(999)));
			haxe_Log.trace(savestr,{ fileName : "Main.hx", lineNumber : 42, className : "Main", methodName : "new"});
			break;
		}
	});
	this.model.addHandler(function(type1,params1) {
		haxe_Log.trace(type1,{ fileName : "Main.hx", lineNumber : 49, className : "Main", methodName : "new", customParams : [params1]});
		switch(type1) {
		case "ON_ADD_PARTICLE":
			_g.treeView.appendNode(params1.id,params1.parentId);
			break;
		case "ON_REMOVE_PARTICLE":
			_g.treeView.removeNode(params1.id);
			break;
		}
	});
	this.model.set_config(testLoadData);
};
Main.__name__ = true;
Main.getId = function() {
	return Main.id++;
};
Main.main = function() {
	new Main();
};
Math.__name__ = true;
var haxe_Log = function() { };
haxe_Log.__name__ = true;
haxe_Log.trace = function(v,infos) {
	js_Boot.__trace(v,infos);
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
var model_IModel = function() { };
model_IModel.__name__ = true;
var model_IPanelModel = function() { };
model_IPanelModel.__name__ = true;
model_IPanelModel.__interfaces__ = [model_IModel];
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
	this._ary_partiles = [];
	model_Model.call(this);
};
model_PanelModel.__name__ = true;
model_PanelModel.__super__ = model_Model;
model_PanelModel.prototype = $extend(model_Model.prototype,{
	addParticle: function(id,parentId,particle,extra) {
		if(this.findParticleById(id)) return;
		this._ary_partiles.push({ id : id, particle : particle});
		this.notify(model_PanelModel.ON_ADD_PARTICLE,{ id : id, parentId : parentId, particle : particle});
		this.log();
	}
	,removeParticle: function(id,extra) {
		if(!this.findParticleById(id)) return;
		var x = this.findParticleById(id);
		HxOverrides.remove(this._ary_partiles,x);
		this.notify(model_PanelModel.ON_REMOVE_PARTICLE,{ id : id});
		this.log();
	}
	,getOutputData: function(node) {
		var _g = this;
		var retobj = { };
		var _loopNode;
		var _loopNode1 = null;
		_loopNode1 = function(node1,outputData) {
			var id = node1.id;
			var particleData = _g.findParticleById(id);
			outputData.id = particleData.id;
			if(node1.children && node1.children.length > 0) {
				outputData.emit = { 'prototype' : []};
				var _g2 = 0;
				var _g1 = node1.children.length;
				while(_g2 < _g1) {
					var i = _g2++;
					var obj = { };
					outputData.emit.prototype.push(obj);
					_loopNode1(node1.children[i],obj);
				}
			}
		};
		_loopNode = _loopNode1;
		_loopNode(node,retobj);
		return retobj;
	}
	,init: function() {
		var _g = this;
		model_Model.prototype.init.call(this);
		var foreachObj;
		var foreachObj1 = null;
		foreachObj1 = function(obj,pid) {
			_g.addParticle(obj.id,pid == null?999:pid,obj);
			if(obj.emit != null) Lambda.foreach(obj.emit.prototype,function(_obj) {
				foreachObj1(_obj,obj.id);
				return true;
			});
		};
		foreachObj = foreachObj1;
		foreachObj(this.config);
		this.log();
	}
	,findParticleById: function(id) {
		return Lambda.find(this._ary_partiles,function(p) {
			if(p.id == id) return true;
			return false;
		});
	}
	,set_currentParticle: function(particle) {
		return this.currentParticle = particle;
	}
	,log: function() {
	}
});
var view_TreeView = function() {
	model_Model.call(this);
};
view_TreeView.__name__ = true;
view_TreeView.__super__ = model_Model;
view_TreeView.prototype = $extend(model_Model.prototype,{
	getRoots: function() {
		return this.tree_particle.tree("getRoots");
	}
	,getRootNode: function() {
		return this.tree_particle.tree("getRoot");
	}
	,findNode: function(nodeId) {
		var _g = this.tree_particle.tree("find",nodeId);
		var node = _g;
		if(_g == null) return this.getRootNode(); else switch(_g) {
		default:
			return node;
		}
	}
	,init: function() {
		var _g = this;
		model_Model.prototype.init.call(this);
		this.tree_particle = this.config.tree_particle;
		this.tree_particle.tree({ onDrop : function(target,source,point) {
			_g.notify(view_TreeView.ON_TREE_DRAG,{ moveId : source.id, toId : _g.getNodeByDom(target).id});
		}});
		this.btn_addTreeNode = this.config.btn_addTreeNode;
		this.btn_removeTreeNode = this.config.btn_removeTreeNode;
		this.btn_addTreeNode.click(function() {
			_g.notify(view_TreeView.ON_BTN_ADD_TREE_NODE_CLICK,{ selectNode : _g.getSelectedNode()});
		});
		this.btn_removeTreeNode.click(function() {
			_g.notify(view_TreeView.ON_BTN_REMOVE_TREE_NODE_CLICK,{ selectNode : _g.getSelectedNode()});
		});
	}
	,getNodeByDom: function(dom) {
		var _g = this.tree_particle.tree("getNode",dom);
		var node = _g;
		if(_g == null) return this.getRootNode(); else switch(_g) {
		default:
			return node;
		}
	}
	,getSelectedNode: function() {
		var _g = this.tree_particle.tree("getSelected");
		var node = _g;
		if(_g == null) return this.getRootNode(); else switch(_g) {
		default:
			return node;
		}
	}
	,removeNode: function(nodeId) {
		this.tree_particle.tree("remove",this.findNode(nodeId).target);
	}
	,focusNode: function(node) {
		this.tree_particle.tree("select",node.target);
	}
	,appendNode: function(nodeId,toNodeId) {
		if(toNodeId == 999) {
			this.getRootNode().id = nodeId;
			this.getRootNode().text = nodeId;
			return;
		}
		this.tree_particle.tree("append",{ parent : this.findNode(toNodeId).target, data : [{ id : nodeId, text : nodeId}]});
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
Main.id = 2;
model_PanelModel.ON_ADD_PARTICLE = "ON_ADD_PARTICLE";
model_PanelModel.ON_REMOVE_PARTICLE = "ON_REMOVE_PARTICLE";
view_TreeView.ON_BTN_ADD_TREE_NODE_CLICK = "ON_BTN_ADD_TREE_NODE_CLICK";
view_TreeView.ON_BTN_REMOVE_TREE_NODE_CLICK = "ON_BTN_REMOVE_TREE_NODE_CLICK";
view_TreeView.ON_TREE_DRAG = "ON_TREE_DRAG";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=haxe.js.map