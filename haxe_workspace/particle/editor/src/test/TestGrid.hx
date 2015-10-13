package test;

import haxe.unit.TestCase;
import view.component.GridView;

/**
 * ...
 * @author vic
 */
class TestGrid extends TestCase
{
	var grid = new GridView();

	public function new() 
	{
		super();
		
		grid.config = {
			grid:untyped __js__('$("#table_props")')
		}
	}
	
	function testInit() {
		grid.initRow( {
			'0':{ ptype: 'pos', method:'sin', value1:30, value2:40, value3:30, value4:24, value5:24  },
			'1':{ ptype: 'vel', method:'sin', value1:30, value2:40, value3:30, value4:24, value5:24  },
			'2':{ ptype: 'vel', method:'sin', value1:30, value2:40, value3:30, value4:24, value5:24  },
			'3':{ ptype: 'vel', method:'sin', value1:30, value2:40, value3:30, value4:24, value5:24  }
		});
		
		assertEquals( grid.getRows().length, 4 );
	}
	
	function testAddRow() {
		grid.addRow( '4', { ptype: 'addRow', method:'sin', value1:30, value2:40, value3:30, value4:24, value5:24  } );
		assertEquals( grid.getRows().length, 5 );
	}
	
	function testDeleteRow() {
		grid.removeRowById( '1' );
		grid.removeRowById( '4' );
		grid.removeRowById( '3' );
		assertEquals( grid.getRows().length, 2 );
	}
	
	function testUpdateRow() {
		var row = grid.getRowById( '2' );
		row.ptype = 'lifetime';
		row.value2 = '1003';
		grid.updateRow( '2', row );
		
		assertEquals( grid.getRowById( '2' ).ptype, 'lifetime' );
		assertEquals( grid.getRowById( '2' ).value2, '1003' );
	}
}