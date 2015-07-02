// Compiled by ClojureScript 0.0-2268
goog.provide('ai.ann');
goog.require('cljs.core');
/**
* 點乘
* ins [float] 所有輸入的值
* ws [float] 每一輸入路線的權重
*/
ai.ann.Dot = (function Dot(ins,ws){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,ins,ws));
});
/**
* 激活函數
* 必須使用這個，因為計算誤差必須用到激活函數的導數，而演算法就是使用這個函數的導數
*/
ai.ann.Logistic = (function Logistic(value){return ((1) / ((1) + Math.exp.call(null,(- value))));
});
/**
* 計算神經節點的值
* func fn 激活函數
* ins [float] 所有輸入
* ws [float] 每一輸入路線的權重
*/
ai.ann.NeuronValue = (function NeuronValue(ins,ws){return ai.ann.Logistic.call(null,ai.ann.Dot.call(null,ins,ws));
});
/**
* 計算輸出層的誤差值
* values [float] 輸出層各個節點的值
* desire [float] 輸出層各個預期的值
*/
ai.ann.ErrorValueOutput = (function ErrorValueOutput(values,desire){return cljs.core.map.call(null,(function (p1__4953_SHARP_,p2__4954_SHARP_){return (((p1__4953_SHARP_ - p2__4954_SHARP_) * p2__4954_SHARP_) * (1.0 - p2__4954_SHARP_));
}),desire,values);
});
/**
* 計算隱藏層的誤差值
* values [float] 隱藏層各個節點的值
* errs [float] 上一層各個節點所計算的誤差值
* wsTranspose [[float]] '轉置'過的權重值，因為是倒過來計算。呼叫ReverseWeight來轉置
*/
ai.ann.ErrorValueHidden = (function ErrorValueHidden(values,errs,wsTranspose){return cljs.core.map.call(null,(function (p1__4955_SHARP_,p2__4956_SHARP_){return ((ai.ann.Dot.call(null,errs,p1__4955_SHARP_) * p2__4956_SHARP_) * (1.0 - p2__4956_SHARP_));
}),wsTranspose,values);
});
/**
* 轉置二維的權重矩陣，用來倒過來計算
* w [[float]]
*/
ai.ann.ReverseWeight = (function ReverseWeight(w){return cljs.core.apply.call(null,cljs.core.map,cljs.core.list,w);
});
/**
* 計算每一節點的誤差
* 之前xor訓練不出來是因為敗在這裡的wss忘了倒反!!
*/
ai.ann.Errors = (function Errors(ann,wss,desire){var CalcHidden = (function (errs,layer){var vec__4960 = layer;var values = cljs.core.nth.call(null,vec__4960,(0),null);var ws = cljs.core.nth.call(null,vec__4960,(1),null);var noBias = cljs.core.map.call(null,cljs.core.rest,ws);return ai.ann.ErrorValueHidden.call(null,values,errs,ai.ann.ReverseWeight.call(null,noBias));
});var vec__4959 = cljs.core.reverse.call(null,ann);var outputValue = cljs.core.nth.call(null,vec__4959,(0),null);var hiddenValues = cljs.core.nthnext.call(null,vec__4959,(1));var layers = cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,hiddenValues,cljs.core.reverse.call(null,wss)));var outputError = ai.ann.ErrorValueOutput.call(null,outputValue,desire);var errors = cljs.core.reductions.call(null,CalcHidden,outputError,layers);return cljs.core.reverse.call(null,errors);
});
/**
* 計算一層的調整矩陣
*/
ai.ann.AdjustWeightsLayer = (function AdjustWeightsLayer(learningRate,mutateRate,values,errs){var wsTranspose = cljs.core.map.call(null,(function (value){return cljs.core.map.call(null,(function (err){return ((((((cljs.core.rand.call(null) < mutateRate))?(cljs.core.rand.call(null) - cljs.core.rand.call(null)):(1)) * learningRate) * value) * err);
}),errs);
}),cljs.core.conj.call(null,values,(-1)));return ai.ann.ReverseWeight.call(null,wsTranspose);
});
/**
* 計算每一層的調整權重矩陣
*/
ai.ann.AdjustWeights = (function AdjustWeights(learningRate,mutateRate,ann,errs){return cljs.core.map.call(null,(function (p1__4961_SHARP_,p2__4962_SHARP_){return ai.ann.AdjustWeightsLayer.call(null,learningRate,mutateRate,p1__4961_SHARP_,p2__4962_SHARP_);
}),cljs.core.drop_last.call(null,(1),ann),cljs.core.rest.call(null,errs));
});
/**
* 調整權重
*/
ai.ann.NewWeights = (function NewWeights(ws,adws){return cljs.core.map.call(null,(function (w,ad){return cljs.core.map.call(null,(function (wv,adv){return cljs.core.map.call(null,cljs.core._PLUS_,wv,adv);
}),w,ad);
}),ws,adws);
});
/**
* @param {...*} var_args
*/
ai.ann.RandWeights = (function() { 
var RandWeights__delegate = function (cnt){return cljs.core.reverse.call(null,cljs.core.reduce.call(null,(function (li,p__4965){var vec__4966 = p__4965;var inCnt = cljs.core.nth.call(null,vec__4966,(0),null);var outCnt = cljs.core.nth.call(null,vec__4966,(1),null);return cljs.core.cons.call(null,cljs.core.repeatedly.call(null,outCnt,((function (vec__4966,inCnt,outCnt){
return (function (){return cljs.core.repeatedly.call(null,(inCnt + (1)),cljs.core.rand);
});})(vec__4966,inCnt,outCnt))
),li);
}),cljs.core.List.EMPTY,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cnt,cljs.core.drop.call(null,(1),cnt)))));
};
var RandWeights = function (var_args){
var cnt = null;if (arguments.length > 0) {
  cnt = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return RandWeights__delegate.call(this,cnt);};
RandWeights.cljs$lang$maxFixedArity = 0;
RandWeights.cljs$lang$applyTo = (function (arglist__4967){
var cnt = cljs.core.seq(arglist__4967);
return RandWeights__delegate(cnt);
});
RandWeights.cljs$core$IFn$_invoke$arity$variadic = RandWeights__delegate;
return RandWeights;
})()
;
/**
* 向前計算
*/
ai.ann.FeedForward = (function FeedForward(ann,wss){var CalcLayer = (function (inputs,ws){var includeBias = cljs.core.cons.call(null,(-1),inputs);var outputs = cljs.core.map.call(null,((function (includeBias){
return (function (p1__4968_SHARP_){return ai.ann.NeuronValue.call(null,includeBias,p1__4968_SHARP_);
});})(includeBias))
,ws);return outputs;
});var newAnn = cljs.core.reductions.call(null,CalcLayer,cljs.core.first.call(null,ann),wss);return newAnn;
});
/**
* 計算總誤差
*/
ai.ann.NowError = (function NowError(outputs,desires){return (cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,(function (p1__4969_SHARP_,p2__4970_SHARP_){return Math.pow.call(null,(p1__4969_SHARP_ - p2__4970_SHARP_),(2));
}),outputs,desires)) / cljs.core.count.call(null,outputs));
});
/**
* 訓練
*/
ai.ann.Train = (function Train(ws,trainingSet,learningRate,mutateRate){var ForwardAndUpdateWeights = (function (p__4977,p__4978){var vec__4979 = p__4977;var nowError = cljs.core.nth.call(null,vec__4979,(0),null);var ws__$1 = cljs.core.nth.call(null,vec__4979,(1),null);var vec__4980 = p__4978;var inputs = cljs.core.nth.call(null,vec__4980,(0),null);var desires = cljs.core.nth.call(null,vec__4980,(1),null);var newAnn = ai.ann.FeedForward.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,inputs),ws__$1);var errs = ai.ann.Errors.call(null,newAnn,ws__$1,desires);var adws = ai.ann.AdjustWeights.call(null,learningRate,mutateRate,newAnn,errs);var newWs = ai.ann.NewWeights.call(null,ws__$1,adws);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(nowError + ai.ann.NowError.call(null,cljs.core.last.call(null,newAnn),desires)),newWs], null);
});var vec__4976 = cljs.core.reduce.call(null,ForwardAndUpdateWeights,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),ws], null),trainingSet);var totalError = cljs.core.nth.call(null,vec__4976,(0),null);var newWs = cljs.core.nth.call(null,vec__4976,(1),null);var avgError = (totalError / cljs.core.count.call(null,trainingSet));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [newWs,avgError], null);
});
