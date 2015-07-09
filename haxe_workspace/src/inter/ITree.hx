package inter;

/**
 * @author vic
 */
interface ITree 
{
	function addEmitter( parentDom:Dynamic, id:String ):Void;
	function addParticle( parentDom:Dynamic, id:String ):Void;
	
	function removeEmitter( id:String ):Void;
	function removeParticle( id:String ):Void;
}