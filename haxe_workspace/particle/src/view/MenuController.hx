package view;

import haxe.Json;
import model.Model;

/**
 * ...
 * @author vic
 */
class MenuController extends Model
{
	public static var ON_IMPORT_CLICK = 'ON_IMPORT_CLICK';
	
	var win_import:Dynamic;
	var btn_confirm:Dynamic;

	public function new() 
	{
		super();
		
	}
	
	public function openImport( type, ?text ) {
		win_import.jqxWindow( 'open' );
		win_import.attr( 'type', type );
		switch( type ) {
			case 'import':
				setTextarea( '' );
			case 'export':
				setTextarea( text );
		}
	}
	
	override function init() 
	{
		super.init();
		
		win_import = config.win_import;
		btn_confirm = config.btn_confirm;
		btn_confirm.click( function() {
			win_import.jqxWindow( 'close' );
			switch( win_import.attr( 'type' ) ) {
				case 'import':
					notify( ON_IMPORT_CLICK, { config: getTextarea() } );
			}
		});
	}
	
	function setTextarea( str ) {
		win_import.find( 'textarea' ).val( str );
	}
	
	function getTextarea() {
		return win_import.find( 'textarea' ).val();
	}
}