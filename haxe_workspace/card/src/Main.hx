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
			messageAll( { cmd:'addCards', content:stack } );
			
			trace( ary_cards );
		});
	}
	
	public static function messageAll( content:Dynamic ) {
		
		Lambda.foreach( otherPlayerId, function ( id ) {
			message( {
				FBID:playerId,
				TargetUser: id,
				Content: Json.stringify( content )
			}, handleResponse( function( ret ) {
				trace( 'on_message_cb', ret );
			}));
			return true;
		});
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
	
	function callAction( content:Dynamic ) {
		trace( 'cmd', content.cmd );
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
	
	public static function setOwner( ary_select ) {
		Lambda.foreach( ary_select, function( card ) {
			switch( card.owner ) {
				case '':
					//如果owner 是空白，就可以修改為自己
					card.owner = Main.playerId;
				case owner:
					//如果owner 不是自己，就不能更改
					if ( owner == Main.playerId )
						card.owner = '';
			}
			
			var seeCard = switch( card.owner ) {
				case '':false;
				case owner: owner == card.relate;
			}
			
			Facade.getInstance().sendNotification( Model.on_state_change, { select:card, showOwner:Main.playerId == card.owner, seeCard: seeCard }, 'owner_change' );
			return true;
		});
	}
	
	public static function setRelate( ary_select ) {
		Lambda.foreach( ary_select, function( card ) {
			if ( card.owner != Main.playerId ) return true;
			switch( card.relate ) {
				case '':
					//如果relate 是空白，就可以修改為自己
					card.relate = Main.playerId;
				case relate:
					//如果relate 不是自己，就不能更改
					if ( relate == Main.playerId )
						card.relate = '';
			}
			
			var seeCard = switch( card.owner ) {
				case '':false;
				case owner: owner == card.relate;
			}
			
			Facade.getInstance().sendNotification( Model.on_state_change, { select:card, showRelate:Main.playerId == card.relate, seeCard: seeCard }, 'relate_change' );
			return true;
		});
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
		Lambda.foreach( ary_select, function( card ) {
			//當owner是自己或者沒有所屬的時候，才能翻牌
			if ( card.owner != Main.playerId ) return true;
			Facade.getInstance().sendNotification( Model.on_card_flip_change, { select:card } );
			
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