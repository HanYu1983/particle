package;

import haxe.Json;
import js.Browser;
import js.Lib;
import model.Model;
import model.PanelModel;
import view.PanelView;

/**
 * ...
 * @author vic
 */
class Main 
{
	var j:Dynamic = untyped __js__( '$' );
	
	//var currentStockId = null;
	//var currentScrollX = null;
	
	var panelModel:Model = new PanelModel();
	var panelView:Model = new PanelView();
	
	function new() {
		
		panelView.config = {
			mc_accordionContainer:j("#mc_accordionContainer" ),
			tmpl_panel:j("#tmpl_panel"),
			slt_stockId:j( '#slt_stockId' )
		}
		
		panelView.addHandler( function( type, params ) {
			switch( type ) {
				case PanelView.ON_STOCKID_CHANGE:
					getStockAndDraw( params.stockId );
			}
		});
		
		panelModel.addHandler( function( type, params ) {
			switch( type ) {
				case PanelModel.ON_INIT:
					getStockAndDraw( params.stockId );
				case PanelModel.ON_ADD_PANEL:
					panelView.execute( PanelModel.ON_ADD_PANEL, params );
				case PanelModel.ON_REMOVE_PANEL:
					panelView.execute( PanelModel.ON_REMOVE_PANEL, params );
				case _:
			}
		});
		
		//從model端來的資料(暫定)
		panelModel.config = {
			facebookId:'12233',
			stocks:[
				{
					id:'2330',
					kline:[
						{
							id:0,
							type:'clock',
							sub:[
								{t: "ma", d: {n: 5, color: "blue"}}, 
								{t: "ma", d: {n: 10, color: "yellow"}} 
							]
						},
						{
							id:1,
							type:'volume',
							sub:[
								{t: "ma", d: {n: 5, color: "blue"}}, 
								{t: "ma", d: {n: 10, color: "yellow"}} 
							]
						},
						{
							id:2,
							type:'kline',
							sub:[
								{t: "ma", d: {n: 5, color: "blue"}}, 
								{t: "ma", d: {n: 10, color: "yellow"}} 
							]
						},
						{
							id:3,
							type:'kline',
							sub:[
								{t: "ma", d: {n: 5, color: "blue"}}, 
								{t: "ma", d: {n: 10, color: "yellow"}} 
							]
						},
						{
							id:4,
							type:'kline',
							sub:[
								{t: "ma", d: {n: 5, color: "blue"}}, 
								{t: "ma", d: {n: 10, color: "yellow"}} 
							]
						}
					]
				}
			]
		};
		
		trace( Json.stringify( panelModel.execute( 'getAry' )) );
		
		Reflect.setField( Browser.window, 'onHtmlTrigger', onHtmlTrigger );
	}
	
	function getStockAndDraw( stockId ) {
		getStock( stockId, true, function( ret:Dynamic ) {
			panelView.execute( 'drawAllCanvas', { 'ary_panel':panelModel.execute( 'getAry' ), 'stockId':stockId } );
		});
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
				panelModel.execute( 'addPanel', { 	'id':getId(),
													'type':EType.kline,
													'needMove':true,
													'props':[ { type:EProp.avg, value:1, show:false }, { type:EProp.kd, value:2, show:true } ] } );
			case 'removePanel':
				var panelDom = j( params.currentTarget ).parent().parent().parent().parent();
				var id = panelDom.attr( 'id' );
				panelModel.execute( 'removePanel', { 'id':id } );
		}
	}
	/*
	function removePanel( params ) {
		var panelDom = j( params.currentTarget ).parent().parent().parent().parent();
		var id = panelDom.attr( 'id' );
		var deleteName = 'k線: ' + id.substr( 'k_'.length, id.length );
	}
	*/
	
	static var id = 1;
	
	static function getId() {
		return id++;
	}
	
	static function main() 
	{
		new Main();
	}
	
	public static function getStock( id:Int, reset:Bool, cb:Dynamic -> Void ) {
		untyped __js__('stockId')( id, reset, cb );
	}
	
	public static function drawStock( canvas:Dynamic, id:Int, type:EType, params:Dynamic ) {
		untyped __js__('draw')( canvas[0], id, Std.string( type ), params );
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