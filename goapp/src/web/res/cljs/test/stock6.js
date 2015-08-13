// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock6');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('stock.formula');
goog.require('stock.formula');
goog.require('stock.drawer');
goog.require('stock.drawer');
goog.require('stock.tool');
goog.require('stock.tool');
test.stock6.main = (function main(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_53840){var state_val_53841 = (state_53840[(1)]);if((state_val_53841 === (5)))
{var inst_53717 = (state_53840[(7)]);var inst_53712 = (state_53840[(8)]);var inst_53723 = (state_53840[(9)]);var inst_53713 = (state_53840[(10)]);var inst_53714 = (state_53840[(11)]);var inst_53715 = (state_53840[(12)]);var inst_53722 = (state_53840[(13)]);var inst_53731 = (state_53840[(2)]);var inst_53732 = cljs.core.get.call(null,inst_53731,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_53733 = cljs.core.get.call(null,inst_53731,new cljs.core.Keyword(null,"z","z",-789527183));var inst_53734 = cljs.core.get.call(null,inst_53731,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_53735 = stock.formula.clock_direction.call(null,inst_53734,inst_53733);var inst_53736 = stock.formula.BBI.call(null,(6),inst_53712);var inst_53737 = cljs.core.reverse.call(null,inst_53712);var inst_53738 = stock.formula.sar_seq.call(null,inst_53737);var inst_53739 = cljs.core.reverse.call(null,inst_53738);var inst_53740 = cljs.core.reverse.call(null,inst_53712);var inst_53741 = stock.formula.Chaikin.call(null,(3),(9),inst_53740);var inst_53742 = cljs.core.reverse.call(null,inst_53741);var inst_53743 = cljs.core.reverse.call(null,inst_53712);var inst_53744 = stock.formula.EOM.call(null,(14),inst_53743);var inst_53745 = cljs.core.reverse.call(null,inst_53744);var inst_53746 = stock.formula.yu_gv.call(null,(20),inst_53712);var inst_53747 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_53748 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_53749 = stock.tool.volume.call(null,inst_53712);var inst_53750 = [new cljs.core.Keyword(null,"line","line",212345235),inst_53749,"blue"];var inst_53751 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53748,inst_53750);var inst_53752 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_53753 = stock.tool.volume.call(null,inst_53712);var inst_53754 = stock.formula.sma_seq.call(null,(6),inst_53753);var inst_53755 = [new cljs.core.Keyword(null,"line","line",212345235),inst_53754,"yellow"];var inst_53756 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53752,inst_53755);var inst_53757 = [inst_53751,inst_53756];var inst_53758 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53757,null));var inst_53759 = [inst_53758];var inst_53760 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53747,inst_53759);var inst_53761 = inst_53713.width;var inst_53762 = inst_53713.height;var inst_53763 = inst_53713.getContext("2d");var inst_53764 = stock.drawer.draw.call(null,inst_53760,inst_53761,inst_53762,inst_53763);var inst_53765 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_53766 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_53767 = cljs.core.repeat.call(null,(19),(0));var inst_53768 = cljs.core.reverse.call(null,inst_53746);var inst_53769 = cljs.core.into.call(null,inst_53767,inst_53768);var inst_53770 = [new cljs.core.Keyword(null,"line","line",212345235),inst_53769,"red"];var inst_53771 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53766,inst_53770);var inst_53772 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_53773 = cljs.core.count.call(null,inst_53746);var inst_53774 = cljs.core.repeat.call(null,inst_53773,(0));var inst_53775 = [new cljs.core.Keyword(null,"line","line",212345235),inst_53774];var inst_53776 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53772,inst_53775);var inst_53777 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_53778 = cljs.core.count.call(null,inst_53746);var inst_53779 = cljs.core.repeat.call(null,inst_53778,(2));var inst_53780 = [new cljs.core.Keyword(null,"line","line",212345235),inst_53779];var inst_53781 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53777,inst_53780);var inst_53782 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_53783 = cljs.core.count.call(null,inst_53746);var inst_53784 = cljs.core.repeat.call(null,inst_53783,(-2));var inst_53785 = [new cljs.core.Keyword(null,"line","line",212345235),inst_53784];var inst_53786 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53782,inst_53785);var inst_53787 = [inst_53771,inst_53776,inst_53781,inst_53786];var inst_53788 = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53787,null));var inst_53789 = [inst_53788];var inst_53790 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53765,inst_53789);var inst_53791 = inst_53714.width;var inst_53792 = inst_53714.height;var inst_53793 = inst_53714.getContext("2d");var inst_53794 = stock.drawer.draw.call(null,inst_53790,inst_53791,inst_53792,inst_53793);var inst_53795 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_53796 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393)];var inst_53797 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_53733,inst_53734];var inst_53798 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53796,inst_53797);var inst_53799 = [inst_53798];var inst_53800 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53799,null));var inst_53801 = [inst_53800];var inst_53802 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53795,inst_53801);var inst_53803 = inst_53715.width;var inst_53804 = inst_53715.height;var inst_53805 = inst_53715.getContext("2d");var inst_53806 = stock.drawer.draw.call(null,inst_53802,inst_53803,inst_53804,inst_53805);var inst_53807 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_53808 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_53809 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_53712];var inst_53810 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53808,inst_53809);var inst_53811 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_53812 = stock.tool.close.call(null,inst_53712);var inst_53813 = stock.formula.sma_seq.call(null,(5),inst_53812);var inst_53814 = [new cljs.core.Keyword(null,"line","line",212345235),inst_53813,"blue"];var inst_53815 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53811,inst_53814);var inst_53816 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_53817 = stock.tool.close.call(null,inst_53712);var inst_53818 = stock.formula.sma_seq.call(null,(10),inst_53817);var inst_53819 = [new cljs.core.Keyword(null,"line","line",212345235),inst_53818,"yellow"];var inst_53820 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53816,inst_53819);var inst_53821 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_53822 = stock.tool.close.call(null,inst_53712);var inst_53823 = stock.formula.sma_seq.call(null,(20),inst_53822);var inst_53824 = [new cljs.core.Keyword(null,"line","line",212345235),inst_53823,"purple"];var inst_53825 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53821,inst_53824);var inst_53826 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_53827 = stock.tool.close.call(null,inst_53712);var inst_53828 = stock.formula.sma_seq.call(null,(65),inst_53827);var inst_53829 = [new cljs.core.Keyword(null,"line","line",212345235),inst_53828,"black"];var inst_53830 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53826,inst_53829);var inst_53831 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_53832 = [new cljs.core.Keyword(null,"line","line",212345235),inst_53739,"red"];var inst_53833 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53831,inst_53832);var inst_53834 = [inst_53810,inst_53815,inst_53820,inst_53825,inst_53830,inst_53833];var inst_53835 = (new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53834,null));var inst_53836 = [inst_53835];var inst_53837 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_53807,inst_53836);var inst_53838 = stock.drawer.draw.call(null,inst_53837,inst_53722,inst_53723,inst_53717);var state_53840__$1 = (function (){var statearr_53842 = state_53840;(statearr_53842[(14)] = inst_53745);
(statearr_53842[(15)] = inst_53742);
(statearr_53842[(16)] = inst_53735);
(statearr_53842[(17)] = inst_53794);
(statearr_53842[(18)] = inst_53806);
(statearr_53842[(19)] = inst_53764);
(statearr_53842[(20)] = inst_53732);
(statearr_53842[(21)] = inst_53736);
return statearr_53842;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53840__$1,inst_53838);
} else
{if((state_val_53841 === (4)))
{var inst_53725 = (state_53840[(22)]);var state_53840__$1 = state_53840;var statearr_53843_53855 = state_53840__$1;(statearr_53843_53855[(2)] = inst_53725);
(statearr_53843_53855[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (3)))
{var inst_53725 = (state_53840[(22)]);var inst_53728 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53725);var state_53840__$1 = state_53840;var statearr_53844_53856 = state_53840__$1;(statearr_53844_53856[(2)] = inst_53728);
(statearr_53844_53856[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (2)))
{var inst_53712 = (state_53840[(8)]);var inst_53725 = (state_53840[(22)]);var inst_53710 = (state_53840[(2)]);var inst_53711 = cljs.core.nth.call(null,inst_53710,(0),null);var inst_53712__$1 = cljs.core.nth.call(null,inst_53710,(1),null);var inst_53713 = document.getElementById("index2");var inst_53714 = document.getElementById("index");var inst_53715 = document.getElementById("clock");var inst_53716 = document.getElementById("kline");var inst_53717 = inst_53716.getContext("2d");var inst_53718 = inst_53716.width;var inst_53719 = inst_53716.height;var inst_53720 = [inst_53718,inst_53719];var inst_53721 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_53720,null));var inst_53722 = cljs.core.nth.call(null,inst_53721,(0),null);var inst_53723 = cljs.core.nth.call(null,inst_53721,(1),null);var inst_53724 = cljs.core.reverse.call(null,inst_53712__$1);var inst_53725__$1 = stock.formula.clock.call(null,(12),inst_53724);var inst_53726 = cljs.core.seq_QMARK_.call(null,inst_53725__$1);var state_53840__$1 = (function (){var statearr_53845 = state_53840;(statearr_53845[(7)] = inst_53717);
(statearr_53845[(8)] = inst_53712__$1);
(statearr_53845[(9)] = inst_53723);
(statearr_53845[(10)] = inst_53713);
(statearr_53845[(23)] = inst_53711);
(statearr_53845[(11)] = inst_53714);
(statearr_53845[(12)] = inst_53715);
(statearr_53845[(22)] = inst_53725__$1);
(statearr_53845[(13)] = inst_53722);
return statearr_53845;
})();if(inst_53726)
{var statearr_53846_53857 = state_53840__$1;(statearr_53846_53857[(1)] = (3));
} else
{var statearr_53847_53858 = state_53840__$1;(statearr_53847_53858[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53841 === (1)))
{var inst_53708 = stock.tool.stock_info.call(null,null,(3583),"2015/1/1",(0),(200));var state_53840__$1 = state_53840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53840__$1,(2),inst_53708);
} else
{return null;
}
}
}
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_53851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53851[(0)] = state_machine__6188__auto__);
(statearr_53851[(1)] = (1));
return statearr_53851;
});
var state_machine__6188__auto____1 = (function (state_53840){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_53840);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e53852){if((e53852 instanceof Object))
{var ex__6191__auto__ = e53852;var statearr_53853_53859 = state_53840;(statearr_53853_53859[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53840);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53852;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53860 = state_53840;
state_53840 = G__53860;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_53840){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_53840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_53854 = f__6203__auto__.call(null);(statearr_53854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_53854;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
