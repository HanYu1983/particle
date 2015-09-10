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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12065 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12065 = (function (f,fn_handler,meta12066){
this.f = f;
this.fn_handler = fn_handler;
this.meta12066 = meta12066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12065.cljs$lang$type = true;
cljs.core.async.t12065.cljs$lang$ctorStr = "cljs.core.async/t12065";
cljs.core.async.t12065.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t12065");
});
cljs.core.async.t12065.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12067){var self__ = this;
var _12067__$1 = this;return self__.meta12066;
});
cljs.core.async.t12065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12067,meta12066__$1){var self__ = this;
var _12067__$1 = this;return (new cljs.core.async.t12065(self__.f,self__.fn_handler,meta12066__$1));
});
cljs.core.async.__GT_t12065 = (function __GT_t12065(f__$1,fn_handler__$1,meta12066){return (new cljs.core.async.t12065(f__$1,fn_handler__$1,meta12066));
});
}
return (new cljs.core.async.t12065(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12069 = buff;if(G__12069)
{var bit__4201__auto__ = null;if(cljs.core.truth_((function (){var or__3551__auto__ = bit__4201__auto__;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return G__12069.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12069.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12069);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12069);
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
{var val_12070 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12070);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12070,ret){
return (function (){return fn1.call(null,val_12070);
});})(val_12070,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4407__auto___12071 = n;var x_12072 = (0);while(true){
if((x_12072 < n__4407__auto___12071))
{(a[x_12072] = (0));
{
var G__12073 = (x_12072 + (1));
x_12072 = G__12073;
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
var G__12074 = (i + (1));
i = G__12074;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12078 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12078 = (function (flag,alt_flag,meta12079){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12079 = meta12079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12078.cljs$lang$type = true;
cljs.core.async.t12078.cljs$lang$ctorStr = "cljs.core.async/t12078";
cljs.core.async.t12078.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t12078");
});})(flag))
;
cljs.core.async.t12078.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12078.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12078.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12078.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12080){var self__ = this;
var _12080__$1 = this;return self__.meta12079;
});})(flag))
;
cljs.core.async.t12078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12080,meta12079__$1){var self__ = this;
var _12080__$1 = this;return (new cljs.core.async.t12078(self__.flag,self__.alt_flag,meta12079__$1));
});})(flag))
;
cljs.core.async.__GT_t12078 = ((function (flag){
return (function __GT_t12078(flag__$1,alt_flag__$1,meta12079){return (new cljs.core.async.t12078(flag__$1,alt_flag__$1,meta12079));
});})(flag))
;
}
return (new cljs.core.async.t12078(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12084 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12084 = (function (cb,flag,alt_handler,meta12085){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12085 = meta12085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12084.cljs$lang$type = true;
cljs.core.async.t12084.cljs$lang$ctorStr = "cljs.core.async/t12084";
cljs.core.async.t12084.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t12084");
});
cljs.core.async.t12084.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12084.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12084.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12086){var self__ = this;
var _12086__$1 = this;return self__.meta12085;
});
cljs.core.async.t12084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12086,meta12085__$1){var self__ = this;
var _12086__$1 = this;return (new cljs.core.async.t12084(self__.cb,self__.flag,self__.alt_handler,meta12085__$1));
});
cljs.core.async.__GT_t12084 = (function __GT_t12084(cb__$1,flag__$1,alt_handler__$1,meta12085){return (new cljs.core.async.t12084(cb__$1,flag__$1,alt_handler__$1,meta12085));
});
}
return (new cljs.core.async.t12084(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12087_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12087_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12088_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12088_SHARP_,port], null));
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
var G__12089 = (i + (1));
i = G__12089;
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
var alts_BANG___delegate = function (ports,p__12090){var map__12092 = p__12090;var map__12092__$1 = ((cljs.core.seq_QMARK_.call(null,map__12092))?cljs.core.apply.call(null,cljs.core.hash_map,map__12092):map__12092);var opts = map__12092__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12090 = null;if (arguments.length > 1) {
  p__12090 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12090);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12093){
var ports = cljs.core.first(arglist__12093);
var p__12090 = cljs.core.rest(arglist__12093);
return alts_BANG___delegate(ports,p__12090);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6203__auto___12188 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___12188){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___12188){
return (function (state_12164){var state_val_12165 = (state_12164[(1)]);if((state_val_12165 === (7)))
{var inst_12160 = (state_12164[(2)]);var state_12164__$1 = state_12164;var statearr_12166_12189 = state_12164__$1;(statearr_12166_12189[(2)] = inst_12160);
(statearr_12166_12189[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12165 === (1)))
{var state_12164__$1 = state_12164;var statearr_12167_12190 = state_12164__$1;(statearr_12167_12190[(2)] = null);
(statearr_12167_12190[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12165 === (4)))
{var inst_12143 = (state_12164[(7)]);var inst_12143__$1 = (state_12164[(2)]);var inst_12144 = (inst_12143__$1 == null);var state_12164__$1 = (function (){var statearr_12168 = state_12164;(statearr_12168[(7)] = inst_12143__$1);
return statearr_12168;
})();if(cljs.core.truth_(inst_12144))
{var statearr_12169_12191 = state_12164__$1;(statearr_12169_12191[(1)] = (5));
} else
{var statearr_12170_12192 = state_12164__$1;(statearr_12170_12192[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12165 === (13)))
{var state_12164__$1 = state_12164;var statearr_12171_12193 = state_12164__$1;(statearr_12171_12193[(2)] = null);
(statearr_12171_12193[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12165 === (6)))
{var inst_12143 = (state_12164[(7)]);var state_12164__$1 = state_12164;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12164__$1,(11),to,inst_12143);
} else
{if((state_val_12165 === (3)))
{var inst_12162 = (state_12164[(2)]);var state_12164__$1 = state_12164;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12164__$1,inst_12162);
} else
{if((state_val_12165 === (12)))
{var state_12164__$1 = state_12164;var statearr_12172_12194 = state_12164__$1;(statearr_12172_12194[(2)] = null);
(statearr_12172_12194[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12165 === (2)))
{var state_12164__$1 = state_12164;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12164__$1,(4),from);
} else
{if((state_val_12165 === (11)))
{var inst_12153 = (state_12164[(2)]);var state_12164__$1 = state_12164;if(cljs.core.truth_(inst_12153))
{var statearr_12173_12195 = state_12164__$1;(statearr_12173_12195[(1)] = (12));
} else
{var statearr_12174_12196 = state_12164__$1;(statearr_12174_12196[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12165 === (9)))
{var state_12164__$1 = state_12164;var statearr_12175_12197 = state_12164__$1;(statearr_12175_12197[(2)] = null);
(statearr_12175_12197[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12165 === (5)))
{var state_12164__$1 = state_12164;if(cljs.core.truth_(close_QMARK_))
{var statearr_12176_12198 = state_12164__$1;(statearr_12176_12198[(1)] = (8));
} else
{var statearr_12177_12199 = state_12164__$1;(statearr_12177_12199[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12165 === (14)))
{var inst_12158 = (state_12164[(2)]);var state_12164__$1 = state_12164;var statearr_12178_12200 = state_12164__$1;(statearr_12178_12200[(2)] = inst_12158);
(statearr_12178_12200[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12165 === (10)))
{var inst_12150 = (state_12164[(2)]);var state_12164__$1 = state_12164;var statearr_12179_12201 = state_12164__$1;(statearr_12179_12201[(2)] = inst_12150);
(statearr_12179_12201[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12165 === (8)))
{var inst_12147 = cljs.core.async.close_BANG_.call(null,to);var state_12164__$1 = state_12164;var statearr_12180_12202 = state_12164__$1;(statearr_12180_12202[(2)] = inst_12147);
(statearr_12180_12202[(1)] = (10));
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
});})(c__6203__auto___12188))
;return ((function (switch__6188__auto__,c__6203__auto___12188){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12184 = [null,null,null,null,null,null,null,null];(statearr_12184[(0)] = state_machine__6189__auto__);
(statearr_12184[(1)] = (1));
return statearr_12184;
});
var state_machine__6189__auto____1 = (function (state_12164){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12164);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12185){if((e12185 instanceof Object))
{var ex__6192__auto__ = e12185;var statearr_12186_12203 = state_12164;(statearr_12186_12203[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12164);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12204 = state_12164;
state_12164 = G__12204;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12164){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___12188))
})();var state__6205__auto__ = (function (){var statearr_12187 = f__6204__auto__.call(null);(statearr_12187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___12188);
return statearr_12187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___12188))
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
return (function (p__12387){var vec__12388 = p__12387;var v = cljs.core.nth.call(null,vec__12388,(0),null);var p = cljs.core.nth.call(null,vec__12388,(1),null);var job = vec__12388;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6203__auto___12569 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___12569,res,vec__12388,v,p,job,jobs,results){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___12569,res,vec__12388,v,p,job,jobs,results){
return (function (state_12393){var state_val_12394 = (state_12393[(1)]);if((state_val_12394 === (2)))
{var inst_12390 = (state_12393[(2)]);var inst_12391 = cljs.core.async.close_BANG_.call(null,res);var state_12393__$1 = (function (){var statearr_12395 = state_12393;(statearr_12395[(7)] = inst_12390);
return statearr_12395;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12393__$1,inst_12391);
} else
{if((state_val_12394 === (1)))
{var state_12393__$1 = state_12393;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12393__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6203__auto___12569,res,vec__12388,v,p,job,jobs,results))
;return ((function (switch__6188__auto__,c__6203__auto___12569,res,vec__12388,v,p,job,jobs,results){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12399 = [null,null,null,null,null,null,null,null];(statearr_12399[(0)] = state_machine__6189__auto__);
(statearr_12399[(1)] = (1));
return statearr_12399;
});
var state_machine__6189__auto____1 = (function (state_12393){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12393);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12400){if((e12400 instanceof Object))
{var ex__6192__auto__ = e12400;var statearr_12401_12570 = state_12393;(statearr_12401_12570[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12393);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12571 = state_12393;
state_12393 = G__12571;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12393){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___12569,res,vec__12388,v,p,job,jobs,results))
})();var state__6205__auto__ = (function (){var statearr_12402 = f__6204__auto__.call(null);(statearr_12402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___12569);
return statearr_12402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___12569,res,vec__12388,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12403){var vec__12404 = p__12403;var v = cljs.core.nth.call(null,vec__12404,(0),null);var p = cljs.core.nth.call(null,vec__12404,(1),null);var job = vec__12404;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4407__auto___12572 = n;var __12573 = (0);while(true){
if((__12573 < n__4407__auto___12572))
{var G__12405_12574 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12405_12574) {
case "async":
var c__6203__auto___12576 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12573,c__6203__auto___12576,G__12405_12574,n__4407__auto___12572,jobs,results,process,async){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (__12573,c__6203__auto___12576,G__12405_12574,n__4407__auto___12572,jobs,results,process,async){
return (function (state_12418){var state_val_12419 = (state_12418[(1)]);if((state_val_12419 === (7)))
{var inst_12414 = (state_12418[(2)]);var state_12418__$1 = state_12418;var statearr_12420_12577 = state_12418__$1;(statearr_12420_12577[(2)] = inst_12414);
(statearr_12420_12577[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (6)))
{var state_12418__$1 = state_12418;var statearr_12421_12578 = state_12418__$1;(statearr_12421_12578[(2)] = null);
(statearr_12421_12578[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (5)))
{var state_12418__$1 = state_12418;var statearr_12422_12579 = state_12418__$1;(statearr_12422_12579[(2)] = null);
(statearr_12422_12579[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (4)))
{var inst_12408 = (state_12418[(2)]);var inst_12409 = async.call(null,inst_12408);var state_12418__$1 = state_12418;if(cljs.core.truth_(inst_12409))
{var statearr_12423_12580 = state_12418__$1;(statearr_12423_12580[(1)] = (5));
} else
{var statearr_12424_12581 = state_12418__$1;(statearr_12424_12581[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12419 === (3)))
{var inst_12416 = (state_12418[(2)]);var state_12418__$1 = state_12418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12418__$1,inst_12416);
} else
{if((state_val_12419 === (2)))
{var state_12418__$1 = state_12418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12418__$1,(4),jobs);
} else
{if((state_val_12419 === (1)))
{var state_12418__$1 = state_12418;var statearr_12425_12582 = state_12418__$1;(statearr_12425_12582[(2)] = null);
(statearr_12425_12582[(1)] = (2));
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
});})(__12573,c__6203__auto___12576,G__12405_12574,n__4407__auto___12572,jobs,results,process,async))
;return ((function (__12573,switch__6188__auto__,c__6203__auto___12576,G__12405_12574,n__4407__auto___12572,jobs,results,process,async){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12429 = [null,null,null,null,null,null,null];(statearr_12429[(0)] = state_machine__6189__auto__);
(statearr_12429[(1)] = (1));
return statearr_12429;
});
var state_machine__6189__auto____1 = (function (state_12418){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12418);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12430){if((e12430 instanceof Object))
{var ex__6192__auto__ = e12430;var statearr_12431_12583 = state_12418;(statearr_12431_12583[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12418);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12430;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12584 = state_12418;
state_12418 = G__12584;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12418){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(__12573,switch__6188__auto__,c__6203__auto___12576,G__12405_12574,n__4407__auto___12572,jobs,results,process,async))
})();var state__6205__auto__ = (function (){var statearr_12432 = f__6204__auto__.call(null);(statearr_12432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___12576);
return statearr_12432;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(__12573,c__6203__auto___12576,G__12405_12574,n__4407__auto___12572,jobs,results,process,async))
);

break;
case "compute":
var c__6203__auto___12585 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12573,c__6203__auto___12585,G__12405_12574,n__4407__auto___12572,jobs,results,process,async){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (__12573,c__6203__auto___12585,G__12405_12574,n__4407__auto___12572,jobs,results,process,async){
return (function (state_12445){var state_val_12446 = (state_12445[(1)]);if((state_val_12446 === (7)))
{var inst_12441 = (state_12445[(2)]);var state_12445__$1 = state_12445;var statearr_12447_12586 = state_12445__$1;(statearr_12447_12586[(2)] = inst_12441);
(statearr_12447_12586[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12446 === (6)))
{var state_12445__$1 = state_12445;var statearr_12448_12587 = state_12445__$1;(statearr_12448_12587[(2)] = null);
(statearr_12448_12587[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12446 === (5)))
{var state_12445__$1 = state_12445;var statearr_12449_12588 = state_12445__$1;(statearr_12449_12588[(2)] = null);
(statearr_12449_12588[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12446 === (4)))
{var inst_12435 = (state_12445[(2)]);var inst_12436 = process.call(null,inst_12435);var state_12445__$1 = state_12445;if(cljs.core.truth_(inst_12436))
{var statearr_12450_12589 = state_12445__$1;(statearr_12450_12589[(1)] = (5));
} else
{var statearr_12451_12590 = state_12445__$1;(statearr_12451_12590[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12446 === (3)))
{var inst_12443 = (state_12445[(2)]);var state_12445__$1 = state_12445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12445__$1,inst_12443);
} else
{if((state_val_12446 === (2)))
{var state_12445__$1 = state_12445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12445__$1,(4),jobs);
} else
{if((state_val_12446 === (1)))
{var state_12445__$1 = state_12445;var statearr_12452_12591 = state_12445__$1;(statearr_12452_12591[(2)] = null);
(statearr_12452_12591[(1)] = (2));
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
});})(__12573,c__6203__auto___12585,G__12405_12574,n__4407__auto___12572,jobs,results,process,async))
;return ((function (__12573,switch__6188__auto__,c__6203__auto___12585,G__12405_12574,n__4407__auto___12572,jobs,results,process,async){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12456 = [null,null,null,null,null,null,null];(statearr_12456[(0)] = state_machine__6189__auto__);
(statearr_12456[(1)] = (1));
return statearr_12456;
});
var state_machine__6189__auto____1 = (function (state_12445){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12445);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12457){if((e12457 instanceof Object))
{var ex__6192__auto__ = e12457;var statearr_12458_12592 = state_12445;(statearr_12458_12592[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12445);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12593 = state_12445;
state_12445 = G__12593;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12445){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(__12573,switch__6188__auto__,c__6203__auto___12585,G__12405_12574,n__4407__auto___12572,jobs,results,process,async))
})();var state__6205__auto__ = (function (){var statearr_12459 = f__6204__auto__.call(null);(statearr_12459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___12585);
return statearr_12459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(__12573,c__6203__auto___12585,G__12405_12574,n__4407__auto___12572,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12594 = (__12573 + (1));
__12573 = G__12594;
continue;
}
} else
{}
break;
}
var c__6203__auto___12595 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___12595,jobs,results,process,async){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___12595,jobs,results,process,async){
return (function (state_12480){var state_val_12481 = (state_12480[(1)]);if((state_val_12481 === (9)))
{var inst_12473 = (state_12480[(2)]);var state_12480__$1 = (function (){var statearr_12482 = state_12480;(statearr_12482[(7)] = inst_12473);
return statearr_12482;
})();var statearr_12483_12596 = state_12480__$1;(statearr_12483_12596[(2)] = null);
(statearr_12483_12596[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12481 === (8)))
{var inst_12467 = (state_12480[(8)]);var inst_12471 = (state_12480[(2)]);var state_12480__$1 = (function (){var statearr_12484 = state_12480;(statearr_12484[(9)] = inst_12471);
return statearr_12484;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12480__$1,(9),results,inst_12467);
} else
{if((state_val_12481 === (7)))
{var inst_12476 = (state_12480[(2)]);var state_12480__$1 = state_12480;var statearr_12485_12597 = state_12480__$1;(statearr_12485_12597[(2)] = inst_12476);
(statearr_12485_12597[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12481 === (6)))
{var inst_12467 = (state_12480[(8)]);var inst_12462 = (state_12480[(10)]);var inst_12467__$1 = cljs.core.async.chan.call(null,(1));var inst_12468 = [inst_12462,inst_12467__$1];var inst_12469 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12468,null));var state_12480__$1 = (function (){var statearr_12486 = state_12480;(statearr_12486[(8)] = inst_12467__$1);
return statearr_12486;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12480__$1,(8),jobs,inst_12469);
} else
{if((state_val_12481 === (5)))
{var inst_12465 = cljs.core.async.close_BANG_.call(null,jobs);var state_12480__$1 = state_12480;var statearr_12487_12598 = state_12480__$1;(statearr_12487_12598[(2)] = inst_12465);
(statearr_12487_12598[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12481 === (4)))
{var inst_12462 = (state_12480[(10)]);var inst_12462__$1 = (state_12480[(2)]);var inst_12463 = (inst_12462__$1 == null);var state_12480__$1 = (function (){var statearr_12488 = state_12480;(statearr_12488[(10)] = inst_12462__$1);
return statearr_12488;
})();if(cljs.core.truth_(inst_12463))
{var statearr_12489_12599 = state_12480__$1;(statearr_12489_12599[(1)] = (5));
} else
{var statearr_12490_12600 = state_12480__$1;(statearr_12490_12600[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12481 === (3)))
{var inst_12478 = (state_12480[(2)]);var state_12480__$1 = state_12480;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12480__$1,inst_12478);
} else
{if((state_val_12481 === (2)))
{var state_12480__$1 = state_12480;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12480__$1,(4),from);
} else
{if((state_val_12481 === (1)))
{var state_12480__$1 = state_12480;var statearr_12491_12601 = state_12480__$1;(statearr_12491_12601[(2)] = null);
(statearr_12491_12601[(1)] = (2));
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
});})(c__6203__auto___12595,jobs,results,process,async))
;return ((function (switch__6188__auto__,c__6203__auto___12595,jobs,results,process,async){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12495 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12495[(0)] = state_machine__6189__auto__);
(statearr_12495[(1)] = (1));
return statearr_12495;
});
var state_machine__6189__auto____1 = (function (state_12480){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12480);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12496){if((e12496 instanceof Object))
{var ex__6192__auto__ = e12496;var statearr_12497_12602 = state_12480;(statearr_12497_12602[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12480);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12496;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12603 = state_12480;
state_12480 = G__12603;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12480){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___12595,jobs,results,process,async))
})();var state__6205__auto__ = (function (){var statearr_12498 = f__6204__auto__.call(null);(statearr_12498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___12595);
return statearr_12498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___12595,jobs,results,process,async))
);
var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,jobs,results,process,async){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,jobs,results,process,async){
return (function (state_12536){var state_val_12537 = (state_12536[(1)]);if((state_val_12537 === (7)))
{var inst_12532 = (state_12536[(2)]);var state_12536__$1 = state_12536;var statearr_12538_12604 = state_12536__$1;(statearr_12538_12604[(2)] = inst_12532);
(statearr_12538_12604[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (20)))
{var state_12536__$1 = state_12536;var statearr_12539_12605 = state_12536__$1;(statearr_12539_12605[(2)] = null);
(statearr_12539_12605[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (1)))
{var state_12536__$1 = state_12536;var statearr_12540_12606 = state_12536__$1;(statearr_12540_12606[(2)] = null);
(statearr_12540_12606[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (4)))
{var inst_12501 = (state_12536[(7)]);var inst_12501__$1 = (state_12536[(2)]);var inst_12502 = (inst_12501__$1 == null);var state_12536__$1 = (function (){var statearr_12541 = state_12536;(statearr_12541[(7)] = inst_12501__$1);
return statearr_12541;
})();if(cljs.core.truth_(inst_12502))
{var statearr_12542_12607 = state_12536__$1;(statearr_12542_12607[(1)] = (5));
} else
{var statearr_12543_12608 = state_12536__$1;(statearr_12543_12608[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (15)))
{var inst_12514 = (state_12536[(8)]);var state_12536__$1 = state_12536;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12536__$1,(18),to,inst_12514);
} else
{if((state_val_12537 === (21)))
{var inst_12527 = (state_12536[(2)]);var state_12536__$1 = state_12536;var statearr_12544_12609 = state_12536__$1;(statearr_12544_12609[(2)] = inst_12527);
(statearr_12544_12609[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (13)))
{var inst_12529 = (state_12536[(2)]);var state_12536__$1 = (function (){var statearr_12545 = state_12536;(statearr_12545[(9)] = inst_12529);
return statearr_12545;
})();var statearr_12546_12610 = state_12536__$1;(statearr_12546_12610[(2)] = null);
(statearr_12546_12610[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (6)))
{var inst_12501 = (state_12536[(7)]);var state_12536__$1 = state_12536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12536__$1,(11),inst_12501);
} else
{if((state_val_12537 === (17)))
{var inst_12522 = (state_12536[(2)]);var state_12536__$1 = state_12536;if(cljs.core.truth_(inst_12522))
{var statearr_12547_12611 = state_12536__$1;(statearr_12547_12611[(1)] = (19));
} else
{var statearr_12548_12612 = state_12536__$1;(statearr_12548_12612[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (3)))
{var inst_12534 = (state_12536[(2)]);var state_12536__$1 = state_12536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12536__$1,inst_12534);
} else
{if((state_val_12537 === (12)))
{var inst_12511 = (state_12536[(10)]);var state_12536__$1 = state_12536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12536__$1,(14),inst_12511);
} else
{if((state_val_12537 === (2)))
{var state_12536__$1 = state_12536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12536__$1,(4),results);
} else
{if((state_val_12537 === (19)))
{var state_12536__$1 = state_12536;var statearr_12549_12613 = state_12536__$1;(statearr_12549_12613[(2)] = null);
(statearr_12549_12613[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (11)))
{var inst_12511 = (state_12536[(2)]);var state_12536__$1 = (function (){var statearr_12550 = state_12536;(statearr_12550[(10)] = inst_12511);
return statearr_12550;
})();var statearr_12551_12614 = state_12536__$1;(statearr_12551_12614[(2)] = null);
(statearr_12551_12614[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (9)))
{var state_12536__$1 = state_12536;var statearr_12552_12615 = state_12536__$1;(statearr_12552_12615[(2)] = null);
(statearr_12552_12615[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (5)))
{var state_12536__$1 = state_12536;if(cljs.core.truth_(close_QMARK_))
{var statearr_12553_12616 = state_12536__$1;(statearr_12553_12616[(1)] = (8));
} else
{var statearr_12554_12617 = state_12536__$1;(statearr_12554_12617[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (14)))
{var inst_12514 = (state_12536[(8)]);var inst_12516 = (state_12536[(11)]);var inst_12514__$1 = (state_12536[(2)]);var inst_12515 = (inst_12514__$1 == null);var inst_12516__$1 = cljs.core.not.call(null,inst_12515);var state_12536__$1 = (function (){var statearr_12555 = state_12536;(statearr_12555[(8)] = inst_12514__$1);
(statearr_12555[(11)] = inst_12516__$1);
return statearr_12555;
})();if(inst_12516__$1)
{var statearr_12556_12618 = state_12536__$1;(statearr_12556_12618[(1)] = (15));
} else
{var statearr_12557_12619 = state_12536__$1;(statearr_12557_12619[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (16)))
{var inst_12516 = (state_12536[(11)]);var state_12536__$1 = state_12536;var statearr_12558_12620 = state_12536__$1;(statearr_12558_12620[(2)] = inst_12516);
(statearr_12558_12620[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (10)))
{var inst_12508 = (state_12536[(2)]);var state_12536__$1 = state_12536;var statearr_12559_12621 = state_12536__$1;(statearr_12559_12621[(2)] = inst_12508);
(statearr_12559_12621[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (18)))
{var inst_12519 = (state_12536[(2)]);var state_12536__$1 = state_12536;var statearr_12560_12622 = state_12536__$1;(statearr_12560_12622[(2)] = inst_12519);
(statearr_12560_12622[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12537 === (8)))
{var inst_12505 = cljs.core.async.close_BANG_.call(null,to);var state_12536__$1 = state_12536;var statearr_12561_12623 = state_12536__$1;(statearr_12561_12623[(2)] = inst_12505);
(statearr_12561_12623[(1)] = (10));
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
var state_machine__6189__auto____0 = (function (){var statearr_12565 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12565[(0)] = state_machine__6189__auto__);
(statearr_12565[(1)] = (1));
return statearr_12565;
});
var state_machine__6189__auto____1 = (function (state_12536){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12536);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12566){if((e12566 instanceof Object))
{var ex__6192__auto__ = e12566;var statearr_12567_12624 = state_12536;(statearr_12567_12624[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12536);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12566;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12625 = state_12536;
state_12536 = G__12625;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12536){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,jobs,results,process,async))
})();var state__6205__auto__ = (function (){var statearr_12568 = f__6204__auto__.call(null);(statearr_12568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_12568;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6203__auto___12726 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___12726,tc,fc){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___12726,tc,fc){
return (function (state_12701){var state_val_12702 = (state_12701[(1)]);if((state_val_12702 === (7)))
{var inst_12697 = (state_12701[(2)]);var state_12701__$1 = state_12701;var statearr_12703_12727 = state_12701__$1;(statearr_12703_12727[(2)] = inst_12697);
(statearr_12703_12727[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (1)))
{var state_12701__$1 = state_12701;var statearr_12704_12728 = state_12701__$1;(statearr_12704_12728[(2)] = null);
(statearr_12704_12728[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (4)))
{var inst_12678 = (state_12701[(7)]);var inst_12678__$1 = (state_12701[(2)]);var inst_12679 = (inst_12678__$1 == null);var state_12701__$1 = (function (){var statearr_12705 = state_12701;(statearr_12705[(7)] = inst_12678__$1);
return statearr_12705;
})();if(cljs.core.truth_(inst_12679))
{var statearr_12706_12729 = state_12701__$1;(statearr_12706_12729[(1)] = (5));
} else
{var statearr_12707_12730 = state_12701__$1;(statearr_12707_12730[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (13)))
{var state_12701__$1 = state_12701;var statearr_12708_12731 = state_12701__$1;(statearr_12708_12731[(2)] = null);
(statearr_12708_12731[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (6)))
{var inst_12678 = (state_12701[(7)]);var inst_12684 = p.call(null,inst_12678);var state_12701__$1 = state_12701;if(cljs.core.truth_(inst_12684))
{var statearr_12709_12732 = state_12701__$1;(statearr_12709_12732[(1)] = (9));
} else
{var statearr_12710_12733 = state_12701__$1;(statearr_12710_12733[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (3)))
{var inst_12699 = (state_12701[(2)]);var state_12701__$1 = state_12701;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12701__$1,inst_12699);
} else
{if((state_val_12702 === (12)))
{var state_12701__$1 = state_12701;var statearr_12711_12734 = state_12701__$1;(statearr_12711_12734[(2)] = null);
(statearr_12711_12734[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (2)))
{var state_12701__$1 = state_12701;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12701__$1,(4),ch);
} else
{if((state_val_12702 === (11)))
{var inst_12678 = (state_12701[(7)]);var inst_12688 = (state_12701[(2)]);var state_12701__$1 = state_12701;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12701__$1,(8),inst_12688,inst_12678);
} else
{if((state_val_12702 === (9)))
{var state_12701__$1 = state_12701;var statearr_12712_12735 = state_12701__$1;(statearr_12712_12735[(2)] = tc);
(statearr_12712_12735[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (5)))
{var inst_12681 = cljs.core.async.close_BANG_.call(null,tc);var inst_12682 = cljs.core.async.close_BANG_.call(null,fc);var state_12701__$1 = (function (){var statearr_12713 = state_12701;(statearr_12713[(8)] = inst_12681);
return statearr_12713;
})();var statearr_12714_12736 = state_12701__$1;(statearr_12714_12736[(2)] = inst_12682);
(statearr_12714_12736[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (14)))
{var inst_12695 = (state_12701[(2)]);var state_12701__$1 = state_12701;var statearr_12715_12737 = state_12701__$1;(statearr_12715_12737[(2)] = inst_12695);
(statearr_12715_12737[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (10)))
{var state_12701__$1 = state_12701;var statearr_12716_12738 = state_12701__$1;(statearr_12716_12738[(2)] = fc);
(statearr_12716_12738[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12702 === (8)))
{var inst_12690 = (state_12701[(2)]);var state_12701__$1 = state_12701;if(cljs.core.truth_(inst_12690))
{var statearr_12717_12739 = state_12701__$1;(statearr_12717_12739[(1)] = (12));
} else
{var statearr_12718_12740 = state_12701__$1;(statearr_12718_12740[(1)] = (13));
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
});})(c__6203__auto___12726,tc,fc))
;return ((function (switch__6188__auto__,c__6203__auto___12726,tc,fc){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12722 = [null,null,null,null,null,null,null,null,null];(statearr_12722[(0)] = state_machine__6189__auto__);
(statearr_12722[(1)] = (1));
return statearr_12722;
});
var state_machine__6189__auto____1 = (function (state_12701){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12701);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12723){if((e12723 instanceof Object))
{var ex__6192__auto__ = e12723;var statearr_12724_12741 = state_12701;(statearr_12724_12741[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12701);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12723;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12742 = state_12701;
state_12701 = G__12742;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12701){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___12726,tc,fc))
})();var state__6205__auto__ = (function (){var statearr_12725 = f__6204__auto__.call(null);(statearr_12725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___12726);
return statearr_12725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___12726,tc,fc))
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
return (function (state_12789){var state_val_12790 = (state_12789[(1)]);if((state_val_12790 === (7)))
{var inst_12785 = (state_12789[(2)]);var state_12789__$1 = state_12789;var statearr_12791_12807 = state_12789__$1;(statearr_12791_12807[(2)] = inst_12785);
(statearr_12791_12807[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12790 === (6)))
{var inst_12775 = (state_12789[(7)]);var inst_12778 = (state_12789[(8)]);var inst_12782 = f.call(null,inst_12775,inst_12778);var inst_12775__$1 = inst_12782;var state_12789__$1 = (function (){var statearr_12792 = state_12789;(statearr_12792[(7)] = inst_12775__$1);
return statearr_12792;
})();var statearr_12793_12808 = state_12789__$1;(statearr_12793_12808[(2)] = null);
(statearr_12793_12808[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12790 === (5)))
{var inst_12775 = (state_12789[(7)]);var state_12789__$1 = state_12789;var statearr_12794_12809 = state_12789__$1;(statearr_12794_12809[(2)] = inst_12775);
(statearr_12794_12809[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12790 === (4)))
{var inst_12778 = (state_12789[(8)]);var inst_12778__$1 = (state_12789[(2)]);var inst_12779 = (inst_12778__$1 == null);var state_12789__$1 = (function (){var statearr_12795 = state_12789;(statearr_12795[(8)] = inst_12778__$1);
return statearr_12795;
})();if(cljs.core.truth_(inst_12779))
{var statearr_12796_12810 = state_12789__$1;(statearr_12796_12810[(1)] = (5));
} else
{var statearr_12797_12811 = state_12789__$1;(statearr_12797_12811[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12790 === (3)))
{var inst_12787 = (state_12789[(2)]);var state_12789__$1 = state_12789;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12789__$1,inst_12787);
} else
{if((state_val_12790 === (2)))
{var state_12789__$1 = state_12789;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12789__$1,(4),ch);
} else
{if((state_val_12790 === (1)))
{var inst_12775 = init;var state_12789__$1 = (function (){var statearr_12798 = state_12789;(statearr_12798[(7)] = inst_12775);
return statearr_12798;
})();var statearr_12799_12812 = state_12789__$1;(statearr_12799_12812[(2)] = null);
(statearr_12799_12812[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_12803 = [null,null,null,null,null,null,null,null,null];(statearr_12803[(0)] = state_machine__6189__auto__);
(statearr_12803[(1)] = (1));
return statearr_12803;
});
var state_machine__6189__auto____1 = (function (state_12789){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12789);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12804){if((e12804 instanceof Object))
{var ex__6192__auto__ = e12804;var statearr_12805_12813 = state_12789;(statearr_12805_12813[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12789);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12804;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12814 = state_12789;
state_12789 = G__12814;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12789){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_12806 = f__6204__auto__.call(null);(statearr_12806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_12806;
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
return (function (state_12888){var state_val_12889 = (state_12888[(1)]);if((state_val_12889 === (7)))
{var inst_12870 = (state_12888[(2)]);var state_12888__$1 = state_12888;var statearr_12890_12913 = state_12888__$1;(statearr_12890_12913[(2)] = inst_12870);
(statearr_12890_12913[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12889 === (1)))
{var inst_12864 = cljs.core.seq.call(null,coll);var inst_12865 = inst_12864;var state_12888__$1 = (function (){var statearr_12891 = state_12888;(statearr_12891[(7)] = inst_12865);
return statearr_12891;
})();var statearr_12892_12914 = state_12888__$1;(statearr_12892_12914[(2)] = null);
(statearr_12892_12914[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12889 === (4)))
{var inst_12865 = (state_12888[(7)]);var inst_12868 = cljs.core.first.call(null,inst_12865);var state_12888__$1 = state_12888;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12888__$1,(7),ch,inst_12868);
} else
{if((state_val_12889 === (13)))
{var inst_12882 = (state_12888[(2)]);var state_12888__$1 = state_12888;var statearr_12893_12915 = state_12888__$1;(statearr_12893_12915[(2)] = inst_12882);
(statearr_12893_12915[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12889 === (6)))
{var inst_12873 = (state_12888[(2)]);var state_12888__$1 = state_12888;if(cljs.core.truth_(inst_12873))
{var statearr_12894_12916 = state_12888__$1;(statearr_12894_12916[(1)] = (8));
} else
{var statearr_12895_12917 = state_12888__$1;(statearr_12895_12917[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12889 === (3)))
{var inst_12886 = (state_12888[(2)]);var state_12888__$1 = state_12888;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12888__$1,inst_12886);
} else
{if((state_val_12889 === (12)))
{var state_12888__$1 = state_12888;var statearr_12896_12918 = state_12888__$1;(statearr_12896_12918[(2)] = null);
(statearr_12896_12918[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12889 === (2)))
{var inst_12865 = (state_12888[(7)]);var state_12888__$1 = state_12888;if(cljs.core.truth_(inst_12865))
{var statearr_12897_12919 = state_12888__$1;(statearr_12897_12919[(1)] = (4));
} else
{var statearr_12898_12920 = state_12888__$1;(statearr_12898_12920[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12889 === (11)))
{var inst_12879 = cljs.core.async.close_BANG_.call(null,ch);var state_12888__$1 = state_12888;var statearr_12899_12921 = state_12888__$1;(statearr_12899_12921[(2)] = inst_12879);
(statearr_12899_12921[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12889 === (9)))
{var state_12888__$1 = state_12888;if(cljs.core.truth_(close_QMARK_))
{var statearr_12900_12922 = state_12888__$1;(statearr_12900_12922[(1)] = (11));
} else
{var statearr_12901_12923 = state_12888__$1;(statearr_12901_12923[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12889 === (5)))
{var inst_12865 = (state_12888[(7)]);var state_12888__$1 = state_12888;var statearr_12902_12924 = state_12888__$1;(statearr_12902_12924[(2)] = inst_12865);
(statearr_12902_12924[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12889 === (10)))
{var inst_12884 = (state_12888[(2)]);var state_12888__$1 = state_12888;var statearr_12903_12925 = state_12888__$1;(statearr_12903_12925[(2)] = inst_12884);
(statearr_12903_12925[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12889 === (8)))
{var inst_12865 = (state_12888[(7)]);var inst_12875 = cljs.core.next.call(null,inst_12865);var inst_12865__$1 = inst_12875;var state_12888__$1 = (function (){var statearr_12904 = state_12888;(statearr_12904[(7)] = inst_12865__$1);
return statearr_12904;
})();var statearr_12905_12926 = state_12888__$1;(statearr_12905_12926[(2)] = null);
(statearr_12905_12926[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_12909 = [null,null,null,null,null,null,null,null];(statearr_12909[(0)] = state_machine__6189__auto__);
(statearr_12909[(1)] = (1));
return statearr_12909;
});
var state_machine__6189__auto____1 = (function (state_12888){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12888);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12910){if((e12910 instanceof Object))
{var ex__6192__auto__ = e12910;var statearr_12911_12927 = state_12888;(statearr_12911_12927[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12888);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12910;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12928 = state_12888;
state_12888 = G__12928;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12888){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_12912 = f__6204__auto__.call(null);(statearr_12912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_12912;
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
cljs.core.async.Mux = (function (){var obj12930 = {};return obj12930;
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
cljs.core.async.Mult = (function (){var obj12932 = {};return obj12932;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13154 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13154 = (function (cs,ch,mult,meta13155){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13155 = meta13155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13154.cljs$lang$type = true;
cljs.core.async.t13154.cljs$lang$ctorStr = "cljs.core.async/t13154";
cljs.core.async.t13154.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t13154");
});})(cs))
;
cljs.core.async.t13154.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13154.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13154.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13154.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13154.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13154.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13156){var self__ = this;
var _13156__$1 = this;return self__.meta13155;
});})(cs))
;
cljs.core.async.t13154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13156,meta13155__$1){var self__ = this;
var _13156__$1 = this;return (new cljs.core.async.t13154(self__.cs,self__.ch,self__.mult,meta13155__$1));
});})(cs))
;
cljs.core.async.__GT_t13154 = ((function (cs){
return (function __GT_t13154(cs__$1,ch__$1,mult__$1,meta13155){return (new cljs.core.async.t13154(cs__$1,ch__$1,mult__$1,meta13155));
});})(cs))
;
}
return (new cljs.core.async.t13154(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6203__auto___13375 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___13375,cs,m,dchan,dctr,done){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___13375,cs,m,dchan,dctr,done){
return (function (state_13287){var state_val_13288 = (state_13287[(1)]);if((state_val_13288 === (7)))
{var inst_13283 = (state_13287[(2)]);var state_13287__$1 = state_13287;var statearr_13289_13376 = state_13287__$1;(statearr_13289_13376[(2)] = inst_13283);
(statearr_13289_13376[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (20)))
{var inst_13188 = (state_13287[(7)]);var inst_13198 = cljs.core.first.call(null,inst_13188);var inst_13199 = cljs.core.nth.call(null,inst_13198,(0),null);var inst_13200 = cljs.core.nth.call(null,inst_13198,(1),null);var state_13287__$1 = (function (){var statearr_13290 = state_13287;(statearr_13290[(8)] = inst_13199);
return statearr_13290;
})();if(cljs.core.truth_(inst_13200))
{var statearr_13291_13377 = state_13287__$1;(statearr_13291_13377[(1)] = (22));
} else
{var statearr_13292_13378 = state_13287__$1;(statearr_13292_13378[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (27)))
{var inst_13159 = (state_13287[(9)]);var inst_13235 = (state_13287[(10)]);var inst_13230 = (state_13287[(11)]);var inst_13228 = (state_13287[(12)]);var inst_13235__$1 = cljs.core._nth.call(null,inst_13228,inst_13230);var inst_13236 = cljs.core.async.put_BANG_.call(null,inst_13235__$1,inst_13159,done);var state_13287__$1 = (function (){var statearr_13293 = state_13287;(statearr_13293[(10)] = inst_13235__$1);
return statearr_13293;
})();if(cljs.core.truth_(inst_13236))
{var statearr_13294_13379 = state_13287__$1;(statearr_13294_13379[(1)] = (30));
} else
{var statearr_13295_13380 = state_13287__$1;(statearr_13295_13380[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (1)))
{var state_13287__$1 = state_13287;var statearr_13296_13381 = state_13287__$1;(statearr_13296_13381[(2)] = null);
(statearr_13296_13381[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (24)))
{var inst_13188 = (state_13287[(7)]);var inst_13205 = (state_13287[(2)]);var inst_13206 = cljs.core.next.call(null,inst_13188);var inst_13168 = inst_13206;var inst_13169 = null;var inst_13170 = (0);var inst_13171 = (0);var state_13287__$1 = (function (){var statearr_13297 = state_13287;(statearr_13297[(13)] = inst_13205);
(statearr_13297[(14)] = inst_13169);
(statearr_13297[(15)] = inst_13170);
(statearr_13297[(16)] = inst_13168);
(statearr_13297[(17)] = inst_13171);
return statearr_13297;
})();var statearr_13298_13382 = state_13287__$1;(statearr_13298_13382[(2)] = null);
(statearr_13298_13382[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (39)))
{var state_13287__$1 = state_13287;var statearr_13302_13383 = state_13287__$1;(statearr_13302_13383[(2)] = null);
(statearr_13302_13383[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (4)))
{var inst_13159 = (state_13287[(9)]);var inst_13159__$1 = (state_13287[(2)]);var inst_13160 = (inst_13159__$1 == null);var state_13287__$1 = (function (){var statearr_13303 = state_13287;(statearr_13303[(9)] = inst_13159__$1);
return statearr_13303;
})();if(cljs.core.truth_(inst_13160))
{var statearr_13304_13384 = state_13287__$1;(statearr_13304_13384[(1)] = (5));
} else
{var statearr_13305_13385 = state_13287__$1;(statearr_13305_13385[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (15)))
{var inst_13169 = (state_13287[(14)]);var inst_13170 = (state_13287[(15)]);var inst_13168 = (state_13287[(16)]);var inst_13171 = (state_13287[(17)]);var inst_13184 = (state_13287[(2)]);var inst_13185 = (inst_13171 + (1));var tmp13299 = inst_13169;var tmp13300 = inst_13170;var tmp13301 = inst_13168;var inst_13168__$1 = tmp13301;var inst_13169__$1 = tmp13299;var inst_13170__$1 = tmp13300;var inst_13171__$1 = inst_13185;var state_13287__$1 = (function (){var statearr_13306 = state_13287;(statearr_13306[(18)] = inst_13184);
(statearr_13306[(14)] = inst_13169__$1);
(statearr_13306[(15)] = inst_13170__$1);
(statearr_13306[(16)] = inst_13168__$1);
(statearr_13306[(17)] = inst_13171__$1);
return statearr_13306;
})();var statearr_13307_13386 = state_13287__$1;(statearr_13307_13386[(2)] = null);
(statearr_13307_13386[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (21)))
{var inst_13209 = (state_13287[(2)]);var state_13287__$1 = state_13287;var statearr_13311_13387 = state_13287__$1;(statearr_13311_13387[(2)] = inst_13209);
(statearr_13311_13387[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (31)))
{var inst_13235 = (state_13287[(10)]);var inst_13239 = done.call(null,null);var inst_13240 = cljs.core.async.untap_STAR_.call(null,m,inst_13235);var state_13287__$1 = (function (){var statearr_13312 = state_13287;(statearr_13312[(19)] = inst_13239);
return statearr_13312;
})();var statearr_13313_13388 = state_13287__$1;(statearr_13313_13388[(2)] = inst_13240);
(statearr_13313_13388[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (32)))
{var inst_13229 = (state_13287[(20)]);var inst_13227 = (state_13287[(21)]);var inst_13230 = (state_13287[(11)]);var inst_13228 = (state_13287[(12)]);var inst_13242 = (state_13287[(2)]);var inst_13243 = (inst_13230 + (1));var tmp13308 = inst_13229;var tmp13309 = inst_13227;var tmp13310 = inst_13228;var inst_13227__$1 = tmp13309;var inst_13228__$1 = tmp13310;var inst_13229__$1 = tmp13308;var inst_13230__$1 = inst_13243;var state_13287__$1 = (function (){var statearr_13314 = state_13287;(statearr_13314[(20)] = inst_13229__$1);
(statearr_13314[(21)] = inst_13227__$1);
(statearr_13314[(22)] = inst_13242);
(statearr_13314[(11)] = inst_13230__$1);
(statearr_13314[(12)] = inst_13228__$1);
return statearr_13314;
})();var statearr_13315_13389 = state_13287__$1;(statearr_13315_13389[(2)] = null);
(statearr_13315_13389[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (40)))
{var inst_13255 = (state_13287[(23)]);var inst_13259 = done.call(null,null);var inst_13260 = cljs.core.async.untap_STAR_.call(null,m,inst_13255);var state_13287__$1 = (function (){var statearr_13316 = state_13287;(statearr_13316[(24)] = inst_13259);
return statearr_13316;
})();var statearr_13317_13390 = state_13287__$1;(statearr_13317_13390[(2)] = inst_13260);
(statearr_13317_13390[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (33)))
{var inst_13246 = (state_13287[(25)]);var inst_13248 = cljs.core.chunked_seq_QMARK_.call(null,inst_13246);var state_13287__$1 = state_13287;if(inst_13248)
{var statearr_13318_13391 = state_13287__$1;(statearr_13318_13391[(1)] = (36));
} else
{var statearr_13319_13392 = state_13287__$1;(statearr_13319_13392[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (13)))
{var inst_13178 = (state_13287[(26)]);var inst_13181 = cljs.core.async.close_BANG_.call(null,inst_13178);var state_13287__$1 = state_13287;var statearr_13320_13393 = state_13287__$1;(statearr_13320_13393[(2)] = inst_13181);
(statearr_13320_13393[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (22)))
{var inst_13199 = (state_13287[(8)]);var inst_13202 = cljs.core.async.close_BANG_.call(null,inst_13199);var state_13287__$1 = state_13287;var statearr_13321_13394 = state_13287__$1;(statearr_13321_13394[(2)] = inst_13202);
(statearr_13321_13394[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (36)))
{var inst_13246 = (state_13287[(25)]);var inst_13250 = cljs.core.chunk_first.call(null,inst_13246);var inst_13251 = cljs.core.chunk_rest.call(null,inst_13246);var inst_13252 = cljs.core.count.call(null,inst_13250);var inst_13227 = inst_13251;var inst_13228 = inst_13250;var inst_13229 = inst_13252;var inst_13230 = (0);var state_13287__$1 = (function (){var statearr_13322 = state_13287;(statearr_13322[(20)] = inst_13229);
(statearr_13322[(21)] = inst_13227);
(statearr_13322[(11)] = inst_13230);
(statearr_13322[(12)] = inst_13228);
return statearr_13322;
})();var statearr_13323_13395 = state_13287__$1;(statearr_13323_13395[(2)] = null);
(statearr_13323_13395[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (41)))
{var inst_13246 = (state_13287[(25)]);var inst_13262 = (state_13287[(2)]);var inst_13263 = cljs.core.next.call(null,inst_13246);var inst_13227 = inst_13263;var inst_13228 = null;var inst_13229 = (0);var inst_13230 = (0);var state_13287__$1 = (function (){var statearr_13324 = state_13287;(statearr_13324[(20)] = inst_13229);
(statearr_13324[(21)] = inst_13227);
(statearr_13324[(27)] = inst_13262);
(statearr_13324[(11)] = inst_13230);
(statearr_13324[(12)] = inst_13228);
return statearr_13324;
})();var statearr_13325_13396 = state_13287__$1;(statearr_13325_13396[(2)] = null);
(statearr_13325_13396[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (43)))
{var state_13287__$1 = state_13287;var statearr_13326_13397 = state_13287__$1;(statearr_13326_13397[(2)] = null);
(statearr_13326_13397[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (29)))
{var inst_13271 = (state_13287[(2)]);var state_13287__$1 = state_13287;var statearr_13327_13398 = state_13287__$1;(statearr_13327_13398[(2)] = inst_13271);
(statearr_13327_13398[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (44)))
{var inst_13280 = (state_13287[(2)]);var state_13287__$1 = (function (){var statearr_13328 = state_13287;(statearr_13328[(28)] = inst_13280);
return statearr_13328;
})();var statearr_13329_13399 = state_13287__$1;(statearr_13329_13399[(2)] = null);
(statearr_13329_13399[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (6)))
{var inst_13219 = (state_13287[(29)]);var inst_13218 = cljs.core.deref.call(null,cs);var inst_13219__$1 = cljs.core.keys.call(null,inst_13218);var inst_13220 = cljs.core.count.call(null,inst_13219__$1);var inst_13221 = cljs.core.reset_BANG_.call(null,dctr,inst_13220);var inst_13226 = cljs.core.seq.call(null,inst_13219__$1);var inst_13227 = inst_13226;var inst_13228 = null;var inst_13229 = (0);var inst_13230 = (0);var state_13287__$1 = (function (){var statearr_13330 = state_13287;(statearr_13330[(29)] = inst_13219__$1);
(statearr_13330[(30)] = inst_13221);
(statearr_13330[(20)] = inst_13229);
(statearr_13330[(21)] = inst_13227);
(statearr_13330[(11)] = inst_13230);
(statearr_13330[(12)] = inst_13228);
return statearr_13330;
})();var statearr_13331_13400 = state_13287__$1;(statearr_13331_13400[(2)] = null);
(statearr_13331_13400[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (28)))
{var inst_13246 = (state_13287[(25)]);var inst_13227 = (state_13287[(21)]);var inst_13246__$1 = cljs.core.seq.call(null,inst_13227);var state_13287__$1 = (function (){var statearr_13332 = state_13287;(statearr_13332[(25)] = inst_13246__$1);
return statearr_13332;
})();if(inst_13246__$1)
{var statearr_13333_13401 = state_13287__$1;(statearr_13333_13401[(1)] = (33));
} else
{var statearr_13334_13402 = state_13287__$1;(statearr_13334_13402[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (25)))
{var inst_13229 = (state_13287[(20)]);var inst_13230 = (state_13287[(11)]);var inst_13232 = (inst_13230 < inst_13229);var inst_13233 = inst_13232;var state_13287__$1 = state_13287;if(cljs.core.truth_(inst_13233))
{var statearr_13335_13403 = state_13287__$1;(statearr_13335_13403[(1)] = (27));
} else
{var statearr_13336_13404 = state_13287__$1;(statearr_13336_13404[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (34)))
{var state_13287__$1 = state_13287;var statearr_13337_13405 = state_13287__$1;(statearr_13337_13405[(2)] = null);
(statearr_13337_13405[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (17)))
{var state_13287__$1 = state_13287;var statearr_13338_13406 = state_13287__$1;(statearr_13338_13406[(2)] = null);
(statearr_13338_13406[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (3)))
{var inst_13285 = (state_13287[(2)]);var state_13287__$1 = state_13287;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13287__$1,inst_13285);
} else
{if((state_val_13288 === (12)))
{var inst_13214 = (state_13287[(2)]);var state_13287__$1 = state_13287;var statearr_13339_13407 = state_13287__$1;(statearr_13339_13407[(2)] = inst_13214);
(statearr_13339_13407[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (2)))
{var state_13287__$1 = state_13287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13287__$1,(4),ch);
} else
{if((state_val_13288 === (23)))
{var state_13287__$1 = state_13287;var statearr_13340_13408 = state_13287__$1;(statearr_13340_13408[(2)] = null);
(statearr_13340_13408[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (35)))
{var inst_13269 = (state_13287[(2)]);var state_13287__$1 = state_13287;var statearr_13341_13409 = state_13287__$1;(statearr_13341_13409[(2)] = inst_13269);
(statearr_13341_13409[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (19)))
{var inst_13188 = (state_13287[(7)]);var inst_13192 = cljs.core.chunk_first.call(null,inst_13188);var inst_13193 = cljs.core.chunk_rest.call(null,inst_13188);var inst_13194 = cljs.core.count.call(null,inst_13192);var inst_13168 = inst_13193;var inst_13169 = inst_13192;var inst_13170 = inst_13194;var inst_13171 = (0);var state_13287__$1 = (function (){var statearr_13342 = state_13287;(statearr_13342[(14)] = inst_13169);
(statearr_13342[(15)] = inst_13170);
(statearr_13342[(16)] = inst_13168);
(statearr_13342[(17)] = inst_13171);
return statearr_13342;
})();var statearr_13343_13410 = state_13287__$1;(statearr_13343_13410[(2)] = null);
(statearr_13343_13410[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (11)))
{var inst_13188 = (state_13287[(7)]);var inst_13168 = (state_13287[(16)]);var inst_13188__$1 = cljs.core.seq.call(null,inst_13168);var state_13287__$1 = (function (){var statearr_13344 = state_13287;(statearr_13344[(7)] = inst_13188__$1);
return statearr_13344;
})();if(inst_13188__$1)
{var statearr_13345_13411 = state_13287__$1;(statearr_13345_13411[(1)] = (16));
} else
{var statearr_13346_13412 = state_13287__$1;(statearr_13346_13412[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (9)))
{var inst_13216 = (state_13287[(2)]);var state_13287__$1 = state_13287;var statearr_13347_13413 = state_13287__$1;(statearr_13347_13413[(2)] = inst_13216);
(statearr_13347_13413[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (5)))
{var inst_13166 = cljs.core.deref.call(null,cs);var inst_13167 = cljs.core.seq.call(null,inst_13166);var inst_13168 = inst_13167;var inst_13169 = null;var inst_13170 = (0);var inst_13171 = (0);var state_13287__$1 = (function (){var statearr_13348 = state_13287;(statearr_13348[(14)] = inst_13169);
(statearr_13348[(15)] = inst_13170);
(statearr_13348[(16)] = inst_13168);
(statearr_13348[(17)] = inst_13171);
return statearr_13348;
})();var statearr_13349_13414 = state_13287__$1;(statearr_13349_13414[(2)] = null);
(statearr_13349_13414[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (14)))
{var state_13287__$1 = state_13287;var statearr_13350_13415 = state_13287__$1;(statearr_13350_13415[(2)] = null);
(statearr_13350_13415[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (45)))
{var inst_13277 = (state_13287[(2)]);var state_13287__$1 = state_13287;var statearr_13351_13416 = state_13287__$1;(statearr_13351_13416[(2)] = inst_13277);
(statearr_13351_13416[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (26)))
{var inst_13219 = (state_13287[(29)]);var inst_13273 = (state_13287[(2)]);var inst_13274 = cljs.core.seq.call(null,inst_13219);var state_13287__$1 = (function (){var statearr_13352 = state_13287;(statearr_13352[(31)] = inst_13273);
return statearr_13352;
})();if(inst_13274)
{var statearr_13353_13417 = state_13287__$1;(statearr_13353_13417[(1)] = (42));
} else
{var statearr_13354_13418 = state_13287__$1;(statearr_13354_13418[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (16)))
{var inst_13188 = (state_13287[(7)]);var inst_13190 = cljs.core.chunked_seq_QMARK_.call(null,inst_13188);var state_13287__$1 = state_13287;if(inst_13190)
{var statearr_13355_13419 = state_13287__$1;(statearr_13355_13419[(1)] = (19));
} else
{var statearr_13356_13420 = state_13287__$1;(statearr_13356_13420[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (38)))
{var inst_13266 = (state_13287[(2)]);var state_13287__$1 = state_13287;var statearr_13357_13421 = state_13287__$1;(statearr_13357_13421[(2)] = inst_13266);
(statearr_13357_13421[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (30)))
{var state_13287__$1 = state_13287;var statearr_13358_13422 = state_13287__$1;(statearr_13358_13422[(2)] = null);
(statearr_13358_13422[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (10)))
{var inst_13169 = (state_13287[(14)]);var inst_13171 = (state_13287[(17)]);var inst_13177 = cljs.core._nth.call(null,inst_13169,inst_13171);var inst_13178 = cljs.core.nth.call(null,inst_13177,(0),null);var inst_13179 = cljs.core.nth.call(null,inst_13177,(1),null);var state_13287__$1 = (function (){var statearr_13359 = state_13287;(statearr_13359[(26)] = inst_13178);
return statearr_13359;
})();if(cljs.core.truth_(inst_13179))
{var statearr_13360_13423 = state_13287__$1;(statearr_13360_13423[(1)] = (13));
} else
{var statearr_13361_13424 = state_13287__$1;(statearr_13361_13424[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (18)))
{var inst_13212 = (state_13287[(2)]);var state_13287__$1 = state_13287;var statearr_13362_13425 = state_13287__$1;(statearr_13362_13425[(2)] = inst_13212);
(statearr_13362_13425[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (42)))
{var state_13287__$1 = state_13287;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13287__$1,(45),dchan);
} else
{if((state_val_13288 === (37)))
{var inst_13159 = (state_13287[(9)]);var inst_13246 = (state_13287[(25)]);var inst_13255 = (state_13287[(23)]);var inst_13255__$1 = cljs.core.first.call(null,inst_13246);var inst_13256 = cljs.core.async.put_BANG_.call(null,inst_13255__$1,inst_13159,done);var state_13287__$1 = (function (){var statearr_13363 = state_13287;(statearr_13363[(23)] = inst_13255__$1);
return statearr_13363;
})();if(cljs.core.truth_(inst_13256))
{var statearr_13364_13426 = state_13287__$1;(statearr_13364_13426[(1)] = (39));
} else
{var statearr_13365_13427 = state_13287__$1;(statearr_13365_13427[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13288 === (8)))
{var inst_13170 = (state_13287[(15)]);var inst_13171 = (state_13287[(17)]);var inst_13173 = (inst_13171 < inst_13170);var inst_13174 = inst_13173;var state_13287__$1 = state_13287;if(cljs.core.truth_(inst_13174))
{var statearr_13366_13428 = state_13287__$1;(statearr_13366_13428[(1)] = (10));
} else
{var statearr_13367_13429 = state_13287__$1;(statearr_13367_13429[(1)] = (11));
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
});})(c__6203__auto___13375,cs,m,dchan,dctr,done))
;return ((function (switch__6188__auto__,c__6203__auto___13375,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_13371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13371[(0)] = state_machine__6189__auto__);
(statearr_13371[(1)] = (1));
return statearr_13371;
});
var state_machine__6189__auto____1 = (function (state_13287){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13287);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13372){if((e13372 instanceof Object))
{var ex__6192__auto__ = e13372;var statearr_13373_13430 = state_13287;(statearr_13373_13430[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13287);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13372;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13431 = state_13287;
state_13287 = G__13431;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13287){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___13375,cs,m,dchan,dctr,done))
})();var state__6205__auto__ = (function (){var statearr_13374 = f__6204__auto__.call(null);(statearr_13374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___13375);
return statearr_13374;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___13375,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj13433 = {};return obj13433;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13434){var map__13439 = p__13434;var map__13439__$1 = ((cljs.core.seq_QMARK_.call(null,map__13439))?cljs.core.apply.call(null,cljs.core.hash_map,map__13439):map__13439);var opts = map__13439__$1;var statearr_13440_13443 = state;(statearr_13440_13443[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13439,map__13439__$1,opts){
return (function (val){var statearr_13441_13444 = state;(statearr_13441_13444[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13439,map__13439__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_13442_13445 = state;(statearr_13442_13445[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13434 = null;if (arguments.length > 3) {
  p__13434 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13434);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13446){
var state = cljs.core.first(arglist__13446);
arglist__13446 = cljs.core.next(arglist__13446);
var cont_block = cljs.core.first(arglist__13446);
arglist__13446 = cljs.core.next(arglist__13446);
var ports = cljs.core.first(arglist__13446);
var p__13434 = cljs.core.rest(arglist__13446);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13434);
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
;var m = (function (){if(typeof cljs.core.async.t13566 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13566 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13567){
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
this.meta13567 = meta13567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13566.cljs$lang$type = true;
cljs.core.async.t13566.cljs$lang$ctorStr = "cljs.core.async/t13566";
cljs.core.async.t13566.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t13566");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13566.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13566.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13566.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13566.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13566.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13566.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13566.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13566.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13568){var self__ = this;
var _13568__$1 = this;return self__.meta13567;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13568,meta13567__$1){var self__ = this;
var _13568__$1 = this;return (new cljs.core.async.t13566(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13567__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13566 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13566(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13567){return (new cljs.core.async.t13566(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13567));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13566(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6203__auto___13685 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___13685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___13685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13638){var state_val_13639 = (state_13638[(1)]);if((state_val_13639 === (7)))
{var inst_13582 = (state_13638[(7)]);var inst_13587 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13582);var state_13638__$1 = state_13638;var statearr_13640_13686 = state_13638__$1;(statearr_13640_13686[(2)] = inst_13587);
(statearr_13640_13686[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (20)))
{var inst_13597 = (state_13638[(8)]);var state_13638__$1 = state_13638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13638__$1,(23),out,inst_13597);
} else
{if((state_val_13639 === (1)))
{var inst_13572 = (state_13638[(9)]);var inst_13572__$1 = calc_state.call(null);var inst_13573 = cljs.core.seq_QMARK_.call(null,inst_13572__$1);var state_13638__$1 = (function (){var statearr_13641 = state_13638;(statearr_13641[(9)] = inst_13572__$1);
return statearr_13641;
})();if(inst_13573)
{var statearr_13642_13687 = state_13638__$1;(statearr_13642_13687[(1)] = (2));
} else
{var statearr_13643_13688 = state_13638__$1;(statearr_13643_13688[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (24)))
{var inst_13590 = (state_13638[(10)]);var inst_13582 = inst_13590;var state_13638__$1 = (function (){var statearr_13644 = state_13638;(statearr_13644[(7)] = inst_13582);
return statearr_13644;
})();var statearr_13645_13689 = state_13638__$1;(statearr_13645_13689[(2)] = null);
(statearr_13645_13689[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (4)))
{var inst_13572 = (state_13638[(9)]);var inst_13578 = (state_13638[(2)]);var inst_13579 = cljs.core.get.call(null,inst_13578,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13580 = cljs.core.get.call(null,inst_13578,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13581 = cljs.core.get.call(null,inst_13578,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13582 = inst_13572;var state_13638__$1 = (function (){var statearr_13646 = state_13638;(statearr_13646[(7)] = inst_13582);
(statearr_13646[(11)] = inst_13579);
(statearr_13646[(12)] = inst_13581);
(statearr_13646[(13)] = inst_13580);
return statearr_13646;
})();var statearr_13647_13690 = state_13638__$1;(statearr_13647_13690[(2)] = null);
(statearr_13647_13690[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (15)))
{var state_13638__$1 = state_13638;var statearr_13648_13691 = state_13638__$1;(statearr_13648_13691[(2)] = null);
(statearr_13648_13691[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (21)))
{var inst_13590 = (state_13638[(10)]);var inst_13582 = inst_13590;var state_13638__$1 = (function (){var statearr_13649 = state_13638;(statearr_13649[(7)] = inst_13582);
return statearr_13649;
})();var statearr_13650_13692 = state_13638__$1;(statearr_13650_13692[(2)] = null);
(statearr_13650_13692[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (13)))
{var inst_13634 = (state_13638[(2)]);var state_13638__$1 = state_13638;var statearr_13651_13693 = state_13638__$1;(statearr_13651_13693[(2)] = inst_13634);
(statearr_13651_13693[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (22)))
{var inst_13632 = (state_13638[(2)]);var state_13638__$1 = state_13638;var statearr_13652_13694 = state_13638__$1;(statearr_13652_13694[(2)] = inst_13632);
(statearr_13652_13694[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (6)))
{var inst_13636 = (state_13638[(2)]);var state_13638__$1 = state_13638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13638__$1,inst_13636);
} else
{if((state_val_13639 === (25)))
{var state_13638__$1 = state_13638;var statearr_13653_13695 = state_13638__$1;(statearr_13653_13695[(2)] = null);
(statearr_13653_13695[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (17)))
{var inst_13612 = (state_13638[(14)]);var state_13638__$1 = state_13638;var statearr_13654_13696 = state_13638__$1;(statearr_13654_13696[(2)] = inst_13612);
(statearr_13654_13696[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (3)))
{var inst_13572 = (state_13638[(9)]);var state_13638__$1 = state_13638;var statearr_13655_13697 = state_13638__$1;(statearr_13655_13697[(2)] = inst_13572);
(statearr_13655_13697[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (12)))
{var inst_13593 = (state_13638[(15)]);var inst_13612 = (state_13638[(14)]);var inst_13598 = (state_13638[(16)]);var inst_13612__$1 = inst_13593.call(null,inst_13598);var state_13638__$1 = (function (){var statearr_13656 = state_13638;(statearr_13656[(14)] = inst_13612__$1);
return statearr_13656;
})();if(cljs.core.truth_(inst_13612__$1))
{var statearr_13657_13698 = state_13638__$1;(statearr_13657_13698[(1)] = (17));
} else
{var statearr_13658_13699 = state_13638__$1;(statearr_13658_13699[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (2)))
{var inst_13572 = (state_13638[(9)]);var inst_13575 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13572);var state_13638__$1 = state_13638;var statearr_13659_13700 = state_13638__$1;(statearr_13659_13700[(2)] = inst_13575);
(statearr_13659_13700[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (23)))
{var inst_13623 = (state_13638[(2)]);var state_13638__$1 = state_13638;if(cljs.core.truth_(inst_13623))
{var statearr_13660_13701 = state_13638__$1;(statearr_13660_13701[(1)] = (24));
} else
{var statearr_13661_13702 = state_13638__$1;(statearr_13661_13702[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (19)))
{var inst_13620 = (state_13638[(2)]);var state_13638__$1 = state_13638;if(cljs.core.truth_(inst_13620))
{var statearr_13662_13703 = state_13638__$1;(statearr_13662_13703[(1)] = (20));
} else
{var statearr_13663_13704 = state_13638__$1;(statearr_13663_13704[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (11)))
{var inst_13597 = (state_13638[(8)]);var inst_13603 = (inst_13597 == null);var state_13638__$1 = state_13638;if(cljs.core.truth_(inst_13603))
{var statearr_13664_13705 = state_13638__$1;(statearr_13664_13705[(1)] = (14));
} else
{var statearr_13665_13706 = state_13638__$1;(statearr_13665_13706[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (9)))
{var inst_13590 = (state_13638[(10)]);var inst_13590__$1 = (state_13638[(2)]);var inst_13591 = cljs.core.get.call(null,inst_13590__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13592 = cljs.core.get.call(null,inst_13590__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13593 = cljs.core.get.call(null,inst_13590__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13638__$1 = (function (){var statearr_13666 = state_13638;(statearr_13666[(15)] = inst_13593);
(statearr_13666[(17)] = inst_13592);
(statearr_13666[(10)] = inst_13590__$1);
return statearr_13666;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_13638__$1,(10),inst_13591);
} else
{if((state_val_13639 === (5)))
{var inst_13582 = (state_13638[(7)]);var inst_13585 = cljs.core.seq_QMARK_.call(null,inst_13582);var state_13638__$1 = state_13638;if(inst_13585)
{var statearr_13667_13707 = state_13638__$1;(statearr_13667_13707[(1)] = (7));
} else
{var statearr_13668_13708 = state_13638__$1;(statearr_13668_13708[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (14)))
{var inst_13598 = (state_13638[(16)]);var inst_13605 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13598);var state_13638__$1 = state_13638;var statearr_13669_13709 = state_13638__$1;(statearr_13669_13709[(2)] = inst_13605);
(statearr_13669_13709[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (26)))
{var inst_13628 = (state_13638[(2)]);var state_13638__$1 = state_13638;var statearr_13670_13710 = state_13638__$1;(statearr_13670_13710[(2)] = inst_13628);
(statearr_13670_13710[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (16)))
{var inst_13608 = (state_13638[(2)]);var inst_13609 = calc_state.call(null);var inst_13582 = inst_13609;var state_13638__$1 = (function (){var statearr_13671 = state_13638;(statearr_13671[(7)] = inst_13582);
(statearr_13671[(18)] = inst_13608);
return statearr_13671;
})();var statearr_13672_13711 = state_13638__$1;(statearr_13672_13711[(2)] = null);
(statearr_13672_13711[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (10)))
{var inst_13597 = (state_13638[(8)]);var inst_13598 = (state_13638[(16)]);var inst_13596 = (state_13638[(2)]);var inst_13597__$1 = cljs.core.nth.call(null,inst_13596,(0),null);var inst_13598__$1 = cljs.core.nth.call(null,inst_13596,(1),null);var inst_13599 = (inst_13597__$1 == null);var inst_13600 = cljs.core._EQ_.call(null,inst_13598__$1,change);var inst_13601 = (inst_13599) || (inst_13600);var state_13638__$1 = (function (){var statearr_13673 = state_13638;(statearr_13673[(8)] = inst_13597__$1);
(statearr_13673[(16)] = inst_13598__$1);
return statearr_13673;
})();if(cljs.core.truth_(inst_13601))
{var statearr_13674_13712 = state_13638__$1;(statearr_13674_13712[(1)] = (11));
} else
{var statearr_13675_13713 = state_13638__$1;(statearr_13675_13713[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (18)))
{var inst_13593 = (state_13638[(15)]);var inst_13592 = (state_13638[(17)]);var inst_13598 = (state_13638[(16)]);var inst_13615 = cljs.core.empty_QMARK_.call(null,inst_13593);var inst_13616 = inst_13592.call(null,inst_13598);var inst_13617 = cljs.core.not.call(null,inst_13616);var inst_13618 = (inst_13615) && (inst_13617);var state_13638__$1 = state_13638;var statearr_13676_13714 = state_13638__$1;(statearr_13676_13714[(2)] = inst_13618);
(statearr_13676_13714[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13639 === (8)))
{var inst_13582 = (state_13638[(7)]);var state_13638__$1 = state_13638;var statearr_13677_13715 = state_13638__$1;(statearr_13677_13715[(2)] = inst_13582);
(statearr_13677_13715[(1)] = (9));
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
});})(c__6203__auto___13685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6188__auto__,c__6203__auto___13685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_13681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13681[(0)] = state_machine__6189__auto__);
(statearr_13681[(1)] = (1));
return statearr_13681;
});
var state_machine__6189__auto____1 = (function (state_13638){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13638);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13682){if((e13682 instanceof Object))
{var ex__6192__auto__ = e13682;var statearr_13683_13716 = state_13638;(statearr_13683_13716[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13638);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13717 = state_13638;
state_13638 = G__13717;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13638){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___13685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6205__auto__ = (function (){var statearr_13684 = f__6204__auto__.call(null);(statearr_13684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___13685);
return statearr_13684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___13685,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj13719 = {};return obj13719;
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
return (function (p1__13720_SHARP_){if(cljs.core.truth_(p1__13720_SHARP_.call(null,topic)))
{return p1__13720_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13720_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3551__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13843 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13843 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13844){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13844 = meta13844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13843.cljs$lang$type = true;
cljs.core.async.t13843.cljs$lang$ctorStr = "cljs.core.async/t13843";
cljs.core.async.t13843.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t13843");
});})(mults,ensure_mult))
;
cljs.core.async.t13843.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13843.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13843.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13843.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13843.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13843.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13843.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13845){var self__ = this;
var _13845__$1 = this;return self__.meta13844;
});})(mults,ensure_mult))
;
cljs.core.async.t13843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13845,meta13844__$1){var self__ = this;
var _13845__$1 = this;return (new cljs.core.async.t13843(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13844__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13843 = ((function (mults,ensure_mult){
return (function __GT_t13843(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13844){return (new cljs.core.async.t13843(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13844));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13843(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6203__auto___13965 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___13965,mults,ensure_mult,p){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___13965,mults,ensure_mult,p){
return (function (state_13917){var state_val_13918 = (state_13917[(1)]);if((state_val_13918 === (7)))
{var inst_13913 = (state_13917[(2)]);var state_13917__$1 = state_13917;var statearr_13919_13966 = state_13917__$1;(statearr_13919_13966[(2)] = inst_13913);
(statearr_13919_13966[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (20)))
{var state_13917__$1 = state_13917;var statearr_13920_13967 = state_13917__$1;(statearr_13920_13967[(2)] = null);
(statearr_13920_13967[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (1)))
{var state_13917__$1 = state_13917;var statearr_13921_13968 = state_13917__$1;(statearr_13921_13968[(2)] = null);
(statearr_13921_13968[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (24)))
{var inst_13896 = (state_13917[(7)]);var inst_13905 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13896);var state_13917__$1 = state_13917;var statearr_13922_13969 = state_13917__$1;(statearr_13922_13969[(2)] = inst_13905);
(statearr_13922_13969[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (4)))
{var inst_13848 = (state_13917[(8)]);var inst_13848__$1 = (state_13917[(2)]);var inst_13849 = (inst_13848__$1 == null);var state_13917__$1 = (function (){var statearr_13923 = state_13917;(statearr_13923[(8)] = inst_13848__$1);
return statearr_13923;
})();if(cljs.core.truth_(inst_13849))
{var statearr_13924_13970 = state_13917__$1;(statearr_13924_13970[(1)] = (5));
} else
{var statearr_13925_13971 = state_13917__$1;(statearr_13925_13971[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (15)))
{var inst_13890 = (state_13917[(2)]);var state_13917__$1 = state_13917;var statearr_13926_13972 = state_13917__$1;(statearr_13926_13972[(2)] = inst_13890);
(statearr_13926_13972[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (21)))
{var inst_13910 = (state_13917[(2)]);var state_13917__$1 = (function (){var statearr_13927 = state_13917;(statearr_13927[(9)] = inst_13910);
return statearr_13927;
})();var statearr_13928_13973 = state_13917__$1;(statearr_13928_13973[(2)] = null);
(statearr_13928_13973[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (13)))
{var inst_13872 = (state_13917[(10)]);var inst_13874 = cljs.core.chunked_seq_QMARK_.call(null,inst_13872);var state_13917__$1 = state_13917;if(inst_13874)
{var statearr_13929_13974 = state_13917__$1;(statearr_13929_13974[(1)] = (16));
} else
{var statearr_13930_13975 = state_13917__$1;(statearr_13930_13975[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (22)))
{var inst_13902 = (state_13917[(2)]);var state_13917__$1 = state_13917;if(cljs.core.truth_(inst_13902))
{var statearr_13931_13976 = state_13917__$1;(statearr_13931_13976[(1)] = (23));
} else
{var statearr_13932_13977 = state_13917__$1;(statearr_13932_13977[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (6)))
{var inst_13848 = (state_13917[(8)]);var inst_13896 = (state_13917[(7)]);var inst_13898 = (state_13917[(11)]);var inst_13896__$1 = topic_fn.call(null,inst_13848);var inst_13897 = cljs.core.deref.call(null,mults);var inst_13898__$1 = cljs.core.get.call(null,inst_13897,inst_13896__$1);var state_13917__$1 = (function (){var statearr_13933 = state_13917;(statearr_13933[(7)] = inst_13896__$1);
(statearr_13933[(11)] = inst_13898__$1);
return statearr_13933;
})();if(cljs.core.truth_(inst_13898__$1))
{var statearr_13934_13978 = state_13917__$1;(statearr_13934_13978[(1)] = (19));
} else
{var statearr_13935_13979 = state_13917__$1;(statearr_13935_13979[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (25)))
{var inst_13907 = (state_13917[(2)]);var state_13917__$1 = state_13917;var statearr_13936_13980 = state_13917__$1;(statearr_13936_13980[(2)] = inst_13907);
(statearr_13936_13980[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (17)))
{var inst_13872 = (state_13917[(10)]);var inst_13881 = cljs.core.first.call(null,inst_13872);var inst_13882 = cljs.core.async.muxch_STAR_.call(null,inst_13881);var inst_13883 = cljs.core.async.close_BANG_.call(null,inst_13882);var inst_13884 = cljs.core.next.call(null,inst_13872);var inst_13858 = inst_13884;var inst_13859 = null;var inst_13860 = (0);var inst_13861 = (0);var state_13917__$1 = (function (){var statearr_13937 = state_13917;(statearr_13937[(12)] = inst_13883);
(statearr_13937[(13)] = inst_13859);
(statearr_13937[(14)] = inst_13860);
(statearr_13937[(15)] = inst_13861);
(statearr_13937[(16)] = inst_13858);
return statearr_13937;
})();var statearr_13938_13981 = state_13917__$1;(statearr_13938_13981[(2)] = null);
(statearr_13938_13981[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (3)))
{var inst_13915 = (state_13917[(2)]);var state_13917__$1 = state_13917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13917__$1,inst_13915);
} else
{if((state_val_13918 === (12)))
{var inst_13892 = (state_13917[(2)]);var state_13917__$1 = state_13917;var statearr_13939_13982 = state_13917__$1;(statearr_13939_13982[(2)] = inst_13892);
(statearr_13939_13982[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (2)))
{var state_13917__$1 = state_13917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13917__$1,(4),ch);
} else
{if((state_val_13918 === (23)))
{var state_13917__$1 = state_13917;var statearr_13940_13983 = state_13917__$1;(statearr_13940_13983[(2)] = null);
(statearr_13940_13983[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (19)))
{var inst_13848 = (state_13917[(8)]);var inst_13898 = (state_13917[(11)]);var inst_13900 = cljs.core.async.muxch_STAR_.call(null,inst_13898);var state_13917__$1 = state_13917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13917__$1,(22),inst_13900,inst_13848);
} else
{if((state_val_13918 === (11)))
{var inst_13872 = (state_13917[(10)]);var inst_13858 = (state_13917[(16)]);var inst_13872__$1 = cljs.core.seq.call(null,inst_13858);var state_13917__$1 = (function (){var statearr_13941 = state_13917;(statearr_13941[(10)] = inst_13872__$1);
return statearr_13941;
})();if(inst_13872__$1)
{var statearr_13942_13984 = state_13917__$1;(statearr_13942_13984[(1)] = (13));
} else
{var statearr_13943_13985 = state_13917__$1;(statearr_13943_13985[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (9)))
{var inst_13894 = (state_13917[(2)]);var state_13917__$1 = state_13917;var statearr_13944_13986 = state_13917__$1;(statearr_13944_13986[(2)] = inst_13894);
(statearr_13944_13986[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (5)))
{var inst_13855 = cljs.core.deref.call(null,mults);var inst_13856 = cljs.core.vals.call(null,inst_13855);var inst_13857 = cljs.core.seq.call(null,inst_13856);var inst_13858 = inst_13857;var inst_13859 = null;var inst_13860 = (0);var inst_13861 = (0);var state_13917__$1 = (function (){var statearr_13945 = state_13917;(statearr_13945[(13)] = inst_13859);
(statearr_13945[(14)] = inst_13860);
(statearr_13945[(15)] = inst_13861);
(statearr_13945[(16)] = inst_13858);
return statearr_13945;
})();var statearr_13946_13987 = state_13917__$1;(statearr_13946_13987[(2)] = null);
(statearr_13946_13987[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (14)))
{var state_13917__$1 = state_13917;var statearr_13950_13988 = state_13917__$1;(statearr_13950_13988[(2)] = null);
(statearr_13950_13988[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (16)))
{var inst_13872 = (state_13917[(10)]);var inst_13876 = cljs.core.chunk_first.call(null,inst_13872);var inst_13877 = cljs.core.chunk_rest.call(null,inst_13872);var inst_13878 = cljs.core.count.call(null,inst_13876);var inst_13858 = inst_13877;var inst_13859 = inst_13876;var inst_13860 = inst_13878;var inst_13861 = (0);var state_13917__$1 = (function (){var statearr_13951 = state_13917;(statearr_13951[(13)] = inst_13859);
(statearr_13951[(14)] = inst_13860);
(statearr_13951[(15)] = inst_13861);
(statearr_13951[(16)] = inst_13858);
return statearr_13951;
})();var statearr_13952_13989 = state_13917__$1;(statearr_13952_13989[(2)] = null);
(statearr_13952_13989[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (10)))
{var inst_13859 = (state_13917[(13)]);var inst_13860 = (state_13917[(14)]);var inst_13861 = (state_13917[(15)]);var inst_13858 = (state_13917[(16)]);var inst_13866 = cljs.core._nth.call(null,inst_13859,inst_13861);var inst_13867 = cljs.core.async.muxch_STAR_.call(null,inst_13866);var inst_13868 = cljs.core.async.close_BANG_.call(null,inst_13867);var inst_13869 = (inst_13861 + (1));var tmp13947 = inst_13859;var tmp13948 = inst_13860;var tmp13949 = inst_13858;var inst_13858__$1 = tmp13949;var inst_13859__$1 = tmp13947;var inst_13860__$1 = tmp13948;var inst_13861__$1 = inst_13869;var state_13917__$1 = (function (){var statearr_13953 = state_13917;(statearr_13953[(17)] = inst_13868);
(statearr_13953[(13)] = inst_13859__$1);
(statearr_13953[(14)] = inst_13860__$1);
(statearr_13953[(15)] = inst_13861__$1);
(statearr_13953[(16)] = inst_13858__$1);
return statearr_13953;
})();var statearr_13954_13990 = state_13917__$1;(statearr_13954_13990[(2)] = null);
(statearr_13954_13990[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (18)))
{var inst_13887 = (state_13917[(2)]);var state_13917__$1 = state_13917;var statearr_13955_13991 = state_13917__$1;(statearr_13955_13991[(2)] = inst_13887);
(statearr_13955_13991[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (8)))
{var inst_13860 = (state_13917[(14)]);var inst_13861 = (state_13917[(15)]);var inst_13863 = (inst_13861 < inst_13860);var inst_13864 = inst_13863;var state_13917__$1 = state_13917;if(cljs.core.truth_(inst_13864))
{var statearr_13956_13992 = state_13917__$1;(statearr_13956_13992[(1)] = (10));
} else
{var statearr_13957_13993 = state_13917__$1;(statearr_13957_13993[(1)] = (11));
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
});})(c__6203__auto___13965,mults,ensure_mult,p))
;return ((function (switch__6188__auto__,c__6203__auto___13965,mults,ensure_mult,p){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_13961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13961[(0)] = state_machine__6189__auto__);
(statearr_13961[(1)] = (1));
return statearr_13961;
});
var state_machine__6189__auto____1 = (function (state_13917){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13917);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13962){if((e13962 instanceof Object))
{var ex__6192__auto__ = e13962;var statearr_13963_13994 = state_13917;(statearr_13963_13994[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13917);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13962;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13995 = state_13917;
state_13917 = G__13995;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13917){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___13965,mults,ensure_mult,p))
})();var state__6205__auto__ = (function (){var statearr_13964 = f__6204__auto__.call(null);(statearr_13964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___13965);
return statearr_13964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___13965,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6203__auto___14132 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14132,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14132,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14102){var state_val_14103 = (state_14102[(1)]);if((state_val_14103 === (7)))
{var state_14102__$1 = state_14102;var statearr_14104_14133 = state_14102__$1;(statearr_14104_14133[(2)] = null);
(statearr_14104_14133[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14103 === (1)))
{var state_14102__$1 = state_14102;var statearr_14105_14134 = state_14102__$1;(statearr_14105_14134[(2)] = null);
(statearr_14105_14134[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14103 === (4)))
{var inst_14066 = (state_14102[(7)]);var inst_14068 = (inst_14066 < cnt);var state_14102__$1 = state_14102;if(cljs.core.truth_(inst_14068))
{var statearr_14106_14135 = state_14102__$1;(statearr_14106_14135[(1)] = (6));
} else
{var statearr_14107_14136 = state_14102__$1;(statearr_14107_14136[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14103 === (15)))
{var inst_14098 = (state_14102[(2)]);var state_14102__$1 = state_14102;var statearr_14108_14137 = state_14102__$1;(statearr_14108_14137[(2)] = inst_14098);
(statearr_14108_14137[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14103 === (13)))
{var inst_14091 = cljs.core.async.close_BANG_.call(null,out);var state_14102__$1 = state_14102;var statearr_14109_14138 = state_14102__$1;(statearr_14109_14138[(2)] = inst_14091);
(statearr_14109_14138[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14103 === (6)))
{var state_14102__$1 = state_14102;var statearr_14110_14139 = state_14102__$1;(statearr_14110_14139[(2)] = null);
(statearr_14110_14139[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14103 === (3)))
{var inst_14100 = (state_14102[(2)]);var state_14102__$1 = state_14102;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14102__$1,inst_14100);
} else
{if((state_val_14103 === (12)))
{var inst_14088 = (state_14102[(8)]);var inst_14088__$1 = (state_14102[(2)]);var inst_14089 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14088__$1);var state_14102__$1 = (function (){var statearr_14111 = state_14102;(statearr_14111[(8)] = inst_14088__$1);
return statearr_14111;
})();if(cljs.core.truth_(inst_14089))
{var statearr_14112_14140 = state_14102__$1;(statearr_14112_14140[(1)] = (13));
} else
{var statearr_14113_14141 = state_14102__$1;(statearr_14113_14141[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14103 === (2)))
{var inst_14065 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14066 = (0);var state_14102__$1 = (function (){var statearr_14114 = state_14102;(statearr_14114[(7)] = inst_14066);
(statearr_14114[(9)] = inst_14065);
return statearr_14114;
})();var statearr_14115_14142 = state_14102__$1;(statearr_14115_14142[(2)] = null);
(statearr_14115_14142[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14103 === (11)))
{var inst_14066 = (state_14102[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14102,(10),Object,null,(9));var inst_14075 = chs__$1.call(null,inst_14066);var inst_14076 = done.call(null,inst_14066);var inst_14077 = cljs.core.async.take_BANG_.call(null,inst_14075,inst_14076);var state_14102__$1 = state_14102;var statearr_14116_14143 = state_14102__$1;(statearr_14116_14143[(2)] = inst_14077);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14102__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14103 === (9)))
{var inst_14066 = (state_14102[(7)]);var inst_14079 = (state_14102[(2)]);var inst_14080 = (inst_14066 + (1));var inst_14066__$1 = inst_14080;var state_14102__$1 = (function (){var statearr_14117 = state_14102;(statearr_14117[(7)] = inst_14066__$1);
(statearr_14117[(10)] = inst_14079);
return statearr_14117;
})();var statearr_14118_14144 = state_14102__$1;(statearr_14118_14144[(2)] = null);
(statearr_14118_14144[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14103 === (5)))
{var inst_14086 = (state_14102[(2)]);var state_14102__$1 = (function (){var statearr_14119 = state_14102;(statearr_14119[(11)] = inst_14086);
return statearr_14119;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14102__$1,(12),dchan);
} else
{if((state_val_14103 === (14)))
{var inst_14088 = (state_14102[(8)]);var inst_14093 = cljs.core.apply.call(null,f,inst_14088);var state_14102__$1 = state_14102;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14102__$1,(16),out,inst_14093);
} else
{if((state_val_14103 === (16)))
{var inst_14095 = (state_14102[(2)]);var state_14102__$1 = (function (){var statearr_14120 = state_14102;(statearr_14120[(12)] = inst_14095);
return statearr_14120;
})();var statearr_14121_14145 = state_14102__$1;(statearr_14121_14145[(2)] = null);
(statearr_14121_14145[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14103 === (10)))
{var inst_14070 = (state_14102[(2)]);var inst_14071 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14102__$1 = (function (){var statearr_14122 = state_14102;(statearr_14122[(13)] = inst_14070);
return statearr_14122;
})();var statearr_14123_14146 = state_14102__$1;(statearr_14123_14146[(2)] = inst_14071);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14102__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14103 === (8)))
{var inst_14084 = (state_14102[(2)]);var state_14102__$1 = state_14102;var statearr_14124_14147 = state_14102__$1;(statearr_14124_14147[(2)] = inst_14084);
(statearr_14124_14147[(1)] = (5));
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
});})(c__6203__auto___14132,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6188__auto__,c__6203__auto___14132,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14128[(0)] = state_machine__6189__auto__);
(statearr_14128[(1)] = (1));
return statearr_14128;
});
var state_machine__6189__auto____1 = (function (state_14102){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14102);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14129){if((e14129 instanceof Object))
{var ex__6192__auto__ = e14129;var statearr_14130_14148 = state_14102;(statearr_14130_14148[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14102);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14149 = state_14102;
state_14102 = G__14149;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14102){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14132,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6205__auto__ = (function (){var statearr_14131 = f__6204__auto__.call(null);(statearr_14131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14132);
return statearr_14131;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14132,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___14257 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14257,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14257,out){
return (function (state_14233){var state_val_14234 = (state_14233[(1)]);if((state_val_14234 === (7)))
{var inst_14212 = (state_14233[(7)]);var inst_14213 = (state_14233[(8)]);var inst_14212__$1 = (state_14233[(2)]);var inst_14213__$1 = cljs.core.nth.call(null,inst_14212__$1,(0),null);var inst_14214 = cljs.core.nth.call(null,inst_14212__$1,(1),null);var inst_14215 = (inst_14213__$1 == null);var state_14233__$1 = (function (){var statearr_14235 = state_14233;(statearr_14235[(7)] = inst_14212__$1);
(statearr_14235[(9)] = inst_14214);
(statearr_14235[(8)] = inst_14213__$1);
return statearr_14235;
})();if(cljs.core.truth_(inst_14215))
{var statearr_14236_14258 = state_14233__$1;(statearr_14236_14258[(1)] = (8));
} else
{var statearr_14237_14259 = state_14233__$1;(statearr_14237_14259[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14234 === (1)))
{var inst_14204 = cljs.core.vec.call(null,chs);var inst_14205 = inst_14204;var state_14233__$1 = (function (){var statearr_14238 = state_14233;(statearr_14238[(10)] = inst_14205);
return statearr_14238;
})();var statearr_14239_14260 = state_14233__$1;(statearr_14239_14260[(2)] = null);
(statearr_14239_14260[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14234 === (4)))
{var inst_14205 = (state_14233[(10)]);var state_14233__$1 = state_14233;return cljs.core.async.ioc_alts_BANG_.call(null,state_14233__$1,(7),inst_14205);
} else
{if((state_val_14234 === (6)))
{var inst_14229 = (state_14233[(2)]);var state_14233__$1 = state_14233;var statearr_14240_14261 = state_14233__$1;(statearr_14240_14261[(2)] = inst_14229);
(statearr_14240_14261[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14234 === (3)))
{var inst_14231 = (state_14233[(2)]);var state_14233__$1 = state_14233;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14233__$1,inst_14231);
} else
{if((state_val_14234 === (2)))
{var inst_14205 = (state_14233[(10)]);var inst_14207 = cljs.core.count.call(null,inst_14205);var inst_14208 = (inst_14207 > (0));var state_14233__$1 = state_14233;if(cljs.core.truth_(inst_14208))
{var statearr_14242_14262 = state_14233__$1;(statearr_14242_14262[(1)] = (4));
} else
{var statearr_14243_14263 = state_14233__$1;(statearr_14243_14263[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14234 === (11)))
{var inst_14205 = (state_14233[(10)]);var inst_14222 = (state_14233[(2)]);var tmp14241 = inst_14205;var inst_14205__$1 = tmp14241;var state_14233__$1 = (function (){var statearr_14244 = state_14233;(statearr_14244[(11)] = inst_14222);
(statearr_14244[(10)] = inst_14205__$1);
return statearr_14244;
})();var statearr_14245_14264 = state_14233__$1;(statearr_14245_14264[(2)] = null);
(statearr_14245_14264[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14234 === (9)))
{var inst_14213 = (state_14233[(8)]);var state_14233__$1 = state_14233;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14233__$1,(11),out,inst_14213);
} else
{if((state_val_14234 === (5)))
{var inst_14227 = cljs.core.async.close_BANG_.call(null,out);var state_14233__$1 = state_14233;var statearr_14246_14265 = state_14233__$1;(statearr_14246_14265[(2)] = inst_14227);
(statearr_14246_14265[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14234 === (10)))
{var inst_14225 = (state_14233[(2)]);var state_14233__$1 = state_14233;var statearr_14247_14266 = state_14233__$1;(statearr_14247_14266[(2)] = inst_14225);
(statearr_14247_14266[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14234 === (8)))
{var inst_14212 = (state_14233[(7)]);var inst_14205 = (state_14233[(10)]);var inst_14214 = (state_14233[(9)]);var inst_14213 = (state_14233[(8)]);var inst_14217 = (function (){var c = inst_14214;var v = inst_14213;var vec__14210 = inst_14212;var cs = inst_14205;return ((function (c,v,vec__14210,cs,inst_14212,inst_14205,inst_14214,inst_14213,state_val_14234,c__6203__auto___14257,out){
return (function (p1__14150_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14150_SHARP_);
});
;})(c,v,vec__14210,cs,inst_14212,inst_14205,inst_14214,inst_14213,state_val_14234,c__6203__auto___14257,out))
})();var inst_14218 = cljs.core.filterv.call(null,inst_14217,inst_14205);var inst_14205__$1 = inst_14218;var state_14233__$1 = (function (){var statearr_14248 = state_14233;(statearr_14248[(10)] = inst_14205__$1);
return statearr_14248;
})();var statearr_14249_14267 = state_14233__$1;(statearr_14249_14267[(2)] = null);
(statearr_14249_14267[(1)] = (2));
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
});})(c__6203__auto___14257,out))
;return ((function (switch__6188__auto__,c__6203__auto___14257,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14253 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14253[(0)] = state_machine__6189__auto__);
(statearr_14253[(1)] = (1));
return statearr_14253;
});
var state_machine__6189__auto____1 = (function (state_14233){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14233);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14254){if((e14254 instanceof Object))
{var ex__6192__auto__ = e14254;var statearr_14255_14268 = state_14233;(statearr_14255_14268[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14233);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14269 = state_14233;
state_14233 = G__14269;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14233){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14257,out))
})();var state__6205__auto__ = (function (){var statearr_14256 = f__6204__auto__.call(null);(statearr_14256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14257);
return statearr_14256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14257,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___14362 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14362,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14362,out){
return (function (state_14339){var state_val_14340 = (state_14339[(1)]);if((state_val_14340 === (7)))
{var inst_14321 = (state_14339[(7)]);var inst_14321__$1 = (state_14339[(2)]);var inst_14322 = (inst_14321__$1 == null);var inst_14323 = cljs.core.not.call(null,inst_14322);var state_14339__$1 = (function (){var statearr_14341 = state_14339;(statearr_14341[(7)] = inst_14321__$1);
return statearr_14341;
})();if(inst_14323)
{var statearr_14342_14363 = state_14339__$1;(statearr_14342_14363[(1)] = (8));
} else
{var statearr_14343_14364 = state_14339__$1;(statearr_14343_14364[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14340 === (1)))
{var inst_14316 = (0);var state_14339__$1 = (function (){var statearr_14344 = state_14339;(statearr_14344[(8)] = inst_14316);
return statearr_14344;
})();var statearr_14345_14365 = state_14339__$1;(statearr_14345_14365[(2)] = null);
(statearr_14345_14365[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14340 === (4)))
{var state_14339__$1 = state_14339;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14339__$1,(7),ch);
} else
{if((state_val_14340 === (6)))
{var inst_14334 = (state_14339[(2)]);var state_14339__$1 = state_14339;var statearr_14346_14366 = state_14339__$1;(statearr_14346_14366[(2)] = inst_14334);
(statearr_14346_14366[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14340 === (3)))
{var inst_14336 = (state_14339[(2)]);var inst_14337 = cljs.core.async.close_BANG_.call(null,out);var state_14339__$1 = (function (){var statearr_14347 = state_14339;(statearr_14347[(9)] = inst_14336);
return statearr_14347;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14339__$1,inst_14337);
} else
{if((state_val_14340 === (2)))
{var inst_14316 = (state_14339[(8)]);var inst_14318 = (inst_14316 < n);var state_14339__$1 = state_14339;if(cljs.core.truth_(inst_14318))
{var statearr_14348_14367 = state_14339__$1;(statearr_14348_14367[(1)] = (4));
} else
{var statearr_14349_14368 = state_14339__$1;(statearr_14349_14368[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14340 === (11)))
{var inst_14316 = (state_14339[(8)]);var inst_14326 = (state_14339[(2)]);var inst_14327 = (inst_14316 + (1));var inst_14316__$1 = inst_14327;var state_14339__$1 = (function (){var statearr_14350 = state_14339;(statearr_14350[(10)] = inst_14326);
(statearr_14350[(8)] = inst_14316__$1);
return statearr_14350;
})();var statearr_14351_14369 = state_14339__$1;(statearr_14351_14369[(2)] = null);
(statearr_14351_14369[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14340 === (9)))
{var state_14339__$1 = state_14339;var statearr_14352_14370 = state_14339__$1;(statearr_14352_14370[(2)] = null);
(statearr_14352_14370[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14340 === (5)))
{var state_14339__$1 = state_14339;var statearr_14353_14371 = state_14339__$1;(statearr_14353_14371[(2)] = null);
(statearr_14353_14371[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14340 === (10)))
{var inst_14331 = (state_14339[(2)]);var state_14339__$1 = state_14339;var statearr_14354_14372 = state_14339__$1;(statearr_14354_14372[(2)] = inst_14331);
(statearr_14354_14372[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14340 === (8)))
{var inst_14321 = (state_14339[(7)]);var state_14339__$1 = state_14339;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14339__$1,(11),out,inst_14321);
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
});})(c__6203__auto___14362,out))
;return ((function (switch__6188__auto__,c__6203__auto___14362,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14358 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14358[(0)] = state_machine__6189__auto__);
(statearr_14358[(1)] = (1));
return statearr_14358;
});
var state_machine__6189__auto____1 = (function (state_14339){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14339);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14359){if((e14359 instanceof Object))
{var ex__6192__auto__ = e14359;var statearr_14360_14373 = state_14339;(statearr_14360_14373[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14339);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14359;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14374 = state_14339;
state_14339 = G__14374;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14339){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14362,out))
})();var state__6205__auto__ = (function (){var statearr_14361 = f__6204__auto__.call(null);(statearr_14361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14362);
return statearr_14361;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14362,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14382 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14382 = (function (ch,f,map_LT_,meta14383){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14383 = meta14383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14382.cljs$lang$type = true;
cljs.core.async.t14382.cljs$lang$ctorStr = "cljs.core.async/t14382";
cljs.core.async.t14382.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t14382");
});
cljs.core.async.t14382.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14382.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14382.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14382.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14385 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14385 = (function (fn1,_,meta14383,ch,f,map_LT_,meta14386){
this.fn1 = fn1;
this._ = _;
this.meta14383 = meta14383;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14386 = meta14386;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14385.cljs$lang$type = true;
cljs.core.async.t14385.cljs$lang$ctorStr = "cljs.core.async/t14385";
cljs.core.async.t14385.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t14385");
});})(___$1))
;
cljs.core.async.t14385.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14385.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14385.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14375_SHARP_){return f1.call(null,(((p1__14375_SHARP_ == null))?null:self__.f.call(null,p1__14375_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14385.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14387){var self__ = this;
var _14387__$1 = this;return self__.meta14386;
});})(___$1))
;
cljs.core.async.t14385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14387,meta14386__$1){var self__ = this;
var _14387__$1 = this;return (new cljs.core.async.t14385(self__.fn1,self__._,self__.meta14383,self__.ch,self__.f,self__.map_LT_,meta14386__$1));
});})(___$1))
;
cljs.core.async.__GT_t14385 = ((function (___$1){
return (function __GT_t14385(fn1__$1,___$2,meta14383__$1,ch__$2,f__$2,map_LT___$2,meta14386){return (new cljs.core.async.t14385(fn1__$1,___$2,meta14383__$1,ch__$2,f__$2,map_LT___$2,meta14386));
});})(___$1))
;
}
return (new cljs.core.async.t14385(fn1,___$1,self__.meta14383,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14382.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14382.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14382.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14384){var self__ = this;
var _14384__$1 = this;return self__.meta14383;
});
cljs.core.async.t14382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14384,meta14383__$1){var self__ = this;
var _14384__$1 = this;return (new cljs.core.async.t14382(self__.ch,self__.f,self__.map_LT_,meta14383__$1));
});
cljs.core.async.__GT_t14382 = (function __GT_t14382(ch__$1,f__$1,map_LT___$1,meta14383){return (new cljs.core.async.t14382(ch__$1,f__$1,map_LT___$1,meta14383));
});
}
return (new cljs.core.async.t14382(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14391 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14391 = (function (ch,f,map_GT_,meta14392){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14392 = meta14392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14391.cljs$lang$type = true;
cljs.core.async.t14391.cljs$lang$ctorStr = "cljs.core.async/t14391";
cljs.core.async.t14391.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t14391");
});
cljs.core.async.t14391.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14391.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14391.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14391.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14391.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14391.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14393){var self__ = this;
var _14393__$1 = this;return self__.meta14392;
});
cljs.core.async.t14391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14393,meta14392__$1){var self__ = this;
var _14393__$1 = this;return (new cljs.core.async.t14391(self__.ch,self__.f,self__.map_GT_,meta14392__$1));
});
cljs.core.async.__GT_t14391 = (function __GT_t14391(ch__$1,f__$1,map_GT___$1,meta14392){return (new cljs.core.async.t14391(ch__$1,f__$1,map_GT___$1,meta14392));
});
}
return (new cljs.core.async.t14391(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14397 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14397 = (function (ch,p,filter_GT_,meta14398){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14398 = meta14398;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14397.cljs$lang$type = true;
cljs.core.async.t14397.cljs$lang$ctorStr = "cljs.core.async/t14397";
cljs.core.async.t14397.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t14397");
});
cljs.core.async.t14397.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14397.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14397.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14397.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14397.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14397.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14397.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14399){var self__ = this;
var _14399__$1 = this;return self__.meta14398;
});
cljs.core.async.t14397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14399,meta14398__$1){var self__ = this;
var _14399__$1 = this;return (new cljs.core.async.t14397(self__.ch,self__.p,self__.filter_GT_,meta14398__$1));
});
cljs.core.async.__GT_t14397 = (function __GT_t14397(ch__$1,p__$1,filter_GT___$1,meta14398){return (new cljs.core.async.t14397(ch__$1,p__$1,filter_GT___$1,meta14398));
});
}
return (new cljs.core.async.t14397(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___14482 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14482,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14482,out){
return (function (state_14461){var state_val_14462 = (state_14461[(1)]);if((state_val_14462 === (7)))
{var inst_14457 = (state_14461[(2)]);var state_14461__$1 = state_14461;var statearr_14463_14483 = state_14461__$1;(statearr_14463_14483[(2)] = inst_14457);
(statearr_14463_14483[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14462 === (1)))
{var state_14461__$1 = state_14461;var statearr_14464_14484 = state_14461__$1;(statearr_14464_14484[(2)] = null);
(statearr_14464_14484[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14462 === (4)))
{var inst_14443 = (state_14461[(7)]);var inst_14443__$1 = (state_14461[(2)]);var inst_14444 = (inst_14443__$1 == null);var state_14461__$1 = (function (){var statearr_14465 = state_14461;(statearr_14465[(7)] = inst_14443__$1);
return statearr_14465;
})();if(cljs.core.truth_(inst_14444))
{var statearr_14466_14485 = state_14461__$1;(statearr_14466_14485[(1)] = (5));
} else
{var statearr_14467_14486 = state_14461__$1;(statearr_14467_14486[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14462 === (6)))
{var inst_14443 = (state_14461[(7)]);var inst_14448 = p.call(null,inst_14443);var state_14461__$1 = state_14461;if(cljs.core.truth_(inst_14448))
{var statearr_14468_14487 = state_14461__$1;(statearr_14468_14487[(1)] = (8));
} else
{var statearr_14469_14488 = state_14461__$1;(statearr_14469_14488[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14462 === (3)))
{var inst_14459 = (state_14461[(2)]);var state_14461__$1 = state_14461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14461__$1,inst_14459);
} else
{if((state_val_14462 === (2)))
{var state_14461__$1 = state_14461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14461__$1,(4),ch);
} else
{if((state_val_14462 === (11)))
{var inst_14451 = (state_14461[(2)]);var state_14461__$1 = state_14461;var statearr_14470_14489 = state_14461__$1;(statearr_14470_14489[(2)] = inst_14451);
(statearr_14470_14489[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14462 === (9)))
{var state_14461__$1 = state_14461;var statearr_14471_14490 = state_14461__$1;(statearr_14471_14490[(2)] = null);
(statearr_14471_14490[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14462 === (5)))
{var inst_14446 = cljs.core.async.close_BANG_.call(null,out);var state_14461__$1 = state_14461;var statearr_14472_14491 = state_14461__$1;(statearr_14472_14491[(2)] = inst_14446);
(statearr_14472_14491[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14462 === (10)))
{var inst_14454 = (state_14461[(2)]);var state_14461__$1 = (function (){var statearr_14473 = state_14461;(statearr_14473[(8)] = inst_14454);
return statearr_14473;
})();var statearr_14474_14492 = state_14461__$1;(statearr_14474_14492[(2)] = null);
(statearr_14474_14492[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14462 === (8)))
{var inst_14443 = (state_14461[(7)]);var state_14461__$1 = state_14461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14461__$1,(11),out,inst_14443);
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
});})(c__6203__auto___14482,out))
;return ((function (switch__6188__auto__,c__6203__auto___14482,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14478 = [null,null,null,null,null,null,null,null,null];(statearr_14478[(0)] = state_machine__6189__auto__);
(statearr_14478[(1)] = (1));
return statearr_14478;
});
var state_machine__6189__auto____1 = (function (state_14461){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14461);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14479){if((e14479 instanceof Object))
{var ex__6192__auto__ = e14479;var statearr_14480_14493 = state_14461;(statearr_14480_14493[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14461);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14479;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14494 = state_14461;
state_14461 = G__14494;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14461){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14482,out))
})();var state__6205__auto__ = (function (){var statearr_14481 = f__6204__auto__.call(null);(statearr_14481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14482);
return statearr_14481;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14482,out))
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
return (function (state_14660){var state_val_14661 = (state_14660[(1)]);if((state_val_14661 === (7)))
{var inst_14656 = (state_14660[(2)]);var state_14660__$1 = state_14660;var statearr_14662_14703 = state_14660__$1;(statearr_14662_14703[(2)] = inst_14656);
(statearr_14662_14703[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (20)))
{var inst_14626 = (state_14660[(7)]);var inst_14637 = (state_14660[(2)]);var inst_14638 = cljs.core.next.call(null,inst_14626);var inst_14612 = inst_14638;var inst_14613 = null;var inst_14614 = (0);var inst_14615 = (0);var state_14660__$1 = (function (){var statearr_14663 = state_14660;(statearr_14663[(8)] = inst_14614);
(statearr_14663[(9)] = inst_14615);
(statearr_14663[(10)] = inst_14637);
(statearr_14663[(11)] = inst_14613);
(statearr_14663[(12)] = inst_14612);
return statearr_14663;
})();var statearr_14664_14704 = state_14660__$1;(statearr_14664_14704[(2)] = null);
(statearr_14664_14704[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (1)))
{var state_14660__$1 = state_14660;var statearr_14665_14705 = state_14660__$1;(statearr_14665_14705[(2)] = null);
(statearr_14665_14705[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (4)))
{var inst_14601 = (state_14660[(13)]);var inst_14601__$1 = (state_14660[(2)]);var inst_14602 = (inst_14601__$1 == null);var state_14660__$1 = (function (){var statearr_14666 = state_14660;(statearr_14666[(13)] = inst_14601__$1);
return statearr_14666;
})();if(cljs.core.truth_(inst_14602))
{var statearr_14667_14706 = state_14660__$1;(statearr_14667_14706[(1)] = (5));
} else
{var statearr_14668_14707 = state_14660__$1;(statearr_14668_14707[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (15)))
{var state_14660__$1 = state_14660;var statearr_14672_14708 = state_14660__$1;(statearr_14672_14708[(2)] = null);
(statearr_14672_14708[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (21)))
{var state_14660__$1 = state_14660;var statearr_14673_14709 = state_14660__$1;(statearr_14673_14709[(2)] = null);
(statearr_14673_14709[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (13)))
{var inst_14614 = (state_14660[(8)]);var inst_14615 = (state_14660[(9)]);var inst_14613 = (state_14660[(11)]);var inst_14612 = (state_14660[(12)]);var inst_14622 = (state_14660[(2)]);var inst_14623 = (inst_14615 + (1));var tmp14669 = inst_14614;var tmp14670 = inst_14613;var tmp14671 = inst_14612;var inst_14612__$1 = tmp14671;var inst_14613__$1 = tmp14670;var inst_14614__$1 = tmp14669;var inst_14615__$1 = inst_14623;var state_14660__$1 = (function (){var statearr_14674 = state_14660;(statearr_14674[(14)] = inst_14622);
(statearr_14674[(8)] = inst_14614__$1);
(statearr_14674[(9)] = inst_14615__$1);
(statearr_14674[(11)] = inst_14613__$1);
(statearr_14674[(12)] = inst_14612__$1);
return statearr_14674;
})();var statearr_14675_14710 = state_14660__$1;(statearr_14675_14710[(2)] = null);
(statearr_14675_14710[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (22)))
{var state_14660__$1 = state_14660;var statearr_14676_14711 = state_14660__$1;(statearr_14676_14711[(2)] = null);
(statearr_14676_14711[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (6)))
{var inst_14601 = (state_14660[(13)]);var inst_14610 = f.call(null,inst_14601);var inst_14611 = cljs.core.seq.call(null,inst_14610);var inst_14612 = inst_14611;var inst_14613 = null;var inst_14614 = (0);var inst_14615 = (0);var state_14660__$1 = (function (){var statearr_14677 = state_14660;(statearr_14677[(8)] = inst_14614);
(statearr_14677[(9)] = inst_14615);
(statearr_14677[(11)] = inst_14613);
(statearr_14677[(12)] = inst_14612);
return statearr_14677;
})();var statearr_14678_14712 = state_14660__$1;(statearr_14678_14712[(2)] = null);
(statearr_14678_14712[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (17)))
{var inst_14626 = (state_14660[(7)]);var inst_14630 = cljs.core.chunk_first.call(null,inst_14626);var inst_14631 = cljs.core.chunk_rest.call(null,inst_14626);var inst_14632 = cljs.core.count.call(null,inst_14630);var inst_14612 = inst_14631;var inst_14613 = inst_14630;var inst_14614 = inst_14632;var inst_14615 = (0);var state_14660__$1 = (function (){var statearr_14679 = state_14660;(statearr_14679[(8)] = inst_14614);
(statearr_14679[(9)] = inst_14615);
(statearr_14679[(11)] = inst_14613);
(statearr_14679[(12)] = inst_14612);
return statearr_14679;
})();var statearr_14680_14713 = state_14660__$1;(statearr_14680_14713[(2)] = null);
(statearr_14680_14713[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (3)))
{var inst_14658 = (state_14660[(2)]);var state_14660__$1 = state_14660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14660__$1,inst_14658);
} else
{if((state_val_14661 === (12)))
{var inst_14646 = (state_14660[(2)]);var state_14660__$1 = state_14660;var statearr_14681_14714 = state_14660__$1;(statearr_14681_14714[(2)] = inst_14646);
(statearr_14681_14714[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (2)))
{var state_14660__$1 = state_14660;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14660__$1,(4),in$);
} else
{if((state_val_14661 === (23)))
{var inst_14654 = (state_14660[(2)]);var state_14660__$1 = state_14660;var statearr_14682_14715 = state_14660__$1;(statearr_14682_14715[(2)] = inst_14654);
(statearr_14682_14715[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (19)))
{var inst_14641 = (state_14660[(2)]);var state_14660__$1 = state_14660;var statearr_14683_14716 = state_14660__$1;(statearr_14683_14716[(2)] = inst_14641);
(statearr_14683_14716[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (11)))
{var inst_14626 = (state_14660[(7)]);var inst_14612 = (state_14660[(12)]);var inst_14626__$1 = cljs.core.seq.call(null,inst_14612);var state_14660__$1 = (function (){var statearr_14684 = state_14660;(statearr_14684[(7)] = inst_14626__$1);
return statearr_14684;
})();if(inst_14626__$1)
{var statearr_14685_14717 = state_14660__$1;(statearr_14685_14717[(1)] = (14));
} else
{var statearr_14686_14718 = state_14660__$1;(statearr_14686_14718[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (9)))
{var inst_14648 = (state_14660[(2)]);var inst_14649 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14660__$1 = (function (){var statearr_14687 = state_14660;(statearr_14687[(15)] = inst_14648);
return statearr_14687;
})();if(cljs.core.truth_(inst_14649))
{var statearr_14688_14719 = state_14660__$1;(statearr_14688_14719[(1)] = (21));
} else
{var statearr_14689_14720 = state_14660__$1;(statearr_14689_14720[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (5)))
{var inst_14604 = cljs.core.async.close_BANG_.call(null,out);var state_14660__$1 = state_14660;var statearr_14690_14721 = state_14660__$1;(statearr_14690_14721[(2)] = inst_14604);
(statearr_14690_14721[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (14)))
{var inst_14626 = (state_14660[(7)]);var inst_14628 = cljs.core.chunked_seq_QMARK_.call(null,inst_14626);var state_14660__$1 = state_14660;if(inst_14628)
{var statearr_14691_14722 = state_14660__$1;(statearr_14691_14722[(1)] = (17));
} else
{var statearr_14692_14723 = state_14660__$1;(statearr_14692_14723[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (16)))
{var inst_14644 = (state_14660[(2)]);var state_14660__$1 = state_14660;var statearr_14693_14724 = state_14660__$1;(statearr_14693_14724[(2)] = inst_14644);
(statearr_14693_14724[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14661 === (10)))
{var inst_14615 = (state_14660[(9)]);var inst_14613 = (state_14660[(11)]);var inst_14620 = cljs.core._nth.call(null,inst_14613,inst_14615);var state_14660__$1 = state_14660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14660__$1,(13),out,inst_14620);
} else
{if((state_val_14661 === (18)))
{var inst_14626 = (state_14660[(7)]);var inst_14635 = cljs.core.first.call(null,inst_14626);var state_14660__$1 = state_14660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14660__$1,(20),out,inst_14635);
} else
{if((state_val_14661 === (8)))
{var inst_14614 = (state_14660[(8)]);var inst_14615 = (state_14660[(9)]);var inst_14617 = (inst_14615 < inst_14614);var inst_14618 = inst_14617;var state_14660__$1 = state_14660;if(cljs.core.truth_(inst_14618))
{var statearr_14694_14725 = state_14660__$1;(statearr_14694_14725[(1)] = (10));
} else
{var statearr_14695_14726 = state_14660__$1;(statearr_14695_14726[(1)] = (11));
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
var state_machine__6189__auto____0 = (function (){var statearr_14699 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14699[(0)] = state_machine__6189__auto__);
(statearr_14699[(1)] = (1));
return statearr_14699;
});
var state_machine__6189__auto____1 = (function (state_14660){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14660);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14700){if((e14700 instanceof Object))
{var ex__6192__auto__ = e14700;var statearr_14701_14727 = state_14660;(statearr_14701_14727[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14660);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14700;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14728 = state_14660;
state_14660 = G__14728;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14660){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_14702 = f__6204__auto__.call(null);(statearr_14702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_14702;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___14825 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14825,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14825,out){
return (function (state_14800){var state_val_14801 = (state_14800[(1)]);if((state_val_14801 === (7)))
{var inst_14795 = (state_14800[(2)]);var state_14800__$1 = state_14800;var statearr_14802_14826 = state_14800__$1;(statearr_14802_14826[(2)] = inst_14795);
(statearr_14802_14826[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (1)))
{var inst_14777 = null;var state_14800__$1 = (function (){var statearr_14803 = state_14800;(statearr_14803[(7)] = inst_14777);
return statearr_14803;
})();var statearr_14804_14827 = state_14800__$1;(statearr_14804_14827[(2)] = null);
(statearr_14804_14827[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (4)))
{var inst_14780 = (state_14800[(8)]);var inst_14780__$1 = (state_14800[(2)]);var inst_14781 = (inst_14780__$1 == null);var inst_14782 = cljs.core.not.call(null,inst_14781);var state_14800__$1 = (function (){var statearr_14805 = state_14800;(statearr_14805[(8)] = inst_14780__$1);
return statearr_14805;
})();if(inst_14782)
{var statearr_14806_14828 = state_14800__$1;(statearr_14806_14828[(1)] = (5));
} else
{var statearr_14807_14829 = state_14800__$1;(statearr_14807_14829[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (6)))
{var state_14800__$1 = state_14800;var statearr_14808_14830 = state_14800__$1;(statearr_14808_14830[(2)] = null);
(statearr_14808_14830[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (3)))
{var inst_14797 = (state_14800[(2)]);var inst_14798 = cljs.core.async.close_BANG_.call(null,out);var state_14800__$1 = (function (){var statearr_14809 = state_14800;(statearr_14809[(9)] = inst_14797);
return statearr_14809;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14800__$1,inst_14798);
} else
{if((state_val_14801 === (2)))
{var state_14800__$1 = state_14800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14800__$1,(4),ch);
} else
{if((state_val_14801 === (11)))
{var inst_14780 = (state_14800[(8)]);var inst_14789 = (state_14800[(2)]);var inst_14777 = inst_14780;var state_14800__$1 = (function (){var statearr_14810 = state_14800;(statearr_14810[(7)] = inst_14777);
(statearr_14810[(10)] = inst_14789);
return statearr_14810;
})();var statearr_14811_14831 = state_14800__$1;(statearr_14811_14831[(2)] = null);
(statearr_14811_14831[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (9)))
{var inst_14780 = (state_14800[(8)]);var state_14800__$1 = state_14800;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14800__$1,(11),out,inst_14780);
} else
{if((state_val_14801 === (5)))
{var inst_14777 = (state_14800[(7)]);var inst_14780 = (state_14800[(8)]);var inst_14784 = cljs.core._EQ_.call(null,inst_14780,inst_14777);var state_14800__$1 = state_14800;if(inst_14784)
{var statearr_14813_14832 = state_14800__$1;(statearr_14813_14832[(1)] = (8));
} else
{var statearr_14814_14833 = state_14800__$1;(statearr_14814_14833[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (10)))
{var inst_14792 = (state_14800[(2)]);var state_14800__$1 = state_14800;var statearr_14815_14834 = state_14800__$1;(statearr_14815_14834[(2)] = inst_14792);
(statearr_14815_14834[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14801 === (8)))
{var inst_14777 = (state_14800[(7)]);var tmp14812 = inst_14777;var inst_14777__$1 = tmp14812;var state_14800__$1 = (function (){var statearr_14816 = state_14800;(statearr_14816[(7)] = inst_14777__$1);
return statearr_14816;
})();var statearr_14817_14835 = state_14800__$1;(statearr_14817_14835[(2)] = null);
(statearr_14817_14835[(1)] = (2));
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
});})(c__6203__auto___14825,out))
;return ((function (switch__6188__auto__,c__6203__auto___14825,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14821 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14821[(0)] = state_machine__6189__auto__);
(statearr_14821[(1)] = (1));
return statearr_14821;
});
var state_machine__6189__auto____1 = (function (state_14800){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14800);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14822){if((e14822 instanceof Object))
{var ex__6192__auto__ = e14822;var statearr_14823_14836 = state_14800;(statearr_14823_14836[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14800);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14822;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14837 = state_14800;
state_14800 = G__14837;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14800){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14825,out))
})();var state__6205__auto__ = (function (){var statearr_14824 = f__6204__auto__.call(null);(statearr_14824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14825);
return statearr_14824;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14825,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___14972 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14972,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14972,out){
return (function (state_14942){var state_val_14943 = (state_14942[(1)]);if((state_val_14943 === (7)))
{var inst_14938 = (state_14942[(2)]);var state_14942__$1 = state_14942;var statearr_14944_14973 = state_14942__$1;(statearr_14944_14973[(2)] = inst_14938);
(statearr_14944_14973[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14943 === (1)))
{var inst_14905 = (new Array(n));var inst_14906 = inst_14905;var inst_14907 = (0);var state_14942__$1 = (function (){var statearr_14945 = state_14942;(statearr_14945[(7)] = inst_14906);
(statearr_14945[(8)] = inst_14907);
return statearr_14945;
})();var statearr_14946_14974 = state_14942__$1;(statearr_14946_14974[(2)] = null);
(statearr_14946_14974[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14943 === (4)))
{var inst_14910 = (state_14942[(9)]);var inst_14910__$1 = (state_14942[(2)]);var inst_14911 = (inst_14910__$1 == null);var inst_14912 = cljs.core.not.call(null,inst_14911);var state_14942__$1 = (function (){var statearr_14947 = state_14942;(statearr_14947[(9)] = inst_14910__$1);
return statearr_14947;
})();if(inst_14912)
{var statearr_14948_14975 = state_14942__$1;(statearr_14948_14975[(1)] = (5));
} else
{var statearr_14949_14976 = state_14942__$1;(statearr_14949_14976[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14943 === (15)))
{var inst_14932 = (state_14942[(2)]);var state_14942__$1 = state_14942;var statearr_14950_14977 = state_14942__$1;(statearr_14950_14977[(2)] = inst_14932);
(statearr_14950_14977[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14943 === (13)))
{var state_14942__$1 = state_14942;var statearr_14951_14978 = state_14942__$1;(statearr_14951_14978[(2)] = null);
(statearr_14951_14978[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14943 === (6)))
{var inst_14907 = (state_14942[(8)]);var inst_14928 = (inst_14907 > (0));var state_14942__$1 = state_14942;if(cljs.core.truth_(inst_14928))
{var statearr_14952_14979 = state_14942__$1;(statearr_14952_14979[(1)] = (12));
} else
{var statearr_14953_14980 = state_14942__$1;(statearr_14953_14980[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14943 === (3)))
{var inst_14940 = (state_14942[(2)]);var state_14942__$1 = state_14942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14942__$1,inst_14940);
} else
{if((state_val_14943 === (12)))
{var inst_14906 = (state_14942[(7)]);var inst_14930 = cljs.core.vec.call(null,inst_14906);var state_14942__$1 = state_14942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14942__$1,(15),out,inst_14930);
} else
{if((state_val_14943 === (2)))
{var state_14942__$1 = state_14942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14942__$1,(4),ch);
} else
{if((state_val_14943 === (11)))
{var inst_14922 = (state_14942[(2)]);var inst_14923 = (new Array(n));var inst_14906 = inst_14923;var inst_14907 = (0);var state_14942__$1 = (function (){var statearr_14954 = state_14942;(statearr_14954[(7)] = inst_14906);
(statearr_14954[(8)] = inst_14907);
(statearr_14954[(10)] = inst_14922);
return statearr_14954;
})();var statearr_14955_14981 = state_14942__$1;(statearr_14955_14981[(2)] = null);
(statearr_14955_14981[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14943 === (9)))
{var inst_14906 = (state_14942[(7)]);var inst_14920 = cljs.core.vec.call(null,inst_14906);var state_14942__$1 = state_14942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14942__$1,(11),out,inst_14920);
} else
{if((state_val_14943 === (5)))
{var inst_14906 = (state_14942[(7)]);var inst_14907 = (state_14942[(8)]);var inst_14915 = (state_14942[(11)]);var inst_14910 = (state_14942[(9)]);var inst_14914 = (inst_14906[inst_14907] = inst_14910);var inst_14915__$1 = (inst_14907 + (1));var inst_14916 = (inst_14915__$1 < n);var state_14942__$1 = (function (){var statearr_14956 = state_14942;(statearr_14956[(11)] = inst_14915__$1);
(statearr_14956[(12)] = inst_14914);
return statearr_14956;
})();if(cljs.core.truth_(inst_14916))
{var statearr_14957_14982 = state_14942__$1;(statearr_14957_14982[(1)] = (8));
} else
{var statearr_14958_14983 = state_14942__$1;(statearr_14958_14983[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14943 === (14)))
{var inst_14935 = (state_14942[(2)]);var inst_14936 = cljs.core.async.close_BANG_.call(null,out);var state_14942__$1 = (function (){var statearr_14960 = state_14942;(statearr_14960[(13)] = inst_14935);
return statearr_14960;
})();var statearr_14961_14984 = state_14942__$1;(statearr_14961_14984[(2)] = inst_14936);
(statearr_14961_14984[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14943 === (10)))
{var inst_14926 = (state_14942[(2)]);var state_14942__$1 = state_14942;var statearr_14962_14985 = state_14942__$1;(statearr_14962_14985[(2)] = inst_14926);
(statearr_14962_14985[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14943 === (8)))
{var inst_14906 = (state_14942[(7)]);var inst_14915 = (state_14942[(11)]);var tmp14959 = inst_14906;var inst_14906__$1 = tmp14959;var inst_14907 = inst_14915;var state_14942__$1 = (function (){var statearr_14963 = state_14942;(statearr_14963[(7)] = inst_14906__$1);
(statearr_14963[(8)] = inst_14907);
return statearr_14963;
})();var statearr_14964_14986 = state_14942__$1;(statearr_14964_14986[(2)] = null);
(statearr_14964_14986[(1)] = (2));
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
});})(c__6203__auto___14972,out))
;return ((function (switch__6188__auto__,c__6203__auto___14972,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14968[(0)] = state_machine__6189__auto__);
(statearr_14968[(1)] = (1));
return statearr_14968;
});
var state_machine__6189__auto____1 = (function (state_14942){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14942);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14969){if((e14969 instanceof Object))
{var ex__6192__auto__ = e14969;var statearr_14970_14987 = state_14942;(statearr_14970_14987[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14969;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14988 = state_14942;
state_14942 = G__14988;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14942){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14972,out))
})();var state__6205__auto__ = (function (){var statearr_14971 = f__6204__auto__.call(null);(statearr_14971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14972);
return statearr_14971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14972,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___15131 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___15131,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___15131,out){
return (function (state_15101){var state_val_15102 = (state_15101[(1)]);if((state_val_15102 === (7)))
{var inst_15097 = (state_15101[(2)]);var state_15101__$1 = state_15101;var statearr_15103_15132 = state_15101__$1;(statearr_15103_15132[(2)] = inst_15097);
(statearr_15103_15132[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15102 === (1)))
{var inst_15060 = [];var inst_15061 = inst_15060;var inst_15062 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15101__$1 = (function (){var statearr_15104 = state_15101;(statearr_15104[(7)] = inst_15061);
(statearr_15104[(8)] = inst_15062);
return statearr_15104;
})();var statearr_15105_15133 = state_15101__$1;(statearr_15105_15133[(2)] = null);
(statearr_15105_15133[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15102 === (4)))
{var inst_15065 = (state_15101[(9)]);var inst_15065__$1 = (state_15101[(2)]);var inst_15066 = (inst_15065__$1 == null);var inst_15067 = cljs.core.not.call(null,inst_15066);var state_15101__$1 = (function (){var statearr_15106 = state_15101;(statearr_15106[(9)] = inst_15065__$1);
return statearr_15106;
})();if(inst_15067)
{var statearr_15107_15134 = state_15101__$1;(statearr_15107_15134[(1)] = (5));
} else
{var statearr_15108_15135 = state_15101__$1;(statearr_15108_15135[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15102 === (15)))
{var inst_15091 = (state_15101[(2)]);var state_15101__$1 = state_15101;var statearr_15109_15136 = state_15101__$1;(statearr_15109_15136[(2)] = inst_15091);
(statearr_15109_15136[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15102 === (13)))
{var state_15101__$1 = state_15101;var statearr_15110_15137 = state_15101__$1;(statearr_15110_15137[(2)] = null);
(statearr_15110_15137[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15102 === (6)))
{var inst_15061 = (state_15101[(7)]);var inst_15086 = inst_15061.length;var inst_15087 = (inst_15086 > (0));var state_15101__$1 = state_15101;if(cljs.core.truth_(inst_15087))
{var statearr_15111_15138 = state_15101__$1;(statearr_15111_15138[(1)] = (12));
} else
{var statearr_15112_15139 = state_15101__$1;(statearr_15112_15139[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15102 === (3)))
{var inst_15099 = (state_15101[(2)]);var state_15101__$1 = state_15101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15101__$1,inst_15099);
} else
{if((state_val_15102 === (12)))
{var inst_15061 = (state_15101[(7)]);var inst_15089 = cljs.core.vec.call(null,inst_15061);var state_15101__$1 = state_15101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15101__$1,(15),out,inst_15089);
} else
{if((state_val_15102 === (2)))
{var state_15101__$1 = state_15101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15101__$1,(4),ch);
} else
{if((state_val_15102 === (11)))
{var inst_15069 = (state_15101[(10)]);var inst_15065 = (state_15101[(9)]);var inst_15079 = (state_15101[(2)]);var inst_15080 = [];var inst_15081 = inst_15080.push(inst_15065);var inst_15061 = inst_15080;var inst_15062 = inst_15069;var state_15101__$1 = (function (){var statearr_15113 = state_15101;(statearr_15113[(11)] = inst_15079);
(statearr_15113[(7)] = inst_15061);
(statearr_15113[(8)] = inst_15062);
(statearr_15113[(12)] = inst_15081);
return statearr_15113;
})();var statearr_15114_15140 = state_15101__$1;(statearr_15114_15140[(2)] = null);
(statearr_15114_15140[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15102 === (9)))
{var inst_15061 = (state_15101[(7)]);var inst_15077 = cljs.core.vec.call(null,inst_15061);var state_15101__$1 = state_15101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15101__$1,(11),out,inst_15077);
} else
{if((state_val_15102 === (5)))
{var inst_15069 = (state_15101[(10)]);var inst_15062 = (state_15101[(8)]);var inst_15065 = (state_15101[(9)]);var inst_15069__$1 = f.call(null,inst_15065);var inst_15070 = cljs.core._EQ_.call(null,inst_15069__$1,inst_15062);var inst_15071 = cljs.core.keyword_identical_QMARK_.call(null,inst_15062,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15072 = (inst_15070) || (inst_15071);var state_15101__$1 = (function (){var statearr_15115 = state_15101;(statearr_15115[(10)] = inst_15069__$1);
return statearr_15115;
})();if(cljs.core.truth_(inst_15072))
{var statearr_15116_15141 = state_15101__$1;(statearr_15116_15141[(1)] = (8));
} else
{var statearr_15117_15142 = state_15101__$1;(statearr_15117_15142[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15102 === (14)))
{var inst_15094 = (state_15101[(2)]);var inst_15095 = cljs.core.async.close_BANG_.call(null,out);var state_15101__$1 = (function (){var statearr_15119 = state_15101;(statearr_15119[(13)] = inst_15094);
return statearr_15119;
})();var statearr_15120_15143 = state_15101__$1;(statearr_15120_15143[(2)] = inst_15095);
(statearr_15120_15143[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15102 === (10)))
{var inst_15084 = (state_15101[(2)]);var state_15101__$1 = state_15101;var statearr_15121_15144 = state_15101__$1;(statearr_15121_15144[(2)] = inst_15084);
(statearr_15121_15144[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15102 === (8)))
{var inst_15069 = (state_15101[(10)]);var inst_15061 = (state_15101[(7)]);var inst_15065 = (state_15101[(9)]);var inst_15074 = inst_15061.push(inst_15065);var tmp15118 = inst_15061;var inst_15061__$1 = tmp15118;var inst_15062 = inst_15069;var state_15101__$1 = (function (){var statearr_15122 = state_15101;(statearr_15122[(7)] = inst_15061__$1);
(statearr_15122[(8)] = inst_15062);
(statearr_15122[(14)] = inst_15074);
return statearr_15122;
})();var statearr_15123_15145 = state_15101__$1;(statearr_15123_15145[(2)] = null);
(statearr_15123_15145[(1)] = (2));
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
});})(c__6203__auto___15131,out))
;return ((function (switch__6188__auto__,c__6203__auto___15131,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_15127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15127[(0)] = state_machine__6189__auto__);
(statearr_15127[(1)] = (1));
return statearr_15127;
});
var state_machine__6189__auto____1 = (function (state_15101){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_15101);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e15128){if((e15128 instanceof Object))
{var ex__6192__auto__ = e15128;var statearr_15129_15146 = state_15101;(statearr_15129_15146[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15128;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15147 = state_15101;
state_15101 = G__15147;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_15101){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_15101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___15131,out))
})();var state__6205__auto__ = (function (){var statearr_15130 = f__6204__auto__.call(null);(statearr_15130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___15131);
return statearr_15130;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___15131,out))
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
