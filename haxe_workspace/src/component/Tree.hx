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
		
		var dom = j( '<li id="' + name + '" e_type="emitter"><span class="folder">' + name + '_emitter</span><ul id="' + name + '_container"></ul></li>' );
		parentDom.prepend( dom );
		
		addToTree( dom );
		addParticle( name, name );
		
		OnView.inst.setObject();
		//OnView.inst.setParticle( name, 0, 0, 0, 0, [1, 0, 0, 1], 1, [10, 10] ) ;
	}
	
	public function addParticle( ?parentName:String, name:String ):Void 
	{
		var parentDom = findParent( parentName );
		
		var dom = j( '<li id="' + name + '_particle" e_type="particle"><span class="file">' + name + '_particle</span></li>' );
		parentDom.prepend( dom );
		
		addToTree( dom );
	}
	
	public function removeParticle( name:String ):Void 
	{
		var removeDom = this.dom.find( '#' + name );
		removeDom.remove();
	}
	
	public function copy( name:String ):Dynamic {
		var copyDom:Dynamic = this.dom.find( '#' + name ).clone();
		copyDom.attr( 'id', copyDom.attr( 'id' ) + '_copy' );
		return copyDom;
	}
	
	public function paste( ?parentName:String, pasteDom:Dynamic ):Void {
		var parentDom = findParent( parentName );
		parentDom.prepend( pasteDom );
		addToTree( pasteDom );
	}
	
	public function cut( name:String ):Dynamic {
		var cutDom = this.dom.find( '#' + name );
		return cutDom;
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