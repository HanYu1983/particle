package testMacro;
import haxe.macro.Context;
import haxe.macro.Expr;
/**
 * ...
 * @author vic
 */
class TestMacro
{
	static function main() {
	//	var x:Int = 0;
		//trace( add( ++x ) );
		
		var ac = add("BC");
		trace( ac.ABC() );
		ac.ABC();
		ac.doCHaha();
		TestA;
	}

	macro static function add( e:Expr ) {
		trace("GG");
		trace( e );
		var y = 10;
		var abc = 10;
		var expr = $v { y };
		var fn = 'doCHaha';
		
		var f = Context.getBuildFields();
		
		trace( expr );
		trace( f );
		trace( Context.currentPos() );
		
		var funcName = 'ABC';
		var c = macro class MyClass {
		  public function new() { }
		  public function $funcName() {
			//funcName = 'cc';
			var abc = 'ccc';
			trace( abc );
			trace( $v{expr} );
			trace($v { funcName } + " was called");
			
			
		  }
		  
		  public function $fn() {
			 trace("do");
		  }
		}
		haxe.macro.Context.defineType(c);
		return macro new MyClass();
		//return macro null;
	}
}


