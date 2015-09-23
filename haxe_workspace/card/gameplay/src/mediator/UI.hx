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
	public static var on_combo_deck_change = 'on_combo_deck_change';
	
	var mc_detailContainer:Dynamic;
	var combo_deck:Dynamic;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
		mc_detailContainer = getViewComponent().find( '#mc_detailContainer' );
		combo_deck = getViewComponent().find( '#combo_deck' );
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 	Model.on_select_cards, 
					Model.on_state_change,
					Main.on_getSuit_success
				];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case Model.on_select_cards:
				showCards( notification.getBody().ary_select );
			case Model.on_state_change:
				mc_detailContainer.empty();
				Timer.delay( function(){
					showCard( notification.getBody().select );
				}, 10 );
			case Main.on_getSuit_success:
				createComboDeck( notification.getBody().cardSuit );
		}
	}
	
	function createComboDeck( cardSuit ) {
		var i = 0;
		combo_deck.empty();
		Lambda.foreach( cardSuit, function( deck ) {
			combo_deck.append( '<option value="' + i++ + '">' + deck.name + '</option>' );
			return true;
		});
		combo_deck.combobox( {
			onSelect:function( record ) {
				sendNotification( on_combo_deck_change, { deckId: record.value } );
			}
		});
		combo_deck.combobox('textbox').prop('placeholder', '選擇套牌');
		combo_deck.combobox( 'setValue', 0 );
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