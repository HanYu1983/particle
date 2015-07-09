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
}