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
	public static var do_save_count = 'do_save_count';
	//public static var do_save_read = 'do_save_read';
	
	public static var on_facebook_login = 'on_facebook_login';
	public static var on_cardsuit_load = 'on_cardsuit_load';
	public static var on_cardsuit_save_success = 'on_cardsuit_save_success';
	public static var on_loadPublic_error = 'on_loadPublic_error';
	
	var data:Array<Dynamic>;
	var ary_result:Array<Dynamic>;
	var ary_read = [];
	
	var countMap:Dynamic;
	var fbid:String;
	var token:String;
	var currentGame:String;
	var currentUid:String;
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
			ViewController.on_btn_self_click,
			ViewController.on_btn_gotoDeckManager_click,
			ViewController.on_btn_gotoGroup_click,
			ViewController.on_btn_login_click,
			ViewController.on_btn_addDeck_click,
			ViewController.on_btn_saveDeck_click,
			ViewController.on_btn_share_deck_click,
			ViewController.on_btn_seeCount_click,
			ViewController.on_btn_getShareLink_click,
			do_load_all_list,
			do_save_count
		];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case ViewController.on_btn_getShareLink_click:
				var uid = notification.getBody().deckuid;
				var url = 'https://' + Browser.window.location.host + Browser.window.location.pathname + '?uid=' + uid;
				sendNotification( ViewController.do_show_alert, { alert:url } );
			case ViewController.on_btn_seeCount_click:
				Helper.authGoogleAndGetData( false, function( err, data ) {
					if ( err == null ) {
						doSaveCount( data );
						pushCountToData();
						doLoadList();
						sendNotification( ViewController.do_show_auth, { show:false } );
					}else {
						sendNotification( ViewController.do_show_alert, { alert:err } );
					}
				});
			case ViewController.on_btn_share_deck_click:
				var uid = notification.getBody().deckuid;
				var shareobj = findDataById( ary_result, uid );
				#if debug
				var url = 'https://particle-979.appspot.com/deckWiki/index.html?uid=' + uid;
				#else
				var url = 'https://' + Browser.window.location.host + Browser.window.location.pathname + '?uid=' + uid;
				#end
				var picture = 'https:' + Helper.getImageUrlByGameAndId( shareobj.game, shareobj.cards[0] );
				sendNotification( ViewController.do_show_loading, { show:true } );
				Helper.shareFb( Helper.getMeta().desc, url, picture, Helper.getMeta().name, shareobj.desc, function( ret ) {
					sendNotification( ViewController.do_show_loading, { show:false } );
				});
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
				Browser.window.open( 'https://www.facebook.com/%E4%B8%8A%E5%96%84%E8%8B%A5%E6%B0%B4app-1653920964852269/', '_blank' );
			case ViewController.on_btn_self_click:
				if ( this.fbid == null ) {
					sendNotification( ViewController.do_show_alert, { alert:'請先登入facebook哦!' } );
					return ;
				}
				var searchConditions:Dynamic = { 
					author:this.fbid
				};
				var showData = multiSearch( searchConditions );
				sendNotification( ViewController.do_show_list, { data:filterByPage( showData, 0 ), total: showData.length } );
			case ViewController.on_btn_output_click:
				sendNotification( ViewController.do_show_output, { uid:currentUid, str:currentOutputStr } );
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
				var doLoad = notification.getBody().doLoad;
				var clickData:Dynamic = findDataById( data, id );
				if ( clickData == null ) return;
				var cards:Array<Dynamic> = clickData.cards;
				currentGame = game;
				currentUid = id;
				currentOutputStr = Json.stringify( cards );
				sendShowBigList( clickData, doLoad );
		//	case str if ( str == do_save_read ):
				//setDataRead( notification.getBody().readData );
			case str if ( str == do_save_count ):
				doSaveCount( notification.getBody().countMap );
			case str if ( str == do_load_all_list ):
				doLoadList( true );
		}
	}
	
	
	function doSaveCount( map ) {
		this.countMap = map;
	}
	
	function doLoadList( ?checkHash = false ) {
		sendNotification( ViewController.do_show_loading, { show:true } );
		
		Helper.loadList( function( err, data:Array<Dynamic> ) {
			sendNotification( ViewController.do_show_loading, { show:false } );
			if ( err != null ) {
				sendNotification( on_loadPublic_error, {err:err} );
				return;
			}
			
			if ( checkHash ) {
				Helper.loadRead( function( err, readData ) {
					if ( readData != null ) {
						ary_read = Json.parse( readData );
					}
					doSetData( data );
					checkHashAndShow();
				});
			}else {
				doSetData( data );
			}
		});
	}
	
	function checkHashAndShow() {
		if ( Helper.getUrlHash().uid != null && Helper.getUrlHash().uid.length != 0 ) {
			var showData = findDataById( data, Helper.getUrlHash().uid );
			sendShowBigList( showData );
		}
	}
	
	function sendShowBigList( deck, ?load = false ) {
		if ( deck == null ) {
			sendNotification( ViewController.do_show_alert, { alert:'這個套牌作者已經停止分享囉!' } );
			return;
		}
		loadDetail( deck, load );
	}
	
	function loadDetail( deck, ?load = false ) {
		sendNotification( ViewController.do_show_loading, { show:true } );
		
		var cards = deck.cards;
		var game = deck.game;
		
		function onLoadSuccess( ary_send ) {
			var ary_send = ary_send.filter( function( item ) {
				return item != null;
			});
			
			if ( ary_read != null && ary_read.indexOf( deck.id ) == -1 ) {
				ary_read.push( deck.id );
				Helper.saveRead( Json.stringify( ary_read ), function( err, appSaveRet ) {
					if ( err != null ) {
						sendNotification( ViewController.do_show_alert, { alert:err } );
					}else {
						sendNotification( ViewController.do_show_loading, { show:false } );
						sendNotification( ViewController.do_show_bigList, { clickData:deck, game:game, ary_showData:ary_send } );
					}
				});
			}else {
				sendNotification( ViewController.do_show_loading, { show:false } );
				sendNotification( ViewController.do_show_bigList, { clickData:deck, game:game, ary_showData:ary_send } );
			}
		}
		
		if ( load ) {
			
			Helper.loadDetail( game, function( data:Array<Dynamic> ) {
				var ary_showData:Array<Dynamic> = cards.map( function( str:String ) {
					var retobj:Dynamic = null;
					switch( game ){
						case 'sangoWar':
							str = str.replace( '.jpg', '' );
							retobj = data.find( function( oriData ) {
								return ( oriData.id.indexOf( str ) == 0 );
							});
						default:
							retobj = data.find( function( oriData ) {
								return ( oriData.id == str );
							});
					}
					retobj = data.find( function( oriData ) {
						return ( oriData.id == str );
					});
					if ( retobj == null ) {
						retobj = { id:str, content:'暫時沒有資料!' }; 
					}
					return retobj;
				});
				onLoadSuccess( ary_showData );
			});
		}else {
			if ( Helper.hasDetail( game )) {
				loadDetail( deck, true );
				return;
			}
			var ary_showData:Array<Dynamic> = cards.map( function( str:String ) {
				return switch( game ){
					case 'sangoWar':
						{ id: str.replace( '.jpg', '' ), noData:true };
					default:
						{ id: str, noData:true };
				}
			});
			onLoadSuccess( ary_showData );
		}
	}
	
	function doSetData( data:Array<Dynamic> ) {
		oriDataToUseData( data );
		pushCountToData();
		setDataRead();
		sendNotification( ViewController.do_show_list, {data:filterByPage( ary_result, 0 ), total:ary_result.length, pageNumber:1} );
	}
	
	function setDataRead() {
		data.foreach( function( item ) {
			item.read = ary_read.indexOf( item.id ) != -1;
			return true;
		});
	}
	
	function filterByPage( from, ?page:Int = 0 ) {
		var sid = page * 20;
		var eid = ( sid + 20 ) < from.length ? sid + 20 : from.length;
		return switch( from.length ) {
			case l if ( l < 20 ): from.slice( 0, from.length );
			case _: from.slice( sid, eid );
		}
	}
	
	function multiSearch( value:Dynamic ) {
		var ret:Array<Dynamic> = null;
		function filterDataByCheckNull( fn:Dynamic -> Dynamic -> Array<Dynamic>, f ) {
			if ( ret == null ) {
				ret = fn( data, value.field( f ) );
			}else {
				ret = fn( ret, value.field( f ) );
			}
		}
		for ( f in value.fields() ) {
			switch( f ) {
				case 'deckName':
					filterDataByCheckNull( filterDataByDeckName, f );
				case 'describe':
					filterDataByCheckNull( filterDataByDescribe, f );
				case 'author':
					filterDataByCheckNull( filterDataByAuthor, f );
				case 'game':
					filterDataByCheckNull( filterDataByGame, f );
				case 'type':
					filterDataByCheckNull( filterDataByType, f );
			}
		}
		return ary_result = ret;
	}
	
	function findDataById( from:Array<Dynamic>, id ):Dynamic {
		return from.find( function( item ) {
			return item.id == id;
		});
	}
	
	function filterDataByDeckName( from:Array<Dynamic>, name:String ) {
		return from.filter( function( obj ) {
			return obj.name.indexOf( name ) != -1;
		});
	}
	
	function filterDataByDescribe( from:Array<Dynamic>, name:String ) {
		return from.filter( function( obj ) {
			return obj.desc.indexOf( name ) != -1;
		});
	}
	
	function filterDataByAuthor( from:Array<Dynamic>, author:String ) {
		return from.filter( function( obj ) {
			return author == '' || obj.author == author;
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
	
	function oriDataToUseData( ori:Array<Dynamic> ) {
		data = ori.fold( function( item:Dynamic, first:Array<Dynamic> ) {
			if ( item.uid == null ) return first;
			item.id = item.uid;
			item.author = item.username;
			item.gameName = Helper.EnToCh( item.game );
			item.typeName = Helper.EnToCh( item.type );
			item.desc = item.desc == null ? '' : item.desc;
			first.push( item );
			return first;
		}, []);
		ary_result = data;
	}
	
	function pushCountToData() {
		data.foreach( function( item ) {
			item.viewCount = this.countMap.field( 'on_item_view:' + item.id );
			item.shareCount = this.countMap.field( 'on_item_share:' + item.id );
			item.outputCount = this.countMap.field( 'on_item_output:' + item.id );
			if ( item.viewCount == null ) item.viewCount = 0;
			if ( item.shareCount == null ) item.shareCount = 0;
			if ( item.outputCount == null ) item.outputCount = 0;
			return true;
		});
	}
}