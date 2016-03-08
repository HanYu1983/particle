package;
import js.Browser;
import js.RegExp;

/**
 * ...
 * @author vic
 */
class Helper
{
	public static function drawTree( nodes, links, dom ) {
		trace( links );
		untyped __js__( 'app.drawTree' )( untyped __js__( 'app.dataToTreeData' )(nodes, links), dom );
	}

	public static function talk( cmd:String, ?cb:Dynamic -> Void, ?values:Array<Dynamic> ) {
		untyped __js__('api.talk')( formatString( cmd, ~/\(\.\+\)/gm, values ), function( err, ret ) {
			trace( err, err == null );
			if ( err == null ) {
				if ( cb != null ) cb( ret );
			}else {
				trace("DcCC");
				Browser.alert( err );
			}
		});
	}
	
	static function formatString( oristr:String, reg:EReg, ?values:Array<Dynamic> ) {
		trace( values );
		var retstr = reg.map( oristr, function( e ) {
			if ( values.length == 0 ) throw 'not enough value!';
			return values.shift();
		});
		trace( retstr );
		return retstr;
	}
}