package component;

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
			if ( fields.hasField( 'emit' ) ) {
				var ary:Array<Dynamic> = fields.emit.prototype;
				var target:Dynamic = null;
				
				addEmitter( parentNode, new Particle( fields ) );
				parentNode = findNode( fields.id );
				
				for ( i in 0...ary.length ) {
					_findParticle( ary[i], parentNode );
				}
			}else {
				addParticle( parentNode, new Particle( fields ) );
			}
		}
		
		_findParticle( loadData, getRootNode() );
	}
	
	
	override public function addEmitter( parentNode:Dynamic, particle:IParticle ):Void {
		if (parentNode && ( parentNode.domId == '_easyui_tree_1' || parentNode.type == EParticleType.EMITTER )) {
			var nodes = [{
				id:particle.getId(),
				text:particle.getId() + '_' + EParticleType.EMITTER,
				type:EParticleType.EMITTER,
				particle:particle
			}];
			getDom().tree('append', {
				parent:parentNode.target,
				data:nodes
			});
		}
	}
	override public function addParticle( parentNode:Dynamic, particle:IParticle ):Void {
		if (parentNode && ( parentNode.domId == '_easyui_tree_1' || parentNode.type == EParticleType.EMITTER )) {
			var nodes = [{
				id:particle.getId(),
				text:particle.getId() + '_' + EParticleType.PARTICLE,
				type:EParticleType.PARTICLE,
				particle:particle
			}];
			getDom().tree('append', {
				parent:parentNode.target,
				data:nodes
			});
		}
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
}