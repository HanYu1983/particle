var gameController = {};
(function( module ){
	function loadCardData( game, lang, onLoadGameCallback ){
		switch( game ){
			case 'battleSpirits':
				battleSpirits.load( "../common/txt/battleSpiritsList/", onLoadGameCallback)
				break;
			case 'army':
				army.load(onLoadGameCallback)
				break;
			case 'gundamWar':
				gundamWar.load("../common/txt/gundamWarList.json", onLoadGameCallback)
				break;
			case 'yugioh':
				if( lang == 'jp' ){
					yugioh.load("../common/txt/yugiohListJp.json", onLoadGameCallback)
				} else if ( lang == 'en' ){
					yugioh.load("../common/txt/yugiohListEn.json", onLoadGameCallback)
				} else if ( lang == 'ch' ){
					yugioh.load("../common/txt/yugiohListCh.json", onLoadGameCallback)
				}
				break;
			case 'sangoWar':
				sangoWar.load( "../common/txt/sangoList.txt", onLoadGameCallback);
				break;
			case 'magic':
				magic.load( "../common/txt/magicList.xml", onLoadGameCallback);
				break;
		}
	}
	
	function getCardUrl( game, card ){
		switch( game ){
			case 'sangoWar':
				return api.getCardImageWithPackageName( 'sangoWar', sangoWar.formatKey( card.id ) );
			default:
				return api.getCardImageWithPackageName( game, card.id );
		}
	}
	
	function getQueryStr( game, str ){
		switch( game ){
			case 'battleSpirits':
				return battleSpiritsQuerystring2fns( str )
			case 'army':
				return armyQuerystring2fns( str );
			case 'gundamWar':
				return gundamWarQuerystring2fns(str)
			case 'yugioh':
				return yugiohQuerystring2fns(str)
			case 'sangoWar':
				return sangoWarQuerystring2fns(str);
			case 'magic':
				return magicQuerystring2fns(str);
		}
	}
	
	function battleSpiritsQuerystring2fns( qstr ){
		var url = $.url("?" + qstr)
		var query = url.data.param.query
		var fns = []
		for( var k in query ){
			var v = query[k]
			if( v == "" ){
				continue
			}
		}
	}
	
	function costGe( idx, value ){
		return function( obj ){
			if( obj.cost ){
				return obj.cost[idx].replace(/\W/g, "") >= value
			}
			return false
		}
	}
	
	function costLe( idx, value ){
		return function( obj ){
			if( obj.cost ){
				return obj.cost[idx].replace(/\W/g, "") <= value
			}
			return false
		}
	}
	
	function areaEq( value ){
		return function( obj ){
			if( obj.area ){
				return obj.area == value
			}
			return false
		}
	}
	
	function typeEq( value ){
		return function( obj ){
			return obj['card-id'].split('-')[0] == value
		}
	}
	
	function armyQuerystring2fns( qstr ){
		var url = $.url("?" + qstr)
		var query = url.data.param.query
		var fns = []
		for( var k in query ){
			var v = query[k]
			if( v == "" ){
				continue
			}
			switch( k ){
			case 'tech_1':
				fns.push( cardsearch.indexGe( "CostAry", 0, v ) )
				break
			case 'tech_2':
				fns.push( cardsearch.indexLe( "CostAry", 0, v ) )
				break
			case 'cost_1':
				fns.push( cardsearch.indexGe( "CostAry", 1, v ) )
				break
			case 'cost_2':
				fns.push( cardsearch.indexLe( "CostAry", 1, v ) )
				break
			case 'build_1':
				fns.push( cardsearch.indexGe( "CostAry", 2, v ) )
				break
			case 'build_2':
				fns.push( cardsearch.indexLe( "CostAry", 2, v ) )
				break
			case 'nation':
				fns.push( cardsearch.attrEq( "Nation", v ) )
				break
			case 'ntype':
				fns.push( cardsearch.attrEq( "Ntype", v ) )
				break
			case 'ctype':
				fns.push( cardsearch.attrEq( "Ctype", v ) )
				break
			case 'atype':
				fns.push( cardsearch.attrEq( "Atype", v ) )
				break
			case 'pland':
				fns.push( cardsearch.attrEq( "Pland", v ) )
				break;
			case 'psky':
				fns.push( cardsearch.attrEq( "Psky", v ) )
				break;
			case 'psoilder':
				fns.push( cardsearch.attrEq( "Psoilder", v ) )
				break;
			case 'pcity':
				fns.push( cardsearch.attrEq( "Pcity", v ) )
				break;
			case 'speed':
				fns.push( cardsearch.attrEq( "Speed", v ) )
				break;
			case "id":
				fns.push( cardsearch.attrEq( "id", v ) )
				break
			case 'card_name':
				fns.push( cardsearch.attrEq( "Name", v ) )
				break;
			case 'rule':
				fns.push( cardsearch.attrEq( "Text", v ) )
				break;
			default:
				if( v == 'on' ){
					fns.push( cardsearch.attrEq( "Abs", k ) )
				}
				break;
		}}
		return fns;
	}
	/*
            "id" string
            "color" "茶"|"藍"|"紫"|"白"|"綠"|"紅"|"黑"
            "name" string
            "pkg" string
            "cost" "1-1-1"
            "atk" ["1/3", "1/3", "1/3"]
            "area" "宇宙/地球"
            "card-id" string
            "context" string
	*/
	function gundamWarQuerystring2fns( qstr ){
		var url = $.url("?" + qstr)
		var query = url.data.param.query
		var fns = []
		for( var k in query ){
			var v = query[k]
			if( v == "" ){
				continue
			}
			switch( k ){
			case 'card_name':
				fns.push( cardsearch.attrEq( "name", v ) )
				break;
			case 'ctype':
				switch( v ){
				case 'G':
					fns.push( typeEq( "G" ) )
					break
				case 'unit':
					fns.push( typeEq( "U" ) )
					break
				case 'command':
					fns.push( typeEq( "C" ) )
					break
				case 'operation':
					fns.push( typeEq( "O" ) )
					break
				case 'character':
					fns.push( typeEq( "CH" ) )
					break
				}
				break
			case 'cost_1':
				fns.push( costGe( 0, v ) )
				break
			case 'cost_2':
				fns.push( costLe( 0, v ) )
				break
			case 'costAll_1':
				fns.push( costGe( 1, v ) )
				break
			case 'costAll_2':
				fns.push( costLe( 1, v ) )
				break
			case 'atk_1':
				fns.push( cardsearch.indexGe( "atk", 0, v ) )
				break
			case 'atk_2':
				fns.push( cardsearch.indexLe( "atk", 0, v ) )
				break
			case 'atk2_1':
				fns.push( cardsearch.indexGe( "atk", 1, v ) )
				break
			case 'atk2_2':
				fns.push( cardsearch.indexLe( "atk", 1, v ) )
				break
			case 'def_1':
				fns.push( cardsearch.indexGe( "atk", 2, v ) )
				break
			case 'def_2':
				fns.push( cardsearch.indexLe( "atk", 2, v ) )
				break
			case 'ntype':
				fns.push( cardsearch.attrEq( "color", v ) )
				break;
			case "id":
				fns.push( cardsearch.attrEq( "card-id", v ) )
				break
			case 'rule':
				fns.push( cardsearch.attrEq( "context", v ) )
				break;
			case 'area':
				fns.push( areaEq( v ) )
				break;
			default:
				if( v == "on" ){
					fns.push( cardsearch.attrEq( "context", k ))
				}
			}
			
		}
		return fns
	}
	
	// 三國尋找方法實做
	function sangoWarQuerystring2fns( qstr ){
		var url = $.url("?" + qstr)
		var query = url.data.param.query
		var fns = []
		for( var k in query ){
			var v = query[k]
			if( v == "" ){
				continue
			}
			switch( k ){
			case "id":
				fns.push( cardsearch.attrEq( "id", v ) )
				break
			case "acity":
				fns.push( cardsearch.attrEq( "acity", parseInt(v) ) )
				break
			case "atype":
				fns.push( cardsearch.attrEq( "atype2", v ) )
				break
			case "card_name":
				fns.push( cardsearch.attrEq( "cname", v ) )
				break
			case "costAll_2":
				fns.push( cardsearch.attrLe( "costA", parseInt(v) ))
				break
			case "costAll_1":
				fns.push( cardsearch.attrGe( "costA", parseInt(v) ))
				break
			case "cost_2":
				fns.push( cardsearch.attrLe( "cost", parseInt(v) ))
				break
			case "cost_1":
				fns.push( cardsearch.attrGe( "cost", parseInt(v) ))
				break
			case "ctype":
				fns.push( cardsearch.attrEq( "ctype", v ) )
				break
			case "ntype":
				fns.push( cardsearch.attrEq( "ntype", v ) )
				break
			case "power_2":
				fns.push( cardsearch.attrLe( "power", parseInt(v) ))
				break
			case "power_1":
				fns.push( cardsearch.attrGe( "power", parseInt(v) ))
				break
			case "rule":
				fns.push( cardsearch.attrEq( "content", v ))
				break
			case "symbol":
				fns.push( cardsearch.attrEq( "atype", v ) )
				break
			default:
				if( v == "on" ){
					fns.push( cardsearch.attrEq( "ability", k ))
				}
			}
		}
		return fns
	}
	
	// 遊戲王尋找方法實做
	/*
					id: coldata[0],
					name: coldata[1],
					level: parseInt(coldata[2]),
					attribute: coldata[3],
					race: coldata[4],
					type: coldata[5],
					lscale: parseInt(coldata[6]),
					rscale: parseInt(coldata[7]),
					attack: parseInt(coldata[8]),
					defence: parseInt(coldata[9]),
					text: decoded,
					alias: coldata[11],
					setcode: coldata[12]
	*/
	function yugiohQuerystring2fns( qstr ){
		var url = $.url("?" + qstr)
		var query = url.data.param.query
		var fns = []
		for( var k in query ){
			var v = query[k]
			if( v == "" ){
				continue
			}
			switch( k ){
			case "card_name":
				fns.push( cardsearch.attrEq( "name", v ) )
				break;
			case "rule":
				fns.push( cardsearch.attrEq( "desc", v ))
				break
			case "id":
				fns.push( cardsearch.attrEq( "id", v ) )
				break
			case "attr":
				fns.push( cardsearch.attrEq( "attribute", v ) )
				break
			case 'race':
				fns.push( cardsearch.attrEq( "race", v ) )
				break
			case "ctype":
				fns.push( cardsearch.attrEq( "type", v ) )
				break
			case "ctype2":
				fns.push( cardsearch.attrEq( "type", v ) )
				break	
			case 'lscale_1':
				fns.push( cardsearch.attrGe( "lscale", v ) )
				break;
			case 'lscale_2':
				fns.push( cardsearch.attrLe( "lscale", v ) )
				break;
			case 'rscale_1':
				fns.push( cardsearch.attrGe( "rscale", v ) )
				break;
			case 'rscale_2':
				fns.push( cardsearch.attrLe( "rscale", v ) )
				break;
			case 'level_1':
				fns.push( cardsearch.attrGe( "level", v ) )
				break;
			case 'level_2':
				fns.push( cardsearch.attrLe( "level", v ) )
				break;
			case 'atk_1':
				fns.push( cardsearch.attrGe( "atk", v ) )
				break;
			case 'atk_2':
				fns.push( cardsearch.attrLe( "atk", v ) )
				break;
			case 'def_1':
				fns.push( cardsearch.attrGe( "def", v ) )
				break;
			case 'def_2':
				fns.push( cardsearch.attrLe( "def", v ) )
				break;
			}
		}
		return fns
	}
	
	/*
					id: card.find('name').html(),
					name: card.find('name').html(),
					color: "UB",
					manacost: [W, B, R, U, G, 5],
					cmc: card.find('cmc').html(),
					type: card.find('type').html(),
					tablerow: card.find('tablerow').html(),
					text: card.find('text').html(),
					atk: atk,
					def: def
	*/
	
	function manacostGe( idx, value ){
		return function( obj ){
			return obj['manacost'][idx] >= value
		}
	}
	
	function manacostLe( idx, value ){
		return function( obj ){
			return obj['manacost'][idx] <= value
		}
	}
	
	function manacostEq( idx, value ){
		return function( obj ){
			return obj['manacost'][idx] == value
		}
	}
	
	function magicQuerystring2fns( qstr ){
		var url = $.url("?" + qstr)
		var query = url.data.param.query
		var fns = []
		for( var k in query ){
			var v = query[k]
			if( v == "" ){
				continue
			}
			switch( k ){
				case 'set':
					fns.push( cardsearch.attrEq( "set", v ) )
					break
				case 'id':
					fns.push( cardsearch.attrEq( "name", v ) )
					break
				case "card_name":
					fns.push( cardsearch.attrEq( "name", v ) )
					break
				case 'ctype':
					fns.push( cardsearch.attrEq( "type", v ) )
					break
				case 'ctype2':
					fns.push( cardsearch.attrEq( "type", v ) )
					break;
				case 'ctype3':
					fns.push( cardsearch.attrEq( "type", v ) )
					break	
				case 'atk_1':
					fns.push( cardsearch.attrGe( "atk", v ) )
					break;
				case 'atk_2':
					fns.push( cardsearch.attrLe( "atk", v ) )
					break;
				case 'def_1':
					fns.push( cardsearch.attrGe( "def", v ) )
					break;
				case 'def_2':
					fns.push( cardsearch.attrLe( "def", v ) )
					break;
				case 'white_1':
					fns.push( manacostGe( 0, v ) )
					break;
				case 'white_2':
					fns.push( manacostLe( 0, v ) )
					break;
				case 'blue_1':
					fns.push( manacostGe( 3, v ) )
					break;
				case 'blue_2':
					fns.push( manacostLe( 3, v ) )
					break;
				case 'red_1':
					fns.push( manacostGe( 2, v ) )
					break;
				case 'red_2':
					fns.push( manacostLe( 2, v ) )
					break;
				case 'green_1':
					fns.push( manacostGe( 4, v ) )
					break;
				case 'green_2':
					fns.push( manacostLe( 4, v ) )
					break;
				case 'black_1':
					fns.push( manacostGe( 1, v ) )
					break;
				case 'black_2':
					fns.push( manacostLe( 1, v ) )
					break;
				case 'all_1':
					fns.push( cardsearch.attrGe( "cmc", v ) )
					break;
				case 'all_2':
					fns.push( cardsearch.attrLe( "cmc", v ) )
					break;
				case "rule":
					fns.push( cardsearch.attrEq( "text", v ))
					break
				case "set":
					fns.push( cardsearch.attrEq( "set", v ))
					break
				default:
					if( v == "on" ){
						fns.push( cardsearch.attrEq( "text", k ))
					}
			}
		}
		return fns
	}
	
	module.loadCardData = loadCardData;
	module.getCardUrl = getCardUrl;
	module.getQueryStr = getQueryStr;

})( gameController );

