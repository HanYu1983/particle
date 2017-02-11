var cardinfoloader = {} || cardinfoloader;

(function( module ){
	
	function load( game, lang, onLoadGameCallback ){
		switch( game ){
			case 'sengoku':
				sengoku.load( "../common/txt/sengokuList/", onLoadGameCallback)
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
		case 'sanguosha':
			return '../common/images/sanguosha/' +id + '.jpg'
		case 'poker':
			return '../common/images/poker/' +id + '.jpg'
		case 'other':
			return '../common/images/card/' +id + '.png'
		case 'sengoku':
			return '//storage.googleapis.com/particle-resources/cardPackage/sengoku/'+ id+ '_web.jpg'
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
			return '//storage.googleapis.com/particle-resources/cardPackage/sangoWar/' +id
		case 'gundamWar':
			return '//storage.googleapis.com/particle-resources/cardPackage/gundamWar/'+id
		case 'yugioh':
			return '//storage.googleapis.com/particle-resources/cardPackage/yugioh/' +id+ '.jpg'
		case 'army':
			return '//storage.googleapis.com/particle-resources/cardPackage/army/'+id+'.jpg'
		case 'fighter':
			return '//storage.googleapis.com/particle-resources/cardPackage/fighter/'+id+'.jpg'
		case 'magic':
			return '//storage.googleapis.com/particle-resources/cardPackage/magic/' +encodeURIComponent( id )+ '.jpg'
		}
	}
	
	module.load = load
	module.cardimageurl = cardimageurl
	
}) ( cardinfoloader )