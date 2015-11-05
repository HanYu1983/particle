package;

import haxe.Json;
import haxe.Timer;
import js.Browser;
import js.html.NotifyPaintEvent;
import mediator.Card;
import js.Lib;
import mediator.Layer;
import mediator.UI;
import model.Model;
import org.puremvc.haxe.patterns.facade.Facade;

using Reflect;
/**
 * ...
 * @author vic
 */
class Main 
{
	
	public static var on_getSuit_success = 'on_getSuit_success';
	public static var on_createDeck_click = 'on_createDeck_click';
	public static var on_receiveOps = 'on_receiveOps';
	public static var on_searchComplete = 'on_searchComplete';
	public static var on_heartbeat_event = 'on_heartbeat_event';
	
	public static var j:Dynamic = untyped __js__('$');
	
	public static var fbid = '';
	public static var token = '';
	public static var playerId = 'smart';
	public static var otherPlayerId = '';
	public static var ary_cards:Array<Dynamic> = [];
	
	public static var currentSelect = 'sangoWar';
	public static var cardPackages:Dynamic = { };
	public static var cardPackage = null;
	public static var cardSuits:Dynamic = {};
	public static var cardSuit = null;
	public static var isConntect = false;
	
	static var keepOnlineTimer:Timer;
	static var tmpl_card:Dynamic = j( '#tmpl_card' );
	static var longPolling:Bool = untyped __js__( 'config.longPolling' );
	static var ary_ops:Array<String>;
	static var cardPackageUrlMapping:Dynamic = { };
	
	function new() {
		j( '#btn_connect' ).linkbutton();
		j( '#txt_id' ).textbox( {
			#if debug
			editable:true,
			#else
			editable:false,
			#end
			onChange:function( nv, od ) {
				playerId = nv;
			}
		});
		
		Facade.getInstance().registerMediator( new UI(null, j('.easyui-layout')) );
		Facade.getInstance().registerMediator( new Model( 'model' ));
		Facade.getInstance().registerMediator( new Layer( 'layer', { body:j(Browser.document.body), container_cards:j( '#container_cards' ) } ));
		
		
		if ( CallJs.getCookie( 'otherPlayerId' ) != null ) {
			ary_ops = Json.parse( CallJs.getCookie( 'otherPlayerId' ));
			Facade.getInstance().sendNotification( on_receiveOps, { ary_ops:ary_ops } );
		}else {
			ary_ops = [];
		}
		
		
		openLoading( '準備中...請稍等' );
		var fbappId = untyped __js__( 'config.fbid[config.fbid.which]' );
		untyped __js__( 'myapp.facebook.init' )( fbappId, function() {
			loadCardSuit( 'gundamWar', function() {
				//loadCardSuit( 'fighter', function() {
					loadCardSuit( 'army', function() {
						loadCardSuit( 'sangoWar', function() {
							//loadCardSuit( 'magic', function(){
								closeLoading();
								slide( '所有卡牌準備完畢，登入並選擇填入對手的id後，才能開始創建套牌哦!' );
							//});
						});
					});
				//});
			});
		});
		Reflect.setField( Browser.window, 'onHtmlClick', onHtmlClick );
	}
	
	public static function selectOps( ops:String ) {
		otherPlayerId = ops;
		
		if ( ary_ops.indexOf( otherPlayerId ) == -1 ) {
			ary_ops.push( otherPlayerId );
			if ( ary_ops.length > 10 ) {
				ary_ops.shift();
			}
			CallJs.setCookie( 'otherPlayerId', Json.stringify( ary_ops ) );
			Facade.getInstance().sendNotification( on_receiveOps, { ary_ops:ary_ops } );
		}
		
		j( '#btn_connect' ).linkbutton( 'enable' );
	}
	
	public static function createSelfDeck( deckId:Int ) {
		if ( cardSuit == null ) return;
		var deck = cardSuit[deckId];
		if ( deck == null ) return;
		var toDeck = Lambda.array( Lambda.map( deck.cards, function( cardId ) {
			return { 	
					id:getId(), 
					cardId:cardId,
					owner:playerId, 
					relate:'', 
					deg:0, 
					pos:[0, 0], 
					back:true,
					showTo:''
			}
		}));
		
		slide( '創建卡片完成' );
		Animate.addCardAndPrepare( toDeck )().done( function() {
			pushCmds( { cmd:'addCards', content:toDeck } );
		});
	}
	
