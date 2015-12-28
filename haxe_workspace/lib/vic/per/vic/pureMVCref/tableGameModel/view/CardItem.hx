package per.vic.pureMVCref.tableGameModel.view;
import per.vic.pureMVCref.tableGameModel.view.BasicItem;

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