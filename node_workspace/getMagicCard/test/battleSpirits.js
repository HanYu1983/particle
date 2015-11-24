// Compiled by ClojureScript 0.0-2268
goog.provide('test.battleSpirits');
goog.require('cljs.core');
goog.require('lib.tool');
goog.require('lib.tool');
test.battleSpirits._ = require("underscore");
test.battleSpirits.request = require("request");
test.battleSpirits.async = require("async");
test.battleSpirits.fs = require("fs");
test.battleSpirits.cardInfoUrl = "http://tw.battlespirits.com/mydeck/request.php";
test.battleSpirits.imageUrl = (function imageUrl(id){return ("http://tw.battlespirits.com/image/card_serch/card/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg");
});
test.battleSpirits.output = "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/battleSpiritsList/";
test.battleSpirits.outputImageDir = "output/battleSpirits/";
test.battleSpirits.prods = cljs.core.PersistentVector.fromArray(["62003","62007","62008","62009","62010","62012","62014","62015","62017","62020","62021","62022","62023","62025","62026","62027","62028","62029","62032","62037","62038","62040","62041","62045","62049","62051","62055","62057","62060","62063","62068","62071","62073","62019","62046","62050","62056","62064","62065","62069","62072","62011","62013","62018","62024","62030","62031","62033","62034","62035","62036","62039","62043","62044","62047","62048","62053","62054","62059","62061","62062","62066","62067","62070","62075","62016","62074","62058","62052","62042","62901"], true);
test.battleSpirits.fetchInfo = (function fetchInfo(id,cb){console.log("fetchInfo",id);
return lib.tool.postUrl.call(null,test.battleSpirits.cardInfoUrl,new cljs.core.PersistentArrayMap(null, 2, ["cmdno",(1),"prod",id], null),(function (err,ret){return test.battleSpirits.fs.writeFile((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.battleSpirits.output)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".json"),JSON.stringify(JSON.parse(ret)),(function (err__$1){console.log("write file",id);
if(cljs.core.truth_(err__$1))
{return cb.call(null,err__$1);
} else
{return setTimeout(cljs.core.partial.call(null,cb,null),(3000));
}
}));
}));
});
test.battleSpirits.fetchImage = (function fetchImage(id,cb){console.log("fetchImage",id);
return test.battleSpirits.request.call(null,test.battleSpirits.imageUrl.call(null,id)).pipe(test.battleSpirits.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.battleSpirits.outputImageDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",(function (){console.log("ok for fetchImage",id);
return setTimeout(cb,(3000));
}));
});
test.battleSpirits.fetchAllImage = (function fetchAllImage(){return test.battleSpirits.async.waterfall([(function (cb){return test.battleSpirits.async.map(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__5254_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.battleSpirits.output)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__5254_SHARP_)+".json");
}),test.battleSpirits.prods)),lib.tool.getFile,cb);
}),(function (datas,cb){var alls = cljs.core.reduce.call(null,(function (p1__5257_SHARP_,p2__5258_SHARP_){return cljs.core.concat.call(null,p1__5257_SHARP_,p2__5258_SHARP_);
}),cljs.core.List.EMPTY,cljs.core.map.call(null,(function (p1__5256_SHARP_){return p1__5256_SHARP_.data;
}),cljs.core.map.call(null,(function (p1__5255_SHARP_){return JSON.parse(p1__5255_SHARP_);
}),cljs.core.js__GT_clj.call(null,datas))));console.log("start fetch image length:",cljs.core.count.call(null,alls));
return cb.call(null,null,alls);
}),(function (datas,cb){var ids = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__5259_SHARP_){return p1__5259_SHARP_.info_27;
}),datas));return test.battleSpirits.async.eachSeries(ids,test.battleSpirits.fetchImage,cb.call(null,null));
})],(function (err,rets){return console.log("fetchAllImage done!");
}));
});
test.battleSpirits.fetchAll = (function fetchAll(){test.battleSpirits.async.eachSeries(cljs.core.clj__GT_js.call(null,test.battleSpirits.prods),test.battleSpirits.fetchInfo);
return (function (err){return console.log(err);
});
});
test.battleSpirits.test_base = (function test_base(){return test.battleSpirits.fetchInfo.call(null,(62008),(function (err){return console.log(err);
}));
});
