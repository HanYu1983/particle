(function (console) { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.htmlEscape = function(s,quotes) {
	s = s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
	if(quotes) return s.split("\"").join("&quot;").split("'").join("&#039;"); else return s;
};
var TestTree = function() {
	this.j = $;
	this.tree = new component_Tree(this.j("#tree_particle"));
	this.tree.init();
	this.tree.addEmitter(null,"root");
	this.tree.addEmitter("root","AAA");
	this.tree.addEmitter("root","BBB");
	this.tree.removeParticle("BBB");
	this.tree.removeParticle("AAA");
};
TestTree.__name__ = true;
TestTree.main = function() {
	new TestTree();
};
var component_IDom = function() { };
component_IDom.__name__ = true;
var component_ITree = function() { };
component_ITree.__name__ = true;
component_ITree.__interfaces__ = [component_IDom];
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
		var dom = this.j("<li id=\"" + name + "\"><span class=\"folder\">" + name + "_emitter</span><ul id=\"" + name + "_container\"></ul></li>");
		parentDom.prepend(dom);
		this.addToTree(dom);
		this.addParticle(name,name);
	}
	,addParticle: function(parentName,name) {
		var parentDom = this.findParent(parentName);
		var dom = this.j("<li id=\"" + name + "\"><span class=\"file\">" + name + "_particle</span></li>");
		parentDom.prepend(dom);
		this.addToTree(dom);
	}
	,removeParticle: function(name) {
		var removeDom = this.dom.find("#" + name);
		removeDom.remove();
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
var haxe_unit_TestCase = function() {
};
haxe_unit_TestCase.__name__ = true;
haxe_unit_TestCase.prototype = {
	setup: function() {
	}
	,tearDown: function() {
	}
	,print: function(v) {
		haxe_unit_TestRunner.print(v);
	}
	,assertTrue: function(b,c) {
		this.currentTest.done = true;
		if(b != true) {
			this.currentTest.success = false;
			this.currentTest.error = "expected true but was false";
			this.currentTest.posInfos = c;
			throw new js__$Boot_HaxeError(this.currentTest);
		}
	}
	,assertFalse: function(b,c) {
		this.currentTest.done = true;
		if(b == true) {
			this.currentTest.success = false;
			this.currentTest.error = "expected false but was true";
			this.currentTest.posInfos = c;
			throw new js__$Boot_HaxeError(this.currentTest);
		}
	}
	,assertEquals: function(expected,actual,c) {
		this.currentTest.done = true;
		if(actual != expected) {
			this.currentTest.success = false;
			this.currentTest.error = "expected '" + Std.string(expected) + "' but was '" + Std.string(actual) + "'";
			this.currentTest.posInfos = c;
			throw new js__$Boot_HaxeError(this.currentTest);
		}
	}
};
var haxe_unit_TestRunner = function() { };
haxe_unit_TestRunner.__name__ = true;
haxe_unit_TestRunner.print = function(v) {
	var msg = js_Boot.__string_rec(v,"");
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) {
		msg = StringTools.htmlEscape(msg).split("\n").join("<br/>");
		d.innerHTML += msg + "<br/>";
	} else if(typeof process != "undefined" && process.stdout != null && process.stdout.write != null) process.stdout.write(msg); else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
var haxe_unit_TestStatus = function() { };
haxe_unit_TestStatus.__name__ = true;
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
String.__name__ = true;
Array.__name__ = true;
TestTree.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=haxe.js.map