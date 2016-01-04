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
	
	public static var on_item_click = 'on_item_click';
	public static var on_item_over = 'on_item_over';
	public static var on_input_search_change = 'on_input_search_change';
	public static var on_pag_page_change = 'on_pag_page_change';
	
	var j:Dynamic = untyped __js__('$');
	var mc_itemContainer:Dynamic;
	var mc_bigItemContainer:Dynamic;
	var mc_deckDetail:Dynamic;
	var input_search:Dynamic;
	var slt_game:Dynamic;
	var slt_type:Dynamic;
	var pag_page:Dynamic;

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
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 
			do_show_list,
			do_show_bigList,
			do_show_showDetail,
			do_show_loading
		];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
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
			switch( game ) {
				case 'sangoWar':
					
			}
			var dom = Helper.createDetail( game, item );
			dom.find('#mc_detail > div[game=' + game + ']').hide();
			dom.find('#mc_black').hide();
			mc_bigItemContainer.append( dom );
			overListener( game );
			return true;
		});
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
}