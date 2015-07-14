package component;

import component.EParticleType;
import inter.AbstractDom;
import inter.AbstractTree;
import inter.IParticle;
import inter.ITree;
using Reflect;
/**
 * ...
 * @author vic
 */
class Tree extends AbstractTree
{
	public static var ADD_NODE = 'add_node';
	
	public function new( dom ) 
	{
		super( dom );
	}
	
	override public function init():Void 
	{
		super.init();
		
		getDom().tree( {
			onClick:function( node ) {
				getEvent().trigger( 'onTreeNodeClick', {node:node} );
			},
			onDrop:function( target,source,point ){
				trace( target );
				trace( source );
				trace( point );
			}
		});
	}
	
	override public function parserLoadData( loadData:Dynamic ):Void {
		function _findParticle( fields:Dynamic, parentNode:Dynamic ) {
			addParticle( parentNode, fields, EParticleType.EMITTER, fields.id );
			
			if ( fields.hasField( 'emit' ) ) {
				var ary:Array<Dynamic> = fields.emit.prototype;
				var target:Dynamic = null;
				parentNode = findNode( fields.id );
				for ( i in 0...ary.length ) _findParticle( ary[i], parentNode );
			}
		}
		_findParticle( loadData, getRootNode() );
	}
	
	override public function addParticle(parentNode:Dynamic, particleData:Dynamic, type:EParticleType, name:String):Void 
	{
		addNode( parentNode, particleData, type, name );
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
		}
	}
	
	function addNode( parentNode:Dynamic, particleData:Dynamic, type:EParticleType, name:String ) {
		if (parentNode && ( parentNode.domId == '_easyui_tree_1' || parentNode.type == EParticleType.EMITTER )) {
			var nodes = [{
				id:particleData.id,
				text:name,
				type:type
			}];
			getDom().tree('append', {
				parent:parentNode.target,
				data:nodes
			});
			
			trigger( ADD_NODE, { particleData:particleData } );
			//parentNode.particle == null 的時候是因為新增root emitter，它的parent是Particle Tree，這個源頭沒有資料
			/*
			if ( parentNode.particle == null || !addData ) return;
			var particleObj:Dynamic = parentNode.particle.getData();
			if ( !particleObj.hasField( 'emit' ) ) {
				particleObj.emit = {
					prototype:[]
				}
			}
			particleObj.emit.prototype.push( particle.getData() );
			*/
		}
	}
}