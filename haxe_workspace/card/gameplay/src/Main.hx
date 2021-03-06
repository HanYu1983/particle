package;

import haxe.Json;
import haxe.Timer;
import js.Browser;
import js.html.BarProp;
import js.html.NotifyPaintEvent;
import js.Lib;
import view.UI;
import model.Model;
import controller.*;
import org.puremvc.haxe.patterns.facade.Facade;

using Lambda;
using Reflect;
/**
 * ...
 * @author vic
 */
class Main 
{
	
	public static inline var on_getSuit_success = 'on_getSuit_success';
	public static inline var on_createDeck_click = 'on_createDeck_click';
	public static inline var on_receiveOps = 'on_receiveOps';
	public static inline var on_save_click = 'on_save_click';
	public static inline var on_load_click = 'on_load_click';
	public static inline var on_startTimer_click = 'on_startTimer_click';
	public static inline var on_timer_update = 'on_timer_update';

	public static var j:Dynamic = untyped __js__('$');
	
	public static var fbid = '';
	public static var token = '';
	public static var otherPlayerId = '';
	
	public static var currentSelect = 'fighter';
	public static var cardSuits:Dynamic = {};
	public static var cardSuit = null;
	public static var cardSuitsDetails:Dynamic = {};
	public static var cardSuitsDetailsIsLoading:Dynamic = {};
	
	static var ary_ops:Array<String>;
	
	private var timer:Timer;
	
	function new() {
		
		Browser.document.addEventListener("contextmenu", function(e){
			e.preventDefault();
		}, false);
		
		j( Browser.document ).ready( function() {
			Facade.getInstance().registerMediator( new MainController( null, j( '#container_cards' ) ) );
			Facade.getInstance().registerMediator( new SocketController( 'SocketController' ) );
			
			Facade.getInstance().registerMediator( new Model( 'model' ));
			Facade.getInstance().registerMediator( new UI( 'UI', j('.easyui-layout')) );
			
			openLoading( '準備中...請稍等' );
			var fbappId = untyped __js__( 'config.fbid[config.fbid.which]' );
			CallJs.myapp_facebook_init( fbappId, function() {
				updateGameUI( currentSelect );
				closeLoading();
				prepareCardsuit( CallJs.cardSuit_defaultModel().cardSuit );
				slide( '所有卡牌準備完畢，登入並選擇填入對手的id後，才能開始創建套牌哦!' );
			});
			
			Browser.window.setField( 'onHtmlClick', onHtmlClick );
			
			if ( CallJs.getCookie( 'otherPlayerId' ) != null ) {
				ary_ops = Json.parse( CallJs.getCookie( 'otherPlayerId' ));
				Facade.getInstance().sendNotification( on_receiveOps, { ary_ops:ary_ops } );
			}else {
				ary_ops = [];
			}
			
			timer = new Timer( 1000 );
			timer.run = function(){
				Facade.getInstance().sendNotification( on_timer_update );
			}
		});
	}
	
	public static function changePlayer( player:String ) {
		SocketController.playerId = player;
	}
	
	public static function selectOps( ops:String ) {
		try {
			SocketController.otherPlayerIds = ops.split(',');
			Facade.getInstance().sendNotification( SocketController.setOpponents, SocketController.otherPlayerIds );
//			j( '#btn_connect' ).linkbutton( 'enable' );
			otherPlayerId = ops;
		}catch ( e:Dynamic ) {
			alert( '對手欄位格式錯誤! 請檢查!' );
		}
	}
	
	public static function setReceiveInvitation( otherIds ) {
		//CallJs.api_startReceiveInvitation( SocketController.playerId, , function( err, data ) {
		CallJs.api_startReceiveInvitation( SocketController.playerId, otherIds, function( err, data ) {
			if ( err == '收到的名稱和目前的名稱一樣' ) {
				slide( '已經互相連線成功!' );
				//ignore
				return;
			} else if ( err != null ) {
				trace(err);
			} else {
				Facade.getInstance().sendNotification( UI.do_show_recevie, {show:true, ops: data } );
			}
			//Facade.getInstance().sendNotification( MainController.on_been_invite, { inviteId:data } );
			//Facade.getInstance().sendNotification( SocketController.do_startHeartbeat );
		});
	}
	
