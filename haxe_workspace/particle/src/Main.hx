package;
import haxe.Json;
import haxe.Timer;
import js.Browser;
import model.PanelModel;
import view.component.TreeView;
import view.DynamicView;
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
	var paramsView = new ParamsView();
	var dynamicView = new DynamicView();
	var model = new PanelModel();
	
	public function new() 
	{
		canvas_container = j( '#canvas_container' );
		webgl = j( '#webgl' );
		
		onResize(null );
		webgl.mousemove( onMousemove );
		
		Reflect.setField( Browser.window, 'haxeStart', haxeStart );
	}
	
	function createNewParticle( id:Dynamic ) {
		return {
			id:id, 
			name:'粒子_' + id,
			lifetime:5,
			mass:3,
			color:[.3, .3, .3],
			size:[10, 10],
			pos:[0, 0, 0], 
			vel:[0, 0, 0],
			emit:createNewEmit(),
			formulaList: [ 	createFormula( 'scale-x', 'linear', 0, 100, 0, 0, 0 ),
							createFormula( 'x', 'linear', 0, 100, 0, 0, 0 )]
		}
	}
	
	function createFormula( ptype:String, method:String, v1:Float, v2:Float, v3:Float, v4:Float, v5:Float ) {
		var ary = new Array<Dynamic>();
		ary.push( ptype );
		ary.push( method );
		ary.push( v1 );
		ary.push( v2 );
		ary.push( v3 );
		ary.push( v4 );
		ary.push( v5 );
		return ary;
	}
	
	function haxeStart() {
		
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
					model.addParticle( newId, parentItem.id, createNewParticle( newId ) );
				case TreeView.ON_TREE_NODE_CLICK:
					var item = params.item;
					paramsView.setValues( model.findParticleById( item.id ), item.hasItems );
			}
		});
		
		paramsView.addHandler( function( type, params) {
			//trace( type, params );
			switch( type ) {
				case ParamsView.ON_PROP_CHANGE:
					model.setParticleProps( params.id, params.proptype, params.value );
				case ParamsView.ON_TXT_NAME_CHANGE:
					model.setParticleName( params.id, params.name );
			}
		});
		
		paramsView.config = {
			root:j('#mc_props_container'),
			btn_confirmName:j('#btn_confirmName'),
			txt_name:j('#txt_name')
		}
		
		dynamicView.config = {
			table_props:j( '#table_props' )
		}
		
		model.addHandler( function ( type:String, params:Dynamic ):Void {
			//trace( type, params );
			switch( type ){
				case PanelModel.ON_ADD_PARTICLE:
					switch( treeController.getItemById( params.parentId ) ) {
						case null:
							treeController.addToWithLabel( params.id, params.particle.name );
						case parentItem:
							treeController.addToWithLabel( params.id, params.particle.name, parentItem );
					}
				case PanelModel.ON_REMOVE_PARTICLE:
					treeController.remove( treeController.getItemById( params.id ).element );
				case PanelModel.ON_NAME_CHANGE:
					treeController.setItemName( params.id, params.name );
			}
			
			updateParticle( model.getOutputData( treeController.getItems() ) );
		});
		
		var initObj:Dynamic = createNewParticle( getId() );
		initObj.emit.prototype = [
			createNewParticle( getId() )
		];
		
		model.config = initObj;
		
		treeController.selectItem( treeController.getItemById( '0' ).element );
	}
	
	public static function createNewEmit() {
		return { 
			count:1,
			duration:0.5,
			angle:0,
			range:0,
			force:0
		}
	}
	
	function onResize( e ) {
		webgl.attr( 'width', canvas_container.width() );
		webgl.attr( 'height', canvas_container.height() );
	}
	
	function onMousemove(e) {
		var px = e.offsetX;
		var py = e.offsetY;
		moveParticle( 0, px, py );
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
	
	public static function getId() {
		return id++;
	}
	
	static function updateParticle( ary_render:Array<Dynamic> ) {
		trace( Json.stringify( ary_render[0] ));
		Lambda.foreach( ary_render, function( render ) {
			untyped __js__( 'api.editParticle' )( render );
			return true;
		});
	}
	
	static function moveParticle(id, x, y) {
		untyped __js__('api.changeCenterPos')(id, x, y );
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