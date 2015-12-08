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
app.main._main = (function _main(){var argv = (app.main.yargs.usage("Usage: $0 -c [cmd]").demand(["c"])["argv"]);var pred__5438 = cljs.core._EQ_;var expr__5439 = argv.c;if(cljs.core.truth_(pred__5438.call(null,"downloadUrl2",expr__5439)))
{return app.main.async.waterfall([cljs.core.partial.call(null,lib.tool.getFile,"config/crusade.json"),((function (pred__5438,expr__5439,argv){
return (function (file,cb){var configJson = JSON.parse(file);var map__5441 = lib.tool.parseDownloadConfig2.call(null,configJson);var map__5441__$1 = ((cljs.core.seq_QMARK_.call(null,map__5441))?cljs.core.apply.call(null,cljs.core.hash_map,map__5441):map__5441);var config = map__5441__$1;var type = cljs.core.get.call(null,map__5441__$1,new cljs.core.Keyword(null,"type","type",1174270348));var datas = cljs.core.get.call(null,map__5441__$1,new cljs.core.Keyword(null,"data","data",-232669377));var p = cljs.core.get.call(null,map__5441__$1,new cljs.core.Keyword(null,"path","path",-188191168));console.log(cljs.core.pr_str.call(null,config));
app.main.async.eachSeries(cljs.core.clj__GT_js.call(null,datas),((function (configJson,map__5441,map__5441__$1,config,type,datas,p,pred__5438,expr__5439,argv){
return (function (data,cb__$1){console.log(data);
app.main.async.waterfall([cljs.core.partial.call(null,lib.tool.postUrl,p,data),((function (configJson,map__5441,map__5441__$1,config,type,datas,p,pred__5438,expr__5439,argv){
return (function (res,cb__$2){console.log("return");
console.log(res);
return cb__$2.call(null);
});})(configJson,map__5441,map__5441__$1,config,type,datas,p,pred__5438,expr__5439,argv))
],((function (configJson,map__5441,map__5441__$1,config,type,datas,p,pred__5438,expr__5439,argv){
return (function (err){if(cljs.core.truth_(err))
{return cb__$1.call(null,err);
} else
{return setTimeout(cb__$1,(3000));
}
});})(configJson,map__5441,map__5441__$1,config,type,datas,p,pred__5438,expr__5439,argv))
);
return null;
});})(configJson,map__5441,map__5441__$1,config,type,datas,p,pred__5438,expr__5439,argv))
,cb);
return null;
});})(pred__5438,expr__5439,argv))
],((function (pred__5438,expr__5439,argv){
return (function (err){return console.log("end");
});})(pred__5438,expr__5439,argv))
);
} else
{if(cljs.core.truth_(pred__5438.call(null,"downloadUrl",expr__5439)))
{return app.main.async.waterfall([cljs.core.partial.call(null,lib.tool.getFile,"config/crusade.json"),((function (pred__5438,expr__5439,argv){
return (function (file,cb){var config = JSON.parse(file);var type = config.type;var urls = lib.tool.parseDownloadConfig.call(null,config);var t = config.delay;return app.main.async.eachSeries(cljs.core.clj__GT_js.call(null,urls),((function (config,type,urls,t,pred__5438,expr__5439,argv){
return (function (url,cb__$1){console.log(url);
app.main.async.waterfall([cljs.core.partial.call(null,lib.tool.getUrl,url),((function (config,type,urls,t,pred__5438,expr__5439,argv){
return (function (data,cb__$2){console.log("write");
return app.main.fs.writeFile((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(config.dir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,clojure.string.split.call(null,url,/\//)))+".html"),data,cb__$2.call(null));
});})(config,type,urls,t,pred__5438,expr__5439,argv))
],((function (config,type,urls,t,pred__5438,expr__5439,argv){
return (function (err){if(cljs.core.truth_(err))
{return cb__$1.call(null,err);
} else
{return setTimeout(cb__$1,t);
}
});})(config,type,urls,t,pred__5438,expr__5439,argv))
);
return null;
});})(config,type,urls,t,pred__5438,expr__5439,argv))
,cb);
});})(pred__5438,expr__5439,argv))
],((function (pred__5438,expr__5439,argv){
return (function (err){return console.log(err);
});})(pred__5438,expr__5439,argv))
);
} else
{if(cljs.core.truth_(pred__5438.call(null,"parseYugiohCDB",expr__5439)))
{return test.yugioh.parseFile.call(null);
} else
{if(cljs.core.truth_(pred__5438.call(null,"getSangoCard",expr__5439)))
{return test.getSangoCard.testGetAll.call(null);
} else
{if(cljs.core.truth_(pred__5438.call(null,"getMagicCard",expr__5439)))
{return test.getMagicCard.main.call(null,(110),(10),(1000));
} else
{if(cljs.core.truth_(pred__5438.call(null,"getGundamCard",expr__5439)))
{return test.getGundamCard.getInfo.call(null);
} else
{if(cljs.core.truth_(pred__5438.call(null,"downloadGundamPage",expr__5439)))
{return test.gundamWar.downloadPages.call(null,(213),(1));
} else
{if(cljs.core.truth_(pred__5438.call(null,"gundamWar.parseInfo",expr__5439)))
{return test.gundamWar.parseInfo.call(null,(213),(1));
} else
{if(cljs.core.truth_(pred__5438.call(null,"bs.fetch",expr__5439)))
{return test.battleSpirits.fetchAll.call(null);
} else
{if(cljs.core.truth_(pred__5438.call(null,"bs.fetchImage",expr__5439)))
{return test.battleSpirits.fetchAllImage.call(null);
} else
{if(cljs.core.truth_(pred__5438.call(null,"crusade.fetchImage",expr__5439)))
{return test.crusade.fetchAllImage.call(null);
} else
{if(cljs.core.truth_(pred__5438.call(null,"gundamWarN.test",expr__5439)))
{return test.gundamWarN.test_base.call(null);
} else
{if(cljs.core.truth_(pred__5438.call(null,"gundamWarN.fetchImage",expr__5439)))
{return test.gundamWarN.fetchAllImage.call(null);
} else
{if(cljs.core.truth_(pred__5438.call(null,"dragonZ.test",expr__5439)))
{return test.dragonZ.test_base.call(null);
} else
{if(cljs.core.truth_(pred__5438.call(null,"dragonZ.fetchImage",expr__5439)))
{return test.dragonZ.fetchAllImage.call(null);
} else
{if(cljs.core.truth_(pred__5438.call(null,"dragonZ.makeJson",expr__5439)))
{return test.dragonZ.makeJson.call(null);
} else
{if(cljs.core.truth_(pred__5438.call(null,"sgs.test",expr__5439)))
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
}
});
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_main_cli_fn_STAR_ = app.main._main;
