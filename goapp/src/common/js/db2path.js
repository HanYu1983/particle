var db2path = db2path || {};

(function(module){
	
	function sf(s, args){
		return s.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
			if (m == "{{") { return "{"; }
			if (m == "}}") { return "}"; }
			return args[n]
		})
	}
	
	var cardSuitJson = "root/user/{0}/cardSuit.json"
	
	module.sf = sf
	module.cardSuitJson = cardSuitJson
	
}) (db2path)