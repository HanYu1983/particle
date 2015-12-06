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
	
	override public function flip( ?f:Bool ):Void 
	{
		if ( f != null ) {
			if ( f ) {
				viewComponent.find( '.card_back' ).hide();
			}else {
				viewComponent.find( '.card_back' ).show();
			}
		}else {
			
		}
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