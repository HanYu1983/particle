// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.impl');
goog.require('cljs.core');
goog.require('app.stock.abstract$');
goog.require('app.stock.cmd');
goog.require('stock.formula');
goog.require('stock.drawer');
goog.require('stock.formula');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
goog.require('stock.drawer');
goog.require('app.stock.abstract$');
goog.require('app.stock.cmd');
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,data,ctx){console.log(("onSystem-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)));
console.log(cljs.core.pr_str.call(null,data));
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"view",(function (type,data,ctx){var vec__31082 = data;var err = cljs.core.nth.call(null,vec__31082,(0),null);var data__$1 = cljs.core.nth.call(null,vec__31082,(1),null);var request = cljs.core.nth.call(null,vec__31082,(2),null);var c__6202__auto___31100 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___31100,vec__31082,err,data__$1,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___31100,vec__31082,err,data__$1,request){
return (function (state_31091){var state_val_31092 = (state_31091[(1)]);if((state_val_31092 === (2)))
{var inst_31089 = (state_31091[(2)]);var state_31091__$1 = state_31091;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31091__$1,inst_31089);
} else
{if((state_val_31092 === (1)))
{var inst_31083 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_31086 = {"err":err,"data":data__$1,"request":request};var inst_31087 = [type,inst_31086];var state_31091__$1 = state_31091;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31091__$1,(2),inst_31083,inst_31087);
} else
{return null;
}
}
});})(c__6202__auto___31100,vec__31082,err,data__$1,request))
;return ((function (switch__6187__auto__,c__6202__auto___31100,vec__31082,err,data__$1,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_31096 = [null,null,null,null,null,null,null];(statearr_31096[(0)] = state_machine__6188__auto__);
(statearr_31096[(1)] = (1));
return statearr_31096;
});
var state_machine__6188__auto____1 = (function (state_31091){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_31091);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e31097){if((e31097 instanceof Object))
{var ex__6191__auto__ = e31097;var statearr_31098_31101 = state_31091;(statearr_31098_31101[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31091);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31097;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31102 = state_31091;
state_31091 = G__31102;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_31091){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_31091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___31100,vec__31082,err,data__$1,request))
})();var state__6204__auto__ = (function (){var statearr_31099 = f__6203__auto__.call(null);(statearr_31099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___31100);
return statearr_31099;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___31100,vec__31082,err,data__$1,request))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){var vec__31103 = data;var err = cljs.core.nth.call(null,vec__31103,(0),null);var kline = cljs.core.nth.call(null,vec__31103,(1),null);var id = cljs.core.nth.call(null,vec__31103,(2),null);var date = cljs.core.nth.call(null,vec__31103,(3),null);var request = cljs.core.nth.call(null,vec__31103,(4),null);var c__6202__auto___31121 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___31121,vec__31103,err,kline,id,date,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___31121,vec__31103,err,kline,id,date,request){
return (function (state_31112){var state_val_31113 = (state_31112[(1)]);if((state_val_31113 === (2)))
{var inst_31110 = (state_31112[(2)]);var state_31112__$1 = state_31112;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31112__$1,inst_31110);
} else
{if((state_val_31113 === (1)))
{var inst_31104 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_31107 = {"id":id,"request":request};var inst_31108 = [type,inst_31107];var state_31112__$1 = state_31112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31112__$1,(2),inst_31104,inst_31108);
} else
{return null;
}
}
});})(c__6202__auto___31121,vec__31103,err,kline,id,date,request))
;return ((function (switch__6187__auto__,c__6202__auto___31121,vec__31103,err,kline,id,date,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_31117 = [null,null,null,null,null,null,null];(statearr_31117[(0)] = state_machine__6188__auto__);
(statearr_31117[(1)] = (1));
return statearr_31117;
});
var state_machine__6188__auto____1 = (function (state_31112){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_31112);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e31118){if((e31118 instanceof Object))
{var ex__6191__auto__ = e31118;var statearr_31119_31122 = state_31112;(statearr_31119_31122[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31112);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31118;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31123 = state_31112;
state_31112 = G__31123;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_31112){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_31112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___31121,vec__31103,err,kline,id,date,request))
})();var state__6204__auto__ = (function (){var statearr_31120 = f__6203__auto__.call(null);(statearr_31120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___31121);
return statearr_31120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___31121,vec__31103,err,kline,id,date,request))
);
if(cljs.core.truth_(err))
{alert(err);
return ctx;
} else
{return cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",id], null),data);
}
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,data,ctx){console.log(("onViewCommand-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)));
console.log(data);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"print",(function (_,data,ctx){console.log(cljs.core.pr_str.call(null,ctx));
return ctx;
}));
app.stock.impl.jsobj__GT_drawer_info = (function jsobj__GT_drawer_info(kline,sub){return cljs.core.map.call(null,(function (data){var subt = cljs.core.get.call(null,data,"t");var subd = cljs.core.get.call(null,data,"d");var vs = (function (){var pred__31130 = cljs.core._EQ_;var expr__31131 = cljs.core.type;if(cljs.core.truth_(pred__31130.call(null,"volume",expr__31131)))
{return stock.tool.volume.call(null,kline);
} else
{return stock.tool.close.call(null,kline);
}
})();var pred__31133 = cljs.core._EQ_;var expr__31134 = subt;if(cljs.core.truth_(pred__31133.call(null,"ma",expr__31134)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,n,vs),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(5),vs),new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null);
}
}),sub);
});
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){var stockId = (data["id"]);var type = (data["type"]);var canvas = (data["canvas"]);var offset = (data["offset"]);var cnt = (data["count"]);var sub = cljs.core.js__GT_clj.call(null,(data["sub"]));var vec__31136 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId], null));var err = cljs.core.nth.call(null,vec__31136,(0),null);var kline = cljs.core.nth.call(null,vec__31136,(1),null);var id = cljs.core.nth.call(null,vec__31136,(2),null);var date = cljs.core.nth.call(null,vec__31136,(3),null);var stock__$1 = vec__31136;var kline__$1 = cljs.core.take.call(null,cnt,cljs.core.drop.call(null,offset,kline));if(cljs.core.truth_(kline__$1))
{stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.cons.call(null,(function (){var pred__31137 = cljs.core._EQ_;var expr__31138 = type;if(cljs.core.truth_(pred__31137.call(null,"volume",expr__31138)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1)], null);
} else
{if(cljs.core.truth_(pred__31137.call(null,"clock",expr__31138)))
{var map__31140 = stock.formula.clock.call(null,(10),kline__$1);var map__31140__$1 = ((cljs.core.seq_QMARK_.call(null,map__31140))?cljs.core.apply.call(null,cljs.core.hash_map,map__31140):map__31140);var cs = cljs.core.get.call(null,map__31140__$1,new cljs.core.Keyword(null,"sma","sma",960324195));var z = cljs.core.get.call(null,map__31140__$1,new cljs.core.Keyword(null,"z","z",-789527183));var v_z = cljs.core.get.call(null,map__31140__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594),new cljs.core.Keyword(null,"kline","kline",-1160432594),kline__$1], null);
}
}
})(),app.stock.impl.jsobj__GT_drawer_info.call(null,kline__$1,sub))], null),canvas.width,canvas.height,canvas.getContext("2d"));
} else
{}
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"stockId",(function (_,data,ctx){var onSys = new cljs.core.Keyword(null,"onSys","onSys",1468126049).cljs$core$IFn$_invoke$arity$1(ctx);var stock_id = (data["id"]);var date = (data["date"]);var stock_info = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stock_id], null));if(cljs.core.truth_(stock_info))
{app.stock.cmd.loadStock.call(null,onSys,stock_id,date,data,stock_info);
return ctx;
} else
{app.stock.cmd.loadStock.call(null,onSys,stock_id,date,data);
return ctx;
}
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"load",(function (type,data,p__31141){var map__31142 = p__31141;var map__31142__$1 = ((cljs.core.seq_QMARK_.call(null,map__31142))?cljs.core.apply.call(null,cljs.core.hash_map,map__31142):map__31142);var ctx = map__31142__$1;var onSys = cljs.core.get.call(null,map__31142__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_31143 = (data["fbid"]);app.stock.cmd.loadUser.call(null,onSys,fbid_31143,data);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"save",(function (type,data,p__31144){var map__31145 = p__31144;var map__31145__$1 = ((cljs.core.seq_QMARK_.call(null,map__31145))?cljs.core.apply.call(null,cljs.core.hash_map,map__31145):map__31145);var ctx = map__31145__$1;var onSys = cljs.core.get.call(null,map__31145__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_31146 = (data["fbid"]);var user_31147 = (data["user"]);app.stock.cmd.saveUser.call(null,onSys,fbid_31146,user_31147,data);
return ctx;
}));
