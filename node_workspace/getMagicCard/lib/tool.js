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
lib.tool.rx = require("rx");
lib.tool.getUrl = (function getUrl(url,cb){return lib.tool.request.call(null,url,(function (err,res,body){if(cljs.core.truth_(err))
{return cb.call(null,err);
} else
{return cb.call(null,null,body);
}
}));
});
lib.tool.postUrl = (function postUrl(url,data,cb){return lib.tool.request.post((function (){var obj5152 = {"url":url,"formData":cljs.core.clj__GT_js.call(null,data)};return obj5152;
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
lib.tool.parseDownloadConfig = (function parseDownloadConfig(json){var pred__5160 = cljs.core._EQ_;var expr__5161 = json.type;if(cljs.core.truth_(pred__5160.call(null,"range",expr__5161)))
{var values = cljs.core.js__GT_clj.call(null,json.value);var pattern = json.pattern;var iter__4276__auto__ = ((function (values,pattern,pred__5160,expr__5161){
return (function iter__5163(s__5164){return (new cljs.core.LazySeq(null,((function (values,pattern,pred__5160,expr__5161){
return (function (){var s__5164__$1 = s__5164;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5164__$1);if(temp__4126__auto__)
{var s__5164__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5164__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5164__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5166 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5165 = (0);while(true){
if((i__5165 < size__4275__auto__))
{var v = cljs.core._nth.call(null,c__4274__auto__,i__5165);cljs.core.chunk_append.call(null,b__5166,goog.string.format(pattern,v));
{
var G__5167 = (i__5165 + (1));
i__5165 = G__5167;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5166),iter__5163.call(null,cljs.core.chunk_rest.call(null,s__5164__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5166),null);
}
} else
{var v = cljs.core.first.call(null,s__5164__$2);return cljs.core.cons.call(null,goog.string.format(pattern,v),iter__5163.call(null,cljs.core.rest.call(null,s__5164__$2)));
}
} else
{return null;
}
break;
}
});})(values,pattern,pred__5160,expr__5161))
,null,null));
});})(values,pattern,pred__5160,expr__5161))
;return iter__4276__auto__.call(null,cljs.core.apply.call(null,cljs.core.range,values));
} else
{return cljs.core.PersistentVector.EMPTY;
}
});
lib.tool.parseDownloadConfig2 = (function parseDownloadConfig2(json){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),json.type,new cljs.core.Keyword(null,"data","data",-232669377),(function (){var seqs = json.seq;var seqvs = seqs.values;var option = json.option;return cljs.core.map.call(null,((function (seqs,seqvs,option){
return (function (p1__5168_SHARP_){return JSON.parse(p1__5168_SHARP_);
});})(seqs,seqvs,option))
,(function (){var pred__5172 = cljs.core._EQ_;var expr__5173 = seqs.type;if(cljs.core.truth_(pred__5172.call(null,"ary",expr__5173)))
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,goog.string.format,option),cljs.core.js__GT_clj.call(null,seqvs));
} else
{if(cljs.core.truth_(pred__5172.call(null,"range",expr__5173)))
{return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,goog.string.format,option),cljs.core.range.call(null,(seqvs[(0)]),(seqvs[(1)])));
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
}
})());
})(),new cljs.core.Keyword(null,"path","path",-188191168),json.path], null);
});
