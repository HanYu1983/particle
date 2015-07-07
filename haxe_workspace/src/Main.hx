package ;

import component.IParams;
import component.ITree;
import component.Params;
import component.Tree;
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
	var container_params:Dynamic;
	var tree_particle:Dynamic;
	var tree:ITree;
	
	public function new() {
		Browser.window.setField( 'haxeStart', start );
	}
	
	function start() {
		container_params = j( '#params' );
		tree_particle = j( '#tree_particle' );
		
		var panel:Dynamic = j( '.panel' );
		panel.accordion( {
			heightStyle: "content"
		});
		
		tree = new Tree( j( '#tree_particle' ) );
		tree.init();
		tree.addEmitter( null, 'root' );
		/*
		var colorpickerfull:Dynamic = j( '#colorpicker-full' );
		colorpickerfull.colorpicker({
			parts:          'full',
			alpha:          true,
			showOn:         'both',
			buttonColorize: true,
			showNoneButton: true
		});
		*/
		
		createParams( new Params( 'px', 'c' ) );
		createParams( new Params( 'py', 'c' ) );
		
		initContextMenu();
		addListener();
	}
	
	function addListener() {
		j('body').mousemove( onMousemove );
	}
	
	function onMousemove(e) {
		var px = e.clientX;
		var py = e.clientY;
		OnView.inst.moveParticle( 'root', px, py );
	}
	
	function deleteParams( params:IParams ) {
		params.dom.remove();
	}
	
	function createParams( params:IParams ) {
		params.dom.appendTo( container_params );
		params.event.on( 'onParamsActEvent', onParamsActEvent );
	}
	
	function onParamsActEvent( e, params ) {
		var target:IParams = params.target;
		switch( params.id ) {
			case 'btn_add':
				var extra = target.extra;
				extra.isParams = true;
				var copy = new Params( target.type, target.easingType, extra );
				createParams( copy );
			case 'btn_copy':
				createParams( target.copy() );
			case 'btn_delete':
				deleteParams( target );
		}
	}
	
	function initContextMenu() {
	
		var copyDom:Dynamic = null;
		
		j.contextMenu( 'destroy', 'li' );
		j.contextMenu({
			selector: 'li', 
			callback: function(key, options:Dynamic) {
				var target = options.field( "$trigger" );
				var id:String = target.attr( 'id' );
				var isEmitter = target.attr( 'e_type' ) == 'emitter';
				var isRoot = ( id == 'root' );
				trace( id );
				trace( isEmitter );
				switch( key ) {
					case 'cut':
						copyDom = tree.cut( id );
						trace( copyDom );
					case 'copy':
						copyDom = tree.copy( id );
						trace( copyDom );
					case 'paste':
						if ( copyDom == null ) {
							Browser.alert( '沒有復制粒子' );
							return;
						}
						tree.paste( id, copyDom );
						copyDom = null;
					case 'delete':
						if ( isRoot ) {
							Browser.alert( '無法刪除元發射器' );
							return;
						}
						tree.removeParticle( id );
					case 'addParticle':
						if ( !isEmitter ) {
							Browser.alert( '粒子無法增加粒子' );
							return;
						}
						tree.addParticle( id, Math.ceil( Math.random()* 10000 )  + '' );
					case 'addEmitter':
						if ( !isEmitter ) {
							Browser.alert( '粒子無法增加粒子' );
							return;
						}
						tree.addEmitter( id, Math.ceil( Math.random()* 10000 ) + '' );
					default:
				}
			},
			items: {
				addParticle: { name: "Add Particle", icon: "add" },
				addEmitter: { name: "Add Emitter", icon: "add" },
				delete: { name: "Delete Particle", icon: "delete" },
				copy: { name: "Copy", icon: "copy" },
				paste: { name: "Paste", icon: "paste" },
				cut: { name: "Cut", icon: "cut" }
			}	
		});
	}
	
	static function main() 
	{
		new Main();
	}
	
}