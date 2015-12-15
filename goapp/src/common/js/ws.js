var ws = ws || {};

(function( module ) {
	
	var prods = [ 
		'初音ミクProjectDIVAf',
		'初音ミクProjectDIVAf2nd',
		'涼宮ハルヒの憂鬱',
		'進撃の巨人',
		'戦姫絶唱シンフォギア',
		'戦姫絶唱シンフォギアG',
		'戦姫絶唱シンフォギアGX',
		'艦隊これくしょん艦これ',
		'艦隊これくしょん艦これ第二艦隊',
		'ToLOVEるとらぶるダークネス2nd'
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
					return all.concat( curr )
				}, [])
				
				console.log( list )
				
				var formated = _.map( list, function( info ){
					var idary = info[0].split("/")
					var id = idary[idary.length-2] + "_" + idary[idary.length-1]
					return {
						id: id,
						cid: info[1],
						rarity: info[2],
						name: info[3],
						pkg: info[4],
						type: info[5],
						chars: info[6],
						level: parseInt(info[7]),
						cost: parseInt(info[8]),
						power: parseInt(info[9]),
						sole: parseInt(info[10]),
						trigger: info[11],
						text: info[12]
					}
				})
				console.log( formated )
				cb( null, formated )
			}
		], cb)
	}
	
	module.load = load
	
}) ( ws )