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
var G__3321 = arguments.length;
switch (G__3321) {
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
if(typeof cljs.core.async.t_cljs$core$async3322 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3322 = (function (f,blockable,meta3323){
this.f = f;
this.blockable = blockable;
this.meta3323 = meta3323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3324,meta3323__$1){
var self__ = this;
var _3324__$1 = this;
return (new cljs.core.async.t_cljs$core$async3322(self__.f,self__.blockable,meta3323__$1));
});

cljs.core.async.t_cljs$core$async3322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3324){
var self__ = this;
var _3324__$1 = this;
return self__.meta3323;
});

cljs.core.async.t_cljs$core$async3322.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3322.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3322.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async3322.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async3322.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta3323","meta3323",-1694563237,null)], null);
});

cljs.core.async.t_cljs$core$async3322.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3322.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3322";

cljs.core.async.t_cljs$core$async3322.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3322");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3322.
 */
cljs.core.async.__GT_t_cljs$core$async3322 = (function cljs$core$async$__GT_t_cljs$core$async3322(f__$1,blockable__$1,meta3323){
return (new cljs.core.async.t_cljs$core$async3322(f__$1,blockable__$1,meta3323));
});

}

return (new cljs.core.async.t_cljs$core$async3322(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__3328 = arguments.length;
switch (G__3328) {
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
var G__3331 = arguments.length;
switch (G__3331) {
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
var G__3334 = arguments.length;
switch (G__3334) {
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
var val_3336 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_3336);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_3336,ret){
return (function (){
return fn1.call(null,val_3336);
});})(val_3336,ret))
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
var G__3338 = arguments.length;
switch (G__3338) {
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
var n__4376__auto___3340 = n;
var x_3341 = (0);
while(true){
if((x_3341 < n__4376__auto___3340)){
(a[x_3341] = (0));

var G__3342 = (x_3341 + (1));
x_3341 = G__3342;
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

var G__3343 = (i + (1));
i = G__3343;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async3344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3344 = (function (flag,meta3345){
this.flag = flag;
this.meta3345 = meta3345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_3346,meta3345__$1){
var self__ = this;
var _3346__$1 = this;
return (new cljs.core.async.t_cljs$core$async3344(self__.flag,meta3345__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async3344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_3346){
var self__ = this;
var _3346__$1 = this;
return self__.meta3345;
});})(flag))
;

cljs.core.async.t_cljs$core$async3344.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async3344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3344.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta3345","meta3345",-275826505,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async3344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3344";

cljs.core.async.t_cljs$core$async3344.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3344");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3344.
 */
cljs.core.async.__GT_t_cljs$core$async3344 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async3344(flag__$1,meta3345){
return (new cljs.core.async.t_cljs$core$async3344(flag__$1,meta3345));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async3344(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async3347 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3347 = (function (flag,cb,meta3348){
this.flag = flag;
this.cb = cb;
this.meta3348 = meta3348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3349,meta3348__$1){
var self__ = this;
var _3349__$1 = this;
return (new cljs.core.async.t_cljs$core$async3347(self__.flag,self__.cb,meta3348__$1));
});

cljs.core.async.t_cljs$core$async3347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3349){
var self__ = this;
var _3349__$1 = this;
return self__.meta3348;
});

cljs.core.async.t_cljs$core$async3347.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async3347.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async3347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta3348","meta3348",-1968830636,null)], null);
});

cljs.core.async.t_cljs$core$async3347.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3347";

cljs.core.async.t_cljs$core$async3347.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3347");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3347.
 */
cljs.core.async.__GT_t_cljs$core$async3347 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async3347(flag__$1,cb__$1,meta3348){
return (new cljs.core.async.t_cljs$core$async3347(flag__$1,cb__$1,meta3348));
});

}

