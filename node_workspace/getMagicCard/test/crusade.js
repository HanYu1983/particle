// Compiled by ClojureScript 0.0-2268
goog.provide('test.crusade');
goog.require('cljs.core');
goog.require('lib.tool');
goog.require('lib.tool');
test.crusade._ = require("underscore");
test.crusade.request = require("request");
test.crusade.async = require("async");
test.crusade.fs = require("fs");
test.crusade.imageUrl = (function imageUrl(prod,id){return ("http://www.carddass.com/crusade/image/cardlist/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prod)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg");
});
test.crusade.output = "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/crusadeList/";
test.crusade.outputImageDir = "output/crusade/";
test.crusade.prods = cljs.core.PersistentVector.fromArray(["123901","123001","221901","240201","86004","86011","86901","123002","193001","235001","240202","86005","86012","123003","193002","235002","240203","86006","86013","123004","193003","235901","240901","86007","86014","123005","193004","240001","86001","86008","86015","123006","193901","240002","86002","86009","86016","123101","221001","240101","86003","86010","86017"], true);
test.crusade.fetchImage = (function fetchImage(p__5362,cb){var vec__5364 = p__5362;var prod = cljs.core.nth.call(null,vec__5364,(0),null);var id = cljs.core.nth.call(null,vec__5364,(1),null);console.log(("fetchImage"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prod)+"_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"));
return test.crusade.request.call(null,test.crusade.imageUrl.call(null,prod,id)).pipe(test.crusade.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.crusade.outputImageDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prod)+"_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",((function (vec__5364,prod,id){
return (function (){console.log("ok for fetchImage",id);
return setTimeout(cb,(3000));
});})(vec__5364,prod,id))
);
});
test.crusade.fetchAllImage = (function fetchAllImage(){return test.crusade.async.waterfall([(function (cb){return test.crusade.async.map(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__5365_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.crusade.output)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5365_SHARP_)+".json");
}),test.crusade.prods)),lib.tool.getFile,cb);
}),(function (datas,cb){var alls = cljs.core.reduce.call(null,(function (p1__5368_SHARP_,p2__5369_SHARP_){return cljs.core.concat.call(null,p1__5368_SHARP_,p2__5369_SHARP_);
}),cljs.core.List.EMPTY,cljs.core.map.call(null,(function (p1__5367_SHARP_){return p1__5367_SHARP_.data;
}),cljs.core.map.call(null,(function (p1__5366_SHARP_){return JSON.parse(p1__5366_SHARP_);
}),cljs.core.js__GT_clj.call(null,datas))));console.log("start fetch image length:",cljs.core.count.call(null,alls));
return cb.call(null,null,alls);
}),(function (datas,cb){var pids = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (data){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[data.prodid,data.info_18],null));
}),datas));return test.crusade.async.eachSeries(pids,test.crusade.fetchImage,cb.call(null,null));
})],(function (err,rets){return console.log("fetchAllImage done!");
}));
});
