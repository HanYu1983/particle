package model;

/**
 * @author vic
 */

interface IPanel extends IModel
{
	function changeStockId( stockId:String ):Void;
	function getAryPanel():Array<Dynamic>;
	function addPanel( id:Dynamic, type:EType, needMove:Bool, props:Array<Dynamic> ):Void;
	function removePanel( id:Dynamic ):Void;
	function getSaveData():Dynamic;
}