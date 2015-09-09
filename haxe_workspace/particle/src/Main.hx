package;
import haxe.Json;
import haxe.Timer;
import js.Browser;
import js.html.Image;
import model.PanelModel;
import view.component.TreeView;
import view.FileController;
import view.GridController;
import view.MenuController;
import view.ParamsView;
import view.TreeController;

/**
 * ...
 * @author vic
 */
class Main
{
	public static var j:Dynamic = untyped __js__('$');
	
	var canvas_container:Dynamic;
	var webgl:Dynamic;
	
	var treeController = new TreeController();
	var gridController = new GridController();
	var fileController = new FileController();
	var menuController = new MenuController();
	var paramsView = new ParamsView();
	var model = new PanelModel();
	
	var isMouseDown = false;
	var targetPos = [0.0, 0.0];
	var currentPos = [0.0, 0.0];
	var ary_elapsedTime = new Array<Float>();
	
	public function new() 
	{
		Reflect.setField( Browser.window, 'haxeStart', haxeStart );
		Reflect.setField( Browser.window, 'notifyFromHtml', notifyFromHtml );
	}
	
	function notifyFromHtml( type:String, param:String ) {
		var paramobj = Json.parse( param );
		switch( type ) {
			case 'onBtnImportClick':
				menuController.openImport( 'import' );
			case 'onBtnExportClick':
				menuController.openImport( 'export', Json.stringify( model.getRenderList() ) );
			case 'onBtnAboutClick':
				menuController.openAbout();
		}
	}
	
