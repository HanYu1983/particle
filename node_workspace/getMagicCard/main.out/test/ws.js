// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('test.ws');
goog.require('cljs.core');
goog.require('clojure.string');
test.ws.rx = require("rx");
test.ws.fs = require("fs");
test.ws.output = "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/wsList.json";
test.ws.readdir = (function test$ws$readdir(filepath){
return test.ws.rx.Observable.create((function (obs){
return test.ws.fs.readdir(filepath,(function (err,data){
if(cljs.core.truth_(err)){
return obs.onError(err);
} else {
cljs.core.doall.call(null,(function (){var iter__4292__auto__ = (function test$ws$readdir_$_iter__4599(s__4600){
return (new cljs.core.LazySeq(null,(function (){
var s__4600__$1 = s__4600;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4600__$1);
if(temp__5457__auto__){
var s__4600__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4600__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__4600__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__4602 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__4601 = (0);
while(true){
if((i__4601 < size__4291__auto__)){
var da = cljs.core._nth.call(null,c__4290__auto__,i__4601);
cljs.core.chunk_append.call(null,b__4602,obs.onNext(da));

var G__4603 = (i__4601 + (1));
i__4601 = G__4603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4602),test$ws$readdir_$_iter__4599.call(null,cljs.core.chunk_rest.call(null,s__4600__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4602),null);
}
} else {
var da = cljs.core.first.call(null,s__4600__$2);
return cljs.core.cons.call(null,obs.onNext(da),test$ws$readdir_$_iter__4599.call(null,cljs.core.rest.call(null,s__4600__$2)));
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
test.ws.readfile = (function test$ws$readfile(filepath){
return test.ws.rx.Observable.create((function (obs){
return test.ws.fs.readFile(filepath,"utf8",(function (err,data){
if(cljs.core.truth_(err)){
return obs.onError(err);
} else {
var G__4604 = obs;
G__4604.onNext(data);

G__4604.onCompleted();

return G__4604;
}
}));
}));
});
test.ws.parseGroup = (function test$ws$parseGroup(data){
var img = cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/<a href=\"(http:.+?).gif\"/,data)),/\//));
var vec__4605 = cljs.core.re_find.call(null,/\n([\w\d]+\/[\w\d-]+)([\s\S].+?)<[\/pbr]+>/,data);
var _ = cljs.core.nth.call(null,vec__4605,(0),null);
var id = cljs.core.nth.call(null,vec__4605,(1),null);
var na = cljs.core.nth.call(null,vec__4605,(2),null);
var chars = cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,/《(.+?)》/,data));
var vec__4608 = cljs.core.re_find.call(null,/<a href.+?<\/a>[\s\S].+?\n([\s\S]+)/,data);
var ___$1 = cljs.core.nth.call(null,vec__4608,(0),null);
var text = cljs.core.nth.call(null,vec__4608,(1),null);
var obj4612 = {"img":img,"id":id,"name":na,"chars":cljs.core.apply.call(null,cljs.core.array,chars).join(","),"text":text};
return obj4612;
});
test.ws.parseHtml = (function test$ws$parseHtml(data){
return test.ws.rx.Observable.create((function (obs){
var vec__4613 = cljs.core.re_find.call(null,/(<div class=\"post-body entry-content\"[\s\S]{3000}[\s\S]+?<\/div>)/,data);
var _ = cljs.core.nth.call(null,vec__4613,(0),null);
var body = cljs.core.nth.call(null,vec__4613,(1),null);
var group = cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,/(<a href=[\s\S]{250}[\s\S]+?)\n<[\/pbr]+>\n/,body));
cljs.core.doall.call(null,(function (){var iter__4292__auto__ = ((function (vec__4613,_,body,group){
return (function test$ws$parseHtml_$_iter__4616(s__4617){
return (new cljs.core.LazySeq(null,((function (vec__4613,_,body,group){
return (function (){
var s__4617__$1 = s__4617;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4617__$1);
if(temp__5457__auto__){
var s__4617__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4617__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__4617__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__4619 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__4618 = (0);
while(true){
if((i__4618 < size__4291__auto__)){
var obj = cljs.core._nth.call(null,c__4290__auto__,i__4618);
cljs.core.chunk_append.call(null,b__4619,obs.onNext(test.ws.parseGroup.call(null,obj)));

var G__4620 = (i__4618 + (1));
i__4618 = G__4620;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4619),test$ws$parseHtml_$_iter__4616.call(null,cljs.core.chunk_rest.call(null,s__4617__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4619),null);
}
} else {
var obj = cljs.core.first.call(null,s__4617__$2);
return cljs.core.cons.call(null,obs.onNext(test.ws.parseGroup.call(null,obj)),test$ws$parseHtml_$_iter__4616.call(null,cljs.core.rest.call(null,s__4617__$2)));
}
} else {
return null;
}
break;
}
});})(vec__4613,_,body,group))
,null,null));
});})(vec__4613,_,body,group))
;
return iter__4292__auto__.call(null,group);
})());

return obs.onCompleted();
}));
});
test.ws.writefile = (function test$ws$writefile(output,data){
console.log(data.length);

return test.ws.rx.Observable.create((function (obs){
return test.ws.fs.writeFile(output,JSON.stringify(data,null,"\t"),(function (err){
if(cljs.core.truth_(err)){
return obs.onError(err);
} else {
var G__4621 = obs;
G__4621.onCompleted();

return G__4621;
}
}));
}));
});
test.ws.test_base = (function test$ws$test_base(){
return test.ws.readdir.call(null,"wsDoc").map((function (p1__4622_SHARP_){
return ["wsDoc/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__4622_SHARP_)].join('');
})).flatMap(test.ws.readfile).flatMap(test.ws.parseHtml).reduce((function (acc,x){
var G__4623 = acc;
G__4623.push(x);

return G__4623;
}),[]).flatMap(cljs.core.partial.call(null,test.ws.writefile,test.ws.output)).subscribe((function (data){
return null;
}),(function (err){
return console.log("err:",err);
}),(function (){
return console.log("write ok!");
}));
});
