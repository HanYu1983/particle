// Compiled by ClojureScript 0.0-2268
goog.provide('lib.tool');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
lib.tool.request = require("request");
lib.tool.fs = require("fs");
lib.tool.async = require("async");
lib.tool.getUrl = (function getUrl(url,cb){return lib.tool.request.call(null,url,(function (err,res,body){if(cljs.core.truth_(err))
{return cb.call(null,err);
} else
{return cb.call(null,null,body);
}
}));
});
lib.tool.postUrl = (function postUrl(url,data,cb){return lib.tool.request.post((function (){var obj5088 = {"url":url,"formData":cljs.core.clj__GT_js.call(null,data)};return obj5088;
})(),(function (err,res,body){if(cljs.core.truth_(err))
{return cb.call(null,err);
} else
{return cb.call(null,null,body);
}
}));
});
lib.tool.getFile = (function getFile(filename,cb){return lib.tool.fs.readFile(filename,"utf8",(function (err,data){if(cljs.core.truth_(err))
{return cb.call(null,err);
} else
{return cb.call(null,null,clojure.string.replace.call(null,data,/\r/,""));
}
}));
});
lib.tool.delayFn = (function delayFn(t,f,cb){return f.call(null,(function (err,data){if(cljs.core.truth_(err))
{return cb.call(null,err);
} else
{return setTimeout((function (){return cb.call(null,null,data);
}),t);
}
}));
});
