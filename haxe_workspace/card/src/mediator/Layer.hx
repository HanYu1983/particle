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
	public static var on_press_f = 'on_press_f';
	
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
		
		_body.mousemove( function( e ) {
			if ( _currentMoveCardId == '' ) return;
			trace( 'move' );
		});
		_body.mouseup( function( e ) {
			
			trace( 'end', _currentMoveCardId );
			if ( _currentMoveCardId == '' ) return;
			
			var tx = e.offsetX;
			var ty = e.offsetY;
			
			//sendNotification( on_layout_mouse_up, { id: _currentMoveCardId, x:tx, y:ty } );
			_currentMoveCardId = '';
		});
		_body.keyup( onBodyKeyUp );
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
				trace( 'start', _currentMoveCardId );
		}
	}
	
	function onBodyKeyUp( e ) {
		trace( e.which ) ;
		switch( e.which ) {
		//m	
			case 77:
		//f
			case 70:
				sendNotification( on_press_f );
		}
	}
}