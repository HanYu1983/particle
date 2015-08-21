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
return (function (state_24998){var state_val_24999 = (state_24998[(1)]);if((state_val_24999 === (5)))
{var inst_24873 = (state_24998[(7)]);var inst_24876 = (state_24998[(8)]);var inst_24874 = (state_24998[(9)]);var inst_24885 = (state_24998[(10)]);var inst_24875 = (state_24998[(11)]);var inst_24879 = (state_24998[(12)]);var inst_24880 = (state_24998[(13)]);var inst_24884 = (state_24998[(14)]);var inst_24878 = (state_24998[(15)]);var inst_24886 = (state_24998[(16)]);var inst_24877 = (state_24998[(17)]);var inst_24893 = (state_24998[(2)]);var inst_24894 = cljs.core.get.call(null,inst_24893,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_24895 = cljs.core.get.call(null,inst_24893,new cljs.core.Keyword(null,"z","z",-789527183));var inst_24896 = cljs.core.get.call(null,inst_24893,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_24897 = cljs.core.repeat.call(null,(5),(0));var inst_24898 = (function (){var ctx = inst_24880;var map__24870 = inst_24893;var canvas4 = inst_24876;var w = inst_24885;var cs = inst_24894;var err = inst_24874;var infos = inst_24875;var canvas = inst_24879;var canvas3 = inst_24877;var z = inst_24895;var v_z = inst_24896;var h = inst_24886;var canvas2 = inst_24878;var vec__24869 = inst_24884;var vec__24868 = inst_24873;return ((function (ctx,map__24870,canvas4,w,cs,err,infos,canvas,canvas3,z,v_z,h,canvas2,vec__24869,vec__24868,inst_24873,inst_24876,inst_24874,inst_24885,inst_24875,inst_24879,inst_24880,inst_24884,inst_24878,inst_24886,inst_24877,inst_24893,inst_24894,inst_24895,inst_24896,inst_24897,state_val_24999,c__6202__auto__){
return (function (p1__24722_SHARP_){return Math.abs(p1__24722_SHARP_);
});
;})(ctx,map__24870,canvas4,w,cs,err,infos,canvas,canvas3,z,v_z,h,canvas2,vec__24869,vec__24868,inst_24873,inst_24876,inst_24874,inst_24885,inst_24875,inst_24879,inst_24880,inst_24884,inst_24878,inst_24886,inst_24877,inst_24893,inst_24894,inst_24895,inst_24896,inst_24897,state_val_24999,c__6202__auto__))
})();var inst_24899 = cljs.core.map.call(null,cljs.core._PLUS_,inst_24895,inst_24896);var inst_24900 = cljs.core.map.call(null,inst_24898,inst_24899);var inst_24901 = cljs.core.reverse.call(null,inst_24900);var inst_24902 = cljs.core.into.call(null,inst_24897,inst_24901);var inst_24903 = stock.formula.clock_direction.call(null,inst_24896,inst_24895);var inst_24904 = stock.formula.BBI.call(null,(3),(6),(12),(24),inst_24875);var inst_24905 = cljs.core.reverse.call(null,inst_24875);var inst_24906 = stock.formula.sar_seq.call(null,inst_24905);var inst_24907 = cljs.core.reverse.call(null,inst_24906);var inst_24908 = cljs.core.reverse.call(null,inst_24875);var inst_24909 = stock.formula.Chaikin.call(null,(3),(9),inst_24908);var inst_24910 = cljs.core.reverse.call(null,inst_24909);var inst_24911 = cljs.core.reverse.call(null,inst_24875);var inst_24912 = stock.formula.EOM.call(null,(14),inst_24911);var inst_24913 = cljs.core.reverse.call(null,inst_24912);var inst_24914 = stock.formula.yu_gv.call(null,(20),inst_24875);var inst_24915 = stock.formula.yu_clock.call(null,(20),inst_24875);var inst_24916 = stock.formula.macd_dif.call(null,(20),(100),inst_24875);var inst_24917 = stock.tool.close.call(null,inst_24875);var inst_24918 = cljs.core.reverse.call(null,inst_24917);var inst_24919 = stock.formula.ema_seq.call(null,(5),inst_24918);var inst_24920 = cljs.core.reverse.call(null,inst_24919);var inst_24921 = cljs.core.map.call(null,cljs.core._,inst_24920,inst_24904);var inst_24922 = stock.formula.rsv_seq.call(null,(100),inst_24875);var inst_24923 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_24924 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24925 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24921,"black"];var inst_24926 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24924,inst_24925);var inst_24927 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24928 = stock.formula.sma_seq.call(null,(9),inst_24921);var inst_24929 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24928,"yellow"];var inst_24930 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24927,inst_24929);var inst_24931 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_24932 = cljs.core.count.call(null,inst_24875);var inst_24933 = cljs.core.repeat.call(null,inst_24932,(0));var inst_24934 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24933];var inst_24935 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24931,inst_24934);var inst_24936 = [inst_24926,inst_24930,inst_24935];var inst_24937 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24936,null));var inst_24938 = [inst_24937];var inst_24939 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24923,inst_24938);var inst_24940 = inst_24876.width;var inst_24941 = inst_24876.height;var inst_24942 = inst_24876.getContext("2d");var inst_24943 = stock.drawer.draw.call(null,inst_24939,inst_24940,inst_24941,inst_24942);var inst_24944 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_24945 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24946 = stock.formula.sma_seq.call(null,(3),inst_24922);var inst_24947 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24946,"black"];var inst_24948 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24945,inst_24947);var inst_24949 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24950 = stock.formula.sma_seq.call(null,(9),inst_24922);var inst_24951 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24950,"yellow"];var inst_24952 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24949,inst_24951);var inst_24953 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_24954 = cljs.core.count.call(null,inst_24875);var inst_24955 = cljs.core.repeat.call(null,inst_24954,(50));var inst_24956 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24955];var inst_24957 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24953,inst_24956);var inst_24958 = [inst_24948,inst_24952,inst_24957];var inst_24959 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24958,null));var inst_24960 = [inst_24959];var inst_24961 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24944,inst_24960);var inst_24962 = inst_24877.width;var inst_24963 = inst_24877.height;var inst_24964 = inst_24877.getContext("2d");var inst_24965 = stock.drawer.draw.call(null,inst_24961,inst_24962,inst_24963,inst_24964);var inst_24966 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_24967 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24968 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_24895,inst_24896,"blue"];var inst_24969 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24967,inst_24968);var inst_24970 = [inst_24969];var inst_24971 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24970,null));var inst_24972 = [inst_24971];var inst_24973 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24966,inst_24972);var inst_24974 = inst_24878.width;var inst_24975 = inst_24878.height;var inst_24976 = inst_24878.getContext("2d");var inst_24977 = stock.drawer.draw.call(null,inst_24973,inst_24974,inst_24975,inst_24976);var inst_24978 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_24979 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_24980 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_24875];var inst_24981 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24979,inst_24980);var inst_24982 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24983 = stock.tool.close.call(null,inst_24875);var inst_24984 = cljs.core.reverse.call(null,inst_24983);var inst_24985 = stock.formula.ema_seq.call(null,(5),inst_24984);var inst_24986 = cljs.core.reverse.call(null,inst_24985);var inst_24987 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24986,"blue"];var inst_24988 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24982,inst_24987);var inst_24989 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_24990 = [new cljs.core.Keyword(null,"line","line",212345235),inst_24904,"yellow"];var inst_24991 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24989,inst_24990);var inst_24992 = [inst_24981,inst_24988,inst_24991];var inst_24993 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24992,null));var inst_24994 = [inst_24993];var inst_24995 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_24978,inst_24994);var inst_24996 = stock.drawer.draw.call(null,inst_24995,inst_24885,inst_24886,inst_24880);var state_24998__$1 = (function (){var statearr_25000 = state_24998;(statearr_25000[(18)] = inst_24943);
(statearr_25000[(19)] = inst_24903);
(statearr_25000[(20)] = inst_24977);
(statearr_25000[(21)] = inst_24910);
(statearr_25000[(22)] = inst_24915);
(statearr_25000[(23)] = inst_24916);
(statearr_25000[(24)] = inst_24914);
(statearr_25000[(25)] = inst_24913);
(statearr_25000[(26)] = inst_24907);
(statearr_25000[(27)] = inst_24965);
(statearr_25000[(28)] = inst_24902);
return statearr_25000;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24998__$1,inst_24996);
} else
{if((state_val_24999 === (4)))
{var inst_24887 = (state_24998[(29)]);var state_24998__$1 = state_24998;var statearr_25001_25013 = state_24998__$1;(statearr_25001_25013[(2)] = inst_24887);
(statearr_25001_25013[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (3)))
{var inst_24887 = (state_24998[(29)]);var inst_24890 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24887);var state_24998__$1 = state_24998;var statearr_25002_25014 = state_24998__$1;(statearr_25002_25014[(2)] = inst_24890);
(statearr_25002_25014[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (2)))
{var inst_24887 = (state_24998[(29)]);var inst_24873 = (state_24998[(7)]);var inst_24875 = (state_24998[(11)]);var inst_24879 = (state_24998[(12)]);var inst_24884 = (state_24998[(14)]);var inst_24873__$1 = (state_24998[(2)]);var inst_24874 = cljs.core.nth.call(null,inst_24873__$1,(0),null);var inst_24875__$1 = cljs.core.nth.call(null,inst_24873__$1,(1),null);var inst_24876 = document.getElementById("index2");var inst_24877 = document.getElementById("index");var inst_24878 = document.getElementById("clock");var inst_24879__$1 = document.getElementById("kline");var inst_24880 = inst_24879__$1.getContext("2d");var inst_24881 = inst_24879__$1.width;var inst_24882 = inst_24879__$1.height;var inst_24883 = [inst_24881,inst_24882];var inst_24884__$1 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_24883,null));var inst_24885 = cljs.core.nth.call(null,inst_24884__$1,(0),null);var inst_24886 = cljs.core.nth.call(null,inst_24884__$1,(1),null);var inst_24887__$1 = stock.formula.clock.call(null,(20),inst_24875__$1);var inst_24888 = cljs.core.seq_QMARK_.call(null,inst_24887__$1);var state_24998__$1 = (function (){var statearr_25003 = state_24998;(statearr_25003[(29)] = inst_24887__$1);
(statearr_25003[(7)] = inst_24873__$1);
(statearr_25003[(8)] = inst_24876);
(statearr_25003[(9)] = inst_24874);
(statearr_25003[(10)] = inst_24885);
(statearr_25003[(11)] = inst_24875__$1);
(statearr_25003[(12)] = inst_24879__$1);
(statearr_25003[(13)] = inst_24880);
(statearr_25003[(14)] = inst_24884__$1);
(statearr_25003[(15)] = inst_24878);
(statearr_25003[(16)] = inst_24886);
(statearr_25003[(17)] = inst_24877);
return statearr_25003;
})();if(inst_24888)
{var statearr_25004_25015 = state_24998__$1;(statearr_25004_25015[(1)] = (3));
} else
{var statearr_25005_25016 = state_24998__$1;(statearr_25005_25016[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24999 === (1)))
{var inst_24871 = stock.tool.stock_info.call(null,null,(1522),"2014/1/1",(0),(200));var state_24998__$1 = state_24998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24998__$1,(2),inst_24871);
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
var state_machine__6188__auto____0 = (function (){var statearr_25009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25009[(0)] = state_machine__6188__auto__);
(statearr_25009[(1)] = (1));
return statearr_25009;
});
var state_machine__6188__auto____1 = (function (state_24998){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_24998);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e25010){if((e25010 instanceof Object))
{var ex__6191__auto__ = e25010;var statearr_25011_25017 = state_24998;(statearr_25011_25017[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24998);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25018 = state_24998;
state_24998 = G__25018;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_24998){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_24998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_25012 = f__6203__auto__.call(null);(statearr_25012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_25012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
