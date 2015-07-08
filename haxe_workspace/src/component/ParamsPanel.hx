package component;
using Reflect;
/**
 * ...
 * @author vic
 */
class ParamsPanel implements IDom
{
	public var dom:Dynamic;
	
	var j:Dynamic = untyped __js__('$');
	var input_age:Dynamic;
	var params_container:Dynamic;
	var particle_object:Dynamic;
	
	public function new( dom ) 
	{
		this.dom = dom;
		
		params_container = this.dom.find( '#params_container' );
		input_age = this.dom.find( '#input_age' );
		input_age.change( onInputAgeChange );
	}
	
	public function createParamsByParticle( obj:Dynamic ) {
		particle_object = obj;
		
		clearParams();
		setLifetime( particle_object.lifetime );
		for ( k in obj.fields() ) {
			switch( k ) {
				case 'pos':
					createParams( new Params( ParticleAttribute.POSITION_X, 'c' ) );
					createParams( new Params( ParticleAttribute.POSITION_Y, 'c' ) );
				case 'vel':
					createParams( new Params( ParticleAttribute.VELOCITY_X, 'c' ) );
					createParams( new Params( ParticleAttribute.VELOCITY_Y, 'c' ) );
			}
		}
	}
	
	function setLifetime( val ) {
		input_age.val( val );
	}
	
	function deleteParams( params:IParams ) {
		params.dom.remove();
	}
	
	function createParams( params:IParams ) {
		params.dom.appendTo( params_container );
		params.event.on( 'onParamsActEvent', onParamsActEvent );
		params.event.on( 'onParamsChangeEvent', onParamsChangeEvent );
	}
	
	function clearParams() {
		params_container.empty();
	}
	
	function onParamsActEvent( e, params ) {
		var target:IParams = params.target;
		switch( params.id ) {
			case 'btn_add':
				var extra = target.extra;
				extra.isParams = true;
				var copy = new Params( target.type, target.easingType, extra );
				createParams( copy );
			case 'btn_copy':
				createParams( target.copy() );
			case 'btn_delete':
				deleteParams( target );
		}
	}
	
	function onParamsChangeEvent( e, params:Dynamic ) {
		
		var pos = params.pos;
		var val = params.val;
		var type:ParticleAttribute = params.type;
		switch( type ) {
			case ParticleAttribute.POSITION_X:
				particle_object.pos[0] = val;
			case ParticleAttribute.POSITION_Y:
				particle_object.pos[1] = val;
			case ParticleAttribute.VELOCITY_X:
				particle_object.vel[0] = val;
			case ParticleAttribute.VELOCITY_Y:
				particle_object.vel[1] = val;
			case ParticleAttribute.COLOR:
			case _:
		}
		trace( particle_object );
		OnView.inst.updateParticleRoot();
	}
	
	function onInputAgeChange( e ) {
		particle_object.lifetime = input_age.val();
		OnView.inst.updateParticleRoot();
	}
}