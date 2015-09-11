// Compiled by ClojureScript 0.0-2268
goog.provide('tool.dialog');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
tool.dialog.dialog = (function dialog(info){return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"typing","typing",1090632888),new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584),(0),new cljs.core.Keyword(null,"curr-line","curr-line",277562410),(0),new cljs.core.Keyword(null,"max-line","max-line",-919688481),(3),new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"request-next","request-next",-1281096497),false], null),info);
});
tool.dialog.formatMessage = (function formatMessage(msg,length){return cljs.core.flatten.call(null,cljs.core.map.call(null,(function (origin){return cljs.core.map.call(null,(function (parts){return cljs.core.apply.call(null,cljs.core.str,parts);
}),origin);
}),cljs.core.map.call(null,(function (p1__10907_SHARP_){return cljs.core.partition.call(null,length,length,null,p1__10907_SHARP_);
}),clojure.string.split_lines.call(null,msg))));
});
tool.dialog.requestNext = (function requestNext(ctx){return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"request-next","request-next",-1281096497),true);
});
tool.dialog.step = (function step(p__10908){var map__10913 = p__10908;var map__10913__$1 = ((cljs.core.seq_QMARK_.call(null,map__10913))?cljs.core.apply.call(null,cljs.core.hash_map,map__10913):map__10913);var ctx = map__10913__$1;var state = cljs.core.get.call(null,map__10913__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var curr_idx = cljs.core.get.call(null,map__10913__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var curr_line = cljs.core.get.call(null,map__10913__$1,new cljs.core.Keyword(null,"curr-line","curr-line",277562410));var max_line = cljs.core.get.call(null,map__10913__$1,new cljs.core.Keyword(null,"max-line","max-line",-919688481));var message = cljs.core.get.call(null,map__10913__$1,new cljs.core.Keyword(null,"message","message",-406056002));var request_next = cljs.core.get.call(null,map__10913__$1,new cljs.core.Keyword(null,"request-next","request-next",-1281096497));var pred__10914 = cljs.core._EQ_;var expr__10915 = state;if(cljs.core.truth_(pred__10914.call(null,new cljs.core.Keyword(null,"typing","typing",1090632888),expr__10915)))
{var curr_msg = cljs.core.nth.call(null,message,curr_line);var curr_msg_length = cljs.core.count.call(null,curr_msg);var final_line_QMARK_ = cljs.core._EQ_.call(null,(curr_line + (1)),cljs.core.count.call(null,message));var endline_QMARK_ = ((cljs.core.mod.call(null,(curr_line + (1)),max_line) === (0))) || (final_line_QMARK_);if(cljs.core._EQ_.call(null,curr_msg_length,curr_idx))
{if(endline_QMARK_)
{return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"state","state",-1988618099),((final_line_QMARK_)?new cljs.core.Keyword(null,"end","end",-268185958):new cljs.core.Keyword(null,"wait","wait",-260664777)));
} else
{return cljs.core.assoc.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"curr-line","curr-line",277562410),(curr_line + (1))),new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584),(0));
}
} else
{if(cljs.core.truth_(request_next))
{var line_offset = (max_line - cljs.core.mod.call(null,(curr_line + (1)),max_line));var curr_final_line = (function (){var x__3865__auto__ = (curr_line + line_offset);var y__3866__auto__ = (cljs.core.count.call(null,message) - (1));return ((x__3865__auto__ < y__3866__auto__) ? x__3865__auto__ : y__3866__auto__);
})();var curr_final_line_length = cljs.core.count.call(null,cljs.core.nth.call(null,message,curr_final_line));var final_line_QMARK___$1 = cljs.core._EQ_.call(null,(curr_final_line + (1)),cljs.core.count.call(null,message));return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"state","state",-1988618099),((final_line_QMARK___$1)?new cljs.core.Keyword(null,"end","end",-268185958):new cljs.core.Keyword(null,"wait","wait",-260664777))),new cljs.core.Keyword(null,"request-next","request-next",-1281096497),false),new cljs.core.Keyword(null,"curr-line","curr-line",277562410),curr_final_line),new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584),curr_final_line_length);
} else
{return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584),(curr_idx + (1)));
}
}
} else
{if(cljs.core.truth_(pred__10914.call(null,new cljs.core.Keyword(null,"wait","wait",-260664777),expr__10915)))
{if(cljs.core.truth_(request_next))
{return cljs.core.assoc.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"request-next","request-next",-1281096497),false),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"next","next",-117701485));
} else
{return ctx;
}
} else
{if(cljs.core.truth_(pred__10914.call(null,new cljs.core.Keyword(null,"next","next",-117701485),expr__10915)))
{return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"request-next","request-next",-1281096497),false),new cljs.core.Keyword(null,"curr-line","curr-line",277562410),(curr_line + (1))),new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584),(0)),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"typing","typing",1090632888));
} else
{return ctx;
}
}
}
});
tool.dialog.showstr = (function showstr(p__10917){var map__10919 = p__10917;var map__10919__$1 = ((cljs.core.seq_QMARK_.call(null,map__10919))?cljs.core.apply.call(null,cljs.core.hash_map,map__10919):map__10919);var ctx = map__10919__$1;var curr_idx = cljs.core.get.call(null,map__10919__$1,new cljs.core.Keyword(null,"curr-idx","curr-idx",784577584));var curr_line = cljs.core.get.call(null,map__10919__$1,new cljs.core.Keyword(null,"curr-line","curr-line",277562410));var max_line = cljs.core.get.call(null,map__10919__$1,new cljs.core.Keyword(null,"max-line","max-line",-919688481));var message = cljs.core.get.call(null,map__10919__$1,new cljs.core.Keyword(null,"message","message",-406056002));var prevcount = cljs.core.mod.call(null,curr_line,max_line);var showstr__$1 = cljs.core.reduce.call(null,((function (prevcount,map__10919,map__10919__$1,ctx,curr_idx,curr_line,max_line,message){
return (function (all,idx){var currstr = cljs.core.nth.call(null,message,(curr_line - idx));if((idx === (0)))
{var typingstr = currstr.substring((0),curr_idx);return cljs.core.cons.call(null,typingstr,all);
} else
{return cljs.core.cons.call(null,currstr,all);
}
});})(prevcount,map__10919,map__10919__$1,ctx,curr_idx,curr_line,max_line,message))
,cljs.core.List.EMPTY,cljs.core.range.call(null,(prevcount + (1))));return showstr__$1;
});