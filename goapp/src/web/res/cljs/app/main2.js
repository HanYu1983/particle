// Compiled by ClojureScript 0.0-2268
goog.provide('app.main2');
goog.require('cljs.core');
app.main2.main = (function main(){common.onView.subscribe((function (data){return console.log("cljs",data);
}));
return common.onModel.onNext(["startapp",null]);
});
app.main2.main.call(null);
