package ;

import component.Tree;
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
	var tree:ITree;
	
	public function new() {
		Browser.window.setField( 'haxeStart', start );
	}
	
	function start() {
		
		canvas_container = j( '#canvas_container' );
		webgl = j( '#webgl' );
		tree_particle = j( '#tree_particle' );
		
		tree = new Tree( tree_particle );
		
		addListener();
		onResize( null );
	}
	
	function addListener() {
		j('body').mousemove( onMousemove );
		j( Browser.window ).resize( onResize );
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
	
	
	static function main() 
	{
		new Main();
	}
	
}