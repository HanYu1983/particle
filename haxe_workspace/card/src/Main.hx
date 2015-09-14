package;

import haxe.Timer;
import js.Browser;
import js.html.NotifyPaintEvent;
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
	
	static var tmpl_card:Dynamic = j( '#tmpl_card' );
	
	function new() {
		
		Facade.getInstance().registerMediator( new Model( 'model' ));
		Facade.getInstance().registerMediator( new Layer( 'layer', { body:j(Browser.document.body),container_cards:j( '#container_cards' ) } ));
		 
		var cards = [for ( i in 0...30 ) { id:getId() } ];
		
		//Animate.addCards( cards )().pipe( Animate.list( cards.slice(0, 15), [200, 200] )).pipe( Animate.listSeparate( cards.slice(0, 7), [300, 300] ));
		Animate.addCards( cards )();
	}
	
	public static function createCard( id ) {
		Facade.getInstance().registerMediator( new Card( id, tmpl_card.tmpl( { id:id } ) ));
	}
	
	public static function listCard( ary_select:Dynamic, pos_mouse ) {
		Lambda.foreach( ary_select, function( select ) {
			Facade.getInstance().sendNotification( Model.on_state_change, { select:select, mouse:pos_mouse, pos:Lambda.indexOf( ary_select, select ), count:ary_select.length  }, 'list' );
			return true;
		});
	}
	
	public static function listSeparate( ary_select:Dynamic, pos_mouse ) {
		Lambda.foreach( ary_select, function( select ) {
			Facade.getInstance().sendNotification( Model.on_state_change, { select:select, mouse:pos_mouse, pos:Lambda.indexOf( ary_select, select ), count:ary_select.length  }, 'list_separate' );
			return true;
		});
	}
	
	static function main() 
	{
		new Main();
	}
	
	static var id = 0;
	static function getId() {	
		return id++ + '';
		//return untyped __js__('leo.utils.generateUUID')();
	}
}
/*
 * 
owner[ id:string ]: 設定owner是誰(一開始就會自動設定。icon: 人頭)
持有者[ id:string or '' ]: (icon: 手)
	當持有者id等於owner的時候，蓋著時也能看見。
	只要持有者id等於''的話，每個人都可以設為自己。
	只要持有者id不等於''的話，只那個那個id的人可以設置持有者(只能設為空白或自己)
open or close:
*/