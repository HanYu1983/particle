package;

import component.ITree;
import component.Tree;
import haxe.unit.TestCase;
import haxe.unit.TestRunner;

/**
 * ...
 * @author vic
 */
class TestTree
{
	var j:Dynamic = untyped __js__('$');
	var tree:ITree;
	
	public static function main() {
		new TestTree();
	}

	public function new() 
	{
		
		tree = new Tree( j( '#tree_particle' ) );
		tree.init();
		tree.addEmitter( null, 'root' );
		tree.addEmitter( 'root', 'AAA' );
		tree.addEmitter( 'root', 'BBB' );
		tree.removeParticle( 'BBB' );
		tree.removeParticle( 'AAA' );
	}
	
}