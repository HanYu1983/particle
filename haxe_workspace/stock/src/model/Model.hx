package model;

/**
 * ...
 * @author vic
 */
class Model
{
	var _ary_handler = new Array<String -> Dynamic -> Void>();
	public var config(default,set):Dynamic;

	public function new() 
	{
		
	}
	
	public function addHandler( handler ) {
		_ary_handler.push( handler );
	}
	
	public function notify( type, params ) {
		Lambda.map( _ary_handler, function( fn ) {
			fn( type, params );
		});
	}
	
	function set_config( config ) {
		this.config = config;
		init();
		return this.config;
	}
	
	function init() {
		//for children
	}
	
	function execute( type, params ) {
		//for children
	}
}