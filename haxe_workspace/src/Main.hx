package ;

import component.IParams;
import component.Params;
import component.Tree;
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
	
	public function new() {
		container_params = j( '#params' );
		tree_particle = j( '#tree_particle' );
		
		var panel:Dynamic = j( '.panel' );
		panel.accordion( {
			heightStyle: "content"
		});
		
		tree_particle.treeview({
			animated: "fast"
		});
		
		new Tree( j( '#tree_particle' ) );
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
	
	function initContextMenu(){
		
		j.contextMenu( 'destroy', 'li' );
		j.contextMenu({
			selector: 'li', 
			callback: function(key, options:Dynamic) {
				var target = options.field( "$trigger" );
				var id = target.attr( 'id' );
				var isEmitter = target.hasClass( 'emitter' );
				trace( target );
				trace( id );
				switch( key ){
					case 'copy':
					case 'paste':
					case 'delete':
					case 'addParticle':
					case 'addEmitter':
					default:
				}
			},
			items: {
				addParticle: { name: "Add Particle", icon: "add" }
			}	
		});
		
		j('.context-menu-one').on('click', function(e){
			
		});
	}
	
	static function main() 
	{
		new Main();
	}
	
}