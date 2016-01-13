function dbc2sbc(s){
	if(s == null){
		return null
	}
	return s.replace(/[\uff01-\uff5e]/g,function(a){return String.fromCharCode(a.charCodeAt(0)-65248);}).replace(/\u3000/g," "); 
}

function sangoWar(info){
	var cost = info[5]
	cost = dbc2sbc(cost).replace(/\s/g, "")
	
	var colorValues = "緑赤青紫黒"
	var countryValues = "蜀魏呉漢群"
	var costAry = [0, 0, '他']
	for( var i =0; i<cost.length; i+=2 ){
		var color = cost.charAt(i)
		var amount = parseInt(cost.charAt(i+1))
		if( color != '*' ){
			if( colorValues.indexOf(color) != -1 ){
				costAry[0] = amount
				costAry[2] = countryValues.charAt(colorValues.indexOf(color))
			} else {
				costAry[1] = amount
			}
		}
	}
	info[5] = costAry
	return info
}


module.exports = {
	sangoWar: sangoWar
}