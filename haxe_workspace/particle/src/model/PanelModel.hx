package model;
import haxe.Json;

/**
 * ...
 * @author vic
 */
class PanelModel extends Model
{
	public static var ON_ADD_PARTICLE = 'ON_ADD_PARTICLE';
	public static var ON_REMOVE_PARTICLE = 'ON_REMOVE_PARTICLE';
	public static var ON_PROPS_CAHNGE = 'ON_PROPS_CAHNGE';
	
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
		
		//setParticleIsEmit( parentId );
		
		notify( ON_ADD_PARTICLE, { id:id, parentId:parentId, particle:particle } );
	}
	
	public function removeParticle(id:Int, ?extra:Dynamic):Void 
	{
		if ( !findParticleById( id )) return;
		_ary_partiles.remove( findParticleById( id ));
		notify( ON_REMOVE_PARTICLE, { id:id } );
	}
	/*
	public function setParticleIsEmit( id:Int ) {
		var parentParticle = findParticleById( id );
		if ( parentParticle != null && parentParticle.particle.emit == null ) {
			parentParticle.particle.emit = Main.createNewEmit();
		}
	}
	*/
	public function setParticleProps( id:Int, type:String, value:Dynamic ) {
		if ( !findParticleById( id )) return;
		switch( type ) {
			case 'size_x':
				findParticleById( id ).particle.size[0] = value;
			case 'size_y':
				findParticleById( id ).particle.size[1] = value;
			case 'pos_x':
				findParticleById( id ).particle.pos[0] = value;
			case 'pos_y':
				findParticleById( id ).particle.pos[1] = value;
			case 'pos_r':
				findParticleById( id ).particle.pos[2] = value;
			case 'vel_x':
				findParticleById( id ).particle.vel[0] = value;
			case 'vel_y':
				findParticleById( id ).particle.vel[1] = value;
			case 'vel_r':
				findParticleById( id ).particle.vel[2] = value;
			case 'count','duration','angle','range','force':
				Reflect.setField( findParticleById( id ).particle.emit, type, value );
			case _:
				Reflect.setField( findParticleById( id ).particle, type, value );
		}
		
		notify( ON_PROPS_CAHNGE );
	}
	
	public function findParticleById( id:Int ):Dynamic {
		return Lambda.find( _ary_partiles, function( p:Dynamic ) {
			if ( p.id == id ) return true;
			return false;
		});
	}
	
	public function getOutputData( node:Dynamic ) {
		var retobj:Dynamic = { };
		function _loopNode( node:Dynamic, outputData:Dynamic ) {
			
			
			var id = node.id;
			var particle = findParticleById( id ).particle;
			outputData.id = particle.id;
			outputData.lifetime = particle.lifetime;
			outputData.vel = particle.vel;
			outputData.pos = particle.pos;
			outputData.mass = particle.mass;
			outputData.color = particle.color;
			outputData.size = particle.size;
			
			if ( node.children && node.children.length > 0 ) {
				outputData.emit = { 'prototype':[] }
				outputData.emit.count = particle.emit.count;
				outputData.emit.duration = particle.emit.duration;
				outputData.emit.angle = particle.emit.angle;
				outputData.emit.range = particle.emit.range;
				outputData.emit.force = particle.emit.force;
				
				for ( i in 0...node.children.length ) {
					var obj = { };
					outputData.emit.prototype.push( obj );
					_loopNode( node.children[i], obj );
				}
			}
		}
		_loopNode( node, retobj );
		
		return retobj;
	}
	override function init() 
	{
		super.init();
		
		function foreachObj( obj:Dynamic, ?pid:Int ) {
			addParticle( obj.id, pid == null ? 999 : pid, obj );
			if ( obj.emit != null && obj.emit.prototype != null  ) {
				Lambda.foreach( obj.emit.prototype, function( _obj:Dynamic ) {
					foreachObj( _obj, obj.id );
					return true;
				});
			}
		}
		
		foreachObj( config );
	}
	
	
	
	function set_currentParticle( particle:Dynamic ):Dynamic 
	{
		return currentParticle = particle;
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