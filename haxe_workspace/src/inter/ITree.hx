package inter;
import component.Particle;

/**
 * @author vic
 */
interface ITree 
{
	function addEmitter( parentNode:Dynamic, particle:IParticle ):Void;
	function addParticle( parentNode:Dynamic, particle:IParticle ):Void;
	function parserLoadData( loadData:Dynamic ):Void;
	function findNode( nodeId:String ):Dynamic;
	function getRootNode():Dynamic;
	function getSelectedNode():Dynamic;
	function removeParticle( node:Dynamic ):Void;
}