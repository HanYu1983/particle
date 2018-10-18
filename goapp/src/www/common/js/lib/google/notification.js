var google = google || {};
(function(){
	window.addEventListener('load', function () {
	  // At first, let's check if we have permission for notification
	  // If not, let's ask for it
		if (window.Notification && Notification.permission !== "granted") {
			Notification.requestPermission(function (status) {
				if (Notification.permission !== status) {
					Notification.permission = status;
				}
			});
		}
	});
	
	function notify( msg, iconurl ){
		if (window.Notification && Notification.permission === "granted") {
			return new Notification( msg, { icon: iconurl } );
		}

		// If the user hasn't told if he wants to be notified or not
		// Note: because of Chrome, we are not sure the permission property
		// is set, therefore it's unsafe to check for the "default" value.
		else if (window.Notification && Notification.permission !== "denied") {
		  Notification.requestPermission(function (status) {
			if (Notification.permission !== status) {
			  Notification.permission = status;
			}

			// If the user said okay
			if (status === "granted") {
				return new Notification( msg, { icon: iconurl } );
			}

			// Otherwise, we can fallback to a regular modal alert
			else {
			  alert("Hi!");
			  return null;
			}
		  });
		}

		// If the user refuses to get notified
		else {
		  // We can fallback to a regular modal alert
		  alert("Hi!");
		  return null;
		}
		
	}
	
	google.notify = notify;
})();