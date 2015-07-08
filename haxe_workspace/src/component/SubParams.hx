package component;
import component.IParams;

/**
 * ...
 * @author vic
 */
class SubParams implements ISubParams
{
	public var type:ParticleAttribute;
	public var easingType:EasingType;
	public var dom:Dynamic;
	public var event:Dynamic;
	public var extra:Dynamic;
	
	var j = untyped __js__('$');
	
	public function new( type, easingType, ?extra ) 
	{
		this.type = type;
		this.easingType = easingType;
		this.extra = extra;
		event = j('<div></div>' );
		setEasingType( easingType );
		trace( 'easingType', easingType );
	}
	
	public function setType( type:ParticleAttribute ) {
		this.type = type;
		setEasingType( this.easingType );
	}
	
	public function setEasingType( easingType:EasingType ):Void {
		this.easingType = easingType;
		var tmplName = switch( easingType ) {
			case EasingType.CONST:getConstName();
			case EasingType.LINEAR:getLinearName();
			//case 'cus':'tmpl_detail';
			case _:'';
		}
		trace( easingType );
		if ( dom != null ) dom.remove();
		dom = j('#' + tmplName ).tmpl();
	}
	
	public function copy():ISubParams {
		return new SubParams( this.type, easingType, extra );
	}
	
	function getConstName() {
		return type == ParticleAttribute.COLOR ? 'tmpl_const_color' : 'tmpl_const';
	}
	
	function getLinearName() {
		return type == ParticleAttribute.COLOR ? 'tmpl_linear_color' : 'tmpl_linear';
	}
}