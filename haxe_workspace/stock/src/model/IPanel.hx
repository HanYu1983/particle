package model;

/**
 * @author vic
 */

interface IPanel extends IModel
{
	var currentStockId(default, set):String;
	var currentOffset(default, set):Int;
	var currentCount(default, set):Int;
	var currentStockInfo( default, set ):Dynamic;
	var currentFavor( default, set ):Dynamic;
	var maxCount(default, set ):Int;
	
	function getAryPanel():Array<Dynamic>;
	function setStockData( stock:Dynamic ):Void;
	function addPanel( id:Dynamic, data:Dynamic, ?extra:Dynamic ):Void;
	function removePanel( id:Dynamic ):Void;
	function changeShow( id:Dynamic, type:String, show:Bool ):Void;
	function changeShowK( id:Dynamic, show:Bool ):Void;
	function changeShowValue( id:Dynamic, type:String, value:Array<Int> ):Void;
	function getSaveData():Dynamic;
}