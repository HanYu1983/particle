package inter;
import component.EParticleType;

/**
 * @author vic
 */
interface IParticle 
{
	function getId():String;
	function getData():Dynamic;
	function getType():EParticleType;
	function toString():String;
}