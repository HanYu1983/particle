package view;
import view.BasicItem;

/**
 * ...
 * @author vic
 */
class TokenItem extends BasicItem
{

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
	}
	
	override public function flip(?f:Bool):Void 
	{
		//nothing
	}
	
}