package test.testMacro;

/**
 * ...
 * @author vic
 */
@:build(test.testMacro.Profiler.profile())
class ProfiledClassA
{
    public function new() {}

    public function doSomething():Float { return 3.141592; }
}
