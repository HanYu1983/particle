// Compiled by ClojureScript 0.0-2268
goog.provide('gl.mesh');
goog.require('cljs.core');
gl.mesh.create = (function create(gl__$1,p__21627){var map__21631 = p__21627;var map__21631__$1 = ((cljs.core.seq_QMARK_.call(null,map__21631))?cljs.core.apply.call(null,cljs.core.hash_map,map__21631):map__21631);var option = map__21631__$1;var drawType = cljs.core.get.call(null,map__21631__$1,new cljs.core.Keyword(null,"drawType","drawType",-993017931));var size = cljs.core.get.call(null,map__21631__$1,new cljs.core.Keyword(null,"size","size",1098693007));var va = cljs.core.get.call(null,map__21631__$1,new cljs.core.Keyword(null,"vertex","vertex",1562146351));var ta = cljs.core.get.call(null,map__21631__$1,new cljs.core.Keyword(null,"texture","texture",-266291651));var ca = cljs.core.get.call(null,map__21631__$1,new cljs.core.Keyword(null,"color","color",1011675173));var ia = cljs.core.get.call(null,map__21631__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var na = cljs.core.get.call(null,map__21631__$1,new cljs.core.Keyword(null,"normal","normal",-1519123858));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"drawType","drawType",-993017931),drawType,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"arrays","arrays",1113446498),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"vertex","vertex",1562146351),va,new cljs.core.Keyword(null,"texture","texture",-266291651),ta,new cljs.core.Keyword(null,"color","color",1011675173),ca,new cljs.core.Keyword(null,"index","index",-1531685915),ia,new cljs.core.Keyword(null,"normal","normal",-1519123858),na], null),new cljs.core.Keyword(null,"buffers","buffers",471409492),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__21631,map__21631__$1,option,drawType,size,va,ta,ca,ia,na){
return (function (p__21632){var vec__21633 = p__21632;var k = cljs.core.nth.call(null,vec__21633,(0),null);var ary = cljs.core.nth.call(null,vec__21633,(1),null);if(cljs.core.truth_(ary))
{var bo = gl__$1.createBuffer();var bufferType = ((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"index","index",-1531685915)))?gl__$1.ELEMENT_ARRAY_BUFFER:gl__$1.ARRAY_BUFFER);gl__$1.bindBuffer(bufferType,bo);
gl__$1.bufferData(bufferType,ary,gl__$1.STATIC_DRAW);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,bo], null);
} else
{return null;
}
});})(map__21631,map__21631__$1,option,drawType,size,va,ta,ca,ia,na))
,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"vertex","vertex",1562146351),va,new cljs.core.Keyword(null,"texture","texture",-266291651),ta,new cljs.core.Keyword(null,"color","color",1011675173),ca,new cljs.core.Keyword(null,"index","index",-1531685915),ia,new cljs.core.Keyword(null,"normal","normal",-1519123858),na], null)))], null);
});
gl.mesh.bind = (function bind(gl__$1,p__21634,where,location){var map__21637 = p__21634;var map__21637__$1 = ((cljs.core.seq_QMARK_.call(null,map__21637))?cljs.core.apply.call(null,cljs.core.hash_map,map__21637):map__21637);var mesh = map__21637__$1;var size = cljs.core.get.call(null,map__21637__$1,new cljs.core.Keyword(null,"size","size",1098693007));if(cljs.core.truth_(cljs.core.get_in.call(null,mesh,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffers","buffers",471409492),where], null))))
{var G__21638 = gl__$1;G__21638.bindBuffer(gl__$1.ARRAY_BUFFER,cljs.core.get_in.call(null,mesh,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffers","buffers",471409492),where], null)));
G__21638.vertexAttribPointer(location,(cljs.core.get_in.call(null,mesh,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arrays","arrays",1113446498),where], null)).length / size),gl__$1.FLOAT,false,(0),(0));
return G__21638;
} else
{return null;
}
});
gl.mesh.draw = (function draw(gl__$1,p__21639,drawType){var map__21643 = p__21639;var map__21643__$1 = ((cljs.core.seq_QMARK_.call(null,map__21643))?cljs.core.apply.call(null,cljs.core.hash_map,map__21643):map__21643);var mesh = map__21643__$1;var size = cljs.core.get.call(null,map__21643__$1,new cljs.core.Keyword(null,"size","size",1098693007));var realType = (function (){var or__3551__auto__ = drawType;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return new cljs.core.Keyword(null,"drawType","drawType",-993017931).cljs$core$IFn$_invoke$arity$1(mesh);
}
})();if(cljs.core.some_QMARK_.call(null,cljs.core.get_in.call(null,mesh,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffers","buffers",471409492),new cljs.core.Keyword(null,"index","index",-1531685915)], null))))
{var G__21644 = gl__$1;G__21644.bindBuffer(gl__$1.ELEMENT_ARRAY_BUFFER,cljs.core.get_in.call(null,mesh,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffers","buffers",471409492),new cljs.core.Keyword(null,"index","index",-1531685915)], null)));
G__21644.drawElements(realType,size,gl__$1.UNSIGNED_SHORT,(0));
return G__21644;
} else
{var G__21645 = gl__$1;G__21645.drawArrays(realType,(0),size);
return G__21645;
}
});
/**
* 模倣2D畫面的繪圖方式，錨點在左上角
*/
gl.mesh.plain_2d = (function plain_2d(gl__$1){return gl.mesh.create.call(null,gl__$1,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"vertex","vertex",1562146351),(new Float32Array([(0),(0),(0),(1),(0),(1),(0),(1),(1),(0),(0),(1),(1),(1),(0),(1)])),new cljs.core.Keyword(null,"texture","texture",-266291651),(new Float32Array([(0),(0),(0),(1),(1),(0),(1),(1)])),new cljs.core.Keyword(null,"index","index",-1531685915),(new Uint16Array([(0),(1),(2),(3)])),new cljs.core.Keyword(null,"color","color",1011675173),(new Float32Array([(1),(1),(1),(1),(1),(0),(0),(1),(0),(1),(0),(1),(0),(0),(1),(1)])),new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"drawType","drawType",-993017931),gl__$1.TRIANGLE_STRIP], null));
});
/**
* 錨點在中心點
*/
gl.mesh.plain = (function plain(gl__$1){return gl.mesh.create.call(null,gl__$1,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"vertex","vertex",1562146351),(new Float32Array([(-1),(-1),(0),(1),(-1),(1),(0),(1),(1),(-1),(0),(1),(1),(1),(0),(1)])),new cljs.core.Keyword(null,"texture","texture",-266291651),(new Float32Array([(0),(0),(0),(1),(1),(0),(1),(1)])),new cljs.core.Keyword(null,"index","index",-1531685915),(new Uint16Array([(0),(1),(2),(3)])),new cljs.core.Keyword(null,"color","color",1011675173),(new Float32Array([(1),(1),(1),(1),(1),(0),(0),(1),(0),(1),(0),(1),(0),(0),(1),(1)])),new cljs.core.Keyword(null,"size","size",1098693007),(4),new cljs.core.Keyword(null,"drawType","drawType",-993017931),gl__$1.TRIANGLE_STRIP], null));
});
