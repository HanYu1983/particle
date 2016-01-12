// Compiled by ClojureScript 0.0-2268
goog.provide('cljs.tools.reader.reader_types');
goog.require('cljs.core');
goog.require('cljs.tools.reader.impl.utils');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
goog.require('cljs.tools.reader.impl.utils');
cljs.tools.reader.reader_types.Reader = (function (){var obj5669 = {};return obj5669;
})();
cljs.tools.reader.reader_types.read_char = (function read_char(reader){if((function (){var and__3637__auto__ = reader;if(and__3637__auto__)
{return reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1;
} else
{return and__3637__auto__;
}
})())
{return reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(reader);
} else
{var x__4276__auto__ = (((reader == null))?null:reader);return (function (){var or__3649__auto__ = (cljs.tools.reader.reader_types.read_char[goog.typeOf(x__4276__auto__)]);if(or__3649__auto__)
{return or__3649__auto__;
} else
{var or__3649__auto____$1 = (cljs.tools.reader.reader_types.read_char["_"]);if(or__3649__auto____$1)
{return or__3649__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.tools.reader.reader_types.peek_char = (function peek_char(reader){if((function (){var and__3637__auto__ = reader;if(and__3637__auto__)
{return reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1;
} else
{return and__3637__auto__;
}
})())
{return reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(reader);
} else
{var x__4276__auto__ = (((reader == null))?null:reader);return (function (){var or__3649__auto__ = (cljs.tools.reader.reader_types.peek_char[goog.typeOf(x__4276__auto__)]);if(or__3649__auto__)
{return or__3649__auto__;
} else
{var or__3649__auto____$1 = (cljs.tools.reader.reader_types.peek_char["_"]);if(or__3649__auto____$1)
{return or__3649__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Reader.peek-char",reader);
}
}
})().call(null,reader);
}
});
cljs.tools.reader.reader_types.IPushbackReader = (function (){var obj5671 = {};return obj5671;
})();
cljs.tools.reader.reader_types.unread = (function unread(reader,ch){if((function (){var and__3637__auto__ = reader;if(and__3637__auto__)
{return reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2;
} else
{return and__3637__auto__;
}
})())
{return reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(reader,ch);
} else
{var x__4276__auto__ = (((reader == null))?null:reader);return (function (){var or__3649__auto__ = (cljs.tools.reader.reader_types.unread[goog.typeOf(x__4276__auto__)]);if(or__3649__auto__)
{return or__3649__auto__;
} else
{var or__3649__auto____$1 = (cljs.tools.reader.reader_types.unread["_"]);if(or__3649__auto____$1)
{return or__3649__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});
cljs.tools.reader.reader_types.IndexingReader = (function (){var obj5673 = {};return obj5673;
})();
cljs.tools.reader.reader_types.get_line_number = (function get_line_number(reader){if((function (){var and__3637__auto__ = reader;if(and__3637__auto__)
{return reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1;
} else
{return and__3637__auto__;
}
})())
{return reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(reader);
} else
{var x__4276__auto__ = (((reader == null))?null:reader);return (function (){var or__3649__auto__ = (cljs.tools.reader.reader_types.get_line_number[goog.typeOf(x__4276__auto__)]);if(or__3649__auto__)
{return or__3649__auto__;
} else
{var or__3649__auto____$1 = (cljs.tools.reader.reader_types.get_line_number["_"]);if(or__3649__auto____$1)
{return or__3649__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexingReader.get-line-number",reader);
}
}
})().call(null,reader);
}
});
cljs.tools.reader.reader_types.get_column_number = (function get_column_number(reader){if((function (){var and__3637__auto__ = reader;if(and__3637__auto__)
{return reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1;
} else
{return and__3637__auto__;
}
})())
{return reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(reader);
} else
{var x__4276__auto__ = (((reader == null))?null:reader);return (function (){var or__3649__auto__ = (cljs.tools.reader.reader_types.get_column_number[goog.typeOf(x__4276__auto__)]);if(or__3649__auto__)
{return or__3649__auto__;
} else
{var or__3649__auto____$1 = (cljs.tools.reader.reader_types.get_column_number["_"]);if(or__3649__auto____$1)
{return or__3649__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexingReader.get-column-number",reader);
}
}
})().call(null,reader);
}
});
cljs.tools.reader.reader_types.get_file_name = (function get_file_name(reader){if((function (){var and__3637__auto__ = reader;if(and__3637__auto__)
{return reader.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1;
} else
{return and__3637__auto__;
}
})())
{return reader.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1(reader);
} else
{var x__4276__auto__ = (((reader == null))?null:reader);return (function (){var or__3649__auto__ = (cljs.tools.reader.reader_types.get_file_name[goog.typeOf(x__4276__auto__)]);if(or__3649__auto__)
{return or__3649__auto__;
} else
{var or__3649__auto____$1 = (cljs.tools.reader.reader_types.get_file_name["_"]);if(or__3649__auto____$1)
{return or__3649__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexingReader.get-file-name",reader);
}
}
})().call(null,reader);
}
});

/**
* @constructor
*/
cljs.tools.reader.reader_types.StringReader = (function (s,s_len,s_pos){
this.s = s;
this.s_len = s_len;
this.s_pos = s_pos;
})
cljs.tools.reader.reader_types.StringReader.cljs$lang$type = true;
cljs.tools.reader.reader_types.StringReader.cljs$lang$ctorStr = "cljs.tools.reader.reader-types/StringReader";
cljs.tools.reader.reader_types.StringReader.cljs$lang$ctorPrWriter = (function (this__4216__auto__,writer__4217__auto__,opt__4218__auto__){return cljs.core._write.call(null,writer__4217__auto__,"cljs.tools.reader.reader-types/StringReader");
});
cljs.tools.reader.reader_types.StringReader.prototype.cljs$tools$reader$reader_types$Reader$ = true;
cljs.tools.reader.reader_types.StringReader.prototype.cljs$tools$reader$reader_types$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.s_len > self__.s_pos))
{var r = self__.s.charAt(self__.s_pos);self__.s_pos = (self__.s_pos + (1));
return r;
} else
{return null;
}
});
cljs.tools.reader.reader_types.StringReader.prototype.cljs$tools$reader$reader_types$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if((self__.s_len > self__.s_pos))
{return self__.s.charAt(self__.s_pos);
} else
{return null;
}
});
cljs.tools.reader.reader_types.__GT_StringReader = (function __GT_StringReader(s,s_len,s_pos){return (new cljs.tools.reader.reader_types.StringReader(s,s_len,s_pos));
});

/**
* @constructor
*/
cljs.tools.reader.reader_types.NodeReadableReader = (function (readable,buf){
this.readable = readable;
this.buf = buf;
})
cljs.tools.reader.reader_types.NodeReadableReader.cljs$lang$type = true;
cljs.tools.reader.reader_types.NodeReadableReader.cljs$lang$ctorStr = "cljs.tools.reader.reader-types/NodeReadableReader";
cljs.tools.reader.reader_types.NodeReadableReader.cljs$lang$ctorPrWriter = (function (this__4216__auto__,writer__4217__auto__,opt__4218__auto__){return cljs.core._write.call(null,writer__4217__auto__,"cljs.tools.reader.reader-types/NodeReadableReader");
});
cljs.tools.reader.reader_types.NodeReadableReader.prototype.cljs$tools$reader$reader_types$Reader$ = true;
cljs.tools.reader.reader_types.NodeReadableReader.prototype.cljs$tools$reader$reader_types$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(self__.buf))
{var c = (self__.buf[(0)]);self__.buf = null;
return cljs.tools.reader.impl.utils.char$.call(null,c);
} else
{var c = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.readable.read((1))));if(cljs.core.truth_(c))
{return cljs.tools.reader.impl.utils.char$.call(null,c);
} else
{return null;
}
}
});
cljs.tools.reader.reader_types.NodeReadableReader.prototype.cljs$tools$reader$reader_types$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(self__.buf))
{} else
{self__.buf = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.readable.read((1))));
}
if(cljs.core.truth_(self__.buf))
{return cljs.tools.reader.impl.utils.char$.call(null,(self__.buf[(0)]));
} else
{return null;
}
});
cljs.tools.reader.reader_types.__GT_NodeReadableReader = (function __GT_NodeReadableReader(readable,buf){return (new cljs.tools.reader.reader_types.NodeReadableReader(readable,buf));
});

