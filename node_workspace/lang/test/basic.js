// Compiled by ClojureScript 0.0-2268
goog.provide('test.basic');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('app.tool');
goog.require('app.tool');
test.basic.learnWord = (function learnWord(tokens,s){return cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (t){var cnt = (s.split(cljs.core.re_pattern.call(null,t)).length - (1));if((cnt > (1)))
{return new cljs.core.PersistentArrayMap.fromArray([t,cnt], true, false);
} else
{return null;
}
}),cljs.core.flatten.call(null,(function (){var iter__4276__auto__ = (function iter__5569(s__5570){return (new cljs.core.LazySeq(null,(function (){var s__5570__$1 = s__5570;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5570__$1);if(temp__4126__auto__)
{var s__5570__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5570__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__5570__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__5572 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__5571 = (0);while(true){
if((i__5571 < size__4275__auto__))
{var token = cljs.core._nth.call(null,c__4274__auto__,i__5571);cljs.core.chunk_append.call(null,b__5572,cljs.core.concat.call(null,cljs.core.map.call(null,((function (i__5571,token,c__4274__auto__,size__4275__auto__,b__5572,s__5570__$2,temp__4126__auto__){
return (function (p1__5564_SHARP_){return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.partition.call(null,p1__5564_SHARP_,(1),token));
});})(i__5571,token,c__4274__auto__,size__4275__auto__,b__5572,s__5570__$2,temp__4126__auto__))
,cljs.core.range.call(null,(2),cljs.core.count.call(null,token)))));
{
var G__5573 = (i__5571 + (1));
i__5571 = G__5573;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5572),iter__5569.call(null,cljs.core.chunk_rest.call(null,s__5570__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5572),null);
}
} else
{var token = cljs.core.first.call(null,s__5570__$2);return cljs.core.cons.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (token,s__5570__$2,temp__4126__auto__){
return (function (p1__5564_SHARP_){return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.str),cljs.core.partition.call(null,p1__5564_SHARP_,(1),token));
});})(token,s__5570__$2,temp__4126__auto__))
,cljs.core.range.call(null,(2),cljs.core.count.call(null,token)))),iter__5569.call(null,cljs.core.rest.call(null,s__5570__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4276__auto__.call(null,tokens);
})())));
});
describe("\u57FA\u672C\u529F\u80FD",(function (){it("\u6536\u96C6\u8A5E",(function (done){var s_5574 = "\u6709\u4E00\u6B21\uFF0C\u5317\u98A8\u548C\u592A\u967D\u6B63\u5728\u722D\u8AD6\u8AB0\u6BD4\u8F03\u6709\u672C\u4E8B\u3002\u4ED6\u5011\u6B63\u597D\u770B\u5230\u6709\u500B\u4EBA\u8D70\u904E\uFF0C\u90A3\u500B\u4EBA\u7A7F\u8457\u4E00\u4EF6\u6597\u7BF7\u3002\u4ED6\u5011\u5C31\u8AAA\u4E86\uFF0C\u8AB0\u53EF\u4EE5\u8B93\u90A3\u500B\u4EBA\u812B\u6389\u90A3\u4EF6\u6597\u7BF7\uFF0C\u5C31\u7B97\u8AB0\u6BD4\u8F03\u6709\u672C\u4E8B\u3002\u65BC\u662F\uFF0C\u5317\u98A8\u5C31\u62DA\u547D\u5730\u5439\u3002\u600E\u77E5\uFF0C\u4ED6\u5439\u5F97\u8D8A\u53B2\u5BB3\uFF0C\u90A3\u500B\u4EBA\u5C31\u8D8A\u662F\u7528\u6597\u7BF7\u5305\u7DCA\u81EA\u5DF1\u3002\u6700\u5F8C\uFF0C\u5317\u98A8\u6C92\u8FA6\u6CD5\uFF0C\u53EA\u597D\u653E\u68C4\u3002\u63A5\u8457\uFF0C\u592A\u967D\u51FA\u4F86\u66EC\u4E86\u4E00\u4E0B\uFF0C\u90A3\u500B\u4EBA\u5C31\u7ACB\u523B\u628A\u6597\u7BF7\u812B\u6389\u4E86\u3002\u65BC\u662F\uFF0C\u5317\u98A8\u53EA\u597D\u8A8D\u8F38\u4E86\u3002";var tokens_5575 = clojure.string.split.call(null,s_5574,/[，,。.]/);var words_5576 = test.basic.learnWord.call(null,tokens_5575,s_5574);var test_token_5577 = cljs.core.second.call(null,tokens_5575);cljs.core.println.call(null,words_5576);
cljs.core.println.call(null,test_token_5577);
return done.call(null);
}));
it("test3",(function (done){return done.call(null);
}));
return null;
}));
