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
	var ary_result:Array<Dynamic>;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [
			ViewController.on_item_click,
			ViewController.on_item_over,
			ViewController.on_input_search_change,
			ViewController.on_pag_page_change,
			do_save_data
		];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case ViewController.on_pag_page_change:
				var page:Int = Math.floor( notification.getBody().number - 1 );
				sendNotification( ViewController.do_show_list, { data:filterByPage( ary_result, page ), total: ary_result.length } );
			case ViewController.on_input_search_change:
				var searchConditions:Dynamic = notification.getBody().value;
				var showData = multiSearch( searchConditions );
				sendNotification( ViewController.do_show_list, { data:filterByPage( showData, 0 ), total: showData.length } );
			case ViewController.on_item_over:
				var id = notification.getBody().id;
				var game = notification.getBody().game;
				sendNotification( ViewController.do_show_showDetail, { showDetail:findDataById( data, id ) } );
			case ViewController.on_item_click:
				var id = notification.getBody().id;
				var game = notification.getBody().game;
				var cards:Array<Dynamic> = findDataById( data, id ).cards;
				
				sendNotification( ViewController.do_show_loading, { show:true } );
				Helper.loadDetail( game, function( data:Array<Dynamic> ) {
					var ary_showData = cards.map( function( str:String ) {
						str = str.replace( '.jpg', '' );
						var retobj:Dynamic = data.find( function( oriData ) {
							return ( oriData.id.indexOf( str ) != -1 );
						});
						return retobj;
					});
					sendNotification( ViewController.do_show_loading, { show:false } );
					sendNotification( ViewController.do_show_bigList, { game:game, ary_showData:ary_showData } );
				});
				
			case do_save_data:
				oriDataToUseData( notification.getBody().data );
				sendNotification( ViewController.do_show_list, {data:filterByPage( data, 0 ), total:data.length} );
		}
	}
	
	function filterByPage( from, ?page:Int = 0 ) {
		var sid = page * 10;
		var eid = ( sid + 10 ) < from.length ? sid + 10 : from.length;
		return switch( from.length ) {
			case l if ( l < 10 ): from.slice( 0, from.length );
			case _: from.slice( sid, eid );
		}
	}
	
	function multiSearch( value:Dynamic ) {
		var ret:Array<Dynamic> = null;
		for ( f in value.fields() ) {
			switch( f ) {
				case 'author':
					if ( ret == null ) {
						ret = filterDataByAuthor( data, value.field( f ) );
					}else {
						ret = filterDataByAuthor( ret, value.field( f ) );
					}
				case 'game':
					if ( ret == null ) {
						ret = filterDataByGame( data, value.field( f ) );
					}else {
						ret = filterDataByGame( ret, value.field( f ) );
					}
				case 'type':
					if ( ret == null ) {
						ret = filterDataByType( data, value.field( f ) );
					}else {
						ret = filterDataByType( ret, value.field( f ) );
					}
			}
		}
		return ary_result = ret;
	}
	
	function findDataById( from:Array<Dynamic>, id ):Dynamic {
		return from.find( function( item ) {
			return item.id == id;
		});
	}
	
	function filterDataByAuthor( from:Array<Dynamic>, author:String ) {
		return from.filter( function( obj ) {
			return obj.author.indexOf( author ) != -1;
		});
	}
	
	function filterDataByGame( from:Array<Dynamic>, game:String ) {
		return from.filter( function( obj ) {
			return game == '' || obj.game == game;
		});
	}
	
	function filterDataByType( from:Array<Dynamic>, type:String ) {
		return from.filter( function( obj ) {
			return type == '' || obj.type == type;
		});
	}
	
	function oriDataToUseData( ori ) {
		#if debug
		data = [for ( i in 0...14 ) i ].map( function( id ) {
			return { 
				id:Math.random() * 10000,
				cards:[],
				author:'vic',
				game:'sgs',
				gameName:'',
				describe:'',
				type:'high_speed',
				typeName:'high_speed'
			};
		});
		#else
		data = ori.map( function( item ){
			var transItem = Json.parse( item.Content );
			transItem.id = item.Name.replace( 'deckwiki/list/', '' ).replace('.json', '');
			transItem.gameName = Helper.EnToCh( transItem.game );
			transItem.type = transItem.type;
			transItem.typeName = Helper.EnToCh( transItem.type );
			return transItem;
		});
		#end
		ary_result = data;
	}
}