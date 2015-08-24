// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('app.stock.impl');
goog.require('app.stock.abstract$');
goog.require('app.stock.abstract$');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.stock.main.main = (function main(){var onView_44225 = cljs.core.async.chan.call(null);var onModel_44226 = cljs.core.async.chan.call(null);var onSys_44227 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_44225,onModel_44226,onSys_44227){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_44225,onModel_44226,onSys_44227){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_44225,onModel_44226,onSys_44227){
return (function (state_44138){var state_val_44139 = (state_44138[(1)]);if((state_val_44139 === (2)))
{var inst_44136 = (state_44138[(2)]);var state_44138__$1 = state_44138;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44138__$1,inst_44136);
} else
{if((state_val_44139 === (1)))
{var state_44138__$1 = state_44138;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44138__$1,(2),onView_44225,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_44225,onModel_44226,onSys_44227))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_44225,onModel_44226,onSys_44227){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44143 = [null,null,null,null,null,null,null];(statearr_44143[(0)] = state_machine__6188__auto__);
(statearr_44143[(1)] = (1));
return statearr_44143;
});
var state_machine__6188__auto____1 = (function (state_44138){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44138);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44144){if((e44144 instanceof Object))
{var ex__6191__auto__ = e44144;var statearr_44145_44228 = state_44138;(statearr_44145_44228[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44138);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44229 = state_44138;
state_44138 = G__44229;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44138){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_44225,onModel_44226,onSys_44227))
})();var state__6204__auto__ = (function (){var statearr_44146 = f__6203__auto__.call(null);(statearr_44146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_44146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_44225,onModel_44226,onSys_44227))
);
return c__6202__auto__;
});})(onView_44225,onModel_44226,onSys_44227))
);
var c__6202__auto___44230 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___44230,onView_44225,onModel_44226,onSys_44227){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___44230,onView_44225,onModel_44226,onSys_44227){
return (function (state_44155){var state_val_44156 = (state_44155[(1)]);if((state_val_44156 === (4)))
{var inst_44149 = (state_44155[(2)]);var inst_44150 = common.onModel.onNext(inst_44149);var state_44155__$1 = (function (){var statearr_44157 = state_44155;(statearr_44157[(7)] = inst_44150);
return statearr_44157;
})();var statearr_44158_44231 = state_44155__$1;(statearr_44158_44231[(2)] = null);
(statearr_44158_44231[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44156 === (3)))
{var inst_44153 = (state_44155[(2)]);var state_44155__$1 = state_44155;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44155__$1,inst_44153);
} else
{if((state_val_44156 === (2)))
{var state_44155__$1 = state_44155;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44155__$1,(4),onModel_44226);
} else
{if((state_val_44156 === (1)))
{var state_44155__$1 = state_44155;var statearr_44159_44232 = state_44155__$1;(statearr_44159_44232[(2)] = null);
(statearr_44159_44232[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___44230,onView_44225,onModel_44226,onSys_44227))
;return ((function (switch__6187__auto__,c__6202__auto___44230,onView_44225,onModel_44226,onSys_44227){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44163 = [null,null,null,null,null,null,null,null];(statearr_44163[(0)] = state_machine__6188__auto__);
(statearr_44163[(1)] = (1));
return statearr_44163;
});
var state_machine__6188__auto____1 = (function (state_44155){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44155);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44164){if((e44164 instanceof Object))
{var ex__6191__auto__ = e44164;var statearr_44165_44233 = state_44155;(statearr_44165_44233[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44155);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44164;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44234 = state_44155;
state_44155 = G__44234;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44155){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___44230,onView_44225,onModel_44226,onSys_44227))
})();var state__6204__auto__ = (function (){var statearr_44166 = f__6203__auto__.call(null);(statearr_44166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___44230);
return statearr_44166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___44230,onView_44225,onModel_44226,onSys_44227))
);
var c__6202__auto___44235 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___44235,onView_44225,onModel_44226,onSys_44227){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___44235,onView_44225,onModel_44226,onSys_44227){
return (function (state_44203){var state_val_44204 = (state_44203[(1)]);if((state_val_44204 === (7)))
{var inst_44198 = (state_44203[(2)]);var inst_44170 = inst_44198;var state_44203__$1 = (function (){var statearr_44205 = state_44203;(statearr_44205[(7)] = inst_44170);
return statearr_44205;
})();var statearr_44206_44236 = state_44203__$1;(statearr_44206_44236[(2)] = null);
(statearr_44206_44236[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44204 === (1)))
{var inst_44167 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_44168 = [onView_44225,onModel_44226,onSys_44227,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_44169 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_44167,inst_44168);var inst_44170 = inst_44169;var state_44203__$1 = (function (){var statearr_44207 = state_44203;(statearr_44207[(7)] = inst_44170);
return statearr_44207;
})();var statearr_44208_44237 = state_44203__$1;(statearr_44208_44237[(2)] = null);
(statearr_44208_44237[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44204 === (4)))
{var inst_44178 = (state_44203[(8)]);var inst_44176 = (state_44203[(2)]);var inst_44177 = cljs.core.nth.call(null,inst_44176,(0),null);var inst_44178__$1 = cljs.core.nth.call(null,inst_44176,(1),null);var inst_44182 = cljs.core._EQ_.call(null,onSys_44227,inst_44178__$1);var state_44203__$1 = (function (){var statearr_44209 = state_44203;(statearr_44209[(9)] = inst_44177);
(statearr_44209[(8)] = inst_44178__$1);
return statearr_44209;
})();if(inst_44182)
{var statearr_44210_44238 = state_44203__$1;(statearr_44210_44238[(1)] = (5));
} else
{var statearr_44211_44239 = state_44203__$1;(statearr_44211_44239[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44204 === (6)))
{var inst_44178 = (state_44203[(8)]);var inst_44189 = cljs.core._EQ_.call(null,onView_44225,inst_44178);var state_44203__$1 = state_44203;if(inst_44189)
{var statearr_44212_44240 = state_44203__$1;(statearr_44212_44240[(1)] = (8));
} else
{var statearr_44213_44241 = state_44203__$1;(statearr_44213_44241[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44204 === (3)))
{var inst_44201 = (state_44203[(2)]);var state_44203__$1 = state_44203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44203__$1,inst_44201);
} else
{if((state_val_44204 === (2)))
{var inst_44173 = [onView_44225,onSys_44227];var inst_44174 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44173,null));var state_44203__$1 = state_44203;return cljs.core.async.ioc_alts_BANG_.call(null,state_44203__$1,(4),inst_44174);
} else
{if((state_val_44204 === (9)))
{var inst_44170 = (state_44203[(7)]);var state_44203__$1 = state_44203;var statearr_44214_44242 = state_44203__$1;(statearr_44214_44242[(2)] = inst_44170);
(statearr_44214_44242[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44204 === (5)))
{var inst_44177 = (state_44203[(9)]);var inst_44170 = (state_44203[(7)]);var inst_44185 = cljs.core.nth.call(null,inst_44177,(0),null);var inst_44186 = cljs.core.nth.call(null,inst_44177,(1),null);var inst_44187 = app.stock.abstract$.onSystem.call(null,inst_44185,inst_44186,inst_44170);var state_44203__$1 = state_44203;var statearr_44215_44243 = state_44203__$1;(statearr_44215_44243[(2)] = inst_44187);
(statearr_44215_44243[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44204 === (10)))
{var inst_44196 = (state_44203[(2)]);var state_44203__$1 = state_44203;var statearr_44216_44244 = state_44203__$1;(statearr_44216_44244[(2)] = inst_44196);
(statearr_44216_44244[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44204 === (8)))
{var inst_44177 = (state_44203[(9)]);var inst_44170 = (state_44203[(7)]);var inst_44191 = (inst_44177[(0)]);var inst_44192 = (inst_44177[(1)]);var inst_44193 = app.stock.abstract$.onViewCommand.call(null,inst_44191,inst_44192,inst_44170);var state_44203__$1 = state_44203;var statearr_44217_44245 = state_44203__$1;(statearr_44217_44245[(2)] = inst_44193);
(statearr_44217_44245[(1)] = (10));
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
});})(c__6202__auto___44235,onView_44225,onModel_44226,onSys_44227))
;return ((function (switch__6187__auto__,c__6202__auto___44235,onView_44225,onModel_44226,onSys_44227){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44221 = [null,null,null,null,null,null,null,null,null,null];(statearr_44221[(0)] = state_machine__6188__auto__);
(statearr_44221[(1)] = (1));
return statearr_44221;
});
var state_machine__6188__auto____1 = (function (state_44203){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44203);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44222){if((e44222 instanceof Object))
{var ex__6191__auto__ = e44222;var statearr_44223_44246 = state_44203;(statearr_44223_44246[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44203);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44247 = state_44203;
state_44203 = G__44247;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44203){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___44235,onView_44225,onModel_44226,onSys_44227))
})();var state__6204__auto__ = (function (){var statearr_44224 = f__6203__auto__.call(null);(statearr_44224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___44235);
return statearr_44224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___44235,onView_44225,onModel_44226,onSys_44227))
);
return null;
});
app.stock.main.main.call(null);
