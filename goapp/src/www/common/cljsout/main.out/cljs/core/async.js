// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__2944 = arguments.length;
switch (G__2944) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async2945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2945 = (function (f,blockable,meta2946){
this.f = f;
this.blockable = blockable;
this.meta2946 = meta2946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2947,meta2946__$1){
var self__ = this;
var _2947__$1 = this;
return (new cljs.core.async.t_cljs$core$async2945(self__.f,self__.blockable,meta2946__$1));
});

cljs.core.async.t_cljs$core$async2945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2947){
var self__ = this;
var _2947__$1 = this;
return self__.meta2946;
});

cljs.core.async.t_cljs$core$async2945.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2945.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async2945.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async2945.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async2945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta2946","meta2946",-921892137,null)], null);
});

cljs.core.async.t_cljs$core$async2945.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2945";

cljs.core.async.t_cljs$core$async2945.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async2945");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2945.
 */
cljs.core.async.__GT_t_cljs$core$async2945 = (function cljs$core$async$__GT_t_cljs$core$async2945(f__$1,blockable__$1,meta2946){
return (new cljs.core.async.t_cljs$core$async2945(f__$1,blockable__$1,meta2946));
});

}

return (new cljs.core.async.t_cljs$core$async2945(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__2951 = arguments.length;
switch (G__2951) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__2954 = arguments.length;
switch (G__2954) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__2957 = arguments.length;
switch (G__2957) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_2959 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_2959);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_2959,ret){
return (function (){
return fn1.call(null,val_2959);
});})(val_2959,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__2961 = arguments.length;
switch (G__2961) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___2963 = n;
var x_2964 = (0);
while(true){
if((x_2964 < n__4376__auto___2963)){
(a[x_2964] = (0));

var G__2965 = (x_2964 + (1));
x_2964 = G__2965;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__2966 = (i + (1));
i = G__2966;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async2967 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2967 = (function (flag,meta2968){
this.flag = flag;
this.meta2968 = meta2968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_2969,meta2968__$1){
var self__ = this;
var _2969__$1 = this;
return (new cljs.core.async.t_cljs$core$async2967(self__.flag,meta2968__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async2967.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_2969){
var self__ = this;
var _2969__$1 = this;
return self__.meta2968;
});})(flag))
;

cljs.core.async.t_cljs$core$async2967.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2967.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async2967.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async2967.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async2967.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta2968","meta2968",-929368403,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async2967.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2967";

cljs.core.async.t_cljs$core$async2967.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async2967");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2967.
 */
cljs.core.async.__GT_t_cljs$core$async2967 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async2967(flag__$1,meta2968){
return (new cljs.core.async.t_cljs$core$async2967(flag__$1,meta2968));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async2967(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async2970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async2970 = (function (flag,cb,meta2971){
this.flag = flag;
this.cb = cb;
this.meta2971 = meta2971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async2970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_2972,meta2971__$1){
var self__ = this;
var _2972__$1 = this;
return (new cljs.core.async.t_cljs$core$async2970(self__.flag,self__.cb,meta2971__$1));
});

cljs.core.async.t_cljs$core$async2970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_2972){
var self__ = this;
var _2972__$1 = this;
return self__.meta2971;
});

cljs.core.async.t_cljs$core$async2970.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async2970.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async2970.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async2970.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async2970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta2971","meta2971",-870384503,null)], null);
});

cljs.core.async.t_cljs$core$async2970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async2970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async2970";

cljs.core.async.t_cljs$core$async2970.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async2970");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async2970.
 */
cljs.core.async.__GT_t_cljs$core$async2970 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async2970(flag__$1,cb__$1,meta2971){
return (new cljs.core.async.t_cljs$core$async2970(flag__$1,cb__$1,meta2971));
});

}

