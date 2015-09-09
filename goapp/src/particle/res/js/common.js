var common = {};
(function(pkg){
	
	var onModelEvent = new Rx.Subject
	var onModel = new Rx.Subject
	var onView = new Rx.Subject
	
	pkg.onModelEvent = onModelEvent
	pkg.onModel = onModel
	pkg.onView = onView
	
}) (common)