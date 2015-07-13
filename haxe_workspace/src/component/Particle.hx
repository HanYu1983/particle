package component;
import haxe.Json;
import inter.AbstractEvent;
import inter.IParticle;
using Reflect;
/**
 * ...
 * @author vic
 */
class Particle implements IParticle
{
	var _type:EParticleType;
	var _data:Dynamic;

	public function new( data ) 
	{
		_data = data;
	}
	
	public function getId() {
		return getData().id;
	}
	
	public function getData():Dynamic {
		return _data;
	}
	
	public function getType():EParticleType {
		if ( getData().hasField( 'emit' ) ) return EParticleType.EMITTER;
		return EParticleType.PARTICLE;
	}
	
	public function toString():String {
		return Json.stringify( getData() );
	}
}