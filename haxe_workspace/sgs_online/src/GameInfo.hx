package;

/**
 * ...
 * @author vic
 */
class GameInfo 
{
	public static var userName( default, default ):String;
	
	public static var roomID(get, null):String;
	static function get_roomID(){
		return roomData.ID;
	}
	
	public static var roomRoles(get, null):Dynamic;
	static function get_roomRoles(){
		return roomData.Roles;
	}
	
	public static var roomPlayers(get, null):Dynamic;
	static function get_roomPlayers(){
		return roomData.Players;
	}
	
	public static var roomData(null, default):Dynamic;
	
	public static function tableInfo(cb){
		untyped __js__("model.game")(roomID, cb);
	}
	
	public static function collectCommand( cb ){
		untyped __js__("model.collectCommand")( roomID, userName, cb);
	}
	
	public static function pushCommand( passCmd, cb ){
		untyped __js__("model.pushCommand")(roomID, passCmd, cb);
	}
	
	public static function isMe( gameInfo:Dynamic ):Bool{
		var priorityPlayer = gameInfo.PriorityPlayer;
		var id = roomRoles.indexOf( priorityPlayer );
		return roomPlayers[id] == userName;
	}

	public function new() 
	{
		
	}
	
}