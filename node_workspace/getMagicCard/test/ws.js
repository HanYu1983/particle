// Compiled by ClojureScript 0.0-2268
goog.provide('test.ws');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
test.ws.rx = require("rx");
test.ws.fs = require("fs");
test.ws.output = "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/wsList.json";
test.ws.readdir = (function readdir(filepath){return test.ws.rx.Observable.create((function (obs){return test.ws.fs.readdir(filepath,(function (err,data){if(cljs.core.truth_(err))
{return obs.onError(err);
} else
{cljs.core.doall.call(null,(function (){var iter__4276__auto__ = (function iter__5272(s__5273){return (new cljs.core.LazySeq(null,(function (){var s__5273__$1 = s__5273;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5273__$1);if(temp__4126__auto__)
{var s__5273__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5273__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5273__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5275 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5274 = (0);while(true){
if((i__5274 < size__4275__auto__))
{var da = cljs.core._nth.call(null,c__4274__auto__,i__5274);cljs.core.chunk_append.call(null,b__5275,obs.onNext(da));
{
var G__5276 = (i__5274 + (1));
i__5274 = G__5276;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5275),iter__5272.call(null,cljs.core.chunk_rest.call(null,s__5273__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5275),null);
}
} else
{var da = cljs.core.first.call(null,s__5273__$2);return cljs.core.cons.call(null,obs.onNext(da),iter__5272.call(null,cljs.core.rest.call(null,s__5273__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4276__auto__.call(null,cljs.core.js__GT_clj.call(null,data));
})());
return obs.onCompleted();
}
}));
}));
});
test.ws.readfile = (function readfile(filepath){return test.ws.rx.Observable.create((function (obs){return test.ws.fs.readFile(filepath,"utf8",(function (err,data){if(cljs.core.truth_(err))
{return obs.onError(err);
} else
{var G__5278 = obs;G__5278.onNext(data);
G__5278.onCompleted();
return G__5278;
}
}));
}));
});
test.ws.parseGroup = (function parseGroup(data){var img = cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/<a href=\"(http:.+?).gif\"/,data)),/\//));var vec__5283 = cljs.core.re_find.call(null,/\n([\w\d]+\/[\w\d-]+)([\s\S].+?)<[\/pbr]+>/,data);var _ = cljs.core.nth.call(null,vec__5283,(0),null);var id = cljs.core.nth.call(null,vec__5283,(1),null);var na = cljs.core.nth.call(null,vec__5283,(2),null);var chars = cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,/《(.+?)》/,data));var vec__5284 = cljs.core.re_find.call(null,/<a href.+?<\/a>[\s\S].+?\n([\s\S]+)/,data);var ___$1 = cljs.core.nth.call(null,vec__5284,(0),null);var text = cljs.core.nth.call(null,vec__5284,(1),null);var obj5286 = {"img":img,"id":id,"name":na,"chars":cljs.core.apply.call(null,cljs.core.array,chars).join(","),"text":text};return obj5286;
});
test.ws.parseHtml = (function parseHtml(data){return test.ws.rx.Observable.create((function (obs){var vec__5292 = cljs.core.re_find.call(null,/(<div class=\"post-body entry-content\"[\s\S]{3000}[\s\S]+?<\/div>)/,data);var _ = cljs.core.nth.call(null,vec__5292,(0),null);var body = cljs.core.nth.call(null,vec__5292,(1),null);var group = cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,/(<a href=[\s\S]{250}[\s\S]+?)\n<[\/pbr]+>\n/,body));cljs.core.doall.call(null,(function (){var iter__4276__auto__ = ((function (vec__5292,_,body,group){
return (function iter__5293(s__5294){return (new cljs.core.LazySeq(null,((function (vec__5292,_,body,group){
return (function (){var s__5294__$1 = s__5294;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5294__$1);if(temp__4126__auto__)
{var s__5294__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5294__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5294__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5296 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5295 = (0);while(true){
if((i__5295 < size__4275__auto__))
{var obj = cljs.core._nth.call(null,c__4274__auto__,i__5295);cljs.core.chunk_append.call(null,b__5296,obs.onNext(test.ws.parseGroup.call(null,obj)));
{
var G__5297 = (i__5295 + (1));
i__5295 = G__5297;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5296),iter__5293.call(null,cljs.core.chunk_rest.call(null,s__5294__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5296),null);
}
} else
{var obj = cljs.core.first.call(null,s__5294__$2);return cljs.core.cons.call(null,obs.onNext(test.ws.parseGroup.call(null,obj)),iter__5293.call(null,cljs.core.rest.call(null,s__5294__$2)));
}
} else
{return null;
}
break;
}
});})(vec__5292,_,body,group))
,null,null));
});})(vec__5292,_,body,group))
;return iter__4276__auto__.call(null,group);
})());
return obs.onCompleted();
}));
});
test.ws.writefile = (function writefile(output,data){console.log(data.length);
return test.ws.rx.Observable.create((function (obs){return test.ws.fs.writeFile(output,JSON.stringify(data,null,"\t"),(function (err){if(cljs.core.truth_(err))
{return obs.onError(err);
} else
{var G__5299 = obs;G__5299.onCompleted();
return G__5299;
}
}));
}));
});
test.ws.test_base = (function test_base(){return test.ws.readdir.call(null,"wsDoc").map((function (p1__5300_SHARP_){return ("wsDoc/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5300_SHARP_));
})).flatMap(test.ws.readfile).flatMap(test.ws.parseHtml).reduce((function (acc,x){var G__5302 = acc;G__5302.push(x);
return G__5302;
}),[]).flatMap(cljs.core.partial.call(null,test.ws.writefile,test.ws.output)).subscribe((function (data){return null;
}),(function (err){return console.log("err:",err);
}),(function (){return console.log("write ok!");
}));
});