	public static function pushCmds( content:Dynamic ) {
		var toId = otherPlayerId;
		if ( toId.length != 0 ) {
			messageSocket( toId, content.cmd, content );
		}
		
		/*
		if ( keepOnlineTimer != null ) {
			keepOnlineTimer.stop();
			keepOnlineTimer = null;
		}
		
		keepOnlineTimer = Timer.delay( function() {
			alert( '連線超時，請重新整理!' );
		#if debug
		}, 1000 * 60 * 10 );
		#else
		}, 1000 * 60 * 10 );
		#end
		*/
	}
	
	static function onBackCallback( ret:Dynamic ) {
		callAction( ret.msg )();
	}
	
	static function callAction( content:Dynamic ) {
		if ( content.content.ary_select != null ) {
			content.content.ary_select = Lambda.fold( content.content.ary_select, function( remoteCard, curr ) {
				var localCard = getCardsById( remoteCard.id );
				if( localCard != null ){
					localCard.owner = remoteCard.owner;
					localCard.relate = remoteCard.relate;
					localCard.back = remoteCard.back;
					localCard.pos = remoteCard.pos;
					localCard.deg = remoteCard.deg;
					curr.push( localCard );
				}
				return curr;
			}, []);
		}
		
		switch( content.cmd ) {
			case 'confirmConnect':
				return Animate.confirmConnect( content.content.id, content.content.otherPlayerId );
			case 'searchOpponent':
				return Animate.searchOpponent( content.content.id, content.content.otherPlayerId );
			case 'seperateCardSameTogether':
				return Animate.sameTogetherSeperate( content.content.ary_select, content.content.pos_mouse );
			case 'changeIndex':
				return Animate.changeIndex( content.content.cardId );
			case 'removeCards':
				return Animate.removeCards( content.content.ary_select );
			case 'addCards':
				return Animate.addCardAndPrepare( content.content );
			case 'listCard':
				return Animate.list( content.content.ary_select, content.content.pos_mouse );
			case 'listSeparate':
				return Animate.listSeparate( content.content.ary_select, content.content.pos_mouse );
			case 'flip':
				return Animate.flip( content.content.ary_select );
			case 'setOwner':
				return Animate.setOwner( content.content.ary_select );
			case 'setRelate':
				return Animate.setRelate( content.content.ary_select );
			case 'shuffle':
				return Animate.shuffle( content.content.ary_select, content.content.pos_mouse );
			case 'shuffleSeparate':
				return Animate.shuffleSeperate( content.content.ary_select, content.content.pos_mouse );
			case 'rotate':
				return Animate.rotate( content.content.ary_select, content.content.deg );
			case 'listCardReverse':
				return Animate.list( content.content.ary_select, content.content.pos_mouse );
			case 'listSeparateReverse':
				return Animate.listSeparate( content.content.ary_select, content.content.pos_mouse );
			case 'moveCards':
				return Animate.moveCards( content.content.ary_select, content.content.pos_mouse );
			case _:
				return null;
		}
	}
	
	public static function confirmConnect( id, oid ) {
		if ( id == otherPlayerId && oid == playerId ) {
			isConntect = true;
			if ( searchOpponentTimer != null ) {
				searchOpponentTimer.stop();
				searchOpponentTimer = null;
			}
			
			slide( '對手配對成功!' );
			
			CallJs.api_startHeartbeat( playerId, otherPlayerId, function( conn ) {
				Facade.getInstance().sendNotification( on_heartbeat_event, {conn:conn} );
			});
			
			j( '#btn_connect' ).linkbutton( 'disable' );
			Facade.getInstance().sendNotification( on_searchComplete );
		}
	}
	
	public static function searchOpponent( id, oid ) {
		if ( id == otherPlayerId && oid == playerId )
			pushCmds( {cmd:'confirmConnect', content:{id:playerId, otherPlayerId:otherPlayerId}} );
	}
	
	public static function pollAllMessage() {
		CallJs.api_pollMessage( { FBID:playerId }, handleResponse( onBackCallback ) );
	}
	
