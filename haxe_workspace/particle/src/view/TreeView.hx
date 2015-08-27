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
	
	//var table_props:Dynamic;
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
		return tree_particle.tree( 'getRoot' );
	}
	
	public function findNode(nodeId:Int):Dynamic 
	{
		return switch( tree_particle.tree('find', nodeId) ) {
			case null: getRootNode();
			case node: node;
		}
	}
	
	override function init() 
	{
		super.init();
		/*
		table_props = config.table_props;
		table_props.datagrid();
		*/
		
		tree_particle = config.tree_particle;
		tree_particle.tree( {
			onClick:function( node ) {
				notify( ON_TREE_NODE_CLICK, {node:node} );
			},
			onDrop:function( target, source, point ) {
				notify( ON_TREE_DRAG, { moveId:source.id, toId:getNodeByDom( target ).id } );
			}
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
	
	public function removeNode( nodeId:Dynamic ):Void {
		tree_particle.tree('remove', findNode( nodeId ).target );
	}
	
	public function focusNode( node:Dynamic ) {
		tree_particle.tree( 'select', node.target);
		notify( ON_TREE_NODE_CLICK, {node:node} );
	}
	
	public function appendNode( nodeId:Int, toNodeId:Int ):Void {
		if ( toNodeId == 999 ) {
			getRootNode().id = nodeId;
			getRootNode().text = nodeId;
			return ;
		}
		tree_particle.tree('append', {
			parent: findNode( toNodeId ).target,
			data: [{
				id: nodeId,
				text:nodeId
			}]
		});
	}
}