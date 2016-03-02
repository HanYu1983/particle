package;

import js.Lib;
import org.puremvc.haxe.patterns.facade.Facade;
import per.vic.js.Jslib;
import view.UI;

/**
 * ...
 * @author vic
 */
class Main 
{
	
	static function main()
	{
		Jslib.j( 'body' ).ready( function() {
			Facade.getInstance().registerMediator( new UI( '', Jslib.j( '#layout_main' )) );
			
			Helper.talk( Talk.duelContext, function( ret:Dynamic ) {
				Facade.getInstance().sendNotification( UI.do_setRaces, ret );
				
			});
		});
		
		
	}
	
}