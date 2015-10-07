var vic = vic || {};
vic.easyui = vic.easyui || {};

(function( module ){
	
	function setWindowOpen( win ){
		win.window( 'open' );
	}
	
	function setWindowClose( win ){
		win.window( 'close' );
	}
	
	function setTextboxValue( tbox, value, dispatch ){
		if( dispatch ){
			tbox.textbox( 'setValue', value );
		}else{
			tbox.textbox( {
				value:value
			});
		}
	}
	
	function getTextboxValue( tbox ){
		return tbox.textbox( 'getValue' );
	}
	
	function setSpinnerValue( spr, value, dispatch ){
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
	
	function setComboxSelect( combobox, value, dispatch ){
		if( dispatch ){
			combobox.combobox( 'select', value );
		}else{
			combobox.combobox( {
				value:value
			});
		}
		
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
		
		sprDoms.parent().mouseup( function( e ){
			switch( e.which ){
				case 3:
					downSpr = $( this ).find( '.easyui-numberspinner' );
					vic.easyui.setSpinnerValue( downSpr, 0, true );
					break;
			}
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
	
	function updateTree( tree, node ){
		tree.tree('update', node);
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
	
	/**
	<div id="colorSelector"><div style="background-color: #0000ff"></div></div>
	**/
	function initColorPicker( dom, w, h, color ){
		dom.css( 'position', 'relative' );
		dom.css( 'top', '0' );
		dom.css( 'left', '0' );
		dom.css( 'width', w + 'px' );
		dom.css( 'height', h + 'px' );
		dom.css( 'background', 'url(../common/js/lib/colorpicker/images/select.png)' );
		
		var cdom = $("<div></div>" );
		cdom.css( 'position', 'relative' );
		cdom.css( 'top', '4px' );
		cdom.css( 'left', '4px' );
		cdom.css( 'width', w - 8 + 'px' );
		cdom.css( 'height', h - 8 + 'px' );
		cdom.css( 'background', 'url(../common/js/lib/colorpicker/images/select.png) center' );
		cdom.css( 'background-color', color )
		dom.append( cdom );
		
		dom.ColorPicker({
			color: color,
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				dom.trigger( 'onColorChange', { hsb:hsb, hex:hex, rgb:rgb} );
				cdom.css('background-color', '#' + hex);
			}
		});
	}
	
	function setColorPickerColor( dom, color ){
		dom.find('div' ).css('background-color', '#' + rgbToHex( color ) );
	//	dom.ColorPickerSetColor( color );
	}
	
	function rgbToHex( rgb ){
		var hex = [
			rgb.r.toString(16),
			rgb.g.toString(16),
			rgb.b.toString(16)
		];
		$.each(hex, function (nr, val) {
			if (val.length == 1) {
				hex[nr] = '0' + val;
			}
		});
		return hex.join('');
	}
	
	
	function showMessage( msg, time ){
		$.messager.show({
			title:'提示',
			msg: msg,
			timeout: time,
			showType:'slide'
		});
	}
	
	function showAlert( msg ){
		$.messager.alert('錯誤', msg, 'warning');
	}
	
	function showLoading( msg ){
		$.messager.progress({
			title:'提示',
			msg: msg
		});
	}
	
	function closeLoading(){
		$.messager.progress('close');
	}
	
	module.setWindowOpen = setWindowOpen;
	module.setWindowClose = setWindowClose;
	
	module.setTextboxValue = setTextboxValue;
	module.getTextboxValue = getTextboxValue;
	
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
	module.updateTree = updateTree;
	module.appendTree = appendTree;
	module.removeTree = removeTree;
	
	module.initColorPicker = initColorPicker;
	module.setColorPickerColor = setColorPickerColor;
	
	module.showMessage = showMessage;
	module.showAlert = showAlert;
	module.showLoading = showLoading;
	module.closeLoading = closeLoading;
	
})( vic.easyui );