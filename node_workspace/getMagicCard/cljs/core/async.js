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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9135 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9135 = (function (f,fn_handler,meta9136){
this.f = f;
this.fn_handler = fn_handler;
this.meta9136 = meta9136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9135.cljs$lang$type = true;
cljs.core.async.t9135.cljs$lang$ctorStr = "cljs.core.async/t9135";
cljs.core.async.t9135.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9135");
});
cljs.core.async.t9135.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9137){var self__ = this;
var _9137__$1 = this;return self__.meta9136;
});
cljs.core.async.t9135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9137,meta9136__$1){var self__ = this;
var _9137__$1 = this;return (new cljs.core.async.t9135(self__.f,self__.fn_handler,meta9136__$1));
});
cljs.core.async.__GT_t9135 = (function __GT_t9135(f__$1,fn_handler__$1,meta9136){return (new cljs.core.async.t9135(f__$1,fn_handler__$1,meta9136));
});
}
return (new cljs.core.async.t9135(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9139 = buff;if(G__9139)
{var bit__4201__auto__ = null;if(cljs.core.truth_((function (){var or__3551__auto__ = bit__4201__auto__;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return G__9139.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9139.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9139);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9139);
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
{var val_9140 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9140);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_9140,ret){
return (function (){return fn1.call(null,val_9140);
});})(val_9140,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4407__auto___9141 = n;var x_9142 = (0);while(true){
if((x_9142 < n__4407__auto___9141))
{(a[x_9142] = (0));
{
var G__9143 = (x_9142 + (1));
x_9142 = G__9143;
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
var G__9144 = (i + (1));
i = G__9144;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9148 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9148 = (function (flag,alt_flag,meta9149){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9149 = meta9149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9148.cljs$lang$type = true;
cljs.core.async.t9148.cljs$lang$ctorStr = "cljs.core.async/t9148";
cljs.core.async.t9148.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9148");
});})(flag))
;
cljs.core.async.t9148.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9148.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t9148.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t9148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9150){var self__ = this;
var _9150__$1 = this;return self__.meta9149;
});})(flag))
;
cljs.core.async.t9148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9150,meta9149__$1){var self__ = this;
var _9150__$1 = this;return (new cljs.core.async.t9148(self__.flag,self__.alt_flag,meta9149__$1));
});})(flag))
;
cljs.core.async.__GT_t9148 = ((function (flag){
return (function __GT_t9148(flag__$1,alt_flag__$1,meta9149){return (new cljs.core.async.t9148(flag__$1,alt_flag__$1,meta9149));
});})(flag))
;
}
return (new cljs.core.async.t9148(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9154 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9154 = (function (cb,flag,alt_handler,meta9155){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9155 = meta9155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9154.cljs$lang$type = true;
cljs.core.async.t9154.cljs$lang$ctorStr = "cljs.core.async/t9154";
cljs.core.async.t9154.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9154");
});
cljs.core.async.t9154.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9156){var self__ = this;
var _9156__$1 = this;return self__.meta9155;
});
cljs.core.async.t9154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9156,meta9155__$1){var self__ = this;
var _9156__$1 = this;return (new cljs.core.async.t9154(self__.cb,self__.flag,self__.alt_handler,meta9155__$1));
});
cljs.core.async.__GT_t9154 = (function __GT_t9154(cb__$1,flag__$1,alt_handler__$1,meta9155){return (new cljs.core.async.t9154(cb__$1,flag__$1,alt_handler__$1,meta9155));
});
}
return (new cljs.core.async.t9154(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9157_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9157_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9158_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9158_SHARP_,port], null));
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
var G__9159 = (i + (1));
i = G__9159;
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
var alts_BANG___delegate = function (ports,p__9160){var map__9162 = p__9160;var map__9162__$1 = ((cljs.core.seq_QMARK_.call(null,map__9162))?cljs.core.apply.call(null,cljs.core.hash_map,map__9162):map__9162);var opts = map__9162__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__9160 = null;if (arguments.length > 1) {
  p__9160 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9160);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9163){
var ports = cljs.core.first(arglist__9163);
var p__9160 = cljs.core.rest(arglist__9163);
return alts_BANG___delegate(ports,p__9160);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6321__auto___9258 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto___9258){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto___9258){
return (function (state_9234){var state_val_9235 = (state_9234[(1)]);if((state_val_9235 === (7)))
{var inst_9230 = (state_9234[(2)]);var state_9234__$1 = state_9234;var statearr_9236_9259 = state_9234__$1;(statearr_9236_9259[(2)] = inst_9230);
(statearr_9236_9259[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9235 === (1)))
{var state_9234__$1 = state_9234;var statearr_9237_9260 = state_9234__$1;(statearr_9237_9260[(2)] = null);
(statearr_9237_9260[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9235 === (4)))
{var inst_9213 = (state_9234[(7)]);var inst_9213__$1 = (state_9234[(2)]);var inst_9214 = (inst_9213__$1 == null);var state_9234__$1 = (function (){var statearr_9238 = state_9234;(statearr_9238[(7)] = inst_9213__$1);
return statearr_9238;
})();if(cljs.core.truth_(inst_9214))
{var statearr_9239_9261 = state_9234__$1;(statearr_9239_9261[(1)] = (5));
} else
{var statearr_9240_9262 = state_9234__$1;(statearr_9240_9262[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9235 === (13)))
{var state_9234__$1 = state_9234;var statearr_9241_9263 = state_9234__$1;(statearr_9241_9263[(2)] = null);
(statearr_9241_9263[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9235 === (6)))
{var inst_9213 = (state_9234[(7)]);var state_9234__$1 = state_9234;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9234__$1,(11),to,inst_9213);
} else
{if((state_val_9235 === (3)))
{var inst_9232 = (state_9234[(2)]);var state_9234__$1 = state_9234;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9234__$1,inst_9232);
} else
{if((state_val_9235 === (12)))
{var state_9234__$1 = state_9234;var statearr_9242_9264 = state_9234__$1;(statearr_9242_9264[(2)] = null);
(statearr_9242_9264[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9235 === (2)))
{var state_9234__$1 = state_9234;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9234__$1,(4),from);
} else
{if((state_val_9235 === (11)))
{var inst_9223 = (state_9234[(2)]);var state_9234__$1 = state_9234;if(cljs.core.truth_(inst_9223))
{var statearr_9243_9265 = state_9234__$1;(statearr_9243_9265[(1)] = (12));
} else
{var statearr_9244_9266 = state_9234__$1;(statearr_9244_9266[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9235 === (9)))
{var state_9234__$1 = state_9234;var statearr_9245_9267 = state_9234__$1;(statearr_9245_9267[(2)] = null);
(statearr_9245_9267[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9235 === (5)))
{var state_9234__$1 = state_9234;if(cljs.core.truth_(close_QMARK_))
{var statearr_9246_9268 = state_9234__$1;(statearr_9246_9268[(1)] = (8));
} else
{var statearr_9247_9269 = state_9234__$1;(statearr_9247_9269[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9235 === (14)))
{var inst_9228 = (state_9234[(2)]);var state_9234__$1 = state_9234;var statearr_9248_9270 = state_9234__$1;(statearr_9248_9270[(2)] = inst_9228);
(statearr_9248_9270[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9235 === (10)))
{var inst_9220 = (state_9234[(2)]);var state_9234__$1 = state_9234;var statearr_9249_9271 = state_9234__$1;(statearr_9249_9271[(2)] = inst_9220);
(statearr_9249_9271[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9235 === (8)))
{var inst_9217 = cljs.core.async.close_BANG_.call(null,to);var state_9234__$1 = state_9234;var statearr_9250_9272 = state_9234__$1;(statearr_9250_9272[(2)] = inst_9217);
(statearr_9250_9272[(1)] = (10));
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
});})(c__6321__auto___9258))
;return ((function (switch__6306__auto__,c__6321__auto___9258){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_9254 = [null,null,null,null,null,null,null,null];(statearr_9254[(0)] = state_machine__6307__auto__);
(statearr_9254[(1)] = (1));
return statearr_9254;
});
var state_machine__6307__auto____1 = (function (state_9234){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_9234);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e9255){if((e9255 instanceof Object))
{var ex__6310__auto__ = e9255;var statearr_9256_9273 = state_9234;(statearr_9256_9273[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9234);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9255;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9274 = state_9234;
state_9234 = G__9274;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_9234){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_9234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto___9258))
})();var state__6323__auto__ = (function (){var statearr_9257 = f__6322__auto__.call(null);(statearr_9257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto___9258);
return statearr_9257;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto___9258))
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
return (function (p__9457){var vec__9458 = p__9457;var v = cljs.core.nth.call(null,vec__9458,(0),null);var p = cljs.core.nth.call(null,vec__9458,(1),null);var job = vec__9458;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6321__auto___9639 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto___9639,res,vec__9458,v,p,job,jobs,results){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto___9639,res,vec__9458,v,p,job,jobs,results){
return (function (state_9463){var state_val_9464 = (state_9463[(1)]);if((state_val_9464 === (2)))
{var inst_9460 = (state_9463[(2)]);var inst_9461 = cljs.core.async.close_BANG_.call(null,res);var state_9463__$1 = (function (){var statearr_9465 = state_9463;(statearr_9465[(7)] = inst_9460);
return statearr_9465;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9463__$1,inst_9461);
} else
{if((state_val_9464 === (1)))
{var state_9463__$1 = state_9463;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9463__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6321__auto___9639,res,vec__9458,v,p,job,jobs,results))
;return ((function (switch__6306__auto__,c__6321__auto___9639,res,vec__9458,v,p,job,jobs,results){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_9469 = [null,null,null,null,null,null,null,null];(statearr_9469[(0)] = state_machine__6307__auto__);
(statearr_9469[(1)] = (1));
return statearr_9469;
});
var state_machine__6307__auto____1 = (function (state_9463){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_9463);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e9470){if((e9470 instanceof Object))
{var ex__6310__auto__ = e9470;var statearr_9471_9640 = state_9463;(statearr_9471_9640[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9463);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9641 = state_9463;
state_9463 = G__9641;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_9463){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_9463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto___9639,res,vec__9458,v,p,job,jobs,results))
})();var state__6323__auto__ = (function (){var statearr_9472 = f__6322__auto__.call(null);(statearr_9472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto___9639);
return statearr_9472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto___9639,res,vec__9458,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__9473){var vec__9474 = p__9473;var v = cljs.core.nth.call(null,vec__9474,(0),null);var p = cljs.core.nth.call(null,vec__9474,(1),null);var job = vec__9474;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4407__auto___9642 = n;var __9643 = (0);while(true){
if((__9643 < n__4407__auto___9642))
{var G__9475_9644 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__9475_9644) {
case "async":
var c__6321__auto___9646 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__9643,c__6321__auto___9646,G__9475_9644,n__4407__auto___9642,jobs,results,process,async){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (__9643,c__6321__auto___9646,G__9475_9644,n__4407__auto___9642,jobs,results,process,async){
return (function (state_9488){var state_val_9489 = (state_9488[(1)]);if((state_val_9489 === (7)))
{var inst_9484 = (state_9488[(2)]);var state_9488__$1 = state_9488;var statearr_9490_9647 = state_9488__$1;(statearr_9490_9647[(2)] = inst_9484);
(statearr_9490_9647[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9489 === (6)))
{var state_9488__$1 = state_9488;var statearr_9491_9648 = state_9488__$1;(statearr_9491_9648[(2)] = null);
(statearr_9491_9648[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9489 === (5)))
{var state_9488__$1 = state_9488;var statearr_9492_9649 = state_9488__$1;(statearr_9492_9649[(2)] = null);
(statearr_9492_9649[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9489 === (4)))
{var inst_9478 = (state_9488[(2)]);var inst_9479 = async.call(null,inst_9478);var state_9488__$1 = state_9488;if(cljs.core.truth_(inst_9479))
{var statearr_9493_9650 = state_9488__$1;(statearr_9493_9650[(1)] = (5));
} else
{var statearr_9494_9651 = state_9488__$1;(statearr_9494_9651[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9489 === (3)))
{var inst_9486 = (state_9488[(2)]);var state_9488__$1 = state_9488;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9488__$1,inst_9486);
} else
{if((state_val_9489 === (2)))
{var state_9488__$1 = state_9488;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9488__$1,(4),jobs);
} else
{if((state_val_9489 === (1)))
{var state_9488__$1 = state_9488;var statearr_9495_9652 = state_9488__$1;(statearr_9495_9652[(2)] = null);
(statearr_9495_9652[(1)] = (2));
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
});})(__9643,c__6321__auto___9646,G__9475_9644,n__4407__auto___9642,jobs,results,process,async))
;return ((function (__9643,switch__6306__auto__,c__6321__auto___9646,G__9475_9644,n__4407__auto___9642,jobs,results,process,async){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_9499 = [null,null,null,null,null,null,null];(statearr_9499[(0)] = state_machine__6307__auto__);
(statearr_9499[(1)] = (1));
return statearr_9499;
});
var state_machine__6307__auto____1 = (function (state_9488){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_9488);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e9500){if((e9500 instanceof Object))
{var ex__6310__auto__ = e9500;var statearr_9501_9653 = state_9488;(statearr_9501_9653[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9488);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9500;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9654 = state_9488;
state_9488 = G__9654;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_9488){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_9488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(__9643,switch__6306__auto__,c__6321__auto___9646,G__9475_9644,n__4407__auto___9642,jobs,results,process,async))
})();var state__6323__auto__ = (function (){var statearr_9502 = f__6322__auto__.call(null);(statearr_9502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto___9646);
return statearr_9502;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(__9643,c__6321__auto___9646,G__9475_9644,n__4407__auto___9642,jobs,results,process,async))
);

break;
case "compute":
var c__6321__auto___9655 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__9643,c__6321__auto___9655,G__9475_9644,n__4407__auto___9642,jobs,results,process,async){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (__9643,c__6321__auto___9655,G__9475_9644,n__4407__auto___9642,jobs,results,process,async){
return (function (state_9515){var state_val_9516 = (state_9515[(1)]);if((state_val_9516 === (7)))
{var inst_9511 = (state_9515[(2)]);var state_9515__$1 = state_9515;var statearr_9517_9656 = state_9515__$1;(statearr_9517_9656[(2)] = inst_9511);
(statearr_9517_9656[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9516 === (6)))
{var state_9515__$1 = state_9515;var statearr_9518_9657 = state_9515__$1;(statearr_9518_9657[(2)] = null);
(statearr_9518_9657[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9516 === (5)))
{var state_9515__$1 = state_9515;var statearr_9519_9658 = state_9515__$1;(statearr_9519_9658[(2)] = null);
(statearr_9519_9658[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9516 === (4)))
{var inst_9505 = (state_9515[(2)]);var inst_9506 = process.call(null,inst_9505);var state_9515__$1 = state_9515;if(cljs.core.truth_(inst_9506))
{var statearr_9520_9659 = state_9515__$1;(statearr_9520_9659[(1)] = (5));
} else
{var statearr_9521_9660 = state_9515__$1;(statearr_9521_9660[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9516 === (3)))
{var inst_9513 = (state_9515[(2)]);var state_9515__$1 = state_9515;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9515__$1,inst_9513);
} else
{if((state_val_9516 === (2)))
{var state_9515__$1 = state_9515;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9515__$1,(4),jobs);
} else
{if((state_val_9516 === (1)))
{var state_9515__$1 = state_9515;var statearr_9522_9661 = state_9515__$1;(statearr_9522_9661[(2)] = null);
(statearr_9522_9661[(1)] = (2));
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
});})(__9643,c__6321__auto___9655,G__9475_9644,n__4407__auto___9642,jobs,results,process,async))
;return ((function (__9643,switch__6306__auto__,c__6321__auto___9655,G__9475_9644,n__4407__auto___9642,jobs,results,process,async){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_9526 = [null,null,null,null,null,null,null];(statearr_9526[(0)] = state_machine__6307__auto__);
(statearr_9526[(1)] = (1));
return statearr_9526;
});
var state_machine__6307__auto____1 = (function (state_9515){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_9515);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e9527){if((e9527 instanceof Object))
{var ex__6310__auto__ = e9527;var statearr_9528_9662 = state_9515;(statearr_9528_9662[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9515);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9663 = state_9515;
state_9515 = G__9663;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_9515){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_9515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(__9643,switch__6306__auto__,c__6321__auto___9655,G__9475_9644,n__4407__auto___9642,jobs,results,process,async))
})();var state__6323__auto__ = (function (){var statearr_9529 = f__6322__auto__.call(null);(statearr_9529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto___9655);
return statearr_9529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(__9643,c__6321__auto___9655,G__9475_9644,n__4407__auto___9642,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__9664 = (__9643 + (1));
__9643 = G__9664;
continue;
}
} else
{}
break;
}
var c__6321__auto___9665 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto___9665,jobs,results,process,async){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto___9665,jobs,results,process,async){
return (function (state_9550){var state_val_9551 = (state_9550[(1)]);if((state_val_9551 === (9)))
{var inst_9543 = (state_9550[(2)]);var state_9550__$1 = (function (){var statearr_9552 = state_9550;(statearr_9552[(7)] = inst_9543);
return statearr_9552;
})();var statearr_9553_9666 = state_9550__$1;(statearr_9553_9666[(2)] = null);
(statearr_9553_9666[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9551 === (8)))
{var inst_9537 = (state_9550[(8)]);var inst_9541 = (state_9550[(2)]);var state_9550__$1 = (function (){var statearr_9554 = state_9550;(statearr_9554[(9)] = inst_9541);
return statearr_9554;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9550__$1,(9),results,inst_9537);
} else
{if((state_val_9551 === (7)))
{var inst_9546 = (state_9550[(2)]);var state_9550__$1 = state_9550;var statearr_9555_9667 = state_9550__$1;(statearr_9555_9667[(2)] = inst_9546);
(statearr_9555_9667[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9551 === (6)))
{var inst_9532 = (state_9550[(10)]);var inst_9537 = (state_9550[(8)]);var inst_9537__$1 = cljs.core.async.chan.call(null,(1));var inst_9538 = [inst_9532,inst_9537__$1];var inst_9539 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_9538,null));var state_9550__$1 = (function (){var statearr_9556 = state_9550;(statearr_9556[(8)] = inst_9537__$1);
return statearr_9556;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9550__$1,(8),jobs,inst_9539);
} else
{if((state_val_9551 === (5)))
{var inst_9535 = cljs.core.async.close_BANG_.call(null,jobs);var state_9550__$1 = state_9550;var statearr_9557_9668 = state_9550__$1;(statearr_9557_9668[(2)] = inst_9535);
(statearr_9557_9668[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9551 === (4)))
{var inst_9532 = (state_9550[(10)]);var inst_9532__$1 = (state_9550[(2)]);var inst_9533 = (inst_9532__$1 == null);var state_9550__$1 = (function (){var statearr_9558 = state_9550;(statearr_9558[(10)] = inst_9532__$1);
return statearr_9558;
})();if(cljs.core.truth_(inst_9533))
{var statearr_9559_9669 = state_9550__$1;(statearr_9559_9669[(1)] = (5));
} else
{var statearr_9560_9670 = state_9550__$1;(statearr_9560_9670[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9551 === (3)))
{var inst_9548 = (state_9550[(2)]);var state_9550__$1 = state_9550;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9550__$1,inst_9548);
} else
{if((state_val_9551 === (2)))
{var state_9550__$1 = state_9550;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9550__$1,(4),from);
} else
{if((state_val_9551 === (1)))
{var state_9550__$1 = state_9550;var statearr_9561_9671 = state_9550__$1;(statearr_9561_9671[(2)] = null);
(statearr_9561_9671[(1)] = (2));
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
});})(c__6321__auto___9665,jobs,results,process,async))
;return ((function (switch__6306__auto__,c__6321__auto___9665,jobs,results,process,async){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_9565 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_9565[(0)] = state_machine__6307__auto__);
(statearr_9565[(1)] = (1));
return statearr_9565;
});
var state_machine__6307__auto____1 = (function (state_9550){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_9550);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e9566){if((e9566 instanceof Object))
{var ex__6310__auto__ = e9566;var statearr_9567_9672 = state_9550;(statearr_9567_9672[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9550);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9566;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9673 = state_9550;
state_9550 = G__9673;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_9550){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_9550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto___9665,jobs,results,process,async))
})();var state__6323__auto__ = (function (){var statearr_9568 = f__6322__auto__.call(null);(statearr_9568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto___9665);
return statearr_9568;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto___9665,jobs,results,process,async))
);
var c__6321__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto__,jobs,results,process,async){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto__,jobs,results,process,async){
return (function (state_9606){var state_val_9607 = (state_9606[(1)]);if((state_val_9607 === (7)))
{var inst_9602 = (state_9606[(2)]);var state_9606__$1 = state_9606;var statearr_9608_9674 = state_9606__$1;(statearr_9608_9674[(2)] = inst_9602);
(statearr_9608_9674[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (20)))
{var state_9606__$1 = state_9606;var statearr_9609_9675 = state_9606__$1;(statearr_9609_9675[(2)] = null);
(statearr_9609_9675[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (1)))
{var state_9606__$1 = state_9606;var statearr_9610_9676 = state_9606__$1;(statearr_9610_9676[(2)] = null);
(statearr_9610_9676[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (4)))
{var inst_9571 = (state_9606[(7)]);var inst_9571__$1 = (state_9606[(2)]);var inst_9572 = (inst_9571__$1 == null);var state_9606__$1 = (function (){var statearr_9611 = state_9606;(statearr_9611[(7)] = inst_9571__$1);
return statearr_9611;
})();if(cljs.core.truth_(inst_9572))
{var statearr_9612_9677 = state_9606__$1;(statearr_9612_9677[(1)] = (5));
} else
{var statearr_9613_9678 = state_9606__$1;(statearr_9613_9678[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (15)))
{var inst_9584 = (state_9606[(8)]);var state_9606__$1 = state_9606;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9606__$1,(18),to,inst_9584);
} else
{if((state_val_9607 === (21)))
{var inst_9597 = (state_9606[(2)]);var state_9606__$1 = state_9606;var statearr_9614_9679 = state_9606__$1;(statearr_9614_9679[(2)] = inst_9597);
(statearr_9614_9679[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (13)))
{var inst_9599 = (state_9606[(2)]);var state_9606__$1 = (function (){var statearr_9615 = state_9606;(statearr_9615[(9)] = inst_9599);
return statearr_9615;
})();var statearr_9616_9680 = state_9606__$1;(statearr_9616_9680[(2)] = null);
(statearr_9616_9680[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (6)))
{var inst_9571 = (state_9606[(7)]);var state_9606__$1 = state_9606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9606__$1,(11),inst_9571);
} else
{if((state_val_9607 === (17)))
{var inst_9592 = (state_9606[(2)]);var state_9606__$1 = state_9606;if(cljs.core.truth_(inst_9592))
{var statearr_9617_9681 = state_9606__$1;(statearr_9617_9681[(1)] = (19));
} else
{var statearr_9618_9682 = state_9606__$1;(statearr_9618_9682[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (3)))
{var inst_9604 = (state_9606[(2)]);var state_9606__$1 = state_9606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9606__$1,inst_9604);
} else
{if((state_val_9607 === (12)))
{var inst_9581 = (state_9606[(10)]);var state_9606__$1 = state_9606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9606__$1,(14),inst_9581);
} else
{if((state_val_9607 === (2)))
{var state_9606__$1 = state_9606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9606__$1,(4),results);
} else
{if((state_val_9607 === (19)))
{var state_9606__$1 = state_9606;var statearr_9619_9683 = state_9606__$1;(statearr_9619_9683[(2)] = null);
(statearr_9619_9683[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (11)))
{var inst_9581 = (state_9606[(2)]);var state_9606__$1 = (function (){var statearr_9620 = state_9606;(statearr_9620[(10)] = inst_9581);
return statearr_9620;
})();var statearr_9621_9684 = state_9606__$1;(statearr_9621_9684[(2)] = null);
(statearr_9621_9684[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (9)))
{var state_9606__$1 = state_9606;var statearr_9622_9685 = state_9606__$1;(statearr_9622_9685[(2)] = null);
(statearr_9622_9685[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (5)))
{var state_9606__$1 = state_9606;if(cljs.core.truth_(close_QMARK_))
{var statearr_9623_9686 = state_9606__$1;(statearr_9623_9686[(1)] = (8));
} else
{var statearr_9624_9687 = state_9606__$1;(statearr_9624_9687[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (14)))
{var inst_9586 = (state_9606[(11)]);var inst_9584 = (state_9606[(8)]);var inst_9584__$1 = (state_9606[(2)]);var inst_9585 = (inst_9584__$1 == null);var inst_9586__$1 = cljs.core.not.call(null,inst_9585);var state_9606__$1 = (function (){var statearr_9625 = state_9606;(statearr_9625[(11)] = inst_9586__$1);
(statearr_9625[(8)] = inst_9584__$1);
return statearr_9625;
})();if(inst_9586__$1)
{var statearr_9626_9688 = state_9606__$1;(statearr_9626_9688[(1)] = (15));
} else
{var statearr_9627_9689 = state_9606__$1;(statearr_9627_9689[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (16)))
{var inst_9586 = (state_9606[(11)]);var state_9606__$1 = state_9606;var statearr_9628_9690 = state_9606__$1;(statearr_9628_9690[(2)] = inst_9586);
(statearr_9628_9690[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (10)))
{var inst_9578 = (state_9606[(2)]);var state_9606__$1 = state_9606;var statearr_9629_9691 = state_9606__$1;(statearr_9629_9691[(2)] = inst_9578);
(statearr_9629_9691[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (18)))
{var inst_9589 = (state_9606[(2)]);var state_9606__$1 = state_9606;var statearr_9630_9692 = state_9606__$1;(statearr_9630_9692[(2)] = inst_9589);
(statearr_9630_9692[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9607 === (8)))
{var inst_9575 = cljs.core.async.close_BANG_.call(null,to);var state_9606__$1 = state_9606;var statearr_9631_9693 = state_9606__$1;(statearr_9631_9693[(2)] = inst_9575);
(statearr_9631_9693[(1)] = (10));
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
});})(c__6321__auto__,jobs,results,process,async))
;return ((function (switch__6306__auto__,c__6321__auto__,jobs,results,process,async){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_9635 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9635[(0)] = state_machine__6307__auto__);
(statearr_9635[(1)] = (1));
return statearr_9635;
});
var state_machine__6307__auto____1 = (function (state_9606){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_9606);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e9636){if((e9636 instanceof Object))
{var ex__6310__auto__ = e9636;var statearr_9637_9694 = state_9606;(statearr_9637_9694[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9606);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9695 = state_9606;
state_9606 = G__9695;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_9606){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_9606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto__,jobs,results,process,async))
})();var state__6323__auto__ = (function (){var statearr_9638 = f__6322__auto__.call(null);(statearr_9638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto__);
return statearr_9638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto__,jobs,results,process,async))
);
return c__6321__auto__;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6321__auto___9796 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto___9796,tc,fc){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto___9796,tc,fc){
return (function (state_9771){var state_val_9772 = (state_9771[(1)]);if((state_val_9772 === (7)))
{var inst_9767 = (state_9771[(2)]);var state_9771__$1 = state_9771;var statearr_9773_9797 = state_9771__$1;(statearr_9773_9797[(2)] = inst_9767);
(statearr_9773_9797[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9772 === (1)))
{var state_9771__$1 = state_9771;var statearr_9774_9798 = state_9771__$1;(statearr_9774_9798[(2)] = null);
(statearr_9774_9798[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9772 === (4)))
{var inst_9748 = (state_9771[(7)]);var inst_9748__$1 = (state_9771[(2)]);var inst_9749 = (inst_9748__$1 == null);var state_9771__$1 = (function (){var statearr_9775 = state_9771;(statearr_9775[(7)] = inst_9748__$1);
return statearr_9775;
})();if(cljs.core.truth_(inst_9749))
{var statearr_9776_9799 = state_9771__$1;(statearr_9776_9799[(1)] = (5));
} else
{var statearr_9777_9800 = state_9771__$1;(statearr_9777_9800[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9772 === (13)))
{var state_9771__$1 = state_9771;var statearr_9778_9801 = state_9771__$1;(statearr_9778_9801[(2)] = null);
(statearr_9778_9801[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9772 === (6)))
{var inst_9748 = (state_9771[(7)]);var inst_9754 = p.call(null,inst_9748);var state_9771__$1 = state_9771;if(cljs.core.truth_(inst_9754))
{var statearr_9779_9802 = state_9771__$1;(statearr_9779_9802[(1)] = (9));
} else
{var statearr_9780_9803 = state_9771__$1;(statearr_9780_9803[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9772 === (3)))
{var inst_9769 = (state_9771[(2)]);var state_9771__$1 = state_9771;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9771__$1,inst_9769);
} else
{if((state_val_9772 === (12)))
{var state_9771__$1 = state_9771;var statearr_9781_9804 = state_9771__$1;(statearr_9781_9804[(2)] = null);
(statearr_9781_9804[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9772 === (2)))
{var state_9771__$1 = state_9771;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9771__$1,(4),ch);
} else
{if((state_val_9772 === (11)))
{var inst_9748 = (state_9771[(7)]);var inst_9758 = (state_9771[(2)]);var state_9771__$1 = state_9771;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9771__$1,(8),inst_9758,inst_9748);
} else
{if((state_val_9772 === (9)))
{var state_9771__$1 = state_9771;var statearr_9782_9805 = state_9771__$1;(statearr_9782_9805[(2)] = tc);
(statearr_9782_9805[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9772 === (5)))
{var inst_9751 = cljs.core.async.close_BANG_.call(null,tc);var inst_9752 = cljs.core.async.close_BANG_.call(null,fc);var state_9771__$1 = (function (){var statearr_9783 = state_9771;(statearr_9783[(8)] = inst_9751);
return statearr_9783;
})();var statearr_9784_9806 = state_9771__$1;(statearr_9784_9806[(2)] = inst_9752);
(statearr_9784_9806[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9772 === (14)))
{var inst_9765 = (state_9771[(2)]);var state_9771__$1 = state_9771;var statearr_9785_9807 = state_9771__$1;(statearr_9785_9807[(2)] = inst_9765);
(statearr_9785_9807[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9772 === (10)))
{var state_9771__$1 = state_9771;var statearr_9786_9808 = state_9771__$1;(statearr_9786_9808[(2)] = fc);
(statearr_9786_9808[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9772 === (8)))
{var inst_9760 = (state_9771[(2)]);var state_9771__$1 = state_9771;if(cljs.core.truth_(inst_9760))
{var statearr_9787_9809 = state_9771__$1;(statearr_9787_9809[(1)] = (12));
} else
{var statearr_9788_9810 = state_9771__$1;(statearr_9788_9810[(1)] = (13));
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
});})(c__6321__auto___9796,tc,fc))
;return ((function (switch__6306__auto__,c__6321__auto___9796,tc,fc){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_9792 = [null,null,null,null,null,null,null,null,null];(statearr_9792[(0)] = state_machine__6307__auto__);
(statearr_9792[(1)] = (1));
return statearr_9792;
});
var state_machine__6307__auto____1 = (function (state_9771){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_9771);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e9793){if((e9793 instanceof Object))
{var ex__6310__auto__ = e9793;var statearr_9794_9811 = state_9771;(statearr_9794_9811[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9771);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9793;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9812 = state_9771;
state_9771 = G__9812;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_9771){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_9771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto___9796,tc,fc))
})();var state__6323__auto__ = (function (){var statearr_9795 = f__6322__auto__.call(null);(statearr_9795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto___9796);
return statearr_9795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto___9796,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6321__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto__){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto__){
return (function (state_9859){var state_val_9860 = (state_9859[(1)]);if((state_val_9860 === (7)))
{var inst_9855 = (state_9859[(2)]);var state_9859__$1 = state_9859;var statearr_9861_9877 = state_9859__$1;(statearr_9861_9877[(2)] = inst_9855);
(statearr_9861_9877[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9860 === (6)))
{var inst_9845 = (state_9859[(7)]);var inst_9848 = (state_9859[(8)]);var inst_9852 = f.call(null,inst_9845,inst_9848);var inst_9845__$1 = inst_9852;var state_9859__$1 = (function (){var statearr_9862 = state_9859;(statearr_9862[(7)] = inst_9845__$1);
return statearr_9862;
})();var statearr_9863_9878 = state_9859__$1;(statearr_9863_9878[(2)] = null);
(statearr_9863_9878[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9860 === (5)))
{var inst_9845 = (state_9859[(7)]);var state_9859__$1 = state_9859;var statearr_9864_9879 = state_9859__$1;(statearr_9864_9879[(2)] = inst_9845);
(statearr_9864_9879[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9860 === (4)))
{var inst_9848 = (state_9859[(8)]);var inst_9848__$1 = (state_9859[(2)]);var inst_9849 = (inst_9848__$1 == null);var state_9859__$1 = (function (){var statearr_9865 = state_9859;(statearr_9865[(8)] = inst_9848__$1);
return statearr_9865;
})();if(cljs.core.truth_(inst_9849))
{var statearr_9866_9880 = state_9859__$1;(statearr_9866_9880[(1)] = (5));
} else
{var statearr_9867_9881 = state_9859__$1;(statearr_9867_9881[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9860 === (3)))
{var inst_9857 = (state_9859[(2)]);var state_9859__$1 = state_9859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9859__$1,inst_9857);
} else
{if((state_val_9860 === (2)))
{var state_9859__$1 = state_9859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9859__$1,(4),ch);
} else
{if((state_val_9860 === (1)))
{var inst_9845 = init;var state_9859__$1 = (function (){var statearr_9868 = state_9859;(statearr_9868[(7)] = inst_9845);
return statearr_9868;
})();var statearr_9869_9882 = state_9859__$1;(statearr_9869_9882[(2)] = null);
(statearr_9869_9882[(1)] = (2));
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
});})(c__6321__auto__))
;return ((function (switch__6306__auto__,c__6321__auto__){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_9873 = [null,null,null,null,null,null,null,null,null];(statearr_9873[(0)] = state_machine__6307__auto__);
(statearr_9873[(1)] = (1));
return statearr_9873;
});
var state_machine__6307__auto____1 = (function (state_9859){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_9859);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e9874){if((e9874 instanceof Object))
{var ex__6310__auto__ = e9874;var statearr_9875_9883 = state_9859;(statearr_9875_9883[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9859);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9874;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9884 = state_9859;
state_9859 = G__9884;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_9859){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_9859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto__))
})();var state__6323__auto__ = (function (){var statearr_9876 = f__6322__auto__.call(null);(statearr_9876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto__);
return statearr_9876;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto__))
);
return c__6321__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6321__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto__){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto__){
return (function (state_9958){var state_val_9959 = (state_9958[(1)]);if((state_val_9959 === (7)))
{var inst_9940 = (state_9958[(2)]);var state_9958__$1 = state_9958;var statearr_9960_9983 = state_9958__$1;(statearr_9960_9983[(2)] = inst_9940);
(statearr_9960_9983[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9959 === (1)))
{var inst_9934 = cljs.core.seq.call(null,coll);var inst_9935 = inst_9934;var state_9958__$1 = (function (){var statearr_9961 = state_9958;(statearr_9961[(7)] = inst_9935);
return statearr_9961;
})();var statearr_9962_9984 = state_9958__$1;(statearr_9962_9984[(2)] = null);
(statearr_9962_9984[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9959 === (4)))
{var inst_9935 = (state_9958[(7)]);var inst_9938 = cljs.core.first.call(null,inst_9935);var state_9958__$1 = state_9958;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9958__$1,(7),ch,inst_9938);
} else
{if((state_val_9959 === (13)))
{var inst_9952 = (state_9958[(2)]);var state_9958__$1 = state_9958;var statearr_9963_9985 = state_9958__$1;(statearr_9963_9985[(2)] = inst_9952);
(statearr_9963_9985[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9959 === (6)))
{var inst_9943 = (state_9958[(2)]);var state_9958__$1 = state_9958;if(cljs.core.truth_(inst_9943))
{var statearr_9964_9986 = state_9958__$1;(statearr_9964_9986[(1)] = (8));
} else
{var statearr_9965_9987 = state_9958__$1;(statearr_9965_9987[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9959 === (3)))
{var inst_9956 = (state_9958[(2)]);var state_9958__$1 = state_9958;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9958__$1,inst_9956);
} else
{if((state_val_9959 === (12)))
{var state_9958__$1 = state_9958;var statearr_9966_9988 = state_9958__$1;(statearr_9966_9988[(2)] = null);
(statearr_9966_9988[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9959 === (2)))
{var inst_9935 = (state_9958[(7)]);var state_9958__$1 = state_9958;if(cljs.core.truth_(inst_9935))
{var statearr_9967_9989 = state_9958__$1;(statearr_9967_9989[(1)] = (4));
} else
{var statearr_9968_9990 = state_9958__$1;(statearr_9968_9990[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9959 === (11)))
{var inst_9949 = cljs.core.async.close_BANG_.call(null,ch);var state_9958__$1 = state_9958;var statearr_9969_9991 = state_9958__$1;(statearr_9969_9991[(2)] = inst_9949);
(statearr_9969_9991[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9959 === (9)))
{var state_9958__$1 = state_9958;if(cljs.core.truth_(close_QMARK_))
{var statearr_9970_9992 = state_9958__$1;(statearr_9970_9992[(1)] = (11));
} else
{var statearr_9971_9993 = state_9958__$1;(statearr_9971_9993[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9959 === (5)))
{var inst_9935 = (state_9958[(7)]);var state_9958__$1 = state_9958;var statearr_9972_9994 = state_9958__$1;(statearr_9972_9994[(2)] = inst_9935);
(statearr_9972_9994[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9959 === (10)))
{var inst_9954 = (state_9958[(2)]);var state_9958__$1 = state_9958;var statearr_9973_9995 = state_9958__$1;(statearr_9973_9995[(2)] = inst_9954);
(statearr_9973_9995[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9959 === (8)))
{var inst_9935 = (state_9958[(7)]);var inst_9945 = cljs.core.next.call(null,inst_9935);var inst_9935__$1 = inst_9945;var state_9958__$1 = (function (){var statearr_9974 = state_9958;(statearr_9974[(7)] = inst_9935__$1);
return statearr_9974;
})();var statearr_9975_9996 = state_9958__$1;(statearr_9975_9996[(2)] = null);
(statearr_9975_9996[(1)] = (2));
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
});})(c__6321__auto__))
;return ((function (switch__6306__auto__,c__6321__auto__){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_9979 = [null,null,null,null,null,null,null,null];(statearr_9979[(0)] = state_machine__6307__auto__);
(statearr_9979[(1)] = (1));
return statearr_9979;
});
var state_machine__6307__auto____1 = (function (state_9958){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_9958);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e9980){if((e9980 instanceof Object))
{var ex__6310__auto__ = e9980;var statearr_9981_9997 = state_9958;(statearr_9981_9997[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9958);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e9980;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9998 = state_9958;
state_9958 = G__9998;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_9958){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_9958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto__))
})();var state__6323__auto__ = (function (){var statearr_9982 = f__6322__auto__.call(null);(statearr_9982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto__);
return statearr_9982;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto__))
);
return c__6321__auto__;
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
cljs.core.async.Mux = (function (){var obj10000 = {};return obj10000;
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
cljs.core.async.Mult = (function (){var obj10002 = {};return obj10002;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10224 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10224 = (function (cs,ch,mult,meta10225){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10225 = meta10225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10224.cljs$lang$type = true;
cljs.core.async.t10224.cljs$lang$ctorStr = "cljs.core.async/t10224";
cljs.core.async.t10224.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t10224");
});})(cs))
;
cljs.core.async.t10224.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10224.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10224.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10224.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10224.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10224.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10224.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10226){var self__ = this;
var _10226__$1 = this;return self__.meta10225;
});})(cs))
;
cljs.core.async.t10224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10226,meta10225__$1){var self__ = this;
var _10226__$1 = this;return (new cljs.core.async.t10224(self__.cs,self__.ch,self__.mult,meta10225__$1));
});})(cs))
;
cljs.core.async.__GT_t10224 = ((function (cs){
return (function __GT_t10224(cs__$1,ch__$1,mult__$1,meta10225){return (new cljs.core.async.t10224(cs__$1,ch__$1,mult__$1,meta10225));
});})(cs))
;
}
return (new cljs.core.async.t10224(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6321__auto___10445 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto___10445,cs,m,dchan,dctr,done){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto___10445,cs,m,dchan,dctr,done){
return (function (state_10357){var state_val_10358 = (state_10357[(1)]);if((state_val_10358 === (7)))
{var inst_10353 = (state_10357[(2)]);var state_10357__$1 = state_10357;var statearr_10359_10446 = state_10357__$1;(statearr_10359_10446[(2)] = inst_10353);
(statearr_10359_10446[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (20)))
{var inst_10258 = (state_10357[(7)]);var inst_10268 = cljs.core.first.call(null,inst_10258);var inst_10269 = cljs.core.nth.call(null,inst_10268,(0),null);var inst_10270 = cljs.core.nth.call(null,inst_10268,(1),null);var state_10357__$1 = (function (){var statearr_10360 = state_10357;(statearr_10360[(8)] = inst_10269);
return statearr_10360;
})();if(cljs.core.truth_(inst_10270))
{var statearr_10361_10447 = state_10357__$1;(statearr_10361_10447[(1)] = (22));
} else
{var statearr_10362_10448 = state_10357__$1;(statearr_10362_10448[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (27)))
{var inst_10229 = (state_10357[(9)]);var inst_10305 = (state_10357[(10)]);var inst_10300 = (state_10357[(11)]);var inst_10298 = (state_10357[(12)]);var inst_10305__$1 = cljs.core._nth.call(null,inst_10298,inst_10300);var inst_10306 = cljs.core.async.put_BANG_.call(null,inst_10305__$1,inst_10229,done);var state_10357__$1 = (function (){var statearr_10363 = state_10357;(statearr_10363[(10)] = inst_10305__$1);
return statearr_10363;
})();if(cljs.core.truth_(inst_10306))
{var statearr_10364_10449 = state_10357__$1;(statearr_10364_10449[(1)] = (30));
} else
{var statearr_10365_10450 = state_10357__$1;(statearr_10365_10450[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (1)))
{var state_10357__$1 = state_10357;var statearr_10366_10451 = state_10357__$1;(statearr_10366_10451[(2)] = null);
(statearr_10366_10451[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (24)))
{var inst_10258 = (state_10357[(7)]);var inst_10275 = (state_10357[(2)]);var inst_10276 = cljs.core.next.call(null,inst_10258);var inst_10238 = inst_10276;var inst_10239 = null;var inst_10240 = (0);var inst_10241 = (0);var state_10357__$1 = (function (){var statearr_10367 = state_10357;(statearr_10367[(13)] = inst_10238);
(statearr_10367[(14)] = inst_10240);
(statearr_10367[(15)] = inst_10275);
(statearr_10367[(16)] = inst_10241);
(statearr_10367[(17)] = inst_10239);
return statearr_10367;
})();var statearr_10368_10452 = state_10357__$1;(statearr_10368_10452[(2)] = null);
(statearr_10368_10452[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (39)))
{var state_10357__$1 = state_10357;var statearr_10372_10453 = state_10357__$1;(statearr_10372_10453[(2)] = null);
(statearr_10372_10453[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (4)))
{var inst_10229 = (state_10357[(9)]);var inst_10229__$1 = (state_10357[(2)]);var inst_10230 = (inst_10229__$1 == null);var state_10357__$1 = (function (){var statearr_10373 = state_10357;(statearr_10373[(9)] = inst_10229__$1);
return statearr_10373;
})();if(cljs.core.truth_(inst_10230))
{var statearr_10374_10454 = state_10357__$1;(statearr_10374_10454[(1)] = (5));
} else
{var statearr_10375_10455 = state_10357__$1;(statearr_10375_10455[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (15)))
{var inst_10238 = (state_10357[(13)]);var inst_10240 = (state_10357[(14)]);var inst_10241 = (state_10357[(16)]);var inst_10239 = (state_10357[(17)]);var inst_10254 = (state_10357[(2)]);var inst_10255 = (inst_10241 + (1));var tmp10369 = inst_10238;var tmp10370 = inst_10240;var tmp10371 = inst_10239;var inst_10238__$1 = tmp10369;var inst_10239__$1 = tmp10371;var inst_10240__$1 = tmp10370;var inst_10241__$1 = inst_10255;var state_10357__$1 = (function (){var statearr_10376 = state_10357;(statearr_10376[(13)] = inst_10238__$1);
(statearr_10376[(14)] = inst_10240__$1);
(statearr_10376[(18)] = inst_10254);
(statearr_10376[(16)] = inst_10241__$1);
(statearr_10376[(17)] = inst_10239__$1);
return statearr_10376;
})();var statearr_10377_10456 = state_10357__$1;(statearr_10377_10456[(2)] = null);
(statearr_10377_10456[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (21)))
{var inst_10279 = (state_10357[(2)]);var state_10357__$1 = state_10357;var statearr_10381_10457 = state_10357__$1;(statearr_10381_10457[(2)] = inst_10279);
(statearr_10381_10457[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (31)))
{var inst_10305 = (state_10357[(10)]);var inst_10309 = done.call(null,null);var inst_10310 = cljs.core.async.untap_STAR_.call(null,m,inst_10305);var state_10357__$1 = (function (){var statearr_10382 = state_10357;(statearr_10382[(19)] = inst_10309);
return statearr_10382;
})();var statearr_10383_10458 = state_10357__$1;(statearr_10383_10458[(2)] = inst_10310);
(statearr_10383_10458[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (32)))
{var inst_10297 = (state_10357[(20)]);var inst_10299 = (state_10357[(21)]);var inst_10300 = (state_10357[(11)]);var inst_10298 = (state_10357[(12)]);var inst_10312 = (state_10357[(2)]);var inst_10313 = (inst_10300 + (1));var tmp10378 = inst_10297;var tmp10379 = inst_10299;var tmp10380 = inst_10298;var inst_10297__$1 = tmp10378;var inst_10298__$1 = tmp10380;var inst_10299__$1 = tmp10379;var inst_10300__$1 = inst_10313;var state_10357__$1 = (function (){var statearr_10384 = state_10357;(statearr_10384[(20)] = inst_10297__$1);
(statearr_10384[(22)] = inst_10312);
(statearr_10384[(21)] = inst_10299__$1);
(statearr_10384[(11)] = inst_10300__$1);
(statearr_10384[(12)] = inst_10298__$1);
return statearr_10384;
})();var statearr_10385_10459 = state_10357__$1;(statearr_10385_10459[(2)] = null);
(statearr_10385_10459[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (40)))
{var inst_10325 = (state_10357[(23)]);var inst_10329 = done.call(null,null);var inst_10330 = cljs.core.async.untap_STAR_.call(null,m,inst_10325);var state_10357__$1 = (function (){var statearr_10386 = state_10357;(statearr_10386[(24)] = inst_10329);
return statearr_10386;
})();var statearr_10387_10460 = state_10357__$1;(statearr_10387_10460[(2)] = inst_10330);
(statearr_10387_10460[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (33)))
{var inst_10316 = (state_10357[(25)]);var inst_10318 = cljs.core.chunked_seq_QMARK_.call(null,inst_10316);var state_10357__$1 = state_10357;if(inst_10318)
{var statearr_10388_10461 = state_10357__$1;(statearr_10388_10461[(1)] = (36));
} else
{var statearr_10389_10462 = state_10357__$1;(statearr_10389_10462[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (13)))
{var inst_10248 = (state_10357[(26)]);var inst_10251 = cljs.core.async.close_BANG_.call(null,inst_10248);var state_10357__$1 = state_10357;var statearr_10390_10463 = state_10357__$1;(statearr_10390_10463[(2)] = inst_10251);
(statearr_10390_10463[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (22)))
{var inst_10269 = (state_10357[(8)]);var inst_10272 = cljs.core.async.close_BANG_.call(null,inst_10269);var state_10357__$1 = state_10357;var statearr_10391_10464 = state_10357__$1;(statearr_10391_10464[(2)] = inst_10272);
(statearr_10391_10464[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (36)))
{var inst_10316 = (state_10357[(25)]);var inst_10320 = cljs.core.chunk_first.call(null,inst_10316);var inst_10321 = cljs.core.chunk_rest.call(null,inst_10316);var inst_10322 = cljs.core.count.call(null,inst_10320);var inst_10297 = inst_10321;var inst_10298 = inst_10320;var inst_10299 = inst_10322;var inst_10300 = (0);var state_10357__$1 = (function (){var statearr_10392 = state_10357;(statearr_10392[(20)] = inst_10297);
(statearr_10392[(21)] = inst_10299);
(statearr_10392[(11)] = inst_10300);
(statearr_10392[(12)] = inst_10298);
return statearr_10392;
})();var statearr_10393_10465 = state_10357__$1;(statearr_10393_10465[(2)] = null);
(statearr_10393_10465[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (41)))
{var inst_10316 = (state_10357[(25)]);var inst_10332 = (state_10357[(2)]);var inst_10333 = cljs.core.next.call(null,inst_10316);var inst_10297 = inst_10333;var inst_10298 = null;var inst_10299 = (0);var inst_10300 = (0);var state_10357__$1 = (function (){var statearr_10394 = state_10357;(statearr_10394[(20)] = inst_10297);
(statearr_10394[(27)] = inst_10332);
(statearr_10394[(21)] = inst_10299);
(statearr_10394[(11)] = inst_10300);
(statearr_10394[(12)] = inst_10298);
return statearr_10394;
})();var statearr_10395_10466 = state_10357__$1;(statearr_10395_10466[(2)] = null);
(statearr_10395_10466[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (43)))
{var state_10357__$1 = state_10357;var statearr_10396_10467 = state_10357__$1;(statearr_10396_10467[(2)] = null);
(statearr_10396_10467[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (29)))
{var inst_10341 = (state_10357[(2)]);var state_10357__$1 = state_10357;var statearr_10397_10468 = state_10357__$1;(statearr_10397_10468[(2)] = inst_10341);
(statearr_10397_10468[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (44)))
{var inst_10350 = (state_10357[(2)]);var state_10357__$1 = (function (){var statearr_10398 = state_10357;(statearr_10398[(28)] = inst_10350);
return statearr_10398;
})();var statearr_10399_10469 = state_10357__$1;(statearr_10399_10469[(2)] = null);
(statearr_10399_10469[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (6)))
{var inst_10289 = (state_10357[(29)]);var inst_10288 = cljs.core.deref.call(null,cs);var inst_10289__$1 = cljs.core.keys.call(null,inst_10288);var inst_10290 = cljs.core.count.call(null,inst_10289__$1);var inst_10291 = cljs.core.reset_BANG_.call(null,dctr,inst_10290);var inst_10296 = cljs.core.seq.call(null,inst_10289__$1);var inst_10297 = inst_10296;var inst_10298 = null;var inst_10299 = (0);var inst_10300 = (0);var state_10357__$1 = (function (){var statearr_10400 = state_10357;(statearr_10400[(20)] = inst_10297);
(statearr_10400[(29)] = inst_10289__$1);
(statearr_10400[(30)] = inst_10291);
(statearr_10400[(21)] = inst_10299);
(statearr_10400[(11)] = inst_10300);
(statearr_10400[(12)] = inst_10298);
return statearr_10400;
})();var statearr_10401_10470 = state_10357__$1;(statearr_10401_10470[(2)] = null);
(statearr_10401_10470[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (28)))
{var inst_10297 = (state_10357[(20)]);var inst_10316 = (state_10357[(25)]);var inst_10316__$1 = cljs.core.seq.call(null,inst_10297);var state_10357__$1 = (function (){var statearr_10402 = state_10357;(statearr_10402[(25)] = inst_10316__$1);
return statearr_10402;
})();if(inst_10316__$1)
{var statearr_10403_10471 = state_10357__$1;(statearr_10403_10471[(1)] = (33));
} else
{var statearr_10404_10472 = state_10357__$1;(statearr_10404_10472[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (25)))
{var inst_10299 = (state_10357[(21)]);var inst_10300 = (state_10357[(11)]);var inst_10302 = (inst_10300 < inst_10299);var inst_10303 = inst_10302;var state_10357__$1 = state_10357;if(cljs.core.truth_(inst_10303))
{var statearr_10405_10473 = state_10357__$1;(statearr_10405_10473[(1)] = (27));
} else
{var statearr_10406_10474 = state_10357__$1;(statearr_10406_10474[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (34)))
{var state_10357__$1 = state_10357;var statearr_10407_10475 = state_10357__$1;(statearr_10407_10475[(2)] = null);
(statearr_10407_10475[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (17)))
{var state_10357__$1 = state_10357;var statearr_10408_10476 = state_10357__$1;(statearr_10408_10476[(2)] = null);
(statearr_10408_10476[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (3)))
{var inst_10355 = (state_10357[(2)]);var state_10357__$1 = state_10357;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10357__$1,inst_10355);
} else
{if((state_val_10358 === (12)))
{var inst_10284 = (state_10357[(2)]);var state_10357__$1 = state_10357;var statearr_10409_10477 = state_10357__$1;(statearr_10409_10477[(2)] = inst_10284);
(statearr_10409_10477[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (2)))
{var state_10357__$1 = state_10357;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10357__$1,(4),ch);
} else
{if((state_val_10358 === (23)))
{var state_10357__$1 = state_10357;var statearr_10410_10478 = state_10357__$1;(statearr_10410_10478[(2)] = null);
(statearr_10410_10478[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (35)))
{var inst_10339 = (state_10357[(2)]);var state_10357__$1 = state_10357;var statearr_10411_10479 = state_10357__$1;(statearr_10411_10479[(2)] = inst_10339);
(statearr_10411_10479[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (19)))
{var inst_10258 = (state_10357[(7)]);var inst_10262 = cljs.core.chunk_first.call(null,inst_10258);var inst_10263 = cljs.core.chunk_rest.call(null,inst_10258);var inst_10264 = cljs.core.count.call(null,inst_10262);var inst_10238 = inst_10263;var inst_10239 = inst_10262;var inst_10240 = inst_10264;var inst_10241 = (0);var state_10357__$1 = (function (){var statearr_10412 = state_10357;(statearr_10412[(13)] = inst_10238);
(statearr_10412[(14)] = inst_10240);
(statearr_10412[(16)] = inst_10241);
(statearr_10412[(17)] = inst_10239);
return statearr_10412;
})();var statearr_10413_10480 = state_10357__$1;(statearr_10413_10480[(2)] = null);
(statearr_10413_10480[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (11)))
{var inst_10238 = (state_10357[(13)]);var inst_10258 = (state_10357[(7)]);var inst_10258__$1 = cljs.core.seq.call(null,inst_10238);var state_10357__$1 = (function (){var statearr_10414 = state_10357;(statearr_10414[(7)] = inst_10258__$1);
return statearr_10414;
})();if(inst_10258__$1)
{var statearr_10415_10481 = state_10357__$1;(statearr_10415_10481[(1)] = (16));
} else
{var statearr_10416_10482 = state_10357__$1;(statearr_10416_10482[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (9)))
{var inst_10286 = (state_10357[(2)]);var state_10357__$1 = state_10357;var statearr_10417_10483 = state_10357__$1;(statearr_10417_10483[(2)] = inst_10286);
(statearr_10417_10483[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (5)))
{var inst_10236 = cljs.core.deref.call(null,cs);var inst_10237 = cljs.core.seq.call(null,inst_10236);var inst_10238 = inst_10237;var inst_10239 = null;var inst_10240 = (0);var inst_10241 = (0);var state_10357__$1 = (function (){var statearr_10418 = state_10357;(statearr_10418[(13)] = inst_10238);
(statearr_10418[(14)] = inst_10240);
(statearr_10418[(16)] = inst_10241);
(statearr_10418[(17)] = inst_10239);
return statearr_10418;
})();var statearr_10419_10484 = state_10357__$1;(statearr_10419_10484[(2)] = null);
(statearr_10419_10484[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (14)))
{var state_10357__$1 = state_10357;var statearr_10420_10485 = state_10357__$1;(statearr_10420_10485[(2)] = null);
(statearr_10420_10485[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (45)))
{var inst_10347 = (state_10357[(2)]);var state_10357__$1 = state_10357;var statearr_10421_10486 = state_10357__$1;(statearr_10421_10486[(2)] = inst_10347);
(statearr_10421_10486[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (26)))
{var inst_10289 = (state_10357[(29)]);var inst_10343 = (state_10357[(2)]);var inst_10344 = cljs.core.seq.call(null,inst_10289);var state_10357__$1 = (function (){var statearr_10422 = state_10357;(statearr_10422[(31)] = inst_10343);
return statearr_10422;
})();if(inst_10344)
{var statearr_10423_10487 = state_10357__$1;(statearr_10423_10487[(1)] = (42));
} else
{var statearr_10424_10488 = state_10357__$1;(statearr_10424_10488[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (16)))
{var inst_10258 = (state_10357[(7)]);var inst_10260 = cljs.core.chunked_seq_QMARK_.call(null,inst_10258);var state_10357__$1 = state_10357;if(inst_10260)
{var statearr_10425_10489 = state_10357__$1;(statearr_10425_10489[(1)] = (19));
} else
{var statearr_10426_10490 = state_10357__$1;(statearr_10426_10490[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (38)))
{var inst_10336 = (state_10357[(2)]);var state_10357__$1 = state_10357;var statearr_10427_10491 = state_10357__$1;(statearr_10427_10491[(2)] = inst_10336);
(statearr_10427_10491[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (30)))
{var state_10357__$1 = state_10357;var statearr_10428_10492 = state_10357__$1;(statearr_10428_10492[(2)] = null);
(statearr_10428_10492[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (10)))
{var inst_10241 = (state_10357[(16)]);var inst_10239 = (state_10357[(17)]);var inst_10247 = cljs.core._nth.call(null,inst_10239,inst_10241);var inst_10248 = cljs.core.nth.call(null,inst_10247,(0),null);var inst_10249 = cljs.core.nth.call(null,inst_10247,(1),null);var state_10357__$1 = (function (){var statearr_10429 = state_10357;(statearr_10429[(26)] = inst_10248);
return statearr_10429;
})();if(cljs.core.truth_(inst_10249))
{var statearr_10430_10493 = state_10357__$1;(statearr_10430_10493[(1)] = (13));
} else
{var statearr_10431_10494 = state_10357__$1;(statearr_10431_10494[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (18)))
{var inst_10282 = (state_10357[(2)]);var state_10357__$1 = state_10357;var statearr_10432_10495 = state_10357__$1;(statearr_10432_10495[(2)] = inst_10282);
(statearr_10432_10495[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (42)))
{var state_10357__$1 = state_10357;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10357__$1,(45),dchan);
} else
{if((state_val_10358 === (37)))
{var inst_10316 = (state_10357[(25)]);var inst_10229 = (state_10357[(9)]);var inst_10325 = (state_10357[(23)]);var inst_10325__$1 = cljs.core.first.call(null,inst_10316);var inst_10326 = cljs.core.async.put_BANG_.call(null,inst_10325__$1,inst_10229,done);var state_10357__$1 = (function (){var statearr_10433 = state_10357;(statearr_10433[(23)] = inst_10325__$1);
return statearr_10433;
})();if(cljs.core.truth_(inst_10326))
{var statearr_10434_10496 = state_10357__$1;(statearr_10434_10496[(1)] = (39));
} else
{var statearr_10435_10497 = state_10357__$1;(statearr_10435_10497[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10358 === (8)))
{var inst_10240 = (state_10357[(14)]);var inst_10241 = (state_10357[(16)]);var inst_10243 = (inst_10241 < inst_10240);var inst_10244 = inst_10243;var state_10357__$1 = state_10357;if(cljs.core.truth_(inst_10244))
{var statearr_10436_10498 = state_10357__$1;(statearr_10436_10498[(1)] = (10));
} else
{var statearr_10437_10499 = state_10357__$1;(statearr_10437_10499[(1)] = (11));
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
});})(c__6321__auto___10445,cs,m,dchan,dctr,done))
;return ((function (switch__6306__auto__,c__6321__auto___10445,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_10441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10441[(0)] = state_machine__6307__auto__);
(statearr_10441[(1)] = (1));
return statearr_10441;
});
var state_machine__6307__auto____1 = (function (state_10357){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_10357);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e10442){if((e10442 instanceof Object))
{var ex__6310__auto__ = e10442;var statearr_10443_10500 = state_10357;(statearr_10443_10500[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10357);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10442;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10501 = state_10357;
state_10357 = G__10501;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_10357){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_10357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto___10445,cs,m,dchan,dctr,done))
})();var state__6323__auto__ = (function (){var statearr_10444 = f__6322__auto__.call(null);(statearr_10444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto___10445);
return statearr_10444;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto___10445,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj10503 = {};return obj10503;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__10504){var map__10509 = p__10504;var map__10509__$1 = ((cljs.core.seq_QMARK_.call(null,map__10509))?cljs.core.apply.call(null,cljs.core.hash_map,map__10509):map__10509);var opts = map__10509__$1;var statearr_10510_10513 = state;(statearr_10510_10513[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__10509,map__10509__$1,opts){
return (function (val){var statearr_10511_10514 = state;(statearr_10511_10514[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10509,map__10509__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_10512_10515 = state;(statearr_10512_10515[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__10504 = null;if (arguments.length > 3) {
  p__10504 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__10504);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__10516){
var state = cljs.core.first(arglist__10516);
arglist__10516 = cljs.core.next(arglist__10516);
var cont_block = cljs.core.first(arglist__10516);
arglist__10516 = cljs.core.next(arglist__10516);
var ports = cljs.core.first(arglist__10516);
var p__10504 = cljs.core.rest(arglist__10516);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__10504);
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
;var m = (function (){if(typeof cljs.core.async.t10636 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10636 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10637){
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
this.meta10637 = meta10637;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10636.cljs$lang$type = true;
cljs.core.async.t10636.cljs$lang$ctorStr = "cljs.core.async/t10636";
cljs.core.async.t10636.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t10636");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10636.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10636.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10636.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10636.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10636.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10636.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10636.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10636.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10636.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10638){var self__ = this;
var _10638__$1 = this;return self__.meta10637;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10638,meta10637__$1){var self__ = this;
var _10638__$1 = this;return (new cljs.core.async.t10636(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10637__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10636 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10636(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10637){return (new cljs.core.async.t10636(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10637));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10636(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6321__auto___10755 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto___10755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto___10755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10708){var state_val_10709 = (state_10708[(1)]);if((state_val_10709 === (7)))
{var inst_10652 = (state_10708[(7)]);var inst_10657 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10652);var state_10708__$1 = state_10708;var statearr_10710_10756 = state_10708__$1;(statearr_10710_10756[(2)] = inst_10657);
(statearr_10710_10756[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (20)))
{var inst_10667 = (state_10708[(8)]);var state_10708__$1 = state_10708;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10708__$1,(23),out,inst_10667);
} else
{if((state_val_10709 === (1)))
{var inst_10642 = (state_10708[(9)]);var inst_10642__$1 = calc_state.call(null);var inst_10643 = cljs.core.seq_QMARK_.call(null,inst_10642__$1);var state_10708__$1 = (function (){var statearr_10711 = state_10708;(statearr_10711[(9)] = inst_10642__$1);
return statearr_10711;
})();if(inst_10643)
{var statearr_10712_10757 = state_10708__$1;(statearr_10712_10757[(1)] = (2));
} else
{var statearr_10713_10758 = state_10708__$1;(statearr_10713_10758[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (24)))
{var inst_10660 = (state_10708[(10)]);var inst_10652 = inst_10660;var state_10708__$1 = (function (){var statearr_10714 = state_10708;(statearr_10714[(7)] = inst_10652);
return statearr_10714;
})();var statearr_10715_10759 = state_10708__$1;(statearr_10715_10759[(2)] = null);
(statearr_10715_10759[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (4)))
{var inst_10642 = (state_10708[(9)]);var inst_10648 = (state_10708[(2)]);var inst_10649 = cljs.core.get.call(null,inst_10648,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_10650 = cljs.core.get.call(null,inst_10648,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_10651 = cljs.core.get.call(null,inst_10648,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_10652 = inst_10642;var state_10708__$1 = (function (){var statearr_10716 = state_10708;(statearr_10716[(7)] = inst_10652);
(statearr_10716[(11)] = inst_10650);
(statearr_10716[(12)] = inst_10651);
(statearr_10716[(13)] = inst_10649);
return statearr_10716;
})();var statearr_10717_10760 = state_10708__$1;(statearr_10717_10760[(2)] = null);
(statearr_10717_10760[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (15)))
{var state_10708__$1 = state_10708;var statearr_10718_10761 = state_10708__$1;(statearr_10718_10761[(2)] = null);
(statearr_10718_10761[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (21)))
{var inst_10660 = (state_10708[(10)]);var inst_10652 = inst_10660;var state_10708__$1 = (function (){var statearr_10719 = state_10708;(statearr_10719[(7)] = inst_10652);
return statearr_10719;
})();var statearr_10720_10762 = state_10708__$1;(statearr_10720_10762[(2)] = null);
(statearr_10720_10762[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (13)))
{var inst_10704 = (state_10708[(2)]);var state_10708__$1 = state_10708;var statearr_10721_10763 = state_10708__$1;(statearr_10721_10763[(2)] = inst_10704);
(statearr_10721_10763[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (22)))
{var inst_10702 = (state_10708[(2)]);var state_10708__$1 = state_10708;var statearr_10722_10764 = state_10708__$1;(statearr_10722_10764[(2)] = inst_10702);
(statearr_10722_10764[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (6)))
{var inst_10706 = (state_10708[(2)]);var state_10708__$1 = state_10708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10708__$1,inst_10706);
} else
{if((state_val_10709 === (25)))
{var state_10708__$1 = state_10708;var statearr_10723_10765 = state_10708__$1;(statearr_10723_10765[(2)] = null);
(statearr_10723_10765[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (17)))
{var inst_10682 = (state_10708[(14)]);var state_10708__$1 = state_10708;var statearr_10724_10766 = state_10708__$1;(statearr_10724_10766[(2)] = inst_10682);
(statearr_10724_10766[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (3)))
{var inst_10642 = (state_10708[(9)]);var state_10708__$1 = state_10708;var statearr_10725_10767 = state_10708__$1;(statearr_10725_10767[(2)] = inst_10642);
(statearr_10725_10767[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (12)))
{var inst_10663 = (state_10708[(15)]);var inst_10682 = (state_10708[(14)]);var inst_10668 = (state_10708[(16)]);var inst_10682__$1 = inst_10663.call(null,inst_10668);var state_10708__$1 = (function (){var statearr_10726 = state_10708;(statearr_10726[(14)] = inst_10682__$1);
return statearr_10726;
})();if(cljs.core.truth_(inst_10682__$1))
{var statearr_10727_10768 = state_10708__$1;(statearr_10727_10768[(1)] = (17));
} else
{var statearr_10728_10769 = state_10708__$1;(statearr_10728_10769[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (2)))
{var inst_10642 = (state_10708[(9)]);var inst_10645 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10642);var state_10708__$1 = state_10708;var statearr_10729_10770 = state_10708__$1;(statearr_10729_10770[(2)] = inst_10645);
(statearr_10729_10770[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (23)))
{var inst_10693 = (state_10708[(2)]);var state_10708__$1 = state_10708;if(cljs.core.truth_(inst_10693))
{var statearr_10730_10771 = state_10708__$1;(statearr_10730_10771[(1)] = (24));
} else
{var statearr_10731_10772 = state_10708__$1;(statearr_10731_10772[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (19)))
{var inst_10690 = (state_10708[(2)]);var state_10708__$1 = state_10708;if(cljs.core.truth_(inst_10690))
{var statearr_10732_10773 = state_10708__$1;(statearr_10732_10773[(1)] = (20));
} else
{var statearr_10733_10774 = state_10708__$1;(statearr_10733_10774[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (11)))
{var inst_10667 = (state_10708[(8)]);var inst_10673 = (inst_10667 == null);var state_10708__$1 = state_10708;if(cljs.core.truth_(inst_10673))
{var statearr_10734_10775 = state_10708__$1;(statearr_10734_10775[(1)] = (14));
} else
{var statearr_10735_10776 = state_10708__$1;(statearr_10735_10776[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (9)))
{var inst_10660 = (state_10708[(10)]);var inst_10660__$1 = (state_10708[(2)]);var inst_10661 = cljs.core.get.call(null,inst_10660__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_10662 = cljs.core.get.call(null,inst_10660__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_10663 = cljs.core.get.call(null,inst_10660__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_10708__$1 = (function (){var statearr_10736 = state_10708;(statearr_10736[(15)] = inst_10663);
(statearr_10736[(17)] = inst_10662);
(statearr_10736[(10)] = inst_10660__$1);
return statearr_10736;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_10708__$1,(10),inst_10661);
} else
{if((state_val_10709 === (5)))
{var inst_10652 = (state_10708[(7)]);var inst_10655 = cljs.core.seq_QMARK_.call(null,inst_10652);var state_10708__$1 = state_10708;if(inst_10655)
{var statearr_10737_10777 = state_10708__$1;(statearr_10737_10777[(1)] = (7));
} else
{var statearr_10738_10778 = state_10708__$1;(statearr_10738_10778[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (14)))
{var inst_10668 = (state_10708[(16)]);var inst_10675 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10668);var state_10708__$1 = state_10708;var statearr_10739_10779 = state_10708__$1;(statearr_10739_10779[(2)] = inst_10675);
(statearr_10739_10779[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (26)))
{var inst_10698 = (state_10708[(2)]);var state_10708__$1 = state_10708;var statearr_10740_10780 = state_10708__$1;(statearr_10740_10780[(2)] = inst_10698);
(statearr_10740_10780[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (16)))
{var inst_10678 = (state_10708[(2)]);var inst_10679 = calc_state.call(null);var inst_10652 = inst_10679;var state_10708__$1 = (function (){var statearr_10741 = state_10708;(statearr_10741[(7)] = inst_10652);
(statearr_10741[(18)] = inst_10678);
return statearr_10741;
})();var statearr_10742_10781 = state_10708__$1;(statearr_10742_10781[(2)] = null);
(statearr_10742_10781[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (10)))
{var inst_10667 = (state_10708[(8)]);var inst_10668 = (state_10708[(16)]);var inst_10666 = (state_10708[(2)]);var inst_10667__$1 = cljs.core.nth.call(null,inst_10666,(0),null);var inst_10668__$1 = cljs.core.nth.call(null,inst_10666,(1),null);var inst_10669 = (inst_10667__$1 == null);var inst_10670 = cljs.core._EQ_.call(null,inst_10668__$1,change);var inst_10671 = (inst_10669) || (inst_10670);var state_10708__$1 = (function (){var statearr_10743 = state_10708;(statearr_10743[(8)] = inst_10667__$1);
(statearr_10743[(16)] = inst_10668__$1);
return statearr_10743;
})();if(cljs.core.truth_(inst_10671))
{var statearr_10744_10782 = state_10708__$1;(statearr_10744_10782[(1)] = (11));
} else
{var statearr_10745_10783 = state_10708__$1;(statearr_10745_10783[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (18)))
{var inst_10663 = (state_10708[(15)]);var inst_10662 = (state_10708[(17)]);var inst_10668 = (state_10708[(16)]);var inst_10685 = cljs.core.empty_QMARK_.call(null,inst_10663);var inst_10686 = inst_10662.call(null,inst_10668);var inst_10687 = cljs.core.not.call(null,inst_10686);var inst_10688 = (inst_10685) && (inst_10687);var state_10708__$1 = state_10708;var statearr_10746_10784 = state_10708__$1;(statearr_10746_10784[(2)] = inst_10688);
(statearr_10746_10784[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10709 === (8)))
{var inst_10652 = (state_10708[(7)]);var state_10708__$1 = state_10708;var statearr_10747_10785 = state_10708__$1;(statearr_10747_10785[(2)] = inst_10652);
(statearr_10747_10785[(1)] = (9));
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
});})(c__6321__auto___10755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6306__auto__,c__6321__auto___10755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_10751 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10751[(0)] = state_machine__6307__auto__);
(statearr_10751[(1)] = (1));
return statearr_10751;
});
var state_machine__6307__auto____1 = (function (state_10708){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_10708);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e10752){if((e10752 instanceof Object))
{var ex__6310__auto__ = e10752;var statearr_10753_10786 = state_10708;(statearr_10753_10786[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10708);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10752;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10787 = state_10708;
state_10708 = G__10787;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_10708){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_10708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto___10755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6323__auto__ = (function (){var statearr_10754 = f__6322__auto__.call(null);(statearr_10754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto___10755);
return statearr_10754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto___10755,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj10789 = {};return obj10789;
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
return (function (p1__10790_SHARP_){if(cljs.core.truth_(p1__10790_SHARP_.call(null,topic)))
{return p1__10790_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__10790_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3551__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t10913 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10913 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta10914){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta10914 = meta10914;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10913.cljs$lang$type = true;
cljs.core.async.t10913.cljs$lang$ctorStr = "cljs.core.async/t10913";
cljs.core.async.t10913.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t10913");
});})(mults,ensure_mult))
;
cljs.core.async.t10913.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t10913.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t10913.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t10913.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t10913.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t10913.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10913.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t10913.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10915){var self__ = this;
var _10915__$1 = this;return self__.meta10914;
});})(mults,ensure_mult))
;
cljs.core.async.t10913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10915,meta10914__$1){var self__ = this;
var _10915__$1 = this;return (new cljs.core.async.t10913(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta10914__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t10913 = ((function (mults,ensure_mult){
return (function __GT_t10913(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10914){return (new cljs.core.async.t10913(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta10914));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t10913(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6321__auto___11035 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto___11035,mults,ensure_mult,p){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto___11035,mults,ensure_mult,p){
return (function (state_10987){var state_val_10988 = (state_10987[(1)]);if((state_val_10988 === (7)))
{var inst_10983 = (state_10987[(2)]);var state_10987__$1 = state_10987;var statearr_10989_11036 = state_10987__$1;(statearr_10989_11036[(2)] = inst_10983);
(statearr_10989_11036[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (20)))
{var state_10987__$1 = state_10987;var statearr_10990_11037 = state_10987__$1;(statearr_10990_11037[(2)] = null);
(statearr_10990_11037[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (1)))
{var state_10987__$1 = state_10987;var statearr_10991_11038 = state_10987__$1;(statearr_10991_11038[(2)] = null);
(statearr_10991_11038[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (24)))
{var inst_10966 = (state_10987[(7)]);var inst_10975 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10966);var state_10987__$1 = state_10987;var statearr_10992_11039 = state_10987__$1;(statearr_10992_11039[(2)] = inst_10975);
(statearr_10992_11039[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (4)))
{var inst_10918 = (state_10987[(8)]);var inst_10918__$1 = (state_10987[(2)]);var inst_10919 = (inst_10918__$1 == null);var state_10987__$1 = (function (){var statearr_10993 = state_10987;(statearr_10993[(8)] = inst_10918__$1);
return statearr_10993;
})();if(cljs.core.truth_(inst_10919))
{var statearr_10994_11040 = state_10987__$1;(statearr_10994_11040[(1)] = (5));
} else
{var statearr_10995_11041 = state_10987__$1;(statearr_10995_11041[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (15)))
{var inst_10960 = (state_10987[(2)]);var state_10987__$1 = state_10987;var statearr_10996_11042 = state_10987__$1;(statearr_10996_11042[(2)] = inst_10960);
(statearr_10996_11042[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (21)))
{var inst_10980 = (state_10987[(2)]);var state_10987__$1 = (function (){var statearr_10997 = state_10987;(statearr_10997[(9)] = inst_10980);
return statearr_10997;
})();var statearr_10998_11043 = state_10987__$1;(statearr_10998_11043[(2)] = null);
(statearr_10998_11043[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (13)))
{var inst_10942 = (state_10987[(10)]);var inst_10944 = cljs.core.chunked_seq_QMARK_.call(null,inst_10942);var state_10987__$1 = state_10987;if(inst_10944)
{var statearr_10999_11044 = state_10987__$1;(statearr_10999_11044[(1)] = (16));
} else
{var statearr_11000_11045 = state_10987__$1;(statearr_11000_11045[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (22)))
{var inst_10972 = (state_10987[(2)]);var state_10987__$1 = state_10987;if(cljs.core.truth_(inst_10972))
{var statearr_11001_11046 = state_10987__$1;(statearr_11001_11046[(1)] = (23));
} else
{var statearr_11002_11047 = state_10987__$1;(statearr_11002_11047[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (6)))
{var inst_10966 = (state_10987[(7)]);var inst_10918 = (state_10987[(8)]);var inst_10968 = (state_10987[(11)]);var inst_10966__$1 = topic_fn.call(null,inst_10918);var inst_10967 = cljs.core.deref.call(null,mults);var inst_10968__$1 = cljs.core.get.call(null,inst_10967,inst_10966__$1);var state_10987__$1 = (function (){var statearr_11003 = state_10987;(statearr_11003[(7)] = inst_10966__$1);
(statearr_11003[(11)] = inst_10968__$1);
return statearr_11003;
})();if(cljs.core.truth_(inst_10968__$1))
{var statearr_11004_11048 = state_10987__$1;(statearr_11004_11048[(1)] = (19));
} else
{var statearr_11005_11049 = state_10987__$1;(statearr_11005_11049[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (25)))
{var inst_10977 = (state_10987[(2)]);var state_10987__$1 = state_10987;var statearr_11006_11050 = state_10987__$1;(statearr_11006_11050[(2)] = inst_10977);
(statearr_11006_11050[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (17)))
{var inst_10942 = (state_10987[(10)]);var inst_10951 = cljs.core.first.call(null,inst_10942);var inst_10952 = cljs.core.async.muxch_STAR_.call(null,inst_10951);var inst_10953 = cljs.core.async.close_BANG_.call(null,inst_10952);var inst_10954 = cljs.core.next.call(null,inst_10942);var inst_10928 = inst_10954;var inst_10929 = null;var inst_10930 = (0);var inst_10931 = (0);var state_10987__$1 = (function (){var statearr_11007 = state_10987;(statearr_11007[(12)] = inst_10928);
(statearr_11007[(13)] = inst_10930);
(statearr_11007[(14)] = inst_10929);
(statearr_11007[(15)] = inst_10953);
(statearr_11007[(16)] = inst_10931);
return statearr_11007;
})();var statearr_11008_11051 = state_10987__$1;(statearr_11008_11051[(2)] = null);
(statearr_11008_11051[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (3)))
{var inst_10985 = (state_10987[(2)]);var state_10987__$1 = state_10987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10987__$1,inst_10985);
} else
{if((state_val_10988 === (12)))
{var inst_10962 = (state_10987[(2)]);var state_10987__$1 = state_10987;var statearr_11009_11052 = state_10987__$1;(statearr_11009_11052[(2)] = inst_10962);
(statearr_11009_11052[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (2)))
{var state_10987__$1 = state_10987;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10987__$1,(4),ch);
} else
{if((state_val_10988 === (23)))
{var state_10987__$1 = state_10987;var statearr_11010_11053 = state_10987__$1;(statearr_11010_11053[(2)] = null);
(statearr_11010_11053[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (19)))
{var inst_10918 = (state_10987[(8)]);var inst_10968 = (state_10987[(11)]);var inst_10970 = cljs.core.async.muxch_STAR_.call(null,inst_10968);var state_10987__$1 = state_10987;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10987__$1,(22),inst_10970,inst_10918);
} else
{if((state_val_10988 === (11)))
{var inst_10928 = (state_10987[(12)]);var inst_10942 = (state_10987[(10)]);var inst_10942__$1 = cljs.core.seq.call(null,inst_10928);var state_10987__$1 = (function (){var statearr_11011 = state_10987;(statearr_11011[(10)] = inst_10942__$1);
return statearr_11011;
})();if(inst_10942__$1)
{var statearr_11012_11054 = state_10987__$1;(statearr_11012_11054[(1)] = (13));
} else
{var statearr_11013_11055 = state_10987__$1;(statearr_11013_11055[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (9)))
{var inst_10964 = (state_10987[(2)]);var state_10987__$1 = state_10987;var statearr_11014_11056 = state_10987__$1;(statearr_11014_11056[(2)] = inst_10964);
(statearr_11014_11056[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (5)))
{var inst_10925 = cljs.core.deref.call(null,mults);var inst_10926 = cljs.core.vals.call(null,inst_10925);var inst_10927 = cljs.core.seq.call(null,inst_10926);var inst_10928 = inst_10927;var inst_10929 = null;var inst_10930 = (0);var inst_10931 = (0);var state_10987__$1 = (function (){var statearr_11015 = state_10987;(statearr_11015[(12)] = inst_10928);
(statearr_11015[(13)] = inst_10930);
(statearr_11015[(14)] = inst_10929);
(statearr_11015[(16)] = inst_10931);
return statearr_11015;
})();var statearr_11016_11057 = state_10987__$1;(statearr_11016_11057[(2)] = null);
(statearr_11016_11057[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (14)))
{var state_10987__$1 = state_10987;var statearr_11020_11058 = state_10987__$1;(statearr_11020_11058[(2)] = null);
(statearr_11020_11058[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (16)))
{var inst_10942 = (state_10987[(10)]);var inst_10946 = cljs.core.chunk_first.call(null,inst_10942);var inst_10947 = cljs.core.chunk_rest.call(null,inst_10942);var inst_10948 = cljs.core.count.call(null,inst_10946);var inst_10928 = inst_10947;var inst_10929 = inst_10946;var inst_10930 = inst_10948;var inst_10931 = (0);var state_10987__$1 = (function (){var statearr_11021 = state_10987;(statearr_11021[(12)] = inst_10928);
(statearr_11021[(13)] = inst_10930);
(statearr_11021[(14)] = inst_10929);
(statearr_11021[(16)] = inst_10931);
return statearr_11021;
})();var statearr_11022_11059 = state_10987__$1;(statearr_11022_11059[(2)] = null);
(statearr_11022_11059[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (10)))
{var inst_10928 = (state_10987[(12)]);var inst_10930 = (state_10987[(13)]);var inst_10929 = (state_10987[(14)]);var inst_10931 = (state_10987[(16)]);var inst_10936 = cljs.core._nth.call(null,inst_10929,inst_10931);var inst_10937 = cljs.core.async.muxch_STAR_.call(null,inst_10936);var inst_10938 = cljs.core.async.close_BANG_.call(null,inst_10937);var inst_10939 = (inst_10931 + (1));var tmp11017 = inst_10928;var tmp11018 = inst_10930;var tmp11019 = inst_10929;var inst_10928__$1 = tmp11017;var inst_10929__$1 = tmp11019;var inst_10930__$1 = tmp11018;var inst_10931__$1 = inst_10939;var state_10987__$1 = (function (){var statearr_11023 = state_10987;(statearr_11023[(12)] = inst_10928__$1);
(statearr_11023[(13)] = inst_10930__$1);
(statearr_11023[(17)] = inst_10938);
(statearr_11023[(14)] = inst_10929__$1);
(statearr_11023[(16)] = inst_10931__$1);
return statearr_11023;
})();var statearr_11024_11060 = state_10987__$1;(statearr_11024_11060[(2)] = null);
(statearr_11024_11060[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (18)))
{var inst_10957 = (state_10987[(2)]);var state_10987__$1 = state_10987;var statearr_11025_11061 = state_10987__$1;(statearr_11025_11061[(2)] = inst_10957);
(statearr_11025_11061[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10988 === (8)))
{var inst_10930 = (state_10987[(13)]);var inst_10931 = (state_10987[(16)]);var inst_10933 = (inst_10931 < inst_10930);var inst_10934 = inst_10933;var state_10987__$1 = state_10987;if(cljs.core.truth_(inst_10934))
{var statearr_11026_11062 = state_10987__$1;(statearr_11026_11062[(1)] = (10));
} else
{var statearr_11027_11063 = state_10987__$1;(statearr_11027_11063[(1)] = (11));
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
});})(c__6321__auto___11035,mults,ensure_mult,p))
;return ((function (switch__6306__auto__,c__6321__auto___11035,mults,ensure_mult,p){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_11031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11031[(0)] = state_machine__6307__auto__);
(statearr_11031[(1)] = (1));
return statearr_11031;
});
var state_machine__6307__auto____1 = (function (state_10987){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_10987);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e11032){if((e11032 instanceof Object))
{var ex__6310__auto__ = e11032;var statearr_11033_11064 = state_10987;(statearr_11033_11064[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10987);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11065 = state_10987;
state_10987 = G__11065;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_10987){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_10987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto___11035,mults,ensure_mult,p))
})();var state__6323__auto__ = (function (){var statearr_11034 = f__6322__auto__.call(null);(statearr_11034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto___11035);
return statearr_11034;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto___11035,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6321__auto___11202 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto___11202,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto___11202,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11172){var state_val_11173 = (state_11172[(1)]);if((state_val_11173 === (7)))
{var state_11172__$1 = state_11172;var statearr_11174_11203 = state_11172__$1;(statearr_11174_11203[(2)] = null);
(statearr_11174_11203[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (1)))
{var state_11172__$1 = state_11172;var statearr_11175_11204 = state_11172__$1;(statearr_11175_11204[(2)] = null);
(statearr_11175_11204[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (4)))
{var inst_11136 = (state_11172[(7)]);var inst_11138 = (inst_11136 < cnt);var state_11172__$1 = state_11172;if(cljs.core.truth_(inst_11138))
{var statearr_11176_11205 = state_11172__$1;(statearr_11176_11205[(1)] = (6));
} else
{var statearr_11177_11206 = state_11172__$1;(statearr_11177_11206[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (15)))
{var inst_11168 = (state_11172[(2)]);var state_11172__$1 = state_11172;var statearr_11178_11207 = state_11172__$1;(statearr_11178_11207[(2)] = inst_11168);
(statearr_11178_11207[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (13)))
{var inst_11161 = cljs.core.async.close_BANG_.call(null,out);var state_11172__$1 = state_11172;var statearr_11179_11208 = state_11172__$1;(statearr_11179_11208[(2)] = inst_11161);
(statearr_11179_11208[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (6)))
{var state_11172__$1 = state_11172;var statearr_11180_11209 = state_11172__$1;(statearr_11180_11209[(2)] = null);
(statearr_11180_11209[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (3)))
{var inst_11170 = (state_11172[(2)]);var state_11172__$1 = state_11172;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11172__$1,inst_11170);
} else
{if((state_val_11173 === (12)))
{var inst_11158 = (state_11172[(8)]);var inst_11158__$1 = (state_11172[(2)]);var inst_11159 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11158__$1);var state_11172__$1 = (function (){var statearr_11181 = state_11172;(statearr_11181[(8)] = inst_11158__$1);
return statearr_11181;
})();if(cljs.core.truth_(inst_11159))
{var statearr_11182_11210 = state_11172__$1;(statearr_11182_11210[(1)] = (13));
} else
{var statearr_11183_11211 = state_11172__$1;(statearr_11183_11211[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (2)))
{var inst_11135 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11136 = (0);var state_11172__$1 = (function (){var statearr_11184 = state_11172;(statearr_11184[(9)] = inst_11135);
(statearr_11184[(7)] = inst_11136);
return statearr_11184;
})();var statearr_11185_11212 = state_11172__$1;(statearr_11185_11212[(2)] = null);
(statearr_11185_11212[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (11)))
{var inst_11136 = (state_11172[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11172,(10),Object,null,(9));var inst_11145 = chs__$1.call(null,inst_11136);var inst_11146 = done.call(null,inst_11136);var inst_11147 = cljs.core.async.take_BANG_.call(null,inst_11145,inst_11146);var state_11172__$1 = state_11172;var statearr_11186_11213 = state_11172__$1;(statearr_11186_11213[(2)] = inst_11147);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11172__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (9)))
{var inst_11136 = (state_11172[(7)]);var inst_11149 = (state_11172[(2)]);var inst_11150 = (inst_11136 + (1));var inst_11136__$1 = inst_11150;var state_11172__$1 = (function (){var statearr_11187 = state_11172;(statearr_11187[(10)] = inst_11149);
(statearr_11187[(7)] = inst_11136__$1);
return statearr_11187;
})();var statearr_11188_11214 = state_11172__$1;(statearr_11188_11214[(2)] = null);
(statearr_11188_11214[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (5)))
{var inst_11156 = (state_11172[(2)]);var state_11172__$1 = (function (){var statearr_11189 = state_11172;(statearr_11189[(11)] = inst_11156);
return statearr_11189;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11172__$1,(12),dchan);
} else
{if((state_val_11173 === (14)))
{var inst_11158 = (state_11172[(8)]);var inst_11163 = cljs.core.apply.call(null,f,inst_11158);var state_11172__$1 = state_11172;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11172__$1,(16),out,inst_11163);
} else
{if((state_val_11173 === (16)))
{var inst_11165 = (state_11172[(2)]);var state_11172__$1 = (function (){var statearr_11190 = state_11172;(statearr_11190[(12)] = inst_11165);
return statearr_11190;
})();var statearr_11191_11215 = state_11172__$1;(statearr_11191_11215[(2)] = null);
(statearr_11191_11215[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (10)))
{var inst_11140 = (state_11172[(2)]);var inst_11141 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11172__$1 = (function (){var statearr_11192 = state_11172;(statearr_11192[(13)] = inst_11140);
return statearr_11192;
})();var statearr_11193_11216 = state_11172__$1;(statearr_11193_11216[(2)] = inst_11141);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11172__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11173 === (8)))
{var inst_11154 = (state_11172[(2)]);var state_11172__$1 = state_11172;var statearr_11194_11217 = state_11172__$1;(statearr_11194_11217[(2)] = inst_11154);
(statearr_11194_11217[(1)] = (5));
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
});})(c__6321__auto___11202,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6306__auto__,c__6321__auto___11202,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_11198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11198[(0)] = state_machine__6307__auto__);
(statearr_11198[(1)] = (1));
return statearr_11198;
});
var state_machine__6307__auto____1 = (function (state_11172){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_11172);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e11199){if((e11199 instanceof Object))
{var ex__6310__auto__ = e11199;var statearr_11200_11218 = state_11172;(statearr_11200_11218[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11172);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11199;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11219 = state_11172;
state_11172 = G__11219;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_11172){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_11172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto___11202,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6323__auto__ = (function (){var statearr_11201 = f__6322__auto__.call(null);(statearr_11201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto___11202);
return statearr_11201;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto___11202,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6321__auto___11327 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto___11327,out){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto___11327,out){
return (function (state_11303){var state_val_11304 = (state_11303[(1)]);if((state_val_11304 === (7)))
{var inst_11283 = (state_11303[(7)]);var inst_11282 = (state_11303[(8)]);var inst_11282__$1 = (state_11303[(2)]);var inst_11283__$1 = cljs.core.nth.call(null,inst_11282__$1,(0),null);var inst_11284 = cljs.core.nth.call(null,inst_11282__$1,(1),null);var inst_11285 = (inst_11283__$1 == null);var state_11303__$1 = (function (){var statearr_11305 = state_11303;(statearr_11305[(7)] = inst_11283__$1);
(statearr_11305[(9)] = inst_11284);
(statearr_11305[(8)] = inst_11282__$1);
return statearr_11305;
})();if(cljs.core.truth_(inst_11285))
{var statearr_11306_11328 = state_11303__$1;(statearr_11306_11328[(1)] = (8));
} else
{var statearr_11307_11329 = state_11303__$1;(statearr_11307_11329[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (1)))
{var inst_11274 = cljs.core.vec.call(null,chs);var inst_11275 = inst_11274;var state_11303__$1 = (function (){var statearr_11308 = state_11303;(statearr_11308[(10)] = inst_11275);
return statearr_11308;
})();var statearr_11309_11330 = state_11303__$1;(statearr_11309_11330[(2)] = null);
(statearr_11309_11330[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (4)))
{var inst_11275 = (state_11303[(10)]);var state_11303__$1 = state_11303;return cljs.core.async.ioc_alts_BANG_.call(null,state_11303__$1,(7),inst_11275);
} else
{if((state_val_11304 === (6)))
{var inst_11299 = (state_11303[(2)]);var state_11303__$1 = state_11303;var statearr_11310_11331 = state_11303__$1;(statearr_11310_11331[(2)] = inst_11299);
(statearr_11310_11331[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (3)))
{var inst_11301 = (state_11303[(2)]);var state_11303__$1 = state_11303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11303__$1,inst_11301);
} else
{if((state_val_11304 === (2)))
{var inst_11275 = (state_11303[(10)]);var inst_11277 = cljs.core.count.call(null,inst_11275);var inst_11278 = (inst_11277 > (0));var state_11303__$1 = state_11303;if(cljs.core.truth_(inst_11278))
{var statearr_11312_11332 = state_11303__$1;(statearr_11312_11332[(1)] = (4));
} else
{var statearr_11313_11333 = state_11303__$1;(statearr_11313_11333[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (11)))
{var inst_11275 = (state_11303[(10)]);var inst_11292 = (state_11303[(2)]);var tmp11311 = inst_11275;var inst_11275__$1 = tmp11311;var state_11303__$1 = (function (){var statearr_11314 = state_11303;(statearr_11314[(10)] = inst_11275__$1);
(statearr_11314[(11)] = inst_11292);
return statearr_11314;
})();var statearr_11315_11334 = state_11303__$1;(statearr_11315_11334[(2)] = null);
(statearr_11315_11334[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (9)))
{var inst_11283 = (state_11303[(7)]);var state_11303__$1 = state_11303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11303__$1,(11),out,inst_11283);
} else
{if((state_val_11304 === (5)))
{var inst_11297 = cljs.core.async.close_BANG_.call(null,out);var state_11303__$1 = state_11303;var statearr_11316_11335 = state_11303__$1;(statearr_11316_11335[(2)] = inst_11297);
(statearr_11316_11335[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (10)))
{var inst_11295 = (state_11303[(2)]);var state_11303__$1 = state_11303;var statearr_11317_11336 = state_11303__$1;(statearr_11317_11336[(2)] = inst_11295);
(statearr_11317_11336[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11304 === (8)))
{var inst_11275 = (state_11303[(10)]);var inst_11283 = (state_11303[(7)]);var inst_11284 = (state_11303[(9)]);var inst_11282 = (state_11303[(8)]);var inst_11287 = (function (){var c = inst_11284;var v = inst_11283;var vec__11280 = inst_11282;var cs = inst_11275;return ((function (c,v,vec__11280,cs,inst_11275,inst_11283,inst_11284,inst_11282,state_val_11304,c__6321__auto___11327,out){
return (function (p1__11220_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11220_SHARP_);
});
;})(c,v,vec__11280,cs,inst_11275,inst_11283,inst_11284,inst_11282,state_val_11304,c__6321__auto___11327,out))
})();var inst_11288 = cljs.core.filterv.call(null,inst_11287,inst_11275);var inst_11275__$1 = inst_11288;var state_11303__$1 = (function (){var statearr_11318 = state_11303;(statearr_11318[(10)] = inst_11275__$1);
return statearr_11318;
})();var statearr_11319_11337 = state_11303__$1;(statearr_11319_11337[(2)] = null);
(statearr_11319_11337[(1)] = (2));
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
});})(c__6321__auto___11327,out))
;return ((function (switch__6306__auto__,c__6321__auto___11327,out){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_11323 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11323[(0)] = state_machine__6307__auto__);
(statearr_11323[(1)] = (1));
return statearr_11323;
});
var state_machine__6307__auto____1 = (function (state_11303){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_11303);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e11324){if((e11324 instanceof Object))
{var ex__6310__auto__ = e11324;var statearr_11325_11338 = state_11303;(statearr_11325_11338[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11303);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11324;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11339 = state_11303;
state_11303 = G__11339;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_11303){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_11303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto___11327,out))
})();var state__6323__auto__ = (function (){var statearr_11326 = f__6322__auto__.call(null);(statearr_11326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto___11327);
return statearr_11326;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto___11327,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6321__auto___11432 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto___11432,out){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto___11432,out){
return (function (state_11409){var state_val_11410 = (state_11409[(1)]);if((state_val_11410 === (7)))
{var inst_11391 = (state_11409[(7)]);var inst_11391__$1 = (state_11409[(2)]);var inst_11392 = (inst_11391__$1 == null);var inst_11393 = cljs.core.not.call(null,inst_11392);var state_11409__$1 = (function (){var statearr_11411 = state_11409;(statearr_11411[(7)] = inst_11391__$1);
return statearr_11411;
})();if(inst_11393)
{var statearr_11412_11433 = state_11409__$1;(statearr_11412_11433[(1)] = (8));
} else
{var statearr_11413_11434 = state_11409__$1;(statearr_11413_11434[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11410 === (1)))
{var inst_11386 = (0);var state_11409__$1 = (function (){var statearr_11414 = state_11409;(statearr_11414[(8)] = inst_11386);
return statearr_11414;
})();var statearr_11415_11435 = state_11409__$1;(statearr_11415_11435[(2)] = null);
(statearr_11415_11435[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11410 === (4)))
{var state_11409__$1 = state_11409;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11409__$1,(7),ch);
} else
{if((state_val_11410 === (6)))
{var inst_11404 = (state_11409[(2)]);var state_11409__$1 = state_11409;var statearr_11416_11436 = state_11409__$1;(statearr_11416_11436[(2)] = inst_11404);
(statearr_11416_11436[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11410 === (3)))
{var inst_11406 = (state_11409[(2)]);var inst_11407 = cljs.core.async.close_BANG_.call(null,out);var state_11409__$1 = (function (){var statearr_11417 = state_11409;(statearr_11417[(9)] = inst_11406);
return statearr_11417;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11409__$1,inst_11407);
} else
{if((state_val_11410 === (2)))
{var inst_11386 = (state_11409[(8)]);var inst_11388 = (inst_11386 < n);var state_11409__$1 = state_11409;if(cljs.core.truth_(inst_11388))
{var statearr_11418_11437 = state_11409__$1;(statearr_11418_11437[(1)] = (4));
} else
{var statearr_11419_11438 = state_11409__$1;(statearr_11419_11438[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11410 === (11)))
{var inst_11386 = (state_11409[(8)]);var inst_11396 = (state_11409[(2)]);var inst_11397 = (inst_11386 + (1));var inst_11386__$1 = inst_11397;var state_11409__$1 = (function (){var statearr_11420 = state_11409;(statearr_11420[(10)] = inst_11396);
(statearr_11420[(8)] = inst_11386__$1);
return statearr_11420;
})();var statearr_11421_11439 = state_11409__$1;(statearr_11421_11439[(2)] = null);
(statearr_11421_11439[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11410 === (9)))
{var state_11409__$1 = state_11409;var statearr_11422_11440 = state_11409__$1;(statearr_11422_11440[(2)] = null);
(statearr_11422_11440[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11410 === (5)))
{var state_11409__$1 = state_11409;var statearr_11423_11441 = state_11409__$1;(statearr_11423_11441[(2)] = null);
(statearr_11423_11441[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11410 === (10)))
{var inst_11401 = (state_11409[(2)]);var state_11409__$1 = state_11409;var statearr_11424_11442 = state_11409__$1;(statearr_11424_11442[(2)] = inst_11401);
(statearr_11424_11442[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11410 === (8)))
{var inst_11391 = (state_11409[(7)]);var state_11409__$1 = state_11409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11409__$1,(11),out,inst_11391);
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
});})(c__6321__auto___11432,out))
;return ((function (switch__6306__auto__,c__6321__auto___11432,out){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_11428 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11428[(0)] = state_machine__6307__auto__);
(statearr_11428[(1)] = (1));
return statearr_11428;
});
var state_machine__6307__auto____1 = (function (state_11409){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_11409);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e11429){if((e11429 instanceof Object))
{var ex__6310__auto__ = e11429;var statearr_11430_11443 = state_11409;(statearr_11430_11443[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11409);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11429;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11444 = state_11409;
state_11409 = G__11444;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_11409){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_11409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto___11432,out))
})();var state__6323__auto__ = (function (){var statearr_11431 = f__6322__auto__.call(null);(statearr_11431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto___11432);
return statearr_11431;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto___11432,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11452 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11452 = (function (ch,f,map_LT_,meta11453){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11453 = meta11453;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11452.cljs$lang$type = true;
cljs.core.async.t11452.cljs$lang$ctorStr = "cljs.core.async/t11452";
cljs.core.async.t11452.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11452");
});
cljs.core.async.t11452.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11452.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11452.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11452.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11455 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11455 = (function (fn1,_,meta11453,ch,f,map_LT_,meta11456){
this.fn1 = fn1;
this._ = _;
this.meta11453 = meta11453;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11456 = meta11456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11455.cljs$lang$type = true;
cljs.core.async.t11455.cljs$lang$ctorStr = "cljs.core.async/t11455";
cljs.core.async.t11455.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11455");
});})(___$1))
;
cljs.core.async.t11455.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11455.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11455.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11445_SHARP_){return f1.call(null,(((p1__11445_SHARP_ == null))?null:self__.f.call(null,p1__11445_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11457){var self__ = this;
var _11457__$1 = this;return self__.meta11456;
});})(___$1))
;
cljs.core.async.t11455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11457,meta11456__$1){var self__ = this;
var _11457__$1 = this;return (new cljs.core.async.t11455(self__.fn1,self__._,self__.meta11453,self__.ch,self__.f,self__.map_LT_,meta11456__$1));
});})(___$1))
;
cljs.core.async.__GT_t11455 = ((function (___$1){
return (function __GT_t11455(fn1__$1,___$2,meta11453__$1,ch__$2,f__$2,map_LT___$2,meta11456){return (new cljs.core.async.t11455(fn1__$1,___$2,meta11453__$1,ch__$2,f__$2,map_LT___$2,meta11456));
});})(___$1))
;
}
return (new cljs.core.async.t11455(fn1,___$1,self__.meta11453,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11452.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11452.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11452.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11454){var self__ = this;
var _11454__$1 = this;return self__.meta11453;
});
cljs.core.async.t11452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11454,meta11453__$1){var self__ = this;
var _11454__$1 = this;return (new cljs.core.async.t11452(self__.ch,self__.f,self__.map_LT_,meta11453__$1));
});
cljs.core.async.__GT_t11452 = (function __GT_t11452(ch__$1,f__$1,map_LT___$1,meta11453){return (new cljs.core.async.t11452(ch__$1,f__$1,map_LT___$1,meta11453));
});
}
return (new cljs.core.async.t11452(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11461 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11461 = (function (ch,f,map_GT_,meta11462){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11462 = meta11462;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11461.cljs$lang$type = true;
cljs.core.async.t11461.cljs$lang$ctorStr = "cljs.core.async/t11461";
cljs.core.async.t11461.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11461");
});
cljs.core.async.t11461.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11461.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11461.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11461.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11461.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11461.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11463){var self__ = this;
var _11463__$1 = this;return self__.meta11462;
});
cljs.core.async.t11461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11463,meta11462__$1){var self__ = this;
var _11463__$1 = this;return (new cljs.core.async.t11461(self__.ch,self__.f,self__.map_GT_,meta11462__$1));
});
cljs.core.async.__GT_t11461 = (function __GT_t11461(ch__$1,f__$1,map_GT___$1,meta11462){return (new cljs.core.async.t11461(ch__$1,f__$1,map_GT___$1,meta11462));
});
}
return (new cljs.core.async.t11461(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11467 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11467 = (function (ch,p,filter_GT_,meta11468){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11468 = meta11468;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11467.cljs$lang$type = true;
cljs.core.async.t11467.cljs$lang$ctorStr = "cljs.core.async/t11467";
cljs.core.async.t11467.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11467");
});
cljs.core.async.t11467.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11467.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11467.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11467.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11467.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11467.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11467.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11469){var self__ = this;
var _11469__$1 = this;return self__.meta11468;
});
cljs.core.async.t11467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11469,meta11468__$1){var self__ = this;
var _11469__$1 = this;return (new cljs.core.async.t11467(self__.ch,self__.p,self__.filter_GT_,meta11468__$1));
});
cljs.core.async.__GT_t11467 = (function __GT_t11467(ch__$1,p__$1,filter_GT___$1,meta11468){return (new cljs.core.async.t11467(ch__$1,p__$1,filter_GT___$1,meta11468));
});
}
return (new cljs.core.async.t11467(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6321__auto___11552 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto___11552,out){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto___11552,out){
return (function (state_11531){var state_val_11532 = (state_11531[(1)]);if((state_val_11532 === (7)))
{var inst_11527 = (state_11531[(2)]);var state_11531__$1 = state_11531;var statearr_11533_11553 = state_11531__$1;(statearr_11533_11553[(2)] = inst_11527);
(statearr_11533_11553[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11532 === (1)))
{var state_11531__$1 = state_11531;var statearr_11534_11554 = state_11531__$1;(statearr_11534_11554[(2)] = null);
(statearr_11534_11554[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11532 === (4)))
{var inst_11513 = (state_11531[(7)]);var inst_11513__$1 = (state_11531[(2)]);var inst_11514 = (inst_11513__$1 == null);var state_11531__$1 = (function (){var statearr_11535 = state_11531;(statearr_11535[(7)] = inst_11513__$1);
return statearr_11535;
})();if(cljs.core.truth_(inst_11514))
{var statearr_11536_11555 = state_11531__$1;(statearr_11536_11555[(1)] = (5));
} else
{var statearr_11537_11556 = state_11531__$1;(statearr_11537_11556[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11532 === (6)))
{var inst_11513 = (state_11531[(7)]);var inst_11518 = p.call(null,inst_11513);var state_11531__$1 = state_11531;if(cljs.core.truth_(inst_11518))
{var statearr_11538_11557 = state_11531__$1;(statearr_11538_11557[(1)] = (8));
} else
{var statearr_11539_11558 = state_11531__$1;(statearr_11539_11558[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11532 === (3)))
{var inst_11529 = (state_11531[(2)]);var state_11531__$1 = state_11531;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11531__$1,inst_11529);
} else
{if((state_val_11532 === (2)))
{var state_11531__$1 = state_11531;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11531__$1,(4),ch);
} else
{if((state_val_11532 === (11)))
{var inst_11521 = (state_11531[(2)]);var state_11531__$1 = state_11531;var statearr_11540_11559 = state_11531__$1;(statearr_11540_11559[(2)] = inst_11521);
(statearr_11540_11559[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11532 === (9)))
{var state_11531__$1 = state_11531;var statearr_11541_11560 = state_11531__$1;(statearr_11541_11560[(2)] = null);
(statearr_11541_11560[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11532 === (5)))
{var inst_11516 = cljs.core.async.close_BANG_.call(null,out);var state_11531__$1 = state_11531;var statearr_11542_11561 = state_11531__$1;(statearr_11542_11561[(2)] = inst_11516);
(statearr_11542_11561[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11532 === (10)))
{var inst_11524 = (state_11531[(2)]);var state_11531__$1 = (function (){var statearr_11543 = state_11531;(statearr_11543[(8)] = inst_11524);
return statearr_11543;
})();var statearr_11544_11562 = state_11531__$1;(statearr_11544_11562[(2)] = null);
(statearr_11544_11562[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11532 === (8)))
{var inst_11513 = (state_11531[(7)]);var state_11531__$1 = state_11531;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11531__$1,(11),out,inst_11513);
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
});})(c__6321__auto___11552,out))
;return ((function (switch__6306__auto__,c__6321__auto___11552,out){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_11548 = [null,null,null,null,null,null,null,null,null];(statearr_11548[(0)] = state_machine__6307__auto__);
(statearr_11548[(1)] = (1));
return statearr_11548;
});
var state_machine__6307__auto____1 = (function (state_11531){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_11531);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e11549){if((e11549 instanceof Object))
{var ex__6310__auto__ = e11549;var statearr_11550_11563 = state_11531;(statearr_11550_11563[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11531);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11549;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11564 = state_11531;
state_11531 = G__11564;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_11531){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_11531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto___11552,out))
})();var state__6323__auto__ = (function (){var statearr_11551 = f__6322__auto__.call(null);(statearr_11551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto___11552);
return statearr_11551;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto___11552,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6321__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto__){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto__){
return (function (state_11730){var state_val_11731 = (state_11730[(1)]);if((state_val_11731 === (7)))
{var inst_11726 = (state_11730[(2)]);var state_11730__$1 = state_11730;var statearr_11732_11773 = state_11730__$1;(statearr_11732_11773[(2)] = inst_11726);
(statearr_11732_11773[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (20)))
{var inst_11696 = (state_11730[(7)]);var inst_11707 = (state_11730[(2)]);var inst_11708 = cljs.core.next.call(null,inst_11696);var inst_11682 = inst_11708;var inst_11683 = null;var inst_11684 = (0);var inst_11685 = (0);var state_11730__$1 = (function (){var statearr_11733 = state_11730;(statearr_11733[(8)] = inst_11683);
(statearr_11733[(9)] = inst_11684);
(statearr_11733[(10)] = inst_11707);
(statearr_11733[(11)] = inst_11685);
(statearr_11733[(12)] = inst_11682);
return statearr_11733;
})();var statearr_11734_11774 = state_11730__$1;(statearr_11734_11774[(2)] = null);
(statearr_11734_11774[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (1)))
{var state_11730__$1 = state_11730;var statearr_11735_11775 = state_11730__$1;(statearr_11735_11775[(2)] = null);
(statearr_11735_11775[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (4)))
{var inst_11671 = (state_11730[(13)]);var inst_11671__$1 = (state_11730[(2)]);var inst_11672 = (inst_11671__$1 == null);var state_11730__$1 = (function (){var statearr_11736 = state_11730;(statearr_11736[(13)] = inst_11671__$1);
return statearr_11736;
})();if(cljs.core.truth_(inst_11672))
{var statearr_11737_11776 = state_11730__$1;(statearr_11737_11776[(1)] = (5));
} else
{var statearr_11738_11777 = state_11730__$1;(statearr_11738_11777[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (15)))
{var state_11730__$1 = state_11730;var statearr_11742_11778 = state_11730__$1;(statearr_11742_11778[(2)] = null);
(statearr_11742_11778[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (21)))
{var state_11730__$1 = state_11730;var statearr_11743_11779 = state_11730__$1;(statearr_11743_11779[(2)] = null);
(statearr_11743_11779[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (13)))
{var inst_11683 = (state_11730[(8)]);var inst_11684 = (state_11730[(9)]);var inst_11685 = (state_11730[(11)]);var inst_11682 = (state_11730[(12)]);var inst_11692 = (state_11730[(2)]);var inst_11693 = (inst_11685 + (1));var tmp11739 = inst_11683;var tmp11740 = inst_11684;var tmp11741 = inst_11682;var inst_11682__$1 = tmp11741;var inst_11683__$1 = tmp11739;var inst_11684__$1 = tmp11740;var inst_11685__$1 = inst_11693;var state_11730__$1 = (function (){var statearr_11744 = state_11730;(statearr_11744[(14)] = inst_11692);
(statearr_11744[(8)] = inst_11683__$1);
(statearr_11744[(9)] = inst_11684__$1);
(statearr_11744[(11)] = inst_11685__$1);
(statearr_11744[(12)] = inst_11682__$1);
return statearr_11744;
})();var statearr_11745_11780 = state_11730__$1;(statearr_11745_11780[(2)] = null);
(statearr_11745_11780[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (22)))
{var state_11730__$1 = state_11730;var statearr_11746_11781 = state_11730__$1;(statearr_11746_11781[(2)] = null);
(statearr_11746_11781[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (6)))
{var inst_11671 = (state_11730[(13)]);var inst_11680 = f.call(null,inst_11671);var inst_11681 = cljs.core.seq.call(null,inst_11680);var inst_11682 = inst_11681;var inst_11683 = null;var inst_11684 = (0);var inst_11685 = (0);var state_11730__$1 = (function (){var statearr_11747 = state_11730;(statearr_11747[(8)] = inst_11683);
(statearr_11747[(9)] = inst_11684);
(statearr_11747[(11)] = inst_11685);
(statearr_11747[(12)] = inst_11682);
return statearr_11747;
})();var statearr_11748_11782 = state_11730__$1;(statearr_11748_11782[(2)] = null);
(statearr_11748_11782[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (17)))
{var inst_11696 = (state_11730[(7)]);var inst_11700 = cljs.core.chunk_first.call(null,inst_11696);var inst_11701 = cljs.core.chunk_rest.call(null,inst_11696);var inst_11702 = cljs.core.count.call(null,inst_11700);var inst_11682 = inst_11701;var inst_11683 = inst_11700;var inst_11684 = inst_11702;var inst_11685 = (0);var state_11730__$1 = (function (){var statearr_11749 = state_11730;(statearr_11749[(8)] = inst_11683);
(statearr_11749[(9)] = inst_11684);
(statearr_11749[(11)] = inst_11685);
(statearr_11749[(12)] = inst_11682);
return statearr_11749;
})();var statearr_11750_11783 = state_11730__$1;(statearr_11750_11783[(2)] = null);
(statearr_11750_11783[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (3)))
{var inst_11728 = (state_11730[(2)]);var state_11730__$1 = state_11730;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11730__$1,inst_11728);
} else
{if((state_val_11731 === (12)))
{var inst_11716 = (state_11730[(2)]);var state_11730__$1 = state_11730;var statearr_11751_11784 = state_11730__$1;(statearr_11751_11784[(2)] = inst_11716);
(statearr_11751_11784[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (2)))
{var state_11730__$1 = state_11730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11730__$1,(4),in$);
} else
{if((state_val_11731 === (23)))
{var inst_11724 = (state_11730[(2)]);var state_11730__$1 = state_11730;var statearr_11752_11785 = state_11730__$1;(statearr_11752_11785[(2)] = inst_11724);
(statearr_11752_11785[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (19)))
{var inst_11711 = (state_11730[(2)]);var state_11730__$1 = state_11730;var statearr_11753_11786 = state_11730__$1;(statearr_11753_11786[(2)] = inst_11711);
(statearr_11753_11786[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (11)))
{var inst_11696 = (state_11730[(7)]);var inst_11682 = (state_11730[(12)]);var inst_11696__$1 = cljs.core.seq.call(null,inst_11682);var state_11730__$1 = (function (){var statearr_11754 = state_11730;(statearr_11754[(7)] = inst_11696__$1);
return statearr_11754;
})();if(inst_11696__$1)
{var statearr_11755_11787 = state_11730__$1;(statearr_11755_11787[(1)] = (14));
} else
{var statearr_11756_11788 = state_11730__$1;(statearr_11756_11788[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (9)))
{var inst_11718 = (state_11730[(2)]);var inst_11719 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11730__$1 = (function (){var statearr_11757 = state_11730;(statearr_11757[(15)] = inst_11718);
return statearr_11757;
})();if(cljs.core.truth_(inst_11719))
{var statearr_11758_11789 = state_11730__$1;(statearr_11758_11789[(1)] = (21));
} else
{var statearr_11759_11790 = state_11730__$1;(statearr_11759_11790[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (5)))
{var inst_11674 = cljs.core.async.close_BANG_.call(null,out);var state_11730__$1 = state_11730;var statearr_11760_11791 = state_11730__$1;(statearr_11760_11791[(2)] = inst_11674);
(statearr_11760_11791[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (14)))
{var inst_11696 = (state_11730[(7)]);var inst_11698 = cljs.core.chunked_seq_QMARK_.call(null,inst_11696);var state_11730__$1 = state_11730;if(inst_11698)
{var statearr_11761_11792 = state_11730__$1;(statearr_11761_11792[(1)] = (17));
} else
{var statearr_11762_11793 = state_11730__$1;(statearr_11762_11793[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (16)))
{var inst_11714 = (state_11730[(2)]);var state_11730__$1 = state_11730;var statearr_11763_11794 = state_11730__$1;(statearr_11763_11794[(2)] = inst_11714);
(statearr_11763_11794[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11731 === (10)))
{var inst_11683 = (state_11730[(8)]);var inst_11685 = (state_11730[(11)]);var inst_11690 = cljs.core._nth.call(null,inst_11683,inst_11685);var state_11730__$1 = state_11730;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11730__$1,(13),out,inst_11690);
} else
{if((state_val_11731 === (18)))
{var inst_11696 = (state_11730[(7)]);var inst_11705 = cljs.core.first.call(null,inst_11696);var state_11730__$1 = state_11730;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11730__$1,(20),out,inst_11705);
} else
{if((state_val_11731 === (8)))
{var inst_11684 = (state_11730[(9)]);var inst_11685 = (state_11730[(11)]);var inst_11687 = (inst_11685 < inst_11684);var inst_11688 = inst_11687;var state_11730__$1 = state_11730;if(cljs.core.truth_(inst_11688))
{var statearr_11764_11795 = state_11730__$1;(statearr_11764_11795[(1)] = (10));
} else
{var statearr_11765_11796 = state_11730__$1;(statearr_11765_11796[(1)] = (11));
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
});})(c__6321__auto__))
;return ((function (switch__6306__auto__,c__6321__auto__){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_11769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11769[(0)] = state_machine__6307__auto__);
(statearr_11769[(1)] = (1));
return statearr_11769;
});
var state_machine__6307__auto____1 = (function (state_11730){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_11730);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e11770){if((e11770 instanceof Object))
{var ex__6310__auto__ = e11770;var statearr_11771_11797 = state_11730;(statearr_11771_11797[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11730);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11798 = state_11730;
state_11730 = G__11798;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_11730){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_11730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto__))
})();var state__6323__auto__ = (function (){var statearr_11772 = f__6322__auto__.call(null);(statearr_11772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto__);
return statearr_11772;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto__))
);
return c__6321__auto__;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6321__auto___11895 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto___11895,out){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto___11895,out){
return (function (state_11870){var state_val_11871 = (state_11870[(1)]);if((state_val_11871 === (7)))
{var inst_11865 = (state_11870[(2)]);var state_11870__$1 = state_11870;var statearr_11872_11896 = state_11870__$1;(statearr_11872_11896[(2)] = inst_11865);
(statearr_11872_11896[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11871 === (1)))
{var inst_11847 = null;var state_11870__$1 = (function (){var statearr_11873 = state_11870;(statearr_11873[(7)] = inst_11847);
return statearr_11873;
})();var statearr_11874_11897 = state_11870__$1;(statearr_11874_11897[(2)] = null);
(statearr_11874_11897[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11871 === (4)))
{var inst_11850 = (state_11870[(8)]);var inst_11850__$1 = (state_11870[(2)]);var inst_11851 = (inst_11850__$1 == null);var inst_11852 = cljs.core.not.call(null,inst_11851);var state_11870__$1 = (function (){var statearr_11875 = state_11870;(statearr_11875[(8)] = inst_11850__$1);
return statearr_11875;
})();if(inst_11852)
{var statearr_11876_11898 = state_11870__$1;(statearr_11876_11898[(1)] = (5));
} else
{var statearr_11877_11899 = state_11870__$1;(statearr_11877_11899[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11871 === (6)))
{var state_11870__$1 = state_11870;var statearr_11878_11900 = state_11870__$1;(statearr_11878_11900[(2)] = null);
(statearr_11878_11900[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11871 === (3)))
{var inst_11867 = (state_11870[(2)]);var inst_11868 = cljs.core.async.close_BANG_.call(null,out);var state_11870__$1 = (function (){var statearr_11879 = state_11870;(statearr_11879[(9)] = inst_11867);
return statearr_11879;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11870__$1,inst_11868);
} else
{if((state_val_11871 === (2)))
{var state_11870__$1 = state_11870;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11870__$1,(4),ch);
} else
{if((state_val_11871 === (11)))
{var inst_11850 = (state_11870[(8)]);var inst_11859 = (state_11870[(2)]);var inst_11847 = inst_11850;var state_11870__$1 = (function (){var statearr_11880 = state_11870;(statearr_11880[(7)] = inst_11847);
(statearr_11880[(10)] = inst_11859);
return statearr_11880;
})();var statearr_11881_11901 = state_11870__$1;(statearr_11881_11901[(2)] = null);
(statearr_11881_11901[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11871 === (9)))
{var inst_11850 = (state_11870[(8)]);var state_11870__$1 = state_11870;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11870__$1,(11),out,inst_11850);
} else
{if((state_val_11871 === (5)))
{var inst_11850 = (state_11870[(8)]);var inst_11847 = (state_11870[(7)]);var inst_11854 = cljs.core._EQ_.call(null,inst_11850,inst_11847);var state_11870__$1 = state_11870;if(inst_11854)
{var statearr_11883_11902 = state_11870__$1;(statearr_11883_11902[(1)] = (8));
} else
{var statearr_11884_11903 = state_11870__$1;(statearr_11884_11903[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11871 === (10)))
{var inst_11862 = (state_11870[(2)]);var state_11870__$1 = state_11870;var statearr_11885_11904 = state_11870__$1;(statearr_11885_11904[(2)] = inst_11862);
(statearr_11885_11904[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11871 === (8)))
{var inst_11847 = (state_11870[(7)]);var tmp11882 = inst_11847;var inst_11847__$1 = tmp11882;var state_11870__$1 = (function (){var statearr_11886 = state_11870;(statearr_11886[(7)] = inst_11847__$1);
return statearr_11886;
})();var statearr_11887_11905 = state_11870__$1;(statearr_11887_11905[(2)] = null);
(statearr_11887_11905[(1)] = (2));
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
});})(c__6321__auto___11895,out))
;return ((function (switch__6306__auto__,c__6321__auto___11895,out){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_11891 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11891[(0)] = state_machine__6307__auto__);
(statearr_11891[(1)] = (1));
return statearr_11891;
});
var state_machine__6307__auto____1 = (function (state_11870){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_11870);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e11892){if((e11892 instanceof Object))
{var ex__6310__auto__ = e11892;var statearr_11893_11906 = state_11870;(statearr_11893_11906[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11870);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11892;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11907 = state_11870;
state_11870 = G__11907;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_11870){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_11870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto___11895,out))
})();var state__6323__auto__ = (function (){var statearr_11894 = f__6322__auto__.call(null);(statearr_11894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto___11895);
return statearr_11894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto___11895,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6321__auto___12042 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto___12042,out){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto___12042,out){
return (function (state_12012){var state_val_12013 = (state_12012[(1)]);if((state_val_12013 === (7)))
{var inst_12008 = (state_12012[(2)]);var state_12012__$1 = state_12012;var statearr_12014_12043 = state_12012__$1;(statearr_12014_12043[(2)] = inst_12008);
(statearr_12014_12043[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12013 === (1)))
{var inst_11975 = (new Array(n));var inst_11976 = inst_11975;var inst_11977 = (0);var state_12012__$1 = (function (){var statearr_12015 = state_12012;(statearr_12015[(7)] = inst_11977);
(statearr_12015[(8)] = inst_11976);
return statearr_12015;
})();var statearr_12016_12044 = state_12012__$1;(statearr_12016_12044[(2)] = null);
(statearr_12016_12044[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12013 === (4)))
{var inst_11980 = (state_12012[(9)]);var inst_11980__$1 = (state_12012[(2)]);var inst_11981 = (inst_11980__$1 == null);var inst_11982 = cljs.core.not.call(null,inst_11981);var state_12012__$1 = (function (){var statearr_12017 = state_12012;(statearr_12017[(9)] = inst_11980__$1);
return statearr_12017;
})();if(inst_11982)
{var statearr_12018_12045 = state_12012__$1;(statearr_12018_12045[(1)] = (5));
} else
{var statearr_12019_12046 = state_12012__$1;(statearr_12019_12046[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12013 === (15)))
{var inst_12002 = (state_12012[(2)]);var state_12012__$1 = state_12012;var statearr_12020_12047 = state_12012__$1;(statearr_12020_12047[(2)] = inst_12002);
(statearr_12020_12047[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12013 === (13)))
{var state_12012__$1 = state_12012;var statearr_12021_12048 = state_12012__$1;(statearr_12021_12048[(2)] = null);
(statearr_12021_12048[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12013 === (6)))
{var inst_11977 = (state_12012[(7)]);var inst_11998 = (inst_11977 > (0));var state_12012__$1 = state_12012;if(cljs.core.truth_(inst_11998))
{var statearr_12022_12049 = state_12012__$1;(statearr_12022_12049[(1)] = (12));
} else
{var statearr_12023_12050 = state_12012__$1;(statearr_12023_12050[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12013 === (3)))
{var inst_12010 = (state_12012[(2)]);var state_12012__$1 = state_12012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12012__$1,inst_12010);
} else
{if((state_val_12013 === (12)))
{var inst_11976 = (state_12012[(8)]);var inst_12000 = cljs.core.vec.call(null,inst_11976);var state_12012__$1 = state_12012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12012__$1,(15),out,inst_12000);
} else
{if((state_val_12013 === (2)))
{var state_12012__$1 = state_12012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12012__$1,(4),ch);
} else
{if((state_val_12013 === (11)))
{var inst_11992 = (state_12012[(2)]);var inst_11993 = (new Array(n));var inst_11976 = inst_11993;var inst_11977 = (0);var state_12012__$1 = (function (){var statearr_12024 = state_12012;(statearr_12024[(10)] = inst_11992);
(statearr_12024[(7)] = inst_11977);
(statearr_12024[(8)] = inst_11976);
return statearr_12024;
})();var statearr_12025_12051 = state_12012__$1;(statearr_12025_12051[(2)] = null);
(statearr_12025_12051[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12013 === (9)))
{var inst_11976 = (state_12012[(8)]);var inst_11990 = cljs.core.vec.call(null,inst_11976);var state_12012__$1 = state_12012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12012__$1,(11),out,inst_11990);
} else
{if((state_val_12013 === (5)))
{var inst_11985 = (state_12012[(11)]);var inst_11980 = (state_12012[(9)]);var inst_11977 = (state_12012[(7)]);var inst_11976 = (state_12012[(8)]);var inst_11984 = (inst_11976[inst_11977] = inst_11980);var inst_11985__$1 = (inst_11977 + (1));var inst_11986 = (inst_11985__$1 < n);var state_12012__$1 = (function (){var statearr_12026 = state_12012;(statearr_12026[(11)] = inst_11985__$1);
(statearr_12026[(12)] = inst_11984);
return statearr_12026;
})();if(cljs.core.truth_(inst_11986))
{var statearr_12027_12052 = state_12012__$1;(statearr_12027_12052[(1)] = (8));
} else
{var statearr_12028_12053 = state_12012__$1;(statearr_12028_12053[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12013 === (14)))
{var inst_12005 = (state_12012[(2)]);var inst_12006 = cljs.core.async.close_BANG_.call(null,out);var state_12012__$1 = (function (){var statearr_12030 = state_12012;(statearr_12030[(13)] = inst_12005);
return statearr_12030;
})();var statearr_12031_12054 = state_12012__$1;(statearr_12031_12054[(2)] = inst_12006);
(statearr_12031_12054[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12013 === (10)))
{var inst_11996 = (state_12012[(2)]);var state_12012__$1 = state_12012;var statearr_12032_12055 = state_12012__$1;(statearr_12032_12055[(2)] = inst_11996);
(statearr_12032_12055[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12013 === (8)))
{var inst_11985 = (state_12012[(11)]);var inst_11976 = (state_12012[(8)]);var tmp12029 = inst_11976;var inst_11976__$1 = tmp12029;var inst_11977 = inst_11985;var state_12012__$1 = (function (){var statearr_12033 = state_12012;(statearr_12033[(7)] = inst_11977);
(statearr_12033[(8)] = inst_11976__$1);
return statearr_12033;
})();var statearr_12034_12056 = state_12012__$1;(statearr_12034_12056[(2)] = null);
(statearr_12034_12056[(1)] = (2));
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
});})(c__6321__auto___12042,out))
;return ((function (switch__6306__auto__,c__6321__auto___12042,out){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_12038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12038[(0)] = state_machine__6307__auto__);
(statearr_12038[(1)] = (1));
return statearr_12038;
});
var state_machine__6307__auto____1 = (function (state_12012){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_12012);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e12039){if((e12039 instanceof Object))
{var ex__6310__auto__ = e12039;var statearr_12040_12057 = state_12012;(statearr_12040_12057[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12012);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12039;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12058 = state_12012;
state_12012 = G__12058;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_12012){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_12012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto___12042,out))
})();var state__6323__auto__ = (function (){var statearr_12041 = f__6322__auto__.call(null);(statearr_12041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto___12042);
return statearr_12041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto___12042,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6321__auto___12201 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6321__auto___12201,out){
return (function (){var f__6322__auto__ = (function (){var switch__6306__auto__ = ((function (c__6321__auto___12201,out){
return (function (state_12171){var state_val_12172 = (state_12171[(1)]);if((state_val_12172 === (7)))
{var inst_12167 = (state_12171[(2)]);var state_12171__$1 = state_12171;var statearr_12173_12202 = state_12171__$1;(statearr_12173_12202[(2)] = inst_12167);
(statearr_12173_12202[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12172 === (1)))
{var inst_12130 = [];var inst_12131 = inst_12130;var inst_12132 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_12171__$1 = (function (){var statearr_12174 = state_12171;(statearr_12174[(7)] = inst_12132);
(statearr_12174[(8)] = inst_12131);
return statearr_12174;
})();var statearr_12175_12203 = state_12171__$1;(statearr_12175_12203[(2)] = null);
(statearr_12175_12203[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12172 === (4)))
{var inst_12135 = (state_12171[(9)]);var inst_12135__$1 = (state_12171[(2)]);var inst_12136 = (inst_12135__$1 == null);var inst_12137 = cljs.core.not.call(null,inst_12136);var state_12171__$1 = (function (){var statearr_12176 = state_12171;(statearr_12176[(9)] = inst_12135__$1);
return statearr_12176;
})();if(inst_12137)
{var statearr_12177_12204 = state_12171__$1;(statearr_12177_12204[(1)] = (5));
} else
{var statearr_12178_12205 = state_12171__$1;(statearr_12178_12205[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12172 === (15)))
{var inst_12161 = (state_12171[(2)]);var state_12171__$1 = state_12171;var statearr_12179_12206 = state_12171__$1;(statearr_12179_12206[(2)] = inst_12161);
(statearr_12179_12206[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12172 === (13)))
{var state_12171__$1 = state_12171;var statearr_12180_12207 = state_12171__$1;(statearr_12180_12207[(2)] = null);
(statearr_12180_12207[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12172 === (6)))
{var inst_12131 = (state_12171[(8)]);var inst_12156 = inst_12131.length;var inst_12157 = (inst_12156 > (0));var state_12171__$1 = state_12171;if(cljs.core.truth_(inst_12157))
{var statearr_12181_12208 = state_12171__$1;(statearr_12181_12208[(1)] = (12));
} else
{var statearr_12182_12209 = state_12171__$1;(statearr_12182_12209[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12172 === (3)))
{var inst_12169 = (state_12171[(2)]);var state_12171__$1 = state_12171;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12171__$1,inst_12169);
} else
{if((state_val_12172 === (12)))
{var inst_12131 = (state_12171[(8)]);var inst_12159 = cljs.core.vec.call(null,inst_12131);var state_12171__$1 = state_12171;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12171__$1,(15),out,inst_12159);
} else
{if((state_val_12172 === (2)))
{var state_12171__$1 = state_12171;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12171__$1,(4),ch);
} else
{if((state_val_12172 === (11)))
{var inst_12135 = (state_12171[(9)]);var inst_12139 = (state_12171[(10)]);var inst_12149 = (state_12171[(2)]);var inst_12150 = [];var inst_12151 = inst_12150.push(inst_12135);var inst_12131 = inst_12150;var inst_12132 = inst_12139;var state_12171__$1 = (function (){var statearr_12183 = state_12171;(statearr_12183[(7)] = inst_12132);
(statearr_12183[(8)] = inst_12131);
(statearr_12183[(11)] = inst_12149);
(statearr_12183[(12)] = inst_12151);
return statearr_12183;
})();var statearr_12184_12210 = state_12171__$1;(statearr_12184_12210[(2)] = null);
(statearr_12184_12210[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12172 === (9)))
{var inst_12131 = (state_12171[(8)]);var inst_12147 = cljs.core.vec.call(null,inst_12131);var state_12171__$1 = state_12171;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12171__$1,(11),out,inst_12147);
} else
{if((state_val_12172 === (5)))
{var inst_12135 = (state_12171[(9)]);var inst_12139 = (state_12171[(10)]);var inst_12132 = (state_12171[(7)]);var inst_12139__$1 = f.call(null,inst_12135);var inst_12140 = cljs.core._EQ_.call(null,inst_12139__$1,inst_12132);var inst_12141 = cljs.core.keyword_identical_QMARK_.call(null,inst_12132,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_12142 = (inst_12140) || (inst_12141);var state_12171__$1 = (function (){var statearr_12185 = state_12171;(statearr_12185[(10)] = inst_12139__$1);
return statearr_12185;
})();if(cljs.core.truth_(inst_12142))
{var statearr_12186_12211 = state_12171__$1;(statearr_12186_12211[(1)] = (8));
} else
{var statearr_12187_12212 = state_12171__$1;(statearr_12187_12212[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12172 === (14)))
{var inst_12164 = (state_12171[(2)]);var inst_12165 = cljs.core.async.close_BANG_.call(null,out);var state_12171__$1 = (function (){var statearr_12189 = state_12171;(statearr_12189[(13)] = inst_12164);
return statearr_12189;
})();var statearr_12190_12213 = state_12171__$1;(statearr_12190_12213[(2)] = inst_12165);
(statearr_12190_12213[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12172 === (10)))
{var inst_12154 = (state_12171[(2)]);var state_12171__$1 = state_12171;var statearr_12191_12214 = state_12171__$1;(statearr_12191_12214[(2)] = inst_12154);
(statearr_12191_12214[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12172 === (8)))
{var inst_12135 = (state_12171[(9)]);var inst_12139 = (state_12171[(10)]);var inst_12131 = (state_12171[(8)]);var inst_12144 = inst_12131.push(inst_12135);var tmp12188 = inst_12131;var inst_12131__$1 = tmp12188;var inst_12132 = inst_12139;var state_12171__$1 = (function (){var statearr_12192 = state_12171;(statearr_12192[(7)] = inst_12132);
(statearr_12192[(14)] = inst_12144);
(statearr_12192[(8)] = inst_12131__$1);
return statearr_12192;
})();var statearr_12193_12215 = state_12171__$1;(statearr_12193_12215[(2)] = null);
(statearr_12193_12215[(1)] = (2));
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
});})(c__6321__auto___12201,out))
;return ((function (switch__6306__auto__,c__6321__auto___12201,out){
return (function() {
var state_machine__6307__auto__ = null;
var state_machine__6307__auto____0 = (function (){var statearr_12197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12197[(0)] = state_machine__6307__auto__);
(statearr_12197[(1)] = (1));
return statearr_12197;
});
var state_machine__6307__auto____1 = (function (state_12171){while(true){
var ret_value__6308__auto__ = (function (){try{while(true){
var result__6309__auto__ = switch__6306__auto__.call(null,state_12171);if(cljs.core.keyword_identical_QMARK_.call(null,result__6309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6309__auto__;
}
break;
}
}catch (e12198){if((e12198 instanceof Object))
{var ex__6310__auto__ = e12198;var statearr_12199_12216 = state_12171;(statearr_12199_12216[(5)] = ex__6310__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12171);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12217 = state_12171;
state_12171 = G__12217;
continue;
}
} else
{return ret_value__6308__auto__;
}
break;
}
});
state_machine__6307__auto__ = function(state_12171){
switch(arguments.length){
case 0:
return state_machine__6307__auto____0.call(this);
case 1:
return state_machine__6307__auto____1.call(this,state_12171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6307__auto____0;
state_machine__6307__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6307__auto____1;
return state_machine__6307__auto__;
})()
;})(switch__6306__auto__,c__6321__auto___12201,out))
})();var state__6323__auto__ = (function (){var statearr_12200 = f__6322__auto__.call(null);(statearr_12200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6321__auto___12201);
return statearr_12200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6323__auto__);
});})(c__6321__auto___12201,out))
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
