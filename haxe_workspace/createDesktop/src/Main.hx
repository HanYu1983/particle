package;

import controller.MainController;
import js.Browser;
import js.Lib;
import org.puremvc.haxe.interfaces.IMediator;
import org.puremvc.haxe.patterns.facade.Facade;
import org.puremvc.haxe.patterns.mediator.Mediator;
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
		
		var info:Dynamic = switch( methodName ) {
			case 'list','together':
				collectInfo( ary_item );
			case 'shuffle':
				doShuffleModel( ary_item );
				{}
			case 'reverse':
				doReverseModel( ary_item );
				{}
			default:
				{}
		}
		trace( info );
		trace( ary_item );
		for ( i in 0...ary_item.length ) {
			var itemModel:Dynamic = ary_item[i];
			var itemMediator:IMediator = Facade.getInstance().retrieveMediator( itemModel.id );
			var item:IItem = cast( itemMediator, IItem );
			
			if ( methodName != 'lock' ) {
				if ( itemModel.lock ) continue;
			}
			switch( methodName ) {
				case 'shuffle','together','reverse':
					var pos_mouse = extra.field('pos_mouse' );
					doTogetherModel( itemModel, i, pos_mouse );
					item.move( itemModel.pos[0], itemModel.pos[1] );
					doZSort( itemMediator.getViewComponent() );
				case 'list':
					var pos_mouse = extra.field('pos_mouse' );
					doListModel( itemModel, i, pos_mouse, info );
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
	
	public static function collectInfo( ary_item:Array<Dynamic> ) {
		var mw = 0.0;
		var mh = 0.0;
		var firstPos = [];
		for ( i in 0...ary_item.length ) {
			if ( i == 0 ) firstPos = ary_item[i].pos.slice();
			mw = Math.max( mw, ary_item[i].width );
			mh = Math.max( mw, ary_item[i].height );
		}
		return { mw:mw, mh:mh, firstPos:firstPos };
	}
	
	public static function doZSort( dom:Dynamic ) {
		dom.appendTo( dom.parent() );
	}
	
	public static function doTogetherModel( itemModel:Dynamic, i:Int, pos_mouse:Array<Int> ) {
		itemModel.pos[0] = i * 2 + pos_mouse[0];
		itemModel.pos[1] = i * 2 + pos_mouse[1];
	}
	
	public static function doListModel( itemModel:Dynamic, i:Int, pos_mouse:Array<Int>, info:Dynamic ) {
		itemModel.pos[0] = i % 10 * ( info.field( 'mw' ) + 4 ) + pos_mouse[0];
		itemModel.pos[1] = Math.floor( i / 10 ) * ( info.field( 'mh' ) + 4 ) + pos_mouse[1];
	}
	
	public static function doShuffleModel( ary_item:Array<Dynamic> ) {
		ary_item.sort( function ( a, b ) {
			return Math.random() > .5 ? 1 : -1;
		});
	}
	
	public static function doReverseModel( ary_item:Array<Dynamic> ) {
		ary_item.reverse();
	}
	
	public static function createItemDiv( type:String, model:Dynamic ) {
		var div:Dynamic = j('#tmpl_' + type ).tmpl( model );
		return div;
	}
	
	public static function createDivId() {
		return untyped __js__('leo.utils.generateUUID')();
	}
}