	public static function saveOpponentToCookie( otherPlayerId ) {
		if ( ary_ops.indexOf( otherPlayerId ) == -1 ) {
			ary_ops.push( otherPlayerId );
			if ( ary_ops.length > 10 ) {
				ary_ops.shift();
			}
			Facade.getInstance().sendNotification( on_receiveOps, { ary_ops:ary_ops } );
		}
		CallJs.setCookie( 'otherPlayerId', Json.stringify( ary_ops ) );
	}
	
	public static function createSelfDeck( deckId:Int ) {
		if ( cardSuit == null ) return;
		var deck = cardSuit[deckId];
		if ( deck == null ) return;
		createItem( Tool.createDataFromDeck( deck, SocketController.playerId ) );
	}
	
	public static function loadDetail( game:String ) {
		if ( cardSuitsDetailsIsLoading.field( game ) != null ) return;
		cardSuitsDetailsIsLoading.setField( game, true );
		if ( cardSuitsDetails.field( game ) == null ) {
			CallJs.cardinfoloader_load( game, 'ch', onLoadGameCallback( game ) );
		}
	}
	
	public static function onLoadGameCallback ( game:String ) {
		return function( err, _cardlist ) {
			Reflect.setField( cardSuitsDetails, game, _cardlist );
		}
	}
	
	public static function getCardDetailById( game:String, cid:String ):Dynamic {
		
		cid = StringTools.replace( cid, '.jpg', '' );
		loadDetail( game );
		if ( cardSuitsDetails.field( game ) == null ) return null;
		return Lambda.find( cardSuitsDetails.field( game ), function( cardDetail ) {
			return cardDetail.id.indexOf( cid ) == 0;
		});
	}
	
	function isCanCallTimer():Bool{
		return CallJs.api_getTimerContext() != null;
	}
	
