// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.cmd');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('stock.tool');
goog.require('stock.tool');
goog.require('app.dbfile');
goog.require('app.dbfile');
/**
* request是用來記錄呼叫來源，會附加在結果裡，用來前台做callback的資訊
*/
app.stock.cmd.loadStock = (function() {
var loadStock = null;
var loadStock__4 = (function (ch,id,date,request){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_11880){var state_val_11881 = (state_11880[(1)]);if((state_val_11881 === (3)))
{var inst_11878 = (state_11880[(2)]);var state_11880__$1 = state_11880;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11880__$1,inst_11878);
} else
{if((state_val_11881 === (2)))
{var inst_11870 = (state_11880[(2)]);var inst_11871 = cljs.core.nth.call(null,inst_11870,(0),null);var inst_11872 = cljs.core.nth.call(null,inst_11870,(1),null);var inst_11873 = [inst_11871,inst_11872,id,date,request];var inst_11874 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11873,null));var inst_11875 = ["loadStock",inst_11874];var inst_11876 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11875,null));var state_11880__$1 = state_11880;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11880__$1,(3),ch,inst_11876);
} else
{if((state_val_11881 === (1)))
{var inst_11868 = stock.tool.get_goog_stock_prices.call(null,id,"3Y");var state_11880__$1 = state_11880;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11880__$1,(2),inst_11868);
} else
{return null;
}
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11885 = [null,null,null,null,null,null,null];(statearr_11885[(0)] = state_machine__6189__auto__);
(statearr_11885[(1)] = (1));
return statearr_11885;
});
var state_machine__6189__auto____1 = (function (state_11880){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11880);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11886){if((e11886 instanceof Object))
{var ex__6192__auto__ = e11886;var statearr_11887_11889 = state_11880;(statearr_11887_11889[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11880);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11886;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11890 = state_11880;
state_11880 = G__11890;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11880){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_11888 = f__6204__auto__.call(null);(statearr_11888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11888;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_11858){var state_val_11859 = (state_11858[(1)]);if((state_val_11859 === (2)))
{var inst_11856 = (state_11858[(2)]);var state_11858__$1 = state_11858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11858__$1,inst_11856);
} else
{if((state_val_11859 === (1)))
{var inst_11847 = cljs.core.first.call(null,result);var inst_11848 = cljs.core.second.call(null,result);var inst_11849 = cljs.core.nth.call(null,result,(2));var inst_11850 = cljs.core.nth.call(null,result,(3));var inst_11851 = [inst_11847,inst_11848,inst_11849,inst_11850,request];var inst_11852 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11851,null));var inst_11853 = ["loadStock",inst_11852];var inst_11854 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11853,null));var state_11858__$1 = state_11858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11858__$1,(2),ch,inst_11854);
} else
{return null;
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11863 = [null,null,null,null,null,null,null];(statearr_11863[(0)] = state_machine__6189__auto__);
(statearr_11863[(1)] = (1));
return statearr_11863;
});
var state_machine__6189__auto____1 = (function (state_11858){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11858);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11864){if((e11864 instanceof Object))
{var ex__6192__auto__ = e11864;var statearr_11865_11891 = state_11858;(statearr_11865_11891[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11858);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11864;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11892 = state_11858;
state_11858 = G__11892;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11858){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_11866 = f__6204__auto__.call(null);(statearr_11866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11866;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
loadStock = function(ch,id,date,request,result){
switch(arguments.length){
case 4:
return loadStock__4.call(this,ch,id,date,request);
case 5:
return loadStock__5.call(this,ch,id,date,request,result);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
loadStock.cljs$core$IFn$_invoke$arity$4 = loadStock__4;
loadStock.cljs$core$IFn$_invoke$arity$5 = loadStock__5;
return loadStock;
})()
;
app.stock.cmd.loadUser = (function loadUser(ch,fbid,accessToken,request){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_11943){var state_val_11944 = (state_11943[(1)]);if((state_val_11944 === (6)))
{var inst_11930 = (state_11943[(7)]);var inst_11935 = (state_11943[(2)]);var inst_11936 = [inst_11935,inst_11930,request];var inst_11937 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11936,null));var inst_11938 = ["view",inst_11937];var inst_11939 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11938,null));var state_11943__$1 = state_11943;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11943__$1,(3),ch,inst_11939);
} else
{if((state_val_11944 === (5)))
{var inst_11930 = (state_11943[(7)]);var inst_11933 = inst_11930.error;var state_11943__$1 = state_11943;var statearr_11945_11957 = state_11943__$1;(statearr_11945_11957[(2)] = inst_11933);
(statearr_11945_11957[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (4)))
{var inst_11929 = (state_11943[(8)]);var state_11943__$1 = state_11943;var statearr_11946_11958 = state_11943__$1;(statearr_11946_11958[(2)] = inst_11929);
(statearr_11946_11958[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (3)))
{var inst_11941 = (state_11943[(2)]);var state_11943__$1 = state_11943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11943__$1,inst_11941);
} else
{if((state_val_11944 === (2)))
{var inst_11929 = (state_11943[(8)]);var inst_11928 = (state_11943[(2)]);var inst_11929__$1 = cljs.core.nth.call(null,inst_11928,(0),null);var inst_11930 = cljs.core.nth.call(null,inst_11928,(1),null);var state_11943__$1 = (function (){var statearr_11947 = state_11943;(statearr_11947[(8)] = inst_11929__$1);
(statearr_11947[(7)] = inst_11930);
return statearr_11947;
})();if(cljs.core.truth_(inst_11929__$1))
{var statearr_11948_11959 = state_11943__$1;(statearr_11948_11959[(1)] = (4));
} else
{var statearr_11949_11960 = state_11943__$1;(statearr_11949_11960[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11944 === (1)))
{var inst_11926 = app.dbfile.load.call(null,"stock",fbid,accessToken);var state_11943__$1 = state_11943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11943__$1,(2),inst_11926);
} else
{return null;
}
}
}
}
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11953 = [null,null,null,null,null,null,null,null,null];(statearr_11953[(0)] = state_machine__6189__auto__);
(statearr_11953[(1)] = (1));
return statearr_11953;
});
var state_machine__6189__auto____1 = (function (state_11943){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11943);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11954){if((e11954 instanceof Object))
{var ex__6192__auto__ = e11954;var statearr_11955_11961 = state_11943;(statearr_11955_11961[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11943);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11954;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11962 = state_11943;
state_11943 = G__11962;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11943){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_11956 = f__6204__auto__.call(null);(statearr_11956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,accessToken,data,request){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_12015){var state_val_12016 = (state_12015[(1)]);if((state_val_12016 === (6)))
{var inst_12002 = (state_12015[(7)]);var inst_12007 = (state_12015[(2)]);var inst_12008 = [inst_12007,inst_12002,request];var inst_12009 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12008,null));var inst_12010 = ["view",inst_12009];var inst_12011 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_12010,null));var state_12015__$1 = state_12015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12015__$1,(3),ch,inst_12011);
} else
{if((state_val_12016 === (5)))
{var inst_12002 = (state_12015[(7)]);var inst_12005 = inst_12002.error;var state_12015__$1 = state_12015;var statearr_12017_12029 = state_12015__$1;(statearr_12017_12029[(2)] = inst_12005);
(statearr_12017_12029[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (4)))
{var inst_12001 = (state_12015[(8)]);var state_12015__$1 = state_12015;var statearr_12018_12030 = state_12015__$1;(statearr_12018_12030[(2)] = inst_12001);
(statearr_12018_12030[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (3)))
{var inst_12013 = (state_12015[(2)]);var state_12015__$1 = state_12015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12015__$1,inst_12013);
} else
{if((state_val_12016 === (2)))
{var inst_12001 = (state_12015[(8)]);var inst_12000 = (state_12015[(2)]);var inst_12001__$1 = cljs.core.nth.call(null,inst_12000,(0),null);var inst_12002 = cljs.core.nth.call(null,inst_12000,(1),null);var state_12015__$1 = (function (){var statearr_12019 = state_12015;(statearr_12019[(8)] = inst_12001__$1);
(statearr_12019[(7)] = inst_12002);
return statearr_12019;
})();if(cljs.core.truth_(inst_12001__$1))
{var statearr_12020_12031 = state_12015__$1;(statearr_12020_12031[(1)] = (4));
} else
{var statearr_12021_12032 = state_12015__$1;(statearr_12021_12032[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (1)))
{var inst_11997 = JSON.stringify(data);var inst_11998 = app.dbfile.save.call(null,"stock",fbid,accessToken,inst_11997);var state_12015__$1 = state_12015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12015__$1,(2),inst_11998);
} else
{return null;
}
}
}
}
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_12025 = [null,null,null,null,null,null,null,null,null];(statearr_12025[(0)] = state_machine__6189__auto__);
(statearr_12025[(1)] = (1));
return statearr_12025;
});
var state_machine__6189__auto____1 = (function (state_12015){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_12015);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e12026){if((e12026 instanceof Object))
{var ex__6192__auto__ = e12026;var statearr_12027_12033 = state_12015;(statearr_12027_12033[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12015);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e12026;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12034 = state_12015;
state_12015 = G__12034;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_12015){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_12015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_12028 = f__6204__auto__.call(null);(statearr_12028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_12028;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
