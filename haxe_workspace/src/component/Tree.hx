package component;

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
	
	override public function parserLoadData( loadData:Dynamic ):Void {
		function _findParticle( fields:Dynamic, parentNode:Dynamic ) {
			if ( fields.hasField( 'emit' ) ) {
				var ary:Array<Dynamic> = fields.emit.prototype;
				var target:Dynamic = null;
				
				//如果解析到的是root的話，parentNode就直接取root
				//否則就是用目前創建的物件當root
				//如果解析到root，就不創建root的發射器，因為場景上已經有了
				if ( fields.id != 'root' ) {
					addEmitter( parentNode, fields.id );
					parentNode = findNode( fields.id );
				}else {
					parentNode = getRootNode();	
				}
				
				//尋找發射器下所有的粒子
				for ( i in 0...ary.length ) {
					_findParticle( ary[i], parentNode );
				}
			}else {
				addParticle( parentNode, fields.id );
			}
		}
		
		_findParticle( loadData, getRootNode() );
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