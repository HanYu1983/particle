package;

/**
 * @author vic
 */

interface ICardController 
{
	var uid(default,null):String;
	var mesh(default, set):Dynamic;
	var isFaceUp(get, never):Bool;
	function setFaceTexture( texture:Dynamic ):Void;
	function setBackTexture( texture:Dynamic ):Void;
	function overCardInHand():Void;
	function releaseCardInHand():Void;
	function moveCard( x:Float, y:Float, z:Float ):Void;
	function rotateCard( x:Float, y:Float, z:Float ):Void;
	function flip():Void;
}