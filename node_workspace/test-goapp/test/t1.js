var http = require('http')
var url = require('url') 
var qs = require('querystring')
var async = require('async')

function callApi( path, post_data, cb ){
	
	var options = {
		host: 'localhost',
		port: '8080',
		path: path,
		method: post_data != null ? 'post' : 'get'
	};
	
	if( post_data != null ){
		var datastr = qs.stringify(post_data)
		options.headers = {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': datastr.length
		}
	}
	
	var callback = function(response) {
		var str = ''
		response.on('data', function (chunk) {
			str += chunk;
		});
		response.on('end', function () {
			setTimeout(function(){
				cb( null, str )
			}, 0)
		});
	}
	
	var req = http.request(options, callback)
	if( post_data != null ){
		var datastr = qs.stringify(post_data)
		req.write(datastr)
	}
	
	req.end();
}


var assert = require("assert");
describe('測試卡片方法呼叫', function() {
	
	it('清除', function( done ){
		callApi( '/fn/card/clear', null, function(err, data){
			assert.ifError( err )
			done()
		})
	})
	
	it('清除後使用者數量為0' , function( done ){
		callApi( '/fn/card/user/', null, function(err, data){
			assert.ifError( err )
			var users = JSON.parse( data ).Info
			assert.equal(null, users)
			done()
		})
	})
	
	it('han登入', function ( done ) {
		callApi( '/fn/card/user/', {FBID:'han', Name:'han'}, function(err, data){
			assert.ifError( err )
			done()
		})
	})
	
	
	it('han登入為使用者數量為1', function( done ){
		callApi( '/fn/card/user/', null, function( err, data ){
			assert.ifError( err )
			var users = JSON.parse( data ).Info
			assert.equal( 1, users.length )
			done()
		})
	})
	
	it('vic登入', function ( done ) {
		callApi( '/fn/card/user/', {FBID:'vic', Name:'vic'}, function(err, data){
			assert.ifError( err )
			done()
		})
	})
	
	it('vic登入為使用者數量為2', function( done ){
		callApi( '/fn/card/user/', null, function( err, data ){
			assert.ifError( err )
			var users = JSON.parse( data ).Info
			assert.equal( 2, users.length )
			done()
		})
	})
	
	it('傳訊息給han', function( done ){
		callApi( '/fn/card/message/', {FBID:'han', TargetUser:'han', Content:"haha"}, function( err, data ){
			assert.ifError( err )
			done()
		})
	})
	
	it('han必須有1個訊息', function( done ){
		callApi( '/fn/card/message/', null, function( err, data ){
			assert.ifError( err )
			var msgs = JSON.parse( data ).Info
			assert.equal( 1, msgs.length )
			done()
		})
	})
	
	it('連傳10個訊息給han', function( done ){
		
		function sendMessage( msg ){
			return function( cb ){
				callApi( '/fn/card/message/', {FBID:'han', TargetUser:'han', Content:msg}, function(err, ret){
					cb( err, ret )
				} )
			}
		}
		
		async.parallel([
			sendMessage('t1'),
			sendMessage('t2'),
			sendMessage('t3'),
			sendMessage('t4'),
			sendMessage('t5'),
			sendMessage('t6'),
			sendMessage('t7'),
			sendMessage('t8'),
			sendMessage('t9'),
			sendMessage('t10')
		], function(err){
			assert.ifError( err )
			done()
		});
		
	})
	

	it('han必須有11個訊息', function( done ){
		callApi( '/fn/card/message/', null, function( err, data ){
			assert.ifError( err )
			var msgs = JSON.parse( data ).Info
			assert.equal( 11, msgs.length )
			done()
		})
	})


});





