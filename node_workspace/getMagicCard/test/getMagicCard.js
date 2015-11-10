// Compiled by ClojureScript 0.0-2268
goog.provide('test.getMagicCard');
goog.require('cljs.core');
goog.require('lib.tool');
goog.require('lib.tool');
test.getMagicCard.async = require("async");
test.getMagicCard.request = require("request");
test.getMagicCard.fs = require("fs");
test.getMagicCard.cardPath = (function cardPath(id){return ("http://\u684C\u904A.net/mtg/singles_market/card.php?num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id));
});
test.getMagicCard.getFile = (function getFile(filename,cb){return test.getMagicCard.fs.readFile(filename,"utf8",(function (err,data){if(cljs.core.truth_(err))
{return test.getMagicCard.fs.writeFile(filename,"{}",(function (err__$1){return cb.call(null,err__$1,new cljs.core.PersistentArrayMap(null, 1, ["images",cljs.core.PersistentArrayMap.EMPTY], null));
}));
} else
{return cb.call(null,null,cljs.core.js__GT_clj.call(null,JSON.parse(data)));
}
}));
});
test.getMagicCard.parseImageSrc = (function parseImageSrc(content){var tags = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<td valign=\"TOP\" align=\"center\" width=\"400\">.+\\s+<img src\\s*=\\s*\"(.+?)\" alt=\"(.+?)\"")),content);return cljs.core.first.call(null,(function (){var iter__4276__auto__ = ((function (tags){
return (function iter__5366(s__5367){return (new cljs.core.LazySeq(null,((function (tags){
return (function (){var s__5367__$1 = s__5367;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5367__$1);if(temp__4126__auto__)
{var s__5367__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5367__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5367__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5369 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5368 = (0);while(true){
if((i__5368 < size__4275__auto__))
{var vec__5372 = cljs.core._nth.call(null,c__4274__auto__,i__5368);var _ = cljs.core.nth.call(null,vec__5372,(0),null);var src = cljs.core.nth.call(null,vec__5372,(1),null);var title = cljs.core.nth.call(null,vec__5372,(2),null);cljs.core.chunk_append.call(null,b__5369,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,src], null));
{
var G__5374 = (i__5368 + (1));
i__5368 = G__5374;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5369),iter__5366.call(null,cljs.core.chunk_rest.call(null,s__5367__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5369),null);
}
} else
{var vec__5373 = cljs.core.first.call(null,s__5367__$2);var _ = cljs.core.nth.call(null,vec__5373,(0),null);var src = cljs.core.nth.call(null,vec__5373,(1),null);var title = cljs.core.nth.call(null,vec__5373,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,src], null),iter__5366.call(null,cljs.core.rest.call(null,s__5367__$2)));
}
} else
{return null;
}
break;
}
});})(tags))
,null,null));
});})(tags))
;return iter__4276__auto__.call(null,tags);
})());
});
test.getMagicCard.getKeyAndImageSrc = (function getKeyAndImageSrc(id,cb){return lib.tool.getUrl.call(null,test.getMagicCard.cardPath.call(null,id),(function (err,data){if(cljs.core.truth_(err))
{return cb.call(null,err);
} else
{var vec__5376 = test.getMagicCard.parseImageSrc.call(null,data);var _ = cljs.core.nth.call(null,vec__5376,(0),null);var src = cljs.core.nth.call(null,vec__5376,(1),null);var ret = vec__5376;return cb.call(null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));
}
}));
});
test.getMagicCard.appendTo = (function appendTo(a,d,id,cb){return test.getMagicCard.getKeyAndImageSrc.call(null,id,(function (err,data){if(cljs.core.truth_(err))
{return cb.call(null,err);
} else
{var vec__5378 = data;var id__$1 = cljs.core.nth.call(null,vec__5378,(0),null);var src = cljs.core.nth.call(null,vec__5378,(1),null);cljs.core.println.call(null,data);
cljs.core.reset_BANG_.call(null,a,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,a),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["images",id__$1], null),src));
return setTimeout(cb,d);
}
}));
});
test.getMagicCard.main = (function main(start,cnt,delay){test.getMagicCard.getFile.call(null,"magic.json",(function (err,data){if(cljs.core.truth_(err))
{return cljs.core.println.call(null,err);
} else
{var da = cljs.core.atom.call(null,data);return test.getMagicCard.async.eachSeries(cljs.core.clj__GT_js.call(null,cljs.core.range.call(null,start,(start + cnt))),cljs.core.partial.call(null,test.getMagicCard.appendTo,da,delay),((function (da){
return (function (err__$1){cljs.core.println.call(null,err__$1);
return test.getMagicCard.fs.writeFile("magic.json",JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,da))),((function (da){
return (function (err__$2){if(cljs.core.truth_(err__$2))
{return cljs.core.println.call(null,err__$2);
} else
{return cljs.core.println.call(null,"ok!");
}
});})(da))
);
});})(da))
);
}
}));
return null;
});
