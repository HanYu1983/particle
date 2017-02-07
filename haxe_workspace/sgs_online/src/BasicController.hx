package;

/**
 * ...
 * @author vic
 */
class BasicController
{
	public var uid(default,null):String;
	public var mediator(default, default):AppController;

	public function new( _uid:String = "" ) 
	{
		if ( _uid == "" ) _uid = Tools.uuid();
		uid = _uid;
	}
	
}