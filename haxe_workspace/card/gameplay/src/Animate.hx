package;
import haxe.Timer;
import model.Model;
import org.puremvc.haxe.patterns.facade.Facade;

/**
 * ...
 * @author vic
 */
class Animate
{
	public static function addCardAndPrepare( cards:Array<Dynamic> ):Void {
		Main.ary_cards = Main.ary_cards.concat( cards );
		Lambda.foreach( Main.ary_cards, function( card ) {
			Main.createCard( card );
			return true;
		});
		
		Main.applyValue( cards, false );
	}
}