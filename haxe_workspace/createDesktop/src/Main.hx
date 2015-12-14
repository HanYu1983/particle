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
	
	public static function doAction( methodName:String, ary_item:Array<Dynamic>, ?extra:Dynamic ) {
		
		var info:Dynamic = switch( methodName ) {
			case 'list','together':
				collectInfo( ary_item );
			case 'shuffle':
				doShuffleModel( ary_item );
				{}
			case 'reverse':
				doReverseModel( ary_item );
				{}
			default:
				{}
		}
		//trace( info );
		//trace( ary_item );
		for ( i in 0...ary_item.length ) {
			var itemModel:Dynamic = ary_item[i];
			var itemMediator:IMediator = Facade.getInstance().retrieveMediator( itemModel.id );
			var item:IItem = cast( itemMediator, IItem );
			
			if ( methodName != 'lock' ) {
				if ( itemModel.lock ) continue;
			}
			switch( methodName ) {
				case 'shuffle','together','reverse':
					var pos_mouse = extra.field('pos_mouse' );
					doTogetherModel( itemModel, i, pos_mouse );
					item.move( itemModel.pos[0], itemModel.pos[1] );
					doZSort( itemMediator.getViewComponent() );
				case 'list':
					var pos_mouse = extra.field('pos_mouse' );
					doListModel( itemModel, i, pos_mouse, info );
					item.move( itemModel.pos[0], itemModel.pos[1] );
				case 'setViewer':
					if ( itemModel.viewer == playerId ) {
						itemModel.viewer = '';
					}else {
						itemModel.viewer = playerId;
					}
					item.setViewer( itemModel.viewer == playerId );
				case 'setOwner':
					trace( itemModel.owner );
					if ( itemModel.owner == playerId ) {
						itemModel.owner = '';
					}else {
						itemModel.owner = playerId;
					}
					item.setOwner( itemModel.owner == playerId );
				case 'move':
					item.move( itemModel.pos[0], itemModel.pos[1] );
				case 'flip': 
					itemModel.back = !itemModel.back;
					item.flip( itemModel.back );
				case 'rotateForward':
					var td = Math.floor( itemModel.deg + 90 );
					item.rotateForward( itemModel.deg, td );
					itemModel.deg = td;
				case 'rotateBackward':
					var td = Math.floor( itemModel.deg - 90 );
					item.rotateForward( itemModel.deg, td );
					itemModel.deg = td;
				case 'lock':
					itemModel.lock = !itemModel.lock;
					item.lock( itemModel.lock );
			}
			
		}
	}
	
	static var ary_sendMessage:Array<Dynamic> = [];
	static var isSending = false;
	
	public static function messageSocket( toId, type, msg ) {
		trace( 'pushMessage', type );
		
		ary_sendMessage.push( {
			toId: toId,
			msg:{ type:type, msg:Json.parse( Json.stringify( msg )) },
			channel:untyped __js__( 'channel' )
		} );
		
		
		
		function doNextChannel() {
			if ( ary_sendMessage.length > 0 ) {
				isSending = true;
				var m:Dynamic = ary_sendMessage.shift();
				
				trace( 'messageSocket', m.msg.type );
				m.channel.sendChannelMessage( m.toId, Json.stringify( m.msg ), handleResponse( function( ret ) {
					isSending = false;
					doNextChannel();
				}));
			}
		}
		
		if ( isSending ) return;
		doNextChannel();
		
		
		
		/*
		var _channel:Dynamic = untyped __js__( 'channel' );
		var msg = {
			type:type,
			msg:msg
		};
		
		_channel.sendChannelMessage( toId, Json.stringify( msg ), handleResponse( function( ret ) {
		//	trace( ret );
		}));
		*/
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
	
	static var tempItem = { 
		type:'card',
		width:200,
		height:200,
		pos:[ Math.floor( Math.random() * 600 ), Math.floor( Math.random() * 600 ) ],
		back:true,
		deg:0,
		lock:false,
		owner:'desktop',
		viewer:'',
		id:createDivId()
	}
	
	public static function createSocket( id ) {
		untyped __js__( 'api.createChannel' )( id, {
			onopen: function() {
				
				messageSocket( playerId, 'addItems', [ tempItem ] );
				
				tempItem.pos[0] = 100;
				tempItem.pos[1] = 0;
				messageSocket( playerId, 'applyTransform', [ tempItem ] );
				
				messageSocket( playerId, 'applyRotateForward', [ tempItem ] );
				messageSocket( playerId, 'applyRotateForward', [ tempItem ] );
				messageSocket( playerId, 'applyRotateForward', [ tempItem ] );
				
				messageSocket( playerId, 'applyRotateBackward', [ tempItem ] );
				
				tempItem.pos[0] = 130;
				tempItem.pos[1] = 200;
				messageSocket( playerId, 'applyTransform', [ tempItem ] );
				
				messageSocket( playerId, 'applyFlip', [ tempItem ] );
				messageSocket( playerId, 'applyFlip', [ tempItem ] );
				
				tempItem.viewer = playerId;
				tempItem.owner = playerId;
				messageSocket( playerId, 'applyViewerOwner', [ tempItem ] );
				
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
	
	public static function getMediatorFromId( id:String ):IItem {
		return cast( Facade.getInstance().retrieveMediator( id ), IItem );
	}
	
	public static function collectInfo( ary_item:Array<Dynamic> ) {
		var mw = 0.0;
		var mh = 0.0;
		var firstPos = [];
		for ( i in 0...ary_item.length ) {
			if ( i == 0 ) firstPos = ary_item[i].pos.slice();
			mw = Math.max( mw, ary_item[i].width );
			mh = Math.max( mw, ary_item[i].height );
		}
		return { mw:mw, mh:mh, firstPos:firstPos };
	}
	
	public static function doZSort( dom:Dynamic ) {
		dom.appendTo( dom.parent() );
	}
	
	public static function doTogetherModel( itemModel:Dynamic, i:Int, pos_mouse:Array<Int> ) {
		itemModel.pos[0] = i * 2 + pos_mouse[0];
		itemModel.pos[1] = i * 2 + pos_mouse[1];
	}
	
	public static function doListModel( itemModel:Dynamic, i:Int, pos_mouse:Array<Int>, info:Dynamic ) {
		itemModel.pos[0] = i % 10 * ( info.field( 'mw' ) + 4 ) + pos_mouse[0];
		itemModel.pos[1] = Math.floor( i / 10 ) * ( info.field( 'mh' ) + 4 ) + pos_mouse[1];
	}
	
	public static function doShuffleModel( ary_item:Array<Dynamic> ) {
		ary_item.sort( function ( a, b ) {
			return Math.random() > .5 ? 1 : -1;
		});
	}
	
	public static function doReverseModel( ary_item:Array<Dynamic> ) {
		ary_item.reverse();
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