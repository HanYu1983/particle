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
test.getSangoCard.specPackage = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=120&page=2",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=120&page=3",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=120&page=4",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=120&page=5",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=28&page=1",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=22&page=1",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=29&page=1",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=24&page=1",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=30&page=1",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=27&page=1",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=95&page=1",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=96&page=1",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=97&page=1",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=98&page=1",""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=99&page=1",""], null)], null);
test.getSangoCard.parseGroup = (function parseGroup(content){var group = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<li><p>(\\D+)<\\/p>\\s+(<ul>\\s+<li>.*<\\/ul>)\\s+<\\/li>")),content);var iter__4276__auto__ = ((function (group){
return (function iter__5173(s__5174){return (new cljs.core.LazySeq(null,((function (group){
return (function (){var s__5174__$1 = s__5174;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5174__$1);if(temp__4126__auto__)
{var s__5174__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5174__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5174__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5176 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5175 = (0);while(true){
if((i__5175 < size__4275__auto__))
{var vec__5179 = cljs.core._nth.call(null,c__4274__auto__,i__5175);var _ = cljs.core.nth.call(null,vec__5179,(0),null);var pkgName = cljs.core.nth.call(null,vec__5179,(1),null);var links = cljs.core.nth.call(null,vec__5179,(2),null);cljs.core.chunk_append.call(null,b__5176,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null));
{
var G__5181 = (i__5175 + (1));
i__5175 = G__5181;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5176),iter__5173.call(null,cljs.core.chunk_rest.call(null,s__5174__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5176),null);
}
} else
{var vec__5180 = cljs.core.first.call(null,s__5174__$2);var _ = cljs.core.nth.call(null,vec__5180,(0),null);var pkgName = cljs.core.nth.call(null,vec__5180,(1),null);var links = cljs.core.nth.call(null,vec__5180,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null),iter__5173.call(null,cljs.core.rest.call(null,s__5174__$2)));
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
return (function iter__5190(s__5191){return (new cljs.core.LazySeq(null,((function (group){
return (function (){var s__5191__$1 = s__5191;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5191__$1);if(temp__4126__auto__)
{var s__5191__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5191__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5191__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5193 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5192 = (0);while(true){
if((i__5192 < size__4275__auto__))
{var vec__5196 = cljs.core._nth.call(null,c__4274__auto__,i__5192);var _ = cljs.core.nth.call(null,vec__5196,(0),null);var li = cljs.core.nth.call(null,vec__5196,(1),null);var na = cljs.core.nth.call(null,vec__5196,(2),null);cljs.core.chunk_append.call(null,b__5193,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null));
{
var G__5198 = (i__5192 + (1));
i__5192 = G__5198;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5193),iter__5190.call(null,cljs.core.chunk_rest.call(null,s__5191__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5193),null);
}
} else
{var vec__5197 = cljs.core.first.call(null,s__5191__$2);var _ = cljs.core.nth.call(null,vec__5197,(0),null);var li = cljs.core.nth.call(null,vec__5197,(1),null);var na = cljs.core.nth.call(null,vec__5197,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null),iter__5190.call(null,cljs.core.rest.call(null,s__5191__$2)));
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
return (function (p__5201){var vec__5202 = p__5201;var _ = cljs.core.nth.call(null,vec__5202,(0),null);var src = cljs.core.nth.call(null,vec__5202,(1),null);if(cljs.core._EQ_.call(null,(0),src.indexOf("http")))
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
test.getSangoCard.testGetOne = (function testGetOne(){return test.getSangoCard.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host)+"cardlist.php"),(function (err,res,body){var tabs = test.getSangoCard.parseGroup.call(null,body);var links = cljs.core.map.call(null,test.getSangoCard.parseOne,cljs.core.map.call(null,cljs.core.second,tabs));var vec__5205 = cljs.core.ffirst.call(null,links);var li = cljs.core.nth.call(null,vec__5205,(0),null);var na = cljs.core.nth.call(null,vec__5205,(1),null);var test_link = vec__5205;return test.getSangoCard.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (tabs,links,vec__5205,li,na,test_link){
return (function (err__$1,res__$1,body__$1){var cardInfo = test.getSangoCard.parseCardInfo.call(null,body__$1);var vec__5206 = cljs.core.first.call(null,test.getSangoCard.parseIdAndImage.call(null,cljs.core.first.call(null,cardInfo)));var id = cljs.core.nth.call(null,vec__5206,(0),null);var src = cljs.core.nth.call(null,vec__5206,(1),null);var result = vec__5206;return test.getSangoCard.request.call(null,src).pipe(test.getSangoCard.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.outputDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",((function (cardInfo,vec__5206,id,src,result,tabs,links,vec__5205,li,na,test_link){
return (function (){return cljs.core.println.call(null,"ok");
});})(cardInfo,vec__5206,id,src,result,tabs,links,vec__5205,li,na,test_link))
);
});})(tabs,links,vec__5205,li,na,test_link))
);
}));
});
test.getSangoCard.testGetAll = (function testGetAll(){return test.getSangoCard.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host)+"cardlist.php"),(function (err,res,body){var tabs = test.getSangoCard.parseGroup.call(null,body);var links = (cljs.core.truth_(test.getSangoCard.specPackage)?test.getSangoCard.specPackage:cljs.core.map.call(null,((function (tabs){
return (function (p__5222){var vec__5223 = p__5222;var li = cljs.core.nth.call(null,vec__5223,(0),null);var na = cljs.core.nth.call(null,vec__5223,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)+"&page="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.page)),na], null);
});})(tabs))
,cljs.core.filter.call(null,((function (tabs){
return (function (p__5224){var vec__5225 = p__5224;var _ = cljs.core.nth.call(null,vec__5225,(0),null);var na = cljs.core.nth.call(null,vec__5225,(1),null);return cljs.core.some.call(null,((function (vec__5225,_,na,tabs){
return (function (p1__5207_SHARP_){return cljs.core._EQ_.call(null,p1__5207_SHARP_,na);
});})(vec__5225,_,na,tabs))
,test.getSangoCard.packages);
});})(tabs))
,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.getSangoCard.parseOne,cljs.core.map.call(null,cljs.core.second,tabs))))));var parseCardInfos = (function (){var iter__4276__auto__ = ((function (tabs,links){
return (function iter__5226(s__5227){return (new cljs.core.LazySeq(null,((function (tabs,links){
return (function (){var s__5227__$1 = s__5227;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5227__$1);if(temp__4126__auto__)
{var s__5227__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5227__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5227__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5229 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5228 = (0);while(true){
if((i__5228 < size__4275__auto__))
{var vec__5232 = cljs.core._nth.call(null,c__4274__auto__,i__5228);var li = cljs.core.nth.call(null,vec__5232,(0),null);var na = cljs.core.nth.call(null,vec__5232,(1),null);cljs.core.chunk_append.call(null,b__5229,((function (i__5228,vec__5232,li,na,c__4274__auto__,size__4275__auto__,b__5229,s__5227__$2,temp__4126__auto__,tabs,links){
return (function (cb){return test.getSangoCard.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (i__5228,vec__5232,li,na,c__4274__auto__,size__4275__auto__,b__5229,s__5227__$2,temp__4126__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){cljs.core.println.call(null,na,li);
if(cljs.core.truth_(err__$1))
{return cb.call(null,err__$1);
} else
{var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.getSangoCard.parseIdAndImage,test.getSangoCard.parseCardInfo.call(null,body__$1)));return setTimeout(((function (i__5228,cardInfo,vec__5232,li,na,c__4274__auto__,size__4275__auto__,b__5229,s__5227__$2,temp__4126__auto__,tabs,links){
return (function (){return cb.call(null,null,cardInfo);
});})(i__5228,cardInfo,vec__5232,li,na,c__4274__auto__,size__4275__auto__,b__5229,s__5227__$2,temp__4126__auto__,tabs,links))
,(1000));
}
});})(i__5228,vec__5232,li,na,c__4274__auto__,size__4275__auto__,b__5229,s__5227__$2,temp__4126__auto__,tabs,links))
);
});})(i__5228,vec__5232,li,na,c__4274__auto__,size__4275__auto__,b__5229,s__5227__$2,temp__4126__auto__,tabs,links))
);
{
var G__5236 = (i__5228 + (1));
i__5228 = G__5236;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5229),iter__5226.call(null,cljs.core.chunk_rest.call(null,s__5227__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5229),null);
}
} else
{var vec__5233 = cljs.core.first.call(null,s__5227__$2);var li = cljs.core.nth.call(null,vec__5233,(0),null);var na = cljs.core.nth.call(null,vec__5233,(1),null);return cljs.core.cons.call(null,((function (vec__5233,li,na,s__5227__$2,temp__4126__auto__,tabs,links){
return (function (cb){return test.getSangoCard.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (vec__5233,li,na,s__5227__$2,temp__4126__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){cljs.core.println.call(null,na,li);
if(cljs.core.truth_(err__$1))
{return cb.call(null,err__$1);
} else
{var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.getSangoCard.parseIdAndImage,test.getSangoCard.parseCardInfo.call(null,body__$1)));return setTimeout(((function (cardInfo,vec__5233,li,na,s__5227__$2,temp__4126__auto__,tabs,links){
return (function (){return cb.call(null,null,cardInfo);
});})(cardInfo,vec__5233,li,na,s__5227__$2,temp__4126__auto__,tabs,links))
,(1000));
}
});})(vec__5233,li,na,s__5227__$2,temp__4126__auto__,tabs,links))
);
});})(vec__5233,li,na,s__5227__$2,temp__4126__auto__,tabs,links))
,iter__5226.call(null,cljs.core.rest.call(null,s__5227__$2)));
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
return (function (p__5234,cb){var vec__5235 = p__5234;var id = cljs.core.nth.call(null,vec__5235,(0),null);var src = cljs.core.nth.call(null,vec__5235,(1),null);cljs.core.println.call(null,"writing... ",src," to ",id,".jpg ...");
test.getSangoCard.request.call(null,src).pipe(test.getSangoCard.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.getSangoCard.outputDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",((function (vec__5235,id,src,tabs,links,parseCardInfos){
return (function (){return setTimeout(cb,(3000));
});})(vec__5235,id,src,tabs,links,parseCardInfos))
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
