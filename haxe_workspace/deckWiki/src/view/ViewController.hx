package view;

import haxe.Json;
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
	public static var do_enable_login = 'do_enable_login';
	
	public static var on_item_click = 'on_item_click';
	public static var on_item_over = 'on_item_over';
	public static var on_input_search_change = 'on_input_search_change';
	public static var on_pag_page_change = 'on_pag_page_change';
	public static var on_btn_output_click = 'on_btn_output_click';
	public static var on_btn_login_click = 'on_btn_login_click';
	public static var on_btn_gotoGroup_click = 'on_btn_gotoGroup_click';
	public static var on_btn_gotoDeckManager_click = 'on_btn_gotoDeckManager_click';
	public static var on_btn_addDeck_click = 'on_btn_addDeck_click';
	public static var on_btn_saveDeck_click = 'on_btn_saveDeck_click';
	
	var j:Dynamic = untyped __js__('$');
	var mc_itemContainer:Dynamic;
	var mc_bigItemContainer:Dynamic;
	var mc_deckDetail:Dynamic;
	var input_search:Dynamic;
	var slt_game:Dynamic;
	var slt_type:Dynamic;
	var pag_page:Dynamic;
	var btn_output:Dynamic;
	var dia_output:Dynamic;
	var btn_login:Dynamic;
	var btn_addDeck:Dynamic;
	var btn_saveDeck:Dynamic;
	var mc_backContainer:Dynamic;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
		mc_itemContainer = viewComponent.find( '#mc_itemContainer' );
		mc_bigItemContainer = viewComponent.find( '#mc_bigItemContainer' );
		mc_deckDetail = viewComponent.find( '#mc_deckDetail' );
		input_search = viewComponent.find( '#input_search' );
		slt_game = viewComponent.find( '#slt_game' );
		slt_type = viewComponent.find( '#slt_type' );
		pag_page = viewComponent.find( '#pag_page' );
		btn_output = viewComponent.find( '#btn_output' );
		btn_login = viewComponent.find( '#btn_login' );
		btn_addDeck = viewComponent.find( '#btn_addDeck' );
		btn_saveDeck = viewComponent.find( '#btn_saveDeck' );
		dia_output = viewComponent.find( '#dia_output' );
		mc_backContainer = viewComponent.find( '#mc_backContainer' );
		
		[for ( i in 0...49 ) i ].foreach( function( bid ) {
			var useId = bid+1;
			var url = '../common/images/card/cardback_' + useId + '.png';
			var div = j("#tmpl_back").tmpl({id:useId, url:url });
			div.hide();
			mc_backContainer.append( div );
			return true;
		});
		
		input_search.textbox( {
			onChange:function( nv, ov ) {
				sendNotification( on_input_search_change, { value:getSearchConditions() } );
			}
		});
		
		slt_game.combobox( {
			onChange:function( nv, ov ) {
				sendNotification( on_input_search_change, { value:getSearchConditions() } );
			}
		});
		
		slt_type.combobox( {
			onChange:function( nv, ov ) {
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
			sendNotification( on_btn_gotoDeckManager_click );
		});
		
		btn_output.click( function() {
			sendNotification( on_btn_output_click );
		});
		
		btn_login.click( function() {
			sendNotification( on_btn_login_click );
		});
		
		btn_addDeck.click( function() {
			sendNotification( on_btn_addDeck_click );
		});
		
		btn_saveDeck.click( function() {
			sendNotification( on_btn_saveDeck_click );
		});
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 
			do_show_list,
			do_show_bigList,
			do_show_showDetail,
			do_show_loading,
			do_show_output,
			do_enable_login,
			ModelController.on_facebook_login,
			ModelController.on_cardsuit_load,
			ModelController.on_cardsuit_save_success
		];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case ModelController.on_cardsuit_save_success:
				showMessage( '存檔成功' );
				enableSave( false );
			case ModelController.on_cardsuit_load:
				Helper.showDeckList( notification.getBody().cardsuit, true );
				enableAddDeck( true );
				showAllCardback();
			case ModelController.on_facebook_login:
				enableLogin( false );
				showMessage( '登入成功' );
			case str if ( str == do_enable_login ):
				enableLogin( notification.getBody().enable );
			case str if ( str == do_show_output ):
				if ( notification.getBody().str == null ) {
					alert( '請選擇套牌哦!' );
				}else {
					setOutput( notification.getBody().str );
				}
			case str if( str == do_show_loading ):
				showLoading( notification.getBody().show );
			case str if( str == do_show_bigList ):
				showBigList( notification.getBody().game, notification.getBody().ary_showData );
			case str if ( str == do_show_list ):
				setPagPage( notification.getBody().total );
				showList( notification.getBody().data );
			case str if ( str == do_show_showDetail ):
				showDetail( notification.getBody().showDetail );
		}
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
	
	function setPagPage( total ){
		pag_page.pagination( 'refresh', {
			total:total
		});
	}
	
	function getSearchConditions() {
		return {
			author:input_search.textbox('getValue' ),
			game:slt_game.combobox( 'getValue' ),
			type:slt_type.combobox( 'getValue' )
		}
	}
	
	function showDetail( detail:Dynamic ) {
		mc_deckDetail.find( '#mc_info1 > div' ).eq(0).html( detail.author );
		mc_deckDetail.find( '#mc_info1 > div' ).eq(1).html( detail.gameName );
		mc_deckDetail.find( '#mc_info1 > div' ).eq(2).html( detail.name );
		mc_deckDetail.find( '#mc_info1 > div' ).eq(3).html( detail.typeName );
		mc_deckDetail.find( '#mc_info2' ).html( detail.describe );
		mc_deckDetail.find( 'img' ).attr( 'src', Helper.getImageUrlByGameAndId( detail.game, detail.cards[0] ));
	}
	
	function showBigList( game:String, ary_showData:Array<Dynamic> ) {
		mc_bigItemContainer.empty();
		ary_showData.foreach( function( item ) {
			var dom = Helper.createDetail( game, item );
			dom.find('#mc_detail > div[game=' + game + ']').hide();
			dom.find('#mc_black').hide();
			mc_bigItemContainer.append( dom );
			overListener( game );
			return true;
		});
		untyped __js__( 'googleTracking.event' )( 'showBigList:game=' + game );
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
			});
			dom.click( function( e ) {
				var dom = j(e.currentTarget );
				sendNotification( on_item_click, { id:dom.attr('id'), game:dom.attr('game' ) } );
			});
			
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