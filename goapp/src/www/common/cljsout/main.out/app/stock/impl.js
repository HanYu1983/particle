// Compiled by ClojureScript 1.10.238 {}
goog.provide('app.stock.impl');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('stock.formula');
goog.require('stock.tool');
goog.require('stock.drawer');
goog.require('app.stock.cmd');
goog.require('app.stock.abstract$');
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,data,ctx){
console.log(["onSystem-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''));

console.log(cljs.core.pr_str.call(null,data));

return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"view",(function (type,data,ctx){
var vec__10706 = data;
var err = cljs.core.nth.call(null,vec__10706,(0),null);
var data__$1 = cljs.core.nth.call(null,vec__10706,(1),null);
var request = cljs.core.nth.call(null,vec__10706,(2),null);
var c__3261__auto___10723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___10723,vec__10706,err,data__$1,request){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___10723,vec__10706,err,data__$1,request){
return (function (state_10717){
var state_val_10718 = (state_10717[(1)]);
if((state_val_10718 === (1))){
var inst_10709 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);
var inst_10712 = {"err":err,"data":data__$1,"request":request};
var inst_10713 = [type,inst_10712];
var state_10717__$1 = state_10717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10717__$1,(2),inst_10709,inst_10713);
} else {
if((state_val_10718 === (2))){
var inst_10715 = (state_10717[(2)]);
var state_10717__$1 = state_10717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10717__$1,inst_10715);
} else {
return null;
}
}
});})(c__3261__auto___10723,vec__10706,err,data__$1,request))
;
return ((function (switch__3171__auto__,c__3261__auto___10723,vec__10706,err,data__$1,request){
return (function() {
var app$stock$impl$state_machine__3172__auto__ = null;
var app$stock$impl$state_machine__3172__auto____0 = (function (){
var statearr_10719 = [null,null,null,null,null,null,null];
(statearr_10719[(0)] = app$stock$impl$state_machine__3172__auto__);

(statearr_10719[(1)] = (1));

return statearr_10719;
});
var app$stock$impl$state_machine__3172__auto____1 = (function (state_10717){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10720){if((e10720 instanceof Object)){
var ex__3175__auto__ = e10720;
var statearr_10721_10724 = state_10717;
(statearr_10721_10724[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10725 = state_10717;
state_10717 = G__10725;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$stock$impl$state_machine__3172__auto__ = function(state_10717){
switch(arguments.length){
case 0:
return app$stock$impl$state_machine__3172__auto____0.call(this);
case 1:
return app$stock$impl$state_machine__3172__auto____1.call(this,state_10717);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$impl$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$impl$state_machine__3172__auto____0;
app$stock$impl$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$impl$state_machine__3172__auto____1;
return app$stock$impl$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___10723,vec__10706,err,data__$1,request))
})();
var state__3263__auto__ = (function (){var statearr_10722 = f__3262__auto__.call(null);
(statearr_10722[(6)] = c__3261__auto___10723);

return statearr_10722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___10723,vec__10706,err,data__$1,request))
);


return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){
var vec__10726 = data;
var err = cljs.core.nth.call(null,vec__10726,(0),null);
var kline = cljs.core.nth.call(null,vec__10726,(1),null);
var id = cljs.core.nth.call(null,vec__10726,(2),null);
var date = cljs.core.nth.call(null,vec__10726,(3),null);
var request = cljs.core.nth.call(null,vec__10726,(4),null);
var c__3261__auto___10743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___10743,vec__10726,err,kline,id,date,request){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___10743,vec__10726,err,kline,id,date,request){
return (function (state_10737){
var state_val_10738 = (state_10737[(1)]);
if((state_val_10738 === (1))){
var inst_10729 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);
var inst_10732 = {"err":err,"data":id,"request":request};
var inst_10733 = [type,inst_10732];
var state_10737__$1 = state_10737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10737__$1,(2),inst_10729,inst_10733);
} else {
if((state_val_10738 === (2))){
var inst_10735 = (state_10737[(2)]);
var state_10737__$1 = state_10737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10737__$1,inst_10735);
} else {
return null;
}
}
});})(c__3261__auto___10743,vec__10726,err,kline,id,date,request))
;
return ((function (switch__3171__auto__,c__3261__auto___10743,vec__10726,err,kline,id,date,request){
return (function() {
var app$stock$impl$state_machine__3172__auto__ = null;
var app$stock$impl$state_machine__3172__auto____0 = (function (){
var statearr_10739 = [null,null,null,null,null,null,null];
(statearr_10739[(0)] = app$stock$impl$state_machine__3172__auto__);

(statearr_10739[(1)] = (1));

return statearr_10739;
});
var app$stock$impl$state_machine__3172__auto____1 = (function (state_10737){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10740){if((e10740 instanceof Object)){
var ex__3175__auto__ = e10740;
var statearr_10741_10744 = state_10737;
(statearr_10741_10744[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10745 = state_10737;
state_10737 = G__10745;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$stock$impl$state_machine__3172__auto__ = function(state_10737){
switch(arguments.length){
case 0:
return app$stock$impl$state_machine__3172__auto____0.call(this);
case 1:
return app$stock$impl$state_machine__3172__auto____1.call(this,state_10737);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$impl$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$impl$state_machine__3172__auto____0;
app$stock$impl$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$impl$state_machine__3172__auto____1;
return app$stock$impl$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___10743,vec__10726,err,kline,id,date,request))
})();
var state__3263__auto__ = (function (){var statearr_10742 = f__3262__auto__.call(null);
(statearr_10742[(6)] = c__3261__auto___10743);

return statearr_10742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___10743,vec__10726,err,kline,id,date,request))
);


if(cljs.core.truth_(err)){
return ctx;
} else {
return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",id], null),data);
}
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,data,ctx){
console.log(["onViewCommand-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''));

console.log(data);

return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"print",(function (_,data,ctx){
console.log(cljs.core.pr_str.call(null,ctx));

return ctx;
}));
app.stock.impl.jsobj__GT_drawer_info = (function app$stock$impl$jsobj__GT_drawer_info(type,kline,sub){
return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (data){
var subt = cljs.core.get.call(null,data,"t");
var subd = cljs.core.get.call(null,data,"d");
var vs = (function (){var pred__10750 = cljs.core._EQ_;
var expr__10751 = type;
if(cljs.core.truth_(pred__10750.call(null,"volume",expr__10751))){
return stock.tool.volume.call(null,kline);
} else {
return stock.tool.close.call(null,kline);
}
})();
var gridColor = "#555";
var c4 = "#FF00FF";
var c3 = "#0000FF";
var c2 = "#00FFFF";
var c1 = "#FFFF00";
var pred__10753 = cljs.core._EQ_;
var expr__10754 = subt;
if(cljs.core.truth_(pred__10753.call(null,"ma",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var p = cljs.core.get.call(null,subd,"p");
var G__10756 = cljs.core.List.EMPTY;
var G__10756__$1 = (((n > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,n,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),G__10756):G__10756);
var G__10756__$2 = (((m > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),G__10756__$1):G__10756__$1);
var G__10756__$3 = (((o > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c3], null),G__10756__$2):G__10756__$2);
if((p > (0))){
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,p,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c4], null),G__10756__$3);
} else {
return G__10756__$3;
}
} else {
if(cljs.core.truth_(pred__10753.call(null,"ema",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var p = cljs.core.get.call(null,subd,"p");
var G__10757 = cljs.core.List.EMPTY;
var G__10757__$1 = (((n > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),G__10757):G__10757);
var G__10757__$2 = (((m > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,m,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),G__10757__$1):G__10757__$1);
var G__10757__$3 = (((o > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,o,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c3], null),G__10757__$2):G__10757__$2);
if((p > (0))){
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,p,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c4], null),G__10757__$3);
} else {
return G__10757__$3;
}
} else {
if(cljs.core.truth_(pred__10753.call(null,"bbi",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var p = cljs.core.get.call(null,subd,"p");
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.BBI.call(null,n,m,o,p,vs),new cljs.core.Keyword(null,"color","color",1011675173),c3], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"ebbi",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var p = cljs.core.get.call(null,subd,"p");
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.EBBI.call(null,n,m,o,p,vs),new cljs.core.Keyword(null,"color","color",1011675173),c4], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"yu-car",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var vec__10758 = cljs.core.reverse.call(null,stock.formula.yu_car.call(null,n,m,o,cljs.core.reverse.call(null,kline)));
var dirs = cljs.core.nth.call(null,vec__10758,(0),null);
var ranges = cljs.core.nth.call(null,vec__10758,(1),null);
var avg = stock.formula.average.call(null,stock.tool.mid.call(null,kline));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core._PLUS_,stock.tool.mid.call(null,kline),cljs.core.reverse.call(null,ranges)),new cljs.core.Keyword(null,"color","color",1011675173),c1,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core._,stock.tool.mid.call(null,kline),cljs.core.reverse.call(null,ranges)),new cljs.core.Keyword(null,"color","color",1011675173),c1,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"yu-macd",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var ema = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs)));
var ebbi = stock.formula.EBBI.call(null,m,(m * (2)),(m * (4)),(m * (8)),vs);
var dif = cljs.core.map.call(null,cljs.core._,ema,ebbi);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,dif))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"yu-clock",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var vs__$1 = stock.formula.sma_seq.call(null,m,stock.formula.yu_clock.call(null,n,cljs.core.reverse.call(null,kline)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,vs__$1),new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"yu-sd",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var group = cljs.core.take.call(null,n,kline);
var vs__$1 = stock.tool.open.call(null,group);
var offsets = stock.formula.offset_seq.call(null,cljs.core.reverse.call(null,vs__$1));
var offsets_avg = stock.formula.average.call(null,offsets);
var sd = stock.formula.StandardDeviation.call(null,offsets_avg,offsets);
var sd2 = (sd * (2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),c2,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,sd2,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),c2,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(- sd2),offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),c2,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"macd",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var dif = stock.formula.macd_dif.call(null,n,m,kline);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,dif))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"kd",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var rsv = stock.formula.rsv_seq.call(null,n,kline);
var k = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,rsv)));
var d = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,k)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),k,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),d,new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),rsv,new cljs.core.Keyword(null,"center","center",-748944368),0.5,new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),0.5),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"yu-kd",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var h9 = stock.formula.maxN_seq.call(null,n,((function (n,pred__10753,expr__10754,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (p1__10746_SHARP_){
return cljs.core.apply.call(null,cljs.core.max,p1__10746_SHARP_);
});})(n,pred__10753,expr__10754,subt,subd,vs,gridColor,c4,c3,c2,c1))
,stock.tool.high.call(null,kline));
var l9 = stock.formula.maxN_seq.call(null,n,((function (n,h9,pred__10753,expr__10754,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (p1__10747_SHARP_){
return cljs.core.apply.call(null,cljs.core.min,p1__10747_SHARP_);
});})(n,h9,pred__10753,expr__10754,subt,subd,vs,gridColor,c4,c3,c2,c1))
,stock.tool.low.call(null,kline));
var c = stock.tool.close.call(null,kline);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),h9,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),l9,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),c,new cljs.core.Keyword(null,"color","color",1011675173),c2], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"Chaikin",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var vs__$1 = stock.formula.Chaikin.call(null,n,m,kline);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,vs__$1))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"cv",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var rema = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,(1),cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core._,stock.formula.maxN_seq.call(null,n,((function (n,m,pred__10753,expr__10754,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (p1__10748_SHARP_){
return cljs.core.apply.call(null,cljs.core.max,p1__10748_SHARP_);
});})(n,m,pred__10753,expr__10754,subt,subd,vs,gridColor,c4,c3,c2,c1))
,stock.tool.high.call(null,kline)),stock.formula.maxN_seq.call(null,n,((function (n,m,pred__10753,expr__10754,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (p1__10749_SHARP_){
return cljs.core.apply.call(null,cljs.core.min,p1__10749_SHARP_);
});})(n,m,pred__10753,expr__10754,subt,subd,vs,gridColor,c4,c3,c2,c1))
,stock.tool.low.call(null,kline))))));
var vs__$1 = stock.formula.volatility_seq.call(null,m,rema);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"eom",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var vs__$1 = stock.formula.EOM.call(null,n,kline);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,vs__$1))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"sar",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var sar = cljs.core.reverse.call(null,stock.formula.sar_seq.call(null,n,cljs.core.reverse.call(null,kline)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),sar,new cljs.core.Keyword(null,"color","color",1011675173),c1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"dot","dot",1442709401)], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"osc",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var line = stock.formula.osc_seq.call(null,n,stock.tool.close.call(null,kline));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,line))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"rsi",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var line = stock.formula.rsi_seq.call(null,n,stock.tool.close.call(null,cljs.core.reverse.call(null,kline)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,line)),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"centerY","centerY",-37879270),0.5,new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),0.5),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"atr",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var line = stock.formula.atr_seq.call(null,n,cljs.core.reverse.call(null,kline));
var line2 = stock.formula.sma_seq.call(null,m,line);
var avg = stock.formula.average.call(null,line);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line2),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"dmi",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var atr = stock.formula.tr_seq.call(null,cljs.core.reverse.call(null,kline));
var dm = stock.formula.dm_seq.call(null,cljs.core.reverse.call(null,kline));
var dip = cljs.core.map.call(null,((function (n,m,atr,dm,pred__10753,expr__10754,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (v,v2){
if((v > (0))){
return (v / v2);
} else {
return (0);
}
});})(n,m,atr,dm,pred__10753,expr__10754,subt,subd,vs,gridColor,c4,c3,c2,c1))
,dm,atr);
var did = cljs.core.map.call(null,((function (n,m,atr,dm,dip,pred__10753,expr__10754,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (v,v2){
if((v < (0))){
return (Math.abs(v) / v2);
} else {
return (0);
}
});})(n,m,atr,dm,dip,pred__10753,expr__10754,subt,subd,vs,gridColor,c4,c3,c2,c1))
,dm,atr);
var adip = stock.formula.sma_seq.call(null,n,dip);
var adid = stock.formula.sma_seq.call(null,n,did);
var dx = cljs.core.map.call(null,((function (n,m,atr,dm,dip,did,adip,adid,pred__10753,expr__10754,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (v1,v2){
if(((v1 + v2) === (0))){
return (0);
} else {
return (Math.abs((v1 - v2)) / (v1 + v2));
}
});})(n,m,atr,dm,dip,did,adip,adid,pred__10753,expr__10754,subt,subd,vs,gridColor,c4,c3,c2,c1))
,adip,adid);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,adip),new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,adid),new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,dx)),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,dx)),new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"AccDist",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var line = stock.formula.AccDist.call(null,cljs.core.reverse.call(null,kline));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,n,line)),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"cci",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var line = stock.formula.cci_seq.call(null,n,cljs.core.reverse.call(null,kline));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"dpo",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var line = stock.formula.dpo_seq.call(null,n,kline);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"trix",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var line = stock.formula.trix_seq.call(null,n,stock.tool.close.call(null,kline));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,line))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"uos",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var p = cljs.core.get.call(null,subd,"p");
var line = stock.formula.uos_seq.call(null,n,m,o,cljs.core.reverse.call(null,kline));
var ma = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,p,line));
var ma2 = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,p,cljs.core.reverse.call(null,ma)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),ma,new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),ma2,new cljs.core.Keyword(null,"color","color",1011675173),c3], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(50),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(50)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"nkline",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var kline__$1 = cljs.core.take.call(null,((cljs.core.count.call(null,kline) / n) | (0)),stock.formula.nkline.call(null,n,kline));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline__$1,new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline__$1], null)], null);
} else {
if(cljs.core.truth_(pred__10753.call(null,"yu-money",expr__10754))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var line = stock.formula.money_line.call(null,n,stock.tool.close.call(null,kline));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,line))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),null], null);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),sub));
});
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){
var stockId = (data["id"]);
var type = (data["type"]);
var canvas = (data["canvas"]);
var offset = (data["offset"]);
var cnt = (data["count"]);
var group = (function (){var or__3922__auto__ = (data["group"]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})();
var sub = cljs.core.js__GT_clj.call(null,(data["sub"]));
var vec__10761 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId], null));
var err = cljs.core.nth.call(null,vec__10761,(0),null);
var kline = cljs.core.nth.call(null,vec__10761,(1),null);
var id = cljs.core.nth.call(null,vec__10761,(2),null);
var date = cljs.core.nth.call(null,vec__10761,(3),null);
var stock__$1 = vec__10761;
var kline__$1 = cljs.core.take.call(null,cnt,cljs.core.drop.call(null,offset,stock.formula.nkline.call(null,group,kline)));
if(cljs.core.truth_(kline__$1)){
stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.concat.call(null,cljs.core.flatten.call(null,(function (){var pred__10764 = cljs.core._EQ_;
var expr__10765 = type;
if(cljs.core.truth_(pred__10764.call(null,"volume",expr__10765))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1),new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1),new cljs.core.Keyword(null,"color","color",1011675173),"#555",new cljs.core.Keyword(null,"hideY","hideY",-712528791),true], null)], null);
} else {
if(cljs.core.truth_(pred__10764.call(null,"clock",expr__10765))){
var map__10767 = stock.formula.clock.call(null,(10),kline__$1);
var map__10767__$1 = ((((!((map__10767 == null)))?(((((map__10767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10767):map__10767);
var cs = cljs.core.get.call(null,map__10767__$1,new cljs.core.Keyword(null,"sma","sma",960324195));
var z = cljs.core.get.call(null,map__10767__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var v_z = cljs.core.get.call(null,map__10767__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null)], null);
} else {
if(cljs.core.truth_(pred__10764.call(null,"kline",expr__10765))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline__$1,new cljs.core.Keyword(null,"color","color",1011675173),"#555"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline__$1], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),null], null);
}
}
}
})()),app.stock.impl.jsobj__GT_drawer_info.call(null,type,kline__$1,sub))], null),canvas.width,canvas.height,canvas.getContext("2d"));
} else {
}

