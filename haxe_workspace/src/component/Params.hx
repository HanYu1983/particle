package component;
import component.IParams;

/**
 * ...
 * @author vic
 */
class Params implements IParams
{
	public var type:String;
	public var easingType:String;
	public var dom:Dynamic;
	public var event:Dynamic;
	public var extra:Dynamic;
	
	var j = untyped __js__('$');
	var subParams:ISubParams;
	var subContainer:Dynamic;
	var input_type:Dynamic;
	var input_easingType:Dynamic;
	
	public function new( type, easingType, ?extra ) 
	{
		this.type = type;
		this.easingType = easingType;
		this.extra = extra;
		
		event = j('<div></div>' );
		
		dom = j( '#tmpl_params' ).tmpl( {
			type:type,
			easingType:easingType
		});
		
		subContainer = dom.find( '.subContainer' );
		
		subParams = new SubParams( type, easingType );
		subContainer.append( subParams.dom );
		
		input_type = dom.find( '#input_type' );
		input_easingType = dom.find( '#input_easingType' );
		
		input_type.change( onInputTypeChange );
		input_easingType.change( onInputEasingTypeChange );
		
		dom.delegate( 'button', 'click', onDelegate );
	}
	
	public function copy():IParams {
		return new Params( type, easingType, extra);
	}
	
	function onInputTypeChange( e ) {
		var target = e.currentTarget;
		type = target.value;
		
		subParams.setType( type );
		
		var subdom = subParams.dom;
		subContainer.empty();
		subContainer.append( subdom );
		
		if( type == 'c' ) createColorPicker( subdom );
	}
	
	function onInputEasingTypeChange( e ) {
		var target = e.currentTarget;
		easingType = target.value;
		
		subParams.setEasingType( easingType );
		
		var subdom = subParams.dom;
		subContainer.empty();
		subContainer.append( subdom );
		
		if( type == 'c' ) createColorPicker( subdom );
	}
	
	function createColorPicker( colordom ) {
		if ( type == 'c' ) {
			colordom.colorpicker({
				parts:          'full',
				alpha:          true,
				showOn:         'both',
				buttonColorize: true,
				showNoneButton: true
			});
		}
	}
	
	function onDelegate( e ) {
		event.trigger( 'onParamsActEvent', {id:e.currentTarget.id, target:this } );
	}
}