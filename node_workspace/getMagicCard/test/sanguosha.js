// Compiled by ClojureScript 0.0-2268
goog.provide('test.sanguosha');
goog.require('cljs.core');
goog.require('lib.tool');
goog.require('lib.tool');
test.sanguosha.async = require("async");
test.sanguosha.url = (function url(page){return ("http://tcg.sanguosha.com/card/list?page="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(page));
});
test.sanguosha.detail = (function detail(id){return ("http://tcg.sanguosha.com/card/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/detail");
});
test.sanguosha.test_base = (function test_base(){return test.sanguosha.async.series(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__5116_SHARP_){return cljs.core.partial.call(null,lib.tool.delayFn,(1000),p1__5116_SHARP_);
}),cljs.core.map.call(null,(function (p1__5115_SHARP_){return cljs.core.partial.call(null,lib.tool.getUrl,p1__5115_SHARP_);
}),cljs.core.map.call(null,test.sanguosha.url,cljs.core.range.call(null,(0),(2)))))),(function (err,datas){return console.log(err);
}));
});
