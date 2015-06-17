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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9002 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9002 = (function (f,fn_handler,meta9003){
this.f = f;
this.fn_handler = fn_handler;
this.meta9003 = meta9003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9002.cljs$lang$type = true;
cljs.core.async.t9002.cljs$lang$ctorStr = "cljs.core.async/t9002";
cljs.core.async.t9002.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9002");
});
cljs.core.async.t9002.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9004){var self__ = this;
var _9004__$1 = this;return self__.meta9003;
});
cljs.core.async.t9002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9004,meta9003__$1){var self__ = this;
var _9004__$1 = this;return (new cljs.core.async.t9002(self__.f,self__.fn_handler,meta9003__$1));
});
cljs.core.async.__GT_t9002 = (function __GT_t9002(f__$1,fn_handler__$1,meta9003){return (new cljs.core.async.t9002(f__$1,fn_handler__$1,meta9003));
});
}
return (new cljs.core.async.t9002(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9006 = buff;if(G__9006)
{var bit__4201__auto__ = null;if(cljs.core.truth_((function (){var or__3551__auto__ = bit__4201__auto__;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return G__9006.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9006.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9006);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9006);
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
{var val_9007 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9007);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_9007,ret){
return (function (){return fn1.call(null,val_9007);
});})(val_9007,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4407__auto___9008 = n;var x_9009 = (0);while(true){
if((x_9009 < n__4407__auto___9008))
{(a[x_9009] = (0));
{
var G__9010 = (x_9009 + (1));
x_9009 = G__9010;
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
var G__9011 = (i + (1));
i = G__9011;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9015 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9015 = (function (flag,alt_flag,meta9016){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9016 = meta9016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9015.cljs$lang$type = true;
cljs.core.async.t9015.cljs$lang$ctorStr = "cljs.core.async/t9015";
cljs.core.async.t9015.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9015");
});})(flag))
;
cljs.core.async.t9015.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9015.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t9015.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t9015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9017){var self__ = this;
var _9017__$1 = this;return self__.meta9016;
});})(flag))
;
cljs.core.async.t9015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9017,meta9016__$1){var self__ = this;
var _9017__$1 = this;return (new cljs.core.async.t9015(self__.flag,self__.alt_flag,meta9016__$1));
});})(flag))
;
cljs.core.async.__GT_t9015 = ((function (flag){
return (function __GT_t9015(flag__$1,alt_flag__$1,meta9016){return (new cljs.core.async.t9015(flag__$1,alt_flag__$1,meta9016));
});})(flag))
;
}
return (new cljs.core.async.t9015(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9021 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9021 = (function (cb,flag,alt_handler,meta9022){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9022 = meta9022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9021.cljs$lang$type = true;
cljs.core.async.t9021.cljs$lang$ctorStr = "cljs.core.async/t9021";
cljs.core.async.t9021.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9021");
});
cljs.core.async.t9021.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9023){var self__ = this;
var _9023__$1 = this;return self__.meta9022;
});
cljs.core.async.t9021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9023,meta9022__$1){var self__ = this;
var _9023__$1 = this;return (new cljs.core.async.t9021(self__.cb,self__.flag,self__.alt_handler,meta9022__$1));
});
cljs.core.async.__GT_t9021 = (function __GT_t9021(cb__$1,flag__$1,alt_handler__$1,meta9022){return (new cljs.core.async.t9021(cb__$1,flag__$1,alt_handler__$1,meta9022));
});
}
return (new cljs.core.async.t9021(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9024_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9024_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9025_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9025_SHARP_,port], null));
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
var G__9026 = (i + (1));
i = G__9026;
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
var alts_BANG___delegate = function (ports,p__9027){var map__9029 = p__9027;var map__9029__$1 = ((cljs.core.seq_QMARK_.call(null,map__9029))?cljs.core.apply.call(null,cljs.core.hash_map,map__9029):map__9029);var opts = map__9029__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__9027 = null;if (arguments.length > 1) {
  p__9027 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9027);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9030){
var ports = cljs.core.first(arglist__9030);
var p__9027 = cljs.core.rest(arglist__9030);
return alts_BANG___delegate(ports,p__9027);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6188__auto___9125 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto___9125){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto___9125){
return (function (state_9101){var state_val_9102 = (state_9101[(1)]);if((state_val_9102 === (7)))
{var inst_9097 = (state_9101[(2)]);var state_9101__$1 = state_9101;var statearr_9103_9126 = state_9101__$1;(statearr_9103_9126[(2)] = inst_9097);
(statearr_9103_9126[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9102 === (1)))
{var state_9101__$1 = state_9101;var statearr_9104_9127 = state_9101__$1;(statearr_9104_9127[(2)] = null);
(statearr_9104_9127[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9102 === (4)))
{var inst_9080 = (state_9101[(7)]);var inst_9080__$1 = (state_9101[(2)]);var inst_9081 = (inst_9080__$1 == null);var state_9101__$1 = (function (){var statearr_9105 = state_9101;(statearr_9105[(7)] = inst_9080__$1);
return statearr_9105;
})();if(cljs.core.truth_(inst_9081))
{var statearr_9106_9128 = state_9101__$1;(statearr_9106_9128[(1)] = (5));
} else
{var statearr_9107_9129 = state_9101__$1;(statearr_9107_9129[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9102 === (13)))
{var state_9101__$1 = state_9101;var statearr_9108_9130 = state_9101__$1;(statearr_9108_9130[(2)] = null);
(statearr_9108_9130[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9102 === (6)))
{var inst_9080 = (state_9101[(7)]);var state_9101__$1 = state_9101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9101__$1,(11),to,inst_9080);
} else
{if((state_val_9102 === (3)))
{var inst_9099 = (state_9101[(2)]);var state_9101__$1 = state_9101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9101__$1,inst_9099);
} else
{if((state_val_9102 === (12)))
{var state_9101__$1 = state_9101;var statearr_9109_9131 = state_9101__$1;(statearr_9109_9131[(2)] = null);
(statearr_9109_9131[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9102 === (2)))
{var state_9101__$1 = state_9101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9101__$1,(4),from);
} else
{if((state_val_9102 === (11)))
{var inst_9090 = (state_9101[(2)]);var state_9101__$1 = state_9101;if(cljs.core.truth_(inst_9090))
{var statearr_9110_9132 = state_9101__$1;(statearr_9110_9132[(1)] = (12));
} else
{var statearr_9111_9133 = state_9101__$1;(statearr_9111_9133[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9102 === (9)))
{var state_9101__$1 = state_9101;var statearr_9112_9134 = state_9101__$1;(statearr_9112_9134[(2)] = null);
(statearr_9112_9134[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9102 === (5)))
{var state_9101__$1 = state_9101;if(cljs.core.truth_(close_QMARK_))
{var statearr_9113_9135 = state_9101__$1;(statearr_9113_9135[(1)] = (8));
} else
{var statearr_9114_9136 = state_9101__$1;(statearr_9114_9136[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9102 === (14)))
{var inst_9095 = (state_9101[(2)]);var state_9101__$1 = state_9101;var statearr_9115_9137 = state_9101__$1;(statearr_9115_9137[(2)] = inst_9095);
(statearr_9115_9137[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9102 === (10)))
{var inst_9087 = (state_9101[(2)]);var state_9101__$1 = state_9101;var statearr_9116_9138 = state_9101__$1;(statearr_9116_9138[(2)] = inst_9087);
(statearr_9116_9138[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9102 === (8)))
{var inst_9084 = cljs.core.async.close_BANG_.call(null,to);var state_9101__$1 = state_9101;var statearr_9117_9139 = state_9101__$1;(statearr_9117_9139[(2)] = inst_9084);
(statearr_9117_9139[(1)] = (10));
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
});})(c__6188__auto___9125))
;return ((function (switch__6173__auto__,c__6188__auto___9125){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_9121 = [null,null,null,null,null,null,null,null];(statearr_9121[(0)] = state_machine__6174__auto__);
(statearr_9121[(1)] = (1));
return statearr_9121;
});
var state_machine__6174__auto____1 = (function (state_9101){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_9101);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e9122){if((e9122 instanceof Object))
{var ex__6177__auto__ = e9122;var statearr_9123_9140 = state_9101;(statearr_9123_9140[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9122;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9141 = state_9101;
state_9101 = G__9141;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_9101){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_9101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto___9125))
})();var state__6190__auto__ = (function (){var statearr_9124 = f__6189__auto__.call(null);(statearr_9124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___9125);
return statearr_9124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto___9125))
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
return (function (p__9324){var vec__9325 = p__9324;var v = cljs.core.nth.call(null,vec__9325,(0),null);var p = cljs.core.nth.call(null,vec__9325,(1),null);var job = vec__9325;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6188__auto___9506 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto___9506,res,vec__9325,v,p,job,jobs,results){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto___9506,res,vec__9325,v,p,job,jobs,results){
return (function (state_9330){var state_val_9331 = (state_9330[(1)]);if((state_val_9331 === (2)))
{var inst_9327 = (state_9330[(2)]);var inst_9328 = cljs.core.async.close_BANG_.call(null,res);var state_9330__$1 = (function (){var statearr_9332 = state_9330;(statearr_9332[(7)] = inst_9327);
return statearr_9332;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9330__$1,inst_9328);
} else
{if((state_val_9331 === (1)))
{var state_9330__$1 = state_9330;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9330__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6188__auto___9506,res,vec__9325,v,p,job,jobs,results))
;return ((function (switch__6173__auto__,c__6188__auto___9506,res,vec__9325,v,p,job,jobs,results){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_9336 = [null,null,null,null,null,null,null,null];(statearr_9336[(0)] = state_machine__6174__auto__);
(statearr_9336[(1)] = (1));
return statearr_9336;
});
var state_machine__6174__auto____1 = (function (state_9330){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_9330);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e9337){if((e9337 instanceof Object))
{var ex__6177__auto__ = e9337;var statearr_9338_9507 = state_9330;(statearr_9338_9507[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9330);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9508 = state_9330;
state_9330 = G__9508;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_9330){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_9330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto___9506,res,vec__9325,v,p,job,jobs,results))
})();var state__6190__auto__ = (function (){var statearr_9339 = f__6189__auto__.call(null);(statearr_9339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___9506);
return statearr_9339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto___9506,res,vec__9325,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__9340){var vec__9341 = p__9340;var v = cljs.core.nth.call(null,vec__9341,(0),null);var p = cljs.core.nth.call(null,vec__9341,(1),null);var job = vec__9341;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4407__auto___9509 = n;var __9510 = (0);while(true){
if((__9510 < n__4407__auto___9509))
{var G__9342_9511 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__9342_9511) {
case "async":
var c__6188__auto___9513 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__9510,c__6188__auto___9513,G__9342_9511,n__4407__auto___9509,jobs,results,process,async){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (__9510,c__6188__auto___9513,G__9342_9511,n__4407__auto___9509,jobs,results,process,async){
return (function (state_9355){var state_val_9356 = (state_9355[(1)]);if((state_val_9356 === (7)))
{var inst_9351 = (state_9355[(2)]);var state_9355__$1 = state_9355;var statearr_9357_9514 = state_9355__$1;(statearr_9357_9514[(2)] = inst_9351);
(statearr_9357_9514[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9356 === (6)))
{var state_9355__$1 = state_9355;var statearr_9358_9515 = state_9355__$1;(statearr_9358_9515[(2)] = null);
(statearr_9358_9515[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9356 === (5)))
{var state_9355__$1 = state_9355;var statearr_9359_9516 = state_9355__$1;(statearr_9359_9516[(2)] = null);
(statearr_9359_9516[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9356 === (4)))
{var inst_9345 = (state_9355[(2)]);var inst_9346 = async.call(null,inst_9345);var state_9355__$1 = state_9355;if(cljs.core.truth_(inst_9346))
{var statearr_9360_9517 = state_9355__$1;(statearr_9360_9517[(1)] = (5));
} else
{var statearr_9361_9518 = state_9355__$1;(statearr_9361_9518[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9356 === (3)))
{var inst_9353 = (state_9355[(2)]);var state_9355__$1 = state_9355;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9355__$1,inst_9353);
} else
{if((state_val_9356 === (2)))
{var state_9355__$1 = state_9355;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9355__$1,(4),jobs);
} else
{if((state_val_9356 === (1)))
{var state_9355__$1 = state_9355;var statearr_9362_9519 = state_9355__$1;(statearr_9362_9519[(2)] = null);
(statearr_9362_9519[(1)] = (2));
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
});})(__9510,c__6188__auto___9513,G__9342_9511,n__4407__auto___9509,jobs,results,process,async))
;return ((function (__9510,switch__6173__auto__,c__6188__auto___9513,G__9342_9511,n__4407__auto___9509,jobs,results,process,async){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_9366 = [null,null,null,null,null,null,null];(statearr_9366[(0)] = state_machine__6174__auto__);
(statearr_9366[(1)] = (1));
return statearr_9366;
});
var state_machine__6174__auto____1 = (function (state_9355){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_9355);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e9367){if((e9367 instanceof Object))
{var ex__6177__auto__ = e9367;var statearr_9368_9520 = state_9355;(statearr_9368_9520[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9355);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9367;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9521 = state_9355;
state_9355 = G__9521;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_9355){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_9355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(__9510,switch__6173__auto__,c__6188__auto___9513,G__9342_9511,n__4407__auto___9509,jobs,results,process,async))
})();var state__6190__auto__ = (function (){var statearr_9369 = f__6189__auto__.call(null);(statearr_9369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___9513);
return statearr_9369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(__9510,c__6188__auto___9513,G__9342_9511,n__4407__auto___9509,jobs,results,process,async))
);

break;
case "compute":
var c__6188__auto___9522 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__9510,c__6188__auto___9522,G__9342_9511,n__4407__auto___9509,jobs,results,process,async){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (__9510,c__6188__auto___9522,G__9342_9511,n__4407__auto___9509,jobs,results,process,async){
return (function (state_9382){var state_val_9383 = (state_9382[(1)]);if((state_val_9383 === (7)))
{var inst_9378 = (state_9382[(2)]);var state_9382__$1 = state_9382;var statearr_9384_9523 = state_9382__$1;(statearr_9384_9523[(2)] = inst_9378);
(statearr_9384_9523[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9383 === (6)))
{var state_9382__$1 = state_9382;var statearr_9385_9524 = state_9382__$1;(statearr_9385_9524[(2)] = null);
(statearr_9385_9524[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9383 === (5)))
{var state_9382__$1 = state_9382;var statearr_9386_9525 = state_9382__$1;(statearr_9386_9525[(2)] = null);
(statearr_9386_9525[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9383 === (4)))
{var inst_9372 = (state_9382[(2)]);var inst_9373 = process.call(null,inst_9372);var state_9382__$1 = state_9382;if(cljs.core.truth_(inst_9373))
{var statearr_9387_9526 = state_9382__$1;(statearr_9387_9526[(1)] = (5));
} else
{var statearr_9388_9527 = state_9382__$1;(statearr_9388_9527[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9383 === (3)))
{var inst_9380 = (state_9382[(2)]);var state_9382__$1 = state_9382;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9382__$1,inst_9380);
} else
{if((state_val_9383 === (2)))
{var state_9382__$1 = state_9382;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9382__$1,(4),jobs);
} else
{if((state_val_9383 === (1)))
{var state_9382__$1 = state_9382;var statearr_9389_9528 = state_9382__$1;(statearr_9389_9528[(2)] = null);
(statearr_9389_9528[(1)] = (2));
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
});})(__9510,c__6188__auto___9522,G__9342_9511,n__4407__auto___9509,jobs,results,process,async))
;return ((function (__9510,switch__6173__auto__,c__6188__auto___9522,G__9342_9511,n__4407__auto___9509,jobs,results,process,async){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_9393 = [null,null,null,null,null,null,null];(statearr_9393[(0)] = state_machine__6174__auto__);
(statearr_9393[(1)] = (1));
return statearr_9393;
});
var state_machine__6174__auto____1 = (function (state_9382){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_9382);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e9394){if((e9394 instanceof Object))
{var ex__6177__auto__ = e9394;var statearr_9395_9529 = state_9382;(statearr_9395_9529[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9382);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9394;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9530 = state_9382;
state_9382 = G__9530;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_9382){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_9382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(__9510,switch__6173__auto__,c__6188__auto___9522,G__9342_9511,n__4407__auto___9509,jobs,results,process,async))
})();var state__6190__auto__ = (function (){var statearr_9396 = f__6189__auto__.call(null);(statearr_9396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___9522);
return statearr_9396;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(__9510,c__6188__auto___9522,G__9342_9511,n__4407__auto___9509,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__9531 = (__9510 + (1));
__9510 = G__9531;
continue;
}
} else
{}
break;
}
var c__6188__auto___9532 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto___9532,jobs,results,process,async){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto___9532,jobs,results,process,async){
return (function (state_9417){var state_val_9418 = (state_9417[(1)]);if((state_val_9418 === (9)))
{var inst_9410 = (state_9417[(2)]);var state_9417__$1 = (function (){var statearr_9419 = state_9417;(statearr_9419[(7)] = inst_9410);
return statearr_9419;
})();var statearr_9420_9533 = state_9417__$1;(statearr_9420_9533[(2)] = null);
(statearr_9420_9533[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9418 === (8)))
{var inst_9404 = (state_9417[(8)]);var inst_9408 = (state_9417[(2)]);var state_9417__$1 = (function (){var statearr_9421 = state_9417;(statearr_9421[(9)] = inst_9408);
return statearr_9421;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9417__$1,(9),results,inst_9404);
} else
{if((state_val_9418 === (7)))
{var inst_9413 = (state_9417[(2)]);var state_9417__$1 = state_9417;var statearr_9422_9534 = state_9417__$1;(statearr_9422_9534[(2)] = inst_9413);
(statearr_9422_9534[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9418 === (6)))
{var inst_9399 = (state_9417[(10)]);var inst_9404 = (state_9417[(8)]);var inst_9404__$1 = cljs.core.async.chan.call(null,(1));var inst_9405 = [inst_9399,inst_9404__$1];var inst_9406 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9405,null));var state_9417__$1 = (function (){var statearr_9423 = state_9417;(statearr_9423[(8)] = inst_9404__$1);
return statearr_9423;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9417__$1,(8),jobs,inst_9406);
} else
{if((state_val_9418 === (5)))
{var inst_9402 = cljs.core.async.close_BANG_.call(null,jobs);var state_9417__$1 = state_9417;var statearr_9424_9535 = state_9417__$1;(statearr_9424_9535[(2)] = inst_9402);
(statearr_9424_9535[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9418 === (4)))
{var inst_9399 = (state_9417[(10)]);var inst_9399__$1 = (state_9417[(2)]);var inst_9400 = (inst_9399__$1 == null);var state_9417__$1 = (function (){var statearr_9425 = state_9417;(statearr_9425[(10)] = inst_9399__$1);
return statearr_9425;
})();if(cljs.core.truth_(inst_9400))
{var statearr_9426_9536 = state_9417__$1;(statearr_9426_9536[(1)] = (5));
} else
{var statearr_9427_9537 = state_9417__$1;(statearr_9427_9537[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9418 === (3)))
{var inst_9415 = (state_9417[(2)]);var state_9417__$1 = state_9417;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9417__$1,inst_9415);
} else
{if((state_val_9418 === (2)))
{var state_9417__$1 = state_9417;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9417__$1,(4),from);
} else
{if((state_val_9418 === (1)))
{var state_9417__$1 = state_9417;var statearr_9428_9538 = state_9417__$1;(statearr_9428_9538[(2)] = null);
(statearr_9428_9538[(1)] = (2));
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
});})(c__6188__auto___9532,jobs,results,process,async))
;return ((function (switch__6173__auto__,c__6188__auto___9532,jobs,results,process,async){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_9432 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9432[(0)] = state_machine__6174__auto__);
(statearr_9432[(1)] = (1));
return statearr_9432;
});
var state_machine__6174__auto____1 = (function (state_9417){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_9417);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e9433){if((e9433 instanceof Object))
{var ex__6177__auto__ = e9433;var statearr_9434_9539 = state_9417;(statearr_9434_9539[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9417);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9540 = state_9417;
state_9417 = G__9540;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_9417){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_9417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto___9532,jobs,results,process,async))
})();var state__6190__auto__ = (function (){var statearr_9435 = f__6189__auto__.call(null);(statearr_9435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___9532);
return statearr_9435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto___9532,jobs,results,process,async))
);
var c__6188__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto__,jobs,results,process,async){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto__,jobs,results,process,async){
return (function (state_9473){var state_val_9474 = (state_9473[(1)]);if((state_val_9474 === (7)))
{var inst_9469 = (state_9473[(2)]);var state_9473__$1 = state_9473;var statearr_9475_9541 = state_9473__$1;(statearr_9475_9541[(2)] = inst_9469);
(statearr_9475_9541[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9474 === (20)))
{var state_9473__$1 = state_9473;var statearr_9476_9542 = state_9473__$1;(statearr_9476_9542[(2)] = null);
(statearr_9476_9542[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9474 === (1)))
{var state_9473__$1 = state_9473;var statearr_9477_9543 = state_9473__$1;(statearr_9477_9543[(2)] = null);
(statearr_9477_9543[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9474 === (4)))
{var inst_9438 = (state_9473[(7)]);var inst_9438__$1 = (state_9473[(2)]);var inst_9439 = (inst_9438__$1 == null);var state_9473__$1 = (function (){var statearr_9478 = state_9473;(statearr_9478[(7)] = inst_9438__$1);
return statearr_9478;
})();if(cljs.core.truth_(inst_9439))
{var statearr_9479_9544 = state_9473__$1;(statearr_9479_9544[(1)] = (5));
} else
{var statearr_9480_9545 = state_9473__$1;(statearr_9480_9545[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9474 === (15)))
{var inst_9451 = (state_9473[(8)]);var state_9473__$1 = state_9473;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9473__$1,(18),to,inst_9451);
} else
{if((state_val_9474 === (21)))
{var inst_9464 = (state_9473[(2)]);var state_9473__$1 = state_9473;var statearr_9481_9546 = state_9473__$1;(statearr_9481_9546[(2)] = inst_9464);
(statearr_9481_9546[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9474 === (13)))
{var inst_9466 = (state_9473[(2)]);var state_9473__$1 = (function (){var statearr_9482 = state_9473;(statearr_9482[(9)] = inst_9466);
return statearr_9482;
})();var statearr_9483_9547 = state_9473__$1;(statearr_9483_9547[(2)] = null);
(statearr_9483_9547[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9474 === (6)))
{var inst_9438 = (state_9473[(7)]);var state_9473__$1 = state_9473;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9473__$1,(11),inst_9438);
} else
{if((state_val_9474 === (17)))
{var inst_9459 = (state_9473[(2)]);var state_9473__$1 = state_9473;if(cljs.core.truth_(inst_9459))
{var statearr_9484_9548 = state_9473__$1;(statearr_9484_9548[(1)] = (19));
} else
{var statearr_9485_9549 = state_9473__$1;(statearr_9485_9549[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9474 === (3)))
{var inst_9471 = (state_9473[(2)]);var state_9473__$1 = state_9473;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9473__$1,inst_9471);
} else
{if((state_val_9474 === (12)))
{var inst_9448 = (state_9473[(10)]);var state_9473__$1 = state_9473;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9473__$1,(14),inst_9448);
} else
{if((state_val_9474 === (2)))
{var state_9473__$1 = state_9473;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9473__$1,(4),results);
} else
{if((state_val_9474 === (19)))
{var state_9473__$1 = state_9473;var statearr_9486_9550 = state_9473__$1;(statearr_9486_9550[(2)] = null);
(statearr_9486_9550[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9474 === (11)))
{var inst_9448 = (state_9473[(2)]);var state_9473__$1 = (function (){var statearr_9487 = state_9473;(statearr_9487[(10)] = inst_9448);
return statearr_9487;
})();var statearr_9488_9551 = state_9473__$1;(statearr_9488_9551[(2)] = null);
(statearr_9488_9551[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9474 === (9)))
{var state_9473__$1 = state_9473;var statearr_9489_9552 = state_9473__$1;(statearr_9489_9552[(2)] = null);
(statearr_9489_9552[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9474 === (5)))
{var state_9473__$1 = state_9473;if(cljs.core.truth_(close_QMARK_))
{var statearr_9490_9553 = state_9473__$1;(statearr_9490_9553[(1)] = (8));
} else
{var statearr_9491_9554 = state_9473__$1;(statearr_9491_9554[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9474 === (14)))
{var inst_9453 = (state_9473[(11)]);var inst_9451 = (state_9473[(8)]);var inst_9451__$1 = (state_9473[(2)]);var inst_9452 = (inst_9451__$1 == null);var inst_9453__$1 = cljs.core.not.call(null,inst_9452);var state_9473__$1 = (function (){var statearr_9492 = state_9473;(statearr_9492[(11)] = inst_9453__$1);
(statearr_9492[(8)] = inst_9451__$1);
return statearr_9492;
})();if(inst_9453__$1)
{var statearr_9493_9555 = state_9473__$1;(statearr_9493_9555[(1)] = (15));
} else
{var statearr_9494_9556 = state_9473__$1;(statearr_9494_9556[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9474 === (16)))
{var inst_9453 = (state_9473[(11)]);var state_9473__$1 = state_9473;var statearr_9495_9557 = state_9473__$1;(statearr_9495_9557[(2)] = inst_9453);
(statearr_9495_9557[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9474 === (10)))
{var inst_9445 = (state_9473[(2)]);var state_9473__$1 = state_9473;var statearr_9496_9558 = state_9473__$1;(statearr_9496_9558[(2)] = inst_9445);
(statearr_9496_9558[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9474 === (18)))
{var inst_9456 = (state_9473[(2)]);var state_9473__$1 = state_9473;var statearr_9497_9559 = state_9473__$1;(statearr_9497_9559[(2)] = inst_9456);
(statearr_9497_9559[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9474 === (8)))
{var inst_9442 = cljs.core.async.close_BANG_.call(null,to);var state_9473__$1 = state_9473;var statearr_9498_9560 = state_9473__$1;(statearr_9498_9560[(2)] = inst_9442);
(statearr_9498_9560[(1)] = (10));
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
});})(c__6188__auto__,jobs,results,process,async))
;return ((function (switch__6173__auto__,c__6188__auto__,jobs,results,process,async){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_9502 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9502[(0)] = state_machine__6174__auto__);
(statearr_9502[(1)] = (1));
return statearr_9502;
});
var state_machine__6174__auto____1 = (function (state_9473){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_9473);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e9503){if((e9503 instanceof Object))
{var ex__6177__auto__ = e9503;var statearr_9504_9561 = state_9473;(statearr_9504_9561[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9473);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9503;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9562 = state_9473;
state_9473 = G__9562;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_9473){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_9473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto__,jobs,results,process,async))
})();var state__6190__auto__ = (function (){var statearr_9505 = f__6189__auto__.call(null);(statearr_9505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_9505;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto__,jobs,results,process,async))
);
return c__6188__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6188__auto___9663 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto___9663,tc,fc){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto___9663,tc,fc){
return (function (state_9638){var state_val_9639 = (state_9638[(1)]);if((state_val_9639 === (7)))
{var inst_9634 = (state_9638[(2)]);var state_9638__$1 = state_9638;var statearr_9640_9664 = state_9638__$1;(statearr_9640_9664[(2)] = inst_9634);
(statearr_9640_9664[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9639 === (1)))
{var state_9638__$1 = state_9638;var statearr_9641_9665 = state_9638__$1;(statearr_9641_9665[(2)] = null);
(statearr_9641_9665[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9639 === (4)))
{var inst_9615 = (state_9638[(7)]);var inst_9615__$1 = (state_9638[(2)]);var inst_9616 = (inst_9615__$1 == null);var state_9638__$1 = (function (){var statearr_9642 = state_9638;(statearr_9642[(7)] = inst_9615__$1);
return statearr_9642;
})();if(cljs.core.truth_(inst_9616))
{var statearr_9643_9666 = state_9638__$1;(statearr_9643_9666[(1)] = (5));
} else
{var statearr_9644_9667 = state_9638__$1;(statearr_9644_9667[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9639 === (13)))
{var state_9638__$1 = state_9638;var statearr_9645_9668 = state_9638__$1;(statearr_9645_9668[(2)] = null);
(statearr_9645_9668[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9639 === (6)))
{var inst_9615 = (state_9638[(7)]);var inst_9621 = p.call(null,inst_9615);var state_9638__$1 = state_9638;if(cljs.core.truth_(inst_9621))
{var statearr_9646_9669 = state_9638__$1;(statearr_9646_9669[(1)] = (9));
} else
{var statearr_9647_9670 = state_9638__$1;(statearr_9647_9670[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9639 === (3)))
{var inst_9636 = (state_9638[(2)]);var state_9638__$1 = state_9638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9638__$1,inst_9636);
} else
{if((state_val_9639 === (12)))
{var state_9638__$1 = state_9638;var statearr_9648_9671 = state_9638__$1;(statearr_9648_9671[(2)] = null);
(statearr_9648_9671[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9639 === (2)))
{var state_9638__$1 = state_9638;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9638__$1,(4),ch);
} else
{if((state_val_9639 === (11)))
{var inst_9615 = (state_9638[(7)]);var inst_9625 = (state_9638[(2)]);var state_9638__$1 = state_9638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9638__$1,(8),inst_9625,inst_9615);
} else
{if((state_val_9639 === (9)))
{var state_9638__$1 = state_9638;var statearr_9649_9672 = state_9638__$1;(statearr_9649_9672[(2)] = tc);
(statearr_9649_9672[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9639 === (5)))
{var inst_9618 = cljs.core.async.close_BANG_.call(null,tc);var inst_9619 = cljs.core.async.close_BANG_.call(null,fc);var state_9638__$1 = (function (){var statearr_9650 = state_9638;(statearr_9650[(8)] = inst_9618);
return statearr_9650;
})();var statearr_9651_9673 = state_9638__$1;(statearr_9651_9673[(2)] = inst_9619);
(statearr_9651_9673[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9639 === (14)))
{var inst_9632 = (state_9638[(2)]);var state_9638__$1 = state_9638;var statearr_9652_9674 = state_9638__$1;(statearr_9652_9674[(2)] = inst_9632);
(statearr_9652_9674[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9639 === (10)))
{var state_9638__$1 = state_9638;var statearr_9653_9675 = state_9638__$1;(statearr_9653_9675[(2)] = fc);
(statearr_9653_9675[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9639 === (8)))
{var inst_9627 = (state_9638[(2)]);var state_9638__$1 = state_9638;if(cljs.core.truth_(inst_9627))
{var statearr_9654_9676 = state_9638__$1;(statearr_9654_9676[(1)] = (12));
} else
{var statearr_9655_9677 = state_9638__$1;(statearr_9655_9677[(1)] = (13));
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
});})(c__6188__auto___9663,tc,fc))
;return ((function (switch__6173__auto__,c__6188__auto___9663,tc,fc){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_9659 = [null,null,null,null,null,null,null,null,null];(statearr_9659[(0)] = state_machine__6174__auto__);
(statearr_9659[(1)] = (1));
return statearr_9659;
});
var state_machine__6174__auto____1 = (function (state_9638){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_9638);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e9660){if((e9660 instanceof Object))
{var ex__6177__auto__ = e9660;var statearr_9661_9678 = state_9638;(statearr_9661_9678[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9638);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9660;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9679 = state_9638;
state_9638 = G__9679;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_9638){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_9638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto___9663,tc,fc))
})();var state__6190__auto__ = (function (){var statearr_9662 = f__6189__auto__.call(null);(statearr_9662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___9663);
return statearr_9662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto___9663,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6188__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto__){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto__){
return (function (state_9726){var state_val_9727 = (state_9726[(1)]);if((state_val_9727 === (7)))
{var inst_9722 = (state_9726[(2)]);var state_9726__$1 = state_9726;var statearr_9728_9744 = state_9726__$1;(statearr_9728_9744[(2)] = inst_9722);
(statearr_9728_9744[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9727 === (6)))
{var inst_9712 = (state_9726[(7)]);var inst_9715 = (state_9726[(8)]);var inst_9719 = f.call(null,inst_9712,inst_9715);var inst_9712__$1 = inst_9719;var state_9726__$1 = (function (){var statearr_9729 = state_9726;(statearr_9729[(7)] = inst_9712__$1);
return statearr_9729;
})();var statearr_9730_9745 = state_9726__$1;(statearr_9730_9745[(2)] = null);
(statearr_9730_9745[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9727 === (5)))
{var inst_9712 = (state_9726[(7)]);var state_9726__$1 = state_9726;var statearr_9731_9746 = state_9726__$1;(statearr_9731_9746[(2)] = inst_9712);
(statearr_9731_9746[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9727 === (4)))
{var inst_9715 = (state_9726[(8)]);var inst_9715__$1 = (state_9726[(2)]);var inst_9716 = (inst_9715__$1 == null);var state_9726__$1 = (function (){var statearr_9732 = state_9726;(statearr_9732[(8)] = inst_9715__$1);
return statearr_9732;
})();if(cljs.core.truth_(inst_9716))
{var statearr_9733_9747 = state_9726__$1;(statearr_9733_9747[(1)] = (5));
} else
{var statearr_9734_9748 = state_9726__$1;(statearr_9734_9748[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9727 === (3)))
{var inst_9724 = (state_9726[(2)]);var state_9726__$1 = state_9726;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9726__$1,inst_9724);
} else
{if((state_val_9727 === (2)))
{var state_9726__$1 = state_9726;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9726__$1,(4),ch);
} else
{if((state_val_9727 === (1)))
{var inst_9712 = init;var state_9726__$1 = (function (){var statearr_9735 = state_9726;(statearr_9735[(7)] = inst_9712);
return statearr_9735;
})();var statearr_9736_9749 = state_9726__$1;(statearr_9736_9749[(2)] = null);
(statearr_9736_9749[(1)] = (2));
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
});})(c__6188__auto__))
;return ((function (switch__6173__auto__,c__6188__auto__){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_9740 = [null,null,null,null,null,null,null,null,null];(statearr_9740[(0)] = state_machine__6174__auto__);
(statearr_9740[(1)] = (1));
return statearr_9740;
});
var state_machine__6174__auto____1 = (function (state_9726){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_9726);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e9741){if((e9741 instanceof Object))
{var ex__6177__auto__ = e9741;var statearr_9742_9750 = state_9726;(statearr_9742_9750[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9726);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9741;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9751 = state_9726;
state_9726 = G__9751;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_9726){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_9726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto__))
})();var state__6190__auto__ = (function (){var statearr_9743 = f__6189__auto__.call(null);(statearr_9743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_9743;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto__))
);
return c__6188__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6188__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto__){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto__){
return (function (state_9825){var state_val_9826 = (state_9825[(1)]);if((state_val_9826 === (7)))
{var inst_9807 = (state_9825[(2)]);var state_9825__$1 = state_9825;var statearr_9827_9850 = state_9825__$1;(statearr_9827_9850[(2)] = inst_9807);
(statearr_9827_9850[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9826 === (1)))
{var inst_9801 = cljs.core.seq.call(null,coll);var inst_9802 = inst_9801;var state_9825__$1 = (function (){var statearr_9828 = state_9825;(statearr_9828[(7)] = inst_9802);
return statearr_9828;
})();var statearr_9829_9851 = state_9825__$1;(statearr_9829_9851[(2)] = null);
(statearr_9829_9851[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9826 === (4)))
{var inst_9802 = (state_9825[(7)]);var inst_9805 = cljs.core.first.call(null,inst_9802);var state_9825__$1 = state_9825;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9825__$1,(7),ch,inst_9805);
} else
{if((state_val_9826 === (13)))
{var inst_9819 = (state_9825[(2)]);var state_9825__$1 = state_9825;var statearr_9830_9852 = state_9825__$1;(statearr_9830_9852[(2)] = inst_9819);
(statearr_9830_9852[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9826 === (6)))
{var inst_9810 = (state_9825[(2)]);var state_9825__$1 = state_9825;if(cljs.core.truth_(inst_9810))
{var statearr_9831_9853 = state_9825__$1;(statearr_9831_9853[(1)] = (8));
} else
{var statearr_9832_9854 = state_9825__$1;(statearr_9832_9854[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9826 === (3)))
{var inst_9823 = (state_9825[(2)]);var state_9825__$1 = state_9825;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9825__$1,inst_9823);
} else
{if((state_val_9826 === (12)))
{var state_9825__$1 = state_9825;var statearr_9833_9855 = state_9825__$1;(statearr_9833_9855[(2)] = null);
(statearr_9833_9855[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9826 === (2)))
{var inst_9802 = (state_9825[(7)]);var state_9825__$1 = state_9825;if(cljs.core.truth_(inst_9802))
{var statearr_9834_9856 = state_9825__$1;(statearr_9834_9856[(1)] = (4));
} else
{var statearr_9835_9857 = state_9825__$1;(statearr_9835_9857[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9826 === (11)))
{var inst_9816 = cljs.core.async.close_BANG_.call(null,ch);var state_9825__$1 = state_9825;var statearr_9836_9858 = state_9825__$1;(statearr_9836_9858[(2)] = inst_9816);
(statearr_9836_9858[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9826 === (9)))
{var state_9825__$1 = state_9825;if(cljs.core.truth_(close_QMARK_))
{var statearr_9837_9859 = state_9825__$1;(statearr_9837_9859[(1)] = (11));
} else
{var statearr_9838_9860 = state_9825__$1;(statearr_9838_9860[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9826 === (5)))
{var inst_9802 = (state_9825[(7)]);var state_9825__$1 = state_9825;var statearr_9839_9861 = state_9825__$1;(statearr_9839_9861[(2)] = inst_9802);
(statearr_9839_9861[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9826 === (10)))
{var inst_9821 = (state_9825[(2)]);var state_9825__$1 = state_9825;var statearr_9840_9862 = state_9825__$1;(statearr_9840_9862[(2)] = inst_9821);
(statearr_9840_9862[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9826 === (8)))
{var inst_9802 = (state_9825[(7)]);var inst_9812 = cljs.core.next.call(null,inst_9802);var inst_9802__$1 = inst_9812;var state_9825__$1 = (function (){var statearr_9841 = state_9825;(statearr_9841[(7)] = inst_9802__$1);
return statearr_9841;
})();var statearr_9842_9863 = state_9825__$1;(statearr_9842_9863[(2)] = null);
(statearr_9842_9863[(1)] = (2));
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
});})(c__6188__auto__))
;return ((function (switch__6173__auto__,c__6188__auto__){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_9846 = [null,null,null,null,null,null,null,null];(statearr_9846[(0)] = state_machine__6174__auto__);
(statearr_9846[(1)] = (1));
return statearr_9846;
});
var state_machine__6174__auto____1 = (function (state_9825){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_9825);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e9847){if((e9847 instanceof Object))
{var ex__6177__auto__ = e9847;var statearr_9848_9864 = state_9825;(statearr_9848_9864[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9825);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9847;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9865 = state_9825;
state_9825 = G__9865;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_9825){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_9825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto__))
})();var state__6190__auto__ = (function (){var statearr_9849 = f__6189__auto__.call(null);(statearr_9849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_9849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto__))
);
return c__6188__auto__;
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
cljs.core.async.Mux = (function (){var obj9867 = {};return obj9867;
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
cljs.core.async.Mult = (function (){var obj9869 = {};return obj9869;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10091 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10091 = (function (cs,ch,mult,meta10092){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10092 = meta10092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10091.cljs$lang$type = true;
cljs.core.async.t10091.cljs$lang$ctorStr = "cljs.core.async/t10091";
cljs.core.async.t10091.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t10091");
});})(cs))
;
cljs.core.async.t10091.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10091.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10091.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10091.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10091.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10091.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10093){var self__ = this;
var _10093__$1 = this;return self__.meta10092;
});})(cs))
;
cljs.core.async.t10091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10093,meta10092__$1){var self__ = this;
var _10093__$1 = this;return (new cljs.core.async.t10091(self__.cs,self__.ch,self__.mult,meta10092__$1));
});})(cs))
;
cljs.core.async.__GT_t10091 = ((function (cs){
return (function __GT_t10091(cs__$1,ch__$1,mult__$1,meta10092){return (new cljs.core.async.t10091(cs__$1,ch__$1,mult__$1,meta10092));
});})(cs))
;
}
return (new cljs.core.async.t10091(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6188__auto___10312 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto___10312,cs,m,dchan,dctr,done){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto___10312,cs,m,dchan,dctr,done){
return (function (state_10224){var state_val_10225 = (state_10224[(1)]);if((state_val_10225 === (7)))
{var inst_10220 = (state_10224[(2)]);var state_10224__$1 = state_10224;var statearr_10226_10313 = state_10224__$1;(statearr_10226_10313[(2)] = inst_10220);
(statearr_10226_10313[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (20)))
{var inst_10125 = (state_10224[(7)]);var inst_10135 = cljs.core.first.call(null,inst_10125);var inst_10136 = cljs.core.nth.call(null,inst_10135,(0),null);var inst_10137 = cljs.core.nth.call(null,inst_10135,(1),null);var state_10224__$1 = (function (){var statearr_10227 = state_10224;(statearr_10227[(8)] = inst_10136);
return statearr_10227;
})();if(cljs.core.truth_(inst_10137))
{var statearr_10228_10314 = state_10224__$1;(statearr_10228_10314[(1)] = (22));
} else
{var statearr_10229_10315 = state_10224__$1;(statearr_10229_10315[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (27)))
{var inst_10096 = (state_10224[(9)]);var inst_10165 = (state_10224[(10)]);var inst_10172 = (state_10224[(11)]);var inst_10167 = (state_10224[(12)]);var inst_10172__$1 = cljs.core._nth.call(null,inst_10165,inst_10167);var inst_10173 = cljs.core.async.put_BANG_.call(null,inst_10172__$1,inst_10096,done);var state_10224__$1 = (function (){var statearr_10230 = state_10224;(statearr_10230[(11)] = inst_10172__$1);
return statearr_10230;
})();if(cljs.core.truth_(inst_10173))
{var statearr_10231_10316 = state_10224__$1;(statearr_10231_10316[(1)] = (30));
} else
{var statearr_10232_10317 = state_10224__$1;(statearr_10232_10317[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (1)))
{var state_10224__$1 = state_10224;var statearr_10233_10318 = state_10224__$1;(statearr_10233_10318[(2)] = null);
(statearr_10233_10318[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (24)))
{var inst_10125 = (state_10224[(7)]);var inst_10142 = (state_10224[(2)]);var inst_10143 = cljs.core.next.call(null,inst_10125);var inst_10105 = inst_10143;var inst_10106 = null;var inst_10107 = (0);var inst_10108 = (0);var state_10224__$1 = (function (){var statearr_10234 = state_10224;(statearr_10234[(13)] = inst_10108);
(statearr_10234[(14)] = inst_10107);
(statearr_10234[(15)] = inst_10105);
(statearr_10234[(16)] = inst_10142);
(statearr_10234[(17)] = inst_10106);
return statearr_10234;
})();var statearr_10235_10319 = state_10224__$1;(statearr_10235_10319[(2)] = null);
(statearr_10235_10319[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (39)))
{var state_10224__$1 = state_10224;var statearr_10239_10320 = state_10224__$1;(statearr_10239_10320[(2)] = null);
(statearr_10239_10320[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (4)))
{var inst_10096 = (state_10224[(9)]);var inst_10096__$1 = (state_10224[(2)]);var inst_10097 = (inst_10096__$1 == null);var state_10224__$1 = (function (){var statearr_10240 = state_10224;(statearr_10240[(9)] = inst_10096__$1);
return statearr_10240;
})();if(cljs.core.truth_(inst_10097))
{var statearr_10241_10321 = state_10224__$1;(statearr_10241_10321[(1)] = (5));
} else
{var statearr_10242_10322 = state_10224__$1;(statearr_10242_10322[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (15)))
{var inst_10108 = (state_10224[(13)]);var inst_10107 = (state_10224[(14)]);var inst_10105 = (state_10224[(15)]);var inst_10106 = (state_10224[(17)]);var inst_10121 = (state_10224[(2)]);var inst_10122 = (inst_10108 + (1));var tmp10236 = inst_10107;var tmp10237 = inst_10105;var tmp10238 = inst_10106;var inst_10105__$1 = tmp10237;var inst_10106__$1 = tmp10238;var inst_10107__$1 = tmp10236;var inst_10108__$1 = inst_10122;var state_10224__$1 = (function (){var statearr_10243 = state_10224;(statearr_10243[(18)] = inst_10121);
(statearr_10243[(13)] = inst_10108__$1);
(statearr_10243[(14)] = inst_10107__$1);
(statearr_10243[(15)] = inst_10105__$1);
(statearr_10243[(17)] = inst_10106__$1);
return statearr_10243;
})();var statearr_10244_10323 = state_10224__$1;(statearr_10244_10323[(2)] = null);
(statearr_10244_10323[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (21)))
{var inst_10146 = (state_10224[(2)]);var state_10224__$1 = state_10224;var statearr_10248_10324 = state_10224__$1;(statearr_10248_10324[(2)] = inst_10146);
(statearr_10248_10324[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (31)))
{var inst_10172 = (state_10224[(11)]);var inst_10176 = done.call(null,null);var inst_10177 = cljs.core.async.untap_STAR_.call(null,m,inst_10172);var state_10224__$1 = (function (){var statearr_10249 = state_10224;(statearr_10249[(19)] = inst_10176);
return statearr_10249;
})();var statearr_10250_10325 = state_10224__$1;(statearr_10250_10325[(2)] = inst_10177);
(statearr_10250_10325[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (32)))
{var inst_10165 = (state_10224[(10)]);var inst_10166 = (state_10224[(20)]);var inst_10164 = (state_10224[(21)]);var inst_10167 = (state_10224[(12)]);var inst_10179 = (state_10224[(2)]);var inst_10180 = (inst_10167 + (1));var tmp10245 = inst_10165;var tmp10246 = inst_10166;var tmp10247 = inst_10164;var inst_10164__$1 = tmp10247;var inst_10165__$1 = tmp10245;var inst_10166__$1 = tmp10246;var inst_10167__$1 = inst_10180;var state_10224__$1 = (function (){var statearr_10251 = state_10224;(statearr_10251[(10)] = inst_10165__$1);
(statearr_10251[(20)] = inst_10166__$1);
(statearr_10251[(21)] = inst_10164__$1);
(statearr_10251[(22)] = inst_10179);
(statearr_10251[(12)] = inst_10167__$1);
return statearr_10251;
})();var statearr_10252_10326 = state_10224__$1;(statearr_10252_10326[(2)] = null);
(statearr_10252_10326[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (40)))
{var inst_10192 = (state_10224[(23)]);var inst_10196 = done.call(null,null);var inst_10197 = cljs.core.async.untap_STAR_.call(null,m,inst_10192);var state_10224__$1 = (function (){var statearr_10253 = state_10224;(statearr_10253[(24)] = inst_10196);
return statearr_10253;
})();var statearr_10254_10327 = state_10224__$1;(statearr_10254_10327[(2)] = inst_10197);
(statearr_10254_10327[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (33)))
{var inst_10183 = (state_10224[(25)]);var inst_10185 = cljs.core.chunked_seq_QMARK_.call(null,inst_10183);var state_10224__$1 = state_10224;if(inst_10185)
{var statearr_10255_10328 = state_10224__$1;(statearr_10255_10328[(1)] = (36));
} else
{var statearr_10256_10329 = state_10224__$1;(statearr_10256_10329[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (13)))
{var inst_10115 = (state_10224[(26)]);var inst_10118 = cljs.core.async.close_BANG_.call(null,inst_10115);var state_10224__$1 = state_10224;var statearr_10257_10330 = state_10224__$1;(statearr_10257_10330[(2)] = inst_10118);
(statearr_10257_10330[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (22)))
{var inst_10136 = (state_10224[(8)]);var inst_10139 = cljs.core.async.close_BANG_.call(null,inst_10136);var state_10224__$1 = state_10224;var statearr_10258_10331 = state_10224__$1;(statearr_10258_10331[(2)] = inst_10139);
(statearr_10258_10331[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (36)))
{var inst_10183 = (state_10224[(25)]);var inst_10187 = cljs.core.chunk_first.call(null,inst_10183);var inst_10188 = cljs.core.chunk_rest.call(null,inst_10183);var inst_10189 = cljs.core.count.call(null,inst_10187);var inst_10164 = inst_10188;var inst_10165 = inst_10187;var inst_10166 = inst_10189;var inst_10167 = (0);var state_10224__$1 = (function (){var statearr_10259 = state_10224;(statearr_10259[(10)] = inst_10165);
(statearr_10259[(20)] = inst_10166);
(statearr_10259[(21)] = inst_10164);
(statearr_10259[(12)] = inst_10167);
return statearr_10259;
})();var statearr_10260_10332 = state_10224__$1;(statearr_10260_10332[(2)] = null);
(statearr_10260_10332[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (41)))
{var inst_10183 = (state_10224[(25)]);var inst_10199 = (state_10224[(2)]);var inst_10200 = cljs.core.next.call(null,inst_10183);var inst_10164 = inst_10200;var inst_10165 = null;var inst_10166 = (0);var inst_10167 = (0);var state_10224__$1 = (function (){var statearr_10261 = state_10224;(statearr_10261[(10)] = inst_10165);
(statearr_10261[(27)] = inst_10199);
(statearr_10261[(20)] = inst_10166);
(statearr_10261[(21)] = inst_10164);
(statearr_10261[(12)] = inst_10167);
return statearr_10261;
})();var statearr_10262_10333 = state_10224__$1;(statearr_10262_10333[(2)] = null);
(statearr_10262_10333[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (43)))
{var state_10224__$1 = state_10224;var statearr_10263_10334 = state_10224__$1;(statearr_10263_10334[(2)] = null);
(statearr_10263_10334[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (29)))
{var inst_10208 = (state_10224[(2)]);var state_10224__$1 = state_10224;var statearr_10264_10335 = state_10224__$1;(statearr_10264_10335[(2)] = inst_10208);
(statearr_10264_10335[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (44)))
{var inst_10217 = (state_10224[(2)]);var state_10224__$1 = (function (){var statearr_10265 = state_10224;(statearr_10265[(28)] = inst_10217);
return statearr_10265;
})();var statearr_10266_10336 = state_10224__$1;(statearr_10266_10336[(2)] = null);
(statearr_10266_10336[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (6)))
{var inst_10156 = (state_10224[(29)]);var inst_10155 = cljs.core.deref.call(null,cs);var inst_10156__$1 = cljs.core.keys.call(null,inst_10155);var inst_10157 = cljs.core.count.call(null,inst_10156__$1);var inst_10158 = cljs.core.reset_BANG_.call(null,dctr,inst_10157);var inst_10163 = cljs.core.seq.call(null,inst_10156__$1);var inst_10164 = inst_10163;var inst_10165 = null;var inst_10166 = (0);var inst_10167 = (0);var state_10224__$1 = (function (){var statearr_10267 = state_10224;(statearr_10267[(30)] = inst_10158);
(statearr_10267[(10)] = inst_10165);
(statearr_10267[(20)] = inst_10166);
(statearr_10267[(29)] = inst_10156__$1);
(statearr_10267[(21)] = inst_10164);
(statearr_10267[(12)] = inst_10167);
return statearr_10267;
})();var statearr_10268_10337 = state_10224__$1;(statearr_10268_10337[(2)] = null);
(statearr_10268_10337[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (28)))
{var inst_10164 = (state_10224[(21)]);var inst_10183 = (state_10224[(25)]);var inst_10183__$1 = cljs.core.seq.call(null,inst_10164);var state_10224__$1 = (function (){var statearr_10269 = state_10224;(statearr_10269[(25)] = inst_10183__$1);
return statearr_10269;
})();if(inst_10183__$1)
{var statearr_10270_10338 = state_10224__$1;(statearr_10270_10338[(1)] = (33));
} else
{var statearr_10271_10339 = state_10224__$1;(statearr_10271_10339[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (25)))
{var inst_10166 = (state_10224[(20)]);var inst_10167 = (state_10224[(12)]);var inst_10169 = (inst_10167 < inst_10166);var inst_10170 = inst_10169;var state_10224__$1 = state_10224;if(cljs.core.truth_(inst_10170))
{var statearr_10272_10340 = state_10224__$1;(statearr_10272_10340[(1)] = (27));
} else
{var statearr_10273_10341 = state_10224__$1;(statearr_10273_10341[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (34)))
{var state_10224__$1 = state_10224;var statearr_10274_10342 = state_10224__$1;(statearr_10274_10342[(2)] = null);
(statearr_10274_10342[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (17)))
{var state_10224__$1 = state_10224;var statearr_10275_10343 = state_10224__$1;(statearr_10275_10343[(2)] = null);
(statearr_10275_10343[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (3)))
{var inst_10222 = (state_10224[(2)]);var state_10224__$1 = state_10224;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10224__$1,inst_10222);
} else
{if((state_val_10225 === (12)))
{var inst_10151 = (state_10224[(2)]);var state_10224__$1 = state_10224;var statearr_10276_10344 = state_10224__$1;(statearr_10276_10344[(2)] = inst_10151);
(statearr_10276_10344[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (2)))
{var state_10224__$1 = state_10224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10224__$1,(4),ch);
} else
{if((state_val_10225 === (23)))
{var state_10224__$1 = state_10224;var statearr_10277_10345 = state_10224__$1;(statearr_10277_10345[(2)] = null);
(statearr_10277_10345[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (35)))
{var inst_10206 = (state_10224[(2)]);var state_10224__$1 = state_10224;var statearr_10278_10346 = state_10224__$1;(statearr_10278_10346[(2)] = inst_10206);
(statearr_10278_10346[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (19)))
{var inst_10125 = (state_10224[(7)]);var inst_10129 = cljs.core.chunk_first.call(null,inst_10125);var inst_10130 = cljs.core.chunk_rest.call(null,inst_10125);var inst_10131 = cljs.core.count.call(null,inst_10129);var inst_10105 = inst_10130;var inst_10106 = inst_10129;var inst_10107 = inst_10131;var inst_10108 = (0);var state_10224__$1 = (function (){var statearr_10279 = state_10224;(statearr_10279[(13)] = inst_10108);
(statearr_10279[(14)] = inst_10107);
(statearr_10279[(15)] = inst_10105);
(statearr_10279[(17)] = inst_10106);
return statearr_10279;
})();var statearr_10280_10347 = state_10224__$1;(statearr_10280_10347[(2)] = null);
(statearr_10280_10347[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (11)))
{var inst_10125 = (state_10224[(7)]);var inst_10105 = (state_10224[(15)]);var inst_10125__$1 = cljs.core.seq.call(null,inst_10105);var state_10224__$1 = (function (){var statearr_10281 = state_10224;(statearr_10281[(7)] = inst_10125__$1);
return statearr_10281;
})();if(inst_10125__$1)
{var statearr_10282_10348 = state_10224__$1;(statearr_10282_10348[(1)] = (16));
} else
{var statearr_10283_10349 = state_10224__$1;(statearr_10283_10349[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (9)))
{var inst_10153 = (state_10224[(2)]);var state_10224__$1 = state_10224;var statearr_10284_10350 = state_10224__$1;(statearr_10284_10350[(2)] = inst_10153);
(statearr_10284_10350[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (5)))
{var inst_10103 = cljs.core.deref.call(null,cs);var inst_10104 = cljs.core.seq.call(null,inst_10103);var inst_10105 = inst_10104;var inst_10106 = null;var inst_10107 = (0);var inst_10108 = (0);var state_10224__$1 = (function (){var statearr_10285 = state_10224;(statearr_10285[(13)] = inst_10108);
(statearr_10285[(14)] = inst_10107);
(statearr_10285[(15)] = inst_10105);
(statearr_10285[(17)] = inst_10106);
return statearr_10285;
})();var statearr_10286_10351 = state_10224__$1;(statearr_10286_10351[(2)] = null);
(statearr_10286_10351[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (14)))
{var state_10224__$1 = state_10224;var statearr_10287_10352 = state_10224__$1;(statearr_10287_10352[(2)] = null);
(statearr_10287_10352[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (45)))
{var inst_10214 = (state_10224[(2)]);var state_10224__$1 = state_10224;var statearr_10288_10353 = state_10224__$1;(statearr_10288_10353[(2)] = inst_10214);
(statearr_10288_10353[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (26)))
{var inst_10156 = (state_10224[(29)]);var inst_10210 = (state_10224[(2)]);var inst_10211 = cljs.core.seq.call(null,inst_10156);var state_10224__$1 = (function (){var statearr_10289 = state_10224;(statearr_10289[(31)] = inst_10210);
return statearr_10289;
})();if(inst_10211)
{var statearr_10290_10354 = state_10224__$1;(statearr_10290_10354[(1)] = (42));
} else
{var statearr_10291_10355 = state_10224__$1;(statearr_10291_10355[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (16)))
{var inst_10125 = (state_10224[(7)]);var inst_10127 = cljs.core.chunked_seq_QMARK_.call(null,inst_10125);var state_10224__$1 = state_10224;if(inst_10127)
{var statearr_10292_10356 = state_10224__$1;(statearr_10292_10356[(1)] = (19));
} else
{var statearr_10293_10357 = state_10224__$1;(statearr_10293_10357[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (38)))
{var inst_10203 = (state_10224[(2)]);var state_10224__$1 = state_10224;var statearr_10294_10358 = state_10224__$1;(statearr_10294_10358[(2)] = inst_10203);
(statearr_10294_10358[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (30)))
{var state_10224__$1 = state_10224;var statearr_10295_10359 = state_10224__$1;(statearr_10295_10359[(2)] = null);
(statearr_10295_10359[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (10)))
{var inst_10108 = (state_10224[(13)]);var inst_10106 = (state_10224[(17)]);var inst_10114 = cljs.core._nth.call(null,inst_10106,inst_10108);var inst_10115 = cljs.core.nth.call(null,inst_10114,(0),null);var inst_10116 = cljs.core.nth.call(null,inst_10114,(1),null);var state_10224__$1 = (function (){var statearr_10296 = state_10224;(statearr_10296[(26)] = inst_10115);
return statearr_10296;
})();if(cljs.core.truth_(inst_10116))
{var statearr_10297_10360 = state_10224__$1;(statearr_10297_10360[(1)] = (13));
} else
{var statearr_10298_10361 = state_10224__$1;(statearr_10298_10361[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (18)))
{var inst_10149 = (state_10224[(2)]);var state_10224__$1 = state_10224;var statearr_10299_10362 = state_10224__$1;(statearr_10299_10362[(2)] = inst_10149);
(statearr_10299_10362[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (42)))
{var state_10224__$1 = state_10224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10224__$1,(45),dchan);
} else
{if((state_val_10225 === (37)))
{var inst_10192 = (state_10224[(23)]);var inst_10096 = (state_10224[(9)]);var inst_10183 = (state_10224[(25)]);var inst_10192__$1 = cljs.core.first.call(null,inst_10183);var inst_10193 = cljs.core.async.put_BANG_.call(null,inst_10192__$1,inst_10096,done);var state_10224__$1 = (function (){var statearr_10300 = state_10224;(statearr_10300[(23)] = inst_10192__$1);
return statearr_10300;
})();if(cljs.core.truth_(inst_10193))
{var statearr_10301_10363 = state_10224__$1;(statearr_10301_10363[(1)] = (39));
} else
{var statearr_10302_10364 = state_10224__$1;(statearr_10302_10364[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10225 === (8)))
{var inst_10108 = (state_10224[(13)]);var inst_10107 = (state_10224[(14)]);var inst_10110 = (inst_10108 < inst_10107);var inst_10111 = inst_10110;var state_10224__$1 = state_10224;if(cljs.core.truth_(inst_10111))
{var statearr_10303_10365 = state_10224__$1;(statearr_10303_10365[(1)] = (10));
} else
{var statearr_10304_10366 = state_10224__$1;(statearr_10304_10366[(1)] = (11));
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
});})(c__6188__auto___10312,cs,m,dchan,dctr,done))
;return ((function (switch__6173__auto__,c__6188__auto___10312,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_10308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10308[(0)] = state_machine__6174__auto__);
(statearr_10308[(1)] = (1));
return statearr_10308;
});
var state_machine__6174__auto____1 = (function (state_10224){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_10224);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e10309){if((e10309 instanceof Object))
{var ex__6177__auto__ = e10309;var statearr_10310_10367 = state_10224;(statearr_10310_10367[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10224);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10309;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10368 = state_10224;
state_10224 = G__10368;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_10224){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_10224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto___10312,cs,m,dchan,dctr,done))
})();var state__6190__auto__ = (function (){var statearr_10311 = f__6189__auto__.call(null);(statearr_10311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___10312);
return statearr_10311;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto___10312,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj10370 = {};return obj10370;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__10371){var map__10376 = p__10371;var map__10376__$1 = ((cljs.core.seq_QMARK_.call(null,map__10376))?cljs.core.apply.call(null,cljs.core.hash_map,map__10376):map__10376);var opts = map__10376__$1;var statearr_10377_10380 = state;(statearr_10377_10380[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__10376,map__10376__$1,opts){
return (function (val){var statearr_10378_10381 = state;(statearr_10378_10381[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10376,map__10376__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_10379_10382 = state;(statearr_10379_10382[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__10371 = null;if (arguments.length > 3) {
  p__10371 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__10371);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__10383){
var state = cljs.core.first(arglist__10383);
arglist__10383 = cljs.core.next(arglist__10383);
var cont_block = cljs.core.first(arglist__10383);
arglist__10383 = cljs.core.next(arglist__10383);
var ports = cljs.core.first(arglist__10383);
var p__10371 = cljs.core.rest(arglist__10383);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__10371);
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
;var m = (function (){if(typeof cljs.core.async.t10503 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10503 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10504){
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
this.meta10504 = meta10504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10503.cljs$lang$type = true;
cljs.core.async.t10503.cljs$lang$ctorStr = "cljs.core.async/t10503";
cljs.core.async.t10503.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t10503");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10503.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10503.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10503.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10503.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10503.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10503.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10503.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10505){var self__ = this;
var _10505__$1 = this;return self__.meta10504;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10505,meta10504__$1){var self__ = this;
var _10505__$1 = this;return (new cljs.core.async.t10503(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10504__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10503 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10503(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10504){return (new cljs.core.async.t10503(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10504));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10503(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6188__auto___10622 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto___10622,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto___10622,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10575){var state_val_10576 = (state_10575[(1)]);if((state_val_10576 === (7)))
{var inst_10519 = (state_10575[(7)]);var inst_10524 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10519);var state_10575__$1 = state_10575;var statearr_10577_10623 = state_10575__$1;(statearr_10577_10623[(2)] = inst_10524);
(statearr_10577_10623[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (20)))
{var inst_10534 = (state_10575[(8)]);var state_10575__$1 = state_10575;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10575__$1,(23),out,inst_10534);
} else
{if((state_val_10576 === (1)))
{var inst_10509 = (state_10575[(9)]);var inst_10509__$1 = calc_state.call(null);var inst_10510 = cljs.core.seq_QMARK_.call(null,inst_10509__$1);var state_10575__$1 = (function (){var statearr_10578 = state_10575;(statearr_10578[(9)] = inst_10509__$1);
return statearr_10578;
})();if(inst_10510)
{var statearr_10579_10624 = state_10575__$1;(statearr_10579_10624[(1)] = (2));
} else
{var statearr_10580_10625 = state_10575__$1;(statearr_10580_10625[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (24)))
{var inst_10527 = (state_10575[(10)]);var inst_10519 = inst_10527;var state_10575__$1 = (function (){var statearr_10581 = state_10575;(statearr_10581[(7)] = inst_10519);
return statearr_10581;
})();var statearr_10582_10626 = state_10575__$1;(statearr_10582_10626[(2)] = null);
(statearr_10582_10626[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (4)))
{var inst_10509 = (state_10575[(9)]);var inst_10515 = (state_10575[(2)]);var inst_10516 = cljs.core.get.call(null,inst_10515,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_10517 = cljs.core.get.call(null,inst_10515,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_10518 = cljs.core.get.call(null,inst_10515,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_10519 = inst_10509;var state_10575__$1 = (function (){var statearr_10583 = state_10575;(statearr_10583[(7)] = inst_10519);
(statearr_10583[(11)] = inst_10518);
(statearr_10583[(12)] = inst_10516);
(statearr_10583[(13)] = inst_10517);
return statearr_10583;
})();var statearr_10584_10627 = state_10575__$1;(statearr_10584_10627[(2)] = null);
(statearr_10584_10627[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (15)))
{var state_10575__$1 = state_10575;var statearr_10585_10628 = state_10575__$1;(statearr_10585_10628[(2)] = null);
(statearr_10585_10628[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (21)))
{var inst_10527 = (state_10575[(10)]);var inst_10519 = inst_10527;var state_10575__$1 = (function (){var statearr_10586 = state_10575;(statearr_10586[(7)] = inst_10519);
return statearr_10586;
})();var statearr_10587_10629 = state_10575__$1;(statearr_10587_10629[(2)] = null);
(statearr_10587_10629[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (13)))
{var inst_10571 = (state_10575[(2)]);var state_10575__$1 = state_10575;var statearr_10588_10630 = state_10575__$1;(statearr_10588_10630[(2)] = inst_10571);
(statearr_10588_10630[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (22)))
{var inst_10569 = (state_10575[(2)]);var state_10575__$1 = state_10575;var statearr_10589_10631 = state_10575__$1;(statearr_10589_10631[(2)] = inst_10569);
(statearr_10589_10631[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (6)))
{var inst_10573 = (state_10575[(2)]);var state_10575__$1 = state_10575;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10575__$1,inst_10573);
} else
{if((state_val_10576 === (25)))
{var state_10575__$1 = state_10575;var statearr_10590_10632 = state_10575__$1;(statearr_10590_10632[(2)] = null);
(statearr_10590_10632[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (17)))
{var inst_10549 = (state_10575[(14)]);var state_10575__$1 = state_10575;var statearr_10591_10633 = state_10575__$1;(statearr_10591_10633[(2)] = inst_10549);
(statearr_10591_10633[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (3)))
{var inst_10509 = (state_10575[(9)]);var state_10575__$1 = state_10575;var statearr_10592_10634 = state_10575__$1;(statearr_10592_10634[(2)] = inst_10509);
(statearr_10592_10634[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (12)))
{var inst_10535 = (state_10575[(15)]);var inst_10530 = (state_10575[(16)]);var inst_10549 = (state_10575[(14)]);var inst_10549__$1 = inst_10530.call(null,inst_10535);var state_10575__$1 = (function (){var statearr_10593 = state_10575;(statearr_10593[(14)] = inst_10549__$1);
return statearr_10593;
})();if(cljs.core.truth_(inst_10549__$1))
{var statearr_10594_10635 = state_10575__$1;(statearr_10594_10635[(1)] = (17));
} else
{var statearr_10595_10636 = state_10575__$1;(statearr_10595_10636[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (2)))
{var inst_10509 = (state_10575[(9)]);var inst_10512 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10509);var state_10575__$1 = state_10575;var statearr_10596_10637 = state_10575__$1;(statearr_10596_10637[(2)] = inst_10512);
(statearr_10596_10637[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (23)))
{var inst_10560 = (state_10575[(2)]);var state_10575__$1 = state_10575;if(cljs.core.truth_(inst_10560))
{var statearr_10597_10638 = state_10575__$1;(statearr_10597_10638[(1)] = (24));
} else
{var statearr_10598_10639 = state_10575__$1;(statearr_10598_10639[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (19)))
{var inst_10557 = (state_10575[(2)]);var state_10575__$1 = state_10575;if(cljs.core.truth_(inst_10557))
{var statearr_10599_10640 = state_10575__$1;(statearr_10599_10640[(1)] = (20));
} else
{var statearr_10600_10641 = state_10575__$1;(statearr_10600_10641[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (11)))
{var inst_10534 = (state_10575[(8)]);var inst_10540 = (inst_10534 == null);var state_10575__$1 = state_10575;if(cljs.core.truth_(inst_10540))
{var statearr_10601_10642 = state_10575__$1;(statearr_10601_10642[(1)] = (14));
} else
{var statearr_10602_10643 = state_10575__$1;(statearr_10602_10643[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (9)))
{var inst_10527 = (state_10575[(10)]);var inst_10527__$1 = (state_10575[(2)]);var inst_10528 = cljs.core.get.call(null,inst_10527__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_10529 = cljs.core.get.call(null,inst_10527__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_10530 = cljs.core.get.call(null,inst_10527__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_10575__$1 = (function (){var statearr_10603 = state_10575;(statearr_10603[(16)] = inst_10530);
(statearr_10603[(17)] = inst_10529);
(statearr_10603[(10)] = inst_10527__$1);
return statearr_10603;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_10575__$1,(10),inst_10528);
} else
{if((state_val_10576 === (5)))
{var inst_10519 = (state_10575[(7)]);var inst_10522 = cljs.core.seq_QMARK_.call(null,inst_10519);var state_10575__$1 = state_10575;if(inst_10522)
{var statearr_10604_10644 = state_10575__$1;(statearr_10604_10644[(1)] = (7));
} else
{var statearr_10605_10645 = state_10575__$1;(statearr_10605_10645[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (14)))
{var inst_10535 = (state_10575[(15)]);var inst_10542 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10535);var state_10575__$1 = state_10575;var statearr_10606_10646 = state_10575__$1;(statearr_10606_10646[(2)] = inst_10542);
(statearr_10606_10646[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (26)))
{var inst_10565 = (state_10575[(2)]);var state_10575__$1 = state_10575;var statearr_10607_10647 = state_10575__$1;(statearr_10607_10647[(2)] = inst_10565);
(statearr_10607_10647[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (16)))
{var inst_10545 = (state_10575[(2)]);var inst_10546 = calc_state.call(null);var inst_10519 = inst_10546;var state_10575__$1 = (function (){var statearr_10608 = state_10575;(statearr_10608[(7)] = inst_10519);
(statearr_10608[(18)] = inst_10545);
return statearr_10608;
})();var statearr_10609_10648 = state_10575__$1;(statearr_10609_10648[(2)] = null);
(statearr_10609_10648[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (10)))
{var inst_10535 = (state_10575[(15)]);var inst_10534 = (state_10575[(8)]);var inst_10533 = (state_10575[(2)]);var inst_10534__$1 = cljs.core.nth.call(null,inst_10533,(0),null);var inst_10535__$1 = cljs.core.nth.call(null,inst_10533,(1),null);var inst_10536 = (inst_10534__$1 == null);var inst_10537 = cljs.core._EQ_.call(null,inst_10535__$1,change);var inst_10538 = (inst_10536) || (inst_10537);var state_10575__$1 = (function (){var statearr_10610 = state_10575;(statearr_10610[(15)] = inst_10535__$1);
(statearr_10610[(8)] = inst_10534__$1);
return statearr_10610;
})();if(cljs.core.truth_(inst_10538))
{var statearr_10611_10649 = state_10575__$1;(statearr_10611_10649[(1)] = (11));
} else
{var statearr_10612_10650 = state_10575__$1;(statearr_10612_10650[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (18)))
{var inst_10535 = (state_10575[(15)]);var inst_10530 = (state_10575[(16)]);var inst_10529 = (state_10575[(17)]);var inst_10552 = cljs.core.empty_QMARK_.call(null,inst_10530);var inst_10553 = inst_10529.call(null,inst_10535);var inst_10554 = cljs.core.not.call(null,inst_10553);var inst_10555 = (inst_10552) && (inst_10554);var state_10575__$1 = state_10575;var statearr_10613_10651 = state_10575__$1;(statearr_10613_10651[(2)] = inst_10555);
(statearr_10613_10651[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10576 === (8)))
{var inst_10519 = (state_10575[(7)]);var state_10575__$1 = state_10575;var statearr_10614_10652 = state_10575__$1;(statearr_10614_10652[(2)] = inst_10519);
(statearr_10614_10652[(1)] = (9));
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
});})(c__6188__auto___10622,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6173__auto__,c__6188__auto___10622,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_10618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10618[(0)] = state_machine__6174__auto__);
(statearr_10618[(1)] = (1));
return statearr_10618;
});
var state_machine__6174__auto____1 = (function (state_10575){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_10575);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e10619){if((e10619 instanceof Object))
{var ex__6177__auto__ = e10619;var statearr_10620_10653 = state_10575;(statearr_10620_10653[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10575);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10654 = state_10575;
state_10575 = G__10654;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_10575){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_10575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto___10622,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6190__auto__ = (function (){var statearr_10621 = f__6189__auto__.call(null);(statearr_10621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___10622);
return statearr_10621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto___10622,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj10656 = {};return obj10656;
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
return (function (p1__10657_SHARP_){if(cljs.core.truth_(p1__10657_SHARP_.call(null,topic)))
{return p1__10657_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10657_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3551__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10780 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10780 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10781){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10781 = meta10781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10780.cljs$lang$type = true;
cljs.core.async.t10780.cljs$lang$ctorStr = "cljs.core.async/t10780";
cljs.core.async.t10780.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t10780");
});})(mults,ensure_mult))
;
cljs.core.async.t10780.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10780.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10780.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10780.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10780.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10780.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10780.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10782){var self__ = this;
var _10782__$1 = this;return self__.meta10781;
});})(mults,ensure_mult))
;
cljs.core.async.t10780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10782,meta10781__$1){var self__ = this;
var _10782__$1 = this;return (new cljs.core.async.t10780(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10781__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10780 = ((function (mults,ensure_mult){
return (function __GT_t10780(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10781){return (new cljs.core.async.t10780(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10781));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10780(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6188__auto___10902 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto___10902,mults,ensure_mult,p){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto___10902,mults,ensure_mult,p){
return (function (state_10854){var state_val_10855 = (state_10854[(1)]);if((state_val_10855 === (7)))
{var inst_10850 = (state_10854[(2)]);var state_10854__$1 = state_10854;var statearr_10856_10903 = state_10854__$1;(statearr_10856_10903[(2)] = inst_10850);
(statearr_10856_10903[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (20)))
{var state_10854__$1 = state_10854;var statearr_10857_10904 = state_10854__$1;(statearr_10857_10904[(2)] = null);
(statearr_10857_10904[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (1)))
{var state_10854__$1 = state_10854;var statearr_10858_10905 = state_10854__$1;(statearr_10858_10905[(2)] = null);
(statearr_10858_10905[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (24)))
{var inst_10833 = (state_10854[(7)]);var inst_10842 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10833);var state_10854__$1 = state_10854;var statearr_10859_10906 = state_10854__$1;(statearr_10859_10906[(2)] = inst_10842);
(statearr_10859_10906[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (4)))
{var inst_10785 = (state_10854[(8)]);var inst_10785__$1 = (state_10854[(2)]);var inst_10786 = (inst_10785__$1 == null);var state_10854__$1 = (function (){var statearr_10860 = state_10854;(statearr_10860[(8)] = inst_10785__$1);
return statearr_10860;
})();if(cljs.core.truth_(inst_10786))
{var statearr_10861_10907 = state_10854__$1;(statearr_10861_10907[(1)] = (5));
} else
{var statearr_10862_10908 = state_10854__$1;(statearr_10862_10908[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (15)))
{var inst_10827 = (state_10854[(2)]);var state_10854__$1 = state_10854;var statearr_10863_10909 = state_10854__$1;(statearr_10863_10909[(2)] = inst_10827);
(statearr_10863_10909[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (21)))
{var inst_10847 = (state_10854[(2)]);var state_10854__$1 = (function (){var statearr_10864 = state_10854;(statearr_10864[(9)] = inst_10847);
return statearr_10864;
})();var statearr_10865_10910 = state_10854__$1;(statearr_10865_10910[(2)] = null);
(statearr_10865_10910[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (13)))
{var inst_10809 = (state_10854[(10)]);var inst_10811 = cljs.core.chunked_seq_QMARK_.call(null,inst_10809);var state_10854__$1 = state_10854;if(inst_10811)
{var statearr_10866_10911 = state_10854__$1;(statearr_10866_10911[(1)] = (16));
} else
{var statearr_10867_10912 = state_10854__$1;(statearr_10867_10912[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (22)))
{var inst_10839 = (state_10854[(2)]);var state_10854__$1 = state_10854;if(cljs.core.truth_(inst_10839))
{var statearr_10868_10913 = state_10854__$1;(statearr_10868_10913[(1)] = (23));
} else
{var statearr_10869_10914 = state_10854__$1;(statearr_10869_10914[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (6)))
{var inst_10835 = (state_10854[(11)]);var inst_10785 = (state_10854[(8)]);var inst_10833 = (state_10854[(7)]);var inst_10833__$1 = topic_fn.call(null,inst_10785);var inst_10834 = cljs.core.deref.call(null,mults);var inst_10835__$1 = cljs.core.get.call(null,inst_10834,inst_10833__$1);var state_10854__$1 = (function (){var statearr_10870 = state_10854;(statearr_10870[(11)] = inst_10835__$1);
(statearr_10870[(7)] = inst_10833__$1);
return statearr_10870;
})();if(cljs.core.truth_(inst_10835__$1))
{var statearr_10871_10915 = state_10854__$1;(statearr_10871_10915[(1)] = (19));
} else
{var statearr_10872_10916 = state_10854__$1;(statearr_10872_10916[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (25)))
{var inst_10844 = (state_10854[(2)]);var state_10854__$1 = state_10854;var statearr_10873_10917 = state_10854__$1;(statearr_10873_10917[(2)] = inst_10844);
(statearr_10873_10917[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (17)))
{var inst_10809 = (state_10854[(10)]);var inst_10818 = cljs.core.first.call(null,inst_10809);var inst_10819 = cljs.core.async.muxch_STAR_.call(null,inst_10818);var inst_10820 = cljs.core.async.close_BANG_.call(null,inst_10819);var inst_10821 = cljs.core.next.call(null,inst_10809);var inst_10795 = inst_10821;var inst_10796 = null;var inst_10797 = (0);var inst_10798 = (0);var state_10854__$1 = (function (){var statearr_10874 = state_10854;(statearr_10874[(12)] = inst_10797);
(statearr_10874[(13)] = inst_10795);
(statearr_10874[(14)] = inst_10820);
(statearr_10874[(15)] = inst_10796);
(statearr_10874[(16)] = inst_10798);
return statearr_10874;
})();var statearr_10875_10918 = state_10854__$1;(statearr_10875_10918[(2)] = null);
(statearr_10875_10918[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (3)))
{var inst_10852 = (state_10854[(2)]);var state_10854__$1 = state_10854;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10854__$1,inst_10852);
} else
{if((state_val_10855 === (12)))
{var inst_10829 = (state_10854[(2)]);var state_10854__$1 = state_10854;var statearr_10876_10919 = state_10854__$1;(statearr_10876_10919[(2)] = inst_10829);
(statearr_10876_10919[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (2)))
{var state_10854__$1 = state_10854;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10854__$1,(4),ch);
} else
{if((state_val_10855 === (23)))
{var state_10854__$1 = state_10854;var statearr_10877_10920 = state_10854__$1;(statearr_10877_10920[(2)] = null);
(statearr_10877_10920[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (19)))
{var inst_10835 = (state_10854[(11)]);var inst_10785 = (state_10854[(8)]);var inst_10837 = cljs.core.async.muxch_STAR_.call(null,inst_10835);var state_10854__$1 = state_10854;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10854__$1,(22),inst_10837,inst_10785);
} else
{if((state_val_10855 === (11)))
{var inst_10795 = (state_10854[(13)]);var inst_10809 = (state_10854[(10)]);var inst_10809__$1 = cljs.core.seq.call(null,inst_10795);var state_10854__$1 = (function (){var statearr_10878 = state_10854;(statearr_10878[(10)] = inst_10809__$1);
return statearr_10878;
})();if(inst_10809__$1)
{var statearr_10879_10921 = state_10854__$1;(statearr_10879_10921[(1)] = (13));
} else
{var statearr_10880_10922 = state_10854__$1;(statearr_10880_10922[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (9)))
{var inst_10831 = (state_10854[(2)]);var state_10854__$1 = state_10854;var statearr_10881_10923 = state_10854__$1;(statearr_10881_10923[(2)] = inst_10831);
(statearr_10881_10923[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (5)))
{var inst_10792 = cljs.core.deref.call(null,mults);var inst_10793 = cljs.core.vals.call(null,inst_10792);var inst_10794 = cljs.core.seq.call(null,inst_10793);var inst_10795 = inst_10794;var inst_10796 = null;var inst_10797 = (0);var inst_10798 = (0);var state_10854__$1 = (function (){var statearr_10882 = state_10854;(statearr_10882[(12)] = inst_10797);
(statearr_10882[(13)] = inst_10795);
(statearr_10882[(15)] = inst_10796);
(statearr_10882[(16)] = inst_10798);
return statearr_10882;
})();var statearr_10883_10924 = state_10854__$1;(statearr_10883_10924[(2)] = null);
(statearr_10883_10924[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (14)))
{var state_10854__$1 = state_10854;var statearr_10887_10925 = state_10854__$1;(statearr_10887_10925[(2)] = null);
(statearr_10887_10925[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (16)))
{var inst_10809 = (state_10854[(10)]);var inst_10813 = cljs.core.chunk_first.call(null,inst_10809);var inst_10814 = cljs.core.chunk_rest.call(null,inst_10809);var inst_10815 = cljs.core.count.call(null,inst_10813);var inst_10795 = inst_10814;var inst_10796 = inst_10813;var inst_10797 = inst_10815;var inst_10798 = (0);var state_10854__$1 = (function (){var statearr_10888 = state_10854;(statearr_10888[(12)] = inst_10797);
(statearr_10888[(13)] = inst_10795);
(statearr_10888[(15)] = inst_10796);
(statearr_10888[(16)] = inst_10798);
return statearr_10888;
})();var statearr_10889_10926 = state_10854__$1;(statearr_10889_10926[(2)] = null);
(statearr_10889_10926[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (10)))
{var inst_10797 = (state_10854[(12)]);var inst_10795 = (state_10854[(13)]);var inst_10796 = (state_10854[(15)]);var inst_10798 = (state_10854[(16)]);var inst_10803 = cljs.core._nth.call(null,inst_10796,inst_10798);var inst_10804 = cljs.core.async.muxch_STAR_.call(null,inst_10803);var inst_10805 = cljs.core.async.close_BANG_.call(null,inst_10804);var inst_10806 = (inst_10798 + (1));var tmp10884 = inst_10797;var tmp10885 = inst_10795;var tmp10886 = inst_10796;var inst_10795__$1 = tmp10885;var inst_10796__$1 = tmp10886;var inst_10797__$1 = tmp10884;var inst_10798__$1 = inst_10806;var state_10854__$1 = (function (){var statearr_10890 = state_10854;(statearr_10890[(12)] = inst_10797__$1);
(statearr_10890[(13)] = inst_10795__$1);
(statearr_10890[(15)] = inst_10796__$1);
(statearr_10890[(16)] = inst_10798__$1);
(statearr_10890[(17)] = inst_10805);
return statearr_10890;
})();var statearr_10891_10927 = state_10854__$1;(statearr_10891_10927[(2)] = null);
(statearr_10891_10927[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (18)))
{var inst_10824 = (state_10854[(2)]);var state_10854__$1 = state_10854;var statearr_10892_10928 = state_10854__$1;(statearr_10892_10928[(2)] = inst_10824);
(statearr_10892_10928[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10855 === (8)))
{var inst_10797 = (state_10854[(12)]);var inst_10798 = (state_10854[(16)]);var inst_10800 = (inst_10798 < inst_10797);var inst_10801 = inst_10800;var state_10854__$1 = state_10854;if(cljs.core.truth_(inst_10801))
{var statearr_10893_10929 = state_10854__$1;(statearr_10893_10929[(1)] = (10));
} else
{var statearr_10894_10930 = state_10854__$1;(statearr_10894_10930[(1)] = (11));
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
});})(c__6188__auto___10902,mults,ensure_mult,p))
;return ((function (switch__6173__auto__,c__6188__auto___10902,mults,ensure_mult,p){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_10898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10898[(0)] = state_machine__6174__auto__);
(statearr_10898[(1)] = (1));
return statearr_10898;
});
var state_machine__6174__auto____1 = (function (state_10854){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_10854);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e10899){if((e10899 instanceof Object))
{var ex__6177__auto__ = e10899;var statearr_10900_10931 = state_10854;(statearr_10900_10931[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10854);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10932 = state_10854;
state_10854 = G__10932;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_10854){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_10854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto___10902,mults,ensure_mult,p))
})();var state__6190__auto__ = (function (){var statearr_10901 = f__6189__auto__.call(null);(statearr_10901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___10902);
return statearr_10901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto___10902,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6188__auto___11069 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto___11069,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto___11069,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11039){var state_val_11040 = (state_11039[(1)]);if((state_val_11040 === (7)))
{var state_11039__$1 = state_11039;var statearr_11041_11070 = state_11039__$1;(statearr_11041_11070[(2)] = null);
(statearr_11041_11070[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11040 === (1)))
{var state_11039__$1 = state_11039;var statearr_11042_11071 = state_11039__$1;(statearr_11042_11071[(2)] = null);
(statearr_11042_11071[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11040 === (4)))
{var inst_11003 = (state_11039[(7)]);var inst_11005 = (inst_11003 < cnt);var state_11039__$1 = state_11039;if(cljs.core.truth_(inst_11005))
{var statearr_11043_11072 = state_11039__$1;(statearr_11043_11072[(1)] = (6));
} else
{var statearr_11044_11073 = state_11039__$1;(statearr_11044_11073[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11040 === (15)))
{var inst_11035 = (state_11039[(2)]);var state_11039__$1 = state_11039;var statearr_11045_11074 = state_11039__$1;(statearr_11045_11074[(2)] = inst_11035);
(statearr_11045_11074[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11040 === (13)))
{var inst_11028 = cljs.core.async.close_BANG_.call(null,out);var state_11039__$1 = state_11039;var statearr_11046_11075 = state_11039__$1;(statearr_11046_11075[(2)] = inst_11028);
(statearr_11046_11075[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11040 === (6)))
{var state_11039__$1 = state_11039;var statearr_11047_11076 = state_11039__$1;(statearr_11047_11076[(2)] = null);
(statearr_11047_11076[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11040 === (3)))
{var inst_11037 = (state_11039[(2)]);var state_11039__$1 = state_11039;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11039__$1,inst_11037);
} else
{if((state_val_11040 === (12)))
{var inst_11025 = (state_11039[(8)]);var inst_11025__$1 = (state_11039[(2)]);var inst_11026 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11025__$1);var state_11039__$1 = (function (){var statearr_11048 = state_11039;(statearr_11048[(8)] = inst_11025__$1);
return statearr_11048;
})();if(cljs.core.truth_(inst_11026))
{var statearr_11049_11077 = state_11039__$1;(statearr_11049_11077[(1)] = (13));
} else
{var statearr_11050_11078 = state_11039__$1;(statearr_11050_11078[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11040 === (2)))
{var inst_11002 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11003 = (0);var state_11039__$1 = (function (){var statearr_11051 = state_11039;(statearr_11051[(7)] = inst_11003);
(statearr_11051[(9)] = inst_11002);
return statearr_11051;
})();var statearr_11052_11079 = state_11039__$1;(statearr_11052_11079[(2)] = null);
(statearr_11052_11079[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11040 === (11)))
{var inst_11003 = (state_11039[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11039,(10),Object,null,(9));var inst_11012 = chs__$1.call(null,inst_11003);var inst_11013 = done.call(null,inst_11003);var inst_11014 = cljs.core.async.take_BANG_.call(null,inst_11012,inst_11013);var state_11039__$1 = state_11039;var statearr_11053_11080 = state_11039__$1;(statearr_11053_11080[(2)] = inst_11014);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11039__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11040 === (9)))
{var inst_11003 = (state_11039[(7)]);var inst_11016 = (state_11039[(2)]);var inst_11017 = (inst_11003 + (1));var inst_11003__$1 = inst_11017;var state_11039__$1 = (function (){var statearr_11054 = state_11039;(statearr_11054[(7)] = inst_11003__$1);
(statearr_11054[(10)] = inst_11016);
return statearr_11054;
})();var statearr_11055_11081 = state_11039__$1;(statearr_11055_11081[(2)] = null);
(statearr_11055_11081[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11040 === (5)))
{var inst_11023 = (state_11039[(2)]);var state_11039__$1 = (function (){var statearr_11056 = state_11039;(statearr_11056[(11)] = inst_11023);
return statearr_11056;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11039__$1,(12),dchan);
} else
{if((state_val_11040 === (14)))
{var inst_11025 = (state_11039[(8)]);var inst_11030 = cljs.core.apply.call(null,f,inst_11025);var state_11039__$1 = state_11039;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11039__$1,(16),out,inst_11030);
} else
{if((state_val_11040 === (16)))
{var inst_11032 = (state_11039[(2)]);var state_11039__$1 = (function (){var statearr_11057 = state_11039;(statearr_11057[(12)] = inst_11032);
return statearr_11057;
})();var statearr_11058_11082 = state_11039__$1;(statearr_11058_11082[(2)] = null);
(statearr_11058_11082[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11040 === (10)))
{var inst_11007 = (state_11039[(2)]);var inst_11008 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11039__$1 = (function (){var statearr_11059 = state_11039;(statearr_11059[(13)] = inst_11007);
return statearr_11059;
})();var statearr_11060_11083 = state_11039__$1;(statearr_11060_11083[(2)] = inst_11008);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11039__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11040 === (8)))
{var inst_11021 = (state_11039[(2)]);var state_11039__$1 = state_11039;var statearr_11061_11084 = state_11039__$1;(statearr_11061_11084[(2)] = inst_11021);
(statearr_11061_11084[(1)] = (5));
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
});})(c__6188__auto___11069,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6173__auto__,c__6188__auto___11069,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_11065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11065[(0)] = state_machine__6174__auto__);
(statearr_11065[(1)] = (1));
return statearr_11065;
});
var state_machine__6174__auto____1 = (function (state_11039){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_11039);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e11066){if((e11066 instanceof Object))
{var ex__6177__auto__ = e11066;var statearr_11067_11085 = state_11039;(statearr_11067_11085[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11039);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11086 = state_11039;
state_11039 = G__11086;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_11039){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_11039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto___11069,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6190__auto__ = (function (){var statearr_11068 = f__6189__auto__.call(null);(statearr_11068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___11069);
return statearr_11068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto___11069,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6188__auto___11194 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto___11194,out){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto___11194,out){
return (function (state_11170){var state_val_11171 = (state_11170[(1)]);if((state_val_11171 === (7)))
{var inst_11150 = (state_11170[(7)]);var inst_11149 = (state_11170[(8)]);var inst_11149__$1 = (state_11170[(2)]);var inst_11150__$1 = cljs.core.nth.call(null,inst_11149__$1,(0),null);var inst_11151 = cljs.core.nth.call(null,inst_11149__$1,(1),null);var inst_11152 = (inst_11150__$1 == null);var state_11170__$1 = (function (){var statearr_11172 = state_11170;(statearr_11172[(7)] = inst_11150__$1);
(statearr_11172[(8)] = inst_11149__$1);
(statearr_11172[(9)] = inst_11151);
return statearr_11172;
})();if(cljs.core.truth_(inst_11152))
{var statearr_11173_11195 = state_11170__$1;(statearr_11173_11195[(1)] = (8));
} else
{var statearr_11174_11196 = state_11170__$1;(statearr_11174_11196[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11171 === (1)))
{var inst_11141 = cljs.core.vec.call(null,chs);var inst_11142 = inst_11141;var state_11170__$1 = (function (){var statearr_11175 = state_11170;(statearr_11175[(10)] = inst_11142);
return statearr_11175;
})();var statearr_11176_11197 = state_11170__$1;(statearr_11176_11197[(2)] = null);
(statearr_11176_11197[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11171 === (4)))
{var inst_11142 = (state_11170[(10)]);var state_11170__$1 = state_11170;return cljs.core.async.ioc_alts_BANG_.call(null,state_11170__$1,(7),inst_11142);
} else
{if((state_val_11171 === (6)))
{var inst_11166 = (state_11170[(2)]);var state_11170__$1 = state_11170;var statearr_11177_11198 = state_11170__$1;(statearr_11177_11198[(2)] = inst_11166);
(statearr_11177_11198[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11171 === (3)))
{var inst_11168 = (state_11170[(2)]);var state_11170__$1 = state_11170;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11170__$1,inst_11168);
} else
{if((state_val_11171 === (2)))
{var inst_11142 = (state_11170[(10)]);var inst_11144 = cljs.core.count.call(null,inst_11142);var inst_11145 = (inst_11144 > (0));var state_11170__$1 = state_11170;if(cljs.core.truth_(inst_11145))
{var statearr_11179_11199 = state_11170__$1;(statearr_11179_11199[(1)] = (4));
} else
{var statearr_11180_11200 = state_11170__$1;(statearr_11180_11200[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11171 === (11)))
{var inst_11142 = (state_11170[(10)]);var inst_11159 = (state_11170[(2)]);var tmp11178 = inst_11142;var inst_11142__$1 = tmp11178;var state_11170__$1 = (function (){var statearr_11181 = state_11170;(statearr_11181[(10)] = inst_11142__$1);
(statearr_11181[(11)] = inst_11159);
return statearr_11181;
})();var statearr_11182_11201 = state_11170__$1;(statearr_11182_11201[(2)] = null);
(statearr_11182_11201[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11171 === (9)))
{var inst_11150 = (state_11170[(7)]);var state_11170__$1 = state_11170;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11170__$1,(11),out,inst_11150);
} else
{if((state_val_11171 === (5)))
{var inst_11164 = cljs.core.async.close_BANG_.call(null,out);var state_11170__$1 = state_11170;var statearr_11183_11202 = state_11170__$1;(statearr_11183_11202[(2)] = inst_11164);
(statearr_11183_11202[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11171 === (10)))
{var inst_11162 = (state_11170[(2)]);var state_11170__$1 = state_11170;var statearr_11184_11203 = state_11170__$1;(statearr_11184_11203[(2)] = inst_11162);
(statearr_11184_11203[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11171 === (8)))
{var inst_11150 = (state_11170[(7)]);var inst_11142 = (state_11170[(10)]);var inst_11149 = (state_11170[(8)]);var inst_11151 = (state_11170[(9)]);var inst_11154 = (function (){var c = inst_11151;var v = inst_11150;var vec__11147 = inst_11149;var cs = inst_11142;return ((function (c,v,vec__11147,cs,inst_11150,inst_11142,inst_11149,inst_11151,state_val_11171,c__6188__auto___11194,out){
return (function (p1__11087_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11087_SHARP_);
});
;})(c,v,vec__11147,cs,inst_11150,inst_11142,inst_11149,inst_11151,state_val_11171,c__6188__auto___11194,out))
})();var inst_11155 = cljs.core.filterv.call(null,inst_11154,inst_11142);var inst_11142__$1 = inst_11155;var state_11170__$1 = (function (){var statearr_11185 = state_11170;(statearr_11185[(10)] = inst_11142__$1);
return statearr_11185;
})();var statearr_11186_11204 = state_11170__$1;(statearr_11186_11204[(2)] = null);
(statearr_11186_11204[(1)] = (2));
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
});})(c__6188__auto___11194,out))
;return ((function (switch__6173__auto__,c__6188__auto___11194,out){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_11190 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11190[(0)] = state_machine__6174__auto__);
(statearr_11190[(1)] = (1));
return statearr_11190;
});
var state_machine__6174__auto____1 = (function (state_11170){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_11170);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e11191){if((e11191 instanceof Object))
{var ex__6177__auto__ = e11191;var statearr_11192_11205 = state_11170;(statearr_11192_11205[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11170);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11206 = state_11170;
state_11170 = G__11206;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_11170){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_11170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto___11194,out))
})();var state__6190__auto__ = (function (){var statearr_11193 = f__6189__auto__.call(null);(statearr_11193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___11194);
return statearr_11193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto___11194,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6188__auto___11299 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto___11299,out){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto___11299,out){
return (function (state_11276){var state_val_11277 = (state_11276[(1)]);if((state_val_11277 === (7)))
{var inst_11258 = (state_11276[(7)]);var inst_11258__$1 = (state_11276[(2)]);var inst_11259 = (inst_11258__$1 == null);var inst_11260 = cljs.core.not.call(null,inst_11259);var state_11276__$1 = (function (){var statearr_11278 = state_11276;(statearr_11278[(7)] = inst_11258__$1);
return statearr_11278;
})();if(inst_11260)
{var statearr_11279_11300 = state_11276__$1;(statearr_11279_11300[(1)] = (8));
} else
{var statearr_11280_11301 = state_11276__$1;(statearr_11280_11301[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11277 === (1)))
{var inst_11253 = (0);var state_11276__$1 = (function (){var statearr_11281 = state_11276;(statearr_11281[(8)] = inst_11253);
return statearr_11281;
})();var statearr_11282_11302 = state_11276__$1;(statearr_11282_11302[(2)] = null);
(statearr_11282_11302[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11277 === (4)))
{var state_11276__$1 = state_11276;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11276__$1,(7),ch);
} else
{if((state_val_11277 === (6)))
{var inst_11271 = (state_11276[(2)]);var state_11276__$1 = state_11276;var statearr_11283_11303 = state_11276__$1;(statearr_11283_11303[(2)] = inst_11271);
(statearr_11283_11303[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11277 === (3)))
{var inst_11273 = (state_11276[(2)]);var inst_11274 = cljs.core.async.close_BANG_.call(null,out);var state_11276__$1 = (function (){var statearr_11284 = state_11276;(statearr_11284[(9)] = inst_11273);
return statearr_11284;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11276__$1,inst_11274);
} else
{if((state_val_11277 === (2)))
{var inst_11253 = (state_11276[(8)]);var inst_11255 = (inst_11253 < n);var state_11276__$1 = state_11276;if(cljs.core.truth_(inst_11255))
{var statearr_11285_11304 = state_11276__$1;(statearr_11285_11304[(1)] = (4));
} else
{var statearr_11286_11305 = state_11276__$1;(statearr_11286_11305[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11277 === (11)))
{var inst_11253 = (state_11276[(8)]);var inst_11263 = (state_11276[(2)]);var inst_11264 = (inst_11253 + (1));var inst_11253__$1 = inst_11264;var state_11276__$1 = (function (){var statearr_11287 = state_11276;(statearr_11287[(8)] = inst_11253__$1);
(statearr_11287[(10)] = inst_11263);
return statearr_11287;
})();var statearr_11288_11306 = state_11276__$1;(statearr_11288_11306[(2)] = null);
(statearr_11288_11306[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11277 === (9)))
{var state_11276__$1 = state_11276;var statearr_11289_11307 = state_11276__$1;(statearr_11289_11307[(2)] = null);
(statearr_11289_11307[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11277 === (5)))
{var state_11276__$1 = state_11276;var statearr_11290_11308 = state_11276__$1;(statearr_11290_11308[(2)] = null);
(statearr_11290_11308[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11277 === (10)))
{var inst_11268 = (state_11276[(2)]);var state_11276__$1 = state_11276;var statearr_11291_11309 = state_11276__$1;(statearr_11291_11309[(2)] = inst_11268);
(statearr_11291_11309[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11277 === (8)))
{var inst_11258 = (state_11276[(7)]);var state_11276__$1 = state_11276;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11276__$1,(11),out,inst_11258);
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
});})(c__6188__auto___11299,out))
;return ((function (switch__6173__auto__,c__6188__auto___11299,out){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_11295 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11295[(0)] = state_machine__6174__auto__);
(statearr_11295[(1)] = (1));
return statearr_11295;
});
var state_machine__6174__auto____1 = (function (state_11276){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_11276);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e11296){if((e11296 instanceof Object))
{var ex__6177__auto__ = e11296;var statearr_11297_11310 = state_11276;(statearr_11297_11310[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11276);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11296;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11311 = state_11276;
state_11276 = G__11311;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_11276){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_11276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto___11299,out))
})();var state__6190__auto__ = (function (){var statearr_11298 = f__6189__auto__.call(null);(statearr_11298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___11299);
return statearr_11298;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto___11299,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11319 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11319 = (function (ch,f,map_LT_,meta11320){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11320 = meta11320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11319.cljs$lang$type = true;
cljs.core.async.t11319.cljs$lang$ctorStr = "cljs.core.async/t11319";
cljs.core.async.t11319.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11319");
});
cljs.core.async.t11319.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11319.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11322 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11322 = (function (fn1,_,meta11320,ch,f,map_LT_,meta11323){
this.fn1 = fn1;
this._ = _;
this.meta11320 = meta11320;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11323 = meta11323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11322.cljs$lang$type = true;
cljs.core.async.t11322.cljs$lang$ctorStr = "cljs.core.async/t11322";
cljs.core.async.t11322.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11322");
});})(___$1))
;
cljs.core.async.t11322.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11322.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11322.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11312_SHARP_){return f1.call(null,(((p1__11312_SHARP_ == null))?null:self__.f.call(null,p1__11312_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11322.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11324){var self__ = this;
var _11324__$1 = this;return self__.meta11323;
});})(___$1))
;
cljs.core.async.t11322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11324,meta11323__$1){var self__ = this;
var _11324__$1 = this;return (new cljs.core.async.t11322(self__.fn1,self__._,self__.meta11320,self__.ch,self__.f,self__.map_LT_,meta11323__$1));
});})(___$1))
;
cljs.core.async.__GT_t11322 = ((function (___$1){
return (function __GT_t11322(fn1__$1,___$2,meta11320__$1,ch__$2,f__$2,map_LT___$2,meta11323){return (new cljs.core.async.t11322(fn1__$1,___$2,meta11320__$1,ch__$2,f__$2,map_LT___$2,meta11323));
});})(___$1))
;
}
return (new cljs.core.async.t11322(fn1,___$1,self__.meta11320,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11319.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11319.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11321){var self__ = this;
var _11321__$1 = this;return self__.meta11320;
});
cljs.core.async.t11319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11321,meta11320__$1){var self__ = this;
var _11321__$1 = this;return (new cljs.core.async.t11319(self__.ch,self__.f,self__.map_LT_,meta11320__$1));
});
cljs.core.async.__GT_t11319 = (function __GT_t11319(ch__$1,f__$1,map_LT___$1,meta11320){return (new cljs.core.async.t11319(ch__$1,f__$1,map_LT___$1,meta11320));
});
}
return (new cljs.core.async.t11319(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11328 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11328 = (function (ch,f,map_GT_,meta11329){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11329 = meta11329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11328.cljs$lang$type = true;
cljs.core.async.t11328.cljs$lang$ctorStr = "cljs.core.async/t11328";
cljs.core.async.t11328.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11328");
});
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11328.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11330){var self__ = this;
var _11330__$1 = this;return self__.meta11329;
});
cljs.core.async.t11328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11330,meta11329__$1){var self__ = this;
var _11330__$1 = this;return (new cljs.core.async.t11328(self__.ch,self__.f,self__.map_GT_,meta11329__$1));
});
cljs.core.async.__GT_t11328 = (function __GT_t11328(ch__$1,f__$1,map_GT___$1,meta11329){return (new cljs.core.async.t11328(ch__$1,f__$1,map_GT___$1,meta11329));
});
}
return (new cljs.core.async.t11328(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11334 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11334 = (function (ch,p,filter_GT_,meta11335){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11335 = meta11335;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11334.cljs$lang$type = true;
cljs.core.async.t11334.cljs$lang$ctorStr = "cljs.core.async/t11334";
cljs.core.async.t11334.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11334");
});
cljs.core.async.t11334.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11334.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11334.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11334.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11334.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11334.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11334.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11334.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11336){var self__ = this;
var _11336__$1 = this;return self__.meta11335;
});
cljs.core.async.t11334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11336,meta11335__$1){var self__ = this;
var _11336__$1 = this;return (new cljs.core.async.t11334(self__.ch,self__.p,self__.filter_GT_,meta11335__$1));
});
cljs.core.async.__GT_t11334 = (function __GT_t11334(ch__$1,p__$1,filter_GT___$1,meta11335){return (new cljs.core.async.t11334(ch__$1,p__$1,filter_GT___$1,meta11335));
});
}
return (new cljs.core.async.t11334(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6188__auto___11419 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto___11419,out){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto___11419,out){
return (function (state_11398){var state_val_11399 = (state_11398[(1)]);if((state_val_11399 === (7)))
{var inst_11394 = (state_11398[(2)]);var state_11398__$1 = state_11398;var statearr_11400_11420 = state_11398__$1;(statearr_11400_11420[(2)] = inst_11394);
(statearr_11400_11420[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11399 === (1)))
{var state_11398__$1 = state_11398;var statearr_11401_11421 = state_11398__$1;(statearr_11401_11421[(2)] = null);
(statearr_11401_11421[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11399 === (4)))
{var inst_11380 = (state_11398[(7)]);var inst_11380__$1 = (state_11398[(2)]);var inst_11381 = (inst_11380__$1 == null);var state_11398__$1 = (function (){var statearr_11402 = state_11398;(statearr_11402[(7)] = inst_11380__$1);
return statearr_11402;
})();if(cljs.core.truth_(inst_11381))
{var statearr_11403_11422 = state_11398__$1;(statearr_11403_11422[(1)] = (5));
} else
{var statearr_11404_11423 = state_11398__$1;(statearr_11404_11423[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11399 === (6)))
{var inst_11380 = (state_11398[(7)]);var inst_11385 = p.call(null,inst_11380);var state_11398__$1 = state_11398;if(cljs.core.truth_(inst_11385))
{var statearr_11405_11424 = state_11398__$1;(statearr_11405_11424[(1)] = (8));
} else
{var statearr_11406_11425 = state_11398__$1;(statearr_11406_11425[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11399 === (3)))
{var inst_11396 = (state_11398[(2)]);var state_11398__$1 = state_11398;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11398__$1,inst_11396);
} else
{if((state_val_11399 === (2)))
{var state_11398__$1 = state_11398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11398__$1,(4),ch);
} else
{if((state_val_11399 === (11)))
{var inst_11388 = (state_11398[(2)]);var state_11398__$1 = state_11398;var statearr_11407_11426 = state_11398__$1;(statearr_11407_11426[(2)] = inst_11388);
(statearr_11407_11426[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11399 === (9)))
{var state_11398__$1 = state_11398;var statearr_11408_11427 = state_11398__$1;(statearr_11408_11427[(2)] = null);
(statearr_11408_11427[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11399 === (5)))
{var inst_11383 = cljs.core.async.close_BANG_.call(null,out);var state_11398__$1 = state_11398;var statearr_11409_11428 = state_11398__$1;(statearr_11409_11428[(2)] = inst_11383);
(statearr_11409_11428[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11399 === (10)))
{var inst_11391 = (state_11398[(2)]);var state_11398__$1 = (function (){var statearr_11410 = state_11398;(statearr_11410[(8)] = inst_11391);
return statearr_11410;
})();var statearr_11411_11429 = state_11398__$1;(statearr_11411_11429[(2)] = null);
(statearr_11411_11429[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11399 === (8)))
{var inst_11380 = (state_11398[(7)]);var state_11398__$1 = state_11398;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11398__$1,(11),out,inst_11380);
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
});})(c__6188__auto___11419,out))
;return ((function (switch__6173__auto__,c__6188__auto___11419,out){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_11415 = [null,null,null,null,null,null,null,null,null];(statearr_11415[(0)] = state_machine__6174__auto__);
(statearr_11415[(1)] = (1));
return statearr_11415;
});
var state_machine__6174__auto____1 = (function (state_11398){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_11398);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e11416){if((e11416 instanceof Object))
{var ex__6177__auto__ = e11416;var statearr_11417_11430 = state_11398;(statearr_11417_11430[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11398);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11416;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11431 = state_11398;
state_11398 = G__11431;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_11398){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_11398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto___11419,out))
})();var state__6190__auto__ = (function (){var statearr_11418 = f__6189__auto__.call(null);(statearr_11418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___11419);
return statearr_11418;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto___11419,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6188__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto__){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto__){
return (function (state_11597){var state_val_11598 = (state_11597[(1)]);if((state_val_11598 === (7)))
{var inst_11593 = (state_11597[(2)]);var state_11597__$1 = state_11597;var statearr_11599_11640 = state_11597__$1;(statearr_11599_11640[(2)] = inst_11593);
(statearr_11599_11640[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (20)))
{var inst_11563 = (state_11597[(7)]);var inst_11574 = (state_11597[(2)]);var inst_11575 = cljs.core.next.call(null,inst_11563);var inst_11549 = inst_11575;var inst_11550 = null;var inst_11551 = (0);var inst_11552 = (0);var state_11597__$1 = (function (){var statearr_11600 = state_11597;(statearr_11600[(8)] = inst_11551);
(statearr_11600[(9)] = inst_11549);
(statearr_11600[(10)] = inst_11550);
(statearr_11600[(11)] = inst_11552);
(statearr_11600[(12)] = inst_11574);
return statearr_11600;
})();var statearr_11601_11641 = state_11597__$1;(statearr_11601_11641[(2)] = null);
(statearr_11601_11641[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (1)))
{var state_11597__$1 = state_11597;var statearr_11602_11642 = state_11597__$1;(statearr_11602_11642[(2)] = null);
(statearr_11602_11642[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (4)))
{var inst_11538 = (state_11597[(13)]);var inst_11538__$1 = (state_11597[(2)]);var inst_11539 = (inst_11538__$1 == null);var state_11597__$1 = (function (){var statearr_11603 = state_11597;(statearr_11603[(13)] = inst_11538__$1);
return statearr_11603;
})();if(cljs.core.truth_(inst_11539))
{var statearr_11604_11643 = state_11597__$1;(statearr_11604_11643[(1)] = (5));
} else
{var statearr_11605_11644 = state_11597__$1;(statearr_11605_11644[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (15)))
{var state_11597__$1 = state_11597;var statearr_11609_11645 = state_11597__$1;(statearr_11609_11645[(2)] = null);
(statearr_11609_11645[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (21)))
{var state_11597__$1 = state_11597;var statearr_11610_11646 = state_11597__$1;(statearr_11610_11646[(2)] = null);
(statearr_11610_11646[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (13)))
{var inst_11551 = (state_11597[(8)]);var inst_11549 = (state_11597[(9)]);var inst_11550 = (state_11597[(10)]);var inst_11552 = (state_11597[(11)]);var inst_11559 = (state_11597[(2)]);var inst_11560 = (inst_11552 + (1));var tmp11606 = inst_11551;var tmp11607 = inst_11549;var tmp11608 = inst_11550;var inst_11549__$1 = tmp11607;var inst_11550__$1 = tmp11608;var inst_11551__$1 = tmp11606;var inst_11552__$1 = inst_11560;var state_11597__$1 = (function (){var statearr_11611 = state_11597;(statearr_11611[(8)] = inst_11551__$1);
(statearr_11611[(9)] = inst_11549__$1);
(statearr_11611[(10)] = inst_11550__$1);
(statearr_11611[(14)] = inst_11559);
(statearr_11611[(11)] = inst_11552__$1);
return statearr_11611;
})();var statearr_11612_11647 = state_11597__$1;(statearr_11612_11647[(2)] = null);
(statearr_11612_11647[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (22)))
{var state_11597__$1 = state_11597;var statearr_11613_11648 = state_11597__$1;(statearr_11613_11648[(2)] = null);
(statearr_11613_11648[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (6)))
{var inst_11538 = (state_11597[(13)]);var inst_11547 = f.call(null,inst_11538);var inst_11548 = cljs.core.seq.call(null,inst_11547);var inst_11549 = inst_11548;var inst_11550 = null;var inst_11551 = (0);var inst_11552 = (0);var state_11597__$1 = (function (){var statearr_11614 = state_11597;(statearr_11614[(8)] = inst_11551);
(statearr_11614[(9)] = inst_11549);
(statearr_11614[(10)] = inst_11550);
(statearr_11614[(11)] = inst_11552);
return statearr_11614;
})();var statearr_11615_11649 = state_11597__$1;(statearr_11615_11649[(2)] = null);
(statearr_11615_11649[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (17)))
{var inst_11563 = (state_11597[(7)]);var inst_11567 = cljs.core.chunk_first.call(null,inst_11563);var inst_11568 = cljs.core.chunk_rest.call(null,inst_11563);var inst_11569 = cljs.core.count.call(null,inst_11567);var inst_11549 = inst_11568;var inst_11550 = inst_11567;var inst_11551 = inst_11569;var inst_11552 = (0);var state_11597__$1 = (function (){var statearr_11616 = state_11597;(statearr_11616[(8)] = inst_11551);
(statearr_11616[(9)] = inst_11549);
(statearr_11616[(10)] = inst_11550);
(statearr_11616[(11)] = inst_11552);
return statearr_11616;
})();var statearr_11617_11650 = state_11597__$1;(statearr_11617_11650[(2)] = null);
(statearr_11617_11650[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (3)))
{var inst_11595 = (state_11597[(2)]);var state_11597__$1 = state_11597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11597__$1,inst_11595);
} else
{if((state_val_11598 === (12)))
{var inst_11583 = (state_11597[(2)]);var state_11597__$1 = state_11597;var statearr_11618_11651 = state_11597__$1;(statearr_11618_11651[(2)] = inst_11583);
(statearr_11618_11651[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (2)))
{var state_11597__$1 = state_11597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11597__$1,(4),in$);
} else
{if((state_val_11598 === (23)))
{var inst_11591 = (state_11597[(2)]);var state_11597__$1 = state_11597;var statearr_11619_11652 = state_11597__$1;(statearr_11619_11652[(2)] = inst_11591);
(statearr_11619_11652[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (19)))
{var inst_11578 = (state_11597[(2)]);var state_11597__$1 = state_11597;var statearr_11620_11653 = state_11597__$1;(statearr_11620_11653[(2)] = inst_11578);
(statearr_11620_11653[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (11)))
{var inst_11549 = (state_11597[(9)]);var inst_11563 = (state_11597[(7)]);var inst_11563__$1 = cljs.core.seq.call(null,inst_11549);var state_11597__$1 = (function (){var statearr_11621 = state_11597;(statearr_11621[(7)] = inst_11563__$1);
return statearr_11621;
})();if(inst_11563__$1)
{var statearr_11622_11654 = state_11597__$1;(statearr_11622_11654[(1)] = (14));
} else
{var statearr_11623_11655 = state_11597__$1;(statearr_11623_11655[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (9)))
{var inst_11585 = (state_11597[(2)]);var inst_11586 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11597__$1 = (function (){var statearr_11624 = state_11597;(statearr_11624[(15)] = inst_11585);
return statearr_11624;
})();if(cljs.core.truth_(inst_11586))
{var statearr_11625_11656 = state_11597__$1;(statearr_11625_11656[(1)] = (21));
} else
{var statearr_11626_11657 = state_11597__$1;(statearr_11626_11657[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (5)))
{var inst_11541 = cljs.core.async.close_BANG_.call(null,out);var state_11597__$1 = state_11597;var statearr_11627_11658 = state_11597__$1;(statearr_11627_11658[(2)] = inst_11541);
(statearr_11627_11658[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (14)))
{var inst_11563 = (state_11597[(7)]);var inst_11565 = cljs.core.chunked_seq_QMARK_.call(null,inst_11563);var state_11597__$1 = state_11597;if(inst_11565)
{var statearr_11628_11659 = state_11597__$1;(statearr_11628_11659[(1)] = (17));
} else
{var statearr_11629_11660 = state_11597__$1;(statearr_11629_11660[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (16)))
{var inst_11581 = (state_11597[(2)]);var state_11597__$1 = state_11597;var statearr_11630_11661 = state_11597__$1;(statearr_11630_11661[(2)] = inst_11581);
(statearr_11630_11661[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11598 === (10)))
{var inst_11550 = (state_11597[(10)]);var inst_11552 = (state_11597[(11)]);var inst_11557 = cljs.core._nth.call(null,inst_11550,inst_11552);var state_11597__$1 = state_11597;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11597__$1,(13),out,inst_11557);
} else
{if((state_val_11598 === (18)))
{var inst_11563 = (state_11597[(7)]);var inst_11572 = cljs.core.first.call(null,inst_11563);var state_11597__$1 = state_11597;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11597__$1,(20),out,inst_11572);
} else
{if((state_val_11598 === (8)))
{var inst_11551 = (state_11597[(8)]);var inst_11552 = (state_11597[(11)]);var inst_11554 = (inst_11552 < inst_11551);var inst_11555 = inst_11554;var state_11597__$1 = state_11597;if(cljs.core.truth_(inst_11555))
{var statearr_11631_11662 = state_11597__$1;(statearr_11631_11662[(1)] = (10));
} else
{var statearr_11632_11663 = state_11597__$1;(statearr_11632_11663[(1)] = (11));
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
});})(c__6188__auto__))
;return ((function (switch__6173__auto__,c__6188__auto__){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_11636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11636[(0)] = state_machine__6174__auto__);
(statearr_11636[(1)] = (1));
return statearr_11636;
});
var state_machine__6174__auto____1 = (function (state_11597){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_11597);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e11637){if((e11637 instanceof Object))
{var ex__6177__auto__ = e11637;var statearr_11638_11664 = state_11597;(statearr_11638_11664[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11597);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11637;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11665 = state_11597;
state_11597 = G__11665;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_11597){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_11597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto__))
})();var state__6190__auto__ = (function (){var statearr_11639 = f__6189__auto__.call(null);(statearr_11639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto__);
return statearr_11639;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto__))
);
return c__6188__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6188__auto___11762 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto___11762,out){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto___11762,out){
return (function (state_11737){var state_val_11738 = (state_11737[(1)]);if((state_val_11738 === (7)))
{var inst_11732 = (state_11737[(2)]);var state_11737__$1 = state_11737;var statearr_11739_11763 = state_11737__$1;(statearr_11739_11763[(2)] = inst_11732);
(statearr_11739_11763[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11738 === (1)))
{var inst_11714 = null;var state_11737__$1 = (function (){var statearr_11740 = state_11737;(statearr_11740[(7)] = inst_11714);
return statearr_11740;
})();var statearr_11741_11764 = state_11737__$1;(statearr_11741_11764[(2)] = null);
(statearr_11741_11764[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11738 === (4)))
{var inst_11717 = (state_11737[(8)]);var inst_11717__$1 = (state_11737[(2)]);var inst_11718 = (inst_11717__$1 == null);var inst_11719 = cljs.core.not.call(null,inst_11718);var state_11737__$1 = (function (){var statearr_11742 = state_11737;(statearr_11742[(8)] = inst_11717__$1);
return statearr_11742;
})();if(inst_11719)
{var statearr_11743_11765 = state_11737__$1;(statearr_11743_11765[(1)] = (5));
} else
{var statearr_11744_11766 = state_11737__$1;(statearr_11744_11766[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11738 === (6)))
{var state_11737__$1 = state_11737;var statearr_11745_11767 = state_11737__$1;(statearr_11745_11767[(2)] = null);
(statearr_11745_11767[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11738 === (3)))
{var inst_11734 = (state_11737[(2)]);var inst_11735 = cljs.core.async.close_BANG_.call(null,out);var state_11737__$1 = (function (){var statearr_11746 = state_11737;(statearr_11746[(9)] = inst_11734);
return statearr_11746;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11737__$1,inst_11735);
} else
{if((state_val_11738 === (2)))
{var state_11737__$1 = state_11737;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11737__$1,(4),ch);
} else
{if((state_val_11738 === (11)))
{var inst_11717 = (state_11737[(8)]);var inst_11726 = (state_11737[(2)]);var inst_11714 = inst_11717;var state_11737__$1 = (function (){var statearr_11747 = state_11737;(statearr_11747[(7)] = inst_11714);
(statearr_11747[(10)] = inst_11726);
return statearr_11747;
})();var statearr_11748_11768 = state_11737__$1;(statearr_11748_11768[(2)] = null);
(statearr_11748_11768[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11738 === (9)))
{var inst_11717 = (state_11737[(8)]);var state_11737__$1 = state_11737;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11737__$1,(11),out,inst_11717);
} else
{if((state_val_11738 === (5)))
{var inst_11714 = (state_11737[(7)]);var inst_11717 = (state_11737[(8)]);var inst_11721 = cljs.core._EQ_.call(null,inst_11717,inst_11714);var state_11737__$1 = state_11737;if(inst_11721)
{var statearr_11750_11769 = state_11737__$1;(statearr_11750_11769[(1)] = (8));
} else
{var statearr_11751_11770 = state_11737__$1;(statearr_11751_11770[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11738 === (10)))
{var inst_11729 = (state_11737[(2)]);var state_11737__$1 = state_11737;var statearr_11752_11771 = state_11737__$1;(statearr_11752_11771[(2)] = inst_11729);
(statearr_11752_11771[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11738 === (8)))
{var inst_11714 = (state_11737[(7)]);var tmp11749 = inst_11714;var inst_11714__$1 = tmp11749;var state_11737__$1 = (function (){var statearr_11753 = state_11737;(statearr_11753[(7)] = inst_11714__$1);
return statearr_11753;
})();var statearr_11754_11772 = state_11737__$1;(statearr_11754_11772[(2)] = null);
(statearr_11754_11772[(1)] = (2));
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
});})(c__6188__auto___11762,out))
;return ((function (switch__6173__auto__,c__6188__auto___11762,out){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_11758 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11758[(0)] = state_machine__6174__auto__);
(statearr_11758[(1)] = (1));
return statearr_11758;
});
var state_machine__6174__auto____1 = (function (state_11737){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_11737);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e11759){if((e11759 instanceof Object))
{var ex__6177__auto__ = e11759;var statearr_11760_11773 = state_11737;(statearr_11760_11773[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11737);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11759;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11774 = state_11737;
state_11737 = G__11774;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_11737){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_11737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto___11762,out))
})();var state__6190__auto__ = (function (){var statearr_11761 = f__6189__auto__.call(null);(statearr_11761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___11762);
return statearr_11761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto___11762,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6188__auto___11909 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto___11909,out){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto___11909,out){
return (function (state_11879){var state_val_11880 = (state_11879[(1)]);if((state_val_11880 === (7)))
{var inst_11875 = (state_11879[(2)]);var state_11879__$1 = state_11879;var statearr_11881_11910 = state_11879__$1;(statearr_11881_11910[(2)] = inst_11875);
(statearr_11881_11910[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11880 === (1)))
{var inst_11842 = (new Array(n));var inst_11843 = inst_11842;var inst_11844 = (0);var state_11879__$1 = (function (){var statearr_11882 = state_11879;(statearr_11882[(7)] = inst_11844);
(statearr_11882[(8)] = inst_11843);
return statearr_11882;
})();var statearr_11883_11911 = state_11879__$1;(statearr_11883_11911[(2)] = null);
(statearr_11883_11911[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11880 === (4)))
{var inst_11847 = (state_11879[(9)]);var inst_11847__$1 = (state_11879[(2)]);var inst_11848 = (inst_11847__$1 == null);var inst_11849 = cljs.core.not.call(null,inst_11848);var state_11879__$1 = (function (){var statearr_11884 = state_11879;(statearr_11884[(9)] = inst_11847__$1);
return statearr_11884;
})();if(inst_11849)
{var statearr_11885_11912 = state_11879__$1;(statearr_11885_11912[(1)] = (5));
} else
{var statearr_11886_11913 = state_11879__$1;(statearr_11886_11913[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11880 === (15)))
{var inst_11869 = (state_11879[(2)]);var state_11879__$1 = state_11879;var statearr_11887_11914 = state_11879__$1;(statearr_11887_11914[(2)] = inst_11869);
(statearr_11887_11914[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11880 === (13)))
{var state_11879__$1 = state_11879;var statearr_11888_11915 = state_11879__$1;(statearr_11888_11915[(2)] = null);
(statearr_11888_11915[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11880 === (6)))
{var inst_11844 = (state_11879[(7)]);var inst_11865 = (inst_11844 > (0));var state_11879__$1 = state_11879;if(cljs.core.truth_(inst_11865))
{var statearr_11889_11916 = state_11879__$1;(statearr_11889_11916[(1)] = (12));
} else
{var statearr_11890_11917 = state_11879__$1;(statearr_11890_11917[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11880 === (3)))
{var inst_11877 = (state_11879[(2)]);var state_11879__$1 = state_11879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11879__$1,inst_11877);
} else
{if((state_val_11880 === (12)))
{var inst_11843 = (state_11879[(8)]);var inst_11867 = cljs.core.vec.call(null,inst_11843);var state_11879__$1 = state_11879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11879__$1,(15),out,inst_11867);
} else
{if((state_val_11880 === (2)))
{var state_11879__$1 = state_11879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11879__$1,(4),ch);
} else
{if((state_val_11880 === (11)))
{var inst_11859 = (state_11879[(2)]);var inst_11860 = (new Array(n));var inst_11843 = inst_11860;var inst_11844 = (0);var state_11879__$1 = (function (){var statearr_11891 = state_11879;(statearr_11891[(7)] = inst_11844);
(statearr_11891[(8)] = inst_11843);
(statearr_11891[(10)] = inst_11859);
return statearr_11891;
})();var statearr_11892_11918 = state_11879__$1;(statearr_11892_11918[(2)] = null);
(statearr_11892_11918[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11880 === (9)))
{var inst_11843 = (state_11879[(8)]);var inst_11857 = cljs.core.vec.call(null,inst_11843);var state_11879__$1 = state_11879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11879__$1,(11),out,inst_11857);
} else
{if((state_val_11880 === (5)))
{var inst_11844 = (state_11879[(7)]);var inst_11852 = (state_11879[(11)]);var inst_11847 = (state_11879[(9)]);var inst_11843 = (state_11879[(8)]);var inst_11851 = (inst_11843[inst_11844] = inst_11847);var inst_11852__$1 = (inst_11844 + (1));var inst_11853 = (inst_11852__$1 < n);var state_11879__$1 = (function (){var statearr_11893 = state_11879;(statearr_11893[(11)] = inst_11852__$1);
(statearr_11893[(12)] = inst_11851);
return statearr_11893;
})();if(cljs.core.truth_(inst_11853))
{var statearr_11894_11919 = state_11879__$1;(statearr_11894_11919[(1)] = (8));
} else
{var statearr_11895_11920 = state_11879__$1;(statearr_11895_11920[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11880 === (14)))
{var inst_11872 = (state_11879[(2)]);var inst_11873 = cljs.core.async.close_BANG_.call(null,out);var state_11879__$1 = (function (){var statearr_11897 = state_11879;(statearr_11897[(13)] = inst_11872);
return statearr_11897;
})();var statearr_11898_11921 = state_11879__$1;(statearr_11898_11921[(2)] = inst_11873);
(statearr_11898_11921[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11880 === (10)))
{var inst_11863 = (state_11879[(2)]);var state_11879__$1 = state_11879;var statearr_11899_11922 = state_11879__$1;(statearr_11899_11922[(2)] = inst_11863);
(statearr_11899_11922[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11880 === (8)))
{var inst_11852 = (state_11879[(11)]);var inst_11843 = (state_11879[(8)]);var tmp11896 = inst_11843;var inst_11843__$1 = tmp11896;var inst_11844 = inst_11852;var state_11879__$1 = (function (){var statearr_11900 = state_11879;(statearr_11900[(7)] = inst_11844);
(statearr_11900[(8)] = inst_11843__$1);
return statearr_11900;
})();var statearr_11901_11923 = state_11879__$1;(statearr_11901_11923[(2)] = null);
(statearr_11901_11923[(1)] = (2));
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
});})(c__6188__auto___11909,out))
;return ((function (switch__6173__auto__,c__6188__auto___11909,out){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_11905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11905[(0)] = state_machine__6174__auto__);
(statearr_11905[(1)] = (1));
return statearr_11905;
});
var state_machine__6174__auto____1 = (function (state_11879){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_11879);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e11906){if((e11906 instanceof Object))
{var ex__6177__auto__ = e11906;var statearr_11907_11924 = state_11879;(statearr_11907_11924[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11879);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11925 = state_11879;
state_11879 = G__11925;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_11879){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_11879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto___11909,out))
})();var state__6190__auto__ = (function (){var statearr_11908 = f__6189__auto__.call(null);(statearr_11908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___11909);
return statearr_11908;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto___11909,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6188__auto___12068 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6188__auto___12068,out){
return (function (){var f__6189__auto__ = (function (){var switch__6173__auto__ = ((function (c__6188__auto___12068,out){
return (function (state_12038){var state_val_12039 = (state_12038[(1)]);if((state_val_12039 === (7)))
{var inst_12034 = (state_12038[(2)]);var state_12038__$1 = state_12038;var statearr_12040_12069 = state_12038__$1;(statearr_12040_12069[(2)] = inst_12034);
(statearr_12040_12069[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12039 === (1)))
{var inst_11997 = [];var inst_11998 = inst_11997;var inst_11999 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_12038__$1 = (function (){var statearr_12041 = state_12038;(statearr_12041[(7)] = inst_11998);
(statearr_12041[(8)] = inst_11999);
return statearr_12041;
})();var statearr_12042_12070 = state_12038__$1;(statearr_12042_12070[(2)] = null);
(statearr_12042_12070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12039 === (4)))
{var inst_12002 = (state_12038[(9)]);var inst_12002__$1 = (state_12038[(2)]);var inst_12003 = (inst_12002__$1 == null);var inst_12004 = cljs.core.not.call(null,inst_12003);var state_12038__$1 = (function (){var statearr_12043 = state_12038;(statearr_12043[(9)] = inst_12002__$1);
return statearr_12043;
})();if(inst_12004)
{var statearr_12044_12071 = state_12038__$1;(statearr_12044_12071[(1)] = (5));
} else
{var statearr_12045_12072 = state_12038__$1;(statearr_12045_12072[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12039 === (15)))
{var inst_12028 = (state_12038[(2)]);var state_12038__$1 = state_12038;var statearr_12046_12073 = state_12038__$1;(statearr_12046_12073[(2)] = inst_12028);
(statearr_12046_12073[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12039 === (13)))
{var state_12038__$1 = state_12038;var statearr_12047_12074 = state_12038__$1;(statearr_12047_12074[(2)] = null);
(statearr_12047_12074[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12039 === (6)))
{var inst_11998 = (state_12038[(7)]);var inst_12023 = inst_11998.length;var inst_12024 = (inst_12023 > (0));var state_12038__$1 = state_12038;if(cljs.core.truth_(inst_12024))
{var statearr_12048_12075 = state_12038__$1;(statearr_12048_12075[(1)] = (12));
} else
{var statearr_12049_12076 = state_12038__$1;(statearr_12049_12076[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12039 === (3)))
{var inst_12036 = (state_12038[(2)]);var state_12038__$1 = state_12038;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12038__$1,inst_12036);
} else
{if((state_val_12039 === (12)))
{var inst_11998 = (state_12038[(7)]);var inst_12026 = cljs.core.vec.call(null,inst_11998);var state_12038__$1 = state_12038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12038__$1,(15),out,inst_12026);
} else
{if((state_val_12039 === (2)))
{var state_12038__$1 = state_12038;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12038__$1,(4),ch);
} else
{if((state_val_12039 === (11)))
{var inst_12006 = (state_12038[(10)]);var inst_12002 = (state_12038[(9)]);var inst_12016 = (state_12038[(2)]);var inst_12017 = [];var inst_12018 = inst_12017.push(inst_12002);var inst_11998 = inst_12017;var inst_11999 = inst_12006;var state_12038__$1 = (function (){var statearr_12050 = state_12038;(statearr_12050[(7)] = inst_11998);
(statearr_12050[(11)] = inst_12018);
(statearr_12050[(12)] = inst_12016);
(statearr_12050[(8)] = inst_11999);
return statearr_12050;
})();var statearr_12051_12077 = state_12038__$1;(statearr_12051_12077[(2)] = null);
(statearr_12051_12077[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12039 === (9)))
{var inst_11998 = (state_12038[(7)]);var inst_12014 = cljs.core.vec.call(null,inst_11998);var state_12038__$1 = state_12038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12038__$1,(11),out,inst_12014);
} else
{if((state_val_12039 === (5)))
{var inst_12006 = (state_12038[(10)]);var inst_11999 = (state_12038[(8)]);var inst_12002 = (state_12038[(9)]);var inst_12006__$1 = f.call(null,inst_12002);var inst_12007 = cljs.core._EQ_.call(null,inst_12006__$1,inst_11999);var inst_12008 = cljs.core.keyword_identical_QMARK_.call(null,inst_11999,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_12009 = (inst_12007) || (inst_12008);var state_12038__$1 = (function (){var statearr_12052 = state_12038;(statearr_12052[(10)] = inst_12006__$1);
return statearr_12052;
})();if(cljs.core.truth_(inst_12009))
{var statearr_12053_12078 = state_12038__$1;(statearr_12053_12078[(1)] = (8));
} else
{var statearr_12054_12079 = state_12038__$1;(statearr_12054_12079[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12039 === (14)))
{var inst_12031 = (state_12038[(2)]);var inst_12032 = cljs.core.async.close_BANG_.call(null,out);var state_12038__$1 = (function (){var statearr_12056 = state_12038;(statearr_12056[(13)] = inst_12031);
return statearr_12056;
})();var statearr_12057_12080 = state_12038__$1;(statearr_12057_12080[(2)] = inst_12032);
(statearr_12057_12080[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12039 === (10)))
{var inst_12021 = (state_12038[(2)]);var state_12038__$1 = state_12038;var statearr_12058_12081 = state_12038__$1;(statearr_12058_12081[(2)] = inst_12021);
(statearr_12058_12081[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12039 === (8)))
{var inst_11998 = (state_12038[(7)]);var inst_12006 = (state_12038[(10)]);var inst_12002 = (state_12038[(9)]);var inst_12011 = inst_11998.push(inst_12002);var tmp12055 = inst_11998;var inst_11998__$1 = tmp12055;var inst_11999 = inst_12006;var state_12038__$1 = (function (){var statearr_12059 = state_12038;(statearr_12059[(7)] = inst_11998__$1);
(statearr_12059[(14)] = inst_12011);
(statearr_12059[(8)] = inst_11999);
return statearr_12059;
})();var statearr_12060_12082 = state_12038__$1;(statearr_12060_12082[(2)] = null);
(statearr_12060_12082[(1)] = (2));
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
});})(c__6188__auto___12068,out))
;return ((function (switch__6173__auto__,c__6188__auto___12068,out){
return (function() {
var state_machine__6174__auto__ = null;
var state_machine__6174__auto____0 = (function (){var statearr_12064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12064[(0)] = state_machine__6174__auto__);
(statearr_12064[(1)] = (1));
return statearr_12064;
});
var state_machine__6174__auto____1 = (function (state_12038){while(true){
var ret_value__6175__auto__ = (function (){try{while(true){
var result__6176__auto__ = switch__6173__auto__.call(null,state_12038);if(cljs.core.keyword_identical_QMARK_.call(null,result__6176__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6176__auto__;
}
break;
}
}catch (e12065){if((e12065 instanceof Object))
{var ex__6177__auto__ = e12065;var statearr_12066_12083 = state_12038;(statearr_12066_12083[(5)] = ex__6177__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12038);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12065;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6175__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12084 = state_12038;
state_12038 = G__12084;
continue;
}
} else
{return ret_value__6175__auto__;
}
break;
}
});
state_machine__6174__auto__ = function(state_12038){
switch(arguments.length){
case 0:
return state_machine__6174__auto____0.call(this);
case 1:
return state_machine__6174__auto____1.call(this,state_12038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6174__auto____0;
state_machine__6174__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6174__auto____1;
return state_machine__6174__auto__;
})()
;})(switch__6173__auto__,c__6188__auto___12068,out))
})();var state__6190__auto__ = (function (){var statearr_12067 = f__6189__auto__.call(null);(statearr_12067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6188__auto___12068);
return statearr_12067;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6190__auto__);
});})(c__6188__auto___12068,out))
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
