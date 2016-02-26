var admin = admin || {};

(function(module){
	
	var version = '1.22';
	var admin = ( leo.utils.getHash().admin != undefined && leo.utils.getHash().admin == 'nimda' );
	var beta = ( leo.utils.getHash().beta != undefined && leo.utils.getHash().beta == '1' );
	var cardbackCount = 56;
	
	addVerToTitle();
	
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
	/*
	var ary_hotGame = ['sgs', 'sangoWar', 'battleSpirits','gundamWarN'];
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
	*/
	var ary_games = [
		{ game:'army', name:'軍武gogogo', hot:false },
		{ game:'gundamWar', name:'鋼彈大戰', hot:false },
		{ game:'gundamWarN', name:'鋼彈大戰NexA', hot:true },
		{ game:'sengoku', name:'戰國大戰', hot:false },
		{ game:'sangoWar', name:'三國志大戰', hot:true },
		{ game:'sgs', name:'三國殺陣面對決', hot:true },
		{ game:'magic', name:'魔法風雲會', hot:false },
		{ game:'battleSpirits', name:'戰魂', hot:true },
		{ game:'crusade', name:'Crusade', hot:false },
		{ game:'ws', name:'黑白雙翼', hot:false },
		{ game:'dragonZ', name:'七龍珠TCG', hot:false },
		{ game:'yugioh', name:'遊戲王', hot:false }
	];
	
	function addVerToTitle(){
		$('title').html( $('title').html() + version );
	}
	
	module.version = version
	module.ary_games = ary_games
	module.message = message
	module.messageForMe = messageForMe
	module.defaultMessageHandle = defaultMessageHandle
	//module.showHotGame = showHotGame
	module.getMeta = getMeta
	module.admin = admin;
	module.beta = beta;
	module.cardbackCount = cardbackCount;
	
}) (admin)