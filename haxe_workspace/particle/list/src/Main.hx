package;


/**
 * ...
 * @author vic
 */
class Main 
{
	
	static function main() 
	{
		CallJs.store_loadParticleList( { 
			Offset:0,
			Count:30
		}, handleModel( function( ret ) {
			trace( ret );
		}) );
	}
	
	static function handleModel( fn ) {
		return function( err, ret ) {
			if ( err == null ) {
				fn( ret );
			}else {
				trace( err );
			}
		}
	}
}