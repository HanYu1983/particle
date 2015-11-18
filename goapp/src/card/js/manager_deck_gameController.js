var gameController = {};
(function( module ){
	function loadCardData( game, lang, onLoadGameCallback ){
		switch( game ){
			case 'yugioh':
				if( lang == 'jp' ){
					yugioh.load("../common/txt/yugiohListJp.json", onLoadGameCallback)
				} else if ( lang == 'en' ){
					yugioh.load("../common/txt/yugiohListEn.json", onLoadGameCallback)
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
			case 'yugioh':
				return api.getCardImageWithPackageName( 'yugioh', card.id );
				break;
			case 'sangoWar':
				return api.getCardImageWithPackageName( 'sangoWar', sangoWar.formatKey( card.id ) );
				break;
			case 'magic':
				return api.getCardImageWithPackageName( 'magic', card.id );
		}
	}
	
	function getQueryStr( game, str ){
		switch( game ){
			case 'yugioh':
				return yugiohQuerystring2fns(str)
			case 'sangoWar':
				return sangoWarQuerystring2fns(str);
			case 'magic':
				return magicQuerystring2fns(str);
		}
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

