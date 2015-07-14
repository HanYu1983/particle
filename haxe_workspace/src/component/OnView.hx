package component;
using Reflect;
/**
 * ...
 * @author vic
 */
class OnView
{
	public static var inst = new OnView();
	/*
	:formulaList (or formulaList nil) ; 改變函式
	:lifetime (or lifetime 10)        ; 生命
	:pos (or pos [0 0 0])             ; 位置
	:vel (or vel [0 0 0])             ; 速度
	:color (or color [1 0 0 1])       ; 顏色
	:mass (or mass 1)                 ; 質量（還沒有作用）
	:size (or size [10 10])           ; 大小

	發射器(emit裡面)
	:count 1      ; 一次射出幾層(prototype列表)
	:duration 1   ; 間隔（秒）
	:angle 0      ; 角度（弧度）
	:range 0      ; 範圍（弧度）
	:force 0      ; 發射力道
	*/
	var onViewObj:Dynamic = untyped __js__('common.onView');
	var basicObj:Dynamic;
	private function new() 
	{
		
	}
	
	public function setObject( ?obj, fn ) {
		basicObj = ( obj == null ? { 	id:'root', 
										lifetime:10,
										emit: { prototype:[ { id:'root_particle', lifetime:1, vel:[50, 0, 0] } ] }, 
										pos:[0, 0, 0], vel:[0, 0, 0] } : obj );
		
		goThroughAllParticle( fn );
		updateParticleRoot();
	}
	
	public function getObject() {
		if ( basicObj == null ) throw 'you should set object first!';
		return basicObj;
	}
	
	public function updateParticleRoot() {
		notify( 'edit-particle', getObject() );
	}
	
	public function goThroughAllParticle( fn ) {
		function _findParticle( fields:Dynamic, fn ) {
			fn( fields );
			if ( fields.hasField( 'emit' ) ) {
				var ary:Array<Dynamic> = fields.emit.prototype;
				var target:Dynamic = null;
				for ( i in 0...ary.length ) {
					_findParticle( ary[i], fn );
				}
				return target;
			}else {
				return null;
			}
		}
		
		return _findParticle( getObject(), fn );
	}
	
	public function findParticle( id:String ) {
		function _findParticle( fields:Dynamic ) {
			if ( fields.id == id ) return fields;
			if ( fields.hasField( 'emit' ) ) {
				var ary:Array<Dynamic> = fields.emit.prototype;
				var target:Dynamic = null;
				for ( i in 0...ary.length ) {
					target = _findParticle( ary[i] );
				}
				return target;
			}else {
				return null;
			}
		}
		
		return _findParticle( getObject() );
	}
	
	public function moveParticle( id, x, y ) {
		var p = findParticle( id );
		if( p != null ){
			p.pos[0] = x;
			p.pos[1] = y;
		}
		updateParticleRoot();
	}
	
	function notify( evt:String, value:Dynamic) {
		onViewObj.onNext( [evt, value] );
	}
}