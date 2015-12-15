package controller;

import js.Browser;
import js.html.KeyboardEvent;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;
import view.BasicItem;
import view.CardItem;
import view.IItem;
import view.MapItem;

using Lambda;
using Reflect;
/**
 * ...
 * @author vic
 */
class MainController extends Mediator
{
	public static var create_item = 'create_item';
	public static var on_receiveMessage = 'on_receiveMessage';
	
	public static var on_select_cards = 'on_select_cards';
	public static var on_press = 'on_press';
	
	var ary_select:Array<Dynamic> = [];
	var ary_allItem:Array<Dynamic> = [];
	var pos_mouse = [0, 0];
	var isList = false;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
		untyped __js__( 'leo.utils.initRectSelect' )( function( ary ) {
			trace( ary );
			onSelectItems( ary );
		});
		
		Main.j( 'body' ).mousemove( onBodyMouseMove );
		Main.j( 'body' ).keyup( onBodyKeyUp );
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 	create_item, 
					on_select_cards, 
					on_receiveMessage,
					BasicItem.on_item_click,
					BasicItem.on_item_lock
					];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		//trace( notification );
		switch( notification.getName() ) {
			
			case BasicItem.on_item_lock:
				var div:Dynamic = notification.getBody().view;
				var lock = notification.getBody().lock;
				if ( lock ) viewComponent.prepend( div );
			case BasicItem.on_item_click:
				var div:Dynamic = notification.getBody();
				viewComponent.append( div );
				onSelectItems( div, true );
			case 'create_item':
				var ary_creates:Array<Dynamic> = notification.getBody();
				ary_creates.foreach( function( c:Dynamic ) {
					createItem( c );
					return true;
				});
			case on_receiveMessage:
				switch( notification.getType() ) {
					case 'addItems':
						var tempItems:Array<Dynamic> = notification.getBody();
						tempItems.foreach( function( c:Dynamic ) {
							createItem( c );
							return true;
						});
					case 'applyTransform':
						updateView( updateModel( notification.getBody() ) );
					case 'applyRotateForward':
						var ary_items = receiveItemToLocalModel( notification.getBody() );
						Main.doAction( 'rotateForward', ary_items );
					case 'applyRotateBackward':
						var ary_items = receiveItemToLocalModel( notification.getBody() );
						Main.doAction( 'rotateBackward', ary_items );
					case 'applyViewerOwner':
						var ary_items = receiveItemToLocalModel( notification.getBody() );
						Main.doAction( 'setOwner', ary_items );
						Main.doAction( 'setViewer', ary_items );
					case 'applyFlip':
						var ary_items = receiveItemToLocalModel( notification.getBody() );
						Main.doAction( 'flip', ary_items );
				}
		}
	}
	
	function updateModel( ary_receive:Array<Dynamic> ) {
		return ary_receive.map( function( receive:Dynamic ) {
			var model:Dynamic = getItemFromPoolById( receive.id );
			model.pos = receive.pos.slice();
			model.deg = receive.deg;
			return model;
		});
	}
	
	function updateView( ary_item:Array<Dynamic> ) {
		ary_item.foreach( function( item:Dynamic ) {
			var m:IItem = cast( facade.retrieveMediator( item.id ), IItem );
			var dom:Dynamic = facade.retrieveMediator( item.id ).getViewComponent();
			var dom_pos = [ StringTools.replace( dom.css( 'left' ), 'px', '' ), StringTools.replace( dom.css( 'top' ), 'px', '' )];
			
			if ( dom.attr( 'deg' ) == null ) {
				m.rotate( 0, item.deg );
			}else {
				var oldDegree = dom.attr( 'deg' );
				if ( oldDegree != item.deg ) {
					m.rotate( oldDegree, item.deg );
				}
			}
			dom.attr( 'deg', item.deg );
			/*
			if ( dom.css('transform') == 'none' ) {
				m.rotateBackward( 0, item.deg );
			}else {
				var oldDegree = getDegreeFromMatrix( dom.css( 'transform' ));
				if ( oldDegree != item.deg ) {
					m.rotateBackward( oldDegree, item.deg );
				}
				trace( oldDegree, item.deg );
			}
			*/
			
			if ( ( dom_pos[0] != item.pos[0] ) || ( dom_pos[1] != item.pos[1] )) {
				m.move( item.pos[0], item.pos[1] );
			}
			
			return true;
		});
	}
	
	function getDegreeFromMatrix( m ) {
		var values = m.split('(')[1],
			values = values.split(')')[0],
			values = values.split(',');

		var a = values[0]; // 0.866025
		var b = values[1]; // 0.5
		var c = values[2]; // -0.5
		var d = values[3]; // 0.866025
		
		return Math.round( Math.asin(b) * (180 / Math.PI));
	}
	
	function receiveItemToLocalModel( ary_receive:Array<Dynamic> ) {
		return ary_receive.map( function( tempItem:Dynamic ) {
			return getItemFromPoolById( tempItem.id );
		});
	}
	
	function createItem( model:Dynamic ) {
		var item:Mediator;
		switch( model.type ) {
			case 'card':
				item = new CardItem( model.id, Main.createItemDiv( model.type, model ) );
			case 'map':
				item = new CardItem( model.id, Main.createItemDiv( model.type, model ) );
			default:
				item = new BasicItem( model.id, Main.createItemDiv( model.type, model ) );
		}
		item.viewComponent.css( 'left', model.pos[0] + 'px' );
		item.viewComponent.css( 'top', model.pos[1] + 'px' );
		facade.registerMediator( item );
		viewComponent.append( item.viewComponent );
		
		ary_allItem.push( model );
	}
	
	function onBodyKeyUp( e ) {
		sendNotification( on_press, null, e.which );
		
		switch( e.which ) {
			case KeyboardEvent.DOM_VK_A:
				doMoveItem( ary_select.slice( 0 ) );
			case KeyboardEvent.DOM_VK_X:
				ary_select.foreach( function( item:Dynamic ) {
					item.deg += 90;
					return true;
				});
				updateView( ary_select );
			case KeyboardEvent.DOM_VK_Z:
				ary_select.foreach( function( item:Dynamic ) {
					item.deg -= 90;
					return true;
				});
				updateView( ary_select );
				/*
				 * case 'rotateForward':
					var td = Math.floor( itemModel.deg + 90 );
					item.rotateForward( itemModel.deg, td );
					itemModel.deg = td;
				case 'rotateBackward':
					var td = Math.floor( itemModel.deg - 90 );
					item.rotateForward( itemModel.deg, td );
					itemModel.deg = td;*/
					
			case KeyboardEvent.DOM_VK_E:
				doSortingItem();
				Main.doAction( 'list', ary_select, {pos_mouse:pos_mouse} );
			case KeyboardEvent.DOM_VK_W:
				Main.doAction( 'reverse', ary_select, {pos_mouse:pos_mouse} );
			case KeyboardEvent.DOM_VK_Q:
				Main.doAction( 'shuffle', ary_select, {pos_mouse:pos_mouse} );
			case KeyboardEvent.DOM_VK_D:
				selectMyItem();
			case KeyboardEvent.DOM_VK_S:
				if ( isList ) {
					Main.doAction( 'together', ary_select, {pos_mouse:pos_mouse} );
				}else {
					Main.doAction( 'list', ary_select, {pos_mouse:pos_mouse} );
				}
				isList = !isList;
			case KeyboardEvent.DOM_VK_C:
				Main.doAction( 'setOwner', ary_select );
			case KeyboardEvent.DOM_VK_V:
				Main.doAction( 'setViewer', ary_select );
			
			case KeyboardEvent.DOM_VK_F:
				Main.doAction( 'flip', ary_select );
			
			case KeyboardEvent.DOM_VK_L:
				Main.doAction( 'lock', ary_select );
		}
	}
	
	function onSelectItems( ary:Array<Dynamic>, selectLock:Bool = false ) {
		ary_select = ary.map( function( model:Dynamic ) {
			return getItemFromPoolById( model.id );
		});
		if( !selectLock )
			ary_select = filterLock( ary_select );
		sendNotification( on_select_cards, { ary_select:ary_select } );
	}
	
	function selectMyItem() {
		ary_select = filterLock( getMyItemFromPool() );
		sendNotification( on_select_cards, { ary_select:ary_select } );
	}
	
	function doSortingItem() {
		var collectobj:Dynamic = { };
		ary_select.foreach( function( card ) {
			if ( collectobj.field( card.cardId ) == null ) {
				collectobj.setField( card.cardId, [] );
			}
			collectobj.field( card.cardId ).push( card );
			return true;
		});
		
		var newary = [];
		for ( c in collectobj.fields() ) {
			newary = newary.concat( collectobj.field( c ) );
		}
		ary_select = newary;
	}
	
	function filterLock( ary:Array<Dynamic> ):Array<Dynamic> {
		var nary = ary.fold( function( curr, first:Array<Dynamic> ) {
			if ( !curr.lock ) first.push( curr );
			return first;
		}, [] );
		return nary;
	}
	
	function onBodyMouseMove( e ) {
		pos_mouse[0] = e.pageX;
		pos_mouse[1] = e.pageY;
	}
	
	function getItemFromPoolById( id:String ) {
		return ary_allItem.filter( function( model ) {
			return id == model.id;
		})[0];
	}
	
	function getMyItemFromPool() {
		return ary_allItem.filter( function( model ) {
			return Main.playerId == model.owner;
		});
	}
	
	function doMoveItem( ary_items:Array<Dynamic> ) {
		/*
		if ( ary_select.length == 0 ) return;
		
		var moveTarget:Dynamic = { };
		var ary_items = ary_select.slice( 0 );
		*/
		
		var moveTarget:Dynamic = { };
		ary_items.sort( function( ac, bc ) {
			if ( ac.pos[0] < bc.pos[0] ) return -1;
			return 1;
		});
		moveTarget.x = ary_items[0].pos[0];
		ary_items.sort( function( ac, bc ) {
			if ( ac.pos[1] < bc.pos[1] ) return -1;
			return 1;
		});
		moveTarget.y = ary_items[0].pos[1];
		
		
		var offset = [
			pos_mouse[0] - moveTarget.x,
			pos_mouse[1] - moveTarget.y
		];
		Lambda.foreach( ary_select, function( select ) {
			select.pos[0] += offset[0];
			select.pos[1] += offset[1];
			return true;
		});
		
		Main.doAction( 'move', ary_items );
	}
	
}