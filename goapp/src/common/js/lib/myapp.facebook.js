var myapp = myapp || {};
myapp.facebook = myapp.facebook || {};
(function(){
	
	function init( appId, callback ){
		(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v2.5&appId=" + appId;
		  fjs.parentNode.insertBefore(js, fjs);
		  if(callback !=undefined)	callback();
		}(document, 'script', 'facebook-jssdk'));
	}
	function login( callback ){
		FB.login( callback );
	}
	function getLoginStatus( callback ){
		FB.getLoginStatus( function( res ){
			callback( res.status, res.authResponse, res );
		});
	}
	function postMessageToMyboard( options ){
		FB.ui({
			method: 'feed', // 發布貼文
			name: options.name,
			link: options.link,
			picture: options.picture,
			caption: options.caption,
			description: options.description
		},function(response){
			options.callback( response );
		});
	}
	function getData( id, callback ){
		FB.api(
			id,
			function (response) {
				callback( response );
			}
		);
	}
	function getMyData( callback ){
		FB.api(
			"/me",
			function (response) {
				callback( response );
			}
		);
	}
	
	myapp.facebook.init = init;
	myapp.facebook.login = login;
	myapp.facebook.getLoginStatus = getLoginStatus;
	myapp.facebook.postMessageToMyboard = postMessageToMyboard;
	myapp.facebook.getData = getData;
	myapp.facebook.getMyData = getMyData;
	
})();
