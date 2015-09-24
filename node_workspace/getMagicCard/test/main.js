// Compiled by ClojureScript 0.0-2268
goog.provide('test.main');
goog.require('cljs.core');
test.main.async = require("async");
test.main.request = require("request");
test.main.fs = require("fs");
test.main.outputDir = "output/";
test.main.host = "http://sangokushi-taisen-tcg.segataiwan.com.tw/";
test.main.parseGroup = (function parseGroup(content){var group = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<li><p>(\\D+)<\\/p>\\s+(<ul>\\s+<li>.*<\\/ul>)\\s+<\\/li>")),content);var iter__4276__auto__ = ((function (group){
return (function iter__10087(s__10088){return (new cljs.core.LazySeq(null,((function (group){
return (function (){var s__10088__$1 = s__10088;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10088__$1);if(temp__4126__auto__)
{var s__10088__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10088__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__10088__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__10090 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__10089 = (0);while(true){
if((i__10089 < size__4275__auto__))
{var vec__10093 = cljs.core._nth.call(null,c__4274__auto__,i__10089);var _ = cljs.core.nth.call(null,vec__10093,(0),null);var pkgName = cljs.core.nth.call(null,vec__10093,(1),null);var links = cljs.core.nth.call(null,vec__10093,(2),null);cljs.core.chunk_append.call(null,b__10090,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null));
{
var G__10095 = (i__10089 + (1));
i__10089 = G__10095;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10090),iter__10087.call(null,cljs.core.chunk_rest.call(null,s__10088__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10090),null);
}
} else
{var vec__10094 = cljs.core.first.call(null,s__10088__$2);var _ = cljs.core.nth.call(null,vec__10094,(0),null);var pkgName = cljs.core.nth.call(null,vec__10094,(1),null);var links = cljs.core.nth.call(null,vec__10094,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null),iter__10087.call(null,cljs.core.rest.call(null,s__10088__$2)));
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
return (function iter__10104(s__10105){return (new cljs.core.LazySeq(null,((function (group){
return (function (){var s__10105__$1 = s__10105;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10105__$1);if(temp__4126__auto__)
{var s__10105__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10105__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__10105__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__10107 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__10106 = (0);while(true){
if((i__10106 < size__4275__auto__))
{var vec__10110 = cljs.core._nth.call(null,c__4274__auto__,i__10106);var _ = cljs.core.nth.call(null,vec__10110,(0),null);var li = cljs.core.nth.call(null,vec__10110,(1),null);var na = cljs.core.nth.call(null,vec__10110,(2),null);cljs.core.chunk_append.call(null,b__10107,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null));
{
var G__10112 = (i__10106 + (1));
i__10106 = G__10112;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10107),iter__10104.call(null,cljs.core.chunk_rest.call(null,s__10105__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10107),null);
}
} else
{var vec__10111 = cljs.core.first.call(null,s__10105__$2);var _ = cljs.core.nth.call(null,vec__10111,(0),null);var li = cljs.core.nth.call(null,vec__10111,(1),null);var na = cljs.core.nth.call(null,vec__10111,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null),iter__10104.call(null,cljs.core.rest.call(null,s__10105__$2)));
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
return (function (p__10115){var vec__10116 = p__10115;var _ = cljs.core.nth.call(null,vec__10116,(0),null);var src = cljs.core.nth.call(null,vec__10116,(1),null);if(cljs.core._EQ_.call(null,(0),src.indexOf("http")))
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
test.main.testGetOne = (function testGetOne(){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+"cardlist.php"),(function (err,res,body){var tabs = test.main.parseGroup.call(null,body);var links = cljs.core.map.call(null,test.main.parseOne,cljs.core.map.call(null,cljs.core.second,tabs));var vec__10119 = cljs.core.ffirst.call(null,links);var li = cljs.core.nth.call(null,vec__10119,(0),null);var na = cljs.core.nth.call(null,vec__10119,(1),null);var test_link = vec__10119;return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (tabs,links,vec__10119,li,na,test_link){
return (function (err__$1,res__$1,body__$1){var cardInfo = test.main.parseCardInfo.call(null,body__$1);var vec__10120 = cljs.core.first.call(null,test.main.parseIdAndImage.call(null,cljs.core.first.call(null,cardInfo)));var id = cljs.core.nth.call(null,vec__10120,(0),null);var src = cljs.core.nth.call(null,vec__10120,(1),null);var result = vec__10120;return test.main.request.call(null,src).pipe(test.main.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.outputDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",((function (cardInfo,vec__10120,id,src,result,tabs,links,vec__10119,li,na,test_link){
return (function (){return cljs.core.println.call(null,"ok");
});})(cardInfo,vec__10120,id,src,result,tabs,links,vec__10119,li,na,test_link))
);
});})(tabs,links,vec__10119,li,na,test_link))
);
}));
});
test.main.testGetAll = (function testGetAll(){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+"cardlist.php"),(function (err,res,body){var tabs = test.main.parseGroup.call(null,body);var links = cljs.core.drop.call(null,(16),cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.main.parseOne,cljs.core.map.call(null,cljs.core.second,tabs))));var parseCardInfos = (function (){var iter__4276__auto__ = ((function (tabs,links){
return (function iter__10131(s__10132){return (new cljs.core.LazySeq(null,((function (tabs,links){
return (function (){var s__10132__$1 = s__10132;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10132__$1);if(temp__4126__auto__)
{var s__10132__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10132__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__10132__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__10134 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__10133 = (0);while(true){
if((i__10133 < size__4275__auto__))
{var vec__10137 = cljs.core._nth.call(null,c__4274__auto__,i__10133);var li = cljs.core.nth.call(null,vec__10137,(0),null);var na = cljs.core.nth.call(null,vec__10137,(1),null);cljs.core.chunk_append.call(null,b__10134,((function (i__10133,vec__10137,li,na,c__4274__auto__,size__4275__auto__,b__10134,s__10132__$2,temp__4126__auto__,tabs,links){
return (function (cb){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (i__10133,vec__10137,li,na,c__4274__auto__,size__4275__auto__,b__10134,s__10132__$2,temp__4126__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){cljs.core.println.call(null,na,li);
if(cljs.core.truth_(err__$1))
{return cb.call(null,err__$1);
} else
{var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.main.parseIdAndImage,test.main.parseCardInfo.call(null,body__$1)));return setTimeout(((function (i__10133,cardInfo,vec__10137,li,na,c__4274__auto__,size__4275__auto__,b__10134,s__10132__$2,temp__4126__auto__,tabs,links){
return (function (){return cb.call(null,null,cardInfo);
});})(i__10133,cardInfo,vec__10137,li,na,c__4274__auto__,size__4275__auto__,b__10134,s__10132__$2,temp__4126__auto__,tabs,links))
,(1000));
}
});})(i__10133,vec__10137,li,na,c__4274__auto__,size__4275__auto__,b__10134,s__10132__$2,temp__4126__auto__,tabs,links))
);
});})(i__10133,vec__10137,li,na,c__4274__auto__,size__4275__auto__,b__10134,s__10132__$2,temp__4126__auto__,tabs,links))
);
{
var G__10141 = (i__10133 + (1));
i__10133 = G__10141;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10134),iter__10131.call(null,cljs.core.chunk_rest.call(null,s__10132__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10134),null);
}
} else
{var vec__10138 = cljs.core.first.call(null,s__10132__$2);var li = cljs.core.nth.call(null,vec__10138,(0),null);var na = cljs.core.nth.call(null,vec__10138,(1),null);return cljs.core.cons.call(null,((function (vec__10138,li,na,s__10132__$2,temp__4126__auto__,tabs,links){
return (function (cb){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (vec__10138,li,na,s__10132__$2,temp__4126__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){cljs.core.println.call(null,na,li);
if(cljs.core.truth_(err__$1))
{return cb.call(null,err__$1);
} else
{var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.main.parseIdAndImage,test.main.parseCardInfo.call(null,body__$1)));return setTimeout(((function (cardInfo,vec__10138,li,na,s__10132__$2,temp__4126__auto__,tabs,links){
return (function (){return cb.call(null,null,cardInfo);
});})(cardInfo,vec__10138,li,na,s__10132__$2,temp__4126__auto__,tabs,links))
,(1000));
}
});})(vec__10138,li,na,s__10132__$2,temp__4126__auto__,tabs,links))
);
});})(vec__10138,li,na,s__10132__$2,temp__4126__auto__,tabs,links))
,iter__10131.call(null,cljs.core.rest.call(null,s__10132__$2)));
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
return (function (p__10139,cb){var vec__10140 = p__10139;var id = cljs.core.nth.call(null,vec__10140,(0),null);var src = cljs.core.nth.call(null,vec__10140,(1),null);cljs.core.println.call(null,"writing... ",src," to ",id,".jpg ...");
test.main.request.call(null,src).pipe(test.main.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.outputDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",((function (vec__10140,id,src,tabs,links,parseCardInfos){
return (function (){return setTimeout(cb,(2000));
});})(vec__10140,id,src,tabs,links,parseCardInfos))
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
_main.cljs$lang$applyTo = (function (arglist__10142){
var args = cljs.core.seq(arglist__10142);
return _main__delegate(args);
});
_main.cljs$core$IFn$_invoke$arity$variadic = _main__delegate;
return _main;
})()
;
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_main_cli_fn_STAR_ = test.main._main;
