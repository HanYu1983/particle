package view;

import haxe.Json;
import haxe.Timer;
import js.Browser;
import js.html.Image;
import js.html.KeyboardEvent;
import js.html.rtc.IdentityAssertion;
import model.Model;
import controller.SocketController;
import controller.MainController;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;

using Lambda;
using Reflect;
using StringTools;
/**
 * ...
 * @author vic
 */
class UI extends Mediator
{
	public static inline var do_show_recevie = 'do_show_recevie';
	public static inline var on_combo_deck_change = 'on_combo_deck_change';
	public static inline var on_iconGenerator_close = 'on_iconGenerator_close';
	
	var mc_detailContainer:Dynamic;
	var combo_deck:Dynamic;
	var combo_ops:Dynamic;
	var txt_savestr:Dynamic;
	var btn_record:Dynamic;
	var dia_invite:Dynamic;
	var mc_light:Dynamic;
	var mc_layoutMain:Dynamic;
	var mc_messagePanel:Dynamic;
	var mc_timerView:Dynamic;
	var dia_iconGenerator:Dynamic;
	
	var isShowNotify = false;
	var browserNotify = null;
	var quickCustomToken:Dynamic;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
		getViewComponent().layout();
		
		mc_layoutMain = getViewComponent();
		mc_layoutMain.layout('collapse', 'south');
		
		mc_detailContainer = getViewComponent().find( '#mc_detailContainer' );
		
		mc_messagePanel = getViewComponent().find( '#mc_messagePanel' );
		mc_messagePanel.attr( 'isOpen', 0 );
		mc_messagePanel.find( '#txt_messageInput' ).textbox( {
			onChange:function(nv, ov) {
				if( nv != '' ){
					mc_messagePanel.find( '#txt_messageInput' ).textbox( 'setValue', '' );
					addSingleMessage( SocketController.playerId, nv );
					sendNotification( SocketController.sendMessage, { type:'chat', msg: { id:SocketController.playerId, msg:nv } } );
				}
			}
		});
		
		mc_messagePanel.find( '#mc_quickButton > a' ).linkbutton( {
			onClick:function() {
				var buttonself = untyped __js__('this' );
				var msg = switch( buttonself.id ) {
					case 'btn_isCounter': '尊貴的閣下，請問你要康這張牌嗎？';
					case 'btn_isMyTurn': '到我了嗎？我的朋友。';
					case 'btn_yes': '是，親愛的伙伴!';
					case 'btn_no': '否。';
					case 'btn_turnEnd': '趟~印度！';
					case _:'';
				}
				addSingleMessage( SocketController.playerId, msg );
				sendNotification( SocketController.sendMessage, { type:'chat', msg: { id:SocketController.playerId, msg:msg } } );
			}
		});
		
		mc_messagePanel.find( 'input' ).focus( function() {
			sendNotification( MainController.do_enable_command, { enable:false } );
		});
		
		mc_messagePanel.find( 'input' ).focusout( function() {
			sendNotification( MainController.do_enable_command, { enable:true } );
		});
		
		mc_timerView = Main.j("#mc_timerView" );
		combo_deck = getViewComponent().find( '#combo_deck' );
		combo_ops = getViewComponent().find( '#combo_ops' );
		txt_savestr = getViewComponent().find( '#txt_savestr' );
		txt_savestr.find( 'input' ).focus( function() {
			sendNotification( MainController.do_enable_command, { enable:false } );
		});
		
		txt_savestr.find( 'input' ).focusout( function() {
			sendNotification( MainController.do_enable_command, { enable:true } );
		});
		
		btn_record = getViewComponent().find( '#btn_record' );
		mc_light = Main.j( '#mc_light' );
		dia_invite = Main.j( '#dia_invite' );
		dia_invite.find( '#btn_receive' ).click( function() {
			var opsstr:String = dia_invite.attr( 'ops' );
			sendNotification( MainController.on_been_invite, { inviteId:opsstr } );
			sendNotification( SocketController.do_startHeartbeat );
			showReceive( false );
		});
		
		dia_iconGenerator = Main.j('#dia_iconGenerator');	
		createIconDialog();
		
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
		
		Main.j( Browser.window ).blur( function() {
			isShowNotify = true;
		});
		
