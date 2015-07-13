package inter;

/**
 * @author vic
 */
interface ITree 
{
	function addEmitter( parentNode:Dynamic, id:String ):Void;
	function addParticle( parentNode:Dynamic, id:String ):Void;
	function findNode( nodeId:String ):Dynamic;
	function getRootNode():Dynamic;
	function getSelectedNode():Dynamic;
	function removeParticle( node:Dynamic ):Void;
}