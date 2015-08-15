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
return (function (state_42760){var state_val_42761 = (state_42760[(1)]);if((state_val_42761 === (8)))
{var inst_42623 = (state_42760[(7)]);var inst_42638 = (state_42760[(8)]);var inst_42621 = (state_42760[(9)]);var inst_42622 = (state_42760[(10)]);var inst_42624 = (state_42760[(11)]);var inst_42618 = (state_42760[(12)]);var inst_42630 = (state_42760[(13)]);var inst_42639 = (state_42760[(14)]);var inst_42640 = (state_42760[(15)]);var inst_42628 = (state_42760[(16)]);var inst_42620 = (state_42760[(17)]);var inst_42629 = (state_42760[(18)]);var inst_42637 = (state_42760[(19)]);var inst_42617 = (state_42760[(20)]);var inst_42619 = (state_42760[(21)]);var inst_42647 = (state_42760[(2)]);var inst_42648 = cljs.core.get.call(null,inst_42647,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_42649 = cljs.core.get.call(null,inst_42647,new cljs.core.Keyword(null,"z","z",-789527183));var inst_42650 = cljs.core.get.call(null,inst_42647,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_42651 = cljs.core.repeat.call(null,(5),(0));var inst_42652 = (function (){var v_z2 = inst_42650;var ctx = inst_42624;var vec__42611 = inst_42617;var z2 = inst_42649;var map__42614 = inst_42647;var canvas4 = inst_42620;var w = inst_42629;var cs2 = inst_42648;var cs = inst_42638;var err = inst_42618;var infos = inst_42619;var canvas = inst_42623;var vec__42612 = inst_42628;var canvas3 = inst_42621;var z = inst_42639;var v_z = inst_42640;var h = inst_42630;var map__42613 = inst_42637;var canvas2 = inst_42622;return ((function (v_z2,ctx,vec__42611,z2,map__42614,canvas4,w,cs2,cs,err,infos,canvas,vec__42612,canvas3,z,v_z,h,map__42613,canvas2,inst_42623,inst_42638,inst_42621,inst_42622,inst_42624,inst_42618,inst_42630,inst_42639,inst_42640,inst_42628,inst_42620,inst_42629,inst_42637,inst_42617,inst_42619,inst_42647,inst_42648,inst_42649,inst_42650,inst_42651,state_val_42761,c__6202__auto__){
return (function (p1__42441_SHARP_){return Math.abs(p1__42441_SHARP_);
});
;})(v_z2,ctx,vec__42611,z2,map__42614,canvas4,w,cs2,cs,err,infos,canvas,vec__42612,canvas3,z,v_z,h,map__42613,canvas2,inst_42623,inst_42638,inst_42621,inst_42622,inst_42624,inst_42618,inst_42630,inst_42639,inst_42640,inst_42628,inst_42620,inst_42629,inst_42637,inst_42617,inst_42619,inst_42647,inst_42648,inst_42649,inst_42650,inst_42651,state_val_42761,c__6202__auto__))
})();var inst_42653 = cljs.core.map.call(null,cljs.core._PLUS_,inst_42639,inst_42640);var inst_42654 = cljs.core.map.call(null,inst_42652,inst_42653);var inst_42655 = cljs.core.reverse.call(null,inst_42654);var inst_42656 = cljs.core.into.call(null,inst_42651,inst_42655);var inst_42657 = stock.formula.clock_direction.call(null,inst_42640,inst_42639);var inst_42658 = stock.formula.BBI.call(null,(6),inst_42619);var inst_42659 = cljs.core.reverse.call(null,inst_42619);var inst_42660 = stock.formula.sar_seq.call(null,inst_42659);var inst_42661 = cljs.core.reverse.call(null,inst_42660);var inst_42662 = cljs.core.reverse.call(null,inst_42619);var inst_42663 = stock.formula.Chaikin.call(null,(3),(9),inst_42662);var inst_42664 = cljs.core.reverse.call(null,inst_42663);var inst_42665 = cljs.core.reverse.call(null,inst_42619);var inst_42666 = stock.formula.EOM.call(null,(14),inst_42665);var inst_42667 = cljs.core.reverse.call(null,inst_42666);var inst_42668 = stock.formula.yu_gv.call(null,(20),inst_42619);var inst_42669 = cljs.core.pr_str.call(null,inst_42656);var inst_42670 = console.log(inst_42669);var inst_42671 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_42672 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_42673 = stock.tool.volume.call(null,inst_42619);var inst_42674 = [new cljs.core.Keyword(null,"line","line",212345235),inst_42673,"blue"];var inst_42675 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42672,inst_42674);var inst_42676 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_42677 = stock.tool.volume.call(null,inst_42619);var inst_42678 = stock.formula.sma_seq.call(null,(6),inst_42677);var inst_42679 = [new cljs.core.Keyword(null,"line","line",212345235),inst_42678,"yellow"];var inst_42680 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42676,inst_42679);var inst_42681 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_42682 = stock.tool.volume.call(null,inst_42619);var inst_42683 = stock.formula.sma_seq.call(null,(12),inst_42682);var inst_42684 = [new cljs.core.Keyword(null,"line","line",212345235),inst_42683,"purple"];var inst_42685 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42681,inst_42684);var inst_42686 = [inst_42675,inst_42680,inst_42685];var inst_42687 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_42686,null));var inst_42688 = [inst_42687];var inst_42689 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42671,inst_42688);var inst_42690 = inst_42620.width;var inst_42691 = inst_42620.height;var inst_42692 = inst_42620.getContext("2d");var inst_42693 = stock.drawer.draw.call(null,inst_42689,inst_42690,inst_42691,inst_42692);var inst_42694 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_42695 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_42696 = [new cljs.core.Keyword(null,"line","line",212345235),inst_42656,"blue"];var inst_42697 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42695,inst_42696);var inst_42698 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_42699 = stock.formula.sma_seq.call(null,(5),inst_42656);var inst_42700 = [new cljs.core.Keyword(null,"line","line",212345235),inst_42699,"yellow"];var inst_42701 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42698,inst_42700);var inst_42702 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_42703 = cljs.core.count.call(null,inst_42656);var inst_42704 = cljs.core.repeat.call(null,inst_42703,(0));var inst_42705 = [new cljs.core.Keyword(null,"line","line",212345235),inst_42704];var inst_42706 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42702,inst_42705);var inst_42707 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_42708 = cljs.core.count.call(null,inst_42656);var inst_42709 = cljs.core.repeat.call(null,inst_42708,1.5);var inst_42710 = [new cljs.core.Keyword(null,"line","line",212345235),inst_42709];var inst_42711 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42707,inst_42710);var inst_42712 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235)];var inst_42713 = cljs.core.count.call(null,inst_42656);var inst_42714 = cljs.core.repeat.call(null,inst_42713,-1.5);var inst_42715 = [new cljs.core.Keyword(null,"line","line",212345235),inst_42714];var inst_42716 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42712,inst_42715);var inst_42717 = [inst_42697,inst_42701,inst_42706,inst_42711,inst_42716];var inst_42718 = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_42717,null));var inst_42719 = [inst_42718];var inst_42720 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42694,inst_42719);var inst_42721 = inst_42621.width;var inst_42722 = inst_42621.height;var inst_42723 = inst_42621.getContext("2d");var inst_42724 = stock.drawer.draw.call(null,inst_42720,inst_42721,inst_42722,inst_42723);var inst_42725 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_42726 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_42727 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_42639,inst_42640,"blue"];var inst_42728 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42726,inst_42727);var inst_42729 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"cz","cz",1670864932),new cljs.core.Keyword(null,"vz","vz",-575323393),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_42730 = [new cljs.core.Keyword(null,"clock","clock",-894301127),inst_42649,inst_42650,"yellow"];var inst_42731 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42729,inst_42730);var inst_42732 = [inst_42728,inst_42731];var inst_42733 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_42732,null));var inst_42734 = [inst_42733];var inst_42735 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42725,inst_42734);var inst_42736 = inst_42622.width;var inst_42737 = inst_42622.height;var inst_42738 = inst_42622.getContext("2d");var inst_42739 = stock.drawer.draw.call(null,inst_42735,inst_42736,inst_42737,inst_42738);var inst_42740 = [new cljs.core.Keyword(null,"drawers","drawers",-1652645568)];var inst_42741 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"kline","kline",-1160432594)];var inst_42742 = [new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_42619];var inst_42743 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42741,inst_42742);var inst_42744 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_42745 = stock.tool.close.call(null,inst_42619);var inst_42746 = stock.formula.sma_seq.call(null,(5),inst_42745);var inst_42747 = [new cljs.core.Keyword(null,"line","line",212345235),inst_42746,"purple"];var inst_42748 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42744,inst_42747);var inst_42749 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"color","color",1011675173)];var inst_42750 = stock.tool.close.call(null,inst_42619);var inst_42751 = stock.formula.sma_seq.call(null,(10),inst_42750);var inst_42752 = [new cljs.core.Keyword(null,"line","line",212345235),inst_42751,"black"];var inst_42753 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42749,inst_42752);var inst_42754 = [inst_42743,inst_42748,inst_42753];var inst_42755 = (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_42754,null));var inst_42756 = [inst_42755];var inst_42757 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_42740,inst_42756);var inst_42758 = stock.drawer.draw.call(null,inst_42757,inst_42629,inst_42630,inst_42624);var state_42760__$1 = (function (){var statearr_42762 = state_42760;(statearr_42762[(22)] = inst_42664);
(statearr_42762[(23)] = inst_42739);
(statearr_42762[(24)] = inst_42668);
(statearr_42762[(25)] = inst_42693);
(statearr_42762[(26)] = inst_42724);
(statearr_42762[(27)] = inst_42670);
(statearr_42762[(28)] = inst_42658);
(statearr_42762[(29)] = inst_42657);
(statearr_42762[(30)] = inst_42667);
(statearr_42762[(31)] = inst_42661);
return statearr_42762;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42760__$1,inst_42758);
} else
{if((state_val_42761 === (7)))
{var inst_42641 = (state_42760[(32)]);var state_42760__$1 = state_42760;var statearr_42763_42780 = state_42760__$1;(statearr_42763_42780[(2)] = inst_42641);
(statearr_42763_42780[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42761 === (6)))
{var inst_42641 = (state_42760[(32)]);var inst_42644 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42641);var state_42760__$1 = state_42760;var statearr_42764_42781 = state_42760__$1;(statearr_42764_42781[(2)] = inst_42644);
(statearr_42764_42781[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42761 === (5)))
{var inst_42641 = (state_42760[(32)]);var inst_42637 = (state_42760[(19)]);var inst_42619 = (state_42760[(21)]);var inst_42637__$1 = (state_42760[(2)]);var inst_42638 = cljs.core.get.call(null,inst_42637__$1,new cljs.core.Keyword(null,"sma","sma",960324195));var inst_42639 = cljs.core.get.call(null,inst_42637__$1,new cljs.core.Keyword(null,"z","z",-789527183));var inst_42640 = cljs.core.get.call(null,inst_42637__$1,new cljs.core.Keyword(null,"v-z","v-z",-1235194156));var inst_42641__$1 = stock.formula.clock.call(null,(10),inst_42619);var inst_42642 = cljs.core.seq_QMARK_.call(null,inst_42641__$1);var state_42760__$1 = (function (){var statearr_42765 = state_42760;(statearr_42765[(32)] = inst_42641__$1);
(statearr_42765[(8)] = inst_42638);
(statearr_42765[(14)] = inst_42639);
(statearr_42765[(15)] = inst_42640);
(statearr_42765[(19)] = inst_42637__$1);
return statearr_42765;
})();if(inst_42642)
{var statearr_42766_42782 = state_42760__$1;(statearr_42766_42782[(1)] = (6));
} else
{var statearr_42767_42783 = state_42760__$1;(statearr_42767_42783[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42761 === (4)))
{var inst_42631 = (state_42760[(33)]);var state_42760__$1 = state_42760;var statearr_42768_42784 = state_42760__$1;(statearr_42768_42784[(2)] = inst_42631);
(statearr_42768_42784[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42761 === (3)))
{var inst_42631 = (state_42760[(33)]);var inst_42634 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42631);var state_42760__$1 = state_42760;var statearr_42769_42785 = state_42760__$1;(statearr_42769_42785[(2)] = inst_42634);
(statearr_42769_42785[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42761 === (2)))
{var inst_42623 = (state_42760[(7)]);var inst_42631 = (state_42760[(33)]);var inst_42628 = (state_42760[(16)]);var inst_42617 = (state_42760[(20)]);var inst_42619 = (state_42760[(21)]);var inst_42617__$1 = (state_42760[(2)]);var inst_42618 = cljs.core.nth.call(null,inst_42617__$1,(0),null);var inst_42619__$1 = cljs.core.nth.call(null,inst_42617__$1,(1),null);var inst_42620 = document.getElementById("index2");var inst_42621 = document.getElementById("index");var inst_42622 = document.getElementById("clock");var inst_42623__$1 = document.getElementById("kline");var inst_42624 = inst_42623__$1.getContext("2d");var inst_42625 = inst_42623__$1.width;var inst_42626 = inst_42623__$1.height;var inst_42627 = [inst_42625,inst_42626];var inst_42628__$1 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_42627,null));var inst_42629 = cljs.core.nth.call(null,inst_42628__$1,(0),null);var inst_42630 = cljs.core.nth.call(null,inst_42628__$1,(1),null);var inst_42631__$1 = stock.formula.clock.call(null,(5),inst_42619__$1);var inst_42632 = cljs.core.seq_QMARK_.call(null,inst_42631__$1);var state_42760__$1 = (function (){var statearr_42770 = state_42760;(statearr_42770[(7)] = inst_42623__$1);
(statearr_42770[(33)] = inst_42631__$1);
(statearr_42770[(9)] = inst_42621);
(statearr_42770[(10)] = inst_42622);
(statearr_42770[(11)] = inst_42624);
(statearr_42770[(12)] = inst_42618);
(statearr_42770[(13)] = inst_42630);
(statearr_42770[(16)] = inst_42628__$1);
(statearr_42770[(17)] = inst_42620);
(statearr_42770[(18)] = inst_42629);
(statearr_42770[(20)] = inst_42617__$1);
(statearr_42770[(21)] = inst_42619__$1);
return statearr_42770;
})();if(inst_42632)
{var statearr_42771_42786 = state_42760__$1;(statearr_42771_42786[(1)] = (3));
} else
{var statearr_42772_42787 = state_42760__$1;(statearr_42772_42787[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_42761 === (1)))
{var inst_42615 = stock.tool.stock_info.call(null,null,(2450),"2015/1/1",(0),(200));var state_42760__$1 = state_42760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42760__$1,(2),inst_42615);
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
var state_machine__6188__auto____0 = (function (){var statearr_42776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42776[(0)] = state_machine__6188__auto__);
(statearr_42776[(1)] = (1));
return statearr_42776;
});
var state_machine__6188__auto____1 = (function (state_42760){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_42760);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e42777){if((e42777 instanceof Object))
{var ex__6191__auto__ = e42777;var statearr_42778_42788 = state_42760;(statearr_42778_42788[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42760);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e42777;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__42789 = state_42760;
state_42760 = G__42789;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_42760){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_42760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_42779 = f__6203__auto__.call(null);(statearr_42779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_42779;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock6.main.call(null);
