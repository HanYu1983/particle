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
	
	override public function addEmitter( parentNode:Dynamic, id:String ):Void {
		if (parentNode && ( parentNode.domId == '_easyui_tree_1' || parentNode.type == EParticleType.EMITTER )) {
			var nodes = [{
				id:id,
				text:id + '_' + EParticleType.EMITTER,
				type:EParticleType.EMITTER
			}];
			getDom().tree('append', {
				parent:parentNode.target,
				data:nodes
			});
			
			addParticle( getDom().tree('find', id), Main.getId() );
		}
	}
	override public function addParticle( parentNode:Dynamic, id:String ):Void {
		if (parentNode && ( parentNode.domId == '_easyui_tree_1' || parentNode.type == EParticleType.EMITTER )) {
			var nodes = [{
				id:id,
				text:id + '_' + EParticleType.PARTICLE,
				type:EParticleType.PARTICLE
			}];
			getDom().tree('append', {
				parent:parentNode.target,
				data:nodes
			});
		}
	}
	
	override public function removeParticle( node:Dynamic ):Void {
		if (node && node.domId != '_easyui_tree_1' ) {
			getDom().tree('remove', node.target );
		}
	}
}