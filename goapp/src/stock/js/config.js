var app = app || {};
app.config = app.config || {};
app.config.fbappid = {
	local:'679171275511375',
	online:'425311264344425',
	which:'online'
}
app.config.about = [
	"版本1.0",
	"上善若水APP",
	"<img src='images/logo.jpg' width=100 height=100>",
	'<a href="https://www.facebook.com/pages/上善若水/1653920964852269" target="_blank">https://www.facebook.com/pages/上善若水/1653920964852269</a>'
].join("<br>")
app.config.index = [
						['yu-test', 'N日K線' , false, 5, 0, 0, 0 ],
	
						['group', '均線'],
						['ma','sma', false, 5, 10, 20, 40, '//wiki.mbalib.com/wiki/Sma' ],
						['ema','ema', false, 5, 10, 20, 40, '//wiki.mbalib.com/wiki/EMA' ],
						['bbi','bbi', false, 3, 6, 12, 24, '//wiki.mbalib.com/wiki/多空指数' ],
						['ebbi','ebbi', false, 6, 18, 54, 162, '//wiki.mbalib.com/wiki/多空指数' ],
						['macd','macd', false, 12, 26, 9, 0, '//wiki.mbalib.com/wiki/MACD' ],
						
						['group', '價量'],
						['AccDist','累積派發', false, 14, 0, 0, 0, '//wiki.mbalib.com/wiki/A/D' ],
						['Chaikin','蔡金指標', false, 3, 10, 1, 0, '//wiki.mbalib.com/wiki/CHAIKIN' ],
						['eom','eom', false, 14, 1, 9, 0, '//wiki.mbalib.com/wiki/简易波动指标' ],
						
						['group', '威爾德'],
						['osc', 'osc' , false, 10, 20, 0, 0, '//wiki.mbalib.com/wiki/OSC' ],
						['rsi', 'rsi' , false, 14, 9, 0, 0, '//wiki.mbalib.com/wiki/RSI' ],
						['atr', '真實波幅' , false, 14, 6, 0, 0, '//wiki.mbalib.com/wiki/真实波幅' ],
						['dmi', 'dmi' , false, 14, 14, 0, 0, '//wiki.mbalib.com/wiki/动向指数' ],
						['sar', 'sar' , false, 3, 0, 0, 0, '//wiki.mbalib.com/wiki/抛物线转向' ],
						
						['group', '其它'],
						['kd', 'kd' , false, 9, 3, 3, 0, '//wiki.mbalib.com/wiki/随机指标' ],
						['cv', 'cv' , false, 10, 10, 0, 0, '//wiki.mbalib.com/wiki/佳庆离散指标' ],
						['cci', 'cci' , false, 10, 0, 0, 0, '//wiki.mbalib.com/wiki/顺势指标' ],
						['dpo', 'dpo' , false, 20, 9, 0, 0, '//wiki.mbalib.com/wiki/区间震荡线' ],
						['trix', 'trix' , false, 12, 9, 0, 0, '//wiki.mbalib.com/wiki/TRIX指标' ],
						['uos', 'uos' , false, 7, 14, 28, 9, '//wiki.mbalib.com/wiki/终极指标' ],
	
						['group', '余氏'],
						['yu-clock', '背離線' , false, 20, 20, 0, 0 ],
						['yu-macd', '均多差離' , false, 5, 12, 9, 0 ],
						['yu-car', '方向盤' , false, 1, .025, .7, 0 ],
						['yu-kd', '隨機線圖' , false, 9, 0, 0, 0 ]
					];
app.config.hoverInfo = {
	default:'',
	'btn_first':'最新<span style="color:yellow"> B </span>',
	'btn_prev10':'往後20日<span style="color:yellow"> N </span>',
	'btn_prev':'往後1日<span style="color:yellow"> M </span>',
	'btn_next':'往前1日<span style="color:yellow"> , </span>',
	'btn_next10':'往前20日<span style="color:yellow"> . </span>',
	'btn_last':'最早<span style="color:yellow"> / </span>',
	'toggle_favor':'加入關注',
	'btn_addPanel':'加入新的指標畫布',
	'btn_removePanel':'移除此畫布',
	'mc_showKline':'是否顯示k線',
	line:{
		default:'點我學習!',
		'yu-test':'N日的K線。請把K線的顯示設為off',
		'ma':'簡單平均線',
		'ema':'指數平均線',
		'bbi':'四條簡單平均線的平均',
		'ebbi':'四條指數平均線的平均',
		'macd':'N日和M日的指數均線差離',
		'AccDist':'買賣力的曲線<br>可注意其背離',
		'Chaikin':'累積派發線的N日和M日的均線差離線加上慢線組成的買賣信號',
		'eom':'成交量大時反而由正值向0趨近，價量齊揚時會從負值向正值趨近。其相信穩定的量能才能推升股價，大量反而耗損元氣',
		'osc':'將股價起伏視為動量<br>比如雲霄飛車，每一節的速度在下落或上升時大約一致，直到軌道轉向另一方向',
		'rsi':'近期的買力百分比<br>注意其背離信號',
		'dmi':'紅線為買力，綠線為賣力，黄線為趨勢線<br>黄線在紅綠線之下代表盤整，也就是沒趨勢了；黃線越向上代表趨勢漸漸成型',
		'sar':'以極點價當停損（停利）點。不突破極點價，就持股。突破後平倉再反向操做',
		'kd':'N日的淨支撐起伏曲線',
		'atr':'可以當成價格的振蕩來看，越大代表趨勢越容易轉變；越小代表順勢操做即可',
		'cv':'目前沒什想法',
		'cci':'區間價格的z分數<br>基本上可以當成dpo來看，但是依計算方式，這個合理些',
		'dpo':'將均線拉平－去掉趨勢，只留下波動<br>注意其背離信號',
		'trix':'將價格三重指數平均化增加快慢線當成進出信號',
		'uos':'目前沒什想法',
		'yu-clock':'將逆時鐘曲線1維化，修改逆時鐘難以辨視的缺點<br>在0軸上方代表轉多的背離（價跌量增、價跌量穩）；0軸下方代表轉空的背離（價增量跌、價增量穩）',
		'yu-macd':'ema和ebbi的差離<br>看法同macd，為長線的買賣指標',
		'yu-car':'預測股價路線<br>想像振蕩是轉彎，一直彎來彎去代表上下軌越大，一直不用轉彎上下軌就會收縮<br>基本上K線都會在上下軌之內，上下軌越大代表震蕩量越大，就有了投機空間；上下軌越小代表小紅小黑沒什振蕩，就順方向盤方向買賣就可以了',
		'yu-kd':'將KD線的計算在K線上展開，方便配合其它指標'
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

