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
					tree.addParticle( node, createNewParticleObj( getId() ), EParticleType.PARTICLE, 'test_particle' );
				});
			case 'btn_addEmitter':
				checkNodeAndThen( function( node ) {
					tree.addParticle( node, createNewParticleObj( getId() ), EParticleType.EMITTER, 'test_emitter' );
				});
			case 'btn_remove':
				var selectNode = tree.getSelectedNode();
				tree.removeParticle( selectNode );
		}
	}
	
	function createNewParticleObj( id ) {
		return {id:id, 
				lifetime:10,
				mass:3,
				color:'#33ddff',
				size:[10, 20],
				pos:[0, 0, 0], vel:[0, 0, 0] };
	}
	
	function addListener() {
		webgl.mousemove( onMousemove );
		j( Browser.window ).resize( onResize );
		tree.on( Tree.ON_TREE_NODE_CLICK, function( e, params:Dynamic ) {
			var particleData = params.node.particleData;
			if ( particleData == null ) return;
			trace( particleData );
			panel.setData( particleData );
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
		
		onView.moveParticle( px, py );
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