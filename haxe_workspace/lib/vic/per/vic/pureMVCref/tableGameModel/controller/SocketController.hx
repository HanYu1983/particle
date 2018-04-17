package per.vic.pureMVCref.tableGameModel.controller;

import haxe.CallStack;
import haxe.Json;
import js.Browser;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;

using Lambda;
/**
 * ...
 * @author vic
 */
class SocketController extends Mediator
{
	public static inline var setOpponents = 'setOpponents';
	public static inline var sendMessage = 'sendMessage';
	public static inline var createPlayerSocket = 'createPlayerSocket';
	public static inline var do_startHeartbeat = 'do_startHeartbeat';
	
	public static inline var on_searchComplete = 'on_searchComplete';
	public static inline var on_heartbeat_event = 'on_heartbeat_event';
	public static inline var on_sendMessage = 'on_sendMessage';
	public static inline var on_receiveMessage = 'on_receiveMessage';
	
	public static var playerId:String = 'smart';
	public static var otherPlayerIds:Array<String> = [];
	public static var otherPlayerIdsForCheck:Array<Bool> = [];
	
	public static var isConntect = false;
	public static var isCanSendMessage = false;
	
	public static inline var on_socket_error = 'on_socket_error';
	public static inline var on_socket_success = 'on_socket_success';
	
	var ary_ops:Array<String>;
	
	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 	setOpponents, 
					sendMessage, 
					do_startHeartbeat,
					createPlayerSocket ];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case str if( str == do_startHeartbeat ):
				startHeartbeat();
			case str if( str == sendMessage ):
				var type = notification.getBody().type;
				var msg = notification.getBody().msg;
				messageSocket( type, msg );
			case str if ( str == setOpponents ):
				ary_ops = notification.getBody().slice();
			case str if ( str == createPlayerSocket ):
				createSocket( notification.getBody() );
		}
	}
	
	function startHeartbeat() {
		for ( i in 0...otherPlayerIds.length ) {
			var fn = (function( _i: Int ):Bool -> Void {
				return function( conn: Bool ) {
					otherPlayerIdsForCheck[_i] = conn;
					isConntect = Lambda.fold( otherPlayerIdsForCheck, function( curr, first ) {
						return first && curr;
					}, true );
					if ( isConntect ) {
						sendNotification( on_searchComplete );
					}
					sendNotification( on_heartbeat_event, {conn:isConntect} );
				}
			})( i );
			CallJs.api_startHeartbeat( playerId, otherPlayerIds[i], fn );
		}
	}
	
	function createSocket( id ) {
		
		function onSocketError() {
			isConntect = false;
			isCanSendMessage = false;
			sendNotification( on_socket_error );
		}
		
		untyped __js__( 'api.createChannel' )( id, {
			onopen: function() {
				isCanSendMessage = true;
				sendNotification( on_socket_success );
			},
			onmessage: function( json ) {
				sendNotification( on_receiveMessage, json.msg, json.type );
			},
			onerror: onSocketError,
			onclose: onSocketError
		});
	}
	
	function messageSocket( type, msg ) {
		sendNotification( on_sendMessage, { type:type, msg:msg } );
		
		if ( !isCanSendMessage ) return;
		if ( ary_ops == null ) return;
		
		ary_ops.foreach( function( op ) {
			if ( op != SocketController.playerId ) {
				untyped __js__( 'api.sendMessageToSomeone' )( op, type, msg );
			}
			return true;
		});
	}
	
	function handleResponse( cb ) {
		return function ( err, ret ) {
			if ( err != null ) {
				#if debug
				Browser.alert( err );
				#else
				Browser.alert( '錯誤:' + err );
				#end
			}else {
				cb( ret );
			}
		}
	}
}