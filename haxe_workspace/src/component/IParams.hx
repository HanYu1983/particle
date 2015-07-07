package component;

/**
 * @author vic
 */

interface IParams 
{
	var type:String;
	var easingType:String;
	var dom:Dynamic;
	var event:Dynamic;
	var extra:Dynamic;
	function copy():IParams;
}