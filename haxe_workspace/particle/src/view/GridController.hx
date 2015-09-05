package view;

import model.Model;
import view.component.GridView;

/**
 * ...
 * @author vic
 */
class GridController extends Model
{
	var grid = new GridView();
	
	public function new() 
	{
		super();
		
	}
	
	public function initRow( rows:Dynamic ) {
		grid.initRow( rows );
	}
	
	public function addRow( id:String, row:Dynamic ) {
		grid.addRow( id, row );
	}
	
	public function removeRowById( rid:String ) {
		grid.removeRowById( rid );
	}
	
	public function getRowById( rid ):Dynamic {
		return grid.getRowById( rid );
	}
	
	public function getRows():Dynamic {
		return grid.getRows();
	}
	
	public function updateRow( rid:String, data:Dynamic ) {
		grid.updateRow( rid, data );
	}
	
	override function init() 
	{
		super.init();
		
		grid.config = {
			grid:config.table_props
		}
	}
	
	
}