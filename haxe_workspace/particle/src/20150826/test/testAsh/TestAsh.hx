package test.testAsh;
import ash.core.Engine;
import ash.core.Entity;
import ash.core.System;
import haxe.Timer;

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
		var engine = new Engine();
		var gameManager = new GameManager();
		engine.addSystem( gameManager, 0 );
		
		var player = new Entity();
		engine.addEntity( player );
		
		{
			var timestamp = Math.floor( 1000 / 30 );
			new Timer( timestamp ).run = function() {
				engine.update( timestamp );
			}
		}
	}
	
}

class GameManager extends System {
	
}