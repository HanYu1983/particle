// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('test.gundamWarN');
goog.require('cljs.core');
goog.require('lib.tool');
test.gundamWarN.fs = require("fs");
test.gundamWarN.async = require("async");
test.gundamWarN.request = require("request");
test.gundamWarN.cardInfoUrl = "http://www.carddass.com/cdmasters/nexa/cardlist/controller/request.php";
test.gundamWarN.imageUrl = (function test$gundamWarN$imageUrl(prod,name){
return ["http://www.carddass.com/cdmasters/nexa/images/cardlist/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prod),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),".png"].join('');
});
test.gundamWarN.output = "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/gundamWarNexAList/";
test.gundamWarN.outputImageDir = "output/gundamWarNexA/";
test.gundamWarN.clusadeUrl = "http://www.carddass.com/crusade/cardlist/request.php";
test.gundamWarN.prods = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["179031"], null);
test.gundamWarN.fetchInfo = (function test$gundamWarN$fetchInfo(id,cb){
return lib.tool.postUrl.call(null,test.gundamWarN.cardInfoUrl,new cljs.core.PersistentArrayMap(null, 2, ["cmdno",(1),"prod",id], null),(function (err,ret){
return test.gundamWarN.fs.writeFile(["gundamWarN",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".json"].join(''),JSON.stringify(JSON.parse(ret)),(function (err__$1){
return cb.call(null,err__$1);
}));
}));
});
test.gundamWarN.fetchImage = (function test$gundamWarN$fetchImage(p__4830,cb){
var vec__4831 = p__4830;
var prod = cljs.core.nth.call(null,vec__4831,(0),null);
var id = cljs.core.nth.call(null,vec__4831,(1),null);
console.log(["fetchImage ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.gundamWarN.imageUrl.call(null,prod,id))].join(''));

return test.gundamWarN.request.call(null,test.gundamWarN.imageUrl.call(null,prod,id)).pipe(test.gundamWarN.fs.createWriteStream([cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.gundamWarN.outputImageDir),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prod),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".jpg"].join(''))).on("close",((function (vec__4831,prod,id){
return (function (){
console.log("ok for fetchImage",id);

return setTimeout(cb,(3000));
});})(vec__4831,prod,id))
);
});
test.gundamWarN.fetchAllImage = (function test$gundamWarN$fetchAllImage(){
return test.gundamWarN.async.waterfall([(function (cb){
return test.gundamWarN.async.map(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__4834_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.gundamWarN.output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4834_SHARP_),".json"].join('');
}),test.gundamWarN.prods)),lib.tool.getFile,cb);
}),(function (datas,cb){
var alls = cljs.core.reduce.call(null,(function (p1__4837_SHARP_,p2__4838_SHARP_){
return cljs.core.concat.call(null,p1__4837_SHARP_,p2__4838_SHARP_);
}),cljs.core.List.EMPTY,cljs.core.map.call(null,(function (p1__4836_SHARP_){
return p1__4836_SHARP_.data;
}),cljs.core.map.call(null,(function (p1__4835_SHARP_){
return JSON.parse(p1__4835_SHARP_);
}),cljs.core.js__GT_clj.call(null,datas))));
console.log("start fetch image length:",cljs.core.count.call(null,alls));

return cb.call(null,null,alls);
}),(function (datas,cb){
var pids = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (data){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[data.prodid,data.info_25],null));
}),datas));
return test.gundamWarN.async.eachSeries(pids,test.gundamWarN.fetchImage,cb.call(null,null));
})],(function (err,rets){
return console.log("fetchAllImage done!");
}));
});
test.gundamWarN.test_base = (function test$gundamWarN$test_base(){
return test.gundamWarN.fetchInfo.call(null,"179030",(function (err){
return console.log(err);
}));
});
