var admin = admin || {};

(function(module){
	
	var version = '1.07';
	var admin = ( leo.utils.getHash().admin != undefined && leo.utils.getHash().admin == 'nimda' );
	var beta = ( leo.utils.getHash().beta != undefined && leo.utils.getHash().beta == '1' );
	
	function getMeta(){
		return {
			name:'秀牌風雲',
			desc:'秀出你的牌組! 發揮你的創意! 可以隨意組牌、抄牌、評論、分享的集換式卡牌的牌組管理器!'
		}
	}
	
	// ============== 訊息通知 ================ //
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
	
	function messageForMe(me, cb){
		message(function(err, data){
			if( err ){
				cb( err )
			} else {
				var ret = []
				for( var i in data ){
					if( data[i].app == me ){
						ret.push(data[i])
					}
				}
				cb(null, ret)
			}
		})
	}
	
	function defaultMessageHandle( me, dom ){
		messageForMe(me, function(err,data){
			if( err ){
				alert( err )
			} else {
				if( data.length ){
					var msg = data[0];
					if( msg.level > 0 ){
						dom.html( msg.Message );
						dom.panel( 'open' );
					}
				}
			}
		})
	}
	
	// ============== 熱門遊戲設定 ================ //
	
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
	
	module.version = version
	module.message = message
	module.messageForMe = messageForMe
	module.defaultMessageHandle = defaultMessageHandle
	module.showHotGame = showHotGame
	module.getMeta = getMeta
	module.admin = admin;
	module.beta = beta;
	
}) (admin)