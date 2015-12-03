// Compiled by ClojureScript 0.0-2268
goog.provide('app.main');
goog.require('cljs.core');
goog.require('test.dragonZ');
goog.require('test.gundamWarN');
goog.require('test.gundamWar');
goog.require('test.yugioh');
goog.require('test.crusade');
goog.require('test.getGundamCard');
goog.require('test.getMagicCard');
goog.require('test.getSangoCard');
app.main.yargs = require("yargs");
app.main._main = (function _main(){var argv = (app.main.yargs.usage("Usage: $0 -c [cmd]").demand(["c"])["argv"]);var pred__5154 = cljs.core._EQ_;var expr__5155 = argv.c;if(cljs.core.truth_(pred__5154.call(null,"parseYugiohCDB",expr__5155)))
{return test.yugioh.parseFile.call(null);
} else
{if(cljs.core.truth_(pred__5154.call(null,"getSangoCard",expr__5155)))
{return test.getSangoCard.testGetAll.call(null);
} else
{if(cljs.core.truth_(pred__5154.call(null,"getMagicCard",expr__5155)))
{return test.getMagicCard.main.call(null,(110),(10),(1000));
} else
{if(cljs.core.truth_(pred__5154.call(null,"getGundamCard",expr__5155)))
{return test.getGundamCard.getInfo.call(null);
} else
{if(cljs.core.truth_(pred__5154.call(null,"downloadGundamPage",expr__5155)))
{return test.gundamWar.downloadPages.call(null,(213),(1));
} else
{if(cljs.core.truth_(pred__5154.call(null,"gundamWar.parseInfo",expr__5155)))
{return test.gundamWar.parseInfo.call(null,(213),(1));
} else
{if(cljs.core.truth_(pred__5154.call(null,"bs.fetch",expr__5155)))
{return test.battleSpirits.fetchAll.call(null);
} else
{if(cljs.core.truth_(pred__5154.call(null,"bs.fetchImage",expr__5155)))
{return test.battleSpirits.fetchAllImage.call(null);
} else
{if(cljs.core.truth_(pred__5154.call(null,"crusade.fetchImage",expr__5155)))
{return test.crusade.fetchAllImage.call(null);
} else
{if(cljs.core.truth_(pred__5154.call(null,"gundamWarN.test",expr__5155)))
{return test.gundamWarN.test_base.call(null);
} else
{if(cljs.core.truth_(pred__5154.call(null,"dragonZ.test",expr__5155)))
{return test.dragonZ.test_base.call(null);
} else
{if(cljs.core.truth_(pred__5154.call(null,"dragonZ.fetchImage",expr__5155)))
{return test.dragonZ.fetchAllImage.call(null);
} else
{if(cljs.core.truth_(pred__5154.call(null,"dragonZ.makeJson",expr__5155)))
{return test.dragonZ.makeJson.call(null);
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
});
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_main_cli_fn_STAR_ = app.main._main;
