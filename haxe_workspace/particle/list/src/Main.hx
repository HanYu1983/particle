package;
using Reflect;
using Lambda;

/**
 * ...
 * @author vic
 */

typedef Item = {
	img:String,
	key:Int
}
 
class Main 
{
	static var pag_page:Dynamic = untyped __js__( '$("#pag_page")' );
	static var ary_items:Array<Item>;
	static var currPage = 0;
	static var pageSize = 30;
	
	static function main() 
	{
		CallJs.api_loadParticleList(0, 999, handleModel( function( ret:Dynamic ) {
			ary_items = ret.fields().map( function( fn:String ) {
				return ret.field( fn );
			});
			
			showList( ary_items );
		}));
		
		pag_page.pagination( {
			onSelectPage:function( pageNumber, pageSize ) {
				trace( pageNumber, pageSize );
			}
		});
	}
	
	static function showList( ary_item:Array<Item> ) {
		
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