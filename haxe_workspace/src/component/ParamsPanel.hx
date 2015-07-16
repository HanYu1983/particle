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
	var txt_name:Dynamic;
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
	
	override public function setData(data:Dynamic):Void 
	{
		super.setData( data );
		
		setName( data.id );
		setPosition( data.pos[0], data.pos[1] );
		setVelocity( data.vel[0], data.vel[1] );
		setRotation( data.pos[2] );
		setVelocityRotation( data.vel[2] );
		setLife( data.lifetime );
		setMass( data.mass );
		setSize( data.size[0], data.size[1] );
	}
	
	override public function setVelocity(x:Float, y:Float):Void 
	{
		slr_vel_x.slider( 'setValue', x );
		slr_vel_y.slider( 'setValue', y );
	}
	
	override public function setName(name:String):Void 
	{
		txt_name.html( name );
	}
	
	override public function setColor(color:Int):Void 
	{
		
	}
	
	override public function setLife(life:Int):Void 
	{
		slr_life.slider( 'setValue', life );
	}
	
	override public function setMass(mass:Int):Void 
	{
		slr_mass.slider( 'setValue', mass );
		
	}
	
	override public function setPosition(x:Float, y:Float):Void 
	{
		slr_pos_x.slider( 'setValue', x );
		slr_pos_y.slider( 'setValue', y );
	}
	
	override public function setRotation(r:Float):Void 
	{
		slr_rot.slider( 'setValue', r );
	}
	
	override public function setSize(width:Float, height:Float):Void 
	{
		slr_size_x.slider( 'setValue', width );
		slr_size_y.slider( 'setValue', height );
	}
	
	override public function setVelocityRotation(v:Float):Void 
	{
		slr_vel_rot.slider( 'setValue', v );
	}
	
	function onSlrChange( particleAttr:EParticleAttribute ) {
		return function( newv, oldv ) {
			var target = untyped __js__( '$(this)' );
			var value = target.slider( 'getValue' );
			switch( particleAttr ) {
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
			
		}
	}
}