return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"stockId",(function (_,data,ctx){
var onSys = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);
var stock_id = (data["id"]);
var date = (data["date"]);
var stock_info = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stock_id], null));
if(cljs.core.truth_(stock_info)){
app.stock.cmd.loadStock.call(null,onSys,stock_id,date,data,stock_info);

return ctx;
} else {
app.stock.cmd.loadStock.call(null,onSys,stock_id,date,data);

return ctx;
}
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"stockInfo",(function (_,data,ctx){
var onSys_10812 = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);
var stockId_10813 = (data["id"]);
var group_10814 = (function (){var or__3922__auto__ = (data["group"]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})();
var vec__10769_10815 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId_10813], null));
var __10816__$1 = cljs.core.nth.call(null,vec__10769_10815,(0),null);
var kline_10817 = cljs.core.nth.call(null,vec__10769_10815,(1),null);
var id_10818 = cljs.core.nth.call(null,vec__10769_10815,(2),null);
var date_10819 = cljs.core.nth.call(null,vec__10769_10815,(3),null);
var stock_info_10820 = vec__10769_10815;
console.log(cljs.core.print_str.call(null,stock_info_10820));

var c__3261__auto___10821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___10821,onSys_10812,stockId_10813,group_10814,vec__10769_10815,__10816__$1,kline_10817,id_10818,date_10819,stock_info_10820){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___10821,onSys_10812,stockId_10813,group_10814,vec__10769_10815,__10816__$1,kline_10817,id_10818,date_10819,stock_info_10820){
return (function (state_10802){
var state_val_10803 = (state_10802[(1)]);
if((state_val_10803 === (1))){
var state_10802__$1 = state_10802;
if(cljs.core.truth_(stock_info_10820)){
var statearr_10804_10822 = state_10802__$1;
(statearr_10804_10822[(1)] = (2));

} else {
var statearr_10805_10823 = state_10802__$1;
(statearr_10805_10823[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10803 === (2))){
var inst_10773 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10774 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10776 = stock.formula.nkline.call(null,group_10814,kline_10817);
var inst_10777 = [null,inst_10776,id_10818,date_10819];
var inst_10778 = (new cljs.core.PersistentVector(null,4,(5),inst_10775,inst_10777,null));
var inst_10779 = cljs.core.clj__GT_js.call(null,inst_10778);
var inst_10780 = [null,inst_10779,data];
var inst_10781 = (new cljs.core.PersistentVector(null,3,(5),inst_10774,inst_10780,null));
var inst_10782 = ["view",inst_10781];
var inst_10783 = (new cljs.core.PersistentVector(null,2,(5),inst_10773,inst_10782,null));
var state_10802__$1 = state_10802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10802__$1,(5),onSys_10812,inst_10783);
} else {
if((state_val_10803 === (3))){
var inst_10787 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10788 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10789 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10790 = ["no data"];
var inst_10791 = (new cljs.core.PersistentVector(null,1,(5),inst_10789,inst_10790,null));
var inst_10792 = cljs.core.clj__GT_js.call(null,inst_10791);
var inst_10793 = [null,inst_10792,data];
var inst_10794 = (new cljs.core.PersistentVector(null,3,(5),inst_10788,inst_10793,null));
var inst_10795 = ["view",inst_10794];
var inst_10796 = (new cljs.core.PersistentVector(null,2,(5),inst_10787,inst_10795,null));
var state_10802__$1 = state_10802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10802__$1,(6),onSys_10812,inst_10796);
} else {
if((state_val_10803 === (4))){
var inst_10800 = (state_10802[(2)]);
var state_10802__$1 = state_10802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10802__$1,inst_10800);
} else {
if((state_val_10803 === (5))){
var inst_10785 = (state_10802[(2)]);
var state_10802__$1 = state_10802;
var statearr_10806_10824 = state_10802__$1;
(statearr_10806_10824[(2)] = inst_10785);

(statearr_10806_10824[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10803 === (6))){
var inst_10798 = (state_10802[(2)]);
var state_10802__$1 = state_10802;
var statearr_10807_10825 = state_10802__$1;
(statearr_10807_10825[(2)] = inst_10798);

(statearr_10807_10825[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__3261__auto___10821,onSys_10812,stockId_10813,group_10814,vec__10769_10815,__10816__$1,kline_10817,id_10818,date_10819,stock_info_10820))
;
return ((function (switch__3171__auto__,c__3261__auto___10821,onSys_10812,stockId_10813,group_10814,vec__10769_10815,__10816__$1,kline_10817,id_10818,date_10819,stock_info_10820){
return (function() {
var app$stock$impl$state_machine__3172__auto__ = null;
var app$stock$impl$state_machine__3172__auto____0 = (function (){
var statearr_10808 = [null,null,null,null,null,null,null];
(statearr_10808[(0)] = app$stock$impl$state_machine__3172__auto__);

(statearr_10808[(1)] = (1));

return statearr_10808;
});
var app$stock$impl$state_machine__3172__auto____1 = (function (state_10802){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10809){if((e10809 instanceof Object)){
var ex__3175__auto__ = e10809;
var statearr_10810_10826 = state_10802;
(statearr_10810_10826[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10827 = state_10802;
state_10802 = G__10827;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
app$stock$impl$state_machine__3172__auto__ = function(state_10802){
switch(arguments.length){
case 0:
return app$stock$impl$state_machine__3172__auto____0.call(this);
case 1:
return app$stock$impl$state_machine__3172__auto____1.call(this,state_10802);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$impl$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$impl$state_machine__3172__auto____0;
app$stock$impl$state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$impl$state_machine__3172__auto____1;
return app$stock$impl$state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___10821,onSys_10812,stockId_10813,group_10814,vec__10769_10815,__10816__$1,kline_10817,id_10818,date_10819,stock_info_10820))
})();
var state__3263__auto__ = (function (){var statearr_10811 = f__3262__auto__.call(null);
(statearr_10811[(6)] = c__3261__auto___10821);

return statearr_10811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___10821,onSys_10812,stockId_10813,group_10814,vec__10769_10815,__10816__$1,kline_10817,id_10818,date_10819,stock_info_10820))
);


return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"load",(function (type,data,p__10828){
var map__10829 = p__10828;
var map__10829__$1 = ((((!((map__10829 == null)))?(((((map__10829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10829):map__10829);
var ctx = map__10829__$1;
var onSys = cljs.core.get.call(null,map__10829__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));
var fbid_10831 = (data["fbid"]);
var accessToken_10832 = (data["accessToken"]);
app.stock.cmd.loadUser.call(null,onSys,fbid_10831,accessToken_10832,data);

return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"save",(function (type,data,p__10833){
var map__10834 = p__10833;
var map__10834__$1 = ((((!((map__10834 == null)))?(((((map__10834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10834):map__10834);
var ctx = map__10834__$1;
var onSys = cljs.core.get.call(null,map__10834__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));
var fbid_10836 = (data["fbid"]);
var accessToken_10837 = (data["accessToken"]);
var user_10838 = (data["user"]);
app.stock.cmd.saveUser.call(null,onSys,fbid_10836,accessToken_10837,user_10838,data);

return ctx;
}));

//# sourceMappingURL=impl.js.map
