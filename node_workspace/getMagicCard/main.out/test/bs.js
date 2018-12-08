// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('test.bs');
goog.require('cljs.core');
goog.require('clojure.string');
test.bs.rx = require("rx");
test.bs.fs = require("fs");
test.bs._ = require("underscore");
test.bs.request = require("request");
test.bs.output = "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/bsList/";
test.bs.outputImageDir = "output/bs/";
test.bs.imageUrl = (function test$bs$imageUrl(ori){
return ["http://yuyu-tei.jp",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,ori,/90_126/,"front"))].join('');
});
test.bs.readdir = (function test$bs$readdir(filepath){
return test.bs.rx.Observable.create((function (obs){
return test.bs.fs.readdir(filepath,(function (err,data){
if(cljs.core.truth_(err)){
return obs.onError(err);
} else {
cljs.core.doall.call(null,(function (){var iter__4292__auto__ = (function test$bs$readdir_$_iter__4574(s__4575){
return (new cljs.core.LazySeq(null,(function (){
var s__4575__$1 = s__4575;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4575__$1);
if(temp__5457__auto__){
var s__4575__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4575__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__4575__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__4577 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__4576 = (0);
while(true){
if((i__4576 < size__4291__auto__)){
var da = cljs.core._nth.call(null,c__4290__auto__,i__4576);
cljs.core.chunk_append.call(null,b__4577,obs.onNext(da));

var G__4578 = (i__4576 + (1));
i__4576 = G__4578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4577),test$bs$readdir_$_iter__4574.call(null,cljs.core.chunk_rest.call(null,s__4575__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4577),null);
}
} else {
var da = cljs.core.first.call(null,s__4575__$2);
return cljs.core.cons.call(null,obs.onNext(da),test$bs$readdir_$_iter__4574.call(null,cljs.core.rest.call(null,s__4575__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.js__GT_clj.call(null,data));
})());

return obs.onCompleted();
}
}));
}));
});
test.bs.readfile = (function test$bs$readfile(filepath){
return test.bs.rx.Observable.create((function (obs){
return test.bs.fs.readFile(filepath,"utf8",(function (err,data){
if(cljs.core.truth_(err)){
return obs.onError(err);
} else {
var G__4579 = obs;
G__4579.onNext(data);

G__4579.onCompleted();

return G__4579;
}
}));
}));
});
test.bs.dbc2sbc = (function test$bs$dbc2sbc(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,s,/[\uff01-\uff5e]/,(function (p1__4580_SHARP_){
return String.fromCharCode((p1__4580_SHARP_.charCodeAt((0)) - (65248)));
}));
} else {
return null;
}
});
test.bs.parseHtml = (function test$bs$parseHtml(data){
return test.bs.rx.Observable.create((function (obs){
var group = cljs.core.map.call(null,cljs.core.rest,cljs.core.re_seq.call(null,/real_src\s?=\"(.+?)\"[\s\S]+?<div>(.*?)<\/DIV>([\s\S.]*?)<br \/><\/DIV>([\s\S.]*?)<div>卡牌解说<\/DIV>([\s\S.]*?)<br \/><\/DIV>/,data));
var urlidpair = cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.first,group),cljs.core.map.call(null,((function (group){
return (function (p1__4581_SHARP_){
return test.bs.dbc2sbc.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/编号：(.*?)　收录/,cljs.core.nth.call(null,p1__4581_SHARP_,(2)))));
});})(group))
,group));
cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (group,urlidpair){
return (function test$bs$parseHtml_$_iter__4582(s__4583){
return (new cljs.core.LazySeq(null,((function (group,urlidpair){
return (function (){
var s__4583__$1 = s__4583;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4583__$1);
if(temp__5457__auto__){
var s__4583__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4583__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__4583__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__4585 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__4584 = (0);
while(true){
if((i__4584 < size__4291__auto__)){
var obj = cljs.core._nth.call(null,c__4290__auto__,i__4584);
cljs.core.chunk_append.call(null,b__4585,obs.onNext(cljs.core.apply.call(null,cljs.core.array,obj)));

var G__4586 = (i__4584 + (1));
i__4584 = G__4586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4585),test$bs$parseHtml_$_iter__4582.call(null,cljs.core.chunk_rest.call(null,s__4583__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4585),null);
}
} else {
var obj = cljs.core.first.call(null,s__4583__$2);
return cljs.core.cons.call(null,obs.onNext(cljs.core.apply.call(null,cljs.core.array,obj)),test$bs$parseHtml_$_iter__4582.call(null,cljs.core.rest.call(null,s__4583__$2)));
}
} else {
return null;
}
break;
}
});})(group,urlidpair))
,null,null));
});})(group,urlidpair))
;
return iter__4292__auto__.call(null,urlidpair);
})());

