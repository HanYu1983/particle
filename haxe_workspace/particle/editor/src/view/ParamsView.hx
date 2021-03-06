package view;

import model.Model;

/**
 * ...
 * @author vic
 */
class ParamsView extends Model
{
	public static var ON_PROP_CHANGE = 'ON_PROP_CHANGE';
	public static var ON_BLEND_CHANGE = 'ON_BLEND_CHANGE';
	public static var ON_COLOR_CHANGE = 'ON_COLOR_CHANGE';
	public static var ON_BACK_COLOR_CHANGE = 'ON_BACK_COLOR_CHANGE';
	public static var ON_TXT_NAME_CHANGE = 'ON_TXT_NAME_CHANGE';
	
	var j:Dynamic = untyped __js__( '$' );
	var root:Dynamic;
	var currentPropSpr:Dynamic;
	var currentParticleObj:Dynamic;
	var btn_confirmName:Dynamic;
	var color_color:Dynamic;
	var color_background:Dynamic;
	var txt_count:Dynamic;
	var txt_fps:Dynamic;
	var combo_blend:Dynamic;
	var txt_name:Dynamic;

	public function new() 
	{
		super();
		
	}
	
	public function setCount( count ) {
		txt_count.html( count );
	}
	
	public function setFps( fps ) {
		txt_fps.html( fps );
	}
	
	public function setValues( particleObj:Dynamic, isEmit:Bool ) {
		
		currentParticleObj = particleObj;
		var particle = particleObj.particle;
		
		txt_name.val( particle.name );
		
		setPropValue( 'lifetime', particle.lifetime );
		setPropValue( 'mass', particle.mass );
		setPropValue( 'size_x', particle.size[0] );
		setPropValue( 'size_y', particle.size[1] );
		setPropValue( 'vel_x', particle.vel[0] );
		setPropValue( 'vel_y', particle.vel[1] );
		setPropValue( 'vel_r', particle.vel[2] );
		setPropValue( 'pos_r', particle.pos[2] );
		setPropValue( 'alpha', particle.color[3] );
		
		var color = particle.color;
		color_color.jqxColorPicker('setColor', { r: color[0] * 255, g: color[1] * 255, b: color[2] * 255 } );
		
		combo_blend.jqxComboBox('selectItem', findItem( combo_blend, particle.blending ) );
		
		if ( isEmit ) {
			setPropValue( 'count', particle.emit.count );
			setPropValue( 'duration', particle.emit.duration );
			setPropValue( 'angle', particle.emit.angle );
			setPropValue( 'range', particle.emit.range );
			setPropValue( 'force', particle.emit.force );
			
			getPropContainer( 'count' ).show();
			getPropContainer( 'duration' ).show();
			getPropContainer( 'angle' ).show();
			getPropContainer( 'range' ).show();
			getPropContainer( 'force' ).show();
		}else {
			getPropContainer( 'count' ).hide();
			getPropContainer( 'duration' ).hide();
			getPropContainer( 'angle' ).hide();
			getPropContainer( 'range' ).hide();
			getPropContainer( 'force' ).hide();
		}
	}
	
	public function setBackgroundColor( r:Float, g:Float, b:Float) {
		var rgbint:Int = ( Math.floor( r * 255 ) << 16 ) | ( Math.floor( g * 255 ) << 8 ) | Math.floor( b * 255 );
		var rbgstr = untyped __js__( 'Number.prototype.toString.call' )( rgbint, 16 );
		while ( rbgstr.length < 6 ) {
			rbgstr = '0' + rbgstr;
		}
		rbgstr = '#' + rbgstr;
		color_background.jqxColorPicker('setColor', rbgstr );
	}
	
	override function init() 
	{
		super.init();
		
		txt_name = config.txt_name;
		txt_name.on('change', function () { 
			var value = txt_name.val(); 
			notify( ON_TXT_NAME_CHANGE, {id:currentParticleObj.id, name:value} );
		}); 
		
		root = config.root;
		root.find( '[jqx="jqxNumberInput"]' ).on('change', function ( event ) 
		{
			var jdom = j( untyped __js__( 'this' ) );
			var proptype = jdom.parent().parent().attr( 'proptype' );
			var newValue = Std.parseFloat( event.args.value );
			//switch( proptype ) {
			//	case 'duration', 'lifetime':
			//		newValue /= 1000;
			//	case 'angle', 'range', 'pos_r', 'vel_r':
					//newValue = newValue / 180 * Math.PI;
			//}
			notify( ON_PROP_CHANGE, { id:currentParticleObj.id, proptype:proptype, value:newValue } );
			currentPropSpr = jdom;
		}); 
		
		color_color = config.color_color;
		color_color.on('colorchange', function (event) {
			var color = event.args.color;
			notify( ON_COLOR_CHANGE, { color: color } );
		});
		
		combo_blend = config.combo_blend;
		combo_blend.on('change', function (event) {
			notify( ON_BLEND_CHANGE, { blend: getTypeFromItem( getSelectItem( combo_blend )) } );
		});
		
		color_background = config.color_background;
		color_background.on('colorchange', function (event) {
			var color = event.args.color;
			notify( ON_BACK_COLOR_CHANGE, { color: color } );
		});
		
		txt_count = config.txt_count;
		txt_fps = config.txt_fps;
	}
	
	function getTypeFromItem( item:Dynamic ) {
		return Main.j( item.element ).find( '[ptype]' ).attr('ptype');
	}
	
	function getSelectItem( combo:Dynamic ) {
		return combo.jqxComboBox('getSelectedItem'); 
	}
	
	function findItem( combo:Dynamic, value:String ) {
		var items = combo.jqxComboBox('getItems');
		return Lambda.find( items, function( obj ) {
			return ( Main.j( obj.label ).attr( 'ptype' ) == value );
		});
	}
	
	function setPropValue( type, value:Float ) {
		getPropContainer( type ).find( '[jqx="jqxNumberInput"]' ).jqxNumberInput( 'val', value );
	}
	
	function getPropContainer( type ):Dynamic {
		return root.find( 'div[proptype=' + type + ']' );
	}
	
}