// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('lib.tool');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
lib.tool.request = require("request");
lib.tool.fs = require("fs");
lib.tool.async = require("async");
lib.tool.rx = require("rx");
lib.tool.getUrl = (function lib$tool$getUrl(url,cb){
return lib.tool.request.call(null,url,(function (err,res,body){
if(cljs.core.truth_(err)){
return cb.call(null,err);
} else {
return cb.call(null,null,body);
}
}));
});
lib.tool.postUrl = (function lib$tool$postUrl(url,data,cb){
return lib.tool.request.post((function (){var obj4628 = {"url":url,"formData":cljs.core.clj__GT_js.call(null,data)};
return obj4628;
})(),(function (err,res,body){
if(cljs.core.truth_(err)){
return cb.call(null,err);
} else {
return cb.call(null,null,body);
}
}));
});
lib.tool.getFile = (function lib$tool$getFile(filename,cb){
return lib.tool.fs.readFile(filename,"utf8",(function (err,data){
if(cljs.core.truth_(err)){
return cb.call(null,err);
} else {
return cb.call(null,null,clojure.string.replace.call(null,data,/\r/,""));
}
}));
});
lib.tool.delayFn = (function lib$tool$delayFn(t,f,cb){
return f.call(null,(function (err,data){
if(cljs.core.truth_(err)){
return cb.call(null,err);
} else {
return setTimeout((function (){
return cb.call(null,null,data);
}),t);
}
}));
});
lib.tool.parseDownloadConfig = (function lib$tool$parseDownloadConfig(json){
var pred__4629 = cljs.core._EQ_;
var expr__4630 = json.type;
if(cljs.core.truth_(pred__4629.call(null,"range",expr__4630))){
var values = cljs.core.js__GT_clj.call(null,json.value);
var pattern = json.pattern;
var iter__4292__auto__ = ((function (values,pattern,pred__4629,expr__4630){
return (function lib$tool$parseDownloadConfig_$_iter__4632(s__4633){
return (new cljs.core.LazySeq(null,((function (values,pattern,pred__4629,expr__4630){
return (function (){
var s__4633__$1 = s__4633;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4633__$1);
if(temp__5457__auto__){
var s__4633__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4633__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__4633__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__4635 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__4634 = (0);
while(true){
if((i__4634 < size__4291__auto__)){
var v = cljs.core._nth.call(null,c__4290__auto__,i__4634);
cljs.core.chunk_append.call(null,b__4635,goog.string.format(pattern,v));

var G__4636 = (i__4634 + (1));
i__4634 = G__4636;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4635),lib$tool$parseDownloadConfig_$_iter__4632.call(null,cljs.core.chunk_rest.call(null,s__4633__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4635),null);
}
} else {
var v = cljs.core.first.call(null,s__4633__$2);
return cljs.core.cons.call(null,goog.string.format(pattern,v),lib$tool$parseDownloadConfig_$_iter__4632.call(null,cljs.core.rest.call(null,s__4633__$2)));
}
} else {
return null;
}
break;
}
});})(values,pattern,pred__4629,expr__4630))
,null,null));
});})(values,pattern,pred__4629,expr__4630))
;
return iter__4292__auto__.call(null,cljs.core.apply.call(null,cljs.core.range,values));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
lib.tool.parseDownloadConfig2 = (function lib$tool$parseDownloadConfig2(json){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),json.type,new cljs.core.Keyword(null,"data","data",-232669377),(function (){var seqs = json.seq;
var seqvs = seqs.values;
var option = json.option;
return cljs.core.map.call(null,((function (seqs,seqvs,option){
return (function (p1__4637_SHARP_){
return JSON.parse(p1__4637_SHARP_);
});})(seqs,seqvs,option))
,(function (){var pred__4638 = cljs.core._EQ_;
var expr__4639 = seqs.type;
if(cljs.core.truth_(pred__4638.call(null,"ary",expr__4639))){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,goog.string.format,option),cljs.core.js__GT_clj.call(null,seqvs));
} else {
if(cljs.core.truth_(pred__4638.call(null,"range",expr__4639))){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,goog.string.format,option),cljs.core.range.call(null,(seqvs[(0)]),(seqvs[(1)])));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}
})());
})(),new cljs.core.Keyword(null,"path","path",-188191168),json.path], null);
});
