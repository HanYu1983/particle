var vic = vic || {};
vic.easyui = vic.easyui || {};

(function( module ){
	function setSpinnerValue( spr, value, dispatch ){
		console.log( dispatch );
		if( dispatch ){
			spr.numberspinner( 'setValue', value );
		}else{
			spr.numberspinner( {
				value:value
			});
		}
		
	}
	
	function getSpinnerValue( spr ){
		return spr.numberspinner( 'getValue' );
	}
	
	function setCombobox( combobox, datas ){
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
	
	function getDatagridRows( dataGrid ){
		return dataGrid.datagrid( 'getRows' );
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
	
	function insertDatagridRow( dataGrid, index, row ){
		dataGrid.datagrid('insertRow',{
			index: index,	
			row: row
		});
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
			downSpr = undefined;
			oldMouseY = undefined;
		});
		
		$( 'body' ).mousemove( function( e ){
			if( downSpr != undefined ){
				var newY = -e.pageY;
				if( oldMouseY != undefined ){
					var offset = Math.floor( newY - oldMouseY );
					var oldvalue = Math.floor( vic.easyui.getSpinnerValue( downSpr ) );
					vic.easyui.setSpinnerValue( downSpr, Math.floor( oldvalue + offset ), true );
				}
				oldMouseY = newY;
			}
		});
	}
	
	/**
	不能在剛初始化完tree的時候就直接呼叫，至少要setTimeout之後再呼叫
	**/
	function selectTreeNode( tree, node ){
		tree.tree( 'select', node.target );
	}
	
	function setTree( tree, datas ){
		tree.tree({
			data: datas
		});
	}
	
	function getTreeIsLeaf( tree, node ){
		return tree.tree( 'isLeaf', node.target );
	}
	
	function getTreeNodeById( tree, id ){
		return tree.tree( 'find', id );
	}
	
	function getTreeRoot( tree ){
		return tree.tree( 'getRoot' );
	}
	
	function getTreeRoots( tree ){
		return tree.tree( 'getRoots' );
	}
	
	function appendTree( tree, select, datas ){
		tree.tree('append', {
			parent: select.target,
			data: datas
		});
	}
	
	function removeTree( tree, node ){
		tree.tree( 'remove', node.target );
	}
	
	module.setSpinnerValue = setSpinnerValue;
	module.getSpinnerValue = getSpinnerValue;
	
	module.setCombobox = setCombobox;
	module.setComboxSelect = setComboxSelect;
	
	module.setDatagridRows = setDatagridRows;
	module.getDatagridRows = getDatagridRows;
	module.selectDatagridRow = selectDatagridRow;
	module.appendDatagridRow = appendDatagridRow;
	module.deleteDatagridRow = deleteDatagridRow;
	module.getDatagridRowIndex = getDatagridRowIndex;
	module.insertDatagridRow = insertDatagridRow;
	module.updateDatagridRow = updateDatagridRow;
	
	module.initSprWheel = initSprWheel;
	
	module.selectTreeNode = selectTreeNode;
	module.setTree = setTree;
	module.getTreeIsLeaf = getTreeIsLeaf;
	module.getTreeNodeById = getTreeNodeById;
	module.getTreeRoot = getTreeRoot;
	module.getTreeRoots = getTreeRoots;
	module.appendTree = appendTree;
	module.removeTree = removeTree;
	
})( vic.easyui );