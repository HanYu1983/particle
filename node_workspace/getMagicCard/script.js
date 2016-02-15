function dbc2sbc(s){
	if(s == null){
		return null
	}
	return s.replace(/[\uff01-\uff5e]/g,function(a){return String.fromCharCode(a.charCodeAt(0)-65248);}).replace(/\u3000/g," "); 
}

function sangoWar(info){
	var id = info[1]
	var cost = info[5]
	cost = dbc2sbc(cost).replace(/\s/g, "")
	
	// 先預設為type=1的格式
	var type = 1
	// 非九鼎大呂, 15彈之前是用type=0的格式
	if( id.search(/DR-/) == -1 && id.search(/15-/) == -1){
		type = 0
	}
	
	var countryValues = "蜀魏呉漢群"
	var colorValues = "緑赤青紫黒"
	
	switch(type){
	default:
		{
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
	case 1:
		{
			var map2 = "①②③④⑤"
			var costAry = [0, 0, '他']
			for( var k in cost ){
				var c = cost[k]
				if( map2.indexOf( c ) != -1 ){
					costAry[1] = map2.indexOf( c ) + 1
				} else {
					costAry[0] ++
					costAry[2] = countryValues.charAt(colorValues.indexOf(c))
				}
			}
			info[5] = costAry
			return info
		}
	}
}

/*
	[
		"族群暴君谢迪西",
		"传奇生物～那伽／祭师 3/3, \n          1UBG (4)\n          ",
		"每当族群暴君谢迪西进战场或攻击时，将你牌库顶的三张牌置入你的坟墓场。<br><br>每当一张或数张生物牌从你的牌库置入你的坟墓场时，将一个2/2黑色灵俑衍生生物放进战场。",
		"Sidisi, Brood Tyrant"
	],
*/
function magic(info){
	var ret = /(\W+)? ?(\d)?\/?(\d)?,?([\s\S]*)/.exec(info[1])
	/*
	if( ret[4] != null ){
		ret[4] = /(\d?\w)+? /.exec(ret[4])
	}
	*/
	info[1] = ret
	return info
}

module.exports = {
	sangoWar: sangoWar,
	magic: magic
}