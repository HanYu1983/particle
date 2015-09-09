package model;
import haxe.Json;
using Lambda;
using Reflect;
/**
 * ...
 * @author vic
 */
class PanelModel extends Model
{
	public static var ON_ADD_PARTICLE = 'ON_ADD_PARTICLE';
	public static var ON_REMOVE_PARTICLE = 'ON_REMOVE_PARTICLE';
	public static var ON_PROPS_CAHNGE = 'ON_PROPS_CAHNGE';
	public static var ON_NAME_CHANGE = 'ON_NAME_CHANGE';
	public static var ON_INIT = 'ON_INIT';
	public static var ON_ADD_FORMULA = 'ON_ADD_FORMULA';
	public static var ON_REMOVE_FORMULA = 'ON_REMOVE_FORMULA';
	public static var ON_FORMULA_CHANGE = 'ON_FORMULA_CHANGE';
	public static var ON_FORMULA_POS_CHANGE = 'ON_FORMULA_POS_CHANGE';
	public static var ON_TEXTURE_CHANGE = 'ON_TEXTURE_CHANGE';
	public static var ON_BLEND_CHANGE = 'ON_BLEND_CHANGE';
	public static var ON_COLOR_CHANGE = 'ON_COLOR_CHANGE';
	public static var ON_CURRENT_PARTICLE_CHANGE = 'ON_CURRENT_PARTICLE_CHANGE';
	
	public var currentParticle(default, set):Dynamic;
	
	var _ary_particles = new Array<Dynamic>();
	var _ary_renderList = new Array<Dynamic>();

	public function new() 
	{
		super();
		
	}
	
	public function addParticle(id:String, parentId:String, particle:Dynamic, ?extra:Dynamic):Void 
	{
		if ( findParticleById( id )) return;
		_ary_particles.push( { id:id, particle:particle } );
		
		notify( ON_ADD_PARTICLE, { id:id, parentId:parentId, particle:particle } );
	}
	
	public function removeParticle(id:String, ?extra:Dynamic):Void 
	{
		if ( !findParticleById( id )) return;
		_ary_particles.remove( findParticleById( id ));
		notify( ON_REMOVE_PARTICLE, { id:id } );
	}
	
	public function setParticleTextureId( id:String, tid:String ) {
		if ( !findParticleById( id )) return;
		findParticleById( id ).particle.tex = tid;
		notify( ON_TEXTURE_CHANGE, { textureId:tid } );
	}
	
	public function clearAll() {
		while ( _ary_particles.length > 0 ) {
			removeParticle( _ary_particles[ _ary_particles.length - 1 ].id );
		}
		_ary_particles = new Array<Dynamic>();
		_ary_renderList = new Array<Dynamic>();
	}
	
	public function getRenderList() {
		return _ary_renderList;
	}
	
	public function setParticleBlendMode( id:String, blending:String ) {	
		if ( !findParticleById( id )) return;
		findParticleById( id ).particle.blending = blending;
		notify( ON_BLEND_CHANGE, { blending:blending } );
	}
	
	public function setParticleColor( id:String, color:Dynamic ) {
		if ( !findParticleById( id )) return;
		findParticleById( id ).particle.color[0] = color.r / 255;
		findParticleById( id ).particle.color[1] = color.g / 255;
		findParticleById( id ).particle.color[2] = color.b / 255;
		notify( ON_COLOR_CHANGE );
	}
	
	public function addFormula( particleId:String, formula:Array<Dynamic> ) {
		
		if ( !findParticleById( particleId )) return;
		var particle = findParticleById( particleId ).particle;
		if ( particle.formulaList == null ){
			particle.formulaList = new Array<Array<Dynamic>>();
		}
		particle.formulaList.push( formula );
		notify( ON_ADD_FORMULA, { formula:formula } );
	}
	
	public function moveFormula( particleId:String, formulaId:String, updown:Int ) {
		
		if ( !findParticleById( particleId )) return;
		var particle = findParticleById( particleId ).particle;
		var formula = getFormulaById( particleId, formulaId );
		var indexof = particle.formulaList.indexOf( formula );
		switch( updown ) {
			case 1:
				if ( indexof == particle.formulaList.length - 1 ) return;
				particle.formulaList.splice( indexof, 1 );
				untyped __js__( 'Array.prototype.splice.call' )( particle.formulaList, indexof + 1, 0, formula );
				notify( ON_FORMULA_POS_CHANGE, { formulaList: particle.formulaList, id: indexof + 1 } );
			case -1:
				if ( indexof == 0 ) return;
				particle.formulaList.splice( indexof, 1 );
				untyped __js__( 'Array.prototype.splice.call' )( particle.formulaList, indexof - 1, 0, formula );
				notify( ON_FORMULA_POS_CHANGE, { formulaList: particle.formulaList, id: indexof - 1 } );
		}
		
	}
	
	public function removeFormula( particleId:String, formulaId:String ) {
		if ( !findParticleById( particleId )) return;
		var particle = findParticleById( particleId ).particle;
		var formula = getFormulaById( particleId, formulaId );
		switch( formula ) {
			case null:
			case f:
				particle.formulaList.splice( Lambda.indexOf( particle.formulaList, f ), 1 );
				notify( ON_REMOVE_FORMULA, { formulaId:f[7] } );
		}
	}
	
