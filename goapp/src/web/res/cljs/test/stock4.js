// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock4');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
test.stock4.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__86049_SHARP_){return cljs.core.nth.call(null,p1__86049_SHARP_,(2));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__86050_SHARP_){return cljs.core.nth.call(null,p1__86050_SHARP_,(3));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock4.draw_turn = (function draw_turn(ctx,w,h,kline,turn){var vec__86061 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__86061,(0),null);var min_v = cljs.core.nth.call(null,vec__86061,(1),null);var offset_v = cljs.core.nth.call(null,vec__86061,(2),null);var offset_x = cljs.core.nth.call(null,vec__86061,(3),null);var pos_y = cljs.core.nth.call(null,vec__86061,(4),null);(ctx["fillStyle"] = "black");
var seq__86062 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__86061,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__86070__delegate = function (args){return args;
};
var G__86070 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__86070__delegate.call(this,args);};
G__86070.cljs$lang$maxFixedArity = 0;
G__86070.cljs$lang$applyTo = (function (arglist__86071){
var args = cljs.core.seq(arglist__86071);
return G__86070__delegate(args);
});
G__86070.cljs$core$IFn$_invoke$arity$variadic = G__86070__delegate;
return G__86070;
})()
;})(vec__86061,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__86063 = null;var count__86064 = (0);var i__86065 = (0);while(true){
if((i__86065 < count__86064))
{var vec__86066 = cljs.core._nth.call(null,chunk__86063,i__86065);var idx = cljs.core.nth.call(null,vec__86066,(0),null);var vec__86067 = cljs.core.nth.call(null,vec__86066,(1),null);var date = cljs.core.nth.call(null,vec__86067,(0),null);var _ = cljs.core.nthnext.call(null,vec__86067,(1));var line = vec__86067;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__86062,chunk__86063,count__86064,i__86065,vec__86066,idx,vec__86067,date,_,line,vec__86061,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__86051_SHARP_){return cljs.core._EQ_.call(null,date,p1__86051_SHARP_);
});})(seq__86062,chunk__86063,count__86064,i__86065,vec__86066,idx,vec__86067,date,_,line,vec__86061,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__86072 = seq__86062;
var G__86073 = chunk__86063;
var G__86074 = count__86064;
var G__86075 = (i__86065 + (1));
seq__86062 = G__86072;
chunk__86063 = G__86073;
count__86064 = G__86074;
i__86065 = G__86075;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__86062);if(temp__4126__auto__)
{var seq__86062__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86062__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__86062__$1);{
var G__86076 = cljs.core.chunk_rest.call(null,seq__86062__$1);
var G__86077 = c__4307__auto__;
var G__86078 = cljs.core.count.call(null,c__4307__auto__);
var G__86079 = (0);
seq__86062 = G__86076;
chunk__86063 = G__86077;
count__86064 = G__86078;
i__86065 = G__86079;
continue;
}
} else
{var vec__86068 = cljs.core.first.call(null,seq__86062__$1);var idx = cljs.core.nth.call(null,vec__86068,(0),null);var vec__86069 = cljs.core.nth.call(null,vec__86068,(1),null);var date = cljs.core.nth.call(null,vec__86069,(0),null);var _ = cljs.core.nthnext.call(null,vec__86069,(1));var line = vec__86069;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__86062,chunk__86063,count__86064,i__86065,vec__86068,idx,vec__86069,date,_,line,seq__86062__$1,temp__4126__auto__,vec__86061,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__86051_SHARP_){return cljs.core._EQ_.call(null,date,p1__86051_SHARP_);
});})(seq__86062,chunk__86063,count__86064,i__86065,vec__86068,idx,vec__86069,date,_,line,seq__86062__$1,temp__4126__auto__,vec__86061,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__86080 = cljs.core.next.call(null,seq__86062__$1);
var G__86081 = null;
var G__86082 = (0);
var G__86083 = (0);
seq__86062 = G__86080;
chunk__86063 = G__86081;
count__86064 = G__86082;
i__86065 = G__86083;
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
test.stock4.draw_line = (function draw_line(ctx,w,h,kline){var vec__86093 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__86093,(0),null);var min_v = cljs.core.nth.call(null,vec__86093,(1),null);var offset_v = cljs.core.nth.call(null,vec__86093,(2),null);var offset_x = cljs.core.nth.call(null,vec__86093,(3),null);var pos_y = cljs.core.nth.call(null,vec__86093,(4),null);var seq__86094 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__86093,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__86102__delegate = function (args){return args;
};
var G__86102 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__86102__delegate.call(this,args);};
G__86102.cljs$lang$maxFixedArity = 0;
G__86102.cljs$lang$applyTo = (function (arglist__86103){
var args = cljs.core.seq(arglist__86103);
return G__86102__delegate(args);
});
G__86102.cljs$core$IFn$_invoke$arity$variadic = G__86102__delegate;
return G__86102;
})()
;})(vec__86093,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__86095 = null;var count__86096 = (0);var i__86097 = (0);while(true){
if((i__86097 < count__86096))
{var vec__86098 = cljs.core._nth.call(null,chunk__86095,i__86097);var idx = cljs.core.nth.call(null,vec__86098,(0),null);var vec__86099 = cljs.core.nth.call(null,vec__86098,(1),null);var date = cljs.core.nth.call(null,vec__86099,(0),null);var open = cljs.core.nth.call(null,vec__86099,(1),null);var high = cljs.core.nth.call(null,vec__86099,(2),null);var low = cljs.core.nth.call(null,vec__86099,(3),null);var close = cljs.core.nth.call(null,vec__86099,(4),null);var volume = cljs.core.nth.call(null,vec__86099,(5),null);(ctx["strokeStyle"] = "black");
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
var G__86104 = seq__86094;
var G__86105 = chunk__86095;
var G__86106 = count__86096;
var G__86107 = (i__86097 + (1));
seq__86094 = G__86104;
chunk__86095 = G__86105;
count__86096 = G__86106;
i__86097 = G__86107;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__86094);if(temp__4126__auto__)
{var seq__86094__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86094__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__86094__$1);{
var G__86108 = cljs.core.chunk_rest.call(null,seq__86094__$1);
var G__86109 = c__4307__auto__;
var G__86110 = cljs.core.count.call(null,c__4307__auto__);
var G__86111 = (0);
seq__86094 = G__86108;
chunk__86095 = G__86109;
count__86096 = G__86110;
i__86097 = G__86111;
continue;
}
} else
{var vec__86100 = cljs.core.first.call(null,seq__86094__$1);var idx = cljs.core.nth.call(null,vec__86100,(0),null);var vec__86101 = cljs.core.nth.call(null,vec__86100,(1),null);var date = cljs.core.nth.call(null,vec__86101,(0),null);var open = cljs.core.nth.call(null,vec__86101,(1),null);var high = cljs.core.nth.call(null,vec__86101,(2),null);var low = cljs.core.nth.call(null,vec__86101,(3),null);var close = cljs.core.nth.call(null,vec__86101,(4),null);var volume = cljs.core.nth.call(null,vec__86101,(5),null);(ctx["strokeStyle"] = "black");
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
var G__86112 = cljs.core.next.call(null,seq__86094__$1);
var G__86113 = null;
var G__86114 = (0);
var G__86115 = (0);
seq__86094 = G__86112;
chunk__86095 = G__86113;
count__86096 = G__86114;
i__86097 = G__86115;
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
test.stock4.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__86119 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__86119,(0),null);var h = cljs.core.nth.call(null,vec__86119,(1),null);return ((function (ctx,vec__86119,w,h){
return (function (p__86120){var map__86121 = p__86120;var map__86121__$1 = ((cljs.core.seq_QMARK_.call(null,map__86121))?cljs.core.apply.call(null,cljs.core.hash_map,map__86121):map__86121);var appctx = map__86121__$1;var kline = cljs.core.get.call(null,map__86121__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var turn = cljs.core.get.call(null,map__86121__$1,new cljs.core.Keyword(null,"turn","turn",75759344));var avgs = cljs.core.get.call(null,map__86121__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var bias = cljs.core.get.call(null,map__86121__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));(ctx["fillStyle"] = "yellow");
ctx.fillRect((0),(0),w,h);
test.stock4.draw_line.call(null,ctx,w,h,kline);
if(cljs.core.truth_(turn))
{test.stock4.draw_turn.call(null,ctx,w,h,kline,turn);
} else
{}
return appctx;
});
;})(ctx,vec__86119,w,h))
});
test.stock4.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock4.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj86159 = {"url":"/proxy","dataType":"text","data":(function (){var obj86161 = {"url":url};return obj86161;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_86168){var state_val_86169 = (state_86168[(1)]);if((state_val_86169 === (2)))
{var inst_86165 = (state_86168[(2)]);var inst_86166 = cljs.core.async.close_BANG_.call(null,ret);var state_86168__$1 = (function (){var statearr_86170 = state_86168;(statearr_86170[(7)] = inst_86165);
return statearr_86170;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86168__$1,inst_86166);
} else
{if((state_val_86169 === (1)))
{var inst_86162 = [null,data];var inst_86163 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_86162,null));var state_86168__$1 = state_86168;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86168__$1,(2),ret,inst_86163);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_86174 = [null,null,null,null,null,null,null,null];(statearr_86174[(0)] = state_machine__6188__auto__);
(statearr_86174[(1)] = (1));
return statearr_86174;
});
var state_machine__6188__auto____1 = (function (state_86168){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_86168);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e86175){if((e86175 instanceof Object))
{var ex__6191__auto__ = e86175;var statearr_86176_86194 = state_86168;(statearr_86176_86194[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86168);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e86175;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__86195 = state_86168;
state_86168 = G__86195;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_86168){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_86168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_86177 = f__6203__auto__.call(null);(statearr_86177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_86177;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_86184){var state_val_86185 = (state_86184[(1)]);if((state_val_86185 === (2)))
{var inst_86181 = (state_86184[(2)]);var inst_86182 = cljs.core.async.close_BANG_.call(null,ret);var state_86184__$1 = (function (){var statearr_86186 = state_86184;(statearr_86186[(7)] = inst_86181);
return statearr_86186;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86184__$1,inst_86182);
} else
{if((state_val_86185 === (1)))
{var inst_86178 = [err];var inst_86179 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_86178,null));var state_86184__$1 = state_86184;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86184__$1,(2),ret,inst_86179);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_86190 = [null,null,null,null,null,null,null,null];(statearr_86190[(0)] = state_machine__6188__auto__);
(statearr_86190[(1)] = (1));
return statearr_86190;
});
var state_machine__6188__auto____1 = (function (state_86184){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_86184);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e86191){if((e86191 instanceof Object))
{var ex__6191__auto__ = e86191;var statearr_86192_86196 = state_86184;(statearr_86192_86196[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86184);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e86191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__86197 = state_86184;
state_86184 = G__86197;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_86184){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_86184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_86193 = f__6203__auto__.call(null);(statearr_86193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_86193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj86159;
})());
return ret;
});
test.stock4.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__86206(s__86207){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__86207__$1 = s__86207;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__86207__$1);if(temp__4126__auto__)
{var s__86207__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__86207__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__86207__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__86209 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__86208 = (0);while(true){
if((i__86208 < size__4275__auto__))
{var vec__86212 = cljs.core._nth.call(null,c__4274__auto__,i__86208);var _ = cljs.core.nth.call(null,vec__86212,(0),null);var date = cljs.core.nth.call(null,vec__86212,(1),null);var open = cljs.core.nth.call(null,vec__86212,(2),null);var high = cljs.core.nth.call(null,vec__86212,(3),null);var low = cljs.core.nth.call(null,vec__86212,(4),null);var close = cljs.core.nth.call(null,vec__86212,(5),null);var volume = cljs.core.nth.call(null,vec__86212,(6),null);cljs.core.chunk_append.call(null,b__86209,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__86214 = (i__86208 + (1));
i__86208 = G__86214;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86209),iter__86206.call(null,cljs.core.chunk_rest.call(null,s__86207__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__86209),null);
}
} else
{var vec__86213 = cljs.core.first.call(null,s__86207__$2);var _ = cljs.core.nth.call(null,vec__86213,(0),null);var date = cljs.core.nth.call(null,vec__86213,(1),null);var open = cljs.core.nth.call(null,vec__86213,(2),null);var high = cljs.core.nth.call(null,vec__86213,(3),null);var low = cljs.core.nth.call(null,vec__86213,(4),null);var close = cljs.core.nth.call(null,vec__86213,(5),null);var volume = cljs.core.nth.call(null,vec__86213,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__86206.call(null,cljs.core.rest.call(null,s__86207__$2)));
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
return (function (state_86292){var state_val_86293 = (state_86292[(1)]);if((state_val_86293 === (9)))
{var inst_86282 = (state_86292[(2)]);var state_86292__$1 = state_86292;var statearr_86294_86311 = state_86292__$1;(statearr_86294_86311[(2)] = inst_86282);
(statearr_86294_86311[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86293 === (8)))
{var inst_86288 = (state_86292[(2)]);var state_86292__$1 = state_86292;var statearr_86295_86312 = state_86292__$1;(statearr_86295_86312[(2)] = inst_86288);
(statearr_86295_86312[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86293 === (7)))
{var inst_86274 = (state_86292[(7)]);var inst_86284 = cljs.core.concat.call(null,all,inst_86274);var inst_86285 = [null,inst_86284];var inst_86286 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_86285,null));var state_86292__$1 = state_86292;var statearr_86296_86313 = state_86292__$1;(statearr_86296_86313[(2)] = inst_86286);
(statearr_86296_86313[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86293 === (6)))
{var inst_86274 = (state_86292[(7)]);var inst_86278 = cljs.core.concat.call(null,all,inst_86274);var inst_86279 = (start + num);var inst_86280 = stock_info.call(null,inst_86278,id,startdate,inst_86279,num);var state_86292__$1 = state_86292;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86292__$1,(9),inst_86280);
} else
{if((state_val_86293 === (5)))
{var inst_86290 = (state_86292[(2)]);var state_86292__$1 = state_86292;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86292__$1,inst_86290);
} else
{if((state_val_86293 === (4)))
{var inst_86269 = (state_86292[(8)]);var inst_86274 = (state_86292[(7)]);var inst_86274__$1 = test.stock4.parse_info.call(null,inst_86269);var inst_86275 = cljs.core.count.call(null,inst_86274__$1);var inst_86276 = cljs.core._EQ_.call(null,num,inst_86275);var state_86292__$1 = (function (){var statearr_86297 = state_86292;(statearr_86297[(7)] = inst_86274__$1);
return statearr_86297;
})();if(inst_86276)
{var statearr_86298_86314 = state_86292__$1;(statearr_86298_86314[(1)] = (6));
} else
{var statearr_86299_86315 = state_86292__$1;(statearr_86299_86315[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86293 === (3)))
{var inst_86268 = (state_86292[(9)]);var inst_86271 = [inst_86268];var inst_86272 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_86271,null));var state_86292__$1 = state_86292;var statearr_86300_86316 = state_86292__$1;(statearr_86300_86316[(2)] = inst_86272);
(statearr_86300_86316[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86293 === (2)))
{var inst_86268 = (state_86292[(9)]);var inst_86267 = (state_86292[(2)]);var inst_86268__$1 = cljs.core.nth.call(null,inst_86267,(0),null);var inst_86269 = cljs.core.nth.call(null,inst_86267,(1),null);var state_86292__$1 = (function (){var statearr_86301 = state_86292;(statearr_86301[(9)] = inst_86268__$1);
(statearr_86301[(8)] = inst_86269);
return statearr_86301;
})();if(cljs.core.truth_(inst_86268__$1))
{var statearr_86302_86317 = state_86292__$1;(statearr_86302_86317[(1)] = (3));
} else
{var statearr_86303_86318 = state_86292__$1;(statearr_86303_86318[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86293 === (1)))
{var inst_86264 = test.stock4.stock_url.call(null,id,startdate,start,num);var inst_86265 = test.stock4.content.call(null,inst_86264);var state_86292__$1 = state_86292;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86292__$1,(2),inst_86265);
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
var state_machine__6188__auto____0 = (function (){var statearr_86307 = [null,null,null,null,null,null,null,null,null,null];(statearr_86307[(0)] = state_machine__6188__auto__);
(statearr_86307[(1)] = (1));
return statearr_86307;
});
var state_machine__6188__auto____1 = (function (state_86292){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_86292);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e86308){if((e86308 instanceof Object))
{var ex__6191__auto__ = e86308;var statearr_86309_86319 = state_86292;(statearr_86309_86319[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86292);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e86308;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__86320 = state_86292;
state_86292 = G__86320;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_86292){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_86292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_86310 = f__6203__auto__.call(null);(statearr_86310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_86310;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock4.average = (function average(cnt,kline){var group = cljs.core.take.call(null,cnt,kline);var vec__86329 = cljs.core.last.call(null,group);var date = cljs.core.nth.call(null,vec__86329,(0),null);var open = cljs.core.nth.call(null,vec__86329,(1),null);var _ = cljs.core.nth.call(null,vec__86329,(2),null);var ___$1 = cljs.core.nth.call(null,vec__86329,(3),null);var ___$2 = cljs.core.nth.call(null,vec__86329,(4),null);var ___$3 = cljs.core.nth.call(null,vec__86329,(5),null);var high = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__86329,date,open,_,___$1,___$2,___$3){
return (function (p__86331){var vec__86332 = p__86331;var ___$4 = cljs.core.nth.call(null,vec__86332,(0),null);var ___$5 = cljs.core.nth.call(null,vec__86332,(1),null);var high = cljs.core.nth.call(null,vec__86332,(2),null);var ___$6 = cljs.core.nth.call(null,vec__86332,(3),null);var ___$7 = cljs.core.nth.call(null,vec__86332,(4),null);var ___$8 = cljs.core.nth.call(null,vec__86332,(5),null);return high;
});})(group,vec__86329,date,open,_,___$1,___$2,___$3))
,group));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__86329,date,open,_,___$1,___$2,___$3,high){
return (function (p__86333){var vec__86334 = p__86333;var ___$4 = cljs.core.nth.call(null,vec__86334,(0),null);var ___$5 = cljs.core.nth.call(null,vec__86334,(1),null);var ___$6 = cljs.core.nth.call(null,vec__86334,(2),null);var low = cljs.core.nth.call(null,vec__86334,(3),null);var ___$7 = cljs.core.nth.call(null,vec__86334,(4),null);var ___$8 = cljs.core.nth.call(null,vec__86334,(5),null);return low;
});})(group,vec__86329,date,open,_,___$1,___$2,___$3,high))
,group));var vec__86330 = cljs.core.first.call(null,group);var ___$4 = cljs.core.nth.call(null,vec__86330,(0),null);var ___$5 = cljs.core.nth.call(null,vec__86330,(1),null);var ___$6 = cljs.core.nth.call(null,vec__86330,(2),null);var ___$7 = cljs.core.nth.call(null,vec__86330,(3),null);var close = cljs.core.nth.call(null,vec__86330,(4),null);var ___$8 = cljs.core.nth.call(null,vec__86330,(5),null);var volume = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,vec__86329,date,open,_,___$1,___$2,___$3,high,low,vec__86330,___$4,___$5,___$6,___$7,close,___$8){
return (function (p__86335){var vec__86336 = p__86335;var ___$9 = cljs.core.nth.call(null,vec__86336,(0),null);var ___$10 = cljs.core.nth.call(null,vec__86336,(1),null);var ___$11 = cljs.core.nth.call(null,vec__86336,(2),null);var ___$12 = cljs.core.nth.call(null,vec__86336,(3),null);var ___$13 = cljs.core.nth.call(null,vec__86336,(4),null);var volume = cljs.core.nth.call(null,vec__86336,(5),null);return volume;
});})(group,vec__86329,date,open,_,___$1,___$2,___$3,high,low,vec__86330,___$4,___$5,___$6,___$7,close,___$8))
,group));if((cljs.core.count.call(null,group) === (0)))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),(new cljs.core.LazySeq(null,((function (group,vec__86329,date,open,_,___$1,___$2,___$3,high,low,vec__86330,___$4,___$5,___$6,___$7,close,___$8,volume){
return (function (){return average.call(null,cnt,cljs.core.drop.call(null,cnt,kline));
});})(group,vec__86329,date,open,_,___$1,___$2,___$3,high,low,vec__86330,___$4,___$5,___$6,___$7,close,___$8,volume))
,null,null)));
}
});
test.stock4.check_turn = (function check_turn(kline){if((cljs.core.count.call(null,kline) >= (3)))
{var vec__86340 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__86340,(0),null);var ___$1 = cljs.core.nth.call(null,vec__86340,(1),null);var ___$2 = cljs.core.nth.call(null,vec__86340,(2),null);var ___$3 = cljs.core.nth.call(null,vec__86340,(3),null);var c1 = cljs.core.nth.call(null,vec__86340,(4),null);var ___$4 = cljs.core.nth.call(null,vec__86340,(5),null);var l1 = vec__86340;var vec__86341 = cljs.core.second.call(null,kline);var date = cljs.core.nth.call(null,vec__86341,(0),null);var ___$5 = cljs.core.nth.call(null,vec__86341,(1),null);var ___$6 = cljs.core.nth.call(null,vec__86341,(2),null);var ___$7 = cljs.core.nth.call(null,vec__86341,(3),null);var c2 = cljs.core.nth.call(null,vec__86341,(4),null);var ___$8 = cljs.core.nth.call(null,vec__86341,(5),null);var l2 = vec__86341;var vec__86342 = cljs.core.nth.call(null,kline,(2));var ___$9 = cljs.core.nth.call(null,vec__86342,(0),null);var ___$10 = cljs.core.nth.call(null,vec__86342,(1),null);var ___$11 = cljs.core.nth.call(null,vec__86342,(2),null);var ___$12 = cljs.core.nth.call(null,vec__86342,(3),null);var c3 = cljs.core.nth.call(null,vec__86342,(4),null);var ___$13 = cljs.core.nth.call(null,vec__86342,(5),null);var l3 = vec__86342;var rate = ((c1 - c2) / c2);var rate2 = ((c2 - c3) / c3);var isReturn = (((rate * rate2) < (0))) && ((Math.abs((Math.abs(rate) - Math.abs(rate2))) > 0.01));if(isReturn)
{return cljs.core.cons.call(null,date,(new cljs.core.LazySeq(null,((function (vec__86340,_,___$1,___$2,___$3,c1,___$4,l1,vec__86341,date,___$5,___$6,___$7,c2,___$8,l2,vec__86342,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn){
return (function (){return check_turn.call(null,cljs.core.rest.call(null,kline));
});})(vec__86340,_,___$1,___$2,___$3,c1,___$4,l1,vec__86341,date,___$5,___$6,___$7,c2,___$8,l2,vec__86342,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn))
,null,null)));
} else
{return check_turn.call(null,cljs.core.rest.call(null,kline));
}
} else
{return null;
}
});
/**
* 以最近30天的振盪平均值來計算
* 振盪超過平均值1倍以上的可以視為長紅
* 振盪低於平均值0.8倍以下的可以視為小幅盤整
*/
test.stock4.check_length = (function check_length(kline){if((cljs.core.count.call(null,kline) >= (30)))
{var group = cljs.core.take.call(null,(30),kline);var avg_length = (cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group){
return (function (p__86347){var vec__86348 = p__86347;var _ = cljs.core.nth.call(null,vec__86348,(0),null);var ___$1 = cljs.core.nth.call(null,vec__86348,(1),null);var high = cljs.core.nth.call(null,vec__86348,(2),null);var low = cljs.core.nth.call(null,vec__86348,(3),null);var ___$2 = cljs.core.nth.call(null,vec__86348,(4),null);var ___$3 = cljs.core.nth.call(null,vec__86348,(5),null);return (high - low);
});})(group))
,group)) / cljs.core.count.call(null,group));var vec__86346 = cljs.core.first.call(null,group);var _ = cljs.core.nth.call(null,vec__86346,(0),null);var open = cljs.core.nth.call(null,vec__86346,(1),null);var high = cljs.core.nth.call(null,vec__86346,(2),null);var low = cljs.core.nth.call(null,vec__86346,(3),null);var close = cljs.core.nth.call(null,vec__86346,(4),null);var ___$1 = cljs.core.nth.call(null,vec__86346,(5),null);var curr = vec__86346;var length_rate = ((high - low) / avg_length);var solid_rate = ((close - open) / avg_length);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,solid_rate,length_rate], null),(new cljs.core.LazySeq(null,((function (group,avg_length,vec__86346,_,open,high,low,close,___$1,curr,length_rate,solid_rate){
return (function (){return check_length.call(null,cljs.core.rest.call(null,kline));
});})(group,avg_length,vec__86346,_,open,high,low,close,___$1,curr,length_rate,solid_rate))
,null,null)));
} else
{return null;
}
});
/**
* Simple Moving Average 簡單移動平均線
*/
test.stock4.sma = (function sma(n,kline){if((cljs.core.count.call(null,kline) >= n))
{var group = cljs.core.take.call(null,n,kline);var avg = (cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group){
return (function (p__86351){var vec__86352 = p__86351;var _ = cljs.core.nth.call(null,vec__86352,(0),null);var ___$1 = cljs.core.nth.call(null,vec__86352,(1),null);var ___$2 = cljs.core.nth.call(null,vec__86352,(2),null);var ___$3 = cljs.core.nth.call(null,vec__86352,(3),null);var close = cljs.core.nth.call(null,vec__86352,(4),null);var ___$4 = cljs.core.nth.call(null,vec__86352,(5),null);return close;
});})(group))
,group)) / cljs.core.count.call(null,group));var curr = cljs.core.first.call(null,kline);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,avg], null),(new cljs.core.LazySeq(null,((function (group,avg,curr){
return (function (){return sma.call(null,n,cljs.core.rest.call(null,kline));
});})(group,avg,curr))
,null,null)));
} else
{return null;
}
});
/**
* 網路版本的 Exponentional Moving Average 指數移動平均線
* 這個計算不知道正確還是錯誤
*/
test.stock4.ema2 = (function ema2(n,kline){if((cljs.core.count.call(null,kline) >= n))
{var group = cljs.core.take.call(null,n,kline);var alpha = ((2) / (n + (1)));var value = (alpha * cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._STAR_,((1) - alpha)),(1)),cljs.core.map.call(null,((function (group,alpha){
return (function (p__86355){var vec__86356 = p__86355;var _ = cljs.core.nth.call(null,vec__86356,(0),null);var ___$1 = cljs.core.nth.call(null,vec__86356,(1),null);var ___$2 = cljs.core.nth.call(null,vec__86356,(2),null);var ___$3 = cljs.core.nth.call(null,vec__86356,(3),null);var close = cljs.core.nth.call(null,vec__86356,(4),null);var ___$4 = cljs.core.nth.call(null,vec__86356,(5),null);return close;
});})(group,alpha))
,group))));var curr = cljs.core.first.call(null,kline);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,value], null),(new cljs.core.LazySeq(null,((function (group,alpha,value,curr){
return (function (){return ema2.call(null,n,cljs.core.rest.call(null,kline));
});})(group,alpha,value,curr))
,null,null)));
} else
{return null;
}
});
/**
* 點線賺錢術的 Exponentional Moving Average 指數移動平均線。使用了加權型式，w為1可用於計算MACD
* 這個計算上較為正確，和yahoo股市算的很接近
*/
test.stock4.ema = (function ema(n,w,kline){var vec__86362 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__86362,(0),null);var ___$1 = cljs.core.nth.call(null,vec__86362,(1),null);var ___$2 = cljs.core.nth.call(null,vec__86362,(2),null);var ___$3 = cljs.core.nth.call(null,vec__86362,(3),null);var close = cljs.core.nth.call(null,vec__86362,(4),null);var ___$4 = cljs.core.nth.call(null,vec__86362,(5),null);var curr = vec__86362;return cljs.core.map.call(null,cljs.core.first,cljs.core.iterate.call(null,((function (vec__86362,_,___$1,___$2,___$3,close,___$4,curr){
return (function (p__86363){var vec__86364 = p__86363;var vec__86365 = cljs.core.nth.call(null,vec__86364,(0),null);var ___$5 = cljs.core.nth.call(null,vec__86365,(0),null);var prev_ema = cljs.core.nth.call(null,vec__86365,(1),null);var kline__$1 = cljs.core.nth.call(null,vec__86364,(1),null);var idx = cljs.core.nth.call(null,vec__86364,(2),null);var vec__86366 = cljs.core.first.call(null,kline__$1);var ___$6 = cljs.core.nth.call(null,vec__86366,(0),null);var ___$7 = cljs.core.nth.call(null,vec__86366,(1),null);var ___$8 = cljs.core.nth.call(null,vec__86366,(2),null);var ___$9 = cljs.core.nth.call(null,vec__86366,(3),null);var close__$1 = cljs.core.nth.call(null,vec__86366,(4),null);var ___$10 = cljs.core.nth.call(null,vec__86366,(5),null);var curr__$1 = vec__86366;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr__$1,((close__$1 * ((w + (1)) / (w + idx))) + (prev_ema * ((idx - (1)) / (w + idx))))], null),cljs.core.rest.call(null,kline__$1),(idx + (1))], null);
});})(vec__86362,_,___$1,___$2,___$3,close,___$4,curr))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr,close], null),cljs.core.rest.call(null,kline),((1) + (1))], null)));
});
test.stock4.main = (function main(){var draw = test.stock4.draw.call(null,document.getElementById("canvas"));var onSystem = cljs.core.async.chan.call(null);var onView = cljs.core.async.chan.call(null);window.onView.subscribe(((function (draw,onSystem,onView){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,draw,onSystem,onView){
return (function (state_86722){var state_val_86723 = (state_86722[(1)]);if((state_val_86723 === (2)))
{var inst_86720 = (state_86722[(2)]);var state_86722__$1 = state_86722;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86722__$1,inst_86720);
} else
{if((state_val_86723 === (1)))
{var inst_86718 = cljs.core.js__GT_clj.call(null,data);var state_86722__$1 = state_86722;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86722__$1,(2),onView,inst_86718);
} else
{return null;
}
}
});})(c__6202__auto__,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto__,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_86727 = [null,null,null,null,null,null,null];(statearr_86727[(0)] = state_machine__6188__auto__);
(statearr_86727[(1)] = (1));
return statearr_86727;
});
var state_machine__6188__auto____1 = (function (state_86722){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_86722);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e86728){if((e86728 instanceof Object))
{var ex__6191__auto__ = e86728;var statearr_86729_87069 = state_86722;(statearr_86729_87069[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86722);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e86728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__87070 = state_86722;
state_86722 = G__87070;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_86722){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_86722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_86730 = f__6203__auto__.call(null);(statearr_86730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_86730;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,draw,onSystem,onView))
);
return c__6202__auto__;
});})(draw,onSystem,onView))
);
var c__6202__auto___87071 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___87071,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___87071,draw,onSystem,onView){
return (function (state_86747){var state_val_86748 = (state_86747[(1)]);if((state_val_86748 === (6)))
{var inst_86743 = (state_86747[(2)]);var state_86747__$1 = state_86747;var statearr_86749_87072 = state_86747__$1;(statearr_86749_87072[(2)] = inst_86743);
(statearr_86749_87072[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86748 === (5)))
{var inst_86745 = (state_86747[(2)]);var state_86747__$1 = state_86747;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86747__$1,inst_86745);
} else
{if((state_val_86748 === (4)))
{var inst_86736 = (state_86747[(7)]);var inst_86740 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_86736];var inst_86741 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_86740,null));var state_86747__$1 = state_86747;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86747__$1,(6),onSystem,inst_86741);
} else
{if((state_val_86748 === (3)))
{var inst_86735 = (state_86747[(8)]);var inst_86738 = alert(inst_86735);var state_86747__$1 = state_86747;var statearr_86750_87073 = state_86747__$1;(statearr_86750_87073[(2)] = inst_86738);
(statearr_86750_87073[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86748 === (2)))
{var inst_86735 = (state_86747[(8)]);var inst_86734 = (state_86747[(2)]);var inst_86735__$1 = cljs.core.nth.call(null,inst_86734,(0),null);var inst_86736 = cljs.core.nth.call(null,inst_86734,(1),null);var state_86747__$1 = (function (){var statearr_86751 = state_86747;(statearr_86751[(8)] = inst_86735__$1);
(statearr_86751[(7)] = inst_86736);
return statearr_86751;
})();if(cljs.core.truth_(inst_86735__$1))
{var statearr_86752_87074 = state_86747__$1;(statearr_86752_87074[(1)] = (3));
} else
{var statearr_86753_87075 = state_86747__$1;(statearr_86753_87075[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86748 === (1)))
{var inst_86732 = test.stock4.stock_info.call(null,null,(2330),"2014/1/1",(0),(200));var state_86747__$1 = state_86747;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86747__$1,(2),inst_86732);
} else
{return null;
}
}
}
}
}
}
});})(c__6202__auto___87071,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___87071,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_86757 = [null,null,null,null,null,null,null,null,null];(statearr_86757[(0)] = state_machine__6188__auto__);
(statearr_86757[(1)] = (1));
return statearr_86757;
});
var state_machine__6188__auto____1 = (function (state_86747){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_86747);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e86758){if((e86758 instanceof Object))
{var ex__6191__auto__ = e86758;var statearr_86759_87076 = state_86747;(statearr_86759_87076[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86747);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e86758;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__87077 = state_86747;
state_86747 = G__87077;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_86747){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_86747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___87071,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_86760 = f__6203__auto__.call(null);(statearr_86760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___87071);
return statearr_86760;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___87071,draw,onSystem,onView))
);
var c__6202__auto___87078 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___87078,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___87078,draw,onSystem,onView){
return (function (state_86960){var state_val_86961 = (state_86960[(1)]);if((state_val_86961 === (7)))
{var inst_86774 = (state_86960[(7)]);var inst_86779 = cljs.core.apply.call(null,cljs.core.hash_map,inst_86774);var state_86960__$1 = state_86960;var statearr_86962_87079 = state_86960__$1;(statearr_86962_87079[(2)] = inst_86779);
(statearr_86962_87079[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (20)))
{var inst_86789 = (state_86960[(8)]);var inst_86817 = cljs.core.apply.call(null,cljs.core.hash_map,inst_86789);var state_86960__$1 = state_86960;var statearr_86963_87080 = state_86960__$1;(statearr_86963_87080[(2)] = inst_86817);
(statearr_86963_87080[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (27)))
{var inst_86821 = (state_86960[(9)]);var inst_86842 = cljs.core._EQ_.call(null,"ema",inst_86821);var state_86960__$1 = state_86960;if(inst_86842)
{var statearr_86964_87081 = state_86960__$1;(statearr_86964_87081[(1)] = (29));
} else
{var statearr_86965_87082 = state_86960__$1;(statearr_86965_87082[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (1)))
{var inst_86766 = (state_86960[(10)]);var inst_86764 = [new cljs.core.Keyword(null,"cnt","cnt",283978798)];var inst_86765 = [(200)];var inst_86766__$1 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_86764,inst_86765);var inst_86767 = cljs.core.seq_QMARK_.call(null,inst_86766__$1);var state_86960__$1 = (function (){var statearr_86966 = state_86960;(statearr_86966[(10)] = inst_86766__$1);
return statearr_86966;
})();if(inst_86767)
{var statearr_86967_87083 = state_86960__$1;(statearr_86967_87083[(1)] = (2));
} else
{var statearr_86968_87084 = state_86960__$1;(statearr_86968_87084[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (24)))
{var inst_86821 = (state_86960[(9)]);var inst_86834 = cljs.core._EQ_.call(null,"sma",inst_86821);var state_86960__$1 = state_86960;if(inst_86834)
{var statearr_86972_87085 = state_86960__$1;(statearr_86972_87085[(1)] = (26));
} else
{var statearr_86973_87086 = state_86960__$1;(statearr_86973_87086[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (39)))
{var inst_86821 = (state_86960[(9)]);var inst_86890 = cljs.core._EQ_.call(null,"print",inst_86821);var state_86960__$1 = state_86960;if(inst_86890)
{var statearr_86974_87087 = state_86960__$1;(statearr_86974_87087[(1)] = (41));
} else
{var statearr_86975_87088 = state_86960__$1;(statearr_86975_87088[(1)] = (42));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (46)))
{var inst_86900 = (state_86960[(11)]);var inst_86902 = (state_86960[(12)]);var inst_86901 = (state_86960[(13)]);var inst_86899 = (state_86960[(14)]);var inst_86907 = cljs.core._nth.call(null,inst_86900,inst_86902);var inst_86908 = cljs.core.pr_str.call(null,inst_86907);var inst_86909 = console.log(inst_86908);var inst_86910 = (inst_86902 + (1));var tmp86969 = inst_86900;var tmp86970 = inst_86901;var tmp86971 = inst_86899;var inst_86899__$1 = tmp86971;var inst_86900__$1 = tmp86969;var inst_86901__$1 = tmp86970;var inst_86902__$1 = inst_86910;var state_86960__$1 = (function (){var statearr_86976 = state_86960;(statearr_86976[(11)] = inst_86900__$1);
(statearr_86976[(12)] = inst_86902__$1);
(statearr_86976[(13)] = inst_86901__$1);
(statearr_86976[(14)] = inst_86899__$1);
(statearr_86976[(15)] = inst_86909);
return statearr_86976;
})();var statearr_86977_87089 = state_86960__$1;(statearr_86977_87089[(2)] = null);
(statearr_86977_87089[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (4)))
{var inst_86772 = (state_86960[(16)]);var inst_86766 = (state_86960[(10)]);var inst_86772__$1 = (state_86960[(2)]);var inst_86773 = cljs.core.get.call(null,inst_86772__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_86774 = inst_86766;var state_86960__$1 = (function (){var statearr_86978 = state_86960;(statearr_86978[(16)] = inst_86772__$1);
(statearr_86978[(17)] = inst_86773);
(statearr_86978[(7)] = inst_86774);
return statearr_86978;
})();var statearr_86979_87090 = state_86960__$1;(statearr_86979_87090[(2)] = null);
(statearr_86979_87090[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (54)))
{var inst_86928 = (state_86960[(2)]);var state_86960__$1 = state_86960;var statearr_86980_87091 = state_86960__$1;(statearr_86980_87091[(2)] = inst_86928);
(statearr_86980_87091[(1)] = (51));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (15)))
{var inst_86782 = (state_86960[(18)]);var state_86960__$1 = state_86960;var statearr_86981_87092 = state_86960__$1;(statearr_86981_87092[(2)] = inst_86782);
(statearr_86981_87092[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (48)))
{var inst_86933 = (state_86960[(2)]);var state_86960__$1 = state_86960;var statearr_86982_87093 = state_86960__$1;(statearr_86982_87093[(2)] = inst_86933);
(statearr_86982_87093[(1)] = (45));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (50)))
{var state_86960__$1 = state_86960;var statearr_86983_87094 = state_86960__$1;(statearr_86983_87094[(2)] = null);
(statearr_86983_87094[(1)] = (51));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (21)))
{var inst_86789 = (state_86960[(8)]);var state_86960__$1 = state_86960;var statearr_86984_87095 = state_86960__$1;(statearr_86984_87095[(2)] = inst_86789);
(statearr_86984_87095[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (31)))
{var inst_86946 = (state_86960[(2)]);var state_86960__$1 = state_86960;var statearr_86985_87096 = state_86960__$1;(statearr_86985_87096[(2)] = inst_86946);
(statearr_86985_87096[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (32)))
{var inst_86789 = (state_86960[(8)]);var inst_86821 = (state_86960[(9)]);var inst_86783 = (state_86960[(19)]);var inst_86772 = (state_86960[(16)]);var inst_86822 = (state_86960[(20)]);var inst_86790 = (state_86960[(21)]);var inst_86820 = (state_86960[(22)]);var inst_86774 = (state_86960[(7)]);var inst_86788 = (state_86960[(23)]);var inst_86782 = (state_86960[(18)]);var inst_86870 = cljs.core.async.chan.call(null,(1));var inst_86871 = (function (){var cmd = inst_86821;var input = inst_86820;var ctx = inst_86782;var map__86776 = inst_86782;var vec__86784 = inst_86788;var G__86762 = inst_86774;var expr__86792 = inst_86790;var v = inst_86789;var map__86814 = inst_86820;var pred__86823 = cljs.core._EQ_;var params = inst_86822;var cnt = inst_86783;var pred__86791 = cljs.core._EQ_;var expr__86824 = inst_86821;var ch = inst_86790;var c__6202__auto____$1 = inst_86870;var map__86763 = inst_86772;return ((function (cmd,input,ctx,map__86776,vec__86784,G__86762,expr__86792,v,map__86814,pred__86823,params,cnt,pred__86791,expr__86824,ch,c__6202__auto____$1,map__86763,inst_86789,inst_86821,inst_86783,inst_86772,inst_86822,inst_86790,inst_86820,inst_86774,inst_86788,inst_86782,inst_86870,state_val_86961,c__6202__auto___87078,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (cmd,input,ctx,map__86776,vec__86784,G__86762,expr__86792,v,map__86814,pred__86823,params,cnt,pred__86791,expr__86824,ch,c__6202__auto____$1,map__86763,inst_86789,inst_86821,inst_86783,inst_86772,inst_86822,inst_86790,inst_86820,inst_86774,inst_86788,inst_86782,inst_86870,state_val_86961,c__6202__auto___87078,draw,onSystem,onView){
return (function (state_86868){var state_val_86869 = (state_86868[(1)]);if((state_val_86869 === (6)))
{var inst_86864 = (state_86868[(2)]);var state_86868__$1 = state_86868;var statearr_86986_87097 = state_86868__$1;(statearr_86986_87097[(2)] = inst_86864);
(statearr_86986_87097[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86869 === (5)))
{var inst_86866 = (state_86868[(2)]);var state_86868__$1 = state_86868;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86868__$1,inst_86866);
} else
{if((state_val_86869 === (4)))
{var inst_86857 = (state_86868[(7)]);var inst_86861 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_86857];var inst_86862 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_86861,null));var state_86868__$1 = state_86868;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86868__$1,(6),onSystem,inst_86862);
} else
{if((state_val_86869 === (3)))
{var inst_86856 = (state_86868[(8)]);var inst_86859 = alert(inst_86856);var state_86868__$1 = state_86868;var statearr_86987_87098 = state_86868__$1;(statearr_86987_87098[(2)] = inst_86859);
(statearr_86987_87098[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86869 === (2)))
{var inst_86856 = (state_86868[(8)]);var inst_86855 = (state_86868[(2)]);var inst_86856__$1 = cljs.core.nth.call(null,inst_86855,(0),null);var inst_86857 = cljs.core.nth.call(null,inst_86855,(1),null);var state_86868__$1 = (function (){var statearr_86988 = state_86868;(statearr_86988[(7)] = inst_86857);
(statearr_86988[(8)] = inst_86856__$1);
return statearr_86988;
})();if(cljs.core.truth_(inst_86856__$1))
{var statearr_86989_87099 = state_86868__$1;(statearr_86989_87099[(1)] = (3));
} else
{var statearr_86990_87100 = state_86868__$1;(statearr_86990_87100[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86869 === (1)))
{var inst_86853 = test.stock4.stock_info.call(null,null,params,"2014/1/1",(0),(200));var state_86868__$1 = state_86868;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86868__$1,(2),inst_86853);
} else
{return null;
}
}
}
}
}
}
});})(cmd,input,ctx,map__86776,vec__86784,G__86762,expr__86792,v,map__86814,pred__86823,params,cnt,pred__86791,expr__86824,ch,c__6202__auto____$1,map__86763,inst_86789,inst_86821,inst_86783,inst_86772,inst_86822,inst_86790,inst_86820,inst_86774,inst_86788,inst_86782,inst_86870,state_val_86961,c__6202__auto___87078,draw,onSystem,onView))
;return ((function (switch__6187__auto__,cmd,input,ctx,map__86776,vec__86784,G__86762,expr__86792,v,map__86814,pred__86823,params,cnt,pred__86791,expr__86824,ch,c__6202__auto____$1,map__86763,inst_86789,inst_86821,inst_86783,inst_86772,inst_86822,inst_86790,inst_86820,inst_86774,inst_86788,inst_86782,inst_86870,state_val_86961,c__6202__auto___87078,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_86994 = [null,null,null,null,null,null,null,null,null];(statearr_86994[(0)] = state_machine__6188__auto__);
(statearr_86994[(1)] = (1));
return statearr_86994;
});
var state_machine__6188__auto____1 = (function (state_86868){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_86868);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e86995){if((e86995 instanceof Object))
{var ex__6191__auto__ = e86995;var statearr_86996_87101 = state_86868;(statearr_86996_87101[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86868);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e86995;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__87102 = state_86868;
state_86868 = G__87102;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_86868){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_86868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,cmd,input,ctx,map__86776,vec__86784,G__86762,expr__86792,v,map__86814,pred__86823,params,cnt,pred__86791,expr__86824,ch,c__6202__auto____$1,map__86763,inst_86789,inst_86821,inst_86783,inst_86772,inst_86822,inst_86790,inst_86820,inst_86774,inst_86788,inst_86782,inst_86870,state_val_86961,c__6202__auto___87078,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_86997 = f__6203__auto__.call(null);(statearr_86997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto____$1);
return statearr_86997;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});
;})(cmd,input,ctx,map__86776,vec__86784,G__86762,expr__86792,v,map__86814,pred__86823,params,cnt,pred__86791,expr__86824,ch,c__6202__auto____$1,map__86763,inst_86789,inst_86821,inst_86783,inst_86772,inst_86822,inst_86790,inst_86820,inst_86774,inst_86788,inst_86782,inst_86870,state_val_86961,c__6202__auto___87078,draw,onSystem,onView))
})();var inst_86872 = cljs.core.async.impl.dispatch.run.call(null,inst_86871);var state_86960__$1 = (function (){var statearr_86998 = state_86960;(statearr_86998[(24)] = inst_86872);
return statearr_86998;
})();var statearr_86999_87103 = state_86960__$1;(statearr_86999_87103[(2)] = inst_86782);
(statearr_86999_87103[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (40)))
{var inst_86940 = (state_86960[(2)]);var state_86960__$1 = state_86960;var statearr_87000_87104 = state_86960__$1;(statearr_87000_87104[(2)] = inst_86940);
(statearr_87000_87104[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (33)))
{var inst_86821 = (state_86960[(9)]);var inst_86874 = cljs.core._EQ_.call(null,"avg",inst_86821);var state_86960__$1 = state_86960;if(inst_86874)
{var statearr_87001_87105 = state_86960__$1;(statearr_87001_87105[(1)] = (35));
} else
{var statearr_87002_87106 = state_86960__$1;(statearr_87002_87106[(1)] = (36));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (13)))
{var inst_86955 = (state_86960[(2)]);var inst_86774 = inst_86955;var state_86960__$1 = (function (){var statearr_87003 = state_86960;(statearr_87003[(7)] = inst_86774);
return statearr_87003;
})();var statearr_87004_87107 = state_86960__$1;(statearr_87004_87107[(2)] = null);
(statearr_87004_87107[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (22)))
{var inst_86821 = (state_86960[(9)]);var inst_86820 = (state_86960[(22)]);var inst_86820__$1 = (state_86960[(2)]);var inst_86821__$1 = cljs.core.get.call(null,inst_86820__$1,"cmd");var inst_86822 = cljs.core.get.call(null,inst_86820__$1,"params");var inst_86826 = cljs.core._EQ_.call(null,"length",inst_86821__$1);var state_86960__$1 = (function (){var statearr_87005 = state_86960;(statearr_87005[(9)] = inst_86821__$1);
(statearr_87005[(20)] = inst_86822);
(statearr_87005[(22)] = inst_86820__$1);
return statearr_87005;
})();if(inst_86826)
{var statearr_87006_87108 = state_86960__$1;(statearr_87006_87108[(1)] = (23));
} else
{var statearr_87007_87109 = state_86960__$1;(statearr_87007_87109[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (36)))
{var inst_86821 = (state_86960[(9)]);var inst_86882 = cljs.core._EQ_.call(null,"turn",inst_86821);var state_86960__$1 = state_86960;if(inst_86882)
{var statearr_87008_87110 = state_86960__$1;(statearr_87008_87110[(1)] = (38));
} else
{var statearr_87009_87111 = state_86960__$1;(statearr_87009_87111[(1)] = (39));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (41)))
{var inst_86822 = (state_86960[(20)]);var inst_86782 = (state_86960[(18)]);var inst_86896 = cljs.core.keyword.call(null,inst_86822);var inst_86897 = inst_86896.call(null,inst_86782);var inst_86898 = cljs.core.seq.call(null,inst_86897);var inst_86899 = inst_86898;var inst_86900 = null;var inst_86901 = (0);var inst_86902 = (0);var state_86960__$1 = (function (){var statearr_87010 = state_86960;(statearr_87010[(11)] = inst_86900);
(statearr_87010[(12)] = inst_86902);
(statearr_87010[(13)] = inst_86901);
(statearr_87010[(14)] = inst_86899);
return statearr_87010;
})();var statearr_87011_87112 = state_86960__$1;(statearr_87011_87112[(2)] = null);
(statearr_87011_87112[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (43)))
{var inst_86938 = (state_86960[(2)]);var state_86960__$1 = state_86960;var statearr_87012_87113 = state_86960__$1;(statearr_87012_87113[(2)] = inst_86938);
(statearr_87012_87113[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (29)))
{var inst_86822 = (state_86960[(20)]);var inst_86782 = (state_86960[(18)]);var inst_86844 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_86782);var inst_86845 = test.stock4.ema.call(null,inst_86822,(0),inst_86844);var inst_86846 = cljs.core.take.call(null,(10),inst_86845);var inst_86847 = cljs.core.pr_str.call(null,inst_86846);var inst_86848 = console.log(inst_86847);var state_86960__$1 = (function (){var statearr_87013 = state_86960;(statearr_87013[(25)] = inst_86848);
return statearr_87013;
})();var statearr_87014_87114 = state_86960__$1;(statearr_87014_87114[(2)] = inst_86782);
(statearr_87014_87114[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (44)))
{var inst_86902 = (state_86960[(12)]);var inst_86901 = (state_86960[(13)]);var inst_86904 = (inst_86902 < inst_86901);var inst_86905 = inst_86904;var state_86960__$1 = state_86960;if(cljs.core.truth_(inst_86905))
{var statearr_87015_87115 = state_86960__$1;(statearr_87015_87115[(1)] = (46));
} else
{var statearr_87016_87116 = state_86960__$1;(statearr_87016_87116[(1)] = (47));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (6)))
{var inst_86958 = (state_86960[(2)]);var state_86960__$1 = state_86960;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86960__$1,inst_86958);
} else
{if((state_val_86961 === (28)))
{var inst_86948 = (state_86960[(2)]);var state_86960__$1 = state_86960;var statearr_87017_87117 = state_86960__$1;(statearr_87017_87117[(2)] = inst_86948);
(statearr_87017_87117[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (51)))
{var inst_86931 = (state_86960[(2)]);var state_86960__$1 = state_86960;var statearr_87018_87118 = state_86960__$1;(statearr_87018_87118[(2)] = inst_86931);
(statearr_87018_87118[(1)] = (48));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (25)))
{var inst_86950 = (state_86960[(2)]);var state_86960__$1 = state_86960;var statearr_87019_87119 = state_86960__$1;(statearr_87019_87119[(2)] = inst_86950);
(statearr_87019_87119[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (34)))
{var inst_86944 = (state_86960[(2)]);var state_86960__$1 = state_86960;var statearr_87020_87120 = state_86960__$1;(statearr_87020_87120[(2)] = inst_86944);
(statearr_87020_87120[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (17)))
{var inst_86789 = (state_86960[(8)]);var inst_86815 = cljs.core.seq_QMARK_.call(null,inst_86789);var state_86960__$1 = state_86960;if(inst_86815)
{var statearr_87021_87121 = state_86960__$1;(statearr_87021_87121[(1)] = (20));
} else
{var statearr_87022_87122 = state_86960__$1;(statearr_87022_87122[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (3)))
{var inst_86766 = (state_86960[(10)]);var state_86960__$1 = state_86960;var statearr_87023_87123 = state_86960__$1;(statearr_87023_87123[(2)] = inst_86766);
(statearr_87023_87123[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (12)))
{var inst_86790 = (state_86960[(21)]);var inst_86812 = cljs.core._EQ_.call(null,onView,inst_86790);var state_86960__$1 = state_86960;if(inst_86812)
{var statearr_87024_87124 = state_86960__$1;(statearr_87024_87124[(1)] = (17));
} else
{var statearr_87025_87125 = state_86960__$1;(statearr_87025_87125[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (2)))
{var inst_86766 = (state_86960[(10)]);var inst_86769 = cljs.core.apply.call(null,cljs.core.hash_map,inst_86766);var state_86960__$1 = state_86960;var statearr_87026_87126 = state_86960__$1;(statearr_87026_87126[(2)] = inst_86769);
(statearr_87026_87126[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (23)))
{var inst_86782 = (state_86960[(18)]);var inst_86828 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_86782);var inst_86829 = test.stock4.check_length.call(null,inst_86828);var inst_86830 = cljs.core.take.call(null,(10),inst_86829);var inst_86831 = cljs.core.pr_str.call(null,inst_86830);var inst_86832 = console.log(inst_86831);var state_86960__$1 = (function (){var statearr_87027 = state_86960;(statearr_87027[(26)] = inst_86832);
return statearr_87027;
})();var statearr_87028_87127 = state_86960__$1;(statearr_87028_87127[(2)] = inst_86782);
(statearr_87028_87127[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (47)))
{var inst_86913 = (state_86960[(27)]);var inst_86899 = (state_86960[(14)]);var inst_86913__$1 = cljs.core.seq.call(null,inst_86899);var state_86960__$1 = (function (){var statearr_87029 = state_86960;(statearr_87029[(27)] = inst_86913__$1);
return statearr_87029;
})();if(inst_86913__$1)
{var statearr_87030_87128 = state_86960__$1;(statearr_87030_87128[(1)] = (49));
} else
{var statearr_87031_87129 = state_86960__$1;(statearr_87031_87129[(1)] = (50));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (35)))
{var inst_86783 = (state_86960[(19)]);var inst_86822 = (state_86960[(20)]);var inst_86782 = (state_86960[(18)]);var inst_86876 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_86782);var inst_86877 = test.stock4.average.call(null,inst_86822,inst_86876);var inst_86878 = cljs.core.take.call(null,inst_86783,inst_86877);var inst_86879 = cljs.core.assoc.call(null,inst_86782,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_86878);var inst_86880 = draw.call(null,inst_86879);var state_86960__$1 = state_86960;var statearr_87032_87130 = state_86960__$1;(statearr_87032_87130[(2)] = inst_86880);
(statearr_87032_87130[(1)] = (37));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (19)))
{var inst_86953 = (state_86960[(2)]);var state_86960__$1 = state_86960;var statearr_87033_87131 = state_86960__$1;(statearr_87033_87131[(2)] = inst_86953);
(statearr_87033_87131[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (11)))
{var inst_86789 = (state_86960[(8)]);var inst_86797 = cljs.core.nth.call(null,inst_86789,(0),null);var inst_86798 = cljs.core.nth.call(null,inst_86789,(1),null);var inst_86802 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_86797);var state_86960__$1 = (function (){var statearr_87034 = state_86960;(statearr_87034[(28)] = inst_86798);
return statearr_87034;
})();if(inst_86802)
{var statearr_87035_87132 = state_86960__$1;(statearr_87035_87132[(1)] = (14));
} else
{var statearr_87036_87133 = state_86960__$1;(statearr_87036_87133[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (9)))
{var inst_86782 = (state_86960[(18)]);var inst_86782__$1 = (state_86960[(2)]);var inst_86783 = cljs.core.get.call(null,inst_86782__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_86785 = [onSystem,onView];var inst_86786 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_86785,null));var state_86960__$1 = (function (){var statearr_87037 = state_86960;(statearr_87037[(19)] = inst_86783);
(statearr_87037[(18)] = inst_86782__$1);
return statearr_87037;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_86960__$1,(10),inst_86786);
} else
{if((state_val_86961 === (5)))
{var inst_86774 = (state_86960[(7)]);var inst_86777 = cljs.core.seq_QMARK_.call(null,inst_86774);var state_86960__$1 = state_86960;if(inst_86777)
{var statearr_87038_87134 = state_86960__$1;(statearr_87038_87134[(1)] = (7));
} else
{var statearr_87039_87135 = state_86960__$1;(statearr_87039_87135[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (14)))
{var inst_86783 = (state_86960[(19)]);var inst_86798 = (state_86960[(28)]);var inst_86782 = (state_86960[(18)]);var inst_86804 = cljs.core.assoc.call(null,inst_86782,new cljs.core.Keyword(null,"info","info",-317069002),inst_86798);var inst_86805 = cljs.core.take.call(null,inst_86783,inst_86798);var inst_86806 = cljs.core.assoc.call(null,inst_86804,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_86805);var inst_86807 = draw.call(null,inst_86806);var state_86960__$1 = state_86960;var statearr_87040_87136 = state_86960__$1;(statearr_87040_87136[(2)] = inst_86807);
(statearr_87040_87136[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (45)))
{var inst_86782 = (state_86960[(18)]);var inst_86935 = (state_86960[(2)]);var state_86960__$1 = (function (){var statearr_87041 = state_86960;(statearr_87041[(29)] = inst_86935);
return statearr_87041;
})();var statearr_87042_87137 = state_86960__$1;(statearr_87042_87137[(2)] = inst_86782);
(statearr_87042_87137[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (53)))
{var inst_86913 = (state_86960[(27)]);var inst_86922 = cljs.core.first.call(null,inst_86913);var inst_86923 = cljs.core.pr_str.call(null,inst_86922);var inst_86924 = console.log(inst_86923);var inst_86925 = cljs.core.next.call(null,inst_86913);var inst_86899 = inst_86925;var inst_86900 = null;var inst_86901 = (0);var inst_86902 = (0);var state_86960__$1 = (function (){var statearr_87043 = state_86960;(statearr_87043[(11)] = inst_86900);
(statearr_87043[(12)] = inst_86902);
(statearr_87043[(30)] = inst_86924);
(statearr_87043[(13)] = inst_86901);
(statearr_87043[(14)] = inst_86899);
return statearr_87043;
})();var statearr_87044_87138 = state_86960__$1;(statearr_87044_87138[(2)] = null);
(statearr_87044_87138[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (26)))
{var inst_86822 = (state_86960[(20)]);var inst_86782 = (state_86960[(18)]);var inst_86836 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_86782);var inst_86837 = test.stock4.sma.call(null,inst_86822,inst_86836);var inst_86838 = cljs.core.take.call(null,(10),inst_86837);var inst_86839 = cljs.core.pr_str.call(null,inst_86838);var inst_86840 = console.log(inst_86839);var state_86960__$1 = (function (){var statearr_87045 = state_86960;(statearr_87045[(31)] = inst_86840);
return statearr_87045;
})();var statearr_87046_87139 = state_86960__$1;(statearr_87046_87139[(2)] = inst_86782);
(statearr_87046_87139[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (16)))
{var inst_86810 = (state_86960[(2)]);var state_86960__$1 = state_86960;var statearr_87047_87140 = state_86960__$1;(statearr_87047_87140[(2)] = inst_86810);
(statearr_87047_87140[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (38)))
{var inst_86783 = (state_86960[(19)]);var inst_86782 = (state_86960[(18)]);var inst_86884 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_86782);var inst_86885 = test.stock4.check_turn.call(null,inst_86884);var inst_86886 = cljs.core.take.call(null,inst_86783,inst_86885);var inst_86887 = cljs.core.assoc.call(null,inst_86782,new cljs.core.Keyword(null,"turn","turn",75759344),inst_86886);var inst_86888 = draw.call(null,inst_86887);var state_86960__$1 = state_86960;var statearr_87048_87141 = state_86960__$1;(statearr_87048_87141[(2)] = inst_86888);
(statearr_87048_87141[(1)] = (40));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (30)))
{var inst_86821 = (state_86960[(9)]);var inst_86850 = cljs.core._EQ_.call(null,"stock",inst_86821);var state_86960__$1 = state_86960;if(inst_86850)
{var statearr_87049_87142 = state_86960__$1;(statearr_87049_87142[(1)] = (32));
} else
{var statearr_87050_87143 = state_86960__$1;(statearr_87050_87143[(1)] = (33));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (10)))
{var inst_86790 = (state_86960[(21)]);var inst_86788 = (state_86960[(23)]);var inst_86788__$1 = (state_86960[(2)]);var inst_86789 = cljs.core.nth.call(null,inst_86788__$1,(0),null);var inst_86790__$1 = cljs.core.nth.call(null,inst_86788__$1,(1),null);var inst_86794 = cljs.core._EQ_.call(null,onSystem,inst_86790__$1);var state_86960__$1 = (function (){var statearr_87051 = state_86960;(statearr_87051[(8)] = inst_86789);
(statearr_87051[(21)] = inst_86790__$1);
(statearr_87051[(23)] = inst_86788__$1);
return statearr_87051;
})();if(inst_86794)
{var statearr_87052_87144 = state_86960__$1;(statearr_87052_87144[(1)] = (11));
} else
{var statearr_87053_87145 = state_86960__$1;(statearr_87053_87145[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (18)))
{var inst_86782 = (state_86960[(18)]);var state_86960__$1 = state_86960;var statearr_87054_87146 = state_86960__$1;(statearr_87054_87146[(2)] = inst_86782);
(statearr_87054_87146[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (52)))
{var inst_86913 = (state_86960[(27)]);var inst_86917 = cljs.core.chunk_first.call(null,inst_86913);var inst_86918 = cljs.core.chunk_rest.call(null,inst_86913);var inst_86919 = cljs.core.count.call(null,inst_86917);var inst_86899 = inst_86918;var inst_86900 = inst_86917;var inst_86901 = inst_86919;var inst_86902 = (0);var state_86960__$1 = (function (){var statearr_87055 = state_86960;(statearr_87055[(11)] = inst_86900);
(statearr_87055[(12)] = inst_86902);
(statearr_87055[(13)] = inst_86901);
(statearr_87055[(14)] = inst_86899);
return statearr_87055;
})();var statearr_87056_87147 = state_86960__$1;(statearr_87056_87147[(2)] = null);
(statearr_87056_87147[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (42)))
{var inst_86782 = (state_86960[(18)]);var state_86960__$1 = state_86960;var statearr_87057_87148 = state_86960__$1;(statearr_87057_87148[(2)] = inst_86782);
(statearr_87057_87148[(1)] = (43));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (37)))
{var inst_86942 = (state_86960[(2)]);var state_86960__$1 = state_86960;var statearr_87058_87149 = state_86960__$1;(statearr_87058_87149[(2)] = inst_86942);
(statearr_87058_87149[(1)] = (34));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (8)))
{var inst_86774 = (state_86960[(7)]);var state_86960__$1 = state_86960;var statearr_87059_87150 = state_86960__$1;(statearr_87059_87150[(2)] = inst_86774);
(statearr_87059_87150[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86961 === (49)))
{var inst_86913 = (state_86960[(27)]);var inst_86915 = cljs.core.chunked_seq_QMARK_.call(null,inst_86913);var state_86960__$1 = state_86960;if(inst_86915)
{var statearr_87060_87151 = state_86960__$1;(statearr_87060_87151[(1)] = (52));
} else
{var statearr_87061_87152 = state_86960__$1;(statearr_87061_87152[(1)] = (53));
}
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
}
}
}
}
}
}
}
}
}
});})(c__6202__auto___87078,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___87078,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_87065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_87065[(0)] = state_machine__6188__auto__);
(statearr_87065[(1)] = (1));
return statearr_87065;
});
var state_machine__6188__auto____1 = (function (state_86960){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_86960);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e87066){if((e87066 instanceof Object))
{var ex__6191__auto__ = e87066;var statearr_87067_87153 = state_86960;(statearr_87067_87153[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86960);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e87066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__87154 = state_86960;
state_86960 = G__87154;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_86960){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_86960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___87078,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_87068 = f__6203__auto__.call(null);(statearr_87068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___87078);
return statearr_87068;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___87078,draw,onSystem,onView))
);
return null;
});
test.stock4.main.call(null);
