package;

import js.Browser;
import mediator.Card;
import js.Lib;
import mediator.Layer;
import model.Model;
import org.puremvc.haxe.patterns.facade.Facade;

/**
 * ...
 * @author vic
 */
class Main 
{
	public static var j:Dynamic = untyped __js__('$');
	
	var tmpl_card:Dynamic;
	
	function new() {
		tmpl_card = j( '#tmpl_card' );
		
		Facade.getInstance().registerMediator( new Model( 'model' ));
		Facade.getInstance().registerMediator( new Layer( 'layer', { body:j(Browser.document.body),container_cards:j( '#container_cards' ) } ));
		
		createCard( getId() );
		createCard( getId() );
	}
	
	function createCard( id ) {
		Facade.getInstance().registerMediator( new Card( id, tmpl_card.tmpl( { id:id } ) ));
	}
	
	static function main() 
	{
		new Main();
	}
	
	static function getId() {	
		return untyped __js__('leo.utils.generateUUID')();
	}
}