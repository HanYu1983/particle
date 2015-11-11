// Compiled by ClojureScript 0.0-2268
goog.provide('test.yugioh');
goog.require('cljs.core');
test.yugioh.fs = require("fs");
test.yugioh.SqliteDB = require("sqlite3").verbose().Database;
test.yugioh.db = (new test.yugioh.SqliteDB("yugiohDoc/cards.cdb"));
test.yugioh.outputFile = "/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/cardPackage/yugioh/cardlist.json";
test.yugioh.parseCDB = (function parseCDB(){return test.yugioh.db.serialize((function (){var output = [];return test.yugioh.db.each("select count(*) as cnt from datas,texts where datas.id=texts.id",((function (output){
return (function (err,row){var total = row.cnt;var all = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);return test.yugioh.db.each("select * from datas,texts where datas.id=texts.id",((function (total,all,output){
return (function (err__$1,row__$1){cljs.core.swap_BANG_.call(null,all,cljs.core.conj,row__$1);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,all)),total))
{return test.yugioh.fs.writeFile(test.yugioh.outputFile,JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,all))),((function (total,all,output){
return (function (err__$2){return console.log("write file ",test.yugioh.outputFile,"!");
});})(total,all,output))
);
} else
{return null;
}
});})(total,all,output))
);
});})(output))
);
}));
});
