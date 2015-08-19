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
return (function (state_80694){var state_val_80695 = (state_80694[(1)]);if((state_val_80695 === (5)))
{var inst_80581 = (state_80694[(7)]);var inst_80575 = (state_80694[(8)]);var inst_80573 = (state_80694[(9)]);var inst_80582 = (state_80694[(10)]);var inst_80572 = (state_80694[(11)]);var inst_80576 = (state_80694[(12)]);var inst_80571 = (state_80694[(13)]);var inst_80574 = (state_80694[(14)]);var inst_80580 = (state_80694[(15)]);var inst_80570 = (state_80694[(16)]);var inst_80569 = (state_80694[(17)]);var inst_80589 = (state_80694[(2)]);var inst_80590 = cljs.core.get.call(null,inst_80589,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_80591 = cljs.core.get.call(null,inst_80589,new cljs.core.Keyword(null,"z","z",-789527183));var inst_80592 = cljs.core.get.call(null,inst_80589,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_80593 = cljs.core.repeat.call(null,(5),(0));var inst_80594 = (function (){var ctx = inst_80576;var vec__80564 = inst_80569;var canvas4 = inst_80572;var w = inst_80581;var cs = inst_80590;var err = inst_80570;var infos = inst_80571;var map__80566 = inst_80589;var canvas = inst_80575;var vec__80565 = inst_80580;var canvas3 = inst_80573;var z = inst_80591;var v_z = inst_80592;var h = inst_80582;var canvas2 = inst_80574;return ((function (ctx,vec__80564,canvas4,w,cs,err,infos,map__80566,canvas,vec__80565,canvas3,z,v_z,h,canvas2,inst_80581,inst_80575,inst_80573,inst_80582,inst_80572,inst_80576,inst_80571,inst_80574,inst_80580,inst_80570,inst_80569,inst_80589,inst_80590,inst_80591,inst_80592,inst_80593,state_val_80695,c__6202__auto__){
return (function (p1__80418_SHARP_){return Math.abs(p1__80418_SHARP_);
});
;})(ctx,vec__80564,canvas4,w,cs,err,infos,map__80566,canvas,vec__80565,canvas3,z,v_z,h,canvas2,inst_80581,inst_80575,inst_80573,inst_80582,inst_80572,inst_80576,inst_80571,inst_80574,inst_80580,inst_80570,inst_80569,inst_80589,inst_80590,inst_80591,inst_80592,inst_80593,state_val_80695,c__6202__auto__))
})();var inst_80595 = cljs.core.map.call(null,cljs.core._PLUS_,inst_80591,inst_80592);var inst_80596 = cljs.core.map.call(null,inst_80594,inst_80595);var inst_80597 = cljs.core.reverse.call(null,inst_80596);var inst_80598 = cljs.core.into.call(null,inst_80593,inst_80597);var inst_80599 = stock.formula.clock_direction.call(null,inst_80592,inst_80591);var inst_80600 = stock.formula.BBI.call(null,(12),inst_80571);var inst_80601 = cljs.core.reverse.call(null,inst_80571);var inst_80602 = stock.formula.sar_seq.call(null,inst_80601);var inst_80603 = cljs.core.reverse.call(null,inst_80602);var inst_80604 = cljs.core.reverse.call(null,inst_80571);var inst_80605 = stock.formula.Chaikin.call(null,(3),(9),inst_80604);var inst_80606 = cljs.core.reverse.call(null,inst_80605);var inst_80607 = cljs.core.reverse.call(null,inst_80571);var inst_80608 = stock.formula.EOM.call(null,(14),inst_80607);var inst_80609 = cljs.core.reverse.call(null,inst_80608);var inst_80610 = stock.formula.yu_gv.call(null,(20),inst_80571);var inst_80611 = stock.formula.yu_clock.call(null,(20),inst_80571);var inst_80612 = stock.formula.macd_dif.call(null,(20),(100),inst_80571);var inst_80613 = stock.tool.close.call(null,inst_80571);var inst_80614 = cljs.core.reverse.call(null,inst_80613);var inst_80615 = stock.formula.ema_seq.call(null,(5),inst_80614);var inst_80616 = cljs.core.reverse.call(null,inst_80615);var inst_80617 = cljs.core.map.call(null,cljs.core._,inst_80616,inst_80600);var inst_80618 = stock.formula.rsv_seq.call(null,(100),inst_80571);var inst_80619 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_80620 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_80621 = [new cljs.core.Keyword(null,"line","line",212345235),inst_80617,"black"];var inst_80622 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80620,inst_80621);var inst_80623 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_80624 = stock.formula.sma_seq.call(null,(9),inst_80617);var inst_80625 = [new cljs.core.Keyword(null,"line","line",212345235),inst_80624,"yellow"];var inst_80626 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80623,inst_80625);var inst_80627 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_80628 = cljs.core.count.call(null,inst_80571);var inst_80629 = cljs.core.repeat.call(null,inst_80628,(0));var inst_80630 = [new cljs.core.Keyword(null,"line","line",212345235),inst_80629];var inst_80631 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80627,inst_80630);var inst_80632 = [inst_80622,inst_80626,inst_80631];var inst_80633 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_80632,null));var inst_80634 = [inst_80633];var inst_80635 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80619,inst_80634);var inst_80636 = inst_80572.width;var inst_80637 = inst_80572.height;var inst_80638 = inst_80572.getContext("2d");var inst_80639 = stock.drawer.draw.call(null,inst_80635,inst_80636,inst_80637,inst_80638);var inst_80640 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_80641 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_80642 = stock.formula.sma_seq.call(null,(3),inst_80618);var inst_80643 = [new cljs.core.Keyword(null,"line","line",212345235),inst_80642,"black"];var inst_80644 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80641,inst_80643);var inst_80645 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_80646 = stock.formula.sma_seq.call(null,(9),inst_80618);var inst_80647 = [new cljs.core.Keyword(null,"line","line",212345235),inst_80646,"yellow"];var inst_80648 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80645,inst_80647);var inst_80649 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_80650 = cljs.core.count.call(null,inst_80571);var inst_80651 = cljs.core.repeat.call(null,inst_80650,(50));var inst_80652 = [new cljs.core.Keyword(null,"line","line",212345235),inst_80651];var inst_80653 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80649,inst_80652);var inst_80654 = [inst_80644,inst_80648,inst_80653];var inst_80655 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_80654,null));var inst_80656 = [inst_80655];var inst_80657 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80640,inst_80656);var inst_80658 = inst_80573.width;var inst_80659 = inst_80573.height;var inst_80660 = inst_80573.getContext("2d");var inst_80661 = stock.drawer.draw.call(null,inst_80657,inst_80658,inst_80659,inst_80660);var inst_80662 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_80663 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_80664 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_80591,inst_80592,"blue"];var inst_80665 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80663,inst_80664);var inst_80666 = [inst_80665];var inst_80667 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_80666,null));var inst_80668 = [inst_80667];var inst_80669 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80662,inst_80668);var inst_80670 = inst_80574.width;var inst_80671 = inst_80574.height;var inst_80672 = inst_80574.getContext("2d");var inst_80673 = stock.drawer.draw.call(null,inst_80669,inst_80670,inst_80671,inst_80672);var inst_80674 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_80675 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_80676 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_80571];var inst_80677 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80675,inst_80676);var inst_80678 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_80679 = stock.tool.close.call(null,inst_80571);var inst_80680 = cljs.core.reverse.call(null,inst_80679);var inst_80681 = stock.formula.ema_seq.call(null,(5),inst_80680);var inst_80682 = cljs.core.reverse.call(null,inst_80681);var inst_80683 = [new cljs.core.Keyword(null,"line","line",212345235),inst_80682,"blue"];var inst_80684 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80678,inst_80683);var inst_80685 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_80686 = [new cljs.core.Keyword(null,"line","line",212345235),inst_80600,"yellow"];var inst_80687 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80685,inst_80686);var inst_80688 = [inst_80677,inst_80684,inst_80687];var inst_80689 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_80688,null));var inst_80690 = [inst_80689];var inst_80691 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_80674,inst_80690);var inst_80692 = stock.drawer.draw.call(null,inst_80691,inst_80581,inst_80582,inst_80576);var state_80694__$1 = (function (){var statearr_80696 = state_80694;(statearr_80696[(18)] = inst_80673);
(statearr_80696[(19)] = inst_80609);
(statearr_80696[(20)] = inst_80606);
(statearr_80696[(21)] = inst_80611);
(statearr_80696[(22)] = inst_80599);
(statearr_80696[(23)] = inst_80603);
(statearr_80696[(24)] = inst_80661);
(statearr_80696[(25)] = inst_80610);
(statearr_80696[(26)] = inst_80612);
(statearr_80696[(27)] = inst_80639);
(statearr_80696[(28)] = inst_80598);
return statearr_80696;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80694__$1,inst_80692);
} else
{if((state_val_80695 === (4)))
{var inst_80583 = (state_80694[(29)]);var state_80694__$1 = state_80694;var statearr_80697_80709 = state_80694__$1;(statearr_80697_80709[(2)] = inst_80583);
(statearr_80697_80709[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80695 === (3)))
{var inst_80583 = (state_80694[(29)]);var inst_80586 = cljs.core.apply.call(null,cljs.core.hash_map,inst_80583);var state_80694__$1 = state_80694;var statearr_80698_80710 = state_80694__$1;(statearr_80698_80710[(2)] = inst_80586);
(statearr_80698_80710[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80695 === (2)))
{var inst_80575 = (state_80694[(8)]);var inst_80571 = (state_80694[(13)]);var inst_80580 = (state_80694[(15)]);var inst_80569 = (state_80694[(17)]);var inst_80583 = (state_80694[(29)]);var inst_80569__$1 = (state_80694[(2)]);var inst_80570 = cljs.core.nth.call(null,inst_80569__$1,(0),null);var inst_80571__$1 = cljs.core.nth.call(null,inst_80569__$1,(1),null);var inst_80572 = document.getElementById("index2");var inst_80573 = document.getElementById("index");var inst_80574 = document.getElementById("clock");var inst_80575__$1 = document.getElementById("kline");var inst_80576 = inst_80575__$1.getContext("2d");var inst_80577 = inst_80575__$1.width;var inst_80578 = inst_80575__$1.height;var inst_80579 = [inst_80577,inst_80578];var inst_80580__$1 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_80579,null));var inst_80581 = cljs.core.nth.call(null,inst_80580__$1,(0),null);var inst_80582 = cljs.core.nth.call(null,inst_80580__$1,(1),null);var inst_80583__$1 = stock.formula.clock.call(null,(20),inst_80571__$1);var inst_80584 = cljs.core.seq_QMARK_.call(null,inst_80583__$1);var state_80694__$1 = (function (){var statearr_80699 = state_80694;(statearr_80699[(7)] = inst_80581);
(statearr_80699[(8)] = inst_80575__$1);
(statearr_80699[(9)] = inst_80573);
(statearr_80699[(10)] = inst_80582);
(statearr_80699[(11)] = inst_80572);
(statearr_80699[(12)] = inst_80576);
(statearr_80699[(13)] = inst_80571__$1);
(statearr_80699[(14)] = inst_80574);
(statearr_80699[(15)] = inst_80580__$1);
(statearr_80699[(16)] = inst_80570);
(statearr_80699[(17)] = inst_80569__$1);
(statearr_80699[(29)] = inst_80583__$1);
return statearr_80699;
})();if(inst_80584)
{var statearr_80700_80711 = state_80694__$1;(statearr_80700_80711[(1)] = (3));
} else
{var statearr_80701_80712 = state_80694__$1;(statearr_80701_80712[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_80695 === (1)))
{var inst_80567 = stock.tool.stock_info.call(null,null,(1522),"2014/1/1",(0),(200));var state_80694__$1 = state_80694;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80694__$1,(2),inst_80567);
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
var state_machine__6188__auto____0 = (function (){var statearr_80705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_80705[(0)] = state_machine__6188__auto__);
(statearr_80705[(1)] = (1));
return statearr_80705;
});
var state_machine__6188__auto____1 = (function (state_80694){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_80694);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e80706){if((e80706 instanceof Object))
{var ex__6191__auto__ = e80706;var statearr_80707_80713 = state_80694;(statearr_80707_80713[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80694);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e80706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__80714 = state_80694;
state_80694 = G__80714;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_80694){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_80694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_80708 = f__6203__auto__.call(null);(statearr_80708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_80708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
