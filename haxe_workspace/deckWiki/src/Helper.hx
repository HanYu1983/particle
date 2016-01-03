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
	
	public static function createDetail( game, card:Dynamic ) {
		card.url = untyped __js__('gameController.getCardUrl')( game, card );
		if( card.url == null ) {
			card.url = 'images/cardback.png';
		}
		
		var div = j("#tmpl_bigCard").tmpl( card );
		div.find( 'div[game]' ).hide();
		div.find( 'div[game=' + game + ']' ).show();
		div.attr( 'data', Json.stringify( card ));
		return div;
		
		/*
		_.each( showCards, function( card ){
			card.url = gameController.getCardUrl( game, card );
			if( card.url == undefined ) {
				card.url = 'images/cardback.png';
			}
			
			var div = $("#tmpl_bigCard").tmpl( card );
			div.find( 'div[game]' ).hide();
			div.find( 'div[game=' + game + ']' ).show();
			div.attr( 'data', JSON.stringify( card ));
			div.click( function(){
				var thisDom = $(this);
				outFocusAll();
				thisDom.addClass( 'big_card_root_focus' );
				pushToDeck( JSON.parse( thisDom.attr( 'data' ) ));
			});
			mc_bigCardContainer.append( div );
		});
		*/
	}
}