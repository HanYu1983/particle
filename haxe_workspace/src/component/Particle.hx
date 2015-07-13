package component;
import haxe.Json;
import inter.AbstractEvent;
import inter.IParticle;

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
		return _type;
	}
	
	public function setType( type ) {
		_type = type;
	}
	
	public function toString():String {
		return Json.stringify( getData() );
	}
}