package test;
import haxe.unit.TestRunner;

/**
 * ...
 * @author vic
 */
class Main
{
	static function main() {
		var tr = new TestRunner();
		tr.add( new TestModel() );
		tr.run();
		
		
	}

}