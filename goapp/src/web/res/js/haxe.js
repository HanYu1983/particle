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
Lambda.fold = function(it,f,first) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		first = f(x,first);
	}
	return first;
};
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
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
	this.currentPos = [0.0,0.0];
	this.targetPos = [0.0,0.0];
	this.isMouseDown = false;
	this.model = new model_PanelModel();
	this.paramsView = new view_ParamsView();
	this.menuController = new view_MenuController();
	this.fileController = new view_FileController();
	this.gridController = new view_GridController();
	this.treeController = new view_TreeController();
	this.canvas_container = Main.j("#canvas_container");
	this.webgl = Main.j("#webgl");
	this.onResize(null);
	this.webgl.mousedown($bind(this,this.onmousedown));
	this.webgl.mouseup($bind(this,this.onmouseup));
	this.webgl.mousemove($bind(this,this.onMousemove));
	Reflect.setField(window,"haxeStart",$bind(this,this.haxeStart));
	Reflect.setField(window,"notifyFromHtml",$bind(this,this.notifyFromHtml));
};
Main.__name__ = true;
Main.createNewEmit = function() {
	return { count : 1, duration : 0.5, angle : 0, range : 0, force : 0};
};
Main.engToChinese = function(eng) {
	switch(eng) {
	case "x":
		return "位置x";
	case "y":
		return "位置y";
	case "angle":
		return "角度";
	case "vx":
		return "速度x";
	case "vy":
		return "速度y";
	case "vr":
		return "旋轉速度";
	case "scale-x":
		return "粒子寬度";
	case "scale-y":
		return "粒子高度";
	case "r":
		return "紅";
	case "g":
		return "綠";
	case "b":
		return "藍";
	case "a":
		return "alpha";
	case "emit-count":
		return "發射數目";
	case "emit-duration":
		return "週期毫秒";
	case "emit-angle":
		return "發射角度";
	case "emit-range":
		return "發射範圍";
	case "emit-force":
		return "發射力道";
	default:
		return "";
	}
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
	return leo.utils.generateUUID();
};
Main.clearParticle = function() {
	api.clearParticle();
};
Main.changeBgColor = function(r,g,b) {
	api.changeBgColor(r,g,b);
};
Main.updateParticle = function(ary_render) {
	Lambda.foreach(ary_render,function(render) {
		api.editParticle(render);
		return true;
	});
};
Main.moveParticle = function(id,x,y) {
	api.changeCenterPos(id,x,y);
};
Main.addEventListener = function(listener) {
	api.addEventListener(listener);
};
Main.getInfo = function(cb) {
	api.info(cb);
};
Main.addTexture = function(id,img) {
	api.addTexture(id,img);
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
	notifyFromHtml: function(type,param) {
		var paramobj = JSON.parse(param);
		switch(type) {
		case "onBtnImportClick":
			this.menuController.openImport("import");
			break;
		case "onBtnExportClick":
			this.menuController.openImport("export",JSON.stringify(this.model.getRenderList()));
			break;
		case "onBtnAboutClick":
			this.menuController.openAbout();
			break;
		}
	}
	,haxeStart: function() {
		var _g = this;
		this.treeController.set_config({ btn_addTreeNode : Main.j("#btn_addTreeNode"), btn_removeTreeNode : Main.j("#btn_removeTreeNode"), tree_particle : Main.j("#tree_particle")});
		this.treeController.addHandler(function(type,params) {
			switch(type) {
			case "ON_BTN_REMOVE_TREE_NODE_CLICK":
				var selectItem = _g.treeController.getSelectItem();
				_g.model.removeParticle(selectItem.id);
				break;
			case "ON_BTN_ADD_TREE_NODE_CLICK":
				var newId = Main.getId();
				var parentItem = _g.treeController.getSelectItem();
				_g.model.addParticle(newId,parentItem.id,_g.createNewParticle(newId));
				break;
			case "ON_TREE_NODE_CLICK":
				var item = params.item;
				_g.model.set_currentParticle(_g.model.findParticleById(item.id).particle);
				_g.paramsView.setValues(_g.model.findParticleById(item.id),item.hasItems);
				_g.gridController.initRow(item.id,_g.model.findParticleById(item.id).particle.formulaList);
				break;
			}
		});
		this.gridController.set_config({ table_props : Main.j("#table_props"), btn_addDynamic : Main.j("#btn_addDynamic"), btn_removeDynamic : Main.j("#btn_removeDynamic"), btn_moveUp : Main.j("#btn_moveUp"), btn_moveDown : Main.j("#btn_moveDown"), combo_props : Main.j("#combo_props"), combo_dtype : Main.j("#combo_dtype"), spr_value1 : Main.j("#spr_value1"), spr_value2 : Main.j("#spr_value2"), spr_value3 : Main.j("#spr_value3"), spr_value4 : Main.j("#spr_value4"), spr_value5 : Main.j("#spr_value5")});
		this.gridController.addHandler(function(type1,params1) {
			switch(type1) {
			case "ON_BTN_MOVE_CLICK":
				_g.model.moveFormula(_g.model.currentParticle.id,params1.fid,params1.updown);
				break;
			case "ON_FORMULA_CHANGE":
				if(_g.gridController.currentRow == null) return;
				_g.model.setFormulaById(_g.gridController.currentParticleId,_g.gridController.currentRow.uid,params1.values);
				break;
			case "ON_ROW_SELECT":
				if(_g.gridController.currentRow == null) return;
				_g.gridController.setTxtValue1(params1.row.value1);
				_g.gridController.setTxtValue2(params1.row.value2);
				_g.gridController.setTxtValue3(params1.row.value3);
				_g.gridController.setTxtValue4(params1.row.value4);
				_g.gridController.setTxtValue5(params1.row.value5);
				_g.gridController.setSelectProp(params1.row.ptype);
				_g.gridController.setSelectMethod(params1.row.method);
				break;
			case "ON_ADD_CLICK":
				_g.model.addFormula(params1.id,_g.createFormula(Main.getId(),"x","randStartAdd",0,0,0,0,0));
				break;
			case "ON_REMOVE_CLICK":
				if(_g.gridController.currentRow == null) return;
				_g.model.removeFormula(_g.gridController.currentParticleId,_g.gridController.currentRow.uid);
				break;
			}
		});
		this.paramsView.addHandler(function(type2,params2) {
			switch(type2) {
			case "ON_BACK_COLOR_CHANGE":
				var color = params2.color;
				Main.changeBgColor(color.r / 255,color.g / 255,color.b / 255);
				break;
			case "ON_COLOR_CHANGE":
				_g.model.setParticleColor(_g.model.currentParticle.id,params2.color);
				break;
			case "ON_BLEND_CHANGE":
				_g.model.setParticleBlendMode(_g.model.currentParticle.id,params2.blend);
				break;
			case "ON_PROP_CHANGE":
				_g.model.setParticleProps(params2.id,params2.proptype,params2.value);
				break;
			case "ON_TXT_NAME_CHANGE":
				_g.model.setParticleName(params2.id,params2.name);
				break;
			}
		});
		this.paramsView.set_config({ root : Main.j("#mc_props_container"), btn_confirmName : Main.j("#btn_confirmName"), txt_name : Main.j("#txt_name"), color_color : Main.j("#color_color"), color_background : Main.j("#color_background"), txt_count : Main.j("#txt_count"), combo_blend : Main.j("#combo_blend")});
		this.fileController.set_config({ file_upload : Main.j("#file_upload"), mc_textContainer : Main.j("#mc_textContainer"), btn_removeTexture : Main.j("#btn_removeTexture")});
		this.fileController.addHandler(function(type3,params3) {
			switch(type3) {
			case "ON_TEXTURE_CLICK":
				_g.model.setParticleTextureId(_g.model.currentParticle.id,params3.textureId);
				break;
			case "ON_BTN_REMOVE_TEXTURE_CLICK":
				_g.model.setParticleTextureId(_g.model.currentParticle.id,"");
				break;
			}
		});
		this.menuController.set_config({ win_import : Main.j("#win_import"), win_about : Main.j("#win_about"), btn_confirm : Main.j("#win_import #btn_confirm")});
		this.menuController.addHandler(function(type4,params4) {
			switch(type4) {
			case "ON_IMPORT_CLICK":
				_g.model.clearAll();
				_g.model.set_config(JSON.parse(params4.config));
				Main.clearParticle();
				break;
			}
		});
		this.model.addHandler(function(type5,params5) {
			switch(type5) {
			case "ON_INIT":
				Main.addEventListener(function(info) {
					var _g1 = info[0];
					switch(_g1) {
					case "tick":
						Main.getInfo(function(err,data) {
							if(err == null) {
								if(data.count == 0) Main.updateParticle(_g.model.getOutputData(_g.treeController.getItems()));
								_g.paramsView.setCount(data.count);
							}
						});
						if(Math.abs(_g.targetPos[0] - _g.currentPos[0]) > 1) {
							_g.currentPos[0] += (_g.targetPos[0] - _g.currentPos[0]) * .2;
							_g.currentPos[1] += (_g.targetPos[1] - _g.currentPos[1]) * .2;
							Lambda.foreach(_g.model.getRenderList(),function(render) {
								Main.moveParticle(render.id,_g.currentPos[0],_g.currentPos[1]);
								return true;
							});
						}
						break;
					}
				});
				_g.treeController.selectItem(_g.treeController.getItems()[0].element);
				break;
			case "ON_FORMULA_POS_CHANGE":
				_g.gridController.initRow(_g.model.currentParticle.id,_g.model.currentParticle.formulaList,params5.id);
				break;
			case "ON_TEXTURE_CHANGE":
				_g.fileController.focus(params5.textureId);
				break;
			case "ON_FORMULA_CHANGE":
				_g.gridController.updateRow(params5.formulaId,params5.values);
				break;
			case "ON_ADD_FORMULA":
				_g.gridController.addRow(params5.formula[7],params5.formula);
				break;
			case "ON_REMOVE_FORMULA":
				_g.gridController.removeRowById(params5.formulaId);
				break;
			case "ON_ADD_PARTICLE":
				var _g11 = _g.treeController.getItemById(params5.parentId);
				var parentItem1 = _g11;
				if(_g11 == null) _g.treeController.addToWithLabel(params5.id,params5.particle.name); else switch(_g11) {
				default:
					_g.treeController.addToWithLabel(params5.id,params5.particle.name,parentItem1);
				}
				params5.particle.tex = _g.fileController.getImageIdByPos(0);
				break;
			case "ON_REMOVE_PARTICLE":
				_g.treeController.remove(_g.treeController.getItemById(params5.id).element);
				break;
			case "ON_NAME_CHANGE":
				_g.treeController.setItemName(params5.id,params5.name);
				break;
			case "ON_CURRENT_PARTICLE_CHANGE":
				_g.fileController.focus(_g.model.currentParticle.tex);
				break;
			}
			Main.updateParticle(_g.model.getOutputData(_g.treeController.getItems()));
		});
		Main.getInfo(function(err1,data1) {
			if(err1 == null) {
				var bgColor = data1.bgColor;
				_g.paramsView.setBackgroundColor(bgColor[0],bgColor[1],bgColor[2]);
			}
		});
		var initObj = this.createNewParticle(Main.getId());
		initObj.lifetime = 0;
		initObj.emit.prototype = [this.createNewParticle(Main.getId())];
		var img = new Image();
		img.src = "res/images/white.jpg";
		img.onload = function() {
			_g.fileController.addNewImage(img);
			_g.model.set_config([initObj]);
		};
	}
	,createNewParticle: function(id) {
		return { id : id, name : "粒子", lifetime : 5, mass : 3, color : [1,1,1,1], size : [10,10], pos : [0,0,0], vel : [0,0,0], blending : "normal", tex : "", emit : Main.createNewEmit()};
	}
	,createFormula: function(id,ptype,method,v1,v2,v3,v4,v5) {
		var ary = [];
		ary.push(ptype);
		ary.push(method);
		ary.push(v1);
		ary.push(v2);
		ary.push(v3);
		ary.push(v4);
		ary.push(v5);
		ary.push(id);
		return ary;
	}
	,onResize: function(e) {
		this.webgl.attr("width",this.canvas_container.width());
		this.webgl.attr("height",this.canvas_container.height());
	}
	,onMousemove: function(e) {
		var px = e.offsetX;
		var py = e.offsetY;
		if(this.isMouseDown) {
			this.targetPos[0] = px;
			this.targetPos[1] = py;
		}
	}
	,onmousedown: function(e) {
		this.isMouseDown = true;
	}
	,onmouseup: function(e) {
		this.isMouseDown = false;
	}
};
Math.__name__ = true;
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
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
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
	this._ary_renderList = [];
	this._ary_particles = [];
	model_Model.call(this);
};
model_PanelModel.__name__ = true;
model_PanelModel.__super__ = model_Model;
model_PanelModel.prototype = $extend(model_Model.prototype,{
	addParticle: function(id,parentId,particle,extra) {
		if(this.findParticleById(id)) return;
		this._ary_particles.push({ id : id, particle : particle});
		this.notify(model_PanelModel.ON_ADD_PARTICLE,{ id : id, parentId : parentId, particle : particle});
	}
	,removeParticle: function(id,extra) {
		if(!this.findParticleById(id)) return;
		var x = this.findParticleById(id);
		HxOverrides.remove(this._ary_particles,x);
		this.notify(model_PanelModel.ON_REMOVE_PARTICLE,{ id : id});
	}
	,setParticleTextureId: function(id,tid) {
		if(!this.findParticleById(id)) return;
		this.findParticleById(id).particle.tex = tid;
		this.notify(model_PanelModel.ON_TEXTURE_CHANGE,{ textureId : tid});
	}
	,clearAll: function() {
		var _g = this;
		Lambda.foreach(this._ary_particles,function(obj) {
			_g.removeParticle(obj.particle.id);
			return true;
		});
		this._ary_particles = [];
		this._ary_renderList = [];
	}
	,getRenderList: function() {
		return this._ary_renderList;
	}
	,setParticleBlendMode: function(id,blending) {
		if(!this.findParticleById(id)) return;
		this.findParticleById(id).particle.blending = blending;
		this.notify(model_PanelModel.ON_BLEND_CHANGE,{ blending : blending});
	}
	,setParticleColor: function(id,color) {
		if(!this.findParticleById(id)) return;
		this.findParticleById(id).particle.color[0] = color.r / 255;
		this.findParticleById(id).particle.color[1] = color.g / 255;
		this.findParticleById(id).particle.color[2] = color.b / 255;
		this.notify(model_PanelModel.ON_COLOR_CHANGE);
	}
	,addFormula: function(particleId,formula) {
		if(!this.findParticleById(particleId)) return;
		var particle = this.findParticleById(particleId).particle;
		if(particle.formulaList == null) particle.formulaList = [];
		particle.formulaList.push(formula);
		this.notify(model_PanelModel.ON_ADD_FORMULA,{ formula : formula});
	}
	,moveFormula: function(particleId,formulaId,updown) {
		if(!this.findParticleById(particleId)) return;
		var particle = this.findParticleById(particleId).particle;
		var formula = this.getFormulaById(particleId,formulaId);
		var indexof = particle.formulaList.indexOf(formula);
		switch(updown) {
		case 1:
			if(indexof == particle.formulaList.length - 1) return;
			particle.formulaList.splice(indexof,1);
			Array.prototype.splice.call(particle.formulaList,indexof + 1,0,formula);
			this.notify(model_PanelModel.ON_FORMULA_POS_CHANGE,{ formulaList : particle.formulaList, id : indexof + 1});
			break;
		case -1:
			if(indexof == 0) return;
			particle.formulaList.splice(indexof,1);
			Array.prototype.splice.call(particle.formulaList,indexof - 1,0,formula);
			this.notify(model_PanelModel.ON_FORMULA_POS_CHANGE,{ formulaList : particle.formulaList, id : indexof - 1});
			break;
		}
	}
	,removeFormula: function(particleId,formulaId) {
		if(!this.findParticleById(particleId)) return;
		var particle = this.findParticleById(particleId).particle;
		var formula = this.getFormulaById(particleId,formulaId);
		var f = formula;
		if(formula == null) {
		} else switch(formula.length) {
		default:
			particle.formulaList.splice(Lambda.indexOf(particle.formulaList,f),1);
			this.notify(model_PanelModel.ON_REMOVE_FORMULA,{ formulaId : f[7]});
		}
	}
	,getFormulaById: function(particleId,formulaId) {
		if(!this.findParticleById(particleId)) return null;
		var particle = this.findParticleById(particleId).particle;
		if(particle.formulaList == null) return null;
		return Lambda.find(particle.formulaList,function(formula) {
			if(formula[7] == formulaId) return true;
			return false;
		});
	}
	,setFormulaById: function(particleId,formulaId,values) {
		if(!this.findParticleById(particleId)) return;
		var particle = this.findParticleById(particleId).particle;
		var formula = this.getFormulaById(particleId,formulaId);
		var f = formula;
		if(formula == null) {
		} else switch(formula.length) {
		default:
			f[0] = values[0];
			f[1] = values[1];
			f[2] = values[2];
			f[3] = values[3];
			f[4] = values[4];
			f[5] = values[5];
			f[6] = values[6];
			this.notify(model_PanelModel.ON_FORMULA_CHANGE,{ formulaId : formulaId, values : f});
		}
	}
	,setParticleName: function(id,name) {
		if(!this.findParticleById(id)) return;
		this.findParticleById(id).particle.name = name;
		this.notify(model_PanelModel.ON_NAME_CHANGE,{ id : id, name : name});
	}
	,setParticleRootsPos: function(x,y) {
		var _g = this;
		if(this._ary_renderList.length > 0) {
			Lambda.foreach(this._ary_renderList,function(render) {
				_g.findParticleById(render.id).particle.pos[0] = x;
				_g.findParticleById(render.id).particle.pos[1] = y;
				return true;
			});
			this.notify(model_PanelModel.ON_PROPS_CAHNGE);
		}
	}
	,setParticleProps: function(id,type,value) {
		if(!this.findParticleById(id)) return;
		switch(type) {
		case "alpha":
			this.findParticleById(id).particle.color[3] = value;
			break;
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
		return Lambda.find(this._ary_particles,function(p) {
			if(p.id == id) return true;
			return false;
		});
	}
	,getOutputData: function(node) {
		var _g = this;
		var retobj = { };
		var childMap = { };
		Lambda.foreach(node,function(item) {
			if(item.parentId != null) {
				if(!Object.prototype.hasOwnProperty.call(childMap,item.parentId)) childMap[item.parentId] = [];
				Reflect.field(childMap,item.parentId).push(item.id);
			} else childMap[item.id] = [];
			return true;
		});
		var treeMap = { };
		var getAndSet = function(id) {
			var _g1 = Reflect.field(treeMap,id);
			var _obj = _g1;
			if(_g1 == null) {
				treeMap[id] = { id : id};
				return Reflect.field(treeMap,id);
			} else switch(_g1) {
			default:
				return _obj;
			}
		};
		var _g2 = 0;
		var _g11 = Reflect.fields(childMap);
		while(_g2 < _g11.length) {
			var f = _g11[_g2];
			++_g2;
			var obj = [getAndSet(f)];
			var ary = Reflect.field(childMap,f);
			if(ary.length == 0) continue;
			if(obj[0].children == null) obj[0].children = [];
			Lambda.foreach(ary,(function(obj) {
				return function(str) {
					var subobj = getAndSet(str);
					subobj.parentId = obj[0].id;
					obj[0].children.push(subobj);
					return true;
				};
			})(obj));
		}
		var retobj1 = { };
		var _loopNode;
		var _loopNode1 = null;
		_loopNode1 = function(node1,outputData) {
			var id1 = node1.id;
			var particle = _g.findParticleById(id1).particle;
			outputData.id = particle.id;
			outputData.name = particle.name;
			outputData.lifetime = particle.lifetime;
			outputData.vel = particle.vel;
			outputData.pos = particle.pos;
			outputData.mass = particle.mass;
			outputData.color = particle.color;
			outputData.size = particle.size;
			outputData.tex = particle.tex;
			outputData.blending = particle.blending;
			outputData.formulaList = particle.formulaList;
			if(node1.children && node1.children.length > 0) {
				outputData.emit = { 'prototype' : []};
				outputData.emit.count = particle.emit.count;
				outputData.emit.duration = particle.emit.duration;
				outputData.emit.angle = particle.emit.angle;
				outputData.emit.range = particle.emit.range;
				outputData.emit.force = particle.emit.force;
				var _g21 = 0;
				var _g12 = node1.children.length;
				while(_g21 < _g12) {
					var i = _g21++;
					var obj1 = { };
					outputData.emit.prototype.push(obj1);
					_loopNode1(node1.children[i],obj1);
				}
			}
		};
		_loopNode = _loopNode1;
		this._ary_renderList = [];
		var _g3 = 0;
		var _g13 = Reflect.fields(treeMap);
		while(_g3 < _g13.length) {
			var f1 = _g13[_g3];
			++_g3;
			if(Reflect.field(treeMap,f1).parentId == null) {
				var render = { };
				this._ary_renderList.push(render);
				_loopNode(Reflect.field(treeMap,f1),render);
			}
		}
		return this._ary_renderList;
	}
	,init: function() {
		var _g = this;
		model_Model.prototype.init.call(this);
		var foreachObj;
		var foreachObj1 = null;
		foreachObj1 = function(obj,pid) {
			_g.addParticle(obj.id,pid == null?"999":pid,obj);
			if(obj.emit != null && obj.emit.prototype != null) Lambda.foreach(obj.emit.prototype,function(_obj) {
				foreachObj1(_obj,obj.id);
				return true;
			});
		};
		foreachObj = foreachObj1;
		Lambda.foreach(this.config,function(single) {
			foreachObj(single);
			return true;
		});
		this.notify(model_PanelModel.ON_INIT);
	}
	,set_currentParticle: function(particle) {
		this.currentParticle = particle;
		this.notify(model_PanelModel.ON_CURRENT_PARTICLE_CHANGE);
		return this.currentParticle;
	}
});
var view_FileController = function() {
	this.ary_images = [];
	this.fileview = new view_component_FileView();
	model_Model.call(this);
};
view_FileController.__name__ = true;
view_FileController.__super__ = model_Model;
view_FileController.prototype = $extend(model_Model.prototype,{
	focus: function(id) {
		if(id == "") this.removeAllFocus();
		if(this.getImage(id) == null) return;
		this.removeAllFocus();
		this.getImage(id).addClass("outline");
	}
	,getImage: function(id) {
		return Lambda.find(this.ary_images,function(imgdom) {
			return imgdom.attr("id") == id;
		});
	}
	,getImageIdByPos: function(pos) {
		return this.ary_images[0].attr("id");
	}
	,addNewImage: function(img) {
		window.document.body.appendChild(img);
		var imgDom = Main.j(img);
		imgDom.attr("id",Main.getId());
		imgDom.addClass("textImg");
		this.mc_textContainer.prepend(imgDom);
		this.ary_images.push(imgDom);
		Main.addTexture(imgDom.attr("id"),imgDom[0]);
		this.addListener();
	}
	,init: function() {
		var _g = this;
		model_Model.prototype.init.call(this);
		this.fileview.set_config({ file : this.config.file_upload});
		this.fileview.config.file.on("change",$bind(this,this.handleUpload));
		this.mc_textContainer = this.config.mc_textContainer;
		this.btn_removeTexture = this.config.btn_removeTexture;
		this.btn_removeTexture.click(function() {
			_g.notify(view_FileController.ON_BTN_REMOVE_TEXTURE_CLICK);
		});
	}
	,removeAllFocus: function() {
		Lambda.foreach(this.ary_images,function(imgDom) {
			imgDom.removeClass("outline");
			return true;
		});
	}
	,handleUpload: function(elem) {
		var _g = this;
		var elem1 = this.fileview.config.file[0];
		if(elem1.files && elem1.files[0]) loadImage.parseMetaData(elem1.files[0],function(data) {
			var orientation;
			if(data.exif) orientation = data.exif.get("Orientation"); else orientation = 1;
			loadImage(elem1.files[0],function(img) {
				_g.addNewImage(img);
			});
		});
	}
	,addListener: function() {
		var _g = this;
		Lambda.foreach(this.ary_images,function(imgDom) {
			imgDom.off("click");
			imgDom.click(function(e) {
				var jdom = Main.j(e.currentTarget);
				_g.focus(jdom.attr("id"));
				_g.notify(view_FileController.ON_TEXTURE_CLICK,{ textureId : jdom.attr("id")});
			});
			return true;
		});
	}
});
var view_GridController = function() {
	this.grid = new view_component_GridView();
	model_Model.call(this);
};
view_GridController.__name__ = true;
view_GridController.__super__ = model_Model;
view_GridController.prototype = $extend(model_Model.prototype,{
	setSelectProp: function(val) {
		this.combo_props.jqxComboBox("selectItem",this.findItem(this.combo_props,val));
	}
	,setSelectMethod: function(val) {
		this.combo_dtype.jqxComboBox("selectItem",this.findItem(this.combo_dtype,val));
	}
	,setTxtValue1: function(val) {
		this.spr_value1.jqxNumberInput("val",val);
	}
	,setTxtValue2: function(val) {
		this.spr_value2.jqxNumberInput("val",val);
	}
	,setTxtValue3: function(val) {
		this.spr_value3.jqxNumberInput("val",val);
	}
	,setTxtValue4: function(val) {
		this.spr_value4.jqxNumberInput("val",val);
	}
	,setTxtValue5: function(val) {
		this.spr_value5.jqxNumberInput("val",val);
	}
	,initRow: function(id,formulaList,selectId) {
		var _g = this;
		this.currentParticleId = id;
		if(formulaList == null) {
			this.grid.initRow({ });
			return;
		}
		this.grid.initRow(Lambda.fold(formulaList,function(obj,curr) {
			Reflect.setField(curr,Std.string(obj[7]) + "",_g.formulaToRow(obj));
			return curr;
		},{ }));
		if(selectId != null) this.grid.selectRow(selectId); else this.grid.selectLastRow();
	}
	,addRow: function(id,formula) {
		this.grid.addRow(id,this.formulaToRow(formula));
		this.grid.selectLastRow();
	}
	,removeRowById: function(rid) {
		this.grid.removeRowById(rid);
		this.grid.selectLastRow();
	}
	,getRowById: function(rid) {
		return this.grid.getRowById(rid);
	}
	,getRows: function() {
		return this.grid.getRows();
	}
	,updateRow: function(rid,formula) {
		this.grid.updateRow(rid,this.formulaToRow(formula));
	}
	,init: function() {
		var _g = this;
		model_Model.prototype.init.call(this);
		this.grid.set_config({ grid : this.config.table_props});
		this.grid.config.grid.on("rowselect",function(event1) {
			var args = event1.args;
			var rowBoundIndex = args.rowindex;
			var rowData = args.row;
			_g.currentRow = rowData;
			_g.notify(view_GridController.ON_ROW_SELECT,{ row : rowData});
		});
		this.btn_addDynamic = this.config.btn_addDynamic;
		this.btn_addDynamic.click(function() {
			_g.notify(view_GridController.ON_ADD_CLICK,{ id : _g.currentParticleId, values : [_g.getTypeFromItem(_g.getSelectItem(_g.combo_props)),_g.getTypeFromItem(_g.getSelectItem(_g.combo_dtype)),_g.spr_value1.val(),_g.spr_value2.val(),_g.spr_value3.val(),_g.spr_value4.val(),_g.spr_value5.val()]});
		});
		this.btn_removeDynamic = this.config.btn_removeDynamic;
		this.btn_removeDynamic.click(function() {
			_g.notify(view_GridController.ON_REMOVE_CLICK,{ id : _g.currentParticleId});
		});
		this.combo_props = this.config.combo_props;
		this.combo_props.on("change",function(event2) {
			_g.notify(view_GridController.ON_FORMULA_CHANGE,{ values : [_g.getTypeFromItem(_g.getSelectItem(_g.combo_props)),_g.getTypeFromItem(_g.getSelectItem(_g.combo_dtype)),_g.spr_value1.val(),_g.spr_value2.val(),_g.spr_value3.val(),_g.spr_value4.val(),_g.spr_value5.val()]});
		});
		this.combo_dtype = this.config.combo_dtype;
		this.combo_dtype.on("change",function(event3) {
			_g.notify(view_GridController.ON_FORMULA_CHANGE,{ values : [_g.getTypeFromItem(_g.getSelectItem(_g.combo_props)),_g.getTypeFromItem(_g.getSelectItem(_g.combo_dtype)),_g.spr_value1.val(),_g.spr_value2.val(),_g.spr_value3.val(),_g.spr_value4.val(),_g.spr_value5.val()]});
		});
		this.btn_moveDown = this.config.btn_moveDown;
		this.btn_moveDown.click(function() {
			if(_g.currentRow == null) return;
			_g.notify(view_GridController.ON_BTN_MOVE_CLICK,{ fid : _g.currentRow.uid, updown : 1});
		});
		this.btn_moveUp = this.config.btn_moveUp;
		this.btn_moveUp.click(function() {
			if(_g.currentRow == null) return;
			_g.notify(view_GridController.ON_BTN_MOVE_CLICK,{ fid : _g.currentRow.uid, updown : -1});
		});
		this.spr_value1 = this.config.spr_value1;
		this.spr_value2 = this.config.spr_value2;
		this.spr_value3 = this.config.spr_value3;
		this.spr_value4 = this.config.spr_value4;
		this.spr_value5 = this.config.spr_value5;
		var onSprChange = function(event) {
			_g.notify(view_GridController.ON_FORMULA_CHANGE,{ values : [_g.getTypeFromItem(_g.getSelectItem(_g.combo_props)),_g.getTypeFromItem(_g.getSelectItem(_g.combo_dtype)),_g.spr_value1.val(),_g.spr_value2.val(),_g.spr_value3.val(),_g.spr_value4.val(),_g.spr_value5.val()]});
		};
		this.spr_value1.on("change",onSprChange);
		this.spr_value2.on("change",onSprChange);
		this.spr_value3.on("change",onSprChange);
		this.spr_value4.on("change",onSprChange);
		this.spr_value5.on("change",onSprChange);
	}
	,formulaToRow: function(formula) {
		return { ptype : formula[0], method : formula[1], value1 : formula[2], value2 : formula[3], value3 : formula[4], value4 : formula[5], value5 : formula[6]};
	}
	,findItem: function(combo,value) {
		var items = combo.jqxComboBox("getItems");
		return Lambda.find(items,function(obj) {
			return Main.j(obj.label).attr("ptype") == value;
		});
	}
	,getTypeFromItem: function(item) {
		return Main.j(item.element).find("[ptype]").attr("ptype");
	}
	,getSelectItem: function(combo) {
		return combo.jqxComboBox("getSelectedItem");
	}
	,logItems: function(combo) {
		Lambda.foreach(combo.jqxComboBox("getItems"),function(obj) {
			console.log(Main.j(obj.label).attr("ptype"));
			return true;
		});
	}
});
var view_MenuController = function() {
	model_Model.call(this);
};
view_MenuController.__name__ = true;
view_MenuController.__super__ = model_Model;
view_MenuController.prototype = $extend(model_Model.prototype,{
	openImport: function(type,text) {
		this.win_import.jqxWindow("open");
		this.win_import.attr("type",type);
		switch(type) {
		case "import":
			this.setTextarea("");
			break;
		case "export":
			this.setTextarea(text);
			break;
		}
	}
	,openAbout: function() {
		this.win_about.jqxWindow("open");
	}
	,init: function() {
		var _g = this;
		model_Model.prototype.init.call(this);
		this.win_import = this.config.win_import;
		this.btn_confirm = this.config.btn_confirm;
		this.btn_confirm.click(function() {
			_g.win_import.jqxWindow("close");
			var _g1 = _g.win_import.attr("type");
			switch(_g1) {
			case "import":
				_g.notify(view_MenuController.ON_IMPORT_CLICK,{ config : _g.getTextarea()});
				break;
			}
		});
		this.win_about = this.config.win_about;
	}
	,setTextarea: function(str) {
		this.win_import.find("textarea").val(str);
	}
	,getTextarea: function() {
		return this.win_import.find("textarea").val();
	}
});
var view_ParamsView = function() {
	this.j = $;
	model_Model.call(this);
};
view_ParamsView.__name__ = true;
view_ParamsView.__super__ = model_Model;
view_ParamsView.prototype = $extend(model_Model.prototype,{
	setCount: function(count) {
		this.txt_count.html(count);
	}
	,setValues: function(particleObj,isEmit) {
		this.currentParticleObj = particleObj;
		var particle = particleObj.particle;
		this.txt_name.val(particle.name);
		this.setPropValue("lifetime",particle.lifetime * 1000);
		this.setPropValue("mass",particle.mass);
		this.setPropValue("size_x",particle.size[0]);
		this.setPropValue("size_y",particle.size[1]);
		this.setPropValue("vel_x",particle.vel[0]);
		this.setPropValue("vel_y",particle.vel[1]);
		this.setPropValue("vel_r",particle.vel[2] / Math.PI * 180);
		this.setPropValue("pos_r",particle.pos[2] / Math.PI * 180);
		this.setPropValue("alpha",particle.color[3]);
		var color = particle.color;
		this.color_color.jqxColorPicker("setColor",{ r : color[0] * 255, g : color[1] * 255, b : color[2] * 255});
		this.combo_blend.jqxComboBox("selectItem",this.findItem(this.combo_blend,particle.blending));
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
	,setBackgroundColor: function(r,g,b) {
		var rgbint = Math.floor(r * 255) << 16 | Math.floor(g * 255) << 8 | Math.floor(b * 255);
		var rbgstr = Number.prototype.toString.call(rgbint,16);
		while(rbgstr.length < 6) rbgstr = "0" + Std.string(rbgstr);
		rbgstr = "#" + Std.string(rbgstr);
		this.color_background.jqxColorPicker("setColor",rbgstr);
	}
	,init: function() {
		var _g = this;
		model_Model.prototype.init.call(this);
		this.txt_name = this.config.txt_name;
		this.txt_name.on("change",function() {
			var value = _g.txt_name.val();
			_g.notify(view_ParamsView.ON_TXT_NAME_CHANGE,{ id : _g.currentParticleObj.id, name : value});
		});
		this.root = this.config.root;
		this.root.find("[jqx=\"jqxNumberInput\"]").on("change",function(event) {
			var jdom = _g.j(this);
			var proptype = jdom.parent().parent().attr("proptype");
			var newValue = parseFloat(event.args.value);
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
		});
		this.color_color = this.config.color_color;
		this.color_color.on("colorchange",function(event1) {
			var color = event1.args.color;
			_g.notify(view_ParamsView.ON_COLOR_CHANGE,{ color : color});
		});
		this.combo_blend = this.config.combo_blend;
		this.combo_blend.on("change",function(event2) {
			_g.notify(view_ParamsView.ON_BLEND_CHANGE,{ blend : _g.getTypeFromItem(_g.getSelectItem(_g.combo_blend))});
		});
		this.color_background = this.config.color_background;
		this.color_background.on("colorchange",function(event3) {
			var color1 = event3.args.color;
			_g.notify(view_ParamsView.ON_BACK_COLOR_CHANGE,{ color : color1});
		});
		this.txt_count = this.config.txt_count;
	}
	,getTypeFromItem: function(item) {
		return Main.j(item.element).find("[ptype]").attr("ptype");
	}
	,getSelectItem: function(combo) {
		return combo.jqxComboBox("getSelectedItem");
	}
	,findItem: function(combo,value) {
		var items = combo.jqxComboBox("getItems");
		return Lambda.find(items,function(obj) {
			return Main.j(obj.label).attr("ptype") == value;
		});
	}
	,setPropValue: function(type,value) {
		this.getPropContainer(type).find("[jqx=\"jqxNumberInput\"]").jqxNumberInput("val",value);
	}
	,getPropContainer: function(type) {
		return this.root.find("div[proptype=" + type + "]");
	}
});
var view_TreeController = function() {
	this.tree = new view_component_TreeView();
	model_Model.call(this);
};
view_TreeController.__name__ = true;
view_TreeController.__super__ = model_Model;
view_TreeController.prototype = $extend(model_Model.prototype,{
	getItems: function() {
		return this.tree.getItems();
	}
	,getItem: function(element) {
		return this.tree.getItem(element);
	}
	,getItemById: function(id) {
		return this.tree.getItemById(id);
	}
	,getSelectItem: function() {
		return this.tree.getSelectItem();
	}
	,setItemName: function(id,label) {
		this.tree.setItemName(id,label);
	}
	,addTo: function(element,parentElement) {
		this.tree.addTo(element,parentElement);
	}
	,addToWithLabel: function(id,label,parentElement) {
		this.tree.addToWithLabel(id,label,parentElement);
	}
	,remove: function(element) {
		this.tree.remove(element);
	}
	,selectItem: function(element) {
		this.tree.selectItem(element);
	}
	,init: function() {
		var _g = this;
		model_Model.prototype.init.call(this);
		this.tree.set_config({ tree : this.config.tree_particle});
		this.tree.addHandler(function(type,params) {
			_g.notify(type,params);
		});
		this.btn_addTreeNode = this.config.btn_addTreeNode;
		this.btn_removeTreeNode = this.config.btn_removeTreeNode;
		this.btn_addTreeNode.click(function() {
			_g.notify(view_TreeController.ON_BTN_ADD_TREE_NODE_CLICK);
		});
		this.btn_removeTreeNode.click(function() {
			_g.notify(view_TreeController.ON_BTN_REMOVE_TREE_NODE_CLICK);
		});
	}
});
var view_component_FileView = function() {
	model_Model.call(this);
};
view_component_FileView.__name__ = true;
view_component_FileView.__super__ = model_Model;
view_component_FileView.prototype = $extend(model_Model.prototype,{
	init: function() {
		model_Model.prototype.init.call(this);
		this.file_upload = this.config.file_upload;
	}
});
var view_component_GridView = function() {
	model_Model.call(this);
};
view_component_GridView.__name__ = true;
view_component_GridView.__super__ = model_Model;
view_component_GridView.prototype = $extend(model_Model.prototype,{
	initRow: function(rows) {
		var dataAdapter = new $.jqx.dataAdapter({ localdata : rows, datatype : "local"});
		this.grid.jqxGrid({ source : dataAdapter});
	}
	,selectFirstRow: function() {
		this.grid.jqxGrid("selectrow",0);
	}
	,selectLastRow: function() {
		this.grid.jqxGrid("selectrow",this.getRows().length - 1);
	}
	,selectRow: function(id) {
		this.grid.jqxGrid("selectrow",id);
	}
	,addRow: function(id,row) {
		this.grid.jqxGrid("addrow",id,row);
	}
	,removeRowById: function(rid) {
		this.grid.jqxGrid("deleterow",rid);
	}
	,getRowById: function(rid) {
		return this.grid.jqxGrid("getrowdatabyid",rid);
	}
	,getRows: function() {
		return this.grid.jqxGrid("getrows");
	}
	,updateRow: function(rid,data) {
		this.grid.jqxGrid("updaterow",rid,data);
	}
	,init: function() {
		model_Model.prototype.init.call(this);
		this.grid = this.config.grid;
	}
});
var view_component_TreeView = function() {
	model_Model.call(this);
};
view_component_TreeView.__name__ = true;
view_component_TreeView.__super__ = model_Model;
view_component_TreeView.prototype = $extend(model_Model.prototype,{
	getItems: function() {
		return this._tree.jqxTree("getItems");
	}
	,getItem: function(element) {
		return this._tree.jqxTree("getItem",element);
	}
	,getItemById: function(id) {
		return Lambda.find(this.getItems(),function(item) {
			return item.id == id;
		});
	}
	,getSelectItem: function() {
		return this._selectItem;
	}
	,setItemName: function(id,label) {
		var _g = this.getItemById(id);
		var item = _g;
		if(_g == null) return; else switch(_g) {
		default:
			this._tree.jqxTree("updateItem",item,{ label : label});
		}
	}
	,addTo: function(element,parentElement) {
		this._tree.jqxTree("addTo",element,parentElement);
	}
	,addToWithLabel: function(id,label,parentElement) {
		var pid = parentElement;
		if(parentElement == null) this._tree.jqxTree("addTo",{ id : id, label : label}); else switch(parentElement) {
		default:
			this._tree.jqxTree("addTo",{ id : id, label : label},parentElement);
		}
	}
	,remove: function(element) {
		this._tree.jqxTree("removeItem",element);
	}
	,selectItem: function(element) {
		this._tree.jqxTree("selectItem",element);
	}
	,init: function() {
		var _g = this;
		model_Model.prototype.init.call(this);
		this._tree = this.config.tree;
		this._tree.on("select",function(event) {
			var item = _g.getItem(event.args.element);
			_g._selectItem = item;
			_g.notify(view_component_TreeView.ON_TREE_NODE_CLICK,{ item : item});
		});
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
model_PanelModel.ON_INIT = "ON_INIT";
model_PanelModel.ON_ADD_FORMULA = "ON_ADD_FORMULA";
model_PanelModel.ON_REMOVE_FORMULA = "ON_REMOVE_FORMULA";
model_PanelModel.ON_FORMULA_CHANGE = "ON_FORMULA_CHANGE";
model_PanelModel.ON_FORMULA_POS_CHANGE = "ON_FORMULA_POS_CHANGE";
model_PanelModel.ON_TEXTURE_CHANGE = "ON_TEXTURE_CHANGE";
model_PanelModel.ON_BLEND_CHANGE = "ON_BLEND_CHANGE";
model_PanelModel.ON_COLOR_CHANGE = "ON_COLOR_CHANGE";
model_PanelModel.ON_CURRENT_PARTICLE_CHANGE = "ON_CURRENT_PARTICLE_CHANGE";
view_FileController.ON_TEXTURE_CLICK = "ON_TEXTURE_CLICK";
view_FileController.ON_BTN_REMOVE_TEXTURE_CLICK = "ON_BTN_REMOVE_TEXTURE_CLICK";
view_GridController.ON_ROW_SELECT = "ON_ROW_SELECT";
view_GridController.ON_ADD_CLICK = "ON_ADD_CLICK";
view_GridController.ON_REMOVE_CLICK = "ON_REMOVE_CLICK";
view_GridController.ON_FORMULA_CHANGE = "ON_FORMULA_CHANGE";
view_GridController.ON_BTN_MOVE_CLICK = "ON_BTN_MOVE_CLICK";
view_MenuController.ON_IMPORT_CLICK = "ON_IMPORT_CLICK";
view_ParamsView.ON_PROP_CHANGE = "ON_PROP_CHANGE";
view_ParamsView.ON_BLEND_CHANGE = "ON_BLEND_CHANGE";
view_ParamsView.ON_COLOR_CHANGE = "ON_COLOR_CHANGE";
view_ParamsView.ON_BACK_COLOR_CHANGE = "ON_BACK_COLOR_CHANGE";
view_ParamsView.ON_TXT_NAME_CHANGE = "ON_TXT_NAME_CHANGE";
view_TreeController.ON_BTN_ADD_TREE_NODE_CLICK = "ON_BTN_ADD_TREE_NODE_CLICK";
view_TreeController.ON_BTN_REMOVE_TREE_NODE_CLICK = "ON_BTN_REMOVE_TREE_NODE_CLICK";
view_component_TreeView.ON_TREE_NODE_CLICK = "ON_TREE_NODE_CLICK";
view_component_TreeView.ON_TREE_DRAG = "ON_TREE_DRAG";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=haxe.js.map