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
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"view",(function (type,data,ctx){var vec__31148 = data;var err = cljs.core.nth.call(null,vec__31148,(0),null);var data__$1 = cljs.core.nth.call(null,vec__31148,(1),null);var request = cljs.core.nth.call(null,vec__31148,(2),null);var c__6202__auto___31166 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___31166,vec__31148,err,data__$1,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___31166,vec__31148,err,data__$1,request){
return (function (state_31157){var state_val_31158 = (state_31157[(1)]);if((state_val_31158 === (2)))
{var inst_31155 = (state_31157[(2)]);var state_31157__$1 = state_31157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31157__$1,inst_31155);
} else
{if((state_val_31158 === (1)))
{var inst_31149 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_31152 = {"err":err,"data":data__$1,"request":request};var inst_31153 = [type,inst_31152];var state_31157__$1 = state_31157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31157__$1,(2),inst_31149,inst_31153);
} else
{return null;
}
}
});})(c__6202__auto___31166,vec__31148,err,data__$1,request))
;return ((function (switch__6187__auto__,c__6202__auto___31166,vec__31148,err,data__$1,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_31162 = [null,null,null,null,null,null,null];(statearr_31162[(0)] = state_machine__6188__auto__);
(statearr_31162[(1)] = (1));
return statearr_31162;
});
var state_machine__6188__auto____1 = (function (state_31157){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_31157);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e31163){if((e31163 instanceof Object))
{var ex__6191__auto__ = e31163;var statearr_31164_31167 = state_31157;(statearr_31164_31167[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31157);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31163;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31168 = state_31157;
state_31157 = G__31168;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_31157){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_31157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___31166,vec__31148,err,data__$1,request))
})();var state__6204__auto__ = (function (){var statearr_31165 = f__6203__auto__.call(null);(statearr_31165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___31166);
return statearr_31165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___31166,vec__31148,err,data__$1,request))
);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onSystem,"loadStock",(function (type,data,ctx){var vec__31169 = data;var err = cljs.core.nth.call(null,vec__31169,(0),null);var kline = cljs.core.nth.call(null,vec__31169,(1),null);var id = cljs.core.nth.call(null,vec__31169,(2),null);var date = cljs.core.nth.call(null,vec__31169,(3),null);var request = cljs.core.nth.call(null,vec__31169,(4),null);var c__6202__auto___31187 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___31187,vec__31169,err,kline,id,date,request){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___31187,vec__31169,err,kline,id,date,request){
return (function (state_31178){var state_val_31179 = (state_31178[(1)]);if((state_val_31179 === (2)))
{var inst_31176 = (state_31178[(2)]);var state_31178__$1 = state_31178;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31178__$1,inst_31176);
} else
{if((state_val_31179 === (1)))
{var inst_31170 = new cljs.core.Keyword(null,"onModel","onModel",-1713159485).cljs$core$IFn$_invoke$arity$1(ctx);var inst_31173 = {"id":id,"request":request};var inst_31174 = [type,inst_31173];var state_31178__$1 = state_31178;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31178__$1,(2),inst_31170,inst_31174);
} else
{return null;
}
}
});})(c__6202__auto___31187,vec__31169,err,kline,id,date,request))
;return ((function (switch__6187__auto__,c__6202__auto___31187,vec__31169,err,kline,id,date,request){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_31183 = [null,null,null,null,null,null,null];(statearr_31183[(0)] = state_machine__6188__auto__);
(statearr_31183[(1)] = (1));
return statearr_31183;
});
var state_machine__6188__auto____1 = (function (state_31178){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_31178);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e31184){if((e31184 instanceof Object))
{var ex__6191__auto__ = e31184;var statearr_31185_31188 = state_31178;(statearr_31185_31188[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31178);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e31184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31189 = state_31178;
state_31178 = G__31189;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_31178){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_31178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___31187,vec__31169,err,kline,id,date,request))
})();var state__6204__auto__ = (function (){var statearr_31186 = f__6203__auto__.call(null);(statearr_31186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___31187);
return statearr_31186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___31187,vec__31169,err,kline,id,date,request))
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
app.stock.impl.jsobj__GT_drawer_info = (function jsobj__GT_drawer_info(kline,sub){return cljs.core.map.call(null,(function (data){var subt = cljs.core.get.call(null,data,"t");var subd = cljs.core.get.call(null,data,"d");var vs = (function (){var pred__31196 = cljs.core._EQ_;var expr__31197 = cljs.core.type;if(cljs.core.truth_(pred__31196.call(null,"volume",expr__31197)))
{return stock.tool.volume.call(null,kline);
} else
{return stock.tool.close.call(null,kline);
}
})();var pred__31199 = cljs.core._EQ_;var expr__31200 = subt;if(cljs.core.truth_(pred__31199.call(null,"ma",expr__31200)))
{var n = cljs.core.get.call(null,subd,"n");var color = cljs.core.get.call(null,subd,"color");return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,n,vs),new cljs.core.Keyword(null,"color","color",1011675173),color], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.formula.sma_seq.call(null,(5),vs),new cljs.core.Keyword(null,"color","color",1011675173),"purple"], null);
}
}),sub);
});
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"draw",(function (_,data,ctx){var stockId = (data["id"]);var type = (data["type"]);var canvas = (data["canvas"]);var offset = (data["offset"]);var cnt = (data["count"]);var sub = cljs.core.js__GT_clj.call(null,(data["sub"]));var vec__31202 = cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temp","temp",1791541284),"stocks",stockId], null));var err = cljs.core.nth.call(null,vec__31202,(0),null);var kline = cljs.core.nth.call(null,vec__31202,(1),null);var id = cljs.core.nth.call(null,vec__31202,(2),null);var date = cljs.core.nth.call(null,vec__31202,(3),null);var stock__$1 = vec__31202;var kline__$1 = cljs.core.take.call(null,cnt,cljs.core.drop.call(null,offset,kline));if(cljs.core.truth_(kline__$1))
{stock.drawer.draw.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"drawers","drawers",-1652645568),cljs.core.cons.call(null,(function (){var pred__31203 = cljs.core._EQ_;var expr__31204 = type;if(cljs.core.truth_(pred__31203.call(null,"volume",expr__31204)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235),stock.tool.volume.call(null,kline__$1)], null);
} else
{if(cljs.core.truth_(pred__31203.call(null,"clock",expr__31204)))
{var map__31206 = stock.formula.clock.call(null,(10),kline__$1);var map__31206__$1 = ((cljs.core.seq_QMARK_.call(null,map__31206))?cljs.core.apply.call(null,cljs.core.hash_map,map__31206):map__31206);var cs = cljs.core.get.call(null,map__31206__$1,new cljs.core.Keyword(null,"sma","sma",960324195));var z = cljs.core.get.call(null,map__31206__$1,new cljs.core.Keyword(null,"z","z",-789527183));var v_z = cljs.core.get.call(null,map__31206__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"clock","clock",-894301127),new cljs.core.Keyword(null,"cz","cz",1670864932),z,new cljs.core.Keyword(null,"vz","vz",-575323393),v_z], null);
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
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"load",(function (type,data,p__31207){var map__31208 = p__31207;var map__31208__$1 = ((cljs.core.seq_QMARK_.call(null,map__31208))?cljs.core.apply.call(null,cljs.core.hash_map,map__31208):map__31208);var ctx = map__31208__$1;var onSys = cljs.core.get.call(null,map__31208__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_31209 = (data["fbid"]);app.stock.cmd.loadUser.call(null,onSys,fbid_31209,data);
return ctx;
}));
cljs.core._add_method.call(null,app.stock.abstract$.onViewCommand,"save",(function (type,data,p__31210){var map__31211 = p__31210;var map__31211__$1 = ((cljs.core.seq_QMARK_.call(null,map__31211))?cljs.core.apply.call(null,cljs.core.hash_map,map__31211):map__31211);var ctx = map__31211__$1;var onSys = cljs.core.get.call(null,map__31211__$1,new cljs.core.Keyword(null,"onSys","onSys",1468126049));var fbid_31212 = (data["fbid"]);var user_31213 = (data["user"]);app.stock.cmd.saveUser.call(null,onSys,fbid_31212,user_31213,data);
return ctx;
}));
