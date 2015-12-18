package controller;

import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;

/**
 * ...
 * @author vic
 */
class UIController extends Mediator
{

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 
					Main.onBtnStartServer,
					Main.onBtnPokerClick
				];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case Main.onBtnStartServer:
				startServer();
			case Main.onBtnPokerClick:
				createPoker();
		}
	}
	
	function createPoker() {
		var ary_create = [
							Main.createItem( [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )], 'card', 100, 100, true, false, Main.playerId ),
							Main.createItem( [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )], 'card', 100, 100, true, false, Main.playerId ),
							Main.createItem( [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )], 'card', 100, 100, true, false, Main.playerId ),
							Main.createItem( [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )], 'card', 100, 100, true, false, Main.playerId ),
							Main.createItem( [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )], 'card', 600, 600, true, false, Main.playerId )
						];
		facade.sendNotification( MainController.create_item, ary_create );
	}
	
	function startServer(){
		var playerId:String = viewComponent.find( '#txt_id' ).textbox( 'getValue' );
		if ( playerId == '' ) return;
		
		Main.playerId = playerId;
		Main.createSocket( playerId );
		
		var ops:String = viewComponent.find( '#combo_ops' ).combobox( 'getValue' );
		Main.ary_ops = ops.split( ',' );
	}
}