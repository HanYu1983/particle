var crusade = crusade || {};

(function( module ){
	
	var prods = [ '123001.json',
  '123002.json',
  '123003.json',
  '123004.json',
  '123005.json',
  '123006.json',
  '123101.json',
  '123901.json',
  '193001.json',
  '193002.json',
  '193003.json',
  '193004.json',
  '193901.json',
  '22001.json',
  '22002.json',
  '22003.json',
  '22004.json',
  '22005.json',
  '22006.json',
  '22007.json',
  '22008.json',
  '22009.json',
  '22010.json',
  '22011.json',
  '22012.json',
  '22013.json',
  '22014.json',
  '22015.json',
  '22016.json',
  '22017.json',
  '22018.json',
  '22019.json',
  '22020.json',
  '22021.json',
  '22022.json',
  '22023.json',
  '22024.json',
  '22025.json',
  '22026.json',
  '22027.json',
  '22028.json',
  '22029.json',
  '22034.json',
  '22035.json',
  '22036.json',
  '22037.json',
  '22038.json',
  '22039.json',
  '22040.json',
  '22041.json',
  '22042.json',
  '22043.json',
  '22044.json',
  '22045.json',
  '221001.json',
  '221901.json',
  '22901.json',
  '235001.json',
  '235002.json',
  '235901.json',
  '240001.json',
  '240002.json',
  '240101.json',
  '240201.json',
  '240202.json',
  '240203.json',
  '240901.json',
  '86001.json',
  '86002.json',
  '86003.json',
  '86004.json',
  '86005.json',
  '86006.json',
  '86007.json',
  '86008.json',
  '86009.json',
  '86010.json',
  '86011.json',
  '86012.json',
  '86013.json',
  '86014.json',
  '86015.json',
  '86016.json',
  '86017.json',
  '86901.json' ]
	
	function load( path, cb ){
		var paths = _.map( prods, function( prod){
			return path + prod
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