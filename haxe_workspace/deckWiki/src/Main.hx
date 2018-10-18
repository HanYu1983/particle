package;

import haxe.Timer;
import js.Browser;
import js.Lib;
import model.ModelController;
import org.puremvc.haxe.patterns.facade.Facade;
import view.ViewController;

using Lambda;
using Reflect;
using StringTools;
/**
 * ...
 * @author vic
 */
class Main 
{
	
	static function main() 
	{
		var j:Dynamic = untyped __js__('$');
		Facade.getInstance().registerMediator( new ViewController( 'ViewController', j('body' )) );
		Facade.getInstance().registerMediator( new ModelController( 'ModelController' ) );
		Facade.getInstance().sendNotification( ViewController.do_show_loading, { show:true } );
		
		function initApp( event ) {
			Helper.initFb( function() {
				#if debug
				Facade.getInstance().sendNotification( ModelController.do_save_count, { countMap: { "onBtnCreateDeck":10, "onBtnCustomDeck":4, "onBtnLoadArmyClick":1, "onBtnLoadGundamWarClick":2, "onBtnLoadGundamWarNClick":1, "onBtnLoadYugiohClick":2, "onBtnLoginClick":2, "onBtnStartServer":2, "onClearClick":1, "onResetClick":2, "onSaveClick":5, "onSearchClick":61, "on_item_click:111ba71c-b7d6-4fdc-9b60-5807b2685dab":1, "on_item_click:7ed72294-5223-46b3-98f9-75b2223cfbb1":1, "on_item_output:111ba71c-b7d6-4fdc-9b60-5807b2685dab":1, "on_item_share:048a31dc-2b0c-4905-a65c-852453848255":2, "on_item_share:111ba71c-b7d6-4fdc-9b60-5807b2685dab":1, "on_item_share:7ed72294-5223-46b3-98f9-75b2223cfbb1":5, "on_item_view:048a31dc-2b0c-4905-a65c-852453848255":3, "on_item_view:111ba71c-b7d6-4fdc-9b60-5807b2685dab":3, "on_item_view:7ed72294-5223-46b3-98f9-75b2223cfbb1":45, "showBigList:game=crusade":8, "showBigList:game=dragonZ":5, "showBigList:game=gundamWar":33, "showBigList:game=gundamWarN":4, "showBigList:game=magic":5, "showBigList:game=sangoWar":14, "showBigList:game=sgs":39, "showBigList:game=ws":4, "showBigList:game=yugioh":17 }} );
				Facade.getInstance().sendNotification( ModelController.do_load_all_list );
				Facade.getInstance().sendNotification( ViewController.do_show_loading, { show:false } );
				Facade.getInstance().sendNotification( ViewController.do_enable_login, { enable:true } );
				#else
				Helper.authGoogleAndGetData( true, function( err, data ) {
					//err1: immediate_failed
					if ( err == null ) {
						Facade.getInstance().sendNotification( ViewController.do_show_auth, {show:false} );
						Facade.getInstance().sendNotification( ModelController.do_save_count, { countMap: data} );
						Facade.getInstance().sendNotification( ModelController.do_load_all_list );
						Facade.getInstance().sendNotification( ViewController.do_show_loading, { show:false } );
						Facade.getInstance().sendNotification( ViewController.do_enable_login, { enable:true } );
					}else {
						Facade.getInstance().sendNotification( ModelController.do_load_all_list );
						Facade.getInstance().sendNotification( ViewController.do_enable_login, { enable:true } );
					}
				});
				#end
			});
		}
		
		function onHtmlClick( type:String, value:Dynamic ) {
			switch( type ) {
				case 'onGapiLoad':
					initApp( value );
			}
		}
		
		Browser.window.setField( 'haxe', {
			onHtmlClick:onHtmlClick
		});
	}
	
}