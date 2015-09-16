package;

import haxe.Json;
import haxe.Timer;
import js.Browser;
import js.html.NotifyPaintEvent;
import mediator.Card;
import js.Lib;
import mediator.Layer;
import model.Model;
import org.puremvc.haxe.patterns.facade.Facade;

/**
 * ...
 * @author vic
 */
class Main 
{
	public static var j:Dynamic = untyped __js__('$');
	static var id = 0;
	public static var playerId = getId();
	public static var otherPlayerId = [];
	public static var ary_cards:Array<Dynamic> = [];
	public static var ary_cmds:Array<Dynamic> = [];
	
	static var tmpl_card:Dynamic = j( '#tmpl_card' );
	
	function new() {
		
		j( '#txt_id' ).html( 'playerId: ' + playerId );
		
		Facade.getInstance().registerMediator( new Model( 'model' ));
		Facade.getInstance().registerMediator( new Layer( 'layer', { body:j(Browser.document.body), container_cards:j( '#container_cards' ) } ));
		
		Reflect.setField( Browser.window, 'onHtmlClick', onHtmlClick );
	}
	
	function createSelfStack() {
		var stack = [for ( i in 0...30 ) { id:getId(), name:i, owner:playerId, relate:'', back:true } ];
		
		Animate.addCardAndPrepare( stack )().done( function() {
			pushCmd( { cmd:'addCards', content:stack } );
		});
	}
	
	public static function pushCmd( content:Dynamic ) {
		content.time = Date.now().getTime();
		ary_cmds.push( content );
		j( '#txt_output2' ).html( 'pushCmds: ' + content.time + '_' + content.cmd );
	}
	
	public static function messageAll( content:Array<Dynamic> ) {
		Lambda.foreach( otherPlayerId, function ( id ) {
			message( {
				FBID:playerId,
				TargetUser: id,
				Content: Json.stringify( content )
			}, handleResponse( function( ret ) {
				
			}));
			return true;
		});
		ary_cmds = [];
	}
	
	var lastPromise:Dynamic = null;
	
	function onBackCallback( ret:Dynamic ) {
		var prev:Dynamic = lastPromise;
		
		Lambda.foreach( ret.Info, function( info ) {
			trace( info.Time );
			
			lastPromise = callAction( Json.parse( info.Content ) );
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
		
		/*
		var curr, prev
		if promise != null {
			prev = promise
		}
		for i ~ count {
			curr = genPromise( cmd )
			promise = curr
			if prev == null {
				prev = curr
			} else {
				prev.pipe( curr )
				prev = curr
			}
		}
		
		if curr != null {
			curr.done() {
				promise = null
			}
		}
		*/
		
		/*
		Lambda.foreach( ret.Info, function( info ) {
			callAction( Json.parse( info.Content ));
			return true;
		});
		*/
	}
	
	function callAction( content:Dynamic ) {
		if ( content.content.ary_select != null ) {
			content.content.ary_select = Lambda.fold( content.content.ary_select, function( remoteCard, curr ) {
				var localCard = getCardsById( remoteCard.id );
				localCard.owner = remoteCard.owner;
				localCard.relate = remoteCard.relate;
				localCard.back = remoteCard.back;
				curr.push( localCard );
				return curr;
			}, []);
		}
		
		trace( content.cmd );
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
			case _:
				Browser.alert( 'asb' );
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
				}, 1000 * 10 );
			}
		}));
	}
	
	function appStart() {
		//fake player
		//var cards = [for ( i in 0...30 ) { id:getId(), name:i, owner:playerId, relate:'' } ];
		//ary_cards = ary_cards.concat( cards );
		
		//fake enemy
		//cards = [for ( i in 0...30 ) { id:getId(), name:i, owner:getId(), relate:'' } ];
		//ary_cards = ary_cards.concat( cards );
		
		
		//Animate.addCards( cards )().pipe( Animate.list( cards.slice(0, 15), [200, 200] )).pipe( Animate.listSeparate( cards.slice(0, 7), [300, 300] ));
		//Animate.addCards( ary_cards )();
		/*
		Lambda.foreach( ary_cards, function( card ) {
			Facade.getInstance().sendNotification( Model.on_state_change, { select:card, showOwner:Main.playerId == card.owner, seeCard: card.owner == card.relate }, 'owner_change' );
			Facade.getInstance().sendNotification( Model.on_state_change, { select:card, showRelate:Main.playerId == card.relate, seeCard: card.owner == card.relate }, 'relate_change' );
			return true;
		});
		*/
	}
	
	function onHtmlClick( type, ?params ) {
		switch( type ) {
			case 'onBtnCreateClick':
				createUser( {
					FBID:playerId,
					Name:playerId
				}, handleResponse( function( ret ) {
					appStart();
					callForOthers( function() {
						j('#txt_output' ).html( 'others id: ' + Json.stringify( otherPlayerId ) );
						//installPollMessageCallback( { FBID:playerId }, handleResponse( onBackCallback ) );
						createSelfStack();
					});
				}));
			case 'onBtnMessageClick':
				trace("G");
				messageAll( ary_cmds );
			case 'onBtnPollingClick':
				pollMessage( {
					FBID:playerId
				}, handleResponse( onBackCallback ));
		}
	}
	
	public static function applyValue( ary_select:Array<Dynamic> ) {
		Lambda.foreach( ary_select, function( card:Dynamic ) {
			
			var seeCard = switch( card.owner ) {
				case '':false;
				case owner: ( owner == card.relate ) && ( owner == playerId );
			}
			
			Facade.getInstance().sendNotification( Model.on_state_change, { select:card, 
																			showRelate:Main.playerId == card.relate, 
																			showOwner:Main.playerId == card.owner, 
																			seeCard: seeCard 
																			}, 'ownerAndRelate_change' );
			return true;
		});
		
		
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
	
	public static function createCard( model:Dynamic ) {
		Facade.getInstance().registerMediator( new Card( model.id, tmpl_card.tmpl( model ) ));
	}
	
	public static function listCard( ary_select:Dynamic, pos_mouse ) {
		Lambda.foreach( ary_select, function( select ) {
			Facade.getInstance().sendNotification( Model.on_state_change, { select:select, mouse:pos_mouse, pos:Lambda.indexOf( ary_select, select ), count:ary_select.length  }, 'list' );
			return true;
		});
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
	
	public static function listSeparate( ary_select:Dynamic, pos_mouse ) {
		Lambda.foreach( ary_select, function( select ) {
			Facade.getInstance().sendNotification( Model.on_state_change, { select:select, mouse:pos_mouse, pos:Lambda.indexOf( ary_select, select ), count:ary_select.length  }, 'list_separate' );
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
	
	static function handleResponse( cb ) {
		return function ( err, ret ) {
			if ( err != null ) {
				Browser.alert( err );
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