var ygapi = ygapi || {};

(function(module){
	
	// 必須引入
	// <script src="https://apis.google.com/js/client.js?onload=authorize"></script>
	
	/*
		authData : {
			client_id: CLIENT_ID,
			scope: SCOPES,
			immediate: useImmdiate
		}
	*/
	function authorize(authData, cb) {
		gapi.auth.authorize(authData, function(response) {
			cb(response.error, response)
		});
	}
	
	function require(apiname, ver, cb){
		gapi.client.load(apiname, ver).then(function(){
			cb()
		}).then(null, function(err){
			cb(err)
		})
	}
	
	function get(url, cb){
		var request = gapi.client.request({
			path: url
		}).then(function(resp, err){
			var json = JSON.parse( resp.body )
			cb(json.error, json)
		})
	}
	
	/*
	params:{
		'path': '/upload/drive/v2/files',
		'method': 'POST',
		'params': {
			'uploadType': 'multipart'
		},
		'headers': {
			'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
		},
		'body': body
	}
	*/
	function get2(params, cb){
		var req = gapi.client.request(params)
		req.execute( function(res){
			cb( null, res )
		})
	}
	
	module.authorize = authorize
	module.require = require
	module.get = get
	module.get2 = get2
	
}) (ygapi)