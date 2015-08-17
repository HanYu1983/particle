package;

import js.Browser;
import js.Lib;
import model.Model;
import model.PanelModel;

/**
 * ...
 * @author vic
 */
class Main 
{
	var j:Dynamic = untyped __js__( '$' );
	var tmpl_panel:Dynamic;
	
	var slt_stockId:Dynamic;
	var mc_accordionContainer:Dynamic;
	var currentStockId = null;
	var currentScrollX = null;
	
	var panelModel:Model = new PanelModel();
	
	function new() {
		
		tmpl_panel = j("#tmpl_panel");
		
		slt_stockId = j( '#slt_stockId' );
		mc_accordionContainer = j("#mc_accordionContainer" );
		
		panelModel.addHandler( function( type, params ) {
			switch( type ) {
				case PanelModel.ON_ADD_PANEL:
					trace( params );
					addPanel( params );
				case _:
			}
		});
		
		//從model端來的資料(暫定)
		panelModel.config = {
			panel:[
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
				}
			]
		};
		
		//panelModel.
		/*
		ary_panel_obj.push( {
			id:'kline',
			canvas:j( '#canvas_kline' ),
			needMove:true,
			type:EType.kline,
			root:j('#mc_kline' ),
			props:[ { type:EProp.avg, value:1, show:false }, 
					{ type:EProp.kd, value:2, show:true } ]
		});
		ary_panel_obj.push( {
			id:'exchange',
			canvas:j( '#canvas_exchange' ),
			needMove:true,
			type:EType.volume,
			root:j('#mc_exchange' ),
			props:[ { type:EProp.avg, value:1, show:false }, 
					{ type:EProp.kd, value:2, show:true } ]
		});
		ary_panel_obj.push( {
			id:'clock',
			canvas:j( '#canvas_clock' ),
			needMove:false,
			type:EType.clock,
			root:null,
			props:null
		});
		*/
		/*
		slt_stockId.textbox( {
			onChange:function(newValue, oldValue) {
				var stockId = newValue;
				getStock( stockId, true, function( ret:Dynamic ) {
					currentStockId = stockId;
					drawAllCanvas( stockId );
				});
			}
		});
		*/
		createAllProp();
		resetAllCanvasListener();
		
		Reflect.setField( Browser.window, 'onHtmlTrigger', onHtmlTrigger );
	}
	
	function drawAllCanvas( stockId ) {
		/*
		Lambda.map( ary_panel_obj, function( stockMap ) {
			drawStock( stockMap.canvas, stockId, stockMap.type, { } );
		});
		*/
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
		/*
		ary_panel_obj.push( {
			id:id,
			canvas:dom.find( '#canvas_kline' ),
			needMove:true,
			type:EType.kline,
			root:dom,
			props:[ { type:EProp.avg, value:1, show:false }, 
					{ type:EProp.kd, value:2, show:true } ]
		});
		*/
		if( currentStockId != null )
			drawStock( dom.find( '#canvas_kline' ), currentStockId, EType.kline, { } );
			
		//createProp( dom.find( '#mc_propContainer' ), ary_panel_obj[ ary_panel_obj.length - 1].props );
		resetAllCanvasListener();
	}
	
	function removePanel( params ) {
		var panelDom = j( params.currentTarget ).parent().parent().parent().parent();
		var id = panelDom.attr( 'id' );
		var deleteName = 'k線: ' + id.substr( 'k_'.length, id.length );
		mc_accordionContainer.accordion( 'remove', deleteName );
		/*
		Lambda.foreach( ary_panel_obj, function ( stockMap ) {
			if ( stockMap.id == id ) {
				ary_panel_obj.remove( stockMap );
				return true;
			}
			return false;
		});
		*/
	}
	
	function createAllProp() {
		/*
		Lambda.map( ary_panel_obj, function( obj ) {
			if( obj.props != null ) createProp( obj.root.find( '#mc_propContainer' ), obj.props );
		});
		*/
	}
	
	function createProp( container, props ) {
		Lambda.map( props, function( prop:Dynamic ) {
			prop.sid = 'swb_' + prop.type;
			prop.vid = 'input_' + prop.type;
			
			var dom:Dynamic = switch( prop.type ) {
				case EProp.avg:
					j( '#tmpl_avg' ).tmpl( prop );
				case EProp.kd:
					j( '#tmpl_avg' ).tmpl( prop );
				case _:
					null;
			}
			container.append( dom );
			
			dom.find( '.easyui-switchbutton' ).switchbutton( {
				checked:prop.show
			});
			dom.find( '.easyui-textbox' ).textbox( {
				value:prop.value
			});
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