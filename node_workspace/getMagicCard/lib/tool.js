// Compiled by ClojureScript 0.0-2268
goog.provide('lib.tool');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.string');
lib.tool.request = require("request");
lib.tool.fs = require("fs");
lib.tool.async = require("async");
lib.tool.getUrl = (function getUrl(url,cb){return lib.tool.request.call(null,url,(function (err,res,body){if(cljs.core.truth_(err))
{return cb.call(null,err);
} else
{return cb.call(null,null,body);
}
}));
});
lib.tool.postUrl = (function postUrl(url,data,cb){return lib.tool.request.post((function (){var obj5291 = {"url":url,"formData":cljs.core.clj__GT_js.call(null,data)};return obj5291;
})(),(function (err,res,body){if(cljs.core.truth_(err))
{return cb.call(null,err);
} else
{return cb.call(null,null,body);
}
}));
});
lib.tool.getFile = (function getFile(filename,cb){return lib.tool.fs.readFile(filename,"utf8",(function (err,data){if(cljs.core.truth_(err))
{return cb.call(null,err);
} else
{return cb.call(null,null,clojure.string.replace.call(null,data,/\r/,""));
}
}));
});
lib.tool.delayFn = (function delayFn(t,f,cb){return f.call(null,(function (err,data){if(cljs.core.truth_(err))
{return cb.call(null,err);
} else
{return setTimeout((function (){return cb.call(null,null,data);
}),t);
}
}));
});
lib.tool.parseDownloadConfig = (function parseDownloadConfig(json){var pred__5299 = cljs.core._EQ_;var expr__5300 = json.type;if(cljs.core.truth_(pred__5299.call(null,"range",expr__5300)))
{var values = cljs.core.js__GT_clj.call(null,json.value);var pattern = json.pattern;var iter__4276__auto__ = ((function (values,pattern,pred__5299,expr__5300){
return (function iter__5302(s__5303){return (new cljs.core.LazySeq(null,((function (values,pattern,pred__5299,expr__5300){
return (function (){var s__5303__$1 = s__5303;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5303__$1);if(temp__4126__auto__)
{var s__5303__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5303__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5303__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5305 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5304 = (0);while(true){
if((i__5304 < size__4275__auto__))
{var v = cljs.core._nth.call(null,c__4274__auto__,i__5304);cljs.core.chunk_append.call(null,b__5305,goog.string.format(pattern,v));
{
var G__5306 = (i__5304 + (1));
i__5304 = G__5306;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5305),iter__5302.call(null,cljs.core.chunk_rest.call(null,s__5303__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5305),null);
}
} else
{var v = cljs.core.first.call(null,s__5303__$2);return cljs.core.cons.call(null,goog.string.format(pattern,v),iter__5302.call(null,cljs.core.rest.call(null,s__5303__$2)));
}
} else
{return null;
}
break;
}
});})(values,pattern,pred__5299,expr__5300))
,null,null));
});})(values,pattern,pred__5299,expr__5300))
;return iter__4276__auto__.call(null,cljs.core.apply.call(null,cljs.core.range,values));
} else
{return cljs.core.PersistentVector.EMPTY;
}
});
lib.tool.parseDownloadConfig2 = (function parseDownloadConfig2(json){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),json.type,new cljs.core.Keyword(null,"data","data",-232669377),(function (){var seqs = json.seq;var seqvs = seqs.values;var option = json.option;return cljs.core.map.call(null,((function (seqs,seqvs,option){
return (function (p1__5307_SHARP_){return JSON.parse(p1__5307_SHARP_);
});})(seqs,seqvs,option))
,(function (){var pred__5311 = cljs.core._EQ_;var expr__5312 = seqs.type;if(cljs.core.truth_(pred__5311.call(null,"ary",expr__5312)))
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,goog.string.format,option),cljs.core.js__GT_clj.call(null,seqvs));
} else
{if(cljs.core.truth_(pred__5311.call(null,"range",expr__5312)))
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,goog.string.format,option),cljs.core.range.call(null,(seqvs[(0)]),(seqvs[(1)])));
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
}
})());
})(),new cljs.core.Keyword(null,"path","path",-188191168),json.path], null);
});
