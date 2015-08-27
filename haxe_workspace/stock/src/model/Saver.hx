package model;
import haxe.Timer;

/**
 * ...
 * @author vic
 */
class Saver extends Model
{
	public static var ON_SAVE_SUCCESS = 'ON_SAVE_SUCCESS'; 
	
	public var fbid(default, set ):String = '';
	public var saveobj(default, set ):Dynamic;
	
	var _timer:Timer;

	public function new() 
	{
		super();
		
	}
	
	public function startAuto() {
		if ( fbid == '' ) return;
		if ( _timer != null ) _timer.stop();
		_timer = Timer.delay( save, 10000 );
	}
	
	public function save() {
		if ( fbid == '' ) return;
		Main.save( fbid, saveobj, onSaveOk );
	}
	
	public function load() {
		
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
}