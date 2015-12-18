package view;

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
	
	override public function setOwner(o:String):Void 
	{
		//nothing
	}
	
	override public function setViewer(v:String):Void 
	{
		//nothing
	}
}