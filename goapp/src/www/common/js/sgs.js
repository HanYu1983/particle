var sgs = sgs || {};

(function( module ) {
	
	function load( path, cb ){
		$.ajax({
			url: path,
			dataType: 'json',
			success: function( ret ){
				for( var i in ret ){
					var obj = ret[i]
					obj.card_id = obj.id
					obj.id = obj.img
				}
				cb( null, ret )
			},
			error: function(xhr, res, err){
				cb( err )
			}
		})
	}
	
	module.load = load
	
}) ( sgs )