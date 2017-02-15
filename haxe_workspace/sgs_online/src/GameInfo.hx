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
	
	public static function collectCommand( cb ){
		untyped __js__("model.collectCommand")( roomID, userName, cb);
	}
	
	public static function pushCommand( passCmd, cb ){
		untyped __js__("model.pushCommand")(roomID, passCmd, cb);
	}

	public function new() 
	{
		
	}
	
}