package view.component;

import model.Model;

/**
 * ...
 * @author vic
 */
class GridView extends Model
{
	var grid:Dynamic;
	

	public function new() 
	{
		super();
		
	}
	
	public function initRow( rows:Dynamic ) {
		var dataAdapter = untyped __js__( 'new $.jqx.dataAdapter' )( {
			localdata: rows,
			datatype: "local"
		} );
		
		grid.jqxGrid( {
			source:dataAdapter
		});
	}
	
	public function addRow( id:String, row:Dynamic ) {
		grid.jqxGrid('addrow', id, row);
	}
	
	public function removeRowById( rid:String ) {
		grid.jqxGrid('deleterow', rid);
	}
	
	public function getRowById( rid ):Dynamic {
		return grid.jqxGrid('getrowdatabyid', rid);
	}
	
	public function getRows():Dynamic {
		return grid.jqxGrid('getrows');
	}
	
	public function updateRow( rid:String, data:Dynamic ) {
		grid.jqxGrid('updaterow', rid, data);
	}
	
	override function init() 
	{
		super.init();
		
		grid = config.grid;
		
	}
}