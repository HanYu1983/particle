(function (console) { "use strict";
var CallJs = function() { };
var HxOverrides = function() { };
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
Lambda.foreach = function(it,f) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) return false;
	}
	return true;
};
var Main = function() { };
Main.main = function() {
	CallJs.api_loadParticleList(0,999,Main.handleModel(function(ret) {
		Main.ary_items = ret;
		Main.initPagination(Main.ary_items.length);
		Main.showList(Main.mc_listContainer,Main.getShowAry(Main.ary_items,Main.currPage,Main.pageSize));
	}));
};
Main.initPagination = function(total) {
	Main.pag_page.pagination({ total : total, onSelectPage : function(pageNumber,pageSize) {
		Main.currPage = pageNumber - 1;
		Main.showList(Main.mc_listContainer,Main.getShowAry(Main.ary_items,Main.currPage,pageSize));
	}});
};
Main.getShowAry = function(ary_item,currPage,pageSize) {
	var finalCount = (currPage + 1) * pageSize;
	if(finalCount > ary_item.length) return ary_item.slice(currPage * pageSize,ary_item.length); else return ary_item.slice(currPage * pageSize,currPage * pageSize + pageSize);
};
Main.showList = function(mc_listContainer,ary_item) {
	Lambda.foreach(ary_item,function(item) {
		var img = $("<a><img></img></a>");
		img.attr("href","index.html?key=" + item.key);
		img.attr("target","_blank");
		img.find("img").attr("src",item.img);
		img.find("img").addClass("item");
		img.find("img").addClass("hori");
		mc_listContainer.append(img);
		return true;
	});
};
Main.handleModel = function(fn) {
	return function(err,ret) {
		if(err == null) fn(ret); else console.log(err);
	};
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
CallJs.store_loadParticleList = store.loadParticleList;
CallJs.api_loadParticleList = api.loadParticleList;
Main.pag_page = $("#pag_page");
Main.mc_listContainer = $("#mc_listContainer");
Main.currPage = 0;
Main.pageSize = 30;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=list_haxe.js.map