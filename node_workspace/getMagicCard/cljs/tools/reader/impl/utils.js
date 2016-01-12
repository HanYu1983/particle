// Compiled by ClojureScript 0.0-2268
goog.provide('cljs.tools.reader.impl.utils');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.string');
cljs.tools.reader.impl.utils.char$ = (function char$(x){if((x == null))
{return null;
} else
{return cljs.core.char$.call(null,x);
}
});
cljs.tools.reader.impl.utils.ex_info_QMARK_ = (function ex_info_QMARK_(ex){return (ex instanceof cljs.core.ExceptionInfo);
});

/**
* @constructor
* @param {*} splicing_QMARK_
* @param {*} form
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.tools.reader.impl.utils.ReaderConditional = (function (splicing_QMARK_,form,__meta,__extmap){
this.splicing_QMARK_ = splicing_QMARK_;
this.form = form;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4235__auto__,k__4236__auto__){var self__ = this;
var this__4235__auto____$1 = this;return cljs.core._lookup.call(null,this__4235__auto____$1,k__4236__auto__,null);
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4237__auto__,k5661,else__4238__auto__){var self__ = this;
var this__4237__auto____$1 = this;var G__5663 = (((k5661 instanceof cljs.core.Keyword))?k5661.fqn:null);switch (G__5663) {
case "form":
return self__.form;

break;
case "splicing?":
return self__.splicing_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k5661,else__4238__auto__);

}
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4249__auto__,writer__4250__auto__,opts__4251__auto__){var self__ = this;
var this__4249__auto____$1 = this;var pr_pair__4252__auto__ = ((function (this__4249__auto____$1){
return (function (keyval__4253__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4250__auto__,cljs.core.pr_writer,""," ","",opts__4251__auto__,keyval__4253__auto__);
});})(this__4249__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4250__auto__,pr_pair__4252__auto__,"#cljs.tools.reader.impl.utils.ReaderConditional{",", ","}",opts__4251__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4233__auto__){var self__ = this;
var this__4233__auto____$1 = this;return self__.__meta;
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4229__auto__){var self__ = this;
var this__4229__auto____$1 = this;return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4239__auto__){var self__ = this;
var this__4239__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4230__auto__){var self__ = this;
var this__4230__auto____$1 = this;var h__4060__auto__ = self__.__hash;if(!((h__4060__auto__ == null)))
{return h__4060__auto__;
} else
{var h__4060__auto____$1 = cljs.core.hash_imap.call(null,this__4230__auto____$1);self__.__hash = h__4060__auto____$1;
return h__4060__auto____$1;
}
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4231__auto__,other__4232__auto__){var self__ = this;
var this__4231__auto____$1 = this;if(cljs.core.truth_((function (){var and__3637__auto__ = other__4232__auto__;if(cljs.core.truth_(and__3637__auto__))
{return ((this__4231__auto____$1.constructor === other__4232__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4231__auto____$1,other__4232__auto__));
} else
{return and__3637__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4244__auto__,k__4245__auto__){var self__ = this;
var this__4244__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),null,new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__4245__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4244__auto____$1),self__.__meta),k__4245__auto__);
} else
{return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4245__auto__)),null));
}
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4242__auto__,k__4243__auto__,G__5660){var self__ = this;
var this__4242__auto____$1 = this;var pred__5664 = cljs.core.keyword_identical_QMARK_;var expr__5665 = k__4243__auto__;if(cljs.core.truth_(pred__5664.call(null,new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),expr__5665)))
{return (new cljs.tools.reader.impl.utils.ReaderConditional(G__5660,self__.form,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__5664.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),expr__5665)))
{return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,G__5660,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4243__auto__,G__5660),null));
}
}
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4247__auto__){var self__ = this;
var this__4247__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4234__auto__,G__5660){var self__ = this;
var this__4234__auto____$1 = this;return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,G__5660,self__.__extmap,self__.__hash));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4240__auto__,entry__4241__auto__){var self__ = this;
var this__4240__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4241__auto__))
{return cljs.core._assoc.call(null,this__4240__auto____$1,cljs.core._nth.call(null,entry__4241__auto__,(0)),cljs.core._nth.call(null,entry__4241__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4240__auto____$1,entry__4241__auto__);
}
});
cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$type = true;
cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrSeq = (function (this__4269__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.tools.reader.impl.utils/ReaderConditional");
});
cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrWriter = (function (this__4269__auto__,writer__4270__auto__){return cljs.core._write.call(null,writer__4270__auto__,"cljs.tools.reader.impl.utils/ReaderConditional");
});
cljs.tools.reader.impl.utils.__GT_ReaderConditional = (function __GT_ReaderConditional(splicing_QMARK_,form){return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form));
});
cljs.tools.reader.impl.utils.map__GT_ReaderConditional = (function map__GT_ReaderConditional(G__5662){return (new cljs.tools.reader.impl.utils.ReaderConditional(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(G__5662),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__5662),null,cljs.core.dissoc.call(null,G__5662,new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),new cljs.core.Keyword(null,"form","form",-1624062471))));
});
/**
* Return true if the value is the data representation of a reader conditional
*/
cljs.tools.reader.impl.utils.reader_conditional_QMARK_ = (function reader_conditional_QMARK_(value){return (value instanceof cljs.tools.reader.impl.utils.ReaderConditional);
});
/**
* Construct a data representation of a reader conditional.
* If true, splicing? indicates read-cond-splicing.
*/
cljs.tools.reader.impl.utils.reader_conditional = (function reader_conditional(form,splicing_QMARK_){return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){var coll__$1 = this;cljs.core._write.call(null,writer,("#?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(coll__$1))?"@":null))));
return cljs.core.pr_writer.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(coll__$1),writer,opts);
});
cljs.tools.reader.impl.utils.ws_rx = /[\s]/;
/**
* Checks whether a given character is whitespace
*/
cljs.tools.reader.impl.utils.whitespace_QMARK_ = (function whitespace_QMARK_(ch){if((ch == null))
{return null;
} else
{if((ch === ","))
{return true;
} else
{return cljs.tools.reader.impl.utils.ws_rx.test(ch);
}
}
});
/**
* Checks whether a given character is numeric
*/
cljs.tools.reader.impl.utils.numeric_QMARK_ = (function numeric_QMARK_(ch){if((ch == null))
{return null;
} else
{return goog.string.isNumeric(ch);
}
});
/**
* Checks whether the character is a newline
*/
cljs.tools.reader.impl.utils.newline_QMARK_ = (function newline_QMARK_(c){return (("\n" === c)) || (("\n" === c)) || ((c == null));
});
/**
* Resolves syntactical sugar in metadata
*/
cljs.tools.reader.impl.utils.desugar_meta = (function desugar_meta(f){if((f instanceof cljs.core.Keyword))
{return new cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else
{if((f instanceof cljs.core.Symbol))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else
{if(typeof f === 'string')
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return f;
} else
{return null;
}
}
}
}
});
cljs.tools.reader.impl.utils.last_id = cljs.core.atom.call(null,(0));
cljs.tools.reader.impl.utils.next_id = (function next_id(){return cljs.core.swap_BANG_.call(null,cljs.tools.reader.impl.utils.last_id,cljs.core.inc);
});
