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
	var mc_light:Dynamic;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
		getViewComponent().layout();
		
		mc_detailContainer = getViewComponent().find( '#mc_detailContainer' );
		
		combo_deck = getViewComponent().find( '#combo_deck' );
		combo_ops = getViewComponent().find( '#combo_ops' );
		mc_light = getViewComponent().find( '#mc_light' );
		
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
					Main.on_searchComplete,
					Main.on_heartbeat_event,
					Main.on_createDeck_click
				];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case Main.on_createDeck_click:
				closeNorthPanel();
			case Main.on_heartbeat_event:
				showOnlineOffline( notification.getBody().conn );
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
	
	function showOnlineOffline( show:Bool ) {
		if ( show ) {
			mc_light.css( 'background-color', 'green' );
		}else {
			mc_light.css( 'background-color', 'red' );
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
	
	function closeNorthPanel() {
		getViewComponent().layout( 'collapse', 'north' );
	}
	
	function showCard( card ) {
		if ( card == null ) return;
		if ( card.showTo == Main.playerId ) {
			var url = Main.getCardImageUrlWithPackage( card.game, card.cardId );
			var div = Main.j( '<div></div>' );
			div.css( 'position', 'relative' );
			
			var img = Main.j( '<img></img>' );
			img.attr( 'src', url );
			img.css( 'position', 'relative' );
			img.css( 'top', '0' );
			img.css( 'left', '0' );
			img.load( function() {
				img.css( 'width', '100%' );
			});
			div.append( img );
			
			
			var img2 = Main.j( '<img></img>' );
			img2.attr( 'src', 'images/sampleTxt.png' );
			img2.css( 'position', 'absolute' );
			img2.load( function() {
				img2.css( 'width', '100%' );
				img2.css( 'top', '0' );
				img2.css( 'left', '0' );
			});
			div.append( img2 );
			
			var detail = Main.getCardDetailById( card.game, card.cardId );
			if ( detail != null ) {
				var detaildiv:Dynamic = Main.j( '<div></div>' );
				detaildiv.css( 'position', 'relative' );
				detaildiv.css( 'width', '100%' );
				detaildiv.css( 'top', '0' );
				detaildiv.css( 'left', '0' );
				detaildiv.css( 'font-size', '16px' );
				var str:String = '';
				switch( card.game ) {
					case 'dragonZ':
						str += detail.id;
						str += '<br/>';
						str += detail.name;
						str += '<br/>';
						str += detail.type;
						str += '<br/>';
						str += detail.descrition;
					case 'crusade':
						str += detail.info_2;
						str += '<br/>';
						str += detail.info_4;
						str += '<br/>';
						str += detail.info_16;
					case 'gundamWar':
						str += detail.name;
						str += '<br/>';
						str += detail.context;
					case 'magic':
						str += detail.id;
						str += '<br/>';
						str += detail.text;
					case 'battleSpirits':
						str += detail.info_41 + ' ' + detail.info_2;
						str += '<br/>';
						str += detail.info_5 + ' ' + detail.info_25 + ' ' + detail.info_3;
						str += '<br/>';
						str += detail.info_7 + ' ' + detail.info_8;
						str += '<br/>';
						str += detail.info_9 + ' ' + detail.info_10;
						str += '<br/>';
						str += detail.info_11 + ' ' + detail.info_12;
						str += '<br/>';
						str += detail.info_42;
					case 'sangoWar': 
						str += detail.cname + ' ' + detail.atype;
						str += '<br/>';
						str += detail.content;
						str += '<br/>';
						str += detail.counter;
					case 'yugioh': 
						str += detail.name;
						str += '<br/>';
						str += detail.level;
						str += '<br/>';
						str += detail.type;
						str += '<br/>';
						str += detail.desc;
				}
				detaildiv.html( str );
				div.append( detaildiv );
			}
			
			mc_detailContainer.append( div );
			/*
			var img = Main.j( '<img></img>' );
			img.attr( 'src', url );
			img.load( function() {
				img.css( 'width', '100%' );
			});
			mc_detailContainer.append( img );
			*/
		}
	}
}