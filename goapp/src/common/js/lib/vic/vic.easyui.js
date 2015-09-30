var vic = vic || {};
vic.easyui = vic.easyui || {};

(function( module ){
	function setSpinnerValue( spr, value ){
		spr.numberspinner( 'setValue', value );
	}
	
	function getSpinnerValue( spr ){
		return spr.numberspinner( 'getValue' );
	}
	
	function setCombobox( combobox, datas ){
		console.log( datas );
		combobox.combobox( {
			valueField:'value',
			textField:'label',
			data:datas
		});
	}
	
	function setComboxSelect( combobox, value ){
		combobox.combobox( 'select', value );
	}
	
	function setDatagridRows( dataGrid, datas ){
		dataGrid.datagrid({
			data: datas
		});
	}
	
	function selectDatagridRow( dataGrid, index ){
		dataGrid.datagrid( 'selectRow', index );
	}
	
	function appendDatagridRow( dataGrid, row ){
		dataGrid.datagrid('appendRow', row );
	}
	
	function deleteDatagridRow( dataGrid, index ){
		dataGrid.datagrid( 'deleteRow', index );
	}
	
	function getDatagridRowIndex( dataGrid, row ){
		dataGrid.datagrid( 'getRowIndex', row );
	}
	
	function updateDatagridRow( dataGrid, index, row ){
		dataGrid.datagrid('updateRow',{
			index: index,
			row: row
		});
	}
	
	function initSprWheel( sprDoms ){
		var downSpr = undefined;
		var oldMouseY = undefined;
		
		sprDoms.parent().mousedown( function( e ){
			downSpr = $( this ).find( '.easyui-numberspinner' );
		});
		
		$( 'body' ).mouseup( function(){
			console.log( 'up' );
			
			downSpr = undefined;
			oldMouseY = undefined;
		});
		
		$( 'body' ).mousemove( function( e ){
			if( downSpr != undefined ){
				var newY = -e.pageY;
				if( oldMouseY != undefined ){
					var offset = Math.floor( newY - oldMouseY );
					var oldvalue = Math.floor( vic.easyui.getSpinnerValue( downSpr ) );
					vic.easyui.setSpinnerValue( downSpr, Math.floor( oldvalue + offset ) );
				}
				oldMouseY = newY;
			}
		});
	}
	
	module.setSpinnerValue = setSpinnerValue;
	module.getSpinnerValue = getSpinnerValue;
	
	module.setCombobox = setCombobox;
	module.setComboxSelect = setComboxSelect;
	
	module.setDatagridRows = setDatagridRows;
	module.selectDatagridRow = selectDatagridRow;
	module.appendDatagridRow = appendDatagridRow;
	module.deleteDatagridRow = deleteDatagridRow;
	module.getDatagridRowIndex = getDatagridRowIndex;
	module.updateDatagridRow = updateDatagridRow;
	
	module.initSprWheel = initSprWheel;
	
})( vic.easyui );