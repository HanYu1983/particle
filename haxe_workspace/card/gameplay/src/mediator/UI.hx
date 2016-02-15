package mediator;

import haxe.Json;
import haxe.Timer;
import js.html.Image;
import js.html.rtc.IdentityAssertion;
import model.Model;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;
import per.vic.pureMVCref.tableGameModel.controller.MainController;
import per.vic.pureMVCref.tableGameModel.controller.SocketController;

using Lambda;
using Reflect;
using StringTools;
/**
 * ...
 * @author vic
 */
class UI extends Mediator
{
	public static var do_show_recevie = 'do_show_recevie';
	public static var do_show_chat = 'do_show_chat';
	
	public static var on_combo_deck_change = 'on_combo_deck_change';
	//public static var on_op_change = 'on_op_change';
	
	var mc_detailContainer:Dynamic;
	var combo_deck:Dynamic;
	var combo_ops:Dynamic;
	var txt_savestr:Dynamic;
	var btn_record:Dynamic;
	var dia_invite:Dynamic;
	var mc_light:Dynamic;
	
	//chat
	var mc_messagePanel:Dynamic;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
		getViewComponent().layout();
		
		mc_detailContainer = getViewComponent().find( '#mc_detailContainer' );
		mc_messagePanel = getViewComponent().find( '#mc_messagePanel' );
		mc_messagePanel.find( '#txt_messageInput' ).textbox( {
			onChange:function(nv, ov) {
				if( nv != '' ){
					mc_messagePanel.find( '#txt_messageInput' ).textbox( 'setValue', '' );
					addSingleMessage( SocketController.playerId, nv );
					sendNotification( SocketController.sendMessage, { type:'chat', msg: { id:SocketController.playerId, msg:nv } } );
				}
			}
		});
		
		mc_messagePanel.find( 'input' ).focus( function() {
			sendNotification( MainController.do_enable_command, { enable:false } );
		});
		
		mc_messagePanel.find( 'input' ).focusout( function() {
			sendNotification( MainController.do_enable_command, { enable:true } );
		});
		
		combo_deck = getViewComponent().find( '#combo_deck' );
		combo_ops = getViewComponent().find( '#combo_ops' );
		txt_savestr = getViewComponent().find( '#txt_savestr' );
		btn_record = getViewComponent().find( '#btn_record' );
		mc_light = Main.j( '#mc_light' );
		dia_invite = Main.j( '#dia_invite' );
		dia_invite.find( '#btn_receive' ).click( function() {
			var opsstr:String = dia_invite.attr( 'ops' );
			sendNotification( MainController.on_been_invite, { inviteId:opsstr } );
			sendNotification( SocketController.do_startHeartbeat );
			showReceive( false );
		});
		
		combo_ops.combobox( {
			onChange:function( nv, ov ) {
				Main.selectOps( nv );
			}
		});
		
		btn_record.linkbutton( {
			onClick:function() {
				var record = btn_record.hasClass( 'l-btn-selected' );
				sendNotification( MainController.do_start_record, { record:record } );
			}
		});
		
