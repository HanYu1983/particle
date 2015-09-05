package view;

import model.Model;
import view.component.GridView;

using Lambda;
using Reflect;
/**
 * ...
 * @author vic
 */
class GridController extends Model
{
	public static var ON_ROW_SELECT = 'ON_ROW_SELECT';
	public static var ON_ADD_CLICK = 'ON_ADD_CLICK';
	public static var ON_REMOVE_CLICK = 'ON_REMOVE_CLICK';
	
	public var currentParticleId:Int;
	public var currentRow:Dynamic;
	
	var grid = new GridView();
	var btn_addDynamic:Dynamic;
	var btn_removeDynamic:Dynamic;
	var btn_moveUp:Dynamic;
	var btn_moveDown:Dynamic;
	var spr_value1:Dynamic;
	var spr_value2:Dynamic;
	var spr_value3:Dynamic;
	var spr_value4:Dynamic;
	var spr_value5:Dynamic;
	
	public function new() 
	{
		super();
		
	}
	
	public function initRow( id:Int, ?formulaList:Array<Array<Dynamic>> ) {
		currentParticleId = id;
		
		if ( formulaList == null ) {
			grid.initRow( { } );
			return ;
		}
		
		grid.initRow( formulaList.fold( function( obj, curr:Dynamic ) {
			curr.setField( obj[7] + '', formulaToRow( obj ) );
			return curr;
		}, { } ) );
	}
	
	public function addRow( id:String, formula:Dynamic ) {
		grid.addRow( id, formulaToRow( formula ) );
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
		
		grid.config.grid.on('rowselect', function (event) 
		{
			var args = event.args;
			var rowBoundIndex = args.rowindex;
			var rowData = args.row;
			currentRow = rowData;
			notify( ON_ROW_SELECT, { row:rowData } );
		});
		
		btn_addDynamic = config.btn_addDynamic;
		btn_addDynamic.click( function() {
			notify( ON_ADD_CLICK, {id:currentParticleId } );
		});
		
		btn_removeDynamic = config.btn_removeDynamic;
		btn_removeDynamic.click( function() {
			notify( ON_REMOVE_CLICK, {id:currentParticleId } );
		});
		
		btn_moveDown = config.btn_moveDown;
		btn_moveUp = config.btn_moveUp;
		spr_value1 = config.spr_value1;
		spr_value2 = config.spr_value2;
		spr_value3 = config.spr_value3;
		spr_value4 = config.spr_value4;
		spr_value5 = config.spr_value5;
	}
	
	function formulaToRow( formula ) {
		return { 
			ptype: formula[0],
			method: formula[1],
			value1: formula[2],
			value2: formula[3],
			value3: formula[4],
			value4: formula[5],
			value5: formula[6]
		}
	}
}