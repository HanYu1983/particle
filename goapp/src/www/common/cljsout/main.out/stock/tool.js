// Compiled by ClojureScript 1.10.238 {}
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
stock.tool.content = (function stock$tool$content(url){
var ret = cljs.core.async.chan.call(null);
$.ajax((function (){var obj9737 = {"url":"/proxy","dataType":"text","data":(function (){var obj9739 = {"url":url};
return obj9739;
})(),"success":((function (ret){
return (function (data){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__,ret){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__,ret){
return (function (state_9747){
var state_val_9748 = (state_9747[(1)]);
if((state_val_9748 === (1))){
var inst_9740 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9741 = [null,data];
var inst_9742 = (new cljs.core.PersistentVector(null,2,(5),inst_9740,inst_9741,null));
var state_9747__$1 = state_9747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9747__$1,(2),ret,inst_9742);
} else {
if((state_val_9748 === (2))){
var inst_9744 = (state_9747[(2)]);
var inst_9745 = cljs.core.async.close_BANG_.call(null,ret);
var state_9747__$1 = (function (){var statearr_9749 = state_9747;
(statearr_9749[(7)] = inst_9744);

return statearr_9749;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9747__$1,inst_9745);
} else {
return null;
}
}
});})(c__3261__auto__,ret))
;
return ((function (switch__3171__auto__,c__3261__auto__,ret){
return (function() {
var stock$tool$content_$_state_machine__3172__auto__ = null;
var stock$tool$content_$_state_machine__3172__auto____0 = (function (){
var statearr_9750 = [null,null,null,null,null,null,null,null];
(statearr_9750[(0)] = stock$tool$content_$_state_machine__3172__auto__);

(statearr_9750[(1)] = (1));

return statearr_9750;
});
var stock$tool$content_$_state_machine__3172__auto____1 = (function (state_9747){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_9747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e9751){if((e9751 instanceof Object)){
var ex__3175__auto__ = e9751;
var statearr_9752_9768 = state_9747;
(statearr_9752_9768[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9769 = state_9747;
state_9747 = G__9769;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
stock$tool$content_$_state_machine__3172__auto__ = function(state_9747){
switch(arguments.length){
case 0:
return stock$tool$content_$_state_machine__3172__auto____0.call(this);
case 1:
return stock$tool$content_$_state_machine__3172__auto____1.call(this,state_9747);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$content_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$content_$_state_machine__3172__auto____0;
stock$tool$content_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$content_$_state_machine__3172__auto____1;
return stock$tool$content_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__,ret))
})();
var state__3263__auto__ = (function (){var statearr_9753 = f__3262__auto__.call(null);
(statearr_9753[(6)] = c__3261__auto__);

return statearr_9753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__,ret))
);

return c__3261__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__,ret){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__,ret){
return (function (state_9761){
var state_val_9762 = (state_9761[(1)]);
if((state_val_9762 === (1))){
var inst_9754 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9755 = [err];
var inst_9756 = (new cljs.core.PersistentVector(null,1,(5),inst_9754,inst_9755,null));
var state_9761__$1 = state_9761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9761__$1,(2),ret,inst_9756);
} else {
if((state_val_9762 === (2))){
var inst_9758 = (state_9761[(2)]);
var inst_9759 = cljs.core.async.close_BANG_.call(null,ret);
var state_9761__$1 = (function (){var statearr_9763 = state_9761;
(statearr_9763[(7)] = inst_9758);

return statearr_9763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9761__$1,inst_9759);
} else {
return null;
}
}
});})(c__3261__auto__,ret))
;
return ((function (switch__3171__auto__,c__3261__auto__,ret){
return (function() {
var stock$tool$content_$_state_machine__3172__auto__ = null;
var stock$tool$content_$_state_machine__3172__auto____0 = (function (){
var statearr_9764 = [null,null,null,null,null,null,null,null];
(statearr_9764[(0)] = stock$tool$content_$_state_machine__3172__auto__);

(statearr_9764[(1)] = (1));

return statearr_9764;
});
var stock$tool$content_$_state_machine__3172__auto____1 = (function (state_9761){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_9761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e9765){if((e9765 instanceof Object)){
var ex__3175__auto__ = e9765;
var statearr_9766_9770 = state_9761;
(statearr_9766_9770[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9771 = state_9761;
state_9761 = G__9771;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
stock$tool$content_$_state_machine__3172__auto__ = function(state_9761){
switch(arguments.length){
case 0:
return stock$tool$content_$_state_machine__3172__auto____0.call(this);
case 1:
return stock$tool$content_$_state_machine__3172__auto____1.call(this,state_9761);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$content_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$content_$_state_machine__3172__auto____0;
stock$tool$content_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$content_$_state_machine__3172__auto____1;
return stock$tool$content_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__,ret))
})();
var state__3263__auto__ = (function (){var statearr_9767 = f__3262__auto__.call(null);
(statearr_9767[(6)] = c__3261__auto__);

return statearr_9767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__,ret))
);

return c__3261__auto__;
});})(ret))
};
return obj9737;
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
}catch (e9772){if((e9772 instanceof Object)){
var e = e9772;
return null;
} else {
throw e9772;

}
}});
stock.tool.todayPrice = (function stock$tool$todayPrice(id){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_9795){
var state_val_9796 = (state_9795[(1)]);
if((state_val_9796 === (1))){
var inst_9776 = stock.tool.goog_finance_info_url.call(null,id);
var inst_9777 = stock.tool.content.call(null,inst_9776);
var state_9795__$1 = state_9795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9795__$1,(2),inst_9777);
} else {
if((state_val_9796 === (2))){
var inst_9780 = (state_9795[(7)]);
var inst_9779 = (state_9795[(2)]);
var inst_9780__$1 = cljs.core.nth.call(null,inst_9779,(0),null);
var inst_9781 = cljs.core.nth.call(null,inst_9779,(1),null);
var inst_9782 = inst_9781.replace(/\/\//,"");
var state_9795__$1 = (function (){var statearr_9797 = state_9795;
(statearr_9797[(7)] = inst_9780__$1);

(statearr_9797[(8)] = inst_9782);

return statearr_9797;
})();
if(cljs.core.truth_(inst_9780__$1)){
var statearr_9798_9806 = state_9795__$1;
(statearr_9798_9806[(1)] = (3));

} else {
var statearr_9799_9807 = state_9795__$1;
(statearr_9799_9807[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9796 === (3))){
var inst_9780 = (state_9795[(7)]);
var inst_9784 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9785 = [inst_9780];
var inst_9786 = (new cljs.core.PersistentVector(null,1,(5),inst_9784,inst_9785,null));
var state_9795__$1 = state_9795;
var statearr_9800_9808 = state_9795__$1;
(statearr_9800_9808[(2)] = inst_9786);

(statearr_9800_9808[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9796 === (4))){
var inst_9782 = (state_9795[(8)]);
var inst_9788 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9789 = stock.tool.parse_info.call(null,inst_9782);
var inst_9790 = [null,inst_9789];
var inst_9791 = (new cljs.core.PersistentVector(null,2,(5),inst_9788,inst_9790,null));
var state_9795__$1 = state_9795;
var statearr_9801_9809 = state_9795__$1;
(statearr_9801_9809[(2)] = inst_9791);

(statearr_9801_9809[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9796 === (5))){
var inst_9793 = (state_9795[(2)]);
var state_9795__$1 = state_9795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9795__$1,inst_9793);
} else {
return null;
}
}
}
}
}
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var stock$tool$todayPrice_$_state_machine__3172__auto__ = null;
var stock$tool$todayPrice_$_state_machine__3172__auto____0 = (function (){
var statearr_9802 = [null,null,null,null,null,null,null,null,null];
(statearr_9802[(0)] = stock$tool$todayPrice_$_state_machine__3172__auto__);

(statearr_9802[(1)] = (1));

return statearr_9802;
});
var stock$tool$todayPrice_$_state_machine__3172__auto____1 = (function (state_9795){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_9795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e9803){if((e9803 instanceof Object)){
var ex__3175__auto__ = e9803;
var statearr_9804_9810 = state_9795;
(statearr_9804_9810[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9811 = state_9795;
state_9795 = G__9811;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
stock$tool$todayPrice_$_state_machine__3172__auto__ = function(state_9795){
switch(arguments.length){
case 0:
return stock$tool$todayPrice_$_state_machine__3172__auto____0.call(this);
case 1:
return stock$tool$todayPrice_$_state_machine__3172__auto____1.call(this,state_9795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$todayPrice_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$todayPrice_$_state_machine__3172__auto____0;
stock$tool$todayPrice_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$todayPrice_$_state_machine__3172__auto____1;
return stock$tool$todayPrice_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_9805 = f__3262__auto__.call(null);
(statearr_9805[(6)] = c__3261__auto__);

return statearr_9805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});
/**
 * 結合今天，如果今天已經抓到，就不結合
 */
stock.tool.combineToday = (function stock$tool$combineToday(todayLine,li){
if(cljs.core.truth_(todayLine)){
var vec__9812 = cljs.core.first.call(null,li);
var maybe_today = cljs.core.nth.call(null,vec__9812,(0),null);
var _ = cljs.core.nth.call(null,vec__9812,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__9812,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__9812,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__9812,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__9812,(5),null);
var vec__9815 = todayLine;
var today_date = cljs.core.nth.call(null,vec__9815,(0),null);
var ___$5 = cljs.core.nth.call(null,vec__9815,(1),null);
var ___$6 = cljs.core.nth.call(null,vec__9815,(2),null);
var ___$7 = cljs.core.nth.call(null,vec__9815,(3),null);
var ___$8 = cljs.core.nth.call(null,vec__9815,(4),null);
var ___$9 = cljs.core.nth.call(null,vec__9815,(5),null);
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
return (function stock$tool$parse_getprices_$_iter__9818(s__9819){
return (new cljs.core.LazySeq(null,((function (infos){
return (function (){
var s__9819__$1 = s__9819;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__9819__$1);
if(temp__5457__auto__){
var s__9819__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9819__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__9819__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__9821 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__9820 = (0);
while(true){
if((i__9820 < size__4291__auto__)){
var vec__9822 = cljs.core._nth.call(null,c__4290__auto__,i__9820);
var _ = cljs.core.nth.call(null,vec__9822,(0),null);
var date = cljs.core.nth.call(null,vec__9822,(1),null);
var close = cljs.core.nth.call(null,vec__9822,(2),null);
var high = cljs.core.nth.call(null,vec__9822,(3),null);
var low = cljs.core.nth.call(null,vec__9822,(4),null);
var open = cljs.core.nth.call(null,vec__9822,(5),null);
var volume = cljs.core.nth.call(null,vec__9822,(6),null);
cljs.core.chunk_append.call(null,b__9821,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));

var G__9828 = (i__9820 + (1));
i__9820 = G__9828;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9821),stock$tool$parse_getprices_$_iter__9818.call(null,cljs.core.chunk_rest.call(null,s__9819__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9821),null);
}
} else {
var vec__9825 = cljs.core.first.call(null,s__9819__$2);
var _ = cljs.core.nth.call(null,vec__9825,(0),null);
var date = cljs.core.nth.call(null,vec__9825,(1),null);
var close = cljs.core.nth.call(null,vec__9825,(2),null);
var high = cljs.core.nth.call(null,vec__9825,(3),null);
var low = cljs.core.nth.call(null,vec__9825,(4),null);
var open = cljs.core.nth.call(null,vec__9825,(5),null);
var volume = cljs.core.nth.call(null,vec__9825,(6),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),stock$tool$parse_getprices_$_iter__9818.call(null,cljs.core.rest.call(null,s__9819__$2)));
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
var pass1 = cljs.core.map.call(null,(function (p__9829){
var vec__9830 = p__9829;
var d = cljs.core.nth.call(null,vec__9830,(0),null);
var o = cljs.core.nth.call(null,vec__9830,(1),null);
var h = cljs.core.nth.call(null,vec__9830,(2),null);
var l = cljs.core.nth.call(null,vec__9830,(3),null);
var c = cljs.core.nth.call(null,vec__9830,(4),null);
var v = cljs.core.nth.call(null,vec__9830,(5),null);
if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d))){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);
var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__9833,p__9834){
var vec__9835 = p__9833;
var d1 = cljs.core.nth.call(null,vec__9835,(0),null);
var _ = cljs.core.nth.call(null,vec__9835,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__9835,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__9835,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__9835,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__9835,(5),null);
var prev = vec__9835;
var vec__9838 = p__9834;
var d2 = cljs.core.nth.call(null,vec__9838,(0),null);
var o = cljs.core.nth.call(null,vec__9838,(1),null);
var h = cljs.core.nth.call(null,vec__9838,(2),null);
var l = cljs.core.nth.call(null,vec__9838,(3),null);
var c = cljs.core.nth.call(null,vec__9838,(4),null);
var v = cljs.core.nth.call(null,vec__9838,(5),null);
var curr = vec__9838;
if(((typeof d1 === 'string') && (typeof d2 === 'string'))){
var offset = (parseInt(d2) - parseInt(d1));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)].join(''),o,h,l,c,v], null);
} else {
return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));
var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__9841,p__9842){
var vec__9843 = p__9841;
var d1 = cljs.core.nth.call(null,vec__9843,(0),null);
var _ = cljs.core.nth.call(null,vec__9843,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__9843,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__9843,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__9843,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__9843,(5),null);
var prev = vec__9843;
var vec__9846 = p__9842;
var d2 = cljs.core.nth.call(null,vec__9846,(0),null);
var o = cljs.core.nth.call(null,vec__9846,(1),null);
var h = cljs.core.nth.call(null,vec__9846,(2),null);
var l = cljs.core.nth.call(null,vec__9846,(3),null);
var c = cljs.core.nth.call(null,vec__9846,(4),null);
var v = cljs.core.nth.call(null,vec__9846,(5),null);
var curr = vec__9846;
if(((typeof d1 === 'number') && (typeof d2 === 'string'))){
var n = parseInt(d2);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else {
return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));
var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__9849){
var vec__9850 = p__9849;
var d = cljs.core.nth.call(null,vec__9850,(0),null);
var o = cljs.core.nth.call(null,vec__9850,(1),null);
var h = cljs.core.nth.call(null,vec__9850,(2),null);
var l = cljs.core.nth.call(null,vec__9850,(3),null);
var c = cljs.core.nth.call(null,vec__9850,(4),null);
var v = cljs.core.nth.call(null,vec__9850,(5),null);
return true;
});})(pass1,pass2,pass3))
,pass3);
var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__9853){
var vec__9854 = p__9853;
var d = cljs.core.nth.call(null,vec__9854,(0),null);
var o = cljs.core.nth.call(null,vec__9854,(1),null);
var h = cljs.core.nth.call(null,vec__9854,(2),null);
var l = cljs.core.nth.call(null,vec__9854,(3),null);
var c = cljs.core.nth.call(null,vec__9854,(4),null);
var v = cljs.core.nth.call(null,vec__9854,(5),null);
var date = (new Date((d * (1000))));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);
return pass5;
});
stock.tool.get_goog_stock_prices_old = (function stock$tool$get_goog_stock_prices_old(id,range){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_9886){
var state_val_9887 = (state_9886[(1)]);
if((state_val_9887 === (1))){
var inst_9863 = stock.tool.goog_finance_getprices_url.call(null,id,range);
var inst_9864 = stock.tool.content.call(null,inst_9863);
var state_9886__$1 = state_9886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9886__$1,(2),inst_9864);
} else {
if((state_val_9887 === (2))){
var inst_9866 = (state_9886[(2)]);
var inst_9867 = cljs.core.nth.call(null,inst_9866,(0),null);
var inst_9868 = cljs.core.nth.call(null,inst_9866,(1),null);
var inst_9869 = stock.tool.todayPrice.call(null,id);
var state_9886__$1 = (function (){var statearr_9888 = state_9886;
(statearr_9888[(7)] = inst_9868);

(statearr_9888[(8)] = inst_9867);

return statearr_9888;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9886__$1,(3),inst_9869);
} else {
if((state_val_9887 === (3))){
var inst_9868 = (state_9886[(7)]);
var inst_9867 = (state_9886[(8)]);
var inst_9871 = (state_9886[(2)]);
var inst_9872 = cljs.core.nth.call(null,inst_9871,(0),null);
var inst_9873 = cljs.core.nth.call(null,inst_9871,(1),null);
var inst_9874 = stock.tool.parse_getprices.call(null,inst_9868);
var inst_9875 = stock.tool.format_getprices.call(null,(86400),inst_9874);
var inst_9876 = cljs.core.reverse.call(null,inst_9875);
var inst_9877 = stock.tool.combineToday.call(null,inst_9873,inst_9876);
var inst_9878 = cljs.core.PersistentVector.EMPTY_NODE;
var state_9886__$1 = (function (){var statearr_9889 = state_9886;
(statearr_9889[(9)] = inst_9872);

(statearr_9889[(10)] = inst_9877);

(statearr_9889[(11)] = inst_9878);

return statearr_9889;
})();
if(cljs.core.truth_(inst_9867)){
var statearr_9890_9898 = state_9886__$1;
(statearr_9890_9898[(1)] = (4));

} else {
var statearr_9891_9899 = state_9886__$1;
(statearr_9891_9899[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (4))){
var inst_9867 = (state_9886[(8)]);
var state_9886__$1 = state_9886;
var statearr_9892_9900 = state_9886__$1;
(statearr_9892_9900[(2)] = inst_9867);

(statearr_9892_9900[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (5))){
var inst_9872 = (state_9886[(9)]);
var state_9886__$1 = state_9886;
var statearr_9893_9901 = state_9886__$1;
(statearr_9893_9901[(2)] = inst_9872);

(statearr_9893_9901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9887 === (6))){
var inst_9877 = (state_9886[(10)]);
var inst_9878 = (state_9886[(11)]);
var inst_9882 = (state_9886[(2)]);
var inst_9883 = [inst_9882,inst_9877];
var inst_9884 = (new cljs.core.PersistentVector(null,2,(5),inst_9878,inst_9883,null));
var state_9886__$1 = state_9886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9886__$1,inst_9884);
} else {
return null;
}
}
}
}
}
}
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var stock$tool$get_goog_stock_prices_old_$_state_machine__3172__auto__ = null;
var stock$tool$get_goog_stock_prices_old_$_state_machine__3172__auto____0 = (function (){
var statearr_9894 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9894[(0)] = stock$tool$get_goog_stock_prices_old_$_state_machine__3172__auto__);

(statearr_9894[(1)] = (1));

return statearr_9894;
});
var stock$tool$get_goog_stock_prices_old_$_state_machine__3172__auto____1 = (function (state_9886){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_9886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e9895){if((e9895 instanceof Object)){
var ex__3175__auto__ = e9895;
var statearr_9896_9902 = state_9886;
(statearr_9896_9902[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9903 = state_9886;
state_9886 = G__9903;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
stock$tool$get_goog_stock_prices_old_$_state_machine__3172__auto__ = function(state_9886){
switch(arguments.length){
case 0:
return stock$tool$get_goog_stock_prices_old_$_state_machine__3172__auto____0.call(this);
case 1:
return stock$tool$get_goog_stock_prices_old_$_state_machine__3172__auto____1.call(this,state_9886);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$get_goog_stock_prices_old_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$get_goog_stock_prices_old_$_state_machine__3172__auto____0;
stock$tool$get_goog_stock_prices_old_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$get_goog_stock_prices_old_$_state_machine__3172__auto____1;
return stock$tool$get_goog_stock_prices_old_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_9897 = f__3262__auto__.call(null);
(statearr_9897[(6)] = c__3261__auto__);

return statearr_9897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});
stock.tool.goog_finance_historical_url = (function stock$tool$goog_finance_historical_url(id,startdate,start,num){
return ["https://www.google.com/finance/historical?q=TPE:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"&startdate=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate),"&start=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start),"&num=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join('');
});
stock.tool.parse_historical = (function stock$tool$parse_historical(content){
var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,["<tr>","<td class=\"lm\">(\\D{3} \\d+, \\d+)","<td class=\"rgt\">(\\d+\\.\\d+)","<td class=\"rgt\">(\\d+\\.\\d+)","<td class=\"rgt\">(\\d+\\.\\d+)","<td class=\"rgt\">(\\d+\\.\\d+)","<td class=\"rgt rm\">([\\d,]+)"].join('')),content.replace(/\n/,""));
var iter__4292__auto__ = ((function (infos){
return (function stock$tool$parse_historical_$_iter__9904(s__9905){
return (new cljs.core.LazySeq(null,((function (infos){
return (function (){
var s__9905__$1 = s__9905;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__9905__$1);
if(temp__5457__auto__){
var s__9905__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9905__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__9905__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__9907 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__9906 = (0);
while(true){
if((i__9906 < size__4291__auto__)){
var vec__9908 = cljs.core._nth.call(null,c__4290__auto__,i__9906);
var _ = cljs.core.nth.call(null,vec__9908,(0),null);
var date = cljs.core.nth.call(null,vec__9908,(1),null);
var open = cljs.core.nth.call(null,vec__9908,(2),null);
var high = cljs.core.nth.call(null,vec__9908,(3),null);
var low = cljs.core.nth.call(null,vec__9908,(4),null);
var close = cljs.core.nth.call(null,vec__9908,(5),null);
var volume = cljs.core.nth.call(null,vec__9908,(6),null);
cljs.core.chunk_append.call(null,b__9907,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume.replace(/,/,""))], null));

var G__9914 = (i__9906 + (1));
i__9906 = G__9914;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9907),stock$tool$parse_historical_$_iter__9904.call(null,cljs.core.chunk_rest.call(null,s__9905__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9907),null);
}
} else {
var vec__9911 = cljs.core.first.call(null,s__9905__$2);
var _ = cljs.core.nth.call(null,vec__9911,(0),null);
var date = cljs.core.nth.call(null,vec__9911,(1),null);
var open = cljs.core.nth.call(null,vec__9911,(2),null);
var high = cljs.core.nth.call(null,vec__9911,(3),null);
var low = cljs.core.nth.call(null,vec__9911,(4),null);
var close = cljs.core.nth.call(null,vec__9911,(5),null);
var volume = cljs.core.nth.call(null,vec__9911,(6),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume.replace(/,/,""))], null),stock$tool$parse_historical_$_iter__9904.call(null,cljs.core.rest.call(null,s__9905__$2)));
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
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_9948){
var state_val_9949 = (state_9948[(1)]);
if((state_val_9949 === (1))){
var inst_9918 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);
var inst_9919 = stock.tool.content.call(null,inst_9918);
var state_9948__$1 = state_9948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9948__$1,(2),inst_9919);
} else {
if((state_val_9949 === (2))){
var inst_9922 = (state_9948[(7)]);
var inst_9921 = (state_9948[(2)]);
var inst_9922__$1 = cljs.core.nth.call(null,inst_9921,(0),null);
var inst_9923 = cljs.core.nth.call(null,inst_9921,(1),null);
var state_9948__$1 = (function (){var statearr_9950 = state_9948;
(statearr_9950[(8)] = inst_9923);

(statearr_9950[(7)] = inst_9922__$1);

return statearr_9950;
})();
if(cljs.core.truth_(inst_9922__$1)){
var statearr_9951_9964 = state_9948__$1;
(statearr_9951_9964[(1)] = (3));

} else {
var statearr_9952_9965 = state_9948__$1;
(statearr_9952_9965[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9949 === (3))){
var inst_9922 = (state_9948[(7)]);
var inst_9925 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9926 = [inst_9922];
var inst_9927 = (new cljs.core.PersistentVector(null,1,(5),inst_9925,inst_9926,null));
var state_9948__$1 = state_9948;
var statearr_9953_9966 = state_9948__$1;
(statearr_9953_9966[(2)] = inst_9927);

(statearr_9953_9966[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9949 === (4))){
var inst_9923 = (state_9948[(8)]);
var inst_9929 = (state_9948[(9)]);
var inst_9929__$1 = stock.tool.parse_historical.call(null,inst_9923);
var inst_9930 = cljs.core.count.call(null,inst_9929__$1);
var inst_9931 = cljs.core._EQ_.call(null,num,inst_9930);
var state_9948__$1 = (function (){var statearr_9954 = state_9948;
(statearr_9954[(9)] = inst_9929__$1);

return statearr_9954;
})();
if(inst_9931){
var statearr_9955_9967 = state_9948__$1;
(statearr_9955_9967[(1)] = (6));

} else {
var statearr_9956_9968 = state_9948__$1;
(statearr_9956_9968[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9949 === (5))){
var inst_9946 = (state_9948[(2)]);
var state_9948__$1 = state_9948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9948__$1,inst_9946);
} else {
if((state_val_9949 === (6))){
var inst_9929 = (state_9948[(9)]);
var inst_9933 = cljs.core.concat.call(null,all,inst_9929);
var inst_9934 = (start + num);
var inst_9935 = stock.tool.goog_historical_info.call(null,inst_9933,id,startdate,inst_9934,num);
var state_9948__$1 = state_9948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9948__$1,(9),inst_9935);
} else {
if((state_val_9949 === (7))){
var inst_9929 = (state_9948[(9)]);
var inst_9939 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9940 = cljs.core.concat.call(null,all,inst_9929);
var inst_9941 = [null,inst_9940];
var inst_9942 = (new cljs.core.PersistentVector(null,2,(5),inst_9939,inst_9941,null));
var state_9948__$1 = state_9948;
var statearr_9957_9969 = state_9948__$1;
(statearr_9957_9969[(2)] = inst_9942);

(statearr_9957_9969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9949 === (8))){
var inst_9944 = (state_9948[(2)]);
var state_9948__$1 = state_9948;
var statearr_9958_9970 = state_9948__$1;
(statearr_9958_9970[(2)] = inst_9944);

(statearr_9958_9970[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9949 === (9))){
var inst_9937 = (state_9948[(2)]);
var state_9948__$1 = state_9948;
var statearr_9959_9971 = state_9948__$1;
(statearr_9959_9971[(2)] = inst_9937);

(statearr_9959_9971[(1)] = (8));


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
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var stock$tool$goog_historical_info_$_state_machine__3172__auto__ = null;
var stock$tool$goog_historical_info_$_state_machine__3172__auto____0 = (function (){
var statearr_9960 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9960[(0)] = stock$tool$goog_historical_info_$_state_machine__3172__auto__);

(statearr_9960[(1)] = (1));

return statearr_9960;
});
var stock$tool$goog_historical_info_$_state_machine__3172__auto____1 = (function (state_9948){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_9948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e9961){if((e9961 instanceof Object)){
var ex__3175__auto__ = e9961;
var statearr_9962_9972 = state_9948;
(statearr_9962_9972[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9973 = state_9948;
state_9948 = G__9973;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
stock$tool$goog_historical_info_$_state_machine__3172__auto__ = function(state_9948){
switch(arguments.length){
case 0:
return stock$tool$goog_historical_info_$_state_machine__3172__auto____0.call(this);
case 1:
return stock$tool$goog_historical_info_$_state_machine__3172__auto____1.call(this,state_9948);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$goog_historical_info_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$goog_historical_info_$_state_machine__3172__auto____0;
stock$tool$goog_historical_info_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$goog_historical_info_$_state_machine__3172__auto____1;
return stock$tool$goog_historical_info_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_9963 = f__3262__auto__.call(null);
(statearr_9963[(6)] = c__3261__auto__);

return statearr_9963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});
stock.tool.getUrl = (function stock$tool$getUrl(url){
var retc = cljs.core.async.chan.call(null);
var errc = cljs.core.async.chan.call(null);
$.ajax((function (){var obj9975 = {"url":url,"method":"GET","success":((function (retc,errc){
return (function (data){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__,retc,errc){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__,retc,errc){
return (function (state_9991){
var state_val_9992 = (state_9991[(1)]);
if((state_val_9992 === (1))){
var inst_9976 = (state_9991[(7)]);
var inst_9976__$1 = (data[(0)]);
var inst_9977 = (data[(1)]);
var state_9991__$1 = (function (){var statearr_9993 = state_9991;
(statearr_9993[(8)] = inst_9977);

(statearr_9993[(7)] = inst_9976__$1);

return statearr_9993;
})();
if(cljs.core.truth_(inst_9976__$1)){
var statearr_9994_10016 = state_9991__$1;
(statearr_9994_10016[(1)] = (2));

} else {
var statearr_9995_10017 = state_9991__$1;
(statearr_9995_10017[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9992 === (2))){
var inst_9976 = (state_9991[(7)]);
var state_9991__$1 = state_9991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9991__$1,(5),errc,inst_9976);
} else {
if((state_val_9992 === (3))){
var inst_9977 = (state_9991[(8)]);
var state_9991__$1 = state_9991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9991__$1,(6),retc,inst_9977);
} else {
if((state_val_9992 === (4))){
var inst_9989 = (state_9991[(2)]);
var state_9991__$1 = state_9991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9991__$1,inst_9989);
} else {
if((state_val_9992 === (5))){
var inst_9980 = (state_9991[(2)]);
var inst_9981 = cljs.core.async.close_BANG_.call(null,retc);
var inst_9982 = cljs.core.async.close_BANG_.call(null,errc);
var state_9991__$1 = (function (){var statearr_9996 = state_9991;
(statearr_9996[(9)] = inst_9981);

(statearr_9996[(10)] = inst_9980);

return statearr_9996;
})();
var statearr_9997_10018 = state_9991__$1;
(statearr_9997_10018[(2)] = inst_9982);

(statearr_9997_10018[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9992 === (6))){
var inst_9985 = (state_9991[(2)]);
var inst_9986 = cljs.core.async.close_BANG_.call(null,retc);
var inst_9987 = cljs.core.async.close_BANG_.call(null,errc);
var state_9991__$1 = (function (){var statearr_9998 = state_9991;
(statearr_9998[(11)] = inst_9986);

(statearr_9998[(12)] = inst_9985);

return statearr_9998;
})();
var statearr_9999_10019 = state_9991__$1;
(statearr_9999_10019[(2)] = inst_9987);

(statearr_9999_10019[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__3261__auto__,retc,errc))
;
return ((function (switch__3171__auto__,c__3261__auto__,retc,errc){
return (function() {
var stock$tool$getUrl_$_state_machine__3172__auto__ = null;
var stock$tool$getUrl_$_state_machine__3172__auto____0 = (function (){
var statearr_10000 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10000[(0)] = stock$tool$getUrl_$_state_machine__3172__auto__);

(statearr_10000[(1)] = (1));

return statearr_10000;
});
var stock$tool$getUrl_$_state_machine__3172__auto____1 = (function (state_9991){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_9991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10001){if((e10001 instanceof Object)){
var ex__3175__auto__ = e10001;
var statearr_10002_10020 = state_9991;
(statearr_10002_10020[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10021 = state_9991;
state_9991 = G__10021;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
stock$tool$getUrl_$_state_machine__3172__auto__ = function(state_9991){
switch(arguments.length){
case 0:
return stock$tool$getUrl_$_state_machine__3172__auto____0.call(this);
case 1:
return stock$tool$getUrl_$_state_machine__3172__auto____1.call(this,state_9991);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$getUrl_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$getUrl_$_state_machine__3172__auto____0;
stock$tool$getUrl_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$getUrl_$_state_machine__3172__auto____1;
return stock$tool$getUrl_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__,retc,errc))
})();
var state__3263__auto__ = (function (){var statearr_10003 = f__3262__auto__.call(null);
(statearr_10003[(6)] = c__3261__auto__);

return statearr_10003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__,retc,errc))
);

return c__3261__auto__;
});})(retc,errc))
,"error":((function (retc,errc){
return (function (xhr,_,err){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__,retc,errc){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__,retc,errc){
return (function (state_10009){
var state_val_10010 = (state_10009[(1)]);
if((state_val_10010 === (1))){
var state_10009__$1 = state_10009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10009__$1,(2),errc,err);
} else {
if((state_val_10010 === (2))){
var inst_10005 = (state_10009[(2)]);
var inst_10006 = cljs.core.async.close_BANG_.call(null,retc);
var inst_10007 = cljs.core.async.close_BANG_.call(null,errc);
var state_10009__$1 = (function (){var statearr_10011 = state_10009;
(statearr_10011[(7)] = inst_10006);

(statearr_10011[(8)] = inst_10005);

return statearr_10011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10009__$1,inst_10007);
} else {
return null;
}
}
});})(c__3261__auto__,retc,errc))
;
return ((function (switch__3171__auto__,c__3261__auto__,retc,errc){
return (function() {
var stock$tool$getUrl_$_state_machine__3172__auto__ = null;
var stock$tool$getUrl_$_state_machine__3172__auto____0 = (function (){
var statearr_10012 = [null,null,null,null,null,null,null,null,null];
(statearr_10012[(0)] = stock$tool$getUrl_$_state_machine__3172__auto__);

(statearr_10012[(1)] = (1));

return statearr_10012;
});
var stock$tool$getUrl_$_state_machine__3172__auto____1 = (function (state_10009){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10013){if((e10013 instanceof Object)){
var ex__3175__auto__ = e10013;
var statearr_10014_10022 = state_10009;
(statearr_10014_10022[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10023 = state_10009;
state_10009 = G__10023;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
stock$tool$getUrl_$_state_machine__3172__auto__ = function(state_10009){
switch(arguments.length){
case 0:
return stock$tool$getUrl_$_state_machine__3172__auto____0.call(this);
case 1:
return stock$tool$getUrl_$_state_machine__3172__auto____1.call(this,state_10009);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$getUrl_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$getUrl_$_state_machine__3172__auto____0;
stock$tool$getUrl_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$getUrl_$_state_machine__3172__auto____1;
return stock$tool$getUrl_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__,retc,errc))
})();
var state__3263__auto__ = (function (){var statearr_10015 = f__3262__auto__.call(null);
(statearr_10015[(6)] = c__3261__auto__);

return statearr_10015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__,retc,errc))
);

return c__3261__auto__;
});})(retc,errc))
};
return obj9975;
})());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [retc,errc], null);
});
stock.tool.get_goog_stock_prices2 = (function stock$tool$get_goog_stock_prices2(id,range){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_10040){
var state_val_10041 = (state_10040[(1)]);
if((state_val_10041 === (1))){
var inst_10024 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10025 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10026 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10027 = ["2018/3",(10),(12),(6),(8),(10)];
var inst_10028 = (new cljs.core.PersistentVector(null,6,(5),inst_10026,inst_10027,null));
var inst_10029 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10030 = ["2018/3",(12),(14),(8),(8),(6)];
var inst_10031 = (new cljs.core.PersistentVector(null,6,(5),inst_10029,inst_10030,null));
var inst_10032 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10033 = ["2018/3",(12),(14),(8),(8),(16)];
var inst_10034 = (new cljs.core.PersistentVector(null,6,(5),inst_10032,inst_10033,null));
var inst_10035 = [inst_10028,inst_10031,inst_10034];
var inst_10036 = (new cljs.core.PersistentVector(null,3,(5),inst_10025,inst_10035,null));
var inst_10037 = [null,inst_10036];
var inst_10038 = (new cljs.core.PersistentVector(null,2,(5),inst_10024,inst_10037,null));
var state_10040__$1 = state_10040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10040__$1,inst_10038);
} else {
return null;
}
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var stock$tool$get_goog_stock_prices2_$_state_machine__3172__auto__ = null;
var stock$tool$get_goog_stock_prices2_$_state_machine__3172__auto____0 = (function (){
var statearr_10042 = [null,null,null,null,null,null,null];
(statearr_10042[(0)] = stock$tool$get_goog_stock_prices2_$_state_machine__3172__auto__);

(statearr_10042[(1)] = (1));

return statearr_10042;
});
var stock$tool$get_goog_stock_prices2_$_state_machine__3172__auto____1 = (function (state_10040){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10043){if((e10043 instanceof Object)){
var ex__3175__auto__ = e10043;
var statearr_10044_10046 = state_10040;
(statearr_10044_10046[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10047 = state_10040;
state_10040 = G__10047;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
stock$tool$get_goog_stock_prices2_$_state_machine__3172__auto__ = function(state_10040){
switch(arguments.length){
case 0:
return stock$tool$get_goog_stock_prices2_$_state_machine__3172__auto____0.call(this);
case 1:
return stock$tool$get_goog_stock_prices2_$_state_machine__3172__auto____1.call(this,state_10040);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$get_goog_stock_prices2_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$get_goog_stock_prices2_$_state_machine__3172__auto____0;
stock$tool$get_goog_stock_prices2_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$get_goog_stock_prices2_$_state_machine__3172__auto____1;
return stock$tool$get_goog_stock_prices2_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_10045 = f__3262__auto__.call(null);
(statearr_10045[(6)] = c__3261__auto__);

return statearr_10045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});
stock.tool.get_goog_stock_prices = (function stock$tool$get_goog_stock_prices(id,range){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__){
return (function (state_10092){
var state_val_10093 = (state_10092[(1)]);
if((state_val_10093 === (1))){
var inst_10057 = (state_10092[(7)]);
var inst_10055 = (state_10092[(8)]);
var inst_10056 = (state_10092[(9)]);
var inst_10054 = ["/fn/stockInfo?symbol=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"&chartLast=365"].join('');
var inst_10055__$1 = stock.tool.getUrl.call(null,inst_10054);
var inst_10056__$1 = cljs.core.nth.call(null,inst_10055__$1,(0),null);
var inst_10057__$1 = cljs.core.nth.call(null,inst_10055__$1,(1),null);
var inst_10058 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10059 = [inst_10056__$1,inst_10057__$1];
var inst_10060 = (new cljs.core.PersistentVector(null,2,(5),inst_10058,inst_10059,null));
var state_10092__$1 = (function (){var statearr_10094 = state_10092;
(statearr_10094[(7)] = inst_10057__$1);

(statearr_10094[(8)] = inst_10055__$1);

(statearr_10094[(9)] = inst_10056__$1);

return statearr_10094;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10092__$1,(2),inst_10060);
} else {
if((state_val_10093 === (2))){
var inst_10062 = (state_10092[(10)]);
var inst_10064 = (state_10092[(11)]);
var inst_10056 = (state_10092[(9)]);
var inst_10062__$1 = (state_10092[(2)]);
var inst_10063 = cljs.core.nth.call(null,inst_10062__$1,(0),null);
var inst_10064__$1 = cljs.core.nth.call(null,inst_10062__$1,(1),null);
var inst_10068 = cljs.core._EQ_.call(null,inst_10056,inst_10064__$1);
var state_10092__$1 = (function (){var statearr_10095 = state_10092;
(statearr_10095[(10)] = inst_10062__$1);

(statearr_10095[(11)] = inst_10064__$1);

(statearr_10095[(12)] = inst_10063);

return statearr_10095;
})();
if(inst_10068){
var statearr_10096_10108 = state_10092__$1;
(statearr_10096_10108[(1)] = (3));

} else {
var statearr_10097_10109 = state_10092__$1;
(statearr_10097_10109[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10093 === (3))){
var inst_10057 = (state_10092[(7)]);
var inst_10062 = (state_10092[(10)]);
var inst_10064 = (state_10092[(11)]);
var inst_10055 = (state_10092[(8)]);
var inst_10063 = (state_10092[(12)]);
var inst_10056 = (state_10092[(9)]);
var inst_10070 = (function (){var vec__10048 = inst_10055;
var stockInfoc = inst_10056;
var errc = inst_10057;
var vec__10051 = inst_10062;
var v = inst_10063;
var c = inst_10064;
var pred__10065 = cljs.core._EQ_;
var expr__10066 = inst_10064;
return ((function (vec__10048,stockInfoc,errc,vec__10051,v,c,pred__10065,expr__10066,inst_10057,inst_10062,inst_10064,inst_10055,inst_10063,inst_10056,state_val_10093,c__3261__auto__){
return (function (obj){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.get,obj),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["date","open","high","low","close","volume"], null));
});
;})(vec__10048,stockInfoc,errc,vec__10051,v,c,pred__10065,expr__10066,inst_10057,inst_10062,inst_10064,inst_10055,inst_10063,inst_10056,state_val_10093,c__3261__auto__))
})();
var inst_10071 = cljs.core.js__GT_clj.call(null,inst_10063);
var inst_10072 = cljs.core.map.call(null,inst_10070,inst_10071);
var inst_10073 = cljs.core.reverse.call(null,inst_10072);
var inst_10074 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10075 = [null,inst_10073];
var inst_10076 = (new cljs.core.PersistentVector(null,2,(5),inst_10074,inst_10075,null));
var state_10092__$1 = state_10092;
var statearr_10098_10110 = state_10092__$1;
(statearr_10098_10110[(2)] = inst_10076);

(statearr_10098_10110[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10093 === (4))){
var inst_10057 = (state_10092[(7)]);
var inst_10064 = (state_10092[(11)]);
var inst_10078 = cljs.core._EQ_.call(null,inst_10057,inst_10064);
var state_10092__$1 = state_10092;
if(inst_10078){
var statearr_10099_10111 = state_10092__$1;
(statearr_10099_10111[(1)] = (6));

} else {
var statearr_10100_10112 = state_10092__$1;
(statearr_10100_10112[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10093 === (5))){
var inst_10090 = (state_10092[(2)]);
var state_10092__$1 = state_10092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10092__$1,inst_10090);
} else {
if((state_val_10093 === (6))){
var inst_10063 = (state_10092[(12)]);
var inst_10080 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10081 = [inst_10063,null];
var inst_10082 = (new cljs.core.PersistentVector(null,2,(5),inst_10080,inst_10081,null));
var state_10092__$1 = state_10092;
var statearr_10101_10113 = state_10092__$1;
(statearr_10101_10113[(2)] = inst_10082);

(statearr_10101_10113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10093 === (7))){
var inst_10064 = (state_10092[(11)]);
var inst_10084 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_10064)].join('');
var inst_10085 = (new Error(inst_10084));
var inst_10086 = (function(){throw inst_10085})();
var state_10092__$1 = state_10092;
var statearr_10102_10114 = state_10092__$1;
(statearr_10102_10114[(2)] = inst_10086);

(statearr_10102_10114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10093 === (8))){
var inst_10088 = (state_10092[(2)]);
var state_10092__$1 = state_10092;
var statearr_10103_10115 = state_10092__$1;
(statearr_10103_10115[(2)] = inst_10088);

(statearr_10103_10115[(1)] = (5));


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
});})(c__3261__auto__))
;
return ((function (switch__3171__auto__,c__3261__auto__){
return (function() {
var stock$tool$get_goog_stock_prices_$_state_machine__3172__auto__ = null;
var stock$tool$get_goog_stock_prices_$_state_machine__3172__auto____0 = (function (){
var statearr_10104 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10104[(0)] = stock$tool$get_goog_stock_prices_$_state_machine__3172__auto__);

(statearr_10104[(1)] = (1));

return statearr_10104;
});
var stock$tool$get_goog_stock_prices_$_state_machine__3172__auto____1 = (function (state_10092){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_10092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e10105){if((e10105 instanceof Object)){
var ex__3175__auto__ = e10105;
var statearr_10106_10116 = state_10092;
(statearr_10106_10116[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10117 = state_10092;
state_10092 = G__10117;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
stock$tool$get_goog_stock_prices_$_state_machine__3172__auto__ = function(state_10092){
switch(arguments.length){
case 0:
return stock$tool$get_goog_stock_prices_$_state_machine__3172__auto____0.call(this);
case 1:
return stock$tool$get_goog_stock_prices_$_state_machine__3172__auto____1.call(this,state_10092);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$get_goog_stock_prices_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$get_goog_stock_prices_$_state_machine__3172__auto____0;
stock$tool$get_goog_stock_prices_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$get_goog_stock_prices_$_state_machine__3172__auto____1;
return stock$tool$get_goog_stock_prices_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__))
})();
var state__3263__auto__ = (function (){var statearr_10107 = f__3262__auto__.call(null);
(statearr_10107[(6)] = c__3261__auto__);

return statearr_10107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__))
);

return c__3261__auto__;
});
stock.tool.date = (function stock$tool$date(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.date,kline);
} else {
var vec__10118 = kline;
var date = cljs.core.nth.call(null,vec__10118,(0),null);
var _ = cljs.core.nth.call(null,vec__10118,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__10118,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__10118,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__10118,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__10118,(5),null);
return date;
}
});
stock.tool.high = (function stock$tool$high(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.high,kline);
} else {
var vec__10121 = kline;
var _ = cljs.core.nth.call(null,vec__10121,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10121,(1),null);
var high = cljs.core.nth.call(null,vec__10121,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__10121,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__10121,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__10121,(5),null);
return high;
}
});
stock.tool.open = (function stock$tool$open(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.open,kline);
} else {
var vec__10124 = kline;
var _ = cljs.core.nth.call(null,vec__10124,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10124,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__10124,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__10124,(3),null);
var open = cljs.core.nth.call(null,vec__10124,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__10124,(5),null);
return open;
}
});
stock.tool.close = (function stock$tool$close(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.close,kline);
} else {
var vec__10127 = kline;
var _ = cljs.core.nth.call(null,vec__10127,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10127,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__10127,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__10127,(3),null);
var close = cljs.core.nth.call(null,vec__10127,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__10127,(5),null);
return close;
}
});
stock.tool.low = (function stock$tool$low(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.low,kline);
} else {
var vec__10130 = kline;
var _ = cljs.core.nth.call(null,vec__10130,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10130,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__10130,(2),null);
var low = cljs.core.nth.call(null,vec__10130,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__10130,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__10130,(5),null);
return low;
}
});
stock.tool.volume = (function stock$tool$volume(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.volume,kline);
} else {
var vec__10133 = kline;
var _ = cljs.core.nth.call(null,vec__10133,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10133,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__10133,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__10133,(3),null);
var ___$4 = cljs.core.nth.call(null,vec__10133,(4),null);
var volume = cljs.core.nth.call(null,vec__10133,(5),null);
return volume;
}
});
stock.tool.mid = (function stock$tool$mid(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.mid,kline);
} else {
var vec__10136 = kline;
var _ = cljs.core.nth.call(null,vec__10136,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10136,(1),null);
var high = cljs.core.nth.call(null,vec__10136,(2),null);
var low = cljs.core.nth.call(null,vec__10136,(3),null);
var ___$2 = cljs.core.nth.call(null,vec__10136,(4),null);
var ___$3 = cljs.core.nth.call(null,vec__10136,(5),null);
return ((high + low) / (2));
}
});
stock.tool.typical = (function stock$tool$typical(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.typical,kline);
} else {
var vec__10139 = kline;
var _ = cljs.core.nth.call(null,vec__10139,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10139,(1),null);
var high = cljs.core.nth.call(null,vec__10139,(2),null);
var low = cljs.core.nth.call(null,vec__10139,(3),null);
var close = cljs.core.nth.call(null,vec__10139,(4),null);
var ___$2 = cljs.core.nth.call(null,vec__10139,(5),null);
return (((high + low) + close) / (3));
}
});

//# sourceMappingURL=tool.js.map
