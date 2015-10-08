var app = app || {};
app.view = app.view || {};

(function( module ){
	var event = $('<div></div>' );
	var tree_particle = $("#tree_particle" );
	var txt_name = $("#txt_name" );
	var win_output = $("#win_output" );
	var btn_confirmName = $("#btn_confirmName" );
	var mc_imgs = $("#mc_imgs" );
	var btn_normalMode = $("#btn_normalMode" );
	var btn_addMode = $("#btn_addMode" );
	var spr_v1 = $("#spr_v1" );
	var spr_v2 = $("#spr_v2" );
	var spr_v3 = $("#spr_v3" );
	var spr_v4 = $("#spr_v4" );
	var spr_v5 = $("#spr_v5" );
	var mc_propContainer = $("#mc_propContainer" );
	var dgd_advprops = $("#dgd_advprops" );
	var combo_advProps = $("#combo_advProps" );
	var combo_advType = $("#combo_advType" );
	var webgl = $('#webgl' );
	var isMouseDown = false;
	var targetPos = [0.0, 0.0];
	var currentPos = [0.0, 0.0];
	var cpr_color = $('#cpr_color');
	var cpr_back = $('#cpr_back');
	var txt_count = $('#txt_count');
	var txt_fps = $('#txt_fps');
	
	txt_name.textbox( {
		onChange:function( nv, ob ){
			if( currentNode != undefined ){
				currentNode.text = nv;
				vic.easyui.updateTree( tree_particle, currentNode );
				event.trigger( 'onPropChange',  { currentRow: {
					row:{
						id:'name',
						v:nv
					}
				} });
			}
		}
	});
	
	btn_normalMode.linkbutton({
		onClick:function(){
			event.trigger( 'onPropChange',  { currentRow: {
				row:{
					id:'blending',
					v:'normal'
				}
			} });
		}
	});
	
	btn_addMode.linkbutton({
		onClick:function(){
			event.trigger( 'onPropChange', { currentRow: {
				row:{
					id:'blending',
					v:'add'
				}
			} });
		}
	});

	function setWinOutput( value ){
		vic.easyui.setTextboxValue( win_output.find( '.easyui-textbox' ), value, false );
		vic.easyui.setWindowOpen(  win_output );
	}
	
	function closeImport(){
		var str = vic.easyui.getTextboxValue( win_output.find( '.easyui-textbox' ) );
		if( str != '' ){
			try{
				JSON.parse( str );
				event.trigger( 'onImportEvent', { importstr:str } );
				vic.easyui.setWindowClose( win_output );
			}catch( e ){
				vic.easyui.showAlert( '格式錯誤哦，請檢查!' );
			}
		}
	}

	function setName( value ){
		vic.easyui.setTextboxValue( txt_name, value, false );
	}
	
	function setBlending( type ){
		switch( type ){
			case 'normal':
				btn_normalMode.linkbutton( 'select' );
				break;
			case 'add':
				btn_addMode.linkbutton( 'select' );
				break;
				
		}
	}
	
	vic.easyui.initColorPicker( cpr_color, 36, 36, '#ffffff' );
	cpr_color.on( 'onColorChange', function( e, options ){
		//event.trigger( 'onPropChange', options );
		
		event.trigger( 'onPropChange', { currentRow: {
			row:{
				id:'color',
				v:0,
				extra:options.rgb
			}
		} } );
	});
	
	vic.easyui.initColorPicker( cpr_back, 36, 36, 'black' );
	cpr_back.on( 'onColorChange', function( e, options ){
		event.trigger( 'onBackColorChange', options );
	});
	
	function setInfo( count, fps ){
		txt_count.html( count );
		txt_fps.html( fps );
	}
	
	function setParticleColor( r, g, b ){
		vic.easyui.setColorPickerColor(cpr_color,  {r:Math.floor( r* 255 ), g:Math.floor( g* 255 ), b:Math.floor( b* 255 )} );
	}
	
	var ary_propsModel = [ 	{id:'lifetime', name:'生命', random:true, friction:true, randomAdd:true, custom:true}, 
							{id:'mass', name:'質量', random:true, friction:true, randomAdd:true, custom:true}, 
							{id:'rot', name:'角度', random:true, friction:true, randomAdd:true, custom:true}, 
							{id:'x', name:'位置x', random:true, friction:true, randomAdd:true, custom:true}, 
							{id:'y', name:'位置y', random:true, friction:true, randomAdd:true, custom:true}, 
							{id:'vx', name:'速度x', random:true, friction:true, randomAdd:true, custom:true}, 
							{id:'vy', name:'速度y', random:true, friction:true, randomAdd:true, custom:true}, 
							{id:'vr', name:'旋轉速度', random:true, friction:true, randomAdd:true, custom:true}, 
							{id:'a', name:'alpha', random:true, friction:true, randomAdd:true, custom:true}, 
							{id:'scale-x', name:'粒子寬度', random:true, friction:true, randomAdd:true, custom:true}, 
							{id:'scale-y', name:'粒子高度', random:true, friction:true, randomAdd:true, custom:true}, 
							{id:'emit-count', name:'發射數目', random:true, friction:true, randomAdd:true, custom:true}, 
							{id:'emit-duration', name:'週期毫秒', random:true, friction:true, randomAdd:true, custom:true}, 
							{id:'emit-angle', name:'發射角度', random:true, friction:true, randomAdd:true, custom:true}, 
							{id:'emit-range', name:'發射範圍', random:true, friction:true, randomAdd:true, custom:true}, 
							{id:'emit-force', name:'發射力道', random:true, friction:true, randomAdd:true, custom:true}];
						
	_.each( ary_propsModel, function( prop ){
		var dom = $( '#tmpl_prop' ).tmpl( prop );
		mc_propContainer.append( dom );
		
		dom.find( '.easyui-numberspinner' ).numberspinner({
			onChange:function(nv, ov ){
				var type = $( this ).parent().parent().attr( 'ptype' );
				event.trigger( 'onPropChange', { currentRow: {
					row:{
						id:type,
						v:nv
					}
				} } );
			}
		});
		
		dom.find( '.easyui-linkbutton' ).linkbutton( {
			onClick:function(){
				var type = $( this ).parent().parent().attr( 'ptype' );
				var id = $( this ).attr( 'id' );
				var advrows = vic.easyui.getDatagridRows( dgd_advprops );
				var ary_randomRow = [];
				var ary_remainRow = [];
				switch( id ){
					case 'btn_turbu':
						ary_randomRow = _.filter( advrows, function( row ){
							return ( row.id == type && row.tid == 'randAdd' );
						});
						ary_remainRow = _.filter( advrows, function( row ){
							return !( row.id == type && row.tid == 'randAdd' );
						});
						if( ary_randomRow.length == 0 ){
							ary_remainRow.unshift( {id:type, name:app.utils.keyToName(type), tid:'randAdd', type:app.utils.keyToName( 'randAdd' ), v1:100, v2:0, v3:0, v4:0, v5:0 } );
						}
						break;
					case 'btn_rand':
						ary_randomRow = _.filter( advrows, function( row ){
							return ( row.id == type && row.tid == 'randStartAdd' );
						});
						ary_remainRow = _.filter( advrows, function( row ){
							return !( row.id == type && row.tid == 'randStartAdd' );
						});
						if( ary_randomRow.length == 0 ){
							ary_remainRow.unshift( {id:type, name:app.utils.keyToName(type), tid:'randStartAdd', type:app.utils.keyToName( 'randStartAdd' ), v1:100, v2:0, v3:0, v4:0, v5:0 } );
						}
						break;
					case 'btn_fric':
						ary_randomRow = _.filter( advrows, function( row ){
							return ( row.id == type && row.tid == 'constMul' );
						});
						ary_remainRow = _.filter( advrows, function( row ){
							return !( row.id == type && row.tid == 'constMul' );
						});
						if( ary_randomRow.length == 0 ){
							ary_remainRow.push( {id:type, name:app.utils.keyToName(type), tid:'constMul', type:app.utils.keyToName( 'constMul' ), v1:950, v2:0, v3:0, v4:0, v5:0 } );
						}
						break;
					case 'btn_custom':
						ary_randomRow = _.filter( advrows, function( row ){
							return ( row.id == type && row.tid == 'customMul' );
						});
						ary_remainRow = _.filter( advrows, function( row ){
							return !( row.id == type && row.tid == 'customMul' );
						});
						if( ary_randomRow.length == 0 ){
							ary_remainRow.push( {id:type, name:app.utils.keyToName(type), tid:'customMul', type:app.utils.keyToName( 'customMul' ), v1:0, v2:500, v3:1000, v4:500, v5:0 } );
						}
						break;
				}
				
				setAdvDgdProp( ary_remainRow );
				event.trigger( 'onPropChange', { currentRow: currentAdvRow, rows:vic.easyui.getDatagridRows( dgd_advprops ) } );
				
			}
		});
		
		if( !prop.random ){
			dom.find( '.easyui-linkbutton' ).eq(0).linkbutton( 'disable' );
		}
		
		if( !prop.randomAdd ){
			dom.find( '.easyui-linkbutton' ).eq(1).linkbutton( 'disable' );
		}
		
		if( !prop.friction ){
			dom.find( '.easyui-linkbutton' ).eq(2).linkbutton( 'disable' );
		}
		
		if( !prop.custom ){
			dom.find( '.easyui-linkbutton' ).eq(3).linkbutton( 'disable' );
		}
		
	});
	
	vic.easyui.initSprWheel( $('.easyui-numberspinner' ) );
	
	/*
	$('.easyui-numberspinner' ).numberspinner( {
		precision:1
	});
	*/
	
	var tid = undefined;
	function keepUpdateGrid( cb ){
		if( tid != undefined ){
			clearInterval( tid );
		}
		tid = setInterval( function(){
			clearInterval( tid );
			cb();
		}, 100 );
	}
	/*
	spr_value.numberspinner( {
		onChange:function( nv, ov ){
			if( currentRow != undefined ){
				currentRow.row.v = nv;
				keepUpdateGrid( function(){
					vic.easyui.updateDatagridRow( dgd_props, currentRow.index, currentRow.row );
				});
				event.trigger( 'onPropChange', { currentRow: currentRow } );
			}
		}
	});
	*/
	spr_v1.numberspinner( {
		onChange:function( nv, ov ){
			if( currentAdvRow != undefined ){
				currentAdvRow.row.v1 = nv;
				keepUpdateGrid( function(){
					vic.easyui.updateDatagridRow( dgd_advprops, currentAdvRow.index, currentAdvRow.row );
				});
				event.trigger( 'onPropChange', { currentRow: currentAdvRow, rows:vic.easyui.getDatagridRows( dgd_advprops ) } );
			}
		}
	});
	
	spr_v2.numberspinner( {
		onChange:function( nv, ov ){
			if( currentAdvRow != undefined ){
				currentAdvRow.row.v2 = nv;
				keepUpdateGrid( function(){
					vic.easyui.updateDatagridRow( dgd_advprops, currentAdvRow.index, currentAdvRow.row );
				});
				event.trigger( 'onPropChange', { currentRow: currentAdvRow, rows:vic.easyui.getDatagridRows( dgd_advprops ) } );
			}
		}
	});
	
	spr_v3.numberspinner( {
		onChange:function( nv, ov ){
			if( currentAdvRow != undefined ){
				currentAdvRow.row.v3 = nv;
				keepUpdateGrid( function(){
					vic.easyui.updateDatagridRow( dgd_advprops, currentAdvRow.index, currentAdvRow.row );
				});
				event.trigger( 'onPropChange', { currentRow: currentAdvRow, rows:vic.easyui.getDatagridRows( dgd_advprops ) } );
			}
		}
	});
	
	spr_v4.numberspinner( {
		onChange:function( nv, ov ){
			if( currentAdvRow != undefined ){
				currentAdvRow.row.v4 = nv;
				keepUpdateGrid( function(){
					vic.easyui.updateDatagridRow( dgd_advprops, currentAdvRow.index, currentAdvRow.row );
				});
				event.trigger( 'onPropChange', { currentRow: currentAdvRow, rows:vic.easyui.getDatagridRows( dgd_advprops ) } );
			}
		}
	});
	
	spr_v5.numberspinner( {
		onChange:function( nv, ov ){
			if( currentAdvRow != undefined ){
				currentAdvRow.row.v5 = nv;
				keepUpdateGrid( function(){
					vic.easyui.updateDatagridRow( dgd_advprops, currentAdvRow.index, currentAdvRow.row );
				});
				event.trigger( 'onPropChange', { currentRow: currentAdvRow, rows:vic.easyui.getDatagridRows( dgd_advprops ) } );
			}
		}
	});
	
	combo_advProps.combobox({
		onChange:function( nv, ov ){
			if( currentAdvRow != undefined ){
				currentAdvRow.row.id = nv;
				currentAdvRow.row.name = app.utils.keyToName( currentAdvRow.row.id );
				vic.easyui.updateDatagridRow( dgd_advprops, currentAdvRow.index, currentAdvRow.row );
				setAdvLinkButton();
				event.trigger( 'onPropChange', { currentRow: currentAdvRow, rows:vic.easyui.getDatagridRows( dgd_advprops ) } );
			}
		}
	});
	
	var currentAdvRow = undefined;
	dgd_advprops.datagrid({
		onSelect:function( index, row ){
			currentAdvRow = {index:index, row:row};
			
			vic.easyui.setSpinnerValue( spr_v1, row.v1, false );
			vic.easyui.setSpinnerValue( spr_v2, row.v2, false );
			vic.easyui.setSpinnerValue( spr_v3, row.v3, false );
			vic.easyui.setSpinnerValue( spr_v4, row.v4, false );
			vic.easyui.setSpinnerValue( spr_v5, row.v5, false );
			vic.easyui.setComboxSelect( combo_advProps, row.id, false );
			vic.easyui.setComboxSelect( combo_advType, row.tid, false );
		}
	});
	
	combo_advType.combobox({
		onChange:function( nv, ov ){
			if( currentAdvRow != undefined ){
				currentAdvRow.row.tid = nv;
				currentAdvRow.row.type = app.utils.keyToName( currentAdvRow.row.tid );
				vic.easyui.updateDatagridRow( dgd_advprops, currentAdvRow.index, currentAdvRow.row );
				setAdvLinkButton();
				event.trigger( 'onPropChange', { currentRow: currentAdvRow, rows:vic.easyui.getDatagridRows( dgd_advprops ) } );
			}
		}
	});
	/*
	var currentRow = undefined;
	dgd_props.datagrid({
		onSelect:function( index, row ){
			currentRow =  {index:index, row:row};
			vic.easyui.setSpinnerValue( spr_value, row.v, false );
		}
	});
	*/
	var currentNode = undefined;
	tree_particle.tree( {
		onSelect:function( node ){
			if( currentNode == node ) return;
			currentNode = node;
			event.trigger( 'onTreeClick', { node:node } );
		}
	});
	
	webgl.mousedown( onmousedown );
	webgl.mouseup( onmouseup );
	webgl.mousemove( onMousemove );
	
	function onMousemove(e) {
		var px = e.offsetX;
		var py = e.offsetY;
		if ( isMouseDown ) {
			targetPos[0] = px;
			targetPos[1] = py;
			event.trigger( 'onMouseMove', { targetPos:targetPos } );
		}
	}
	
	function onmousedown( e ) {
		isMouseDown = true;
	}
	
	function onmouseup( e ) {
		isMouseDown = false;
	}
	
	function appendImage( id, dom ){
		$( dom ).attr( 'id', id );
		$( dom ).css( 'width', '100px' );
		$( dom ).css( 'height', '100px' );
		$( dom ).css( 'cursor', 'pointer' );
		mc_imgs.append( dom );
		
		mc_imgs.undelegate( 'click' );
		mc_imgs.delegate( 'img', 'click', function(){
			setImgFocus( $(this).attr( 'id' ) );
			event.trigger( 'onImgClick', { id: $(this).attr( 'id' ) } );
		});
	}
	
	function setImgFocus( imgId ){
		mc_imgs.find('img').each( function( id, dom ){
			$( dom ).removeClass( 'outline' );
			if( dom.id == imgId ){
				$( dom ).addClass( 'outline' );
			}
		});
	}
	
	function disableAllProps(){
		$( 'div[ptype]' ).each( function( id, dom ){
			$( dom ).hide();
			//$( dom ).find( '.easyui-numberspinner' ).numberspinner( 'disable' );
			//$( dom ).find( '.easyui-linkbutton' ).linkbutton( 'disable' );
		});
	}
	
	function setDgdProp( ary_props ){
		disableAllProps();
		_.each( ary_props, function( prop ){
			var type = prop.id;
			var value = prop.v;
			var spr = $( 'div[ptype="' + type + '"]' ).find( '#spr_value' );
			spr.parent().parent().show();
			spr.numberspinner( 'enable' );
			vic.easyui.setSpinnerValue( spr, value, false );
		});
	/*
		vic.easyui.setDatagridRows( dgd_props, ary_props );
		if( ary_props.length > 0 )
			vic.easyui.selectDatagridRow( dgd_props, 0 );
			*/
	}

	
	function setAdvDgdProp( ary_props ){
		vic.easyui.setDatagridRows( dgd_advprops, ary_props );
		if( ary_props.length > 0 ){
			vic.easyui.selectDatagridRow( dgd_advprops, 0 );
		}
		setAdvLinkButton();
	}
	
	function setAdvLinkButton(){
		_.each( ary_propsModel, function( prop ){
			var dom = $( 'div[ptype="' + prop.id + '"]' );
			dom.find( '.easyui-linkbutton' ).eq(0).linkbutton( 'unselect' );
			dom.find( '.easyui-linkbutton' ).eq(1).linkbutton( 'unselect' );
			dom.find( '.easyui-linkbutton' ).eq(2).linkbutton( 'unselect' );
			dom.find( '.easyui-linkbutton' ).eq(3).linkbutton( 'unselect' );
		});
		
		var ary_props = vic.easyui.getDatagridRows( dgd_advprops, ary_props );
		
		_.each( ary_props, function( prop ){
			switch( prop.tid ){
				case 'randStartAdd':
					var dom = $( 'div[ptype="' + prop.id + '"]' );
					dom.find( '.easyui-linkbutton' ).eq(0).linkbutton( 'select' );
					break;
				case 'randAdd':
					var dom = $( 'div[ptype="' + prop.id + '"]' );
					dom.find( '.easyui-linkbutton' ).eq(1).linkbutton( 'select' );
					break;
				case 'constMul':
					var dom = $( 'div[ptype="' + prop.id + '"]' );
					dom.find( '.easyui-linkbutton' ).eq(2).linkbutton( 'select' );
					break;
				case 'customMul':
					var dom = $( 'div[ptype="' + prop.id + '"]' );
					dom.find( '.easyui-linkbutton' ).eq(3).linkbutton( 'select' );
					break;
			}
		});
	}
	
	function setTree( nodes, selectId ){
		vic.easyui.setTree( tree_particle, nodes );
		if( selectId != undefined ){
			setTimeout( function(){
				vic.easyui.selectTreeNode( tree_particle,vic.easyui.getTreeNodeById( tree_particle, selectId ));
				event.trigger( 'onViewTreeChange' );
			}, 10 );
		}
	}
	
	function addTree( model ){
		if( currentNode == undefined ){
			vic.easyui.appendTree( tree_particle, vic.easyui.getTreeNodeById( tree_particle, 'root' ), { id:model.id, text:model.name, particle:model } );
		}else{
			vic.easyui.appendTree( tree_particle, currentNode, { id:model.id , text:model.name, particle:model } );
		}
		vic.easyui.selectTreeNode( tree_particle,vic.easyui.getTreeNodeById( tree_particle, model.id ));
		event.trigger( 'onViewTreeChange' );
	}
	
	function removeTree(){
		if( currentNode != undefined ){
			if( currentNode.id == 'root' ){
				vic.easyui.showAlert( '渲染層無法刪除哦' );
				return; 
			}
			
			vic.easyui.removeTree( tree_particle, currentNode );
			currentNode = undefined;
			api.clearParticle();
			event.trigger( 'onViewTreeChange' );
		}
	}
	
	function addAdvProp(){
		var newf = {
			id: combo_advProps.combobox( 'getValue' ),
			tid: combo_advType.combobox( 'getValue' ),
			name: app.utils.keyToName( combo_advProps.combobox( 'getValue' ) ),
			type: app.utils.keyToName( combo_advType.combobox( 'getValue' ) ),
			v1: spr_v1.numberspinner( 'getValue' ),
			v2: spr_v2.numberspinner( 'getValue' ),
			v3: spr_v3.numberspinner( 'getValue' ),
			v4: spr_v4.numberspinner( 'getValue' ),
			v5: spr_v5.numberspinner( 'getValue' )
		};
		vic.easyui.appendDatagridRow( dgd_advprops, newf );
		vic.easyui.selectDatagridRow( dgd_advprops, vic.easyui.getDatagridRows( dgd_advprops ).length - 1 );
		
		setAdvLinkButton();
		event.trigger( 'onPropChange', { currentRow: currentAdvRow, rows:vic.easyui.getDatagridRows( dgd_advprops ) } );
	}
	
	function removeAdvProp(){
		if( currentAdvRow != undefined ){
			vic.easyui.deleteDatagridRow( dgd_advprops, currentAdvRow.index );
			currentAdvRow = undefined;
			var ary_rows = vic.easyui.getDatagridRows( dgd_advprops );
			if( ary_rows.length > 0 ){
				vic.easyui.selectDatagridRow( dgd_advprops, vic.easyui.getDatagridRows( dgd_advprops ).length - 1 );
			}
			
			setAdvLinkButton();
		}
		event.trigger( 'onPropChange', { currentRow: currentAdvRow, rows:vic.easyui.getDatagridRows( dgd_advprops ) } );
	}
	
	function upMove(){
		if( currentAdvRow != undefined ){
			if( currentAdvRow.index > 0 ){
				vic.easyui.deleteDatagridRow( dgd_advprops, currentAdvRow.index );
				vic.easyui.insertDatagridRow( dgd_advprops, currentAdvRow.index - 1, currentAdvRow.row );
				vic.easyui.selectDatagridRow( dgd_advprops, currentAdvRow.index - 1 );
			}
		}
		
		event.trigger( 'onPropChange', { currentRow: currentAdvRow, rows:vic.easyui.getDatagridRows( dgd_advprops ) } );
	}
	
	function downMove(){
		if( currentAdvRow != undefined ){
			var maxCount = vic.easyui.getDatagridRows( dgd_advprops ).length;
			if( currentAdvRow.index < maxCount - 1 ){
				vic.easyui.deleteDatagridRow( dgd_advprops, currentAdvRow.index );
				vic.easyui.insertDatagridRow( dgd_advprops, currentAdvRow.index + 1 , currentAdvRow.row );
				vic.easyui.selectDatagridRow( dgd_advprops, currentAdvRow.index + 1 );
			}
		}
		
		event.trigger( 'onPropChange', { currentRow: currentAdvRow, rows:vic.easyui.getDatagridRows( dgd_advprops ) } );
	}
	
	function getTreeRootNode(){
		return vic.easyui.getTreeNodeById( tree_particle, 0 );
	}
	
	module.webgl = webgl;
	module.tree_particle = tree_particle;
	module.addTree = addTree;
	module.removeTree = removeTree;
	module.addAdvProp = addAdvProp;
	module.removeAdvProp = removeAdvProp;
	module.upMove = upMove;
	module.downMove = downMove;
	module.setTree = setTree;
	module.setDgdProp = setDgdProp;
	module.setAdvDgdProp = setAdvDgdProp;
//	module.setAdvLinkButton = setAdvLinkButton;
	module.getTreeRootNode = getTreeRootNode;
	module.appendImage = appendImage;
	module.setImgFocus = setImgFocus;
	module.setParticleColor = setParticleColor;
	module.setInfo = setInfo;
	module.setBlending = setBlending;
	module.setName = setName;
	module.setWinOutput = setWinOutput;
	module.closeImport = closeImport;
	module.event = event;
})( app.view );
