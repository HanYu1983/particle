package;

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
		
		Helper.loadList( function( err, data:Array<Dynamic> ) {
			trace( data );
			Facade.getInstance().sendNotification( ModelController.do_save_data, { data:data } );
		});
		/*
		Helper.loadDetail( 'sgs', function( data:Dynamic ) {
			var dom = Helper.createDetail( 'sgs', data[0] );
			j( '#mc_bigItemContainer' ).append( dom );
		});
		*/
	}
	
	function onHtmlClick() {
		//ga
	}
	
	public static function click() {
		//dddddd
	}
}