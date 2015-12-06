package view;

/**
 * @author vic
 */

interface IItem 
{
	function lock( l:Bool ):Void;
	function focus( f:Bool ):Void;
	function flip( ?f:Bool ):Void;
	function move(x:Int, y:Int):Void;
	function rotateForward( sd:Int, ed:Int ):Void;
	function rotateBackward( sd:Int, ed:Int ):Void;
	function setViewer( player:Dynamic ):Void;
	function setOwner( player:Dynamic ):Void;
	
	function getViewer():Dynamic;
	function getOwner():Dynamic;
}