goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4860__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4860 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4861__i = 0, G__4861__a = new Array(arguments.length -  0);
while (G__4861__i < G__4861__a.length) {G__4861__a[G__4861__i] = arguments[G__4861__i + 0]; ++G__4861__i;}
  args = new cljs.core.IndexedSeq(G__4861__a,0,null);
} 
return G__4860__delegate.call(this,args);};
G__4860.cljs$lang$maxFixedArity = 0;
G__4860.cljs$lang$applyTo = (function (arglist__4862){
var args = cljs.core.seq(arglist__4862);
return G__4860__delegate(args);
});
G__4860.cljs$core$IFn$_invoke$arity$variadic = G__4860__delegate;
return G__4860;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4863__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4864__i = 0, G__4864__a = new Array(arguments.length -  0);
while (G__4864__i < G__4864__a.length) {G__4864__a[G__4864__i] = arguments[G__4864__i + 0]; ++G__4864__i;}
  args = new cljs.core.IndexedSeq(G__4864__a,0,null);
} 
return G__4863__delegate.call(this,args);};
G__4863.cljs$lang$maxFixedArity = 0;
G__4863.cljs$lang$applyTo = (function (arglist__4865){
var args = cljs.core.seq(arglist__4865);
return G__4863__delegate(args);
});
G__4863.cljs$core$IFn$_invoke$arity$variadic = G__4863__delegate;
return G__4863;
})()
);

return null;
});
