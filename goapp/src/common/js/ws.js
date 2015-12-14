var ws = ws || {};

(function( module ) {
	
	function load( path, cb ){
		$.ajax({
			url: path,
			dataType: 'json',
			success: function( ret ){
				var list = _.filter( ret, function( obj ){
					return obj.id != null
				})
				for( var i in list ){
					list[i]['card-id'] = list[i].id
					list[i].id = list[i].img
				}
				cb( null, list )
			},
			error: function(xhr, res, err){
				cb( err )
			}
		})
	}
	
	module.load = load
	
}) ( ws )