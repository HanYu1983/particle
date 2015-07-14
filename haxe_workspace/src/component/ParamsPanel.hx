package component;

import inter.AbstractParamsPanel;
import inter.IParamsPanel;

/**
 * ...
 * @author vic
 */
class ParamsPanel extends AbstractParamsPanel
{
	var txt_life:Dynamic;
	var txt_name:Dynamic;
	var txt_mass:Dynamic;
	var txt_rot:Dynamic;
	var txt_vel_rot:Dynamic;
	var txt_size_x:Dynamic;
	var txt_size_y:Dynamic;
	var txt_pos_x:Dynamic;
	var txt_pos_y:Dynamic;
	var txt_vel_x:Dynamic;
	var txt_vel_y:Dynamic;
	

	public function new( dom ) 
	{
		super( dom );
		
		txt_name = dom.find( '#txt_name' ).find( 'span' );
		txt_life = dom.find( '#txt_life' );
		txt_mass = dom.find( '#txt_mass' );
		txt_rot = dom.find( '#txt_rot' );
		txt_vel_rot = dom.find( '#txt_vel_rot' );
		txt_size_x = dom.find( '#txt_size_x' );
		txt_size_y = dom.find( '#txt_size_y' );
		txt_pos_x = dom.find( '#txt_pos_x' );
		txt_pos_y = dom.find( '#txt_pos_y' );
		txt_vel_x = dom.find( '#txt_vel_x' );
		txt_vel_y = dom.find( '#txt_vel_y' );
		
		//txt_life.parent().find( '.txt_life' ).html('sadf' );
		/*
		txt_life.parent().find( 'input[type=hidden]' ).change( function( e ) {
			trace( e );
		});
		
		
		txt_life.spinner( {
			value:10,
			spin:function( down ) {
				var old = txt_mass.spinner( 'getValue' );
				if ( down ) {
					old--;
				}else {
					old++;
				}
				txt_mass.spinner( 'setValue', old );
			}
		});
		*/
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
		txt_vel_x.spinner( 'setValue', x );
		txt_vel_y.spinner( 'setValue', y );
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
		txt_life.spinner( 'setValue', life );
	}
	
	override public function setMass(mass:Int):Void 
	{
		txt_mass.spinner( 'setValue', mass );
		
	}
	
	override public function setPosition(x:Float, y:Float):Void 
	{
		txt_pos_x.spinner( 'setValue', x );
		txt_pos_y.spinner( 'setValue', y );
	}
	
	override public function setRotation(r:Float):Void 
	{
		txt_rot.spinner( 'setValue', r );
	}
	
	override public function setSize(width:Float, height:Float):Void 
	{
		txt_size_x.spinner( 'setValue', width );
		txt_size_y.spinner( 'setValue', height );
	}
	
	override public function setVelocityRotation(v:Float):Void 
	{
		txt_vel_rot.spinner( 'setValue', v );
	}
}