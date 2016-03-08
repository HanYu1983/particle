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
	var currentDuelId:String;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 
			do_get_duelContext,
			UIMediator.on_race_click,
			UIMediator.on_race_join_click,
			UIMediator.on_race_delete_click,
			UIMediator.on_race_time_setting
		];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName()) {
			case UIMediator.on_race_time_setting:
				var name = notification.getBody().name;
				var startTime = notification.getBody().startTime;
				var endTime = notification.getBody().endTime;
				var signTime = notification.getBody().signTime;
				createDuel( name, startTime, endTime, signTime );
			case UIMediator.on_race_delete_click:
				var duelId = notification.getBody().duelId;
				deleteDuel( duelId );
			case UIMediator.on_race_join_click:
				var duelId = notification.getBody().duelId;
				joinDuel( 'a_people', duelId );
				joinDuel( 'b_people', duelId );
				joinDuel( 'c_people', duelId );
				joinDuel( 'd_people', duelId );
				joinDuel( 'e_people', duelId );
				joinDuel( 'f_people', duelId );
			case UIMediator.on_race_click:
				currentDuelId = notification.getBody().id;
				var duel = getDuelByName( currentDuelId );
				trace( duel );
				sendNotification( UIMediator.do_showDuelDetail, { duel:duel } );
			case str if ( str == do_get_duelContext ):
				getDuelContext();
		}
	}
	
	function createDuel( name:String, startTime:Array<String>, endTime:Array<String>, signTime:Array<String> ) {
		
		function createTimeStr( time:Array<String> ):String {
			return time[3] + '-' + time[1] + '-' + time[2];
		}
		
		Helper.talk( Talk.createDuel, function( ret:Dynamic ) {
			getDuelContext();
		}, [ name, createTimeStr( startTime ), createTimeStr( endTime ), createTimeStr( signTime ) ] );
		//["Thu", "Mar", "03", "2016", "10:58:30", "GMT+0800", "(台北標準時間)"]
	}
	
	function deleteDuel( duelId:String ) {
		//delete 
		trace( 'delete', duelId );
	}
	
	function joinDuel( playerId:String, duelId:String ) {
		Helper.talk( Talk.addPeople, function( ret:Dynamic ) {
			getDuelContext( function() {
				var duel = getDuelByName( currentDuelId );
				if ( duel != null ) {
					sendNotification( UIMediator.do_showDuelDetail, { duel:duel } );
				}
			});
		}, [ playerId, duelId ] );
	}
	
	function getDuelContext( ?cb:Void -> Void ) {
		Helper.talk( Talk.duelContext, function( ret:Dynamic ) {
			datas = ret;
			sendNotification( UIMediator.do_setRaces, datas );
			
			if ( cb != null ) cb();
		});
	}
	
	function getDuelByName( name:String ) {
		return datas.Duels.find( function( duel ) {
			return duel.Name == name;
		});
	}
}