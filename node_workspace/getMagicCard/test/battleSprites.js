// Compiled by ClojureScript 0.0-2268
goog.provide('test.battleSprites');
goog.require('cljs.core');
goog.require('lib.tool');
goog.require('lib.tool');
test.battleSprites.cardInfoUrl = "http://tw.battlespirits.com/mydeck/request.php";
test.battleSprites.test_base = (function test_base(){return lib.tool.postUrl.call(null,test.battleSprites.cardInfoUrl,new cljs.core.PersistentArrayMap(null, 2, ["cmdno",(1),"prod",(62008)], null),(function (err,ret){return console.log(ret);
}));
});
