package ;

import component.EParticleType;
import component.OnView;
import component.ParamsPanel;
import component.Tree;
import inter.AbstractTree;
import inter.IDom;
import inter.ITree;
import js.Browser;
import js.JQuery;
import js.Lib;
using Reflect;
/**
 * ...
 * @author vic
 */

class Main 
{
	var j:Dynamic = untyped __js__('$');
	var canvas_container:Dynamic;
	var tree_particle:Dynamic;
	var webgl:Dynamic;
	var paramsPanel:Dynamic;
	var tree:AbstractTree;
	var onView = component.OnView.inst;
	var panel:ParamsPanel;
	
	public function new() {
		Browser.window.setField( 'haxeStart', start );
		Browser.window.setField( 'onHtmlClick', onHtmlClick );
	}
	
	function start() {
		canvas_container = j( '#canvas_container' );
		webgl = j( '#webgl' );
		tree_particle = j( '#tree_particle' );
		paramsPanel = j( '#paramsPanel' );
		
		tree = new Tree( tree_particle );
		panel = new ParamsPanel( paramsPanel );
		
		addListener();
		onResize( null );
		
		tree.parserLoadData( loadSaveData() );
		onView.setObject( loadSaveData() );
		
		trace( tree.outputData() );
	}
	
	function onHtmlClick( target ) {
		
		function checkNodeAndThen( fn ) {
			var selectNode = tree.getSelectedNode();
			if ( selectNode == null ) {
				Browser.alert( '請選擇發射器' );
				return;
			}else if( selectNode.type == EParticleType.PARTICLE ) {
				Browser.alert( '只能增加粒子在發射器下' );
				return;
			}
			fn( selectNode );
		}
		
		switch( target.id ) {
			case 'btn_addParticle':
				checkNodeAndThen( function( node ) {
					tree.addParticle( node, createNewParticleObj( getId() ), 'test_particle' );
				});
			case 'btn_remove':
				var selectNode = tree.getSelectedNode();
				tree.removeParticle( selectNode );
		}
	}
	
	function createEmitterAttribute( obj:Dynamic ) {
		if ( obj.emit != null ) return;
		obj.emit = { prototype:[] };
		obj.emit.count = 1;
		obj.emit.duration = .5;
		obj.emit.angle = 0;
		obj.emit.range = 0;
		obj.emit.force = 0;
	}
	
	function createNewParticleObj( id ) {
		return {id:id, 
				lifetime:3,
				mass:3,
				color:'#33ddff',
				size:[10, 10],
				pos:[0, 0, 0], vel:[0, 0, 0] };
	}
	
	function addListener() {
		webgl.mousemove( onMousemove );
		j( Browser.window ).resize( onResize );
		
		function resetPanel( node:Dynamic ) {
			var particleData = node.particleData;
			if ( particleData == null ) return;
			if ( node.children != null && node.children.length > 0 ) {
				createEmitterAttribute( particleData );
				panel.setData( particleData, EParticleType.EMITTER );
			}else {
				panel.setData( particleData, EParticleType.PARTICLE );
			}
		}
		
		tree.on( Tree.ON_TREE_NODE_CLICK, function( e, params:Dynamic ) {
			resetPanel( params.node );
		});
		tree.on( Tree.ADD_NODE, function( e, params:Dynamic ) {
			resetPanel( params.parentNode );
		});
		tree.on( Tree.ON_TREE_DROP_NODE, function( e, params:Dynamic ) {
			var targetNode = params.targetNode;
			createEmitterAttribute( targetNode.particleData );
		});
		panel.on( ParamsPanel.ON_PARAMS_CHANGE, function( e, params:Dynamic ) {
			onView.setObject( tree.outputData() );
		});
	}
	
	function loadSaveData():Dynamic {
		return untyped __js__( 'testLoadData' );
	}
	
	function onResize( e ) {
		webgl.attr( 'width', canvas_container.width() );
		webgl.attr( 'height', canvas_container.height() );
	}
	
	function onMousemove(e) {
		var px = e.offsetX;
		var py = e.offsetY;
		onView.moveRoot( px, py );
		onView.setObject( tree.outputData() );
	}
	
	public static function getId() {
		return Math.floor( Math.random() * 10000 ) + '';
	}
	
	static function main() 
	{
		new Main();
	}
	
}