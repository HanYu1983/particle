// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('test.getMagicCard');
goog.require('cljs.core');
goog.require('lib.tool');
test.getMagicCard.async = require("async");
test.getMagicCard.request = require("request");
test.getMagicCard.fs = require("fs");
test.getMagicCard.cardPath = (function test$getMagicCard$cardPath(id){
return ["http://\u684C\u904A.net/mtg/singles_market/card.php?num=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
});
test.getMagicCard.getFile = (function test$getMagicCard$getFile(filename,cb){
return test.getMagicCard.fs.readFile(filename,"utf8",(function (err,data){
if(cljs.core.truth_(err)){
return test.getMagicCard.fs.writeFile(filename,"{}",(function (err__$1){
return cb.call(null,err__$1,new cljs.core.PersistentArrayMap(null, 1, ["images",cljs.core.PersistentArrayMap.EMPTY], null));
}));
} else {
return cb.call(null,null,cljs.core.js__GT_clj.call(null,JSON.parse(data)));
}
}));
});
test.getMagicCard.parseImageSrc = (function test$getMagicCard$parseImageSrc(content){
var tags = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,["<td valign=\"TOP\" align=\"center\" width=\"400\">.+\\s+<img src\\s*=\\s*\"(.+?)\" alt=\"(.+?)\""].join('')),content);
return cljs.core.first.call(null,(function (){var iter__4292__auto__ = ((function (tags){
return (function test$getMagicCard$parseImageSrc_$_iter__4776(s__4777){
return (new cljs.core.LazySeq(null,((function (tags){
return (function (){
var s__4777__$1 = s__4777;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4777__$1);
if(temp__5457__auto__){
var s__4777__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4777__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__4777__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__4779 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__4778 = (0);
while(true){
if((i__4778 < size__4291__auto__)){
var vec__4780 = cljs.core._nth.call(null,c__4290__auto__,i__4778);
var _ = cljs.core.nth.call(null,vec__4780,(0),null);
var src = cljs.core.nth.call(null,vec__4780,(1),null);
var title = cljs.core.nth.call(null,vec__4780,(2),null);
cljs.core.chunk_append.call(null,b__4779,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,src], null));

var G__4786 = (i__4778 + (1));
i__4778 = G__4786;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4779),test$getMagicCard$parseImageSrc_$_iter__4776.call(null,cljs.core.chunk_rest.call(null,s__4777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4779),null);
}
} else {
var vec__4783 = cljs.core.first.call(null,s__4777__$2);
var _ = cljs.core.nth.call(null,vec__4783,(0),null);
var src = cljs.core.nth.call(null,vec__4783,(1),null);
var title = cljs.core.nth.call(null,vec__4783,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,src], null),test$getMagicCard$parseImageSrc_$_iter__4776.call(null,cljs.core.rest.call(null,s__4777__$2)));
}
} else {
return null;
}
break;
}
});})(tags))
,null,null));
});})(tags))
;
return iter__4292__auto__.call(null,tags);
})());
});
test.getMagicCard.getKeyAndImageSrc = (function test$getMagicCard$getKeyAndImageSrc(id,cb){
return lib.tool.getUrl.call(null,test.getMagicCard.cardPath.call(null,id),(function (err,data){
if(cljs.core.truth_(err)){
return cb.call(null,err);
} else {
var vec__4787 = test.getMagicCard.parseImageSrc.call(null,data);
var _ = cljs.core.nth.call(null,vec__4787,(0),null);
var src = cljs.core.nth.call(null,vec__4787,(1),null);
var ret = vec__4787;
return cb.call(null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));
}
}));
});
test.getMagicCard.appendTo = (function test$getMagicCard$appendTo(a,d,id,cb){
return test.getMagicCard.getKeyAndImageSrc.call(null,id,(function (err,data){
if(cljs.core.truth_(err)){
return cb.call(null,err);
} else {
var vec__4790 = data;
var id__$1 = cljs.core.nth.call(null,vec__4790,(0),null);
var src = cljs.core.nth.call(null,vec__4790,(1),null);
cljs.core.println.call(null,data);

cljs.core.reset_BANG_.call(null,a,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,a),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["images",id__$1], null),src));

return setTimeout(cb,d);
}
}));
});
test.getMagicCard.main = (function test$getMagicCard$main(start,cnt,delay){
test.getMagicCard.getFile.call(null,"magic.json",(function (err,data){
if(cljs.core.truth_(err)){
return cljs.core.println.call(null,err);
} else {
var da = cljs.core.atom.call(null,data);
return test.getMagicCard.async.eachSeries(cljs.core.clj__GT_js.call(null,cljs.core.range.call(null,start,(start + cnt))),cljs.core.partial.call(null,test.getMagicCard.appendTo,da,delay),((function (da){
return (function (err__$1){
cljs.core.println.call(null,err__$1);

return test.getMagicCard.fs.writeFile("magic.json",JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,da))),((function (da){
return (function (err__$2){
if(cljs.core.truth_(err__$2)){
return cljs.core.println.call(null,err__$2);
} else {
return cljs.core.println.call(null,"ok!");
}
});})(da))
);
});})(da))
);
}
}));

return null;
});
