var api = {};

(function(pkg){
	
	var cbid = 0
	var cbs = {}
	
	common.onModel.subscribe(function(param){
		var type = param[0]
		var data = param[1]
		var request = data.request
		if( cbs[request.cbid] ){
			cbs[request.cbid]( data.err, data.data )
			delete cbs[request.cbid]
		}
	})

	common.onView.subscribe(function(data){
		console.log( data )
	})

	/**
	畫k線
	id: stock id
	type: kline | volume | clock | null
	offset: 起始偏移。2為從到數第2K剛始畫
	count: k線的數量
	sub: 
		[{
			t:
	均線 => ma | ema | bbi | ebbi | macd
	價量 => AccDist | Chaikin | eom
	威爾德 => osc | rsi | dmi | sar
	余氏 => yu-clock | yu-macd | yu-car | yu-kd
	其它 => kd | atr | cv | cci
			d: {
				n: int,
				m: int,
				o: int,
				p: int
			}
		}]
	最適參數
	均線 ma(5, 10, 20, 40)
	指數均線 ema(5, 10, 20, 40)
	隨機 kd(9, 3, 3) or kd(100, 3, 3)
	指數差離 macd(12, 26, 9)
	背離 yu-clock(20, 20)
	yu-sd(20) => 淘汰
	蔡金 Chaikin(3, 10, 1) => (派發線棒數, 派發線棒數, 均量棒數)
	金氏 yu-macd(5, 12, 9)
	多空 bbi(3, 6, 12, 24) => (均線棒數, 前項倍數, 指數均線棒數, 前項倍數)
	指數多空 ebbi(6, 18, 54, 162)
	簡易波動 eom(14, 1)
	方向盤 yu-car(1, 0.025, 0.7) => (現在線數的幾日K數, 學習率, 收斂係數)
	拋物線 sar(3)
	震盪量 osc(10, 20)
	相對強弱 rsi(14, 9)
	真實波幅 atr(14)
	趨勢 dmi(14, 14)
	累積/派發線 AccDist(1)
	kd線圖yu-kd(9)
	蔡金波動性指標cv(10, 10)
	順勢指標cci(10)
	*/
	function draw( canvas, id, type, offset, count, sub ){
		var params = {
			canvas : canvas,
			id: id,
			type: type,
			offset: offset,
			count: count,
			sub: sub,
			group: 20
		}
		common.onView.onNext(["draw", params])
	}
	
	/**
	讀取資料
	id: stock id
	reset: 是否取代舊的（還沒實做)
	*/
	function stockId( id, reset, cb ){
		var params = {
			id: id,
			date: "2014/1/1",
			reset: reset
		}
		params.cbid = cbid++
		cbs[ params.cbid+"" ] = cb
		common.onView.onNext(["stockId", params])
	}
	
	/**
	取得股票資料
	cb: 
	function( err, data ){
		data: [
			state,
			[[date open high low close volume]],
			stockId,
			date
		]
	}
	*/
	function stockInfo( id, cb ){
		var params = {
			id: id,
			group: 20
		}
		params.cbid = cbid++
		cbs[ params.cbid+"" ] = cb
		common.onView.onNext(["stockInfo", params])
	}

	/**
	印出資料在console。開發者用
	*/
	function print(){
		common.onView.onNext(["print"])
	}
	
	
	/**
	讀取使用者資料
	*/
	function load( fbid, accessToken, cb ){
		var params = {
			fbid: fbid,
			accessToken: accessToken,
			"cbid": cbid++
		}
		cbs[ params.cbid+"" ] = cb
		common.onView.onNext(["load", params])
	}
	
	/**
	記錄使用者資料
	*/
	function save( fbid, accessToken, data, cb ){
		var params = {
			fbid: fbid,
			accessToken: accessToken,
			cbid: cbid++,
			user: data
		}
		cbs[ params.cbid+"" ] = cb
		common.onView.onNext(["save", params])
	}
	
	/**
	將K線群組化=週K線/月K線
	*/
	function group( id, n ) {
		var params = {
			id: id,
			'n': n
		}
		common.onView.onNext(["group", params])
	}
	
	pkg.draw = draw
	pkg.stockId = stockId
	pkg.stockInfo = stockInfo
	pkg.print = print
	pkg.load = load
	pkg.save = save
	pkg.group = group
	
})(api)