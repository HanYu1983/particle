(function (console) { "use strict";
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
		this.tree = new component_Tree(this.j("#tree_particle"));
		this.tree.init();
		this.tree.addEmitter(null,"root");
		this.createParams(new component_Params("px","c"));
		this.createParams(new component_Params("py","c"));
		this.initContextMenu();
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
	,deleteParams: function(params) {
		params.dom.remove();
	}
	,createParams: function(params) {
		params.dom.appendTo(this.container_params);
		params.event.on("onParamsActEvent",$bind(this,this.onParamsActEvent));
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
	,initContextMenu: function() {
		var _g = this;
		var copyDom = null;
		this.j.contextMenu("destroy","li");
		this.j.contextMenu({ selector : "li", callback : function(key,options) {
			var target = Reflect.field(options,"$trigger");
			var id = target.attr("id");
			var isEmitter = target.attr("e_type") == "emitter";
			var isRoot = id == "root";
			console.log(id);
			console.log(isEmitter);
			switch(key) {
			case "cut":
				copyDom = _g.tree.cut(id);
				console.log(copyDom);
				break;
			case "copy":
				copyDom = _g.tree.copy(id);
				console.log(copyDom);
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
	moveParticle: function(id,x,y) {
		this.notify("edit-particle",{ id : id, pos : [x,y,0]});
	}
	,setParticle: function(id,x,y,vx,vy,color,mass,size) {
		this.notify("edit-particle",{ id : id, pos : [x,y,0], vel : [vx,vy,0], color : color, mass : mass, size : size});
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
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var component_IDom = function() { };
component_IDom.__name__ = true;
var component_IParams = function() { };
component_IParams.__name__ = true;
var component_ISubParams = function() { };
component_ISubParams.__name__ = true;
var component_ITree = function() { };
component_ITree.__name__ = true;
component_ITree.__interfaces__ = [component_IDom];
var component_Params = function(type,easingType,extra) {
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
		if(this.type == "c") this.createColorPicker(subdom);
	}
	,onInputEasingTypeChange: function(e) {
		var target = e.currentTarget;
		this.easingType = target.value;
		this.subParams.setEasingType(this.easingType);
		var subdom = this.subParams.dom;
		this.subContainer.empty();
		this.subContainer.append(subdom);
		if(this.type == "c") this.createColorPicker(subdom);
	}
	,createColorPicker: function(colordom) {
		if(this.type == "c") colordom.colorpicker({ parts : "full", alpha : true, showOn : "both", buttonColorize : true, showNoneButton : true});
	}
	,onDelegate: function(e) {
		this.event.trigger("onParamsActEvent",{ id : e.currentTarget.id, target : this});
	}
};
var component_SubParams = function(type,easingType,extra) {
	this.j = $;
	this.type = type;
	this.easingType = easingType;
	this.extra = extra;
	this.event = this.j("<div></div>");
	this.setEasingType(easingType);
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
		switch(easingType) {
		case "c":
			tmplName = this.getConstName();
			break;
		case "l":
			tmplName = this.getLinearName();
			break;
		case "r":
			tmplName = this.getLinearName();
			break;
		case "cus":
			tmplName = "tmpl_detail";
			break;
		default:
			tmplName = "";
		}
		if(this.dom != null) this.dom.remove();
		this.dom = this.j("#" + tmplName).tmpl();
	}
	,copy: function() {
		return new component_SubParams(this.easingType,this.extra);
	}
	,getConstName: function() {
		if(this.type == "c") return "tmpl_const_color"; else return "tmpl_const";
	}
	,getLinearName: function() {
		if(this.type == "c") return "tmpl_linear_color"; else return "tmpl_linear";
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
		this.dom.treeview({ animated : "fast"});
	}
	,addEmitter: function(parentName,name) {
		var parentDom = this.findParent(parentName);
		var dom = this.j("<li id=\"" + name + "\" e_type=\"emitter\"><span class=\"folder\">" + name + "_emitter</span><ul id=\"" + name + "_container\"></ul></li>");
		parentDom.prepend(dom);
		this.addToTree(dom);
		this.addParticle(name,name);
		OnView.inst.setParticle(name,0,0,0,0,[1,0,0,1],1,[10,10]);
	}
	,addParticle: function(parentName,name) {
		var parentDom = this.findParent(parentName);
		var dom = this.j("<li id=\"" + name + "_particle\" e_type=\"particle\"><span class=\"file\">" + name + "_particle</span></li>");
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
		this.dom.treeview({ add : dom});
	}
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