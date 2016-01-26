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
var loadStock__4 = (function (ch,id,date,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_34906){var state_val_34907 = (state_34906[(1)]);if((state_val_34907 === (3)))
{var inst_34904 = (state_34906[(2)]);var state_34906__$1 = state_34906;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34906__$1,inst_34904);
} else
{if((state_val_34907 === (2)))
{var inst_34896 = (state_34906[(2)]);var inst_34897 = cljs.core.nth.call(null,inst_34896,(0),null);var inst_34898 = cljs.core.nth.call(null,inst_34896,(1),null);var inst_34899 = [inst_34897,inst_34898,id,date,request];var inst_34900 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34899,null));var inst_34901 = ["loadStock",inst_34900];var inst_34902 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34901,null));var state_34906__$1 = state_34906;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34906__$1,(3),ch,inst_34902);
} else
{if((state_val_34907 === (1)))
{var inst_34894 = stock.tool.get_goog_stock_prices.call(null,id,"3Y");var state_34906__$1 = state_34906;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34906__$1,(2),inst_34894);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_34911 = [null,null,null,null,null,null,null];(statearr_34911[(0)] = state_machine__6188__auto__);
(statearr_34911[(1)] = (1));
return statearr_34911;
});
var state_machine__6188__auto____1 = (function (state_34906){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_34906);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e34912){if((e34912 instanceof Object))
{var ex__6191__auto__ = e34912;var statearr_34913_34915 = state_34906;(statearr_34913_34915[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34906);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34912;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34916 = state_34906;
state_34906 = G__34916;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_34906){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_34906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_34914 = f__6203__auto__.call(null);(statearr_34914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_34914;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_34884){var state_val_34885 = (state_34884[(1)]);if((state_val_34885 === (2)))
{var inst_34882 = (state_34884[(2)]);var state_34884__$1 = state_34884;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34884__$1,inst_34882);
} else
{if((state_val_34885 === (1)))
{var inst_34873 = cljs.core.first.call(null,result);var inst_34874 = cljs.core.second.call(null,result);var inst_34875 = cljs.core.nth.call(null,result,(2));var inst_34876 = cljs.core.nth.call(null,result,(3));var inst_34877 = [inst_34873,inst_34874,inst_34875,inst_34876,request];var inst_34878 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34877,null));var inst_34879 = ["loadStock",inst_34878];var inst_34880 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34879,null));var state_34884__$1 = state_34884;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34884__$1,(2),ch,inst_34880);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_34889 = [null,null,null,null,null,null,null];(statearr_34889[(0)] = state_machine__6188__auto__);
(statearr_34889[(1)] = (1));
return statearr_34889;
});
var state_machine__6188__auto____1 = (function (state_34884){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_34884);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e34890){if((e34890 instanceof Object))
{var ex__6191__auto__ = e34890;var statearr_34891_34917 = state_34884;(statearr_34891_34917[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34884);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34890;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34918 = state_34884;
state_34884 = G__34918;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_34884){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_34884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_34892 = f__6203__auto__.call(null);(statearr_34892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_34892;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
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
app.stock.cmd.loadUser = (function loadUser(ch,fbid,accessToken,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_34979){var state_val_34980 = (state_34979[(1)]);if((state_val_34980 === (6)))
{var inst_34977 = (state_34979[(2)]);var state_34979__$1 = state_34979;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34979__$1,inst_34977);
} else
{if((state_val_34980 === (5)))
{var inst_34960 = (state_34979[(7)]);var inst_34971 = (state_34979[(2)]);var inst_34972 = [inst_34960,inst_34971,request];var inst_34973 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34972,null));var inst_34974 = ["view",inst_34973];var inst_34975 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34974,null));var state_34979__$1 = state_34979;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34979__$1,(6),ch,inst_34975);
} else
{if((state_val_34980 === (4)))
{var inst_34961 = (state_34979[(8)]);var inst_34969 = JSON.parse(inst_34961);var state_34979__$1 = state_34979;var statearr_34981_34993 = state_34979__$1;(statearr_34981_34993[(2)] = inst_34969);
(statearr_34981_34993[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34980 === (3)))
{var inst_34966 = [];var inst_34967 = {"stocks":inst_34966};var state_34979__$1 = state_34979;var statearr_34982_34994 = state_34979__$1;(statearr_34982_34994[(2)] = inst_34967);
(statearr_34982_34994[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34980 === (2)))
{var inst_34961 = (state_34979[(8)]);var inst_34959 = (state_34979[(2)]);var inst_34960 = cljs.core.nth.call(null,inst_34959,(0),null);var inst_34961__$1 = cljs.core.nth.call(null,inst_34959,(1),null);var inst_34962 = cljs.core._EQ_.call(null,inst_34961__$1,"");var state_34979__$1 = (function (){var statearr_34983 = state_34979;(statearr_34983[(7)] = inst_34960);
(statearr_34983[(8)] = inst_34961__$1);
return statearr_34983;
})();if(inst_34962)
{var statearr_34984_34995 = state_34979__$1;(statearr_34984_34995[(1)] = (3));
} else
{var statearr_34985_34996 = state_34979__$1;(statearr_34985_34996[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34980 === (1)))
{var inst_34957 = app.dbfile.loadFromUser.call(null,fbid,accessToken);var state_34979__$1 = state_34979;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34979__$1,(2),inst_34957);
} else
{return null;
}
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_34989 = [null,null,null,null,null,null,null,null,null];(statearr_34989[(0)] = state_machine__6188__auto__);
(statearr_34989[(1)] = (1));
return statearr_34989;
});
var state_machine__6188__auto____1 = (function (state_34979){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_34979);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e34990){if((e34990 instanceof Object))
{var ex__6191__auto__ = e34990;var statearr_34991_34997 = state_34979;(statearr_34991_34997[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34979);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34998 = state_34979;
state_34979 = G__34998;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_34979){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_34979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_34992 = f__6203__auto__.call(null);(statearr_34992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_34992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,accessToken,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_35036){var state_val_35037 = (state_35036[(1)]);if((state_val_35037 === (3)))
{var inst_35034 = (state_35036[(2)]);var state_35036__$1 = state_35036;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35036__$1,inst_35034);
} else
{if((state_val_35037 === (2)))
{var inst_35026 = (state_35036[(2)]);var inst_35027 = cljs.core.nth.call(null,inst_35026,(0),null);var inst_35028 = cljs.core.nth.call(null,inst_35026,(1),null);var inst_35029 = [inst_35027,inst_35028,request];var inst_35030 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35029,null));var inst_35031 = ["view",inst_35030];var inst_35032 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_35031,null));var state_35036__$1 = state_35036;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35036__$1,(3),ch,inst_35032);
} else
{if((state_val_35037 === (1)))
{var inst_35023 = JSON.stringify(data);var inst_35024 = app.dbfile.saveToUser.call(null,fbid,accessToken,inst_35023);var state_35036__$1 = state_35036;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35036__$1,(2),inst_35024);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_35041 = [null,null,null,null,null,null,null];(statearr_35041[(0)] = state_machine__6188__auto__);
(statearr_35041[(1)] = (1));
return statearr_35041;
});
var state_machine__6188__auto____1 = (function (state_35036){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_35036);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e35042){if((e35042 instanceof Object))
{var ex__6191__auto__ = e35042;var statearr_35043_35045 = state_35036;(statearr_35043_35045[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35036);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e35042;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35046 = state_35036;
state_35036 = G__35046;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_35036){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_35036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_35044 = f__6203__auto__.call(null);(statearr_35044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_35044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
