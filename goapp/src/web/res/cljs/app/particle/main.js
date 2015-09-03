// Compiled by ClojureScript 0.0-2268
goog.provide('app.particle.main');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.particle');
goog.require('tool.particle');
goog.require('app.particle.draw');
goog.require('app.particle.draw');
goog.require('app.particle.impl');
goog.require('app.particle.abstract$');
goog.require('app.particle.abstract$');
goog.require('cljs.core.async');
app.particle.main.draw = app.particle.draw.draw3D.call(null,$("#webgl"));
app.particle.main.main = (function main(){var onView = cljs.core.async.chan.call(null);var onModel = cljs.core.async.chan.call(null);var onTick = cljs.core.async.chan.call(null);var mspf = (33);common.onView.subscribe(((function (onView,onModel,onTick,mspf){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView,onModel,onTick,mspf){
return (function (state_45721){var state_val_45722 = (state_45721[(1)]);if((state_val_45722 === (2)))
{var inst_45719 = (state_45721[(2)]);var state_45721__$1 = state_45721;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45721__$1,inst_45719);
} else
{if((state_val_45722 === (1)))
{var state_45721__$1 = state_45721;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45721__$1,(2),onView,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45726 = [null,null,null,null,null,null,null];(statearr_45726[(0)] = state_machine__6188__auto__);
(statearr_45726[(1)] = (1));
return statearr_45726;
});
var state_machine__6188__auto____1 = (function (state_45721){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45721);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45727){if((e45727 instanceof Object))
{var ex__6191__auto__ = e45727;var statearr_45728_45900 = state_45721;(statearr_45728_45900[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45721);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45727;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45901 = state_45721;
state_45721 = G__45901;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45721){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_45729 = f__6203__auto__.call(null);(statearr_45729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_45729;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView,onModel,onTick,mspf))
);
return c__6202__auto__;
});})(onView,onModel,onTick,mspf))
);
var c__6202__auto___45902 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45902,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45902,onView,onModel,onTick,mspf){
return (function (state_45743){var state_val_45744 = (state_45743[(1)]);if((state_val_45744 === (4)))
{var inst_45733 = (state_45743[(2)]);var inst_45734 = cljs.core.nth.call(null,inst_45733,(0),null);var inst_45735 = cljs.core.nth.call(null,inst_45733,(1),null);var inst_45736 = cljs.core.nth.call(null,inst_45733,(2),null);var inst_45737 = [inst_45734,inst_45735,inst_45736];var inst_45738 = common.onModel.onNext(inst_45737);var state_45743__$1 = (function (){var statearr_45745 = state_45743;(statearr_45745[(7)] = inst_45738);
return statearr_45745;
})();var statearr_45746_45903 = state_45743__$1;(statearr_45746_45903[(2)] = null);
(statearr_45746_45903[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45744 === (3)))
{var inst_45741 = (state_45743[(2)]);var state_45743__$1 = state_45743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45743__$1,inst_45741);
} else
{if((state_val_45744 === (2)))
{var state_45743__$1 = state_45743;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45743__$1,(4),onModel);
} else
{if((state_val_45744 === (1)))
{var state_45743__$1 = state_45743;var statearr_45747_45904 = state_45743__$1;(statearr_45747_45904[(2)] = null);
(statearr_45747_45904[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___45902,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___45902,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45751 = [null,null,null,null,null,null,null,null];(statearr_45751[(0)] = state_machine__6188__auto__);
(statearr_45751[(1)] = (1));
return statearr_45751;
});
var state_machine__6188__auto____1 = (function (state_45743){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45743);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45752){if((e45752 instanceof Object))
{var ex__6191__auto__ = e45752;var statearr_45753_45905 = state_45743;(statearr_45753_45905[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45752;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45906 = state_45743;
state_45743 = G__45906;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45743){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45902,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_45754 = f__6203__auto__.call(null);(statearr_45754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45902);
return statearr_45754;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45902,onView,onModel,onTick,mspf))
);
var c__6202__auto___45907 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45907,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45907,onView,onModel,onTick,mspf){
return (function (state_45773){var state_val_45774 = (state_45773[(1)]);if((state_val_45774 === (5)))
{var inst_45757 = (state_45773[(7)]);var inst_45764 = (state_45773[(8)]);var inst_45768 = (state_45773[(2)]);var tmp45775 = inst_45757;var inst_45757__$1 = tmp45775;var inst_45758 = inst_45764;var state_45773__$1 = (function (){var statearr_45776 = state_45773;(statearr_45776[(9)] = inst_45758);
(statearr_45776[(10)] = inst_45768);
(statearr_45776[(7)] = inst_45757__$1);
return statearr_45776;
})();var statearr_45777_45908 = state_45773__$1;(statearr_45777_45908[(2)] = null);
(statearr_45777_45908[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45774 === (4)))
{var inst_45758 = (state_45773[(9)]);var inst_45764 = (state_45773[(8)]);var inst_45762 = (state_45773[(2)]);var inst_45763 = (new Date());var inst_45764__$1 = inst_45763.getTime();var inst_45765 = (inst_45764__$1 - inst_45758);var inst_45766 = (inst_45765 / (1000));var state_45773__$1 = (function (){var statearr_45778 = state_45773;(statearr_45778[(11)] = inst_45762);
(statearr_45778[(8)] = inst_45764__$1);
return statearr_45778;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45773__$1,(5),onTick,inst_45766);
} else
{if((state_val_45774 === (3)))
{var inst_45771 = (state_45773[(2)]);var state_45773__$1 = state_45773;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45773__$1,inst_45771);
} else
{if((state_val_45774 === (2)))
{var inst_45757 = (state_45773[(7)]);var inst_45760 = cljs.core.async.timeout.call(null,inst_45757);var state_45773__$1 = state_45773;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45773__$1,(4),inst_45760);
} else
{if((state_val_45774 === (1)))
{var inst_45755 = (new Date());var inst_45756 = inst_45755.getTime();var inst_45757 = mspf;var inst_45758 = inst_45756;var state_45773__$1 = (function (){var statearr_45779 = state_45773;(statearr_45779[(9)] = inst_45758);
(statearr_45779[(7)] = inst_45757);
return statearr_45779;
})();var statearr_45780_45909 = state_45773__$1;(statearr_45780_45909[(2)] = null);
(statearr_45780_45909[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___45907,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___45907,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45784 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45784[(0)] = state_machine__6188__auto__);
(statearr_45784[(1)] = (1));
return statearr_45784;
});
var state_machine__6188__auto____1 = (function (state_45773){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45773);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45785){if((e45785 instanceof Object))
{var ex__6191__auto__ = e45785;var statearr_45786_45910 = state_45773;(statearr_45786_45910[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45773);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45911 = state_45773;
state_45773 = G__45911;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45773){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45907,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_45787 = f__6203__auto__.call(null);(statearr_45787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45907);
return statearr_45787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45907,onView,onModel,onTick,mspf))
);
var c__6202__auto___45912 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45912,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45912,onView,onModel,onTick,mspf){
return (function (state_45831){var state_val_45832 = (state_45831[(1)]);if((state_val_45832 === (7)))
{var inst_45826 = (state_45831[(2)]);var inst_45797 = inst_45826;var state_45831__$1 = (function (){var statearr_45833 = state_45831;(statearr_45833[(7)] = inst_45797);
return statearr_45833;
})();var statearr_45834_45913 = state_45831__$1;(statearr_45834_45913[(2)] = null);
(statearr_45834_45913[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45832 === (1)))
{var inst_45788 = [new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"centerPos","centerPos",-882328787),new cljs.core.Keyword(null,"onModel","onModel",-1713159485)];var inst_45789 = [new cljs.core.Keyword(null,"ps","ps",292358046)];var inst_45790 = cljs.core.List.EMPTY;var inst_45791 = [inst_45790];var inst_45792 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_45789,inst_45791);var inst_45793 = [(0),(0)];var inst_45794 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45793,null));var inst_45795 = [(0),inst_45792,inst_45794,onModel];var inst_45796 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_45788,inst_45795);var inst_45797 = inst_45796;var state_45831__$1 = (function (){var statearr_45835 = state_45831;(statearr_45835[(7)] = inst_45797);
return statearr_45835;
})();var statearr_45836_45914 = state_45831__$1;(statearr_45836_45914[(2)] = null);
(statearr_45836_45914[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45832 === (4)))
{var inst_45805 = (state_45831[(8)]);var inst_45803 = (state_45831[(2)]);var inst_45804 = cljs.core.nth.call(null,inst_45803,(0),null);var inst_45805__$1 = cljs.core.nth.call(null,inst_45803,(1),null);var inst_45809 = cljs.core._EQ_.call(null,onTick,inst_45805__$1);var state_45831__$1 = (function (){var statearr_45837 = state_45831;(statearr_45837[(8)] = inst_45805__$1);
(statearr_45837[(9)] = inst_45804);
return statearr_45837;
})();if(inst_45809)
{var statearr_45838_45915 = state_45831__$1;(statearr_45838_45915[(1)] = (5));
} else
{var statearr_45839_45916 = state_45831__$1;(statearr_45839_45916[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45832 === (6)))
{var inst_45805 = (state_45831[(8)]);var inst_45817 = cljs.core._EQ_.call(null,onView,inst_45805);var state_45831__$1 = state_45831;if(inst_45817)
{var statearr_45840_45917 = state_45831__$1;(statearr_45840_45917[(1)] = (8));
} else
{var statearr_45841_45918 = state_45831__$1;(statearr_45841_45918[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45832 === (3)))
{var inst_45829 = (state_45831[(2)]);var state_45831__$1 = state_45831;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45831__$1,inst_45829);
} else
{if((state_val_45832 === (2)))
{var inst_45800 = [onView,onTick];var inst_45801 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45800,null));var state_45831__$1 = state_45831;return cljs.core.async.ioc_alts_BANG_.call(null,state_45831__$1,(4),inst_45801);
} else
{if((state_val_45832 === (9)))
{var inst_45797 = (state_45831[(7)]);var state_45831__$1 = state_45831;var statearr_45842_45919 = state_45831__$1;(statearr_45842_45919[(2)] = inst_45797);
(statearr_45842_45919[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45832 === (5)))
{var inst_45797 = (state_45831[(7)]);var inst_45804 = (state_45831[(9)]);var inst_45811 = [new cljs.core.Keyword(null,"part","part",77757738)];var inst_45812 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_45811,null));var inst_45813 = cljs.core.partial.call(null,tool.particle.update,inst_45804);var inst_45814 = cljs.core.update_in.call(null,inst_45797,inst_45812,inst_45813);var inst_45815 = app.particle.main.draw.call(null,inst_45814);var state_45831__$1 = state_45831;var statearr_45843_45920 = state_45831__$1;(statearr_45843_45920[(2)] = inst_45815);
(statearr_45843_45920[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45832 === (10)))
{var inst_45824 = (state_45831[(2)]);var state_45831__$1 = state_45831;var statearr_45844_45921 = state_45831__$1;(statearr_45844_45921[(2)] = inst_45824);
(statearr_45844_45921[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45832 === (8)))
{var inst_45797 = (state_45831[(7)]);var inst_45804 = (state_45831[(9)]);var inst_45819 = (inst_45804[(0)]);var inst_45820 = (inst_45804[(1)]);var inst_45821 = app.particle.abstract$.onViewCommand.call(null,inst_45819,inst_45820,inst_45797);var state_45831__$1 = state_45831;var statearr_45845_45922 = state_45831__$1;(statearr_45845_45922[(2)] = inst_45821);
(statearr_45845_45922[(1)] = (10));
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
});})(c__6202__auto___45912,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___45912,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45849 = [null,null,null,null,null,null,null,null,null,null];(statearr_45849[(0)] = state_machine__6188__auto__);
(statearr_45849[(1)] = (1));
return statearr_45849;
});
var state_machine__6188__auto____1 = (function (state_45831){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45831);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45850){if((e45850 instanceof Object))
{var ex__6191__auto__ = e45850;var statearr_45851_45923 = state_45831;(statearr_45851_45923[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45831);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45850;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45924 = state_45831;
state_45831 = G__45924;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45831){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45912,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_45852 = f__6203__auto__.call(null);(statearr_45852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45912);
return statearr_45852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45912,onView,onModel,onTick,mspf))
);
var c__6202__auto___45925 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45925,onView,onModel,onTick,mspf){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45925,onView,onModel,onTick,mspf){
return (function (state_45888){var state_val_45889 = (state_45888[(1)]);if((state_val_45889 === (5)))
{var inst_45886 = (state_45888[(2)]);var state_45888__$1 = state_45888;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45888__$1,inst_45886);
} else
{if((state_val_45889 === (4)))
{var inst_45865 = (state_45888[(2)]);var inst_45872 = [(0),(0),(0)];var inst_45873 = [(1),(0),(1),(1)];var inst_45874 = [(10),(20)];var inst_45875 = [(100),(0),3.14];var inst_45876 = {"position":inst_45872,"color":inst_45873,"size":inst_45874,"vel":inst_45875};var inst_45877 = [inst_45876];var inst_45878 = {"duration":(1),"angle":(0),"force":(100),"range":6.28,"prototype":inst_45877};var inst_45879 = [(0),(0),(1),(1)];var inst_45880 = [(30),(10)];var inst_45881 = [(10),(10),(0)];var inst_45882 = [(100),(100),(0)];var inst_45883 = {"id":"x1","emit":inst_45878,"color":inst_45879,"size":inst_45880,"pos":inst_45881,"vel":inst_45882};var inst_45884 = ["edit-particle",inst_45883];var state_45888__$1 = (function (){var statearr_45890 = state_45888;(statearr_45890[(7)] = inst_45865);
return statearr_45890;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45888__$1,(5),onView,inst_45884);
} else
{if((state_val_45889 === (3)))
{var inst_45862 = (state_45888[(2)]);var inst_45863 = cljs.core.async.timeout.call(null,(1100));var state_45888__$1 = (function (){var statearr_45891 = state_45888;(statearr_45891[(8)] = inst_45862);
return statearr_45891;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45888__$1,(4),inst_45863);
} else
{if((state_val_45889 === (2)))
{var inst_45855 = (state_45888[(2)]);var inst_45858 = [(10),(10),(0)];var inst_45859 = {"id":"x1","pos":inst_45858};var inst_45860 = ["edit-particle",inst_45859];var state_45888__$1 = (function (){var statearr_45892 = state_45888;(statearr_45892[(9)] = inst_45855);
return statearr_45892;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45888__$1,(3),onView,inst_45860);
} else
{if((state_val_45889 === (1)))
{var inst_45853 = cljs.core.async.timeout.call(null,(1000));var state_45888__$1 = state_45888;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45888__$1,(2),inst_45853);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto___45925,onView,onModel,onTick,mspf))
;return ((function (switch__6187__auto__,c__6202__auto___45925,onView,onModel,onTick,mspf){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45896 = [null,null,null,null,null,null,null,null,null,null];(statearr_45896[(0)] = state_machine__6188__auto__);
(statearr_45896[(1)] = (1));
return statearr_45896;
});
var state_machine__6188__auto____1 = (function (state_45888){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45888);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45897){if((e45897 instanceof Object))
{var ex__6191__auto__ = e45897;var statearr_45898_45926 = state_45888;(statearr_45898_45926[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45888);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45897;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45927 = state_45888;
state_45888 = G__45927;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45888){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45925,onView,onModel,onTick,mspf))
})();var state__6204__auto__ = (function (){var statearr_45899 = f__6203__auto__.call(null);(statearr_45899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45925);
return statearr_45899;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45925,onView,onModel,onTick,mspf))
);
return null;
});
app.particle.main.main.call(null);
