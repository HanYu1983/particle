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
	var oneParticleInfo = "root/particle/list/{0}.json"
	var oneParticleImage = "root/particle/list/{0}.jpg"
	var stockInfoJson = "root/stock/userinfo/{0}.json"
	
	module.sf = sf
	module.cardSuitJson = cardSuitJson
	module.oneParticleInfo = oneParticleInfo
	module.oneParticleImage = oneParticleImage
	module.stockInfoJson = stockInfoJson
	
}) (db2path)