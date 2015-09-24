// Compiled by ClojureScript 0.0-2268
goog.provide('test.main');
goog.require('cljs.core');
test.main.async = require("async");
test.main.request = require("request");
test.main.fs = require("fs");
test.main.outputDir = "output/";
test.main.host = "http://sangokushi-taisen-tcg.segataiwan.com.tw/";
test.main.packages = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u7B2C\u4E00\u5F48\uFF1A\u9B4F","\u7B2C\u4E00\u5F48\uFF1A\u8700","\u7B2C\u4E00\u5F48\uFF1A\u5433","\u7B2C\u4E00\u5F48\uFF1A\u7FA4"], null);
test.main.page = (2);
test.main.parseGroup = (function parseGroup(content){var group = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<li><p>(\\D+)<\\/p>\\s+(<ul>\\s+<li>.*<\\/ul>)\\s+<\\/li>")),content);var iter__4276__auto__ = ((function (group){
return (function iter__10508(s__10509){return (new cljs.core.LazySeq(null,((function (group){
return (function (){var s__10509__$1 = s__10509;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10509__$1);if(temp__4126__auto__)
{var s__10509__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10509__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__10509__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__10511 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__10510 = (0);while(true){
if((i__10510 < size__4275__auto__))
{var vec__10514 = cljs.core._nth.call(null,c__4274__auto__,i__10510);var _ = cljs.core.nth.call(null,vec__10514,(0),null);var pkgName = cljs.core.nth.call(null,vec__10514,(1),null);var links = cljs.core.nth.call(null,vec__10514,(2),null);cljs.core.chunk_append.call(null,b__10511,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null));
{
var G__10516 = (i__10510 + (1));
i__10510 = G__10516;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10511),iter__10508.call(null,cljs.core.chunk_rest.call(null,s__10509__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10511),null);
}
} else
{var vec__10515 = cljs.core.first.call(null,s__10509__$2);var _ = cljs.core.nth.call(null,vec__10515,(0),null);var pkgName = cljs.core.nth.call(null,vec__10515,(1),null);var links = cljs.core.nth.call(null,vec__10515,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null),iter__10508.call(null,cljs.core.rest.call(null,s__10509__$2)));
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
return (function iter__10525(s__10526){return (new cljs.core.LazySeq(null,((function (group){
return (function (){var s__10526__$1 = s__10526;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10526__$1);if(temp__4126__auto__)
{var s__10526__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10526__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__10526__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__10528 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__10527 = (0);while(true){
if((i__10527 < size__4275__auto__))
{var vec__10531 = cljs.core._nth.call(null,c__4274__auto__,i__10527);var _ = cljs.core.nth.call(null,vec__10531,(0),null);var li = cljs.core.nth.call(null,vec__10531,(1),null);var na = cljs.core.nth.call(null,vec__10531,(2),null);cljs.core.chunk_append.call(null,b__10528,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null));
{
var G__10533 = (i__10527 + (1));
i__10527 = G__10533;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10528),iter__10525.call(null,cljs.core.chunk_rest.call(null,s__10526__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10528),null);
}
} else
{var vec__10532 = cljs.core.first.call(null,s__10526__$2);var _ = cljs.core.nth.call(null,vec__10532,(0),null);var li = cljs.core.nth.call(null,vec__10532,(1),null);var na = cljs.core.nth.call(null,vec__10532,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null),iter__10525.call(null,cljs.core.rest.call(null,s__10526__$2)));
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
test.main.parseIdAndImage = (function parseIdAndImage(content){var ids = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<span>([\\d|-]+)<\\/span>")),content);var imgsrcs = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("img src\\s*=\\s*\"(.+?)\"")),content);return cljs.core.map.call(null,cljs.core.list,cljs.core.map.call(null,cljs.core.second,ids),cljs.core.map.call(null,((function (ids,imgsrcs){
return (function (p__10536){var vec__10537 = p__10536;var _ = cljs.core.nth.call(null,vec__10537,(0),null);var src = cljs.core.nth.call(null,vec__10537,(1),null);if(cljs.core._EQ_.call(null,(0),src.indexOf("http")))
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
test.main.testGetOne = (function testGetOne(){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+"cardlist.php"),(function (err,res,body){var tabs = test.main.parseGroup.call(null,body);var links = cljs.core.map.call(null,test.main.parseOne,cljs.core.map.call(null,cljs.core.second,tabs));var vec__10540 = cljs.core.ffirst.call(null,links);var li = cljs.core.nth.call(null,vec__10540,(0),null);var na = cljs.core.nth.call(null,vec__10540,(1),null);var test_link = vec__10540;return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (tabs,links,vec__10540,li,na,test_link){
return (function (err__$1,res__$1,body__$1){var cardInfo = test.main.parseCardInfo.call(null,body__$1);var vec__10541 = cljs.core.first.call(null,test.main.parseIdAndImage.call(null,cljs.core.first.call(null,cardInfo)));var id = cljs.core.nth.call(null,vec__10541,(0),null);var src = cljs.core.nth.call(null,vec__10541,(1),null);var result = vec__10541;return test.main.request.call(null,src).pipe(test.main.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.outputDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",((function (cardInfo,vec__10541,id,src,result,tabs,links,vec__10540,li,na,test_link){
return (function (){return cljs.core.println.call(null,"ok");
});})(cardInfo,vec__10541,id,src,result,tabs,links,vec__10540,li,na,test_link))
);
});})(tabs,links,vec__10540,li,na,test_link))
);
}));
});
test.main.testGetAll = (function testGetAll(){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+"cardlist.php"),(function (err,res,body){var tabs = test.main.parseGroup.call(null,body);var links = cljs.core.map.call(null,((function (tabs){
return (function (p__10557){var vec__10558 = p__10557;var li = cljs.core.nth.call(null,vec__10558,(0),null);var na = cljs.core.nth.call(null,vec__10558,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)+"&page="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.page)),na], null);
});})(tabs))
,cljs.core.filter.call(null,((function (tabs){
return (function (p__10559){var vec__10560 = p__10559;var _ = cljs.core.nth.call(null,vec__10560,(0),null);var na = cljs.core.nth.call(null,vec__10560,(1),null);return cljs.core.some.call(null,((function (vec__10560,_,na,tabs){
return (function (p1__10542_SHARP_){return cljs.core._EQ_.call(null,p1__10542_SHARP_,na);
});})(vec__10560,_,na,tabs))
,test.main.packages);
});})(tabs))
,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.main.parseOne,cljs.core.map.call(null,cljs.core.second,tabs)))));var parseCardInfos = (function (){var iter__4276__auto__ = ((function (tabs,links){
return (function iter__10561(s__10562){return (new cljs.core.LazySeq(null,((function (tabs,links){
return (function (){var s__10562__$1 = s__10562;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10562__$1);if(temp__4126__auto__)
{var s__10562__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10562__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__10562__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__10564 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__10563 = (0);while(true){
if((i__10563 < size__4275__auto__))
{var vec__10567 = cljs.core._nth.call(null,c__4274__auto__,i__10563);var li = cljs.core.nth.call(null,vec__10567,(0),null);var na = cljs.core.nth.call(null,vec__10567,(1),null);cljs.core.chunk_append.call(null,b__10564,((function (i__10563,vec__10567,li,na,c__4274__auto__,size__4275__auto__,b__10564,s__10562__$2,temp__4126__auto__,tabs,links){
return (function (cb){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (i__10563,vec__10567,li,na,c__4274__auto__,size__4275__auto__,b__10564,s__10562__$2,temp__4126__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){cljs.core.println.call(null,na,li);
if(cljs.core.truth_(err__$1))
{return cb.call(null,err__$1);
} else
{var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.main.parseIdAndImage,test.main.parseCardInfo.call(null,body__$1)));return setTimeout(((function (i__10563,cardInfo,vec__10567,li,na,c__4274__auto__,size__4275__auto__,b__10564,s__10562__$2,temp__4126__auto__,tabs,links){
return (function (){return cb.call(null,null,cardInfo);
});})(i__10563,cardInfo,vec__10567,li,na,c__4274__auto__,size__4275__auto__,b__10564,s__10562__$2,temp__4126__auto__,tabs,links))
,(1000));
}
});})(i__10563,vec__10567,li,na,c__4274__auto__,size__4275__auto__,b__10564,s__10562__$2,temp__4126__auto__,tabs,links))
);
});})(i__10563,vec__10567,li,na,c__4274__auto__,size__4275__auto__,b__10564,s__10562__$2,temp__4126__auto__,tabs,links))
);
{
var G__10571 = (i__10563 + (1));
i__10563 = G__10571;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10564),iter__10561.call(null,cljs.core.chunk_rest.call(null,s__10562__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10564),null);
}
} else
{var vec__10568 = cljs.core.first.call(null,s__10562__$2);var li = cljs.core.nth.call(null,vec__10568,(0),null);var na = cljs.core.nth.call(null,vec__10568,(1),null);return cljs.core.cons.call(null,((function (vec__10568,li,na,s__10562__$2,temp__4126__auto__,tabs,links){
return (function (cb){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (vec__10568,li,na,s__10562__$2,temp__4126__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){cljs.core.println.call(null,na,li);
if(cljs.core.truth_(err__$1))
{return cb.call(null,err__$1);
} else
{var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.main.parseIdAndImage,test.main.parseCardInfo.call(null,body__$1)));return setTimeout(((function (cardInfo,vec__10568,li,na,s__10562__$2,temp__4126__auto__,tabs,links){
return (function (){return cb.call(null,null,cardInfo);
});})(cardInfo,vec__10568,li,na,s__10562__$2,temp__4126__auto__,tabs,links))
,(1000));
}
});})(vec__10568,li,na,s__10562__$2,temp__4126__auto__,tabs,links))
);
});})(vec__10568,li,na,s__10562__$2,temp__4126__auto__,tabs,links))
,iter__10561.call(null,cljs.core.rest.call(null,s__10562__$2)));
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
return (function (p__10569,cb){var vec__10570 = p__10569;var id = cljs.core.nth.call(null,vec__10570,(0),null);var src = cljs.core.nth.call(null,vec__10570,(1),null);cljs.core.println.call(null,"writing... ",src," to ",id,".jpg ...");
test.main.request.call(null,src).pipe(test.main.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.outputDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",((function (vec__10570,id,src,tabs,links,parseCardInfos){
return (function (){return setTimeout(cb,(2000));
});})(vec__10570,id,src,tabs,links,parseCardInfos))
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
_main.cljs$lang$applyTo = (function (arglist__10572){
var args = cljs.core.seq(arglist__10572);
return _main__delegate(args);
});
_main.cljs$core$IFn$_invoke$arity$variadic = _main__delegate;
return _main;
})()
;
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_main_cli_fn_STAR_ = test.main._main;