return (new cljs.core.async.t_cljs$core$async2970(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__2973_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2973_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__2974_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__2974_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__2975 = (i + (1));
i = G__2975;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___2981 = arguments.length;
var i__4500__auto___2982 = (0);
while(true){
if((i__4500__auto___2982 < len__4499__auto___2981)){
args__4502__auto__.push((arguments[i__4500__auto___2982]));

var G__2983 = (i__4500__auto___2982 + (1));
i__4500__auto___2982 = G__2983;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__2978){
var map__2979 = p__2978;
var map__2979__$1 = ((((!((map__2979 == null)))?(((((map__2979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2979):map__2979);
var opts = map__2979__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq2976){
var G__2977 = cljs.core.first.call(null,seq2976);
var seq2976__$1 = cljs.core.next.call(null,seq2976);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2977,seq2976__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__2985 = arguments.length;
switch (G__2985) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__2884__auto___3031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___3031){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___3031){
return (function (state_3009){
var state_val_3010 = (state_3009[(1)]);
if((state_val_3010 === (7))){
var inst_3005 = (state_3009[(2)]);
var state_3009__$1 = state_3009;
var statearr_3011_3032 = state_3009__$1;
(statearr_3011_3032[(2)] = inst_3005);

(statearr_3011_3032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3010 === (1))){
var state_3009__$1 = state_3009;
var statearr_3012_3033 = state_3009__$1;
(statearr_3012_3033[(2)] = null);

(statearr_3012_3033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3010 === (4))){
var inst_2988 = (state_3009[(7)]);
var inst_2988__$1 = (state_3009[(2)]);
var inst_2989 = (inst_2988__$1 == null);
var state_3009__$1 = (function (){var statearr_3013 = state_3009;
(statearr_3013[(7)] = inst_2988__$1);

return statearr_3013;
})();
if(cljs.core.truth_(inst_2989)){
var statearr_3014_3034 = state_3009__$1;
(statearr_3014_3034[(1)] = (5));

} else {
var statearr_3015_3035 = state_3009__$1;
(statearr_3015_3035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3010 === (13))){
var state_3009__$1 = state_3009;
var statearr_3016_3036 = state_3009__$1;
(statearr_3016_3036[(2)] = null);

(statearr_3016_3036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3010 === (6))){
var inst_2988 = (state_3009[(7)]);
var state_3009__$1 = state_3009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3009__$1,(11),to,inst_2988);
} else {
if((state_val_3010 === (3))){
var inst_3007 = (state_3009[(2)]);
var state_3009__$1 = state_3009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3009__$1,inst_3007);
} else {
if((state_val_3010 === (12))){
var state_3009__$1 = state_3009;
var statearr_3017_3037 = state_3009__$1;
(statearr_3017_3037[(2)] = null);

(statearr_3017_3037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3010 === (2))){
var state_3009__$1 = state_3009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3009__$1,(4),from);
} else {
if((state_val_3010 === (11))){
var inst_2998 = (state_3009[(2)]);
var state_3009__$1 = state_3009;
if(cljs.core.truth_(inst_2998)){
var statearr_3018_3038 = state_3009__$1;
(statearr_3018_3038[(1)] = (12));

} else {
var statearr_3019_3039 = state_3009__$1;
(statearr_3019_3039[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3010 === (9))){
var state_3009__$1 = state_3009;
var statearr_3020_3040 = state_3009__$1;
(statearr_3020_3040[(2)] = null);

(statearr_3020_3040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3010 === (5))){
var state_3009__$1 = state_3009;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3021_3041 = state_3009__$1;
(statearr_3021_3041[(1)] = (8));

} else {
var statearr_3022_3042 = state_3009__$1;
(statearr_3022_3042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3010 === (14))){
var inst_3003 = (state_3009[(2)]);
var state_3009__$1 = state_3009;
var statearr_3023_3043 = state_3009__$1;
(statearr_3023_3043[(2)] = inst_3003);

(statearr_3023_3043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3010 === (10))){
var inst_2995 = (state_3009[(2)]);
var state_3009__$1 = state_3009;
var statearr_3024_3044 = state_3009__$1;
(statearr_3024_3044[(2)] = inst_2995);

(statearr_3024_3044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3010 === (8))){
var inst_2992 = cljs.core.async.close_BANG_.call(null,to);
var state_3009__$1 = state_3009;
var statearr_3025_3045 = state_3009__$1;
(statearr_3025_3045[(2)] = inst_2992);

(statearr_3025_3045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2884__auto___3031))
;
return ((function (switch__2794__auto__,c__2884__auto___3031){
return (function() {
var cljs$core$async$state_machine__2795__auto__ = null;
var cljs$core$async$state_machine__2795__auto____0 = (function (){
var statearr_3026 = [null,null,null,null,null,null,null,null];
(statearr_3026[(0)] = cljs$core$async$state_machine__2795__auto__);

(statearr_3026[(1)] = (1));

return statearr_3026;
});
var cljs$core$async$state_machine__2795__auto____1 = (function (state_3009){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_3009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e3027){if((e3027 instanceof Object)){
var ex__2798__auto__ = e3027;
var statearr_3028_3046 = state_3009;
(statearr_3028_3046[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3047 = state_3009;
state_3009 = G__3047;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$state_machine__2795__auto__ = function(state_3009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2795__auto____1.call(this,state_3009);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2795__auto____0;
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2795__auto____1;
return cljs$core$async$state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___3031))
})();
var state__2886__auto__ = (function (){var statearr_3029 = f__2885__auto__.call(null);
(statearr_3029[(6)] = c__2884__auto___3031);

return statearr_3029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___3031))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__3048){
var vec__3049 = p__3048;
var v = cljs.core.nth.call(null,vec__3049,(0),null);
var p = cljs.core.nth.call(null,vec__3049,(1),null);
var job = vec__3049;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__2884__auto___3220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___3220,res,vec__3049,v,p,job,jobs,results){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___3220,res,vec__3049,v,p,job,jobs,results){
return (function (state_3056){
var state_val_3057 = (state_3056[(1)]);
if((state_val_3057 === (1))){
var state_3056__$1 = state_3056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3056__$1,(2),res,v);
} else {
if((state_val_3057 === (2))){
var inst_3053 = (state_3056[(2)]);
var inst_3054 = cljs.core.async.close_BANG_.call(null,res);
var state_3056__$1 = (function (){var statearr_3058 = state_3056;
(statearr_3058[(7)] = inst_3053);

return statearr_3058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3056__$1,inst_3054);
} else {
return null;
}
}
});})(c__2884__auto___3220,res,vec__3049,v,p,job,jobs,results))
;
return ((function (switch__2794__auto__,c__2884__auto___3220,res,vec__3049,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____0 = (function (){
var statearr_3059 = [null,null,null,null,null,null,null,null];
(statearr_3059[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__);

(statearr_3059[(1)] = (1));

return statearr_3059;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____1 = (function (state_3056){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_3056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e3060){if((e3060 instanceof Object)){
var ex__2798__auto__ = e3060;
var statearr_3061_3221 = state_3056;
(statearr_3061_3221[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3222 = state_3056;
state_3056 = G__3222;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__ = function(state_3056){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____1.call(this,state_3056);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___3220,res,vec__3049,v,p,job,jobs,results))
})();
var state__2886__auto__ = (function (){var statearr_3062 = f__2885__auto__.call(null);
(statearr_3062[(6)] = c__2884__auto___3220);

return statearr_3062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___3220,res,vec__3049,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__3063){
var vec__3064 = p__3063;
var v = cljs.core.nth.call(null,vec__3064,(0),null);
var p = cljs.core.nth.call(null,vec__3064,(1),null);
var job = vec__3064;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___3223 = n;
var __3224 = (0);
while(true){
if((__3224 < n__4376__auto___3223)){
var G__3067_3225 = type;
var G__3067_3226__$1 = (((G__3067_3225 instanceof cljs.core.Keyword))?G__3067_3225.fqn:null);
switch (G__3067_3226__$1) {
case "compute":
var c__2884__auto___3228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3224,c__2884__auto___3228,G__3067_3225,G__3067_3226__$1,n__4376__auto___3223,jobs,results,process,async){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (__3224,c__2884__auto___3228,G__3067_3225,G__3067_3226__$1,n__4376__auto___3223,jobs,results,process,async){
return (function (state_3080){
var state_val_3081 = (state_3080[(1)]);
if((state_val_3081 === (1))){
var state_3080__$1 = state_3080;
var statearr_3082_3229 = state_3080__$1;
(statearr_3082_3229[(2)] = null);

(statearr_3082_3229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (2))){
var state_3080__$1 = state_3080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3080__$1,(4),jobs);
} else {
if((state_val_3081 === (3))){
var inst_3078 = (state_3080[(2)]);
var state_3080__$1 = state_3080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3080__$1,inst_3078);
} else {
if((state_val_3081 === (4))){
var inst_3070 = (state_3080[(2)]);
var inst_3071 = process.call(null,inst_3070);
var state_3080__$1 = state_3080;
if(cljs.core.truth_(inst_3071)){
var statearr_3083_3230 = state_3080__$1;
(statearr_3083_3230[(1)] = (5));

} else {
var statearr_3084_3231 = state_3080__$1;
(statearr_3084_3231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (5))){
var state_3080__$1 = state_3080;
var statearr_3085_3232 = state_3080__$1;
(statearr_3085_3232[(2)] = null);

(statearr_3085_3232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (6))){
var state_3080__$1 = state_3080;
var statearr_3086_3233 = state_3080__$1;
(statearr_3086_3233[(2)] = null);

(statearr_3086_3233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3081 === (7))){
var inst_3076 = (state_3080[(2)]);
var state_3080__$1 = state_3080;
var statearr_3087_3234 = state_3080__$1;
(statearr_3087_3234[(2)] = inst_3076);

(statearr_3087_3234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__3224,c__2884__auto___3228,G__3067_3225,G__3067_3226__$1,n__4376__auto___3223,jobs,results,process,async))
;
return ((function (__3224,switch__2794__auto__,c__2884__auto___3228,G__3067_3225,G__3067_3226__$1,n__4376__auto___3223,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____0 = (function (){
var statearr_3088 = [null,null,null,null,null,null,null];
(statearr_3088[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__);

(statearr_3088[(1)] = (1));

return statearr_3088;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____1 = (function (state_3080){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_3080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e3089){if((e3089 instanceof Object)){
var ex__2798__auto__ = e3089;
var statearr_3090_3235 = state_3080;
(statearr_3090_3235[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3236 = state_3080;
state_3080 = G__3236;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__ = function(state_3080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____1.call(this,state_3080);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__;
})()
;})(__3224,switch__2794__auto__,c__2884__auto___3228,G__3067_3225,G__3067_3226__$1,n__4376__auto___3223,jobs,results,process,async))
})();
var state__2886__auto__ = (function (){var statearr_3091 = f__2885__auto__.call(null);
(statearr_3091[(6)] = c__2884__auto___3228);

return statearr_3091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(__3224,c__2884__auto___3228,G__3067_3225,G__3067_3226__$1,n__4376__auto___3223,jobs,results,process,async))
);


break;
case "async":
var c__2884__auto___3237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3224,c__2884__auto___3237,G__3067_3225,G__3067_3226__$1,n__4376__auto___3223,jobs,results,process,async){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (__3224,c__2884__auto___3237,G__3067_3225,G__3067_3226__$1,n__4376__auto___3223,jobs,results,process,async){
return (function (state_3104){
var state_val_3105 = (state_3104[(1)]);
if((state_val_3105 === (1))){
var state_3104__$1 = state_3104;
var statearr_3106_3238 = state_3104__$1;
(statearr_3106_3238[(2)] = null);

(statearr_3106_3238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3105 === (2))){
var state_3104__$1 = state_3104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3104__$1,(4),jobs);
} else {
if((state_val_3105 === (3))){
var inst_3102 = (state_3104[(2)]);
var state_3104__$1 = state_3104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3104__$1,inst_3102);
} else {
if((state_val_3105 === (4))){
var inst_3094 = (state_3104[(2)]);
var inst_3095 = async.call(null,inst_3094);
var state_3104__$1 = state_3104;
if(cljs.core.truth_(inst_3095)){
var statearr_3107_3239 = state_3104__$1;
(statearr_3107_3239[(1)] = (5));

} else {
var statearr_3108_3240 = state_3104__$1;
(statearr_3108_3240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3105 === (5))){
var state_3104__$1 = state_3104;
var statearr_3109_3241 = state_3104__$1;
(statearr_3109_3241[(2)] = null);

(statearr_3109_3241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3105 === (6))){
var state_3104__$1 = state_3104;
var statearr_3110_3242 = state_3104__$1;
(statearr_3110_3242[(2)] = null);

(statearr_3110_3242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3105 === (7))){
var inst_3100 = (state_3104[(2)]);
var state_3104__$1 = state_3104;
var statearr_3111_3243 = state_3104__$1;
(statearr_3111_3243[(2)] = inst_3100);

(statearr_3111_3243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__3224,c__2884__auto___3237,G__3067_3225,G__3067_3226__$1,n__4376__auto___3223,jobs,results,process,async))
;
return ((function (__3224,switch__2794__auto__,c__2884__auto___3237,G__3067_3225,G__3067_3226__$1,n__4376__auto___3223,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____0 = (function (){
var statearr_3112 = [null,null,null,null,null,null,null];
(statearr_3112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__);

(statearr_3112[(1)] = (1));

return statearr_3112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____1 = (function (state_3104){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_3104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e3113){if((e3113 instanceof Object)){
var ex__2798__auto__ = e3113;
var statearr_3114_3244 = state_3104;
(statearr_3114_3244[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3245 = state_3104;
state_3104 = G__3245;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__ = function(state_3104){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____1.call(this,state_3104);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__;
})()
;})(__3224,switch__2794__auto__,c__2884__auto___3237,G__3067_3225,G__3067_3226__$1,n__4376__auto___3223,jobs,results,process,async))
})();
var state__2886__auto__ = (function (){var statearr_3115 = f__2885__auto__.call(null);
(statearr_3115[(6)] = c__2884__auto___3237);

return statearr_3115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(__3224,c__2884__auto___3237,G__3067_3225,G__3067_3226__$1,n__4376__auto___3223,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3067_3226__$1)].join('')));

}

var G__3246 = (__3224 + (1));
__3224 = G__3246;
continue;
} else {
}
break;
}

var c__2884__auto___3247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___3247,jobs,results,process,async){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___3247,jobs,results,process,async){
return (function (state_3137){
var state_val_3138 = (state_3137[(1)]);
if((state_val_3138 === (1))){
var state_3137__$1 = state_3137;
var statearr_3139_3248 = state_3137__$1;
(statearr_3139_3248[(2)] = null);

(statearr_3139_3248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3138 === (2))){
var state_3137__$1 = state_3137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3137__$1,(4),from);
} else {
if((state_val_3138 === (3))){
var inst_3135 = (state_3137[(2)]);
var state_3137__$1 = state_3137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3137__$1,inst_3135);
} else {
if((state_val_3138 === (4))){
var inst_3118 = (state_3137[(7)]);
var inst_3118__$1 = (state_3137[(2)]);
var inst_3119 = (inst_3118__$1 == null);
var state_3137__$1 = (function (){var statearr_3140 = state_3137;
(statearr_3140[(7)] = inst_3118__$1);

return statearr_3140;
})();
if(cljs.core.truth_(inst_3119)){
var statearr_3141_3249 = state_3137__$1;
(statearr_3141_3249[(1)] = (5));

} else {
var statearr_3142_3250 = state_3137__$1;
(statearr_3142_3250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3138 === (5))){
var inst_3121 = cljs.core.async.close_BANG_.call(null,jobs);
var state_3137__$1 = state_3137;
var statearr_3143_3251 = state_3137__$1;
(statearr_3143_3251[(2)] = inst_3121);

(statearr_3143_3251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3138 === (6))){
var inst_3123 = (state_3137[(8)]);
var inst_3118 = (state_3137[(7)]);
var inst_3123__$1 = cljs.core.async.chan.call(null,(1));
var inst_3124 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3125 = [inst_3118,inst_3123__$1];
var inst_3126 = (new cljs.core.PersistentVector(null,2,(5),inst_3124,inst_3125,null));
var state_3137__$1 = (function (){var statearr_3144 = state_3137;
(statearr_3144[(8)] = inst_3123__$1);

return statearr_3144;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3137__$1,(8),jobs,inst_3126);
} else {
if((state_val_3138 === (7))){
var inst_3133 = (state_3137[(2)]);
var state_3137__$1 = state_3137;
var statearr_3145_3252 = state_3137__$1;
(statearr_3145_3252[(2)] = inst_3133);

(statearr_3145_3252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3138 === (8))){
var inst_3123 = (state_3137[(8)]);
var inst_3128 = (state_3137[(2)]);
var state_3137__$1 = (function (){var statearr_3146 = state_3137;
(statearr_3146[(9)] = inst_3128);

return statearr_3146;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3137__$1,(9),results,inst_3123);
} else {
if((state_val_3138 === (9))){
var inst_3130 = (state_3137[(2)]);
var state_3137__$1 = (function (){var statearr_3147 = state_3137;
(statearr_3147[(10)] = inst_3130);

return statearr_3147;
})();
var statearr_3148_3253 = state_3137__$1;
(statearr_3148_3253[(2)] = null);

(statearr_3148_3253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__2884__auto___3247,jobs,results,process,async))
;
return ((function (switch__2794__auto__,c__2884__auto___3247,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____0 = (function (){
var statearr_3149 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__);

(statearr_3149[(1)] = (1));

return statearr_3149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____1 = (function (state_3137){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_3137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e3150){if((e3150 instanceof Object)){
var ex__2798__auto__ = e3150;
var statearr_3151_3254 = state_3137;
(statearr_3151_3254[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3255 = state_3137;
state_3137 = G__3255;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__ = function(state_3137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____1.call(this,state_3137);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___3247,jobs,results,process,async))
})();
var state__2886__auto__ = (function (){var statearr_3152 = f__2885__auto__.call(null);
(statearr_3152[(6)] = c__2884__auto___3247);

return statearr_3152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___3247,jobs,results,process,async))
);


var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__,jobs,results,process,async){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__,jobs,results,process,async){
return (function (state_3190){
var state_val_3191 = (state_3190[(1)]);
if((state_val_3191 === (7))){
var inst_3186 = (state_3190[(2)]);
var state_3190__$1 = state_3190;
var statearr_3192_3256 = state_3190__$1;
(statearr_3192_3256[(2)] = inst_3186);

(statearr_3192_3256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3191 === (20))){
var state_3190__$1 = state_3190;
var statearr_3193_3257 = state_3190__$1;
(statearr_3193_3257[(2)] = null);

(statearr_3193_3257[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3191 === (1))){
var state_3190__$1 = state_3190;
var statearr_3194_3258 = state_3190__$1;
(statearr_3194_3258[(2)] = null);

(statearr_3194_3258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3191 === (4))){
var inst_3155 = (state_3190[(7)]);
var inst_3155__$1 = (state_3190[(2)]);
var inst_3156 = (inst_3155__$1 == null);
var state_3190__$1 = (function (){var statearr_3195 = state_3190;
(statearr_3195[(7)] = inst_3155__$1);

return statearr_3195;
})();
if(cljs.core.truth_(inst_3156)){
var statearr_3196_3259 = state_3190__$1;
(statearr_3196_3259[(1)] = (5));

} else {
var statearr_3197_3260 = state_3190__$1;
(statearr_3197_3260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3191 === (15))){
var inst_3168 = (state_3190[(8)]);
var state_3190__$1 = state_3190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3190__$1,(18),to,inst_3168);
} else {
if((state_val_3191 === (21))){
var inst_3181 = (state_3190[(2)]);
var state_3190__$1 = state_3190;
var statearr_3198_3261 = state_3190__$1;
(statearr_3198_3261[(2)] = inst_3181);

(statearr_3198_3261[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3191 === (13))){
var inst_3183 = (state_3190[(2)]);
var state_3190__$1 = (function (){var statearr_3199 = state_3190;
(statearr_3199[(9)] = inst_3183);

return statearr_3199;
})();
var statearr_3200_3262 = state_3190__$1;
(statearr_3200_3262[(2)] = null);

(statearr_3200_3262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3191 === (6))){
var inst_3155 = (state_3190[(7)]);
var state_3190__$1 = state_3190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3190__$1,(11),inst_3155);
} else {
if((state_val_3191 === (17))){
var inst_3176 = (state_3190[(2)]);
var state_3190__$1 = state_3190;
if(cljs.core.truth_(inst_3176)){
var statearr_3201_3263 = state_3190__$1;
(statearr_3201_3263[(1)] = (19));

} else {
var statearr_3202_3264 = state_3190__$1;
(statearr_3202_3264[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3191 === (3))){
var inst_3188 = (state_3190[(2)]);
var state_3190__$1 = state_3190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3190__$1,inst_3188);
} else {
if((state_val_3191 === (12))){
var inst_3165 = (state_3190[(10)]);
var state_3190__$1 = state_3190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3190__$1,(14),inst_3165);
} else {
if((state_val_3191 === (2))){
var state_3190__$1 = state_3190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3190__$1,(4),results);
} else {
if((state_val_3191 === (19))){
var state_3190__$1 = state_3190;
var statearr_3203_3265 = state_3190__$1;
(statearr_3203_3265[(2)] = null);

(statearr_3203_3265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3191 === (11))){
var inst_3165 = (state_3190[(2)]);
var state_3190__$1 = (function (){var statearr_3204 = state_3190;
(statearr_3204[(10)] = inst_3165);

return statearr_3204;
})();
var statearr_3205_3266 = state_3190__$1;
(statearr_3205_3266[(2)] = null);

(statearr_3205_3266[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3191 === (9))){
var state_3190__$1 = state_3190;
var statearr_3206_3267 = state_3190__$1;
(statearr_3206_3267[(2)] = null);

(statearr_3206_3267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3191 === (5))){
var state_3190__$1 = state_3190;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3207_3268 = state_3190__$1;
(statearr_3207_3268[(1)] = (8));

} else {
var statearr_3208_3269 = state_3190__$1;
(statearr_3208_3269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3191 === (14))){
var inst_3168 = (state_3190[(8)]);
var inst_3170 = (state_3190[(11)]);
var inst_3168__$1 = (state_3190[(2)]);
var inst_3169 = (inst_3168__$1 == null);
var inst_3170__$1 = cljs.core.not.call(null,inst_3169);
var state_3190__$1 = (function (){var statearr_3209 = state_3190;
(statearr_3209[(8)] = inst_3168__$1);

(statearr_3209[(11)] = inst_3170__$1);

return statearr_3209;
})();
if(inst_3170__$1){
var statearr_3210_3270 = state_3190__$1;
(statearr_3210_3270[(1)] = (15));

} else {
var statearr_3211_3271 = state_3190__$1;
(statearr_3211_3271[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3191 === (16))){
var inst_3170 = (state_3190[(11)]);
var state_3190__$1 = state_3190;
var statearr_3212_3272 = state_3190__$1;
(statearr_3212_3272[(2)] = inst_3170);

(statearr_3212_3272[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3191 === (10))){
var inst_3162 = (state_3190[(2)]);
var state_3190__$1 = state_3190;
var statearr_3213_3273 = state_3190__$1;
(statearr_3213_3273[(2)] = inst_3162);

(statearr_3213_3273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3191 === (18))){
var inst_3173 = (state_3190[(2)]);
var state_3190__$1 = state_3190;
var statearr_3214_3274 = state_3190__$1;
(statearr_3214_3274[(2)] = inst_3173);

(statearr_3214_3274[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3191 === (8))){
var inst_3159 = cljs.core.async.close_BANG_.call(null,to);
var state_3190__$1 = state_3190;
var statearr_3215_3275 = state_3190__$1;
(statearr_3215_3275[(2)] = inst_3159);

(statearr_3215_3275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2884__auto__,jobs,results,process,async))
;
return ((function (switch__2794__auto__,c__2884__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____0 = (function (){
var statearr_3216 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3216[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__);

(statearr_3216[(1)] = (1));

return statearr_3216;
});
var cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____1 = (function (state_3190){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_3190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e3217){if((e3217 instanceof Object)){
var ex__2798__auto__ = e3217;
var statearr_3218_3276 = state_3190;
(statearr_3218_3276[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3277 = state_3190;
state_3190 = G__3277;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__ = function(state_3190){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____1.call(this,state_3190);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__2795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__,jobs,results,process,async))
})();
var state__2886__auto__ = (function (){var statearr_3219 = f__2885__auto__.call(null);
(statearr_3219[(6)] = c__2884__auto__);

return statearr_3219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__,jobs,results,process,async))
);

return c__2884__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__3279 = arguments.length;
switch (G__3279) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__3282 = arguments.length;
switch (G__3282) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__3285 = arguments.length;
switch (G__3285) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__2884__auto___3334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___3334,tc,fc){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___3334,tc,fc){
return (function (state_3311){
var state_val_3312 = (state_3311[(1)]);
if((state_val_3312 === (7))){
var inst_3307 = (state_3311[(2)]);
var state_3311__$1 = state_3311;
var statearr_3313_3335 = state_3311__$1;
(statearr_3313_3335[(2)] = inst_3307);

(statearr_3313_3335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3312 === (1))){
var state_3311__$1 = state_3311;
var statearr_3314_3336 = state_3311__$1;
(statearr_3314_3336[(2)] = null);

(statearr_3314_3336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3312 === (4))){
var inst_3288 = (state_3311[(7)]);
var inst_3288__$1 = (state_3311[(2)]);
var inst_3289 = (inst_3288__$1 == null);
var state_3311__$1 = (function (){var statearr_3315 = state_3311;
(statearr_3315[(7)] = inst_3288__$1);

return statearr_3315;
})();
if(cljs.core.truth_(inst_3289)){
var statearr_3316_3337 = state_3311__$1;
(statearr_3316_3337[(1)] = (5));

} else {
var statearr_3317_3338 = state_3311__$1;
(statearr_3317_3338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3312 === (13))){
var state_3311__$1 = state_3311;
var statearr_3318_3339 = state_3311__$1;
(statearr_3318_3339[(2)] = null);

(statearr_3318_3339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3312 === (6))){
var inst_3288 = (state_3311[(7)]);
var inst_3294 = p.call(null,inst_3288);
var state_3311__$1 = state_3311;
if(cljs.core.truth_(inst_3294)){
var statearr_3319_3340 = state_3311__$1;
(statearr_3319_3340[(1)] = (9));

} else {
var statearr_3320_3341 = state_3311__$1;
(statearr_3320_3341[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3312 === (3))){
var inst_3309 = (state_3311[(2)]);
var state_3311__$1 = state_3311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3311__$1,inst_3309);
} else {
if((state_val_3312 === (12))){
var state_3311__$1 = state_3311;
var statearr_3321_3342 = state_3311__$1;
(statearr_3321_3342[(2)] = null);

(statearr_3321_3342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3312 === (2))){
var state_3311__$1 = state_3311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3311__$1,(4),ch);
} else {
if((state_val_3312 === (11))){
var inst_3288 = (state_3311[(7)]);
var inst_3298 = (state_3311[(2)]);
var state_3311__$1 = state_3311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3311__$1,(8),inst_3298,inst_3288);
} else {
if((state_val_3312 === (9))){
var state_3311__$1 = state_3311;
var statearr_3322_3343 = state_3311__$1;
(statearr_3322_3343[(2)] = tc);

(statearr_3322_3343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3312 === (5))){
var inst_3291 = cljs.core.async.close_BANG_.call(null,tc);
var inst_3292 = cljs.core.async.close_BANG_.call(null,fc);
var state_3311__$1 = (function (){var statearr_3323 = state_3311;
(statearr_3323[(8)] = inst_3291);

return statearr_3323;
})();
var statearr_3324_3344 = state_3311__$1;
(statearr_3324_3344[(2)] = inst_3292);

(statearr_3324_3344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3312 === (14))){
var inst_3305 = (state_3311[(2)]);
var state_3311__$1 = state_3311;
var statearr_3325_3345 = state_3311__$1;
(statearr_3325_3345[(2)] = inst_3305);

(statearr_3325_3345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3312 === (10))){
var state_3311__$1 = state_3311;
var statearr_3326_3346 = state_3311__$1;
(statearr_3326_3346[(2)] = fc);

(statearr_3326_3346[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3312 === (8))){
var inst_3300 = (state_3311[(2)]);
var state_3311__$1 = state_3311;
if(cljs.core.truth_(inst_3300)){
var statearr_3327_3347 = state_3311__$1;
(statearr_3327_3347[(1)] = (12));

} else {
var statearr_3328_3348 = state_3311__$1;
(statearr_3328_3348[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2884__auto___3334,tc,fc))
;
return ((function (switch__2794__auto__,c__2884__auto___3334,tc,fc){
return (function() {
var cljs$core$async$state_machine__2795__auto__ = null;
var cljs$core$async$state_machine__2795__auto____0 = (function (){
var statearr_3329 = [null,null,null,null,null,null,null,null,null];
(statearr_3329[(0)] = cljs$core$async$state_machine__2795__auto__);

(statearr_3329[(1)] = (1));

return statearr_3329;
});
var cljs$core$async$state_machine__2795__auto____1 = (function (state_3311){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_3311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e3330){if((e3330 instanceof Object)){
var ex__2798__auto__ = e3330;
var statearr_3331_3349 = state_3311;
(statearr_3331_3349[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3350 = state_3311;
state_3311 = G__3350;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$state_machine__2795__auto__ = function(state_3311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2795__auto____1.call(this,state_3311);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2795__auto____0;
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2795__auto____1;
return cljs$core$async$state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___3334,tc,fc))
})();
var state__2886__auto__ = (function (){var statearr_3332 = f__2885__auto__.call(null);
(statearr_3332[(6)] = c__2884__auto___3334);

return statearr_3332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___3334,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__){
return (function (state_3371){
var state_val_3372 = (state_3371[(1)]);
if((state_val_3372 === (7))){
var inst_3367 = (state_3371[(2)]);
var state_3371__$1 = state_3371;
var statearr_3373_3391 = state_3371__$1;
(statearr_3373_3391[(2)] = inst_3367);

(statearr_3373_3391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3372 === (1))){
var inst_3351 = init;
var state_3371__$1 = (function (){var statearr_3374 = state_3371;
(statearr_3374[(7)] = inst_3351);

return statearr_3374;
})();
var statearr_3375_3392 = state_3371__$1;
(statearr_3375_3392[(2)] = null);

(statearr_3375_3392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3372 === (4))){
var inst_3354 = (state_3371[(8)]);
var inst_3354__$1 = (state_3371[(2)]);
var inst_3355 = (inst_3354__$1 == null);
var state_3371__$1 = (function (){var statearr_3376 = state_3371;
(statearr_3376[(8)] = inst_3354__$1);

return statearr_3376;
})();
if(cljs.core.truth_(inst_3355)){
var statearr_3377_3393 = state_3371__$1;
(statearr_3377_3393[(1)] = (5));

} else {
var statearr_3378_3394 = state_3371__$1;
(statearr_3378_3394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3372 === (6))){
var inst_3354 = (state_3371[(8)]);
var inst_3358 = (state_3371[(9)]);
var inst_3351 = (state_3371[(7)]);
var inst_3358__$1 = f.call(null,inst_3351,inst_3354);
var inst_3359 = cljs.core.reduced_QMARK_.call(null,inst_3358__$1);
var state_3371__$1 = (function (){var statearr_3379 = state_3371;
(statearr_3379[(9)] = inst_3358__$1);

return statearr_3379;
})();
if(inst_3359){
var statearr_3380_3395 = state_3371__$1;
(statearr_3380_3395[(1)] = (8));

} else {
var statearr_3381_3396 = state_3371__$1;
(statearr_3381_3396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3372 === (3))){
var inst_3369 = (state_3371[(2)]);
var state_3371__$1 = state_3371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3371__$1,inst_3369);
} else {
if((state_val_3372 === (2))){
var state_3371__$1 = state_3371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3371__$1,(4),ch);
} else {
if((state_val_3372 === (9))){
var inst_3358 = (state_3371[(9)]);
var inst_3351 = inst_3358;
var state_3371__$1 = (function (){var statearr_3382 = state_3371;
(statearr_3382[(7)] = inst_3351);

return statearr_3382;
})();
var statearr_3383_3397 = state_3371__$1;
(statearr_3383_3397[(2)] = null);

(statearr_3383_3397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3372 === (5))){
var inst_3351 = (state_3371[(7)]);
var state_3371__$1 = state_3371;
var statearr_3384_3398 = state_3371__$1;
(statearr_3384_3398[(2)] = inst_3351);

(statearr_3384_3398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3372 === (10))){
var inst_3365 = (state_3371[(2)]);
var state_3371__$1 = state_3371;
var statearr_3385_3399 = state_3371__$1;
(statearr_3385_3399[(2)] = inst_3365);

(statearr_3385_3399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3372 === (8))){
var inst_3358 = (state_3371[(9)]);
var inst_3361 = cljs.core.deref.call(null,inst_3358);
var state_3371__$1 = state_3371;
var statearr_3386_3400 = state_3371__$1;
(statearr_3386_3400[(2)] = inst_3361);

(statearr_3386_3400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__2884__auto__))
;
return ((function (switch__2794__auto__,c__2884__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__2795__auto__ = null;
var cljs$core$async$reduce_$_state_machine__2795__auto____0 = (function (){
var statearr_3387 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3387[(0)] = cljs$core$async$reduce_$_state_machine__2795__auto__);

(statearr_3387[(1)] = (1));

return statearr_3387;
});
var cljs$core$async$reduce_$_state_machine__2795__auto____1 = (function (state_3371){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_3371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e3388){if((e3388 instanceof Object)){
var ex__2798__auto__ = e3388;
var statearr_3389_3401 = state_3371;
(statearr_3389_3401[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3402 = state_3371;
state_3371 = G__3402;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__2795__auto__ = function(state_3371){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__2795__auto____1.call(this,state_3371);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__2795__auto____0;
cljs$core$async$reduce_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__2795__auto____1;
return cljs$core$async$reduce_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__))
})();
var state__2886__auto__ = (function (){var statearr_3390 = f__2885__auto__.call(null);
(statearr_3390[(6)] = c__2884__auto__);

return statearr_3390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__))
);

return c__2884__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__,f__$1){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__,f__$1){
return (function (state_3408){
var state_val_3409 = (state_3408[(1)]);
if((state_val_3409 === (1))){
var inst_3403 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_3408__$1 = state_3408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3408__$1,(2),inst_3403);
} else {
if((state_val_3409 === (2))){
var inst_3405 = (state_3408[(2)]);
var inst_3406 = f__$1.call(null,inst_3405);
var state_3408__$1 = state_3408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3408__$1,inst_3406);
} else {
return null;
}
}
});})(c__2884__auto__,f__$1))
;
return ((function (switch__2794__auto__,c__2884__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__2795__auto__ = null;
var cljs$core$async$transduce_$_state_machine__2795__auto____0 = (function (){
var statearr_3410 = [null,null,null,null,null,null,null];
(statearr_3410[(0)] = cljs$core$async$transduce_$_state_machine__2795__auto__);

(statearr_3410[(1)] = (1));

return statearr_3410;
});
var cljs$core$async$transduce_$_state_machine__2795__auto____1 = (function (state_3408){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_3408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e3411){if((e3411 instanceof Object)){
var ex__2798__auto__ = e3411;
var statearr_3412_3414 = state_3408;
(statearr_3412_3414[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3415 = state_3408;
state_3408 = G__3415;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__2795__auto__ = function(state_3408){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__2795__auto____1.call(this,state_3408);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__2795__auto____0;
cljs$core$async$transduce_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__2795__auto____1;
return cljs$core$async$transduce_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__,f__$1))
})();
var state__2886__auto__ = (function (){var statearr_3413 = f__2885__auto__.call(null);
(statearr_3413[(6)] = c__2884__auto__);

return statearr_3413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__,f__$1))
);

return c__2884__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__3417 = arguments.length;
switch (G__3417) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__){
return (function (state_3442){
var state_val_3443 = (state_3442[(1)]);
if((state_val_3443 === (7))){
var inst_3424 = (state_3442[(2)]);
var state_3442__$1 = state_3442;
var statearr_3444_3465 = state_3442__$1;
(statearr_3444_3465[(2)] = inst_3424);

(statearr_3444_3465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3443 === (1))){
var inst_3418 = cljs.core.seq.call(null,coll);
var inst_3419 = inst_3418;
var state_3442__$1 = (function (){var statearr_3445 = state_3442;
(statearr_3445[(7)] = inst_3419);

return statearr_3445;
})();
var statearr_3446_3466 = state_3442__$1;
(statearr_3446_3466[(2)] = null);

(statearr_3446_3466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3443 === (4))){
var inst_3419 = (state_3442[(7)]);
var inst_3422 = cljs.core.first.call(null,inst_3419);
var state_3442__$1 = state_3442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3442__$1,(7),ch,inst_3422);
} else {
if((state_val_3443 === (13))){
var inst_3436 = (state_3442[(2)]);
var state_3442__$1 = state_3442;
var statearr_3447_3467 = state_3442__$1;
(statearr_3447_3467[(2)] = inst_3436);

(statearr_3447_3467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3443 === (6))){
var inst_3427 = (state_3442[(2)]);
var state_3442__$1 = state_3442;
if(cljs.core.truth_(inst_3427)){
var statearr_3448_3468 = state_3442__$1;
(statearr_3448_3468[(1)] = (8));

} else {
var statearr_3449_3469 = state_3442__$1;
(statearr_3449_3469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3443 === (3))){
var inst_3440 = (state_3442[(2)]);
var state_3442__$1 = state_3442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3442__$1,inst_3440);
} else {
if((state_val_3443 === (12))){
var state_3442__$1 = state_3442;
var statearr_3450_3470 = state_3442__$1;
(statearr_3450_3470[(2)] = null);

(statearr_3450_3470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3443 === (2))){
var inst_3419 = (state_3442[(7)]);
var state_3442__$1 = state_3442;
if(cljs.core.truth_(inst_3419)){
var statearr_3451_3471 = state_3442__$1;
(statearr_3451_3471[(1)] = (4));

} else {
var statearr_3452_3472 = state_3442__$1;
(statearr_3452_3472[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3443 === (11))){
var inst_3433 = cljs.core.async.close_BANG_.call(null,ch);
var state_3442__$1 = state_3442;
var statearr_3453_3473 = state_3442__$1;
(statearr_3453_3473[(2)] = inst_3433);

(statearr_3453_3473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3443 === (9))){
var state_3442__$1 = state_3442;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3454_3474 = state_3442__$1;
(statearr_3454_3474[(1)] = (11));

} else {
var statearr_3455_3475 = state_3442__$1;
(statearr_3455_3475[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3443 === (5))){
var inst_3419 = (state_3442[(7)]);
var state_3442__$1 = state_3442;
var statearr_3456_3476 = state_3442__$1;
(statearr_3456_3476[(2)] = inst_3419);

(statearr_3456_3476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3443 === (10))){
var inst_3438 = (state_3442[(2)]);
var state_3442__$1 = state_3442;
var statearr_3457_3477 = state_3442__$1;
(statearr_3457_3477[(2)] = inst_3438);

(statearr_3457_3477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3443 === (8))){
var inst_3419 = (state_3442[(7)]);
var inst_3429 = cljs.core.next.call(null,inst_3419);
var inst_3419__$1 = inst_3429;
var state_3442__$1 = (function (){var statearr_3458 = state_3442;
(statearr_3458[(7)] = inst_3419__$1);

return statearr_3458;
})();
var statearr_3459_3478 = state_3442__$1;
(statearr_3459_3478[(2)] = null);

(statearr_3459_3478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2884__auto__))
;
return ((function (switch__2794__auto__,c__2884__auto__){
return (function() {
var cljs$core$async$state_machine__2795__auto__ = null;
var cljs$core$async$state_machine__2795__auto____0 = (function (){
var statearr_3460 = [null,null,null,null,null,null,null,null];
(statearr_3460[(0)] = cljs$core$async$state_machine__2795__auto__);

(statearr_3460[(1)] = (1));

return statearr_3460;
});
var cljs$core$async$state_machine__2795__auto____1 = (function (state_3442){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_3442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e3461){if((e3461 instanceof Object)){
var ex__2798__auto__ = e3461;
var statearr_3462_3479 = state_3442;
(statearr_3462_3479[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3480 = state_3442;
state_3442 = G__3480;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$state_machine__2795__auto__ = function(state_3442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2795__auto____1.call(this,state_3442);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2795__auto____0;
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2795__auto____1;
return cljs$core$async$state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__))
})();
var state__2886__auto__ = (function (){var statearr_3463 = f__2885__auto__.call(null);
(statearr_3463[(6)] = c__2884__auto__);

return statearr_3463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__))
);

return c__2884__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async3481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3481 = (function (ch,cs,meta3482){
this.ch = ch;
this.cs = cs;
this.meta3482 = meta3482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_3483,meta3482__$1){
var self__ = this;
var _3483__$1 = this;
return (new cljs.core.async.t_cljs$core$async3481(self__.ch,self__.cs,meta3482__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async3481.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_3483){
var self__ = this;
var _3483__$1 = this;
return self__.meta3482;
});})(cs))
;

cljs.core.async.t_cljs$core$async3481.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3481.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async3481.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3481.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3481.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3481.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3481.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta3482","meta3482",1644286950,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async3481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3481";

cljs.core.async.t_cljs$core$async3481.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3481");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3481.
 */
cljs.core.async.__GT_t_cljs$core$async3481 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async3481(ch__$1,cs__$1,meta3482){
return (new cljs.core.async.t_cljs$core$async3481(ch__$1,cs__$1,meta3482));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async3481(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__2884__auto___3703 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___3703,cs,m,dchan,dctr,done){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___3703,cs,m,dchan,dctr,done){
return (function (state_3618){
var state_val_3619 = (state_3618[(1)]);
if((state_val_3619 === (7))){
var inst_3614 = (state_3618[(2)]);
var state_3618__$1 = state_3618;
var statearr_3620_3704 = state_3618__$1;
(statearr_3620_3704[(2)] = inst_3614);

(statearr_3620_3704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (20))){
var inst_3517 = (state_3618[(7)]);
var inst_3529 = cljs.core.first.call(null,inst_3517);
var inst_3530 = cljs.core.nth.call(null,inst_3529,(0),null);
var inst_3531 = cljs.core.nth.call(null,inst_3529,(1),null);
var state_3618__$1 = (function (){var statearr_3621 = state_3618;
(statearr_3621[(8)] = inst_3530);

return statearr_3621;
})();
if(cljs.core.truth_(inst_3531)){
var statearr_3622_3705 = state_3618__$1;
(statearr_3622_3705[(1)] = (22));

} else {
var statearr_3623_3706 = state_3618__$1;
(statearr_3623_3706[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (27))){
var inst_3566 = (state_3618[(9)]);
var inst_3561 = (state_3618[(10)]);
var inst_3559 = (state_3618[(11)]);
var inst_3486 = (state_3618[(12)]);
var inst_3566__$1 = cljs.core._nth.call(null,inst_3559,inst_3561);
var inst_3567 = cljs.core.async.put_BANG_.call(null,inst_3566__$1,inst_3486,done);
var state_3618__$1 = (function (){var statearr_3624 = state_3618;
(statearr_3624[(9)] = inst_3566__$1);

return statearr_3624;
})();
if(cljs.core.truth_(inst_3567)){
var statearr_3625_3707 = state_3618__$1;
(statearr_3625_3707[(1)] = (30));

} else {
var statearr_3626_3708 = state_3618__$1;
(statearr_3626_3708[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (1))){
var state_3618__$1 = state_3618;
var statearr_3627_3709 = state_3618__$1;
(statearr_3627_3709[(2)] = null);

(statearr_3627_3709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (24))){
var inst_3517 = (state_3618[(7)]);
var inst_3536 = (state_3618[(2)]);
var inst_3537 = cljs.core.next.call(null,inst_3517);
var inst_3495 = inst_3537;
var inst_3496 = null;
var inst_3497 = (0);
var inst_3498 = (0);
var state_3618__$1 = (function (){var statearr_3628 = state_3618;
(statearr_3628[(13)] = inst_3536);

(statearr_3628[(14)] = inst_3497);

(statearr_3628[(15)] = inst_3498);

(statearr_3628[(16)] = inst_3495);

(statearr_3628[(17)] = inst_3496);

return statearr_3628;
})();
var statearr_3629_3710 = state_3618__$1;
(statearr_3629_3710[(2)] = null);

(statearr_3629_3710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (39))){
var state_3618__$1 = state_3618;
var statearr_3633_3711 = state_3618__$1;
(statearr_3633_3711[(2)] = null);

(statearr_3633_3711[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (4))){
var inst_3486 = (state_3618[(12)]);
var inst_3486__$1 = (state_3618[(2)]);
var inst_3487 = (inst_3486__$1 == null);
var state_3618__$1 = (function (){var statearr_3634 = state_3618;
(statearr_3634[(12)] = inst_3486__$1);

return statearr_3634;
})();
if(cljs.core.truth_(inst_3487)){
var statearr_3635_3712 = state_3618__$1;
(statearr_3635_3712[(1)] = (5));

} else {
var statearr_3636_3713 = state_3618__$1;
(statearr_3636_3713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (15))){
var inst_3497 = (state_3618[(14)]);
var inst_3498 = (state_3618[(15)]);
var inst_3495 = (state_3618[(16)]);
var inst_3496 = (state_3618[(17)]);
var inst_3513 = (state_3618[(2)]);
var inst_3514 = (inst_3498 + (1));
var tmp3630 = inst_3497;
var tmp3631 = inst_3495;
var tmp3632 = inst_3496;
var inst_3495__$1 = tmp3631;
var inst_3496__$1 = tmp3632;
var inst_3497__$1 = tmp3630;
var inst_3498__$1 = inst_3514;
var state_3618__$1 = (function (){var statearr_3637 = state_3618;
(statearr_3637[(18)] = inst_3513);

(statearr_3637[(14)] = inst_3497__$1);

(statearr_3637[(15)] = inst_3498__$1);

(statearr_3637[(16)] = inst_3495__$1);

(statearr_3637[(17)] = inst_3496__$1);

return statearr_3637;
})();
var statearr_3638_3714 = state_3618__$1;
(statearr_3638_3714[(2)] = null);

(statearr_3638_3714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (21))){
var inst_3540 = (state_3618[(2)]);
var state_3618__$1 = state_3618;
var statearr_3642_3715 = state_3618__$1;
(statearr_3642_3715[(2)] = inst_3540);

(statearr_3642_3715[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (31))){
var inst_3566 = (state_3618[(9)]);
var inst_3570 = done.call(null,null);
var inst_3571 = cljs.core.async.untap_STAR_.call(null,m,inst_3566);
var state_3618__$1 = (function (){var statearr_3643 = state_3618;
(statearr_3643[(19)] = inst_3570);

return statearr_3643;
})();
var statearr_3644_3716 = state_3618__$1;
(statearr_3644_3716[(2)] = inst_3571);

(statearr_3644_3716[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (32))){
var inst_3558 = (state_3618[(20)]);
var inst_3561 = (state_3618[(10)]);
var inst_3560 = (state_3618[(21)]);
var inst_3559 = (state_3618[(11)]);
var inst_3573 = (state_3618[(2)]);
var inst_3574 = (inst_3561 + (1));
var tmp3639 = inst_3558;
var tmp3640 = inst_3560;
var tmp3641 = inst_3559;
var inst_3558__$1 = tmp3639;
var inst_3559__$1 = tmp3641;
var inst_3560__$1 = tmp3640;
var inst_3561__$1 = inst_3574;
var state_3618__$1 = (function (){var statearr_3645 = state_3618;
(statearr_3645[(22)] = inst_3573);

(statearr_3645[(20)] = inst_3558__$1);

(statearr_3645[(10)] = inst_3561__$1);

(statearr_3645[(21)] = inst_3560__$1);

(statearr_3645[(11)] = inst_3559__$1);

return statearr_3645;
})();
var statearr_3646_3717 = state_3618__$1;
(statearr_3646_3717[(2)] = null);

(statearr_3646_3717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (40))){
var inst_3586 = (state_3618[(23)]);
var inst_3590 = done.call(null,null);
var inst_3591 = cljs.core.async.untap_STAR_.call(null,m,inst_3586);
var state_3618__$1 = (function (){var statearr_3647 = state_3618;
(statearr_3647[(24)] = inst_3590);

return statearr_3647;
})();
var statearr_3648_3718 = state_3618__$1;
(statearr_3648_3718[(2)] = inst_3591);

(statearr_3648_3718[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (33))){
var inst_3577 = (state_3618[(25)]);
var inst_3579 = cljs.core.chunked_seq_QMARK_.call(null,inst_3577);
var state_3618__$1 = state_3618;
if(inst_3579){
var statearr_3649_3719 = state_3618__$1;
(statearr_3649_3719[(1)] = (36));

} else {
var statearr_3650_3720 = state_3618__$1;
(statearr_3650_3720[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (13))){
var inst_3507 = (state_3618[(26)]);
var inst_3510 = cljs.core.async.close_BANG_.call(null,inst_3507);
var state_3618__$1 = state_3618;
var statearr_3651_3721 = state_3618__$1;
(statearr_3651_3721[(2)] = inst_3510);

(statearr_3651_3721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (22))){
var inst_3530 = (state_3618[(8)]);
var inst_3533 = cljs.core.async.close_BANG_.call(null,inst_3530);
var state_3618__$1 = state_3618;
var statearr_3652_3722 = state_3618__$1;
(statearr_3652_3722[(2)] = inst_3533);

(statearr_3652_3722[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (36))){
var inst_3577 = (state_3618[(25)]);
var inst_3581 = cljs.core.chunk_first.call(null,inst_3577);
var inst_3582 = cljs.core.chunk_rest.call(null,inst_3577);
var inst_3583 = cljs.core.count.call(null,inst_3581);
var inst_3558 = inst_3582;
var inst_3559 = inst_3581;
var inst_3560 = inst_3583;
var inst_3561 = (0);
var state_3618__$1 = (function (){var statearr_3653 = state_3618;
(statearr_3653[(20)] = inst_3558);

(statearr_3653[(10)] = inst_3561);

(statearr_3653[(21)] = inst_3560);

(statearr_3653[(11)] = inst_3559);

return statearr_3653;
})();
var statearr_3654_3723 = state_3618__$1;
(statearr_3654_3723[(2)] = null);

(statearr_3654_3723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (41))){
var inst_3577 = (state_3618[(25)]);
var inst_3593 = (state_3618[(2)]);
var inst_3594 = cljs.core.next.call(null,inst_3577);
var inst_3558 = inst_3594;
var inst_3559 = null;
var inst_3560 = (0);
var inst_3561 = (0);
var state_3618__$1 = (function (){var statearr_3655 = state_3618;
(statearr_3655[(20)] = inst_3558);

(statearr_3655[(10)] = inst_3561);

(statearr_3655[(27)] = inst_3593);

(statearr_3655[(21)] = inst_3560);

(statearr_3655[(11)] = inst_3559);

return statearr_3655;
})();
var statearr_3656_3724 = state_3618__$1;
(statearr_3656_3724[(2)] = null);

(statearr_3656_3724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (43))){
var state_3618__$1 = state_3618;
var statearr_3657_3725 = state_3618__$1;
(statearr_3657_3725[(2)] = null);

(statearr_3657_3725[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (29))){
var inst_3602 = (state_3618[(2)]);
var state_3618__$1 = state_3618;
var statearr_3658_3726 = state_3618__$1;
(statearr_3658_3726[(2)] = inst_3602);

(statearr_3658_3726[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (44))){
var inst_3611 = (state_3618[(2)]);
var state_3618__$1 = (function (){var statearr_3659 = state_3618;
(statearr_3659[(28)] = inst_3611);

return statearr_3659;
})();
var statearr_3660_3727 = state_3618__$1;
(statearr_3660_3727[(2)] = null);

(statearr_3660_3727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (6))){
var inst_3550 = (state_3618[(29)]);
var inst_3549 = cljs.core.deref.call(null,cs);
var inst_3550__$1 = cljs.core.keys.call(null,inst_3549);
var inst_3551 = cljs.core.count.call(null,inst_3550__$1);
var inst_3552 = cljs.core.reset_BANG_.call(null,dctr,inst_3551);
var inst_3557 = cljs.core.seq.call(null,inst_3550__$1);
var inst_3558 = inst_3557;
var inst_3559 = null;
var inst_3560 = (0);
var inst_3561 = (0);
var state_3618__$1 = (function (){var statearr_3661 = state_3618;
(statearr_3661[(20)] = inst_3558);

(statearr_3661[(10)] = inst_3561);

(statearr_3661[(30)] = inst_3552);

(statearr_3661[(29)] = inst_3550__$1);

(statearr_3661[(21)] = inst_3560);

(statearr_3661[(11)] = inst_3559);

return statearr_3661;
})();
var statearr_3662_3728 = state_3618__$1;
(statearr_3662_3728[(2)] = null);

(statearr_3662_3728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (28))){
var inst_3558 = (state_3618[(20)]);
var inst_3577 = (state_3618[(25)]);
var inst_3577__$1 = cljs.core.seq.call(null,inst_3558);
var state_3618__$1 = (function (){var statearr_3663 = state_3618;
(statearr_3663[(25)] = inst_3577__$1);

return statearr_3663;
})();
if(inst_3577__$1){
var statearr_3664_3729 = state_3618__$1;
(statearr_3664_3729[(1)] = (33));

} else {
var statearr_3665_3730 = state_3618__$1;
(statearr_3665_3730[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (25))){
var inst_3561 = (state_3618[(10)]);
var inst_3560 = (state_3618[(21)]);
var inst_3563 = (inst_3561 < inst_3560);
var inst_3564 = inst_3563;
var state_3618__$1 = state_3618;
if(cljs.core.truth_(inst_3564)){
var statearr_3666_3731 = state_3618__$1;
(statearr_3666_3731[(1)] = (27));

} else {
var statearr_3667_3732 = state_3618__$1;
(statearr_3667_3732[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (34))){
var state_3618__$1 = state_3618;
var statearr_3668_3733 = state_3618__$1;
(statearr_3668_3733[(2)] = null);

(statearr_3668_3733[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (17))){
var state_3618__$1 = state_3618;
var statearr_3669_3734 = state_3618__$1;
(statearr_3669_3734[(2)] = null);

(statearr_3669_3734[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (3))){
var inst_3616 = (state_3618[(2)]);
var state_3618__$1 = state_3618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3618__$1,inst_3616);
} else {
if((state_val_3619 === (12))){
var inst_3545 = (state_3618[(2)]);
var state_3618__$1 = state_3618;
var statearr_3670_3735 = state_3618__$1;
(statearr_3670_3735[(2)] = inst_3545);

(statearr_3670_3735[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (2))){
var state_3618__$1 = state_3618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3618__$1,(4),ch);
} else {
if((state_val_3619 === (23))){
var state_3618__$1 = state_3618;
var statearr_3671_3736 = state_3618__$1;
(statearr_3671_3736[(2)] = null);

(statearr_3671_3736[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (35))){
var inst_3600 = (state_3618[(2)]);
var state_3618__$1 = state_3618;
var statearr_3672_3737 = state_3618__$1;
(statearr_3672_3737[(2)] = inst_3600);

(statearr_3672_3737[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (19))){
var inst_3517 = (state_3618[(7)]);
var inst_3521 = cljs.core.chunk_first.call(null,inst_3517);
var inst_3522 = cljs.core.chunk_rest.call(null,inst_3517);
var inst_3523 = cljs.core.count.call(null,inst_3521);
var inst_3495 = inst_3522;
var inst_3496 = inst_3521;
var inst_3497 = inst_3523;
var inst_3498 = (0);
var state_3618__$1 = (function (){var statearr_3673 = state_3618;
(statearr_3673[(14)] = inst_3497);

(statearr_3673[(15)] = inst_3498);

(statearr_3673[(16)] = inst_3495);

(statearr_3673[(17)] = inst_3496);

return statearr_3673;
})();
var statearr_3674_3738 = state_3618__$1;
(statearr_3674_3738[(2)] = null);

(statearr_3674_3738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (11))){
var inst_3517 = (state_3618[(7)]);
var inst_3495 = (state_3618[(16)]);
var inst_3517__$1 = cljs.core.seq.call(null,inst_3495);
var state_3618__$1 = (function (){var statearr_3675 = state_3618;
(statearr_3675[(7)] = inst_3517__$1);

return statearr_3675;
})();
if(inst_3517__$1){
var statearr_3676_3739 = state_3618__$1;
(statearr_3676_3739[(1)] = (16));

} else {
var statearr_3677_3740 = state_3618__$1;
(statearr_3677_3740[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (9))){
var inst_3547 = (state_3618[(2)]);
var state_3618__$1 = state_3618;
var statearr_3678_3741 = state_3618__$1;
(statearr_3678_3741[(2)] = inst_3547);

(statearr_3678_3741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (5))){
var inst_3493 = cljs.core.deref.call(null,cs);
var inst_3494 = cljs.core.seq.call(null,inst_3493);
var inst_3495 = inst_3494;
var inst_3496 = null;
var inst_3497 = (0);
var inst_3498 = (0);
var state_3618__$1 = (function (){var statearr_3679 = state_3618;
(statearr_3679[(14)] = inst_3497);

(statearr_3679[(15)] = inst_3498);

(statearr_3679[(16)] = inst_3495);

(statearr_3679[(17)] = inst_3496);

return statearr_3679;
})();
var statearr_3680_3742 = state_3618__$1;
(statearr_3680_3742[(2)] = null);

(statearr_3680_3742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (14))){
var state_3618__$1 = state_3618;
var statearr_3681_3743 = state_3618__$1;
(statearr_3681_3743[(2)] = null);

(statearr_3681_3743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (45))){
var inst_3608 = (state_3618[(2)]);
var state_3618__$1 = state_3618;
var statearr_3682_3744 = state_3618__$1;
(statearr_3682_3744[(2)] = inst_3608);

(statearr_3682_3744[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (26))){
var inst_3550 = (state_3618[(29)]);
var inst_3604 = (state_3618[(2)]);
var inst_3605 = cljs.core.seq.call(null,inst_3550);
var state_3618__$1 = (function (){var statearr_3683 = state_3618;
(statearr_3683[(31)] = inst_3604);

return statearr_3683;
})();
if(inst_3605){
var statearr_3684_3745 = state_3618__$1;
(statearr_3684_3745[(1)] = (42));

} else {
var statearr_3685_3746 = state_3618__$1;
(statearr_3685_3746[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (16))){
var inst_3517 = (state_3618[(7)]);
var inst_3519 = cljs.core.chunked_seq_QMARK_.call(null,inst_3517);
var state_3618__$1 = state_3618;
if(inst_3519){
var statearr_3686_3747 = state_3618__$1;
(statearr_3686_3747[(1)] = (19));

} else {
var statearr_3687_3748 = state_3618__$1;
(statearr_3687_3748[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (38))){
var inst_3597 = (state_3618[(2)]);
var state_3618__$1 = state_3618;
var statearr_3688_3749 = state_3618__$1;
(statearr_3688_3749[(2)] = inst_3597);

(statearr_3688_3749[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (30))){
var state_3618__$1 = state_3618;
var statearr_3689_3750 = state_3618__$1;
(statearr_3689_3750[(2)] = null);

(statearr_3689_3750[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (10))){
var inst_3498 = (state_3618[(15)]);
var inst_3496 = (state_3618[(17)]);
var inst_3506 = cljs.core._nth.call(null,inst_3496,inst_3498);
var inst_3507 = cljs.core.nth.call(null,inst_3506,(0),null);
var inst_3508 = cljs.core.nth.call(null,inst_3506,(1),null);
var state_3618__$1 = (function (){var statearr_3690 = state_3618;
(statearr_3690[(26)] = inst_3507);

return statearr_3690;
})();
if(cljs.core.truth_(inst_3508)){
var statearr_3691_3751 = state_3618__$1;
(statearr_3691_3751[(1)] = (13));

} else {
var statearr_3692_3752 = state_3618__$1;
(statearr_3692_3752[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (18))){
var inst_3543 = (state_3618[(2)]);
var state_3618__$1 = state_3618;
var statearr_3693_3753 = state_3618__$1;
(statearr_3693_3753[(2)] = inst_3543);

(statearr_3693_3753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (42))){
var state_3618__$1 = state_3618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3618__$1,(45),dchan);
} else {
if((state_val_3619 === (37))){
var inst_3586 = (state_3618[(23)]);
var inst_3577 = (state_3618[(25)]);
var inst_3486 = (state_3618[(12)]);
var inst_3586__$1 = cljs.core.first.call(null,inst_3577);
var inst_3587 = cljs.core.async.put_BANG_.call(null,inst_3586__$1,inst_3486,done);
var state_3618__$1 = (function (){var statearr_3694 = state_3618;
(statearr_3694[(23)] = inst_3586__$1);

return statearr_3694;
})();
if(cljs.core.truth_(inst_3587)){
var statearr_3695_3754 = state_3618__$1;
(statearr_3695_3754[(1)] = (39));

} else {
var statearr_3696_3755 = state_3618__$1;
(statearr_3696_3755[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3619 === (8))){
var inst_3497 = (state_3618[(14)]);
var inst_3498 = (state_3618[(15)]);
var inst_3500 = (inst_3498 < inst_3497);
var inst_3501 = inst_3500;
var state_3618__$1 = state_3618;
if(cljs.core.truth_(inst_3501)){
var statearr_3697_3756 = state_3618__$1;
(statearr_3697_3756[(1)] = (10));

} else {
var statearr_3698_3757 = state_3618__$1;
(statearr_3698_3757[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2884__auto___3703,cs,m,dchan,dctr,done))
;
return ((function (switch__2794__auto__,c__2884__auto___3703,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__2795__auto__ = null;
var cljs$core$async$mult_$_state_machine__2795__auto____0 = (function (){
var statearr_3699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3699[(0)] = cljs$core$async$mult_$_state_machine__2795__auto__);

(statearr_3699[(1)] = (1));

return statearr_3699;
});
var cljs$core$async$mult_$_state_machine__2795__auto____1 = (function (state_3618){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_3618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e3700){if((e3700 instanceof Object)){
var ex__2798__auto__ = e3700;
var statearr_3701_3758 = state_3618;
(statearr_3701_3758[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3759 = state_3618;
state_3618 = G__3759;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__2795__auto__ = function(state_3618){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__2795__auto____1.call(this,state_3618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__2795__auto____0;
cljs$core$async$mult_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__2795__auto____1;
return cljs$core$async$mult_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___3703,cs,m,dchan,dctr,done))
})();
var state__2886__auto__ = (function (){var statearr_3702 = f__2885__auto__.call(null);
(statearr_3702[(6)] = c__2884__auto___3703);

return statearr_3702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___3703,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__3761 = arguments.length;
switch (G__3761) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___3773 = arguments.length;
var i__4500__auto___3774 = (0);
while(true){
if((i__4500__auto___3774 < len__4499__auto___3773)){
args__4502__auto__.push((arguments[i__4500__auto___3774]));

var G__3775 = (i__4500__auto___3774 + (1));
i__4500__auto___3774 = G__3775;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__3767){
var map__3768 = p__3767;
var map__3768__$1 = ((((!((map__3768 == null)))?(((((map__3768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3768):map__3768);
var opts = map__3768__$1;
var statearr_3770_3776 = state;
(statearr_3770_3776[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__3768,map__3768__$1,opts){
return (function (val){
var statearr_3771_3777 = state;
(statearr_3771_3777[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__3768,map__3768__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_3772_3778 = state;
(statearr_3772_3778[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq3763){
var G__3764 = cljs.core.first.call(null,seq3763);
var seq3763__$1 = cljs.core.next.call(null,seq3763);
var G__3765 = cljs.core.first.call(null,seq3763__$1);
var seq3763__$2 = cljs.core.next.call(null,seq3763__$1);
var G__3766 = cljs.core.first.call(null,seq3763__$2);
var seq3763__$3 = cljs.core.next.call(null,seq3763__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3764,G__3765,G__3766,seq3763__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async3779 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3779 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta3780){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta3780 = meta3780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_3781,meta3780__$1){
var self__ = this;
var _3781__$1 = this;
return (new cljs.core.async.t_cljs$core$async3779(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta3780__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_3781){
var self__ = this;
var _3781__$1 = this;
return self__.meta3780;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3779.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3779.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3779.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3779.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3779.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3779.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3779.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3779.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3779.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta3780","meta3780",-665755890,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async3779.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3779";

cljs.core.async.t_cljs$core$async3779.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3779");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3779.
 */
cljs.core.async.__GT_t_cljs$core$async3779 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async3779(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta3780){
return (new cljs.core.async.t_cljs$core$async3779(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta3780));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async3779(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2884__auto___3943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___3943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___3943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_3883){
var state_val_3884 = (state_3883[(1)]);
if((state_val_3884 === (7))){
var inst_3798 = (state_3883[(2)]);
var state_3883__$1 = state_3883;
var statearr_3885_3944 = state_3883__$1;
(statearr_3885_3944[(2)] = inst_3798);

(statearr_3885_3944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (20))){
var inst_3810 = (state_3883[(7)]);
var state_3883__$1 = state_3883;
var statearr_3886_3945 = state_3883__$1;
(statearr_3886_3945[(2)] = inst_3810);

(statearr_3886_3945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (27))){
var state_3883__$1 = state_3883;
var statearr_3887_3946 = state_3883__$1;
(statearr_3887_3946[(2)] = null);

(statearr_3887_3946[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (1))){
var inst_3785 = (state_3883[(8)]);
var inst_3785__$1 = calc_state.call(null);
var inst_3787 = (inst_3785__$1 == null);
var inst_3788 = cljs.core.not.call(null,inst_3787);
var state_3883__$1 = (function (){var statearr_3888 = state_3883;
(statearr_3888[(8)] = inst_3785__$1);

return statearr_3888;
})();
if(inst_3788){
var statearr_3889_3947 = state_3883__$1;
(statearr_3889_3947[(1)] = (2));

} else {
var statearr_3890_3948 = state_3883__$1;
(statearr_3890_3948[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (24))){
var inst_3857 = (state_3883[(9)]);
var inst_3843 = (state_3883[(10)]);
var inst_3834 = (state_3883[(11)]);
var inst_3857__$1 = inst_3834.call(null,inst_3843);
var state_3883__$1 = (function (){var statearr_3891 = state_3883;
(statearr_3891[(9)] = inst_3857__$1);

return statearr_3891;
})();
if(cljs.core.truth_(inst_3857__$1)){
var statearr_3892_3949 = state_3883__$1;
(statearr_3892_3949[(1)] = (29));

} else {
var statearr_3893_3950 = state_3883__$1;
(statearr_3893_3950[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (4))){
var inst_3801 = (state_3883[(2)]);
var state_3883__$1 = state_3883;
if(cljs.core.truth_(inst_3801)){
var statearr_3894_3951 = state_3883__$1;
(statearr_3894_3951[(1)] = (8));

} else {
var statearr_3895_3952 = state_3883__$1;
(statearr_3895_3952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (15))){
var inst_3828 = (state_3883[(2)]);
var state_3883__$1 = state_3883;
if(cljs.core.truth_(inst_3828)){
var statearr_3896_3953 = state_3883__$1;
(statearr_3896_3953[(1)] = (19));

} else {
var statearr_3897_3954 = state_3883__$1;
(statearr_3897_3954[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (21))){
var inst_3833 = (state_3883[(12)]);
var inst_3833__$1 = (state_3883[(2)]);
var inst_3834 = cljs.core.get.call(null,inst_3833__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3835 = cljs.core.get.call(null,inst_3833__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3836 = cljs.core.get.call(null,inst_3833__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_3883__$1 = (function (){var statearr_3898 = state_3883;
(statearr_3898[(13)] = inst_3835);

(statearr_3898[(11)] = inst_3834);

(statearr_3898[(12)] = inst_3833__$1);

return statearr_3898;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_3883__$1,(22),inst_3836);
} else {
if((state_val_3884 === (31))){
var inst_3865 = (state_3883[(2)]);
var state_3883__$1 = state_3883;
if(cljs.core.truth_(inst_3865)){
var statearr_3899_3955 = state_3883__$1;
(statearr_3899_3955[(1)] = (32));

} else {
var statearr_3900_3956 = state_3883__$1;
(statearr_3900_3956[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (32))){
var inst_3842 = (state_3883[(14)]);
var state_3883__$1 = state_3883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3883__$1,(35),out,inst_3842);
} else {
if((state_val_3884 === (33))){
var inst_3833 = (state_3883[(12)]);
var inst_3810 = inst_3833;
var state_3883__$1 = (function (){var statearr_3901 = state_3883;
(statearr_3901[(7)] = inst_3810);

return statearr_3901;
})();
var statearr_3902_3957 = state_3883__$1;
(statearr_3902_3957[(2)] = null);

(statearr_3902_3957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (13))){
var inst_3810 = (state_3883[(7)]);
var inst_3817 = inst_3810.cljs$lang$protocol_mask$partition0$;
var inst_3818 = (inst_3817 & (64));
var inst_3819 = inst_3810.cljs$core$ISeq$;
var inst_3820 = (cljs.core.PROTOCOL_SENTINEL === inst_3819);
var inst_3821 = ((inst_3818) || (inst_3820));
var state_3883__$1 = state_3883;
if(cljs.core.truth_(inst_3821)){
var statearr_3903_3958 = state_3883__$1;
(statearr_3903_3958[(1)] = (16));

} else {
var statearr_3904_3959 = state_3883__$1;
(statearr_3904_3959[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (22))){
var inst_3843 = (state_3883[(10)]);
var inst_3842 = (state_3883[(14)]);
var inst_3841 = (state_3883[(2)]);
var inst_3842__$1 = cljs.core.nth.call(null,inst_3841,(0),null);
var inst_3843__$1 = cljs.core.nth.call(null,inst_3841,(1),null);
var inst_3844 = (inst_3842__$1 == null);
var inst_3845 = cljs.core._EQ_.call(null,inst_3843__$1,change);
var inst_3846 = ((inst_3844) || (inst_3845));
var state_3883__$1 = (function (){var statearr_3905 = state_3883;
(statearr_3905[(10)] = inst_3843__$1);

(statearr_3905[(14)] = inst_3842__$1);

return statearr_3905;
})();
if(cljs.core.truth_(inst_3846)){
var statearr_3906_3960 = state_3883__$1;
(statearr_3906_3960[(1)] = (23));

} else {
var statearr_3907_3961 = state_3883__$1;
(statearr_3907_3961[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (36))){
var inst_3833 = (state_3883[(12)]);
var inst_3810 = inst_3833;
var state_3883__$1 = (function (){var statearr_3908 = state_3883;
(statearr_3908[(7)] = inst_3810);

return statearr_3908;
})();
var statearr_3909_3962 = state_3883__$1;
(statearr_3909_3962[(2)] = null);

(statearr_3909_3962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (29))){
var inst_3857 = (state_3883[(9)]);
var state_3883__$1 = state_3883;
var statearr_3910_3963 = state_3883__$1;
(statearr_3910_3963[(2)] = inst_3857);

(statearr_3910_3963[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (6))){
var state_3883__$1 = state_3883;
var statearr_3911_3964 = state_3883__$1;
(statearr_3911_3964[(2)] = false);

(statearr_3911_3964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (28))){
var inst_3853 = (state_3883[(2)]);
var inst_3854 = calc_state.call(null);
var inst_3810 = inst_3854;
var state_3883__$1 = (function (){var statearr_3912 = state_3883;
(statearr_3912[(15)] = inst_3853);

(statearr_3912[(7)] = inst_3810);

return statearr_3912;
})();
var statearr_3913_3965 = state_3883__$1;
(statearr_3913_3965[(2)] = null);

(statearr_3913_3965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (25))){
var inst_3879 = (state_3883[(2)]);
var state_3883__$1 = state_3883;
var statearr_3914_3966 = state_3883__$1;
(statearr_3914_3966[(2)] = inst_3879);

(statearr_3914_3966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (34))){
var inst_3877 = (state_3883[(2)]);
var state_3883__$1 = state_3883;
var statearr_3915_3967 = state_3883__$1;
(statearr_3915_3967[(2)] = inst_3877);

(statearr_3915_3967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (17))){
var state_3883__$1 = state_3883;
var statearr_3916_3968 = state_3883__$1;
(statearr_3916_3968[(2)] = false);

(statearr_3916_3968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (3))){
var state_3883__$1 = state_3883;
var statearr_3917_3969 = state_3883__$1;
(statearr_3917_3969[(2)] = false);

(statearr_3917_3969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (12))){
var inst_3881 = (state_3883[(2)]);
var state_3883__$1 = state_3883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3883__$1,inst_3881);
} else {
if((state_val_3884 === (2))){
var inst_3785 = (state_3883[(8)]);
var inst_3790 = inst_3785.cljs$lang$protocol_mask$partition0$;
var inst_3791 = (inst_3790 & (64));
var inst_3792 = inst_3785.cljs$core$ISeq$;
var inst_3793 = (cljs.core.PROTOCOL_SENTINEL === inst_3792);
var inst_3794 = ((inst_3791) || (inst_3793));
var state_3883__$1 = state_3883;
if(cljs.core.truth_(inst_3794)){
var statearr_3918_3970 = state_3883__$1;
(statearr_3918_3970[(1)] = (5));

} else {
var statearr_3919_3971 = state_3883__$1;
(statearr_3919_3971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (23))){
var inst_3842 = (state_3883[(14)]);
var inst_3848 = (inst_3842 == null);
var state_3883__$1 = state_3883;
if(cljs.core.truth_(inst_3848)){
var statearr_3920_3972 = state_3883__$1;
(statearr_3920_3972[(1)] = (26));

} else {
var statearr_3921_3973 = state_3883__$1;
(statearr_3921_3973[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (35))){
var inst_3868 = (state_3883[(2)]);
var state_3883__$1 = state_3883;
if(cljs.core.truth_(inst_3868)){
var statearr_3922_3974 = state_3883__$1;
(statearr_3922_3974[(1)] = (36));

} else {
var statearr_3923_3975 = state_3883__$1;
(statearr_3923_3975[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (19))){
var inst_3810 = (state_3883[(7)]);
var inst_3830 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3810);
var state_3883__$1 = state_3883;
var statearr_3924_3976 = state_3883__$1;
(statearr_3924_3976[(2)] = inst_3830);

(statearr_3924_3976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (11))){
var inst_3810 = (state_3883[(7)]);
var inst_3814 = (inst_3810 == null);
var inst_3815 = cljs.core.not.call(null,inst_3814);
var state_3883__$1 = state_3883;
if(inst_3815){
var statearr_3925_3977 = state_3883__$1;
(statearr_3925_3977[(1)] = (13));

} else {
var statearr_3926_3978 = state_3883__$1;
(statearr_3926_3978[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (9))){
var inst_3785 = (state_3883[(8)]);
var state_3883__$1 = state_3883;
var statearr_3927_3979 = state_3883__$1;
(statearr_3927_3979[(2)] = inst_3785);

(statearr_3927_3979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (5))){
var state_3883__$1 = state_3883;
var statearr_3928_3980 = state_3883__$1;
(statearr_3928_3980[(2)] = true);

(statearr_3928_3980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (14))){
var state_3883__$1 = state_3883;
var statearr_3929_3981 = state_3883__$1;
(statearr_3929_3981[(2)] = false);

(statearr_3929_3981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (26))){
var inst_3843 = (state_3883[(10)]);
var inst_3850 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_3843);
var state_3883__$1 = state_3883;
var statearr_3930_3982 = state_3883__$1;
(statearr_3930_3982[(2)] = inst_3850);

(statearr_3930_3982[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (16))){
var state_3883__$1 = state_3883;
var statearr_3931_3983 = state_3883__$1;
(statearr_3931_3983[(2)] = true);

(statearr_3931_3983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (38))){
var inst_3873 = (state_3883[(2)]);
var state_3883__$1 = state_3883;
var statearr_3932_3984 = state_3883__$1;
(statearr_3932_3984[(2)] = inst_3873);

(statearr_3932_3984[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (30))){
var inst_3835 = (state_3883[(13)]);
var inst_3843 = (state_3883[(10)]);
var inst_3834 = (state_3883[(11)]);
var inst_3860 = cljs.core.empty_QMARK_.call(null,inst_3834);
var inst_3861 = inst_3835.call(null,inst_3843);
var inst_3862 = cljs.core.not.call(null,inst_3861);
var inst_3863 = ((inst_3860) && (inst_3862));
var state_3883__$1 = state_3883;
var statearr_3933_3985 = state_3883__$1;
(statearr_3933_3985[(2)] = inst_3863);

(statearr_3933_3985[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (10))){
var inst_3785 = (state_3883[(8)]);
var inst_3806 = (state_3883[(2)]);
var inst_3807 = cljs.core.get.call(null,inst_3806,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_3808 = cljs.core.get.call(null,inst_3806,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_3809 = cljs.core.get.call(null,inst_3806,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_3810 = inst_3785;
var state_3883__$1 = (function (){var statearr_3934 = state_3883;
(statearr_3934[(16)] = inst_3807);

(statearr_3934[(17)] = inst_3808);

(statearr_3934[(7)] = inst_3810);

(statearr_3934[(18)] = inst_3809);

return statearr_3934;
})();
var statearr_3935_3986 = state_3883__$1;
(statearr_3935_3986[(2)] = null);

(statearr_3935_3986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (18))){
var inst_3825 = (state_3883[(2)]);
var state_3883__$1 = state_3883;
var statearr_3936_3987 = state_3883__$1;
(statearr_3936_3987[(2)] = inst_3825);

(statearr_3936_3987[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (37))){
var state_3883__$1 = state_3883;
var statearr_3937_3988 = state_3883__$1;
(statearr_3937_3988[(2)] = null);

(statearr_3937_3988[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3884 === (8))){
var inst_3785 = (state_3883[(8)]);
var inst_3803 = cljs.core.apply.call(null,cljs.core.hash_map,inst_3785);
var state_3883__$1 = state_3883;
var statearr_3938_3989 = state_3883__$1;
(statearr_3938_3989[(2)] = inst_3803);

(statearr_3938_3989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2884__auto___3943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__2794__auto__,c__2884__auto___3943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__2795__auto__ = null;
var cljs$core$async$mix_$_state_machine__2795__auto____0 = (function (){
var statearr_3939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3939[(0)] = cljs$core$async$mix_$_state_machine__2795__auto__);

(statearr_3939[(1)] = (1));

return statearr_3939;
});
var cljs$core$async$mix_$_state_machine__2795__auto____1 = (function (state_3883){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_3883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e3940){if((e3940 instanceof Object)){
var ex__2798__auto__ = e3940;
var statearr_3941_3990 = state_3883;
(statearr_3941_3990[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3991 = state_3883;
state_3883 = G__3991;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__2795__auto__ = function(state_3883){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__2795__auto____1.call(this,state_3883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__2795__auto____0;
cljs$core$async$mix_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__2795__auto____1;
return cljs$core$async$mix_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___3943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__2886__auto__ = (function (){var statearr_3942 = f__2885__auto__.call(null);
(statearr_3942[(6)] = c__2884__auto___3943);

return statearr_3942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___3943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__3993 = arguments.length;
switch (G__3993) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__3997 = arguments.length;
switch (G__3997) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__3995_SHARP_){
if(cljs.core.truth_(p1__3995_SHARP_.call(null,topic))){
return p1__3995_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__3995_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async3998 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3998 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta3999){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta3999 = meta3999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_4000,meta3999__$1){
var self__ = this;
var _4000__$1 = this;
return (new cljs.core.async.t_cljs$core$async3998(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta3999__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3998.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_4000){
var self__ = this;
var _4000__$1 = this;
return self__.meta3999;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3998.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3998.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3998.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3998.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3998.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3998.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3998.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3998.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta3999","meta3999",-980834860,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async3998.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3998";

cljs.core.async.t_cljs$core$async3998.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3998");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3998.
 */
cljs.core.async.__GT_t_cljs$core$async3998 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async3998(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta3999){
return (new cljs.core.async.t_cljs$core$async3998(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta3999));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async3998(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__2884__auto___4118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___4118,mults,ensure_mult,p){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___4118,mults,ensure_mult,p){
return (function (state_4072){
var state_val_4073 = (state_4072[(1)]);
if((state_val_4073 === (7))){
var inst_4068 = (state_4072[(2)]);
var state_4072__$1 = state_4072;
var statearr_4074_4119 = state_4072__$1;
(statearr_4074_4119[(2)] = inst_4068);

(statearr_4074_4119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (20))){
var state_4072__$1 = state_4072;
var statearr_4075_4120 = state_4072__$1;
(statearr_4075_4120[(2)] = null);

(statearr_4075_4120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (1))){
var state_4072__$1 = state_4072;
var statearr_4076_4121 = state_4072__$1;
(statearr_4076_4121[(2)] = null);

(statearr_4076_4121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (24))){
var inst_4051 = (state_4072[(7)]);
var inst_4060 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_4051);
var state_4072__$1 = state_4072;
var statearr_4077_4122 = state_4072__$1;
(statearr_4077_4122[(2)] = inst_4060);

(statearr_4077_4122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (4))){
var inst_4003 = (state_4072[(8)]);
var inst_4003__$1 = (state_4072[(2)]);
var inst_4004 = (inst_4003__$1 == null);
var state_4072__$1 = (function (){var statearr_4078 = state_4072;
(statearr_4078[(8)] = inst_4003__$1);

return statearr_4078;
})();
if(cljs.core.truth_(inst_4004)){
var statearr_4079_4123 = state_4072__$1;
(statearr_4079_4123[(1)] = (5));

} else {
var statearr_4080_4124 = state_4072__$1;
(statearr_4080_4124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (15))){
var inst_4045 = (state_4072[(2)]);
var state_4072__$1 = state_4072;
var statearr_4081_4125 = state_4072__$1;
(statearr_4081_4125[(2)] = inst_4045);

(statearr_4081_4125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (21))){
var inst_4065 = (state_4072[(2)]);
var state_4072__$1 = (function (){var statearr_4082 = state_4072;
(statearr_4082[(9)] = inst_4065);

return statearr_4082;
})();
var statearr_4083_4126 = state_4072__$1;
(statearr_4083_4126[(2)] = null);

(statearr_4083_4126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (13))){
var inst_4027 = (state_4072[(10)]);
var inst_4029 = cljs.core.chunked_seq_QMARK_.call(null,inst_4027);
var state_4072__$1 = state_4072;
if(inst_4029){
var statearr_4084_4127 = state_4072__$1;
(statearr_4084_4127[(1)] = (16));

} else {
var statearr_4085_4128 = state_4072__$1;
(statearr_4085_4128[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (22))){
var inst_4057 = (state_4072[(2)]);
var state_4072__$1 = state_4072;
if(cljs.core.truth_(inst_4057)){
var statearr_4086_4129 = state_4072__$1;
(statearr_4086_4129[(1)] = (23));

} else {
var statearr_4087_4130 = state_4072__$1;
(statearr_4087_4130[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (6))){
var inst_4003 = (state_4072[(8)]);
var inst_4053 = (state_4072[(11)]);
var inst_4051 = (state_4072[(7)]);
var inst_4051__$1 = topic_fn.call(null,inst_4003);
var inst_4052 = cljs.core.deref.call(null,mults);
var inst_4053__$1 = cljs.core.get.call(null,inst_4052,inst_4051__$1);
var state_4072__$1 = (function (){var statearr_4088 = state_4072;
(statearr_4088[(11)] = inst_4053__$1);

(statearr_4088[(7)] = inst_4051__$1);

return statearr_4088;
})();
if(cljs.core.truth_(inst_4053__$1)){
var statearr_4089_4131 = state_4072__$1;
(statearr_4089_4131[(1)] = (19));

} else {
var statearr_4090_4132 = state_4072__$1;
(statearr_4090_4132[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (25))){
var inst_4062 = (state_4072[(2)]);
var state_4072__$1 = state_4072;
var statearr_4091_4133 = state_4072__$1;
(statearr_4091_4133[(2)] = inst_4062);

(statearr_4091_4133[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (17))){
var inst_4027 = (state_4072[(10)]);
var inst_4036 = cljs.core.first.call(null,inst_4027);
var inst_4037 = cljs.core.async.muxch_STAR_.call(null,inst_4036);
var inst_4038 = cljs.core.async.close_BANG_.call(null,inst_4037);
var inst_4039 = cljs.core.next.call(null,inst_4027);
var inst_4013 = inst_4039;
var inst_4014 = null;
var inst_4015 = (0);
var inst_4016 = (0);
var state_4072__$1 = (function (){var statearr_4092 = state_4072;
(statearr_4092[(12)] = inst_4013);

(statearr_4092[(13)] = inst_4016);

(statearr_4092[(14)] = inst_4014);

(statearr_4092[(15)] = inst_4038);

(statearr_4092[(16)] = inst_4015);

return statearr_4092;
})();
var statearr_4093_4134 = state_4072__$1;
(statearr_4093_4134[(2)] = null);

(statearr_4093_4134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (3))){
var inst_4070 = (state_4072[(2)]);
var state_4072__$1 = state_4072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4072__$1,inst_4070);
} else {
if((state_val_4073 === (12))){
var inst_4047 = (state_4072[(2)]);
var state_4072__$1 = state_4072;
var statearr_4094_4135 = state_4072__$1;
(statearr_4094_4135[(2)] = inst_4047);

(statearr_4094_4135[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (2))){
var state_4072__$1 = state_4072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4072__$1,(4),ch);
} else {
if((state_val_4073 === (23))){
var state_4072__$1 = state_4072;
var statearr_4095_4136 = state_4072__$1;
(statearr_4095_4136[(2)] = null);

(statearr_4095_4136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (19))){
var inst_4003 = (state_4072[(8)]);
var inst_4053 = (state_4072[(11)]);
var inst_4055 = cljs.core.async.muxch_STAR_.call(null,inst_4053);
var state_4072__$1 = state_4072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4072__$1,(22),inst_4055,inst_4003);
} else {
if((state_val_4073 === (11))){
var inst_4013 = (state_4072[(12)]);
var inst_4027 = (state_4072[(10)]);
var inst_4027__$1 = cljs.core.seq.call(null,inst_4013);
var state_4072__$1 = (function (){var statearr_4096 = state_4072;
(statearr_4096[(10)] = inst_4027__$1);

return statearr_4096;
})();
if(inst_4027__$1){
var statearr_4097_4137 = state_4072__$1;
(statearr_4097_4137[(1)] = (13));

} else {
var statearr_4098_4138 = state_4072__$1;
(statearr_4098_4138[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (9))){
var inst_4049 = (state_4072[(2)]);
var state_4072__$1 = state_4072;
var statearr_4099_4139 = state_4072__$1;
(statearr_4099_4139[(2)] = inst_4049);

(statearr_4099_4139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (5))){
var inst_4010 = cljs.core.deref.call(null,mults);
var inst_4011 = cljs.core.vals.call(null,inst_4010);
var inst_4012 = cljs.core.seq.call(null,inst_4011);
var inst_4013 = inst_4012;
var inst_4014 = null;
var inst_4015 = (0);
var inst_4016 = (0);
var state_4072__$1 = (function (){var statearr_4100 = state_4072;
(statearr_4100[(12)] = inst_4013);

(statearr_4100[(13)] = inst_4016);

(statearr_4100[(14)] = inst_4014);

(statearr_4100[(16)] = inst_4015);

return statearr_4100;
})();
var statearr_4101_4140 = state_4072__$1;
(statearr_4101_4140[(2)] = null);

(statearr_4101_4140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (14))){
var state_4072__$1 = state_4072;
var statearr_4105_4141 = state_4072__$1;
(statearr_4105_4141[(2)] = null);

(statearr_4105_4141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (16))){
var inst_4027 = (state_4072[(10)]);
var inst_4031 = cljs.core.chunk_first.call(null,inst_4027);
var inst_4032 = cljs.core.chunk_rest.call(null,inst_4027);
var inst_4033 = cljs.core.count.call(null,inst_4031);
var inst_4013 = inst_4032;
var inst_4014 = inst_4031;
var inst_4015 = inst_4033;
var inst_4016 = (0);
var state_4072__$1 = (function (){var statearr_4106 = state_4072;
(statearr_4106[(12)] = inst_4013);

(statearr_4106[(13)] = inst_4016);

(statearr_4106[(14)] = inst_4014);

(statearr_4106[(16)] = inst_4015);

return statearr_4106;
})();
var statearr_4107_4142 = state_4072__$1;
(statearr_4107_4142[(2)] = null);

(statearr_4107_4142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (10))){
var inst_4013 = (state_4072[(12)]);
var inst_4016 = (state_4072[(13)]);
var inst_4014 = (state_4072[(14)]);
var inst_4015 = (state_4072[(16)]);
var inst_4021 = cljs.core._nth.call(null,inst_4014,inst_4016);
var inst_4022 = cljs.core.async.muxch_STAR_.call(null,inst_4021);
var inst_4023 = cljs.core.async.close_BANG_.call(null,inst_4022);
var inst_4024 = (inst_4016 + (1));
var tmp4102 = inst_4013;
var tmp4103 = inst_4014;
var tmp4104 = inst_4015;
var inst_4013__$1 = tmp4102;
var inst_4014__$1 = tmp4103;
var inst_4015__$1 = tmp4104;
var inst_4016__$1 = inst_4024;
var state_4072__$1 = (function (){var statearr_4108 = state_4072;
(statearr_4108[(12)] = inst_4013__$1);

(statearr_4108[(13)] = inst_4016__$1);

(statearr_4108[(14)] = inst_4014__$1);

(statearr_4108[(16)] = inst_4015__$1);

(statearr_4108[(17)] = inst_4023);

return statearr_4108;
})();
var statearr_4109_4143 = state_4072__$1;
(statearr_4109_4143[(2)] = null);

(statearr_4109_4143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (18))){
var inst_4042 = (state_4072[(2)]);
var state_4072__$1 = state_4072;
var statearr_4110_4144 = state_4072__$1;
(statearr_4110_4144[(2)] = inst_4042);

(statearr_4110_4144[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4073 === (8))){
var inst_4016 = (state_4072[(13)]);
var inst_4015 = (state_4072[(16)]);
var inst_4018 = (inst_4016 < inst_4015);
var inst_4019 = inst_4018;
var state_4072__$1 = state_4072;
if(cljs.core.truth_(inst_4019)){
var statearr_4111_4145 = state_4072__$1;
(statearr_4111_4145[(1)] = (10));

} else {
var statearr_4112_4146 = state_4072__$1;
(statearr_4112_4146[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2884__auto___4118,mults,ensure_mult,p))
;
return ((function (switch__2794__auto__,c__2884__auto___4118,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__2795__auto__ = null;
var cljs$core$async$state_machine__2795__auto____0 = (function (){
var statearr_4113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4113[(0)] = cljs$core$async$state_machine__2795__auto__);

(statearr_4113[(1)] = (1));

return statearr_4113;
});
var cljs$core$async$state_machine__2795__auto____1 = (function (state_4072){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_4072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e4114){if((e4114 instanceof Object)){
var ex__2798__auto__ = e4114;
var statearr_4115_4147 = state_4072;
(statearr_4115_4147[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4148 = state_4072;
state_4072 = G__4148;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$state_machine__2795__auto__ = function(state_4072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2795__auto____1.call(this,state_4072);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2795__auto____0;
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2795__auto____1;
return cljs$core$async$state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___4118,mults,ensure_mult,p))
})();
var state__2886__auto__ = (function (){var statearr_4116 = f__2885__auto__.call(null);
(statearr_4116[(6)] = c__2884__auto___4118);

return statearr_4116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___4118,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__4150 = arguments.length;
switch (G__4150) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__4153 = arguments.length;
switch (G__4153) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__4156 = arguments.length;
switch (G__4156) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__2884__auto___4223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___4223,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___4223,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_4195){
var state_val_4196 = (state_4195[(1)]);
if((state_val_4196 === (7))){
var state_4195__$1 = state_4195;
var statearr_4197_4224 = state_4195__$1;
(statearr_4197_4224[(2)] = null);

(statearr_4197_4224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4196 === (1))){
var state_4195__$1 = state_4195;
var statearr_4198_4225 = state_4195__$1;
(statearr_4198_4225[(2)] = null);

(statearr_4198_4225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4196 === (4))){
var inst_4159 = (state_4195[(7)]);
var inst_4161 = (inst_4159 < cnt);
var state_4195__$1 = state_4195;
if(cljs.core.truth_(inst_4161)){
var statearr_4199_4226 = state_4195__$1;
(statearr_4199_4226[(1)] = (6));

} else {
var statearr_4200_4227 = state_4195__$1;
(statearr_4200_4227[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4196 === (15))){
var inst_4191 = (state_4195[(2)]);
var state_4195__$1 = state_4195;
var statearr_4201_4228 = state_4195__$1;
(statearr_4201_4228[(2)] = inst_4191);

(statearr_4201_4228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4196 === (13))){
var inst_4184 = cljs.core.async.close_BANG_.call(null,out);
var state_4195__$1 = state_4195;
var statearr_4202_4229 = state_4195__$1;
(statearr_4202_4229[(2)] = inst_4184);

(statearr_4202_4229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4196 === (6))){
var state_4195__$1 = state_4195;
var statearr_4203_4230 = state_4195__$1;
(statearr_4203_4230[(2)] = null);

(statearr_4203_4230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4196 === (3))){
var inst_4193 = (state_4195[(2)]);
var state_4195__$1 = state_4195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4195__$1,inst_4193);
} else {
if((state_val_4196 === (12))){
var inst_4181 = (state_4195[(8)]);
var inst_4181__$1 = (state_4195[(2)]);
var inst_4182 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_4181__$1);
var state_4195__$1 = (function (){var statearr_4204 = state_4195;
(statearr_4204[(8)] = inst_4181__$1);

return statearr_4204;
})();
if(cljs.core.truth_(inst_4182)){
var statearr_4205_4231 = state_4195__$1;
(statearr_4205_4231[(1)] = (13));

} else {
var statearr_4206_4232 = state_4195__$1;
(statearr_4206_4232[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4196 === (2))){
var inst_4158 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_4159 = (0);
var state_4195__$1 = (function (){var statearr_4207 = state_4195;
(statearr_4207[(9)] = inst_4158);

(statearr_4207[(7)] = inst_4159);

return statearr_4207;
})();
var statearr_4208_4233 = state_4195__$1;
(statearr_4208_4233[(2)] = null);

(statearr_4208_4233[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4196 === (11))){
var inst_4159 = (state_4195[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_4195,(10),Object,null,(9));
var inst_4168 = chs__$1.call(null,inst_4159);
var inst_4169 = done.call(null,inst_4159);
var inst_4170 = cljs.core.async.take_BANG_.call(null,inst_4168,inst_4169);
var state_4195__$1 = state_4195;
var statearr_4209_4234 = state_4195__$1;
(statearr_4209_4234[(2)] = inst_4170);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4195__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4196 === (9))){
var inst_4159 = (state_4195[(7)]);
var inst_4172 = (state_4195[(2)]);
var inst_4173 = (inst_4159 + (1));
var inst_4159__$1 = inst_4173;
var state_4195__$1 = (function (){var statearr_4210 = state_4195;
(statearr_4210[(10)] = inst_4172);

(statearr_4210[(7)] = inst_4159__$1);

return statearr_4210;
})();
var statearr_4211_4235 = state_4195__$1;
(statearr_4211_4235[(2)] = null);

(statearr_4211_4235[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4196 === (5))){
var inst_4179 = (state_4195[(2)]);
var state_4195__$1 = (function (){var statearr_4212 = state_4195;
(statearr_4212[(11)] = inst_4179);

return statearr_4212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4195__$1,(12),dchan);
} else {
if((state_val_4196 === (14))){
var inst_4181 = (state_4195[(8)]);
var inst_4186 = cljs.core.apply.call(null,f,inst_4181);
var state_4195__$1 = state_4195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4195__$1,(16),out,inst_4186);
} else {
if((state_val_4196 === (16))){
var inst_4188 = (state_4195[(2)]);
var state_4195__$1 = (function (){var statearr_4213 = state_4195;
(statearr_4213[(12)] = inst_4188);

return statearr_4213;
})();
var statearr_4214_4236 = state_4195__$1;
(statearr_4214_4236[(2)] = null);

(statearr_4214_4236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4196 === (10))){
var inst_4163 = (state_4195[(2)]);
var inst_4164 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_4195__$1 = (function (){var statearr_4215 = state_4195;
(statearr_4215[(13)] = inst_4163);

return statearr_4215;
})();
var statearr_4216_4237 = state_4195__$1;
(statearr_4216_4237[(2)] = inst_4164);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4195__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4196 === (8))){
var inst_4177 = (state_4195[(2)]);
var state_4195__$1 = state_4195;
var statearr_4217_4238 = state_4195__$1;
(statearr_4217_4238[(2)] = inst_4177);

(statearr_4217_4238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2884__auto___4223,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__2794__auto__,c__2884__auto___4223,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__2795__auto__ = null;
var cljs$core$async$state_machine__2795__auto____0 = (function (){
var statearr_4218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4218[(0)] = cljs$core$async$state_machine__2795__auto__);

(statearr_4218[(1)] = (1));

return statearr_4218;
});
var cljs$core$async$state_machine__2795__auto____1 = (function (state_4195){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_4195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e4219){if((e4219 instanceof Object)){
var ex__2798__auto__ = e4219;
var statearr_4220_4239 = state_4195;
(statearr_4220_4239[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4240 = state_4195;
state_4195 = G__4240;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$state_machine__2795__auto__ = function(state_4195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2795__auto____1.call(this,state_4195);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2795__auto____0;
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2795__auto____1;
return cljs$core$async$state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___4223,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__2886__auto__ = (function (){var statearr_4221 = f__2885__auto__.call(null);
(statearr_4221[(6)] = c__2884__auto___4223);

return statearr_4221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___4223,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__4243 = arguments.length;
switch (G__4243) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2884__auto___4297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___4297,out){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___4297,out){
return (function (state_4275){
var state_val_4276 = (state_4275[(1)]);
if((state_val_4276 === (7))){
var inst_4254 = (state_4275[(7)]);
var inst_4255 = (state_4275[(8)]);
var inst_4254__$1 = (state_4275[(2)]);
var inst_4255__$1 = cljs.core.nth.call(null,inst_4254__$1,(0),null);
var inst_4256 = cljs.core.nth.call(null,inst_4254__$1,(1),null);
var inst_4257 = (inst_4255__$1 == null);
var state_4275__$1 = (function (){var statearr_4277 = state_4275;
(statearr_4277[(9)] = inst_4256);

(statearr_4277[(7)] = inst_4254__$1);

(statearr_4277[(8)] = inst_4255__$1);

return statearr_4277;
})();
if(cljs.core.truth_(inst_4257)){
var statearr_4278_4298 = state_4275__$1;
(statearr_4278_4298[(1)] = (8));

} else {
var statearr_4279_4299 = state_4275__$1;
(statearr_4279_4299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4276 === (1))){
var inst_4244 = cljs.core.vec.call(null,chs);
var inst_4245 = inst_4244;
var state_4275__$1 = (function (){var statearr_4280 = state_4275;
(statearr_4280[(10)] = inst_4245);

return statearr_4280;
})();
var statearr_4281_4300 = state_4275__$1;
(statearr_4281_4300[(2)] = null);

(statearr_4281_4300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4276 === (4))){
var inst_4245 = (state_4275[(10)]);
var state_4275__$1 = state_4275;
return cljs.core.async.ioc_alts_BANG_.call(null,state_4275__$1,(7),inst_4245);
} else {
if((state_val_4276 === (6))){
var inst_4271 = (state_4275[(2)]);
var state_4275__$1 = state_4275;
var statearr_4282_4301 = state_4275__$1;
(statearr_4282_4301[(2)] = inst_4271);

(statearr_4282_4301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4276 === (3))){
var inst_4273 = (state_4275[(2)]);
var state_4275__$1 = state_4275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4275__$1,inst_4273);
} else {
if((state_val_4276 === (2))){
var inst_4245 = (state_4275[(10)]);
var inst_4247 = cljs.core.count.call(null,inst_4245);
var inst_4248 = (inst_4247 > (0));
var state_4275__$1 = state_4275;
if(cljs.core.truth_(inst_4248)){
var statearr_4284_4302 = state_4275__$1;
(statearr_4284_4302[(1)] = (4));

} else {
var statearr_4285_4303 = state_4275__$1;
(statearr_4285_4303[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4276 === (11))){
var inst_4245 = (state_4275[(10)]);
var inst_4264 = (state_4275[(2)]);
var tmp4283 = inst_4245;
var inst_4245__$1 = tmp4283;
var state_4275__$1 = (function (){var statearr_4286 = state_4275;
(statearr_4286[(10)] = inst_4245__$1);

(statearr_4286[(11)] = inst_4264);

return statearr_4286;
})();
var statearr_4287_4304 = state_4275__$1;
(statearr_4287_4304[(2)] = null);

(statearr_4287_4304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4276 === (9))){
var inst_4255 = (state_4275[(8)]);
var state_4275__$1 = state_4275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4275__$1,(11),out,inst_4255);
} else {
if((state_val_4276 === (5))){
var inst_4269 = cljs.core.async.close_BANG_.call(null,out);
var state_4275__$1 = state_4275;
var statearr_4288_4305 = state_4275__$1;
(statearr_4288_4305[(2)] = inst_4269);

(statearr_4288_4305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4276 === (10))){
var inst_4267 = (state_4275[(2)]);
var state_4275__$1 = state_4275;
var statearr_4289_4306 = state_4275__$1;
(statearr_4289_4306[(2)] = inst_4267);

(statearr_4289_4306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4276 === (8))){
var inst_4256 = (state_4275[(9)]);
var inst_4245 = (state_4275[(10)]);
var inst_4254 = (state_4275[(7)]);
var inst_4255 = (state_4275[(8)]);
var inst_4259 = (function (){var cs = inst_4245;
var vec__4250 = inst_4254;
var v = inst_4255;
var c = inst_4256;
return ((function (cs,vec__4250,v,c,inst_4256,inst_4245,inst_4254,inst_4255,state_val_4276,c__2884__auto___4297,out){
return (function (p1__4241_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__4241_SHARP_);
});
;})(cs,vec__4250,v,c,inst_4256,inst_4245,inst_4254,inst_4255,state_val_4276,c__2884__auto___4297,out))
})();
var inst_4260 = cljs.core.filterv.call(null,inst_4259,inst_4245);
var inst_4245__$1 = inst_4260;
var state_4275__$1 = (function (){var statearr_4290 = state_4275;
(statearr_4290[(10)] = inst_4245__$1);

return statearr_4290;
})();
var statearr_4291_4307 = state_4275__$1;
(statearr_4291_4307[(2)] = null);

(statearr_4291_4307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__2884__auto___4297,out))
;
return ((function (switch__2794__auto__,c__2884__auto___4297,out){
return (function() {
var cljs$core$async$state_machine__2795__auto__ = null;
var cljs$core$async$state_machine__2795__auto____0 = (function (){
var statearr_4292 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4292[(0)] = cljs$core$async$state_machine__2795__auto__);

(statearr_4292[(1)] = (1));

return statearr_4292;
});
var cljs$core$async$state_machine__2795__auto____1 = (function (state_4275){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_4275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e4293){if((e4293 instanceof Object)){
var ex__2798__auto__ = e4293;
var statearr_4294_4308 = state_4275;
(statearr_4294_4308[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4309 = state_4275;
state_4275 = G__4309;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$state_machine__2795__auto__ = function(state_4275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2795__auto____1.call(this,state_4275);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2795__auto____0;
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2795__auto____1;
return cljs$core$async$state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___4297,out))
})();
var state__2886__auto__ = (function (){var statearr_4295 = f__2885__auto__.call(null);
(statearr_4295[(6)] = c__2884__auto___4297);

return statearr_4295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___4297,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__4311 = arguments.length;
switch (G__4311) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2884__auto___4356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___4356,out){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___4356,out){
return (function (state_4335){
var state_val_4336 = (state_4335[(1)]);
if((state_val_4336 === (7))){
var inst_4317 = (state_4335[(7)]);
var inst_4317__$1 = (state_4335[(2)]);
var inst_4318 = (inst_4317__$1 == null);
var inst_4319 = cljs.core.not.call(null,inst_4318);
var state_4335__$1 = (function (){var statearr_4337 = state_4335;
(statearr_4337[(7)] = inst_4317__$1);

return statearr_4337;
})();
if(inst_4319){
var statearr_4338_4357 = state_4335__$1;
(statearr_4338_4357[(1)] = (8));

} else {
var statearr_4339_4358 = state_4335__$1;
(statearr_4339_4358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4336 === (1))){
var inst_4312 = (0);
var state_4335__$1 = (function (){var statearr_4340 = state_4335;
(statearr_4340[(8)] = inst_4312);

return statearr_4340;
})();
var statearr_4341_4359 = state_4335__$1;
(statearr_4341_4359[(2)] = null);

(statearr_4341_4359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4336 === (4))){
var state_4335__$1 = state_4335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4335__$1,(7),ch);
} else {
if((state_val_4336 === (6))){
var inst_4330 = (state_4335[(2)]);
var state_4335__$1 = state_4335;
var statearr_4342_4360 = state_4335__$1;
(statearr_4342_4360[(2)] = inst_4330);

(statearr_4342_4360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4336 === (3))){
var inst_4332 = (state_4335[(2)]);
var inst_4333 = cljs.core.async.close_BANG_.call(null,out);
var state_4335__$1 = (function (){var statearr_4343 = state_4335;
(statearr_4343[(9)] = inst_4332);

return statearr_4343;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4335__$1,inst_4333);
} else {
if((state_val_4336 === (2))){
var inst_4312 = (state_4335[(8)]);
var inst_4314 = (inst_4312 < n);
var state_4335__$1 = state_4335;
if(cljs.core.truth_(inst_4314)){
var statearr_4344_4361 = state_4335__$1;
(statearr_4344_4361[(1)] = (4));

} else {
var statearr_4345_4362 = state_4335__$1;
(statearr_4345_4362[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4336 === (11))){
var inst_4312 = (state_4335[(8)]);
var inst_4322 = (state_4335[(2)]);
var inst_4323 = (inst_4312 + (1));
var inst_4312__$1 = inst_4323;
var state_4335__$1 = (function (){var statearr_4346 = state_4335;
(statearr_4346[(10)] = inst_4322);

(statearr_4346[(8)] = inst_4312__$1);

return statearr_4346;
})();
var statearr_4347_4363 = state_4335__$1;
(statearr_4347_4363[(2)] = null);

(statearr_4347_4363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4336 === (9))){
var state_4335__$1 = state_4335;
var statearr_4348_4364 = state_4335__$1;
(statearr_4348_4364[(2)] = null);

(statearr_4348_4364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4336 === (5))){
var state_4335__$1 = state_4335;
var statearr_4349_4365 = state_4335__$1;
(statearr_4349_4365[(2)] = null);

(statearr_4349_4365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4336 === (10))){
var inst_4327 = (state_4335[(2)]);
var state_4335__$1 = state_4335;
var statearr_4350_4366 = state_4335__$1;
(statearr_4350_4366[(2)] = inst_4327);

(statearr_4350_4366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4336 === (8))){
var inst_4317 = (state_4335[(7)]);
var state_4335__$1 = state_4335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4335__$1,(11),out,inst_4317);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__2884__auto___4356,out))
;
return ((function (switch__2794__auto__,c__2884__auto___4356,out){
return (function() {
var cljs$core$async$state_machine__2795__auto__ = null;
var cljs$core$async$state_machine__2795__auto____0 = (function (){
var statearr_4351 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4351[(0)] = cljs$core$async$state_machine__2795__auto__);

(statearr_4351[(1)] = (1));

return statearr_4351;
});
var cljs$core$async$state_machine__2795__auto____1 = (function (state_4335){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_4335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e4352){if((e4352 instanceof Object)){
var ex__2798__auto__ = e4352;
var statearr_4353_4367 = state_4335;
(statearr_4353_4367[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4335);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4368 = state_4335;
state_4335 = G__4368;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$state_machine__2795__auto__ = function(state_4335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2795__auto____1.call(this,state_4335);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2795__auto____0;
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2795__auto____1;
return cljs$core$async$state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___4356,out))
})();
var state__2886__auto__ = (function (){var statearr_4354 = f__2885__auto__.call(null);
(statearr_4354[(6)] = c__2884__auto___4356);

return statearr_4354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___4356,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async4370 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4370 = (function (f,ch,meta4371){
this.f = f;
this.ch = ch;
this.meta4371 = meta4371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4372,meta4371__$1){
var self__ = this;
var _4372__$1 = this;
return (new cljs.core.async.t_cljs$core$async4370(self__.f,self__.ch,meta4371__$1));
});

cljs.core.async.t_cljs$core$async4370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4372){
var self__ = this;
var _4372__$1 = this;
return self__.meta4371;
});

cljs.core.async.t_cljs$core$async4370.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4370.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4370.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4370.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4370.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async4373 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4373 = (function (f,ch,meta4371,_,fn1,meta4374){
this.f = f;
this.ch = ch;
this.meta4371 = meta4371;
this._ = _;
this.fn1 = fn1;
this.meta4374 = meta4374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_4375,meta4374__$1){
var self__ = this;
var _4375__$1 = this;
return (new cljs.core.async.t_cljs$core$async4373(self__.f,self__.ch,self__.meta4371,self__._,self__.fn1,meta4374__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async4373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_4375){
var self__ = this;
var _4375__$1 = this;
return self__.meta4374;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4373.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4373.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__4369_SHARP_){
return f1.call(null,(((p1__4369_SHARP_ == null))?null:self__.f.call(null,p1__4369_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async4373.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4371","meta4371",-174163091,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async4370","cljs.core.async/t_cljs$core$async4370",1193464446,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta4374","meta4374",-512740615,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4373";

cljs.core.async.t_cljs$core$async4373.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4373");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4373.
 */
cljs.core.async.__GT_t_cljs$core$async4373 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4373(f__$1,ch__$1,meta4371__$1,___$2,fn1__$1,meta4374){
return (new cljs.core.async.t_cljs$core$async4373(f__$1,ch__$1,meta4371__$1,___$2,fn1__$1,meta4374));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async4373(self__.f,self__.ch,self__.meta4371,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async4370.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4370.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async4370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4371","meta4371",-174163091,null)], null);
});

cljs.core.async.t_cljs$core$async4370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4370";

cljs.core.async.t_cljs$core$async4370.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4370");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4370.
 */
cljs.core.async.__GT_t_cljs$core$async4370 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4370(f__$1,ch__$1,meta4371){
return (new cljs.core.async.t_cljs$core$async4370(f__$1,ch__$1,meta4371));
});

}

return (new cljs.core.async.t_cljs$core$async4370(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async4376 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4376 = (function (f,ch,meta4377){
this.f = f;
this.ch = ch;
this.meta4377 = meta4377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4378,meta4377__$1){
var self__ = this;
var _4378__$1 = this;
return (new cljs.core.async.t_cljs$core$async4376(self__.f,self__.ch,meta4377__$1));
});

cljs.core.async.t_cljs$core$async4376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4378){
var self__ = this;
var _4378__$1 = this;
return self__.meta4377;
});

cljs.core.async.t_cljs$core$async4376.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4376.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4376.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4376.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4376.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4376.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async4376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4377","meta4377",-2082083940,null)], null);
});

cljs.core.async.t_cljs$core$async4376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4376";

cljs.core.async.t_cljs$core$async4376.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4376");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4376.
 */
cljs.core.async.__GT_t_cljs$core$async4376 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async4376(f__$1,ch__$1,meta4377){
return (new cljs.core.async.t_cljs$core$async4376(f__$1,ch__$1,meta4377));
});

}

return (new cljs.core.async.t_cljs$core$async4376(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async4379 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4379 = (function (p,ch,meta4380){
this.p = p;
this.ch = ch;
this.meta4380 = meta4380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4381,meta4380__$1){
var self__ = this;
var _4381__$1 = this;
return (new cljs.core.async.t_cljs$core$async4379(self__.p,self__.ch,meta4380__$1));
});

cljs.core.async.t_cljs$core$async4379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4381){
var self__ = this;
var _4381__$1 = this;
return self__.meta4380;
});

cljs.core.async.t_cljs$core$async4379.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4379.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4379.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4379.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4379.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4379.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4379.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async4379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4380","meta4380",174455583,null)], null);
});

cljs.core.async.t_cljs$core$async4379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4379";

cljs.core.async.t_cljs$core$async4379.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4379");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4379.
 */
cljs.core.async.__GT_t_cljs$core$async4379 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async4379(p__$1,ch__$1,meta4380){
return (new cljs.core.async.t_cljs$core$async4379(p__$1,ch__$1,meta4380));
});

}

return (new cljs.core.async.t_cljs$core$async4379(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__4383 = arguments.length;
switch (G__4383) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2884__auto___4423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___4423,out){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___4423,out){
return (function (state_4404){
var state_val_4405 = (state_4404[(1)]);
if((state_val_4405 === (7))){
var inst_4400 = (state_4404[(2)]);
var state_4404__$1 = state_4404;
var statearr_4406_4424 = state_4404__$1;
(statearr_4406_4424[(2)] = inst_4400);

(statearr_4406_4424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4405 === (1))){
var state_4404__$1 = state_4404;
var statearr_4407_4425 = state_4404__$1;
(statearr_4407_4425[(2)] = null);

(statearr_4407_4425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4405 === (4))){
var inst_4386 = (state_4404[(7)]);
var inst_4386__$1 = (state_4404[(2)]);
var inst_4387 = (inst_4386__$1 == null);
var state_4404__$1 = (function (){var statearr_4408 = state_4404;
(statearr_4408[(7)] = inst_4386__$1);

return statearr_4408;
})();
if(cljs.core.truth_(inst_4387)){
var statearr_4409_4426 = state_4404__$1;
(statearr_4409_4426[(1)] = (5));

} else {
var statearr_4410_4427 = state_4404__$1;
(statearr_4410_4427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4405 === (6))){
var inst_4386 = (state_4404[(7)]);
var inst_4391 = p.call(null,inst_4386);
var state_4404__$1 = state_4404;
if(cljs.core.truth_(inst_4391)){
var statearr_4411_4428 = state_4404__$1;
(statearr_4411_4428[(1)] = (8));

} else {
var statearr_4412_4429 = state_4404__$1;
(statearr_4412_4429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4405 === (3))){
var inst_4402 = (state_4404[(2)]);
var state_4404__$1 = state_4404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4404__$1,inst_4402);
} else {
if((state_val_4405 === (2))){
var state_4404__$1 = state_4404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4404__$1,(4),ch);
} else {
if((state_val_4405 === (11))){
var inst_4394 = (state_4404[(2)]);
var state_4404__$1 = state_4404;
var statearr_4413_4430 = state_4404__$1;
(statearr_4413_4430[(2)] = inst_4394);

(statearr_4413_4430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4405 === (9))){
var state_4404__$1 = state_4404;
var statearr_4414_4431 = state_4404__$1;
(statearr_4414_4431[(2)] = null);

(statearr_4414_4431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4405 === (5))){
var inst_4389 = cljs.core.async.close_BANG_.call(null,out);
var state_4404__$1 = state_4404;
var statearr_4415_4432 = state_4404__$1;
(statearr_4415_4432[(2)] = inst_4389);

(statearr_4415_4432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4405 === (10))){
var inst_4397 = (state_4404[(2)]);
var state_4404__$1 = (function (){var statearr_4416 = state_4404;
(statearr_4416[(8)] = inst_4397);

return statearr_4416;
})();
var statearr_4417_4433 = state_4404__$1;
(statearr_4417_4433[(2)] = null);

(statearr_4417_4433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4405 === (8))){
var inst_4386 = (state_4404[(7)]);
var state_4404__$1 = state_4404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4404__$1,(11),out,inst_4386);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__2884__auto___4423,out))
;
return ((function (switch__2794__auto__,c__2884__auto___4423,out){
return (function() {
var cljs$core$async$state_machine__2795__auto__ = null;
var cljs$core$async$state_machine__2795__auto____0 = (function (){
var statearr_4418 = [null,null,null,null,null,null,null,null,null];
(statearr_4418[(0)] = cljs$core$async$state_machine__2795__auto__);

(statearr_4418[(1)] = (1));

return statearr_4418;
});
var cljs$core$async$state_machine__2795__auto____1 = (function (state_4404){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_4404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e4419){if((e4419 instanceof Object)){
var ex__2798__auto__ = e4419;
var statearr_4420_4434 = state_4404;
(statearr_4420_4434[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4435 = state_4404;
state_4404 = G__4435;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$state_machine__2795__auto__ = function(state_4404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2795__auto____1.call(this,state_4404);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2795__auto____0;
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2795__auto____1;
return cljs$core$async$state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___4423,out))
})();
var state__2886__auto__ = (function (){var statearr_4421 = f__2885__auto__.call(null);
(statearr_4421[(6)] = c__2884__auto___4423);

return statearr_4421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___4423,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__4437 = arguments.length;
switch (G__4437) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__){
return (function (state_4500){
var state_val_4501 = (state_4500[(1)]);
if((state_val_4501 === (7))){
var inst_4496 = (state_4500[(2)]);
var state_4500__$1 = state_4500;
var statearr_4502_4540 = state_4500__$1;
(statearr_4502_4540[(2)] = inst_4496);

(statearr_4502_4540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (20))){
var inst_4466 = (state_4500[(7)]);
var inst_4477 = (state_4500[(2)]);
var inst_4478 = cljs.core.next.call(null,inst_4466);
var inst_4452 = inst_4478;
var inst_4453 = null;
var inst_4454 = (0);
var inst_4455 = (0);
var state_4500__$1 = (function (){var statearr_4503 = state_4500;
(statearr_4503[(8)] = inst_4455);

(statearr_4503[(9)] = inst_4453);

(statearr_4503[(10)] = inst_4452);

(statearr_4503[(11)] = inst_4477);

(statearr_4503[(12)] = inst_4454);

return statearr_4503;
})();
var statearr_4504_4541 = state_4500__$1;
(statearr_4504_4541[(2)] = null);

(statearr_4504_4541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (1))){
var state_4500__$1 = state_4500;
var statearr_4505_4542 = state_4500__$1;
(statearr_4505_4542[(2)] = null);

(statearr_4505_4542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (4))){
var inst_4441 = (state_4500[(13)]);
var inst_4441__$1 = (state_4500[(2)]);
var inst_4442 = (inst_4441__$1 == null);
var state_4500__$1 = (function (){var statearr_4506 = state_4500;
(statearr_4506[(13)] = inst_4441__$1);

return statearr_4506;
})();
if(cljs.core.truth_(inst_4442)){
var statearr_4507_4543 = state_4500__$1;
(statearr_4507_4543[(1)] = (5));

} else {
var statearr_4508_4544 = state_4500__$1;
(statearr_4508_4544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (15))){
var state_4500__$1 = state_4500;
var statearr_4512_4545 = state_4500__$1;
(statearr_4512_4545[(2)] = null);

(statearr_4512_4545[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (21))){
var state_4500__$1 = state_4500;
var statearr_4513_4546 = state_4500__$1;
(statearr_4513_4546[(2)] = null);

(statearr_4513_4546[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (13))){
var inst_4455 = (state_4500[(8)]);
var inst_4453 = (state_4500[(9)]);
var inst_4452 = (state_4500[(10)]);
var inst_4454 = (state_4500[(12)]);
var inst_4462 = (state_4500[(2)]);
var inst_4463 = (inst_4455 + (1));
var tmp4509 = inst_4453;
var tmp4510 = inst_4452;
var tmp4511 = inst_4454;
var inst_4452__$1 = tmp4510;
var inst_4453__$1 = tmp4509;
var inst_4454__$1 = tmp4511;
var inst_4455__$1 = inst_4463;
var state_4500__$1 = (function (){var statearr_4514 = state_4500;
(statearr_4514[(8)] = inst_4455__$1);

(statearr_4514[(14)] = inst_4462);

(statearr_4514[(9)] = inst_4453__$1);

(statearr_4514[(10)] = inst_4452__$1);

(statearr_4514[(12)] = inst_4454__$1);

return statearr_4514;
})();
var statearr_4515_4547 = state_4500__$1;
(statearr_4515_4547[(2)] = null);

(statearr_4515_4547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (22))){
var state_4500__$1 = state_4500;
var statearr_4516_4548 = state_4500__$1;
(statearr_4516_4548[(2)] = null);

(statearr_4516_4548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (6))){
var inst_4441 = (state_4500[(13)]);
var inst_4450 = f.call(null,inst_4441);
var inst_4451 = cljs.core.seq.call(null,inst_4450);
var inst_4452 = inst_4451;
var inst_4453 = null;
var inst_4454 = (0);
var inst_4455 = (0);
var state_4500__$1 = (function (){var statearr_4517 = state_4500;
(statearr_4517[(8)] = inst_4455);

(statearr_4517[(9)] = inst_4453);

(statearr_4517[(10)] = inst_4452);

(statearr_4517[(12)] = inst_4454);

return statearr_4517;
})();
var statearr_4518_4549 = state_4500__$1;
(statearr_4518_4549[(2)] = null);

(statearr_4518_4549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (17))){
var inst_4466 = (state_4500[(7)]);
var inst_4470 = cljs.core.chunk_first.call(null,inst_4466);
var inst_4471 = cljs.core.chunk_rest.call(null,inst_4466);
var inst_4472 = cljs.core.count.call(null,inst_4470);
var inst_4452 = inst_4471;
var inst_4453 = inst_4470;
var inst_4454 = inst_4472;
var inst_4455 = (0);
var state_4500__$1 = (function (){var statearr_4519 = state_4500;
(statearr_4519[(8)] = inst_4455);

(statearr_4519[(9)] = inst_4453);

(statearr_4519[(10)] = inst_4452);

(statearr_4519[(12)] = inst_4454);

return statearr_4519;
})();
var statearr_4520_4550 = state_4500__$1;
(statearr_4520_4550[(2)] = null);

(statearr_4520_4550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (3))){
var inst_4498 = (state_4500[(2)]);
var state_4500__$1 = state_4500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4500__$1,inst_4498);
} else {
if((state_val_4501 === (12))){
var inst_4486 = (state_4500[(2)]);
var state_4500__$1 = state_4500;
var statearr_4521_4551 = state_4500__$1;
(statearr_4521_4551[(2)] = inst_4486);

(statearr_4521_4551[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (2))){
var state_4500__$1 = state_4500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4500__$1,(4),in$);
} else {
if((state_val_4501 === (23))){
var inst_4494 = (state_4500[(2)]);
var state_4500__$1 = state_4500;
var statearr_4522_4552 = state_4500__$1;
(statearr_4522_4552[(2)] = inst_4494);

(statearr_4522_4552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (19))){
var inst_4481 = (state_4500[(2)]);
var state_4500__$1 = state_4500;
var statearr_4523_4553 = state_4500__$1;
(statearr_4523_4553[(2)] = inst_4481);

(statearr_4523_4553[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (11))){
var inst_4466 = (state_4500[(7)]);
var inst_4452 = (state_4500[(10)]);
var inst_4466__$1 = cljs.core.seq.call(null,inst_4452);
var state_4500__$1 = (function (){var statearr_4524 = state_4500;
(statearr_4524[(7)] = inst_4466__$1);

return statearr_4524;
})();
if(inst_4466__$1){
var statearr_4525_4554 = state_4500__$1;
(statearr_4525_4554[(1)] = (14));

} else {
var statearr_4526_4555 = state_4500__$1;
(statearr_4526_4555[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (9))){
var inst_4488 = (state_4500[(2)]);
var inst_4489 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_4500__$1 = (function (){var statearr_4527 = state_4500;
(statearr_4527[(15)] = inst_4488);

return statearr_4527;
})();
if(cljs.core.truth_(inst_4489)){
var statearr_4528_4556 = state_4500__$1;
(statearr_4528_4556[(1)] = (21));

} else {
var statearr_4529_4557 = state_4500__$1;
(statearr_4529_4557[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (5))){
var inst_4444 = cljs.core.async.close_BANG_.call(null,out);
var state_4500__$1 = state_4500;
var statearr_4530_4558 = state_4500__$1;
(statearr_4530_4558[(2)] = inst_4444);

(statearr_4530_4558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (14))){
var inst_4466 = (state_4500[(7)]);
var inst_4468 = cljs.core.chunked_seq_QMARK_.call(null,inst_4466);
var state_4500__$1 = state_4500;
if(inst_4468){
var statearr_4531_4559 = state_4500__$1;
(statearr_4531_4559[(1)] = (17));

} else {
var statearr_4532_4560 = state_4500__$1;
(statearr_4532_4560[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (16))){
var inst_4484 = (state_4500[(2)]);
var state_4500__$1 = state_4500;
var statearr_4533_4561 = state_4500__$1;
(statearr_4533_4561[(2)] = inst_4484);

(statearr_4533_4561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4501 === (10))){
var inst_4455 = (state_4500[(8)]);
var inst_4453 = (state_4500[(9)]);
var inst_4460 = cljs.core._nth.call(null,inst_4453,inst_4455);
var state_4500__$1 = state_4500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4500__$1,(13),out,inst_4460);
} else {
if((state_val_4501 === (18))){
var inst_4466 = (state_4500[(7)]);
var inst_4475 = cljs.core.first.call(null,inst_4466);
var state_4500__$1 = state_4500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4500__$1,(20),out,inst_4475);
} else {
if((state_val_4501 === (8))){
var inst_4455 = (state_4500[(8)]);
var inst_4454 = (state_4500[(12)]);
var inst_4457 = (inst_4455 < inst_4454);
var inst_4458 = inst_4457;
var state_4500__$1 = state_4500;
if(cljs.core.truth_(inst_4458)){
var statearr_4534_4562 = state_4500__$1;
(statearr_4534_4562[(1)] = (10));

} else {
var statearr_4535_4563 = state_4500__$1;
(statearr_4535_4563[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2884__auto__))
;
return ((function (switch__2794__auto__,c__2884__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__2795__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__2795__auto____0 = (function (){
var statearr_4536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4536[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__2795__auto__);

(statearr_4536[(1)] = (1));

return statearr_4536;
});
var cljs$core$async$mapcat_STAR__$_state_machine__2795__auto____1 = (function (state_4500){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_4500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e4537){if((e4537 instanceof Object)){
var ex__2798__auto__ = e4537;
var statearr_4538_4564 = state_4500;
(statearr_4538_4564[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4565 = state_4500;
state_4500 = G__4565;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__2795__auto__ = function(state_4500){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__2795__auto____1.call(this,state_4500);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__2795__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__2795__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__))
})();
var state__2886__auto__ = (function (){var statearr_4539 = f__2885__auto__.call(null);
(statearr_4539[(6)] = c__2884__auto__);

return statearr_4539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__))
);

return c__2884__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__4567 = arguments.length;
switch (G__4567) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__4570 = arguments.length;
switch (G__4570) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__4573 = arguments.length;
switch (G__4573) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2884__auto___4620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___4620,out){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___4620,out){
return (function (state_4597){
var state_val_4598 = (state_4597[(1)]);
if((state_val_4598 === (7))){
var inst_4592 = (state_4597[(2)]);
var state_4597__$1 = state_4597;
var statearr_4599_4621 = state_4597__$1;
(statearr_4599_4621[(2)] = inst_4592);

(statearr_4599_4621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4598 === (1))){
var inst_4574 = null;
var state_4597__$1 = (function (){var statearr_4600 = state_4597;
(statearr_4600[(7)] = inst_4574);

return statearr_4600;
})();
var statearr_4601_4622 = state_4597__$1;
(statearr_4601_4622[(2)] = null);

(statearr_4601_4622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4598 === (4))){
var inst_4577 = (state_4597[(8)]);
var inst_4577__$1 = (state_4597[(2)]);
var inst_4578 = (inst_4577__$1 == null);
var inst_4579 = cljs.core.not.call(null,inst_4578);
var state_4597__$1 = (function (){var statearr_4602 = state_4597;
(statearr_4602[(8)] = inst_4577__$1);

return statearr_4602;
})();
if(inst_4579){
var statearr_4603_4623 = state_4597__$1;
(statearr_4603_4623[(1)] = (5));

} else {
var statearr_4604_4624 = state_4597__$1;
(statearr_4604_4624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4598 === (6))){
var state_4597__$1 = state_4597;
var statearr_4605_4625 = state_4597__$1;
(statearr_4605_4625[(2)] = null);

(statearr_4605_4625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4598 === (3))){
var inst_4594 = (state_4597[(2)]);
var inst_4595 = cljs.core.async.close_BANG_.call(null,out);
var state_4597__$1 = (function (){var statearr_4606 = state_4597;
(statearr_4606[(9)] = inst_4594);

return statearr_4606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4597__$1,inst_4595);
} else {
if((state_val_4598 === (2))){
var state_4597__$1 = state_4597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4597__$1,(4),ch);
} else {
if((state_val_4598 === (11))){
var inst_4577 = (state_4597[(8)]);
var inst_4586 = (state_4597[(2)]);
var inst_4574 = inst_4577;
var state_4597__$1 = (function (){var statearr_4607 = state_4597;
(statearr_4607[(10)] = inst_4586);

(statearr_4607[(7)] = inst_4574);

return statearr_4607;
})();
var statearr_4608_4626 = state_4597__$1;
(statearr_4608_4626[(2)] = null);

(statearr_4608_4626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4598 === (9))){
var inst_4577 = (state_4597[(8)]);
var state_4597__$1 = state_4597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4597__$1,(11),out,inst_4577);
} else {
if((state_val_4598 === (5))){
var inst_4577 = (state_4597[(8)]);
var inst_4574 = (state_4597[(7)]);
var inst_4581 = cljs.core._EQ_.call(null,inst_4577,inst_4574);
var state_4597__$1 = state_4597;
if(inst_4581){
var statearr_4610_4627 = state_4597__$1;
(statearr_4610_4627[(1)] = (8));

} else {
var statearr_4611_4628 = state_4597__$1;
(statearr_4611_4628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4598 === (10))){
var inst_4589 = (state_4597[(2)]);
var state_4597__$1 = state_4597;
var statearr_4612_4629 = state_4597__$1;
(statearr_4612_4629[(2)] = inst_4589);

(statearr_4612_4629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4598 === (8))){
var inst_4574 = (state_4597[(7)]);
var tmp4609 = inst_4574;
var inst_4574__$1 = tmp4609;
var state_4597__$1 = (function (){var statearr_4613 = state_4597;
(statearr_4613[(7)] = inst_4574__$1);

return statearr_4613;
})();
var statearr_4614_4630 = state_4597__$1;
(statearr_4614_4630[(2)] = null);

(statearr_4614_4630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__2884__auto___4620,out))
;
return ((function (switch__2794__auto__,c__2884__auto___4620,out){
return (function() {
var cljs$core$async$state_machine__2795__auto__ = null;
var cljs$core$async$state_machine__2795__auto____0 = (function (){
var statearr_4615 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4615[(0)] = cljs$core$async$state_machine__2795__auto__);

(statearr_4615[(1)] = (1));

return statearr_4615;
});
var cljs$core$async$state_machine__2795__auto____1 = (function (state_4597){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_4597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e4616){if((e4616 instanceof Object)){
var ex__2798__auto__ = e4616;
var statearr_4617_4631 = state_4597;
(statearr_4617_4631[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4632 = state_4597;
state_4597 = G__4632;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$state_machine__2795__auto__ = function(state_4597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2795__auto____1.call(this,state_4597);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2795__auto____0;
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2795__auto____1;
return cljs$core$async$state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___4620,out))
})();
var state__2886__auto__ = (function (){var statearr_4618 = f__2885__auto__.call(null);
(statearr_4618[(6)] = c__2884__auto___4620);

return statearr_4618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___4620,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__4634 = arguments.length;
switch (G__4634) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2884__auto___4700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___4700,out){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___4700,out){
return (function (state_4672){
var state_val_4673 = (state_4672[(1)]);
if((state_val_4673 === (7))){
var inst_4668 = (state_4672[(2)]);
var state_4672__$1 = state_4672;
var statearr_4674_4701 = state_4672__$1;
(statearr_4674_4701[(2)] = inst_4668);

(statearr_4674_4701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4673 === (1))){
var inst_4635 = (new Array(n));
var inst_4636 = inst_4635;
var inst_4637 = (0);
var state_4672__$1 = (function (){var statearr_4675 = state_4672;
(statearr_4675[(7)] = inst_4636);

(statearr_4675[(8)] = inst_4637);

return statearr_4675;
})();
var statearr_4676_4702 = state_4672__$1;
(statearr_4676_4702[(2)] = null);

(statearr_4676_4702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4673 === (4))){
var inst_4640 = (state_4672[(9)]);
var inst_4640__$1 = (state_4672[(2)]);
var inst_4641 = (inst_4640__$1 == null);
var inst_4642 = cljs.core.not.call(null,inst_4641);
var state_4672__$1 = (function (){var statearr_4677 = state_4672;
(statearr_4677[(9)] = inst_4640__$1);

return statearr_4677;
})();
if(inst_4642){
var statearr_4678_4703 = state_4672__$1;
(statearr_4678_4703[(1)] = (5));

} else {
var statearr_4679_4704 = state_4672__$1;
(statearr_4679_4704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4673 === (15))){
var inst_4662 = (state_4672[(2)]);
var state_4672__$1 = state_4672;
var statearr_4680_4705 = state_4672__$1;
(statearr_4680_4705[(2)] = inst_4662);

(statearr_4680_4705[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4673 === (13))){
var state_4672__$1 = state_4672;
var statearr_4681_4706 = state_4672__$1;
(statearr_4681_4706[(2)] = null);

(statearr_4681_4706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4673 === (6))){
var inst_4637 = (state_4672[(8)]);
var inst_4658 = (inst_4637 > (0));
var state_4672__$1 = state_4672;
if(cljs.core.truth_(inst_4658)){
var statearr_4682_4707 = state_4672__$1;
(statearr_4682_4707[(1)] = (12));

} else {
var statearr_4683_4708 = state_4672__$1;
(statearr_4683_4708[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4673 === (3))){
var inst_4670 = (state_4672[(2)]);
var state_4672__$1 = state_4672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4672__$1,inst_4670);
} else {
if((state_val_4673 === (12))){
var inst_4636 = (state_4672[(7)]);
var inst_4660 = cljs.core.vec.call(null,inst_4636);
var state_4672__$1 = state_4672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4672__$1,(15),out,inst_4660);
} else {
if((state_val_4673 === (2))){
var state_4672__$1 = state_4672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4672__$1,(4),ch);
} else {
if((state_val_4673 === (11))){
var inst_4652 = (state_4672[(2)]);
var inst_4653 = (new Array(n));
var inst_4636 = inst_4653;
var inst_4637 = (0);
var state_4672__$1 = (function (){var statearr_4684 = state_4672;
(statearr_4684[(7)] = inst_4636);

(statearr_4684[(10)] = inst_4652);

(statearr_4684[(8)] = inst_4637);

return statearr_4684;
})();
var statearr_4685_4709 = state_4672__$1;
(statearr_4685_4709[(2)] = null);

(statearr_4685_4709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4673 === (9))){
var inst_4636 = (state_4672[(7)]);
var inst_4650 = cljs.core.vec.call(null,inst_4636);
var state_4672__$1 = state_4672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4672__$1,(11),out,inst_4650);
} else {
if((state_val_4673 === (5))){
var inst_4636 = (state_4672[(7)]);
var inst_4640 = (state_4672[(9)]);
var inst_4637 = (state_4672[(8)]);
var inst_4645 = (state_4672[(11)]);
var inst_4644 = (inst_4636[inst_4637] = inst_4640);
var inst_4645__$1 = (inst_4637 + (1));
var inst_4646 = (inst_4645__$1 < n);
var state_4672__$1 = (function (){var statearr_4686 = state_4672;
(statearr_4686[(12)] = inst_4644);

(statearr_4686[(11)] = inst_4645__$1);

return statearr_4686;
})();
if(cljs.core.truth_(inst_4646)){
var statearr_4687_4710 = state_4672__$1;
(statearr_4687_4710[(1)] = (8));

} else {
var statearr_4688_4711 = state_4672__$1;
(statearr_4688_4711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4673 === (14))){
var inst_4665 = (state_4672[(2)]);
var inst_4666 = cljs.core.async.close_BANG_.call(null,out);
var state_4672__$1 = (function (){var statearr_4690 = state_4672;
(statearr_4690[(13)] = inst_4665);

return statearr_4690;
})();
var statearr_4691_4712 = state_4672__$1;
(statearr_4691_4712[(2)] = inst_4666);

(statearr_4691_4712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4673 === (10))){
var inst_4656 = (state_4672[(2)]);
var state_4672__$1 = state_4672;
var statearr_4692_4713 = state_4672__$1;
(statearr_4692_4713[(2)] = inst_4656);

(statearr_4692_4713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4673 === (8))){
var inst_4636 = (state_4672[(7)]);
var inst_4645 = (state_4672[(11)]);
var tmp4689 = inst_4636;
var inst_4636__$1 = tmp4689;
var inst_4637 = inst_4645;
var state_4672__$1 = (function (){var statearr_4693 = state_4672;
(statearr_4693[(7)] = inst_4636__$1);

(statearr_4693[(8)] = inst_4637);

return statearr_4693;
})();
var statearr_4694_4714 = state_4672__$1;
(statearr_4694_4714[(2)] = null);

(statearr_4694_4714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2884__auto___4700,out))
;
return ((function (switch__2794__auto__,c__2884__auto___4700,out){
return (function() {
var cljs$core$async$state_machine__2795__auto__ = null;
var cljs$core$async$state_machine__2795__auto____0 = (function (){
var statearr_4695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4695[(0)] = cljs$core$async$state_machine__2795__auto__);

(statearr_4695[(1)] = (1));

return statearr_4695;
});
var cljs$core$async$state_machine__2795__auto____1 = (function (state_4672){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_4672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e4696){if((e4696 instanceof Object)){
var ex__2798__auto__ = e4696;
var statearr_4697_4715 = state_4672;
(statearr_4697_4715[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4716 = state_4672;
state_4672 = G__4716;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$state_machine__2795__auto__ = function(state_4672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2795__auto____1.call(this,state_4672);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2795__auto____0;
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2795__auto____1;
return cljs$core$async$state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___4700,out))
})();
var state__2886__auto__ = (function (){var statearr_4698 = f__2885__auto__.call(null);
(statearr_4698[(6)] = c__2884__auto___4700);

return statearr_4698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___4700,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__4718 = arguments.length;
switch (G__4718) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__2884__auto___4788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___4788,out){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___4788,out){
return (function (state_4760){
var state_val_4761 = (state_4760[(1)]);
if((state_val_4761 === (7))){
var inst_4756 = (state_4760[(2)]);
var state_4760__$1 = state_4760;
var statearr_4762_4789 = state_4760__$1;
(statearr_4762_4789[(2)] = inst_4756);

(statearr_4762_4789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (1))){
var inst_4719 = [];
var inst_4720 = inst_4719;
var inst_4721 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_4760__$1 = (function (){var statearr_4763 = state_4760;
(statearr_4763[(7)] = inst_4721);

(statearr_4763[(8)] = inst_4720);

return statearr_4763;
})();
var statearr_4764_4790 = state_4760__$1;
(statearr_4764_4790[(2)] = null);

(statearr_4764_4790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (4))){
var inst_4724 = (state_4760[(9)]);
var inst_4724__$1 = (state_4760[(2)]);
var inst_4725 = (inst_4724__$1 == null);
var inst_4726 = cljs.core.not.call(null,inst_4725);
var state_4760__$1 = (function (){var statearr_4765 = state_4760;
(statearr_4765[(9)] = inst_4724__$1);

return statearr_4765;
})();
if(inst_4726){
var statearr_4766_4791 = state_4760__$1;
(statearr_4766_4791[(1)] = (5));

} else {
var statearr_4767_4792 = state_4760__$1;
(statearr_4767_4792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (15))){
var inst_4750 = (state_4760[(2)]);
var state_4760__$1 = state_4760;
var statearr_4768_4793 = state_4760__$1;
(statearr_4768_4793[(2)] = inst_4750);

(statearr_4768_4793[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (13))){
var state_4760__$1 = state_4760;
var statearr_4769_4794 = state_4760__$1;
(statearr_4769_4794[(2)] = null);

(statearr_4769_4794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (6))){
var inst_4720 = (state_4760[(8)]);
var inst_4745 = inst_4720.length;
var inst_4746 = (inst_4745 > (0));
var state_4760__$1 = state_4760;
if(cljs.core.truth_(inst_4746)){
var statearr_4770_4795 = state_4760__$1;
(statearr_4770_4795[(1)] = (12));

} else {
var statearr_4771_4796 = state_4760__$1;
(statearr_4771_4796[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (3))){
var inst_4758 = (state_4760[(2)]);
var state_4760__$1 = state_4760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4760__$1,inst_4758);
} else {
if((state_val_4761 === (12))){
var inst_4720 = (state_4760[(8)]);
var inst_4748 = cljs.core.vec.call(null,inst_4720);
var state_4760__$1 = state_4760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4760__$1,(15),out,inst_4748);
} else {
if((state_val_4761 === (2))){
var state_4760__$1 = state_4760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4760__$1,(4),ch);
} else {
if((state_val_4761 === (11))){
var inst_4728 = (state_4760[(10)]);
var inst_4724 = (state_4760[(9)]);
var inst_4738 = (state_4760[(2)]);
var inst_4739 = [];
var inst_4740 = inst_4739.push(inst_4724);
var inst_4720 = inst_4739;
var inst_4721 = inst_4728;
var state_4760__$1 = (function (){var statearr_4772 = state_4760;
(statearr_4772[(11)] = inst_4738);

(statearr_4772[(12)] = inst_4740);

(statearr_4772[(7)] = inst_4721);

(statearr_4772[(8)] = inst_4720);

return statearr_4772;
})();
var statearr_4773_4797 = state_4760__$1;
(statearr_4773_4797[(2)] = null);

(statearr_4773_4797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (9))){
var inst_4720 = (state_4760[(8)]);
var inst_4736 = cljs.core.vec.call(null,inst_4720);
var state_4760__$1 = state_4760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4760__$1,(11),out,inst_4736);
} else {
if((state_val_4761 === (5))){
var inst_4728 = (state_4760[(10)]);
var inst_4724 = (state_4760[(9)]);
var inst_4721 = (state_4760[(7)]);
var inst_4728__$1 = f.call(null,inst_4724);
var inst_4729 = cljs.core._EQ_.call(null,inst_4728__$1,inst_4721);
var inst_4730 = cljs.core.keyword_identical_QMARK_.call(null,inst_4721,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_4731 = ((inst_4729) || (inst_4730));
var state_4760__$1 = (function (){var statearr_4774 = state_4760;
(statearr_4774[(10)] = inst_4728__$1);

return statearr_4774;
})();
if(cljs.core.truth_(inst_4731)){
var statearr_4775_4798 = state_4760__$1;
(statearr_4775_4798[(1)] = (8));

} else {
var statearr_4776_4799 = state_4760__$1;
(statearr_4776_4799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (14))){
var inst_4753 = (state_4760[(2)]);
var inst_4754 = cljs.core.async.close_BANG_.call(null,out);
var state_4760__$1 = (function (){var statearr_4778 = state_4760;
(statearr_4778[(13)] = inst_4753);

return statearr_4778;
})();
var statearr_4779_4800 = state_4760__$1;
(statearr_4779_4800[(2)] = inst_4754);

(statearr_4779_4800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (10))){
var inst_4743 = (state_4760[(2)]);
var state_4760__$1 = state_4760;
var statearr_4780_4801 = state_4760__$1;
(statearr_4780_4801[(2)] = inst_4743);

(statearr_4780_4801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4761 === (8))){
var inst_4728 = (state_4760[(10)]);
var inst_4724 = (state_4760[(9)]);
var inst_4720 = (state_4760[(8)]);
var inst_4733 = inst_4720.push(inst_4724);
var tmp4777 = inst_4720;
var inst_4720__$1 = tmp4777;
var inst_4721 = inst_4728;
var state_4760__$1 = (function (){var statearr_4781 = state_4760;
(statearr_4781[(7)] = inst_4721);

(statearr_4781[(8)] = inst_4720__$1);

(statearr_4781[(14)] = inst_4733);

return statearr_4781;
})();
var statearr_4782_4802 = state_4760__$1;
(statearr_4782_4802[(2)] = null);

(statearr_4782_4802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__2884__auto___4788,out))
;
return ((function (switch__2794__auto__,c__2884__auto___4788,out){
return (function() {
var cljs$core$async$state_machine__2795__auto__ = null;
var cljs$core$async$state_machine__2795__auto____0 = (function (){
var statearr_4783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4783[(0)] = cljs$core$async$state_machine__2795__auto__);

(statearr_4783[(1)] = (1));

return statearr_4783;
});
var cljs$core$async$state_machine__2795__auto____1 = (function (state_4760){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_4760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e4784){if((e4784 instanceof Object)){
var ex__2798__auto__ = e4784;
var statearr_4785_4803 = state_4760;
(statearr_4785_4803[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4804 = state_4760;
state_4760 = G__4804;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
cljs$core$async$state_machine__2795__auto__ = function(state_4760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__2795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__2795__auto____1.call(this,state_4760);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__2795__auto____0;
cljs$core$async$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__2795__auto____1;
return cljs$core$async$state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___4788,out))
})();
var state__2886__auto__ = (function (){var statearr_4786 = f__2885__auto__.call(null);
(statearr_4786[(6)] = c__2884__auto___4788);

return statearr_4786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___4788,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
