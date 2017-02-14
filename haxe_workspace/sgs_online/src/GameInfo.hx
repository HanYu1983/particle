package;

/**
 * ...
 * @author vic
 */
class GameInfo 
{
	public static var userName = '';
	public static var roomID = '';
	
	public static function tableInfo(cb){
		untyped __js__("model.game")(roomID, cb);
	}

	public function new() 
	{
		
	}
	
}