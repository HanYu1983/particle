package per.vic.pureMVCref.tableGameModel.view;

import per.vic.pureMVCref.tableGameModel.controller.MainController;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;

using Lambda;
using Reflect;
/**
 * ...
 * @author vic
 */
class BasicItem extends Mediator implements IItem
{
	public static var on_item_click = 'on_item_click';
	public static var on_item_lock = 'on_item_lock';
	
	var _filp:Bool = true;
	var _viewer:String = '';
	var _owner:String = '';

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
		viewComponent.click( function( e ) {
			sendNotification( on_item_click, [viewComponent[0]] );
			onSelect( [viewComponent[0]] );
		});
	}
	
	public function action( value:Dynamic ):Void {
		
	}
	
	public function lock( l:Bool ):Void {
		if ( l ) {
			viewComponent.find( '#img_lock' ).show();
			viewComponent.addClass( 'lock' );
		}else {
			viewComponent.find( '#img_lock' ).hide();
			viewComponent.removeClass( 'lock' );
		}
		sendNotification( on_item_lock, {view:viewComponent, lock:l} );
	}
	
	public function flip( ?f:Bool ):Void 
	{
		_filp = f;
		checkViewerAndShowCard();
	}
	
	public function focus( f:Bool ):Void {
		if ( f ) {
			viewComponent.addClass( 'focus' );
		}else {
			viewComponent.removeClass( 'focus' );
		}
	}
	
	public function move(x:Int, y:Int):Void 
	{
		viewComponent.animate( { left:x, top:y } );
	}
	
	public function rotate( sd:Int, ed:Int ):Void {
		rotateAnimation( sd, ed );
	}
	
	public function setViewer( v:String ):Void 
	{
		_viewer = v;
		checkViewerAndShowCard();
	}
	
	public function setOwner( o:String ):Void 
	{
		_owner = o;
		if ( _owner == Main.playerId ) {
			viewComponent.find( '#img_owner' ).show();
		}else {
			viewComponent.find( '#img_owner' ).hide();
		}
		checkViewerAndShowCard();
	}
	
	public function getViewer():String 
	{
		return _viewer;
	}
	
	public function getOwner():String 
	{
		return _owner;
	}
	
	
	override public function listNotificationInterests():Array<String> 
	{
		return [MainController.on_select_cards ];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			case MainController.on_select_cards:
				onSelect( notification.getBody().field( 'ary_select' ) );
		}
	}
	
	function checkViewerAndShowCard() {
		var showViewerImg = false;
		var showRedback = false;
		if ( !_filp ) {
			//確實的翻牌了，整個打開
			showItemForMe();
		}else {
			if ( _viewer == _owner ) {
				//有人在觀察，這邊確認是不是自己在觀察
				if ( _viewer == Main.playerId ) {
					//有人在觀察，是自己，顯示眼睛
					showItemForMe();
					showViewerImg = true;
				}else {
					//有人在觀察，不是自己，顯示紅背
					hideItemForMe();
					if ( _viewer != '' ) {
						//觀察者不是空白，才顯示紅背
						showRedback = true;
					}
				}
				//無人觀察
			}else {
				hideItemForMe();
			}
		}
		
		if ( _owner == '' ) {
			viewComponent.css( 'opacity', .5 );
		}else {
			viewComponent.css( 'opacity', 1 );
		}
		
		if ( showViewerImg ) viewComponent.find( '#img_viewer' ).show();
		else viewComponent.find( '#img_viewer' ).hide();
		
		if ( showRedback ) viewComponent.find( '#mc_see' ).show();
		else viewComponent.find( '#mc_see' ).hide();
	}
	
	function showItemForMe() {
		viewComponent.find( '.card_back' ).hide();
	}
	
	function hideItemForMe() {
		viewComponent.find( '.card_back' ).show();
	}
	
	function onSelect( ary_select:Array<Dynamic> ) {
		focus( false );
		if ( checkSelf( ary_select ) ) {
			focus( true );
		}
	}
	
	function checkSelf( ary_select:Array<Dynamic> ):Bool {
		if ( ary_select == null ) return false;
		var isSelf = false;
		for ( i in 0...ary_select.length ) {
			var div:Dynamic = ary_select[i] ;
			var itemId = div.id;
			if ( itemId == getMediatorName() ) {
				isSelf = true;
				return isSelf;
			}
		}
		return isSelf;
	}
	
	
	function rotateAnimation( sd:Int, ed:Int ) {
		Main.j({deg: sd}).animate({deg: ed}, {
        duration: 300,
			step: function(now) {
				getViewComponent().css({
					'-moz-transform':'rotate('+now+'deg)',
					'-webkit-transform':'rotate('+now+'deg)',
					'-o-transform':'rotate('+now+'deg)',
					'-ms-transform':'rotate('+now+'deg)',
					'transform':'rotate('+now+'deg)'
				}); 
			}
		});
	}
	
}