var sangoWar = sangoWar || {};

(function( module ){
	
	function load( path, cb ){
		$.get(path)
			.pipe( CSV.parse )
			.done( function(rows) {
				var cardlist = sangoWar.csv2json( rows )
				cb( null, cardlist )
			})
	}
	
	function parseCost( text ){
		//var map1 = "緑黒赤紫青"
		var map2 = "①②③④⑤"
		var ret = [0, 0]
		for( var k in text ){
			var c = text[k]
			if( map2.indexOf( c ) != -1 ){
				ret[1] = map2.indexOf( c ) + 1
			} else {
				ret[0] ++
			}
		}
		return ret
	}
	
	function csv2json( rows ){
		var cardlist = [];
		for( var i =0; i < rows.length; i++){
			switch( rows[i][0] ){
				case 'CP':
				case 'UC':
				case 'PT':
				case 'C':
				case 'SR':
				case 'TR':
				case 'R':
				case 'LE':
				case 'PT/超TR':
				case 'R/TR':
				case 'SR/TR':
				case 'UC/TR':
				case 'UC/EXF':
				case 'C/EXF':
				case 'R/EXF':
				case 'R/TR/超TR':
				case 'SR/EXF':
				case 'ST限定R':
				case 'ST限定SR':
				case 'SR/伝説TR':
				case 'SR/TR/超TR':
				case '転生':
					var rare = rows[i];
					var id = rows[i+1][0];
					var ntype = rows[i+2][0];//勢力
					var ctype = rows[i+3][0];//卡片種類
					var cname = rows[i+4][0];//名稱
					var atype = rows[i+8][0];//種別
					var atype2 = rows[i+9][0];//兵種
					var cost = rows[i+10][0];//cost
					var acity = rows[i+11][0];//攻城
					var power = rows[i+12][0];//武力
					var ability = rows[i+13][0];//能力
					var content = rows[i+14][0];//內文
					var counter;
					if( rows[i+15] != undefined ){
						counter = rows[i+15][0];//解說&反擊技略
					}
					//用這個檢查他是不是少打-
					//console.log( ability );
					cardlist.push({
						id:id,
						rare:rare,
						ntype:ntype,
						ctype:ctype,
						cname:cname,
						atype:atype,
						atype2:atype2,
						cost:parseCost(cost),
						acity:acity,
						power:power,
						ability:ability,
						content:content,
						counter:counter
					})
				break
			}
		}
		return cardlist
	}
	
	function formatKey( id ){
		if( id.indexOf("(") == -1 ){
			return id + ".jpg"
		}
		return id.substring( 0, id.indexOf("(") ) + ".jpg"
	}
	
	module.load = load
	module.csv2json = csv2json
	module.formatKey = formatKey
	
}) ( sangoWar )