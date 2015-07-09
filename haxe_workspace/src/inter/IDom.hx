package inter;

/**
 * @author vic
 */
interface IDom 
{
	function getDom():Dynamic;
	function init():Void;
	function trigger( type:String, options:Dynamic ):Void;
	function on( evt:Dynamic, options:Dynamic ):Void;
}