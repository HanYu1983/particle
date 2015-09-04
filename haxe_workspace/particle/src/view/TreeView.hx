package view;

import model.Model;

/**
 * ...
 * @author vic
 */
class TreeView extends Model
{
	public static var ON_TREE_NODE_CLICK = 'ON_TREE_NODE_CLICK';
	public static var ON_BTN_ADD_TREE_NODE_CLICK = 'ON_BTN_ADD_TREE_NODE_CLICK';
	public static var ON_BTN_REMOVE_TREE_NODE_CLICK = 'ON_BTN_REMOVE_TREE_NODE_CLICK';
	public static var ON_TREE_DRAG = 'ON_TREE_DRAG';
	
	var tree_particle:Dynamic;
	var btn_addTreeNode:Dynamic;
	var btn_removeTreeNode:Dynamic;

	public function new() 
	{
		super();
		
	}
	
	public function getRoots() {
		
		return tree_particle.tree('getRoots' );
	}
	
	public function getRootNode():Dynamic 
	{
		return { };
		//return tree_particle.tree( 'getRoot' );
	}
	
	public function setNodeNameById( id:Int, name:String ) {
		trace( id, name );
		tree_particle.tree('update', {
			target: findNode( id ).target,
			text: name
		});
	}
	
	public function findNode(nodeId:Int):Dynamic 
	{
		return { };
		/*
		return switch( tree_particle.tree('find', nodeId) ) {
			case null: getRootNode();
			case node: node;
		}*/
	}
	
	public function removeNode( nodeId:Dynamic ):Void {
		tree_particle.tree('remove', findNode( nodeId ).target );
	}
	
	public function focusNode( node:Dynamic ) {
		return;
		tree_particle.tree( 'select', node.target);
		notify( ON_TREE_NODE_CLICK, {node:node} );
	}
	
	public function appendNode( nodeId:Int, name:String, toNodeId:Int ):Void {
		if ( toNodeId == 999 ) {
			getRootNode().id = nodeId;
			getRootNode().text = name;
			return ;
		}
		
		tree_particle.tree('append', {
			parent: findNode( toNodeId ).target,
			data: [{
				id: nodeId,
				text: name
			}]
		});
	}
	
	override function init() 
	{
		super.init();
		
		trace("GGGGG");
		
		tree_particle = config.tree_particle;
		tree_particle.on('select',function (event)
		{
			var args = event.args;
			var item = tree_particle.jqxTree('getItem', args.element);
			var label = item.label; 
			
			notify( ON_TREE_NODE_CLICK, { node:item } );
		});
		
		tree_particle.on('dragEnd', function (event) {
			var itemLabel = event.args.label;
			var itemValue = event.args.value;
			var moveItem = tree_particle.jqxTree('getItem', Main.j( event.args.originalEvent.element ).parent()[0] );
			var parentItem = tree_particle.jqxTree('getItem', moveItem.parentElement );
			
			notify( ON_TREE_DRAG, { moveId:moveItem.id, toId:parentItem.id } );
		});
		
		btn_addTreeNode = config.btn_addTreeNode;
		btn_removeTreeNode = config.btn_removeTreeNode;
		
		btn_addTreeNode.click( function() {
			notify( ON_BTN_ADD_TREE_NODE_CLICK, { selectNode:getSelectedNode() } );
		});
		
		btn_removeTreeNode.click( function() {
			notify( ON_BTN_REMOVE_TREE_NODE_CLICK, { selectNode:getSelectedNode() } );
		});
	}
	
	function getNodeByDom( dom:Dynamic ):Dynamic {
		return switch( tree_particle.tree('getNode', dom ) ) {
			case null: getRootNode();
			case node: node;
		}
	}
	
	function getSelectedNode():Dynamic 
	{
		return switch( tree_particle.tree('getSelected') ) {
			case null: getRootNode();
			case node: node;
		}
	}
}