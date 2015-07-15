// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock4');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
test.stock4.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__44513_SHARP_){return cljs.core.nth.call(null,p1__44513_SHARP_,(2));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__44514_SHARP_){return cljs.core.nth.call(null,p1__44514_SHARP_,(3));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock4.draw_line = (function draw_line(ctx,w,h,kline){var vec__44524 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__44524,(0),null);var min_v = cljs.core.nth.call(null,vec__44524,(1),null);var offset_v = cljs.core.nth.call(null,vec__44524,(2),null);var offset_x = cljs.core.nth.call(null,vec__44524,(3),null);var pos_y = cljs.core.nth.call(null,vec__44524,(4),null);var seq__44525 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__44524,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__44533__delegate = function (args){return args;
};
var G__44533 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__44533__delegate.call(this,args);};
G__44533.cljs$lang$maxFixedArity = 0;
G__44533.cljs$lang$applyTo = (function (arglist__44534){
var args = cljs.core.seq(arglist__44534);
return G__44533__delegate(args);
});
G__44533.cljs$core$IFn$_invoke$arity$variadic = G__44533__delegate;
return G__44533;
})()
;})(vec__44524,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__44526 = null;var count__44527 = (0);var i__44528 = (0);while(true){
if((i__44528 < count__44527))
{var vec__44529 = cljs.core._nth.call(null,chunk__44526,i__44528);var idx = cljs.core.nth.call(null,vec__44529,(0),null);var vec__44530 = cljs.core.nth.call(null,vec__44529,(1),null);var date = cljs.core.nth.call(null,vec__44530,(0),null);var open = cljs.core.nth.call(null,vec__44530,(1),null);var high = cljs.core.nth.call(null,vec__44530,(2),null);var low = cljs.core.nth.call(null,vec__44530,(3),null);var close = cljs.core.nth.call(null,vec__44530,(4),null);var volume = cljs.core.nth.call(null,vec__44530,(5),null);(ctx["strokeStyle"] = "black");
(ctx["lineWidth"] = (2));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,low));
ctx.lineTo((idx * offset_x),pos_y.call(null,high));
ctx.stroke();
(ctx["strokeStyle"] = (((close > open))?"red":"black"));
(ctx["lineWidth"] = offset_x);
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,open));
ctx.lineTo((idx * offset_x),(pos_y.call(null,open) + (1)));
ctx.lineTo((idx * offset_x),pos_y.call(null,close));
ctx.stroke();
{
var G__44535 = seq__44525;
var G__44536 = chunk__44526;
var G__44537 = count__44527;
var G__44538 = (i__44528 + (1));
seq__44525 = G__44535;
chunk__44526 = G__44536;
count__44527 = G__44537;
i__44528 = G__44538;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__44525);if(temp__4126__auto__)
{var seq__44525__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44525__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__44525__$1);{
var G__44539 = cljs.core.chunk_rest.call(null,seq__44525__$1);
var G__44540 = c__4307__auto__;
var G__44541 = cljs.core.count.call(null,c__4307__auto__);
var G__44542 = (0);
seq__44525 = G__44539;
chunk__44526 = G__44540;
count__44527 = G__44541;
i__44528 = G__44542;
continue;
}
} else
{var vec__44531 = cljs.core.first.call(null,seq__44525__$1);var idx = cljs.core.nth.call(null,vec__44531,(0),null);var vec__44532 = cljs.core.nth.call(null,vec__44531,(1),null);var date = cljs.core.nth.call(null,vec__44532,(0),null);var open = cljs.core.nth.call(null,vec__44532,(1),null);var high = cljs.core.nth.call(null,vec__44532,(2),null);var low = cljs.core.nth.call(null,vec__44532,(3),null);var close = cljs.core.nth.call(null,vec__44532,(4),null);var volume = cljs.core.nth.call(null,vec__44532,(5),null);(ctx["strokeStyle"] = "black");
(ctx["lineWidth"] = (2));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,low));
ctx.lineTo((idx * offset_x),pos_y.call(null,high));
ctx.stroke();
(ctx["strokeStyle"] = (((close > open))?"red":"black"));
(ctx["lineWidth"] = offset_x);
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,open));
ctx.lineTo((idx * offset_x),(pos_y.call(null,open) + (1)));
ctx.lineTo((idx * offset_x),pos_y.call(null,close));
ctx.stroke();
{
var G__44543 = cljs.core.next.call(null,seq__44525__$1);
var G__44544 = null;
var G__44545 = (0);
var G__44546 = (0);
seq__44525 = G__44543;
chunk__44526 = G__44544;
count__44527 = G__44545;
i__44528 = G__44546;
continue;
}
}
} else
{return null;
}
}
break;
}
});
test.stock4.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__44550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__44550,(0),null);var h = cljs.core.nth.call(null,vec__44550,(1),null);return ((function (ctx,vec__44550,w,h){
return (function (p__44551){var map__44552 = p__44551;var map__44552__$1 = ((cljs.core.seq_QMARK_.call(null,map__44552))?cljs.core.apply.call(null,cljs.core.hash_map,map__44552):map__44552);var appctx = map__44552__$1;var kline = cljs.core.get.call(null,map__44552__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var avgs = cljs.core.get.call(null,map__44552__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var bias = cljs.core.get.call(null,map__44552__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));(ctx["fillStyle"] = "yellow");
ctx.fillRect((0),(0),w,h);
test.stock4.draw_line.call(null,ctx,w,h,kline);
return appctx;
});
;})(ctx,vec__44550,w,h))
});
test.stock4.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock4.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj44590 = {"url":"/proxy","dataType":"text","data":(function (){var obj44592 = {"url":url};return obj44592;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_44599){var state_val_44600 = (state_44599[(1)]);if((state_val_44600 === (2)))
{var inst_44596 = (state_44599[(2)]);var inst_44597 = cljs.core.async.close_BANG_.call(null,ret);var state_44599__$1 = (function (){var statearr_44601 = state_44599;(statearr_44601[(7)] = inst_44596);
return statearr_44601;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44599__$1,inst_44597);
} else
{if((state_val_44600 === (1)))
{var inst_44593 = [null,data];var inst_44594 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44593,null));var state_44599__$1 = state_44599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44599__$1,(2),ret,inst_44594);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44605 = [null,null,null,null,null,null,null,null];(statearr_44605[(0)] = state_machine__6188__auto__);
(statearr_44605[(1)] = (1));
return statearr_44605;
});
var state_machine__6188__auto____1 = (function (state_44599){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44599);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44606){if((e44606 instanceof Object))
{var ex__6191__auto__ = e44606;var statearr_44607_44625 = state_44599;(statearr_44607_44625[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44599);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44606;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44626 = state_44599;
state_44599 = G__44626;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44599){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_44608 = f__6203__auto__.call(null);(statearr_44608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_44608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_44615){var state_val_44616 = (state_44615[(1)]);if((state_val_44616 === (2)))
{var inst_44612 = (state_44615[(2)]);var inst_44613 = cljs.core.async.close_BANG_.call(null,ret);var state_44615__$1 = (function (){var statearr_44617 = state_44615;(statearr_44617[(7)] = inst_44612);
return statearr_44617;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44615__$1,inst_44613);
} else
{if((state_val_44616 === (1)))
{var inst_44609 = [err];var inst_44610 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44609,null));var state_44615__$1 = state_44615;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44615__$1,(2),ret,inst_44610);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44621 = [null,null,null,null,null,null,null,null];(statearr_44621[(0)] = state_machine__6188__auto__);
(statearr_44621[(1)] = (1));
return statearr_44621;
});
var state_machine__6188__auto____1 = (function (state_44615){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44615);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44622){if((e44622 instanceof Object))
{var ex__6191__auto__ = e44622;var statearr_44623_44627 = state_44615;(statearr_44623_44627[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44615);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44628 = state_44615;
state_44615 = G__44628;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44615){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_44624 = f__6203__auto__.call(null);(statearr_44624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_44624;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj44590;
})());
return ret;
});
test.stock4.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__44637(s__44638){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__44638__$1 = s__44638;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__44638__$1);if(temp__4126__auto__)
{var s__44638__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__44638__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__44638__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__44640 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__44639 = (0);while(true){
if((i__44639 < size__4275__auto__))
{var vec__44643 = cljs.core._nth.call(null,c__4274__auto__,i__44639);var _ = cljs.core.nth.call(null,vec__44643,(0),null);var date = cljs.core.nth.call(null,vec__44643,(1),null);var open = cljs.core.nth.call(null,vec__44643,(2),null);var high = cljs.core.nth.call(null,vec__44643,(3),null);var low = cljs.core.nth.call(null,vec__44643,(4),null);var close = cljs.core.nth.call(null,vec__44643,(5),null);var volume = cljs.core.nth.call(null,vec__44643,(6),null);cljs.core.chunk_append.call(null,b__44640,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__44645 = (i__44639 + (1));
i__44639 = G__44645;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44640),iter__44637.call(null,cljs.core.chunk_rest.call(null,s__44638__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44640),null);
}
} else
{var vec__44644 = cljs.core.first.call(null,s__44638__$2);var _ = cljs.core.nth.call(null,vec__44644,(0),null);var date = cljs.core.nth.call(null,vec__44644,(1),null);var open = cljs.core.nth.call(null,vec__44644,(2),null);var high = cljs.core.nth.call(null,vec__44644,(3),null);var low = cljs.core.nth.call(null,vec__44644,(4),null);var close = cljs.core.nth.call(null,vec__44644,(5),null);var volume = cljs.core.nth.call(null,vec__44644,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__44637.call(null,cljs.core.rest.call(null,s__44638__$2)));
}
} else
{return null;
}
break;
}
});})(infos))
,null,null));
});})(infos))
;return iter__4276__auto__.call(null,infos);
});
test.stock4.stock_info = (function stock_info(all,id,startdate,start,num){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_44723){var state_val_44724 = (state_44723[(1)]);if((state_val_44724 === (9)))
{var inst_44713 = (state_44723[(2)]);var state_44723__$1 = state_44723;var statearr_44725_44742 = state_44723__$1;(statearr_44725_44742[(2)] = inst_44713);
(statearr_44725_44742[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44724 === (8)))
{var inst_44719 = (state_44723[(2)]);var state_44723__$1 = state_44723;var statearr_44726_44743 = state_44723__$1;(statearr_44726_44743[(2)] = inst_44719);
(statearr_44726_44743[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44724 === (7)))
{var inst_44705 = (state_44723[(7)]);var inst_44715 = cljs.core.concat.call(null,all,inst_44705);var inst_44716 = [null,inst_44715];var inst_44717 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44716,null));var state_44723__$1 = state_44723;var statearr_44727_44744 = state_44723__$1;(statearr_44727_44744[(2)] = inst_44717);
(statearr_44727_44744[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44724 === (6)))
{var inst_44705 = (state_44723[(7)]);var inst_44709 = cljs.core.concat.call(null,all,inst_44705);var inst_44710 = (start + num);var inst_44711 = stock_info.call(null,inst_44709,id,startdate,inst_44710,num);var state_44723__$1 = state_44723;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44723__$1,(9),inst_44711);
} else
{if((state_val_44724 === (5)))
{var inst_44721 = (state_44723[(2)]);var state_44723__$1 = state_44723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44723__$1,inst_44721);
} else
{if((state_val_44724 === (4)))
{var inst_44700 = (state_44723[(8)]);var inst_44705 = (state_44723[(7)]);var inst_44705__$1 = test.stock4.parse_info.call(null,inst_44700);var inst_44706 = cljs.core.count.call(null,inst_44705__$1);var inst_44707 = cljs.core._EQ_.call(null,num,inst_44706);var state_44723__$1 = (function (){var statearr_44728 = state_44723;(statearr_44728[(7)] = inst_44705__$1);
return statearr_44728;
})();if(inst_44707)
{var statearr_44729_44745 = state_44723__$1;(statearr_44729_44745[(1)] = (6));
} else
{var statearr_44730_44746 = state_44723__$1;(statearr_44730_44746[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44724 === (3)))
{var inst_44699 = (state_44723[(9)]);var inst_44702 = [inst_44699];var inst_44703 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44702,null));var state_44723__$1 = state_44723;var statearr_44731_44747 = state_44723__$1;(statearr_44731_44747[(2)] = inst_44703);
(statearr_44731_44747[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44724 === (2)))
{var inst_44699 = (state_44723[(9)]);var inst_44698 = (state_44723[(2)]);var inst_44699__$1 = cljs.core.nth.call(null,inst_44698,(0),null);var inst_44700 = cljs.core.nth.call(null,inst_44698,(1),null);var state_44723__$1 = (function (){var statearr_44732 = state_44723;(statearr_44732[(8)] = inst_44700);
(statearr_44732[(9)] = inst_44699__$1);
return statearr_44732;
})();if(cljs.core.truth_(inst_44699__$1))
{var statearr_44733_44748 = state_44723__$1;(statearr_44733_44748[(1)] = (3));
} else
{var statearr_44734_44749 = state_44723__$1;(statearr_44734_44749[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44724 === (1)))
{var inst_44695 = test.stock4.stock_url.call(null,id,startdate,start,num);var inst_44696 = test.stock4.content.call(null,inst_44695);var state_44723__$1 = state_44723;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44723__$1,(2),inst_44696);
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
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44738 = [null,null,null,null,null,null,null,null,null,null];(statearr_44738[(0)] = state_machine__6188__auto__);
(statearr_44738[(1)] = (1));
return statearr_44738;
});
var state_machine__6188__auto____1 = (function (state_44723){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44723);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44739){if((e44739 instanceof Object))
{var ex__6191__auto__ = e44739;var statearr_44740_44750 = state_44723;(statearr_44740_44750[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44723);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44739;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44751 = state_44723;
state_44723 = G__44751;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44723){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_44741 = f__6203__auto__.call(null);(statearr_44741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_44741;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock4.average = (function average(cnt,kline){var group = cljs.core.take.call(null,cnt,kline);var vec__44760 = cljs.core.last.call(null,group);var date = cljs.core.nth.call(null,vec__44760,(0),null);var open = cljs.core.nth.call(null,vec__44760,(1),null);var _ = cljs.core.nth.call(null,vec__44760,(2),null);var ___$1 = cljs.core.nth.call(null,vec__44760,(3),null);var ___$2 = cljs.core.nth.call(null,vec__44760,(4),null);var ___$3 = cljs.core.nth.call(null,vec__44760,(5),null);var high = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__44760,date,open,_,___$1,___$2,___$3){
return (function (p__44762){var vec__44763 = p__44762;var ___$4 = cljs.core.nth.call(null,vec__44763,(0),null);var ___$5 = cljs.core.nth.call(null,vec__44763,(1),null);var high = cljs.core.nth.call(null,vec__44763,(2),null);var ___$6 = cljs.core.nth.call(null,vec__44763,(3),null);var ___$7 = cljs.core.nth.call(null,vec__44763,(4),null);var ___$8 = cljs.core.nth.call(null,vec__44763,(5),null);return high;
});})(group,vec__44760,date,open,_,___$1,___$2,___$3))
,group));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__44760,date,open,_,___$1,___$2,___$3,high){
return (function (p__44764){var vec__44765 = p__44764;var ___$4 = cljs.core.nth.call(null,vec__44765,(0),null);var ___$5 = cljs.core.nth.call(null,vec__44765,(1),null);var ___$6 = cljs.core.nth.call(null,vec__44765,(2),null);var low = cljs.core.nth.call(null,vec__44765,(3),null);var ___$7 = cljs.core.nth.call(null,vec__44765,(4),null);var ___$8 = cljs.core.nth.call(null,vec__44765,(5),null);return low;
});})(group,vec__44760,date,open,_,___$1,___$2,___$3,high))
,group));var vec__44761 = cljs.core.first.call(null,group);var ___$4 = cljs.core.nth.call(null,vec__44761,(0),null);var ___$5 = cljs.core.nth.call(null,vec__44761,(1),null);var ___$6 = cljs.core.nth.call(null,vec__44761,(2),null);var ___$7 = cljs.core.nth.call(null,vec__44761,(3),null);var close = cljs.core.nth.call(null,vec__44761,(4),null);var ___$8 = cljs.core.nth.call(null,vec__44761,(5),null);var volume = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,vec__44760,date,open,_,___$1,___$2,___$3,high,low,vec__44761,___$4,___$5,___$6,___$7,close,___$8){
return (function (p__44766){var vec__44767 = p__44766;var ___$9 = cljs.core.nth.call(null,vec__44767,(0),null);var ___$10 = cljs.core.nth.call(null,vec__44767,(1),null);var ___$11 = cljs.core.nth.call(null,vec__44767,(2),null);var ___$12 = cljs.core.nth.call(null,vec__44767,(3),null);var ___$13 = cljs.core.nth.call(null,vec__44767,(4),null);var volume = cljs.core.nth.call(null,vec__44767,(5),null);return volume;
});})(group,vec__44760,date,open,_,___$1,___$2,___$3,high,low,vec__44761,___$4,___$5,___$6,___$7,close,___$8))
,group));return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),(new cljs.core.LazySeq(null,((function (group,vec__44760,date,open,_,___$1,___$2,___$3,high,low,vec__44761,___$4,___$5,___$6,___$7,close,___$8,volume){
return (function (){return average.call(null,cnt,cljs.core.drop.call(null,cnt,kline));
});})(group,vec__44760,date,open,_,___$1,___$2,___$3,high,low,vec__44761,___$4,___$5,___$6,___$7,close,___$8,volume))
,null,null)));
});
test.stock4.check_return = (function check_return(kline){var vec__44771 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__44771,(0),null);var ___$1 = cljs.core.nth.call(null,vec__44771,(1),null);var ___$2 = cljs.core.nth.call(null,vec__44771,(2),null);var ___$3 = cljs.core.nth.call(null,vec__44771,(3),null);var c1 = cljs.core.nth.call(null,vec__44771,(4),null);var ___$4 = cljs.core.nth.call(null,vec__44771,(5),null);var l1 = vec__44771;var vec__44772 = cljs.core.second.call(null,kline);var date = cljs.core.nth.call(null,vec__44772,(0),null);var ___$5 = cljs.core.nth.call(null,vec__44772,(1),null);var ___$6 = cljs.core.nth.call(null,vec__44772,(2),null);var ___$7 = cljs.core.nth.call(null,vec__44772,(3),null);var c2 = cljs.core.nth.call(null,vec__44772,(4),null);var ___$8 = cljs.core.nth.call(null,vec__44772,(5),null);var l2 = vec__44772;var vec__44773 = cljs.core.nth.call(null,kline,(2));var ___$9 = cljs.core.nth.call(null,vec__44773,(0),null);var ___$10 = cljs.core.nth.call(null,vec__44773,(1),null);var ___$11 = cljs.core.nth.call(null,vec__44773,(2),null);var ___$12 = cljs.core.nth.call(null,vec__44773,(3),null);var c3 = cljs.core.nth.call(null,vec__44773,(4),null);var ___$13 = cljs.core.nth.call(null,vec__44773,(5),null);var l3 = vec__44773;var rate = ((c1 - c2) / c2);var rate2 = ((c2 - c3) / c3);var isReturn = ((rate * rate2) < (0));console.log(cljs.core.pr_str.call(null,l1));
console.log(cljs.core.pr_str.call(null,l2));
console.log(cljs.core.pr_str.call(null,l3));
return cljs.core.cons.call(null,((isReturn)?l2:null),(new cljs.core.LazySeq(null,((function (vec__44771,_,___$1,___$2,___$3,c1,___$4,l1,vec__44772,date,___$5,___$6,___$7,c2,___$8,l2,vec__44773,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn){
return (function (){return check_return.call(null,cljs.core.rest.call(null,kline));
});})(vec__44771,_,___$1,___$2,___$3,c1,___$4,l1,vec__44772,date,___$5,___$6,___$7,c2,___$8,l2,vec__44773,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn))
,null,null)));
});
test.stock4.main = (function main(){var draw = test.stock4.draw.call(null,document.getElementById("canvas"));var onSystem = cljs.core.async.chan.call(null);var onView = cljs.core.async.chan.call(null);window.onView.subscribe(((function (draw,onSystem,onView){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,draw,onSystem,onView){
return (function (state_44923){var state_val_44924 = (state_44923[(1)]);if((state_val_44924 === (2)))
{var inst_44921 = (state_44923[(2)]);var state_44923__$1 = state_44923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44923__$1,inst_44921);
} else
{if((state_val_44924 === (1)))
{var inst_44919 = cljs.core.js__GT_clj.call(null,data);var state_44923__$1 = state_44923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44923__$1,(2),onView,inst_44919);
} else
{return null;
}
}
});})(c__6202__auto__,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto__,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44928 = [null,null,null,null,null,null,null];(statearr_44928[(0)] = state_machine__6188__auto__);
(statearr_44928[(1)] = (1));
return statearr_44928;
});
var state_machine__6188__auto____1 = (function (state_44923){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44923);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44929){if((e44929 instanceof Object))
{var ex__6191__auto__ = e44929;var statearr_44930_45064 = state_44923;(statearr_44930_45064[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44923);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45065 = state_44923;
state_44923 = G__45065;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44923){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_44931 = f__6203__auto__.call(null);(statearr_44931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_44931;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,draw,onSystem,onView))
);
return c__6202__auto__;
});})(draw,onSystem,onView))
);
var c__6202__auto___45066 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45066,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45066,draw,onSystem,onView){
return (function (state_44948){var state_val_44949 = (state_44948[(1)]);if((state_val_44949 === (6)))
{var inst_44944 = (state_44948[(2)]);var state_44948__$1 = state_44948;var statearr_44950_45067 = state_44948__$1;(statearr_44950_45067[(2)] = inst_44944);
(statearr_44950_45067[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44949 === (5)))
{var inst_44946 = (state_44948[(2)]);var state_44948__$1 = state_44948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44948__$1,inst_44946);
} else
{if((state_val_44949 === (4)))
{var inst_44937 = (state_44948[(7)]);var inst_44941 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_44937];var inst_44942 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44941,null));var state_44948__$1 = state_44948;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44948__$1,(6),onSystem,inst_44942);
} else
{if((state_val_44949 === (3)))
{var inst_44936 = (state_44948[(8)]);var inst_44939 = alert(inst_44936);var state_44948__$1 = state_44948;var statearr_44951_45068 = state_44948__$1;(statearr_44951_45068[(2)] = inst_44939);
(statearr_44951_45068[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44949 === (2)))
{var inst_44936 = (state_44948[(8)]);var inst_44935 = (state_44948[(2)]);var inst_44936__$1 = cljs.core.nth.call(null,inst_44935,(0),null);var inst_44937 = cljs.core.nth.call(null,inst_44935,(1),null);var state_44948__$1 = (function (){var statearr_44952 = state_44948;(statearr_44952[(8)] = inst_44936__$1);
(statearr_44952[(7)] = inst_44937);
return statearr_44952;
})();if(cljs.core.truth_(inst_44936__$1))
{var statearr_44953_45069 = state_44948__$1;(statearr_44953_45069[(1)] = (3));
} else
{var statearr_44954_45070 = state_44948__$1;(statearr_44954_45070[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_44949 === (1)))
{var inst_44933 = test.stock4.stock_info.call(null,null,(2330),"2014/1/1",(0),(200));var state_44948__$1 = state_44948;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44948__$1,(2),inst_44933);
} else
{return null;
}
}
}
}
}
}
});})(c__6202__auto___45066,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___45066,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_44958 = [null,null,null,null,null,null,null,null,null];(statearr_44958[(0)] = state_machine__6188__auto__);
(statearr_44958[(1)] = (1));
return statearr_44958;
});
var state_machine__6188__auto____1 = (function (state_44948){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_44948);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e44959){if((e44959 instanceof Object))
{var ex__6191__auto__ = e44959;var statearr_44960_45071 = state_44948;(statearr_44960_45071[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44948);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45072 = state_44948;
state_44948 = G__45072;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_44948){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_44948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45066,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_44961 = f__6203__auto__.call(null);(statearr_44961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45066);
return statearr_44961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45066,draw,onSystem,onView))
);
var c__6202__auto___45073 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___45073,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___45073,draw,onSystem,onView){
return (function (state_45027){var state_val_45028 = (state_45027[(1)]);if((state_val_45028 === (7)))
{var inst_45022 = (state_45027[(2)]);var inst_44962 = inst_45022;var state_45027__$1 = (function (){var statearr_45029 = state_45027;(statearr_45029[(7)] = inst_44962);
return statearr_45029;
})();var statearr_45030_45074 = state_45027__$1;(statearr_45030_45074[(2)] = null);
(statearr_45030_45074[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45028 === (1)))
{var inst_44962 = cljs.core.PersistentHashMap.EMPTY;var state_45027__$1 = (function (){var statearr_45031 = state_45027;(statearr_45031[(7)] = inst_44962);
return statearr_45031;
})();var statearr_45032_45075 = state_45027__$1;(statearr_45032_45075[(2)] = null);
(statearr_45032_45075[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45028 === (4)))
{var inst_44970 = (state_45027[(8)]);var inst_44968 = (state_45027[(2)]);var inst_44969 = cljs.core.nth.call(null,inst_44968,(0),null);var inst_44970__$1 = cljs.core.nth.call(null,inst_44968,(1),null);var inst_44974 = cljs.core._EQ_.call(null,onSystem,inst_44970__$1);var state_45027__$1 = (function (){var statearr_45033 = state_45027;(statearr_45033[(9)] = inst_44969);
(statearr_45033[(8)] = inst_44970__$1);
return statearr_45033;
})();if(inst_44974)
{var statearr_45034_45076 = state_45027__$1;(statearr_45034_45076[(1)] = (5));
} else
{var statearr_45035_45077 = state_45027__$1;(statearr_45035_45077[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45028 === (15)))
{var inst_44969 = (state_45027[(9)]);var state_45027__$1 = state_45027;var statearr_45036_45078 = state_45027__$1;(statearr_45036_45078[(2)] = inst_44969);
(statearr_45036_45078[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45028 === (13)))
{var inst_45020 = (state_45027[(2)]);var state_45027__$1 = state_45027;var statearr_45037_45079 = state_45027__$1;(statearr_45037_45079[(2)] = inst_45020);
(statearr_45037_45079[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45028 === (6)))
{var inst_44970 = (state_45027[(8)]);var inst_44991 = cljs.core._EQ_.call(null,onView,inst_44970);var state_45027__$1 = state_45027;if(inst_44991)
{var statearr_45038_45080 = state_45027__$1;(statearr_45038_45080[(1)] = (11));
} else
{var statearr_45039_45081 = state_45027__$1;(statearr_45039_45081[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45028 === (17)))
{var inst_44962 = (state_45027[(7)]);var inst_45001 = (state_45027[(10)]);var inst_45007 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_44962);var inst_45008 = test.stock4.average.call(null,inst_45001,inst_45007);var inst_45009 = cljs.core.take.call(null,(50),inst_45008);var inst_45010 = cljs.core.assoc.call(null,inst_44962,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_45009);var inst_45011 = draw.call(null,inst_45010);var state_45027__$1 = state_45027;var statearr_45040_45082 = state_45027__$1;(statearr_45040_45082[(2)] = inst_45011);
(statearr_45040_45082[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45028 === (3)))
{var inst_45025 = (state_45027[(2)]);var state_45027__$1 = state_45027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45027__$1,inst_45025);
} else
{if((state_val_45028 === (12)))
{var inst_44970 = (state_45027[(8)]);var inst_45016 = ("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44970));var inst_45017 = (new Error(inst_45016));var inst_45018 = (function(){throw inst_45017})();var state_45027__$1 = state_45027;var statearr_45041_45083 = state_45027__$1;(statearr_45041_45083[(2)] = inst_45018);
(statearr_45041_45083[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45028 === (2)))
{var inst_44965 = [onSystem,onView];var inst_44966 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_44965,null));var state_45027__$1 = state_45027;return cljs.core.async.ioc_alts_BANG_.call(null,state_45027__$1,(4),inst_44966);
} else
{if((state_val_45028 === (19)))
{var inst_44962 = (state_45027[(7)]);var inst_45014 = (state_45027[(2)]);var state_45027__$1 = (function (){var statearr_45042 = state_45027;(statearr_45042[(11)] = inst_45014);
return statearr_45042;
})();var statearr_45043_45084 = state_45027__$1;(statearr_45043_45084[(2)] = inst_44962);
(statearr_45043_45084[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45028 === (11)))
{var inst_44969 = (state_45027[(9)]);var inst_44994 = cljs.core.seq_QMARK_.call(null,inst_44969);var state_45027__$1 = state_45027;if(inst_44994)
{var statearr_45044_45085 = state_45027__$1;(statearr_45044_45085[(1)] = (14));
} else
{var statearr_45045_45086 = state_45027__$1;(statearr_45045_45086[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45028 === (9)))
{var inst_44962 = (state_45027[(7)]);var state_45027__$1 = state_45027;var statearr_45046_45087 = state_45027__$1;(statearr_45046_45087[(2)] = inst_44962);
(statearr_45046_45087[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45028 === (5)))
{var inst_44969 = (state_45027[(9)]);var inst_44977 = cljs.core.nth.call(null,inst_44969,(0),null);var inst_44978 = cljs.core.nth.call(null,inst_44969,(1),null);var inst_44982 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_44977);var state_45027__$1 = (function (){var statearr_45047 = state_45027;(statearr_45047[(12)] = inst_44978);
return statearr_45047;
})();if(inst_44982)
{var statearr_45048_45088 = state_45027__$1;(statearr_45048_45088[(1)] = (8));
} else
{var statearr_45049_45089 = state_45027__$1;(statearr_45049_45089[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45028 === (14)))
{var inst_44969 = (state_45027[(9)]);var inst_44996 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44969);var state_45027__$1 = state_45027;var statearr_45050_45090 = state_45027__$1;(statearr_45050_45090[(2)] = inst_44996);
(statearr_45050_45090[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45028 === (16)))
{var inst_44999 = (state_45027[(2)]);var inst_45000 = cljs.core.get.call(null,inst_44999,"cmd");var inst_45001 = cljs.core.get.call(null,inst_44999,"params");var inst_45005 = cljs.core._EQ_.call(null,"avg",inst_45000);var state_45027__$1 = (function (){var statearr_45051 = state_45027;(statearr_45051[(10)] = inst_45001);
return statearr_45051;
})();if(inst_45005)
{var statearr_45052_45091 = state_45027__$1;(statearr_45052_45091[(1)] = (17));
} else
{var statearr_45053_45092 = state_45027__$1;(statearr_45053_45092[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45028 === (10)))
{var inst_44989 = (state_45027[(2)]);var state_45027__$1 = state_45027;var statearr_45054_45093 = state_45027__$1;(statearr_45054_45093[(2)] = inst_44989);
(statearr_45054_45093[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45028 === (18)))
{var inst_44962 = (state_45027[(7)]);var state_45027__$1 = state_45027;var statearr_45055_45094 = state_45027__$1;(statearr_45055_45094[(2)] = inst_44962);
(statearr_45055_45094[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_45028 === (8)))
{var inst_44962 = (state_45027[(7)]);var inst_44978 = (state_45027[(12)]);var inst_44984 = cljs.core.assoc.call(null,inst_44962,new cljs.core.Keyword(null,"info","info",-317069002),inst_44978);var inst_44985 = cljs.core.assoc.call(null,inst_44984,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_44978);var inst_44986 = draw.call(null,inst_44985);var state_45027__$1 = state_45027;var statearr_45056_45095 = state_45027__$1;(statearr_45056_45095[(2)] = inst_44986);
(statearr_45056_45095[(1)] = (10));
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
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___45073,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___45073,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_45060 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45060[(0)] = state_machine__6188__auto__);
(statearr_45060[(1)] = (1));
return statearr_45060;
});
var state_machine__6188__auto____1 = (function (state_45027){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_45027);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e45061){if((e45061 instanceof Object))
{var ex__6191__auto__ = e45061;var statearr_45062_45096 = state_45027;(statearr_45062_45096[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45027);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e45061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__45097 = state_45027;
state_45027 = G__45097;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_45027){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_45027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___45073,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_45063 = f__6203__auto__.call(null);(statearr_45063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___45073);
return statearr_45063;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___45073,draw,onSystem,onView))
);
return null;
});
test.stock4.main.call(null);
