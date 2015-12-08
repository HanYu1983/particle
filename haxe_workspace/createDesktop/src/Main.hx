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
	
	public static var playerId:String = 'vic';
	
	static function main() 
	{
		Browser.document.addEventListener("contextmenu", function(e){
			e.preventDefault();
		}, false);
		
		Facade.getInstance().registerMediator( new MainController( '', j( '#container_cards' ) ) );
		Facade.getInstance().sendNotification( MainController.create_item, { }, 'card' );
		Facade.getInstance().sendNotification( MainController.create_item, { }, 'card' );
		Facade.getInstance().sendNotification( MainController.create_item, { }, 'card' );
		Facade.getInstance().sendNotification( MainController.create_item, { }, 'card' );
		Facade.getInstance().sendNotification( MainController.create_item, { }, 'card' );
		Facade.getInstance().sendNotification( MainController.create_item, { }, 'card' );
		Facade.getInstance().sendNotification( MainController.create_item, { }, 'card' );
		Facade.getInstance().sendNotification( MainController.create_item, { }, 'card' );
		Facade.getInstance().sendNotification( MainController.create_item, { }, 'map' );
	}
	
	public static function doAction( methodName:String, ary_item:Array<Dynamic>, ?extra:Dynamic ) {
		
		var info = switch( methodName ) {
			case 'list','together':
				var mw = 0.0;
				var mh = 0.0;
				var firstPos = [];
				for ( i in 0...ary_item.length ) {
					if ( i == 0 ) firstPos = ary_item[i].pos.slice();
					mw = Math.max( mw, ary_item[i].width );
					mh = Math.max( mw, ary_item[i].height );
				}
				{ mw:mw, mh:mh, firstPos:firstPos }
			default:
				{}
		}
		trace( info );
		for ( i in 0...ary_item.length ) {
			var itemModel:Dynamic = ary_item[i];
			var item:IItem = cast( Facade.getInstance().retrieveMediator( itemModel.id ), IItem );
			if ( methodName != 'lock' ) {
				if ( itemModel.lock ) continue;
			}
			switch( methodName ) {
				case 'together':
					var pos_mouse = extra.field('pos_mouse' );
					itemModel.pos[0] = i * 2 + pos_mouse[0];
					itemModel.pos[1] = i * 2 + pos_mouse[1];
					item.move( itemModel.pos[0], itemModel.pos[1] );
				case 'list':
					var pos_mouse = extra.field('pos_mouse' );
					itemModel.pos[0] = i % 10 * ( info.field( 'mw' ) + 4 ) + pos_mouse[0];
					itemModel.pos[1] = Math.floor( i / 10 ) * ( info.field( 'mh' ) + 4 ) + pos_mouse[1];
					item.move( itemModel.pos[0], itemModel.pos[1] );
				case 'setViewer':
					if ( itemModel.viewer == playerId ) {
						itemModel.viewer = '';
					}else {
						itemModel.viewer = playerId;
					}
					item.setViewer( itemModel.viewer == playerId );
				case 'setOwner':
					trace( itemModel.owner );
					if ( itemModel.owner == playerId ) {
						itemModel.owner = '';
					}else {
						itemModel.owner = playerId;
					}
					item.setOwner( itemModel.owner == playerId );
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