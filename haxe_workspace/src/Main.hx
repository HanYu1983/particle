package ;

import component.IParams;
import component.Params;
import js.JQuery;
import js.Lib;
using Reflect;
/**
 * ...
 * @author vic
 */

class Main 
{
	var j = untyped __js__('$');
	var container_params:Dynamic;
	
	public function new() {
		container_params = j( '#params' );
		
		var panel:Dynamic = j( '.panel' );
		panel.accordion( {
			heightStyle: "content"
		});
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
		var slider:Dynamic = j( '.slider' );
		slider.slider();
		
		createParams( new Params( 'px', 'c' ) );
		createParams( new Params( 'py', 'c' ) );
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
	
	static function main() 
	{
		new Main();
	}
	
}