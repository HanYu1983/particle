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
			ViewController.on_item_over,
			do_save_data
		];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case ViewController.on_item_over:
				var id = notification.getBody().id;
				var game = notification.getBody().game;
				sendNotification( ViewController.do_show_showDetail, { showDetail:findDataById( id ) } );
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
			transItem.gameName = Helper.EnToCh( transItem.game );
			transItem.type = Helper.EnToCh( transItem.type );
			return transItem;
		});
	}
}