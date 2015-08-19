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
	
	var j:Dynamic = untyped __js__('$');
	
	var tmpl_panel:Dynamic;
	var slt_stockId:Dynamic;
	var mc_accordionContainer:Dynamic;
	var btn_controller:Dynamic;
	
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
		
		slt_stockId = config.slt_stockId;
		slt_stockId.textbox( {
			onChange:function(newValue, oldValue) {
				var stockId = newValue;
			//	notify( ON_STOCKID_CHANGE, { 'stockId':stockId } );
			}
		});
		
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
		slt_stockId.textbox( 'setValue', stockId );
	}
	
	public function addPanel( stockId:String, offset:Int, count:Int, panelData:Dynamic ):Void {
		
		var stockData = panelData.data;
		var id = stockData.id;
		var type = stockData.type;
		var props = stockData.sub;
		var deletable = stockData.deletable;
		
		var dom = tmpl_panel.tmpl( {id:id, type:type, deletable:deletable } );
		mc_accordionContainer.accordion('add', {
			id:'k_' + id,
			title: 'k線: ' + id,
			content: dom,
			selected: true
		});
		stockData.root = dom;
		
		if( type != EType.clock )
			dom.find( 'canvas' ).attr( 'width', dom.find( 'canvas' ).parent().width() );
		
		if( props != null )
			createProp( dom.find( '#mc_propContainer' ), props );
			
		Main.drawStock( dom.find( '#canvas_kline' ), stockId, type, offset, count, propsToDraw( props ) );
	}
	
	public function removePanel( id:String ):Void {
		var deleteName = 'k線: ' + id.substr( 'k_'.length, id.length );
		mc_accordionContainer.accordion( 'remove', deleteName );
	}
	
	public function drawAllCanvas( stockId:String, offset:Int = 0, ary_panel:Array<Dynamic> ):Void {
		Lambda.map( ary_panel, function( stockMap ) {
			Main.drawStock( stockMap.root.find( '#canvas_kline' ), stockId, stockMap.type, offset, { } );
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
						m:obj.value.m
					},
					'color':'red'
				});
			}
			return current;
		}, [] );
	}

	function createProp( container, props ) {
		Lambda.foreach( props, function( prop:Dynamic ) {
			
			prop.sid = 'swb_' + prop.type;
			prop.nid = 'input_n_' + prop.type;
			prop.mid = 'input_m_' + prop.type;
			
			var dom:Dynamic = switch( prop.type ) {
				case 'ma':
					j( '#tmpl_avg' ).tmpl( prop );
				case 'ema':
					j( '#tmpl_avg' ).tmpl( prop );
				case 'kd':
					j( '#tmpl_avg' ).tmpl( prop );
				case 'macd':
					j( '#tmpl_avg' ).tmpl( prop );
				case 'yu-clock':
					j( '#tmpl_avg' ).tmpl( prop );
				case 'yu-sd':
					j( '#tmpl_avg' ).tmpl( prop );
				case 'Chaikin':
					j( '#tmpl_avg' ).tmpl( prop );
				case _:
					throw 'do not enter here!';
			}
			container.append( dom );
			
			dom.find( '.easyui-switchbutton' ).switchbutton( {
				checked:prop.show,
				onChange:function() {
					var target = j( untyped __js__ ( 'this' ));
					trace( target.attr( 'id' ));
				}
			});
			dom.find( '.easyui-textbox' ).eq(0).textbox( {
				value:prop.value.n
			});
			dom.find( '.easyui-textbox' ).eq(1).textbox( {
				value:prop.value.m
			});
			return true;
		});
		
	}
	
}