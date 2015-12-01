package;

import haxe.Json;
import haxe.Timer;
import js.Browser;
import js.html.BarProp;
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
	public static var otherPlayerIds:Array<String> = [];
	public static var otherPlayerIdsForCheck:Array<Bool> = [];
	public static var ary_cards:Array<Dynamic> = [];
	
	public static var currentSelect = 'army';
	public static var cardSuits:Dynamic = {};
	public static var cardSuit = null;
	public static var cardSuitsDetails:Dynamic = {};
	public static var isConntect = false;
	public static var isCanSendMessage = false;
	
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
		CallJs.myapp_facebook_init( fbappId, function() {
			updateGameUI( currentSelect );
			closeLoading();
			slide( '所有卡牌準備完畢，登入並選擇填入對手的id後，才能開始創建套牌哦!' );
		});
		Reflect.setField( Browser.window, 'onHtmlClick', onHtmlClick );
	}
	
	public static function selectOps( ops:String ) {
		otherPlayerIds = ops.split(',');
		otherPlayerId = ops;
		j( '#btn_connect' ).linkbutton( 'enable' );
	}
	
	public static function saveOpponentToCookie( otherPlayerId ) {
		if ( ary_ops.indexOf( otherPlayerId ) == -1 ) {
			ary_ops.push( otherPlayerId );
			if ( ary_ops.length > 10 ) {
				ary_ops.shift();
			}
			Facade.getInstance().sendNotification( on_receiveOps, { ary_ops:ary_ops } );
		}
		CallJs.setCookie( 'otherPlayerId', Json.stringify( ary_ops ) );
	}
	
	public static function createSelfDeck( deckId:Int ) {
		if ( cardSuit == null ) return;
		var deck = cardSuit[deckId];
		if ( deck == null ) return;
		createCards( deck );
	}
	
	public static function createCards( deck:Dynamic ) {
		deck.backId = switch( deck.backId ) {
			case null:"0";
			case bid if( bid.length > 2 ): "0";
			case bid if( Std.parseInt( bid ) <= 26 ) :bid;
			case _:"0";
		}
		var toDeck = Lambda.array( Lambda.map( deck.cards, function( cardId ) {
			return { 	
					id:getId(), 
					backId:deck.backId,
					cardId:cardId,
					owner:currentSelect != 'other' ? playerId : '', 
					game:currentSelect,
					relate:'', 
					deg:0, 
					pos:[0, 0], 
					back:currentSelect != 'other',
					showTo:''
			}
		}));
		
		if( cardSuitsDetails.field( currentSelect ) == null ){
			switch( currentSelect ) {
				case 'battleSpirits':
					CallJs.battleSpirits_load( "../common/txt/battleSpiritsList/", onLoadGameCallback( currentSelect ) );
				case 'magic':
					CallJs.magic_load( "../common/txt/magicList.xml", onLoadGameCallback( currentSelect ) );
				case 'gundamWar':
					CallJs.gundamWar_load( "../common/txt/gundamWarList.json", onLoadGameCallback( currentSelect ) );
				case 'yugioh':
					CallJs.yugioh_load("../common/txt/yugiohListCh.json", onLoadGameCallback( currentSelect ) );
				case 'sangoWar':
					CallJs.sangoWar_load( "../common/txt/sangoList.txt", onLoadGameCallback( currentSelect ) );
			}
		}
		
		slide( '創建卡片完成' );
		Animate.addCardAndPrepare( toDeck );
		pushCmds( { cmd:'addCards', content:toDeck } );
	}
	
	public static function onLoadGameCallback ( game:String ) {
		return function( err, _cardlist ) {
			Reflect.setField( cardSuitsDetails, game, _cardlist );
		}
	}
	
	public static function getCardDetailById( game:String, cid:String ):Dynamic {
		
		cid = StringTools.replace( cid, '.jpg', '' );
		if ( cardSuitsDetails.field( game ) == null ) return null;
		return Lambda.find( cardSuitsDetails.field( game ), function( cardDetail ) {
			return cardDetail.id.indexOf( cid ) == 0;
		});
	}
	
	public static function pushCmds( content:Dynamic ) {
		#if debug
		//debug 時不要擋
		#else
		if ( !isCanSendMessage ) return;
		#end
		
		Lambda.foreach( otherPlayerIds, function( toId ) {
			if ( toId.length != 0 && toId != playerId ) {
				messageSocket( toId, content.cmd, content );
			}
			return true;
		});
	}
	
	static function onBackCallback( ret:Dynamic ) {
		//trace( ret.type, ret.msg.cmd );
		//callAction( ret.msg )();
		callAction( ret.msg );
	}
	
	static function callAction( content:Dynamic ):Void {
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
			case 'onDiceAction':Main.showDiceMessage( content.content.playerId, content.content.dice );
			case 'seperateCardSameTogether':Main.moveCards( content.content.ary_select, content.content.pos_mouse, false );
			case 'changeIndex':Main.changeIndex( content.content.cardId );
			case 'removeCards':Main.removeCards( content.content.ary_select );
			case 'addCards':Animate.addCardAndPrepare( content.content );
			case 'listCard':Main.moveCards( content.content.ary_select, content.content.pos_mouse, true );
			case 'listSeparate':Main.moveCards( content.content.ary_select, content.content.pos_mouse, false );
			case 'flip':Main.applyValue( content.content.ary_select, false );
			case 'setOwner':Main.applyValue( content.content.ary_select, false );
			case 'setRelate':Main.applyValue( content.content.ary_select, false );
			case 'shuffle':Main.moveCards( content.content.ary_select, content.content.pos_mouse, true );
			case 'shuffleSeparate':Main.moveCards( content.content.ary_select, content.content.pos_mouse, false );
			case 'rotate':Main.applyValue( content.content.ary_select, false );
			case 'listCardReverse':Main.moveCards( content.content.ary_select, content.content.pos_mouse, true );
			case 'listSeparateReverse':Main.moveCards( content.content.ary_select, content.content.pos_mouse, false );
			case 'moveCards':Main.moveCards( content.content.ary_select, content.content.pos_mouse, false );
			case _:
				return null;
		}
	}
	
	public static function pollAllMessage() {
		CallJs.api_pollMessage( { FBID:playerId }, handleResponse( onBackCallback ) );
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
				saveOpponentToCookie( otherPlayerId );
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
			case 'onBtnLoadYugiohClick':
				currentSelect = 'yugioh';
				chooseCardSuit( 'yugioh' );	
			case 'onBtnLoadBattleSpiritsClick':
				currentSelect = 'battleSpirits';
				chooseCardSuit( 'battleSpirits' );	
			case 'onBtnCreateDeck':
				Facade.getInstance().sendNotification( on_createDeck_click );
			case 'onBtnCustomDeck':
				var str:String = j( "#txt_custom" ).textbox( 'getValue' );
				str = '[' + str + ']';
				try {
					var createobj:Dynamic = Json.parse( str );
					createCards( {backId:"0", cards:createobj} );
				}catch ( e:Dynamic ) {
					alert( '輸入格式錯誤哦，請檢查!' );
				}
			case 'onDiceClick':
				dice();
			case 'onTokenClick':
				var oldselect = currentSelect;
				currentSelect = 'other';
				createCards( { backId:"0", cards:[
													'token_0', 'token_0', 'token_0','token_0', 'token_0', 'token_0','token_0', 'token_0', 'token_0','token_0',
													'token_0', 'token_0', 'token_0','token_0', 'token_0', 'token_0','token_0', 'token_0', 'token_0','token_0',
													'token_0', 'token_0', 'token_0','token_0', 'token_0', 'token_0','token_0', 'token_0', 'token_0','token_0',
													'token_0', 'token_0', 'token_0','token_0', 'token_0', 'token_0','token_0', 'token_0', 'token_0','token_0',
													'token_0', 'token_0', 'token_0','token_0', 'token_0', 'token_0','token_0', 'token_0', 'token_0','token_0'
													] } );
				currentSelect = oldselect;
		}
		CallJs.googleTracking_click( type );
	}
	
	
	
	function updateGameUI( currentSelect ) {
		switch( currentSelect ) {
			case 'sangoWar':j( '#btn_sango' ).linkbutton( 'select' );
			case 'gundamWar':j( '#btn_gundam' ).linkbutton( 'select' );
			case 'fighter':j( '#btn_fighter' ).linkbutton( 'select' );
			case 'magic':j( '#btn_magic' ).linkbutton( 'select' );
			case 'army':j( '#btn_army' ).linkbutton( 'select' );
			case 'yugioh':j( '#btn_yugioh' ).linkbutton( 'select' );
			case 'battleSpirits':j( '#btn_battleSpirits' ).linkbutton( 'select' );
		}
	}
	
	function checkCanCreate() {
		return ( playerId != '' && otherPlayerId != '' );
	}
	
	function chooseCardSuit( suitName ) {
		//cardPackage = Reflect.field( cardPackages, suitName );
		cardSuit = Reflect.field( cardSuits, suitName ) ;
		switch( cardSuit ) {
			case null:cardSuit = [];
		}
		Facade.getInstance().sendNotification( on_getSuit_success, { cardSuit:cardSuit  } );
	}
	
	public static function dice() {
		var dice:Int = Math.floor( Math.random() * 100 );
		Main.pushCmds( { cmd:'onDiceAction', content: { playerId:playerId, dice:dice } } );
		
		showDiceMessage( playerId, dice );
		
		//Browser.window.open( 'http://www.wasabistudio.ca/scripts/dice.php?account=card&name=' + playerId + '&reason=forGame&dice_amount=1&dice_faces=100&offset=0&c=pub' );
	}
	
	public static function showDiceMessage( id:String, dice:Int ) {
		slide( '玩家 ' + id + ' 擲了 ' + dice + ' 點', 4000 );
	}
	
	public static function applyValue( ary_select:Array<Dynamic>, self:Bool ) {
		Lambda.foreach( ary_select, function( card:Dynamic ) {
			var showWho = (function(){
				if ( card.relate == card.owner ) {
					if ( card.relate == Main.playerId ) {
						return '';
					}else if( otherPlayerIds.indexOf( card.relate ) != -1 ){
						return 'red';
					}
					/*
					if ( card.relate == Main.playerId ) {
						return '';
					}else if( card.relate == Main.otherPlayerId ){
						return 'red';
					
					*/
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
		model.url = CallJs.api_getCardImageWithPackageName( model.game, model.cardId );
		model.backurl = '../common/images/card/cardback_' + model.backId + '.png';
		
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
	
	public static function createSocket( id ) {
		CallJs.api_createChannel( id, {
			onopen: function() {
				isCanSendMessage = true;
				slide( '連線成功' );
				j( '#btn_connect' ).linkbutton( 'disable' );
				
				for ( i in 0...otherPlayerIds.length ) {
					var fn = (function( _i: Int ):Bool -> Void {
						return function( conn: Bool ) {
							otherPlayerIdsForCheck[_i] = conn;
							isConntect = Lambda.fold( otherPlayerIdsForCheck, function( curr, first ) {
								return first && curr;
							}, true );
							if ( isConntect ) {
								Facade.getInstance().sendNotification( on_searchComplete );
							}
							Facade.getInstance().sendNotification( on_heartbeat_event, {conn:isConntect} );
						}
					})( i );
					CallJs.api_startHeartbeat( playerId, otherPlayerIds[i], fn );
				}
				
			},
			onmessage: function( json ){
				onBackCallback( json );
			},
			onerror: function() {
				j( '#btn_connect' ).linkbutton( 'enable' );
				isConntect = false;
				isCanSendMessage = false;
				alert( '已斷線，請重新連線' );
			},
			onclose: function() {
				j( '#btn_connect' ).linkbutton( 'enable' );	
				isConntect = false;
				isCanSendMessage = false;
				alert( '已斷線，請重新連線' );
			}
		});
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
	
	public static function getCardImageUrlWithPackage( select:String, key:String ):String {
		return CallJs.api_getCardImageWithPackageName( select, key );
		
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