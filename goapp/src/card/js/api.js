var api = api || {};

(function( module ){
	
	/**
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
	function pollMessage( data, cb ){
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
		var fn = arguments.callee
		pollMessage( data, function( err, ret ){
			if( err == null ){
				cb( null, ret )
			}
			//fn( data, cb )
			setTimeout( function(){
				fn( data, cb )
			}, 1000 * 5)
		})
	}
	
	module.createUser = createUser
	module.users = users
	module.createRoom = createRoom
	module.rooms = rooms
	module.message = message
	module.pollMessage = pollMessage
	module.installPollMessageCallback = installPollMessageCallback
	
}) (api)