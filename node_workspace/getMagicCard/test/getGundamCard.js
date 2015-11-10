// Compiled by ClojureScript 0.0-2268
goog.provide('test.getGundamCard');
goog.require('cljs.core');
goog.require('lib.tool');
goog.require('lib.tool');
test.getGundamCard.gundamUrl = "http://www.shiner96500.com/cards/gundamwar/search2.php";
test.getGundamCard.regex_id = cljs.core.re_pattern.call(null,("<td align=[\"']?center[\"']? bgcolor=[\"']?#\\w{6}[\"']? width=[\"']?\\d+ height=[\"']?\\d+[\"']?\\s*>\\s+(\\S+)\\s+<\\/td>"));
test.getGundamCard.regex_g = cljs.core.re_pattern.call(null,("<center><table width='100%'>([\\s\\S]+?)<\\/center>"));
test.getGundamCard.getInfo = (function getInfo(){return lib.tool.postUrl.call(null,test.getGundamCard.gundamUrl,new cljs.core.PersistentArrayMap(null, 2, ["page",(2),"rr2","where true"], null),(function (err,ret){var ids = cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,test.getGundamCard.regex_g,ret));console.log(cljs.core.pr_str.call(null,cljs.core.first.call(null,ids)));
return console.log(cljs.core.count.call(null,ids));
}));
});
