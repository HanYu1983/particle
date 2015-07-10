package component;

import inter.AbstractDom;
import inter.AbstractTree;
import inter.ITree;

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
				getEvent().trigger( 'onTreeNodeClick', {id:node.id} );
			},
			onDrop:function( target,source,point ){
				trace( target );
				trace( source );
				trace( point );
			}
		});
	}
	
	override public function addEmitter( parentNodeId:String, id:String ):Void {
		var node:Dynamic = getDom().tree('find', parentNodeId);
		if (node && ( node.domId == '_easyui_tree_1' || node.type == EParticleType.EMITTER )) {
			var nodes = [{
				id:id,
				text:id + '_' + EParticleType.EMITTER,
				type:EParticleType.EMITTER
			}];
			getDom().tree('append', {
				parent:node.target,
				data:nodes
			});
			
			addParticle( id, Main.getId() );
		}
	}
	override public function addParticle( parentNodeId:String, id:String ):Void {
		var node:Dynamic = getDom().tree('find', parentNodeId);
		if (node && ( node.domId == '_easyui_tree_1' || node.type == EParticleType.EMITTER )) {
			var nodes = [{
				id:id,
				text:id + '_' + EParticleType.PARTICLE,
				type:EParticleType.PARTICLE
			}];
			getDom().tree('append', {
				parent:node.target,
				data:nodes
			});
		}
	}
	
	override public function removeParticle( nodeId:String ):Void {
		var node:Dynamic = getDom().tree('find', nodeId);
		if (node && node.domId != '_easyui_tree_1' ) {
			getDom().tree('remove', node.target );
		}
	}
}