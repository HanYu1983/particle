package;

import controller.UIController;
import haxe.Json;
import js.Browser;
import js.Lib;
import org.puremvc.haxe.interfaces.IMediator;
import org.puremvc.haxe.patterns.facade.Facade;
import org.puremvc.haxe.patterns.mediator.Mediator;
import per.vic.pureMVCref.tableGameModel.controller.MainController;
import per.vic.pureMVCref.tableGameModel.controller.SocketController;
import per.vic.pureMVCref.tableGameModel.Tool;
import per.vic.pureMVCref.tableGameModel.view.CardItem;
import per.vic.pureMVCref.tableGameModel.view.IItem;

using Lambda;
using Reflect;
using StringTools;
/**
 * ...
 * @author vic
 */
class Main 
{	
	public static var onBtnStartServer = 'onBtnStartServer';
	public static var onBtnPokerClick = 'onBtnPokerClick';
	
	static function main() 
	{
		Browser.document.addEventListener("contextmenu", function(e){
			e.preventDefault();
		}, false);
		
		Tool.j( Browser.document ).ready( function() {
			Facade.getInstance().registerMediator( new MainController( 'MainController', Tool.j( '#container_cards' ) ) );
			Facade.getInstance().registerMediator( new UIController( 'UIController', Tool.j( '.easyui-layout' ) ) );
			Facade.getInstance().registerMediator( new SocketController( 'SocketController' ));
			
			trace( 'ok' );
			
			Facade.getInstance().sendNotification( MainController.create_item, [
																					Tool.createItem( ['../common/images/createTable/002.jpg'], [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )], 'card', 100, 200, true, false, SocketController.playerId ),
																					Tool.createItem( ['___J20</br>level:10</br>幹爆20台，爽'], [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )], 'data', 100, 200, true, false, SocketController.playerId ),
																					Tool.createItem( ['../common/images/createTable/Victory_Token.png'], [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )], 'token', 100, 100, true, false, SocketController.playerId )
																				]);
																				
		});
		
		Browser.window.setField( 'onHtmlClick', onHtmlClick );
	}
	
	static function onHtmlClick( type:String ) {
		Facade.getInstance().sendNotification( type );
	}
}