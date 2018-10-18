// Compiled by ClojureScript 0.0-2268
goog.provide('test.dialogList');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.dialog');
goog.require('tool.dialog');
goog.require('cljs.core.async');
test.dialogList.step = (function step(p__13867){var map__13869 = p__13867;var map__13869__$1 = ((cljs.core.seq_QMARK_.call(null,map__13869))?cljs.core.apply.call(null,cljs.core.hash_map,map__13869):map__13869);var ctx = map__13869__$1;var dialogs = cljs.core.get.call(null,map__13869__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__13869__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var updated = cljs.core.map.call(null,((function (map__13869,map__13869__$1,ctx,dialogs,curr_idx){
return (function (idx,dialog){if(cljs.core._EQ_.call(null,idx,curr_idx))
{return tool.dialog.step.call(null,dialog);
} else
{return dialog;
}
});})(map__13869,map__13869__$1,ctx,dialogs,curr_idx))
,cljs.core.range.call(null,cljs.core.count.call(null,dialogs)),dialogs);var curr_dialog = cljs.core.nth.call(null,updated,curr_idx);var last_line_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,dialogs),(curr_idx + (1)));if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(curr_dialog)))
{if(last_line_QMARK_)
{return cljs.core.assoc.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"end","end",-268185958));
} else
{return cljs.core.update_in.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584)], null),cljs.core.inc);
}
} else
{return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated);
}
});
test.dialogList.showstr = (function showstr(p__13870){var map__13872 = p__13870;var map__13872__$1 = ((cljs.core.seq_QMARK_.call(null,map__13872))?cljs.core.apply.call(null,cljs.core.hash_map,map__13872):map__13872);var ctx = map__13872__$1;var dialogs = cljs.core.get.call(null,map__13872__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__13872__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var curr_dialog = cljs.core.nth.call(null,dialogs,curr_idx);return tool.dialog.showstr.call(null,curr_dialog);
});
test.dialogList.requestNext = (function requestNext(p__13873){var map__13875 = p__13873;var map__13875__$1 = ((cljs.core.seq_QMARK_.call(null,map__13875))?cljs.core.apply.call(null,cljs.core.hash_map,map__13875):map__13875);var ctx = map__13875__$1;var dialogs = cljs.core.get.call(null,map__13875__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__13875__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var updated = cljs.core.map.call(null,((function (map__13875,map__13875__$1,ctx,dialogs,curr_idx){
return (function (idx,dialog){if(cljs.core._EQ_.call(null,idx,curr_idx))
{return tool.dialog.requestNext.call(null,dialog);
} else
{return dialog;
}
});})(map__13875,map__13875__$1,ctx,dialogs,curr_idx))
,cljs.core.range.call(null,cljs.core.count.call(null,dialogs)),dialogs);return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated);
});
test.dialogList.view = (function view(elem,ctx){var show_13878 = test.dialogList.showstr.call(null,ctx);var G__13877_13879 = elem;G__13877_13879.empty();
G__13877_13879.html(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br>",show_13878)));
return ctx;
});
test.dialogList.view = cljs.core.partial.call(null,test.dialogList.view,$("#container"));
test.dialogList.main = (function main(){var test_str = tool.dialog.formatMessage.call(null,"Hello, I'm Han\n\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u65872!\u6211\u662F\u4E2D\u65873!\u6211\u662F\u4E2D\u65874!\u6211\u662F\u4E2D\u65875!\u6211\u662F\u4E2D\u65876!",(7));var onTick = cljs.core.async.chan.call(null);var onClick = cljs.core.async.chan.call(null);var c__6203__auto___14086 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14086,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14086,test_str,onTick,onClick){
return (function (state_14025){var state_val_14026 = (state_14025[(1)]);if((state_val_14026 === (7)))
{var inst_14020 = (state_14025[(2)]);var inst_13996 = inst_14020;var state_14025__$1 = (function (){var statearr_14027 = state_14025;(statearr_14027[(7)] = inst_13996);
return statearr_14027;
})();var statearr_14028_14087 = state_14025__$1;(statearr_14028_14087[(2)] = null);
(statearr_14028_14087[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14026 === (1)))
{var inst_13983 = [new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584),new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986)];var inst_13984 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_13985 = [(4),test_str];var inst_13986 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13984,inst_13985);var inst_13987 = tool.dialog.dialog.call(null,inst_13986);var inst_13988 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_13987);var inst_13989 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_13990 = [(4),test_str];var inst_13991 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13989,inst_13990);var inst_13992 = tool.dialog.dialog.call(null,inst_13991);var inst_13993 = cljs.core._conj.call(null,inst_13988,inst_13992);var inst_13994 = [(0),inst_13993];var inst_13995 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13983,inst_13994);var inst_13996 = inst_13995;var state_14025__$1 = (function (){var statearr_14029 = state_14025;(statearr_14029[(7)] = inst_13996);
return statearr_14029;
})();var statearr_14030_14088 = state_14025__$1;(statearr_14030_14088[(2)] = null);
(statearr_14030_14088[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14026 === (4)))
{var inst_14004 = (state_14025[(8)]);var inst_14002 = (state_14025[(2)]);var inst_14003 = cljs.core.nth.call(null,inst_14002,(0),null);var inst_14004__$1 = cljs.core.nth.call(null,inst_14002,(1),null);var inst_14008 = cljs.core._EQ_.call(null,onTick,inst_14004__$1);var state_14025__$1 = (function (){var statearr_14031 = state_14025;(statearr_14031[(8)] = inst_14004__$1);
(statearr_14031[(9)] = inst_14003);
return statearr_14031;
})();if(inst_14008)
{var statearr_14032_14089 = state_14025__$1;(statearr_14032_14089[(1)] = (5));
} else
{var statearr_14033_14090 = state_14025__$1;(statearr_14033_14090[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14026 === (6)))
{var inst_14004 = (state_14025[(8)]);var inst_14013 = cljs.core._EQ_.call(null,onClick,inst_14004);var state_14025__$1 = state_14025;if(inst_14013)
{var statearr_14034_14091 = state_14025__$1;(statearr_14034_14091[(1)] = (8));
} else
{var statearr_14035_14092 = state_14025__$1;(statearr_14035_14092[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14026 === (3)))
{var inst_14023 = (state_14025[(2)]);var state_14025__$1 = state_14025;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14025__$1,inst_14023);
} else
{if((state_val_14026 === (2)))
{var inst_13999 = [onTick,onClick];var inst_14000 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13999,null));var state_14025__$1 = state_14025;return cljs.core.async.ioc_alts_BANG_.call(null,state_14025__$1,(4),inst_14000);
} else
{if((state_val_14026 === (9)))
{var inst_13996 = (state_14025[(7)]);var state_14025__$1 = state_14025;var statearr_14036_14093 = state_14025__$1;(statearr_14036_14093[(2)] = inst_13996);
(statearr_14036_14093[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14026 === (5)))
{var inst_13996 = (state_14025[(7)]);var inst_14010 = test.dialogList.step.call(null,inst_13996);var inst_14011 = test.dialogList.view.call(null,inst_14010);var state_14025__$1 = state_14025;var statearr_14037_14094 = state_14025__$1;(statearr_14037_14094[(2)] = inst_14011);
(statearr_14037_14094[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14026 === (10)))
{var inst_14018 = (state_14025[(2)]);var state_14025__$1 = state_14025;var statearr_14038_14095 = state_14025__$1;(statearr_14038_14095[(2)] = inst_14018);
(statearr_14038_14095[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14026 === (8)))
{var inst_13996 = (state_14025[(7)]);var inst_14015 = test.dialogList.requestNext.call(null,inst_13996);var state_14025__$1 = state_14025;var statearr_14039_14096 = state_14025__$1;(statearr_14039_14096[(2)] = inst_14015);
(statearr_14039_14096[(1)] = (10));
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
});})(c__6203__auto___14086,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___14086,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14043 = [null,null,null,null,null,null,null,null,null,null];(statearr_14043[(0)] = state_machine__6189__auto__);
(statearr_14043[(1)] = (1));
return statearr_14043;
});
var state_machine__6189__auto____1 = (function (state_14025){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14025);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14044){if((e14044 instanceof Object))
{var ex__6192__auto__ = e14044;var statearr_14045_14097 = state_14025;(statearr_14045_14097[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14025);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14044;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14098 = state_14025;
state_14025 = G__14098;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14025){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14086,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_14046 = f__6204__auto__.call(null);(statearr_14046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14086);
return statearr_14046;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14086,test_str,onTick,onClick))
);
var c__6203__auto___14099 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___14099,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___14099,test_str,onTick,onClick){
return (function (state_14058){var state_val_14059 = (state_14058[(1)]);if((state_val_14059 === (5)))
{var inst_14047 = (state_14058[(7)]);var inst_14053 = (state_14058[(2)]);var tmp14060 = inst_14047;var inst_14047__$1 = tmp14060;var state_14058__$1 = (function (){var statearr_14061 = state_14058;(statearr_14061[(7)] = inst_14047__$1);
(statearr_14061[(8)] = inst_14053);
return statearr_14061;
})();var statearr_14062_14100 = state_14058__$1;(statearr_14062_14100[(2)] = null);
(statearr_14062_14100[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14059 === (4)))
{var inst_14047 = (state_14058[(7)]);var inst_14051 = (state_14058[(2)]);var state_14058__$1 = (function (){var statearr_14063 = state_14058;(statearr_14063[(9)] = inst_14051);
return statearr_14063;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14058__$1,(5),onTick,inst_14047);
} else
{if((state_val_14059 === (3)))
{var inst_14056 = (state_14058[(2)]);var state_14058__$1 = state_14058;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14058__$1,inst_14056);
} else
{if((state_val_14059 === (2)))
{var inst_14047 = (state_14058[(7)]);var inst_14049 = cljs.core.async.timeout.call(null,inst_14047);var state_14058__$1 = state_14058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14058__$1,(4),inst_14049);
} else
{if((state_val_14059 === (1)))
{var inst_14047 = (100);var state_14058__$1 = (function (){var statearr_14064 = state_14058;(statearr_14064[(7)] = inst_14047);
return statearr_14064;
})();var statearr_14065_14101 = state_14058__$1;(statearr_14065_14101[(2)] = null);
(statearr_14065_14101[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___14099,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___14099,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14069 = [null,null,null,null,null,null,null,null,null,null];(statearr_14069[(0)] = state_machine__6189__auto__);
(statearr_14069[(1)] = (1));
return statearr_14069;
});
var state_machine__6189__auto____1 = (function (state_14058){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14058);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14070){if((e14070 instanceof Object))
{var ex__6192__auto__ = e14070;var statearr_14071_14102 = state_14058;(statearr_14071_14102[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14058);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14070;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14103 = state_14058;
state_14058 = G__14103;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14058){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___14099,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_14072 = f__6204__auto__.call(null);(statearr_14072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___14099);
return statearr_14072;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___14099,test_str,onTick,onClick))
);
var G__14073_14104 = $("body");G__14073_14104.on("click",((function (G__14073_14104,test_str,onTick,onClick){
return (function (){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,G__14073_14104,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,G__14073_14104,test_str,onTick,onClick){
return (function (state_14077){var state_val_14078 = (state_14077[(1)]);if((state_val_14078 === (2)))
{var inst_14075 = (state_14077[(2)]);var state_14077__$1 = state_14077;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14077__$1,inst_14075);
} else
{if((state_val_14078 === (1)))
{var state_14077__$1 = state_14077;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14077__$1,(2),onClick,(0));
} else
{return null;
}
}
});})(c__6203__auto__,G__14073_14104,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto__,G__14073_14104,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_14082 = [null,null,null,null,null,null,null];(statearr_14082[(0)] = state_machine__6189__auto__);
(statearr_14082[(1)] = (1));
return statearr_14082;
});
var state_machine__6189__auto____1 = (function (state_14077){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_14077);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e14083){if((e14083 instanceof Object))
{var ex__6192__auto__ = e14083;var statearr_14084_14105 = state_14077;(statearr_14084_14105[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14077);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14083;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14106 = state_14077;
state_14077 = G__14106;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_14077){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_14077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,G__14073_14104,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_14085 = f__6204__auto__.call(null);(statearr_14085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_14085;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,G__14073_14104,test_str,onTick,onClick))
);
return c__6203__auto__;
});})(G__14073_14104,test_str,onTick,onClick))
);
return null;
});
test.dialogList.main.call(null);
