// Compiled by ClojureScript 0.0-2268
goog.provide('app.basic');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('app.fns');
goog.require('app.fns');
app.basic.rx = require("rx");
app.basic.script = require("./script.js");
app.basic.parseFile = (function parseFile(pattern,scriptFn,p__5377){var vec__5379 = p__5377;var filepath = cljs.core.nth.call(null,vec__5379,(0),null);var filecontent = cljs.core.nth.call(null,vec__5379,(1),null);var data = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.js__GT_clj,scriptFn,cljs.core.clj__GT_js,cljs.core.rest),cljs.core.re_seq.call(null,pattern,filecontent));return app.basic.rx.Observable.just(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filepath,data], null));
});
app.basic.sangoWar = (function sangoWar(){return "haha";
});
app.basic.parseInfo = (function parseInfo(cfg){var map__5384 = cfg;var map__5384__$1 = ((cljs.core.seq_QMARK_.call(null,map__5384))?cljs.core.apply.call(null,cljs.core.hash_map,map__5384):map__5384);var dir = cljs.core.get.call(null,map__5384__$1,"dir");var outputDir = cljs.core.get.call(null,map__5384__$1,"outputDir");var pattern = cljs.core.get.call(null,map__5384__$1,"pattern");var s = cljs.core.get.call(null,map__5384__$1,"script");var scriptFn = (function (){var or__3551__auto__ = (app.basic.script[s]);if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return cljs.core.identity;
}
})();return app.basic.rx.Observable.just(dir).flatMap(app.fns.readdir).map(((function (map__5384,map__5384__$1,dir,outputDir,pattern,s,scriptFn){
return (function (p1__5380_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5380_SHARP_));
});})(map__5384,map__5384__$1,dir,outputDir,pattern,s,scriptFn))
).flatMap(app.fns.readfile).flatMap(cljs.core.partial.call(null,app.basic.parseFile,cljs.core.re_pattern.call(null,pattern),scriptFn)).flatMap(((function (map__5384,map__5384__$1,dir,outputDir,pattern,s,scriptFn){
return (function (p__5385){var vec__5386 = p__5385;var filepath = cljs.core.nth.call(null,vec__5386,(0),null);var data = cljs.core.nth.call(null,vec__5386,(1),null);console.log(cljs.core.count.call(null,data));
return app.fns.writefile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(outputDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.last.call(null,clojure.string.split.call(null,filepath,/\//)),/\./)))))+".json"),JSON.stringify(cljs.core.clj__GT_js.call(null,data),null,"\t"));
});})(map__5384,map__5384__$1,dir,outputDir,pattern,s,scriptFn))
).subscribe(((function (map__5384,map__5384__$1,dir,outputDir,pattern,s,scriptFn){
return (function (data){return console.log("success");
});})(map__5384,map__5384__$1,dir,outputDir,pattern,s,scriptFn))
,((function (map__5384,map__5384__$1,dir,outputDir,pattern,s,scriptFn){
return (function (err){return console.log(err);
});})(map__5384,map__5384__$1,dir,outputDir,pattern,s,scriptFn))
,((function (map__5384,map__5384__$1,dir,outputDir,pattern,s,scriptFn){
return (function (){return console.log("completed");
});})(map__5384,map__5384__$1,dir,outputDir,pattern,s,scriptFn))
);
});
app.basic.main = (function main(filepath){return app.basic.rx.Observable.just(filepath).flatMap(app.fns.readfile).subscribe((function (p__5389){var vec__5390 = p__5389;var filepath__$1 = cljs.core.nth.call(null,vec__5390,(0),null);var content = cljs.core.nth.call(null,vec__5390,(1),null);return app.basic.parseInfo.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(content)));
}),(function (err){return console.log(err);
}),(function (){return console.log("completed");
}));
});
