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
	
	var _focus = false;
	var _back = false;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
	}
	
	override public function onRegister():Void 
	{
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
					Model.on_card_flip_change,
					Model.on_state_change,
					Model.on_select_cards
				];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		
		switch( notification.getName() ) {
			case Model.on_select_cards:
				focusCard( false );
				Lambda.foreach( Lambda.array( notification.getBody().ary_select ), function( dom ) {
					if ( Main.j( dom ).attr( 'id' ) == getMediatorName() ) focusCard();
					return true;
				});
			case Model.on_state_change:
				switch( notification.getType() ) {
					case 'owner_change':
						if ( !checkSelf( notification.getBody().select.id ) ) return;
						showOnwer( notification.getBody().showOwner );
					case 'relate_change':
						if ( !checkSelf( notification.getBody().select.id ) ) return;
						showRelate( notification.getBody().showRelate );
					case 'list':
						if ( !checkSelf( notification.getBody().select.id ) ) return;
						sendNotification( card_enter, getViewComponent() );
						listStack( notification.getBody().mouse, notification.getBody().pos, 2, 2, notification.getBody().count );
					case 'list_separate':
						if ( !checkSelf( notification.getBody().select.id ) ) return;
						listStackSeprate( notification.getBody().mouse, notification.getBody().pos, 100, 100, notification.getBody().count );
					case 'list_shuffle':
						if ( !checkSelf( notification.getBody().select.id ) ) return;
						sendNotification( card_enter, getViewComponent() );
						listStack( notification.getBody().mouse, notification.getBody().pos, 2, 2, notification.getBody().count );
				}
				
			case Model.on_card_flip_change:
				if ( notification.getType() == 'all' ) {
					if ( _focus ) {
						flip();
					}
				}else {
					if ( notification.getBody().id != getMediatorName() ) return;
					flip( notification.getBody().flip );
				}
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
		sendNotification( card_enter, getViewComponent() );
	}
	
	function onCardMouseDown( e ) {
		sendNotification( card_down, { id:getMediatorName() } );
	}
	
	function flip( ?value ) {
		if ( value != null ) {
			_back = value;
		}else {
			_back = !_back;
		}
		setView();
	}
	
	function setView() {
		if ( _back ) {
			getViewComponent().find( '.card_back' ).show();
		}else {
			getViewComponent().find( '.card_back' ).hide();
		}
	}
	
	function setState( state ) {
		getViewComponent().find( '#txt_state' ).html( state );
	}
}