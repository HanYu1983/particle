var common = {};
(function(pkg){
	
	var onModel = new Rx.Subject
	var onView = new Rx.Subject
	
	pkg.onModel = onModel
	pkg.onView = onView
	
}) (common)