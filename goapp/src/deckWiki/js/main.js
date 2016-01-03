(function (console) { "use strict";
var Helper = function() { };
Helper.createItem = function(model) {
	return Helper.j("#tmpl_item").tmpl(model);
};
Helper.addItemListener = function(dom) {
	dom.mouseover(function(e) {
		var dom1 = Helper.j(e.currentTarget);
		dom1.addClass("focus");
	});
	dom.mouseout(function(e1) {
		var dom2 = Helper.j(e1.currentTarget);
		dom2.removeClass("focus");
	});
	dom.click(function(e2) {
		console.log(e2);
	});
};
Helper.createDetail = function(game,card) {
	card.url = gameController.getCardUrl(game,card);
	if(card.url == null) card.url = "images/cardback.png";
	var div = Helper.j("#tmpl_bigCard").tmpl(card);
	div.find("div[game]").hide();
	div.find("div[game=" + game + "]").show();
	div.attr("data",JSON.stringify(card));
	return div;
};
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
	var j = $;
	Lambda.foreach((function($this) {
		var $r;
		var _g = [];
		{
			var _g1 = 0;
			while(_g1 < 50) {
				var i = _g1++;
				_g.push(i);
			}
		}
		$r = _g;
		return $r;
	}(this)),function(str) {
		var dom1 = Helper.createItem({ });
		Helper.addItemListener(dom1);
		j("#mc_itemContainer").append(dom1);
		return true;
	});
	var dom = Helper.createDetail("army",{ });
	console.log(dom);
	j("#mc_bigItemContainer").append(dom);
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
Helper.j = $;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
