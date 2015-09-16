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
	public static var on_select_cards = 'on_model_select_cards';
	
	var ary_select:Array<Dynamic> = [];
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
				Layer.on_press_r,
				Layer.on_press_c,
				Layer.on_press_v,
				Layer.on_press_enter,
				Layer.on_body_mousemove,
				Layer.on_select_cards
				];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case Layer.on_select_cards:
				var ori = notification.getBody().ary_select;
				
				ori.sort( function( a, b ) {
					var ax = Std.parseInt( StringTools.replace( Main.j( a ).css( 'left' ), 'px', '' ));
					var ay = Std.parseInt( StringTools.replace( Main.j( a ).css( 'top' ), 'px', '' ));
					var bx = Std.parseInt( StringTools.replace( Main.j( b ).css( 'left' ), 'px', '' ));
					var by = Std.parseInt( StringTools.replace( Main.j( b ).css( 'top' ), 'px', '' ));
					
					if ( bx < ax ) {
						return 1;
					}
					return -1;
				});
				
				ori.sort( function( a, b ) {
					var ax = Std.parseInt( StringTools.replace( Main.j( a ).css( 'left' ), 'px', '' ));
					var ay = Std.parseInt( StringTools.replace( Main.j( a ).css( 'top' ), 'px', '' ));
					var bx = Std.parseInt( StringTools.replace( Main.j( b ).css( 'left' ), 'px', '' ));
					var by = Std.parseInt( StringTools.replace( Main.j( b ).css( 'top' ), 'px', '' ));
					
					if ( by < ay ) {
						return 1;
					}
					return -1;
				});
				
				ary_select = Lambda.fold( ori, function( dom, curr:Array<Dynamic> ) {
					curr.push( Main.getCardsById( Main.j( dom ).attr( 'id' ) ) );
					return curr;
				}, [] );
				
				sendNotification( on_select_cards, { ary_select:ary_select } );
			case Layer.on_press_enter:
				sendNotification( on_state_change, {x:pos_mouse[0], y:pos_mouse[1] }, 'move' );
			case Layer.on_body_mousemove:
				pos_mouse[0] = notification.getBody().x;
				pos_mouse[1] = notification.getBody().y;
			case Card.card_enter:
				sendNotification( on_card_enter, notification.getBody() );
			case Card.card_click:
				if ( notification.getBody().focus ) {
					ary_select = [ Main.getCardsById( notification.getBody().id ) ];
				}else {
					ary_select = [];
				}
				sendNotification( on_select_cards, { ary_select:ary_select } );
			case Layer.on_layout_mouse_up:
				sendNotification( on_card_move, notification.getBody() );
			case Layer.on_press_c:
				if ( Main.setOwner( ary_select ) ) 
					Main.pushCmd( { cmd:'setOwner', content:{ ary_select:ary_select } } );
			case Layer.on_press_v:
				if ( Main.setRelate( ary_select ) )
					Main.pushCmd( { cmd:'setRelate', content:{ ary_select:ary_select } } );
			case Layer.on_press_r:
				ary_select.reverse();
				Main.listSeparate( ary_select, pos_mouse );
			case Layer.on_press_f:
				if ( Main.flip( ary_select ) ) {
					Main.pushCmd( { cmd:'flip', content:{ ary_select:ary_select } } );
				}
			case Layer.on_press_l:
				Main.pushCmd( { cmd:'listCard', content:{ ary_select:ary_select, pos_mouse:pos_mouse } } );
				Main.listCard( ary_select, pos_mouse );
			case Layer.on_press_a:
				Main.pushCmd( { cmd:'listSeparate', content:{ ary_select:ary_select, pos_mouse:pos_mouse } } );
				Main.listSeparate( ary_select, pos_mouse );
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