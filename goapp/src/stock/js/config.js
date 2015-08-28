var app = app || {};
app.config = app.config || {};
app.config.index = [
						['group', '均線'],
						['ma', false, 5, 10, 20, 40, '//wiki.mbalib.com/wiki/Sma' ],
						['ema', false, 5, 10, 20, 40, '//wiki.mbalib.com/wiki/EMA' ],
						['bbi', false, 3, 6, 12, 24, '//wiki.mbalib.com/wiki/多空指数' ],
						['ebbi', false, 6, 18, 54, 162, '//wiki.mbalib.com/wiki/多空指数' ],
						['macd', false, 12, 26, 9, 0, '//wiki.mbalib.com/wiki/MACD' ],
						
						['group', '價量'],
						['AccDist', false, 14, 0, 0, 0, '//wiki.mbalib.com/wiki/A/D' ],
						['Chaikin', false, 3, 10, 1, 0, '//wiki.mbalib.com/wiki/CHAIKIN' ],
						['eom', false, 14, 1, 9, 0, '//wiki.mbalib.com/wiki/简易波动指标' ],
						
						['group', '威爾德'],
						['osc', false, 10, 20, 0, 0, '//wiki.mbalib.com/wiki/OSC' ],
						['rsi', false, 14, 9, 0, 0, '//wiki.mbalib.com/wiki/RSI' ],
						['dmi', false, 14, 14, 0, 0, '//wiki.mbalib.com/wiki/动向指数' ],
						['sar', false, 3, 0, 0, 0, '//wiki.mbalib.com/wiki/抛物线转向' ],
						
						['group', '其它'],
						['kd', false, 9, 3, 3, 0, '//wiki.mbalib.com/wiki/随机指标' ],
						['atr', false, 14, 0, 0, 0, '//wiki.mbalib.com/zh-tw/真实波幅' ],
						['cv', false, 10, 10, 0, 0, '//wiki.mbalib.com/zh-tw/佳庆离散指标' ],
						['cci', false, 10, 0, 0, 0, '//wiki.mbalib.com/wiki/顺势指标' ],
						['dpo', false, 20, 9, 0, 0, '//wiki.mbalib.com/wiki/区间震荡线' ],
						['trix', false, 12, 9, 0, 0, '//wiki.mbalib.com/wiki/TRIX指标' ],
						['uos', false, 7, 14, 28, 9, '//www.taindicators.com/2010/04/ultimate-ultimate-oscillator.html' ],
	
						['group', '余氏'],
						['yu-clock', false, 20, 20, 0, 0 ],
						['yu-macd', false, 5, 12, 9, 0 ],
						['yu-car', false, 1, .025, .7, 0 ],
						['yu-kd', false, 9, 0, 0, 0 ],
						['yu-test', false, 1, 1, 0, 0 ],
					];
app.config.hoverInfo = {
	default:'',
	'btn_first':'返回最新<span style="color:yellow"> B </span>',
	'btn_prev10':'下十日<span style="color:yellow"> N </span>',
	'btn_prev':'下一日<span style="color:yellow"> M </span>',
	'btn_next':'上一日<span style="color:yellow"> , </span>',
	'btn_next10':'上十日<span style="color:yellow"> . </span>',
	'btn_last':'返回最早<span style="color:yellow"> / </span>',
	line:{
		default:'點我學習!'
	}
}

