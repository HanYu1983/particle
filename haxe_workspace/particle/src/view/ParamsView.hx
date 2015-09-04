package view;

import model.Model;

/**
 * ...
 * @author vic
 */
class ParamsView extends Model
{
	public static var ON_PROP_CHANGE = 'ON_PROP_CHANGE';
	public static var ON_TXT_NAME_CHANGE = 'ON_TXT_NAME_CHANGE';
	
	var j:Dynamic = untyped __js__( '$' );
	var root:Dynamic;
	var currentPropSpr:Dynamic;
	var currentParticleObj:Dynamic;
	var btn_confirmName:Dynamic;
	var txt_name:Dynamic;

	public function new() 
	{
		super();
		
	}
	
	public function setValues( particleObj:Dynamic, isEmit:Bool ) {
		
		currentParticleObj = particleObj;
		var particle = particleObj.particle;
		
		txt_name.val( particle.name );
		
		
		setPropValue( 'lifetime', particle.lifetime * 1000 );
		setPropValue( 'mass', particle.mass );
		setPropValue( 'size_x', particle.size[0] );
		setPropValue( 'size_y', particle.size[1] );
		setPropValue( 'vel_x', particle.vel[0] );
		setPropValue( 'vel_y', particle.vel[1] );
		setPropValue( 'vel_r', particle.vel[2] / Math.PI * 180 );
		setPropValue( 'pos_r', particle.pos[2] / Math.PI * 180 );
		/*
		if ( isEmit ) {
			setPropValue( 'count', particle.emit.count );
			setPropValue( 'duration', particle.emit.duration * 1000 );
			setPropValue( 'angle', particle.emit.angle / Math.PI * 180 );
			setPropValue( 'range', particle.emit.range / Math.PI * 180 );
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
		*/
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
		//root.find( '[jqx="jqxNumberInput"]' ).jqxNumberInput( 
		
		//$('#jqxNumberInput').jqxNumberInput('val', 561.23);
		/*
		
		root.find( '.easyui-numberspinner-code' ).numberspinner( {
			onChange:function(newv, oldv ) {
				var newValue = Std.parseFloat( newv );
				var jdom = j( untyped __js__( 'this' ) );
				var proptype = jdom.parent().parent().attr( 'proptype' );
				
				switch( proptype ) {
					case 'duration', 'lifetime':
						newValue /= 1000;
					case 'angle', 'range', 'pos_r', 'vel_r':
						newValue = newValue / 180 * Math.PI;
				}
				
				notify( ON_PROP_CHANGE, { id:currentParticleObj.id, proptype:proptype, value:newValue } );
				currentPropSpr = jdom;
			},
			onSpinUp:function() {
				var jdom = j( untyped __js__( 'this' ) );
				currentPropSpr = jdom;
			},
			onSpinDown:function() {
				var jdom = j( untyped __js__( 'this' ) );
				currentPropSpr = jdom;
			}
		});
		
		root.find( '.easyui-numberspinner-code' ).parent().focusin( function( e:Dynamic ) {
			var jdom:Dynamic = j( e.currentTarget ).find( '.easyui-numberspinner-code' );
			var proptype = jdom.parent().parent().attr( 'proptype' );
			currentPropSpr = jdom;
		});
		
		root.find( '.easyui-numberspinner-code' ).parent().focusout( function( e:Dynamic ) {
			var jdom:Dynamic = j( e.currentTarget ).find( '.easyui-numberspinner-code' );
			var proptype = jdom.parent().parent().attr( 'proptype' );
			currentPropSpr = null;
		});
		
		btn_confirmName = config.btn_confirmName;
		
		
		Main.addMouseWheelEvent( j( 'body' ), onBodyWheel );
		*/
	}
	
	function setPropValue( type, value:Float ) {
		getPropContainer( type ).find( '[jqx="jqxNumberInput"]' ).jqxNumberInput( 'val', value );
		//getPropContainer( type ).find( '.easyui-numberspinner-code' ).numberspinner( 'setValue', value );
	}
	
	function getPropContainer( type ):Dynamic {
		trace( root );
		return root.find( 'div[proptype=' + type + ']' );
	}
	
	function onBodyWheel( e ) {
		if ( currentPropSpr == null ) return;
		var oldvalue = currentPropSpr.numberspinner( 'getValue' );
		if ( e.delta > 0 ) {
			--oldvalue;
		}else {
			++oldvalue;
		}
		currentPropSpr.numberspinner( 'setValue', oldvalue );
	}
}