	function haxeStart() {
		
		
		canvas_container = j( '#canvas_container' );
		webgl = j( '#webgl' );
		
		onResize(null );
		webgl.mousedown( onmousedown );
		webgl.mouseup( onmouseup );
		webgl.mousemove( onMousemove );
		
		initCljs( webgl[0] );
		
		treeController.config = {
			btn_addTreeNode:j('#btn_addTreeNode' ),
			btn_removeTreeNode:j('#btn_removeTreeNode' ),
			tree_particle:j( '#tree_particle' )
		}
		
		treeController.addHandler( function ( type:String, params:Dynamic ):Void {
			switch( type ) {
				case TreeController.ON_BTN_REMOVE_TREE_NODE_CLICK:
					var selectItem = treeController.getSelectItem();
					model.removeParticle( selectItem.id );
				case TreeController.ON_BTN_ADD_TREE_NODE_CLICK:
					var newId = getId();
					var parentItem = treeController.getSelectItem();
					
					var newParticle:Dynamic = createNewParticle( newId );
					newParticle.pos[0] = targetPos[0];
					newParticle.pos[1] = targetPos[1];
					
					model.addParticle( newId, null, newParticle );
				case TreeView.ON_TREE_NODE_CLICK:
					var item = params.item;
					model.currentParticle = model.findParticleById( item.id ).particle;
					
					paramsView.setValues( model.findParticleById( item.id ), item.hasItems );
					gridController.initRow( item.id, model.findParticleById( item.id ).particle.formulaList );
			}
		});
		
		gridController.config = {
			table_props:j('#table_props' ),
			btn_addDynamic:j('#btn_addDynamic'),
			btn_removeDynamic:j('#btn_removeDynamic'),
			btn_moveUp:j('#btn_moveUp'),
			btn_moveDown:j('#btn_moveDown'),
			combo_props:j('#combo_props'),
			combo_dtype:j('#combo_dtype'),
			spr_value1:j('#spr_value1'),
			spr_value2:j('#spr_value2'),
			spr_value3:j('#spr_value3'),
			spr_value4:j('#spr_value4'),
			spr_value5:j('#spr_value5')
		}
		
		gridController.addHandler( function( type, params ) {
		//	trace( type );
			switch( type ) {
				case GridController.ON_BTN_MOVE_CLICK:
					model.moveFormula( model.currentParticle.id, params.fid, params.updown );
				case GridController.ON_FORMULA_CHANGE:
					if ( gridController.currentRow == null ) return;
					model.setFormulaById( gridController.currentParticleId, gridController.currentRow.uid, params.values );
				case GridController.ON_ROW_SELECT:
					if ( gridController.currentRow == null ) return;
					gridController.setTxtValue1( params.row.value1 );
					gridController.setTxtValue2( params.row.value2 );
					gridController.setTxtValue3( params.row.value3 );
					gridController.setTxtValue4( params.row.value4 );
					gridController.setTxtValue5( params.row.value5 );
					gridController.setSelectProp( params.row.ptype );
					gridController.setSelectMethod( params.row.method );
				case GridController.ON_ADD_CLICK:
					model.addFormula( params.id, createFormula( getId(), 'life', 'randStartAdd', 0, 0, 0, 0, 0 ));
				case GridController.ON_REMOVE_CLICK:
					if ( gridController.currentRow == null ) return;
					model.removeFormula( gridController.currentParticleId, gridController.currentRow.uid );
			}
		});
		
		paramsView.addHandler( function( type, params) {
		//	trace( type );
			switch( type ) {
				case ParamsView.ON_BACK_COLOR_CHANGE:
					var color = params.color;
					changeBgColor( color.r / 255, color.g / 255, color.b / 255 );
				case ParamsView.ON_COLOR_CHANGE:
					model.setParticleColor( model.currentParticle.id, params.color );
				case ParamsView.ON_BLEND_CHANGE:
					model.setParticleBlendMode( model.currentParticle.id, params.blend );
				case ParamsView.ON_PROP_CHANGE:
					model.setParticleProps( params.id, params.proptype, params.value );
				case ParamsView.ON_TXT_NAME_CHANGE:
					model.setParticleName( params.id, params.name );
			}
		});
		
		paramsView.config = {
			root:j('#mc_props_container'),
			btn_confirmName:j('#btn_confirmName'),
			txt_name:j('#txt_name'),
			color_color:j('#color_color' ),
			color_background:j('#color_background' ),
			txt_count:j('#txt_count' ),
			txt_fps:j('#txt_fps' ),
			combo_blend:j('#combo_blend' )
		}
		
		fileController.config = {
			file_upload:j( '#file_upload' ),
			mc_textContainer:j('#mc_textContainer' ),
			btn_removeTexture:j('#btn_removeTexture' )
		}
		
		fileController.addHandler( function ( type:String, params:Dynamic ):Void {
			switch( type ) {
				case FileController.ON_TEXTURE_CLICK:
					model.setParticleTextureId( model.currentParticle.id, params.textureId );
				case FileController.ON_BTN_REMOVE_TEXTURE_CLICK:
					model.setParticleTextureId( model.currentParticle.id, '' );
			}
		});
		
		menuController.config = {
			win_import:j('#win_import' ),
			win_about:j('#win_about' ),
			btn_confirm:j('#win_import #btn_confirm' )
		}
		
		menuController.addHandler( function ( type:String, params:Dynamic ):Void {
			switch( type ) {
				case MenuController.ON_IMPORT_CLICK:
					model.clearAll();
					model.config = Json.parse( params.config );
					clearParticle();
			}
		});
		
		model.addHandler( function ( type:String, params:Dynamic ):Void {
		//	trace( type );
			switch( type ) {
				case PanelModel.ON_INIT:
					
					addEventListener( function ( info ) {
						switch( info[0] ) {
							case 'tick':
								getInfo( function( err, data ) {
									if ( err == null ) {
										if ( data.count == 0 ){
											updateParticle( model.getOutputData( treeController.getItems() ) );
										}
										
										paramsView.setCount( data.count );
									}
								});
								
								if ( Math.abs( targetPos[0] - currentPos[0] ) > 1 ) {
									currentPos[0] += ( targetPos[0] - currentPos[0] ) * .2;
									currentPos[1] += ( targetPos[1] - currentPos[1] ) * .2;
									
									model.setParticleRootsPos( currentPos[0], currentPos[1] );
								}
								var elapsedTime = Std.parseFloat( info[1] );
								if ( ary_elapsedTime.length > 20 ) {
									ary_elapsedTime.shift();
								}
								ary_elapsedTime.push( elapsedTime );
								
								var sum = Lambda.fold( ary_elapsedTime, function( t, curr ) {
									return curr + t;
								}, 0 );
								paramsView.setFps( Math.ceil( 1 / ( sum / ary_elapsedTime.length )));
						}
					});
					treeController.selectItem( treeController.getItems()[0].element );
					
					targetPos[0] = webgl.width() / 2;
					targetPos[1] = webgl.height() / 2;
					
				case PanelModel.ON_FORMULA_POS_CHANGE:
					gridController.initRow( model.currentParticle.id, model.currentParticle.formulaList, params.id );
				case PanelModel.ON_TEXTURE_CHANGE:
					fileController.focus( params.textureId );
				case PanelModel.ON_FORMULA_CHANGE:
					gridController.updateRow( params.formulaId, params.values );
				case PanelModel.ON_ADD_FORMULA:
					gridController.addRow( params.formula[7], params.formula );
				case PanelModel.ON_REMOVE_FORMULA:
					gridController.removeRowById( params.formulaId );
				case PanelModel.ON_ADD_PARTICLE:
					switch( treeController.getItemById( params.parentId ) ) {
						case null:
							treeController.addToWithLabel( params.id, params.particle.name );
						case parentItem:
							treeController.addToWithLabel( params.id, params.particle.name, parentItem );
					}
					params.particle.tex = fileController.getImageIdByPos( 0 );
				case PanelModel.ON_REMOVE_PARTICLE:
					treeController.remove( treeController.getItemById( params.id ).element );
					clearParticle();
				case PanelModel.ON_NAME_CHANGE:
					treeController.setItemName( params.id, params.name );
				case PanelModel.ON_CURRENT_PARTICLE_CHANGE:
					fileController.focus( model.currentParticle.tex );
			}
			
			updateParticle( model.getOutputData( treeController.getItems() ) );
		});
		
		//以後可能可以存下來
		/*
		getInfo( function( err, data ) {
			if ( err == null ) {
				var bgColor = data.bgColor;
				paramsView.setBackgroundColor( bgColor[0], bgColor[1], bgColor[2] );
			}
		});
		*/
		
		var initObj:Dynamic = createNewParticle( getId() );
		initObj.lifetime = 0;
		initObj.emit.prototype = [
			createNewParticle( getId() )
		];
		initObj.emit.prototype[0].formulaList = [ 
			createFormula( getId(), 'scale-x', 'linear', 20, 0, 0, 0, 0 ),
			createFormula( getId(), 'scale-y', 'linear', 20, 0, 0, 0, 0 ),
		];
		
		initObj.pos[0] = webgl.width() / 2;
		initObj.pos[1] = webgl.height() / 2;
		
		loadImage( 'res/images/glow.jpg', function( img ) {
			fileController.addNewImage( img );
			loadImage( 'res/images/leadB_32_32.png', function( img ) {
				fileController.addNewImage( img );
				paramsView.setBackgroundColor( 0, 0, 0 );
				model.config = [initObj];
			});
		});
	}
	
