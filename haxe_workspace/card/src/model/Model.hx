package model;

import js.html.KeyboardEvent;
import mediator.Card;
import mediator.Layer;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;

/**
 * ...
 * @author vic
 */
class Model extends Mediator
{
	public static var on_card_enter = 'on_card_enter';
	public static var on_card_move = 'on_card_move';
	public static var on_state_change = 'on_state_change';
	public static var on_select_cards = 'on_model_select_cards';
	
	var ary_select:Array<Dynamic> = [];
	var isSeperate = false;
	var isBack = true;
	var pos_mouse = [0, 0];

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [Card.card_click, 
				Card.card_enter, 
				Layer.on_layout_mouse_up, 
				Layer.on_press,
				Layer.on_body_mousemove,
				Layer.on_select_cards
				];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case Layer.on_select_cards:
				var ori = notification.getBody().ary_select;
				
				ori.sort( function( a, b ) {
					var ax = Std.parseInt( StringTools.replace( Main.j( a ).css( 'left' ), 'px', '' ));
					var ay = Std.parseInt( StringTools.replace( Main.j( a ).css( 'top' ), 'px', '' ));
					var bx = Std.parseInt( StringTools.replace( Main.j( b ).css( 'left' ), 'px', '' ));
					var by = Std.parseInt( StringTools.replace( Main.j( b ).css( 'top' ), 'px', '' ));
					
					if ( bx < ax ) {
						return 1;
					}
					return -1;
				});
				
				ori.sort( function( a, b ) {
					var ax = Std.parseInt( StringTools.replace( Main.j( a ).css( 'left' ), 'px', '' ));
					var ay = Std.parseInt( StringTools.replace( Main.j( a ).css( 'top' ), 'px', '' ));
					var bx = Std.parseInt( StringTools.replace( Main.j( b ).css( 'left' ), 'px', '' ));
					var by = Std.parseInt( StringTools.replace( Main.j( b ).css( 'top' ), 'px', '' ));
					
					if ( by < ay ) {
						return 1;
					}
					return -1;
				});
				
				ary_select = Lambda.fold( ori, function( dom, curr:Array<Dynamic> ) {
					curr.push( Main.getCardsById( Main.j( dom ).attr( 'id' ) ) );
					return curr;
				}, [] );
				
