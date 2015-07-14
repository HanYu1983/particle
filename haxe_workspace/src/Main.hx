package ;

import component.EParticleType;
import component.OnView;
import component.Particle;
import component.ParticleManager;
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
	var tree:AbstractTree;
	var onView = component.OnView.inst;
	var particleManager = ParticleManager.inst;
	
	public function new() {
		Browser.window.setField( 'haxeStart', start );
		Browser.window.setField( 'onHtmlClick', onHtmlClick );
	}
	
	function start() {
		canvas_container = j( '#canvas_container' );
		webgl = j( '#webgl' );
		tree_particle = j( '#tree_particle' );
		
		tree = new Tree( tree_particle );
		
		addListener();
		onResize( null );
		
		tree.parserLoadData( loadSaveData() );
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
					tree.addParticle( node, { id:getId() }, EParticleType.PARTICLE, 'test_particle' );
				});
			case 'btn_addEmitter':
				checkNodeAndThen( function( node ) {
					tree.addParticle( node, { id:getId() }, EParticleType.EMITTER, 'test_emitter' );
				});
			case 'btn_remove':
				var selectNode = tree.getSelectedNode();
				tree.removeParticle( selectNode );
		}
	}
	
	function addListener() {
		j('body').mousemove( onMousemove );
		j( Browser.window ).resize( onResize );
		tree.on( Tree.ON_TREE_NODE_CLICK, function( e, params:Dynamic ) {
			var pid = params.node.id;
			var particle = particleManager.getParticleById( pid );
			if ( particle == null ) return;
			trace( particle.getData() );
		});
		tree.on( Tree.ADD_NODE, function( e, params:Dynamic ) {
			var particleData = params.particleData;
			var parentNode = params.parentNode;
			var parentParticle = particleManager.getParticleById( parentNode.id );
			particleManager.addParticle( new Particle( parentParticle, particleData ));
		});
		tree.on( Tree.REMOVE_NODE, function( e, params:Dynamic ) {
			var pid = params.node.id;
			var particle = particleManager.getParticleById( pid );
			/*
			particle.throughAllChildren( function( particleData ) {
				particleManager.removeParticle( particleData.id );
			});
			*/
			particleManager.removeParticleAndChildren( particle );
			trace( particleManager.getParticles() );
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
		var px = e.clientX;
		var py = e.clientY;
		//OnView.inst.moveParticle( 'root', px, py );
	}
	
	public static function getId() {
		return Math.floor( Math.random() * 10000 ) + '';
	}
	
	static function main() 
	{
		new Main();
	}
	
}