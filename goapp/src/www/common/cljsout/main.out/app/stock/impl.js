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
var vec__7274 = data;
var err = cljs.core.nth.call(null,vec__7274,(0),null);
var data__$1 = cljs.core.nth.call(null,vec__7274,(1),null);
var request = cljs.core.nth.call(null,vec__7274,(2),null);
var c__2882__auto___7291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___7291,vec__7274,err,data__$1,request){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___7291,vec__7274,err,data__$1,request){
return (function (state_7285){
var state_val_7286 = (state_7285[(1)]);
if((state_val_7286 === (1))){
var inst_7277 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);
var inst_7280 = {"err":err,"data":data__$1,"request":request};
var inst_7281 = [type,inst_7280];
var state_7285__$1 = state_7285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7285__$1,(2),inst_7277,inst_7281);
} else {
if((state_val_7286 === (2))){
var inst_7283 = (state_7285[(2)]);
var state_7285__$1 = state_7285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7285__$1,inst_7283);
} else {
return null;
}
}
});})(c__2882__auto___7291,vec__7274,err,data__$1,request))
;
return ((function (switch__2792__auto__,c__2882__auto___7291,vec__7274,err,data__$1,request){
return (function() {
var app$stock$impl$state_machine__2793__auto__ = null;
var app$stock$impl$state_machine__2793__auto____0 = (function (){
var statearr_7287 = [null,null,null,null,null,null,null];
(statearr_7287[(0)] = app$stock$impl$state_machine__2793__auto__);

(statearr_7287[(1)] = (1));

return statearr_7287;
});
var app$stock$impl$state_machine__2793__auto____1 = (function (state_7285){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7288){if((e7288 instanceof Object)){
var ex__2796__auto__ = e7288;
var statearr_7289_7292 = state_7285;
(statearr_7289_7292[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7293 = state_7285;
state_7285 = G__7293;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$impl$state_machine__2793__auto__ = function(state_7285){
switch(arguments.length){
case 0:
return app$stock$impl$state_machine__2793__auto____0.call(this);
case 1:
return app$stock$impl$state_machine__2793__auto____1.call(this,state_7285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$impl$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$impl$state_machine__2793__auto____0;
app$stock$impl$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$impl$state_machine__2793__auto____1;
return app$stock$impl$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___7291,vec__7274,err,data__$1,request))
})();
var state__2884__auto__ = (function (){var statearr_7290 = f__2883__auto__.call(null);
(statearr_7290[(6)] = c__2882__auto___7291);

return statearr_7290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___7291,vec__7274,err,data__$1,request))
);


return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){
var vec__7294 = data;
var err = cljs.core.nth.call(null,vec__7294,(0),null);
var kline = cljs.core.nth.call(null,vec__7294,(1),null);
var id = cljs.core.nth.call(null,vec__7294,(2),null);
var date = cljs.core.nth.call(null,vec__7294,(3),null);
var request = cljs.core.nth.call(null,vec__7294,(4),null);
var c__2882__auto___7311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___7311,vec__7294,err,kline,id,date,request){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___7311,vec__7294,err,kline,id,date,request){
return (function (state_7305){
var state_val_7306 = (state_7305[(1)]);
if((state_val_7306 === (1))){
var inst_7297 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);
var inst_7300 = {"err":err,"data":id,"request":request};
var inst_7301 = [type,inst_7300];
var state_7305__$1 = state_7305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7305__$1,(2),inst_7297,inst_7301);
} else {
if((state_val_7306 === (2))){
var inst_7303 = (state_7305[(2)]);
var state_7305__$1 = state_7305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7305__$1,inst_7303);
} else {
return null;
}
}
});})(c__2882__auto___7311,vec__7294,err,kline,id,date,request))
;
return ((function (switch__2792__auto__,c__2882__auto___7311,vec__7294,err,kline,id,date,request){
return (function() {
var app$stock$impl$state_machine__2793__auto__ = null;
var app$stock$impl$state_machine__2793__auto____0 = (function (){
var statearr_7307 = [null,null,null,null,null,null,null];
(statearr_7307[(0)] = app$stock$impl$state_machine__2793__auto__);

(statearr_7307[(1)] = (1));

return statearr_7307;
});
var app$stock$impl$state_machine__2793__auto____1 = (function (state_7305){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7308){if((e7308 instanceof Object)){
var ex__2796__auto__ = e7308;
var statearr_7309_7312 = state_7305;
(statearr_7309_7312[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7313 = state_7305;
state_7305 = G__7313;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$impl$state_machine__2793__auto__ = function(state_7305){
switch(arguments.length){
case 0:
return app$stock$impl$state_machine__2793__auto____0.call(this);
case 1:
return app$stock$impl$state_machine__2793__auto____1.call(this,state_7305);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$impl$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$impl$state_machine__2793__auto____0;
app$stock$impl$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$impl$state_machine__2793__auto____1;
return app$stock$impl$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___7311,vec__7294,err,kline,id,date,request))
})();
var state__2884__auto__ = (function (){var statearr_7310 = f__2883__auto__.call(null);
(statearr_7310[(6)] = c__2882__auto___7311);

return statearr_7310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___7311,vec__7294,err,kline,id,date,request))
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
var vs = (function (){var pred__7318 = cljs.core._EQ_;
var expr__7319 = type;
if(cljs.core.truth_(pred__7318.call(null,"volume",expr__7319))){
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
var pred__7321 = cljs.core._EQ_;
var expr__7322 = subt;
if(cljs.core.truth_(pred__7321.call(null,"ma",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var p = cljs.core.get.call(null,subd,"p");
var G__7324 = cljs.core.List.EMPTY;
var G__7324__$1 = (((n > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,n,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),G__7324):G__7324);
var G__7324__$2 = (((m > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),G__7324__$1):G__7324__$1);
var G__7324__$3 = (((o > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c3], null),G__7324__$2):G__7324__$2);
if((p > (0))){
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,p,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c4], null),G__7324__$3);
} else {
return G__7324__$3;
}
} else {
if(cljs.core.truth_(pred__7321.call(null,"ema",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var p = cljs.core.get.call(null,subd,"p");
var G__7325 = cljs.core.List.EMPTY;
var G__7325__$1 = (((n > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),G__7325):G__7325);
var G__7325__$2 = (((m > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,m,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),G__7325__$1):G__7325__$1);
var G__7325__$3 = (((o > (0)))?cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,o,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c3], null),G__7325__$2):G__7325__$2);
if((p > (0))){
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,p,cljs.core.reverse.call(null,vs))),new cljs.core.Keyword(null,"color","color",1011675173),c4], null),G__7325__$3);
} else {
return G__7325__$3;
}
} else {
if(cljs.core.truth_(pred__7321.call(null,"bbi",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var p = cljs.core.get.call(null,subd,"p");
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.BBI.call(null,n,m,o,p,vs),new cljs.core.Keyword(null,"color","color",1011675173),c3], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"ebbi",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var p = cljs.core.get.call(null,subd,"p");
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.EBBI.call(null,n,m,o,p,vs),new cljs.core.Keyword(null,"color","color",1011675173),c4], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"yu-car",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var vec__7326 = cljs.core.reverse.call(null,stock.formula.yu_car.call(null,n,m,o,cljs.core.reverse.call(null,kline)));
var dirs = cljs.core.nth.call(null,vec__7326,(0),null);
var ranges = cljs.core.nth.call(null,vec__7326,(1),null);
var avg = stock.formula.average.call(null,stock.tool.mid.call(null,kline));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core._PLUS_,stock.tool.mid.call(null,kline),cljs.core.reverse.call(null,ranges)),new cljs.core.Keyword(null,"color","color",1011675173),c1,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core._,stock.tool.mid.call(null,kline),cljs.core.reverse.call(null,ranges)),new cljs.core.Keyword(null,"color","color",1011675173),c1,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"yu-macd",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var ema = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,n,cljs.core.reverse.call(null,vs)));
var ebbi = stock.formula.EBBI.call(null,m,(m * (2)),(m * (4)),(m * (8)),vs);
var dif = cljs.core.map.call(null,cljs.core._,ema,ebbi);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,dif))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"yu-clock",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var vs__$1 = stock.formula.sma_seq.call(null,m,stock.formula.yu_clock.call(null,n,cljs.core.reverse.call(null,kline)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,vs__$1),new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"yu-sd",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var group = cljs.core.take.call(null,n,kline);
var vs__$1 = stock.tool.open.call(null,group);
var offsets = stock.formula.offset_seq.call(null,cljs.core.reverse.call(null,vs__$1));
var offsets_avg = stock.formula.average.call(null,offsets);
var sd = stock.formula.StandardDeviation.call(null,offsets_avg,offsets);
var sd2 = (sd * (2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),c2,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,sd2,offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),c2,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(- sd2),offsets_avg),vs__$1),new cljs.core.Keyword(null,"color","color",1011675173),c2,new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"macd",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var dif = stock.formula.macd_dif.call(null,n,m,kline);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,dif))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),dif,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"kd",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var rsv = stock.formula.rsv_seq.call(null,n,kline);
var k = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,rsv)));
var d = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,k)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),k,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),d,new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),rsv,new cljs.core.Keyword(null,"center","center",-748944368),0.5,new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),0.5),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"yu-kd",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var h9 = stock.formula.maxN_seq.call(null,n,((function (n,pred__7321,expr__7322,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (p1__7314_SHARP_){
return cljs.core.apply.call(null,cljs.core.max,p1__7314_SHARP_);
});})(n,pred__7321,expr__7322,subt,subd,vs,gridColor,c4,c3,c2,c1))
,stock.tool.high.call(null,kline));
var l9 = stock.formula.maxN_seq.call(null,n,((function (n,h9,pred__7321,expr__7322,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (p1__7315_SHARP_){
return cljs.core.apply.call(null,cljs.core.min,p1__7315_SHARP_);
});})(n,h9,pred__7321,expr__7322,subt,subd,vs,gridColor,c4,c3,c2,c1))
,stock.tool.low.call(null,kline));
var c = stock.tool.close.call(null,kline);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),h9,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),l9,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),c,new cljs.core.Keyword(null,"color","color",1011675173),c2], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"Chaikin",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var vs__$1 = stock.formula.Chaikin.call(null,n,m,kline);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,o,cljs.core.reverse.call(null,vs__$1))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"cv",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var rema = cljs.core.reverse.call(null,stock.formula.ema_seq.call(null,(1),cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core._,stock.formula.maxN_seq.call(null,n,((function (n,m,pred__7321,expr__7322,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (p1__7316_SHARP_){
return cljs.core.apply.call(null,cljs.core.max,p1__7316_SHARP_);
});})(n,m,pred__7321,expr__7322,subt,subd,vs,gridColor,c4,c3,c2,c1))
,stock.tool.high.call(null,kline)),stock.formula.maxN_seq.call(null,n,((function (n,m,pred__7321,expr__7322,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (p1__7317_SHARP_){
return cljs.core.apply.call(null,cljs.core.min,p1__7317_SHARP_);
});})(n,m,pred__7321,expr__7322,subt,subd,vs,gridColor,c4,c3,c2,c1))
,stock.tool.low.call(null,kline))))));
var vs__$1 = stock.formula.volatility_seq.call(null,m,rema);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"eom",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var vs__$1 = stock.formula.EOM.call(null,n,kline);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,vs__$1))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),vs__$1,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"sar",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var sar = cljs.core.reverse.call(null,stock.formula.sar_seq.call(null,n,cljs.core.reverse.call(null,kline)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),sar,new cljs.core.Keyword(null,"color","color",1011675173),c1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"dot","dot",1442709401)], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"osc",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var line = stock.formula.osc_seq.call(null,n,stock.tool.close.call(null,kline));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,line))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"rsi",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var line = stock.formula.rsi_seq.call(null,n,stock.tool.close.call(null,cljs.core.reverse.call(null,kline)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,line)),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"centerY","centerY",-37879270),0.5,new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),0.5),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"atr",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var line = stock.formula.atr_seq.call(null,n,cljs.core.reverse.call(null,kline));
var line2 = stock.formula.sma_seq.call(null,m,line);
var avg = stock.formula.average.call(null,line);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line2),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"dmi",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var atr = stock.formula.tr_seq.call(null,cljs.core.reverse.call(null,kline));
var dm = stock.formula.dm_seq.call(null,cljs.core.reverse.call(null,kline));
var dip = cljs.core.map.call(null,((function (n,m,atr,dm,pred__7321,expr__7322,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (v,v2){
if((v > (0))){
return (v / v2);
} else {
return (0);
}
});})(n,m,atr,dm,pred__7321,expr__7322,subt,subd,vs,gridColor,c4,c3,c2,c1))
,dm,atr);
var did = cljs.core.map.call(null,((function (n,m,atr,dm,dip,pred__7321,expr__7322,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (v,v2){
if((v < (0))){
return (Math.abs(v) / v2);
} else {
return (0);
}
});})(n,m,atr,dm,dip,pred__7321,expr__7322,subt,subd,vs,gridColor,c4,c3,c2,c1))
,dm,atr);
var adip = stock.formula.sma_seq.call(null,n,dip);
var adid = stock.formula.sma_seq.call(null,n,did);
var dx = cljs.core.map.call(null,((function (n,m,atr,dm,dip,did,adip,adid,pred__7321,expr__7322,subt,subd,vs,gridColor,c4,c3,c2,c1){
return (function (v1,v2){
if(((v1 + v2) === (0))){
return (0);
} else {
return (Math.abs((v1 - v2)) / (v1 + v2));
}
});})(n,m,atr,dm,dip,did,adip,adid,pred__7321,expr__7322,subt,subd,vs,gridColor,c4,c3,c2,c1))
,adip,adid);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,adip),new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,adid),new cljs.core.Keyword(null,"color","color",1011675173),"green"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,dx)),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,dx)),new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"AccDist",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var line = stock.formula.AccDist.call(null,cljs.core.reverse.call(null,kline));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,n,line)),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"cci",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var line = stock.formula.cci_seq.call(null,n,cljs.core.reverse.call(null,kline));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"dpo",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var line = stock.formula.dpo_seq.call(null,n,kline);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"trix",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var line = stock.formula.trix_seq.call(null,n,stock.tool.close.call(null,kline));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,m,cljs.core.reverse.call(null,line))),new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(0),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(0)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"uos",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var m = cljs.core.get.call(null,subd,"m");
var o = cljs.core.get.call(null,subd,"o");
var p = cljs.core.get.call(null,subd,"p");
var line = stock.formula.uos_seq.call(null,n,m,o,cljs.core.reverse.call(null,kline));
var ma = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,p,line));
var ma2 = cljs.core.reverse.call(null,stock.formula.sma_seq.call(null,p,cljs.core.reverse.call(null,ma)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.reverse.call(null,line),new cljs.core.Keyword(null,"color","color",1011675173),c1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),ma,new cljs.core.Keyword(null,"color","color",1011675173),c2], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),ma2,new cljs.core.Keyword(null,"color","color",1011675173),c3], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"centerY","centerY",-37879270),(50),new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),cljs.core.repeat.call(null,cljs.core.count.call(null,kline),(50)),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"nkline",expr__7322))){
var n = cljs.core.get.call(null,subd,"n");
var kline__$1 = cljs.core.take.call(null,((cljs.core.count.call(null,kline) / n) | (0)),stock.formula.nkline.call(null,n,kline));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline__$1,new cljs.core.Keyword(null,"color","color",1011675173),gridColor], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline__$1], null)], null);
} else {
if(cljs.core.truth_(pred__7321.call(null,"yu-money",expr__7322))){
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
var vec__7329 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId], null));
var err = cljs.core.nth.call(null,vec__7329,(0),null);
var kline = cljs.core.nth.call(null,vec__7329,(1),null);
var id = cljs.core.nth.call(null,vec__7329,(2),null);
var date = cljs.core.nth.call(null,vec__7329,(3),null);
var stock__$1 = vec__7329;
var kline__$1 = cljs.core.take.call(null,cnt,cljs.core.drop.call(null,offset,stock.formula.nkline.call(null,group,kline)));
if(cljs.core.truth_(kline__$1)){
stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.concat.call(null,cljs.core.flatten.call(null,(function (){var pred__7332 = cljs.core._EQ_;
var expr__7333 = type;
if(cljs.core.truth_(pred__7332.call(null,"volume",expr__7333))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1),new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1),new cljs.core.Keyword(null,"color","color",1011675173),"#555",new cljs.core.Keyword(null,"hideY","hideY",-712528791),true], null)], null);
} else {
if(cljs.core.truth_(pred__7332.call(null,"clock",expr__7333))){
var map__7335 = stock.formula.clock.call(null,(10),kline__$1);
var map__7335__$1 = ((((!((map__7335 == null)))?(((((map__7335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7335):map__7335);
var cs = cljs.core.get.call(null,map__7335__$1,new cljs.core.Keyword(null,"sma","sma",960324195));
var z = cljs.core.get.call(null,map__7335__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var v_z = cljs.core.get.call(null,map__7335__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null)], null);
} else {
if(cljs.core.truth_(pred__7332.call(null,"kline",expr__7333))){
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
var onSys_7380 = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);
var stockId_7381 = (data["id"]);
var group_7382 = (function (){var or__3922__auto__ = (data["group"]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})();
var vec__7337_7383 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId_7381], null));
var __7384__$1 = cljs.core.nth.call(null,vec__7337_7383,(0),null);
var kline_7385 = cljs.core.nth.call(null,vec__7337_7383,(1),null);
var id_7386 = cljs.core.nth.call(null,vec__7337_7383,(2),null);
var date_7387 = cljs.core.nth.call(null,vec__7337_7383,(3),null);
var stock_info_7388 = vec__7337_7383;
console.log(cljs.core.print_str.call(null,stock_info_7388));

var c__2882__auto___7389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___7389,onSys_7380,stockId_7381,group_7382,vec__7337_7383,__7384__$1,kline_7385,id_7386,date_7387,stock_info_7388){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___7389,onSys_7380,stockId_7381,group_7382,vec__7337_7383,__7384__$1,kline_7385,id_7386,date_7387,stock_info_7388){
return (function (state_7370){
var state_val_7371 = (state_7370[(1)]);
if((state_val_7371 === (1))){
var state_7370__$1 = state_7370;
if(cljs.core.truth_(stock_info_7388)){
var statearr_7372_7390 = state_7370__$1;
(statearr_7372_7390[(1)] = (2));

} else {
var statearr_7373_7391 = state_7370__$1;
(statearr_7373_7391[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7371 === (2))){
var inst_7341 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7342 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7343 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7344 = stock.formula.nkline.call(null,group_7382,kline_7385);
var inst_7345 = [null,inst_7344,id_7386,date_7387];
var inst_7346 = (new cljs.core.PersistentVector(null,4,(5),inst_7343,inst_7345,null));
var inst_7347 = cljs.core.clj__GT_js.call(null,inst_7346);
var inst_7348 = [null,inst_7347,data];
var inst_7349 = (new cljs.core.PersistentVector(null,3,(5),inst_7342,inst_7348,null));
var inst_7350 = ["view",inst_7349];
var inst_7351 = (new cljs.core.PersistentVector(null,2,(5),inst_7341,inst_7350,null));
var state_7370__$1 = state_7370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7370__$1,(5),onSys_7380,inst_7351);
} else {
if((state_val_7371 === (3))){
var inst_7355 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7356 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7357 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7358 = ["no data"];
var inst_7359 = (new cljs.core.PersistentVector(null,1,(5),inst_7357,inst_7358,null));
var inst_7360 = cljs.core.clj__GT_js.call(null,inst_7359);
var inst_7361 = [null,inst_7360,data];
var inst_7362 = (new cljs.core.PersistentVector(null,3,(5),inst_7356,inst_7361,null));
var inst_7363 = ["view",inst_7362];
var inst_7364 = (new cljs.core.PersistentVector(null,2,(5),inst_7355,inst_7363,null));
var state_7370__$1 = state_7370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7370__$1,(6),onSys_7380,inst_7364);
} else {
if((state_val_7371 === (4))){
var inst_7368 = (state_7370[(2)]);
var state_7370__$1 = state_7370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7370__$1,inst_7368);
} else {
if((state_val_7371 === (5))){
var inst_7353 = (state_7370[(2)]);
var state_7370__$1 = state_7370;
var statearr_7374_7392 = state_7370__$1;
(statearr_7374_7392[(2)] = inst_7353);

(statearr_7374_7392[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7371 === (6))){
var inst_7366 = (state_7370[(2)]);
var state_7370__$1 = state_7370;
var statearr_7375_7393 = state_7370__$1;
(statearr_7375_7393[(2)] = inst_7366);

(statearr_7375_7393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__2882__auto___7389,onSys_7380,stockId_7381,group_7382,vec__7337_7383,__7384__$1,kline_7385,id_7386,date_7387,stock_info_7388))
;
return ((function (switch__2792__auto__,c__2882__auto___7389,onSys_7380,stockId_7381,group_7382,vec__7337_7383,__7384__$1,kline_7385,id_7386,date_7387,stock_info_7388){
return (function() {
var app$stock$impl$state_machine__2793__auto__ = null;
var app$stock$impl$state_machine__2793__auto____0 = (function (){
var statearr_7376 = [null,null,null,null,null,null,null];
(statearr_7376[(0)] = app$stock$impl$state_machine__2793__auto__);

(statearr_7376[(1)] = (1));

return statearr_7376;
});
var app$stock$impl$state_machine__2793__auto____1 = (function (state_7370){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7377){if((e7377 instanceof Object)){
var ex__2796__auto__ = e7377;
var statearr_7378_7394 = state_7370;
(statearr_7378_7394[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7395 = state_7370;
state_7370 = G__7395;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
app$stock$impl$state_machine__2793__auto__ = function(state_7370){
switch(arguments.length){
case 0:
return app$stock$impl$state_machine__2793__auto____0.call(this);
case 1:
return app$stock$impl$state_machine__2793__auto____1.call(this,state_7370);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
app$stock$impl$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = app$stock$impl$state_machine__2793__auto____0;
app$stock$impl$state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = app$stock$impl$state_machine__2793__auto____1;
return app$stock$impl$state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___7389,onSys_7380,stockId_7381,group_7382,vec__7337_7383,__7384__$1,kline_7385,id_7386,date_7387,stock_info_7388))
})();
var state__2884__auto__ = (function (){var statearr_7379 = f__2883__auto__.call(null);
(statearr_7379[(6)] = c__2882__auto___7389);

return statearr_7379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___7389,onSys_7380,stockId_7381,group_7382,vec__7337_7383,__7384__$1,kline_7385,id_7386,date_7387,stock_info_7388))
);


return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"load",(function (type,data,p__7396){
var map__7397 = p__7396;
var map__7397__$1 = ((((!((map__7397 == null)))?(((((map__7397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7397):map__7397);
var ctx = map__7397__$1;
var onSys = cljs.core.get.call(null,map__7397__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));
var fbid_7399 = (data["fbid"]);
var accessToken_7400 = (data["accessToken"]);
app.stock.cmd.loadUser.call(null,onSys,fbid_7399,accessToken_7400,data);

return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"save",(function (type,data,p__7401){
var map__7402 = p__7401;
var map__7402__$1 = ((((!((map__7402 == null)))?(((((map__7402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7402):map__7402);
var ctx = map__7402__$1;
var onSys = cljs.core.get.call(null,map__7402__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));
var fbid_7404 = (data["fbid"]);
var accessToken_7405 = (data["accessToken"]);
var user_7406 = (data["user"]);
app.stock.cmd.saveUser.call(null,onSys,fbid_7404,accessToken_7405,user_7406,data);

return ctx;
}));

//# sourceMappingURL=impl.js.map
