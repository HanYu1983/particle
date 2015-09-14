package mediator;

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
	public static var on_press_f = 'on_press_f';
	public static var on_press_m = 'on_press_m';
	public static var on_press_s = 'on_press_s';
	public static var on_press_l = 'on_press_l';
	public static var on_press_a = 'on_press_a';
	public static var on_press_r = 'on_press_r';
	public static var on_press_c = 'on_press_c';
	public static var on_press_v = 'on_press_v';
	public static var on_press_enter = 'on_press_enter';
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
		_body.mouseup( onBodyMouseUp );
		
		untyped __js__( 'leo.utils.initRectSelect' )( function( ary ){
			sendNotification( on_select_cards, { ary_select:ary } );
		});
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ Model.on_card_enter, Card.card_down ];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case Model.on_card_enter:
				_container_cards.append( notification.getBody() );
			case Card.card_down:
				_currentMoveCardId = notification.getBody().id;
		}
	}
	
	function onBodyMouseMove( e ) {
		sendNotification( on_body_mousemove, {x:e.pageX, y:e.pageY } );
	}
	
	function onBodyMouseUp( e ) {
		trace( e.pageX );
	}
	
	function onBodyKeyUp( e ) {
		trace( e.which ) ;
		switch( e.which ) {
		//c
			case 67:
				sendNotification( on_press_c );
		//v
			case 86:
				sendNotification( on_press_v );
		//r
			case 82:
				sendNotification( on_press_r );
		//a
			case 65:
				sendNotification( on_press_a );
		//l
			case 76:
				sendNotification( on_press_l );
		//s
			case 83:
				sendNotification( on_press_s );
		//m	
			case 77:
				sendNotification( on_press_m );
		//f
			case 70:
				sendNotification( on_press_f );
		//enter
			case 13:
				sendNotification( on_press_enter );
		}
	}
}