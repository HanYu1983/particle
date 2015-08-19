package view;
import model.IModel;

/**
 * @author vic
 */

interface IPanelView extends IModel
{
	function setShowId( stockId:String ):Void;
	function addPanel( stockId:String, offset:Int, count:Int, panelData:Dynamic ):Void;
	function removePanel( id:String ):Void;
	function drawCanvas( stockId:String, offset:Int, count:Int, panelData:Dynamic ):Void;
	function drawAllCanvas( stockId:String, offset:Int = 0, ary_panel:Array<Dynamic> ):Void;
}