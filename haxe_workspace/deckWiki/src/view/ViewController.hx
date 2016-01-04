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
	
	public static var on_item_click = 'on_item_click';
	public static var on_item_over = 'on_item_over';
	
	var j:Dynamic = untyped __js__('$');
	var mc_itemContainer:Dynamic;
	var mc_bigItemContainer:Dynamic;
	var mc_deckDetail:Dynamic;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
		mc_itemContainer = viewComponent.find( '#mc_itemContainer' );
		mc_bigItemContainer = viewComponent.find( '#mc_bigItemContainer' );
		mc_deckDetail = viewComponent.find( '#mc_deckDetail' );
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 
			do_show_list,
			do_show_bigList,
			do_show_showDetail
		];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case str if( str == do_show_bigList ):
				showBigList( notification.getBody().game, notification.getBody().ary_showData );
			case str if( str == do_show_list ):
				showList( notification.getBody().data );
			case str if ( str == do_show_showDetail ):
				showDetail( notification.getBody().showDetail );
		}
	}
	
	function showDetail( detail:Dynamic ) {
		mc_deckDetail.find( '#mc_info1 > div' ).eq(0).html( detail.author );
		mc_deckDetail.find( '#mc_info1 > div' ).eq(1).html( Helper.EnToCh( detail.game ) );
		mc_deckDetail.find( '#mc_info1 > div' ).eq(2).html( detail.name );
		mc_deckDetail.find( '#mc_info1 > div' ).eq(3).html( Helper.EnToCh( detail.type ) );
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