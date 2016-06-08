// Compiled by ClojureScript 0.0-2268
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t28119 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28119 = (function (f,fn_handler,meta28120){
this.f = f;
this.fn_handler = fn_handler;
this.meta28120 = meta28120;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28119.cljs$lang$type = true;
cljs.core.async.t28119.cljs$lang$ctorStr = "cljs.core.async/t28119";
cljs.core.async.t28119.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t28119");
});
cljs.core.async.t28119.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28119.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t28119.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t28119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28121){var self__ = this;
var _28121__$1 = this;return self__.meta28120;
});
cljs.core.async.t28119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28121,meta28120__$1){var self__ = this;
var _28121__$1 = this;return (new cljs.core.async.t28119(self__.f,self__.fn_handler,meta28120__$1));
});
cljs.core.async.__GT_t28119 = (function __GT_t28119(f__$1,fn_handler__$1,meta28120){return (new cljs.core.async.t28119(f__$1,fn_handler__$1,meta28120));
});
}
return (new cljs.core.async.t28119(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__28123 = buff;if(G__28123)
{var bit__4201__auto__ = null;if(cljs.core.truth_((function (){var or__3551__auto__ = bit__4201__auto__;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return G__28123.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__28123.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28123);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__28123);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_28124 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_28124);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_28124,ret){
return (function (){return fn1.call(null,val_28124);
});})(val_28124,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4407__auto___28125 = n;var x_28126 = (0);while(true){
if((x_28126 < n__4407__auto___28125))
{(a[x_28126] = (0));
{
var G__28127 = (x_28126 + (1));
x_28126 = G__28127;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__28128 = (i + (1));
i = G__28128;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t28132 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28132 = (function (flag,alt_flag,meta28133){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta28133 = meta28133;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28132.cljs$lang$type = true;
cljs.core.async.t28132.cljs$lang$ctorStr = "cljs.core.async/t28132";
cljs.core.async.t28132.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t28132");
});})(flag))
;
cljs.core.async.t28132.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t28132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t28132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28134){var self__ = this;
var _28134__$1 = this;return self__.meta28133;
});})(flag))
;
cljs.core.async.t28132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28134,meta28133__$1){var self__ = this;
var _28134__$1 = this;return (new cljs.core.async.t28132(self__.flag,self__.alt_flag,meta28133__$1));
});})(flag))
;
cljs.core.async.__GT_t28132 = ((function (flag){
return (function __GT_t28132(flag__$1,alt_flag__$1,meta28133){return (new cljs.core.async.t28132(flag__$1,alt_flag__$1,meta28133));
});})(flag))
;
}
return (new cljs.core.async.t28132(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t28138 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28138 = (function (cb,flag,alt_handler,meta28139){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta28139 = meta28139;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28138.cljs$lang$type = true;
cljs.core.async.t28138.cljs$lang$ctorStr = "cljs.core.async/t28138";
cljs.core.async.t28138.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t28138");
});
cljs.core.async.t28138.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t28138.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t28138.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t28138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28140){var self__ = this;
var _28140__$1 = this;return self__.meta28139;
});
cljs.core.async.t28138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28140,meta28139__$1){var self__ = this;
var _28140__$1 = this;return (new cljs.core.async.t28138(self__.cb,self__.flag,self__.alt_handler,meta28139__$1));
});
cljs.core.async.__GT_t28138 = (function __GT_t28138(cb__$1,flag__$1,alt_handler__$1,meta28139){return (new cljs.core.async.t28138(cb__$1,flag__$1,alt_handler__$1,meta28139));
});
}
return (new cljs.core.async.t28138(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28141_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28141_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28142_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28142_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3551__auto__ = wport;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__28143 = (i + (1));
i = G__28143;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3551__auto__ = ret;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3539__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3539__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3539__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__28144){var map__28146 = p__28144;var map__28146__$1 = ((cljs.core.seq_QMARK_.call(null,map__28146))?cljs.core.apply.call(null,cljs.core.hash_map,map__28146):map__28146);var opts = map__28146__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__28144 = null;if (arguments.length > 1) {
  p__28144 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__28144);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__28147){
var ports = cljs.core.first(arglist__28147);
var p__28144 = cljs.core.rest(arglist__28147);
return alts_BANG___delegate(ports,p__28144);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6202__auto___28242 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___28242){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___28242){
return (function (state_28218){var state_val_28219 = (state_28218[(1)]);if((state_val_28219 === (7)))
{var inst_28214 = (state_28218[(2)]);var state_28218__$1 = state_28218;var statearr_28220_28243 = state_28218__$1;(statearr_28220_28243[(2)] = inst_28214);
(statearr_28220_28243[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28219 === (1)))
{var state_28218__$1 = state_28218;var statearr_28221_28244 = state_28218__$1;(statearr_28221_28244[(2)] = null);
(statearr_28221_28244[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28219 === (4)))
{var inst_28197 = (state_28218[(7)]);var inst_28197__$1 = (state_28218[(2)]);var inst_28198 = (inst_28197__$1 == null);var state_28218__$1 = (function (){var statearr_28222 = state_28218;(statearr_28222[(7)] = inst_28197__$1);
return statearr_28222;
})();if(cljs.core.truth_(inst_28198))
{var statearr_28223_28245 = state_28218__$1;(statearr_28223_28245[(1)] = (5));
} else
{var statearr_28224_28246 = state_28218__$1;(statearr_28224_28246[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28219 === (13)))
{var state_28218__$1 = state_28218;var statearr_28225_28247 = state_28218__$1;(statearr_28225_28247[(2)] = null);
(statearr_28225_28247[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28219 === (6)))
{var inst_28197 = (state_28218[(7)]);var state_28218__$1 = state_28218;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28218__$1,(11),to,inst_28197);
} else
{if((state_val_28219 === (3)))
{var inst_28216 = (state_28218[(2)]);var state_28218__$1 = state_28218;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28218__$1,inst_28216);
} else
{if((state_val_28219 === (12)))
{var state_28218__$1 = state_28218;var statearr_28226_28248 = state_28218__$1;(statearr_28226_28248[(2)] = null);
(statearr_28226_28248[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28219 === (2)))
{var state_28218__$1 = state_28218;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28218__$1,(4),from);
} else
{if((state_val_28219 === (11)))
{var inst_28207 = (state_28218[(2)]);var state_28218__$1 = state_28218;if(cljs.core.truth_(inst_28207))
{var statearr_28227_28249 = state_28218__$1;(statearr_28227_28249[(1)] = (12));
} else
{var statearr_28228_28250 = state_28218__$1;(statearr_28228_28250[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28219 === (9)))
{var state_28218__$1 = state_28218;var statearr_28229_28251 = state_28218__$1;(statearr_28229_28251[(2)] = null);
(statearr_28229_28251[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28219 === (5)))
{var state_28218__$1 = state_28218;if(cljs.core.truth_(close_QMARK_))
{var statearr_28230_28252 = state_28218__$1;(statearr_28230_28252[(1)] = (8));
} else
{var statearr_28231_28253 = state_28218__$1;(statearr_28231_28253[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28219 === (14)))
{var inst_28212 = (state_28218[(2)]);var state_28218__$1 = state_28218;var statearr_28232_28254 = state_28218__$1;(statearr_28232_28254[(2)] = inst_28212);
(statearr_28232_28254[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28219 === (10)))
{var inst_28204 = (state_28218[(2)]);var state_28218__$1 = state_28218;var statearr_28233_28255 = state_28218__$1;(statearr_28233_28255[(2)] = inst_28204);
(statearr_28233_28255[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28219 === (8)))
{var inst_28201 = cljs.core.async.close_BANG_.call(null,to);var state_28218__$1 = state_28218;var statearr_28234_28256 = state_28218__$1;(statearr_28234_28256[(2)] = inst_28201);
(statearr_28234_28256[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___28242))
;return ((function (switch__6187__auto__,c__6202__auto___28242){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_28238 = [null,null,null,null,null,null,null,null];(statearr_28238[(0)] = state_machine__6188__auto__);
(statearr_28238[(1)] = (1));
return statearr_28238;
});
var state_machine__6188__auto____1 = (function (state_28218){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_28218);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e28239){if((e28239 instanceof Object))
{var ex__6191__auto__ = e28239;var statearr_28240_28257 = state_28218;(statearr_28240_28257[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28218);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28239;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28258 = state_28218;
state_28218 = G__28258;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_28218){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_28218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___28242))
})();var state__6204__auto__ = (function (){var statearr_28241 = f__6203__auto__.call(null);(statearr_28241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___28242);
return statearr_28241;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___28242))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__28441){var vec__28442 = p__28441;var v = cljs.core.nth.call(null,vec__28442,(0),null);var p = cljs.core.nth.call(null,vec__28442,(1),null);var job = vec__28442;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6202__auto___28623 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___28623,res,vec__28442,v,p,job,jobs,results){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___28623,res,vec__28442,v,p,job,jobs,results){
return (function (state_28447){var state_val_28448 = (state_28447[(1)]);if((state_val_28448 === (2)))
{var inst_28444 = (state_28447[(2)]);var inst_28445 = cljs.core.async.close_BANG_.call(null,res);var state_28447__$1 = (function (){var statearr_28449 = state_28447;(statearr_28449[(7)] = inst_28444);
return statearr_28449;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28447__$1,inst_28445);
} else
{if((state_val_28448 === (1)))
{var state_28447__$1 = state_28447;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28447__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6202__auto___28623,res,vec__28442,v,p,job,jobs,results))
;return ((function (switch__6187__auto__,c__6202__auto___28623,res,vec__28442,v,p,job,jobs,results){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_28453 = [null,null,null,null,null,null,null,null];(statearr_28453[(0)] = state_machine__6188__auto__);
(statearr_28453[(1)] = (1));
return statearr_28453;
});
var state_machine__6188__auto____1 = (function (state_28447){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_28447);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e28454){if((e28454 instanceof Object))
{var ex__6191__auto__ = e28454;var statearr_28455_28624 = state_28447;(statearr_28455_28624[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28447);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28625 = state_28447;
state_28447 = G__28625;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_28447){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_28447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___28623,res,vec__28442,v,p,job,jobs,results))
})();var state__6204__auto__ = (function (){var statearr_28456 = f__6203__auto__.call(null);(statearr_28456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___28623);
return statearr_28456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___28623,res,vec__28442,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__28457){var vec__28458 = p__28457;var v = cljs.core.nth.call(null,vec__28458,(0),null);var p = cljs.core.nth.call(null,vec__28458,(1),null);var job = vec__28458;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4407__auto___28626 = n;var __28627 = (0);while(true){
if((__28627 < n__4407__auto___28626))
{var G__28459_28628 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__28459_28628) {
case "async":
var c__6202__auto___28630 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__28627,c__6202__auto___28630,G__28459_28628,n__4407__auto___28626,jobs,results,process,async){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (__28627,c__6202__auto___28630,G__28459_28628,n__4407__auto___28626,jobs,results,process,async){
return (function (state_28472){var state_val_28473 = (state_28472[(1)]);if((state_val_28473 === (7)))
{var inst_28468 = (state_28472[(2)]);var state_28472__$1 = state_28472;var statearr_28474_28631 = state_28472__$1;(statearr_28474_28631[(2)] = inst_28468);
(statearr_28474_28631[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28473 === (6)))
{var state_28472__$1 = state_28472;var statearr_28475_28632 = state_28472__$1;(statearr_28475_28632[(2)] = null);
(statearr_28475_28632[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28473 === (5)))
{var state_28472__$1 = state_28472;var statearr_28476_28633 = state_28472__$1;(statearr_28476_28633[(2)] = null);
(statearr_28476_28633[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28473 === (4)))
{var inst_28462 = (state_28472[(2)]);var inst_28463 = async.call(null,inst_28462);var state_28472__$1 = state_28472;if(cljs.core.truth_(inst_28463))
{var statearr_28477_28634 = state_28472__$1;(statearr_28477_28634[(1)] = (5));
} else
{var statearr_28478_28635 = state_28472__$1;(statearr_28478_28635[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28473 === (3)))
{var inst_28470 = (state_28472[(2)]);var state_28472__$1 = state_28472;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28472__$1,inst_28470);
} else
{if((state_val_28473 === (2)))
{var state_28472__$1 = state_28472;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28472__$1,(4),jobs);
} else
{if((state_val_28473 === (1)))
{var state_28472__$1 = state_28472;var statearr_28479_28636 = state_28472__$1;(statearr_28479_28636[(2)] = null);
(statearr_28479_28636[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__28627,c__6202__auto___28630,G__28459_28628,n__4407__auto___28626,jobs,results,process,async))
;return ((function (__28627,switch__6187__auto__,c__6202__auto___28630,G__28459_28628,n__4407__auto___28626,jobs,results,process,async){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_28483 = [null,null,null,null,null,null,null];(statearr_28483[(0)] = state_machine__6188__auto__);
(statearr_28483[(1)] = (1));
return statearr_28483;
});
var state_machine__6188__auto____1 = (function (state_28472){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_28472);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e28484){if((e28484 instanceof Object))
{var ex__6191__auto__ = e28484;var statearr_28485_28637 = state_28472;(statearr_28485_28637[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28472);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28484;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28638 = state_28472;
state_28472 = G__28638;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_28472){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_28472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(__28627,switch__6187__auto__,c__6202__auto___28630,G__28459_28628,n__4407__auto___28626,jobs,results,process,async))
})();var state__6204__auto__ = (function (){var statearr_28486 = f__6203__auto__.call(null);(statearr_28486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___28630);
return statearr_28486;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(__28627,c__6202__auto___28630,G__28459_28628,n__4407__auto___28626,jobs,results,process,async))
);

break;
case "compute":
var c__6202__auto___28639 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__28627,c__6202__auto___28639,G__28459_28628,n__4407__auto___28626,jobs,results,process,async){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (__28627,c__6202__auto___28639,G__28459_28628,n__4407__auto___28626,jobs,results,process,async){
return (function (state_28499){var state_val_28500 = (state_28499[(1)]);if((state_val_28500 === (7)))
{var inst_28495 = (state_28499[(2)]);var state_28499__$1 = state_28499;var statearr_28501_28640 = state_28499__$1;(statearr_28501_28640[(2)] = inst_28495);
(statearr_28501_28640[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28500 === (6)))
{var state_28499__$1 = state_28499;var statearr_28502_28641 = state_28499__$1;(statearr_28502_28641[(2)] = null);
(statearr_28502_28641[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28500 === (5)))
{var state_28499__$1 = state_28499;var statearr_28503_28642 = state_28499__$1;(statearr_28503_28642[(2)] = null);
(statearr_28503_28642[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28500 === (4)))
{var inst_28489 = (state_28499[(2)]);var inst_28490 = process.call(null,inst_28489);var state_28499__$1 = state_28499;if(cljs.core.truth_(inst_28490))
{var statearr_28504_28643 = state_28499__$1;(statearr_28504_28643[(1)] = (5));
} else
{var statearr_28505_28644 = state_28499__$1;(statearr_28505_28644[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28500 === (3)))
{var inst_28497 = (state_28499[(2)]);var state_28499__$1 = state_28499;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28499__$1,inst_28497);
} else
{if((state_val_28500 === (2)))
{var state_28499__$1 = state_28499;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28499__$1,(4),jobs);
} else
{if((state_val_28500 === (1)))
{var state_28499__$1 = state_28499;var statearr_28506_28645 = state_28499__$1;(statearr_28506_28645[(2)] = null);
(statearr_28506_28645[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__28627,c__6202__auto___28639,G__28459_28628,n__4407__auto___28626,jobs,results,process,async))
;return ((function (__28627,switch__6187__auto__,c__6202__auto___28639,G__28459_28628,n__4407__auto___28626,jobs,results,process,async){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_28510 = [null,null,null,null,null,null,null];(statearr_28510[(0)] = state_machine__6188__auto__);
(statearr_28510[(1)] = (1));
return statearr_28510;
});
var state_machine__6188__auto____1 = (function (state_28499){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_28499);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e28511){if((e28511 instanceof Object))
{var ex__6191__auto__ = e28511;var statearr_28512_28646 = state_28499;(statearr_28512_28646[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28499);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28511;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28647 = state_28499;
state_28499 = G__28647;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_28499){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_28499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(__28627,switch__6187__auto__,c__6202__auto___28639,G__28459_28628,n__4407__auto___28626,jobs,results,process,async))
})();var state__6204__auto__ = (function (){var statearr_28513 = f__6203__auto__.call(null);(statearr_28513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___28639);
return statearr_28513;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(__28627,c__6202__auto___28639,G__28459_28628,n__4407__auto___28626,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__28648 = (__28627 + (1));
__28627 = G__28648;
continue;
}
} else
{}
break;
}
var c__6202__auto___28649 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___28649,jobs,results,process,async){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___28649,jobs,results,process,async){
return (function (state_28534){var state_val_28535 = (state_28534[(1)]);if((state_val_28535 === (9)))
{var inst_28527 = (state_28534[(2)]);var state_28534__$1 = (function (){var statearr_28536 = state_28534;(statearr_28536[(7)] = inst_28527);
return statearr_28536;
})();var statearr_28537_28650 = state_28534__$1;(statearr_28537_28650[(2)] = null);
(statearr_28537_28650[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28535 === (8)))
{var inst_28521 = (state_28534[(8)]);var inst_28525 = (state_28534[(2)]);var state_28534__$1 = (function (){var statearr_28538 = state_28534;(statearr_28538[(9)] = inst_28525);
return statearr_28538;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28534__$1,(9),results,inst_28521);
} else
{if((state_val_28535 === (7)))
{var inst_28530 = (state_28534[(2)]);var state_28534__$1 = state_28534;var statearr_28539_28651 = state_28534__$1;(statearr_28539_28651[(2)] = inst_28530);
(statearr_28539_28651[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28535 === (6)))
{var inst_28521 = (state_28534[(8)]);var inst_28516 = (state_28534[(10)]);var inst_28521__$1 = cljs.core.async.chan.call(null,(1));var inst_28522 = [inst_28516,inst_28521__$1];var inst_28523 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_28522,null));var state_28534__$1 = (function (){var statearr_28540 = state_28534;(statearr_28540[(8)] = inst_28521__$1);
return statearr_28540;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28534__$1,(8),jobs,inst_28523);
} else
{if((state_val_28535 === (5)))
{var inst_28519 = cljs.core.async.close_BANG_.call(null,jobs);var state_28534__$1 = state_28534;var statearr_28541_28652 = state_28534__$1;(statearr_28541_28652[(2)] = inst_28519);
(statearr_28541_28652[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28535 === (4)))
{var inst_28516 = (state_28534[(10)]);var inst_28516__$1 = (state_28534[(2)]);var inst_28517 = (inst_28516__$1 == null);var state_28534__$1 = (function (){var statearr_28542 = state_28534;(statearr_28542[(10)] = inst_28516__$1);
return statearr_28542;
})();if(cljs.core.truth_(inst_28517))
{var statearr_28543_28653 = state_28534__$1;(statearr_28543_28653[(1)] = (5));
} else
{var statearr_28544_28654 = state_28534__$1;(statearr_28544_28654[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28535 === (3)))
{var inst_28532 = (state_28534[(2)]);var state_28534__$1 = state_28534;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28534__$1,inst_28532);
} else
{if((state_val_28535 === (2)))
{var state_28534__$1 = state_28534;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28534__$1,(4),from);
} else
{if((state_val_28535 === (1)))
{var state_28534__$1 = state_28534;var statearr_28545_28655 = state_28534__$1;(statearr_28545_28655[(2)] = null);
(statearr_28545_28655[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___28649,jobs,results,process,async))
;return ((function (switch__6187__auto__,c__6202__auto___28649,jobs,results,process,async){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_28549 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28549[(0)] = state_machine__6188__auto__);
(statearr_28549[(1)] = (1));
return statearr_28549;
});
var state_machine__6188__auto____1 = (function (state_28534){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_28534);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e28550){if((e28550 instanceof Object))
{var ex__6191__auto__ = e28550;var statearr_28551_28656 = state_28534;(statearr_28551_28656[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28534);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28550;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28657 = state_28534;
state_28534 = G__28657;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_28534){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_28534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___28649,jobs,results,process,async))
})();var state__6204__auto__ = (function (){var statearr_28552 = f__6203__auto__.call(null);(statearr_28552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___28649);
return statearr_28552;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___28649,jobs,results,process,async))
);
var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,jobs,results,process,async){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,jobs,results,process,async){
return (function (state_28590){var state_val_28591 = (state_28590[(1)]);if((state_val_28591 === (7)))
{var inst_28586 = (state_28590[(2)]);var state_28590__$1 = state_28590;var statearr_28592_28658 = state_28590__$1;(statearr_28592_28658[(2)] = inst_28586);
(statearr_28592_28658[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28591 === (20)))
{var state_28590__$1 = state_28590;var statearr_28593_28659 = state_28590__$1;(statearr_28593_28659[(2)] = null);
(statearr_28593_28659[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28591 === (1)))
{var state_28590__$1 = state_28590;var statearr_28594_28660 = state_28590__$1;(statearr_28594_28660[(2)] = null);
(statearr_28594_28660[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28591 === (4)))
{var inst_28555 = (state_28590[(7)]);var inst_28555__$1 = (state_28590[(2)]);var inst_28556 = (inst_28555__$1 == null);var state_28590__$1 = (function (){var statearr_28595 = state_28590;(statearr_28595[(7)] = inst_28555__$1);
return statearr_28595;
})();if(cljs.core.truth_(inst_28556))
{var statearr_28596_28661 = state_28590__$1;(statearr_28596_28661[(1)] = (5));
} else
{var statearr_28597_28662 = state_28590__$1;(statearr_28597_28662[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28591 === (15)))
{var inst_28568 = (state_28590[(8)]);var state_28590__$1 = state_28590;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28590__$1,(18),to,inst_28568);
} else
{if((state_val_28591 === (21)))
{var inst_28581 = (state_28590[(2)]);var state_28590__$1 = state_28590;var statearr_28598_28663 = state_28590__$1;(statearr_28598_28663[(2)] = inst_28581);
(statearr_28598_28663[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28591 === (13)))
{var inst_28583 = (state_28590[(2)]);var state_28590__$1 = (function (){var statearr_28599 = state_28590;(statearr_28599[(9)] = inst_28583);
return statearr_28599;
})();var statearr_28600_28664 = state_28590__$1;(statearr_28600_28664[(2)] = null);
(statearr_28600_28664[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28591 === (6)))
{var inst_28555 = (state_28590[(7)]);var state_28590__$1 = state_28590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28590__$1,(11),inst_28555);
} else
{if((state_val_28591 === (17)))
{var inst_28576 = (state_28590[(2)]);var state_28590__$1 = state_28590;if(cljs.core.truth_(inst_28576))
{var statearr_28601_28665 = state_28590__$1;(statearr_28601_28665[(1)] = (19));
} else
{var statearr_28602_28666 = state_28590__$1;(statearr_28602_28666[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28591 === (3)))
{var inst_28588 = (state_28590[(2)]);var state_28590__$1 = state_28590;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28590__$1,inst_28588);
} else
{if((state_val_28591 === (12)))
{var inst_28565 = (state_28590[(10)]);var state_28590__$1 = state_28590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28590__$1,(14),inst_28565);
} else
{if((state_val_28591 === (2)))
{var state_28590__$1 = state_28590;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28590__$1,(4),results);
} else
{if((state_val_28591 === (19)))
{var state_28590__$1 = state_28590;var statearr_28603_28667 = state_28590__$1;(statearr_28603_28667[(2)] = null);
(statearr_28603_28667[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28591 === (11)))
{var inst_28565 = (state_28590[(2)]);var state_28590__$1 = (function (){var statearr_28604 = state_28590;(statearr_28604[(10)] = inst_28565);
return statearr_28604;
})();var statearr_28605_28668 = state_28590__$1;(statearr_28605_28668[(2)] = null);
(statearr_28605_28668[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28591 === (9)))
{var state_28590__$1 = state_28590;var statearr_28606_28669 = state_28590__$1;(statearr_28606_28669[(2)] = null);
(statearr_28606_28669[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28591 === (5)))
{var state_28590__$1 = state_28590;if(cljs.core.truth_(close_QMARK_))
{var statearr_28607_28670 = state_28590__$1;(statearr_28607_28670[(1)] = (8));
} else
{var statearr_28608_28671 = state_28590__$1;(statearr_28608_28671[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28591 === (14)))
{var inst_28570 = (state_28590[(11)]);var inst_28568 = (state_28590[(8)]);var inst_28568__$1 = (state_28590[(2)]);var inst_28569 = (inst_28568__$1 == null);var inst_28570__$1 = cljs.core.not.call(null,inst_28569);var state_28590__$1 = (function (){var statearr_28609 = state_28590;(statearr_28609[(11)] = inst_28570__$1);
(statearr_28609[(8)] = inst_28568__$1);
return statearr_28609;
})();if(inst_28570__$1)
{var statearr_28610_28672 = state_28590__$1;(statearr_28610_28672[(1)] = (15));
} else
{var statearr_28611_28673 = state_28590__$1;(statearr_28611_28673[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28591 === (16)))
{var inst_28570 = (state_28590[(11)]);var state_28590__$1 = state_28590;var statearr_28612_28674 = state_28590__$1;(statearr_28612_28674[(2)] = inst_28570);
(statearr_28612_28674[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28591 === (10)))
{var inst_28562 = (state_28590[(2)]);var state_28590__$1 = state_28590;var statearr_28613_28675 = state_28590__$1;(statearr_28613_28675[(2)] = inst_28562);
(statearr_28613_28675[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28591 === (18)))
{var inst_28573 = (state_28590[(2)]);var state_28590__$1 = state_28590;var statearr_28614_28676 = state_28590__$1;(statearr_28614_28676[(2)] = inst_28573);
(statearr_28614_28676[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28591 === (8)))
{var inst_28559 = cljs.core.async.close_BANG_.call(null,to);var state_28590__$1 = state_28590;var statearr_28615_28677 = state_28590__$1;(statearr_28615_28677[(2)] = inst_28559);
(statearr_28615_28677[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto__,jobs,results,process,async))
;return ((function (switch__6187__auto__,c__6202__auto__,jobs,results,process,async){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_28619 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28619[(0)] = state_machine__6188__auto__);
(statearr_28619[(1)] = (1));
return statearr_28619;
});
var state_machine__6188__auto____1 = (function (state_28590){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_28590);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e28620){if((e28620 instanceof Object))
{var ex__6191__auto__ = e28620;var statearr_28621_28678 = state_28590;(statearr_28621_28678[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28590);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28620;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28679 = state_28590;
state_28590 = G__28679;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_28590){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_28590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,jobs,results,process,async))
})();var state__6204__auto__ = (function (){var statearr_28622 = f__6203__auto__.call(null);(statearr_28622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_28622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,jobs,results,process,async))
);
return c__6202__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6202__auto___28780 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___28780,tc,fc){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___28780,tc,fc){
return (function (state_28755){var state_val_28756 = (state_28755[(1)]);if((state_val_28756 === (7)))
{var inst_28751 = (state_28755[(2)]);var state_28755__$1 = state_28755;var statearr_28757_28781 = state_28755__$1;(statearr_28757_28781[(2)] = inst_28751);
(statearr_28757_28781[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28756 === (1)))
{var state_28755__$1 = state_28755;var statearr_28758_28782 = state_28755__$1;(statearr_28758_28782[(2)] = null);
(statearr_28758_28782[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28756 === (4)))
{var inst_28732 = (state_28755[(7)]);var inst_28732__$1 = (state_28755[(2)]);var inst_28733 = (inst_28732__$1 == null);var state_28755__$1 = (function (){var statearr_28759 = state_28755;(statearr_28759[(7)] = inst_28732__$1);
return statearr_28759;
})();if(cljs.core.truth_(inst_28733))
{var statearr_28760_28783 = state_28755__$1;(statearr_28760_28783[(1)] = (5));
} else
{var statearr_28761_28784 = state_28755__$1;(statearr_28761_28784[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28756 === (13)))
{var state_28755__$1 = state_28755;var statearr_28762_28785 = state_28755__$1;(statearr_28762_28785[(2)] = null);
(statearr_28762_28785[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28756 === (6)))
{var inst_28732 = (state_28755[(7)]);var inst_28738 = p.call(null,inst_28732);var state_28755__$1 = state_28755;if(cljs.core.truth_(inst_28738))
{var statearr_28763_28786 = state_28755__$1;(statearr_28763_28786[(1)] = (9));
} else
{var statearr_28764_28787 = state_28755__$1;(statearr_28764_28787[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28756 === (3)))
{var inst_28753 = (state_28755[(2)]);var state_28755__$1 = state_28755;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28755__$1,inst_28753);
} else
{if((state_val_28756 === (12)))
{var state_28755__$1 = state_28755;var statearr_28765_28788 = state_28755__$1;(statearr_28765_28788[(2)] = null);
(statearr_28765_28788[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28756 === (2)))
{var state_28755__$1 = state_28755;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28755__$1,(4),ch);
} else
{if((state_val_28756 === (11)))
{var inst_28732 = (state_28755[(7)]);var inst_28742 = (state_28755[(2)]);var state_28755__$1 = state_28755;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28755__$1,(8),inst_28742,inst_28732);
} else
{if((state_val_28756 === (9)))
{var state_28755__$1 = state_28755;var statearr_28766_28789 = state_28755__$1;(statearr_28766_28789[(2)] = tc);
(statearr_28766_28789[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28756 === (5)))
{var inst_28735 = cljs.core.async.close_BANG_.call(null,tc);var inst_28736 = cljs.core.async.close_BANG_.call(null,fc);var state_28755__$1 = (function (){var statearr_28767 = state_28755;(statearr_28767[(8)] = inst_28735);
return statearr_28767;
})();var statearr_28768_28790 = state_28755__$1;(statearr_28768_28790[(2)] = inst_28736);
(statearr_28768_28790[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28756 === (14)))
{var inst_28749 = (state_28755[(2)]);var state_28755__$1 = state_28755;var statearr_28769_28791 = state_28755__$1;(statearr_28769_28791[(2)] = inst_28749);
(statearr_28769_28791[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28756 === (10)))
{var state_28755__$1 = state_28755;var statearr_28770_28792 = state_28755__$1;(statearr_28770_28792[(2)] = fc);
(statearr_28770_28792[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28756 === (8)))
{var inst_28744 = (state_28755[(2)]);var state_28755__$1 = state_28755;if(cljs.core.truth_(inst_28744))
{var statearr_28771_28793 = state_28755__$1;(statearr_28771_28793[(1)] = (12));
} else
{var statearr_28772_28794 = state_28755__$1;(statearr_28772_28794[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___28780,tc,fc))
;return ((function (switch__6187__auto__,c__6202__auto___28780,tc,fc){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_28776 = [null,null,null,null,null,null,null,null,null];(statearr_28776[(0)] = state_machine__6188__auto__);
(statearr_28776[(1)] = (1));
return statearr_28776;
});
var state_machine__6188__auto____1 = (function (state_28755){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_28755);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e28777){if((e28777 instanceof Object))
{var ex__6191__auto__ = e28777;var statearr_28778_28795 = state_28755;(statearr_28778_28795[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28755);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28796 = state_28755;
state_28755 = G__28796;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_28755){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_28755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___28780,tc,fc))
})();var state__6204__auto__ = (function (){var statearr_28779 = f__6203__auto__.call(null);(statearr_28779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___28780);
return statearr_28779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___28780,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_28843){var state_val_28844 = (state_28843[(1)]);if((state_val_28844 === (7)))
{var inst_28839 = (state_28843[(2)]);var state_28843__$1 = state_28843;var statearr_28845_28861 = state_28843__$1;(statearr_28845_28861[(2)] = inst_28839);
(statearr_28845_28861[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28844 === (6)))
{var inst_28829 = (state_28843[(7)]);var inst_28832 = (state_28843[(8)]);var inst_28836 = f.call(null,inst_28829,inst_28832);var inst_28829__$1 = inst_28836;var state_28843__$1 = (function (){var statearr_28846 = state_28843;(statearr_28846[(7)] = inst_28829__$1);
return statearr_28846;
})();var statearr_28847_28862 = state_28843__$1;(statearr_28847_28862[(2)] = null);
(statearr_28847_28862[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28844 === (5)))
{var inst_28829 = (state_28843[(7)]);var state_28843__$1 = state_28843;var statearr_28848_28863 = state_28843__$1;(statearr_28848_28863[(2)] = inst_28829);
(statearr_28848_28863[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28844 === (4)))
{var inst_28832 = (state_28843[(8)]);var inst_28832__$1 = (state_28843[(2)]);var inst_28833 = (inst_28832__$1 == null);var state_28843__$1 = (function (){var statearr_28849 = state_28843;(statearr_28849[(8)] = inst_28832__$1);
return statearr_28849;
})();if(cljs.core.truth_(inst_28833))
{var statearr_28850_28864 = state_28843__$1;(statearr_28850_28864[(1)] = (5));
} else
{var statearr_28851_28865 = state_28843__$1;(statearr_28851_28865[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28844 === (3)))
{var inst_28841 = (state_28843[(2)]);var state_28843__$1 = state_28843;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28843__$1,inst_28841);
} else
{if((state_val_28844 === (2)))
{var state_28843__$1 = state_28843;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28843__$1,(4),ch);
} else
{if((state_val_28844 === (1)))
{var inst_28829 = init;var state_28843__$1 = (function (){var statearr_28852 = state_28843;(statearr_28852[(7)] = inst_28829);
return statearr_28852;
})();var statearr_28853_28866 = state_28843__$1;(statearr_28853_28866[(2)] = null);
(statearr_28853_28866[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_28857 = [null,null,null,null,null,null,null,null,null];(statearr_28857[(0)] = state_machine__6188__auto__);
(statearr_28857[(1)] = (1));
return statearr_28857;
});
var state_machine__6188__auto____1 = (function (state_28843){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_28843);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e28858){if((e28858 instanceof Object))
{var ex__6191__auto__ = e28858;var statearr_28859_28867 = state_28843;(statearr_28859_28867[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28843);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28858;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28868 = state_28843;
state_28843 = G__28868;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_28843){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_28843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_28860 = f__6203__auto__.call(null);(statearr_28860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_28860;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_28942){var state_val_28943 = (state_28942[(1)]);if((state_val_28943 === (7)))
{var inst_28924 = (state_28942[(2)]);var state_28942__$1 = state_28942;var statearr_28944_28967 = state_28942__$1;(statearr_28944_28967[(2)] = inst_28924);
(statearr_28944_28967[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28943 === (1)))
{var inst_28918 = cljs.core.seq.call(null,coll);var inst_28919 = inst_28918;var state_28942__$1 = (function (){var statearr_28945 = state_28942;(statearr_28945[(7)] = inst_28919);
return statearr_28945;
})();var statearr_28946_28968 = state_28942__$1;(statearr_28946_28968[(2)] = null);
(statearr_28946_28968[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28943 === (4)))
{var inst_28919 = (state_28942[(7)]);var inst_28922 = cljs.core.first.call(null,inst_28919);var state_28942__$1 = state_28942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28942__$1,(7),ch,inst_28922);
} else
{if((state_val_28943 === (13)))
{var inst_28936 = (state_28942[(2)]);var state_28942__$1 = state_28942;var statearr_28947_28969 = state_28942__$1;(statearr_28947_28969[(2)] = inst_28936);
(statearr_28947_28969[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28943 === (6)))
{var inst_28927 = (state_28942[(2)]);var state_28942__$1 = state_28942;if(cljs.core.truth_(inst_28927))
{var statearr_28948_28970 = state_28942__$1;(statearr_28948_28970[(1)] = (8));
} else
{var statearr_28949_28971 = state_28942__$1;(statearr_28949_28971[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28943 === (3)))
{var inst_28940 = (state_28942[(2)]);var state_28942__$1 = state_28942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28942__$1,inst_28940);
} else
{if((state_val_28943 === (12)))
{var state_28942__$1 = state_28942;var statearr_28950_28972 = state_28942__$1;(statearr_28950_28972[(2)] = null);
(statearr_28950_28972[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28943 === (2)))
{var inst_28919 = (state_28942[(7)]);var state_28942__$1 = state_28942;if(cljs.core.truth_(inst_28919))
{var statearr_28951_28973 = state_28942__$1;(statearr_28951_28973[(1)] = (4));
} else
{var statearr_28952_28974 = state_28942__$1;(statearr_28952_28974[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28943 === (11)))
{var inst_28933 = cljs.core.async.close_BANG_.call(null,ch);var state_28942__$1 = state_28942;var statearr_28953_28975 = state_28942__$1;(statearr_28953_28975[(2)] = inst_28933);
(statearr_28953_28975[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28943 === (9)))
{var state_28942__$1 = state_28942;if(cljs.core.truth_(close_QMARK_))
{var statearr_28954_28976 = state_28942__$1;(statearr_28954_28976[(1)] = (11));
} else
{var statearr_28955_28977 = state_28942__$1;(statearr_28955_28977[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28943 === (5)))
{var inst_28919 = (state_28942[(7)]);var state_28942__$1 = state_28942;var statearr_28956_28978 = state_28942__$1;(statearr_28956_28978[(2)] = inst_28919);
(statearr_28956_28978[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28943 === (10)))
{var inst_28938 = (state_28942[(2)]);var state_28942__$1 = state_28942;var statearr_28957_28979 = state_28942__$1;(statearr_28957_28979[(2)] = inst_28938);
(statearr_28957_28979[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28943 === (8)))
{var inst_28919 = (state_28942[(7)]);var inst_28929 = cljs.core.next.call(null,inst_28919);var inst_28919__$1 = inst_28929;var state_28942__$1 = (function (){var statearr_28958 = state_28942;(statearr_28958[(7)] = inst_28919__$1);
return statearr_28958;
})();var statearr_28959_28980 = state_28942__$1;(statearr_28959_28980[(2)] = null);
(statearr_28959_28980[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_28963 = [null,null,null,null,null,null,null,null];(statearr_28963[(0)] = state_machine__6188__auto__);
(statearr_28963[(1)] = (1));
return statearr_28963;
});
var state_machine__6188__auto____1 = (function (state_28942){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_28942);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e28964){if((e28964 instanceof Object))
{var ex__6191__auto__ = e28964;var statearr_28965_28981 = state_28942;(statearr_28965_28981[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28964;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28982 = state_28942;
state_28942 = G__28982;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_28942){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_28942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_28966 = f__6203__auto__.call(null);(statearr_28966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_28966;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj28984 = {};return obj28984;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3539__auto__ = _;if(and__3539__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4178__auto__ = (((_ == null))?null:_);return (function (){var or__3551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj28986 = {};return obj28986;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t29208 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29208 = (function (cs,ch,mult,meta29209){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta29209 = meta29209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29208.cljs$lang$type = true;
cljs.core.async.t29208.cljs$lang$ctorStr = "cljs.core.async/t29208";
cljs.core.async.t29208.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t29208");
});})(cs))
;
cljs.core.async.t29208.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t29208.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t29208.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t29208.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t29208.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29208.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t29208.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29210){var self__ = this;
var _29210__$1 = this;return self__.meta29209;
});})(cs))
;
cljs.core.async.t29208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29210,meta29209__$1){var self__ = this;
var _29210__$1 = this;return (new cljs.core.async.t29208(self__.cs,self__.ch,self__.mult,meta29209__$1));
});})(cs))
;
cljs.core.async.__GT_t29208 = ((function (cs){
return (function __GT_t29208(cs__$1,ch__$1,mult__$1,meta29209){return (new cljs.core.async.t29208(cs__$1,ch__$1,mult__$1,meta29209));
});})(cs))
;
}
return (new cljs.core.async.t29208(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6202__auto___29429 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___29429,cs,m,dchan,dctr,done){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___29429,cs,m,dchan,dctr,done){
return (function (state_29341){var state_val_29342 = (state_29341[(1)]);if((state_val_29342 === (7)))
{var inst_29337 = (state_29341[(2)]);var state_29341__$1 = state_29341;var statearr_29343_29430 = state_29341__$1;(statearr_29343_29430[(2)] = inst_29337);
(statearr_29343_29430[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (20)))
{var inst_29242 = (state_29341[(7)]);var inst_29252 = cljs.core.first.call(null,inst_29242);var inst_29253 = cljs.core.nth.call(null,inst_29252,(0),null);var inst_29254 = cljs.core.nth.call(null,inst_29252,(1),null);var state_29341__$1 = (function (){var statearr_29344 = state_29341;(statearr_29344[(8)] = inst_29253);
return statearr_29344;
})();if(cljs.core.truth_(inst_29254))
{var statearr_29345_29431 = state_29341__$1;(statearr_29345_29431[(1)] = (22));
} else
{var statearr_29346_29432 = state_29341__$1;(statearr_29346_29432[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (27)))
{var inst_29282 = (state_29341[(9)]);var inst_29284 = (state_29341[(10)]);var inst_29213 = (state_29341[(11)]);var inst_29289 = (state_29341[(12)]);var inst_29289__$1 = cljs.core._nth.call(null,inst_29282,inst_29284);var inst_29290 = cljs.core.async.put_BANG_.call(null,inst_29289__$1,inst_29213,done);var state_29341__$1 = (function (){var statearr_29347 = state_29341;(statearr_29347[(12)] = inst_29289__$1);
return statearr_29347;
})();if(cljs.core.truth_(inst_29290))
{var statearr_29348_29433 = state_29341__$1;(statearr_29348_29433[(1)] = (30));
} else
{var statearr_29349_29434 = state_29341__$1;(statearr_29349_29434[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (1)))
{var state_29341__$1 = state_29341;var statearr_29350_29435 = state_29341__$1;(statearr_29350_29435[(2)] = null);
(statearr_29350_29435[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (24)))
{var inst_29242 = (state_29341[(7)]);var inst_29259 = (state_29341[(2)]);var inst_29260 = cljs.core.next.call(null,inst_29242);var inst_29222 = inst_29260;var inst_29223 = null;var inst_29224 = (0);var inst_29225 = (0);var state_29341__$1 = (function (){var statearr_29351 = state_29341;(statearr_29351[(13)] = inst_29223);
(statearr_29351[(14)] = inst_29224);
(statearr_29351[(15)] = inst_29222);
(statearr_29351[(16)] = inst_29225);
(statearr_29351[(17)] = inst_29259);
return statearr_29351;
})();var statearr_29352_29436 = state_29341__$1;(statearr_29352_29436[(2)] = null);
(statearr_29352_29436[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (39)))
{var state_29341__$1 = state_29341;var statearr_29356_29437 = state_29341__$1;(statearr_29356_29437[(2)] = null);
(statearr_29356_29437[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (4)))
{var inst_29213 = (state_29341[(11)]);var inst_29213__$1 = (state_29341[(2)]);var inst_29214 = (inst_29213__$1 == null);var state_29341__$1 = (function (){var statearr_29357 = state_29341;(statearr_29357[(11)] = inst_29213__$1);
return statearr_29357;
})();if(cljs.core.truth_(inst_29214))
{var statearr_29358_29438 = state_29341__$1;(statearr_29358_29438[(1)] = (5));
} else
{var statearr_29359_29439 = state_29341__$1;(statearr_29359_29439[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (15)))
{var inst_29223 = (state_29341[(13)]);var inst_29224 = (state_29341[(14)]);var inst_29222 = (state_29341[(15)]);var inst_29225 = (state_29341[(16)]);var inst_29238 = (state_29341[(2)]);var inst_29239 = (inst_29225 + (1));var tmp29353 = inst_29223;var tmp29354 = inst_29224;var tmp29355 = inst_29222;var inst_29222__$1 = tmp29355;var inst_29223__$1 = tmp29353;var inst_29224__$1 = tmp29354;var inst_29225__$1 = inst_29239;var state_29341__$1 = (function (){var statearr_29360 = state_29341;(statearr_29360[(13)] = inst_29223__$1);
(statearr_29360[(14)] = inst_29224__$1);
(statearr_29360[(15)] = inst_29222__$1);
(statearr_29360[(16)] = inst_29225__$1);
(statearr_29360[(18)] = inst_29238);
return statearr_29360;
})();var statearr_29361_29440 = state_29341__$1;(statearr_29361_29440[(2)] = null);
(statearr_29361_29440[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (21)))
{var inst_29263 = (state_29341[(2)]);var state_29341__$1 = state_29341;var statearr_29365_29441 = state_29341__$1;(statearr_29365_29441[(2)] = inst_29263);
(statearr_29365_29441[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (31)))
{var inst_29289 = (state_29341[(12)]);var inst_29293 = done.call(null,null);var inst_29294 = cljs.core.async.untap_STAR_.call(null,m,inst_29289);var state_29341__$1 = (function (){var statearr_29366 = state_29341;(statearr_29366[(19)] = inst_29293);
return statearr_29366;
})();var statearr_29367_29442 = state_29341__$1;(statearr_29367_29442[(2)] = inst_29294);
(statearr_29367_29442[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (32)))
{var inst_29282 = (state_29341[(9)]);var inst_29283 = (state_29341[(20)]);var inst_29281 = (state_29341[(21)]);var inst_29284 = (state_29341[(10)]);var inst_29296 = (state_29341[(2)]);var inst_29297 = (inst_29284 + (1));var tmp29362 = inst_29282;var tmp29363 = inst_29283;var tmp29364 = inst_29281;var inst_29281__$1 = tmp29364;var inst_29282__$1 = tmp29362;var inst_29283__$1 = tmp29363;var inst_29284__$1 = inst_29297;var state_29341__$1 = (function (){var statearr_29368 = state_29341;(statearr_29368[(9)] = inst_29282__$1);
(statearr_29368[(20)] = inst_29283__$1);
(statearr_29368[(21)] = inst_29281__$1);
(statearr_29368[(10)] = inst_29284__$1);
(statearr_29368[(22)] = inst_29296);
return statearr_29368;
})();var statearr_29369_29443 = state_29341__$1;(statearr_29369_29443[(2)] = null);
(statearr_29369_29443[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (40)))
{var inst_29309 = (state_29341[(23)]);var inst_29313 = done.call(null,null);var inst_29314 = cljs.core.async.untap_STAR_.call(null,m,inst_29309);var state_29341__$1 = (function (){var statearr_29370 = state_29341;(statearr_29370[(24)] = inst_29313);
return statearr_29370;
})();var statearr_29371_29444 = state_29341__$1;(statearr_29371_29444[(2)] = inst_29314);
(statearr_29371_29444[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (33)))
{var inst_29300 = (state_29341[(25)]);var inst_29302 = cljs.core.chunked_seq_QMARK_.call(null,inst_29300);var state_29341__$1 = state_29341;if(inst_29302)
{var statearr_29372_29445 = state_29341__$1;(statearr_29372_29445[(1)] = (36));
} else
{var statearr_29373_29446 = state_29341__$1;(statearr_29373_29446[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (13)))
{var inst_29232 = (state_29341[(26)]);var inst_29235 = cljs.core.async.close_BANG_.call(null,inst_29232);var state_29341__$1 = state_29341;var statearr_29374_29447 = state_29341__$1;(statearr_29374_29447[(2)] = inst_29235);
(statearr_29374_29447[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (22)))
{var inst_29253 = (state_29341[(8)]);var inst_29256 = cljs.core.async.close_BANG_.call(null,inst_29253);var state_29341__$1 = state_29341;var statearr_29375_29448 = state_29341__$1;(statearr_29375_29448[(2)] = inst_29256);
(statearr_29375_29448[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (36)))
{var inst_29300 = (state_29341[(25)]);var inst_29304 = cljs.core.chunk_first.call(null,inst_29300);var inst_29305 = cljs.core.chunk_rest.call(null,inst_29300);var inst_29306 = cljs.core.count.call(null,inst_29304);var inst_29281 = inst_29305;var inst_29282 = inst_29304;var inst_29283 = inst_29306;var inst_29284 = (0);var state_29341__$1 = (function (){var statearr_29376 = state_29341;(statearr_29376[(9)] = inst_29282);
(statearr_29376[(20)] = inst_29283);
(statearr_29376[(21)] = inst_29281);
(statearr_29376[(10)] = inst_29284);
return statearr_29376;
})();var statearr_29377_29449 = state_29341__$1;(statearr_29377_29449[(2)] = null);
(statearr_29377_29449[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (41)))
{var inst_29300 = (state_29341[(25)]);var inst_29316 = (state_29341[(2)]);var inst_29317 = cljs.core.next.call(null,inst_29300);var inst_29281 = inst_29317;var inst_29282 = null;var inst_29283 = (0);var inst_29284 = (0);var state_29341__$1 = (function (){var statearr_29378 = state_29341;(statearr_29378[(9)] = inst_29282);
(statearr_29378[(20)] = inst_29283);
(statearr_29378[(21)] = inst_29281);
(statearr_29378[(10)] = inst_29284);
(statearr_29378[(27)] = inst_29316);
return statearr_29378;
})();var statearr_29379_29450 = state_29341__$1;(statearr_29379_29450[(2)] = null);
(statearr_29379_29450[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (43)))
{var state_29341__$1 = state_29341;var statearr_29380_29451 = state_29341__$1;(statearr_29380_29451[(2)] = null);
(statearr_29380_29451[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (29)))
{var inst_29325 = (state_29341[(2)]);var state_29341__$1 = state_29341;var statearr_29381_29452 = state_29341__$1;(statearr_29381_29452[(2)] = inst_29325);
(statearr_29381_29452[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (44)))
{var inst_29334 = (state_29341[(2)]);var state_29341__$1 = (function (){var statearr_29382 = state_29341;(statearr_29382[(28)] = inst_29334);
return statearr_29382;
})();var statearr_29383_29453 = state_29341__$1;(statearr_29383_29453[(2)] = null);
(statearr_29383_29453[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (6)))
{var inst_29273 = (state_29341[(29)]);var inst_29272 = cljs.core.deref.call(null,cs);var inst_29273__$1 = cljs.core.keys.call(null,inst_29272);var inst_29274 = cljs.core.count.call(null,inst_29273__$1);var inst_29275 = cljs.core.reset_BANG_.call(null,dctr,inst_29274);var inst_29280 = cljs.core.seq.call(null,inst_29273__$1);var inst_29281 = inst_29280;var inst_29282 = null;var inst_29283 = (0);var inst_29284 = (0);var state_29341__$1 = (function (){var statearr_29384 = state_29341;(statearr_29384[(9)] = inst_29282);
(statearr_29384[(20)] = inst_29283);
(statearr_29384[(21)] = inst_29281);
(statearr_29384[(10)] = inst_29284);
(statearr_29384[(30)] = inst_29275);
(statearr_29384[(29)] = inst_29273__$1);
return statearr_29384;
})();var statearr_29385_29454 = state_29341__$1;(statearr_29385_29454[(2)] = null);
(statearr_29385_29454[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (28)))
{var inst_29281 = (state_29341[(21)]);var inst_29300 = (state_29341[(25)]);var inst_29300__$1 = cljs.core.seq.call(null,inst_29281);var state_29341__$1 = (function (){var statearr_29386 = state_29341;(statearr_29386[(25)] = inst_29300__$1);
return statearr_29386;
})();if(inst_29300__$1)
{var statearr_29387_29455 = state_29341__$1;(statearr_29387_29455[(1)] = (33));
} else
{var statearr_29388_29456 = state_29341__$1;(statearr_29388_29456[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (25)))
{var inst_29283 = (state_29341[(20)]);var inst_29284 = (state_29341[(10)]);var inst_29286 = (inst_29284 < inst_29283);var inst_29287 = inst_29286;var state_29341__$1 = state_29341;if(cljs.core.truth_(inst_29287))
{var statearr_29389_29457 = state_29341__$1;(statearr_29389_29457[(1)] = (27));
} else
{var statearr_29390_29458 = state_29341__$1;(statearr_29390_29458[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (34)))
{var state_29341__$1 = state_29341;var statearr_29391_29459 = state_29341__$1;(statearr_29391_29459[(2)] = null);
(statearr_29391_29459[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (17)))
{var state_29341__$1 = state_29341;var statearr_29392_29460 = state_29341__$1;(statearr_29392_29460[(2)] = null);
(statearr_29392_29460[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (3)))
{var inst_29339 = (state_29341[(2)]);var state_29341__$1 = state_29341;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29341__$1,inst_29339);
} else
{if((state_val_29342 === (12)))
{var inst_29268 = (state_29341[(2)]);var state_29341__$1 = state_29341;var statearr_29393_29461 = state_29341__$1;(statearr_29393_29461[(2)] = inst_29268);
(statearr_29393_29461[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (2)))
{var state_29341__$1 = state_29341;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29341__$1,(4),ch);
} else
{if((state_val_29342 === (23)))
{var state_29341__$1 = state_29341;var statearr_29394_29462 = state_29341__$1;(statearr_29394_29462[(2)] = null);
(statearr_29394_29462[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (35)))
{var inst_29323 = (state_29341[(2)]);var state_29341__$1 = state_29341;var statearr_29395_29463 = state_29341__$1;(statearr_29395_29463[(2)] = inst_29323);
(statearr_29395_29463[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (19)))
{var inst_29242 = (state_29341[(7)]);var inst_29246 = cljs.core.chunk_first.call(null,inst_29242);var inst_29247 = cljs.core.chunk_rest.call(null,inst_29242);var inst_29248 = cljs.core.count.call(null,inst_29246);var inst_29222 = inst_29247;var inst_29223 = inst_29246;var inst_29224 = inst_29248;var inst_29225 = (0);var state_29341__$1 = (function (){var statearr_29396 = state_29341;(statearr_29396[(13)] = inst_29223);
(statearr_29396[(14)] = inst_29224);
(statearr_29396[(15)] = inst_29222);
(statearr_29396[(16)] = inst_29225);
return statearr_29396;
})();var statearr_29397_29464 = state_29341__$1;(statearr_29397_29464[(2)] = null);
(statearr_29397_29464[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (11)))
{var inst_29242 = (state_29341[(7)]);var inst_29222 = (state_29341[(15)]);var inst_29242__$1 = cljs.core.seq.call(null,inst_29222);var state_29341__$1 = (function (){var statearr_29398 = state_29341;(statearr_29398[(7)] = inst_29242__$1);
return statearr_29398;
})();if(inst_29242__$1)
{var statearr_29399_29465 = state_29341__$1;(statearr_29399_29465[(1)] = (16));
} else
{var statearr_29400_29466 = state_29341__$1;(statearr_29400_29466[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (9)))
{var inst_29270 = (state_29341[(2)]);var state_29341__$1 = state_29341;var statearr_29401_29467 = state_29341__$1;(statearr_29401_29467[(2)] = inst_29270);
(statearr_29401_29467[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (5)))
{var inst_29220 = cljs.core.deref.call(null,cs);var inst_29221 = cljs.core.seq.call(null,inst_29220);var inst_29222 = inst_29221;var inst_29223 = null;var inst_29224 = (0);var inst_29225 = (0);var state_29341__$1 = (function (){var statearr_29402 = state_29341;(statearr_29402[(13)] = inst_29223);
(statearr_29402[(14)] = inst_29224);
(statearr_29402[(15)] = inst_29222);
(statearr_29402[(16)] = inst_29225);
return statearr_29402;
})();var statearr_29403_29468 = state_29341__$1;(statearr_29403_29468[(2)] = null);
(statearr_29403_29468[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (14)))
{var state_29341__$1 = state_29341;var statearr_29404_29469 = state_29341__$1;(statearr_29404_29469[(2)] = null);
(statearr_29404_29469[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (45)))
{var inst_29331 = (state_29341[(2)]);var state_29341__$1 = state_29341;var statearr_29405_29470 = state_29341__$1;(statearr_29405_29470[(2)] = inst_29331);
(statearr_29405_29470[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (26)))
{var inst_29273 = (state_29341[(29)]);var inst_29327 = (state_29341[(2)]);var inst_29328 = cljs.core.seq.call(null,inst_29273);var state_29341__$1 = (function (){var statearr_29406 = state_29341;(statearr_29406[(31)] = inst_29327);
return statearr_29406;
})();if(inst_29328)
{var statearr_29407_29471 = state_29341__$1;(statearr_29407_29471[(1)] = (42));
} else
{var statearr_29408_29472 = state_29341__$1;(statearr_29408_29472[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (16)))
{var inst_29242 = (state_29341[(7)]);var inst_29244 = cljs.core.chunked_seq_QMARK_.call(null,inst_29242);var state_29341__$1 = state_29341;if(inst_29244)
{var statearr_29409_29473 = state_29341__$1;(statearr_29409_29473[(1)] = (19));
} else
{var statearr_29410_29474 = state_29341__$1;(statearr_29410_29474[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (38)))
{var inst_29320 = (state_29341[(2)]);var state_29341__$1 = state_29341;var statearr_29411_29475 = state_29341__$1;(statearr_29411_29475[(2)] = inst_29320);
(statearr_29411_29475[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (30)))
{var state_29341__$1 = state_29341;var statearr_29412_29476 = state_29341__$1;(statearr_29412_29476[(2)] = null);
(statearr_29412_29476[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (10)))
{var inst_29223 = (state_29341[(13)]);var inst_29225 = (state_29341[(16)]);var inst_29231 = cljs.core._nth.call(null,inst_29223,inst_29225);var inst_29232 = cljs.core.nth.call(null,inst_29231,(0),null);var inst_29233 = cljs.core.nth.call(null,inst_29231,(1),null);var state_29341__$1 = (function (){var statearr_29413 = state_29341;(statearr_29413[(26)] = inst_29232);
return statearr_29413;
})();if(cljs.core.truth_(inst_29233))
{var statearr_29414_29477 = state_29341__$1;(statearr_29414_29477[(1)] = (13));
} else
{var statearr_29415_29478 = state_29341__$1;(statearr_29415_29478[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (18)))
{var inst_29266 = (state_29341[(2)]);var state_29341__$1 = state_29341;var statearr_29416_29479 = state_29341__$1;(statearr_29416_29479[(2)] = inst_29266);
(statearr_29416_29479[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (42)))
{var state_29341__$1 = state_29341;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29341__$1,(45),dchan);
} else
{if((state_val_29342 === (37)))
{var inst_29213 = (state_29341[(11)]);var inst_29309 = (state_29341[(23)]);var inst_29300 = (state_29341[(25)]);var inst_29309__$1 = cljs.core.first.call(null,inst_29300);var inst_29310 = cljs.core.async.put_BANG_.call(null,inst_29309__$1,inst_29213,done);var state_29341__$1 = (function (){var statearr_29417 = state_29341;(statearr_29417[(23)] = inst_29309__$1);
return statearr_29417;
})();if(cljs.core.truth_(inst_29310))
{var statearr_29418_29480 = state_29341__$1;(statearr_29418_29480[(1)] = (39));
} else
{var statearr_29419_29481 = state_29341__$1;(statearr_29419_29481[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29342 === (8)))
{var inst_29224 = (state_29341[(14)]);var inst_29225 = (state_29341[(16)]);var inst_29227 = (inst_29225 < inst_29224);var inst_29228 = inst_29227;var state_29341__$1 = state_29341;if(cljs.core.truth_(inst_29228))
{var statearr_29420_29482 = state_29341__$1;(statearr_29420_29482[(1)] = (10));
} else
{var statearr_29421_29483 = state_29341__$1;(statearr_29421_29483[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___29429,cs,m,dchan,dctr,done))
;return ((function (switch__6187__auto__,c__6202__auto___29429,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_29425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29425[(0)] = state_machine__6188__auto__);
(statearr_29425[(1)] = (1));
return statearr_29425;
});
var state_machine__6188__auto____1 = (function (state_29341){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_29341);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e29426){if((e29426 instanceof Object))
{var ex__6191__auto__ = e29426;var statearr_29427_29484 = state_29341;(statearr_29427_29484[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29341);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29426;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29485 = state_29341;
state_29341 = G__29485;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_29341){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_29341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___29429,cs,m,dchan,dctr,done))
})();var state__6204__auto__ = (function (){var statearr_29428 = f__6203__auto__.call(null);(statearr_29428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___29429);
return statearr_29428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___29429,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj29487 = {};return obj29487;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__29488){var map__29493 = p__29488;var map__29493__$1 = ((cljs.core.seq_QMARK_.call(null,map__29493))?cljs.core.apply.call(null,cljs.core.hash_map,map__29493):map__29493);var opts = map__29493__$1;var statearr_29494_29497 = state;(statearr_29494_29497[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__29493,map__29493__$1,opts){
return (function (val){var statearr_29495_29498 = state;(statearr_29495_29498[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29493,map__29493__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_29496_29499 = state;(statearr_29496_29499[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__29488 = null;if (arguments.length > 3) {
  p__29488 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__29488);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__29500){
var state = cljs.core.first(arglist__29500);
arglist__29500 = cljs.core.next(arglist__29500);
var cont_block = cljs.core.first(arglist__29500);
arglist__29500 = cljs.core.next(arglist__29500);
var ports = cljs.core.first(arglist__29500);
var p__29488 = cljs.core.rest(arglist__29500);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__29488);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t29620 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29620 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29621){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29621 = meta29621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29620.cljs$lang$type = true;
cljs.core.async.t29620.cljs$lang$ctorStr = "cljs.core.async/t29620";
cljs.core.async.t29620.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t29620");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29620.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t29620.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29620.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29620.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29620.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29620.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29620.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29620.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29622){var self__ = this;
var _29622__$1 = this;return self__.meta29621;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t29620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29622,meta29621__$1){var self__ = this;
var _29622__$1 = this;return (new cljs.core.async.t29620(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29621__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t29620 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t29620(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29621){return (new cljs.core.async.t29620(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29621));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t29620(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6202__auto___29739 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___29739,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___29739,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29692){var state_val_29693 = (state_29692[(1)]);if((state_val_29693 === (7)))
{var inst_29636 = (state_29692[(7)]);var inst_29641 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29636);var state_29692__$1 = state_29692;var statearr_29694_29740 = state_29692__$1;(statearr_29694_29740[(2)] = inst_29641);
(statearr_29694_29740[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (20)))
{var inst_29651 = (state_29692[(8)]);var state_29692__$1 = state_29692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29692__$1,(23),out,inst_29651);
} else
{if((state_val_29693 === (1)))
{var inst_29626 = (state_29692[(9)]);var inst_29626__$1 = calc_state.call(null);var inst_29627 = cljs.core.seq_QMARK_.call(null,inst_29626__$1);var state_29692__$1 = (function (){var statearr_29695 = state_29692;(statearr_29695[(9)] = inst_29626__$1);
return statearr_29695;
})();if(inst_29627)
{var statearr_29696_29741 = state_29692__$1;(statearr_29696_29741[(1)] = (2));
} else
{var statearr_29697_29742 = state_29692__$1;(statearr_29697_29742[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (24)))
{var inst_29644 = (state_29692[(10)]);var inst_29636 = inst_29644;var state_29692__$1 = (function (){var statearr_29698 = state_29692;(statearr_29698[(7)] = inst_29636);
return statearr_29698;
})();var statearr_29699_29743 = state_29692__$1;(statearr_29699_29743[(2)] = null);
(statearr_29699_29743[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (4)))
{var inst_29626 = (state_29692[(9)]);var inst_29632 = (state_29692[(2)]);var inst_29633 = cljs.core.get.call(null,inst_29632,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_29634 = cljs.core.get.call(null,inst_29632,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_29635 = cljs.core.get.call(null,inst_29632,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_29636 = inst_29626;var state_29692__$1 = (function (){var statearr_29700 = state_29692;(statearr_29700[(11)] = inst_29635);
(statearr_29700[(7)] = inst_29636);
(statearr_29700[(12)] = inst_29633);
(statearr_29700[(13)] = inst_29634);
return statearr_29700;
})();var statearr_29701_29744 = state_29692__$1;(statearr_29701_29744[(2)] = null);
(statearr_29701_29744[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (15)))
{var state_29692__$1 = state_29692;var statearr_29702_29745 = state_29692__$1;(statearr_29702_29745[(2)] = null);
(statearr_29702_29745[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (21)))
{var inst_29644 = (state_29692[(10)]);var inst_29636 = inst_29644;var state_29692__$1 = (function (){var statearr_29703 = state_29692;(statearr_29703[(7)] = inst_29636);
return statearr_29703;
})();var statearr_29704_29746 = state_29692__$1;(statearr_29704_29746[(2)] = null);
(statearr_29704_29746[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (13)))
{var inst_29688 = (state_29692[(2)]);var state_29692__$1 = state_29692;var statearr_29705_29747 = state_29692__$1;(statearr_29705_29747[(2)] = inst_29688);
(statearr_29705_29747[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (22)))
{var inst_29686 = (state_29692[(2)]);var state_29692__$1 = state_29692;var statearr_29706_29748 = state_29692__$1;(statearr_29706_29748[(2)] = inst_29686);
(statearr_29706_29748[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (6)))
{var inst_29690 = (state_29692[(2)]);var state_29692__$1 = state_29692;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29692__$1,inst_29690);
} else
{if((state_val_29693 === (25)))
{var state_29692__$1 = state_29692;var statearr_29707_29749 = state_29692__$1;(statearr_29707_29749[(2)] = null);
(statearr_29707_29749[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (17)))
{var inst_29666 = (state_29692[(14)]);var state_29692__$1 = state_29692;var statearr_29708_29750 = state_29692__$1;(statearr_29708_29750[(2)] = inst_29666);
(statearr_29708_29750[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (3)))
{var inst_29626 = (state_29692[(9)]);var state_29692__$1 = state_29692;var statearr_29709_29751 = state_29692__$1;(statearr_29709_29751[(2)] = inst_29626);
(statearr_29709_29751[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (12)))
{var inst_29652 = (state_29692[(15)]);var inst_29666 = (state_29692[(14)]);var inst_29647 = (state_29692[(16)]);var inst_29666__$1 = inst_29647.call(null,inst_29652);var state_29692__$1 = (function (){var statearr_29710 = state_29692;(statearr_29710[(14)] = inst_29666__$1);
return statearr_29710;
})();if(cljs.core.truth_(inst_29666__$1))
{var statearr_29711_29752 = state_29692__$1;(statearr_29711_29752[(1)] = (17));
} else
{var statearr_29712_29753 = state_29692__$1;(statearr_29712_29753[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (2)))
{var inst_29626 = (state_29692[(9)]);var inst_29629 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29626);var state_29692__$1 = state_29692;var statearr_29713_29754 = state_29692__$1;(statearr_29713_29754[(2)] = inst_29629);
(statearr_29713_29754[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (23)))
{var inst_29677 = (state_29692[(2)]);var state_29692__$1 = state_29692;if(cljs.core.truth_(inst_29677))
{var statearr_29714_29755 = state_29692__$1;(statearr_29714_29755[(1)] = (24));
} else
{var statearr_29715_29756 = state_29692__$1;(statearr_29715_29756[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (19)))
{var inst_29674 = (state_29692[(2)]);var state_29692__$1 = state_29692;if(cljs.core.truth_(inst_29674))
{var statearr_29716_29757 = state_29692__$1;(statearr_29716_29757[(1)] = (20));
} else
{var statearr_29717_29758 = state_29692__$1;(statearr_29717_29758[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (11)))
{var inst_29651 = (state_29692[(8)]);var inst_29657 = (inst_29651 == null);var state_29692__$1 = state_29692;if(cljs.core.truth_(inst_29657))
{var statearr_29718_29759 = state_29692__$1;(statearr_29718_29759[(1)] = (14));
} else
{var statearr_29719_29760 = state_29692__$1;(statearr_29719_29760[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (9)))
{var inst_29644 = (state_29692[(10)]);var inst_29644__$1 = (state_29692[(2)]);var inst_29645 = cljs.core.get.call(null,inst_29644__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_29646 = cljs.core.get.call(null,inst_29644__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_29647 = cljs.core.get.call(null,inst_29644__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_29692__$1 = (function (){var statearr_29720 = state_29692;(statearr_29720[(17)] = inst_29646);
(statearr_29720[(10)] = inst_29644__$1);
(statearr_29720[(16)] = inst_29647);
return statearr_29720;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_29692__$1,(10),inst_29645);
} else
{if((state_val_29693 === (5)))
{var inst_29636 = (state_29692[(7)]);var inst_29639 = cljs.core.seq_QMARK_.call(null,inst_29636);var state_29692__$1 = state_29692;if(inst_29639)
{var statearr_29721_29761 = state_29692__$1;(statearr_29721_29761[(1)] = (7));
} else
{var statearr_29722_29762 = state_29692__$1;(statearr_29722_29762[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (14)))
{var inst_29652 = (state_29692[(15)]);var inst_29659 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29652);var state_29692__$1 = state_29692;var statearr_29723_29763 = state_29692__$1;(statearr_29723_29763[(2)] = inst_29659);
(statearr_29723_29763[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (26)))
{var inst_29682 = (state_29692[(2)]);var state_29692__$1 = state_29692;var statearr_29724_29764 = state_29692__$1;(statearr_29724_29764[(2)] = inst_29682);
(statearr_29724_29764[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (16)))
{var inst_29662 = (state_29692[(2)]);var inst_29663 = calc_state.call(null);var inst_29636 = inst_29663;var state_29692__$1 = (function (){var statearr_29725 = state_29692;(statearr_29725[(7)] = inst_29636);
(statearr_29725[(18)] = inst_29662);
return statearr_29725;
})();var statearr_29726_29765 = state_29692__$1;(statearr_29726_29765[(2)] = null);
(statearr_29726_29765[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (10)))
{var inst_29652 = (state_29692[(15)]);var inst_29651 = (state_29692[(8)]);var inst_29650 = (state_29692[(2)]);var inst_29651__$1 = cljs.core.nth.call(null,inst_29650,(0),null);var inst_29652__$1 = cljs.core.nth.call(null,inst_29650,(1),null);var inst_29653 = (inst_29651__$1 == null);var inst_29654 = cljs.core._EQ_.call(null,inst_29652__$1,change);var inst_29655 = (inst_29653) || (inst_29654);var state_29692__$1 = (function (){var statearr_29727 = state_29692;(statearr_29727[(15)] = inst_29652__$1);
(statearr_29727[(8)] = inst_29651__$1);
return statearr_29727;
})();if(cljs.core.truth_(inst_29655))
{var statearr_29728_29766 = state_29692__$1;(statearr_29728_29766[(1)] = (11));
} else
{var statearr_29729_29767 = state_29692__$1;(statearr_29729_29767[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (18)))
{var inst_29646 = (state_29692[(17)]);var inst_29652 = (state_29692[(15)]);var inst_29647 = (state_29692[(16)]);var inst_29669 = cljs.core.empty_QMARK_.call(null,inst_29647);var inst_29670 = inst_29646.call(null,inst_29652);var inst_29671 = cljs.core.not.call(null,inst_29670);var inst_29672 = (inst_29669) && (inst_29671);var state_29692__$1 = state_29692;var statearr_29730_29768 = state_29692__$1;(statearr_29730_29768[(2)] = inst_29672);
(statearr_29730_29768[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29693 === (8)))
{var inst_29636 = (state_29692[(7)]);var state_29692__$1 = state_29692;var statearr_29731_29769 = state_29692__$1;(statearr_29731_29769[(2)] = inst_29636);
(statearr_29731_29769[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___29739,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6187__auto__,c__6202__auto___29739,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_29735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29735[(0)] = state_machine__6188__auto__);
(statearr_29735[(1)] = (1));
return statearr_29735;
});
var state_machine__6188__auto____1 = (function (state_29692){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_29692);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e29736){if((e29736 instanceof Object))
{var ex__6191__auto__ = e29736;var statearr_29737_29770 = state_29692;(statearr_29737_29770[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29692);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29736;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29771 = state_29692;
state_29692 = G__29771;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_29692){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_29692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___29739,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6204__auto__ = (function (){var statearr_29738 = f__6203__auto__.call(null);(statearr_29738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___29739);
return statearr_29738;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___29739,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj29773 = {};return obj29773;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3551__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3551__auto__,mults){
return (function (p1__29774_SHARP_){if(cljs.core.truth_(p1__29774_SHARP_.call(null,topic)))
{return p1__29774_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__29774_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3551__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t29897 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29897 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29898){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29898 = meta29898;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29897.cljs$lang$type = true;
cljs.core.async.t29897.cljs$lang$ctorStr = "cljs.core.async/t29897";
cljs.core.async.t29897.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t29897");
});})(mults,ensure_mult))
;
cljs.core.async.t29897.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t29897.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t29897.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t29897.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t29897.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t29897.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29897.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t29897.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29899){var self__ = this;
var _29899__$1 = this;return self__.meta29898;
});})(mults,ensure_mult))
;
cljs.core.async.t29897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29899,meta29898__$1){var self__ = this;
var _29899__$1 = this;return (new cljs.core.async.t29897(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29898__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t29897 = ((function (mults,ensure_mult){
return (function __GT_t29897(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29898){return (new cljs.core.async.t29897(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29898));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t29897(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6202__auto___30019 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___30019,mults,ensure_mult,p){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___30019,mults,ensure_mult,p){
return (function (state_29971){var state_val_29972 = (state_29971[(1)]);if((state_val_29972 === (7)))
{var inst_29967 = (state_29971[(2)]);var state_29971__$1 = state_29971;var statearr_29973_30020 = state_29971__$1;(statearr_29973_30020[(2)] = inst_29967);
(statearr_29973_30020[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (20)))
{var state_29971__$1 = state_29971;var statearr_29974_30021 = state_29971__$1;(statearr_29974_30021[(2)] = null);
(statearr_29974_30021[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (1)))
{var state_29971__$1 = state_29971;var statearr_29975_30022 = state_29971__$1;(statearr_29975_30022[(2)] = null);
(statearr_29975_30022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (24)))
{var inst_29950 = (state_29971[(7)]);var inst_29959 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29950);var state_29971__$1 = state_29971;var statearr_29976_30023 = state_29971__$1;(statearr_29976_30023[(2)] = inst_29959);
(statearr_29976_30023[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (4)))
{var inst_29902 = (state_29971[(8)]);var inst_29902__$1 = (state_29971[(2)]);var inst_29903 = (inst_29902__$1 == null);var state_29971__$1 = (function (){var statearr_29977 = state_29971;(statearr_29977[(8)] = inst_29902__$1);
return statearr_29977;
})();if(cljs.core.truth_(inst_29903))
{var statearr_29978_30024 = state_29971__$1;(statearr_29978_30024[(1)] = (5));
} else
{var statearr_29979_30025 = state_29971__$1;(statearr_29979_30025[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (15)))
{var inst_29944 = (state_29971[(2)]);var state_29971__$1 = state_29971;var statearr_29980_30026 = state_29971__$1;(statearr_29980_30026[(2)] = inst_29944);
(statearr_29980_30026[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (21)))
{var inst_29964 = (state_29971[(2)]);var state_29971__$1 = (function (){var statearr_29981 = state_29971;(statearr_29981[(9)] = inst_29964);
return statearr_29981;
})();var statearr_29982_30027 = state_29971__$1;(statearr_29982_30027[(2)] = null);
(statearr_29982_30027[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (13)))
{var inst_29926 = (state_29971[(10)]);var inst_29928 = cljs.core.chunked_seq_QMARK_.call(null,inst_29926);var state_29971__$1 = state_29971;if(inst_29928)
{var statearr_29983_30028 = state_29971__$1;(statearr_29983_30028[(1)] = (16));
} else
{var statearr_29984_30029 = state_29971__$1;(statearr_29984_30029[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (22)))
{var inst_29956 = (state_29971[(2)]);var state_29971__$1 = state_29971;if(cljs.core.truth_(inst_29956))
{var statearr_29985_30030 = state_29971__$1;(statearr_29985_30030[(1)] = (23));
} else
{var statearr_29986_30031 = state_29971__$1;(statearr_29986_30031[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (6)))
{var inst_29902 = (state_29971[(8)]);var inst_29950 = (state_29971[(7)]);var inst_29952 = (state_29971[(11)]);var inst_29950__$1 = topic_fn.call(null,inst_29902);var inst_29951 = cljs.core.deref.call(null,mults);var inst_29952__$1 = cljs.core.get.call(null,inst_29951,inst_29950__$1);var state_29971__$1 = (function (){var statearr_29987 = state_29971;(statearr_29987[(7)] = inst_29950__$1);
(statearr_29987[(11)] = inst_29952__$1);
return statearr_29987;
})();if(cljs.core.truth_(inst_29952__$1))
{var statearr_29988_30032 = state_29971__$1;(statearr_29988_30032[(1)] = (19));
} else
{var statearr_29989_30033 = state_29971__$1;(statearr_29989_30033[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (25)))
{var inst_29961 = (state_29971[(2)]);var state_29971__$1 = state_29971;var statearr_29990_30034 = state_29971__$1;(statearr_29990_30034[(2)] = inst_29961);
(statearr_29990_30034[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (17)))
{var inst_29926 = (state_29971[(10)]);var inst_29935 = cljs.core.first.call(null,inst_29926);var inst_29936 = cljs.core.async.muxch_STAR_.call(null,inst_29935);var inst_29937 = cljs.core.async.close_BANG_.call(null,inst_29936);var inst_29938 = cljs.core.next.call(null,inst_29926);var inst_29912 = inst_29938;var inst_29913 = null;var inst_29914 = (0);var inst_29915 = (0);var state_29971__$1 = (function (){var statearr_29991 = state_29971;(statearr_29991[(12)] = inst_29912);
(statearr_29991[(13)] = inst_29913);
(statearr_29991[(14)] = inst_29915);
(statearr_29991[(15)] = inst_29914);
(statearr_29991[(16)] = inst_29937);
return statearr_29991;
})();var statearr_29992_30035 = state_29971__$1;(statearr_29992_30035[(2)] = null);
(statearr_29992_30035[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (3)))
{var inst_29969 = (state_29971[(2)]);var state_29971__$1 = state_29971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29971__$1,inst_29969);
} else
{if((state_val_29972 === (12)))
{var inst_29946 = (state_29971[(2)]);var state_29971__$1 = state_29971;var statearr_29993_30036 = state_29971__$1;(statearr_29993_30036[(2)] = inst_29946);
(statearr_29993_30036[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (2)))
{var state_29971__$1 = state_29971;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29971__$1,(4),ch);
} else
{if((state_val_29972 === (23)))
{var state_29971__$1 = state_29971;var statearr_29994_30037 = state_29971__$1;(statearr_29994_30037[(2)] = null);
(statearr_29994_30037[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (19)))
{var inst_29902 = (state_29971[(8)]);var inst_29952 = (state_29971[(11)]);var inst_29954 = cljs.core.async.muxch_STAR_.call(null,inst_29952);var state_29971__$1 = state_29971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29971__$1,(22),inst_29954,inst_29902);
} else
{if((state_val_29972 === (11)))
{var inst_29912 = (state_29971[(12)]);var inst_29926 = (state_29971[(10)]);var inst_29926__$1 = cljs.core.seq.call(null,inst_29912);var state_29971__$1 = (function (){var statearr_29995 = state_29971;(statearr_29995[(10)] = inst_29926__$1);
return statearr_29995;
})();if(inst_29926__$1)
{var statearr_29996_30038 = state_29971__$1;(statearr_29996_30038[(1)] = (13));
} else
{var statearr_29997_30039 = state_29971__$1;(statearr_29997_30039[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (9)))
{var inst_29948 = (state_29971[(2)]);var state_29971__$1 = state_29971;var statearr_29998_30040 = state_29971__$1;(statearr_29998_30040[(2)] = inst_29948);
(statearr_29998_30040[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (5)))
{var inst_29909 = cljs.core.deref.call(null,mults);var inst_29910 = cljs.core.vals.call(null,inst_29909);var inst_29911 = cljs.core.seq.call(null,inst_29910);var inst_29912 = inst_29911;var inst_29913 = null;var inst_29914 = (0);var inst_29915 = (0);var state_29971__$1 = (function (){var statearr_29999 = state_29971;(statearr_29999[(12)] = inst_29912);
(statearr_29999[(13)] = inst_29913);
(statearr_29999[(14)] = inst_29915);
(statearr_29999[(15)] = inst_29914);
return statearr_29999;
})();var statearr_30000_30041 = state_29971__$1;(statearr_30000_30041[(2)] = null);
(statearr_30000_30041[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (14)))
{var state_29971__$1 = state_29971;var statearr_30004_30042 = state_29971__$1;(statearr_30004_30042[(2)] = null);
(statearr_30004_30042[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (16)))
{var inst_29926 = (state_29971[(10)]);var inst_29930 = cljs.core.chunk_first.call(null,inst_29926);var inst_29931 = cljs.core.chunk_rest.call(null,inst_29926);var inst_29932 = cljs.core.count.call(null,inst_29930);var inst_29912 = inst_29931;var inst_29913 = inst_29930;var inst_29914 = inst_29932;var inst_29915 = (0);var state_29971__$1 = (function (){var statearr_30005 = state_29971;(statearr_30005[(12)] = inst_29912);
(statearr_30005[(13)] = inst_29913);
(statearr_30005[(14)] = inst_29915);
(statearr_30005[(15)] = inst_29914);
return statearr_30005;
})();var statearr_30006_30043 = state_29971__$1;(statearr_30006_30043[(2)] = null);
(statearr_30006_30043[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (10)))
{var inst_29912 = (state_29971[(12)]);var inst_29913 = (state_29971[(13)]);var inst_29915 = (state_29971[(14)]);var inst_29914 = (state_29971[(15)]);var inst_29920 = cljs.core._nth.call(null,inst_29913,inst_29915);var inst_29921 = cljs.core.async.muxch_STAR_.call(null,inst_29920);var inst_29922 = cljs.core.async.close_BANG_.call(null,inst_29921);var inst_29923 = (inst_29915 + (1));var tmp30001 = inst_29912;var tmp30002 = inst_29913;var tmp30003 = inst_29914;var inst_29912__$1 = tmp30001;var inst_29913__$1 = tmp30002;var inst_29914__$1 = tmp30003;var inst_29915__$1 = inst_29923;var state_29971__$1 = (function (){var statearr_30007 = state_29971;(statearr_30007[(12)] = inst_29912__$1);
(statearr_30007[(13)] = inst_29913__$1);
(statearr_30007[(17)] = inst_29922);
(statearr_30007[(14)] = inst_29915__$1);
(statearr_30007[(15)] = inst_29914__$1);
return statearr_30007;
})();var statearr_30008_30044 = state_29971__$1;(statearr_30008_30044[(2)] = null);
(statearr_30008_30044[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (18)))
{var inst_29941 = (state_29971[(2)]);var state_29971__$1 = state_29971;var statearr_30009_30045 = state_29971__$1;(statearr_30009_30045[(2)] = inst_29941);
(statearr_30009_30045[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29972 === (8)))
{var inst_29915 = (state_29971[(14)]);var inst_29914 = (state_29971[(15)]);var inst_29917 = (inst_29915 < inst_29914);var inst_29918 = inst_29917;var state_29971__$1 = state_29971;if(cljs.core.truth_(inst_29918))
{var statearr_30010_30046 = state_29971__$1;(statearr_30010_30046[(1)] = (10));
} else
{var statearr_30011_30047 = state_29971__$1;(statearr_30011_30047[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___30019,mults,ensure_mult,p))
;return ((function (switch__6187__auto__,c__6202__auto___30019,mults,ensure_mult,p){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_30015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30015[(0)] = state_machine__6188__auto__);
(statearr_30015[(1)] = (1));
return statearr_30015;
});
var state_machine__6188__auto____1 = (function (state_29971){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_29971);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e30016){if((e30016 instanceof Object))
{var ex__6191__auto__ = e30016;var statearr_30017_30048 = state_29971;(statearr_30017_30048[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29971);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30016;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30049 = state_29971;
state_29971 = G__30049;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_29971){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_29971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___30019,mults,ensure_mult,p))
})();var state__6204__auto__ = (function (){var statearr_30018 = f__6203__auto__.call(null);(statearr_30018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___30019);
return statearr_30018;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___30019,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6202__auto___30186 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___30186,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___30186,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30156){var state_val_30157 = (state_30156[(1)]);if((state_val_30157 === (7)))
{var state_30156__$1 = state_30156;var statearr_30158_30187 = state_30156__$1;(statearr_30158_30187[(2)] = null);
(statearr_30158_30187[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30157 === (1)))
{var state_30156__$1 = state_30156;var statearr_30159_30188 = state_30156__$1;(statearr_30159_30188[(2)] = null);
(statearr_30159_30188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30157 === (4)))
{var inst_30120 = (state_30156[(7)]);var inst_30122 = (inst_30120 < cnt);var state_30156__$1 = state_30156;if(cljs.core.truth_(inst_30122))
{var statearr_30160_30189 = state_30156__$1;(statearr_30160_30189[(1)] = (6));
} else
{var statearr_30161_30190 = state_30156__$1;(statearr_30161_30190[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30157 === (15)))
{var inst_30152 = (state_30156[(2)]);var state_30156__$1 = state_30156;var statearr_30162_30191 = state_30156__$1;(statearr_30162_30191[(2)] = inst_30152);
(statearr_30162_30191[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30157 === (13)))
{var inst_30145 = cljs.core.async.close_BANG_.call(null,out);var state_30156__$1 = state_30156;var statearr_30163_30192 = state_30156__$1;(statearr_30163_30192[(2)] = inst_30145);
(statearr_30163_30192[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30157 === (6)))
{var state_30156__$1 = state_30156;var statearr_30164_30193 = state_30156__$1;(statearr_30164_30193[(2)] = null);
(statearr_30164_30193[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30157 === (3)))
{var inst_30154 = (state_30156[(2)]);var state_30156__$1 = state_30156;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30156__$1,inst_30154);
} else
{if((state_val_30157 === (12)))
{var inst_30142 = (state_30156[(8)]);var inst_30142__$1 = (state_30156[(2)]);var inst_30143 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30142__$1);var state_30156__$1 = (function (){var statearr_30165 = state_30156;(statearr_30165[(8)] = inst_30142__$1);
return statearr_30165;
})();if(cljs.core.truth_(inst_30143))
{var statearr_30166_30194 = state_30156__$1;(statearr_30166_30194[(1)] = (13));
} else
{var statearr_30167_30195 = state_30156__$1;(statearr_30167_30195[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30157 === (2)))
{var inst_30119 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_30120 = (0);var state_30156__$1 = (function (){var statearr_30168 = state_30156;(statearr_30168[(9)] = inst_30119);
(statearr_30168[(7)] = inst_30120);
return statearr_30168;
})();var statearr_30169_30196 = state_30156__$1;(statearr_30169_30196[(2)] = null);
(statearr_30169_30196[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30157 === (11)))
{var inst_30120 = (state_30156[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30156,(10),Object,null,(9));var inst_30129 = chs__$1.call(null,inst_30120);var inst_30130 = done.call(null,inst_30120);var inst_30131 = cljs.core.async.take_BANG_.call(null,inst_30129,inst_30130);var state_30156__$1 = state_30156;var statearr_30170_30197 = state_30156__$1;(statearr_30170_30197[(2)] = inst_30131);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30156__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30157 === (9)))
{var inst_30120 = (state_30156[(7)]);var inst_30133 = (state_30156[(2)]);var inst_30134 = (inst_30120 + (1));var inst_30120__$1 = inst_30134;var state_30156__$1 = (function (){var statearr_30171 = state_30156;(statearr_30171[(7)] = inst_30120__$1);
(statearr_30171[(10)] = inst_30133);
return statearr_30171;
})();var statearr_30172_30198 = state_30156__$1;(statearr_30172_30198[(2)] = null);
(statearr_30172_30198[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30157 === (5)))
{var inst_30140 = (state_30156[(2)]);var state_30156__$1 = (function (){var statearr_30173 = state_30156;(statearr_30173[(11)] = inst_30140);
return statearr_30173;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30156__$1,(12),dchan);
} else
{if((state_val_30157 === (14)))
{var inst_30142 = (state_30156[(8)]);var inst_30147 = cljs.core.apply.call(null,f,inst_30142);var state_30156__$1 = state_30156;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30156__$1,(16),out,inst_30147);
} else
{if((state_val_30157 === (16)))
{var inst_30149 = (state_30156[(2)]);var state_30156__$1 = (function (){var statearr_30174 = state_30156;(statearr_30174[(12)] = inst_30149);
return statearr_30174;
})();var statearr_30175_30199 = state_30156__$1;(statearr_30175_30199[(2)] = null);
(statearr_30175_30199[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30157 === (10)))
{var inst_30124 = (state_30156[(2)]);var inst_30125 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_30156__$1 = (function (){var statearr_30176 = state_30156;(statearr_30176[(13)] = inst_30124);
return statearr_30176;
})();var statearr_30177_30200 = state_30156__$1;(statearr_30177_30200[(2)] = inst_30125);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30156__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30157 === (8)))
{var inst_30138 = (state_30156[(2)]);var state_30156__$1 = state_30156;var statearr_30178_30201 = state_30156__$1;(statearr_30178_30201[(2)] = inst_30138);
(statearr_30178_30201[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___30186,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6187__auto__,c__6202__auto___30186,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_30182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30182[(0)] = state_machine__6188__auto__);
(statearr_30182[(1)] = (1));
return statearr_30182;
});
var state_machine__6188__auto____1 = (function (state_30156){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30156);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e30183){if((e30183 instanceof Object))
{var ex__6191__auto__ = e30183;var statearr_30184_30202 = state_30156;(statearr_30184_30202[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30156);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30183;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30203 = state_30156;
state_30156 = G__30203;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30156){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___30186,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6204__auto__ = (function (){var statearr_30185 = f__6203__auto__.call(null);(statearr_30185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___30186);
return statearr_30185;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___30186,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6202__auto___30311 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___30311,out){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___30311,out){
return (function (state_30287){var state_val_30288 = (state_30287[(1)]);if((state_val_30288 === (7)))
{var inst_30266 = (state_30287[(7)]);var inst_30267 = (state_30287[(8)]);var inst_30266__$1 = (state_30287[(2)]);var inst_30267__$1 = cljs.core.nth.call(null,inst_30266__$1,(0),null);var inst_30268 = cljs.core.nth.call(null,inst_30266__$1,(1),null);var inst_30269 = (inst_30267__$1 == null);var state_30287__$1 = (function (){var statearr_30289 = state_30287;(statearr_30289[(7)] = inst_30266__$1);
(statearr_30289[(9)] = inst_30268);
(statearr_30289[(8)] = inst_30267__$1);
return statearr_30289;
})();if(cljs.core.truth_(inst_30269))
{var statearr_30290_30312 = state_30287__$1;(statearr_30290_30312[(1)] = (8));
} else
{var statearr_30291_30313 = state_30287__$1;(statearr_30291_30313[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (1)))
{var inst_30258 = cljs.core.vec.call(null,chs);var inst_30259 = inst_30258;var state_30287__$1 = (function (){var statearr_30292 = state_30287;(statearr_30292[(10)] = inst_30259);
return statearr_30292;
})();var statearr_30293_30314 = state_30287__$1;(statearr_30293_30314[(2)] = null);
(statearr_30293_30314[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (4)))
{var inst_30259 = (state_30287[(10)]);var state_30287__$1 = state_30287;return cljs.core.async.ioc_alts_BANG_.call(null,state_30287__$1,(7),inst_30259);
} else
{if((state_val_30288 === (6)))
{var inst_30283 = (state_30287[(2)]);var state_30287__$1 = state_30287;var statearr_30294_30315 = state_30287__$1;(statearr_30294_30315[(2)] = inst_30283);
(statearr_30294_30315[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (3)))
{var inst_30285 = (state_30287[(2)]);var state_30287__$1 = state_30287;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30287__$1,inst_30285);
} else
{if((state_val_30288 === (2)))
{var inst_30259 = (state_30287[(10)]);var inst_30261 = cljs.core.count.call(null,inst_30259);var inst_30262 = (inst_30261 > (0));var state_30287__$1 = state_30287;if(cljs.core.truth_(inst_30262))
{var statearr_30296_30316 = state_30287__$1;(statearr_30296_30316[(1)] = (4));
} else
{var statearr_30297_30317 = state_30287__$1;(statearr_30297_30317[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (11)))
{var inst_30259 = (state_30287[(10)]);var inst_30276 = (state_30287[(2)]);var tmp30295 = inst_30259;var inst_30259__$1 = tmp30295;var state_30287__$1 = (function (){var statearr_30298 = state_30287;(statearr_30298[(10)] = inst_30259__$1);
(statearr_30298[(11)] = inst_30276);
return statearr_30298;
})();var statearr_30299_30318 = state_30287__$1;(statearr_30299_30318[(2)] = null);
(statearr_30299_30318[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (9)))
{var inst_30267 = (state_30287[(8)]);var state_30287__$1 = state_30287;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30287__$1,(11),out,inst_30267);
} else
{if((state_val_30288 === (5)))
{var inst_30281 = cljs.core.async.close_BANG_.call(null,out);var state_30287__$1 = state_30287;var statearr_30300_30319 = state_30287__$1;(statearr_30300_30319[(2)] = inst_30281);
(statearr_30300_30319[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (10)))
{var inst_30279 = (state_30287[(2)]);var state_30287__$1 = state_30287;var statearr_30301_30320 = state_30287__$1;(statearr_30301_30320[(2)] = inst_30279);
(statearr_30301_30320[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30288 === (8)))
{var inst_30266 = (state_30287[(7)]);var inst_30259 = (state_30287[(10)]);var inst_30268 = (state_30287[(9)]);var inst_30267 = (state_30287[(8)]);var inst_30271 = (function (){var c = inst_30268;var v = inst_30267;var vec__30264 = inst_30266;var cs = inst_30259;return ((function (c,v,vec__30264,cs,inst_30266,inst_30259,inst_30268,inst_30267,state_val_30288,c__6202__auto___30311,out){
return (function (p1__30204_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__30204_SHARP_);
});
;})(c,v,vec__30264,cs,inst_30266,inst_30259,inst_30268,inst_30267,state_val_30288,c__6202__auto___30311,out))
})();var inst_30272 = cljs.core.filterv.call(null,inst_30271,inst_30259);var inst_30259__$1 = inst_30272;var state_30287__$1 = (function (){var statearr_30302 = state_30287;(statearr_30302[(10)] = inst_30259__$1);
return statearr_30302;
})();var statearr_30303_30321 = state_30287__$1;(statearr_30303_30321[(2)] = null);
(statearr_30303_30321[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___30311,out))
;return ((function (switch__6187__auto__,c__6202__auto___30311,out){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_30307 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30307[(0)] = state_machine__6188__auto__);
(statearr_30307[(1)] = (1));
return statearr_30307;
});
var state_machine__6188__auto____1 = (function (state_30287){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30287);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e30308){if((e30308 instanceof Object))
{var ex__6191__auto__ = e30308;var statearr_30309_30322 = state_30287;(statearr_30309_30322[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30287);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30308;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30323 = state_30287;
state_30287 = G__30323;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30287){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___30311,out))
})();var state__6204__auto__ = (function (){var statearr_30310 = f__6203__auto__.call(null);(statearr_30310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___30311);
return statearr_30310;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___30311,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6202__auto___30416 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___30416,out){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___30416,out){
return (function (state_30393){var state_val_30394 = (state_30393[(1)]);if((state_val_30394 === (7)))
{var inst_30375 = (state_30393[(7)]);var inst_30375__$1 = (state_30393[(2)]);var inst_30376 = (inst_30375__$1 == null);var inst_30377 = cljs.core.not.call(null,inst_30376);var state_30393__$1 = (function (){var statearr_30395 = state_30393;(statearr_30395[(7)] = inst_30375__$1);
return statearr_30395;
})();if(inst_30377)
{var statearr_30396_30417 = state_30393__$1;(statearr_30396_30417[(1)] = (8));
} else
{var statearr_30397_30418 = state_30393__$1;(statearr_30397_30418[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30394 === (1)))
{var inst_30370 = (0);var state_30393__$1 = (function (){var statearr_30398 = state_30393;(statearr_30398[(8)] = inst_30370);
return statearr_30398;
})();var statearr_30399_30419 = state_30393__$1;(statearr_30399_30419[(2)] = null);
(statearr_30399_30419[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30394 === (4)))
{var state_30393__$1 = state_30393;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30393__$1,(7),ch);
} else
{if((state_val_30394 === (6)))
{var inst_30388 = (state_30393[(2)]);var state_30393__$1 = state_30393;var statearr_30400_30420 = state_30393__$1;(statearr_30400_30420[(2)] = inst_30388);
(statearr_30400_30420[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30394 === (3)))
{var inst_30390 = (state_30393[(2)]);var inst_30391 = cljs.core.async.close_BANG_.call(null,out);var state_30393__$1 = (function (){var statearr_30401 = state_30393;(statearr_30401[(9)] = inst_30390);
return statearr_30401;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30393__$1,inst_30391);
} else
{if((state_val_30394 === (2)))
{var inst_30370 = (state_30393[(8)]);var inst_30372 = (inst_30370 < n);var state_30393__$1 = state_30393;if(cljs.core.truth_(inst_30372))
{var statearr_30402_30421 = state_30393__$1;(statearr_30402_30421[(1)] = (4));
} else
{var statearr_30403_30422 = state_30393__$1;(statearr_30403_30422[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30394 === (11)))
{var inst_30370 = (state_30393[(8)]);var inst_30380 = (state_30393[(2)]);var inst_30381 = (inst_30370 + (1));var inst_30370__$1 = inst_30381;var state_30393__$1 = (function (){var statearr_30404 = state_30393;(statearr_30404[(10)] = inst_30380);
(statearr_30404[(8)] = inst_30370__$1);
return statearr_30404;
})();var statearr_30405_30423 = state_30393__$1;(statearr_30405_30423[(2)] = null);
(statearr_30405_30423[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30394 === (9)))
{var state_30393__$1 = state_30393;var statearr_30406_30424 = state_30393__$1;(statearr_30406_30424[(2)] = null);
(statearr_30406_30424[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30394 === (5)))
{var state_30393__$1 = state_30393;var statearr_30407_30425 = state_30393__$1;(statearr_30407_30425[(2)] = null);
(statearr_30407_30425[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30394 === (10)))
{var inst_30385 = (state_30393[(2)]);var state_30393__$1 = state_30393;var statearr_30408_30426 = state_30393__$1;(statearr_30408_30426[(2)] = inst_30385);
(statearr_30408_30426[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30394 === (8)))
{var inst_30375 = (state_30393[(7)]);var state_30393__$1 = state_30393;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30393__$1,(11),out,inst_30375);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___30416,out))
;return ((function (switch__6187__auto__,c__6202__auto___30416,out){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_30412 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30412[(0)] = state_machine__6188__auto__);
(statearr_30412[(1)] = (1));
return statearr_30412;
});
var state_machine__6188__auto____1 = (function (state_30393){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30393);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e30413){if((e30413 instanceof Object))
{var ex__6191__auto__ = e30413;var statearr_30414_30427 = state_30393;(statearr_30414_30427[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30393);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30413;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30428 = state_30393;
state_30393 = G__30428;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30393){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___30416,out))
})();var state__6204__auto__ = (function (){var statearr_30415 = f__6203__auto__.call(null);(statearr_30415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___30416);
return statearr_30415;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___30416,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t30436 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30436 = (function (ch,f,map_LT_,meta30437){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30437 = meta30437;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30436.cljs$lang$type = true;
cljs.core.async.t30436.cljs$lang$ctorStr = "cljs.core.async/t30436";
cljs.core.async.t30436.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t30436");
});
cljs.core.async.t30436.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t30436.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t30439 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30439 = (function (fn1,_,meta30437,ch,f,map_LT_,meta30440){
this.fn1 = fn1;
this._ = _;
this.meta30437 = meta30437;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30440 = meta30440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30439.cljs$lang$type = true;
cljs.core.async.t30439.cljs$lang$ctorStr = "cljs.core.async/t30439";
cljs.core.async.t30439.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t30439");
});})(___$1))
;
cljs.core.async.t30439.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30439.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t30439.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__30429_SHARP_){return f1.call(null,(((p1__30429_SHARP_ == null))?null:self__.f.call(null,p1__30429_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t30439.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30441){var self__ = this;
var _30441__$1 = this;return self__.meta30440;
});})(___$1))
;
cljs.core.async.t30439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30441,meta30440__$1){var self__ = this;
var _30441__$1 = this;return (new cljs.core.async.t30439(self__.fn1,self__._,self__.meta30437,self__.ch,self__.f,self__.map_LT_,meta30440__$1));
});})(___$1))
;
cljs.core.async.__GT_t30439 = ((function (___$1){
return (function __GT_t30439(fn1__$1,___$2,meta30437__$1,ch__$2,f__$2,map_LT___$2,meta30440){return (new cljs.core.async.t30439(fn1__$1,___$2,meta30437__$1,ch__$2,f__$2,map_LT___$2,meta30440));
});})(___$1))
;
}
return (new cljs.core.async.t30439(fn1,___$1,self__.meta30437,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3539__auto__ = ret;if(cljs.core.truth_(and__3539__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3539__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t30436.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30436.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t30436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30438){var self__ = this;
var _30438__$1 = this;return self__.meta30437;
});
cljs.core.async.t30436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30438,meta30437__$1){var self__ = this;
var _30438__$1 = this;return (new cljs.core.async.t30436(self__.ch,self__.f,self__.map_LT_,meta30437__$1));
});
cljs.core.async.__GT_t30436 = (function __GT_t30436(ch__$1,f__$1,map_LT___$1,meta30437){return (new cljs.core.async.t30436(ch__$1,f__$1,map_LT___$1,meta30437));
});
}
return (new cljs.core.async.t30436(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t30445 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30445 = (function (ch,f,map_GT_,meta30446){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30446 = meta30446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30445.cljs$lang$type = true;
cljs.core.async.t30445.cljs$lang$ctorStr = "cljs.core.async/t30445";
cljs.core.async.t30445.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t30445");
});
cljs.core.async.t30445.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30445.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t30445.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30445.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t30445.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30445.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30447){var self__ = this;
var _30447__$1 = this;return self__.meta30446;
});
cljs.core.async.t30445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30447,meta30446__$1){var self__ = this;
var _30447__$1 = this;return (new cljs.core.async.t30445(self__.ch,self__.f,self__.map_GT_,meta30446__$1));
});
cljs.core.async.__GT_t30445 = (function __GT_t30445(ch__$1,f__$1,map_GT___$1,meta30446){return (new cljs.core.async.t30445(ch__$1,f__$1,map_GT___$1,meta30446));
});
}
return (new cljs.core.async.t30445(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t30451 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30451 = (function (ch,p,filter_GT_,meta30452){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30452 = meta30452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30451.cljs$lang$type = true;
cljs.core.async.t30451.cljs$lang$ctorStr = "cljs.core.async/t30451";
cljs.core.async.t30451.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t30451");
});
cljs.core.async.t30451.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30451.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t30451.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30451.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t30451.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30451.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30451.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t30451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30453){var self__ = this;
var _30453__$1 = this;return self__.meta30452;
});
cljs.core.async.t30451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30453,meta30452__$1){var self__ = this;
var _30453__$1 = this;return (new cljs.core.async.t30451(self__.ch,self__.p,self__.filter_GT_,meta30452__$1));
});
cljs.core.async.__GT_t30451 = (function __GT_t30451(ch__$1,p__$1,filter_GT___$1,meta30452){return (new cljs.core.async.t30451(ch__$1,p__$1,filter_GT___$1,meta30452));
});
}
return (new cljs.core.async.t30451(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6202__auto___30536 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___30536,out){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___30536,out){
return (function (state_30515){var state_val_30516 = (state_30515[(1)]);if((state_val_30516 === (7)))
{var inst_30511 = (state_30515[(2)]);var state_30515__$1 = state_30515;var statearr_30517_30537 = state_30515__$1;(statearr_30517_30537[(2)] = inst_30511);
(statearr_30517_30537[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30516 === (1)))
{var state_30515__$1 = state_30515;var statearr_30518_30538 = state_30515__$1;(statearr_30518_30538[(2)] = null);
(statearr_30518_30538[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30516 === (4)))
{var inst_30497 = (state_30515[(7)]);var inst_30497__$1 = (state_30515[(2)]);var inst_30498 = (inst_30497__$1 == null);var state_30515__$1 = (function (){var statearr_30519 = state_30515;(statearr_30519[(7)] = inst_30497__$1);
return statearr_30519;
})();if(cljs.core.truth_(inst_30498))
{var statearr_30520_30539 = state_30515__$1;(statearr_30520_30539[(1)] = (5));
} else
{var statearr_30521_30540 = state_30515__$1;(statearr_30521_30540[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30516 === (6)))
{var inst_30497 = (state_30515[(7)]);var inst_30502 = p.call(null,inst_30497);var state_30515__$1 = state_30515;if(cljs.core.truth_(inst_30502))
{var statearr_30522_30541 = state_30515__$1;(statearr_30522_30541[(1)] = (8));
} else
{var statearr_30523_30542 = state_30515__$1;(statearr_30523_30542[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30516 === (3)))
{var inst_30513 = (state_30515[(2)]);var state_30515__$1 = state_30515;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30515__$1,inst_30513);
} else
{if((state_val_30516 === (2)))
{var state_30515__$1 = state_30515;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30515__$1,(4),ch);
} else
{if((state_val_30516 === (11)))
{var inst_30505 = (state_30515[(2)]);var state_30515__$1 = state_30515;var statearr_30524_30543 = state_30515__$1;(statearr_30524_30543[(2)] = inst_30505);
(statearr_30524_30543[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30516 === (9)))
{var state_30515__$1 = state_30515;var statearr_30525_30544 = state_30515__$1;(statearr_30525_30544[(2)] = null);
(statearr_30525_30544[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30516 === (5)))
{var inst_30500 = cljs.core.async.close_BANG_.call(null,out);var state_30515__$1 = state_30515;var statearr_30526_30545 = state_30515__$1;(statearr_30526_30545[(2)] = inst_30500);
(statearr_30526_30545[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30516 === (10)))
{var inst_30508 = (state_30515[(2)]);var state_30515__$1 = (function (){var statearr_30527 = state_30515;(statearr_30527[(8)] = inst_30508);
return statearr_30527;
})();var statearr_30528_30546 = state_30515__$1;(statearr_30528_30546[(2)] = null);
(statearr_30528_30546[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30516 === (8)))
{var inst_30497 = (state_30515[(7)]);var state_30515__$1 = state_30515;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30515__$1,(11),out,inst_30497);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___30536,out))
;return ((function (switch__6187__auto__,c__6202__auto___30536,out){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_30532 = [null,null,null,null,null,null,null,null,null];(statearr_30532[(0)] = state_machine__6188__auto__);
(statearr_30532[(1)] = (1));
return statearr_30532;
});
var state_machine__6188__auto____1 = (function (state_30515){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30515);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e30533){if((e30533 instanceof Object))
{var ex__6191__auto__ = e30533;var statearr_30534_30547 = state_30515;(statearr_30534_30547[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30515);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30533;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30548 = state_30515;
state_30515 = G__30548;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30515){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___30536,out))
})();var state__6204__auto__ = (function (){var statearr_30535 = f__6203__auto__.call(null);(statearr_30535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___30536);
return statearr_30535;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___30536,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_30714){var state_val_30715 = (state_30714[(1)]);if((state_val_30715 === (7)))
{var inst_30710 = (state_30714[(2)]);var state_30714__$1 = state_30714;var statearr_30716_30757 = state_30714__$1;(statearr_30716_30757[(2)] = inst_30710);
(statearr_30716_30757[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (20)))
{var inst_30680 = (state_30714[(7)]);var inst_30691 = (state_30714[(2)]);var inst_30692 = cljs.core.next.call(null,inst_30680);var inst_30666 = inst_30692;var inst_30667 = null;var inst_30668 = (0);var inst_30669 = (0);var state_30714__$1 = (function (){var statearr_30717 = state_30714;(statearr_30717[(8)] = inst_30668);
(statearr_30717[(9)] = inst_30666);
(statearr_30717[(10)] = inst_30691);
(statearr_30717[(11)] = inst_30669);
(statearr_30717[(12)] = inst_30667);
return statearr_30717;
})();var statearr_30718_30758 = state_30714__$1;(statearr_30718_30758[(2)] = null);
(statearr_30718_30758[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (1)))
{var state_30714__$1 = state_30714;var statearr_30719_30759 = state_30714__$1;(statearr_30719_30759[(2)] = null);
(statearr_30719_30759[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (4)))
{var inst_30655 = (state_30714[(13)]);var inst_30655__$1 = (state_30714[(2)]);var inst_30656 = (inst_30655__$1 == null);var state_30714__$1 = (function (){var statearr_30720 = state_30714;(statearr_30720[(13)] = inst_30655__$1);
return statearr_30720;
})();if(cljs.core.truth_(inst_30656))
{var statearr_30721_30760 = state_30714__$1;(statearr_30721_30760[(1)] = (5));
} else
{var statearr_30722_30761 = state_30714__$1;(statearr_30722_30761[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (15)))
{var state_30714__$1 = state_30714;var statearr_30726_30762 = state_30714__$1;(statearr_30726_30762[(2)] = null);
(statearr_30726_30762[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (21)))
{var state_30714__$1 = state_30714;var statearr_30727_30763 = state_30714__$1;(statearr_30727_30763[(2)] = null);
(statearr_30727_30763[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (13)))
{var inst_30668 = (state_30714[(8)]);var inst_30666 = (state_30714[(9)]);var inst_30669 = (state_30714[(11)]);var inst_30667 = (state_30714[(12)]);var inst_30676 = (state_30714[(2)]);var inst_30677 = (inst_30669 + (1));var tmp30723 = inst_30668;var tmp30724 = inst_30666;var tmp30725 = inst_30667;var inst_30666__$1 = tmp30724;var inst_30667__$1 = tmp30725;var inst_30668__$1 = tmp30723;var inst_30669__$1 = inst_30677;var state_30714__$1 = (function (){var statearr_30728 = state_30714;(statearr_30728[(8)] = inst_30668__$1);
(statearr_30728[(9)] = inst_30666__$1);
(statearr_30728[(11)] = inst_30669__$1);
(statearr_30728[(12)] = inst_30667__$1);
(statearr_30728[(14)] = inst_30676);
return statearr_30728;
})();var statearr_30729_30764 = state_30714__$1;(statearr_30729_30764[(2)] = null);
(statearr_30729_30764[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (22)))
{var state_30714__$1 = state_30714;var statearr_30730_30765 = state_30714__$1;(statearr_30730_30765[(2)] = null);
(statearr_30730_30765[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (6)))
{var inst_30655 = (state_30714[(13)]);var inst_30664 = f.call(null,inst_30655);var inst_30665 = cljs.core.seq.call(null,inst_30664);var inst_30666 = inst_30665;var inst_30667 = null;var inst_30668 = (0);var inst_30669 = (0);var state_30714__$1 = (function (){var statearr_30731 = state_30714;(statearr_30731[(8)] = inst_30668);
(statearr_30731[(9)] = inst_30666);
(statearr_30731[(11)] = inst_30669);
(statearr_30731[(12)] = inst_30667);
return statearr_30731;
})();var statearr_30732_30766 = state_30714__$1;(statearr_30732_30766[(2)] = null);
(statearr_30732_30766[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (17)))
{var inst_30680 = (state_30714[(7)]);var inst_30684 = cljs.core.chunk_first.call(null,inst_30680);var inst_30685 = cljs.core.chunk_rest.call(null,inst_30680);var inst_30686 = cljs.core.count.call(null,inst_30684);var inst_30666 = inst_30685;var inst_30667 = inst_30684;var inst_30668 = inst_30686;var inst_30669 = (0);var state_30714__$1 = (function (){var statearr_30733 = state_30714;(statearr_30733[(8)] = inst_30668);
(statearr_30733[(9)] = inst_30666);
(statearr_30733[(11)] = inst_30669);
(statearr_30733[(12)] = inst_30667);
return statearr_30733;
})();var statearr_30734_30767 = state_30714__$1;(statearr_30734_30767[(2)] = null);
(statearr_30734_30767[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (3)))
{var inst_30712 = (state_30714[(2)]);var state_30714__$1 = state_30714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30714__$1,inst_30712);
} else
{if((state_val_30715 === (12)))
{var inst_30700 = (state_30714[(2)]);var state_30714__$1 = state_30714;var statearr_30735_30768 = state_30714__$1;(statearr_30735_30768[(2)] = inst_30700);
(statearr_30735_30768[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (2)))
{var state_30714__$1 = state_30714;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30714__$1,(4),in$);
} else
{if((state_val_30715 === (23)))
{var inst_30708 = (state_30714[(2)]);var state_30714__$1 = state_30714;var statearr_30736_30769 = state_30714__$1;(statearr_30736_30769[(2)] = inst_30708);
(statearr_30736_30769[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (19)))
{var inst_30695 = (state_30714[(2)]);var state_30714__$1 = state_30714;var statearr_30737_30770 = state_30714__$1;(statearr_30737_30770[(2)] = inst_30695);
(statearr_30737_30770[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (11)))
{var inst_30666 = (state_30714[(9)]);var inst_30680 = (state_30714[(7)]);var inst_30680__$1 = cljs.core.seq.call(null,inst_30666);var state_30714__$1 = (function (){var statearr_30738 = state_30714;(statearr_30738[(7)] = inst_30680__$1);
return statearr_30738;
})();if(inst_30680__$1)
{var statearr_30739_30771 = state_30714__$1;(statearr_30739_30771[(1)] = (14));
} else
{var statearr_30740_30772 = state_30714__$1;(statearr_30740_30772[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (9)))
{var inst_30702 = (state_30714[(2)]);var inst_30703 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_30714__$1 = (function (){var statearr_30741 = state_30714;(statearr_30741[(15)] = inst_30702);
return statearr_30741;
})();if(cljs.core.truth_(inst_30703))
{var statearr_30742_30773 = state_30714__$1;(statearr_30742_30773[(1)] = (21));
} else
{var statearr_30743_30774 = state_30714__$1;(statearr_30743_30774[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (5)))
{var inst_30658 = cljs.core.async.close_BANG_.call(null,out);var state_30714__$1 = state_30714;var statearr_30744_30775 = state_30714__$1;(statearr_30744_30775[(2)] = inst_30658);
(statearr_30744_30775[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (14)))
{var inst_30680 = (state_30714[(7)]);var inst_30682 = cljs.core.chunked_seq_QMARK_.call(null,inst_30680);var state_30714__$1 = state_30714;if(inst_30682)
{var statearr_30745_30776 = state_30714__$1;(statearr_30745_30776[(1)] = (17));
} else
{var statearr_30746_30777 = state_30714__$1;(statearr_30746_30777[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (16)))
{var inst_30698 = (state_30714[(2)]);var state_30714__$1 = state_30714;var statearr_30747_30778 = state_30714__$1;(statearr_30747_30778[(2)] = inst_30698);
(statearr_30747_30778[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30715 === (10)))
{var inst_30669 = (state_30714[(11)]);var inst_30667 = (state_30714[(12)]);var inst_30674 = cljs.core._nth.call(null,inst_30667,inst_30669);var state_30714__$1 = state_30714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30714__$1,(13),out,inst_30674);
} else
{if((state_val_30715 === (18)))
{var inst_30680 = (state_30714[(7)]);var inst_30689 = cljs.core.first.call(null,inst_30680);var state_30714__$1 = state_30714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30714__$1,(20),out,inst_30689);
} else
{if((state_val_30715 === (8)))
{var inst_30668 = (state_30714[(8)]);var inst_30669 = (state_30714[(11)]);var inst_30671 = (inst_30669 < inst_30668);var inst_30672 = inst_30671;var state_30714__$1 = state_30714;if(cljs.core.truth_(inst_30672))
{var statearr_30748_30779 = state_30714__$1;(statearr_30748_30779[(1)] = (10));
} else
{var statearr_30749_30780 = state_30714__$1;(statearr_30749_30780[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_30753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30753[(0)] = state_machine__6188__auto__);
(statearr_30753[(1)] = (1));
return statearr_30753;
});
var state_machine__6188__auto____1 = (function (state_30714){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30714);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e30754){if((e30754 instanceof Object))
{var ex__6191__auto__ = e30754;var statearr_30755_30781 = state_30714;(statearr_30755_30781[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30714);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30754;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30782 = state_30714;
state_30714 = G__30782;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30714){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_30756 = f__6203__auto__.call(null);(statearr_30756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_30756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6202__auto___30879 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___30879,out){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___30879,out){
return (function (state_30854){var state_val_30855 = (state_30854[(1)]);if((state_val_30855 === (7)))
{var inst_30849 = (state_30854[(2)]);var state_30854__$1 = state_30854;var statearr_30856_30880 = state_30854__$1;(statearr_30856_30880[(2)] = inst_30849);
(statearr_30856_30880[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30855 === (1)))
{var inst_30831 = null;var state_30854__$1 = (function (){var statearr_30857 = state_30854;(statearr_30857[(7)] = inst_30831);
return statearr_30857;
})();var statearr_30858_30881 = state_30854__$1;(statearr_30858_30881[(2)] = null);
(statearr_30858_30881[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30855 === (4)))
{var inst_30834 = (state_30854[(8)]);var inst_30834__$1 = (state_30854[(2)]);var inst_30835 = (inst_30834__$1 == null);var inst_30836 = cljs.core.not.call(null,inst_30835);var state_30854__$1 = (function (){var statearr_30859 = state_30854;(statearr_30859[(8)] = inst_30834__$1);
return statearr_30859;
})();if(inst_30836)
{var statearr_30860_30882 = state_30854__$1;(statearr_30860_30882[(1)] = (5));
} else
{var statearr_30861_30883 = state_30854__$1;(statearr_30861_30883[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30855 === (6)))
{var state_30854__$1 = state_30854;var statearr_30862_30884 = state_30854__$1;(statearr_30862_30884[(2)] = null);
(statearr_30862_30884[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30855 === (3)))
{var inst_30851 = (state_30854[(2)]);var inst_30852 = cljs.core.async.close_BANG_.call(null,out);var state_30854__$1 = (function (){var statearr_30863 = state_30854;(statearr_30863[(9)] = inst_30851);
return statearr_30863;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30854__$1,inst_30852);
} else
{if((state_val_30855 === (2)))
{var state_30854__$1 = state_30854;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30854__$1,(4),ch);
} else
{if((state_val_30855 === (11)))
{var inst_30834 = (state_30854[(8)]);var inst_30843 = (state_30854[(2)]);var inst_30831 = inst_30834;var state_30854__$1 = (function (){var statearr_30864 = state_30854;(statearr_30864[(7)] = inst_30831);
(statearr_30864[(10)] = inst_30843);
return statearr_30864;
})();var statearr_30865_30885 = state_30854__$1;(statearr_30865_30885[(2)] = null);
(statearr_30865_30885[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30855 === (9)))
{var inst_30834 = (state_30854[(8)]);var state_30854__$1 = state_30854;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30854__$1,(11),out,inst_30834);
} else
{if((state_val_30855 === (5)))
{var inst_30834 = (state_30854[(8)]);var inst_30831 = (state_30854[(7)]);var inst_30838 = cljs.core._EQ_.call(null,inst_30834,inst_30831);var state_30854__$1 = state_30854;if(inst_30838)
{var statearr_30867_30886 = state_30854__$1;(statearr_30867_30886[(1)] = (8));
} else
{var statearr_30868_30887 = state_30854__$1;(statearr_30868_30887[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30855 === (10)))
{var inst_30846 = (state_30854[(2)]);var state_30854__$1 = state_30854;var statearr_30869_30888 = state_30854__$1;(statearr_30869_30888[(2)] = inst_30846);
(statearr_30869_30888[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30855 === (8)))
{var inst_30831 = (state_30854[(7)]);var tmp30866 = inst_30831;var inst_30831__$1 = tmp30866;var state_30854__$1 = (function (){var statearr_30870 = state_30854;(statearr_30870[(7)] = inst_30831__$1);
return statearr_30870;
})();var statearr_30871_30889 = state_30854__$1;(statearr_30871_30889[(2)] = null);
(statearr_30871_30889[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___30879,out))
;return ((function (switch__6187__auto__,c__6202__auto___30879,out){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_30875 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_30875[(0)] = state_machine__6188__auto__);
(statearr_30875[(1)] = (1));
return statearr_30875;
});
var state_machine__6188__auto____1 = (function (state_30854){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30854);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e30876){if((e30876 instanceof Object))
{var ex__6191__auto__ = e30876;var statearr_30877_30890 = state_30854;(statearr_30877_30890[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30854);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30876;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30891 = state_30854;
state_30854 = G__30891;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30854){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___30879,out))
})();var state__6204__auto__ = (function (){var statearr_30878 = f__6203__auto__.call(null);(statearr_30878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___30879);
return statearr_30878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___30879,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6202__auto___31026 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___31026,out){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___31026,out){
return (function (state_30996){var state_val_30997 = (state_30996[(1)]);if((state_val_30997 === (7)))
{var inst_30992 = (state_30996[(2)]);var state_30996__$1 = state_30996;var statearr_30998_31027 = state_30996__$1;(statearr_30998_31027[(2)] = inst_30992);
(statearr_30998_31027[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30997 === (1)))
{var inst_30959 = (new Array(n));var inst_30960 = inst_30959;var inst_30961 = (0);var state_30996__$1 = (function (){var statearr_30999 = state_30996;(statearr_30999[(7)] = inst_30960);
(statearr_30999[(8)] = inst_30961);
return statearr_30999;
})();var statearr_31000_31028 = state_30996__$1;(statearr_31000_31028[(2)] = null);
(statearr_31000_31028[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30997 === (4)))
{var inst_30964 = (state_30996[(9)]);var inst_30964__$1 = (state_30996[(2)]);var inst_30965 = (inst_30964__$1 == null);var inst_30966 = cljs.core.not.call(null,inst_30965);var state_30996__$1 = (function (){var statearr_31001 = state_30996;(statearr_31001[(9)] = inst_30964__$1);
return statearr_31001;
})();if(inst_30966)
{var statearr_31002_31029 = state_30996__$1;(statearr_31002_31029[(1)] = (5));
} else
{var statearr_31003_31030 = state_30996__$1;(statearr_31003_31030[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30997 === (15)))
{var inst_30986 = (state_30996[(2)]);var state_30996__$1 = state_30996;var statearr_31004_31031 = state_30996__$1;(statearr_31004_31031[(2)] = inst_30986);
(statearr_31004_31031[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30997 === (13)))
{var state_30996__$1 = state_30996;var statearr_31005_31032 = state_30996__$1;(statearr_31005_31032[(2)] = null);
(statearr_31005_31032[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30997 === (6)))
{var inst_30961 = (state_30996[(8)]);var inst_30982 = (inst_30961 > (0));var state_30996__$1 = state_30996;if(cljs.core.truth_(inst_30982))
{var statearr_31006_31033 = state_30996__$1;(statearr_31006_31033[(1)] = (12));
} else
{var statearr_31007_31034 = state_30996__$1;(statearr_31007_31034[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30997 === (3)))
{var inst_30994 = (state_30996[(2)]);var state_30996__$1 = state_30996;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30996__$1,inst_30994);
} else
{if((state_val_30997 === (12)))
{var inst_30960 = (state_30996[(7)]);var inst_30984 = cljs.core.vec.call(null,inst_30960);var state_30996__$1 = state_30996;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30996__$1,(15),out,inst_30984);
} else
{if((state_val_30997 === (2)))
{var state_30996__$1 = state_30996;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30996__$1,(4),ch);
} else
{if((state_val_30997 === (11)))
{var inst_30976 = (state_30996[(2)]);var inst_30977 = (new Array(n));var inst_30960 = inst_30977;var inst_30961 = (0);var state_30996__$1 = (function (){var statearr_31008 = state_30996;(statearr_31008[(10)] = inst_30976);
(statearr_31008[(7)] = inst_30960);
(statearr_31008[(8)] = inst_30961);
return statearr_31008;
})();var statearr_31009_31035 = state_30996__$1;(statearr_31009_31035[(2)] = null);
(statearr_31009_31035[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30997 === (9)))
{var inst_30960 = (state_30996[(7)]);var inst_30974 = cljs.core.vec.call(null,inst_30960);var state_30996__$1 = state_30996;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30996__$1,(11),out,inst_30974);
} else
{if((state_val_30997 === (5)))
{var inst_30964 = (state_30996[(9)]);var inst_30969 = (state_30996[(11)]);var inst_30960 = (state_30996[(7)]);var inst_30961 = (state_30996[(8)]);var inst_30968 = (inst_30960[inst_30961] = inst_30964);var inst_30969__$1 = (inst_30961 + (1));var inst_30970 = (inst_30969__$1 < n);var state_30996__$1 = (function (){var statearr_31010 = state_30996;(statearr_31010[(12)] = inst_30968);
(statearr_31010[(11)] = inst_30969__$1);
return statearr_31010;
})();if(cljs.core.truth_(inst_30970))
{var statearr_31011_31036 = state_30996__$1;(statearr_31011_31036[(1)] = (8));
} else
{var statearr_31012_31037 = state_30996__$1;(statearr_31012_31037[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30997 === (14)))
{var inst_30989 = (state_30996[(2)]);var inst_30990 = cljs.core.async.close_BANG_.call(null,out);var state_30996__$1 = (function (){var statearr_31014 = state_30996;(statearr_31014[(13)] = inst_30989);
return statearr_31014;
})();var statearr_31015_31038 = state_30996__$1;(statearr_31015_31038[(2)] = inst_30990);
(statearr_31015_31038[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30997 === (10)))
{var inst_30980 = (state_30996[(2)]);var state_30996__$1 = state_30996;var statearr_31016_31039 = state_30996__$1;(statearr_31016_31039[(2)] = inst_30980);
(statearr_31016_31039[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30997 === (8)))
{var inst_30969 = (state_30996[(11)]);var inst_30960 = (state_30996[(7)]);var tmp31013 = inst_30960;var inst_30960__$1 = tmp31013;var inst_30961 = inst_30969;var state_30996__$1 = (function (){var statearr_31017 = state_30996;(statearr_31017[(7)] = inst_30960__$1);
(statearr_31017[(8)] = inst_30961);
return statearr_31017;
})();var statearr_31018_31040 = state_30996__$1;(statearr_31018_31040[(2)] = null);
(statearr_31018_31040[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___31026,out))
;return ((function (switch__6187__auto__,c__6202__auto___31026,out){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_31022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31022[(0)] = state_machine__6188__auto__);
(statearr_31022[(1)] = (1));
return statearr_31022;
});
var state_machine__6188__auto____1 = (function (state_30996){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_30996);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e31023){if((e31023 instanceof Object))
{var ex__6191__auto__ = e31023;var statearr_31024_31041 = state_30996;(statearr_31024_31041[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30996);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31042 = state_30996;
state_30996 = G__31042;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_30996){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_30996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___31026,out))
})();var state__6204__auto__ = (function (){var statearr_31025 = f__6203__auto__.call(null);(statearr_31025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___31026);
return statearr_31025;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___31026,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6202__auto___31185 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___31185,out){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___31185,out){
return (function (state_31155){var state_val_31156 = (state_31155[(1)]);if((state_val_31156 === (7)))
{var inst_31151 = (state_31155[(2)]);var state_31155__$1 = state_31155;var statearr_31157_31186 = state_31155__$1;(statearr_31157_31186[(2)] = inst_31151);
(statearr_31157_31186[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31156 === (1)))
{var inst_31114 = [];var inst_31115 = inst_31114;var inst_31116 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_31155__$1 = (function (){var statearr_31158 = state_31155;(statearr_31158[(7)] = inst_31115);
(statearr_31158[(8)] = inst_31116);
return statearr_31158;
})();var statearr_31159_31187 = state_31155__$1;(statearr_31159_31187[(2)] = null);
(statearr_31159_31187[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31156 === (4)))
{var inst_31119 = (state_31155[(9)]);var inst_31119__$1 = (state_31155[(2)]);var inst_31120 = (inst_31119__$1 == null);var inst_31121 = cljs.core.not.call(null,inst_31120);var state_31155__$1 = (function (){var statearr_31160 = state_31155;(statearr_31160[(9)] = inst_31119__$1);
return statearr_31160;
})();if(inst_31121)
{var statearr_31161_31188 = state_31155__$1;(statearr_31161_31188[(1)] = (5));
} else
{var statearr_31162_31189 = state_31155__$1;(statearr_31162_31189[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31156 === (15)))
{var inst_31145 = (state_31155[(2)]);var state_31155__$1 = state_31155;var statearr_31163_31190 = state_31155__$1;(statearr_31163_31190[(2)] = inst_31145);
(statearr_31163_31190[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31156 === (13)))
{var state_31155__$1 = state_31155;var statearr_31164_31191 = state_31155__$1;(statearr_31164_31191[(2)] = null);
(statearr_31164_31191[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31156 === (6)))
{var inst_31115 = (state_31155[(7)]);var inst_31140 = inst_31115.length;var inst_31141 = (inst_31140 > (0));var state_31155__$1 = state_31155;if(cljs.core.truth_(inst_31141))
{var statearr_31165_31192 = state_31155__$1;(statearr_31165_31192[(1)] = (12));
} else
{var statearr_31166_31193 = state_31155__$1;(statearr_31166_31193[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31156 === (3)))
{var inst_31153 = (state_31155[(2)]);var state_31155__$1 = state_31155;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31155__$1,inst_31153);
} else
{if((state_val_31156 === (12)))
{var inst_31115 = (state_31155[(7)]);var inst_31143 = cljs.core.vec.call(null,inst_31115);var state_31155__$1 = state_31155;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31155__$1,(15),out,inst_31143);
} else
{if((state_val_31156 === (2)))
{var state_31155__$1 = state_31155;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31155__$1,(4),ch);
} else
{if((state_val_31156 === (11)))
{var inst_31123 = (state_31155[(10)]);var inst_31119 = (state_31155[(9)]);var inst_31133 = (state_31155[(2)]);var inst_31134 = [];var inst_31135 = inst_31134.push(inst_31119);var inst_31115 = inst_31134;var inst_31116 = inst_31123;var state_31155__$1 = (function (){var statearr_31167 = state_31155;(statearr_31167[(7)] = inst_31115);
(statearr_31167[(11)] = inst_31133);
(statearr_31167[(12)] = inst_31135);
(statearr_31167[(8)] = inst_31116);
return statearr_31167;
})();var statearr_31168_31194 = state_31155__$1;(statearr_31168_31194[(2)] = null);
(statearr_31168_31194[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31156 === (9)))
{var inst_31115 = (state_31155[(7)]);var inst_31131 = cljs.core.vec.call(null,inst_31115);var state_31155__$1 = state_31155;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31155__$1,(11),out,inst_31131);
} else
{if((state_val_31156 === (5)))
{var inst_31123 = (state_31155[(10)]);var inst_31119 = (state_31155[(9)]);var inst_31116 = (state_31155[(8)]);var inst_31123__$1 = f.call(null,inst_31119);var inst_31124 = cljs.core._EQ_.call(null,inst_31123__$1,inst_31116);var inst_31125 = cljs.core.keyword_identical_QMARK_.call(null,inst_31116,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_31126 = (inst_31124) || (inst_31125);var state_31155__$1 = (function (){var statearr_31169 = state_31155;(statearr_31169[(10)] = inst_31123__$1);
return statearr_31169;
})();if(cljs.core.truth_(inst_31126))
{var statearr_31170_31195 = state_31155__$1;(statearr_31170_31195[(1)] = (8));
} else
{var statearr_31171_31196 = state_31155__$1;(statearr_31171_31196[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31156 === (14)))
{var inst_31148 = (state_31155[(2)]);var inst_31149 = cljs.core.async.close_BANG_.call(null,out);var state_31155__$1 = (function (){var statearr_31173 = state_31155;(statearr_31173[(13)] = inst_31148);
return statearr_31173;
})();var statearr_31174_31197 = state_31155__$1;(statearr_31174_31197[(2)] = inst_31149);
(statearr_31174_31197[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31156 === (10)))
{var inst_31138 = (state_31155[(2)]);var state_31155__$1 = state_31155;var statearr_31175_31198 = state_31155__$1;(statearr_31175_31198[(2)] = inst_31138);
(statearr_31175_31198[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31156 === (8)))
{var inst_31115 = (state_31155[(7)]);var inst_31123 = (state_31155[(10)]);var inst_31119 = (state_31155[(9)]);var inst_31128 = inst_31115.push(inst_31119);var tmp31172 = inst_31115;var inst_31115__$1 = tmp31172;var inst_31116 = inst_31123;var state_31155__$1 = (function (){var statearr_31176 = state_31155;(statearr_31176[(7)] = inst_31115__$1);
(statearr_31176[(14)] = inst_31128);
(statearr_31176[(8)] = inst_31116);
return statearr_31176;
})();var statearr_31177_31199 = state_31155__$1;(statearr_31177_31199[(2)] = null);
(statearr_31177_31199[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___31185,out))
;return ((function (switch__6187__auto__,c__6202__auto___31185,out){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_31181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31181[(0)] = state_machine__6188__auto__);
(statearr_31181[(1)] = (1));
return statearr_31181;
});
var state_machine__6188__auto____1 = (function (state_31155){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_31155);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e31182){if((e31182 instanceof Object))
{var ex__6191__auto__ = e31182;var statearr_31183_31200 = state_31155;(statearr_31183_31200[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31155);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31182;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31201 = state_31155;
state_31155 = G__31201;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_31155){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_31155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___31185,out))
})();var state__6204__auto__ = (function (){var statearr_31184 = f__6203__auto__.call(null);(statearr_31184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___31185);
return statearr_31184;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___31185,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
