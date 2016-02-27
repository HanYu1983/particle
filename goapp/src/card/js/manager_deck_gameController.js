var gameController = {};
(function( module ){
	/*
	function loadCardData( game, lang, onLoadGameCallback ){
		switch( game ){
			case 'ws':
				ws.load( "../common/txt/wsList/", onLoadGameCallback)
				break;
			case 'sgs':
				sgs.load( "../common/txt/sgsList.json", onLoadGameCallback)
				break;
			case 'gundamWarN':
				gundamWarN.load( "../common/txt/gundamWarNexAList/", onLoadGameCallback)
				break;
			case 'dragonZ':
				dragonZ.load( "../common/txt/dragonZList.json", onLoadGameCallback)
				break;
			case 'crusade':
				crusade.load( "../common/txt/crusadeList/", onLoadGameCallback)
				break;
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
				if ( lang == 'ch' ){
					sangoWar.loadCh( "../common/txt/sangoList/", onLoadGameCallback);
				} else {
					sangoWar.load("../common/txt/sangoList.txt", onLoadGameCallback)
				}
				
				break;
			case 'magic':
				magic.load( "../common/txt/magicList.xml", onLoadGameCallback);
				break;
		}
	}
	*/
	
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
			case 'sengoku':
				return sengokuQuerystring2fns( str );
			case 'ws':
				return wsQuerystring2fns( str )
			case 'sgs':
				return sgsQuerystring2fns( str );
			case 'dragonZ':
				return dragonZQuerystring2fns( str );
			case 'crusade':
				return crusadeQuerystring2fns( str );
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
			default:
				return gundamWarNQuerystring2fns(str)
		}
	}
	
	function wsQuerystring2fns( qstr ){
		var url = $.url("?" + qstr)
		var query = url.data.param.query
		var fns = []
		for( var k in query ){
			var v = query[k]
			if( v == "" ){
				continue
			}
			switch( k ){
			case 'pkg':
				fns.push( cardsearch.attrEq( "pkg", v ) )
				break;
			case 'type':
				fns.push( cardsearch.attrEq( "type", v ) )
				break;
			case 'level_1':
				fns.push( cardsearch.attrGe( "level", parseInt(v) ) )
				break;
			case 'level_2':
				fns.push( cardsearch.attrLe( "level", parseInt(v) ) )
				break;
			case 'cost_1':
				fns.push( cardsearch.attrGe( "cost", parseInt(v) ) )
				break;
			case 'cost_2':
				fns.push( cardsearch.attrLe( "cost", parseInt(v) ) )
				break;
			case 'power_1':
				fns.push( cardsearch.attrGe( "power", parseInt(v) ) )
				break;
			case 'power_2':
				fns.push( cardsearch.attrLe( "power", parseInt(v) ) )
				break;
			case 'soul_1':
				fns.push( cardsearch.attrGe( "soul", parseInt(v) ) )
				break;
			case 'soul_2':
				fns.push( cardsearch.attrLe( "soul", parseInt(v) ) )
				break;
			case 'trigger':
				fns.push( cardsearch.attrEq( "trigger", v ) )
				break;
			case 'keyword':
				fns.push( cardsearch.attrEq( "text", v ) )
				break;
			case 'card_name':
				fns.push( cardsearch.attrEq( "name", v ) )
				break;
			case 'rule':
				fns.push( cardsearch.attrEq( "text", v ) )
				break;
			case 'symbol':
				fns.push( cardsearch.attrEq( "chars", v ) )
				break;
			case 'cid':
				fns.push( cardsearch.attrEq( "id", v ) )
				break;
			case 'id':
				fns.push( cardsearch.attrEq( "id", v ) )
				break;
			}
		}
		return fns
	}
	
	function sgsQuerystring2fns( qstr ){
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
			case 'rule':
				fns.push( cardsearch.attrEq( "text", v ) )
				break;
			case 'symbol':
				fns.push( cardsearch.attrEq( "type", v ) )
				break;
			case 'id':
				fns.push( cardsearch.attrEq( "id", v ) )
				break;
			case 'cid':
				fns.push( cardsearch.attrEq( "id", v ) )
				break;
			case "costAll_2":
				fns.push( cardsearch.attrLe( "cost", parseInt(v) ))
				break
			case "costAll_1":
				fns.push( cardsearch.attrGe( "cost", parseInt(v) ))
				break
			case 'set':
				fns.push( cardsearch.attrEq( "pkg", v ) )
				break;
			case 'color':
				if( v == '中立' ) v = '-';
				fns.push( cardsearch.attrEq( "color", v ) )
				break;
			case 'ctype':
				fns.push( cardsearch.attrEq( "type", v ) )
				break;
			}
		}
		return fns;
	}
	
	function dragonZQuerystring2fns( qstr ){
		var url = $.url("?" + qstr)
		var query = url.data.param.query
		var fns = []
		for( var k in query ){
			var v = query[k]
			if( v == "" ){
				continue
			}
			
			switch( k ){
			case 'color':
				switch( v ){
					case 'Freestyle':
						{
							var or = cardsearch.or
							var and = cardsearch.and
							var not = cardsearch.not
							var attrEq = cardsearch.attrEq
							fns.push( not( or( [ attrEq("name", "Black"), attrEq("name", "Blue"), attrEq("name", "Orange"), attrEq("name", "Red"), attrEq("name", "Namek"), attrEq("name", "Saiyan") ] ) ) )
						}
						break;
					default:
						fns.push( cardsearch.attrEq( "name", v ) )
				}
				
				break;
			case 'cost':
				fns.push( cardsearch.attrEq( "descrition", 'costing ' + v + ' stages' ) )
				break;
			case 'damage':
				fns.push( cardsearch.attrEq( "descrition", 'Damage: ' + v + ' life cards' ) )
				break;
			case 'id':
				fns.push( cardsearch.attrEq( "id", v ) )
				break;
			case 'cid':
				fns.push( cardsearch.attrEq( "id", v ) )
				break;
			case 'name':
				fns.push( cardsearch.attrEq( "name", v ) )
				break;
			case 'type':
				fns.push( cardsearch.attrEq( "type", v ) )
				break;
			case 'descrition':
				fns.push( cardsearch.attrEq( "descrition", v ) );
				break
			}
		}
		return fns
	}
	
	function crusadeQuerystring2fns( qstr ){
		var url = $.url("?" + qstr)
		var query = url.data.param.query
		var fns = []
		for( var k in query ){
			var v = query[k]
			if( v == "" ){
				continue
			}
			switch( k ){
			case 'symbol':
				fns.push( cardsearch.attrEq( "info_15", v ) )
				break;
			case 'set':
				fns.push( cardsearch.attrEq( "prodid", v ) )
				break;
			case 'card_name':
				fns.push( cardsearch.attrEq( "info_2", v ) )
				break;
			case 'ctype':
				fns.push( cardsearch.attrEq( "info_3", v ) );
				break
			case 'cost_1':
				fns.push( cardsearch.attrGe( "info_5", v ) )
				break
			case 'cost_2':
				fns.push( cardsearch.attrLe( "info_5", v ) )
				break
			case 'costAll_1':
				fns.push( cardsearch.attrGe( "info_6", v ) )
				break
			case 'costAll_2':
				fns.push( cardsearch.attrLe( "info_6", v ) )
				break
			case 'atk_1':
				fns.push( cardsearch.attrGe( "info_8", v ) )
				break
			case 'atk_2':
				fns.push( cardsearch.attrLe( "info_8", v ) )
				break
			case 'atk2_1':
				fns.push( cardsearch.attrGe( "info_9", v ) )
				break
			case 'atk2_2':
				fns.push( cardsearch.attrLe( "info_9", v ) )
				break
			case 'def_1':
				fns.push( cardsearch.attrGe( "info_10", v ) )
				break
			case 'def_2':
				fns.push( cardsearch.attrLe( "info_10", v ) )
				break
			case 'ntype':
				fns.push( cardsearch.attrEq( "info_4", v ) )
				break;
			case 'cid':
				fns.push( cardsearch.attrEq( "id", v ) )
				break
			case "id":
				fns.push( cardsearch.attrEq( "cardId", v ) )
				break
			case 'rule':
				fns.push( cardsearch.attrEq( "info_16", v ) )
				break;
			case 'area':
				fns.push( areaEq( v ) )
				break;
			default:
				if( v == "on" ){
					fns.push( cardsearch.attrEq( "info_16", k ))
				}
			}
			
		}
		return fns
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
			switch( k ){
			case 'cid':
				fns.push( cardsearch.attrEq( "id", v ) )
				break
			case 'set':
				fns.push( cardsearch.attrEq( "prodid", v ) )
				break
			case 'rare':
				fns.push( cardsearch.attrEq( "info_13", v ) )
				break
			case 'cost_1':
				fns.push( cardsearch.attrGe( "info_5", v ) )
				break
			case 'cost_2':
				fns.push( cardsearch.attrLe( "info_5", v ) )
				break
			case 'ctype':
				fns.push( cardsearch.attrEq( "info_3", v ) )
				break
			case 'ctype2':
				fns.push( cardsearch.attrEq( "info_25", v ) )
				break
			case 'attr':
				fns.push( cardsearch.attrEq( "info_4", v ) )
				break
			case 'lv1_core_1':
				fns.push( cardsearch.attrGe( "info_7", v ) )
				break
			case 'lv1_core_2':
				fns.push( cardsearch.attrLe( "info_7", v ) )
				break
			case 'lv2_core_1':
				fns.push( cardsearch.attrGe( "info_9", v ) )
				break
			case 'lv2_core_2':
				fns.push( cardsearch.attrLe( "info_9", v ) )
				break
			case 'lv3_core_1':
				fns.push( cardsearch.attrGe( "info_11", v ) )
				break
			case 'lv3_core_2':
				fns.push( cardsearch.attrLe( "info_11", v ) )
				break
			case 'lv1_hp_1':
				fns.push( cardsearch.attrGe( "info_8", v ) )
				break
			case 'lv1_hp_2':
				fns.push( cardsearch.attrLe( "info_8", v ) )
				break
			case 'lv2_hp_1':
				fns.push( cardsearch.attrGe( "info_10", v ) )
				break
			case 'lv2_hp_2':
				fns.push( cardsearch.attrLe( "info_10", v ) )
				break
			case 'lv3_hp_1':
				fns.push( cardsearch.attrGe( "info_12", v ) )
				break
			case 'lv3_hp_2':
				fns.push( cardsearch.attrLe( "info_12", v ) )
				break
			case "id":
				fns.push( cardsearch.attrEq( "id", v ) )
				break
			case 'card_name':
				fns.push( cardsearch.attrEq( "info_2", v ) )
				break;
			case 'rule':
				fns.push( cardsearch.attrEq( "info_14", v ) )
				break;
			default:
				if( v == 'on' ){
					fns.push( cardsearch.attrEq( "Abs", k ) )
				}
				break;
			}
		}
		return fns;
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
			case 'cid':
				fns.push( cardsearch.attrEq( "id", v ) )
				break
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
	
	function gundamWarNQuerystring2fns( qstr ){
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
				fns.push( cardsearch.attrEq( "info_2", v ) )
				break;
			case 'ctype':
				fns.push( cardsearch.attrEq( "info_3", v ) )
				break
			case 'cost_1':
				fns.push( cardsearch.attrGe( "info_5", v ) )
				break
			case 'cost_2':
				fns.push( cardsearch.attrLe( "info_5", v ) )
				break
			case 'costAll_1':
				fns.push( cardsearch.attrGe( "info_4", v ) )
				break
			case 'costAll_2':
				fns.push( cardsearch.attrLe( "info_4", v ) )
				break
			case 'atk_1':
				fns.push( cardsearch.attrGe( "info_7", v ) )
				break
			case 'atk_2':
				fns.push( cardsearch.attrLe( "info_7", v ) )
				break
			case 'atk2_1':
				fns.push( cardsearch.attrGe( "info_8", v ) )
				break
			case 'atk2_2':
				fns.push( cardsearch.attrLe( "info_8", v ) )
				break
			case 'def_1':
				fns.push( cardsearch.attrGe( "info_9", v ) )
				break
			case 'def_2':
				fns.push( cardsearch.attrLe( "info_9", v ) )
				break
			case 'ntype':
				fns.push( cardsearch.attrEq( "info_18", v ) )
				break;
			case 'cid':
				fns.push( cardsearch.attrEq( "id", v ) )
				break
			case "id":
				fns.push( cardsearch.attrEq( "card-id", v ) )
				break
			case 'rule':
				fns.push( cardsearch.attrEq( "info_12", v ) )
				break;
			case 'symbol':
				fns.push( cardsearch.attrEq( "info_11", v ) )
				break;
			case 'gsign':
				fns.push( (function( v ){
					return function( obj ){
						return obj["info_6"] == v
					}
				})( v ))
				break;
			case 'area':
				switch( v ){
				case '宇宙':
					fns.push( cardsearch.attrEq( "info_10", '宇' ) )
					break
				case '地球':
					fns.push( cardsearch.attrEq( "info_10", '地' ) )
					break
				case '宇宙/地球':
					fns.push( cardsearch.attrEq( "info_10", '宇、地' ) )
					break
				}
				break;
			default:
				if( v == "on" ){
					if( k == "一枚制限" ){
						fns.push( cardsearch.attrEq( "info_2", "［†］" ))
					} else {
						fns.push( cardsearch.attrEq( "info_12", k) )
					}
				}
			}
			
		}
		return fns
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
				case 'ACE':
					fns.push( typeEq( "A" ) )
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
				fns.push( cardsearch.indexGe( "cost", 1, v ) )
				break
			case 'costAll_2':
				fns.push( cardsearch.indexLe( "cost", 1, v ) )
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
			case 'cid':
				fns.push( cardsearch.attrEq( "id", v ) )
				break
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
	
	function sangoCostLe( key, value ){
		return function( obj ){
			if( key == "cost" ){
				return obj[ "cost" ][0] <= value
			} else if( key == "costA" ){
				return obj[ "cost" ][0] + obj[ "cost" ][1] <= value
			}
			return false
		}
	}
	
	function sangoCostGe( key, value ){
		return function( obj ){
			if( key == "cost" ){
				return obj[ "cost" ][0] >= value
			} else if( key == "costA" ){
				return obj[ "cost" ][0] + obj[ "cost" ][1] >= value
			}
			return false
		}
	}
	
	/*
	id:info[1],
					cname:info[2],
					set:info[4],
					color:info[5],
					atype:info[8],
					atype2:info[9],
					cost:info[10],
					power:info[12],
					city:info[13],
					ability:info[14],
					rarity:info[15],
					content:info[16],
					counter:info[17]
					*/
	// 戰國大戰尋找方法實做
	function sengokuQuerystring2fns( qstr ){
		var url = $.url("?" + qstr)
		var query = url.data.param.query
		var fns = []
		for( var k in query ){
			var v = query[k]
			if( v == "" ){
				continue
			}
			switch( k ){
			case 'cid':
				fns.push( cardsearch.attrEq( "id", v ) )
				break
			case "id":
				fns.push( cardsearch.attrEq( "id", v ) )
				break
			case "acity":
				fns.push( cardsearch.attrEq( "city", v ) )
				break
			case "atype":
				fns.push( cardsearch.attrEq( "atype2", v ) )
				break
			case "card_name":
				fns.push( cardsearch.attrEq( "cname", v ) )
				break
			case "costAll_2":
				fns.push( sangoCostLe( "costA", parseInt(v) ))
				break
			case "costAll_1":
				fns.push( sangoCostGe( "costA", parseInt(v) ))
				break
			case "cost_2":
				fns.push( sangoCostLe( "cost", parseInt(v) ))
				break
			case "cost_1":
				fns.push( sangoCostGe( "cost", parseInt(v) ))
				break
			case "ctype":
				if( v == '武将' ){
					fns.push( 
						cardsearch.not( 
							cardsearch.or([
								cardsearch.attrEq( "atype", '兵隊' ),
								cardsearch.attrEq( "atype", '計略' ),
								cardsearch.attrEq( "atype", '列伝' ),
								cardsearch.attrEq( "atype", '奥義' )
							])
						))
				} else if ( v == 'キャンペーン' ){
					fns.push( 
						cardsearch.and([
							cardsearch.attrEq( "atype", "-" ),
							cardsearch.attrEq( "atype2", "-" )
						])
					)
				} else {
					fns.push( cardsearch.attrEq( "atype", v ) )
				}
				break
			case "ntype":
				fns.push( cardsearch.attrEq( "color", v ) )
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
				fns.push( cardsearch.attrEq( "symbol", v ) )
				break
			default:
				if( v == "on" ){
					fns.push( cardsearch.attrEq( "ability", k ))
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
			case 'cid':
				fns.push( cardsearch.attrEq( "id", v ) )
				break
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
				fns.push( sangoCostLe( "costA", parseInt(v) ))
				break
			case "costAll_1":
				fns.push( sangoCostGe( "costA", parseInt(v) ))
				break
			case "cost_2":
				fns.push( sangoCostLe( "cost", parseInt(v) ))
				break
			case "cost_1":
				fns.push( sangoCostGe( "cost", parseInt(v) ))
				break
			case "ctype":
				if( v == '武将' ){
					fns.push( 
						cardsearch.not( 
							cardsearch.or([
								cardsearch.attrEq( "atype", '兵隊' ),
								cardsearch.attrEq( "atype", '計略' ),
								cardsearch.attrEq( "atype", '列伝' ),
								cardsearch.attrEq( "atype", '奥義' )
							])
						))
				} else if ( v == 'キャンペーン' ){
					fns.push( 
						cardsearch.and([
							cardsearch.attrEq( "atype", "-" ),
							cardsearch.attrEq( "atype2", "-" )
						])
					)
				} else {
					fns.push( cardsearch.attrEq( "atype", v ) )
				}
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
				if( v == '計略/メイン' ){
					fns.push( 
						cardsearch.or([
							cardsearch.attrEq( "atype", v ),
							cardsearch.attrEq( "atype", '計略/主要' )
						])
					)
				} else {
					fns.push( cardsearch.attrEq( "atype", v ) )
				}
				
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
			case 'cid':
				fns.push( cardsearch.attrEq( "id", v ) )
				break
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
				case 'cid':
					fns.push( cardsearch.attrEq( "id", v ) )
					break
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
	
	module.loadCardData = cardinfoloader.load
	module.getCardUrl = getCardUrl;
	module.getQueryStr = getQueryStr;

})( gameController );

