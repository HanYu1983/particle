// Compiled by ClojureScript 0.0-2268
goog.provide('test.yoyo');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
test.yoyo.rx = require("rx");
test.yoyo.fs = require("fs");
test.yoyo._ = require("underscore");
test.yoyo.request = require("request");
test.yoyo.output = "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/wsList/";
test.yoyo.outputImageDir = "output/ws/";
test.yoyo.imageUrl = (function imageUrl(ori){return ("http://yuyu-tei.jp"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,ori,/90_126/,"front")));
});
test.yoyo.readdir = (function readdir(filepath){return test.yoyo.rx.Observable.create((function (obs){return test.yoyo.fs.readdir(filepath,(function (err,data){if(cljs.core.truth_(err))
{return obs.onError(err);
} else
{cljs.core.doall.call(null,(function (){var iter__4276__auto__ = (function iter__5225(s__5226){return (new cljs.core.LazySeq(null,(function (){var s__5226__$1 = s__5226;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5226__$1);if(temp__4126__auto__)
{var s__5226__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5226__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5226__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5228 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5227 = (0);while(true){
if((i__5227 < size__4275__auto__))
{var da = cljs.core._nth.call(null,c__4274__auto__,i__5227);cljs.core.chunk_append.call(null,b__5228,obs.onNext(da));
{
var G__5229 = (i__5227 + (1));
i__5227 = G__5229;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5228),iter__5225.call(null,cljs.core.chunk_rest.call(null,s__5226__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5228),null);
}
} else
{var da = cljs.core.first.call(null,s__5226__$2);return cljs.core.cons.call(null,obs.onNext(da),iter__5225.call(null,cljs.core.rest.call(null,s__5226__$2)));
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
test.yoyo.readfile = (function readfile(filepath){return test.yoyo.rx.Observable.create((function (obs){return test.yoyo.fs.readFile(filepath,"utf8",(function (err,data){if(cljs.core.truth_(err))
{return obs.onError(err);
} else
{var G__5231 = obs;G__5231.onNext(data);
G__5231.onCompleted();
return G__5231;
}
}));
}));
});
test.yoyo.parseHtml = (function parseHtml(data){return test.yoyo.rx.Observable.create((function (obs){var group = cljs.core.map.call(null,cljs.core.rest,cljs.core.re_seq.call(null,/[\s\S]+?<img src=\"(.+\.jpg)\" height=\"124\".+?\/>[\s\S]+?<div class=\"data_box\">[\s\S]+?\"id\">(.+)<\/span> (.+?) (.+?)<\/p>[\s\S]+?<td class=\"w200\">(.+?)<\/td>[\s\S]+?<td class=\"w150\">(.+?)<\/td>[\s\S]+?<td class=\"w150\">(.+?)<\/td>[\s\S]+?<td class=\"w70\">(.+?)<\/td>[\s\S]+?<td class=\"w70\">(.+?)<\/td>[\s\S]+?<td class=\"w90\">(.+?)<\/td>[\s\S]+?<td class=\"w60\">(.+?)<\/td>[\s\S]+?<td class=\"w90\">([\s\S]+?)<\/td>[\s\S]+?<td class=\"text\">(.+?)<\/td>/,data));cljs.core.doall.call(null,(function (){var iter__4276__auto__ = ((function (group){
return (function iter__5236(s__5237){return (new cljs.core.LazySeq(null,((function (group){
return (function (){var s__5237__$1 = s__5237;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5237__$1);if(temp__4126__auto__)
{var s__5237__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5237__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5237__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5239 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5238 = (0);while(true){
if((i__5238 < size__4275__auto__))
{var obj = cljs.core._nth.call(null,c__4274__auto__,i__5238);cljs.core.chunk_append.call(null,b__5239,obs.onNext(cljs.core.apply.call(null,cljs.core.array,obj)));
{
var G__5240 = (i__5238 + (1));
i__5238 = G__5240;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5239),iter__5236.call(null,cljs.core.chunk_rest.call(null,s__5237__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5239),null);
}
} else
{var obj = cljs.core.first.call(null,s__5237__$2);return cljs.core.cons.call(null,obs.onNext(cljs.core.apply.call(null,cljs.core.array,obj)),iter__5236.call(null,cljs.core.rest.call(null,s__5237__$2)));
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
})());
return obs.onCompleted();
}));
});
test.yoyo.writefile = (function writefile(output,data){console.log(data.length);
return test.yoyo.rx.Observable.create((function (obs){return test.yoyo.fs.writeFile(output,JSON.stringify(data,null,"\t"),(function (err){if(cljs.core.truth_(err))
{return obs.onError(err);
} else
{var G__5242 = obs;G__5242.onCompleted();
return G__5242;
}
}));
}));
});
test.yoyo.fetchImage = (function fetchImage(outputImageDir,url){console.log(url);
return test.yoyo.rx.Observable.create((function (obs){return test.yoyo.request.call(null,url).pipe(test.yoyo.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputImageDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"_",cljs.core.take_last.call(null,(2),clojure.string.split.call(null,url,/\//))))))).on("close",(function (){return obs.onCompleted();
}));
}));
});
test.yoyo.parseInfo = (function parseInfo(pkgName){return test.yoyo.rx.Observable.of(pkgName).map((function (p1__5243_SHARP_){return ("yoyoDoc/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5243_SHARP_)+".html");
})).flatMap(test.yoyo.readfile).flatMap(test.yoyo.parseHtml).reduce((function (acc,x){var G__5245 = acc;G__5245.push(x);
return G__5245;
}),[]).flatMap(cljs.core.partial.call(null,test.yoyo.writefile,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.yoyo.output)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgName)+".json"))).subscribe((function (data){return null;
}),(function (err){return console.log("err:",err);
}),(function (){return console.log("write ok!");
}));
});
test.yoyo.getImage = (function getImage(pkgName){return test.yoyo.readfile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.yoyo.output)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgName)+".json")).map((function (p1__5246_SHARP_){return JSON.parse(p1__5246_SHARP_);
})).flatMap((function (p1__5247_SHARP_){return test.yoyo.rx.Observable.from(p1__5247_SHARP_);
})).map((function (p1__5248_SHARP_){return (p1__5248_SHARP_[(0)]);
})).map(test.yoyo.imageUrl).flatMap(cljs.core.partial.call(null,test.yoyo.fetchImage,test.yoyo.outputImageDir)).subscribe((function (data){return console.log(data);
}),(function (err){return console.log("err:",err);
}),(function (){return console.log("get image ok!");
}));
});