	function loadImage( src, cb ) {
		var img = new Image();
		img.src = src;
		img.onload = function() {
			cb( img );
		};
	}
	
	function createNewParticle( id:Dynamic ) {
		return {
			id:id, 
			name:'粒子',
			lifetime:2,
			mass:1,
			color:[1, 1, 1, 1],
			size:[40, 40],
			pos:[0, 0, 0], 
			vel:[0, 0, 0],
			blending:'add',
			tex:'',
			emit:createNewEmit()
		}
	}
	
	public static function createNewEmit() {
		return { 
			count:1,
			duration:0.05,
			angle:0,
			range:6.28,
			force:100
		}
	}
	
	public static function engToChinese( eng ) {
		return switch( eng ) {
			case 'x': 				'位置x';
			case 'y':				'位置y';
			case 'angle':			'角度';
			case 'vx':				'速度x';
			case 'vy':				'速度y';
			case 'vr':				'旋轉速度';
			case 'scale-x':			'粒子寬度';
			case 'scale-y':			'粒子高度';
			case 'r':				'紅';
			case 'g':				'綠';
			case 'b':				'藍';
			case 'a':				'alpha';
			case 'emit-count':		'發射數目';
			case 'emit-duration':	'週期毫秒';
			case 'emit-angle':		'發射角度';
			case 'emit-range':		'發射範圍';
			case 'emit-force':		'發射力道';
			case _:'';
		}
	}
	
	
	
	function createFormula( id, ptype:String, method:String, v1:Float, v2:Float, v3:Float, v4:Float, v5:Float ) {
		var ary = new Array<Dynamic>();
		ary.push( ptype );
		ary.push( method );
		ary.push( v1 );
		ary.push( v2 );
		ary.push( v3 );
		ary.push( v4 );
		ary.push( v5 );
		ary.push( id );
		return ary;
	}
	
	function onResize( e ) {
		webgl.attr( 'width', canvas_container.width() );
		webgl.attr( 'height', canvas_container.height() );
	}
	
	function onMousemove(e) {
		var px = e.offsetX;
		var py = e.offsetY;
		if ( isMouseDown ) {
			targetPos[0] = px;
			targetPos[1] = py;
		}
	}
	
	function onmousedown( e ) {
		isMouseDown = true;
		
	}
	
	function onmouseup( e ) {
		isMouseDown = false;
	}
	
	static var id = 0;
	
	public static function showLoading() {
		j.messager.progress( {
			title:'Please waiting',
            msg:'Loading data...'
		});
	}
	
	public static function closeLoading() {
		j.messager.progress('close');
	}
	
	public static function showMessage( msg ){
		j.messager.show({
			title:'提示',
			msg:msg,
			timeout:5000,
			showType:'slide'
		});
	}
	
	public static function getId():String {
		return untyped __js__('leo.utils.generateUUID' )();
	}
	
	static function initCljs( canvas ) {
		untyped __js__('api.init')( canvas );
	}
	
	static function clearParticle() {
		untyped __js__('api.clearParticle')();
	}
	
	static function changeBgColor( r, g, b ) {
		untyped __js__('api.changeBgColor')( r, g, b );
	}
	
	static function updateParticle( ary_render:Array<Dynamic> ) {
		Lambda.foreach( ary_render, function( render ) {
			untyped __js__( 'api.editParticle' )( render );
			return true;
		});
	}
	
	static function moveParticle(id, x, y) {
		untyped __js__('api.changeCenterPos')(id, x, y );
	}
	
	static function addEventListener( listener:Dynamic -> Void) {
		untyped __js__('api.addEventListener')( listener );
	}
	
	static function getInfo( cb:String -> Dynamic -> Void ) {
		untyped __js__('api.info')( cb );
	}
	
	public static function addTexture( id:String, img:Dynamic ) {
		untyped __js__('api.addTexture')( id, img );
	}
	
	public static function addMouseWheelEvent( jdom, func ) {
		untyped __js__( 'leo.utils.addMouseWheelEvent' )( jdom, func );
	}
	
	public static function removeMouseWheelEvent( jdom ) {
		untyped __js__( 'leo.utils.removeMouseWheelEvent' )( jdom );
	}
	
	static function main() {
		new Main();
	}
}