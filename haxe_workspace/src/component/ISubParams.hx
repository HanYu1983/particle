package component;

/**
 * @author vic
 */

interface ISubParams 
{
	var type:ParticleAttribute;
	var easingType:EasingType;
	var dom:Dynamic;
	var event:Dynamic;
	var extra:Dynamic;
	function copy():ISubParams;
	function setType( type:ParticleAttribute ):Void;
	function setEasingType( easingType:EasingType ):Void;
}