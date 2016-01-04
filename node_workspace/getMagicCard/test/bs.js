// Compiled by ClojureScript 0.0-2268
goog.provide('test.bs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
test.bs.rx = require("rx");
test.bs.fs = require("fs");
test.bs._ = require("underscore");
test.bs.request = require("request");
test.bs.output = "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/bsList/";
test.bs.outputImageDir = "output/bs/";
test.bs.imageUrl = (function imageUrl(ori){return ("http://yuyu-tei.jp"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,ori,/90_126/,"front")));
});
test.bs.readdir = (function readdir(filepath){return test.bs.rx.Observable.create((function (obs){return test.bs.fs.readdir(filepath,(function (err,data){if(cljs.core.truth_(err))
{return obs.onError(err);
} else
{cljs.core.doall.call(null,(function (){var iter__4276__auto__ = (function iter__5239(s__5240){return (new cljs.core.LazySeq(null,(function (){var s__5240__$1 = s__5240;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5240__$1);if(temp__4126__auto__)
{var s__5240__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5240__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5240__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5242 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5241 = (0);while(true){
if((i__5241 < size__4275__auto__))
{var da = cljs.core._nth.call(null,c__4274__auto__,i__5241);cljs.core.chunk_append.call(null,b__5242,obs.onNext(da));
{
var G__5243 = (i__5241 + (1));
i__5241 = G__5243;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5242),iter__5239.call(null,cljs.core.chunk_rest.call(null,s__5240__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5242),null);
}
} else
{var da = cljs.core.first.call(null,s__5240__$2);return cljs.core.cons.call(null,obs.onNext(da),iter__5239.call(null,cljs.core.rest.call(null,s__5240__$2)));
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
test.bs.readfile = (function readfile(filepath){return test.bs.rx.Observable.create((function (obs){return test.bs.fs.readFile(filepath,"utf8",(function (err,data){if(cljs.core.truth_(err))
{return obs.onError(err);
} else
{var G__5245 = obs;G__5245.onNext(data);
G__5245.onCompleted();
return G__5245;
}
}));
}));
});
test.bs.dbc2sbc = (function dbc2sbc(s){if(cljs.core.truth_(s))
{return clojure.string.replace.call(null,s,/[\uff01-\uff5e]/,(function (p1__5246_SHARP_){return String.fromCharCode((p1__5246_SHARP_.charCodeAt((0)) - (65248)));
}));
} else
{return null;
}
});
test.bs.parseHtml = (function parseHtml(data){return test.bs.rx.Observable.create((function (obs){var group = cljs.core.map.call(null,cljs.core.rest,cljs.core.re_seq.call(null,/real_src\s?=\"(.+?)\"[\s\S]+?<div>(.*?)<\/DIV>([\s\S.]*?)<br \/><\/DIV>([\s\S.]*?)<div>卡牌解说<\/DIV>([\s\S.]*?)<br \/><\/DIV>/,data));var urlidpair = cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,cljs.core.first,group),cljs.core.map.call(null,((function (group){
return (function (p1__5247_SHARP_){return test.bs.dbc2sbc.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/编号：(.*?)　收录/,cljs.core.nth.call(null,p1__5247_SHARP_,(2)))));
});})(group))
,group));cljs.core.doall.call(null,(function (){var iter__4276__auto__ = ((function (group,urlidpair){
return (function iter__5252(s__5253){return (new cljs.core.LazySeq(null,((function (group,urlidpair){
return (function (){var s__5253__$1 = s__5253;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5253__$1);if(temp__4126__auto__)
{var s__5253__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5253__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5253__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5255 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5254 = (0);while(true){
if((i__5254 < size__4275__auto__))
{var obj = cljs.core._nth.call(null,c__4274__auto__,i__5254);cljs.core.chunk_append.call(null,b__5255,obs.onNext(cljs.core.apply.call(null,cljs.core.array,obj)));
{
var G__5256 = (i__5254 + (1));
i__5254 = G__5256;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5255),iter__5252.call(null,cljs.core.chunk_rest.call(null,s__5253__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5255),null);
}
} else
{var obj = cljs.core.first.call(null,s__5253__$2);return cljs.core.cons.call(null,obs.onNext(cljs.core.apply.call(null,cljs.core.array,obj)),iter__5252.call(null,cljs.core.rest.call(null,s__5253__$2)));
}
} else
{return null;
}
break;
}
});})(group,urlidpair))
,null,null));
});})(group,urlidpair))
;return iter__4276__auto__.call(null,urlidpair);
})());
return obs.onCompleted();
}));
});
test.bs.writefile = (function writefile(output,data){console.log(data.length);
return test.bs.rx.Observable.create((function (obs){return test.bs.fs.writeFile(output,JSON.stringify(data,null,"\t"),(function (err){if(cljs.core.truth_(err))
{return obs.onError(err);
} else
{var G__5258 = obs;G__5258.onCompleted();
return G__5258;
}
}));
}));
});
test.bs.fetchImage = (function fetchImage(outputImage,url){console.log(url);
return test.bs.rx.Observable.create((function (obs){return test.bs.request.call(null,url).pipe(test.bs.fs.createWriteStream(outputImage)).on("close",(function (){return obs.onCompleted();
}));
}));
});
test.bs.parseAll = (function parseAll(){return test.bs.readdir.call(null,"bsDoc").map((function (filename){return ("bsDoc/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename));
})).flatMap(test.bs.readfile).flatMap(test.bs.parseHtml).reduce((function (acc,x){var G__5260 = acc;G__5260.push(x);
return G__5260;
}),[]).flatMap(cljs.core.partial.call(null,test.bs.writefile,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.bs.output)+"all.json"))).subscribe((function (data){return null;
}),(function (err){return console.log("err:",err);
}),(function (){return console.log("write ok!");
}));
});
test.bs.parseInfo = (function parseInfo(pkgName){return test.bs.rx.Observable.of(pkgName).map((function (p1__5261_SHARP_){return ("bsDoc/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5261_SHARP_)+".html");
})).flatMap(test.bs.readfile).flatMap(test.bs.parseHtml).reduce((function (acc,x){var G__5263 = acc;G__5263.push(x);
return G__5263;
}),[]).flatMap(cljs.core.partial.call(null,test.bs.writefile,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.bs.output)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgName)+".json"))).subscribe((function (data){return null;
}),(function (err){return console.log("err:",err);
}),(function (){return console.log("write ok!");
}));
});
test.bs.getImage = (function getImage(pkgName){test.bs.idx = cljs.core.atom.call(null,(0));
return test.bs.readfile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.bs.output)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pkgName)+".json")).map((function (p1__5264_SHARP_){return JSON.parse(p1__5264_SHARP_);
})).flatMap((function (p1__5265_SHARP_){return test.bs.rx.Observable.from(p1__5265_SHARP_);
})).delay(test.bs.rx.Observable.timer((0)),(function (x){cljs.core.swap_BANG_.call(null,test.bs.idx,cljs.core.inc);
return test.bs.rx.Observable.timer((cljs.core.deref.call(null,test.bs.idx) * (3000)));
})).timeInterval().flatMap((function (obj){var v = obj.value;var vec__5267 = v;var url = cljs.core.nth.call(null,vec__5267,(0),null);var id = cljs.core.nth.call(null,vec__5267,(1),null);if(cljs.core.truth_(id))
{return test.bs.fetchImage.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.bs.outputImageDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"),url);
} else
{return test.bs.rx.Observable.just(null);
}
})).subscribe((function (data){return console.log("wow!",data);
}),(function (err){return console.log("err:",err);
}),(function (){return console.log("get image ok!");
}));
});
/**
* 這個函式不能使用，imagemin套件不能用
*/
test.bs.compress = (function compress(p){var imagemin = require("imagemin");return (new imagemin()).src((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)+"/*.{gif,jpg,png,svg}")).dest("output/compress/").use(imagemin.jpegtran((function (){var obj5271 = {"progressive":false};return obj5271;
})())).run(((function (imagemin){
return (function (err,files){console.log("end");
return console.log(err);
});})(imagemin))
);
});