return (new cljs.core.async.t_cljs$core$async3347(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__3350_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3350_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3351_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3351_SHARP_,port], null));
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
var G__3352 = (i + (1));
i = G__3352;
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
var len__4499__auto___3358 = arguments.length;
var i__4500__auto___3359 = (0);
while(true){
if((i__4500__auto___3359 < len__4499__auto___3358)){
args__4502__auto__.push((arguments[i__4500__auto___3359]));

var G__3360 = (i__4500__auto___3359 + (1));
i__4500__auto___3359 = G__3360;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__3355){
var map__3356 = p__3355;
var map__3356__$1 = ((((!((map__3356 == null)))?(((((map__3356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3356):map__3356);
var opts = map__3356__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq3353){
var G__3354 = cljs.core.first.call(null,seq3353);
var seq3353__$1 = cljs.core.next.call(null,seq3353);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3354,seq3353__$1);
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
var G__3362 = arguments.length;
switch (G__3362) {
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
var c__3261__auto___3408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___3408){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___3408){
return (function (state_3386){
var state_val_3387 = (state_3386[(1)]);
if((state_val_3387 === (7))){
var inst_3382 = (state_3386[(2)]);
var state_3386__$1 = state_3386;
var statearr_3388_3409 = state_3386__$1;
(statearr_3388_3409[(2)] = inst_3382);

(statearr_3388_3409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3387 === (1))){
var state_3386__$1 = state_3386;
var statearr_3389_3410 = state_3386__$1;
(statearr_3389_3410[(2)] = null);

(statearr_3389_3410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3387 === (4))){
var inst_3365 = (state_3386[(7)]);
var inst_3365__$1 = (state_3386[(2)]);
var inst_3366 = (inst_3365__$1 == null);
var state_3386__$1 = (function (){var statearr_3390 = state_3386;
(statearr_3390[(7)] = inst_3365__$1);

return statearr_3390;
})();
if(cljs.core.truth_(inst_3366)){
var statearr_3391_3411 = state_3386__$1;
(statearr_3391_3411[(1)] = (5));

} else {
var statearr_3392_3412 = state_3386__$1;
(statearr_3392_3412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3387 === (13))){
var state_3386__$1 = state_3386;
var statearr_3393_3413 = state_3386__$1;
(statearr_3393_3413[(2)] = null);

(statearr_3393_3413[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3387 === (6))){
var inst_3365 = (state_3386[(7)]);
var state_3386__$1 = state_3386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3386__$1,(11),to,inst_3365);
} else {
if((state_val_3387 === (3))){
var inst_3384 = (state_3386[(2)]);
var state_3386__$1 = state_3386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3386__$1,inst_3384);
} else {
if((state_val_3387 === (12))){
var state_3386__$1 = state_3386;
var statearr_3394_3414 = state_3386__$1;
(statearr_3394_3414[(2)] = null);

(statearr_3394_3414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3387 === (2))){
var state_3386__$1 = state_3386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3386__$1,(4),from);
} else {
if((state_val_3387 === (11))){
var inst_3375 = (state_3386[(2)]);
var state_3386__$1 = state_3386;
if(cljs.core.truth_(inst_3375)){
var statearr_3395_3415 = state_3386__$1;
(statearr_3395_3415[(1)] = (12));

} else {
var statearr_3396_3416 = state_3386__$1;
(statearr_3396_3416[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3387 === (9))){
var state_3386__$1 = state_3386;
var statearr_3397_3417 = state_3386__$1;
(statearr_3397_3417[(2)] = null);

(statearr_3397_3417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3387 === (5))){
var state_3386__$1 = state_3386;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3398_3418 = state_3386__$1;
(statearr_3398_3418[(1)] = (8));

} else {
var statearr_3399_3419 = state_3386__$1;
(statearr_3399_3419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3387 === (14))){
var inst_3380 = (state_3386[(2)]);
var state_3386__$1 = state_3386;
var statearr_3400_3420 = state_3386__$1;
(statearr_3400_3420[(2)] = inst_3380);

(statearr_3400_3420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3387 === (10))){
var inst_3372 = (state_3386[(2)]);
var state_3386__$1 = state_3386;
var statearr_3401_3421 = state_3386__$1;
(statearr_3401_3421[(2)] = inst_3372);

(statearr_3401_3421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3387 === (8))){
var inst_3369 = cljs.core.async.close_BANG_.call(null,to);
var state_3386__$1 = state_3386;
var statearr_3402_3422 = state_3386__$1;
(statearr_3402_3422[(2)] = inst_3369);

(statearr_3402_3422[(1)] = (10));


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
});})(c__3261__auto___3408))
;
return ((function (switch__3171__auto__,c__3261__auto___3408){
return (function() {
var cljs$core$async$state_machine__3172__auto__ = null;
var cljs$core$async$state_machine__3172__auto____0 = (function (){
var statearr_3403 = [null,null,null,null,null,null,null,null];
(statearr_3403[(0)] = cljs$core$async$state_machine__3172__auto__);

(statearr_3403[(1)] = (1));

return statearr_3403;
});
var cljs$core$async$state_machine__3172__auto____1 = (function (state_3386){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_3386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e3404){if((e3404 instanceof Object)){
var ex__3175__auto__ = e3404;
var statearr_3405_3423 = state_3386;
(statearr_3405_3423[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3424 = state_3386;
state_3386 = G__3424;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$state_machine__3172__auto__ = function(state_3386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3172__auto____1.call(this,state_3386);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3172__auto____0;
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3172__auto____1;
return cljs$core$async$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___3408))
})();
var state__3263__auto__ = (function (){var statearr_3406 = f__3262__auto__.call(null);
(statearr_3406[(6)] = c__3261__auto___3408);

return statearr_3406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___3408))
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
return (function (p__3425){
var vec__3426 = p__3425;
var v = cljs.core.nth.call(null,vec__3426,(0),null);
var p = cljs.core.nth.call(null,vec__3426,(1),null);
var job = vec__3426;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__3261__auto___3597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___3597,res,vec__3426,v,p,job,jobs,results){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___3597,res,vec__3426,v,p,job,jobs,results){
return (function (state_3433){
var state_val_3434 = (state_3433[(1)]);
if((state_val_3434 === (1))){
var state_3433__$1 = state_3433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3433__$1,(2),res,v);
} else {
if((state_val_3434 === (2))){
var inst_3430 = (state_3433[(2)]);
var inst_3431 = cljs.core.async.close_BANG_.call(null,res);
var state_3433__$1 = (function (){var statearr_3435 = state_3433;
(statearr_3435[(7)] = inst_3430);

return statearr_3435;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3433__$1,inst_3431);
} else {
return null;
}
}
});})(c__3261__auto___3597,res,vec__3426,v,p,job,jobs,results))
;
return ((function (switch__3171__auto__,c__3261__auto___3597,res,vec__3426,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____0 = (function (){
var statearr_3436 = [null,null,null,null,null,null,null,null];
(statearr_3436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__);

(statearr_3436[(1)] = (1));

return statearr_3436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____1 = (function (state_3433){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_3433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e3437){if((e3437 instanceof Object)){
var ex__3175__auto__ = e3437;
var statearr_3438_3598 = state_3433;
(statearr_3438_3598[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3599 = state_3433;
state_3433 = G__3599;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__ = function(state_3433){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____1.call(this,state_3433);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___3597,res,vec__3426,v,p,job,jobs,results))
})();
var state__3263__auto__ = (function (){var statearr_3439 = f__3262__auto__.call(null);
(statearr_3439[(6)] = c__3261__auto___3597);

return statearr_3439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___3597,res,vec__3426,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__3440){
var vec__3441 = p__3440;
var v = cljs.core.nth.call(null,vec__3441,(0),null);
var p = cljs.core.nth.call(null,vec__3441,(1),null);
var job = vec__3441;
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
var n__4376__auto___3600 = n;
var __3601 = (0);
while(true){
if((__3601 < n__4376__auto___3600)){
var G__3444_3602 = type;
var G__3444_3603__$1 = (((G__3444_3602 instanceof cljs.core.Keyword))?G__3444_3602.fqn:null);
switch (G__3444_3603__$1) {
case "compute":
var c__3261__auto___3605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3601,c__3261__auto___3605,G__3444_3602,G__3444_3603__$1,n__4376__auto___3600,jobs,results,process,async){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (__3601,c__3261__auto___3605,G__3444_3602,G__3444_3603__$1,n__4376__auto___3600,jobs,results,process,async){
return (function (state_3457){
var state_val_3458 = (state_3457[(1)]);
if((state_val_3458 === (1))){
var state_3457__$1 = state_3457;
var statearr_3459_3606 = state_3457__$1;
(statearr_3459_3606[(2)] = null);

(statearr_3459_3606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3458 === (2))){
var state_3457__$1 = state_3457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3457__$1,(4),jobs);
} else {
if((state_val_3458 === (3))){
var inst_3455 = (state_3457[(2)]);
var state_3457__$1 = state_3457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3457__$1,inst_3455);
} else {
if((state_val_3458 === (4))){
var inst_3447 = (state_3457[(2)]);
var inst_3448 = process.call(null,inst_3447);
var state_3457__$1 = state_3457;
if(cljs.core.truth_(inst_3448)){
var statearr_3460_3607 = state_3457__$1;
(statearr_3460_3607[(1)] = (5));

} else {
var statearr_3461_3608 = state_3457__$1;
(statearr_3461_3608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3458 === (5))){
var state_3457__$1 = state_3457;
var statearr_3462_3609 = state_3457__$1;
(statearr_3462_3609[(2)] = null);

(statearr_3462_3609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3458 === (6))){
var state_3457__$1 = state_3457;
var statearr_3463_3610 = state_3457__$1;
(statearr_3463_3610[(2)] = null);

(statearr_3463_3610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3458 === (7))){
var inst_3453 = (state_3457[(2)]);
var state_3457__$1 = state_3457;
var statearr_3464_3611 = state_3457__$1;
(statearr_3464_3611[(2)] = inst_3453);

(statearr_3464_3611[(1)] = (3));


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
});})(__3601,c__3261__auto___3605,G__3444_3602,G__3444_3603__$1,n__4376__auto___3600,jobs,results,process,async))
;
return ((function (__3601,switch__3171__auto__,c__3261__auto___3605,G__3444_3602,G__3444_3603__$1,n__4376__auto___3600,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____0 = (function (){
var statearr_3465 = [null,null,null,null,null,null,null];
(statearr_3465[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__);

(statearr_3465[(1)] = (1));

return statearr_3465;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____1 = (function (state_3457){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_3457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e3466){if((e3466 instanceof Object)){
var ex__3175__auto__ = e3466;
var statearr_3467_3612 = state_3457;
(statearr_3467_3612[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3613 = state_3457;
state_3457 = G__3613;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__ = function(state_3457){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____1.call(this,state_3457);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__;
})()
;})(__3601,switch__3171__auto__,c__3261__auto___3605,G__3444_3602,G__3444_3603__$1,n__4376__auto___3600,jobs,results,process,async))
})();
var state__3263__auto__ = (function (){var statearr_3468 = f__3262__auto__.call(null);
(statearr_3468[(6)] = c__3261__auto___3605);

return statearr_3468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(__3601,c__3261__auto___3605,G__3444_3602,G__3444_3603__$1,n__4376__auto___3600,jobs,results,process,async))
);


break;
case "async":
var c__3261__auto___3614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3601,c__3261__auto___3614,G__3444_3602,G__3444_3603__$1,n__4376__auto___3600,jobs,results,process,async){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (__3601,c__3261__auto___3614,G__3444_3602,G__3444_3603__$1,n__4376__auto___3600,jobs,results,process,async){
return (function (state_3481){
var state_val_3482 = (state_3481[(1)]);
if((state_val_3482 === (1))){
var state_3481__$1 = state_3481;
var statearr_3483_3615 = state_3481__$1;
(statearr_3483_3615[(2)] = null);

(statearr_3483_3615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3482 === (2))){
var state_3481__$1 = state_3481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3481__$1,(4),jobs);
} else {
if((state_val_3482 === (3))){
var inst_3479 = (state_3481[(2)]);
var state_3481__$1 = state_3481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3481__$1,inst_3479);
} else {
if((state_val_3482 === (4))){
var inst_3471 = (state_3481[(2)]);
var inst_3472 = async.call(null,inst_3471);
var state_3481__$1 = state_3481;
if(cljs.core.truth_(inst_3472)){
var statearr_3484_3616 = state_3481__$1;
(statearr_3484_3616[(1)] = (5));

} else {
var statearr_3485_3617 = state_3481__$1;
(statearr_3485_3617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3482 === (5))){
var state_3481__$1 = state_3481;
var statearr_3486_3618 = state_3481__$1;
(statearr_3486_3618[(2)] = null);

(statearr_3486_3618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3482 === (6))){
var state_3481__$1 = state_3481;
var statearr_3487_3619 = state_3481__$1;
(statearr_3487_3619[(2)] = null);

(statearr_3487_3619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3482 === (7))){
var inst_3477 = (state_3481[(2)]);
var state_3481__$1 = state_3481;
var statearr_3488_3620 = state_3481__$1;
(statearr_3488_3620[(2)] = inst_3477);

(statearr_3488_3620[(1)] = (3));


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
});})(__3601,c__3261__auto___3614,G__3444_3602,G__3444_3603__$1,n__4376__auto___3600,jobs,results,process,async))
;
return ((function (__3601,switch__3171__auto__,c__3261__auto___3614,G__3444_3602,G__3444_3603__$1,n__4376__auto___3600,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____0 = (function (){
var statearr_3489 = [null,null,null,null,null,null,null];
(statearr_3489[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__);

(statearr_3489[(1)] = (1));

return statearr_3489;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____1 = (function (state_3481){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_3481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e3490){if((e3490 instanceof Object)){
var ex__3175__auto__ = e3490;
var statearr_3491_3621 = state_3481;
(statearr_3491_3621[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3622 = state_3481;
state_3481 = G__3622;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__ = function(state_3481){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____1.call(this,state_3481);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__;
})()
;})(__3601,switch__3171__auto__,c__3261__auto___3614,G__3444_3602,G__3444_3603__$1,n__4376__auto___3600,jobs,results,process,async))
})();
var state__3263__auto__ = (function (){var statearr_3492 = f__3262__auto__.call(null);
(statearr_3492[(6)] = c__3261__auto___3614);

return statearr_3492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(__3601,c__3261__auto___3614,G__3444_3602,G__3444_3603__$1,n__4376__auto___3600,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3444_3603__$1)].join('')));

}

var G__3623 = (__3601 + (1));
__3601 = G__3623;
continue;
} else {
}
break;
}

var c__3261__auto___3624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___3624,jobs,results,process,async){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___3624,jobs,results,process,async){
return (function (state_3514){
var state_val_3515 = (state_3514[(1)]);
if((state_val_3515 === (1))){
var state_3514__$1 = state_3514;
var statearr_3516_3625 = state_3514__$1;
(statearr_3516_3625[(2)] = null);

(statearr_3516_3625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3515 === (2))){
var state_3514__$1 = state_3514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3514__$1,(4),from);
} else {
if((state_val_3515 === (3))){
var inst_3512 = (state_3514[(2)]);
var state_3514__$1 = state_3514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3514__$1,inst_3512);
} else {
if((state_val_3515 === (4))){
var inst_3495 = (state_3514[(7)]);
var inst_3495__$1 = (state_3514[(2)]);
var inst_3496 = (inst_3495__$1 == null);
var state_3514__$1 = (function (){var statearr_3517 = state_3514;
(statearr_3517[(7)] = inst_3495__$1);

return statearr_3517;
})();
if(cljs.core.truth_(inst_3496)){
var statearr_3518_3626 = state_3514__$1;
(statearr_3518_3626[(1)] = (5));

} else {
var statearr_3519_3627 = state_3514__$1;
(statearr_3519_3627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3515 === (5))){
var inst_3498 = cljs.core.async.close_BANG_.call(null,jobs);
var state_3514__$1 = state_3514;
var statearr_3520_3628 = state_3514__$1;
(statearr_3520_3628[(2)] = inst_3498);

(statearr_3520_3628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3515 === (6))){
var inst_3495 = (state_3514[(7)]);
var inst_3500 = (state_3514[(8)]);
var inst_3500__$1 = cljs.core.async.chan.call(null,(1));
var inst_3501 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3502 = [inst_3495,inst_3500__$1];
var inst_3503 = (new cljs.core.PersistentVector(null,2,(5),inst_3501,inst_3502,null));
var state_3514__$1 = (function (){var statearr_3521 = state_3514;
(statearr_3521[(8)] = inst_3500__$1);

return statearr_3521;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3514__$1,(8),jobs,inst_3503);
} else {
if((state_val_3515 === (7))){
var inst_3510 = (state_3514[(2)]);
var state_3514__$1 = state_3514;
var statearr_3522_3629 = state_3514__$1;
(statearr_3522_3629[(2)] = inst_3510);

(statearr_3522_3629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3515 === (8))){
var inst_3500 = (state_3514[(8)]);
var inst_3505 = (state_3514[(2)]);
var state_3514__$1 = (function (){var statearr_3523 = state_3514;
(statearr_3523[(9)] = inst_3505);

return statearr_3523;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3514__$1,(9),results,inst_3500);
} else {
if((state_val_3515 === (9))){
var inst_3507 = (state_3514[(2)]);
var state_3514__$1 = (function (){var statearr_3524 = state_3514;
(statearr_3524[(10)] = inst_3507);

return statearr_3524;
})();
var statearr_3525_3630 = state_3514__$1;
(statearr_3525_3630[(2)] = null);

(statearr_3525_3630[(1)] = (2));


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
});})(c__3261__auto___3624,jobs,results,process,async))
;
return ((function (switch__3171__auto__,c__3261__auto___3624,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____0 = (function (){
var statearr_3526 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3526[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__);

(statearr_3526[(1)] = (1));

return statearr_3526;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____1 = (function (state_3514){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_3514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e3527){if((e3527 instanceof Object)){
var ex__3175__auto__ = e3527;
var statearr_3528_3631 = state_3514;
(statearr_3528_3631[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3632 = state_3514;
state_3514 = G__3632;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__ = function(state_3514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____1.call(this,state_3514);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___3624,jobs,results,process,async))
})();
var state__3263__auto__ = (function (){var statearr_3529 = f__3262__auto__.call(null);
(statearr_3529[(6)] = c__3261__auto___3624);

return statearr_3529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___3624,jobs,results,process,async))
);


var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__,jobs,results,process,async){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__,jobs,results,process,async){
return (function (state_3567){
var state_val_3568 = (state_3567[(1)]);
if((state_val_3568 === (7))){
var inst_3563 = (state_3567[(2)]);
var state_3567__$1 = state_3567;
var statearr_3569_3633 = state_3567__$1;
(statearr_3569_3633[(2)] = inst_3563);

(statearr_3569_3633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3568 === (20))){
var state_3567__$1 = state_3567;
var statearr_3570_3634 = state_3567__$1;
(statearr_3570_3634[(2)] = null);

(statearr_3570_3634[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3568 === (1))){
var state_3567__$1 = state_3567;
var statearr_3571_3635 = state_3567__$1;
(statearr_3571_3635[(2)] = null);

(statearr_3571_3635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3568 === (4))){
var inst_3532 = (state_3567[(7)]);
var inst_3532__$1 = (state_3567[(2)]);
var inst_3533 = (inst_3532__$1 == null);
var state_3567__$1 = (function (){var statearr_3572 = state_3567;
(statearr_3572[(7)] = inst_3532__$1);

return statearr_3572;
})();
if(cljs.core.truth_(inst_3533)){
var statearr_3573_3636 = state_3567__$1;
(statearr_3573_3636[(1)] = (5));

} else {
var statearr_3574_3637 = state_3567__$1;
(statearr_3574_3637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3568 === (15))){
var inst_3545 = (state_3567[(8)]);
var state_3567__$1 = state_3567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3567__$1,(18),to,inst_3545);
} else {
if((state_val_3568 === (21))){
var inst_3558 = (state_3567[(2)]);
var state_3567__$1 = state_3567;
var statearr_3575_3638 = state_3567__$1;
(statearr_3575_3638[(2)] = inst_3558);

(statearr_3575_3638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3568 === (13))){
var inst_3560 = (state_3567[(2)]);
var state_3567__$1 = (function (){var statearr_3576 = state_3567;
(statearr_3576[(9)] = inst_3560);

return statearr_3576;
})();
var statearr_3577_3639 = state_3567__$1;
(statearr_3577_3639[(2)] = null);

(statearr_3577_3639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3568 === (6))){
var inst_3532 = (state_3567[(7)]);
var state_3567__$1 = state_3567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3567__$1,(11),inst_3532);
} else {
if((state_val_3568 === (17))){
var inst_3553 = (state_3567[(2)]);
var state_3567__$1 = state_3567;
if(cljs.core.truth_(inst_3553)){
var statearr_3578_3640 = state_3567__$1;
(statearr_3578_3640[(1)] = (19));

} else {
var statearr_3579_3641 = state_3567__$1;
(statearr_3579_3641[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3568 === (3))){
var inst_3565 = (state_3567[(2)]);
var state_3567__$1 = state_3567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3567__$1,inst_3565);
} else {
if((state_val_3568 === (12))){
var inst_3542 = (state_3567[(10)]);
var state_3567__$1 = state_3567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3567__$1,(14),inst_3542);
} else {
if((state_val_3568 === (2))){
var state_3567__$1 = state_3567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3567__$1,(4),results);
} else {
if((state_val_3568 === (19))){
var state_3567__$1 = state_3567;
var statearr_3580_3642 = state_3567__$1;
(statearr_3580_3642[(2)] = null);

(statearr_3580_3642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3568 === (11))){
var inst_3542 = (state_3567[(2)]);
var state_3567__$1 = (function (){var statearr_3581 = state_3567;
(statearr_3581[(10)] = inst_3542);

return statearr_3581;
})();
var statearr_3582_3643 = state_3567__$1;
(statearr_3582_3643[(2)] = null);

(statearr_3582_3643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3568 === (9))){
var state_3567__$1 = state_3567;
var statearr_3583_3644 = state_3567__$1;
(statearr_3583_3644[(2)] = null);

(statearr_3583_3644[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3568 === (5))){
var state_3567__$1 = state_3567;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3584_3645 = state_3567__$1;
(statearr_3584_3645[(1)] = (8));

} else {
var statearr_3585_3646 = state_3567__$1;
(statearr_3585_3646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3568 === (14))){
var inst_3545 = (state_3567[(8)]);
var inst_3547 = (state_3567[(11)]);
var inst_3545__$1 = (state_3567[(2)]);
var inst_3546 = (inst_3545__$1 == null);
var inst_3547__$1 = cljs.core.not.call(null,inst_3546);
var state_3567__$1 = (function (){var statearr_3586 = state_3567;
(statearr_3586[(8)] = inst_3545__$1);

(statearr_3586[(11)] = inst_3547__$1);

return statearr_3586;
})();
if(inst_3547__$1){
var statearr_3587_3647 = state_3567__$1;
(statearr_3587_3647[(1)] = (15));

} else {
var statearr_3588_3648 = state_3567__$1;
(statearr_3588_3648[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3568 === (16))){
var inst_3547 = (state_3567[(11)]);
var state_3567__$1 = state_3567;
var statearr_3589_3649 = state_3567__$1;
(statearr_3589_3649[(2)] = inst_3547);

(statearr_3589_3649[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3568 === (10))){
var inst_3539 = (state_3567[(2)]);
var state_3567__$1 = state_3567;
var statearr_3590_3650 = state_3567__$1;
(statearr_3590_3650[(2)] = inst_3539);

(statearr_3590_3650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3568 === (18))){
var inst_3550 = (state_3567[(2)]);
var state_3567__$1 = state_3567;
var statearr_3591_3651 = state_3567__$1;
(statearr_3591_3651[(2)] = inst_3550);

(statearr_3591_3651[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3568 === (8))){
var inst_3536 = cljs.core.async.close_BANG_.call(null,to);
var state_3567__$1 = state_3567;
var statearr_3592_3652 = state_3567__$1;
(statearr_3592_3652[(2)] = inst_3536);

(statearr_3592_3652[(1)] = (10));


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
});})(c__3261__auto__,jobs,results,process,async))
;
return ((function (switch__3171__auto__,c__3261__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____0 = (function (){
var statearr_3593 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__);

(statearr_3593[(1)] = (1));

return statearr_3593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____1 = (function (state_3567){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_3567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e3594){if((e3594 instanceof Object)){
var ex__3175__auto__ = e3594;
var statearr_3595_3653 = state_3567;
(statearr_3595_3653[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3654 = state_3567;
state_3567 = G__3654;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__ = function(state_3567){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____1.call(this,state_3567);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3172__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__,jobs,results,process,async))
})();
var state__3263__auto__ = (function (){var statearr_3596 = f__3262__auto__.call(null);
(statearr_3596[(6)] = c__3261__auto__);

return statearr_3596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__,jobs,results,process,async))
);

return c__3261__auto__;
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
var G__3656 = arguments.length;
switch (G__3656) {
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
var G__3659 = arguments.length;
switch (G__3659) {
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
var G__3662 = arguments.length;
switch (G__3662) {
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
var c__3261__auto___3711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___3711,tc,fc){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___3711,tc,fc){
return (function (state_3688){
var state_val_3689 = (state_3688[(1)]);
if((state_val_3689 === (7))){
var inst_3684 = (state_3688[(2)]);
var state_3688__$1 = state_3688;
var statearr_3690_3712 = state_3688__$1;
(statearr_3690_3712[(2)] = inst_3684);

(statearr_3690_3712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3689 === (1))){
var state_3688__$1 = state_3688;
var statearr_3691_3713 = state_3688__$1;
(statearr_3691_3713[(2)] = null);

(statearr_3691_3713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3689 === (4))){
var inst_3665 = (state_3688[(7)]);
var inst_3665__$1 = (state_3688[(2)]);
var inst_3666 = (inst_3665__$1 == null);
var state_3688__$1 = (function (){var statearr_3692 = state_3688;
(statearr_3692[(7)] = inst_3665__$1);

return statearr_3692;
})();
if(cljs.core.truth_(inst_3666)){
var statearr_3693_3714 = state_3688__$1;
(statearr_3693_3714[(1)] = (5));

} else {
var statearr_3694_3715 = state_3688__$1;
(statearr_3694_3715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3689 === (13))){
var state_3688__$1 = state_3688;
var statearr_3695_3716 = state_3688__$1;
(statearr_3695_3716[(2)] = null);

(statearr_3695_3716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3689 === (6))){
var inst_3665 = (state_3688[(7)]);
var inst_3671 = p.call(null,inst_3665);
var state_3688__$1 = state_3688;
if(cljs.core.truth_(inst_3671)){
var statearr_3696_3717 = state_3688__$1;
(statearr_3696_3717[(1)] = (9));

} else {
var statearr_3697_3718 = state_3688__$1;
(statearr_3697_3718[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3689 === (3))){
var inst_3686 = (state_3688[(2)]);
var state_3688__$1 = state_3688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3688__$1,inst_3686);
} else {
if((state_val_3689 === (12))){
var state_3688__$1 = state_3688;
var statearr_3698_3719 = state_3688__$1;
(statearr_3698_3719[(2)] = null);

(statearr_3698_3719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3689 === (2))){
var state_3688__$1 = state_3688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3688__$1,(4),ch);
} else {
if((state_val_3689 === (11))){
var inst_3665 = (state_3688[(7)]);
var inst_3675 = (state_3688[(2)]);
var state_3688__$1 = state_3688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3688__$1,(8),inst_3675,inst_3665);
} else {
if((state_val_3689 === (9))){
var state_3688__$1 = state_3688;
var statearr_3699_3720 = state_3688__$1;
(statearr_3699_3720[(2)] = tc);

(statearr_3699_3720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3689 === (5))){
var inst_3668 = cljs.core.async.close_BANG_.call(null,tc);
var inst_3669 = cljs.core.async.close_BANG_.call(null,fc);
var state_3688__$1 = (function (){var statearr_3700 = state_3688;
(statearr_3700[(8)] = inst_3668);

return statearr_3700;
})();
var statearr_3701_3721 = state_3688__$1;
(statearr_3701_3721[(2)] = inst_3669);

(statearr_3701_3721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3689 === (14))){
var inst_3682 = (state_3688[(2)]);
var state_3688__$1 = state_3688;
var statearr_3702_3722 = state_3688__$1;
(statearr_3702_3722[(2)] = inst_3682);

(statearr_3702_3722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3689 === (10))){
var state_3688__$1 = state_3688;
var statearr_3703_3723 = state_3688__$1;
(statearr_3703_3723[(2)] = fc);

(statearr_3703_3723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3689 === (8))){
var inst_3677 = (state_3688[(2)]);
var state_3688__$1 = state_3688;
if(cljs.core.truth_(inst_3677)){
var statearr_3704_3724 = state_3688__$1;
(statearr_3704_3724[(1)] = (12));

} else {
var statearr_3705_3725 = state_3688__$1;
(statearr_3705_3725[(1)] = (13));

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
});})(c__3261__auto___3711,tc,fc))
;
return ((function (switch__3171__auto__,c__3261__auto___3711,tc,fc){
return (function() {
var cljs$core$async$state_machine__3172__auto__ = null;
var cljs$core$async$state_machine__3172__auto____0 = (function (){
var statearr_3706 = [null,null,null,null,null,null,null,null,null];
(statearr_3706[(0)] = cljs$core$async$state_machine__3172__auto__);

(statearr_3706[(1)] = (1));

return statearr_3706;
});
var cljs$core$async$state_machine__3172__auto____1 = (function (state_3688){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_3688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e3707){if((e3707 instanceof Object)){
var ex__3175__auto__ = e3707;
var statearr_3708_3726 = state_3688;
(statearr_3708_3726[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3727 = state_3688;
state_3688 = G__3727;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$state_machine__3172__auto__ = function(state_3688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3172__auto____1.call(this,state_3688);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3172__auto____0;
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3172__auto____1;
return cljs$core$async$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___3711,tc,fc))
})();
var state__3263__auto__ = (function (){var statearr_3709 = f__3262__auto__.call(null);
(statearr_3709[(6)] = c__3261__auto___3711);

return statearr_3709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___3711,tc,fc))
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
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_3748){
var state_val_3749 = (state_3748[(1)]);
if((state_val_3749 === (7))){
var inst_3744 = (state_3748[(2)]);
var state_3748__$1 = state_3748;
var statearr_3750_3768 = state_3748__$1;
(statearr_3750_3768[(2)] = inst_3744);

(statearr_3750_3768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3749 === (1))){
var inst_3728 = init;
var state_3748__$1 = (function (){var statearr_3751 = state_3748;
(statearr_3751[(7)] = inst_3728);

return statearr_3751;
})();
var statearr_3752_3769 = state_3748__$1;
(statearr_3752_3769[(2)] = null);

(statearr_3752_3769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3749 === (4))){
var inst_3731 = (state_3748[(8)]);
var inst_3731__$1 = (state_3748[(2)]);
var inst_3732 = (inst_3731__$1 == null);
var state_3748__$1 = (function (){var statearr_3753 = state_3748;
(statearr_3753[(8)] = inst_3731__$1);

return statearr_3753;
})();
if(cljs.core.truth_(inst_3732)){
var statearr_3754_3770 = state_3748__$1;
(statearr_3754_3770[(1)] = (5));

} else {
var statearr_3755_3771 = state_3748__$1;
(statearr_3755_3771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3749 === (6))){
var inst_3731 = (state_3748[(8)]);
var inst_3728 = (state_3748[(7)]);
var inst_3735 = (state_3748[(9)]);
var inst_3735__$1 = f.call(null,inst_3728,inst_3731);
var inst_3736 = cljs.core.reduced_QMARK_.call(null,inst_3735__$1);
var state_3748__$1 = (function (){var statearr_3756 = state_3748;
(statearr_3756[(9)] = inst_3735__$1);

return statearr_3756;
})();
if(inst_3736){
var statearr_3757_3772 = state_3748__$1;
(statearr_3757_3772[(1)] = (8));

} else {
var statearr_3758_3773 = state_3748__$1;
(statearr_3758_3773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3749 === (3))){
var inst_3746 = (state_3748[(2)]);
var state_3748__$1 = state_3748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3748__$1,inst_3746);
} else {
if((state_val_3749 === (2))){
var state_3748__$1 = state_3748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3748__$1,(4),ch);
} else {
if((state_val_3749 === (9))){
var inst_3735 = (state_3748[(9)]);
var inst_3728 = inst_3735;
var state_3748__$1 = (function (){var statearr_3759 = state_3748;
(statearr_3759[(7)] = inst_3728);

return statearr_3759;
})();
var statearr_3760_3774 = state_3748__$1;
(statearr_3760_3774[(2)] = null);

(statearr_3760_3774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3749 === (5))){
var inst_3728 = (state_3748[(7)]);
var state_3748__$1 = state_3748;
var statearr_3761_3775 = state_3748__$1;
(statearr_3761_3775[(2)] = inst_3728);

(statearr_3761_3775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3749 === (10))){
var inst_3742 = (state_3748[(2)]);
var state_3748__$1 = state_3748;
var statearr_3762_3776 = state_3748__$1;
(statearr_3762_3776[(2)] = inst_3742);

(statearr_3762_3776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3749 === (8))){
var inst_3735 = (state_3748[(9)]);
var inst_3738 = cljs.core.deref.call(null,inst_3735);
var state_3748__$1 = state_3748;
var statearr_3763_3777 = state_3748__$1;
(statearr_3763_3777[(2)] = inst_3738);

(statearr_3763_3777[(1)] = (10));


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
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__3172__auto__ = null;
var cljs$core$async$reduce_$_state_machine__3172__auto____0 = (function (){
var statearr_3764 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3764[(0)] = cljs$core$async$reduce_$_state_machine__3172__auto__);

(statearr_3764[(1)] = (1));

return statearr_3764;
});
var cljs$core$async$reduce_$_state_machine__3172__auto____1 = (function (state_3748){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_3748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e3765){if((e3765 instanceof Object)){
var ex__3175__auto__ = e3765;
var statearr_3766_3778 = state_3748;
(statearr_3766_3778[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3779 = state_3748;
state_3748 = G__3779;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__3172__auto__ = function(state_3748){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__3172__auto____1.call(this,state_3748);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__3172__auto____0;
cljs$core$async$reduce_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__3172__auto____1;
return cljs$core$async$reduce_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_3767 = f__3262__auto__.call(null);
(statearr_3767[(6)] = c__3261__auto__);

return statearr_3767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__,f__$1){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__,f__$1){
return (function (state_3785){
var state_val_3786 = (state_3785[(1)]);
if((state_val_3786 === (1))){
var inst_3780 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_3785__$1 = state_3785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3785__$1,(2),inst_3780);
} else {
if((state_val_3786 === (2))){
var inst_3782 = (state_3785[(2)]);
var inst_3783 = f__$1.call(null,inst_3782);
var state_3785__$1 = state_3785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3785__$1,inst_3783);
} else {
return null;
}
}
});})(c__3261__auto__,f__$1))
;
return ((function (switch__3171__auto__,c__3261__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__3172__auto__ = null;
var cljs$core$async$transduce_$_state_machine__3172__auto____0 = (function (){
var statearr_3787 = [null,null,null,null,null,null,null];
(statearr_3787[(0)] = cljs$core$async$transduce_$_state_machine__3172__auto__);

(statearr_3787[(1)] = (1));

return statearr_3787;
});
var cljs$core$async$transduce_$_state_machine__3172__auto____1 = (function (state_3785){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_3785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e3788){if((e3788 instanceof Object)){
var ex__3175__auto__ = e3788;
var statearr_3789_3791 = state_3785;
(statearr_3789_3791[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3792 = state_3785;
state_3785 = G__3792;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__3172__auto__ = function(state_3785){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__3172__auto____1.call(this,state_3785);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__3172__auto____0;
cljs$core$async$transduce_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__3172__auto____1;
return cljs$core$async$transduce_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__,f__$1))
})();
var state__3263__auto__ = (function (){var statearr_3790 = f__3262__auto__.call(null);
(statearr_3790[(6)] = c__3261__auto__);

return statearr_3790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__,f__$1))
);

return c__3261__auto__;
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
var G__3794 = arguments.length;
switch (G__3794) {
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
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_3819){
var state_val_3820 = (state_3819[(1)]);
if((state_val_3820 === (7))){
var inst_3801 = (state_3819[(2)]);
var state_3819__$1 = state_3819;
var statearr_3821_3842 = state_3819__$1;
(statearr_3821_3842[(2)] = inst_3801);

(statearr_3821_3842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (1))){
var inst_3795 = cljs.core.seq.call(null,coll);
var inst_3796 = inst_3795;
var state_3819__$1 = (function (){var statearr_3822 = state_3819;
(statearr_3822[(7)] = inst_3796);

return statearr_3822;
})();
var statearr_3823_3843 = state_3819__$1;
(statearr_3823_3843[(2)] = null);

(statearr_3823_3843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (4))){
var inst_3796 = (state_3819[(7)]);
var inst_3799 = cljs.core.first.call(null,inst_3796);
var state_3819__$1 = state_3819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3819__$1,(7),ch,inst_3799);
} else {
if((state_val_3820 === (13))){
var inst_3813 = (state_3819[(2)]);
var state_3819__$1 = state_3819;
var statearr_3824_3844 = state_3819__$1;
(statearr_3824_3844[(2)] = inst_3813);

(statearr_3824_3844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (6))){
var inst_3804 = (state_3819[(2)]);
var state_3819__$1 = state_3819;
if(cljs.core.truth_(inst_3804)){
var statearr_3825_3845 = state_3819__$1;
(statearr_3825_3845[(1)] = (8));

} else {
var statearr_3826_3846 = state_3819__$1;
(statearr_3826_3846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (3))){
var inst_3817 = (state_3819[(2)]);
var state_3819__$1 = state_3819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3819__$1,inst_3817);
} else {
if((state_val_3820 === (12))){
var state_3819__$1 = state_3819;
var statearr_3827_3847 = state_3819__$1;
(statearr_3827_3847[(2)] = null);

(statearr_3827_3847[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (2))){
var inst_3796 = (state_3819[(7)]);
var state_3819__$1 = state_3819;
if(cljs.core.truth_(inst_3796)){
var statearr_3828_3848 = state_3819__$1;
(statearr_3828_3848[(1)] = (4));

} else {
var statearr_3829_3849 = state_3819__$1;
(statearr_3829_3849[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (11))){
var inst_3810 = cljs.core.async.close_BANG_.call(null,ch);
var state_3819__$1 = state_3819;
var statearr_3830_3850 = state_3819__$1;
(statearr_3830_3850[(2)] = inst_3810);

(statearr_3830_3850[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (9))){
var state_3819__$1 = state_3819;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3831_3851 = state_3819__$1;
(statearr_3831_3851[(1)] = (11));

} else {
var statearr_3832_3852 = state_3819__$1;
(statearr_3832_3852[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (5))){
var inst_3796 = (state_3819[(7)]);
var state_3819__$1 = state_3819;
var statearr_3833_3853 = state_3819__$1;
(statearr_3833_3853[(2)] = inst_3796);

(statearr_3833_3853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (10))){
var inst_3815 = (state_3819[(2)]);
var state_3819__$1 = state_3819;
var statearr_3834_3854 = state_3819__$1;
(statearr_3834_3854[(2)] = inst_3815);

(statearr_3834_3854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3820 === (8))){
var inst_3796 = (state_3819[(7)]);
var inst_3806 = cljs.core.next.call(null,inst_3796);
var inst_3796__$1 = inst_3806;
var state_3819__$1 = (function (){var statearr_3835 = state_3819;
(statearr_3835[(7)] = inst_3796__$1);

return statearr_3835;
})();
var statearr_3836_3855 = state_3819__$1;
(statearr_3836_3855[(2)] = null);

(statearr_3836_3855[(1)] = (2));


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
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var cljs$core$async$state_machine__3172__auto__ = null;
var cljs$core$async$state_machine__3172__auto____0 = (function (){
var statearr_3837 = [null,null,null,null,null,null,null,null];
(statearr_3837[(0)] = cljs$core$async$state_machine__3172__auto__);

(statearr_3837[(1)] = (1));

return statearr_3837;
});
var cljs$core$async$state_machine__3172__auto____1 = (function (state_3819){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_3819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e3838){if((e3838 instanceof Object)){
var ex__3175__auto__ = e3838;
var statearr_3839_3856 = state_3819;
(statearr_3839_3856[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3857 = state_3819;
state_3819 = G__3857;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$state_machine__3172__auto__ = function(state_3819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3172__auto____1.call(this,state_3819);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3172__auto____0;
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3172__auto____1;
return cljs$core$async$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_3840 = f__3262__auto__.call(null);
(statearr_3840[(6)] = c__3261__auto__);

return statearr_3840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async3858 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3858 = (function (ch,cs,meta3859){
this.ch = ch;
this.cs = cs;
this.meta3859 = meta3859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_3860,meta3859__$1){
var self__ = this;
var _3860__$1 = this;
return (new cljs.core.async.t_cljs$core$async3858(self__.ch,self__.cs,meta3859__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async3858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_3860){
var self__ = this;
var _3860__$1 = this;
return self__.meta3859;
});})(cs))
;

cljs.core.async.t_cljs$core$async3858.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3858.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async3858.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3858.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3858.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3858.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3858.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta3859","meta3859",894754133,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async3858.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3858";

cljs.core.async.t_cljs$core$async3858.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async3858");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3858.
 */
cljs.core.async.__GT_t_cljs$core$async3858 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async3858(ch__$1,cs__$1,meta3859){
return (new cljs.core.async.t_cljs$core$async3858(ch__$1,cs__$1,meta3859));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async3858(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__3261__auto___4080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___4080,cs,m,dchan,dctr,done){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___4080,cs,m,dchan,dctr,done){
return (function (state_3995){
var state_val_3996 = (state_3995[(1)]);
if((state_val_3996 === (7))){
var inst_3991 = (state_3995[(2)]);
var state_3995__$1 = state_3995;
var statearr_3997_4081 = state_3995__$1;
(statearr_3997_4081[(2)] = inst_3991);

(statearr_3997_4081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (20))){
var inst_3894 = (state_3995[(7)]);
var inst_3906 = cljs.core.first.call(null,inst_3894);
var inst_3907 = cljs.core.nth.call(null,inst_3906,(0),null);
var inst_3908 = cljs.core.nth.call(null,inst_3906,(1),null);
var state_3995__$1 = (function (){var statearr_3998 = state_3995;
(statearr_3998[(8)] = inst_3907);

return statearr_3998;
})();
if(cljs.core.truth_(inst_3908)){
var statearr_3999_4082 = state_3995__$1;
(statearr_3999_4082[(1)] = (22));

} else {
var statearr_4000_4083 = state_3995__$1;
(statearr_4000_4083[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (27))){
var inst_3943 = (state_3995[(9)]);
var inst_3938 = (state_3995[(10)]);
var inst_3936 = (state_3995[(11)]);
var inst_3863 = (state_3995[(12)]);
var inst_3943__$1 = cljs.core._nth.call(null,inst_3936,inst_3938);
var inst_3944 = cljs.core.async.put_BANG_.call(null,inst_3943__$1,inst_3863,done);
var state_3995__$1 = (function (){var statearr_4001 = state_3995;
(statearr_4001[(9)] = inst_3943__$1);

return statearr_4001;
})();
if(cljs.core.truth_(inst_3944)){
var statearr_4002_4084 = state_3995__$1;
(statearr_4002_4084[(1)] = (30));

} else {
var statearr_4003_4085 = state_3995__$1;
(statearr_4003_4085[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (1))){
var state_3995__$1 = state_3995;
var statearr_4004_4086 = state_3995__$1;
(statearr_4004_4086[(2)] = null);

(statearr_4004_4086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (24))){
var inst_3894 = (state_3995[(7)]);
var inst_3913 = (state_3995[(2)]);
var inst_3914 = cljs.core.next.call(null,inst_3894);
var inst_3872 = inst_3914;
var inst_3873 = null;
var inst_3874 = (0);
var inst_3875 = (0);
var state_3995__$1 = (function (){var statearr_4005 = state_3995;
(statearr_4005[(13)] = inst_3875);

(statearr_4005[(14)] = inst_3872);

(statearr_4005[(15)] = inst_3873);

(statearr_4005[(16)] = inst_3874);

(statearr_4005[(17)] = inst_3913);

return statearr_4005;
})();
var statearr_4006_4087 = state_3995__$1;
(statearr_4006_4087[(2)] = null);

(statearr_4006_4087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (39))){
var state_3995__$1 = state_3995;
var statearr_4010_4088 = state_3995__$1;
(statearr_4010_4088[(2)] = null);

(statearr_4010_4088[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (4))){
var inst_3863 = (state_3995[(12)]);
var inst_3863__$1 = (state_3995[(2)]);
var inst_3864 = (inst_3863__$1 == null);
var state_3995__$1 = (function (){var statearr_4011 = state_3995;
(statearr_4011[(12)] = inst_3863__$1);

return statearr_4011;
})();
if(cljs.core.truth_(inst_3864)){
var statearr_4012_4089 = state_3995__$1;
(statearr_4012_4089[(1)] = (5));

} else {
var statearr_4013_4090 = state_3995__$1;
(statearr_4013_4090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (15))){
var inst_3875 = (state_3995[(13)]);
var inst_3872 = (state_3995[(14)]);
var inst_3873 = (state_3995[(15)]);
var inst_3874 = (state_3995[(16)]);
var inst_3890 = (state_3995[(2)]);
var inst_3891 = (inst_3875 + (1));
var tmp4007 = inst_3872;
var tmp4008 = inst_3873;
var tmp4009 = inst_3874;
var inst_3872__$1 = tmp4007;
var inst_3873__$1 = tmp4008;
var inst_3874__$1 = tmp4009;
var inst_3875__$1 = inst_3891;
var state_3995__$1 = (function (){var statearr_4014 = state_3995;
(statearr_4014[(18)] = inst_3890);

(statearr_4014[(13)] = inst_3875__$1);

(statearr_4014[(14)] = inst_3872__$1);

(statearr_4014[(15)] = inst_3873__$1);

(statearr_4014[(16)] = inst_3874__$1);

return statearr_4014;
})();
var statearr_4015_4091 = state_3995__$1;
(statearr_4015_4091[(2)] = null);

(statearr_4015_4091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (21))){
var inst_3917 = (state_3995[(2)]);
var state_3995__$1 = state_3995;
var statearr_4019_4092 = state_3995__$1;
(statearr_4019_4092[(2)] = inst_3917);

(statearr_4019_4092[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (31))){
var inst_3943 = (state_3995[(9)]);
var inst_3947 = done.call(null,null);
var inst_3948 = cljs.core.async.untap_STAR_.call(null,m,inst_3943);
var state_3995__$1 = (function (){var statearr_4020 = state_3995;
(statearr_4020[(19)] = inst_3947);

return statearr_4020;
})();
var statearr_4021_4093 = state_3995__$1;
(statearr_4021_4093[(2)] = inst_3948);

(statearr_4021_4093[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (32))){
var inst_3935 = (state_3995[(20)]);
var inst_3938 = (state_3995[(10)]);
var inst_3936 = (state_3995[(11)]);
var inst_3937 = (state_3995[(21)]);
var inst_3950 = (state_3995[(2)]);
var inst_3951 = (inst_3938 + (1));
var tmp4016 = inst_3935;
var tmp4017 = inst_3936;
var tmp4018 = inst_3937;
var inst_3935__$1 = tmp4016;
var inst_3936__$1 = tmp4017;
var inst_3937__$1 = tmp4018;
var inst_3938__$1 = inst_3951;
var state_3995__$1 = (function (){var statearr_4022 = state_3995;
(statearr_4022[(20)] = inst_3935__$1);

(statearr_4022[(10)] = inst_3938__$1);

(statearr_4022[(11)] = inst_3936__$1);

(statearr_4022[(22)] = inst_3950);

(statearr_4022[(21)] = inst_3937__$1);

return statearr_4022;
})();
var statearr_4023_4094 = state_3995__$1;
(statearr_4023_4094[(2)] = null);

(statearr_4023_4094[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (40))){
var inst_3963 = (state_3995[(23)]);
var inst_3967 = done.call(null,null);
var inst_3968 = cljs.core.async.untap_STAR_.call(null,m,inst_3963);
var state_3995__$1 = (function (){var statearr_4024 = state_3995;
(statearr_4024[(24)] = inst_3967);

return statearr_4024;
})();
var statearr_4025_4095 = state_3995__$1;
(statearr_4025_4095[(2)] = inst_3968);

(statearr_4025_4095[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (33))){
var inst_3954 = (state_3995[(25)]);
var inst_3956 = cljs.core.chunked_seq_QMARK_.call(null,inst_3954);
var state_3995__$1 = state_3995;
if(inst_3956){
var statearr_4026_4096 = state_3995__$1;
(statearr_4026_4096[(1)] = (36));

} else {
var statearr_4027_4097 = state_3995__$1;
(statearr_4027_4097[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (13))){
var inst_3884 = (state_3995[(26)]);
var inst_3887 = cljs.core.async.close_BANG_.call(null,inst_3884);
var state_3995__$1 = state_3995;
var statearr_4028_4098 = state_3995__$1;
(statearr_4028_4098[(2)] = inst_3887);

(statearr_4028_4098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (22))){
var inst_3907 = (state_3995[(8)]);
var inst_3910 = cljs.core.async.close_BANG_.call(null,inst_3907);
var state_3995__$1 = state_3995;
var statearr_4029_4099 = state_3995__$1;
(statearr_4029_4099[(2)] = inst_3910);

(statearr_4029_4099[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (36))){
var inst_3954 = (state_3995[(25)]);
var inst_3958 = cljs.core.chunk_first.call(null,inst_3954);
var inst_3959 = cljs.core.chunk_rest.call(null,inst_3954);
var inst_3960 = cljs.core.count.call(null,inst_3958);
var inst_3935 = inst_3959;
var inst_3936 = inst_3958;
var inst_3937 = inst_3960;
var inst_3938 = (0);
var state_3995__$1 = (function (){var statearr_4030 = state_3995;
(statearr_4030[(20)] = inst_3935);

(statearr_4030[(10)] = inst_3938);

(statearr_4030[(11)] = inst_3936);

(statearr_4030[(21)] = inst_3937);

return statearr_4030;
})();
var statearr_4031_4100 = state_3995__$1;
(statearr_4031_4100[(2)] = null);

(statearr_4031_4100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (41))){
var inst_3954 = (state_3995[(25)]);
var inst_3970 = (state_3995[(2)]);
var inst_3971 = cljs.core.next.call(null,inst_3954);
var inst_3935 = inst_3971;
var inst_3936 = null;
var inst_3937 = (0);
var inst_3938 = (0);
var state_3995__$1 = (function (){var statearr_4032 = state_3995;
(statearr_4032[(20)] = inst_3935);

(statearr_4032[(10)] = inst_3938);

(statearr_4032[(11)] = inst_3936);

(statearr_4032[(27)] = inst_3970);

(statearr_4032[(21)] = inst_3937);

return statearr_4032;
})();
var statearr_4033_4101 = state_3995__$1;
(statearr_4033_4101[(2)] = null);

(statearr_4033_4101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (43))){
var state_3995__$1 = state_3995;
var statearr_4034_4102 = state_3995__$1;
(statearr_4034_4102[(2)] = null);

(statearr_4034_4102[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (29))){
var inst_3979 = (state_3995[(2)]);
var state_3995__$1 = state_3995;
var statearr_4035_4103 = state_3995__$1;
(statearr_4035_4103[(2)] = inst_3979);

(statearr_4035_4103[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (44))){
var inst_3988 = (state_3995[(2)]);
var state_3995__$1 = (function (){var statearr_4036 = state_3995;
(statearr_4036[(28)] = inst_3988);

return statearr_4036;
})();
var statearr_4037_4104 = state_3995__$1;
(statearr_4037_4104[(2)] = null);

(statearr_4037_4104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (6))){
var inst_3927 = (state_3995[(29)]);
var inst_3926 = cljs.core.deref.call(null,cs);
var inst_3927__$1 = cljs.core.keys.call(null,inst_3926);
var inst_3928 = cljs.core.count.call(null,inst_3927__$1);
var inst_3929 = cljs.core.reset_BANG_.call(null,dctr,inst_3928);
var inst_3934 = cljs.core.seq.call(null,inst_3927__$1);
var inst_3935 = inst_3934;
var inst_3936 = null;
var inst_3937 = (0);
var inst_3938 = (0);
var state_3995__$1 = (function (){var statearr_4038 = state_3995;
(statearr_4038[(29)] = inst_3927__$1);

(statearr_4038[(20)] = inst_3935);

(statearr_4038[(10)] = inst_3938);

(statearr_4038[(11)] = inst_3936);

(statearr_4038[(21)] = inst_3937);

(statearr_4038[(30)] = inst_3929);

return statearr_4038;
})();
var statearr_4039_4105 = state_3995__$1;
(statearr_4039_4105[(2)] = null);

(statearr_4039_4105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (28))){
var inst_3935 = (state_3995[(20)]);
var inst_3954 = (state_3995[(25)]);
var inst_3954__$1 = cljs.core.seq.call(null,inst_3935);
var state_3995__$1 = (function (){var statearr_4040 = state_3995;
(statearr_4040[(25)] = inst_3954__$1);

return statearr_4040;
})();
if(inst_3954__$1){
var statearr_4041_4106 = state_3995__$1;
(statearr_4041_4106[(1)] = (33));

} else {
var statearr_4042_4107 = state_3995__$1;
(statearr_4042_4107[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (25))){
var inst_3938 = (state_3995[(10)]);
var inst_3937 = (state_3995[(21)]);
var inst_3940 = (inst_3938 < inst_3937);
var inst_3941 = inst_3940;
var state_3995__$1 = state_3995;
if(cljs.core.truth_(inst_3941)){
var statearr_4043_4108 = state_3995__$1;
(statearr_4043_4108[(1)] = (27));

} else {
var statearr_4044_4109 = state_3995__$1;
(statearr_4044_4109[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (34))){
var state_3995__$1 = state_3995;
var statearr_4045_4110 = state_3995__$1;
(statearr_4045_4110[(2)] = null);

(statearr_4045_4110[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (17))){
var state_3995__$1 = state_3995;
var statearr_4046_4111 = state_3995__$1;
(statearr_4046_4111[(2)] = null);

(statearr_4046_4111[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (3))){
var inst_3993 = (state_3995[(2)]);
var state_3995__$1 = state_3995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3995__$1,inst_3993);
} else {
if((state_val_3996 === (12))){
var inst_3922 = (state_3995[(2)]);
var state_3995__$1 = state_3995;
var statearr_4047_4112 = state_3995__$1;
(statearr_4047_4112[(2)] = inst_3922);

(statearr_4047_4112[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (2))){
var state_3995__$1 = state_3995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3995__$1,(4),ch);
} else {
if((state_val_3996 === (23))){
var state_3995__$1 = state_3995;
var statearr_4048_4113 = state_3995__$1;
(statearr_4048_4113[(2)] = null);

(statearr_4048_4113[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (35))){
var inst_3977 = (state_3995[(2)]);
var state_3995__$1 = state_3995;
var statearr_4049_4114 = state_3995__$1;
(statearr_4049_4114[(2)] = inst_3977);

(statearr_4049_4114[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (19))){
var inst_3894 = (state_3995[(7)]);
var inst_3898 = cljs.core.chunk_first.call(null,inst_3894);
var inst_3899 = cljs.core.chunk_rest.call(null,inst_3894);
var inst_3900 = cljs.core.count.call(null,inst_3898);
var inst_3872 = inst_3899;
var inst_3873 = inst_3898;
var inst_3874 = inst_3900;
var inst_3875 = (0);
var state_3995__$1 = (function (){var statearr_4050 = state_3995;
(statearr_4050[(13)] = inst_3875);

(statearr_4050[(14)] = inst_3872);

(statearr_4050[(15)] = inst_3873);

(statearr_4050[(16)] = inst_3874);

return statearr_4050;
})();
var statearr_4051_4115 = state_3995__$1;
(statearr_4051_4115[(2)] = null);

(statearr_4051_4115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (11))){
var inst_3872 = (state_3995[(14)]);
var inst_3894 = (state_3995[(7)]);
var inst_3894__$1 = cljs.core.seq.call(null,inst_3872);
var state_3995__$1 = (function (){var statearr_4052 = state_3995;
(statearr_4052[(7)] = inst_3894__$1);

return statearr_4052;
})();
if(inst_3894__$1){
var statearr_4053_4116 = state_3995__$1;
(statearr_4053_4116[(1)] = (16));

} else {
var statearr_4054_4117 = state_3995__$1;
(statearr_4054_4117[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (9))){
var inst_3924 = (state_3995[(2)]);
var state_3995__$1 = state_3995;
var statearr_4055_4118 = state_3995__$1;
(statearr_4055_4118[(2)] = inst_3924);

(statearr_4055_4118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (5))){
var inst_3870 = cljs.core.deref.call(null,cs);
var inst_3871 = cljs.core.seq.call(null,inst_3870);
var inst_3872 = inst_3871;
var inst_3873 = null;
var inst_3874 = (0);
var inst_3875 = (0);
var state_3995__$1 = (function (){var statearr_4056 = state_3995;
(statearr_4056[(13)] = inst_3875);

(statearr_4056[(14)] = inst_3872);

(statearr_4056[(15)] = inst_3873);

(statearr_4056[(16)] = inst_3874);

return statearr_4056;
})();
var statearr_4057_4119 = state_3995__$1;
(statearr_4057_4119[(2)] = null);

(statearr_4057_4119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (14))){
var state_3995__$1 = state_3995;
var statearr_4058_4120 = state_3995__$1;
(statearr_4058_4120[(2)] = null);

(statearr_4058_4120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (45))){
var inst_3985 = (state_3995[(2)]);
var state_3995__$1 = state_3995;
var statearr_4059_4121 = state_3995__$1;
(statearr_4059_4121[(2)] = inst_3985);

(statearr_4059_4121[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (26))){
var inst_3927 = (state_3995[(29)]);
var inst_3981 = (state_3995[(2)]);
var inst_3982 = cljs.core.seq.call(null,inst_3927);
var state_3995__$1 = (function (){var statearr_4060 = state_3995;
(statearr_4060[(31)] = inst_3981);

return statearr_4060;
})();
if(inst_3982){
var statearr_4061_4122 = state_3995__$1;
(statearr_4061_4122[(1)] = (42));

} else {
var statearr_4062_4123 = state_3995__$1;
(statearr_4062_4123[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (16))){
var inst_3894 = (state_3995[(7)]);
var inst_3896 = cljs.core.chunked_seq_QMARK_.call(null,inst_3894);
var state_3995__$1 = state_3995;
if(inst_3896){
var statearr_4063_4124 = state_3995__$1;
(statearr_4063_4124[(1)] = (19));

} else {
var statearr_4064_4125 = state_3995__$1;
(statearr_4064_4125[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (38))){
var inst_3974 = (state_3995[(2)]);
var state_3995__$1 = state_3995;
var statearr_4065_4126 = state_3995__$1;
(statearr_4065_4126[(2)] = inst_3974);

(statearr_4065_4126[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (30))){
var state_3995__$1 = state_3995;
var statearr_4066_4127 = state_3995__$1;
(statearr_4066_4127[(2)] = null);

(statearr_4066_4127[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (10))){
var inst_3875 = (state_3995[(13)]);
var inst_3873 = (state_3995[(15)]);
var inst_3883 = cljs.core._nth.call(null,inst_3873,inst_3875);
var inst_3884 = cljs.core.nth.call(null,inst_3883,(0),null);
var inst_3885 = cljs.core.nth.call(null,inst_3883,(1),null);
var state_3995__$1 = (function (){var statearr_4067 = state_3995;
(statearr_4067[(26)] = inst_3884);

return statearr_4067;
})();
if(cljs.core.truth_(inst_3885)){
var statearr_4068_4128 = state_3995__$1;
(statearr_4068_4128[(1)] = (13));

} else {
var statearr_4069_4129 = state_3995__$1;
(statearr_4069_4129[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (18))){
var inst_3920 = (state_3995[(2)]);
var state_3995__$1 = state_3995;
var statearr_4070_4130 = state_3995__$1;
(statearr_4070_4130[(2)] = inst_3920);

(statearr_4070_4130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (42))){
var state_3995__$1 = state_3995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3995__$1,(45),dchan);
} else {
if((state_val_3996 === (37))){
var inst_3963 = (state_3995[(23)]);
var inst_3863 = (state_3995[(12)]);
var inst_3954 = (state_3995[(25)]);
var inst_3963__$1 = cljs.core.first.call(null,inst_3954);
var inst_3964 = cljs.core.async.put_BANG_.call(null,inst_3963__$1,inst_3863,done);
var state_3995__$1 = (function (){var statearr_4071 = state_3995;
(statearr_4071[(23)] = inst_3963__$1);

return statearr_4071;
})();
if(cljs.core.truth_(inst_3964)){
var statearr_4072_4131 = state_3995__$1;
(statearr_4072_4131[(1)] = (39));

} else {
var statearr_4073_4132 = state_3995__$1;
(statearr_4073_4132[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3996 === (8))){
var inst_3875 = (state_3995[(13)]);
var inst_3874 = (state_3995[(16)]);
var inst_3877 = (inst_3875 < inst_3874);
var inst_3878 = inst_3877;
var state_3995__$1 = state_3995;
if(cljs.core.truth_(inst_3878)){
var statearr_4074_4133 = state_3995__$1;
(statearr_4074_4133[(1)] = (10));

} else {
var statearr_4075_4134 = state_3995__$1;
(statearr_4075_4134[(1)] = (11));

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
});})(c__3261__auto___4080,cs,m,dchan,dctr,done))
;
return ((function (switch__3171__auto__,c__3261__auto___4080,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__3172__auto__ = null;
var cljs$core$async$mult_$_state_machine__3172__auto____0 = (function (){
var statearr_4076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4076[(0)] = cljs$core$async$mult_$_state_machine__3172__auto__);

(statearr_4076[(1)] = (1));

return statearr_4076;
});
var cljs$core$async$mult_$_state_machine__3172__auto____1 = (function (state_3995){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_3995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e4077){if((e4077 instanceof Object)){
var ex__3175__auto__ = e4077;
var statearr_4078_4135 = state_3995;
(statearr_4078_4135[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4136 = state_3995;
state_3995 = G__4136;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__3172__auto__ = function(state_3995){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__3172__auto____1.call(this,state_3995);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__3172__auto____0;
cljs$core$async$mult_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__3172__auto____1;
return cljs$core$async$mult_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___4080,cs,m,dchan,dctr,done))
})();
var state__3263__auto__ = (function (){var statearr_4079 = f__3262__auto__.call(null);
(statearr_4079[(6)] = c__3261__auto___4080);

return statearr_4079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___4080,cs,m,dchan,dctr,done))
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
var G__4138 = arguments.length;
switch (G__4138) {
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
var len__4499__auto___4150 = arguments.length;
var i__4500__auto___4151 = (0);
while(true){
if((i__4500__auto___4151 < len__4499__auto___4150)){
args__4502__auto__.push((arguments[i__4500__auto___4151]));

var G__4152 = (i__4500__auto___4151 + (1));
i__4500__auto___4151 = G__4152;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__4144){
var map__4145 = p__4144;
var map__4145__$1 = ((((!((map__4145 == null)))?(((((map__4145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4145):map__4145);
var opts = map__4145__$1;
var statearr_4147_4153 = state;
(statearr_4147_4153[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__4145,map__4145__$1,opts){
return (function (val){
var statearr_4148_4154 = state;
(statearr_4148_4154[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__4145,map__4145__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_4149_4155 = state;
(statearr_4149_4155[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq4140){
var G__4141 = cljs.core.first.call(null,seq4140);
var seq4140__$1 = cljs.core.next.call(null,seq4140);
var G__4142 = cljs.core.first.call(null,seq4140__$1);
var seq4140__$2 = cljs.core.next.call(null,seq4140__$1);
var G__4143 = cljs.core.first.call(null,seq4140__$2);
var seq4140__$3 = cljs.core.next.call(null,seq4140__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4141,G__4142,G__4143,seq4140__$3);
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
if(typeof cljs.core.async.t_cljs$core$async4156 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4156 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta4157){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta4157 = meta4157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4158,meta4157__$1){
var self__ = this;
var _4158__$1 = this;
return (new cljs.core.async.t_cljs$core$async4156(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta4157__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4158){
var self__ = this;
var _4158__$1 = this;
return self__.meta4157;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4156.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4156.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4156.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4156.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4156.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4156.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4156.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4156.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async4156.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta4157","meta4157",1400288232,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4156";

cljs.core.async.t_cljs$core$async4156.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4156");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4156.
 */
cljs.core.async.__GT_t_cljs$core$async4156 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async4156(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4157){
return (new cljs.core.async.t_cljs$core$async4156(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4157));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async4156(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3261__auto___4320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___4320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___4320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_4260){
var state_val_4261 = (state_4260[(1)]);
if((state_val_4261 === (7))){
var inst_4175 = (state_4260[(2)]);
var state_4260__$1 = state_4260;
var statearr_4262_4321 = state_4260__$1;
(statearr_4262_4321[(2)] = inst_4175);

(statearr_4262_4321[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (20))){
var inst_4187 = (state_4260[(7)]);
var state_4260__$1 = state_4260;
var statearr_4263_4322 = state_4260__$1;
(statearr_4263_4322[(2)] = inst_4187);

(statearr_4263_4322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (27))){
var state_4260__$1 = state_4260;
var statearr_4264_4323 = state_4260__$1;
(statearr_4264_4323[(2)] = null);

(statearr_4264_4323[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (1))){
var inst_4162 = (state_4260[(8)]);
var inst_4162__$1 = calc_state.call(null);
var inst_4164 = (inst_4162__$1 == null);
var inst_4165 = cljs.core.not.call(null,inst_4164);
var state_4260__$1 = (function (){var statearr_4265 = state_4260;
(statearr_4265[(8)] = inst_4162__$1);

return statearr_4265;
})();
if(inst_4165){
var statearr_4266_4324 = state_4260__$1;
(statearr_4266_4324[(1)] = (2));

} else {
var statearr_4267_4325 = state_4260__$1;
(statearr_4267_4325[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (24))){
var inst_4234 = (state_4260[(9)]);
var inst_4211 = (state_4260[(10)]);
var inst_4220 = (state_4260[(11)]);
var inst_4234__$1 = inst_4211.call(null,inst_4220);
var state_4260__$1 = (function (){var statearr_4268 = state_4260;
(statearr_4268[(9)] = inst_4234__$1);

return statearr_4268;
})();
if(cljs.core.truth_(inst_4234__$1)){
var statearr_4269_4326 = state_4260__$1;
(statearr_4269_4326[(1)] = (29));

} else {
var statearr_4270_4327 = state_4260__$1;
(statearr_4270_4327[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (4))){
var inst_4178 = (state_4260[(2)]);
var state_4260__$1 = state_4260;
if(cljs.core.truth_(inst_4178)){
var statearr_4271_4328 = state_4260__$1;
(statearr_4271_4328[(1)] = (8));

} else {
var statearr_4272_4329 = state_4260__$1;
(statearr_4272_4329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (15))){
var inst_4205 = (state_4260[(2)]);
var state_4260__$1 = state_4260;
if(cljs.core.truth_(inst_4205)){
var statearr_4273_4330 = state_4260__$1;
(statearr_4273_4330[(1)] = (19));

} else {
var statearr_4274_4331 = state_4260__$1;
(statearr_4274_4331[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (21))){
var inst_4210 = (state_4260[(12)]);
var inst_4210__$1 = (state_4260[(2)]);
var inst_4211 = cljs.core.get.call(null,inst_4210__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4212 = cljs.core.get.call(null,inst_4210__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4213 = cljs.core.get.call(null,inst_4210__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_4260__$1 = (function (){var statearr_4275 = state_4260;
(statearr_4275[(10)] = inst_4211);

(statearr_4275[(12)] = inst_4210__$1);

(statearr_4275[(13)] = inst_4212);

return statearr_4275;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_4260__$1,(22),inst_4213);
} else {
if((state_val_4261 === (31))){
var inst_4242 = (state_4260[(2)]);
var state_4260__$1 = state_4260;
if(cljs.core.truth_(inst_4242)){
var statearr_4276_4332 = state_4260__$1;
(statearr_4276_4332[(1)] = (32));

} else {
var statearr_4277_4333 = state_4260__$1;
(statearr_4277_4333[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (32))){
var inst_4219 = (state_4260[(14)]);
var state_4260__$1 = state_4260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4260__$1,(35),out,inst_4219);
} else {
if((state_val_4261 === (33))){
var inst_4210 = (state_4260[(12)]);
var inst_4187 = inst_4210;
var state_4260__$1 = (function (){var statearr_4278 = state_4260;
(statearr_4278[(7)] = inst_4187);

return statearr_4278;
})();
var statearr_4279_4334 = state_4260__$1;
(statearr_4279_4334[(2)] = null);

(statearr_4279_4334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (13))){
var inst_4187 = (state_4260[(7)]);
var inst_4194 = inst_4187.cljs$lang$protocol_mask$partition0$;
var inst_4195 = (inst_4194 & (64));
var inst_4196 = inst_4187.cljs$core$ISeq$;
var inst_4197 = (cljs.core.PROTOCOL_SENTINEL === inst_4196);
var inst_4198 = ((inst_4195) || (inst_4197));
var state_4260__$1 = state_4260;
if(cljs.core.truth_(inst_4198)){
var statearr_4280_4335 = state_4260__$1;
(statearr_4280_4335[(1)] = (16));

} else {
var statearr_4281_4336 = state_4260__$1;
(statearr_4281_4336[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (22))){
var inst_4220 = (state_4260[(11)]);
var inst_4219 = (state_4260[(14)]);
var inst_4218 = (state_4260[(2)]);
var inst_4219__$1 = cljs.core.nth.call(null,inst_4218,(0),null);
var inst_4220__$1 = cljs.core.nth.call(null,inst_4218,(1),null);
var inst_4221 = (inst_4219__$1 == null);
var inst_4222 = cljs.core._EQ_.call(null,inst_4220__$1,change);
var inst_4223 = ((inst_4221) || (inst_4222));
var state_4260__$1 = (function (){var statearr_4282 = state_4260;
(statearr_4282[(11)] = inst_4220__$1);

(statearr_4282[(14)] = inst_4219__$1);

return statearr_4282;
})();
if(cljs.core.truth_(inst_4223)){
var statearr_4283_4337 = state_4260__$1;
(statearr_4283_4337[(1)] = (23));

} else {
var statearr_4284_4338 = state_4260__$1;
(statearr_4284_4338[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (36))){
var inst_4210 = (state_4260[(12)]);
var inst_4187 = inst_4210;
var state_4260__$1 = (function (){var statearr_4285 = state_4260;
(statearr_4285[(7)] = inst_4187);

return statearr_4285;
})();
var statearr_4286_4339 = state_4260__$1;
(statearr_4286_4339[(2)] = null);

(statearr_4286_4339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (29))){
var inst_4234 = (state_4260[(9)]);
var state_4260__$1 = state_4260;
var statearr_4287_4340 = state_4260__$1;
(statearr_4287_4340[(2)] = inst_4234);

(statearr_4287_4340[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (6))){
var state_4260__$1 = state_4260;
var statearr_4288_4341 = state_4260__$1;
(statearr_4288_4341[(2)] = false);

(statearr_4288_4341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (28))){
var inst_4230 = (state_4260[(2)]);
var inst_4231 = calc_state.call(null);
var inst_4187 = inst_4231;
var state_4260__$1 = (function (){var statearr_4289 = state_4260;
(statearr_4289[(7)] = inst_4187);

(statearr_4289[(15)] = inst_4230);

return statearr_4289;
})();
var statearr_4290_4342 = state_4260__$1;
(statearr_4290_4342[(2)] = null);

(statearr_4290_4342[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (25))){
var inst_4256 = (state_4260[(2)]);
var state_4260__$1 = state_4260;
var statearr_4291_4343 = state_4260__$1;
(statearr_4291_4343[(2)] = inst_4256);

(statearr_4291_4343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (34))){
var inst_4254 = (state_4260[(2)]);
var state_4260__$1 = state_4260;
var statearr_4292_4344 = state_4260__$1;
(statearr_4292_4344[(2)] = inst_4254);

(statearr_4292_4344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (17))){
var state_4260__$1 = state_4260;
var statearr_4293_4345 = state_4260__$1;
(statearr_4293_4345[(2)] = false);

(statearr_4293_4345[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (3))){
var state_4260__$1 = state_4260;
var statearr_4294_4346 = state_4260__$1;
(statearr_4294_4346[(2)] = false);

(statearr_4294_4346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (12))){
var inst_4258 = (state_4260[(2)]);
var state_4260__$1 = state_4260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4260__$1,inst_4258);
} else {
if((state_val_4261 === (2))){
var inst_4162 = (state_4260[(8)]);
var inst_4167 = inst_4162.cljs$lang$protocol_mask$partition0$;
var inst_4168 = (inst_4167 & (64));
var inst_4169 = inst_4162.cljs$core$ISeq$;
var inst_4170 = (cljs.core.PROTOCOL_SENTINEL === inst_4169);
var inst_4171 = ((inst_4168) || (inst_4170));
var state_4260__$1 = state_4260;
if(cljs.core.truth_(inst_4171)){
var statearr_4295_4347 = state_4260__$1;
(statearr_4295_4347[(1)] = (5));

} else {
var statearr_4296_4348 = state_4260__$1;
(statearr_4296_4348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (23))){
var inst_4219 = (state_4260[(14)]);
var inst_4225 = (inst_4219 == null);
var state_4260__$1 = state_4260;
if(cljs.core.truth_(inst_4225)){
var statearr_4297_4349 = state_4260__$1;
(statearr_4297_4349[(1)] = (26));

} else {
var statearr_4298_4350 = state_4260__$1;
(statearr_4298_4350[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (35))){
var inst_4245 = (state_4260[(2)]);
var state_4260__$1 = state_4260;
if(cljs.core.truth_(inst_4245)){
var statearr_4299_4351 = state_4260__$1;
(statearr_4299_4351[(1)] = (36));

} else {
var statearr_4300_4352 = state_4260__$1;
(statearr_4300_4352[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (19))){
var inst_4187 = (state_4260[(7)]);
var inst_4207 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4187);
var state_4260__$1 = state_4260;
var statearr_4301_4353 = state_4260__$1;
(statearr_4301_4353[(2)] = inst_4207);

(statearr_4301_4353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (11))){
var inst_4187 = (state_4260[(7)]);
var inst_4191 = (inst_4187 == null);
var inst_4192 = cljs.core.not.call(null,inst_4191);
var state_4260__$1 = state_4260;
if(inst_4192){
var statearr_4302_4354 = state_4260__$1;
(statearr_4302_4354[(1)] = (13));

} else {
var statearr_4303_4355 = state_4260__$1;
(statearr_4303_4355[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (9))){
var inst_4162 = (state_4260[(8)]);
var state_4260__$1 = state_4260;
var statearr_4304_4356 = state_4260__$1;
(statearr_4304_4356[(2)] = inst_4162);

(statearr_4304_4356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (5))){
var state_4260__$1 = state_4260;
var statearr_4305_4357 = state_4260__$1;
(statearr_4305_4357[(2)] = true);

(statearr_4305_4357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (14))){
var state_4260__$1 = state_4260;
var statearr_4306_4358 = state_4260__$1;
(statearr_4306_4358[(2)] = false);

(statearr_4306_4358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (26))){
var inst_4220 = (state_4260[(11)]);
var inst_4227 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_4220);
var state_4260__$1 = state_4260;
var statearr_4307_4359 = state_4260__$1;
(statearr_4307_4359[(2)] = inst_4227);

(statearr_4307_4359[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (16))){
var state_4260__$1 = state_4260;
var statearr_4308_4360 = state_4260__$1;
(statearr_4308_4360[(2)] = true);

(statearr_4308_4360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (38))){
var inst_4250 = (state_4260[(2)]);
var state_4260__$1 = state_4260;
var statearr_4309_4361 = state_4260__$1;
(statearr_4309_4361[(2)] = inst_4250);

(statearr_4309_4361[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (30))){
var inst_4211 = (state_4260[(10)]);
var inst_4220 = (state_4260[(11)]);
var inst_4212 = (state_4260[(13)]);
var inst_4237 = cljs.core.empty_QMARK_.call(null,inst_4211);
var inst_4238 = inst_4212.call(null,inst_4220);
var inst_4239 = cljs.core.not.call(null,inst_4238);
var inst_4240 = ((inst_4237) && (inst_4239));
var state_4260__$1 = state_4260;
var statearr_4310_4362 = state_4260__$1;
(statearr_4310_4362[(2)] = inst_4240);

(statearr_4310_4362[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (10))){
var inst_4162 = (state_4260[(8)]);
var inst_4183 = (state_4260[(2)]);
var inst_4184 = cljs.core.get.call(null,inst_4183,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4185 = cljs.core.get.call(null,inst_4183,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4186 = cljs.core.get.call(null,inst_4183,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_4187 = inst_4162;
var state_4260__$1 = (function (){var statearr_4311 = state_4260;
(statearr_4311[(16)] = inst_4184);

(statearr_4311[(17)] = inst_4186);

(statearr_4311[(7)] = inst_4187);

(statearr_4311[(18)] = inst_4185);

return statearr_4311;
})();
var statearr_4312_4363 = state_4260__$1;
(statearr_4312_4363[(2)] = null);

(statearr_4312_4363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (18))){
var inst_4202 = (state_4260[(2)]);
var state_4260__$1 = state_4260;
var statearr_4313_4364 = state_4260__$1;
(statearr_4313_4364[(2)] = inst_4202);

(statearr_4313_4364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (37))){
var state_4260__$1 = state_4260;
var statearr_4314_4365 = state_4260__$1;
(statearr_4314_4365[(2)] = null);

(statearr_4314_4365[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4261 === (8))){
var inst_4162 = (state_4260[(8)]);
var inst_4180 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4162);
var state_4260__$1 = state_4260;
var statearr_4315_4366 = state_4260__$1;
(statearr_4315_4366[(2)] = inst_4180);

(statearr_4315_4366[(1)] = (10));


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
});})(c__3261__auto___4320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__3171__auto__,c__3261__auto___4320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__3172__auto__ = null;
var cljs$core$async$mix_$_state_machine__3172__auto____0 = (function (){
var statearr_4316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4316[(0)] = cljs$core$async$mix_$_state_machine__3172__auto__);

(statearr_4316[(1)] = (1));

return statearr_4316;
});
var cljs$core$async$mix_$_state_machine__3172__auto____1 = (function (state_4260){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_4260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e4317){if((e4317 instanceof Object)){
var ex__3175__auto__ = e4317;
var statearr_4318_4367 = state_4260;
(statearr_4318_4367[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4368 = state_4260;
state_4260 = G__4368;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__3172__auto__ = function(state_4260){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__3172__auto____1.call(this,state_4260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__3172__auto____0;
cljs$core$async$mix_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__3172__auto____1;
return cljs$core$async$mix_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___4320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__3263__auto__ = (function (){var statearr_4319 = f__3262__auto__.call(null);
(statearr_4319[(6)] = c__3261__auto___4320);

return statearr_4319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___4320,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__4370 = arguments.length;
switch (G__4370) {
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
var G__4374 = arguments.length;
switch (G__4374) {
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
return (function (p1__4372_SHARP_){
if(cljs.core.truth_(p1__4372_SHARP_.call(null,topic))){
return p1__4372_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__4372_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async4375 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4375 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta4376){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta4376 = meta4376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_4377,meta4376__$1){
var self__ = this;
var _4377__$1 = this;
return (new cljs.core.async.t_cljs$core$async4375(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta4376__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_4377){
var self__ = this;
var _4377__$1 = this;
return self__.meta4376;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4375.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4375.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4375.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4375.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4375.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async4375.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4375.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4375.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta4376","meta4376",-180345663,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4375.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4375";

cljs.core.async.t_cljs$core$async4375.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4375");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4375.
 */
cljs.core.async.__GT_t_cljs$core$async4375 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async4375(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4376){
return (new cljs.core.async.t_cljs$core$async4375(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4376));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async4375(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3261__auto___4495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___4495,mults,ensure_mult,p){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___4495,mults,ensure_mult,p){
return (function (state_4449){
var state_val_4450 = (state_4449[(1)]);
if((state_val_4450 === (7))){
var inst_4445 = (state_4449[(2)]);
var state_4449__$1 = state_4449;
var statearr_4451_4496 = state_4449__$1;
(statearr_4451_4496[(2)] = inst_4445);

(statearr_4451_4496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (20))){
var state_4449__$1 = state_4449;
var statearr_4452_4497 = state_4449__$1;
(statearr_4452_4497[(2)] = null);

(statearr_4452_4497[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (1))){
var state_4449__$1 = state_4449;
var statearr_4453_4498 = state_4449__$1;
(statearr_4453_4498[(2)] = null);

(statearr_4453_4498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (24))){
var inst_4428 = (state_4449[(7)]);
var inst_4437 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_4428);
var state_4449__$1 = state_4449;
var statearr_4454_4499 = state_4449__$1;
(statearr_4454_4499[(2)] = inst_4437);

(statearr_4454_4499[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (4))){
var inst_4380 = (state_4449[(8)]);
var inst_4380__$1 = (state_4449[(2)]);
var inst_4381 = (inst_4380__$1 == null);
var state_4449__$1 = (function (){var statearr_4455 = state_4449;
(statearr_4455[(8)] = inst_4380__$1);

return statearr_4455;
})();
if(cljs.core.truth_(inst_4381)){
var statearr_4456_4500 = state_4449__$1;
(statearr_4456_4500[(1)] = (5));

} else {
var statearr_4457_4501 = state_4449__$1;
(statearr_4457_4501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (15))){
var inst_4422 = (state_4449[(2)]);
var state_4449__$1 = state_4449;
var statearr_4458_4502 = state_4449__$1;
(statearr_4458_4502[(2)] = inst_4422);

(statearr_4458_4502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (21))){
var inst_4442 = (state_4449[(2)]);
var state_4449__$1 = (function (){var statearr_4459 = state_4449;
(statearr_4459[(9)] = inst_4442);

return statearr_4459;
})();
var statearr_4460_4503 = state_4449__$1;
(statearr_4460_4503[(2)] = null);

(statearr_4460_4503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (13))){
var inst_4404 = (state_4449[(10)]);
var inst_4406 = cljs.core.chunked_seq_QMARK_.call(null,inst_4404);
var state_4449__$1 = state_4449;
if(inst_4406){
var statearr_4461_4504 = state_4449__$1;
(statearr_4461_4504[(1)] = (16));

} else {
var statearr_4462_4505 = state_4449__$1;
(statearr_4462_4505[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (22))){
var inst_4434 = (state_4449[(2)]);
var state_4449__$1 = state_4449;
if(cljs.core.truth_(inst_4434)){
var statearr_4463_4506 = state_4449__$1;
(statearr_4463_4506[(1)] = (23));

} else {
var statearr_4464_4507 = state_4449__$1;
(statearr_4464_4507[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (6))){
var inst_4428 = (state_4449[(7)]);
var inst_4430 = (state_4449[(11)]);
var inst_4380 = (state_4449[(8)]);
var inst_4428__$1 = topic_fn.call(null,inst_4380);
var inst_4429 = cljs.core.deref.call(null,mults);
var inst_4430__$1 = cljs.core.get.call(null,inst_4429,inst_4428__$1);
var state_4449__$1 = (function (){var statearr_4465 = state_4449;
(statearr_4465[(7)] = inst_4428__$1);

(statearr_4465[(11)] = inst_4430__$1);

return statearr_4465;
})();
if(cljs.core.truth_(inst_4430__$1)){
var statearr_4466_4508 = state_4449__$1;
(statearr_4466_4508[(1)] = (19));

} else {
var statearr_4467_4509 = state_4449__$1;
(statearr_4467_4509[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (25))){
var inst_4439 = (state_4449[(2)]);
var state_4449__$1 = state_4449;
var statearr_4468_4510 = state_4449__$1;
(statearr_4468_4510[(2)] = inst_4439);

(statearr_4468_4510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (17))){
var inst_4404 = (state_4449[(10)]);
var inst_4413 = cljs.core.first.call(null,inst_4404);
var inst_4414 = cljs.core.async.muxch_STAR_.call(null,inst_4413);
var inst_4415 = cljs.core.async.close_BANG_.call(null,inst_4414);
var inst_4416 = cljs.core.next.call(null,inst_4404);
var inst_4390 = inst_4416;
var inst_4391 = null;
var inst_4392 = (0);
var inst_4393 = (0);
var state_4449__$1 = (function (){var statearr_4469 = state_4449;
(statearr_4469[(12)] = inst_4390);

(statearr_4469[(13)] = inst_4391);

(statearr_4469[(14)] = inst_4415);

(statearr_4469[(15)] = inst_4393);

(statearr_4469[(16)] = inst_4392);

return statearr_4469;
})();
var statearr_4470_4511 = state_4449__$1;
(statearr_4470_4511[(2)] = null);

(statearr_4470_4511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (3))){
var inst_4447 = (state_4449[(2)]);
var state_4449__$1 = state_4449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4449__$1,inst_4447);
} else {
if((state_val_4450 === (12))){
var inst_4424 = (state_4449[(2)]);
var state_4449__$1 = state_4449;
var statearr_4471_4512 = state_4449__$1;
(statearr_4471_4512[(2)] = inst_4424);

(statearr_4471_4512[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (2))){
var state_4449__$1 = state_4449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4449__$1,(4),ch);
} else {
if((state_val_4450 === (23))){
var state_4449__$1 = state_4449;
var statearr_4472_4513 = state_4449__$1;
(statearr_4472_4513[(2)] = null);

(statearr_4472_4513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (19))){
var inst_4430 = (state_4449[(11)]);
var inst_4380 = (state_4449[(8)]);
var inst_4432 = cljs.core.async.muxch_STAR_.call(null,inst_4430);
var state_4449__$1 = state_4449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4449__$1,(22),inst_4432,inst_4380);
} else {
if((state_val_4450 === (11))){
var inst_4390 = (state_4449[(12)]);
var inst_4404 = (state_4449[(10)]);
var inst_4404__$1 = cljs.core.seq.call(null,inst_4390);
var state_4449__$1 = (function (){var statearr_4473 = state_4449;
(statearr_4473[(10)] = inst_4404__$1);

return statearr_4473;
})();
if(inst_4404__$1){
var statearr_4474_4514 = state_4449__$1;
(statearr_4474_4514[(1)] = (13));

} else {
var statearr_4475_4515 = state_4449__$1;
(statearr_4475_4515[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (9))){
var inst_4426 = (state_4449[(2)]);
var state_4449__$1 = state_4449;
var statearr_4476_4516 = state_4449__$1;
(statearr_4476_4516[(2)] = inst_4426);

(statearr_4476_4516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (5))){
var inst_4387 = cljs.core.deref.call(null,mults);
var inst_4388 = cljs.core.vals.call(null,inst_4387);
var inst_4389 = cljs.core.seq.call(null,inst_4388);
var inst_4390 = inst_4389;
var inst_4391 = null;
var inst_4392 = (0);
var inst_4393 = (0);
var state_4449__$1 = (function (){var statearr_4477 = state_4449;
(statearr_4477[(12)] = inst_4390);

(statearr_4477[(13)] = inst_4391);

(statearr_4477[(15)] = inst_4393);

(statearr_4477[(16)] = inst_4392);

return statearr_4477;
})();
var statearr_4478_4517 = state_4449__$1;
(statearr_4478_4517[(2)] = null);

(statearr_4478_4517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (14))){
var state_4449__$1 = state_4449;
var statearr_4482_4518 = state_4449__$1;
(statearr_4482_4518[(2)] = null);

(statearr_4482_4518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (16))){
var inst_4404 = (state_4449[(10)]);
var inst_4408 = cljs.core.chunk_first.call(null,inst_4404);
var inst_4409 = cljs.core.chunk_rest.call(null,inst_4404);
var inst_4410 = cljs.core.count.call(null,inst_4408);
var inst_4390 = inst_4409;
var inst_4391 = inst_4408;
var inst_4392 = inst_4410;
var inst_4393 = (0);
var state_4449__$1 = (function (){var statearr_4483 = state_4449;
(statearr_4483[(12)] = inst_4390);

(statearr_4483[(13)] = inst_4391);

(statearr_4483[(15)] = inst_4393);

(statearr_4483[(16)] = inst_4392);

return statearr_4483;
})();
var statearr_4484_4519 = state_4449__$1;
(statearr_4484_4519[(2)] = null);

(statearr_4484_4519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (10))){
var inst_4390 = (state_4449[(12)]);
var inst_4391 = (state_4449[(13)]);
var inst_4393 = (state_4449[(15)]);
var inst_4392 = (state_4449[(16)]);
var inst_4398 = cljs.core._nth.call(null,inst_4391,inst_4393);
var inst_4399 = cljs.core.async.muxch_STAR_.call(null,inst_4398);
var inst_4400 = cljs.core.async.close_BANG_.call(null,inst_4399);
var inst_4401 = (inst_4393 + (1));
var tmp4479 = inst_4390;
var tmp4480 = inst_4391;
var tmp4481 = inst_4392;
var inst_4390__$1 = tmp4479;
var inst_4391__$1 = tmp4480;
var inst_4392__$1 = tmp4481;
var inst_4393__$1 = inst_4401;
var state_4449__$1 = (function (){var statearr_4485 = state_4449;
(statearr_4485[(12)] = inst_4390__$1);

(statearr_4485[(13)] = inst_4391__$1);

(statearr_4485[(15)] = inst_4393__$1);

(statearr_4485[(17)] = inst_4400);

(statearr_4485[(16)] = inst_4392__$1);

return statearr_4485;
})();
var statearr_4486_4520 = state_4449__$1;
(statearr_4486_4520[(2)] = null);

(statearr_4486_4520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (18))){
var inst_4419 = (state_4449[(2)]);
var state_4449__$1 = state_4449;
var statearr_4487_4521 = state_4449__$1;
(statearr_4487_4521[(2)] = inst_4419);

(statearr_4487_4521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4450 === (8))){
var inst_4393 = (state_4449[(15)]);
var inst_4392 = (state_4449[(16)]);
var inst_4395 = (inst_4393 < inst_4392);
var inst_4396 = inst_4395;
var state_4449__$1 = state_4449;
if(cljs.core.truth_(inst_4396)){
var statearr_4488_4522 = state_4449__$1;
(statearr_4488_4522[(1)] = (10));

} else {
var statearr_4489_4523 = state_4449__$1;
(statearr_4489_4523[(1)] = (11));

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
});})(c__3261__auto___4495,mults,ensure_mult,p))
;
return ((function (switch__3171__auto__,c__3261__auto___4495,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__3172__auto__ = null;
var cljs$core$async$state_machine__3172__auto____0 = (function (){
var statearr_4490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4490[(0)] = cljs$core$async$state_machine__3172__auto__);

(statearr_4490[(1)] = (1));

return statearr_4490;
});
var cljs$core$async$state_machine__3172__auto____1 = (function (state_4449){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_4449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e4491){if((e4491 instanceof Object)){
var ex__3175__auto__ = e4491;
var statearr_4492_4524 = state_4449;
(statearr_4492_4524[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4525 = state_4449;
state_4449 = G__4525;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$state_machine__3172__auto__ = function(state_4449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3172__auto____1.call(this,state_4449);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3172__auto____0;
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3172__auto____1;
return cljs$core$async$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___4495,mults,ensure_mult,p))
})();
var state__3263__auto__ = (function (){var statearr_4493 = f__3262__auto__.call(null);
(statearr_4493[(6)] = c__3261__auto___4495);

return statearr_4493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___4495,mults,ensure_mult,p))
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
var G__4527 = arguments.length;
switch (G__4527) {
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
var G__4530 = arguments.length;
switch (G__4530) {
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
var G__4533 = arguments.length;
switch (G__4533) {
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
var c__3261__auto___4600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___4600,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___4600,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_4572){
var state_val_4573 = (state_4572[(1)]);
if((state_val_4573 === (7))){
var state_4572__$1 = state_4572;
var statearr_4574_4601 = state_4572__$1;
(statearr_4574_4601[(2)] = null);

(statearr_4574_4601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4573 === (1))){
var state_4572__$1 = state_4572;
var statearr_4575_4602 = state_4572__$1;
(statearr_4575_4602[(2)] = null);

(statearr_4575_4602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4573 === (4))){
var inst_4536 = (state_4572[(7)]);
var inst_4538 = (inst_4536 < cnt);
var state_4572__$1 = state_4572;
if(cljs.core.truth_(inst_4538)){
var statearr_4576_4603 = state_4572__$1;
(statearr_4576_4603[(1)] = (6));

} else {
var statearr_4577_4604 = state_4572__$1;
(statearr_4577_4604[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4573 === (15))){
var inst_4568 = (state_4572[(2)]);
var state_4572__$1 = state_4572;
var statearr_4578_4605 = state_4572__$1;
(statearr_4578_4605[(2)] = inst_4568);

(statearr_4578_4605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4573 === (13))){
var inst_4561 = cljs.core.async.close_BANG_.call(null,out);
var state_4572__$1 = state_4572;
var statearr_4579_4606 = state_4572__$1;
(statearr_4579_4606[(2)] = inst_4561);

(statearr_4579_4606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4573 === (6))){
var state_4572__$1 = state_4572;
var statearr_4580_4607 = state_4572__$1;
(statearr_4580_4607[(2)] = null);

(statearr_4580_4607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4573 === (3))){
var inst_4570 = (state_4572[(2)]);
var state_4572__$1 = state_4572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4572__$1,inst_4570);
} else {
if((state_val_4573 === (12))){
var inst_4558 = (state_4572[(8)]);
var inst_4558__$1 = (state_4572[(2)]);
var inst_4559 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_4558__$1);
var state_4572__$1 = (function (){var statearr_4581 = state_4572;
(statearr_4581[(8)] = inst_4558__$1);

return statearr_4581;
})();
if(cljs.core.truth_(inst_4559)){
var statearr_4582_4608 = state_4572__$1;
(statearr_4582_4608[(1)] = (13));

} else {
var statearr_4583_4609 = state_4572__$1;
(statearr_4583_4609[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4573 === (2))){
var inst_4535 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_4536 = (0);
var state_4572__$1 = (function (){var statearr_4584 = state_4572;
(statearr_4584[(9)] = inst_4535);

(statearr_4584[(7)] = inst_4536);

return statearr_4584;
})();
var statearr_4585_4610 = state_4572__$1;
(statearr_4585_4610[(2)] = null);

(statearr_4585_4610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4573 === (11))){
var inst_4536 = (state_4572[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_4572,(10),Object,null,(9));
var inst_4545 = chs__$1.call(null,inst_4536);
var inst_4546 = done.call(null,inst_4536);
var inst_4547 = cljs.core.async.take_BANG_.call(null,inst_4545,inst_4546);
var state_4572__$1 = state_4572;
var statearr_4586_4611 = state_4572__$1;
(statearr_4586_4611[(2)] = inst_4547);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4572__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4573 === (9))){
var inst_4536 = (state_4572[(7)]);
var inst_4549 = (state_4572[(2)]);
var inst_4550 = (inst_4536 + (1));
var inst_4536__$1 = inst_4550;
var state_4572__$1 = (function (){var statearr_4587 = state_4572;
(statearr_4587[(10)] = inst_4549);

(statearr_4587[(7)] = inst_4536__$1);

return statearr_4587;
})();
var statearr_4588_4612 = state_4572__$1;
(statearr_4588_4612[(2)] = null);

(statearr_4588_4612[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4573 === (5))){
var inst_4556 = (state_4572[(2)]);
var state_4572__$1 = (function (){var statearr_4589 = state_4572;
(statearr_4589[(11)] = inst_4556);

return statearr_4589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4572__$1,(12),dchan);
} else {
if((state_val_4573 === (14))){
var inst_4558 = (state_4572[(8)]);
var inst_4563 = cljs.core.apply.call(null,f,inst_4558);
var state_4572__$1 = state_4572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4572__$1,(16),out,inst_4563);
} else {
if((state_val_4573 === (16))){
var inst_4565 = (state_4572[(2)]);
var state_4572__$1 = (function (){var statearr_4590 = state_4572;
(statearr_4590[(12)] = inst_4565);

return statearr_4590;
})();
var statearr_4591_4613 = state_4572__$1;
(statearr_4591_4613[(2)] = null);

(statearr_4591_4613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4573 === (10))){
var inst_4540 = (state_4572[(2)]);
var inst_4541 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_4572__$1 = (function (){var statearr_4592 = state_4572;
(statearr_4592[(13)] = inst_4540);

return statearr_4592;
})();
var statearr_4593_4614 = state_4572__$1;
(statearr_4593_4614[(2)] = inst_4541);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4572__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4573 === (8))){
var inst_4554 = (state_4572[(2)]);
var state_4572__$1 = state_4572;
var statearr_4594_4615 = state_4572__$1;
(statearr_4594_4615[(2)] = inst_4554);

(statearr_4594_4615[(1)] = (5));


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
});})(c__3261__auto___4600,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__3171__auto__,c__3261__auto___4600,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__3172__auto__ = null;
var cljs$core$async$state_machine__3172__auto____0 = (function (){
var statearr_4595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4595[(0)] = cljs$core$async$state_machine__3172__auto__);

(statearr_4595[(1)] = (1));

return statearr_4595;
});
var cljs$core$async$state_machine__3172__auto____1 = (function (state_4572){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_4572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e4596){if((e4596 instanceof Object)){
var ex__3175__auto__ = e4596;
var statearr_4597_4616 = state_4572;
(statearr_4597_4616[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4617 = state_4572;
state_4572 = G__4617;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$state_machine__3172__auto__ = function(state_4572){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3172__auto____1.call(this,state_4572);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3172__auto____0;
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3172__auto____1;
return cljs$core$async$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___4600,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__3263__auto__ = (function (){var statearr_4598 = f__3262__auto__.call(null);
(statearr_4598[(6)] = c__3261__auto___4600);

return statearr_4598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___4600,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__4620 = arguments.length;
switch (G__4620) {
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
var c__3261__auto___4674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___4674,out){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___4674,out){
return (function (state_4652){
var state_val_4653 = (state_4652[(1)]);
if((state_val_4653 === (7))){
var inst_4632 = (state_4652[(7)]);
var inst_4631 = (state_4652[(8)]);
var inst_4631__$1 = (state_4652[(2)]);
var inst_4632__$1 = cljs.core.nth.call(null,inst_4631__$1,(0),null);
var inst_4633 = cljs.core.nth.call(null,inst_4631__$1,(1),null);
var inst_4634 = (inst_4632__$1 == null);
var state_4652__$1 = (function (){var statearr_4654 = state_4652;
(statearr_4654[(7)] = inst_4632__$1);

(statearr_4654[(8)] = inst_4631__$1);

(statearr_4654[(9)] = inst_4633);

return statearr_4654;
})();
if(cljs.core.truth_(inst_4634)){
var statearr_4655_4675 = state_4652__$1;
(statearr_4655_4675[(1)] = (8));

} else {
var statearr_4656_4676 = state_4652__$1;
(statearr_4656_4676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4653 === (1))){
var inst_4621 = cljs.core.vec.call(null,chs);
var inst_4622 = inst_4621;
var state_4652__$1 = (function (){var statearr_4657 = state_4652;
(statearr_4657[(10)] = inst_4622);

return statearr_4657;
})();
var statearr_4658_4677 = state_4652__$1;
(statearr_4658_4677[(2)] = null);

(statearr_4658_4677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4653 === (4))){
var inst_4622 = (state_4652[(10)]);
var state_4652__$1 = state_4652;
return cljs.core.async.ioc_alts_BANG_.call(null,state_4652__$1,(7),inst_4622);
} else {
if((state_val_4653 === (6))){
var inst_4648 = (state_4652[(2)]);
var state_4652__$1 = state_4652;
var statearr_4659_4678 = state_4652__$1;
(statearr_4659_4678[(2)] = inst_4648);

(statearr_4659_4678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4653 === (3))){
var inst_4650 = (state_4652[(2)]);
var state_4652__$1 = state_4652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4652__$1,inst_4650);
} else {
if((state_val_4653 === (2))){
var inst_4622 = (state_4652[(10)]);
var inst_4624 = cljs.core.count.call(null,inst_4622);
var inst_4625 = (inst_4624 > (0));
var state_4652__$1 = state_4652;
if(cljs.core.truth_(inst_4625)){
var statearr_4661_4679 = state_4652__$1;
(statearr_4661_4679[(1)] = (4));

} else {
var statearr_4662_4680 = state_4652__$1;
(statearr_4662_4680[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4653 === (11))){
var inst_4622 = (state_4652[(10)]);
var inst_4641 = (state_4652[(2)]);
var tmp4660 = inst_4622;
var inst_4622__$1 = tmp4660;
var state_4652__$1 = (function (){var statearr_4663 = state_4652;
(statearr_4663[(11)] = inst_4641);

(statearr_4663[(10)] = inst_4622__$1);

return statearr_4663;
})();
var statearr_4664_4681 = state_4652__$1;
(statearr_4664_4681[(2)] = null);

(statearr_4664_4681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4653 === (9))){
var inst_4632 = (state_4652[(7)]);
var state_4652__$1 = state_4652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4652__$1,(11),out,inst_4632);
} else {
if((state_val_4653 === (5))){
var inst_4646 = cljs.core.async.close_BANG_.call(null,out);
var state_4652__$1 = state_4652;
var statearr_4665_4682 = state_4652__$1;
(statearr_4665_4682[(2)] = inst_4646);

(statearr_4665_4682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4653 === (10))){
var inst_4644 = (state_4652[(2)]);
var state_4652__$1 = state_4652;
var statearr_4666_4683 = state_4652__$1;
(statearr_4666_4683[(2)] = inst_4644);

(statearr_4666_4683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4653 === (8))){
var inst_4632 = (state_4652[(7)]);
var inst_4631 = (state_4652[(8)]);
var inst_4622 = (state_4652[(10)]);
var inst_4633 = (state_4652[(9)]);
var inst_4636 = (function (){var cs = inst_4622;
var vec__4627 = inst_4631;
var v = inst_4632;
var c = inst_4633;
return ((function (cs,vec__4627,v,c,inst_4632,inst_4631,inst_4622,inst_4633,state_val_4653,c__3261__auto___4674,out){
return (function (p1__4618_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__4618_SHARP_);
});
;})(cs,vec__4627,v,c,inst_4632,inst_4631,inst_4622,inst_4633,state_val_4653,c__3261__auto___4674,out))
})();
var inst_4637 = cljs.core.filterv.call(null,inst_4636,inst_4622);
var inst_4622__$1 = inst_4637;
var state_4652__$1 = (function (){var statearr_4667 = state_4652;
(statearr_4667[(10)] = inst_4622__$1);

return statearr_4667;
})();
var statearr_4668_4684 = state_4652__$1;
(statearr_4668_4684[(2)] = null);

(statearr_4668_4684[(1)] = (2));


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
});})(c__3261__auto___4674,out))
;
return ((function (switch__3171__auto__,c__3261__auto___4674,out){
return (function() {
var cljs$core$async$state_machine__3172__auto__ = null;
var cljs$core$async$state_machine__3172__auto____0 = (function (){
var statearr_4669 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4669[(0)] = cljs$core$async$state_machine__3172__auto__);

(statearr_4669[(1)] = (1));

return statearr_4669;
});
var cljs$core$async$state_machine__3172__auto____1 = (function (state_4652){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_4652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e4670){if((e4670 instanceof Object)){
var ex__3175__auto__ = e4670;
var statearr_4671_4685 = state_4652;
(statearr_4671_4685[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4686 = state_4652;
state_4652 = G__4686;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$state_machine__3172__auto__ = function(state_4652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3172__auto____1.call(this,state_4652);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3172__auto____0;
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3172__auto____1;
return cljs$core$async$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___4674,out))
})();
var state__3263__auto__ = (function (){var statearr_4672 = f__3262__auto__.call(null);
(statearr_4672[(6)] = c__3261__auto___4674);

return statearr_4672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___4674,out))
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
var G__4688 = arguments.length;
switch (G__4688) {
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
var c__3261__auto___4733 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___4733,out){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___4733,out){
return (function (state_4712){
var state_val_4713 = (state_4712[(1)]);
if((state_val_4713 === (7))){
var inst_4694 = (state_4712[(7)]);
var inst_4694__$1 = (state_4712[(2)]);
var inst_4695 = (inst_4694__$1 == null);
var inst_4696 = cljs.core.not.call(null,inst_4695);
var state_4712__$1 = (function (){var statearr_4714 = state_4712;
(statearr_4714[(7)] = inst_4694__$1);

return statearr_4714;
})();
if(inst_4696){
var statearr_4715_4734 = state_4712__$1;
(statearr_4715_4734[(1)] = (8));

} else {
var statearr_4716_4735 = state_4712__$1;
(statearr_4716_4735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (1))){
var inst_4689 = (0);
var state_4712__$1 = (function (){var statearr_4717 = state_4712;
(statearr_4717[(8)] = inst_4689);

return statearr_4717;
})();
var statearr_4718_4736 = state_4712__$1;
(statearr_4718_4736[(2)] = null);

(statearr_4718_4736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (4))){
var state_4712__$1 = state_4712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4712__$1,(7),ch);
} else {
if((state_val_4713 === (6))){
var inst_4707 = (state_4712[(2)]);
var state_4712__$1 = state_4712;
var statearr_4719_4737 = state_4712__$1;
(statearr_4719_4737[(2)] = inst_4707);

(statearr_4719_4737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (3))){
var inst_4709 = (state_4712[(2)]);
var inst_4710 = cljs.core.async.close_BANG_.call(null,out);
var state_4712__$1 = (function (){var statearr_4720 = state_4712;
(statearr_4720[(9)] = inst_4709);

return statearr_4720;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4712__$1,inst_4710);
} else {
if((state_val_4713 === (2))){
var inst_4689 = (state_4712[(8)]);
var inst_4691 = (inst_4689 < n);
var state_4712__$1 = state_4712;
if(cljs.core.truth_(inst_4691)){
var statearr_4721_4738 = state_4712__$1;
(statearr_4721_4738[(1)] = (4));

} else {
var statearr_4722_4739 = state_4712__$1;
(statearr_4722_4739[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (11))){
var inst_4689 = (state_4712[(8)]);
var inst_4699 = (state_4712[(2)]);
var inst_4700 = (inst_4689 + (1));
var inst_4689__$1 = inst_4700;
var state_4712__$1 = (function (){var statearr_4723 = state_4712;
(statearr_4723[(10)] = inst_4699);

(statearr_4723[(8)] = inst_4689__$1);

return statearr_4723;
})();
var statearr_4724_4740 = state_4712__$1;
(statearr_4724_4740[(2)] = null);

(statearr_4724_4740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (9))){
var state_4712__$1 = state_4712;
var statearr_4725_4741 = state_4712__$1;
(statearr_4725_4741[(2)] = null);

(statearr_4725_4741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (5))){
var state_4712__$1 = state_4712;
var statearr_4726_4742 = state_4712__$1;
(statearr_4726_4742[(2)] = null);

(statearr_4726_4742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (10))){
var inst_4704 = (state_4712[(2)]);
var state_4712__$1 = state_4712;
var statearr_4727_4743 = state_4712__$1;
(statearr_4727_4743[(2)] = inst_4704);

(statearr_4727_4743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4713 === (8))){
var inst_4694 = (state_4712[(7)]);
var state_4712__$1 = state_4712;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4712__$1,(11),out,inst_4694);
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
});})(c__3261__auto___4733,out))
;
return ((function (switch__3171__auto__,c__3261__auto___4733,out){
return (function() {
var cljs$core$async$state_machine__3172__auto__ = null;
var cljs$core$async$state_machine__3172__auto____0 = (function (){
var statearr_4728 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4728[(0)] = cljs$core$async$state_machine__3172__auto__);

(statearr_4728[(1)] = (1));

return statearr_4728;
});
var cljs$core$async$state_machine__3172__auto____1 = (function (state_4712){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_4712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e4729){if((e4729 instanceof Object)){
var ex__3175__auto__ = e4729;
var statearr_4730_4744 = state_4712;
(statearr_4730_4744[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4745 = state_4712;
state_4712 = G__4745;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$state_machine__3172__auto__ = function(state_4712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3172__auto____1.call(this,state_4712);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3172__auto____0;
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3172__auto____1;
return cljs$core$async$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___4733,out))
})();
var state__3263__auto__ = (function (){var statearr_4731 = f__3262__auto__.call(null);
(statearr_4731[(6)] = c__3261__auto___4733);

return statearr_4731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___4733,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async4747 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4747 = (function (f,ch,meta4748){
this.f = f;
this.ch = ch;
this.meta4748 = meta4748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4749,meta4748__$1){
var self__ = this;
var _4749__$1 = this;
return (new cljs.core.async.t_cljs$core$async4747(self__.f,self__.ch,meta4748__$1));
});

cljs.core.async.t_cljs$core$async4747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4749){
var self__ = this;
var _4749__$1 = this;
return self__.meta4748;
});

cljs.core.async.t_cljs$core$async4747.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4747.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4747.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4747.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4747.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async4750 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4750 = (function (f,ch,meta4748,_,fn1,meta4751){
this.f = f;
this.ch = ch;
this.meta4748 = meta4748;
this._ = _;
this.fn1 = fn1;
this.meta4751 = meta4751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_4752,meta4751__$1){
var self__ = this;
var _4752__$1 = this;
return (new cljs.core.async.t_cljs$core$async4750(self__.f,self__.ch,self__.meta4748,self__._,self__.fn1,meta4751__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async4750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_4752){
var self__ = this;
var _4752__$1 = this;
return self__.meta4751;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4750.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4750.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4750.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4750.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__4746_SHARP_){
return f1.call(null,(((p1__4746_SHARP_ == null))?null:self__.f.call(null,p1__4746_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async4750.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4748","meta4748",1848337379,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async4747","cljs.core.async/t_cljs$core$async4747",-963301190,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta4751","meta4751",1868106312,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4750.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4750";

cljs.core.async.t_cljs$core$async4750.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4750");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4750.
 */
cljs.core.async.__GT_t_cljs$core$async4750 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4750(f__$1,ch__$1,meta4748__$1,___$2,fn1__$1,meta4751){
return (new cljs.core.async.t_cljs$core$async4750(f__$1,ch__$1,meta4748__$1,___$2,fn1__$1,meta4751));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async4750(self__.f,self__.ch,self__.meta4748,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async4747.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4747.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async4747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4748","meta4748",1848337379,null)], null);
});

cljs.core.async.t_cljs$core$async4747.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4747";

cljs.core.async.t_cljs$core$async4747.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4747");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4747.
 */
cljs.core.async.__GT_t_cljs$core$async4747 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4747(f__$1,ch__$1,meta4748){
return (new cljs.core.async.t_cljs$core$async4747(f__$1,ch__$1,meta4748));
});

}

return (new cljs.core.async.t_cljs$core$async4747(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async4753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4753 = (function (f,ch,meta4754){
this.f = f;
this.ch = ch;
this.meta4754 = meta4754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4755,meta4754__$1){
var self__ = this;
var _4755__$1 = this;
return (new cljs.core.async.t_cljs$core$async4753(self__.f,self__.ch,meta4754__$1));
});

cljs.core.async.t_cljs$core$async4753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4755){
var self__ = this;
var _4755__$1 = this;
return self__.meta4754;
});

cljs.core.async.t_cljs$core$async4753.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4753.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4753.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4753.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4753.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4753.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async4753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4754","meta4754",-1106658385,null)], null);
});

cljs.core.async.t_cljs$core$async4753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4753";

cljs.core.async.t_cljs$core$async4753.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4753");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4753.
 */
cljs.core.async.__GT_t_cljs$core$async4753 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async4753(f__$1,ch__$1,meta4754){
return (new cljs.core.async.t_cljs$core$async4753(f__$1,ch__$1,meta4754));
});

}

return (new cljs.core.async.t_cljs$core$async4753(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async4756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4756 = (function (p,ch,meta4757){
this.p = p;
this.ch = ch;
this.meta4757 = meta4757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4758,meta4757__$1){
var self__ = this;
var _4758__$1 = this;
return (new cljs.core.async.t_cljs$core$async4756(self__.p,self__.ch,meta4757__$1));
});

cljs.core.async.t_cljs$core$async4756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4758){
var self__ = this;
var _4758__$1 = this;
return self__.meta4757;
});

cljs.core.async.t_cljs$core$async4756.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4756.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4756.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4756.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4756.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4756.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4756.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async4756.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4757","meta4757",-1932290492,null)], null);
});

cljs.core.async.t_cljs$core$async4756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4756";

cljs.core.async.t_cljs$core$async4756.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async4756");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4756.
 */
cljs.core.async.__GT_t_cljs$core$async4756 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async4756(p__$1,ch__$1,meta4757){
return (new cljs.core.async.t_cljs$core$async4756(p__$1,ch__$1,meta4757));
});

}

return (new cljs.core.async.t_cljs$core$async4756(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__4760 = arguments.length;
switch (G__4760) {
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
var c__3261__auto___4800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___4800,out){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___4800,out){
return (function (state_4781){
var state_val_4782 = (state_4781[(1)]);
if((state_val_4782 === (7))){
var inst_4777 = (state_4781[(2)]);
var state_4781__$1 = state_4781;
var statearr_4783_4801 = state_4781__$1;
(statearr_4783_4801[(2)] = inst_4777);

(statearr_4783_4801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4782 === (1))){
var state_4781__$1 = state_4781;
var statearr_4784_4802 = state_4781__$1;
(statearr_4784_4802[(2)] = null);

(statearr_4784_4802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4782 === (4))){
var inst_4763 = (state_4781[(7)]);
var inst_4763__$1 = (state_4781[(2)]);
var inst_4764 = (inst_4763__$1 == null);
var state_4781__$1 = (function (){var statearr_4785 = state_4781;
(statearr_4785[(7)] = inst_4763__$1);

return statearr_4785;
})();
if(cljs.core.truth_(inst_4764)){
var statearr_4786_4803 = state_4781__$1;
(statearr_4786_4803[(1)] = (5));

} else {
var statearr_4787_4804 = state_4781__$1;
(statearr_4787_4804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4782 === (6))){
var inst_4763 = (state_4781[(7)]);
var inst_4768 = p.call(null,inst_4763);
var state_4781__$1 = state_4781;
if(cljs.core.truth_(inst_4768)){
var statearr_4788_4805 = state_4781__$1;
(statearr_4788_4805[(1)] = (8));

} else {
var statearr_4789_4806 = state_4781__$1;
(statearr_4789_4806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4782 === (3))){
var inst_4779 = (state_4781[(2)]);
var state_4781__$1 = state_4781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4781__$1,inst_4779);
} else {
if((state_val_4782 === (2))){
var state_4781__$1 = state_4781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4781__$1,(4),ch);
} else {
if((state_val_4782 === (11))){
var inst_4771 = (state_4781[(2)]);
var state_4781__$1 = state_4781;
var statearr_4790_4807 = state_4781__$1;
(statearr_4790_4807[(2)] = inst_4771);

(statearr_4790_4807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4782 === (9))){
var state_4781__$1 = state_4781;
var statearr_4791_4808 = state_4781__$1;
(statearr_4791_4808[(2)] = null);

(statearr_4791_4808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4782 === (5))){
var inst_4766 = cljs.core.async.close_BANG_.call(null,out);
var state_4781__$1 = state_4781;
var statearr_4792_4809 = state_4781__$1;
(statearr_4792_4809[(2)] = inst_4766);

(statearr_4792_4809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4782 === (10))){
var inst_4774 = (state_4781[(2)]);
var state_4781__$1 = (function (){var statearr_4793 = state_4781;
(statearr_4793[(8)] = inst_4774);

return statearr_4793;
})();
var statearr_4794_4810 = state_4781__$1;
(statearr_4794_4810[(2)] = null);

(statearr_4794_4810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4782 === (8))){
var inst_4763 = (state_4781[(7)]);
var state_4781__$1 = state_4781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4781__$1,(11),out,inst_4763);
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
});})(c__3261__auto___4800,out))
;
return ((function (switch__3171__auto__,c__3261__auto___4800,out){
return (function() {
var cljs$core$async$state_machine__3172__auto__ = null;
var cljs$core$async$state_machine__3172__auto____0 = (function (){
var statearr_4795 = [null,null,null,null,null,null,null,null,null];
(statearr_4795[(0)] = cljs$core$async$state_machine__3172__auto__);

(statearr_4795[(1)] = (1));

return statearr_4795;
});
var cljs$core$async$state_machine__3172__auto____1 = (function (state_4781){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_4781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e4796){if((e4796 instanceof Object)){
var ex__3175__auto__ = e4796;
var statearr_4797_4811 = state_4781;
(statearr_4797_4811[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4812 = state_4781;
state_4781 = G__4812;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$state_machine__3172__auto__ = function(state_4781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3172__auto____1.call(this,state_4781);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3172__auto____0;
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3172__auto____1;
return cljs$core$async$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___4800,out))
})();
var state__3263__auto__ = (function (){var statearr_4798 = f__3262__auto__.call(null);
(statearr_4798[(6)] = c__3261__auto___4800);

return statearr_4798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___4800,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__4814 = arguments.length;
switch (G__4814) {
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
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_4877){
var state_val_4878 = (state_4877[(1)]);
if((state_val_4878 === (7))){
var inst_4873 = (state_4877[(2)]);
var state_4877__$1 = state_4877;
var statearr_4879_4917 = state_4877__$1;
(statearr_4879_4917[(2)] = inst_4873);

(statearr_4879_4917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (20))){
var inst_4843 = (state_4877[(7)]);
var inst_4854 = (state_4877[(2)]);
var inst_4855 = cljs.core.next.call(null,inst_4843);
var inst_4829 = inst_4855;
var inst_4830 = null;
var inst_4831 = (0);
var inst_4832 = (0);
var state_4877__$1 = (function (){var statearr_4880 = state_4877;
(statearr_4880[(8)] = inst_4830);

(statearr_4880[(9)] = inst_4832);

(statearr_4880[(10)] = inst_4854);

(statearr_4880[(11)] = inst_4829);

(statearr_4880[(12)] = inst_4831);

return statearr_4880;
})();
var statearr_4881_4918 = state_4877__$1;
(statearr_4881_4918[(2)] = null);

(statearr_4881_4918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (1))){
var state_4877__$1 = state_4877;
var statearr_4882_4919 = state_4877__$1;
(statearr_4882_4919[(2)] = null);

(statearr_4882_4919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (4))){
var inst_4818 = (state_4877[(13)]);
var inst_4818__$1 = (state_4877[(2)]);
var inst_4819 = (inst_4818__$1 == null);
var state_4877__$1 = (function (){var statearr_4883 = state_4877;
(statearr_4883[(13)] = inst_4818__$1);

return statearr_4883;
})();
if(cljs.core.truth_(inst_4819)){
var statearr_4884_4920 = state_4877__$1;
(statearr_4884_4920[(1)] = (5));

} else {
var statearr_4885_4921 = state_4877__$1;
(statearr_4885_4921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (15))){
var state_4877__$1 = state_4877;
var statearr_4889_4922 = state_4877__$1;
(statearr_4889_4922[(2)] = null);

(statearr_4889_4922[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (21))){
var state_4877__$1 = state_4877;
var statearr_4890_4923 = state_4877__$1;
(statearr_4890_4923[(2)] = null);

(statearr_4890_4923[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (13))){
var inst_4830 = (state_4877[(8)]);
var inst_4832 = (state_4877[(9)]);
var inst_4829 = (state_4877[(11)]);
var inst_4831 = (state_4877[(12)]);
var inst_4839 = (state_4877[(2)]);
var inst_4840 = (inst_4832 + (1));
var tmp4886 = inst_4830;
var tmp4887 = inst_4829;
var tmp4888 = inst_4831;
var inst_4829__$1 = tmp4887;
var inst_4830__$1 = tmp4886;
var inst_4831__$1 = tmp4888;
var inst_4832__$1 = inst_4840;
var state_4877__$1 = (function (){var statearr_4891 = state_4877;
(statearr_4891[(8)] = inst_4830__$1);

(statearr_4891[(9)] = inst_4832__$1);

(statearr_4891[(14)] = inst_4839);

(statearr_4891[(11)] = inst_4829__$1);

(statearr_4891[(12)] = inst_4831__$1);

return statearr_4891;
})();
var statearr_4892_4924 = state_4877__$1;
(statearr_4892_4924[(2)] = null);

(statearr_4892_4924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (22))){
var state_4877__$1 = state_4877;
var statearr_4893_4925 = state_4877__$1;
(statearr_4893_4925[(2)] = null);

(statearr_4893_4925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (6))){
var inst_4818 = (state_4877[(13)]);
var inst_4827 = f.call(null,inst_4818);
var inst_4828 = cljs.core.seq.call(null,inst_4827);
var inst_4829 = inst_4828;
var inst_4830 = null;
var inst_4831 = (0);
var inst_4832 = (0);
var state_4877__$1 = (function (){var statearr_4894 = state_4877;
(statearr_4894[(8)] = inst_4830);

(statearr_4894[(9)] = inst_4832);

(statearr_4894[(11)] = inst_4829);

(statearr_4894[(12)] = inst_4831);

return statearr_4894;
})();
var statearr_4895_4926 = state_4877__$1;
(statearr_4895_4926[(2)] = null);

(statearr_4895_4926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (17))){
var inst_4843 = (state_4877[(7)]);
var inst_4847 = cljs.core.chunk_first.call(null,inst_4843);
var inst_4848 = cljs.core.chunk_rest.call(null,inst_4843);
var inst_4849 = cljs.core.count.call(null,inst_4847);
var inst_4829 = inst_4848;
var inst_4830 = inst_4847;
var inst_4831 = inst_4849;
var inst_4832 = (0);
var state_4877__$1 = (function (){var statearr_4896 = state_4877;
(statearr_4896[(8)] = inst_4830);

(statearr_4896[(9)] = inst_4832);

(statearr_4896[(11)] = inst_4829);

(statearr_4896[(12)] = inst_4831);

return statearr_4896;
})();
var statearr_4897_4927 = state_4877__$1;
(statearr_4897_4927[(2)] = null);

(statearr_4897_4927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (3))){
var inst_4875 = (state_4877[(2)]);
var state_4877__$1 = state_4877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4877__$1,inst_4875);
} else {
if((state_val_4878 === (12))){
var inst_4863 = (state_4877[(2)]);
var state_4877__$1 = state_4877;
var statearr_4898_4928 = state_4877__$1;
(statearr_4898_4928[(2)] = inst_4863);

(statearr_4898_4928[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (2))){
var state_4877__$1 = state_4877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4877__$1,(4),in$);
} else {
if((state_val_4878 === (23))){
var inst_4871 = (state_4877[(2)]);
var state_4877__$1 = state_4877;
var statearr_4899_4929 = state_4877__$1;
(statearr_4899_4929[(2)] = inst_4871);

(statearr_4899_4929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (19))){
var inst_4858 = (state_4877[(2)]);
var state_4877__$1 = state_4877;
var statearr_4900_4930 = state_4877__$1;
(statearr_4900_4930[(2)] = inst_4858);

(statearr_4900_4930[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (11))){
var inst_4843 = (state_4877[(7)]);
var inst_4829 = (state_4877[(11)]);
var inst_4843__$1 = cljs.core.seq.call(null,inst_4829);
var state_4877__$1 = (function (){var statearr_4901 = state_4877;
(statearr_4901[(7)] = inst_4843__$1);

return statearr_4901;
})();
if(inst_4843__$1){
var statearr_4902_4931 = state_4877__$1;
(statearr_4902_4931[(1)] = (14));

} else {
var statearr_4903_4932 = state_4877__$1;
(statearr_4903_4932[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (9))){
var inst_4865 = (state_4877[(2)]);
var inst_4866 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_4877__$1 = (function (){var statearr_4904 = state_4877;
(statearr_4904[(15)] = inst_4865);

return statearr_4904;
})();
if(cljs.core.truth_(inst_4866)){
var statearr_4905_4933 = state_4877__$1;
(statearr_4905_4933[(1)] = (21));

} else {
var statearr_4906_4934 = state_4877__$1;
(statearr_4906_4934[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (5))){
var inst_4821 = cljs.core.async.close_BANG_.call(null,out);
var state_4877__$1 = state_4877;
var statearr_4907_4935 = state_4877__$1;
(statearr_4907_4935[(2)] = inst_4821);

(statearr_4907_4935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (14))){
var inst_4843 = (state_4877[(7)]);
var inst_4845 = cljs.core.chunked_seq_QMARK_.call(null,inst_4843);
var state_4877__$1 = state_4877;
if(inst_4845){
var statearr_4908_4936 = state_4877__$1;
(statearr_4908_4936[(1)] = (17));

} else {
var statearr_4909_4937 = state_4877__$1;
(statearr_4909_4937[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (16))){
var inst_4861 = (state_4877[(2)]);
var state_4877__$1 = state_4877;
var statearr_4910_4938 = state_4877__$1;
(statearr_4910_4938[(2)] = inst_4861);

(statearr_4910_4938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4878 === (10))){
var inst_4830 = (state_4877[(8)]);
var inst_4832 = (state_4877[(9)]);
var inst_4837 = cljs.core._nth.call(null,inst_4830,inst_4832);
var state_4877__$1 = state_4877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4877__$1,(13),out,inst_4837);
} else {
if((state_val_4878 === (18))){
var inst_4843 = (state_4877[(7)]);
var inst_4852 = cljs.core.first.call(null,inst_4843);
var state_4877__$1 = state_4877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4877__$1,(20),out,inst_4852);
} else {
if((state_val_4878 === (8))){
var inst_4832 = (state_4877[(9)]);
var inst_4831 = (state_4877[(12)]);
var inst_4834 = (inst_4832 < inst_4831);
var inst_4835 = inst_4834;
var state_4877__$1 = state_4877;
if(cljs.core.truth_(inst_4835)){
var statearr_4911_4939 = state_4877__$1;
(statearr_4911_4939[(1)] = (10));

} else {
var statearr_4912_4940 = state_4877__$1;
(statearr_4912_4940[(1)] = (11));

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
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__3172__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__3172__auto____0 = (function (){
var statearr_4913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4913[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__3172__auto__);

(statearr_4913[(1)] = (1));

return statearr_4913;
});
var cljs$core$async$mapcat_STAR__$_state_machine__3172__auto____1 = (function (state_4877){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_4877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e4914){if((e4914 instanceof Object)){
var ex__3175__auto__ = e4914;
var statearr_4915_4941 = state_4877;
(statearr_4915_4941[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4942 = state_4877;
state_4877 = G__4942;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__3172__auto__ = function(state_4877){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__3172__auto____1.call(this,state_4877);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__3172__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__3172__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_4916 = f__3262__auto__.call(null);
(statearr_4916[(6)] = c__3261__auto__);

return statearr_4916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__4944 = arguments.length;
switch (G__4944) {
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
var G__4947 = arguments.length;
switch (G__4947) {
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
var G__4950 = arguments.length;
switch (G__4950) {
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
var c__3261__auto___4997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___4997,out){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___4997,out){
return (function (state_4974){
var state_val_4975 = (state_4974[(1)]);
if((state_val_4975 === (7))){
var inst_4969 = (state_4974[(2)]);
var state_4974__$1 = state_4974;
var statearr_4976_4998 = state_4974__$1;
(statearr_4976_4998[(2)] = inst_4969);

(statearr_4976_4998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4975 === (1))){
var inst_4951 = null;
var state_4974__$1 = (function (){var statearr_4977 = state_4974;
(statearr_4977[(7)] = inst_4951);

return statearr_4977;
})();
var statearr_4978_4999 = state_4974__$1;
(statearr_4978_4999[(2)] = null);

(statearr_4978_4999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4975 === (4))){
var inst_4954 = (state_4974[(8)]);
var inst_4954__$1 = (state_4974[(2)]);
var inst_4955 = (inst_4954__$1 == null);
var inst_4956 = cljs.core.not.call(null,inst_4955);
var state_4974__$1 = (function (){var statearr_4979 = state_4974;
(statearr_4979[(8)] = inst_4954__$1);

return statearr_4979;
})();
if(inst_4956){
var statearr_4980_5000 = state_4974__$1;
(statearr_4980_5000[(1)] = (5));

} else {
var statearr_4981_5001 = state_4974__$1;
(statearr_4981_5001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4975 === (6))){
var state_4974__$1 = state_4974;
var statearr_4982_5002 = state_4974__$1;
(statearr_4982_5002[(2)] = null);

(statearr_4982_5002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4975 === (3))){
var inst_4971 = (state_4974[(2)]);
var inst_4972 = cljs.core.async.close_BANG_.call(null,out);
var state_4974__$1 = (function (){var statearr_4983 = state_4974;
(statearr_4983[(9)] = inst_4971);

return statearr_4983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4974__$1,inst_4972);
} else {
if((state_val_4975 === (2))){
var state_4974__$1 = state_4974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4974__$1,(4),ch);
} else {
if((state_val_4975 === (11))){
var inst_4954 = (state_4974[(8)]);
var inst_4963 = (state_4974[(2)]);
var inst_4951 = inst_4954;
var state_4974__$1 = (function (){var statearr_4984 = state_4974;
(statearr_4984[(7)] = inst_4951);

(statearr_4984[(10)] = inst_4963);

return statearr_4984;
})();
var statearr_4985_5003 = state_4974__$1;
(statearr_4985_5003[(2)] = null);

(statearr_4985_5003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4975 === (9))){
var inst_4954 = (state_4974[(8)]);
var state_4974__$1 = state_4974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4974__$1,(11),out,inst_4954);
} else {
if((state_val_4975 === (5))){
var inst_4954 = (state_4974[(8)]);
var inst_4951 = (state_4974[(7)]);
var inst_4958 = cljs.core._EQ_.call(null,inst_4954,inst_4951);
var state_4974__$1 = state_4974;
if(inst_4958){
var statearr_4987_5004 = state_4974__$1;
(statearr_4987_5004[(1)] = (8));

} else {
var statearr_4988_5005 = state_4974__$1;
(statearr_4988_5005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4975 === (10))){
var inst_4966 = (state_4974[(2)]);
var state_4974__$1 = state_4974;
var statearr_4989_5006 = state_4974__$1;
(statearr_4989_5006[(2)] = inst_4966);

(statearr_4989_5006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4975 === (8))){
var inst_4951 = (state_4974[(7)]);
var tmp4986 = inst_4951;
var inst_4951__$1 = tmp4986;
var state_4974__$1 = (function (){var statearr_4990 = state_4974;
(statearr_4990[(7)] = inst_4951__$1);

return statearr_4990;
})();
var statearr_4991_5007 = state_4974__$1;
(statearr_4991_5007[(2)] = null);

(statearr_4991_5007[(1)] = (2));


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
});})(c__3261__auto___4997,out))
;
return ((function (switch__3171__auto__,c__3261__auto___4997,out){
return (function() {
var cljs$core$async$state_machine__3172__auto__ = null;
var cljs$core$async$state_machine__3172__auto____0 = (function (){
var statearr_4992 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4992[(0)] = cljs$core$async$state_machine__3172__auto__);

(statearr_4992[(1)] = (1));

return statearr_4992;
});
var cljs$core$async$state_machine__3172__auto____1 = (function (state_4974){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_4974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e4993){if((e4993 instanceof Object)){
var ex__3175__auto__ = e4993;
var statearr_4994_5008 = state_4974;
(statearr_4994_5008[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5009 = state_4974;
state_4974 = G__5009;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$state_machine__3172__auto__ = function(state_4974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3172__auto____1.call(this,state_4974);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3172__auto____0;
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3172__auto____1;
return cljs$core$async$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___4997,out))
})();
var state__3263__auto__ = (function (){var statearr_4995 = f__3262__auto__.call(null);
(statearr_4995[(6)] = c__3261__auto___4997);

return statearr_4995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___4997,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__5011 = arguments.length;
switch (G__5011) {
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
var c__3261__auto___5077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___5077,out){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___5077,out){
return (function (state_5049){
var state_val_5050 = (state_5049[(1)]);
if((state_val_5050 === (7))){
var inst_5045 = (state_5049[(2)]);
var state_5049__$1 = state_5049;
var statearr_5051_5078 = state_5049__$1;
(statearr_5051_5078[(2)] = inst_5045);

(statearr_5051_5078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5050 === (1))){
var inst_5012 = (new Array(n));
var inst_5013 = inst_5012;
var inst_5014 = (0);
var state_5049__$1 = (function (){var statearr_5052 = state_5049;
(statearr_5052[(7)] = inst_5013);

(statearr_5052[(8)] = inst_5014);

return statearr_5052;
})();
var statearr_5053_5079 = state_5049__$1;
(statearr_5053_5079[(2)] = null);

(statearr_5053_5079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5050 === (4))){
var inst_5017 = (state_5049[(9)]);
var inst_5017__$1 = (state_5049[(2)]);
var inst_5018 = (inst_5017__$1 == null);
var inst_5019 = cljs.core.not.call(null,inst_5018);
var state_5049__$1 = (function (){var statearr_5054 = state_5049;
(statearr_5054[(9)] = inst_5017__$1);

return statearr_5054;
})();
if(inst_5019){
var statearr_5055_5080 = state_5049__$1;
(statearr_5055_5080[(1)] = (5));

} else {
var statearr_5056_5081 = state_5049__$1;
(statearr_5056_5081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5050 === (15))){
var inst_5039 = (state_5049[(2)]);
var state_5049__$1 = state_5049;
var statearr_5057_5082 = state_5049__$1;
(statearr_5057_5082[(2)] = inst_5039);

(statearr_5057_5082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5050 === (13))){
var state_5049__$1 = state_5049;
var statearr_5058_5083 = state_5049__$1;
(statearr_5058_5083[(2)] = null);

(statearr_5058_5083[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5050 === (6))){
var inst_5014 = (state_5049[(8)]);
var inst_5035 = (inst_5014 > (0));
var state_5049__$1 = state_5049;
if(cljs.core.truth_(inst_5035)){
var statearr_5059_5084 = state_5049__$1;
(statearr_5059_5084[(1)] = (12));

} else {
var statearr_5060_5085 = state_5049__$1;
(statearr_5060_5085[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5050 === (3))){
var inst_5047 = (state_5049[(2)]);
var state_5049__$1 = state_5049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5049__$1,inst_5047);
} else {
if((state_val_5050 === (12))){
var inst_5013 = (state_5049[(7)]);
var inst_5037 = cljs.core.vec.call(null,inst_5013);
var state_5049__$1 = state_5049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5049__$1,(15),out,inst_5037);
} else {
if((state_val_5050 === (2))){
var state_5049__$1 = state_5049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5049__$1,(4),ch);
} else {
if((state_val_5050 === (11))){
var inst_5029 = (state_5049[(2)]);
var inst_5030 = (new Array(n));
var inst_5013 = inst_5030;
var inst_5014 = (0);
var state_5049__$1 = (function (){var statearr_5061 = state_5049;
(statearr_5061[(7)] = inst_5013);

(statearr_5061[(8)] = inst_5014);

(statearr_5061[(10)] = inst_5029);

return statearr_5061;
})();
var statearr_5062_5086 = state_5049__$1;
(statearr_5062_5086[(2)] = null);

(statearr_5062_5086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5050 === (9))){
var inst_5013 = (state_5049[(7)]);
var inst_5027 = cljs.core.vec.call(null,inst_5013);
var state_5049__$1 = state_5049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5049__$1,(11),out,inst_5027);
} else {
if((state_val_5050 === (5))){
var inst_5022 = (state_5049[(11)]);
var inst_5013 = (state_5049[(7)]);
var inst_5014 = (state_5049[(8)]);
var inst_5017 = (state_5049[(9)]);
var inst_5021 = (inst_5013[inst_5014] = inst_5017);
var inst_5022__$1 = (inst_5014 + (1));
var inst_5023 = (inst_5022__$1 < n);
var state_5049__$1 = (function (){var statearr_5063 = state_5049;
(statearr_5063[(11)] = inst_5022__$1);

(statearr_5063[(12)] = inst_5021);

return statearr_5063;
})();
if(cljs.core.truth_(inst_5023)){
var statearr_5064_5087 = state_5049__$1;
(statearr_5064_5087[(1)] = (8));

} else {
var statearr_5065_5088 = state_5049__$1;
(statearr_5065_5088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5050 === (14))){
var inst_5042 = (state_5049[(2)]);
var inst_5043 = cljs.core.async.close_BANG_.call(null,out);
var state_5049__$1 = (function (){var statearr_5067 = state_5049;
(statearr_5067[(13)] = inst_5042);

return statearr_5067;
})();
var statearr_5068_5089 = state_5049__$1;
(statearr_5068_5089[(2)] = inst_5043);

(statearr_5068_5089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5050 === (10))){
var inst_5033 = (state_5049[(2)]);
var state_5049__$1 = state_5049;
var statearr_5069_5090 = state_5049__$1;
(statearr_5069_5090[(2)] = inst_5033);

(statearr_5069_5090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5050 === (8))){
var inst_5022 = (state_5049[(11)]);
var inst_5013 = (state_5049[(7)]);
var tmp5066 = inst_5013;
var inst_5013__$1 = tmp5066;
var inst_5014 = inst_5022;
var state_5049__$1 = (function (){var statearr_5070 = state_5049;
(statearr_5070[(7)] = inst_5013__$1);

(statearr_5070[(8)] = inst_5014);

return statearr_5070;
})();
var statearr_5071_5091 = state_5049__$1;
(statearr_5071_5091[(2)] = null);

(statearr_5071_5091[(1)] = (2));


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
});})(c__3261__auto___5077,out))
;
return ((function (switch__3171__auto__,c__3261__auto___5077,out){
return (function() {
var cljs$core$async$state_machine__3172__auto__ = null;
var cljs$core$async$state_machine__3172__auto____0 = (function (){
var statearr_5072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5072[(0)] = cljs$core$async$state_machine__3172__auto__);

(statearr_5072[(1)] = (1));

return statearr_5072;
});
var cljs$core$async$state_machine__3172__auto____1 = (function (state_5049){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_5049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e5073){if((e5073 instanceof Object)){
var ex__3175__auto__ = e5073;
var statearr_5074_5092 = state_5049;
(statearr_5074_5092[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5093 = state_5049;
state_5049 = G__5093;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$state_machine__3172__auto__ = function(state_5049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3172__auto____1.call(this,state_5049);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3172__auto____0;
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3172__auto____1;
return cljs$core$async$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___5077,out))
})();
var state__3263__auto__ = (function (){var statearr_5075 = f__3262__auto__.call(null);
(statearr_5075[(6)] = c__3261__auto___5077);

return statearr_5075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___5077,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__5095 = arguments.length;
switch (G__5095) {
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
var c__3261__auto___5165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___5165,out){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___5165,out){
return (function (state_5137){
var state_val_5138 = (state_5137[(1)]);
if((state_val_5138 === (7))){
var inst_5133 = (state_5137[(2)]);
var state_5137__$1 = state_5137;
var statearr_5139_5166 = state_5137__$1;
(statearr_5139_5166[(2)] = inst_5133);

(statearr_5139_5166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5138 === (1))){
var inst_5096 = [];
var inst_5097 = inst_5096;
var inst_5098 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_5137__$1 = (function (){var statearr_5140 = state_5137;
(statearr_5140[(7)] = inst_5097);

(statearr_5140[(8)] = inst_5098);

return statearr_5140;
})();
var statearr_5141_5167 = state_5137__$1;
(statearr_5141_5167[(2)] = null);

(statearr_5141_5167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5138 === (4))){
var inst_5101 = (state_5137[(9)]);
var inst_5101__$1 = (state_5137[(2)]);
var inst_5102 = (inst_5101__$1 == null);
var inst_5103 = cljs.core.not.call(null,inst_5102);
var state_5137__$1 = (function (){var statearr_5142 = state_5137;
(statearr_5142[(9)] = inst_5101__$1);

return statearr_5142;
})();
if(inst_5103){
var statearr_5143_5168 = state_5137__$1;
(statearr_5143_5168[(1)] = (5));

} else {
var statearr_5144_5169 = state_5137__$1;
(statearr_5144_5169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5138 === (15))){
var inst_5127 = (state_5137[(2)]);
var state_5137__$1 = state_5137;
var statearr_5145_5170 = state_5137__$1;
(statearr_5145_5170[(2)] = inst_5127);

(statearr_5145_5170[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5138 === (13))){
var state_5137__$1 = state_5137;
var statearr_5146_5171 = state_5137__$1;
(statearr_5146_5171[(2)] = null);

(statearr_5146_5171[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5138 === (6))){
var inst_5097 = (state_5137[(7)]);
var inst_5122 = inst_5097.length;
var inst_5123 = (inst_5122 > (0));
var state_5137__$1 = state_5137;
if(cljs.core.truth_(inst_5123)){
var statearr_5147_5172 = state_5137__$1;
(statearr_5147_5172[(1)] = (12));

} else {
var statearr_5148_5173 = state_5137__$1;
(statearr_5148_5173[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5138 === (3))){
var inst_5135 = (state_5137[(2)]);
var state_5137__$1 = state_5137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5137__$1,inst_5135);
} else {
if((state_val_5138 === (12))){
var inst_5097 = (state_5137[(7)]);
var inst_5125 = cljs.core.vec.call(null,inst_5097);
var state_5137__$1 = state_5137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5137__$1,(15),out,inst_5125);
} else {
if((state_val_5138 === (2))){
var state_5137__$1 = state_5137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5137__$1,(4),ch);
} else {
if((state_val_5138 === (11))){
var inst_5105 = (state_5137[(10)]);
var inst_5101 = (state_5137[(9)]);
var inst_5115 = (state_5137[(2)]);
var inst_5116 = [];
var inst_5117 = inst_5116.push(inst_5101);
var inst_5097 = inst_5116;
var inst_5098 = inst_5105;
var state_5137__$1 = (function (){var statearr_5149 = state_5137;
(statearr_5149[(7)] = inst_5097);

(statearr_5149[(8)] = inst_5098);

(statearr_5149[(11)] = inst_5115);

(statearr_5149[(12)] = inst_5117);

return statearr_5149;
})();
var statearr_5150_5174 = state_5137__$1;
(statearr_5150_5174[(2)] = null);

(statearr_5150_5174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5138 === (9))){
var inst_5097 = (state_5137[(7)]);
var inst_5113 = cljs.core.vec.call(null,inst_5097);
var state_5137__$1 = state_5137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5137__$1,(11),out,inst_5113);
} else {
if((state_val_5138 === (5))){
var inst_5098 = (state_5137[(8)]);
var inst_5105 = (state_5137[(10)]);
var inst_5101 = (state_5137[(9)]);
var inst_5105__$1 = f.call(null,inst_5101);
var inst_5106 = cljs.core._EQ_.call(null,inst_5105__$1,inst_5098);
var inst_5107 = cljs.core.keyword_identical_QMARK_.call(null,inst_5098,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_5108 = ((inst_5106) || (inst_5107));
var state_5137__$1 = (function (){var statearr_5151 = state_5137;
(statearr_5151[(10)] = inst_5105__$1);

return statearr_5151;
})();
if(cljs.core.truth_(inst_5108)){
var statearr_5152_5175 = state_5137__$1;
(statearr_5152_5175[(1)] = (8));

} else {
var statearr_5153_5176 = state_5137__$1;
(statearr_5153_5176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5138 === (14))){
var inst_5130 = (state_5137[(2)]);
var inst_5131 = cljs.core.async.close_BANG_.call(null,out);
var state_5137__$1 = (function (){var statearr_5155 = state_5137;
(statearr_5155[(13)] = inst_5130);

return statearr_5155;
})();
var statearr_5156_5177 = state_5137__$1;
(statearr_5156_5177[(2)] = inst_5131);

(statearr_5156_5177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5138 === (10))){
var inst_5120 = (state_5137[(2)]);
var state_5137__$1 = state_5137;
var statearr_5157_5178 = state_5137__$1;
(statearr_5157_5178[(2)] = inst_5120);

(statearr_5157_5178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5138 === (8))){
var inst_5097 = (state_5137[(7)]);
var inst_5105 = (state_5137[(10)]);
var inst_5101 = (state_5137[(9)]);
var inst_5110 = inst_5097.push(inst_5101);
var tmp5154 = inst_5097;
var inst_5097__$1 = tmp5154;
var inst_5098 = inst_5105;
var state_5137__$1 = (function (){var statearr_5158 = state_5137;
(statearr_5158[(7)] = inst_5097__$1);

(statearr_5158[(14)] = inst_5110);

(statearr_5158[(8)] = inst_5098);

return statearr_5158;
})();
var statearr_5159_5179 = state_5137__$1;
(statearr_5159_5179[(2)] = null);

(statearr_5159_5179[(1)] = (2));


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
});})(c__3261__auto___5165,out))
;
return ((function (switch__3171__auto__,c__3261__auto___5165,out){
return (function() {
var cljs$core$async$state_machine__3172__auto__ = null;
var cljs$core$async$state_machine__3172__auto____0 = (function (){
var statearr_5160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5160[(0)] = cljs$core$async$state_machine__3172__auto__);

(statearr_5160[(1)] = (1));

return statearr_5160;
});
var cljs$core$async$state_machine__3172__auto____1 = (function (state_5137){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_5137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e5161){if((e5161 instanceof Object)){
var ex__3175__auto__ = e5161;
var statearr_5162_5180 = state_5137;
(statearr_5162_5180[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5181 = state_5137;
state_5137 = G__5181;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
cljs$core$async$state_machine__3172__auto__ = function(state_5137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3172__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3172__auto____1.call(this,state_5137);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3172__auto____0;
cljs$core$async$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3172__auto____1;
return cljs$core$async$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___5165,out))
})();
var state__3263__auto__ = (function (){var statearr_5163 = f__3262__auto__.call(null);
(statearr_5163[(6)] = c__3261__auto___5165);

return statearr_5163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___5165,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
