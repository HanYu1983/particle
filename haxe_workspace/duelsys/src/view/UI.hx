package view;

import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;
import per.vic.js.Jslib;

using Lambda;
using Reflect;
using StringTools;
/**
 * ...
 * @author vic
 */
class UI extends Mediator
{
	public static var do_setRaces = 'do_setRaces';
	
	var mc_raceContainer:Dynamic;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
	
		mc_raceContainer = viewComponent.find( '#mc_raceContainer' );
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ do_setRaces ];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case str if ( str == do_setRaces ):
				setRaces( notification.getBody() );
		}
	}
	
	function setRaces( info:Dynamic ) {
		var doms = Jslib.j('#tmpl_race').tmpl( info );
		mc_raceContainer.append( doms );
		
		mc_raceContainer.find( '.raceItem' ).click( function( e ) {
			var dom:Dynamic = Jslib.j( e.currentTarget );
			var id = dom.attr( 'id' );
		});
	}
}