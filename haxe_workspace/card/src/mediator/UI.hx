package mediator;

import haxe.Timer;
import js.html.Image;
import model.Model;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;

/**
 * ...
 * @author vic
 */
class UI extends Mediator
{
	var mc_detailContainer:Dynamic;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
		mc_detailContainer = getViewComponent().find( '#mc_detailContainer' );
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ Model.on_select_cards, Model.on_state_change ];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case Model.on_select_cards:
				showCards( notification.getBody().ary_select );
			case Model.on_state_change:
				trace( notification.getBody().ary_select );
				mc_detailContainer.empty();
				Timer.delay( function(){
					showCard( notification.getBody().select );
				}, 10 );
		}
	}
	
	function showCards( ary_select:Array<Dynamic> ) {
		if ( ary_select == null ) return;
		mc_detailContainer.empty();
		Lambda.foreach( ary_select, function( card:Dynamic ) {
			showCard( card );
			return true;
		});
	}
	
	function showCard( card ) {
		if ( card.showTo == Main.playerId ) {
			var url = Main.getCardImageUrlWithPackage( Main.cardPackage, card.cardId );
			var img = Main.j( '<img></img>' );
			img.attr( 'src', url );
			img.load( function() {
				img.css( 'width', '100%' );
			});
			mc_detailContainer.append( img );
		}
	}
}