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
		getEvent().trigger( type, options );
	}
	
	public function on( type:String, fn:Dynamic -> Dynamic -> Void ):Void {
		getEvent().on( type, fn );
	}
}