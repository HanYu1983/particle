// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock2');
goog.require('cljs.core');
test.stock2.graphic_base = (function graphic_base(w,h,info){var max_v = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__24116_SHARP_){return cljs.core.nth.call(null,p1__24116_SHARP_,(1));
}),info));var min_v = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (max_v){
return (function (p1__24117_SHARP_){return cljs.core.nth.call(null,p1__24117_SHARP_,(2));
});})(max_v))
,info));var offset_v = (max_v - min_v);var offset_x = (w / (cljs.core.count.call(null,info) + (1)));var pos_y = ((function (max_v,min_v,offset_v,offset_x){
return (function (v){return (h * ((1) - ((v - min_v) / offset_v)));
});})(max_v,min_v,offset_v,offset_x))
;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_v,min_v,offset_v,offset_x,pos_y], null);
});
test.stock2.draw_step = (function draw_step(ctx,w,h,info,steps){var vec__24133 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__24133,(0),null);var min_v = cljs.core.nth.call(null,vec__24133,(1),null);var offset_v = cljs.core.nth.call(null,vec__24133,(2),null);var offset_x = cljs.core.nth.call(null,vec__24133,(3),null);var pos_y = cljs.core.nth.call(null,vec__24133,(4),null);var show_steps = cljs.core.replace.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__24133,max_v,min_v,offset_v,offset_x,pos_y){
return (function (p__24134){var vec__24135 = p__24134;var act = cljs.core.nth.call(null,vec__24135,(0),null);var line = cljs.core.nth.call(null,vec__24135,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,act], null);
});})(vec__24133,max_v,min_v,offset_v,offset_x,pos_y))
,steps)),info);(ctx["fillStyle"] = "black");
var seq__24136 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__24133,max_v,min_v,offset_v,offset_x,pos_y,show_steps){
return (function() { 
var G__24148__delegate = function (args){return args;
};
var G__24148 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24148__delegate.call(this,args);};
G__24148.cljs$lang$maxFixedArity = 0;
G__24148.cljs$lang$applyTo = (function (arglist__24149){
var args = cljs.core.seq(arglist__24149);
return G__24148__delegate(args);
});
G__24148.cljs$core$IFn$_invoke$arity$variadic = G__24148__delegate;
return G__24148;
})()
;})(vec__24133,max_v,min_v,offset_v,offset_x,pos_y,show_steps))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,show_steps))),show_steps));var chunk__24137 = null;var count__24138 = (0);var i__24139 = (0);while(true){
if((i__24139 < count__24138))
{var vec__24140 = cljs.core._nth.call(null,chunk__24137,i__24139);var idx = cljs.core.nth.call(null,vec__24140,(0),null);var curr = cljs.core.nth.call(null,vec__24140,(1),null);var pred__24141_24150 = cljs.core._EQ_;var expr__24142_24151 = curr;if(cljs.core.truth_(pred__24141_24150.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__24142_24151)))
{ctx.fillText("O",(offset_x * idx),(20));
} else
{if(cljs.core.truth_(pred__24141_24150.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__24142_24151)))
{ctx.fillText("X",(offset_x * idx),(20));
} else
{}
}
{
var G__24152 = seq__24136;
var G__24153 = chunk__24137;
var G__24154 = count__24138;
var G__24155 = (i__24139 + (1));
seq__24136 = G__24152;
chunk__24137 = G__24153;
count__24138 = G__24154;
i__24139 = G__24155;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24136);if(temp__4126__auto__)
{var seq__24136__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24136__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__24136__$1);{
var G__24156 = cljs.core.chunk_rest.call(null,seq__24136__$1);
var G__24157 = c__4307__auto__;
var G__24158 = cljs.core.count.call(null,c__4307__auto__);
var G__24159 = (0);
seq__24136 = G__24156;
chunk__24137 = G__24157;
count__24138 = G__24158;
i__24139 = G__24159;
continue;
}
} else
{var vec__24144 = cljs.core.first.call(null,seq__24136__$1);var idx = cljs.core.nth.call(null,vec__24144,(0),null);var curr = cljs.core.nth.call(null,vec__24144,(1),null);var pred__24145_24160 = cljs.core._EQ_;var expr__24146_24161 = curr;if(cljs.core.truth_(pred__24145_24160.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__24146_24161)))
{ctx.fillText("O",(offset_x * idx),(20));
} else
{if(cljs.core.truth_(pred__24145_24160.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__24146_24161)))
{ctx.fillText("X",(offset_x * idx),(20));
} else
{}
}
{
var G__24162 = cljs.core.next.call(null,seq__24136__$1);
var G__24163 = null;
var G__24164 = (0);
var G__24165 = (0);
seq__24136 = G__24162;
chunk__24137 = G__24163;
count__24138 = G__24164;
i__24139 = G__24165;
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
test.stock2.draw_avg = (function draw_avg(ctx,w,h,info,color,avg){var vec__24173 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__24173,(0),null);var min_v = cljs.core.nth.call(null,vec__24173,(1),null);var offset_v = cljs.core.nth.call(null,vec__24173,(2),null);var offset_x = cljs.core.nth.call(null,vec__24173,(3),null);var pos_y = cljs.core.nth.call(null,vec__24173,(4),null);ctx.beginPath();
(ctx["lineWidth"] = (1));
(ctx["strokeStyle"] = color);
var seq__24174 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__24173,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__24180__delegate = function (args){return args;
};
var G__24180 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24180__delegate.call(this,args);};
G__24180.cljs$lang$maxFixedArity = 0;
G__24180.cljs$lang$applyTo = (function (arglist__24181){
var args = cljs.core.seq(arglist__24181);
return G__24180__delegate(args);
});
G__24180.cljs$core$IFn$_invoke$arity$variadic = G__24180__delegate;
return G__24180;
})()
;})(vec__24173,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,avg))),avg,cljs.core.drop.call(null,(1),avg)));var chunk__24175 = null;var count__24176 = (0);var i__24177 = (0);while(true){
if((i__24177 < count__24176))
{var vec__24178 = cljs.core._nth.call(null,chunk__24175,i__24177);var idx = cljs.core.nth.call(null,vec__24178,(0),null);var prev = cljs.core.nth.call(null,vec__24178,(1),null);var curr = cljs.core.nth.call(null,vec__24178,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__24182 = seq__24174;
var G__24183 = chunk__24175;
var G__24184 = count__24176;
var G__24185 = (i__24177 + (1));
seq__24174 = G__24182;
chunk__24175 = G__24183;
count__24176 = G__24184;
i__24177 = G__24185;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24174);if(temp__4126__auto__)
{var seq__24174__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24174__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__24174__$1);{
var G__24186 = cljs.core.chunk_rest.call(null,seq__24174__$1);
var G__24187 = c__4307__auto__;
var G__24188 = cljs.core.count.call(null,c__4307__auto__);
var G__24189 = (0);
seq__24174 = G__24186;
chunk__24175 = G__24187;
count__24176 = G__24188;
i__24177 = G__24189;
continue;
}
} else
{var vec__24179 = cljs.core.first.call(null,seq__24174__$1);var idx = cljs.core.nth.call(null,vec__24179,(0),null);var prev = cljs.core.nth.call(null,vec__24179,(1),null);var curr = cljs.core.nth.call(null,vec__24179,(2),null);if((prev > (-1)))
{ctx.moveTo((offset_x * idx),pos_y.call(null,prev));
ctx.lineTo((offset_x * (idx + (1))),pos_y.call(null,curr));
} else
{}
ctx.stroke();
{
var G__24190 = cljs.core.next.call(null,seq__24174__$1);
var G__24191 = null;
var G__24192 = (0);
var G__24193 = (0);
seq__24174 = G__24190;
chunk__24175 = G__24191;
count__24176 = G__24192;
i__24177 = G__24193;
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
test.stock2.draw_line = (function draw_line(ctx,w,h,info){var vec__24203 = test.stock2.graphic_base.call(null,w,h,info);var max_v = cljs.core.nth.call(null,vec__24203,(0),null);var min_v = cljs.core.nth.call(null,vec__24203,(1),null);var offset_v = cljs.core.nth.call(null,vec__24203,(2),null);var offset_x = cljs.core.nth.call(null,vec__24203,(3),null);var pos_y = cljs.core.nth.call(null,vec__24203,(4),null);var seq__24204 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__24203,max_v,min_v,offset_v,offset_x,pos_y){
return (function() { 
var G__24212__delegate = function (args){return args;
};
var G__24212 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24212__delegate.call(this,args);};
G__24212.cljs$lang$maxFixedArity = 0;
G__24212.cljs$lang$applyTo = (function (arglist__24213){
var args = cljs.core.seq(arglist__24213);
return G__24212__delegate(args);
});
G__24212.cljs$core$IFn$_invoke$arity$variadic = G__24212__delegate;
return G__24212;
})()
;})(vec__24203,max_v,min_v,offset_v,offset_x,pos_y))
,cljs.core.map.call(null,cljs.core.inc,cljs.core.range.call(null,cljs.core.count.call(null,info))),info));var chunk__24205 = null;var count__24206 = (0);var i__24207 = (0);while(true){
if((i__24207 < count__24206))
{var vec__24208 = cljs.core._nth.call(null,chunk__24205,i__24207);var idx = cljs.core.nth.call(null,vec__24208,(0),null);var vec__24209 = cljs.core.nth.call(null,vec__24208,(1),null);var start = cljs.core.nth.call(null,vec__24209,(0),null);var top = cljs.core.nth.call(null,vec__24209,(1),null);var bottom = cljs.core.nth.call(null,vec__24209,(2),null);var end = cljs.core.nth.call(null,vec__24209,(3),null);(ctx["strokeStyle"] = "black");
(ctx["lineWidth"] = (2));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,bottom));
ctx.lineTo((idx * offset_x),pos_y.call(null,top));
ctx.stroke();
(ctx["strokeStyle"] = (((end > start))?"red":"black"));
(ctx["lineWidth"] = offset_x);
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,start));
ctx.lineTo((idx * offset_x),pos_y.call(null,end));
ctx.stroke();
{
var G__24214 = seq__24204;
var G__24215 = chunk__24205;
var G__24216 = count__24206;
var G__24217 = (i__24207 + (1));
seq__24204 = G__24214;
chunk__24205 = G__24215;
count__24206 = G__24216;
i__24207 = G__24217;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24204);if(temp__4126__auto__)
{var seq__24204__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24204__$1))
{var c__4307__auto__ = cljs.core.chunk_first.call(null,seq__24204__$1);{
var G__24218 = cljs.core.chunk_rest.call(null,seq__24204__$1);
var G__24219 = c__4307__auto__;
var G__24220 = cljs.core.count.call(null,c__4307__auto__);
var G__24221 = (0);
seq__24204 = G__24218;
chunk__24205 = G__24219;
count__24206 = G__24220;
i__24207 = G__24221;
continue;
}
} else
{var vec__24210 = cljs.core.first.call(null,seq__24204__$1);var idx = cljs.core.nth.call(null,vec__24210,(0),null);var vec__24211 = cljs.core.nth.call(null,vec__24210,(1),null);var start = cljs.core.nth.call(null,vec__24211,(0),null);var top = cljs.core.nth.call(null,vec__24211,(1),null);var bottom = cljs.core.nth.call(null,vec__24211,(2),null);var end = cljs.core.nth.call(null,vec__24211,(3),null);(ctx["strokeStyle"] = "black");
(ctx["lineWidth"] = (2));
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,bottom));
ctx.lineTo((idx * offset_x),pos_y.call(null,top));
ctx.stroke();
(ctx["strokeStyle"] = (((end > start))?"red":"black"));
(ctx["lineWidth"] = offset_x);
ctx.beginPath();
ctx.moveTo((idx * offset_x),pos_y.call(null,start));
ctx.lineTo((idx * offset_x),pos_y.call(null,end));
ctx.stroke();
{
var G__24222 = cljs.core.next.call(null,seq__24204__$1);
var G__24223 = null;
var G__24224 = (0);
var G__24225 = (0);
seq__24204 = G__24222;
chunk__24205 = G__24223;
count__24206 = G__24224;
i__24207 = G__24225;
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
test.stock2.draw = (function draw(canvas){var ctx = canvas.getContext("2d");var vec__24233 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas.width,canvas.height], null);var w = cljs.core.nth.call(null,vec__24233,(0),null);var h = cljs.core.nth.call(null,vec__24233,(1),null);return ((function (ctx,vec__24233,w,h){
return (function (p__24234){var map__24235 = p__24234;var map__24235__$1 = ((cljs.core.seq_QMARK_.call(null,map__24235))?cljs.core.apply.call(null,cljs.core.hash_map,map__24235):map__24235);var info = cljs.core.get.call(null,map__24235__$1,new cljs.core.Keyword(null,"info","info",-317069002));var avgs = cljs.core.get.call(null,map__24235__$1,new cljs.core.Keyword(null,"avgs","avgs",1923101117));var steps = cljs.core.get.call(null,map__24235__$1,new cljs.core.Keyword(null,"steps","steps",-128433302));(ctx["fillStyle"] = "yellow");
ctx.fillRect((0),(0),w,h);
var seq__24236_24240 = cljs.core.seq.call(null,avgs);var chunk__24237_24241 = null;var count__24238_24242 = (0);var i__24239_24243 = (0);while(true){
if((i__24239_24243 < count__24238_24242))
{var avg_24244 = cljs.core._nth.call(null,chunk__24237_24241,i__24239_24243);test.stock2.draw_avg.call(null,ctx,w,h,info,"#aaaaaa",avg_24244);
{
var G__24245 = seq__24236_24240;
var G__24246 = chunk__24237_24241;
var G__24247 = count__24238_24242;
var G__24248 = (i__24239_24243 + (1));
seq__24236_24240 = G__24245;
chunk__24237_24241 = G__24246;
count__24238_24242 = G__24247;
i__24239_24243 = G__24248;
continue;
}
} else
{var temp__4126__auto___24249 = cljs.core.seq.call(null,seq__24236_24240);if(temp__4126__auto___24249)
{var seq__24236_24250__$1 = temp__4126__auto___24249;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24236_24250__$1))
{var c__4307__auto___24251 = cljs.core.chunk_first.call(null,seq__24236_24250__$1);{
var G__24252 = cljs.core.chunk_rest.call(null,seq__24236_24250__$1);
var G__24253 = c__4307__auto___24251;
var G__24254 = cljs.core.count.call(null,c__4307__auto___24251);
var G__24255 = (0);
seq__24236_24240 = G__24252;
chunk__24237_24241 = G__24253;
count__24238_24242 = G__24254;
i__24239_24243 = G__24255;
continue;
}
} else
{var avg_24256 = cljs.core.first.call(null,seq__24236_24250__$1);test.stock2.draw_avg.call(null,ctx,w,h,info,"#aaaaaa",avg_24256);
{
var G__24257 = cljs.core.next.call(null,seq__24236_24250__$1);
var G__24258 = null;
var G__24259 = (0);
var G__24260 = (0);
seq__24236_24240 = G__24257;
chunk__24237_24241 = G__24258;
count__24238_24242 = G__24259;
i__24239_24243 = G__24260;
continue;
}
}
} else
{}
}
break;
}
test.stock2.draw_line.call(null,ctx,w,h,info);
if(cljs.core.truth_(steps))
{return test.stock2.draw_step.call(null,ctx,w,h,info,steps);
} else
{return null;
}
});
;})(ctx,vec__24233,w,h))
});
test.stock2.rand_price = (function rand_price(cnt,start,up_rate){return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (p__24263,r){var vec__24264 = p__24263;var la = cljs.core.nth.call(null,vec__24264,(0),null);var _ = cljs.core.nthnext.call(null,vec__24264,(1));var all = vec__24264;return cljs.core.cons.call(null,(la + (la * (r - up_rate))),all);
}),cljs.core._conj.call(null,cljs.core.List.EMPTY,start),cljs.core.repeatedly.call(null,(cnt - (1)),(function (){return (cljs.core.rand.call(null) * ((2) * up_rate));
}))));
});
test.stock2.convert_kline = (function convert_kline(price,cnt){return cljs.core.map.call(null,(function (ps){var start = cljs.core.first.call(null,ps);var end = cljs.core.last.call(null,ps);var top = cljs.core.apply.call(null,cljs.core.max,ps);var bottom = cljs.core.apply.call(null,cljs.core.min,ps);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,end),bottom),top),start);
}),cljs.core.partition.call(null,cnt,cnt,null,price));
});
test.stock2.average = (function average(kline,cnt){return cljs.core.apply.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__24265_SHARP_){return (cljs.core.apply.call(null,cljs.core._PLUS_,p1__24265_SHARP_) / cljs.core.count.call(null,p1__24265_SHARP_));
}),cljs.core.partition.call(null,cnt,(1),cljs.core.map.call(null,(function (p__24268){var vec__24269 = p__24268;var s = cljs.core.nth.call(null,vec__24269,(0),null);var t = cljs.core.nth.call(null,vec__24269,(1),null);var b = cljs.core.nth.call(null,vec__24269,(2),null);var e = cljs.core.nth.call(null,vec__24269,(3),null);return e;
}),kline))),cljs.core.take.call(null,(cnt - (1)),cljs.core.repeat.call(null,(-1))));
});
test.stock2.check_one_style = (function check_one_style(max_up_rate,line){var vec__24271 = line;var start = cljs.core.nth.call(null,vec__24271,(0),null);var top = cljs.core.nth.call(null,vec__24271,(1),null);var bottom = cljs.core.nth.call(null,vec__24271,(2),null);var end = cljs.core.nth.call(null,vec__24271,(3),null);var h = (top - bottom);var solid_rate = ((end - start) / (((h === (0)))?(1):h));var line_rate = (((Math.abs((top - bottom)) * 0.5) * ((1) / start)) * ((1) / max_up_rate));if(((solid_rate > 0.7)) && ((line_rate > 0.2)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u9577\u7D05",solid_rate,line_rate], null);
} else
{if(((solid_rate < 0.7)) && ((line_rate > 0.2)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u9577\u9ED1",solid_rate], null);
} else
{if(((Math.abs(solid_rate) < 0.35)) && (true))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u5341\u5B57\u7DDA",solid_rate,line_rate], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unknown"], null);
} else
{return null;
}
}
}
}
});
test.stock2.draw = test.stock2.draw.call(null,document.getElementById("canvas"));
test.stock2.main = (function main(){var info = test.stock2.convert_kline.call(null,test.stock2.rand_price.call(null,(50),(100),0.07),(5));var styles = cljs.core.map.call(null,cljs.core.partial.call(null,test.stock2.check_one_style,((5) * 0.07)),info);var avg5 = test.stock2.average.call(null,info,(5));var avg10 = test.stock2.average.call(null,info,(10));return test.stock2.draw.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"avgs","avgs",1923101117),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [avg5,avg10], null)], null));
});
test.stock2.hasStock = (function hasStock(brain){return new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain);
});
test.stock2.buy = (function buy(brain,line,cnt){var temp__4124__auto__ = new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain);if(cljs.core.truth_(temp__4124__auto__))
{var stock = temp__4124__auto__;return brain;
} else
{return cljs.core.assoc.call(null,cljs.core.update_in.call(null,brain,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buy","buy",-794379565),line], null)),new cljs.core.Keyword(null,"stock","stock",-877288674),line);
}
});
test.stock2.sell = (function sell(brain,line){var temp__4124__auto__ = new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(brain);if(cljs.core.truth_(temp__4124__auto__))
{var ori_line = temp__4124__auto__;return cljs.core.assoc.call(null,cljs.core.update_in.call(null,brain,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sell","sell",-1949004143),(function (){var or__3551__auto__ = line;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return ori_line;
}
})()], null)),new cljs.core.Keyword(null,"stock","stock",-877288674),null);
} else
{return brain;
}
});
test.stock2.prepare = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("prepare",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (type,info){return type;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
test.stock2.think = (function (){var method_table__4417__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4418__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4419__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4420__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4421__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("think",((function (method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__){
return (function (type,brian,line){return null;
});})(method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__,hierarchy__4421__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4421__auto__,method_table__4417__auto__,prefer_table__4418__auto__,method_cache__4419__auto__,cached_hierarchy__4420__auto__));
})();
test.stock2.play = (function play(type,info){var brain = test.stock2.prepare.call(null,type,info);return cljs.core.reduce.call(null,cljs.core.partial.call(null,test.stock2.think,type),brain,info);
});
cljs.core._add_method.call(null,test.stock2.prepare,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,info){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"step","step",1288888124),cljs.core.List.EMPTY], null);
}));
cljs.core._add_method.call(null,test.stock2.think,new cljs.core.Keyword(null,"default","default",-1987822328),(function (type,brian,p__24272){var vec__24273 = p__24272;var start_price = cljs.core.nth.call(null,vec__24273,(0),null);var _ = cljs.core.nth.call(null,vec__24273,(1),null);var ___$1 = cljs.core.nth.call(null,vec__24273,(2),null);var ___$2 = cljs.core.nth.call(null,vec__24273,(3),null);var line = vec__24273;if(cljs.core.truth_(test.stock2.hasStock.call(null,brian)))
{return test.stock2.sell.call(null,brian,line);
} else
{return test.stock2.buy.call(null,brian,line,(100));
}
}));
test.stock2.calculate_money = (function calculate_money(money,cnt,steps){return cljs.core.reduce.call(null,(function (money__$1,p__24280){var vec__24281 = p__24280;var act = cljs.core.nth.call(null,vec__24281,(0),null);var vec__24282 = cljs.core.nth.call(null,vec__24281,(1),null);var start_price = cljs.core.nth.call(null,vec__24282,(0),null);var _ = cljs.core.nthnext.call(null,vec__24282,(1));var line = vec__24282;var step = vec__24281;var pred__24283 = cljs.core._EQ_;var expr__24284 = act;if(cljs.core.truth_(pred__24283.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__24284)))
{return (money__$1 - (start_price * cnt));
} else
{if(cljs.core.truth_(pred__24283.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__24284)))
{return (money__$1 + (start_price * cnt));
} else
{return money__$1;
}
}
}),money,steps);
});
test.stock2.test_play = (function test_play(){var price_cnt = (200);var info = test.stock2.convert_kline.call(null,test.stock2.rand_price.call(null,price_cnt,(100),0.07),(5));var map__24287 = test.stock2.play.call(null,null,info);var map__24287__$1 = ((cljs.core.seq_QMARK_.call(null,map__24287))?cljs.core.apply.call(null,cljs.core.hash_map,map__24287):map__24287);var result = map__24287__$1;var step = cljs.core.get.call(null,map__24287__$1,new cljs.core.Keyword(null,"step","step",1288888124));var money = test.stock2.calculate_money.call(null,(10000),(100),step);test.stock2.draw.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"info","info",-317069002),info,new cljs.core.Keyword(null,"steps","steps",-128433302),step], null));
console.log(new cljs.core.Keyword(null,"stock","stock",-877288674).cljs$core$IFn$_invoke$arity$1(result));
console.log(money);
return null;
});
test.stock2.test_play.call(null);
