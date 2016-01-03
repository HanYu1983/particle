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
Helper.loadDetail = function(game,cb) {
	api.cardInfo(game,function(err,data) {
		cb(data);
	});
};
Helper.loadList = function(cb) {
	api.load(cb);
};
Helper.createDetail = function(game,card) {
	card.url = api.cardimageurl(game,card.id);
	if(card.url == null) card.url = "../common/images/card/cardback_0.png";
	var div = Helper.j("#tmpl_bigCard").tmpl(card);
	div.find("div[game]").hide();
	div.find("div[game=" + game + "]").show();
	div.attr("data",JSON.stringify(card));
	return div;
};
var Main = function() { };
Main.main = function() {
	var j = $;
	Helper.loadList(function(err,data) {
		console.log(data);
	});
};
Helper.j = $;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=main.js.map