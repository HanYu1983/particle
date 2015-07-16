package inter;
import component.EParticleType;

/**
 * @author vic
 */
interface IParamsPanel 
{
	function setData( data:Dynamic, type:EParticleType ):Void;
	function getData():Dynamic;
}