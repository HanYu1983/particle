package inter;

/**
 * ...
 * @author vic
 */
class AbstractDom implements IDom
{
	var _dom:Dynamic;
	var _event:Dynamic;
	var j:Dynamic = untyped __js__('$');
	
	public function new( dom ) 
	{
		_dom = dom;
		_event = j( '<div></div>' );
		init();
	}
	
	public function init():Void {
		
	}
	
	public function getEvent():Dynamic {
		return _event;
	}
	
	public function getDom():Dynamic {
		return _dom;
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