package inter;
import component.EParticleType;
import component.Particle;

/**
 * @author vic
 */
interface ITree 
{
	function addParticle( parentNode:Dynamic, particleData:Dynamic, type:EParticleType, name:String ):Void;
	function parserLoadData( loadData:Dynamic ):Void;
	function outputData():Dynamic;
	function findNode( nodeId:String ):Dynamic;
	function getRootNode():Dynamic;
	function getSelectedNode():Dynamic;
	function removeParticle( node:Dynamic ):Void;
}