// Compiled by ClojureScript 0.0-2268
goog.provide('test.yugioh');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
test.yugioh.async = require("async");
test.yugioh.fs = require("fs");
test.yugioh.SqliteDB = require("sqlite3").verbose().Database;
test.yugioh.db = (new test.yugioh.SqliteDB("yugiohDoc/cards_jp.cdb"));
test.yugioh.stringsPath = "yugiohDoc/strings_jp.conf";
test.yugioh.outputFile = "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/yugiohListJp.json";
test.yugioh.parseStrings = (function parseStrings(cb){return test.yugioh.fs.readFile(test.yugioh.stringsPath,"utf8",(function (err,data){var parseRow = (function (row){var vec__5061 = cljs.core.js__GT_clj.call(null,row.split(" "));var _ = cljs.core.nth.call(null,vec__5061,(0),null);var value = cljs.core.nth.call(null,vec__5061,(1),null);var text = cljs.core.nth.call(null,vec__5061,(2),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,text], null);
});var rows = data.split("\n");var formated = cljs.core.reduce.call(null,((function (parseRow,rows){
return (function (all,row){if((row.lastIndexOf("#",(0)) === (0)))
{return all;
} else
{return cljs.core.conj.call(null,all,parseRow.call(null,row));
}
});})(parseRow,rows))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.js__GT_clj.call(null,rows));return cb.call(null,null,formated);
}));
});
test.yugioh.formatTemplate = (function formatTemplate(i,cnt,strs,attr){return cljs.core.reduce.call(null,(function (all,idx){var mask = ((1) << idx);if(((mask & attr) > (0)))
{return cljs.core.conj.call(null,all,cljs.core.get.call(null,strs,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((i + idx)))));
} else
{return all;
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.range.call(null,(0),cnt));
});
test.yugioh.formatAttribute = cljs.core.partial.call(null,test.yugioh.formatTemplate,(1010),(7));
test.yugioh.formatRace = cljs.core.partial.call(null,test.yugioh.formatTemplate,(1020),(30));
test.yugioh.formatType = cljs.core.partial.call(null,test.yugioh.formatTemplate,(1050),(30));
test.yugioh.parseCDB = (function parseCDB(cb){return test.yugioh.db.serialize((function (){var output = [];return test.yugioh.db.each("select count(*) as cnt from datas,texts where datas.id=texts.id",((function (output){
return (function (err,row){var total = row.cnt;var all = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);return test.yugioh.db.each("select * from datas,texts where datas.id=texts.id",((function (total,all,output){
return (function (err__$1,row__$1){cljs.core.swap_BANG_.call(null,all,cljs.core.conj,row__$1);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,all)),total))
{cb.call(null,null,cljs.core.deref.call(null,all));
return null;
} else
{return null;
}
});})(total,all,output))
);
});})(output))
);
}));
});
test.yugioh.parseFile = (function parseFile(){return test.yugioh.async.parallel([test.yugioh.parseStrings,test.yugioh.parseCDB],(function (err,rets){var strs = (rets[(0)]);var cards = (rets[(1)]);var formatObj = ((function (strs,cards){
return (function (obj){obj.attribute = cljs.core.clj__GT_js.call(null,test.yugioh.formatAttribute.call(null,strs,obj.attribute));
obj.type = cljs.core.clj__GT_js.call(null,test.yugioh.formatType.call(null,strs,obj.type));
obj.race = cljs.core.clj__GT_js.call(null,test.yugioh.formatRace.call(null,strs,obj.race));
return obj;
});})(strs,cards))
;var formatCards = cljs.core.map.call(null,formatObj,cards);return test.yugioh.fs.writeFile(test.yugioh.outputFile,JSON.stringify(cljs.core.clj__GT_js.call(null,formatCards)),((function (strs,cards,formatObj,formatCards){
return (function (err__$1){return console.log("write file ",test.yugioh.outputFile,"!");
});})(strs,cards,formatObj,formatCards))
);
}));
});
