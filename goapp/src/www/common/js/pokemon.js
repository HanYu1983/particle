var pokemon = pokemon || {};

(function( module ){
	
	function load( path, cb ){
		$.ajax({
			url: path,
			dataType:'json',
			success:function(data){
				cb(null, data)
			},
			error: function(xhr, res, err){
				cb(err)
			}
		})
	}

	module.load = load
	
}) ( pokemon )