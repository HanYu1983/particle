// Compiled by ClojureScript 0.0-2268
goog.provide('test.dialogList');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.dialog');
goog.require('tool.dialog');
goog.require('cljs.core.async');
test.dialogList.step = (function step(p__11920){var map__11922 = p__11920;var map__11922__$1 = ((cljs.core.seq_QMARK_.call(null,map__11922))?cljs.core.apply.call(null,cljs.core.hash_map,map__11922):map__11922);var ctx = map__11922__$1;var dialogs = cljs.core.get.call(null,map__11922__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__11922__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var updated = cljs.core.map.call(null,((function (map__11922,map__11922__$1,ctx,dialogs,curr_idx){
return (function (idx,dialog){if(cljs.core._EQ_.call(null,idx,curr_idx))
{return tool.dialog.step.call(null,dialog);
} else
{return dialog;
}
});})(map__11922,map__11922__$1,ctx,dialogs,curr_idx))
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
test.dialogList.showstr = (function showstr(p__11923){var map__11925 = p__11923;var map__11925__$1 = ((cljs.core.seq_QMARK_.call(null,map__11925))?cljs.core.apply.call(null,cljs.core.hash_map,map__11925):map__11925);var ctx = map__11925__$1;var dialogs = cljs.core.get.call(null,map__11925__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__11925__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var curr_dialog = cljs.core.nth.call(null,dialogs,curr_idx);return tool.dialog.showstr.call(null,curr_dialog);
});
test.dialogList.requestNext = (function requestNext(p__11926){var map__11928 = p__11926;var map__11928__$1 = ((cljs.core.seq_QMARK_.call(null,map__11928))?cljs.core.apply.call(null,cljs.core.hash_map,map__11928):map__11928);var ctx = map__11928__$1;var dialogs = cljs.core.get.call(null,map__11928__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__11928__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var updated = cljs.core.map.call(null,((function (map__11928,map__11928__$1,ctx,dialogs,curr_idx){
return (function (idx,dialog){if(cljs.core._EQ_.call(null,idx,curr_idx))
{return tool.dialog.requestNext.call(null,dialog);
} else
{return dialog;
}
});})(map__11928,map__11928__$1,ctx,dialogs,curr_idx))
,cljs.core.range.call(null,cljs.core.count.call(null,dialogs)),dialogs);return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated);
});
test.dialogList.view = (function view(elem,ctx){var show_11931 = test.dialogList.showstr.call(null,ctx);var G__11930_11932 = elem;G__11930_11932.empty();
G__11930_11932.html(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br>",show_11931)));
return ctx;
});
test.dialogList.view = cljs.core.partial.call(null,test.dialogList.view,$("#container"));
test.dialogList.main = (function main(){var test_str = tool.dialog.formatMessage.call(null,"Hello, I'm Han\n\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u65872!\u6211\u662F\u4E2D\u65873!\u6211\u662F\u4E2D\u65874!\u6211\u662F\u4E2D\u65875!\u6211\u662F\u4E2D\u65876!",(7));var onTick = cljs.core.async.chan.call(null);var onClick = cljs.core.async.chan.call(null);var c__6203__auto___12139 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___12139,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___12139,test_str,onTick,onClick){
return (function (state_12078){var state_val_12079 = (state_12078[(1)]);if((state_val_12079 === (7)))
{var inst_12073 = (state_12078[(2)]);var inst_12049 = inst_12073;var state_12078__$1 = (function (){var statearr_12080 = state_12078;(statearr_12080[(7)] = inst_12049);
return statearr_12080;
})();var statearr_12081_12140 = state_12078__$1;(statearr_12081_12140[(2)] = null);
(statearr_12081_12140[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12079 === (1)))
{var inst_12036 = [new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584),new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986)];var inst_12037 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_12038 = [(4),test_str];var inst_12039 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12037,inst_12038);var inst_12040 = tool.dialog.dialog.call(null,inst_12039);var inst_12041 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_12040);var inst_12042 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_12043 = [(4),test_str];var inst_12044 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12042,inst_12043);var inst_12045 = tool.dialog.dialog.call(null,inst_12044);var inst_12046 = cljs.core._conj.call(null,inst_12041,inst_12045);var inst_12047 = [(0),inst_12046];var inst_12048 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_12036,inst_12047);var inst_12049 = inst_12048;var state_12078__$1 = (function (){var statearr_12082 = state_12078;(statearr_12082[(7)] = inst_12049);
return statearr_12082;
})();var statearr_12083_12141 = state_12078__$1;(statearr_12083_12141[(2)] = null);
(statearr_12083_12141[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12079 === (4)))
{var inst_12057 = (state_12078[(8)]);var inst_12055 = (state_12078[(2)]);var inst_12056 = cljs.core.nth.call(null,inst_12055,(0),null);var inst_12057__$1 = cljs.core.nth.call(null,inst_12055,(1),null);var inst_12061 = cljs.core._EQ_.call(null,onTick,inst_12057__$1);var state_12078__$1 = (function (){var statearr_12084 = state_12078;(statearr_12084[(8)] = inst_12057__$1);
(statearr_12084[(9)] = inst_12056);
return statearr_12084;
})();if(inst_12061)
{var statearr_12085_12142 = state_12078__$1;(statearr_12085_12142[(1)] = (5));
} else
{var statearr_12086_12143 = state_12078__$1;(statearr_12086_12143[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12079 === (6)))
{var inst_12057 = (state_12078[(8)]);var inst_12066 = cljs.core._EQ_.call(null,onClick,inst_12057);var state_12078__$1 = state_12078;if(inst_12066)
{var statearr_12087_12144 = state_12078__$1;(statearr_12087_12144[(1)] = (8));
} else
{var statearr_12088_12145 = state_12078__$1;(statearr_12088_12145[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12079 === (3)))
{var inst_12076 = (state_12078[(2)]);var state_12078__$1 = state_12078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12078__$1,inst_12076);
} else
{if((state_val_12079 === (2)))
{var inst_12052 = [onTick,onClick];var inst_12053 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12052,null));var state_12078__$1 = state_12078;return cljs.core.async.ioc_alts_BANG_.call(null,state_12078__$1,(4),inst_12053);
} else
{if((state_val_12079 === (9)))
{var inst_12049 = (state_12078[(7)]);var state_12078__$1 = state_12078;var statearr_12089_12146 = state_12078__$1;(statearr_12089_12146[(2)] = inst_12049);
(statearr_12089_12146[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12079 === (5)))
{var inst_12049 = (state_12078[(7)]);var inst_12063 = test.dialogList.step.call(null,inst_12049);var inst_12064 = test.dialogList.view.call(null,inst_12063);var state_12078__$1 = state_12078;var statearr_12090_12147 = state_12078__$1;(statearr_12090_12147[(2)] = inst_12064);
(statearr_12090_12147[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12079 === (10)))
{var inst_12071 = (state_12078[(2)]);var state_12078__$1 = state_12078;var statearr_12091_12148 = state_12078__$1;(statearr_12091_12148[(2)] = inst_12071);
(statearr_12091_12148[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12079 === (8)))
{var inst_12049 = (state_12078[(7)]);var inst_12068 = test.dialogList.requestNext.call(null,inst_12049);var state_12078__$1 = state_12078;var statearr_12092_12149 = state_12078__$1;(statearr_12092_12149[(2)] = inst_12068);
(statearr_12092_12149[(1)] = (10));
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
});})(c__6203__auto___12139,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___12139,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12096 = [null,null,null,null,null,null,null,null,null,null];(statearr_12096[(0)] = state_machine__6189__auto__);
(statearr_12096[(1)] = (1));
return statearr_12096;
});
var state_machine__6189__auto____1 = (function (state_12078){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12078);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12097){if((e12097 instanceof Object))
{var ex__6192__auto__ = e12097;var statearr_12098_12150 = state_12078;(statearr_12098_12150[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12078);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12097;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12151 = state_12078;
state_12078 = G__12151;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12078){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___12139,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_12099 = f__6204__auto__.call(null);(statearr_12099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___12139);
return statearr_12099;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___12139,test_str,onTick,onClick))
);
var c__6203__auto___12152 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___12152,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___12152,test_str,onTick,onClick){
return (function (state_12111){var state_val_12112 = (state_12111[(1)]);if((state_val_12112 === (5)))
{var inst_12100 = (state_12111[(7)]);var inst_12106 = (state_12111[(2)]);var tmp12113 = inst_12100;var inst_12100__$1 = tmp12113;var state_12111__$1 = (function (){var statearr_12114 = state_12111;(statearr_12114[(8)] = inst_12106);
(statearr_12114[(7)] = inst_12100__$1);
return statearr_12114;
})();var statearr_12115_12153 = state_12111__$1;(statearr_12115_12153[(2)] = null);
(statearr_12115_12153[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12112 === (4)))
{var inst_12100 = (state_12111[(7)]);var inst_12104 = (state_12111[(2)]);var state_12111__$1 = (function (){var statearr_12116 = state_12111;(statearr_12116[(9)] = inst_12104);
return statearr_12116;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12111__$1,(5),onTick,inst_12100);
} else
{if((state_val_12112 === (3)))
{var inst_12109 = (state_12111[(2)]);var state_12111__$1 = state_12111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12111__$1,inst_12109);
} else
{if((state_val_12112 === (2)))
{var inst_12100 = (state_12111[(7)]);var inst_12102 = cljs.core.async.timeout.call(null,inst_12100);var state_12111__$1 = state_12111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12111__$1,(4),inst_12102);
} else
{if((state_val_12112 === (1)))
{var inst_12100 = (100);var state_12111__$1 = (function (){var statearr_12117 = state_12111;(statearr_12117[(7)] = inst_12100);
return statearr_12117;
})();var statearr_12118_12154 = state_12111__$1;(statearr_12118_12154[(2)] = null);
(statearr_12118_12154[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___12152,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___12152,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12122 = [null,null,null,null,null,null,null,null,null,null];(statearr_12122[(0)] = state_machine__6189__auto__);
(statearr_12122[(1)] = (1));
return statearr_12122;
});
var state_machine__6189__auto____1 = (function (state_12111){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12111);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12123){if((e12123 instanceof Object))
{var ex__6192__auto__ = e12123;var statearr_12124_12155 = state_12111;(statearr_12124_12155[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12111);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12156 = state_12111;
state_12111 = G__12156;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12111){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___12152,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_12125 = f__6204__auto__.call(null);(statearr_12125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___12152);
return statearr_12125;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___12152,test_str,onTick,onClick))
);
var G__12126_12157 = $("body");G__12126_12157.on("click",((function (G__12126_12157,test_str,onTick,onClick){
return (function (){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,G__12126_12157,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,G__12126_12157,test_str,onTick,onClick){
return (function (state_12130){var state_val_12131 = (state_12130[(1)]);if((state_val_12131 === (2)))
{var inst_12128 = (state_12130[(2)]);var state_12130__$1 = state_12130;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12130__$1,inst_12128);
} else
{if((state_val_12131 === (1)))
{var state_12130__$1 = state_12130;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12130__$1,(2),onClick,(0));
} else
{return null;
}
}
});})(c__6203__auto__,G__12126_12157,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto__,G__12126_12157,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12135 = [null,null,null,null,null,null,null];(statearr_12135[(0)] = state_machine__6189__auto__);
(statearr_12135[(1)] = (1));
return statearr_12135;
});
var state_machine__6189__auto____1 = (function (state_12130){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12130);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12136){if((e12136 instanceof Object))
{var ex__6192__auto__ = e12136;var statearr_12137_12158 = state_12130;(statearr_12137_12158[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12130);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12136;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12159 = state_12130;
state_12130 = G__12159;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12130){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,G__12126_12157,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_12138 = f__6204__auto__.call(null);(statearr_12138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_12138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,G__12126_12157,test_str,onTick,onClick))
);
return c__6203__auto__;
});})(G__12126_12157,test_str,onTick,onClick))
);
return null;
});
test.dialogList.main.call(null);
