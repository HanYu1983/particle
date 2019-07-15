// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('app.basic');
goog.require('cljs.core');
goog.require('app.fns');
goog.require('clojure.string');
app.basic.rx = require("rx");
app.basic.script = require("./script.js");
app.basic.parseFile = (function app$basic$parseFile(pattern,scriptFn,p__4700){
var vec__4701 = p__4700;
var filepath = cljs.core.nth.call(null,vec__4701,(0),null);
var filecontent = cljs.core.nth.call(null,vec__4701,(1),null);
var data = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.js__GT_clj,scriptFn,cljs.core.clj__GT_js,cljs.core.rest),cljs.core.re_seq.call(null,pattern,filecontent));
return app.basic.rx.Observable.just(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filepath,data], null));
});
app.basic.sangoWar = (function app$basic$sangoWar(){
return "haha";
});
app.basic.parseInfo = (function app$basic$parseInfo(cfg){
var map__4705 = cfg;
var map__4705__$1 = ((((!((map__4705 == null)))?(((((map__4705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4705):map__4705);
var dir = cljs.core.get.call(null,map__4705__$1,"dir");
var outputDir = cljs.core.get.call(null,map__4705__$1,"outputDir");
var pattern = cljs.core.get.call(null,map__4705__$1,"pattern");
var s = cljs.core.get.call(null,map__4705__$1,"script");
var offset = cljs.core.get.call(null,map__4705__$1,"offset");
var cnt = cljs.core.get.call(null,map__4705__$1,"count");
var scriptFn = (function (){var or__3922__auto__ = (app.basic.script[s]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.identity;
}
})();
return app.basic.rx.Observable.just(dir).flatMap(app.fns.readdir).skip(offset).take(cnt).map(((function (map__4705,map__4705__$1,dir,outputDir,pattern,s,offset,cnt,scriptFn){
return (function (p1__4704_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4704_SHARP_)].join('');
});})(map__4705,map__4705__$1,dir,outputDir,pattern,s,offset,cnt,scriptFn))
).flatMap(app.fns.readfile).flatMap(cljs.core.partial.call(null,app.basic.parseFile,cljs.core.re_pattern.call(null,pattern),scriptFn)).flatMap(((function (map__4705,map__4705__$1,dir,outputDir,pattern,s,offset,cnt,scriptFn){
return (function (p__4707){
var vec__4708 = p__4707;
var filepath = cljs.core.nth.call(null,vec__4708,(0),null);
var data = cljs.core.nth.call(null,vec__4708,(1),null);
console.log(cljs.core.count.call(null,data));

return app.fns.writefile.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputDir),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.last.call(null,clojure.string.split.call(null,filepath,/\//)),/\./)))].join('')),".json"].join(''),JSON.stringify(cljs.core.clj__GT_js.call(null,data),null,"\t"));
});})(map__4705,map__4705__$1,dir,outputDir,pattern,s,offset,cnt,scriptFn))
).subscribe(((function (map__4705,map__4705__$1,dir,outputDir,pattern,s,offset,cnt,scriptFn){
return (function (data){
return console.log("success");
});})(map__4705,map__4705__$1,dir,outputDir,pattern,s,offset,cnt,scriptFn))
,((function (map__4705,map__4705__$1,dir,outputDir,pattern,s,offset,cnt,scriptFn){
return (function (err){
return console.log(err);
});})(map__4705,map__4705__$1,dir,outputDir,pattern,s,offset,cnt,scriptFn))
,((function (map__4705,map__4705__$1,dir,outputDir,pattern,s,offset,cnt,scriptFn){
return (function (){
return console.log("completed");
});})(map__4705,map__4705__$1,dir,outputDir,pattern,s,offset,cnt,scriptFn))
);
});
app.basic.main = (function app$basic$main(filepath){
return app.basic.rx.Observable.just(filepath).flatMap(app.fns.readfile).subscribe((function (p__4711){
var vec__4712 = p__4711;
var filepath__$1 = cljs.core.nth.call(null,vec__4712,(0),null);
var content = cljs.core.nth.call(null,vec__4712,(1),null);
return app.basic.parseInfo.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(content)));
}),(function (err){
return console.log(err);
}),(function (){
return console.log("completed");
}));
});
