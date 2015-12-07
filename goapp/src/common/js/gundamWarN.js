var gundamWarN = gundamWarN || {};

(function( module ){
	
	var prods = [
    "179030",
    "179029",
    "179028",
    "179027",
    "179026",
    "179025",
    "179024",
    "179023",
    "179022",
    "179021",
    "179020",
    "179019",
    "179018",
    "179017",
    "179016",
    "179015",
    "179014",
    "179013",
    "179012",
    "179011",
    "179010",
    "179009",
    "179008",
    "179007",
    "179006",
    "179005",
    "179004",
    "179003",
    "179002",
    "179001",
    "179901"
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
					obj.id = obj.prodid +'_'+ obj.info_25
					var shouldInt = [4,5,7,8,9]
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
	
})( gundamWarN )