/**
* @constructor
*/
cljs.tools.reader.reader_types.PushbackReader = (function (rdr,buf,buf_len,buf_pos){
this.rdr = rdr;
this.buf = buf;
this.buf_len = buf_len;
this.buf_pos = buf_pos;
})
cljs.tools.reader.reader_types.PushbackReader.cljs$lang$type = true;
cljs.tools.reader.reader_types.PushbackReader.cljs$lang$ctorStr = "cljs.tools.reader.reader-types/PushbackReader";
cljs.tools.reader.reader_types.PushbackReader.cljs$lang$ctorPrWriter = (function (this__4216__auto__,writer__4217__auto__,opt__4218__auto__){return cljs.core._write.call(null,writer__4217__auto__,"cljs.tools.reader.reader-types/PushbackReader");
});
cljs.tools.reader.reader_types.PushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$ = true;
cljs.tools.reader.reader_types.PushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(ch))
{if((self__.buf_pos === (0)))
{throw (new Error("Pushback buffer is full"));
} else
{}
self__.buf_pos = (self__.buf_pos - (1));
return (self__.buf[self__.buf_pos] = ch);
} else
{return null;
}
});
cljs.tools.reader.reader_types.PushbackReader.prototype.cljs$tools$reader$reader_types$Reader$ = true;
cljs.tools.reader.reader_types.PushbackReader.prototype.cljs$tools$reader$reader_types$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;var c = (((self__.buf_pos < self__.buf_len))?(self__.buf[self__.buf_pos]):cljs.tools.reader.reader_types.read_char.call(null,self__.rdr));if((self__.buf_pos < self__.buf_len))
{self__.buf_pos = (self__.buf_pos + (1));
} else
{}
return cljs.tools.reader.impl.utils.char$.call(null,c);
});
cljs.tools.reader.reader_types.PushbackReader.prototype.cljs$tools$reader$reader_types$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;var c = (((self__.buf_pos < self__.buf_len))?(self__.buf[self__.buf_pos]):cljs.tools.reader.reader_types.peek_char.call(null,self__.rdr));return cljs.tools.reader.impl.utils.char$.call(null,c);
});
cljs.tools.reader.reader_types.__GT_PushbackReader = (function __GT_PushbackReader(rdr,buf,buf_len,buf_pos){return (new cljs.tools.reader.reader_types.PushbackReader(rdr,buf,buf_len,buf_pos));
});
cljs.tools.reader.reader_types.normalize_newline = (function normalize_newline(rdr,ch){if(("\r" === ch))
{var c = cljs.tools.reader.reader_types.peek_char.call(null,rdr);if((("\f" === c)) || (("\n" === c)))
{cljs.tools.reader.reader_types.read_char.call(null,rdr);
} else
{}
return "\n";
} else
{return ch;
}
});

