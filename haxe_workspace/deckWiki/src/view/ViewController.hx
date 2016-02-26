package view;

import haxe.Json;
import haxe.Timer;
import js.Browser;
import model.ModelController;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;

using Lambda;
using Reflect;
using StringTools;
/**
 * ...
 * @author vic
 */
class ViewController extends Mediator
{
	public static var do_show_list = 'do_show_list';
	public static var do_show_bigList = 'do_show_bigList';
	public static var do_show_showDetail = 'do_show_showDetail';
	public static var do_show_loading = 'do_show_loading';
	public static var do_show_output = 'do_show_output';
	public static var do_show_alert = 'do_show_alert';
	public static var do_enable_login = 'do_enable_login';
	public static var do_show_auth = 'do_show_auth';
	
	public static var on_item_click = 'on_item_click';
	public static var on_item_over = 'on_item_over';
	public static var on_item_out = 'on_item_out';
	public static var on_input_search_change = 'on_input_search_change';
	public static var on_pag_page_change = 'on_pag_page_change';
	public static var on_btn_output_click = 'on_btn_output_click';
	public static var on_btn_seeCount_click = 'on_btn_seeCount_click';
	public static var on_btn_getShareLink_click = 'on_btn_getShareLink_click';
	public static var on_btn_copy_click = 'on_btn_copy_click';
	public static var on_btn_self_click = 'on_btn_self_click';
	public static var on_btn_login_click = 'on_btn_login_click';
	public static var on_btn_gotoGroup_click = 'on_btn_gotoGroup_click';
	public static var on_btn_gotoDeckManager_click = 'on_btn_gotoDeckManager_click';
	public static var on_btn_addDeck_click = 'on_btn_addDeck_click';
	public static var on_btn_saveDeck_click = 'on_btn_saveDeck_click';
	public static var on_btn_share_deck_click = 'on_btn_share_deck_click';
	
	var j:Dynamic = untyped __js__('$');
	var mc_itemContainer:Dynamic;
	var mc_bigItemContainer:Dynamic;
	var mc_deckDetail:Dynamic;
	var mc_backContainer:Dynamic;
	var mc_deckContainer:Dynamic;
	var dia_output:Dynamic;
	var slt_game:Dynamic;
	var slt_type:Dynamic;
	var pag_page:Dynamic;
	var btn_output:Dynamic;
	var btn_self:Dynamic;
	var btn_login:Dynamic;
	var btn_addDeck:Dynamic;
	var btn_saveDeck:Dynamic;
	var btn_search:Dynamic;
	var btn_seeCount:Dynamic;
	var btn_getShareLink:Dynamic;
	var btn_copy:Dynamic;
	var input_search:Dynamic;
	var input_searchName:Dynamic;
	var input_searchDescribe:Dynamic;
	var dia_saveForm:Dynamic;
	var mc_detail_panel:Dynamic;
	var clickData:Dynamic;
	var iframe_comment:Dynamic;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
		mc_itemContainer = viewComponent.find( '#mc_itemContainer' );
		mc_bigItemContainer = viewComponent.find( '#mc_bigItemContainer' );
		mc_deckDetail = viewComponent.find( '#mc_deckDetail' );
		input_search = viewComponent.find( '#input_searchId' );
		slt_game = viewComponent.find( '#slt_game' );
		slt_type = viewComponent.find( '#slt_type' );
		pag_page = viewComponent.find( '#pag_page' );
		btn_output = viewComponent.find( '#btn_output' );
		btn_self = viewComponent.find( '#btn_self' );
		btn_login = viewComponent.find( '#btn_login' );
		btn_addDeck = viewComponent.find( '#btn_addDeck' );
		btn_saveDeck = viewComponent.find( '#btn_saveDeck' );
		btn_search = viewComponent.find( '#btn_search' );
		btn_seeCount = viewComponent.find( '#btn_seeCount' );
		btn_getShareLink = viewComponent.find( '#btn_getShareLink' );
		btn_copy = viewComponent.find( '#btn_copy' );
		dia_output = viewComponent.find( '#dia_output' );
		mc_backContainer = viewComponent.find( '#mc_backContainer' );
		mc_deckContainer = viewComponent.find( '#mc_deckContainer' );
		input_searchName = viewComponent.find( '#input_searchName' );
		input_searchDescribe = viewComponent.find( '#input_searchDescribe' );
		dia_saveForm = viewComponent.find( '#dia_saveForm' );
		mc_detail_panel = viewComponent.find( '#mc_detail_panel' );
		iframe_comment = viewComponent.find( '#iframe_comment' );
		
