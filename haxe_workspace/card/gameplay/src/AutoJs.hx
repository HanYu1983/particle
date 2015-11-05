package;
import haxe.macro.Context;
import haxe.macro.Expr.Access;
import haxe.macro.Expr.Field;

/**
 * ...
 * @author vic
 */
class AutoJs
{
	/**
	 * 
	 * @param	config : ['console_log', 'app_doA']
	 * @return
	 */
	macro static public function build( config:Array<String> ):Array<Field> {
		var fs = Context.getBuildFields();
		var pos = Context.currentPos();
		
		Lambda.foreach( config, function( str ) {
			var funstr = StringTools.replace( str, '.', '_' );
			fs.push( {
				kind:FVar(TPath({name:'Dynamic', pack:[]}),macro untyped __js__( $v { str } ) ),
				access:[Access.APublic, Access.AStatic],
				doc:null,
				name:funstr,
				meta:[],
				pos:pos
			});
			
			return true;
		});
		
		return fs;
	}
}