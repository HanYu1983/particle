package test;

import haxe.Timer;
import haxe.unit.TestCase;
import view.component.TreeView;

/**
 * ...
 * @author vic
 */
class TestTree extends TestCase
{
	var tree = new TreeView();
	var j:Dynamic = untyped __js__('$');

	public function new() 
	{
		super();
		
		tree.config = {
			tree:j('#tree_particle' )
		}
	}
	
	function testAddTree() {
		var items = tree.getItems();
		assertEquals( items.length, 0 );
		
		tree.addToWithLabel( '553', 'root' );
		
		items = tree.getItems();
		assertEquals( items.length, 1 );
		
		tree.addToWithLabel( '123', 'vic', tree.getItemById( '553' ).element );
		tree.addToWithLabel( '234', 'han', tree.getItemById( '123' ).element );
		tree.addToWithLabel( '3455', 'za' );
		
		items = tree.getItems();
		assertEquals( items.length, 4 );
		
		tree.remove( tree.getItemById( '234' ).element );
		tree.remove( tree.getItemById( '553' ).element );
		assertEquals( items.length, 1 );
		
		tree.addToWithLabel( '1234', 'za11' );
		tree.addToWithLabel( '2456', 'za22' );
		tree.addToWithLabel( '577', 'za24' );
		
		items = tree.getItems();
		assertEquals( items.length, 4 );
	}
}