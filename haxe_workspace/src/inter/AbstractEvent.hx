package inter;

/**
 * ...
 * @author vic
 */
class AbstractEvent extends AbstractDom implements IEvent
{
	var _event:Dynamic;

	public function new( dom ) 
	{
		super( dom );
		
		_event = j( '<div></div>' );
	}
	
	public function getEvent():Dynamic 
	{
		return _event;
	}
	
	public function trigger( type:String, options:Dynamic ):Void {
		trace( 'trigger', type, options );
		getDom().trigger( type, options );
	}
	
	public function on( type:String, fn:Dynamic -> Void ):Void {
		trace( 'on', type, fn );
		getDom().on( type, fn );
	}
}