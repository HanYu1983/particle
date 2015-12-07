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
	
	public function rotateForward( sd:Int, ed:Int ):Void 
	{
		
	}
	
	public function rotateBackward( sd:Int, ed:Int ):Void 
	{
		
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
		//for children
	}
	
	function hideItemForMe() {
		//for children
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
				rotate( now );
			}
		});
	}
	
	function rotate( d ) {
		getViewComponent().css({
			'-moz-transform':'rotate('+d+'deg)',
			'-webkit-transform':'rotate('+d+'deg)',
			'-o-transform':'rotate('+d+'deg)',
			'-ms-transform':'rotate('+d+'deg)',
			'transform':'rotate('+d+'deg)'
		}); 
	}
}