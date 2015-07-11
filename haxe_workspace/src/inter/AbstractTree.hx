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
	
	public function addEmitter(parentNodeId:String, id:String):Void 
	{
		
	}
	
	public function addParticle(parentNodeId:String, id:String):Void 
	{
		
	}
	
	public function removeParticle(nodeId:String):Void 
	{
		
	}
	
}