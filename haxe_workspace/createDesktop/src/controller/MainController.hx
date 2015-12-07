package controller;

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
	
	public static var on_select_cards = 'on_select_cards';
	public static var on_press = 'on_press';
	
	var ary_select:Array<Dynamic> = [];
	var ary_allItem:Array<Dynamic> = [];
	var pos_mouse = [0, 0];

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
		untyped __js__( 'leo.utils.initRectSelect' )( function( ary ) {
			onSelectItems( ary );
		});
		
		Main.j( 'body' ).mousemove( onBodyMouseMove );
		Main.j( 'body' ).keyup( onBodyKeyUp );
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ create_item, on_select_cards, BasicItem.on_item_click ];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case BasicItem.on_item_click:
				var div:Dynamic = notification.getBody();
				viewComponent.append( div );
				onSelectItems( div, true );
			case 'create_item':
				var item:Mediator;
				var uniqId:String = Main.createDivId();
				var model:Dynamic = { 
					pos:[ Math.floor( Math.random() * 600 ), Math.floor( Math.random() * 600 ) ],
					back:false,
					deg:0,
					lock:false,
					owner:'desktop',
					viewer:''
				};
				model.id = uniqId;
				switch( notification.getType() ) {
					case 'card':
						item = new CardItem( uniqId, Main.createItemDiv( notification.getType(), model ) );
					case 'map':
						model.width = 300;
						model.height = 300;
						item = new MapItem( uniqId, Main.createItemDiv( notification.getType(), model ) );
					//case 'token':
					//	item = new BasicItem( uniqId, Main.createItemDiv( notification.getType(), model ) );
					default:
						item = new BasicItem( uniqId, Main.createItemDiv( notification.getType(), model ) );
				}
				
				item.viewComponent.css( 'left', model.pos[0] + 'px' );
				item.viewComponent.css( 'top', model.pos[1] + 'px' );
				facade.registerMediator( item );
				viewComponent.append( item.viewComponent );
				
				ary_allItem.push( model );
			
		}
	}
	
	function onBodyKeyUp( e ) {
		sendNotification( on_press, null, e.which );
		
		switch( e.which ) {
			case KeyboardEvent.DOM_VK_C:
				Main.doAction( 'setOwner', ary_select );
			case KeyboardEvent.DOM_VK_V:
				Main.doAction( 'setViewer', ary_select );
			case KeyboardEvent.DOM_VK_A:
				doMoveItem();
			case KeyboardEvent.DOM_VK_F:
				Main.doAction( 'flip', ary_select );
			case KeyboardEvent.DOM_VK_X:
				Main.doAction( 'rotateForward', ary_select );
			case KeyboardEvent.DOM_VK_Z:
				Main.doAction( 'rotateBackward', ary_select );
			case KeyboardEvent.DOM_VK_L:
				Main.doAction( 'lock', ary_select );
		}
	}
	
	function onSelectItems( ary:Array<Dynamic>, selectLock:Bool = false ) {
		ary_select = ary.map( function( model:Dynamic ) {
			return getItemFromPool( model.id )[0];
		});
		if( !selectLock )
			ary_select = filterLock( ary_select );
		sendNotification( on_select_cards, { ary_select:ary_select } );
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
	
	function getItemFromPool( id:String ) {
		return ary_allItem.filter( function( model ) {
			return id == model.id;
		});
	}
	
	function doMoveItem() {
		var moveTarget:Dynamic = { };
		var copySelect = ary_select.slice( 0 );
		
		copySelect.sort( function( ac, bc ) {
			if ( ac.pos[0] < bc.pos[0] ) return -1;
			return 1;
		});
		moveTarget.x = copySelect[0].pos[0];
		copySelect.sort( function( ac, bc ) {
			if ( ac.pos[1] < bc.pos[1] ) return -1;
			return 1;
		});
		moveTarget.y = copySelect[0].pos[1];
		
		
		var offset = [
			pos_mouse[0] - moveTarget.x,
			pos_mouse[1] - moveTarget.y
		];
		Lambda.foreach( ary_select, function( select ) {
			select.pos[0] += offset[0];
			select.pos[1] += offset[1];
			return true;
		});
		
		Main.doAction( 'move', copySelect );
	}
}