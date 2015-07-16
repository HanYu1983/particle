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
		this.paramsPanel = this.j("#paramsPanel");
		this.tree = new component_Tree(this.tree_particle);
		this.panel = new component_ParamsPanel(this.paramsPanel);
		this.addListener();
		this.onResize(null);
		this.tree.parserLoadData(this.loadSaveData());
		this.onView.setObject(this.loadSaveData());
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
		var _g = this;
		this.webgl.mousemove($bind(this,this.onMousemove));
		this.j(window).resize($bind(this,this.onResize));
		this.tree.on(component_Tree.ON_TREE_NODE_CLICK,function(e,params) {
			var particleData = params.node.particleData;
			if(particleData == null) return;
			console.log(particleData);
			_g.panel.setData(particleData);
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
		var px = e.offsetX;
		var py = e.offsetY;
		this.onView.moveParticle(px,py);
		this.onView.setObject(this.tree.outputData());
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
var component_EParticleAttribute = { __ename__ : true, __constructs__ : ["LEFT_TIME","POSITION_X","POSITION_Y","POSITION_R","VELOCITY_X","VELOCITY_Y","VELOCITY_R","COLOR","MASS","SIZE_X","SIZE_Y"] };
component_EParticleAttribute.LEFT_TIME = ["LEFT_TIME",0];
component_EParticleAttribute.LEFT_TIME.toString = $estr;
component_EParticleAttribute.LEFT_TIME.__enum__ = component_EParticleAttribute;
component_EParticleAttribute.POSITION_X = ["POSITION_X",1];
component_EParticleAttribute.POSITION_X.toString = $estr;
component_EParticleAttribute.POSITION_X.__enum__ = component_EParticleAttribute;
component_EParticleAttribute.POSITION_Y = ["POSITION_Y",2];
component_EParticleAttribute.POSITION_Y.toString = $estr;
component_EParticleAttribute.POSITION_Y.__enum__ = component_EParticleAttribute;
component_EParticleAttribute.POSITION_R = ["POSITION_R",3];
component_EParticleAttribute.POSITION_R.toString = $estr;
component_EParticleAttribute.POSITION_R.__enum__ = component_EParticleAttribute;
component_EParticleAttribute.VELOCITY_X = ["VELOCITY_X",4];
component_EParticleAttribute.VELOCITY_X.toString = $estr;
component_EParticleAttribute.VELOCITY_X.__enum__ = component_EParticleAttribute;
component_EParticleAttribute.VELOCITY_Y = ["VELOCITY_Y",5];
component_EParticleAttribute.VELOCITY_Y.toString = $estr;
component_EParticleAttribute.VELOCITY_Y.__enum__ = component_EParticleAttribute;
component_EParticleAttribute.VELOCITY_R = ["VELOCITY_R",6];
component_EParticleAttribute.VELOCITY_R.toString = $estr;
component_EParticleAttribute.VELOCITY_R.__enum__ = component_EParticleAttribute;
component_EParticleAttribute.COLOR = ["COLOR",7];
component_EParticleAttribute.COLOR.toString = $estr;
component_EParticleAttribute.COLOR.__enum__ = component_EParticleAttribute;
component_EParticleAttribute.MASS = ["MASS",8];
component_EParticleAttribute.MASS.toString = $estr;
component_EParticleAttribute.MASS.__enum__ = component_EParticleAttribute;
component_EParticleAttribute.SIZE_X = ["SIZE_X",9];
component_EParticleAttribute.SIZE_X.toString = $estr;
component_EParticleAttribute.SIZE_X.__enum__ = component_EParticleAttribute;
component_EParticleAttribute.SIZE_Y = ["SIZE_Y",10];
component_EParticleAttribute.SIZE_Y.toString = $estr;
component_EParticleAttribute.SIZE_Y.__enum__ = component_EParticleAttribute;
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
	setObject: function(obj) {
		if(obj == null) this.basicObj = { id : "root", lifetime : 10, emit : { prototype : [{ id : "root_particle", lifetime : 1, vel : [50,0,0]}]}, pos : [0,0,0], vel : [0,0,0]}; else this.basicObj = obj;
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
	,moveParticle: function(x,y) {
		var p = this.findParticle("root");
		if(p != null) {
			p.pos[0] = x;
			p.pos[1] = y;
		}
	}
	,notify: function(evt,value) {
		this.onViewObj.onNext([evt,value]);
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
		this.getEvent().trigger(type,options);
	}
	,on: function(type,fn) {
		this.getEvent().on(type,fn);
	}
});
var inter_IParamsPanel = function() { };
inter_IParamsPanel.__name__ = true;
var inter_AbstractParamsPanel = function(dom) {
	inter_AbstractEvent.call(this,dom);
};
inter_AbstractParamsPanel.__name__ = true;
inter_AbstractParamsPanel.__interfaces__ = [inter_IParamsPanel];
inter_AbstractParamsPanel.__super__ = inter_AbstractEvent;
inter_AbstractParamsPanel.prototype = $extend(inter_AbstractEvent.prototype,{
	setData: function(data) {
		this.particleData = data;
	}
	,getData: function() {
		return this.particleData;
	}
	,setLife: function(life) {
	}
	,setMass: function(mass) {
	}
	,setPosition: function(x,y) {
	}
	,setVelocity: function(x,y) {
	}
	,setRotation: function(r) {
	}
	,setVelocityRotation: function(v) {
	}
	,setSize: function(width,height) {
	}
	,setColor: function(color) {
	}
	,setName: function(name) {
	}
	,getLife: function() {
		return 0;
	}
	,getMass: function() {
		return 0;
	}
	,getPosition: function() {
		return null;
	}
	,getVelocity: function() {
		return null;
	}
	,getRotation: function() {
		return 0;
	}
	,getVelocityRotation: function() {
		return 0;
	}
	,getSize: function() {
		return null;
	}
	,getColor: function() {
		return 0;
	}
});
var component_ParamsPanel = function(dom) {
	inter_AbstractParamsPanel.call(this,dom);
	this.txt_name = dom.find("#txt_name").find("span");
	this.slr_life = dom.find("#slr_life");
	this.slr_mass = dom.find("#slr_mass");
	this.slr_rot = dom.find("#slr_rot");
	this.slr_vel_rot = dom.find("#slr_vel_rot");
	this.slr_size_x = dom.find("#slr_size_x");
	this.slr_size_y = dom.find("#slr_size_y");
	this.slr_pos_x = dom.find("#slr_pos_x");
	this.slr_pos_y = dom.find("#slr_pos_y");
	this.slr_vel_x = dom.find("#slr_vel_x");
	this.slr_vel_y = dom.find("#slr_vel_y");
	this.slr_life.slider({ onChange : this.onSlrChange(component_EParticleAttribute.LEFT_TIME)});
	this.slr_mass.slider({ onChange : this.onSlrChange(component_EParticleAttribute.MASS)});
	this.slr_rot.slider({ onChange : this.onSlrChange(component_EParticleAttribute.POSITION_R)});
	this.slr_vel_rot.slider({ onChange : this.onSlrChange(component_EParticleAttribute.VELOCITY_R)});
	this.slr_size_x.slider({ onChange : this.onSlrChange(component_EParticleAttribute.SIZE_X)});
	this.slr_size_y.slider({ onChange : this.onSlrChange(component_EParticleAttribute.SIZE_Y)});
	this.slr_pos_x.slider({ onChange : this.onSlrChange(component_EParticleAttribute.POSITION_X)});
	this.slr_pos_y.slider({ onChange : this.onSlrChange(component_EParticleAttribute.POSITION_Y)});
	this.slr_vel_x.slider({ onChange : this.onSlrChange(component_EParticleAttribute.VELOCITY_X)});
	this.slr_vel_y.slider({ onChange : this.onSlrChange(component_EParticleAttribute.VELOCITY_Y)});
};
component_ParamsPanel.__name__ = true;
component_ParamsPanel.__super__ = inter_AbstractParamsPanel;
component_ParamsPanel.prototype = $extend(inter_AbstractParamsPanel.prototype,{
	setData: function(data) {
		inter_AbstractParamsPanel.prototype.setData.call(this,data);
		this.setName(data.id);
		this.setPosition(data.pos[0],data.pos[1]);
		this.setVelocity(data.vel[0],data.vel[1]);
		this.setRotation(data.pos[2]);
		this.setVelocityRotation(data.vel[2]);
		this.setLife(data.lifetime);
		this.setMass(data.mass);
		this.setSize(data.size[0],data.size[1]);
	}
	,setVelocity: function(x,y) {
		this.slr_vel_x.slider("setValue",x);
		this.slr_vel_y.slider("setValue",y);
	}
	,setName: function(name) {
		this.txt_name.html(name);
	}
	,setColor: function(color) {
	}
	,setLife: function(life) {
		this.slr_life.slider("setValue",life);
	}
	,setMass: function(mass) {
		this.slr_mass.slider("setValue",mass);
	}
	,setPosition: function(x,y) {
		this.slr_pos_x.slider("setValue",x);
		this.slr_pos_y.slider("setValue",y);
	}
	,setRotation: function(r) {
		this.slr_rot.slider("setValue",r);
	}
	,setSize: function(width,height) {
		this.slr_size_x.slider("setValue",width);
		this.slr_size_y.slider("setValue",height);
	}
	,setVelocityRotation: function(v) {
		this.slr_vel_rot.slider("setValue",v);
	}
	,onSlrChange: function(particleAttr) {
		var _g = this;
		return function(newv,oldv) {
			var target = $(this);
			var value = target.slider("getValue");
			console.log(_g.getData());
			switch(particleAttr[1]) {
			case 0:
				Reflect.setField(_g.getData(),"lifetime",value);
				break;
			case 8:
				Reflect.setField(_g.getData(),"mass",value);
				break;
			case 3:
				Reflect.field(_g.getData(),"pos")[2] = value;
				break;
			case 1:
				Reflect.field(_g.getData(),"pos")[0] = value;
				break;
			case 2:
				Reflect.field(_g.getData(),"pos")[1] = value;
				break;
			case 9:
				Reflect.field(_g.getData(),"size")[0] = value;
				break;
			case 10:
				Reflect.field(_g.getData(),"size")[1] = value;
				break;
			case 6:
				Reflect.field(_g.getData(),"vel")[2] = value;
				break;
			case 4:
				Reflect.field(_g.getData(),"vel")[0] = value;
				break;
			case 5:
				Reflect.field(_g.getData(),"vel")[1] = value;
				break;
			default:
			}
		};
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
	,outputData: function() {
		return null;
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
			_g.trigger(component_Tree.ON_TREE_NODE_CLICK,{ node : node});
		}, onDrop : function(target,source,point) {
			console.log(target);
			console.log(source);
			console.log(point);
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
	,outputData: function() {
		var retobj = { };
		var _loopNode;
		var _loopNode1 = null;
		_loopNode1 = function(node,outputData) {
			var particleData = node.particleData;
			outputData.id = particleData.id;
			outputData.lifetime = particleData.lifetime;
			outputData.vel = particleData.vel;
			outputData.pos = particleData.pos;
			outputData.mass = particleData.mass;
			outputData.color = particleData.color;
			if(node.children && node.children.length > 0) {
				outputData.emit = { prototype : []};
				var _g1 = 0;
				var _g = node.children.length;
				while(_g1 < _g) {
					var i = _g1++;
					var obj = { };
					outputData.emit.prototype.push(obj);
					_loopNode1(node.children[i],obj);
				}
			}
		};
		_loopNode = _loopNode1;
		_loopNode(this.findNode("root"),retobj);
		return retobj;
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
		if(node && node.domId != "_easyui_tree_1") {
			this.getDom().tree("remove",node.target);
			this.trigger(component_Tree.REMOVE_NODE,{ node : node});
		}
	}
	,addNode: function(parentNode,particleData,type,name) {
		if(parentNode && (parentNode.domId == "_easyui_tree_1" || parentNode.type == component_EParticleType.EMITTER)) {
			var nodes = [{ id : particleData.id, text : name, type : type, particleData : particleData}];
			this.getDom().tree("append",{ parent : parentNode.target, data : nodes});
			this.trigger(component_Tree.ADD_NODE,{ parentNode : parentNode, particleData : particleData});
		}
	}
});
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
component_Tree.REMOVE_NODE = "remove_node";
component_Tree.ON_TREE_NODE_CLICK = "on_tree_node_click";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=haxe.js.map