package view;
import model.IModel;

/**
 * @author vic
 */

interface IPanelView extends IModel
{
	function initPanel( model:Dynamic, stock:Dynamic, stockInfo:Dynamic ):Void;
	function addPanel( stockId:String, offset:Int, count:Int, panelData:Dynamic ):Void;
	function removePanel( id:String ):Void;
	function setFavorsSelect( favors:Array<String> ):Void;
	function setTxtStockId( stockId:String ):Void;
	function drawPrice( stockInfo:Dynamic, offset:Int = 0 ):Void;
	function drawCanvas( stockId:String, offset:Int, count:Int, panelData:Dynamic ):Void;
	function resetAllCanvasListener( ary_panel_obj:Array<Dynamic> ):Void;
	function drawAllCanvas( stockId:String, offset:Int = 0, count:Int, ary_panel:Array<Dynamic> ):Void;
	function scrollTo( ary_panel_obj:Array<Dynamic>, scrollX:Int ):Void;
	function changeOffset( offset:Int ):Void;
	function changeCount( count:Int ):Void;
}