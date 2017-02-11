var gundamWar = gundamWar || {};

(function( module ) {
	
	function load( path, cb ){
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
	}
	
	module.load = load
	
}) ( gundamWar )