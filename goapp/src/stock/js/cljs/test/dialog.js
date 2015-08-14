// Compiled by ClojureScript 0.0-2268
goog.provide('test.dialog');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.dialog');
goog.require('tool.dialog');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
test.dialog.view = (function view(elem,ctx){var show_11709 = tool.dialog.showstr.call(null,ctx);var G__11708_11710 = elem;G__11708_11710.empty();
G__11708_11710.html(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br>",show_11709)));
return ctx;
});
test.dialog.view = cljs.core.partial.call(null,test.dialog.view,$("#container"));
test.dialog.main = (function main(){var test_str = tool.dialog.formatMessage.call(null,"Hello, I'm Han\n\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!",(7));var onTick = cljs.core.async.chan.call(null);var onClick = cljs.core.async.chan.call(null);var c__6203__auto___11899 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___11899,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___11899,test_str,onTick,onClick){
return (function (state_11838){var state_val_11839 = (state_11838[(1)]);if((state_val_11839 === (7)))
{var inst_11833 = (state_11838[(2)]);var inst_11809 = inst_11833;var state_11838__$1 = (function (){var statearr_11840 = state_11838;(statearr_11840[(7)] = inst_11809);
return statearr_11840;
})();var statearr_11841_11900 = state_11838__$1;(statearr_11841_11900[(2)] = null);
(statearr_11841_11900[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11839 === (1)))
{var inst_11805 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];var inst_11806 = [(4),test_str];var inst_11807 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_11805,inst_11806);var inst_11808 = tool.dialog.dialog.call(null,inst_11807);var inst_11809 = inst_11808;var state_11838__$1 = (function (){var statearr_11842 = state_11838;(statearr_11842[(7)] = inst_11809);
return statearr_11842;
})();var statearr_11843_11901 = state_11838__$1;(statearr_11843_11901[(2)] = null);
(statearr_11843_11901[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11839 === (4)))
{var inst_11817 = (state_11838[(8)]);var inst_11815 = (state_11838[(2)]);var inst_11816 = cljs.core.nth.call(null,inst_11815,(0),null);var inst_11817__$1 = cljs.core.nth.call(null,inst_11815,(1),null);var inst_11821 = cljs.core._EQ_.call(null,onTick,inst_11817__$1);var state_11838__$1 = (function (){var statearr_11844 = state_11838;(statearr_11844[(9)] = inst_11816);
(statearr_11844[(8)] = inst_11817__$1);
return statearr_11844;
})();if(inst_11821)
{var statearr_11845_11902 = state_11838__$1;(statearr_11845_11902[(1)] = (5));
} else
{var statearr_11846_11903 = state_11838__$1;(statearr_11846_11903[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11839 === (6)))
{var inst_11817 = (state_11838[(8)]);var inst_11826 = cljs.core._EQ_.call(null,onClick,inst_11817);var state_11838__$1 = state_11838;if(inst_11826)
{var statearr_11847_11904 = state_11838__$1;(statearr_11847_11904[(1)] = (8));
} else
{var statearr_11848_11905 = state_11838__$1;(statearr_11848_11905[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11839 === (3)))
{var inst_11836 = (state_11838[(2)]);var state_11838__$1 = state_11838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11838__$1,inst_11836);
} else
{if((state_val_11839 === (2)))
{var inst_11812 = [onTick,onClick];var inst_11813 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11812,null));var state_11838__$1 = state_11838;return cljs.core.async.ioc_alts_BANG_.call(null,state_11838__$1,(4),inst_11813);
} else
{if((state_val_11839 === (9)))
{var inst_11809 = (state_11838[(7)]);var state_11838__$1 = state_11838;var statearr_11849_11906 = state_11838__$1;(statearr_11849_11906[(2)] = inst_11809);
(statearr_11849_11906[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11839 === (5)))
{var inst_11809 = (state_11838[(7)]);var inst_11823 = tool.dialog.step.call(null,inst_11809);var inst_11824 = test.dialog.view.call(null,inst_11823);var state_11838__$1 = state_11838;var statearr_11850_11907 = state_11838__$1;(statearr_11850_11907[(2)] = inst_11824);
(statearr_11850_11907[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11839 === (10)))
{var inst_11831 = (state_11838[(2)]);var state_11838__$1 = state_11838;var statearr_11851_11908 = state_11838__$1;(statearr_11851_11908[(2)] = inst_11831);
(statearr_11851_11908[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11839 === (8)))
{var inst_11809 = (state_11838[(7)]);var inst_11828 = tool.dialog.requestNext.call(null,inst_11809);var state_11838__$1 = state_11838;var statearr_11852_11909 = state_11838__$1;(statearr_11852_11909[(2)] = inst_11828);
(statearr_11852_11909[(1)] = (10));
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
});})(c__6203__auto___11899,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___11899,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11856 = [null,null,null,null,null,null,null,null,null,null];(statearr_11856[(0)] = state_machine__6189__auto__);
(statearr_11856[(1)] = (1));
return statearr_11856;
});
var state_machine__6189__auto____1 = (function (state_11838){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11838);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11857){if((e11857 instanceof Object))
{var ex__6192__auto__ = e11857;var statearr_11858_11910 = state_11838;(statearr_11858_11910[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11838);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11857;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11911 = state_11838;
state_11838 = G__11911;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11838){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___11899,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_11859 = f__6204__auto__.call(null);(statearr_11859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___11899);
return statearr_11859;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___11899,test_str,onTick,onClick))
);
var c__6203__auto___11912 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto___11912,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto___11912,test_str,onTick,onClick){
return (function (state_11871){var state_val_11872 = (state_11871[(1)]);if((state_val_11872 === (5)))
{var inst_11860 = (state_11871[(7)]);var inst_11866 = (state_11871[(2)]);var tmp11873 = inst_11860;var inst_11860__$1 = tmp11873;var state_11871__$1 = (function (){var statearr_11874 = state_11871;(statearr_11874[(7)] = inst_11860__$1);
(statearr_11874[(8)] = inst_11866);
return statearr_11874;
})();var statearr_11875_11913 = state_11871__$1;(statearr_11875_11913[(2)] = null);
(statearr_11875_11913[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11872 === (4)))
{var inst_11860 = (state_11871[(7)]);var inst_11864 = (state_11871[(2)]);var state_11871__$1 = (function (){var statearr_11876 = state_11871;(statearr_11876[(9)] = inst_11864);
return statearr_11876;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11871__$1,(5),onTick,inst_11860);
} else
{if((state_val_11872 === (3)))
{var inst_11869 = (state_11871[(2)]);var state_11871__$1 = state_11871;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11871__$1,inst_11869);
} else
{if((state_val_11872 === (2)))
{var inst_11860 = (state_11871[(7)]);var inst_11862 = cljs.core.async.timeout.call(null,inst_11860);var state_11871__$1 = state_11871;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11871__$1,(4),inst_11862);
} else
{if((state_val_11872 === (1)))
{var inst_11860 = (33);var state_11871__$1 = (function (){var statearr_11877 = state_11871;(statearr_11877[(7)] = inst_11860);
return statearr_11877;
})();var statearr_11878_11914 = state_11871__$1;(statearr_11878_11914[(2)] = null);
(statearr_11878_11914[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6203__auto___11912,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto___11912,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11882 = [null,null,null,null,null,null,null,null,null,null];(statearr_11882[(0)] = state_machine__6189__auto__);
(statearr_11882[(1)] = (1));
return statearr_11882;
});
var state_machine__6189__auto____1 = (function (state_11871){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11871);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11883){if((e11883 instanceof Object))
{var ex__6192__auto__ = e11883;var statearr_11884_11915 = state_11871;(statearr_11884_11915[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11871);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11916 = state_11871;
state_11871 = G__11916;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11871){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto___11912,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_11885 = f__6204__auto__.call(null);(statearr_11885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto___11912);
return statearr_11885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto___11912,test_str,onTick,onClick))
);
var G__11886_11917 = $("body");G__11886_11917.on("click",((function (G__11886_11917,test_str,onTick,onClick){
return (function (){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__,G__11886_11917,test_str,onTick,onClick){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__,G__11886_11917,test_str,onTick,onClick){
return (function (state_11890){var state_val_11891 = (state_11890[(1)]);if((state_val_11891 === (2)))
{var inst_11888 = (state_11890[(2)]);var state_11890__$1 = state_11890;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11890__$1,inst_11888);
} else
{if((state_val_11891 === (1)))
{var state_11890__$1 = state_11890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11890__$1,(2),onClick,(0));
} else
{return null;
}
}
});})(c__6203__auto__,G__11886_11917,test_str,onTick,onClick))
;return ((function (switch__6188__auto__,c__6203__auto__,G__11886_11917,test_str,onTick,onClick){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11895 = [null,null,null,null,null,null,null];(statearr_11895[(0)] = state_machine__6189__auto__);
(statearr_11895[(1)] = (1));
return statearr_11895;
});
var state_machine__6189__auto____1 = (function (state_11890){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11890);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11896){if((e11896 instanceof Object))
{var ex__6192__auto__ = e11896;var statearr_11897_11918 = state_11890;(statearr_11897_11918[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11890);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11896;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11919 = state_11890;
state_11890 = G__11919;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11890){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__,G__11886_11917,test_str,onTick,onClick))
})();var state__6205__auto__ = (function (){var statearr_11898 = f__6204__auto__.call(null);(statearr_11898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11898;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__,G__11886_11917,test_str,onTick,onClick))
);
return c__6203__auto__;
});})(G__11886_11917,test_str,onTick,onClick))
);
return null;
});
test.dialog.main.call(null);
