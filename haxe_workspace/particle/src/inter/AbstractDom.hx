package inter;

/**
 * ...
 * @author vic
 */
class AbstractDom implements IDom
{
	var _dom:Dynamic;
	var j:Dynamic = untyped __js__('$');
	
	public function new( dom ) 
	{
		_dom = dom;
		init();
	}
	
	public function init():Void {
		
	}
	
	public function getDom():Dynamic {
		return _dom;
	}
	
}