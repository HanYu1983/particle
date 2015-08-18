// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('app.stock.impl');
goog.require('app.stock.abstract$');
goog.require('app.stock.abstract$');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.stock.main.main = (function main(){var onView_24157 = cljs.core.async.chan.call(null);var onModel_24158 = cljs.core.async.chan.call(null);var onSys_24159 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_24157,onModel_24158,onSys_24159){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_24157,onModel_24158,onSys_24159){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_24157,onModel_24158,onSys_24159){
return (function (state_24070){var state_val_24071 = (state_24070[(1)]);if((state_val_24071 === (2)))
{var inst_24068 = (state_24070[(2)]);var state_24070__$1 = state_24070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24070__$1,inst_24068);
} else
{if((state_val_24071 === (1)))
{var state_24070__$1 = state_24070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24070__$1,(2),onView_24157,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_24157,onModel_24158,onSys_24159))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_24157,onModel_24158,onSys_24159){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_24075 = [null,null,null,null,null,null,null];(statearr_24075[(0)] = state_machine__6188__auto__);
(statearr_24075[(1)] = (1));
return statearr_24075;
});
var state_machine__6188__auto____1 = (function (state_24070){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24070);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24076){if((e24076 instanceof Object))
{var ex__6191__auto__ = e24076;var statearr_24077_24160 = state_24070;(statearr_24077_24160[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24070);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24076;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24161 = state_24070;
state_24070 = G__24161;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24070){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_24157,onModel_24158,onSys_24159))
})();var state__6204__auto__ = (function (){var statearr_24078 = f__6203__auto__.call(null);(statearr_24078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_24078;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_24157,onModel_24158,onSys_24159))
);
return c__6202__auto__;
});})(onView_24157,onModel_24158,onSys_24159))
);
var c__6202__auto___24162 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___24162,onView_24157,onModel_24158,onSys_24159){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___24162,onView_24157,onModel_24158,onSys_24159){
return (function (state_24087){var state_val_24088 = (state_24087[(1)]);if((state_val_24088 === (4)))
{var inst_24081 = (state_24087[(2)]);var inst_24082 = common.onModel.onNext(inst_24081);var state_24087__$1 = (function (){var statearr_24089 = state_24087;(statearr_24089[(7)] = inst_24082);
return statearr_24089;
})();var statearr_24090_24163 = state_24087__$1;(statearr_24090_24163[(2)] = null);
(statearr_24090_24163[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24088 === (3)))
{var inst_24085 = (state_24087[(2)]);var state_24087__$1 = state_24087;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24087__$1,inst_24085);
} else
{if((state_val_24088 === (2)))
{var state_24087__$1 = state_24087;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24087__$1,(4),onModel_24158);
} else
{if((state_val_24088 === (1)))
{var state_24087__$1 = state_24087;var statearr_24091_24164 = state_24087__$1;(statearr_24091_24164[(2)] = null);
(statearr_24091_24164[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___24162,onView_24157,onModel_24158,onSys_24159))
;return ((function (switch__6187__auto__,c__6202__auto___24162,onView_24157,onModel_24158,onSys_24159){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_24095 = [null,null,null,null,null,null,null,null];(statearr_24095[(0)] = state_machine__6188__auto__);
(statearr_24095[(1)] = (1));
return statearr_24095;
});
var state_machine__6188__auto____1 = (function (state_24087){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24087);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24096){if((e24096 instanceof Object))
{var ex__6191__auto__ = e24096;var statearr_24097_24165 = state_24087;(statearr_24097_24165[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24087);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24166 = state_24087;
state_24087 = G__24166;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24087){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___24162,onView_24157,onModel_24158,onSys_24159))
})();var state__6204__auto__ = (function (){var statearr_24098 = f__6203__auto__.call(null);(statearr_24098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___24162);
return statearr_24098;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___24162,onView_24157,onModel_24158,onSys_24159))
);
var c__6202__auto___24167 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___24167,onView_24157,onModel_24158,onSys_24159){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___24167,onView_24157,onModel_24158,onSys_24159){
return (function (state_24135){var state_val_24136 = (state_24135[(1)]);if((state_val_24136 === (7)))
{var inst_24130 = (state_24135[(2)]);var inst_24102 = inst_24130;var state_24135__$1 = (function (){var statearr_24137 = state_24135;(statearr_24137[(7)] = inst_24102);
return statearr_24137;
})();var statearr_24138_24168 = state_24135__$1;(statearr_24138_24168[(2)] = null);
(statearr_24138_24168[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24136 === (1)))
{var inst_24099 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_24100 = [onView_24157,onModel_24158,onSys_24159,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_24101 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24099,inst_24100);var inst_24102 = inst_24101;var state_24135__$1 = (function (){var statearr_24139 = state_24135;(statearr_24139[(7)] = inst_24102);
return statearr_24139;
})();var statearr_24140_24169 = state_24135__$1;(statearr_24140_24169[(2)] = null);
(statearr_24140_24169[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24136 === (4)))
{var inst_24110 = (state_24135[(8)]);var inst_24108 = (state_24135[(2)]);var inst_24109 = cljs.core.nth.call(null,inst_24108,(0),null);var inst_24110__$1 = cljs.core.nth.call(null,inst_24108,(1),null);var inst_24114 = cljs.core._EQ_.call(null,onSys_24159,inst_24110__$1);var state_24135__$1 = (function (){var statearr_24141 = state_24135;(statearr_24141[(8)] = inst_24110__$1);
(statearr_24141[(9)] = inst_24109);
return statearr_24141;
})();if(inst_24114)
{var statearr_24142_24170 = state_24135__$1;(statearr_24142_24170[(1)] = (5));
} else
{var statearr_24143_24171 = state_24135__$1;(statearr_24143_24171[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24136 === (6)))
{var inst_24110 = (state_24135[(8)]);var inst_24121 = cljs.core._EQ_.call(null,onView_24157,inst_24110);var state_24135__$1 = state_24135;if(inst_24121)
{var statearr_24144_24172 = state_24135__$1;(statearr_24144_24172[(1)] = (8));
} else
{var statearr_24145_24173 = state_24135__$1;(statearr_24145_24173[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24136 === (3)))
{var inst_24133 = (state_24135[(2)]);var state_24135__$1 = state_24135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24135__$1,inst_24133);
} else
{if((state_val_24136 === (2)))
{var inst_24105 = [onView_24157,onSys_24159];var inst_24106 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24105,null));var state_24135__$1 = state_24135;return cljs.core.async.ioc_alts_BANG_.call(null,state_24135__$1,(4),inst_24106);
} else
{if((state_val_24136 === (9)))
{var inst_24102 = (state_24135[(7)]);var state_24135__$1 = state_24135;var statearr_24146_24174 = state_24135__$1;(statearr_24146_24174[(2)] = inst_24102);
(statearr_24146_24174[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24136 === (5)))
{var inst_24109 = (state_24135[(9)]);var inst_24102 = (state_24135[(7)]);var inst_24117 = cljs.core.nth.call(null,inst_24109,(0),null);var inst_24118 = cljs.core.nth.call(null,inst_24109,(1),null);var inst_24119 = app.stock.abstract$.onSystem.call(null,inst_24117,inst_24118,inst_24102);var state_24135__$1 = state_24135;var statearr_24147_24175 = state_24135__$1;(statearr_24147_24175[(2)] = inst_24119);
(statearr_24147_24175[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24136 === (10)))
{var inst_24128 = (state_24135[(2)]);var state_24135__$1 = state_24135;var statearr_24148_24176 = state_24135__$1;(statearr_24148_24176[(2)] = inst_24128);
(statearr_24148_24176[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24136 === (8)))
{var inst_24109 = (state_24135[(9)]);var inst_24102 = (state_24135[(7)]);var inst_24123 = (inst_24109[(0)]);var inst_24124 = (inst_24109[(1)]);var inst_24125 = app.stock.abstract$.onViewCommand.call(null,inst_24123,inst_24124,inst_24102);var state_24135__$1 = state_24135;var statearr_24149_24177 = state_24135__$1;(statearr_24149_24177[(2)] = inst_24125);
(statearr_24149_24177[(1)] = (10));
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
});})(c__6202__auto___24167,onView_24157,onModel_24158,onSys_24159))
;return ((function (switch__6187__auto__,c__6202__auto___24167,onView_24157,onModel_24158,onSys_24159){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_24153 = [null,null,null,null,null,null,null,null,null,null];(statearr_24153[(0)] = state_machine__6188__auto__);
(statearr_24153[(1)] = (1));
return statearr_24153;
});
var state_machine__6188__auto____1 = (function (state_24135){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24135);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e24154){if((e24154 instanceof Object))
{var ex__6191__auto__ = e24154;var statearr_24155_24178 = state_24135;(statearr_24155_24178[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24135);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e24154;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24179 = state_24135;
state_24135 = G__24179;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24135){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___24167,onView_24157,onModel_24158,onSys_24159))
})();var state__6204__auto__ = (function (){var statearr_24156 = f__6203__auto__.call(null);(statearr_24156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___24167);
return statearr_24156;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___24167,onView_24157,onModel_24158,onSys_24159))
);
return null;
});
app.stock.main.main.call(null);
