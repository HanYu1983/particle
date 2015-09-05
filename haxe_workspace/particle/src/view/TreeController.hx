package view;

import model.Model;
import view.component.TreeView;

/**
 * ...
 * @author vic
 */
class TreeController extends Model
{
	public static var ON_BTN_ADD_TREE_NODE_CLICK = 'ON_BTN_ADD_TREE_NODE_CLICK';
	public static var ON_BTN_REMOVE_TREE_NODE_CLICK = 'ON_BTN_REMOVE_TREE_NODE_CLICK';
	
	var tree = new TreeView();
	var btn_addTreeNode:Dynamic;
	var btn_removeTreeNode:Dynamic;

	public function new() 
	{
		super();
		
	}
	
	public function getItems():Dynamic 
	{
		return tree.getItems();
	}
	
	public function getItem(element:Dynamic):Dynamic 
	{
		return tree.getItem( element );
	}
	
	public function getItemById( id:String ):Dynamic {
		return tree.getItemById( id );
	}
	
	public function getSelectItem():Dynamic {
		return tree.getSelectItem();
	}
	
	public function setItemName( id:String, label:String ):Void {
		tree.setItemName( id, label );
	}
	
	public function addTo(element:Dynamic, parentElement:Dynamic):Void 
	{
		tree.addTo( element, parentElement );
	}
	
	public function addToWithLabel( id:String, label:String, ?parentElement:Dynamic ):Void {
		tree.addToWithLabel( id, label, parentElement );
	}
	
	public function remove(element:Dynamic):Void 
	{
		tree.remove( element );
	}
	
	public function selectItem(element:Dynamic):Void 
	{
		tree.selectItem( element );
	}
	
	override function init() 
	{
		super.init();
		
		tree.config = {
			tree:config.tree_particle
		}
		
		tree.addHandler( function( type, params ) {
			notify( type, params );
		});
		
		btn_addTreeNode = config.btn_addTreeNode;
		btn_removeTreeNode = config.btn_removeTreeNode;
		
		btn_addTreeNode.click( function() {
			notify( ON_BTN_ADD_TREE_NODE_CLICK );
		});
		
		btn_removeTreeNode.click( function() {
			notify( ON_BTN_REMOVE_TREE_NODE_CLICK );
		});
	}
}