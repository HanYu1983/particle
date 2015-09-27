// Compiled by ClojureScript 0.0-2268
goog.provide('test.main');
goog.require('cljs.core');
test.main.async = require("async");
test.main.request = require("request");
test.main.fs = require("fs");
test.main.outputDir = "output/";
test.main.host = "http://sangokushi-taisen-tcg.segataiwan.com.tw/";
test.main.packages = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u5169\u9031\u5E74\uFF1A\u9B4F","\u5169\u9031\u5E74\uFF1A\u8700","\u5169\u9031\u5E74\uFF1A\u5433","\u5169\u9031\u5E74\uFF1A\u7FA4","\u5169\u9031\u5E74\uFF1A\u6F22"], null);
test.main.page = (1);
test.main.specPackage = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=59","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=60","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=61","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=80","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=81","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=82","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=83","2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cardinfo.php?id=84","2"], null)], null);
test.main.parseGroup = (function parseGroup(content){var group = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<li><p>(\\D+)<\\/p>\\s+(<ul>\\s+<li>.*<\\/ul>)\\s+<\\/li>")),content);var iter__4276__auto__ = ((function (group){
return (function iter__6553(s__6554){return (new cljs.core.LazySeq(null,((function (group){
return (function (){var s__6554__$1 = s__6554;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6554__$1);if(temp__4126__auto__)
{var s__6554__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6554__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__6554__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__6556 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__6555 = (0);while(true){
if((i__6555 < size__4275__auto__))
{var vec__6559 = cljs.core._nth.call(null,c__4274__auto__,i__6555);var _ = cljs.core.nth.call(null,vec__6559,(0),null);var pkgName = cljs.core.nth.call(null,vec__6559,(1),null);var links = cljs.core.nth.call(null,vec__6559,(2),null);cljs.core.chunk_append.call(null,b__6556,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null));
{
var G__6561 = (i__6555 + (1));
i__6555 = G__6561;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6556),iter__6553.call(null,cljs.core.chunk_rest.call(null,s__6554__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6556),null);
}
} else
{var vec__6560 = cljs.core.first.call(null,s__6554__$2);var _ = cljs.core.nth.call(null,vec__6560,(0),null);var pkgName = cljs.core.nth.call(null,vec__6560,(1),null);var links = cljs.core.nth.call(null,vec__6560,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null),iter__6553.call(null,cljs.core.rest.call(null,s__6554__$2)));
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
return (function iter__6570(s__6571){return (new cljs.core.LazySeq(null,((function (group){
return (function (){var s__6571__$1 = s__6571;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6571__$1);if(temp__4126__auto__)
{var s__6571__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6571__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__6571__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__6573 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__6572 = (0);while(true){
if((i__6572 < size__4275__auto__))
{var vec__6576 = cljs.core._nth.call(null,c__4274__auto__,i__6572);var _ = cljs.core.nth.call(null,vec__6576,(0),null);var li = cljs.core.nth.call(null,vec__6576,(1),null);var na = cljs.core.nth.call(null,vec__6576,(2),null);cljs.core.chunk_append.call(null,b__6573,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null));
{
var G__6578 = (i__6572 + (1));
i__6572 = G__6578;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6573),iter__6570.call(null,cljs.core.chunk_rest.call(null,s__6571__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6573),null);
}
} else
{var vec__6577 = cljs.core.first.call(null,s__6571__$2);var _ = cljs.core.nth.call(null,vec__6577,(0),null);var li = cljs.core.nth.call(null,vec__6577,(1),null);var na = cljs.core.nth.call(null,vec__6577,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null),iter__6570.call(null,cljs.core.rest.call(null,s__6571__$2)));
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
test.main.parseIdAndImage = (function parseIdAndImage(content){var ids = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<span>([ANVPRCPOS]+-\\d+\\(?[\\d-]*\\)?)<\\/span>")),content);var imgsrcs = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("img src\\s*=\\s*\"(.+?)\"")),content);return cljs.core.map.call(null,cljs.core.list,cljs.core.map.call(null,cljs.core.second,ids),cljs.core.map.call(null,((function (ids,imgsrcs){
return (function (p__6581){var vec__6582 = p__6581;var _ = cljs.core.nth.call(null,vec__6582,(0),null);var src = cljs.core.nth.call(null,vec__6582,(1),null);if(cljs.core._EQ_.call(null,(0),src.indexOf("http")))
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
test.main.testGetOne = (function testGetOne(){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+"cardlist.php"),(function (err,res,body){var tabs = test.main.parseGroup.call(null,body);var links = cljs.core.map.call(null,test.main.parseOne,cljs.core.map.call(null,cljs.core.second,tabs));var vec__6585 = cljs.core.ffirst.call(null,links);var li = cljs.core.nth.call(null,vec__6585,(0),null);var na = cljs.core.nth.call(null,vec__6585,(1),null);var test_link = vec__6585;return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (tabs,links,vec__6585,li,na,test_link){
return (function (err__$1,res__$1,body__$1){var cardInfo = test.main.parseCardInfo.call(null,body__$1);var vec__6586 = cljs.core.first.call(null,test.main.parseIdAndImage.call(null,cljs.core.first.call(null,cardInfo)));var id = cljs.core.nth.call(null,vec__6586,(0),null);var src = cljs.core.nth.call(null,vec__6586,(1),null);var result = vec__6586;return test.main.request.call(null,src).pipe(test.main.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.outputDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",((function (cardInfo,vec__6586,id,src,result,tabs,links,vec__6585,li,na,test_link){
return (function (){return cljs.core.println.call(null,"ok");
});})(cardInfo,vec__6586,id,src,result,tabs,links,vec__6585,li,na,test_link))
);
});})(tabs,links,vec__6585,li,na,test_link))
);
}));
});
test.main.testGetAll = (function testGetAll(){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+"cardlist.php"),(function (err,res,body){var tabs = test.main.parseGroup.call(null,body);var links = (cljs.core.truth_(test.main.specPackage)?test.main.specPackage:cljs.core.map.call(null,((function (tabs){
return (function (p__6602){var vec__6603 = p__6602;var li = cljs.core.nth.call(null,vec__6603,(0),null);var na = cljs.core.nth.call(null,vec__6603,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)+"&page="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.page)),na], null);
});})(tabs))
,cljs.core.filter.call(null,((function (tabs){
return (function (p__6604){var vec__6605 = p__6604;var _ = cljs.core.nth.call(null,vec__6605,(0),null);var na = cljs.core.nth.call(null,vec__6605,(1),null);return cljs.core.some.call(null,((function (vec__6605,_,na,tabs){
return (function (p1__6587_SHARP_){return cljs.core._EQ_.call(null,p1__6587_SHARP_,na);
});})(vec__6605,_,na,tabs))
,test.main.packages);
});})(tabs))
,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.main.parseOne,cljs.core.map.call(null,cljs.core.second,tabs))))));var parseCardInfos = (function (){var iter__4276__auto__ = ((function (tabs,links){
return (function iter__6606(s__6607){return (new cljs.core.LazySeq(null,((function (tabs,links){
return (function (){var s__6607__$1 = s__6607;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6607__$1);if(temp__4126__auto__)
{var s__6607__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6607__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__6607__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__6609 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__6608 = (0);while(true){
if((i__6608 < size__4275__auto__))
{var vec__6612 = cljs.core._nth.call(null,c__4274__auto__,i__6608);var li = cljs.core.nth.call(null,vec__6612,(0),null);var na = cljs.core.nth.call(null,vec__6612,(1),null);cljs.core.chunk_append.call(null,b__6609,((function (i__6608,vec__6612,li,na,c__4274__auto__,size__4275__auto__,b__6609,s__6607__$2,temp__4126__auto__,tabs,links){
return (function (cb){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (i__6608,vec__6612,li,na,c__4274__auto__,size__4275__auto__,b__6609,s__6607__$2,temp__4126__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){cljs.core.println.call(null,na,li);
if(cljs.core.truth_(err__$1))
{return cb.call(null,err__$1);
} else
{var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.main.parseIdAndImage,test.main.parseCardInfo.call(null,body__$1)));return setTimeout(((function (i__6608,cardInfo,vec__6612,li,na,c__4274__auto__,size__4275__auto__,b__6609,s__6607__$2,temp__4126__auto__,tabs,links){
return (function (){return cb.call(null,null,cardInfo);
});})(i__6608,cardInfo,vec__6612,li,na,c__4274__auto__,size__4275__auto__,b__6609,s__6607__$2,temp__4126__auto__,tabs,links))
,(1000));
}
});})(i__6608,vec__6612,li,na,c__4274__auto__,size__4275__auto__,b__6609,s__6607__$2,temp__4126__auto__,tabs,links))
);
});})(i__6608,vec__6612,li,na,c__4274__auto__,size__4275__auto__,b__6609,s__6607__$2,temp__4126__auto__,tabs,links))
);
{
var G__6616 = (i__6608 + (1));
i__6608 = G__6616;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6609),iter__6606.call(null,cljs.core.chunk_rest.call(null,s__6607__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6609),null);
}
} else
{var vec__6613 = cljs.core.first.call(null,s__6607__$2);var li = cljs.core.nth.call(null,vec__6613,(0),null);var na = cljs.core.nth.call(null,vec__6613,(1),null);return cljs.core.cons.call(null,((function (vec__6613,li,na,s__6607__$2,temp__4126__auto__,tabs,links){
return (function (cb){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (vec__6613,li,na,s__6607__$2,temp__4126__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){cljs.core.println.call(null,na,li);
if(cljs.core.truth_(err__$1))
{return cb.call(null,err__$1);
} else
{var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.main.parseIdAndImage,test.main.parseCardInfo.call(null,body__$1)));return setTimeout(((function (cardInfo,vec__6613,li,na,s__6607__$2,temp__4126__auto__,tabs,links){
return (function (){return cb.call(null,null,cardInfo);
});})(cardInfo,vec__6613,li,na,s__6607__$2,temp__4126__auto__,tabs,links))
,(1000));
}
});})(vec__6613,li,na,s__6607__$2,temp__4126__auto__,tabs,links))
);
});})(vec__6613,li,na,s__6607__$2,temp__4126__auto__,tabs,links))
,iter__6606.call(null,cljs.core.rest.call(null,s__6607__$2)));
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
return (function (p__6614,cb){var vec__6615 = p__6614;var id = cljs.core.nth.call(null,vec__6615,(0),null);var src = cljs.core.nth.call(null,vec__6615,(1),null);cljs.core.println.call(null,"writing... ",src," to ",id,".jpg ...");
test.main.request.call(null,src).pipe(test.main.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.outputDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",((function (vec__6615,id,src,tabs,links,parseCardInfos){
return (function (){return setTimeout(cb,(2000));
});})(vec__6615,id,src,tabs,links,parseCardInfos))
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
_main.cljs$lang$applyTo = (function (arglist__6617){
var args = cljs.core.seq(arglist__6617);
return _main__delegate(args);
});
_main.cljs$core$IFn$_invoke$arity$variadic = _main__delegate;
return _main;
})()
;
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_main_cli_fn_STAR_ = test.main._main;