	function loadCardSuit( suitName, ?cb: Void -> Void ) {
		if ( Reflect.field( cardPackages, suitName ) != null ) {
			cardPackage = Reflect.field( cardPackages, suitName );
			if ( cb != null ) cb();
		}else {
			
			CallJs.api_getCardPackageWithUrl( '../common/cardPackage/' + suitName + '.json', handleResponse( function( ret ) {
				cardPackage = ret;
				Reflect.setField( cardPackages, suitName, cardPackage );
				
				if ( cb != null ) cb();
			}));
			
		}
	}
	
	function onHtmlClick( type, ?params ) {
		switch( type ) {
			case 'onBtnStartServer':
				if ( playerId == 'smart' || otherPlayerId == '' ) {
					slide( '請先登入並且輸入對手的id' );
					return;
				}
				
				slide( '正在等待對手...' );
				
				createSocket( playerId );
				keepSearchOpponent();
			case 'onBtnLoginClick':
				openLoading( '登入並讀取資料中...' );
				
				CallJs.myapp_facebook_login( function( ret ) {
					fbid = ret.authResponse.userID;
					token = ret.authResponse.accessToken;
					
					j( '#txt_id' ).textbox( 'setValue', fbid );
					
					CallJs.cardSuit_load( fbid, token, handleResponse( function( ret ) {
						Lambda.foreach( ret.cardSuit, function( cs ) {
							if ( cardSuits.field( cs.game ) == null ) {
								cardSuits.setField( cs.game, [] );
							}
							cardSuits.field( cs.game ).push( cs );
							return true;
						});
						chooseCardSuit( currentSelect );
						updateGameUI( currentSelect );
						
						j( '#btn_login' ).linkbutton( 'disable' );
						closeLoading();
					}));
				});
			case 'onBtnLoadMagicClick':
				currentSelect = 'magic';
				chooseCardSuit( 'magic' );
			case 'onBtnLoadFighterClick':
				currentSelect = 'fighter';
				chooseCardSuit( 'fighter' );
			case 'onBtnLoadArmyClick':
				currentSelect = 'army';
				chooseCardSuit( 'army' );
			case 'onBtnLoadGundamWarClick':
				currentSelect = 'gundamWar';
				chooseCardSuit( 'gundamWar' );
			case 'onBtnLoadSangoWarClick':
				currentSelect = 'sangoWar';
				chooseCardSuit( 'sangoWar' );
			case 'onBtnCreateDeck':
				#if debug
				Facade.getInstance().sendNotification( on_createDeck_click );
				#else
				//if( checkCanCreate() ){
					Facade.getInstance().sendNotification( on_createDeck_click );
					//slide( '創建卡片完成' );
				//}else{
				//	slide( '沒有登入或者沒有對手時，不能創建卡牌哦' );
				//}
				#end
			case 'onDiceClick':
				Browser.window.open( 'http://www.wasabistudio.ca/scripts/dice.php?account=card&name=' + playerId + '&reason=forGame&dice_amount=1&dice_faces=100&offset=0&c=pub' );
		}
		
	}
	
	function updateGameUI( currentSelect ) {
		switch( currentSelect ) {
			case 'sangoWar':j( '#btn_sango' ).linkbutton( 'select' );
			case 'gundamWar':j( '#btn_gundam' ).linkbutton( 'select' );
			case 'fighter':j( '#btn_fighter' ).linkbutton( 'select' );
			case 'magic':j( '#btn_magic' ).linkbutton( 'select' );
			case 'army':j( '#btn_army' ).linkbutton( 'select' );
		}
	}
	
	function checkCanCreate() {
		return ( playerId != '' && otherPlayerId != '' );
	}
	
	function chooseCardSuit( suitName ) {
		cardPackage = Reflect.field( cardPackages, suitName );
		cardSuit = Reflect.field( cardSuits, suitName ) ;
		switch( cardSuit ) {
			case null:cardSuit = [];
		}
		Facade.getInstance().sendNotification( on_getSuit_success, { cardSuit:cardSuit  } );
	}
	
