var api = api || {};

(function( pkg ){
	
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
	
	
}) (api)