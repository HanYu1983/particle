var battleSpirits = battleSpirits || {};

(function( module ){
	
	var prods = [
		"62003",
		"62007",
		"62008",
		"62009",
		"62010",
		"62012",
		"62014",
		"62015",
		"62017",
		"62020",
		"62021",
		"62022",
		"62023",
		"62025",
		"62026",
		"62027",
		"62028",
		"62029",
		"62032",
		"62037",
		"62038",
		"62040",
		"62041",
		"62045",
		"62049",
		"62051",
		"62055",
		"62057",
		"62060",
		"62063",
		"62068",
		"62071",
		"62073",
		"62019",
		"62046",
		"62050",
		"62056",
		"62064",
		"62065",
		"62069",
		"62072",
		"62011",
		"62013",
		"62018",
		"62024",
		"62030",
		"62031",
		"62033",
		"62034",
		"62035",
		"62036",
		"62039",
		"62043",
		"62044",
		"62047",
		"62048",
		"62053",
		"62054",
		"62059",
		"62061",
		"62062",
		"62066",
		"62067",
		"62070",
		"62075",
		"62016",
		"62074",
		"62058",
		"62052",
		"62042",
		"62901"
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
					obj.id = obj.info_1
					var shouldInt = [5, 7, 8, 9, 10, 11, 12]
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
	
})( battleSpirits )