/**
* @constructor
*/
cljs.tools.reader.reader_types.IndexingPushbackReader = (function (rdr,line,column,line_start_QMARK_,prev,prev_column,file_name){
this.rdr = rdr;
this.line = line;
this.column = column;
this.line_start_QMARK_ = line_start_QMARK_;
this.prev = prev;
this.prev_column = prev_column;
this.file_name = file_name;
})
cljs.tools.reader.reader_types.IndexingPushbackReader.cljs$lang$type = true;
cljs.tools.reader.reader_types.IndexingPushbackReader.cljs$lang$ctorStr = "cljs.tools.reader.reader-types/IndexingPushbackReader";
cljs.tools.reader.reader_types.IndexingPushbackReader.cljs$lang$ctorPrWriter = (function (this__4216__auto__,writer__4217__auto__,opt__4218__auto__){return cljs.core._write.call(null,writer__4217__auto__,"cljs.tools.reader.reader-types/IndexingPushbackReader");
});
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$ = true;
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.line | (0));
});
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.column | (0));
});
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return self__.file_name;
});
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$ = true;
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.line = (self__.line - (1));
self__.column = self__.prev_column;
} else
{self__.column = (self__.column - (1));
}
self__.line_start_QMARK_ = self__.prev;
return cljs.tools.reader.reader_types.unread.call(null,self__.rdr,ch);
});
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$ = true;
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;var temp__4126__auto__ = cljs.tools.reader.reader_types.read_char.call(null,self__.rdr);if(cljs.core.truth_(temp__4126__auto__))
{var ch = temp__4126__auto__;var ch__$1 = cljs.tools.reader.reader_types.normalize_newline.call(null,self__.rdr,ch);self__.prev = self__.line_start_QMARK_;
self__.line_start_QMARK_ = cljs.tools.reader.impl.utils.newline_QMARK_.call(null,ch__$1);
if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.prev_column = self__.column;
self__.column = (0);
self__.line = (self__.line + (1));
} else
{}
self__.column = (self__.column + (1));
return ch__$1;
} else
{return null;
}
});
cljs.tools.reader.reader_types.IndexingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return cljs.tools.reader.reader_types.peek_char.call(null,self__.rdr);
});
cljs.tools.reader.reader_types.__GT_IndexingPushbackReader = (function __GT_IndexingPushbackReader(rdr,line,column,line_start_QMARK_,prev,prev_column,file_name){return (new cljs.tools.reader.reader_types.IndexingPushbackReader(rdr,line,column,line_start_QMARK_,prev,prev_column,file_name));
});
/**
* Returns an object of the same type and value as `obj`, with its
* metadata merged over `m`.
*/
cljs.tools.reader.reader_types.merge_meta = (function merge_meta(obj,m){var orig_meta = cljs.core.meta.call(null,obj);return cljs.core.with_meta.call(null,obj,cljs.core.merge.call(null,m,cljs.core.dissoc.call(null,orig_meta,new cljs.core.Keyword(null,"source","source",-433931539))));
});
/**
* Returns a string containing the contents of the top most source
* logging frame.
*/
cljs.tools.reader.reader_types.peek_source_log = (function peek_source_log(frames){return cljs.core.subs.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(frames))),cljs.core.first.call(null,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(frames)));
});
/**
* Logs `char` to all currently active source logging frames.
*/
cljs.tools.reader.reader_types.log_source_char = (function log_source_char(frames,char$){var temp__4126__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(frames);if(cljs.core.truth_(temp__4126__auto__))
{var buffer = temp__4126__auto__;return buffer.append(char$);
} else
{return null;
}
});
/**
* Removes the last logged character from all currently active source
* logging frames. Called when pushing a character back.
*/
cljs.tools.reader.reader_types.drop_last_logged_char = (function drop_last_logged_char(frames){var temp__4126__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(frames);if(cljs.core.truth_(temp__4126__auto__))
{var buffer = temp__4126__auto__;return buffer.set(cljs.core.subs.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(buffer)),(0),(buffer.getLength() - (1))));
} else
{return null;
}
});

