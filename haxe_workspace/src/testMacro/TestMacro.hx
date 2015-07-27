package testMacro;
/**
 * ...
 * @author vic
 */
@:build(TypeBuildingMacro.build("myFunc"))
class TestMacro
{
	static function main() {
		trace(Main.myFunc); // my default
	}

	
}


