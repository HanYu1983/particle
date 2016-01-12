// Compiled by ClojureScript 0.0-2268
goog.provide('app.fns');
goog.require('cljs.core');
app.fns.rx = require("rx");
app.fns.fs = require("fs");
app.fns.readdir = (function readdir(filepath){return app.fns.rx.Observable.create((function (obs){return app.fns.fs.readdir(filepath,(function (err,data){if(cljs.core.truth_(err))
{return obs.onError(err);
} else
{cljs.core.doall.call(null,(function (){var iter__4374__auto__ = (function iter__5498(s__5499){return (new cljs.core.LazySeq(null,(function (){var s__5499__$1 = s__5499;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5499__$1);if(temp__4126__auto__)
{var s__5499__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5499__$2))
{var c__4372__auto__ = cljs.core.chunk_first.call(null,s__5499__$2);var size__4373__auto__ = cljs.core.count.call(null,c__4372__auto__);var b__5501 = cljs.core.chunk_buffer.call(null,size__4373__auto__);if((function (){var i__5500 = (0);while(true){
if((i__5500 < size__4373__auto__))
{var da = cljs.core._nth.call(null,c__4372__auto__,i__5500);cljs.core.chunk_append.call(null,b__5501,obs.onNext(da));
{
var G__5502 = (i__5500 + (1));
i__5500 = G__5502;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5501),iter__5498.call(null,cljs.core.chunk_rest.call(null,s__5499__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5501),null);
}
} else
{var da = cljs.core.first.call(null,s__5499__$2);return cljs.core.cons.call(null,obs.onNext(da),iter__5498.call(null,cljs.core.rest.call(null,s__5499__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4374__auto__.call(null,cljs.core.js__GT_clj.call(null,data));
})());
return obs.onCompleted();
}
}));
}));
});
app.fns.readfile = (function readfile(filepath){return app.fns.rx.Observable.create((function (obs){return app.fns.fs.readFile(filepath,"utf8",(function (err,data){if(cljs.core.truth_(err))
{return obs.onError(err);
} else
{var G__5504 = obs;G__5504.onNext(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filepath,data], null));
G__5504.onCompleted();
return G__5504;
}
}));
}));
});
app.fns.writefile = (function writefile(output,data){return app.fns.rx.Observable.create((function (obs){return app.fns.fs.writeFile(output,data,(function (err){if(cljs.core.truth_(err))
{return obs.onError(err);
} else
{var G__5506 = obs;G__5506.onCompleted();
return G__5506;
}
}));
}));
});
