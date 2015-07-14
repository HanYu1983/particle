// Compiled by ClojureScript 0.0-2268
goog.provide('test.stock4');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
test.stock4.stock_url = (function stock_url(id,startdate,start,num){return goog.string.format("https://www.google.com/finance/historical?q=TPE:%s&startdate=%s&start=%d&num=%d",id,startdate,start,num);
});
test.stock4.main = (function main(){return console.log(test.stock4.stock_url.call(null,(2330),"2014/1/1",(0),(30)));
});
