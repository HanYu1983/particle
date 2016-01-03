package model;

import haxe.Json;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;
import view.ViewController;

using Lambda;
using Reflect;
using StringTools;
/**
 * ...
 * @author vic
 */
class ModelController extends Mediator
{
	public static var do_save_data = 'do_save_data';
	
	var data:Array<Dynamic>;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [
			ViewController.on_item_click,
			do_save_data
		];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case ViewController.on_item_click:
				var id = notification.getBody().id;
				var game = notification.getBody().game;
				var cards:Array<Dynamic> = findDataById( id ).cards;
				
				Helper.loadDetail( game, function( data:Array<Dynamic> ) {
					var ary_showData = cards.map( function( str:String ) {
						str = str.replace( '.jpg', '' );
						var retobj:Dynamic = data.find( function( oriData ) {
							return ( oriData.id.indexOf( str ) != -1 );
						});
						return retobj;
					});
					sendNotification( ViewController.do_show_bigList, { game:game, ary_showData:ary_showData } );
				});
				
			case do_save_data:
				oriDataToUseData( notification.getBody().data );
				sendNotification( ViewController.do_show_list, {data:data} );
		}
	}
	
	function findDataById( id ):Dynamic {
		return data.find( function( item ) {
			return item.id == id;
		});
	}
	
	function oriDataToUseData( ori ) {
		data = ori.map( function( item ){
			var transItem = Json.parse( item.Content );
			transItem.id = item.Name.replace( 'deckwiki/list/', '' ).replace('.json', '');
			transItem.gameName = switch( transItem.game ) {
				case 'army':'軍武gogogo';
				case 'gundamWar':'鋼彈大戰';
				case 'gundamWarN':'鋼彈大戰Nex-A';
				case 'sangoWar':'三國志大戰';
				case 'sgs':'三國殺陣面對決';
				case 'magic':'魔法風雲會';
				case 'battleSpirit':'戰魂';
				case 'crusade':'Crusade';
				case 'ws':'黑白雙翼';
				case 'dragonZ':'七龍珠TCG';
				case 'yugioh':'遊戲王';
				case _:'';
			}
			transItem.type = switch( transItem.type ) {
				case 'high_speed':'小快';
				case 'middle_speed':'中速';
				case 'low_speed':'後期';
				case 'balance':'均衡';
				case 'control':'控制';
				case 'disgust':'噁心';
				case _:'';
			}
			return transItem;
		});
	}
}