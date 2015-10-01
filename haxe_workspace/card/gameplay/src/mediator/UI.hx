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
	//public static var on_op_change = 'on_op_change';
	
	var mc_detailContainer:Dynamic;
	var combo_deck:Dynamic;
	var combo_ops:Dynamic;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
		mc_detailContainer = getViewComponent().find( '#mc_detailContainer' );
		combo_deck = getViewComponent().find( '#combo_deck' );
		combo_ops = getViewComponent().find( '#combo_ops' );
		combo_ops.combobox( {
			onChange:function( nv, ov ) {
				Main.selectOps( nv );
			}
		});
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 	Model.on_select_cards, 
					Model.on_state_change,
					Main.on_getSuit_success,
					Main.on_receiveOps,
					Main.on_searchComplete
				];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case Main.on_searchComplete:
				disabledOpponent();
			case Main.on_receiveOps:
				var ary_ops = notification.getBody().ary_ops;
				setComboOps( ary_ops );
				combo_ops.combobox( 'select', ary_ops[ary_ops.length -1] );
			case Model.on_select_cards:
				showCards( notification.getBody().ary_select );
			case Model.on_state_change:
				var notify = notification.getBody().notify;
				if ( !notify ) return;
				mc_detailContainer.empty();
				Timer.delay( function(){
					showCard( notification.getBody().select );
				}, 10 );
			case Main.on_getSuit_success:
				createComboDeck( notification.getBody().cardSuit );
		}
	}
	
	function disabledOpponent() {
		combo_ops.combobox( 'disable' );
	}
	
	function setComboOps( ary_ops:Array<String> ) {
		combo_ops.empty();
		Lambda.foreach( ary_ops, function( str ) {
			combo_ops.append( '<option value="' + str + '">' + str + '</option>' );
			return true;
		});
		combo_ops.combobox();
	}
	
	function createComboDeck( cardSuit ) {
		if ( cardSuit.length == 0 ) {
			combo_deck.empty();
			combo_deck.append( '<option></option>' );
			combo_deck.combobox();
			return;
		}
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
		if ( card == null ) return;
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