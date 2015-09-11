package;
import haxe.Timer;

/**
 * ...
 * @author vic
 */
class Animate
{
	public static function addCards( cards ) {
		return function(){
			var d:Dynamic = Main.j.Deferred();
			Lambda.foreach( cards, function( card ) {
				Main.createCard( card.id );
				return true;
			});
			Timer.delay( function() {
				d.resolve();
			}, 1000 );
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