package view;

import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;
import per.vic.js.Jslib;

using Lambda;
using Reflect;
using StringTools;
/**
 * ...
 * @author vic
 */
class UIMediator extends Mediator
{
	public static var do_setRaces = 'do_setRaces';
	public static var do_showDuelDetail = 'do_showDuelDetail';
	
	public static var on_race_click = 'on_race_click';
	public static var on_race_join_click = 'on_race_join_click';
	
	var mc_raceContainer:Dynamic;
	var mc_detailContainer:Dynamic;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
	
		mc_raceContainer = viewComponent.find( '#mc_raceContainer' );
		mc_detailContainer = viewComponent.find( '#mc_detailContainer' );
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 
			do_setRaces,
			do_showDuelDetail
		];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case str if ( str == do_showDuelDetail ):
				var duel = notification.getBody().duel;
				setDetail( duel );
			case str if ( str == do_setRaces ):
				setRaces( notification.getBody() );
		}
	}
	
	function setDetail( duel:Dynamic ) {
		var dom = Jslib.j( '#tmpl_detail' ).tmpl( duel );
		mc_detailContainer.empty().append( dom );
		mc_detailContainer.find( '.easyui-linkbutton' ).linkbutton( {
			onClick:function( e ) {
				var btn = untyped __js__( '$(this)' );
				var duelId = btn.parent().attr( 'id' );
				switch( btn.attr('id')) {
					case 'btn_join':
						sendNotification( on_race_join_click, {duelId:duelId  } );
				}
			}
		});
	}
	
	function setRaces( info:Dynamic ) {
		var doms = Jslib.j('#tmpl_race').tmpl( info );
		mc_raceContainer.empty().append( doms );
		mc_raceContainer.find( '.raceItem' ).click( function( e ) {
			var dom:Dynamic = Jslib.j( e.currentTarget );
			var id = dom.attr( 'id' );
			sendNotification( on_race_click, { id:id } );
		});
	}
}