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
return (function (state_10748){var state_val_10749 = (state_10748[(1)]);if((state_val_10749 === (3)))
{var inst_10746 = (state_10748[(2)]);var state_10748__$1 = state_10748;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10748__$1,inst_10746);
} else
{if((state_val_10749 === (2)))
{var inst_10735 = (state_10748[(2)]);var inst_10736 = cljs.core.nth.call(null,inst_10735,(0),null);var inst_10737 = cljs.core.nth.call(null,inst_10735,(1),null);var inst_10738 = stock.tool.parse_getprices.call(null,inst_10737);var inst_10739 = stock.tool.format_getprices.call(null,(86400),inst_10738);var inst_10740 = cljs.core.reverse.call(null,inst_10739);var inst_10741 = [inst_10736,inst_10740,id,date,request];var inst_10742 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10741,null));var inst_10743 = ["loadStock",inst_10742];var inst_10744 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10743,null));var state_10748__$1 = state_10748;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10748__$1,(3),ch,inst_10744);
} else
{if((state_val_10749 === (1)))
{var inst_10732 = stock.tool.goog_finance_getprices_url.call(null,id,"3Y");var inst_10733 = stock.tool.content.call(null,inst_10732);var state_10748__$1 = state_10748;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10748__$1,(2),inst_10733);
} else
{return null;
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_10753 = [null,null,null,null,null,null,null];(statearr_10753[(0)] = state_machine__6188__auto__);
(statearr_10753[(1)] = (1));
return statearr_10753;
});
var state_machine__6188__auto____1 = (function (state_10748){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_10748);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e10754){if((e10754 instanceof Object))
{var ex__6191__auto__ = e10754;var statearr_10755_10757 = state_10748;(statearr_10755_10757[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10748);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10754;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10758 = state_10748;
state_10748 = G__10758;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_10748){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_10748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_10756 = f__6203__auto__.call(null);(statearr_10756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_10756;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_10722){var state_val_10723 = (state_10722[(1)]);if((state_val_10723 === (2)))
{var inst_10720 = (state_10722[(2)]);var state_10722__$1 = state_10722;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10722__$1,inst_10720);
} else
{if((state_val_10723 === (1)))
{var inst_10711 = cljs.core.first.call(null,result);var inst_10712 = cljs.core.second.call(null,result);var inst_10713 = cljs.core.nth.call(null,result,(2));var inst_10714 = cljs.core.nth.call(null,result,(3));var inst_10715 = [inst_10711,inst_10712,inst_10713,inst_10714,request];var inst_10716 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10715,null));var inst_10717 = ["loadStock",inst_10716];var inst_10718 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10717,null));var state_10722__$1 = state_10722;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10722__$1,(2),ch,inst_10718);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_10727 = [null,null,null,null,null,null,null];(statearr_10727[(0)] = state_machine__6188__auto__);
(statearr_10727[(1)] = (1));
return statearr_10727;
});
var state_machine__6188__auto____1 = (function (state_10722){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_10722);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e10728){if((e10728 instanceof Object))
{var ex__6191__auto__ = e10728;var statearr_10729_10759 = state_10722;(statearr_10729_10759[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10722);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10760 = state_10722;
state_10722 = G__10760;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_10722){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_10722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_10730 = f__6203__auto__.call(null);(statearr_10730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_10730;
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
return (function (state_10811){var state_val_10812 = (state_10811[(1)]);if((state_val_10812 === (6)))
{var inst_10798 = (state_10811[(7)]);var inst_10803 = (state_10811[(2)]);var inst_10804 = [inst_10803,inst_10798,request];var inst_10805 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10804,null));var inst_10806 = ["view",inst_10805];var inst_10807 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10806,null));var state_10811__$1 = state_10811;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10811__$1,(3),ch,inst_10807);
} else
{if((state_val_10812 === (5)))
{var inst_10798 = (state_10811[(7)]);var inst_10801 = inst_10798.error;var state_10811__$1 = state_10811;var statearr_10813_10825 = state_10811__$1;(statearr_10813_10825[(2)] = inst_10801);
(statearr_10813_10825[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10812 === (4)))
{var inst_10797 = (state_10811[(8)]);var state_10811__$1 = state_10811;var statearr_10814_10826 = state_10811__$1;(statearr_10814_10826[(2)] = inst_10797);
(statearr_10814_10826[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10812 === (3)))
{var inst_10809 = (state_10811[(2)]);var state_10811__$1 = state_10811;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10811__$1,inst_10809);
} else
{if((state_val_10812 === (2)))
{var inst_10797 = (state_10811[(8)]);var inst_10796 = (state_10811[(2)]);var inst_10797__$1 = cljs.core.nth.call(null,inst_10796,(0),null);var inst_10798 = cljs.core.nth.call(null,inst_10796,(1),null);var state_10811__$1 = (function (){var statearr_10815 = state_10811;(statearr_10815[(8)] = inst_10797__$1);
(statearr_10815[(7)] = inst_10798);
return statearr_10815;
})();if(cljs.core.truth_(inst_10797__$1))
{var statearr_10816_10827 = state_10811__$1;(statearr_10816_10827[(1)] = (4));
} else
{var statearr_10817_10828 = state_10811__$1;(statearr_10817_10828[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10812 === (1)))
{var inst_10794 = app.dbfile.load.call(null,"stock",fbid,accessToken);var state_10811__$1 = state_10811;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10811__$1,(2),inst_10794);
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
var state_machine__6188__auto____0 = (function (){var statearr_10821 = [null,null,null,null,null,null,null,null,null];(statearr_10821[(0)] = state_machine__6188__auto__);
(statearr_10821[(1)] = (1));
return statearr_10821;
});
var state_machine__6188__auto____1 = (function (state_10811){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_10811);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e10822){if((e10822 instanceof Object))
{var ex__6191__auto__ = e10822;var statearr_10823_10829 = state_10811;(statearr_10823_10829[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10811);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10822;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10830 = state_10811;
state_10811 = G__10830;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_10811){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_10811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_10824 = f__6203__auto__.call(null);(statearr_10824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_10824;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,accessToken,data,request){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_10883){var state_val_10884 = (state_10883[(1)]);if((state_val_10884 === (6)))
{var inst_10870 = (state_10883[(7)]);var inst_10875 = (state_10883[(2)]);var inst_10876 = [inst_10875,inst_10870,request];var inst_10877 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10876,null));var inst_10878 = ["view",inst_10877];var inst_10879 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_10878,null));var state_10883__$1 = state_10883;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10883__$1,(3),ch,inst_10879);
} else
{if((state_val_10884 === (5)))
{var inst_10870 = (state_10883[(7)]);var inst_10873 = inst_10870.error;var state_10883__$1 = state_10883;var statearr_10885_10897 = state_10883__$1;(statearr_10885_10897[(2)] = inst_10873);
(statearr_10885_10897[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10884 === (4)))
{var inst_10869 = (state_10883[(8)]);var state_10883__$1 = state_10883;var statearr_10886_10898 = state_10883__$1;(statearr_10886_10898[(2)] = inst_10869);
(statearr_10886_10898[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10884 === (3)))
{var inst_10881 = (state_10883[(2)]);var state_10883__$1 = state_10883;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10883__$1,inst_10881);
} else
{if((state_val_10884 === (2)))
{var inst_10869 = (state_10883[(8)]);var inst_10868 = (state_10883[(2)]);var inst_10869__$1 = cljs.core.nth.call(null,inst_10868,(0),null);var inst_10870 = cljs.core.nth.call(null,inst_10868,(1),null);var state_10883__$1 = (function (){var statearr_10887 = state_10883;(statearr_10887[(7)] = inst_10870);
(statearr_10887[(8)] = inst_10869__$1);
return statearr_10887;
})();if(cljs.core.truth_(inst_10869__$1))
{var statearr_10888_10899 = state_10883__$1;(statearr_10888_10899[(1)] = (4));
} else
{var statearr_10889_10900 = state_10883__$1;(statearr_10889_10900[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10884 === (1)))
{var inst_10865 = JSON.stringify(data);var inst_10866 = app.dbfile.save.call(null,"stock",fbid,accessToken,inst_10865);var state_10883__$1 = state_10883;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10883__$1,(2),inst_10866);
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
var state_machine__6188__auto____0 = (function (){var statearr_10893 = [null,null,null,null,null,null,null,null,null];(statearr_10893[(0)] = state_machine__6188__auto__);
(statearr_10893[(1)] = (1));
return statearr_10893;
});
var state_machine__6188__auto____1 = (function (state_10883){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_10883);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e10894){if((e10894 instanceof Object))
{var ex__6191__auto__ = e10894;var statearr_10895_10901 = state_10883;(statearr_10895_10901[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10883);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e10894;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10902 = state_10883;
state_10883 = G__10902;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_10883){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_10883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_10896 = f__6203__auto__.call(null);(statearr_10896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_10896;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
