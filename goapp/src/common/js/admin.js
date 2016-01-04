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
	
	var ary_hotGame = ['sgs', 'magic', 'gundamWar'];
	function showHotGame( dom ){
		dom.find( 'a' ).each( function( id, dom ){
			dom = $(dom);
			var game = dom.attr('game' );
			if( ary_hotGame.indexOf( game ) != -1 ){
				dom.linkbutton({
					iconCls: 'icon-fire2'
				});
			}
		});
	}
	
	module.message = message
	module.showHotGame = showHotGame
	module.admin = ( leo.utils.getHash().admin != undefined && leo.utils.getHash().admin == 'nimda' );
	module.beta = ( leo.utils.getHash().beta != undefined && leo.utils.getHash().beta == '1' );
	
}) (admin)