/**
* @constructor
*/
cljs.tools.reader.reader_types.SourceLoggingPushbackReader = (function (rdr,line,column,line_start_QMARK_,prev,prev_column,file_name,frames){
this.rdr = rdr;
this.line = line;
this.column = column;
this.line_start_QMARK_ = line_start_QMARK_;
this.prev = prev;
this.prev_column = prev_column;
this.file_name = file_name;
this.frames = frames;
})
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.cljs$lang$type = true;
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.cljs$lang$ctorStr = "cljs.tools.reader.reader-types/SourceLoggingPushbackReader";
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.cljs$lang$ctorPrWriter = (function (this__4216__auto__,writer__4217__auto__,opt__4218__auto__){return cljs.core._write.call(null,writer__4217__auto__,"cljs.tools.reader.reader-types/SourceLoggingPushbackReader");
});
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$ = true;
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.line | (0));
});
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return (self__.column | (0));
});
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IndexingReader$get_file_name$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return self__.file_name;
});
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$ = true;
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2 = (function (reader,ch){var self__ = this;
var reader__$1 = this;if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.line = (self__.line - (1));
self__.column = self__.prev_column;
} else
{self__.column = (self__.column - (1));
}
self__.line_start_QMARK_ = self__.prev;
if(cljs.core.truth_(ch))
{cljs.tools.reader.reader_types.drop_last_logged_char.call(null,cljs.core.deref.call(null,self__.frames));
} else
{}
return cljs.tools.reader.reader_types.unread.call(null,self__.rdr,ch);
});
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$ = true;
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$read_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;var temp__4126__auto__ = cljs.tools.reader.reader_types.read_char.call(null,self__.rdr);if(cljs.core.truth_(temp__4126__auto__))
{var ch = temp__4126__auto__;var ch__$1 = cljs.tools.reader.reader_types.normalize_newline.call(null,self__.rdr,ch);self__.prev = self__.line_start_QMARK_;
self__.line_start_QMARK_ = cljs.tools.reader.impl.utils.newline_QMARK_.call(null,ch__$1);
if(cljs.core.truth_(self__.line_start_QMARK_))
{self__.prev_column = self__.column;
self__.column = (0);
self__.line = (self__.line + (1));
} else
{}
self__.column = (self__.column + (1));
cljs.tools.reader.reader_types.log_source_char.call(null,cljs.core.deref.call(null,self__.frames),ch__$1);
return ch__$1;
} else
{return null;
}
});
cljs.tools.reader.reader_types.SourceLoggingPushbackReader.prototype.cljs$tools$reader$reader_types$Reader$peek_char$arity$1 = (function (reader){var self__ = this;
var reader__$1 = this;return cljs.tools.reader.reader_types.peek_char.call(null,self__.rdr);
});
cljs.tools.reader.reader_types.__GT_SourceLoggingPushbackReader = (function __GT_SourceLoggingPushbackReader(rdr,line,column,line_start_QMARK_,prev,prev_column,file_name,frames){return (new cljs.tools.reader.reader_types.SourceLoggingPushbackReader(rdr,line,column,line_start_QMARK_,prev,prev_column,file_name,frames));
});
/**
* Returns true if the reader satisfies IndexingReader
*/
cljs.tools.reader.reader_types.indexing_reader_QMARK_ = (function indexing_reader_QMARK_(rdr){var G__5675 = rdr;if(G__5675)
{var bit__4292__auto__ = null;if(cljs.core.truth_((function (){var or__3649__auto__ = bit__4292__auto__;if(cljs.core.truth_(or__3649__auto__))
{return or__3649__auto__;
} else
{return G__5675.cljs$tools$reader$reader_types$IndexingReader$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
});
/**
* Creates a StringReader from a given string
*/
cljs.tools.reader.reader_types.string_reader = (function string_reader(s){return (new cljs.tools.reader.reader_types.StringReader(s,cljs.core.count.call(null,s),(0)));
});
/**
* Creates a PushbackReader from a given string
*/
cljs.tools.reader.reader_types.string_push_back_reader = (function() {
var string_push_back_reader = null;
var string_push_back_reader__1 = (function (s){return string_push_back_reader.call(null,s,(1));
});
var string_push_back_reader__2 = (function (s,buf_len){return (new cljs.tools.reader.reader_types.PushbackReader(cljs.tools.reader.reader_types.string_reader.call(null,s),cljs.core.object_array.call(null,buf_len),buf_len,buf_len));
});
string_push_back_reader = function(s,buf_len){
switch(arguments.length){
case 1:
return string_push_back_reader__1.call(this,s);
case 2:
return string_push_back_reader__2.call(this,s,buf_len);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
string_push_back_reader.cljs$core$IFn$_invoke$arity$1 = string_push_back_reader__1;
string_push_back_reader.cljs$core$IFn$_invoke$arity$2 = string_push_back_reader__2;
return string_push_back_reader;
})()
;
cljs.tools.reader.reader_types.node_readable_push_back_reader = (function node_readable_push_back_reader(readable){return (new cljs.tools.reader.reader_types.PushbackReader((new cljs.tools.reader.reader_types.NodeReadableReader(readable,null)),cljs.core.object_array.call(null,(1)),(1),(1)));
});
/**
* Creates an IndexingPushbackReader from a given string or PushbackReader
*/
cljs.tools.reader.reader_types.indexing_push_back_reader = (function() {
var indexing_push_back_reader = null;
var indexing_push_back_reader__1 = (function (s_or_rdr){return indexing_push_back_reader.call(null,s_or_rdr,(1));
});
var indexing_push_back_reader__2 = (function (s_or_rdr,buf_len){return indexing_push_back_reader.call(null,s_or_rdr,buf_len,null);
});
var indexing_push_back_reader__3 = (function (s_or_rdr,buf_len,file_name){return (new cljs.tools.reader.reader_types.IndexingPushbackReader(((typeof s_or_rdr === 'string')?cljs.tools.reader.reader_types.string_push_back_reader.call(null,s_or_rdr,buf_len):s_or_rdr),(1),(1),true,null,(0),file_name));
});
indexing_push_back_reader = function(s_or_rdr,buf_len,file_name){
switch(arguments.length){
case 1:
return indexing_push_back_reader__1.call(this,s_or_rdr);
case 2:
return indexing_push_back_reader__2.call(this,s_or_rdr,buf_len);
case 3:
return indexing_push_back_reader__3.call(this,s_or_rdr,buf_len,file_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1 = indexing_push_back_reader__1;
indexing_push_back_reader.cljs$core$IFn$_invoke$arity$2 = indexing_push_back_reader__2;
indexing_push_back_reader.cljs$core$IFn$_invoke$arity$3 = indexing_push_back_reader__3;
return indexing_push_back_reader;
})()
;
/**
* Creates a SourceLoggingPushbackReader from a given string or PushbackReader
*/
cljs.tools.reader.reader_types.source_logging_push_back_reader = (function() {
var source_logging_push_back_reader = null;
var source_logging_push_back_reader__1 = (function (s_or_rdr){return source_logging_push_back_reader.call(null,s_or_rdr,(1));
});
var source_logging_push_back_reader__2 = (function (s_or_rdr,buf_len){return source_logging_push_back_reader.call(null,s_or_rdr,buf_len,null);
});
var source_logging_push_back_reader__3 = (function (s_or_rdr,buf_len,file_name){return (new cljs.tools.reader.reader_types.SourceLoggingPushbackReader(((typeof s_or_rdr === 'string')?cljs.tools.reader.reader_types.string_push_back_reader.call(null,s_or_rdr,buf_len):s_or_rdr),(1),(1),true,null,(0),file_name,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"buffer","buffer",617295198),(new goog.string.StringBuffer()),new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.list((0))], null))));
});
source_logging_push_back_reader = function(s_or_rdr,buf_len,file_name){
switch(arguments.length){
case 1:
return source_logging_push_back_reader__1.call(this,s_or_rdr);
case 2:
return source_logging_push_back_reader__2.call(this,s_or_rdr,buf_len);
case 3:
return source_logging_push_back_reader__3.call(this,s_or_rdr,buf_len,file_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$1 = source_logging_push_back_reader__1;
source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$2 = source_logging_push_back_reader__2;
source_logging_push_back_reader.cljs$core$IFn$_invoke$arity$3 = source_logging_push_back_reader__3;
return source_logging_push_back_reader;
})()
;
/**
* Reads a line from the reader or from *in* if no reader is specified
*/
cljs.tools.reader.reader_types.read_line = (function read_line(rdr){var c = cljs.tools.reader.reader_types.read_char.call(null,rdr);var s = (new goog.string.StringBuffer());while(true){
if(cljs.tools.reader.impl.utils.newline_QMARK_.call(null,c))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
} else
{{
var G__5676 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
var G__5677 = s.append(c);
c = G__5676;
s = G__5677;
continue;
}
}
break;
}
});
/**
* Throws an ExceptionInfo with the given message.
* If rdr is an IndexingReader, additional information about column and line number is provided
* @param {...*} var_args
*/
cljs.tools.reader.reader_types.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098)], null),((cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))?cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),cljs.tools.reader.reader_types.get_line_number.call(null,rdr),new cljs.core.Keyword(null,"column","column",2078222095),cljs.tools.reader.reader_types.get_column_number.call(null,rdr)], null),(function (){var temp__4126__auto__ = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);if(cljs.core.truth_(temp__4126__auto__))
{var file_name = temp__4126__auto__;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file_name], null);
} else
{return null;
}
})()):null)));
};
var reader_error = function (rdr,var_args){
var msg = null;if (arguments.length > 1) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return reader_error__delegate.call(this,rdr,msg);};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__5678){
var rdr = cljs.core.first(arglist__5678);
var msg = cljs.core.rest(arglist__5678);
return reader_error__delegate(rdr,msg);
});
reader_error.cljs$core$IFn$_invoke$arity$variadic = reader_error__delegate;
return reader_error;
})()
;
cljs.tools.reader.reader_types.source_logging_reader_QMARK_ = (function source_logging_reader_QMARK_(rdr){return (rdr instanceof cljs.tools.reader.reader_types.SourceLoggingPushbackReader);
});
/**
* Returns true if rdr is an IndexingReader and the current char starts a new line
*/
cljs.tools.reader.reader_types.line_start_QMARK_ = (function line_start_QMARK_(rdr){if(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))
{return ((1) === cljs.tools.reader.reader_types.get_column_number.call(null,rdr));
} else
{return null;
}
});
cljs.tools.reader.reader_types.log_source_STAR_ = (function log_source_STAR_(reader,f){var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reader.frames));try{cljs.core.swap_BANG_.call(null,reader.frames,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),cljs.core.conj,buffer.getLength());
var ret = f.call(null);if((function (){var G__5680 = ret;if(G__5680)
{var bit__4292__auto__ = (G__5680.cljs$lang$protocol_mask$partition0$ & (131072));if((bit__4292__auto__) || (G__5680.cljs$core$IMeta$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.tools.reader.reader_types.merge_meta.call(null,ret,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),cljs.tools.reader.reader_types.peek_source_log.call(null,cljs.core.deref.call(null,reader.frames))], null));
} else
{return ret;
}
}finally {cljs.core.swap_BANG_.call(null,reader.frames,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311)], null),cljs.core.rest);
}});
