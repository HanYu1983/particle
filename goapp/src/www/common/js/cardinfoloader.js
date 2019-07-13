var cardinfoloader = {} || cardinfoloader;

(function( module ){
	
	function load( game, lang, onLoadGameCallback ){
		switch( game ){
			case 'finalfantasy':
				finalfantasy.load("../common/txt/finalfantasy.json", onLoadGameCallback)
				break
			case 'pokemon':
				pokemon.load("../common/txt/pokemonEn.json", onLoadGameCallback)
				break
			case 'fighter':
				fighter.load("../common/txt/fighter.tsv", onLoadGameCallback);
				break;
			case 'gundamCrossWar':
				gundamCrossWar.load( "../common/txt/gundamCrossWarJp.json", onLoadGameCallback)
				break;
			case 'sengoku':
				sengoku.load( "../common/txt/sengoku.json", onLoadGameCallback)
				break;
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
			//	sangoWar.load( "../common/txt/sangoList.txt", onLoadGameCallback);
				break;
			case 'magic':
				if ( lang == 'ch' ){
					magic.loadCh( "../common/txt/magicList/", onLoadGameCallback);
				} else {
					magic.load( "../common/txt/magicList.xml", onLoadGameCallback);
				}
				//magic.load( "../common/txt/magicList.xml", onLoadGameCallback);
				break;
			default:
				onLoadGameCallback()
		}
	}
	
	/**
	取得圖片路徑
	game: 'sangoWar' | 'gundamWar' | 'yugioh' | 'army'
	*/
	function cardimageurl( game, id ){
		switch( game ){
		case 'finalfantasy':
			{
				if( id.indexOf('/') != -1 ){
					id = id.split('/')[0] 
				}
				return '//storage.googleapis.com/particle-resources/cardPackage/finalfantasy/'+ id +'_eg.jpg'
			}
		case 'pokemon':
			return '//storage.googleapis.com/particle-resources/cardPackage/pokemon/'+ id
		case 'gundamCrossWar':
			return '//storage.googleapis.com/particle-resources/cardPackage/gundamCrossWar/'+id+'.png'
		case 'sanguosha':
			return '../common/images/sanguosha/' +id + '.jpg'
		case 'poker':
			return '../common/images/poker/' +id + '.jpg'
		case 'other':
			return '../common/images/card/' +id + '.png'
		case 'sengoku':
			return '//storage.googleapis.com/particle-resources/cardPackage/sengoku/'+ id
		case 'ws':
			return '//storage.googleapis.com/particle-resources/cardPackage/ws/' +id	
		case 'sgs':
			return '//storage.googleapis.com/particle-resources/cardPackage/sgs/' +id + '.jpg'
		case 'gundamWarN':
			return '//storage.googleapis.com/particle-resources/cardPackage/gundamWarN/' +id + '.jpg'
		case 'dragonZ':
			return '//storage.googleapis.com/particle-resources/cardPackage/dragonZ/' +id + '.jpg'
		case 'crusade':
			return '//storage.googleapis.com/particle-resources/cardPackage/crusade/' +id + '.jpg'
		case 'battleSpirits':
			return '//storage.googleapis.com/particle-resources/cardPackage/battleSpirits/' +id + '.jpg'
		case 'sangoWar':
			// 三國擴充包的ID前綴
			if( id.indexOf("sangoWar") != -1){
				return '/tcgdbfile2/root/tcg/extension/' + id
			}
			return '//storage.googleapis.com/particle-resources/cardPackage/sangoWar/' +id
		case 'gundamWar':
			return '//storage.googleapis.com/particle-resources/cardPackage/gundamWar/'+id
		case 'yugioh':
			return '//storage.googleapis.com/particle-resources/cardPackage/yugioh/' +id+ '.jpg'
		case 'army':
			return '//storage.googleapis.com/particle-resources/cardPackage/army/'+id+'.jpg'
		case 'fighter':
			//return '//storage.googleapis.com/particle-resources/cardPackage/fighter/'+id+'.jpg'
			return '//storage.googleapis.com/particle-resources/cardPackage/fighter/52.jpg'
		case 'magic':
			return '//storage.googleapis.com/particle-resources/cardPackage/magic/' +encodeURIComponent( id )+ '.jpg'
		}
	}
	
	module.load = load
	module.cardimageurl = cardimageurl
	
}) ( cardinfoloader )