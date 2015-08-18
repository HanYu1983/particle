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
	
	var j:Dynamic = untyped __js__('$');
	
	var slt_stockId:Dynamic;
	var mc_accordionContainer:Dynamic;
	var tmpl_panel:Dynamic;
	
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
				notify( ON_STOCKID_CHANGE, { 'stockId':stockId } );
			}
		});
	}
	
	public function setShowId( stockId:String ):Void {
		slt_stockId.textbox( 'setValue', stockId );
	}
	
	public function addPanel( stockId:String, params:Dynamic ):Void {
		var id = params.id;
		var type = params.type;
		var props = params.props;
		
		var dom = tmpl_panel.tmpl( {id:id, type:type } );
		mc_accordionContainer.accordion('add', {
			id:'k_' + id,
			title: 'k線: ' + id,
			content: dom,
			selected: true
		});
		params.root = dom;
		
		if( type != EType.clock )
			dom.find( 'canvas' ).attr( 'width', dom.find( 'canvas' ).parent().width() );
		
		if( props != null )
			createProp( dom.find( '#mc_propContainer' ), props );
			
		Main.drawStock( dom.find( '#canvas_kline' ), stockId, type, { } );
	}
	
	public function removePanel( id:String ):Void {
		var deleteName = 'k線: ' + id.substr( 'k_'.length, id.length );
		mc_accordionContainer.accordion( 'remove', deleteName );
	}
	
	public function drawAllCanvas( stockId:String, ary_panel:Array<Dynamic> ):Void {
		Lambda.map( ary_panel, function( stockMap ) {
			Main.drawStock( stockMap.root.find( '#canvas_kline' ), stockId, stockMap.type, { } );
		});
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
				checked:prop.show,
				onChange:function() {
					var target = j( untyped __js__ ( 'this' ));
					trace( target.attr( 'id' ));
				}
			});
			dom.find( '.easyui-textbox' ).textbox( {
				value:prop.value
			});
			
		});
		
	}
	
}