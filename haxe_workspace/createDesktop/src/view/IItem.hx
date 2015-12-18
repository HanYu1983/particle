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
	function rotate( sd:Int, ed:Int ):Void;
	function setViewer( v:String ):Void;
	function setOwner( o:String ):Void;
	
	function getViewer():String;
	function getOwner():String;
}