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
							Main.createItem( ['../common/images/createTable/002.jpg', '../common/images/createTable/001.jpg'], [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )], 'card', 700, 700, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/Victory_Token.png'], [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )], 'token', 100, 100, true, false, Main.playerId )
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