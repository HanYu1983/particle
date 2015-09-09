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
goog.require('stock.tool');
goog.require('stock.tool');
app.stock.main.main = (function main(){var onView_48977 = cljs.core.async.chan.call(null);var onModel_48978 = cljs.core.async.chan.call(null);var onSys_48979 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_48977,onModel_48978,onSys_48979){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_48977,onModel_48978,onSys_48979){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_48977,onModel_48978,onSys_48979){
return (function (state_48890){var state_val_48891 = (state_48890[(1)]);if((state_val_48891 === (2)))
{var inst_48888 = (state_48890[(2)]);var state_48890__$1 = state_48890;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48890__$1,inst_48888);
} else
{if((state_val_48891 === (1)))
{var state_48890__$1 = state_48890;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48890__$1,(2),onView_48977,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_48977,onModel_48978,onSys_48979))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_48977,onModel_48978,onSys_48979){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48895 = [null,null,null,null,null,null,null];(statearr_48895[(0)] = state_machine__6188__auto__);
(statearr_48895[(1)] = (1));
return statearr_48895;
});
var state_machine__6188__auto____1 = (function (state_48890){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48890);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48896){if((e48896 instanceof Object))
{var ex__6191__auto__ = e48896;var statearr_48897_48980 = state_48890;(statearr_48897_48980[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48890);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48896;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48981 = state_48890;
state_48890 = G__48981;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48890){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_48977,onModel_48978,onSys_48979))
})();var state__6204__auto__ = (function (){var statearr_48898 = f__6203__auto__.call(null);(statearr_48898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_48898;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_48977,onModel_48978,onSys_48979))
);
return c__6202__auto__;
});})(onView_48977,onModel_48978,onSys_48979))
);
var c__6202__auto___48982 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___48982,onView_48977,onModel_48978,onSys_48979){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___48982,onView_48977,onModel_48978,onSys_48979){
return (function (state_48907){var state_val_48908 = (state_48907[(1)]);if((state_val_48908 === (4)))
{var inst_48901 = (state_48907[(2)]);var inst_48902 = common.onModel.onNext(inst_48901);var state_48907__$1 = (function (){var statearr_48909 = state_48907;(statearr_48909[(7)] = inst_48902);
return statearr_48909;
})();var statearr_48910_48983 = state_48907__$1;(statearr_48910_48983[(2)] = null);
(statearr_48910_48983[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48908 === (3)))
{var inst_48905 = (state_48907[(2)]);var state_48907__$1 = state_48907;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48907__$1,inst_48905);
} else
{if((state_val_48908 === (2)))
{var state_48907__$1 = state_48907;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48907__$1,(4),onModel_48978);
} else
{if((state_val_48908 === (1)))
{var state_48907__$1 = state_48907;var statearr_48911_48984 = state_48907__$1;(statearr_48911_48984[(2)] = null);
(statearr_48911_48984[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___48982,onView_48977,onModel_48978,onSys_48979))
;return ((function (switch__6187__auto__,c__6202__auto___48982,onView_48977,onModel_48978,onSys_48979){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48915 = [null,null,null,null,null,null,null,null];(statearr_48915[(0)] = state_machine__6188__auto__);
(statearr_48915[(1)] = (1));
return statearr_48915;
});
var state_machine__6188__auto____1 = (function (state_48907){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48907);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48916){if((e48916 instanceof Object))
{var ex__6191__auto__ = e48916;var statearr_48917_48985 = state_48907;(statearr_48917_48985[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48907);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48916;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48986 = state_48907;
state_48907 = G__48986;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48907){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___48982,onView_48977,onModel_48978,onSys_48979))
})();var state__6204__auto__ = (function (){var statearr_48918 = f__6203__auto__.call(null);(statearr_48918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___48982);
return statearr_48918;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___48982,onView_48977,onModel_48978,onSys_48979))
);
var c__6202__auto___48987 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___48987,onView_48977,onModel_48978,onSys_48979){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___48987,onView_48977,onModel_48978,onSys_48979){
return (function (state_48955){var state_val_48956 = (state_48955[(1)]);if((state_val_48956 === (7)))
{var inst_48950 = (state_48955[(2)]);var inst_48922 = inst_48950;var state_48955__$1 = (function (){var statearr_48957 = state_48955;(statearr_48957[(7)] = inst_48922);
return statearr_48957;
})();var statearr_48958_48988 = state_48955__$1;(statearr_48958_48988[(2)] = null);
(statearr_48958_48988[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48956 === (1)))
{var inst_48919 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_48920 = [onView_48977,onModel_48978,onSys_48979,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_48921 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_48919,inst_48920);var inst_48922 = inst_48921;var state_48955__$1 = (function (){var statearr_48959 = state_48955;(statearr_48959[(7)] = inst_48922);
return statearr_48959;
})();var statearr_48960_48989 = state_48955__$1;(statearr_48960_48989[(2)] = null);
(statearr_48960_48989[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48956 === (4)))
{var inst_48930 = (state_48955[(8)]);var inst_48928 = (state_48955[(2)]);var inst_48929 = cljs.core.nth.call(null,inst_48928,(0),null);var inst_48930__$1 = cljs.core.nth.call(null,inst_48928,(1),null);var inst_48934 = cljs.core._EQ_.call(null,onSys_48979,inst_48930__$1);var state_48955__$1 = (function (){var statearr_48961 = state_48955;(statearr_48961[(9)] = inst_48929);
(statearr_48961[(8)] = inst_48930__$1);
return statearr_48961;
})();if(inst_48934)
{var statearr_48962_48990 = state_48955__$1;(statearr_48962_48990[(1)] = (5));
} else
{var statearr_48963_48991 = state_48955__$1;(statearr_48963_48991[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48956 === (6)))
{var inst_48930 = (state_48955[(8)]);var inst_48941 = cljs.core._EQ_.call(null,onView_48977,inst_48930);var state_48955__$1 = state_48955;if(inst_48941)
{var statearr_48964_48992 = state_48955__$1;(statearr_48964_48992[(1)] = (8));
} else
{var statearr_48965_48993 = state_48955__$1;(statearr_48965_48993[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48956 === (3)))
{var inst_48953 = (state_48955[(2)]);var state_48955__$1 = state_48955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48955__$1,inst_48953);
} else
{if((state_val_48956 === (2)))
{var inst_48925 = [onView_48977,onSys_48979];var inst_48926 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_48925,null));var state_48955__$1 = state_48955;return cljs.core.async.ioc_alts_BANG_.call(null,state_48955__$1,(4),inst_48926);
} else
{if((state_val_48956 === (9)))
{var inst_48922 = (state_48955[(7)]);var state_48955__$1 = state_48955;var statearr_48966_48994 = state_48955__$1;(statearr_48966_48994[(2)] = inst_48922);
(statearr_48966_48994[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48956 === (5)))
{var inst_48929 = (state_48955[(9)]);var inst_48922 = (state_48955[(7)]);var inst_48937 = cljs.core.nth.call(null,inst_48929,(0),null);var inst_48938 = cljs.core.nth.call(null,inst_48929,(1),null);var inst_48939 = app.stock.abstract$.onSystem.call(null,inst_48937,inst_48938,inst_48922);var state_48955__$1 = state_48955;var statearr_48967_48995 = state_48955__$1;(statearr_48967_48995[(2)] = inst_48939);
(statearr_48967_48995[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48956 === (10)))
{var inst_48948 = (state_48955[(2)]);var state_48955__$1 = state_48955;var statearr_48968_48996 = state_48955__$1;(statearr_48968_48996[(2)] = inst_48948);
(statearr_48968_48996[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48956 === (8)))
{var inst_48929 = (state_48955[(9)]);var inst_48922 = (state_48955[(7)]);var inst_48943 = (inst_48929[(0)]);var inst_48944 = (inst_48929[(1)]);var inst_48945 = app.stock.abstract$.onViewCommand.call(null,inst_48943,inst_48944,inst_48922);var state_48955__$1 = state_48955;var statearr_48969_48997 = state_48955__$1;(statearr_48969_48997[(2)] = inst_48945);
(statearr_48969_48997[(1)] = (10));
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
});})(c__6202__auto___48987,onView_48977,onModel_48978,onSys_48979))
;return ((function (switch__6187__auto__,c__6202__auto___48987,onView_48977,onModel_48978,onSys_48979){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_48973 = [null,null,null,null,null,null,null,null,null,null];(statearr_48973[(0)] = state_machine__6188__auto__);
(statearr_48973[(1)] = (1));
return statearr_48973;
});
var state_machine__6188__auto____1 = (function (state_48955){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_48955);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e48974){if((e48974 instanceof Object))
{var ex__6191__auto__ = e48974;var statearr_48975_48998 = state_48955;(statearr_48975_48998[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48955);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48974;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48999 = state_48955;
state_48955 = G__48999;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_48955){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_48955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___48987,onView_48977,onModel_48978,onSys_48979))
})();var state__6204__auto__ = (function (){var statearr_48976 = f__6203__auto__.call(null);(statearr_48976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___48987);
return statearr_48976;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___48987,onView_48977,onModel_48978,onSys_48979))
);
return null;
});
app.stock.main.main.call(null);
