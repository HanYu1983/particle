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
	this.dynamicView = new view_DynamicView();
	this.paramsView = new view_ParamsView();
	this.treeView = new view_TreeView();
	var _g = this;
	this.canvas_container = Main.j("#canvas_container");
	this.webgl = Main.j("#webgl");
	this.treeView.set_config({ btn_addTreeNode : Main.j("#btn_addTreeNode"), btn_removeTreeNode : Main.j("#btn_removeTreeNode"), tree_particle : Main.j("#tree_particle")});
	this.treeView.addHandler(function(type,params) {
		switch(type) {
		case "ON_TREE_NODE_CLICK":
			_g.paramsView.setValues(_g.model.findParticleById(params.node.id),_g.treeView.findNode(params.node.id).children != null);
			break;
		case "ON_BTN_ADD_TREE_NODE_CLICK":
			var newId = Main.getId();
			_g.model.addParticle(newId,params.selectNode.id,_g.createNewParticle(newId));
			break;
		case "ON_BTN_REMOVE_TREE_NODE_CLICK":
			if(_g.treeView.getRootNode().id == params.selectNode.id) {
				Main.showMessage("不能刪除此發射器哦");
				return;
			}
			_g.model.removeParticle(params.selectNode.id);
			break;
		case "ON_TREE_DRAG":
			_g.treeView.focusNode(_g.treeView.findNode(params.toId));
			break;
		}
	});
	this.paramsView.addHandler(function(type1,params1) {
		haxe_Log.trace(type1,{ fileName : "Main.hx", lineNumber : 56, className : "Main", methodName : "new", customParams : [params1]});
		switch(type1) {
		case "ON_PROP_CHANGE":
			_g.model.setParticleProps(params1.id,params1.proptype,params1.value);
			break;
		case "ON_TXT_NAME_CHANGE":
			_g.model.setParticleName(params1.id,params1.name);
			break;
		}
	});
	this.paramsView.set_config({ root : mc_props_container, btn_confirmName : Main.j("#btn_confirmName"), txt_name : Main.j("#txt_name")});
	this.dynamicView.set_config({ table_props : Main.j("#table_props")});
	this.model.addHandler(function(type2,params2) {
		haxe_Log.trace(type2,{ fileName : "Main.hx", lineNumber : 76, className : "Main", methodName : "new", customParams : [params2]});
		switch(type2) {
		case "ON_ADD_PARTICLE":
			_g.treeView.appendNode(params2.id,params2.particle.name,params2.parentId);
			break;
		case "ON_REMOVE_PARTICLE":
			_g.treeView.removeNode(params2.id);
			break;
		case "ON_NAME_CHANGE":
			_g.treeView.setNodeNameById(params2.id,params2.name);
			break;
		}
		Main.updateParticle(_g.model.getOutputData(_g.treeView.findNode(999)));
	});
	var initObj = this.createNewParticle(Main.getId());
	initObj.emit.prototype = [this.createNewParticle(Main.getId())];
	this.model.set_config(initObj);
	this.treeView.focusNode(this.treeView.findNode(0));
	this.onResize(null);
	Main.j(window).resize($bind(this,this.onResize));
	this.webgl.mousemove($bind(this,this.onMousemove));
};
Main.__name__ = true;
Main.createNewEmit = function() {
	return { count : 1, duration : 0.5, angle : 0, range : 0, force : 0};
};
Main.showLoading = function() {
	Main.j.messager.progress({ title : "Please waiting", msg : "Loading data..."});
};
Main.closeLoading = function() {
	Main.j.messager.progress("close");
};
Main.showMessage = function(msg) {
	Main.j.messager.show({ title : "提示", msg : msg, timeout : 5000, showType : "slide"});
};
Main.getId = function() {
	return Main.id++;
};
Main.updateParticle = function(particleData) {
	common.onView.onNext(["edit-particle",particleData]);
};
Main.addMouseWheelEvent = function(jdom,func) {
	leo.utils.addMouseWheelEvent(jdom,func);
};
Main.removeMouseWheelEvent = function(jdom) {
	leo.utils.removeMouseWheelEvent(jdom);
};
Main.main = function() {
	new Main();
};
Main.prototype = {
	createNewParticle: function(id) {
		return { id : id, name : "粒子_" + Std.string(id), lifetime : 5, mass : 3, color : "#33ddff", size : [10,10], pos : [0,0,0], vel : [0,0,0], emit : Main.createNewEmit()};
	}
	,onResize: function(e) {
		this.webgl.attr("width",this.canvas_container.width());
		this.webgl.attr("height",this.canvas_container.height());
	}
	,onMousemove: function(e) {
		var px = e.offsetX;
		var py = e.offsetY;
		this.model.setParticleProps(0,"pos_x",px);
		this.model.setParticleProps(0,"pos_y",py);
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
	}
	,removeParticle: function(id,extra) {
		if(!this.findParticleById(id)) return;
		var x = this.findParticleById(id);
		HxOverrides.remove(this._ary_partiles,x);
		this.notify(model_PanelModel.ON_REMOVE_PARTICLE,{ id : id});
	}
	,setParticleName: function(id,name) {
		if(!this.findParticleById(id)) return;
		this.findParticleById(id).particle.name = name;
		this.notify(model_PanelModel.ON_NAME_CHANGE,{ id : id, name : name});
	}
	,setParticleProps: function(id,type,value) {
		if(!this.findParticleById(id)) return;
		switch(type) {
		case "size_x":
			this.findParticleById(id).particle.size[0] = value;
			break;
		case "size_y":
			this.findParticleById(id).particle.size[1] = value;
			break;
		case "pos_x":
			this.findParticleById(id).particle.pos[0] = value;
			break;
		case "pos_y":
			this.findParticleById(id).particle.pos[1] = value;
			break;
		case "pos_r":
			this.findParticleById(id).particle.pos[2] = value;
			break;
		case "vel_x":
			this.findParticleById(id).particle.vel[0] = value;
			break;
		case "vel_y":
			this.findParticleById(id).particle.vel[1] = value;
			break;
		case "vel_r":
			this.findParticleById(id).particle.vel[2] = value;
			break;
		case "count":case "duration":case "angle":case "range":case "force":
			Reflect.setField(this.findParticleById(id).particle.emit,type,value);
			break;
		default:
			Reflect.setField(this.findParticleById(id).particle,type,value);
		}
		this.notify(model_PanelModel.ON_PROPS_CAHNGE);
	}
	,findParticleById: function(id) {
		return Lambda.find(this._ary_partiles,function(p) {
			if(p.id == id) return true;
			return false;
		});
	}
	,getOutputData: function(node) {
		var _g = this;
		var retobj = { };
		var _loopNode;
		var _loopNode1 = null;
		_loopNode1 = function(node1,outputData) {
			var id = node1.id;
			var particle = _g.findParticleById(id).particle;
			outputData.id = particle.id;
			outputData.name = particle.name;
			outputData.lifetime = particle.lifetime;
			outputData.vel = particle.vel;
			outputData.pos = particle.pos;
			outputData.mass = particle.mass;
			outputData.color = particle.color;
			outputData.size = particle.size;
			if(node1.children && node1.children.length > 0) {
				outputData.emit = { 'prototype' : []};
				outputData.emit.count = particle.emit.count;
				outputData.emit.duration = particle.emit.duration;
				outputData.emit.angle = particle.emit.angle;
				outputData.emit.range = particle.emit.range;
				outputData.emit.force = particle.emit.force;
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
		return;
		var foreachObj;
		var foreachObj1 = null;
		foreachObj1 = function(obj,pid) {
			_g.addParticle(obj.id,pid == null?999:pid,obj);
			if(obj.emit != null && obj.emit.prototype != null) Lambda.foreach(obj.emit.prototype,function(_obj) {
				foreachObj1(_obj,obj.id);
				return true;
			});
		};
		foreachObj = foreachObj1;
		foreachObj(this.config);
	}
	,set_currentParticle: function(particle) {
		return this.currentParticle = particle;
	}
});
var view_DynamicView = function() {
	model_Model.call(this);
};
view_DynamicView.__name__ = true;
view_DynamicView.__super__ = model_Model;
view_DynamicView.prototype = $extend(model_Model.prototype,{
	init: function() {
		model_Model.prototype.init.call(this);
		return;
		this.table_props = this.config.table_props;
		this.table_props.datagrid();
	}
});
var view_ParamsView = function() {
	this.j = $;
	model_Model.call(this);
};
view_ParamsView.__name__ = true;
view_ParamsView.__super__ = model_Model;
view_ParamsView.prototype = $extend(model_Model.prototype,{
	setValues: function(particleObj,isEmit) {
		this.currentParticleObj = particleObj;
		var particle = particleObj.particle;
		this.txt_name.textbox({ value : particle.name});
		this.setPropValue("lifetime",particle.lifetime * 1000);
		this.setPropValue("mass",particle.mass);
		this.setPropValue("size_x",particle.size[0]);
		this.setPropValue("size_y",particle.size[1]);
		this.setPropValue("vel_x",particle.vel[0]);
		this.setPropValue("vel_y",particle.vel[1]);
		this.setPropValue("vel_r",particle.vel[2] / Math.PI * 180);
		this.setPropValue("pos_r",particle.pos[2] / Math.PI * 180);
		if(isEmit) {
			this.setPropValue("count",particle.emit.count);
			this.setPropValue("duration",particle.emit.duration * 1000);
			this.setPropValue("angle",particle.emit.angle / Math.PI * 180);
			this.setPropValue("range",particle.emit.range / Math.PI * 180);
			this.setPropValue("force",particle.emit.force);
			this.getPropContainer("count").show();
			this.getPropContainer("duration").show();
			this.getPropContainer("angle").show();
			this.getPropContainer("range").show();
			this.getPropContainer("force").show();
		} else {
			this.getPropContainer("count").hide();
			this.getPropContainer("duration").hide();
			this.getPropContainer("angle").hide();
			this.getPropContainer("range").hide();
			this.getPropContainer("force").hide();
		}
	}
	,init: function() {
		var _g = this;
		model_Model.prototype.init.call(this);
		return;
		this.root = this.config.root;
		this.root.find(".easyui-numberspinner-code").numberspinner({ onChange : function(newv,oldv) {
			var newValue = parseFloat(newv);
			var jdom = _g.j(this);
			var proptype = jdom.parent().parent().attr("proptype");
			switch(proptype) {
			case "duration":case "lifetime":
				newValue /= 1000;
				break;
			case "angle":case "range":case "pos_r":case "vel_r":
				newValue = newValue / 180 * Math.PI;
				break;
			}
			_g.notify(view_ParamsView.ON_PROP_CHANGE,{ id : _g.currentParticleObj.id, proptype : proptype, value : newValue});
			_g.currentPropSpr = jdom;
		}, onSpinUp : function() {
			var jdom1 = _g.j(this);
			_g.currentPropSpr = jdom1;
		}, onSpinDown : function() {
			var jdom2 = _g.j(this);
			_g.currentPropSpr = jdom2;
		}});
		this.root.find(".easyui-numberspinner-code").parent().focusin(function(e) {
			var jdom3 = _g.j(e.currentTarget).find(".easyui-numberspinner-code");
			var proptype1 = jdom3.parent().parent().attr("proptype");
			_g.currentPropSpr = jdom3;
		});
		this.root.find(".easyui-numberspinner-code").parent().focusout(function(e1) {
			var jdom4 = _g.j(e1.currentTarget).find(".easyui-numberspinner-code");
			var proptype2 = jdom4.parent().parent().attr("proptype");
			_g.currentPropSpr = null;
		});
		this.btn_confirmName = this.config.btn_confirmName;
		this.txt_name = this.config.txt_name;
		this.txt_name.textbox({ onChange : function(newv1,oldv1) {
			_g.notify(view_ParamsView.ON_TXT_NAME_CHANGE,{ id : _g.currentParticleObj.id, name : newv1});
		}});
		Main.addMouseWheelEvent(this.j("body"),$bind(this,this.onBodyWheel));
	}
	,setPropValue: function(type,value) {
		this.getPropContainer(type).find(".easyui-numberspinner-code").numberspinner("setValue",value);
	}
	,getPropContainer: function(type) {
		return this.root.find("div[proptype=" + type + "]");
	}
	,onBodyWheel: function(e) {
		if(this.currentPropSpr == null) return;
		var oldvalue = this.currentPropSpr.numberspinner("getValue");
		if(e.delta > 0) --oldvalue; else ++oldvalue;
		this.currentPropSpr.numberspinner("setValue",oldvalue);
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
		return { };
	}
	,setNodeNameById: function(id,name) {
		haxe_Log.trace(id,{ fileName : "TreeView.hx", lineNumber : 38, className : "view.TreeView", methodName : "setNodeNameById", customParams : [name]});
		this.tree_particle.tree("update",{ target : this.findNode(id).target, text : name});
	}
	,findNode: function(nodeId) {
		return { };
	}
	,removeNode: function(nodeId) {
		this.tree_particle.tree("remove",this.findNode(nodeId).target);
	}
	,focusNode: function(node) {
		return;
		this.tree_particle.tree("select",node.target);
		this.notify(view_TreeView.ON_TREE_NODE_CLICK,{ node : node});
	}
	,appendNode: function(nodeId,name,toNodeId) {
		if(toNodeId == 999) {
			this.getRootNode().id = nodeId;
			this.getRootNode().text = name;
			return;
		}
		this.tree_particle.tree("append",{ parent : this.findNode(toNodeId).target, data : [{ id : nodeId, text : name}]});
	}
	,init: function() {
		var _g = this;
		model_Model.prototype.init.call(this);
		return;
		this.tree_particle = this.config.tree_particle;
		this.tree_particle.tree({ onClick : function(node) {
			_g.notify(view_TreeView.ON_TREE_NODE_CLICK,{ node : node});
		}, onDrop : function(target,source,point) {
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
model_PanelModel.ON_ADD_PARTICLE = "ON_ADD_PARTICLE";
model_PanelModel.ON_REMOVE_PARTICLE = "ON_REMOVE_PARTICLE";
model_PanelModel.ON_PROPS_CAHNGE = "ON_PROPS_CAHNGE";
model_PanelModel.ON_NAME_CHANGE = "ON_NAME_CHANGE";
view_ParamsView.ON_PROP_CHANGE = "ON_PROP_CHANGE";
view_ParamsView.ON_TXT_NAME_CHANGE = "ON_TXT_NAME_CHANGE";
view_TreeView.ON_TREE_NODE_CLICK = "ON_TREE_NODE_CLICK";
view_TreeView.ON_BTN_ADD_TREE_NODE_CLICK = "ON_BTN_ADD_TREE_NODE_CLICK";
view_TreeView.ON_BTN_REMOVE_TREE_NODE_CLICK = "ON_BTN_REMOVE_TREE_NODE_CLICK";
view_TreeView.ON_TREE_DRAG = "ON_TREE_DRAG";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=haxe.js.map