	public static function applyValue( ary_select:Array<Dynamic>, self:Bool ) {
		Lambda.foreach( ary_select, function( card:Dynamic ) {
			var showWho = (function(){
				if ( card.relate == card.owner ) {
					if ( card.relate == Main.playerId ) {
						return '';
					}else if( card.relate == Main.otherPlayerId ){
						return 'red';
					}
				}
				return '';
			})();
			Facade.getInstance().sendNotification( Model.on_state_change, { 
																			noOwner: card.owner == '',
																			select:card, 
																			showWho:showWho,
																			showRelate:Main.playerId == card.relate, 
																			showOwner:Main.playerId == card.owner, 
																			seeCard: seeCard( card ),
																			notify: self
																			}, 'ownerAndRelate_change' );
			return true;
		});
	}
	
	public static function seeCard( card ) {
		return switch( card.owner ) {
			case '':false;
			case owner: ( owner == card.relate ) && ( owner == playerId );
		}
	}
	
	public static function setOwner( ary_select:Array<Dynamic> ) {
		var send = false;
		Lambda.foreach( ary_select, function( card:Dynamic ) {
			switch( card.owner ) {
				case '':
					//如果owner 是空白，就可以修改為自己
					card.owner = Main.playerId;
					send = true;
				case owner:
					//如果owner 不是自己，就不能更改
					if ( owner == Main.playerId ) {
						card.owner = '';
						card.relate = '';
						send = true;
					}
			}
			return true;
		});
		//統一和remote端用一樣的方法
		applyValue( ary_select, true );
		return send;
	}
	
	public static function setRelate( ary_select:Array<Dynamic> ) {
		var send = false;
		Lambda.foreach( ary_select, function( card ) {
			if ( card.owner != Main.playerId ) return true;
			switch( card.relate ) {
				case '':
					//如果relate 是空白，就可以修改為自己
					card.relate = Main.playerId;
					send = true;
				case relate:
					//如果relate 不是自己，就不能更改
					if ( relate == Main.playerId ) {
						card.relate = '';
						send = true;
					}
			}
			
			return true;
		});
		applyValue( ary_select, true );
		return send;
	}
	
	public static function rotate( ary_select:Array<Dynamic>, ?deg = 90 ) {
		Lambda.foreach( ary_select, function( card ) {
			card.deg += deg;
			return true;
		});
		applyValue( ary_select, true );
	}
	
	public static function createCard( model:Dynamic ) {
		model.url = getCardImageUrlWithPackage( cardPackage, model.cardId );
		
		//for empty string
		//var ary_url:Array<String> = model.url.split( '/' );
		//ary_url[ary_url.length - 1] = untyped __js__( 'encodeURIComponent' )( ary_url[ary_url.length - 1] );
		//model.url = ary_url.join( '/' );
		
		Facade.getInstance().registerMediator( new Card( model.id, tmpl_card.tmpl( model ) ));
	}
	
	public static function flip( ary_select:Dynamic ) {
		var send = false;
		Lambda.foreach( ary_select, function( card ) {
			//當owner是自己或者沒有所屬的時候，才能翻牌
			if ( card.owner == Main.playerId || card.owner == '' ) {
				send = true;
				card.back = !card.back;
			}
			return true;
		});
		applyValue( ary_select, true );
		return send;
	}
	
	public static function moveCards( ary_select:Dynamic, pos_mouse, zsort ) {
		Lambda.foreach( ary_select, function( select ) {
			Facade.getInstance().sendNotification( Model.on_state_change, { select:select, zsort:zsort, notify:false }, 'moveCards' );
			return true;
		});
	}
	
	public static function getCardsById( id:String ) {
		return Lambda.find( Main.ary_cards, function( card:Dynamic ) {
			return ( id == card.id );
		});
	}
	
	public static function changeIndex( cardId:String ) {
		//有可能會因為牌還沒有創建，就被call到這個方法，先try起來，再慢慢查
		
		try {
			var cm = Facade.getInstance().retrieveMediator( cardId );
			if ( cm == null ) return;
			Facade.getInstance().sendNotification( Card.card_enter, Facade.getInstance().retrieveMediator( cardId ).getViewComponent() );
		}catch ( e:String ) {
			trace( e );
		}
	}
	
	public static function removeCards( ary_select:Array<Dynamic> ) {
		Lambda.foreach( ary_select, function( card ) {
			Main.ary_cards.remove( card );
			Facade.getInstance().sendNotification( Model.on_card_remove, { select:card } );
			return true;
		});
	}
	
	public static var searchOpponentTimer:Timer = null;
	
