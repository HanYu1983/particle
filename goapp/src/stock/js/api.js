var api = {};

(function(pkg){
	common.onModel.subscribe(function(param){
		var type = param[0]
		var data = param[1]
		var request = data.request
		if( cbs[request.cbid] ){
			cbs[request.cbid]( data )
			delete cbs[request.cbid]
		}
	})

	common.onView.subscribe(function(data){
		console.log( data )
	})

	var cbid = 0
	var cbs = {}

	function draw( canvas, id, type, offset, count, sub ){
		sub = sub || {}
		sub.canvas = canvas
		sub.id = id
		sub.type = type
		sub.offset = offset
		sub.count = count
		common.onView.onNext(["draw", sub])
	}

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

	function print(){
		common.onView.onNext(["print"])
	}
	
	function load( fbid, cb ){
		var params = {
			fbid: fbid,
			"cbid": cbid++
		}
		cbs[ params.cbid+"" ] = cb
		common.onView.onNext(["load", params])
	}
	
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
	pkg.print = print
	pkg.load = load
	pkg.save = save
	
})(api)