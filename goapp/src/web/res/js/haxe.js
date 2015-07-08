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
};
Main.__name__ = true;
Main.main = function() {
	new Main();
};
Main.prototype = {
	start: function() {
		this.container_params = this.j("#params");
		this.tree_particle = this.j("#tree_particle");
		var panel = this.j(".panel");
		panel.accordion({ heightStyle : "content"});
		this.paramsPanel = new component_ParamsPanel(this.container_params);
		this.tree = new component_Tree(this.j("#tree_particle"));
		this.tree.init();
		this.tree.addEmitter(null,"root");
		this.initContextMenu();
		this.addListener();
	}
	,addListener: function() {
		var _g = this;
		this.j("body").mousemove($bind(this,this.onMousemove));
		this.tree.dom.on("onParticleClick",function(evt,params) {
			var pid = params.id;
			var pobj = OnView.inst.findParticle(pid);
			_g.paramsPanel.createParamsByParticle(pobj);
		});
	}
	,onMousemove: function(e) {
		var px = e.clientX;
		var py = e.clientY;
		OnView.inst.moveParticle("root",px,py);
	}
	,initContextMenu: function() {
		var _g = this;
		var copyDom = null;
		this.j.contextMenu("destroy","li");
		this.j.contextMenu({ selector : "li", callback : function(key,options) {
			var target = Reflect.field(options,"$trigger");
			var id = target.attr("id");
			var isEmitter = target.attr("e_type") == "emitter";
			var isRoot = id == "root";
			haxe_Log.trace(id,{ fileName : "Main.hx", lineNumber : 76, className : "Main", methodName : "initContextMenu"});
			haxe_Log.trace(isEmitter,{ fileName : "Main.hx", lineNumber : 77, className : "Main", methodName : "initContextMenu"});
			switch(key) {
			case "cut":
				copyDom = _g.tree.cut(id);
				haxe_Log.trace(copyDom,{ fileName : "Main.hx", lineNumber : 81, className : "Main", methodName : "initContextMenu"});
				break;
			case "copy":
				copyDom = _g.tree.copy(id);
				haxe_Log.trace(copyDom,{ fileName : "Main.hx", lineNumber : 84, className : "Main", methodName : "initContextMenu"});
				break;
			case "paste":
				if(copyDom == null) {
					js_Browser.alert("沒有復制粒子");
					return;
				}
				_g.tree.paste(id,copyDom);
				copyDom = null;
				break;
			case "delete":
				if(isRoot) {
					js_Browser.alert("無法刪除元發射器");
					return;
				}
				_g.tree.removeParticle(id);
				break;
			case "addParticle":
				if(!isEmitter) {
					js_Browser.alert("粒子無法增加粒子");
					return;
				}
				_g.tree.addParticle(id,Math.ceil(Math.random() * 10000) + "");
				break;
			case "addEmitter":
				if(!isEmitter) {
					js_Browser.alert("粒子無法增加粒子");
					return;
				}
				_g.tree.addEmitter(id,Math.ceil(Math.random() * 10000) + "");
				break;
			default:
			}
		}, items : { addParticle : { name : "Add Particle", icon : "add"}, addEmitter : { name : "Add Emitter", icon : "add"}, 'delete' : { name : "Delete Particle", icon : "delete"}, copy : { name : "Copy", icon : "copy"}, paste : { name : "Paste", icon : "paste"}, cut : { name : "Cut", icon : "cut"}}});
	}
};
Math.__name__ = true;
var OnView = function() {
	this.onViewObj = common.onView;
};
OnView.__name__ = true;
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
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
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
var component_EasingType = { __ename__ : true, __constructs__ : ["CONST","LINEAR"] };
component_EasingType.CONST = ["CONST",0];
component_EasingType.CONST.toString = $estr;
component_EasingType.CONST.__enum__ = component_EasingType;
component_EasingType.LINEAR = ["LINEAR",1];
component_EasingType.LINEAR.toString = $estr;
component_EasingType.LINEAR.__enum__ = component_EasingType;
var component_IDom = function() { };
component_IDom.__name__ = true;
var component_IParams = function() { };
component_IParams.__name__ = true;
var component_ISubParams = function() { };
component_ISubParams.__name__ = true;
var component_ITree = function() { };
component_ITree.__name__ = true;
component_ITree.__interfaces__ = [component_IDom];
var component_Params = function(type,easingType,initValue,extra) {
	this.j = $;
	this.type = type;
	this.easingType = easingType;
	this.extra = extra;
	this.event = this.j("<div></div>");
	this.dom = this.j("#tmpl_params").tmpl({ type : type, easingType : easingType});
	this.subContainer = this.dom.find(".subContainer");
	this.subParams = new component_SubParams(type,easingType);
	this.subContainer.append(this.subParams.dom);
	this.input_type = this.dom.find("#input_type");
	this.input_easingType = this.dom.find("#input_easingType");
	this.input_type.change($bind(this,this.onInputTypeChange));
	this.input_easingType.change($bind(this,this.onInputEasingTypeChange));
	this.dom.delegate("button","click",$bind(this,this.onDelegate));
	this.setValue(0,initValue);
	this.addInputListener();
};
component_Params.__name__ = true;
component_Params.__interfaces__ = [component_IParams];
component_Params.prototype = {
	copy: function() {
		return new component_Params(this.type,this.easingType,this.extra);
	}
	,onInputTypeChange: function(e) {
		var target = e.currentTarget;
		this.type = target.value;
		this.subParams.setType(this.type);
		var subdom = this.subParams.dom;
		this.subContainer.empty();
		this.subContainer.append(subdom);
		if(this.type == component_ParticleAttribute.COLOR) this.createColorPicker(subdom);
		this.addInputListener();
	}
	,onInputEasingTypeChange: function(e) {
		var target = e.currentTarget;
		this.easingType = Type.createEnum(component_EasingType,target.value);
		this.subParams.setEasingType(this.easingType);
		var subdom = this.subParams.dom;
		this.subContainer.empty();
		this.subContainer.append(subdom);
		if(this.type == component_ParticleAttribute.COLOR) this.createColorPicker(subdom);
		this.addInputListener();
	}
	,createColorPicker: function(colordom) {
		if(this.type == component_ParticleAttribute.COLOR) colordom.colorpicker({ parts : "full", alpha : true, showOn : "both", buttonColorize : true, showNoneButton : true});
	}
	,setValue: function(pos,val) {
		this.dom.find(".input_params").eq(pos).val(val);
	}
	,addInputListener: function() {
		this.dom.find(".input_params").change($bind(this,this.onInputParamsChange));
	}
	,onDelegate: function(e) {
		this.event.trigger("onParamsActEvent",{ id : e.currentTarget.id, target : this});
	}
	,onInputParamsChange: function(e) {
		var targetDom = this.j(e.currentTarget);
		var input_pos = targetDom.attr("input_pos");
		var val = targetDom.val();
		this.event.trigger("onParamsChangeEvent",{ pos : input_pos, type : this.type, val : val});
	}
};
var component_ParamsPanel = function(dom) {
	this.j = $;
	this.dom = dom;
	this.params_container = this.dom.find("#params_container");
	this.input_age = this.dom.find("#input_age");
	this.input_age.change($bind(this,this.onInputAgeChange));
};
component_ParamsPanel.__name__ = true;
component_ParamsPanel.__interfaces__ = [component_IDom];
component_ParamsPanel.prototype = {
	createParamsByParticle: function(obj) {
		this.particle_object = obj;
		this.clearParams();
		this.setLifetime(this.particle_object.lifetime);
		var _g = 0;
		var _g1 = Reflect.fields(obj);
		while(_g < _g1.length) {
			var k = _g1[_g];
			++_g;
			switch(k) {
			case "pos":
				this.createParams(new component_Params(component_ParticleAttribute.POSITION_X,component_EasingType.CONST,this.particle_object.pos[0]));
				this.createParams(new component_Params(component_ParticleAttribute.POSITION_Y,component_EasingType.CONST,this.particle_object.pos[1]));
				break;
			case "vel":
				this.createParams(new component_Params(component_ParticleAttribute.VELOCITY_X,component_EasingType.CONST,this.particle_object.vel[0]));
				this.createParams(new component_Params(component_ParticleAttribute.VELOCITY_Y,component_EasingType.CONST,this.particle_object.vel[1]));
				break;
			}
		}
	}
	,setLifetime: function(val) {
		this.input_age.val(val);
	}
	,deleteParams: function(params) {
		params.dom.remove();
	}
	,createParams: function(params) {
		params.dom.appendTo(this.params_container);
		params.event.on("onParamsActEvent",$bind(this,this.onParamsActEvent));
		params.event.on("onParamsChangeEvent",$bind(this,this.onParamsChangeEvent));
	}
	,clearParams: function() {
		this.params_container.empty();
	}
	,onParamsActEvent: function(e,params) {
		var target = params.target;
		var _g = params.id;
		switch(_g) {
		case "btn_add":
			var extra = target.extra;
			extra.isParams = true;
			var copy = new component_Params(target.type,target.easingType,extra);
			this.createParams(copy);
			break;
		case "btn_copy":
			this.createParams(target.copy());
			break;
		case "btn_delete":
			this.deleteParams(target);
			break;
		}
	}
	,onParamsChangeEvent: function(e,params) {
		var pos = params.pos;
		var val = params.val;
		var type = params.type;
		switch(type[1]) {
		case 1:
			this.particle_object.pos[0] = val;
			break;
		case 2:
			this.particle_object.pos[1] = val;
			break;
		case 3:
			this.particle_object.vel[0] = val;
			break;
		case 4:
			this.particle_object.vel[1] = val;
			break;
		case 5:
			break;
		default:
		}
		haxe_Log.trace(this.particle_object,{ fileName : "ParamsPanel.hx", lineNumber : 93, className : "component.ParamsPanel", methodName : "onParamsChangeEvent"});
		OnView.inst.updateParticleRoot();
	}
	,onInputAgeChange: function(e) {
		this.particle_object.lifetime = this.input_age.val();
		OnView.inst.updateParticleRoot();
	}
};
var component_ParticleAttribute = { __ename__ : true, __constructs__ : ["LEFT_TIME","POSITION_X","POSITION_Y","VELOCITY_X","VELOCITY_Y","COLOR","MASS","SIZE"] };
component_ParticleAttribute.LEFT_TIME = ["LEFT_TIME",0];
component_ParticleAttribute.LEFT_TIME.toString = $estr;
component_ParticleAttribute.LEFT_TIME.__enum__ = component_ParticleAttribute;
component_ParticleAttribute.POSITION_X = ["POSITION_X",1];
component_ParticleAttribute.POSITION_X.toString = $estr;
component_ParticleAttribute.POSITION_X.__enum__ = component_ParticleAttribute;
component_ParticleAttribute.POSITION_Y = ["POSITION_Y",2];
component_ParticleAttribute.POSITION_Y.toString = $estr;
component_ParticleAttribute.POSITION_Y.__enum__ = component_ParticleAttribute;
component_ParticleAttribute.VELOCITY_X = ["VELOCITY_X",3];
component_ParticleAttribute.VELOCITY_X.toString = $estr;
component_ParticleAttribute.VELOCITY_X.__enum__ = component_ParticleAttribute;
component_ParticleAttribute.VELOCITY_Y = ["VELOCITY_Y",4];
component_ParticleAttribute.VELOCITY_Y.toString = $estr;
component_ParticleAttribute.VELOCITY_Y.__enum__ = component_ParticleAttribute;
component_ParticleAttribute.COLOR = ["COLOR",5];
component_ParticleAttribute.COLOR.toString = $estr;
component_ParticleAttribute.COLOR.__enum__ = component_ParticleAttribute;
component_ParticleAttribute.MASS = ["MASS",6];
component_ParticleAttribute.MASS.toString = $estr;
component_ParticleAttribute.MASS.__enum__ = component_ParticleAttribute;
component_ParticleAttribute.SIZE = ["SIZE",7];
component_ParticleAttribute.SIZE.toString = $estr;
component_ParticleAttribute.SIZE.__enum__ = component_ParticleAttribute;
var component_SubParams = function(type,easingType,extra) {
	this.j = $;
	this.type = type;
	this.easingType = easingType;
	this.extra = extra;
	this.event = this.j("<div></div>");
	this.setEasingType(easingType);
	haxe_Log.trace("easingType",{ fileName : "SubParams.hx", lineNumber : 25, className : "component.SubParams", methodName : "new", customParams : [easingType]});
};
component_SubParams.__name__ = true;
component_SubParams.__interfaces__ = [component_ISubParams];
component_SubParams.prototype = {
	setType: function(type) {
		this.type = type;
		this.setEasingType(this.easingType);
	}
	,setEasingType: function(easingType) {
		this.easingType = easingType;
		var tmplName;
		switch(easingType[1]) {
		case 0:
			tmplName = this.getConstName();
			break;
		case 1:
			tmplName = this.getLinearName();
			break;
		}
		haxe_Log.trace(easingType,{ fileName : "SubParams.hx", lineNumber : 41, className : "component.SubParams", methodName : "setEasingType"});
		if(this.dom != null) this.dom.remove();
		this.dom = this.j("#" + tmplName).tmpl();
	}
	,copy: function() {
		return new component_SubParams(this.type,this.easingType,this.extra);
	}
	,getConstName: function() {
		if(this.type == component_ParticleAttribute.COLOR) return "tmpl_const_color"; else return "tmpl_const";
	}
	,getLinearName: function() {
		if(this.type == component_ParticleAttribute.COLOR) return "tmpl_linear_color"; else return "tmpl_linear";
	}
};
var component_Tree = function(dom) {
	this.j = $;
	this.dom = dom;
};
component_Tree.__name__ = true;
component_Tree.__interfaces__ = [component_ITree];
component_Tree.prototype = {
	init: function() {
	}
	,addEmitter: function(parentName,name) {
		var parentDom = this.findParent(parentName);
		var dom = this.j("<li id=\"" + name + "\" e_type=\"emitter\"><span class=\"folder\">" + name + "_emitter</span><ul id=\"" + name + "_container\"></ul></li>");
		dom.click($bind(this,this.onParticleClick));
		parentDom.prepend(dom);
		this.addToTree(dom);
		this.addParticle(name,name);
		OnView.inst.setObject();
	}
	,addParticle: function(parentName,name) {
		var parentDom = this.findParent(parentName);
		var dom = this.j("<li id=\"" + name + "_particle\" e_type=\"particle\"><span class=\"file\">" + name + "_particle</span></li>");
		dom.click($bind(this,this.onParticleClick));
		parentDom.prepend(dom);
		this.addToTree(dom);
	}
	,removeParticle: function(name) {
		var removeDom = this.dom.find("#" + name);
		removeDom.remove();
	}
	,copy: function(name) {
		var copyDom = this.dom.find("#" + name).clone();
		copyDom.attr("id",Std.string(copyDom.attr("id")) + "_copy");
		return copyDom;
	}
	,paste: function(parentName,pasteDom) {
		var parentDom = this.findParent(parentName);
		parentDom.prepend(pasteDom);
		this.addToTree(pasteDom);
	}
	,cut: function(name) {
		var cutDom = this.dom.find("#" + name);
		return cutDom;
	}
	,findParent: function(parentName) {
		if(parentName == null) return this.dom; else switch(parentName) {
		default:
			return this.dom.find("#" + parentName + "_container");
		}
	}
	,addToTree: function(dom) {
	}
	,onParticleClick: function(e) {
		e.stopPropagation();
		this.unfocusParticle();
		var targetDom = this.j(e.currentTarget);
		this.focusParticle(targetDom);
		this.dom.trigger("onParticleClick",{ id : targetDom.attr("id")});
	}
	,focusParticle: function(jdom) {
		jdom.find("> span").addClass("particle_focus");
	}
	,unfocusParticle: function() {
		this.dom.find("li span").removeClass("particle_focus");
	}
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
OnView.inst = new OnView();
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=haxe.js.map