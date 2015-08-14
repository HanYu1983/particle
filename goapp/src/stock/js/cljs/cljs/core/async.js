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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16708 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16708 = (function (f,fn_handler,meta16709){
this.f = f;
this.fn_handler = fn_handler;
this.meta16709 = meta16709;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16708.cljs$lang$type = true;
cljs.core.async.t16708.cljs$lang$ctorStr = "cljs.core.async/t16708";
cljs.core.async.t16708.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t16708");
});
cljs.core.async.t16708.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16708.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16708.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16710){var self__ = this;
var _16710__$1 = this;return self__.meta16709;
});
cljs.core.async.t16708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16710,meta16709__$1){var self__ = this;
var _16710__$1 = this;return (new cljs.core.async.t16708(self__.f,self__.fn_handler,meta16709__$1));
});
cljs.core.async.__GT_t16708 = (function __GT_t16708(f__$1,fn_handler__$1,meta16709){return (new cljs.core.async.t16708(f__$1,fn_handler__$1,meta16709));
});
}
return (new cljs.core.async.t16708(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16712 = buff;if(G__16712)
{var bit__4201__auto__ = null;if(cljs.core.truth_((function (){var or__3551__auto__ = bit__4201__auto__;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return G__16712.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16712.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16712);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16712);
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
{var val_16713 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16713);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_16713,ret){
return (function (){return fn1.call(null,val_16713);
});})(val_16713,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4407__auto___16714 = n;var x_16715 = (0);while(true){
if((x_16715 < n__4407__auto___16714))
{(a[x_16715] = (0));
{
var G__16716 = (x_16715 + (1));
x_16715 = G__16716;
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
var G__16717 = (i + (1));
i = G__16717;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16721 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16721 = (function (flag,alt_flag,meta16722){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16722 = meta16722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16721.cljs$lang$type = true;
cljs.core.async.t16721.cljs$lang$ctorStr = "cljs.core.async/t16721";
cljs.core.async.t16721.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t16721");
});})(flag))
;
cljs.core.async.t16721.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16721.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t16721.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t16721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16723){var self__ = this;
var _16723__$1 = this;return self__.meta16722;
});})(flag))
;
cljs.core.async.t16721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16723,meta16722__$1){var self__ = this;
var _16723__$1 = this;return (new cljs.core.async.t16721(self__.flag,self__.alt_flag,meta16722__$1));
});})(flag))
;
cljs.core.async.__GT_t16721 = ((function (flag){
return (function __GT_t16721(flag__$1,alt_flag__$1,meta16722){return (new cljs.core.async.t16721(flag__$1,alt_flag__$1,meta16722));
});})(flag))
;
}
return (new cljs.core.async.t16721(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16727 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16727 = (function (cb,flag,alt_handler,meta16728){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16728 = meta16728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16727.cljs$lang$type = true;
cljs.core.async.t16727.cljs$lang$ctorStr = "cljs.core.async/t16727";
cljs.core.async.t16727.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t16727");
});
cljs.core.async.t16727.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16729){var self__ = this;
var _16729__$1 = this;return self__.meta16728;
});
cljs.core.async.t16727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16729,meta16728__$1){var self__ = this;
var _16729__$1 = this;return (new cljs.core.async.t16727(self__.cb,self__.flag,self__.alt_handler,meta16728__$1));
});
cljs.core.async.__GT_t16727 = (function __GT_t16727(cb__$1,flag__$1,alt_handler__$1,meta16728){return (new cljs.core.async.t16727(cb__$1,flag__$1,alt_handler__$1,meta16728));
});
}
return (new cljs.core.async.t16727(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16730_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16730_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16731_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16731_SHARP_,port], null));
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
var G__16732 = (i + (1));
i = G__16732;
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
var alts_BANG___delegate = function (ports,p__16733){var map__16735 = p__16733;var map__16735__$1 = ((cljs.core.seq_QMARK_.call(null,map__16735))?cljs.core.apply.call(null,cljs.core.hash_map,map__16735):map__16735);var opts = map__16735__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__16733 = null;if (arguments.length > 1) {
  p__16733 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16733);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16736){
var ports = cljs.core.first(arglist__16736);
var p__16733 = cljs.core.rest(arglist__16736);
return alts_BANG___delegate(ports,p__16733);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6203__auto___16831 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___16831){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___16831){
return (function (state_16807){var state_val_16808 = (state_16807[(1)]);if((state_val_16808 === (7)))
{var inst_16803 = (state_16807[(2)]);var state_16807__$1 = state_16807;var statearr_16809_16832 = state_16807__$1;(statearr_16809_16832[(2)] = inst_16803);
(statearr_16809_16832[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16808 === (1)))
{var state_16807__$1 = state_16807;var statearr_16810_16833 = state_16807__$1;(statearr_16810_16833[(2)] = null);
(statearr_16810_16833[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16808 === (4)))
{var inst_16786 = (state_16807[(7)]);var inst_16786__$1 = (state_16807[(2)]);var inst_16787 = (inst_16786__$1 == null);var state_16807__$1 = (function (){var statearr_16811 = state_16807;(statearr_16811[(7)] = inst_16786__$1);
return statearr_16811;
})();if(cljs.core.truth_(inst_16787))
{var statearr_16812_16834 = state_16807__$1;(statearr_16812_16834[(1)] = (5));
} else
{var statearr_16813_16835 = state_16807__$1;(statearr_16813_16835[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16808 === (13)))
{var state_16807__$1 = state_16807;var statearr_16814_16836 = state_16807__$1;(statearr_16814_16836[(2)] = null);
(statearr_16814_16836[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16808 === (6)))
{var inst_16786 = (state_16807[(7)]);var state_16807__$1 = state_16807;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16807__$1,(11),to,inst_16786);
} else
{if((state_val_16808 === (3)))
{var inst_16805 = (state_16807[(2)]);var state_16807__$1 = state_16807;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16807__$1,inst_16805);
} else
{if((state_val_16808 === (12)))
{var state_16807__$1 = state_16807;var statearr_16815_16837 = state_16807__$1;(statearr_16815_16837[(2)] = null);
(statearr_16815_16837[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16808 === (2)))
{var state_16807__$1 = state_16807;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16807__$1,(4),from);
} else
{if((state_val_16808 === (11)))
{var inst_16796 = (state_16807[(2)]);var state_16807__$1 = state_16807;if(cljs.core.truth_(inst_16796))
{var statearr_16816_16838 = state_16807__$1;(statearr_16816_16838[(1)] = (12));
} else
{var statearr_16817_16839 = state_16807__$1;(statearr_16817_16839[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16808 === (9)))
{var state_16807__$1 = state_16807;var statearr_16818_16840 = state_16807__$1;(statearr_16818_16840[(2)] = null);
(statearr_16818_16840[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16808 === (5)))
{var state_16807__$1 = state_16807;if(cljs.core.truth_(close_QMARK_))
{var statearr_16819_16841 = state_16807__$1;(statearr_16819_16841[(1)] = (8));
} else
{var statearr_16820_16842 = state_16807__$1;(statearr_16820_16842[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16808 === (14)))
{var inst_16801 = (state_16807[(2)]);var state_16807__$1 = state_16807;var statearr_16821_16843 = state_16807__$1;(statearr_16821_16843[(2)] = inst_16801);
(statearr_16821_16843[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16808 === (10)))
{var inst_16793 = (state_16807[(2)]);var state_16807__$1 = state_16807;var statearr_16822_16844 = state_16807__$1;(statearr_16822_16844[(2)] = inst_16793);
(statearr_16822_16844[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16808 === (8)))
{var inst_16790 = cljs.core.async.close_BANG_.call(null,to);var state_16807__$1 = state_16807;var statearr_16823_16845 = state_16807__$1;(statearr_16823_16845[(2)] = inst_16790);
(statearr_16823_16845[(1)] = (10));
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
});})(c__6203__auto___16831))
;return ((function (switch__6188__auto__,c__6203__auto___16831){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_16827 = [null,null,null,null,null,null,null,null];(statearr_16827[(0)] = state_machine__6189__auto__);
(statearr_16827[(1)] = (1));
return statearr_16827;
});
var state_machine__6189__auto____1 = (function (state_16807){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_16807);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e16828){if((e16828 instanceof Object))
{var ex__6192__auto__ = e16828;var statearr_16829_16846 = state_16807;(statearr_16829_16846[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16807);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16828;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16847 = state_16807;
state_16807 = G__16847;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_16807){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_16807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___16831))
})();var state__6205__auto__ = (function (){var statearr_16830 = f__6204__auto__.call(null);(statearr_16830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___16831);
return statearr_16830;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___16831))
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
return (function (p__17030){var vec__17031 = p__17030;var v = cljs.core.nth.call(null,vec__17031,(0),null);var p = cljs.core.nth.call(null,vec__17031,(1),null);var job = vec__17031;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6203__auto___17212 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___17212,res,vec__17031,v,p,job,jobs,results){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___17212,res,vec__17031,v,p,job,jobs,results){
return (function (state_17036){var state_val_17037 = (state_17036[(1)]);if((state_val_17037 === (2)))
{var inst_17033 = (state_17036[(2)]);var inst_17034 = cljs.core.async.close_BANG_.call(null,res);var state_17036__$1 = (function (){var statearr_17038 = state_17036;(statearr_17038[(7)] = inst_17033);
return statearr_17038;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17036__$1,inst_17034);
} else
{if((state_val_17037 === (1)))
{var state_17036__$1 = state_17036;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17036__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6203__auto___17212,res,vec__17031,v,p,job,jobs,results))
;return ((function (switch__6188__auto__,c__6203__auto___17212,res,vec__17031,v,p,job,jobs,results){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17042 = [null,null,null,null,null,null,null,null];(statearr_17042[(0)] = state_machine__6189__auto__);
(statearr_17042[(1)] = (1));
return statearr_17042;
});
var state_machine__6189__auto____1 = (function (state_17036){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17036);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17043){if((e17043 instanceof Object))
{var ex__6192__auto__ = e17043;var statearr_17044_17213 = state_17036;(statearr_17044_17213[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17036);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17043;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17214 = state_17036;
state_17036 = G__17214;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17036){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___17212,res,vec__17031,v,p,job,jobs,results))
})();var state__6205__auto__ = (function (){var statearr_17045 = f__6204__auto__.call(null);(statearr_17045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___17212);
return statearr_17045;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___17212,res,vec__17031,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__17046){var vec__17047 = p__17046;var v = cljs.core.nth.call(null,vec__17047,(0),null);var p = cljs.core.nth.call(null,vec__17047,(1),null);var job = vec__17047;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4407__auto___17215 = n;var __17216 = (0);while(true){
if((__17216 < n__4407__auto___17215))
{var G__17048_17217 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__17048_17217) {
case "async":
var c__6203__auto___17219 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__17216,c__6203__auto___17219,G__17048_17217,n__4407__auto___17215,jobs,results,process,async){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (__17216,c__6203__auto___17219,G__17048_17217,n__4407__auto___17215,jobs,results,process,async){
return (function (state_17061){var state_val_17062 = (state_17061[(1)]);if((state_val_17062 === (7)))
{var inst_17057 = (state_17061[(2)]);var state_17061__$1 = state_17061;var statearr_17063_17220 = state_17061__$1;(statearr_17063_17220[(2)] = inst_17057);
(statearr_17063_17220[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17062 === (6)))
{var state_17061__$1 = state_17061;var statearr_17064_17221 = state_17061__$1;(statearr_17064_17221[(2)] = null);
(statearr_17064_17221[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17062 === (5)))
{var state_17061__$1 = state_17061;var statearr_17065_17222 = state_17061__$1;(statearr_17065_17222[(2)] = null);
(statearr_17065_17222[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17062 === (4)))
{var inst_17051 = (state_17061[(2)]);var inst_17052 = async.call(null,inst_17051);var state_17061__$1 = state_17061;if(cljs.core.truth_(inst_17052))
{var statearr_17066_17223 = state_17061__$1;(statearr_17066_17223[(1)] = (5));
} else
{var statearr_17067_17224 = state_17061__$1;(statearr_17067_17224[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17062 === (3)))
{var inst_17059 = (state_17061[(2)]);var state_17061__$1 = state_17061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17061__$1,inst_17059);
} else
{if((state_val_17062 === (2)))
{var state_17061__$1 = state_17061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17061__$1,(4),jobs);
} else
{if((state_val_17062 === (1)))
{var state_17061__$1 = state_17061;var statearr_17068_17225 = state_17061__$1;(statearr_17068_17225[(2)] = null);
(statearr_17068_17225[(1)] = (2));
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
});})(__17216,c__6203__auto___17219,G__17048_17217,n__4407__auto___17215,jobs,results,process,async))
;return ((function (__17216,switch__6188__auto__,c__6203__auto___17219,G__17048_17217,n__4407__auto___17215,jobs,results,process,async){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17072 = [null,null,null,null,null,null,null];(statearr_17072[(0)] = state_machine__6189__auto__);
(statearr_17072[(1)] = (1));
return statearr_17072;
});
var state_machine__6189__auto____1 = (function (state_17061){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17061);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17073){if((e17073 instanceof Object))
{var ex__6192__auto__ = e17073;var statearr_17074_17226 = state_17061;(statearr_17074_17226[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17061);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17073;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17227 = state_17061;
state_17061 = G__17227;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17061){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(__17216,switch__6188__auto__,c__6203__auto___17219,G__17048_17217,n__4407__auto___17215,jobs,results,process,async))
})();var state__6205__auto__ = (function (){var statearr_17075 = f__6204__auto__.call(null);(statearr_17075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___17219);
return statearr_17075;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(__17216,c__6203__auto___17219,G__17048_17217,n__4407__auto___17215,jobs,results,process,async))
);

break;
case "compute":
var c__6203__auto___17228 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__17216,c__6203__auto___17228,G__17048_17217,n__4407__auto___17215,jobs,results,process,async){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (__17216,c__6203__auto___17228,G__17048_17217,n__4407__auto___17215,jobs,results,process,async){
return (function (state_17088){var state_val_17089 = (state_17088[(1)]);if((state_val_17089 === (7)))
{var inst_17084 = (state_17088[(2)]);var state_17088__$1 = state_17088;var statearr_17090_17229 = state_17088__$1;(statearr_17090_17229[(2)] = inst_17084);
(statearr_17090_17229[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17089 === (6)))
{var state_17088__$1 = state_17088;var statearr_17091_17230 = state_17088__$1;(statearr_17091_17230[(2)] = null);
(statearr_17091_17230[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17089 === (5)))
{var state_17088__$1 = state_17088;var statearr_17092_17231 = state_17088__$1;(statearr_17092_17231[(2)] = null);
(statearr_17092_17231[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17089 === (4)))
{var inst_17078 = (state_17088[(2)]);var inst_17079 = process.call(null,inst_17078);var state_17088__$1 = state_17088;if(cljs.core.truth_(inst_17079))
{var statearr_17093_17232 = state_17088__$1;(statearr_17093_17232[(1)] = (5));
} else
{var statearr_17094_17233 = state_17088__$1;(statearr_17094_17233[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17089 === (3)))
{var inst_17086 = (state_17088[(2)]);var state_17088__$1 = state_17088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17088__$1,inst_17086);
} else
{if((state_val_17089 === (2)))
{var state_17088__$1 = state_17088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17088__$1,(4),jobs);
} else
{if((state_val_17089 === (1)))
{var state_17088__$1 = state_17088;var statearr_17095_17234 = state_17088__$1;(statearr_17095_17234[(2)] = null);
(statearr_17095_17234[(1)] = (2));
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
});})(__17216,c__6203__auto___17228,G__17048_17217,n__4407__auto___17215,jobs,results,process,async))
;return ((function (__17216,switch__6188__auto__,c__6203__auto___17228,G__17048_17217,n__4407__auto___17215,jobs,results,process,async){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17099 = [null,null,null,null,null,null,null];(statearr_17099[(0)] = state_machine__6189__auto__);
(statearr_17099[(1)] = (1));
return statearr_17099;
});
var state_machine__6189__auto____1 = (function (state_17088){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17088);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17100){if((e17100 instanceof Object))
{var ex__6192__auto__ = e17100;var statearr_17101_17235 = state_17088;(statearr_17101_17235[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17088);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17100;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17236 = state_17088;
state_17088 = G__17236;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17088){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(__17216,switch__6188__auto__,c__6203__auto___17228,G__17048_17217,n__4407__auto___17215,jobs,results,process,async))
})();var state__6205__auto__ = (function (){var statearr_17102 = f__6204__auto__.call(null);(statearr_17102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___17228);
return statearr_17102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(__17216,c__6203__auto___17228,G__17048_17217,n__4407__auto___17215,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__17237 = (__17216 + (1));
__17216 = G__17237;
continue;
}
} else
{}
break;
}
var c__6203__auto___17238 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___17238,jobs,results,process,async){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___17238,jobs,results,process,async){
return (function (state_17123){var state_val_17124 = (state_17123[(1)]);if((state_val_17124 === (9)))
{var inst_17116 = (state_17123[(2)]);var state_17123__$1 = (function (){var statearr_17125 = state_17123;(statearr_17125[(7)] = inst_17116);
return statearr_17125;
})();var statearr_17126_17239 = state_17123__$1;(statearr_17126_17239[(2)] = null);
(statearr_17126_17239[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17124 === (8)))
{var inst_17110 = (state_17123[(8)]);var inst_17114 = (state_17123[(2)]);var state_17123__$1 = (function (){var statearr_17127 = state_17123;(statearr_17127[(9)] = inst_17114);
return statearr_17127;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17123__$1,(9),results,inst_17110);
} else
{if((state_val_17124 === (7)))
{var inst_17119 = (state_17123[(2)]);var state_17123__$1 = state_17123;var statearr_17128_17240 = state_17123__$1;(statearr_17128_17240[(2)] = inst_17119);
(statearr_17128_17240[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17124 === (6)))
{var inst_17105 = (state_17123[(10)]);var inst_17110 = (state_17123[(8)]);var inst_17110__$1 = cljs.core.async.chan.call(null,(1));var inst_17111 = [inst_17105,inst_17110__$1];var inst_17112 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_17111,null));var state_17123__$1 = (function (){var statearr_17129 = state_17123;(statearr_17129[(8)] = inst_17110__$1);
return statearr_17129;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17123__$1,(8),jobs,inst_17112);
} else
{if((state_val_17124 === (5)))
{var inst_17108 = cljs.core.async.close_BANG_.call(null,jobs);var state_17123__$1 = state_17123;var statearr_17130_17241 = state_17123__$1;(statearr_17130_17241[(2)] = inst_17108);
(statearr_17130_17241[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17124 === (4)))
{var inst_17105 = (state_17123[(10)]);var inst_17105__$1 = (state_17123[(2)]);var inst_17106 = (inst_17105__$1 == null);var state_17123__$1 = (function (){var statearr_17131 = state_17123;(statearr_17131[(10)] = inst_17105__$1);
return statearr_17131;
})();if(cljs.core.truth_(inst_17106))
{var statearr_17132_17242 = state_17123__$1;(statearr_17132_17242[(1)] = (5));
} else
{var statearr_17133_17243 = state_17123__$1;(statearr_17133_17243[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17124 === (3)))
{var inst_17121 = (state_17123[(2)]);var state_17123__$1 = state_17123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17123__$1,inst_17121);
} else
{if((state_val_17124 === (2)))
{var state_17123__$1 = state_17123;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17123__$1,(4),from);
} else
{if((state_val_17124 === (1)))
{var state_17123__$1 = state_17123;var statearr_17134_17244 = state_17123__$1;(statearr_17134_17244[(2)] = null);
(statearr_17134_17244[(1)] = (2));
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
});})(c__6203__auto___17238,jobs,results,process,async))
;return ((function (switch__6188__auto__,c__6203__auto___17238,jobs,results,process,async){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17138 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17138[(0)] = state_machine__6189__auto__);
(statearr_17138[(1)] = (1));
return statearr_17138;
});
var state_machine__6189__auto____1 = (function (state_17123){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17123);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17139){if((e17139 instanceof Object))
{var ex__6192__auto__ = e17139;var statearr_17140_17245 = state_17123;(statearr_17140_17245[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17123);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17139;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17246 = state_17123;
state_17123 = G__17246;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17123){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___17238,jobs,results,process,async))
})();var state__6205__auto__ = (function (){var statearr_17141 = f__6204__auto__.call(null);(statearr_17141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___17238);
return statearr_17141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___17238,jobs,results,process,async))
);
var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,jobs,results,process,async){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,jobs,results,process,async){
return (function (state_17179){var state_val_17180 = (state_17179[(1)]);if((state_val_17180 === (7)))
{var inst_17175 = (state_17179[(2)]);var state_17179__$1 = state_17179;var statearr_17181_17247 = state_17179__$1;(statearr_17181_17247[(2)] = inst_17175);
(statearr_17181_17247[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17180 === (20)))
{var state_17179__$1 = state_17179;var statearr_17182_17248 = state_17179__$1;(statearr_17182_17248[(2)] = null);
(statearr_17182_17248[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17180 === (1)))
{var state_17179__$1 = state_17179;var statearr_17183_17249 = state_17179__$1;(statearr_17183_17249[(2)] = null);
(statearr_17183_17249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17180 === (4)))
{var inst_17144 = (state_17179[(7)]);var inst_17144__$1 = (state_17179[(2)]);var inst_17145 = (inst_17144__$1 == null);var state_17179__$1 = (function (){var statearr_17184 = state_17179;(statearr_17184[(7)] = inst_17144__$1);
return statearr_17184;
})();if(cljs.core.truth_(inst_17145))
{var statearr_17185_17250 = state_17179__$1;(statearr_17185_17250[(1)] = (5));
} else
{var statearr_17186_17251 = state_17179__$1;(statearr_17186_17251[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17180 === (15)))
{var inst_17157 = (state_17179[(8)]);var state_17179__$1 = state_17179;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17179__$1,(18),to,inst_17157);
} else
{if((state_val_17180 === (21)))
{var inst_17170 = (state_17179[(2)]);var state_17179__$1 = state_17179;var statearr_17187_17252 = state_17179__$1;(statearr_17187_17252[(2)] = inst_17170);
(statearr_17187_17252[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17180 === (13)))
{var inst_17172 = (state_17179[(2)]);var state_17179__$1 = (function (){var statearr_17188 = state_17179;(statearr_17188[(9)] = inst_17172);
return statearr_17188;
})();var statearr_17189_17253 = state_17179__$1;(statearr_17189_17253[(2)] = null);
(statearr_17189_17253[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17180 === (6)))
{var inst_17144 = (state_17179[(7)]);var state_17179__$1 = state_17179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17179__$1,(11),inst_17144);
} else
{if((state_val_17180 === (17)))
{var inst_17165 = (state_17179[(2)]);var state_17179__$1 = state_17179;if(cljs.core.truth_(inst_17165))
{var statearr_17190_17254 = state_17179__$1;(statearr_17190_17254[(1)] = (19));
} else
{var statearr_17191_17255 = state_17179__$1;(statearr_17191_17255[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17180 === (3)))
{var inst_17177 = (state_17179[(2)]);var state_17179__$1 = state_17179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17179__$1,inst_17177);
} else
{if((state_val_17180 === (12)))
{var inst_17154 = (state_17179[(10)]);var state_17179__$1 = state_17179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17179__$1,(14),inst_17154);
} else
{if((state_val_17180 === (2)))
{var state_17179__$1 = state_17179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17179__$1,(4),results);
} else
{if((state_val_17180 === (19)))
{var state_17179__$1 = state_17179;var statearr_17192_17256 = state_17179__$1;(statearr_17192_17256[(2)] = null);
(statearr_17192_17256[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17180 === (11)))
{var inst_17154 = (state_17179[(2)]);var state_17179__$1 = (function (){var statearr_17193 = state_17179;(statearr_17193[(10)] = inst_17154);
return statearr_17193;
})();var statearr_17194_17257 = state_17179__$1;(statearr_17194_17257[(2)] = null);
(statearr_17194_17257[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17180 === (9)))
{var state_17179__$1 = state_17179;var statearr_17195_17258 = state_17179__$1;(statearr_17195_17258[(2)] = null);
(statearr_17195_17258[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17180 === (5)))
{var state_17179__$1 = state_17179;if(cljs.core.truth_(close_QMARK_))
{var statearr_17196_17259 = state_17179__$1;(statearr_17196_17259[(1)] = (8));
} else
{var statearr_17197_17260 = state_17179__$1;(statearr_17197_17260[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17180 === (14)))
{var inst_17157 = (state_17179[(8)]);var inst_17159 = (state_17179[(11)]);var inst_17157__$1 = (state_17179[(2)]);var inst_17158 = (inst_17157__$1 == null);var inst_17159__$1 = cljs.core.not.call(null,inst_17158);var state_17179__$1 = (function (){var statearr_17198 = state_17179;(statearr_17198[(8)] = inst_17157__$1);
(statearr_17198[(11)] = inst_17159__$1);
return statearr_17198;
})();if(inst_17159__$1)
{var statearr_17199_17261 = state_17179__$1;(statearr_17199_17261[(1)] = (15));
} else
{var statearr_17200_17262 = state_17179__$1;(statearr_17200_17262[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17180 === (16)))
{var inst_17159 = (state_17179[(11)]);var state_17179__$1 = state_17179;var statearr_17201_17263 = state_17179__$1;(statearr_17201_17263[(2)] = inst_17159);
(statearr_17201_17263[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17180 === (10)))
{var inst_17151 = (state_17179[(2)]);var state_17179__$1 = state_17179;var statearr_17202_17264 = state_17179__$1;(statearr_17202_17264[(2)] = inst_17151);
(statearr_17202_17264[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17180 === (18)))
{var inst_17162 = (state_17179[(2)]);var state_17179__$1 = state_17179;var statearr_17203_17265 = state_17179__$1;(statearr_17203_17265[(2)] = inst_17162);
(statearr_17203_17265[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17180 === (8)))
{var inst_17148 = cljs.core.async.close_BANG_.call(null,to);var state_17179__$1 = state_17179;var statearr_17204_17266 = state_17179__$1;(statearr_17204_17266[(2)] = inst_17148);
(statearr_17204_17266[(1)] = (10));
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
var state_machine__6189__auto____0 = (function (){var statearr_17208 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17208[(0)] = state_machine__6189__auto__);
(statearr_17208[(1)] = (1));
return statearr_17208;
});
var state_machine__6189__auto____1 = (function (state_17179){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17179);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17209){if((e17209 instanceof Object))
{var ex__6192__auto__ = e17209;var statearr_17210_17267 = state_17179;(statearr_17210_17267[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17179);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17209;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17268 = state_17179;
state_17179 = G__17268;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17179){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,jobs,results,process,async))
})();var state__6205__auto__ = (function (){var statearr_17211 = f__6204__auto__.call(null);(statearr_17211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_17211;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6203__auto___17369 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___17369,tc,fc){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___17369,tc,fc){
return (function (state_17344){var state_val_17345 = (state_17344[(1)]);if((state_val_17345 === (7)))
{var inst_17340 = (state_17344[(2)]);var state_17344__$1 = state_17344;var statearr_17346_17370 = state_17344__$1;(statearr_17346_17370[(2)] = inst_17340);
(statearr_17346_17370[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (1)))
{var state_17344__$1 = state_17344;var statearr_17347_17371 = state_17344__$1;(statearr_17347_17371[(2)] = null);
(statearr_17347_17371[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (4)))
{var inst_17321 = (state_17344[(7)]);var inst_17321__$1 = (state_17344[(2)]);var inst_17322 = (inst_17321__$1 == null);var state_17344__$1 = (function (){var statearr_17348 = state_17344;(statearr_17348[(7)] = inst_17321__$1);
return statearr_17348;
})();if(cljs.core.truth_(inst_17322))
{var statearr_17349_17372 = state_17344__$1;(statearr_17349_17372[(1)] = (5));
} else
{var statearr_17350_17373 = state_17344__$1;(statearr_17350_17373[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (13)))
{var state_17344__$1 = state_17344;var statearr_17351_17374 = state_17344__$1;(statearr_17351_17374[(2)] = null);
(statearr_17351_17374[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (6)))
{var inst_17321 = (state_17344[(7)]);var inst_17327 = p.call(null,inst_17321);var state_17344__$1 = state_17344;if(cljs.core.truth_(inst_17327))
{var statearr_17352_17375 = state_17344__$1;(statearr_17352_17375[(1)] = (9));
} else
{var statearr_17353_17376 = state_17344__$1;(statearr_17353_17376[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (3)))
{var inst_17342 = (state_17344[(2)]);var state_17344__$1 = state_17344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17344__$1,inst_17342);
} else
{if((state_val_17345 === (12)))
{var state_17344__$1 = state_17344;var statearr_17354_17377 = state_17344__$1;(statearr_17354_17377[(2)] = null);
(statearr_17354_17377[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (2)))
{var state_17344__$1 = state_17344;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17344__$1,(4),ch);
} else
{if((state_val_17345 === (11)))
{var inst_17321 = (state_17344[(7)]);var inst_17331 = (state_17344[(2)]);var state_17344__$1 = state_17344;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17344__$1,(8),inst_17331,inst_17321);
} else
{if((state_val_17345 === (9)))
{var state_17344__$1 = state_17344;var statearr_17355_17378 = state_17344__$1;(statearr_17355_17378[(2)] = tc);
(statearr_17355_17378[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (5)))
{var inst_17324 = cljs.core.async.close_BANG_.call(null,tc);var inst_17325 = cljs.core.async.close_BANG_.call(null,fc);var state_17344__$1 = (function (){var statearr_17356 = state_17344;(statearr_17356[(8)] = inst_17324);
return statearr_17356;
})();var statearr_17357_17379 = state_17344__$1;(statearr_17357_17379[(2)] = inst_17325);
(statearr_17357_17379[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (14)))
{var inst_17338 = (state_17344[(2)]);var state_17344__$1 = state_17344;var statearr_17358_17380 = state_17344__$1;(statearr_17358_17380[(2)] = inst_17338);
(statearr_17358_17380[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (10)))
{var state_17344__$1 = state_17344;var statearr_17359_17381 = state_17344__$1;(statearr_17359_17381[(2)] = fc);
(statearr_17359_17381[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17345 === (8)))
{var inst_17333 = (state_17344[(2)]);var state_17344__$1 = state_17344;if(cljs.core.truth_(inst_17333))
{var statearr_17360_17382 = state_17344__$1;(statearr_17360_17382[(1)] = (12));
} else
{var statearr_17361_17383 = state_17344__$1;(statearr_17361_17383[(1)] = (13));
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
});})(c__6203__auto___17369,tc,fc))
;return ((function (switch__6188__auto__,c__6203__auto___17369,tc,fc){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_17365 = [null,null,null,null,null,null,null,null,null];(statearr_17365[(0)] = state_machine__6189__auto__);
(statearr_17365[(1)] = (1));
return statearr_17365;
});
var state_machine__6189__auto____1 = (function (state_17344){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17344);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17366){if((e17366 instanceof Object))
{var ex__6192__auto__ = e17366;var statearr_17367_17384 = state_17344;(statearr_17367_17384[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17344);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17366;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17385 = state_17344;
state_17344 = G__17385;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17344){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___17369,tc,fc))
})();var state__6205__auto__ = (function (){var statearr_17368 = f__6204__auto__.call(null);(statearr_17368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___17369);
return statearr_17368;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___17369,tc,fc))
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
return (function (state_17432){var state_val_17433 = (state_17432[(1)]);if((state_val_17433 === (7)))
{var inst_17428 = (state_17432[(2)]);var state_17432__$1 = state_17432;var statearr_17434_17450 = state_17432__$1;(statearr_17434_17450[(2)] = inst_17428);
(statearr_17434_17450[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (6)))
{var inst_17418 = (state_17432[(7)]);var inst_17421 = (state_17432[(8)]);var inst_17425 = f.call(null,inst_17418,inst_17421);var inst_17418__$1 = inst_17425;var state_17432__$1 = (function (){var statearr_17435 = state_17432;(statearr_17435[(7)] = inst_17418__$1);
return statearr_17435;
})();var statearr_17436_17451 = state_17432__$1;(statearr_17436_17451[(2)] = null);
(statearr_17436_17451[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (5)))
{var inst_17418 = (state_17432[(7)]);var state_17432__$1 = state_17432;var statearr_17437_17452 = state_17432__$1;(statearr_17437_17452[(2)] = inst_17418);
(statearr_17437_17452[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (4)))
{var inst_17421 = (state_17432[(8)]);var inst_17421__$1 = (state_17432[(2)]);var inst_17422 = (inst_17421__$1 == null);var state_17432__$1 = (function (){var statearr_17438 = state_17432;(statearr_17438[(8)] = inst_17421__$1);
return statearr_17438;
})();if(cljs.core.truth_(inst_17422))
{var statearr_17439_17453 = state_17432__$1;(statearr_17439_17453[(1)] = (5));
} else
{var statearr_17440_17454 = state_17432__$1;(statearr_17440_17454[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17433 === (3)))
{var inst_17430 = (state_17432[(2)]);var state_17432__$1 = state_17432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17432__$1,inst_17430);
} else
{if((state_val_17433 === (2)))
{var state_17432__$1 = state_17432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17432__$1,(4),ch);
} else
{if((state_val_17433 === (1)))
{var inst_17418 = init;var state_17432__$1 = (function (){var statearr_17441 = state_17432;(statearr_17441[(7)] = inst_17418);
return statearr_17441;
})();var statearr_17442_17455 = state_17432__$1;(statearr_17442_17455[(2)] = null);
(statearr_17442_17455[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_17446 = [null,null,null,null,null,null,null,null,null];(statearr_17446[(0)] = state_machine__6189__auto__);
(statearr_17446[(1)] = (1));
return statearr_17446;
});
var state_machine__6189__auto____1 = (function (state_17432){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17432);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17447){if((e17447 instanceof Object))
{var ex__6192__auto__ = e17447;var statearr_17448_17456 = state_17432;(statearr_17448_17456[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17432);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17447;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17457 = state_17432;
state_17432 = G__17457;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17432){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_17449 = f__6204__auto__.call(null);(statearr_17449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_17449;
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
return (function (state_17531){var state_val_17532 = (state_17531[(1)]);if((state_val_17532 === (7)))
{var inst_17513 = (state_17531[(2)]);var state_17531__$1 = state_17531;var statearr_17533_17556 = state_17531__$1;(statearr_17533_17556[(2)] = inst_17513);
(statearr_17533_17556[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17532 === (1)))
{var inst_17507 = cljs.core.seq.call(null,coll);var inst_17508 = inst_17507;var state_17531__$1 = (function (){var statearr_17534 = state_17531;(statearr_17534[(7)] = inst_17508);
return statearr_17534;
})();var statearr_17535_17557 = state_17531__$1;(statearr_17535_17557[(2)] = null);
(statearr_17535_17557[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17532 === (4)))
{var inst_17508 = (state_17531[(7)]);var inst_17511 = cljs.core.first.call(null,inst_17508);var state_17531__$1 = state_17531;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17531__$1,(7),ch,inst_17511);
} else
{if((state_val_17532 === (13)))
{var inst_17525 = (state_17531[(2)]);var state_17531__$1 = state_17531;var statearr_17536_17558 = state_17531__$1;(statearr_17536_17558[(2)] = inst_17525);
(statearr_17536_17558[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17532 === (6)))
{var inst_17516 = (state_17531[(2)]);var state_17531__$1 = state_17531;if(cljs.core.truth_(inst_17516))
{var statearr_17537_17559 = state_17531__$1;(statearr_17537_17559[(1)] = (8));
} else
{var statearr_17538_17560 = state_17531__$1;(statearr_17538_17560[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17532 === (3)))
{var inst_17529 = (state_17531[(2)]);var state_17531__$1 = state_17531;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17531__$1,inst_17529);
} else
{if((state_val_17532 === (12)))
{var state_17531__$1 = state_17531;var statearr_17539_17561 = state_17531__$1;(statearr_17539_17561[(2)] = null);
(statearr_17539_17561[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17532 === (2)))
{var inst_17508 = (state_17531[(7)]);var state_17531__$1 = state_17531;if(cljs.core.truth_(inst_17508))
{var statearr_17540_17562 = state_17531__$1;(statearr_17540_17562[(1)] = (4));
} else
{var statearr_17541_17563 = state_17531__$1;(statearr_17541_17563[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17532 === (11)))
{var inst_17522 = cljs.core.async.close_BANG_.call(null,ch);var state_17531__$1 = state_17531;var statearr_17542_17564 = state_17531__$1;(statearr_17542_17564[(2)] = inst_17522);
(statearr_17542_17564[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17532 === (9)))
{var state_17531__$1 = state_17531;if(cljs.core.truth_(close_QMARK_))
{var statearr_17543_17565 = state_17531__$1;(statearr_17543_17565[(1)] = (11));
} else
{var statearr_17544_17566 = state_17531__$1;(statearr_17544_17566[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17532 === (5)))
{var inst_17508 = (state_17531[(7)]);var state_17531__$1 = state_17531;var statearr_17545_17567 = state_17531__$1;(statearr_17545_17567[(2)] = inst_17508);
(statearr_17545_17567[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17532 === (10)))
{var inst_17527 = (state_17531[(2)]);var state_17531__$1 = state_17531;var statearr_17546_17568 = state_17531__$1;(statearr_17546_17568[(2)] = inst_17527);
(statearr_17546_17568[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17532 === (8)))
{var inst_17508 = (state_17531[(7)]);var inst_17518 = cljs.core.next.call(null,inst_17508);var inst_17508__$1 = inst_17518;var state_17531__$1 = (function (){var statearr_17547 = state_17531;(statearr_17547[(7)] = inst_17508__$1);
return statearr_17547;
})();var statearr_17548_17569 = state_17531__$1;(statearr_17548_17569[(2)] = null);
(statearr_17548_17569[(1)] = (2));
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
var state_machine__6189__auto____0 = (function (){var statearr_17552 = [null,null,null,null,null,null,null,null];(statearr_17552[(0)] = state_machine__6189__auto__);
(statearr_17552[(1)] = (1));
return statearr_17552;
});
var state_machine__6189__auto____1 = (function (state_17531){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17531);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e17553){if((e17553 instanceof Object))
{var ex__6192__auto__ = e17553;var statearr_17554_17570 = state_17531;(statearr_17554_17570[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17531);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17553;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17571 = state_17531;
state_17531 = G__17571;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17531){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_17555 = f__6204__auto__.call(null);(statearr_17555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_17555;
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
cljs.core.async.Mux = (function (){var obj17573 = {};return obj17573;
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
cljs.core.async.Mult = (function (){var obj17575 = {};return obj17575;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17797 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17797 = (function (cs,ch,mult,meta17798){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17798 = meta17798;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17797.cljs$lang$type = true;
cljs.core.async.t17797.cljs$lang$ctorStr = "cljs.core.async/t17797";
cljs.core.async.t17797.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t17797");
});})(cs))
;
cljs.core.async.t17797.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17797.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17797.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17797.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17797.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17797.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17797.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17799){var self__ = this;
var _17799__$1 = this;return self__.meta17798;
});})(cs))
;
cljs.core.async.t17797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17799,meta17798__$1){var self__ = this;
var _17799__$1 = this;return (new cljs.core.async.t17797(self__.cs,self__.ch,self__.mult,meta17798__$1));
});})(cs))
;
cljs.core.async.__GT_t17797 = ((function (cs){
return (function __GT_t17797(cs__$1,ch__$1,mult__$1,meta17798){return (new cljs.core.async.t17797(cs__$1,ch__$1,mult__$1,meta17798));
});})(cs))
;
}
return (new cljs.core.async.t17797(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6203__auto___18018 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___18018,cs,m,dchan,dctr,done){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___18018,cs,m,dchan,dctr,done){
return (function (state_17930){var state_val_17931 = (state_17930[(1)]);if((state_val_17931 === (7)))
{var inst_17926 = (state_17930[(2)]);var state_17930__$1 = state_17930;var statearr_17932_18019 = state_17930__$1;(statearr_17932_18019[(2)] = inst_17926);
(statearr_17932_18019[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (20)))
{var inst_17831 = (state_17930[(7)]);var inst_17841 = cljs.core.first.call(null,inst_17831);var inst_17842 = cljs.core.nth.call(null,inst_17841,(0),null);var inst_17843 = cljs.core.nth.call(null,inst_17841,(1),null);var state_17930__$1 = (function (){var statearr_17933 = state_17930;(statearr_17933[(8)] = inst_17842);
return statearr_17933;
})();if(cljs.core.truth_(inst_17843))
{var statearr_17934_18020 = state_17930__$1;(statearr_17934_18020[(1)] = (22));
} else
{var statearr_17935_18021 = state_17930__$1;(statearr_17935_18021[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (27)))
{var inst_17802 = (state_17930[(9)]);var inst_17878 = (state_17930[(10)]);var inst_17871 = (state_17930[(11)]);var inst_17873 = (state_17930[(12)]);var inst_17878__$1 = cljs.core._nth.call(null,inst_17871,inst_17873);var inst_17879 = cljs.core.async.put_BANG_.call(null,inst_17878__$1,inst_17802,done);var state_17930__$1 = (function (){var statearr_17936 = state_17930;(statearr_17936[(10)] = inst_17878__$1);
return statearr_17936;
})();if(cljs.core.truth_(inst_17879))
{var statearr_17937_18022 = state_17930__$1;(statearr_17937_18022[(1)] = (30));
} else
{var statearr_17938_18023 = state_17930__$1;(statearr_17938_18023[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (1)))
{var state_17930__$1 = state_17930;var statearr_17939_18024 = state_17930__$1;(statearr_17939_18024[(2)] = null);
(statearr_17939_18024[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (24)))
{var inst_17831 = (state_17930[(7)]);var inst_17848 = (state_17930[(2)]);var inst_17849 = cljs.core.next.call(null,inst_17831);var inst_17811 = inst_17849;var inst_17812 = null;var inst_17813 = (0);var inst_17814 = (0);var state_17930__$1 = (function (){var statearr_17940 = state_17930;(statearr_17940[(13)] = inst_17811);
(statearr_17940[(14)] = inst_17812);
(statearr_17940[(15)] = inst_17813);
(statearr_17940[(16)] = inst_17848);
(statearr_17940[(17)] = inst_17814);
return statearr_17940;
})();var statearr_17941_18025 = state_17930__$1;(statearr_17941_18025[(2)] = null);
(statearr_17941_18025[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (39)))
{var state_17930__$1 = state_17930;var statearr_17945_18026 = state_17930__$1;(statearr_17945_18026[(2)] = null);
(statearr_17945_18026[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (4)))
{var inst_17802 = (state_17930[(9)]);var inst_17802__$1 = (state_17930[(2)]);var inst_17803 = (inst_17802__$1 == null);var state_17930__$1 = (function (){var statearr_17946 = state_17930;(statearr_17946[(9)] = inst_17802__$1);
return statearr_17946;
})();if(cljs.core.truth_(inst_17803))
{var statearr_17947_18027 = state_17930__$1;(statearr_17947_18027[(1)] = (5));
} else
{var statearr_17948_18028 = state_17930__$1;(statearr_17948_18028[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (15)))
{var inst_17811 = (state_17930[(13)]);var inst_17812 = (state_17930[(14)]);var inst_17813 = (state_17930[(15)]);var inst_17814 = (state_17930[(17)]);var inst_17827 = (state_17930[(2)]);var inst_17828 = (inst_17814 + (1));var tmp17942 = inst_17811;var tmp17943 = inst_17812;var tmp17944 = inst_17813;var inst_17811__$1 = tmp17942;var inst_17812__$1 = tmp17943;var inst_17813__$1 = tmp17944;var inst_17814__$1 = inst_17828;var state_17930__$1 = (function (){var statearr_17949 = state_17930;(statearr_17949[(13)] = inst_17811__$1);
(statearr_17949[(14)] = inst_17812__$1);
(statearr_17949[(15)] = inst_17813__$1);
(statearr_17949[(17)] = inst_17814__$1);
(statearr_17949[(18)] = inst_17827);
return statearr_17949;
})();var statearr_17950_18029 = state_17930__$1;(statearr_17950_18029[(2)] = null);
(statearr_17950_18029[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (21)))
{var inst_17852 = (state_17930[(2)]);var state_17930__$1 = state_17930;var statearr_17954_18030 = state_17930__$1;(statearr_17954_18030[(2)] = inst_17852);
(statearr_17954_18030[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (31)))
{var inst_17878 = (state_17930[(10)]);var inst_17882 = done.call(null,null);var inst_17883 = cljs.core.async.untap_STAR_.call(null,m,inst_17878);var state_17930__$1 = (function (){var statearr_17955 = state_17930;(statearr_17955[(19)] = inst_17882);
return statearr_17955;
})();var statearr_17956_18031 = state_17930__$1;(statearr_17956_18031[(2)] = inst_17883);
(statearr_17956_18031[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (32)))
{var inst_17872 = (state_17930[(20)]);var inst_17870 = (state_17930[(21)]);var inst_17871 = (state_17930[(11)]);var inst_17873 = (state_17930[(12)]);var inst_17885 = (state_17930[(2)]);var inst_17886 = (inst_17873 + (1));var tmp17951 = inst_17872;var tmp17952 = inst_17870;var tmp17953 = inst_17871;var inst_17870__$1 = tmp17952;var inst_17871__$1 = tmp17953;var inst_17872__$1 = tmp17951;var inst_17873__$1 = inst_17886;var state_17930__$1 = (function (){var statearr_17957 = state_17930;(statearr_17957[(20)] = inst_17872__$1);
(statearr_17957[(21)] = inst_17870__$1);
(statearr_17957[(11)] = inst_17871__$1);
(statearr_17957[(22)] = inst_17885);
(statearr_17957[(12)] = inst_17873__$1);
return statearr_17957;
})();var statearr_17958_18032 = state_17930__$1;(statearr_17958_18032[(2)] = null);
(statearr_17958_18032[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (40)))
{var inst_17898 = (state_17930[(23)]);var inst_17902 = done.call(null,null);var inst_17903 = cljs.core.async.untap_STAR_.call(null,m,inst_17898);var state_17930__$1 = (function (){var statearr_17959 = state_17930;(statearr_17959[(24)] = inst_17902);
return statearr_17959;
})();var statearr_17960_18033 = state_17930__$1;(statearr_17960_18033[(2)] = inst_17903);
(statearr_17960_18033[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (33)))
{var inst_17889 = (state_17930[(25)]);var inst_17891 = cljs.core.chunked_seq_QMARK_.call(null,inst_17889);var state_17930__$1 = state_17930;if(inst_17891)
{var statearr_17961_18034 = state_17930__$1;(statearr_17961_18034[(1)] = (36));
} else
{var statearr_17962_18035 = state_17930__$1;(statearr_17962_18035[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (13)))
{var inst_17821 = (state_17930[(26)]);var inst_17824 = cljs.core.async.close_BANG_.call(null,inst_17821);var state_17930__$1 = state_17930;var statearr_17963_18036 = state_17930__$1;(statearr_17963_18036[(2)] = inst_17824);
(statearr_17963_18036[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (22)))
{var inst_17842 = (state_17930[(8)]);var inst_17845 = cljs.core.async.close_BANG_.call(null,inst_17842);var state_17930__$1 = state_17930;var statearr_17964_18037 = state_17930__$1;(statearr_17964_18037[(2)] = inst_17845);
(statearr_17964_18037[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (36)))
{var inst_17889 = (state_17930[(25)]);var inst_17893 = cljs.core.chunk_first.call(null,inst_17889);var inst_17894 = cljs.core.chunk_rest.call(null,inst_17889);var inst_17895 = cljs.core.count.call(null,inst_17893);var inst_17870 = inst_17894;var inst_17871 = inst_17893;var inst_17872 = inst_17895;var inst_17873 = (0);var state_17930__$1 = (function (){var statearr_17965 = state_17930;(statearr_17965[(20)] = inst_17872);
(statearr_17965[(21)] = inst_17870);
(statearr_17965[(11)] = inst_17871);
(statearr_17965[(12)] = inst_17873);
return statearr_17965;
})();var statearr_17966_18038 = state_17930__$1;(statearr_17966_18038[(2)] = null);
(statearr_17966_18038[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (41)))
{var inst_17889 = (state_17930[(25)]);var inst_17905 = (state_17930[(2)]);var inst_17906 = cljs.core.next.call(null,inst_17889);var inst_17870 = inst_17906;var inst_17871 = null;var inst_17872 = (0);var inst_17873 = (0);var state_17930__$1 = (function (){var statearr_17967 = state_17930;(statearr_17967[(20)] = inst_17872);
(statearr_17967[(27)] = inst_17905);
(statearr_17967[(21)] = inst_17870);
(statearr_17967[(11)] = inst_17871);
(statearr_17967[(12)] = inst_17873);
return statearr_17967;
})();var statearr_17968_18039 = state_17930__$1;(statearr_17968_18039[(2)] = null);
(statearr_17968_18039[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (43)))
{var state_17930__$1 = state_17930;var statearr_17969_18040 = state_17930__$1;(statearr_17969_18040[(2)] = null);
(statearr_17969_18040[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (29)))
{var inst_17914 = (state_17930[(2)]);var state_17930__$1 = state_17930;var statearr_17970_18041 = state_17930__$1;(statearr_17970_18041[(2)] = inst_17914);
(statearr_17970_18041[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (44)))
{var inst_17923 = (state_17930[(2)]);var state_17930__$1 = (function (){var statearr_17971 = state_17930;(statearr_17971[(28)] = inst_17923);
return statearr_17971;
})();var statearr_17972_18042 = state_17930__$1;(statearr_17972_18042[(2)] = null);
(statearr_17972_18042[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (6)))
{var inst_17862 = (state_17930[(29)]);var inst_17861 = cljs.core.deref.call(null,cs);var inst_17862__$1 = cljs.core.keys.call(null,inst_17861);var inst_17863 = cljs.core.count.call(null,inst_17862__$1);var inst_17864 = cljs.core.reset_BANG_.call(null,dctr,inst_17863);var inst_17869 = cljs.core.seq.call(null,inst_17862__$1);var inst_17870 = inst_17869;var inst_17871 = null;var inst_17872 = (0);var inst_17873 = (0);var state_17930__$1 = (function (){var statearr_17973 = state_17930;(statearr_17973[(30)] = inst_17864);
(statearr_17973[(20)] = inst_17872);
(statearr_17973[(29)] = inst_17862__$1);
(statearr_17973[(21)] = inst_17870);
(statearr_17973[(11)] = inst_17871);
(statearr_17973[(12)] = inst_17873);
return statearr_17973;
})();var statearr_17974_18043 = state_17930__$1;(statearr_17974_18043[(2)] = null);
(statearr_17974_18043[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (28)))
{var inst_17870 = (state_17930[(21)]);var inst_17889 = (state_17930[(25)]);var inst_17889__$1 = cljs.core.seq.call(null,inst_17870);var state_17930__$1 = (function (){var statearr_17975 = state_17930;(statearr_17975[(25)] = inst_17889__$1);
return statearr_17975;
})();if(inst_17889__$1)
{var statearr_17976_18044 = state_17930__$1;(statearr_17976_18044[(1)] = (33));
} else
{var statearr_17977_18045 = state_17930__$1;(statearr_17977_18045[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (25)))
{var inst_17872 = (state_17930[(20)]);var inst_17873 = (state_17930[(12)]);var inst_17875 = (inst_17873 < inst_17872);var inst_17876 = inst_17875;var state_17930__$1 = state_17930;if(cljs.core.truth_(inst_17876))
{var statearr_17978_18046 = state_17930__$1;(statearr_17978_18046[(1)] = (27));
} else
{var statearr_17979_18047 = state_17930__$1;(statearr_17979_18047[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (34)))
{var state_17930__$1 = state_17930;var statearr_17980_18048 = state_17930__$1;(statearr_17980_18048[(2)] = null);
(statearr_17980_18048[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (17)))
{var state_17930__$1 = state_17930;var statearr_17981_18049 = state_17930__$1;(statearr_17981_18049[(2)] = null);
(statearr_17981_18049[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (3)))
{var inst_17928 = (state_17930[(2)]);var state_17930__$1 = state_17930;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17930__$1,inst_17928);
} else
{if((state_val_17931 === (12)))
{var inst_17857 = (state_17930[(2)]);var state_17930__$1 = state_17930;var statearr_17982_18050 = state_17930__$1;(statearr_17982_18050[(2)] = inst_17857);
(statearr_17982_18050[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (2)))
{var state_17930__$1 = state_17930;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17930__$1,(4),ch);
} else
{if((state_val_17931 === (23)))
{var state_17930__$1 = state_17930;var statearr_17983_18051 = state_17930__$1;(statearr_17983_18051[(2)] = null);
(statearr_17983_18051[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (35)))
{var inst_17912 = (state_17930[(2)]);var state_17930__$1 = state_17930;var statearr_17984_18052 = state_17930__$1;(statearr_17984_18052[(2)] = inst_17912);
(statearr_17984_18052[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (19)))
{var inst_17831 = (state_17930[(7)]);var inst_17835 = cljs.core.chunk_first.call(null,inst_17831);var inst_17836 = cljs.core.chunk_rest.call(null,inst_17831);var inst_17837 = cljs.core.count.call(null,inst_17835);var inst_17811 = inst_17836;var inst_17812 = inst_17835;var inst_17813 = inst_17837;var inst_17814 = (0);var state_17930__$1 = (function (){var statearr_17985 = state_17930;(statearr_17985[(13)] = inst_17811);
(statearr_17985[(14)] = inst_17812);
(statearr_17985[(15)] = inst_17813);
(statearr_17985[(17)] = inst_17814);
return statearr_17985;
})();var statearr_17986_18053 = state_17930__$1;(statearr_17986_18053[(2)] = null);
(statearr_17986_18053[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (11)))
{var inst_17811 = (state_17930[(13)]);var inst_17831 = (state_17930[(7)]);var inst_17831__$1 = cljs.core.seq.call(null,inst_17811);var state_17930__$1 = (function (){var statearr_17987 = state_17930;(statearr_17987[(7)] = inst_17831__$1);
return statearr_17987;
})();if(inst_17831__$1)
{var statearr_17988_18054 = state_17930__$1;(statearr_17988_18054[(1)] = (16));
} else
{var statearr_17989_18055 = state_17930__$1;(statearr_17989_18055[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (9)))
{var inst_17859 = (state_17930[(2)]);var state_17930__$1 = state_17930;var statearr_17990_18056 = state_17930__$1;(statearr_17990_18056[(2)] = inst_17859);
(statearr_17990_18056[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (5)))
{var inst_17809 = cljs.core.deref.call(null,cs);var inst_17810 = cljs.core.seq.call(null,inst_17809);var inst_17811 = inst_17810;var inst_17812 = null;var inst_17813 = (0);var inst_17814 = (0);var state_17930__$1 = (function (){var statearr_17991 = state_17930;(statearr_17991[(13)] = inst_17811);
(statearr_17991[(14)] = inst_17812);
(statearr_17991[(15)] = inst_17813);
(statearr_17991[(17)] = inst_17814);
return statearr_17991;
})();var statearr_17992_18057 = state_17930__$1;(statearr_17992_18057[(2)] = null);
(statearr_17992_18057[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (14)))
{var state_17930__$1 = state_17930;var statearr_17993_18058 = state_17930__$1;(statearr_17993_18058[(2)] = null);
(statearr_17993_18058[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (45)))
{var inst_17920 = (state_17930[(2)]);var state_17930__$1 = state_17930;var statearr_17994_18059 = state_17930__$1;(statearr_17994_18059[(2)] = inst_17920);
(statearr_17994_18059[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (26)))
{var inst_17862 = (state_17930[(29)]);var inst_17916 = (state_17930[(2)]);var inst_17917 = cljs.core.seq.call(null,inst_17862);var state_17930__$1 = (function (){var statearr_17995 = state_17930;(statearr_17995[(31)] = inst_17916);
return statearr_17995;
})();if(inst_17917)
{var statearr_17996_18060 = state_17930__$1;(statearr_17996_18060[(1)] = (42));
} else
{var statearr_17997_18061 = state_17930__$1;(statearr_17997_18061[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (16)))
{var inst_17831 = (state_17930[(7)]);var inst_17833 = cljs.core.chunked_seq_QMARK_.call(null,inst_17831);var state_17930__$1 = state_17930;if(inst_17833)
{var statearr_17998_18062 = state_17930__$1;(statearr_17998_18062[(1)] = (19));
} else
{var statearr_17999_18063 = state_17930__$1;(statearr_17999_18063[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (38)))
{var inst_17909 = (state_17930[(2)]);var state_17930__$1 = state_17930;var statearr_18000_18064 = state_17930__$1;(statearr_18000_18064[(2)] = inst_17909);
(statearr_18000_18064[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (30)))
{var state_17930__$1 = state_17930;var statearr_18001_18065 = state_17930__$1;(statearr_18001_18065[(2)] = null);
(statearr_18001_18065[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (10)))
{var inst_17812 = (state_17930[(14)]);var inst_17814 = (state_17930[(17)]);var inst_17820 = cljs.core._nth.call(null,inst_17812,inst_17814);var inst_17821 = cljs.core.nth.call(null,inst_17820,(0),null);var inst_17822 = cljs.core.nth.call(null,inst_17820,(1),null);var state_17930__$1 = (function (){var statearr_18002 = state_17930;(statearr_18002[(26)] = inst_17821);
return statearr_18002;
})();if(cljs.core.truth_(inst_17822))
{var statearr_18003_18066 = state_17930__$1;(statearr_18003_18066[(1)] = (13));
} else
{var statearr_18004_18067 = state_17930__$1;(statearr_18004_18067[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (18)))
{var inst_17855 = (state_17930[(2)]);var state_17930__$1 = state_17930;var statearr_18005_18068 = state_17930__$1;(statearr_18005_18068[(2)] = inst_17855);
(statearr_18005_18068[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (42)))
{var state_17930__$1 = state_17930;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17930__$1,(45),dchan);
} else
{if((state_val_17931 === (37)))
{var inst_17898 = (state_17930[(23)]);var inst_17802 = (state_17930[(9)]);var inst_17889 = (state_17930[(25)]);var inst_17898__$1 = cljs.core.first.call(null,inst_17889);var inst_17899 = cljs.core.async.put_BANG_.call(null,inst_17898__$1,inst_17802,done);var state_17930__$1 = (function (){var statearr_18006 = state_17930;(statearr_18006[(23)] = inst_17898__$1);
return statearr_18006;
})();if(cljs.core.truth_(inst_17899))
{var statearr_18007_18069 = state_17930__$1;(statearr_18007_18069[(1)] = (39));
} else
{var statearr_18008_18070 = state_17930__$1;(statearr_18008_18070[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17931 === (8)))
{var inst_17813 = (state_17930[(15)]);var inst_17814 = (state_17930[(17)]);var inst_17816 = (inst_17814 < inst_17813);var inst_17817 = inst_17816;var state_17930__$1 = state_17930;if(cljs.core.truth_(inst_17817))
{var statearr_18009_18071 = state_17930__$1;(statearr_18009_18071[(1)] = (10));
} else
{var statearr_18010_18072 = state_17930__$1;(statearr_18010_18072[(1)] = (11));
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
});})(c__6203__auto___18018,cs,m,dchan,dctr,done))
;return ((function (switch__6188__auto__,c__6203__auto___18018,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_18014 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18014[(0)] = state_machine__6189__auto__);
(statearr_18014[(1)] = (1));
return statearr_18014;
});
var state_machine__6189__auto____1 = (function (state_17930){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_17930);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e18015){if((e18015 instanceof Object))
{var ex__6192__auto__ = e18015;var statearr_18016_18073 = state_17930;(statearr_18016_18073[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17930);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18074 = state_17930;
state_17930 = G__18074;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_17930){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_17930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___18018,cs,m,dchan,dctr,done))
})();var state__6205__auto__ = (function (){var statearr_18017 = f__6204__auto__.call(null);(statearr_18017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___18018);
return statearr_18017;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___18018,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj18076 = {};return obj18076;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18077){var map__18082 = p__18077;var map__18082__$1 = ((cljs.core.seq_QMARK_.call(null,map__18082))?cljs.core.apply.call(null,cljs.core.hash_map,map__18082):map__18082);var opts = map__18082__$1;var statearr_18083_18086 = state;(statearr_18083_18086[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__18082,map__18082__$1,opts){
return (function (val){var statearr_18084_18087 = state;(statearr_18084_18087[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18082,map__18082__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_18085_18088 = state;(statearr_18085_18088[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18077 = null;if (arguments.length > 3) {
  p__18077 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18077);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18089){
var state = cljs.core.first(arglist__18089);
arglist__18089 = cljs.core.next(arglist__18089);
var cont_block = cljs.core.first(arglist__18089);
arglist__18089 = cljs.core.next(arglist__18089);
var ports = cljs.core.first(arglist__18089);
var p__18077 = cljs.core.rest(arglist__18089);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18077);
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
;var m = (function (){if(typeof cljs.core.async.t18209 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18209 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18210){
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
this.meta18210 = meta18210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18209.cljs$lang$type = true;
cljs.core.async.t18209.cljs$lang$ctorStr = "cljs.core.async/t18209";
cljs.core.async.t18209.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t18209");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18209.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t18209.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18209.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18209.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18209.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18209.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18209.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18209.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18211){var self__ = this;
var _18211__$1 = this;return self__.meta18210;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t18209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18211,meta18210__$1){var self__ = this;
var _18211__$1 = this;return (new cljs.core.async.t18209(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18210__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t18209 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18209(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18210){return (new cljs.core.async.t18209(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18210));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t18209(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6203__auto___18328 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___18328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___18328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18281){var state_val_18282 = (state_18281[(1)]);if((state_val_18282 === (7)))
{var inst_18225 = (state_18281[(7)]);var inst_18230 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18225);var state_18281__$1 = state_18281;var statearr_18283_18329 = state_18281__$1;(statearr_18283_18329[(2)] = inst_18230);
(statearr_18283_18329[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (20)))
{var inst_18240 = (state_18281[(8)]);var state_18281__$1 = state_18281;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18281__$1,(23),out,inst_18240);
} else
{if((state_val_18282 === (1)))
{var inst_18215 = (state_18281[(9)]);var inst_18215__$1 = calc_state.call(null);var inst_18216 = cljs.core.seq_QMARK_.call(null,inst_18215__$1);var state_18281__$1 = (function (){var statearr_18284 = state_18281;(statearr_18284[(9)] = inst_18215__$1);
return statearr_18284;
})();if(inst_18216)
{var statearr_18285_18330 = state_18281__$1;(statearr_18285_18330[(1)] = (2));
} else
{var statearr_18286_18331 = state_18281__$1;(statearr_18286_18331[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (24)))
{var inst_18233 = (state_18281[(10)]);var inst_18225 = inst_18233;var state_18281__$1 = (function (){var statearr_18287 = state_18281;(statearr_18287[(7)] = inst_18225);
return statearr_18287;
})();var statearr_18288_18332 = state_18281__$1;(statearr_18288_18332[(2)] = null);
(statearr_18288_18332[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (4)))
{var inst_18215 = (state_18281[(9)]);var inst_18221 = (state_18281[(2)]);var inst_18222 = cljs.core.get.call(null,inst_18221,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_18223 = cljs.core.get.call(null,inst_18221,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_18224 = cljs.core.get.call(null,inst_18221,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_18225 = inst_18215;var state_18281__$1 = (function (){var statearr_18289 = state_18281;(statearr_18289[(11)] = inst_18224);
(statearr_18289[(7)] = inst_18225);
(statearr_18289[(12)] = inst_18223);
(statearr_18289[(13)] = inst_18222);
return statearr_18289;
})();var statearr_18290_18333 = state_18281__$1;(statearr_18290_18333[(2)] = null);
(statearr_18290_18333[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (15)))
{var state_18281__$1 = state_18281;var statearr_18291_18334 = state_18281__$1;(statearr_18291_18334[(2)] = null);
(statearr_18291_18334[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (21)))
{var inst_18233 = (state_18281[(10)]);var inst_18225 = inst_18233;var state_18281__$1 = (function (){var statearr_18292 = state_18281;(statearr_18292[(7)] = inst_18225);
return statearr_18292;
})();var statearr_18293_18335 = state_18281__$1;(statearr_18293_18335[(2)] = null);
(statearr_18293_18335[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (13)))
{var inst_18277 = (state_18281[(2)]);var state_18281__$1 = state_18281;var statearr_18294_18336 = state_18281__$1;(statearr_18294_18336[(2)] = inst_18277);
(statearr_18294_18336[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (22)))
{var inst_18275 = (state_18281[(2)]);var state_18281__$1 = state_18281;var statearr_18295_18337 = state_18281__$1;(statearr_18295_18337[(2)] = inst_18275);
(statearr_18295_18337[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (6)))
{var inst_18279 = (state_18281[(2)]);var state_18281__$1 = state_18281;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18281__$1,inst_18279);
} else
{if((state_val_18282 === (25)))
{var state_18281__$1 = state_18281;var statearr_18296_18338 = state_18281__$1;(statearr_18296_18338[(2)] = null);
(statearr_18296_18338[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (17)))
{var inst_18255 = (state_18281[(14)]);var state_18281__$1 = state_18281;var statearr_18297_18339 = state_18281__$1;(statearr_18297_18339[(2)] = inst_18255);
(statearr_18297_18339[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (3)))
{var inst_18215 = (state_18281[(9)]);var state_18281__$1 = state_18281;var statearr_18298_18340 = state_18281__$1;(statearr_18298_18340[(2)] = inst_18215);
(statearr_18298_18340[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (12)))
{var inst_18255 = (state_18281[(14)]);var inst_18236 = (state_18281[(15)]);var inst_18241 = (state_18281[(16)]);var inst_18255__$1 = inst_18236.call(null,inst_18241);var state_18281__$1 = (function (){var statearr_18299 = state_18281;(statearr_18299[(14)] = inst_18255__$1);
return statearr_18299;
})();if(cljs.core.truth_(inst_18255__$1))
{var statearr_18300_18341 = state_18281__$1;(statearr_18300_18341[(1)] = (17));
} else
{var statearr_18301_18342 = state_18281__$1;(statearr_18301_18342[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (2)))
{var inst_18215 = (state_18281[(9)]);var inst_18218 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18215);var state_18281__$1 = state_18281;var statearr_18302_18343 = state_18281__$1;(statearr_18302_18343[(2)] = inst_18218);
(statearr_18302_18343[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (23)))
{var inst_18266 = (state_18281[(2)]);var state_18281__$1 = state_18281;if(cljs.core.truth_(inst_18266))
{var statearr_18303_18344 = state_18281__$1;(statearr_18303_18344[(1)] = (24));
} else
{var statearr_18304_18345 = state_18281__$1;(statearr_18304_18345[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (19)))
{var inst_18263 = (state_18281[(2)]);var state_18281__$1 = state_18281;if(cljs.core.truth_(inst_18263))
{var statearr_18305_18346 = state_18281__$1;(statearr_18305_18346[(1)] = (20));
} else
{var statearr_18306_18347 = state_18281__$1;(statearr_18306_18347[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (11)))
{var inst_18240 = (state_18281[(8)]);var inst_18246 = (inst_18240 == null);var state_18281__$1 = state_18281;if(cljs.core.truth_(inst_18246))
{var statearr_18307_18348 = state_18281__$1;(statearr_18307_18348[(1)] = (14));
} else
{var statearr_18308_18349 = state_18281__$1;(statearr_18308_18349[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (9)))
{var inst_18233 = (state_18281[(10)]);var inst_18233__$1 = (state_18281[(2)]);var inst_18234 = cljs.core.get.call(null,inst_18233__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_18235 = cljs.core.get.call(null,inst_18233__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_18236 = cljs.core.get.call(null,inst_18233__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_18281__$1 = (function (){var statearr_18309 = state_18281;(statearr_18309[(15)] = inst_18236);
(statearr_18309[(10)] = inst_18233__$1);
(statearr_18309[(17)] = inst_18235);
return statearr_18309;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_18281__$1,(10),inst_18234);
} else
{if((state_val_18282 === (5)))
{var inst_18225 = (state_18281[(7)]);var inst_18228 = cljs.core.seq_QMARK_.call(null,inst_18225);var state_18281__$1 = state_18281;if(inst_18228)
{var statearr_18310_18350 = state_18281__$1;(statearr_18310_18350[(1)] = (7));
} else
{var statearr_18311_18351 = state_18281__$1;(statearr_18311_18351[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (14)))
{var inst_18241 = (state_18281[(16)]);var inst_18248 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18241);var state_18281__$1 = state_18281;var statearr_18312_18352 = state_18281__$1;(statearr_18312_18352[(2)] = inst_18248);
(statearr_18312_18352[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (26)))
{var inst_18271 = (state_18281[(2)]);var state_18281__$1 = state_18281;var statearr_18313_18353 = state_18281__$1;(statearr_18313_18353[(2)] = inst_18271);
(statearr_18313_18353[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (16)))
{var inst_18251 = (state_18281[(2)]);var inst_18252 = calc_state.call(null);var inst_18225 = inst_18252;var state_18281__$1 = (function (){var statearr_18314 = state_18281;(statearr_18314[(7)] = inst_18225);
(statearr_18314[(18)] = inst_18251);
return statearr_18314;
})();var statearr_18315_18354 = state_18281__$1;(statearr_18315_18354[(2)] = null);
(statearr_18315_18354[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (10)))
{var inst_18240 = (state_18281[(8)]);var inst_18241 = (state_18281[(16)]);var inst_18239 = (state_18281[(2)]);var inst_18240__$1 = cljs.core.nth.call(null,inst_18239,(0),null);var inst_18241__$1 = cljs.core.nth.call(null,inst_18239,(1),null);var inst_18242 = (inst_18240__$1 == null);var inst_18243 = cljs.core._EQ_.call(null,inst_18241__$1,change);var inst_18244 = (inst_18242) || (inst_18243);var state_18281__$1 = (function (){var statearr_18316 = state_18281;(statearr_18316[(8)] = inst_18240__$1);
(statearr_18316[(16)] = inst_18241__$1);
return statearr_18316;
})();if(cljs.core.truth_(inst_18244))
{var statearr_18317_18355 = state_18281__$1;(statearr_18317_18355[(1)] = (11));
} else
{var statearr_18318_18356 = state_18281__$1;(statearr_18318_18356[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (18)))
{var inst_18236 = (state_18281[(15)]);var inst_18241 = (state_18281[(16)]);var inst_18235 = (state_18281[(17)]);var inst_18258 = cljs.core.empty_QMARK_.call(null,inst_18236);var inst_18259 = inst_18235.call(null,inst_18241);var inst_18260 = cljs.core.not.call(null,inst_18259);var inst_18261 = (inst_18258) && (inst_18260);var state_18281__$1 = state_18281;var statearr_18319_18357 = state_18281__$1;(statearr_18319_18357[(2)] = inst_18261);
(statearr_18319_18357[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18282 === (8)))
{var inst_18225 = (state_18281[(7)]);var state_18281__$1 = state_18281;var statearr_18320_18358 = state_18281__$1;(statearr_18320_18358[(2)] = inst_18225);
(statearr_18320_18358[(1)] = (9));
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
});})(c__6203__auto___18328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6188__auto__,c__6203__auto___18328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_18324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18324[(0)] = state_machine__6189__auto__);
(statearr_18324[(1)] = (1));
return statearr_18324;
});
var state_machine__6189__auto____1 = (function (state_18281){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_18281);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e18325){if((e18325 instanceof Object))
{var ex__6192__auto__ = e18325;var statearr_18326_18359 = state_18281;(statearr_18326_18359[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18281);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18325;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18360 = state_18281;
state_18281 = G__18360;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_18281){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_18281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___18328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6205__auto__ = (function (){var statearr_18327 = f__6204__auto__.call(null);(statearr_18327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___18328);
return statearr_18327;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___18328,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj18362 = {};return obj18362;
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
return (function (p1__18363_SHARP_){if(cljs.core.truth_(p1__18363_SHARP_.call(null,topic)))
{return p1__18363_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__18363_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3551__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t18486 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18486 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18487){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18487 = meta18487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18486.cljs$lang$type = true;
cljs.core.async.t18486.cljs$lang$ctorStr = "cljs.core.async/t18486";
cljs.core.async.t18486.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t18486");
});})(mults,ensure_mult))
;
cljs.core.async.t18486.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t18486.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t18486.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t18486.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t18486.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t18486.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t18486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t18486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18488){var self__ = this;
var _18488__$1 = this;return self__.meta18487;
});})(mults,ensure_mult))
;
cljs.core.async.t18486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18488,meta18487__$1){var self__ = this;
var _18488__$1 = this;return (new cljs.core.async.t18486(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18487__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t18486 = ((function (mults,ensure_mult){
return (function __GT_t18486(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18487){return (new cljs.core.async.t18486(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18487));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t18486(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6203__auto___18608 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___18608,mults,ensure_mult,p){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___18608,mults,ensure_mult,p){
return (function (state_18560){var state_val_18561 = (state_18560[(1)]);if((state_val_18561 === (7)))
{var inst_18556 = (state_18560[(2)]);var state_18560__$1 = state_18560;var statearr_18562_18609 = state_18560__$1;(statearr_18562_18609[(2)] = inst_18556);
(statearr_18562_18609[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (20)))
{var state_18560__$1 = state_18560;var statearr_18563_18610 = state_18560__$1;(statearr_18563_18610[(2)] = null);
(statearr_18563_18610[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (1)))
{var state_18560__$1 = state_18560;var statearr_18564_18611 = state_18560__$1;(statearr_18564_18611[(2)] = null);
(statearr_18564_18611[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (24)))
{var inst_18539 = (state_18560[(7)]);var inst_18548 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18539);var state_18560__$1 = state_18560;var statearr_18565_18612 = state_18560__$1;(statearr_18565_18612[(2)] = inst_18548);
(statearr_18565_18612[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (4)))
{var inst_18491 = (state_18560[(8)]);var inst_18491__$1 = (state_18560[(2)]);var inst_18492 = (inst_18491__$1 == null);var state_18560__$1 = (function (){var statearr_18566 = state_18560;(statearr_18566[(8)] = inst_18491__$1);
return statearr_18566;
})();if(cljs.core.truth_(inst_18492))
{var statearr_18567_18613 = state_18560__$1;(statearr_18567_18613[(1)] = (5));
} else
{var statearr_18568_18614 = state_18560__$1;(statearr_18568_18614[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (15)))
{var inst_18533 = (state_18560[(2)]);var state_18560__$1 = state_18560;var statearr_18569_18615 = state_18560__$1;(statearr_18569_18615[(2)] = inst_18533);
(statearr_18569_18615[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (21)))
{var inst_18553 = (state_18560[(2)]);var state_18560__$1 = (function (){var statearr_18570 = state_18560;(statearr_18570[(9)] = inst_18553);
return statearr_18570;
})();var statearr_18571_18616 = state_18560__$1;(statearr_18571_18616[(2)] = null);
(statearr_18571_18616[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (13)))
{var inst_18515 = (state_18560[(10)]);var inst_18517 = cljs.core.chunked_seq_QMARK_.call(null,inst_18515);var state_18560__$1 = state_18560;if(inst_18517)
{var statearr_18572_18617 = state_18560__$1;(statearr_18572_18617[(1)] = (16));
} else
{var statearr_18573_18618 = state_18560__$1;(statearr_18573_18618[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (22)))
{var inst_18545 = (state_18560[(2)]);var state_18560__$1 = state_18560;if(cljs.core.truth_(inst_18545))
{var statearr_18574_18619 = state_18560__$1;(statearr_18574_18619[(1)] = (23));
} else
{var statearr_18575_18620 = state_18560__$1;(statearr_18575_18620[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (6)))
{var inst_18491 = (state_18560[(8)]);var inst_18539 = (state_18560[(7)]);var inst_18541 = (state_18560[(11)]);var inst_18539__$1 = topic_fn.call(null,inst_18491);var inst_18540 = cljs.core.deref.call(null,mults);var inst_18541__$1 = cljs.core.get.call(null,inst_18540,inst_18539__$1);var state_18560__$1 = (function (){var statearr_18576 = state_18560;(statearr_18576[(7)] = inst_18539__$1);
(statearr_18576[(11)] = inst_18541__$1);
return statearr_18576;
})();if(cljs.core.truth_(inst_18541__$1))
{var statearr_18577_18621 = state_18560__$1;(statearr_18577_18621[(1)] = (19));
} else
{var statearr_18578_18622 = state_18560__$1;(statearr_18578_18622[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (25)))
{var inst_18550 = (state_18560[(2)]);var state_18560__$1 = state_18560;var statearr_18579_18623 = state_18560__$1;(statearr_18579_18623[(2)] = inst_18550);
(statearr_18579_18623[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (17)))
{var inst_18515 = (state_18560[(10)]);var inst_18524 = cljs.core.first.call(null,inst_18515);var inst_18525 = cljs.core.async.muxch_STAR_.call(null,inst_18524);var inst_18526 = cljs.core.async.close_BANG_.call(null,inst_18525);var inst_18527 = cljs.core.next.call(null,inst_18515);var inst_18501 = inst_18527;var inst_18502 = null;var inst_18503 = (0);var inst_18504 = (0);var state_18560__$1 = (function (){var statearr_18580 = state_18560;(statearr_18580[(12)] = inst_18502);
(statearr_18580[(13)] = inst_18501);
(statearr_18580[(14)] = inst_18526);
(statearr_18580[(15)] = inst_18503);
(statearr_18580[(16)] = inst_18504);
return statearr_18580;
})();var statearr_18581_18624 = state_18560__$1;(statearr_18581_18624[(2)] = null);
(statearr_18581_18624[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (3)))
{var inst_18558 = (state_18560[(2)]);var state_18560__$1 = state_18560;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18560__$1,inst_18558);
} else
{if((state_val_18561 === (12)))
{var inst_18535 = (state_18560[(2)]);var state_18560__$1 = state_18560;var statearr_18582_18625 = state_18560__$1;(statearr_18582_18625[(2)] = inst_18535);
(statearr_18582_18625[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (2)))
{var state_18560__$1 = state_18560;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18560__$1,(4),ch);
} else
{if((state_val_18561 === (23)))
{var state_18560__$1 = state_18560;var statearr_18583_18626 = state_18560__$1;(statearr_18583_18626[(2)] = null);
(statearr_18583_18626[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (19)))
{var inst_18491 = (state_18560[(8)]);var inst_18541 = (state_18560[(11)]);var inst_18543 = cljs.core.async.muxch_STAR_.call(null,inst_18541);var state_18560__$1 = state_18560;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18560__$1,(22),inst_18543,inst_18491);
} else
{if((state_val_18561 === (11)))
{var inst_18501 = (state_18560[(13)]);var inst_18515 = (state_18560[(10)]);var inst_18515__$1 = cljs.core.seq.call(null,inst_18501);var state_18560__$1 = (function (){var statearr_18584 = state_18560;(statearr_18584[(10)] = inst_18515__$1);
return statearr_18584;
})();if(inst_18515__$1)
{var statearr_18585_18627 = state_18560__$1;(statearr_18585_18627[(1)] = (13));
} else
{var statearr_18586_18628 = state_18560__$1;(statearr_18586_18628[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (9)))
{var inst_18537 = (state_18560[(2)]);var state_18560__$1 = state_18560;var statearr_18587_18629 = state_18560__$1;(statearr_18587_18629[(2)] = inst_18537);
(statearr_18587_18629[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (5)))
{var inst_18498 = cljs.core.deref.call(null,mults);var inst_18499 = cljs.core.vals.call(null,inst_18498);var inst_18500 = cljs.core.seq.call(null,inst_18499);var inst_18501 = inst_18500;var inst_18502 = null;var inst_18503 = (0);var inst_18504 = (0);var state_18560__$1 = (function (){var statearr_18588 = state_18560;(statearr_18588[(12)] = inst_18502);
(statearr_18588[(13)] = inst_18501);
(statearr_18588[(15)] = inst_18503);
(statearr_18588[(16)] = inst_18504);
return statearr_18588;
})();var statearr_18589_18630 = state_18560__$1;(statearr_18589_18630[(2)] = null);
(statearr_18589_18630[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (14)))
{var state_18560__$1 = state_18560;var statearr_18593_18631 = state_18560__$1;(statearr_18593_18631[(2)] = null);
(statearr_18593_18631[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (16)))
{var inst_18515 = (state_18560[(10)]);var inst_18519 = cljs.core.chunk_first.call(null,inst_18515);var inst_18520 = cljs.core.chunk_rest.call(null,inst_18515);var inst_18521 = cljs.core.count.call(null,inst_18519);var inst_18501 = inst_18520;var inst_18502 = inst_18519;var inst_18503 = inst_18521;var inst_18504 = (0);var state_18560__$1 = (function (){var statearr_18594 = state_18560;(statearr_18594[(12)] = inst_18502);
(statearr_18594[(13)] = inst_18501);
(statearr_18594[(15)] = inst_18503);
(statearr_18594[(16)] = inst_18504);
return statearr_18594;
})();var statearr_18595_18632 = state_18560__$1;(statearr_18595_18632[(2)] = null);
(statearr_18595_18632[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (10)))
{var inst_18502 = (state_18560[(12)]);var inst_18501 = (state_18560[(13)]);var inst_18503 = (state_18560[(15)]);var inst_18504 = (state_18560[(16)]);var inst_18509 = cljs.core._nth.call(null,inst_18502,inst_18504);var inst_18510 = cljs.core.async.muxch_STAR_.call(null,inst_18509);var inst_18511 = cljs.core.async.close_BANG_.call(null,inst_18510);var inst_18512 = (inst_18504 + (1));var tmp18590 = inst_18502;var tmp18591 = inst_18501;var tmp18592 = inst_18503;var inst_18501__$1 = tmp18591;var inst_18502__$1 = tmp18590;var inst_18503__$1 = tmp18592;var inst_18504__$1 = inst_18512;var state_18560__$1 = (function (){var statearr_18596 = state_18560;(statearr_18596[(12)] = inst_18502__$1);
(statearr_18596[(13)] = inst_18501__$1);
(statearr_18596[(17)] = inst_18511);
(statearr_18596[(15)] = inst_18503__$1);
(statearr_18596[(16)] = inst_18504__$1);
return statearr_18596;
})();var statearr_18597_18633 = state_18560__$1;(statearr_18597_18633[(2)] = null);
(statearr_18597_18633[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (18)))
{var inst_18530 = (state_18560[(2)]);var state_18560__$1 = state_18560;var statearr_18598_18634 = state_18560__$1;(statearr_18598_18634[(2)] = inst_18530);
(statearr_18598_18634[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18561 === (8)))
{var inst_18503 = (state_18560[(15)]);var inst_18504 = (state_18560[(16)]);var inst_18506 = (inst_18504 < inst_18503);var inst_18507 = inst_18506;var state_18560__$1 = state_18560;if(cljs.core.truth_(inst_18507))
{var statearr_18599_18635 = state_18560__$1;(statearr_18599_18635[(1)] = (10));
} else
{var statearr_18600_18636 = state_18560__$1;(statearr_18600_18636[(1)] = (11));
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
});})(c__6203__auto___18608,mults,ensure_mult,p))
;return ((function (switch__6188__auto__,c__6203__auto___18608,mults,ensure_mult,p){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_18604 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18604[(0)] = state_machine__6189__auto__);
(statearr_18604[(1)] = (1));
return statearr_18604;
});
var state_machine__6189__auto____1 = (function (state_18560){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_18560);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e18605){if((e18605 instanceof Object))
{var ex__6192__auto__ = e18605;var statearr_18606_18637 = state_18560;(statearr_18606_18637[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18560);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18605;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18638 = state_18560;
state_18560 = G__18638;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_18560){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_18560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___18608,mults,ensure_mult,p))
})();var state__6205__auto__ = (function (){var statearr_18607 = f__6204__auto__.call(null);(statearr_18607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___18608);
return statearr_18607;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___18608,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__6203__auto___18775 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___18775,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___18775,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18745){var state_val_18746 = (state_18745[(1)]);if((state_val_18746 === (7)))
{var state_18745__$1 = state_18745;var statearr_18747_18776 = state_18745__$1;(statearr_18747_18776[(2)] = null);
(statearr_18747_18776[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18746 === (1)))
{var state_18745__$1 = state_18745;var statearr_18748_18777 = state_18745__$1;(statearr_18748_18777[(2)] = null);
(statearr_18748_18777[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18746 === (4)))
{var inst_18709 = (state_18745[(7)]);var inst_18711 = (inst_18709 < cnt);var state_18745__$1 = state_18745;if(cljs.core.truth_(inst_18711))
{var statearr_18749_18778 = state_18745__$1;(statearr_18749_18778[(1)] = (6));
} else
{var statearr_18750_18779 = state_18745__$1;(statearr_18750_18779[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18746 === (15)))
{var inst_18741 = (state_18745[(2)]);var state_18745__$1 = state_18745;var statearr_18751_18780 = state_18745__$1;(statearr_18751_18780[(2)] = inst_18741);
(statearr_18751_18780[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18746 === (13)))
{var inst_18734 = cljs.core.async.close_BANG_.call(null,out);var state_18745__$1 = state_18745;var statearr_18752_18781 = state_18745__$1;(statearr_18752_18781[(2)] = inst_18734);
(statearr_18752_18781[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18746 === (6)))
{var state_18745__$1 = state_18745;var statearr_18753_18782 = state_18745__$1;(statearr_18753_18782[(2)] = null);
(statearr_18753_18782[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18746 === (3)))
{var inst_18743 = (state_18745[(2)]);var state_18745__$1 = state_18745;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18745__$1,inst_18743);
} else
{if((state_val_18746 === (12)))
{var inst_18731 = (state_18745[(8)]);var inst_18731__$1 = (state_18745[(2)]);var inst_18732 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18731__$1);var state_18745__$1 = (function (){var statearr_18754 = state_18745;(statearr_18754[(8)] = inst_18731__$1);
return statearr_18754;
})();if(cljs.core.truth_(inst_18732))
{var statearr_18755_18783 = state_18745__$1;(statearr_18755_18783[(1)] = (13));
} else
{var statearr_18756_18784 = state_18745__$1;(statearr_18756_18784[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18746 === (2)))
{var inst_18708 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_18709 = (0);var state_18745__$1 = (function (){var statearr_18757 = state_18745;(statearr_18757[(9)] = inst_18708);
(statearr_18757[(7)] = inst_18709);
return statearr_18757;
})();var statearr_18758_18785 = state_18745__$1;(statearr_18758_18785[(2)] = null);
(statearr_18758_18785[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18746 === (11)))
{var inst_18709 = (state_18745[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18745,(10),Object,null,(9));var inst_18718 = chs__$1.call(null,inst_18709);var inst_18719 = done.call(null,inst_18709);var inst_18720 = cljs.core.async.take_BANG_.call(null,inst_18718,inst_18719);var state_18745__$1 = state_18745;var statearr_18759_18786 = state_18745__$1;(statearr_18759_18786[(2)] = inst_18720);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18745__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18746 === (9)))
{var inst_18709 = (state_18745[(7)]);var inst_18722 = (state_18745[(2)]);var inst_18723 = (inst_18709 + (1));var inst_18709__$1 = inst_18723;var state_18745__$1 = (function (){var statearr_18760 = state_18745;(statearr_18760[(10)] = inst_18722);
(statearr_18760[(7)] = inst_18709__$1);
return statearr_18760;
})();var statearr_18761_18787 = state_18745__$1;(statearr_18761_18787[(2)] = null);
(statearr_18761_18787[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18746 === (5)))
{var inst_18729 = (state_18745[(2)]);var state_18745__$1 = (function (){var statearr_18762 = state_18745;(statearr_18762[(11)] = inst_18729);
return statearr_18762;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18745__$1,(12),dchan);
} else
{if((state_val_18746 === (14)))
{var inst_18731 = (state_18745[(8)]);var inst_18736 = cljs.core.apply.call(null,f,inst_18731);var state_18745__$1 = state_18745;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18745__$1,(16),out,inst_18736);
} else
{if((state_val_18746 === (16)))
{var inst_18738 = (state_18745[(2)]);var state_18745__$1 = (function (){var statearr_18763 = state_18745;(statearr_18763[(12)] = inst_18738);
return statearr_18763;
})();var statearr_18764_18788 = state_18745__$1;(statearr_18764_18788[(2)] = null);
(statearr_18764_18788[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18746 === (10)))
{var inst_18713 = (state_18745[(2)]);var inst_18714 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_18745__$1 = (function (){var statearr_18765 = state_18745;(statearr_18765[(13)] = inst_18713);
return statearr_18765;
})();var statearr_18766_18789 = state_18745__$1;(statearr_18766_18789[(2)] = inst_18714);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18745__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18746 === (8)))
{var inst_18727 = (state_18745[(2)]);var state_18745__$1 = state_18745;var statearr_18767_18790 = state_18745__$1;(statearr_18767_18790[(2)] = inst_18727);
(statearr_18767_18790[(1)] = (5));
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
});})(c__6203__auto___18775,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6188__auto__,c__6203__auto___18775,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_18771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18771[(0)] = state_machine__6189__auto__);
(statearr_18771[(1)] = (1));
return statearr_18771;
});
var state_machine__6189__auto____1 = (function (state_18745){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_18745);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e18772){if((e18772 instanceof Object))
{var ex__6192__auto__ = e18772;var statearr_18773_18791 = state_18745;(statearr_18773_18791[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18745);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18772;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18792 = state_18745;
state_18745 = G__18792;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_18745){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_18745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___18775,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6205__auto__ = (function (){var statearr_18774 = f__6204__auto__.call(null);(statearr_18774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___18775);
return statearr_18774;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___18775,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___18900 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___18900,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___18900,out){
return (function (state_18876){var state_val_18877 = (state_18876[(1)]);if((state_val_18877 === (7)))
{var inst_18856 = (state_18876[(7)]);var inst_18855 = (state_18876[(8)]);var inst_18855__$1 = (state_18876[(2)]);var inst_18856__$1 = cljs.core.nth.call(null,inst_18855__$1,(0),null);var inst_18857 = cljs.core.nth.call(null,inst_18855__$1,(1),null);var inst_18858 = (inst_18856__$1 == null);var state_18876__$1 = (function (){var statearr_18878 = state_18876;(statearr_18878[(9)] = inst_18857);
(statearr_18878[(7)] = inst_18856__$1);
(statearr_18878[(8)] = inst_18855__$1);
return statearr_18878;
})();if(cljs.core.truth_(inst_18858))
{var statearr_18879_18901 = state_18876__$1;(statearr_18879_18901[(1)] = (8));
} else
{var statearr_18880_18902 = state_18876__$1;(statearr_18880_18902[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18877 === (1)))
{var inst_18847 = cljs.core.vec.call(null,chs);var inst_18848 = inst_18847;var state_18876__$1 = (function (){var statearr_18881 = state_18876;(statearr_18881[(10)] = inst_18848);
return statearr_18881;
})();var statearr_18882_18903 = state_18876__$1;(statearr_18882_18903[(2)] = null);
(statearr_18882_18903[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18877 === (4)))
{var inst_18848 = (state_18876[(10)]);var state_18876__$1 = state_18876;return cljs.core.async.ioc_alts_BANG_.call(null,state_18876__$1,(7),inst_18848);
} else
{if((state_val_18877 === (6)))
{var inst_18872 = (state_18876[(2)]);var state_18876__$1 = state_18876;var statearr_18883_18904 = state_18876__$1;(statearr_18883_18904[(2)] = inst_18872);
(statearr_18883_18904[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18877 === (3)))
{var inst_18874 = (state_18876[(2)]);var state_18876__$1 = state_18876;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18876__$1,inst_18874);
} else
{if((state_val_18877 === (2)))
{var inst_18848 = (state_18876[(10)]);var inst_18850 = cljs.core.count.call(null,inst_18848);var inst_18851 = (inst_18850 > (0));var state_18876__$1 = state_18876;if(cljs.core.truth_(inst_18851))
{var statearr_18885_18905 = state_18876__$1;(statearr_18885_18905[(1)] = (4));
} else
{var statearr_18886_18906 = state_18876__$1;(statearr_18886_18906[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18877 === (11)))
{var inst_18848 = (state_18876[(10)]);var inst_18865 = (state_18876[(2)]);var tmp18884 = inst_18848;var inst_18848__$1 = tmp18884;var state_18876__$1 = (function (){var statearr_18887 = state_18876;(statearr_18887[(11)] = inst_18865);
(statearr_18887[(10)] = inst_18848__$1);
return statearr_18887;
})();var statearr_18888_18907 = state_18876__$1;(statearr_18888_18907[(2)] = null);
(statearr_18888_18907[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18877 === (9)))
{var inst_18856 = (state_18876[(7)]);var state_18876__$1 = state_18876;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18876__$1,(11),out,inst_18856);
} else
{if((state_val_18877 === (5)))
{var inst_18870 = cljs.core.async.close_BANG_.call(null,out);var state_18876__$1 = state_18876;var statearr_18889_18908 = state_18876__$1;(statearr_18889_18908[(2)] = inst_18870);
(statearr_18889_18908[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18877 === (10)))
{var inst_18868 = (state_18876[(2)]);var state_18876__$1 = state_18876;var statearr_18890_18909 = state_18876__$1;(statearr_18890_18909[(2)] = inst_18868);
(statearr_18890_18909[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18877 === (8)))
{var inst_18857 = (state_18876[(9)]);var inst_18856 = (state_18876[(7)]);var inst_18855 = (state_18876[(8)]);var inst_18848 = (state_18876[(10)]);var inst_18860 = (function (){var c = inst_18857;var v = inst_18856;var vec__18853 = inst_18855;var cs = inst_18848;return ((function (c,v,vec__18853,cs,inst_18857,inst_18856,inst_18855,inst_18848,state_val_18877,c__6203__auto___18900,out){
return (function (p1__18793_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__18793_SHARP_);
});
;})(c,v,vec__18853,cs,inst_18857,inst_18856,inst_18855,inst_18848,state_val_18877,c__6203__auto___18900,out))
})();var inst_18861 = cljs.core.filterv.call(null,inst_18860,inst_18848);var inst_18848__$1 = inst_18861;var state_18876__$1 = (function (){var statearr_18891 = state_18876;(statearr_18891[(10)] = inst_18848__$1);
return statearr_18891;
})();var statearr_18892_18910 = state_18876__$1;(statearr_18892_18910[(2)] = null);
(statearr_18892_18910[(1)] = (2));
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
});})(c__6203__auto___18900,out))
;return ((function (switch__6188__auto__,c__6203__auto___18900,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_18896 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18896[(0)] = state_machine__6189__auto__);
(statearr_18896[(1)] = (1));
return statearr_18896;
});
var state_machine__6189__auto____1 = (function (state_18876){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_18876);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e18897){if((e18897 instanceof Object))
{var ex__6192__auto__ = e18897;var statearr_18898_18911 = state_18876;(statearr_18898_18911[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18876);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18897;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18912 = state_18876;
state_18876 = G__18912;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_18876){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_18876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___18900,out))
})();var state__6205__auto__ = (function (){var statearr_18899 = f__6204__auto__.call(null);(statearr_18899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___18900);
return statearr_18899;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___18900,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___19005 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___19005,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___19005,out){
return (function (state_18982){var state_val_18983 = (state_18982[(1)]);if((state_val_18983 === (7)))
{var inst_18964 = (state_18982[(7)]);var inst_18964__$1 = (state_18982[(2)]);var inst_18965 = (inst_18964__$1 == null);var inst_18966 = cljs.core.not.call(null,inst_18965);var state_18982__$1 = (function (){var statearr_18984 = state_18982;(statearr_18984[(7)] = inst_18964__$1);
return statearr_18984;
})();if(inst_18966)
{var statearr_18985_19006 = state_18982__$1;(statearr_18985_19006[(1)] = (8));
} else
{var statearr_18986_19007 = state_18982__$1;(statearr_18986_19007[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18983 === (1)))
{var inst_18959 = (0);var state_18982__$1 = (function (){var statearr_18987 = state_18982;(statearr_18987[(8)] = inst_18959);
return statearr_18987;
})();var statearr_18988_19008 = state_18982__$1;(statearr_18988_19008[(2)] = null);
(statearr_18988_19008[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18983 === (4)))
{var state_18982__$1 = state_18982;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18982__$1,(7),ch);
} else
{if((state_val_18983 === (6)))
{var inst_18977 = (state_18982[(2)]);var state_18982__$1 = state_18982;var statearr_18989_19009 = state_18982__$1;(statearr_18989_19009[(2)] = inst_18977);
(statearr_18989_19009[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18983 === (3)))
{var inst_18979 = (state_18982[(2)]);var inst_18980 = cljs.core.async.close_BANG_.call(null,out);var state_18982__$1 = (function (){var statearr_18990 = state_18982;(statearr_18990[(9)] = inst_18979);
return statearr_18990;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18982__$1,inst_18980);
} else
{if((state_val_18983 === (2)))
{var inst_18959 = (state_18982[(8)]);var inst_18961 = (inst_18959 < n);var state_18982__$1 = state_18982;if(cljs.core.truth_(inst_18961))
{var statearr_18991_19010 = state_18982__$1;(statearr_18991_19010[(1)] = (4));
} else
{var statearr_18992_19011 = state_18982__$1;(statearr_18992_19011[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18983 === (11)))
{var inst_18959 = (state_18982[(8)]);var inst_18969 = (state_18982[(2)]);var inst_18970 = (inst_18959 + (1));var inst_18959__$1 = inst_18970;var state_18982__$1 = (function (){var statearr_18993 = state_18982;(statearr_18993[(8)] = inst_18959__$1);
(statearr_18993[(10)] = inst_18969);
return statearr_18993;
})();var statearr_18994_19012 = state_18982__$1;(statearr_18994_19012[(2)] = null);
(statearr_18994_19012[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18983 === (9)))
{var state_18982__$1 = state_18982;var statearr_18995_19013 = state_18982__$1;(statearr_18995_19013[(2)] = null);
(statearr_18995_19013[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18983 === (5)))
{var state_18982__$1 = state_18982;var statearr_18996_19014 = state_18982__$1;(statearr_18996_19014[(2)] = null);
(statearr_18996_19014[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18983 === (10)))
{var inst_18974 = (state_18982[(2)]);var state_18982__$1 = state_18982;var statearr_18997_19015 = state_18982__$1;(statearr_18997_19015[(2)] = inst_18974);
(statearr_18997_19015[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18983 === (8)))
{var inst_18964 = (state_18982[(7)]);var state_18982__$1 = state_18982;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18982__$1,(11),out,inst_18964);
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
});})(c__6203__auto___19005,out))
;return ((function (switch__6188__auto__,c__6203__auto___19005,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19001 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19001[(0)] = state_machine__6189__auto__);
(statearr_19001[(1)] = (1));
return statearr_19001;
});
var state_machine__6189__auto____1 = (function (state_18982){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_18982);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19002){if((e19002 instanceof Object))
{var ex__6192__auto__ = e19002;var statearr_19003_19016 = state_18982;(statearr_19003_19016[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18982);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19002;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19017 = state_18982;
state_18982 = G__19017;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_18982){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_18982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___19005,out))
})();var state__6205__auto__ = (function (){var statearr_19004 = f__6204__auto__.call(null);(statearr_19004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___19005);
return statearr_19004;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___19005,out))
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t19025 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19025 = (function (ch,f,map_LT_,meta19026){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19026 = meta19026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19025.cljs$lang$type = true;
cljs.core.async.t19025.cljs$lang$ctorStr = "cljs.core.async/t19025";
cljs.core.async.t19025.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t19025");
});
cljs.core.async.t19025.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19025.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t19025.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19025.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t19028 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19028 = (function (fn1,_,meta19026,ch,f,map_LT_,meta19029){
this.fn1 = fn1;
this._ = _;
this.meta19026 = meta19026;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19029 = meta19029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19028.cljs$lang$type = true;
cljs.core.async.t19028.cljs$lang$ctorStr = "cljs.core.async/t19028";
cljs.core.async.t19028.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t19028");
});})(___$1))
;
cljs.core.async.t19028.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t19028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t19028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__19018_SHARP_){return f1.call(null,(((p1__19018_SHARP_ == null))?null:self__.f.call(null,p1__19018_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t19028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19030){var self__ = this;
var _19030__$1 = this;return self__.meta19029;
});})(___$1))
;
cljs.core.async.t19028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19030,meta19029__$1){var self__ = this;
var _19030__$1 = this;return (new cljs.core.async.t19028(self__.fn1,self__._,self__.meta19026,self__.ch,self__.f,self__.map_LT_,meta19029__$1));
});})(___$1))
;
cljs.core.async.__GT_t19028 = ((function (___$1){
return (function __GT_t19028(fn1__$1,___$2,meta19026__$1,ch__$2,f__$2,map_LT___$2,meta19029){return (new cljs.core.async.t19028(fn1__$1,___$2,meta19026__$1,ch__$2,f__$2,map_LT___$2,meta19029));
});})(___$1))
;
}
return (new cljs.core.async.t19028(fn1,___$1,self__.meta19026,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t19025.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19025.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19025.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t19025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19027){var self__ = this;
var _19027__$1 = this;return self__.meta19026;
});
cljs.core.async.t19025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19027,meta19026__$1){var self__ = this;
var _19027__$1 = this;return (new cljs.core.async.t19025(self__.ch,self__.f,self__.map_LT_,meta19026__$1));
});
cljs.core.async.__GT_t19025 = (function __GT_t19025(ch__$1,f__$1,map_LT___$1,meta19026){return (new cljs.core.async.t19025(ch__$1,f__$1,map_LT___$1,meta19026));
});
}
return (new cljs.core.async.t19025(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t19034 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19034 = (function (ch,f,map_GT_,meta19035){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19035 = meta19035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19034.cljs$lang$type = true;
cljs.core.async.t19034.cljs$lang$ctorStr = "cljs.core.async/t19034";
cljs.core.async.t19034.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t19034");
});
cljs.core.async.t19034.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19034.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t19034.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19034.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19034.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19034.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19036){var self__ = this;
var _19036__$1 = this;return self__.meta19035;
});
cljs.core.async.t19034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19036,meta19035__$1){var self__ = this;
var _19036__$1 = this;return (new cljs.core.async.t19034(self__.ch,self__.f,self__.map_GT_,meta19035__$1));
});
cljs.core.async.__GT_t19034 = (function __GT_t19034(ch__$1,f__$1,map_GT___$1,meta19035){return (new cljs.core.async.t19034(ch__$1,f__$1,map_GT___$1,meta19035));
});
}
return (new cljs.core.async.t19034(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t19040 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19040 = (function (ch,p,filter_GT_,meta19041){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19041 = meta19041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19040.cljs$lang$type = true;
cljs.core.async.t19040.cljs$lang$ctorStr = "cljs.core.async/t19040";
cljs.core.async.t19040.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t19040");
});
cljs.core.async.t19040.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t19040.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t19040.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t19040.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t19040.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t19040.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t19040.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t19040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19042){var self__ = this;
var _19042__$1 = this;return self__.meta19041;
});
cljs.core.async.t19040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19042,meta19041__$1){var self__ = this;
var _19042__$1 = this;return (new cljs.core.async.t19040(self__.ch,self__.p,self__.filter_GT_,meta19041__$1));
});
cljs.core.async.__GT_t19040 = (function __GT_t19040(ch__$1,p__$1,filter_GT___$1,meta19041){return (new cljs.core.async.t19040(ch__$1,p__$1,filter_GT___$1,meta19041));
});
}
return (new cljs.core.async.t19040(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___19125 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___19125,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___19125,out){
return (function (state_19104){var state_val_19105 = (state_19104[(1)]);if((state_val_19105 === (7)))
{var inst_19100 = (state_19104[(2)]);var state_19104__$1 = state_19104;var statearr_19106_19126 = state_19104__$1;(statearr_19106_19126[(2)] = inst_19100);
(statearr_19106_19126[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19105 === (1)))
{var state_19104__$1 = state_19104;var statearr_19107_19127 = state_19104__$1;(statearr_19107_19127[(2)] = null);
(statearr_19107_19127[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19105 === (4)))
{var inst_19086 = (state_19104[(7)]);var inst_19086__$1 = (state_19104[(2)]);var inst_19087 = (inst_19086__$1 == null);var state_19104__$1 = (function (){var statearr_19108 = state_19104;(statearr_19108[(7)] = inst_19086__$1);
return statearr_19108;
})();if(cljs.core.truth_(inst_19087))
{var statearr_19109_19128 = state_19104__$1;(statearr_19109_19128[(1)] = (5));
} else
{var statearr_19110_19129 = state_19104__$1;(statearr_19110_19129[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19105 === (6)))
{var inst_19086 = (state_19104[(7)]);var inst_19091 = p.call(null,inst_19086);var state_19104__$1 = state_19104;if(cljs.core.truth_(inst_19091))
{var statearr_19111_19130 = state_19104__$1;(statearr_19111_19130[(1)] = (8));
} else
{var statearr_19112_19131 = state_19104__$1;(statearr_19112_19131[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19105 === (3)))
{var inst_19102 = (state_19104[(2)]);var state_19104__$1 = state_19104;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19104__$1,inst_19102);
} else
{if((state_val_19105 === (2)))
{var state_19104__$1 = state_19104;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19104__$1,(4),ch);
} else
{if((state_val_19105 === (11)))
{var inst_19094 = (state_19104[(2)]);var state_19104__$1 = state_19104;var statearr_19113_19132 = state_19104__$1;(statearr_19113_19132[(2)] = inst_19094);
(statearr_19113_19132[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19105 === (9)))
{var state_19104__$1 = state_19104;var statearr_19114_19133 = state_19104__$1;(statearr_19114_19133[(2)] = null);
(statearr_19114_19133[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19105 === (5)))
{var inst_19089 = cljs.core.async.close_BANG_.call(null,out);var state_19104__$1 = state_19104;var statearr_19115_19134 = state_19104__$1;(statearr_19115_19134[(2)] = inst_19089);
(statearr_19115_19134[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19105 === (10)))
{var inst_19097 = (state_19104[(2)]);var state_19104__$1 = (function (){var statearr_19116 = state_19104;(statearr_19116[(8)] = inst_19097);
return statearr_19116;
})();var statearr_19117_19135 = state_19104__$1;(statearr_19117_19135[(2)] = null);
(statearr_19117_19135[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19105 === (8)))
{var inst_19086 = (state_19104[(7)]);var state_19104__$1 = state_19104;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19104__$1,(11),out,inst_19086);
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
});})(c__6203__auto___19125,out))
;return ((function (switch__6188__auto__,c__6203__auto___19125,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19121 = [null,null,null,null,null,null,null,null,null];(statearr_19121[(0)] = state_machine__6189__auto__);
(statearr_19121[(1)] = (1));
return statearr_19121;
});
var state_machine__6189__auto____1 = (function (state_19104){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19104);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19122){if((e19122 instanceof Object))
{var ex__6192__auto__ = e19122;var statearr_19123_19136 = state_19104;(statearr_19123_19136[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19104);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19122;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19137 = state_19104;
state_19104 = G__19137;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19104){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___19125,out))
})();var state__6205__auto__ = (function (){var statearr_19124 = f__6204__auto__.call(null);(statearr_19124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___19125);
return statearr_19124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___19125,out))
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
return (function (state_19303){var state_val_19304 = (state_19303[(1)]);if((state_val_19304 === (7)))
{var inst_19299 = (state_19303[(2)]);var state_19303__$1 = state_19303;var statearr_19305_19346 = state_19303__$1;(statearr_19305_19346[(2)] = inst_19299);
(statearr_19305_19346[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (20)))
{var inst_19269 = (state_19303[(7)]);var inst_19280 = (state_19303[(2)]);var inst_19281 = cljs.core.next.call(null,inst_19269);var inst_19255 = inst_19281;var inst_19256 = null;var inst_19257 = (0);var inst_19258 = (0);var state_19303__$1 = (function (){var statearr_19306 = state_19303;(statearr_19306[(8)] = inst_19256);
(statearr_19306[(9)] = inst_19257);
(statearr_19306[(10)] = inst_19255);
(statearr_19306[(11)] = inst_19258);
(statearr_19306[(12)] = inst_19280);
return statearr_19306;
})();var statearr_19307_19347 = state_19303__$1;(statearr_19307_19347[(2)] = null);
(statearr_19307_19347[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (1)))
{var state_19303__$1 = state_19303;var statearr_19308_19348 = state_19303__$1;(statearr_19308_19348[(2)] = null);
(statearr_19308_19348[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (4)))
{var inst_19244 = (state_19303[(13)]);var inst_19244__$1 = (state_19303[(2)]);var inst_19245 = (inst_19244__$1 == null);var state_19303__$1 = (function (){var statearr_19309 = state_19303;(statearr_19309[(13)] = inst_19244__$1);
return statearr_19309;
})();if(cljs.core.truth_(inst_19245))
{var statearr_19310_19349 = state_19303__$1;(statearr_19310_19349[(1)] = (5));
} else
{var statearr_19311_19350 = state_19303__$1;(statearr_19311_19350[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (15)))
{var state_19303__$1 = state_19303;var statearr_19315_19351 = state_19303__$1;(statearr_19315_19351[(2)] = null);
(statearr_19315_19351[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (21)))
{var state_19303__$1 = state_19303;var statearr_19316_19352 = state_19303__$1;(statearr_19316_19352[(2)] = null);
(statearr_19316_19352[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (13)))
{var inst_19256 = (state_19303[(8)]);var inst_19257 = (state_19303[(9)]);var inst_19255 = (state_19303[(10)]);var inst_19258 = (state_19303[(11)]);var inst_19265 = (state_19303[(2)]);var inst_19266 = (inst_19258 + (1));var tmp19312 = inst_19256;var tmp19313 = inst_19257;var tmp19314 = inst_19255;var inst_19255__$1 = tmp19314;var inst_19256__$1 = tmp19312;var inst_19257__$1 = tmp19313;var inst_19258__$1 = inst_19266;var state_19303__$1 = (function (){var statearr_19317 = state_19303;(statearr_19317[(8)] = inst_19256__$1);
(statearr_19317[(9)] = inst_19257__$1);
(statearr_19317[(10)] = inst_19255__$1);
(statearr_19317[(11)] = inst_19258__$1);
(statearr_19317[(14)] = inst_19265);
return statearr_19317;
})();var statearr_19318_19353 = state_19303__$1;(statearr_19318_19353[(2)] = null);
(statearr_19318_19353[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (22)))
{var state_19303__$1 = state_19303;var statearr_19319_19354 = state_19303__$1;(statearr_19319_19354[(2)] = null);
(statearr_19319_19354[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (6)))
{var inst_19244 = (state_19303[(13)]);var inst_19253 = f.call(null,inst_19244);var inst_19254 = cljs.core.seq.call(null,inst_19253);var inst_19255 = inst_19254;var inst_19256 = null;var inst_19257 = (0);var inst_19258 = (0);var state_19303__$1 = (function (){var statearr_19320 = state_19303;(statearr_19320[(8)] = inst_19256);
(statearr_19320[(9)] = inst_19257);
(statearr_19320[(10)] = inst_19255);
(statearr_19320[(11)] = inst_19258);
return statearr_19320;
})();var statearr_19321_19355 = state_19303__$1;(statearr_19321_19355[(2)] = null);
(statearr_19321_19355[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (17)))
{var inst_19269 = (state_19303[(7)]);var inst_19273 = cljs.core.chunk_first.call(null,inst_19269);var inst_19274 = cljs.core.chunk_rest.call(null,inst_19269);var inst_19275 = cljs.core.count.call(null,inst_19273);var inst_19255 = inst_19274;var inst_19256 = inst_19273;var inst_19257 = inst_19275;var inst_19258 = (0);var state_19303__$1 = (function (){var statearr_19322 = state_19303;(statearr_19322[(8)] = inst_19256);
(statearr_19322[(9)] = inst_19257);
(statearr_19322[(10)] = inst_19255);
(statearr_19322[(11)] = inst_19258);
return statearr_19322;
})();var statearr_19323_19356 = state_19303__$1;(statearr_19323_19356[(2)] = null);
(statearr_19323_19356[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (3)))
{var inst_19301 = (state_19303[(2)]);var state_19303__$1 = state_19303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19303__$1,inst_19301);
} else
{if((state_val_19304 === (12)))
{var inst_19289 = (state_19303[(2)]);var state_19303__$1 = state_19303;var statearr_19324_19357 = state_19303__$1;(statearr_19324_19357[(2)] = inst_19289);
(statearr_19324_19357[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (2)))
{var state_19303__$1 = state_19303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19303__$1,(4),in$);
} else
{if((state_val_19304 === (23)))
{var inst_19297 = (state_19303[(2)]);var state_19303__$1 = state_19303;var statearr_19325_19358 = state_19303__$1;(statearr_19325_19358[(2)] = inst_19297);
(statearr_19325_19358[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (19)))
{var inst_19284 = (state_19303[(2)]);var state_19303__$1 = state_19303;var statearr_19326_19359 = state_19303__$1;(statearr_19326_19359[(2)] = inst_19284);
(statearr_19326_19359[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (11)))
{var inst_19255 = (state_19303[(10)]);var inst_19269 = (state_19303[(7)]);var inst_19269__$1 = cljs.core.seq.call(null,inst_19255);var state_19303__$1 = (function (){var statearr_19327 = state_19303;(statearr_19327[(7)] = inst_19269__$1);
return statearr_19327;
})();if(inst_19269__$1)
{var statearr_19328_19360 = state_19303__$1;(statearr_19328_19360[(1)] = (14));
} else
{var statearr_19329_19361 = state_19303__$1;(statearr_19329_19361[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (9)))
{var inst_19291 = (state_19303[(2)]);var inst_19292 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_19303__$1 = (function (){var statearr_19330 = state_19303;(statearr_19330[(15)] = inst_19291);
return statearr_19330;
})();if(cljs.core.truth_(inst_19292))
{var statearr_19331_19362 = state_19303__$1;(statearr_19331_19362[(1)] = (21));
} else
{var statearr_19332_19363 = state_19303__$1;(statearr_19332_19363[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (5)))
{var inst_19247 = cljs.core.async.close_BANG_.call(null,out);var state_19303__$1 = state_19303;var statearr_19333_19364 = state_19303__$1;(statearr_19333_19364[(2)] = inst_19247);
(statearr_19333_19364[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (14)))
{var inst_19269 = (state_19303[(7)]);var inst_19271 = cljs.core.chunked_seq_QMARK_.call(null,inst_19269);var state_19303__$1 = state_19303;if(inst_19271)
{var statearr_19334_19365 = state_19303__$1;(statearr_19334_19365[(1)] = (17));
} else
{var statearr_19335_19366 = state_19303__$1;(statearr_19335_19366[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (16)))
{var inst_19287 = (state_19303[(2)]);var state_19303__$1 = state_19303;var statearr_19336_19367 = state_19303__$1;(statearr_19336_19367[(2)] = inst_19287);
(statearr_19336_19367[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19304 === (10)))
{var inst_19256 = (state_19303[(8)]);var inst_19258 = (state_19303[(11)]);var inst_19263 = cljs.core._nth.call(null,inst_19256,inst_19258);var state_19303__$1 = state_19303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19303__$1,(13),out,inst_19263);
} else
{if((state_val_19304 === (18)))
{var inst_19269 = (state_19303[(7)]);var inst_19278 = cljs.core.first.call(null,inst_19269);var state_19303__$1 = state_19303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19303__$1,(20),out,inst_19278);
} else
{if((state_val_19304 === (8)))
{var inst_19257 = (state_19303[(9)]);var inst_19258 = (state_19303[(11)]);var inst_19260 = (inst_19258 < inst_19257);var inst_19261 = inst_19260;var state_19303__$1 = state_19303;if(cljs.core.truth_(inst_19261))
{var statearr_19337_19368 = state_19303__$1;(statearr_19337_19368[(1)] = (10));
} else
{var statearr_19338_19369 = state_19303__$1;(statearr_19338_19369[(1)] = (11));
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
var state_machine__6189__auto____0 = (function (){var statearr_19342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19342[(0)] = state_machine__6189__auto__);
(statearr_19342[(1)] = (1));
return statearr_19342;
});
var state_machine__6189__auto____1 = (function (state_19303){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19303);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19343){if((e19343 instanceof Object))
{var ex__6192__auto__ = e19343;var statearr_19344_19370 = state_19303;(statearr_19344_19370[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19303);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19343;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19371 = state_19303;
state_19303 = G__19371;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19303){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_19345 = f__6204__auto__.call(null);(statearr_19345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_19345;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___19468 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___19468,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___19468,out){
return (function (state_19443){var state_val_19444 = (state_19443[(1)]);if((state_val_19444 === (7)))
{var inst_19438 = (state_19443[(2)]);var state_19443__$1 = state_19443;var statearr_19445_19469 = state_19443__$1;(statearr_19445_19469[(2)] = inst_19438);
(statearr_19445_19469[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19444 === (1)))
{var inst_19420 = null;var state_19443__$1 = (function (){var statearr_19446 = state_19443;(statearr_19446[(7)] = inst_19420);
return statearr_19446;
})();var statearr_19447_19470 = state_19443__$1;(statearr_19447_19470[(2)] = null);
(statearr_19447_19470[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19444 === (4)))
{var inst_19423 = (state_19443[(8)]);var inst_19423__$1 = (state_19443[(2)]);var inst_19424 = (inst_19423__$1 == null);var inst_19425 = cljs.core.not.call(null,inst_19424);var state_19443__$1 = (function (){var statearr_19448 = state_19443;(statearr_19448[(8)] = inst_19423__$1);
return statearr_19448;
})();if(inst_19425)
{var statearr_19449_19471 = state_19443__$1;(statearr_19449_19471[(1)] = (5));
} else
{var statearr_19450_19472 = state_19443__$1;(statearr_19450_19472[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19444 === (6)))
{var state_19443__$1 = state_19443;var statearr_19451_19473 = state_19443__$1;(statearr_19451_19473[(2)] = null);
(statearr_19451_19473[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19444 === (3)))
{var inst_19440 = (state_19443[(2)]);var inst_19441 = cljs.core.async.close_BANG_.call(null,out);var state_19443__$1 = (function (){var statearr_19452 = state_19443;(statearr_19452[(9)] = inst_19440);
return statearr_19452;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19443__$1,inst_19441);
} else
{if((state_val_19444 === (2)))
{var state_19443__$1 = state_19443;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19443__$1,(4),ch);
} else
{if((state_val_19444 === (11)))
{var inst_19423 = (state_19443[(8)]);var inst_19432 = (state_19443[(2)]);var inst_19420 = inst_19423;var state_19443__$1 = (function (){var statearr_19453 = state_19443;(statearr_19453[(10)] = inst_19432);
(statearr_19453[(7)] = inst_19420);
return statearr_19453;
})();var statearr_19454_19474 = state_19443__$1;(statearr_19454_19474[(2)] = null);
(statearr_19454_19474[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19444 === (9)))
{var inst_19423 = (state_19443[(8)]);var state_19443__$1 = state_19443;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19443__$1,(11),out,inst_19423);
} else
{if((state_val_19444 === (5)))
{var inst_19420 = (state_19443[(7)]);var inst_19423 = (state_19443[(8)]);var inst_19427 = cljs.core._EQ_.call(null,inst_19423,inst_19420);var state_19443__$1 = state_19443;if(inst_19427)
{var statearr_19456_19475 = state_19443__$1;(statearr_19456_19475[(1)] = (8));
} else
{var statearr_19457_19476 = state_19443__$1;(statearr_19457_19476[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19444 === (10)))
{var inst_19435 = (state_19443[(2)]);var state_19443__$1 = state_19443;var statearr_19458_19477 = state_19443__$1;(statearr_19458_19477[(2)] = inst_19435);
(statearr_19458_19477[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19444 === (8)))
{var inst_19420 = (state_19443[(7)]);var tmp19455 = inst_19420;var inst_19420__$1 = tmp19455;var state_19443__$1 = (function (){var statearr_19459 = state_19443;(statearr_19459[(7)] = inst_19420__$1);
return statearr_19459;
})();var statearr_19460_19478 = state_19443__$1;(statearr_19460_19478[(2)] = null);
(statearr_19460_19478[(1)] = (2));
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
});})(c__6203__auto___19468,out))
;return ((function (switch__6188__auto__,c__6203__auto___19468,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19464 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_19464[(0)] = state_machine__6189__auto__);
(statearr_19464[(1)] = (1));
return statearr_19464;
});
var state_machine__6189__auto____1 = (function (state_19443){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19443);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19465){if((e19465 instanceof Object))
{var ex__6192__auto__ = e19465;var statearr_19466_19479 = state_19443;(statearr_19466_19479[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19443);
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
var G__19480 = state_19443;
state_19443 = G__19480;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19443){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___19468,out))
})();var state__6205__auto__ = (function (){var statearr_19467 = f__6204__auto__.call(null);(statearr_19467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___19468);
return statearr_19467;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___19468,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___19615 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___19615,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___19615,out){
return (function (state_19585){var state_val_19586 = (state_19585[(1)]);if((state_val_19586 === (7)))
{var inst_19581 = (state_19585[(2)]);var state_19585__$1 = state_19585;var statearr_19587_19616 = state_19585__$1;(statearr_19587_19616[(2)] = inst_19581);
(statearr_19587_19616[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19586 === (1)))
{var inst_19548 = (new Array(n));var inst_19549 = inst_19548;var inst_19550 = (0);var state_19585__$1 = (function (){var statearr_19588 = state_19585;(statearr_19588[(7)] = inst_19550);
(statearr_19588[(8)] = inst_19549);
return statearr_19588;
})();var statearr_19589_19617 = state_19585__$1;(statearr_19589_19617[(2)] = null);
(statearr_19589_19617[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19586 === (4)))
{var inst_19553 = (state_19585[(9)]);var inst_19553__$1 = (state_19585[(2)]);var inst_19554 = (inst_19553__$1 == null);var inst_19555 = cljs.core.not.call(null,inst_19554);var state_19585__$1 = (function (){var statearr_19590 = state_19585;(statearr_19590[(9)] = inst_19553__$1);
return statearr_19590;
})();if(inst_19555)
{var statearr_19591_19618 = state_19585__$1;(statearr_19591_19618[(1)] = (5));
} else
{var statearr_19592_19619 = state_19585__$1;(statearr_19592_19619[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19586 === (15)))
{var inst_19575 = (state_19585[(2)]);var state_19585__$1 = state_19585;var statearr_19593_19620 = state_19585__$1;(statearr_19593_19620[(2)] = inst_19575);
(statearr_19593_19620[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19586 === (13)))
{var state_19585__$1 = state_19585;var statearr_19594_19621 = state_19585__$1;(statearr_19594_19621[(2)] = null);
(statearr_19594_19621[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19586 === (6)))
{var inst_19550 = (state_19585[(7)]);var inst_19571 = (inst_19550 > (0));var state_19585__$1 = state_19585;if(cljs.core.truth_(inst_19571))
{var statearr_19595_19622 = state_19585__$1;(statearr_19595_19622[(1)] = (12));
} else
{var statearr_19596_19623 = state_19585__$1;(statearr_19596_19623[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19586 === (3)))
{var inst_19583 = (state_19585[(2)]);var state_19585__$1 = state_19585;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19585__$1,inst_19583);
} else
{if((state_val_19586 === (12)))
{var inst_19549 = (state_19585[(8)]);var inst_19573 = cljs.core.vec.call(null,inst_19549);var state_19585__$1 = state_19585;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19585__$1,(15),out,inst_19573);
} else
{if((state_val_19586 === (2)))
{var state_19585__$1 = state_19585;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19585__$1,(4),ch);
} else
{if((state_val_19586 === (11)))
{var inst_19565 = (state_19585[(2)]);var inst_19566 = (new Array(n));var inst_19549 = inst_19566;var inst_19550 = (0);var state_19585__$1 = (function (){var statearr_19597 = state_19585;(statearr_19597[(10)] = inst_19565);
(statearr_19597[(7)] = inst_19550);
(statearr_19597[(8)] = inst_19549);
return statearr_19597;
})();var statearr_19598_19624 = state_19585__$1;(statearr_19598_19624[(2)] = null);
(statearr_19598_19624[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19586 === (9)))
{var inst_19549 = (state_19585[(8)]);var inst_19563 = cljs.core.vec.call(null,inst_19549);var state_19585__$1 = state_19585;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19585__$1,(11),out,inst_19563);
} else
{if((state_val_19586 === (5)))
{var inst_19558 = (state_19585[(11)]);var inst_19550 = (state_19585[(7)]);var inst_19549 = (state_19585[(8)]);var inst_19553 = (state_19585[(9)]);var inst_19557 = (inst_19549[inst_19550] = inst_19553);var inst_19558__$1 = (inst_19550 + (1));var inst_19559 = (inst_19558__$1 < n);var state_19585__$1 = (function (){var statearr_19599 = state_19585;(statearr_19599[(11)] = inst_19558__$1);
(statearr_19599[(12)] = inst_19557);
return statearr_19599;
})();if(cljs.core.truth_(inst_19559))
{var statearr_19600_19625 = state_19585__$1;(statearr_19600_19625[(1)] = (8));
} else
{var statearr_19601_19626 = state_19585__$1;(statearr_19601_19626[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19586 === (14)))
{var inst_19578 = (state_19585[(2)]);var inst_19579 = cljs.core.async.close_BANG_.call(null,out);var state_19585__$1 = (function (){var statearr_19603 = state_19585;(statearr_19603[(13)] = inst_19578);
return statearr_19603;
})();var statearr_19604_19627 = state_19585__$1;(statearr_19604_19627[(2)] = inst_19579);
(statearr_19604_19627[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19586 === (10)))
{var inst_19569 = (state_19585[(2)]);var state_19585__$1 = state_19585;var statearr_19605_19628 = state_19585__$1;(statearr_19605_19628[(2)] = inst_19569);
(statearr_19605_19628[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19586 === (8)))
{var inst_19558 = (state_19585[(11)]);var inst_19549 = (state_19585[(8)]);var tmp19602 = inst_19549;var inst_19549__$1 = tmp19602;var inst_19550 = inst_19558;var state_19585__$1 = (function (){var statearr_19606 = state_19585;(statearr_19606[(7)] = inst_19550);
(statearr_19606[(8)] = inst_19549__$1);
return statearr_19606;
})();var statearr_19607_19629 = state_19585__$1;(statearr_19607_19629[(2)] = null);
(statearr_19607_19629[(1)] = (2));
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
});})(c__6203__auto___19615,out))
;return ((function (switch__6188__auto__,c__6203__auto___19615,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19611[(0)] = state_machine__6189__auto__);
(statearr_19611[(1)] = (1));
return statearr_19611;
});
var state_machine__6189__auto____1 = (function (state_19585){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19585);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19612){if((e19612 instanceof Object))
{var ex__6192__auto__ = e19612;var statearr_19613_19630 = state_19585;(statearr_19613_19630[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19585);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19612;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19631 = state_19585;
state_19585 = G__19631;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19585){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___19615,out))
})();var state__6205__auto__ = (function (){var statearr_19614 = f__6204__auto__.call(null);(statearr_19614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___19615);
return statearr_19614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___19615,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6203__auto___19774 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___19774,out){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___19774,out){
return (function (state_19744){var state_val_19745 = (state_19744[(1)]);if((state_val_19745 === (7)))
{var inst_19740 = (state_19744[(2)]);var state_19744__$1 = state_19744;var statearr_19746_19775 = state_19744__$1;(statearr_19746_19775[(2)] = inst_19740);
(statearr_19746_19775[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19745 === (1)))
{var inst_19703 = [];var inst_19704 = inst_19703;var inst_19705 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_19744__$1 = (function (){var statearr_19747 = state_19744;(statearr_19747[(7)] = inst_19705);
(statearr_19747[(8)] = inst_19704);
return statearr_19747;
})();var statearr_19748_19776 = state_19744__$1;(statearr_19748_19776[(2)] = null);
(statearr_19748_19776[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19745 === (4)))
{var inst_19708 = (state_19744[(9)]);var inst_19708__$1 = (state_19744[(2)]);var inst_19709 = (inst_19708__$1 == null);var inst_19710 = cljs.core.not.call(null,inst_19709);var state_19744__$1 = (function (){var statearr_19749 = state_19744;(statearr_19749[(9)] = inst_19708__$1);
return statearr_19749;
})();if(inst_19710)
{var statearr_19750_19777 = state_19744__$1;(statearr_19750_19777[(1)] = (5));
} else
{var statearr_19751_19778 = state_19744__$1;(statearr_19751_19778[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19745 === (15)))
{var inst_19734 = (state_19744[(2)]);var state_19744__$1 = state_19744;var statearr_19752_19779 = state_19744__$1;(statearr_19752_19779[(2)] = inst_19734);
(statearr_19752_19779[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19745 === (13)))
{var state_19744__$1 = state_19744;var statearr_19753_19780 = state_19744__$1;(statearr_19753_19780[(2)] = null);
(statearr_19753_19780[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19745 === (6)))
{var inst_19704 = (state_19744[(8)]);var inst_19729 = inst_19704.length;var inst_19730 = (inst_19729 > (0));var state_19744__$1 = state_19744;if(cljs.core.truth_(inst_19730))
{var statearr_19754_19781 = state_19744__$1;(statearr_19754_19781[(1)] = (12));
} else
{var statearr_19755_19782 = state_19744__$1;(statearr_19755_19782[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19745 === (3)))
{var inst_19742 = (state_19744[(2)]);var state_19744__$1 = state_19744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19744__$1,inst_19742);
} else
{if((state_val_19745 === (12)))
{var inst_19704 = (state_19744[(8)]);var inst_19732 = cljs.core.vec.call(null,inst_19704);var state_19744__$1 = state_19744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19744__$1,(15),out,inst_19732);
} else
{if((state_val_19745 === (2)))
{var state_19744__$1 = state_19744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19744__$1,(4),ch);
} else
{if((state_val_19745 === (11)))
{var inst_19712 = (state_19744[(10)]);var inst_19708 = (state_19744[(9)]);var inst_19722 = (state_19744[(2)]);var inst_19723 = [];var inst_19724 = inst_19723.push(inst_19708);var inst_19704 = inst_19723;var inst_19705 = inst_19712;var state_19744__$1 = (function (){var statearr_19756 = state_19744;(statearr_19756[(7)] = inst_19705);
(statearr_19756[(11)] = inst_19722);
(statearr_19756[(8)] = inst_19704);
(statearr_19756[(12)] = inst_19724);
return statearr_19756;
})();var statearr_19757_19783 = state_19744__$1;(statearr_19757_19783[(2)] = null);
(statearr_19757_19783[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19745 === (9)))
{var inst_19704 = (state_19744[(8)]);var inst_19720 = cljs.core.vec.call(null,inst_19704);var state_19744__$1 = state_19744;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19744__$1,(11),out,inst_19720);
} else
{if((state_val_19745 === (5)))
{var inst_19705 = (state_19744[(7)]);var inst_19712 = (state_19744[(10)]);var inst_19708 = (state_19744[(9)]);var inst_19712__$1 = f.call(null,inst_19708);var inst_19713 = cljs.core._EQ_.call(null,inst_19712__$1,inst_19705);var inst_19714 = cljs.core.keyword_identical_QMARK_.call(null,inst_19705,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_19715 = (inst_19713) || (inst_19714);var state_19744__$1 = (function (){var statearr_19758 = state_19744;(statearr_19758[(10)] = inst_19712__$1);
return statearr_19758;
})();if(cljs.core.truth_(inst_19715))
{var statearr_19759_19784 = state_19744__$1;(statearr_19759_19784[(1)] = (8));
} else
{var statearr_19760_19785 = state_19744__$1;(statearr_19760_19785[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19745 === (14)))
{var inst_19737 = (state_19744[(2)]);var inst_19738 = cljs.core.async.close_BANG_.call(null,out);var state_19744__$1 = (function (){var statearr_19762 = state_19744;(statearr_19762[(13)] = inst_19737);
return statearr_19762;
})();var statearr_19763_19786 = state_19744__$1;(statearr_19763_19786[(2)] = inst_19738);
(statearr_19763_19786[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19745 === (10)))
{var inst_19727 = (state_19744[(2)]);var state_19744__$1 = state_19744;var statearr_19764_19787 = state_19744__$1;(statearr_19764_19787[(2)] = inst_19727);
(statearr_19764_19787[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19745 === (8)))
{var inst_19712 = (state_19744[(10)]);var inst_19704 = (state_19744[(8)]);var inst_19708 = (state_19744[(9)]);var inst_19717 = inst_19704.push(inst_19708);var tmp19761 = inst_19704;var inst_19704__$1 = tmp19761;var inst_19705 = inst_19712;var state_19744__$1 = (function (){var statearr_19765 = state_19744;(statearr_19765[(7)] = inst_19705);
(statearr_19765[(8)] = inst_19704__$1);
(statearr_19765[(14)] = inst_19717);
return statearr_19765;
})();var statearr_19766_19788 = state_19744__$1;(statearr_19766_19788[(2)] = null);
(statearr_19766_19788[(1)] = (2));
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
});})(c__6203__auto___19774,out))
;return ((function (switch__6188__auto__,c__6203__auto___19774,out){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_19770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19770[(0)] = state_machine__6189__auto__);
(statearr_19770[(1)] = (1));
return statearr_19770;
});
var state_machine__6189__auto____1 = (function (state_19744){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_19744);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e19771){if((e19771 instanceof Object))
{var ex__6192__auto__ = e19771;var statearr_19772_19789 = state_19744;(statearr_19772_19789[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19744);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19771;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19790 = state_19744;
state_19744 = G__19790;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_19744){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_19744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___19774,out))
})();var state__6205__auto__ = (function (){var statearr_19773 = f__6204__auto__.call(null);(statearr_19773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___19774);
return statearr_19773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___19774,out))
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
