package component;

/**
 * ...
 * @author vic
 */
class ParticleManager
{
	public static var inst = new ParticleManager();
	var coll_particle = new Map<String,Particle>();
	
	private function new() 
	{
		
	}
	
	public function addParticle( data ) {
		coll_particle.set( data.id, new Particle( data.emit == null ? EParticleType.PARTICLE : EParticleType.EMITTER, data ));
	}
	
	public function getParticle( id ) {
		
	}
}