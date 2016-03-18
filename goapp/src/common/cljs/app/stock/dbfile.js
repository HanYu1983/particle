// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.dbfile');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
app.stock.dbfile.saveToUser = (function saveToUser(fbid,accessToken,data){var ret = cljs.core.async.chan.call(null);var filename = db2path.sf(db2path.stockInfoJson,[fbid]);db2.writefile(filename,(function (){var obj21110 = {"FBID":fbid,"AccessToken":accessToken,"Content":data,"Override":"on"};return obj21110;
})(),((function (ret,filename){
return (function (err,data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret,filename){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret,filename){
return (function (state_21117){var state_val_21118 = (state_21117[(1)]);if((state_val_21118 === (2)))
{var inst_21114 = (state_21117[(2)]);var inst_21115 = cljs.core.async.close_BANG_.call(null,ret);var state_21117__$1 = (function (){var statearr_21119 = state_21117;(statearr_21119[(7)] = inst_21114);
return statearr_21119;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21117__$1,inst_21115);
} else
{if((state_val_21118 === (1)))
{var inst_21111 = [err,data__$1];var inst_21112 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21111,null));var state_21117__$1 = state_21117;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21117__$1,(2),ret,inst_21112);
} else
{return null;
}
}
});})(c__6202__auto__,ret,filename))
;return ((function (switch__6187__auto__,c__6202__auto__,ret,filename){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_21123 = [null,null,null,null,null,null,null,null];(statearr_21123[(0)] = state_machine__6188__auto__);
(statearr_21123[(1)] = (1));
return statearr_21123;
});
var state_machine__6188__auto____1 = (function (state_21117){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_21117);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e21124){if((e21124 instanceof Object))
{var ex__6191__auto__ = e21124;var statearr_21125_21127 = state_21117;(statearr_21125_21127[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21117);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21124;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21128 = state_21117;
state_21117 = G__21128;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_21117){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_21117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret,filename))
})();var state__6204__auto__ = (function (){var statearr_21126 = f__6203__auto__.call(null);(statearr_21126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_21126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret,filename))
);
return c__6202__auto__;
});})(ret,filename))
);
return ret;
});
app.stock.dbfile.loadFromUser = (function loadFromUser(fbid,accessToken){var ret = cljs.core.async.chan.call(null);var filename = db2path.sf(db2path.stockInfoJson,[fbid]);db2.file(filename,(function (){var obj21148 = {"FBID":fbid,"AccessToken":accessToken};return obj21148;
})(),"json",((function (ret,filename){
return (function (err,data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret,filename){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret,filename){
return (function (state_21155){var state_val_21156 = (state_21155[(1)]);if((state_val_21156 === (2)))
{var inst_21152 = (state_21155[(2)]);var inst_21153 = cljs.core.async.close_BANG_.call(null,ret);var state_21155__$1 = (function (){var statearr_21157 = state_21155;(statearr_21157[(7)] = inst_21152);
return statearr_21157;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21155__$1,inst_21153);
} else
{if((state_val_21156 === (1)))
{var inst_21149 = [err,data];var inst_21150 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21149,null));var state_21155__$1 = state_21155;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21155__$1,(2),ret,inst_21150);
} else
{return null;
}
}
});})(c__6202__auto__,ret,filename))
;return ((function (switch__6187__auto__,c__6202__auto__,ret,filename){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_21161 = [null,null,null,null,null,null,null,null];(statearr_21161[(0)] = state_machine__6188__auto__);
(statearr_21161[(1)] = (1));
return statearr_21161;
});
var state_machine__6188__auto____1 = (function (state_21155){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_21155);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e21162){if((e21162 instanceof Object))
{var ex__6191__auto__ = e21162;var statearr_21163_21165 = state_21155;(statearr_21163_21165[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21155);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21162;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21166 = state_21155;
state_21155 = G__21166;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_21155){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_21155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret,filename))
})();var state__6204__auto__ = (function (){var statearr_21164 = f__6203__auto__.call(null);(statearr_21164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_21164;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret,filename))
);
return c__6202__auto__;
});})(ret,filename))
);
return ret;
});
app.stock.dbfile.saveToUser2 = (function saveToUser2(fbid,accessToken,data){var ret = cljs.core.async.chan.call(null);var filename = db2path.sf(db2path.stockInfoJson,[fbid]);db2.writefile(filename,(function (){var obj21186 = {"FBID":fbid,"AccessToken":accessToken,"Content":data,"Override":"on"};return obj21186;
})(),((function (ret,filename){
return (function (err,data__$1){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret,filename){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret,filename){
return (function (state_21193){var state_val_21194 = (state_21193[(1)]);if((state_val_21194 === (2)))
{var inst_21190 = (state_21193[(2)]);var inst_21191 = cljs.core.async.close_BANG_.call(null,ret);var state_21193__$1 = (function (){var statearr_21195 = state_21193;(statearr_21195[(7)] = inst_21190);
return statearr_21195;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21193__$1,inst_21191);
} else
{if((state_val_21194 === (1)))
{var inst_21187 = [err,data__$1];var inst_21188 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21187,null));var state_21193__$1 = state_21193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21193__$1,(2),ret,inst_21188);
} else
{return null;
}
}
});})(c__6202__auto__,ret,filename))
;return ((function (switch__6187__auto__,c__6202__auto__,ret,filename){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_21199 = [null,null,null,null,null,null,null,null];(statearr_21199[(0)] = state_machine__6188__auto__);
(statearr_21199[(1)] = (1));
return statearr_21199;
});
var state_machine__6188__auto____1 = (function (state_21193){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_21193);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e21200){if((e21200 instanceof Object))
{var ex__6191__auto__ = e21200;var statearr_21201_21203 = state_21193;(statearr_21201_21203[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21193);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21200;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21204 = state_21193;
state_21193 = G__21204;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_21193){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_21193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret,filename))
})();var state__6204__auto__ = (function (){var statearr_21202 = f__6203__auto__.call(null);(statearr_21202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_21202;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret,filename))
);
return c__6202__auto__;
});})(ret,filename))
);
return ret;
});
app.stock.dbfile.loadFromUser2 = (function loadFromUser2(fbid,accessToken){var ret = cljs.core.async.chan.call(null);var filename = db2path.sf(db2path.stockInfoJson,[fbid]);$.ajax((function (){var obj21256 = {"url":("../dbfile2/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)),"data":(function (){var obj21258 = {"FBID":fbid,"AccessToken":accessToken};return obj21258;
})(),"dataType":"text","success":((function (ret,filename){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret,filename){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret,filename){
return (function (state_21275){var state_val_21276 = (state_21275[(1)]);if((state_val_21276 === (6)))
{var inst_21270 = (state_21275[(2)]);var state_21275__$1 = state_21275;var statearr_21277_21305 = state_21275__$1;(statearr_21277_21305[(2)] = inst_21270);
(statearr_21277_21305[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21276 === (5)))
{var inst_21264 = (state_21275[(2)]);var state_21275__$1 = state_21275;var statearr_21278_21306 = state_21275__$1;(statearr_21278_21306[(2)] = inst_21264);
(statearr_21278_21306[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21276 === (4)))
{var inst_21272 = (state_21275[(2)]);var inst_21273 = cljs.core.async.close_BANG_.call(null,ret);var state_21275__$1 = (function (){var statearr_21279 = state_21275;(statearr_21279[(7)] = inst_21272);
return statearr_21279;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21275__$1,inst_21273);
} else
{if((state_val_21276 === (3)))
{var inst_21266 = JSON.parse(data);var inst_21267 = [null,inst_21266];var inst_21268 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21267,null));var state_21275__$1 = state_21275;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21275__$1,(6),ret,inst_21268);
} else
{if((state_val_21276 === (2)))
{var inst_21261 = [null,null];var inst_21262 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21261,null));var state_21275__$1 = state_21275;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21275__$1,(5),ret,inst_21262);
} else
{if((state_val_21276 === (1)))
{var inst_21259 = cljs.core._EQ_.call(null,data,"file not found");var state_21275__$1 = state_21275;if(inst_21259)
{var statearr_21280_21307 = state_21275__$1;(statearr_21280_21307[(1)] = (2));
} else
{var statearr_21281_21308 = state_21275__$1;(statearr_21281_21308[(1)] = (3));
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
});})(c__6202__auto__,ret,filename))
;return ((function (switch__6187__auto__,c__6202__auto__,ret,filename){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_21285 = [null,null,null,null,null,null,null,null];(statearr_21285[(0)] = state_machine__6188__auto__);
(statearr_21285[(1)] = (1));
return statearr_21285;
});
var state_machine__6188__auto____1 = (function (state_21275){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_21275);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e21286){if((e21286 instanceof Object))
{var ex__6191__auto__ = e21286;var statearr_21287_21309 = state_21275;(statearr_21287_21309[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21275);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21310 = state_21275;
state_21275 = G__21310;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_21275){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_21275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret,filename))
})();var state__6204__auto__ = (function (){var statearr_21288 = f__6203__auto__.call(null);(statearr_21288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_21288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret,filename))
);
return c__6202__auto__;
});})(ret,filename))
,"error":((function (ret,filename){
return (function (xhr,res,err){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,ret,filename){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,ret,filename){
return (function (state_21295){var state_val_21296 = (state_21295[(1)]);if((state_val_21296 === (2)))
{var inst_21292 = (state_21295[(2)]);var inst_21293 = cljs.core.async.close_BANG_.call(null,ret);var state_21295__$1 = (function (){var statearr_21297 = state_21295;(statearr_21297[(7)] = inst_21292);
return statearr_21297;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21295__$1,inst_21293);
} else
{if((state_val_21296 === (1)))
{var inst_21289 = [err,null];var inst_21290 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_21289,null));var state_21295__$1 = state_21295;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21295__$1,(2),ret,inst_21290);
} else
{return null;
}
}
});})(c__6202__auto__,ret,filename))
;return ((function (switch__6187__auto__,c__6202__auto__,ret,filename){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_21301 = [null,null,null,null,null,null,null,null];(statearr_21301[(0)] = state_machine__6188__auto__);
(statearr_21301[(1)] = (1));
return statearr_21301;
});
var state_machine__6188__auto____1 = (function (state_21295){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_21295);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e21302){if((e21302 instanceof Object))
{var ex__6191__auto__ = e21302;var statearr_21303_21311 = state_21295;(statearr_21303_21311[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21295);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e21302;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21312 = state_21295;
state_21295 = G__21312;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_21295){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_21295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,ret,filename))
})();var state__6204__auto__ = (function (){var statearr_21304 = f__6203__auto__.call(null);(statearr_21304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_21304;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,ret,filename))
);
return c__6202__auto__;
});})(ret,filename))
};return obj21256;
})());
return ret;
});
