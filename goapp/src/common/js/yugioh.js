var yugioh = yugioh || {};

(function( module ) {
	
	function load( path, cb ){
		$.ajax({
			url: path,
			dataType: 'json',
			success: function( ret ){
				onLoadGameCallback( null, ret )
			},
			error: function(xhr, res, err){
				onLoadGameCallback( err )
			}
		})
	}
	
	module.load = load
	
}) ( yugioh )