// Compiled by ClojureScript 0.0-2268
goog.provide('app.stock.main');
goog.require('cljs.core');
goog.require('app.stock.impl');
goog.require('app.stock.abstract$');
goog.require('app.stock.abstract$');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('app.dbfile');
goog.require('app.dbfile');
app.stock.main.main2 = (function main2(){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__){
return (function (state_26027){var state_val_26028 = (state_26027[(1)]);if((state_val_26028 === (6)))
{var inst_26022 = (state_26027[(2)]);var inst_26023 = cljs.core.nth.call(null,inst_26022,(0),null);var inst_26024 = cljs.core.nth.call(null,inst_26022,(1),null);var inst_26025 = console.log(inst_26023,inst_26024);var state_26027__$1 = state_26027;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26027__$1,inst_26025);
} else
{if((state_val_26028 === (5)))
{var inst_26017 = (state_26027[(2)]);var inst_26018 = cljs.core.nth.call(null,inst_26017,(0),null);var inst_26019 = cljs.core.nth.call(null,inst_26017,(1),null);var inst_26020 = app.dbfile.file.call(null,inst_26019,"json");var state_26027__$1 = (function (){var statearr_26029 = state_26027;(statearr_26029[(7)] = inst_26018);
return statearr_26029;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26027__$1,(6),inst_26020);
} else
{if((state_val_26028 === (4)))
{var inst_26009 = (state_26027[(8)]);var inst_26012 = (state_26027[(2)]);var inst_26013 = cljs.core.nth.call(null,inst_26012,(0),null);var inst_26014 = cljs.core.nth.call(null,inst_26012,(1),null);var inst_26015 = app.dbfile.name__GT_id.call(null,inst_26009,"userinfo.json");var state_26027__$1 = (function (){var statearr_26030 = state_26027;(statearr_26030[(9)] = inst_26013);
(statearr_26030[(10)] = inst_26014);
return statearr_26030;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26027__$1,(5),inst_26015);
} else
{if((state_val_26028 === (3)))
{var inst_26009 = (state_26027[(8)]);var inst_26007 = (state_26027[(2)]);var inst_26008 = cljs.core.nth.call(null,inst_26007,(0),null);var inst_26009__$1 = cljs.core.nth.call(null,inst_26007,(1),null);var inst_26010 = app.dbfile.makeFile.call(null,inst_26009__$1,"userinfo.json","{}",true);var state_26027__$1 = (function (){var statearr_26031 = state_26027;(statearr_26031[(8)] = inst_26009__$1);
(statearr_26031[(11)] = inst_26008);
return statearr_26031;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26027__$1,(4),inst_26010);
} else
{if((state_val_26028 === (2)))
{var inst_26002 = (state_26027[(2)]);var inst_26003 = cljs.core.nth.call(null,inst_26002,(0),null);var inst_26004 = cljs.core.nth.call(null,inst_26002,(1),null);var inst_26005 = app.dbfile.name__GT_id.call(null,(5489861557485568),"han");var state_26027__$1 = (function (){var statearr_26032 = state_26027;(statearr_26032[(12)] = inst_26003);
(statearr_26032[(13)] = inst_26004);
return statearr_26032;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26027__$1,(3),inst_26005);
} else
{if((state_val_26028 === (1)))
{var inst_26000 = app.dbfile.makeDir.call(null,(5489861557485568),"han");var state_26027__$1 = state_26027;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26027__$1,(2),inst_26000);
} else
{return null;
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
var state_machine__6188__auto____0 = (function (){var statearr_26036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26036[(0)] = state_machine__6188__auto__);
(statearr_26036[(1)] = (1));
return statearr_26036;
});
var state_machine__6188__auto____1 = (function (state_26027){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26027);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26037){if((e26037 instanceof Object))
{var ex__6191__auto__ = e26037;var statearr_26038_26040 = state_26027;(statearr_26038_26040[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26027);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26037;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26041 = state_26027;
state_26027 = G__26041;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26027){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__))
})();var state__6204__auto__ = (function (){var statearr_26039 = f__6203__auto__.call(null);(statearr_26039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26039;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__))
);
return c__6202__auto__;
});
app.stock.main.main = (function main(){var onView_26222 = cljs.core.async.chan.call(null);var onModel_26223 = cljs.core.async.chan.call(null);var onSys_26224 = cljs.core.async.chan.call(null);common.onView.subscribe(((function (onView_26222,onModel_26223,onSys_26224){
return (function (data){var c__6202__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto__,onView_26222,onModel_26223,onSys_26224){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto__,onView_26222,onModel_26223,onSys_26224){
return (function (state_26135){var state_val_26136 = (state_26135[(1)]);if((state_val_26136 === (2)))
{var inst_26133 = (state_26135[(2)]);var state_26135__$1 = state_26135;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26135__$1,inst_26133);
} else
{if((state_val_26136 === (1)))
{var state_26135__$1 = state_26135;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26135__$1,(2),onView_26222,data);
} else
{return null;
}
}
});})(c__6202__auto__,onView_26222,onModel_26223,onSys_26224))
;return ((function (switch__6187__auto__,c__6202__auto__,onView_26222,onModel_26223,onSys_26224){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26140 = [null,null,null,null,null,null,null];(statearr_26140[(0)] = state_machine__6188__auto__);
(statearr_26140[(1)] = (1));
return statearr_26140;
});
var state_machine__6188__auto____1 = (function (state_26135){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26135);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26141){if((e26141 instanceof Object))
{var ex__6191__auto__ = e26141;var statearr_26142_26225 = state_26135;(statearr_26142_26225[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26135);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26226 = state_26135;
state_26135 = G__26226;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26135){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto__,onView_26222,onModel_26223,onSys_26224))
})();var state__6204__auto__ = (function (){var statearr_26143 = f__6203__auto__.call(null);(statearr_26143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto__);
return statearr_26143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto__,onView_26222,onModel_26223,onSys_26224))
);
return c__6202__auto__;
});})(onView_26222,onModel_26223,onSys_26224))
);
var c__6202__auto___26227 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___26227,onView_26222,onModel_26223,onSys_26224){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___26227,onView_26222,onModel_26223,onSys_26224){
return (function (state_26152){var state_val_26153 = (state_26152[(1)]);if((state_val_26153 === (4)))
{var inst_26146 = (state_26152[(2)]);var inst_26147 = common.onModel.onNext(inst_26146);var state_26152__$1 = (function (){var statearr_26154 = state_26152;(statearr_26154[(7)] = inst_26147);
return statearr_26154;
})();var statearr_26155_26228 = state_26152__$1;(statearr_26155_26228[(2)] = null);
(statearr_26155_26228[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26153 === (3)))
{var inst_26150 = (state_26152[(2)]);var state_26152__$1 = state_26152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26152__$1,inst_26150);
} else
{if((state_val_26153 === (2)))
{var state_26152__$1 = state_26152;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26152__$1,(4),onModel_26223);
} else
{if((state_val_26153 === (1)))
{var state_26152__$1 = state_26152;var statearr_26156_26229 = state_26152__$1;(statearr_26156_26229[(2)] = null);
(statearr_26156_26229[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6202__auto___26227,onView_26222,onModel_26223,onSys_26224))
;return ((function (switch__6187__auto__,c__6202__auto___26227,onView_26222,onModel_26223,onSys_26224){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26160 = [null,null,null,null,null,null,null,null];(statearr_26160[(0)] = state_machine__6188__auto__);
(statearr_26160[(1)] = (1));
return statearr_26160;
});
var state_machine__6188__auto____1 = (function (state_26152){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26152);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26161){if((e26161 instanceof Object))
{var ex__6191__auto__ = e26161;var statearr_26162_26230 = state_26152;(statearr_26162_26230[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26152);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26161;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26231 = state_26152;
state_26152 = G__26231;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26152){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___26227,onView_26222,onModel_26223,onSys_26224))
})();var state__6204__auto__ = (function (){var statearr_26163 = f__6203__auto__.call(null);(statearr_26163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___26227);
return statearr_26163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___26227,onView_26222,onModel_26223,onSys_26224))
);
var c__6202__auto___26232 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6202__auto___26232,onView_26222,onModel_26223,onSys_26224){
return (function (){var f__6203__auto__ = (function (){var switch__6187__auto__ = ((function (c__6202__auto___26232,onView_26222,onModel_26223,onSys_26224){
return (function (state_26200){var state_val_26201 = (state_26200[(1)]);if((state_val_26201 === (7)))
{var inst_26195 = (state_26200[(2)]);var inst_26167 = inst_26195;var state_26200__$1 = (function (){var statearr_26202 = state_26200;(statearr_26202[(7)] = inst_26167);
return statearr_26202;
})();var statearr_26203_26233 = state_26200__$1;(statearr_26203_26233[(2)] = null);
(statearr_26203_26233[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26201 === (1)))
{var inst_26164 = [new cljs.core.Keyword(null,"onView","onView",870824507),new cljs.core.Keyword(null,"onModel","onModel",-1713159485),new cljs.core.Keyword(null,"onSys","onSys",1468126049),new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"temp","temp",1791541284)];var inst_26165 = [onView_26222,onModel_26223,onSys_26224,cljs.core.PersistentHashMap.EMPTY,cljs.core.PersistentHashMap.EMPTY];var inst_26166 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26164,inst_26165);var inst_26167 = inst_26166;var state_26200__$1 = (function (){var statearr_26204 = state_26200;(statearr_26204[(7)] = inst_26167);
return statearr_26204;
})();var statearr_26205_26234 = state_26200__$1;(statearr_26205_26234[(2)] = null);
(statearr_26205_26234[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26201 === (4)))
{var inst_26175 = (state_26200[(8)]);var inst_26173 = (state_26200[(2)]);var inst_26174 = cljs.core.nth.call(null,inst_26173,(0),null);var inst_26175__$1 = cljs.core.nth.call(null,inst_26173,(1),null);var inst_26179 = cljs.core._EQ_.call(null,onSys_26224,inst_26175__$1);var state_26200__$1 = (function (){var statearr_26206 = state_26200;(statearr_26206[(9)] = inst_26174);
(statearr_26206[(8)] = inst_26175__$1);
return statearr_26206;
})();if(inst_26179)
{var statearr_26207_26235 = state_26200__$1;(statearr_26207_26235[(1)] = (5));
} else
{var statearr_26208_26236 = state_26200__$1;(statearr_26208_26236[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26201 === (6)))
{var inst_26175 = (state_26200[(8)]);var inst_26186 = cljs.core._EQ_.call(null,onView_26222,inst_26175);var state_26200__$1 = state_26200;if(inst_26186)
{var statearr_26209_26237 = state_26200__$1;(statearr_26209_26237[(1)] = (8));
} else
{var statearr_26210_26238 = state_26200__$1;(statearr_26210_26238[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26201 === (3)))
{var inst_26198 = (state_26200[(2)]);var state_26200__$1 = state_26200;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26200__$1,inst_26198);
} else
{if((state_val_26201 === (2)))
{var inst_26170 = [onView_26222,onSys_26224];var inst_26171 = (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,inst_26170,null));var state_26200__$1 = state_26200;return cljs.core.async.ioc_alts_BANG_.call(null,state_26200__$1,(4),inst_26171);
} else
{if((state_val_26201 === (9)))
{var inst_26167 = (state_26200[(7)]);var state_26200__$1 = state_26200;var statearr_26211_26239 = state_26200__$1;(statearr_26211_26239[(2)] = inst_26167);
(statearr_26211_26239[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26201 === (5)))
{var inst_26174 = (state_26200[(9)]);var inst_26167 = (state_26200[(7)]);var inst_26182 = cljs.core.nth.call(null,inst_26174,(0),null);var inst_26183 = cljs.core.nth.call(null,inst_26174,(1),null);var inst_26184 = app.stock.abstract$.onSystem.call(null,inst_26182,inst_26183,inst_26167);var state_26200__$1 = state_26200;var statearr_26212_26240 = state_26200__$1;(statearr_26212_26240[(2)] = inst_26184);
(statearr_26212_26240[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26201 === (10)))
{var inst_26193 = (state_26200[(2)]);var state_26200__$1 = state_26200;var statearr_26213_26241 = state_26200__$1;(statearr_26213_26241[(2)] = inst_26193);
(statearr_26213_26241[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_26201 === (8)))
{var inst_26174 = (state_26200[(9)]);var inst_26167 = (state_26200[(7)]);var inst_26188 = (inst_26174[(0)]);var inst_26189 = (inst_26174[(1)]);var inst_26190 = app.stock.abstract$.onViewCommand.call(null,inst_26188,inst_26189,inst_26167);var state_26200__$1 = state_26200;var statearr_26214_26242 = state_26200__$1;(statearr_26214_26242[(2)] = inst_26190);
(statearr_26214_26242[(1)] = (10));
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
});})(c__6202__auto___26232,onView_26222,onModel_26223,onSys_26224))
;return ((function (switch__6187__auto__,c__6202__auto___26232,onView_26222,onModel_26223,onSys_26224){
return (function() {
var state_machine__6188__auto__ = null;
var state_machine__6188__auto____0 = (function (){var statearr_26218 = [null,null,null,null,null,null,null,null,null,null];(statearr_26218[(0)] = state_machine__6188__auto__);
(statearr_26218[(1)] = (1));
return statearr_26218;
});
var state_machine__6188__auto____1 = (function (state_26200){while(true){
var ret_value__6189__auto__ = (function (){try{while(true){
var result__6190__auto__ = switch__6187__auto__.call(null,state_26200);if(cljs.core.keyword_identical_QMARK_.call(null,result__6190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6190__auto__;
}
break;
}
}catch (e26219){if((e26219 instanceof Object))
{var ex__6191__auto__ = e26219;var statearr_26220_26243 = state_26200;(statearr_26220_26243[(5)] = ex__6191__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26200);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e26219;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__26244 = state_26200;
state_26200 = G__26244;
continue;
}
} else
{return ret_value__6189__auto__;
}
break;
}
});
state_machine__6188__auto__ = function(state_26200){
switch(arguments.length){
case 0:
return state_machine__6188__auto____0.call(this);
case 1:
return state_machine__6188__auto____1.call(this,state_26200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6188__auto____0;
state_machine__6188__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6188__auto____1;
return state_machine__6188__auto__;
})()
;})(switch__6187__auto__,c__6202__auto___26232,onView_26222,onModel_26223,onSys_26224))
})();var state__6204__auto__ = (function (){var statearr_26221 = f__6203__auto__.call(null);(statearr_26221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6202__auto___26232);
return statearr_26221;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6204__auto__);
});})(c__6202__auto___26232,onView_26222,onModel_26223,onSys_26224))
);
return null;
});
app.stock.main.main.call(null);
