package inter;

/**
 * @author vic
 */
interface ITree 
{
	function addEmitter( parentNodeId:String, id:String ):Void;
	function addParticle( parentNodeId:String, id:String ):Void;
	
	function removeParticle( nodeId:String ):Void;
}