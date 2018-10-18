// Compiled by ClojureScript 0.0-2268
goog.provide('test.element');
goog.require('cljs.core');
test.element.next_generation = (function next_generation(table,elems){var map__23497 = cljs.core.first.call(null,cljs.core.shuffle.call(null,table));var map__23497__$1 = ((cljs.core.seq_QMARK_.call(null,map__23497))?cljs.core.apply.call(null,cljs.core.hash_map,map__23497):map__23497);var need = cljs.core.get.call(null,map__23497__$1,new cljs.core.Keyword(null,"need","need",-164890326));var result = cljs.core.get.call(null,map__23497__$1,new cljs.core.Keyword(null,"result","result",1415092211));var newelems = cljs.core.flatten.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.map,((function (map__23497,map__23497__$1,need,result){
return (function (){return result.call(null);
});})(map__23497,map__23497__$1,need,result))
,cljs.core.reduce.call(null,((function (map__23497,map__23497__$1,need,result){
return (function (rl,elem){return cljs.core.cons.call(null,cljs.core.filter.call(null,((function (map__23497,map__23497__$1,need,result){
return (function (p1__23495_SHARP_){return cljs.core._EQ_.call(null,p1__23495_SHARP_,elem);
});})(map__23497,map__23497__$1,need,result))
,elems),rl);
});})(map__23497,map__23497__$1,need,result))
,cljs.core.List.EMPTY,need))));return cljs.core.into.call(null,elems,newelems);
});
