package;

import controller.MainController;
import haxe.Json;
import js.Browser;
import js.Lib;
import org.puremvc.haxe.interfaces.IMediator;
import org.puremvc.haxe.patterns.facade.Facade;
import org.puremvc.haxe.patterns.mediator.Mediator;
import view.CardItem;
import view.IItem;

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
	
	public static var playerId:String = 'vic';
	
	static function main() 
	{
		Browser.document.addEventListener("contextmenu", function(e){
			e.preventDefault();
		}, false);
		
		Facade.getInstance().registerMediator( new MainController( '', j( '#container_cards' ) ) );
		Facade.getInstance().sendNotification( MainController.create_item, [
																				createItem( [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )] ),
																				createItem( [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )] ),
																				createItem( [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )] ),
																				createItem( [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )], 'map', 700, 700 )
																			]);
		
		createSocket( playerId );
	}
	
	static var ary_sendMessage:Array<Dynamic> = [];
	static var isSending = false;
	
	public static function messageSocket( toId, type, msg ) {
		ary_sendMessage.push( {
			toId: toId,
			msg:{ type:type, msg:Json.parse( Json.stringify( msg )) },
			channel:untyped __js__( 'channel' )
		} );
		
		function doNextChannel() {
			if ( ary_sendMessage.length > 0 ) {
				isSending = true;
				var m:Dynamic = ary_sendMessage.shift();
				
				m.channel.sendChannelMessage( m.toId, Json.stringify( m.msg ), handleResponse( function( ret ) {
					isSending = false;
					doNextChannel();
				}));
			}
		}
		
		if ( isSending ) return;
		doNextChannel();
		
	}
	
	public static function createItem( pos:Array<Int>, ?type:String = 'card', ?width:Int = 100, ?height:Int = 100, ?back = true, ?lock = false, ?owner = 'desktop', ?viewer = '' ) {
		return { 
			type:type,
			width:width,
			height:height,
			pos:[ Math.floor( Math.random() * 600 ), Math.floor( Math.random() * 600 ) ],
			back:true,
			deg:0,
			lock:false,
			owner:'desktop',
			viewer:'',
			id:createDivId()
		}
	}
	
	public static function createSocket( id ) {
		untyped __js__( 'api.createChannel' )( id, {
			onopen: function() {
				
				var ary_temp = [
									createItem( [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )] ),
									createItem( [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )] ),
									createItem( [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )] ),
									createItem( [ Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 )], 'map', 200, 50 )
								];
				
				messageSocket( playerId, 'addItems', ary_temp );
				
				ary_temp[0].pos[0] = 100;
				ary_temp[0].pos[1] = 0;
				
				ary_temp[1].pos[0] = 150;
				ary_temp[1].pos[1] = 200;
				
				messageSocket( playerId, 'applyTransform', ary_temp );
				
				ary_temp[0].deg += 90;
				ary_temp[1].back = false;
				messageSocket( playerId, 'applyTransform', ary_temp );
				ary_temp[0].deg += 90;
				ary_temp[1].pos[0] += 90;
				ary_temp[2].pos[1] += 90;
				messageSocket( playerId, 'applyTransform', ary_temp );
				ary_temp[0].deg += 90;
				messageSocket( playerId, 'applyTransform', ary_temp );
				
				ary_temp[0].deg -= 90;
				messageSocket( playerId, 'applyTransform', ary_temp );
				
				ary_temp[0].pos[0] = 130;
				ary_temp[0].pos[1] = 200;
				ary_temp[2].owner = playerId;
				ary_temp[2].viewer = playerId;
				ary_temp[3].owner = playerId;
				ary_temp[1].owner = playerId;
				messageSocket( playerId, 'applyTransform', ary_temp );
				/*
				messageSocket( playerId, 'applyFlip', [ tempItem ] );
				messageSocket( playerId, 'applyFlip', [ tempItem ] );
				
				tempItem.viewer = playerId;
				tempItem.owner = playerId;
				messageSocket( playerId, 'applyViewerOwner', [ tempItem ] );
				*/
				/*
				isCanSendMessage = true;
				slide( '連線成功' );
				j( '#btn_connect' ).linkbutton( 'disable' );
				
				for ( i in 0...otherPlayerIds.length ) {
					var fn = (function( _i: Int ):Bool -> Void {
						return function( conn: Bool ) {
							otherPlayerIdsForCheck[_i] = conn;
							isConntect = Lambda.fold( otherPlayerIdsForCheck, function( curr, first ) {
								return first && curr;
							}, true );
							if ( isConntect ) {
								Facade.getInstance().sendNotification( on_searchComplete );
							}
							Facade.getInstance().sendNotification( on_heartbeat_event, {conn:isConntect} );
						}
					})( i );
					CallJs.api_startHeartbeat( playerId, otherPlayerIds[i], fn );
				}
				*/
			},
			onmessage: function( json ) {
				Facade.getInstance().sendNotification( MainController.on_receiveMessage, json.msg, json.type );
			},
			onerror: function() {
				/*
				j( '#btn_connect' ).linkbutton( 'enable' );
				isConntect = false;
				isCanSendMessage = false;
				alert( '已斷線，請重新連線' );
				*/
			},
			onclose: function() {
				/*
				j( '#btn_connect' ).linkbutton( 'enable' );	
				isConntect = false;
				isCanSendMessage = false;
				alert( '已斷線，請重新連線' );
				*/
			}
		});
	}
	
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
}