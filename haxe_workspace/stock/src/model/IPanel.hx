package model;

/**
 * @author vic
 */

interface IPanel extends IModel
{
	var currentStockId(default, default):String;
	var currentOffset(default, set):Int;
	var currentCount(default, default):Int;
	
	//function changeStockId( stockId:String ):Void;
	///function changeOffset( offset:Int ):Void;
	function getAryPanel():Array<Dynamic>;
	function addPanel( id:Dynamic, type:EType, needMove:Bool, props:Array<Dynamic> ):Void;
	function removePanel( id:Dynamic ):Void;
	function getSaveData():Dynamic;
}