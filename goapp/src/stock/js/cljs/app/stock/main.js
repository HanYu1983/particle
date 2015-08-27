// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('app.stock.impl');
goog.require('app.stock.abstract$');
goog.require('app.stock.abstract$');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('app.dbfile');
goog.require('app.dbfile');
app.stock.main.main = (function main(){var onView_64222 = cljs.core.async.chan.call(null);var onModel_64223 = cljs.core.async.chan.call(null);var onSys_64224 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_64222,onModel_64223,onSys_64224){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_64222,onModel_64223,onSys_64224){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_64222,onModel_64223,onSys_64224){
return (function (state_64135){var state_val_64136 = (state_64135[(1)]);if((state_val_64136 === (2)))
{var inst_64133 = (state_64135[(2)]);var state_64135__$1 = state_64135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64135__$1,inst_64133);
} else
{if((state_val_64136 === (1)))
{var state_64135__$1 = state_64135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64135__$1,(2),onView_64222,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_64222,onModel_64223,onSys_64224))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_64222,onModel_64223,onSys_64224){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_64140 = [null,null,null,null,null,null,null];(statearr_64140[(0)] = state_machine__6188__auto__);
(statearr_64140[(1)] = (1));
return statearr_64140;
});
var state_machine__6188__auto____1 = (function (state_64135){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_64135);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e64141){if((e64141 instanceof Object))
{var ex__6191__auto__ = e64141;var statearr_64142_64225 = state_64135;(statearr_64142_64225[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64135);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e64141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64226 = state_64135;
state_64135 = G__64226;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_64135){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_64135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_64222,onModel_64223,onSys_64224))
})();var state__6204__auto__ = (function (){var statearr_64143 = f__6203__auto__.call(null);(statearr_64143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_64143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_64222,onModel_64223,onSys_64224))
);
return c__6202__auto__;
});})(onView_64222,onModel_64223,onSys_64224))
);
var c__6202__auto___64227 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___64227,onView_64222,onModel_64223,onSys_64224){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___64227,onView_64222,onModel_64223,onSys_64224){
return (function (state_64152){var state_val_64153 = (state_64152[(1)]);if((state_val_64153 === (4)))
{var inst_64146 = (state_64152[(2)]);var inst_64147 = common.onModel.onNext(inst_64146);var state_64152__$1 = (function (){var statearr_64154 = state_64152;(statearr_64154[(7)] = inst_64147);
return statearr_64154;
})();var statearr_64155_64228 = state_64152__$1;(statearr_64155_64228[(2)] = null);
(statearr_64155_64228[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64153 === (3)))
{var inst_64150 = (state_64152[(2)]);var state_64152__$1 = state_64152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64152__$1,inst_64150);
} else
{if((state_val_64153 === (2)))
{var state_64152__$1 = state_64152;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64152__$1,(4),onModel_64223);
} else
{if((state_val_64153 === (1)))
{var state_64152__$1 = state_64152;var statearr_64156_64229 = state_64152__$1;(statearr_64156_64229[(2)] = null);
(statearr_64156_64229[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___64227,onView_64222,onModel_64223,onSys_64224))
;return ((function (switch__6187__auto__,c__6202__auto___64227,onView_64222,onModel_64223,onSys_64224){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_64160 = [null,null,null,null,null,null,null,null];(statearr_64160[(0)] = state_machine__6188__auto__);
(statearr_64160[(1)] = (1));
return statearr_64160;
});
var state_machine__6188__auto____1 = (function (state_64152){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_64152);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e64161){if((e64161 instanceof Object))
{var ex__6191__auto__ = e64161;var statearr_64162_64230 = state_64152;(statearr_64162_64230[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64152);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e64161;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64231 = state_64152;
state_64152 = G__64231;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_64152){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_64152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___64227,onView_64222,onModel_64223,onSys_64224))
})();var state__6204__auto__ = (function (){var statearr_64163 = f__6203__auto__.call(null);(statearr_64163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___64227);
return statearr_64163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___64227,onView_64222,onModel_64223,onSys_64224))
);
var c__6202__auto___64232 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___64232,onView_64222,onModel_64223,onSys_64224){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___64232,onView_64222,onModel_64223,onSys_64224){
return (function (state_64200){var state_val_64201 = (state_64200[(1)]);if((state_val_64201 === (7)))
{var inst_64195 = (state_64200[(2)]);var inst_64167 = inst_64195;var state_64200__$1 = (function (){var statearr_64202 = state_64200;(statearr_64202[(7)] = inst_64167);
return statearr_64202;
})();var statearr_64203_64233 = state_64200__$1;(statearr_64203_64233[(2)] = null);
(statearr_64203_64233[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64201 === (1)))
{var inst_64164 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_64165 = [onView_64222,onModel_64223,onSys_64224,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_64166 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_64164,inst_64165);var inst_64167 = inst_64166;var state_64200__$1 = (function (){var statearr_64204 = state_64200;(statearr_64204[(7)] = inst_64167);
return statearr_64204;
})();var statearr_64205_64234 = state_64200__$1;(statearr_64205_64234[(2)] = null);
(statearr_64205_64234[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64201 === (4)))
{var inst_64175 = (state_64200[(8)]);var inst_64173 = (state_64200[(2)]);var inst_64174 = cljs.core.nth.call(null,inst_64173,(0),null);var inst_64175__$1 = cljs.core.nth.call(null,inst_64173,(1),null);var inst_64179 = cljs.core._EQ_.call(null,onSys_64224,inst_64175__$1);var state_64200__$1 = (function (){var statearr_64206 = state_64200;(statearr_64206[(8)] = inst_64175__$1);
(statearr_64206[(9)] = inst_64174);
return statearr_64206;
})();if(inst_64179)
{var statearr_64207_64235 = state_64200__$1;(statearr_64207_64235[(1)] = (5));
} else
{var statearr_64208_64236 = state_64200__$1;(statearr_64208_64236[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64201 === (6)))
{var inst_64175 = (state_64200[(8)]);var inst_64186 = cljs.core._EQ_.call(null,onView_64222,inst_64175);var state_64200__$1 = state_64200;if(inst_64186)
{var statearr_64209_64237 = state_64200__$1;(statearr_64209_64237[(1)] = (8));
} else
{var statearr_64210_64238 = state_64200__$1;(statearr_64210_64238[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64201 === (3)))
{var inst_64198 = (state_64200[(2)]);var state_64200__$1 = state_64200;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64200__$1,inst_64198);
} else
{if((state_val_64201 === (2)))
{var inst_64170 = [onView_64222,onSys_64224];var inst_64171 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_64170,null));var state_64200__$1 = state_64200;return cljs.core.async.ioc_alts_BANG_.call(null,state_64200__$1,(4),inst_64171);
} else
{if((state_val_64201 === (9)))
{var inst_64167 = (state_64200[(7)]);var state_64200__$1 = state_64200;var statearr_64211_64239 = state_64200__$1;(statearr_64211_64239[(2)] = inst_64167);
(statearr_64211_64239[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64201 === (5)))
{var inst_64174 = (state_64200[(9)]);var inst_64167 = (state_64200[(7)]);var inst_64182 = cljs.core.nth.call(null,inst_64174,(0),null);var inst_64183 = cljs.core.nth.call(null,inst_64174,(1),null);var inst_64184 = app.stock.abstract$.onSystem.call(null,inst_64182,inst_64183,inst_64167);var state_64200__$1 = state_64200;var statearr_64212_64240 = state_64200__$1;(statearr_64212_64240[(2)] = inst_64184);
(statearr_64212_64240[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64201 === (10)))
{var inst_64193 = (state_64200[(2)]);var state_64200__$1 = state_64200;var statearr_64213_64241 = state_64200__$1;(statearr_64213_64241[(2)] = inst_64193);
(statearr_64213_64241[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_64201 === (8)))
{var inst_64174 = (state_64200[(9)]);var inst_64167 = (state_64200[(7)]);var inst_64188 = (inst_64174[(0)]);var inst_64189 = (inst_64174[(1)]);var inst_64190 = app.stock.abstract$.onViewCommand.call(null,inst_64188,inst_64189,inst_64167);var state_64200__$1 = state_64200;var statearr_64214_64242 = state_64200__$1;(statearr_64214_64242[(2)] = inst_64190);
(statearr_64214_64242[(1)] = (10));
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
});})(c__6202__auto___64232,onView_64222,onModel_64223,onSys_64224))
;return ((function (switch__6187__auto__,c__6202__auto___64232,onView_64222,onModel_64223,onSys_64224){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_64218 = [null,null,null,null,null,null,null,null,null,null];(statearr_64218[(0)] = state_machine__6188__auto__);
(statearr_64218[(1)] = (1));
return statearr_64218;
});
var state_machine__6188__auto____1 = (function (state_64200){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_64200);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e64219){if((e64219 instanceof Object))
{var ex__6191__auto__ = e64219;var statearr_64220_64243 = state_64200;(statearr_64220_64243[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64200);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e64219;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__64244 = state_64200;
state_64200 = G__64244;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_64200){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_64200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___64232,onView_64222,onModel_64223,onSys_64224))
})();var state__6204__auto__ = (function (){var statearr_64221 = f__6203__auto__.call(null);(statearr_64221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___64232);
return statearr_64221;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___64232,onView_64222,onModel_64223,onSys_64224))
);
return null;
});
app.stock.main.main.call(null);
