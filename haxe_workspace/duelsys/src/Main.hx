package;

import js.Lib;
import model.DataMediator;
import org.puremvc.haxe.patterns.facade.Facade;
import per.vic.js.Jslib;
import view.UIMediator;

/**
 * ...
 * @author vic
 */
class Main 
{
	
	static function main()
	{
		Jslib.j( 'body' ).ready( function() {
			Facade.getInstance().registerMediator( new UIMediator( '', Jslib.j( '#layout_main' )) );
			Facade.getInstance().registerMediator( new DataMediator() );
			
			Facade.getInstance().sendNotification( DataMediator.do_get_duelContext );
		});
		
	}
	
}