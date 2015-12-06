package;

import controller.MainController;
import js.Browser;
import js.Lib;
import org.puremvc.haxe.patterns.facade.Facade;
import view.CardItem;
import view.IItem;

using Lambda;
using Reflect;
/**
 * ...
 * @author vic
 */
class Main 
{
	public static var j:Dynamic = untyped __js__( '$' );
	
	static function main() 
	{
		Browser.document.addEventListener("contextmenu", function(e){
			e.preventDefault();
		}, false);
		
		Facade.getInstance().registerMediator( new MainController( '', j( 'body' ) ) );
		Facade.getInstance().sendNotification( MainController.create_item, { }, 'card' );
		Facade.getInstance().sendNotification( MainController.create_item, { }, 'map' );
	}
	
	public static function doAction( methodName:String, ary_item:Array<Dynamic>, ?extra:Array<Int> ) {
		for ( i in 0...ary_item.length ) {
			var itemModel:Dynamic = ary_item[i];
			
			if ( methodName != 'lock' ) {
				if ( itemModel.lock ) return;
			}
			
			var item:IItem = cast( Facade.getInstance().retrieveMediator( itemModel.id ), IItem );
			switch( methodName ) {
				case 'move':
					item.move( itemModel.pos[0], itemModel.pos[1] );
				case 'flip': 
					itemModel.back = !itemModel.back;
					item.flip( itemModel.back );
				case 'rotateForward':
					var td = Math.floor( itemModel.deg + 90 );
					item.rotateForward( itemModel.deg, td );
					itemModel.deg = td;
				case 'rotateBackward':
					var td = Math.floor( itemModel.deg - 90 );
					item.rotateForward( itemModel.deg, td );
					itemModel.deg = td;
				case 'lock':
					itemModel.lock = !itemModel.lock;
					item.lock( itemModel.lock );
			}
			
		}
	}
	
	public static function createItemDiv( type:String, model:Dynamic ) {
		var div:Dynamic = j('#tmpl_' + type ).tmpl( model );
		return div;
	}
	
	public static function createDivId() {
		return untyped __js__('leo.utils.generateUUID')();
	}
}