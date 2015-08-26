package inter;

/**
 * @author vic
 */

interface IEvent 
{
	function getEvent():Dynamic;
	function trigger( type:String, options:Dynamic ):Void;
	function on( type:String, fn:Dynamic -> Dynamic -> Void ):Void;
}