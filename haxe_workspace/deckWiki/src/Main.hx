package;

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
		
		Helper.initFb( function() {
			Facade.getInstance().sendNotification( ModelController.do_load_all_list );
			Facade.getInstance().sendNotification( ViewController.do_show_loading, { show:false } );
			Facade.getInstance().sendNotification( ViewController.do_enable_login, { enable:true } );
		});
		
	}
	
}