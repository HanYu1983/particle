package per.vic.pureMVCref.tableGameModel.controller;

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
	public static var setOpponents = 'setOpponents';
	public static var sendMessage = 'sendMessage';
	public static var createPlayerSocket = 'createPlayerSocket';
	public static var playerId:String = 'smart';
	
	public static var isConntect = false;
	public static var isCanSendMessage = false;
	
	public static var on_socket_error = 'on_socket_error';
	
	var ary_ops:Array<String>;
	
	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ setOpponents, sendMessage, createPlayerSocket ];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
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
	
	function createSocket( id ) {
		
		function onSocketError() {
			isConntect = false;
			isCanSendMessage = false;
			sendNotification( on_socket_error );
		}
		
		untyped __js__( 'api.createChannel' )( id, {
			onopen: function() {
				isConntect = true;
			},
			onmessage: function( json ) {
				facade.sendNotification( MainController.on_receiveMessage, json.msg, json.type );
			},
			onerror: onSocketError,
			onclose: onSocketError
		});
	}
	
	function messageSocket( type, msg ) {
		if ( !isCanSendMessage ) return;
		if ( ary_ops == null ) return;
		ary_ops.foreach( function( op ) {
			untyped __js__( 'api.sendMessageToSomeone' )( op, type, msg );
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