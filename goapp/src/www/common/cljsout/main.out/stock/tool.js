// Compiled by ClojureScript 1.10.238 {}
goog.provide('stock.tool');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
stock.tool.content = (function stock$tool$content(url){
var ret = cljs.core.async.chan.call(null);
$.ajax((function (){var obj7005 = {"url":"/proxy","dataType":"text","data":(function (){var obj7007 = {"url":url};
return obj7007;
})(),"success":((function (ret){
return (function (data){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,ret){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,ret){
return (function (state_7015){
var state_val_7016 = (state_7015[(1)]);
if((state_val_7016 === (1))){
var inst_7008 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7009 = [null,data];
var inst_7010 = (new cljs.core.PersistentVector(null,2,(5),inst_7008,inst_7009,null));
var state_7015__$1 = state_7015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7015__$1,(2),ret,inst_7010);
} else {
if((state_val_7016 === (2))){
var inst_7012 = (state_7015[(2)]);
var inst_7013 = cljs.core.async.close_BANG_.call(null,ret);
var state_7015__$1 = (function (){var statearr_7017 = state_7015;
(statearr_7017[(7)] = inst_7012);

return statearr_7017;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7015__$1,inst_7013);
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
var statearr_7018 = [null,null,null,null,null,null,null,null];
(statearr_7018[(0)] = stock$tool$content_$_state_machine__2793__auto__);

(statearr_7018[(1)] = (1));

return statearr_7018;
});
var stock$tool$content_$_state_machine__2793__auto____1 = (function (state_7015){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7019){if((e7019 instanceof Object)){
var ex__2796__auto__ = e7019;
var statearr_7020_7036 = state_7015;
(statearr_7020_7036[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7037 = state_7015;
state_7015 = G__7037;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
stock$tool$content_$_state_machine__2793__auto__ = function(state_7015){
switch(arguments.length){
case 0:
return stock$tool$content_$_state_machine__2793__auto____0.call(this);
case 1:
return stock$tool$content_$_state_machine__2793__auto____1.call(this,state_7015);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$content_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$content_$_state_machine__2793__auto____0;
stock$tool$content_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$content_$_state_machine__2793__auto____1;
return stock$tool$content_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,ret))
})();
var state__2884__auto__ = (function (){var statearr_7021 = f__2883__auto__.call(null);
(statearr_7021[(6)] = c__2882__auto__);

return statearr_7021;
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
return (function (state_7029){
var state_val_7030 = (state_7029[(1)]);
if((state_val_7030 === (1))){
var inst_7022 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7023 = [err];
var inst_7024 = (new cljs.core.PersistentVector(null,1,(5),inst_7022,inst_7023,null));
var state_7029__$1 = state_7029;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7029__$1,(2),ret,inst_7024);
} else {
if((state_val_7030 === (2))){
var inst_7026 = (state_7029[(2)]);
var inst_7027 = cljs.core.async.close_BANG_.call(null,ret);
var state_7029__$1 = (function (){var statearr_7031 = state_7029;
(statearr_7031[(7)] = inst_7026);

return statearr_7031;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7029__$1,inst_7027);
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
var statearr_7032 = [null,null,null,null,null,null,null,null];
(statearr_7032[(0)] = stock$tool$content_$_state_machine__2793__auto__);

(statearr_7032[(1)] = (1));

return statearr_7032;
});
var stock$tool$content_$_state_machine__2793__auto____1 = (function (state_7029){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7033){if((e7033 instanceof Object)){
var ex__2796__auto__ = e7033;
var statearr_7034_7038 = state_7029;
(statearr_7034_7038[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7039 = state_7029;
state_7029 = G__7039;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
stock$tool$content_$_state_machine__2793__auto__ = function(state_7029){
switch(arguments.length){
case 0:
return stock$tool$content_$_state_machine__2793__auto____0.call(this);
case 1:
return stock$tool$content_$_state_machine__2793__auto____1.call(this,state_7029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$content_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$content_$_state_machine__2793__auto____0;
stock$tool$content_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$content_$_state_machine__2793__auto____1;
return stock$tool$content_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,ret))
})();
var state__2884__auto__ = (function (){var statearr_7035 = f__2883__auto__.call(null);
(statearr_7035[(6)] = c__2882__auto__);

return statearr_7035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,ret))
);

return c__2882__auto__;
});})(ret))
};
return obj7005;
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
}catch (e7040){if((e7040 instanceof Object)){
var e = e7040;
return null;
} else {
throw e7040;

}
}});
stock.tool.todayPrice = (function stock$tool$todayPrice(id){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_7063){
var state_val_7064 = (state_7063[(1)]);
if((state_val_7064 === (1))){
var inst_7044 = stock.tool.goog_finance_info_url.call(null,id);
var inst_7045 = stock.tool.content.call(null,inst_7044);
var state_7063__$1 = state_7063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7063__$1,(2),inst_7045);
} else {
if((state_val_7064 === (2))){
var inst_7048 = (state_7063[(7)]);
var inst_7047 = (state_7063[(2)]);
var inst_7048__$1 = cljs.core.nth.call(null,inst_7047,(0),null);
var inst_7049 = cljs.core.nth.call(null,inst_7047,(1),null);
var inst_7050 = inst_7049.replace(/\/\//,"");
var state_7063__$1 = (function (){var statearr_7065 = state_7063;
(statearr_7065[(8)] = inst_7050);

(statearr_7065[(7)] = inst_7048__$1);

return statearr_7065;
})();
if(cljs.core.truth_(inst_7048__$1)){
var statearr_7066_7074 = state_7063__$1;
(statearr_7066_7074[(1)] = (3));

} else {
var statearr_7067_7075 = state_7063__$1;
(statearr_7067_7075[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7064 === (3))){
var inst_7048 = (state_7063[(7)]);
var inst_7052 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7053 = [inst_7048];
var inst_7054 = (new cljs.core.PersistentVector(null,1,(5),inst_7052,inst_7053,null));
var state_7063__$1 = state_7063;
var statearr_7068_7076 = state_7063__$1;
(statearr_7068_7076[(2)] = inst_7054);

(statearr_7068_7076[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7064 === (4))){
var inst_7050 = (state_7063[(8)]);
var inst_7056 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7057 = stock.tool.parse_info.call(null,inst_7050);
var inst_7058 = [null,inst_7057];
var inst_7059 = (new cljs.core.PersistentVector(null,2,(5),inst_7056,inst_7058,null));
var state_7063__$1 = state_7063;
var statearr_7069_7077 = state_7063__$1;
(statearr_7069_7077[(2)] = inst_7059);

(statearr_7069_7077[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7064 === (5))){
var inst_7061 = (state_7063[(2)]);
var state_7063__$1 = state_7063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7063__$1,inst_7061);
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
var statearr_7070 = [null,null,null,null,null,null,null,null,null];
(statearr_7070[(0)] = stock$tool$todayPrice_$_state_machine__2793__auto__);

(statearr_7070[(1)] = (1));

return statearr_7070;
});
var stock$tool$todayPrice_$_state_machine__2793__auto____1 = (function (state_7063){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7071){if((e7071 instanceof Object)){
var ex__2796__auto__ = e7071;
var statearr_7072_7078 = state_7063;
(statearr_7072_7078[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7079 = state_7063;
state_7063 = G__7079;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
stock$tool$todayPrice_$_state_machine__2793__auto__ = function(state_7063){
switch(arguments.length){
case 0:
return stock$tool$todayPrice_$_state_machine__2793__auto____0.call(this);
case 1:
return stock$tool$todayPrice_$_state_machine__2793__auto____1.call(this,state_7063);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$todayPrice_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$todayPrice_$_state_machine__2793__auto____0;
stock$tool$todayPrice_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$todayPrice_$_state_machine__2793__auto____1;
return stock$tool$todayPrice_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_7073 = f__2883__auto__.call(null);
(statearr_7073[(6)] = c__2882__auto__);

return statearr_7073;
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
var vec__7080 = cljs.core.first.call(null,li);
var maybe_today = cljs.core.nth.call(null,vec__7080,(0),null);
var _ = cljs.core.nth.call(null,vec__7080,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__7080,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__7080,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__7080,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__7080,(5),null);
var vec__7083 = todayLine;
var today_date = cljs.core.nth.call(null,vec__7083,(0),null);
var ___$5 = cljs.core.nth.call(null,vec__7083,(1),null);
var ___$6 = cljs.core.nth.call(null,vec__7083,(2),null);
var ___$7 = cljs.core.nth.call(null,vec__7083,(3),null);
var ___$8 = cljs.core.nth.call(null,vec__7083,(4),null);
var ___$9 = cljs.core.nth.call(null,vec__7083,(5),null);
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
return (function stock$tool$parse_getprices_$_iter__7086(s__7087){
return (new cljs.core.LazySeq(null,((function (infos){
return (function (){
var s__7087__$1 = s__7087;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__7087__$1);
if(temp__5457__auto__){
var s__7087__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7087__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__7087__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__7089 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__7088 = (0);
while(true){
if((i__7088 < size__4291__auto__)){
var vec__7090 = cljs.core._nth.call(null,c__4290__auto__,i__7088);
var _ = cljs.core.nth.call(null,vec__7090,(0),null);
var date = cljs.core.nth.call(null,vec__7090,(1),null);
var close = cljs.core.nth.call(null,vec__7090,(2),null);
var high = cljs.core.nth.call(null,vec__7090,(3),null);
var low = cljs.core.nth.call(null,vec__7090,(4),null);
var open = cljs.core.nth.call(null,vec__7090,(5),null);
var volume = cljs.core.nth.call(null,vec__7090,(6),null);
cljs.core.chunk_append.call(null,b__7089,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null));

var G__7096 = (i__7088 + (1));
i__7088 = G__7096;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7089),stock$tool$parse_getprices_$_iter__7086.call(null,cljs.core.chunk_rest.call(null,s__7087__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7089),null);
}
} else {
var vec__7093 = cljs.core.first.call(null,s__7087__$2);
var _ = cljs.core.nth.call(null,vec__7093,(0),null);
var date = cljs.core.nth.call(null,vec__7093,(1),null);
var close = cljs.core.nth.call(null,vec__7093,(2),null);
var high = cljs.core.nth.call(null,vec__7093,(3),null);
var low = cljs.core.nth.call(null,vec__7093,(4),null);
var open = cljs.core.nth.call(null,vec__7093,(5),null);
var volume = cljs.core.nth.call(null,vec__7093,(6),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume)], null),stock$tool$parse_getprices_$_iter__7086.call(null,cljs.core.rest.call(null,s__7087__$2)));
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
var pass1 = cljs.core.map.call(null,(function (p__7097){
var vec__7098 = p__7097;
var d = cljs.core.nth.call(null,vec__7098,(0),null);
var o = cljs.core.nth.call(null,vec__7098,(1),null);
var h = cljs.core.nth.call(null,vec__7098,(2),null);
var l = cljs.core.nth.call(null,vec__7098,(3),null);
var c = cljs.core.nth.call(null,vec__7098,(4),null);
var v = cljs.core.nth.call(null,vec__7098,(5),null);
if(cljs.core._EQ_.call(null,"a",cljs.core.first.call(null,d))){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.subs.call(null,d,(1))),o,h,l,c,v], null);
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,o,h,l,c,v], null);
}
}),data);
var pass2 = cljs.core.cons.call(null,cljs.core.first.call(null,pass1),cljs.core.map.call(null,((function (pass1){
return (function (p__7101,p__7102){
var vec__7103 = p__7101;
var d1 = cljs.core.nth.call(null,vec__7103,(0),null);
var _ = cljs.core.nth.call(null,vec__7103,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__7103,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__7103,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__7103,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__7103,(5),null);
var prev = vec__7103;
var vec__7106 = p__7102;
var d2 = cljs.core.nth.call(null,vec__7106,(0),null);
var o = cljs.core.nth.call(null,vec__7106,(1),null);
var h = cljs.core.nth.call(null,vec__7106,(2),null);
var l = cljs.core.nth.call(null,vec__7106,(3),null);
var c = cljs.core.nth.call(null,vec__7106,(4),null);
var v = cljs.core.nth.call(null,vec__7106,(5),null);
var curr = vec__7106;
if(((typeof d1 === 'string') && (typeof d2 === 'string'))){
var offset = (parseInt(d2) - parseInt(d1));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset)].join(''),o,h,l,c,v], null);
} else {
return curr;
}
});})(pass1))
,pass1,cljs.core.rest.call(null,pass1)));
var pass3 = cljs.core.reductions.call(null,((function (pass1,pass2){
return (function (p__7109,p__7110){
var vec__7111 = p__7109;
var d1 = cljs.core.nth.call(null,vec__7111,(0),null);
var _ = cljs.core.nth.call(null,vec__7111,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__7111,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__7111,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__7111,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__7111,(5),null);
var prev = vec__7111;
var vec__7114 = p__7110;
var d2 = cljs.core.nth.call(null,vec__7114,(0),null);
var o = cljs.core.nth.call(null,vec__7114,(1),null);
var h = cljs.core.nth.call(null,vec__7114,(2),null);
var l = cljs.core.nth.call(null,vec__7114,(3),null);
var c = cljs.core.nth.call(null,vec__7114,(4),null);
var v = cljs.core.nth.call(null,vec__7114,(5),null);
var curr = vec__7114;
if(((typeof d1 === 'number') && (typeof d2 === 'string'))){
var n = parseInt(d2);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(d1 + (n * interval)),o,h,l,c,v], null);
} else {
return curr;
}
});})(pass1,pass2))
,cljs.core.first.call(null,pass2),cljs.core.rest.call(null,pass2));
var pass4 = cljs.core.filter.call(null,((function (pass1,pass2,pass3){
return (function (p__7117){
var vec__7118 = p__7117;
var d = cljs.core.nth.call(null,vec__7118,(0),null);
var o = cljs.core.nth.call(null,vec__7118,(1),null);
var h = cljs.core.nth.call(null,vec__7118,(2),null);
var l = cljs.core.nth.call(null,vec__7118,(3),null);
var c = cljs.core.nth.call(null,vec__7118,(4),null);
var v = cljs.core.nth.call(null,vec__7118,(5),null);
return true;
});})(pass1,pass2,pass3))
,pass3);
var pass5 = cljs.core.map.call(null,((function (pass1,pass2,pass3,pass4){
return (function (p__7121){
var vec__7122 = p__7121;
var d = cljs.core.nth.call(null,vec__7122,(0),null);
var o = cljs.core.nth.call(null,vec__7122,(1),null);
var h = cljs.core.nth.call(null,vec__7122,(2),null);
var l = cljs.core.nth.call(null,vec__7122,(3),null);
var c = cljs.core.nth.call(null,vec__7122,(4),null);
var v = cljs.core.nth.call(null,vec__7122,(5),null);
var date = (new Date((d * (1000))));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.toString(),o,h,l,c,v], null);
});})(pass1,pass2,pass3,pass4))
,pass4);
return pass5;
});
stock.tool.get_goog_stock_prices = (function stock$tool$get_goog_stock_prices(id,range){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__){
return (function (state_7154){
var state_val_7155 = (state_7154[(1)]);
if((state_val_7155 === (1))){
var inst_7131 = stock.tool.goog_finance_getprices_url.call(null,id,range);
var inst_7132 = stock.tool.content.call(null,inst_7131);
var state_7154__$1 = state_7154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7154__$1,(2),inst_7132);
} else {
if((state_val_7155 === (2))){
var inst_7134 = (state_7154[(2)]);
var inst_7135 = cljs.core.nth.call(null,inst_7134,(0),null);
var inst_7136 = cljs.core.nth.call(null,inst_7134,(1),null);
var inst_7137 = stock.tool.todayPrice.call(null,id);
var state_7154__$1 = (function (){var statearr_7156 = state_7154;
(statearr_7156[(7)] = inst_7135);

(statearr_7156[(8)] = inst_7136);

return statearr_7156;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7154__$1,(3),inst_7137);
} else {
if((state_val_7155 === (3))){
var inst_7135 = (state_7154[(7)]);
var inst_7136 = (state_7154[(8)]);
var inst_7139 = (state_7154[(2)]);
var inst_7140 = cljs.core.nth.call(null,inst_7139,(0),null);
var inst_7141 = cljs.core.nth.call(null,inst_7139,(1),null);
var inst_7142 = stock.tool.parse_getprices.call(null,inst_7136);
var inst_7143 = stock.tool.format_getprices.call(null,(86400),inst_7142);
var inst_7144 = cljs.core.reverse.call(null,inst_7143);
var inst_7145 = stock.tool.combineToday.call(null,inst_7141,inst_7144);
var inst_7146 = cljs.core.PersistentVector.EMPTY_NODE;
var state_7154__$1 = (function (){var statearr_7157 = state_7154;
(statearr_7157[(9)] = inst_7140);

(statearr_7157[(10)] = inst_7145);

(statearr_7157[(11)] = inst_7146);

return statearr_7157;
})();
if(cljs.core.truth_(inst_7135)){
var statearr_7158_7166 = state_7154__$1;
(statearr_7158_7166[(1)] = (4));

} else {
var statearr_7159_7167 = state_7154__$1;
(statearr_7159_7167[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7155 === (4))){
var inst_7135 = (state_7154[(7)]);
var state_7154__$1 = state_7154;
var statearr_7160_7168 = state_7154__$1;
(statearr_7160_7168[(2)] = inst_7135);

(statearr_7160_7168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7155 === (5))){
var inst_7140 = (state_7154[(9)]);
var state_7154__$1 = state_7154;
var statearr_7161_7169 = state_7154__$1;
(statearr_7161_7169[(2)] = inst_7140);

(statearr_7161_7169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7155 === (6))){
var inst_7145 = (state_7154[(10)]);
var inst_7146 = (state_7154[(11)]);
var inst_7150 = (state_7154[(2)]);
var inst_7151 = [inst_7150,inst_7145];
var inst_7152 = (new cljs.core.PersistentVector(null,2,(5),inst_7146,inst_7151,null));
var state_7154__$1 = state_7154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7154__$1,inst_7152);
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
var stock$tool$get_goog_stock_prices_$_state_machine__2793__auto__ = null;
var stock$tool$get_goog_stock_prices_$_state_machine__2793__auto____0 = (function (){
var statearr_7162 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7162[(0)] = stock$tool$get_goog_stock_prices_$_state_machine__2793__auto__);

(statearr_7162[(1)] = (1));

return statearr_7162;
});
var stock$tool$get_goog_stock_prices_$_state_machine__2793__auto____1 = (function (state_7154){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7163){if((e7163 instanceof Object)){
var ex__2796__auto__ = e7163;
var statearr_7164_7170 = state_7154;
(statearr_7164_7170[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7171 = state_7154;
state_7154 = G__7171;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
stock$tool$get_goog_stock_prices_$_state_machine__2793__auto__ = function(state_7154){
switch(arguments.length){
case 0:
return stock$tool$get_goog_stock_prices_$_state_machine__2793__auto____0.call(this);
case 1:
return stock$tool$get_goog_stock_prices_$_state_machine__2793__auto____1.call(this,state_7154);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$get_goog_stock_prices_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$get_goog_stock_prices_$_state_machine__2793__auto____0;
stock$tool$get_goog_stock_prices_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$get_goog_stock_prices_$_state_machine__2793__auto____1;
return stock$tool$get_goog_stock_prices_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_7165 = f__2883__auto__.call(null);
(statearr_7165[(6)] = c__2882__auto__);

return statearr_7165;
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
return (function stock$tool$parse_historical_$_iter__7172(s__7173){
return (new cljs.core.LazySeq(null,((function (infos){
return (function (){
var s__7173__$1 = s__7173;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__7173__$1);
if(temp__5457__auto__){
var s__7173__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7173__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__7173__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__7175 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__7174 = (0);
while(true){
if((i__7174 < size__4291__auto__)){
var vec__7176 = cljs.core._nth.call(null,c__4290__auto__,i__7174);
var _ = cljs.core.nth.call(null,vec__7176,(0),null);
var date = cljs.core.nth.call(null,vec__7176,(1),null);
var open = cljs.core.nth.call(null,vec__7176,(2),null);
var high = cljs.core.nth.call(null,vec__7176,(3),null);
var low = cljs.core.nth.call(null,vec__7176,(4),null);
var close = cljs.core.nth.call(null,vec__7176,(5),null);
var volume = cljs.core.nth.call(null,vec__7176,(6),null);
cljs.core.chunk_append.call(null,b__7175,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume.replace(/,/,""))], null));

var G__7182 = (i__7174 + (1));
i__7174 = G__7182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7175),stock$tool$parse_historical_$_iter__7172.call(null,cljs.core.chunk_rest.call(null,s__7173__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7175),null);
}
} else {
var vec__7179 = cljs.core.first.call(null,s__7173__$2);
var _ = cljs.core.nth.call(null,vec__7179,(0),null);
var date = cljs.core.nth.call(null,vec__7179,(1),null);
var open = cljs.core.nth.call(null,vec__7179,(2),null);
var high = cljs.core.nth.call(null,vec__7179,(3),null);
var low = cljs.core.nth.call(null,vec__7179,(4),null);
var close = cljs.core.nth.call(null,vec__7179,(5),null);
var volume = cljs.core.nth.call(null,vec__7179,(6),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,parseFloat(open),parseFloat(high),parseFloat(low),parseFloat(close),parseInt(volume.replace(/,/,""))], null),stock$tool$parse_historical_$_iter__7172.call(null,cljs.core.rest.call(null,s__7173__$2)));
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
return (function (state_7216){
var state_val_7217 = (state_7216[(1)]);
if((state_val_7217 === (1))){
var inst_7186 = stock.tool.goog_finance_historical_url.call(null,id,startdate,start,num);
var inst_7187 = stock.tool.content.call(null,inst_7186);
var state_7216__$1 = state_7216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7216__$1,(2),inst_7187);
} else {
if((state_val_7217 === (2))){
var inst_7190 = (state_7216[(7)]);
var inst_7189 = (state_7216[(2)]);
var inst_7190__$1 = cljs.core.nth.call(null,inst_7189,(0),null);
var inst_7191 = cljs.core.nth.call(null,inst_7189,(1),null);
var state_7216__$1 = (function (){var statearr_7218 = state_7216;
(statearr_7218[(8)] = inst_7191);

(statearr_7218[(7)] = inst_7190__$1);

return statearr_7218;
})();
if(cljs.core.truth_(inst_7190__$1)){
var statearr_7219_7232 = state_7216__$1;
(statearr_7219_7232[(1)] = (3));

} else {
var statearr_7220_7233 = state_7216__$1;
(statearr_7220_7233[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7217 === (3))){
var inst_7190 = (state_7216[(7)]);
var inst_7193 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7194 = [inst_7190];
var inst_7195 = (new cljs.core.PersistentVector(null,1,(5),inst_7193,inst_7194,null));
var state_7216__$1 = state_7216;
var statearr_7221_7234 = state_7216__$1;
(statearr_7221_7234[(2)] = inst_7195);

(statearr_7221_7234[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7217 === (4))){
var inst_7191 = (state_7216[(8)]);
var inst_7197 = (state_7216[(9)]);
var inst_7197__$1 = stock.tool.parse_historical.call(null,inst_7191);
var inst_7198 = cljs.core.count.call(null,inst_7197__$1);
var inst_7199 = cljs.core._EQ_.call(null,num,inst_7198);
var state_7216__$1 = (function (){var statearr_7222 = state_7216;
(statearr_7222[(9)] = inst_7197__$1);

return statearr_7222;
})();
if(inst_7199){
var statearr_7223_7235 = state_7216__$1;
(statearr_7223_7235[(1)] = (6));

} else {
var statearr_7224_7236 = state_7216__$1;
(statearr_7224_7236[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7217 === (5))){
var inst_7214 = (state_7216[(2)]);
var state_7216__$1 = state_7216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7216__$1,inst_7214);
} else {
if((state_val_7217 === (6))){
var inst_7197 = (state_7216[(9)]);
var inst_7201 = cljs.core.concat.call(null,all,inst_7197);
var inst_7202 = (start + num);
var inst_7203 = stock.tool.goog_historical_info.call(null,inst_7201,id,startdate,inst_7202,num);
var state_7216__$1 = state_7216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7216__$1,(9),inst_7203);
} else {
if((state_val_7217 === (7))){
var inst_7197 = (state_7216[(9)]);
var inst_7207 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7208 = cljs.core.concat.call(null,all,inst_7197);
var inst_7209 = [null,inst_7208];
var inst_7210 = (new cljs.core.PersistentVector(null,2,(5),inst_7207,inst_7209,null));
var state_7216__$1 = state_7216;
var statearr_7225_7237 = state_7216__$1;
(statearr_7225_7237[(2)] = inst_7210);

(statearr_7225_7237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7217 === (8))){
var inst_7212 = (state_7216[(2)]);
var state_7216__$1 = state_7216;
var statearr_7226_7238 = state_7216__$1;
(statearr_7226_7238[(2)] = inst_7212);

(statearr_7226_7238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7217 === (9))){
var inst_7205 = (state_7216[(2)]);
var state_7216__$1 = state_7216;
var statearr_7227_7239 = state_7216__$1;
(statearr_7227_7239[(2)] = inst_7205);

(statearr_7227_7239[(1)] = (8));


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
var statearr_7228 = [null,null,null,null,null,null,null,null,null,null];
(statearr_7228[(0)] = stock$tool$goog_historical_info_$_state_machine__2793__auto__);

(statearr_7228[(1)] = (1));

return statearr_7228;
});
var stock$tool$goog_historical_info_$_state_machine__2793__auto____1 = (function (state_7216){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_7216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e7229){if((e7229 instanceof Object)){
var ex__2796__auto__ = e7229;
var statearr_7230_7240 = state_7216;
(statearr_7230_7240[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7241 = state_7216;
state_7216 = G__7241;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
stock$tool$goog_historical_info_$_state_machine__2793__auto__ = function(state_7216){
switch(arguments.length){
case 0:
return stock$tool$goog_historical_info_$_state_machine__2793__auto____0.call(this);
case 1:
return stock$tool$goog_historical_info_$_state_machine__2793__auto____1.call(this,state_7216);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
stock$tool$goog_historical_info_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = stock$tool$goog_historical_info_$_state_machine__2793__auto____0;
stock$tool$goog_historical_info_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = stock$tool$goog_historical_info_$_state_machine__2793__auto____1;
return stock$tool$goog_historical_info_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__))
})();
var state__2884__auto__ = (function (){var statearr_7231 = f__2883__auto__.call(null);
(statearr_7231[(6)] = c__2882__auto__);

return statearr_7231;
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
var vec__7242 = kline;
var date = cljs.core.nth.call(null,vec__7242,(0),null);
var _ = cljs.core.nth.call(null,vec__7242,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__7242,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__7242,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__7242,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__7242,(5),null);
return date;
}
});
stock.tool.high = (function stock$tool$high(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.high,kline);
} else {
var vec__7245 = kline;
var _ = cljs.core.nth.call(null,vec__7245,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__7245,(1),null);
var high = cljs.core.nth.call(null,vec__7245,(2),null);
var ___$2 = cljs.core.nth.call(null,vec__7245,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__7245,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__7245,(5),null);
return high;
}
});
stock.tool.open = (function stock$tool$open(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.open,kline);
} else {
var vec__7248 = kline;
var _ = cljs.core.nth.call(null,vec__7248,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__7248,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__7248,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__7248,(3),null);
var open = cljs.core.nth.call(null,vec__7248,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__7248,(5),null);
return open;
}
});
stock.tool.close = (function stock$tool$close(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.close,kline);
} else {
var vec__7251 = kline;
var _ = cljs.core.nth.call(null,vec__7251,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__7251,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__7251,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__7251,(3),null);
var close = cljs.core.nth.call(null,vec__7251,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__7251,(5),null);
return close;
}
});
stock.tool.low = (function stock$tool$low(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.low,kline);
} else {
var vec__7254 = kline;
var _ = cljs.core.nth.call(null,vec__7254,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__7254,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__7254,(2),null);
var low = cljs.core.nth.call(null,vec__7254,(3),null);
var ___$3 = cljs.core.nth.call(null,vec__7254,(4),null);
var ___$4 = cljs.core.nth.call(null,vec__7254,(5),null);
return low;
}
});
stock.tool.volume = (function stock$tool$volume(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.volume,kline);
} else {
var vec__7257 = kline;
var _ = cljs.core.nth.call(null,vec__7257,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__7257,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__7257,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__7257,(3),null);
var ___$4 = cljs.core.nth.call(null,vec__7257,(4),null);
var volume = cljs.core.nth.call(null,vec__7257,(5),null);
return volume;
}
});
stock.tool.mid = (function stock$tool$mid(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.mid,kline);
} else {
var vec__7260 = kline;
var _ = cljs.core.nth.call(null,vec__7260,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__7260,(1),null);
var high = cljs.core.nth.call(null,vec__7260,(2),null);
var low = cljs.core.nth.call(null,vec__7260,(3),null);
var ___$2 = cljs.core.nth.call(null,vec__7260,(4),null);
var ___$3 = cljs.core.nth.call(null,vec__7260,(5),null);
return ((high + low) / (2));
}
});
stock.tool.typical = (function stock$tool$typical(kline){
if(cljs.core.seq_QMARK_.call(null,kline)){
return cljs.core.map.call(null,stock.tool.typical,kline);
} else {
var vec__7263 = kline;
var _ = cljs.core.nth.call(null,vec__7263,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__7263,(1),null);
var high = cljs.core.nth.call(null,vec__7263,(2),null);
var low = cljs.core.nth.call(null,vec__7263,(3),null);
var close = cljs.core.nth.call(null,vec__7263,(4),null);
var ___$2 = cljs.core.nth.call(null,vec__7263,(5),null);
return (((high + low) + close) / (3));
}
});

//# sourceMappingURL=tool.js.map
