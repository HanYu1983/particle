package component;
import inter.AbstractEvent;

/**
 * ...
 * @author vic
 */
class Particle
{
	var _type:EParticleType;
	var _data:Dynamic;

	public function new( type, data ) 
	{
		setType( type );
		_data = data;
	}
	
	public function setType( type ) {
		_type = type;
	}
}