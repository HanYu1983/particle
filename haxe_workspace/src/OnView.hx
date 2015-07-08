package;
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
	
	public function setObject( ?obj ) {
		basicObj = ( obj == null ? { 	id:'root', 
										emit: { prototype:[ { vel:[50, 0, 0] } ] }, 
										pos:[0, 0, 0], vel:[0, 0, 0] } : obj );
		notify( 'edit-particle', basicObj );
	}
	
	public function getObject() {
		if ( basicObj == null ) throw 'you should set object first!';
		return basicObj;
	}
	
	public function findParticle( id ) {
		function _findParticle( fields:Dynamic ) {
			if ( fields.id == id ) return fields;
			if ( fields.hasField( 'emit' ) ) {
				Lambda.map( fields.emit.prototype, _findParticle );
			}
			return null;
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
	
	function updateParticleRoot() {
		notify( 'edit-particle', getObject() );
	}
	
	function notify( evt:String, value:Dynamic) {
		onViewObj.onNext( [evt, value] );
	}
}