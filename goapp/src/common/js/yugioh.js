var yugioh = yugioh || {};

(function( module ) {
	
	function loadCSV( path, cb ){
		$.get(path)
			.pipe( CSV.parse )
			.done( function(rows) {
				cb( null, rows )
			})
	}
	
	function processCSV( path, cb ){
		loadCSV( path, function( err, rows ){
			if( err ){
				cb( err )
			} else {
				cb( null, rows )
			}
		})
	}
	
	function load( path, cb ){
		$.get(path)
			.done( function(rows) {
				
				async.waterfall([
					async.map.bind( null, rows.filelist, processCSV )
				], function( err, ret ){
					console.log( ret )
					cb( err, ret )
				})
			})
	}
	
	module.load = load
	
}) ( yugioh )