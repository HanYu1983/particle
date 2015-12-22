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
		var ary_create = [/*
							Main.createItem( ['../common/images/createTable/yh/yh_03.jpg', '../common/images/createTable/yh/yh_20.jpg'], [ 50, 50], 'card', 100, 200, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_13.jpg', '../common/images/createTable/yh/yh_20.jpg'], [ 50, 50], 'card', 100, 200, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_14.jpg', '../common/images/createTable/yh/yh_20.jpg'], [ 50, 50], 'card', 100, 200, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_19.jpg', '../common/images/createTable/yh/yh_20.jpg'], [ 50, 50], 'card', 100, 200, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_35.jpg', '../common/images/createTable/yh/yh_20.jpg'], [ 50, 50], 'card', 100, 200, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_37.jpg', '../common/images/createTable/yh/yh_20.jpg'], [ 50, 50], 'card', 100, 200, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_39.jpg', '../common/images/createTable/yh/yh_20.jpg'], [ 50, 50], 'card', 100, 200, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_41.jpg', '../common/images/createTable/yh/yh_20.jpg'], [ 50, 50], 'card', 100, 200, false, false, Main.playerId ),
							
							Main.createItem( ['../common/images/createTable/yh/yh_01.jpg', '../common/images/createTable/yh/yh_12.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_05.jpg', '../common/images/createTable/yh/yh_12.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_06.jpg', '../common/images/createTable/yh/yh_12.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_07.jpg', '../common/images/createTable/yh/yh_12.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_08.jpg', '../common/images/createTable/yh/yh_12.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_09.jpg', '../common/images/createTable/yh/yh_12.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_10.jpg', '../common/images/createTable/yh/yh_12.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_11.jpg', '../common/images/createTable/yh/yh_12.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_15.jpg', '../common/images/createTable/yh/yh_12.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_38.jpg', '../common/images/createTable/yh/yh_12.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_42.jpg', '../common/images/createTable/yh/yh_12.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_46.jpg', '../common/images/createTable/yh/yh_12.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_47.jpg', '../common/images/createTable/yh/yh_12.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_53.jpg', '../common/images/createTable/yh/yh_12.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_54.jpg', '../common/images/createTable/yh/yh_12.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_55.jpg', '../common/images/createTable/yh/yh_12.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							
							Main.createItem( ['../common/images/createTable/yh/yh_02.jpg', '../common/images/createTable/yh/yh_49.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_04.jpg', '../common/images/createTable/yh/yh_49.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_17.jpg', '../common/images/createTable/yh/yh_49.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_18.jpg', '../common/images/createTable/yh/yh_49.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_21.jpg', '../common/images/createTable/yh/yh_49.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_34.jpg', '../common/images/createTable/yh/yh_49.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_36.jpg', '../common/images/createTable/yh/yh_49.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_40.jpg', '../common/images/createTable/yh/yh_49.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_43.jpg', '../common/images/createTable/yh/yh_49.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_44.jpg', '../common/images/createTable/yh/yh_49.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_45.jpg', '../common/images/createTable/yh/yh_49.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_49.jpg', '../common/images/createTable/yh/yh_49.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_50.jpg', '../common/images/createTable/yh/yh_49.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_51.jpg', '../common/images/createTable/yh/yh_49.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_52.jpg', '../common/images/createTable/yh/yh_49.jpg'], [ 50, 50], 'card', 100, 100, false, false, Main.playerId ),
							
							Main.createItem( ['../common/images/createTable/yh/yh_22.jpg', '../common/images/createTable/yh/yh_56.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_23.jpg', '../common/images/createTable/yh/yh_56.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_24.jpg', '../common/images/createTable/yh/yh_56.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_25.jpg', '../common/images/createTable/yh/yh_56.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_26.jpg', '../common/images/createTable/yh/yh_56.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_27.jpg', '../common/images/createTable/yh/yh_56.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_28.jpg', '../common/images/createTable/yh/yh_56.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_29.jpg', '../common/images/createTable/yh/yh_56.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_30.jpg', '../common/images/createTable/yh/yh_56.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_31.jpg', '../common/images/createTable/yh/yh_56.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_32.jpg', '../common/images/createTable/yh/yh_56.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/yh/yh_33.jpg', '../common/images/createTable/yh/yh_56.jpg'], [ 50, 50], 'card', 100,100, false, false, Main.playerId ),
							
							Main.createItem( ['../common/images/createTable/yh/yh_16.jpg', '../common/images/createTable/yh/yh_49.jpg'], [ 50, 50], 'card', 900, 900, false, false, Main.playerId ),
							
							
							Main.createItem( ['../common/images/createTable/other/role_01.png'], [ 50, 50], 'token', 99, 141, false, false, Main.playerId ),
							Main.createItem( ['../common/images/createTable/other/role_04.png'], [ 50, 50], 'token', 196, 146, false, false, Main.playerId ),
							*/
							//dice
							Main.createItem( [
												'../common/images/createTable/other/dice_01.png', 
												'../common/images/createTable/other/dice_02.png', 
												'../common/images/createTable/other/dice_03.png', 
												'../common/images/createTable/other/dice_04.png', 
												'../common/images/createTable/other/dice_05.png', 
												'../common/images/createTable/other/dice_06.png'
											], [ 50, 50], 'sequence', 50, 50, false, false, Main.playerId )
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