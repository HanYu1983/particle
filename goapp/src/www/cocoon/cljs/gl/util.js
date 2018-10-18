// Compiled by ClojureScript 0.0-2268
goog.provide('gl.util');
goog.require('cljs.core');
gl.util.getContext = (function getContext(canvas,option){return cljs.core.reduce.call(null,(function (ctx,test_name){if((ctx == null))
{try{return canvas.getContext(test_name,option);
}catch (e12506){if((e12506 instanceof Object))
{var e = e12506;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12506;
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
