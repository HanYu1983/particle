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

/**
 * ...
 * @author vic
 */
class Main 
{
	public static var j:Dynamic = untyped __js__('$');
	
	public static var playerId = getId();
	public static var otherPlayerId = [];
	public static var ary_cards:Array<Dynamic> = [];
	public static var ary_cmds:Array<Dynamic> = [];
	
	static var tmpl_card:Dynamic = j( '#tmpl_card' );
	
	//static var sendTimer:Timer = null;
	public static var cardPackage = null;
	
	#if debug
	static var keepTime = 1000;
	#else
	static var keepTime = 1000 * 1;
	#end
	
	function new() {
		j( '#txt_id' ).html( playerId );
		
		Facade.getInstance().registerMediator( new UI(null, j('.easyui-layout')) );
		Facade.getInstance().registerMediator( new Model( 'model' ));
		Facade.getInstance().registerMediator( new Layer( 'layer', { body:j(Browser.document.body), container_cards:j( '#container_cards' ) } ));
		
		Reflect.setField( Browser.window, 'onHtmlClick', onHtmlClick );
	}
	
	function createSelfStack() {
		function tempGetCardId( i ) {
			return ( i + 1000 ) + '.jpg';
		}
		
		var stack = [for ( i in 0...30 ) { 	id:getId(), 
											cardId:tempGetCardId(i + 1) , 
											name:i, 
											owner:playerId, 
											relate:'', 
											deg:0, 
											pos:[0, 0], 
											back:true,
											showTo:''
											} ];
		
		Animate.addCardAndPrepare( stack )().done( function() {
			pushCmds( { cmd:'addCards', content:stack } );
		});
	}
	
	public static function pushCmds( content:Dynamic ) {
		
		ary_cmds.push( content );
		j( '#txt_output2' ).html( 'pushCmds: ' + content.cmd );
		
	}
	
	public static function messageAll( content:Array<Dynamic> ) {
		j( '#txt_output2' ).html( 'messageAll' );
		Lambda.foreach( otherPlayerId, function ( id ) {
			message( {
				FBID:playerId,
				TargetUser: id,
				Content: Json.stringify( content ),
				UnixTime: Math.floor( Date.now().getTime() / 1000 )
			}, handleResponse( function( ret ) {
				slide( '送出完成' );
			}));
			return true;
		});
		ary_cmds = [];
	}
	
	static var lastPromise:Dynamic = null;
	
