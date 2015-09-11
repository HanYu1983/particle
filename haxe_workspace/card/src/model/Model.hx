package model;

import mediator.Card;
import mediator.Layer;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;

/**
 * ...
 * @author vic
 */
class Model extends Mediator
{
	public static var on_card_flip_change = 'on_card_flip_change';
	public static var on_card_enter = 'on_card_enter';
	public static var on_card_move = 'on_card_move';
	public static var on_state_change = 'on_state_change';
	
	var pos_mouse = [0, 0];

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [Card.card_click, 
				Card.card_enter, 
				Layer.on_layout_mouse_up, 
				Layer.on_press_f,
				Layer.on_press_enter,
				Layer.on_body_mousemove ];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case Layer.on_press_enter:
				sendNotification( on_state_change, {x:pos_mouse[0], y:pos_mouse[1] } );
			case Layer.on_body_mousemove:
				pos_mouse[0] = notification.getBody().x;
				pos_mouse[1] = notification.getBody().y;
			case Card.card_enter:
				sendNotification( on_card_enter, notification.getBody() );
			case Card.card_click:
				sendNotification( on_card_flip_change, notification.getBody() );
			case Layer.on_layout_mouse_up:
				sendNotification( on_card_move, notification.getBody() );
			case Layer.on_press_f:
				sendNotification( on_card_flip_change, null, 'all' );
		}
	}
}