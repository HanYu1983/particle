// Compiled by ClojureScript 0.0-2268
goog.provide('app.main');
goog.require('cljs.core');
goog.require('test.yugioh');
goog.require('test.getGundamCard');
goog.require('test.getMagicCard');
goog.require('test.getSangoCard');
app.main.yargs = require("yargs");
app.main._main = (function _main(){var argv = (app.main.yargs.usage("Usage: $0 -c [cmd]").demand(["c"])["argv"]);var pred__5092 = cljs.core._EQ_;var expr__5093 = argv.c;if(cljs.core.truth_(pred__5092.call(null,"parseYugiohCDB",expr__5093)))
{return test.yugioh.parseFile.call(null);
} else
{if(cljs.core.truth_(pred__5092.call(null,"getSangoCard",expr__5093)))
{return test.getSangoCard.testGetAll.call(null);
} else
{if(cljs.core.truth_(pred__5092.call(null,"getMagicCard",expr__5093)))
{return test.getMagicCard.main.call(null,(110),(10),(1000));
} else
{if(cljs.core.truth_(pred__5092.call(null,"getGundamCard",expr__5093)))
{return test.getGundamCard.getInfo.call(null);
} else
{return cljs.core.println.call(null,"no cmd");
}
}
}
}
});
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_main_cli_fn_STAR_ = app.main._main;
