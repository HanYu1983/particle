var api = api || {};

(function( module ){
	
	var appid = 'deckWiki'
	
	var _cardInfo = {}
	
	/**
	指定的game可以在callback回來前呼叫好幾次沒關係，只會讀一次
	*/
	function cardInfo( game, cb ){
		var promise = _cardInfo[game]
		if( promise == null ){
			promise = $.Deferred()
			cardinfoloader.load( game, 'ch', function(err, data){
				if( err ){
					promise.reject(err)
				} else {
					promise.resolve(data)
				}
			})
			_cardInfo[game] = promise
		}
		promise.done(function( data ){
			cb( null, data )
		})
		promise.fail(function( err ){
			cb( err )
		})
	}
	
	function cardimageurl(game, id){
		return cardinfoloader.cardimageurl(game, id)
	}
	/*
	data: {
		Content: ""
	}
	*/
	function save(data, cb){
		db2.writefile( '../'+appid+'/list.json', data, cb )
	}
	
	/*
	
	*/
	function load(cb){
		db2.file( '../'+appid+'/list.json', null, 'json', cb)
	}
	
	module.cardInfo = cardInfo
	module.cardimageurl = cardimageurl

}) (api)