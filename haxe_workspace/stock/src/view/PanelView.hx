package view;

import model.Model;
import model.PanelModel;

/**
 * ...
 * @author vic
 */
class PanelView extends Model implements IPanelView
{
	public static var ON_STOCKID_CHANGE = 'on_stockid_change';
	public static var ON_OFFSET_CHANGE = 'on_offset_change';
	public static var ON_SHOWLINE_VALUE_CHANGE = 'on_showline_value_change';
	public static var ON_SHOWLINE_CHANGE = 'on_showline_change';
	public static var ON_SHOWLINE_K_CHANGE = 'on_showline_k_change';
	public static var ON_BTN_ADDPANEL_CLICK = 'on_btn_addPanel_click';
	public static var ON_BTN_REMOVEPANEL_CLICK = 'on_btn_removePanel_click';
	
	var j:Dynamic = untyped __js__('$');
	
	var tmpl_panel:Dynamic;
	var slt_stockId:Dynamic;
	var mc_accordionContainer:Dynamic;
	var btn_controller:Dynamic;
	var btn_addPanel:Dynamic;
	
	public function new() 
	{
		super();
		
	}
	
	override function init() 
	{
		super.init();
		
		mc_accordionContainer = config.mc_accordionContainer;
		mc_accordionContainer.accordion();
		
		tmpl_panel = config.tmpl_panel;
		
		btn_addPanel = config.btn_addPanel;
		btn_addPanel.click( function( e ) {
			notify( ON_BTN_ADDPANEL_CLICK );
		});
		
		slt_stockId = config.slt_stockId;
		
		btn_controller = config.btn_controller;
		btn_controller.delegate( '.btn_controller', 'click', function( e ) {
			var target = e.currentTarget;
			var id = j( target ).attr( 'id' );
			switch( id ) {
				case 'btn_first':
					notify( ON_OFFSET_CHANGE, { value:-10000 } );
				case 'btn_prev10':
					notify( ON_OFFSET_CHANGE, { value:-10 } );
				case 'btn_prev':
					notify( ON_OFFSET_CHANGE, { value:-1 } );
				case 'btn_next':
					notify( ON_OFFSET_CHANGE, { value:1 } );
				case 'btn_next10':
					notify( ON_OFFSET_CHANGE, { value:10 } );
				case 'btn_last':
					notify( ON_OFFSET_CHANGE, { value:10000 } );
			}
		});
	}
	
	public function setShowId( stockId:String ):Void {
		slt_stockId.textbox( {
			value:stockId,
			onChange:function(newValue, oldValue) {
				var stockId = newValue;
				notify( ON_STOCKID_CHANGE, { 'stockId':stockId } );
			}
		});
	}
	
	public function addPanel( stockId:String, offset:Int, count:Int, panelData:Dynamic ):Void {
		
		var stockData = panelData.data;
		var id = stockData.id;
		var type = stockData.type;
		var props = stockData.sub;
		var deletable = stockData.deletable;
		
		var dom:Dynamic = tmpl_panel.tmpl( {id:id, type:type, deletable:deletable } );
		mc_accordionContainer.accordion('add', {
			id:'k_' + id,
			title: 'k線: ' + id,
			content: dom,
			selected: true
		});
		panelData.root = dom;
		
		//if( type != EType.clock )
		//	dom.find( 'canvas' ).attr( 'width', dom.find( 'canvas' ).parent().width() );
			
		if ( type == EType.kline || type == EType.none ){
			dom.find( '#slt_showKline' ).switchbutton( {
				checked:type == EType.kline,
				onChange:function( checked ) {
					notify( ON_SHOWLINE_K_CHANGE, { id:panelData.id, show:checked } );
				}
			});
		}
		
		dom.find( '#btn_removePanel' ).click( function() {
			notify( ON_BTN_REMOVEPANEL_CLICK, { id:panelData.id } );
		});
		
		if( props != null )
			createProp( dom.find( '#mc_propContainer' ), props, panelData );
			
		drawCanvas( stockId, offset, count, panelData );
	}
	
	public function removePanel( id:String ):Void {
		var deleteName = 'k線: ' + id;
		mc_accordionContainer.accordion( 'remove', deleteName );
	}
	
	public function drawCanvas( stockId:String, offset:Int, count:Int, panelData:Dynamic ):Void {
		Main.drawStock( panelData.root.find( '#canvas_kline' ), stockId, panelData.data.type, offset, count, propsToDraw( panelData.data.sub ) );
	}
	
	public function drawAllCanvas( stockId:String, offset:Int = 0, count:Int, ary_panel:Array<Dynamic> ):Void {
		Lambda.map( ary_panel, function( panelData ) {
			drawCanvas( stockId, offset, count, panelData );
		});
	}
	
	function propsToDraw( props ) {
		return Lambda.fold( props, function( obj, current ) {
			if ( obj.show ) {
				current.push( 
				{
					't': Std.string( obj.type ),
					'd': {
						n:obj.value.n,
						m:obj.value.m,
						o:obj.value.o,
						p:obj.value.p
					},
					'color':'red'
				});
			}
			return current;
		}, [] );
	}

	function createProp( container, props:Dynamic, panelData:Dynamic ) {
		function onInputChange( dom:Dynamic ) {
			return function ( newv, oldv ){
				var target = j( untyped __js__ ( 'this' ));
				var type = dom.find( '.easyui-switchbutton' ).attr( 'ktype' );
				var value = [];
				dom.find( '.easyui-textbox' ).each( function( id, subdom ) {
					value.push( j( subdom ).textbox('getValue' ) );
				});
				notify( ON_SHOWLINE_VALUE_CHANGE, { id:panelData.id, type:type, value:value } );
			}
		}
		
		Lambda.foreach( props, function( prop:Dynamic ) {
			
			prop.sid = 'swb_' + prop.type;
			prop.nid = 'input_n_' + prop.type;
			prop.mid = 'input_m_' + prop.type;
			
			var dom = j( '#tmpl_avg' ).tmpl( prop );
			container.append( dom );
			
			dom.find( '.easyui-switchbutton' ).switchbutton( {
				checked:prop.show,
				onChange:function( checked ) {
					var target = j( untyped __js__ ( 'this' ));
					var type = target.attr( 'ktype' );
					notify( ON_SHOWLINE_CHANGE, { id:panelData.id, type:type, show:checked } );
				}
			});
			dom.find( '.easyui-textbox' ).eq(0).textbox( {
				value:prop.value.n,
				onChange:onInputChange( dom )
			});
			dom.find( '.easyui-textbox' ).eq(1).textbox( {
				value:prop.value.m,
				onChange:onInputChange( dom )
			});
			dom.find( '.easyui-textbox' ).eq(2).textbox( {
				value:prop.value.o,
				onChange:onInputChange( dom )
			});
			dom.find( '.easyui-textbox' ).eq(3).textbox( {
				value:prop.value.p,
				onChange:onInputChange( dom )
			});
			return true;
		});
		
	}
	
}