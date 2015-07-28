package test.testMacro;
import ash.core.Node;
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
		
	//	var ac = add("BC");
	//	trace( ac.ABC() );
	//	ac.ABC();
	//	ac.doCHaha();
	
		//var pa = new ProfiledClassA();
		//pa.doSomething();
		
		//var p = new Player();
		
		//var x = 0;
		//var y = 0;
		//trace( doA(++y, y+=2, [for ( x in 0...10 ) x * y ] ) );
		
	//	trace( FileNames.fire01_128_128__jpg );
	//	trace( FileNames.fire01_128_128__jpg );
	
		var vn = new VicNode();
		trace( vn.animation );
		trace( VicNode._getComponents().get( VicCompo ));
	}
	/*
	macro static function doA( els:Array<Expr> ) {
		for ( el in els ) {
			trace( el );
		}
		return macro $b{els};
	}*/
	
/*
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
	*/
}

class VicCompo {
	public var a = 'a';
}

class VicNode extends Node<VicNode> {
	public function new() {
		
	}
	public var animation:VicCompo;
}
