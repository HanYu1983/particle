var crusade = crusade || {};

(function( module ){
	
	var prods = [
		"123901",
		"123001",
		"221901",
		"240201",
		"86004",
		"86011",
		"86901",
		"123002",
		"193001",
		"235001",
		"240202",
		"86005",
		"86012",
		"123003",
		"193002",
		"235002",
		"240203",
		"86006",
		"86013",
		"123004",
		"193003",
		"235901",
		"240901",
		"86007",
		"86014",
		"123005",
		"193004",
		"240001",
		"86001",
		"86008",
		"86015",
		"123006",
		"193901",
		"240002",
		"86002",
		"86009",
		"86016",
		"123101",
		"221001",
		"240101",
		"86003",
		"86010",
		"86017"
	]
	
	function load( path, cb ){
		var paths = _.map( prods, function( prod){
			return path + prod + ".json"
		})
		async.waterfall([
			function(cb){
				async.map(paths, function(path, cb){
					$.ajax({
						url: path,
						dataType: 'json',
						success: function( ret ){
							cb( null, ret )
						},
						error: function(xhr, res, err){
							cb( err )
						}
					})
				}, cb)
			},
			function( rets, cb ){
				var list = _.reduce( rets, function( all, curr ){
					return all.concat( curr.data )
				}, [])
				for( var i in list ){
					var obj = list[i]
					obj.cardId = obj.id
					obj.id = obj.prodid +'_'+ obj.info_18
					var shouldInt = [5, 6, 7, 8, 9, 10]
					for( var i in shouldInt ){
						var idx = shouldInt[i]
						try{
							obj['info_'+idx] = parseInt(obj['info_'+idx])
							if( isNaN( obj['info_'+idx] ) ){
								obj['info_'+idx] = 0
							}
						} catch (e){
							obj['info_'+idx] = 0
						}
					}
				}
				cb( null, list )
			}
		], cb)
	}
	
	module.load = load
	
})( crusade )