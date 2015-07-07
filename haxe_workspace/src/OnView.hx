package;

/**
 * ...
 * @author vic
 */
class OnView
{
	public static var inst = new OnView();
	
	var onViewObj:Dynamic = untyped __js__('common.onView');
	
	
	private function new() 
	{
		
	}
	
	public function moveParticle( id, x, y ) {
		notify( 'edit-particle', { } );
	}
	
	public function setParticle( options:Dynamic ) {
		notify( 'edit-particle', options );
	}
	
	function notify( evt:String, value:Dynamic) {
		onViewObj.onNext( evt, value );
	}
}