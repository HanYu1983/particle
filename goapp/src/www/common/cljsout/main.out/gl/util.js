// Compiled by ClojureScript 1.10.238 {}
goog.provide('gl.util');
goog.require('cljs.core');
gl.util.getContext = (function gl$util$getContext(canvas,option){
return cljs.core.reduce.call(null,(function (ctx,test_name){
if((ctx == null)){
try{return canvas.getContext(test_name,option);
}catch (e9041){if((e9041 instanceof Object)){
var e = e9041;
return null;
} else {
throw e9041;

}
}} else {
return ctx;
}
}),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webgl","experimental-webgl","webkit-3d","moz-webgl"], null));
});
gl.util.domContent = (function gl$util$domContent(elemName){
return document.getElementById(elemName).textContent;
});

//# sourceMappingURL=util.js.map
