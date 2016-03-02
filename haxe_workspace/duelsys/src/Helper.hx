package;
import js.Browser;
import js.RegExp;

/**
 * ...
 * @author vic
 */
class Helper
{

	public static function talk( cmd:String, ?cb:Dynamic -> Void, ?values:Array<Dynamic> ) {
		untyped __js__('api.talk')( formatString( cmd, ~/%s/gm, values ), function( err, ret ) {
			if ( err == null ) {
				if ( cb != null ) cb( ret );
			}else {
				Browser.alert( err );
			}
		});
	}
	
	static function formatString( oristr:String, reg:EReg, values:Array<Dynamic> ) {
		return reg.map( oristr, function( e ) {
			if ( values.length == 0 ) throw 'not enough value!';
			return values.shift();
		});
	}
}