package component;
import inter.IParticle;
using Lambda;
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
		_coll_particle.set( particle.getId(), particle );
	}
	
	public function removeParticleById( id:String ) {
		if ( !existParticle( id )) return;
		_coll_particle.remove( id );
	}
	
	public function removeParticleAndChildren( particle:IParticle ) {
		function _removeParticleAndChildren( parent:IParticle ) {
			getParticles().map( function( p ):Void {
				if ( p.getParent() == parent ) {
					_removeParticleAndChildren( p );
					removeParticleById( p.getId() );
				}
			});
			removeParticleById( parent.getId() );
		}
		_removeParticleAndChildren( particle );
	}
	
	public function getParticleById( id:String ):IParticle {
		if ( !existParticle( id )) return null;
		return _coll_particle.get( id );
	}
	
	public function getParticles():Map<String,IParticle> {
		return _coll_particle;
	}
	
	function existParticle( id:String ) {
		return _coll_particle.exists( id );
	}
}