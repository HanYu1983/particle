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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t19034 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19034 = (function (f,fn_handler,meta19035){
this.f = f;
this.fn_handler = fn_handler;
this.meta19035 = meta19035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19034.cljs$lang$type = true;
cljs.core.async.t19034.cljs$lang$ctorStr = "cljs.core.async/t19034";
cljs.core.async.t19034.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t19034");
});
cljs.core.async.t19034.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t19034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t19034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19036){var self__ = this;
var _19036__$1 = this;return self__.meta19035;
});
cljs.core.async.t19034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19036,meta19035__$1){var self__ = this;
var _19036__$1 = this;return (new cljs.core.async.t19034(self__.f,self__.fn_handler,meta19035__$1));
});
cljs.core.async.__GT_t19034 = (function __GT_t19034(f__$1,fn_handler__$1,meta19035){return (new cljs.core.async.t19034(f__$1,fn_handler__$1,meta19035));
});
}
return (new cljs.core.async.t19034(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__19038 = buff;if(G__19038)
{var bit__4201__auto__ = null;if(cljs.core.truth_((function (){var or__3551__auto__ = bit__4201__auto__;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return G__19038.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__19038.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19038);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19038);
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
{var val_19039 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_19039);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_19039,ret){
return (function (){return fn1.call(null,val_19039);
});})(val_19039,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4407__auto___19040 = n;var x_19041 = (0);while(true){
if((x_19041 < n__4407__auto___19040))
{(a[x_19041] = (0));
{
var G__19042 = (x_19041 + (1));
x_19041 = G__19042;
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
var G__19043 = (i + (1));
i = G__19043;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t19047 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19047 = (function (flag,alt_flag,meta19048){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19048 = meta19048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19047.cljs$lang$type = true;
cljs.core.async.t19047.cljs$lang$ctorStr = "cljs.core.async/t19047";
cljs.core.async.t19047.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t19047");
});})(flag))
;
cljs.core.async.t19047.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t19047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t19047.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19049){var self__ = this;
var _19049__$1 = this;return self__.meta19048;
});})(flag))
;
cljs.core.async.t19047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19049,meta19048__$1){var self__ = this;
var _19049__$1 = this;return (new cljs.core.async.t19047(self__.flag,self__.alt_flag,meta19048__$1));
});})(flag))
;
cljs.core.async.__GT_t19047 = ((function (flag){
return (function __GT_t19047(flag__$1,alt_flag__$1,meta19048){return (new cljs.core.async.t19047(flag__$1,alt_flag__$1,meta19048));
});})(flag))
;
}
return (new cljs.core.async.t19047(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t19053 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19053 = (function (cb,flag,alt_handler,meta19054){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19054 = meta19054;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19053.cljs$lang$type = true;
cljs.core.async.t19053.cljs$lang$ctorStr = "cljs.core.async/t19053";
cljs.core.async.t19053.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t19053");
});
cljs.core.async.t19053.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19053.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t19053.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t19053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19055){var self__ = this;
var _19055__$1 = this;return self__.meta19054;
});
cljs.core.async.t19053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19055,meta19054__$1){var self__ = this;
var _19055__$1 = this;return (new cljs.core.async.t19053(self__.cb,self__.flag,self__.alt_handler,meta19054__$1));
});
cljs.core.async.__GT_t19053 = (function __GT_t19053(cb__$1,flag__$1,alt_handler__$1,meta19054){return (new cljs.core.async.t19053(cb__$1,flag__$1,alt_handler__$1,meta19054));
});
}
return (new cljs.core.async.t19053(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19056_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19056_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19057_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19057_SHARP_,port], null));
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
var G__19058 = (i + (1));
i = G__19058;
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
var alts_BANG___delegate = function (ports,p__19059){var map__19061 = p__19059;var map__19061__$1 = ((cljs.core.seq_QMARK_.call(null,map__19061))?cljs.core.apply.call(null,cljs.core.hash_map,map__19061):map__19061);var opts = map__19061__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__19059 = null;if (arguments.length > 1) {
  p__19059 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__19059);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19062){
var ports = cljs.core.first(arglist__19062);
var p__19059 = cljs.core.rest(arglist__19062);
return alts_BANG___delegate(ports,p__19059);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6203__auto___19157 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___19157){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___19157){
return (function (state_19133){var state_val_19134 = (state_19133[(1)]);if((state_val_19134 === (7)))
{var inst_19129 = (state_19133[(2)]);var state_19133__$1 = state_19133;var statearr_19135_19158 = state_19133__$1;(statearr_19135_19158[(2)] = inst_19129);
(statearr_19135_19158[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19134 === (1)))
{var state_19133__$1 = state_19133;var statearr_19136_19159 = state_19133__$1;(statearr_19136_19159[(2)] = null);
(statearr_19136_19159[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19134 === (4)))
{var inst_19112 = (state_19133[(7)]);var inst_19112__$1 = (state_19133[(2)]);var inst_19113 = (inst_19112__$1 == null);var state_19133__$1 = (function (){var statearr_19137 = state_19133;(statearr_19137[(7)] = inst_19112__$1);
return statearr_19137;
})();if(cljs.core.truth_(inst_19113))
{var statearr_19138_19160 = state_19133__$1;(statearr_19138_19160[(1)] = (5));
} else
{var statearr_19139_19161 = state_19133__$1;(statearr_19139_19161[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19134 === (13)))
{var state_19133__$1 = state_19133;var statearr_19140_19162 = state_19133__$1;(statearr_19140_19162[(2)] = null);
(statearr_19140_19162[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19134 === (6)))
{var inst_19112 = (state_19133[(7)]);var state_19133__$1 = state_19133;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19133__$1,(11),to,inst_19112);
} else
{if((state_val_19134 === (3)))
{var inst_19131 = (state_19133[(2)]);var state_19133__$1 = state_19133;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19133__$1,inst_19131);
} else
{if((state_val_19134 === (12)))
{var state_19133__$1 = state_19133;var statearr_19141_19163 = state_19133__$1;(statearr_19141_19163[(2)] = null);
(statearr_19141_19163[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19134 === (2)))
{var state_19133__$1 = state_19133;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19133__$1,(4),from);
} else
{if((state_val_19134 === (11)))
{var inst_19122 = (state_19133[(2)]);var state_19133__$1 = state_19133;if(cljs.core.truth_(inst_19122))
{var statearr_19142_19164 = state_19133__$1;(statearr_19142_19164[(1)] = (12));
} else
{var statearr_19143_19165 = state_19133__$1;(statearr_19143_19165[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19134 === (9)))
{var state_19133__$1 = state_19133;var statearr_19144_19166 = state_19133__$1;(statearr_19144_19166[(2)] = null);
(statearr_19144_19166[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19134 === (5)))
{var state_19133__$1 = state_19133;if(cljs.core.truth_(close_QMARK_))
{var statearr_19145_19167 = state_19133__$1;(statearr_19145_19167[(1)] = (8));
} else
{var statearr_19146_19168 = state_19133__$1;(statearr_19146_19168[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19134 === (14)))
{var inst_19127 = (state_19133[(2)]);var state_19133__$1 = state_19133;var statearr_19147_19169 = state_19133__$1;(statearr_19147_19169[(2)] = inst_19127);
(statearr_19147_19169[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19134 === (10)))
{var inst_19119 = (state_19133[(2)]);var state_19133__$1 = state_19133;var statearr_19148_19170 = state_19133__$1;(statearr_19148_19170[(2)] = inst_19119);
(statearr_19148_19170[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19134 === (8)))
{var inst_19116 = cljs.core.async.close_BANG_.call(null,to);var state_19133__$1 = state_19133;var statearr_19149_19171 = state_19133__$1;(statearr_19149_19171[(2)] = inst_19116);
(statearr_19149_19171[(1)] = (10));
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
});})(c__6203__auto___19157))
;return ((function (switch__6188__auto__,c__6203__auto___19157){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19153 = [null,null,null,null,null,null,null,null];(statearr_19153[(0)] = state_machine__6189__auto__);
(statearr_19153[(1)] = (1));
return statearr_19153;
});
var state_machine__6189__auto____1 = (function (state_19133){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19133);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19154){if((e19154 instanceof Object))
{var ex__6192__auto__ = e19154;var statearr_19155_19172 = state_19133;(statearr_19155_19172[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19133);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19173 = state_19133;
state_19133 = G__19173;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19133){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___19157))
})();var state__6205__auto__ = (function (){var statearr_19156 = f__6204__auto__.call(null);(statearr_19156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___19157);
return statearr_19156;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___19157))
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
return (function (p__19356){var vec__19357 = p__19356;var v = cljs.core.nth.call(null,vec__19357,(0),null);var p = cljs.core.nth.call(null,vec__19357,(1),null);var job = vec__19357;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6203__auto___19538 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___19538,res,vec__19357,v,p,job,jobs,results){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___19538,res,vec__19357,v,p,job,jobs,results){
return (function (state_19362){var state_val_19363 = (state_19362[(1)]);if((state_val_19363 === (2)))
{var inst_19359 = (state_19362[(2)]);var inst_19360 = cljs.core.async.close_BANG_.call(null,res);var state_19362__$1 = (function (){var statearr_19364 = state_19362;(statearr_19364[(7)] = inst_19359);
return statearr_19364;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19362__$1,inst_19360);
} else
{if((state_val_19363 === (1)))
{var state_19362__$1 = state_19362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19362__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6203__auto___19538,res,vec__19357,v,p,job,jobs,results))
;return ((function (switch__6188__auto__,c__6203__auto___19538,res,vec__19357,v,p,job,jobs,results){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19368 = [null,null,null,null,null,null,null,null];(statearr_19368[(0)] = state_machine__6189__auto__);
(statearr_19368[(1)] = (1));
return statearr_19368;
});
var state_machine__6189__auto____1 = (function (state_19362){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19362);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19369){if((e19369 instanceof Object))
{var ex__6192__auto__ = e19369;var statearr_19370_19539 = state_19362;(statearr_19370_19539[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19362);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19369;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19540 = state_19362;
state_19362 = G__19540;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19362){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___19538,res,vec__19357,v,p,job,jobs,results))
})();var state__6205__auto__ = (function (){var statearr_19371 = f__6204__auto__.call(null);(statearr_19371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___19538);
return statearr_19371;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___19538,res,vec__19357,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__19372){var vec__19373 = p__19372;var v = cljs.core.nth.call(null,vec__19373,(0),null);var p = cljs.core.nth.call(null,vec__19373,(1),null);var job = vec__19373;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4407__auto___19541 = n;var __19542 = (0);while(true){
if((__19542 < n__4407__auto___19541))
{var G__19374_19543 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__19374_19543) {
case "async":
var c__6203__auto___19545 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__19542,c__6203__auto___19545,G__19374_19543,n__4407__auto___19541,jobs,results,process,async){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (__19542,c__6203__auto___19545,G__19374_19543,n__4407__auto___19541,jobs,results,process,async){
return (function (state_19387){var state_val_19388 = (state_19387[(1)]);if((state_val_19388 === (7)))
{var inst_19383 = (state_19387[(2)]);var state_19387__$1 = state_19387;var statearr_19389_19546 = state_19387__$1;(statearr_19389_19546[(2)] = inst_19383);
(statearr_19389_19546[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19388 === (6)))
{var state_19387__$1 = state_19387;var statearr_19390_19547 = state_19387__$1;(statearr_19390_19547[(2)] = null);
(statearr_19390_19547[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19388 === (5)))
{var state_19387__$1 = state_19387;var statearr_19391_19548 = state_19387__$1;(statearr_19391_19548[(2)] = null);
(statearr_19391_19548[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19388 === (4)))
{var inst_19377 = (state_19387[(2)]);var inst_19378 = async.call(null,inst_19377);var state_19387__$1 = state_19387;if(cljs.core.truth_(inst_19378))
{var statearr_19392_19549 = state_19387__$1;(statearr_19392_19549[(1)] = (5));
} else
{var statearr_19393_19550 = state_19387__$1;(statearr_19393_19550[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19388 === (3)))
{var inst_19385 = (state_19387[(2)]);var state_19387__$1 = state_19387;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19387__$1,inst_19385);
} else
{if((state_val_19388 === (2)))
{var state_19387__$1 = state_19387;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19387__$1,(4),jobs);
} else
{if((state_val_19388 === (1)))
{var state_19387__$1 = state_19387;var statearr_19394_19551 = state_19387__$1;(statearr_19394_19551[(2)] = null);
(statearr_19394_19551[(1)] = (2));
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
});})(__19542,c__6203__auto___19545,G__19374_19543,n__4407__auto___19541,jobs,results,process,async))
;return ((function (__19542,switch__6188__auto__,c__6203__auto___19545,G__19374_19543,n__4407__auto___19541,jobs,results,process,async){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19398 = [null,null,null,null,null,null,null];(statearr_19398[(0)] = state_machine__6189__auto__);
(statearr_19398[(1)] = (1));
return statearr_19398;
});
var state_machine__6189__auto____1 = (function (state_19387){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19387);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19399){if((e19399 instanceof Object))
{var ex__6192__auto__ = e19399;var statearr_19400_19552 = state_19387;(statearr_19400_19552[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19387);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19399;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19553 = state_19387;
state_19387 = G__19553;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19387){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(__19542,switch__6188__auto__,c__6203__auto___19545,G__19374_19543,n__4407__auto___19541,jobs,results,process,async))
})();var state__6205__auto__ = (function (){var statearr_19401 = f__6204__auto__.call(null);(statearr_19401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___19545);
return statearr_19401;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(__19542,c__6203__auto___19545,G__19374_19543,n__4407__auto___19541,jobs,results,process,async))
);

break;
case "compute":
var c__6203__auto___19554 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__19542,c__6203__auto___19554,G__19374_19543,n__4407__auto___19541,jobs,results,process,async){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (__19542,c__6203__auto___19554,G__19374_19543,n__4407__auto___19541,jobs,results,process,async){
return (function (state_19414){var state_val_19415 = (state_19414[(1)]);if((state_val_19415 === (7)))
{var inst_19410 = (state_19414[(2)]);var state_19414__$1 = state_19414;var statearr_19416_19555 = state_19414__$1;(statearr_19416_19555[(2)] = inst_19410);
(statearr_19416_19555[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19415 === (6)))
{var state_19414__$1 = state_19414;var statearr_19417_19556 = state_19414__$1;(statearr_19417_19556[(2)] = null);
(statearr_19417_19556[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19415 === (5)))
{var state_19414__$1 = state_19414;var statearr_19418_19557 = state_19414__$1;(statearr_19418_19557[(2)] = null);
(statearr_19418_19557[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19415 === (4)))
{var inst_19404 = (state_19414[(2)]);var inst_19405 = process.call(null,inst_19404);var state_19414__$1 = state_19414;if(cljs.core.truth_(inst_19405))
{var statearr_19419_19558 = state_19414__$1;(statearr_19419_19558[(1)] = (5));
} else
{var statearr_19420_19559 = state_19414__$1;(statearr_19420_19559[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19415 === (3)))
{var inst_19412 = (state_19414[(2)]);var state_19414__$1 = state_19414;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19414__$1,inst_19412);
} else
{if((state_val_19415 === (2)))
{var state_19414__$1 = state_19414;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19414__$1,(4),jobs);
} else
{if((state_val_19415 === (1)))
{var state_19414__$1 = state_19414;var statearr_19421_19560 = state_19414__$1;(statearr_19421_19560[(2)] = null);
(statearr_19421_19560[(1)] = (2));
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
});})(__19542,c__6203__auto___19554,G__19374_19543,n__4407__auto___19541,jobs,results,process,async))
;return ((function (__19542,switch__6188__auto__,c__6203__auto___19554,G__19374_19543,n__4407__auto___19541,jobs,results,process,async){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19425 = [null,null,null,null,null,null,null];(statearr_19425[(0)] = state_machine__6189__auto__);
(statearr_19425[(1)] = (1));
return statearr_19425;
});
var state_machine__6189__auto____1 = (function (state_19414){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19414);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19426){if((e19426 instanceof Object))
{var ex__6192__auto__ = e19426;var statearr_19427_19561 = state_19414;(statearr_19427_19561[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19414);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19426;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19562 = state_19414;
state_19414 = G__19562;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19414){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(__19542,switch__6188__auto__,c__6203__auto___19554,G__19374_19543,n__4407__auto___19541,jobs,results,process,async))
})();var state__6205__auto__ = (function (){var statearr_19428 = f__6204__auto__.call(null);(statearr_19428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___19554);
return statearr_19428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(__19542,c__6203__auto___19554,G__19374_19543,n__4407__auto___19541,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__19563 = (__19542 + (1));
__19542 = G__19563;
continue;
}
} else
{}
break;
}
var c__6203__auto___19564 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___19564,jobs,results,process,async){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___19564,jobs,results,process,async){
return (function (state_19449){var state_val_19450 = (state_19449[(1)]);if((state_val_19450 === (9)))
{var inst_19442 = (state_19449[(2)]);var state_19449__$1 = (function (){var statearr_19451 = state_19449;(statearr_19451[(7)] = inst_19442);
return statearr_19451;
})();var statearr_19452_19565 = state_19449__$1;(statearr_19452_19565[(2)] = null);
(statearr_19452_19565[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19450 === (8)))
{var inst_19436 = (state_19449[(8)]);var inst_19440 = (state_19449[(2)]);var state_19449__$1 = (function (){var statearr_19453 = state_19449;(statearr_19453[(9)] = inst_19440);
return statearr_19453;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19449__$1,(9),results,inst_19436);
} else
{if((state_val_19450 === (7)))
{var inst_19445 = (state_19449[(2)]);var state_19449__$1 = state_19449;var statearr_19454_19566 = state_19449__$1;(statearr_19454_19566[(2)] = inst_19445);
(statearr_19454_19566[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19450 === (6)))
{var inst_19436 = (state_19449[(8)]);var inst_19431 = (state_19449[(10)]);var inst_19436__$1 = cljs.core.async.chan.call(null,(1));var inst_19437 = [inst_19431,inst_19436__$1];var inst_19438 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_19437,null));var state_19449__$1 = (function (){var statearr_19455 = state_19449;(statearr_19455[(8)] = inst_19436__$1);
return statearr_19455;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19449__$1,(8),jobs,inst_19438);
} else
{if((state_val_19450 === (5)))
{var inst_19434 = cljs.core.async.close_BANG_.call(null,jobs);var state_19449__$1 = state_19449;var statearr_19456_19567 = state_19449__$1;(statearr_19456_19567[(2)] = inst_19434);
(statearr_19456_19567[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19450 === (4)))
{var inst_19431 = (state_19449[(10)]);var inst_19431__$1 = (state_19449[(2)]);var inst_19432 = (inst_19431__$1 == null);var state_19449__$1 = (function (){var statearr_19457 = state_19449;(statearr_19457[(10)] = inst_19431__$1);
return statearr_19457;
})();if(cljs.core.truth_(inst_19432))
{var statearr_19458_19568 = state_19449__$1;(statearr_19458_19568[(1)] = (5));
} else
{var statearr_19459_19569 = state_19449__$1;(statearr_19459_19569[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19450 === (3)))
{var inst_19447 = (state_19449[(2)]);var state_19449__$1 = state_19449;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19449__$1,inst_19447);
} else
{if((state_val_19450 === (2)))
{var state_19449__$1 = state_19449;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19449__$1,(4),from);
} else
{if((state_val_19450 === (1)))
{var state_19449__$1 = state_19449;var statearr_19460_19570 = state_19449__$1;(statearr_19460_19570[(2)] = null);
(statearr_19460_19570[(1)] = (2));
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
});})(c__6203__auto___19564,jobs,results,process,async))
;return ((function (switch__6188__auto__,c__6203__auto___19564,jobs,results,process,async){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19464 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19464[(0)] = state_machine__6189__auto__);
(statearr_19464[(1)] = (1));
return statearr_19464;
});
var state_machine__6189__auto____1 = (function (state_19449){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19449);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19465){if((e19465 instanceof Object))
{var ex__6192__auto__ = e19465;var statearr_19466_19571 = state_19449;(statearr_19466_19571[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19449);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19465;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19572 = state_19449;
state_19449 = G__19572;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19449){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___19564,jobs,results,process,async))
})();var state__6205__auto__ = (function (){var statearr_19467 = f__6204__auto__.call(null);(statearr_19467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___19564);
return statearr_19467;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___19564,jobs,results,process,async))
);
var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,jobs,results,process,async){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,jobs,results,process,async){
return (function (state_19505){var state_val_19506 = (state_19505[(1)]);if((state_val_19506 === (7)))
{var inst_19501 = (state_19505[(2)]);var state_19505__$1 = state_19505;var statearr_19507_19573 = state_19505__$1;(statearr_19507_19573[(2)] = inst_19501);
(statearr_19507_19573[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19506 === (20)))
{var state_19505__$1 = state_19505;var statearr_19508_19574 = state_19505__$1;(statearr_19508_19574[(2)] = null);
(statearr_19508_19574[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19506 === (1)))
{var state_19505__$1 = state_19505;var statearr_19509_19575 = state_19505__$1;(statearr_19509_19575[(2)] = null);
(statearr_19509_19575[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19506 === (4)))
{var inst_19470 = (state_19505[(7)]);var inst_19470__$1 = (state_19505[(2)]);var inst_19471 = (inst_19470__$1 == null);var state_19505__$1 = (function (){var statearr_19510 = state_19505;(statearr_19510[(7)] = inst_19470__$1);
return statearr_19510;
})();if(cljs.core.truth_(inst_19471))
{var statearr_19511_19576 = state_19505__$1;(statearr_19511_19576[(1)] = (5));
} else
{var statearr_19512_19577 = state_19505__$1;(statearr_19512_19577[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19506 === (15)))
{var inst_19483 = (state_19505[(8)]);var state_19505__$1 = state_19505;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19505__$1,(18),to,inst_19483);
} else
{if((state_val_19506 === (21)))
{var inst_19496 = (state_19505[(2)]);var state_19505__$1 = state_19505;var statearr_19513_19578 = state_19505__$1;(statearr_19513_19578[(2)] = inst_19496);
(statearr_19513_19578[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19506 === (13)))
{var inst_19498 = (state_19505[(2)]);var state_19505__$1 = (function (){var statearr_19514 = state_19505;(statearr_19514[(9)] = inst_19498);
return statearr_19514;
})();var statearr_19515_19579 = state_19505__$1;(statearr_19515_19579[(2)] = null);
(statearr_19515_19579[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19506 === (6)))
{var inst_19470 = (state_19505[(7)]);var state_19505__$1 = state_19505;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19505__$1,(11),inst_19470);
} else
{if((state_val_19506 === (17)))
{var inst_19491 = (state_19505[(2)]);var state_19505__$1 = state_19505;if(cljs.core.truth_(inst_19491))
{var statearr_19516_19580 = state_19505__$1;(statearr_19516_19580[(1)] = (19));
} else
{var statearr_19517_19581 = state_19505__$1;(statearr_19517_19581[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19506 === (3)))
{var inst_19503 = (state_19505[(2)]);var state_19505__$1 = state_19505;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19505__$1,inst_19503);
} else
{if((state_val_19506 === (12)))
{var inst_19480 = (state_19505[(10)]);var state_19505__$1 = state_19505;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19505__$1,(14),inst_19480);
} else
{if((state_val_19506 === (2)))
{var state_19505__$1 = state_19505;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19505__$1,(4),results);
} else
{if((state_val_19506 === (19)))
{var state_19505__$1 = state_19505;var statearr_19518_19582 = state_19505__$1;(statearr_19518_19582[(2)] = null);
(statearr_19518_19582[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19506 === (11)))
{var inst_19480 = (state_19505[(2)]);var state_19505__$1 = (function (){var statearr_19519 = state_19505;(statearr_19519[(10)] = inst_19480);
return statearr_19519;
})();var statearr_19520_19583 = state_19505__$1;(statearr_19520_19583[(2)] = null);
(statearr_19520_19583[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19506 === (9)))
{var state_19505__$1 = state_19505;var statearr_19521_19584 = state_19505__$1;(statearr_19521_19584[(2)] = null);
(statearr_19521_19584[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19506 === (5)))
{var state_19505__$1 = state_19505;if(cljs.core.truth_(close_QMARK_))
{var statearr_19522_19585 = state_19505__$1;(statearr_19522_19585[(1)] = (8));
} else
{var statearr_19523_19586 = state_19505__$1;(statearr_19523_19586[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19506 === (14)))
{var inst_19485 = (state_19505[(11)]);var inst_19483 = (state_19505[(8)]);var inst_19483__$1 = (state_19505[(2)]);var inst_19484 = (inst_19483__$1 == null);var inst_19485__$1 = cljs.core.not.call(null,inst_19484);var state_19505__$1 = (function (){var statearr_19524 = state_19505;(statearr_19524[(11)] = inst_19485__$1);
(statearr_19524[(8)] = inst_19483__$1);
return statearr_19524;
})();if(inst_19485__$1)
{var statearr_19525_19587 = state_19505__$1;(statearr_19525_19587[(1)] = (15));
} else
{var statearr_19526_19588 = state_19505__$1;(statearr_19526_19588[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19506 === (16)))
{var inst_19485 = (state_19505[(11)]);var state_19505__$1 = state_19505;var statearr_19527_19589 = state_19505__$1;(statearr_19527_19589[(2)] = inst_19485);
(statearr_19527_19589[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19506 === (10)))
{var inst_19477 = (state_19505[(2)]);var state_19505__$1 = state_19505;var statearr_19528_19590 = state_19505__$1;(statearr_19528_19590[(2)] = inst_19477);
(statearr_19528_19590[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19506 === (18)))
{var inst_19488 = (state_19505[(2)]);var state_19505__$1 = state_19505;var statearr_19529_19591 = state_19505__$1;(statearr_19529_19591[(2)] = inst_19488);
(statearr_19529_19591[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19506 === (8)))
{var inst_19474 = cljs.core.async.close_BANG_.call(null,to);var state_19505__$1 = state_19505;var statearr_19530_19592 = state_19505__$1;(statearr_19530_19592[(2)] = inst_19474);
(statearr_19530_19592[(1)] = (10));
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
});})(c__6203__auto__,jobs,results,process,async))
;return ((function (switch__6188__auto__,c__6203__auto__,jobs,results,process,async){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19534 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19534[(0)] = state_machine__6189__auto__);
(statearr_19534[(1)] = (1));
return statearr_19534;
});
var state_machine__6189__auto____1 = (function (state_19505){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19505);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19535){if((e19535 instanceof Object))
{var ex__6192__auto__ = e19535;var statearr_19536_19593 = state_19505;(statearr_19536_19593[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19505);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19535;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19594 = state_19505;
state_19505 = G__19594;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19505){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,jobs,results,process,async))
})();var state__6205__auto__ = (function (){var statearr_19537 = f__6204__auto__.call(null);(statearr_19537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_19537;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,jobs,results,process,async))
);
return c__6203__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6203__auto___19695 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___19695,tc,fc){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___19695,tc,fc){
return (function (state_19670){var state_val_19671 = (state_19670[(1)]);if((state_val_19671 === (7)))
{var inst_19666 = (state_19670[(2)]);var state_19670__$1 = state_19670;var statearr_19672_19696 = state_19670__$1;(statearr_19672_19696[(2)] = inst_19666);
(statearr_19672_19696[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19671 === (1)))
{var state_19670__$1 = state_19670;var statearr_19673_19697 = state_19670__$1;(statearr_19673_19697[(2)] = null);
(statearr_19673_19697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19671 === (4)))
{var inst_19647 = (state_19670[(7)]);var inst_19647__$1 = (state_19670[(2)]);var inst_19648 = (inst_19647__$1 == null);var state_19670__$1 = (function (){var statearr_19674 = state_19670;(statearr_19674[(7)] = inst_19647__$1);
return statearr_19674;
})();if(cljs.core.truth_(inst_19648))
{var statearr_19675_19698 = state_19670__$1;(statearr_19675_19698[(1)] = (5));
} else
{var statearr_19676_19699 = state_19670__$1;(statearr_19676_19699[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19671 === (13)))
{var state_19670__$1 = state_19670;var statearr_19677_19700 = state_19670__$1;(statearr_19677_19700[(2)] = null);
(statearr_19677_19700[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19671 === (6)))
{var inst_19647 = (state_19670[(7)]);var inst_19653 = p.call(null,inst_19647);var state_19670__$1 = state_19670;if(cljs.core.truth_(inst_19653))
{var statearr_19678_19701 = state_19670__$1;(statearr_19678_19701[(1)] = (9));
} else
{var statearr_19679_19702 = state_19670__$1;(statearr_19679_19702[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19671 === (3)))
{var inst_19668 = (state_19670[(2)]);var state_19670__$1 = state_19670;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19670__$1,inst_19668);
} else
{if((state_val_19671 === (12)))
{var state_19670__$1 = state_19670;var statearr_19680_19703 = state_19670__$1;(statearr_19680_19703[(2)] = null);
(statearr_19680_19703[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19671 === (2)))
{var state_19670__$1 = state_19670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19670__$1,(4),ch);
} else
{if((state_val_19671 === (11)))
{var inst_19647 = (state_19670[(7)]);var inst_19657 = (state_19670[(2)]);var state_19670__$1 = state_19670;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19670__$1,(8),inst_19657,inst_19647);
} else
{if((state_val_19671 === (9)))
{var state_19670__$1 = state_19670;var statearr_19681_19704 = state_19670__$1;(statearr_19681_19704[(2)] = tc);
(statearr_19681_19704[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19671 === (5)))
{var inst_19650 = cljs.core.async.close_BANG_.call(null,tc);var inst_19651 = cljs.core.async.close_BANG_.call(null,fc);var state_19670__$1 = (function (){var statearr_19682 = state_19670;(statearr_19682[(8)] = inst_19650);
return statearr_19682;
})();var statearr_19683_19705 = state_19670__$1;(statearr_19683_19705[(2)] = inst_19651);
(statearr_19683_19705[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19671 === (14)))
{var inst_19664 = (state_19670[(2)]);var state_19670__$1 = state_19670;var statearr_19684_19706 = state_19670__$1;(statearr_19684_19706[(2)] = inst_19664);
(statearr_19684_19706[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19671 === (10)))
{var state_19670__$1 = state_19670;var statearr_19685_19707 = state_19670__$1;(statearr_19685_19707[(2)] = fc);
(statearr_19685_19707[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19671 === (8)))
{var inst_19659 = (state_19670[(2)]);var state_19670__$1 = state_19670;if(cljs.core.truth_(inst_19659))
{var statearr_19686_19708 = state_19670__$1;(statearr_19686_19708[(1)] = (12));
} else
{var statearr_19687_19709 = state_19670__$1;(statearr_19687_19709[(1)] = (13));
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
});})(c__6203__auto___19695,tc,fc))
;return ((function (switch__6188__auto__,c__6203__auto___19695,tc,fc){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19691 = [null,null,null,null,null,null,null,null,null];(statearr_19691[(0)] = state_machine__6189__auto__);
(statearr_19691[(1)] = (1));
return statearr_19691;
});
var state_machine__6189__auto____1 = (function (state_19670){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19670);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19692){if((e19692 instanceof Object))
{var ex__6192__auto__ = e19692;var statearr_19693_19710 = state_19670;(statearr_19693_19710[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19670);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19692;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19711 = state_19670;
state_19670 = G__19711;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19670){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___19695,tc,fc))
})();var state__6205__auto__ = (function (){var statearr_19694 = f__6204__auto__.call(null);(statearr_19694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___19695);
return statearr_19694;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___19695,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_19758){var state_val_19759 = (state_19758[(1)]);if((state_val_19759 === (7)))
{var inst_19754 = (state_19758[(2)]);var state_19758__$1 = state_19758;var statearr_19760_19776 = state_19758__$1;(statearr_19760_19776[(2)] = inst_19754);
(statearr_19760_19776[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19759 === (6)))
{var inst_19744 = (state_19758[(7)]);var inst_19747 = (state_19758[(8)]);var inst_19751 = f.call(null,inst_19744,inst_19747);var inst_19744__$1 = inst_19751;var state_19758__$1 = (function (){var statearr_19761 = state_19758;(statearr_19761[(7)] = inst_19744__$1);
return statearr_19761;
})();var statearr_19762_19777 = state_19758__$1;(statearr_19762_19777[(2)] = null);
(statearr_19762_19777[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19759 === (5)))
{var inst_19744 = (state_19758[(7)]);var state_19758__$1 = state_19758;var statearr_19763_19778 = state_19758__$1;(statearr_19763_19778[(2)] = inst_19744);
(statearr_19763_19778[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19759 === (4)))
{var inst_19747 = (state_19758[(8)]);var inst_19747__$1 = (state_19758[(2)]);var inst_19748 = (inst_19747__$1 == null);var state_19758__$1 = (function (){var statearr_19764 = state_19758;(statearr_19764[(8)] = inst_19747__$1);
return statearr_19764;
})();if(cljs.core.truth_(inst_19748))
{var statearr_19765_19779 = state_19758__$1;(statearr_19765_19779[(1)] = (5));
} else
{var statearr_19766_19780 = state_19758__$1;(statearr_19766_19780[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19759 === (3)))
{var inst_19756 = (state_19758[(2)]);var state_19758__$1 = state_19758;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19758__$1,inst_19756);
} else
{if((state_val_19759 === (2)))
{var state_19758__$1 = state_19758;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19758__$1,(4),ch);
} else
{if((state_val_19759 === (1)))
{var inst_19744 = init;var state_19758__$1 = (function (){var statearr_19767 = state_19758;(statearr_19767[(7)] = inst_19744);
return statearr_19767;
})();var statearr_19768_19781 = state_19758__$1;(statearr_19768_19781[(2)] = null);
(statearr_19768_19781[(1)] = (2));
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
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19772 = [null,null,null,null,null,null,null,null,null];(statearr_19772[(0)] = state_machine__6189__auto__);
(statearr_19772[(1)] = (1));
return statearr_19772;
});
var state_machine__6189__auto____1 = (function (state_19758){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19758);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19773){if((e19773 instanceof Object))
{var ex__6192__auto__ = e19773;var statearr_19774_19782 = state_19758;(statearr_19774_19782[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19758);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19773;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19783 = state_19758;
state_19758 = G__19783;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19758){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_19775 = f__6204__auto__.call(null);(statearr_19775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_19775;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_19857){var state_val_19858 = (state_19857[(1)]);if((state_val_19858 === (7)))
{var inst_19839 = (state_19857[(2)]);var state_19857__$1 = state_19857;var statearr_19859_19882 = state_19857__$1;(statearr_19859_19882[(2)] = inst_19839);
(statearr_19859_19882[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19858 === (1)))
{var inst_19833 = cljs.core.seq.call(null,coll);var inst_19834 = inst_19833;var state_19857__$1 = (function (){var statearr_19860 = state_19857;(statearr_19860[(7)] = inst_19834);
return statearr_19860;
})();var statearr_19861_19883 = state_19857__$1;(statearr_19861_19883[(2)] = null);
(statearr_19861_19883[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19858 === (4)))
{var inst_19834 = (state_19857[(7)]);var inst_19837 = cljs.core.first.call(null,inst_19834);var state_19857__$1 = state_19857;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19857__$1,(7),ch,inst_19837);
} else
{if((state_val_19858 === (13)))
{var inst_19851 = (state_19857[(2)]);var state_19857__$1 = state_19857;var statearr_19862_19884 = state_19857__$1;(statearr_19862_19884[(2)] = inst_19851);
(statearr_19862_19884[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19858 === (6)))
{var inst_19842 = (state_19857[(2)]);var state_19857__$1 = state_19857;if(cljs.core.truth_(inst_19842))
{var statearr_19863_19885 = state_19857__$1;(statearr_19863_19885[(1)] = (8));
} else
{var statearr_19864_19886 = state_19857__$1;(statearr_19864_19886[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19858 === (3)))
{var inst_19855 = (state_19857[(2)]);var state_19857__$1 = state_19857;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19857__$1,inst_19855);
} else
{if((state_val_19858 === (12)))
{var state_19857__$1 = state_19857;var statearr_19865_19887 = state_19857__$1;(statearr_19865_19887[(2)] = null);
(statearr_19865_19887[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19858 === (2)))
{var inst_19834 = (state_19857[(7)]);var state_19857__$1 = state_19857;if(cljs.core.truth_(inst_19834))
{var statearr_19866_19888 = state_19857__$1;(statearr_19866_19888[(1)] = (4));
} else
{var statearr_19867_19889 = state_19857__$1;(statearr_19867_19889[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19858 === (11)))
{var inst_19848 = cljs.core.async.close_BANG_.call(null,ch);var state_19857__$1 = state_19857;var statearr_19868_19890 = state_19857__$1;(statearr_19868_19890[(2)] = inst_19848);
(statearr_19868_19890[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19858 === (9)))
{var state_19857__$1 = state_19857;if(cljs.core.truth_(close_QMARK_))
{var statearr_19869_19891 = state_19857__$1;(statearr_19869_19891[(1)] = (11));
} else
{var statearr_19870_19892 = state_19857__$1;(statearr_19870_19892[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19858 === (5)))
{var inst_19834 = (state_19857[(7)]);var state_19857__$1 = state_19857;var statearr_19871_19893 = state_19857__$1;(statearr_19871_19893[(2)] = inst_19834);
(statearr_19871_19893[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19858 === (10)))
{var inst_19853 = (state_19857[(2)]);var state_19857__$1 = state_19857;var statearr_19872_19894 = state_19857__$1;(statearr_19872_19894[(2)] = inst_19853);
(statearr_19872_19894[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19858 === (8)))
{var inst_19834 = (state_19857[(7)]);var inst_19844 = cljs.core.next.call(null,inst_19834);var inst_19834__$1 = inst_19844;var state_19857__$1 = (function (){var statearr_19873 = state_19857;(statearr_19873[(7)] = inst_19834__$1);
return statearr_19873;
})();var statearr_19874_19895 = state_19857__$1;(statearr_19874_19895[(2)] = null);
(statearr_19874_19895[(1)] = (2));
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
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19878 = [null,null,null,null,null,null,null,null];(statearr_19878[(0)] = state_machine__6189__auto__);
(statearr_19878[(1)] = (1));
return statearr_19878;
});
var state_machine__6189__auto____1 = (function (state_19857){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19857);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19879){if((e19879 instanceof Object))
{var ex__6192__auto__ = e19879;var statearr_19880_19896 = state_19857;(statearr_19880_19896[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19857);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19879;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19897 = state_19857;
state_19857 = G__19897;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19857){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_19881 = f__6204__auto__.call(null);(statearr_19881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_19881;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
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
cljs.core.async.Mux = (function (){var obj19899 = {};return obj19899;
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
cljs.core.async.Mult = (function (){var obj19901 = {};return obj19901;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t20123 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20123 = (function (cs,ch,mult,meta20124){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20124 = meta20124;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20123.cljs$lang$type = true;
cljs.core.async.t20123.cljs$lang$ctorStr = "cljs.core.async/t20123";
cljs.core.async.t20123.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t20123");
});})(cs))
;
cljs.core.async.t20123.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t20123.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t20123.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t20123.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t20123.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20123.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t20123.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20125){var self__ = this;
var _20125__$1 = this;return self__.meta20124;
});})(cs))
;
cljs.core.async.t20123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20125,meta20124__$1){var self__ = this;
var _20125__$1 = this;return (new cljs.core.async.t20123(self__.cs,self__.ch,self__.mult,meta20124__$1));
});})(cs))
;
cljs.core.async.__GT_t20123 = ((function (cs){
return (function __GT_t20123(cs__$1,ch__$1,mult__$1,meta20124){return (new cljs.core.async.t20123(cs__$1,ch__$1,mult__$1,meta20124));
});})(cs))
;
}
return (new cljs.core.async.t20123(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6203__auto___20344 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___20344,cs,m,dchan,dctr,done){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___20344,cs,m,dchan,dctr,done){
return (function (state_20256){var state_val_20257 = (state_20256[(1)]);if((state_val_20257 === (7)))
{var inst_20252 = (state_20256[(2)]);var state_20256__$1 = state_20256;var statearr_20258_20345 = state_20256__$1;(statearr_20258_20345[(2)] = inst_20252);
(statearr_20258_20345[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (20)))
{var inst_20157 = (state_20256[(7)]);var inst_20167 = cljs.core.first.call(null,inst_20157);var inst_20168 = cljs.core.nth.call(null,inst_20167,(0),null);var inst_20169 = cljs.core.nth.call(null,inst_20167,(1),null);var state_20256__$1 = (function (){var statearr_20259 = state_20256;(statearr_20259[(8)] = inst_20168);
return statearr_20259;
})();if(cljs.core.truth_(inst_20169))
{var statearr_20260_20346 = state_20256__$1;(statearr_20260_20346[(1)] = (22));
} else
{var statearr_20261_20347 = state_20256__$1;(statearr_20261_20347[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (27)))
{var inst_20128 = (state_20256[(9)]);var inst_20199 = (state_20256[(10)]);var inst_20197 = (state_20256[(11)]);var inst_20204 = (state_20256[(12)]);var inst_20204__$1 = cljs.core._nth.call(null,inst_20197,inst_20199);var inst_20205 = cljs.core.async.put_BANG_.call(null,inst_20204__$1,inst_20128,done);var state_20256__$1 = (function (){var statearr_20262 = state_20256;(statearr_20262[(12)] = inst_20204__$1);
return statearr_20262;
})();if(cljs.core.truth_(inst_20205))
{var statearr_20263_20348 = state_20256__$1;(statearr_20263_20348[(1)] = (30));
} else
{var statearr_20264_20349 = state_20256__$1;(statearr_20264_20349[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (1)))
{var state_20256__$1 = state_20256;var statearr_20265_20350 = state_20256__$1;(statearr_20265_20350[(2)] = null);
(statearr_20265_20350[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (24)))
{var inst_20157 = (state_20256[(7)]);var inst_20174 = (state_20256[(2)]);var inst_20175 = cljs.core.next.call(null,inst_20157);var inst_20137 = inst_20175;var inst_20138 = null;var inst_20139 = (0);var inst_20140 = (0);var state_20256__$1 = (function (){var statearr_20266 = state_20256;(statearr_20266[(13)] = inst_20138);
(statearr_20266[(14)] = inst_20140);
(statearr_20266[(15)] = inst_20137);
(statearr_20266[(16)] = inst_20139);
(statearr_20266[(17)] = inst_20174);
return statearr_20266;
})();var statearr_20267_20351 = state_20256__$1;(statearr_20267_20351[(2)] = null);
(statearr_20267_20351[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (39)))
{var state_20256__$1 = state_20256;var statearr_20271_20352 = state_20256__$1;(statearr_20271_20352[(2)] = null);
(statearr_20271_20352[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (4)))
{var inst_20128 = (state_20256[(9)]);var inst_20128__$1 = (state_20256[(2)]);var inst_20129 = (inst_20128__$1 == null);var state_20256__$1 = (function (){var statearr_20272 = state_20256;(statearr_20272[(9)] = inst_20128__$1);
return statearr_20272;
})();if(cljs.core.truth_(inst_20129))
{var statearr_20273_20353 = state_20256__$1;(statearr_20273_20353[(1)] = (5));
} else
{var statearr_20274_20354 = state_20256__$1;(statearr_20274_20354[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (15)))
{var inst_20138 = (state_20256[(13)]);var inst_20140 = (state_20256[(14)]);var inst_20137 = (state_20256[(15)]);var inst_20139 = (state_20256[(16)]);var inst_20153 = (state_20256[(2)]);var inst_20154 = (inst_20140 + (1));var tmp20268 = inst_20138;var tmp20269 = inst_20137;var tmp20270 = inst_20139;var inst_20137__$1 = tmp20269;var inst_20138__$1 = tmp20268;var inst_20139__$1 = tmp20270;var inst_20140__$1 = inst_20154;var state_20256__$1 = (function (){var statearr_20275 = state_20256;(statearr_20275[(18)] = inst_20153);
(statearr_20275[(13)] = inst_20138__$1);
(statearr_20275[(14)] = inst_20140__$1);
(statearr_20275[(15)] = inst_20137__$1);
(statearr_20275[(16)] = inst_20139__$1);
return statearr_20275;
})();var statearr_20276_20355 = state_20256__$1;(statearr_20276_20355[(2)] = null);
(statearr_20276_20355[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (21)))
{var inst_20178 = (state_20256[(2)]);var state_20256__$1 = state_20256;var statearr_20280_20356 = state_20256__$1;(statearr_20280_20356[(2)] = inst_20178);
(statearr_20280_20356[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (31)))
{var inst_20204 = (state_20256[(12)]);var inst_20208 = done.call(null,null);var inst_20209 = cljs.core.async.untap_STAR_.call(null,m,inst_20204);var state_20256__$1 = (function (){var statearr_20281 = state_20256;(statearr_20281[(19)] = inst_20208);
return statearr_20281;
})();var statearr_20282_20357 = state_20256__$1;(statearr_20282_20357[(2)] = inst_20209);
(statearr_20282_20357[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (32)))
{var inst_20198 = (state_20256[(20)]);var inst_20199 = (state_20256[(10)]);var inst_20196 = (state_20256[(21)]);var inst_20197 = (state_20256[(11)]);var inst_20211 = (state_20256[(2)]);var inst_20212 = (inst_20199 + (1));var tmp20277 = inst_20198;var tmp20278 = inst_20196;var tmp20279 = inst_20197;var inst_20196__$1 = tmp20278;var inst_20197__$1 = tmp20279;var inst_20198__$1 = tmp20277;var inst_20199__$1 = inst_20212;var state_20256__$1 = (function (){var statearr_20283 = state_20256;(statearr_20283[(20)] = inst_20198__$1);
(statearr_20283[(22)] = inst_20211);
(statearr_20283[(10)] = inst_20199__$1);
(statearr_20283[(21)] = inst_20196__$1);
(statearr_20283[(11)] = inst_20197__$1);
return statearr_20283;
})();var statearr_20284_20358 = state_20256__$1;(statearr_20284_20358[(2)] = null);
(statearr_20284_20358[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (40)))
{var inst_20224 = (state_20256[(23)]);var inst_20228 = done.call(null,null);var inst_20229 = cljs.core.async.untap_STAR_.call(null,m,inst_20224);var state_20256__$1 = (function (){var statearr_20285 = state_20256;(statearr_20285[(24)] = inst_20228);
return statearr_20285;
})();var statearr_20286_20359 = state_20256__$1;(statearr_20286_20359[(2)] = inst_20229);
(statearr_20286_20359[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (33)))
{var inst_20215 = (state_20256[(25)]);var inst_20217 = cljs.core.chunked_seq_QMARK_.call(null,inst_20215);var state_20256__$1 = state_20256;if(inst_20217)
{var statearr_20287_20360 = state_20256__$1;(statearr_20287_20360[(1)] = (36));
} else
{var statearr_20288_20361 = state_20256__$1;(statearr_20288_20361[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (13)))
{var inst_20147 = (state_20256[(26)]);var inst_20150 = cljs.core.async.close_BANG_.call(null,inst_20147);var state_20256__$1 = state_20256;var statearr_20289_20362 = state_20256__$1;(statearr_20289_20362[(2)] = inst_20150);
(statearr_20289_20362[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (22)))
{var inst_20168 = (state_20256[(8)]);var inst_20171 = cljs.core.async.close_BANG_.call(null,inst_20168);var state_20256__$1 = state_20256;var statearr_20290_20363 = state_20256__$1;(statearr_20290_20363[(2)] = inst_20171);
(statearr_20290_20363[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (36)))
{var inst_20215 = (state_20256[(25)]);var inst_20219 = cljs.core.chunk_first.call(null,inst_20215);var inst_20220 = cljs.core.chunk_rest.call(null,inst_20215);var inst_20221 = cljs.core.count.call(null,inst_20219);var inst_20196 = inst_20220;var inst_20197 = inst_20219;var inst_20198 = inst_20221;var inst_20199 = (0);var state_20256__$1 = (function (){var statearr_20291 = state_20256;(statearr_20291[(20)] = inst_20198);
(statearr_20291[(10)] = inst_20199);
(statearr_20291[(21)] = inst_20196);
(statearr_20291[(11)] = inst_20197);
return statearr_20291;
})();var statearr_20292_20364 = state_20256__$1;(statearr_20292_20364[(2)] = null);
(statearr_20292_20364[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (41)))
{var inst_20215 = (state_20256[(25)]);var inst_20231 = (state_20256[(2)]);var inst_20232 = cljs.core.next.call(null,inst_20215);var inst_20196 = inst_20232;var inst_20197 = null;var inst_20198 = (0);var inst_20199 = (0);var state_20256__$1 = (function (){var statearr_20293 = state_20256;(statearr_20293[(20)] = inst_20198);
(statearr_20293[(27)] = inst_20231);
(statearr_20293[(10)] = inst_20199);
(statearr_20293[(21)] = inst_20196);
(statearr_20293[(11)] = inst_20197);
return statearr_20293;
})();var statearr_20294_20365 = state_20256__$1;(statearr_20294_20365[(2)] = null);
(statearr_20294_20365[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (43)))
{var state_20256__$1 = state_20256;var statearr_20295_20366 = state_20256__$1;(statearr_20295_20366[(2)] = null);
(statearr_20295_20366[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (29)))
{var inst_20240 = (state_20256[(2)]);var state_20256__$1 = state_20256;var statearr_20296_20367 = state_20256__$1;(statearr_20296_20367[(2)] = inst_20240);
(statearr_20296_20367[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (44)))
{var inst_20249 = (state_20256[(2)]);var state_20256__$1 = (function (){var statearr_20297 = state_20256;(statearr_20297[(28)] = inst_20249);
return statearr_20297;
})();var statearr_20298_20368 = state_20256__$1;(statearr_20298_20368[(2)] = null);
(statearr_20298_20368[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (6)))
{var inst_20188 = (state_20256[(29)]);var inst_20187 = cljs.core.deref.call(null,cs);var inst_20188__$1 = cljs.core.keys.call(null,inst_20187);var inst_20189 = cljs.core.count.call(null,inst_20188__$1);var inst_20190 = cljs.core.reset_BANG_.call(null,dctr,inst_20189);var inst_20195 = cljs.core.seq.call(null,inst_20188__$1);var inst_20196 = inst_20195;var inst_20197 = null;var inst_20198 = (0);var inst_20199 = (0);var state_20256__$1 = (function (){var statearr_20299 = state_20256;(statearr_20299[(20)] = inst_20198);
(statearr_20299[(10)] = inst_20199);
(statearr_20299[(21)] = inst_20196);
(statearr_20299[(11)] = inst_20197);
(statearr_20299[(30)] = inst_20190);
(statearr_20299[(29)] = inst_20188__$1);
return statearr_20299;
})();var statearr_20300_20369 = state_20256__$1;(statearr_20300_20369[(2)] = null);
(statearr_20300_20369[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (28)))
{var inst_20215 = (state_20256[(25)]);var inst_20196 = (state_20256[(21)]);var inst_20215__$1 = cljs.core.seq.call(null,inst_20196);var state_20256__$1 = (function (){var statearr_20301 = state_20256;(statearr_20301[(25)] = inst_20215__$1);
return statearr_20301;
})();if(inst_20215__$1)
{var statearr_20302_20370 = state_20256__$1;(statearr_20302_20370[(1)] = (33));
} else
{var statearr_20303_20371 = state_20256__$1;(statearr_20303_20371[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (25)))
{var inst_20198 = (state_20256[(20)]);var inst_20199 = (state_20256[(10)]);var inst_20201 = (inst_20199 < inst_20198);var inst_20202 = inst_20201;var state_20256__$1 = state_20256;if(cljs.core.truth_(inst_20202))
{var statearr_20304_20372 = state_20256__$1;(statearr_20304_20372[(1)] = (27));
} else
{var statearr_20305_20373 = state_20256__$1;(statearr_20305_20373[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (34)))
{var state_20256__$1 = state_20256;var statearr_20306_20374 = state_20256__$1;(statearr_20306_20374[(2)] = null);
(statearr_20306_20374[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (17)))
{var state_20256__$1 = state_20256;var statearr_20307_20375 = state_20256__$1;(statearr_20307_20375[(2)] = null);
(statearr_20307_20375[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (3)))
{var inst_20254 = (state_20256[(2)]);var state_20256__$1 = state_20256;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20256__$1,inst_20254);
} else
{if((state_val_20257 === (12)))
{var inst_20183 = (state_20256[(2)]);var state_20256__$1 = state_20256;var statearr_20308_20376 = state_20256__$1;(statearr_20308_20376[(2)] = inst_20183);
(statearr_20308_20376[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (2)))
{var state_20256__$1 = state_20256;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20256__$1,(4),ch);
} else
{if((state_val_20257 === (23)))
{var state_20256__$1 = state_20256;var statearr_20309_20377 = state_20256__$1;(statearr_20309_20377[(2)] = null);
(statearr_20309_20377[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (35)))
{var inst_20238 = (state_20256[(2)]);var state_20256__$1 = state_20256;var statearr_20310_20378 = state_20256__$1;(statearr_20310_20378[(2)] = inst_20238);
(statearr_20310_20378[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (19)))
{var inst_20157 = (state_20256[(7)]);var inst_20161 = cljs.core.chunk_first.call(null,inst_20157);var inst_20162 = cljs.core.chunk_rest.call(null,inst_20157);var inst_20163 = cljs.core.count.call(null,inst_20161);var inst_20137 = inst_20162;var inst_20138 = inst_20161;var inst_20139 = inst_20163;var inst_20140 = (0);var state_20256__$1 = (function (){var statearr_20311 = state_20256;(statearr_20311[(13)] = inst_20138);
(statearr_20311[(14)] = inst_20140);
(statearr_20311[(15)] = inst_20137);
(statearr_20311[(16)] = inst_20139);
return statearr_20311;
})();var statearr_20312_20379 = state_20256__$1;(statearr_20312_20379[(2)] = null);
(statearr_20312_20379[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (11)))
{var inst_20157 = (state_20256[(7)]);var inst_20137 = (state_20256[(15)]);var inst_20157__$1 = cljs.core.seq.call(null,inst_20137);var state_20256__$1 = (function (){var statearr_20313 = state_20256;(statearr_20313[(7)] = inst_20157__$1);
return statearr_20313;
})();if(inst_20157__$1)
{var statearr_20314_20380 = state_20256__$1;(statearr_20314_20380[(1)] = (16));
} else
{var statearr_20315_20381 = state_20256__$1;(statearr_20315_20381[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (9)))
{var inst_20185 = (state_20256[(2)]);var state_20256__$1 = state_20256;var statearr_20316_20382 = state_20256__$1;(statearr_20316_20382[(2)] = inst_20185);
(statearr_20316_20382[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (5)))
{var inst_20135 = cljs.core.deref.call(null,cs);var inst_20136 = cljs.core.seq.call(null,inst_20135);var inst_20137 = inst_20136;var inst_20138 = null;var inst_20139 = (0);var inst_20140 = (0);var state_20256__$1 = (function (){var statearr_20317 = state_20256;(statearr_20317[(13)] = inst_20138);
(statearr_20317[(14)] = inst_20140);
(statearr_20317[(15)] = inst_20137);
(statearr_20317[(16)] = inst_20139);
return statearr_20317;
})();var statearr_20318_20383 = state_20256__$1;(statearr_20318_20383[(2)] = null);
(statearr_20318_20383[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (14)))
{var state_20256__$1 = state_20256;var statearr_20319_20384 = state_20256__$1;(statearr_20319_20384[(2)] = null);
(statearr_20319_20384[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (45)))
{var inst_20246 = (state_20256[(2)]);var state_20256__$1 = state_20256;var statearr_20320_20385 = state_20256__$1;(statearr_20320_20385[(2)] = inst_20246);
(statearr_20320_20385[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (26)))
{var inst_20188 = (state_20256[(29)]);var inst_20242 = (state_20256[(2)]);var inst_20243 = cljs.core.seq.call(null,inst_20188);var state_20256__$1 = (function (){var statearr_20321 = state_20256;(statearr_20321[(31)] = inst_20242);
return statearr_20321;
})();if(inst_20243)
{var statearr_20322_20386 = state_20256__$1;(statearr_20322_20386[(1)] = (42));
} else
{var statearr_20323_20387 = state_20256__$1;(statearr_20323_20387[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (16)))
{var inst_20157 = (state_20256[(7)]);var inst_20159 = cljs.core.chunked_seq_QMARK_.call(null,inst_20157);var state_20256__$1 = state_20256;if(inst_20159)
{var statearr_20324_20388 = state_20256__$1;(statearr_20324_20388[(1)] = (19));
} else
{var statearr_20325_20389 = state_20256__$1;(statearr_20325_20389[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (38)))
{var inst_20235 = (state_20256[(2)]);var state_20256__$1 = state_20256;var statearr_20326_20390 = state_20256__$1;(statearr_20326_20390[(2)] = inst_20235);
(statearr_20326_20390[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (30)))
{var state_20256__$1 = state_20256;var statearr_20327_20391 = state_20256__$1;(statearr_20327_20391[(2)] = null);
(statearr_20327_20391[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (10)))
{var inst_20138 = (state_20256[(13)]);var inst_20140 = (state_20256[(14)]);var inst_20146 = cljs.core._nth.call(null,inst_20138,inst_20140);var inst_20147 = cljs.core.nth.call(null,inst_20146,(0),null);var inst_20148 = cljs.core.nth.call(null,inst_20146,(1),null);var state_20256__$1 = (function (){var statearr_20328 = state_20256;(statearr_20328[(26)] = inst_20147);
return statearr_20328;
})();if(cljs.core.truth_(inst_20148))
{var statearr_20329_20392 = state_20256__$1;(statearr_20329_20392[(1)] = (13));
} else
{var statearr_20330_20393 = state_20256__$1;(statearr_20330_20393[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (18)))
{var inst_20181 = (state_20256[(2)]);var state_20256__$1 = state_20256;var statearr_20331_20394 = state_20256__$1;(statearr_20331_20394[(2)] = inst_20181);
(statearr_20331_20394[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (42)))
{var state_20256__$1 = state_20256;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20256__$1,(45),dchan);
} else
{if((state_val_20257 === (37)))
{var inst_20224 = (state_20256[(23)]);var inst_20215 = (state_20256[(25)]);var inst_20128 = (state_20256[(9)]);var inst_20224__$1 = cljs.core.first.call(null,inst_20215);var inst_20225 = cljs.core.async.put_BANG_.call(null,inst_20224__$1,inst_20128,done);var state_20256__$1 = (function (){var statearr_20332 = state_20256;(statearr_20332[(23)] = inst_20224__$1);
return statearr_20332;
})();if(cljs.core.truth_(inst_20225))
{var statearr_20333_20395 = state_20256__$1;(statearr_20333_20395[(1)] = (39));
} else
{var statearr_20334_20396 = state_20256__$1;(statearr_20334_20396[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20257 === (8)))
{var inst_20140 = (state_20256[(14)]);var inst_20139 = (state_20256[(16)]);var inst_20142 = (inst_20140 < inst_20139);var inst_20143 = inst_20142;var state_20256__$1 = state_20256;if(cljs.core.truth_(inst_20143))
{var statearr_20335_20397 = state_20256__$1;(statearr_20335_20397[(1)] = (10));
} else
{var statearr_20336_20398 = state_20256__$1;(statearr_20336_20398[(1)] = (11));
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
});})(c__6203__auto___20344,cs,m,dchan,dctr,done))
;return ((function (switch__6188__auto__,c__6203__auto___20344,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_20340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20340[(0)] = state_machine__6189__auto__);
(statearr_20340[(1)] = (1));
return statearr_20340;
});
var state_machine__6189__auto____1 = (function (state_20256){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_20256);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e20341){if((e20341 instanceof Object))
{var ex__6192__auto__ = e20341;var statearr_20342_20399 = state_20256;(statearr_20342_20399[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20256);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20400 = state_20256;
state_20256 = G__20400;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_20256){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_20256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___20344,cs,m,dchan,dctr,done))
})();var state__6205__auto__ = (function (){var statearr_20343 = f__6204__auto__.call(null);(statearr_20343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___20344);
return statearr_20343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___20344,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj20402 = {};return obj20402;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20403){var map__20408 = p__20403;var map__20408__$1 = ((cljs.core.seq_QMARK_.call(null,map__20408))?cljs.core.apply.call(null,cljs.core.hash_map,map__20408):map__20408);var opts = map__20408__$1;var statearr_20409_20412 = state;(statearr_20409_20412[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20408,map__20408__$1,opts){
return (function (val){var statearr_20410_20413 = state;(statearr_20410_20413[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20408,map__20408__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_20411_20414 = state;(statearr_20411_20414[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20403 = null;if (arguments.length > 3) {
  p__20403 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20403);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20415){
var state = cljs.core.first(arglist__20415);
arglist__20415 = cljs.core.next(arglist__20415);
var cont_block = cljs.core.first(arglist__20415);
arglist__20415 = cljs.core.next(arglist__20415);
var ports = cljs.core.first(arglist__20415);
var p__20403 = cljs.core.rest(arglist__20415);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20403);
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
;var m = (function (){if(typeof cljs.core.async.t20535 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20535 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20536){
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
this.meta20536 = meta20536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20535.cljs$lang$type = true;
cljs.core.async.t20535.cljs$lang$ctorStr = "cljs.core.async/t20535";
cljs.core.async.t20535.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t20535");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20535.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t20535.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20535.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20535.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20535.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20535.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20535.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20535.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20537){var self__ = this;
var _20537__$1 = this;return self__.meta20536;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20537,meta20536__$1){var self__ = this;
var _20537__$1 = this;return (new cljs.core.async.t20535(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20536__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t20535 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20535(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20536){return (new cljs.core.async.t20535(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20536));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t20535(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6203__auto___20654 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___20654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___20654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20607){var state_val_20608 = (state_20607[(1)]);if((state_val_20608 === (7)))
{var inst_20551 = (state_20607[(7)]);var inst_20556 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20551);var state_20607__$1 = state_20607;var statearr_20609_20655 = state_20607__$1;(statearr_20609_20655[(2)] = inst_20556);
(statearr_20609_20655[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (20)))
{var inst_20566 = (state_20607[(8)]);var state_20607__$1 = state_20607;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20607__$1,(23),out,inst_20566);
} else
{if((state_val_20608 === (1)))
{var inst_20541 = (state_20607[(9)]);var inst_20541__$1 = calc_state.call(null);var inst_20542 = cljs.core.seq_QMARK_.call(null,inst_20541__$1);var state_20607__$1 = (function (){var statearr_20610 = state_20607;(statearr_20610[(9)] = inst_20541__$1);
return statearr_20610;
})();if(inst_20542)
{var statearr_20611_20656 = state_20607__$1;(statearr_20611_20656[(1)] = (2));
} else
{var statearr_20612_20657 = state_20607__$1;(statearr_20612_20657[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (24)))
{var inst_20559 = (state_20607[(10)]);var inst_20551 = inst_20559;var state_20607__$1 = (function (){var statearr_20613 = state_20607;(statearr_20613[(7)] = inst_20551);
return statearr_20613;
})();var statearr_20614_20658 = state_20607__$1;(statearr_20614_20658[(2)] = null);
(statearr_20614_20658[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (4)))
{var inst_20541 = (state_20607[(9)]);var inst_20547 = (state_20607[(2)]);var inst_20548 = cljs.core.get.call(null,inst_20547,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20549 = cljs.core.get.call(null,inst_20547,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20550 = cljs.core.get.call(null,inst_20547,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_20551 = inst_20541;var state_20607__$1 = (function (){var statearr_20615 = state_20607;(statearr_20615[(11)] = inst_20548);
(statearr_20615[(12)] = inst_20550);
(statearr_20615[(7)] = inst_20551);
(statearr_20615[(13)] = inst_20549);
return statearr_20615;
})();var statearr_20616_20659 = state_20607__$1;(statearr_20616_20659[(2)] = null);
(statearr_20616_20659[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (15)))
{var state_20607__$1 = state_20607;var statearr_20617_20660 = state_20607__$1;(statearr_20617_20660[(2)] = null);
(statearr_20617_20660[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (21)))
{var inst_20559 = (state_20607[(10)]);var inst_20551 = inst_20559;var state_20607__$1 = (function (){var statearr_20618 = state_20607;(statearr_20618[(7)] = inst_20551);
return statearr_20618;
})();var statearr_20619_20661 = state_20607__$1;(statearr_20619_20661[(2)] = null);
(statearr_20619_20661[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (13)))
{var inst_20603 = (state_20607[(2)]);var state_20607__$1 = state_20607;var statearr_20620_20662 = state_20607__$1;(statearr_20620_20662[(2)] = inst_20603);
(statearr_20620_20662[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (22)))
{var inst_20601 = (state_20607[(2)]);var state_20607__$1 = state_20607;var statearr_20621_20663 = state_20607__$1;(statearr_20621_20663[(2)] = inst_20601);
(statearr_20621_20663[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (6)))
{var inst_20605 = (state_20607[(2)]);var state_20607__$1 = state_20607;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20607__$1,inst_20605);
} else
{if((state_val_20608 === (25)))
{var state_20607__$1 = state_20607;var statearr_20622_20664 = state_20607__$1;(statearr_20622_20664[(2)] = null);
(statearr_20622_20664[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (17)))
{var inst_20581 = (state_20607[(14)]);var state_20607__$1 = state_20607;var statearr_20623_20665 = state_20607__$1;(statearr_20623_20665[(2)] = inst_20581);
(statearr_20623_20665[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (3)))
{var inst_20541 = (state_20607[(9)]);var state_20607__$1 = state_20607;var statearr_20624_20666 = state_20607__$1;(statearr_20624_20666[(2)] = inst_20541);
(statearr_20624_20666[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (12)))
{var inst_20567 = (state_20607[(15)]);var inst_20562 = (state_20607[(16)]);var inst_20581 = (state_20607[(14)]);var inst_20581__$1 = inst_20562.call(null,inst_20567);var state_20607__$1 = (function (){var statearr_20625 = state_20607;(statearr_20625[(14)] = inst_20581__$1);
return statearr_20625;
})();if(cljs.core.truth_(inst_20581__$1))
{var statearr_20626_20667 = state_20607__$1;(statearr_20626_20667[(1)] = (17));
} else
{var statearr_20627_20668 = state_20607__$1;(statearr_20627_20668[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (2)))
{var inst_20541 = (state_20607[(9)]);var inst_20544 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20541);var state_20607__$1 = state_20607;var statearr_20628_20669 = state_20607__$1;(statearr_20628_20669[(2)] = inst_20544);
(statearr_20628_20669[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (23)))
{var inst_20592 = (state_20607[(2)]);var state_20607__$1 = state_20607;if(cljs.core.truth_(inst_20592))
{var statearr_20629_20670 = state_20607__$1;(statearr_20629_20670[(1)] = (24));
} else
{var statearr_20630_20671 = state_20607__$1;(statearr_20630_20671[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (19)))
{var inst_20589 = (state_20607[(2)]);var state_20607__$1 = state_20607;if(cljs.core.truth_(inst_20589))
{var statearr_20631_20672 = state_20607__$1;(statearr_20631_20672[(1)] = (20));
} else
{var statearr_20632_20673 = state_20607__$1;(statearr_20632_20673[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (11)))
{var inst_20566 = (state_20607[(8)]);var inst_20572 = (inst_20566 == null);var state_20607__$1 = state_20607;if(cljs.core.truth_(inst_20572))
{var statearr_20633_20674 = state_20607__$1;(statearr_20633_20674[(1)] = (14));
} else
{var statearr_20634_20675 = state_20607__$1;(statearr_20634_20675[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (9)))
{var inst_20559 = (state_20607[(10)]);var inst_20559__$1 = (state_20607[(2)]);var inst_20560 = cljs.core.get.call(null,inst_20559__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20561 = cljs.core.get.call(null,inst_20559__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20562 = cljs.core.get.call(null,inst_20559__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_20607__$1 = (function (){var statearr_20635 = state_20607;(statearr_20635[(17)] = inst_20561);
(statearr_20635[(16)] = inst_20562);
(statearr_20635[(10)] = inst_20559__$1);
return statearr_20635;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_20607__$1,(10),inst_20560);
} else
{if((state_val_20608 === (5)))
{var inst_20551 = (state_20607[(7)]);var inst_20554 = cljs.core.seq_QMARK_.call(null,inst_20551);var state_20607__$1 = state_20607;if(inst_20554)
{var statearr_20636_20676 = state_20607__$1;(statearr_20636_20676[(1)] = (7));
} else
{var statearr_20637_20677 = state_20607__$1;(statearr_20637_20677[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (14)))
{var inst_20567 = (state_20607[(15)]);var inst_20574 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20567);var state_20607__$1 = state_20607;var statearr_20638_20678 = state_20607__$1;(statearr_20638_20678[(2)] = inst_20574);
(statearr_20638_20678[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (26)))
{var inst_20597 = (state_20607[(2)]);var state_20607__$1 = state_20607;var statearr_20639_20679 = state_20607__$1;(statearr_20639_20679[(2)] = inst_20597);
(statearr_20639_20679[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (16)))
{var inst_20577 = (state_20607[(2)]);var inst_20578 = calc_state.call(null);var inst_20551 = inst_20578;var state_20607__$1 = (function (){var statearr_20640 = state_20607;(statearr_20640[(18)] = inst_20577);
(statearr_20640[(7)] = inst_20551);
return statearr_20640;
})();var statearr_20641_20680 = state_20607__$1;(statearr_20641_20680[(2)] = null);
(statearr_20641_20680[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (10)))
{var inst_20566 = (state_20607[(8)]);var inst_20567 = (state_20607[(15)]);var inst_20565 = (state_20607[(2)]);var inst_20566__$1 = cljs.core.nth.call(null,inst_20565,(0),null);var inst_20567__$1 = cljs.core.nth.call(null,inst_20565,(1),null);var inst_20568 = (inst_20566__$1 == null);var inst_20569 = cljs.core._EQ_.call(null,inst_20567__$1,change);var inst_20570 = (inst_20568) || (inst_20569);var state_20607__$1 = (function (){var statearr_20642 = state_20607;(statearr_20642[(8)] = inst_20566__$1);
(statearr_20642[(15)] = inst_20567__$1);
return statearr_20642;
})();if(cljs.core.truth_(inst_20570))
{var statearr_20643_20681 = state_20607__$1;(statearr_20643_20681[(1)] = (11));
} else
{var statearr_20644_20682 = state_20607__$1;(statearr_20644_20682[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (18)))
{var inst_20561 = (state_20607[(17)]);var inst_20567 = (state_20607[(15)]);var inst_20562 = (state_20607[(16)]);var inst_20584 = cljs.core.empty_QMARK_.call(null,inst_20562);var inst_20585 = inst_20561.call(null,inst_20567);var inst_20586 = cljs.core.not.call(null,inst_20585);var inst_20587 = (inst_20584) && (inst_20586);var state_20607__$1 = state_20607;var statearr_20645_20683 = state_20607__$1;(statearr_20645_20683[(2)] = inst_20587);
(statearr_20645_20683[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20608 === (8)))
{var inst_20551 = (state_20607[(7)]);var state_20607__$1 = state_20607;var statearr_20646_20684 = state_20607__$1;(statearr_20646_20684[(2)] = inst_20551);
(statearr_20646_20684[(1)] = (9));
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
});})(c__6203__auto___20654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6188__auto__,c__6203__auto___20654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_20650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20650[(0)] = state_machine__6189__auto__);
(statearr_20650[(1)] = (1));
return statearr_20650;
});
var state_machine__6189__auto____1 = (function (state_20607){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_20607);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e20651){if((e20651 instanceof Object))
{var ex__6192__auto__ = e20651;var statearr_20652_20685 = state_20607;(statearr_20652_20685[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20607);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20651;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20686 = state_20607;
state_20607 = G__20686;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_20607){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_20607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___20654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6205__auto__ = (function (){var statearr_20653 = f__6204__auto__.call(null);(statearr_20653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___20654);
return statearr_20653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___20654,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj20688 = {};return obj20688;
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
return (function (p1__20689_SHARP_){if(cljs.core.truth_(p1__20689_SHARP_.call(null,topic)))
{return p1__20689_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__20689_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3551__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20812 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20812 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20813){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20813 = meta20813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20812.cljs$lang$type = true;
cljs.core.async.t20812.cljs$lang$ctorStr = "cljs.core.async/t20812";
cljs.core.async.t20812.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t20812");
});})(mults,ensure_mult))
;
cljs.core.async.t20812.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20812.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20812.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20812.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20812.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20812.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20812.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20812.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20814){var self__ = this;
var _20814__$1 = this;return self__.meta20813;
});})(mults,ensure_mult))
;
cljs.core.async.t20812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20814,meta20813__$1){var self__ = this;
var _20814__$1 = this;return (new cljs.core.async.t20812(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20813__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20812 = ((function (mults,ensure_mult){
return (function __GT_t20812(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20813){return (new cljs.core.async.t20812(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20813));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20812(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6203__auto___20934 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___20934,mults,ensure_mult,p){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___20934,mults,ensure_mult,p){
return (function (state_20886){var state_val_20887 = (state_20886[(1)]);if((state_val_20887 === (7)))
{var inst_20882 = (state_20886[(2)]);var state_20886__$1 = state_20886;var statearr_20888_20935 = state_20886__$1;(statearr_20888_20935[(2)] = inst_20882);
(statearr_20888_20935[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (20)))
{var state_20886__$1 = state_20886;var statearr_20889_20936 = state_20886__$1;(statearr_20889_20936[(2)] = null);
(statearr_20889_20936[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (1)))
{var state_20886__$1 = state_20886;var statearr_20890_20937 = state_20886__$1;(statearr_20890_20937[(2)] = null);
(statearr_20890_20937[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (24)))
{var inst_20865 = (state_20886[(7)]);var inst_20874 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20865);var state_20886__$1 = state_20886;var statearr_20891_20938 = state_20886__$1;(statearr_20891_20938[(2)] = inst_20874);
(statearr_20891_20938[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (4)))
{var inst_20817 = (state_20886[(8)]);var inst_20817__$1 = (state_20886[(2)]);var inst_20818 = (inst_20817__$1 == null);var state_20886__$1 = (function (){var statearr_20892 = state_20886;(statearr_20892[(8)] = inst_20817__$1);
return statearr_20892;
})();if(cljs.core.truth_(inst_20818))
{var statearr_20893_20939 = state_20886__$1;(statearr_20893_20939[(1)] = (5));
} else
{var statearr_20894_20940 = state_20886__$1;(statearr_20894_20940[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (15)))
{var inst_20859 = (state_20886[(2)]);var state_20886__$1 = state_20886;var statearr_20895_20941 = state_20886__$1;(statearr_20895_20941[(2)] = inst_20859);
(statearr_20895_20941[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (21)))
{var inst_20879 = (state_20886[(2)]);var state_20886__$1 = (function (){var statearr_20896 = state_20886;(statearr_20896[(9)] = inst_20879);
return statearr_20896;
})();var statearr_20897_20942 = state_20886__$1;(statearr_20897_20942[(2)] = null);
(statearr_20897_20942[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (13)))
{var inst_20841 = (state_20886[(10)]);var inst_20843 = cljs.core.chunked_seq_QMARK_.call(null,inst_20841);var state_20886__$1 = state_20886;if(inst_20843)
{var statearr_20898_20943 = state_20886__$1;(statearr_20898_20943[(1)] = (16));
} else
{var statearr_20899_20944 = state_20886__$1;(statearr_20899_20944[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (22)))
{var inst_20871 = (state_20886[(2)]);var state_20886__$1 = state_20886;if(cljs.core.truth_(inst_20871))
{var statearr_20900_20945 = state_20886__$1;(statearr_20900_20945[(1)] = (23));
} else
{var statearr_20901_20946 = state_20886__$1;(statearr_20901_20946[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (6)))
{var inst_20867 = (state_20886[(11)]);var inst_20817 = (state_20886[(8)]);var inst_20865 = (state_20886[(7)]);var inst_20865__$1 = topic_fn.call(null,inst_20817);var inst_20866 = cljs.core.deref.call(null,mults);var inst_20867__$1 = cljs.core.get.call(null,inst_20866,inst_20865__$1);var state_20886__$1 = (function (){var statearr_20902 = state_20886;(statearr_20902[(11)] = inst_20867__$1);
(statearr_20902[(7)] = inst_20865__$1);
return statearr_20902;
})();if(cljs.core.truth_(inst_20867__$1))
{var statearr_20903_20947 = state_20886__$1;(statearr_20903_20947[(1)] = (19));
} else
{var statearr_20904_20948 = state_20886__$1;(statearr_20904_20948[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (25)))
{var inst_20876 = (state_20886[(2)]);var state_20886__$1 = state_20886;var statearr_20905_20949 = state_20886__$1;(statearr_20905_20949[(2)] = inst_20876);
(statearr_20905_20949[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (17)))
{var inst_20841 = (state_20886[(10)]);var inst_20850 = cljs.core.first.call(null,inst_20841);var inst_20851 = cljs.core.async.muxch_STAR_.call(null,inst_20850);var inst_20852 = cljs.core.async.close_BANG_.call(null,inst_20851);var inst_20853 = cljs.core.next.call(null,inst_20841);var inst_20827 = inst_20853;var inst_20828 = null;var inst_20829 = (0);var inst_20830 = (0);var state_20886__$1 = (function (){var statearr_20906 = state_20886;(statearr_20906[(12)] = inst_20828);
(statearr_20906[(13)] = inst_20829);
(statearr_20906[(14)] = inst_20830);
(statearr_20906[(15)] = inst_20852);
(statearr_20906[(16)] = inst_20827);
return statearr_20906;
})();var statearr_20907_20950 = state_20886__$1;(statearr_20907_20950[(2)] = null);
(statearr_20907_20950[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (3)))
{var inst_20884 = (state_20886[(2)]);var state_20886__$1 = state_20886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20886__$1,inst_20884);
} else
{if((state_val_20887 === (12)))
{var inst_20861 = (state_20886[(2)]);var state_20886__$1 = state_20886;var statearr_20908_20951 = state_20886__$1;(statearr_20908_20951[(2)] = inst_20861);
(statearr_20908_20951[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (2)))
{var state_20886__$1 = state_20886;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20886__$1,(4),ch);
} else
{if((state_val_20887 === (23)))
{var state_20886__$1 = state_20886;var statearr_20909_20952 = state_20886__$1;(statearr_20909_20952[(2)] = null);
(statearr_20909_20952[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (19)))
{var inst_20867 = (state_20886[(11)]);var inst_20817 = (state_20886[(8)]);var inst_20869 = cljs.core.async.muxch_STAR_.call(null,inst_20867);var state_20886__$1 = state_20886;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20886__$1,(22),inst_20869,inst_20817);
} else
{if((state_val_20887 === (11)))
{var inst_20841 = (state_20886[(10)]);var inst_20827 = (state_20886[(16)]);var inst_20841__$1 = cljs.core.seq.call(null,inst_20827);var state_20886__$1 = (function (){var statearr_20910 = state_20886;(statearr_20910[(10)] = inst_20841__$1);
return statearr_20910;
})();if(inst_20841__$1)
{var statearr_20911_20953 = state_20886__$1;(statearr_20911_20953[(1)] = (13));
} else
{var statearr_20912_20954 = state_20886__$1;(statearr_20912_20954[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (9)))
{var inst_20863 = (state_20886[(2)]);var state_20886__$1 = state_20886;var statearr_20913_20955 = state_20886__$1;(statearr_20913_20955[(2)] = inst_20863);
(statearr_20913_20955[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (5)))
{var inst_20824 = cljs.core.deref.call(null,mults);var inst_20825 = cljs.core.vals.call(null,inst_20824);var inst_20826 = cljs.core.seq.call(null,inst_20825);var inst_20827 = inst_20826;var inst_20828 = null;var inst_20829 = (0);var inst_20830 = (0);var state_20886__$1 = (function (){var statearr_20914 = state_20886;(statearr_20914[(12)] = inst_20828);
(statearr_20914[(13)] = inst_20829);
(statearr_20914[(14)] = inst_20830);
(statearr_20914[(16)] = inst_20827);
return statearr_20914;
})();var statearr_20915_20956 = state_20886__$1;(statearr_20915_20956[(2)] = null);
(statearr_20915_20956[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (14)))
{var state_20886__$1 = state_20886;var statearr_20919_20957 = state_20886__$1;(statearr_20919_20957[(2)] = null);
(statearr_20919_20957[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (16)))
{var inst_20841 = (state_20886[(10)]);var inst_20845 = cljs.core.chunk_first.call(null,inst_20841);var inst_20846 = cljs.core.chunk_rest.call(null,inst_20841);var inst_20847 = cljs.core.count.call(null,inst_20845);var inst_20827 = inst_20846;var inst_20828 = inst_20845;var inst_20829 = inst_20847;var inst_20830 = (0);var state_20886__$1 = (function (){var statearr_20920 = state_20886;(statearr_20920[(12)] = inst_20828);
(statearr_20920[(13)] = inst_20829);
(statearr_20920[(14)] = inst_20830);
(statearr_20920[(16)] = inst_20827);
return statearr_20920;
})();var statearr_20921_20958 = state_20886__$1;(statearr_20921_20958[(2)] = null);
(statearr_20921_20958[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (10)))
{var inst_20828 = (state_20886[(12)]);var inst_20829 = (state_20886[(13)]);var inst_20830 = (state_20886[(14)]);var inst_20827 = (state_20886[(16)]);var inst_20835 = cljs.core._nth.call(null,inst_20828,inst_20830);var inst_20836 = cljs.core.async.muxch_STAR_.call(null,inst_20835);var inst_20837 = cljs.core.async.close_BANG_.call(null,inst_20836);var inst_20838 = (inst_20830 + (1));var tmp20916 = inst_20828;var tmp20917 = inst_20829;var tmp20918 = inst_20827;var inst_20827__$1 = tmp20918;var inst_20828__$1 = tmp20916;var inst_20829__$1 = tmp20917;var inst_20830__$1 = inst_20838;var state_20886__$1 = (function (){var statearr_20922 = state_20886;(statearr_20922[(12)] = inst_20828__$1);
(statearr_20922[(13)] = inst_20829__$1);
(statearr_20922[(17)] = inst_20837);
(statearr_20922[(14)] = inst_20830__$1);
(statearr_20922[(16)] = inst_20827__$1);
return statearr_20922;
})();var statearr_20923_20959 = state_20886__$1;(statearr_20923_20959[(2)] = null);
(statearr_20923_20959[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (18)))
{var inst_20856 = (state_20886[(2)]);var state_20886__$1 = state_20886;var statearr_20924_20960 = state_20886__$1;(statearr_20924_20960[(2)] = inst_20856);
(statearr_20924_20960[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20887 === (8)))
{var inst_20829 = (state_20886[(13)]);var inst_20830 = (state_20886[(14)]);var inst_20832 = (inst_20830 < inst_20829);var inst_20833 = inst_20832;var state_20886__$1 = state_20886;if(cljs.core.truth_(inst_20833))
{var statearr_20925_20961 = state_20886__$1;(statearr_20925_20961[(1)] = (10));
} else
{var statearr_20926_20962 = state_20886__$1;(statearr_20926_20962[(1)] = (11));
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
});})(c__6203__auto___20934,mults,ensure_mult,p))
;return ((function (switch__6188__auto__,c__6203__auto___20934,mults,ensure_mult,p){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_20930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20930[(0)] = state_machine__6189__auto__);
(statearr_20930[(1)] = (1));
return statearr_20930;
});
var state_machine__6189__auto____1 = (function (state_20886){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_20886);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e20931){if((e20931 instanceof Object))
{var ex__6192__auto__ = e20931;var statearr_20932_20963 = state_20886;(statearr_20932_20963[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20886);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20964 = state_20886;
state_20886 = G__20964;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_20886){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_20886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___20934,mults,ensure_mult,p))
})();var state__6205__auto__ = (function (){var statearr_20933 = f__6204__auto__.call(null);(statearr_20933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___20934);
return statearr_20933;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___20934,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6203__auto___21101 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___21101,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___21101,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21071){var state_val_21072 = (state_21071[(1)]);if((state_val_21072 === (7)))
{var state_21071__$1 = state_21071;var statearr_21073_21102 = state_21071__$1;(statearr_21073_21102[(2)] = null);
(statearr_21073_21102[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21072 === (1)))
{var state_21071__$1 = state_21071;var statearr_21074_21103 = state_21071__$1;(statearr_21074_21103[(2)] = null);
(statearr_21074_21103[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21072 === (4)))
{var inst_21035 = (state_21071[(7)]);var inst_21037 = (inst_21035 < cnt);var state_21071__$1 = state_21071;if(cljs.core.truth_(inst_21037))
{var statearr_21075_21104 = state_21071__$1;(statearr_21075_21104[(1)] = (6));
} else
{var statearr_21076_21105 = state_21071__$1;(statearr_21076_21105[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21072 === (15)))
{var inst_21067 = (state_21071[(2)]);var state_21071__$1 = state_21071;var statearr_21077_21106 = state_21071__$1;(statearr_21077_21106[(2)] = inst_21067);
(statearr_21077_21106[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21072 === (13)))
{var inst_21060 = cljs.core.async.close_BANG_.call(null,out);var state_21071__$1 = state_21071;var statearr_21078_21107 = state_21071__$1;(statearr_21078_21107[(2)] = inst_21060);
(statearr_21078_21107[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21072 === (6)))
{var state_21071__$1 = state_21071;var statearr_21079_21108 = state_21071__$1;(statearr_21079_21108[(2)] = null);
(statearr_21079_21108[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21072 === (3)))
{var inst_21069 = (state_21071[(2)]);var state_21071__$1 = state_21071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21071__$1,inst_21069);
} else
{if((state_val_21072 === (12)))
{var inst_21057 = (state_21071[(8)]);var inst_21057__$1 = (state_21071[(2)]);var inst_21058 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21057__$1);var state_21071__$1 = (function (){var statearr_21080 = state_21071;(statearr_21080[(8)] = inst_21057__$1);
return statearr_21080;
})();if(cljs.core.truth_(inst_21058))
{var statearr_21081_21109 = state_21071__$1;(statearr_21081_21109[(1)] = (13));
} else
{var statearr_21082_21110 = state_21071__$1;(statearr_21082_21110[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21072 === (2)))
{var inst_21034 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_21035 = (0);var state_21071__$1 = (function (){var statearr_21083 = state_21071;(statearr_21083[(7)] = inst_21035);
(statearr_21083[(9)] = inst_21034);
return statearr_21083;
})();var statearr_21084_21111 = state_21071__$1;(statearr_21084_21111[(2)] = null);
(statearr_21084_21111[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21072 === (11)))
{var inst_21035 = (state_21071[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21071,(10),Object,null,(9));var inst_21044 = chs__$1.call(null,inst_21035);var inst_21045 = done.call(null,inst_21035);var inst_21046 = cljs.core.async.take_BANG_.call(null,inst_21044,inst_21045);var state_21071__$1 = state_21071;var statearr_21085_21112 = state_21071__$1;(statearr_21085_21112[(2)] = inst_21046);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21071__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21072 === (9)))
{var inst_21035 = (state_21071[(7)]);var inst_21048 = (state_21071[(2)]);var inst_21049 = (inst_21035 + (1));var inst_21035__$1 = inst_21049;var state_21071__$1 = (function (){var statearr_21086 = state_21071;(statearr_21086[(7)] = inst_21035__$1);
(statearr_21086[(10)] = inst_21048);
return statearr_21086;
})();var statearr_21087_21113 = state_21071__$1;(statearr_21087_21113[(2)] = null);
(statearr_21087_21113[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21072 === (5)))
{var inst_21055 = (state_21071[(2)]);var state_21071__$1 = (function (){var statearr_21088 = state_21071;(statearr_21088[(11)] = inst_21055);
return statearr_21088;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21071__$1,(12),dchan);
} else
{if((state_val_21072 === (14)))
{var inst_21057 = (state_21071[(8)]);var inst_21062 = cljs.core.apply.call(null,f,inst_21057);var state_21071__$1 = state_21071;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21071__$1,(16),out,inst_21062);
} else
{if((state_val_21072 === (16)))
{var inst_21064 = (state_21071[(2)]);var state_21071__$1 = (function (){var statearr_21089 = state_21071;(statearr_21089[(12)] = inst_21064);
return statearr_21089;
})();var statearr_21090_21114 = state_21071__$1;(statearr_21090_21114[(2)] = null);
(statearr_21090_21114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21072 === (10)))
{var inst_21039 = (state_21071[(2)]);var inst_21040 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_21071__$1 = (function (){var statearr_21091 = state_21071;(statearr_21091[(13)] = inst_21039);
return statearr_21091;
})();var statearr_21092_21115 = state_21071__$1;(statearr_21092_21115[(2)] = inst_21040);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21071__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21072 === (8)))
{var inst_21053 = (state_21071[(2)]);var state_21071__$1 = state_21071;var statearr_21093_21116 = state_21071__$1;(statearr_21093_21116[(2)] = inst_21053);
(statearr_21093_21116[(1)] = (5));
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
});})(c__6203__auto___21101,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6188__auto__,c__6203__auto___21101,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_21097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21097[(0)] = state_machine__6189__auto__);
(statearr_21097[(1)] = (1));
return statearr_21097;
});
var state_machine__6189__auto____1 = (function (state_21071){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_21071);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e21098){if((e21098 instanceof Object))
{var ex__6192__auto__ = e21098;var statearr_21099_21117 = state_21071;(statearr_21099_21117[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21071);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21098;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21118 = state_21071;
state_21071 = G__21118;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_21071){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_21071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___21101,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6205__auto__ = (function (){var statearr_21100 = f__6204__auto__.call(null);(statearr_21100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___21101);
return statearr_21100;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___21101,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___21226 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___21226,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___21226,out){
return (function (state_21202){var state_val_21203 = (state_21202[(1)]);if((state_val_21203 === (7)))
{var inst_21182 = (state_21202[(7)]);var inst_21181 = (state_21202[(8)]);var inst_21181__$1 = (state_21202[(2)]);var inst_21182__$1 = cljs.core.nth.call(null,inst_21181__$1,(0),null);var inst_21183 = cljs.core.nth.call(null,inst_21181__$1,(1),null);var inst_21184 = (inst_21182__$1 == null);var state_21202__$1 = (function (){var statearr_21204 = state_21202;(statearr_21204[(7)] = inst_21182__$1);
(statearr_21204[(9)] = inst_21183);
(statearr_21204[(8)] = inst_21181__$1);
return statearr_21204;
})();if(cljs.core.truth_(inst_21184))
{var statearr_21205_21227 = state_21202__$1;(statearr_21205_21227[(1)] = (8));
} else
{var statearr_21206_21228 = state_21202__$1;(statearr_21206_21228[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21203 === (1)))
{var inst_21173 = cljs.core.vec.call(null,chs);var inst_21174 = inst_21173;var state_21202__$1 = (function (){var statearr_21207 = state_21202;(statearr_21207[(10)] = inst_21174);
return statearr_21207;
})();var statearr_21208_21229 = state_21202__$1;(statearr_21208_21229[(2)] = null);
(statearr_21208_21229[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21203 === (4)))
{var inst_21174 = (state_21202[(10)]);var state_21202__$1 = state_21202;return cljs.core.async.ioc_alts_BANG_.call(null,state_21202__$1,(7),inst_21174);
} else
{if((state_val_21203 === (6)))
{var inst_21198 = (state_21202[(2)]);var state_21202__$1 = state_21202;var statearr_21209_21230 = state_21202__$1;(statearr_21209_21230[(2)] = inst_21198);
(statearr_21209_21230[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21203 === (3)))
{var inst_21200 = (state_21202[(2)]);var state_21202__$1 = state_21202;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21202__$1,inst_21200);
} else
{if((state_val_21203 === (2)))
{var inst_21174 = (state_21202[(10)]);var inst_21176 = cljs.core.count.call(null,inst_21174);var inst_21177 = (inst_21176 > (0));var state_21202__$1 = state_21202;if(cljs.core.truth_(inst_21177))
{var statearr_21211_21231 = state_21202__$1;(statearr_21211_21231[(1)] = (4));
} else
{var statearr_21212_21232 = state_21202__$1;(statearr_21212_21232[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21203 === (11)))
{var inst_21174 = (state_21202[(10)]);var inst_21191 = (state_21202[(2)]);var tmp21210 = inst_21174;var inst_21174__$1 = tmp21210;var state_21202__$1 = (function (){var statearr_21213 = state_21202;(statearr_21213[(11)] = inst_21191);
(statearr_21213[(10)] = inst_21174__$1);
return statearr_21213;
})();var statearr_21214_21233 = state_21202__$1;(statearr_21214_21233[(2)] = null);
(statearr_21214_21233[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21203 === (9)))
{var inst_21182 = (state_21202[(7)]);var state_21202__$1 = state_21202;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21202__$1,(11),out,inst_21182);
} else
{if((state_val_21203 === (5)))
{var inst_21196 = cljs.core.async.close_BANG_.call(null,out);var state_21202__$1 = state_21202;var statearr_21215_21234 = state_21202__$1;(statearr_21215_21234[(2)] = inst_21196);
(statearr_21215_21234[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21203 === (10)))
{var inst_21194 = (state_21202[(2)]);var state_21202__$1 = state_21202;var statearr_21216_21235 = state_21202__$1;(statearr_21216_21235[(2)] = inst_21194);
(statearr_21216_21235[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21203 === (8)))
{var inst_21182 = (state_21202[(7)]);var inst_21183 = (state_21202[(9)]);var inst_21181 = (state_21202[(8)]);var inst_21174 = (state_21202[(10)]);var inst_21186 = (function (){var c = inst_21183;var v = inst_21182;var vec__21179 = inst_21181;var cs = inst_21174;return ((function (c,v,vec__21179,cs,inst_21182,inst_21183,inst_21181,inst_21174,state_val_21203,c__6203__auto___21226,out){
return (function (p1__21119_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__21119_SHARP_);
});
;})(c,v,vec__21179,cs,inst_21182,inst_21183,inst_21181,inst_21174,state_val_21203,c__6203__auto___21226,out))
})();var inst_21187 = cljs.core.filterv.call(null,inst_21186,inst_21174);var inst_21174__$1 = inst_21187;var state_21202__$1 = (function (){var statearr_21217 = state_21202;(statearr_21217[(10)] = inst_21174__$1);
return statearr_21217;
})();var statearr_21218_21236 = state_21202__$1;(statearr_21218_21236[(2)] = null);
(statearr_21218_21236[(1)] = (2));
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
});})(c__6203__auto___21226,out))
;return ((function (switch__6188__auto__,c__6203__auto___21226,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_21222 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21222[(0)] = state_machine__6189__auto__);
(statearr_21222[(1)] = (1));
return statearr_21222;
});
var state_machine__6189__auto____1 = (function (state_21202){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_21202);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e21223){if((e21223 instanceof Object))
{var ex__6192__auto__ = e21223;var statearr_21224_21237 = state_21202;(statearr_21224_21237[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21202);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21223;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21238 = state_21202;
state_21202 = G__21238;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_21202){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_21202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___21226,out))
})();var state__6205__auto__ = (function (){var statearr_21225 = f__6204__auto__.call(null);(statearr_21225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___21226);
return statearr_21225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___21226,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___21331 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___21331,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___21331,out){
return (function (state_21308){var state_val_21309 = (state_21308[(1)]);if((state_val_21309 === (7)))
{var inst_21290 = (state_21308[(7)]);var inst_21290__$1 = (state_21308[(2)]);var inst_21291 = (inst_21290__$1 == null);var inst_21292 = cljs.core.not.call(null,inst_21291);var state_21308__$1 = (function (){var statearr_21310 = state_21308;(statearr_21310[(7)] = inst_21290__$1);
return statearr_21310;
})();if(inst_21292)
{var statearr_21311_21332 = state_21308__$1;(statearr_21311_21332[(1)] = (8));
} else
{var statearr_21312_21333 = state_21308__$1;(statearr_21312_21333[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21309 === (1)))
{var inst_21285 = (0);var state_21308__$1 = (function (){var statearr_21313 = state_21308;(statearr_21313[(8)] = inst_21285);
return statearr_21313;
})();var statearr_21314_21334 = state_21308__$1;(statearr_21314_21334[(2)] = null);
(statearr_21314_21334[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21309 === (4)))
{var state_21308__$1 = state_21308;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21308__$1,(7),ch);
} else
{if((state_val_21309 === (6)))
{var inst_21303 = (state_21308[(2)]);var state_21308__$1 = state_21308;var statearr_21315_21335 = state_21308__$1;(statearr_21315_21335[(2)] = inst_21303);
(statearr_21315_21335[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21309 === (3)))
{var inst_21305 = (state_21308[(2)]);var inst_21306 = cljs.core.async.close_BANG_.call(null,out);var state_21308__$1 = (function (){var statearr_21316 = state_21308;(statearr_21316[(9)] = inst_21305);
return statearr_21316;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21308__$1,inst_21306);
} else
{if((state_val_21309 === (2)))
{var inst_21285 = (state_21308[(8)]);var inst_21287 = (inst_21285 < n);var state_21308__$1 = state_21308;if(cljs.core.truth_(inst_21287))
{var statearr_21317_21336 = state_21308__$1;(statearr_21317_21336[(1)] = (4));
} else
{var statearr_21318_21337 = state_21308__$1;(statearr_21318_21337[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21309 === (11)))
{var inst_21285 = (state_21308[(8)]);var inst_21295 = (state_21308[(2)]);var inst_21296 = (inst_21285 + (1));var inst_21285__$1 = inst_21296;var state_21308__$1 = (function (){var statearr_21319 = state_21308;(statearr_21319[(10)] = inst_21295);
(statearr_21319[(8)] = inst_21285__$1);
return statearr_21319;
})();var statearr_21320_21338 = state_21308__$1;(statearr_21320_21338[(2)] = null);
(statearr_21320_21338[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21309 === (9)))
{var state_21308__$1 = state_21308;var statearr_21321_21339 = state_21308__$1;(statearr_21321_21339[(2)] = null);
(statearr_21321_21339[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21309 === (5)))
{var state_21308__$1 = state_21308;var statearr_21322_21340 = state_21308__$1;(statearr_21322_21340[(2)] = null);
(statearr_21322_21340[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21309 === (10)))
{var inst_21300 = (state_21308[(2)]);var state_21308__$1 = state_21308;var statearr_21323_21341 = state_21308__$1;(statearr_21323_21341[(2)] = inst_21300);
(statearr_21323_21341[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21309 === (8)))
{var inst_21290 = (state_21308[(7)]);var state_21308__$1 = state_21308;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21308__$1,(11),out,inst_21290);
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
});})(c__6203__auto___21331,out))
;return ((function (switch__6188__auto__,c__6203__auto___21331,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_21327 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21327[(0)] = state_machine__6189__auto__);
(statearr_21327[(1)] = (1));
return statearr_21327;
});
var state_machine__6189__auto____1 = (function (state_21308){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_21308);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e21328){if((e21328 instanceof Object))
{var ex__6192__auto__ = e21328;var statearr_21329_21342 = state_21308;(statearr_21329_21342[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21308);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21343 = state_21308;
state_21308 = G__21343;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_21308){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_21308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___21331,out))
})();var state__6205__auto__ = (function (){var statearr_21330 = f__6204__auto__.call(null);(statearr_21330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___21331);
return statearr_21330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___21331,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21351 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21351 = (function (ch,f,map_LT_,meta21352){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21352 = meta21352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21351.cljs$lang$type = true;
cljs.core.async.t21351.cljs$lang$ctorStr = "cljs.core.async/t21351";
cljs.core.async.t21351.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t21351");
});
cljs.core.async.t21351.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t21351.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21351.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21354 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21354 = (function (fn1,_,meta21352,ch,f,map_LT_,meta21355){
this.fn1 = fn1;
this._ = _;
this.meta21352 = meta21352;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21355 = meta21355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21354.cljs$lang$type = true;
cljs.core.async.t21354.cljs$lang$ctorStr = "cljs.core.async/t21354";
cljs.core.async.t21354.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t21354");
});})(___$1))
;
cljs.core.async.t21354.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t21354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__21344_SHARP_){return f1.call(null,(((p1__21344_SHARP_ == null))?null:self__.f.call(null,p1__21344_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t21354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21356){var self__ = this;
var _21356__$1 = this;return self__.meta21355;
});})(___$1))
;
cljs.core.async.t21354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21356,meta21355__$1){var self__ = this;
var _21356__$1 = this;return (new cljs.core.async.t21354(self__.fn1,self__._,self__.meta21352,self__.ch,self__.f,self__.map_LT_,meta21355__$1));
});})(___$1))
;
cljs.core.async.__GT_t21354 = ((function (___$1){
return (function __GT_t21354(fn1__$1,___$2,meta21352__$1,ch__$2,f__$2,map_LT___$2,meta21355){return (new cljs.core.async.t21354(fn1__$1,___$2,meta21352__$1,ch__$2,f__$2,map_LT___$2,meta21355));
});})(___$1))
;
}
return (new cljs.core.async.t21354(fn1,___$1,self__.meta21352,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t21351.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21351.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21351.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t21351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21353){var self__ = this;
var _21353__$1 = this;return self__.meta21352;
});
cljs.core.async.t21351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21353,meta21352__$1){var self__ = this;
var _21353__$1 = this;return (new cljs.core.async.t21351(self__.ch,self__.f,self__.map_LT_,meta21352__$1));
});
cljs.core.async.__GT_t21351 = (function __GT_t21351(ch__$1,f__$1,map_LT___$1,meta21352){return (new cljs.core.async.t21351(ch__$1,f__$1,map_LT___$1,meta21352));
});
}
return (new cljs.core.async.t21351(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21360 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21360 = (function (ch,f,map_GT_,meta21361){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21361 = meta21361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21360.cljs$lang$type = true;
cljs.core.async.t21360.cljs$lang$ctorStr = "cljs.core.async/t21360";
cljs.core.async.t21360.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t21360");
});
cljs.core.async.t21360.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t21360.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21360.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21362){var self__ = this;
var _21362__$1 = this;return self__.meta21361;
});
cljs.core.async.t21360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21362,meta21361__$1){var self__ = this;
var _21362__$1 = this;return (new cljs.core.async.t21360(self__.ch,self__.f,self__.map_GT_,meta21361__$1));
});
cljs.core.async.__GT_t21360 = (function __GT_t21360(ch__$1,f__$1,map_GT___$1,meta21361){return (new cljs.core.async.t21360(ch__$1,f__$1,map_GT___$1,meta21361));
});
}
return (new cljs.core.async.t21360(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21366 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21366 = (function (ch,p,filter_GT_,meta21367){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21367 = meta21367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21366.cljs$lang$type = true;
cljs.core.async.t21366.cljs$lang$ctorStr = "cljs.core.async/t21366";
cljs.core.async.t21366.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t21366");
});
cljs.core.async.t21366.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21366.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t21366.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21366.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21366.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21366.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21366.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t21366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21368){var self__ = this;
var _21368__$1 = this;return self__.meta21367;
});
cljs.core.async.t21366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21368,meta21367__$1){var self__ = this;
var _21368__$1 = this;return (new cljs.core.async.t21366(self__.ch,self__.p,self__.filter_GT_,meta21367__$1));
});
cljs.core.async.__GT_t21366 = (function __GT_t21366(ch__$1,p__$1,filter_GT___$1,meta21367){return (new cljs.core.async.t21366(ch__$1,p__$1,filter_GT___$1,meta21367));
});
}
return (new cljs.core.async.t21366(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___21451 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___21451,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___21451,out){
return (function (state_21430){var state_val_21431 = (state_21430[(1)]);if((state_val_21431 === (7)))
{var inst_21426 = (state_21430[(2)]);var state_21430__$1 = state_21430;var statearr_21432_21452 = state_21430__$1;(statearr_21432_21452[(2)] = inst_21426);
(statearr_21432_21452[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21431 === (1)))
{var state_21430__$1 = state_21430;var statearr_21433_21453 = state_21430__$1;(statearr_21433_21453[(2)] = null);
(statearr_21433_21453[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21431 === (4)))
{var inst_21412 = (state_21430[(7)]);var inst_21412__$1 = (state_21430[(2)]);var inst_21413 = (inst_21412__$1 == null);var state_21430__$1 = (function (){var statearr_21434 = state_21430;(statearr_21434[(7)] = inst_21412__$1);
return statearr_21434;
})();if(cljs.core.truth_(inst_21413))
{var statearr_21435_21454 = state_21430__$1;(statearr_21435_21454[(1)] = (5));
} else
{var statearr_21436_21455 = state_21430__$1;(statearr_21436_21455[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21431 === (6)))
{var inst_21412 = (state_21430[(7)]);var inst_21417 = p.call(null,inst_21412);var state_21430__$1 = state_21430;if(cljs.core.truth_(inst_21417))
{var statearr_21437_21456 = state_21430__$1;(statearr_21437_21456[(1)] = (8));
} else
{var statearr_21438_21457 = state_21430__$1;(statearr_21438_21457[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21431 === (3)))
{var inst_21428 = (state_21430[(2)]);var state_21430__$1 = state_21430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21430__$1,inst_21428);
} else
{if((state_val_21431 === (2)))
{var state_21430__$1 = state_21430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21430__$1,(4),ch);
} else
{if((state_val_21431 === (11)))
{var inst_21420 = (state_21430[(2)]);var state_21430__$1 = state_21430;var statearr_21439_21458 = state_21430__$1;(statearr_21439_21458[(2)] = inst_21420);
(statearr_21439_21458[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21431 === (9)))
{var state_21430__$1 = state_21430;var statearr_21440_21459 = state_21430__$1;(statearr_21440_21459[(2)] = null);
(statearr_21440_21459[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21431 === (5)))
{var inst_21415 = cljs.core.async.close_BANG_.call(null,out);var state_21430__$1 = state_21430;var statearr_21441_21460 = state_21430__$1;(statearr_21441_21460[(2)] = inst_21415);
(statearr_21441_21460[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21431 === (10)))
{var inst_21423 = (state_21430[(2)]);var state_21430__$1 = (function (){var statearr_21442 = state_21430;(statearr_21442[(8)] = inst_21423);
return statearr_21442;
})();var statearr_21443_21461 = state_21430__$1;(statearr_21443_21461[(2)] = null);
(statearr_21443_21461[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21431 === (8)))
{var inst_21412 = (state_21430[(7)]);var state_21430__$1 = state_21430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21430__$1,(11),out,inst_21412);
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
});})(c__6203__auto___21451,out))
;return ((function (switch__6188__auto__,c__6203__auto___21451,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_21447 = [null,null,null,null,null,null,null,null,null];(statearr_21447[(0)] = state_machine__6189__auto__);
(statearr_21447[(1)] = (1));
return statearr_21447;
});
var state_machine__6189__auto____1 = (function (state_21430){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_21430);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e21448){if((e21448 instanceof Object))
{var ex__6192__auto__ = e21448;var statearr_21449_21462 = state_21430;(statearr_21449_21462[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21430);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21448;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21463 = state_21430;
state_21430 = G__21463;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_21430){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_21430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___21451,out))
})();var state__6205__auto__ = (function (){var statearr_21450 = f__6204__auto__.call(null);(statearr_21450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___21451);
return statearr_21450;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___21451,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_21629){var state_val_21630 = (state_21629[(1)]);if((state_val_21630 === (7)))
{var inst_21625 = (state_21629[(2)]);var state_21629__$1 = state_21629;var statearr_21631_21672 = state_21629__$1;(statearr_21631_21672[(2)] = inst_21625);
(statearr_21631_21672[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (20)))
{var inst_21595 = (state_21629[(7)]);var inst_21606 = (state_21629[(2)]);var inst_21607 = cljs.core.next.call(null,inst_21595);var inst_21581 = inst_21607;var inst_21582 = null;var inst_21583 = (0);var inst_21584 = (0);var state_21629__$1 = (function (){var statearr_21632 = state_21629;(statearr_21632[(8)] = inst_21606);
(statearr_21632[(9)] = inst_21583);
(statearr_21632[(10)] = inst_21581);
(statearr_21632[(11)] = inst_21584);
(statearr_21632[(12)] = inst_21582);
return statearr_21632;
})();var statearr_21633_21673 = state_21629__$1;(statearr_21633_21673[(2)] = null);
(statearr_21633_21673[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (1)))
{var state_21629__$1 = state_21629;var statearr_21634_21674 = state_21629__$1;(statearr_21634_21674[(2)] = null);
(statearr_21634_21674[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (4)))
{var inst_21570 = (state_21629[(13)]);var inst_21570__$1 = (state_21629[(2)]);var inst_21571 = (inst_21570__$1 == null);var state_21629__$1 = (function (){var statearr_21635 = state_21629;(statearr_21635[(13)] = inst_21570__$1);
return statearr_21635;
})();if(cljs.core.truth_(inst_21571))
{var statearr_21636_21675 = state_21629__$1;(statearr_21636_21675[(1)] = (5));
} else
{var statearr_21637_21676 = state_21629__$1;(statearr_21637_21676[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (15)))
{var state_21629__$1 = state_21629;var statearr_21641_21677 = state_21629__$1;(statearr_21641_21677[(2)] = null);
(statearr_21641_21677[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (21)))
{var state_21629__$1 = state_21629;var statearr_21642_21678 = state_21629__$1;(statearr_21642_21678[(2)] = null);
(statearr_21642_21678[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (13)))
{var inst_21583 = (state_21629[(9)]);var inst_21581 = (state_21629[(10)]);var inst_21584 = (state_21629[(11)]);var inst_21582 = (state_21629[(12)]);var inst_21591 = (state_21629[(2)]);var inst_21592 = (inst_21584 + (1));var tmp21638 = inst_21583;var tmp21639 = inst_21581;var tmp21640 = inst_21582;var inst_21581__$1 = tmp21639;var inst_21582__$1 = tmp21640;var inst_21583__$1 = tmp21638;var inst_21584__$1 = inst_21592;var state_21629__$1 = (function (){var statearr_21643 = state_21629;(statearr_21643[(9)] = inst_21583__$1);
(statearr_21643[(10)] = inst_21581__$1);
(statearr_21643[(11)] = inst_21584__$1);
(statearr_21643[(14)] = inst_21591);
(statearr_21643[(12)] = inst_21582__$1);
return statearr_21643;
})();var statearr_21644_21679 = state_21629__$1;(statearr_21644_21679[(2)] = null);
(statearr_21644_21679[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (22)))
{var state_21629__$1 = state_21629;var statearr_21645_21680 = state_21629__$1;(statearr_21645_21680[(2)] = null);
(statearr_21645_21680[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (6)))
{var inst_21570 = (state_21629[(13)]);var inst_21579 = f.call(null,inst_21570);var inst_21580 = cljs.core.seq.call(null,inst_21579);var inst_21581 = inst_21580;var inst_21582 = null;var inst_21583 = (0);var inst_21584 = (0);var state_21629__$1 = (function (){var statearr_21646 = state_21629;(statearr_21646[(9)] = inst_21583);
(statearr_21646[(10)] = inst_21581);
(statearr_21646[(11)] = inst_21584);
(statearr_21646[(12)] = inst_21582);
return statearr_21646;
})();var statearr_21647_21681 = state_21629__$1;(statearr_21647_21681[(2)] = null);
(statearr_21647_21681[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (17)))
{var inst_21595 = (state_21629[(7)]);var inst_21599 = cljs.core.chunk_first.call(null,inst_21595);var inst_21600 = cljs.core.chunk_rest.call(null,inst_21595);var inst_21601 = cljs.core.count.call(null,inst_21599);var inst_21581 = inst_21600;var inst_21582 = inst_21599;var inst_21583 = inst_21601;var inst_21584 = (0);var state_21629__$1 = (function (){var statearr_21648 = state_21629;(statearr_21648[(9)] = inst_21583);
(statearr_21648[(10)] = inst_21581);
(statearr_21648[(11)] = inst_21584);
(statearr_21648[(12)] = inst_21582);
return statearr_21648;
})();var statearr_21649_21682 = state_21629__$1;(statearr_21649_21682[(2)] = null);
(statearr_21649_21682[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (3)))
{var inst_21627 = (state_21629[(2)]);var state_21629__$1 = state_21629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21629__$1,inst_21627);
} else
{if((state_val_21630 === (12)))
{var inst_21615 = (state_21629[(2)]);var state_21629__$1 = state_21629;var statearr_21650_21683 = state_21629__$1;(statearr_21650_21683[(2)] = inst_21615);
(statearr_21650_21683[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (2)))
{var state_21629__$1 = state_21629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21629__$1,(4),in$);
} else
{if((state_val_21630 === (23)))
{var inst_21623 = (state_21629[(2)]);var state_21629__$1 = state_21629;var statearr_21651_21684 = state_21629__$1;(statearr_21651_21684[(2)] = inst_21623);
(statearr_21651_21684[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (19)))
{var inst_21610 = (state_21629[(2)]);var state_21629__$1 = state_21629;var statearr_21652_21685 = state_21629__$1;(statearr_21652_21685[(2)] = inst_21610);
(statearr_21652_21685[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (11)))
{var inst_21581 = (state_21629[(10)]);var inst_21595 = (state_21629[(7)]);var inst_21595__$1 = cljs.core.seq.call(null,inst_21581);var state_21629__$1 = (function (){var statearr_21653 = state_21629;(statearr_21653[(7)] = inst_21595__$1);
return statearr_21653;
})();if(inst_21595__$1)
{var statearr_21654_21686 = state_21629__$1;(statearr_21654_21686[(1)] = (14));
} else
{var statearr_21655_21687 = state_21629__$1;(statearr_21655_21687[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (9)))
{var inst_21617 = (state_21629[(2)]);var inst_21618 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_21629__$1 = (function (){var statearr_21656 = state_21629;(statearr_21656[(15)] = inst_21617);
return statearr_21656;
})();if(cljs.core.truth_(inst_21618))
{var statearr_21657_21688 = state_21629__$1;(statearr_21657_21688[(1)] = (21));
} else
{var statearr_21658_21689 = state_21629__$1;(statearr_21658_21689[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (5)))
{var inst_21573 = cljs.core.async.close_BANG_.call(null,out);var state_21629__$1 = state_21629;var statearr_21659_21690 = state_21629__$1;(statearr_21659_21690[(2)] = inst_21573);
(statearr_21659_21690[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (14)))
{var inst_21595 = (state_21629[(7)]);var inst_21597 = cljs.core.chunked_seq_QMARK_.call(null,inst_21595);var state_21629__$1 = state_21629;if(inst_21597)
{var statearr_21660_21691 = state_21629__$1;(statearr_21660_21691[(1)] = (17));
} else
{var statearr_21661_21692 = state_21629__$1;(statearr_21661_21692[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (16)))
{var inst_21613 = (state_21629[(2)]);var state_21629__$1 = state_21629;var statearr_21662_21693 = state_21629__$1;(statearr_21662_21693[(2)] = inst_21613);
(statearr_21662_21693[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21630 === (10)))
{var inst_21584 = (state_21629[(11)]);var inst_21582 = (state_21629[(12)]);var inst_21589 = cljs.core._nth.call(null,inst_21582,inst_21584);var state_21629__$1 = state_21629;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21629__$1,(13),out,inst_21589);
} else
{if((state_val_21630 === (18)))
{var inst_21595 = (state_21629[(7)]);var inst_21604 = cljs.core.first.call(null,inst_21595);var state_21629__$1 = state_21629;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21629__$1,(20),out,inst_21604);
} else
{if((state_val_21630 === (8)))
{var inst_21583 = (state_21629[(9)]);var inst_21584 = (state_21629[(11)]);var inst_21586 = (inst_21584 < inst_21583);var inst_21587 = inst_21586;var state_21629__$1 = state_21629;if(cljs.core.truth_(inst_21587))
{var statearr_21663_21694 = state_21629__$1;(statearr_21663_21694[(1)] = (10));
} else
{var statearr_21664_21695 = state_21629__$1;(statearr_21664_21695[(1)] = (11));
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
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_21668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21668[(0)] = state_machine__6189__auto__);
(statearr_21668[(1)] = (1));
return statearr_21668;
});
var state_machine__6189__auto____1 = (function (state_21629){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_21629);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e21669){if((e21669 instanceof Object))
{var ex__6192__auto__ = e21669;var statearr_21670_21696 = state_21629;(statearr_21670_21696[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21629);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21669;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21697 = state_21629;
state_21629 = G__21697;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_21629){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_21629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_21671 = f__6204__auto__.call(null);(statearr_21671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_21671;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___21794 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___21794,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___21794,out){
return (function (state_21769){var state_val_21770 = (state_21769[(1)]);if((state_val_21770 === (7)))
{var inst_21764 = (state_21769[(2)]);var state_21769__$1 = state_21769;var statearr_21771_21795 = state_21769__$1;(statearr_21771_21795[(2)] = inst_21764);
(statearr_21771_21795[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21770 === (1)))
{var inst_21746 = null;var state_21769__$1 = (function (){var statearr_21772 = state_21769;(statearr_21772[(7)] = inst_21746);
return statearr_21772;
})();var statearr_21773_21796 = state_21769__$1;(statearr_21773_21796[(2)] = null);
(statearr_21773_21796[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21770 === (4)))
{var inst_21749 = (state_21769[(8)]);var inst_21749__$1 = (state_21769[(2)]);var inst_21750 = (inst_21749__$1 == null);var inst_21751 = cljs.core.not.call(null,inst_21750);var state_21769__$1 = (function (){var statearr_21774 = state_21769;(statearr_21774[(8)] = inst_21749__$1);
return statearr_21774;
})();if(inst_21751)
{var statearr_21775_21797 = state_21769__$1;(statearr_21775_21797[(1)] = (5));
} else
{var statearr_21776_21798 = state_21769__$1;(statearr_21776_21798[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21770 === (6)))
{var state_21769__$1 = state_21769;var statearr_21777_21799 = state_21769__$1;(statearr_21777_21799[(2)] = null);
(statearr_21777_21799[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21770 === (3)))
{var inst_21766 = (state_21769[(2)]);var inst_21767 = cljs.core.async.close_BANG_.call(null,out);var state_21769__$1 = (function (){var statearr_21778 = state_21769;(statearr_21778[(9)] = inst_21766);
return statearr_21778;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21769__$1,inst_21767);
} else
{if((state_val_21770 === (2)))
{var state_21769__$1 = state_21769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21769__$1,(4),ch);
} else
{if((state_val_21770 === (11)))
{var inst_21749 = (state_21769[(8)]);var inst_21758 = (state_21769[(2)]);var inst_21746 = inst_21749;var state_21769__$1 = (function (){var statearr_21779 = state_21769;(statearr_21779[(7)] = inst_21746);
(statearr_21779[(10)] = inst_21758);
return statearr_21779;
})();var statearr_21780_21800 = state_21769__$1;(statearr_21780_21800[(2)] = null);
(statearr_21780_21800[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21770 === (9)))
{var inst_21749 = (state_21769[(8)]);var state_21769__$1 = state_21769;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21769__$1,(11),out,inst_21749);
} else
{if((state_val_21770 === (5)))
{var inst_21746 = (state_21769[(7)]);var inst_21749 = (state_21769[(8)]);var inst_21753 = cljs.core._EQ_.call(null,inst_21749,inst_21746);var state_21769__$1 = state_21769;if(inst_21753)
{var statearr_21782_21801 = state_21769__$1;(statearr_21782_21801[(1)] = (8));
} else
{var statearr_21783_21802 = state_21769__$1;(statearr_21783_21802[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21770 === (10)))
{var inst_21761 = (state_21769[(2)]);var state_21769__$1 = state_21769;var statearr_21784_21803 = state_21769__$1;(statearr_21784_21803[(2)] = inst_21761);
(statearr_21784_21803[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21770 === (8)))
{var inst_21746 = (state_21769[(7)]);var tmp21781 = inst_21746;var inst_21746__$1 = tmp21781;var state_21769__$1 = (function (){var statearr_21785 = state_21769;(statearr_21785[(7)] = inst_21746__$1);
return statearr_21785;
})();var statearr_21786_21804 = state_21769__$1;(statearr_21786_21804[(2)] = null);
(statearr_21786_21804[(1)] = (2));
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
});})(c__6203__auto___21794,out))
;return ((function (switch__6188__auto__,c__6203__auto___21794,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_21790 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21790[(0)] = state_machine__6189__auto__);
(statearr_21790[(1)] = (1));
return statearr_21790;
});
var state_machine__6189__auto____1 = (function (state_21769){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_21769);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e21791){if((e21791 instanceof Object))
{var ex__6192__auto__ = e21791;var statearr_21792_21805 = state_21769;(statearr_21792_21805[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21769);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21791;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21806 = state_21769;
state_21769 = G__21806;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_21769){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_21769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___21794,out))
})();var state__6205__auto__ = (function (){var statearr_21793 = f__6204__auto__.call(null);(statearr_21793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___21794);
return statearr_21793;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___21794,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___21941 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___21941,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___21941,out){
return (function (state_21911){var state_val_21912 = (state_21911[(1)]);if((state_val_21912 === (7)))
{var inst_21907 = (state_21911[(2)]);var state_21911__$1 = state_21911;var statearr_21913_21942 = state_21911__$1;(statearr_21913_21942[(2)] = inst_21907);
(statearr_21913_21942[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21912 === (1)))
{var inst_21874 = (new Array(n));var inst_21875 = inst_21874;var inst_21876 = (0);var state_21911__$1 = (function (){var statearr_21914 = state_21911;(statearr_21914[(7)] = inst_21876);
(statearr_21914[(8)] = inst_21875);
return statearr_21914;
})();var statearr_21915_21943 = state_21911__$1;(statearr_21915_21943[(2)] = null);
(statearr_21915_21943[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21912 === (4)))
{var inst_21879 = (state_21911[(9)]);var inst_21879__$1 = (state_21911[(2)]);var inst_21880 = (inst_21879__$1 == null);var inst_21881 = cljs.core.not.call(null,inst_21880);var state_21911__$1 = (function (){var statearr_21916 = state_21911;(statearr_21916[(9)] = inst_21879__$1);
return statearr_21916;
})();if(inst_21881)
{var statearr_21917_21944 = state_21911__$1;(statearr_21917_21944[(1)] = (5));
} else
{var statearr_21918_21945 = state_21911__$1;(statearr_21918_21945[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21912 === (15)))
{var inst_21901 = (state_21911[(2)]);var state_21911__$1 = state_21911;var statearr_21919_21946 = state_21911__$1;(statearr_21919_21946[(2)] = inst_21901);
(statearr_21919_21946[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21912 === (13)))
{var state_21911__$1 = state_21911;var statearr_21920_21947 = state_21911__$1;(statearr_21920_21947[(2)] = null);
(statearr_21920_21947[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21912 === (6)))
{var inst_21876 = (state_21911[(7)]);var inst_21897 = (inst_21876 > (0));var state_21911__$1 = state_21911;if(cljs.core.truth_(inst_21897))
{var statearr_21921_21948 = state_21911__$1;(statearr_21921_21948[(1)] = (12));
} else
{var statearr_21922_21949 = state_21911__$1;(statearr_21922_21949[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21912 === (3)))
{var inst_21909 = (state_21911[(2)]);var state_21911__$1 = state_21911;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21911__$1,inst_21909);
} else
{if((state_val_21912 === (12)))
{var inst_21875 = (state_21911[(8)]);var inst_21899 = cljs.core.vec.call(null,inst_21875);var state_21911__$1 = state_21911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21911__$1,(15),out,inst_21899);
} else
{if((state_val_21912 === (2)))
{var state_21911__$1 = state_21911;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21911__$1,(4),ch);
} else
{if((state_val_21912 === (11)))
{var inst_21891 = (state_21911[(2)]);var inst_21892 = (new Array(n));var inst_21875 = inst_21892;var inst_21876 = (0);var state_21911__$1 = (function (){var statearr_21923 = state_21911;(statearr_21923[(7)] = inst_21876);
(statearr_21923[(10)] = inst_21891);
(statearr_21923[(8)] = inst_21875);
return statearr_21923;
})();var statearr_21924_21950 = state_21911__$1;(statearr_21924_21950[(2)] = null);
(statearr_21924_21950[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21912 === (9)))
{var inst_21875 = (state_21911[(8)]);var inst_21889 = cljs.core.vec.call(null,inst_21875);var state_21911__$1 = state_21911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21911__$1,(11),out,inst_21889);
} else
{if((state_val_21912 === (5)))
{var inst_21876 = (state_21911[(7)]);var inst_21875 = (state_21911[(8)]);var inst_21879 = (state_21911[(9)]);var inst_21884 = (state_21911[(11)]);var inst_21883 = (inst_21875[inst_21876] = inst_21879);var inst_21884__$1 = (inst_21876 + (1));var inst_21885 = (inst_21884__$1 < n);var state_21911__$1 = (function (){var statearr_21925 = state_21911;(statearr_21925[(12)] = inst_21883);
(statearr_21925[(11)] = inst_21884__$1);
return statearr_21925;
})();if(cljs.core.truth_(inst_21885))
{var statearr_21926_21951 = state_21911__$1;(statearr_21926_21951[(1)] = (8));
} else
{var statearr_21927_21952 = state_21911__$1;(statearr_21927_21952[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21912 === (14)))
{var inst_21904 = (state_21911[(2)]);var inst_21905 = cljs.core.async.close_BANG_.call(null,out);var state_21911__$1 = (function (){var statearr_21929 = state_21911;(statearr_21929[(13)] = inst_21904);
return statearr_21929;
})();var statearr_21930_21953 = state_21911__$1;(statearr_21930_21953[(2)] = inst_21905);
(statearr_21930_21953[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21912 === (10)))
{var inst_21895 = (state_21911[(2)]);var state_21911__$1 = state_21911;var statearr_21931_21954 = state_21911__$1;(statearr_21931_21954[(2)] = inst_21895);
(statearr_21931_21954[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21912 === (8)))
{var inst_21875 = (state_21911[(8)]);var inst_21884 = (state_21911[(11)]);var tmp21928 = inst_21875;var inst_21875__$1 = tmp21928;var inst_21876 = inst_21884;var state_21911__$1 = (function (){var statearr_21932 = state_21911;(statearr_21932[(7)] = inst_21876);
(statearr_21932[(8)] = inst_21875__$1);
return statearr_21932;
})();var statearr_21933_21955 = state_21911__$1;(statearr_21933_21955[(2)] = null);
(statearr_21933_21955[(1)] = (2));
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
});})(c__6203__auto___21941,out))
;return ((function (switch__6188__auto__,c__6203__auto___21941,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_21937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21937[(0)] = state_machine__6189__auto__);
(statearr_21937[(1)] = (1));
return statearr_21937;
});
var state_machine__6189__auto____1 = (function (state_21911){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_21911);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e21938){if((e21938 instanceof Object))
{var ex__6192__auto__ = e21938;var statearr_21939_21956 = state_21911;(statearr_21939_21956[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21911);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21938;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21957 = state_21911;
state_21911 = G__21957;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_21911){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_21911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___21941,out))
})();var state__6205__auto__ = (function (){var statearr_21940 = f__6204__auto__.call(null);(statearr_21940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___21941);
return statearr_21940;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___21941,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___22100 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___22100,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___22100,out){
return (function (state_22070){var state_val_22071 = (state_22070[(1)]);if((state_val_22071 === (7)))
{var inst_22066 = (state_22070[(2)]);var state_22070__$1 = state_22070;var statearr_22072_22101 = state_22070__$1;(statearr_22072_22101[(2)] = inst_22066);
(statearr_22072_22101[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (1)))
{var inst_22029 = [];var inst_22030 = inst_22029;var inst_22031 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_22070__$1 = (function (){var statearr_22073 = state_22070;(statearr_22073[(7)] = inst_22030);
(statearr_22073[(8)] = inst_22031);
return statearr_22073;
})();var statearr_22074_22102 = state_22070__$1;(statearr_22074_22102[(2)] = null);
(statearr_22074_22102[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (4)))
{var inst_22034 = (state_22070[(9)]);var inst_22034__$1 = (state_22070[(2)]);var inst_22035 = (inst_22034__$1 == null);var inst_22036 = cljs.core.not.call(null,inst_22035);var state_22070__$1 = (function (){var statearr_22075 = state_22070;(statearr_22075[(9)] = inst_22034__$1);
return statearr_22075;
})();if(inst_22036)
{var statearr_22076_22103 = state_22070__$1;(statearr_22076_22103[(1)] = (5));
} else
{var statearr_22077_22104 = state_22070__$1;(statearr_22077_22104[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (15)))
{var inst_22060 = (state_22070[(2)]);var state_22070__$1 = state_22070;var statearr_22078_22105 = state_22070__$1;(statearr_22078_22105[(2)] = inst_22060);
(statearr_22078_22105[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (13)))
{var state_22070__$1 = state_22070;var statearr_22079_22106 = state_22070__$1;(statearr_22079_22106[(2)] = null);
(statearr_22079_22106[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (6)))
{var inst_22030 = (state_22070[(7)]);var inst_22055 = inst_22030.length;var inst_22056 = (inst_22055 > (0));var state_22070__$1 = state_22070;if(cljs.core.truth_(inst_22056))
{var statearr_22080_22107 = state_22070__$1;(statearr_22080_22107[(1)] = (12));
} else
{var statearr_22081_22108 = state_22070__$1;(statearr_22081_22108[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (3)))
{var inst_22068 = (state_22070[(2)]);var state_22070__$1 = state_22070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22070__$1,inst_22068);
} else
{if((state_val_22071 === (12)))
{var inst_22030 = (state_22070[(7)]);var inst_22058 = cljs.core.vec.call(null,inst_22030);var state_22070__$1 = state_22070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22070__$1,(15),out,inst_22058);
} else
{if((state_val_22071 === (2)))
{var state_22070__$1 = state_22070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22070__$1,(4),ch);
} else
{if((state_val_22071 === (11)))
{var inst_22034 = (state_22070[(9)]);var inst_22038 = (state_22070[(10)]);var inst_22048 = (state_22070[(2)]);var inst_22049 = [];var inst_22050 = inst_22049.push(inst_22034);var inst_22030 = inst_22049;var inst_22031 = inst_22038;var state_22070__$1 = (function (){var statearr_22082 = state_22070;(statearr_22082[(11)] = inst_22050);
(statearr_22082[(7)] = inst_22030);
(statearr_22082[(12)] = inst_22048);
(statearr_22082[(8)] = inst_22031);
return statearr_22082;
})();var statearr_22083_22109 = state_22070__$1;(statearr_22083_22109[(2)] = null);
(statearr_22083_22109[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (9)))
{var inst_22030 = (state_22070[(7)]);var inst_22046 = cljs.core.vec.call(null,inst_22030);var state_22070__$1 = state_22070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22070__$1,(11),out,inst_22046);
} else
{if((state_val_22071 === (5)))
{var inst_22034 = (state_22070[(9)]);var inst_22038 = (state_22070[(10)]);var inst_22031 = (state_22070[(8)]);var inst_22038__$1 = f.call(null,inst_22034);var inst_22039 = cljs.core._EQ_.call(null,inst_22038__$1,inst_22031);var inst_22040 = cljs.core.keyword_identical_QMARK_.call(null,inst_22031,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_22041 = (inst_22039) || (inst_22040);var state_22070__$1 = (function (){var statearr_22084 = state_22070;(statearr_22084[(10)] = inst_22038__$1);
return statearr_22084;
})();if(cljs.core.truth_(inst_22041))
{var statearr_22085_22110 = state_22070__$1;(statearr_22085_22110[(1)] = (8));
} else
{var statearr_22086_22111 = state_22070__$1;(statearr_22086_22111[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (14)))
{var inst_22063 = (state_22070[(2)]);var inst_22064 = cljs.core.async.close_BANG_.call(null,out);var state_22070__$1 = (function (){var statearr_22088 = state_22070;(statearr_22088[(13)] = inst_22063);
return statearr_22088;
})();var statearr_22089_22112 = state_22070__$1;(statearr_22089_22112[(2)] = inst_22064);
(statearr_22089_22112[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (10)))
{var inst_22053 = (state_22070[(2)]);var state_22070__$1 = state_22070;var statearr_22090_22113 = state_22070__$1;(statearr_22090_22113[(2)] = inst_22053);
(statearr_22090_22113[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22071 === (8)))
{var inst_22034 = (state_22070[(9)]);var inst_22030 = (state_22070[(7)]);var inst_22038 = (state_22070[(10)]);var inst_22043 = inst_22030.push(inst_22034);var tmp22087 = inst_22030;var inst_22030__$1 = tmp22087;var inst_22031 = inst_22038;var state_22070__$1 = (function (){var statearr_22091 = state_22070;(statearr_22091[(7)] = inst_22030__$1);
(statearr_22091[(14)] = inst_22043);
(statearr_22091[(8)] = inst_22031);
return statearr_22091;
})();var statearr_22092_22114 = state_22070__$1;(statearr_22092_22114[(2)] = null);
(statearr_22092_22114[(1)] = (2));
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
});})(c__6203__auto___22100,out))
;return ((function (switch__6188__auto__,c__6203__auto___22100,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_22096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22096[(0)] = state_machine__6189__auto__);
(statearr_22096[(1)] = (1));
return statearr_22096;
});
var state_machine__6189__auto____1 = (function (state_22070){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_22070);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e22097){if((e22097 instanceof Object))
{var ex__6192__auto__ = e22097;var statearr_22098_22115 = state_22070;(statearr_22098_22115[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22070);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e22097;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22116 = state_22070;
state_22070 = G__22116;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_22070){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_22070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___22100,out))
})();var state__6205__auto__ = (function (){var statearr_22099 = f__6204__auto__.call(null);(statearr_22099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___22100);
return statearr_22099;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___22100,out))
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
