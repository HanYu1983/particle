// Compiled by ClojureScript 0.0-2268
goog.provide('app.main');
goog.require('cljs.core');
goog.require('test.ws');
goog.require('test.getGundamCard');
goog.require('lib.tool');
goog.require('test.yugioh');
goog.require('test.getSangoCard');
goog.require('test.yoyo');
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
app.main._main = (function _main(){var argv = (app.main.yargs.usage("Usage: $0 -c [cmd]").demand(["c"])["argv"]);var pred__5241 = cljs.core._EQ_;var expr__5242 = argv.c;if(cljs.core.truth_(pred__5241.call(null,"downloadUrl2",expr__5242)))
{return app.main.async.waterfall([cljs.core.partial.call(null,lib.tool.getFile,"config/crusade.json"),((function (pred__5241,expr__5242,argv){
return (function (file,cb){var configJson = JSON.parse(file);var map__5244 = lib.tool.parseDownloadConfig2.call(null,configJson);var map__5244__$1 = ((cljs.core.seq_QMARK_.call(null,map__5244))?cljs.core.apply.call(null,cljs.core.hash_map,map__5244):map__5244);var config = map__5244__$1;var type = cljs.core.get.call(null,map__5244__$1,new cljs.core.Keyword(null,"type","type",1174270348));var datas = cljs.core.get.call(null,map__5244__$1,new cljs.core.Keyword(null,"data","data",-232669377));var p = cljs.core.get.call(null,map__5244__$1,new cljs.core.Keyword(null,"path","path",-188191168));console.log(cljs.core.pr_str.call(null,config));
app.main.async.eachSeries(cljs.core.clj__GT_js.call(null,datas),((function (configJson,map__5244,map__5244__$1,config,type,datas,p,pred__5241,expr__5242,argv){
return (function (data,cb__$1){console.log(data);
app.main.async.waterfall([cljs.core.partial.call(null,lib.tool.postUrl,p,data),((function (configJson,map__5244,map__5244__$1,config,type,datas,p,pred__5241,expr__5242,argv){
return (function (res,cb__$2){console.log("return");
console.log(res);
return cb__$2.call(null);
});})(configJson,map__5244,map__5244__$1,config,type,datas,p,pred__5241,expr__5242,argv))
],((function (configJson,map__5244,map__5244__$1,config,type,datas,p,pred__5241,expr__5242,argv){
return (function (err){if(cljs.core.truth_(err))
{return cb__$1.call(null,err);
} else
{return setTimeout(cb__$1,(3000));
}
});})(configJson,map__5244,map__5244__$1,config,type,datas,p,pred__5241,expr__5242,argv))
);
return null;
});})(configJson,map__5244,map__5244__$1,config,type,datas,p,pred__5241,expr__5242,argv))
,cb);
return null;
});})(pred__5241,expr__5242,argv))
],((function (pred__5241,expr__5242,argv){
return (function (err){return console.log("end");
});})(pred__5241,expr__5242,argv))
);
} else
{if(cljs.core.truth_(pred__5241.call(null,"downloadUrl",expr__5242)))
{return app.main.async.waterfall([cljs.core.partial.call(null,lib.tool.getFile,"config/crusade.json"),((function (pred__5241,expr__5242,argv){
return (function (file,cb){var config = JSON.parse(file);var type = config.type;var urls = lib.tool.parseDownloadConfig.call(null,config);var t = config.delay;return app.main.async.eachSeries(cljs.core.clj__GT_js.call(null,urls),((function (config,type,urls,t,pred__5241,expr__5242,argv){
return (function (url,cb__$1){console.log(url);
app.main.async.waterfall([cljs.core.partial.call(null,lib.tool.getUrl,url),((function (config,type,urls,t,pred__5241,expr__5242,argv){
return (function (data,cb__$2){console.log("write");
return app.main.fs.writeFile((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(config.dir)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,clojure.string.split.call(null,url,/\//)))+".html"),data,cb__$2.call(null));
});})(config,type,urls,t,pred__5241,expr__5242,argv))
],((function (config,type,urls,t,pred__5241,expr__5242,argv){
return (function (err){if(cljs.core.truth_(err))
{return cb__$1.call(null,err);
} else
{return setTimeout(cb__$1,t);
}
});})(config,type,urls,t,pred__5241,expr__5242,argv))
);
return null;
});})(config,type,urls,t,pred__5241,expr__5242,argv))
,cb);
});})(pred__5241,expr__5242,argv))
],((function (pred__5241,expr__5242,argv){
return (function (err){return console.log(err);
});})(pred__5241,expr__5242,argv))
);
} else
{if(cljs.core.truth_(pred__5241.call(null,"parseYugiohCDB",expr__5242)))
{test.yugioh.parseFile.call(null,new cljs.core.Keyword(null,"anime","anime",-895981887));
test.yugioh.parseFile.call(null,new cljs.core.Keyword(null,"en","en",88457073));
return test.yugioh.parseFile.call(null,new cljs.core.Keyword(null,"ch","ch",-554717905));
} else
{if(cljs.core.truth_(pred__5241.call(null,"getSangoCard",expr__5242)))
{return test.getSangoCard.testGetAll.call(null);
} else
{if(cljs.core.truth_(pred__5241.call(null,"getMagicCard",expr__5242)))
{return test.getMagicCard.main.call(null,(110),(10),(1000));
} else
{if(cljs.core.truth_(pred__5241.call(null,"getGundamCard",expr__5242)))
{return test.getGundamCard.getInfo.call(null);
} else
{if(cljs.core.truth_(pred__5241.call(null,"downloadGundamPage",expr__5242)))
{return test.gundamWar.downloadPages.call(null,(213),(1));
} else
{if(cljs.core.truth_(pred__5241.call(null,"gundamWar.parseInfo",expr__5242)))
{return test.gundamWar.parseInfo.call(null,(213),(1));
} else
{if(cljs.core.truth_(pred__5241.call(null,"bs.fetch",expr__5242)))
{return test.battleSpirits.fetchAll.call(null);
} else
{if(cljs.core.truth_(pred__5241.call(null,"bs.fetchImage",expr__5242)))
{return test.battleSpirits.fetchAllImage.call(null);
} else
{if(cljs.core.truth_(pred__5241.call(null,"crusade.fetchImage",expr__5242)))
{return test.crusade.fetchAllImage.call(null);
} else
{if(cljs.core.truth_(pred__5241.call(null,"crusade.printFileList",expr__5242)))
{return test.crusade.printFileList.call(null);
} else
{if(cljs.core.truth_(pred__5241.call(null,"gundamWarN.test",expr__5242)))
{return test.gundamWarN.test_base.call(null);
} else
{if(cljs.core.truth_(pred__5241.call(null,"gundamWarN.fetchImage",expr__5242)))
{return test.gundamWarN.fetchAllImage.call(null);
} else
{if(cljs.core.truth_(pred__5241.call(null,"dragonZ.test",expr__5242)))
{return test.dragonZ.test_base.call(null);
} else
{if(cljs.core.truth_(pred__5241.call(null,"dragonZ.fetchImage",expr__5242)))
{return test.dragonZ.fetchAllImage.call(null);
} else
{if(cljs.core.truth_(pred__5241.call(null,"dragonZ.makeJson",expr__5242)))
{return test.dragonZ.makeJson.call(null);
} else
{if(cljs.core.truth_(pred__5241.call(null,"sgs.test",expr__5242)))
{return test.sanguosha.test_base.call(null);
} else
{if(cljs.core.truth_(pred__5241.call(null,"ws.test",expr__5242)))
{return test.ws.test_base.call(null);
} else
{if(cljs.core.truth_(pred__5241.call(null,"yoyo.parseInfo",expr__5242)))
{return test.yoyo.parseInfo.call(null,argv.n);
} else
{if(cljs.core.truth_(pred__5241.call(null,"yoyo.getImage",expr__5242)))
{return test.yoyo.getImage.call(null,argv.n);
} else
{if(cljs.core.truth_(pred__5241.call(null,"yoyo.compress",expr__5242)))
{return test.yoyo.compress.call(null,argv.d);
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
}
}
}
}
}
});
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_main_cli_fn_STAR_ = app.main._main;
