// Compiled by ClojureScript 1.10.238 {}
goog.provide('test.dialog');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.dialog');
test.dialog.view = (function test$dialog$view(elem,ctx){
var show_11702 = tool.dialog.showstr.call(null,ctx);
var G__11701_11703 = elem;
G__11701_11703.empty();

G__11701_11703.html(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br>",show_11702)));


return ctx;
});
test.dialog.view = cljs.core.partial.call(null,test.dialog.view,$("#container"));
test.dialog.main = (function test$dialog$main(){
var test_str = tool.dialog.formatMessage.call(null,"Hello, I'm Han\n\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u6587!",(7));
var onTick = cljs.core.async.chan.call(null);
var onClick = cljs.core.async.chan.call(null);
var c__3261__auto___11792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___11792,test_str,onTick,onClick){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___11792,test_str,onTick,onClick){
return (function (state_11740){
var state_val_11741 = (state_11740[(1)]);
if((state_val_11741 === (7))){
var inst_11735 = (state_11740[(2)]);
var inst_11708 = inst_11735;
var state_11740__$1 = (function (){var statearr_11742 = state_11740;
(statearr_11742[(7)] = inst_11708);

return statearr_11742;
})();
var statearr_11743_11793 = state_11740__$1;
(statearr_11743_11793[(2)] = null);

(statearr_11743_11793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (1))){
var inst_11704 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_11705 = [(4),test_str];
var inst_11706 = cljs.core.PersistentHashMap.fromArrays(inst_11704,inst_11705);
var inst_11707 = tool.dialog.dialog.call(null,inst_11706);
var inst_11708 = inst_11707;
var state_11740__$1 = (function (){var statearr_11744 = state_11740;
(statearr_11744[(7)] = inst_11708);

return statearr_11744;
})();
var statearr_11745_11794 = state_11740__$1;
(statearr_11745_11794[(2)] = null);

(statearr_11745_11794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (4))){
var inst_11719 = (state_11740[(8)]);
var inst_11717 = (state_11740[(2)]);
var inst_11718 = cljs.core.nth.call(null,inst_11717,(0),null);
var inst_11719__$1 = cljs.core.nth.call(null,inst_11717,(1),null);
var inst_11723 = cljs.core._EQ_.call(null,onTick,inst_11719__$1);
var state_11740__$1 = (function (){var statearr_11746 = state_11740;
(statearr_11746[(9)] = inst_11718);

(statearr_11746[(8)] = inst_11719__$1);

return statearr_11746;
})();
if(inst_11723){
var statearr_11747_11795 = state_11740__$1;
(statearr_11747_11795[(1)] = (5));

} else {
var statearr_11748_11796 = state_11740__$1;
(statearr_11748_11796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (6))){
var inst_11719 = (state_11740[(8)]);
var inst_11728 = cljs.core._EQ_.call(null,onClick,inst_11719);
var state_11740__$1 = state_11740;
if(inst_11728){
var statearr_11749_11797 = state_11740__$1;
(statearr_11749_11797[(1)] = (8));

} else {
var statearr_11750_11798 = state_11740__$1;
(statearr_11750_11798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (3))){
var inst_11738 = (state_11740[(2)]);
var state_11740__$1 = state_11740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11740__$1,inst_11738);
} else {
if((state_val_11741 === (2))){
var inst_11713 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11714 = [onTick,onClick];
var inst_11715 = (new cljs.core.PersistentVector(null,2,(5),inst_11713,inst_11714,null));
var state_11740__$1 = state_11740;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11740__$1,(4),inst_11715);
} else {
if((state_val_11741 === (9))){
var inst_11708 = (state_11740[(7)]);
var state_11740__$1 = state_11740;
var statearr_11751_11799 = state_11740__$1;
(statearr_11751_11799[(2)] = inst_11708);

(statearr_11751_11799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (5))){
var inst_11708 = (state_11740[(7)]);
var inst_11725 = tool.dialog.step.call(null,inst_11708);
var inst_11726 = test.dialog.view.call(null,inst_11725);
var state_11740__$1 = state_11740;
var statearr_11752_11800 = state_11740__$1;
(statearr_11752_11800[(2)] = inst_11726);

(statearr_11752_11800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (10))){
var inst_11733 = (state_11740[(2)]);
var state_11740__$1 = state_11740;
var statearr_11753_11801 = state_11740__$1;
(statearr_11753_11801[(2)] = inst_11733);

(statearr_11753_11801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11741 === (8))){
var inst_11708 = (state_11740[(7)]);
var inst_11730 = tool.dialog.requestNext.call(null,inst_11708);
var state_11740__$1 = state_11740;
var statearr_11754_11802 = state_11740__$1;
(statearr_11754_11802[(2)] = inst_11730);

(statearr_11754_11802[(1)] = (10));


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
});})(c__3261__auto___11792,test_str,onTick,onClick))
;
return ((function (switch__3171__auto__,c__3261__auto___11792,test_str,onTick,onClick){
return (function() {
var test$dialog$main_$_state_machine__3172__auto__ = null;
var test$dialog$main_$_state_machine__3172__auto____0 = (function (){
var statearr_11755 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11755[(0)] = test$dialog$main_$_state_machine__3172__auto__);

(statearr_11755[(1)] = (1));

return statearr_11755;
});
var test$dialog$main_$_state_machine__3172__auto____1 = (function (state_11740){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_11740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e11756){if((e11756 instanceof Object)){
var ex__3175__auto__ = e11756;
var statearr_11757_11803 = state_11740;
(statearr_11757_11803[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11804 = state_11740;
state_11740 = G__11804;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
test$dialog$main_$_state_machine__3172__auto__ = function(state_11740){
switch(arguments.length){
case 0:
return test$dialog$main_$_state_machine__3172__auto____0.call(this);
case 1:
return test$dialog$main_$_state_machine__3172__auto____1.call(this,state_11740);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$dialog$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = test$dialog$main_$_state_machine__3172__auto____0;
test$dialog$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = test$dialog$main_$_state_machine__3172__auto____1;
return test$dialog$main_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___11792,test_str,onTick,onClick))
})();
var state__3263__auto__ = (function (){var statearr_11758 = f__3262__auto__.call(null);
(statearr_11758[(6)] = c__3261__auto___11792);

return statearr_11758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___11792,test_str,onTick,onClick))
);


var c__3261__auto___11805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto___11805,test_str,onTick,onClick){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto___11805,test_str,onTick,onClick){
return (function (state_11770){
var state_val_11771 = (state_11770[(1)]);
if((state_val_11771 === (1))){
var inst_11759 = (33);
var state_11770__$1 = (function (){var statearr_11772 = state_11770;
(statearr_11772[(7)] = inst_11759);

return statearr_11772;
})();
var statearr_11773_11806 = state_11770__$1;
(statearr_11773_11806[(2)] = null);

(statearr_11773_11806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11771 === (2))){
var inst_11759 = (state_11770[(7)]);
var inst_11761 = cljs.core.async.timeout.call(null,inst_11759);
var state_11770__$1 = state_11770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11770__$1,(4),inst_11761);
} else {
if((state_val_11771 === (3))){
var inst_11768 = (state_11770[(2)]);
var state_11770__$1 = state_11770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11770__$1,inst_11768);
} else {
if((state_val_11771 === (4))){
var inst_11759 = (state_11770[(7)]);
var inst_11763 = (state_11770[(2)]);
var state_11770__$1 = (function (){var statearr_11775 = state_11770;
(statearr_11775[(8)] = inst_11763);

return statearr_11775;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11770__$1,(5),onTick,inst_11759);
} else {
if((state_val_11771 === (5))){
var inst_11759 = (state_11770[(7)]);
var inst_11765 = (state_11770[(2)]);
var tmp11774 = inst_11759;
var inst_11759__$1 = tmp11774;
var state_11770__$1 = (function (){var statearr_11776 = state_11770;
(statearr_11776[(9)] = inst_11765);

(statearr_11776[(7)] = inst_11759__$1);

return statearr_11776;
})();
var statearr_11777_11807 = state_11770__$1;
(statearr_11777_11807[(2)] = null);

(statearr_11777_11807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__3261__auto___11805,test_str,onTick,onClick))
;
return ((function (switch__3171__auto__,c__3261__auto___11805,test_str,onTick,onClick){
return (function() {
var test$dialog$main_$_state_machine__3172__auto__ = null;
var test$dialog$main_$_state_machine__3172__auto____0 = (function (){
var statearr_11778 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11778[(0)] = test$dialog$main_$_state_machine__3172__auto__);

(statearr_11778[(1)] = (1));

return statearr_11778;
});
var test$dialog$main_$_state_machine__3172__auto____1 = (function (state_11770){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_11770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e11779){if((e11779 instanceof Object)){
var ex__3175__auto__ = e11779;
var statearr_11780_11808 = state_11770;
(statearr_11780_11808[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11809 = state_11770;
state_11770 = G__11809;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
test$dialog$main_$_state_machine__3172__auto__ = function(state_11770){
switch(arguments.length){
case 0:
return test$dialog$main_$_state_machine__3172__auto____0.call(this);
case 1:
return test$dialog$main_$_state_machine__3172__auto____1.call(this,state_11770);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$dialog$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = test$dialog$main_$_state_machine__3172__auto____0;
test$dialog$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = test$dialog$main_$_state_machine__3172__auto____1;
return test$dialog$main_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto___11805,test_str,onTick,onClick))
})();
var state__3263__auto__ = (function (){var statearr_11781 = f__3262__auto__.call(null);
(statearr_11781[(6)] = c__3261__auto___11805);

return statearr_11781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto___11805,test_str,onTick,onClick))
);


var G__11782_11810 = $("body");
G__11782_11810.on("click",((function (G__11782_11810,test_str,onTick,onClick){
return (function (){
var c__3261__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3261__auto__,G__11782_11810,test_str,onTick,onClick){
return (function (){
var f__3262__auto__ = (function (){var switch__3171__auto__ = ((function (c__3261__auto__,G__11782_11810,test_str,onTick,onClick){
return (function (state_11786){
var state_val_11787 = (state_11786[(1)]);
if((state_val_11787 === (1))){
var state_11786__$1 = state_11786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11786__$1,(2),onClick,(0));
} else {
if((state_val_11787 === (2))){
var inst_11784 = (state_11786[(2)]);
var state_11786__$1 = state_11786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11786__$1,inst_11784);
} else {
return null;
}
}
});})(c__3261__auto__,G__11782_11810,test_str,onTick,onClick))
;
return ((function (switch__3171__auto__,c__3261__auto__,G__11782_11810,test_str,onTick,onClick){
return (function() {
var test$dialog$main_$_state_machine__3172__auto__ = null;
var test$dialog$main_$_state_machine__3172__auto____0 = (function (){
var statearr_11788 = [null,null,null,null,null,null,null];
(statearr_11788[(0)] = test$dialog$main_$_state_machine__3172__auto__);

(statearr_11788[(1)] = (1));

return statearr_11788;
});
var test$dialog$main_$_state_machine__3172__auto____1 = (function (state_11786){
while(true){
var ret_value__3173__auto__ = (function (){try{while(true){
var result__3174__auto__ = switch__3171__auto__.call(null,state_11786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3174__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3174__auto__;
}
break;
}
}catch (e11789){if((e11789 instanceof Object)){
var ex__3175__auto__ = e11789;
var statearr_11790_11811 = state_11786;
(statearr_11790_11811[(5)] = ex__3175__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11812 = state_11786;
state_11786 = G__11812;
continue;
} else {
return ret_value__3173__auto__;
}
break;
}
});
test$dialog$main_$_state_machine__3172__auto__ = function(state_11786){
switch(arguments.length){
case 0:
return test$dialog$main_$_state_machine__3172__auto____0.call(this);
case 1:
return test$dialog$main_$_state_machine__3172__auto____1.call(this,state_11786);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$dialog$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$0 = test$dialog$main_$_state_machine__3172__auto____0;
test$dialog$main_$_state_machine__3172__auto__.cljs$core$IFn$_invoke$arity$1 = test$dialog$main_$_state_machine__3172__auto____1;
return test$dialog$main_$_state_machine__3172__auto__;
})()
;})(switch__3171__auto__,c__3261__auto__,G__11782_11810,test_str,onTick,onClick))
})();
var state__3263__auto__ = (function (){var statearr_11791 = f__3262__auto__.call(null);
(statearr_11791[(6)] = c__3261__auto__);

return statearr_11791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3263__auto__);
});})(c__3261__auto__,G__11782_11810,test_str,onTick,onClick))
);

return c__3261__auto__;
});})(G__11782_11810,test_str,onTick,onClick))
);


return null;
});
test.dialog.main.call(null);

//# sourceMappingURL=dialog.js.map
