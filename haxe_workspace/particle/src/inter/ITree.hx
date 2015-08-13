package inter;
import component.EParticleType;

/**
 * @author vic
 */
interface ITree 
{
	function addParticle( parentNode:Dynamic, particleData:Dynamic, name:String ):Void;
	function parserLoadData( loadData:Dynamic ):Void;
	function outputData():Dynamic;
	function findNode( nodeId:String ):Dynamic;
	function getRootNode():Dynamic;
	function getSelectedNode():Dynamic;
	function removeParticle( node:Dynamic ):Void;
}