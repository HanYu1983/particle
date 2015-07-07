(function (console) { "use strict";
var Main = function() {
	this.j = $;
	this.container_params = this.j("#params");
	var panel = this.j(".panel");
	panel.accordion({ heightStyle : "content"});
	var slider = this.j(".slider");
	slider.slider();
	this.createParams(new component_Params("px","c"));
	this.createParams(new component_Params("py","c"));
};
Main.main = function() {
	new Main();
};
Main.prototype = {
	deleteParams: function(params) {
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
};
var component_IParams = function() { };
var component_ISubParams = function() { };
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
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