		dia_saveForm.dialog( {
			onClose:onCloseDetailForm
		});
		
		var cardbackCount = untyped __js__('admin.cardbackCount' );
		[for ( i in 0...cardbackCount ) i ].foreach( function( bid ) {
			var useId = bid+1;
			var url = '../common/images/card/cardback_' + useId + '.jpg';
			var div = j("#tmpl_back").tmpl({id:useId, url:url });
			div.hide();
			mc_backContainer.append( div );
			return true;
		});
		
		mc_detail_panel.find( '#btn_share' ).click( function() {
			var deckuid = mc_detail_panel.attr( 'uid' );
			sendNotification( on_btn_share_deck_click, { deckuid:deckuid } );
			Helper.trackingEvent( 'on_item_share:' + deckuid );
		});
		
		input_search.textbox( {
			onChange:function( nv, ov ) {
				sendNotification( on_input_search_change, { value:getSearchConditions() } );
			}
		});
		
		input_searchName.textbox( {
			onChange:function( nv, ov ) {
				sendNotification( on_input_search_change, { value:getSearchConditions() } );
			}
		});
		
		input_searchDescribe.textbox( {
			onChange:function( nv, ov ) {
				sendNotification( on_input_search_change, { value:getSearchConditions() } );
			}
		});
		
		slt_game.combobox( {
			valueField: 'game',
			textField: 'name',
			data: [{game:'', name:'不檢索'}].concat( untyped __js__( 'admin.ary_games' )),
			onChange:function( nv, ov ) {
				sendNotification( on_input_search_change, { value:getSearchConditions() } );
			}
		});
		
		slt_type.combobox( {
			onChange:function( nv, ov ) {
				sendNotification( on_input_search_change, { value:getSearchConditions() } );
			}
		});
		
		btn_search.linkbutton( {
			onClick:function( nv, ov ) {
				sendNotification( on_input_search_change, { value:getSearchConditions() } );
			}
		});
		
		pag_page.pagination( {
			onSelectPage:function( number, size ) {
				sendNotification( on_pag_page_change, { number:number, size:size } );
			}
		});
		
		dia_output.dialog();
		dia_output.find( '#btn_gotoGroup' ).click( function() {
			sendNotification( on_btn_gotoGroup_click );
		});
		dia_output.find( '#btn_gotoDeckManager' ).click( function() {
			var deckuid = mc_detail_panel.attr( 'uid' );
			sendNotification( on_btn_gotoDeckManager_click, { deckuid:deckuid } );
		});
		
		btn_seeCount.click( function() {
			sendNotification( on_btn_seeCount_click );
		});
		
		btn_copy.click( function() {
			var deckuid = mc_detail_panel.attr( 'uid' );
			sendNotification( on_btn_copy_click, { deckuid:deckuid } );
			Helper.trackingEvent( 'on_item_output:' + deckuid );
		});
		
		btn_getShareLink.click( function() {
			var deckuid = mc_detail_panel.attr( 'uid' );
			Helper.trackingEvent( 'on_item_share:' + deckuid );
			sendNotification( on_btn_getShareLink_click, {deckuid:deckuid} );
		});
		
		btn_output.click( function() {
			var deckuid = mc_detail_panel.attr( 'uid' );
			sendNotification( on_btn_output_click, { deckuid:deckuid} );
		});
		
