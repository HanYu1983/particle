package per.vic.pureMVCref.tableGameModel.controller;

import haxe.Json;
import js.Browser;
import js.html.KeyboardEvent;
import org.puremvc.haxe.interfaces.INotification;
import org.puremvc.haxe.patterns.mediator.Mediator;
import per.vic.pureMVCref.tableGameModel.Tool;
import per.vic.pureMVCref.tableGameModel.view.BasicItem;
import per.vic.pureMVCref.tableGameModel.view.CardItem;
import per.vic.pureMVCref.tableGameModel.view.DataItem;
import per.vic.pureMVCref.tableGameModel.view.IItem;
import per.vic.pureMVCref.tableGameModel.view.SequenceItem;
import per.vic.pureMVCref.tableGameModel.view.TokenItem;

using Lambda;
using Reflect;
/**
 * ...
 * @author vic
 */
class MainController extends Mediator
{
	public static var create_item = 'create_item';
	public static var on_receiveMessage = 'on_receiveMessage';
	public static var on_been_invite = 'on_been_invite';
	
	public static var on_select_cards = 'on_select_cards';
	public static var on_press = 'on_press';
	public static var on_dice = 'on_dice';
	
	var ary_select:Array<Dynamic> = [];
	var ary_allItem:Array<Dynamic> = [];
	var pos_mouse = [0, 0];
	var isList = false;
	var isCtrl = false;

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
		untyped __js__( 'leo.utils.initRectSelect' )( function( ary ) {
			onSelectItems( ary, false, isCtrl );
			zsorting();
		});
		
