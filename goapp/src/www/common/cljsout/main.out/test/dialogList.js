// Compiled by ClojureScript 1.10.238 {}
goog.provide('test.dialogList');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.dialog');
test.dialogList.step = (function test$dialogList$step(p__11569){
var map__11570 = p__11569;
var map__11570__$1 = ((((!((map__11570 == null)))?(((((map__11570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11570):map__11570);
var ctx = map__11570__$1;
var dialogs = cljs.core.get.call(null,map__11570__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));
var curr_idx = cljs.core.get.call(null,map__11570__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));
var updated = cljs.core.map.call(null,((function (map__11570,map__11570__$1,ctx,dialogs,curr_idx){
return (function (idx,dialog){
if(cljs.core._EQ_.call(null,idx,curr_idx)){
return tool.dialog.step.call(null,dialog);
} else {
return dialog;
}
});})(map__11570,map__11570__$1,ctx,dialogs,curr_idx))
,cljs.core.range.call(null,cljs.core.count.call(null,dialogs)),dialogs);
var curr_dialog = cljs.core.nth.call(null,updated,curr_idx);
var last_line_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,dialogs),(curr_idx + (1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(curr_dialog))){
if(last_line_QMARK_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"end","end",-268185958));
} else {
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584)], null),cljs.core.inc);
}
} else {
return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated);
}
});
test.dialogList.showstr = (function test$dialogList$showstr(p__11572){
var map__11573 = p__11572;
var map__11573__$1 = ((((!((map__11573 == null)))?(((((map__11573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11573):map__11573);
var ctx = map__11573__$1;
var dialogs = cljs.core.get.call(null,map__11573__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));
var curr_idx = cljs.core.get.call(null,map__11573__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));
var curr_dialog = cljs.core.nth.call(null,dialogs,curr_idx);
return tool.dialog.showstr.call(null,curr_dialog);
});
test.dialogList.requestNext = (function test$dialogList$requestNext(p__11575){
var map__11576 = p__11575;
var map__11576__$1 = ((((!((map__11576 == null)))?(((((map__11576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11576):map__11576);
var ctx = map__11576__$1;
var dialogs = cljs.core.get.call(null,map__11576__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));
var curr_idx = cljs.core.get.call(null,map__11576__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));
var updated = cljs.core.map.call(null,((function (map__11576,map__11576__$1,ctx,dialogs,curr_idx){
return (function (idx,dialog){
if(cljs.core._EQ_.call(null,idx,curr_idx)){
return tool.dialog.requestNext.call(null,dialog);
} else {
return dialog;
}
});})(map__11576,map__11576__$1,ctx,dialogs,curr_idx))
,cljs.core.range.call(null,cljs.core.count.call(null,dialogs)),dialogs);
return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated);
});
test.dialogList.view = (function test$dialogList$view(elem,ctx){
var show_11579 = test.dialogList.showstr.call(null,ctx);
var G__11578_11580 = elem;
G__11578_11580.empty();

G__11578_11580.html(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br>",show_11579)));


return ctx;
});
test.dialogList.view = cljs.core.partial.call(null,test.dialogList.view,$("#container"));
test.dialogList.main = (function test$dialogList$main(){
var test_str = tool.dialog.formatMessage.call(null,"Hello, I'm Han\n\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u65872!\u6211\u662F\u4E2D\u65873!\u6211\u662F\u4E2D\u65874!\u6211\u662F\u4E2D\u65875!\u6211\u662F\u4E2D\u65876!",(7));
var onTick = cljs.core.async.chan.call(null);
var onClick = cljs.core.async.chan.call(null);
var c__3261__auto___11678 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___11678,test_str,onTick,onClick){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___11678,test_str,onTick,onClick){
return (function (state_11626){
var state_val_11627 = (state_11626[(1)]);
if((state_val_11627 === (7))){
var inst_11621 = (state_11626[(2)]);
var inst_11594 = inst_11621;
var state_11626__$1 = (function (){var statearr_11628 = state_11626;
(statearr_11628[(7)] = inst_11594);

return statearr_11628;
})();
var statearr_11629_11679 = state_11626__$1;
(statearr_11629_11679[(2)] = null);

(statearr_11629_11679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (1))){
var inst_11581 = [new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584),new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986)];
var inst_11582 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_11583 = [(4),test_str];
var inst_11584 = cljs.core.PersistentHashMap.fromArrays(inst_11582,inst_11583);
var inst_11585 = tool.dialog.dialog.call(null,inst_11584);
var inst_11586 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_11587 = [(4),test_str];
var inst_11588 = cljs.core.PersistentHashMap.fromArrays(inst_11586,inst_11587);
var inst_11589 = tool.dialog.dialog.call(null,inst_11588);
var inst_11590 = (new cljs.core.List(null,inst_11589,null,(1),null));
var inst_11591 = (new cljs.core.List(null,inst_11585,inst_11590,(2),null));
var inst_11592 = [(0),inst_11591];
var inst_11593 = cljs.core.PersistentHashMap.fromArrays(inst_11581,inst_11592);
var inst_11594 = inst_11593;
var state_11626__$1 = (function (){var statearr_11630 = state_11626;
(statearr_11630[(7)] = inst_11594);

return statearr_11630;
})();
var statearr_11631_11680 = state_11626__$1;
(statearr_11631_11680[(2)] = null);

(statearr_11631_11680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (4))){
var inst_11605 = (state_11626[(8)]);
var inst_11603 = (state_11626[(2)]);
var inst_11604 = cljs.core.nth.call(null,inst_11603,(0),null);
var inst_11605__$1 = cljs.core.nth.call(null,inst_11603,(1),null);
var inst_11609 = cljs.core._EQ_.call(null,onTick,inst_11605__$1);
var state_11626__$1 = (function (){var statearr_11632 = state_11626;
(statearr_11632[(9)] = inst_11604);

(statearr_11632[(8)] = inst_11605__$1);

return statearr_11632;
})();
if(inst_11609){
var statearr_11633_11681 = state_11626__$1;
(statearr_11633_11681[(1)] = (5));

} else {
var statearr_11634_11682 = state_11626__$1;
(statearr_11634_11682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (6))){
var inst_11605 = (state_11626[(8)]);
var inst_11614 = cljs.core._EQ_.call(null,onClick,inst_11605);
var state_11626__$1 = state_11626;
if(inst_11614){
var statearr_11635_11683 = state_11626__$1;
(statearr_11635_11683[(1)] = (8));

} else {
var statearr_11636_11684 = state_11626__$1;
(statearr_11636_11684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (3))){
var inst_11624 = (state_11626[(2)]);
var state_11626__$1 = state_11626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11626__$1,inst_11624);
} else {
if((state_val_11627 === (2))){
var inst_11599 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11600 = [onTick,onClick];
var inst_11601 = (new cljs.core.PersistentVector(null,2,(5),inst_11599,inst_11600,null));
var state_11626__$1 = state_11626;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11626__$1,(4),inst_11601);
} else {
if((state_val_11627 === (9))){
var inst_11594 = (state_11626[(7)]);
var state_11626__$1 = state_11626;
var statearr_11637_11685 = state_11626__$1;
(statearr_11637_11685[(2)] = inst_11594);

(statearr_11637_11685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (5))){
var inst_11594 = (state_11626[(7)]);
var inst_11611 = test.dialogList.step.call(null,inst_11594);
var inst_11612 = test.dialogList.view.call(null,inst_11611);
var state_11626__$1 = state_11626;
var statearr_11638_11686 = state_11626__$1;
(statearr_11638_11686[(2)] = inst_11612);

(statearr_11638_11686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (10))){
var inst_11619 = (state_11626[(2)]);
var state_11626__$1 = state_11626;
var statearr_11639_11687 = state_11626__$1;
(statearr_11639_11687[(2)] = inst_11619);

(statearr_11639_11687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11627 === (8))){
var inst_11594 = (state_11626[(7)]);
var inst_11616 = test.dialogList.requestNext.call(null,inst_11594);
var state_11626__$1 = state_11626;
var statearr_11640_11688 = state_11626__$1;
(statearr_11640_11688[(2)] = inst_11616);

(statearr_11640_11688[(1)] = (10));


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
}
});})(c__3261__auto___11678,test_str,onTick,onClick))
;
return ((function (switch__3171__auto__,c__3261__auto___11678,test_str,onTick,onClick){
return (function() {
var test$dialogList$main_$_state_machine__3172__auto__ = null;
var test$dialogList$main_$_state_machine__3172__auto____0 = (function (){
var statearr_11641 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11641[(0)] = test$dialogList$main_$_state_machine__3172__auto__);

(statearr_11641[(1)] = (1));

return statearr_11641;
});
var test$dialogList$main_$_state_machine__3172__auto____1 = (function (state_11626){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_11626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e11642){if((e11642 instanceof Object)){
var ex__3175__auto__ = e11642;
var statearr_11643_11689 = state_11626;
(statearr_11643_11689[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11690 = state_11626;
state_11626 = G__11690;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
test$dialogList$main_$_state_machine__3172__auto__ = function(state_11626){
switch(arguments.length){
case 0:
return test$dialogList$main_$_state_machine__3172__auto____0.call(this);
case 1:
return test$dialogList$main_$_state_machine__3172__auto____1.call(this,state_11626);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$dialogList$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = test$dialogList$main_$_state_machine__3172__auto____0;
test$dialogList$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = test$dialogList$main_$_state_machine__3172__auto____1;
return test$dialogList$main_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___11678,test_str,onTick,onClick))
})();
var state__3263__auto__ = (function (){var statearr_11644 = f__3262__auto__.call(null);
(statearr_11644[(6)] = c__3261__auto___11678);

return statearr_11644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___11678,test_str,onTick,onClick))
);


var c__3261__auto___11691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___11691,test_str,onTick,onClick){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___11691,test_str,onTick,onClick){
return (function (state_11656){
var state_val_11657 = (state_11656[(1)]);
if((state_val_11657 === (1))){
var inst_11645 = (100);
var state_11656__$1 = (function (){var statearr_11658 = state_11656;
(statearr_11658[(7)] = inst_11645);

return statearr_11658;
})();
var statearr_11659_11692 = state_11656__$1;
(statearr_11659_11692[(2)] = null);

(statearr_11659_11692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11657 === (2))){
var inst_11645 = (state_11656[(7)]);
var inst_11647 = cljs.core.async.timeout.call(null,inst_11645);
var state_11656__$1 = state_11656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11656__$1,(4),inst_11647);
} else {
if((state_val_11657 === (3))){
var inst_11654 = (state_11656[(2)]);
var state_11656__$1 = state_11656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11656__$1,inst_11654);
} else {
if((state_val_11657 === (4))){
var inst_11645 = (state_11656[(7)]);
var inst_11649 = (state_11656[(2)]);
var state_11656__$1 = (function (){var statearr_11661 = state_11656;
(statearr_11661[(8)] = inst_11649);

return statearr_11661;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11656__$1,(5),onTick,inst_11645);
} else {
if((state_val_11657 === (5))){
var inst_11645 = (state_11656[(7)]);
var inst_11651 = (state_11656[(2)]);
var tmp11660 = inst_11645;
var inst_11645__$1 = tmp11660;
var state_11656__$1 = (function (){var statearr_11662 = state_11656;
(statearr_11662[(7)] = inst_11645__$1);

(statearr_11662[(9)] = inst_11651);

return statearr_11662;
})();
var statearr_11663_11693 = state_11656__$1;
(statearr_11663_11693[(2)] = null);

(statearr_11663_11693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__3261__auto___11691,test_str,onTick,onClick))
;
return ((function (switch__3171__auto__,c__3261__auto___11691,test_str,onTick,onClick){
return (function() {
var test$dialogList$main_$_state_machine__3172__auto__ = null;
var test$dialogList$main_$_state_machine__3172__auto____0 = (function (){
var statearr_11664 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11664[(0)] = test$dialogList$main_$_state_machine__3172__auto__);

(statearr_11664[(1)] = (1));

return statearr_11664;
});
var test$dialogList$main_$_state_machine__3172__auto____1 = (function (state_11656){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_11656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e11665){if((e11665 instanceof Object)){
var ex__3175__auto__ = e11665;
var statearr_11666_11694 = state_11656;
(statearr_11666_11694[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11695 = state_11656;
state_11656 = G__11695;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
test$dialogList$main_$_state_machine__3172__auto__ = function(state_11656){
switch(arguments.length){
case 0:
return test$dialogList$main_$_state_machine__3172__auto____0.call(this);
case 1:
return test$dialogList$main_$_state_machine__3172__auto____1.call(this,state_11656);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$dialogList$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = test$dialogList$main_$_state_machine__3172__auto____0;
test$dialogList$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = test$dialogList$main_$_state_machine__3172__auto____1;
return test$dialogList$main_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___11691,test_str,onTick,onClick))
})();
var state__3263__auto__ = (function (){var statearr_11667 = f__3262__auto__.call(null);
(statearr_11667[(6)] = c__3261__auto___11691);

return statearr_11667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___11691,test_str,onTick,onClick))
);


var G__11668_11696 = $("body");
G__11668_11696.on("click",((function (G__11668_11696,test_str,onTick,onClick){
return (function (){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__,G__11668_11696,test_str,onTick,onClick){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__,G__11668_11696,test_str,onTick,onClick){
return (function (state_11672){
var state_val_11673 = (state_11672[(1)]);
if((state_val_11673 === (1))){
var state_11672__$1 = state_11672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11672__$1,(2),onClick,(0));
} else {
if((state_val_11673 === (2))){
var inst_11670 = (state_11672[(2)]);
var state_11672__$1 = state_11672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11672__$1,inst_11670);
} else {
return null;
}
}
});})(c__3261__auto__,G__11668_11696,test_str,onTick,onClick))
;
return ((function (switch__3171__auto__,c__3261__auto__,G__11668_11696,test_str,onTick,onClick){
return (function() {
var test$dialogList$main_$_state_machine__3172__auto__ = null;
var test$dialogList$main_$_state_machine__3172__auto____0 = (function (){
var statearr_11674 = [null,null,null,null,null,null,null];
(statearr_11674[(0)] = test$dialogList$main_$_state_machine__3172__auto__);

(statearr_11674[(1)] = (1));

return statearr_11674;
});
var test$dialogList$main_$_state_machine__3172__auto____1 = (function (state_11672){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_11672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e11675){if((e11675 instanceof Object)){
var ex__3175__auto__ = e11675;
var statearr_11676_11697 = state_11672;
(statearr_11676_11697[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11698 = state_11672;
state_11672 = G__11698;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
test$dialogList$main_$_state_machine__3172__auto__ = function(state_11672){
switch(arguments.length){
case 0:
return test$dialogList$main_$_state_machine__3172__auto____0.call(this);
case 1:
return test$dialogList$main_$_state_machine__3172__auto____1.call(this,state_11672);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$dialogList$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = test$dialogList$main_$_state_machine__3172__auto____0;
test$dialogList$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = test$dialogList$main_$_state_machine__3172__auto____1;
return test$dialogList$main_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__,G__11668_11696,test_str,onTick,onClick))
})();
var state__3263__auto__ = (function (){var statearr_11677 = f__3262__auto__.call(null);
(statearr_11677[(6)] = c__3261__auto__);

return statearr_11677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__,G__11668_11696,test_str,onTick,onClick))
);

return c__3261__auto__;
});})(G__11668_11696,test_str,onTick,onClick))
);


return null;
});
test.dialogList.main.call(null);

//# sourceMappingURL=dialogList.js.map
