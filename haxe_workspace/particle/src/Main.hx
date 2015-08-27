package;
import haxe.Json;
import model.IPanelModel;
import model.PanelModel;
import view.TreeView;

/**
 * ...
 * @author vic
 */
class Main
{
	static var j = untyped __js__('$');
	var treeView = new TreeView();
	var model = new PanelModel();
	
	

	public function new() 
	{
		//正要寫parser
		
		treeView.config = {
			//table_props:j( '#table_props' ),
			btn_addTreeNode:j('#btn_addTreeNode' ),
			btn_removeTreeNode:j('#btn_removeTreeNode' ),
			tree_particle:j( '#tree_particle' )
		}
		
		treeView.addHandler( function ( type:String, params:Dynamic ):Void {
			trace( type, params );
			switch( type ){
				case TreeView.ON_BTN_ADD_TREE_NODE_CLICK:
					if( params.selectNode.id == null )
						model.addParticle( getId(), 999, {} );
					else 
						model.addParticle( getId(), params.selectNode.id, { } );
				case TreeView.ON_BTN_REMOVE_TREE_NODE_CLICK:
					model.removeParticle( params.selectNode.id );
				case TreeView.ON_TREE_DRAG:
					var savestr = Json.stringify( model.getOutputData( treeView.findNode( 999 ) ) );
					trace( savestr );
				//	trace( treeView.getRoots() );
				//	model.moveParticle( params.moveId, params.toId );
				//	trace( params );
					
			}
		});
		
		
		
		model.addHandler( function ( type:String, params:Dynamic ):Void {
			trace( type, params );
			switch( type ){
				case PanelModel.ON_ADD_PARTICLE:
					treeView.appendNode( params.id, params.parentId );
				case PanelModel.ON_REMOVE_PARTICLE:
					treeView.removeNode( params.id );
			}
		});
		
		model.config = untyped __js__('testLoadData');
	}
	
	static var id = 2;
	
	public static function getId() {
		return id++;
	}
	
	static function main() {
		new Main();
	}
}