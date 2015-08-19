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
			btn_addPanel:j( '#btn_addPanel' )
		}
		
		panelView.addHandler( function( type, params:Dynamic ) {
			switch( type ) {
				case PanelView.ON_STOCKID_CHANGE:
					getStockAndDraw( params.stockId );
				case PanelView.ON_OFFSET_CHANGE:
					panelModel.currentOffset += params.value;
				case PanelView.ON_SHOWLINE_CHANGE:
					panelModel.changeShow( params.id, params.type, params.show );
				case PanelView.ON_SHOWLINE_VALUE_CHANGE:
					panelModel.changeShowValue( params.id, params.type, params.value );
				case PanelView.ON_SHOWLINE_K_CHANGE:
					panelModel.changeShowK( params.id, params.show );
				case PanelView.ON_BTN_ADDPANEL_CLICK:
					var penalObj = createNewPanelObj();
					panelModel.addPanel( penalObj.id, penalObj );
			}
		});
		
		panelModel.addHandler( function( type, params ) {
			switch( type ) {
				case PanelModel.ON_OFFSET_CHANGE:
					panelView.drawAllCanvas( params.stockId, params.offset, panelModel.getAryPanel() );
				case PanelModel.ON_INIT:
					panelView.setShowId( params.stockId );
				case PanelModel.ON_ADD_PANEL:
					panelView.addPanel( params.stockId, panelModel.currentOffset, panelModel.currentCount, params.panelObj );
				case PanelModel.ON_REMOVE_PANEL:
					panelView.removePanel( params.id );
				case PanelModel.ON_SHOWLINE_CHANGE:
					panelView.drawCanvas( panelModel.currentStockId, panelModel.currentOffset, panelModel.currentCount, params.panelData );
				case _:
			}
		});
		
		//沒有記錄的話，用預設資料
		panelModel.config = untyped __js__('defaultStock' );
		
		Reflect.setField( Browser.window, 'onHtmlTrigger', onHtmlTrigger );
	}
	
	function getStockAndDraw( stockId ) {
		getStock( stockId, true, function( ret:Dynamic ) {
			panelView.drawAllCanvas( stockId, panelModel.getAryPanel() );
		});
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
					show:true,
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
					show:false,
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
					type: 'yu-clock', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
					value: {
						n: 20,
						m: 20,
						o: 0, 
						p: 0,
						color: ''
					}
				}
				,
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
					type: 'yu-macd', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin | yu-macd | bbi | eom
					value: {
						n: 5,
						m: 12,
						o: 0, 
						p: 0,
						color: ''
					}
				}
				,
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
				}
			]
		}
	}
	
	function resetAllCanvasListener() {
		/*
		Lambda.map( ary_panel_obj, function( stockMap ) {
			if( stockMap.needMove ){
				var container = stockMap.canvas.parent();
				if( currentScrollX != null )
					container.scrollLeft( currentScrollX );
				container.off( 'scroll' );
				container.scroll( function( e ) {
					var target = j( e.currentTarget );
					currentScrollX = target.scrollLeft();
					Lambda.map( ary_panel_obj, function( _stockMap ) {
						container = _stockMap.canvas.parent();
						container.scrollLeft( currentScrollX );
					});
				});
			}
			
			var root = stockMap.root;
			if ( root != null ) {
				root.find( '.easyui-switchbutton' ).switchbutton( {
					onChange:function( checked ) {
						var target = j( untyped __js__ ( 'this' ));
						trace( target.attr( 'id' ));
						var propContainer = target.parent().parent();
						var value = propContainer.find( '.easyui-textbox' ).textbox( 'getValue' );
						if ( checked ) {
							
						}
						trace( stockMap.id );
						trace( target );
						trace( value );
					}
				});
			}
		});
		*/
	}
	
	function onHtmlTrigger( name, params ) {
		switch( name ) {
			case 'addPanel':
				//panelModel.addPanel( getId(), EType.kline, [ { type:'ma', value:1, show:false }, { type:'', value:2, show:true } ] );
			case 'removePanel':
				var panelDom = j( params.currentTarget ).parent().parent().parent().parent();
				var id = panelDom.attr( 'id' );
				panelModel.removePanel( id );
		}
	}
	
	static var id = 4;
	
	static function getId() {
		return id++;
	}
	
	static function main() 
	{
		new Main();
	}
	
	public static function getStock( id:String, reset:Bool, cb:Dynamic -> Void ) {
		untyped __js__('api.stockId')( id, reset, cb );
	}
	
	public static function drawStock( canvas:Dynamic, id:String, type:EType, offset:Int = 0, count:Int = 100, ?sub:Dynamic ) {
		untyped __js__('api.draw')( canvas[0], id, Std.string( type ), offset, count, sub );
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