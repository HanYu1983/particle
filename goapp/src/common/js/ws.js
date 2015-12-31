var ws = ws || {};

(function( module ) {
	
	var prods = [ 
		'aot',
		'kancolle',
		'kancolle2.0',
		'miku',
		'miku2.0',
		'sh',
		'shext',
		'symphogear',
		'symphogearg',
		'symphogeargx',
		'tld2nd',
		'tmh',
		'tmh2.0',
		'tmh2nd',
		'tmhext',
		'tmhext2.0',
		'lb',
		'lbcmext',
		'lbe',
		'lbext1.0',
		'animelb',
		'animelbrext',
		'ft',
		'ftext1.0',
		'gf',
		'gf2.0',
		'ab',
		'abext',
		'abext2.0',
		'abre',
		'ns',
		'nsa',
		'nsm',
		'nsm1m2',
		'nsm2'
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
						soul: parseInt(info[10]),
						trigger: info[11],
						text: info[12]
					}
				})

				cb( null, formated )
			}
		], cb)
	}
	
	module.load = load
	
}) ( ws )