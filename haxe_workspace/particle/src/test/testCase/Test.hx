package test.testCase;

import component.Particle;
import component.ParticleManager;
import haxe.unit.TestCase;
import haxe.unit.TestRunner;

/**
 * ...
 * @author vic
 */
class Test extends TestCase
{
	static function main() {
		new Test();
	}

	public function new() 
	{
		super();
		
		var tr = new TestRunner();
		tr.add( this );
		tr.run();
	}
	
	var pm = ParticleManager.inst;
	
	public function testParticleManager() {
		pm.addParticle( new Particle(  null, { id:Main.getId() } ));
		//assertEquals( pm.getParticles().
	}
	
}