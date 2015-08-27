package;
import haxe.Json;
import js.Browser;
import model.PanelModel;
import view.ParamsView;
import view.TreeView;

/**
 * ...
 * @author vic
 */
class Main
{
	static var j:Dynamic = untyped __js__('$');
	
	var canvas_container:Dynamic;
	var webgl:Dynamic;
	
	var treeView = new TreeView();
	var paramsView = new ParamsView();
	var model = new PanelModel();
	
	public function new() 
	{
		canvas_container = j( '#canvas_container' );
		webgl = j( '#webgl' );
		
		treeView.config = {
			//table_props:j( '#table_props' ),
			btn_addTreeNode:j('#btn_addTreeNode' ),
			btn_removeTreeNode:j('#btn_removeTreeNode' ),
			tree_particle:j( '#tree_particle' )
		}
		
		treeView.addHandler( function ( type:String, params:Dynamic ):Void {
			//trace( type, params );
			switch( type ) {
				case TreeView.ON_TREE_NODE_CLICK:
					paramsView.setValues( model.findParticleById( params.node.id ), treeView.findNode( params.node.id ).children != null );
				case TreeView.ON_BTN_ADD_TREE_NODE_CLICK:
					var newId = getId();
					model.addParticle( newId, params.selectNode.id, createNewParticle( newId ) );
				case TreeView.ON_BTN_REMOVE_TREE_NODE_CLICK:
					model.removeParticle( params.selectNode.id );
				case TreeView.ON_TREE_DRAG:
					treeView.focusNode( treeView.findNode( params.toId ) );
			}
		});
		
		paramsView.addHandler( function( type, params) {
			//trace( type, params );
			switch( type ) {
				case ParamsView.ON_PROP_CHANGE:
					model.setParticleProps( params.id, params.proptype, params.value );
			}
		});
		
		paramsView.config = {
			root:untyped __js__('mc_props_container')
		}
		
		model.addHandler( function ( type:String, params:Dynamic ):Void {
			//trace( type, params );
			switch( type ){
				case PanelModel.ON_ADD_PARTICLE:
					treeView.appendNode( params.id, params.parentId );
				case PanelModel.ON_REMOVE_PARTICLE:
					treeView.removeNode( params.id );
			}
			
			updateParticle( model.getOutputData( treeView.findNode( 999 ) ) );
		});
		
		var initObj:Dynamic = createNewParticle( getId() );
		initObj.emit.prototype = [
			createNewParticle( getId() )
		];
		
		model.config = initObj;
		
		treeView.focusNode( treeView.findNode( 0 ) );
		
		
		onResize(null );
		j( Browser.window ).resize( onResize );
		webgl.mousemove( onMousemove );
	}
	
	function createNewParticle( id ) {
		return {
			id:id, 
			lifetime:5,
			mass:3,
			color:'#33ddff',
			size:[10, 10],
			pos:[0, 0, 0], 
			vel:[0, 0, 0],
			emit:createNewEmit()
		}
	}
	
	public static function createNewEmit() {
		return { 
			count:1,
			duration:0.5,
			angle:0,
			range:0,
			force:100
		}
	}
	
	function onResize( e ) {
		webgl.attr( 'width', canvas_container.width() );
		webgl.attr( 'height', canvas_container.height() );
	}
	
	function onMousemove(e) {
		var px = e.offsetX;
		var py = e.offsetY;
		
		model.setParticleProps( 0, 'pos_x', px );
		model.setParticleProps( 0, 'pos_y', py );
	}
	
	static var id = 0;
	
	public static function getId() {
		return id++;
	}
	
	static function updateParticle( particleData:Dynamic ) {
		untyped __js__( 'common.onView.onNext' )( ['edit-particle', particleData] );
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