package model;

import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;
import view.UIMediator;

using Lambda;
using Reflect;
using StringTools;
/**
 * ...
 * @author vic
 */
class DataMediator extends Mediator
{
	public static var do_get_duelContext = 'do_get_duelContext';
	
	
	var datas:Dynamic;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 
			do_get_duelContext,
			UIMediator.on_race_click,
			UIMediator.on_race_join_click
		];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName()) {
			case UIMediator.on_race_join_click:
				var duelId = notification.getBody().duelId;
				joinDuel( 'a_people', duelId );
			case UIMediator.on_race_click:
				var id = notification.getBody().id;
				var duel = getDuelByName( id );
				trace( duel );
				sendNotification( UIMediator.do_showDuelDetail, { duel:duel } );
			case str if ( str == do_get_duelContext ):
				getDuelContext();
		}
	}
	
	function joinDuel( playerId:String, duelId:String ) {
		Helper.talk( Talk.addPeople, function( ret:Dynamic ) {
			trace( ret );
		}, [ playerId, duelId ] );
	}
	
	function getDuelContext() {
		Helper.talk( Talk.duelContext, function( ret:Dynamic ) {
			datas = ret;
			sendNotification( UIMediator.do_setRaces, datas );
		});
	}
	
	function getDuelByName( name:String ) {
		return datas.Duels.find( function( duel ) {
			return duel.Name == name;
		});
	}
}