	function onHtmlClick( type:String, ?params ) {
		switch( type ) {
			case 'onResetTimerClick':
				CallJs.api_resetTimer( SocketController.playerId, SocketController.otherPlayerIds, function( err, data ) {
					if ( err != null )	alert( err );
				});
			case 'onStopTimerClick':
				if ( !isCanCallTimer() ) return;
				CallJs.api_stopTimer( SocketController.playerId, SocketController.otherPlayerIds, function( err, data ) {
					if ( err != null )	alert( err );
				});
			case 'onStartTimerClick':
				Facade.getInstance().sendNotification( on_startTimer_click );
				CallJs.api_resetTimer( SocketController.playerId, SocketController.otherPlayerIds, function( err, data ) {
					if ( err != null )	alert( err );
					else{
						CallJs.api_startTimer( SocketController.playerId, SocketController.otherPlayerIds, function( err, data ) {
							if ( err != null )	alert( err );
							else{
								Facade.getInstance().sendNotification( SocketController.sendMessage, { type:'chat', msg: { id:SocketController.playerId, msg:'開始計時!' } } );
							}
						});
					}
				});
			case 'onSwitchTimerClick':
				if ( !isCanCallTimer() ) return;
				CallJs.api_switchUser( SocketController.playerId, SocketController.otherPlayerIds, function( err, data ) {
					if ( err != null )	alert( err );
					else{
						Facade.getInstance().sendNotification( SocketController.sendMessage, { type:'chat', msg: { id:SocketController.playerId, msg:'切換玩家嘍~' } } );
					}
				});
			case 'onBtnLoadGameClick':
				currentSelect = params;
				chooseCardSuit( params );
			case 'onBtnLoadClick':
				Facade.getInstance().sendNotification( on_load_click );
			case 'onBtnRecordClick':
				//'public':dom.find( '#btn_public' ).hasClass( 'l-btn-selected' )
				//trace( j('#btn_record' ).hasClass( 'l-btn-selected' ) );
			case 'onBtnSaveClick':
				Facade.getInstance().sendNotification( MainController.do_getItemsString, {
					callback:function( str ) {
						Facade.getInstance().sendNotification( on_save_click, { str:str } );
					}
				} );
			case 'onBtnInviteServer':
				if ( SocketController.playerId == 'smart' || otherPlayerId == '' ) {
					slide( '請先登入fb或者創建臨時id且並且填入對手' );
					return;
				}
				
				Facade.getInstance().sendNotification( SocketController.do_startHeartbeat );
				setReceiveInvitation( SocketController.otherPlayerIds.join(',') );
				CallJs.api_invite( SocketController.playerId, SocketController.otherPlayerIds, function( err, data ) {
					if ( err != null )	alert( err );
				});
				saveOpponentToCookie( otherPlayerId );
			case 'onBtnStartServer':
				if ( SocketController.playerId == 'smart' ) {
					slide( '請先登入fb或者創建臨時id' );
					return;
				}
				setReceiveInvitation('');
				Facade.getInstance().sendNotification( SocketController.createPlayerSocket, SocketController.playerId );
				
			case 'onBtnNotLoginClick':
				j( '#txt_id' ).textbox( 'setValue', getId() );
			case 'onBtnLoginClick':
				openLoading( '登入並讀取資料中...' );
				
				CallJs.myapp_facebook_login( function( ret ) {
					fbid = ret.authResponse.userID;
					token = ret.authResponse.accessToken;
					
					j( '#txt_id' ).textbox( 'setValue', fbid );
					
					CallJs.cardSuit_load2( fbid, token, handleResponse( function( ret ) {
						
						prepareCardsuit( ret.cardSuit );
						j( '#btn_login' ).linkbutton( 'disable' );
						j( '#btn_notLogin' ).linkbutton( 'disable' );
						closeLoading();
					}));
				});
				/*
			case 'onBtnLoadMagicClick':
				currentSelect = 'magic';
				chooseCardSuit( 'magic' );
			case 'onBtnLoadFighterClick':
				currentSelect = 'fighter';
				chooseCardSuit( 'fighter' );
			case 'onBtnLoadArmyClick':
				currentSelect = 'army';
				chooseCardSuit( 'army' );
			case 'onBtnLoadGundamWarClick':
				currentSelect = 'gundamWar';
				chooseCardSuit( 'gundamWar' );
			case 'onBtnLoadGundamWarNClick':
				currentSelect = 'gundamWarN';
				chooseCardSuit( 'gundamWarN' );
			case 'onBtnLoadSangoWarClick':
				currentSelect = 'sangoWar';
				chooseCardSuit( 'sangoWar' );
			case 'onBtnLoadYugiohClick':
				currentSelect = 'yugioh';
				chooseCardSuit( 'yugioh' );	
			case 'onBtnLoadBattleSpiritsClick':
				currentSelect = 'battleSpirits';
				chooseCardSuit( 'battleSpirits' );	
			case 'onBtnLoadCrusadeClick':
				currentSelect = 'crusade';
				chooseCardSuit( 'crusade' );	
			case 'onBtnLoadDragonZClick':
				currentSelect = 'dragonZ';
				chooseCardSuit( 'dragonZ' );
			case 'onBtnLoadWsClick':
				currentSelect = 'ws';
				chooseCardSuit( 'ws' );
			case 'onBtnLoadSgsClick':
				currentSelect = 'sgs';
				chooseCardSuit( 'sgs' );
				*/
			case 'onBtnCreateDeck':
				Facade.getInstance().sendNotification( on_createDeck_click );
			case 'onBtnTableDeck':
				var str:String = j( "#txt_table" ).textbox( 'getValue' );
				try {
					var obj_table:Array<Dynamic> = Json.parse( str );
					var ary_create:Array<Dynamic> = obj_table.fold( function( curr, first:Array<Dynamic> ) {
						if ( curr.count == null ) curr.count = 1;
						for ( i in 0...curr.count ) {
							var copycurr = Json.parse( Json.stringify( curr ));
							copycurr.owner = SocketController.playerId;
							first.push( copycurr );
						}
						return first;
					}, []);
					createItem( ary_create );
				}catch ( e:Dynamic ) {
					alert( '輸入格式錯誤哦，請檢查!' );
				}
			case 'onBtnCustomDeck':
				var str:String = j( "#txt_custom" ).textbox( 'getValue' );
				str = '[' + str + ']';
				try {
					var createobj:Dynamic = Json.parse( str );
					createItem( Tool.createDataFromDeck( { backId:"0", cards:createobj, game:currentSelect }, SocketController.playerId ) );
				}catch ( e:Dynamic ) {
					alert( '輸入格式錯誤哦，請檢查!' );
				}
			case 'onConcreteDiceClick':
				var ary_data = [for ( i in 0...6 ) i ].map( function( idstr ) {
					return {	extra:['../common/images/createTable/other/dice_01.png',
								'../common/images/createTable/other/dice_02.png',
								'../common/images/createTable/other/dice_03.png',
								'../common/images/createTable/other/dice_04.png',
								'../common/images/createTable/other/dice_05.png',
								'../common/images/createTable/other/dice_06.png'
								], pos:[100, 100], type:'sequence', width:50, height:50 };
				});
				createItem( ary_data );
			case 'onTokenClick':
				var ary_token = [
					'token_0', 'token_0', 'token_0','token_0', 'token_0', 'token_0','token_0', 'token_0', 'token_0','token_0',
					'token_0', 'token_0', 'token_0','token_0', 'token_0', 'token_0','token_0', 'token_0', 'token_0','token_0',
					'token_1', 'token_1', 'token_1','token_1', 'token_1', 'token_1','token_1', 'token_1', 'token_1','token_1',
					'token_1', 'token_1', 'token_1','token_1', 'token_1', 'token_1','token_1', 'token_1', 'token_1','token_1',
					'token_2', 'token_2', 'token_2','token_2', 'token_2', 'token_2','token_2', 'token_2', 'token_2','token_2',
					'token_2', 'token_2', 'token_2','token_2', 'token_2', 'token_2','token_2', 'token_2', 'token_2','token_2'
				];
				var data = ary_token.map( function( idstr ) {
					return { extra:[ idstr, 'other'], pos:[100, 100], type:'token', width:50, height:50, owner:SocketController.playerId };
				});
				createItem( data );
			case 'onShaClick':
				var ary_sangosha = [
										'b1_1_fight', 'b1_1_sanda',
										'b1_2_cold', 'b1_2_double', 'b1_2_gua',
										'b1_3_river', 'b1_3_steal', 
										'b1_4_river', 'b1_4_steal', 
										'b1_5_dragon', 'b1_5_shadow',
										'b1_6_bluejian', 'b1_6_happy', 
										'b1_7_nan', 'b1_7_sa', 
										'b1_8_sa', 'b1_8_sa', 
										'b1_9_sa', 'b1_9_sa', 
										'b1_10_sa', 'b1_10_sa',
										'b1_11_steal', 'b1_11_strong', 
										'b1_12_eight', 'b1_12_river', 
										'b1_13_horse', 'b1_13_nan', 
										'b2_1_fight', 'b2_1_nu', 
										'b2_2_gua', 'b2_2_sa', 'b2_2_shield',
										'b2_3_river', 'b2_3_sa',
										'b2_4_river','b2_4_sa',
										'b2_5_horse', 'b2_5_sa',
										'b2_6_happy', 'b2_6_sa',
										'b2_7_nan', 'b2_7_sa', 
										'b2_8_sa', 'b2_8_sa', 
										'b2_9_sa', 'b2_9_sa',
										'b2_10_sa', 'b2_10_sa',
										'b2_11_sa', 'b2_11_sa',
										'b2_12_dao', 'b2_12_strong',
										'b2_13_dao', 'b2_13_strong',
										'r1_1_spray', 'r1_1_together',
										'r1_2_run','r1_2_run',
										'r1_3_tao', 'r1_3_wugu', 
										'r1_4_tao', 'r1_4_wugu',
										'r1_5_gilin', 'r1_5_redhourse', 
										'r1_6_happy', 'r1_6_tao', 
										'r1_7_born','r1_7_tao',
										'r1_8_born','r1_8_tao',
										'r1_9_born','r1_9_tao',
										'r1_10_sa','r1_10_sa',
										'r1_11_born','r1_11_sa',
										'r1_12_river','r1_12_sanda','r1_12_tao',
										'r1_13_horse','r1_13_run',
										'r2_1_fight','r2_1_nu',
										'r2_2_run','r2_2_run',
										'r2_3_run','r2_3_steal',
										'r2_4_run','r2_4_steal',
										'r2_5_axe','r2_5_run',
										'r2_6_run','r2_6_sa',
										'r2_7_run','r2_7_sa',
										'r2_8_run','r2_8_sa',
										'r2_9_run','r2_9_sa',
										'r2_10_run','r2_10_sa',
										'r2_11_run','r2_11_run',
										'r2_12_draw','r2_12_strong','r2_12_tao',
										'r2_13_hourse','r2_13_sa',
										
										'role_001','role_002','role_003','role_004','role_005',
										'role_006','role_007','role_008','role_009','role_010',
										'role_011','role_012','role_013','role_014','role_015',
										'role_016','role_017','role_018','role_019','role_020',
										'role_021', 'role_022', 'role_023', 'role_024', 'role_025',
										
										'id_0','id_0','id_0','id_0',
										'id_1','id_1',
										'id_3', 'id_3', 'id_3',
										'id_2'
										];
				var data = ary_sangosha.map( function( idstr ) {
					return { extra:[ idstr, '49', 'sanguosha'], pos:[100, 100], type:'card', width:50, height:75, back:false, lock:false, owner:SocketController.playerId };
				});
				createItem( data );
			case 'onPokerClick':
				var ary_poker = [
									'10', '11', '12',
									'13', '14', '15', '16',
									'17', '18', '19', '20',
									'21', '22', '23', '24',
									'25', '26', '27', '28',
									'29', '30', '31', '32',
									'33', '34', '35', '36',
									'37', '38', '39', '40',
									'41', '42', '43', '44',
									'45', '46', '47', '48',
									'49', '50', '51', '52',
									'53', '54', '55', '56',
									'57', '58', '59', '60',
									'61', '62', '62'
									];
				
				var data = ary_poker.map( function( idstr ) {
					return { extra:[ idstr, '34', 'poker'], pos:[100, 100], type:'card', width:50, height:75, back:false, lock:false, owner:SocketController.playerId };
				});
				createItem( data );
		}
		CallJs.googleTracking_click( type );
	}
	
