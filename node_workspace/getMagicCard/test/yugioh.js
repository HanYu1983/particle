// Compiled by ClojureScript 0.0-2268
goog.provide('test.yugioh');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
test.yugioh.async = require("async");
test.yugioh.fs = require("fs");
test.yugioh.SqliteDB = require("sqlite3").verbose().Database;
test.yugioh.config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),"yugiohDoc/en/cards.cdb",new cljs.core.Keyword(null,"strings","strings",-2055406807),"yugiohDoc/en/strings.conf",new cljs.core.Keyword(null,"output","output",-1105869043),"/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/yugiohListEn.json"], null),new cljs.core.Keyword(null,"ch","ch",-554717905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),"yugiohDoc/ch/cards.cdb",new cljs.core.Keyword(null,"strings","strings",-2055406807),"yugiohDoc/ch/strings.conf",new cljs.core.Keyword(null,"output","output",-1105869043),"/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/yugiohListCh.json"], null),new cljs.core.Keyword(null,"tf","tf",-1440918707),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),"yugiohDoc/cards-tf.cdb",new cljs.core.Keyword(null,"strings","strings",-2055406807),"yugiohDoc/en/strings.conf",new cljs.core.Keyword(null,"output","output",-1105869043),"/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/yugiohListTf.json"], null),new cljs.core.Keyword(null,"anime","anime",-895981887),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),"yugiohDoc/en/anime.cdb",new cljs.core.Keyword(null,"strings","strings",-2055406807),"yugiohDoc/en/strings.conf",new cljs.core.Keyword(null,"output","output",-1105869043),"/Users/hanyu/Documents/big_workspace/particle/goapp/src/common/txt/yugiohListAnime.json"], null)], null);
test.yugioh.parseStrings = (function parseStrings(stringsPath,cb){return test.yugioh.fs.readFile(stringsPath,"utf8",(function (err,data){var parseRow = (function (row){var vec__5209 = cljs.core.js__GT_clj.call(null,row.split(" "));var _ = cljs.core.nth.call(null,vec__5209,(0),null);var value = cljs.core.nth.call(null,vec__5209,(1),null);var text = cljs.core.nth.call(null,vec__5209,(2),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,text], null);
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
test.yugioh.parseCDB = (function parseCDB(db,cb){return db.serialize((function (){var output = [];return db.each("select count(*) as cnt from datas,texts where datas.id=texts.id",((function (output){
return (function (err,row){var total = row.cnt;var all = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);return db.each("select * from datas,texts where datas.id=texts.id",((function (total,all,output){
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
test.yugioh.parseFile = (function parseFile(lan){return test.yugioh.async.parallel([cljs.core.partial.call(null,test.yugioh.parseStrings,cljs.core.get_in.call(null,test.yugioh.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lan,new cljs.core.Keyword(null,"strings","strings",-2055406807)], null))),cljs.core.partial.call(null,test.yugioh.parseCDB,(new test.yugioh.SqliteDB(cljs.core.get_in.call(null,test.yugioh.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lan,new cljs.core.Keyword(null,"db","db",993250759)], null)))))],(function (err,rets){var strs = (rets[(0)]);var cards = (rets[(1)]);var formatObj = ((function (strs,cards){
return (function (obj){obj.id = obj.id.toString();
obj.lscale = ((obj.level >> (24)) & (255));
obj.rscale = ((obj.level >> (16)) & (255));
obj.level = (obj.level & (255));
obj.attribute = cljs.core.clj__GT_js.call(null,test.yugioh.formatAttribute.call(null,strs,obj.attribute)).join("|");
obj.type = cljs.core.clj__GT_js.call(null,test.yugioh.formatType.call(null,strs,obj.type)).join("|");
obj.race = cljs.core.clj__GT_js.call(null,test.yugioh.formatRace.call(null,strs,obj.race)).join("|");
return obj;
});})(strs,cards))
;var formatCards = cljs.core.map.call(null,formatObj,cards);return test.yugioh.fs.writeFile(cljs.core.get_in.call(null,test.yugioh.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lan,new cljs.core.Keyword(null,"output","output",-1105869043)], null)),JSON.stringify(cljs.core.clj__GT_js.call(null,formatCards),null,"\t"),((function (strs,cards,formatObj,formatCards){
return (function (err__$1){return console.log("write file ",cljs.core.get_in.call(null,test.yugioh.config,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lan,new cljs.core.Keyword(null,"output","output",-1105869043)], null)),"!");
});})(strs,cards,formatObj,formatCards))
);
}));
});
