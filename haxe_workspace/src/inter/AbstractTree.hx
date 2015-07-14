package inter;
import component.EParticleType;

/**
 * ...
 * @author vic
 */
class AbstractTree extends AbstractEvent implements ITree
{

	public function new( dom ) 
	{
		super( dom );
	}
	
	public function parserLoadData( loadData:Dynamic ):Void {
		
	}
	
	public function addParticle( parentNode:Dynamic, particleData:Dynamic, type:EParticleType, name:String ):Void {
		
	}
	
	public function getRootNode():Dynamic {
		return null;
	}
	
	public function findNode( nodeId:String ):Dynamic {
		return null;
	}
	
	public function getSelectedNode():Dynamic {
		return null;
	}
	
	public function removeParticle(node:Dynamic):Void 
	{
		
	}
	
}