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
	ma | ema | kd | macd | yu-clock | yu-sd | 
	Chaikin | yu-macd | bbi | eom | yu-car |
	sar | osc | rsi
			d: {
				n: int,
				m: int,
				o: int,
				p: int
			}
		}]
	最適參數
	ma(5, 10, 20, 40)
	ema(5, 10, 20, 40)
	kd(9, 3, 9) or kd(100, 3, 9)
	macd(12, 26)
	yu-clock(20, 20)
	yu-sd(20) => 淘汰
	Chaikin(3, 10, 9) => (派發線棒數, 派發線棒數, 均量棒數)
	yu-macd(5, 12)
	bbi(3, 2, 6, 2) => (均線棒數, 前項倍數, 指數均線棒數, 前項倍數)
	eom(14, 3)
	yu-car(1, 0.025, 0.7) => (現在線數的幾日K數, 學習率, 收斂係數)
	sar(3)
	osc(10, 20)
	rsi(14, 9)
	*/
	function draw( canvas, id, type, offset, count, sub ){
		var params = {
			canvas : canvas,
			id: id,
			type: type,
			offset: offset,
			count: count,
			sub: sub
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
			id: id
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
	function load( fbid, cb ){
		var params = {
			fbid: fbid,
			"cbid": cbid++
		}
		cbs[ params.cbid+"" ] = cb
		common.onView.onNext(["load", params])
	}
	
	/**
	記錄使用者資料
	*/
	function save( fbid, data, cb ){
		var params = {
			fbid: fbid,
			cbid: cbid++,
			user: data
		}
		cbs[ params.cbid+"" ] = cb
		common.onView.onNext(["save", params])
	}
	
	pkg.draw = draw
	pkg.stockId = stockId
	pkg.stockInfo = stockInfo
	pkg.print = print
	pkg.load = load
	pkg.save = save
	
})(api)