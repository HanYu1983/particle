package view;
import model.IModel;

/**
 * @author vic
 */

interface IPanelView extends IModel
{
	function initPanel( model:Dynamic ):Void;
	function addPanel( stockId:String, offset:Int, count:Int, panelData:Dynamic ):Void;
	function removePanel( id:String ):Void;
	function drawCanvas( stockId:String, offset:Int, count:Int, panelData:Dynamic ):Void;
	function resetAllCanvasListener( ary_panel_obj:Array<Dynamic> ):Void;
	function drawAllCanvas( stockId:String, offset:Int = 0, count:Int, ary_panel:Array<Dynamic> ):Void;
	function changeOffset( offset:Int ):Void;
	function changeCount( count:Int ):Void;
}