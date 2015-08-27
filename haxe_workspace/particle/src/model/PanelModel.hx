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
		notify( ON_ADD_PARTICLE, { id:id, parentId:parentId, particle:particle } );
		
		log();
	}
	
	public function removeParticle(id:Int, ?extra:Dynamic):Void 
	{
		if ( !findParticleById( id )) return;
		_ary_partiles.remove( findParticleById( id ));
		notify( ON_REMOVE_PARTICLE, { id:id } );
		
		log();
	}
	
	public function getOutputData( node:Dynamic ) {
		var retobj:Dynamic = { };
		function _loopNode( node:Dynamic, outputData:Dynamic ) {
			var id = node.id;
			var particleData = findParticleById( id );
			outputData.id = particleData.id;
			/*
			var particleData = findParticleById( id );
			outputData.id = particleData.id;
			
			outputData.lifetime = particleData.lifetime;
			outputData.vel = particleData.vel;
			outputData.pos = particleData.pos;
			outputData.mass = particleData.mass;
			outputData.color = particleData.color;
			outputData.size = particleData.size;
			*/
			if ( node.children && node.children.length > 0 ) {
				outputData.emit = { 'prototype':[] }
				/*
				outputData.emit.count = particleData.emit.count;
				outputData.emit.duration = particleData.emit.duration;
				outputData.emit.angle = particleData.emit.angle;
				outputData.emit.range = particleData.emit.range;
				outputData.emit.force = particleData.emit.force;
				*/
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
		//trace( _ary_partiles );
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