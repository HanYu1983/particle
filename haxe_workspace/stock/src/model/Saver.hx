package model;
import haxe.Timer;

/**
 * ...
 * @author vic
 */
class Saver extends Model
{
	public static var ON_SAVE_START = 'ON_SAVE_START'; 
	public static var ON_SAVE_SUCCESS = 'ON_SAVE_SUCCESS'; 
	public static var ON_SAVE_NO_FBID = 'ON_SAVE_NO_FBID'; 
	
	public var fbid(default, set ):String = '';
	public var fbtoken(default, set ):String = '';
	public var saveobj(default, set ):Dynamic;
	public var showLoading = false;
	
	var _timer:Timer;

	public function new() 
	{
		super();
		
	}
	
	public function startAuto() {
		if ( fbid == '' ) return;
		if ( _timer != null ) _timer.stop();
		showLoading = false;
		_timer = Timer.delay( save, 1000 * 10 );
	}
	
	public function save() {
		if ( fbid == '' ) {
			notify( ON_SAVE_NO_FBID );
			return;
		}
		notify( ON_SAVE_START );
		Main.save( fbid, fbtoken, optmize(), onSaveOk );
	}
	
	function optmize() {
		var saveobj2 = {
			current:saveobj.current,
			stocks:Lambda.fold( saveobj.stocks, function( s, curr ) {
				if ( s.favor ) curr.push( s );
				return curr;
			}, [])
		}
		return saveobj2;
	}
	
	function onSaveOk( e ) {
		notify( ON_SAVE_SUCCESS );
	}
	
	function set_fbid( fbid ) {
		return this.fbid = fbid;
	}
	
	function set_saveobj( saveobj ) {
		return this.saveobj = saveobj;
	}
	
	function set_fbtoken( token ) {
		return fbtoken = token;
	}
}