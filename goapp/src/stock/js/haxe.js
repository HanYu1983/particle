(function (console) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EType = { __ename__ : true, __constructs__ : ["volume","clock","kline","none"] };
EType.volume = ["volume",0];
EType.volume.toString = $estr;
EType.volume.__enum__ = EType;
EType.clock = ["clock",1];
EType.clock.toString = $estr;
EType.clock.__enum__ = EType;
EType.kline = ["kline",2];
EType.kline.toString = $estr;
EType.kline.__enum__ = EType;
EType.none = ["none",3];
EType.none.toString = $estr;
EType.none.__enum__ = EType;
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
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
	this.panelView = new view_PanelView();
	this.panelModel = new model_PanelModel();
	this.j = $;
	var _g = this;
	this.panelView.set_config({ mc_accordionContainer : this.j("#mc_accordionContainer"), tmpl_panel : this.j("#tmpl_panel"), slt_stockId : this.j("#slt_stockId"), btn_controller : this.j("#btn_controller"), btn_addPanel : this.j("#btn_addPanel"), txt_count : this.j("#txt_count"), txt_offset : this.j("#txt_offset")});
	this.panelView.addHandler(function(type,params) {
		switch(type) {
		case "on_stockid_change":
			_g.panelModel.set_currentStockId(params.stockId);
			break;
		case "on_offset_change":
			var _g1 = _g.panelModel;
			_g1.set_currentOffset(_g1.currentOffset + params.value);
			break;
		case "on_showline_change":
			_g.panelModel.changeShow(params.id,params.type,params.show);
			break;
		case "on_showline_value_change":
			_g.panelModel.changeShowValue(params.id,params.type,params.value);
			break;
		case "on_showline_k_change":
			_g.panelModel.changeShowK(params.id,params.show);
			break;
		case "on_btn_addPanel_click":
			var penalObj = _g.createNewPanelObj();
			_g.panelModel.addPanel(penalObj.id,penalObj,{ addToModel : true});
			break;
		case "on_btn_removePanel_click":
			_g.panelModel.removePanel(params.id);
			break;
		case "on_txt_offset_change":
			_g.panelModel.set_currentOffset(params.offset);
			break;
		case "on_txt_count_change":
			_g.panelModel.set_currentCount(params.count);
			break;
		}
	});
	this.panelModel.addHandler(function(type1,params1) {
		switch(type1) {
		case "on_stockid_change":
			_g.panelView.initPanel(_g.panelModel.config,params1.stock);
			break;
		case "on_offset_change":
			_g.panelView.changeOffset(_g.panelModel.currentOffset);
			_g.panelView.scrollTo(_g.panelModel.getAryPanel(),0);
			break;
		case "on_count_change":
			break;
		case "on_init":
			break;
		case "on_add_panel":
			_g.panelView.addPanel(params1.stockId,_g.panelModel.currentOffset,_g.panelModel.currentCount,params1.panelObj);
			_g.panelView.resetAllCanvasListener(_g.panelModel.getAryPanel());
			break;
		case "on_remove_panel":
			_g.panelView.removePanel(params1.id);
			break;
		case "on_showline_change":
			_g.panelView.drawCanvas(_g.panelModel.currentStockId,_g.panelModel.currentOffset,_g.panelModel.currentCount,params1.panelData);
			break;
		}
	});
	this.panelModel.set_config(defaultStock);
};
Main.__name__ = true;
Main.getId = function() {
	return Main.id++;
};
Main.main = function() {
	new Main();
};
Main.getStock = function(id,reset) {
	var d = $.Deferred();
	api.stockId(id,reset,function() {
		d.resolve(id);
	});
	return d;
};
Main.getStockInfo = function(id) {
	var d = $.Deferred();
	api.stockInfo(id,function(err,data) {
		d.resolve(err,data);
	});
	return d;
};
Main.drawStock = function(canvas,id,type,offset,count,sub) {
	if(count == null) count = 100;
	if(offset == null) offset = 0;
	api.draw(canvas[0],id,Std.string(type),offset,count,sub);
};
Main.prototype = {
	createNewPanelObj: function() {
		return { id : Main.getId(), type : EType.none, deletable : true, sub : [{ show : false, type : "ma", value : { n : 5, m : 10, o : 20, p : 40, color : ""}},{ show : false, type : "ema", value : { n : 5, m : 10, o : 20, p : 40, color : ""}},{ show : false, type : "bbi", value : { n : 12, m : 0, o : 0, p : 0, color : ""}},{ show : false, type : "yu-sd", value : { n : 20, m : 0, o : 0, p : 0, color : ""}},{ show : false, type : "yu-car", value : { n : 1, m : .005, o : .7, p : 0, color : ""}},{ show : false, type : "kd", value : { n : 9, m : 1, o : 3, p : 0, color : ""}},{ show : true, type : "macd", value : { n : 12, m : 26, o : 0, p : 0, color : ""}},{ show : false, type : "Chaikin", value : { n : 3, m : 10, o : 9, p : 0, color : ""}},{ show : false, type : "eom", value : { n : 14, m : 3, o : 0, p : 0, color : ""}},{ show : false, type : "yu-clock", value : { n : 20, m : 20, o : 0, p : 0, color : ""}},{ show : false, type : "yu-macd", value : { n : 5, m : 12, o : 0, p : 0, color : ""}}]};
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
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
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
var model_IModel = function() { };
model_IModel.__name__ = true;
var model_IPanel = function() { };
model_IPanel.__name__ = true;
model_IPanel.__interfaces__ = [model_IModel];
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
	this.ary_panel_obj = [];
	this.currentCount = 100;
	this.currentOffset = 0;
	model_Model.call(this);
};
model_PanelModel.__name__ = true;
model_PanelModel.__interfaces__ = [model_IPanel];
model_PanelModel.__super__ = model_Model;
model_PanelModel.prototype = $extend(model_Model.prototype,{
	getAryPanel: function() {
		return this.ary_panel_obj;
	}
	,changeShow: function(id,type,show) {
		var panelData = this.getPanelById(id);
		Reflect.setField(this.getPanelSubByType(panelData,type),"show",show);
		this.notify(model_PanelModel.ON_SHOWLINE_CHANGE,{ panelData : panelData});
	}
	,changeShowK: function(id,show) {
		var panelData = this.getPanelById(id);
		if(show) panelData.data.type = EType.kline; else panelData.data.type = EType.none;
		this.notify(model_PanelModel.ON_SHOWLINE_CHANGE,{ panelData : panelData});
	}
	,changeShowValue: function(id,type,value) {
		var panelData = this.getPanelById(id);
		var subObj = this.getPanelSubByType(panelData,type);
		subObj.value.n = value[0];
		subObj.value.m = value[1];
		subObj.value.o = value[2];
		subObj.value.p = value[3];
		this.notify(model_PanelModel.ON_SHOWLINE_CHANGE,{ panelData : panelData});
	}
	,addPanel: function(id,data,extra) {
		var obj = { id : id, data : data, needMove : data.type != EType.clock, root : null};
		this.ary_panel_obj.push(obj);
		if(extra.addToModel) {
			this.getStockById(this.currentStockId).lines.push(data);
			console.log(this.getStockById(this.currentStockId));
		}
		this.notify(model_PanelModel.ON_ADD_PANEL,{ stockId : this.currentStockId, panelObj : obj});
	}
	,removePanel: function(id) {
		var _g = this;
		Lambda.foreach(this.ary_panel_obj,function(stockMap) {
			if(stockMap.id == id) {
				HxOverrides.remove(_g.ary_panel_obj,stockMap);
				return false;
			}
			return true;
		});
		this.notify(model_PanelModel.ON_REMOVE_PANEL,{ id : id});
	}
	,getSaveData: function() {
		var output = { facebookId : this.config.facebookId, stocks : this.config.stocks};
		return output;
	}
	,init: function() {
		model_Model.prototype.init.call(this);
		var j = $;
		var stock = this.config.stocks[0];
		this.set_currentStockId(stock.id);
	}
	,resetPanelData: function() {
		var _g = this;
		Lambda.foreach(this.ary_panel_obj,function(panelObj) {
			_g.notify(model_PanelModel.ON_REMOVE_PANEL,{ id : panelObj.id});
			return true;
		});
		this.ary_panel_obj = [];
	}
	,setStockData: function(stock) {
		var _g = this;
		this.set_currentOffset(stock.offset);
		this.set_currentCount(stock.count);
		Lambda.foreach(stock.lines,function(obj) {
			obj.type = Type.createEnum(EType,obj.type);
			return true;
		});
		this.resetPanelData();
		Main.getStock(this.currentStockId,true).pipe(Main.getStockInfo).done(function(err,data) {
			var state = data[0];
			var dataInfo = data[1];
			var date = data[3];
			_g.set_maxCount(dataInfo.length);
			Lambda.foreach(stock.lines,function(obj1) {
				_g.addPanel(obj1.id,obj1,{ addToModel : false});
				return true;
			});
			_g.notify(model_PanelModel.ON_STOCKID_CHANGE,{ stock : stock});
		});
	}
	,getPanelById: function(id) {
		return Lambda.find(this.ary_panel_obj,function(panelObj) {
			return panelObj.id == id;
		});
	}
	,getPanelSubByType: function(panelData,type) {
		return Lambda.find(panelData.data.sub,function(subObj) {
			return subObj.type == type;
		});
	}
	,getStockById: function(stockId) {
		return Lambda.find(this.config.stocks,function(obj) {
			return obj.id == stockId;
		});
	}
	,set_currentOffset: function(offset) {
		this.currentOffset = offset;
		if(this.currentOffset < 0) this.currentOffset = 0; else if(this.currentOffset > this.maxCount - 100) this.currentOffset = this.maxCount - 100;
		this.notify(model_PanelModel.ON_OFFSET_CHANGE,{ stockId : this.currentStockId, offset : this.currentOffset});
		return this.currentOffset;
	}
	,set_currentCount: function(count) {
		this.currentCount = count;
		if(this.currentCount < 50) this.currentCount = 50;
		this.notify(model_PanelModel.ON_COUNT_CHANGE,{ stockId : this.currentStockId, count : this.currentCount});
		return this.currentCount;
	}
	,set_currentStockId: function(stockId) {
		this.currentStockId = stockId;
		this.setStockData((function($this) {
			var $r;
			var _g = $this.getStockById(stockId);
			$r = (function($this) {
				var $r;
				var o = _g;
				$r = _g == null?(function($this) {
					var $r;
					var obj = $this.createNewStock(stockId);
					$this.config.stocks.push(obj);
					$r = obj;
					return $r;
				}($this)):(function($this) {
					var $r;
					switch(_g) {
					default:
						$r = o;
					}
					return $r;
				}($this));
				return $r;
			}($this));
			return $r;
		}(this)));
		return this.currentStockId;
	}
	,set_maxCount: function(mcount) {
		return this.maxCount = mcount;
	}
	,createNewStock: function(id) {
		return { id : id, count : 200, offset : 0, lines : [{ id : 1, type : "kline", deletable : false, sub : [{ show : true, type : "ma", value : { n : 5, m : 10, o : 20, p : 40, color : ""}},{ show : false, type : "ema", value : { n : 5, m : 10, o : 20, p : 40, color : ""}},{ show : false, type : "bbi", value : { n : 12, m : 0, o : 0, p : 0, color : ""}},{ show : false, type : "yu-sd", value : { n : 20, m : 0, o : 0, p : 0, color : ""}},{ show : false, type : "yu-car", value : { n : 1, m : .005, o : .7, p : 0, color : ""}},{ show : false, type : "kd", value : { n : 9, m : 1, o : 3, p : 0, color : ""}},{ show : false, type : "macd", value : { n : 12, m : 26, o : 0, p : 0, color : ""}},{ show : false, type : "Chaikin", value : { n : 3, m : 10, o : 9, p : 0, color : ""}},{ show : false, type : "eom", value : { n : 14, m : 3, o : 0, p : 0, color : ""}},{ show : false, type : "yu-clock", value : { n : 20, m : 20, o : 0, p : 0, color : ""}},{ show : false, type : "yu-macd", value : { n : 5, m : 12, o : 0, p : 0, color : ""}}]}]};
	}
});
var view_IPanelView = function() { };
view_IPanelView.__name__ = true;
view_IPanelView.__interfaces__ = [model_IModel];
var view_PanelView = function() {
	this.currentScrollX = null;
	this.j = $;
	model_Model.call(this);
};
view_PanelView.__name__ = true;
view_PanelView.__interfaces__ = [view_IPanelView];
view_PanelView.__super__ = model_Model;
view_PanelView.prototype = $extend(model_Model.prototype,{
	init: function() {
		var _g = this;
		model_Model.prototype.init.call(this);
		this.mc_accordionContainer = this.config.mc_accordionContainer;
		this.mc_accordionContainer.accordion();
		this.tmpl_panel = this.config.tmpl_panel;
		this.btn_addPanel = this.config.btn_addPanel;
		this.btn_addPanel.click(function(e) {
			_g.notify(view_PanelView.ON_BTN_ADDPANEL_CLICK);
		});
		this.slt_stockId = this.config.slt_stockId;
		this.txt_count = this.config.txt_count;
		this.txt_offset = this.config.txt_offset;
		this.btn_controller = this.config.btn_controller;
		this.btn_controller.delegate(".btn_controller","click",function(e1) {
			var target = e1.currentTarget;
			var id = _g.j(target).attr("id");
			switch(id) {
			case "btn_first":
				_g.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : -10000});
				break;
			case "btn_prev10":
				_g.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : -10});
				break;
			case "btn_prev":
				_g.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : -1});
				break;
			case "btn_next":
				_g.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : 1});
				break;
			case "btn_next10":
				_g.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : 10});
				break;
			case "btn_last":
				_g.notify(view_PanelView.ON_BTN_CONTROLLER_CLICK,{ value : 10000});
				break;
			}
		});
	}
	,initPanel: function(model,stock) {
		var _g = this;
		var stockId = stock.id;
		var offset = stock.offset;
		var count = stock.count;
		this.slt_stockId.textbox({ value : stockId, onChange : function(newValue,oldValue) {
			var stockId1 = newValue;
			_g.notify(view_PanelView.ON_SLT_STOCKID_CHANGE,{ 'stockId' : stockId1});
		}});
		this.changeOffset(offset);
		this.changeCount(count);
	}
	,changeOffset: function(offset) {
		var _g = this;
		this.txt_offset.textbox({ value : offset, onChange : function(newValue,oldValue) {
			_g.notify(view_PanelView.ON_TXT_OFFSET_CHANGE,{ offset : Std.parseInt(newValue)});
		}});
	}
	,changeCount: function(count) {
		var _g = this;
		this.txt_count.textbox({ value : count, onChange : function(newValue,oldValue) {
			_g.notify(view_PanelView.ON_TXT_COUNT_CHANGE,{ count : Std.parseInt(newValue)});
		}});
	}
	,addPanel: function(stockId,offset,count,panelData) {
		var _g = this;
		var stockData = panelData.data;
		var id = stockData.id;
		var type = stockData.type;
		var props = stockData.sub;
		var deletable = stockData.deletable;
		var dom = this.tmpl_panel.tmpl({ id : id, type : type, deletable : deletable});
		this.mc_accordionContainer.accordion("add",{ id : "k_" + id, title : "k線: " + id, content : dom, selected : true});
		panelData.root = dom;
		if(type == EType.kline || type == EType.none) dom.find("#slt_showKline").switchbutton({ checked : type == EType.kline, onChange : function(checked) {
			_g.notify(view_PanelView.ON_SWB_SHOWKLINE_CHANGE,{ id : panelData.id, show : checked});
		}});
		dom.find("#btn_removePanel").click(function() {
			_g.notify(view_PanelView.ON_BTN_REMOVEPANEL_CLICK,{ id : panelData.id});
		});
		if(props != null) this.createProp(dom.find("#mc_propContainer"),props,panelData);
		this.drawCanvas(stockId,offset,count,panelData);
	}
	,removePanel: function(id) {
		var deleteName = "k線: " + id;
		this.mc_accordionContainer.accordion("remove",deleteName);
	}
	,drawCanvas: function(stockId,offset,count,panelData) {
		Main.drawStock(panelData.root.find("#canvas_kline"),stockId,panelData.data.type,offset,count,this.propsToDraw(panelData.data.sub));
	}
	,drawAllCanvas: function(stockId,offset,count,ary_panel) {
		if(offset == null) offset = 0;
		var _g = this;
		Lambda.map(ary_panel,function(panelData) {
			_g.drawCanvas(stockId,offset,count,panelData);
		});
	}
	,propsToDraw: function(props) {
		return Lambda.fold(props,function(obj,current) {
			if(obj.show) current.push({ 't' : Std.string(obj.type), 'd' : { n : obj.value.n, m : obj.value.m, o : obj.value.o, p : obj.value.p}, 'color' : "red"});
			return current;
		},[]);
	}
	,createProp: function(container,props,panelData) {
		var _g = this;
		var onInputChange = function(dom) {
			return function(newv,oldv) {
				var target = _g.j(this);
				var type = dom.find(".easyui-switchbutton").attr("ktype");
				var value = [];
				dom.find(".easyui-textbox").each(function(id,subdom) {
					value.push(Std.parseFloat(_g.j(subdom).textbox("getValue")));
				});
				_g.notify(view_PanelView.ON_TXT_SHOWLINE_VALUE_CHANGE,{ id : panelData.id, type : type, value : value});
			};
		};
		Lambda.foreach(props,function(prop) {
			prop.sid = "swb_" + Std.string(prop.type);
			prop.nid = "input_n_" + Std.string(prop.type);
			prop.mid = "input_m_" + Std.string(prop.type);
			var dom1 = _g.j("#tmpl_avg").tmpl(prop);
			container.append(dom1);
			dom1.find(".easyui-switchbutton").switchbutton({ checked : prop.show, onChange : function(checked) {
				var target1 = _g.j(this);
				var type1 = target1.attr("ktype");
				_g.notify(view_PanelView.ON_SWB_SHOWLINE_CHANGE,{ id : panelData.id, type : type1, show : checked});
			}});
			dom1.find(".easyui-textbox").eq(0).textbox({ value : prop.value.n, onChange : onInputChange(dom1)});
			dom1.find(".easyui-textbox").eq(1).textbox({ value : prop.value.m, onChange : onInputChange(dom1)});
			dom1.find(".easyui-textbox").eq(2).textbox({ value : prop.value.o, onChange : onInputChange(dom1)});
			dom1.find(".easyui-textbox").eq(3).textbox({ value : prop.value.p, onChange : onInputChange(dom1)});
			return true;
		});
	}
	,resetAllCanvasListener: function(ary_panel_obj) {
		var _g = this;
		Lambda.map(ary_panel_obj,function(stockMap) {
			if(stockMap.needMove) {
				var container = stockMap.root.find("#canvas_kline").parent();
				if(_g.currentScrollX != null) container.scrollLeft(_g.currentScrollX);
				container.off("scroll");
				container.scroll(function(e) {
					var target = _g.j(e.currentTarget);
					_g.currentScrollX = target.scrollLeft();
					Lambda.map(ary_panel_obj,function(_stockMap) {
						container = _stockMap.root.find("#canvas_kline").parent();
						container.scrollLeft(_g.currentScrollX);
					});
				});
			}
		});
	}
	,scrollTo: function(ary_panel_obj,scrollX) {
		var _g = this;
		this.currentScrollX = scrollX;
		Lambda.map(ary_panel_obj,function(stockMap) {
			if(stockMap.needMove) {
				var container = stockMap.root.find("#canvas_kline").parent();
				container = stockMap.root.find("#canvas_kline").parent();
				container.scrollLeft(_g.currentScrollX);
			}
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
Main.id = 4;
model_PanelModel.ON_INIT = "on_init";
model_PanelModel.ON_STOCKID_CHANGE = "on_stockid_change";
model_PanelModel.ON_CHANGE_STOCK_SUCCESS = "on_change_stock_success";
model_PanelModel.ON_OFFSET_CHANGE = "on_offset_change";
model_PanelModel.ON_COUNT_CHANGE = "on_count_change";
model_PanelModel.ON_SHOWLINE_CHANGE = "on_showline_change";
model_PanelModel.ON_ADD_PANEL = "on_add_panel";
model_PanelModel.ON_REMOVE_PANEL = "on_remove_panel";
view_PanelView.ON_SLT_STOCKID_CHANGE = "on_stockid_change";
view_PanelView.ON_BTN_CONTROLLER_CLICK = "on_offset_change";
view_PanelView.ON_TXT_SHOWLINE_VALUE_CHANGE = "on_showline_value_change";
view_PanelView.ON_SWB_SHOWLINE_CHANGE = "on_showline_change";
view_PanelView.ON_SWB_SHOWKLINE_CHANGE = "on_showline_k_change";
view_PanelView.ON_BTN_ADDPANEL_CLICK = "on_btn_addPanel_click";
view_PanelView.ON_BTN_REMOVEPANEL_CLICK = "on_btn_removePanel_click";
view_PanelView.ON_TXT_OFFSET_CHANGE = "on_txt_offset_change";
view_PanelView.ON_TXT_COUNT_CHANGE = "on_txt_count_change";
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=haxe.js.map