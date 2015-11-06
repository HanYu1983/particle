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
		var map2 = "①②③④"
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
				case 'R':
				case 'PT/超TR':
				case 'R/TR':
				case 'SR/TR':
				case 'UC/TR':
				case 'UC/EXF':
				case 'C/EXF':
				case 'R/EXF':
				case 'SR/EXF':
				case 'ST限定R':
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
	
	
	function attrEq( key, value ){
		return function( obj ){
			if( key == "cost" ){
				return obj[ "cost" ][0] == value
			} else if( key == "costA" ){
				return obj[ "cost" ][1] == value
			} else {
				switch( typeof obj[key] ){
				case "string":
					return obj[ key ].indexOf( value ) != -1
				case "number":
					return obj[ key ] == value
				}
			}
			return false
		}
	}
	
	function attrGe( key, value ){
		return function( obj ){
			if( key == "cost" ){
				return obj[ "cost" ][0] >= value
			} else if( key == "costA" ){
				return obj[ "cost" ][1] >= value
			} else {
				switch( typeof obj[key] ){
				case "string":
					return obj[ key ].indexOf( value ) != -1
				case "number":
					return obj[ key ] >= value
				}
			}
			return false
		}
	}
	
	function attrLe( key, value ){
		return function( obj ){
			if( key == "cost" ){
				return obj[ "cost" ][0] <= value
			} else if( key == "costA" ){
				return obj[ "cost" ][1] <= value
			} else {
				switch( typeof obj[key] ){
				case "string":
					return obj[ key ].indexOf( value ) != -1
				case "number":
					return obj[ key ] <= value
				}
			}
			return false
		}
	}
	
	function and( fns ){
		return function( obj ){
			return _.reduce( fns, function( ret, fn ){
				return ret && fn( obj )
			}, true)
		}
	}
	
	function filter( fn, list ){
		var ret = _.filter( list, fn )
		return ret
	}
	
	function querystring2fns( qstr ){
		var url = $.url("?" + qstr)
		var query = url.data.param.query
		var fns = []
		for( var k in query ){
			var v = query[k]
			if( v == "" ){
				continue
			}
			switch( k ){
			case "acity":
				fns.push( attrEq( "acity", parseInt(v) ) )
				break
			case "atype":
				fns.push( attrEq( "atype2", v ) )
				break
			case "card_name":
				fns.push( attrEq( "cname", v ) )
				break
			case "costAll_2":
				fns.push( attrLe( "costA", parseInt(v) ))
				break
			case "costAll_1":
				fns.push( attrGe( "costA", parseInt(v) ))
				break
			case "cost_2":
				fns.push( attrLe( "cost", parseInt(v) ))
				break
			case "cost_1":
				fns.push( attrGe( "cost", parseInt(v) ))
				break
			case "ctype":
				fns.push( attrEq( "ctype", v ) )
				break
			case "ntype":
				fns.push( attrEq( "ntype", v ) )
				break
			case "power_2":
				fns.push( attrLe( "power", parseInt(v) ))
				break
			case "power_1":
				fns.push( attrGe( "power", parseInt(v) ))
				break
			case "rule":
				fns.push( attrEq( "content", v ))
				break
			case "symbol":
				fns.push( attrEq( "atype", v ) )
				break
			default:
				if( v == "on" ){
					fns.push( attrEq( "ability", k ))
				}
			}
		}
		return fns
	}
	
	function search( querys, cardlist ){
		var fns = sangoWar.querystring2fns(querys)
		return filter( and( fns ), cardlist )
	}
	
	function formatKey( id ){
		if( id.indexOf("(") == -1 ){
			return id + ".jpg"
		}
		return id.substring( 0, id.indexOf("(") ) + ".jpg"
	}
	
	module.load = load
	module.csv2json = csv2json
	module.filter = filter
	module.and = and
	module.attrEq = attrEq
	module.attrGe = attrGe
	module.attrLe = attrLe
	module.querystring2fns = querystring2fns
	module.search = search
	module.formatKey = formatKey
	
}) ( sangoWar )