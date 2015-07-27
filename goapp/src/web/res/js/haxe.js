(function (console) { "use strict";
var MyClass = function() {
};
MyClass.prototype = {
	ABC: function() {
		var abc = "ccc";
		console.log(abc);
		console.log(10);
		console.log("ABC" + " was called");
	}
	,doCHaha: function() {
		console.log("do");
	}
};
var testMacro_TestMacro = function() { };
testMacro_TestMacro.main = function() {
	var ac = new MyClass();
	console.log(ac.ABC());
	ac.ABC();
	ac.doCHaha();
};
testMacro_TestMacro.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=haxe.js.map