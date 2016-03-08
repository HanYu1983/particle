package;
import js.Browser;
import js.RegExp;

/**
 * ...
 * @author vic
 */
class Helper
{
	public static function initFb( cb ) {
		#if debug
		untyped __js__('myapp.facebook.init')( '679171275511375', cb );
		#else
		untyped __js__('myapp.facebook.init')( '425311264344425', cb );
		#end
	}
	
	public static function shareFb( name:String, link:String, picture:String, caption:String, description:String, cb:Dynamic -> Void ) {
		untyped __js__('myapp.facebook.postMessageToMyboard')( {
			name:name,
			link:link,
			picture:picture,
			caption:caption,
			description:description,
			callback:cb
		});
	}
	
	public static function loginFb( cb:String -> String -> Void ) {
		untyped __js__( 'myapp.facebook.login' )( function( ret ){
			cb( ret.authResponse.userID, ret.authResponse.accessToken );
		});
	}
	
	public static function getUUID() {
		return untyped __js__('leo.utils.generateUUID')();
	}
	
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