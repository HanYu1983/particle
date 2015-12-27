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
{cljs.core.doall.call(null,(function (){var iter__4276__auto__ = (function iter__5200(s__5201){return (new cljs.core.LazySeq(null,(function (){var s__5201__$1 = s__5201;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5201__$1);if(temp__4126__auto__)
{var s__5201__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5201__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5201__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5203 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5202 = (0);while(true){
if((i__5202 < size__4275__auto__))
{var da = cljs.core._nth.call(null,c__4274__auto__,i__5202);cljs.core.chunk_append.call(null,b__5203,obs.onNext(da));
{
var G__5204 = (i__5202 + (1));
i__5202 = G__5204;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5203),iter__5200.call(null,cljs.core.chunk_rest.call(null,s__5201__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5203),null);
}
} else
{var da = cljs.core.first.call(null,s__5201__$2);return cljs.core.cons.call(null,obs.onNext(da),iter__5200.call(null,cljs.core.rest.call(null,s__5201__$2)));
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
{var G__5206 = obs;G__5206.onNext(data);
G__5206.onCompleted();
return G__5206;
}
}));
}));
});
test.yoyo.parseTrigger = (function parseTrigger(data){var triggerMark = cljs.core.PersistentHashMap.fromArrays(["icon_tri_F.png","icon_tri_0.png","icon_tri_B.png","icon_tri_D.png","icon_tri_1.png","icon_tri_1G.png","icon_tri_1E.png","icon_tri_1A.png","icon_tri_2.png","icon_tri_C.png"],["\u30C8\u30EC\u30B8\u30E3\u30FC","\u306A\u3057","\u30D7\u30FC\u30EB","\u30C9\u30ED\u30FC","\u30BD\u30A6\u30EB","\u30BD\u30A6\u30EB/\u30B2\u30FC\u30C8","\u30BD\u30A6\u30EB/\u30B7\u30E7\u30C3\u30C8","\u30BD\u30A6\u30EB/\u30EA\u30BF\u30FC\u30F3","\u30BD\u30A6\u30EB","\u30AB\u30E0\u30D0\u30C3\u30AF"]);return cljs.core.update_in.call(null,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11)], null),((function (triggerMark){
return (function (data__$1){return clojure.string.join.call(null,",",cljs.core.reduce.call(null,((function (triggerMark){
return (function (all,p__5209){var vec__5210 = p__5209;var k = cljs.core.nth.call(null,vec__5210,(0),null);var cnt = cljs.core.nth.call(null,vec__5210,(1),null);if((cnt > (0)))
{return cljs.core.cons.call(null,cljs.core.get.call(null,triggerMark,k),all);
} else
{return all;
}
});})(triggerMark))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (triggerMark){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.count.call(null,cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,k),data__$1))], null);
});})(triggerMark))
,cljs.core.keys.call(null,triggerMark))));
});})(triggerMark))
);
});
test.yoyo.parseHtml = (function parseHtml(data){return test.yoyo.rx.Observable.create((function (obs){var group = cljs.core.map.call(null,cljs.core.comp.call(null,test.yoyo.parseTrigger,cljs.core.partial.call(null,cljs.core.apply,cljs.core.vector),cljs.core.rest),cljs.core.re_seq.call(null,/[\s\S]+?<img src=\"(.+\.jpg)\" height=\"124\".+?\/>[\s\S]+?<div class=\"data_box\">[\s\S]+?\"id\">(.+)<\/span> (.+?) (.+?)<\/p>[\s\S]+?<td class=\"w200\">(.*?)<\/td>[\s\S]+?<td class=\"w150\">(.*?)<\/td>[\s\S]+?<td class=\"w150\">(.*?)<\/td>[\s\S]+?<td class=\"w70\">(.*?)<\/td>[\s\S]+?<td class=\"w70\">(.*?)<\/td>[\s\S]+?<td class=\"w90\">(.*?)<\/td>[\s\S]+?<td class=\"w60\">(.*?)<\/td>[\s\S]+?<td class=\"w90\">([\s\S]*?)<\/td>[\s\S]+?<td class=\"text\">(.*?)<\/td>/,data));cljs.core.doall.call(null,(function (){var iter__4276__auto__ = ((function (group){
return (function iter__5215(s__5216){return (new cljs.core.LazySeq(null,((function (group){
return (function (){var s__5216__$1 = s__5216;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5216__$1);if(temp__4126__auto__)
{var s__5216__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5216__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5216__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5218 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5217 = (0);while(true){
if((i__5217 < size__4275__auto__))
{var obj = cljs.core._nth.call(null,c__4274__auto__,i__5217);cljs.core.chunk_append.call(null,b__5218,obs.onNext(cljs.core.apply.call(null,cljs.core.array,obj)));
{
var G__5219 = (i__5217 + (1));
i__5217 = G__5219;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5218),iter__5215.call(null,cljs.core.chunk_rest.call(null,s__5216__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5218),null);
}
} else
{var obj = cljs.core.first.call(null,s__5216__$2);return cljs.core.cons.call(null,obs.onNext(cljs.core.apply.call(null,cljs.core.array,obj)),iter__5215.call(null,cljs.core.rest.call(null,s__5216__$2)));
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
{var G__5221 = obs;G__5221.onCompleted();
return G__5221;
}
}));
}));
});
test.yoyo.fetchImage = (function fetchImage(outputImageDir,url){console.log(url);
return test.yoyo.rx.Observable.create((function (obs){return test.yoyo.request.call(null,url).pipe(test.yoyo.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputImageDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"_",cljs.core.take_last.call(null,(2),clojure.string.split.call(null,url,/\//))))))).on("close",(function (){return obs.onCompleted();
}));
}));
});
test.yoyo.parseInfo = (function parseInfo(pkgName){return test.yoyo.rx.Observable.of(pkgName).map((function (p1__5222_SHARP_){return ("yoyoDoc/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5222_SHARP_)+".html");
})).flatMap(test.yoyo.readfile).flatMap(test.yoyo.parseHtml).reduce((function (acc,x){var G__5224 = acc;G__5224.push(x);
return G__5224;
}),[]).flatMap(cljs.core.partial.call(null,test.yoyo.writefile,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.yoyo.output)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgName)+".json"))).subscribe((function (data){return null;
}),(function (err){return console.log("err:",err);
}),(function (){return console.log("write ok!");
}));
});
test.yoyo.getImage = (function getImage(pkgName){return test.yoyo.readfile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.yoyo.output)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgName)+".json")).map((function (p1__5225_SHARP_){return JSON.parse(p1__5225_SHARP_);
})).flatMap((function (p1__5226_SHARP_){return test.yoyo.rx.Observable.from(p1__5226_SHARP_);
})).map((function (p1__5227_SHARP_){return (p1__5227_SHARP_[(0)]);
})).map(test.yoyo.imageUrl).flatMap(cljs.core.partial.call(null,test.yoyo.fetchImage,test.yoyo.outputImageDir)).subscribe((function (data){return console.log(data);
}),(function (err){return console.log("err:",err);
}),(function (){return console.log("get image ok!");
}));
});
