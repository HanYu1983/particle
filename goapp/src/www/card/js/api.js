var api = api || {};

(function( module ){
	/**
	建立channel
	cb: {
		onopen: function,
		onmessage: function( path, option ),
		onerror: function,
		onclose: function
	}
	*/
	function createChannel( name, cb ){
		channel.createChannel( name, function( err, ch ){
			channel.addEventListenerAndOpenSocket( ch, {
				onopen: function(){
					cb.onopen()
				},
        onmessage: function( json ){
					if( handleMessage( json ) == false ){
						cb.onmessage( json )
					}
				},
				/*onmessage: function( path, option ){
					var origin = JSON.parse( path.data )
					var json = JSON.parse( origin )
					if( handleMessage( json ) == false ){
						cb.onmessage( json )
					}
				},*/
          
				onerror: function(){
					cb.onerror()
				},
				onclose: function(){
					cb.onclose()
				}
			})
		})
	}
	
	function handleMessage( obj ){
		switch( obj.type ){
		case 'invite':
			receiveInvite( obj )
			return true
		case 'heartbeat':
			replyHeartbeat( obj, function( err ){
				if( err ){
					// ignore it
				}
			})
			return true
		case 'replyHeartbeat':
			receiveReplyHeartbeat( obj )
			return true
		default:
			return false
		}
	}
	
	function replyHeartbeat( obj, cb ){
		var targetName = obj.msg.from
		obj.type = 'replyHeartbeat'
		channel.sendChannelMessage( targetName, JSON.stringify(obj), cb )
	}
	
	function receiveReplyHeartbeat( obj ){
		var cbSeq = obj.msg.seq
		if( heartbeatCbPool[ cbSeq ] ){
			heartbeatCbPool[ cbSeq ]( true )
			delete heartbeatCbPool[ cbSeq ]
		}
	}
	
	var heartbeatCbPool = {}
	var heartbeatSeq = 0
	var heartbeatTimeout = 2000
	var heartbeatDuration = 3000
	
	function sendHeartbeat( selfName, targetName, delay, cb ){
		var obj = {
			type: 'heartbeat',
			msg: {
				seq: heartbeatSeq++ + "",
				from: selfName
			}
		}
		if( cb ){
			heartbeatCbPool[ obj.msg.seq ] = cb 
		}
		
		var replayFalseIfErrorOccur = (function( cbSeq ){
			return function( err ){
				if( err ){
					if( heartbeatCbPool[ cbSeq ] ){
						heartbeatCbPool[ cbSeq ]( false )
						delete heartbeatCbPool[ cbSeq ]
					}
				}
			}
		}) ( obj.msg.seq )
		
		// 如果超時的話，callback pool裡面的函式就會先被刪掉
		// 一次呼叫sendHeartbeat，就一定會也只會收到一次callback
		setTimeout( function(){
			replayFalseIfErrorOccur( "timeout!!" )
		}, delay )
		channel.sendChannelMessage( targetName, JSON.stringify(obj), replayFalseIfErrorOccur )
	}
	
	/**
	開始心跳測試, 再呼叫一次可以取消之前的心跳測試
	selfName: string
	targetName: string
	cb: function( success ){
		success: bool 是否有心跳
	}
	*/
	
	var hbtid = null
	function startHeartbeat( selfName, targetName, cb ){
		stopHeartbeat()
		sendHeartbeat( selfName, targetName, heartbeatTimeout, function( success ){
			cb( success )
			hbtid = setTimeout( function(){
				startHeartbeat( selfName, targetName, cb )
			}, heartbeatDuration)
		})
	} 
	
	function stopHeartbeat(){
		if( hbtid != null ){
			clearTimeout(hbtid)
			hbtid = null
		}
	}
	 
	function invite( selfName, targetNames, cb ){
		var obj = {
			type: 'invite',
			msg: {
				from: selfName,
				to: targetNames
			}
		}
		for( var i in targetNames ){
			var uid = targetNames[i]
			channel.sendChannelMessage( uid, JSON.stringify(obj), cb )
		}
	}
	
	function receiveInvite( obj ){
		if( invitationCb == null ){
			return
		}
		var from = obj.msg.from
		var targetNames = obj.msg.to
		invitationCb( from, targetNames )
	}
	
	var invitationCb = null
	
	function startReceiveInvitation( selfName, currTargetNames, cb ){
		if( invitationCb != null ){
			invitationCb = null
		}
		invitationCb = (function( selfName, currTargetNames ){
			return function( fromName, recevieNames ){
				var ret = [fromName]
				for( var i in recevieNames ){
					if( recevieNames[i].indexOf( selfName ) != 0 ){
						ret.push( recevieNames[i] )
					}
				}
				var str = ret.join(",")
				if( str != currTargetNames ){
					cb( null, str )
					startReceiveInvitation( selfName, str, cb )
				} else {
					cb( '收到的名稱和目前的名稱一樣' )
				}
			}
		}) ( selfName, currTargetNames )
	}
	
	function sendMessageToSomeone( toId, type, msg ){
		var jsonstr = JSON.stringify( {
			type:type, 
			msg:JSON.parse( JSON.stringify( msg ))
		});
		channel.sendChannelMessage( toId, jsonstr, handleResponse( function( ret ) {
			
		} ));
	}
	
	function handleResponse( cb ) {
		return function ( err, ret ) {
			if ( err != null ) {
				alert( '錯誤:' + err );
			}else {
				cb( ret );
			}
		}
	}
  
	/**
	取得圖片路徑
	pkgName: 'sangoWar' | 'gundamWar' | 'yugioh' | 'army'
	*/
	function getCardImageWithPackageName( pkgName, id ){
		return cardinfoloader.cardimageurl( pkgName, id )
  }
	
	module.createChannel = createChannel
	module.startHeartbeat = startHeartbeat
	module.stopHeartbeat = stopHeartbeat
	module.startReceiveInvitation = startReceiveInvitation
	module.sendMessageToSomeone = sendMessageToSomeone
	module.invite = invite
  module.getCardImageWithPackageName = getCardImageWithPackageName
	
}) (api)