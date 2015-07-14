// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock4');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
test.stock4.stock_url = (function stock_url(id,startdate,start,num){return ("https://www.google.com/finance/historical?q=TPE:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"&startdate="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(startdate)+"&start="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start)+"&num="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num));
});
test.stock4.content = (function content(url){var ret = cljs.core.async.chan.call(null);$.ajax((function (){var obj34429 = {"url":"/proxy","dataType":"text","data":(function (){var obj34431 = {"url":url};return obj34431;
})(),"success":((function (ret){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_34438){var state_val_34439 = (state_34438[(1)]);if((state_val_34439 === (2)))
{var inst_34435 = (state_34438[(2)]);var inst_34436 = cljs.core.async.close_BANG_.call(null,ret);var state_34438__$1 = (function (){var statearr_34440 = state_34438;(statearr_34440[(7)] = inst_34435);
return statearr_34440;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34438__$1,inst_34436);
} else
{if((state_val_34439 === (1)))
{var inst_34432 = [null,data];var inst_34433 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34432,null));var state_34438__$1 = state_34438;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34438__$1,(2),ret,inst_34433);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_34444 = [null,null,null,null,null,null,null,null];(statearr_34444[(0)] = state_machine__6188__auto__);
(statearr_34444[(1)] = (1));
return statearr_34444;
});
var state_machine__6188__auto____1 = (function (state_34438){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_34438);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e34445){if((e34445 instanceof Object))
{var ex__6191__auto__ = e34445;var statearr_34446_34464 = state_34438;(statearr_34446_34464[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34438);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34445;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34465 = state_34438;
state_34438 = G__34465;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_34438){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_34438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_34447 = f__6203__auto__.call(null);(statearr_34447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_34447;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
,"error":((function (ret){
return (function (xhr,_,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret){
return (function (state_34454){var state_val_34455 = (state_34454[(1)]);if((state_val_34455 === (2)))
{var inst_34451 = (state_34454[(2)]);var inst_34452 = cljs.core.async.close_BANG_.call(null,ret);var state_34454__$1 = (function (){var statearr_34456 = state_34454;(statearr_34456[(7)] = inst_34451);
return statearr_34456;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34454__$1,inst_34452);
} else
{if((state_val_34455 === (1)))
{var inst_34448 = [err];var inst_34449 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34448,null));var state_34454__$1 = state_34454;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34454__$1,(2),ret,inst_34449);
} else
{return null;
}
}
});})(c__6202__auto__,ret))
;return ((function (switch__6187__auto__,c__6202__auto__,ret){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_34460 = [null,null,null,null,null,null,null,null];(statearr_34460[(0)] = state_machine__6188__auto__);
(statearr_34460[(1)] = (1));
return statearr_34460;
});
var state_machine__6188__auto____1 = (function (state_34454){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_34454);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e34461){if((e34461 instanceof Object))
{var ex__6191__auto__ = e34461;var statearr_34462_34466 = state_34454;(statearr_34462_34466[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34454);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34461;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34467 = state_34454;
state_34454 = G__34467;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_34454){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_34454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret))
})();var state__6204__auto__ = (function (){var statearr_34463 = f__6203__auto__.call(null);(statearr_34463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_34463;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret))
);
return c__6202__auto__;
});})(ret))
};return obj34429;
})());
return ret;
});
test.stock4.parse_info = (function parse_info(content){var infos = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,("<tr><td class=\"lm\">(\\D{3} \\d+, \\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt\">(\\d+\\.\\d+)<td class=\"rgt rm\">([\\d,]+)")),clojure.string.replace.call(null,content,/\n/,""));var iter__4276__auto__ = ((function (infos){
return (function iter__34476(s__34477){return (new cljs.core.LazySeq(null,((function (infos){
return (function (){var s__34477__$1 = s__34477;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34477__$1);if(temp__4126__auto__)
{var s__34477__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34477__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__34477__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__34479 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__34478 = (0);while(true){
if((i__34478 < size__4275__auto__))
{var vec__34482 = cljs.core._nth.call(null,c__4274__auto__,i__34478);var _ = cljs.core.nth.call(null,vec__34482,(0),null);var date = cljs.core.nth.call(null,vec__34482,(1),null);var open = cljs.core.nth.call(null,vec__34482,(2),null);var high = cljs.core.nth.call(null,vec__34482,(3),null);var low = cljs.core.nth.call(null,vec__34482,(4),null);var close = cljs.core.nth.call(null,vec__34482,(5),null);var volume = cljs.core.nth.call(null,vec__34482,(6),null);cljs.core.chunk_append.call(null,b__34479,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null));
{
var G__34484 = (i__34478 + (1));
i__34478 = G__34484;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34479),iter__34476.call(null,cljs.core.chunk_rest.call(null,s__34477__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34479),null);
}
} else
{var vec__34483 = cljs.core.first.call(null,s__34477__$2);var _ = cljs.core.nth.call(null,vec__34483,(0),null);var date = cljs.core.nth.call(null,vec__34483,(1),null);var open = cljs.core.nth.call(null,vec__34483,(2),null);var high = cljs.core.nth.call(null,vec__34483,(3),null);var low = cljs.core.nth.call(null,vec__34483,(4),null);var close = cljs.core.nth.call(null,vec__34483,(5),null);var volume = cljs.core.nth.call(null,vec__34483,(6),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [date,open,high,low,close,volume], null),iter__34476.call(null,cljs.core.rest.call(null,s__34477__$2)));
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
return (function (state_34562){var state_val_34563 = (state_34562[(1)]);if((state_val_34563 === (9)))
{var inst_34552 = (state_34562[(2)]);var state_34562__$1 = state_34562;var statearr_34564_34581 = state_34562__$1;(statearr_34564_34581[(2)] = inst_34552);
(statearr_34564_34581[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34563 === (8)))
{var inst_34558 = (state_34562[(2)]);var state_34562__$1 = state_34562;var statearr_34565_34582 = state_34562__$1;(statearr_34565_34582[(2)] = inst_34558);
(statearr_34565_34582[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34563 === (7)))
{var inst_34544 = (state_34562[(7)]);var inst_34554 = cljs.core.concat.call(null,all,inst_34544);var inst_34555 = [null,inst_34554];var inst_34556 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34555,null));var state_34562__$1 = state_34562;var statearr_34566_34583 = state_34562__$1;(statearr_34566_34583[(2)] = inst_34556);
(statearr_34566_34583[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34563 === (6)))
{var inst_34544 = (state_34562[(7)]);var inst_34548 = cljs.core.concat.call(null,all,inst_34544);var inst_34549 = (start + num);var inst_34550 = stock_info.call(null,inst_34548,id,startdate,inst_34549,num);var state_34562__$1 = state_34562;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34562__$1,(9),inst_34550);
} else
{if((state_val_34563 === (5)))
{var inst_34560 = (state_34562[(2)]);var state_34562__$1 = state_34562;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34562__$1,inst_34560);
} else
{if((state_val_34563 === (4)))
{var inst_34544 = (state_34562[(7)]);var inst_34539 = (state_34562[(8)]);var inst_34544__$1 = test.stock4.parse_info.call(null,inst_34539);var inst_34545 = cljs.core.count.call(null,inst_34544__$1);var inst_34546 = cljs.core._EQ_.call(null,num,inst_34545);var state_34562__$1 = (function (){var statearr_34567 = state_34562;(statearr_34567[(7)] = inst_34544__$1);
return statearr_34567;
})();if(inst_34546)
{var statearr_34568_34584 = state_34562__$1;(statearr_34568_34584[(1)] = (6));
} else
{var statearr_34569_34585 = state_34562__$1;(statearr_34569_34585[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34563 === (3)))
{var inst_34538 = (state_34562[(9)]);var inst_34541 = [inst_34538];var inst_34542 = (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_34541,null));var state_34562__$1 = state_34562;var statearr_34570_34586 = state_34562__$1;(statearr_34570_34586[(2)] = inst_34542);
(statearr_34570_34586[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34563 === (2)))
{var inst_34538 = (state_34562[(9)]);var inst_34537 = (state_34562[(2)]);var inst_34538__$1 = cljs.core.nth.call(null,inst_34537,(0),null);var inst_34539 = cljs.core.nth.call(null,inst_34537,(1),null);var state_34562__$1 = (function (){var statearr_34571 = state_34562;(statearr_34571[(9)] = inst_34538__$1);
(statearr_34571[(8)] = inst_34539);
return statearr_34571;
})();if(cljs.core.truth_(inst_34538__$1))
{var statearr_34572_34587 = state_34562__$1;(statearr_34572_34587[(1)] = (3));
} else
{var statearr_34573_34588 = state_34562__$1;(statearr_34573_34588[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34563 === (1)))
{var inst_34534 = test.stock4.stock_url.call(null,id,startdate,start,num);var inst_34535 = test.stock4.content.call(null,inst_34534);var state_34562__$1 = state_34562;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34562__$1,(2),inst_34535);
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
var state_machine__6188__auto____0 = (function (){var statearr_34577 = [null,null,null,null,null,null,null,null,null,null];(statearr_34577[(0)] = state_machine__6188__auto__);
(statearr_34577[(1)] = (1));
return statearr_34577;
});
var state_machine__6188__auto____1 = (function (state_34562){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_34562);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e34578){if((e34578 instanceof Object))
{var ex__6191__auto__ = e34578;var statearr_34579_34589 = state_34562;(statearr_34579_34589[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34562);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34590 = state_34562;
state_34562 = G__34590;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_34562){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_34562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_34580 = f__6203__auto__.call(null);(statearr_34580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_34580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock4.main = (function main(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_34619){var state_val_34620 = (state_34619[(1)]);if((state_val_34620 === (2)))
{var inst_34613 = (state_34619[(2)]);var inst_34614 = cljs.core.nth.call(null,inst_34613,(0),null);var inst_34615 = cljs.core.nth.call(null,inst_34613,(1),null);var inst_34616 = cljs.core.pr_str.call(null,inst_34615);var inst_34617 = console.log(inst_34616);var state_34619__$1 = (function (){var statearr_34621 = state_34619;(statearr_34621[(7)] = inst_34614);
return statearr_34621;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34619__$1,inst_34617);
} else
{if((state_val_34620 === (1)))
{var inst_34611 = test.stock4.stock_info.call(null,null,(2330),"2014/1/1",(0),(200));var state_34619__$1 = state_34619;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34619__$1,(2),inst_34611);
} else
{return null;
}
}
});})(c__6202__auto__))
;return ((function (switch__6187__auto__,c__6202__auto__){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_34625 = [null,null,null,null,null,null,null,null];(statearr_34625[(0)] = state_machine__6188__auto__);
(statearr_34625[(1)] = (1));
return statearr_34625;
});
var state_machine__6188__auto____1 = (function (state_34619){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_34619);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e34626){if((e34626 instanceof Object))
{var ex__6191__auto__ = e34626;var statearr_34627_34629 = state_34619;(statearr_34627_34629[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34619);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e34626;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34630 = state_34619;
state_34619 = G__34630;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_34619){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_34619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_34628 = f__6203__auto__.call(null);(statearr_34628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_34628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
test.stock4.main.call(null);
