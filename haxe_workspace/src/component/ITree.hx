package component;

/**
 * @author vic
 */
interface ITree extends IDom
{
	function init():Void;
	function addEmitter( ?parentName:String, name:String ):Void;
	
	function addParticle( ?parentName:String, name:String ):Void;
	function removeParticle( name:String ):Void;
}