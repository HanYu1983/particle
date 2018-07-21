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
		case 'timer':
			handleTimerMsg( obj )
			return true
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
	var heartbeatDuration = 10000
	
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
	
	
	var timerCtx
	
	function handleTimerMsg(obj){
		if(obj.type != 'timer'){
			return
		}
		switch(obj.msg.cmd){
			case 'syncTimer':
			{
				timerCtx = obj.msg.timerCtx
			}
			break;
		}
	}
	
	// 同步時間物件
	// 任何改變時間物件內容的操做都要呼叫這個方法
	function syncTimer(selfName, targetNames, cb){
		var obj = {
			type: 'timer',
			msg: {
				cmd: 'syncTimer',
				timerCtx: timerCtx
			}
		}
		
		for( var i in targetNames ){
			var uid = targetNames[i]
			channel.sendChannelMessage( uid, JSON.stringify(obj), cb )
		}
	}
	
	// 重置時間
	// 起始玩家必須呼叫
	function resetTimer(selfName, targetNames, cb){
		timerCtx = {
			users:[selfName].concat(targetNames).map(name => {return {"name":name, "timer":0}}),
			currUser: 0,
			isRunning: false,
			lastRecordTime: 0
		}
		syncTimer(selfName, targetNames, cb)
	}
	
	function getTimerContext(){
		return timerCtx
	}
	
	function getUser(name){
		var user = timerCtx.users.find(o => o.name == name)
		if(!!user == false){
			timerCtx.users.push({"name":name, timer:0})
		}
		return user
	}
	
	// 取得累積時間
	// var t = getTime('name')
	// var t2 = new Date(t)
	// var h = t2.getUTCHours()
	// var m = t2.getUTCMinutes()
	// var s = t2.getUTCSeconds()
	function getTime(name){
		var user = timerCtx.users.find(o => o.name == name)
		// 沒這個使用者就回傳0, 這應該不會發生
		if( !!user == false){
			console.log('no user:'+name)
			return 0
		}
		// 如果現在是暫停狀態, 就回傳累積的時間
		if(timerCtx.isRunning == false){
			return user.timer
		}
		// 如果是思考中的玩家, 回傳 = 累積時間 + (現在時間 - 開始時間)
		var isCurrUser = timerCtx.users[timerCtx.currUser].name == name
		if(isCurrUser){
			var offset = new Date().getTime() - timerCtx.lastRecordTime
			return user.timer + offset
		}
		// 其他玩家顯示累積時間
		return user.timer
	}
	
	// 開始計時
	function startTimer(selfName, targetNames, cb){
		// 思考中的玩家才能開始計時
		var isCurrUser = timerCtx.users[timerCtx.currUser].name == selfName
		if(isCurrUser == false){
			cb('你不是思考中玩家')
			return
		}
		if(timerCtx.isRunning){
			return
		}
		// 記錄開始的時間
		timerCtx.lastRecordTime = new Date().getTime()
		timerCtx.isRunning = true
		syncTimer(selfName, targetNames, cb)
	}
	
	// 暫停計時
	function stopTimer(selfName, targetNames, cb){
		// 非思考中玩家才能停止計時(公正性)
		var isCurrUser = timerCtx.users[timerCtx.currUser].name == selfName
		if(isCurrUser){
			cb('你是思考中玩家, 不能暫停時間')
			return
		}
		if(timerCtx.isRunning == false){
			return
		}
		// 累積時間在思考中玩家
		var offset = new Date().getTime() - timerCtx.lastRecordTime
		var user = timerCtx.users[timerCtx.currUser]
		user.timer += offset
		timerCtx.isRunning = false
		syncTimer(selfName, targetNames, cb)
	}
	
	// 切換玩家
	function switchUser(selfName, targetNames, cb){
		// 思考中的玩家才能切換玩家
		var isCurrUser = timerCtx.users[timerCtx.currUser].name == selfName
		if(isCurrUser == false){
			cb('你不是思考中玩家')
			return
		}
		// 如果現在非暫停中, 累積時間並重新記錄開始時間
		if(timerCtx.isRunning){
			var currTime = new Date().getTime()
			var offset = currTime - timerCtx.lastRecordTime
			var user = getUser(selfName)
			user.timer += offset
			timerCtx.lastRecordTime = currTime
		}
		// 切換玩家
		timerCtx.currUser = (timerCtx.currUser + 1) % timerCtx.users.length
		syncTimer(selfName, targetNames, cb)
	}
	
	
	// 記錄使用者設定
	function saveUserConfig(key, obj){
		if (typeof(window.localStorage) == "undefined") {
			console.log('window.localStorage not support')
		    return
		}
		window.localStorage.setItem("app/card/config_"+key, JSON.stringify(obj));
	}
	
	// 讀取使用者設定
	// 若還沒有記錄, 回傳defV
	function loadUserConfig(key, defV){
		if (typeof(window.localStorage) == "undefined") {
			console.log('window.localStorage not support')
		    return defV
		}
		var jsonStr = window.localStorage["app/card/config_"+key]
		if(!!jsonStr == false){
			return defV
		}
		return JSON.parse(jsonStr)
	}
	
	module.createChannel = createChannel
	
	module.startHeartbeat = startHeartbeat
	module.stopHeartbeat = stopHeartbeat
	
	module.invite = invite
	module.startReceiveInvitation = startReceiveInvitation
	
	module.sendMessageToSomeone = sendMessageToSomeone
	
	module.getCardImageWithPackageName = getCardImageWithPackageName
	
	module.resetTimer = resetTimer
	module.getTime = getTime
	module.startTimer = startTimer
	module.stopTimer = stopTimer
	module.switchUser = switchUser
	module.getTimerContext = getTimerContext
	
	module.saveUserConfig = saveUserConfig
	module.loadUserConfig = loadUserConfig
	
}) (api)