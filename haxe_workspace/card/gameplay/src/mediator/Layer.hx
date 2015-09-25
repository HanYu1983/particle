package mediator;

import js.Browser;
import js.html.KeyboardEvent;
import model.Model;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;

/**
 * ...
 * @author vic
 */
class Layer extends Mediator
{
	public static var on_layout_mouse_up = 'on_layout_mouse_up';
	public static var on_select_cards = 'on_select_cards';
	public static var on_press = 'on_press';
	public static var on_body_mousemove = 'on_body_mousemove';
	
	var _body:Dynamic;
	var _container_cards:Dynamic;
	var _currentMoveCardId:String = '';
	
	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
		_container_cards = viewComponent.container_cards;
		_body = viewComponent.body;
	}
	
	override public function onRegister():Void 
	{
		super.onRegister();
		
		_body.keyup( onBodyKeyUp );
		_body.mousemove( onBodyMouseMove );
		
		#if debug
		#else
		Browser.document.addEventListener("contextmenu", function(e){
			e.preventDefault();
		}, false);
		#end
		_body.mousedown( onBodyMouseDown );
		
		untyped __js__( 'leo.utils.initRectSelect' )( function( ary ){
			sendNotification( on_select_cards, { ary_select:ary } );
		});
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 	Model.on_card_enter, 
					Card.card_down,
					Card.card_remove];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case Model.on_card_enter:
				_container_cards.append( notification.getBody() );
			case Card.card_remove:
				notification.getBody().dom.remove();
			case Card.card_down:
				_currentMoveCardId = notification.getBody().id;
		}
	}
	
	function onBodyMouseMove( e ) {
		sendNotification( on_body_mousemove, {x:e.pageX, y:e.pageY } );
	}
	
	function onBodyKeyUp( e ) {
		sendNotification( on_press, null, e.which );
	}
	
	function onBodyMouseDown( e ) {
		sendNotification( on_press, null, e.which );
	}
}