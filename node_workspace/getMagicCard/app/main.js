// Compiled by ClojureScript 0.0-2268
goog.provide('app.main');
goog.require('cljs.core');
goog.require('test.getGundamCard');
goog.require('lib.tool');
goog.require('test.yugioh');
goog.require('test.getSangoCard');
goog.require('test.dragonZ');
goog.require('test.gundamWar');
goog.require('test.sanguosha');
goog.require('lib.tool');
goog.require('test.getMagicCard');
goog.require('test.crusade');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('test.gundamWarN');
app.main.yargs = require("yargs");
app.main.async = require("async");
app.main.fs = require("fs");
app.main._main = (function _main(){var argv = (app.main.yargs.usage("Usage: $0 -c [cmd]").demand(["c"])["argv"]);var pred__5125 = cljs.core._EQ_;var expr__5126 = argv.c;if(cljs.core.truth_(pred__5125.call(null,"downloadUrl",expr__5126)))
{return app.main.async.waterfall([cljs.core.partial.call(null,lib.tool.getFile,"config/sgs.json"),((function (pred__5125,expr__5126,argv){
return (function (file,cb){var config = JSON.parse(file);var urls = lib.tool.parseDownloadConfig.call(null,config);var t = config.delay;return app.main.async.eachSeries(cljs.core.clj__GT_js.call(null,urls),((function (config,urls,t,pred__5125,expr__5126,argv){
return (function (url,cb__$1){console.log(url);
app.main.async.waterfall([cljs.core.partial.call(null,lib.tool.getUrl,url),((function (config,urls,t,pred__5125,expr__5126,argv){
return (function (data,cb__$2){console.log("write");
return app.main.fs.writeFile((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(config.dir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,clojure.string.split.call(null,url,/\//)))+".html"),data,cb__$2.call(null));
});})(config,urls,t,pred__5125,expr__5126,argv))
],((function (config,urls,t,pred__5125,expr__5126,argv){
return (function (err){if(cljs.core.truth_(err))
{return cb__$1.call(null,err);
} else
{return setTimeout(cb__$1,t);
}
});})(config,urls,t,pred__5125,expr__5126,argv))
);
return null;
});})(config,urls,t,pred__5125,expr__5126,argv))
,cb);
});})(pred__5125,expr__5126,argv))
],((function (pred__5125,expr__5126,argv){
return (function (err){return console.log(err);
});})(pred__5125,expr__5126,argv))
);
} else
{if(cljs.core.truth_(pred__5125.call(null,"parseYugiohCDB",expr__5126)))
{return test.yugioh.parseFile.call(null);
} else
{if(cljs.core.truth_(pred__5125.call(null,"getSangoCard",expr__5126)))
{return test.getSangoCard.testGetAll.call(null);
} else
{if(cljs.core.truth_(pred__5125.call(null,"getMagicCard",expr__5126)))
{return test.getMagicCard.main.call(null,(110),(10),(1000));
} else
{if(cljs.core.truth_(pred__5125.call(null,"getGundamCard",expr__5126)))
{return test.getGundamCard.getInfo.call(null);
} else
{if(cljs.core.truth_(pred__5125.call(null,"downloadGundamPage",expr__5126)))
{return test.gundamWar.downloadPages.call(null,(213),(1));
} else
{if(cljs.core.truth_(pred__5125.call(null,"gundamWar.parseInfo",expr__5126)))
{return test.gundamWar.parseInfo.call(null,(213),(1));
} else
{if(cljs.core.truth_(pred__5125.call(null,"bs.fetch",expr__5126)))
{return test.battleSpirits.fetchAll.call(null);
} else
{if(cljs.core.truth_(pred__5125.call(null,"bs.fetchImage",expr__5126)))
{return test.battleSpirits.fetchAllImage.call(null);
} else
{if(cljs.core.truth_(pred__5125.call(null,"crusade.fetchImage",expr__5126)))
{return test.crusade.fetchAllImage.call(null);
} else
{if(cljs.core.truth_(pred__5125.call(null,"gundamWarN.test",expr__5126)))
{return test.gundamWarN.test_base.call(null);
} else
{if(cljs.core.truth_(pred__5125.call(null,"gundamWarN.fetchImage",expr__5126)))
{return test.gundamWarN.fetchAllImage.call(null);
} else
{if(cljs.core.truth_(pred__5125.call(null,"dragonZ.test",expr__5126)))
{return test.dragonZ.test_base.call(null);
} else
{if(cljs.core.truth_(pred__5125.call(null,"dragonZ.fetchImage",expr__5126)))
{return test.dragonZ.fetchAllImage.call(null);
} else
{if(cljs.core.truth_(pred__5125.call(null,"dragonZ.makeJson",expr__5126)))
{return test.dragonZ.makeJson.call(null);
} else
{if(cljs.core.truth_(pred__5125.call(null,"sgs.test",expr__5126)))
{return test.sanguosha.test_base.call(null);
} else
{return cljs.core.println.call(null,"no cmd");
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
}
}
}
}
}
}
});
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_main_cli_fn_STAR_ = app.main._main;
