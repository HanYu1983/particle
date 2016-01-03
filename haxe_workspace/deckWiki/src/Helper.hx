package;
import haxe.Json;

using Lambda;
using Reflect;
using StringTools;
/**
 * ...
 * @author vic
 */
class Helper
{
	static var j:Dynamic = untyped __js__('$');

	public static function createItem( model:Dynamic ) {
		return j('#tmpl_item' ).tmpl( model );
	}
	
	public static function addItemListener( dom:Dynamic ) {
		dom.mouseover( function(e) {
			var dom = j( e.currentTarget );
			dom.addClass( 'focus' );
		});
		dom.mouseout( function(e) {
			var dom = j( e.currentTarget );
			dom.removeClass( 'focus' );
		});
		dom.click( function(e) {
			trace( e );
		});
	}
	
	public static function loadDetail( game:String, cb ) {
		untyped __js__('api.cardInfo')( game, function(err, data) {
			cb( data );
		});
	}
	
	public static function createDetail( game:String, card:Dynamic ) {
		card.url = untyped __js__('api.cardimageurl')( game, card.id );
		if( card.url == null ) {
			card.url = '../common/images/card/cardback_0.png';
		}
		
		var div = j("#tmpl_bigCard").tmpl( card );
		div.find( 'div[game]' ).hide();
		div.find( 'div[game=' + game + ']' ).show();
		div.attr( 'data', Json.stringify( card ));
		return div;
	}
}