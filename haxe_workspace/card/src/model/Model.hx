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
	
	var ary_select:Array<Dynamic> = null;
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
				Layer.on_press_s,
				Layer.on_press_l,
				Layer.on_press_a,
				Layer.on_press_enter,
				Layer.on_body_mousemove,
				Layer.on_select_cards
				];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case Layer.on_select_cards:
				ary_select = Lambda.array( Lambda.map( Lambda.array( notification.getBody().ary_select ), function( dom ) {
					return { id:Main.j( dom ).attr( 'id' ) };
				}));
			case Layer.on_press_enter:
				sendNotification( on_state_change, {x:pos_mouse[0], y:pos_mouse[1] }, 'move' );
			case Layer.on_body_mousemove:
				pos_mouse[0] = notification.getBody().x;
				pos_mouse[1] = notification.getBody().y;
			case Card.card_enter:
				sendNotification( on_card_enter, notification.getBody() );
			case Card.card_click:
				
				if ( notification.getBody().focus ) {
					ary_select = [ {id:notification.getBody().id } ];
				}else {
					ary_select = [];
				}
			case Layer.on_layout_mouse_up:
				sendNotification( on_card_move, notification.getBody() );
			case Layer.on_press_f:
				sendNotification( on_card_flip_change, null, 'all' );
			case Layer.on_press_l:
				Lambda.foreach( ary_select, function( select ) {
					sendNotification( on_state_change, { select:select, mouse:pos_mouse, pos:Lambda.indexOf( ary_select, select )  }, 'list' );
					return true;
				});
			case Layer.on_press_a:
				Lambda.foreach( ary_select, function( select ) {
					sendNotification( on_state_change, { select:select, mouse:pos_mouse, pos:Lambda.indexOf( ary_select, select )  }, 'list_separate' );
					return true;
				});
			case Layer.on_press_s:
				ary_select.sort( function ( a, b ) {
					return Math.random() > .5 ? 1 : -1;
				});
				Lambda.foreach( ary_select, function( select ) {
					sendNotification( on_state_change, { select:select, mouse:pos_mouse, pos:Lambda.indexOf( ary_select, select )  }, 'list_shuffle' );
					return true;
				});
		}
	}
}