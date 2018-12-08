// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('test.getSangoCard');
goog.require('cljs.core');
test.getSangoCard.async = require("async");
test.getSangoCard.request = require("request");
test.getSangoCard.fs = require("fs");
test.getSangoCard.outputDir = "output/";
test.getSangoCard.host = "http://sangokushi-taisen-tcg.segataiwan.com.tw/";
test.getSangoCard.packages = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PR\u5361\u7247\uFF1APR"], null);
test.getSangoCard.page = (1);
test.getSangoCard.specPackage = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=149&page=1",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=150&page=1",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=151&page=1",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=152&page=1",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=153&page=1",""], null)], null);
test.getSangoCard.parseGroup = (function test$getSangoCard$parseGroup(content){
var group = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,["<li><p>(\\D+)<\\/p>\\s+(<ul>\\s+<li>.*<\\/ul>)\\s+<\\/li>"].join('')),content);
var iter__4292__auto__ = ((function (group){
return (function test$getSangoCard$parseGroup_$_iter__4650(s__4651){
return (new cljs.core.LazySeq(null,((function (group){
return (function (){
var s__4651__$1 = s__4651;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4651__$1);
if(temp__5457__auto__){
var s__4651__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4651__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__4651__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__4653 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__4652 = (0);
while(true){
if((i__4652 < size__4291__auto__)){
var vec__4654 = cljs.core._nth.call(null,c__4290__auto__,i__4652);
var _ = cljs.core.nth.call(null,vec__4654,(0),null);
var pkgName = cljs.core.nth.call(null,vec__4654,(1),null);
var links = cljs.core.nth.call(null,vec__4654,(2),null);
cljs.core.chunk_append.call(null,b__4653,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null));

var G__4660 = (i__4652 + (1));
i__4652 = G__4660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4653),test$getSangoCard$parseGroup_$_iter__4650.call(null,cljs.core.chunk_rest.call(null,s__4651__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4653),null);
}
} else {
var vec__4657 = cljs.core.first.call(null,s__4651__$2);
var _ = cljs.core.nth.call(null,vec__4657,(0),null);
var pkgName = cljs.core.nth.call(null,vec__4657,(1),null);
var links = cljs.core.nth.call(null,vec__4657,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null),test$getSangoCard$parseGroup_$_iter__4650.call(null,cljs.core.rest.call(null,s__4651__$2)));
}
} else {
return null;
}
break;
}
});})(group))
,null,null));
});})(group))
;
return iter__4292__auto__.call(null,group);
});
test.getSangoCard.parseOne = (function test$getSangoCard$parseOne(link){
var group = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,["<li><a href=\"([\\w|.|?|=]+)\">(\\D+)<\\/a><\\/li>"].join('')),link);
var iter__4292__auto__ = ((function (group){
return (function test$getSangoCard$parseOne_$_iter__4661(s__4662){
return (new cljs.core.LazySeq(null,((function (group){
return (function (){
var s__4662__$1 = s__4662;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4662__$1);
if(temp__5457__auto__){
var s__4662__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4662__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__4662__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__4664 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__4663 = (0);
while(true){
if((i__4663 < size__4291__auto__)){
var vec__4665 = cljs.core._nth.call(null,c__4290__auto__,i__4663);
var _ = cljs.core.nth.call(null,vec__4665,(0),null);
var li = cljs.core.nth.call(null,vec__4665,(1),null);
var na = cljs.core.nth.call(null,vec__4665,(2),null);
cljs.core.chunk_append.call(null,b__4664,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null));

var G__4671 = (i__4663 + (1));
i__4663 = G__4671;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4664),test$getSangoCard$parseOne_$_iter__4661.call(null,cljs.core.chunk_rest.call(null,s__4662__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4664),null);
}
} else {
var vec__4668 = cljs.core.first.call(null,s__4662__$2);
var _ = cljs.core.nth.call(null,vec__4668,(0),null);
var li = cljs.core.nth.call(null,vec__4668,(1),null);
var na = cljs.core.nth.call(null,vec__4668,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null),test$getSangoCard$parseOne_$_iter__4661.call(null,cljs.core.rest.call(null,s__4662__$2)));
}
} else {
return null;
}
break;
}
});})(group))
,null,null));
});})(group))
;
return iter__4292__auto__.call(null,group);
});
test.getSangoCard.parseCardInfo = (function test$getSangoCard$parseCardInfo(content){
var group = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,["<div class=\"cardinfo\">([\\D|\\d]{500})"].join('')),content);
return cljs.core.map.call(null,cljs.core.second,group);
});
test.getSangoCard.parseIdAndImage = (function test$getSangoCard$parseIdAndImage(content){
var ids = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,["<span>([ANVPRCPOSD\\d]*-\\d+)\\(?[\\d-]*\\)?<\\/span>"].join('')),content);
var imgsrcs = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,["img src\\s*=\\s*\"(.+?)\""].join('')),content);
return cljs.core.map.call(null,cljs.core.list,cljs.core.map.call(null,cljs.core.second,ids),cljs.core.map.call(null,((function (ids,imgsrcs){
return (function (p__4672){
var vec__4673 = p__4672;
var _ = cljs.core.nth.call(null,vec__4673,(0),null);
var src = cljs.core.nth.call(null,vec__4673,(1),null);
if(cljs.core._EQ_.call(null,(0),src.indexOf("http"))){
return src;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(src)].join('');

}
});})(ids,imgsrcs))
,imgsrcs));
});
test.getSangoCard.testGetOne = (function test$getSangoCard$testGetOne(){
return test.getSangoCard.request.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host),"cardlist.php"].join(''),(function (err,res,body){
var tabs = test.getSangoCard.parseGroup.call(null,body);
var links = cljs.core.map.call(null,test.getSangoCard.parseOne,cljs.core.map.call(null,cljs.core.second,tabs));
var vec__4676 = cljs.core.ffirst.call(null,links);
var li = cljs.core.nth.call(null,vec__4676,(0),null);
var na = cljs.core.nth.call(null,vec__4676,(1),null);
var test_link = vec__4676;
return test.getSangoCard.request.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)].join(''),((function (tabs,links,vec__4676,li,na,test_link){
return (function (err__$1,res__$1,body__$1){
var cardInfo = test.getSangoCard.parseCardInfo.call(null,body__$1);
var vec__4679 = cljs.core.first.call(null,test.getSangoCard.parseIdAndImage.call(null,cljs.core.first.call(null,cardInfo)));
var id = cljs.core.nth.call(null,vec__4679,(0),null);
var src = cljs.core.nth.call(null,vec__4679,(1),null);
var result = vec__4679;
return test.getSangoCard.request.call(null,src).pipe(test.getSangoCard.fs.createWriteStream([cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.outputDir),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".jpg"].join(''))).on("close",((function (cardInfo,vec__4679,id,src,result,tabs,links,vec__4676,li,na,test_link){
return (function (){
return cljs.core.println.call(null,"ok");
});})(cardInfo,vec__4679,id,src,result,tabs,links,vec__4676,li,na,test_link))
);
});})(tabs,links,vec__4676,li,na,test_link))
);
}));
});
test.getSangoCard.testGetAll = (function test$getSangoCard$testGetAll(){
return test.getSangoCard.request.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host),"cardlist.php"].join(''),(function (err,res,body){
var tabs = test.getSangoCard.parseGroup.call(null,body);
var links = (cljs.core.truth_(test.getSangoCard.specPackage)?test.getSangoCard.specPackage:cljs.core.map.call(null,((function (tabs){
return (function (p__4683){
var vec__4684 = p__4683;
var li = cljs.core.nth.call(null,vec__4684,(0),null);
var na = cljs.core.nth.call(null,vec__4684,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(li),"&page=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.page)].join(''),na], null);
});})(tabs))
,cljs.core.filter.call(null,((function (tabs){
return (function (p__4687){
var vec__4688 = p__4687;
var _ = cljs.core.nth.call(null,vec__4688,(0),null);
var na = cljs.core.nth.call(null,vec__4688,(1),null);
return cljs.core.some.call(null,((function (vec__4688,_,na,tabs){
return (function (p1__4682_SHARP_){
return cljs.core._EQ_.call(null,p1__4682_SHARP_,na);
});})(vec__4688,_,na,tabs))
,test.getSangoCard.packages);
});})(tabs))
,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.getSangoCard.parseOne,cljs.core.map.call(null,cljs.core.second,tabs))))));
var parseCardInfos = (function (){var iter__4292__auto__ = ((function (tabs,links){
return (function test$getSangoCard$testGetAll_$_iter__4691(s__4692){
return (new cljs.core.LazySeq(null,((function (tabs,links){
return (function (){
var s__4692__$1 = s__4692;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4692__$1);
if(temp__5457__auto__){
var s__4692__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4692__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__4692__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__4694 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__4693 = (0);
while(true){
if((i__4693 < size__4291__auto__)){
var vec__4695 = cljs.core._nth.call(null,c__4290__auto__,i__4693);
var li = cljs.core.nth.call(null,vec__4695,(0),null);
var na = cljs.core.nth.call(null,vec__4695,(1),null);
cljs.core.chunk_append.call(null,b__4694,((function (i__4693,vec__4695,li,na,c__4290__auto__,size__4291__auto__,b__4694,s__4692__$2,temp__5457__auto__,tabs,links){
return (function (cb){
return test.getSangoCard.request.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)].join(''),((function (i__4693,vec__4695,li,na,c__4290__auto__,size__4291__auto__,b__4694,s__4692__$2,temp__5457__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){
cljs.core.println.call(null,na,li);

if(cljs.core.truth_(err__$1)){
return cb.call(null,err__$1);
} else {
var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.getSangoCard.parseIdAndImage,test.getSangoCard.parseCardInfo.call(null,body__$1)));
return setTimeout(((function (i__4693,cardInfo,vec__4695,li,na,c__4290__auto__,size__4291__auto__,b__4694,s__4692__$2,temp__5457__auto__,tabs,links){
return (function (){
return cb.call(null,null,cardInfo);
});})(i__4693,cardInfo,vec__4695,li,na,c__4290__auto__,size__4291__auto__,b__4694,s__4692__$2,temp__5457__auto__,tabs,links))
,(1000));
}
});})(i__4693,vec__4695,li,na,c__4290__auto__,size__4291__auto__,b__4694,s__4692__$2,temp__5457__auto__,tabs,links))
);
});})(i__4693,vec__4695,li,na,c__4290__auto__,size__4291__auto__,b__4694,s__4692__$2,temp__5457__auto__,tabs,links))
);

var G__4705 = (i__4693 + (1));
i__4693 = G__4705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4694),test$getSangoCard$testGetAll_$_iter__4691.call(null,cljs.core.chunk_rest.call(null,s__4692__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4694),null);
}
} else {
var vec__4698 = cljs.core.first.call(null,s__4692__$2);
var li = cljs.core.nth.call(null,vec__4698,(0),null);
var na = cljs.core.nth.call(null,vec__4698,(1),null);
return cljs.core.cons.call(null,((function (vec__4698,li,na,s__4692__$2,temp__5457__auto__,tabs,links){
return (function (cb){
return test.getSangoCard.request.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)].join(''),((function (vec__4698,li,na,s__4692__$2,temp__5457__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){
cljs.core.println.call(null,na,li);

if(cljs.core.truth_(err__$1)){
return cb.call(null,err__$1);
} else {
var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.getSangoCard.parseIdAndImage,test.getSangoCard.parseCardInfo.call(null,body__$1)));
return setTimeout(((function (cardInfo,vec__4698,li,na,s__4692__$2,temp__5457__auto__,tabs,links){
return (function (){
return cb.call(null,null,cardInfo);
});})(cardInfo,vec__4698,li,na,s__4692__$2,temp__5457__auto__,tabs,links))
,(1000));
}
});})(vec__4698,li,na,s__4692__$2,temp__5457__auto__,tabs,links))
);
});})(vec__4698,li,na,s__4692__$2,temp__5457__auto__,tabs,links))
,test$getSangoCard$testGetAll_$_iter__4691.call(null,cljs.core.rest.call(null,s__4692__$2)));
}
} else {
return null;
}
break;
}
});})(tabs,links))
,null,null));
});})(tabs,links))
;
return iter__4292__auto__.call(null,links);
})();
var writeImage = ((function (tabs,links,parseCardInfos){
return (function (p__4701,cb){
var vec__4702 = p__4701;
var id = cljs.core.nth.call(null,vec__4702,(0),null);
var src = cljs.core.nth.call(null,vec__4702,(1),null);
cljs.core.println.call(null,"writing... ",src," to ",id,".jpg ...");

test.getSangoCard.request.call(null,src).pipe(test.getSangoCard.fs.createWriteStream([cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.outputDir),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".jpg"].join(''))).on("close",((function (vec__4702,id,src,tabs,links,parseCardInfos){
return (function (){
return setTimeout(cb,(3000));
});})(vec__4702,id,src,tabs,links,parseCardInfos))
);

return null;
});})(tabs,links,parseCardInfos))
;
return test.getSangoCard.async.series(cljs.core.clj__GT_js.call(null,parseCardInfos),((function (tabs,links,parseCardInfos,writeImage){
return (function (err__$1,rets){
var allList = cljs.core.clj__GT_js.call(null,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.js__GT_clj.call(null,rets)));
return test.getSangoCard.async.eachSeries(allList,writeImage,((function (allList,tabs,links,parseCardInfos,writeImage){
return (function (err__$2,ret){
return cljs.core.println.call(null,"ok!!");
});})(allList,tabs,links,parseCardInfos,writeImage))
);
});})(tabs,links,parseCardInfos,writeImage))
);
}));
});
