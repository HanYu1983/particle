// Compiled by ClojureScript 1.10.238 {}
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
stock.tool.content = (function stock$tool$content(url){
var ret = cljs.core.async.chan.call(null);
$.ajax((function (){var obj53591 = {"url":"/proxy","dataType":"text","data":(function (){var obj53593 = {"url":url};
return obj53593;
})(),"success":((function (ret){
return (function (data){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__,ret){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__,ret){
return (function (state_53601){
var state_val_53602 = (state_53601[(1)]);
if((state_val_53602 === (1))){
var inst_53594 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53595 = [null,data];
var inst_53596 = (new cljs.core.PersistentVector(null,2,(5),inst_53594,inst_53595,null));
var state_53601__$1 = state_53601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53601__$1,(2),ret,inst_53596);
} else {
if((state_val_53602 === (2))){
var inst_53598 = (state_53601[(2)]);
var inst_53599 = cljs.core.async.close_BANG_.call(null,ret);
var state_53601__$1 = (function (){var statearr_53603 = state_53601;
(statearr_53603[(7)] = inst_53598);

return statearr_53603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53601__$1,inst_53599);
} else {
return null;
}
}
});})(c__2884__auto__,ret))
;
return ((function (switch__2794__auto__,c__2884__auto__,ret){
return (function() {
var stock$tool$content_$_state_machine__2795__auto__ = null;
var stock$tool$content_$_state_machine__2795__auto____0 = (function (){
var statearr_53604 = [null,null,null,null,null,null,null,null];
(statearr_53604[(0)] = stock$tool$content_$_state_machine__2795__auto__);

(statearr_53604[(1)] = (1));

return statearr_53604;
});
var stock$tool$content_$_state_machine__2795__auto____1 = (function (state_53601){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_53601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e53605){if((e53605 instanceof Object)){
var ex__2798__auto__ = e53605;
var statearr_53606_53622 = state_53601;
(statearr_53606_53622[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53601);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53623 = state_53601;
state_53601 = G__53623;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
stock$tool$content_$_state_machine__2795__auto__ = function(state_53601){
switch(arguments.length){
case 0:
return stock$tool$content_$_state_machine__2795__auto____0.call(this);
case 1:
return stock$tool$content_$_state_machine__2795__auto____1.call(this,state_53601);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$content_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$content_$_state_machine__2795__auto____0;
stock$tool$content_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$content_$_state_machine__2795__auto____1;
return stock$tool$content_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__,ret))
})();
var state__2886__auto__ = (function (){var statearr_53607 = f__2885__auto__.call(null);
(statearr_53607[(6)] = c__2884__auto__);

return statearr_53607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__,ret))
);

return c__2884__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__,ret){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__,ret){
return (function (state_53615){
var state_val_53616 = (state_53615[(1)]);
if((state_val_53616 === (1))){
var inst_53608 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53609 = [err];
var inst_53610 = (new cljs.core.PersistentVector(null,1,(5),inst_53608,inst_53609,null));
var state_53615__$1 = state_53615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53615__$1,(2),ret,inst_53610);
} else {
if((state_val_53616 === (2))){
var inst_53612 = (state_53615[(2)]);
var inst_53613 = cljs.core.async.close_BANG_.call(null,ret);
var state_53615__$1 = (function (){var statearr_53617 = state_53615;
(statearr_53617[(7)] = inst_53612);

return statearr_53617;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53615__$1,inst_53613);
} else {
return null;
}
}
});})(c__2884__auto__,ret))
;
return ((function (switch__2794__auto__,c__2884__auto__,ret){
return (function() {
var stock$tool$content_$_state_machine__2795__auto__ = null;
var stock$tool$content_$_state_machine__2795__auto____0 = (function (){
var statearr_53618 = [null,null,null,null,null,null,null,null];
(statearr_53618[(0)] = stock$tool$content_$_state_machine__2795__auto__);

(statearr_53618[(1)] = (1));

return statearr_53618;
});
var stock$tool$content_$_state_machine__2795__auto____1 = (function (state_53615){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_53615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e53619){if((e53619 instanceof Object)){
var ex__2798__auto__ = e53619;
var statearr_53620_53624 = state_53615;
(statearr_53620_53624[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53625 = state_53615;
state_53615 = G__53625;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
stock$tool$content_$_state_machine__2795__auto__ = function(state_53615){
switch(arguments.length){
case 0:
return stock$tool$content_$_state_machine__2795__auto____0.call(this);
case 1:
return stock$tool$content_$_state_machine__2795__auto____1.call(this,state_53615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$content_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$content_$_state_machine__2795__auto____0;
stock$tool$content_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$content_$_state_machine__2795__auto____1;
return stock$tool$content_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__,ret))
})();
var state__2886__auto__ = (function (){var statearr_53621 = f__2885__auto__.call(null);
(statearr_53621[(6)] = c__2884__auto__);

return statearr_53621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__,ret))
);

return c__2884__auto__;
});})(ret))
};
return obj53591;
})());

return ret;
});
stock.tool.goog_finance_info_url = (function stock$tool$goog_finance_info_url(id){
return ["https://www.google.com/finance/info?infotype=infoquoteall","&q=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
});
stock.tool.parse_info = (function stock$tool$parse_info(content){
try{var json = (JSON.parse(content)[(0)]);
var date = (new Date(json.lt_dts)).toString();
var volume = (parseFloat(json.vo.replace(/M/,"")) * (1000000));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,json.op,json.hi,json.lo,json.l_fix,volume], null);
}catch (e53626){if((e53626 instanceof Object)){
var e = e53626;
return null;
} else {
throw e53626;

}
}});
stock.tool.todayPrice = (function stock$tool$todayPrice(id){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__){
return (function (state_53649){
var state_val_53650 = (state_53649[(1)]);
if((state_val_53650 === (1))){
var inst_53630 = stock.tool.goog_finance_info_url.call(null,id);
var inst_53631 = stock.tool.content.call(null,inst_53630);
var state_53649__$1 = state_53649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53649__$1,(2),inst_53631);
} else {
if((state_val_53650 === (2))){
var inst_53634 = (state_53649[(7)]);
var inst_53633 = (state_53649[(2)]);
var inst_53634__$1 = cljs.core.nth.call(null,inst_53633,(0),null);
var inst_53635 = cljs.core.nth.call(null,inst_53633,(1),null);
var inst_53636 = inst_53635.replace(/\/\//,"");
var state_53649__$1 = (function (){var statearr_53651 = state_53649;
(statearr_53651[(7)] = inst_53634__$1);

(statearr_53651[(8)] = inst_53636);

return statearr_53651;
})();
if(cljs.core.truth_(inst_53634__$1)){
var statearr_53652_53660 = state_53649__$1;
(statearr_53652_53660[(1)] = (3));

} else {
var statearr_53653_53661 = state_53649__$1;
(statearr_53653_53661[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53650 === (3))){
var inst_53634 = (state_53649[(7)]);
var inst_53638 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53639 = [inst_53634];
var inst_53640 = (new cljs.core.PersistentVector(null,1,(5),inst_53638,inst_53639,null));
var state_53649__$1 = state_53649;
var statearr_53654_53662 = state_53649__$1;
(statearr_53654_53662[(2)] = inst_53640);

(statearr_53654_53662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53650 === (4))){
var inst_53636 = (state_53649[(8)]);
var inst_53642 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53643 = stock.tool.parse_info.call(null,inst_53636);
var inst_53644 = [null,inst_53643];
var inst_53645 = (new cljs.core.PersistentVector(null,2,(5),inst_53642,inst_53644,null));
var state_53649__$1 = state_53649;
var statearr_53655_53663 = state_53649__$1;
(statearr_53655_53663[(2)] = inst_53645);

(statearr_53655_53663[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53650 === (5))){
var inst_53647 = (state_53649[(2)]);
var state_53649__$1 = state_53649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53649__$1,inst_53647);
} else {
return null;
}
}
}
}
}
});})(c__2884__auto__))
;
return ((function (switch__2794__auto__,c__2884__auto__){
return (function() {
var stock$tool$todayPrice_$_state_machine__2795__auto__ = null;
var stock$tool$todayPrice_$_state_machine__2795__auto____0 = (function (){
var statearr_53656 = [null,null,null,null,null,null,null,null,null];
(statearr_53656[(0)] = stock$tool$todayPrice_$_state_machine__2795__auto__);

(statearr_53656[(1)] = (1));

return statearr_53656;
});
var stock$tool$todayPrice_$_state_machine__2795__auto____1 = (function (state_53649){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_53649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e53657){if((e53657 instanceof Object)){
var ex__2798__auto__ = e53657;
var statearr_53658_53664 = state_53649;
(statearr_53658_53664[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53665 = state_53649;
state_53649 = G__53665;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
stock$tool$todayPrice_$_state_machine__2795__auto__ = function(state_53649){
switch(arguments.length){
case 0:
return stock$tool$todayPrice_$_state_machine__2795__auto____0.call(this);
case 1:
return stock$tool$todayPrice_$_state_machine__2795__auto____1.call(this,state_53649);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$todayPrice_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$todayPrice_$_state_machine__2795__auto____0;
stock$tool$todayPrice_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$todayPrice_$_state_machine__2795__auto____1;
return stock$tool$todayPrice_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__))
})();
var state__2886__auto__ = (function (){var statearr_53659 = f__2885__auto__.call(null);
(statearr_53659[(6)] = c__2884__auto__);

return statearr_53659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__))
);

return c__2884__auto__;
});
/**
 * 結合今天，如果今天已經抓到，就不結合
 */
stock.tool.combineToday = (function stock$tool$combineToday(todayLine,li){
if(cljs.core.truth_(todayLine)){
var vec__53666 = cljs.core.first.call(null,li);
var maybe_today = cljs.core.nth.call(null,vec__53666,(0),null);
var _ = cljs.core.nth.call(null,vec__53666,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__53666,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__53666,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__53666,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__53666,(5),null);
var vec__53669 = todayLine;
var today_date = cljs.core.nth.call(null,vec__53669,(0),null);
var ___$5 = cljs.core.nth.call(null,vec__53669,(1),null);
var ___$6 = cljs.core.nth.call(null,vec__53669,(2),null);
var ___$7 = cljs.core.nth.call(null,vec__53669,(3),null);
var ___$8 = cljs.core.nth.call(null,vec__53669,(4),null);
var ___$9 = cljs.core.nth.call(null,vec__53669,(5),null);
if(cljs.core.not.call(null,(new Date(today_date)).clearTime().equals((new Date(maybe_today)).clearTime()))){
return cljs.core.cons.call(null,todayLine,li);
} else {
return li;
}
} else {
return li;
}
});
stock.tool.goog_finance_getprices_url = (function stock$tool$goog_finance_getprices_url(id,ran){
return ["https://www.google.com/finance/getprices?q=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"&x=TPE&i=86400&p=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ran),"&f=d,c,h,l,o,v"].join('');
});
stock.tool.parse_getprices = (function stock$tool$parse_getprices(content){
var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,["([a\\d]\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+\\.?\\d*),(\\d+)"].join('')),content.replace(/\n/," "));
var iter__4292__auto__ = ((function (infos){
return (function stock$tool$parse_getprices_$_iter__53672(s__53673){
return (new cljs.core.LazySeq(null,((function (infos){
return (function (){
var s__53673__$1 = s__53673;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__53673__$1);
if(temp__5457__auto__){
var s__53673__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53673__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__53673__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__53675 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__53674 = (0);
while(true){
if((i__53674 < size__4291__auto__)){
var vec__53676 = cljs.core._nth.call(null,c__4290__auto__,i__53674);
var _ = cljs.core.nth.call(null,vec__53676,(0),null);
var date = cljs.core.nth.call(null,vec__53676,(1),null);
var close = cljs.core.nth.call(null,vec__53676,(2),null);
var high = cljs.core.nth.call(null,vec__53676,(3),null);
var low = cljs.core.nth.call(null,vec__53676,(4),null);
var open = cljs.core.nth.call(null,vec__53676,(5),null);
var volume = cljs.core.nth.call(null,vec__53676,(6),null);
cljs.core.chunk_append.call(null,b__53675,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));

var G__53682 = (i__53674 + (1));
i__53674 = G__53682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53675),stock$tool$parse_getprices_$_iter__53672.call(null,cljs.core.chunk_rest.call(null,s__53673__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53675),null);
}
} else {
var vec__53679 = cljs.core.first.call(null,s__53673__$2);
var _ = cljs.core.nth.call(null,vec__53679,(0),null);
var date = cljs.core.nth.call(null,vec__53679,(1),null);
var close = cljs.core.nth.call(null,vec__53679,(2),null);
var high = cljs.core.nth.call(null,vec__53679,(3),null);
var low = cljs.core.nth.call(null,vec__53679,(4),null);
var open = cljs.core.nth.call(null,vec__53679,(5),null);
var volume = cljs.core.nth.call(null,vec__53679,(6),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),stock$tool$parse_getprices_$_iter__53672.call(null,cljs.core.rest.call(null,s__53673__$2)));
}
} else {
return null;
}
break;
}
});})(infos))
,null,null));
});})(infos))
;
return iter__4292__auto__.call(null,infos);
});
stock.tool.format_getprices = (function stock$tool$format_getprices(interval,data){
var pass1 = cljs.core.map.call(null,(function (p__53683){
var vec__53684 = p__53683;
var d = cljs.core.nth.call(null,vec__53684,(0),null);
var o = cljs.core.nth.call(null,vec__53684,(1),null);
var h = cljs.core.nth.call(null,vec__53684,(2),null);
var l = cljs.core.nth.call(null,vec__53684,(3),null);
var c = cljs.core.nth.call(null,vec__53684,(4),null);
var v = cljs.core.nth.call(null,vec__53684,(5),null);
if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d))){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);
var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__53687,p__53688){
var vec__53689 = p__53687;
var d1 = cljs.core.nth.call(null,vec__53689,(0),null);
var _ = cljs.core.nth.call(null,vec__53689,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__53689,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__53689,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__53689,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__53689,(5),null);
var prev = vec__53689;
var vec__53692 = p__53688;
var d2 = cljs.core.nth.call(null,vec__53692,(0),null);
var o = cljs.core.nth.call(null,vec__53692,(1),null);
var h = cljs.core.nth.call(null,vec__53692,(2),null);
var l = cljs.core.nth.call(null,vec__53692,(3),null);
var c = cljs.core.nth.call(null,vec__53692,(4),null);
var v = cljs.core.nth.call(null,vec__53692,(5),null);
var curr = vec__53692;
if(((typeof d1 === 'string') && (typeof d2 === 'string'))){
var offset = (parseInt(d2) - parseInt(d1));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)].join(''),o,h,l,c,v], null);
} else {
return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));
var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__53695,p__53696){
var vec__53697 = p__53695;
var d1 = cljs.core.nth.call(null,vec__53697,(0),null);
var _ = cljs.core.nth.call(null,vec__53697,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__53697,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__53697,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__53697,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__53697,(5),null);
var prev = vec__53697;
var vec__53700 = p__53696;
var d2 = cljs.core.nth.call(null,vec__53700,(0),null);
var o = cljs.core.nth.call(null,vec__53700,(1),null);
var h = cljs.core.nth.call(null,vec__53700,(2),null);
var l = cljs.core.nth.call(null,vec__53700,(3),null);
var c = cljs.core.nth.call(null,vec__53700,(4),null);
var v = cljs.core.nth.call(null,vec__53700,(5),null);
var curr = vec__53700;
if(((typeof d1 === 'number') && (typeof d2 === 'string'))){
var n = parseInt(d2);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else {
return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));
var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__53703){
var vec__53704 = p__53703;
var d = cljs.core.nth.call(null,vec__53704,(0),null);
var o = cljs.core.nth.call(null,vec__53704,(1),null);
var h = cljs.core.nth.call(null,vec__53704,(2),null);
var l = cljs.core.nth.call(null,vec__53704,(3),null);
var c = cljs.core.nth.call(null,vec__53704,(4),null);
var v = cljs.core.nth.call(null,vec__53704,(5),null);
return true;
});})(pass1,pass2,pass3))
,pass3);
var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__53707){
var vec__53708 = p__53707;
var d = cljs.core.nth.call(null,vec__53708,(0),null);
var o = cljs.core.nth.call(null,vec__53708,(1),null);
var h = cljs.core.nth.call(null,vec__53708,(2),null);
var l = cljs.core.nth.call(null,vec__53708,(3),null);
var c = cljs.core.nth.call(null,vec__53708,(4),null);
var v = cljs.core.nth.call(null,vec__53708,(5),null);
var date = (new Date((d * (1000))));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);
return pass5;
});
stock.tool.get_goog_stock_prices_old = (function stock$tool$get_goog_stock_prices_old(id,range){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__){
return (function (state_53740){
var state_val_53741 = (state_53740[(1)]);
if((state_val_53741 === (1))){
var inst_53717 = stock.tool.goog_finance_getprices_url.call(null,id,range);
var inst_53718 = stock.tool.content.call(null,inst_53717);
var state_53740__$1 = state_53740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53740__$1,(2),inst_53718);
} else {
if((state_val_53741 === (2))){
var inst_53720 = (state_53740[(2)]);
var inst_53721 = cljs.core.nth.call(null,inst_53720,(0),null);
var inst_53722 = cljs.core.nth.call(null,inst_53720,(1),null);
var inst_53723 = stock.tool.todayPrice.call(null,id);
var state_53740__$1 = (function (){var statearr_53742 = state_53740;
(statearr_53742[(7)] = inst_53721);

(statearr_53742[(8)] = inst_53722);

return statearr_53742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53740__$1,(3),inst_53723);
} else {
if((state_val_53741 === (3))){
var inst_53721 = (state_53740[(7)]);
var inst_53722 = (state_53740[(8)]);
var inst_53725 = (state_53740[(2)]);
var inst_53726 = cljs.core.nth.call(null,inst_53725,(0),null);
var inst_53727 = cljs.core.nth.call(null,inst_53725,(1),null);
var inst_53728 = stock.tool.parse_getprices.call(null,inst_53722);
var inst_53729 = stock.tool.format_getprices.call(null,(86400),inst_53728);
var inst_53730 = cljs.core.reverse.call(null,inst_53729);
var inst_53731 = stock.tool.combineToday.call(null,inst_53727,inst_53730);
var inst_53732 = cljs.core.PersistentVector.EMPTY_NODE;
var state_53740__$1 = (function (){var statearr_53743 = state_53740;
(statearr_53743[(9)] = inst_53726);

(statearr_53743[(10)] = inst_53731);

(statearr_53743[(11)] = inst_53732);

return statearr_53743;
})();
if(cljs.core.truth_(inst_53721)){
var statearr_53744_53752 = state_53740__$1;
(statearr_53744_53752[(1)] = (4));

} else {
var statearr_53745_53753 = state_53740__$1;
(statearr_53745_53753[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53741 === (4))){
var inst_53721 = (state_53740[(7)]);
var state_53740__$1 = state_53740;
var statearr_53746_53754 = state_53740__$1;
(statearr_53746_53754[(2)] = inst_53721);

(statearr_53746_53754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53741 === (5))){
var inst_53726 = (state_53740[(9)]);
var state_53740__$1 = state_53740;
var statearr_53747_53755 = state_53740__$1;
(statearr_53747_53755[(2)] = inst_53726);

(statearr_53747_53755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53741 === (6))){
var inst_53731 = (state_53740[(10)]);
var inst_53732 = (state_53740[(11)]);
var inst_53736 = (state_53740[(2)]);
var inst_53737 = [inst_53736,inst_53731];
var inst_53738 = (new cljs.core.PersistentVector(null,2,(5),inst_53732,inst_53737,null));
var state_53740__$1 = state_53740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53740__$1,inst_53738);
} else {
return null;
}
}
}
}
}
}
});})(c__2884__auto__))
;
return ((function (switch__2794__auto__,c__2884__auto__){
return (function() {
var stock$tool$get_goog_stock_prices_old_$_state_machine__2795__auto__ = null;
var stock$tool$get_goog_stock_prices_old_$_state_machine__2795__auto____0 = (function (){
var statearr_53748 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53748[(0)] = stock$tool$get_goog_stock_prices_old_$_state_machine__2795__auto__);

(statearr_53748[(1)] = (1));

return statearr_53748;
});
var stock$tool$get_goog_stock_prices_old_$_state_machine__2795__auto____1 = (function (state_53740){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_53740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e53749){if((e53749 instanceof Object)){
var ex__2798__auto__ = e53749;
var statearr_53750_53756 = state_53740;
(statearr_53750_53756[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53757 = state_53740;
state_53740 = G__53757;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
stock$tool$get_goog_stock_prices_old_$_state_machine__2795__auto__ = function(state_53740){
switch(arguments.length){
case 0:
return stock$tool$get_goog_stock_prices_old_$_state_machine__2795__auto____0.call(this);
case 1:
return stock$tool$get_goog_stock_prices_old_$_state_machine__2795__auto____1.call(this,state_53740);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$get_goog_stock_prices_old_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$get_goog_stock_prices_old_$_state_machine__2795__auto____0;
stock$tool$get_goog_stock_prices_old_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$get_goog_stock_prices_old_$_state_machine__2795__auto____1;
return stock$tool$get_goog_stock_prices_old_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__))
})();
var state__2886__auto__ = (function (){var statearr_53751 = f__2885__auto__.call(null);
(statearr_53751[(6)] = c__2884__auto__);

return statearr_53751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__))
);

return c__2884__auto__;
});
stock.tool.goog_finance_historical_url = (function stock$tool$goog_finance_historical_url(id,startdate,start,num){
return ["https://www.google.com/finance/historical?q=TPE:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"&startdate=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate),"&start=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start),"&num=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join('');
});
stock.tool.parse_historical = (function stock$tool$parse_historical(content){
var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,["<tr>","<td class=\"lm\">(\\D{3} \\d+, \\d+)","<td class=\"rgt\">(\\d+\\.\\d+)","<td class=\"rgt\">(\\d+\\.\\d+)","<td class=\"rgt\">(\\d+\\.\\d+)","<td class=\"rgt\">(\\d+\\.\\d+)","<td class=\"rgt rm\">([\\d,]+)"].join('')),content.replace(/\n/,""));
var iter__4292__auto__ = ((function (infos){
return (function stock$tool$parse_historical_$_iter__53758(s__53759){
return (new cljs.core.LazySeq(null,((function (infos){
return (function (){
var s__53759__$1 = s__53759;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__53759__$1);
if(temp__5457__auto__){
var s__53759__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53759__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__53759__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__53761 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__53760 = (0);
while(true){
if((i__53760 < size__4291__auto__)){
var vec__53762 = cljs.core._nth.call(null,c__4290__auto__,i__53760);
var _ = cljs.core.nth.call(null,vec__53762,(0),null);
var date = cljs.core.nth.call(null,vec__53762,(1),null);
var open = cljs.core.nth.call(null,vec__53762,(2),null);
var high = cljs.core.nth.call(null,vec__53762,(3),null);
var low = cljs.core.nth.call(null,vec__53762,(4),null);
var close = cljs.core.nth.call(null,vec__53762,(5),null);
var volume = cljs.core.nth.call(null,vec__53762,(6),null);
cljs.core.chunk_append.call(null,b__53761,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume.replace(/,/,""))], null));

var G__53768 = (i__53760 + (1));
i__53760 = G__53768;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53761),stock$tool$parse_historical_$_iter__53758.call(null,cljs.core.chunk_rest.call(null,s__53759__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53761),null);
}
} else {
var vec__53765 = cljs.core.first.call(null,s__53759__$2);
var _ = cljs.core.nth.call(null,vec__53765,(0),null);
var date = cljs.core.nth.call(null,vec__53765,(1),null);
var open = cljs.core.nth.call(null,vec__53765,(2),null);
var high = cljs.core.nth.call(null,vec__53765,(3),null);
var low = cljs.core.nth.call(null,vec__53765,(4),null);
var close = cljs.core.nth.call(null,vec__53765,(5),null);
var volume = cljs.core.nth.call(null,vec__53765,(6),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume.replace(/,/,""))], null),stock$tool$parse_historical_$_iter__53758.call(null,cljs.core.rest.call(null,s__53759__$2)));
}
} else {
return null;
}
break;
}
});})(infos))
,null,null));
});})(infos))
;
return iter__4292__auto__.call(null,infos);
});
stock.tool.goog_historical_info = (function stock$tool$goog_historical_info(all,id,startdate,start,num){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__){
return (function (state_53802){
var state_val_53803 = (state_53802[(1)]);
if((state_val_53803 === (1))){
var inst_53772 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);
var inst_53773 = stock.tool.content.call(null,inst_53772);
var state_53802__$1 = state_53802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53802__$1,(2),inst_53773);
} else {
if((state_val_53803 === (2))){
var inst_53776 = (state_53802[(7)]);
var inst_53775 = (state_53802[(2)]);
var inst_53776__$1 = cljs.core.nth.call(null,inst_53775,(0),null);
var inst_53777 = cljs.core.nth.call(null,inst_53775,(1),null);
var state_53802__$1 = (function (){var statearr_53804 = state_53802;
(statearr_53804[(8)] = inst_53777);

(statearr_53804[(7)] = inst_53776__$1);

return statearr_53804;
})();
if(cljs.core.truth_(inst_53776__$1)){
var statearr_53805_53818 = state_53802__$1;
(statearr_53805_53818[(1)] = (3));

} else {
var statearr_53806_53819 = state_53802__$1;
(statearr_53806_53819[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53803 === (3))){
var inst_53776 = (state_53802[(7)]);
var inst_53779 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53780 = [inst_53776];
var inst_53781 = (new cljs.core.PersistentVector(null,1,(5),inst_53779,inst_53780,null));
var state_53802__$1 = state_53802;
var statearr_53807_53820 = state_53802__$1;
(statearr_53807_53820[(2)] = inst_53781);

(statearr_53807_53820[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53803 === (4))){
var inst_53777 = (state_53802[(8)]);
var inst_53783 = (state_53802[(9)]);
var inst_53783__$1 = stock.tool.parse_historical.call(null,inst_53777);
var inst_53784 = cljs.core.count.call(null,inst_53783__$1);
var inst_53785 = cljs.core._EQ_.call(null,num,inst_53784);
var state_53802__$1 = (function (){var statearr_53808 = state_53802;
(statearr_53808[(9)] = inst_53783__$1);

return statearr_53808;
})();
if(inst_53785){
var statearr_53809_53821 = state_53802__$1;
(statearr_53809_53821[(1)] = (6));

} else {
var statearr_53810_53822 = state_53802__$1;
(statearr_53810_53822[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53803 === (5))){
var inst_53800 = (state_53802[(2)]);
var state_53802__$1 = state_53802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53802__$1,inst_53800);
} else {
if((state_val_53803 === (6))){
var inst_53783 = (state_53802[(9)]);
var inst_53787 = cljs.core.concat.call(null,all,inst_53783);
var inst_53788 = (start + num);
var inst_53789 = stock.tool.goog_historical_info.call(null,inst_53787,id,startdate,inst_53788,num);
var state_53802__$1 = state_53802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53802__$1,(9),inst_53789);
} else {
if((state_val_53803 === (7))){
var inst_53783 = (state_53802[(9)]);
var inst_53793 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53794 = cljs.core.concat.call(null,all,inst_53783);
var inst_53795 = [null,inst_53794];
var inst_53796 = (new cljs.core.PersistentVector(null,2,(5),inst_53793,inst_53795,null));
var state_53802__$1 = state_53802;
var statearr_53811_53823 = state_53802__$1;
(statearr_53811_53823[(2)] = inst_53796);

(statearr_53811_53823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53803 === (8))){
var inst_53798 = (state_53802[(2)]);
var state_53802__$1 = state_53802;
var statearr_53812_53824 = state_53802__$1;
(statearr_53812_53824[(2)] = inst_53798);

(statearr_53812_53824[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53803 === (9))){
var inst_53791 = (state_53802[(2)]);
var state_53802__$1 = state_53802;
var statearr_53813_53825 = state_53802__$1;
(statearr_53813_53825[(2)] = inst_53791);

(statearr_53813_53825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__2884__auto__))
;
return ((function (switch__2794__auto__,c__2884__auto__){
return (function() {
var stock$tool$goog_historical_info_$_state_machine__2795__auto__ = null;
var stock$tool$goog_historical_info_$_state_machine__2795__auto____0 = (function (){
var statearr_53814 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53814[(0)] = stock$tool$goog_historical_info_$_state_machine__2795__auto__);

(statearr_53814[(1)] = (1));

return statearr_53814;
});
var stock$tool$goog_historical_info_$_state_machine__2795__auto____1 = (function (state_53802){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_53802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e53815){if((e53815 instanceof Object)){
var ex__2798__auto__ = e53815;
var statearr_53816_53826 = state_53802;
(statearr_53816_53826[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53827 = state_53802;
state_53802 = G__53827;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
stock$tool$goog_historical_info_$_state_machine__2795__auto__ = function(state_53802){
switch(arguments.length){
case 0:
return stock$tool$goog_historical_info_$_state_machine__2795__auto____0.call(this);
case 1:
return stock$tool$goog_historical_info_$_state_machine__2795__auto____1.call(this,state_53802);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$goog_historical_info_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$goog_historical_info_$_state_machine__2795__auto____0;
stock$tool$goog_historical_info_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$goog_historical_info_$_state_machine__2795__auto____1;
return stock$tool$goog_historical_info_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__))
})();
var state__2886__auto__ = (function (){var statearr_53817 = f__2885__auto__.call(null);
(statearr_53817[(6)] = c__2884__auto__);

return statearr_53817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__))
);

return c__2884__auto__;
});
stock.tool.getUrl = (function stock$tool$getUrl(url){
var retc = cljs.core.async.chan.call(null);
var errc = cljs.core.async.chan.call(null);
$.ajax((function (){var obj53829 = {"url":url,"method":"GET","success":((function (retc,errc){
return (function (data){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__,retc,errc){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__,retc,errc){
return (function (state_53845){
var state_val_53846 = (state_53845[(1)]);
if((state_val_53846 === (1))){
var inst_53830 = (state_53845[(7)]);
var inst_53830__$1 = (data[(0)]);
var inst_53831 = (data[(1)]);
var state_53845__$1 = (function (){var statearr_53847 = state_53845;
(statearr_53847[(7)] = inst_53830__$1);

(statearr_53847[(8)] = inst_53831);

return statearr_53847;
})();
if(cljs.core.truth_(inst_53830__$1)){
var statearr_53848_53870 = state_53845__$1;
(statearr_53848_53870[(1)] = (2));

} else {
var statearr_53849_53871 = state_53845__$1;
(statearr_53849_53871[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53846 === (2))){
var inst_53830 = (state_53845[(7)]);
var state_53845__$1 = state_53845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53845__$1,(5),errc,inst_53830);
} else {
if((state_val_53846 === (3))){
var inst_53831 = (state_53845[(8)]);
var state_53845__$1 = state_53845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53845__$1,(6),retc,inst_53831);
} else {
if((state_val_53846 === (4))){
var inst_53843 = (state_53845[(2)]);
var state_53845__$1 = state_53845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53845__$1,inst_53843);
} else {
if((state_val_53846 === (5))){
var inst_53834 = (state_53845[(2)]);
var inst_53835 = cljs.core.async.close_BANG_.call(null,retc);
var inst_53836 = cljs.core.async.close_BANG_.call(null,errc);
var state_53845__$1 = (function (){var statearr_53850 = state_53845;
(statearr_53850[(9)] = inst_53834);

(statearr_53850[(10)] = inst_53835);

return statearr_53850;
})();
var statearr_53851_53872 = state_53845__$1;
(statearr_53851_53872[(2)] = inst_53836);

(statearr_53851_53872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53846 === (6))){
var inst_53839 = (state_53845[(2)]);
var inst_53840 = cljs.core.async.close_BANG_.call(null,retc);
var inst_53841 = cljs.core.async.close_BANG_.call(null,errc);
var state_53845__$1 = (function (){var statearr_53852 = state_53845;
(statearr_53852[(11)] = inst_53840);

(statearr_53852[(12)] = inst_53839);

return statearr_53852;
})();
var statearr_53853_53873 = state_53845__$1;
(statearr_53853_53873[(2)] = inst_53841);

(statearr_53853_53873[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__2884__auto__,retc,errc))
;
return ((function (switch__2794__auto__,c__2884__auto__,retc,errc){
return (function() {
var stock$tool$getUrl_$_state_machine__2795__auto__ = null;
var stock$tool$getUrl_$_state_machine__2795__auto____0 = (function (){
var statearr_53854 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53854[(0)] = stock$tool$getUrl_$_state_machine__2795__auto__);

(statearr_53854[(1)] = (1));

return statearr_53854;
});
var stock$tool$getUrl_$_state_machine__2795__auto____1 = (function (state_53845){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_53845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e53855){if((e53855 instanceof Object)){
var ex__2798__auto__ = e53855;
var statearr_53856_53874 = state_53845;
(statearr_53856_53874[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53875 = state_53845;
state_53845 = G__53875;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
stock$tool$getUrl_$_state_machine__2795__auto__ = function(state_53845){
switch(arguments.length){
case 0:
return stock$tool$getUrl_$_state_machine__2795__auto____0.call(this);
case 1:
return stock$tool$getUrl_$_state_machine__2795__auto____1.call(this,state_53845);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$getUrl_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$getUrl_$_state_machine__2795__auto____0;
stock$tool$getUrl_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$getUrl_$_state_machine__2795__auto____1;
return stock$tool$getUrl_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__,retc,errc))
})();
var state__2886__auto__ = (function (){var statearr_53857 = f__2885__auto__.call(null);
(statearr_53857[(6)] = c__2884__auto__);

return statearr_53857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__,retc,errc))
);

return c__2884__auto__;
});})(retc,errc))
,"error":((function (retc,errc){
return (function (xhr,_,err){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__,retc,errc){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__,retc,errc){
return (function (state_53863){
var state_val_53864 = (state_53863[(1)]);
if((state_val_53864 === (1))){
var state_53863__$1 = state_53863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53863__$1,(2),errc,err);
} else {
if((state_val_53864 === (2))){
var inst_53859 = (state_53863[(2)]);
var inst_53860 = cljs.core.async.close_BANG_.call(null,retc);
var inst_53861 = cljs.core.async.close_BANG_.call(null,errc);
var state_53863__$1 = (function (){var statearr_53865 = state_53863;
(statearr_53865[(7)] = inst_53859);

(statearr_53865[(8)] = inst_53860);

return statearr_53865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53863__$1,inst_53861);
} else {
return null;
}
}
});})(c__2884__auto__,retc,errc))
;
return ((function (switch__2794__auto__,c__2884__auto__,retc,errc){
return (function() {
var stock$tool$getUrl_$_state_machine__2795__auto__ = null;
var stock$tool$getUrl_$_state_machine__2795__auto____0 = (function (){
var statearr_53866 = [null,null,null,null,null,null,null,null,null];
(statearr_53866[(0)] = stock$tool$getUrl_$_state_machine__2795__auto__);

(statearr_53866[(1)] = (1));

return statearr_53866;
});
var stock$tool$getUrl_$_state_machine__2795__auto____1 = (function (state_53863){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_53863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e53867){if((e53867 instanceof Object)){
var ex__2798__auto__ = e53867;
var statearr_53868_53876 = state_53863;
(statearr_53868_53876[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53877 = state_53863;
state_53863 = G__53877;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
stock$tool$getUrl_$_state_machine__2795__auto__ = function(state_53863){
switch(arguments.length){
case 0:
return stock$tool$getUrl_$_state_machine__2795__auto____0.call(this);
case 1:
return stock$tool$getUrl_$_state_machine__2795__auto____1.call(this,state_53863);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$getUrl_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$getUrl_$_state_machine__2795__auto____0;
stock$tool$getUrl_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$getUrl_$_state_machine__2795__auto____1;
return stock$tool$getUrl_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__,retc,errc))
})();
var state__2886__auto__ = (function (){var statearr_53869 = f__2885__auto__.call(null);
(statearr_53869[(6)] = c__2884__auto__);

return statearr_53869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__,retc,errc))
);

return c__2884__auto__;
});})(retc,errc))
};
return obj53829;
})());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [retc,errc], null);
});
stock.tool.get_goog_stock_prices2 = (function stock$tool$get_goog_stock_prices2(id,range){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__){
return (function (state_53894){
var state_val_53895 = (state_53894[(1)]);
if((state_val_53895 === (1))){
var inst_53878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53879 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53880 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53881 = ["2018/3",(10),(12),(6),(8),(10)];
var inst_53882 = (new cljs.core.PersistentVector(null,6,(5),inst_53880,inst_53881,null));
var inst_53883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53884 = ["2018/3",(12),(14),(8),(8),(6)];
var inst_53885 = (new cljs.core.PersistentVector(null,6,(5),inst_53883,inst_53884,null));
var inst_53886 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53887 = ["2018/3",(12),(14),(8),(8),(16)];
var inst_53888 = (new cljs.core.PersistentVector(null,6,(5),inst_53886,inst_53887,null));
var inst_53889 = [inst_53882,inst_53885,inst_53888];
var inst_53890 = (new cljs.core.PersistentVector(null,3,(5),inst_53879,inst_53889,null));
var inst_53891 = [null,inst_53890];
var inst_53892 = (new cljs.core.PersistentVector(null,2,(5),inst_53878,inst_53891,null));
var state_53894__$1 = state_53894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53894__$1,inst_53892);
} else {
return null;
}
});})(c__2884__auto__))
;
return ((function (switch__2794__auto__,c__2884__auto__){
return (function() {
var stock$tool$get_goog_stock_prices2_$_state_machine__2795__auto__ = null;
var stock$tool$get_goog_stock_prices2_$_state_machine__2795__auto____0 = (function (){
var statearr_53896 = [null,null,null,null,null,null,null];
(statearr_53896[(0)] = stock$tool$get_goog_stock_prices2_$_state_machine__2795__auto__);

(statearr_53896[(1)] = (1));

return statearr_53896;
});
var stock$tool$get_goog_stock_prices2_$_state_machine__2795__auto____1 = (function (state_53894){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_53894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e53897){if((e53897 instanceof Object)){
var ex__2798__auto__ = e53897;
var statearr_53898_53900 = state_53894;
(statearr_53898_53900[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53901 = state_53894;
state_53894 = G__53901;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
stock$tool$get_goog_stock_prices2_$_state_machine__2795__auto__ = function(state_53894){
switch(arguments.length){
case 0:
return stock$tool$get_goog_stock_prices2_$_state_machine__2795__auto____0.call(this);
case 1:
return stock$tool$get_goog_stock_prices2_$_state_machine__2795__auto____1.call(this,state_53894);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$get_goog_stock_prices2_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$get_goog_stock_prices2_$_state_machine__2795__auto____0;
stock$tool$get_goog_stock_prices2_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$get_goog_stock_prices2_$_state_machine__2795__auto____1;
return stock$tool$get_goog_stock_prices2_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__))
})();
var state__2886__auto__ = (function (){var statearr_53899 = f__2885__auto__.call(null);
(statearr_53899[(6)] = c__2884__auto__);

return statearr_53899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__))
);

return c__2884__auto__;
});
stock.tool.get_goog_stock_prices = (function stock$tool$get_goog_stock_prices(id,range){
var c__2884__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2884__auto__){
return (function (){
var f__2885__auto__ = (function (){var switch__2794__auto__ = ((function (c__2884__auto__){
return (function (state_53946){
var state_val_53947 = (state_53946[(1)]);
if((state_val_53947 === (1))){
var inst_53909 = (state_53946[(7)]);
var inst_53910 = (state_53946[(8)]);
var inst_53911 = (state_53946[(9)]);
var inst_53908 = ["/fn/stockInfo?symbol=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"&chartLast=365"].join('');
var inst_53909__$1 = stock.tool.getUrl.call(null,inst_53908);
var inst_53910__$1 = cljs.core.nth.call(null,inst_53909__$1,(0),null);
var inst_53911__$1 = cljs.core.nth.call(null,inst_53909__$1,(1),null);
var inst_53912 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53913 = [inst_53910__$1,inst_53911__$1];
var inst_53914 = (new cljs.core.PersistentVector(null,2,(5),inst_53912,inst_53913,null));
var state_53946__$1 = (function (){var statearr_53948 = state_53946;
(statearr_53948[(7)] = inst_53909__$1);

(statearr_53948[(8)] = inst_53910__$1);

(statearr_53948[(9)] = inst_53911__$1);

return statearr_53948;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_53946__$1,(2),inst_53914);
} else {
if((state_val_53947 === (2))){
var inst_53918 = (state_53946[(10)]);
var inst_53916 = (state_53946[(11)]);
var inst_53910 = (state_53946[(8)]);
var inst_53916__$1 = (state_53946[(2)]);
var inst_53917 = cljs.core.nth.call(null,inst_53916__$1,(0),null);
var inst_53918__$1 = cljs.core.nth.call(null,inst_53916__$1,(1),null);
var inst_53922 = cljs.core._EQ_.call(null,inst_53910,inst_53918__$1);
var state_53946__$1 = (function (){var statearr_53949 = state_53946;
(statearr_53949[(10)] = inst_53918__$1);

(statearr_53949[(11)] = inst_53916__$1);

(statearr_53949[(12)] = inst_53917);

return statearr_53949;
})();
if(inst_53922){
var statearr_53950_53962 = state_53946__$1;
(statearr_53950_53962[(1)] = (3));

} else {
var statearr_53951_53963 = state_53946__$1;
(statearr_53951_53963[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53947 === (3))){
var inst_53918 = (state_53946[(10)]);
var inst_53916 = (state_53946[(11)]);
var inst_53909 = (state_53946[(7)]);
var inst_53910 = (state_53946[(8)]);
var inst_53911 = (state_53946[(9)]);
var inst_53917 = (state_53946[(12)]);
var inst_53924 = (function (){var vec__53902 = inst_53909;
var stockInfoc = inst_53910;
var errc = inst_53911;
var vec__53905 = inst_53916;
var v = inst_53917;
var c = inst_53918;
var pred__53919 = cljs.core._EQ_;
var expr__53920 = inst_53918;
return ((function (vec__53902,stockInfoc,errc,vec__53905,v,c,pred__53919,expr__53920,inst_53918,inst_53916,inst_53909,inst_53910,inst_53911,inst_53917,state_val_53947,c__2884__auto__){
return (function (obj){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.get,obj),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["date","open","high","low","close","volume"], null));
});
;})(vec__53902,stockInfoc,errc,vec__53905,v,c,pred__53919,expr__53920,inst_53918,inst_53916,inst_53909,inst_53910,inst_53911,inst_53917,state_val_53947,c__2884__auto__))
})();
var inst_53925 = cljs.core.js__GT_clj.call(null,inst_53917);
var inst_53926 = cljs.core.map.call(null,inst_53924,inst_53925);
var inst_53927 = cljs.core.reverse.call(null,inst_53926);
var inst_53928 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53929 = [null,inst_53927];
var inst_53930 = (new cljs.core.PersistentVector(null,2,(5),inst_53928,inst_53929,null));
var state_53946__$1 = state_53946;
var statearr_53952_53964 = state_53946__$1;
(statearr_53952_53964[(2)] = inst_53930);

(statearr_53952_53964[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53947 === (4))){
var inst_53918 = (state_53946[(10)]);
var inst_53911 = (state_53946[(9)]);
var inst_53932 = cljs.core._EQ_.call(null,inst_53911,inst_53918);
var state_53946__$1 = state_53946;
if(inst_53932){
var statearr_53953_53965 = state_53946__$1;
(statearr_53953_53965[(1)] = (6));

} else {
var statearr_53954_53966 = state_53946__$1;
(statearr_53954_53966[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53947 === (5))){
var inst_53944 = (state_53946[(2)]);
var state_53946__$1 = state_53946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53946__$1,inst_53944);
} else {
if((state_val_53947 === (6))){
var inst_53917 = (state_53946[(12)]);
var inst_53934 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53935 = [inst_53917,null];
var inst_53936 = (new cljs.core.PersistentVector(null,2,(5),inst_53934,inst_53935,null));
var state_53946__$1 = state_53946;
var statearr_53955_53967 = state_53946__$1;
(statearr_53955_53967[(2)] = inst_53936);

(statearr_53955_53967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53947 === (7))){
var inst_53918 = (state_53946[(10)]);
var inst_53938 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53918)].join('');
var inst_53939 = (new Error(inst_53938));
var inst_53940 = (function(){throw inst_53939})();
var state_53946__$1 = state_53946;
var statearr_53956_53968 = state_53946__$1;
(statearr_53956_53968[(2)] = inst_53940);

(statearr_53956_53968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53947 === (8))){
var inst_53942 = (state_53946[(2)]);
var state_53946__$1 = state_53946;
var statearr_53957_53969 = state_53946__$1;
(statearr_53957_53969[(2)] = inst_53942);

(statearr_53957_53969[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__2884__auto__))
;
return ((function (switch__2794__auto__,c__2884__auto__){
return (function() {
var stock$tool$get_goog_stock_prices_$_state_machine__2795__auto__ = null;
var stock$tool$get_goog_stock_prices_$_state_machine__2795__auto____0 = (function (){
var statearr_53958 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53958[(0)] = stock$tool$get_goog_stock_prices_$_state_machine__2795__auto__);

(statearr_53958[(1)] = (1));

return statearr_53958;
});
var stock$tool$get_goog_stock_prices_$_state_machine__2795__auto____1 = (function (state_53946){
while(true){
var ret_value__2796__auto__ = (function (){try{while(true){
var result__2797__auto__ = switch__2794__auto__.call(null,state_53946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2797__auto__;
}
break;
}
}catch (e53959){if((e53959 instanceof Object)){
var ex__2798__auto__ = e53959;
var statearr_53960_53970 = state_53946;
(statearr_53960_53970[(5)] = ex__2798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53971 = state_53946;
state_53946 = G__53971;
continue;
} else {
return ret_value__2796__auto__;
}
break;
}
});
stock$tool$get_goog_stock_prices_$_state_machine__2795__auto__ = function(state_53946){
switch(arguments.length){
case 0:
return stock$tool$get_goog_stock_prices_$_state_machine__2795__auto____0.call(this);
case 1:
return stock$tool$get_goog_stock_prices_$_state_machine__2795__auto____1.call(this,state_53946);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$get_goog_stock_prices_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$get_goog_stock_prices_$_state_machine__2795__auto____0;
stock$tool$get_goog_stock_prices_$_state_machine__2795__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$get_goog_stock_prices_$_state_machine__2795__auto____1;
return stock$tool$get_goog_stock_prices_$_state_machine__2795__auto__;
})()
;})(switch__2794__auto__,c__2884__auto__))
})();
var state__2886__auto__ = (function (){var statearr_53961 = f__2885__auto__.call(null);
(statearr_53961[(6)] = c__2884__auto__);

return statearr_53961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2886__auto__);
});})(c__2884__auto__))
);

return c__2884__auto__;
});
stock.tool.date = (function stock$tool$date(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.date,kline);
} else {
var vec__53972 = kline;
var date = cljs.core.nth.call(null,vec__53972,(0),null);
var _ = cljs.core.nth.call(null,vec__53972,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__53972,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__53972,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__53972,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__53972,(5),null);
return date;
}
});
stock.tool.high = (function stock$tool$high(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.high,kline);
} else {
var vec__53975 = kline;
var _ = cljs.core.nth.call(null,vec__53975,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__53975,(1),null);
var high = cljs.core.nth.call(null,vec__53975,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__53975,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__53975,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__53975,(5),null);
return high;
}
});
stock.tool.open = (function stock$tool$open(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.open,kline);
} else {
var vec__53978 = kline;
var _ = cljs.core.nth.call(null,vec__53978,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__53978,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__53978,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__53978,(3),null);
var open = cljs.core.nth.call(null,vec__53978,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__53978,(5),null);
return open;
}
});
stock.tool.close = (function stock$tool$close(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.close,kline);
} else {
var vec__53981 = kline;
var _ = cljs.core.nth.call(null,vec__53981,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__53981,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__53981,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__53981,(3),null);
var close = cljs.core.nth.call(null,vec__53981,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__53981,(5),null);
return close;
}
});
stock.tool.low = (function stock$tool$low(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.low,kline);
} else {
var vec__53984 = kline;
var _ = cljs.core.nth.call(null,vec__53984,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__53984,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__53984,(2),null);
var low = cljs.core.nth.call(null,vec__53984,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__53984,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__53984,(5),null);
return low;
}
});
stock.tool.volume = (function stock$tool$volume(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.volume,kline);
} else {
var vec__53987 = kline;
var _ = cljs.core.nth.call(null,vec__53987,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__53987,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__53987,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__53987,(3),null);
var ___$4 = cljs.core.nth.call(null,vec__53987,(4),null);
var volume = cljs.core.nth.call(null,vec__53987,(5),null);
return volume;
}
});
stock.tool.mid = (function stock$tool$mid(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.mid,kline);
} else {
var vec__53990 = kline;
var _ = cljs.core.nth.call(null,vec__53990,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__53990,(1),null);
var high = cljs.core.nth.call(null,vec__53990,(2),null);
var low = cljs.core.nth.call(null,vec__53990,(3),null);
var ___$2 = cljs.core.nth.call(null,vec__53990,(4),null);
var ___$3 = cljs.core.nth.call(null,vec__53990,(5),null);
return ((high + low) / (2));
}
});
stock.tool.typical = (function stock$tool$typical(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.typical,kline);
} else {
var vec__53993 = kline;
var _ = cljs.core.nth.call(null,vec__53993,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__53993,(1),null);
var high = cljs.core.nth.call(null,vec__53993,(2),null);
var low = cljs.core.nth.call(null,vec__53993,(3),null);
var close = cljs.core.nth.call(null,vec__53993,(4),null);
var ___$2 = cljs.core.nth.call(null,vec__53993,(5),null);
return (((high + low) + close) / (3));
}
});

//# sourceMappingURL=tool.js.map
