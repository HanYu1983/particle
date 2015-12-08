// Compiled by ClojureScript 0.0-2268
goog.provide('test.sanguosha');
goog.require('cljs.core');
goog.require('lib.tool');
goog.require('lib.tool');
test.sanguosha.async = require("async");
test.sanguosha.fs = require("fs");
test.sanguosha.dir = "sgsDoc/html/";
test.sanguosha.output = "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/sgsList.json";
test.sanguosha.parseContent = (function parseContent(content){var vec__5588 = cljs.core.re_find.call(null,/<div class=\"name\">(.*)<\/div>/,content);var _ = cljs.core.nth.call(null,vec__5588,(0),null);var na = cljs.core.nth.call(null,vec__5588,(1),null);var vec__5589 = cljs.core.re_find.call(null,/<td class=\"key\">费用：<\/td>\s+<td class=\"value\">(\d)<\/td>/,content);var ___$1 = cljs.core.nth.call(null,vec__5589,(0),null);var cost = cljs.core.nth.call(null,vec__5589,(1),null);var vec__5590 = cljs.core.re_find.call(null,/<td class=\"key\">武\/体：<\/td>\s+<td class=\"value\">(.*)<\/td>/,content);var ___$2 = cljs.core.nth.call(null,vec__5590,(0),null);var power = cljs.core.nth.call(null,vec__5590,(1),null);var vec__5591 = cljs.core.re_find.call(null,/<td class=\"key\">势力：<\/td>\s+<td class=\"value\">(.*)<\/td>/,content);var ___$3 = cljs.core.nth.call(null,vec__5591,(0),null);var color = cljs.core.nth.call(null,vec__5591,(1),null);var vec__5592 = cljs.core.re_find.call(null,/<td class=\"key\">类别：<\/td>\s+<td class=\"value\" colspan=\"3\">(.*)<\/td>/,content);var ___$4 = cljs.core.nth.call(null,vec__5592,(0),null);var type = cljs.core.nth.call(null,vec__5592,(1),null);var vec__5593 = cljs.core.re_find.call(null,/<td class=\"key\">系列名称：<\/td>\s+<td class=\"value\">(.*)<\/td>/,content);var ___$5 = cljs.core.nth.call(null,vec__5593,(0),null);var pkg = cljs.core.nth.call(null,vec__5593,(1),null);var vec__5594 = cljs.core.re_find.call(null,/<td class=\"key\">卡牌编号：<\/td>\s+<td class=\"value\">(.*)<\/td>/,content);var ___$6 = cljs.core.nth.call(null,vec__5594,(0),null);var id = cljs.core.nth.call(null,vec__5594,(1),null);var vec__5595 = cljs.core.re_find.call(null,/<div class=\"content\">([\s\S]+?)<\/div>/,content);var ___$7 = cljs.core.nth.call(null,vec__5595,(0),null);var text = cljs.core.nth.call(null,vec__5595,(1),null);var vec__5596 = cljs.core.re_find.call(null,/<img src=\"\/upload\/cards\/.+\/(.+).jpg\" class=\"pic\" \/>/,content);var ___$8 = cljs.core.nth.call(null,vec__5596,(0),null);var img = cljs.core.nth.call(null,vec__5596,(1),null);var obj5598 = {"img":img,"id":id,"pkg":pkg,"cost":(cost | (0)),"name":na,"power":power,"text":text,"type":type,"color":color};return obj5598;
});
test.sanguosha.callback = (function callback(cb,err,delayFn){if(cljs.core.truth_(err))
{return cb.call(null,err);
} else
{return cb.call(null,null,cljs.core.force.call(null,delayFn));
}
});
test.sanguosha.test_base = (function test_base(){var result = [];return test.sanguosha.fs.readdir(test.sanguosha.dir,((function (result){
return (function (err,files){return test.sanguosha.async.eachSeries(files,((function (result){
return (function (file,cb){return lib.tool.getFile.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.sanguosha.dir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)),((function (result){
return (function (err__$1,content){result.push(test.sanguosha.parseContent.call(null,content));
return test.sanguosha.callback.call(null,cb,err__$1,(new cljs.core.Delay(((function (result){
return (function (){return null;
});})(result))
,null)));
});})(result))
);
});})(result))
,((function (result){
return (function (err__$1){if(cljs.core.truth_(err__$1))
{return console.log(err__$1);
} else
{return test.sanguosha.fs.writeFile(test.sanguosha.output,JSON.stringify(result,null,"\t"),((function (result){
return (function (err__$2){return console.log(err__$2);
});})(result))
);
}
});})(result))
);
});})(result))
);
});
