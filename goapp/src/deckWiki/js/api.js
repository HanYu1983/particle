var api = api || {};

(function( module ){
	
	var appid = 'deckwiki'
	
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
	function save(id, data, cb){
		db2.writefile( '../deckwikidbfile2/'+appid+'/list/'+id+'.json', data, cb )
	}
	
	/*
	
	*/
	function load(cb){
		$.ajax({
			url: '../fn/publicdeck',
			dataType: 'json',
			success: function(data){
				cb(data.Error, data.Info)
			},
			error: function(xhr, res, err){
				cb(err)
			}
		})
	}
	
	function saveMessage(id, data, cb){
		db2.writefile( '../deckwikidbfile2/'+appid+'/message/'+id+'.json', data, cb )
	}
	
	function loadMessage(id, data, cb){
		db2.filelist( '../deckwikidbfile2/'+appid+'/message/?Detail', null, cb)
	}
	
	module.cardInfo = cardInfo
	module.cardimageurl = cardimageurl
	module.save = save
	module.load = load
	module.saveMessage = saveMessage
	module.loadMessage = loadMessage

}) (api)