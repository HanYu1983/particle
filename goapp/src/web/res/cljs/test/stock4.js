// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock4');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
test.stock4.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__104624_SHARP_){return cljs.core.nth.call(null,p1__104624_SHARP_,(2));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__104625_SHARP_){return cljs.core.nth.call(null,p1__104625_SHARP_,(3));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock4.draw_turn = (function draw_turn(ctx,w,h,kline,turn){var vec__104636 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__104636,(0),null);var min_v = cljs.core.nth.call(null,vec__104636,(1),null);var offset_v = cljs.core.nth.call(null,vec__104636,(2),null);var offset_x = cljs.core.nth.call(null,vec__104636,(3),null);var pos_y = cljs.core.nth.call(null,vec__104636,(4),null);(ctx["fillStyle"] = "black");
var seq__104637 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__104636,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__104645__delegate = function (args){return args;
};
var G__104645 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__104645__delegate.call(this,args);};
G__104645.cljs$lang$maxFixedArity = 0;
G__104645.cljs$lang$applyTo = (function (arglist__104646){
var args = cljs.core.seq(arglist__104646);
return G__104645__delegate(args);
});
G__104645.cljs$core$IFn$_invoke$arity$variadic = G__104645__delegate;
return G__104645;
})()
;})(vec__104636,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__104638 = null;var count__104639 = (0);var i__104640 = (0);while(true){
if((i__104640 < count__104639))
{var vec__104641 = cljs.core._nth.call(null,chunk__104638,i__104640);var idx = cljs.core.nth.call(null,vec__104641,(0),null);var vec__104642 = cljs.core.nth.call(null,vec__104641,(1),null);var date = cljs.core.nth.call(null,vec__104642,(0),null);var _ = cljs.core.nthnext.call(null,vec__104642,(1));var line = vec__104642;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__104637,chunk__104638,count__104639,i__104640,vec__104641,idx,vec__104642,date,_,line,vec__104636,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__104626_SHARP_){return cljs.core._EQ_.call(null,date,p1__104626_SHARP_);
});})(seq__104637,chunk__104638,count__104639,i__104640,vec__104641,idx,vec__104642,date,_,line,vec__104636,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__104647 = seq__104637;
var G__104648 = chunk__104638;
var G__104649 = count__104639;
var G__104650 = (i__104640 + (1));
seq__104637 = G__104647;
chunk__104638 = G__104648;
count__104639 = G__104649;
i__104640 = G__104650;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__104637);if(temp__4126__auto__)
{var seq__104637__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__104637__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__104637__$1);{
var G__104651 = cljs.core.chunk_rest.call(null,seq__104637__$1);
var G__104652 = c__4307__auto__;
var G__104653 = cljs.core.count.call(null,c__4307__auto__);
var G__104654 = (0);
seq__104637 = G__104651;
chunk__104638 = G__104652;
count__104639 = G__104653;
i__104640 = G__104654;
continue;
}
} else
{var vec__104643 = cljs.core.first.call(null,seq__104637__$1);var idx = cljs.core.nth.call(null,vec__104643,(0),null);var vec__104644 = cljs.core.nth.call(null,vec__104643,(1),null);var date = cljs.core.nth.call(null,vec__104644,(0),null);var _ = cljs.core.nthnext.call(null,vec__104644,(1));var line = vec__104644;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__104637,chunk__104638,count__104639,i__104640,vec__104643,idx,vec__104644,date,_,line,seq__104637__$1,temp__4126__auto__,vec__104636,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__104626_SHARP_){return cljs.core._EQ_.call(null,date,p1__104626_SHARP_);
});})(seq__104637,chunk__104638,count__104639,i__104640,vec__104643,idx,vec__104644,date,_,line,seq__104637__$1,temp__4126__auto__,vec__104636,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__104655 = cljs.core.next.call(null,seq__104637__$1);
var G__104656 = null;
var G__104657 = (0);
var G__104658 = (0);
seq__104637 = G__104655;
chunk__104638 = G__104656;
count__104639 = G__104657;
i__104640 = G__104658;
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
test.stock4.draw_line = (function draw_line(ctx,w,h,kline){var vec__104668 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__104668,(0),null);var min_v = cljs.core.nth.call(null,vec__104668,(1),null);var offset_v = cljs.core.nth.call(null,vec__104668,(2),null);var offset_x = cljs.core.nth.call(null,vec__104668,(3),null);var pos_y = cljs.core.nth.call(null,vec__104668,(4),null);var seq__104669 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__104668,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__104677__delegate = function (args){return args;
};
var G__104677 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__104677__delegate.call(this,args);};
G__104677.cljs$lang$maxFixedArity = 0;
G__104677.cljs$lang$applyTo = (function (arglist__104678){
var args = cljs.core.seq(arglist__104678);
return G__104677__delegate(args);
});
G__104677.cljs$core$IFn$_invoke$arity$variadic = G__104677__delegate;
return G__104677;
})()
;})(vec__104668,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__104670 = null;var count__104671 = (0);var i__104672 = (0);while(true){
if((i__104672 < count__104671))
{var vec__104673 = cljs.core._nth.call(null,chunk__104670,i__104672);var idx = cljs.core.nth.call(null,vec__104673,(0),null);var vec__104674 = cljs.core.nth.call(null,vec__104673,(1),null);var date = cljs.core.nth.call(null,vec__104674,(0),null);var open = cljs.core.nth.call(null,vec__104674,(1),null);var high = cljs.core.nth.call(null,vec__104674,(2),null);var low = cljs.core.nth.call(null,vec__104674,(3),null);var close = cljs.core.nth.call(null,vec__104674,(4),null);var volume = cljs.core.nth.call(null,vec__104674,(5),null);(ctx["strokeStyle"] = "black");
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
var G__104679 = seq__104669;
var G__104680 = chunk__104670;
var G__104681 = count__104671;
var G__104682 = (i__104672 + (1));
seq__104669 = G__104679;
chunk__104670 = G__104680;
count__104671 = G__104681;
i__104672 = G__104682;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__104669);if(temp__4126__auto__)
{var seq__104669__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__104669__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__104669__$1);{
var G__104683 = cljs.core.chunk_rest.call(null,seq__104669__$1);
var G__104684 = c__4307__auto__;
var G__104685 = cljs.core.count.call(null,c__4307__auto__);
var G__104686 = (0);
seq__104669 = G__104683;
chunk__104670 = G__104684;
count__104671 = G__104685;
i__104672 = G__104686;
continue;
}
} else
{var vec__104675 = cljs.core.first.call(null,seq__104669__$1);var idx = cljs.core.nth.call(null,vec__104675,(0),null);var vec__104676 = cljs.core.nth.call(null,vec__104675,(1),null);var date = cljs.core.nth.call(null,vec__104676,(0),null);var open = cljs.core.nth.call(null,vec__104676,(1),null);var high = cljs.core.nth.call(null,vec__104676,(2),null);var low = cljs.core.nth.call(null,vec__104676,(3),null);var close = cljs.core.nth.call(null,vec__104676,(4),null);var volume = cljs.core.nth.call(null,vec__104676,(5),null);(ctx["strokeStyle"] = "black");
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
var G__104687 = cljs.core.next.call(null,seq__104669__$1);
var G__104688 = null;
var G__104689 = (0);
var G__104690 = (0);
seq__104669 = G__104687;
chunk__104670 = G__104688;
count__104671 = G__104689;
i__104672 = G__104690;
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
test.stock4.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__104694 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__104694,(0),null);var h = cljs.core.nth.call(null,vec__104694,(1),null);return ((function (ctx,vec__104694,w,h){
return (function (p__104695){var map__104696 = p__104695;var map__104696__$1 = ((cljs.core.seq_QMARK_.call(null,map__104696))?cljs.core.apply.call(null,cljs.core.hash_map,map__104696):map__104696);var appctx = map__104696__$1;var kline = cljs.core.get.call(null,map__104696__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var turn = cljs.core.get.call(null,map__104696__$1,new cljs.core.Keyword(null,"turn","turn",75759344));var avgs = cljs.core.get.call(null,map__104696__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var bias = cljs.core.get.call(null,map__104696__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));(ctx["fillStyle"] = "yellow");
ctx.fillRect((0),(0),w,h);
test.stock4.draw_line.call(null,ctx,w,h,kline);
if(cljs.core.truth_(turn))
{test.stock4.draw_turn.call(null,ctx,w,h,kline,turn);
} else
{}
return appctx;
});
;})(ctx,vec__104694,w,h))
});
test.stock4.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock4.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj104734 = {"url":"/proxy","dataType":"text","data":(function (){var obj104736 = {"url":url};return obj104736;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_104743){var state_val_104744 = (state_104743[(1)]);if((state_val_104744 === (2)))
{var inst_104740 = (state_104743[(2)]);var inst_104741 = cljs.core.async.close_BANG_.call(null,ret);var state_104743__$1 = (function (){var statearr_104745 = state_104743;(statearr_104745[(7)] = inst_104740);
return statearr_104745;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104743__$1,inst_104741);
} else
{if((state_val_104744 === (1)))
{var inst_104737 = [null,data];var inst_104738 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_104737,null));var state_104743__$1 = state_104743;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104743__$1,(2),ret,inst_104738);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_104749 = [null,null,null,null,null,null,null,null];(statearr_104749[(0)] = state_machine__6188__auto__);
(statearr_104749[(1)] = (1));
return statearr_104749;
});
var state_machine__6188__auto____1 = (function (state_104743){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_104743);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e104750){if((e104750 instanceof Object))
{var ex__6191__auto__ = e104750;var statearr_104751_104769 = state_104743;(statearr_104751_104769[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e104750;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__104770 = state_104743;
state_104743 = G__104770;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_104743){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_104743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_104752 = f__6203__auto__.call(null);(statearr_104752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_104752;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_104759){var state_val_104760 = (state_104759[(1)]);if((state_val_104760 === (2)))
{var inst_104756 = (state_104759[(2)]);var inst_104757 = cljs.core.async.close_BANG_.call(null,ret);var state_104759__$1 = (function (){var statearr_104761 = state_104759;(statearr_104761[(7)] = inst_104756);
return statearr_104761;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104759__$1,inst_104757);
} else
{if((state_val_104760 === (1)))
{var inst_104753 = [err];var inst_104754 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_104753,null));var state_104759__$1 = state_104759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_104759__$1,(2),ret,inst_104754);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_104765 = [null,null,null,null,null,null,null,null];(statearr_104765[(0)] = state_machine__6188__auto__);
(statearr_104765[(1)] = (1));
return statearr_104765;
});
var state_machine__6188__auto____1 = (function (state_104759){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_104759);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e104766){if((e104766 instanceof Object))
{var ex__6191__auto__ = e104766;var statearr_104767_104771 = state_104759;(statearr_104767_104771[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104759);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e104766;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__104772 = state_104759;
state_104759 = G__104772;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_104759){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_104759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_104768 = f__6203__auto__.call(null);(statearr_104768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_104768;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj104734;
})());
return ret;
});
test.stock4.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__104781(s__104782){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__104782__$1 = s__104782;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__104782__$1);if(temp__4126__auto__)
{var s__104782__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__104782__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__104782__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__104784 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__104783 = (0);while(true){
if((i__104783 < size__4275__auto__))
{var vec__104787 = cljs.core._nth.call(null,c__4274__auto__,i__104783);var _ = cljs.core.nth.call(null,vec__104787,(0),null);var date = cljs.core.nth.call(null,vec__104787,(1),null);var open = cljs.core.nth.call(null,vec__104787,(2),null);var high = cljs.core.nth.call(null,vec__104787,(3),null);var low = cljs.core.nth.call(null,vec__104787,(4),null);var close = cljs.core.nth.call(null,vec__104787,(5),null);var volume = cljs.core.nth.call(null,vec__104787,(6),null);cljs.core.chunk_append.call(null,b__104784,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__104789 = (i__104783 + (1));
i__104783 = G__104789;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__104784),iter__104781.call(null,cljs.core.chunk_rest.call(null,s__104782__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__104784),null);
}
} else
{var vec__104788 = cljs.core.first.call(null,s__104782__$2);var _ = cljs.core.nth.call(null,vec__104788,(0),null);var date = cljs.core.nth.call(null,vec__104788,(1),null);var open = cljs.core.nth.call(null,vec__104788,(2),null);var high = cljs.core.nth.call(null,vec__104788,(3),null);var low = cljs.core.nth.call(null,vec__104788,(4),null);var close = cljs.core.nth.call(null,vec__104788,(5),null);var volume = cljs.core.nth.call(null,vec__104788,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__104781.call(null,cljs.core.rest.call(null,s__104782__$2)));
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
return (function (state_104867){var state_val_104868 = (state_104867[(1)]);if((state_val_104868 === (9)))
{var inst_104857 = (state_104867[(2)]);var state_104867__$1 = state_104867;var statearr_104869_104886 = state_104867__$1;(statearr_104869_104886[(2)] = inst_104857);
(statearr_104869_104886[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_104868 === (8)))
{var inst_104863 = (state_104867[(2)]);var state_104867__$1 = state_104867;var statearr_104870_104887 = state_104867__$1;(statearr_104870_104887[(2)] = inst_104863);
(statearr_104870_104887[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_104868 === (7)))
{var inst_104849 = (state_104867[(7)]);var inst_104859 = cljs.core.concat.call(null,all,inst_104849);var inst_104860 = [null,inst_104859];var inst_104861 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_104860,null));var state_104867__$1 = state_104867;var statearr_104871_104888 = state_104867__$1;(statearr_104871_104888[(2)] = inst_104861);
(statearr_104871_104888[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_104868 === (6)))
{var inst_104849 = (state_104867[(7)]);var inst_104853 = cljs.core.concat.call(null,all,inst_104849);var inst_104854 = (start + num);var inst_104855 = stock_info.call(null,inst_104853,id,startdate,inst_104854,num);var state_104867__$1 = state_104867;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104867__$1,(9),inst_104855);
} else
{if((state_val_104868 === (5)))
{var inst_104865 = (state_104867[(2)]);var state_104867__$1 = state_104867;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_104867__$1,inst_104865);
} else
{if((state_val_104868 === (4)))
{var inst_104849 = (state_104867[(7)]);var inst_104844 = (state_104867[(8)]);var inst_104849__$1 = test.stock4.parse_info.call(null,inst_104844);var inst_104850 = cljs.core.count.call(null,inst_104849__$1);var inst_104851 = cljs.core._EQ_.call(null,num,inst_104850);var state_104867__$1 = (function (){var statearr_104872 = state_104867;(statearr_104872[(7)] = inst_104849__$1);
return statearr_104872;
})();if(inst_104851)
{var statearr_104873_104889 = state_104867__$1;(statearr_104873_104889[(1)] = (6));
} else
{var statearr_104874_104890 = state_104867__$1;(statearr_104874_104890[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_104868 === (3)))
{var inst_104843 = (state_104867[(9)]);var inst_104846 = [inst_104843];var inst_104847 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_104846,null));var state_104867__$1 = state_104867;var statearr_104875_104891 = state_104867__$1;(statearr_104875_104891[(2)] = inst_104847);
(statearr_104875_104891[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_104868 === (2)))
{var inst_104843 = (state_104867[(9)]);var inst_104842 = (state_104867[(2)]);var inst_104843__$1 = cljs.core.nth.call(null,inst_104842,(0),null);var inst_104844 = cljs.core.nth.call(null,inst_104842,(1),null);var state_104867__$1 = (function (){var statearr_104876 = state_104867;(statearr_104876[(8)] = inst_104844);
(statearr_104876[(9)] = inst_104843__$1);
return statearr_104876;
})();if(cljs.core.truth_(inst_104843__$1))
{var statearr_104877_104892 = state_104867__$1;(statearr_104877_104892[(1)] = (3));
} else
{var statearr_104878_104893 = state_104867__$1;(statearr_104878_104893[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_104868 === (1)))
{var inst_104839 = test.stock4.stock_url.call(null,id,startdate,start,num);var inst_104840 = test.stock4.content.call(null,inst_104839);var state_104867__$1 = state_104867;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_104867__$1,(2),inst_104840);
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
var state_machine__6188__auto____0 = (function (){var statearr_104882 = [null,null,null,null,null,null,null,null,null,null];(statearr_104882[(0)] = state_machine__6188__auto__);
(statearr_104882[(1)] = (1));
return statearr_104882;
});
var state_machine__6188__auto____1 = (function (state_104867){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_104867);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e104883){if((e104883 instanceof Object))
{var ex__6191__auto__ = e104883;var statearr_104884_104894 = state_104867;(statearr_104884_104894[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_104867);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e104883;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__104895 = state_104867;
state_104867 = G__104895;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_104867){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_104867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_104885 = f__6203__auto__.call(null);(statearr_104885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_104885;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock4.average = (function average(cnt,kline){var group = cljs.core.take.call(null,cnt,kline);var vec__104904 = cljs.core.last.call(null,group);var date = cljs.core.nth.call(null,vec__104904,(0),null);var open = cljs.core.nth.call(null,vec__104904,(1),null);var _ = cljs.core.nth.call(null,vec__104904,(2),null);var ___$1 = cljs.core.nth.call(null,vec__104904,(3),null);var ___$2 = cljs.core.nth.call(null,vec__104904,(4),null);var ___$3 = cljs.core.nth.call(null,vec__104904,(5),null);var high = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__104904,date,open,_,___$1,___$2,___$3){
return (function (p__104906){var vec__104907 = p__104906;var ___$4 = cljs.core.nth.call(null,vec__104907,(0),null);var ___$5 = cljs.core.nth.call(null,vec__104907,(1),null);var high = cljs.core.nth.call(null,vec__104907,(2),null);var ___$6 = cljs.core.nth.call(null,vec__104907,(3),null);var ___$7 = cljs.core.nth.call(null,vec__104907,(4),null);var ___$8 = cljs.core.nth.call(null,vec__104907,(5),null);return high;
});})(group,vec__104904,date,open,_,___$1,___$2,___$3))
,group));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__104904,date,open,_,___$1,___$2,___$3,high){
return (function (p__104908){var vec__104909 = p__104908;var ___$4 = cljs.core.nth.call(null,vec__104909,(0),null);var ___$5 = cljs.core.nth.call(null,vec__104909,(1),null);var ___$6 = cljs.core.nth.call(null,vec__104909,(2),null);var low = cljs.core.nth.call(null,vec__104909,(3),null);var ___$7 = cljs.core.nth.call(null,vec__104909,(4),null);var ___$8 = cljs.core.nth.call(null,vec__104909,(5),null);return low;
});})(group,vec__104904,date,open,_,___$1,___$2,___$3,high))
,group));var vec__104905 = cljs.core.first.call(null,group);var ___$4 = cljs.core.nth.call(null,vec__104905,(0),null);var ___$5 = cljs.core.nth.call(null,vec__104905,(1),null);var ___$6 = cljs.core.nth.call(null,vec__104905,(2),null);var ___$7 = cljs.core.nth.call(null,vec__104905,(3),null);var close = cljs.core.nth.call(null,vec__104905,(4),null);var ___$8 = cljs.core.nth.call(null,vec__104905,(5),null);var volume = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,vec__104904,date,open,_,___$1,___$2,___$3,high,low,vec__104905,___$4,___$5,___$6,___$7,close,___$8){
return (function (p__104910){var vec__104911 = p__104910;var ___$9 = cljs.core.nth.call(null,vec__104911,(0),null);var ___$10 = cljs.core.nth.call(null,vec__104911,(1),null);var ___$11 = cljs.core.nth.call(null,vec__104911,(2),null);var ___$12 = cljs.core.nth.call(null,vec__104911,(3),null);var ___$13 = cljs.core.nth.call(null,vec__104911,(4),null);var volume = cljs.core.nth.call(null,vec__104911,(5),null);return volume;
});})(group,vec__104904,date,open,_,___$1,___$2,___$3,high,low,vec__104905,___$4,___$5,___$6,___$7,close,___$8))
,group));if((cljs.core.count.call(null,group) === (0)))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),(new cljs.core.LazySeq(null,((function (group,vec__104904,date,open,_,___$1,___$2,___$3,high,low,vec__104905,___$4,___$5,___$6,___$7,close,___$8,volume){
return (function (){return average.call(null,cnt,cljs.core.drop.call(null,cnt,kline));
});})(group,vec__104904,date,open,_,___$1,___$2,___$3,high,low,vec__104905,___$4,___$5,___$6,___$7,close,___$8,volume))
,null,null)));
}
});
test.stock4.check_turn = (function check_turn(kline){if((cljs.core.count.call(null,kline) >= (3)))
{var vec__104915 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__104915,(0),null);var ___$1 = cljs.core.nth.call(null,vec__104915,(1),null);var ___$2 = cljs.core.nth.call(null,vec__104915,(2),null);var ___$3 = cljs.core.nth.call(null,vec__104915,(3),null);var c1 = cljs.core.nth.call(null,vec__104915,(4),null);var ___$4 = cljs.core.nth.call(null,vec__104915,(5),null);var l1 = vec__104915;var vec__104916 = cljs.core.second.call(null,kline);var date = cljs.core.nth.call(null,vec__104916,(0),null);var ___$5 = cljs.core.nth.call(null,vec__104916,(1),null);var ___$6 = cljs.core.nth.call(null,vec__104916,(2),null);var ___$7 = cljs.core.nth.call(null,vec__104916,(3),null);var c2 = cljs.core.nth.call(null,vec__104916,(4),null);var ___$8 = cljs.core.nth.call(null,vec__104916,(5),null);var l2 = vec__104916;var vec__104917 = cljs.core.nth.call(null,kline,(2));var ___$9 = cljs.core.nth.call(null,vec__104917,(0),null);var ___$10 = cljs.core.nth.call(null,vec__104917,(1),null);var ___$11 = cljs.core.nth.call(null,vec__104917,(2),null);var ___$12 = cljs.core.nth.call(null,vec__104917,(3),null);var c3 = cljs.core.nth.call(null,vec__104917,(4),null);var ___$13 = cljs.core.nth.call(null,vec__104917,(5),null);var l3 = vec__104917;var rate = ((c1 - c2) / c2);var rate2 = ((c2 - c3) / c3);var isReturn = (((rate * rate2) < (0))) && ((Math.abs((Math.abs(rate) - Math.abs(rate2))) > 0.01));if(isReturn)
{return cljs.core.cons.call(null,date,(new cljs.core.LazySeq(null,((function (vec__104915,_,___$1,___$2,___$3,c1,___$4,l1,vec__104916,date,___$5,___$6,___$7,c2,___$8,l2,vec__104917,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn){
return (function (){return check_turn.call(null,cljs.core.rest.call(null,kline));
});})(vec__104915,_,___$1,___$2,___$3,c1,___$4,l1,vec__104916,date,___$5,___$6,___$7,c2,___$8,l2,vec__104917,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn))
,null,null)));
} else
{return check_turn.call(null,cljs.core.rest.call(null,kline));
}
} else
{return null;
}
});
test.stock4.main = (function main(){var draw = test.stock4.draw.call(null,document.getElementById("canvas"));var onSystem = cljs.core.async.chan.call(null);var onView = cljs.core.async.chan.call(null);window.onView.subscribe(((function (draw,onSystem,onView){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,draw,onSystem,onView){
return (function (state_105228){var state_val_105229 = (state_105228[(1)]);if((state_val_105229 === (2)))
{var inst_105226 = (state_105228[(2)]);var state_105228__$1 = state_105228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105228__$1,inst_105226);
} else
{if((state_val_105229 === (1)))
{var inst_105224 = cljs.core.js__GT_clj.call(null,data);var state_105228__$1 = state_105228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105228__$1,(2),onView,inst_105224);
} else
{return null;
}
}
});})(c__6202__auto__,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto__,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_105233 = [null,null,null,null,null,null,null];(statearr_105233[(0)] = state_machine__6188__auto__);
(statearr_105233[(1)] = (1));
return statearr_105233;
});
var state_machine__6188__auto____1 = (function (state_105228){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_105228);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e105234){if((e105234 instanceof Object))
{var ex__6191__auto__ = e105234;var statearr_105235_105530 = state_105228;(statearr_105235_105530[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105228);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e105234;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__105531 = state_105228;
state_105228 = G__105531;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_105228){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_105228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_105236 = f__6203__auto__.call(null);(statearr_105236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_105236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,draw,onSystem,onView))
);
return c__6202__auto__;
});})(draw,onSystem,onView))
);
var c__6202__auto___105532 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___105532,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___105532,draw,onSystem,onView){
return (function (state_105253){var state_val_105254 = (state_105253[(1)]);if((state_val_105254 === (6)))
{var inst_105249 = (state_105253[(2)]);var state_105253__$1 = state_105253;var statearr_105255_105533 = state_105253__$1;(statearr_105255_105533[(2)] = inst_105249);
(statearr_105255_105533[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105254 === (5)))
{var inst_105251 = (state_105253[(2)]);var state_105253__$1 = state_105253;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105253__$1,inst_105251);
} else
{if((state_val_105254 === (4)))
{var inst_105242 = (state_105253[(7)]);var inst_105246 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_105242];var inst_105247 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_105246,null));var state_105253__$1 = state_105253;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105253__$1,(6),onSystem,inst_105247);
} else
{if((state_val_105254 === (3)))
{var inst_105241 = (state_105253[(8)]);var inst_105244 = alert(inst_105241);var state_105253__$1 = state_105253;var statearr_105256_105534 = state_105253__$1;(statearr_105256_105534[(2)] = inst_105244);
(statearr_105256_105534[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105254 === (2)))
{var inst_105241 = (state_105253[(8)]);var inst_105240 = (state_105253[(2)]);var inst_105241__$1 = cljs.core.nth.call(null,inst_105240,(0),null);var inst_105242 = cljs.core.nth.call(null,inst_105240,(1),null);var state_105253__$1 = (function (){var statearr_105257 = state_105253;(statearr_105257[(7)] = inst_105242);
(statearr_105257[(8)] = inst_105241__$1);
return statearr_105257;
})();if(cljs.core.truth_(inst_105241__$1))
{var statearr_105258_105535 = state_105253__$1;(statearr_105258_105535[(1)] = (3));
} else
{var statearr_105259_105536 = state_105253__$1;(statearr_105259_105536[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105254 === (1)))
{var inst_105238 = test.stock4.stock_info.call(null,null,(2330),"2014/1/1",(0),(200));var state_105253__$1 = state_105253;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105253__$1,(2),inst_105238);
} else
{return null;
}
}
}
}
}
}
});})(c__6202__auto___105532,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___105532,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_105263 = [null,null,null,null,null,null,null,null,null];(statearr_105263[(0)] = state_machine__6188__auto__);
(statearr_105263[(1)] = (1));
return statearr_105263;
});
var state_machine__6188__auto____1 = (function (state_105253){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_105253);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e105264){if((e105264 instanceof Object))
{var ex__6191__auto__ = e105264;var statearr_105265_105537 = state_105253;(statearr_105265_105537[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105253);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e105264;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__105538 = state_105253;
state_105253 = G__105538;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_105253){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_105253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___105532,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_105266 = f__6203__auto__.call(null);(statearr_105266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___105532);
return statearr_105266;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___105532,draw,onSystem,onView))
);
var c__6202__auto___105539 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___105539,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___105539,draw,onSystem,onView){
return (function (state_105436){var state_val_105437 = (state_105436[(1)]);if((state_val_105437 === (7)))
{var inst_105280 = (state_105436[(7)]);var inst_105285 = cljs.core.apply.call(null,cljs.core.hash_map,inst_105280);var state_105436__$1 = state_105436;var statearr_105438_105540 = state_105436__$1;(statearr_105438_105540[(2)] = inst_105285);
(statearr_105438_105540[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (20)))
{var inst_105295 = (state_105436[(8)]);var inst_105323 = cljs.core.apply.call(null,cljs.core.hash_map,inst_105295);var state_105436__$1 = state_105436;var statearr_105439_105541 = state_105436__$1;(statearr_105439_105541[(2)] = inst_105323);
(statearr_105439_105541[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (27)))
{var inst_105327 = (state_105436[(9)]);var inst_105364 = cljs.core._EQ_.call(null,"turn",inst_105327);var state_105436__$1 = state_105436;if(inst_105364)
{var statearr_105440_105542 = state_105436__$1;(statearr_105440_105542[(1)] = (29));
} else
{var statearr_105441_105543 = state_105436__$1;(statearr_105441_105543[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (1)))
{var inst_105272 = (state_105436[(10)]);var inst_105270 = [new cljs.core.Keyword(null,"cnt","cnt",283978798)];var inst_105271 = [(200)];var inst_105272__$1 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_105270,inst_105271);var inst_105273 = cljs.core.seq_QMARK_.call(null,inst_105272__$1);var state_105436__$1 = (function (){var statearr_105442 = state_105436;(statearr_105442[(10)] = inst_105272__$1);
return statearr_105442;
})();if(inst_105273)
{var statearr_105443_105544 = state_105436__$1;(statearr_105443_105544[(1)] = (2));
} else
{var statearr_105444_105545 = state_105436__$1;(statearr_105444_105545[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (24)))
{var inst_105327 = (state_105436[(9)]);var inst_105356 = cljs.core._EQ_.call(null,"avg",inst_105327);var state_105436__$1 = state_105436;if(inst_105356)
{var statearr_105445_105546 = state_105436__$1;(statearr_105445_105546[(1)] = (26));
} else
{var statearr_105446_105547 = state_105436__$1;(statearr_105446_105547[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (39)))
{var inst_105415 = (state_105436[(2)]);var state_105436__$1 = state_105436;var statearr_105447_105548 = state_105436__$1;(statearr_105447_105548[(2)] = inst_105415);
(statearr_105447_105548[(1)] = (36));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (4)))
{var inst_105272 = (state_105436[(10)]);var inst_105278 = (state_105436[(11)]);var inst_105278__$1 = (state_105436[(2)]);var inst_105279 = cljs.core.get.call(null,inst_105278__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_105280 = inst_105272;var state_105436__$1 = (function (){var statearr_105448 = state_105436;(statearr_105448[(7)] = inst_105280);
(statearr_105448[(11)] = inst_105278__$1);
(statearr_105448[(12)] = inst_105279);
return statearr_105448;
})();var statearr_105449_105549 = state_105436__$1;(statearr_105449_105549[(2)] = null);
(statearr_105449_105549[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (15)))
{var inst_105288 = (state_105436[(13)]);var state_105436__$1 = state_105436;var statearr_105450_105550 = state_105436__$1;(statearr_105450_105550[(2)] = inst_105288);
(statearr_105450_105550[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (21)))
{var inst_105295 = (state_105436[(8)]);var state_105436__$1 = state_105436;var statearr_105451_105551 = state_105436__$1;(statearr_105451_105551[(2)] = inst_105295);
(statearr_105451_105551[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (31)))
{var inst_105422 = (state_105436[(2)]);var state_105436__$1 = state_105436;var statearr_105452_105552 = state_105436__$1;(statearr_105452_105552[(2)] = inst_105422);
(statearr_105452_105552[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (32)))
{var inst_105328 = (state_105436[(14)]);var inst_105288 = (state_105436[(13)]);var inst_105378 = cljs.core.keyword.call(null,inst_105328);var inst_105379 = inst_105378.call(null,inst_105288);var inst_105380 = cljs.core.seq.call(null,inst_105379);var inst_105381 = inst_105380;var inst_105382 = null;var inst_105383 = (0);var inst_105384 = (0);var state_105436__$1 = (function (){var statearr_105453 = state_105436;(statearr_105453[(15)] = inst_105381);
(statearr_105453[(16)] = inst_105382);
(statearr_105453[(17)] = inst_105384);
(statearr_105453[(18)] = inst_105383);
return statearr_105453;
})();var statearr_105454_105553 = state_105436__$1;(statearr_105454_105553[(2)] = null);
(statearr_105454_105553[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (40)))
{var inst_105395 = (state_105436[(19)]);var inst_105397 = cljs.core.chunked_seq_QMARK_.call(null,inst_105395);var state_105436__$1 = state_105436;if(inst_105397)
{var statearr_105455_105554 = state_105436__$1;(statearr_105455_105554[(1)] = (43));
} else
{var statearr_105456_105555 = state_105436__$1;(statearr_105456_105555[(1)] = (44));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (33)))
{var inst_105288 = (state_105436[(13)]);var state_105436__$1 = state_105436;var statearr_105457_105556 = state_105436__$1;(statearr_105457_105556[(2)] = inst_105288);
(statearr_105457_105556[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (13)))
{var inst_105431 = (state_105436[(2)]);var inst_105280 = inst_105431;var state_105436__$1 = (function (){var statearr_105458 = state_105436;(statearr_105458[(7)] = inst_105280);
return statearr_105458;
})();var statearr_105459_105557 = state_105436__$1;(statearr_105459_105557[(2)] = null);
(statearr_105459_105557[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (22)))
{var inst_105326 = (state_105436[(20)]);var inst_105327 = (state_105436[(9)]);var inst_105326__$1 = (state_105436[(2)]);var inst_105327__$1 = cljs.core.get.call(null,inst_105326__$1,"cmd");var inst_105328 = cljs.core.get.call(null,inst_105326__$1,"params");var inst_105332 = cljs.core._EQ_.call(null,"stock",inst_105327__$1);var state_105436__$1 = (function (){var statearr_105460 = state_105436;(statearr_105460[(20)] = inst_105326__$1);
(statearr_105460[(9)] = inst_105327__$1);
(statearr_105460[(14)] = inst_105328);
return statearr_105460;
})();if(inst_105332)
{var statearr_105461_105558 = state_105436__$1;(statearr_105461_105558[(1)] = (23));
} else
{var statearr_105462_105559 = state_105436__$1;(statearr_105462_105559[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (36)))
{var inst_105288 = (state_105436[(13)]);var inst_105417 = (state_105436[(2)]);var state_105436__$1 = (function (){var statearr_105463 = state_105436;(statearr_105463[(21)] = inst_105417);
return statearr_105463;
})();var statearr_105464_105560 = state_105436__$1;(statearr_105464_105560[(2)] = inst_105288);
(statearr_105464_105560[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (41)))
{var state_105436__$1 = state_105436;var statearr_105465_105561 = state_105436__$1;(statearr_105465_105561[(2)] = null);
(statearr_105465_105561[(1)] = (42));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (43)))
{var inst_105395 = (state_105436[(19)]);var inst_105399 = cljs.core.chunk_first.call(null,inst_105395);var inst_105400 = cljs.core.chunk_rest.call(null,inst_105395);var inst_105401 = cljs.core.count.call(null,inst_105399);var inst_105381 = inst_105400;var inst_105382 = inst_105399;var inst_105383 = inst_105401;var inst_105384 = (0);var state_105436__$1 = (function (){var statearr_105466 = state_105436;(statearr_105466[(15)] = inst_105381);
(statearr_105466[(16)] = inst_105382);
(statearr_105466[(17)] = inst_105384);
(statearr_105466[(18)] = inst_105383);
return statearr_105466;
})();var statearr_105467_105562 = state_105436__$1;(statearr_105467_105562[(2)] = null);
(statearr_105467_105562[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (29)))
{var inst_105289 = (state_105436[(22)]);var inst_105288 = (state_105436[(13)]);var inst_105366 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_105288);var inst_105367 = test.stock4.check_turn.call(null,inst_105366);var inst_105368 = cljs.core.take.call(null,inst_105289,inst_105367);var inst_105369 = cljs.core.assoc.call(null,inst_105288,new cljs.core.Keyword(null,"turn","turn",75759344),inst_105368);var inst_105370 = draw.call(null,inst_105369);var state_105436__$1 = state_105436;var statearr_105468_105563 = state_105436__$1;(statearr_105468_105563[(2)] = inst_105370);
(statearr_105468_105563[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (44)))
{var inst_105395 = (state_105436[(19)]);var inst_105404 = cljs.core.first.call(null,inst_105395);var inst_105405 = cljs.core.pr_str.call(null,inst_105404);var inst_105406 = console.log(inst_105405);var inst_105407 = cljs.core.next.call(null,inst_105395);var inst_105381 = inst_105407;var inst_105382 = null;var inst_105383 = (0);var inst_105384 = (0);var state_105436__$1 = (function (){var statearr_105469 = state_105436;(statearr_105469[(15)] = inst_105381);
(statearr_105469[(16)] = inst_105382);
(statearr_105469[(17)] = inst_105384);
(statearr_105469[(23)] = inst_105406);
(statearr_105469[(18)] = inst_105383);
return statearr_105469;
})();var statearr_105470_105564 = state_105436__$1;(statearr_105470_105564[(2)] = null);
(statearr_105470_105564[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (6)))
{var inst_105434 = (state_105436[(2)]);var state_105436__$1 = state_105436;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105436__$1,inst_105434);
} else
{if((state_val_105437 === (28)))
{var inst_105424 = (state_105436[(2)]);var state_105436__$1 = state_105436;var statearr_105471_105565 = state_105436__$1;(statearr_105471_105565[(2)] = inst_105424);
(statearr_105471_105565[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (25)))
{var inst_105426 = (state_105436[(2)]);var state_105436__$1 = state_105436;var statearr_105472_105566 = state_105436__$1;(statearr_105472_105566[(2)] = inst_105426);
(statearr_105472_105566[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (34)))
{var inst_105420 = (state_105436[(2)]);var state_105436__$1 = state_105436;var statearr_105473_105567 = state_105436__$1;(statearr_105473_105567[(2)] = inst_105420);
(statearr_105473_105567[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (17)))
{var inst_105295 = (state_105436[(8)]);var inst_105321 = cljs.core.seq_QMARK_.call(null,inst_105295);var state_105436__$1 = state_105436;if(inst_105321)
{var statearr_105474_105568 = state_105436__$1;(statearr_105474_105568[(1)] = (20));
} else
{var statearr_105475_105569 = state_105436__$1;(statearr_105475_105569[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (3)))
{var inst_105272 = (state_105436[(10)]);var state_105436__$1 = state_105436;var statearr_105476_105570 = state_105436__$1;(statearr_105476_105570[(2)] = inst_105272);
(statearr_105476_105570[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (12)))
{var inst_105296 = (state_105436[(24)]);var inst_105318 = cljs.core._EQ_.call(null,onView,inst_105296);var state_105436__$1 = state_105436;if(inst_105318)
{var statearr_105477_105571 = state_105436__$1;(statearr_105477_105571[(1)] = (17));
} else
{var statearr_105478_105572 = state_105436__$1;(statearr_105478_105572[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (2)))
{var inst_105272 = (state_105436[(10)]);var inst_105275 = cljs.core.apply.call(null,cljs.core.hash_map,inst_105272);var state_105436__$1 = state_105436;var statearr_105479_105573 = state_105436__$1;(statearr_105479_105573[(2)] = inst_105275);
(statearr_105479_105573[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (23)))
{var inst_105289 = (state_105436[(22)]);var inst_105295 = (state_105436[(8)]);var inst_105280 = (state_105436[(7)]);var inst_105326 = (state_105436[(20)]);var inst_105296 = (state_105436[(24)]);var inst_105278 = (state_105436[(11)]);var inst_105294 = (state_105436[(25)]);var inst_105327 = (state_105436[(9)]);var inst_105328 = (state_105436[(14)]);var inst_105288 = (state_105436[(13)]);var inst_105352 = cljs.core.async.chan.call(null,(1));var inst_105353 = (function (){var cmd = inst_105327;var input = inst_105326;var ctx = inst_105288;var map__105320 = inst_105326;var pred__105297 = cljs.core._EQ_;var vec__105290 = inst_105294;var expr__105330 = inst_105327;var map__105269 = inst_105278;var v = inst_105295;var pred__105329 = cljs.core._EQ_;var params = inst_105328;var expr__105298 = inst_105296;var cnt = inst_105289;var map__105282 = inst_105288;var ch = inst_105296;var c__6202__auto____$1 = inst_105352;var G__105268 = inst_105280;return ((function (cmd,input,ctx,map__105320,pred__105297,vec__105290,expr__105330,map__105269,v,pred__105329,params,expr__105298,cnt,map__105282,ch,c__6202__auto____$1,G__105268,inst_105289,inst_105295,inst_105280,inst_105326,inst_105296,inst_105278,inst_105294,inst_105327,inst_105328,inst_105288,inst_105352,state_val_105437,c__6202__auto___105539,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (cmd,input,ctx,map__105320,pred__105297,vec__105290,expr__105330,map__105269,v,pred__105329,params,expr__105298,cnt,map__105282,ch,c__6202__auto____$1,G__105268,inst_105289,inst_105295,inst_105280,inst_105326,inst_105296,inst_105278,inst_105294,inst_105327,inst_105328,inst_105288,inst_105352,state_val_105437,c__6202__auto___105539,draw,onSystem,onView){
return (function (state_105350){var state_val_105351 = (state_105350[(1)]);if((state_val_105351 === (6)))
{var inst_105346 = (state_105350[(2)]);var state_105350__$1 = state_105350;var statearr_105480_105574 = state_105350__$1;(statearr_105480_105574[(2)] = inst_105346);
(statearr_105480_105574[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105351 === (5)))
{var inst_105348 = (state_105350[(2)]);var state_105350__$1 = state_105350;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_105350__$1,inst_105348);
} else
{if((state_val_105351 === (4)))
{var inst_105339 = (state_105350[(7)]);var inst_105343 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_105339];var inst_105344 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_105343,null));var state_105350__$1 = state_105350;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_105350__$1,(6),onSystem,inst_105344);
} else
{if((state_val_105351 === (3)))
{var inst_105338 = (state_105350[(8)]);var inst_105341 = alert(inst_105338);var state_105350__$1 = state_105350;var statearr_105481_105575 = state_105350__$1;(statearr_105481_105575[(2)] = inst_105341);
(statearr_105481_105575[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105351 === (2)))
{var inst_105338 = (state_105350[(8)]);var inst_105337 = (state_105350[(2)]);var inst_105338__$1 = cljs.core.nth.call(null,inst_105337,(0),null);var inst_105339 = cljs.core.nth.call(null,inst_105337,(1),null);var state_105350__$1 = (function (){var statearr_105482 = state_105350;(statearr_105482[(7)] = inst_105339);
(statearr_105482[(8)] = inst_105338__$1);
return statearr_105482;
})();if(cljs.core.truth_(inst_105338__$1))
{var statearr_105483_105576 = state_105350__$1;(statearr_105483_105576[(1)] = (3));
} else
{var statearr_105484_105577 = state_105350__$1;(statearr_105484_105577[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105351 === (1)))
{var inst_105335 = test.stock4.stock_info.call(null,null,params,"2014/1/1",(0),(200));var state_105350__$1 = state_105350;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_105350__$1,(2),inst_105335);
} else
{return null;
}
}
}
}
}
}
});})(cmd,input,ctx,map__105320,pred__105297,vec__105290,expr__105330,map__105269,v,pred__105329,params,expr__105298,cnt,map__105282,ch,c__6202__auto____$1,G__105268,inst_105289,inst_105295,inst_105280,inst_105326,inst_105296,inst_105278,inst_105294,inst_105327,inst_105328,inst_105288,inst_105352,state_val_105437,c__6202__auto___105539,draw,onSystem,onView))
;return ((function (switch__6187__auto__,cmd,input,ctx,map__105320,pred__105297,vec__105290,expr__105330,map__105269,v,pred__105329,params,expr__105298,cnt,map__105282,ch,c__6202__auto____$1,G__105268,inst_105289,inst_105295,inst_105280,inst_105326,inst_105296,inst_105278,inst_105294,inst_105327,inst_105328,inst_105288,inst_105352,state_val_105437,c__6202__auto___105539,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_105488 = [null,null,null,null,null,null,null,null,null];(statearr_105488[(0)] = state_machine__6188__auto__);
(statearr_105488[(1)] = (1));
return statearr_105488;
});
var state_machine__6188__auto____1 = (function (state_105350){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_105350);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e105489){if((e105489 instanceof Object))
{var ex__6191__auto__ = e105489;var statearr_105490_105578 = state_105350;(statearr_105490_105578[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105350);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e105489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__105579 = state_105350;
state_105350 = G__105579;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_105350){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_105350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,cmd,input,ctx,map__105320,pred__105297,vec__105290,expr__105330,map__105269,v,pred__105329,params,expr__105298,cnt,map__105282,ch,c__6202__auto____$1,G__105268,inst_105289,inst_105295,inst_105280,inst_105326,inst_105296,inst_105278,inst_105294,inst_105327,inst_105328,inst_105288,inst_105352,state_val_105437,c__6202__auto___105539,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_105491 = f__6203__auto__.call(null);(statearr_105491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_105491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(cmd,input,ctx,map__105320,pred__105297,vec__105290,expr__105330,map__105269,v,pred__105329,params,expr__105298,cnt,map__105282,ch,c__6202__auto____$1,G__105268,inst_105289,inst_105295,inst_105280,inst_105326,inst_105296,inst_105278,inst_105294,inst_105327,inst_105328,inst_105288,inst_105352,state_val_105437,c__6202__auto___105539,draw,onSystem,onView))
})();var inst_105354 = cljs.core.async.impl.dispatch.run.call(null,inst_105353);var state_105436__$1 = (function (){var statearr_105492 = state_105436;(statearr_105492[(26)] = inst_105354);
return statearr_105492;
})();var statearr_105493_105580 = state_105436__$1;(statearr_105493_105580[(2)] = inst_105288);
(statearr_105493_105580[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (35)))
{var inst_105384 = (state_105436[(17)]);var inst_105383 = (state_105436[(18)]);var inst_105386 = (inst_105384 < inst_105383);var inst_105387 = inst_105386;var state_105436__$1 = state_105436;if(cljs.core.truth_(inst_105387))
{var statearr_105494_105581 = state_105436__$1;(statearr_105494_105581[(1)] = (37));
} else
{var statearr_105495_105582 = state_105436__$1;(statearr_105495_105582[(1)] = (38));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (19)))
{var inst_105429 = (state_105436[(2)]);var state_105436__$1 = state_105436;var statearr_105496_105583 = state_105436__$1;(statearr_105496_105583[(2)] = inst_105429);
(statearr_105496_105583[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (11)))
{var inst_105295 = (state_105436[(8)]);var inst_105303 = cljs.core.nth.call(null,inst_105295,(0),null);var inst_105304 = cljs.core.nth.call(null,inst_105295,(1),null);var inst_105308 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_105303);var state_105436__$1 = (function (){var statearr_105497 = state_105436;(statearr_105497[(27)] = inst_105304);
return statearr_105497;
})();if(inst_105308)
{var statearr_105498_105584 = state_105436__$1;(statearr_105498_105584[(1)] = (14));
} else
{var statearr_105499_105585 = state_105436__$1;(statearr_105499_105585[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (9)))
{var inst_105288 = (state_105436[(13)]);var inst_105288__$1 = (state_105436[(2)]);var inst_105289 = cljs.core.get.call(null,inst_105288__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_105291 = [onSystem,onView];var inst_105292 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_105291,null));var state_105436__$1 = (function (){var statearr_105500 = state_105436;(statearr_105500[(22)] = inst_105289);
(statearr_105500[(13)] = inst_105288__$1);
return statearr_105500;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_105436__$1,(10),inst_105292);
} else
{if((state_val_105437 === (5)))
{var inst_105280 = (state_105436[(7)]);var inst_105283 = cljs.core.seq_QMARK_.call(null,inst_105280);var state_105436__$1 = state_105436;if(inst_105283)
{var statearr_105501_105586 = state_105436__$1;(statearr_105501_105586[(1)] = (7));
} else
{var statearr_105502_105587 = state_105436__$1;(statearr_105502_105587[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (14)))
{var inst_105289 = (state_105436[(22)]);var inst_105304 = (state_105436[(27)]);var inst_105288 = (state_105436[(13)]);var inst_105310 = cljs.core.assoc.call(null,inst_105288,new cljs.core.Keyword(null,"info","info",-317069002),inst_105304);var inst_105311 = cljs.core.take.call(null,inst_105289,inst_105304);var inst_105312 = cljs.core.assoc.call(null,inst_105310,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_105311);var inst_105313 = draw.call(null,inst_105312);var state_105436__$1 = state_105436;var statearr_105503_105588 = state_105436__$1;(statearr_105503_105588[(2)] = inst_105313);
(statearr_105503_105588[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (45)))
{var inst_105410 = (state_105436[(2)]);var state_105436__$1 = state_105436;var statearr_105504_105589 = state_105436__$1;(statearr_105504_105589[(2)] = inst_105410);
(statearr_105504_105589[(1)] = (42));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (26)))
{var inst_105289 = (state_105436[(22)]);var inst_105328 = (state_105436[(14)]);var inst_105288 = (state_105436[(13)]);var inst_105358 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_105288);var inst_105359 = test.stock4.average.call(null,inst_105328,inst_105358);var inst_105360 = cljs.core.take.call(null,inst_105289,inst_105359);var inst_105361 = cljs.core.assoc.call(null,inst_105288,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_105360);var inst_105362 = draw.call(null,inst_105361);var state_105436__$1 = state_105436;var statearr_105505_105590 = state_105436__$1;(statearr_105505_105590[(2)] = inst_105362);
(statearr_105505_105590[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (16)))
{var inst_105316 = (state_105436[(2)]);var state_105436__$1 = state_105436;var statearr_105506_105591 = state_105436__$1;(statearr_105506_105591[(2)] = inst_105316);
(statearr_105506_105591[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (38)))
{var inst_105381 = (state_105436[(15)]);var inst_105395 = (state_105436[(19)]);var inst_105395__$1 = cljs.core.seq.call(null,inst_105381);var state_105436__$1 = (function (){var statearr_105507 = state_105436;(statearr_105507[(19)] = inst_105395__$1);
return statearr_105507;
})();if(inst_105395__$1)
{var statearr_105508_105592 = state_105436__$1;(statearr_105508_105592[(1)] = (40));
} else
{var statearr_105509_105593 = state_105436__$1;(statearr_105509_105593[(1)] = (41));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (30)))
{var inst_105327 = (state_105436[(9)]);var inst_105372 = cljs.core._EQ_.call(null,"print",inst_105327);var state_105436__$1 = state_105436;if(inst_105372)
{var statearr_105510_105594 = state_105436__$1;(statearr_105510_105594[(1)] = (32));
} else
{var statearr_105511_105595 = state_105436__$1;(statearr_105511_105595[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (10)))
{var inst_105296 = (state_105436[(24)]);var inst_105294 = (state_105436[(25)]);var inst_105294__$1 = (state_105436[(2)]);var inst_105295 = cljs.core.nth.call(null,inst_105294__$1,(0),null);var inst_105296__$1 = cljs.core.nth.call(null,inst_105294__$1,(1),null);var inst_105300 = cljs.core._EQ_.call(null,onSystem,inst_105296__$1);var state_105436__$1 = (function (){var statearr_105512 = state_105436;(statearr_105512[(8)] = inst_105295);
(statearr_105512[(24)] = inst_105296__$1);
(statearr_105512[(25)] = inst_105294__$1);
return statearr_105512;
})();if(inst_105300)
{var statearr_105513_105596 = state_105436__$1;(statearr_105513_105596[(1)] = (11));
} else
{var statearr_105514_105597 = state_105436__$1;(statearr_105514_105597[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (18)))
{var inst_105288 = (state_105436[(13)]);var state_105436__$1 = state_105436;var statearr_105518_105598 = state_105436__$1;(statearr_105518_105598[(2)] = inst_105288);
(statearr_105518_105598[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (42)))
{var inst_105413 = (state_105436[(2)]);var state_105436__$1 = state_105436;var statearr_105519_105599 = state_105436__$1;(statearr_105519_105599[(2)] = inst_105413);
(statearr_105519_105599[(1)] = (39));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (37)))
{var inst_105381 = (state_105436[(15)]);var inst_105382 = (state_105436[(16)]);var inst_105384 = (state_105436[(17)]);var inst_105383 = (state_105436[(18)]);var inst_105389 = cljs.core._nth.call(null,inst_105382,inst_105384);var inst_105390 = cljs.core.pr_str.call(null,inst_105389);var inst_105391 = console.log(inst_105390);var inst_105392 = (inst_105384 + (1));var tmp105515 = inst_105381;var tmp105516 = inst_105382;var tmp105517 = inst_105383;var inst_105381__$1 = tmp105515;var inst_105382__$1 = tmp105516;var inst_105383__$1 = tmp105517;var inst_105384__$1 = inst_105392;var state_105436__$1 = (function (){var statearr_105520 = state_105436;(statearr_105520[(15)] = inst_105381__$1);
(statearr_105520[(28)] = inst_105391);
(statearr_105520[(16)] = inst_105382__$1);
(statearr_105520[(17)] = inst_105384__$1);
(statearr_105520[(18)] = inst_105383__$1);
return statearr_105520;
})();var statearr_105521_105600 = state_105436__$1;(statearr_105521_105600[(2)] = null);
(statearr_105521_105600[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_105437 === (8)))
{var inst_105280 = (state_105436[(7)]);var state_105436__$1 = state_105436;var statearr_105522_105601 = state_105436__$1;(statearr_105522_105601[(2)] = inst_105280);
(statearr_105522_105601[(1)] = (9));
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
}
}
}
}
}
}
}
});})(c__6202__auto___105539,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___105539,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_105526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_105526[(0)] = state_machine__6188__auto__);
(statearr_105526[(1)] = (1));
return statearr_105526;
});
var state_machine__6188__auto____1 = (function (state_105436){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_105436);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e105527){if((e105527 instanceof Object))
{var ex__6191__auto__ = e105527;var statearr_105528_105602 = state_105436;(statearr_105528_105602[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_105436);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e105527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__105603 = state_105436;
state_105436 = G__105603;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_105436){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_105436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___105539,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_105529 = f__6203__auto__.call(null);(statearr_105529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___105539);
return statearr_105529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___105539,draw,onSystem,onView))
);
return null;
});
test.stock4.main.call(null);
