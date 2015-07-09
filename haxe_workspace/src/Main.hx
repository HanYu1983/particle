package ;

import component.IParams;
import component.ITree;
import component.Params;
import component.ParamsPanel;
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
	
	public function new() {
		Browser.window.setField( 'haxeStart', start );
	}
	
	function start() {
		
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
	
	
	static function main() 
	{
		new Main();
	}
	
}