package;

import haxe.Json;
import js.Browser;
import js.Lib;
import model.IPanel;
import model.PanelModel;
import model.Saver;
import view.AboutView;
import view.PanelView;

/**
 * ...
 * @author vic
 */
class Main 
{
	static var j:Dynamic = untyped __js__( '$' );
	
	var panelModel = new PanelModel();
	var panelView = new PanelView();
	var aboutView = new AboutView();
	var saver = new Saver();
	var loading:Dynamic;
	
	function new() {
		
		saver.addHandler( function( type, params:Dynamic ) {
			switch( type ) {
				case Saver.ON_SAVE_START:
					if( saver.showLoading )
						showLoading();
				case Saver.ON_SAVE_NO_FBID:
					slideMessage( '提示', '請先登入facebook' );
				case Saver.ON_SAVE_SUCCESS:
					closeLoading();
				//	slideMessage( '提示', '儲存成功!' );
					panelView.setSavable( false );
				case Saver.ON_SAVE_ERROR:
					slideMessage( '提示','同步失敗，請再試一次' );
					saver.fbtoken = '';
					saver.fbid = '';
					panelView.setLogin( false );
			}
		});
		
		aboutView.config = {
			mc_txtContainer:j( '#mc_txtContainer' ),
			aboutConfig:untyped __js__('app.config.about' )
		}
		
		panelView.config = {
			doc:j( untyped __js__('document') ),
			body:j( j('body')),
			mc_accordionContainer:j("#mc_accordionContainer" ),
			tmpl_panel:j("#tmpl_panel"),
			slt_stockId:j( '#slt_stockId' ),
			swb_favor:j('#swb_favor'),
			toggle_favor:j( '#toggle_favor' ),
			combo_favor:j( '#combo_favor' ),
			combo_prefer:j( '#combo_prefer' ),
			btn_controller:j( '#btn_controller' ),
			btn_addPanel:j( '#btn_addPanel' ),
			btn_save:j('#btn_save' ),
			txt_count:j( '#txt_count' ),
			txt_offset:j( '#txt_offset' ),
			txt_note:j( '#txt_note' ),
			table_stockPrice:j( '#table_stockPrice' ),
			btn_login:j('#btn_login' ),
			btn_logout:j('#btn_logout' ),
			btn_about:j('#btn_about' ),
			btn_period:j('#btn_period' ),
			dia_about:j('#dia_about')
		}
		
		panelView.addHandler( function( type, params:Dynamic ) {
			trace( 'panelView', type );
			
			saver.startAuto();
			switch( type ) {
				case PanelView.ON_BTN_LOGIN_CLICK:
					showLoading();
					
					fb_login( function( e ) {
						var authResponse  = e.authResponse;
						switch( e.status ) {
							case 'connected':
								var token = authResponse.accessToken;
								saver.fbtoken = token;
								saver.fbid = authResponse.userID;
								panelView.setLogin( true );
								
								load( saver.fbid, saver.fbtoken, function( err, params ) {
									
									closeLoading();
									switch( err ) {
										case null:
											if ( params != null ) {
												panelModel.config = params;
											}
											slideMessage( '提示', '歡迎登入!' );
										case 'runtime error: index out of range':
											slideMessage( '提示', '歡迎登入!' );
										case _:
											#if debug
											slideMessage( '錯誤', err );
											#else
											Browser.alert( '程式崩潰，請重新整理' );
											Browser.window.location.reload();
											#end
									}
								});
								
							case 'unknown':
								panelView.setLogin( false );
								closeLoading();
						}
					});
				case PanelView.ON_BTN_PERIOD_CLICK:
					panelModel.currentPeriod = params.period;
				case PanelView.ON_BTN_LOGOUT_CLICK:
					fb_logout( function( e ) {
						saver.fbid = '';
						//panelModel.currentFbId = '';
					});
				case PanelView.ON_BTN_SAVE_CLICK:
					saver.showLoading = true;
					saver.save();
				case PanelView.ON_TXT_NOTE_CHANGE:
					panelModel.currentNote = params.note;
				case PanelView.ON_COMBO_FAVOR_CHANGE:
					panelModel.currentStockId = params.stockId;
				case PanelView.ON_COMBO_PREFER_CHANGE:
					panelModel.currentStockId = params.stockId;
				case PanelView.ON_SWB_FAVOR_CHANGE:
					panelModel.currentFavor = params.favor;
				case PanelView.ON_SLT_STOCKID_CHANGE:
					panelModel.currentStockId = params.stockId;
				case PanelView.ON_BTN_CONTROLLER_CLICK:
					panelModel.currentOffset += params.value;
				case PanelView.ON_SWB_SHOWLINE_CHANGE:
					panelModel.changeShow( params.id, params.type, params.show );
				case PanelView.ON_TXT_SHOWLINE_VALUE_CHANGE:
					panelModel.changeShowValue( params.id, params.type, params.value );
				case PanelView.ON_SWB_SHOWKLINE_CHANGE:
					panelModel.changeShowK( params.id, params.show );
				case PanelView.ON_BTN_ADDPANEL_CLICK:
					var penalObj = createNewLine( 'none' );
					panelModel.addPanel( penalObj.id, penalObj, {addToModel:true} );
				case PanelView.ON_BTN_REMOVEPANEL_CLICK:
					panelModel.removePanel( params.id );
				case PanelView.ON_TXT_OFFSET_CHANGE:
					panelModel.currentOffset = params.offset;
				case PanelView.ON_TXT_COUNT_CHANGE:
					panelModel.currentCount = params.count;
			}
		});
		
		panelModel.addHandler( function( type, params:Dynamic ) {
			trace( type, params );
			
			switch( type ) {
				case PanelModel.ON_INIT:
					saver.saveobj = panelModel.config;
					panelView.setFavorsSelect( params.favorList );
				case PanelModel.ON_PERIOD_CHANGE:
					panelView.setPeriod( params.period );
					panelView.setSavable( true );
					panelView.drawAllCanvas( panelModel.currentStockId, panelModel.currentOffset, panelModel.currentCount, panelModel.getAryPanel() );
				case PanelModel.ON_NOTE_CHANGE:
					panelView.setSavable( true );
				case PanelModel.ON_FAVOR_LIST_CHANGE:
					panelView.setSavable( true );
					panelView.setFavorsSelect( params.favorList );
				case PanelModel.ON_OFFSET_CHANGE:
					panelView.setSavable( true );
					panelView.changeOffset( panelModel.currentOffset );
					panelView.drawPrice( panelModel.currentStockInfo, panelModel.currentOffset );
					panelView.scrollTo( panelModel.getAryPanel(), 0 );
					panelView.drawAllCanvas( panelModel.currentStockId, panelModel.currentOffset, panelModel.currentCount, panelModel.getAryPanel() );
				case PanelModel.ON_COUNT_CHANGE:
					panelView.setSavable( true );
					panelView.drawAllCanvas( panelModel.currentStockId, panelModel.currentOffset, panelModel.currentCount, panelModel.getAryPanel() );
				case PanelModel.ON_ADD_PANEL:
					panelView.setSavable( true );
					panelView.addPanel( params.stockId, panelModel.currentOffset, panelModel.currentCount, params.panelObj );
					panelView.resetAllCanvasListener( panelModel.getAryPanel() );
				case PanelModel.ON_REMOVE_PANEL:
					panelView.setSavable( true );
					panelView.removePanel( params.id );
				case PanelModel.ON_SHOWLINE_CHANGE:
					panelView.setSavable( true );
					panelView.drawCanvas( panelModel.currentStockId, panelModel.currentOffset, panelModel.currentCount, params.panelData );
				case PanelModel.ON_STOCKID_CHANGE:
					panelView.setSavable( true );
					panelView.initPanel( panelModel.config, params.stock, panelModel.currentStockInfo );
					panelView.drawPrice( panelModel.currentStockInfo, panelModel.currentOffset );
					saver.startAuto();
				//case PanelModel.ON_LOGIN_CHANGE:
				//	saver.fbid = params.fbid;
			}
		});
		
		#if debug
		panelModel.currentFbId = '';
		panelModel.config = newUser();
		#else
		
		var fbappid = untyped __js__('app.config.fbappid[app.config.fbappid.which]');
		
		showLoading();
		fb_init( fbappid, function() {
			saver.config = '';
			panelModel.config = newUser();
			
			closeLoading();
			
			/*
			fb_loginStatus( function( e ) {
				slideMessage( '歡迎使用', '余氏k線圖幫您變成操盤達人!' );
				var authResponse  = e.authResponse;
				switch( e.status ) {
					case 'connected':
						
						panelModel.currentFbId = authResponse.userID;
						load( panelModel.currentFbId, function( err, params ) {
							trace( err, params );
							
							closeLoading();
							
							if ( err == null ) {
								panelModel.config = ( params == null ? newUser() : params );
							}else {
								Browser.alert( err );
								panelModel.config = newUser();
							}
						});
						
						slideMessage( '提示', '歡迎登入!' );
					case 'unknown':
						
						closeLoading();
						
						panelModel.currentFbId = '';
						panelModel.config = newUser();
				}
			});
			*/
		});
		#end
	}
	
