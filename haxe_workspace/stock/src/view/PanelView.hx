package view;

import model.Model;
import model.PanelModel;

/**
 * ...
 * @author vic
 */
class PanelView extends Model
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
	
	override public function execute(type:String, ?params:Dynamic):Dynamic 
	{
		switch( type ) {
			case PanelModel.ON_ADD_PANEL:
				addPanel( params );
			case PanelModel.ON_REMOVE_PANEL:
				removePanel( params.id );
			case 'drawAllCanvas':
				Lambda.map( params.ary_panel, function( stockMap ) {
					Main.drawStock( stockMap.root.find( '#canvas_kline' ), params.stockId, stockMap.type, { } );
				});
				slt_stockId.textbox( 'setValue', params.stockId);
		}
		return null;
	}
	
	function addPanel( params ) {
		var id = params.id;
		
		var dom = tmpl_panel.tmpl( {id:id, type:params.type } );
		mc_accordionContainer.accordion('add', {
			id:'k_' + id,
			title: 'k線: ' + id,
			content: dom,
			selected: true
		});
		params.root = dom;
		
		if( params.type != 'clock' )
			dom.find( 'canvas' ).attr( 'width', dom.find( 'canvas' ).parent().width() );
		
		if( params.props != null )
			createProp( dom.find( '#mc_propContainer' ), params.props );
	}
	
	function removePanel( id ) {
		var deleteName = 'k線: ' + id.substr( 'k_'.length, id.length );
		mc_accordionContainer.accordion( 'remove', deleteName );
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