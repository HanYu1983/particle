package;

import controller.UIController;
import haxe.Json;
import js.Browser;
import js.Lib;
import org.puremvc.haxe.interfaces.IMediator;
import org.puremvc.haxe.patterns.facade.Facade;
import org.puremvc.haxe.patterns.mediator.Mediator;
import per.vic.pureMVCref.tableGameModel.controller.MainController;
import per.vic.pureMVCref.tableGameModel.controller.SocketController;
import per.vic.pureMVCref.tableGameModel.view.CardItem;
import per.vic.pureMVCref.tableGameModel.view.IItem;

using Lambda;
using Reflect;
using StringTools;
/**
 * ...
 * @author vic
 */
class Main 
{
	public static var j:Dynamic = untyped __js__( '$' );
	
	public static var onBtnStartServer = 'onBtnStartServer';
	public static var onBtnPokerClick = 'onBtnPokerClick';
	
	public static var playerId:String = 'smart';
	public static var ary_ops:Array<String>;
	
	static function main() 
	{
		Browser.document.addEventListener("contextmenu", function(e){
			e.preventDefault();
		}, false);
		
		j( Browser.document ).ready( function() {
			Facade.getInstance().registerMediator( new MainController( 'MainController', j( '#container_cards' ) ) );
			Facade.getInstance().registerMediator( new UIController( 'UIController', j( '.easyui-layout' ) ) );
			Facade.getInstance().registerMediator( new SocketController( 'SocketController' ));
			
			trace( 'ok' );
			/*
			Facade.getInstance().sendNotification( MainController.create_item, [
																					createItem( ['../common/images/createTable/002.jpg'], [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )], 'card', 700, 700, true, false, playerId ),
																					createItem( ['../common/images/createTable/Victory_Token.png'], [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )], 'token', 100, 100, true, false, playerId )
																				]);
																				
																				*/
		});
		
		Browser.window.setField( 'onHtmlClick', onHtmlClick );
	}
	
//	static var ary_sendMessage:Array<Dynamic> = [];
	//static var isSending = false;
	/*
	public static function messageSocket( type, msg ) {
		
		function messageSingle( toId, _type, _msg ){
			untyped __js__( 'channel' ).sendChannelMessage( toId, Json.stringify( {
				type:_type, 
				msg:Json.parse( Json.stringify( _msg ))
			}), handleResponse( function( ret ) {
				trace( ret );
			} ));
		}
		
		if ( ary_ops == null ) return;
		ary_ops.foreach( function( op ) {
			messageSingle( op, type, msg );
			return true;
		});
	}
	*/
	public static function createItem( extra:Array<Dynamic>, pos:Array<Int>, ?type:String = 'card', ?width:Int = 100, ?height:Int = 100, ?back = true, ?lock = false, ?owner = 'desktop', ?viewer = '' ) {
		return { 
			type:type,
			width:width,
			height:height,
			pos: pos,
			back:back,
			deg:0,
			lock:lock,
			owner:owner,
			viewer:viewer,
			id:createDivId(),
			extra: extra,
			action:{
				sequence:Math.random()
			}
		}
	}
	/*
	public static function createSocket( id ) {
		untyped __js__( 'api.createChannel' )( id, {
			onopen: function() {
				trace( 'ok' );
			},
			onmessage: function( json ) {
				trace( json );
				Facade.getInstance().sendNotification( MainController.on_receiveMessage, json.msg, json.type );
			},
			onerror: function() {
				
				j( '#btn_connect' ).linkbutton( 'enable' );
				isConntect = false;
				isCanSendMessage = false;
				alert( '已斷線，請重新連線' );
				
			},
			onclose: function() {
				
				j( '#btn_connect' ).linkbutton( 'enable' );	
				isConntect = false;
				isCanSendMessage = false;
				alert( '已斷線，請重新連線' );
				
			}
		});
	}
	*/
	public static function createItemDiv( type:String, model:Dynamic ) {
		var div:Dynamic = j('#tmpl_' + type ).tmpl( model );
		return div;
	}
	
	public static function createDivId() {
		return untyped __js__('leo.utils.generateUUID')();
	}
	
	public static function slide( msg, ?time = 2000 ){
		j.messager.show({
			title:'提示',
			msg: msg,
			timeout:time,
			showType:'slide'
		});
	}
	
	public static function alert( msg ) {
        j.messager.alert('錯誤', msg );
	}
	/*
	public static function setSelectable( dom:Dynamic, s:Bool ) {
		if ( s ) {
			dom.addClass( 'lock' );
		}else {
			dom.removeClass( 'lock' );
		}
	}
	*/
	/*
	static function handleResponse( cb ) {
		return function ( err, ret ) {
			if ( err != null ) {
				#if debug
				alert( err );
				#else
				alert( '錯誤:' + err );
				#end
			}else {
				cb( ret );
			}
		}
	}
	*/
	
	static function onHtmlClick( type:String ) {
		Facade.getInstance().sendNotification( type );
	}
}