	function newUser() {
		return { stocks:[] };
	}
	
	static function getId() {
		return untyped __js__('leo.utils.generateUUID' )();
	}
	
	static function main() 
	{
		new Main();
	}
	
	static function checkError() {
		
	}
	
	public static function showLoading() {
		j.messager.progress( {
			title:'Please waiting',
            msg:'Loading data...'
		});
	}
	
	public static function closeLoading() {
		j.messager.progress('close');
	}
	
	public static function slideMessage( title, msg ) {
		j.messager.show({
			title:title,
			msg:msg,
			timeout:5000,
			showType:'slide'
		});
	}
	
	public static function getStock( id:String, reset:Bool ) {
		showLoading();
		
		var d:Dynamic = j.Deferred();
		untyped __js__('api.stockId')( id, reset, function() {
			d.resolve( id );
		});
		return d;
	}
	
	public static function getStockInfo( id:String ):Dynamic {
		var d:Dynamic = j.Deferred();
		untyped __js__('api.stockInfo')( id, function( err, data ) {
			d.resolve( err, data );
			closeLoading();
		});
		return d;
	}
	
	public static function drawStock( canvas:Dynamic, id:String, type:String, offset:Int = 0, count:Int = 100, ?sub:Dynamic ) {
		untyped __js__('api.draw')( canvas[0], id, Std.string( type ), offset, count, sub );
	}
	
