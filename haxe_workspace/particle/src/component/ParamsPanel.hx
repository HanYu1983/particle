package component;

import inter.AbstractParamsPanel;
import inter.IParamsPanel;
using Reflect;
/**
 * ...
 * @author vic
 */
class ParamsPanel extends AbstractParamsPanel
{
	public static var ON_PARAMS_CHANGE = 'on_params_change';
	
	var txt_name:Dynamic;
	var input_count:Dynamic;
	var input_duration:Dynamic;
	var input_angle:Dynamic;
	var input_range:Dynamic;
	var input_force:Dynamic;
	var input_life:Dynamic;
	var input_mass:Dynamic;
	var input_rot:Dynamic;
	var input_vel_rot:Dynamic;
	var input_size_x:Dynamic;
	var input_size_y:Dynamic;
	var input_pos_x:Dynamic;
	var input_pos_y:Dynamic;
	var input_vel_x:Dynamic;
	var input_vel_y:Dynamic;
	
	public function new( dom ) 
	{
		super( dom );
		
		txt_name = dom.find( '#txt_name' ).find( 'span' );
		
		input_count = dom.find( '#mc_singlePropContainer_count' ).find( '.easyui-numberspinner' );
		input_duration = dom.find( '#mc_singlePropContainer_duration' ).find( '.easyui-numberspinner' );
		input_angle = dom.find( '#mc_singlePropContainer_angle' ).find( '.easyui-numberspinner' );
		input_range = dom.find( '#mc_singlePropContainer_range' ).find( '.easyui-numberspinner' );
		input_force = dom.find( '#mc_singlePropContainer_force' ).find( '.easyui-numberspinner' );
		input_life = dom.find( '#mc_singlePropContainer_life' ).find( '.easyui-numberspinner' );
		input_mass = dom.find( '#mc_singlePropContainer_mass' ).find( '.easyui-numberspinner' );
		input_rot = dom.find( '#mc_singlePropContainer_pos_r' ).find( '.easyui-numberspinner' );
		input_vel_rot = dom.find( '#mc_singlePropContainer_vel_r' ).find( '.easyui-numberspinner' );
		input_size_x = dom.find( '#mc_singlePropContainer_size_x' ).find( '.easyui-numberspinner' );
		input_size_y = dom.find( '#mc_singlePropContainer_size_y' ).find( '.easyui-numberspinner' );
		input_vel_x = dom.find( '#mc_singlePropContainer_vel_x' ).find( '.easyui-numberspinner' );
		input_vel_y = dom.find( '#mc_singlePropContainer_vel_y' ).find( '.easyui-numberspinner' );
		
		input_count.numberspinner( { onSpinUp:onInputSpinChange( EParticleAttribute.COUNT ), onSpinDown:onInputSpinChange( EParticleAttribute.COUNT ) } );
		input_duration.numberspinner( { onSpinUp:onInputSpinChange( EParticleAttribute.DURATION ), onSpinDown:onInputSpinChange( EParticleAttribute.DURATION ) } );
		input_angle.numberspinner( { onSpinUp:onInputSpinChange( EParticleAttribute.ANGLE ), onSpinDown:onInputSpinChange( EParticleAttribute.ANGLE ) } );
		input_range.numberspinner( { onSpinUp:onInputSpinChange( EParticleAttribute.RANGE ), onSpinDown:onInputSpinChange( EParticleAttribute.RANGE ) } );
		input_force.numberspinner( { onSpinUp:onInputSpinChange( EParticleAttribute.FORCE ), onSpinDown:onInputSpinChange( EParticleAttribute.FORCE ) } );
		input_life.numberspinner( { onSpinUp:onInputSpinChange( EParticleAttribute.LEFT_TIME ), onSpinDown:onInputSpinChange( EParticleAttribute.LEFT_TIME ) } );
		input_mass.numberspinner( { onSpinUp:onInputSpinChange( EParticleAttribute.MASS ), onSpinDown:onInputSpinChange( EParticleAttribute.MASS ) } );
		input_rot.numberspinner( { onSpinUp:onInputSpinChange( EParticleAttribute.POSITION_R ), onSpinDown:onInputSpinChange( EParticleAttribute.POSITION_R ) } );
		input_vel_rot.numberspinner( { onSpinUp:onInputSpinChange( EParticleAttribute.VELOCITY_R ), onSpinDown:onInputSpinChange( EParticleAttribute.VELOCITY_R ) } );
		input_size_x.numberspinner( { onSpinUp:onInputSpinChange( EParticleAttribute.SIZE_X ), onSpinDown:onInputSpinChange( EParticleAttribute.SIZE_X ) } );
		input_size_y.numberspinner( { onSpinUp:onInputSpinChange( EParticleAttribute.SIZE_Y ), onSpinDown:onInputSpinChange( EParticleAttribute.SIZE_Y ) } );
		input_vel_x.numberspinner( { onSpinUp:onInputSpinChange( EParticleAttribute.VELOCITY_X ), onSpinDown:onInputSpinChange( EParticleAttribute.VELOCITY_X ) } );
		input_vel_y.numberspinner( { onSpinUp:onInputSpinChange( EParticleAttribute.VELOCITY_Y ), onSpinDown:onInputSpinChange( EParticleAttribute.VELOCITY_Y ) } );
		
	}
	
