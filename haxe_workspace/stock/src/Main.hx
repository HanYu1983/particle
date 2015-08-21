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
			mc_accordionContainer:j("#mc_accordionContainer" ),
			tmpl_panel:j("#tmpl_panel"),
			slt_stockId:j( '#slt_stockId' ),
			btn_controller:j( '#btn_controller' ),
			btn_addPanel:j( '#btn_addPanel' ),
			txt_count:j( '#txt_count' ),
			txt_offset:j( '#txt_offset' )
		}
		
		panelView.addHandler( function( type, params:Dynamic ) {
			trace( 'panelView', type );
			switch( type ) {
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
				case PanelModel.ON_OFFSET_CHANGE:
					panelView.changeOffset( panelModel.currentOffset );
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
					panelView.initPanel( panelModel.config, params.stock );
			}
		});
		
		//沒有記錄的話，用預設資料
		panelModel.config = untyped __js__('defaultStock' );
	}
	
	static var id = 4;
	
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
			lines:[ createNewLine( 'kline' ) ]
		}
	}
	
	public static function createNewLine( type, ?props:Array<Dynamic> ) {
		return {
			id:getId(),
			type:type,
			deletable:true,
			sub:createProp( props == null ? [
												['group', '常用'],
												['ma', true, 5, 10, 20, 40 ],
												['ema', false, 5, 10, 20, 40 ],
												['bbi', false, 3, 2, 6, 2 ],
												['sar', false, 3, 0, 0, 0 ],
												['osc', false, 10, 20, 0, 0 ],
												['rsi', false, 14, 9, 0, 0 ],
												['kd', false, 9, 3, 9, 0 ],
												['macd', false, 12, 26, 0, 0 ],
												['Chaikin', false, 3, 10, 9, 0 ],
												['eom', false, 14, 3, 9, 0 ],
												['group', '余氏'],
												['yu-car', false, 1, .025, .7, 0 ],
												['yu-clock', false, 20, 20, 0, 0 ],
												['yu-macd', false, 5, 12, 0, 0 ]] : props )
		}
	}
}

/*
draw($("#canvas_exchange")[0], 2330, "volume", 
	{
		sub:[
			{t: "ma", d: {n: 5, color: "blue"}}
		]
	}
)

draw($("#canvas_clock")[0], 2330, "clock", {})

draw($("#canvas_kline")[0], 2330, null, 
	{
		sub:[
			{t: "ma", d: {n: 5, color: "blue"}}, 
			{t: "ma", d: {n: 10, color: "yellow"}} 
		]
	}
)*/