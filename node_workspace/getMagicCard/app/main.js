// Compiled by ClojureScript 0.0-2268
goog.provide('app.main');
goog.require('cljs.core');
goog.require('test.getSangoCard');
app.main.yargs = require("yargs");
app.main._main = (function _main(){var argv = (app.main.yargs.usage("Usage: $0 -c [cmd]").demand(["c"])["argv"]);var pred__16523 = cljs.core._EQ_;var expr__16524 = argv.c;if(cljs.core.truth_(pred__16523.call(null,"getMagicCard",expr__16524)))
{return test.getSangoCard.testGetAll.call(null);
} else
{return cljs.core.println.call(null,"no cmd");
}
});
cljs.core.enable_console_print_BANG_.call(null);
cljs.core._STAR_main_cli_fn_STAR_ = app.main._main;
