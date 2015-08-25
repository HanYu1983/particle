var app = app || {};
app.config = app.config || {};
app.config.index = [
						['group', '均線'],
						['ma', false, 5, 10, 20, 40, 'http://www.yahoo.com.tw' ],
						['ema', false, 5, 10, 20, 40 ],
						['bbi', false, 3, 6, 12, 24 ],
						['ebbi', false, 6, 18, 54, 162 ],
						['macd', false, 12, 26, 9, 0 ],
						
						['group', '價量'],
						['AccDist', false, 14, 0, 0, 0 ],
						['Chaikin', false, 3, 10, 1, 0 ],
						['eom', false, 14, 1, 9, 0 ],
						
						['group', '威爾德'],
						['osc', false, 10, 20, 0, 0 ],
						['rsi', false, 14, 9, 0, 0 ],
						['dmi', false, 14, 14, 0, 0 ],
						['sar', false, 3, 0, 0, 0 ],
						
						['group', '余氏'],
						['yu-clock', false, 20, 20, 0, 0 ],
						['yu-macd', false, 5, 12, 9, 0 ],
						['yu-car', false, 1, .025, .7, 0 ],
						['yu-kd', false, 9, 0, 0, 0 ],
						
						['group', '其它'],
						['kd', false, 9, 3, 3, 0 ],
						['atr', false, 14, 0, 0, 0 ],
						['cv', false, 10, 10, 0, 0 ],
						['cci', false, 10, 0, 0, 0 ]
					];
app.config.hoverInfo = {
	line:{
		default:'請點我學習指標!'
	}
}