return obs.onCompleted();
}));
});
test.bs.writefile = (function test$bs$writefile(output,data){
console.log(data.length);

return test.bs.rx.Observable.create((function (obs){
return test.bs.fs.writeFile(output,JSON.stringify(data,null,"\t"),(function (err){
if(cljs.core.truth_(err)){
return obs.onError(err);
} else {
var G__4587 = obs;
G__4587.onCompleted();

return G__4587;
}
}));
}));
});
test.bs.fetchImage = (function test$bs$fetchImage(outputImage,url){
console.log(url);

return test.bs.rx.Observable.create((function (obs){
return test.bs.request.call(null,url).pipe(test.bs.fs.createWriteStream(outputImage)).on("close",(function (){
return obs.onCompleted();
}));
}));
});
test.bs.parseAll = (function test$bs$parseAll(){
return test.bs.readdir.call(null,"bsDoc").map((function (filename){
return ["bsDoc/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('');
})).flatMap(test.bs.readfile).flatMap(test.bs.parseHtml).reduce((function (acc,x){
var G__4588 = acc;
G__4588.push(x);

return G__4588;
}),[]).flatMap(cljs.core.partial.call(null,test.bs.writefile,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.bs.output),"all.json"].join(''))).subscribe((function (data){
return null;
}),(function (err){
return console.log("err:",err);
}),(function (){
return console.log("write ok!");
}));
});
test.bs.parseInfo = (function test$bs$parseInfo(pkgName){
return test.bs.rx.Observable.of(pkgName).map((function (p1__4589_SHARP_){
return ["bsDoc/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4589_SHARP_),".html"].join('');
})).flatMap(test.bs.readfile).flatMap(test.bs.parseHtml).reduce((function (acc,x){
var G__4590 = acc;
G__4590.push(x);

return G__4590;
}),[]).flatMap(cljs.core.partial.call(null,test.bs.writefile,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.bs.output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgName),".json"].join(''))).subscribe((function (data){
return null;
}),(function (err){
return console.log("err:",err);
}),(function (){
return console.log("write ok!");
}));
});
test.bs.getImage = (function test$bs$getImage(pkgName){
test.bs.idx = cljs.core.atom.call(null,(0));

return test.bs.readfile.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.bs.output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgName),".json"].join('')).map((function (p1__4591_SHARP_){
return JSON.parse(p1__4591_SHARP_);
})).flatMap((function (p1__4592_SHARP_){
return test.bs.rx.Observable.from(p1__4592_SHARP_);
})).delay(test.bs.rx.Observable.timer((0)),(function (x){
cljs.core.swap_BANG_.call(null,test.bs.idx,cljs.core.inc);

return test.bs.rx.Observable.timer((cljs.core.deref.call(null,test.bs.idx) * (3000)));
})).timeInterval().flatMap((function (obj){
var v = obj.value;
var vec__4593 = v;
var url = cljs.core.nth.call(null,vec__4593,(0),null);
var id = cljs.core.nth.call(null,vec__4593,(1),null);
if(cljs.core.truth_(id)){
return test.bs.fetchImage.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.bs.outputImageDir),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".jpg"].join(''),url);
} else {
return test.bs.rx.Observable.just(null);
}
})).subscribe((function (data){
return console.log("wow!",data);
}),(function (err){
return console.log("err:",err);
}),(function (){
return console.log("get image ok!");
}));
});
/**
 * 這個函式不能使用，imagemin套件不能用
 */
test.bs.compress = (function test$bs$compress(p){
var imagemin = require("imagemin");
return (new imagemin()).src([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p),"/*.{gif,jpg,png,svg}"].join('')).dest("output/compress/").use(imagemin.jpegtran((function (){var obj4597 = {"progressive":false};
return obj4597;
})())).run(((function (imagemin){
return (function (err,files){
console.log("end");

return console.log(err);
});})(imagemin))
);
});
