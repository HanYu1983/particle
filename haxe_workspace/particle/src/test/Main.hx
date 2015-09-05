package test;
import haxe.unit.TestRunner;
import js.Browser;

/**
 * ...
 * @author vic
 */
class Main
{
	static function main() {
		Reflect.setField( Browser.window, 'haxeStart', haxeStart );
	}
	
	static function haxeStart() {
		var tr = new TestRunner();
		tr.add( new TestTree() );
		tr.add( new TestGrid() );
		tr.run();
	}

	public function new() 
	{
		
	}
	
}