package model;

/**
 * ...
 * @author vic
 */
class PanelModel extends Model
{
	public static var ON_ADD_PARTICLE = 'ON_ADD_PARTICLE';
	public static var ON_REMOVE_PARTICLE = 'ON_REMOVE_PARTICLE';
	
	public var currentParticle(default, set):Dynamic;
	
	var _ary_partiles:Array<Dynamic> = new Array<Dynamic>();

	public function new() 
	{
		super();
		
	}
	
	public function addParticle(id:Int, parentId:Int, particle:Dynamic, ?extra:Dynamic):Void 
	{
		if ( findParticleById( id )) return;
		_ary_partiles.push( { id:id, particle:particle } );
		//addToChild( findParticleById( parentId ), id );
		notify( ON_ADD_PARTICLE, { id:id, parentId:parentId, particle:particle } );
		
		log();
	}
	
	public function removeParticle(id:Int, ?extra:Dynamic):Void 
	{
		if ( !findParticleById( id )) return;
		removeParticle( id );
		//removeChildById( id );
	//	removeChildFromParentById( id );
		notify( ON_REMOVE_PARTICLE, { id:id } );
		
		log();
	}
	
	public function getOutputData( treeRoots:Dynamic ) {
		trace( treeRoots );
		var output = { };
		
		function parse( ary:Array<Dynamic> ) {
			Lambda.foreach( ary, function( obj ) {
				trace( obj.id );
				if ( obj.id != null ) {
					
				}
				if ( obj.children != null ) {
					parse( obj.children );
				}
				return true;
			});
		}
		
		parse( treeRoots );
		
		return { };
	}
	/*
	public function moveParticle(id:Int, toId:Int, ?extra:Dynamic):Void 
	{
		//trace( id, toId );
		var moveParticle = findParticleById( id );
		var toParticle = findParticleById( toId );
		
		//trace( moveParticle );
		//trace( toParticle.id );
		//removeChildFromParentById( moveParticle.id );
		//addToChild( toParticle, moveParticle.id );
		log();
	}
	*/
	override function init() 
	{
		super.init();
		
		function foreachObj( obj:Dynamic, ?pid:Int ) {
			addParticle( obj.id, pid == null ? 999 : pid, obj );
			if ( obj.emit != null ) {
				Lambda.foreach( obj.emit.prototype, function( _obj:Dynamic ) {
					foreachObj( _obj, obj.id );
					return true;
				});
			}
		}
		
		foreachObj( config );
		
		log();
	}
	/*
	function addToChild( parent:Dynamic, id:Int ) {
		if ( parent == null ) return;
		if ( parent.child == null ) {
			parent.child = [];
		}
		parent.child.push( id );
	}
	
	function removeChildById( id ) {
		
		var p = findParticleById( id );
		if ( p != null ) {
			if ( p.child != null ) {
				Lambda.foreach( p.child, function( _id ) {
					removeChildById( _id );
					return true;
				});
			}
			_ary_partiles.remove( p );
		}
	}
	
	function removeChildFromParentById( id ) {
		Lambda.foreach( _ary_partiles, function( p:Dynamic ) {
			if ( p.child != null ) {
				if ( Lambda.indexOf( p.child, id ) != -1 ) {
					p.child.splice( Lambda.indexOf( p.child, id ), 1 );
				}
			}
			return true;
		});
	}
	*/
	function findParticleById( id:Int ):Dynamic {
		return Lambda.find( _ary_partiles, function( p:Dynamic ) {
			if ( p.id == id ) return true;
			return false;
		});
	}
	
	function set_currentParticle( particle:Dynamic ):Dynamic 
	{
		return currentParticle = particle;
	}
	
	function log() {
		trace( _ary_partiles );
		
		
	}
}

/*
{ 	id:'root', 
	lifetime:5,
	mass:3,
	color:'#33ddff',
	size:[10, 10],
	pos:[0, 0, 0], vel:[0, 0, 0],
	emit: { count:1,
			duration:.5,
			angle:0,
			range:0,
			force:0,
			prototype:[ { 	id:'root_particle', 
							lifetime:3,
							mass:3,
							color:'#33ddff',
							size:[10, 10],
							pos:[0, 0, 0], vel:[0, 0, 0] } ] }}
													*/