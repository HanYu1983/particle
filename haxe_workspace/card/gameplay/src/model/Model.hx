package model;

import js.html.KeyboardEvent;
import js.html.MouseEvent;
import js.html.MouseEventInit;
import mediator.UI;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;
using Reflect;
/**
 * ...
 * @author vic
 */
class Model extends Mediator
{
	var currentDeckId = 0;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [
				UI.on_combo_deck_change,
				Main.on_createDeck_click
				];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case Main.on_createDeck_click:
				Main.createSelfDeck( currentDeckId );
			case UI.on_combo_deck_change:
				currentDeckId = notification.getBody().deckId;
		}
	}
}