	static function onBackCallback( ret:Dynamic ) {
		
		slide( '接收完成' );
		
		var allCmds:Array<Dynamic> = Lambda.fold( ret.Info, function( info, curr:Array<Dynamic> ) {
			return curr.concat( Json.parse( info.Content ) );
		}, []);
		
		function doAction( cmds ) {
			if ( cmds.length > 0 ) {
				var cmd:Dynamic = cmds.shift();
				var action:Dynamic = callAction( cmd );
				action().done( function() {
					doAction( cmds );
				});
			}
		}
		doAction( allCmds );
		
		/*
		
		var prev:Dynamic = lastPromise;
		
		Lambda.foreach( allCmds, function( cmd ) {
			
			lastPromise = callAction( cmd );
			if ( prev != null ) {
				try{
					prev().pipe( lastPromise );
				}catch ( err:String ) {
					Browser.alert( err );
				}
			}
			prev = lastPromise;
			return true;
		});
		
		if ( lastPromise != null ) {
			lastPromise().done( function() {
				lastPromise = null;
			});
		}
		*/
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
		
		j( '#txt_output2' ).html( 'receive: ' + content.cmd );
		
		switch( content.cmd ) {
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
	
	function callForOthers( cb ) {
		users( handleResponse( function( ret ) {
			j('#txt_output' ).html( 'users searching...' );
			if ( ret.Info != null && ret.Info.length >= 2 ) {
				Lambda.fold( ret.Info, function(item, curr ) {
					if ( item.Key != playerId ) {
						curr.push( item.Key );
					}
					return curr;
				}, otherPlayerId);
				cb();
			}else {
				Timer.delay( function() {
					callForOthers( cb );
				}, keepTime );
			}
		}));
	}
	
	function keepSend() {
		if ( ary_cmds.length > 0 ) {
			messageAll( ary_cmds );
		}
		Timer.delay( keepSend, keepTime );
	}
	
	public static function sendAllMessage() {
		messageAll( ary_cmds );
	}
	
	public static function pollAllMessage() {
		pollMessage( { FBID:playerId }, handleResponse( onBackCallback ) );
	}
	
	function onHtmlClick( type, ?params ) {
		switch( type ) {
			case 'onBtnClearClick':
				clear( function() {
					Browser.location.reload();
				});
			case 'onBtnSendClick':
				sendAllMessage();
			case 'onBtnPollingClick':
				pollAllMessage();
			case 'onBtnCreateClick':
				createUser( {
					FBID:playerId,
					Name:playerId
				}, handleResponse( function( ret ) {
					
					getCardPackage( 'gundamWar', handleResponse( function( ret ) {
						cardPackage = ret;
						
						#if debug 
						createSelfStack();
						#else
						callForOthers( function() {
							j('#txt_output' ).html( Json.stringify( otherPlayerId ) );
							//installPollMessageCallback( { FBID:playerId }, handleResponse( onBackCallback ) );
							createSelfStack();
						});
						#end
					}));
					
				}));
		}
	}
	
	public static function applyValue( ary_select:Array<Dynamic> ) {
		Lambda.foreach( ary_select, function( card:Dynamic ) {
			Facade.getInstance().sendNotification( Model.on_state_change, { 
																			select:card, 
																			showRelate:Main.playerId == card.relate, 
																			showOwner:Main.playerId == card.owner, 
																			seeCard: seeCard( card ) 
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
		applyValue( ary_select );
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
		applyValue( ary_select );
		return send;
	}
	
	public static function rotate( ary_select:Array<Dynamic>, ?deg = 90 ) {
		Lambda.foreach( ary_select, function( card ) {
			card.deg += deg;
			return true;
		});
		applyValue( ary_select );
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
		applyValue( ary_select );
		return send;
	}
	
	public static function moveCards( ary_select:Dynamic, pos_mouse, zsort ) {
		Lambda.foreach( ary_select, function( select ) {
			Facade.getInstance().sendNotification( Model.on_state_change, { select:select, zsort:zsort }, 'moveCards' );
			return true;
		});
	}
	
	public static function getCardsById( id:String ) {
		return Lambda.find( Main.ary_cards, function( card:Dynamic ) {
			return ( id == card.id );
		});
	}
	
	/**
	data: {
		ID: string,
		Name: string
	}
	cb: function( err, ret ){
		err:string,
		ret: {
			Info: {}
			Error: string
		}
	}
	*/
	public static function createUser( data, cb ) {
		untyped __js__( 'api.createUser' )( data, cb );
	}
	
	/**
	data: {
		ID: string,
		Name: string
	}
	cb: function( err, ret ){
		err:string,
		ret: {
			Info: {}
			Error: string
		}
	}
	*/
	public static function users( cb ) {
		untyped __js__('api.users' )( cb );
	}
	
	/**
	data: {
		FBID: string,
		TargetUser: string,
		Content: string
	}
	cb: function( err, ret ){
		err:string,
		ret: {
			Info: [{}]
			Error: string
		}
	}
	*/
	public static function message( data:Dynamic, cb ) {
		untyped __js__('api.message' )( data, cb );
	}
	
	/**
	data: {
		FBID: string
	}
	cb: function( err, ret ){
		err:string,
		ret: {
			Info: {}
			Error: string
		}
	}
	*/
	public static function pollMessage( data:Dynamic, cb ) {
		untyped __js__('api.pollMessage' )( data, cb );
	}
	/**
	data: {
		FBID: string
	}
	cb: function( err, ret ){
		err:string,
		ret: {
			Info: {}
			Error: string
		}
	}
	*/
	public static function installPollMessageCallback( data, cb ) {
		untyped __js__('api.installPollMessageCallback' )(data, cb );
	}
	
	public static function clear( cb ) {
		untyped __js__('api.clear' )( cb );
	}
	
	public static function getCardPackage( name, cb ) {
		untyped __js__('api.getCardPackage' )( name, cb );
	}
	
	public static function getCardImageUrlWithPackage( name:Dynamic, key ):String {
		return untyped __js__('api.getCardImageUrlWithPackage' )( name, key );
	}
	
	public static function slide( msg ){
		j.messager.show({
			title:'提示',
			msg: msg,
			timeout:1000,
			showType:'slide'
		});
	}
	
	static function handleResponse( cb ) {
		return function ( err, ret ) {
			if ( err != null ) {
				slide( err );
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