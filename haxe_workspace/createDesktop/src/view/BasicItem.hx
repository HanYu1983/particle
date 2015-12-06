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
	
	var _owner:Dynamic;
	var _viewer:Dynamic;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
		viewComponent.click( function( e ) {
			sendNotification( on_item_click, [viewComponent[0]] );
			onSelect( [viewComponent[0]] );
		});
	}
	
	public function lock( l:Bool ):Void {
		trace( l );
	}
	
	public function flip( ?f:Bool ):Void 
	{
		
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
	
	public function setViewer(player:Dynamic):Void 
	{
		_viewer = player;
	}
	
	public function setOwner(player:Dynamic):Void 
	{
		_owner = player;
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