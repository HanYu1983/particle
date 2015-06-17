(ns app.react
  (:require-macros
    [cljs.core.async.macros :refer [go]])
  (:require
    [cljs.core.async :as async :refer [chan <!]]))
    
(def onTick (chan))
(def onImage (chan))