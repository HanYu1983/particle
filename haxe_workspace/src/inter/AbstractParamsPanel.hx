package inter;
import component.EParticleType;

/**
 * ...
 * @author vic
 */
class AbstractParamsPanel extends AbstractEvent implements IParamsPanel
{
	var particleData:Dynamic;

	public function new(dom) 
	{
		super(dom);
		
	}

	public function setData( data:Dynamic, type:EParticleType ):Void {
		particleData = data;
	}
	
	public function getData():Dynamic {
		return particleData;
	}
}