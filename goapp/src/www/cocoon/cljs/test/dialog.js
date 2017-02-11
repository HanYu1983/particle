// Compiled by ClojureScript 0.0-2268
goog.provide('test.dialog');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.dialog');
goog.require('tool.dialog');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
test.dialog.view = (function view(elem,ctx){var show_13656 = tool.dialog.showstr.call(null,ctx);var G__13655_13657 = elem;G__13655_13657.empty();
G__13655_13657.html(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br>",show_13656)));
return ctx;
});
test.dialog.view = cljs.core.partial.call(null,test.dialog.view,$("#container"));
test.dialog.main = (function main(){var test_str = tool.dialog.formatMessage.call(null,"Hello, I'm Han\n\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!",(7));var onTick = cljs.core.async.chan.call(null);var onClick = cljs.core.async.chan.call(null);var c__6203__auto___13846 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___13846,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___13846,test_str,onTick,onClick){
return (function (state_13785){var state_val_13786 = (state_13785[(1)]);if((state_val_13786 === (7)))
{var inst_13780 = (state_13785[(2)]);var inst_13756 = inst_13780;var state_13785__$1 = (function (){var statearr_13787 = state_13785;(statearr_13787[(7)] = inst_13756);
return statearr_13787;
})();var statearr_13788_13847 = state_13785__$1;(statearr_13788_13847[(2)] = null);
(statearr_13788_13847[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13786 === (1)))
{var inst_13752 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_13753 = [(4),test_str];var inst_13754 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_13752,inst_13753);var inst_13755 = tool.dialog.dialog.call(null,inst_13754);var inst_13756 = inst_13755;var state_13785__$1 = (function (){var statearr_13789 = state_13785;(statearr_13789[(7)] = inst_13756);
return statearr_13789;
})();var statearr_13790_13848 = state_13785__$1;(statearr_13790_13848[(2)] = null);
(statearr_13790_13848[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13786 === (4)))
{var inst_13764 = (state_13785[(8)]);var inst_13762 = (state_13785[(2)]);var inst_13763 = cljs.core.nth.call(null,inst_13762,(0),null);var inst_13764__$1 = cljs.core.nth.call(null,inst_13762,(1),null);var inst_13768 = cljs.core._EQ_.call(null,onTick,inst_13764__$1);var state_13785__$1 = (function (){var statearr_13791 = state_13785;(statearr_13791[(8)] = inst_13764__$1);
(statearr_13791[(9)] = inst_13763);
return statearr_13791;
})();if(inst_13768)
{var statearr_13792_13849 = state_13785__$1;(statearr_13792_13849[(1)] = (5));
} else
{var statearr_13793_13850 = state_13785__$1;(statearr_13793_13850[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13786 === (6)))
{var inst_13764 = (state_13785[(8)]);var inst_13773 = cljs.core._EQ_.call(null,onClick,inst_13764);var state_13785__$1 = state_13785;if(inst_13773)
{var statearr_13794_13851 = state_13785__$1;(statearr_13794_13851[(1)] = (8));
} else
{var statearr_13795_13852 = state_13785__$1;(statearr_13795_13852[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13786 === (3)))
{var inst_13783 = (state_13785[(2)]);var state_13785__$1 = state_13785;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13785__$1,inst_13783);
} else
{if((state_val_13786 === (2)))
{var inst_13759 = [onTick,onClick];var inst_13760 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_13759,null));var state_13785__$1 = state_13785;return cljs.core.async.ioc_alts_BANG_.call(null,state_13785__$1,(4),inst_13760);
} else
{if((state_val_13786 === (9)))
{var inst_13756 = (state_13785[(7)]);var state_13785__$1 = state_13785;var statearr_13796_13853 = state_13785__$1;(statearr_13796_13853[(2)] = inst_13756);
(statearr_13796_13853[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13786 === (5)))
{var inst_13756 = (state_13785[(7)]);var inst_13770 = tool.dialog.step.call(null,inst_13756);var inst_13771 = test.dialog.view.call(null,inst_13770);var state_13785__$1 = state_13785;var statearr_13797_13854 = state_13785__$1;(statearr_13797_13854[(2)] = inst_13771);
(statearr_13797_13854[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13786 === (10)))
{var inst_13778 = (state_13785[(2)]);var state_13785__$1 = state_13785;var statearr_13798_13855 = state_13785__$1;(statearr_13798_13855[(2)] = inst_13778);
(statearr_13798_13855[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13786 === (8)))
{var inst_13756 = (state_13785[(7)]);var inst_13775 = tool.dialog.requestNext.call(null,inst_13756);var state_13785__$1 = state_13785;var statearr_13799_13856 = state_13785__$1;(statearr_13799_13856[(2)] = inst_13775);
(statearr_13799_13856[(1)] = (10));
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
});})(c__6203__auto___13846,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___13846,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_13803 = [null,null,null,null,null,null,null,null,null,null];(statearr_13803[(0)] = state_machine__6189__auto__);
(statearr_13803[(1)] = (1));
return statearr_13803;
});
var state_machine__6189__auto____1 = (function (state_13785){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13785);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13804){if((e13804 instanceof Object))
{var ex__6192__auto__ = e13804;var statearr_13805_13857 = state_13785;(statearr_13805_13857[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13785);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13804;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13858 = state_13785;
state_13785 = G__13858;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13785){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___13846,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_13806 = f__6204__auto__.call(null);(statearr_13806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___13846);
return statearr_13806;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___13846,test_str,onTick,onClick))
);
var c__6203__auto___13859 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___13859,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___13859,test_str,onTick,onClick){
return (function (state_13818){var state_val_13819 = (state_13818[(1)]);if((state_val_13819 === (5)))
{var inst_13807 = (state_13818[(7)]);var inst_13813 = (state_13818[(2)]);var tmp13820 = inst_13807;var inst_13807__$1 = tmp13820;var state_13818__$1 = (function (){var statearr_13821 = state_13818;(statearr_13821[(8)] = inst_13813);
(statearr_13821[(7)] = inst_13807__$1);
return statearr_13821;
})();var statearr_13822_13860 = state_13818__$1;(statearr_13822_13860[(2)] = null);
(statearr_13822_13860[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13819 === (4)))
{var inst_13807 = (state_13818[(7)]);var inst_13811 = (state_13818[(2)]);var state_13818__$1 = (function (){var statearr_13823 = state_13818;(statearr_13823[(9)] = inst_13811);
return statearr_13823;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13818__$1,(5),onTick,inst_13807);
} else
{if((state_val_13819 === (3)))
{var inst_13816 = (state_13818[(2)]);var state_13818__$1 = state_13818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13818__$1,inst_13816);
} else
{if((state_val_13819 === (2)))
{var inst_13807 = (state_13818[(7)]);var inst_13809 = cljs.core.async.timeout.call(null,inst_13807);var state_13818__$1 = state_13818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13818__$1,(4),inst_13809);
} else
{if((state_val_13819 === (1)))
{var inst_13807 = (33);var state_13818__$1 = (function (){var statearr_13824 = state_13818;(statearr_13824[(7)] = inst_13807);
return statearr_13824;
})();var statearr_13825_13861 = state_13818__$1;(statearr_13825_13861[(2)] = null);
(statearr_13825_13861[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___13859,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___13859,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_13829 = [null,null,null,null,null,null,null,null,null,null];(statearr_13829[(0)] = state_machine__6189__auto__);
(statearr_13829[(1)] = (1));
return statearr_13829;
});
var state_machine__6189__auto____1 = (function (state_13818){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13818);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13830){if((e13830 instanceof Object))
{var ex__6192__auto__ = e13830;var statearr_13831_13862 = state_13818;(statearr_13831_13862[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13818);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13863 = state_13818;
state_13818 = G__13863;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13818){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___13859,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_13832 = f__6204__auto__.call(null);(statearr_13832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___13859);
return statearr_13832;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___13859,test_str,onTick,onClick))
);
var G__13833_13864 = $("body");G__13833_13864.on("click",((function (G__13833_13864,test_str,onTick,onClick){
return (function (){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,G__13833_13864,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,G__13833_13864,test_str,onTick,onClick){
return (function (state_13837){var state_val_13838 = (state_13837[(1)]);if((state_val_13838 === (2)))
{var inst_13835 = (state_13837[(2)]);var state_13837__$1 = state_13837;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13837__$1,inst_13835);
} else
{if((state_val_13838 === (1)))
{var state_13837__$1 = state_13837;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13837__$1,(2),onClick,(0));
} else
{return null;
}
}
});})(c__6203__auto__,G__13833_13864,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto__,G__13833_13864,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_13842 = [null,null,null,null,null,null,null];(statearr_13842[(0)] = state_machine__6189__auto__);
(statearr_13842[(1)] = (1));
return statearr_13842;
});
var state_machine__6189__auto____1 = (function (state_13837){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_13837);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e13843){if((e13843 instanceof Object))
{var ex__6192__auto__ = e13843;var statearr_13844_13865 = state_13837;(statearr_13844_13865[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13837);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e13843;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13866 = state_13837;
state_13837 = G__13866;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_13837){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_13837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,G__13833_13864,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_13845 = f__6204__auto__.call(null);(statearr_13845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_13845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,G__13833_13864,test_str,onTick,onClick))
);
return c__6203__auto__;
});})(G__13833_13864,test_str,onTick,onClick))
);
return null;
});
test.dialog.main.call(null);
