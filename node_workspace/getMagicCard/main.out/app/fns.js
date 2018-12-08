// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('app.fns');
goog.require('cljs.core');
app.fns.rx = require("rx");
app.fns.fs = require("fs");
app.fns.readdir = (function app$fns$readdir(filepath){
return app.fns.rx.Observable.create((function (obs){
return app.fns.fs.readdir(filepath,(function (err,data){
if(cljs.core.truth_(err)){
return obs.onError(err);
} else {
cljs.core.doall.call(null,(function (){var iter__4292__auto__ = (function app$fns$readdir_$_iter__4708(s__4709){
return (new cljs.core.LazySeq(null,(function (){
var s__4709__$1 = s__4709;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4709__$1);
if(temp__5457__auto__){
var s__4709__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4709__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__4709__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__4711 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__4710 = (0);
while(true){
if((i__4710 < size__4291__auto__)){
var da = cljs.core._nth.call(null,c__4290__auto__,i__4710);
cljs.core.chunk_append.call(null,b__4711,obs.onNext(da));

var G__4712 = (i__4710 + (1));
i__4710 = G__4712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4711),app$fns$readdir_$_iter__4708.call(null,cljs.core.chunk_rest.call(null,s__4709__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4711),null);
}
} else {
var da = cljs.core.first.call(null,s__4709__$2);
return cljs.core.cons.call(null,obs.onNext(da),app$fns$readdir_$_iter__4708.call(null,cljs.core.rest.call(null,s__4709__$2)));
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
app.fns.readfile = (function app$fns$readfile(filepath){
return app.fns.rx.Observable.create((function (obs){
return app.fns.fs.readFile(filepath,"utf8",(function (err,data){
if(cljs.core.truth_(err)){
return obs.onError(err);
} else {
var G__4713 = obs;
G__4713.onNext(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filepath,data], null));

G__4713.onCompleted();

return G__4713;
}
}));
}));
});
app.fns.writefile = (function app$fns$writefile(output,data){
return app.fns.rx.Observable.create((function (obs){
return app.fns.fs.writeFile(output,data,(function (err){
if(cljs.core.truth_(err)){
return obs.onError(err);
} else {
var G__4714 = obs;
G__4714.onCompleted();

return G__4714;
}
}));
}));
});
