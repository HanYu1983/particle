var api = api || {};

(function( module ){
	
	var appid = 'deckwiki'
  var GOOGLE_CLIENT_ID = '36532962877-lrnkutm4n143dn8jb13017ljg6cg08hj.apps.googleusercontent.com';
  // Set authorized scope.
  var GOOGLE_SCOPES = ['https://www.googleapis.com/auth/analytics.readonly'];
	var GA_ID = 'ga:109490266'
	
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
	
	function data(cb){
		async.waterfall([
			_.partial(
				ygapi.authorize,
				{
					client_id: GOOGLE_CLIENT_ID,
					scope: GOOGLE_SCOPES,
					immediate: true
				}
			),
			function(token,cb ){
				ygapi.require('analytics', 'v3', cb)
			},
			_.partial( ygapi.get2, {
				path: 'https://www.googleapis.com/analytics/v3/data/ga',
				params: {
					ids: GA_ID,
					"start-date": 'today',
					"end-date": 'today',
					metrics: 'ga:totalEvents',
					dimensions: 'ga:eventAction'
				}
			})
		], function(err, data){
			var info = {}
			for( var i in data.rows ){
				var row = data.rows[i]
				var key = row[0]
				var count = parseInt(row[1])
				info[key] = count
			}
			cb(err, info)
		})
	}
	
	module.cardInfo = cardInfo
	module.cardimageurl = cardimageurl
	module.load = load
	module.data = data

}) (api)