		btn_self.click( function() {
			sendNotification( on_btn_self_click );
		});
		
		btn_login.linkbutton( {
			onClick:function() {
				sendNotification( on_btn_login_click );
			}
		});
		
		btn_addDeck.click( function() {
			addDeck( { 
				game:'army',
				name:'default',
				backId:'0',
				cards:[]
			} );
			enableSave( true );
		});
		
		btn_saveDeck.click( function() {
			sendNotification( on_btn_saveDeck_click, { savedata:getSaveDataFromDom() } );
		});
		
		viewComponent.find( '#layout_main' ).layout( {
			onCollapse:function() {
				viewComponent.find( '#layout_main' ).attr( 'expand', false );
			},
			onExpand:function() {
				viewComponent.find( '#layout_main' ).attr( 'expand', true );
			}
		});
		
		hideCardBackContainer();
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 
			do_show_list,
			do_show_bigList,
			do_show_showDetail,
			do_show_loading,
			do_show_output,
			do_show_alert,
			do_enable_login,
			do_show_auth,
			ModelController.on_loadPublic_error,
			ModelController.on_facebook_login,
			ModelController.on_cardsuit_load,
			ModelController.on_cardsuit_save_success,
			ModelController.on_copy_success
		];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case ModelController.on_copy_success:
				var name = notification.getBody().name;
				var cards = notification.getBody().cards;
				var game = notification.getBody().game;
				addDeck( { 
					game:game,
					name:name,
					backId:'0',
					cards:cards
				} );
				enableSave( true );
				showManagerPanel( true );
				showMessage( '收錄成功，別忘了按儲存按鈕哦!' );
			case ModelController.on_loadPublic_error:
				alert( notification.getBody().err );
			case ModelController.on_cardsuit_save_success:
				showMessage( '存檔成功' );
				enableSave( false );
			case ModelController.on_cardsuit_load:
				showDeckList( notification.getBody().cardsuit, true );
				enableAddDeck( true );
				showAllCardback();
			case ModelController.on_facebook_login:
				enableLogin( false );
				showMessage( '登入成功' );
			case str if ( str == do_show_alert ):
				alert( notification.getBody().alert );
			case str if ( str == do_show_auth ):
				showAuth( notification.getBody().show );
			case str if ( str == do_enable_login ):
				enableLogin( notification.getBody().enable );
			case str if ( str == do_show_output ):
				if ( notification.getBody().str == null ) {
					alert( '請選擇套牌哦!' );
				}else {
					Helper.trackingEvent( 'on_item_output:' + notification.getBody().uid );
					setOutput( notification.getBody().str );
				}
			case str if( str == do_show_loading ):
				showLoading( notification.getBody().show );
			case str if ( str == do_show_bigList ):
				clickData = notification.getBody().clickData;
				openFBComment( clickData.uid );
				showBigList( clickData.uid, notification.getBody().game, notification.getBody().ary_showData );
				showDetail( notification.getBody().clickData );
			case str if ( str == do_show_list ):
				setPagPage( notification.getBody().total, notification.getBody().pageNumber );
				showList( notification.getBody().data );
			case str if ( str == do_show_showDetail ):
				showDetail( notification.getBody().showDetail );
		}
	}
	
	function openFBComment( uid:String ) {
		var url = 'comment.html?url=' + 'https://' + Browser.window.location.host + Browser.window.location.pathname + '?uid=' + uid;
		iframe_comment.attr( 'src', url );
	}
	
	function onCloseDetailForm( e ) {
		dia_saveForm.find( '#btn_confirm' ).off( 'click' );
	}
	
	function showAuth( show ) {
		if ( show ) {
			btn_seeCount.show();
		}else {
			btn_seeCount.hide();
		}
		
	}
	
	function showDetailForm( show:Bool, ?dom:Dynamic, ?name:String ) {
		if ( show ) {
			dia_saveForm.dialog( 'open' );
			dia_saveForm.find( '#txt_name' ).html( name );
			dia_saveForm.find( '#slt_game' ).combobox( 'setValue', dom.attr( 'type' ));
			dia_saveForm.find( '#txt_desc' ).textbox( 'setValue', dom.attr( 'desc' ));
			dia_saveForm.find( '#btn_confirm' ).click( function() {
				var deckType = dia_saveForm.find( '#slt_game' ).combobox('getValue');
				var deckDesc = dia_saveForm.find( '#txt_desc' ).textbox('getValue');
				dom.attr( 'type', deckType );
				dom.attr( 'desc', deckDesc );
				showDetailForm( false );
			});
		}else {
			dia_saveForm.dialog( 'close' );
		}
	}
	
	function showDeckList( retModel:Dynamic, ?sort:Bool = false ) {
		var oldtop = mc_deckContainer.parent().parent().scrollTop();
		mc_deckContainer.empty();
		
		if( sort ){
			retModel.cardSuit.sort( function( aobj, bobj ){
				return aobj.game.localeCompare( bobj.game );
			});
		}
		
		retModel.cardSuit.forEach( function( deck ) {
			addDeck( deck );
		});
		mc_deckContainer.parent().parent().scrollTop( oldtop );
	}
	
	function checkSameName() {
		var ary_hasName = [];
		mc_deckContainer.children().each( function( id, dom:Dynamic ) {
			dom = j( dom );
			var deckname = dom.find( '#txt_name' ).textbox('getValue' );
			if ( ary_hasName.has( deckname )) {
				deckname += '_' + Helper.getUUID();
				dom.find( '#txt_name' ).textbox('setValue', deckname  ); 
			}
			ary_hasName.push( deckname );
		});
	}
	
	function getSaveDataFromDom() {
		checkSameName();
		var savefile = { 
			cardSuit:[]
		};
		mc_deckContainer.children().each( function( id, dom ) {
			dom = j( dom );
			var cardstr:String = dom.find( '#txt_cards' ).textbox('getValue' );
			cardstr = ~/\\t/g.replace( cardstr, '' ); //format tab
			cardstr = '[' + cardstr + ']';
			savefile.cardSuit.push( {
				uid:dom.attr( 'uid' ),
				type:dom.attr( 'type' ),
				desc:dom.attr( 'desc' ),
				name:dom.find( '#txt_name' ).textbox('getValue' ),
				game:dom.find( '.easyui-combobox' ).combobox('getValue' ),
				cards: Json.parse( cardstr ),
				backId:dom.find( '#txt_back' ).textbox('getValue' ),
				'public':dom.find( '#btn_public' ).hasClass( 'l-btn-selected' )
			});
		});
		return savefile;
	}
	
	function addDeck( deckModel:Dynamic ) {
		deckModel.games = untyped __js__( 'admin.ary_games' );
		var dom:Dynamic = j("#tmpl_deck" ).tmpl( deckModel );
		mc_deckContainer.append( dom );
		dom.attr( 'type', deckModel.type );
		dom.attr( 'desc', deckModel.desc );
		dom.attr( 'uid', deckModel.uid );
		dom.find( '#btn_public' ).linkbutton( {
			selected: deckModel.field( 'public' ) == null ? false : deckModel.field( 'public' ),
			onClick:function() {
				var _this:Dynamic = j( untyped __js__( '$(this)' ));
				if ( _this.parent().attr( 'uid' ) == '' || _this.parent().attr( 'uid' ) == null  ) {
					_this.parent().attr( 'uid', Helper.getUUID() );
				}
				enableSave( true );
			}
		});
		
		dom.find( '.easyui-tooltip' ).tooltip({position:'top'});
		dom.find( '.easyui-linkbutton' ).linkbutton();
		dom.find( '#btn_remove' ).linkbutton( {
			onClick:function() {
				var _this = j( untyped __js__( '$(this)' ));
				_this.parent().remove();
				enableSave( true );
			}
		});
		dom.find( '#btn_detail' ).linkbutton( {
			onClick:function() {
				var _this = j( untyped __js__( '$(this)' ));
				var deckName = _this.parent().find( '#txt_name' ).textbox('getValue' );
				showDetailForm( true, _this.parent(), deckName );
				enableSave( true );
			}
		});
		
		dom.find( '.easyui-combobox' ).combobox( {
			value:deckModel.game,
			onSelect:function() {
				enableSave( true );
			}
		});
		
		dom.find( '.easyui-textbox' ).textbox({
			onChange:function( nv, ov ) {
				var _this = untyped __js__( '$(this)' );
				switch( _this.attr( 'id' ) ){
					case 'txt_cards':
						try {
							Json.parse( '[' + nv + ']' );
							enableSave( true );
						}catch( e:Dynamic ){
							alert("格式輸入錯誤，請檢查");
							_this.textbox( {
								value:''
							});
						}
					case _:
						enableSave( true );
				}
				
			}
		});
		var cardstr = (function(){
			var str = Json.stringify( deckModel.cards );
			str = str.substr( 1, str.length - 2 );
			return str;
		})();
		
		dom.find( '#txt_cards' ).textbox( {
			value:cardstr
		});
		dom.find( '#txt_name' ).textbox( {
			value:deckModel.name
		});
		
		if ( !Helper.isAdmin() ) {
			dom.find( '#txt_back' ).parent().hide();
		}
	}
	
	function hideCardBackContainer() {
		if( !Helper.isAdmin() )
			mc_backContainer.parent().hide();
	}
	
	function showAllCardback() {
		mc_backContainer.find( '.cardback' ).show();
	}
	
	function enableLogin( enable:Bool ) {
		if ( enable ) {
			btn_login.linkbutton( 'enable' );
		}else {
			btn_login.linkbutton( 'disable' );
		}
	}
	
	function enableSave( enable:Bool ) {
		if ( enable ) {
			btn_saveDeck.linkbutton( 'enable' );
		}else {
			btn_saveDeck.linkbutton( 'disable' );
		}
	}
	
	function enableAddDeck( enable:Bool ) {
		if ( enable ) {
			btn_addDeck.linkbutton( 'enable' );
		}else {
			btn_addDeck.linkbutton( 'disable' );
		}
	}
	
	function alert( msg:String ) {
		j.messager.alert('提示',msg);
	}
	
	function setOutput( deckstr:String ) {
		dia_output.dialog('open' );
		deckstr = deckstr.replace( '[', '' ).replace( ']', '' );
		dia_output.find( '#input_output' ).textbox('setValue', deckstr );
	}
	
	function showLoading( show:Bool ) {
		if ( show ) {
			j.messager.progress( {
				msg:'讀取資料中，請稍等…'
			} );
		}else {
			j.messager.progress( 'close' );
		}
	}
	
	function setPagPage( total, pageNumber ) {
		if ( pageNumber != null ) {
			pag_page.pagination( 'refresh', {
				total:total,
				pageNumber:pageNumber
			});
		}else{
			pag_page.pagination( 'refresh', {
				total:total
			});
		}
	}
	
	function getSearchConditions() {
		return {
			author:input_search.textbox('getValue' ),
			deckName:input_searchName.textbox('getValue' ),
			describe:input_searchDescribe.textbox('getValue' ),
			game:slt_game.combobox( 'getValue' ),
			type:slt_type.combobox( 'getValue' )
		}
	}
	
	function showDetail( detail:Dynamic ) {
		if ( detail != null ) {
			mc_detail_panel.show();
			mc_detail_panel.attr( 'uid', detail.id );
			mc_detail_panel.find( '#txt_id' ).html( detail.username );
			mc_detail_panel.find( '#txt_name' ).html( detail.name );
			mc_detail_panel.find( '#txt_type' ).html( detail.typeName );
			mc_detail_panel.find( '#txt_desc' ).html( detail.desc );
			mc_detail_panel.find( '.shareTxt' ).eq(0).html( detail.viewCount );
			mc_detail_panel.find( '.shareTxt' ).eq(1).html( detail.shareCount );
			mc_detail_panel.find( '.shareTxt' ).eq(2).html( detail.outputCount );
			
			mc_detail_panel.find( '#img_title' ).attr( 'src', Helper.getImageUrlByGameAndId( detail.game, detail.cards[0] ));
		}
	}
	
	function showBigList( uid, game:String, ary_showData:Array<Dynamic> ) {
		mc_itemContainer.find( '[id=' + uid + ']' ).find( '#mc_readInfo' ).hide();
		
		mc_bigItemContainer.empty();
		ary_showData.foreach( function( item ) {
			var dom:Dynamic = Helper.createDetail( game, item );
			if ( item.noData != null && item.noData ) {
				dom.tooltip( {
					position: 'top',
					content: '點擊取得詳細資料!'
				});
				dom.click( function() {
					dom.tooltip( 'hide' );
					sendNotification( on_item_click, { id:uid, game:game, doLoad:true } );
				});
			}
			dom.find('#mc_detail > div[game=' + game + ']').hide();
			dom.find('#mc_black').hide();
			mc_bigItemContainer.append( dom );
			return true;
		});
		overListener( game );
		showManagerPanel( false );
		Helper.trackingEvent( 'on_item_view:' + uid );
	}
	
	function showManagerPanel( show ) {
		if ( show ) {
			if ( viewComponent.find( '#layout_main' ).attr( 'expand' ) == null || viewComponent.find( '#layout_main' ).attr( 'expand' ) == 'false' ) {
				viewComponent.find( '#layout_main' ).layout( 'expand', 'east' );
			}
		}else {
			viewComponent.find( '#layout_main' ).layout( 'collapse', 'east' );
		}
	}
	
	function overListener( game ){
		mc_bigItemContainer.find('.big_card_root').off( 'mouseover' );
		mc_bigItemContainer.find('.big_card_root').off( 'mouseout' );
		mc_bigItemContainer.find('.big_card_root').mouseover( function( e ) {
			j( e.currentTarget ).find('#mc_detail > div[game=' + game + ']').show();
			j( e.currentTarget ).find('#mc_black').show();
		});
		mc_bigItemContainer.find('.big_card_root').mouseout( function( e ){
			hideAllDetail( game );
		});
	}
	
	function hideAllDetail( game ){
		mc_bigItemContainer.find('#mc_detail > div[game=' + game + ']').hide();
		mc_bigItemContainer.find('.big_card_root > #mc_black').hide();
	}
	
	function showList( data:Array<Dynamic>) {
		mc_itemContainer.empty();
		data.foreach( function( item ) {
			var dom:Dynamic = Helper.createItem( item );
			dom.mouseover( function(e) {
				var dom = j( e.currentTarget );
				dom.css( 'border', '1px solid yellow' );
				sendNotification( on_item_over, { id:dom.attr('id'), game:dom.attr('game' ) } );
			});
			dom.mouseout( function(e) {
				var dom = j( e.currentTarget );
				dom.css( 'border', '1px solid gray' );
				showDetail( clickData );
				sendNotification( on_item_out, { id:dom.attr('id'), game:dom.attr('game' ) } );
			});
			dom.click( function( e ) {
				var dom = j(e.currentTarget );
				sendNotification( on_item_click, { id:dom.attr('id'), game:dom.attr('game' ), doLoad:false } );
			});
			
			if ( item.read != null ) {
				if ( !item.read ) dom.find( '#mc_readInfo' ).show();
				else dom.find( '#mc_readInfo' ).hide();
			}
			
			mc_itemContainer.append( dom );
			return true;
		});
	}
	
	function showMessage( msg ){
		j.messager.show({
			title:'提示',
			msg: msg,
			timeout:2000,
			showType:'slide'
		});
	}
}