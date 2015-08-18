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
			t: ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
			d: {
				n: int,
				m: int,
				color: red | ...
			}
		}]
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
			date: "2015/1/1",
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