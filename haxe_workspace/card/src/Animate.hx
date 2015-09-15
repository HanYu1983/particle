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
	public static function addCardAndPrepare( cards:Array<Dynamic> ):Dynamic {
		return function() {
			var d:Dynamic = Main.j.Deferred();	
			Main.ary_cards = Main.ary_cards.concat( cards );
			Lambda.foreach( Main.ary_cards, function( card ) {
				Main.createCard( card );
				return true;
			});
			
			trace( Main.ary_cards );
			Lambda.foreach( cards, function( card ) {
				Facade.getInstance().sendNotification( Model.on_state_change, { select:card, showOwner:Main.playerId == card.owner, seeCard: card.owner == card.relate }, 'owner_change' );
				Facade.getInstance().sendNotification( Model.on_state_change, { select:card, showRelate:Main.playerId == card.relate, seeCard: card.owner == card.relate }, 'relate_change' );
				return true;
			});
			
			Timer.delay( function() {
				d.resolve();
			}, 1000 );
			
			return d;
		}
	}
	
	public static function flip( ary_select ) {
		return function(){
			var d:Dynamic = Main.j.Deferred();
			Main.flip( ary_select );
			Timer.delay( function() {
				d.resolve();
			}, 200 );
			return d;
		}
	}
	
	public static function list( ary_select, pos_mouse ) {
		return function(){
			var d:Dynamic = Main.j.Deferred();
			Main.listCard( ary_select, pos_mouse );
			Timer.delay( function() {
				d.resolve();
			}, 1000 );
			return d;
		}
	}
	
	public static function listSeparate( ary_select, pos_mouse ) {
		return function(){
			var d:Dynamic = Main.j.Deferred();
			Main.listSeparate( ary_select, pos_mouse );
			Timer.delay( function() {
				d.resolve();
			}, 1000 );
			return d;
		}
	}
}