				sendNotification( on_select_cards, { ary_select:ary_select } );
			case Layer.on_press:
				switch( notification.getType() ) {
					case KeyboardEvent.DOM_VK_G:
						Main.sendAllMessage();
					case KeyboardEvent.DOM_VK_H:
						Main.pollAllMessage();
					case KeyboardEvent.DOM_VK_C:
						if ( Main.setOwner( ary_select ) ) 
							Main.pushCmds( { cmd:'setOwner', content:{ ary_select:ary_select.slice( 0 ) } } );
					case KeyboardEvent.DOM_VK_V:
						if ( Main.setRelate( ary_select ) )
							Main.pushCmds( { cmd:'setRelate', content:{ ary_select:ary_select.slice( 0 ) } } );
					case KeyboardEvent.DOM_VK_Z:
						Main.rotate( ary_select, -90 );
						Main.pushCmds( { cmd:'rotate', content: { ary_select:ary_select.slice( 0 ), deg:-90 } } );
					case KeyboardEvent.DOM_VK_X:
						Main.rotate( ary_select, 90 );
						Main.pushCmds( { cmd:'rotate', content: { ary_select:ary_select.slice( 0 ), deg:90 } } );
					case KeyboardEvent.DOM_VK_Q:
						doListShuffle();
					case KeyboardEvent.DOM_VK_W:
						doListReverse();
					case KeyboardEvent.DOM_VK_E:
					case KeyboardEvent.DOM_VK_R:
					case KeyboardEvent.DOM_VK_A:
						doMoveCards();
					case KeyboardEvent.DOM_VK_S:
						if ( isSeperate ) {
							doList();
						}else {
							doListSeperate();	
						}
						isSeperate = !isSeperate;
					case KeyboardEvent.DOM_VK_D:
						ary_select = Lambda.array( Lambda.filter( Main.ary_cards, function( card:Dynamic ) {
							return ( card.owner == Main.playerId );
						}));
						sendNotification( on_select_cards, { ary_select:ary_select } );
					case KeyboardEvent.DOM_VK_F:
						doFlip();
					case KeyboardEvent.DOM_VK_SPACE:
				}
			case Layer.on_body_mousemove:
				pos_mouse[0] = notification.getBody().x;
				pos_mouse[1] = notification.getBody().y;
			case Card.card_enter:
				sendNotification( on_card_enter, notification.getBody() );
			case Card.card_click:
				if ( notification.getBody().focus ) {
					ary_select = [ Main.getCardsById( notification.getBody().id ) ];
				}else {
					ary_select = [];
				}
				sendNotification( on_select_cards, { ary_select:ary_select.slice( 0 ) } );
			case Layer.on_layout_mouse_up:
				sendNotification( on_card_move, notification.getBody() );
		}
	}
	
	function listCard() {
		Lambda.foreach( ary_select, function( select ) {
			var cardIndex = Lambda.indexOf( ary_select, select );
			select.pos[0] = ( pos_mouse[0] + cardIndex * 2 );
			select.pos[1] = ( pos_mouse[1] + cardIndex * 2 );
			return true;
		});
	}
	
	function listSeperate(){
		Lambda.foreach( ary_select, function( select ) {
			var cardIndex = Lambda.indexOf( ary_select, select );
			select.pos[0] = pos_mouse[0] + ( cardIndex % 10 * 55 );
			select.pos[1] = pos_mouse[1] + Math.floor( cardIndex / 10 ) * 80;
			return true;
		});
	}
	
	function doFlip() {
		if ( ary_select.length > 1 ) {
			isBack = !isBack;	
			Lambda.foreach( ary_select, function( card ) {
				//當owner是自己或者沒有所屬的時候，才能翻牌
				if ( card.owner == Main.playerId || card.owner == '' ) {
					card.back = isBack;
				}
				return true;
			});
		}else {
			var card = ary_select[0];
			if ( card.owner == Main.playerId || card.owner == '' ) {
				card.back = !card.back;
			}
		}
		Main.applyValue( ary_select );
		Main.pushCmds( { cmd:'flip', content:{ ary_select:deepCopy( ary_select ) } } );
	}
	
	function doList() {
		listCard();
		Main.moveCards( ary_select, pos_mouse, true );
		Main.pushCmds( { cmd:'listCard', content:{ ary_select:deepCopy( ary_select ), pos_mouse:pos_mouse.slice( 0 ) } } );
	}
	
	function doListSeperate() {
		listSeperate();
		Main.moveCards( ary_select, pos_mouse, false );
		Main.pushCmds( { cmd:'listSeparate', content:{ ary_select:deepCopy( ary_select ), pos_mouse:pos_mouse.slice( 0 ) } } );
	}
	
	function doListReverse() {
		ary_select.reverse();
		listCard();
		Main.moveCards( ary_select, pos_mouse, true );
		Main.pushCmds( { cmd:'listCardReverse', content:{ ary_select:deepCopy( ary_select ), pos_mouse:pos_mouse.slice( 0 ) } } );
	}
	
	function doSeperateReverse() {
		ary_select.reverse();
		listSeperate();
		Main.moveCards( ary_select, pos_mouse, false );
		Main.pushCmds( { cmd:'listSeparateReverse', content:{ ary_select:deepCopy( ary_select ), pos_mouse:pos_mouse.slice( 0 ) } } );
	}
	
	function doListShuffle() {
		ary_select.sort( function ( a, b ) {
			return Math.random() > .5 ? 1 : -1;
		});
		listCard();
		Main.moveCards( ary_select, pos_mouse, true );
		Main.pushCmds( { cmd:'shuffle', content: { ary_select:deepCopy( ary_select ), pos_mouse:pos_mouse.slice( 0 ) } } );
	}
	
	function doSeperateShuffle() {
		ary_select.sort( function ( a, b ) {
			return Math.random() > .5 ? 1 : -1;
		});
		listSeperate();
		Main.moveCards( ary_select, pos_mouse, false );
		Main.pushCmds( { cmd:'shuffleSeparate', content: { ary_select:deepCopy( ary_select ), pos_mouse:pos_mouse.slice( 0 ) } } );
	}
	
	function doMoveCards() {
		var offset = [
			pos_mouse[0] - ary_select[0].pos[0],
			pos_mouse[1] - ary_select[0].pos[1]
		];
		Lambda.foreach( ary_select, function( select ) {
			select.pos[0] += offset[0];
			select.pos[1] += offset[1];
			return true;
		});
		Main.moveCards( ary_select, pos_mouse, false );
		Main.pushCmds( { cmd:'moveCards', content:{ ary_select:deepCopy( ary_select ), pos_mouse:pos_mouse.slice( 0 ) } } );
	}
	
	//沒有同步的原因是因為每個card物件沒有被深復制，所以移動了好幾次。pos永遠都會抓到最新的。這邊用深復制，才可以存下當時的資訊
	function deepCopy( ary_select ) {
		return Lambda.array( Lambda.map( ary_select, function( card ) {
			return {
				id: card.id, 
				cardId: card.cardId , 
				name: card.name, 
				owner: card.owner, 
				relate: card.relate, 
				deg: card.deg, 
				pos: [card.pos[0], card.pos[1]], 
				back: card.back,
				showTo: card.showTo
			}
		}));
	}
}