package view;

import model.Model;

/**
 * ...
 * @author vic
 */
class DynamicView extends Model
{
	var table_props:Dynamic;

	public function new() 
	{
		super();
		
	}
	
	override function init() 
	{
		super.init();
		
		table_props = config.table_props;
		table_props.datagrid();
	}
}