package view;

import haxe.Json;
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
	public static var on_race_delete_click = 'on_race_delete_click';
	public static var on_race_time_setting = 'on_race_time_setting';
	
	var mc_raceContainer:Dynamic;
	var mc_detailContainer:Dynamic;
	var btn_create:Dynamic;
	
	//detail
	var btn_delete:Dynamic;
	
	//window create
	var win_create:Dynamic;
	var startTime:String;
	var endTime:String;
	var signTime:String;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
	
		mc_raceContainer = viewComponent.find( '#mc_raceContainer' );
		mc_detailContainer = viewComponent.find( '#mc_detailContainer' );
		btn_create = viewComponent.find( '#btn_create' );
		btn_create.linkbutton( {
			onClick:function() {
				win_create.window('open');
				var nowTime = untyped __js__( 'new Date' )();
				startTime = endTime = signTime = nowTime;
				
				win_create.find( '.easyui-calendar' ).calendar( { current: startTime } );
			}
		});
		
		win_create = Jslib.j( '#win_create' );
		win_create.find( '#btn_create' ).linkbutton( {
			onClick:function() {
				var duelName = win_create.find( '#txt_name' ).textbox( 'getValue' );
				sendNotification( on_race_time_setting, { 	name:duelName, 
															startTime:new String( startTime ).split( ' ' ), 
															endTime:new String( endTime ).split( ' ' ), 
															signTime: new String( signTime ).split( ' ' )
															} );
				win_create.window('close' );
			}
		});
		win_create.find( '.easyui-calendar' ).calendar( {
			onChange:function( newDate, oldDate ) {
				var self = untyped __js__( 'this' );
				switch( self.id ) {
					case 'cal_start':
						startTime = newDate;
					case 'cal_end':
						endTime = newDate;
					case 'cal_sign':
						signTime = newDate;
				}
			}
		});
		
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
						sendNotification( on_race_join_click, { duelId:duelId  } );
					case 'btn_delete':
						sendNotification( on_race_delete_click, { duelId:duelId  } );
				}
			}
		});
		
		var replaceData = (function( oriobj, peopleMap:Array<Dynamic> ) {
			var retstr = Json.stringify( oriobj );
			var reg = new EReg('(\\d+)', 'g');
			retstr = reg.map( retstr, function( e ) {
				var nowPosition = reg.matched( 0 );
				var p:Dynamic = peopleMap.find( function( p ) {
					return p.Position == nowPosition;
				});
				if ( p == null ) {
					return '"未決: ' + nowPosition + '"';
				}else {
					return '"' + p.Name + '"';
				}
			});
			return Json.parse( retstr );
		})( duel.DuelTree, duel.Peoples );
		
		if ( duel.DuelTree.Links != null ) {
			Helper.drawTree( replaceData.Nodes, replaceData.Links, dom.find( 'svg' )[0] );
		}
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