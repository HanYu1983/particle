package component;
import inter.IParticle;

/**
 * ...
 * @author vic
 */
class ParticleManager
{
	public static var inst = new ParticleManager();
	
	var _coll_particle = new Map<String,IParticle>();

	private function new() 
	{
		
	}
	
	public function addParticle( particle:IParticle ) {
		if ( existParticle( particle )) return;
		_coll_particle.set( particle.getId(), particle );
	}
	
	public function removeParticle( particle:IParticle ) {
		if ( !existParticle( particle )) return;
		_coll_particle.remove( particle.getId() );
	}
	
	public function getParticleById( id:String ):IParticle {
		if ( !existParticle( particle )) return null;
		return _coll_particle.get( id );
	}
	
	function existParticle( id:String ) {
		return _coll_particle.exists( id );
	}
}