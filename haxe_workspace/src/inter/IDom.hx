package inter;

/**
 * @author vic
 */
interface IDom 
{
	function getEvent():Dynamic;
	function getDom():Dynamic;
	function init():Void;
	function trigger( type:String, options:Dynamic ):Void;
	function on( type:String, fn:Dynamic -> Void ):Void;
}