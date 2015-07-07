package component;
import component.IParams;

/**
 * ...
 * @author vic
 */
class SubParams implements ISubParams
{
	public var type:String;
	public var easingType:String;
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
	}
	
	public function setType( type ) {
		this.type = type;
		setEasingType( this.easingType );
	}
	
	public function setEasingType( easingType:String ):Void {
		this.easingType = easingType;
		var tmplName = switch( easingType ) {
			case 'c':getConstName();
			case 'l':getLinearName();
			case 'r':getLinearName();
			case 'cus':'tmpl_detail';
			case _:'';
		}
		if ( dom != null ) dom.remove();
		dom = j('#' + tmplName ).tmpl();
	}
	
	public function copy():ISubParams {
		return new SubParams( easingType, extra );
	}
	
	function getConstName() {
		return type == 'c' ? 'tmpl_const_color' : 'tmpl_const';
	}
	
	function getLinearName() {
		return type == 'c' ? 'tmpl_linear_color' : 'tmpl_linear';
		
	}
}