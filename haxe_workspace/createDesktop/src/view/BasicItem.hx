package view;

import controller.MainController;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;

using Lambda;
using Reflect;
/**
 * ...
 * @author vic
 */
class BasicItem extends Mediator implements IItem
{
	public static var on_item_click = 'on_item_click';
	public static var on_item_lock = 'on_item_lock';
	
	var _filp:Bool = true;
	var _viewer:Bool = false;
	var _owner:Bool = false;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
		viewComponent.click( function( e ) {
			sendNotification( on_item_click, [viewComponent[0]] );
			onSelect( [viewComponent[0]] );
		});
	}
	
	public function lock( l:Bool ):Void {
		if ( l ) {
			viewComponent.find( '#img_lock' ).show();
		}else {
			viewComponent.find( '#img_lock' ).hide();
		}
		sendNotification( on_item_lock, {view:viewComponent, lock:l} );
	}
	
	public function flip( ?f:Bool ):Void 
	{
		_filp = f;
		checkViewerAndShowCard();
	}
	
	public function focus( f:Bool ):Void {
		if ( f ) {
			viewComponent.addClass( 'focus' );
		}else {
			viewComponent.removeClass( 'focus' );
		}
	}
	
	public function move(x:Int, y:Int):Void 
	{
		viewComponent.animate( { left:x, top:y } );
	}
	
	public function rotate( sd:Int, ed:Int ):Void {
		rotateAnimation( sd, ed );
	}
	
	public function setViewer( v:Bool ):Void 
	{
		_viewer = v;
		if ( _viewer ) {
			viewComponent.find( '#txt_viewer' ).show();
		}else {
			viewComponent.find( '#txt_viewer' ).hide();
		}
		checkViewerAndShowCard();
	}
	
	public function setOwner( o:Bool ):Void 
	{
		_owner = o;
		if ( _owner ) {
			viewComponent.find( '#txt_owner' ).show();
		}else {
			viewComponent.find( '#txt_owner' ).hide();
		}
		checkViewerAndShowCard();
	}
	
	public function getViewer():Dynamic 
	{
		return _viewer;
	}
	
	public function getOwner():Dynamic 
	{
		return _owner;
	}
	
	
	override public function listNotificationInterests():Array<String> 
	{
		return [MainController.on_select_cards ];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case MainController.on_select_cards:
				onSelect( notification.getBody().field( 'ary_select' ) );
		}
	}
	
	function checkViewerAndShowCard() {
	//	trace( '-----------------------' );
	//	trace( '_filp', _filp );
	//	trace( '_viewer', _viewer );
	//	trace( '_owner', _owner );
		if ( !_filp ) showItemForMe();
		else {
			if ( _viewer && _owner ) showItemForMe();
			else hideItemForMe();
		}
	}
	
	function showItemForMe() {
		viewComponent.find( '.card_back' ).hide();
	}
	
	function hideItemForMe() {
		viewComponent.find( '.card_back' ).show();
	}
	
	function onSelect( ary_select:Array<Dynamic> ) {
		focus( false );
		if ( checkSelf( ary_select ) ) {
			focus( true );
		}
	}
	
	function checkSelf( ary_select:Array<Dynamic> ):Bool {
		if ( ary_select == null ) return false;
		var isSelf = false;
		for ( i in 0...ary_select.length ) {
			var div:Dynamic = ary_select[i] ;
			var itemId = div.id;
			if ( itemId == getMediatorName() ) {
				isSelf = true;
				return isSelf;
			}
		}
		return isSelf;
	}
	
	
	function rotateAnimation( sd:Int, ed:Int ) {
		Main.j({deg: sd}).animate({deg: ed}, {
        duration: 300,
			step: function(now) {
				getViewComponent().css({
					'-moz-transform':'rotate('+now+'deg)',
					'-webkit-transform':'rotate('+now+'deg)',
					'-o-transform':'rotate('+now+'deg)',
					'-ms-transform':'rotate('+now+'deg)',
					'transform':'rotate('+now+'deg)'
				}); 
			}
		});
	}
	
}