package;

import js.Browser;
import js.Lib;

/**
 * ...
 * @author vic
 */
class Main 
{
	var j:Dynamic = untyped __js__( '$' );
	var tmpl_panel:Dynamic;
	
	var ary_panel_obj = new Array<Dynamic>();
	var slt_stockId:Dynamic;
	var mc_accordionContainer:Dynamic;
	var currentStockId = null;
	var currentScrollX = null;
	
	function new() {
		
		tmpl_panel = j("#tmpl_panel");
		
		slt_stockId = j( '#slt_stockId' );
		mc_accordionContainer = j("#mc_accordionContainer" );
		
		ary_panel_obj.push( {
			canvas:j( '#canvas_kline' ),
			needMove:true,
			type:EType.kline,
			root:j('#mc_kline' )
		});
		ary_panel_obj.push( {
			canvas:j( '#canvas_exchange' ),
			needMove:true,
			type:EType.volume,
			root:j('#mc_exchange' )
		});
		ary_panel_obj.push( {
			canvas:j( '#canvas_clock' ),
			needMove:false,
			type:EType.clock,
			root:null
		});
		
		slt_stockId.textbox( {
			onChange:function(newValue, oldValue) {
				var stockId = newValue;
				getStock( stockId, true, function( ret:Dynamic ) {
					currentStockId = stockId;
					drawAllCanvas( stockId );
				});
			}
		});
		
		resetAllCanvasListener();
		
		Reflect.setField( Browser.window, 'onHtmlTrigger', onHtmlTrigger );
	}
	
	function drawAllCanvas( stockId ) {
		Lambda.map( ary_panel_obj, function( stockMap ) {
			drawStock( stockMap.canvas, stockId, stockMap.type, { } );
		});
	}
	
	function resetAllCanvasListener() {
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
						if( checked ){
							var target = j( untyped __js__ ( 'this' ));
							var type = switch( target ) {
								case 'swb_avg':
									'';
								case _:
									'';
							}
							
							
						}else {
							
						}
						
						root.find( '.easyui-switchbutton' ).each( function(id, dom) {
							var jdom = j( dom );
							var checkDom = jdom.parent().find( '.switchbutton-inner' );
							trace( checkDom.css( 'margin-left' ));
							//trace( j( dom ).switchbutton );
							//var jdom = j( dom );
							//trace( j(dom).switchbutton( 'value'));
						});
					}
				});
			}
		});
	}
	
	function onHtmlTrigger( name, params ) {
		switch( name ) {
			case 'addPanel':
				addPanel( params );
			case 'removePanel':
				removePanel( params );
		}
	}
	
	function addPanel( params ) {
		var id = getId();
		var dom = tmpl_panel.tmpl({id:id});
		mc_accordionContainer.accordion('add', {
			id:'k_' + id,
			title: 'k線: ' + id,
			content: dom,
			selected: true
		});
		
		ary_panel_obj.push( {
			id:id,
			canvas:dom.find( '#canvas_kline' ),
			needMove:true,
			type:EType.kline
		});
		
		if( currentStockId != null )
			drawStock( dom.find( '#canvas_kline' ), currentStockId, EType.kline, { } );
			
		resetAllCanvasListener();
	}
	
	function removePanel( params ) {
		var panelDom = j( params.currentTarget ).parent().parent().parent().parent();
		var id = panelDom.attr( 'id' );
		var deleteName = 'k線: ' + id.substr( 'k_'.length, id.length );
		mc_accordionContainer.accordion( 'remove', deleteName );
		
		Lambda.foreach( ary_panel_obj, function ( stockMap ) {
			if ( stockMap.id == id ) {
				ary_panel_obj.remove( stockMap );
				return true;
			}
			return false;
		});
	}
	
	function onSwtChange( params ) {
		trace( params );
	}
	
	static var id = 1;
	
	static function getId() {
		return id++;
	}
	
	static function main() 
	{
		new Main();
	}
	
	static function getStock( id:Int, reset:Bool, cb:Dynamic -> Void ) {
		untyped __js__('stockId')( id, reset, cb );
	}
	
	static function drawStock( canvas:Dynamic, id:Int, type:EType, params:Dynamic ) {
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