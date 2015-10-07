// Compiled by ClojureScript 0.0-2268
goog.provide('test.element');
goog.require('cljs.core');
test.element.next_generation = (function next_generation(table,elems){var map__15817 = cljs.core.first.call(null,cljs.core.shuffle.call(null,table));var map__15817__$1 = ((cljs.core.seq_QMARK_.call(null,map__15817))?cljs.core.apply.call(null,cljs.core.hash_map,map__15817):map__15817);var need = cljs.core.get.call(null,map__15817__$1,new cljs.core.Keyword(null,"need","need",-164890326));var result = cljs.core.get.call(null,map__15817__$1,new cljs.core.Keyword(null,"result","result",1415092211));var newelems = cljs.core.flatten.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.map,((function (map__15817,map__15817__$1,need,result){
return (function (){return result.call(null);
});})(map__15817,map__15817__$1,need,result))
,cljs.core.reduce.call(null,((function (map__15817,map__15817__$1,need,result){
return (function (rl,elem){return cljs.core.cons.call(null,cljs.core.filter.call(null,((function (map__15817,map__15817__$1,need,result){
return (function (p1__15815_SHARP_){return cljs.core._EQ_.call(null,p1__15815_SHARP_,elem);
});})(map__15817,map__15817__$1,need,result))
,elems),rl);
});})(map__15817,map__15817__$1,need,result))
,cljs.core.List.EMPTY,need))));return cljs.core.into.call(null,elems,newelems);
});
