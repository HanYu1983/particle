package inter;

/**
 * @author vic
 */
interface ITree 
{
	function addEmitter( parentNode:Dynamic, id:String ):Void;
	function addParticle( parentNode:Dynamic, id:String ):Void;
	
	function removeParticle( node:Dynamic ):Void;
}