	public static function keepSearchOpponent() {
		searchOpponentTimer = Timer.delay( function() {
			pushCmds( { cmd:'searchOpponent', content: { id:playerId, otherPlayerId:otherPlayerId } } );
			if ( !isConntect ) keepSearchOpponent();
		}, 3000 );
	}
	
	public static function createSocket( id ) {
		CallJs.api_createChannel( id, {
			onopen: function() {
				slide( '連線成功' );
				j( '#btn_connect' ).linkbutton( 'disable' );
			},
			onmessage: function( json ){
				//var origin = Json.parse(path.data);
				//var json = Json.parse(origin);
				onBackCallback( json );
			},
			onerror: function() {
				j( '#btn_connect' ).linkbutton( 'enable' );
				isConntect = false;
				alert( '已斷線，請重新連線' );
			},
			onclose: function() {
				j( '#btn_connect' ).linkbutton( 'enable' );	
				isConntect = false;
				alert( '已斷線，請重新連線' );
			}
		});
		/*
		var _channel:Dynamic = untyped __js__( 'channel' );
		_channel.createChannel( id, function(err, ch) {
			if ( err != null ) {
				alert( 'socket建立失敗!請重新整理' );
				return;
			}	
			_channel.addEventListenerAndOpenSocket( ch, {
				onopen: function() {
					slide( '連線成功' );
					j( '#btn_connect' ).linkbutton( 'disable' );
				},
				onmessage: function(path, option){
					var origin = Json.parse(path.data);
					var json = Json.parse(origin);
					onBackCallback( json );
				},
				onerror: function() {
					j( '#btn_connect' ).linkbutton( 'enable' );
					isConntect = false;
					alert( '已斷線，請重新連線' );
				},
				onclose: function() {
					j( '#btn_connect' ).linkbutton( 'enable' );	
					isConntect = false;
					alert( '已斷線，請重新連線' );
				}
			});
			
		});
		*/
	}
	
	public static function messageSocket( toId, type, msg ) {
		var _channel:Dynamic = untyped __js__( 'channel' );
		var msg = {
			type:type,
			msg:msg
		};
		_channel.sendChannelMessage( toId, Json.stringify( msg ), handleResponse( function( ret ) {
			//trace( ret );
		}));
	}
	
	public static function getCardImageUrlWithPackage( name:Dynamic, key:String ):String {
		if ( key.indexOf( 'http' ) != -1 ) return key;
		
		var cpkg:Dynamic = null;
		for ( pkg in cardPackages.fields() ) {
			if ( cardPackages.field( pkg ).images.field( key ) != null ) {
				cpkg = cardPackages.field( pkg );
				break;
			}
		}
		if ( cpkg == null ) {
			slide( '缺了這張牌的圖哦! id是: ' + key, 1000 * 30 );
			return '';
		}
		return untyped __js__('api.getCardImageUrlWithPackage' )( cpkg, key );
	}
	
	public static function slide( msg, ?time = 2000 ){
		j.messager.show({
			title:'提示',
			msg: msg,
			timeout:time,
			showType:'slide'
		});
	}
	
	public static function alert( msg ) {
        j.messager.alert('錯誤', msg );
	}
	
	public static function openLoading( msg ){
		j.messager.progress({
			title:'',
			msg: msg
		});
	}
	
	public static function closeLoading() {
		j.messager.progress('close');
	}
	
	static function handleResponse( cb ) {
		return function ( err, ret ) {
			if ( err != null ) {
				#if debug
				alert( err );
				#else
				alert( '錯誤:' + err );
				#end
			}else {
				cb( ret );
			}
		}
	}
	
	static function main() 
	{
		new Main();
	}
	
	
	static function getId() {	
		//return id++ + '';
		return untyped __js__('leo.utils.generateUUID')();
	}
	
}
/*
 * 
owner[ id:string ]: 設定owner是誰, 只有自己可以設定owner(一開始就會自動設定。icon: 人頭)
持有者[ id:string or '' ]: (icon: 手)
	當持有者id等於owner的時候，蓋著時也能看見。
	只要持有者id等於''的話，每個人都可以設為自己。
	只要持有者id不等於''的話，只那個那個id的人可以設置持有者(只能設為空白或自己)
open or close:
*/