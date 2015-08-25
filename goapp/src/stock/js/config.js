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
						
						['group', '余氏'],
						['yu-clock', false, 20, 20, 0, 0 ],
						['yu-macd', false, 5, 12, 9, 0 ],
						['yu-car', false, 1, .025, .7, 0 ],
						['yu-kd', false, 9, 0, 0, 0 ],
						
						['group', '其它'],
						['kd', false, 9, 3, 3, 0, '//wiki.mbalib.com/wiki/随机指标' ],
						['atr', false, 14, 0, 0, 0, '//wiki.mbalib.com/zh-tw/真实波幅' ],
						['cv', false, 10, 10, 0, 0, '//wiki.mbalib.com/zh-tw/佳庆离散指标' ],
						['cci', false, 10, 0, 0, 0, '//wiki.mbalib.com/wiki/顺势指标' ]
					];
app.config.hoverInfo = {
	line:{
		'ma':'均線',
		'ema':'指數均線',
		'macd':'指數差離指標',
		'bbi':'多空指標<br>(均線棒數, 前項倍數, 指數均線棒數, 前項倍數)',
		'kd':'隨機指標',
		'Chaikin': [
			'<div style="width: 600px"><h2>蔡金指標(派發線棒數, 派發線棒數, 均量棒數)</h2>',
			'累積/派發線的指數差離曲線',
			'蔡金指標與股價產生背離時，可視為反轉訊號。',
			'蔡金指標本身俱有超買超賣的作用，但是，其超買和超賣的界限位置，隨著個股不同而不同。 股民須自行認定。',
			'蔡金指標由負值向上穿越0軸時，為買進訊號。',
			'蔡金指標由正值向下穿越0軸時，為賣出訊號。',
			'</div>'
		].join('<br>'),
		
		'eom':[
			'<div style="width: 600px"><h2>簡易波動指標（又稱EMV）</h2>',
			'EMV下降：買氣不斷的萎靡退縮，致使成交量逐漸的減少',
			'EMV轉而向上、突破零：股價下跌至某一個合理支撐區，撿便宜貨的買單促使成交量再度活躍（買進訊號）',
			'EMV提前轉下、跌破零：市場人氣聚集越來越多，直到出現大交易量（賣出訊號）',
			'EMV理論精髓：無法接受股價在漲升的過程，不斷的出現高成交量消耗力氣，反而認同徐緩成交的上漲，能夠保存一定的元氣，促使漲勢能走得更遠更長',
			'</div>'
		].join('<br>'),
			
		'yu-car':'方向盤指標<br>(現在線數的幾日K數, 轉速, 回轉係數)',
		'yu-clock':'背離線',
		'yu-macd':'余氏線',
		
		'osc': [
			'<div style="width: 600px"><h2>振盪量指標</h2>',
			'動量指標MTM的另一種表現型式',
			'其使用恆速原則－每個區間的漲跌幅應該相等。想像正在向上爬的雲霄飛車，其將要攻頂後滑下來',
			'注意其背離訊號',
			'飛車下滑後往上爬：買進訊號',
			'飛車上爬後往下滑：賣出訊號',
			'</div>'
		].join('<br>'),
		
		'rsi':'相對強弱指標',
		'sar':'拋物線指標',
		'dmi':'趨勢指標',
		'atr':'真實波幅',
		'AccDist': [
			'<div style="width: 600px"><h2>累積/派發線</h2>',
			'Accumulation/Distribution Line 累積/派發線是一個考慮到價格和成交量的動能指標(momentum indicator)。',
			'成交量指標背後的信念是成交量變化先於價格。',
			'很多時候，在股價開始上升前成交量都會在之前大增。大部分資金流向指標的目的是想在股價變動前及早發現流入或流出的成交量增加。',
			'累積/派發線向上代表資金流入股票，存在股價繼續向上的動力。',
			'累積/派發線向下代表資金流出股票，存在股價繼續向下的動力。',
			'當股價走勢和累積/派發線出現背馳時，表示價格走勢有機會改變方向。',
			'</div>'
		].join('<br>'),
		
		'yu-kd':'<h2>kd圖表線</h2>',
		'cv':'<h2>蔡金波動性指標</h2>',
		'cci':'<h2>順勢指標</h2>'
	}
}

