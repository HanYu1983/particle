package view;

import model.Model;
import model.PanelModel;

/**
 * ...
 * @author vic
 */
class PanelView extends Model
{
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
	}
	
	override public function execute(type:String, ?params:Dynamic):Dynamic 
	{
		switch( type ) {
			case PanelModel.ON_ADD_PANEL:
				var id = params.id;
				var dom = tmpl_panel.tmpl( {id:id, type:params.type } );
				mc_accordionContainer.accordion('add', {
					id:'k_' + id,
					title: 'k線: ' + id,
					content: dom,
					selected: true
				});
				params.root = dom;
			case 'drawAllCanvas':
				Lambda.map( params.ary_panel, function( stockMap ) {
					Main.drawStock( stockMap.root.find( '#canvas_kline' ), params.stockId, stockMap.type, { } );
				});
		}
		return null;
	}
	
}