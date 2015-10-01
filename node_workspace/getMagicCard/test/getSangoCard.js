// Compiled by ClojureScript 0.0-2268
goog.provide('test.getSangoCard');
goog.require('cljs.core');
test.getSangoCard.async = require("async");
test.getSangoCard.request = require("request");
test.getSangoCard.fs = require("fs");
test.getSangoCard.outputDir = "output/";
test.getSangoCard.host = "http://sangokushi-taisen-tcg.segataiwan.com.tw/";
test.getSangoCard.packages = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PR\u5361\u7247\uFF1APR"], null);
test.getSangoCard.page = (1);
test.getSangoCard.specPackage = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=120&page=2","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=120&page=3","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=120&page=4","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=120&page=5","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=28&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=22&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=29&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=24&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=30&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=27&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=95&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=96&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=97&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=98&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=99&page=1","2"], null)], null);
test.getSangoCard.parseGroup = (function parseGroup(content){var group = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<li><p>(\\D+)<\\/p>\\s+(<ul>\\s+<li>.*<\\/ul>)\\s+<\\/li>")),content);var iter__4276__auto__ = ((function (group){
return (function iter__16400(s__16401){return (new cljs.core.LazySeq(null,((function (group){
return (function (){var s__16401__$1 = s__16401;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16401__$1);if(temp__4126__auto__)
{var s__16401__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16401__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__16401__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__16403 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__16402 = (0);while(true){
if((i__16402 < size__4275__auto__))
{var vec__16406 = cljs.core._nth.call(null,c__4274__auto__,i__16402);var _ = cljs.core.nth.call(null,vec__16406,(0),null);var pkgName = cljs.core.nth.call(null,vec__16406,(1),null);var links = cljs.core.nth.call(null,vec__16406,(2),null);cljs.core.chunk_append.call(null,b__16403,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null));
{
var G__16408 = (i__16402 + (1));
i__16402 = G__16408;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16403),iter__16400.call(null,cljs.core.chunk_rest.call(null,s__16401__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16403),null);
}
} else
{var vec__16407 = cljs.core.first.call(null,s__16401__$2);var _ = cljs.core.nth.call(null,vec__16407,(0),null);var pkgName = cljs.core.nth.call(null,vec__16407,(1),null);var links = cljs.core.nth.call(null,vec__16407,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null),iter__16400.call(null,cljs.core.rest.call(null,s__16401__$2)));
}
} else
{return null;
}
break;
}
});})(group))
,null,null));
});})(group))
;return iter__4276__auto__.call(null,group);
});
test.getSangoCard.parseOne = (function parseOne(link){var group = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<li><a href=\"([\\w|.|?|=]+)\">(\\D+)<\\/a><\\/li>")),link);var iter__4276__auto__ = ((function (group){
return (function iter__16417(s__16418){return (new cljs.core.LazySeq(null,((function (group){
return (function (){var s__16418__$1 = s__16418;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16418__$1);if(temp__4126__auto__)
{var s__16418__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16418__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__16418__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__16420 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__16419 = (0);while(true){
if((i__16419 < size__4275__auto__))
{var vec__16423 = cljs.core._nth.call(null,c__4274__auto__,i__16419);var _ = cljs.core.nth.call(null,vec__16423,(0),null);var li = cljs.core.nth.call(null,vec__16423,(1),null);var na = cljs.core.nth.call(null,vec__16423,(2),null);cljs.core.chunk_append.call(null,b__16420,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null));
{
var G__16425 = (i__16419 + (1));
i__16419 = G__16425;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16420),iter__16417.call(null,cljs.core.chunk_rest.call(null,s__16418__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16420),null);
}
} else
{var vec__16424 = cljs.core.first.call(null,s__16418__$2);var _ = cljs.core.nth.call(null,vec__16424,(0),null);var li = cljs.core.nth.call(null,vec__16424,(1),null);var na = cljs.core.nth.call(null,vec__16424,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null),iter__16417.call(null,cljs.core.rest.call(null,s__16418__$2)));
}
} else
{return null;
}
break;
}
});})(group))
,null,null));
});})(group))
;return iter__4276__auto__.call(null,group);
});
test.getSangoCard.parseCardInfo = (function parseCardInfo(content){var group = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<div class=\"cardinfo\">([\\D|\\d]{500})")),content);return cljs.core.map.call(null,cljs.core.second,group);
});
test.getSangoCard.parseIdAndImage = (function parseIdAndImage(content){var ids = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<span>([ANVPRCPOS]+-\\d+)\\(?[\\d-]*\\)?<\\/span>")),content);var imgsrcs = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("img src\\s*=\\s*\"(.+?)\"")),content);return cljs.core.map.call(null,cljs.core.list,cljs.core.map.call(null,cljs.core.second,ids),cljs.core.map.call(null,((function (ids,imgsrcs){
return (function (p__16428){var vec__16429 = p__16428;var _ = cljs.core.nth.call(null,vec__16429,(0),null);var src = cljs.core.nth.call(null,vec__16429,(1),null);if(cljs.core._EQ_.call(null,(0),src.indexOf("http")))
{return src;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src));
} else
{return null;
}
}
});})(ids,imgsrcs))
,imgsrcs));
});
test.getSangoCard.testGetOne = (function testGetOne(){return test.getSangoCard.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host)+"cardlist.php"),(function (err,res,body){var tabs = test.getSangoCard.parseGroup.call(null,body);var links = cljs.core.map.call(null,test.getSangoCard.parseOne,cljs.core.map.call(null,cljs.core.second,tabs));var vec__16432 = cljs.core.ffirst.call(null,links);var li = cljs.core.nth.call(null,vec__16432,(0),null);var na = cljs.core.nth.call(null,vec__16432,(1),null);var test_link = vec__16432;return test.getSangoCard.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (tabs,links,vec__16432,li,na,test_link){
return (function (err__$1,res__$1,body__$1){var cardInfo = test.getSangoCard.parseCardInfo.call(null,body__$1);var vec__16433 = cljs.core.first.call(null,test.getSangoCard.parseIdAndImage.call(null,cljs.core.first.call(null,cardInfo)));var id = cljs.core.nth.call(null,vec__16433,(0),null);var src = cljs.core.nth.call(null,vec__16433,(1),null);var result = vec__16433;return test.getSangoCard.request.call(null,src).pipe(test.getSangoCard.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.outputDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",((function (cardInfo,vec__16433,id,src,result,tabs,links,vec__16432,li,na,test_link){
return (function (){return cljs.core.println.call(null,"ok");
});})(cardInfo,vec__16433,id,src,result,tabs,links,vec__16432,li,na,test_link))
);
});})(tabs,links,vec__16432,li,na,test_link))
);
}));
});
test.getSangoCard.testGetAll = (function testGetAll(){return test.getSangoCard.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host)+"cardlist.php"),(function (err,res,body){var tabs = test.getSangoCard.parseGroup.call(null,body);var links = (cljs.core.truth_(test.getSangoCard.specPackage)?test.getSangoCard.specPackage:cljs.core.map.call(null,((function (tabs){
return (function (p__16449){var vec__16450 = p__16449;var li = cljs.core.nth.call(null,vec__16450,(0),null);var na = cljs.core.nth.call(null,vec__16450,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)+"&page="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.page)),na], null);
});})(tabs))
,cljs.core.filter.call(null,((function (tabs){
return (function (p__16451){var vec__16452 = p__16451;var _ = cljs.core.nth.call(null,vec__16452,(0),null);var na = cljs.core.nth.call(null,vec__16452,(1),null);return cljs.core.some.call(null,((function (vec__16452,_,na,tabs){
return (function (p1__16434_SHARP_){return cljs.core._EQ_.call(null,p1__16434_SHARP_,na);
});})(vec__16452,_,na,tabs))
,test.getSangoCard.packages);
});})(tabs))
,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.getSangoCard.parseOne,cljs.core.map.call(null,cljs.core.second,tabs))))));var parseCardInfos = (function (){var iter__4276__auto__ = ((function (tabs,links){
return (function iter__16453(s__16454){return (new cljs.core.LazySeq(null,((function (tabs,links){
return (function (){var s__16454__$1 = s__16454;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__16454__$1);if(temp__4126__auto__)
{var s__16454__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16454__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__16454__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__16456 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__16455 = (0);while(true){
if((i__16455 < size__4275__auto__))
{var vec__16459 = cljs.core._nth.call(null,c__4274__auto__,i__16455);var li = cljs.core.nth.call(null,vec__16459,(0),null);var na = cljs.core.nth.call(null,vec__16459,(1),null);cljs.core.chunk_append.call(null,b__16456,((function (i__16455,vec__16459,li,na,c__4274__auto__,size__4275__auto__,b__16456,s__16454__$2,temp__4126__auto__,tabs,links){
return (function (cb){return test.getSangoCard.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (i__16455,vec__16459,li,na,c__4274__auto__,size__4275__auto__,b__16456,s__16454__$2,temp__4126__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){cljs.core.println.call(null,na,li);
if(cljs.core.truth_(err__$1))
{return cb.call(null,err__$1);
} else
{var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.getSangoCard.parseIdAndImage,test.getSangoCard.parseCardInfo.call(null,body__$1)));return setTimeout(((function (i__16455,cardInfo,vec__16459,li,na,c__4274__auto__,size__4275__auto__,b__16456,s__16454__$2,temp__4126__auto__,tabs,links){
return (function (){return cb.call(null,null,cardInfo);
});})(i__16455,cardInfo,vec__16459,li,na,c__4274__auto__,size__4275__auto__,b__16456,s__16454__$2,temp__4126__auto__,tabs,links))
,(1000));
}
});})(i__16455,vec__16459,li,na,c__4274__auto__,size__4275__auto__,b__16456,s__16454__$2,temp__4126__auto__,tabs,links))
);
});})(i__16455,vec__16459,li,na,c__4274__auto__,size__4275__auto__,b__16456,s__16454__$2,temp__4126__auto__,tabs,links))
);
{
var G__16463 = (i__16455 + (1));
i__16455 = G__16463;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16456),iter__16453.call(null,cljs.core.chunk_rest.call(null,s__16454__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16456),null);
}
} else
{var vec__16460 = cljs.core.first.call(null,s__16454__$2);var li = cljs.core.nth.call(null,vec__16460,(0),null);var na = cljs.core.nth.call(null,vec__16460,(1),null);return cljs.core.cons.call(null,((function (vec__16460,li,na,s__16454__$2,temp__4126__auto__,tabs,links){
return (function (cb){return test.getSangoCard.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (vec__16460,li,na,s__16454__$2,temp__4126__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){cljs.core.println.call(null,na,li);
if(cljs.core.truth_(err__$1))
{return cb.call(null,err__$1);
} else
{var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.getSangoCard.parseIdAndImage,test.getSangoCard.parseCardInfo.call(null,body__$1)));return setTimeout(((function (cardInfo,vec__16460,li,na,s__16454__$2,temp__4126__auto__,tabs,links){
return (function (){return cb.call(null,null,cardInfo);
});})(cardInfo,vec__16460,li,na,s__16454__$2,temp__4126__auto__,tabs,links))
,(1000));
}
});})(vec__16460,li,na,s__16454__$2,temp__4126__auto__,tabs,links))
);
});})(vec__16460,li,na,s__16454__$2,temp__4126__auto__,tabs,links))
,iter__16453.call(null,cljs.core.rest.call(null,s__16454__$2)));
}
} else
{return null;
}
break;
}
});})(tabs,links))
,null,null));
});})(tabs,links))
;return iter__4276__auto__.call(null,links);
})();var writeImage = ((function (tabs,links,parseCardInfos){
return (function (p__16461,cb){var vec__16462 = p__16461;var id = cljs.core.nth.call(null,vec__16462,(0),null);var src = cljs.core.nth.call(null,vec__16462,(1),null);cljs.core.println.call(null,"writing... ",src," to ",id,".jpg ...");
test.getSangoCard.request.call(null,src).pipe(test.getSangoCard.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.outputDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",((function (vec__16462,id,src,tabs,links,parseCardInfos){
return (function (){return setTimeout(cb,(3000));
});})(vec__16462,id,src,tabs,links,parseCardInfos))
);
return null;
});})(tabs,links,parseCardInfos))
;return test.getSangoCard.async.series(cljs.core.clj__GT_js.call(null,parseCardInfos),((function (tabs,links,parseCardInfos,writeImage){
return (function (err__$1,rets){var allList = cljs.core.clj__GT_js.call(null,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.js__GT_clj.call(null,rets)));return test.getSangoCard.async.eachSeries(allList,writeImage,((function (allList,tabs,links,parseCardInfos,writeImage){
return (function (err__$2,ret){return cljs.core.println.call(null,"ok!!");
});})(allList,tabs,links,parseCardInfos,writeImage))
);
});})(tabs,links,parseCardInfos,writeImage))
);
}));
});
