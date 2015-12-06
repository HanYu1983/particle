package view;
import org.puremvc.haxe.interfaces.INotification;

/**
 * ...
 * @author vic
 */
class MapItem extends BasicItem implements IItem
{

	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
	}
	
	override public function rotateForward( sd:Int, ed:Int ):Void 
	{
		rotateAnimation( sd, ed );
	}
	
	override public function rotateBackward( sd:Int, ed:Int ):Void 
	{
		rotateAnimation( sd, ed );
	}
}