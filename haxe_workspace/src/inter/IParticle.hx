package inter;
import component.EParticleType;

/**
 * @author vic
 */
interface IParticle 
{
	function getId():String;
	function getParent():IParticle;
	function throughAllChildren( fn:Dynamic -> Void ):Void;
	function getChildren():Array<IParticle>;
	function addChild( particle:IParticle ):Void;
	function getData():Dynamic;
	function getType():EParticleType;
	function toString():String;
}