	override public function setData(data:Dynamic, type:EParticleType):Void 
	{
		super.setData( data, type );
		
		trace("GG");
		if ( type == EParticleType.EMITTER ) {
			input_count.numberspinner( 'setValue', data.emit.count );
			input_duration.numberspinner( 'setValue', data.emit.duration * 1000 );
			input_angle.numberspinner( 'setValue', data.emit.angle / Math.PI * 180 );
			input_range.numberspinner( 'setValue', data.emit.range / Math.PI * 180 );
			input_force.numberspinner( 'setValue', data.emit.force );
			
			input_count.parent().parent().show();
			input_duration.parent().parent().show();
			input_angle.parent().parent().show();
			input_range.parent().parent().show();
			input_force.parent().parent().show();
		}else {
			input_count.parent().parent().hide();
			input_duration.parent().parent().hide();
			input_angle.parent().parent().hide();
			input_range.parent().parent().hide();
			input_force.parent().parent().hide();
		}
		
		txt_name.html( data.id );
		input_life.numberspinner( 'setValue', data.lifetime * 1000 );
		input_mass.numberspinner( 'setValue', data.mass );
		input_vel_x.numberspinner( 'setValue', data.vel[0] );
		input_vel_y.numberspinner( 'setValue', data.vel[1] );
		input_vel_rot.numberspinner( 'setValue', data.vel[2] / Math.PI * 180 );
		input_rot.numberspinner( 'setValue', data.pos[2] / Math.PI * 180 );
		input_size_x.numberspinner( 'setValue', data.size[0] );
		input_size_y.numberspinner( 'setValue', data.size[1] );
		
	}
	
	function onInputSpinChange( particleAttr:EParticleAttribute ) {
		return function() {
			var target = untyped __js__( '$(this)' );
			var value = target.numberspinner( 'getValue' );
			switch( particleAttr ) {
				case EParticleAttribute.COLOR:
				case EParticleAttribute.COUNT:
					getData().emit.count = value;
				case EParticleAttribute.DURATION:
					getData().emit.duration = value / 1000;
				case EParticleAttribute.ANGLE:
					getData().emit.angle = value / 180 * Math.PI;
				case EParticleAttribute.RANGE:
					getData().emit.range = value / 180 * Math.PI;
				case EParticleAttribute.FORCE:
					getData().emit.force = value;
				case EParticleAttribute.LEFT_TIME:
					getData().setField( 'lifetime', value / 1000 );
				case EParticleAttribute.MASS:
					getData().setField( 'mass', value );
				case EParticleAttribute.POSITION_R:
					getData().field( 'pos' )[2] = value / 180 * Math.PI;
				case EParticleAttribute.POSITION_X:
					getData().field( 'pos' )[0] = value;
				case EParticleAttribute.POSITION_Y:
					getData().field( 'pos' )[1] = value;
				case EParticleAttribute.SIZE_X:
					getData().field( 'size' )[0] = value;
				case EParticleAttribute.SIZE_Y:
					getData().field( 'size' )[1] = value;
				case EParticleAttribute.VELOCITY_R:
					getData().field( 'vel' )[2] = value / 180 * Math.PI;
				case EParticleAttribute.VELOCITY_X:
					getData().field( 'vel' )[0] = value;
				case EParticleAttribute.VELOCITY_Y:
					getData().field( 'vel' )[1] = value;
			}
			trigger( ON_PARAMS_CHANGE, {} );
		}
	}
}