// Compiled by ClojureScript 0.0-2268
goog.provide('test.gundamWarN');
goog.require('cljs.core');
goog.require('lib.tool');
goog.require('lib.tool');
test.gundamWarN.fs = require("fs");
test.gundamWarN.async = require("async");
test.gundamWarN.cardInfoUrl = "http://www.carddass.com/cdmasters/nexa/cardlist/controller/request.php";
test.gundamWarN.imageUrl = (function imageUrl(prod,name){return ("http://www.carddass.com/cdmasters/nexa/images/cardlist/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prod)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)+".png");
});
test.gundamWarN.clusadeUrl = "http://www.carddass.com/crusade/cardlist/request.php";
test.gundamWarN.prods = new cljs.core.PersistentVector(null, 31, 5, cljs.core.PersistentVector.EMPTY_NODE, ["179030","179029","179028","179027","179026","179025","179024","179023","179022","179021","179020","179019","179018","179017","179016","179015","179014","179013","179012","179011","179010","179009","179008","179007","179006","179005","179004","179003","179002","179001","179901"], null);
test.gundamWarN.fetchInfo = (function fetchInfo(id,cb){return lib.tool.postUrl.call(null,test.gundamWarN.cardInfoUrl,new cljs.core.PersistentArrayMap(null, 2, ["cmdno",(1),"prod",id], null),(function (err,ret){return test.gundamWarN.fs.writeFile(("gundamWarN"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".json"),JSON.stringify(JSON.parse(ret)),(function (err__$1){return cb.call(null,err__$1);
}));
}));
});
test.gundamWarN.test_base = (function test_base(){return test.gundamWarN.fetchInfo.call(null,"179030",(function (err){return console.log(err);
}));
});
