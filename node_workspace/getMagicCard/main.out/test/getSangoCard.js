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
return (function test$getSangoCard$parseGroup_$_iter__4633(s__4634){
return (new cljs.core.LazySeq(null,((function (group){
return (function (){
var s__4634__$1 = s__4634;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4634__$1);
if(temp__5457__auto__){
var s__4634__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4634__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__4634__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__4636 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__4635 = (0);
while(true){
if((i__4635 < size__4291__auto__)){
var vec__4637 = cljs.core._nth.call(null,c__4290__auto__,i__4635);
var _ = cljs.core.nth.call(null,vec__4637,(0),null);
var pkgName = cljs.core.nth.call(null,vec__4637,(1),null);
var links = cljs.core.nth.call(null,vec__4637,(2),null);
cljs.core.chunk_append.call(null,b__4636,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null));

var G__4643 = (i__4635 + (1));
i__4635 = G__4643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4636),test$getSangoCard$parseGroup_$_iter__4633.call(null,cljs.core.chunk_rest.call(null,s__4634__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4636),null);
}
} else {
var vec__4640 = cljs.core.first.call(null,s__4634__$2);
var _ = cljs.core.nth.call(null,vec__4640,(0),null);
var pkgName = cljs.core.nth.call(null,vec__4640,(1),null);
var links = cljs.core.nth.call(null,vec__4640,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null),test$getSangoCard$parseGroup_$_iter__4633.call(null,cljs.core.rest.call(null,s__4634__$2)));
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
return (function test$getSangoCard$parseOne_$_iter__4644(s__4645){
return (new cljs.core.LazySeq(null,((function (group){
return (function (){
var s__4645__$1 = s__4645;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4645__$1);
if(temp__5457__auto__){
var s__4645__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4645__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__4645__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__4647 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__4646 = (0);
while(true){
if((i__4646 < size__4291__auto__)){
var vec__4648 = cljs.core._nth.call(null,c__4290__auto__,i__4646);
var _ = cljs.core.nth.call(null,vec__4648,(0),null);
var li = cljs.core.nth.call(null,vec__4648,(1),null);
var na = cljs.core.nth.call(null,vec__4648,(2),null);
cljs.core.chunk_append.call(null,b__4647,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null));

var G__4654 = (i__4646 + (1));
i__4646 = G__4654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4647),test$getSangoCard$parseOne_$_iter__4644.call(null,cljs.core.chunk_rest.call(null,s__4645__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4647),null);
}
} else {
var vec__4651 = cljs.core.first.call(null,s__4645__$2);
var _ = cljs.core.nth.call(null,vec__4651,(0),null);
var li = cljs.core.nth.call(null,vec__4651,(1),null);
var na = cljs.core.nth.call(null,vec__4651,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null),test$getSangoCard$parseOne_$_iter__4644.call(null,cljs.core.rest.call(null,s__4645__$2)));
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
return (function (p__4655){
var vec__4656 = p__4655;
var _ = cljs.core.nth.call(null,vec__4656,(0),null);
var src = cljs.core.nth.call(null,vec__4656,(1),null);
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
var vec__4659 = cljs.core.ffirst.call(null,links);
var li = cljs.core.nth.call(null,vec__4659,(0),null);
var na = cljs.core.nth.call(null,vec__4659,(1),null);
var test_link = vec__4659;
return test.getSangoCard.request.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)].join(''),((function (tabs,links,vec__4659,li,na,test_link){
return (function (err__$1,res__$1,body__$1){
var cardInfo = test.getSangoCard.parseCardInfo.call(null,body__$1);
var vec__4662 = cljs.core.first.call(null,test.getSangoCard.parseIdAndImage.call(null,cljs.core.first.call(null,cardInfo)));
var id = cljs.core.nth.call(null,vec__4662,(0),null);
var src = cljs.core.nth.call(null,vec__4662,(1),null);
var result = vec__4662;
return test.getSangoCard.request.call(null,src).pipe(test.getSangoCard.fs.createWriteStream([cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.outputDir),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".jpg"].join(''))).on("close",((function (cardInfo,vec__4662,id,src,result,tabs,links,vec__4659,li,na,test_link){
return (function (){
return cljs.core.println.call(null,"ok");
});})(cardInfo,vec__4662,id,src,result,tabs,links,vec__4659,li,na,test_link))
);
});})(tabs,links,vec__4659,li,na,test_link))
);
}));
});
test.getSangoCard.testGetAll = (function test$getSangoCard$testGetAll(){
return test.getSangoCard.request.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host),"cardlist.php"].join(''),(function (err,res,body){
var tabs = test.getSangoCard.parseGroup.call(null,body);
var links = (cljs.core.truth_(test.getSangoCard.specPackage)?test.getSangoCard.specPackage:cljs.core.map.call(null,((function (tabs){
return (function (p__4666){
var vec__4667 = p__4666;
var li = cljs.core.nth.call(null,vec__4667,(0),null);
var na = cljs.core.nth.call(null,vec__4667,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(li),"&page=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.page)].join(''),na], null);
});})(tabs))
,cljs.core.filter.call(null,((function (tabs){
return (function (p__4670){
var vec__4671 = p__4670;
var _ = cljs.core.nth.call(null,vec__4671,(0),null);
var na = cljs.core.nth.call(null,vec__4671,(1),null);
return cljs.core.some.call(null,((function (vec__4671,_,na,tabs){
return (function (p1__4665_SHARP_){
return cljs.core._EQ_.call(null,p1__4665_SHARP_,na);
});})(vec__4671,_,na,tabs))
,test.getSangoCard.packages);
});})(tabs))
,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.getSangoCard.parseOne,cljs.core.map.call(null,cljs.core.second,tabs))))));
var parseCardInfos = (function (){var iter__4292__auto__ = ((function (tabs,links){
return (function test$getSangoCard$testGetAll_$_iter__4674(s__4675){
return (new cljs.core.LazySeq(null,((function (tabs,links){
return (function (){
var s__4675__$1 = s__4675;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__4675__$1);
if(temp__5457__auto__){
var s__4675__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4675__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__4675__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__4677 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__4676 = (0);
while(true){
if((i__4676 < size__4291__auto__)){
var vec__4678 = cljs.core._nth.call(null,c__4290__auto__,i__4676);
var li = cljs.core.nth.call(null,vec__4678,(0),null);
var na = cljs.core.nth.call(null,vec__4678,(1),null);
cljs.core.chunk_append.call(null,b__4677,((function (i__4676,vec__4678,li,na,c__4290__auto__,size__4291__auto__,b__4677,s__4675__$2,temp__5457__auto__,tabs,links){
return (function (cb){
return test.getSangoCard.request.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)].join(''),((function (i__4676,vec__4678,li,na,c__4290__auto__,size__4291__auto__,b__4677,s__4675__$2,temp__5457__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){
cljs.core.println.call(null,na,li);

if(cljs.core.truth_(err__$1)){
return cb.call(null,err__$1);
} else {
var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.getSangoCard.parseIdAndImage,test.getSangoCard.parseCardInfo.call(null,body__$1)));
return setTimeout(((function (i__4676,cardInfo,vec__4678,li,na,c__4290__auto__,size__4291__auto__,b__4677,s__4675__$2,temp__5457__auto__,tabs,links){
return (function (){
return cb.call(null,null,cardInfo);
});})(i__4676,cardInfo,vec__4678,li,na,c__4290__auto__,size__4291__auto__,b__4677,s__4675__$2,temp__5457__auto__,tabs,links))
,(1000));
}
});})(i__4676,vec__4678,li,na,c__4290__auto__,size__4291__auto__,b__4677,s__4675__$2,temp__5457__auto__,tabs,links))
);
});})(i__4676,vec__4678,li,na,c__4290__auto__,size__4291__auto__,b__4677,s__4675__$2,temp__5457__auto__,tabs,links))
);

var G__4688 = (i__4676 + (1));
i__4676 = G__4688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4677),test$getSangoCard$testGetAll_$_iter__4674.call(null,cljs.core.chunk_rest.call(null,s__4675__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4677),null);
}
} else {
var vec__4681 = cljs.core.first.call(null,s__4675__$2);
var li = cljs.core.nth.call(null,vec__4681,(0),null);
var na = cljs.core.nth.call(null,vec__4681,(1),null);
return cljs.core.cons.call(null,((function (vec__4681,li,na,s__4675__$2,temp__5457__auto__,tabs,links){
return (function (cb){
return test.getSangoCard.request.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)].join(''),((function (vec__4681,li,na,s__4675__$2,temp__5457__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){
cljs.core.println.call(null,na,li);

if(cljs.core.truth_(err__$1)){
return cb.call(null,err__$1);
} else {
var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.getSangoCard.parseIdAndImage,test.getSangoCard.parseCardInfo.call(null,body__$1)));
return setTimeout(((function (cardInfo,vec__4681,li,na,s__4675__$2,temp__5457__auto__,tabs,links){
return (function (){
return cb.call(null,null,cardInfo);
});})(cardInfo,vec__4681,li,na,s__4675__$2,temp__5457__auto__,tabs,links))
,(1000));
}
});})(vec__4681,li,na,s__4675__$2,temp__5457__auto__,tabs,links))
);
});})(vec__4681,li,na,s__4675__$2,temp__5457__auto__,tabs,links))
,test$getSangoCard$testGetAll_$_iter__4674.call(null,cljs.core.rest.call(null,s__4675__$2)));
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
return (function (p__4684,cb){
var vec__4685 = p__4684;
var id = cljs.core.nth.call(null,vec__4685,(0),null);
var src = cljs.core.nth.call(null,vec__4685,(1),null);
cljs.core.println.call(null,"writing... ",src," to ",id,".jpg ...");

test.getSangoCard.request.call(null,src).pipe(test.getSangoCard.fs.createWriteStream([cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.outputDir),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),".jpg"].join(''))).on("close",((function (vec__4685,id,src,tabs,links,parseCardInfos){
return (function (){
return setTimeout(cb,(3000));
});})(vec__4685,id,src,tabs,links,parseCardInfos))
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
