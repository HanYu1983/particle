package model;

import haxe.Json;
import js.Browser;
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
	public static var do_load_all_list = 'do_load_all_list';
	
	public static var on_facebook_login = 'on_facebook_login';
	public static var on_cardsuit_load = 'on_cardsuit_load';
	public static var on_cardsuit_save_success = 'on_cardsuit_save_success';
	
	var data:Array<Dynamic>;
	var ary_result:Array<Dynamic>;
	
	var fbid:String;
	var token:String;
	var currentGame:String;
	var currentOutputStr:String;

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
			ViewController.on_btn_output_click,
			ViewController.on_btn_gotoDeckManager_click,
			ViewController.on_btn_gotoGroup_click,
			ViewController.on_btn_login_click,
			ViewController.on_btn_addDeck_click,
			ViewController.on_btn_saveDeck_click,
			do_load_all_list
		];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case ViewController.on_btn_saveDeck_click:
				sendNotification( ViewController.do_show_loading, { show:true } );
				Helper.saveDeck( this.fbid, this.token, notification.getBody().savedata, function( ret ) {
					sendNotification( ViewController.do_show_loading, { show:false } );
					sendNotification( on_cardsuit_save_success );
					doLoadList();
				});
			case ViewController.on_btn_login_click:
				sendNotification( ViewController.do_show_loading, { show:true } );
				Helper.loginFb( function(fbid, token) {
					this.fbid = fbid;
					this.token = token;
					sendNotification( on_facebook_login, { fbid:fbid, token:token } );
					
					Helper.getCardsuits( fbid, token, function( ret ) {
						sendNotification( on_cardsuit_load, { cardsuit:ret } );
						sendNotification( ViewController.do_show_loading, { show:false } );
					});
					
				});
			case ViewController.on_btn_gotoDeckManager_click:
				switch( currentGame ) {
					case 'yugioh':
						Browser.window.open( '../card/manager_deck.html?game=yugioh&lang=ch', '_blank' );
					case _:
						Browser.window.open( '../card/manager_deck.html?game=' + currentGame, '_blank' );
				}
			case ViewController.on_btn_gotoGroup_click:
				Browser.window.open( 'https://www.facebook.com/groups/1521526761495948/', '_blank' );
			case ViewController.on_btn_output_click:
				sendNotification( ViewController.do_show_output, { str:currentOutputStr } );
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
				
				currentGame = game;
				currentOutputStr = Json.stringify( cards );
				
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
			case str if ( str == do_load_all_list ):
				doLoadList();
		}
	}
	
	function doLoadList() {
		sendNotification( ViewController.do_show_loading, { show:true } );
		Helper.loadList( function( err, data:Array<Dynamic> ) {
			doSetData( data );
			sendNotification( ViewController.do_show_loading, { show:false } );
		});
	}
	
	function doSetData( data:Array<Dynamic> ) {
		oriDataToUseData( data );
		sendNotification( ViewController.do_show_list, {data:filterByPage( data, 0 ), total:data.length} );
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
		data = ori.map( function( item ) {
			item.id = Helper.getUUID();
			item.author = item.username;
			item.gameName = Helper.EnToCh( item.game );
			return item;
		});
		ary_result = data;
	}
}