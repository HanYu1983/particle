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
	public static var playerId = getId();
	public static var otherPlayerId = [];
	public static var ary_cards = [];
	
	static var tmpl_card:Dynamic = j( '#tmpl_card' );
	
	function new() {
		
		trace( 'playerId', playerId );
		
		Facade.getInstance().registerMediator( new Model( 'model' ));
		Facade.getInstance().registerMediator( new Layer( 'layer', { body:j(Browser.document.body), container_cards:j( '#container_cards' ) } ));
		
		createUser( {
			FBID:playerId,
			Name:playerId
		}, handleResponse( function( ret ) {
			appStart();
			callForOthers( function() {
				trace( otherPlayerId );
				installPollMessageCallback( { FBID:playerId }, handleResponse( onBackCallback ) );
				createSelfStack();
			});
		}));
		
	}
	
	function createSelfStack() {
		var stack = [for ( i in 0...30 ) { id:getId(), name:i, owner:playerId, relate:'' } ];
		
		Animate.addCardAndPrepare( stack )().done( function() {
			messageAll( 0, { cmd:'addCards', content:stack } );
			
			trace( ary_cards );
		});
	}
	
	function messageAll( i, content ) {
		if ( otherPlayerId[i] == null ) return;
		message( {
			FBID:playerId,
			TargetUser:otherPlayerId[i],
			Content: Json.stringify( content )
		}, handleResponse( function( ret ) {
			messageAll( ++i, content );
		}));
	}
	
	var lastPromise:Dynamic = null;
	
	function onBackCallback( ret:Dynamic ) {
		var prev:Dynamic = lastPromise;
		
		Lambda.foreach( ret.Info, function( info ) {
			lastPromise = callAction( Json.parse( info.Content ) );
			if ( prev != null ) {
				prev.pipe( lastPromise );
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
	
	
	
	function callAction( content ) {
		trace( content.cmd );
		switch( content.cmd ) {
			case 'addCards':
				return Animate.addCardAndPrepare( content.content );
			case _:
				return null;
		}
	}
	
	function callForOthers( cb ) {
		users( handleResponse( function( ret ) {
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
				}, 1000);
			}
		}));
	}
	/*
	function addCardAndPrepare( cards:Array<Dynamic> ) {
		ary_cards = ary_cards.concat( cards );
		Lambda.foreach( ary_cards, function( card ) {
			Main.createCard( card );
			return true;
		});
		
		Lambda.foreach( cards, function( card ) {
			Facade.getInstance().sendNotification( Model.on_state_change, { select:card, showOwner:Main.playerId == card.owner, seeCard: card.owner == card.relate }, 'owner_change' );
			Facade.getInstance().sendNotification( Model.on_state_change, { select:card, showRelate:Main.playerId == card.relate, seeCard: card.owner == card.relate }, 'relate_change' );
			return true;
		});
	}
	*/
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
	
	public static function createCard( model:Dynamic ) {
		Facade.getInstance().registerMediator( new Card( model.id, tmpl_card.tmpl( model ) ));
	}
	
	public static function listCard( ary_select:Dynamic, pos_mouse ) {
		Lambda.foreach( ary_select, function( select ) {
			Facade.getInstance().sendNotification( Model.on_state_change, { select:select, mouse:pos_mouse, pos:Lambda.indexOf( ary_select, select ), count:ary_select.length  }, 'list' );
			return true;
		});
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
	public static function installPollMessageCallback( data, cb ) {
		untyped __js__('api.installPollMessageCallback' )(data, cb );
	}
	
	static function handleResponse( cb ) {
		return function ( err, ret ) {
			trace( 'handleResponse', err );
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