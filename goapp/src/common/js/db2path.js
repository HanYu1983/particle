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
	var userInfoJson = "root/user/{0}/userInfo.json"
	
	module.sf = sf
	module.cardSuitJson = cardSuitJson
	module.userInfoJson = userInfoJson
	
}) (db2path)