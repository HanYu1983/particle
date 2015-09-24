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
	
	public static var j:Dynamic = untyped __js__('$');
	
	public static var playerId = 'smart';
	public static var otherPlayerId = '';
	public static var ary_cards:Array<Dynamic> = [];
	
	public static var cardPackages:Dynamic = { };
	public static var cardPackage = null;
	public static var cardSuits:Dynamic = {};
	public static var cardSuit = null;
	
	static var keepOnlineTimer:Timer;
	static var tmpl_card:Dynamic = j( '#tmpl_card' );
	static var longPolling:Bool = untyped __js__( 'config.longPolling' );
	
	static var cardPackageUrlMapping:Dynamic = { };
	
	function new() {
		j( '#txt_id' ).textbox( {
			#if debug
			editable:true,
			#else
			editable:false,
			#end
			onChange:function( nv, od ) {
				playerId = nv;
				createSocket( playerId );
			}
		});
		
		j( '#txt_opponent' ).textbox( {
			onChange:function( nv, od ) {
				otherPlayerId = nv;
			}
		});
		
		Facade.getInstance().registerMediator( new UI(null, j('.easyui-layout')) );
		Facade.getInstance().registerMediator( new Model( 'model' ));
		Facade.getInstance().registerMediator( new Layer( 'layer', { body:j(Browser.document.body), container_cards:j( '#container_cards' ) } ));
		
		openLoading( '準備中...請稍等' );
		var fbid = untyped __js__( 'config.fbid[config.fbid.which]' );
		untyped __js__( 'myapp.facebook.init' )( fbid, function() {
			loadCardSuit( 'gundamWar', function() {
				loadCardSuit( 'fighter', function() {
					loadCardSuit( 'sangoWar', function(){
						closeLoading();
						chooseCardSuit( 'fighter' );
						slide( '所有卡牌準備完畢，登入並選擇填入對手的id後，才能開始創建套牌哦!' );
					});
				});
			});
		});
		Reflect.setField( Browser.window, 'onHtmlClick', onHtmlClick );
	}
	
	public static function createSelfDeck( deckId:Int ) {
		
		var deck = cardSuit[deckId];
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
		
		Animate.addCardAndPrepare( toDeck )().done( function() {
			pushCmds( { cmd:'addCards', content:toDeck } );
		});
	}
	
	public static function pushCmds( content:Dynamic ) {
		var toId = j( '#txt_opponent' ).textbox( 'getValue' );
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
	
	public static function pollAllMessage() {
		pollMessage( { FBID:playerId }, handleResponse( onBackCallback ) );
	}
	
	function loadCardSuit( suitName, ?cb: Void -> Void ) {
		if ( Reflect.field( cardPackages, suitName ) != null ) {
			cardPackage = Reflect.field( cardPackages, suitName );
			cardSuit = Reflect.field( cardSuits, suitName );
			Facade.getInstance().sendNotification( on_getSuit_success, { cardSuit:cardSuit  } );
			
			if ( cb != null ) cb();
		}else {
			getCardPackageWithUrl( '../common/cardPackage/' + suitName + '.json', handleResponse( function( ret ) {
				cardPackage = ret;
				Reflect.setField( cardPackages, suitName, cardPackage );
				
				getCardSuitPackageWithUrl( '../common/cardPackage/' + suitName + 'CardSuit.json', handleResponse( function( ret:Dynamic ) {
					Reflect.setField( cardSuits, suitName, ret.cardSuit );
					
					if ( cb != null ) cb();
				}));
			}));
		}
	}
	function onHtmlClick( type, ?params ) {
		switch( type ) {
			case 'onBtnLoginClick':
				untyped __js__( 'myapp.facebook.login' )( function( ret ) {
					var fbid = ret.authResponse.userID;
					j( '#txt_id' ).textbox( 'setValue', fbid );
				});
			case 'onBtnLoadFighterClick':
				chooseCardSuit( 'fighter' );
			case 'onBtnLoadGundamWarClick':
				chooseCardSuit( 'gundamWar' );
			case 'onBtnLoadSangoWarClick':
				chooseCardSuit( 'sangoWar' );
			case 'onBtnCreateDeck':
				#if debug
				Facade.getInstance().sendNotification( on_createDeck_click );
				slide( '創建卡片完成' );
				#else
				//if( checkCanCreate() ){
					Facade.getInstance().sendNotification( on_createDeck_click );
					slide( '創建卡片完成' );
				//}else{
				//	slide( '沒有登入或者沒有對手時，不能創建卡牌哦' );
				//}
				#end
		}
		
	}
	
	function checkCanCreate() {
		return ( playerId != '' && otherPlayerId != '' );
	}
	
	function chooseCardSuit( suitName ) {
		cardPackage = Reflect.field( cardPackages, suitName );
		cardSuit = Reflect.field( cardSuits, suitName ) ;
		Facade.getInstance().sendNotification( on_getSuit_success, { cardSuit:cardSuit  } );
	}
	
	public static function applyValue( ary_select:Array<Dynamic>, self:Bool ) {
		Lambda.foreach( ary_select, function( card:Dynamic ) {
			Facade.getInstance().sendNotification( Model.on_state_change, { 
																			select:card, 
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
					trace( card.relate );
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
		Facade.getInstance().sendNotification( Card.card_enter, Facade.getInstance().retrieveMediator( cardId ).getViewComponent() );
	}
	
	public static function removeCards( ary_select:Array<Dynamic> ) {
		Lambda.foreach( ary_select, function( card ) {
			Main.ary_cards.remove( card );
			Facade.getInstance().sendNotification( Model.on_card_remove, { select:card } );
			return true;
		});
	}
	
	public static function createSocket( id ) {
		var _channel:Dynamic = untyped __js__( 'channel' );
		_channel.createChannel( id, function(err, ch) {
			if ( err != null ) {
				alert( 'socket建立失敗!請重新整理' );
				return;
			}	
			_channel.addEventListenerAndOpenSocket( ch, {
				onopen: function() {
					slide( '創建玩家成功' );
				},
				onmessage: function(path, option){
					var origin = Json.parse(path.data);
					var json = Json.parse(origin);
					onBackCallback( json );
				},
				onerror: function(){
					alert( '已斷線，可能是網路不穩定' );
				},
				onclose: function(){
					alert( '已斷線，可能是網路不穩定' );
				}
			});
			
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
	
	public static function createUser( data, cb ) {
		untyped __js__( 'api.createUser' )( data, cb );
	}
	
	public static function users( cb ) {
		untyped __js__('api.users' )( cb );
	}
	
	public static function message( data:Dynamic, cb ) {
		untyped __js__('api.message' )( data, cb );
	}
	
	public static function pollMessage( data:Dynamic, cb ) {
		untyped __js__('api.pollMessage' )( data, cb );
	}
	
	public static function installPollMessageCallback( data, cb ) {
		untyped __js__('api.installPollMessageCallback' )(data, cb );
	}
	
	public static function clear( cb ) {
		untyped __js__('api.clear' )( cb );
	}
	
	public static function getCardPackage( name, cb ) {
		untyped __js__('api.getCardPackage' )( name, cb );
	}
	
	public static function getCardPackageWithUrl( url, cb ){
		untyped __js__('api.getCardPackageWithUrl' )( url, cb );
	}
	
	public static function getCardSuitPackageWithUrl( url, cb ) {
		untyped __js__('api.getCardSuitPackageWithUrl' )( url, cb );
	}
	
	public static function getCardImageUrlWithPackage( name:Dynamic, key ):String {
		
		var cpkg:Dynamic = null;
		for ( pkg in cardPackages.fields() ) {
			if ( cardPackages.field( pkg ).images.field( key ) != null ) {
				cpkg = cardPackages.field( pkg );
				break;
			}
		}
		if ( cpkg == null ) return '';
		return untyped __js__('api.getCardImageUrlWithPackage' )( cpkg, key );
	}
	
	public static function getCardSuit( pkg ) {
		return untyped __js__('api.getCardSuit' )( pkg );
	} 
	
	public static function slide( msg ){
		j.messager.show({
			title:'提示',
			msg: msg,
			timeout:2000,
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
				alert( '錯誤已經回報' );
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