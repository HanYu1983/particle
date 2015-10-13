package;
import haxe.macro.Context;
import haxe.macro.Expr.Field;
import haxe.macro.Expr.Access;

/**
 * ...
 * @author vic
 */
class MacroBuildJs
{
	macro public static function build( ary_str:Array<String> ):Array <Field> {
		var fs = Context.getBuildFields();
		var pos = Context.currentPos();
		Lambda.foreach( ary_str, function( str ) {
			var funstr = StringTools.replace( str, '_', '.' );
			fs.push( {
				kind:FVar(TPath({name:'Dynamic', pack:[]}), macro untyped __js__( $v{ funstr } )),
				access:[Access.APublic, Access.AStatic],
				name: str,
				meta:[],
				pos:pos
			});
			return true;
		});
		return fs;
	}
}