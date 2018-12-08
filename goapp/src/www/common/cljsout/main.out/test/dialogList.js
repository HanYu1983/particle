// Compiled by ClojureScript 1.10.238 {}
goog.provide('test.dialogList');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('tool.dialog');
test.dialogList.step = (function test$dialogList$step(p__5179){
var map__5180 = p__5179;
var map__5180__$1 = ((((!((map__5180 == null)))?(((((map__5180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5180):map__5180);
var ctx = map__5180__$1;
var dialogs = cljs.core.get.call(null,map__5180__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));
var curr_idx = cljs.core.get.call(null,map__5180__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));
var updated = cljs.core.map.call(null,((function (map__5180,map__5180__$1,ctx,dialogs,curr_idx){
return (function (idx,dialog){
if(cljs.core._EQ_.call(null,idx,curr_idx)){
return tool.dialog.step.call(null,dialog);
} else {
return dialog;
}
});})(map__5180,map__5180__$1,ctx,dialogs,curr_idx))
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
test.dialogList.showstr = (function test$dialogList$showstr(p__5182){
var map__5183 = p__5182;
var map__5183__$1 = ((((!((map__5183 == null)))?(((((map__5183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5183):map__5183);
var ctx = map__5183__$1;
var dialogs = cljs.core.get.call(null,map__5183__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));
var curr_idx = cljs.core.get.call(null,map__5183__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));
var curr_dialog = cljs.core.nth.call(null,dialogs,curr_idx);
return tool.dialog.showstr.call(null,curr_dialog);
});
test.dialogList.requestNext = (function test$dialogList$requestNext(p__5185){
var map__5186 = p__5185;
var map__5186__$1 = ((((!((map__5186 == null)))?(((((map__5186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5186):map__5186);
var ctx = map__5186__$1;
var dialogs = cljs.core.get.call(null,map__5186__$1,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986));
var curr_idx = cljs.core.get.call(null,map__5186__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));
var updated = cljs.core.map.call(null,((function (map__5186,map__5186__$1,ctx,dialogs,curr_idx){
return (function (idx,dialog){
if(cljs.core._EQ_.call(null,idx,curr_idx)){
return tool.dialog.requestNext.call(null,dialog);
} else {
return dialog;
}
});})(map__5186,map__5186__$1,ctx,dialogs,curr_idx))
,cljs.core.range.call(null,cljs.core.count.call(null,dialogs)),dialogs);
return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986),updated);
});
test.dialogList.view = (function test$dialogList$view(elem,ctx){
var show_5189 = test.dialogList.showstr.call(null,ctx);
var G__5188_5190 = elem;
G__5188_5190.empty();

G__5188_5190.html(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"<br>",show_5189)));


return ctx;
});
test.dialogList.view = cljs.core.partial.call(null,test.dialogList.view,$("#container"));
test.dialogList.main = (function test$dialogList$main(){
var test_str = tool.dialog.formatMessage.call(null,"Hello, I'm Han\n\u6211\u662F\u4E2D\u6587!\u6211\u662F\u4E2D\u65872!\u6211\u662F\u4E2D\u65873!\u6211\u662F\u4E2D\u65874!\u6211\u662F\u4E2D\u65875!\u6211\u662F\u4E2D\u65876!",(7));
var onTick = cljs.core.async.chan.call(null);
var onClick = cljs.core.async.chan.call(null);
var c__2882__auto___5288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___5288,test_str,onTick,onClick){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___5288,test_str,onTick,onClick){
return (function (state_5236){
var state_val_5237 = (state_5236[(1)]);
if((state_val_5237 === (7))){
var inst_5231 = (state_5236[(2)]);
var inst_5204 = inst_5231;
var state_5236__$1 = (function (){var statearr_5238 = state_5236;
(statearr_5238[(7)] = inst_5204);

return statearr_5238;
})();
var statearr_5239_5289 = state_5236__$1;
(statearr_5239_5289[(2)] = null);

(statearr_5239_5289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (1))){
var inst_5191 = [new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584),new cljs.core.Keyword(null,"dialogs","dialogs",-2046256986)];
var inst_5192 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_5193 = [(4),test_str];
var inst_5194 = cljs.core.PersistentHashMap.fromArrays(inst_5192,inst_5193);
var inst_5195 = tool.dialog.dialog.call(null,inst_5194);
var inst_5196 = [new cljs.core.Keyword(null,"max-line","max-line",-919688481),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_5197 = [(4),test_str];
var inst_5198 = cljs.core.PersistentHashMap.fromArrays(inst_5196,inst_5197);
var inst_5199 = tool.dialog.dialog.call(null,inst_5198);
var inst_5200 = (new cljs.core.List(null,inst_5199,null,(1),null));
var inst_5201 = (new cljs.core.List(null,inst_5195,inst_5200,(2),null));
var inst_5202 = [(0),inst_5201];
var inst_5203 = cljs.core.PersistentHashMap.fromArrays(inst_5191,inst_5202);
var inst_5204 = inst_5203;
var state_5236__$1 = (function (){var statearr_5240 = state_5236;
(statearr_5240[(7)] = inst_5204);

return statearr_5240;
})();
var statearr_5241_5290 = state_5236__$1;
(statearr_5241_5290[(2)] = null);

(statearr_5241_5290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (4))){
var inst_5215 = (state_5236[(8)]);
var inst_5213 = (state_5236[(2)]);
var inst_5214 = cljs.core.nth.call(null,inst_5213,(0),null);
var inst_5215__$1 = cljs.core.nth.call(null,inst_5213,(1),null);
var inst_5219 = cljs.core._EQ_.call(null,onTick,inst_5215__$1);
var state_5236__$1 = (function (){var statearr_5242 = state_5236;
(statearr_5242[(9)] = inst_5214);

(statearr_5242[(8)] = inst_5215__$1);

return statearr_5242;
})();
if(inst_5219){
var statearr_5243_5291 = state_5236__$1;
(statearr_5243_5291[(1)] = (5));

} else {
var statearr_5244_5292 = state_5236__$1;
(statearr_5244_5292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (6))){
var inst_5215 = (state_5236[(8)]);
var inst_5224 = cljs.core._EQ_.call(null,onClick,inst_5215);
var state_5236__$1 = state_5236;
if(inst_5224){
var statearr_5245_5293 = state_5236__$1;
(statearr_5245_5293[(1)] = (8));

} else {
var statearr_5246_5294 = state_5236__$1;
(statearr_5246_5294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (3))){
var inst_5234 = (state_5236[(2)]);
var state_5236__$1 = state_5236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5236__$1,inst_5234);
} else {
if((state_val_5237 === (2))){
var inst_5209 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_5210 = [onTick,onClick];
var inst_5211 = (new cljs.core.PersistentVector(null,2,(5),inst_5209,inst_5210,null));
var state_5236__$1 = state_5236;
return cljs.core.async.ioc_alts_BANG_.call(null,state_5236__$1,(4),inst_5211);
} else {
if((state_val_5237 === (9))){
var inst_5204 = (state_5236[(7)]);
var state_5236__$1 = state_5236;
var statearr_5247_5295 = state_5236__$1;
(statearr_5247_5295[(2)] = inst_5204);

(statearr_5247_5295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (5))){
var inst_5204 = (state_5236[(7)]);
var inst_5221 = test.dialogList.step.call(null,inst_5204);
var inst_5222 = test.dialogList.view.call(null,inst_5221);
var state_5236__$1 = state_5236;
var statearr_5248_5296 = state_5236__$1;
(statearr_5248_5296[(2)] = inst_5222);

(statearr_5248_5296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (10))){
var inst_5229 = (state_5236[(2)]);
var state_5236__$1 = state_5236;
var statearr_5249_5297 = state_5236__$1;
(statearr_5249_5297[(2)] = inst_5229);

(statearr_5249_5297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (8))){
var inst_5204 = (state_5236[(7)]);
var inst_5226 = test.dialogList.requestNext.call(null,inst_5204);
var state_5236__$1 = state_5236;
var statearr_5250_5298 = state_5236__$1;
(statearr_5250_5298[(2)] = inst_5226);

(statearr_5250_5298[(1)] = (10));


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
});})(c__2882__auto___5288,test_str,onTick,onClick))
;
return ((function (switch__2792__auto__,c__2882__auto___5288,test_str,onTick,onClick){
return (function() {
var test$dialogList$main_$_state_machine__2793__auto__ = null;
var test$dialogList$main_$_state_machine__2793__auto____0 = (function (){
var statearr_5251 = [null,null,null,null,null,null,null,null,null,null];
(statearr_5251[(0)] = test$dialogList$main_$_state_machine__2793__auto__);

(statearr_5251[(1)] = (1));

return statearr_5251;
});
var test$dialogList$main_$_state_machine__2793__auto____1 = (function (state_5236){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5252){if((e5252 instanceof Object)){
var ex__2796__auto__ = e5252;
var statearr_5253_5299 = state_5236;
(statearr_5253_5299[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5300 = state_5236;
state_5236 = G__5300;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
test$dialogList$main_$_state_machine__2793__auto__ = function(state_5236){
switch(arguments.length){
case 0:
return test$dialogList$main_$_state_machine__2793__auto____0.call(this);
case 1:
return test$dialogList$main_$_state_machine__2793__auto____1.call(this,state_5236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$dialogList$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = test$dialogList$main_$_state_machine__2793__auto____0;
test$dialogList$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = test$dialogList$main_$_state_machine__2793__auto____1;
return test$dialogList$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___5288,test_str,onTick,onClick))
})();
var state__2884__auto__ = (function (){var statearr_5254 = f__2883__auto__.call(null);
(statearr_5254[(6)] = c__2882__auto___5288);

return statearr_5254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___5288,test_str,onTick,onClick))
);


var c__2882__auto___5301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto___5301,test_str,onTick,onClick){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto___5301,test_str,onTick,onClick){
return (function (state_5266){
var state_val_5267 = (state_5266[(1)]);
if((state_val_5267 === (1))){
var inst_5255 = (100);
var state_5266__$1 = (function (){var statearr_5268 = state_5266;
(statearr_5268[(7)] = inst_5255);

return statearr_5268;
})();
var statearr_5269_5302 = state_5266__$1;
(statearr_5269_5302[(2)] = null);

(statearr_5269_5302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5267 === (2))){
var inst_5255 = (state_5266[(7)]);
var inst_5257 = cljs.core.async.timeout.call(null,inst_5255);
var state_5266__$1 = state_5266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5266__$1,(4),inst_5257);
} else {
if((state_val_5267 === (3))){
var inst_5264 = (state_5266[(2)]);
var state_5266__$1 = state_5266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5266__$1,inst_5264);
} else {
if((state_val_5267 === (4))){
var inst_5255 = (state_5266[(7)]);
var inst_5259 = (state_5266[(2)]);
var state_5266__$1 = (function (){var statearr_5271 = state_5266;
(statearr_5271[(8)] = inst_5259);

return statearr_5271;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5266__$1,(5),onTick,inst_5255);
} else {
if((state_val_5267 === (5))){
var inst_5255 = (state_5266[(7)]);
var inst_5261 = (state_5266[(2)]);
var tmp5270 = inst_5255;
var inst_5255__$1 = tmp5270;
var state_5266__$1 = (function (){var statearr_5272 = state_5266;
(statearr_5272[(7)] = inst_5255__$1);

(statearr_5272[(9)] = inst_5261);

return statearr_5272;
})();
var statearr_5273_5303 = state_5266__$1;
(statearr_5273_5303[(2)] = null);

(statearr_5273_5303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__2882__auto___5301,test_str,onTick,onClick))
;
return ((function (switch__2792__auto__,c__2882__auto___5301,test_str,onTick,onClick){
return (function() {
var test$dialogList$main_$_state_machine__2793__auto__ = null;
var test$dialogList$main_$_state_machine__2793__auto____0 = (function (){
var statearr_5274 = [null,null,null,null,null,null,null,null,null,null];
(statearr_5274[(0)] = test$dialogList$main_$_state_machine__2793__auto__);

(statearr_5274[(1)] = (1));

return statearr_5274;
});
var test$dialogList$main_$_state_machine__2793__auto____1 = (function (state_5266){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5275){if((e5275 instanceof Object)){
var ex__2796__auto__ = e5275;
var statearr_5276_5304 = state_5266;
(statearr_5276_5304[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5305 = state_5266;
state_5266 = G__5305;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
test$dialogList$main_$_state_machine__2793__auto__ = function(state_5266){
switch(arguments.length){
case 0:
return test$dialogList$main_$_state_machine__2793__auto____0.call(this);
case 1:
return test$dialogList$main_$_state_machine__2793__auto____1.call(this,state_5266);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$dialogList$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = test$dialogList$main_$_state_machine__2793__auto____0;
test$dialogList$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = test$dialogList$main_$_state_machine__2793__auto____1;
return test$dialogList$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto___5301,test_str,onTick,onClick))
})();
var state__2884__auto__ = (function (){var statearr_5277 = f__2883__auto__.call(null);
(statearr_5277[(6)] = c__2882__auto___5301);

return statearr_5277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto___5301,test_str,onTick,onClick))
);


var G__5278_5306 = $("body");
G__5278_5306.on("click",((function (G__5278_5306,test_str,onTick,onClick){
return (function (){
var c__2882__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__2882__auto__,G__5278_5306,test_str,onTick,onClick){
return (function (){
var f__2883__auto__ = (function (){var switch__2792__auto__ = ((function (c__2882__auto__,G__5278_5306,test_str,onTick,onClick){
return (function (state_5282){
var state_val_5283 = (state_5282[(1)]);
if((state_val_5283 === (1))){
var state_5282__$1 = state_5282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5282__$1,(2),onClick,(0));
} else {
if((state_val_5283 === (2))){
var inst_5280 = (state_5282[(2)]);
var state_5282__$1 = state_5282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5282__$1,inst_5280);
} else {
return null;
}
}
});})(c__2882__auto__,G__5278_5306,test_str,onTick,onClick))
;
return ((function (switch__2792__auto__,c__2882__auto__,G__5278_5306,test_str,onTick,onClick){
return (function() {
var test$dialogList$main_$_state_machine__2793__auto__ = null;
var test$dialogList$main_$_state_machine__2793__auto____0 = (function (){
var statearr_5284 = [null,null,null,null,null,null,null];
(statearr_5284[(0)] = test$dialogList$main_$_state_machine__2793__auto__);

(statearr_5284[(1)] = (1));

return statearr_5284;
});
var test$dialogList$main_$_state_machine__2793__auto____1 = (function (state_5282){
while(true){
var ret_value__2794__auto__ = (function (){try{while(true){
var result__2795__auto__ = switch__2792__auto__.call(null,state_5282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__2795__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__2795__auto__;
}
break;
}
}catch (e5285){if((e5285 instanceof Object)){
var ex__2796__auto__ = e5285;
var statearr_5286_5307 = state_5282;
(statearr_5286_5307[(5)] = ex__2796__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__2794__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5308 = state_5282;
state_5282 = G__5308;
continue;
} else {
return ret_value__2794__auto__;
}
break;
}
});
test$dialogList$main_$_state_machine__2793__auto__ = function(state_5282){
switch(arguments.length){
case 0:
return test$dialogList$main_$_state_machine__2793__auto____0.call(this);
case 1:
return test$dialogList$main_$_state_machine__2793__auto____1.call(this,state_5282);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
test$dialogList$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$0 = test$dialogList$main_$_state_machine__2793__auto____0;
test$dialogList$main_$_state_machine__2793__auto__.cljs$core$IFn$_invoke$arity$1 = test$dialogList$main_$_state_machine__2793__auto____1;
return test$dialogList$main_$_state_machine__2793__auto__;
})()
;})(switch__2792__auto__,c__2882__auto__,G__5278_5306,test_str,onTick,onClick))
})();
var state__2884__auto__ = (function (){var statearr_5287 = f__2883__auto__.call(null);
(statearr_5287[(6)] = c__2882__auto__);

return statearr_5287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__2884__auto__);
});})(c__2882__auto__,G__5278_5306,test_str,onTick,onClick))
);

return c__2882__auto__;
});})(G__5278_5306,test_str,onTick,onClick))
);


return null;
});
test.dialogList.main.call(null);

//# sourceMappingURL=dialogList.js.map
