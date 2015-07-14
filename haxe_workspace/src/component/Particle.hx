package component;
import haxe.Json;
import inter.AbstractEvent;
import inter.IParticle;
using Reflect;
/**
 * ...
 * @author vic
 */
class Particle implements IParticle
{
	var _id:String;
	var _parent:IParticle;
	var _ary_children = new Array<IParticle>();
	var _type:EParticleType;
	var _data:Dynamic;

	public function new( id, parent , data ) 
	{
		_data = data;
		_id = id;
		_parent = parent;
	}
	
	public function getId() {
		return _id;
	}
	
	public function getData():Dynamic {
		return _data;
	}
	
	public function getParent():IParticle {
		return _parent;
	}
	
	public function getChildren():Array<IParticle> {
		return _ary_children;
	}
	
	public function addChild( particle:IParticle ):Void {
		_ary_children.push( particle );
	}
	
	public function getType():EParticleType {
		if ( getData().hasField( 'emit' ) ) return EParticleType.EMITTER;
		return EParticleType.PARTICLE;
	}
	
	public function toString():String {
		return Json.stringify( getData() );
	}
}