		Main.j( Browser.window ).focus( function() {
			isShowNotify = false;
			
			if ( browserNotify != null ) {
				browserNotify.close();
				browserNotify = null;
			}
		});
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 	
					MainController.on_select_cards,
					MainController.on_dice,
					MainController.on_been_invite,
					MainController.on_press,
					SocketController.on_socket_error,
					SocketController.on_socket_success,
					Main.on_getSuit_success,
					Main.on_receiveOps,
					Main.on_timer_update,
					SocketController.on_searchComplete,
					SocketController.on_heartbeat_event,
					SocketController.on_receiveMessage,
					Main.on_startTimer_click,
					Main.on_createDeck_click,
					Main.on_save_click,
					Main.on_load_click,
					do_show_recevie,
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
						Main.slide( id + '說:' + msg );
				}
				if ( isShowNotify && ( browserNotify == null ) ) {
					browserNotify = untyped __js__('google.notify')('你的對戰卡友動作囉! 趕快回去卡牌風雲應戰吧', '../common/images/logo.jpg');
				}
			case SocketController.on_socket_success:
				onSocketSuccess();
			case SocketController.on_socket_error:
				onSocketError();
			case Main.on_startTimer_click:
				mc_layoutMain.layout('collapse', 'north');
			case MainController.on_been_invite:
				combo_ops.combobox( 'setValue', notification.getBody().inviteId );
			case MainController.on_dice:
				Main.showDiceMessage( notification.getBody().playerId, notification.getBody().dice );
			case MainController.on_press:
				var which = notification.getType();
				switch(Std.parseInt(which)){
					case KeyboardEvent.DOM_VK_U:
						createCustomToken();
					case KeyboardEvent.DOM_VK_Y:
						openIconGenerator(true);
				}
			case Main.on_load_click:
				var loadstr = txt_savestr.textbox( 'getValue' );
				try{
					var ary_cmds = Json.parse( loadstr );
					ary_cmds.forEach( function( cmd ) {
						switch( cmd.type ) {
							case 'addItems':
								sendNotification( MainController.do_create_item, cmd.msg );
								Timer.delay( function() {
									sendNotification( MainController.do_update_view );
								}, 1000 );
						}
						return true;
					});
					txt_savestr.textbox( 'setValue', '' );
				}catch ( error:Dynamic ) {
					Main.alert( '格式不對哦!' );
				}
			case Main.on_save_click:
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
			case Main.on_timer_update:
				var tcx:Dynamic = CallJs.api_getTimerContext();
				doUpdateTimerView(tcx);
			case MainController.on_select_cards:
				showCards( notification.getBody().ary_select );
			case Main.on_getSuit_success:
				createComboDeck( notification.getBody().cardSuit );
			case str if ( str == do_show_recevie ):
				showReceive( notification.getBody().show, notification.getBody().ops );
			
		}
	}
	function doUpdateTimerView( timerData:Dynamic ){
		if ( timerData != null ){
			for ( k in timerData.users.fields() ){
				var user:Dynamic = timerData.users.field(k);
				var name = user.field('name').substr(0, 5);
				var t = CallJs.api_getTime( user.field('name') );
				var t2:Dynamic = untyped __js__('new Date')(t);
				var h = t2.getUTCHours();
				var m = t2.getUTCMinutes();
				var s = t2.getUTCSeconds();
				addTimerItem(name, h + "時" + m + "分" + s + "秒");
			}
			if ( timerData.users[timerData.currUser].name == SocketController.playerId ){
				mc_timerView.parent().addClass('timer_focus');
			}else{
				mc_timerView.parent().removeClass('timer_focus');
			}
		}
	}
	
	function createIconDialog(){
		var cookieData:Array<Dynamic> = CallJs.api_loadUserConfig("userIconContents", null);
		if ( cookieData == null ){
			cookieData = [for (i in 0...20) {path:'../common/images/card/token_0.png', content:'天機桐人_1/1_宇'}];
		}
		while (cookieData.count() < 20 ){
			cookieData.push( {path:'../common/images/card/token_0.png', content:'天機桐人_1/1_宇'} );
		}
		for ( i in 0...cookieData.count() ){
			addSingleIconData(i, cookieData[i]);
		}
		dia_iconGenerator.find('.easyui-linkbutton' ).linkbutton({
			onClick:function(){
				var dom = Main.j(untyped __js__('this'));
				var createContent:String = dom.parents('.singleIconData').find('.easyui-textbox').textbox('getValue');
				var path = dom.parents('.singleIconData').find('.img_token').attr('src');
				quickCustomToken = {
					createContent:createContent,
					path:path
				};
				createCustomToken();
				openIconGenerator(false);
				
				//有沒有打開自動關閉
				//var checked:Bool = dom.parents('#dia_iconGenerator').find('.switchbutton-inner').css("margin-left") == '0px';
				//if (checked){
					//openIconGenerator(false);
				//}
			}
		});
		dia_iconGenerator.find('.img_token').click(function(){
			var dom:Dynamic = Main.j(untyped __js__("this"));
			var imgPath:String = dom.attr('src');
			if(imgPath.indexOf("token_0" ) != -1){
				imgPath = StringTools.replace( imgPath, "token_0", "token_1" );
			}else if(imgPath.indexOf("token_1" ) != -1){
				imgPath = StringTools.replace( imgPath, "token_1", "token_2" );
			}else if(imgPath.indexOf("token_2" ) != -1){
				imgPath = StringTools.replace( imgPath, "token_2", "token_0" );
			}
			dom.attr('src', imgPath );
		});
		
		dia_iconGenerator.find('.easyui-textbox' ).textbox();
		dia_iconGenerator.dialog({
			closed:true,
			onClose:function(){
				saveIconContents();
				facade.sendNotification( on_iconGenerator_close );
			}
		});
	}
	
	function saveIconContents(){
		var saveAry = [];
		dia_iconGenerator.find('.easyui-textbox').each( function(){
			var dom:Dynamic = Main.j(untyped __js__("this"));
			var content = dom.textbox('getValue');
			if ( content == "" ) content = "天機桐人_1/1_宇";
			var path = dom.parents('.singleIconData').find('.img_token').attr('src');
			saveAry.push({path:path, content:content});
		});
		CallJs.api_saveUserConfig("userIconContents", saveAry );
	}
	
	function openIconGenerator(open){
		dia_iconGenerator.dialog(open ? 'open' : 'close' );
	}
	
	function createCustomToken(){
		if (quickCustomToken != null){
			facade.sendNotification( MainController.do_create_item, Tool.createItemFromData( [{ extra:[ 'token_0', 'other', quickCustomToken.createContent, quickCustomToken.path], pos:MainController.pos_mouse.slice(0), type:'tokenString', width:50, height:50, owner:SocketController.playerId }] ));
		}else{
			Main.slide('請先按Y來生成一個指示物!');
		}
	}
	
	function addSingleIconData(id, data:Dynamic){
		var icondataDom = Main.j('#tmpl_singleIconData' ).tmpl({
			buttonId:id,
			content:data.content,
			tokenPath:data.path
		});
		dia_iconGenerator.append(icondataDom );
	}
	
	function addSingleMessage( id, msg ) {
		var mc_message = mc_messagePanel.find( '#mc_message' );
		var msgdom = Main.j( '#tmpl_singleMessage' ).tmpl( {
			id:id + ' : ' + Date.now().toString(),
			msg:msg
		} );
		if ( id == SocketController.playerId ) {
			msgdom.find( '#txt_message' ).css( 'color', 'lightblue' );
		}
		mc_message.prepend( msgdom );
	}
	
	function addTimerItem( name:String, time:String ){
		if ( hasTimerItem( name )){
			getTimerItem(name).find('#usingTime').html( time );
		}else{
			var timerView = Main.j( '#tmpl_timerItem' ).tmpl( {
				name:name,
				time:time
			} );
			mc_timerView.prepend( timerView );
		}
	}
	
	function hasTimerItem( name:String ){
		return mc_timerView.find( "#" + name ).field('length') > 0;
	}
	
	function getTimerItem( name ){
		return mc_timerView.find( "#" + name );
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
						case 'gundamCrossWar':
							str += detail.cname + ' ' + detail.size;
							str += '<br/>';
							str += detail.ch;
							str += '<br/>';
							str += detail.abi1;
							str += '<br/>';
							str += detail.abi2;
						case 'sengoku':
							str += detail.cname + ' ' + detail.atype + ' ' +detail.atype2;
							str += '<br/>';
							str += detail.symbol;
							str += '<br/>';
							str += detail.content;
							str += '<br/>';
							str += detail.counter;
						case 'fighter':
							str += detail.cname + ' ' + detail.ctype;
							str += '<br/>';
							str += '狀態能力:' + detail.abi1;
							str += '<br/>';
							str += '武器能力:' + detail.abi2;
							str += '<br/>';
							str += '手牌能力:' + detail.abi3;
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
							str += detail.info_17;
							str += '<br/>';
							str += detail.info_11;
							str += '<br/>';
							str += detail.trans;
							str += '<br/>';
							str += detail.info_12;
						case 'magic':
							str += detail.name + '(' + detail.id + ')';
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
					if ( game == null ){
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