	public static function save( fbid:String, accessToken:String, data:Dynamic, cb:Dynamic -> Dynamic -> Void ) {
		untyped __js__('api.save')(fbid, accessToken, data, cb );
	}
	
	public static function load( fbid:String, accessToken:String, cb:Dynamic -> Dynamic -> Void ) {
		untyped __js__('api.load')(fbid, accessToken, cb ); 
	}
	
	public static function fb_init( appId:String, cb:Void -> Void ) {
		untyped __js__('myapp.facebook.init')( appId, cb );
	}
	
	public static function fb_login( cb:Dynamic -> Void ) {
		untyped __js__('myapp.facebook.login')( cb );
	}
	
	public static function fb_logout( cb:Dynamic -> Void ) {
		untyped __js__('myapp.facebook.logout')( cb );
	}
	
	public static function fb_loginStatus( cb:Dynamic -> Void ) {
		untyped __js__('myapp.facebook.getLoginStatus')( cb );
	}
	
	public static function createProp( ary:Array<Dynamic> ):Array<Dynamic> {
		return Lambda.fold( ary, function( obj, curr:Array<Dynamic> ) {
			if ( obj[0] == 'group' ) {
				curr.push( {
					type:obj[0],
					name:obj[1]
				});
			}else{
				curr.push( { 
					show:obj[2],
					type:obj[0],
					name:obj[1],
					url:obj[7],
					value: {
						n:obj[3],
						m:obj[4],
						o:obj[5],
						p:obj[6],
					}
				} );
			}
			return curr;
		}, []);
	}
	
	public static function createNewStock( id, ?props ) {
		return {
			id:id,
			count:200,
			offset:0,
			favor:false,
			period:'d',
			note:'這個人很懶，什麼都沒有記下=3=',
			lines:[ 
				createNewLine( 'volume', false, [
													['group', '均線'],
													['ma', false, 5, 0, 0, 0 ]
												] ),
				createNewLine( 'kline' )
			]
		}
	}
	
	public static function createNewLine( type, deletable = true, ?props:Array<Dynamic> ) {
		return {
			id:getId(),
			type:type,
			deletable:deletable,
			sub:createProp( props == null ? untyped __js__('app.config.index' ) : props )
		}
	}
}