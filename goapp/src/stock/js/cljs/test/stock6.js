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
return (function (state_14248){var state_val_14249 = (state_14248[(1)]);if((state_val_14249 === (8)))
{var inst_14112 = (state_14248[(7)]);var inst_14126 = (state_14248[(8)]);var inst_14107 = (state_14248[(9)]);var inst_14105 = (state_14248[(10)]);var inst_14109 = (state_14248[(11)]);var inst_14106 = (state_14248[(12)]);var inst_14116 = (state_14248[(13)]);var inst_14110 = (state_14248[(14)]);var inst_14127 = (state_14248[(15)]);var inst_14117 = (state_14248[(16)]);var inst_14111 = (state_14248[(17)]);var inst_14125 = (state_14248[(18)]);var inst_14128 = (state_14248[(19)]);var inst_14118 = (state_14248[(20)]);var inst_14108 = (state_14248[(21)]);var inst_14135 = (state_14248[(2)]);var inst_14136 = cljs.core.get.call(null,inst_14135,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_14137 = cljs.core.get.call(null,inst_14135,new cljs.core.Keyword(null,"z","z",-789527183));var inst_14138 = cljs.core.get.call(null,inst_14135,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_14139 = cljs.core.repeat.call(null,(5),(0));var inst_14140 = (function (){var v_z2 = inst_14138;var ctx = inst_14112;var map__14102 = inst_14135;var vec__14099 = inst_14105;var vec__14100 = inst_14116;var z2 = inst_14137;var map__14101 = inst_14125;var canvas4 = inst_14108;var w = inst_14117;var cs2 = inst_14136;var cs = inst_14126;var err = inst_14106;var infos = inst_14107;var canvas = inst_14111;var canvas3 = inst_14109;var z = inst_14127;var v_z = inst_14128;var h = inst_14118;var canvas2 = inst_14110;return ((function (v_z2,ctx,map__14102,vec__14099,vec__14100,z2,map__14101,canvas4,w,cs2,cs,err,infos,canvas,canvas3,z,v_z,h,canvas2,inst_14112,inst_14126,inst_14107,inst_14105,inst_14109,inst_14106,inst_14116,inst_14110,inst_14127,inst_14117,inst_14111,inst_14125,inst_14128,inst_14118,inst_14108,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,state_val_14249,c__6202__auto__){
return (function (p1__13929_SHARP_){return Math.abs(p1__13929_SHARP_);
});
;})(v_z2,ctx,map__14102,vec__14099,vec__14100,z2,map__14101,canvas4,w,cs2,cs,err,infos,canvas,canvas3,z,v_z,h,canvas2,inst_14112,inst_14126,inst_14107,inst_14105,inst_14109,inst_14106,inst_14116,inst_14110,inst_14127,inst_14117,inst_14111,inst_14125,inst_14128,inst_14118,inst_14108,inst_14135,inst_14136,inst_14137,inst_14138,inst_14139,state_val_14249,c__6202__auto__))
})();var inst_14141 = cljs.core.map.call(null,cljs.core._PLUS_,inst_14127,inst_14128);var inst_14142 = cljs.core.map.call(null,inst_14140,inst_14141);var inst_14143 = cljs.core.reverse.call(null,inst_14142);var inst_14144 = cljs.core.into.call(null,inst_14139,inst_14143);var inst_14145 = stock.formula.clock_direction.call(null,inst_14128,inst_14127);var inst_14146 = stock.formula.BBI.call(null,(6),inst_14107);var inst_14147 = cljs.core.reverse.call(null,inst_14107);var inst_14148 = stock.formula.sar_seq.call(null,inst_14147);var inst_14149 = cljs.core.reverse.call(null,inst_14148);var inst_14150 = cljs.core.reverse.call(null,inst_14107);var inst_14151 = stock.formula.Chaikin.call(null,(3),(9),inst_14150);var inst_14152 = cljs.core.reverse.call(null,inst_14151);var inst_14153 = cljs.core.reverse.call(null,inst_14107);var inst_14154 = stock.formula.EOM.call(null,(14),inst_14153);var inst_14155 = cljs.core.reverse.call(null,inst_14154);var inst_14156 = stock.formula.yu_gv.call(null,(20),inst_14107);var inst_14157 = cljs.core.pr_str.call(null,inst_14144);var inst_14158 = console.log(inst_14157);var inst_14159 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_14160 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_14161 = stock.tool.volume.call(null,inst_14107);var inst_14162 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14161,"blue"];var inst_14163 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14160,inst_14162);var inst_14164 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_14165 = stock.tool.volume.call(null,inst_14107);var inst_14166 = stock.formula.sma_seq.call(null,(6),inst_14165);var inst_14167 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14166,"yellow"];var inst_14168 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14164,inst_14167);var inst_14169 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_14170 = stock.tool.volume.call(null,inst_14107);var inst_14171 = stock.formula.sma_seq.call(null,(12),inst_14170);var inst_14172 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14171,"purple"];var inst_14173 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14169,inst_14172);var inst_14174 = [inst_14163,inst_14168,inst_14173];var inst_14175 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14174,null));var inst_14176 = [inst_14175];var inst_14177 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14159,inst_14176);var inst_14178 = inst_14108.width;var inst_14179 = inst_14108.height;var inst_14180 = inst_14108.getContext("2d");var inst_14181 = stock.drawer.draw.call(null,inst_14177,inst_14178,inst_14179,inst_14180);var inst_14182 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_14183 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_14184 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14144,"blue"];var inst_14185 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14183,inst_14184);var inst_14186 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_14187 = stock.formula.sma_seq.call(null,(5),inst_14144);var inst_14188 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14187,"yellow"];var inst_14189 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14186,inst_14188);var inst_14190 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_14191 = cljs.core.count.call(null,inst_14144);var inst_14192 = cljs.core.repeat.call(null,inst_14191,(0));var inst_14193 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14192];var inst_14194 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14190,inst_14193);var inst_14195 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_14196 = cljs.core.count.call(null,inst_14144);var inst_14197 = cljs.core.repeat.call(null,inst_14196,1.5);var inst_14198 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14197];var inst_14199 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14195,inst_14198);var inst_14200 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_14201 = cljs.core.count.call(null,inst_14144);var inst_14202 = cljs.core.repeat.call(null,inst_14201,-1.5);var inst_14203 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14202];var inst_14204 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14200,inst_14203);var inst_14205 = [inst_14185,inst_14189,inst_14194,inst_14199,inst_14204];var inst_14206 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14205,null));var inst_14207 = [inst_14206];var inst_14208 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14182,inst_14207);var inst_14209 = inst_14109.width;var inst_14210 = inst_14109.height;var inst_14211 = inst_14109.getContext("2d");var inst_14212 = stock.drawer.draw.call(null,inst_14208,inst_14209,inst_14210,inst_14211);var inst_14213 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_14214 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_14215 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_14127,inst_14128,"blue"];var inst_14216 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14214,inst_14215);var inst_14217 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_14218 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_14137,inst_14138,"yellow"];var inst_14219 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14217,inst_14218);var inst_14220 = [inst_14216,inst_14219];var inst_14221 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14220,null));var inst_14222 = [inst_14221];var inst_14223 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14213,inst_14222);var inst_14224 = inst_14110.width;var inst_14225 = inst_14110.height;var inst_14226 = inst_14110.getContext("2d");var inst_14227 = stock.drawer.draw.call(null,inst_14223,inst_14224,inst_14225,inst_14226);var inst_14228 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_14229 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_14230 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_14107];var inst_14231 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14229,inst_14230);var inst_14232 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_14233 = stock.tool.close.call(null,inst_14107);var inst_14234 = stock.formula.sma_seq.call(null,(5),inst_14233);var inst_14235 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14234,"purple"];var inst_14236 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14232,inst_14235);var inst_14237 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_14238 = stock.tool.close.call(null,inst_14107);var inst_14239 = stock.formula.sma_seq.call(null,(10),inst_14238);var inst_14240 = [new cljs.core.Keyword(null,"line","line",212345235),inst_14239,"black"];var inst_14241 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14237,inst_14240);var inst_14242 = [inst_14231,inst_14236,inst_14241];var inst_14243 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14242,null));var inst_14244 = [inst_14243];var inst_14245 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_14228,inst_14244);var inst_14246 = stock.drawer.draw.call(null,inst_14245,inst_14117,inst_14118,inst_14112);var state_14248__$1 = (function (){var statearr_14250 = state_14248;(statearr_14250[(22)] = inst_14156);
(statearr_14250[(23)] = inst_14146);
(statearr_14250[(24)] = inst_14212);
(statearr_14250[(25)] = inst_14149);
(statearr_14250[(26)] = inst_14227);
(statearr_14250[(27)] = inst_14158);
(statearr_14250[(28)] = inst_14181);
(statearr_14250[(29)] = inst_14155);
(statearr_14250[(30)] = inst_14152);
(statearr_14250[(31)] = inst_14145);
return statearr_14250;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14248__$1,inst_14246);
} else
{if((state_val_14249 === (7)))
{var inst_14129 = (state_14248[(32)]);var state_14248__$1 = state_14248;var statearr_14251_14268 = state_14248__$1;(statearr_14251_14268[(2)] = inst_14129);
(statearr_14251_14268[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14249 === (6)))
{var inst_14129 = (state_14248[(32)]);var inst_14132 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14129);var state_14248__$1 = state_14248;var statearr_14252_14269 = state_14248__$1;(statearr_14252_14269[(2)] = inst_14132);
(statearr_14252_14269[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14249 === (5)))
{var inst_14129 = (state_14248[(32)]);var inst_14107 = (state_14248[(9)]);var inst_14125 = (state_14248[(18)]);var inst_14125__$1 = (state_14248[(2)]);var inst_14126 = cljs.core.get.call(null,inst_14125__$1,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_14127 = cljs.core.get.call(null,inst_14125__$1,new cljs.core.Keyword(null,"z","z",-789527183));var inst_14128 = cljs.core.get.call(null,inst_14125__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_14129__$1 = stock.formula.clock.call(null,(10),inst_14107);var inst_14130 = cljs.core.seq_QMARK_.call(null,inst_14129__$1);var state_14248__$1 = (function (){var statearr_14253 = state_14248;(statearr_14253[(32)] = inst_14129__$1);
(statearr_14253[(8)] = inst_14126);
(statearr_14253[(15)] = inst_14127);
(statearr_14253[(18)] = inst_14125__$1);
(statearr_14253[(19)] = inst_14128);
return statearr_14253;
})();if(inst_14130)
{var statearr_14254_14270 = state_14248__$1;(statearr_14254_14270[(1)] = (6));
} else
{var statearr_14255_14271 = state_14248__$1;(statearr_14255_14271[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14249 === (4)))
{var inst_14119 = (state_14248[(33)]);var state_14248__$1 = state_14248;var statearr_14256_14272 = state_14248__$1;(statearr_14256_14272[(2)] = inst_14119);
(statearr_14256_14272[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14249 === (3)))
{var inst_14119 = (state_14248[(33)]);var inst_14122 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14119);var state_14248__$1 = state_14248;var statearr_14257_14273 = state_14248__$1;(statearr_14257_14273[(2)] = inst_14122);
(statearr_14257_14273[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14249 === (2)))
{var inst_14119 = (state_14248[(33)]);var inst_14107 = (state_14248[(9)]);var inst_14105 = (state_14248[(10)]);var inst_14116 = (state_14248[(13)]);var inst_14111 = (state_14248[(17)]);var inst_14105__$1 = (state_14248[(2)]);var inst_14106 = cljs.core.nth.call(null,inst_14105__$1,(0),null);var inst_14107__$1 = cljs.core.nth.call(null,inst_14105__$1,(1),null);var inst_14108 = document.getElementById("index2");var inst_14109 = document.getElementById("index");var inst_14110 = document.getElementById("clock");var inst_14111__$1 = document.getElementById("kline");var inst_14112 = inst_14111__$1.getContext("2d");var inst_14113 = inst_14111__$1.width;var inst_14114 = inst_14111__$1.height;var inst_14115 = [inst_14113,inst_14114];var inst_14116__$1 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_14115,null));var inst_14117 = cljs.core.nth.call(null,inst_14116__$1,(0),null);var inst_14118 = cljs.core.nth.call(null,inst_14116__$1,(1),null);var inst_14119__$1 = stock.formula.clock.call(null,(5),inst_14107__$1);var inst_14120 = cljs.core.seq_QMARK_.call(null,inst_14119__$1);var state_14248__$1 = (function (){var statearr_14258 = state_14248;(statearr_14258[(7)] = inst_14112);
(statearr_14258[(33)] = inst_14119__$1);
(statearr_14258[(9)] = inst_14107__$1);
(statearr_14258[(10)] = inst_14105__$1);
(statearr_14258[(11)] = inst_14109);
(statearr_14258[(12)] = inst_14106);
(statearr_14258[(13)] = inst_14116__$1);
(statearr_14258[(14)] = inst_14110);
(statearr_14258[(16)] = inst_14117);
(statearr_14258[(17)] = inst_14111__$1);
(statearr_14258[(20)] = inst_14118);
(statearr_14258[(21)] = inst_14108);
return statearr_14258;
})();if(inst_14120)
{var statearr_14259_14274 = state_14248__$1;(statearr_14259_14274[(1)] = (3));
} else
{var statearr_14260_14275 = state_14248__$1;(statearr_14260_14275[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14249 === (1)))
{var inst_14103 = stock.tool.stock_info.call(null,null,(2450),"2015/1/1",(0),(200));var state_14248__$1 = state_14248;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14248__$1,(2),inst_14103);
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
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_14264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14264[(0)] = state_machine__6188__auto__);
(statearr_14264[(1)] = (1));
return statearr_14264;
});
var state_machine__6188__auto____1 = (function (state_14248){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_14248);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e14265){if((e14265 instanceof Object))
{var ex__6191__auto__ = e14265;var statearr_14266_14276 = state_14248;(statearr_14266_14276[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14248);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e14265;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14277 = state_14248;
state_14248 = G__14277;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_14248){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_14248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_14267 = f__6203__auto__.call(null);(statearr_14267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_14267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
