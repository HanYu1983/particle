// Compiled by ClojureScript 1.10.238 {}
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
stock.tool.content = (function stock$tool$content(url){
var ret = cljs.core.async.chan.call(null);
$.ajax((function (){var obj6305 = {"url":"/proxy","dataType":"text","data":(function (){var obj6307 = {"url":url};
return obj6307;
})(),"success":((function (ret){
return (function (data){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,ret){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,ret){
return (function (state_6315){
var state_val_6316 = (state_6315[(1)]);
if((state_val_6316 === (1))){
var inst_6308 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6309 = [null,data];
var inst_6310 = (new cljs.core.PersistentVector(null,2,(5),inst_6308,inst_6309,null));
var state_6315__$1 = state_6315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6315__$1,(2),ret,inst_6310);
} else {
if((state_val_6316 === (2))){
var inst_6312 = (state_6315[(2)]);
var inst_6313 = cljs.core.async.close_BANG_.call(null,ret);
var state_6315__$1 = (function (){var statearr_6317 = state_6315;
(statearr_6317[(7)] = inst_6312);

return statearr_6317;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6315__$1,inst_6313);
} else {
return null;
}
}
});})(c__2882__auto__,ret))
;
return ((function (switch__2792__auto__,c__2882__auto__,ret){
return (function() {
var stock$tool$content_$_state_machine__2793__auto__ = null;
var stock$tool$content_$_state_machine__2793__auto____0 = (function (){
var statearr_6318 = [null,null,null,null,null,null,null,null];
(statearr_6318[(0)] = stock$tool$content_$_state_machine__2793__auto__);

(statearr_6318[(1)] = (1));

return statearr_6318;
});
var stock$tool$content_$_state_machine__2793__auto____1 = (function (state_6315){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6319){if((e6319 instanceof Object)){
var ex__2796__auto__ = e6319;
var statearr_6320_6336 = state_6315;
(statearr_6320_6336[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6337 = state_6315;
state_6315 = G__6337;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
stock$tool$content_$_state_machine__2793__auto__ = function(state_6315){
switch(arguments.length){
case 0:
return stock$tool$content_$_state_machine__2793__auto____0.call(this);
case 1:
return stock$tool$content_$_state_machine__2793__auto____1.call(this,state_6315);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$content_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$content_$_state_machine__2793__auto____0;
stock$tool$content_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$content_$_state_machine__2793__auto____1;
return stock$tool$content_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,ret))
})();
var state__2884__auto__ = (function (){var statearr_6321 = f__2883__auto__.call(null);
(statearr_6321[(6)] = c__2882__auto__);

return statearr_6321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,ret))
);

return c__2882__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,ret){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,ret){
return (function (state_6329){
var state_val_6330 = (state_6329[(1)]);
if((state_val_6330 === (1))){
var inst_6322 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6323 = [err];
var inst_6324 = (new cljs.core.PersistentVector(null,1,(5),inst_6322,inst_6323,null));
var state_6329__$1 = state_6329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6329__$1,(2),ret,inst_6324);
} else {
if((state_val_6330 === (2))){
var inst_6326 = (state_6329[(2)]);
var inst_6327 = cljs.core.async.close_BANG_.call(null,ret);
var state_6329__$1 = (function (){var statearr_6331 = state_6329;
(statearr_6331[(7)] = inst_6326);

return statearr_6331;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6329__$1,inst_6327);
} else {
return null;
}
}
});})(c__2882__auto__,ret))
;
return ((function (switch__2792__auto__,c__2882__auto__,ret){
return (function() {
var stock$tool$content_$_state_machine__2793__auto__ = null;
var stock$tool$content_$_state_machine__2793__auto____0 = (function (){
var statearr_6332 = [null,null,null,null,null,null,null,null];
(statearr_6332[(0)] = stock$tool$content_$_state_machine__2793__auto__);

(statearr_6332[(1)] = (1));

return statearr_6332;
});
var stock$tool$content_$_state_machine__2793__auto____1 = (function (state_6329){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6333){if((e6333 instanceof Object)){
var ex__2796__auto__ = e6333;
var statearr_6334_6338 = state_6329;
(statearr_6334_6338[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6339 = state_6329;
state_6329 = G__6339;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
stock$tool$content_$_state_machine__2793__auto__ = function(state_6329){
switch(arguments.length){
case 0:
return stock$tool$content_$_state_machine__2793__auto____0.call(this);
case 1:
return stock$tool$content_$_state_machine__2793__auto____1.call(this,state_6329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$content_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$content_$_state_machine__2793__auto____0;
stock$tool$content_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$content_$_state_machine__2793__auto____1;
return stock$tool$content_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,ret))
})();
var state__2884__auto__ = (function (){var statearr_6335 = f__2883__auto__.call(null);
(statearr_6335[(6)] = c__2882__auto__);

return statearr_6335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,ret))
);

return c__2882__auto__;
});})(ret))
};
return obj6305;
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
}catch (e6340){if((e6340 instanceof Object)){
var e = e6340;
return null;
} else {
throw e6340;

}
}});
stock.tool.todayPrice = (function stock$tool$todayPrice(id){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_6363){
var state_val_6364 = (state_6363[(1)]);
if((state_val_6364 === (1))){
var inst_6344 = stock.tool.goog_finance_info_url.call(null,id);
var inst_6345 = stock.tool.content.call(null,inst_6344);
var state_6363__$1 = state_6363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6363__$1,(2),inst_6345);
} else {
if((state_val_6364 === (2))){
var inst_6348 = (state_6363[(7)]);
var inst_6347 = (state_6363[(2)]);
var inst_6348__$1 = cljs.core.nth.call(null,inst_6347,(0),null);
var inst_6349 = cljs.core.nth.call(null,inst_6347,(1),null);
var inst_6350 = inst_6349.replace(/\/\//,"");
var state_6363__$1 = (function (){var statearr_6365 = state_6363;
(statearr_6365[(7)] = inst_6348__$1);

(statearr_6365[(8)] = inst_6350);

return statearr_6365;
})();
if(cljs.core.truth_(inst_6348__$1)){
var statearr_6366_6374 = state_6363__$1;
(statearr_6366_6374[(1)] = (3));

} else {
var statearr_6367_6375 = state_6363__$1;
(statearr_6367_6375[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6364 === (3))){
var inst_6348 = (state_6363[(7)]);
var inst_6352 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6353 = [inst_6348];
var inst_6354 = (new cljs.core.PersistentVector(null,1,(5),inst_6352,inst_6353,null));
var state_6363__$1 = state_6363;
var statearr_6368_6376 = state_6363__$1;
(statearr_6368_6376[(2)] = inst_6354);

(statearr_6368_6376[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6364 === (4))){
var inst_6350 = (state_6363[(8)]);
var inst_6356 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6357 = stock.tool.parse_info.call(null,inst_6350);
var inst_6358 = [null,inst_6357];
var inst_6359 = (new cljs.core.PersistentVector(null,2,(5),inst_6356,inst_6358,null));
var state_6363__$1 = state_6363;
var statearr_6369_6377 = state_6363__$1;
(statearr_6369_6377[(2)] = inst_6359);

(statearr_6369_6377[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6364 === (5))){
var inst_6361 = (state_6363[(2)]);
var state_6363__$1 = state_6363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6363__$1,inst_6361);
} else {
return null;
}
}
}
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var stock$tool$todayPrice_$_state_machine__2793__auto__ = null;
var stock$tool$todayPrice_$_state_machine__2793__auto____0 = (function (){
var statearr_6370 = [null,null,null,null,null,null,null,null,null];
(statearr_6370[(0)] = stock$tool$todayPrice_$_state_machine__2793__auto__);

(statearr_6370[(1)] = (1));

return statearr_6370;
});
var stock$tool$todayPrice_$_state_machine__2793__auto____1 = (function (state_6363){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6371){if((e6371 instanceof Object)){
var ex__2796__auto__ = e6371;
var statearr_6372_6378 = state_6363;
(statearr_6372_6378[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6379 = state_6363;
state_6363 = G__6379;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
stock$tool$todayPrice_$_state_machine__2793__auto__ = function(state_6363){
switch(arguments.length){
case 0:
return stock$tool$todayPrice_$_state_machine__2793__auto____0.call(this);
case 1:
return stock$tool$todayPrice_$_state_machine__2793__auto____1.call(this,state_6363);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$todayPrice_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$todayPrice_$_state_machine__2793__auto____0;
stock$tool$todayPrice_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$todayPrice_$_state_machine__2793__auto____1;
return stock$tool$todayPrice_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_6373 = f__2883__auto__.call(null);
(statearr_6373[(6)] = c__2882__auto__);

return statearr_6373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
/**
 * 結合今天，如果今天已經抓到，就不結合
 */
stock.tool.combineToday = (function stock$tool$combineToday(todayLine,li){
if(cljs.core.truth_(todayLine)){
var vec__6380 = cljs.core.first.call(null,li);
var maybe_today = cljs.core.nth.call(null,vec__6380,(0),null);
var _ = cljs.core.nth.call(null,vec__6380,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__6380,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__6380,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__6380,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__6380,(5),null);
var vec__6383 = todayLine;
var today_date = cljs.core.nth.call(null,vec__6383,(0),null);
var ___$5 = cljs.core.nth.call(null,vec__6383,(1),null);
var ___$6 = cljs.core.nth.call(null,vec__6383,(2),null);
var ___$7 = cljs.core.nth.call(null,vec__6383,(3),null);
var ___$8 = cljs.core.nth.call(null,vec__6383,(4),null);
var ___$9 = cljs.core.nth.call(null,vec__6383,(5),null);
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
return (function stock$tool$parse_getprices_$_iter__6386(s__6387){
return (new cljs.core.LazySeq(null,((function (infos){
return (function (){
var s__6387__$1 = s__6387;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6387__$1);
if(temp__5457__auto__){
var s__6387__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6387__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__6387__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__6389 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__6388 = (0);
while(true){
if((i__6388 < size__4291__auto__)){
var vec__6390 = cljs.core._nth.call(null,c__4290__auto__,i__6388);
var _ = cljs.core.nth.call(null,vec__6390,(0),null);
var date = cljs.core.nth.call(null,vec__6390,(1),null);
var close = cljs.core.nth.call(null,vec__6390,(2),null);
var high = cljs.core.nth.call(null,vec__6390,(3),null);
var low = cljs.core.nth.call(null,vec__6390,(4),null);
var open = cljs.core.nth.call(null,vec__6390,(5),null);
var volume = cljs.core.nth.call(null,vec__6390,(6),null);
cljs.core.chunk_append.call(null,b__6389,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));

var G__6396 = (i__6388 + (1));
i__6388 = G__6396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6389),stock$tool$parse_getprices_$_iter__6386.call(null,cljs.core.chunk_rest.call(null,s__6387__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6389),null);
}
} else {
var vec__6393 = cljs.core.first.call(null,s__6387__$2);
var _ = cljs.core.nth.call(null,vec__6393,(0),null);
var date = cljs.core.nth.call(null,vec__6393,(1),null);
var close = cljs.core.nth.call(null,vec__6393,(2),null);
var high = cljs.core.nth.call(null,vec__6393,(3),null);
var low = cljs.core.nth.call(null,vec__6393,(4),null);
var open = cljs.core.nth.call(null,vec__6393,(5),null);
var volume = cljs.core.nth.call(null,vec__6393,(6),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),stock$tool$parse_getprices_$_iter__6386.call(null,cljs.core.rest.call(null,s__6387__$2)));
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
var pass1 = cljs.core.map.call(null,(function (p__6397){
var vec__6398 = p__6397;
var d = cljs.core.nth.call(null,vec__6398,(0),null);
var o = cljs.core.nth.call(null,vec__6398,(1),null);
var h = cljs.core.nth.call(null,vec__6398,(2),null);
var l = cljs.core.nth.call(null,vec__6398,(3),null);
var c = cljs.core.nth.call(null,vec__6398,(4),null);
var v = cljs.core.nth.call(null,vec__6398,(5),null);
if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d))){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);
var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__6401,p__6402){
var vec__6403 = p__6401;
var d1 = cljs.core.nth.call(null,vec__6403,(0),null);
var _ = cljs.core.nth.call(null,vec__6403,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__6403,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__6403,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__6403,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__6403,(5),null);
var prev = vec__6403;
var vec__6406 = p__6402;
var d2 = cljs.core.nth.call(null,vec__6406,(0),null);
var o = cljs.core.nth.call(null,vec__6406,(1),null);
var h = cljs.core.nth.call(null,vec__6406,(2),null);
var l = cljs.core.nth.call(null,vec__6406,(3),null);
var c = cljs.core.nth.call(null,vec__6406,(4),null);
var v = cljs.core.nth.call(null,vec__6406,(5),null);
var curr = vec__6406;
if(((typeof d1 === 'string') && (typeof d2 === 'string'))){
var offset = (parseInt(d2) - parseInt(d1));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)].join(''),o,h,l,c,v], null);
} else {
return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));
var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__6409,p__6410){
var vec__6411 = p__6409;
var d1 = cljs.core.nth.call(null,vec__6411,(0),null);
var _ = cljs.core.nth.call(null,vec__6411,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__6411,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__6411,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__6411,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__6411,(5),null);
var prev = vec__6411;
var vec__6414 = p__6410;
var d2 = cljs.core.nth.call(null,vec__6414,(0),null);
var o = cljs.core.nth.call(null,vec__6414,(1),null);
var h = cljs.core.nth.call(null,vec__6414,(2),null);
var l = cljs.core.nth.call(null,vec__6414,(3),null);
var c = cljs.core.nth.call(null,vec__6414,(4),null);
var v = cljs.core.nth.call(null,vec__6414,(5),null);
var curr = vec__6414;
if(((typeof d1 === 'number') && (typeof d2 === 'string'))){
var n = parseInt(d2);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else {
return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));
var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__6417){
var vec__6418 = p__6417;
var d = cljs.core.nth.call(null,vec__6418,(0),null);
var o = cljs.core.nth.call(null,vec__6418,(1),null);
var h = cljs.core.nth.call(null,vec__6418,(2),null);
var l = cljs.core.nth.call(null,vec__6418,(3),null);
var c = cljs.core.nth.call(null,vec__6418,(4),null);
var v = cljs.core.nth.call(null,vec__6418,(5),null);
return true;
});})(pass1,pass2,pass3))
,pass3);
var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__6421){
var vec__6422 = p__6421;
var d = cljs.core.nth.call(null,vec__6422,(0),null);
var o = cljs.core.nth.call(null,vec__6422,(1),null);
var h = cljs.core.nth.call(null,vec__6422,(2),null);
var l = cljs.core.nth.call(null,vec__6422,(3),null);
var c = cljs.core.nth.call(null,vec__6422,(4),null);
var v = cljs.core.nth.call(null,vec__6422,(5),null);
var date = (new Date((d * (1000))));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);
return pass5;
});
stock.tool.get_goog_stock_prices_old = (function stock$tool$get_goog_stock_prices_old(id,range){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_6454){
var state_val_6455 = (state_6454[(1)]);
if((state_val_6455 === (1))){
var inst_6431 = stock.tool.goog_finance_getprices_url.call(null,id,range);
var inst_6432 = stock.tool.content.call(null,inst_6431);
var state_6454__$1 = state_6454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6454__$1,(2),inst_6432);
} else {
if((state_val_6455 === (2))){
var inst_6434 = (state_6454[(2)]);
var inst_6435 = cljs.core.nth.call(null,inst_6434,(0),null);
var inst_6436 = cljs.core.nth.call(null,inst_6434,(1),null);
var inst_6437 = stock.tool.todayPrice.call(null,id);
var state_6454__$1 = (function (){var statearr_6456 = state_6454;
(statearr_6456[(7)] = inst_6436);

(statearr_6456[(8)] = inst_6435);

return statearr_6456;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6454__$1,(3),inst_6437);
} else {
if((state_val_6455 === (3))){
var inst_6436 = (state_6454[(7)]);
var inst_6435 = (state_6454[(8)]);
var inst_6439 = (state_6454[(2)]);
var inst_6440 = cljs.core.nth.call(null,inst_6439,(0),null);
var inst_6441 = cljs.core.nth.call(null,inst_6439,(1),null);
var inst_6442 = stock.tool.parse_getprices.call(null,inst_6436);
var inst_6443 = stock.tool.format_getprices.call(null,(86400),inst_6442);
var inst_6444 = cljs.core.reverse.call(null,inst_6443);
var inst_6445 = stock.tool.combineToday.call(null,inst_6441,inst_6444);
var inst_6446 = cljs.core.PersistentVector.EMPTY_NODE;
var state_6454__$1 = (function (){var statearr_6457 = state_6454;
(statearr_6457[(9)] = inst_6440);

(statearr_6457[(10)] = inst_6446);

(statearr_6457[(11)] = inst_6445);

return statearr_6457;
})();
if(cljs.core.truth_(inst_6435)){
var statearr_6458_6466 = state_6454__$1;
(statearr_6458_6466[(1)] = (4));

} else {
var statearr_6459_6467 = state_6454__$1;
(statearr_6459_6467[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6455 === (4))){
var inst_6435 = (state_6454[(8)]);
var state_6454__$1 = state_6454;
var statearr_6460_6468 = state_6454__$1;
(statearr_6460_6468[(2)] = inst_6435);

(statearr_6460_6468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6455 === (5))){
var inst_6440 = (state_6454[(9)]);
var state_6454__$1 = state_6454;
var statearr_6461_6469 = state_6454__$1;
(statearr_6461_6469[(2)] = inst_6440);

(statearr_6461_6469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6455 === (6))){
var inst_6446 = (state_6454[(10)]);
var inst_6445 = (state_6454[(11)]);
var inst_6450 = (state_6454[(2)]);
var inst_6451 = [inst_6450,inst_6445];
var inst_6452 = (new cljs.core.PersistentVector(null,2,(5),inst_6446,inst_6451,null));
var state_6454__$1 = state_6454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6454__$1,inst_6452);
} else {
return null;
}
}
}
}
}
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var stock$tool$get_goog_stock_prices_old_$_state_machine__2793__auto__ = null;
var stock$tool$get_goog_stock_prices_old_$_state_machine__2793__auto____0 = (function (){
var statearr_6462 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6462[(0)] = stock$tool$get_goog_stock_prices_old_$_state_machine__2793__auto__);

(statearr_6462[(1)] = (1));

return statearr_6462;
});
var stock$tool$get_goog_stock_prices_old_$_state_machine__2793__auto____1 = (function (state_6454){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6463){if((e6463 instanceof Object)){
var ex__2796__auto__ = e6463;
var statearr_6464_6470 = state_6454;
(statearr_6464_6470[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6471 = state_6454;
state_6454 = G__6471;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
stock$tool$get_goog_stock_prices_old_$_state_machine__2793__auto__ = function(state_6454){
switch(arguments.length){
case 0:
return stock$tool$get_goog_stock_prices_old_$_state_machine__2793__auto____0.call(this);
case 1:
return stock$tool$get_goog_stock_prices_old_$_state_machine__2793__auto____1.call(this,state_6454);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$get_goog_stock_prices_old_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$get_goog_stock_prices_old_$_state_machine__2793__auto____0;
stock$tool$get_goog_stock_prices_old_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$get_goog_stock_prices_old_$_state_machine__2793__auto____1;
return stock$tool$get_goog_stock_prices_old_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_6465 = f__2883__auto__.call(null);
(statearr_6465[(6)] = c__2882__auto__);

return statearr_6465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
stock.tool.goog_finance_historical_url = (function stock$tool$goog_finance_historical_url(id,startdate,start,num){
return ["https://www.google.com/finance/historical?q=TPE:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"&startdate=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate),"&start=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start),"&num=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join('');
});
stock.tool.parse_historical = (function stock$tool$parse_historical(content){
var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,["<tr>","<td class=\"lm\">(\\D{3} \\d+, \\d+)","<td class=\"rgt\">(\\d+\\.\\d+)","<td class=\"rgt\">(\\d+\\.\\d+)","<td class=\"rgt\">(\\d+\\.\\d+)","<td class=\"rgt\">(\\d+\\.\\d+)","<td class=\"rgt rm\">([\\d,]+)"].join('')),content.replace(/\n/,""));
var iter__4292__auto__ = ((function (infos){
return (function stock$tool$parse_historical_$_iter__6472(s__6473){
return (new cljs.core.LazySeq(null,((function (infos){
return (function (){
var s__6473__$1 = s__6473;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__6473__$1);
if(temp__5457__auto__){
var s__6473__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6473__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__6473__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__6475 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__6474 = (0);
while(true){
if((i__6474 < size__4291__auto__)){
var vec__6476 = cljs.core._nth.call(null,c__4290__auto__,i__6474);
var _ = cljs.core.nth.call(null,vec__6476,(0),null);
var date = cljs.core.nth.call(null,vec__6476,(1),null);
var open = cljs.core.nth.call(null,vec__6476,(2),null);
var high = cljs.core.nth.call(null,vec__6476,(3),null);
var low = cljs.core.nth.call(null,vec__6476,(4),null);
var close = cljs.core.nth.call(null,vec__6476,(5),null);
var volume = cljs.core.nth.call(null,vec__6476,(6),null);
cljs.core.chunk_append.call(null,b__6475,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume.replace(/,/,""))], null));

var G__6482 = (i__6474 + (1));
i__6474 = G__6482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6475),stock$tool$parse_historical_$_iter__6472.call(null,cljs.core.chunk_rest.call(null,s__6473__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6475),null);
}
} else {
var vec__6479 = cljs.core.first.call(null,s__6473__$2);
var _ = cljs.core.nth.call(null,vec__6479,(0),null);
var date = cljs.core.nth.call(null,vec__6479,(1),null);
var open = cljs.core.nth.call(null,vec__6479,(2),null);
var high = cljs.core.nth.call(null,vec__6479,(3),null);
var low = cljs.core.nth.call(null,vec__6479,(4),null);
var close = cljs.core.nth.call(null,vec__6479,(5),null);
var volume = cljs.core.nth.call(null,vec__6479,(6),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume.replace(/,/,""))], null),stock$tool$parse_historical_$_iter__6472.call(null,cljs.core.rest.call(null,s__6473__$2)));
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
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_6516){
var state_val_6517 = (state_6516[(1)]);
if((state_val_6517 === (1))){
var inst_6486 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);
var inst_6487 = stock.tool.content.call(null,inst_6486);
var state_6516__$1 = state_6516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6516__$1,(2),inst_6487);
} else {
if((state_val_6517 === (2))){
var inst_6490 = (state_6516[(7)]);
var inst_6489 = (state_6516[(2)]);
var inst_6490__$1 = cljs.core.nth.call(null,inst_6489,(0),null);
var inst_6491 = cljs.core.nth.call(null,inst_6489,(1),null);
var state_6516__$1 = (function (){var statearr_6518 = state_6516;
(statearr_6518[(7)] = inst_6490__$1);

(statearr_6518[(8)] = inst_6491);

return statearr_6518;
})();
if(cljs.core.truth_(inst_6490__$1)){
var statearr_6519_6532 = state_6516__$1;
(statearr_6519_6532[(1)] = (3));

} else {
var statearr_6520_6533 = state_6516__$1;
(statearr_6520_6533[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6517 === (3))){
var inst_6490 = (state_6516[(7)]);
var inst_6493 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6494 = [inst_6490];
var inst_6495 = (new cljs.core.PersistentVector(null,1,(5),inst_6493,inst_6494,null));
var state_6516__$1 = state_6516;
var statearr_6521_6534 = state_6516__$1;
(statearr_6521_6534[(2)] = inst_6495);

(statearr_6521_6534[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6517 === (4))){
var inst_6491 = (state_6516[(8)]);
var inst_6497 = (state_6516[(9)]);
var inst_6497__$1 = stock.tool.parse_historical.call(null,inst_6491);
var inst_6498 = cljs.core.count.call(null,inst_6497__$1);
var inst_6499 = cljs.core._EQ_.call(null,num,inst_6498);
var state_6516__$1 = (function (){var statearr_6522 = state_6516;
(statearr_6522[(9)] = inst_6497__$1);

return statearr_6522;
})();
if(inst_6499){
var statearr_6523_6535 = state_6516__$1;
(statearr_6523_6535[(1)] = (6));

} else {
var statearr_6524_6536 = state_6516__$1;
(statearr_6524_6536[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6517 === (5))){
var inst_6514 = (state_6516[(2)]);
var state_6516__$1 = state_6516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6516__$1,inst_6514);
} else {
if((state_val_6517 === (6))){
var inst_6497 = (state_6516[(9)]);
var inst_6501 = cljs.core.concat.call(null,all,inst_6497);
var inst_6502 = (start + num);
var inst_6503 = stock.tool.goog_historical_info.call(null,inst_6501,id,startdate,inst_6502,num);
var state_6516__$1 = state_6516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6516__$1,(9),inst_6503);
} else {
if((state_val_6517 === (7))){
var inst_6497 = (state_6516[(9)]);
var inst_6507 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6508 = cljs.core.concat.call(null,all,inst_6497);
var inst_6509 = [null,inst_6508];
var inst_6510 = (new cljs.core.PersistentVector(null,2,(5),inst_6507,inst_6509,null));
var state_6516__$1 = state_6516;
var statearr_6525_6537 = state_6516__$1;
(statearr_6525_6537[(2)] = inst_6510);

(statearr_6525_6537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6517 === (8))){
var inst_6512 = (state_6516[(2)]);
var state_6516__$1 = state_6516;
var statearr_6526_6538 = state_6516__$1;
(statearr_6526_6538[(2)] = inst_6512);

(statearr_6526_6538[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6517 === (9))){
var inst_6505 = (state_6516[(2)]);
var state_6516__$1 = state_6516;
var statearr_6527_6539 = state_6516__$1;
(statearr_6527_6539[(2)] = inst_6505);

(statearr_6527_6539[(1)] = (8));


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
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var stock$tool$goog_historical_info_$_state_machine__2793__auto__ = null;
var stock$tool$goog_historical_info_$_state_machine__2793__auto____0 = (function (){
var statearr_6528 = [null,null,null,null,null,null,null,null,null,null];
(statearr_6528[(0)] = stock$tool$goog_historical_info_$_state_machine__2793__auto__);

(statearr_6528[(1)] = (1));

return statearr_6528;
});
var stock$tool$goog_historical_info_$_state_machine__2793__auto____1 = (function (state_6516){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6529){if((e6529 instanceof Object)){
var ex__2796__auto__ = e6529;
var statearr_6530_6540 = state_6516;
(statearr_6530_6540[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6541 = state_6516;
state_6516 = G__6541;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
stock$tool$goog_historical_info_$_state_machine__2793__auto__ = function(state_6516){
switch(arguments.length){
case 0:
return stock$tool$goog_historical_info_$_state_machine__2793__auto____0.call(this);
case 1:
return stock$tool$goog_historical_info_$_state_machine__2793__auto____1.call(this,state_6516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$goog_historical_info_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$goog_historical_info_$_state_machine__2793__auto____0;
stock$tool$goog_historical_info_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$goog_historical_info_$_state_machine__2793__auto____1;
return stock$tool$goog_historical_info_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_6531 = f__2883__auto__.call(null);
(statearr_6531[(6)] = c__2882__auto__);

return statearr_6531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
stock.tool.getUrl = (function stock$tool$getUrl(url){
var retc = cljs.core.async.chan.call(null);
var errc = cljs.core.async.chan.call(null);
$.ajax((function (){var obj6543 = {"url":url,"method":"GET","success":((function (retc,errc){
return (function (data){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,retc,errc){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,retc,errc){
return (function (state_6559){
var state_val_6560 = (state_6559[(1)]);
if((state_val_6560 === (1))){
var inst_6544 = (state_6559[(7)]);
var inst_6544__$1 = (data[(0)]);
var inst_6545 = (data[(1)]);
var state_6559__$1 = (function (){var statearr_6561 = state_6559;
(statearr_6561[(7)] = inst_6544__$1);

(statearr_6561[(8)] = inst_6545);

return statearr_6561;
})();
if(cljs.core.truth_(inst_6544__$1)){
var statearr_6562_6584 = state_6559__$1;
(statearr_6562_6584[(1)] = (2));

} else {
var statearr_6563_6585 = state_6559__$1;
(statearr_6563_6585[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6560 === (2))){
var inst_6544 = (state_6559[(7)]);
var state_6559__$1 = state_6559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6559__$1,(5),errc,inst_6544);
} else {
if((state_val_6560 === (3))){
var inst_6545 = (state_6559[(8)]);
var state_6559__$1 = state_6559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6559__$1,(6),retc,inst_6545);
} else {
if((state_val_6560 === (4))){
var inst_6557 = (state_6559[(2)]);
var state_6559__$1 = state_6559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6559__$1,inst_6557);
} else {
if((state_val_6560 === (5))){
var inst_6548 = (state_6559[(2)]);
var inst_6549 = cljs.core.async.close_BANG_.call(null,retc);
var inst_6550 = cljs.core.async.close_BANG_.call(null,errc);
var state_6559__$1 = (function (){var statearr_6564 = state_6559;
(statearr_6564[(9)] = inst_6548);

(statearr_6564[(10)] = inst_6549);

return statearr_6564;
})();
var statearr_6565_6586 = state_6559__$1;
(statearr_6565_6586[(2)] = inst_6550);

(statearr_6565_6586[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6560 === (6))){
var inst_6553 = (state_6559[(2)]);
var inst_6554 = cljs.core.async.close_BANG_.call(null,retc);
var inst_6555 = cljs.core.async.close_BANG_.call(null,errc);
var state_6559__$1 = (function (){var statearr_6566 = state_6559;
(statearr_6566[(11)] = inst_6554);

(statearr_6566[(12)] = inst_6553);

return statearr_6566;
})();
var statearr_6567_6587 = state_6559__$1;
(statearr_6567_6587[(2)] = inst_6555);

(statearr_6567_6587[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__2882__auto__,retc,errc))
;
return ((function (switch__2792__auto__,c__2882__auto__,retc,errc){
return (function() {
var stock$tool$getUrl_$_state_machine__2793__auto__ = null;
var stock$tool$getUrl_$_state_machine__2793__auto____0 = (function (){
var statearr_6568 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6568[(0)] = stock$tool$getUrl_$_state_machine__2793__auto__);

(statearr_6568[(1)] = (1));

return statearr_6568;
});
var stock$tool$getUrl_$_state_machine__2793__auto____1 = (function (state_6559){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6569){if((e6569 instanceof Object)){
var ex__2796__auto__ = e6569;
var statearr_6570_6588 = state_6559;
(statearr_6570_6588[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6589 = state_6559;
state_6559 = G__6589;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
stock$tool$getUrl_$_state_machine__2793__auto__ = function(state_6559){
switch(arguments.length){
case 0:
return stock$tool$getUrl_$_state_machine__2793__auto____0.call(this);
case 1:
return stock$tool$getUrl_$_state_machine__2793__auto____1.call(this,state_6559);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$getUrl_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$getUrl_$_state_machine__2793__auto____0;
stock$tool$getUrl_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$getUrl_$_state_machine__2793__auto____1;
return stock$tool$getUrl_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,retc,errc))
})();
var state__2884__auto__ = (function (){var statearr_6571 = f__2883__auto__.call(null);
(statearr_6571[(6)] = c__2882__auto__);

return statearr_6571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,retc,errc))
);

return c__2882__auto__;
});})(retc,errc))
,"error":((function (retc,errc){
return (function (xhr,_,err){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,retc,errc){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,retc,errc){
return (function (state_6577){
var state_val_6578 = (state_6577[(1)]);
if((state_val_6578 === (1))){
var state_6577__$1 = state_6577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6577__$1,(2),errc,err);
} else {
if((state_val_6578 === (2))){
var inst_6573 = (state_6577[(2)]);
var inst_6574 = cljs.core.async.close_BANG_.call(null,retc);
var inst_6575 = cljs.core.async.close_BANG_.call(null,errc);
var state_6577__$1 = (function (){var statearr_6579 = state_6577;
(statearr_6579[(7)] = inst_6573);

(statearr_6579[(8)] = inst_6574);

return statearr_6579;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6577__$1,inst_6575);
} else {
return null;
}
}
});})(c__2882__auto__,retc,errc))
;
return ((function (switch__2792__auto__,c__2882__auto__,retc,errc){
return (function() {
var stock$tool$getUrl_$_state_machine__2793__auto__ = null;
var stock$tool$getUrl_$_state_machine__2793__auto____0 = (function (){
var statearr_6580 = [null,null,null,null,null,null,null,null,null];
(statearr_6580[(0)] = stock$tool$getUrl_$_state_machine__2793__auto__);

(statearr_6580[(1)] = (1));

return statearr_6580;
});
var stock$tool$getUrl_$_state_machine__2793__auto____1 = (function (state_6577){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6581){if((e6581 instanceof Object)){
var ex__2796__auto__ = e6581;
var statearr_6582_6590 = state_6577;
(statearr_6582_6590[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6591 = state_6577;
state_6577 = G__6591;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
stock$tool$getUrl_$_state_machine__2793__auto__ = function(state_6577){
switch(arguments.length){
case 0:
return stock$tool$getUrl_$_state_machine__2793__auto____0.call(this);
case 1:
return stock$tool$getUrl_$_state_machine__2793__auto____1.call(this,state_6577);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$getUrl_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$getUrl_$_state_machine__2793__auto____0;
stock$tool$getUrl_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$getUrl_$_state_machine__2793__auto____1;
return stock$tool$getUrl_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,retc,errc))
})();
var state__2884__auto__ = (function (){var statearr_6583 = f__2883__auto__.call(null);
(statearr_6583[(6)] = c__2882__auto__);

return statearr_6583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,retc,errc))
);

return c__2882__auto__;
});})(retc,errc))
};
return obj6543;
})());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [retc,errc], null);
});
stock.tool.get_goog_stock_prices2 = (function stock$tool$get_goog_stock_prices2(id,range){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_6608){
var state_val_6609 = (state_6608[(1)]);
if((state_val_6609 === (1))){
var inst_6592 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6593 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6594 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6595 = ["2018/3",(10),(12),(6),(8),(10)];
var inst_6596 = (new cljs.core.PersistentVector(null,6,(5),inst_6594,inst_6595,null));
var inst_6597 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6598 = ["2018/3",(12),(14),(8),(8),(6)];
var inst_6599 = (new cljs.core.PersistentVector(null,6,(5),inst_6597,inst_6598,null));
var inst_6600 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6601 = ["2018/3",(12),(14),(8),(8),(16)];
var inst_6602 = (new cljs.core.PersistentVector(null,6,(5),inst_6600,inst_6601,null));
var inst_6603 = [inst_6596,inst_6599,inst_6602];
var inst_6604 = (new cljs.core.PersistentVector(null,3,(5),inst_6593,inst_6603,null));
var inst_6605 = [null,inst_6604];
var inst_6606 = (new cljs.core.PersistentVector(null,2,(5),inst_6592,inst_6605,null));
var state_6608__$1 = state_6608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6608__$1,inst_6606);
} else {
return null;
}
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var stock$tool$get_goog_stock_prices2_$_state_machine__2793__auto__ = null;
var stock$tool$get_goog_stock_prices2_$_state_machine__2793__auto____0 = (function (){
var statearr_6610 = [null,null,null,null,null,null,null];
(statearr_6610[(0)] = stock$tool$get_goog_stock_prices2_$_state_machine__2793__auto__);

(statearr_6610[(1)] = (1));

return statearr_6610;
});
var stock$tool$get_goog_stock_prices2_$_state_machine__2793__auto____1 = (function (state_6608){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6611){if((e6611 instanceof Object)){
var ex__2796__auto__ = e6611;
var statearr_6612_6614 = state_6608;
(statearr_6612_6614[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6615 = state_6608;
state_6608 = G__6615;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
stock$tool$get_goog_stock_prices2_$_state_machine__2793__auto__ = function(state_6608){
switch(arguments.length){
case 0:
return stock$tool$get_goog_stock_prices2_$_state_machine__2793__auto____0.call(this);
case 1:
return stock$tool$get_goog_stock_prices2_$_state_machine__2793__auto____1.call(this,state_6608);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$get_goog_stock_prices2_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$get_goog_stock_prices2_$_state_machine__2793__auto____0;
stock$tool$get_goog_stock_prices2_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$get_goog_stock_prices2_$_state_machine__2793__auto____1;
return stock$tool$get_goog_stock_prices2_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_6613 = f__2883__auto__.call(null);
(statearr_6613[(6)] = c__2882__auto__);

return statearr_6613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
stock.tool.get_goog_stock_prices = (function stock$tool$get_goog_stock_prices(id,range){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_6660){
var state_val_6661 = (state_6660[(1)]);
if((state_val_6661 === (1))){
var inst_6623 = (state_6660[(7)]);
var inst_6624 = (state_6660[(8)]);
var inst_6625 = (state_6660[(9)]);
var inst_6622 = ["/fn/stockInfo?symbol=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"&chartLast=365"].join('');
var inst_6623__$1 = stock.tool.getUrl.call(null,inst_6622);
var inst_6624__$1 = cljs.core.nth.call(null,inst_6623__$1,(0),null);
var inst_6625__$1 = cljs.core.nth.call(null,inst_6623__$1,(1),null);
var inst_6626 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6627 = [inst_6624__$1,inst_6625__$1];
var inst_6628 = (new cljs.core.PersistentVector(null,2,(5),inst_6626,inst_6627,null));
var state_6660__$1 = (function (){var statearr_6662 = state_6660;
(statearr_6662[(7)] = inst_6623__$1);

(statearr_6662[(8)] = inst_6624__$1);

(statearr_6662[(9)] = inst_6625__$1);

return statearr_6662;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_6660__$1,(2),inst_6628);
} else {
if((state_val_6661 === (2))){
var inst_6632 = (state_6660[(10)]);
var inst_6630 = (state_6660[(11)]);
var inst_6624 = (state_6660[(8)]);
var inst_6630__$1 = (state_6660[(2)]);
var inst_6631 = cljs.core.nth.call(null,inst_6630__$1,(0),null);
var inst_6632__$1 = cljs.core.nth.call(null,inst_6630__$1,(1),null);
var inst_6636 = cljs.core._EQ_.call(null,inst_6624,inst_6632__$1);
var state_6660__$1 = (function (){var statearr_6663 = state_6660;
(statearr_6663[(10)] = inst_6632__$1);

(statearr_6663[(11)] = inst_6630__$1);

(statearr_6663[(12)] = inst_6631);

return statearr_6663;
})();
if(inst_6636){
var statearr_6664_6676 = state_6660__$1;
(statearr_6664_6676[(1)] = (3));

} else {
var statearr_6665_6677 = state_6660__$1;
(statearr_6665_6677[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6661 === (3))){
var inst_6632 = (state_6660[(10)]);
var inst_6623 = (state_6660[(7)]);
var inst_6630 = (state_6660[(11)]);
var inst_6631 = (state_6660[(12)]);
var inst_6624 = (state_6660[(8)]);
var inst_6625 = (state_6660[(9)]);
var inst_6638 = (function (){var vec__6616 = inst_6623;
var stockInfoc = inst_6624;
var errc = inst_6625;
var vec__6619 = inst_6630;
var v = inst_6631;
var c = inst_6632;
var pred__6633 = cljs.core._EQ_;
var expr__6634 = inst_6632;
return ((function (vec__6616,stockInfoc,errc,vec__6619,v,c,pred__6633,expr__6634,inst_6632,inst_6623,inst_6630,inst_6631,inst_6624,inst_6625,state_val_6661,c__2882__auto__){
return (function (obj){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.get,obj),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["date","open","high","low","close","volume"], null));
});
;})(vec__6616,stockInfoc,errc,vec__6619,v,c,pred__6633,expr__6634,inst_6632,inst_6623,inst_6630,inst_6631,inst_6624,inst_6625,state_val_6661,c__2882__auto__))
})();
var inst_6639 = cljs.core.js__GT_clj.call(null,inst_6631);
var inst_6640 = cljs.core.map.call(null,inst_6638,inst_6639);
var inst_6641 = cljs.core.reverse.call(null,inst_6640);
var inst_6642 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6643 = [null,inst_6641];
var inst_6644 = (new cljs.core.PersistentVector(null,2,(5),inst_6642,inst_6643,null));
var state_6660__$1 = state_6660;
var statearr_6666_6678 = state_6660__$1;
(statearr_6666_6678[(2)] = inst_6644);

(statearr_6666_6678[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6661 === (4))){
var inst_6632 = (state_6660[(10)]);
var inst_6625 = (state_6660[(9)]);
var inst_6646 = cljs.core._EQ_.call(null,inst_6625,inst_6632);
var state_6660__$1 = state_6660;
if(inst_6646){
var statearr_6667_6679 = state_6660__$1;
(statearr_6667_6679[(1)] = (6));

} else {
var statearr_6668_6680 = state_6660__$1;
(statearr_6668_6680[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6661 === (5))){
var inst_6658 = (state_6660[(2)]);
var state_6660__$1 = state_6660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6660__$1,inst_6658);
} else {
if((state_val_6661 === (6))){
var inst_6631 = (state_6660[(12)]);
var inst_6648 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6649 = [inst_6631,null];
var inst_6650 = (new cljs.core.PersistentVector(null,2,(5),inst_6648,inst_6649,null));
var state_6660__$1 = state_6660;
var statearr_6669_6681 = state_6660__$1;
(statearr_6669_6681[(2)] = inst_6650);

(statearr_6669_6681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6661 === (7))){
var inst_6632 = (state_6660[(10)]);
var inst_6652 = ["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_6632)].join('');
var inst_6653 = (new Error(inst_6652));
var inst_6654 = (function(){throw inst_6653})();
var state_6660__$1 = state_6660;
var statearr_6670_6682 = state_6660__$1;
(statearr_6670_6682[(2)] = inst_6654);

(statearr_6670_6682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6661 === (8))){
var inst_6656 = (state_6660[(2)]);
var state_6660__$1 = state_6660;
var statearr_6671_6683 = state_6660__$1;
(statearr_6671_6683[(2)] = inst_6656);

(statearr_6671_6683[(1)] = (5));


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
});})(c__2882__auto__))
;
return ((function (switch__2792__auto__,c__2882__auto__){
return (function() {
var stock$tool$get_goog_stock_prices_$_state_machine__2793__auto__ = null;
var stock$tool$get_goog_stock_prices_$_state_machine__2793__auto____0 = (function (){
var statearr_6672 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_6672[(0)] = stock$tool$get_goog_stock_prices_$_state_machine__2793__auto__);

(statearr_6672[(1)] = (1));

return statearr_6672;
});
var stock$tool$get_goog_stock_prices_$_state_machine__2793__auto____1 = (function (state_6660){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_6660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e6673){if((e6673 instanceof Object)){
var ex__2796__auto__ = e6673;
var statearr_6674_6684 = state_6660;
(statearr_6674_6684[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6685 = state_6660;
state_6660 = G__6685;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
stock$tool$get_goog_stock_prices_$_state_machine__2793__auto__ = function(state_6660){
switch(arguments.length){
case 0:
return stock$tool$get_goog_stock_prices_$_state_machine__2793__auto____0.call(this);
case 1:
return stock$tool$get_goog_stock_prices_$_state_machine__2793__auto____1.call(this,state_6660);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$get_goog_stock_prices_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$get_goog_stock_prices_$_state_machine__2793__auto____0;
stock$tool$get_goog_stock_prices_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$get_goog_stock_prices_$_state_machine__2793__auto____1;
return stock$tool$get_goog_stock_prices_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_6675 = f__2883__auto__.call(null);
(statearr_6675[(6)] = c__2882__auto__);

return statearr_6675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__))
);

return c__2882__auto__;
});
stock.tool.date = (function stock$tool$date(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.date,kline);
} else {
var vec__6686 = kline;
var date = cljs.core.nth.call(null,vec__6686,(0),null);
var _ = cljs.core.nth.call(null,vec__6686,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__6686,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__6686,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__6686,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__6686,(5),null);
return date;
}
});
stock.tool.high = (function stock$tool$high(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.high,kline);
} else {
var vec__6689 = kline;
var _ = cljs.core.nth.call(null,vec__6689,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__6689,(1),null);
var high = cljs.core.nth.call(null,vec__6689,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__6689,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__6689,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__6689,(5),null);
return high;
}
});
stock.tool.open = (function stock$tool$open(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.open,kline);
} else {
var vec__6692 = kline;
var _ = cljs.core.nth.call(null,vec__6692,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__6692,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__6692,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__6692,(3),null);
var open = cljs.core.nth.call(null,vec__6692,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__6692,(5),null);
return open;
}
});
stock.tool.close = (function stock$tool$close(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.close,kline);
} else {
var vec__6695 = kline;
var _ = cljs.core.nth.call(null,vec__6695,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__6695,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__6695,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__6695,(3),null);
var close = cljs.core.nth.call(null,vec__6695,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__6695,(5),null);
return close;
}
});
stock.tool.low = (function stock$tool$low(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.low,kline);
} else {
var vec__6698 = kline;
var _ = cljs.core.nth.call(null,vec__6698,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__6698,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__6698,(2),null);
var low = cljs.core.nth.call(null,vec__6698,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__6698,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__6698,(5),null);
return low;
}
});
stock.tool.volume = (function stock$tool$volume(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.volume,kline);
} else {
var vec__6701 = kline;
var _ = cljs.core.nth.call(null,vec__6701,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__6701,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__6701,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__6701,(3),null);
var ___$4 = cljs.core.nth.call(null,vec__6701,(4),null);
var volume = cljs.core.nth.call(null,vec__6701,(5),null);
return volume;
}
});
stock.tool.mid = (function stock$tool$mid(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.mid,kline);
} else {
var vec__6704 = kline;
var _ = cljs.core.nth.call(null,vec__6704,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__6704,(1),null);
var high = cljs.core.nth.call(null,vec__6704,(2),null);
var low = cljs.core.nth.call(null,vec__6704,(3),null);
var ___$2 = cljs.core.nth.call(null,vec__6704,(4),null);
var ___$3 = cljs.core.nth.call(null,vec__6704,(5),null);
return ((high + low) / (2));
}
});
stock.tool.typical = (function stock$tool$typical(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.typical,kline);
} else {
var vec__6707 = kline;
var _ = cljs.core.nth.call(null,vec__6707,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__6707,(1),null);
var high = cljs.core.nth.call(null,vec__6707,(2),null);
var low = cljs.core.nth.call(null,vec__6707,(3),null);
var close = cljs.core.nth.call(null,vec__6707,(4),null);
var ___$2 = cljs.core.nth.call(null,vec__6707,(5),null);
return (((high + low) + close) / (3));
}
});

//# sourceMappingURL=tool.js.map
