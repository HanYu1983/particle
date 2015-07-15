// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock4');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
test.stock4.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__91000_SHARP_){return cljs.core.nth.call(null,p1__91000_SHARP_,(2));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__91001_SHARP_){return cljs.core.nth.call(null,p1__91001_SHARP_,(3));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock4.draw_turn = (function draw_turn(ctx,w,h,kline,turn){var vec__91012 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__91012,(0),null);var min_v = cljs.core.nth.call(null,vec__91012,(1),null);var offset_v = cljs.core.nth.call(null,vec__91012,(2),null);var offset_x = cljs.core.nth.call(null,vec__91012,(3),null);var pos_y = cljs.core.nth.call(null,vec__91012,(4),null);(ctx["fillStyle"] = "black");
var seq__91013 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__91012,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__91021__delegate = function (args){return args;
};
var G__91021 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__91021__delegate.call(this,args);};
G__91021.cljs$lang$maxFixedArity = 0;
G__91021.cljs$lang$applyTo = (function (arglist__91022){
var args = cljs.core.seq(arglist__91022);
return G__91021__delegate(args);
});
G__91021.cljs$core$IFn$_invoke$arity$variadic = G__91021__delegate;
return G__91021;
})()
;})(vec__91012,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__91014 = null;var count__91015 = (0);var i__91016 = (0);while(true){
if((i__91016 < count__91015))
{var vec__91017 = cljs.core._nth.call(null,chunk__91014,i__91016);var idx = cljs.core.nth.call(null,vec__91017,(0),null);var vec__91018 = cljs.core.nth.call(null,vec__91017,(1),null);var date = cljs.core.nth.call(null,vec__91018,(0),null);var _ = cljs.core.nthnext.call(null,vec__91018,(1));var line = vec__91018;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__91013,chunk__91014,count__91015,i__91016,vec__91017,idx,vec__91018,date,_,line,vec__91012,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__91002_SHARP_){return cljs.core._EQ_.call(null,date,p1__91002_SHARP_);
});})(seq__91013,chunk__91014,count__91015,i__91016,vec__91017,idx,vec__91018,date,_,line,vec__91012,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__91023 = seq__91013;
var G__91024 = chunk__91014;
var G__91025 = count__91015;
var G__91026 = (i__91016 + (1));
seq__91013 = G__91023;
chunk__91014 = G__91024;
count__91015 = G__91025;
i__91016 = G__91026;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__91013);if(temp__4126__auto__)
{var seq__91013__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91013__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__91013__$1);{
var G__91027 = cljs.core.chunk_rest.call(null,seq__91013__$1);
var G__91028 = c__4307__auto__;
var G__91029 = cljs.core.count.call(null,c__4307__auto__);
var G__91030 = (0);
seq__91013 = G__91027;
chunk__91014 = G__91028;
count__91015 = G__91029;
i__91016 = G__91030;
continue;
}
} else
{var vec__91019 = cljs.core.first.call(null,seq__91013__$1);var idx = cljs.core.nth.call(null,vec__91019,(0),null);var vec__91020 = cljs.core.nth.call(null,vec__91019,(1),null);var date = cljs.core.nth.call(null,vec__91020,(0),null);var _ = cljs.core.nthnext.call(null,vec__91020,(1));var line = vec__91020;if(cljs.core.truth_(cljs.core.some.call(null,((function (seq__91013,chunk__91014,count__91015,i__91016,vec__91019,idx,vec__91020,date,_,line,seq__91013__$1,temp__4126__auto__,vec__91012,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p1__91002_SHARP_){return cljs.core._EQ_.call(null,date,p1__91002_SHARP_);
});})(seq__91013,chunk__91014,count__91015,i__91016,vec__91019,idx,vec__91020,date,_,line,seq__91013__$1,temp__4126__auto__,vec__91012,max_v,min_v,offset_v,offset_x,pos_y))
,turn)))
{ctx.fillText("turn",(idx * offset_x),h);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{} else
{}
}
{
var G__91031 = cljs.core.next.call(null,seq__91013__$1);
var G__91032 = null;
var G__91033 = (0);
var G__91034 = (0);
seq__91013 = G__91031;
chunk__91014 = G__91032;
count__91015 = G__91033;
i__91016 = G__91034;
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
test.stock4.draw_line = (function draw_line(ctx,w,h,kline){var vec__91044 = test.stock4.graphic_base.call(null,w,h,kline);var max_v = cljs.core.nth.call(null,vec__91044,(0),null);var min_v = cljs.core.nth.call(null,vec__91044,(1),null);var offset_v = cljs.core.nth.call(null,vec__91044,(2),null);var offset_x = cljs.core.nth.call(null,vec__91044,(3),null);var pos_y = cljs.core.nth.call(null,vec__91044,(4),null);var seq__91045 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__91044,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__91053__delegate = function (args){return args;
};
var G__91053 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__91053__delegate.call(this,args);};
G__91053.cljs$lang$maxFixedArity = 0;
G__91053.cljs$lang$applyTo = (function (arglist__91054){
var args = cljs.core.seq(arglist__91054);
return G__91053__delegate(args);
});
G__91053.cljs$core$IFn$_invoke$arity$variadic = G__91053__delegate;
return G__91053;
})()
;})(vec__91044,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,kline))),kline));var chunk__91046 = null;var count__91047 = (0);var i__91048 = (0);while(true){
if((i__91048 < count__91047))
{var vec__91049 = cljs.core._nth.call(null,chunk__91046,i__91048);var idx = cljs.core.nth.call(null,vec__91049,(0),null);var vec__91050 = cljs.core.nth.call(null,vec__91049,(1),null);var date = cljs.core.nth.call(null,vec__91050,(0),null);var open = cljs.core.nth.call(null,vec__91050,(1),null);var high = cljs.core.nth.call(null,vec__91050,(2),null);var low = cljs.core.nth.call(null,vec__91050,(3),null);var close = cljs.core.nth.call(null,vec__91050,(4),null);var volume = cljs.core.nth.call(null,vec__91050,(5),null);(ctx["strokeStyle"] = "black");
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
var G__91055 = seq__91045;
var G__91056 = chunk__91046;
var G__91057 = count__91047;
var G__91058 = (i__91048 + (1));
seq__91045 = G__91055;
chunk__91046 = G__91056;
count__91047 = G__91057;
i__91048 = G__91058;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__91045);if(temp__4126__auto__)
{var seq__91045__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91045__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__91045__$1);{
var G__91059 = cljs.core.chunk_rest.call(null,seq__91045__$1);
var G__91060 = c__4307__auto__;
var G__91061 = cljs.core.count.call(null,c__4307__auto__);
var G__91062 = (0);
seq__91045 = G__91059;
chunk__91046 = G__91060;
count__91047 = G__91061;
i__91048 = G__91062;
continue;
}
} else
{var vec__91051 = cljs.core.first.call(null,seq__91045__$1);var idx = cljs.core.nth.call(null,vec__91051,(0),null);var vec__91052 = cljs.core.nth.call(null,vec__91051,(1),null);var date = cljs.core.nth.call(null,vec__91052,(0),null);var open = cljs.core.nth.call(null,vec__91052,(1),null);var high = cljs.core.nth.call(null,vec__91052,(2),null);var low = cljs.core.nth.call(null,vec__91052,(3),null);var close = cljs.core.nth.call(null,vec__91052,(4),null);var volume = cljs.core.nth.call(null,vec__91052,(5),null);(ctx["strokeStyle"] = "black");
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
var G__91063 = cljs.core.next.call(null,seq__91045__$1);
var G__91064 = null;
var G__91065 = (0);
var G__91066 = (0);
seq__91045 = G__91063;
chunk__91046 = G__91064;
count__91047 = G__91065;
i__91048 = G__91066;
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
test.stock4.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__91070 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__91070,(0),null);var h = cljs.core.nth.call(null,vec__91070,(1),null);return ((function (ctx,vec__91070,w,h){
return (function (p__91071){var map__91072 = p__91071;var map__91072__$1 = ((cljs.core.seq_QMARK_.call(null,map__91072))?cljs.core.apply.call(null,cljs.core.hash_map,map__91072):map__91072);var appctx = map__91072__$1;var kline = cljs.core.get.call(null,map__91072__$1,new cljs.core.Keyword(null,"kline","kline",-1160432594));var turn = cljs.core.get.call(null,map__91072__$1,new cljs.core.Keyword(null,"turn","turn",75759344));var avgs = cljs.core.get.call(null,map__91072__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var bias = cljs.core.get.call(null,map__91072__$1,new cljs.core.Keyword(null,"bias","bias",-315297926));(ctx["fillStyle"] = "yellow");
ctx.fillRect((0),(0),w,h);
test.stock4.draw_line.call(null,ctx,w,h,kline);
if(cljs.core.truth_(turn))
{test.stock4.draw_turn.call(null,ctx,w,h,kline,turn);
} else
{}
return appctx;
});
;})(ctx,vec__91070,w,h))
});
test.stock4.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock4.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj91110 = {"url":"/proxy","dataType":"text","data":(function (){var obj91112 = {"url":url};return obj91112;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_91119){var state_val_91120 = (state_91119[(1)]);if((state_val_91120 === (2)))
{var inst_91116 = (state_91119[(2)]);var inst_91117 = cljs.core.async.close_BANG_.call(null,ret);var state_91119__$1 = (function (){var statearr_91121 = state_91119;(statearr_91121[(7)] = inst_91116);
return statearr_91121;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91119__$1,inst_91117);
} else
{if((state_val_91120 === (1)))
{var inst_91113 = [null,data];var inst_91114 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_91113,null));var state_91119__$1 = state_91119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91119__$1,(2),ret,inst_91114);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_91125 = [null,null,null,null,null,null,null,null];(statearr_91125[(0)] = state_machine__6188__auto__);
(statearr_91125[(1)] = (1));
return statearr_91125;
});
var state_machine__6188__auto____1 = (function (state_91119){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_91119);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e91126){if((e91126 instanceof Object))
{var ex__6191__auto__ = e91126;var statearr_91127_91145 = state_91119;(statearr_91127_91145[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91119);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e91126;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__91146 = state_91119;
state_91119 = G__91146;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_91119){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_91119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_91128 = f__6203__auto__.call(null);(statearr_91128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_91128;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_91135){var state_val_91136 = (state_91135[(1)]);if((state_val_91136 === (2)))
{var inst_91132 = (state_91135[(2)]);var inst_91133 = cljs.core.async.close_BANG_.call(null,ret);var state_91135__$1 = (function (){var statearr_91137 = state_91135;(statearr_91137[(7)] = inst_91132);
return statearr_91137;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91135__$1,inst_91133);
} else
{if((state_val_91136 === (1)))
{var inst_91129 = [err];var inst_91130 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_91129,null));var state_91135__$1 = state_91135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91135__$1,(2),ret,inst_91130);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_91141 = [null,null,null,null,null,null,null,null];(statearr_91141[(0)] = state_machine__6188__auto__);
(statearr_91141[(1)] = (1));
return statearr_91141;
});
var state_machine__6188__auto____1 = (function (state_91135){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_91135);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e91142){if((e91142 instanceof Object))
{var ex__6191__auto__ = e91142;var statearr_91143_91147 = state_91135;(statearr_91143_91147[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91135);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e91142;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__91148 = state_91135;
state_91135 = G__91148;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_91135){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_91135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_91144 = f__6203__auto__.call(null);(statearr_91144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_91144;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj91110;
})());
return ret;
});
test.stock4.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__91157(s__91158){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__91158__$1 = s__91158;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__91158__$1);if(temp__4126__auto__)
{var s__91158__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__91158__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__91158__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__91160 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__91159 = (0);while(true){
if((i__91159 < size__4275__auto__))
{var vec__91163 = cljs.core._nth.call(null,c__4274__auto__,i__91159);var _ = cljs.core.nth.call(null,vec__91163,(0),null);var date = cljs.core.nth.call(null,vec__91163,(1),null);var open = cljs.core.nth.call(null,vec__91163,(2),null);var high = cljs.core.nth.call(null,vec__91163,(3),null);var low = cljs.core.nth.call(null,vec__91163,(4),null);var close = cljs.core.nth.call(null,vec__91163,(5),null);var volume = cljs.core.nth.call(null,vec__91163,(6),null);cljs.core.chunk_append.call(null,b__91160,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null));
{
var G__91165 = (i__91159 + (1));
i__91159 = G__91165;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91160),iter__91157.call(null,cljs.core.chunk_rest.call(null,s__91158__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91160),null);
}
} else
{var vec__91164 = cljs.core.first.call(null,s__91158__$2);var _ = cljs.core.nth.call(null,vec__91164,(0),null);var date = cljs.core.nth.call(null,vec__91164,(1),null);var open = cljs.core.nth.call(null,vec__91164,(2),null);var high = cljs.core.nth.call(null,vec__91164,(3),null);var low = cljs.core.nth.call(null,vec__91164,(4),null);var close = cljs.core.nth.call(null,vec__91164,(5),null);var volume = cljs.core.nth.call(null,vec__91164,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(clojure.string.replace.call(null,volume,/,/,""))], null),iter__91157.call(null,cljs.core.rest.call(null,s__91158__$2)));
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
return (function (state_91243){var state_val_91244 = (state_91243[(1)]);if((state_val_91244 === (9)))
{var inst_91233 = (state_91243[(2)]);var state_91243__$1 = state_91243;var statearr_91245_91262 = state_91243__$1;(statearr_91245_91262[(2)] = inst_91233);
(statearr_91245_91262[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91244 === (8)))
{var inst_91239 = (state_91243[(2)]);var state_91243__$1 = state_91243;var statearr_91246_91263 = state_91243__$1;(statearr_91246_91263[(2)] = inst_91239);
(statearr_91246_91263[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91244 === (7)))
{var inst_91225 = (state_91243[(7)]);var inst_91235 = cljs.core.concat.call(null,all,inst_91225);var inst_91236 = [null,inst_91235];var inst_91237 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_91236,null));var state_91243__$1 = state_91243;var statearr_91247_91264 = state_91243__$1;(statearr_91247_91264[(2)] = inst_91237);
(statearr_91247_91264[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91244 === (6)))
{var inst_91225 = (state_91243[(7)]);var inst_91229 = cljs.core.concat.call(null,all,inst_91225);var inst_91230 = (start + num);var inst_91231 = stock_info.call(null,inst_91229,id,startdate,inst_91230,num);var state_91243__$1 = state_91243;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91243__$1,(9),inst_91231);
} else
{if((state_val_91244 === (5)))
{var inst_91241 = (state_91243[(2)]);var state_91243__$1 = state_91243;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91243__$1,inst_91241);
} else
{if((state_val_91244 === (4)))
{var inst_91225 = (state_91243[(7)]);var inst_91220 = (state_91243[(8)]);var inst_91225__$1 = test.stock4.parse_info.call(null,inst_91220);var inst_91226 = cljs.core.count.call(null,inst_91225__$1);var inst_91227 = cljs.core._EQ_.call(null,num,inst_91226);var state_91243__$1 = (function (){var statearr_91248 = state_91243;(statearr_91248[(7)] = inst_91225__$1);
return statearr_91248;
})();if(inst_91227)
{var statearr_91249_91265 = state_91243__$1;(statearr_91249_91265[(1)] = (6));
} else
{var statearr_91250_91266 = state_91243__$1;(statearr_91250_91266[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91244 === (3)))
{var inst_91219 = (state_91243[(9)]);var inst_91222 = [inst_91219];var inst_91223 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_91222,null));var state_91243__$1 = state_91243;var statearr_91251_91267 = state_91243__$1;(statearr_91251_91267[(2)] = inst_91223);
(statearr_91251_91267[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91244 === (2)))
{var inst_91219 = (state_91243[(9)]);var inst_91218 = (state_91243[(2)]);var inst_91219__$1 = cljs.core.nth.call(null,inst_91218,(0),null);var inst_91220 = cljs.core.nth.call(null,inst_91218,(1),null);var state_91243__$1 = (function (){var statearr_91252 = state_91243;(statearr_91252[(9)] = inst_91219__$1);
(statearr_91252[(8)] = inst_91220);
return statearr_91252;
})();if(cljs.core.truth_(inst_91219__$1))
{var statearr_91253_91268 = state_91243__$1;(statearr_91253_91268[(1)] = (3));
} else
{var statearr_91254_91269 = state_91243__$1;(statearr_91254_91269[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91244 === (1)))
{var inst_91215 = test.stock4.stock_url.call(null,id,startdate,start,num);var inst_91216 = test.stock4.content.call(null,inst_91215);var state_91243__$1 = state_91243;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91243__$1,(2),inst_91216);
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
var state_machine__6188__auto____0 = (function (){var statearr_91258 = [null,null,null,null,null,null,null,null,null,null];(statearr_91258[(0)] = state_machine__6188__auto__);
(statearr_91258[(1)] = (1));
return statearr_91258;
});
var state_machine__6188__auto____1 = (function (state_91243){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_91243);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e91259){if((e91259 instanceof Object))
{var ex__6191__auto__ = e91259;var statearr_91260_91270 = state_91243;(statearr_91260_91270[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91243);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e91259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__91271 = state_91243;
state_91243 = G__91271;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_91243){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_91243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_91261 = f__6203__auto__.call(null);(statearr_91261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_91261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock4.average = (function average(cnt,kline){var group = cljs.core.take.call(null,cnt,kline);var vec__91280 = cljs.core.last.call(null,group);var date = cljs.core.nth.call(null,vec__91280,(0),null);var open = cljs.core.nth.call(null,vec__91280,(1),null);var _ = cljs.core.nth.call(null,vec__91280,(2),null);var ___$1 = cljs.core.nth.call(null,vec__91280,(3),null);var ___$2 = cljs.core.nth.call(null,vec__91280,(4),null);var ___$3 = cljs.core.nth.call(null,vec__91280,(5),null);var high = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (group,vec__91280,date,open,_,___$1,___$2,___$3){
return (function (p__91282){var vec__91283 = p__91282;var ___$4 = cljs.core.nth.call(null,vec__91283,(0),null);var ___$5 = cljs.core.nth.call(null,vec__91283,(1),null);var high = cljs.core.nth.call(null,vec__91283,(2),null);var ___$6 = cljs.core.nth.call(null,vec__91283,(3),null);var ___$7 = cljs.core.nth.call(null,vec__91283,(4),null);var ___$8 = cljs.core.nth.call(null,vec__91283,(5),null);return high;
});})(group,vec__91280,date,open,_,___$1,___$2,___$3))
,group));var low = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (group,vec__91280,date,open,_,___$1,___$2,___$3,high){
return (function (p__91284){var vec__91285 = p__91284;var ___$4 = cljs.core.nth.call(null,vec__91285,(0),null);var ___$5 = cljs.core.nth.call(null,vec__91285,(1),null);var ___$6 = cljs.core.nth.call(null,vec__91285,(2),null);var low = cljs.core.nth.call(null,vec__91285,(3),null);var ___$7 = cljs.core.nth.call(null,vec__91285,(4),null);var ___$8 = cljs.core.nth.call(null,vec__91285,(5),null);return low;
});})(group,vec__91280,date,open,_,___$1,___$2,___$3,high))
,group));var vec__91281 = cljs.core.first.call(null,group);var ___$4 = cljs.core.nth.call(null,vec__91281,(0),null);var ___$5 = cljs.core.nth.call(null,vec__91281,(1),null);var ___$6 = cljs.core.nth.call(null,vec__91281,(2),null);var ___$7 = cljs.core.nth.call(null,vec__91281,(3),null);var close = cljs.core.nth.call(null,vec__91281,(4),null);var ___$8 = cljs.core.nth.call(null,vec__91281,(5),null);var volume = cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (group,vec__91280,date,open,_,___$1,___$2,___$3,high,low,vec__91281,___$4,___$5,___$6,___$7,close,___$8){
return (function (p__91286){var vec__91287 = p__91286;var ___$9 = cljs.core.nth.call(null,vec__91287,(0),null);var ___$10 = cljs.core.nth.call(null,vec__91287,(1),null);var ___$11 = cljs.core.nth.call(null,vec__91287,(2),null);var ___$12 = cljs.core.nth.call(null,vec__91287,(3),null);var ___$13 = cljs.core.nth.call(null,vec__91287,(4),null);var volume = cljs.core.nth.call(null,vec__91287,(5),null);return volume;
});})(group,vec__91280,date,open,_,___$1,___$2,___$3,high,low,vec__91281,___$4,___$5,___$6,___$7,close,___$8))
,group));if((cljs.core.count.call(null,group) === (0)))
{return null;
} else
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),(new cljs.core.LazySeq(null,((function (group,vec__91280,date,open,_,___$1,___$2,___$3,high,low,vec__91281,___$4,___$5,___$6,___$7,close,___$8,volume){
return (function (){return average.call(null,cnt,cljs.core.drop.call(null,cnt,kline));
});})(group,vec__91280,date,open,_,___$1,___$2,___$3,high,low,vec__91281,___$4,___$5,___$6,___$7,close,___$8,volume))
,null,null)));
}
});
test.stock4.check_turn = (function check_turn(kline){if((cljs.core.count.call(null,kline) >= (3)))
{var vec__91291 = cljs.core.first.call(null,kline);var _ = cljs.core.nth.call(null,vec__91291,(0),null);var ___$1 = cljs.core.nth.call(null,vec__91291,(1),null);var ___$2 = cljs.core.nth.call(null,vec__91291,(2),null);var ___$3 = cljs.core.nth.call(null,vec__91291,(3),null);var c1 = cljs.core.nth.call(null,vec__91291,(4),null);var ___$4 = cljs.core.nth.call(null,vec__91291,(5),null);var l1 = vec__91291;var vec__91292 = cljs.core.second.call(null,kline);var date = cljs.core.nth.call(null,vec__91292,(0),null);var ___$5 = cljs.core.nth.call(null,vec__91292,(1),null);var ___$6 = cljs.core.nth.call(null,vec__91292,(2),null);var ___$7 = cljs.core.nth.call(null,vec__91292,(3),null);var c2 = cljs.core.nth.call(null,vec__91292,(4),null);var ___$8 = cljs.core.nth.call(null,vec__91292,(5),null);var l2 = vec__91292;var vec__91293 = cljs.core.nth.call(null,kline,(2));var ___$9 = cljs.core.nth.call(null,vec__91293,(0),null);var ___$10 = cljs.core.nth.call(null,vec__91293,(1),null);var ___$11 = cljs.core.nth.call(null,vec__91293,(2),null);var ___$12 = cljs.core.nth.call(null,vec__91293,(3),null);var c3 = cljs.core.nth.call(null,vec__91293,(4),null);var ___$13 = cljs.core.nth.call(null,vec__91293,(5),null);var l3 = vec__91293;var rate = ((c1 - c2) / c2);var rate2 = ((c2 - c3) / c3);var isReturn = ((rate * rate2) < (0));if(isReturn)
{return cljs.core.cons.call(null,date,(new cljs.core.LazySeq(null,((function (vec__91291,_,___$1,___$2,___$3,c1,___$4,l1,vec__91292,date,___$5,___$6,___$7,c2,___$8,l2,vec__91293,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn){
return (function (){return check_turn.call(null,cljs.core.rest.call(null,kline));
});})(vec__91291,_,___$1,___$2,___$3,c1,___$4,l1,vec__91292,date,___$5,___$6,___$7,c2,___$8,l2,vec__91293,___$9,___$10,___$11,___$12,c3,___$13,l3,rate,rate2,isReturn))
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
return (function (state_91561){var state_val_91562 = (state_91561[(1)]);if((state_val_91562 === (2)))
{var inst_91559 = (state_91561[(2)]);var state_91561__$1 = state_91561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91561__$1,inst_91559);
} else
{if((state_val_91562 === (1)))
{var inst_91557 = cljs.core.js__GT_clj.call(null,data);var state_91561__$1 = state_91561;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91561__$1,(2),onView,inst_91557);
} else
{return null;
}
}
});})(c__6202__auto__,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto__,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_91566 = [null,null,null,null,null,null,null];(statearr_91566[(0)] = state_machine__6188__auto__);
(statearr_91566[(1)] = (1));
return statearr_91566;
});
var state_machine__6188__auto____1 = (function (state_91561){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_91561);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e91567){if((e91567 instanceof Object))
{var ex__6191__auto__ = e91567;var statearr_91568_91820 = state_91561;(statearr_91568_91820[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91561);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e91567;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__91821 = state_91561;
state_91561 = G__91821;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_91561){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_91561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_91569 = f__6203__auto__.call(null);(statearr_91569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_91569;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,draw,onSystem,onView))
);
return c__6202__auto__;
});})(draw,onSystem,onView))
);
var c__6202__auto___91822 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___91822,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___91822,draw,onSystem,onView){
return (function (state_91586){var state_val_91587 = (state_91586[(1)]);if((state_val_91587 === (6)))
{var inst_91582 = (state_91586[(2)]);var state_91586__$1 = state_91586;var statearr_91588_91823 = state_91586__$1;(statearr_91588_91823[(2)] = inst_91582);
(statearr_91588_91823[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91587 === (5)))
{var inst_91584 = (state_91586[(2)]);var state_91586__$1 = state_91586;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91586__$1,inst_91584);
} else
{if((state_val_91587 === (4)))
{var inst_91575 = (state_91586[(7)]);var inst_91579 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_91575];var inst_91580 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_91579,null));var state_91586__$1 = state_91586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_91586__$1,(6),onSystem,inst_91580);
} else
{if((state_val_91587 === (3)))
{var inst_91574 = (state_91586[(8)]);var inst_91577 = alert(inst_91574);var state_91586__$1 = state_91586;var statearr_91589_91824 = state_91586__$1;(statearr_91589_91824[(2)] = inst_91577);
(statearr_91589_91824[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91587 === (2)))
{var inst_91574 = (state_91586[(8)]);var inst_91573 = (state_91586[(2)]);var inst_91574__$1 = cljs.core.nth.call(null,inst_91573,(0),null);var inst_91575 = cljs.core.nth.call(null,inst_91573,(1),null);var state_91586__$1 = (function (){var statearr_91590 = state_91586;(statearr_91590[(7)] = inst_91575);
(statearr_91590[(8)] = inst_91574__$1);
return statearr_91590;
})();if(cljs.core.truth_(inst_91574__$1))
{var statearr_91591_91825 = state_91586__$1;(statearr_91591_91825[(1)] = (3));
} else
{var statearr_91592_91826 = state_91586__$1;(statearr_91592_91826[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91587 === (1)))
{var inst_91571 = test.stock4.stock_info.call(null,null,(2330),"2014/1/1",(0),(200));var state_91586__$1 = state_91586;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91586__$1,(2),inst_91571);
} else
{return null;
}
}
}
}
}
}
});})(c__6202__auto___91822,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___91822,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_91596 = [null,null,null,null,null,null,null,null,null];(statearr_91596[(0)] = state_machine__6188__auto__);
(statearr_91596[(1)] = (1));
return statearr_91596;
});
var state_machine__6188__auto____1 = (function (state_91586){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_91586);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e91597){if((e91597 instanceof Object))
{var ex__6191__auto__ = e91597;var statearr_91598_91827 = state_91586;(statearr_91598_91827[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91586);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e91597;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__91828 = state_91586;
state_91586 = G__91828;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_91586){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_91586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___91822,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_91599 = f__6203__auto__.call(null);(statearr_91599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___91822);
return statearr_91599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___91822,draw,onSystem,onView))
);
var c__6202__auto___91829 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___91829,draw,onSystem,onView){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___91829,draw,onSystem,onView){
return (function (state_91743){var state_val_91744 = (state_91743[(1)]);if((state_val_91744 === (7)))
{var inst_91613 = (state_91743[(7)]);var inst_91618 = cljs.core.apply.call(null,cljs.core.hash_map,inst_91613);var state_91743__$1 = state_91743;var statearr_91745_91830 = state_91743__$1;(statearr_91745_91830[(2)] = inst_91618);
(statearr_91745_91830[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (20)))
{var inst_91628 = (state_91743[(8)]);var inst_91656 = cljs.core.apply.call(null,cljs.core.hash_map,inst_91628);var state_91743__$1 = state_91743;var statearr_91746_91831 = state_91743__$1;(statearr_91746_91831[(2)] = inst_91656);
(statearr_91746_91831[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (27)))
{var inst_91660 = (state_91743[(9)]);var inst_91681 = cljs.core._EQ_.call(null,"print",inst_91660);var state_91743__$1 = state_91743;if(inst_91681)
{var statearr_91747_91832 = state_91743__$1;(statearr_91747_91832[(1)] = (29));
} else
{var statearr_91748_91833 = state_91743__$1;(statearr_91748_91833[(1)] = (30));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (1)))
{var inst_91605 = (state_91743[(10)]);var inst_91603 = [new cljs.core.Keyword(null,"cnt","cnt",283978798)];var inst_91604 = [(100)];var inst_91605__$1 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_91603,inst_91604);var inst_91606 = cljs.core.seq_QMARK_.call(null,inst_91605__$1);var state_91743__$1 = (function (){var statearr_91749 = state_91743;(statearr_91749[(10)] = inst_91605__$1);
return statearr_91749;
})();if(inst_91606)
{var statearr_91750_91834 = state_91743__$1;(statearr_91750_91834[(1)] = (2));
} else
{var statearr_91751_91835 = state_91743__$1;(statearr_91751_91835[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (24)))
{var inst_91660 = (state_91743[(9)]);var inst_91673 = cljs.core._EQ_.call(null,"turn",inst_91660);var state_91743__$1 = state_91743;if(inst_91673)
{var statearr_91752_91836 = state_91743__$1;(statearr_91752_91836[(1)] = (26));
} else
{var statearr_91753_91837 = state_91743__$1;(statearr_91753_91837[(1)] = (27));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (39)))
{var inst_91722 = (state_91743[(2)]);var state_91743__$1 = state_91743;var statearr_91754_91838 = state_91743__$1;(statearr_91754_91838[(2)] = inst_91722);
(statearr_91754_91838[(1)] = (36));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (4)))
{var inst_91605 = (state_91743[(10)]);var inst_91611 = (state_91743[(2)]);var inst_91612 = cljs.core.get.call(null,inst_91611,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_91613 = inst_91605;var state_91743__$1 = (function (){var statearr_91755 = state_91743;(statearr_91755[(7)] = inst_91613);
(statearr_91755[(11)] = inst_91612);
return statearr_91755;
})();var statearr_91756_91839 = state_91743__$1;(statearr_91756_91839[(2)] = null);
(statearr_91756_91839[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (15)))
{var inst_91621 = (state_91743[(12)]);var state_91743__$1 = state_91743;var statearr_91757_91840 = state_91743__$1;(statearr_91757_91840[(2)] = inst_91621);
(statearr_91757_91840[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (21)))
{var inst_91628 = (state_91743[(8)]);var state_91743__$1 = state_91743;var statearr_91758_91841 = state_91743__$1;(statearr_91758_91841[(2)] = inst_91628);
(statearr_91758_91841[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (31)))
{var inst_91729 = (state_91743[(2)]);var state_91743__$1 = state_91743;var statearr_91759_91842 = state_91743__$1;(statearr_91759_91842[(2)] = inst_91729);
(statearr_91759_91842[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (32)))
{var inst_91693 = (state_91743[(13)]);var inst_91692 = (state_91743[(14)]);var inst_91695 = (inst_91693 < inst_91692);var inst_91696 = inst_91695;var state_91743__$1 = state_91743;if(cljs.core.truth_(inst_91696))
{var statearr_91760_91843 = state_91743__$1;(statearr_91760_91843[(1)] = (34));
} else
{var statearr_91761_91844 = state_91743__$1;(statearr_91761_91844[(1)] = (35));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (40)))
{var inst_91704 = (state_91743[(15)]);var inst_91708 = cljs.core.chunk_first.call(null,inst_91704);var inst_91709 = cljs.core.chunk_rest.call(null,inst_91704);var inst_91710 = cljs.core.count.call(null,inst_91708);var inst_91690 = inst_91709;var inst_91691 = inst_91708;var inst_91692 = inst_91710;var inst_91693 = (0);var state_91743__$1 = (function (){var statearr_91762 = state_91743;(statearr_91762[(16)] = inst_91690);
(statearr_91762[(13)] = inst_91693);
(statearr_91762[(14)] = inst_91692);
(statearr_91762[(17)] = inst_91691);
return statearr_91762;
})();var statearr_91763_91845 = state_91743__$1;(statearr_91763_91845[(2)] = null);
(statearr_91763_91845[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (33)))
{var inst_91621 = (state_91743[(12)]);var inst_91726 = (state_91743[(2)]);var state_91743__$1 = (function (){var statearr_91764 = state_91743;(statearr_91764[(18)] = inst_91726);
return statearr_91764;
})();var statearr_91765_91846 = state_91743__$1;(statearr_91765_91846[(2)] = inst_91621);
(statearr_91765_91846[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (13)))
{var inst_91738 = (state_91743[(2)]);var inst_91613 = inst_91738;var state_91743__$1 = (function (){var statearr_91766 = state_91743;(statearr_91766[(7)] = inst_91613);
return statearr_91766;
})();var statearr_91767_91847 = state_91743__$1;(statearr_91767_91847[(2)] = null);
(statearr_91767_91847[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (22)))
{var inst_91660 = (state_91743[(9)]);var inst_91659 = (state_91743[(2)]);var inst_91660__$1 = cljs.core.get.call(null,inst_91659,"cmd");var inst_91661 = cljs.core.get.call(null,inst_91659,"params");var inst_91665 = cljs.core._EQ_.call(null,"avg",inst_91660__$1);var state_91743__$1 = (function (){var statearr_91768 = state_91743;(statearr_91768[(9)] = inst_91660__$1);
(statearr_91768[(19)] = inst_91661);
return statearr_91768;
})();if(inst_91665)
{var statearr_91769_91848 = state_91743__$1;(statearr_91769_91848[(1)] = (23));
} else
{var statearr_91770_91849 = state_91743__$1;(statearr_91770_91849[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (36)))
{var inst_91724 = (state_91743[(2)]);var state_91743__$1 = state_91743;var statearr_91771_91850 = state_91743__$1;(statearr_91771_91850[(2)] = inst_91724);
(statearr_91771_91850[(1)] = (33));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (41)))
{var inst_91704 = (state_91743[(15)]);var inst_91713 = cljs.core.first.call(null,inst_91704);var inst_91714 = cljs.core.pr_str.call(null,inst_91713);var inst_91715 = console.log(inst_91714);var inst_91716 = cljs.core.next.call(null,inst_91704);var inst_91690 = inst_91716;var inst_91691 = null;var inst_91692 = (0);var inst_91693 = (0);var state_91743__$1 = (function (){var statearr_91772 = state_91743;(statearr_91772[(20)] = inst_91715);
(statearr_91772[(16)] = inst_91690);
(statearr_91772[(13)] = inst_91693);
(statearr_91772[(14)] = inst_91692);
(statearr_91772[(17)] = inst_91691);
return statearr_91772;
})();var statearr_91773_91851 = state_91743__$1;(statearr_91773_91851[(2)] = null);
(statearr_91773_91851[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (29)))
{var inst_91621 = (state_91743[(12)]);var inst_91661 = (state_91743[(19)]);var inst_91687 = cljs.core.keyword.call(null,inst_91661);var inst_91688 = inst_91687.call(null,inst_91621);var inst_91689 = cljs.core.seq.call(null,inst_91688);var inst_91690 = inst_91689;var inst_91691 = null;var inst_91692 = (0);var inst_91693 = (0);var state_91743__$1 = (function (){var statearr_91774 = state_91743;(statearr_91774[(16)] = inst_91690);
(statearr_91774[(13)] = inst_91693);
(statearr_91774[(14)] = inst_91692);
(statearr_91774[(17)] = inst_91691);
return statearr_91774;
})();var statearr_91775_91852 = state_91743__$1;(statearr_91775_91852[(2)] = null);
(statearr_91775_91852[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (6)))
{var inst_91741 = (state_91743[(2)]);var state_91743__$1 = state_91743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91743__$1,inst_91741);
} else
{if((state_val_91744 === (28)))
{var inst_91731 = (state_91743[(2)]);var state_91743__$1 = state_91743;var statearr_91779_91853 = state_91743__$1;(statearr_91779_91853[(2)] = inst_91731);
(statearr_91779_91853[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (25)))
{var inst_91733 = (state_91743[(2)]);var state_91743__$1 = state_91743;var statearr_91780_91854 = state_91743__$1;(statearr_91780_91854[(2)] = inst_91733);
(statearr_91780_91854[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (34)))
{var inst_91690 = (state_91743[(16)]);var inst_91693 = (state_91743[(13)]);var inst_91692 = (state_91743[(14)]);var inst_91691 = (state_91743[(17)]);var inst_91698 = cljs.core._nth.call(null,inst_91691,inst_91693);var inst_91699 = cljs.core.pr_str.call(null,inst_91698);var inst_91700 = console.log(inst_91699);var inst_91701 = (inst_91693 + (1));var tmp91776 = inst_91690;var tmp91777 = inst_91692;var tmp91778 = inst_91691;var inst_91690__$1 = tmp91776;var inst_91691__$1 = tmp91778;var inst_91692__$1 = tmp91777;var inst_91693__$1 = inst_91701;var state_91743__$1 = (function (){var statearr_91781 = state_91743;(statearr_91781[(21)] = inst_91700);
(statearr_91781[(16)] = inst_91690__$1);
(statearr_91781[(13)] = inst_91693__$1);
(statearr_91781[(14)] = inst_91692__$1);
(statearr_91781[(17)] = inst_91691__$1);
return statearr_91781;
})();var statearr_91782_91855 = state_91743__$1;(statearr_91782_91855[(2)] = null);
(statearr_91782_91855[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (17)))
{var inst_91628 = (state_91743[(8)]);var inst_91654 = cljs.core.seq_QMARK_.call(null,inst_91628);var state_91743__$1 = state_91743;if(inst_91654)
{var statearr_91783_91856 = state_91743__$1;(statearr_91783_91856[(1)] = (20));
} else
{var statearr_91784_91857 = state_91743__$1;(statearr_91784_91857[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (3)))
{var inst_91605 = (state_91743[(10)]);var state_91743__$1 = state_91743;var statearr_91785_91858 = state_91743__$1;(statearr_91785_91858[(2)] = inst_91605);
(statearr_91785_91858[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (12)))
{var inst_91629 = (state_91743[(22)]);var inst_91651 = cljs.core._EQ_.call(null,onView,inst_91629);var state_91743__$1 = state_91743;if(inst_91651)
{var statearr_91786_91859 = state_91743__$1;(statearr_91786_91859[(1)] = (17));
} else
{var statearr_91787_91860 = state_91743__$1;(statearr_91787_91860[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (2)))
{var inst_91605 = (state_91743[(10)]);var inst_91608 = cljs.core.apply.call(null,cljs.core.hash_map,inst_91605);var state_91743__$1 = state_91743;var statearr_91788_91861 = state_91743__$1;(statearr_91788_91861[(2)] = inst_91608);
(statearr_91788_91861[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (23)))
{var inst_91621 = (state_91743[(12)]);var inst_91622 = (state_91743[(23)]);var inst_91661 = (state_91743[(19)]);var inst_91667 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(inst_91621);var inst_91668 = test.stock4.average.call(null,inst_91661,inst_91667);var inst_91669 = cljs.core.take.call(null,inst_91622,inst_91668);var inst_91670 = cljs.core.assoc.call(null,inst_91621,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_91669);var inst_91671 = draw.call(null,inst_91670);var state_91743__$1 = state_91743;var statearr_91789_91862 = state_91743__$1;(statearr_91789_91862[(2)] = inst_91671);
(statearr_91789_91862[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (35)))
{var inst_91690 = (state_91743[(16)]);var inst_91704 = (state_91743[(15)]);var inst_91704__$1 = cljs.core.seq.call(null,inst_91690);var state_91743__$1 = (function (){var statearr_91790 = state_91743;(statearr_91790[(15)] = inst_91704__$1);
return statearr_91790;
})();if(inst_91704__$1)
{var statearr_91791_91863 = state_91743__$1;(statearr_91791_91863[(1)] = (37));
} else
{var statearr_91792_91864 = state_91743__$1;(statearr_91792_91864[(1)] = (38));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (19)))
{var inst_91736 = (state_91743[(2)]);var state_91743__$1 = state_91743;var statearr_91793_91865 = state_91743__$1;(statearr_91793_91865[(2)] = inst_91736);
(statearr_91793_91865[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (11)))
{var inst_91628 = (state_91743[(8)]);var inst_91636 = cljs.core.nth.call(null,inst_91628,(0),null);var inst_91637 = cljs.core.nth.call(null,inst_91628,(1),null);var inst_91641 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),inst_91636);var state_91743__$1 = (function (){var statearr_91794 = state_91743;(statearr_91794[(24)] = inst_91637);
return statearr_91794;
})();if(inst_91641)
{var statearr_91795_91866 = state_91743__$1;(statearr_91795_91866[(1)] = (14));
} else
{var statearr_91796_91867 = state_91743__$1;(statearr_91796_91867[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (9)))
{var inst_91621 = (state_91743[(12)]);var inst_91621__$1 = (state_91743[(2)]);var inst_91622 = cljs.core.get.call(null,inst_91621__$1,new cljs.core.Keyword(null,"cnt","cnt",283978798));var inst_91624 = [onSystem,onView];var inst_91625 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_91624,null));var state_91743__$1 = (function (){var statearr_91797 = state_91743;(statearr_91797[(12)] = inst_91621__$1);
(statearr_91797[(23)] = inst_91622);
return statearr_91797;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_91743__$1,(10),inst_91625);
} else
{if((state_val_91744 === (5)))
{var inst_91613 = (state_91743[(7)]);var inst_91616 = cljs.core.seq_QMARK_.call(null,inst_91613);var state_91743__$1 = state_91743;if(inst_91616)
{var statearr_91798_91868 = state_91743__$1;(statearr_91798_91868[(1)] = (7));
} else
{var statearr_91799_91869 = state_91743__$1;(statearr_91799_91869[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (14)))
{var inst_91621 = (state_91743[(12)]);var inst_91622 = (state_91743[(23)]);var inst_91637 = (state_91743[(24)]);var inst_91643 = cljs.core.assoc.call(null,inst_91621,new cljs.core.Keyword(null,"info","info",-317069002),inst_91637);var inst_91644 = cljs.core.take.call(null,inst_91622,inst_91637);var inst_91645 = cljs.core.assoc.call(null,inst_91643,new cljs.core.Keyword(null,"kline","kline",-1160432594),inst_91644);var inst_91646 = draw.call(null,inst_91645);var state_91743__$1 = state_91743;var statearr_91800_91870 = state_91743__$1;(statearr_91800_91870[(2)] = inst_91646);
(statearr_91800_91870[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (26)))
{var inst_91621 = (state_91743[(12)]);var inst_91622 = (state_91743[(23)]);var inst_91675 = new cljs.core.Keyword(null,"kline","kline",-1160432594).cljs$core$IFn$_invoke$arity$1(inst_91621);var inst_91676 = test.stock4.check_turn.call(null,inst_91675);var inst_91677 = cljs.core.take.call(null,inst_91622,inst_91676);var inst_91678 = cljs.core.assoc.call(null,inst_91621,new cljs.core.Keyword(null,"turn","turn",75759344),inst_91677);var inst_91679 = draw.call(null,inst_91678);var state_91743__$1 = state_91743;var statearr_91801_91871 = state_91743__$1;(statearr_91801_91871[(2)] = inst_91679);
(statearr_91801_91871[(1)] = (28));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (16)))
{var inst_91649 = (state_91743[(2)]);var state_91743__$1 = state_91743;var statearr_91802_91872 = state_91743__$1;(statearr_91802_91872[(2)] = inst_91649);
(statearr_91802_91872[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (38)))
{var state_91743__$1 = state_91743;var statearr_91803_91873 = state_91743__$1;(statearr_91803_91873[(2)] = null);
(statearr_91803_91873[(1)] = (39));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (30)))
{var inst_91621 = (state_91743[(12)]);var state_91743__$1 = state_91743;var statearr_91804_91874 = state_91743__$1;(statearr_91804_91874[(2)] = inst_91621);
(statearr_91804_91874[(1)] = (31));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (10)))
{var inst_91629 = (state_91743[(22)]);var inst_91627 = (state_91743[(2)]);var inst_91628 = cljs.core.nth.call(null,inst_91627,(0),null);var inst_91629__$1 = cljs.core.nth.call(null,inst_91627,(1),null);var inst_91633 = cljs.core._EQ_.call(null,onSystem,inst_91629__$1);var state_91743__$1 = (function (){var statearr_91805 = state_91743;(statearr_91805[(8)] = inst_91628);
(statearr_91805[(22)] = inst_91629__$1);
return statearr_91805;
})();if(inst_91633)
{var statearr_91806_91875 = state_91743__$1;(statearr_91806_91875[(1)] = (11));
} else
{var statearr_91807_91876 = state_91743__$1;(statearr_91807_91876[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (18)))
{var inst_91621 = (state_91743[(12)]);var state_91743__$1 = state_91743;var statearr_91808_91877 = state_91743__$1;(statearr_91808_91877[(2)] = inst_91621);
(statearr_91808_91877[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (42)))
{var inst_91719 = (state_91743[(2)]);var state_91743__$1 = state_91743;var statearr_91809_91878 = state_91743__$1;(statearr_91809_91878[(2)] = inst_91719);
(statearr_91809_91878[(1)] = (39));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (37)))
{var inst_91704 = (state_91743[(15)]);var inst_91706 = cljs.core.chunked_seq_QMARK_.call(null,inst_91704);var state_91743__$1 = state_91743;if(inst_91706)
{var statearr_91810_91879 = state_91743__$1;(statearr_91810_91879[(1)] = (40));
} else
{var statearr_91811_91880 = state_91743__$1;(statearr_91811_91880[(1)] = (41));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_91744 === (8)))
{var inst_91613 = (state_91743[(7)]);var state_91743__$1 = state_91743;var statearr_91812_91881 = state_91743__$1;(statearr_91812_91881[(2)] = inst_91613);
(statearr_91812_91881[(1)] = (9));
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
});})(c__6202__auto___91829,draw,onSystem,onView))
;return ((function (switch__6187__auto__,c__6202__auto___91829,draw,onSystem,onView){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_91816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_91816[(0)] = state_machine__6188__auto__);
(statearr_91816[(1)] = (1));
return statearr_91816;
});
var state_machine__6188__auto____1 = (function (state_91743){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_91743);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e91817){if((e91817 instanceof Object))
{var ex__6191__auto__ = e91817;var statearr_91818_91882 = state_91743;(statearr_91818_91882[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91743);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e91817;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__91883 = state_91743;
state_91743 = G__91883;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_91743){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_91743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___91829,draw,onSystem,onView))
})();var state__6204__auto__ = (function (){var statearr_91819 = f__6203__auto__.call(null);(statearr_91819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___91829);
return statearr_91819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___91829,draw,onSystem,onView))
);
return null;
});
test.stock4.main.call(null);
