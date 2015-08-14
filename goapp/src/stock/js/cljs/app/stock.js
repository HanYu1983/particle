// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock');
goog.require('cljs.core');
goog.require('stock.drawer');
goog.require('stock.drawer');
goog.require('stock.formula');
goog.require('stock.formula');
goog.require('stock.tool');
goog.require('stock.tool');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.stock.onViewCommand = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("onViewCommand",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (type,data,ctx){return type;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
app.stock.main = (function main(){var onView_15064 = cljs.core.async.chan.call(null);var onModel_15065 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_15064,onModel_15065){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_15064,onModel_15065){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_15064,onModel_15065){
return (function (state_14981){var state_val_14982 = (state_14981[(1)]);if((state_val_14982 === (2)))
{var inst_14979 = (state_14981[(2)]);var state_14981__$1 = state_14981;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14981__$1,inst_14979);
} else
{if((state_val_14982 === (1)))
{var state_14981__$1 = state_14981;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14981__$1,(2),onView_15064,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_15064,onModel_15065))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_15064,onModel_15065){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_14986 = [null,null,null,null,null,null,null];(statearr_14986[(0)] = state_machine__6188__auto__);
(statearr_14986[(1)] = (1));
return statearr_14986;
});
var state_machine__6188__auto____1 = (function (state_14981){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_14981);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e14987){if((e14987 instanceof Object))
{var ex__6191__auto__ = e14987;var statearr_14988_15066 = state_14981;(statearr_14988_15066[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14981);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14987;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15067 = state_14981;
state_14981 = G__15067;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_14981){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_14981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_15064,onModel_15065))
})();var state__6204__auto__ = (function (){var statearr_14989 = f__6203__auto__.call(null);(statearr_14989[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_14989;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_15064,onModel_15065))
);
return c__6202__auto__;
});})(onView_15064,onModel_15065))
);
var c__6202__auto___15068 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___15068,onView_15064,onModel_15065){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___15068,onView_15064,onModel_15065){
return (function (state_14998){var state_val_14999 = (state_14998[(1)]);if((state_val_14999 === (4)))
{var inst_14992 = (state_14998[(2)]);var inst_14993 = common.onModel(inst_14992);var state_14998__$1 = (function (){var statearr_15000 = state_14998;(statearr_15000[(7)] = inst_14993);
return statearr_15000;
})();var statearr_15001_15069 = state_14998__$1;(statearr_15001_15069[(2)] = null);
(statearr_15001_15069[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14999 === (3)))
{var inst_14996 = (state_14998[(2)]);var state_14998__$1 = state_14998;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14998__$1,inst_14996);
} else
{if((state_val_14999 === (2)))
{var state_14998__$1 = state_14998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14998__$1,(4),onModel_15065);
} else
{if((state_val_14999 === (1)))
{var state_14998__$1 = state_14998;var statearr_15002_15070 = state_14998__$1;(statearr_15002_15070[(2)] = null);
(statearr_15002_15070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___15068,onView_15064,onModel_15065))
;return ((function (switch__6187__auto__,c__6202__auto___15068,onView_15064,onModel_15065){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_15006 = [null,null,null,null,null,null,null,null];(statearr_15006[(0)] = state_machine__6188__auto__);
(statearr_15006[(1)] = (1));
return statearr_15006;
});
var state_machine__6188__auto____1 = (function (state_14998){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_14998);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e15007){if((e15007 instanceof Object))
{var ex__6191__auto__ = e15007;var statearr_15008_15071 = state_14998;(statearr_15008_15071[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14998);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15007;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15072 = state_14998;
state_14998 = G__15072;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_14998){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_14998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___15068,onView_15064,onModel_15065))
})();var state__6204__auto__ = (function (){var statearr_15009 = f__6203__auto__.call(null);(statearr_15009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___15068);
return statearr_15009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___15068,onView_15064,onModel_15065))
);
var c__6202__auto___15073 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___15073,onView_15064,onModel_15065){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___15073,onView_15064,onModel_15065){
return (function (state_15042){var state_val_15043 = (state_15042[(1)]);if((state_val_15043 === (7)))
{var inst_15037 = (state_15042[(2)]);var inst_15010 = inst_15037;var state_15042__$1 = (function (){var statearr_15044 = state_15042;(statearr_15044[(7)] = inst_15010);
return statearr_15044;
})();var statearr_15045_15074 = state_15042__$1;(statearr_15045_15074[(2)] = null);
(statearr_15045_15074[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15043 === (1)))
{var inst_15010 = cljs.core.PersistentHashMap.EMPTY;var state_15042__$1 = (function (){var statearr_15046 = state_15042;(statearr_15046[(7)] = inst_15010);
return statearr_15046;
})();var statearr_15047_15075 = state_15042__$1;(statearr_15047_15075[(2)] = null);
(statearr_15047_15075[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15043 === (4)))
{var inst_15018 = (state_15042[(8)]);var inst_15016 = (state_15042[(2)]);var inst_15017 = cljs.core.nth.call(null,inst_15016,(0),null);var inst_15018__$1 = cljs.core.nth.call(null,inst_15016,(1),null);var inst_15022 = cljs.core._EQ_.call(null,onView_15064,inst_15018__$1);var state_15042__$1 = (function (){var statearr_15048 = state_15042;(statearr_15048[(9)] = inst_15017);
(statearr_15048[(8)] = inst_15018__$1);
return statearr_15048;
})();if(inst_15022)
{var statearr_15049_15076 = state_15042__$1;(statearr_15049_15076[(1)] = (5));
} else
{var statearr_15050_15077 = state_15042__$1;(statearr_15050_15077[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15043 === (6)))
{var inst_15018 = (state_15042[(8)]);var inst_15028 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),inst_15018);var state_15042__$1 = state_15042;if(inst_15028)
{var statearr_15051_15078 = state_15042__$1;(statearr_15051_15078[(1)] = (8));
} else
{var statearr_15052_15079 = state_15042__$1;(statearr_15052_15079[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15043 === (3)))
{var inst_15040 = (state_15042[(2)]);var state_15042__$1 = state_15042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15042__$1,inst_15040);
} else
{if((state_val_15043 === (2)))
{var inst_15013 = [onView_15064];var inst_15014 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_15013,null));var state_15042__$1 = state_15042;return cljs.core.async.ioc_alts_BANG_.call(null,state_15042__$1,(4),inst_15014);
} else
{if((state_val_15043 === (9)))
{var inst_15018 = (state_15042[(8)]);var inst_15031 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_15018));var inst_15032 = (new Error(inst_15031));var inst_15033 = (function(){throw inst_15032})();var state_15042__$1 = state_15042;var statearr_15053_15080 = state_15042__$1;(statearr_15053_15080[(2)] = inst_15033);
(statearr_15053_15080[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15043 === (5)))
{var inst_15017 = (state_15042[(9)]);var inst_15010 = (state_15042[(7)]);var inst_15024 = (inst_15017[(0)]);var inst_15025 = (inst_15017[(1)]);var inst_15026 = app.stock.onViewCommand.call(null,inst_15024,inst_15025,inst_15010);var state_15042__$1 = state_15042;var statearr_15054_15081 = state_15042__$1;(statearr_15054_15081[(2)] = inst_15026);
(statearr_15054_15081[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15043 === (10)))
{var inst_15035 = (state_15042[(2)]);var state_15042__$1 = state_15042;var statearr_15055_15082 = state_15042__$1;(statearr_15055_15082[(2)] = inst_15035);
(statearr_15055_15082[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15043 === (8)))
{var inst_15010 = (state_15042[(7)]);var state_15042__$1 = state_15042;var statearr_15056_15083 = state_15042__$1;(statearr_15056_15083[(2)] = inst_15010);
(statearr_15056_15083[(1)] = (10));
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
});})(c__6202__auto___15073,onView_15064,onModel_15065))
;return ((function (switch__6187__auto__,c__6202__auto___15073,onView_15064,onModel_15065){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_15060 = [null,null,null,null,null,null,null,null,null,null];(statearr_15060[(0)] = state_machine__6188__auto__);
(statearr_15060[(1)] = (1));
return statearr_15060;
});
var state_machine__6188__auto____1 = (function (state_15042){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_15042);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e15061){if((e15061 instanceof Object))
{var ex__6191__auto__ = e15061;var statearr_15062_15084 = state_15042;(statearr_15062_15084[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15042);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15085 = state_15042;
state_15042 = G__15085;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_15042){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_15042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___15073,onView_15064,onModel_15065))
})();var state__6204__auto__ = (function (){var statearr_15063 = f__6203__auto__.call(null);(statearr_15063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___15073);
return statearr_15063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___15073,onView_15064,onModel_15065))
);
return null;
});
app.stock.main.call(null);
