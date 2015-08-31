package view;

import model.Model;

/**
 * ...
 * @author vic
 */
class AboutView extends Model
{
	var mc_txtContainer:Dynamic;
	var dia_about:Dynamic;
	var aboutConfig:Dynamic;

	public function new() 
	{
		super();
		
	}
	
	override function init() 
	{
		super.init();
		
		mc_txtContainer = config.mc_txtContainer;
		aboutConfig = config.aboutConfig;
		dia_about = config.dia_about;
		
		mc_txtContainer.append( aboutConfig );
	}
}