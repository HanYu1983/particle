package view.component;

import model.Model;

/**
 * ...
 * @author vic
 */
class FileView extends Model
{
	var file_upload:Dynamic;

	public function new() 
	{
		super();
		
	}
	
	
	override function init() 
	{
		super.init();
		
		file_upload = config.file_upload;
	}
}