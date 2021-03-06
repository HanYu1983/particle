package component;

import component.EParticleType;
import haxe.Json;
import inter.AbstractDom;
import inter.AbstractTree;
import inter.ITree;
using Reflect;
/**
 * ...
 * @author vic
 */
class Tree extends AbstractTree
{
	public static var ADD_NODE = 'add_node';
	public static var REMOVE_NODE = 'remove_node';
	public static var ON_TREE_NODE_CLICK = 'on_tree_node_click';
	public static var ON_TREE_DROP_NODE = 'on_tree_drop_node';
	
	public function new( dom ) 
	{
		super( dom );
	}
	
	override public function init():Void 
	{
		super.init();
		
		getDom().tree( {
			onClick:function( node ) {
				trigger( ON_TREE_NODE_CLICK, {node:node} );
			},
			onDrop:function( target, source, point ) {
				trace( target.id );
				trace( source );
				trace( point );
				var targetNode = getDom().tree( 'getNode', target );
				trace( targetNode );
				trigger( ON_TREE_DROP_NODE, {targetNode:targetNode, sourceNode:source } );
			}
		});
	}
	
	override public function parserLoadData( loadData:Dynamic ):Void {
		function _findParticle( fields:Dynamic, parentNode:Dynamic ) {
			addParticle( parentNode, fields, fields.id );
			
			if ( fields.hasField( 'emit' ) ) {
				var ary:Array<Dynamic> = fields.emit.prototype;
				var target:Dynamic = null;
				parentNode = findNode( fields.id );
				for ( i in 0...ary.length ) _findParticle( ary[i], parentNode );
			}
		}
		_findParticle( loadData, getRootNode() );
		
		focusNode( findNode( 'root' ) );
	}
	
	override public function outputData():Dynamic 
	{
		var retobj:Dynamic = { };
		function _loopNode( node:Dynamic, outputData:Dynamic ) {
			var particleData = node.particleData;
			outputData.id = particleData.id;
			outputData.lifetime = particleData.lifetime;
			outputData.vel = particleData.vel;
			outputData.pos = particleData.pos;
			outputData.mass = particleData.mass;
			outputData.color = particleData.color;
			outputData.size = particleData.size;
			
			if ( node.children && node.children.length > 0 ) {
				outputData.emit = {prototype:[]}
				outputData.emit.count = particleData.emit.count;
				outputData.emit.duration = particleData.emit.duration;
				outputData.emit.angle = particleData.emit.angle;
				outputData.emit.range = particleData.emit.range;
				outputData.emit.force = particleData.emit.force;
				for ( i in 0...node.children.length ) {
					var obj = { };
					outputData.emit.prototype.push( obj );
					_loopNode( node.children[i], obj );
				}
			}
		}
		_loopNode( findNode( 'root' ), retobj );
		return retobj;
	}
	
	override public function addParticle(parentNode:Dynamic, particleData:Dynamic, name:String):Void 
	{
		addNode( parentNode, particleData, name );
	}
	
	override public function findNode(nodeId:String):Dynamic 
	{
		return getDom().tree('find', nodeId);
	}
	
	override public function getRootNode():Dynamic 
	{
		return getDom().tree( 'getRoot' );
	}
	
	override public function getSelectedNode():Dynamic 
	{
		return getDom().tree('getSelected');
	}
	
	override public function removeParticle( node:Dynamic ):Void {
		if (node && node.domId != '_easyui_tree_1' ) {
			getDom().tree('remove', node.target );
			trigger( REMOVE_NODE, { node:node } );
		}
	}
	
	function focusNode( node ) {
		getDom().tree( 'select', node.target);
		trigger( ON_TREE_NODE_CLICK, {node:node} );
	}
	
	function addNode( parentNode:Dynamic, particleData:Dynamic, name:String ) {
		//if (parentNode && ( parentNode.domId == '_easyui_tree_1' )) {
		if (parentNode ) {
			var nodes = [{
				id:particleData.id,
				text:name,
				particleData:particleData
			}];
			getDom().tree('append', {
				parent:parentNode.target,
				data:nodes
			});
			trigger( ADD_NODE, { parentNode:parentNode, particleData:particleData } );
		}
	}
}