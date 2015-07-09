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
		
		getDom().tree({
			onDrop:function( target,source,point ){
				trace( target );
				trace( source );
				trace( point );
			}
		});
	}
	
	public function addEmitter( parentDom:Dynamic, id:String ):Void {
		var node:Dynamic = getDom().tree('getSelected');
		trace( node );
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
		}
		
		
		/*
		var edom = j( '<li id="' + id + '"><span>' + id + '</span><ul id="' + id + '_container"></ul></li>' );
		edom.appendTo( parentDom.find( '#' + id + '_container' ));
		addParticle( edom, id + '_particle' );
		*/
	}
	public function addParticle( parentDom:Dynamic, id:String ):Void {
		var node:Dynamic = getDom().tree('getSelected');
		trace( node );
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
		/*
		var pdom = j( '<li id="' + id + '">' + id + '</li>' );
		pdom.appendTo( parentDom.find( '#' + id + '_container' ));
		*/
	}
	
	public function removeEmitter( id:String ):Void {
		
	}
	public function removeParticle( id:String ):Void {
		
	}
}