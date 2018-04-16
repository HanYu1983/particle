var cardinfoloader = {} || cardinfoloader;

(function( module ){
	
	function load( game, lang, onLoadGameCallback ){
		switch( game ){
			case 'sengoku':
				sengoku.load( "//storage.googleapis.com/particle-resources/cardText/sengokuList/", onLoadGameCallback)
				break;
			case 'ws':
				ws.load( "//storage.googleapis.com/particle-resources/cardText/wsList/", onLoadGameCallback)
				break;
			case 'sgs':
				sgs.load( "//storage.googleapis.com/particle-resources/cardText/sgsList.json", onLoadGameCallback)
				break;
			case 'gundamWarN':
				gundamWarN.load( "//storage.googleapis.com/particle-resources/cardText/gundamWarNexAList/", onLoadGameCallback)
				break;
			case 'dragonZ':
				dragonZ.load( "//storage.googleapis.com/particle-resources/cardText/dragonZList.json", onLoadGameCallback)
				break;
			case 'crusade':
				crusade.load( "//storage.googleapis.com/particle-resources/cardText/crusadeList/", onLoadGameCallback)
				break;
			case 'battleSpirits':
				battleSpirits.load( "//storage.googleapis.com/particle-resources/cardText/battleSpiritsList/", onLoadGameCallback)
				break;
			case 'army':
				army.load(onLoadGameCallback)
				break;
			case 'gundamWar':
				gundamWar.load("//storage.googleapis.com/particle-resources/cardText/gundamWarList.json", onLoadGameCallback)
				break;
			case 'yugioh':
				if( lang == 'jp' ){
					yugioh.load("//storage.googleapis.com/particle-resources/cardText/yugiohListJp.json", onLoadGameCallback)
				} else if ( lang == 'en' ){
					yugioh.load("//storage.googleapis.com/particle-resources/cardText/yugiohListEn.json", onLoadGameCallback)
				} else if ( lang == 'ch' ){
					yugioh.load("//storage.googleapis.com/particle-resources/cardText/yugiohListCh.json", onLoadGameCallback)
				}
				break;
			case 'sangoWar':
				if ( lang == 'ch' ){
					sangoWar.loadCh( "//storage.googleapis.com/particle-resources/cardText/sangoList/", onLoadGameCallback);
				} else {
					sangoWar.load("//storage.googleapis.com/particle-resources/cardText/sangoList.txt", onLoadGameCallback)
				}
			//	sangoWar.load( "//storage.googleapis.com/particle-resources/cardText/sangoList.txt", onLoadGameCallback);
				break;
			case 'magic':
				if ( lang == 'ch' ){
					magic.loadCh( "//storage.googleapis.com/particle-resources/cardText/magicList/", onLoadGameCallback);
				} else {
					magic.load( "//storage.googleapis.com/particle-resources/cardText/magicList.xml", onLoadGameCallback);
				}
				//magic.load( "//storage.googleapis.com/particle-resources/cardText/magicList.xml", onLoadGameCallback);
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