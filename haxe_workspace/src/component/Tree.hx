package component;

import inter.AbstractDom;
import inter.ITree;

/**
 * ...
 * @author vic
 */
class Tree extends AbstractDom implements ITree
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
	
	public function addEmitter( parentNodeId:String, id:String ):Void {
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
	public function addParticle( parentNodeId:String, id:String ):Void {
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
	
	public function removeParticle( nodeId:String ):Void {
		var node:Dynamic = getDom().tree('find', nodeId);
		if (node && node.domId != '_easyui_tree_1' ) {
			getDom().tree('remove', node.target );
		}
	}
}