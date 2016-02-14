(function (console) { "use strict";
var Main = function() { };
Main.main = function() {
	console.log("G");
};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=main.js.map