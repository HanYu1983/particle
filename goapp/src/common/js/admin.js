var _admin = ( leo.utils.getHash().admin != undefined && leo.utils.getHash().admin == 'nimda' );
var _beta = ( leo.utils.getHash().beta != undefined && leo.utils.getHash().beta == '1' );

var admin = admin || {};

(function(module){
	
	function message(cb){
		$.ajax({
			url:'../fn/message',
			dataType:'json',
			success:function(data){
				cb(null, data)
			},
			error: function(xhr, res, err){
				cb(err)
			}
		})
	}
	
	module.message = message
	
}) (admin)