	static function createItem( ary_data ) {
		Facade.getInstance().sendNotification( MainController.do_create_item, Tool.createItemFromData( ary_data ));
	}
	
	function prepareCardsuit( inputCardsuit:Array<Dynamic> ) {
		cardSuits = { };
		Lambda.foreach( inputCardsuit, function( cs ) {
			if ( cardSuits.field( cs.game ) == null ) {
				cardSuits.setField( cs.game, [] );
			}
			cardSuits.field( cs.game ).push( cs );
			return true;
		});
		chooseCardSuit( currentSelect );
		updateGameUI( currentSelect );
	}
	
	function updateGameUI( currentSelect ) {
		switch( currentSelect ) {
			case 'sangoWar':j( '#btn_sango' ).linkbutton( 'select' );
			case 'gundamWar':j( '#btn_gundam' ).linkbutton( 'select' );
			case 'gundamWarN':j( '#btn_gundamN' ).linkbutton( 'select' );
			case 'fighter':j( '#btn_fighter' ).linkbutton( 'select' );
			case 'magic':j( '#btn_magic' ).linkbutton( 'select' );
			case 'army':j( '#btn_army' ).linkbutton( 'select' );
			case 'yugioh':j( '#btn_yugioh' ).linkbutton( 'select' );
			case 'battleSpirits':j( '#btn_battleSpirits' ).linkbutton( 'select' );
			case 'crusade':j( '#btn_crusade' ).linkbutton( 'select' );
			case 'dragonZ':j( '#btn_dragonZ' ).linkbutton( 'select' );
			case 'sgs':j( '#btn_sgs' ).linkbutton( 'select' );
			case 'ws':j( '#btn_ws' ).linkbutton( 'select' );
		}
	}
	/*
	function checkCanCreate() {
		return ( SocketController.playerId != '' && otherPlayerId != '' );
	}
	*/
	function chooseCardSuit( suitName ) {
		cardSuit = Reflect.field( cardSuits, suitName ) ;
		if ( cardSuit == null ) cardSuit = [];
		Facade.getInstance().sendNotification( on_getSuit_success, { cardSuit:cardSuit  } );
	}
	
	public static function showDiceMessage( id:String, dice:Int ) {
		slide( '玩家 ' + id + ' 擲了 ' + dice + ' 點', 4000 );
	}
	
	public static function getCardImageUrlWithPackage( select:String, key:String ):String {
		return CallJs.api_getCardImageWithPackageName( select, key );
		
	}
	
	public static function slide( msg, ?time = 2000 ){
		j.messager.show({
			title:'提示',
			msg: msg,
			timeout:time,
			showType:'slide'
			//default right bottom
			,
			style:{
				left:'45%',
				top: '',
				bottom:0,
			}
		});
	}
	
	public static function alert( msg ) {
        j.messager.alert('錯誤', msg );
	}
	
	public static function openLoading( msg ){
		j.messager.progress({
			title:'',
			msg: msg
		});
	}
	
	public static function closeLoading() {
		j.messager.progress('close');
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
	
	static function main() 
	{
		new Main();
	}
	
	static function getId() {	
		return untyped __js__('leo.utils.generateUUID')();
	}
	
}