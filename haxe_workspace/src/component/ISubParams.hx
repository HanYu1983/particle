package component;

/**
 * @author vic
 */

interface ISubParams 
{
	var type:String;
	var easingType:String;
	var dom:Dynamic;
	var event:Dynamic;
	var extra:Dynamic;
	function copy():ISubParams;
	function setType( type:String ):Void;
	function setEasingType( easingType:String ):Void;
}