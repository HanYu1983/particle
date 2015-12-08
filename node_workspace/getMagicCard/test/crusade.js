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
test.crusade.prods = cljs.core.PersistentVector.fromArray(["22001.json","22002.json","22003.json","22004.json","22005.json","22006.json","22007.json","22008.json","22009.json","22010.json","22011.json","22012.json","22013.json","22014.json","22015.json","22016.json","22017.json","22018.json","22019.json","22020.json","22021.json","22022.json","22023.json","22024.json","22025.json","22026.json","22027.json","22028.json","22029.json","22034.json","22035.json","22036.json","22037.json","22038.json","22039.json","22040.json","22041.json","22042.json","22043.json","22044.json","22045.json","22901.json"], true);
test.crusade.printFileList = (function printFileList(){return test.crusade.fs.readdir(test.crusade.output,(function (err,files){return console.log(files);
}));
});
test.crusade.fetchImage = (function fetchImage(p__5627,cb){var vec__5629 = p__5627;var prod = cljs.core.nth.call(null,vec__5629,(0),null);var id = cljs.core.nth.call(null,vec__5629,(1),null);console.log(("fetchImage"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prod)+"_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"));
return test.crusade.request.call(null,test.crusade.imageUrl.call(null,prod,id)).pipe(test.crusade.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.crusade.outputImageDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prod)+"_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",((function (vec__5629,prod,id){
return (function (){console.log("ok for fetchImage",id);
return setTimeout(cb,(3000));
});})(vec__5629,prod,id))
);
});
test.crusade.fetchAllImage = (function fetchAllImage(){return test.crusade.async.waterfall([(function (cb){return test.crusade.async.map(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__5630_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.crusade.output)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5630_SHARP_));
}),test.crusade.prods)),lib.tool.getFile,cb);
}),(function (datas,cb){var alls = cljs.core.reduce.call(null,(function (p1__5633_SHARP_,p2__5634_SHARP_){return cljs.core.concat.call(null,p1__5633_SHARP_,p2__5634_SHARP_);
}),cljs.core.List.EMPTY,cljs.core.map.call(null,(function (p1__5632_SHARP_){return p1__5632_SHARP_.data;
}),cljs.core.map.call(null,(function (p1__5631_SHARP_){return JSON.parse(p1__5631_SHARP_);
}),cljs.core.js__GT_clj.call(null,datas))));console.log("start fetch image length:",cljs.core.count.call(null,alls));
return cb.call(null,null,alls);
}),(function (datas,cb){var pids = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (data){return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[data.prodid,data.info_18],null));
}),datas));return test.crusade.async.eachSeries(pids,test.crusade.fetchImage,cb.call(null,null));
})],(function (err,rets){return console.log("fetchAllImage done!");
}));
});
