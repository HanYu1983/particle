// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('test.gundamWar');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('lib.tool');
test.gundamWar.async = require("async");
test.gundamWar.fs = require("fs");
test.gundamWar.gundamUrl = "http://www.shiner96500.com/cards/gundamwar/search2.php";
test.gundamWar.downloadDir = "downloadPages/";
test.gundamWar.output = "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/gundamWarList.json";
test.gundamWar.downloadPage = (function test$gundamWar$downloadPage(delayTime,pageNum,cb){
return lib.tool.postUrl.call(null,test.gundamWar.gundamUrl,new cljs.core.PersistentArrayMap(null, 2, ["page",pageNum,"rr2","where true"], null),(function (err,ret){
if(cljs.core.truth_(err)){
return cb.call(null,err);
} else {
return test.gundamWar.fs.writeFile([cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.gundamWar.downloadDir),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pageNum),".html"].join(''),ret,(function (err__$1){
if(cljs.core.truth_(err__$1)){
return cb.call(null,err__$1);
} else {
console.log("write file ",pageNum,".html");

return setTimeout(cb,delayTime);
}
}));
}
}));
});
test.gundamWar.downloadPages = (function test$gundamWar$downloadPages(start,cnt){
return test.gundamWar.async.eachSeries(cljs.core.clj__GT_js.call(null,cljs.core.range.call(null,start,(start + cnt))),cljs.core.partial.call(null,test.gundamWar.downloadPage,(2000)),(function (err,rets){
return console.log(err);
}));
});
test.gundamWar.regex_g = cljs.core.re_pattern.call(null,["<center><table width='100%'>([\\s\\S]+?)<\\/center>"].join(''));
test.gundamWar.regex_id = cljs.core.re_pattern.call(null,["<td align=[\"']?center[\"']? bgcolor=[\"']?(#\\w{6})[\"']? width=[\"']?\\d+ height=[\"']?\\d+[\"']?\\s*>\\s+(\\S+)\\s+<\\/td>"].join(''));
test.gundamWar.regex_name = cljs.core.re_pattern.call(null,["<td bgcolor=[\"']?#.{6}[\"']width=[\"']?\\d+[\"']?>(.+)<\\/td>"].join(''));
test.gundamWar.regex_belong = cljs.core.re_pattern.call(null,["<td colspan=\"3\" valign=\"top\" align=\"right\" height=\"40\">\\s+(.+)<\\/td>"].join(''));
test.gundamWar.regex_context = cljs.core.re_pattern.call(null,["<td  colspan=\"3\" valign=\"top\" align=\"left\" height=\"120\" >([\\s\\S]+?)<\\/td>"].join(''));
test.gundamWar.regex_cost = cljs.core.re_pattern.call(null,["\u570B\u529B\u8CC7\u6E90\uFF1A(\\W?\\d.?\\W?\\d? - \\d - \\d)"].join(''));
test.gundamWar.regex_atkadj = cljs.core.re_pattern.call(null,["\u6230\u9B25\u4FEE\u6B63\uFF1A(\\d) \\/ (\\d) \\/ (\\d)"].join(''));
test.gundamWar.regex_atk = cljs.core.re_pattern.call(null,["\u6230\u9B25\u529B\uFF1A(\\d+\\/?\\d?) \\/ (\\d+\\/?\\d?) \\/ (\\d+\\/?\\d?)"].join(''));
test.gundamWar.regex_area = cljs.core.re_pattern.call(null,["\u5730\u5F62\u9069\u6027\uFF1A([\u5B87\u5B99\u30FB\u5730\u7403]+)"].join(''));
test.gundamWar.regex_image = cljs.core.re_pattern.call(null,["card\\.php\\?img=image\\/\\d+\\/(\\d+\\.jpg)"].join(''));
test.gundamWar.parseGroup = (function test$gundamWar$parseGroup(group){
var ids = cljs.core.map.call(null,cljs.core.rest,cljs.core.re_seq.call(null,test.gundamWar.regex_id,group));
var images = cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,test.gundamWar.regex_image,group));
var names = cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,test.gundamWar.regex_name,group));
var pkgs = cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,test.gundamWar.regex_belong,group));
var context = cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,test.gundamWar.regex_context,group));
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,cljs.core.count,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ids,names,pkgs,context], null))))){
} else {
throw "data lost!!";
}

