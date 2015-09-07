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
return (function (state_11710){var state_val_11711 = (state_11710[(1)]);if((state_val_11711 === (3)))
{var inst_11708 = (state_11710[(2)]);var state_11710__$1 = state_11710;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11710__$1,inst_11708);
} else
{if((state_val_11711 === (2)))
{var inst_11697 = (state_11710[(2)]);var inst_11698 = cljs.core.nth.call(null,inst_11697,(0),null);var inst_11699 = cljs.core.nth.call(null,inst_11697,(1),null);var inst_11700 = stock.tool.parse_getprices.call(null,inst_11699);var inst_11701 = stock.tool.format_getprices.call(null,(86400),inst_11700);var inst_11702 = cljs.core.reverse.call(null,inst_11701);var inst_11703 = [inst_11698,inst_11702,id,date,request];var inst_11704 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11703,null));var inst_11705 = ["loadStock",inst_11704];var inst_11706 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11705,null));var state_11710__$1 = state_11710;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11710__$1,(3),ch,inst_11706);
} else
{if((state_val_11711 === (1)))
{var inst_11694 = stock.tool.goog_finance_getprices_url.call(null,id,"3Y");var inst_11695 = stock.tool.content.call(null,inst_11694);var state_11710__$1 = state_11710;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11710__$1,(2),inst_11695);
} else
{return null;
}
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11715 = [null,null,null,null,null,null,null];(statearr_11715[(0)] = state_machine__6189__auto__);
(statearr_11715[(1)] = (1));
return statearr_11715;
});
var state_machine__6189__auto____1 = (function (state_11710){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11710);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11716){if((e11716 instanceof Object))
{var ex__6192__auto__ = e11716;var statearr_11717_11719 = state_11710;(statearr_11717_11719[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11710);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11720 = state_11710;
state_11710 = G__11720;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11710){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_11718 = f__6204__auto__.call(null);(statearr_11718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11718;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
var loadStock__5 = (function (ch,id,date,request,result){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_11684){var state_val_11685 = (state_11684[(1)]);if((state_val_11685 === (2)))
{var inst_11682 = (state_11684[(2)]);var state_11684__$1 = state_11684;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11684__$1,inst_11682);
} else
{if((state_val_11685 === (1)))
{var inst_11673 = cljs.core.first.call(null,result);var inst_11674 = cljs.core.second.call(null,result);var inst_11675 = cljs.core.nth.call(null,result,(2));var inst_11676 = cljs.core.nth.call(null,result,(3));var inst_11677 = [inst_11673,inst_11674,inst_11675,inst_11676,request];var inst_11678 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11677,null));var inst_11679 = ["loadStock",inst_11678];var inst_11680 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11679,null));var state_11684__$1 = state_11684;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11684__$1,(2),ch,inst_11680);
} else
{return null;
}
}
});})(c__6203__auto__))
;return ((function (switch__6188__auto__,c__6203__auto__){
return (function() {
var state_machine__6189__auto__ = null;
var state_machine__6189__auto____0 = (function (){var statearr_11689 = [null,null,null,null,null,null,null];(statearr_11689[(0)] = state_machine__6189__auto__);
(statearr_11689[(1)] = (1));
return statearr_11689;
});
var state_machine__6189__auto____1 = (function (state_11684){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11684);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11690){if((e11690 instanceof Object))
{var ex__6192__auto__ = e11690;var statearr_11691_11721 = state_11684;(statearr_11691_11721[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11684);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11690;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11722 = state_11684;
state_11684 = G__11722;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11684){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_11692 = f__6204__auto__.call(null);(statearr_11692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11692;
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
return (function (state_11773){var state_val_11774 = (state_11773[(1)]);if((state_val_11774 === (6)))
{var inst_11760 = (state_11773[(7)]);var inst_11765 = (state_11773[(2)]);var inst_11766 = [inst_11765,inst_11760,request];var inst_11767 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11766,null));var inst_11768 = ["view",inst_11767];var inst_11769 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11768,null));var state_11773__$1 = state_11773;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11773__$1,(3),ch,inst_11769);
} else
{if((state_val_11774 === (5)))
{var inst_11760 = (state_11773[(7)]);var inst_11763 = inst_11760.error;var state_11773__$1 = state_11773;var statearr_11775_11787 = state_11773__$1;(statearr_11775_11787[(2)] = inst_11763);
(statearr_11775_11787[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11774 === (4)))
{var inst_11759 = (state_11773[(8)]);var state_11773__$1 = state_11773;var statearr_11776_11788 = state_11773__$1;(statearr_11776_11788[(2)] = inst_11759);
(statearr_11776_11788[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11774 === (3)))
{var inst_11771 = (state_11773[(2)]);var state_11773__$1 = state_11773;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11773__$1,inst_11771);
} else
{if((state_val_11774 === (2)))
{var inst_11759 = (state_11773[(8)]);var inst_11758 = (state_11773[(2)]);var inst_11759__$1 = cljs.core.nth.call(null,inst_11758,(0),null);var inst_11760 = cljs.core.nth.call(null,inst_11758,(1),null);var state_11773__$1 = (function (){var statearr_11777 = state_11773;(statearr_11777[(7)] = inst_11760);
(statearr_11777[(8)] = inst_11759__$1);
return statearr_11777;
})();if(cljs.core.truth_(inst_11759__$1))
{var statearr_11778_11789 = state_11773__$1;(statearr_11778_11789[(1)] = (4));
} else
{var statearr_11779_11790 = state_11773__$1;(statearr_11779_11790[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11774 === (1)))
{var inst_11756 = app.dbfile.load.call(null,"stock",fbid,accessToken);var state_11773__$1 = state_11773;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11773__$1,(2),inst_11756);
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
var state_machine__6189__auto____0 = (function (){var statearr_11783 = [null,null,null,null,null,null,null,null,null];(statearr_11783[(0)] = state_machine__6189__auto__);
(statearr_11783[(1)] = (1));
return statearr_11783;
});
var state_machine__6189__auto____1 = (function (state_11773){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11773);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11784){if((e11784 instanceof Object))
{var ex__6192__auto__ = e11784;var statearr_11785_11791 = state_11773;(statearr_11785_11791[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11773);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11784;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11792 = state_11773;
state_11773 = G__11792;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11773){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_11786 = f__6204__auto__.call(null);(statearr_11786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
app.stock.cmd.saveUser = (function saveUser(ch,fbid,accessToken,data,request){var c__6203__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6203__auto__){
return (function (){var f__6204__auto__ = (function (){var switch__6188__auto__ = ((function (c__6203__auto__){
return (function (state_11845){var state_val_11846 = (state_11845[(1)]);if((state_val_11846 === (6)))
{var inst_11832 = (state_11845[(7)]);var inst_11837 = (state_11845[(2)]);var inst_11838 = [inst_11837,inst_11832,request];var inst_11839 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11838,null));var inst_11840 = ["view",inst_11839];var inst_11841 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_11840,null));var state_11845__$1 = state_11845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11845__$1,(3),ch,inst_11841);
} else
{if((state_val_11846 === (5)))
{var inst_11832 = (state_11845[(7)]);var inst_11835 = inst_11832.error;var state_11845__$1 = state_11845;var statearr_11847_11859 = state_11845__$1;(statearr_11847_11859[(2)] = inst_11835);
(statearr_11847_11859[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11846 === (4)))
{var inst_11831 = (state_11845[(8)]);var state_11845__$1 = state_11845;var statearr_11848_11860 = state_11845__$1;(statearr_11848_11860[(2)] = inst_11831);
(statearr_11848_11860[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11846 === (3)))
{var inst_11843 = (state_11845[(2)]);var state_11845__$1 = state_11845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11845__$1,inst_11843);
} else
{if((state_val_11846 === (2)))
{var inst_11831 = (state_11845[(8)]);var inst_11830 = (state_11845[(2)]);var inst_11831__$1 = cljs.core.nth.call(null,inst_11830,(0),null);var inst_11832 = cljs.core.nth.call(null,inst_11830,(1),null);var state_11845__$1 = (function (){var statearr_11849 = state_11845;(statearr_11849[(7)] = inst_11832);
(statearr_11849[(8)] = inst_11831__$1);
return statearr_11849;
})();if(cljs.core.truth_(inst_11831__$1))
{var statearr_11850_11861 = state_11845__$1;(statearr_11850_11861[(1)] = (4));
} else
{var statearr_11851_11862 = state_11845__$1;(statearr_11851_11862[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11846 === (1)))
{var inst_11827 = JSON.stringify(data);var inst_11828 = app.dbfile.save.call(null,"stock",fbid,accessToken,inst_11827);var state_11845__$1 = state_11845;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11845__$1,(2),inst_11828);
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
var state_machine__6189__auto____0 = (function (){var statearr_11855 = [null,null,null,null,null,null,null,null,null];(statearr_11855[(0)] = state_machine__6189__auto__);
(statearr_11855[(1)] = (1));
return statearr_11855;
});
var state_machine__6189__auto____1 = (function (state_11845){while(true){
var ret_value__6190__auto__ = (function (){try{while(true){
var result__6191__auto__ = switch__6188__auto__.call(null,state_11845);if(cljs.core.keyword_identical_QMARK_.call(null,result__6191__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6191__auto__;
}
break;
}
}catch (e11856){if((e11856 instanceof Object))
{var ex__6192__auto__ = e11856;var statearr_11857_11863 = state_11845;(statearr_11857_11863[(5)] = ex__6192__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11845);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e11856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11864 = state_11845;
state_11845 = G__11864;
continue;
}
} else
{return ret_value__6190__auto__;
}
break;
}
});
state_machine__6189__auto__ = function(state_11845){
switch(arguments.length){
case 0:
return state_machine__6189__auto____0.call(this);
case 1:
return state_machine__6189__auto____1.call(this,state_11845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6189__auto____0;
state_machine__6189__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6189__auto____1;
return state_machine__6189__auto__;
})()
;})(switch__6188__auto__,c__6203__auto__))
})();var state__6205__auto__ = (function (){var statearr_11858 = f__6204__auto__.call(null);(statearr_11858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6203__auto__);
return statearr_11858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6205__auto__);
});})(c__6203__auto__))
);
return c__6203__auto__;
});
