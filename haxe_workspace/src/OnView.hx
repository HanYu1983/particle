package;

/**
 * ...
 * @author vic
 */
class OnView
{
	public static var inst = new OnView();
	
	//{id: "xxx", pos:[0 0 0], vel: [0 0 0], color: [1 0 0 1], mass: 1, size: [10 10]}
	var onViewObj:Dynamic = untyped __js__('common.onView');
	
	private function new() 
	{
		
	}
	
	public function moveParticle( id, x, y ) {
		notify( 'edit-particle', {id:id, pos:[x, y, 0] } );
	}
	
	public function setParticle( id, x, y, vx, vy, color:Array<Int>, mass, size:Array<Float>) {
		notify( 'edit-particle', {id:id, pos:[x,y,0], vel:[vx, vy, 0], color:color, mass:mass, size:size} );
	}
	
	function notify( evt:String, value:Dynamic) {
		onViewObj.onNext( evt, value );
	}
}