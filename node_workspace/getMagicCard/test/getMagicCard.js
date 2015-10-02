// Compiled by ClojureScript 0.0-2268
goog.provide('test.getMagicCard');
goog.require('cljs.core');
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
test.getMagicCard.getUrl = (function getUrl(url,cb){return test.getMagicCard.request.call(null,url,(function (err,res,body){if(cljs.core.truth_(err))
{return cb.call(null,err);
} else
{return cb.call(null,null,body);
}
}));
});
test.getMagicCard.parseImageSrc = (function parseImageSrc(content){var tags = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<td valign=\"TOP\" align=\"center\" width=\"400\">.+\\s+<img src\\s*=\\s*\"(.+?)\" alt=\"(.+?)\"")),content);return cljs.core.first.call(null,(function (){var iter__4276__auto__ = ((function (tags){
return (function iter__17904(s__17905){return (new cljs.core.LazySeq(null,((function (tags){
return (function (){var s__17905__$1 = s__17905;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17905__$1);if(temp__4126__auto__)
{var s__17905__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17905__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__17905__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__17907 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__17906 = (0);while(true){
if((i__17906 < size__4275__auto__))
{var vec__17910 = cljs.core._nth.call(null,c__4274__auto__,i__17906);var _ = cljs.core.nth.call(null,vec__17910,(0),null);var src = cljs.core.nth.call(null,vec__17910,(1),null);var title = cljs.core.nth.call(null,vec__17910,(2),null);cljs.core.chunk_append.call(null,b__17907,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,src], null));
{
var G__17912 = (i__17906 + (1));
i__17906 = G__17912;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17907),iter__17904.call(null,cljs.core.chunk_rest.call(null,s__17905__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17907),null);
}
} else
{var vec__17911 = cljs.core.first.call(null,s__17905__$2);var _ = cljs.core.nth.call(null,vec__17911,(0),null);var src = cljs.core.nth.call(null,vec__17911,(1),null);var title = cljs.core.nth.call(null,vec__17911,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,src], null),iter__17904.call(null,cljs.core.rest.call(null,s__17905__$2)));
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
test.getMagicCard.getKeyAndImageSrc = (function getKeyAndImageSrc(id,cb){return test.getMagicCard.getUrl.call(null,test.getMagicCard.cardPath.call(null,id),(function (err,data){if(cljs.core.truth_(err))
{return cb.call(null,err);
} else
{var vec__17914 = test.getMagicCard.parseImageSrc.call(null,data);var _ = cljs.core.nth.call(null,vec__17914,(0),null);var src = cljs.core.nth.call(null,vec__17914,(1),null);var ret = vec__17914;return cb.call(null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,src], null));
}
}));
});
test.getMagicCard.appendTo = (function appendTo(a,d,id,cb){return test.getMagicCard.getKeyAndImageSrc.call(null,id,(function (err,data){if(cljs.core.truth_(err))
{return cb.call(null,err);
} else
{var vec__17916 = data;var id__$1 = cljs.core.nth.call(null,vec__17916,(0),null);var src = cljs.core.nth.call(null,vec__17916,(1),null);cljs.core.println.call(null,data);
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