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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t18706 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18706 = (function (f,fn_handler,meta18707){
this.f = f;
this.fn_handler = fn_handler;
this.meta18707 = meta18707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18706.cljs$lang$type = true;
cljs.core.async.t18706.cljs$lang$ctorStr = "cljs.core.async/t18706";
cljs.core.async.t18706.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t18706");
});
cljs.core.async.t18706.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18706.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t18706.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t18706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18708){var self__ = this;
var _18708__$1 = this;return self__.meta18707;
});
cljs.core.async.t18706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18708,meta18707__$1){var self__ = this;
var _18708__$1 = this;return (new cljs.core.async.t18706(self__.f,self__.fn_handler,meta18707__$1));
});
cljs.core.async.__GT_t18706 = (function __GT_t18706(f__$1,fn_handler__$1,meta18707){return (new cljs.core.async.t18706(f__$1,fn_handler__$1,meta18707));
});
}
return (new cljs.core.async.t18706(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__18710 = buff;if(G__18710)
{var bit__4201__auto__ = null;if(cljs.core.truth_((function (){var or__3551__auto__ = bit__4201__auto__;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return G__18710.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__18710.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18710);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18710);
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
{var val_18711 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18711);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_18711,ret){
return (function (){return fn1.call(null,val_18711);
});})(val_18711,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4407__auto___18712 = n;var x_18713 = (0);while(true){
if((x_18713 < n__4407__auto___18712))
{(a[x_18713] = (0));
{
var G__18714 = (x_18713 + (1));
x_18713 = G__18714;
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
var G__18715 = (i + (1));
i = G__18715;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t18719 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18719 = (function (flag,alt_flag,meta18720){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18720 = meta18720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18719.cljs$lang$type = true;
cljs.core.async.t18719.cljs$lang$ctorStr = "cljs.core.async/t18719";
cljs.core.async.t18719.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t18719");
});})(flag))
;
cljs.core.async.t18719.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t18719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t18719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18721){var self__ = this;
var _18721__$1 = this;return self__.meta18720;
});})(flag))
;
cljs.core.async.t18719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18721,meta18720__$1){var self__ = this;
var _18721__$1 = this;return (new cljs.core.async.t18719(self__.flag,self__.alt_flag,meta18720__$1));
});})(flag))
;
cljs.core.async.__GT_t18719 = ((function (flag){
return (function __GT_t18719(flag__$1,alt_flag__$1,meta18720){return (new cljs.core.async.t18719(flag__$1,alt_flag__$1,meta18720));
});})(flag))
;
}
return (new cljs.core.async.t18719(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t18725 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18725 = (function (cb,flag,alt_handler,meta18726){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18726 = meta18726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18725.cljs$lang$type = true;
cljs.core.async.t18725.cljs$lang$ctorStr = "cljs.core.async/t18725";
cljs.core.async.t18725.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t18725");
});
cljs.core.async.t18725.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t18725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t18725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18727){var self__ = this;
var _18727__$1 = this;return self__.meta18726;
});
cljs.core.async.t18725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18727,meta18726__$1){var self__ = this;
var _18727__$1 = this;return (new cljs.core.async.t18725(self__.cb,self__.flag,self__.alt_handler,meta18726__$1));
});
cljs.core.async.__GT_t18725 = (function __GT_t18725(cb__$1,flag__$1,alt_handler__$1,meta18726){return (new cljs.core.async.t18725(cb__$1,flag__$1,alt_handler__$1,meta18726));
});
}
return (new cljs.core.async.t18725(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18728_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18728_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18729_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18729_SHARP_,port], null));
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
var G__18730 = (i + (1));
i = G__18730;
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
var alts_BANG___delegate = function (ports,p__18731){var map__18733 = p__18731;var map__18733__$1 = ((cljs.core.seq_QMARK_.call(null,map__18733))?cljs.core.apply.call(null,cljs.core.hash_map,map__18733):map__18733);var opts = map__18733__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__18731 = null;if (arguments.length > 1) {
  p__18731 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__18731);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18734){
var ports = cljs.core.first(arglist__18734);
var p__18731 = cljs.core.rest(arglist__18734);
return alts_BANG___delegate(ports,p__18731);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6203__auto___18829 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___18829){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___18829){
return (function (state_18805){var state_val_18806 = (state_18805[(1)]);if((state_val_18806 === (7)))
{var inst_18801 = (state_18805[(2)]);var state_18805__$1 = state_18805;var statearr_18807_18830 = state_18805__$1;(statearr_18807_18830[(2)] = inst_18801);
(statearr_18807_18830[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18806 === (1)))
{var state_18805__$1 = state_18805;var statearr_18808_18831 = state_18805__$1;(statearr_18808_18831[(2)] = null);
(statearr_18808_18831[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18806 === (4)))
{var inst_18784 = (state_18805[(7)]);var inst_18784__$1 = (state_18805[(2)]);var inst_18785 = (inst_18784__$1 == null);var state_18805__$1 = (function (){var statearr_18809 = state_18805;(statearr_18809[(7)] = inst_18784__$1);
return statearr_18809;
})();if(cljs.core.truth_(inst_18785))
{var statearr_18810_18832 = state_18805__$1;(statearr_18810_18832[(1)] = (5));
} else
{var statearr_18811_18833 = state_18805__$1;(statearr_18811_18833[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18806 === (13)))
{var state_18805__$1 = state_18805;var statearr_18812_18834 = state_18805__$1;(statearr_18812_18834[(2)] = null);
(statearr_18812_18834[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18806 === (6)))
{var inst_18784 = (state_18805[(7)]);var state_18805__$1 = state_18805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18805__$1,(11),to,inst_18784);
} else
{if((state_val_18806 === (3)))
{var inst_18803 = (state_18805[(2)]);var state_18805__$1 = state_18805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18805__$1,inst_18803);
} else
{if((state_val_18806 === (12)))
{var state_18805__$1 = state_18805;var statearr_18813_18835 = state_18805__$1;(statearr_18813_18835[(2)] = null);
(statearr_18813_18835[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18806 === (2)))
{var state_18805__$1 = state_18805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18805__$1,(4),from);
} else
{if((state_val_18806 === (11)))
{var inst_18794 = (state_18805[(2)]);var state_18805__$1 = state_18805;if(cljs.core.truth_(inst_18794))
{var statearr_18814_18836 = state_18805__$1;(statearr_18814_18836[(1)] = (12));
} else
{var statearr_18815_18837 = state_18805__$1;(statearr_18815_18837[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18806 === (9)))
{var state_18805__$1 = state_18805;var statearr_18816_18838 = state_18805__$1;(statearr_18816_18838[(2)] = null);
(statearr_18816_18838[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18806 === (5)))
{var state_18805__$1 = state_18805;if(cljs.core.truth_(close_QMARK_))
{var statearr_18817_18839 = state_18805__$1;(statearr_18817_18839[(1)] = (8));
} else
{var statearr_18818_18840 = state_18805__$1;(statearr_18818_18840[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18806 === (14)))
{var inst_18799 = (state_18805[(2)]);var state_18805__$1 = state_18805;var statearr_18819_18841 = state_18805__$1;(statearr_18819_18841[(2)] = inst_18799);
(statearr_18819_18841[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18806 === (10)))
{var inst_18791 = (state_18805[(2)]);var state_18805__$1 = state_18805;var statearr_18820_18842 = state_18805__$1;(statearr_18820_18842[(2)] = inst_18791);
(statearr_18820_18842[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18806 === (8)))
{var inst_18788 = cljs.core.async.close_BANG_.call(null,to);var state_18805__$1 = state_18805;var statearr_18821_18843 = state_18805__$1;(statearr_18821_18843[(2)] = inst_18788);
(statearr_18821_18843[(1)] = (10));
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
});})(c__6203__auto___18829))
;return ((function (switch__6188__auto__,c__6203__auto___18829){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_18825 = [null,null,null,null,null,null,null,null];(statearr_18825[(0)] = state_machine__6189__auto__);
(statearr_18825[(1)] = (1));
return statearr_18825;
});
var state_machine__6189__auto____1 = (function (state_18805){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_18805);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e18826){if((e18826 instanceof Object))
{var ex__6192__auto__ = e18826;var statearr_18827_18844 = state_18805;(statearr_18827_18844[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18805);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18845 = state_18805;
state_18805 = G__18845;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_18805){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_18805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___18829))
})();var state__6205__auto__ = (function (){var statearr_18828 = f__6204__auto__.call(null);(statearr_18828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___18829);
return statearr_18828;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___18829))
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
return (function (p__19028){var vec__19029 = p__19028;var v = cljs.core.nth.call(null,vec__19029,(0),null);var p = cljs.core.nth.call(null,vec__19029,(1),null);var job = vec__19029;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6203__auto___19210 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___19210,res,vec__19029,v,p,job,jobs,results){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___19210,res,vec__19029,v,p,job,jobs,results){
return (function (state_19034){var state_val_19035 = (state_19034[(1)]);if((state_val_19035 === (2)))
{var inst_19031 = (state_19034[(2)]);var inst_19032 = cljs.core.async.close_BANG_.call(null,res);var state_19034__$1 = (function (){var statearr_19036 = state_19034;(statearr_19036[(7)] = inst_19031);
return statearr_19036;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19034__$1,inst_19032);
} else
{if((state_val_19035 === (1)))
{var state_19034__$1 = state_19034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19034__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6203__auto___19210,res,vec__19029,v,p,job,jobs,results))
;return ((function (switch__6188__auto__,c__6203__auto___19210,res,vec__19029,v,p,job,jobs,results){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19040 = [null,null,null,null,null,null,null,null];(statearr_19040[(0)] = state_machine__6189__auto__);
(statearr_19040[(1)] = (1));
return statearr_19040;
});
var state_machine__6189__auto____1 = (function (state_19034){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19034);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19041){if((e19041 instanceof Object))
{var ex__6192__auto__ = e19041;var statearr_19042_19211 = state_19034;(statearr_19042_19211[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19034);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19212 = state_19034;
state_19034 = G__19212;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19034){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___19210,res,vec__19029,v,p,job,jobs,results))
})();var state__6205__auto__ = (function (){var statearr_19043 = f__6204__auto__.call(null);(statearr_19043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___19210);
return statearr_19043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___19210,res,vec__19029,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__19044){var vec__19045 = p__19044;var v = cljs.core.nth.call(null,vec__19045,(0),null);var p = cljs.core.nth.call(null,vec__19045,(1),null);var job = vec__19045;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4407__auto___19213 = n;var __19214 = (0);while(true){
if((__19214 < n__4407__auto___19213))
{var G__19046_19215 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__19046_19215) {
case "async":
var c__6203__auto___19217 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__19214,c__6203__auto___19217,G__19046_19215,n__4407__auto___19213,jobs,results,process,async){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (__19214,c__6203__auto___19217,G__19046_19215,n__4407__auto___19213,jobs,results,process,async){
return (function (state_19059){var state_val_19060 = (state_19059[(1)]);if((state_val_19060 === (7)))
{var inst_19055 = (state_19059[(2)]);var state_19059__$1 = state_19059;var statearr_19061_19218 = state_19059__$1;(statearr_19061_19218[(2)] = inst_19055);
(statearr_19061_19218[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19060 === (6)))
{var state_19059__$1 = state_19059;var statearr_19062_19219 = state_19059__$1;(statearr_19062_19219[(2)] = null);
(statearr_19062_19219[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19060 === (5)))
{var state_19059__$1 = state_19059;var statearr_19063_19220 = state_19059__$1;(statearr_19063_19220[(2)] = null);
(statearr_19063_19220[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19060 === (4)))
{var inst_19049 = (state_19059[(2)]);var inst_19050 = async.call(null,inst_19049);var state_19059__$1 = state_19059;if(cljs.core.truth_(inst_19050))
{var statearr_19064_19221 = state_19059__$1;(statearr_19064_19221[(1)] = (5));
} else
{var statearr_19065_19222 = state_19059__$1;(statearr_19065_19222[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19060 === (3)))
{var inst_19057 = (state_19059[(2)]);var state_19059__$1 = state_19059;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19059__$1,inst_19057);
} else
{if((state_val_19060 === (2)))
{var state_19059__$1 = state_19059;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19059__$1,(4),jobs);
} else
{if((state_val_19060 === (1)))
{var state_19059__$1 = state_19059;var statearr_19066_19223 = state_19059__$1;(statearr_19066_19223[(2)] = null);
(statearr_19066_19223[(1)] = (2));
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
});})(__19214,c__6203__auto___19217,G__19046_19215,n__4407__auto___19213,jobs,results,process,async))
;return ((function (__19214,switch__6188__auto__,c__6203__auto___19217,G__19046_19215,n__4407__auto___19213,jobs,results,process,async){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19070 = [null,null,null,null,null,null,null];(statearr_19070[(0)] = state_machine__6189__auto__);
(statearr_19070[(1)] = (1));
return statearr_19070;
});
var state_machine__6189__auto____1 = (function (state_19059){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19059);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19071){if((e19071 instanceof Object))
{var ex__6192__auto__ = e19071;var statearr_19072_19224 = state_19059;(statearr_19072_19224[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19059);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19071;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19225 = state_19059;
state_19059 = G__19225;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19059){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(__19214,switch__6188__auto__,c__6203__auto___19217,G__19046_19215,n__4407__auto___19213,jobs,results,process,async))
})();var state__6205__auto__ = (function (){var statearr_19073 = f__6204__auto__.call(null);(statearr_19073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___19217);
return statearr_19073;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(__19214,c__6203__auto___19217,G__19046_19215,n__4407__auto___19213,jobs,results,process,async))
);

break;
case "compute":
var c__6203__auto___19226 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__19214,c__6203__auto___19226,G__19046_19215,n__4407__auto___19213,jobs,results,process,async){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (__19214,c__6203__auto___19226,G__19046_19215,n__4407__auto___19213,jobs,results,process,async){
return (function (state_19086){var state_val_19087 = (state_19086[(1)]);if((state_val_19087 === (7)))
{var inst_19082 = (state_19086[(2)]);var state_19086__$1 = state_19086;var statearr_19088_19227 = state_19086__$1;(statearr_19088_19227[(2)] = inst_19082);
(statearr_19088_19227[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19087 === (6)))
{var state_19086__$1 = state_19086;var statearr_19089_19228 = state_19086__$1;(statearr_19089_19228[(2)] = null);
(statearr_19089_19228[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19087 === (5)))
{var state_19086__$1 = state_19086;var statearr_19090_19229 = state_19086__$1;(statearr_19090_19229[(2)] = null);
(statearr_19090_19229[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19087 === (4)))
{var inst_19076 = (state_19086[(2)]);var inst_19077 = process.call(null,inst_19076);var state_19086__$1 = state_19086;if(cljs.core.truth_(inst_19077))
{var statearr_19091_19230 = state_19086__$1;(statearr_19091_19230[(1)] = (5));
} else
{var statearr_19092_19231 = state_19086__$1;(statearr_19092_19231[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19087 === (3)))
{var inst_19084 = (state_19086[(2)]);var state_19086__$1 = state_19086;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19086__$1,inst_19084);
} else
{if((state_val_19087 === (2)))
{var state_19086__$1 = state_19086;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19086__$1,(4),jobs);
} else
{if((state_val_19087 === (1)))
{var state_19086__$1 = state_19086;var statearr_19093_19232 = state_19086__$1;(statearr_19093_19232[(2)] = null);
(statearr_19093_19232[(1)] = (2));
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
});})(__19214,c__6203__auto___19226,G__19046_19215,n__4407__auto___19213,jobs,results,process,async))
;return ((function (__19214,switch__6188__auto__,c__6203__auto___19226,G__19046_19215,n__4407__auto___19213,jobs,results,process,async){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19097 = [null,null,null,null,null,null,null];(statearr_19097[(0)] = state_machine__6189__auto__);
(statearr_19097[(1)] = (1));
return statearr_19097;
});
var state_machine__6189__auto____1 = (function (state_19086){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19086);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19098){if((e19098 instanceof Object))
{var ex__6192__auto__ = e19098;var statearr_19099_19233 = state_19086;(statearr_19099_19233[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19086);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19098;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19234 = state_19086;
state_19086 = G__19234;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19086){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(__19214,switch__6188__auto__,c__6203__auto___19226,G__19046_19215,n__4407__auto___19213,jobs,results,process,async))
})();var state__6205__auto__ = (function (){var statearr_19100 = f__6204__auto__.call(null);(statearr_19100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___19226);
return statearr_19100;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(__19214,c__6203__auto___19226,G__19046_19215,n__4407__auto___19213,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__19235 = (__19214 + (1));
__19214 = G__19235;
continue;
}
} else
{}
break;
}
var c__6203__auto___19236 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___19236,jobs,results,process,async){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___19236,jobs,results,process,async){
return (function (state_19121){var state_val_19122 = (state_19121[(1)]);if((state_val_19122 === (9)))
{var inst_19114 = (state_19121[(2)]);var state_19121__$1 = (function (){var statearr_19123 = state_19121;(statearr_19123[(7)] = inst_19114);
return statearr_19123;
})();var statearr_19124_19237 = state_19121__$1;(statearr_19124_19237[(2)] = null);
(statearr_19124_19237[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19122 === (8)))
{var inst_19108 = (state_19121[(8)]);var inst_19112 = (state_19121[(2)]);var state_19121__$1 = (function (){var statearr_19125 = state_19121;(statearr_19125[(9)] = inst_19112);
return statearr_19125;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19121__$1,(9),results,inst_19108);
} else
{if((state_val_19122 === (7)))
{var inst_19117 = (state_19121[(2)]);var state_19121__$1 = state_19121;var statearr_19126_19238 = state_19121__$1;(statearr_19126_19238[(2)] = inst_19117);
(statearr_19126_19238[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19122 === (6)))
{var inst_19103 = (state_19121[(10)]);var inst_19108 = (state_19121[(8)]);var inst_19108__$1 = cljs.core.async.chan.call(null,(1));var inst_19109 = [inst_19103,inst_19108__$1];var inst_19110 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_19109,null));var state_19121__$1 = (function (){var statearr_19127 = state_19121;(statearr_19127[(8)] = inst_19108__$1);
return statearr_19127;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19121__$1,(8),jobs,inst_19110);
} else
{if((state_val_19122 === (5)))
{var inst_19106 = cljs.core.async.close_BANG_.call(null,jobs);var state_19121__$1 = state_19121;var statearr_19128_19239 = state_19121__$1;(statearr_19128_19239[(2)] = inst_19106);
(statearr_19128_19239[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19122 === (4)))
{var inst_19103 = (state_19121[(10)]);var inst_19103__$1 = (state_19121[(2)]);var inst_19104 = (inst_19103__$1 == null);var state_19121__$1 = (function (){var statearr_19129 = state_19121;(statearr_19129[(10)] = inst_19103__$1);
return statearr_19129;
})();if(cljs.core.truth_(inst_19104))
{var statearr_19130_19240 = state_19121__$1;(statearr_19130_19240[(1)] = (5));
} else
{var statearr_19131_19241 = state_19121__$1;(statearr_19131_19241[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19122 === (3)))
{var inst_19119 = (state_19121[(2)]);var state_19121__$1 = state_19121;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19121__$1,inst_19119);
} else
{if((state_val_19122 === (2)))
{var state_19121__$1 = state_19121;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19121__$1,(4),from);
} else
{if((state_val_19122 === (1)))
{var state_19121__$1 = state_19121;var statearr_19132_19242 = state_19121__$1;(statearr_19132_19242[(2)] = null);
(statearr_19132_19242[(1)] = (2));
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
});})(c__6203__auto___19236,jobs,results,process,async))
;return ((function (switch__6188__auto__,c__6203__auto___19236,jobs,results,process,async){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19136 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19136[(0)] = state_machine__6189__auto__);
(statearr_19136[(1)] = (1));
return statearr_19136;
});
var state_machine__6189__auto____1 = (function (state_19121){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19121);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19137){if((e19137 instanceof Object))
{var ex__6192__auto__ = e19137;var statearr_19138_19243 = state_19121;(statearr_19138_19243[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19121);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19137;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19244 = state_19121;
state_19121 = G__19244;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19121){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___19236,jobs,results,process,async))
})();var state__6205__auto__ = (function (){var statearr_19139 = f__6204__auto__.call(null);(statearr_19139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___19236);
return statearr_19139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___19236,jobs,results,process,async))
);
var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,jobs,results,process,async){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,jobs,results,process,async){
return (function (state_19177){var state_val_19178 = (state_19177[(1)]);if((state_val_19178 === (7)))
{var inst_19173 = (state_19177[(2)]);var state_19177__$1 = state_19177;var statearr_19179_19245 = state_19177__$1;(statearr_19179_19245[(2)] = inst_19173);
(statearr_19179_19245[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (20)))
{var state_19177__$1 = state_19177;var statearr_19180_19246 = state_19177__$1;(statearr_19180_19246[(2)] = null);
(statearr_19180_19246[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (1)))
{var state_19177__$1 = state_19177;var statearr_19181_19247 = state_19177__$1;(statearr_19181_19247[(2)] = null);
(statearr_19181_19247[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (4)))
{var inst_19142 = (state_19177[(7)]);var inst_19142__$1 = (state_19177[(2)]);var inst_19143 = (inst_19142__$1 == null);var state_19177__$1 = (function (){var statearr_19182 = state_19177;(statearr_19182[(7)] = inst_19142__$1);
return statearr_19182;
})();if(cljs.core.truth_(inst_19143))
{var statearr_19183_19248 = state_19177__$1;(statearr_19183_19248[(1)] = (5));
} else
{var statearr_19184_19249 = state_19177__$1;(statearr_19184_19249[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (15)))
{var inst_19155 = (state_19177[(8)]);var state_19177__$1 = state_19177;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19177__$1,(18),to,inst_19155);
} else
{if((state_val_19178 === (21)))
{var inst_19168 = (state_19177[(2)]);var state_19177__$1 = state_19177;var statearr_19185_19250 = state_19177__$1;(statearr_19185_19250[(2)] = inst_19168);
(statearr_19185_19250[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (13)))
{var inst_19170 = (state_19177[(2)]);var state_19177__$1 = (function (){var statearr_19186 = state_19177;(statearr_19186[(9)] = inst_19170);
return statearr_19186;
})();var statearr_19187_19251 = state_19177__$1;(statearr_19187_19251[(2)] = null);
(statearr_19187_19251[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (6)))
{var inst_19142 = (state_19177[(7)]);var state_19177__$1 = state_19177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19177__$1,(11),inst_19142);
} else
{if((state_val_19178 === (17)))
{var inst_19163 = (state_19177[(2)]);var state_19177__$1 = state_19177;if(cljs.core.truth_(inst_19163))
{var statearr_19188_19252 = state_19177__$1;(statearr_19188_19252[(1)] = (19));
} else
{var statearr_19189_19253 = state_19177__$1;(statearr_19189_19253[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (3)))
{var inst_19175 = (state_19177[(2)]);var state_19177__$1 = state_19177;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19177__$1,inst_19175);
} else
{if((state_val_19178 === (12)))
{var inst_19152 = (state_19177[(10)]);var state_19177__$1 = state_19177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19177__$1,(14),inst_19152);
} else
{if((state_val_19178 === (2)))
{var state_19177__$1 = state_19177;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19177__$1,(4),results);
} else
{if((state_val_19178 === (19)))
{var state_19177__$1 = state_19177;var statearr_19190_19254 = state_19177__$1;(statearr_19190_19254[(2)] = null);
(statearr_19190_19254[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (11)))
{var inst_19152 = (state_19177[(2)]);var state_19177__$1 = (function (){var statearr_19191 = state_19177;(statearr_19191[(10)] = inst_19152);
return statearr_19191;
})();var statearr_19192_19255 = state_19177__$1;(statearr_19192_19255[(2)] = null);
(statearr_19192_19255[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (9)))
{var state_19177__$1 = state_19177;var statearr_19193_19256 = state_19177__$1;(statearr_19193_19256[(2)] = null);
(statearr_19193_19256[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (5)))
{var state_19177__$1 = state_19177;if(cljs.core.truth_(close_QMARK_))
{var statearr_19194_19257 = state_19177__$1;(statearr_19194_19257[(1)] = (8));
} else
{var statearr_19195_19258 = state_19177__$1;(statearr_19195_19258[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (14)))
{var inst_19157 = (state_19177[(11)]);var inst_19155 = (state_19177[(8)]);var inst_19155__$1 = (state_19177[(2)]);var inst_19156 = (inst_19155__$1 == null);var inst_19157__$1 = cljs.core.not.call(null,inst_19156);var state_19177__$1 = (function (){var statearr_19196 = state_19177;(statearr_19196[(11)] = inst_19157__$1);
(statearr_19196[(8)] = inst_19155__$1);
return statearr_19196;
})();if(inst_19157__$1)
{var statearr_19197_19259 = state_19177__$1;(statearr_19197_19259[(1)] = (15));
} else
{var statearr_19198_19260 = state_19177__$1;(statearr_19198_19260[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (16)))
{var inst_19157 = (state_19177[(11)]);var state_19177__$1 = state_19177;var statearr_19199_19261 = state_19177__$1;(statearr_19199_19261[(2)] = inst_19157);
(statearr_19199_19261[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (10)))
{var inst_19149 = (state_19177[(2)]);var state_19177__$1 = state_19177;var statearr_19200_19262 = state_19177__$1;(statearr_19200_19262[(2)] = inst_19149);
(statearr_19200_19262[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (18)))
{var inst_19160 = (state_19177[(2)]);var state_19177__$1 = state_19177;var statearr_19201_19263 = state_19177__$1;(statearr_19201_19263[(2)] = inst_19160);
(statearr_19201_19263[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19178 === (8)))
{var inst_19146 = cljs.core.async.close_BANG_.call(null,to);var state_19177__$1 = state_19177;var statearr_19202_19264 = state_19177__$1;(statearr_19202_19264[(2)] = inst_19146);
(statearr_19202_19264[(1)] = (10));
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
var state_machine__6189__auto____0 = (function (){var statearr_19206 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19206[(0)] = state_machine__6189__auto__);
(statearr_19206[(1)] = (1));
return statearr_19206;
});
var state_machine__6189__auto____1 = (function (state_19177){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19177);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19207){if((e19207 instanceof Object))
{var ex__6192__auto__ = e19207;var statearr_19208_19265 = state_19177;(statearr_19208_19265[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19177);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19207;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19266 = state_19177;
state_19177 = G__19266;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19177){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,jobs,results,process,async))
})();var state__6205__auto__ = (function (){var statearr_19209 = f__6204__auto__.call(null);(statearr_19209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_19209;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6203__auto___19367 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___19367,tc,fc){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___19367,tc,fc){
return (function (state_19342){var state_val_19343 = (state_19342[(1)]);if((state_val_19343 === (7)))
{var inst_19338 = (state_19342[(2)]);var state_19342__$1 = state_19342;var statearr_19344_19368 = state_19342__$1;(statearr_19344_19368[(2)] = inst_19338);
(statearr_19344_19368[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (1)))
{var state_19342__$1 = state_19342;var statearr_19345_19369 = state_19342__$1;(statearr_19345_19369[(2)] = null);
(statearr_19345_19369[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (4)))
{var inst_19319 = (state_19342[(7)]);var inst_19319__$1 = (state_19342[(2)]);var inst_19320 = (inst_19319__$1 == null);var state_19342__$1 = (function (){var statearr_19346 = state_19342;(statearr_19346[(7)] = inst_19319__$1);
return statearr_19346;
})();if(cljs.core.truth_(inst_19320))
{var statearr_19347_19370 = state_19342__$1;(statearr_19347_19370[(1)] = (5));
} else
{var statearr_19348_19371 = state_19342__$1;(statearr_19348_19371[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (13)))
{var state_19342__$1 = state_19342;var statearr_19349_19372 = state_19342__$1;(statearr_19349_19372[(2)] = null);
(statearr_19349_19372[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (6)))
{var inst_19319 = (state_19342[(7)]);var inst_19325 = p.call(null,inst_19319);var state_19342__$1 = state_19342;if(cljs.core.truth_(inst_19325))
{var statearr_19350_19373 = state_19342__$1;(statearr_19350_19373[(1)] = (9));
} else
{var statearr_19351_19374 = state_19342__$1;(statearr_19351_19374[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (3)))
{var inst_19340 = (state_19342[(2)]);var state_19342__$1 = state_19342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19342__$1,inst_19340);
} else
{if((state_val_19343 === (12)))
{var state_19342__$1 = state_19342;var statearr_19352_19375 = state_19342__$1;(statearr_19352_19375[(2)] = null);
(statearr_19352_19375[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (2)))
{var state_19342__$1 = state_19342;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19342__$1,(4),ch);
} else
{if((state_val_19343 === (11)))
{var inst_19319 = (state_19342[(7)]);var inst_19329 = (state_19342[(2)]);var state_19342__$1 = state_19342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19342__$1,(8),inst_19329,inst_19319);
} else
{if((state_val_19343 === (9)))
{var state_19342__$1 = state_19342;var statearr_19353_19376 = state_19342__$1;(statearr_19353_19376[(2)] = tc);
(statearr_19353_19376[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (5)))
{var inst_19322 = cljs.core.async.close_BANG_.call(null,tc);var inst_19323 = cljs.core.async.close_BANG_.call(null,fc);var state_19342__$1 = (function (){var statearr_19354 = state_19342;(statearr_19354[(8)] = inst_19322);
return statearr_19354;
})();var statearr_19355_19377 = state_19342__$1;(statearr_19355_19377[(2)] = inst_19323);
(statearr_19355_19377[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (14)))
{var inst_19336 = (state_19342[(2)]);var state_19342__$1 = state_19342;var statearr_19356_19378 = state_19342__$1;(statearr_19356_19378[(2)] = inst_19336);
(statearr_19356_19378[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (10)))
{var state_19342__$1 = state_19342;var statearr_19357_19379 = state_19342__$1;(statearr_19357_19379[(2)] = fc);
(statearr_19357_19379[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19343 === (8)))
{var inst_19331 = (state_19342[(2)]);var state_19342__$1 = state_19342;if(cljs.core.truth_(inst_19331))
{var statearr_19358_19380 = state_19342__$1;(statearr_19358_19380[(1)] = (12));
} else
{var statearr_19359_19381 = state_19342__$1;(statearr_19359_19381[(1)] = (13));
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
});})(c__6203__auto___19367,tc,fc))
;return ((function (switch__6188__auto__,c__6203__auto___19367,tc,fc){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19363 = [null,null,null,null,null,null,null,null,null];(statearr_19363[(0)] = state_machine__6189__auto__);
(statearr_19363[(1)] = (1));
return statearr_19363;
});
var state_machine__6189__auto____1 = (function (state_19342){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19342);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19364){if((e19364 instanceof Object))
{var ex__6192__auto__ = e19364;var statearr_19365_19382 = state_19342;(statearr_19365_19382[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19342);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19364;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19383 = state_19342;
state_19342 = G__19383;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19342){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___19367,tc,fc))
})();var state__6205__auto__ = (function (){var statearr_19366 = f__6204__auto__.call(null);(statearr_19366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___19367);
return statearr_19366;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___19367,tc,fc))
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
return (function (state_19430){var state_val_19431 = (state_19430[(1)]);if((state_val_19431 === (7)))
{var inst_19426 = (state_19430[(2)]);var state_19430__$1 = state_19430;var statearr_19432_19448 = state_19430__$1;(statearr_19432_19448[(2)] = inst_19426);
(statearr_19432_19448[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19431 === (6)))
{var inst_19416 = (state_19430[(7)]);var inst_19419 = (state_19430[(8)]);var inst_19423 = f.call(null,inst_19416,inst_19419);var inst_19416__$1 = inst_19423;var state_19430__$1 = (function (){var statearr_19433 = state_19430;(statearr_19433[(7)] = inst_19416__$1);
return statearr_19433;
})();var statearr_19434_19449 = state_19430__$1;(statearr_19434_19449[(2)] = null);
(statearr_19434_19449[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19431 === (5)))
{var inst_19416 = (state_19430[(7)]);var state_19430__$1 = state_19430;var statearr_19435_19450 = state_19430__$1;(statearr_19435_19450[(2)] = inst_19416);
(statearr_19435_19450[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19431 === (4)))
{var inst_19419 = (state_19430[(8)]);var inst_19419__$1 = (state_19430[(2)]);var inst_19420 = (inst_19419__$1 == null);var state_19430__$1 = (function (){var statearr_19436 = state_19430;(statearr_19436[(8)] = inst_19419__$1);
return statearr_19436;
})();if(cljs.core.truth_(inst_19420))
{var statearr_19437_19451 = state_19430__$1;(statearr_19437_19451[(1)] = (5));
} else
{var statearr_19438_19452 = state_19430__$1;(statearr_19438_19452[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19431 === (3)))
{var inst_19428 = (state_19430[(2)]);var state_19430__$1 = state_19430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19430__$1,inst_19428);
} else
{if((state_val_19431 === (2)))
{var state_19430__$1 = state_19430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19430__$1,(4),ch);
} else
{if((state_val_19431 === (1)))
{var inst_19416 = init;var state_19430__$1 = (function (){var statearr_19439 = state_19430;(statearr_19439[(7)] = inst_19416);
return statearr_19439;
})();var statearr_19440_19453 = state_19430__$1;(statearr_19440_19453[(2)] = null);
(statearr_19440_19453[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_19444 = [null,null,null,null,null,null,null,null,null];(statearr_19444[(0)] = state_machine__6189__auto__);
(statearr_19444[(1)] = (1));
return statearr_19444;
});
var state_machine__6189__auto____1 = (function (state_19430){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19430);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19445){if((e19445 instanceof Object))
{var ex__6192__auto__ = e19445;var statearr_19446_19454 = state_19430;(statearr_19446_19454[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19430);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19445;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19455 = state_19430;
state_19430 = G__19455;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19430){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_19447 = f__6204__auto__.call(null);(statearr_19447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_19447;
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
return (function (state_19529){var state_val_19530 = (state_19529[(1)]);if((state_val_19530 === (7)))
{var inst_19511 = (state_19529[(2)]);var state_19529__$1 = state_19529;var statearr_19531_19554 = state_19529__$1;(statearr_19531_19554[(2)] = inst_19511);
(statearr_19531_19554[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19530 === (1)))
{var inst_19505 = cljs.core.seq.call(null,coll);var inst_19506 = inst_19505;var state_19529__$1 = (function (){var statearr_19532 = state_19529;(statearr_19532[(7)] = inst_19506);
return statearr_19532;
})();var statearr_19533_19555 = state_19529__$1;(statearr_19533_19555[(2)] = null);
(statearr_19533_19555[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19530 === (4)))
{var inst_19506 = (state_19529[(7)]);var inst_19509 = cljs.core.first.call(null,inst_19506);var state_19529__$1 = state_19529;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19529__$1,(7),ch,inst_19509);
} else
{if((state_val_19530 === (13)))
{var inst_19523 = (state_19529[(2)]);var state_19529__$1 = state_19529;var statearr_19534_19556 = state_19529__$1;(statearr_19534_19556[(2)] = inst_19523);
(statearr_19534_19556[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19530 === (6)))
{var inst_19514 = (state_19529[(2)]);var state_19529__$1 = state_19529;if(cljs.core.truth_(inst_19514))
{var statearr_19535_19557 = state_19529__$1;(statearr_19535_19557[(1)] = (8));
} else
{var statearr_19536_19558 = state_19529__$1;(statearr_19536_19558[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19530 === (3)))
{var inst_19527 = (state_19529[(2)]);var state_19529__$1 = state_19529;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19529__$1,inst_19527);
} else
{if((state_val_19530 === (12)))
{var state_19529__$1 = state_19529;var statearr_19537_19559 = state_19529__$1;(statearr_19537_19559[(2)] = null);
(statearr_19537_19559[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19530 === (2)))
{var inst_19506 = (state_19529[(7)]);var state_19529__$1 = state_19529;if(cljs.core.truth_(inst_19506))
{var statearr_19538_19560 = state_19529__$1;(statearr_19538_19560[(1)] = (4));
} else
{var statearr_19539_19561 = state_19529__$1;(statearr_19539_19561[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19530 === (11)))
{var inst_19520 = cljs.core.async.close_BANG_.call(null,ch);var state_19529__$1 = state_19529;var statearr_19540_19562 = state_19529__$1;(statearr_19540_19562[(2)] = inst_19520);
(statearr_19540_19562[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19530 === (9)))
{var state_19529__$1 = state_19529;if(cljs.core.truth_(close_QMARK_))
{var statearr_19541_19563 = state_19529__$1;(statearr_19541_19563[(1)] = (11));
} else
{var statearr_19542_19564 = state_19529__$1;(statearr_19542_19564[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19530 === (5)))
{var inst_19506 = (state_19529[(7)]);var state_19529__$1 = state_19529;var statearr_19543_19565 = state_19529__$1;(statearr_19543_19565[(2)] = inst_19506);
(statearr_19543_19565[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19530 === (10)))
{var inst_19525 = (state_19529[(2)]);var state_19529__$1 = state_19529;var statearr_19544_19566 = state_19529__$1;(statearr_19544_19566[(2)] = inst_19525);
(statearr_19544_19566[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19530 === (8)))
{var inst_19506 = (state_19529[(7)]);var inst_19516 = cljs.core.next.call(null,inst_19506);var inst_19506__$1 = inst_19516;var state_19529__$1 = (function (){var statearr_19545 = state_19529;(statearr_19545[(7)] = inst_19506__$1);
return statearr_19545;
})();var statearr_19546_19567 = state_19529__$1;(statearr_19546_19567[(2)] = null);
(statearr_19546_19567[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_19550 = [null,null,null,null,null,null,null,null];(statearr_19550[(0)] = state_machine__6189__auto__);
(statearr_19550[(1)] = (1));
return statearr_19550;
});
var state_machine__6189__auto____1 = (function (state_19529){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19529);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19551){if((e19551 instanceof Object))
{var ex__6192__auto__ = e19551;var statearr_19552_19568 = state_19529;(statearr_19552_19568[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19529);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19551;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19569 = state_19529;
state_19529 = G__19569;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19529){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_19553 = f__6204__auto__.call(null);(statearr_19553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_19553;
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
cljs.core.async.Mux = (function (){var obj19571 = {};return obj19571;
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
cljs.core.async.Mult = (function (){var obj19573 = {};return obj19573;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t19795 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19795 = (function (cs,ch,mult,meta19796){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19796 = meta19796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19795.cljs$lang$type = true;
cljs.core.async.t19795.cljs$lang$ctorStr = "cljs.core.async/t19795";
cljs.core.async.t19795.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t19795");
});})(cs))
;
cljs.core.async.t19795.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t19795.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t19795.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t19795.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t19795.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19795.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t19795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19797){var self__ = this;
var _19797__$1 = this;return self__.meta19796;
});})(cs))
;
cljs.core.async.t19795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19797,meta19796__$1){var self__ = this;
var _19797__$1 = this;return (new cljs.core.async.t19795(self__.cs,self__.ch,self__.mult,meta19796__$1));
});})(cs))
;
cljs.core.async.__GT_t19795 = ((function (cs){
return (function __GT_t19795(cs__$1,ch__$1,mult__$1,meta19796){return (new cljs.core.async.t19795(cs__$1,ch__$1,mult__$1,meta19796));
});})(cs))
;
}
return (new cljs.core.async.t19795(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6203__auto___20016 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___20016,cs,m,dchan,dctr,done){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___20016,cs,m,dchan,dctr,done){
return (function (state_19928){var state_val_19929 = (state_19928[(1)]);if((state_val_19929 === (7)))
{var inst_19924 = (state_19928[(2)]);var state_19928__$1 = state_19928;var statearr_19930_20017 = state_19928__$1;(statearr_19930_20017[(2)] = inst_19924);
(statearr_19930_20017[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (20)))
{var inst_19829 = (state_19928[(7)]);var inst_19839 = cljs.core.first.call(null,inst_19829);var inst_19840 = cljs.core.nth.call(null,inst_19839,(0),null);var inst_19841 = cljs.core.nth.call(null,inst_19839,(1),null);var state_19928__$1 = (function (){var statearr_19931 = state_19928;(statearr_19931[(8)] = inst_19840);
return statearr_19931;
})();if(cljs.core.truth_(inst_19841))
{var statearr_19932_20018 = state_19928__$1;(statearr_19932_20018[(1)] = (22));
} else
{var statearr_19933_20019 = state_19928__$1;(statearr_19933_20019[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (27)))
{var inst_19800 = (state_19928[(9)]);var inst_19869 = (state_19928[(10)]);var inst_19876 = (state_19928[(11)]);var inst_19871 = (state_19928[(12)]);var inst_19876__$1 = cljs.core._nth.call(null,inst_19869,inst_19871);var inst_19877 = cljs.core.async.put_BANG_.call(null,inst_19876__$1,inst_19800,done);var state_19928__$1 = (function (){var statearr_19934 = state_19928;(statearr_19934[(11)] = inst_19876__$1);
return statearr_19934;
})();if(cljs.core.truth_(inst_19877))
{var statearr_19935_20020 = state_19928__$1;(statearr_19935_20020[(1)] = (30));
} else
{var statearr_19936_20021 = state_19928__$1;(statearr_19936_20021[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (1)))
{var state_19928__$1 = state_19928;var statearr_19937_20022 = state_19928__$1;(statearr_19937_20022[(2)] = null);
(statearr_19937_20022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (24)))
{var inst_19829 = (state_19928[(7)]);var inst_19846 = (state_19928[(2)]);var inst_19847 = cljs.core.next.call(null,inst_19829);var inst_19809 = inst_19847;var inst_19810 = null;var inst_19811 = (0);var inst_19812 = (0);var state_19928__$1 = (function (){var statearr_19938 = state_19928;(statearr_19938[(13)] = inst_19846);
(statearr_19938[(14)] = inst_19810);
(statearr_19938[(15)] = inst_19809);
(statearr_19938[(16)] = inst_19812);
(statearr_19938[(17)] = inst_19811);
return statearr_19938;
})();var statearr_19939_20023 = state_19928__$1;(statearr_19939_20023[(2)] = null);
(statearr_19939_20023[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (39)))
{var state_19928__$1 = state_19928;var statearr_19943_20024 = state_19928__$1;(statearr_19943_20024[(2)] = null);
(statearr_19943_20024[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (4)))
{var inst_19800 = (state_19928[(9)]);var inst_19800__$1 = (state_19928[(2)]);var inst_19801 = (inst_19800__$1 == null);var state_19928__$1 = (function (){var statearr_19944 = state_19928;(statearr_19944[(9)] = inst_19800__$1);
return statearr_19944;
})();if(cljs.core.truth_(inst_19801))
{var statearr_19945_20025 = state_19928__$1;(statearr_19945_20025[(1)] = (5));
} else
{var statearr_19946_20026 = state_19928__$1;(statearr_19946_20026[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (15)))
{var inst_19810 = (state_19928[(14)]);var inst_19809 = (state_19928[(15)]);var inst_19812 = (state_19928[(16)]);var inst_19811 = (state_19928[(17)]);var inst_19825 = (state_19928[(2)]);var inst_19826 = (inst_19812 + (1));var tmp19940 = inst_19810;var tmp19941 = inst_19809;var tmp19942 = inst_19811;var inst_19809__$1 = tmp19941;var inst_19810__$1 = tmp19940;var inst_19811__$1 = tmp19942;var inst_19812__$1 = inst_19826;var state_19928__$1 = (function (){var statearr_19947 = state_19928;(statearr_19947[(18)] = inst_19825);
(statearr_19947[(14)] = inst_19810__$1);
(statearr_19947[(15)] = inst_19809__$1);
(statearr_19947[(16)] = inst_19812__$1);
(statearr_19947[(17)] = inst_19811__$1);
return statearr_19947;
})();var statearr_19948_20027 = state_19928__$1;(statearr_19948_20027[(2)] = null);
(statearr_19948_20027[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (21)))
{var inst_19850 = (state_19928[(2)]);var state_19928__$1 = state_19928;var statearr_19952_20028 = state_19928__$1;(statearr_19952_20028[(2)] = inst_19850);
(statearr_19952_20028[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (31)))
{var inst_19876 = (state_19928[(11)]);var inst_19880 = done.call(null,null);var inst_19881 = cljs.core.async.untap_STAR_.call(null,m,inst_19876);var state_19928__$1 = (function (){var statearr_19953 = state_19928;(statearr_19953[(19)] = inst_19880);
return statearr_19953;
})();var statearr_19954_20029 = state_19928__$1;(statearr_19954_20029[(2)] = inst_19881);
(statearr_19954_20029[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (32)))
{var inst_19870 = (state_19928[(20)]);var inst_19869 = (state_19928[(10)]);var inst_19871 = (state_19928[(12)]);var inst_19868 = (state_19928[(21)]);var inst_19883 = (state_19928[(2)]);var inst_19884 = (inst_19871 + (1));var tmp19949 = inst_19870;var tmp19950 = inst_19869;var tmp19951 = inst_19868;var inst_19868__$1 = tmp19951;var inst_19869__$1 = tmp19950;var inst_19870__$1 = tmp19949;var inst_19871__$1 = inst_19884;var state_19928__$1 = (function (){var statearr_19955 = state_19928;(statearr_19955[(22)] = inst_19883);
(statearr_19955[(20)] = inst_19870__$1);
(statearr_19955[(10)] = inst_19869__$1);
(statearr_19955[(12)] = inst_19871__$1);
(statearr_19955[(21)] = inst_19868__$1);
return statearr_19955;
})();var statearr_19956_20030 = state_19928__$1;(statearr_19956_20030[(2)] = null);
(statearr_19956_20030[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (40)))
{var inst_19896 = (state_19928[(23)]);var inst_19900 = done.call(null,null);var inst_19901 = cljs.core.async.untap_STAR_.call(null,m,inst_19896);var state_19928__$1 = (function (){var statearr_19957 = state_19928;(statearr_19957[(24)] = inst_19900);
return statearr_19957;
})();var statearr_19958_20031 = state_19928__$1;(statearr_19958_20031[(2)] = inst_19901);
(statearr_19958_20031[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (33)))
{var inst_19887 = (state_19928[(25)]);var inst_19889 = cljs.core.chunked_seq_QMARK_.call(null,inst_19887);var state_19928__$1 = state_19928;if(inst_19889)
{var statearr_19959_20032 = state_19928__$1;(statearr_19959_20032[(1)] = (36));
} else
{var statearr_19960_20033 = state_19928__$1;(statearr_19960_20033[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (13)))
{var inst_19819 = (state_19928[(26)]);var inst_19822 = cljs.core.async.close_BANG_.call(null,inst_19819);var state_19928__$1 = state_19928;var statearr_19961_20034 = state_19928__$1;(statearr_19961_20034[(2)] = inst_19822);
(statearr_19961_20034[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (22)))
{var inst_19840 = (state_19928[(8)]);var inst_19843 = cljs.core.async.close_BANG_.call(null,inst_19840);var state_19928__$1 = state_19928;var statearr_19962_20035 = state_19928__$1;(statearr_19962_20035[(2)] = inst_19843);
(statearr_19962_20035[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (36)))
{var inst_19887 = (state_19928[(25)]);var inst_19891 = cljs.core.chunk_first.call(null,inst_19887);var inst_19892 = cljs.core.chunk_rest.call(null,inst_19887);var inst_19893 = cljs.core.count.call(null,inst_19891);var inst_19868 = inst_19892;var inst_19869 = inst_19891;var inst_19870 = inst_19893;var inst_19871 = (0);var state_19928__$1 = (function (){var statearr_19963 = state_19928;(statearr_19963[(20)] = inst_19870);
(statearr_19963[(10)] = inst_19869);
(statearr_19963[(12)] = inst_19871);
(statearr_19963[(21)] = inst_19868);
return statearr_19963;
})();var statearr_19964_20036 = state_19928__$1;(statearr_19964_20036[(2)] = null);
(statearr_19964_20036[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (41)))
{var inst_19887 = (state_19928[(25)]);var inst_19903 = (state_19928[(2)]);var inst_19904 = cljs.core.next.call(null,inst_19887);var inst_19868 = inst_19904;var inst_19869 = null;var inst_19870 = (0);var inst_19871 = (0);var state_19928__$1 = (function (){var statearr_19965 = state_19928;(statearr_19965[(20)] = inst_19870);
(statearr_19965[(27)] = inst_19903);
(statearr_19965[(10)] = inst_19869);
(statearr_19965[(12)] = inst_19871);
(statearr_19965[(21)] = inst_19868);
return statearr_19965;
})();var statearr_19966_20037 = state_19928__$1;(statearr_19966_20037[(2)] = null);
(statearr_19966_20037[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (43)))
{var state_19928__$1 = state_19928;var statearr_19967_20038 = state_19928__$1;(statearr_19967_20038[(2)] = null);
(statearr_19967_20038[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (29)))
{var inst_19912 = (state_19928[(2)]);var state_19928__$1 = state_19928;var statearr_19968_20039 = state_19928__$1;(statearr_19968_20039[(2)] = inst_19912);
(statearr_19968_20039[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (44)))
{var inst_19921 = (state_19928[(2)]);var state_19928__$1 = (function (){var statearr_19969 = state_19928;(statearr_19969[(28)] = inst_19921);
return statearr_19969;
})();var statearr_19970_20040 = state_19928__$1;(statearr_19970_20040[(2)] = null);
(statearr_19970_20040[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (6)))
{var inst_19860 = (state_19928[(29)]);var inst_19859 = cljs.core.deref.call(null,cs);var inst_19860__$1 = cljs.core.keys.call(null,inst_19859);var inst_19861 = cljs.core.count.call(null,inst_19860__$1);var inst_19862 = cljs.core.reset_BANG_.call(null,dctr,inst_19861);var inst_19867 = cljs.core.seq.call(null,inst_19860__$1);var inst_19868 = inst_19867;var inst_19869 = null;var inst_19870 = (0);var inst_19871 = (0);var state_19928__$1 = (function (){var statearr_19971 = state_19928;(statearr_19971[(20)] = inst_19870);
(statearr_19971[(29)] = inst_19860__$1);
(statearr_19971[(10)] = inst_19869);
(statearr_19971[(30)] = inst_19862);
(statearr_19971[(12)] = inst_19871);
(statearr_19971[(21)] = inst_19868);
return statearr_19971;
})();var statearr_19972_20041 = state_19928__$1;(statearr_19972_20041[(2)] = null);
(statearr_19972_20041[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (28)))
{var inst_19887 = (state_19928[(25)]);var inst_19868 = (state_19928[(21)]);var inst_19887__$1 = cljs.core.seq.call(null,inst_19868);var state_19928__$1 = (function (){var statearr_19973 = state_19928;(statearr_19973[(25)] = inst_19887__$1);
return statearr_19973;
})();if(inst_19887__$1)
{var statearr_19974_20042 = state_19928__$1;(statearr_19974_20042[(1)] = (33));
} else
{var statearr_19975_20043 = state_19928__$1;(statearr_19975_20043[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (25)))
{var inst_19870 = (state_19928[(20)]);var inst_19871 = (state_19928[(12)]);var inst_19873 = (inst_19871 < inst_19870);var inst_19874 = inst_19873;var state_19928__$1 = state_19928;if(cljs.core.truth_(inst_19874))
{var statearr_19976_20044 = state_19928__$1;(statearr_19976_20044[(1)] = (27));
} else
{var statearr_19977_20045 = state_19928__$1;(statearr_19977_20045[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (34)))
{var state_19928__$1 = state_19928;var statearr_19978_20046 = state_19928__$1;(statearr_19978_20046[(2)] = null);
(statearr_19978_20046[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (17)))
{var state_19928__$1 = state_19928;var statearr_19979_20047 = state_19928__$1;(statearr_19979_20047[(2)] = null);
(statearr_19979_20047[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (3)))
{var inst_19926 = (state_19928[(2)]);var state_19928__$1 = state_19928;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19928__$1,inst_19926);
} else
{if((state_val_19929 === (12)))
{var inst_19855 = (state_19928[(2)]);var state_19928__$1 = state_19928;var statearr_19980_20048 = state_19928__$1;(statearr_19980_20048[(2)] = inst_19855);
(statearr_19980_20048[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (2)))
{var state_19928__$1 = state_19928;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19928__$1,(4),ch);
} else
{if((state_val_19929 === (23)))
{var state_19928__$1 = state_19928;var statearr_19981_20049 = state_19928__$1;(statearr_19981_20049[(2)] = null);
(statearr_19981_20049[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (35)))
{var inst_19910 = (state_19928[(2)]);var state_19928__$1 = state_19928;var statearr_19982_20050 = state_19928__$1;(statearr_19982_20050[(2)] = inst_19910);
(statearr_19982_20050[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (19)))
{var inst_19829 = (state_19928[(7)]);var inst_19833 = cljs.core.chunk_first.call(null,inst_19829);var inst_19834 = cljs.core.chunk_rest.call(null,inst_19829);var inst_19835 = cljs.core.count.call(null,inst_19833);var inst_19809 = inst_19834;var inst_19810 = inst_19833;var inst_19811 = inst_19835;var inst_19812 = (0);var state_19928__$1 = (function (){var statearr_19983 = state_19928;(statearr_19983[(14)] = inst_19810);
(statearr_19983[(15)] = inst_19809);
(statearr_19983[(16)] = inst_19812);
(statearr_19983[(17)] = inst_19811);
return statearr_19983;
})();var statearr_19984_20051 = state_19928__$1;(statearr_19984_20051[(2)] = null);
(statearr_19984_20051[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (11)))
{var inst_19829 = (state_19928[(7)]);var inst_19809 = (state_19928[(15)]);var inst_19829__$1 = cljs.core.seq.call(null,inst_19809);var state_19928__$1 = (function (){var statearr_19985 = state_19928;(statearr_19985[(7)] = inst_19829__$1);
return statearr_19985;
})();if(inst_19829__$1)
{var statearr_19986_20052 = state_19928__$1;(statearr_19986_20052[(1)] = (16));
} else
{var statearr_19987_20053 = state_19928__$1;(statearr_19987_20053[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (9)))
{var inst_19857 = (state_19928[(2)]);var state_19928__$1 = state_19928;var statearr_19988_20054 = state_19928__$1;(statearr_19988_20054[(2)] = inst_19857);
(statearr_19988_20054[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (5)))
{var inst_19807 = cljs.core.deref.call(null,cs);var inst_19808 = cljs.core.seq.call(null,inst_19807);var inst_19809 = inst_19808;var inst_19810 = null;var inst_19811 = (0);var inst_19812 = (0);var state_19928__$1 = (function (){var statearr_19989 = state_19928;(statearr_19989[(14)] = inst_19810);
(statearr_19989[(15)] = inst_19809);
(statearr_19989[(16)] = inst_19812);
(statearr_19989[(17)] = inst_19811);
return statearr_19989;
})();var statearr_19990_20055 = state_19928__$1;(statearr_19990_20055[(2)] = null);
(statearr_19990_20055[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (14)))
{var state_19928__$1 = state_19928;var statearr_19991_20056 = state_19928__$1;(statearr_19991_20056[(2)] = null);
(statearr_19991_20056[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (45)))
{var inst_19918 = (state_19928[(2)]);var state_19928__$1 = state_19928;var statearr_19992_20057 = state_19928__$1;(statearr_19992_20057[(2)] = inst_19918);
(statearr_19992_20057[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (26)))
{var inst_19860 = (state_19928[(29)]);var inst_19914 = (state_19928[(2)]);var inst_19915 = cljs.core.seq.call(null,inst_19860);var state_19928__$1 = (function (){var statearr_19993 = state_19928;(statearr_19993[(31)] = inst_19914);
return statearr_19993;
})();if(inst_19915)
{var statearr_19994_20058 = state_19928__$1;(statearr_19994_20058[(1)] = (42));
} else
{var statearr_19995_20059 = state_19928__$1;(statearr_19995_20059[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (16)))
{var inst_19829 = (state_19928[(7)]);var inst_19831 = cljs.core.chunked_seq_QMARK_.call(null,inst_19829);var state_19928__$1 = state_19928;if(inst_19831)
{var statearr_19996_20060 = state_19928__$1;(statearr_19996_20060[(1)] = (19));
} else
{var statearr_19997_20061 = state_19928__$1;(statearr_19997_20061[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (38)))
{var inst_19907 = (state_19928[(2)]);var state_19928__$1 = state_19928;var statearr_19998_20062 = state_19928__$1;(statearr_19998_20062[(2)] = inst_19907);
(statearr_19998_20062[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (30)))
{var state_19928__$1 = state_19928;var statearr_19999_20063 = state_19928__$1;(statearr_19999_20063[(2)] = null);
(statearr_19999_20063[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (10)))
{var inst_19810 = (state_19928[(14)]);var inst_19812 = (state_19928[(16)]);var inst_19818 = cljs.core._nth.call(null,inst_19810,inst_19812);var inst_19819 = cljs.core.nth.call(null,inst_19818,(0),null);var inst_19820 = cljs.core.nth.call(null,inst_19818,(1),null);var state_19928__$1 = (function (){var statearr_20000 = state_19928;(statearr_20000[(26)] = inst_19819);
return statearr_20000;
})();if(cljs.core.truth_(inst_19820))
{var statearr_20001_20064 = state_19928__$1;(statearr_20001_20064[(1)] = (13));
} else
{var statearr_20002_20065 = state_19928__$1;(statearr_20002_20065[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (18)))
{var inst_19853 = (state_19928[(2)]);var state_19928__$1 = state_19928;var statearr_20003_20066 = state_19928__$1;(statearr_20003_20066[(2)] = inst_19853);
(statearr_20003_20066[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (42)))
{var state_19928__$1 = state_19928;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19928__$1,(45),dchan);
} else
{if((state_val_19929 === (37)))
{var inst_19887 = (state_19928[(25)]);var inst_19800 = (state_19928[(9)]);var inst_19896 = (state_19928[(23)]);var inst_19896__$1 = cljs.core.first.call(null,inst_19887);var inst_19897 = cljs.core.async.put_BANG_.call(null,inst_19896__$1,inst_19800,done);var state_19928__$1 = (function (){var statearr_20004 = state_19928;(statearr_20004[(23)] = inst_19896__$1);
return statearr_20004;
})();if(cljs.core.truth_(inst_19897))
{var statearr_20005_20067 = state_19928__$1;(statearr_20005_20067[(1)] = (39));
} else
{var statearr_20006_20068 = state_19928__$1;(statearr_20006_20068[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19929 === (8)))
{var inst_19812 = (state_19928[(16)]);var inst_19811 = (state_19928[(17)]);var inst_19814 = (inst_19812 < inst_19811);var inst_19815 = inst_19814;var state_19928__$1 = state_19928;if(cljs.core.truth_(inst_19815))
{var statearr_20007_20069 = state_19928__$1;(statearr_20007_20069[(1)] = (10));
} else
{var statearr_20008_20070 = state_19928__$1;(statearr_20008_20070[(1)] = (11));
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
});})(c__6203__auto___20016,cs,m,dchan,dctr,done))
;return ((function (switch__6188__auto__,c__6203__auto___20016,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_20012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20012[(0)] = state_machine__6189__auto__);
(statearr_20012[(1)] = (1));
return statearr_20012;
});
var state_machine__6189__auto____1 = (function (state_19928){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19928);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e20013){if((e20013 instanceof Object))
{var ex__6192__auto__ = e20013;var statearr_20014_20071 = state_19928;(statearr_20014_20071[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19928);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20013;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20072 = state_19928;
state_19928 = G__20072;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19928){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___20016,cs,m,dchan,dctr,done))
})();var state__6205__auto__ = (function (){var statearr_20015 = f__6204__auto__.call(null);(statearr_20015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___20016);
return statearr_20015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___20016,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj20074 = {};return obj20074;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20075){var map__20080 = p__20075;var map__20080__$1 = ((cljs.core.seq_QMARK_.call(null,map__20080))?cljs.core.apply.call(null,cljs.core.hash_map,map__20080):map__20080);var opts = map__20080__$1;var statearr_20081_20084 = state;(statearr_20081_20084[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20080,map__20080__$1,opts){
return (function (val){var statearr_20082_20085 = state;(statearr_20082_20085[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20080,map__20080__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_20083_20086 = state;(statearr_20083_20086[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20075 = null;if (arguments.length > 3) {
  p__20075 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20075);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20087){
var state = cljs.core.first(arglist__20087);
arglist__20087 = cljs.core.next(arglist__20087);
var cont_block = cljs.core.first(arglist__20087);
arglist__20087 = cljs.core.next(arglist__20087);
var ports = cljs.core.first(arglist__20087);
var p__20075 = cljs.core.rest(arglist__20087);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20075);
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
;var m = (function (){if(typeof cljs.core.async.t20207 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20207 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20208){
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
this.meta20208 = meta20208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20207.cljs$lang$type = true;
cljs.core.async.t20207.cljs$lang$ctorStr = "cljs.core.async/t20207";
cljs.core.async.t20207.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t20207");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20207.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t20207.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20207.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20207.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20207.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20207.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20207.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20207.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20209){var self__ = this;
var _20209__$1 = this;return self__.meta20208;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20209,meta20208__$1){var self__ = this;
var _20209__$1 = this;return (new cljs.core.async.t20207(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20208__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t20207 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20207(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20208){return (new cljs.core.async.t20207(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20208));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t20207(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6203__auto___20326 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___20326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___20326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20279){var state_val_20280 = (state_20279[(1)]);if((state_val_20280 === (7)))
{var inst_20223 = (state_20279[(7)]);var inst_20228 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20223);var state_20279__$1 = state_20279;var statearr_20281_20327 = state_20279__$1;(statearr_20281_20327[(2)] = inst_20228);
(statearr_20281_20327[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (20)))
{var inst_20238 = (state_20279[(8)]);var state_20279__$1 = state_20279;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20279__$1,(23),out,inst_20238);
} else
{if((state_val_20280 === (1)))
{var inst_20213 = (state_20279[(9)]);var inst_20213__$1 = calc_state.call(null);var inst_20214 = cljs.core.seq_QMARK_.call(null,inst_20213__$1);var state_20279__$1 = (function (){var statearr_20282 = state_20279;(statearr_20282[(9)] = inst_20213__$1);
return statearr_20282;
})();if(inst_20214)
{var statearr_20283_20328 = state_20279__$1;(statearr_20283_20328[(1)] = (2));
} else
{var statearr_20284_20329 = state_20279__$1;(statearr_20284_20329[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (24)))
{var inst_20231 = (state_20279[(10)]);var inst_20223 = inst_20231;var state_20279__$1 = (function (){var statearr_20285 = state_20279;(statearr_20285[(7)] = inst_20223);
return statearr_20285;
})();var statearr_20286_20330 = state_20279__$1;(statearr_20286_20330[(2)] = null);
(statearr_20286_20330[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (4)))
{var inst_20213 = (state_20279[(9)]);var inst_20219 = (state_20279[(2)]);var inst_20220 = cljs.core.get.call(null,inst_20219,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20221 = cljs.core.get.call(null,inst_20219,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20222 = cljs.core.get.call(null,inst_20219,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_20223 = inst_20213;var state_20279__$1 = (function (){var statearr_20287 = state_20279;(statearr_20287[(11)] = inst_20221);
(statearr_20287[(12)] = inst_20220);
(statearr_20287[(13)] = inst_20222);
(statearr_20287[(7)] = inst_20223);
return statearr_20287;
})();var statearr_20288_20331 = state_20279__$1;(statearr_20288_20331[(2)] = null);
(statearr_20288_20331[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (15)))
{var state_20279__$1 = state_20279;var statearr_20289_20332 = state_20279__$1;(statearr_20289_20332[(2)] = null);
(statearr_20289_20332[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (21)))
{var inst_20231 = (state_20279[(10)]);var inst_20223 = inst_20231;var state_20279__$1 = (function (){var statearr_20290 = state_20279;(statearr_20290[(7)] = inst_20223);
return statearr_20290;
})();var statearr_20291_20333 = state_20279__$1;(statearr_20291_20333[(2)] = null);
(statearr_20291_20333[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (13)))
{var inst_20275 = (state_20279[(2)]);var state_20279__$1 = state_20279;var statearr_20292_20334 = state_20279__$1;(statearr_20292_20334[(2)] = inst_20275);
(statearr_20292_20334[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (22)))
{var inst_20273 = (state_20279[(2)]);var state_20279__$1 = state_20279;var statearr_20293_20335 = state_20279__$1;(statearr_20293_20335[(2)] = inst_20273);
(statearr_20293_20335[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (6)))
{var inst_20277 = (state_20279[(2)]);var state_20279__$1 = state_20279;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20279__$1,inst_20277);
} else
{if((state_val_20280 === (25)))
{var state_20279__$1 = state_20279;var statearr_20294_20336 = state_20279__$1;(statearr_20294_20336[(2)] = null);
(statearr_20294_20336[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (17)))
{var inst_20253 = (state_20279[(14)]);var state_20279__$1 = state_20279;var statearr_20295_20337 = state_20279__$1;(statearr_20295_20337[(2)] = inst_20253);
(statearr_20295_20337[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (3)))
{var inst_20213 = (state_20279[(9)]);var state_20279__$1 = state_20279;var statearr_20296_20338 = state_20279__$1;(statearr_20296_20338[(2)] = inst_20213);
(statearr_20296_20338[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (12)))
{var inst_20234 = (state_20279[(15)]);var inst_20239 = (state_20279[(16)]);var inst_20253 = (state_20279[(14)]);var inst_20253__$1 = inst_20234.call(null,inst_20239);var state_20279__$1 = (function (){var statearr_20297 = state_20279;(statearr_20297[(14)] = inst_20253__$1);
return statearr_20297;
})();if(cljs.core.truth_(inst_20253__$1))
{var statearr_20298_20339 = state_20279__$1;(statearr_20298_20339[(1)] = (17));
} else
{var statearr_20299_20340 = state_20279__$1;(statearr_20299_20340[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (2)))
{var inst_20213 = (state_20279[(9)]);var inst_20216 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20213);var state_20279__$1 = state_20279;var statearr_20300_20341 = state_20279__$1;(statearr_20300_20341[(2)] = inst_20216);
(statearr_20300_20341[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (23)))
{var inst_20264 = (state_20279[(2)]);var state_20279__$1 = state_20279;if(cljs.core.truth_(inst_20264))
{var statearr_20301_20342 = state_20279__$1;(statearr_20301_20342[(1)] = (24));
} else
{var statearr_20302_20343 = state_20279__$1;(statearr_20302_20343[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (19)))
{var inst_20261 = (state_20279[(2)]);var state_20279__$1 = state_20279;if(cljs.core.truth_(inst_20261))
{var statearr_20303_20344 = state_20279__$1;(statearr_20303_20344[(1)] = (20));
} else
{var statearr_20304_20345 = state_20279__$1;(statearr_20304_20345[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (11)))
{var inst_20238 = (state_20279[(8)]);var inst_20244 = (inst_20238 == null);var state_20279__$1 = state_20279;if(cljs.core.truth_(inst_20244))
{var statearr_20305_20346 = state_20279__$1;(statearr_20305_20346[(1)] = (14));
} else
{var statearr_20306_20347 = state_20279__$1;(statearr_20306_20347[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (9)))
{var inst_20231 = (state_20279[(10)]);var inst_20231__$1 = (state_20279[(2)]);var inst_20232 = cljs.core.get.call(null,inst_20231__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_20233 = cljs.core.get.call(null,inst_20231__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_20234 = cljs.core.get.call(null,inst_20231__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_20279__$1 = (function (){var statearr_20307 = state_20279;(statearr_20307[(10)] = inst_20231__$1);
(statearr_20307[(15)] = inst_20234);
(statearr_20307[(17)] = inst_20233);
return statearr_20307;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_20279__$1,(10),inst_20232);
} else
{if((state_val_20280 === (5)))
{var inst_20223 = (state_20279[(7)]);var inst_20226 = cljs.core.seq_QMARK_.call(null,inst_20223);var state_20279__$1 = state_20279;if(inst_20226)
{var statearr_20308_20348 = state_20279__$1;(statearr_20308_20348[(1)] = (7));
} else
{var statearr_20309_20349 = state_20279__$1;(statearr_20309_20349[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (14)))
{var inst_20239 = (state_20279[(16)]);var inst_20246 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20239);var state_20279__$1 = state_20279;var statearr_20310_20350 = state_20279__$1;(statearr_20310_20350[(2)] = inst_20246);
(statearr_20310_20350[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (26)))
{var inst_20269 = (state_20279[(2)]);var state_20279__$1 = state_20279;var statearr_20311_20351 = state_20279__$1;(statearr_20311_20351[(2)] = inst_20269);
(statearr_20311_20351[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (16)))
{var inst_20249 = (state_20279[(2)]);var inst_20250 = calc_state.call(null);var inst_20223 = inst_20250;var state_20279__$1 = (function (){var statearr_20312 = state_20279;(statearr_20312[(18)] = inst_20249);
(statearr_20312[(7)] = inst_20223);
return statearr_20312;
})();var statearr_20313_20352 = state_20279__$1;(statearr_20313_20352[(2)] = null);
(statearr_20313_20352[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (10)))
{var inst_20238 = (state_20279[(8)]);var inst_20239 = (state_20279[(16)]);var inst_20237 = (state_20279[(2)]);var inst_20238__$1 = cljs.core.nth.call(null,inst_20237,(0),null);var inst_20239__$1 = cljs.core.nth.call(null,inst_20237,(1),null);var inst_20240 = (inst_20238__$1 == null);var inst_20241 = cljs.core._EQ_.call(null,inst_20239__$1,change);var inst_20242 = (inst_20240) || (inst_20241);var state_20279__$1 = (function (){var statearr_20314 = state_20279;(statearr_20314[(8)] = inst_20238__$1);
(statearr_20314[(16)] = inst_20239__$1);
return statearr_20314;
})();if(cljs.core.truth_(inst_20242))
{var statearr_20315_20353 = state_20279__$1;(statearr_20315_20353[(1)] = (11));
} else
{var statearr_20316_20354 = state_20279__$1;(statearr_20316_20354[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (18)))
{var inst_20234 = (state_20279[(15)]);var inst_20239 = (state_20279[(16)]);var inst_20233 = (state_20279[(17)]);var inst_20256 = cljs.core.empty_QMARK_.call(null,inst_20234);var inst_20257 = inst_20233.call(null,inst_20239);var inst_20258 = cljs.core.not.call(null,inst_20257);var inst_20259 = (inst_20256) && (inst_20258);var state_20279__$1 = state_20279;var statearr_20317_20355 = state_20279__$1;(statearr_20317_20355[(2)] = inst_20259);
(statearr_20317_20355[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20280 === (8)))
{var inst_20223 = (state_20279[(7)]);var state_20279__$1 = state_20279;var statearr_20318_20356 = state_20279__$1;(statearr_20318_20356[(2)] = inst_20223);
(statearr_20318_20356[(1)] = (9));
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
});})(c__6203__auto___20326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6188__auto__,c__6203__auto___20326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_20322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20322[(0)] = state_machine__6189__auto__);
(statearr_20322[(1)] = (1));
return statearr_20322;
});
var state_machine__6189__auto____1 = (function (state_20279){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_20279);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e20323){if((e20323 instanceof Object))
{var ex__6192__auto__ = e20323;var statearr_20324_20357 = state_20279;(statearr_20324_20357[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20279);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20323;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20358 = state_20279;
state_20279 = G__20358;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_20279){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_20279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___20326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6205__auto__ = (function (){var statearr_20325 = f__6204__auto__.call(null);(statearr_20325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___20326);
return statearr_20325;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___20326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj20360 = {};return obj20360;
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
return (function (p1__20361_SHARP_){if(cljs.core.truth_(p1__20361_SHARP_.call(null,topic)))
{return p1__20361_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__20361_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3551__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20484 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20484 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20485){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20485 = meta20485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20484.cljs$lang$type = true;
cljs.core.async.t20484.cljs$lang$ctorStr = "cljs.core.async/t20484";
cljs.core.async.t20484.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t20484");
});})(mults,ensure_mult))
;
cljs.core.async.t20484.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20484.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20484.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20484.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20484.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20484.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20486){var self__ = this;
var _20486__$1 = this;return self__.meta20485;
});})(mults,ensure_mult))
;
cljs.core.async.t20484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20486,meta20485__$1){var self__ = this;
var _20486__$1 = this;return (new cljs.core.async.t20484(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20485__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20484 = ((function (mults,ensure_mult){
return (function __GT_t20484(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20485){return (new cljs.core.async.t20484(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20485));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20484(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6203__auto___20606 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___20606,mults,ensure_mult,p){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___20606,mults,ensure_mult,p){
return (function (state_20558){var state_val_20559 = (state_20558[(1)]);if((state_val_20559 === (7)))
{var inst_20554 = (state_20558[(2)]);var state_20558__$1 = state_20558;var statearr_20560_20607 = state_20558__$1;(statearr_20560_20607[(2)] = inst_20554);
(statearr_20560_20607[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (20)))
{var state_20558__$1 = state_20558;var statearr_20561_20608 = state_20558__$1;(statearr_20561_20608[(2)] = null);
(statearr_20561_20608[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (1)))
{var state_20558__$1 = state_20558;var statearr_20562_20609 = state_20558__$1;(statearr_20562_20609[(2)] = null);
(statearr_20562_20609[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (24)))
{var inst_20537 = (state_20558[(7)]);var inst_20546 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20537);var state_20558__$1 = state_20558;var statearr_20563_20610 = state_20558__$1;(statearr_20563_20610[(2)] = inst_20546);
(statearr_20563_20610[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (4)))
{var inst_20489 = (state_20558[(8)]);var inst_20489__$1 = (state_20558[(2)]);var inst_20490 = (inst_20489__$1 == null);var state_20558__$1 = (function (){var statearr_20564 = state_20558;(statearr_20564[(8)] = inst_20489__$1);
return statearr_20564;
})();if(cljs.core.truth_(inst_20490))
{var statearr_20565_20611 = state_20558__$1;(statearr_20565_20611[(1)] = (5));
} else
{var statearr_20566_20612 = state_20558__$1;(statearr_20566_20612[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (15)))
{var inst_20531 = (state_20558[(2)]);var state_20558__$1 = state_20558;var statearr_20567_20613 = state_20558__$1;(statearr_20567_20613[(2)] = inst_20531);
(statearr_20567_20613[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (21)))
{var inst_20551 = (state_20558[(2)]);var state_20558__$1 = (function (){var statearr_20568 = state_20558;(statearr_20568[(9)] = inst_20551);
return statearr_20568;
})();var statearr_20569_20614 = state_20558__$1;(statearr_20569_20614[(2)] = null);
(statearr_20569_20614[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (13)))
{var inst_20513 = (state_20558[(10)]);var inst_20515 = cljs.core.chunked_seq_QMARK_.call(null,inst_20513);var state_20558__$1 = state_20558;if(inst_20515)
{var statearr_20570_20615 = state_20558__$1;(statearr_20570_20615[(1)] = (16));
} else
{var statearr_20571_20616 = state_20558__$1;(statearr_20571_20616[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (22)))
{var inst_20543 = (state_20558[(2)]);var state_20558__$1 = state_20558;if(cljs.core.truth_(inst_20543))
{var statearr_20572_20617 = state_20558__$1;(statearr_20572_20617[(1)] = (23));
} else
{var statearr_20573_20618 = state_20558__$1;(statearr_20573_20618[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (6)))
{var inst_20537 = (state_20558[(7)]);var inst_20539 = (state_20558[(11)]);var inst_20489 = (state_20558[(8)]);var inst_20537__$1 = topic_fn.call(null,inst_20489);var inst_20538 = cljs.core.deref.call(null,mults);var inst_20539__$1 = cljs.core.get.call(null,inst_20538,inst_20537__$1);var state_20558__$1 = (function (){var statearr_20574 = state_20558;(statearr_20574[(7)] = inst_20537__$1);
(statearr_20574[(11)] = inst_20539__$1);
return statearr_20574;
})();if(cljs.core.truth_(inst_20539__$1))
{var statearr_20575_20619 = state_20558__$1;(statearr_20575_20619[(1)] = (19));
} else
{var statearr_20576_20620 = state_20558__$1;(statearr_20576_20620[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (25)))
{var inst_20548 = (state_20558[(2)]);var state_20558__$1 = state_20558;var statearr_20577_20621 = state_20558__$1;(statearr_20577_20621[(2)] = inst_20548);
(statearr_20577_20621[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (17)))
{var inst_20513 = (state_20558[(10)]);var inst_20522 = cljs.core.first.call(null,inst_20513);var inst_20523 = cljs.core.async.muxch_STAR_.call(null,inst_20522);var inst_20524 = cljs.core.async.close_BANG_.call(null,inst_20523);var inst_20525 = cljs.core.next.call(null,inst_20513);var inst_20499 = inst_20525;var inst_20500 = null;var inst_20501 = (0);var inst_20502 = (0);var state_20558__$1 = (function (){var statearr_20578 = state_20558;(statearr_20578[(12)] = inst_20499);
(statearr_20578[(13)] = inst_20502);
(statearr_20578[(14)] = inst_20524);
(statearr_20578[(15)] = inst_20500);
(statearr_20578[(16)] = inst_20501);
return statearr_20578;
})();var statearr_20579_20622 = state_20558__$1;(statearr_20579_20622[(2)] = null);
(statearr_20579_20622[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (3)))
{var inst_20556 = (state_20558[(2)]);var state_20558__$1 = state_20558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20558__$1,inst_20556);
} else
{if((state_val_20559 === (12)))
{var inst_20533 = (state_20558[(2)]);var state_20558__$1 = state_20558;var statearr_20580_20623 = state_20558__$1;(statearr_20580_20623[(2)] = inst_20533);
(statearr_20580_20623[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (2)))
{var state_20558__$1 = state_20558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20558__$1,(4),ch);
} else
{if((state_val_20559 === (23)))
{var state_20558__$1 = state_20558;var statearr_20581_20624 = state_20558__$1;(statearr_20581_20624[(2)] = null);
(statearr_20581_20624[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (19)))
{var inst_20539 = (state_20558[(11)]);var inst_20489 = (state_20558[(8)]);var inst_20541 = cljs.core.async.muxch_STAR_.call(null,inst_20539);var state_20558__$1 = state_20558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20558__$1,(22),inst_20541,inst_20489);
} else
{if((state_val_20559 === (11)))
{var inst_20499 = (state_20558[(12)]);var inst_20513 = (state_20558[(10)]);var inst_20513__$1 = cljs.core.seq.call(null,inst_20499);var state_20558__$1 = (function (){var statearr_20582 = state_20558;(statearr_20582[(10)] = inst_20513__$1);
return statearr_20582;
})();if(inst_20513__$1)
{var statearr_20583_20625 = state_20558__$1;(statearr_20583_20625[(1)] = (13));
} else
{var statearr_20584_20626 = state_20558__$1;(statearr_20584_20626[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (9)))
{var inst_20535 = (state_20558[(2)]);var state_20558__$1 = state_20558;var statearr_20585_20627 = state_20558__$1;(statearr_20585_20627[(2)] = inst_20535);
(statearr_20585_20627[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (5)))
{var inst_20496 = cljs.core.deref.call(null,mults);var inst_20497 = cljs.core.vals.call(null,inst_20496);var inst_20498 = cljs.core.seq.call(null,inst_20497);var inst_20499 = inst_20498;var inst_20500 = null;var inst_20501 = (0);var inst_20502 = (0);var state_20558__$1 = (function (){var statearr_20586 = state_20558;(statearr_20586[(12)] = inst_20499);
(statearr_20586[(13)] = inst_20502);
(statearr_20586[(15)] = inst_20500);
(statearr_20586[(16)] = inst_20501);
return statearr_20586;
})();var statearr_20587_20628 = state_20558__$1;(statearr_20587_20628[(2)] = null);
(statearr_20587_20628[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (14)))
{var state_20558__$1 = state_20558;var statearr_20591_20629 = state_20558__$1;(statearr_20591_20629[(2)] = null);
(statearr_20591_20629[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (16)))
{var inst_20513 = (state_20558[(10)]);var inst_20517 = cljs.core.chunk_first.call(null,inst_20513);var inst_20518 = cljs.core.chunk_rest.call(null,inst_20513);var inst_20519 = cljs.core.count.call(null,inst_20517);var inst_20499 = inst_20518;var inst_20500 = inst_20517;var inst_20501 = inst_20519;var inst_20502 = (0);var state_20558__$1 = (function (){var statearr_20592 = state_20558;(statearr_20592[(12)] = inst_20499);
(statearr_20592[(13)] = inst_20502);
(statearr_20592[(15)] = inst_20500);
(statearr_20592[(16)] = inst_20501);
return statearr_20592;
})();var statearr_20593_20630 = state_20558__$1;(statearr_20593_20630[(2)] = null);
(statearr_20593_20630[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (10)))
{var inst_20499 = (state_20558[(12)]);var inst_20502 = (state_20558[(13)]);var inst_20500 = (state_20558[(15)]);var inst_20501 = (state_20558[(16)]);var inst_20507 = cljs.core._nth.call(null,inst_20500,inst_20502);var inst_20508 = cljs.core.async.muxch_STAR_.call(null,inst_20507);var inst_20509 = cljs.core.async.close_BANG_.call(null,inst_20508);var inst_20510 = (inst_20502 + (1));var tmp20588 = inst_20499;var tmp20589 = inst_20500;var tmp20590 = inst_20501;var inst_20499__$1 = tmp20588;var inst_20500__$1 = tmp20589;var inst_20501__$1 = tmp20590;var inst_20502__$1 = inst_20510;var state_20558__$1 = (function (){var statearr_20594 = state_20558;(statearr_20594[(12)] = inst_20499__$1);
(statearr_20594[(17)] = inst_20509);
(statearr_20594[(13)] = inst_20502__$1);
(statearr_20594[(15)] = inst_20500__$1);
(statearr_20594[(16)] = inst_20501__$1);
return statearr_20594;
})();var statearr_20595_20631 = state_20558__$1;(statearr_20595_20631[(2)] = null);
(statearr_20595_20631[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (18)))
{var inst_20528 = (state_20558[(2)]);var state_20558__$1 = state_20558;var statearr_20596_20632 = state_20558__$1;(statearr_20596_20632[(2)] = inst_20528);
(statearr_20596_20632[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20559 === (8)))
{var inst_20502 = (state_20558[(13)]);var inst_20501 = (state_20558[(16)]);var inst_20504 = (inst_20502 < inst_20501);var inst_20505 = inst_20504;var state_20558__$1 = state_20558;if(cljs.core.truth_(inst_20505))
{var statearr_20597_20633 = state_20558__$1;(statearr_20597_20633[(1)] = (10));
} else
{var statearr_20598_20634 = state_20558__$1;(statearr_20598_20634[(1)] = (11));
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
});})(c__6203__auto___20606,mults,ensure_mult,p))
;return ((function (switch__6188__auto__,c__6203__auto___20606,mults,ensure_mult,p){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_20602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20602[(0)] = state_machine__6189__auto__);
(statearr_20602[(1)] = (1));
return statearr_20602;
});
var state_machine__6189__auto____1 = (function (state_20558){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_20558);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e20603){if((e20603 instanceof Object))
{var ex__6192__auto__ = e20603;var statearr_20604_20635 = state_20558;(statearr_20604_20635[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20603;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20636 = state_20558;
state_20558 = G__20636;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_20558){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_20558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___20606,mults,ensure_mult,p))
})();var state__6205__auto__ = (function (){var statearr_20605 = f__6204__auto__.call(null);(statearr_20605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___20606);
return statearr_20605;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___20606,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6203__auto___20773 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___20773,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___20773,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20743){var state_val_20744 = (state_20743[(1)]);if((state_val_20744 === (7)))
{var state_20743__$1 = state_20743;var statearr_20745_20774 = state_20743__$1;(statearr_20745_20774[(2)] = null);
(statearr_20745_20774[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (1)))
{var state_20743__$1 = state_20743;var statearr_20746_20775 = state_20743__$1;(statearr_20746_20775[(2)] = null);
(statearr_20746_20775[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (4)))
{var inst_20707 = (state_20743[(7)]);var inst_20709 = (inst_20707 < cnt);var state_20743__$1 = state_20743;if(cljs.core.truth_(inst_20709))
{var statearr_20747_20776 = state_20743__$1;(statearr_20747_20776[(1)] = (6));
} else
{var statearr_20748_20777 = state_20743__$1;(statearr_20748_20777[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (15)))
{var inst_20739 = (state_20743[(2)]);var state_20743__$1 = state_20743;var statearr_20749_20778 = state_20743__$1;(statearr_20749_20778[(2)] = inst_20739);
(statearr_20749_20778[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (13)))
{var inst_20732 = cljs.core.async.close_BANG_.call(null,out);var state_20743__$1 = state_20743;var statearr_20750_20779 = state_20743__$1;(statearr_20750_20779[(2)] = inst_20732);
(statearr_20750_20779[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (6)))
{var state_20743__$1 = state_20743;var statearr_20751_20780 = state_20743__$1;(statearr_20751_20780[(2)] = null);
(statearr_20751_20780[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (3)))
{var inst_20741 = (state_20743[(2)]);var state_20743__$1 = state_20743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20743__$1,inst_20741);
} else
{if((state_val_20744 === (12)))
{var inst_20729 = (state_20743[(8)]);var inst_20729__$1 = (state_20743[(2)]);var inst_20730 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20729__$1);var state_20743__$1 = (function (){var statearr_20752 = state_20743;(statearr_20752[(8)] = inst_20729__$1);
return statearr_20752;
})();if(cljs.core.truth_(inst_20730))
{var statearr_20753_20781 = state_20743__$1;(statearr_20753_20781[(1)] = (13));
} else
{var statearr_20754_20782 = state_20743__$1;(statearr_20754_20782[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (2)))
{var inst_20706 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_20707 = (0);var state_20743__$1 = (function (){var statearr_20755 = state_20743;(statearr_20755[(7)] = inst_20707);
(statearr_20755[(9)] = inst_20706);
return statearr_20755;
})();var statearr_20756_20783 = state_20743__$1;(statearr_20756_20783[(2)] = null);
(statearr_20756_20783[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (11)))
{var inst_20707 = (state_20743[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20743,(10),Object,null,(9));var inst_20716 = chs__$1.call(null,inst_20707);var inst_20717 = done.call(null,inst_20707);var inst_20718 = cljs.core.async.take_BANG_.call(null,inst_20716,inst_20717);var state_20743__$1 = state_20743;var statearr_20757_20784 = state_20743__$1;(statearr_20757_20784[(2)] = inst_20718);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20743__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (9)))
{var inst_20707 = (state_20743[(7)]);var inst_20720 = (state_20743[(2)]);var inst_20721 = (inst_20707 + (1));var inst_20707__$1 = inst_20721;var state_20743__$1 = (function (){var statearr_20758 = state_20743;(statearr_20758[(7)] = inst_20707__$1);
(statearr_20758[(10)] = inst_20720);
return statearr_20758;
})();var statearr_20759_20785 = state_20743__$1;(statearr_20759_20785[(2)] = null);
(statearr_20759_20785[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (5)))
{var inst_20727 = (state_20743[(2)]);var state_20743__$1 = (function (){var statearr_20760 = state_20743;(statearr_20760[(11)] = inst_20727);
return statearr_20760;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20743__$1,(12),dchan);
} else
{if((state_val_20744 === (14)))
{var inst_20729 = (state_20743[(8)]);var inst_20734 = cljs.core.apply.call(null,f,inst_20729);var state_20743__$1 = state_20743;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20743__$1,(16),out,inst_20734);
} else
{if((state_val_20744 === (16)))
{var inst_20736 = (state_20743[(2)]);var state_20743__$1 = (function (){var statearr_20761 = state_20743;(statearr_20761[(12)] = inst_20736);
return statearr_20761;
})();var statearr_20762_20786 = state_20743__$1;(statearr_20762_20786[(2)] = null);
(statearr_20762_20786[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (10)))
{var inst_20711 = (state_20743[(2)]);var inst_20712 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_20743__$1 = (function (){var statearr_20763 = state_20743;(statearr_20763[(13)] = inst_20711);
return statearr_20763;
})();var statearr_20764_20787 = state_20743__$1;(statearr_20764_20787[(2)] = inst_20712);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20743__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20744 === (8)))
{var inst_20725 = (state_20743[(2)]);var state_20743__$1 = state_20743;var statearr_20765_20788 = state_20743__$1;(statearr_20765_20788[(2)] = inst_20725);
(statearr_20765_20788[(1)] = (5));
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
});})(c__6203__auto___20773,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6188__auto__,c__6203__auto___20773,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_20769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20769[(0)] = state_machine__6189__auto__);
(statearr_20769[(1)] = (1));
return statearr_20769;
});
var state_machine__6189__auto____1 = (function (state_20743){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_20743);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e20770){if((e20770 instanceof Object))
{var ex__6192__auto__ = e20770;var statearr_20771_20789 = state_20743;(statearr_20771_20789[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20790 = state_20743;
state_20743 = G__20790;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_20743){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_20743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___20773,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6205__auto__ = (function (){var statearr_20772 = f__6204__auto__.call(null);(statearr_20772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___20773);
return statearr_20772;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___20773,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___20898 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___20898,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___20898,out){
return (function (state_20874){var state_val_20875 = (state_20874[(1)]);if((state_val_20875 === (7)))
{var inst_20854 = (state_20874[(7)]);var inst_20853 = (state_20874[(8)]);var inst_20853__$1 = (state_20874[(2)]);var inst_20854__$1 = cljs.core.nth.call(null,inst_20853__$1,(0),null);var inst_20855 = cljs.core.nth.call(null,inst_20853__$1,(1),null);var inst_20856 = (inst_20854__$1 == null);var state_20874__$1 = (function (){var statearr_20876 = state_20874;(statearr_20876[(7)] = inst_20854__$1);
(statearr_20876[(9)] = inst_20855);
(statearr_20876[(8)] = inst_20853__$1);
return statearr_20876;
})();if(cljs.core.truth_(inst_20856))
{var statearr_20877_20899 = state_20874__$1;(statearr_20877_20899[(1)] = (8));
} else
{var statearr_20878_20900 = state_20874__$1;(statearr_20878_20900[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20875 === (1)))
{var inst_20845 = cljs.core.vec.call(null,chs);var inst_20846 = inst_20845;var state_20874__$1 = (function (){var statearr_20879 = state_20874;(statearr_20879[(10)] = inst_20846);
return statearr_20879;
})();var statearr_20880_20901 = state_20874__$1;(statearr_20880_20901[(2)] = null);
(statearr_20880_20901[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20875 === (4)))
{var inst_20846 = (state_20874[(10)]);var state_20874__$1 = state_20874;return cljs.core.async.ioc_alts_BANG_.call(null,state_20874__$1,(7),inst_20846);
} else
{if((state_val_20875 === (6)))
{var inst_20870 = (state_20874[(2)]);var state_20874__$1 = state_20874;var statearr_20881_20902 = state_20874__$1;(statearr_20881_20902[(2)] = inst_20870);
(statearr_20881_20902[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20875 === (3)))
{var inst_20872 = (state_20874[(2)]);var state_20874__$1 = state_20874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20874__$1,inst_20872);
} else
{if((state_val_20875 === (2)))
{var inst_20846 = (state_20874[(10)]);var inst_20848 = cljs.core.count.call(null,inst_20846);var inst_20849 = (inst_20848 > (0));var state_20874__$1 = state_20874;if(cljs.core.truth_(inst_20849))
{var statearr_20883_20903 = state_20874__$1;(statearr_20883_20903[(1)] = (4));
} else
{var statearr_20884_20904 = state_20874__$1;(statearr_20884_20904[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20875 === (11)))
{var inst_20846 = (state_20874[(10)]);var inst_20863 = (state_20874[(2)]);var tmp20882 = inst_20846;var inst_20846__$1 = tmp20882;var state_20874__$1 = (function (){var statearr_20885 = state_20874;(statearr_20885[(10)] = inst_20846__$1);
(statearr_20885[(11)] = inst_20863);
return statearr_20885;
})();var statearr_20886_20905 = state_20874__$1;(statearr_20886_20905[(2)] = null);
(statearr_20886_20905[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20875 === (9)))
{var inst_20854 = (state_20874[(7)]);var state_20874__$1 = state_20874;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20874__$1,(11),out,inst_20854);
} else
{if((state_val_20875 === (5)))
{var inst_20868 = cljs.core.async.close_BANG_.call(null,out);var state_20874__$1 = state_20874;var statearr_20887_20906 = state_20874__$1;(statearr_20887_20906[(2)] = inst_20868);
(statearr_20887_20906[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20875 === (10)))
{var inst_20866 = (state_20874[(2)]);var state_20874__$1 = state_20874;var statearr_20888_20907 = state_20874__$1;(statearr_20888_20907[(2)] = inst_20866);
(statearr_20888_20907[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20875 === (8)))
{var inst_20846 = (state_20874[(10)]);var inst_20854 = (state_20874[(7)]);var inst_20855 = (state_20874[(9)]);var inst_20853 = (state_20874[(8)]);var inst_20858 = (function (){var c = inst_20855;var v = inst_20854;var vec__20851 = inst_20853;var cs = inst_20846;return ((function (c,v,vec__20851,cs,inst_20846,inst_20854,inst_20855,inst_20853,state_val_20875,c__6203__auto___20898,out){
return (function (p1__20791_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__20791_SHARP_);
});
;})(c,v,vec__20851,cs,inst_20846,inst_20854,inst_20855,inst_20853,state_val_20875,c__6203__auto___20898,out))
})();var inst_20859 = cljs.core.filterv.call(null,inst_20858,inst_20846);var inst_20846__$1 = inst_20859;var state_20874__$1 = (function (){var statearr_20889 = state_20874;(statearr_20889[(10)] = inst_20846__$1);
return statearr_20889;
})();var statearr_20890_20908 = state_20874__$1;(statearr_20890_20908[(2)] = null);
(statearr_20890_20908[(1)] = (2));
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
});})(c__6203__auto___20898,out))
;return ((function (switch__6188__auto__,c__6203__auto___20898,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_20894 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20894[(0)] = state_machine__6189__auto__);
(statearr_20894[(1)] = (1));
return statearr_20894;
});
var state_machine__6189__auto____1 = (function (state_20874){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_20874);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e20895){if((e20895 instanceof Object))
{var ex__6192__auto__ = e20895;var statearr_20896_20909 = state_20874;(statearr_20896_20909[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20874);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e20895;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20910 = state_20874;
state_20874 = G__20910;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_20874){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_20874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___20898,out))
})();var state__6205__auto__ = (function (){var statearr_20897 = f__6204__auto__.call(null);(statearr_20897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___20898);
return statearr_20897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___20898,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___21003 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___21003,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___21003,out){
return (function (state_20980){var state_val_20981 = (state_20980[(1)]);if((state_val_20981 === (7)))
{var inst_20962 = (state_20980[(7)]);var inst_20962__$1 = (state_20980[(2)]);var inst_20963 = (inst_20962__$1 == null);var inst_20964 = cljs.core.not.call(null,inst_20963);var state_20980__$1 = (function (){var statearr_20982 = state_20980;(statearr_20982[(7)] = inst_20962__$1);
return statearr_20982;
})();if(inst_20964)
{var statearr_20983_21004 = state_20980__$1;(statearr_20983_21004[(1)] = (8));
} else
{var statearr_20984_21005 = state_20980__$1;(statearr_20984_21005[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20981 === (1)))
{var inst_20957 = (0);var state_20980__$1 = (function (){var statearr_20985 = state_20980;(statearr_20985[(8)] = inst_20957);
return statearr_20985;
})();var statearr_20986_21006 = state_20980__$1;(statearr_20986_21006[(2)] = null);
(statearr_20986_21006[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20981 === (4)))
{var state_20980__$1 = state_20980;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20980__$1,(7),ch);
} else
{if((state_val_20981 === (6)))
{var inst_20975 = (state_20980[(2)]);var state_20980__$1 = state_20980;var statearr_20987_21007 = state_20980__$1;(statearr_20987_21007[(2)] = inst_20975);
(statearr_20987_21007[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20981 === (3)))
{var inst_20977 = (state_20980[(2)]);var inst_20978 = cljs.core.async.close_BANG_.call(null,out);var state_20980__$1 = (function (){var statearr_20988 = state_20980;(statearr_20988[(9)] = inst_20977);
return statearr_20988;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20980__$1,inst_20978);
} else
{if((state_val_20981 === (2)))
{var inst_20957 = (state_20980[(8)]);var inst_20959 = (inst_20957 < n);var state_20980__$1 = state_20980;if(cljs.core.truth_(inst_20959))
{var statearr_20989_21008 = state_20980__$1;(statearr_20989_21008[(1)] = (4));
} else
{var statearr_20990_21009 = state_20980__$1;(statearr_20990_21009[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20981 === (11)))
{var inst_20957 = (state_20980[(8)]);var inst_20967 = (state_20980[(2)]);var inst_20968 = (inst_20957 + (1));var inst_20957__$1 = inst_20968;var state_20980__$1 = (function (){var statearr_20991 = state_20980;(statearr_20991[(8)] = inst_20957__$1);
(statearr_20991[(10)] = inst_20967);
return statearr_20991;
})();var statearr_20992_21010 = state_20980__$1;(statearr_20992_21010[(2)] = null);
(statearr_20992_21010[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20981 === (9)))
{var state_20980__$1 = state_20980;var statearr_20993_21011 = state_20980__$1;(statearr_20993_21011[(2)] = null);
(statearr_20993_21011[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20981 === (5)))
{var state_20980__$1 = state_20980;var statearr_20994_21012 = state_20980__$1;(statearr_20994_21012[(2)] = null);
(statearr_20994_21012[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20981 === (10)))
{var inst_20972 = (state_20980[(2)]);var state_20980__$1 = state_20980;var statearr_20995_21013 = state_20980__$1;(statearr_20995_21013[(2)] = inst_20972);
(statearr_20995_21013[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20981 === (8)))
{var inst_20962 = (state_20980[(7)]);var state_20980__$1 = state_20980;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20980__$1,(11),out,inst_20962);
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
});})(c__6203__auto___21003,out))
;return ((function (switch__6188__auto__,c__6203__auto___21003,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_20999 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20999[(0)] = state_machine__6189__auto__);
(statearr_20999[(1)] = (1));
return statearr_20999;
});
var state_machine__6189__auto____1 = (function (state_20980){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_20980);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e21000){if((e21000 instanceof Object))
{var ex__6192__auto__ = e21000;var statearr_21001_21014 = state_20980;(statearr_21001_21014[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20980);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21000;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21015 = state_20980;
state_20980 = G__21015;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_20980){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_20980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___21003,out))
})();var state__6205__auto__ = (function (){var statearr_21002 = f__6204__auto__.call(null);(statearr_21002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___21003);
return statearr_21002;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___21003,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t21023 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21023 = (function (ch,f,map_LT_,meta21024){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21024 = meta21024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21023.cljs$lang$type = true;
cljs.core.async.t21023.cljs$lang$ctorStr = "cljs.core.async/t21023";
cljs.core.async.t21023.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t21023");
});
cljs.core.async.t21023.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21023.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t21023.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21023.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t21026 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21026 = (function (fn1,_,meta21024,ch,f,map_LT_,meta21027){
this.fn1 = fn1;
this._ = _;
this.meta21024 = meta21024;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21027 = meta21027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21026.cljs$lang$type = true;
cljs.core.async.t21026.cljs$lang$ctorStr = "cljs.core.async/t21026";
cljs.core.async.t21026.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t21026");
});})(___$1))
;
cljs.core.async.t21026.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t21026.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t21026.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__21016_SHARP_){return f1.call(null,(((p1__21016_SHARP_ == null))?null:self__.f.call(null,p1__21016_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t21026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21028){var self__ = this;
var _21028__$1 = this;return self__.meta21027;
});})(___$1))
;
cljs.core.async.t21026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21028,meta21027__$1){var self__ = this;
var _21028__$1 = this;return (new cljs.core.async.t21026(self__.fn1,self__._,self__.meta21024,self__.ch,self__.f,self__.map_LT_,meta21027__$1));
});})(___$1))
;
cljs.core.async.__GT_t21026 = ((function (___$1){
return (function __GT_t21026(fn1__$1,___$2,meta21024__$1,ch__$2,f__$2,map_LT___$2,meta21027){return (new cljs.core.async.t21026(fn1__$1,___$2,meta21024__$1,ch__$2,f__$2,map_LT___$2,meta21027));
});})(___$1))
;
}
return (new cljs.core.async.t21026(fn1,___$1,self__.meta21024,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t21023.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21023.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21023.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t21023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21025){var self__ = this;
var _21025__$1 = this;return self__.meta21024;
});
cljs.core.async.t21023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21025,meta21024__$1){var self__ = this;
var _21025__$1 = this;return (new cljs.core.async.t21023(self__.ch,self__.f,self__.map_LT_,meta21024__$1));
});
cljs.core.async.__GT_t21023 = (function __GT_t21023(ch__$1,f__$1,map_LT___$1,meta21024){return (new cljs.core.async.t21023(ch__$1,f__$1,map_LT___$1,meta21024));
});
}
return (new cljs.core.async.t21023(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t21032 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21032 = (function (ch,f,map_GT_,meta21033){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21033 = meta21033;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21032.cljs$lang$type = true;
cljs.core.async.t21032.cljs$lang$ctorStr = "cljs.core.async/t21032";
cljs.core.async.t21032.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t21032");
});
cljs.core.async.t21032.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21032.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t21032.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21032.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21032.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21032.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21034){var self__ = this;
var _21034__$1 = this;return self__.meta21033;
});
cljs.core.async.t21032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21034,meta21033__$1){var self__ = this;
var _21034__$1 = this;return (new cljs.core.async.t21032(self__.ch,self__.f,self__.map_GT_,meta21033__$1));
});
cljs.core.async.__GT_t21032 = (function __GT_t21032(ch__$1,f__$1,map_GT___$1,meta21033){return (new cljs.core.async.t21032(ch__$1,f__$1,map_GT___$1,meta21033));
});
}
return (new cljs.core.async.t21032(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t21038 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t21038 = (function (ch,p,filter_GT_,meta21039){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21039 = meta21039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21038.cljs$lang$type = true;
cljs.core.async.t21038.cljs$lang$ctorStr = "cljs.core.async/t21038";
cljs.core.async.t21038.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t21038");
});
cljs.core.async.t21038.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t21038.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t21038.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t21038.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t21038.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t21038.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t21038.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t21038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21040){var self__ = this;
var _21040__$1 = this;return self__.meta21039;
});
cljs.core.async.t21038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21040,meta21039__$1){var self__ = this;
var _21040__$1 = this;return (new cljs.core.async.t21038(self__.ch,self__.p,self__.filter_GT_,meta21039__$1));
});
cljs.core.async.__GT_t21038 = (function __GT_t21038(ch__$1,p__$1,filter_GT___$1,meta21039){return (new cljs.core.async.t21038(ch__$1,p__$1,filter_GT___$1,meta21039));
});
}
return (new cljs.core.async.t21038(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___21123 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___21123,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___21123,out){
return (function (state_21102){var state_val_21103 = (state_21102[(1)]);if((state_val_21103 === (7)))
{var inst_21098 = (state_21102[(2)]);var state_21102__$1 = state_21102;var statearr_21104_21124 = state_21102__$1;(statearr_21104_21124[(2)] = inst_21098);
(statearr_21104_21124[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21103 === (1)))
{var state_21102__$1 = state_21102;var statearr_21105_21125 = state_21102__$1;(statearr_21105_21125[(2)] = null);
(statearr_21105_21125[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21103 === (4)))
{var inst_21084 = (state_21102[(7)]);var inst_21084__$1 = (state_21102[(2)]);var inst_21085 = (inst_21084__$1 == null);var state_21102__$1 = (function (){var statearr_21106 = state_21102;(statearr_21106[(7)] = inst_21084__$1);
return statearr_21106;
})();if(cljs.core.truth_(inst_21085))
{var statearr_21107_21126 = state_21102__$1;(statearr_21107_21126[(1)] = (5));
} else
{var statearr_21108_21127 = state_21102__$1;(statearr_21108_21127[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21103 === (6)))
{var inst_21084 = (state_21102[(7)]);var inst_21089 = p.call(null,inst_21084);var state_21102__$1 = state_21102;if(cljs.core.truth_(inst_21089))
{var statearr_21109_21128 = state_21102__$1;(statearr_21109_21128[(1)] = (8));
} else
{var statearr_21110_21129 = state_21102__$1;(statearr_21110_21129[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21103 === (3)))
{var inst_21100 = (state_21102[(2)]);var state_21102__$1 = state_21102;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21102__$1,inst_21100);
} else
{if((state_val_21103 === (2)))
{var state_21102__$1 = state_21102;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21102__$1,(4),ch);
} else
{if((state_val_21103 === (11)))
{var inst_21092 = (state_21102[(2)]);var state_21102__$1 = state_21102;var statearr_21111_21130 = state_21102__$1;(statearr_21111_21130[(2)] = inst_21092);
(statearr_21111_21130[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21103 === (9)))
{var state_21102__$1 = state_21102;var statearr_21112_21131 = state_21102__$1;(statearr_21112_21131[(2)] = null);
(statearr_21112_21131[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21103 === (5)))
{var inst_21087 = cljs.core.async.close_BANG_.call(null,out);var state_21102__$1 = state_21102;var statearr_21113_21132 = state_21102__$1;(statearr_21113_21132[(2)] = inst_21087);
(statearr_21113_21132[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21103 === (10)))
{var inst_21095 = (state_21102[(2)]);var state_21102__$1 = (function (){var statearr_21114 = state_21102;(statearr_21114[(8)] = inst_21095);
return statearr_21114;
})();var statearr_21115_21133 = state_21102__$1;(statearr_21115_21133[(2)] = null);
(statearr_21115_21133[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21103 === (8)))
{var inst_21084 = (state_21102[(7)]);var state_21102__$1 = state_21102;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21102__$1,(11),out,inst_21084);
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
});})(c__6203__auto___21123,out))
;return ((function (switch__6188__auto__,c__6203__auto___21123,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_21119 = [null,null,null,null,null,null,null,null,null];(statearr_21119[(0)] = state_machine__6189__auto__);
(statearr_21119[(1)] = (1));
return statearr_21119;
});
var state_machine__6189__auto____1 = (function (state_21102){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_21102);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e21120){if((e21120 instanceof Object))
{var ex__6192__auto__ = e21120;var statearr_21121_21134 = state_21102;(statearr_21121_21134[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21102);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21120;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21135 = state_21102;
state_21102 = G__21135;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_21102){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_21102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___21123,out))
})();var state__6205__auto__ = (function (){var statearr_21122 = f__6204__auto__.call(null);(statearr_21122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___21123);
return statearr_21122;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___21123,out))
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
return (function (state_21301){var state_val_21302 = (state_21301[(1)]);if((state_val_21302 === (7)))
{var inst_21297 = (state_21301[(2)]);var state_21301__$1 = state_21301;var statearr_21303_21344 = state_21301__$1;(statearr_21303_21344[(2)] = inst_21297);
(statearr_21303_21344[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (20)))
{var inst_21267 = (state_21301[(7)]);var inst_21278 = (state_21301[(2)]);var inst_21279 = cljs.core.next.call(null,inst_21267);var inst_21253 = inst_21279;var inst_21254 = null;var inst_21255 = (0);var inst_21256 = (0);var state_21301__$1 = (function (){var statearr_21304 = state_21301;(statearr_21304[(8)] = inst_21278);
(statearr_21304[(9)] = inst_21256);
(statearr_21304[(10)] = inst_21255);
(statearr_21304[(11)] = inst_21254);
(statearr_21304[(12)] = inst_21253);
return statearr_21304;
})();var statearr_21305_21345 = state_21301__$1;(statearr_21305_21345[(2)] = null);
(statearr_21305_21345[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (1)))
{var state_21301__$1 = state_21301;var statearr_21306_21346 = state_21301__$1;(statearr_21306_21346[(2)] = null);
(statearr_21306_21346[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (4)))
{var inst_21242 = (state_21301[(13)]);var inst_21242__$1 = (state_21301[(2)]);var inst_21243 = (inst_21242__$1 == null);var state_21301__$1 = (function (){var statearr_21307 = state_21301;(statearr_21307[(13)] = inst_21242__$1);
return statearr_21307;
})();if(cljs.core.truth_(inst_21243))
{var statearr_21308_21347 = state_21301__$1;(statearr_21308_21347[(1)] = (5));
} else
{var statearr_21309_21348 = state_21301__$1;(statearr_21309_21348[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (15)))
{var state_21301__$1 = state_21301;var statearr_21313_21349 = state_21301__$1;(statearr_21313_21349[(2)] = null);
(statearr_21313_21349[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (21)))
{var state_21301__$1 = state_21301;var statearr_21314_21350 = state_21301__$1;(statearr_21314_21350[(2)] = null);
(statearr_21314_21350[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (13)))
{var inst_21256 = (state_21301[(9)]);var inst_21255 = (state_21301[(10)]);var inst_21254 = (state_21301[(11)]);var inst_21253 = (state_21301[(12)]);var inst_21263 = (state_21301[(2)]);var inst_21264 = (inst_21256 + (1));var tmp21310 = inst_21255;var tmp21311 = inst_21254;var tmp21312 = inst_21253;var inst_21253__$1 = tmp21312;var inst_21254__$1 = tmp21311;var inst_21255__$1 = tmp21310;var inst_21256__$1 = inst_21264;var state_21301__$1 = (function (){var statearr_21315 = state_21301;(statearr_21315[(9)] = inst_21256__$1);
(statearr_21315[(10)] = inst_21255__$1);
(statearr_21315[(11)] = inst_21254__$1);
(statearr_21315[(14)] = inst_21263);
(statearr_21315[(12)] = inst_21253__$1);
return statearr_21315;
})();var statearr_21316_21351 = state_21301__$1;(statearr_21316_21351[(2)] = null);
(statearr_21316_21351[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (22)))
{var state_21301__$1 = state_21301;var statearr_21317_21352 = state_21301__$1;(statearr_21317_21352[(2)] = null);
(statearr_21317_21352[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (6)))
{var inst_21242 = (state_21301[(13)]);var inst_21251 = f.call(null,inst_21242);var inst_21252 = cljs.core.seq.call(null,inst_21251);var inst_21253 = inst_21252;var inst_21254 = null;var inst_21255 = (0);var inst_21256 = (0);var state_21301__$1 = (function (){var statearr_21318 = state_21301;(statearr_21318[(9)] = inst_21256);
(statearr_21318[(10)] = inst_21255);
(statearr_21318[(11)] = inst_21254);
(statearr_21318[(12)] = inst_21253);
return statearr_21318;
})();var statearr_21319_21353 = state_21301__$1;(statearr_21319_21353[(2)] = null);
(statearr_21319_21353[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (17)))
{var inst_21267 = (state_21301[(7)]);var inst_21271 = cljs.core.chunk_first.call(null,inst_21267);var inst_21272 = cljs.core.chunk_rest.call(null,inst_21267);var inst_21273 = cljs.core.count.call(null,inst_21271);var inst_21253 = inst_21272;var inst_21254 = inst_21271;var inst_21255 = inst_21273;var inst_21256 = (0);var state_21301__$1 = (function (){var statearr_21320 = state_21301;(statearr_21320[(9)] = inst_21256);
(statearr_21320[(10)] = inst_21255);
(statearr_21320[(11)] = inst_21254);
(statearr_21320[(12)] = inst_21253);
return statearr_21320;
})();var statearr_21321_21354 = state_21301__$1;(statearr_21321_21354[(2)] = null);
(statearr_21321_21354[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (3)))
{var inst_21299 = (state_21301[(2)]);var state_21301__$1 = state_21301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21301__$1,inst_21299);
} else
{if((state_val_21302 === (12)))
{var inst_21287 = (state_21301[(2)]);var state_21301__$1 = state_21301;var statearr_21322_21355 = state_21301__$1;(statearr_21322_21355[(2)] = inst_21287);
(statearr_21322_21355[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (2)))
{var state_21301__$1 = state_21301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21301__$1,(4),in$);
} else
{if((state_val_21302 === (23)))
{var inst_21295 = (state_21301[(2)]);var state_21301__$1 = state_21301;var statearr_21323_21356 = state_21301__$1;(statearr_21323_21356[(2)] = inst_21295);
(statearr_21323_21356[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (19)))
{var inst_21282 = (state_21301[(2)]);var state_21301__$1 = state_21301;var statearr_21324_21357 = state_21301__$1;(statearr_21324_21357[(2)] = inst_21282);
(statearr_21324_21357[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (11)))
{var inst_21267 = (state_21301[(7)]);var inst_21253 = (state_21301[(12)]);var inst_21267__$1 = cljs.core.seq.call(null,inst_21253);var state_21301__$1 = (function (){var statearr_21325 = state_21301;(statearr_21325[(7)] = inst_21267__$1);
return statearr_21325;
})();if(inst_21267__$1)
{var statearr_21326_21358 = state_21301__$1;(statearr_21326_21358[(1)] = (14));
} else
{var statearr_21327_21359 = state_21301__$1;(statearr_21327_21359[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (9)))
{var inst_21289 = (state_21301[(2)]);var inst_21290 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_21301__$1 = (function (){var statearr_21328 = state_21301;(statearr_21328[(15)] = inst_21289);
return statearr_21328;
})();if(cljs.core.truth_(inst_21290))
{var statearr_21329_21360 = state_21301__$1;(statearr_21329_21360[(1)] = (21));
} else
{var statearr_21330_21361 = state_21301__$1;(statearr_21330_21361[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (5)))
{var inst_21245 = cljs.core.async.close_BANG_.call(null,out);var state_21301__$1 = state_21301;var statearr_21331_21362 = state_21301__$1;(statearr_21331_21362[(2)] = inst_21245);
(statearr_21331_21362[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (14)))
{var inst_21267 = (state_21301[(7)]);var inst_21269 = cljs.core.chunked_seq_QMARK_.call(null,inst_21267);var state_21301__$1 = state_21301;if(inst_21269)
{var statearr_21332_21363 = state_21301__$1;(statearr_21332_21363[(1)] = (17));
} else
{var statearr_21333_21364 = state_21301__$1;(statearr_21333_21364[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (16)))
{var inst_21285 = (state_21301[(2)]);var state_21301__$1 = state_21301;var statearr_21334_21365 = state_21301__$1;(statearr_21334_21365[(2)] = inst_21285);
(statearr_21334_21365[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21302 === (10)))
{var inst_21256 = (state_21301[(9)]);var inst_21254 = (state_21301[(11)]);var inst_21261 = cljs.core._nth.call(null,inst_21254,inst_21256);var state_21301__$1 = state_21301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21301__$1,(13),out,inst_21261);
} else
{if((state_val_21302 === (18)))
{var inst_21267 = (state_21301[(7)]);var inst_21276 = cljs.core.first.call(null,inst_21267);var state_21301__$1 = state_21301;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21301__$1,(20),out,inst_21276);
} else
{if((state_val_21302 === (8)))
{var inst_21256 = (state_21301[(9)]);var inst_21255 = (state_21301[(10)]);var inst_21258 = (inst_21256 < inst_21255);var inst_21259 = inst_21258;var state_21301__$1 = state_21301;if(cljs.core.truth_(inst_21259))
{var statearr_21335_21366 = state_21301__$1;(statearr_21335_21366[(1)] = (10));
} else
{var statearr_21336_21367 = state_21301__$1;(statearr_21336_21367[(1)] = (11));
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
var state_machine__6189__auto____0 = (function (){var statearr_21340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21340[(0)] = state_machine__6189__auto__);
(statearr_21340[(1)] = (1));
return statearr_21340;
});
var state_machine__6189__auto____1 = (function (state_21301){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_21301);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e21341){if((e21341 instanceof Object))
{var ex__6192__auto__ = e21341;var statearr_21342_21368 = state_21301;(statearr_21342_21368[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21301);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21369 = state_21301;
state_21301 = G__21369;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_21301){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_21301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_21343 = f__6204__auto__.call(null);(statearr_21343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_21343;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___21466 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___21466,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___21466,out){
return (function (state_21441){var state_val_21442 = (state_21441[(1)]);if((state_val_21442 === (7)))
{var inst_21436 = (state_21441[(2)]);var state_21441__$1 = state_21441;var statearr_21443_21467 = state_21441__$1;(statearr_21443_21467[(2)] = inst_21436);
(statearr_21443_21467[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21442 === (1)))
{var inst_21418 = null;var state_21441__$1 = (function (){var statearr_21444 = state_21441;(statearr_21444[(7)] = inst_21418);
return statearr_21444;
})();var statearr_21445_21468 = state_21441__$1;(statearr_21445_21468[(2)] = null);
(statearr_21445_21468[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21442 === (4)))
{var inst_21421 = (state_21441[(8)]);var inst_21421__$1 = (state_21441[(2)]);var inst_21422 = (inst_21421__$1 == null);var inst_21423 = cljs.core.not.call(null,inst_21422);var state_21441__$1 = (function (){var statearr_21446 = state_21441;(statearr_21446[(8)] = inst_21421__$1);
return statearr_21446;
})();if(inst_21423)
{var statearr_21447_21469 = state_21441__$1;(statearr_21447_21469[(1)] = (5));
} else
{var statearr_21448_21470 = state_21441__$1;(statearr_21448_21470[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21442 === (6)))
{var state_21441__$1 = state_21441;var statearr_21449_21471 = state_21441__$1;(statearr_21449_21471[(2)] = null);
(statearr_21449_21471[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21442 === (3)))
{var inst_21438 = (state_21441[(2)]);var inst_21439 = cljs.core.async.close_BANG_.call(null,out);var state_21441__$1 = (function (){var statearr_21450 = state_21441;(statearr_21450[(9)] = inst_21438);
return statearr_21450;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21441__$1,inst_21439);
} else
{if((state_val_21442 === (2)))
{var state_21441__$1 = state_21441;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21441__$1,(4),ch);
} else
{if((state_val_21442 === (11)))
{var inst_21421 = (state_21441[(8)]);var inst_21430 = (state_21441[(2)]);var inst_21418 = inst_21421;var state_21441__$1 = (function (){var statearr_21451 = state_21441;(statearr_21451[(7)] = inst_21418);
(statearr_21451[(10)] = inst_21430);
return statearr_21451;
})();var statearr_21452_21472 = state_21441__$1;(statearr_21452_21472[(2)] = null);
(statearr_21452_21472[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21442 === (9)))
{var inst_21421 = (state_21441[(8)]);var state_21441__$1 = state_21441;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21441__$1,(11),out,inst_21421);
} else
{if((state_val_21442 === (5)))
{var inst_21418 = (state_21441[(7)]);var inst_21421 = (state_21441[(8)]);var inst_21425 = cljs.core._EQ_.call(null,inst_21421,inst_21418);var state_21441__$1 = state_21441;if(inst_21425)
{var statearr_21454_21473 = state_21441__$1;(statearr_21454_21473[(1)] = (8));
} else
{var statearr_21455_21474 = state_21441__$1;(statearr_21455_21474[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21442 === (10)))
{var inst_21433 = (state_21441[(2)]);var state_21441__$1 = state_21441;var statearr_21456_21475 = state_21441__$1;(statearr_21456_21475[(2)] = inst_21433);
(statearr_21456_21475[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21442 === (8)))
{var inst_21418 = (state_21441[(7)]);var tmp21453 = inst_21418;var inst_21418__$1 = tmp21453;var state_21441__$1 = (function (){var statearr_21457 = state_21441;(statearr_21457[(7)] = inst_21418__$1);
return statearr_21457;
})();var statearr_21458_21476 = state_21441__$1;(statearr_21458_21476[(2)] = null);
(statearr_21458_21476[(1)] = (2));
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
});})(c__6203__auto___21466,out))
;return ((function (switch__6188__auto__,c__6203__auto___21466,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_21462 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21462[(0)] = state_machine__6189__auto__);
(statearr_21462[(1)] = (1));
return statearr_21462;
});
var state_machine__6189__auto____1 = (function (state_21441){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_21441);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e21463){if((e21463 instanceof Object))
{var ex__6192__auto__ = e21463;var statearr_21464_21477 = state_21441;(statearr_21464_21477[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21441);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21463;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21478 = state_21441;
state_21441 = G__21478;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_21441){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_21441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___21466,out))
})();var state__6205__auto__ = (function (){var statearr_21465 = f__6204__auto__.call(null);(statearr_21465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___21466);
return statearr_21465;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___21466,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___21613 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___21613,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___21613,out){
return (function (state_21583){var state_val_21584 = (state_21583[(1)]);if((state_val_21584 === (7)))
{var inst_21579 = (state_21583[(2)]);var state_21583__$1 = state_21583;var statearr_21585_21614 = state_21583__$1;(statearr_21585_21614[(2)] = inst_21579);
(statearr_21585_21614[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21584 === (1)))
{var inst_21546 = (new Array(n));var inst_21547 = inst_21546;var inst_21548 = (0);var state_21583__$1 = (function (){var statearr_21586 = state_21583;(statearr_21586[(7)] = inst_21548);
(statearr_21586[(8)] = inst_21547);
return statearr_21586;
})();var statearr_21587_21615 = state_21583__$1;(statearr_21587_21615[(2)] = null);
(statearr_21587_21615[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21584 === (4)))
{var inst_21551 = (state_21583[(9)]);var inst_21551__$1 = (state_21583[(2)]);var inst_21552 = (inst_21551__$1 == null);var inst_21553 = cljs.core.not.call(null,inst_21552);var state_21583__$1 = (function (){var statearr_21588 = state_21583;(statearr_21588[(9)] = inst_21551__$1);
return statearr_21588;
})();if(inst_21553)
{var statearr_21589_21616 = state_21583__$1;(statearr_21589_21616[(1)] = (5));
} else
{var statearr_21590_21617 = state_21583__$1;(statearr_21590_21617[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21584 === (15)))
{var inst_21573 = (state_21583[(2)]);var state_21583__$1 = state_21583;var statearr_21591_21618 = state_21583__$1;(statearr_21591_21618[(2)] = inst_21573);
(statearr_21591_21618[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21584 === (13)))
{var state_21583__$1 = state_21583;var statearr_21592_21619 = state_21583__$1;(statearr_21592_21619[(2)] = null);
(statearr_21592_21619[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21584 === (6)))
{var inst_21548 = (state_21583[(7)]);var inst_21569 = (inst_21548 > (0));var state_21583__$1 = state_21583;if(cljs.core.truth_(inst_21569))
{var statearr_21593_21620 = state_21583__$1;(statearr_21593_21620[(1)] = (12));
} else
{var statearr_21594_21621 = state_21583__$1;(statearr_21594_21621[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21584 === (3)))
{var inst_21581 = (state_21583[(2)]);var state_21583__$1 = state_21583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21583__$1,inst_21581);
} else
{if((state_val_21584 === (12)))
{var inst_21547 = (state_21583[(8)]);var inst_21571 = cljs.core.vec.call(null,inst_21547);var state_21583__$1 = state_21583;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21583__$1,(15),out,inst_21571);
} else
{if((state_val_21584 === (2)))
{var state_21583__$1 = state_21583;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21583__$1,(4),ch);
} else
{if((state_val_21584 === (11)))
{var inst_21563 = (state_21583[(2)]);var inst_21564 = (new Array(n));var inst_21547 = inst_21564;var inst_21548 = (0);var state_21583__$1 = (function (){var statearr_21595 = state_21583;(statearr_21595[(7)] = inst_21548);
(statearr_21595[(8)] = inst_21547);
(statearr_21595[(10)] = inst_21563);
return statearr_21595;
})();var statearr_21596_21622 = state_21583__$1;(statearr_21596_21622[(2)] = null);
(statearr_21596_21622[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21584 === (9)))
{var inst_21547 = (state_21583[(8)]);var inst_21561 = cljs.core.vec.call(null,inst_21547);var state_21583__$1 = state_21583;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21583__$1,(11),out,inst_21561);
} else
{if((state_val_21584 === (5)))
{var inst_21548 = (state_21583[(7)]);var inst_21556 = (state_21583[(11)]);var inst_21551 = (state_21583[(9)]);var inst_21547 = (state_21583[(8)]);var inst_21555 = (inst_21547[inst_21548] = inst_21551);var inst_21556__$1 = (inst_21548 + (1));var inst_21557 = (inst_21556__$1 < n);var state_21583__$1 = (function (){var statearr_21597 = state_21583;(statearr_21597[(11)] = inst_21556__$1);
(statearr_21597[(12)] = inst_21555);
return statearr_21597;
})();if(cljs.core.truth_(inst_21557))
{var statearr_21598_21623 = state_21583__$1;(statearr_21598_21623[(1)] = (8));
} else
{var statearr_21599_21624 = state_21583__$1;(statearr_21599_21624[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21584 === (14)))
{var inst_21576 = (state_21583[(2)]);var inst_21577 = cljs.core.async.close_BANG_.call(null,out);var state_21583__$1 = (function (){var statearr_21601 = state_21583;(statearr_21601[(13)] = inst_21576);
return statearr_21601;
})();var statearr_21602_21625 = state_21583__$1;(statearr_21602_21625[(2)] = inst_21577);
(statearr_21602_21625[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21584 === (10)))
{var inst_21567 = (state_21583[(2)]);var state_21583__$1 = state_21583;var statearr_21603_21626 = state_21583__$1;(statearr_21603_21626[(2)] = inst_21567);
(statearr_21603_21626[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21584 === (8)))
{var inst_21556 = (state_21583[(11)]);var inst_21547 = (state_21583[(8)]);var tmp21600 = inst_21547;var inst_21547__$1 = tmp21600;var inst_21548 = inst_21556;var state_21583__$1 = (function (){var statearr_21604 = state_21583;(statearr_21604[(7)] = inst_21548);
(statearr_21604[(8)] = inst_21547__$1);
return statearr_21604;
})();var statearr_21605_21627 = state_21583__$1;(statearr_21605_21627[(2)] = null);
(statearr_21605_21627[(1)] = (2));
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
});})(c__6203__auto___21613,out))
;return ((function (switch__6188__auto__,c__6203__auto___21613,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_21609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21609[(0)] = state_machine__6189__auto__);
(statearr_21609[(1)] = (1));
return statearr_21609;
});
var state_machine__6189__auto____1 = (function (state_21583){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_21583);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e21610){if((e21610 instanceof Object))
{var ex__6192__auto__ = e21610;var statearr_21611_21628 = state_21583;(statearr_21611_21628[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21583);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21629 = state_21583;
state_21583 = G__21629;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_21583){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_21583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___21613,out))
})();var state__6205__auto__ = (function (){var statearr_21612 = f__6204__auto__.call(null);(statearr_21612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___21613);
return statearr_21612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___21613,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___21772 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___21772,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___21772,out){
return (function (state_21742){var state_val_21743 = (state_21742[(1)]);if((state_val_21743 === (7)))
{var inst_21738 = (state_21742[(2)]);var state_21742__$1 = state_21742;var statearr_21744_21773 = state_21742__$1;(statearr_21744_21773[(2)] = inst_21738);
(statearr_21744_21773[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21743 === (1)))
{var inst_21701 = [];var inst_21702 = inst_21701;var inst_21703 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_21742__$1 = (function (){var statearr_21745 = state_21742;(statearr_21745[(7)] = inst_21702);
(statearr_21745[(8)] = inst_21703);
return statearr_21745;
})();var statearr_21746_21774 = state_21742__$1;(statearr_21746_21774[(2)] = null);
(statearr_21746_21774[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21743 === (4)))
{var inst_21706 = (state_21742[(9)]);var inst_21706__$1 = (state_21742[(2)]);var inst_21707 = (inst_21706__$1 == null);var inst_21708 = cljs.core.not.call(null,inst_21707);var state_21742__$1 = (function (){var statearr_21747 = state_21742;(statearr_21747[(9)] = inst_21706__$1);
return statearr_21747;
})();if(inst_21708)
{var statearr_21748_21775 = state_21742__$1;(statearr_21748_21775[(1)] = (5));
} else
{var statearr_21749_21776 = state_21742__$1;(statearr_21749_21776[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21743 === (15)))
{var inst_21732 = (state_21742[(2)]);var state_21742__$1 = state_21742;var statearr_21750_21777 = state_21742__$1;(statearr_21750_21777[(2)] = inst_21732);
(statearr_21750_21777[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21743 === (13)))
{var state_21742__$1 = state_21742;var statearr_21751_21778 = state_21742__$1;(statearr_21751_21778[(2)] = null);
(statearr_21751_21778[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21743 === (6)))
{var inst_21702 = (state_21742[(7)]);var inst_21727 = inst_21702.length;var inst_21728 = (inst_21727 > (0));var state_21742__$1 = state_21742;if(cljs.core.truth_(inst_21728))
{var statearr_21752_21779 = state_21742__$1;(statearr_21752_21779[(1)] = (12));
} else
{var statearr_21753_21780 = state_21742__$1;(statearr_21753_21780[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21743 === (3)))
{var inst_21740 = (state_21742[(2)]);var state_21742__$1 = state_21742;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21742__$1,inst_21740);
} else
{if((state_val_21743 === (12)))
{var inst_21702 = (state_21742[(7)]);var inst_21730 = cljs.core.vec.call(null,inst_21702);var state_21742__$1 = state_21742;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21742__$1,(15),out,inst_21730);
} else
{if((state_val_21743 === (2)))
{var state_21742__$1 = state_21742;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21742__$1,(4),ch);
} else
{if((state_val_21743 === (11)))
{var inst_21706 = (state_21742[(9)]);var inst_21710 = (state_21742[(10)]);var inst_21720 = (state_21742[(2)]);var inst_21721 = [];var inst_21722 = inst_21721.push(inst_21706);var inst_21702 = inst_21721;var inst_21703 = inst_21710;var state_21742__$1 = (function (){var statearr_21754 = state_21742;(statearr_21754[(11)] = inst_21722);
(statearr_21754[(7)] = inst_21702);
(statearr_21754[(8)] = inst_21703);
(statearr_21754[(12)] = inst_21720);
return statearr_21754;
})();var statearr_21755_21781 = state_21742__$1;(statearr_21755_21781[(2)] = null);
(statearr_21755_21781[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21743 === (9)))
{var inst_21702 = (state_21742[(7)]);var inst_21718 = cljs.core.vec.call(null,inst_21702);var state_21742__$1 = state_21742;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21742__$1,(11),out,inst_21718);
} else
{if((state_val_21743 === (5)))
{var inst_21706 = (state_21742[(9)]);var inst_21703 = (state_21742[(8)]);var inst_21710 = (state_21742[(10)]);var inst_21710__$1 = f.call(null,inst_21706);var inst_21711 = cljs.core._EQ_.call(null,inst_21710__$1,inst_21703);var inst_21712 = cljs.core.keyword_identical_QMARK_.call(null,inst_21703,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_21713 = (inst_21711) || (inst_21712);var state_21742__$1 = (function (){var statearr_21756 = state_21742;(statearr_21756[(10)] = inst_21710__$1);
return statearr_21756;
})();if(cljs.core.truth_(inst_21713))
{var statearr_21757_21782 = state_21742__$1;(statearr_21757_21782[(1)] = (8));
} else
{var statearr_21758_21783 = state_21742__$1;(statearr_21758_21783[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21743 === (14)))
{var inst_21735 = (state_21742[(2)]);var inst_21736 = cljs.core.async.close_BANG_.call(null,out);var state_21742__$1 = (function (){var statearr_21760 = state_21742;(statearr_21760[(13)] = inst_21735);
return statearr_21760;
})();var statearr_21761_21784 = state_21742__$1;(statearr_21761_21784[(2)] = inst_21736);
(statearr_21761_21784[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21743 === (10)))
{var inst_21725 = (state_21742[(2)]);var state_21742__$1 = state_21742;var statearr_21762_21785 = state_21742__$1;(statearr_21762_21785[(2)] = inst_21725);
(statearr_21762_21785[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21743 === (8)))
{var inst_21706 = (state_21742[(9)]);var inst_21702 = (state_21742[(7)]);var inst_21710 = (state_21742[(10)]);var inst_21715 = inst_21702.push(inst_21706);var tmp21759 = inst_21702;var inst_21702__$1 = tmp21759;var inst_21703 = inst_21710;var state_21742__$1 = (function (){var statearr_21763 = state_21742;(statearr_21763[(14)] = inst_21715);
(statearr_21763[(7)] = inst_21702__$1);
(statearr_21763[(8)] = inst_21703);
return statearr_21763;
})();var statearr_21764_21786 = state_21742__$1;(statearr_21764_21786[(2)] = null);
(statearr_21764_21786[(1)] = (2));
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
});})(c__6203__auto___21772,out))
;return ((function (switch__6188__auto__,c__6203__auto___21772,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_21768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21768[(0)] = state_machine__6189__auto__);
(statearr_21768[(1)] = (1));
return statearr_21768;
});
var state_machine__6189__auto____1 = (function (state_21742){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_21742);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e21769){if((e21769 instanceof Object))
{var ex__6192__auto__ = e21769;var statearr_21770_21787 = state_21742;(statearr_21770_21787[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21742);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21769;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21788 = state_21742;
state_21742 = G__21788;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_21742){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_21742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___21772,out))
})();var state__6205__auto__ = (function (){var statearr_21771 = f__6204__auto__.call(null);(statearr_21771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___21772);
return statearr_21771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___21772,out))
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
