// Compiled by ClojureScript 0.0-2268
goog.provide('test.dialog');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.dialog');
goog.require('tool.dialog');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
test.dialog.view = (function view(elem,ctx){var show_23044 = tool.dialog.showstr.call(null,ctx);var G__23043_23045 = elem;G__23043_23045.empty();
G__23043_23045.html(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br>",show_23044)));
return ctx;
});
test.dialog.view = cljs.core.partial.call(null,test.dialog.view,$("#container"));
test.dialog.main = (function main(){var test_str = tool.dialog.formatMessage.call(null,"Hello, I'm Han\n\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!",(7));var onTick = cljs.core.async.chan.call(null);var onClick = cljs.core.async.chan.call(null);var c__6202__auto___23234 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___23234,test_str,onTick,onClick){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___23234,test_str,onTick,onClick){
return (function (state_23173){var state_val_23174 = (state_23173[(1)]);if((state_val_23174 === (7)))
{var inst_23168 = (state_23173[(2)]);var inst_23144 = inst_23168;var state_23173__$1 = (function (){var statearr_23175 = state_23173;(statearr_23175[(7)] = inst_23144);
return statearr_23175;
})();var statearr_23176_23235 = state_23173__$1;(statearr_23176_23235[(2)] = null);
(statearr_23176_23235[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23174 === (1)))
{var inst_23140 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_23141 = [(4),test_str];var inst_23142 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_23140,inst_23141);var inst_23143 = tool.dialog.dialog.call(null,inst_23142);var inst_23144 = inst_23143;var state_23173__$1 = (function (){var statearr_23177 = state_23173;(statearr_23177[(7)] = inst_23144);
return statearr_23177;
})();var statearr_23178_23236 = state_23173__$1;(statearr_23178_23236[(2)] = null);
(statearr_23178_23236[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23174 === (4)))
{var inst_23152 = (state_23173[(8)]);var inst_23150 = (state_23173[(2)]);var inst_23151 = cljs.core.nth.call(null,inst_23150,(0),null);var inst_23152__$1 = cljs.core.nth.call(null,inst_23150,(1),null);var inst_23156 = cljs.core._EQ_.call(null,onTick,inst_23152__$1);var state_23173__$1 = (function (){var statearr_23179 = state_23173;(statearr_23179[(8)] = inst_23152__$1);
(statearr_23179[(9)] = inst_23151);
return statearr_23179;
})();if(inst_23156)
{var statearr_23180_23237 = state_23173__$1;(statearr_23180_23237[(1)] = (5));
} else
{var statearr_23181_23238 = state_23173__$1;(statearr_23181_23238[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23174 === (6)))
{var inst_23152 = (state_23173[(8)]);var inst_23161 = cljs.core._EQ_.call(null,onClick,inst_23152);var state_23173__$1 = state_23173;if(inst_23161)
{var statearr_23182_23239 = state_23173__$1;(statearr_23182_23239[(1)] = (8));
} else
{var statearr_23183_23240 = state_23173__$1;(statearr_23183_23240[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23174 === (3)))
{var inst_23171 = (state_23173[(2)]);var state_23173__$1 = state_23173;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23173__$1,inst_23171);
} else
{if((state_val_23174 === (2)))
{var inst_23147 = [onTick,onClick];var inst_23148 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_23147,null));var state_23173__$1 = state_23173;return cljs.core.async.ioc_alts_BANG_.call(null,state_23173__$1,(4),inst_23148);
} else
{if((state_val_23174 === (9)))
{var inst_23144 = (state_23173[(7)]);var state_23173__$1 = state_23173;var statearr_23184_23241 = state_23173__$1;(statearr_23184_23241[(2)] = inst_23144);
(statearr_23184_23241[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23174 === (5)))
{var inst_23144 = (state_23173[(7)]);var inst_23158 = tool.dialog.step.call(null,inst_23144);var inst_23159 = test.dialog.view.call(null,inst_23158);var state_23173__$1 = state_23173;var statearr_23185_23242 = state_23173__$1;(statearr_23185_23242[(2)] = inst_23159);
(statearr_23185_23242[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23174 === (10)))
{var inst_23166 = (state_23173[(2)]);var state_23173__$1 = state_23173;var statearr_23186_23243 = state_23173__$1;(statearr_23186_23243[(2)] = inst_23166);
(statearr_23186_23243[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23174 === (8)))
{var inst_23144 = (state_23173[(7)]);var inst_23163 = tool.dialog.requestNext.call(null,inst_23144);var state_23173__$1 = state_23173;var statearr_23187_23244 = state_23173__$1;(statearr_23187_23244[(2)] = inst_23163);
(statearr_23187_23244[(1)] = (10));
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
});})(c__6202__auto___23234,test_str,onTick,onClick))
;return ((function (switch__6187__auto__,c__6202__auto___23234,test_str,onTick,onClick){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_23191 = [null,null,null,null,null,null,null,null,null,null];(statearr_23191[(0)] = state_machine__6188__auto__);
(statearr_23191[(1)] = (1));
return statearr_23191;
});
var state_machine__6188__auto____1 = (function (state_23173){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_23173);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e23192){if((e23192 instanceof Object))
{var ex__6191__auto__ = e23192;var statearr_23193_23245 = state_23173;(statearr_23193_23245[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23173);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23192;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23246 = state_23173;
state_23173 = G__23246;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_23173){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_23173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___23234,test_str,onTick,onClick))
})();var state__6204__auto__ = (function (){var statearr_23194 = f__6203__auto__.call(null);(statearr_23194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___23234);
return statearr_23194;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___23234,test_str,onTick,onClick))
);
var c__6202__auto___23247 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___23247,test_str,onTick,onClick){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___23247,test_str,onTick,onClick){
return (function (state_23206){var state_val_23207 = (state_23206[(1)]);if((state_val_23207 === (5)))
{var inst_23195 = (state_23206[(7)]);var inst_23201 = (state_23206[(2)]);var tmp23208 = inst_23195;var inst_23195__$1 = tmp23208;var state_23206__$1 = (function (){var statearr_23209 = state_23206;(statearr_23209[(7)] = inst_23195__$1);
(statearr_23209[(8)] = inst_23201);
return statearr_23209;
})();var statearr_23210_23248 = state_23206__$1;(statearr_23210_23248[(2)] = null);
(statearr_23210_23248[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23207 === (4)))
{var inst_23195 = (state_23206[(7)]);var inst_23199 = (state_23206[(2)]);var state_23206__$1 = (function (){var statearr_23211 = state_23206;(statearr_23211[(9)] = inst_23199);
return statearr_23211;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23206__$1,(5),onTick,inst_23195);
} else
{if((state_val_23207 === (3)))
{var inst_23204 = (state_23206[(2)]);var state_23206__$1 = state_23206;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23206__$1,inst_23204);
} else
{if((state_val_23207 === (2)))
{var inst_23195 = (state_23206[(7)]);var inst_23197 = cljs.core.async.timeout.call(null,inst_23195);var state_23206__$1 = state_23206;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23206__$1,(4),inst_23197);
} else
{if((state_val_23207 === (1)))
{var inst_23195 = (33);var state_23206__$1 = (function (){var statearr_23212 = state_23206;(statearr_23212[(7)] = inst_23195);
return statearr_23212;
})();var statearr_23213_23249 = state_23206__$1;(statearr_23213_23249[(2)] = null);
(statearr_23213_23249[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___23247,test_str,onTick,onClick))
;return ((function (switch__6187__auto__,c__6202__auto___23247,test_str,onTick,onClick){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_23217 = [null,null,null,null,null,null,null,null,null,null];(statearr_23217[(0)] = state_machine__6188__auto__);
(statearr_23217[(1)] = (1));
return statearr_23217;
});
var state_machine__6188__auto____1 = (function (state_23206){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_23206);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e23218){if((e23218 instanceof Object))
{var ex__6191__auto__ = e23218;var statearr_23219_23250 = state_23206;(statearr_23219_23250[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23206);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23218;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23251 = state_23206;
state_23206 = G__23251;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_23206){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_23206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___23247,test_str,onTick,onClick))
})();var state__6204__auto__ = (function (){var statearr_23220 = f__6203__auto__.call(null);(statearr_23220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___23247);
return statearr_23220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___23247,test_str,onTick,onClick))
);
var G__23221_23252 = $("body");G__23221_23252.on("click",((function (G__23221_23252,test_str,onTick,onClick){
return (function (){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,G__23221_23252,test_str,onTick,onClick){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,G__23221_23252,test_str,onTick,onClick){
return (function (state_23225){var state_val_23226 = (state_23225[(1)]);if((state_val_23226 === (2)))
{var inst_23223 = (state_23225[(2)]);var state_23225__$1 = state_23225;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23225__$1,inst_23223);
} else
{if((state_val_23226 === (1)))
{var state_23225__$1 = state_23225;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23225__$1,(2),onClick,(0));
} else
{return null;
}
}
});})(c__6202__auto__,G__23221_23252,test_str,onTick,onClick))
;return ((function (switch__6187__auto__,c__6202__auto__,G__23221_23252,test_str,onTick,onClick){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_23230 = [null,null,null,null,null,null,null];(statearr_23230[(0)] = state_machine__6188__auto__);
(statearr_23230[(1)] = (1));
return statearr_23230;
});
var state_machine__6188__auto____1 = (function (state_23225){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_23225);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e23231){if((e23231 instanceof Object))
{var ex__6191__auto__ = e23231;var statearr_23232_23253 = state_23225;(statearr_23232_23253[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23225);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e23231;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23254 = state_23225;
state_23225 = G__23254;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_23225){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_23225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,G__23221_23252,test_str,onTick,onClick))
})();var state__6204__auto__ = (function (){var statearr_23233 = f__6203__auto__.call(null);(statearr_23233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_23233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,G__23221_23252,test_str,onTick,onClick))
);
return c__6202__auto__;
});})(G__23221_23252,test_str,onTick,onClick))
);
return null;
});
test.dialog.main.call(null);
