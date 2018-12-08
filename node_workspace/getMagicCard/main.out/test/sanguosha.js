// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('test.sanguosha');
goog.require('cljs.core');
goog.require('lib.tool');
test.sanguosha.async = require("async");
test.sanguosha.fs = require("fs");
test.sanguosha.dir = "sgsDoc/html/";
test.sanguosha.output = "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/sgsList.json";
test.sanguosha.parseContent = (function test$sanguosha$parseContent(content){
var vec__4769 = cljs.core.re_find.call(null,/<div class=\"name\">(.*)<\/div>/,content);
var _ = cljs.core.nth.call(null,vec__4769,(0),null);
var na = cljs.core.nth.call(null,vec__4769,(1),null);
var vec__4772 = cljs.core.re_find.call(null,/<td class=\"key\">费用：<\/td>\s+<td class=\"value\">(\d)<\/td>/,content);
var ___$1 = cljs.core.nth.call(null,vec__4772,(0),null);
var cost = cljs.core.nth.call(null,vec__4772,(1),null);
var vec__4775 = cljs.core.re_find.call(null,/<td class=\"key\">武\/体：<\/td>\s+<td class=\"value\">(.*)<\/td>/,content);
var ___$2 = cljs.core.nth.call(null,vec__4775,(0),null);
var power = cljs.core.nth.call(null,vec__4775,(1),null);
var vec__4778 = cljs.core.re_find.call(null,/<td class=\"key\">势力：<\/td>\s+<td class=\"value\">(.*)<\/td>/,content);
var ___$3 = cljs.core.nth.call(null,vec__4778,(0),null);
var color = cljs.core.nth.call(null,vec__4778,(1),null);
var vec__4781 = cljs.core.re_find.call(null,/<td class=\"key\">类别：<\/td>\s+<td class=\"value\" colspan=\"3\">(.*)<\/td>/,content);
var ___$4 = cljs.core.nth.call(null,vec__4781,(0),null);
var type = cljs.core.nth.call(null,vec__4781,(1),null);
var vec__4784 = cljs.core.re_find.call(null,/<td class=\"key\">系列名称：<\/td>\s+<td class=\"value\">(.*)<\/td>/,content);
var ___$5 = cljs.core.nth.call(null,vec__4784,(0),null);
var pkg = cljs.core.nth.call(null,vec__4784,(1),null);
var vec__4787 = cljs.core.re_find.call(null,/<td class=\"key\">卡牌编号：<\/td>\s+<td class=\"value\">(.*)<\/td>/,content);
var ___$6 = cljs.core.nth.call(null,vec__4787,(0),null);
var id = cljs.core.nth.call(null,vec__4787,(1),null);
var vec__4790 = cljs.core.re_find.call(null,/<div class=\"content\">([\s\S]+?)<\/div>/,content);
var ___$7 = cljs.core.nth.call(null,vec__4790,(0),null);
var text = cljs.core.nth.call(null,vec__4790,(1),null);
var vec__4793 = cljs.core.re_find.call(null,/<img src=\"\/upload\/cards\/.+\/(.+).jpg\" class=\"pic\" \/>/,content);
var ___$8 = cljs.core.nth.call(null,vec__4793,(0),null);
var img = cljs.core.nth.call(null,vec__4793,(1),null);
var obj4797 = {"img":img,"id":id,"pkg":pkg,"cost":(cost | (0)),"name":na,"power":power,"text":text,"type":type,"color":color};
return obj4797;
});
test.sanguosha.callback = (function test$sanguosha$callback(cb,err,delayFn){
if(cljs.core.truth_(err)){
return cb.call(null,err);
} else {
return cb.call(null,null,cljs.core.force.call(null,delayFn));
}
});
test.sanguosha.test_base = (function test$sanguosha$test_base(){
var result = [];
return test.sanguosha.fs.readdir(test.sanguosha.dir,((function (result){
return (function (err,files){
return test.sanguosha.async.eachSeries(files,((function (result){
return (function (file,cb){
return lib.tool.getFile.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(test.sanguosha.dir),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),((function (result){
return (function (err__$1,content){
result.push(test.sanguosha.parseContent.call(null,content));

return test.sanguosha.callback.call(null,cb,err__$1,(new cljs.core.Delay(((function (result){
return (function (){
return null;
});})(result))
,null)));
});})(result))
);
});})(result))
,((function (result){
return (function (err__$1){
if(cljs.core.truth_(err__$1)){
return console.log(err__$1);
} else {
return test.sanguosha.fs.writeFile(test.sanguosha.output,JSON.stringify(result,null,"\t"),((function (result){
return (function (err__$2){
return console.log(err__$2);
});})(result))
);
}
});})(result))
);
});})(result))
);
});
