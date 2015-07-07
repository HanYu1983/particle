package component;

/**
 * ...
 * @author vic
 */
class Tree implements ITree
{
	public var dom:Dynamic;
	
	var j:Dynamic = untyped __js__('$');
	
	public function new( dom ) 
	{
		this.dom = dom;
	}
	
	public function init():Void {
		dom.treeview({
			animated: "fast"
		});
	}
	
	public function addEmitter( ?parentName:String, name:String ):Void 
	{
		var parentDom = findParent( parentName );
		
		var dom = j( '<li id="' + name + '"><span class="folder">' + name + '_emitter</span><ul id="' + name + '_container"></ul></li>' );
		parentDom.prepend( dom );
		
		addToTree( dom );
		addParticle( name, name );
	}
	
	public function addParticle( ?parentName:String, name:String ):Void 
	{
		var parentDom = findParent( parentName );
		
		var dom = j( '<li id="' + name + '"><span class="file">' + name + '_particle</span></li>' );
		parentDom.prepend( dom );
		
		addToTree( dom );
	}
	
	public function removeParticle( name:String ):Void 
	{
		var removeDom = this.dom.find( '#' + name );
		removeDom.remove();
	}
	
	function findParent( ?parentName ) {
		return switch( parentName ) {
			case null:
				this.dom;
			case _:
				this.dom.find( '#' + parentName + '_container' );
		}
	}
	
	function addToTree( dom ) {
		this.dom.treeview( {
			add:dom
		});
	}
}