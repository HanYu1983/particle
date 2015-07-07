// Compiled by ClojureScript 0.0-2268
goog.provide('gl.util');
goog.require('cljs.core');
gl.util.getContext = (function getContext(canvas,option){return cljs.core.reduce.call(null,(function (ctx,test_name){if((ctx == null))
{try{return canvas.getContext(test_name,option);
}catch (e9923){if((e9923 instanceof Object))
{var e = e9923;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9923;
} else
{return null;
}
}
}} else
{return ctx;
}
}),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webgl","experimental-webgl","webkit-3d","moz-webgl"], null));
});
gl.util.domContent = (function domContent(elemName){return document.getElementById(elemName).textContent;
});
