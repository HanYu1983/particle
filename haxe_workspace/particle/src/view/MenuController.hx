package view;

import model.Model;

/**
 * ...
 * @author vic
 */
class MenuController extends Model
{
	var mc_menu:Dynamic;

	public function new() 
	{
		super();
		
	}
	
	override function init() 
	{
		super.init();
		
		mc_menu = config.mc_menu;
	}
}