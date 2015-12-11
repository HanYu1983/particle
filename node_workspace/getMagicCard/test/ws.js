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
{cljs.core.doall.call(null,(function (){var iter__4276__auto__ = (function iter__7504(s__7505){return (new cljs.core.LazySeq(null,(function (){var s__7505__$1 = s__7505;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7505__$1);if(temp__4126__auto__)
{var s__7505__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7505__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__7505__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__7507 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__7506 = (0);while(true){
if((i__7506 < size__4275__auto__))
{var da = cljs.core._nth.call(null,c__4274__auto__,i__7506);cljs.core.chunk_append.call(null,b__7507,obs.onNext(da));
{
var G__7508 = (i__7506 + (1));
i__7506 = G__7508;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7507),iter__7504.call(null,cljs.core.chunk_rest.call(null,s__7505__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7507),null);
}
} else
{var da = cljs.core.first.call(null,s__7505__$2);return cljs.core.cons.call(null,obs.onNext(da),iter__7504.call(null,cljs.core.rest.call(null,s__7505__$2)));
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
{var G__7510 = obs;G__7510.onNext(data);
G__7510.onCompleted();
return G__7510;
}
}));
}));
});
test.ws.parseGroup = (function parseGroup(data){var img = cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/<a href=\"(http:.+?).gif\"/,data)),/\//));var vec__7514 = cljs.core.re_find.call(null,/\n([\w\d]+\/[\w\d-]+)([\s\S].+?)<[\/pbr]+>/,data);var _ = cljs.core.nth.call(null,vec__7514,(0),null);var id = cljs.core.nth.call(null,vec__7514,(1),null);var na = cljs.core.nth.call(null,vec__7514,(2),null);var chars = cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,/《(.+?)》/,data));var obj7516 = {"img":img,"id":id,"name":na,"chars":cljs.core.apply.call(null,cljs.core.array,chars).join(","),"text":data};return obj7516;
});
test.ws.parseHtml = (function parseHtml(data){return test.ws.rx.Observable.create((function (obs){var vec__7522 = cljs.core.re_find.call(null,/(<div class=\"post-body entry-content\"[\s\S]{3000}[\s\S]+?<\/div>)/,data);var _ = cljs.core.nth.call(null,vec__7522,(0),null);var body = cljs.core.nth.call(null,vec__7522,(1),null);var group = cljs.core.map.call(null,cljs.core.second,cljs.core.re_seq.call(null,/(<a href=[\s\S]{250}[\s\S]+?)\n<[\/pbr]+>\n/,body));cljs.core.doall.call(null,(function (){var iter__4276__auto__ = ((function (vec__7522,_,body,group){
return (function iter__7523(s__7524){return (new cljs.core.LazySeq(null,((function (vec__7522,_,body,group){
return (function (){var s__7524__$1 = s__7524;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7524__$1);if(temp__4126__auto__)
{var s__7524__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7524__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__7524__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__7526 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__7525 = (0);while(true){
if((i__7525 < size__4275__auto__))
{var obj = cljs.core._nth.call(null,c__4274__auto__,i__7525);cljs.core.chunk_append.call(null,b__7526,obs.onNext(test.ws.parseGroup.call(null,obj)));
{
var G__7527 = (i__7525 + (1));
i__7525 = G__7527;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7526),iter__7523.call(null,cljs.core.chunk_rest.call(null,s__7524__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7526),null);
}
} else
{var obj = cljs.core.first.call(null,s__7524__$2);return cljs.core.cons.call(null,obs.onNext(test.ws.parseGroup.call(null,obj)),iter__7523.call(null,cljs.core.rest.call(null,s__7524__$2)));
}
} else
{return null;
}
break;
}
});})(vec__7522,_,body,group))
,null,null));
});})(vec__7522,_,body,group))
;return iter__4276__auto__.call(null,group);
})());
return obs.onCompleted();
}));
});
test.ws.writefile = (function writefile(output,data){console.log(data.length);
return test.ws.rx.Observable.create((function (obs){return test.ws.fs.writeFile(output,JSON.stringify(data,null,"\t"),(function (err){if(cljs.core.truth_(err))
{return obs.onError(err);
} else
{var G__7529 = obs;G__7529.onCompleted();
return G__7529;
}
}));
}));
});
test.ws.test_base = (function test_base(){return test.ws.readdir.call(null,"wsDoc").map((function (p1__7530_SHARP_){return ("wsDoc/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7530_SHARP_));
})).flatMap(test.ws.readfile).flatMap(test.ws.parseHtml).reduce((function (acc,x){var G__7532 = acc;G__7532.push(x);
return G__7532;
}),[]).flatMap(cljs.core.partial.call(null,test.ws.writefile,test.ws.output)).subscribe((function (data){return null;
}),(function (err){return console.log("err:",err);
}),(function (){return console.log("write ok!");
}));
});
