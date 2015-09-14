// Compiled by ClojureScript 0.0-2268
goog.provide('test.dialog');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.dialog');
goog.require('tool.dialog');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
test.dialog.view = (function view(elem,ctx){var show_13984 = tool.dialog.showstr.call(null,ctx);var G__13983_13985 = elem;G__13983_13985.empty();
G__13983_13985.html(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br>",show_13984)));
return ctx;
});
test.dialog.view = cljs.core.partial.call(null,test.dialog.view,$("#container"));
test.dialog.main = (function main(){var test_str = tool.dialog.formatMessage.call(null,"Hello, I'm Han\n\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!",(7));var onTick = cljs.core.async.chan.call(null);var onClick = cljs.core.async.chan.call(null);var c__6203__auto___14174 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14174,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14174,test_str,onTick,onClick){
return (function (state_14113){var state_val_14114 = (state_14113[(1)]);if((state_val_14114 === (7)))
{var inst_14108 = (state_14113[(2)]);var inst_14084 = inst_14108;var state_14113__$1 = (function (){var statearr_14115 = state_14113;(statearr_14115[(7)] = inst_14084);
return statearr_14115;
})();var statearr_14116_14175 = state_14113__$1;(statearr_14116_14175[(2)] = null);
(statearr_14116_14175[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14114 === (1)))
{var inst_14080 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_14081 = [(4),test_str];var inst_14082 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14080,inst_14081);var inst_14083 = tool.dialog.dialog.call(null,inst_14082);var inst_14084 = inst_14083;var state_14113__$1 = (function (){var statearr_14117 = state_14113;(statearr_14117[(7)] = inst_14084);
return statearr_14117;
})();var statearr_14118_14176 = state_14113__$1;(statearr_14118_14176[(2)] = null);
(statearr_14118_14176[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14114 === (4)))
{var inst_14092 = (state_14113[(8)]);var inst_14090 = (state_14113[(2)]);var inst_14091 = cljs.core.nth.call(null,inst_14090,(0),null);var inst_14092__$1 = cljs.core.nth.call(null,inst_14090,(1),null);var inst_14096 = cljs.core._EQ_.call(null,onTick,inst_14092__$1);var state_14113__$1 = (function (){var statearr_14119 = state_14113;(statearr_14119[(9)] = inst_14091);
(statearr_14119[(8)] = inst_14092__$1);
return statearr_14119;
})();if(inst_14096)
{var statearr_14120_14177 = state_14113__$1;(statearr_14120_14177[(1)] = (5));
} else
{var statearr_14121_14178 = state_14113__$1;(statearr_14121_14178[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14114 === (6)))
{var inst_14092 = (state_14113[(8)]);var inst_14101 = cljs.core._EQ_.call(null,onClick,inst_14092);var state_14113__$1 = state_14113;if(inst_14101)
{var statearr_14122_14179 = state_14113__$1;(statearr_14122_14179[(1)] = (8));
} else
{var statearr_14123_14180 = state_14113__$1;(statearr_14123_14180[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14114 === (3)))
{var inst_14111 = (state_14113[(2)]);var state_14113__$1 = state_14113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14113__$1,inst_14111);
} else
{if((state_val_14114 === (2)))
{var inst_14087 = [onTick,onClick];var inst_14088 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14087,null));var state_14113__$1 = state_14113;return cljs.core.async.ioc_alts_BANG_.call(null,state_14113__$1,(4),inst_14088);
} else
{if((state_val_14114 === (9)))
{var inst_14084 = (state_14113[(7)]);var state_14113__$1 = state_14113;var statearr_14124_14181 = state_14113__$1;(statearr_14124_14181[(2)] = inst_14084);
(statearr_14124_14181[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14114 === (5)))
{var inst_14084 = (state_14113[(7)]);var inst_14098 = tool.dialog.step.call(null,inst_14084);var inst_14099 = test.dialog.view.call(null,inst_14098);var state_14113__$1 = state_14113;var statearr_14125_14182 = state_14113__$1;(statearr_14125_14182[(2)] = inst_14099);
(statearr_14125_14182[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14114 === (10)))
{var inst_14106 = (state_14113[(2)]);var state_14113__$1 = state_14113;var statearr_14126_14183 = state_14113__$1;(statearr_14126_14183[(2)] = inst_14106);
(statearr_14126_14183[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14114 === (8)))
{var inst_14084 = (state_14113[(7)]);var inst_14103 = tool.dialog.requestNext.call(null,inst_14084);var state_14113__$1 = state_14113;var statearr_14127_14184 = state_14113__$1;(statearr_14127_14184[(2)] = inst_14103);
(statearr_14127_14184[(1)] = (10));
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
});})(c__6203__auto___14174,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___14174,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14131 = [null,null,null,null,null,null,null,null,null,null];(statearr_14131[(0)] = state_machine__6189__auto__);
(statearr_14131[(1)] = (1));
return statearr_14131;
});
var state_machine__6189__auto____1 = (function (state_14113){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14113);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14132){if((e14132 instanceof Object))
{var ex__6192__auto__ = e14132;var statearr_14133_14185 = state_14113;(statearr_14133_14185[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14113);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14132;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14186 = state_14113;
state_14113 = G__14186;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14113){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14174,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_14134 = f__6204__auto__.call(null);(statearr_14134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14174);
return statearr_14134;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14174,test_str,onTick,onClick))
);
var c__6203__auto___14187 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14187,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14187,test_str,onTick,onClick){
return (function (state_14146){var state_val_14147 = (state_14146[(1)]);if((state_val_14147 === (5)))
{var inst_14135 = (state_14146[(7)]);var inst_14141 = (state_14146[(2)]);var tmp14148 = inst_14135;var inst_14135__$1 = tmp14148;var state_14146__$1 = (function (){var statearr_14149 = state_14146;(statearr_14149[(8)] = inst_14141);
(statearr_14149[(7)] = inst_14135__$1);
return statearr_14149;
})();var statearr_14150_14188 = state_14146__$1;(statearr_14150_14188[(2)] = null);
(statearr_14150_14188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14147 === (4)))
{var inst_14135 = (state_14146[(7)]);var inst_14139 = (state_14146[(2)]);var state_14146__$1 = (function (){var statearr_14151 = state_14146;(statearr_14151[(9)] = inst_14139);
return statearr_14151;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14146__$1,(5),onTick,inst_14135);
} else
{if((state_val_14147 === (3)))
{var inst_14144 = (state_14146[(2)]);var state_14146__$1 = state_14146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14146__$1,inst_14144);
} else
{if((state_val_14147 === (2)))
{var inst_14135 = (state_14146[(7)]);var inst_14137 = cljs.core.async.timeout.call(null,inst_14135);var state_14146__$1 = state_14146;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14146__$1,(4),inst_14137);
} else
{if((state_val_14147 === (1)))
{var inst_14135 = (33);var state_14146__$1 = (function (){var statearr_14152 = state_14146;(statearr_14152[(7)] = inst_14135);
return statearr_14152;
})();var statearr_14153_14189 = state_14146__$1;(statearr_14153_14189[(2)] = null);
(statearr_14153_14189[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___14187,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___14187,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14157 = [null,null,null,null,null,null,null,null,null,null];(statearr_14157[(0)] = state_machine__6189__auto__);
(statearr_14157[(1)] = (1));
return statearr_14157;
});
var state_machine__6189__auto____1 = (function (state_14146){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14146);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14158){if((e14158 instanceof Object))
{var ex__6192__auto__ = e14158;var statearr_14159_14190 = state_14146;(statearr_14159_14190[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14146);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14191 = state_14146;
state_14146 = G__14191;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14146){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14187,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_14160 = f__6204__auto__.call(null);(statearr_14160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14187);
return statearr_14160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14187,test_str,onTick,onClick))
);
var G__14161_14192 = $("body");G__14161_14192.on("click",((function (G__14161_14192,test_str,onTick,onClick){
return (function (){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,G__14161_14192,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,G__14161_14192,test_str,onTick,onClick){
return (function (state_14165){var state_val_14166 = (state_14165[(1)]);if((state_val_14166 === (2)))
{var inst_14163 = (state_14165[(2)]);var state_14165__$1 = state_14165;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14165__$1,inst_14163);
} else
{if((state_val_14166 === (1)))
{var state_14165__$1 = state_14165;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14165__$1,(2),onClick,(0));
} else
{return null;
}
}
});})(c__6203__auto__,G__14161_14192,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto__,G__14161_14192,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14170 = [null,null,null,null,null,null,null];(statearr_14170[(0)] = state_machine__6189__auto__);
(statearr_14170[(1)] = (1));
return statearr_14170;
});
var state_machine__6189__auto____1 = (function (state_14165){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14165);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14171){if((e14171 instanceof Object))
{var ex__6192__auto__ = e14171;var statearr_14172_14193 = state_14165;(statearr_14172_14193[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14165);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14171;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14194 = state_14165;
state_14165 = G__14194;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14165){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,G__14161_14192,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_14173 = f__6204__auto__.call(null);(statearr_14173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_14173;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,G__14161_14192,test_str,onTick,onClick))
);
return c__6203__auto__;
});})(G__14161_14192,test_str,onTick,onClick))
);
return null;
});
test.dialog.main.call(null);
