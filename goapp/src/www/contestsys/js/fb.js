var fb = {};
(function(module){
	
	var localAppId = '679171275511375';
	var removeAppId = '425311264344425';
	
	function getAppId(){
		if (location.hostname === "localhost" || location.hostname === "127.0.0.1"){
	    	return localAppId
		}else{
			return removeAppId
		}
	}
	
	var loginCallback = null
	
	function init(cb){
			// Load the SDK asynchronously
		(function(d, s, id) {
		    var js, fjs = d.getElementsByTagName(s)[0];
		    if (d.getElementById(id)) return;
		    js = d.createElement(s); js.id = id;
		    js.src = "https://connect.facebook.net/en_US/sdk.js";
		    fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
		
		window.fbAsyncInit = function() {
		    FB.init({
		      	appId      : getAppId(),
		      	cookie     : true,  // enable cookies to allow the server to access 
		         	                 // the session
		      	xfbml      : true,  // parse social plugins on this page
		      	version    : 'v2.8' // use graph api version 2.8
		    });
		
		    // Now that we've initialized the JavaScript SDK, we call 
		    // FB.getLoginStatus().  This function gets the state of the
		    // person visiting this page and can return one of three states to
		    // the callback you provide.  They can be:
		    //
		    // 1. Logged into your app ('connected')
		    // 2. Logged into Facebook, but not your app ('not_authorized')
		    // 3. Not logged into Facebook and can't tell if they are logged into
		    //    your app or not.
		    //
		    // These three cases are handled in the callback function.
		
		    FB.getLoginStatus(function(response) {
		      statusChangeCallback(response);
		    });
	  	};
		loginCallback = cb
	}
	
	// This is called with the results from from FB.getLoginStatus().
	function statusChangeCallback(response) {
	    // The response object is returned with a status field that lets the
	    // app know the current login status of the person.
	    // Full docs on the response object can be found in the documentation
	    // for FB.getLoginStatus().
	    if (response.status === 'connected') {
			if(loginCallback != null){
				loginCallback(null, response.authResponse)
			}
	    } else {
	      	if(loginCallback != null){
				loginCallback('login error', response)
			}
	    }
	  }
	
	// This function is called when someone finishes with the Login
	// Button.  See the onlogin handler attached to it in the sample
	// code below.
	function checkLoginState(cb) {
	    FB.getLoginStatus(function(response) {
			statusChangeCallback(response);
		});
	}
	
	function me(cb){
		FB.api('/me', function(response) {
	      	cb(null, response)
	    });
	}
	
	module.checkLoginState = checkLoginState
	module.init = init
	module.me = me
})(fb)