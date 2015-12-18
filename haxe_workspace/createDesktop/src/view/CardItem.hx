package view;

/**
 * ...
 * @author vic
 */
class CardItem extends BasicItem
{
	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		trace( mediatorName, viewComponent );
		super(mediatorName, viewComponent);
	}
	
}