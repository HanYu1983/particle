// Compiled by ClojureScript 0.0-2268
goog.provide('test.dialogList');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.dialog');
goog.require('tool.dialog');
goog.require('cljs.core.async');
test.dialogList.step = (function step(p__10667){var map__10669 = p__10667;var map__10669__$1 = ((cljs.core.seq_QMARK_.call(null,map__10669))?cljs.core.apply.call(null,cljs.core.hash_map,map__10669):map__10669);var ctx = map__10669__$1;var dialogs = cljs.core.get.call(null,map__10669__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__10669__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var updated = cljs.core.map.call(null,((function (map__10669,map__10669__$1,ctx,dialogs,curr_idx){
return (function (idx,dialog){if(cljs.core._EQ_.call(null,idx,curr_idx))
{return tool.dialog.step.call(null,dialog);
} else
{return dialog;
}
});})(map__10669,map__10669__$1,ctx,dialogs,curr_idx))
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
test.dialogList.showstr = (function showstr(p__10670){var map__10672 = p__10670;var map__10672__$1 = ((cljs.core.seq_QMARK_.call(null,map__10672))?cljs.core.apply.call(null,cljs.core.hash_map,map__10672):map__10672);var ctx = map__10672__$1;var dialogs = cljs.core.get.call(null,map__10672__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__10672__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var curr_dialog = cljs.core.nth.call(null,dialogs,curr_idx);return tool.dialog.showstr.call(null,curr_dialog);
});
test.dialogList.requestNext = (function requestNext(p__10673){var map__10675 = p__10673;var map__10675__$1 = ((cljs.core.seq_QMARK_.call(null,map__10675))?cljs.core.apply.call(null,cljs.core.hash_map,map__10675):map__10675);var ctx = map__10675__$1;var dialogs = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));var curr_idx = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var updated = cljs.core.map.call(null,((function (map__10675,map__10675__$1,ctx,dialogs,curr_idx){
return (function (idx,dialog){if(cljs.core._EQ_.call(null,idx,curr_idx))
{return tool.dialog.requestNext.call(null,dialog);
} else
{return dialog;
}
});})(map__10675,map__10675__$1,ctx,dialogs,curr_idx))
,cljs.core.range.call(null,cljs.core.count.call(null,dialogs)),dialogs);return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated);
});
test.dialogList.view = (function view(elem,ctx){var show_10678 = test.dialogList.showstr.call(null,ctx);var G__10677_10679 = elem;G__10677_10679.empty();
G__10677_10679.html(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br>",show_10678)));
return ctx;
});
test.dialogList.view = cljs.core.partial.call(null,test.dialogList.view,$("#container"));
test.dialogList.main = (function main(){var test_str = tool.dialog.formatMessage.call(null,"Hello, I'm Han\n\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u65872!\u6211\u662F\u4E2D\u65873!\u6211\u662F\u4E2D\u65874!\u6211\u662F\u4E2D\u65875!\u6211\u662F\u4E2D\u65876!",(7));var onTick = cljs.core.async.chan.call(null);var onClick = cljs.core.async.chan.call(null);var c__6203__auto___10886 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10886,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10886,test_str,onTick,onClick){
return (function (state_10825){var state_val_10826 = (state_10825[(1)]);if((state_val_10826 === (7)))
{var inst_10820 = (state_10825[(2)]);var inst_10796 = inst_10820;var state_10825__$1 = (function (){var statearr_10827 = state_10825;(statearr_10827[(7)] = inst_10796);
return statearr_10827;
})();var statearr_10828_10887 = state_10825__$1;(statearr_10828_10887[(2)] = null);
(statearr_10828_10887[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10826 === (1)))
{var inst_10783 = [new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584),new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986)];var inst_10784 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_10785 = [(4),test_str];var inst_10786 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10784,inst_10785);var inst_10787 = tool.dialog.dialog.call(null,inst_10786);var inst_10788 = cljs.core._conj.call(null,cljs.core.List.EMPTY,inst_10787);var inst_10789 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_10790 = [(4),test_str];var inst_10791 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10789,inst_10790);var inst_10792 = tool.dialog.dialog.call(null,inst_10791);var inst_10793 = cljs.core._conj.call(null,inst_10788,inst_10792);var inst_10794 = [(0),inst_10793];var inst_10795 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_10783,inst_10794);var inst_10796 = inst_10795;var state_10825__$1 = (function (){var statearr_10829 = state_10825;(statearr_10829[(7)] = inst_10796);
return statearr_10829;
})();var statearr_10830_10888 = state_10825__$1;(statearr_10830_10888[(2)] = null);
(statearr_10830_10888[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10826 === (4)))
{var inst_10804 = (state_10825[(8)]);var inst_10802 = (state_10825[(2)]);var inst_10803 = cljs.core.nth.call(null,inst_10802,(0),null);var inst_10804__$1 = cljs.core.nth.call(null,inst_10802,(1),null);var inst_10808 = cljs.core._EQ_.call(null,onTick,inst_10804__$1);var state_10825__$1 = (function (){var statearr_10831 = state_10825;(statearr_10831[(9)] = inst_10803);
(statearr_10831[(8)] = inst_10804__$1);
return statearr_10831;
})();if(inst_10808)
{var statearr_10832_10889 = state_10825__$1;(statearr_10832_10889[(1)] = (5));
} else
{var statearr_10833_10890 = state_10825__$1;(statearr_10833_10890[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10826 === (6)))
{var inst_10804 = (state_10825[(8)]);var inst_10813 = cljs.core._EQ_.call(null,onClick,inst_10804);var state_10825__$1 = state_10825;if(inst_10813)
{var statearr_10834_10891 = state_10825__$1;(statearr_10834_10891[(1)] = (8));
} else
{var statearr_10835_10892 = state_10825__$1;(statearr_10835_10892[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10826 === (3)))
{var inst_10823 = (state_10825[(2)]);var state_10825__$1 = state_10825;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10825__$1,inst_10823);
} else
{if((state_val_10826 === (2)))
{var inst_10799 = [onTick,onClick];var inst_10800 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10799,null));var state_10825__$1 = state_10825;return cljs.core.async.ioc_alts_BANG_.call(null,state_10825__$1,(4),inst_10800);
} else
{if((state_val_10826 === (9)))
{var inst_10796 = (state_10825[(7)]);var state_10825__$1 = state_10825;var statearr_10836_10893 = state_10825__$1;(statearr_10836_10893[(2)] = inst_10796);
(statearr_10836_10893[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10826 === (5)))
{var inst_10796 = (state_10825[(7)]);var inst_10810 = test.dialogList.step.call(null,inst_10796);var inst_10811 = test.dialogList.view.call(null,inst_10810);var state_10825__$1 = state_10825;var statearr_10837_10894 = state_10825__$1;(statearr_10837_10894[(2)] = inst_10811);
(statearr_10837_10894[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10826 === (10)))
{var inst_10818 = (state_10825[(2)]);var state_10825__$1 = state_10825;var statearr_10838_10895 = state_10825__$1;(statearr_10838_10895[(2)] = inst_10818);
(statearr_10838_10895[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10826 === (8)))
{var inst_10796 = (state_10825[(7)]);var inst_10815 = test.dialogList.requestNext.call(null,inst_10796);var state_10825__$1 = state_10825;var statearr_10839_10896 = state_10825__$1;(statearr_10839_10896[(2)] = inst_10815);
(statearr_10839_10896[(1)] = (10));
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
});})(c__6203__auto___10886,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___10886,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10843 = [null,null,null,null,null,null,null,null,null,null];(statearr_10843[(0)] = state_machine__6189__auto__);
(statearr_10843[(1)] = (1));
return statearr_10843;
});
var state_machine__6189__auto____1 = (function (state_10825){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10825);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10844){if((e10844 instanceof Object))
{var ex__6192__auto__ = e10844;var statearr_10845_10897 = state_10825;(statearr_10845_10897[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10825);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10844;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10898 = state_10825;
state_10825 = G__10898;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10825){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10886,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_10846 = f__6204__auto__.call(null);(statearr_10846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10886);
return statearr_10846;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10886,test_str,onTick,onClick))
);
var c__6203__auto___10899 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___10899,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___10899,test_str,onTick,onClick){
return (function (state_10858){var state_val_10859 = (state_10858[(1)]);if((state_val_10859 === (5)))
{var inst_10847 = (state_10858[(7)]);var inst_10853 = (state_10858[(2)]);var tmp10860 = inst_10847;var inst_10847__$1 = tmp10860;var state_10858__$1 = (function (){var statearr_10861 = state_10858;(statearr_10861[(8)] = inst_10853);
(statearr_10861[(7)] = inst_10847__$1);
return statearr_10861;
})();var statearr_10862_10900 = state_10858__$1;(statearr_10862_10900[(2)] = null);
(statearr_10862_10900[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10859 === (4)))
{var inst_10847 = (state_10858[(7)]);var inst_10851 = (state_10858[(2)]);var state_10858__$1 = (function (){var statearr_10863 = state_10858;(statearr_10863[(9)] = inst_10851);
return statearr_10863;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10858__$1,(5),onTick,inst_10847);
} else
{if((state_val_10859 === (3)))
{var inst_10856 = (state_10858[(2)]);var state_10858__$1 = state_10858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10858__$1,inst_10856);
} else
{if((state_val_10859 === (2)))
{var inst_10847 = (state_10858[(7)]);var inst_10849 = cljs.core.async.timeout.call(null,inst_10847);var state_10858__$1 = state_10858;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10858__$1,(4),inst_10849);
} else
{if((state_val_10859 === (1)))
{var inst_10847 = (100);var state_10858__$1 = (function (){var statearr_10864 = state_10858;(statearr_10864[(7)] = inst_10847);
return statearr_10864;
})();var statearr_10865_10901 = state_10858__$1;(statearr_10865_10901[(2)] = null);
(statearr_10865_10901[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___10899,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___10899,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10869 = [null,null,null,null,null,null,null,null,null,null];(statearr_10869[(0)] = state_machine__6189__auto__);
(statearr_10869[(1)] = (1));
return statearr_10869;
});
var state_machine__6189__auto____1 = (function (state_10858){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10858);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10870){if((e10870 instanceof Object))
{var ex__6192__auto__ = e10870;var statearr_10871_10902 = state_10858;(statearr_10871_10902[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10858);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10870;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10903 = state_10858;
state_10858 = G__10903;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10858){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___10899,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_10872 = f__6204__auto__.call(null);(statearr_10872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___10899);
return statearr_10872;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___10899,test_str,onTick,onClick))
);
var G__10873_10904 = $("body");G__10873_10904.on("click",((function (G__10873_10904,test_str,onTick,onClick){
return (function (){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,G__10873_10904,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,G__10873_10904,test_str,onTick,onClick){
return (function (state_10877){var state_val_10878 = (state_10877[(1)]);if((state_val_10878 === (2)))
{var inst_10875 = (state_10877[(2)]);var state_10877__$1 = state_10877;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10877__$1,inst_10875);
} else
{if((state_val_10878 === (1)))
{var state_10877__$1 = state_10877;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10877__$1,(2),onClick,(0));
} else
{return null;
}
}
});})(c__6203__auto__,G__10873_10904,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto__,G__10873_10904,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_10882 = [null,null,null,null,null,null,null];(statearr_10882[(0)] = state_machine__6189__auto__);
(statearr_10882[(1)] = (1));
return statearr_10882;
});
var state_machine__6189__auto____1 = (function (state_10877){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_10877);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e10883){if((e10883 instanceof Object))
{var ex__6192__auto__ = e10883;var statearr_10884_10905 = state_10877;(statearr_10884_10905[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10877);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10906 = state_10877;
state_10877 = G__10906;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_10877){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_10877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,G__10873_10904,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_10885 = f__6204__auto__.call(null);(statearr_10885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_10885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,G__10873_10904,test_str,onTick,onClick))
);
return c__6203__auto__;
});})(G__10873_10904,test_str,onTick,onClick))
);
return null;
});
test.dialogList.main.call(null);
