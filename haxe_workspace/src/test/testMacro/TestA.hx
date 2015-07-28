package test.testMacro;

/**
 * ...
 * @author vic
 */
@:build(TypeBuildingMacro.build("myFunc"))
class TestA
{

	static function method() { }
}