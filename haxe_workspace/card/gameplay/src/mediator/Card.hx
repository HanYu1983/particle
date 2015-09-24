package mediator;

import model.Model;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;

/**
 * ...
 * @author vic
 */
class Card extends Mediator
{
	public static var card_click = 'card_click';
	public static var card_down = 'card_down';
	public static var card_enter = 'card_enter';
	public static var card_remove = 'card_remove';
	
	var _card:Dynamic;
	var _focus = false;
	var _back = true;
	var _deg = 0;
	var _see = false;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
	}
	
	override public function onRegister():Void 
	{
		getViewComponent().css( 'top', '100px' );
		getViewComponent().css( 'left', '100px' );
		
		sendNotification( card_enter, getViewComponent() );
		
		getViewComponent().click( onCardClick );
		getViewComponent().mousedown( onCardMouseDown );
	}
	
	override public function onRemove():Void 
	{
		super.onRemove();
		
		getViewComponent().off( 'click' );
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 	
					Model.on_state_change,
					Model.on_select_cards,
					Model.on_card_remove
				];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		
		switch( notification.getName() ) {
			case Model.on_card_remove:
				if ( !checkSelf( notification.getBody().select.id ) ) return;
				sendNotification( card_remove, { dom:getViewComponent() } );
			case Model.on_select_cards:
				focusCard( false );
				Lambda.foreach( Lambda.array( notification.getBody().ary_select ), function( dom ) {
					if ( Main.j( dom ).attr( 'id' ) == getMediatorName() ) focusCard();
					return true;
				});
			case Model.on_state_change:
				switch( notification.getType() ) {
					case 'ownerAndRelate_change':
						if ( !checkSelf( notification.getBody().select.id ) ) return;
						_card = notification.getBody().select;
						_back = notification.getBody().select.back;
						rotateAnimation( notification.getBody().select.deg );
						showOnwer( notification.getBody().showOwner );
						showRelate( notification.getBody().showRelate );
						seeCard( notification.getBody().seeCard );
						setView();
					case 'moveCards':
						if ( !checkSelf( notification.getBody().select.id ) ) return;
						moveCard( notification.getBody().select.pos[0], notification.getBody().select.pos[1] );
						if ( notification.getBody().zsort )
							sendNotification( card_enter, getViewComponent() );
					/*
					case 'list':
						if ( !checkSelf( notification.getBody().select.id ) ) return;
						sendNotification( card_enter, getViewComponent() );
						listStack( notification.getBody().mouse, notification.getBody().pos, 2, 2, notification.getBody().count );
					case 'list_separate':
						if ( !checkSelf( notification.getBody().select.id ) ) return;
						listStackSeprate( notification.getBody().mouse, notification.getBody().pos, 55, 80, notification.getBody().count );
					*/
					case 'list_shuffle':
						if ( !checkSelf( notification.getBody().select.id ) ) return;
						sendNotification( card_enter, getViewComponent() );
						listStack( notification.getBody().mouse, notification.getBody().pos, 2, 2, notification.getBody().count );
				}
				/*
			case Model.on_card_flip_change:
				if ( !checkSelf( notification.getBody().select.id ) ) return;
				flip( notification.getBody().select.back );
				*/
		}
	}
	
	function showOnwer( show ) {
		if ( show ) {
			getViewComponent().find( '#img_owner' ).show();
		}else {
			getViewComponent().find( '#img_owner' ).hide();
		}
	}
	
	function showRelate( show ) {
		if ( show ) {
			getViewComponent().find( '#img_relate' ).show();
		}else {
			getViewComponent().find( '#img_relate' ).hide();
		}
	}
	
	function listStack( initpos, pos, x, y, count ) {
		moveCard( initpos[0] + pos * x, initpos[1] - pos * y );
	}
	
	function listStackSeprate( initpos, pos, x, y, count ) {
		moveCard( initpos[0] + ( pos % 10 * x ), initpos[1] + Math.floor( pos / 10 ) * y);
	}
	
	function checkSelf( id ) {
		return ( getMediatorName() == id );
	}
	
	function moveCard( x, y ) {
		
		getViewComponent().animate( {
			left:x,
			top:y
		});
		
	}
	
	function focusCard( ?focus ) {
		if ( focus != null ) {
			_focus = focus;
		}else {
			_focus = !_focus;
		}
		
		if ( _focus ) {
			getViewComponent().addClass( 'card_focus' );
		}else {
			getViewComponent().removeClass( 'card_focus' );
		}
	}
	
	function onCardClick( e ) {
		focusCard();
		
		sendNotification( card_click, { id:getMediatorName(), focus:_focus } );
		Main.changeIndex( getMediatorName() );
		Main.pushCmds( { cmd:'changeIndex', content: { cardId:getMediatorName()} } );
	}
	
	function onCardMouseDown( e ) {
		sendNotification( card_down, { id:getMediatorName() } );
	}
	
	function rotateAnimation( d:Int ) {
		
		Main.j({deg: _deg}).animate({deg: d}, {
        duration: 300,
			step: function(now) {
				rotate( now );
			}
		});
		
		_deg = d;
	}
	
	function rotate( d ) {
		getViewComponent().css({
			'-moz-transform':'rotate('+d+'deg)',
			'-webkit-transform':'rotate('+d+'deg)',
			'-o-transform':'rotate('+d+'deg)',
			'-ms-transform':'rotate('+d+'deg)',
			'transform':'rotate('+d+'deg)'
		}); 
	}
	
	function flip( ?value ) {
		_back = value;
		setView();
	}
	
	function setView() {
		if ( _see ) {
			getViewComponent().find( '.card_back' ).hide();
			_card.showTo = Main.playerId;
		}else{
			if ( _back ) {
				getViewComponent().find( '.card_back' ).show();
				_card.showTo = '';
			}else {
				getViewComponent().find( '.card_back' ).hide();
				_card.showTo = Main.playerId;
			}
		}
		
		if ( _back ) {
			getViewComponent().find( '#img_back' ).show();
		}else {
			getViewComponent().find( '#img_back' ).hide();
		}
	}
	
	function seeCard( see ) {
		_see = see;
		setView();
	}
	
	function setState( state ) {
		getViewComponent().find( '#txt_state' ).html( state );
	}
}