package model;

/**
 * @author vic
 */

interface IPanel extends IModel
{
	var currentStockId(default, set):String;
	var currentOffset(default, set):Int;
	var currentCount(default, default):Int;
	
	function getAryPanel():Array<Dynamic>;
	function addPanel( id:Dynamic, data:Dynamic, ?extra:Dynamic ):Void;
	function removePanel( id:Dynamic ):Void;
	function changeShow( id:Dynamic, type:String, show:Bool ):Void;
	function changeShowK( id:Dynamic, show:Bool ):Void;
	function changeShowValue( id:Dynamic, type:String, value:Array<Int> ):Void;
	function getSaveData():Dynamic;
}