		Tool.j( 'body' ).mousemove( onBodyMouseMove );
		Tool.j( 'body' ).keydown( onBodyKeyDown );
		Tool.j( 'body' ).keyup( onBodyKeyUp );
		Tool.j( 'body' ).mousedown( onBodyKeyUp );
	}
	
	override public function listNotificationInterests():Array<String> 
	{
		return [ 	create_item, 
					on_receiveMessage,
					BasicItem.on_item_click,
					BasicItem.on_item_lock
					];
	}
	
	override public function handleNotification(notification:INotification):Void 
	{
		switch( notification.getName() ) {
			
			case BasicItem.on_item_lock:
				var div:Dynamic = notification.getBody().view;
				var lock = notification.getBody().lock;
				if ( lock ) viewComponent.prepend( div );
			case BasicItem.on_item_click:
				var div:Dynamic = notification.getBody();
				onSelectItems( div, true, isCtrl );
				zsorting();
			case 'create_item':
				var ary_creates:Array<Dynamic> = notification.getBody();
				ary_creates.foreach( function( c:Dynamic ) {
					createItem( c );
					return true;
				});
				sendNotification( SocketController.sendMessage, { type:'addItems', msg: ary_creates } );
			case on_receiveMessage:
				switch( notification.getType() ) {
					case 'invite':
						var inviteId = notification.getBody();
						//SocketController.otherPlayerIds = inviteId.split( ',' );
						
						sendNotification( on_been_invite, { inviteId:inviteId } );
						sendNotification( SocketController.do_startHeartbeat );
					case 'dice':
						sendNotification( on_dice, notification.getBody() );
					case 'addItems':
						var tempItems:Array<Dynamic> = notification.getBody();
						tempItems.foreach( function( c:Dynamic ) {
							createItem( c );
							return true;
						});
					case 'deleteItem':
						var localModel = receiveItemToLocalModel( notification.getBody() );
						deleteModel( localModel );
						deleteView( localModel );
					case 'applyTransform':
						var needApply = notification.getBody().applyValue == null ? true : notification.getBody().applyValue;
						if ( needApply ) {
							updateView( updateModel( notification.getBody().ary_item ), notification.getBody().zs );
						}else {
							updateView( notification.getBody().ary_item, notification.getBody().zs, needApply );
						}
						
				}
		}
	}
	
	function updateModel( ary_receive:Array<Dynamic> ) {
		return ary_receive.fold( function( receive:Dynamic, curr:Dynamic ) {
			var model:Dynamic = getItemFromPoolById( receive.id );
			if( model != null ){
				model.pos = receive.pos.slice();
				model.deg = receive.deg;
				model.owner = receive.owner;
				model.viewer = receive.viewer;
				model.back = receive.back;
				model.lock = receive.lock;
				model.action = receive.action;
				curr.push( model );
			}
			return curr;
		}, [] );
	}
	
	function updateView( ary_item:Array<Dynamic>, ?zs:Bool = false, ?apply:Bool = true  ) {
		function updateRotate( item:IItem, dom:Dynamic, itemModel:Dynamic ) {
			if ( dom.attr( 'deg' ) == null ) {
				item.rotate( 0, itemModel.deg );
			}else {
				var oldDegree = dom.attr( 'deg' );
				if ( oldDegree != itemModel.deg ) {
					item.rotate( oldDegree, itemModel.deg );
				}
			}
			dom.attr( 'deg', itemModel.deg );
		}
		
		function updateAction( item:IItem, itemModel:Dynamic ) {
			item.action( itemModel.action );
		}
		
		function updateMove( item:IItem, dom:Dynamic, itemModel:Dynamic ) {
			var dom_pos:Dynamic = [ StringTools.replace( dom.css( 'left' ), 'px', '' ), StringTools.replace( dom.css( 'top' ), 'px', '' )];
			if ( ( dom_pos[0] != itemModel.pos[0] ) || ( dom_pos[1] != itemModel.pos[1] )) {
				item.move( itemModel.pos[0], itemModel.pos[1] );
			}
		}
		
		function updateOwner( item:IItem, itemModel:Dynamic ) {
			item.setOwner( itemModel.owner );
		}
		
		function updateViewer( item:IItem, itemModel:Dynamic ) {
			item.setViewer( itemModel.viewer );
		}
		
		function updateFlip( item:IItem, itemModel:Dynamic ) {
			item.flip( itemModel.back );
		}
		
		function updateLock( item:IItem, itemModel:Dynamic ) {
			item.lock( itemModel.lock );
		}
		
		ary_item.foreach( function( itemModel:Dynamic ) {
			if ( itemModel == null ) return true;
			var m = facade.retrieveMediator( itemModel.id );
			if ( m == null ) return true;
			var item:IItem = cast( m, IItem );
			var dom:Dynamic = facade.retrieveMediator( itemModel.id ).getViewComponent();
			
			if( apply ){
				updateRotate( item, dom, itemModel );
				updateMove( item, dom, itemModel );
				updateOwner( item, itemModel );
				updateViewer( item, itemModel );
				updateFlip( item, itemModel );
				updateLock( item, itemModel );
				updateAction( item, itemModel );
			}
			
			if( zs ) dom.appendTo( dom.parent() );
			
			return true;
		});
	}
	
	function receiveItemToLocalModel( ary_receive:Array<Dynamic> ) {
		return ary_receive.map( function( tempItem:Dynamic ) {
			return getItemFromPoolById( tempItem.id );
		});
	}
	
	function createItem( model:Dynamic ) {
		var item:Mediator;
		switch( model.type ) {
			case 'data':
				item = new DataItem( model.id, Tool.createItemDiv( model.type, model ) );
			case 'card':
				var parseData = Json.parse( Json.stringify( model ) );
				parseData.extra = [ 
					untyped __js__('api.getCardImageWithPackageName')( model.extra[2], model.extra[0] ),
					'../common/images/card/cardback_' + model.extra[1]  + '.png'
				];	
				item = new CardItem( model.id, Tool.createItemDiv( model.type, parseData ) );
			case 'sequence':
				item = new SequenceItem( model.id, Tool.createItemDiv( model.type, model ) );
			case 'token':
				var parseData = Json.parse( Json.stringify( model ) );
				parseData.extra = [ 
					untyped __js__('api.getCardImageWithPackageName')( model.extra[1], model.extra[0] )
				];
				item = new TokenItem( model.id, Tool.createItemDiv( model.type, parseData ) );
			default:
				item = new BasicItem( model.id, Tool.createItemDiv( model.type, model ) );
		}
		item.viewComponent.css( 'left', model.pos[0] + 'px' );
		item.viewComponent.css( 'top', model.pos[1] + 'px' );
		
		facade.registerMediator( item );
		viewComponent.append( item.viewComponent );
		
		cast( item, IItem ).setOwner( model.owner );
		cast( item, IItem ).setViewer( model.viewer );
		cast( item, IItem ).flip( model.back );
		cast( item, IItem ).action( model.action );
		
		ary_allItem.push( model );
	}
	
	function onBodyKeyDown( e ) {
		switch( Std.parseInt( e.which ) ) {
			case KeyboardEvent.DOM_VK_CONTROL:
				isCtrl = true;
		}
	}
	
	function onBodyKeyUp( e ) {
		sendNotification( on_press, null, e.which );
		
		switch( Std.parseInt( e.which ) ) {
			//不需要選擇任何牌也可以執行
			case 	KeyboardEvent.DOM_VK_T,
					KeyboardEvent.DOM_VK_D,
					KeyboardEvent.DOM_VK_A,
					KeyboardEvent.DOM_VK_K,
					KeyboardEvent.DOM_VK_I,
					KeyboardEvent.DOM_VK_O,
					KeyboardEvent.DOM_VK_P:
			case KeyboardEvent.DOM_VK_CONTROL: isCtrl = false;
			//滑鼠左鍵的事件不需要到這裡	
			case 1:return;
			case _:
				if ( ary_select.length == 0 ) return;
		}
		
		switch( Std.parseInt( e.which ) ) {
			case KeyboardEvent.DOM_VK_H:
				deleteModel( ary_select );
				deleteView( ary_select );
			case KeyboardEvent.DOM_VK_I:
				var token = Tool.createItem( [ 'token_0', 'other' ], pos_mouse.slice(0), 'token', 50, 50, true, false, SocketController.playerId );
				createItem( token );
				sendNotification( SocketController.sendMessage, { type:'addItems', msg: [token] } );
			case KeyboardEvent.DOM_VK_O:
				var token = Tool.createItem( [ 'token_1', 'other' ], pos_mouse.slice(0), 'token', 50, 50, true, false, SocketController.playerId );
				createItem( token );
				sendNotification( SocketController.sendMessage, { type:'addItems', msg: [token] } );
			case KeyboardEvent.DOM_VK_P:
				var token = Tool.createItem( [ 'token_2', 'other' ], pos_mouse.slice(0), 'token', 50, 50, true, false, SocketController.playerId );
				createItem( token );
				sendNotification( SocketController.sendMessage, { type:'addItems', msg: [token] } );
			case KeyboardEvent.DOM_VK_T:
				var dice:Int = Math.floor( Math.random() * 100 );
				sendNotification( on_dice, { playerId:SocketController.playerId, dice:dice } );
				sendNotification( SocketController.sendMessage, { type:'dice', msg: { playerId:SocketController.playerId, dice:dice } } );
			case KeyboardEvent.DOM_VK_R:
				actionModel();
				updateView( ary_select );
			case KeyboardEvent.DOM_VK_A, 3:
				if ( isCtrl ) {
					selectMyItem();
				}else {
					moveModel();
				}
				updateView( ary_select );
			case KeyboardEvent.DOM_VK_X:
				rotateModel( 90 );
				updateView( ary_select );
			case KeyboardEvent.DOM_VK_Z:
				rotateModel( -90 );
				updateView( ary_select );
			case KeyboardEvent.DOM_VK_E:
				sortModel();
				listModel();
				updateView( ary_select );
			case KeyboardEvent.DOM_VK_W:
				reverseModel();
				togetherModel();
				updateView( ary_select, true );
			case KeyboardEvent.DOM_VK_Q:
				shuffleModel();
				togetherModel();
				updateView( ary_select, true );
			case KeyboardEvent.DOM_VK_C:
				setModelOwner();
				updateView( ary_select );
			case KeyboardEvent.DOM_VK_D:
				selectMyItem();
				updateView( ary_select );
			case KeyboardEvent.DOM_VK_S:
				if ( isList ) {
					togetherModel();
					updateView( ary_select, true );
				}else {
					listModel();
					updateView( ary_select );
				}
				isList = !isList;
			case KeyboardEvent.DOM_VK_V:
				setModelViewer();
				sendNotification( on_select_cards, { ary_select:ary_select } );
				updateView( ary_select );
			case KeyboardEvent.DOM_VK_F:
				flipModel();
				sendNotification( on_select_cards, { ary_select:ary_select } );
				updateView( ary_select );
			case KeyboardEvent.DOM_VK_L:
				setModelLock();
				updateView( ary_select );
			case KeyboardEvent.DOM_VK_K:
				unlockAllItem();
				updateView( ary_allItem );
		}
		
		switch( e.which ) {
			//ctrl事件只要到這裡就行了，不用傳指令出去
			case KeyboardEvent.DOM_VK_CONTROL:
			//骰子，不經過這邊，在上邊的時候就分發了
			case KeyboardEvent.DOM_VK_T,KeyboardEvent.DOM_VK_I,KeyboardEvent.DOM_VK_O,KeyboardEvent.DOM_VK_P:
			//刪除，針對要刪除的陣列
			case KeyboardEvent.DOM_VK_H:
				sendNotification( SocketController.sendMessage, { type:'deleteItem', msg: ary_select } );
			//解鎖，對象是全部的物件
			case KeyboardEvent.DOM_VK_K:
				sendNotification( SocketController.sendMessage, { type:'applyTransform', msg: { ary_item:ary_allItem, zs:false } } );
			//牌面聚合時，要更新圖層
			case 	KeyboardEvent.DOM_VK_W, 
					KeyboardEvent.DOM_VK_Q, 
					KeyboardEvent.DOM_VK_S:
				sendNotification( SocketController.sendMessage, { type:'applyTransform', msg: {ary_item:ary_select, zs:true } } );
			//其他，更新所有狀態就可以了
			case _:
				sendNotification( SocketController.sendMessage, { type:'applyTransform', msg: {ary_item:ary_select, zs:false} } );
		}
	}
	
	function rotateModel( deg ) {
		ary_select.foreach( function( item:Dynamic ) {
			item.deg += deg;
			return true;
		});
	}
	
	function onSelectItems( ary:Array<Dynamic>, selectLock:Bool = false, ?addSelect:Bool = false ) {
		
		if ( addSelect ) {
			//複選狀態，已經被選到的就取消，沒被選到的就加進來
			if ( ary_select.length == 0 ) {
				//如果本來就沒有任何一個是選取狀態的時候，就把所有選到的直接選取起來
				ary_select = ary.map( function( model:Dynamic ) {
					return getItemFromPoolById( model.id );
				});
			}else {
				//識別出哪些是新增，哪些是已經有的
				var needRemove = [];
				var needAdd = [];
				ary.foreach( function( model:Dynamic ) {
					for ( i in 0...ary_select.length ) {
						if ( ary_select[i].id == model.id ) {
							needRemove.push( model );
						}
					}
					if ( needRemove.length == 0 ) {
						needAdd.push( model );
					}
					return true;
				});
				
				//把已經有的取消選取
				for ( j in 0...needRemove.length ) {
					var i = ary_select.length;
					while ( i > 0 ) {
						--i;
						if ( ary_select[i].id == needRemove[j].id ) {
							ary_select.splice(i, 1 );
						}
					}
				}
				
				//把新增的加進來
				ary_select = ary_select.concat( needAdd.map( function( model:Dynamic ) {
					return getItemFromPoolById( model.id );
				}));
			}
		}else {
			//直接點選狀態，點到啥就選到啥，沒選到就排除
			ary_select = ary.map( function( model:Dynamic ) {
				return getItemFromPoolById( model.id );
			});
		}
		
		if( !selectLock )
			ary_select = filterLock( ary_select );
			
		indexSorting();
		sendNotification( on_select_cards, { ary_select:ary_select } );
		
		if ( ary_select.length != 0 ) {
			sendNotification( SocketController.sendMessage, { type:'applyTransform', msg: {ary_item:ary_select, zs:true, applyValue:false } } );
		}
	}
	
	function indexSorting() {
		ary_select.sort( function( a, b ) {
			if ( b.pos[0] < a.pos[0] ) return 1;
			return -1;
		});
		ary_select.sort( function( a, b ) {
			if ( b.pos[1] < a.pos[1] ) return 1;
			return -1;
		});
	}
	
	function selectMyItem() {
		ary_select = filterLock( getMyItemFromPool() );
		sendNotification( on_select_cards, { ary_select:ary_select } );
	}
	
	function sortModel() {
		var collectobj:Dynamic = { };
		ary_select.foreach( function( card ) {
			if ( collectobj.field( card.cardId ) == null ) {
				collectobj.setField( card.cardId, [] );
			}
			collectobj.field( card.cardId ).push( card );
			return true;
		});
		
		var newary = [];
		for ( c in collectobj.fields() ) {
			newary = newary.concat( collectobj.field( c ) );
		}
		ary_select = newary;
	}
	
	function setModelLock() {
		for ( i in 0...ary_select.length ) {
			var itemModel = ary_select[i];
			if ( itemModel.owner == '' || itemModel.owner == SocketController.playerId ){
				itemModel.lock = !itemModel.lock;
			}else continue;
		}
	}
	
	function unlockAllItem() {
		for ( i in 0...ary_allItem.length ) {
			var itemModel = ary_allItem[i];
			if ( itemModel.owner == '' || itemModel.owner == SocketController.playerId ){
				itemModel.lock = false;
			}else continue;
		}
	}
	
	function setModelOwner() {
		for ( i in 0...ary_select.length ) {
			var itemModel = ary_select[i];
			var item:IItem = cast( facade.retrieveMediator( itemModel.id ), IItem );
			if ( itemModel.owner == SocketController.playerId ) {
				//如果持有者是自己，就把持有者設為空白
				itemModel.owner = '';
			}else {
				if ( itemModel.owner == '' ) {
					//如果持有者是空白，就把持有者設為自己
					itemModel.owner = SocketController.playerId;
				}else {
					//持有者不是空白也不是自己，不能設置
				}
			}
		}
	}
	
	function setModelViewer() {
		for ( i in 0...ary_select.length ) {
			var itemModel = ary_select[i];
			var item:IItem = cast( facade.retrieveMediator( itemModel.id ), IItem );
			if ( itemModel.viewer == SocketController.playerId ) {
				itemModel.viewer = '';
			}else {
				itemModel.viewer = SocketController.playerId;
				if ( itemModel.viewer == '' ) {
					itemModel.viewer = SocketController.playerId;
				}
			}
		}
	}
	
	function listModel() {
		var info:Dynamic = collectInfo( ary_select );
		for ( i in 0...ary_select.length ) {
			var itemModel = ary_select[i];
			itemModel.pos[0] = i % 10 * ( info.field( 'mw' ) + 4 ) + pos_mouse[0];
			itemModel.pos[1] = Math.floor( i / 10 ) * ( info.field( 'mh' ) + 4 ) + pos_mouse[1];
		}
	}
	
	function togetherModel() {
		for ( i in 0...ary_select.length ) {
			var itemModel = ary_select[i];
			itemModel.pos[0] = i * 2 + pos_mouse[0];
			itemModel.pos[1] = i * 2 + pos_mouse[1];
		}
	}
	
	function flipModel() {
		for ( i in 0...ary_select.length ) {
			var itemModel = ary_select[i];
			if ( itemModel.owner == '' || itemModel.owner == SocketController.playerId ){
				itemModel.back = !itemModel.back;
			}else continue;
		}
	}
	
	function zsorting() {
		for ( i in 0...ary_select.length ) {
			var dom:Dynamic = facade.retrieveMediator( ary_select[i].id ).getViewComponent();
			dom.appendTo( dom.parent() );
		}
	}
	
	function shuffleModel() {
		ary_select.sort( function ( a, b ) {
			return Math.random() > .5 ? 1 : -1;
		});
	}
	
	function reverseModel() {
		ary_select.reverse();
	}
	
	function collectInfo( ary_item:Array<Dynamic> ) {
		var mw = 0.0;
		var mh = 0.0;
		var firstPos = [];
		for ( i in 0...ary_item.length ) {
			if ( i == 0 ) firstPos = ary_item[i].pos.slice();
			mw = Math.max( mw, ary_item[i].width );
			mh = Math.max( mw, ary_item[i].height );
		}
		return { mw:mw, mh:mh, firstPos:firstPos };
	}
	
	function filterLock( ary:Array<Dynamic> ):Array<Dynamic> {
		var nary = ary.fold( function( curr, first:Array<Dynamic> ) {
			if ( !curr.lock ) first.push( curr );
			return first;
		}, [] );
		return nary;
	}
	
	function onBodyMouseMove( e ) {
		pos_mouse[0] = e.pageX;
		pos_mouse[1] = e.pageY;
	}
	
	function getItemFromPoolById( id:String ) {
		return ary_allItem.filter( function( model ) {
			return id == model.id;
		})[0];
	}
	
	function getMyItemFromPool() {
		return ary_allItem.filter( function( model ) {
			return SocketController.playerId == model.owner;
		});
	}
	
	function actionModel() {
		ary_select.foreach( function( item:Dynamic ) {
			switch( item.type ) {
				case 'sequence':
					item.action.sequence = Math.random();
				case _:
			}
			return true;
		});
	}
	
	function deleteModel( ary_receive:Array<Dynamic> ) {
		ary_receive.foreach( function( removeItem ) {
			ary_allItem.remove( removeItem );
			return true;
		});
	}
	
	function deleteView( ary_receive:Array<Dynamic> ) {
		ary_receive.foreach( function( removeItem ) {
			try {
				if ( removeItem == null ) return true;
				var m = facade.retrieveMediator( removeItem.id );
				if ( m != null ) {
					m.getViewComponent().remove();
					facade.removeMediator( m.getMediatorName() );
				}
			}catch ( e:Dynamic ) {
				trace( e );
			}
			return true;
		});
	}
	
	function moveModel() {
		if ( ary_select.length == 0 ) return;
		var moveTarget:Dynamic = { };
		ary_select.sort( function( ac, bc ) {
			if ( ac.pos[0] < bc.pos[0] ) return -1;
			return 1;
		});
		moveTarget.x = ary_select[0].pos[0];
		ary_select.sort( function( ac, bc ) {
			if ( ac.pos[1] < bc.pos[1] ) return -1;
			return 1;
		});
		moveTarget.y = ary_select[0].pos[1];
		
		var offset = [
			pos_mouse[0] - moveTarget.x,
			pos_mouse[1] - moveTarget.y
		];
		ary_select.foreach( function( select ) {
			select.pos[0] += offset[0];
			select.pos[1] += offset[1];
			return true;
		});
	}
	
}