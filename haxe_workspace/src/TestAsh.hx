package;
import ash.core.Engine;
import ash.core.Entity;
import ash.core.System;

/**
 * ...
 * @author vic
 */
class TestAsh
{
	static function main() {
		new TestAsh();
	}

	public function new() 
	{
		var e = new Engine();
		var p = new Entity( 'player' );
		e.addEntity( p );
		
		
		
		var s = new System();
		s.
		e.addSystem( s, 1 );
		
		e.update( 100 );
	}
	
}