package per.vic.pureMVCref.tableGameModel;

/**
 * ...
 * @author vic
 */
class Tool
{
	public static function messageSocket( type, msg ) {
		
		function messageSingle( toId, _type, _msg ){
			untyped __js__( 'channel' ).sendChannelMessage( toId, Json.stringify( {
				type:_type, 
				msg:Json.parse( Json.stringify( _msg ))
			}), handleResponse( function( ret ) {
				trace( ret );
			} ));
		}
		
		if ( ary_ops == null ) return;
		ary_ops.foreach( function( op ) {
			messageSingle( op, type, msg );
			return true;
		});
	}
}