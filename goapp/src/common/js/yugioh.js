var yugioh = yugioh || {};

(function( module ) {
	
	function load( path, cb ){
		$.ajax({
			url: path,
			dataType: 'json',
			success: function( data ){
				console.log( data )
			},
			error: function( xhr, res, err ){
				cb( err )
			}
		})
	}
	
	module.load = load
	
}) ( yugioh )