	public function getFormulaById( particleId:String, formulaId:String ):Array<Dynamic> {
		if ( !findParticleById( particleId )) return null;
		var particle = findParticleById( particleId ).particle;
		if ( particle.formulaList == null ) return null;
		return Lambda.find( particle.formulaList, function( formula:Array<Dynamic> ) {
			if ( formula[7] == formulaId ) return true;
			return false;
		});
	}
	
	public function setFormulaById( particleId:String, formulaId:String, values:Array<Float> ) {
		if ( !findParticleById( particleId )) return;
		var particle = findParticleById( particleId ).particle;
		var formula = getFormulaById( particleId, formulaId );
		switch( formula ) {
			case null:
			case f:
				f[0] = values[0];
				f[1] = values[1];
				f[2] = values[2];
				f[3] = values[3];
				f[4] = values[4];
				f[5] = values[5];
				f[6] = values[6];
				notify( ON_FORMULA_CHANGE, { formulaId:formulaId, values:f } );
		}
	}
	
	public function setParticleName( id:String, name:String ) {
		if ( !findParticleById( id )) return;
		findParticleById( id ).particle.name = name;
		
		notify( ON_NAME_CHANGE, {id:id, name:name } );
	}
	
	public function setParticleRootsPos( x, y ) {
		if ( _ary_renderList.length > 0 ) {
			_ary_renderList.foreach( function( render ) {
				findParticleById( render.id ).particle.pos[0] = x;
				findParticleById( render.id ).particle.pos[1] = y;
				return true;
			});
			notify( ON_PROPS_CAHNGE );
		}
	}
	
	public function setParticleProps( id:String, type:String, value:Dynamic ) {
		if ( !findParticleById( id )) return;
		switch( type ) {
			case 'alpha':
				findParticleById( id ).particle.color[3] = value;
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
	
	public function findParticleById( id:String ):Dynamic {
		return Lambda.find( _ary_particles, function( p:Dynamic ) {
			if ( p.id == id ) return true;
			return false;
		});
	}
	
	public function getOutputData( node:Dynamic ) {
		var retobj:Dynamic = { };
		
		var childMap:Dynamic = { };
		
		Lambda.foreach( node, function( item ) {
			if ( item.parentId != null ) {
				if ( !childMap.hasField( item.parentId ) ) {
					childMap.setField( item.parentId, [] );
				}
				childMap.field( item.parentId ).push( item.id );
			}else {
				childMap.setField( item.id, [] );
			}
			return true;
		});
		
		
		var treeMap:Dynamic = { };
		
		function getAndSet( id ) {
			return switch( treeMap.field( id )) {
				case null: 
					treeMap.setField( id, {id:id } );
					treeMap.field( id );
				case _obj:_obj;
			}
		}
		
		for ( f in childMap.fields() ) {
			var obj = getAndSet( f );
			var ary:Array<String> = childMap.field( f );
			if ( ary.length == 0 ) continue;
			if ( obj.children == null ) obj.children = [];
			ary.foreach( function( str ) {
				var subobj:Dynamic = getAndSet( str );
				subobj.parentId = obj.id;
				obj.children.push( subobj );
				return true;
			});
		}
		
		var retobj:Dynamic = { };
		function _loopNode( node:Dynamic, outputData:Dynamic ) {
			
			var id = node.id;
			var particle = findParticleById( id ).particle;
			outputData.id = particle.id;
			outputData.name = particle.name;
			outputData.lifetime = particle.lifetime;
			outputData.vel = particle.vel;
			outputData.pos = particle.pos;
			outputData.mass = particle.mass;
			outputData.color = particle.color;
			outputData.size = particle.size;
			outputData.tex = particle.tex;
			outputData.blending = particle.blending;
			outputData.formulaList = particle.formulaList;
			
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
		
		_ary_renderList = [];
		
		for ( f in treeMap.fields() ) {
			if ( treeMap.field( f ).parentId == null ) {
				var render = { };
				_ary_renderList.push( render );
				_loopNode( treeMap.field( f ), render );
			}
		}
		return _ary_renderList;
		
	}
	
	override function init() 
	{
		super.init();
		
		function foreachObj( obj:Dynamic, ?pid:String ) {
			addParticle( obj.id, pid == null ? '999' : pid, obj );
			if ( obj.emit != null && obj.emit.prototype != null  ) {
				Lambda.foreach( obj.emit.prototype, function( _obj:Dynamic ) {
					foreachObj( _obj, obj.id );
					return true;
				});
			}
		}
		
		Lambda.foreach( config, function( single ) {
			foreachObj( single );
			return true;
		});
		
		notify( ON_INIT );
	}
	
	
	
	function set_currentParticle( particle:Dynamic ):Dynamic 
	{
		currentParticle = particle;
		notify( ON_CURRENT_PARTICLE_CHANGE );
		return currentParticle;
	}
	
}
