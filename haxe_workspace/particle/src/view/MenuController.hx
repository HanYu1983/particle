package view;

import model.Model;

/**
 * ...
 * @author vic
 */
class MenuController extends Model
{
	var win_import:Dynamic;

	public function new() 
	{
		super();
		
	}
	
	public function openImport( type, ?text ) {
		win_import.jqxWindow( 'open' );
		
		switch( type ) {
			case 'export':
				setTextarea( text );
		}
	}
	
	override function init() 
	{
		super.init();
		
		win_import = config.win_import;
		
	}
	
	function setTextarea( str ) {
		win_import.find( 'textarea' ).html( str );
	}
}