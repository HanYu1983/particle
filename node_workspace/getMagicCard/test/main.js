// Compiled by ClojureScript 0.0-2268
goog.provide('test.main');
goog.require('cljs.core');
test.main.async = require("async");
test.main.request = require("request");
test.main.fs = require("fs");
test.main.outputDir = "output/";
test.main.host = "http://sangokushi-taisen-tcg.segataiwan.com.tw/";
test.main.packages = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PR\u5361\u7247\uFF1APR"], null);
test.main.page = (1);
test.main.specPackage = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=120&page=2","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=120&page=3","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=120&page=4","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=120&page=5","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=28&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=22&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=29&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=24&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=30&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=27&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=95&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=96&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=97&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=98&page=1","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=99&page=1","2"], null)], null);
test.main.parseGroup = (function parseGroup(content){var group = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<li><p>(\\D+)<\\/p>\\s+(<ul>\\s+<li>.*<\\/ul>)\\s+<\\/li>")),content);var iter__4276__auto__ = ((function (group){
return (function iter__7663(s__7664){return (new cljs.core.LazySeq(null,((function (group){
return (function (){var s__7664__$1 = s__7664;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7664__$1);if(temp__4126__auto__)
{var s__7664__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7664__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__7664__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__7666 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__7665 = (0);while(true){
if((i__7665 < size__4275__auto__))
{var vec__7669 = cljs.core._nth.call(null,c__4274__auto__,i__7665);var _ = cljs.core.nth.call(null,vec__7669,(0),null);var pkgName = cljs.core.nth.call(null,vec__7669,(1),null);var links = cljs.core.nth.call(null,vec__7669,(2),null);cljs.core.chunk_append.call(null,b__7666,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null));
{
var G__7671 = (i__7665 + (1));
i__7665 = G__7671;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7666),iter__7663.call(null,cljs.core.chunk_rest.call(null,s__7664__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7666),null);
}
} else
{var vec__7670 = cljs.core.first.call(null,s__7664__$2);var _ = cljs.core.nth.call(null,vec__7670,(0),null);var pkgName = cljs.core.nth.call(null,vec__7670,(1),null);var links = cljs.core.nth.call(null,vec__7670,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null),iter__7663.call(null,cljs.core.rest.call(null,s__7664__$2)));
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
test.main.parseOne = (function parseOne(link){var group = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<li><a href=\"([\\w|.|?|=]+)\">(\\D+)<\\/a><\\/li>")),link);var iter__4276__auto__ = ((function (group){
return (function iter__7680(s__7681){return (new cljs.core.LazySeq(null,((function (group){
return (function (){var s__7681__$1 = s__7681;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7681__$1);if(temp__4126__auto__)
{var s__7681__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7681__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__7681__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__7683 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__7682 = (0);while(true){
if((i__7682 < size__4275__auto__))
{var vec__7686 = cljs.core._nth.call(null,c__4274__auto__,i__7682);var _ = cljs.core.nth.call(null,vec__7686,(0),null);var li = cljs.core.nth.call(null,vec__7686,(1),null);var na = cljs.core.nth.call(null,vec__7686,(2),null);cljs.core.chunk_append.call(null,b__7683,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null));
{
var G__7688 = (i__7682 + (1));
i__7682 = G__7688;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7683),iter__7680.call(null,cljs.core.chunk_rest.call(null,s__7681__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7683),null);
}
} else
{var vec__7687 = cljs.core.first.call(null,s__7681__$2);var _ = cljs.core.nth.call(null,vec__7687,(0),null);var li = cljs.core.nth.call(null,vec__7687,(1),null);var na = cljs.core.nth.call(null,vec__7687,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null),iter__7680.call(null,cljs.core.rest.call(null,s__7681__$2)));
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
test.main.parseCardInfo = (function parseCardInfo(content){var group = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<div class=\"cardinfo\">([\\D|\\d]{500})")),content);return cljs.core.map.call(null,cljs.core.second,group);
});
test.main.parseIdAndImage = (function parseIdAndImage(content){var ids = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<span>([ANVPRCPOS]+-\\d+)\\(?[\\d-]*\\)?<\\/span>")),content);var imgsrcs = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("img src\\s*=\\s*\"(.+?)\"")),content);return cljs.core.map.call(null,cljs.core.list,cljs.core.map.call(null,cljs.core.second,ids),cljs.core.map.call(null,((function (ids,imgsrcs){
return (function (p__7691){var vec__7692 = p__7691;var _ = cljs.core.nth.call(null,vec__7692,(0),null);var src = cljs.core.nth.call(null,vec__7692,(1),null);if(cljs.core._EQ_.call(null,(0),src.indexOf("http")))
{return src;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(src));
} else
{return null;
}
}
});})(ids,imgsrcs))
,imgsrcs));
});
test.main.testGetOne = (function testGetOne(){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+"cardlist.php"),(function (err,res,body){var tabs = test.main.parseGroup.call(null,body);var links = cljs.core.map.call(null,test.main.parseOne,cljs.core.map.call(null,cljs.core.second,tabs));var vec__7695 = cljs.core.ffirst.call(null,links);var li = cljs.core.nth.call(null,vec__7695,(0),null);var na = cljs.core.nth.call(null,vec__7695,(1),null);var test_link = vec__7695;return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (tabs,links,vec__7695,li,na,test_link){
return (function (err__$1,res__$1,body__$1){var cardInfo = test.main.parseCardInfo.call(null,body__$1);var vec__7696 = cljs.core.first.call(null,test.main.parseIdAndImage.call(null,cljs.core.first.call(null,cardInfo)));var id = cljs.core.nth.call(null,vec__7696,(0),null);var src = cljs.core.nth.call(null,vec__7696,(1),null);var result = vec__7696;return test.main.request.call(null,src).pipe(test.main.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.outputDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",((function (cardInfo,vec__7696,id,src,result,tabs,links,vec__7695,li,na,test_link){
return (function (){return cljs.core.println.call(null,"ok");
});})(cardInfo,vec__7696,id,src,result,tabs,links,vec__7695,li,na,test_link))
);
});})(tabs,links,vec__7695,li,na,test_link))
);
}));
});
test.main.testGetAll = (function testGetAll(){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+"cardlist.php"),(function (err,res,body){var tabs = test.main.parseGroup.call(null,body);var links = (cljs.core.truth_(test.main.specPackage)?test.main.specPackage:cljs.core.map.call(null,((function (tabs){
return (function (p__7712){var vec__7713 = p__7712;var li = cljs.core.nth.call(null,vec__7713,(0),null);var na = cljs.core.nth.call(null,vec__7713,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)+"&page="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.page)),na], null);
});})(tabs))
,cljs.core.filter.call(null,((function (tabs){
return (function (p__7714){var vec__7715 = p__7714;var _ = cljs.core.nth.call(null,vec__7715,(0),null);var na = cljs.core.nth.call(null,vec__7715,(1),null);return cljs.core.some.call(null,((function (vec__7715,_,na,tabs){
return (function (p1__7697_SHARP_){return cljs.core._EQ_.call(null,p1__7697_SHARP_,na);
});})(vec__7715,_,na,tabs))
,test.main.packages);
});})(tabs))
,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.main.parseOne,cljs.core.map.call(null,cljs.core.second,tabs))))));var parseCardInfos = (function (){var iter__4276__auto__ = ((function (tabs,links){
return (function iter__7716(s__7717){return (new cljs.core.LazySeq(null,((function (tabs,links){
return (function (){var s__7717__$1 = s__7717;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7717__$1);if(temp__4126__auto__)
{var s__7717__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7717__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__7717__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__7719 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__7718 = (0);while(true){
if((i__7718 < size__4275__auto__))
{var vec__7722 = cljs.core._nth.call(null,c__4274__auto__,i__7718);var li = cljs.core.nth.call(null,vec__7722,(0),null);var na = cljs.core.nth.call(null,vec__7722,(1),null);cljs.core.chunk_append.call(null,b__7719,((function (i__7718,vec__7722,li,na,c__4274__auto__,size__4275__auto__,b__7719,s__7717__$2,temp__4126__auto__,tabs,links){
return (function (cb){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (i__7718,vec__7722,li,na,c__4274__auto__,size__4275__auto__,b__7719,s__7717__$2,temp__4126__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){cljs.core.println.call(null,na,li);
if(cljs.core.truth_(err__$1))
{return cb.call(null,err__$1);
} else
{var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.main.parseIdAndImage,test.main.parseCardInfo.call(null,body__$1)));return setTimeout(((function (i__7718,cardInfo,vec__7722,li,na,c__4274__auto__,size__4275__auto__,b__7719,s__7717__$2,temp__4126__auto__,tabs,links){
return (function (){return cb.call(null,null,cardInfo);
});})(i__7718,cardInfo,vec__7722,li,na,c__4274__auto__,size__4275__auto__,b__7719,s__7717__$2,temp__4126__auto__,tabs,links))
,(1000));
}
});})(i__7718,vec__7722,li,na,c__4274__auto__,size__4275__auto__,b__7719,s__7717__$2,temp__4126__auto__,tabs,links))
);
});})(i__7718,vec__7722,li,na,c__4274__auto__,size__4275__auto__,b__7719,s__7717__$2,temp__4126__auto__,tabs,links))
);
{
var G__7726 = (i__7718 + (1));
i__7718 = G__7726;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7719),iter__7716.call(null,cljs.core.chunk_rest.call(null,s__7717__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7719),null);
}
} else
{var vec__7723 = cljs.core.first.call(null,s__7717__$2);var li = cljs.core.nth.call(null,vec__7723,(0),null);var na = cljs.core.nth.call(null,vec__7723,(1),null);return cljs.core.cons.call(null,((function (vec__7723,li,na,s__7717__$2,temp__4126__auto__,tabs,links){
return (function (cb){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (vec__7723,li,na,s__7717__$2,temp__4126__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){cljs.core.println.call(null,na,li);
if(cljs.core.truth_(err__$1))
{return cb.call(null,err__$1);
} else
{var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.main.parseIdAndImage,test.main.parseCardInfo.call(null,body__$1)));return setTimeout(((function (cardInfo,vec__7723,li,na,s__7717__$2,temp__4126__auto__,tabs,links){
return (function (){return cb.call(null,null,cardInfo);
});})(cardInfo,vec__7723,li,na,s__7717__$2,temp__4126__auto__,tabs,links))
,(1000));
}
});})(vec__7723,li,na,s__7717__$2,temp__4126__auto__,tabs,links))
);
});})(vec__7723,li,na,s__7717__$2,temp__4126__auto__,tabs,links))
,iter__7716.call(null,cljs.core.rest.call(null,s__7717__$2)));
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
return (function (p__7724,cb){var vec__7725 = p__7724;var id = cljs.core.nth.call(null,vec__7725,(0),null);var src = cljs.core.nth.call(null,vec__7725,(1),null);cljs.core.println.call(null,"writing... ",src," to ",id,".jpg ...");
test.main.request.call(null,src).pipe(test.main.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.outputDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",((function (vec__7725,id,src,tabs,links,parseCardInfos){
return (function (){return setTimeout(cb,(3000));
});})(vec__7725,id,src,tabs,links,parseCardInfos))
);
return null;
});})(tabs,links,parseCardInfos))
;return test.main.async.series(cljs.core.clj__GT_js.call(null,parseCardInfos),((function (tabs,links,parseCardInfos,writeImage){
return (function (err__$1,rets){var allList = cljs.core.clj__GT_js.call(null,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.js__GT_clj.call(null,rets)));return test.main.async.eachSeries(allList,writeImage,((function (allList,tabs,links,parseCardInfos,writeImage){
return (function (err__$2,ret){return cljs.core.println.call(null,"ok!!");
});})(allList,tabs,links,parseCardInfos,writeImage))
);
});})(tabs,links,parseCardInfos,writeImage))
);
}));
});
/**
* @param {...*} var_args
*/
test.main._main = (function() { 
var _main__delegate = function (args){return test.main.testGetAll.call(null);
};
var _main = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return _main__delegate.call(this,args);};
_main.cljs$lang$maxFixedArity = 0;
_main.cljs$lang$applyTo = (function (arglist__7727){
var args = cljs.core.seq(arglist__7727);
return _main__delegate(args);
});
_main.cljs$core$IFn$_invoke$arity$variadic = _main__delegate;
return _main;
})()
;
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_main_cli_fn_STAR_ = test.main._main;
