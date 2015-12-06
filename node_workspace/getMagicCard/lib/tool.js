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
lib.tool.postUrl = (function postUrl(url,data,cb){return lib.tool.request.post((function (){var obj5343 = {"url":url,"formData":cljs.core.clj__GT_js.call(null,data)};return obj5343;
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
lib.tool.parseDownloadConfig = (function parseDownloadConfig(json){var pred__5351 = cljs.core._EQ_;var expr__5352 = json.type;if(cljs.core.truth_(pred__5351.call(null,"range",expr__5352)))
{var values = cljs.core.js__GT_clj.call(null,json.value);var pattern = json.pattern;var iter__4276__auto__ = ((function (values,pattern,pred__5351,expr__5352){
return (function iter__5354(s__5355){return (new cljs.core.LazySeq(null,((function (values,pattern,pred__5351,expr__5352){
return (function (){var s__5355__$1 = s__5355;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5355__$1);if(temp__4126__auto__)
{var s__5355__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5355__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5355__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5357 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5356 = (0);while(true){
if((i__5356 < size__4275__auto__))
{var v = cljs.core._nth.call(null,c__4274__auto__,i__5356);cljs.core.chunk_append.call(null,b__5357,goog.string.format(pattern,v));
{
var G__5358 = (i__5356 + (1));
i__5356 = G__5358;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5357),iter__5354.call(null,cljs.core.chunk_rest.call(null,s__5355__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5357),null);
}
} else
{var v = cljs.core.first.call(null,s__5355__$2);return cljs.core.cons.call(null,goog.string.format(pattern,v),iter__5354.call(null,cljs.core.rest.call(null,s__5355__$2)));
}
} else
{return null;
}
break;
}
});})(values,pattern,pred__5351,expr__5352))
,null,null));
});})(values,pattern,pred__5351,expr__5352))
;return iter__4276__auto__.call(null,cljs.core.apply.call(null,cljs.core.range,values));
} else
{return cljs.core.PersistentVector.EMPTY;
}
});
