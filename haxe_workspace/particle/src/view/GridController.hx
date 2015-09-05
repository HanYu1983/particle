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
	public static var ON_FORMULA_CHANGE = 'ON_FORMULA_CHANGE';
	
	public var currentParticleId:Int;
	public var currentRow:Dynamic;
	
	var grid = new GridView();
	var btn_addDynamic:Dynamic;
	var btn_removeDynamic:Dynamic;
	var btn_moveUp:Dynamic;
	var btn_moveDown:Dynamic;
	var combo_props:Dynamic;
	var combo_dtype:Dynamic;
	var spr_value1:Dynamic;
	var spr_value2:Dynamic;
	var spr_value3:Dynamic;
	var spr_value4:Dynamic;
	var spr_value5:Dynamic;
	
	public function new() 
	{
		super();
		
	}
	
	public function setSelectProp( val:String ) {
		combo_props.jqxComboBox('selectItem', findItem( combo_props, val ) );
	}
	
	public function setSelectMethod( val:String ) {
		combo_dtype.jqxComboBox('selectItem', findItem( combo_dtype, val ) );
	}
	
	public function setTxtValue1( val:String ) {
		spr_value1.jqxNumberInput( 'val', val );
	}
	
	public function setTxtValue2( val:String ) {
		spr_value2.jqxNumberInput( 'val', val );
	}
	
	public function setTxtValue3( val:String ) {
		spr_value3.jqxNumberInput( 'val', val );
	}
	
	public function setTxtValue4( val:String ) {
		spr_value4.jqxNumberInput( 'val', val );
	}
	
	public function setTxtValue5( val:String ) {
		spr_value5.jqxNumberInput( 'val', val );
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
		
		grid.selectLastRow();
	}
	
	public function addRow( id:String, formula:Dynamic ) {
		grid.addRow( id, formulaToRow( formula ) );
		grid.selectLastRow();
	}
	
	public function removeRowById( rid:String ) {
		grid.removeRowById( rid );
		grid.selectLastRow();
	}
	
	public function getRowById( rid ):Dynamic {
		return grid.getRowById( rid );
	}
	
	public function getRows():Dynamic {
		return grid.getRows();
	}
	
	public function updateRow( rid:String, formula:Dynamic ) {
		grid.updateRow( rid, formulaToRow( formula ) );
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
			notify( ON_ADD_CLICK, {id:currentParticleId, values:[ 	getTypeFromItem( getSelectItem( combo_props )),
																	getTypeFromItem( getSelectItem( combo_dtype )),
																	spr_value1.val(), 
																	spr_value2.val(), 
																	spr_value3.val(), 
																	spr_value4.val(), 
																	spr_value5.val()] } );
		});
		
		btn_removeDynamic = config.btn_removeDynamic;
		btn_removeDynamic.click( function() {
			notify( ON_REMOVE_CLICK, {id:currentParticleId } );
		});
		
		combo_props = config.combo_props;
		combo_props.on('change', function (event) {
			notify( ON_FORMULA_CHANGE, {	values:[ 	getTypeFromItem( getSelectItem( combo_props )),
														getTypeFromItem( getSelectItem( combo_dtype )),
														spr_value1.val(), 
														spr_value2.val(), 
														spr_value3.val(), 
														spr_value4.val(), 
														spr_value5.val()] } );
		});

		combo_dtype = config.combo_dtype;
		combo_dtype.on('change', function (event) {
			notify( ON_FORMULA_CHANGE, {	values:[ 	getTypeFromItem( getSelectItem( combo_props )),
														getTypeFromItem( getSelectItem( combo_dtype )),
														spr_value1.val(), 
														spr_value2.val(), 
														spr_value3.val(), 
														spr_value4.val(), 
														spr_value5.val()] } );
		});
		
		btn_moveDown = config.btn_moveDown;
		btn_moveUp = config.btn_moveUp;
		spr_value1 = config.spr_value1;
		spr_value2 = config.spr_value2;
		spr_value3 = config.spr_value3;
		spr_value4 = config.spr_value4;
		spr_value5 = config.spr_value5;
		
		function onSprChange( event ) {
			notify( ON_FORMULA_CHANGE, {	values:[ 	getTypeFromItem( getSelectItem( combo_props )),
														getTypeFromItem( getSelectItem( combo_dtype )),
														spr_value1.val(), 
														spr_value2.val(), 
														spr_value3.val(), 
														spr_value4.val(), 
														spr_value5.val()] } );
		}
		
		spr_value1.on('change', onSprChange ); 
		spr_value2.on('change', onSprChange ); 
		spr_value3.on('change', onSprChange ); 
		spr_value4.on('change', onSprChange ); 
		spr_value5.on('change', onSprChange ); 
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
	
	function findItem( combo:Dynamic, value:String ) {
		var items = combo.jqxComboBox('getItems');
		return Lambda.find( items, function( obj ) {
			return Main.j( obj.element ).find( '[ptype]' ).attr('ptype') == value;
		});
	}
	
	function getTypeFromItem( item:Dynamic ) {
		return Main.j( item.element ).find( '[ptype]' ).attr('ptype');
	}
	
	function getSelectItem( combo:Dynamic ) {
		return combo.jqxComboBox('getSelectedItem'); 
	}
}