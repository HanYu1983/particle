(function (console) { "use strict";
var CallJs = function() { };
var Main = function() { };
Main.main = function() {
	CallJs.store_loadParticleList({ Offset : 0, Count : 30},Main.handleModel(function(ret) {
		console.log(ret);
	}));
};
Main.handleModel = function(fn) {
	return function(err,ret) {
		if(err == null) fn(ret); else console.log(err);
	};
};
CallJs.store_loadParticleList = store.loadParticleList;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
