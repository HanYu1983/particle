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
return (function (state_19890){var state_val_19891 = (state_19890[(1)]);if((state_val_19891 === (5)))
{var inst_19764 = (state_19890[(7)]);var inst_19771 = (state_19890[(8)]);var inst_19761 = (state_19890[(9)]);var inst_19759 = (state_19890[(10)]);var inst_19765 = (state_19890[(11)]);var inst_19762 = (state_19890[(12)]);var inst_19758 = (state_19890[(13)]);var inst_19760 = (state_19890[(14)]);var inst_19769 = (state_19890[(15)]);var inst_19770 = (state_19890[(16)]);var inst_19763 = (state_19890[(17)]);var inst_19778 = (state_19890[(2)]);var inst_19779 = cljs.core.get.call(null,inst_19778,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_19780 = cljs.core.get.call(null,inst_19778,new cljs.core.Keyword(null,"z","z",-789527183));var inst_19781 = cljs.core.get.call(null,inst_19778,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_19782 = cljs.core.repeat.call(null,(5),(0));var inst_19783 = (function (){var vec__19754 = inst_19769;var ctx = inst_19765;var canvas4 = inst_19761;var map__19755 = inst_19778;var w = inst_19770;var cs = inst_19779;var err = inst_19759;var infos = inst_19760;var vec__19753 = inst_19758;var canvas = inst_19764;var canvas3 = inst_19762;var z = inst_19780;var v_z = inst_19781;var h = inst_19771;var canvas2 = inst_19763;return ((function (vec__19754,ctx,canvas4,map__19755,w,cs,err,infos,vec__19753,canvas,canvas3,z,v_z,h,canvas2,inst_19764,inst_19771,inst_19761,inst_19759,inst_19765,inst_19762,inst_19758,inst_19760,inst_19769,inst_19770,inst_19763,inst_19778,inst_19779,inst_19780,inst_19781,inst_19782,state_val_19891,c__6202__auto__){
return (function (p1__19600_SHARP_){return Math.abs(p1__19600_SHARP_);
});
;})(vec__19754,ctx,canvas4,map__19755,w,cs,err,infos,vec__19753,canvas,canvas3,z,v_z,h,canvas2,inst_19764,inst_19771,inst_19761,inst_19759,inst_19765,inst_19762,inst_19758,inst_19760,inst_19769,inst_19770,inst_19763,inst_19778,inst_19779,inst_19780,inst_19781,inst_19782,state_val_19891,c__6202__auto__))
})();var inst_19784 = cljs.core.map.call(null,cljs.core._PLUS_,inst_19780,inst_19781);var inst_19785 = cljs.core.map.call(null,inst_19783,inst_19784);var inst_19786 = cljs.core.reverse.call(null,inst_19785);var inst_19787 = cljs.core.into.call(null,inst_19782,inst_19786);var inst_19788 = stock.formula.clock_direction.call(null,inst_19781,inst_19780);var inst_19789 = stock.formula.BBI.call(null,(6),inst_19760);var inst_19790 = cljs.core.reverse.call(null,inst_19760);var inst_19791 = stock.formula.sar_seq.call(null,inst_19790);var inst_19792 = cljs.core.reverse.call(null,inst_19791);var inst_19793 = cljs.core.reverse.call(null,inst_19760);var inst_19794 = stock.formula.Chaikin.call(null,(3),(9),inst_19793);var inst_19795 = cljs.core.reverse.call(null,inst_19794);var inst_19796 = cljs.core.reverse.call(null,inst_19760);var inst_19797 = stock.formula.EOM.call(null,(14),inst_19796);var inst_19798 = cljs.core.reverse.call(null,inst_19797);var inst_19799 = stock.formula.yu_gv.call(null,(20),inst_19760);var inst_19800 = stock.formula.yu_clock.call(null,(20),inst_19760);var inst_19801 = stock.formula.macd_dif.call(null,(12),(26),inst_19760);var inst_19802 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_19803 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_19804 = [new cljs.core.Keyword(null,"line","line",212345235),inst_19801,"blue"];var inst_19805 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19803,inst_19804);var inst_19806 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_19807 = stock.formula.sma_seq.call(null,(9),inst_19801);var inst_19808 = [new cljs.core.Keyword(null,"line","line",212345235),inst_19807,"yellow"];var inst_19809 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19806,inst_19808);var inst_19810 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_19811 = cljs.core.count.call(null,inst_19801);var inst_19812 = cljs.core.repeat.call(null,inst_19811,(0));var inst_19813 = [new cljs.core.Keyword(null,"line","line",212345235),inst_19812];var inst_19814 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19810,inst_19813);var inst_19815 = [inst_19805,inst_19809,inst_19814];var inst_19816 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_19815,null));var inst_19817 = [inst_19816];var inst_19818 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19802,inst_19817);var inst_19819 = inst_19761.width;var inst_19820 = inst_19761.height;var inst_19821 = inst_19761.getContext("2d");var inst_19822 = stock.drawer.draw.call(null,inst_19818,inst_19819,inst_19820,inst_19821);var inst_19823 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_19824 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_19825 = [new cljs.core.Keyword(null,"line","line",212345235),inst_19800,"blue"];var inst_19826 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19824,inst_19825);var inst_19827 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_19828 = stock.formula.sma_seq.call(null,(5),inst_19800);var inst_19829 = [new cljs.core.Keyword(null,"line","line",212345235),inst_19828,"yellow"];var inst_19830 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19827,inst_19829);var inst_19831 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_19832 = cljs.core.count.call(null,inst_19800);var inst_19833 = cljs.core.repeat.call(null,inst_19832,(0));var inst_19834 = [new cljs.core.Keyword(null,"line","line",212345235),inst_19833];var inst_19835 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19831,inst_19834);var inst_19836 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_19837 = cljs.core.count.call(null,inst_19800);var inst_19838 = cljs.core.repeat.call(null,inst_19837,0.5);var inst_19839 = [new cljs.core.Keyword(null,"line","line",212345235),inst_19838];var inst_19840 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19836,inst_19839);var inst_19841 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_19842 = cljs.core.count.call(null,inst_19800);var inst_19843 = cljs.core.repeat.call(null,inst_19842,-0.5);var inst_19844 = [new cljs.core.Keyword(null,"line","line",212345235),inst_19843];var inst_19845 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19841,inst_19844);var inst_19846 = [inst_19826,inst_19830,inst_19835,inst_19840,inst_19845];var inst_19847 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_19846,null));var inst_19848 = [inst_19847];var inst_19849 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19823,inst_19848);var inst_19850 = inst_19762.width;var inst_19851 = inst_19762.height;var inst_19852 = inst_19762.getContext("2d");var inst_19853 = stock.drawer.draw.call(null,inst_19849,inst_19850,inst_19851,inst_19852);var inst_19854 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_19855 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_19856 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_19780,inst_19781,"blue"];var inst_19857 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19855,inst_19856);var inst_19858 = [inst_19857];var inst_19859 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_19858,null));var inst_19860 = [inst_19859];var inst_19861 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19854,inst_19860);var inst_19862 = inst_19763.width;var inst_19863 = inst_19763.height;var inst_19864 = inst_19763.getContext("2d");var inst_19865 = stock.drawer.draw.call(null,inst_19861,inst_19862,inst_19863,inst_19864);var inst_19866 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_19867 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_19868 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_19760];var inst_19869 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19867,inst_19868);var inst_19870 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_19871 = stock.tool.close.call(null,inst_19760);var inst_19872 = cljs.core.reverse.call(null,inst_19871);var inst_19873 = stock.formula.ema_seq.call(null,(12),inst_19872);var inst_19874 = cljs.core.reverse.call(null,inst_19873);var inst_19875 = [new cljs.core.Keyword(null,"line","line",212345235),inst_19874,"blue"];var inst_19876 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19870,inst_19875);var inst_19877 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_19878 = stock.tool.close.call(null,inst_19760);var inst_19879 = cljs.core.reverse.call(null,inst_19878);var inst_19880 = stock.formula.ema_seq.call(null,(26),inst_19879);var inst_19881 = cljs.core.reverse.call(null,inst_19880);var inst_19882 = [new cljs.core.Keyword(null,"line","line",212345235),inst_19881,"yellow"];var inst_19883 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19877,inst_19882);var inst_19884 = [inst_19869,inst_19876,inst_19883];var inst_19885 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_19884,null));var inst_19886 = [inst_19885];var inst_19887 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_19866,inst_19886);var inst_19888 = stock.drawer.draw.call(null,inst_19887,inst_19770,inst_19771,inst_19765);var state_19890__$1 = (function (){var statearr_19892 = state_19890;(statearr_19892[(18)] = inst_19788);
(statearr_19892[(19)] = inst_19853);
(statearr_19892[(20)] = inst_19799);
(statearr_19892[(21)] = inst_19822);
(statearr_19892[(22)] = inst_19787);
(statearr_19892[(23)] = inst_19795);
(statearr_19892[(24)] = inst_19789);
(statearr_19892[(25)] = inst_19792);
(statearr_19892[(26)] = inst_19798);
(statearr_19892[(27)] = inst_19865);
return statearr_19892;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19890__$1,inst_19888);
} else
{if((state_val_19891 === (4)))
{var inst_19772 = (state_19890[(28)]);var state_19890__$1 = state_19890;var statearr_19893_19905 = state_19890__$1;(statearr_19893_19905[(2)] = inst_19772);
(statearr_19893_19905[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19891 === (3)))
{var inst_19772 = (state_19890[(28)]);var inst_19775 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19772);var state_19890__$1 = state_19890;var statearr_19894_19906 = state_19890__$1;(statearr_19894_19906[(2)] = inst_19775);
(statearr_19894_19906[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19891 === (2)))
{var inst_19764 = (state_19890[(7)]);var inst_19772 = (state_19890[(28)]);var inst_19758 = (state_19890[(13)]);var inst_19760 = (state_19890[(14)]);var inst_19769 = (state_19890[(15)]);var inst_19758__$1 = (state_19890[(2)]);var inst_19759 = cljs.core.nth.call(null,inst_19758__$1,(0),null);var inst_19760__$1 = cljs.core.nth.call(null,inst_19758__$1,(1),null);var inst_19761 = document.getElementById("index2");var inst_19762 = document.getElementById("index");var inst_19763 = document.getElementById("clock");var inst_19764__$1 = document.getElementById("kline");var inst_19765 = inst_19764__$1.getContext("2d");var inst_19766 = inst_19764__$1.width;var inst_19767 = inst_19764__$1.height;var inst_19768 = [inst_19766,inst_19767];var inst_19769__$1 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_19768,null));var inst_19770 = cljs.core.nth.call(null,inst_19769__$1,(0),null);var inst_19771 = cljs.core.nth.call(null,inst_19769__$1,(1),null);var inst_19772__$1 = stock.formula.clock.call(null,(20),inst_19760__$1);var inst_19773 = cljs.core.seq_QMARK_.call(null,inst_19772__$1);var state_19890__$1 = (function (){var statearr_19895 = state_19890;(statearr_19895[(7)] = inst_19764__$1);
(statearr_19895[(8)] = inst_19771);
(statearr_19895[(9)] = inst_19761);
(statearr_19895[(10)] = inst_19759);
(statearr_19895[(11)] = inst_19765);
(statearr_19895[(12)] = inst_19762);
(statearr_19895[(28)] = inst_19772__$1);
(statearr_19895[(13)] = inst_19758__$1);
(statearr_19895[(14)] = inst_19760__$1);
(statearr_19895[(15)] = inst_19769__$1);
(statearr_19895[(16)] = inst_19770);
(statearr_19895[(17)] = inst_19763);
return statearr_19895;
})();if(inst_19773)
{var statearr_19896_19907 = state_19890__$1;(statearr_19896_19907[(1)] = (3));
} else
{var statearr_19897_19908 = state_19890__$1;(statearr_19897_19908[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19891 === (1)))
{var inst_19756 = stock.tool.stock_info.call(null,null,(2450),"2015/1/1",(0),(200));var state_19890__$1 = state_19890;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19890__$1,(2),inst_19756);
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
var state_machine__6188__auto____0 = (function (){var statearr_19901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19901[(0)] = state_machine__6188__auto__);
(statearr_19901[(1)] = (1));
return statearr_19901;
});
var state_machine__6188__auto____1 = (function (state_19890){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_19890);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e19902){if((e19902 instanceof Object))
{var ex__6191__auto__ = e19902;var statearr_19903_19909 = state_19890;(statearr_19903_19909[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19890);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19902;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19910 = state_19890;
state_19890 = G__19910;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_19890){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_19890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_19904 = f__6203__auto__.call(null);(statearr_19904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_19904;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
