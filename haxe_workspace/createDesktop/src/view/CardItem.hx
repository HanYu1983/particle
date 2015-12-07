package view;

/**
 * ...
 * @author vic
 */
class CardItem extends BasicItem
{
	public function new(?mediatorName:String, ?viewComponent:Dynamic) 
	{
		super(mediatorName, viewComponent);
		
	}
	
	override function showItemForMe() 
	{
		viewComponent.find( '.card_back' ).hide();
	}
	
	override function hideItemForMe() 
	{
		viewComponent.find( '.card_back' ).show();
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