return cljs.core.map.call(null,((function (ids,images,names,pkgs,context){
return (function (p__4592,image,name,pkg,context__$1){
var vec__4593 = p__4592;
var color = cljs.core.nth.call(null,vec__4593,(0),null);
var id = cljs.core.nth.call(null,vec__4593,(1),null);
var cost = cljs.core.first.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,test.gundamWar.regex_cost,context__$1)));
var atkadj = cljs.core.clj__GT_js.call(null,cljs.core.first.call(null,cljs.core.map.call(null,cljs.core.rest,cljs.core.re_seq.call(null,test.gundamWar.regex_atkadj,context__$1))));
var atk = cljs.core.clj__GT_js.call(null,cljs.core.first.call(null,cljs.core.map.call(null,cljs.core.rest,cljs.core.re_seq.call(null,test.gundamWar.regex_atk,context__$1))));
var area = cljs.core.first.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,test.gundamWar.regex_area,context__$1)));
var colorMap = new cljs.core.PersistentArrayMap(null, 7, ["#FAEBD7","\u8336","#B1E3FE","\u85CD","#E7C0FE","\u7D2B","#F5F5F5","\u767D","#BCF3C4","\u7DA0","#FFC1C1","\u7D05","#C4C4C4","\u9ED1"], null);
return cljs.core.PersistentHashMap.fromArrays(["area","id","pkg","card-id","atk","cost","name","context","color"],[(cljs.core.truth_(area)?clojure.string.replace.call(null,area,/・/,"/"):null),image,clojure.string.trim.call(null,pkg),id,(function (){var or__3922__auto__ = atk;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return atkadj;
}
})(),(cljs.core.truth_(cost)?cljs.core.clj__GT_js.call(null,clojure.string.split.call(null,clojure.string.replace.call(null,cost,/ /,""),/-/)):null),clojure.string.trim.call(null,clojure.string.replace.call(null,name,/&nbsp;/,"")),context__$1,cljs.core.get.call(null,colorMap,color)]);
});})(ids,images,names,pkgs,context))
,ids,images,names,pkgs,context);
});
test.gundamWar.parsePage = (function test$gundamWar$parsePage(content){
var ret = cljs.core.map.call(null,cljs.core.comp.call(null,test.gundamWar.parseGroup,cljs.core.second),cljs.core.re_seq.call(null,test.gundamWar.regex_g,content));
return cljs.core.flatten.call(null,ret);
});
test.gundamWar.parseInfo = (function test$gundamWar$parseInfo(){
return test.gundamWar.async.waterfall([(function (cb){
return test.gundamWar.async.parallel(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__4596_SHARP_){
return cljs.core.partial.call(null,lib.tool.getFile,["downloadPages/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4596_SHARP_),".html"].join(''));
}),cljs.core.range.call(null,(1),(214)))),cb);
}),(function (pages,cb){
return cb.call(null,null,cljs.core.clj__GT_js.call(null,cljs.core.reduce.call(null,(function (all,curr){
return cljs.core.concat.call(null,all,test.gundamWar.parsePage.call(null,curr));
}),cljs.core.List.EMPTY,pages)));
})],(function (err,ret){
if(cljs.core.truth_(err)){
return console.log(err);
} else {
return test.gundamWar.fs.writeFile(test.gundamWar.output,JSON.stringify(ret),(function (err__$1){
if(cljs.core.truth_(err__$1)){
return cljs.core.println.call(null,err__$1);
} else {
return cljs.core.println.call(null,"ok!");
}
}));
}
}));
});
