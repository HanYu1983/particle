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
return (function (state_25295){var state_val_25296 = (state_25295[(1)]);if((state_val_25296 === (5)))
{var inst_25171 = (state_25295[(7)]);var inst_25181 = (state_25295[(8)]);var inst_25173 = (state_25295[(9)]);var inst_25175 = (state_25295[(10)]);var inst_25182 = (state_25295[(11)]);var inst_25172 = (state_25295[(12)]);var inst_25183 = (state_25295[(13)]);var inst_25177 = (state_25295[(14)]);var inst_25174 = (state_25295[(15)]);var inst_25170 = (state_25295[(16)]);var inst_25176 = (state_25295[(17)]);var inst_25190 = (state_25295[(2)]);var inst_25191 = cljs.core.get.call(null,inst_25190,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_25192 = cljs.core.get.call(null,inst_25190,new cljs.core.Keyword(null,"z","z",-789527183));var inst_25193 = cljs.core.get.call(null,inst_25190,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_25194 = cljs.core.repeat.call(null,(5),(0));var inst_25195 = (function (){var ctx = inst_25177;var vec__25166 = inst_25181;var canvas4 = inst_25173;var w = inst_25182;var cs = inst_25191;var err = inst_25171;var vec__25165 = inst_25170;var infos = inst_25172;var map__25167 = inst_25190;var canvas = inst_25176;var canvas3 = inst_25174;var z = inst_25192;var v_z = inst_25193;var h = inst_25183;var canvas2 = inst_25175;return ((function (ctx,vec__25166,canvas4,w,cs,err,vec__25165,infos,map__25167,canvas,canvas3,z,v_z,h,canvas2,inst_25171,inst_25181,inst_25173,inst_25175,inst_25182,inst_25172,inst_25183,inst_25177,inst_25174,inst_25170,inst_25176,inst_25190,inst_25191,inst_25192,inst_25193,inst_25194,state_val_25296,c__6202__auto__){
return (function (p1__25019_SHARP_){return Math.abs(p1__25019_SHARP_);
});
;})(ctx,vec__25166,canvas4,w,cs,err,vec__25165,infos,map__25167,canvas,canvas3,z,v_z,h,canvas2,inst_25171,inst_25181,inst_25173,inst_25175,inst_25182,inst_25172,inst_25183,inst_25177,inst_25174,inst_25170,inst_25176,inst_25190,inst_25191,inst_25192,inst_25193,inst_25194,state_val_25296,c__6202__auto__))
})();var inst_25196 = cljs.core.map.call(null,cljs.core._PLUS_,inst_25192,inst_25193);var inst_25197 = cljs.core.map.call(null,inst_25195,inst_25196);var inst_25198 = cljs.core.reverse.call(null,inst_25197);var inst_25199 = cljs.core.into.call(null,inst_25194,inst_25198);var inst_25200 = stock.formula.clock_direction.call(null,inst_25193,inst_25192);var inst_25201 = stock.formula.BBI.call(null,(3),(6),(12),(24),inst_25172);var inst_25202 = cljs.core.reverse.call(null,inst_25172);var inst_25203 = stock.formula.sar_seq.call(null,inst_25202);var inst_25204 = cljs.core.reverse.call(null,inst_25203);var inst_25205 = cljs.core.reverse.call(null,inst_25172);var inst_25206 = stock.formula.Chaikin.call(null,(3),(9),inst_25205);var inst_25207 = cljs.core.reverse.call(null,inst_25206);var inst_25208 = cljs.core.reverse.call(null,inst_25172);var inst_25209 = stock.formula.EOM.call(null,(14),inst_25208);var inst_25210 = cljs.core.reverse.call(null,inst_25209);var inst_25211 = stock.formula.yu_gv.call(null,(20),inst_25172);var inst_25212 = stock.formula.yu_clock.call(null,(20),inst_25172);var inst_25213 = stock.formula.macd_dif.call(null,(20),(100),inst_25172);var inst_25214 = stock.tool.close.call(null,inst_25172);var inst_25215 = cljs.core.reverse.call(null,inst_25214);var inst_25216 = stock.formula.ema_seq.call(null,(5),inst_25215);var inst_25217 = cljs.core.reverse.call(null,inst_25216);var inst_25218 = cljs.core.map.call(null,cljs.core._,inst_25217,inst_25201);var inst_25219 = stock.formula.rsv_seq.call(null,(100),inst_25172);var inst_25220 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_25221 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_25222 = [new cljs.core.Keyword(null,"line","line",212345235),inst_25218,"black"];var inst_25223 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25221,inst_25222);var inst_25224 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_25225 = stock.formula.sma_seq.call(null,(9),inst_25218);var inst_25226 = [new cljs.core.Keyword(null,"line","line",212345235),inst_25225,"yellow"];var inst_25227 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25224,inst_25226);var inst_25228 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_25229 = cljs.core.count.call(null,inst_25172);var inst_25230 = cljs.core.repeat.call(null,inst_25229,(0));var inst_25231 = [new cljs.core.Keyword(null,"line","line",212345235),inst_25230];var inst_25232 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25228,inst_25231);var inst_25233 = [inst_25223,inst_25227,inst_25232];var inst_25234 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25233,null));var inst_25235 = [inst_25234];var inst_25236 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25220,inst_25235);var inst_25237 = inst_25173.width;var inst_25238 = inst_25173.height;var inst_25239 = inst_25173.getContext("2d");var inst_25240 = stock.drawer.draw.call(null,inst_25236,inst_25237,inst_25238,inst_25239);var inst_25241 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_25242 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_25243 = stock.formula.sma_seq.call(null,(3),inst_25219);var inst_25244 = [new cljs.core.Keyword(null,"line","line",212345235),inst_25243,"black"];var inst_25245 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25242,inst_25244);var inst_25246 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_25247 = stock.formula.sma_seq.call(null,(9),inst_25219);var inst_25248 = [new cljs.core.Keyword(null,"line","line",212345235),inst_25247,"yellow"];var inst_25249 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25246,inst_25248);var inst_25250 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_25251 = cljs.core.count.call(null,inst_25172);var inst_25252 = cljs.core.repeat.call(null,inst_25251,(50));var inst_25253 = [new cljs.core.Keyword(null,"line","line",212345235),inst_25252];var inst_25254 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25250,inst_25253);var inst_25255 = [inst_25245,inst_25249,inst_25254];var inst_25256 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25255,null));var inst_25257 = [inst_25256];var inst_25258 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25241,inst_25257);var inst_25259 = inst_25174.width;var inst_25260 = inst_25174.height;var inst_25261 = inst_25174.getContext("2d");var inst_25262 = stock.drawer.draw.call(null,inst_25258,inst_25259,inst_25260,inst_25261);var inst_25263 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_25264 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_25265 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_25192,inst_25193,"blue"];var inst_25266 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25264,inst_25265);var inst_25267 = [inst_25266];var inst_25268 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25267,null));var inst_25269 = [inst_25268];var inst_25270 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25263,inst_25269);var inst_25271 = inst_25175.width;var inst_25272 = inst_25175.height;var inst_25273 = inst_25175.getContext("2d");var inst_25274 = stock.drawer.draw.call(null,inst_25270,inst_25271,inst_25272,inst_25273);var inst_25275 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_25276 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_25277 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_25172];var inst_25278 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25276,inst_25277);var inst_25279 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_25280 = stock.tool.close.call(null,inst_25172);var inst_25281 = cljs.core.reverse.call(null,inst_25280);var inst_25282 = stock.formula.ema_seq.call(null,(5),inst_25281);var inst_25283 = cljs.core.reverse.call(null,inst_25282);var inst_25284 = [new cljs.core.Keyword(null,"line","line",212345235),inst_25283,"blue"];var inst_25285 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25279,inst_25284);var inst_25286 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_25287 = [new cljs.core.Keyword(null,"line","line",212345235),inst_25201,"yellow"];var inst_25288 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25286,inst_25287);var inst_25289 = [inst_25278,inst_25285,inst_25288];var inst_25290 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25289,null));var inst_25291 = [inst_25290];var inst_25292 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_25275,inst_25291);var inst_25293 = stock.drawer.draw.call(null,inst_25292,inst_25182,inst_25183,inst_25177);var state_25295__$1 = (function (){var statearr_25297 = state_25295;(statearr_25297[(18)] = inst_25210);
(statearr_25297[(19)] = inst_25207);
(statearr_25297[(20)] = inst_25199);
(statearr_25297[(21)] = inst_25204);
(statearr_25297[(22)] = inst_25211);
(statearr_25297[(23)] = inst_25262);
(statearr_25297[(24)] = inst_25213);
(statearr_25297[(25)] = inst_25240);
(statearr_25297[(26)] = inst_25274);
(statearr_25297[(27)] = inst_25212);
(statearr_25297[(28)] = inst_25200);
return statearr_25297;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25295__$1,inst_25293);
} else
{if((state_val_25296 === (4)))
{var inst_25184 = (state_25295[(29)]);var state_25295__$1 = state_25295;var statearr_25298_25310 = state_25295__$1;(statearr_25298_25310[(2)] = inst_25184);
(statearr_25298_25310[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25296 === (3)))
{var inst_25184 = (state_25295[(29)]);var inst_25187 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25184);var state_25295__$1 = state_25295;var statearr_25299_25311 = state_25295__$1;(statearr_25299_25311[(2)] = inst_25187);
(statearr_25299_25311[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25296 === (2)))
{var inst_25181 = (state_25295[(8)]);var inst_25184 = (state_25295[(29)]);var inst_25172 = (state_25295[(12)]);var inst_25170 = (state_25295[(16)]);var inst_25176 = (state_25295[(17)]);var inst_25170__$1 = (state_25295[(2)]);var inst_25171 = cljs.core.nth.call(null,inst_25170__$1,(0),null);var inst_25172__$1 = cljs.core.nth.call(null,inst_25170__$1,(1),null);var inst_25173 = document.getElementById("index2");var inst_25174 = document.getElementById("index");var inst_25175 = document.getElementById("clock");var inst_25176__$1 = document.getElementById("kline");var inst_25177 = inst_25176__$1.getContext("2d");var inst_25178 = inst_25176__$1.width;var inst_25179 = inst_25176__$1.height;var inst_25180 = [inst_25178,inst_25179];var inst_25181__$1 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_25180,null));var inst_25182 = cljs.core.nth.call(null,inst_25181__$1,(0),null);var inst_25183 = cljs.core.nth.call(null,inst_25181__$1,(1),null);var inst_25184__$1 = stock.formula.clock.call(null,(20),inst_25172__$1);var inst_25185 = cljs.core.seq_QMARK_.call(null,inst_25184__$1);var state_25295__$1 = (function (){var statearr_25300 = state_25295;(statearr_25300[(7)] = inst_25171);
(statearr_25300[(8)] = inst_25181__$1);
(statearr_25300[(9)] = inst_25173);
(statearr_25300[(29)] = inst_25184__$1);
(statearr_25300[(10)] = inst_25175);
(statearr_25300[(11)] = inst_25182);
(statearr_25300[(12)] = inst_25172__$1);
(statearr_25300[(13)] = inst_25183);
(statearr_25300[(14)] = inst_25177);
(statearr_25300[(15)] = inst_25174);
(statearr_25300[(16)] = inst_25170__$1);
(statearr_25300[(17)] = inst_25176__$1);
return statearr_25300;
})();if(inst_25185)
{var statearr_25301_25312 = state_25295__$1;(statearr_25301_25312[(1)] = (3));
} else
{var statearr_25302_25313 = state_25295__$1;(statearr_25302_25313[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_25296 === (1)))
{var inst_25168 = stock.tool.stock_info.call(null,null,(1522),"2014/1/1",(0),(200));var state_25295__$1 = state_25295;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25295__$1,(2),inst_25168);
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
var state_machine__6188__auto____0 = (function (){var statearr_25306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25306[(0)] = state_machine__6188__auto__);
(statearr_25306[(1)] = (1));
return statearr_25306;
});
var state_machine__6188__auto____1 = (function (state_25295){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_25295);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e25307){if((e25307 instanceof Object))
{var ex__6191__auto__ = e25307;var statearr_25308_25314 = state_25295;(statearr_25308_25314[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25295);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e25307;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__25315 = state_25295;
state_25295 = G__25315;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_25295){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_25295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_25309 = f__6203__auto__.call(null);(statearr_25309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_25309;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
