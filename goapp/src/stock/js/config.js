var app = app || {};
app.config = app.config || {};
app.config.about = '<div>第一行</div>';
app.config.about += '<div>第二行第二行第二行第二行第二行第二行第二行</div>';
app.config.about += '<div><span style="color:red;">第三行</span>hahah</div>';
app.config.about += '<div><a href="//gamer.com.tw" target="_blank">第四行</a></div>';
app.config.index = [
						['yu-test', 'N日K線' , false, 5, 0, 0, 0 ],
	
						['group', '均線'],
						['ma','簡單平均', false, 5, 10, 20, 40, '//wiki.mbalib.com/wiki/Sma' ],
						['ema','指數平均', false, 5, 10, 20, 40, '//wiki.mbalib.com/wiki/EMA' ],
						['bbi','多空指標', false, 3, 6, 12, 24, '//wiki.mbalib.com/wiki/多空指数' ],
						['ebbi','指數多空', false, 6, 18, 54, 162, '//wiki.mbalib.com/wiki/多空指数' ],
						['macd','指數差離', false, 12, 26, 9, 0, '//wiki.mbalib.com/wiki/MACD' ],
						
						['group', '價量'],
						['AccDist','累積派發', false, 14, 0, 0, 0, '//wiki.mbalib.com/wiki/A/D' ],
						['Chaikin','蔡金指標', false, 3, 10, 1, 0, '//wiki.mbalib.com/wiki/CHAIKIN' ],
						['eom','簡易波動', false, 14, 1, 9, 0, '//wiki.mbalib.com/wiki/简易波动指标' ],
						
						['group', '威爾德'],
						['osc', '振蕩量' , false, 10, 20, 0, 0, '//wiki.mbalib.com/wiki/OSC' ],
						['rsi', '相對強弱' , false, 14, 9, 0, 0, '//wiki.mbalib.com/wiki/RSI' ],
						['dmi', '趨向指標' , false, 14, 14, 0, 0, '//wiki.mbalib.com/wiki/动向指数' ],
						['sar', '拋物線' , false, 3, 0, 0, 0, '//wiki.mbalib.com/wiki/抛物线转向' ],
						
						['group', '其它'],
						['kd', '隨機指標' , false, 9, 3, 3, 0, '//wiki.mbalib.com/wiki/随机指标' ],
						['atr', '真實波幅' , false, 14, 0, 0, 0, '//wiki.mbalib.com/zh-tw/真实波幅' ],
						['cv', '蔡金離散' , false, 10, 10, 0, 0, '//wiki.mbalib.com/zh-tw/佳庆离散指标' ],
						['cci', '順勢指標' , false, 10, 0, 0, 0, '//wiki.mbalib.com/wiki/顺势指标' ],
						['dpo', '區間震蕩' , false, 20, 9, 0, 0, '//wiki.mbalib.com/wiki/区间震荡线' ],
						['trix', '三重指數' , false, 12, 9, 0, 0, '//wiki.mbalib.com/wiki/TRIX指标' ],
						['uos', '終極指標' , false, 7, 14, 28, 9, '//www.taindicators.com/2010/04/ultimate-ultimate-oscillator.html' ],
	
						['group', '余氏'],
						['yu-clock', '背離線' , false, 20, 20, 0, 0 ],
						['yu-macd', '均多差離' , false, 5, 12, 9, 0 ],
						['yu-car', '方向盤' , false, 1, .025, .7, 0 ],
						['yu-kd', '隨機線圖' , false, 9, 0, 0, 0 ],
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
		default:'點我學習!',
		
		'yu-car':'預測股價路線。基本上K線都會在上下軌之內，上下軌越大代表震蕩量越大－就有了投機空間；上下軌越小代表小紅小黑沒什振蕩，就順勢買賣就可以了',
		'yu-kd':'將KD線的計算在K線上展開，方便配合其它指標',
	}
}
app.config.preferStocks = [
	[3474,	'華亞科'],
	[4938,	'和碩'],
	[3481,	'群創'],
	[2330,	'台積電'],
	[2303,	'聯電'],
	[2882,	'國泰金'],
	[2357,	'華碩'],
	[1303,	'南亞'],
	[2883,	'開發金'],
	[1301,	'台塑'],
	[2002,	'中鋼'],
	[2311,	'日月光'],
	[2317,	'鴻海'],
	[1402,	'遠東新'],
	[2892,	'第一金'],
	[2880,	'華南金'],
	[2801,	'彰銀'],
	[1216,	'統一'],
	[1101,	'台泥'],
	[1102,	'亞泥'],
	[2382,	'廣達'],
	[2308,	'台達電'],
	[1326,	'台化'],
	[2886,	'兆豐金'],
	[2891,	'中信金'],
	[2325,	'矽品'],
	[2105,	'正新'],
	[2395,	'研華'],
	[2408,	'南科'],
	[2412,	'中華電'],
	[2409,	'友達'],
	[2207,	'和泰車'],
	[2301,	'光寶科'],
	[9904,	'寶成'],
	[2912,	'統一超'],
	[2354,	'鴻準'],
	[2474,	'可成'],
	[3045,	'台灣大'],
	[2454,	'聯發科'],
	[2881,	'富邦金'],
	[2887,	'台新金'],
	[4904,	'遠傳'],
	[2885,	'元大金'],
	[3008,	'大立光'],
	[2498,	'宏達電'],
	[2884,	'玉山金'],
	[2890,	'永豐金'],
	[6505,	'台塑化'],
	[5880,	'合庫金'],
	[2227,	'裕日車']
]

