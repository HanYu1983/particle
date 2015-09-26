// Compiled by ClojureScript 0.0-2268
goog.provide('test.main');
goog.require('cljs.core');
test.main.async = require("async");
test.main.request = require("request");
test.main.fs = require("fs");
test.main.outputDir = "output/";
test.main.host = "http://sangokushi-taisen-tcg.segataiwan.com.tw/";
test.main.packages = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["PR\u5361\u7247\uFF1APR"], null);
test.main.page = (2);
test.main.parseGroup = (function parseGroup(content){var group = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<li><p>(\\D+)<\\/p>\\s+(<ul>\\s+<li>.*<\\/ul>)\\s+<\\/li>")),content);var iter__4276__auto__ = ((function (group){
return (function iter__5258(s__5259){return (new cljs.core.LazySeq(null,((function (group){
return (function (){var s__5259__$1 = s__5259;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5259__$1);if(temp__4126__auto__)
{var s__5259__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5259__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5259__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5261 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5260 = (0);while(true){
if((i__5260 < size__4275__auto__))
{var vec__5264 = cljs.core._nth.call(null,c__4274__auto__,i__5260);var _ = cljs.core.nth.call(null,vec__5264,(0),null);var pkgName = cljs.core.nth.call(null,vec__5264,(1),null);var links = cljs.core.nth.call(null,vec__5264,(2),null);cljs.core.chunk_append.call(null,b__5261,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null));
{
var G__5266 = (i__5260 + (1));
i__5260 = G__5266;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5261),iter__5258.call(null,cljs.core.chunk_rest.call(null,s__5259__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5261),null);
}
} else
{var vec__5265 = cljs.core.first.call(null,s__5259__$2);var _ = cljs.core.nth.call(null,vec__5265,(0),null);var pkgName = cljs.core.nth.call(null,vec__5265,(1),null);var links = cljs.core.nth.call(null,vec__5265,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pkgName,links], null),iter__5258.call(null,cljs.core.rest.call(null,s__5259__$2)));
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
return (function iter__5275(s__5276){return (new cljs.core.LazySeq(null,((function (group){
return (function (){var s__5276__$1 = s__5276;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5276__$1);if(temp__4126__auto__)
{var s__5276__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5276__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5276__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5278 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5277 = (0);while(true){
if((i__5277 < size__4275__auto__))
{var vec__5281 = cljs.core._nth.call(null,c__4274__auto__,i__5277);var _ = cljs.core.nth.call(null,vec__5281,(0),null);var li = cljs.core.nth.call(null,vec__5281,(1),null);var na = cljs.core.nth.call(null,vec__5281,(2),null);cljs.core.chunk_append.call(null,b__5278,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null));
{
var G__5283 = (i__5277 + (1));
i__5277 = G__5283;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5278),iter__5275.call(null,cljs.core.chunk_rest.call(null,s__5276__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5278),null);
}
} else
{var vec__5282 = cljs.core.first.call(null,s__5276__$2);var _ = cljs.core.nth.call(null,vec__5282,(0),null);var li = cljs.core.nth.call(null,vec__5282,(1),null);var na = cljs.core.nth.call(null,vec__5282,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [li,na], null),iter__5275.call(null,cljs.core.rest.call(null,s__5276__$2)));
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
return (function (p__5286){var vec__5287 = p__5286;var _ = cljs.core.nth.call(null,vec__5287,(0),null);var src = cljs.core.nth.call(null,vec__5287,(1),null);if(cljs.core._EQ_.call(null,(0),src.indexOf("http")))
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
test.main.testGetOne = (function testGetOne(){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+"cardlist.php"),(function (err,res,body){var tabs = test.main.parseGroup.call(null,body);var links = cljs.core.map.call(null,test.main.parseOne,cljs.core.map.call(null,cljs.core.second,tabs));var vec__5290 = cljs.core.ffirst.call(null,links);var li = cljs.core.nth.call(null,vec__5290,(0),null);var na = cljs.core.nth.call(null,vec__5290,(1),null);var test_link = vec__5290;return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (tabs,links,vec__5290,li,na,test_link){
return (function (err__$1,res__$1,body__$1){var cardInfo = test.main.parseCardInfo.call(null,body__$1);var vec__5291 = cljs.core.first.call(null,test.main.parseIdAndImage.call(null,cljs.core.first.call(null,cardInfo)));var id = cljs.core.nth.call(null,vec__5291,(0),null);var src = cljs.core.nth.call(null,vec__5291,(1),null);var result = vec__5291;return test.main.request.call(null,src).pipe(test.main.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.outputDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",((function (cardInfo,vec__5291,id,src,result,tabs,links,vec__5290,li,na,test_link){
return (function (){return cljs.core.println.call(null,"ok");
});})(cardInfo,vec__5291,id,src,result,tabs,links,vec__5290,li,na,test_link))
);
});})(tabs,links,vec__5290,li,na,test_link))
);
}));
});
test.main.testGetAll = (function testGetAll(){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+"cardlist.php"),(function (err,res,body){var tabs = test.main.parseGroup.call(null,body);var links = cljs.core.map.call(null,((function (tabs){
return (function (p__5307){var vec__5308 = p__5307;var li = cljs.core.nth.call(null,vec__5308,(0),null);var na = cljs.core.nth.call(null,vec__5308,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)+"&page="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.page)),na], null);
});})(tabs))
,cljs.core.filter.call(null,((function (tabs){
return (function (p__5309){var vec__5310 = p__5309;var _ = cljs.core.nth.call(null,vec__5310,(0),null);var na = cljs.core.nth.call(null,vec__5310,(1),null);return cljs.core.some.call(null,((function (vec__5310,_,na,tabs){
return (function (p1__5292_SHARP_){return cljs.core._EQ_.call(null,p1__5292_SHARP_,na);
});})(vec__5310,_,na,tabs))
,test.main.packages);
});})(tabs))
,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.main.parseOne,cljs.core.map.call(null,cljs.core.second,tabs)))));var parseCardInfos = (function (){var iter__4276__auto__ = ((function (tabs,links){
return (function iter__5311(s__5312){return (new cljs.core.LazySeq(null,((function (tabs,links){
return (function (){var s__5312__$1 = s__5312;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5312__$1);if(temp__4126__auto__)
{var s__5312__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5312__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5312__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5314 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5313 = (0);while(true){
if((i__5313 < size__4275__auto__))
{var vec__5317 = cljs.core._nth.call(null,c__4274__auto__,i__5313);var li = cljs.core.nth.call(null,vec__5317,(0),null);var na = cljs.core.nth.call(null,vec__5317,(1),null);cljs.core.chunk_append.call(null,b__5314,((function (i__5313,vec__5317,li,na,c__4274__auto__,size__4275__auto__,b__5314,s__5312__$2,temp__4126__auto__,tabs,links){
return (function (cb){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (i__5313,vec__5317,li,na,c__4274__auto__,size__4275__auto__,b__5314,s__5312__$2,temp__4126__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){cljs.core.println.call(null,na,li);
if(cljs.core.truth_(err__$1))
{return cb.call(null,err__$1);
} else
{var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.main.parseIdAndImage,test.main.parseCardInfo.call(null,body__$1)));return setTimeout(((function (i__5313,cardInfo,vec__5317,li,na,c__4274__auto__,size__4275__auto__,b__5314,s__5312__$2,temp__4126__auto__,tabs,links){
return (function (){return cb.call(null,null,cardInfo);
});})(i__5313,cardInfo,vec__5317,li,na,c__4274__auto__,size__4275__auto__,b__5314,s__5312__$2,temp__4126__auto__,tabs,links))
,(1000));
}
});})(i__5313,vec__5317,li,na,c__4274__auto__,size__4275__auto__,b__5314,s__5312__$2,temp__4126__auto__,tabs,links))
);
});})(i__5313,vec__5317,li,na,c__4274__auto__,size__4275__auto__,b__5314,s__5312__$2,temp__4126__auto__,tabs,links))
);
{
var G__5321 = (i__5313 + (1));
i__5313 = G__5321;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5314),iter__5311.call(null,cljs.core.chunk_rest.call(null,s__5312__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5314),null);
}
} else
{var vec__5318 = cljs.core.first.call(null,s__5312__$2);var li = cljs.core.nth.call(null,vec__5318,(0),null);var na = cljs.core.nth.call(null,vec__5318,(1),null);return cljs.core.cons.call(null,((function (vec__5318,li,na,s__5312__$2,temp__4126__auto__,tabs,links){
return (function (cb){return test.main.request.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.host)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(li)),((function (vec__5318,li,na,s__5312__$2,temp__4126__auto__,tabs,links){
return (function (err__$1,res__$1,body__$1){cljs.core.println.call(null,na,li);
if(cljs.core.truth_(err__$1))
{return cb.call(null,err__$1);
} else
{var cardInfo = cljs.core.reduce.call(null,cljs.core.concat,cljs.core.List.EMPTY,cljs.core.map.call(null,test.main.parseIdAndImage,test.main.parseCardInfo.call(null,body__$1)));return setTimeout(((function (cardInfo,vec__5318,li,na,s__5312__$2,temp__4126__auto__,tabs,links){
return (function (){return cb.call(null,null,cardInfo);
});})(cardInfo,vec__5318,li,na,s__5312__$2,temp__4126__auto__,tabs,links))
,(1000));
}
});})(vec__5318,li,na,s__5312__$2,temp__4126__auto__,tabs,links))
);
});})(vec__5318,li,na,s__5312__$2,temp__4126__auto__,tabs,links))
,iter__5311.call(null,cljs.core.rest.call(null,s__5312__$2)));
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
return (function (p__5319,cb){var vec__5320 = p__5319;var id = cljs.core.nth.call(null,vec__5320,(0),null);var src = cljs.core.nth.call(null,vec__5320,(1),null);cljs.core.println.call(null,"writing... ",src," to ",id,".jpg ...");
test.main.request.call(null,src).pipe(test.main.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.main.outputDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",((function (vec__5320,id,src,tabs,links,parseCardInfos){
return (function (){return setTimeout(cb,(2000));
});})(vec__5320,id,src,tabs,links,parseCardInfos))
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
_main.cljs$lang$applyTo = (function (arglist__5322){
var args = cljs.core.seq(arglist__5322);
return _main__delegate(args);
});
_main.cljs$core$IFn$_invoke$arity$variadic = _main__delegate;
return _main;
})()
;
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_main_cli_fn_STAR_ = test.main._main;
