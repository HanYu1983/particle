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
	var j:Dynamic = untyped __js__( '$' );
	
	var panelModel:IPanel = new PanelModel();
	var panelView:IPanelView = new PanelView();
	
	function new() {
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
					var penalObj = createNewPanelObj();
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
			switch( type ) {
				case PanelModel.ON_STOCKID_CHANGE:
					panelView.initPanel( panelModel.config, params.stock );
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
	
	public static function getStock( id:String, reset:Bool ) {
		var d:Dynamic = untyped __js__('$').Deferred();
		untyped __js__('api.stockId')( id, reset, function() {
			d.resolve( id );
		});
		return d;
	}
	
	public static function getStockInfo( id:String ):Dynamic {
		var d:Dynamic = untyped __js__('$').Deferred();
		untyped __js__('api.stockInfo')( id, function( err, data ) {
			d.resolve( err, data );
		});
		return d;
	}
	
	public static function drawStock( canvas:Dynamic, id:String, type:EType, offset:Int = 0, count:Int = 100, ?sub:Dynamic ) {
		untyped __js__('api.draw')( canvas[0], id, Std.string( type ), offset, count, sub );
	}
	
	function createNewPanelObj() {
		return {
			id:getId(),
			type:EType.none,
			deletable:true,
			sub:[
				{
					show:false,
					type: 'ma', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
					value: {
						n: 5,
						m: 10,
						o: 20, 
						p: 40,
						color: ''
					}
				},
				{
					show:false,
					type: 'ema', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
					value: {
						n: 5,
						m: 10,
						o: 20, 
						p: 40,
						color: ''
					}
				},
				{
					show:false,
					type: 'bbi', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
					value: {
						n: 12,
						m: 0,
						o: 0, 
						p: 0,
						color: ''
					}
				},
				{
					show:false,
					type: 'yu-sd', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
					value: {
						n: 20,
						m: 0,
						o: 0, 
						p: 0,
						color: ''
					}
				},
				{
					show:false,
					type: 'yu-car', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
					value: {
						n: 1,
						m: .005,
						o: .7, 
						p: 0,
						color: ''
					}
				},
				{
					show:false,
					type: 'kd', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
					value: {
						n: 9,
						m: 1,
						o:3, 
						p:0,
						color: ''
					}
				},
				{
					show:true,
					type: 'macd', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
					value: {
						n: 12,
						m: 26,
						o: 0, 
						p: 0,
						color: ''
					}
				},
				{
					show:false,
					type: 'Chaikin', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
					value: {
						n: 3,
						m: 10,
						o: 9, 
						p: 0,
						color: ''
					}
				},
				{
					show:false,
					type: 'eom', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
					value: {
						n: 14,
						m: 3,
						o: 0, 
						p: 0,
						color: ''
					}
				},
				{
					show:false,
					type: 'yu-clock', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
					value: {
						n: 20,
						m: 20,
						o: 0, 
						p: 0,
						color: ''
					}
				},
				{
					show:false,
					type: 'yu-macd', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin | yu-macd | bbi | eom
					value: {
						n: 5,
						m: 12,
						o: 0, 
						p: 0,
						color: ''
					}
				}
			]
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