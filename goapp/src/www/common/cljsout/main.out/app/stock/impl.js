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
var vec__56069 = data;
var err = cljs.core.nth.call(null,vec__56069,(0),null);
var data__$1 = cljs.core.nth.call(null,vec__56069,(1),null);
var request = cljs.core.nth.call(null,vec__56069,(2),null);
var c__2884__auto___56086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___56086,vec__56069,err,data__$1,request){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___56086,vec__56069,err,data__$1,request){
return (function (state_56080){
var state_val_56081 = (state_56080[(1)]);
if((state_val_56081 === (1))){
var inst_56072 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);
var inst_56075 = {"err":err,"data":data__$1,"request":request};
var inst_56076 = [type,inst_56075];
var state_56080__$1 = state_56080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56080__$1,(2),inst_56072,inst_56076);
} else {
if((state_val_56081 === (2))){
var inst_56078 = (state_56080[(2)]);
var state_56080__$1 = state_56080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56080__$1,inst_56078);
} else {
return null;
}
}
});})(c__2884__auto___56086,vec__56069,err,data__$1,request))
;
return ((function (switch__2794__auto__,c__2884__auto___56086,vec__56069,err,data__$1,request){
return (function() {
var app$stock$impl$state_machine__2795__auto__ = null;
var app$stock$impl$state_machine__2795__auto____0 = (function (){
var statearr_56082 = [null,null,null,null,null,null,null];
(statearr_56082[(0)] = app$stock$impl$state_machine__2795__auto__);

(statearr_56082[(1)] = (1));

return statearr_56082;
});
var app$stock$impl$state_machine__2795__auto____1 = (function (state_56080){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_56080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e56083){if((e56083 instanceof Object)){
var ex__2798__auto__ = e56083;
var statearr_56084_56087 = state_56080;
(statearr_56084_56087[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56088 = state_56080;
state_56080 = G__56088;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
app$stock$impl$state_machine__2795__auto__ = function(state_56080){
switch(arguments.length){
case 0:
return app$stock$impl$state_machine__2795__auto____0.call(this);
case 1:
return app$stock$impl$state_machine__2795__auto____1.call(this,state_56080);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$impl$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$impl$state_machine__2795__auto____0;
app$stock$impl$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$impl$state_machine__2795__auto____1;
return app$stock$impl$state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___56086,vec__56069,err,data__$1,request))
})();
var state__2886__auto__ = (function (){var statearr_56085 = f__2885__auto__.call(null);
(statearr_56085[(6)] = c__2884__auto___56086);

return statearr_56085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___56086,vec__56069,err,data__$1,request))
);


return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){
var vec__56089 = data;
var err = cljs.core.nth.call(null,vec__56089,(0),null);
var kline = cljs.core.nth.call(null,vec__56089,(1),null);
var id = cljs.core.nth.call(null,vec__56089,(2),null);
var date = cljs.core.nth.call(null,vec__56089,(3),null);
var request = cljs.core.nth.call(null,vec__56089,(4),null);
var c__2884__auto___56106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___56106,vec__56089,err,kline,id,date,request){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___56106,vec__56089,err,kline,id,date,request){
return (function (state_56100){
var state_val_56101 = (state_56100[(1)]);
if((state_val_56101 === (1))){
var inst_56092 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);
var inst_56095 = {"err":err,"data":id,"request":request};
var inst_56096 = [type,inst_56095];
var state_56100__$1 = state_56100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56100__$1,(2),inst_56092,inst_56096);
} else {
if((state_val_56101 === (2))){
var inst_56098 = (state_56100[(2)]);
var state_56100__$1 = state_56100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56100__$1,inst_56098);
} else {
return null;
}
}
});})(c__2884__auto___56106,vec__56089,err,kline,id,date,request))
;
return ((function (switch__2794__auto__,c__2884__auto___56106,vec__56089,err,kline,id,date,request){
return (function() {
var app$stock$impl$state_machine__2795__auto__ = null;
var app$stock$impl$state_machine__2795__auto____0 = (function (){
var statearr_56102 = [null,null,null,null,null,null,null];
(statearr_56102[(0)] = app$stock$impl$state_machine__2795__auto__);

(statearr_56102[(1)] = (1));

return statearr_56102;
});
var app$stock$impl$state_machine__2795__auto____1 = (function (state_56100){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_56100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e56103){if((e56103 instanceof Object)){
var ex__2798__auto__ = e56103;
var statearr_56104_56107 = state_56100;
(statearr_56104_56107[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56108 = state_56100;
state_56100 = G__56108;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
app$stock$impl$state_machine__2795__auto__ = function(state_56100){
switch(arguments.length){
case 0:
return app$stock$impl$state_machine__2795__auto____0.call(this);
case 1:
return app$stock$impl$state_machine__2795__auto____1.call(this,state_56100);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$impl$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$impl$state_machine__2795__auto____0;
app$stock$impl$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$impl$state_machine__2795__auto____1;
return app$stock$impl$state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___56106,vec__56089,err,kline,id,date,request))
})();
var state__2886__auto__ = (function (){var statearr_56105 = f__2885__auto__.call(null);
(statearr_56105[(6)] = c__2884__auto___56106);

return statearr_56105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___56106,vec__56089,err,kline,id,date,request))
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
var vs = (function (){var pred__56113 = cljs.core._EQ_;
var expr__56114 = type;
if(cljs.core.truth_(pred__56113.call(null,"volume",expr__56114))){
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
var pred__56116 = cljs.core._EQ_;
var expr__56117 = subt;
if(cljs.core.truth_(pred__56116.call(null,"ma",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var p = cljs.core.get.call(null,subd,"p");
var G__56119 = cljs.core.List.EMPTY;
var G__56119__$1 = (((n > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,n,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),G__56119):G__56119);
var G__56119__$2 = (((m > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),G__56119__$1):G__56119__$1);
var G__56119__$3 = (((o > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c3], null),G__56119__$2):G__56119__$2);
if((p > (0))){
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,p,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c4], null),G__56119__$3);
} else {
return G__56119__$3;
}
} else {
if(cljs.core.truth_(pred__56116.call(null,"ema",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var p = cljs.core.get.call(null,subd,"p");
var G__56120 = cljs.core.List.EMPTY;
var G__56120__$1 = (((n > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),G__56120):G__56120);
var G__56120__$2 = (((m > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,m,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),G__56120__$1):G__56120__$1);
var G__56120__$3 = (((o > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,o,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c3], null),G__56120__$2):G__56120__$2);
if((p > (0))){
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,p,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c4], null),G__56120__$3);
} else {
return G__56120__$3;
}
} else {
if(cljs.core.truth_(pred__56116.call(null,"bbi",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var p = cljs.core.get.call(null,subd,"p");
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.BBI.call(null,n,m,o,p,vs),new cljs.core.Keyword(null,"color","color",1011675173),c3], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"ebbi",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var p = cljs.core.get.call(null,subd,"p");
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.EBBI.call(null,n,m,o,p,vs),new cljs.core.Keyword(null,"color","color",1011675173),c4], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"yu-car",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var vec__56121 = cljs.core.reverse.call(null,stock.formula.yu_car.call(null,n,m,o,cljs.core.reverse.call(null,kline)));
var dirs = cljs.core.nth.call(null,vec__56121,(0),null);
var ranges = cljs.core.nth.call(null,vec__56121,(1),null);
var avg = stock.formula.average.call(null,stock.tool.mid.call(null,kline));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core._PLUS_,stock.tool.mid.call(null,kline),cljs.core.reverse.call(null,ranges)),new cljs.core.Keyword(null,"color","color",1011675173),c1,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core._,stock.tool.mid.call(null,kline),cljs.core.reverse.call(null,ranges)),new cljs.core.Keyword(null,"color","color",1011675173),c1,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"yu-macd",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var ema = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs)));
var ebbi = stock.formula.EBBI.call(null,m,(m * (2)),(m * (4)),(m * (8)),vs);
var dif = cljs.core.map.call(null,cljs.core._,ema,ebbi);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,dif))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"yu-clock",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var vs__$1 = stock.formula.sma_seq.call(null,m,stock.formula.yu_clock.call(null,n,cljs.core.reverse.call(null,kline)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,vs__$1),new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"yu-sd",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var group = cljs.core.take.call(null,n,kline);
var vs__$1 = stock.tool.open.call(null,group);
var offsets = stock.formula.offset_seq.call(null,cljs.core.reverse.call(null,vs__$1));
var offsets_avg = stock.formula.average.call(null,offsets);
var sd = stock.formula.StandardDeviation.call(null,offsets_avg,offsets);
var sd2 = (sd * (2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),c2,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,sd2,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),c2,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(- sd2),offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),c2,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"macd",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var dif = stock.formula.macd_dif.call(null,n,m,kline);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,dif))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"kd",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var rsv = stock.formula.rsv_seq.call(null,n,kline);
var k = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,rsv)));
var d = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,k)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),k,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),d,new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),rsv,new cljs.core.Keyword(null,"center","center",-748944368),0.5,new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),0.5),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"yu-kd",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var h9 = stock.formula.maxN_seq.call(null,n,((function (n,pred__56116,expr__56117,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (p1__56109_SHARP_){
return cljs.core.apply.call(null,cljs.core.max,p1__56109_SHARP_);
});})(n,pred__56116,expr__56117,subt,subd,vs,gridColor,c4,c3,c2,c1))
,stock.tool.high.call(null,kline));
var l9 = stock.formula.maxN_seq.call(null,n,((function (n,h9,pred__56116,expr__56117,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (p1__56110_SHARP_){
return cljs.core.apply.call(null,cljs.core.min,p1__56110_SHARP_);
});})(n,h9,pred__56116,expr__56117,subt,subd,vs,gridColor,c4,c3,c2,c1))
,stock.tool.low.call(null,kline));
var c = stock.tool.close.call(null,kline);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),h9,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),l9,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),c,new cljs.core.Keyword(null,"color","color",1011675173),c2], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"Chaikin",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var vs__$1 = stock.formula.Chaikin.call(null,n,m,kline);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,vs__$1))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"cv",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var rema = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,(1),cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core._,stock.formula.maxN_seq.call(null,n,((function (n,m,pred__56116,expr__56117,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (p1__56111_SHARP_){
return cljs.core.apply.call(null,cljs.core.max,p1__56111_SHARP_);
});})(n,m,pred__56116,expr__56117,subt,subd,vs,gridColor,c4,c3,c2,c1))
,stock.tool.high.call(null,kline)),stock.formula.maxN_seq.call(null,n,((function (n,m,pred__56116,expr__56117,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (p1__56112_SHARP_){
return cljs.core.apply.call(null,cljs.core.min,p1__56112_SHARP_);
});})(n,m,pred__56116,expr__56117,subt,subd,vs,gridColor,c4,c3,c2,c1))
,stock.tool.low.call(null,kline))))));
var vs__$1 = stock.formula.volatility_seq.call(null,m,rema);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"eom",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var vs__$1 = stock.formula.EOM.call(null,n,kline);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,vs__$1))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"sar",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var sar = cljs.core.reverse.call(null,stock.formula.sar_seq.call(null,n,cljs.core.reverse.call(null,kline)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),sar,new cljs.core.Keyword(null,"color","color",1011675173),c1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"dot","dot",1442709401)], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"osc",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var line = stock.formula.osc_seq.call(null,n,stock.tool.close.call(null,kline));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,line))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"rsi",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var line = stock.formula.rsi_seq.call(null,n,stock.tool.close.call(null,cljs.core.reverse.call(null,kline)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,line)),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"centerY","centerY",-37879270),0.5,new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),0.5),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"atr",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var line = stock.formula.atr_seq.call(null,n,cljs.core.reverse.call(null,kline));
var line2 = stock.formula.sma_seq.call(null,m,line);
var avg = stock.formula.average.call(null,line);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line2),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"dmi",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var atr = stock.formula.tr_seq.call(null,cljs.core.reverse.call(null,kline));
var dm = stock.formula.dm_seq.call(null,cljs.core.reverse.call(null,kline));
var dip = cljs.core.map.call(null,((function (n,m,atr,dm,pred__56116,expr__56117,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (v,v2){
if((v > (0))){
return (v / v2);
} else {
return (0);
}
});})(n,m,atr,dm,pred__56116,expr__56117,subt,subd,vs,gridColor,c4,c3,c2,c1))
,dm,atr);
var did = cljs.core.map.call(null,((function (n,m,atr,dm,dip,pred__56116,expr__56117,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (v,v2){
if((v < (0))){
return (Math.abs(v) / v2);
} else {
return (0);
}
});})(n,m,atr,dm,dip,pred__56116,expr__56117,subt,subd,vs,gridColor,c4,c3,c2,c1))
,dm,atr);
var adip = stock.formula.sma_seq.call(null,n,dip);
var adid = stock.formula.sma_seq.call(null,n,did);
var dx = cljs.core.map.call(null,((function (n,m,atr,dm,dip,did,adip,adid,pred__56116,expr__56117,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (v1,v2){
if(((v1 + v2) === (0))){
return (0);
} else {
return (Math.abs((v1 - v2)) / (v1 + v2));
}
});})(n,m,atr,dm,dip,did,adip,adid,pred__56116,expr__56117,subt,subd,vs,gridColor,c4,c3,c2,c1))
,adip,adid);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,adip),new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,adid),new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,dx)),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,dx)),new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"AccDist",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var line = stock.formula.AccDist.call(null,cljs.core.reverse.call(null,kline));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,n,line)),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"cci",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var line = stock.formula.cci_seq.call(null,n,cljs.core.reverse.call(null,kline));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"dpo",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var line = stock.formula.dpo_seq.call(null,n,kline);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"trix",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var line = stock.formula.trix_seq.call(null,n,stock.tool.close.call(null,kline));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,line))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"uos",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var p = cljs.core.get.call(null,subd,"p");
var line = stock.formula.uos_seq.call(null,n,m,o,cljs.core.reverse.call(null,kline));
var ma = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,p,line));
var ma2 = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,p,cljs.core.reverse.call(null,ma)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),ma,new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),ma2,new cljs.core.Keyword(null,"color","color",1011675173),c3], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(50),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(50)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"nkline",expr__56117))){
var n = cljs.core.get.call(null,subd,"n");
var kline__$1 = cljs.core.take.call(null,((cljs.core.count.call(null,kline) / n) | (0)),stock.formula.nkline.call(null,n,kline));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline__$1,new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline__$1], null)], null);
} else {
if(cljs.core.truth_(pred__56116.call(null,"yu-money",expr__56117))){
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
var vec__56124 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId], null));
var err = cljs.core.nth.call(null,vec__56124,(0),null);
var kline = cljs.core.nth.call(null,vec__56124,(1),null);
var id = cljs.core.nth.call(null,vec__56124,(2),null);
var date = cljs.core.nth.call(null,vec__56124,(3),null);
var stock__$1 = vec__56124;
var kline__$1 = cljs.core.take.call(null,cnt,cljs.core.drop.call(null,offset,stock.formula.nkline.call(null,group,kline)));
if(cljs.core.truth_(kline__$1)){
stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.concat.call(null,cljs.core.flatten.call(null,(function (){var pred__56127 = cljs.core._EQ_;
var expr__56128 = type;
if(cljs.core.truth_(pred__56127.call(null,"volume",expr__56128))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1),new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1),new cljs.core.Keyword(null,"color","color",1011675173),"#555",new cljs.core.Keyword(null,"hideY","hideY",-712528791),true], null)], null);
} else {
if(cljs.core.truth_(pred__56127.call(null,"clock",expr__56128))){
var map__56130 = stock.formula.clock.call(null,(10),kline__$1);
var map__56130__$1 = ((((!((map__56130 == null)))?(((((map__56130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56130):map__56130);
var cs = cljs.core.get.call(null,map__56130__$1,new cljs.core.Keyword(null,"sma","sma",960324195));
var z = cljs.core.get.call(null,map__56130__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var v_z = cljs.core.get.call(null,map__56130__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null)], null);
} else {
if(cljs.core.truth_(pred__56127.call(null,"kline",expr__56128))){
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
var onSys_56175 = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);
var stockId_56176 = (data["id"]);
var group_56177 = (function (){var or__3922__auto__ = (data["group"]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})();
var vec__56132_56178 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId_56176], null));
var __56179__$1 = cljs.core.nth.call(null,vec__56132_56178,(0),null);
var kline_56180 = cljs.core.nth.call(null,vec__56132_56178,(1),null);
var id_56181 = cljs.core.nth.call(null,vec__56132_56178,(2),null);
var date_56182 = cljs.core.nth.call(null,vec__56132_56178,(3),null);
var stock_info_56183 = vec__56132_56178;
console.log(cljs.core.print_str.call(null,stock_info_56183));

var c__2884__auto___56184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto___56184,onSys_56175,stockId_56176,group_56177,vec__56132_56178,__56179__$1,kline_56180,id_56181,date_56182,stock_info_56183){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto___56184,onSys_56175,stockId_56176,group_56177,vec__56132_56178,__56179__$1,kline_56180,id_56181,date_56182,stock_info_56183){
return (function (state_56165){
var state_val_56166 = (state_56165[(1)]);
if((state_val_56166 === (1))){
var state_56165__$1 = state_56165;
if(cljs.core.truth_(stock_info_56183)){
var statearr_56167_56185 = state_56165__$1;
(statearr_56167_56185[(1)] = (2));

} else {
var statearr_56168_56186 = state_56165__$1;
(statearr_56168_56186[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56166 === (2))){
var inst_56136 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56137 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56138 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56139 = stock.formula.nkline.call(null,group_56177,kline_56180);
var inst_56140 = [null,inst_56139,id_56181,date_56182];
var inst_56141 = (new cljs.core.PersistentVector(null,4,(5),inst_56138,inst_56140,null));
var inst_56142 = cljs.core.clj__GT_js.call(null,inst_56141);
var inst_56143 = [null,inst_56142,data];
var inst_56144 = (new cljs.core.PersistentVector(null,3,(5),inst_56137,inst_56143,null));
var inst_56145 = ["view",inst_56144];
var inst_56146 = (new cljs.core.PersistentVector(null,2,(5),inst_56136,inst_56145,null));
var state_56165__$1 = state_56165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56165__$1,(5),onSys_56175,inst_56146);
} else {
if((state_val_56166 === (3))){
var inst_56150 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56151 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56152 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56153 = ["no data"];
var inst_56154 = (new cljs.core.PersistentVector(null,1,(5),inst_56152,inst_56153,null));
var inst_56155 = cljs.core.clj__GT_js.call(null,inst_56154);
var inst_56156 = [null,inst_56155,data];
var inst_56157 = (new cljs.core.PersistentVector(null,3,(5),inst_56151,inst_56156,null));
var inst_56158 = ["view",inst_56157];
var inst_56159 = (new cljs.core.PersistentVector(null,2,(5),inst_56150,inst_56158,null));
var state_56165__$1 = state_56165;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56165__$1,(6),onSys_56175,inst_56159);
} else {
if((state_val_56166 === (4))){
var inst_56163 = (state_56165[(2)]);
var state_56165__$1 = state_56165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56165__$1,inst_56163);
} else {
if((state_val_56166 === (5))){
var inst_56148 = (state_56165[(2)]);
var state_56165__$1 = state_56165;
var statearr_56169_56187 = state_56165__$1;
(statearr_56169_56187[(2)] = inst_56148);

(statearr_56169_56187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56166 === (6))){
var inst_56161 = (state_56165[(2)]);
var state_56165__$1 = state_56165;
var statearr_56170_56188 = state_56165__$1;
(statearr_56170_56188[(2)] = inst_56161);

(statearr_56170_56188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__2884__auto___56184,onSys_56175,stockId_56176,group_56177,vec__56132_56178,__56179__$1,kline_56180,id_56181,date_56182,stock_info_56183))
;
return ((function (switch__2794__auto__,c__2884__auto___56184,onSys_56175,stockId_56176,group_56177,vec__56132_56178,__56179__$1,kline_56180,id_56181,date_56182,stock_info_56183){
return (function() {
var app$stock$impl$state_machine__2795__auto__ = null;
var app$stock$impl$state_machine__2795__auto____0 = (function (){
var statearr_56171 = [null,null,null,null,null,null,null];
(statearr_56171[(0)] = app$stock$impl$state_machine__2795__auto__);

(statearr_56171[(1)] = (1));

return statearr_56171;
});
var app$stock$impl$state_machine__2795__auto____1 = (function (state_56165){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_56165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e56172){if((e56172 instanceof Object)){
var ex__2798__auto__ = e56172;
var statearr_56173_56189 = state_56165;
(statearr_56173_56189[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56190 = state_56165;
state_56165 = G__56190;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
app$stock$impl$state_machine__2795__auto__ = function(state_56165){
switch(arguments.length){
case 0:
return app$stock$impl$state_machine__2795__auto____0.call(this);
case 1:
return app$stock$impl$state_machine__2795__auto____1.call(this,state_56165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$impl$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$impl$state_machine__2795__auto____0;
app$stock$impl$state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$impl$state_machine__2795__auto____1;
return app$stock$impl$state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto___56184,onSys_56175,stockId_56176,group_56177,vec__56132_56178,__56179__$1,kline_56180,id_56181,date_56182,stock_info_56183))
})();
var state__2886__auto__ = (function (){var statearr_56174 = f__2885__auto__.call(null);
(statearr_56174[(6)] = c__2884__auto___56184);

return statearr_56174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto___56184,onSys_56175,stockId_56176,group_56177,vec__56132_56178,__56179__$1,kline_56180,id_56181,date_56182,stock_info_56183))
);


return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"load",(function (type,data,p__56191){
var map__56192 = p__56191;
var map__56192__$1 = ((((!((map__56192 == null)))?(((((map__56192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56192):map__56192);
var ctx = map__56192__$1;
var onSys = cljs.core.get.call(null,map__56192__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));
var fbid_56194 = (data["fbid"]);
var accessToken_56195 = (data["accessToken"]);
app.stock.cmd.loadUser.call(null,onSys,fbid_56194,accessToken_56195,data);

return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"save",(function (type,data,p__56196){
var map__56197 = p__56196;
var map__56197__$1 = ((((!((map__56197 == null)))?(((((map__56197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56197):map__56197);
var ctx = map__56197__$1;
var onSys = cljs.core.get.call(null,map__56197__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));
var fbid_56199 = (data["fbid"]);
var accessToken_56200 = (data["accessToken"]);
var user_56201 = (data["user"]);
app.stock.cmd.saveUser.call(null,onSys,fbid_56199,accessToken_56200,user_56201,data);

return ctx;
}));

//# sourceMappingURL=impl.js.map
