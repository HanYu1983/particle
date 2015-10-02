// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock_game');
goog.require('cljs.core');

/**
* @constructor
* @param {*} id
* @param {*} type
* @param {*} price
* @param {*} cnt
* @param {*} time
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
test.stock_game.Order = (function (id,type,price,cnt,time,__meta,__extmap){
this.id = id;
this.type = type;
this.price = price;
this.cnt = cnt;
this.time = time;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
test.stock_game.Order.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4137__auto__,k__4138__auto__){var self__ = this;
var this__4137__auto____$1 = this;return cljs.core._lookup.call(null,this__4137__auto____$1,k__4138__auto__,null);
});
test.stock_game.Order.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4139__auto__,k16037,else__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;var G__16039 = (((k16037 instanceof cljs.core.Keyword))?k16037.fqn:null);switch (G__16039) {
case "time":
return self__.time;

break;
case "cnt":
return self__.cnt;

break;
case "price":
return self__.price;

break;
case "type":
return self__.type;

break;
case "id":
return self__.id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16037,else__4140__auto__);

}
});
test.stock_game.Order.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4151__auto__,writer__4152__auto__,opts__4153__auto__){var self__ = this;
var this__4151__auto____$1 = this;var pr_pair__4154__auto__ = ((function (this__4151__auto____$1){
return (function (keyval__4155__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4152__auto__,cljs.core.pr_writer,""," ","",opts__4153__auto__,keyval__4155__auto__);
});})(this__4151__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4152__auto__,pr_pair__4154__auto__,"#test.stock-game.Order{",", ","}",opts__4153__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"price","price",22129180),self__.price],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cnt","cnt",283978798),self__.cnt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time","time",1385887882),self__.time],null))], null),self__.__extmap));
});
test.stock_game.Order.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4135__auto__){var self__ = this;
var this__4135__auto____$1 = this;return self__.__meta;
});
test.stock_game.Order.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4131__auto__){var self__ = this;
var this__4131__auto____$1 = this;return (new test.stock_game.Order(self__.id,self__.type,self__.price,self__.cnt,self__.time,self__.__meta,self__.__extmap,self__.__hash));
});
test.stock_game.Order.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
test.stock_game.Order.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4132__auto__){var self__ = this;
var this__4132__auto____$1 = this;var h__3962__auto__ = self__.__hash;if(!((h__3962__auto__ == null)))
{return h__3962__auto__;
} else
{var h__3962__auto____$1 = cljs.core.hash_imap.call(null,this__4132__auto____$1);self__.__hash = h__3962__auto____$1;
return h__3962__auto____$1;
}
});
test.stock_game.Order.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4133__auto__,other__4134__auto__){var self__ = this;
var this__4133__auto____$1 = this;if(cljs.core.truth_((function (){var and__3539__auto__ = other__4134__auto__;if(cljs.core.truth_(and__3539__auto__))
{return ((this__4133__auto____$1.constructor === other__4134__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4133__auto____$1,other__4134__auto__));
} else
{return and__3539__auto__;
}
})()))
{return true;
} else
{return false;
}
});
test.stock_game.Order.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4146__auto__,k__4147__auto__){var self__ = this;
var this__4146__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"time","time",1385887882),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"cnt","cnt",283978798),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"price","price",22129180),null], null), null),k__4147__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4146__auto____$1),self__.__meta),k__4147__auto__);
} else
{return (new test.stock_game.Order(self__.id,self__.type,self__.price,self__.cnt,self__.time,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4147__auto__)),null));
}
});
test.stock_game.Order.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4144__auto__,k__4145__auto__,G__16036){var self__ = this;
var this__4144__auto____$1 = this;var pred__16040 = cljs.core.keyword_identical_QMARK_;var expr__16041 = k__4145__auto__;if(cljs.core.truth_(pred__16040.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__16041)))
{return (new test.stock_game.Order(G__16036,self__.type,self__.price,self__.cnt,self__.time,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16040.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__16041)))
{return (new test.stock_game.Order(self__.id,G__16036,self__.price,self__.cnt,self__.time,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16040.call(null,new cljs.core.Keyword(null,"price","price",22129180),expr__16041)))
{return (new test.stock_game.Order(self__.id,self__.type,G__16036,self__.cnt,self__.time,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16040.call(null,new cljs.core.Keyword(null,"cnt","cnt",283978798),expr__16041)))
{return (new test.stock_game.Order(self__.id,self__.type,self__.price,G__16036,self__.time,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16040.call(null,new cljs.core.Keyword(null,"time","time",1385887882),expr__16041)))
{return (new test.stock_game.Order(self__.id,self__.type,self__.price,self__.cnt,G__16036,self__.__meta,self__.__extmap,null));
} else
{return (new test.stock_game.Order(self__.id,self__.type,self__.price,self__.cnt,self__.time,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4145__auto__,G__16036),null));
}
}
}
}
}
});
test.stock_game.Order.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4149__auto__){var self__ = this;
var this__4149__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"price","price",22129180),self__.price],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cnt","cnt",283978798),self__.cnt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time","time",1385887882),self__.time],null))], null),self__.__extmap));
});
test.stock_game.Order.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4136__auto__,G__16036){var self__ = this;
var this__4136__auto____$1 = this;return (new test.stock_game.Order(self__.id,self__.type,self__.price,self__.cnt,self__.time,G__16036,self__.__extmap,self__.__hash));
});
test.stock_game.Order.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4142__auto__,entry__4143__auto__){var self__ = this;
var this__4142__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4143__auto__))
{return cljs.core._assoc.call(null,this__4142__auto____$1,cljs.core._nth.call(null,entry__4143__auto__,(0)),cljs.core._nth.call(null,entry__4143__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4142__auto____$1,entry__4143__auto__);
}
});
test.stock_game.Order.cljs$lang$type = true;
test.stock_game.Order.cljs$lang$ctorPrSeq = (function (this__4171__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"test.stock-game/Order");
});
test.stock_game.Order.cljs$lang$ctorPrWriter = (function (this__4171__auto__,writer__4172__auto__){return cljs.core._write.call(null,writer__4172__auto__,"test.stock-game/Order");
});
test.stock_game.__GT_Order = (function __GT_Order(id,type,price,cnt,time){return (new test.stock_game.Order(id,type,price,cnt,time));
});
test.stock_game.map__GT_Order = (function map__GT_Order(G__16038){return (new test.stock_game.Order(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__16038),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__16038),new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(G__16038),new cljs.core.Keyword(null,"cnt","cnt",283978798).cljs$core$IFn$_invoke$arity$1(G__16038),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(G__16038),null,cljs.core.dissoc.call(null,G__16038,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"price","price",22129180),new cljs.core.Keyword(null,"cnt","cnt",283978798),new cljs.core.Keyword(null,"time","time",1385887882))));
});

/**
* @constructor
* @param {*} id
* @param {*} buy
* @param {*} sell
* @param {*} time
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
test.stock_game.Deal = (function (id,buy,sell,time,__meta,__extmap){
this.id = id;
this.buy = buy;
this.sell = sell;
this.time = time;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
test.stock_game.Deal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4137__auto__,k__4138__auto__){var self__ = this;
var this__4137__auto____$1 = this;return cljs.core._lookup.call(null,this__4137__auto____$1,k__4138__auto__,null);
});
test.stock_game.Deal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4139__auto__,k16045,else__4140__auto__){var self__ = this;
var this__4139__auto____$1 = this;var G__16047 = (((k16045 instanceof cljs.core.Keyword))?k16045.fqn:null);switch (G__16047) {
case "time":
return self__.time;

break;
case "sell":
return self__.sell;

break;
case "buy":
return self__.buy;

break;
case "id":
return self__.id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k16045,else__4140__auto__);

}
});
test.stock_game.Deal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4151__auto__,writer__4152__auto__,opts__4153__auto__){var self__ = this;
var this__4151__auto____$1 = this;var pr_pair__4154__auto__ = ((function (this__4151__auto____$1){
return (function (keyval__4155__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4152__auto__,cljs.core.pr_writer,""," ","",opts__4153__auto__,keyval__4155__auto__);
});})(this__4151__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4152__auto__,pr_pair__4154__auto__,"#test.stock-game.Deal{",", ","}",opts__4153__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"buy","buy",-794379565),self__.buy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sell","sell",-1949004143),self__.sell],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time","time",1385887882),self__.time],null))], null),self__.__extmap));
});
test.stock_game.Deal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4135__auto__){var self__ = this;
var this__4135__auto____$1 = this;return self__.__meta;
});
test.stock_game.Deal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4131__auto__){var self__ = this;
var this__4131__auto____$1 = this;return (new test.stock_game.Deal(self__.id,self__.buy,self__.sell,self__.time,self__.__meta,self__.__extmap,self__.__hash));
});
test.stock_game.Deal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4141__auto__){var self__ = this;
var this__4141__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
test.stock_game.Deal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4132__auto__){var self__ = this;
var this__4132__auto____$1 = this;var h__3962__auto__ = self__.__hash;if(!((h__3962__auto__ == null)))
{return h__3962__auto__;
} else
{var h__3962__auto____$1 = cljs.core.hash_imap.call(null,this__4132__auto____$1);self__.__hash = h__3962__auto____$1;
return h__3962__auto____$1;
}
});
test.stock_game.Deal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4133__auto__,other__4134__auto__){var self__ = this;
var this__4133__auto____$1 = this;if(cljs.core.truth_((function (){var and__3539__auto__ = other__4134__auto__;if(cljs.core.truth_(and__3539__auto__))
{return ((this__4133__auto____$1.constructor === other__4134__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4133__auto____$1,other__4134__auto__));
} else
{return and__3539__auto__;
}
})()))
{return true;
} else
{return false;
}
});
test.stock_game.Deal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4146__auto__,k__4147__auto__){var self__ = this;
var this__4146__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"time","time",1385887882),null,new cljs.core.Keyword(null,"sell","sell",-1949004143),null,new cljs.core.Keyword(null,"buy","buy",-794379565),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__4147__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4146__auto____$1),self__.__meta),k__4147__auto__);
} else
{return (new test.stock_game.Deal(self__.id,self__.buy,self__.sell,self__.time,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4147__auto__)),null));
}
});
test.stock_game.Deal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4144__auto__,k__4145__auto__,G__16044){var self__ = this;
var this__4144__auto____$1 = this;var pred__16048 = cljs.core.keyword_identical_QMARK_;var expr__16049 = k__4145__auto__;if(cljs.core.truth_(pred__16048.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__16049)))
{return (new test.stock_game.Deal(G__16044,self__.buy,self__.sell,self__.time,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16048.call(null,new cljs.core.Keyword(null,"buy","buy",-794379565),expr__16049)))
{return (new test.stock_game.Deal(self__.id,G__16044,self__.sell,self__.time,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16048.call(null,new cljs.core.Keyword(null,"sell","sell",-1949004143),expr__16049)))
{return (new test.stock_game.Deal(self__.id,self__.buy,G__16044,self__.time,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__16048.call(null,new cljs.core.Keyword(null,"time","time",1385887882),expr__16049)))
{return (new test.stock_game.Deal(self__.id,self__.buy,self__.sell,G__16044,self__.__meta,self__.__extmap,null));
} else
{return (new test.stock_game.Deal(self__.id,self__.buy,self__.sell,self__.time,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4145__auto__,G__16044),null));
}
}
}
}
});
test.stock_game.Deal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4149__auto__){var self__ = this;
var this__4149__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"buy","buy",-794379565),self__.buy],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sell","sell",-1949004143),self__.sell],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"time","time",1385887882),self__.time],null))], null),self__.__extmap));
});
test.stock_game.Deal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4136__auto__,G__16044){var self__ = this;
var this__4136__auto____$1 = this;return (new test.stock_game.Deal(self__.id,self__.buy,self__.sell,self__.time,G__16044,self__.__extmap,self__.__hash));
});
test.stock_game.Deal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4142__auto__,entry__4143__auto__){var self__ = this;
var this__4142__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4143__auto__))
{return cljs.core._assoc.call(null,this__4142__auto____$1,cljs.core._nth.call(null,entry__4143__auto__,(0)),cljs.core._nth.call(null,entry__4143__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4142__auto____$1,entry__4143__auto__);
}
});
test.stock_game.Deal.cljs$lang$type = true;
test.stock_game.Deal.cljs$lang$ctorPrSeq = (function (this__4171__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"test.stock-game/Deal");
});
test.stock_game.Deal.cljs$lang$ctorPrWriter = (function (this__4171__auto__,writer__4172__auto__){return cljs.core._write.call(null,writer__4172__auto__,"test.stock-game/Deal");
});
test.stock_game.__GT_Deal = (function __GT_Deal(id,buy,sell,time){return (new test.stock_game.Deal(id,buy,sell,time));
});
test.stock_game.map__GT_Deal = (function map__GT_Deal(G__16046){return (new test.stock_game.Deal(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__16046),new cljs.core.Keyword(null,"buy","buy",-794379565).cljs$core$IFn$_invoke$arity$1(G__16046),new cljs.core.Keyword(null,"sell","sell",-1949004143).cljs$core$IFn$_invoke$arity$1(G__16046),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(G__16046),null,cljs.core.dissoc.call(null,G__16046,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"buy","buy",-794379565),new cljs.core.Keyword(null,"sell","sell",-1949004143),new cljs.core.Keyword(null,"time","time",1385887882))));
});
test.stock_game.deal = (function deal(orders){var map__16055 = cljs.core.group_by.call(null,new cljs.core.Keyword(null,"type","type",1174270348),orders);var map__16055__$1 = ((cljs.core.seq_QMARK_.call(null,map__16055))?cljs.core.apply.call(null,cljs.core.hash_map,map__16055):map__16055);var buys = cljs.core.get.call(null,map__16055__$1,new cljs.core.Keyword(null,"buy","buy",-794379565));var sells = cljs.core.get.call(null,map__16055__$1,new cljs.core.Keyword(null,"sell","sell",-1949004143));var sortedBuys = cljs.core.sort_by.call(null,((function (map__16055,map__16055__$1,buys,sells){
return (function (item){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(item)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(item)], null);
});})(map__16055,map__16055__$1,buys,sells))
,buys);var sortedSells = cljs.core.sort_by.call(null,((function (map__16055,map__16055__$1,buys,sells,sortedBuys){
return (function (item){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(item)),new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(item)], null);
});})(map__16055,map__16055__$1,buys,sells,sortedBuys))
,sells);return cljs.core.take_while.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.iterate.call(null,((function (map__16055,map__16055__$1,buys,sells,sortedBuys,sortedSells){
return (function (p__16056){var vec__16057 = p__16056;var buys__$1 = cljs.core.nth.call(null,vec__16057,(0),null);var sells__$1 = cljs.core.nth.call(null,vec__16057,(1),null);var deals = cljs.core.nth.call(null,vec__16057,(2),null);var buy = cljs.core.first.call(null,buys__$1);var sell = cljs.core.first.call(null,sells__$1);if((new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(buy) >= new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(sell)))
{if((new cljs.core.Keyword(null,"cnt","cnt",283978798).cljs$core$IFn$_invoke$arity$1(buy) > new cljs.core.Keyword(null,"cnt","cnt",283978798).cljs$core$IFn$_invoke$arity$1(sell)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cons.call(null,cljs.core.assoc.call(null,buy,new cljs.core.Keyword(null,"cnt","cnt",283978798),(new cljs.core.Keyword(null,"cnt","cnt",283978798).cljs$core$IFn$_invoke$arity$1(buy) - new cljs.core.Keyword(null,"cnt","cnt",283978798).cljs$core$IFn$_invoke$arity$1(sell))),cljs.core.rest.call(null,buys__$1)),cljs.core.rest.call(null,sells__$1),cljs.core.cons.call(null,(new test.stock_game.Deal((0),buy,sell,(0))),deals)], null);
} else
{if((new cljs.core.Keyword(null,"cnt","cnt",283978798).cljs$core$IFn$_invoke$arity$1(buy) < new cljs.core.Keyword(null,"cnt","cnt",283978798).cljs$core$IFn$_invoke$arity$1(sell)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,buys__$1),cljs.core.cons.call(null,cljs.core.assoc.call(null,sell,new cljs.core.Keyword(null,"cnt","cnt",283978798),(new cljs.core.Keyword(null,"cnt","cnt",283978798).cljs$core$IFn$_invoke$arity$1(sell) - new cljs.core.Keyword(null,"cnt","cnt",283978798).cljs$core$IFn$_invoke$arity$1(buy))),cljs.core.rest.call(null,sells__$1)),cljs.core.cons.call(null,(new test.stock_game.Deal((0),buy,sell,(0))),deals)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,buys__$1),cljs.core.rest.call(null,sells__$1),cljs.core.cons.call(null,(new test.stock_game.Deal((0),buy,sell,(0))),deals)], null);
} else
{return null;
}
}
}
} else
{return null;
}
});})(map__16055,map__16055__$1,buys,sells,sortedBuys,sortedSells))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sortedBuys,sortedSells,cljs.core.List.EMPTY], null)));
});
