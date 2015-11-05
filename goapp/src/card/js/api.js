var api = api || {};

(function( module ){
	
	/**
	建立玩家
	data: {
		FBID: string,
		Name: string
	}
	cb: function( err, ret ){
		err:string,
		ret: {
			Info: {}
			Error: string
		}
	}
	*/
	function createUser( data, cb ){
		$.ajax({
			url: '../fn/card/user/',
			type: 'post',
			dataType: 'json',
			data: data,
			success: function(ret){
				cb( ret.Error, ret )
			},
			error: function(xhr, res, err){
				cb( err, null )
			}
		})
	}
	/**
	查詢所有玩家
	cb: function( err, ret ){
		err:string,
		ret: {
			Info: [{}]
			Error: string
		}
	}
	*/
	function users( cb ){
		$.ajax({
			url: '../fn/card/user/',
			type: 'get',
			dataType: 'json',
			success: function(ret){
				cb( ret.Error, ret )
			},
			error: function(xhr, res, err){
				cb( err, null )
			}
		})
	}
	/**
	建立房間
	data: {
		ID: string,
		Name: string
	}
	cb: function( err, ret ){
		err:string,
		ret: {
			Info: {}
			Error: string
		}
	}
	*/
	function createRoom( data, cb ){
		$.ajax({
			url: '../fn/card/room/',
			type: 'post',
			dataType: 'json',
			data: data,
			success: function(ret){
				cb( ret.Error, ret )
			},
			error: function(xhr, res, err){
				cb( err, null )
			}
		})
	}
	/**
	查詢所有房間
	cb: function( err, ret ){
		err:string,
		ret: {
			Info: [{}]
			Error: string
		}
	}
	*/
	function rooms( cb ){
		$.ajax({
			url: '../fn/card/room/',
			type: 'get',
			dataType: 'json',
			success: function(ret){
				cb( ret.Error, ret )
			},
			error: function(xhr, res, err){
				cb( err, null )
			}
		})
	}
	
	/**
	傳送訊息
	data: {
		FBID: string,
		TargetUser: string,
		Content: string,
		UnixTime: int
	}
	cb: function( err, ret ){
		err:string,
		ret: {
			Info: [{}]
			Error: string
		}
	}
	*/
	function message( data, cb ){
		$.ajax({
			url: '../fn/card/message/',
			type: 'post',
			dataType: 'json',
			data: data,
			success: function(ret){
				cb( ret.Error, ret )
			},
			error: function(xhr, res, err){
				cb( err, null )
			}
		})
	}
	
	/**
	接收訊息
	data: {
		FBID: string
		Maxtime: 1		// 存取資料庫的次數。大於1代表要使用longPolling
	}
	cb: function( err, ret ){
		err:string,
		ret: {
			Info: {}
			Error: string
		}
	}
	*/
	function pollMessage( data, cb ){
		// Maxtime剛好不能等於0，所以這句有效。若為0, 就是1
		data.Maxtime = data.Maxtime || 1 
		$.ajax({
			url: '../fn/card/longPollingTargetMessage',
			type: 'get',
			dataType: 'json',
			data: data,
			success: function(ret){
				cb( ret.Error, ret )
			},
			error: function(xhr, res, err){
				cb( err, null )
			}
		})
	}
	
	/**
	使用long polling接受訊息
	data: {
		FBID: string
	}
	cb: function( err, ret ){
		err:string,
		ret: {
			Info: {}
			Error: string
		}
	}
	*/
	function installPollMessageCallback( data, cb ){
		data.Maxtime = 3
		var fn = arguments.callee
		pollMessage( data, function( err, ret ){
			if( err == null ){
				cb( null, ret )
			}
			fn( data, cb )
			/*
			setTimeout( function(){
				fn( data, cb )
			}, 1000 * 10)
			*/
		})
	}
	
	/**
	清除所有資料
	*/
	function clear( cb ){
		$.ajax({
			url: '../fn/card/clear',
			type: 'get',
			success: function(ret){
				cb( null, ret )
			},
			error: function(xhr, res, err){
				cb( err, null )
			}
		})
	}
	
	/**
	取得卡包
	name: "gundamWar"
	cb: function( err, data ){
		data: {
			images: [
				{key -> url}
			]
		}
	}
	*/
	function getCardPackage( name, cb ){
		getCardPackageWithUrl( '../common/cardPackage/'+name+'.json', cb )
	}
	
	/**
	取得卡包
	url: string
	cb: function( err, data ){
		data: {
			images: [
				{key -> url}
			]
		}
	}
	*/
	function getCardPackageWithUrl( url, cb ){
		$.ajax({
			url: url,
			type: 'get',
			dataType: 'json',
			success: function(ret){
				if( ret.images == undefined || ret.images == null ){
					cb( 'format not right' )
				} else {
					cb( null, ret )
				}
			},
			error: function(xhr, res, err){
				cb( err, null )
			}
		})
	}
	
	function getCardImageUrl( path ){
		return path
	}
	
	/**
	取得圖片路徑
	pkg: getCardPackage() 回傳的object
	key: image的key
	*/
	function getCardImageUrlWithPackage( pkg, key ){
		var path = pkg.images[key]
		return getCardImageUrl( path )
	}
	
	/**
	取得卡組包
	cb: function(err, data){
		data:{
			cardSuit: [{
				name: string,
				cards: [cardId:string]
			}]
		}
	}
	*/
	function getCardSuitPackageWithUrl( url, cb ){
		$.ajax({
			url: url,
			type: 'get',
			dataType: 'json',
			success: function(ret){
				if( ret.cardSuit == undefined || ret.cardSuit == null ){
					cb( 'format not right' )
				} else {
					cb( null, ret )
				}
			},
			error: function(xhr, res, err){
				cb( err )
			}
		})
	}
	
	/**
	取得卡組列表
	return: [{name:string, cards:[cardId:string]}]
	*/
	function getCardSuit( pkg ){
		return pkg.cardSuit
	}
	
	
	function createChannel( name, cb ){
		channel.createChannel( name, function( err, ch ){
			channel.addEventListenerAndOpenSocket( ch, {
				onopen: function(){
					cb.onopen()
				},
				onmessage: function( path, option ){
					var origin = JSON.parse( path.data )
					var json = JSON.parse( origin )
					if( handleMessage( json ) == false ){
						cb.onmessage( json )
					}
				},
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
		case 'heartbeat':
			replyHeartbeat( obj, function( err ){
				console.log( err )
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
		setTimeout( replayFalseIfErrorOccur.bind( false ), delay )
		channel.sendChannelMessage( targetName, JSON.stringify(obj), replayFalseIfErrorOccur )
	}
	
	function startHeartbeat( selfName, targetName, cb ){
		sendHeartbeat( selfName, targetName, 3000, function( success ){
			cb( success )
			setTimeout( function(){
				startHeartbeat( selfName, targetName, 3000, cb )
			}, 10000)
		})
	} 
	
	module.createUser = createUser
	module.users = users
	module.createRoom = createRoom
	module.rooms = rooms
	module.message = message
	module.pollMessage = pollMessage
	module.installPollMessageCallback = installPollMessageCallback
	module.clear = clear
	module.getCardPackage = getCardPackage
	module.getCardPackageWithUrl = getCardPackageWithUrl
	module.getCardImageUrl = getCardImageUrl
	module.getCardImageUrlWithPackage = getCardImageUrlWithPackage
	module.getCardSuitPackageWithUrl = getCardSuitPackageWithUrl
	module.getCardSuit = getCardSuit
	module.createChannel = createChannel
	module.startHeartbeat = startHeartbeat
	
}) (api)