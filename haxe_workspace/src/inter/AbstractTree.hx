package inter;

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
	
	public function addEmitter(parentNode:Dynamic, particle:IParticle):Void 
	{
		
	}
	
	public function addParticle(parentNode:Dynamic, particle:IParticle):Void 
	{
		
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