		Main.j( '#btn_connect' ).linkbutton();
		Main.j( '#txt_id' ).textbox( {
			#if debug
			editable:true,
			#else
			editable:false,
			#end
			onChange:function( nv, od ) {
				Main.changePlayer( nv );
			}
		});
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 	
					MainController.on_select_cards,
					MainController.on_dice,
					MainController.on_been_invite,
					SocketController.on_socket_error,
					SocketController.on_socket_success,
					Main.on_getSuit_success,
					Main.on_receiveOps,
					SocketController.on_searchComplete,
					SocketController.on_heartbeat_event,
					SocketController.on_receiveMessage,
					Main.on_createDeck_click,
					Main.on_save_click,
					Main.on_load_click,
					do_show_recevie,
					do_show_chat
				];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case SocketController.on_receiveMessage:
				switch( notification.getType() ) {
					case 'chat':
						var id = notification.getBody().id;
						var msg = notification.getBody().msg;
						addSingleMessage( id, msg );
				}
			case SocketController.on_socket_success:
				onSocketSuccess();
			case SocketController.on_socket_error:
				onSocketError();
			case MainController.on_been_invite:
				combo_ops.combobox( 'setValue', notification.getBody().inviteId );
			case MainController.on_dice:
				Main.showDiceMessage( notification.getBody().playerId, notification.getBody().dice );
			case Main.on_load_click:
				var loadstr = txt_savestr.textbox( 'getValue' );
				try{
					var ary_cmds = Json.parse( loadstr );
					ary_cmds.forEach( function( cmd ) {
						//trace( cmd.type );
						sendNotification( SocketController.on_receiveMessage, cmd.msg, cmd.type );
						/*
						switch( cmd.type ) {
							case 'addItems':
								sendNotification( MainController.do_create_item, cmd.msg );
							case _:
								sendNotification( SocketController.sendMessage, { type:'deleteItem', msg: ary_select } );
						}*/
						return true;
					});
					txt_savestr.textbox( 'setValue', '' );
				}catch ( error:Dynamic ) {
					Main.alert( '格式不對哦!' );
				}
			case Main.on_save_click:
				//trace( notification.getBody().str );
				txt_savestr.textbox( { value: notification.getBody().str } );
			case Main.on_createDeck_click:
				closeNorthPanel();
			case SocketController.on_heartbeat_event:
				showOnlineOffline( notification.getBody().conn );
			case SocketController.on_searchComplete:
				disabledOpponent();
			case Main.on_receiveOps:
				var ary_ops = notification.getBody().ary_ops;
				setComboOps( ary_ops );
				combo_ops.combobox( 'select', ary_ops[ary_ops.length -1] );
			case MainController.on_select_cards:
				showCards( notification.getBody().ary_select );
			case Main.on_getSuit_success:
				createComboDeck( notification.getBody().cardSuit );
			case str if ( str == do_show_recevie ):
				showReceive( notification.getBody().show, notification.getBody().ops );
			
		}
	}
	
	function addSingleMessage( id, msg ) {
		var mc_message = mc_messagePanel.find( '#mc_message' );
		var msgdom = Main.j( '#tmpl_singleMessage' ).tmpl( {
			id:id,
			msg:msg
		} );
		mc_message.append( msgdom );
	}
	
	function showReceive( show:Bool, ?ops:String ) {
		
		if ( show ) {
			dia_invite.dialog( 'open' );
			dia_invite.attr( 'ops', ops );
			dia_invite.find( '#txt_from' ).html( ops.split(',')[0] );
			var targetAry = ops.split(',');
			targetAry.shift();
			targetAry.unshift( '你' );
			dia_invite.find( '#txt_output' ).html( targetAry.join(',') );
		}else {
			dia_invite.dialog( 'close' );
		}
	}
	
	function showOnlineOffline( show:Bool ) {
		if ( show ) {
			mc_light.css( 'background-color', 'green' );
		}else {
			mc_light.css( 'background-color', 'red' );
		}
	}
	
	function disabledOpponent() {
		combo_ops.combobox( 'disable' );
	}
	
	function setComboOps( ary_ops:Array<String> ) {
		combo_ops.empty();
		Lambda.foreach( ary_ops, function( str ) {
			combo_ops.append( '<option value="' + str + '">' + str + '</option>' );
			return true;
		});
		combo_ops.combobox();
	}
	
	function createComboDeck( cardSuit ) {
		if ( cardSuit.length == 0 ) {
			combo_deck.empty();
			combo_deck.append( '<option></option>' );
			combo_deck.combobox();
			return;
		}
		var i = 0;
		combo_deck.empty();
		Lambda.foreach( cardSuit, function( deck ) {
			combo_deck.append( '<option value="' + i++ + '">' + deck.name + '</option>' );
			return true;
		});
		combo_deck.combobox( {
			onSelect:function( record ) {
				sendNotification( on_combo_deck_change, { deckId: record.value } );
			}
		});
		combo_deck.combobox('textbox').prop('placeholder', '選擇套牌');
		combo_deck.combobox( 'setValue', 0 );
	}
	
	function showCards( ary_select:Array<Dynamic> ) {
		if ( ary_select == null ) return;
		mc_detailContainer.empty();
		Lambda.foreach( ary_select, function( card:Dynamic ) {
			showCard( card );
			return true;
		});
	}
	
	function closeNorthPanel() {
		getViewComponent().layout( 'collapse', 'north' );
	}
	
	function showCard( card ) {
		if ( card == null ) return;
		if ( !card.back || ( card.owner == SocketController.playerId && card.viewer == SocketController.playerId )) {
			var game = card.extra[2];
			var cardId = card.extra[0];
			var url = Main.getCardImageUrlWithPackage( game, cardId );
			if ( url == null ) url = '../common/images/card/cardback_0.png';
			var div = Main.j( '<div></div>' );
			div.css( 'position', 'relative' );
			
			var img = Main.j( '<img></img>' );
			img.attr( 'src', url );
			img.css( 'position', 'relative' );
			img.css( 'top', '0' );
			img.css( 'left', '0' );
			img.load( function() {
				img.css( 'width', '100%' );
			});
			div.append( img );
			
			var img2 = Main.j( '<img></img>' );
			img2.attr( 'src', 'images/sampleTxt.png' );
			img2.css( 'position', 'absolute' );
			img2.load( function() {
				img2.css( 'width', '100%' );
				img2.css( 'top', '0' );
				img2.css( 'left', '0' );
			});
			div.append( img2 );
			
			if ( game != 'other' && game != 'poker' ) {
				var detail = Main.getCardDetailById( game, cardId );
				var detaildiv:Dynamic = Main.j( '<div></div>' );
				detaildiv.css( 'position', 'relative' );
				detaildiv.css( 'width', '95%' );
				detaildiv.css( 'top', '0' );
				detaildiv.css( 'left', '0' );
				detaildiv.css( 'font-size', '16px' );
				var str:String = '目前沒有資料或者資料還沒準備好哦，請稍後再點!';
				if ( detail != null ) {
					str = '';
					switch( game ) {
						case 'ws':
							str += detail.id;
							str += '<br/>';
							str += detail.text;
						case 'sgs':
							str += detail.name;
							str += '<br/>';
							str += detail.type;
							str += '<br/>';
							str += detail.text;
						case 'dragonZ':
							str += detail.id;
							str += '<br/>';
							str += detail.name;
							str += '<br/>';
							str += detail.type;
							str += '<br/>';
							str += detail.descrition;
						case 'crusade':
							str += detail.info_2;
							str += '<br/>';
							str += detail.info_4;
							str += '<br/>';
							str += detail.info_16;
						case 'gundamWar':
							str += detail.name;
							str += '<br/>';
							str += detail.context;
						case 'gundamWarN':
							str += detail.info_2;
							str += '<br/>';
							str += detail.trans;
							str += '<br/>';
							str += detail.info_12;
						case 'magic':
							str += detail.id;
							str += '<br/>';
							str += detail.text;
						case 'battleSpirits':
							str += detail.info_41 + ' ' + detail.info_2;
							str += '<br/>';
							str += detail.info_5 + ' ' + detail.info_25 + ' ' + detail.info_3;
							str += '<br/>';
							str += detail.info_7 + ' ' + detail.info_8;
							str += '<br/>';
							str += detail.info_9 + ' ' + detail.info_10;
							str += '<br/>';
							str += detail.info_11 + ' ' + detail.info_12;
							str += '<br/>';
							str += detail.info_42;
						case 'sangoWar': 
							str += detail.cname + ' ' + detail.atype;
							str += '<br/>';
							str += detail.content;
							str += '<br/>';
							str += detail.counter;
						case 'yugioh': 
							str += detail.name;
							str += '<br/>';
							str += 'level ' + detail.level;
							str += '<br/>';
							str += detail.type;
							str += '<br/>';
							str += detail.desc;
					}
				}else {
					switch( game ) {
						//data type card
						case null:
							str = card.extra[0];
							str += '<br/>';
							str += card.extra[1];
					}
				}
				detaildiv.html( str );
				div.append( detaildiv );
			}
			
			mc_detailContainer.append( div );
		}
	}
	
	function onSocketError() {
		Main.j( '#btn_connect' ).linkbutton( 'enable' );	
		Main.alert( '已斷線，請重新連線' );
	}
	
	function onSocketSuccess() {
		Main.slide( '連線成功' );
		Main.j( '#btn_connect' ).linkbutton( 'disable' );
		Main.j( '#btn_login' ).linkbutton( 'disable' );
		Main.j( '#btn_notLogin' ).linkbutton( 'disable' );
	}
}