package;

import js.Lib;

using Lambda;
using Reflect;
using StringTools;
/**
 * ...
 * @author vic
 */
class Main 
{
	
	static function main() 
	{
		var j:Dynamic = untyped __js__('$');
		
		
		Helper.loadList( function( err, data ) {
			trace( data );
		});
		/*
		[for ( i in 0...50 ) i ].foreach( function( str ) {
			var dom = Helper.createItem( { } );
			Helper.addItemListener( dom );
			j('#mc_itemContainer').append( dom );
			return true;
		});
		
		Helper.loadDetail( 'sgs', function( data:Dynamic ) {
			var dom = Helper.createDetail( 'sgs', data[0] );
			j( '#mc_bigItemContainer' ).append( dom );
		});
		*/
	}
	
}