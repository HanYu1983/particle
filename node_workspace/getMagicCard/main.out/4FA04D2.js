goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__4858__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__4858 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4859__i = 0, G__4859__a = new Array(arguments.length -  0);
while (G__4859__i < G__4859__a.length) {G__4859__a[G__4859__i] = arguments[G__4859__i + 0]; ++G__4859__i;}
  args = new cljs.core.IndexedSeq(G__4859__a,0,null);
} 
return G__4858__delegate.call(this,args);};
G__4858.cljs$lang$maxFixedArity = 0;
G__4858.cljs$lang$applyTo = (function (arglist__4860){
var args = cljs.core.seq(arglist__4860);
return G__4858__delegate(args);
});
G__4858.cljs$core$IFn$_invoke$arity$variadic = G__4858__delegate;
return G__4858;
})()
);

cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__4861__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__4861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4862__i = 0, G__4862__a = new Array(arguments.length -  0);
while (G__4862__i < G__4862__a.length) {G__4862__a[G__4862__i] = arguments[G__4862__i + 0]; ++G__4862__i;}
  args = new cljs.core.IndexedSeq(G__4862__a,0,null);
} 
return G__4861__delegate.call(this,args);};
G__4861.cljs$lang$maxFixedArity = 0;
G__4861.cljs$lang$applyTo = (function (arglist__4863){
var args = cljs.core.seq(arglist__4863);
return G__4861__delegate(args);
});
G__4861.cljs$core$IFn$_invoke$arity$variadic = G__4861__delegate;
return G__4861;
})()
);

return null;
});
