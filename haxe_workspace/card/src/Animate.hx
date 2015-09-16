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
			
			Main.applyValue( cards );
			
			Timer.delay( function() {
				d.resolve();
			}, 0 );
			
			return d;
		}
	}
	
	public static function setOwner( ary_select ) {
		return function(){
			var d:Dynamic = Main.j.Deferred();
			Main.applyValue( ary_select );
			Timer.delay( function() {
				d.resolve();
			}, 200 );
			return d;
		}
	}
	
	public static function setRelate( ary_select ) {
		return function(){
			var d:Dynamic = Main.j.Deferred();
			Main.applyValue( ary_select );
			Timer.delay( function() {
				d.resolve();
			}, 200 );
			return d;
		}
	}
	
	public static function flip( ary_select ) {
		return function(){
			var d:Dynamic = Main.j.Deferred();
			Main.applyValue( ary_select );
			Timer.delay( function() {
				d.resolve();
			}, 200 );
			return d;
		}
	}
	
	public static function rotate( ary_select, d ) {
		return function(){
			var d:Dynamic = Main.j.Deferred();
			Main.rotate( ary_select );
			Timer.delay( function() {
				d.resolve();
			}, 300 );
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
	
	public static function moveCards( ary_select, pos_mouse ) {
		return function(){
			var d:Dynamic = Main.j.Deferred();
			Main.moveCards( ary_select, pos_mouse );
			Timer.delay( function() {
				d.resolve();
			}, 1000 );
			return d;
		}
	}
	
	public static function shuffle( ary_select, pos_mouse ) {
		return function(){
			var d:Dynamic = Main.j.Deferred();
			Main.listCard( ary_select, pos_mouse );
		//	Main.shuffle( ary_select, pos_mouse );
			Timer.delay( function() {
				d.resolve();
			}, 1000 );
			return d;
		}
	}
	
	
}