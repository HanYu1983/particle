package;

import haxe.Json;
import js.Browser;
import js.Lib;
import model.IPanel;
import model.PanelModel;
import view.IPanelView;
import view.PanelView;

/**
 * ...
 * @author vic
 */
class Main 
{
	static var j:Dynamic = untyped __js__( '$' );
	
	var panelModel:IPanel = new PanelModel();
	var panelView:IPanelView = new PanelView();
	var loading:Dynamic;
	
	function new() {
		slideMessage( '歡迎使用', '余氏k線圖幫您變成操盤達人!' );
	
		panelView.config = {
			doc:j( untyped __js__('document') ),
			body:j( j('body')),
			mc_accordionContainer:j("#mc_accordionContainer" ),
			tmpl_panel:j("#tmpl_panel"),
			slt_stockId:j( '#slt_stockId' ),
			swb_favor:j('#swb_favor'),
			combo_favor:j( '#combo_favor' ),
			btn_controller:j( '#btn_controller' ),
			btn_addPanel:j( '#btn_addPanel' ),
			txt_count:j( '#txt_count' ),
			txt_offset:j( '#txt_offset' ),
			txt_note:j( '#txt_note' ),
			table_stockPrice:j( '#table_stockPrice' )
		//	btn_loadPrice:j('#btn_loadPrice')
		}
		
		panelView.addHandler( function( type, params:Dynamic ) {
			trace( 'panelView', type );
			switch( type ) {
				//case PanelView.ON_BTN_LOADPRICE_CLICK:
				//	panelView.drawPrice( panelModel.currentStockInfo );
				case PanelView.ON_TXT_NOTE_CHANGE:
					panelModel.currentNote = params.note;
				case PanelView.ON_COMBO_FAVOR_CHANGE:
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
		
		panelModel.addHandler( function( type, params ) {
			trace( 'panelModel', type );
			switch( type ) {
				case PanelModel.ON_INIT:
					panelView.setFavorsSelect( params.favorList );
				case PanelModel.ON_FAVOR_LIST_CHANGE:
					panelView.setFavorsSelect( params.favorList );
				case PanelModel.ON_OFFSET_CHANGE:
					panelView.changeOffset( panelModel.currentOffset );
					panelView.drawPrice( panelModel.currentStockInfo, panelModel.currentOffset );
					panelView.scrollTo( panelModel.getAryPanel(), 0 );
					panelView.drawAllCanvas( panelModel.currentStockId, panelModel.currentOffset, panelModel.currentCount, panelModel.getAryPanel() );
				case PanelModel.ON_COUNT_CHANGE:
					panelView.drawAllCanvas( panelModel.currentStockId, panelModel.currentOffset, panelModel.currentCount, panelModel.getAryPanel() );
				case PanelModel.ON_ADD_PANEL:
					panelView.addPanel( params.stockId, panelModel.currentOffset, panelModel.currentCount, params.panelObj );
					panelView.resetAllCanvasListener( panelModel.getAryPanel() );
				case PanelModel.ON_REMOVE_PANEL:
					panelView.removePanel( params.id );
				case PanelModel.ON_SHOWLINE_CHANGE:
					panelView.drawCanvas( panelModel.currentStockId, panelModel.currentOffset, panelModel.currentCount, params.panelData );
				case PanelModel.ON_STOCKID_CHANGE:
					panelView.initPanel( panelModel.config, params.stock, panelModel.currentStockInfo );
					panelView.drawPrice( panelModel.currentStockInfo, panelModel.currentOffset );
			}
		});
		
		//沒有記錄的話，用預設資料
		panelModel.config = untyped __js__('defaultStock' );
	}
	
	static var id = 0;
	
	static function getId() {
		return id++;
	}
	
	static function main() 
	{
		new Main();
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
	
	public static function slideMessage( title, msg ){
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
	
	public static function createProp( ary:Array<Dynamic> ):Array<Dynamic> {
		return Lambda.fold( ary, function( obj, curr:Array<Dynamic> ) {
			if ( obj[0] == 'group' ) {
				curr.push( {
					type:obj[0],
					name:obj[1]
				});
			}else{
				curr.push( { 
					show:obj[1],
					type:obj[0],
					url:obj[6],
					value: {
						n:obj[2],
						m:obj[3],
						o:obj[4],
						p:obj[5],
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