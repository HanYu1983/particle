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
	var slr_count:Dynamic;
	var slr_duration:Dynamic;
	var slr_angle:Dynamic;
	var slr_range:Dynamic;
	var slr_force:Dynamic;
	var slr_life:Dynamic;
	var slr_mass:Dynamic;
	var slr_rot:Dynamic;
	var slr_vel_rot:Dynamic;
	var slr_size_x:Dynamic;
	var slr_size_y:Dynamic;
	var slr_pos_x:Dynamic;
	var slr_pos_y:Dynamic;
	var slr_vel_x:Dynamic;
	var slr_vel_y:Dynamic;

	public function new( dom ) 
	{
		super( dom );
		
		txt_name = dom.find( '#txt_name' ).find( 'span' );
		slr_count = dom.find( '#slr_count' );
		slr_duration = dom.find( '#slr_duration' );
		slr_angle = dom.find( '#slr_angle' );
		slr_range = dom.find( '#slr_range' );
		slr_force = dom.find( '#slr_force' );
		slr_life = dom.find( '#slr_life' );
		slr_mass = dom.find( '#slr_mass' );
		slr_rot = dom.find( '#slr_rot' );
		slr_vel_rot = dom.find( '#slr_vel_rot' );
		slr_size_x = dom.find( '#slr_size_x' );
		slr_size_y = dom.find( '#slr_size_y' );
		slr_pos_x = dom.find( '#slr_pos_x' );
		slr_pos_y = dom.find( '#slr_pos_y' );
		slr_vel_x = dom.find( '#slr_vel_x' );
		slr_vel_y = dom.find( '#slr_vel_y' );
		
		slr_count.slider( { onChange:onSlrChange( EParticleAttribute.COUNT ) });
		slr_duration.slider( { onChange:onSlrChange( EParticleAttribute.DURATION ) });
		slr_angle.slider( { onChange:onSlrChange( EParticleAttribute.ANGLE ) });
		slr_range.slider( { onChange:onSlrChange( EParticleAttribute.RANGE ) });
		slr_force.slider( { onChange:onSlrChange( EParticleAttribute.FORCE ) });
		slr_life.slider( { onChange:onSlrChange( EParticleAttribute.LEFT_TIME ) });
		slr_mass.slider( { onChange:onSlrChange( EParticleAttribute.MASS ) });
		slr_rot.slider( { onChange:onSlrChange( EParticleAttribute.POSITION_R ) });
		slr_vel_rot.slider( { onChange:onSlrChange( EParticleAttribute.VELOCITY_R ) });
		slr_size_x.slider( { onChange:onSlrChange( EParticleAttribute.SIZE_X ) });
		slr_size_y.slider( { onChange:onSlrChange( EParticleAttribute.SIZE_Y ) });
		slr_pos_x.slider( { onChange:onSlrChange( EParticleAttribute.POSITION_X ) });
		slr_pos_y.slider( { onChange:onSlrChange( EParticleAttribute.POSITION_Y ) });
		slr_vel_x.slider( { onChange:onSlrChange( EParticleAttribute.VELOCITY_X ) });
		slr_vel_y.slider( { onChange:onSlrChange( EParticleAttribute.VELOCITY_Y ) });
	}
	
	override public function setData(data:Dynamic, type:EParticleType):Void 
	{
		super.setData( data, type );
		
		if ( type == EParticleType.EMITTER ) {
			slr_count.slider( 'setValue', data.emit.count );
			slr_duration.slider( 'setValue', data.emit.duration * 1000 );
			slr_angle.slider( 'setValue', data.emit.angle / Math.PI * 180 );
			slr_range.slider( 'setValue', data.emit.range / Math.PI * 180 );
			slr_force.slider( 'setValue', data.emit.force );
			
			slr_count.parent().parent().show();
			slr_duration.parent().parent().show();
			slr_angle.parent().parent().show();
			slr_range.parent().parent().show();
			slr_force.parent().parent().show();
		}else {
			slr_count.parent().parent().hide();
			slr_duration.parent().parent().hide();
			slr_angle.parent().parent().hide();
			slr_range.parent().parent().hide();
			slr_force.parent().parent().hide();
		}
		
		txt_name.html( data.id );
		slr_life.slider( 'setValue', data.lifetime );
		slr_mass.slider( 'setValue', data.mass );
		slr_vel_x.slider( 'setValue', data.vel[0] );
		slr_vel_y.slider( 'setValue', data.vel[1] );
		slr_vel_rot.slider( 'setValue', data.vel[2] );
		slr_pos_x.slider( 'setValue', data.pos[0] );
		slr_pos_y.slider( 'setValue', data.pos[1]);
		slr_rot.slider( 'setValue', data.pos[2] );
		slr_size_x.slider( 'setValue', data.size[0] );
		slr_size_y.slider( 'setValue', data.size[1] );
	}
	
	function onSlrChange( particleAttr:EParticleAttribute ) {
		return function( newv, oldv ) {
			var target = untyped __js__( '$(this)' );
			var value = target.slider( 'getValue' );
			switch( particleAttr ) {
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
					getData().setField( 'lifetime', value );
				case EParticleAttribute.MASS:
					getData().setField( 'mass', value );
				case EParticleAttribute.POSITION_R:
					getData().field( 'pos' )[2] = value;
				case EParticleAttribute.POSITION_X:
					getData().field( 'pos' )[0] = value;
				case EParticleAttribute.POSITION_Y:
					getData().field( 'pos' )[1] = value;
				case EParticleAttribute.SIZE_X:
					getData().field( 'size' )[0] = value;
				case EParticleAttribute.SIZE_Y:
					getData().field( 'size' )[1] = value;
				case EParticleAttribute.VELOCITY_R:
					getData().field( 'vel' )[2] = value;
				case EParticleAttribute.VELOCITY_X:
					getData().field( 'vel' )[0] = value;
				case EParticleAttribute.VELOCITY_Y:
					getData().field( 'vel' )[1] = value;
				case _:
			}
			trigger( ON_PARAMS_CHANGE, {} );
		}
	}
}