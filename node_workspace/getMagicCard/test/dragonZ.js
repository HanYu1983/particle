// Compiled by ClojureScript 0.0-2268
goog.provide('test.dragonZ');
goog.require('cljs.core');
goog.require('lib.tool');
goog.require('lib.tool');
test.dragonZ.request = require("request");
test.dragonZ.async = require("async");
test.dragonZ.fs = require("fs");
test.dragonZ.outputImageDir = "output/dragonZ/";
test.dragonZ.output = "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/dragonZList.json";
test.dragonZ.imageUrl = (function imageUrl(id){return ("http://www.dbztcg.com/Repository/Checklist/Images/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg");
});
test.dragonZ.regex_img = cljs.core.re_pattern.call(null,("Repository\\/Checklist\\/Images\\/.+\\.jpg"));
test.dragonZ.regex_g = cljs.core.re_pattern.call(null,("(<tr id=\"sticker-\\w+\"[\\s\\S]+?<\\/tr>)"));
test.dragonZ.regex_subg = cljs.core.re_pattern.call(null,("<td>([\\s\\S]*?)<\\/td>"));
test.dragonZ.parseGroup = (function parseGroup(group){return cljs.core.dissoc.call(null,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["id","imgInfo","name","type","rarity","descrition","edition"], null),cljs.core.flatten.call(null,cljs.core.map.call(null,cljs.core.rest,cljs.core.re_seq.call(null,test.dragonZ.regex_subg,group)))),"imgInfo");
});
test.dragonZ.parsePage = (function parsePage(content){var ret = cljs.core.map.call(null,cljs.core.comp.call(null,test.dragonZ.parseGroup,cljs.core.second),cljs.core.re_seq.call(null,test.dragonZ.regex_g,content));return ret;
});
test.dragonZ.fetchImage = (function fetchImage(id,cb){console.log(("fetchImage"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"));
return test.dragonZ.request.call(null,test.dragonZ.imageUrl.call(null,id)).pipe(test.dragonZ.fs.createWriteStream((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.dragonZ.outputImageDir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+".jpg"))).on("close",(function (){console.log("ok for fetchImage",id);
return setTimeout(cb,(3000));
}));
});
test.dragonZ.getJson = (function getJson(cb){return lib.tool.getFile.call(null,"dragonZDoc/dragonballZList.html",(function (err,data){if(cljs.core.truth_(err))
{return cb.call(null,err);
} else
{return cb.call(null,null,test.dragonZ.parsePage.call(null,data));
}
}));
});
test.dragonZ.fetchAllImage = (function fetchAllImage(){return test.dragonZ.async.waterfall([test.dragonZ.getJson,(function (datas,cb){var ids = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__5165_SHARP_){return cljs.core.get.call(null,p1__5165_SHARP_,"id");
}),datas));return test.dragonZ.async.eachSeries(ids,test.dragonZ.fetchImage,cljs.core.partial.call(null,cb,null));
})],(function (err,rets){return console.log("fetchAllImage done!");
}));
});
test.dragonZ.makeJson = (function makeJson(){return test.dragonZ.async.waterfall([test.dragonZ.getJson,(function (datas,cb){return test.dragonZ.fs.writeFile(test.dragonZ.output,JSON.stringify(cljs.core.clj__GT_js.call(null,datas)),(function (err){return cb.call(null,err);
}));
})],(function (err){return console.log("ok!");
}));
});
test.dragonZ.test_base = (function test_base(){return lib.tool.getFile.call(null,"dragonZDoc/dragonballZList.html",(function (err,data){var formated = test.dragonZ.parsePage.call(null,data);return console.log(cljs.core.clj__GT_js.call(null,formated));
}));
});