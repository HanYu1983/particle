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
	static var mc_listContainer:Dynamic = untyped __js__( '$("#mc_listContainer")' );
	static var ary_items:Array<Item>;
	static var currPage = 0;
	static var pageSize = 21;
	
	static function main() 
	{
		CallJs.api_loadParticleList(0, 999, handleModel( function( ret:Dynamic ) {
			ary_items = ret;
			initPagination( ary_items.length );
			showList( mc_listContainer, getShowAry( ary_items, currPage, pageSize ) );
		}));
	}
	
	static function initPagination( total:Int ) {
		pag_page.pagination( {
			total:total,
			onSelectPage:function( pageNumber, pageSize ) {
				currPage = pageNumber - 1;
				showList( mc_listContainer, getShowAry( ary_items, currPage, pageSize ) );
			}
		});
	}
	
	static function getShowAry( ary_item:Array<Item>, currPage:Int, pageSize:Int ) {
		var finalCount = ( currPage + 1 ) * pageSize;
		if ( finalCount > ary_item.length ) {
			return ary_item.slice( currPage * pageSize, ary_item.length );
		}else {
			return ary_item.slice( currPage * pageSize, currPage * pageSize + pageSize );
		}
	}
	
	static function showList( mc_listContainer:Dynamic, ary_item:Array<Item> ) {
		mc_listContainer.empty();
		ary_item.foreach( function( item ) {
			var img:Dynamic = untyped __js__( '$("<a><img></img></a>")' );
			img.attr( 'href', 'index.html?key=' + item.key );
			img.attr( 'target', '_blank' );
			img.find('img').attr( 'src', item.img );
			img.find('img').addClass( 'item' );
			img.find('img').addClass( 'hori' );
			mc_listContainer.append( img );
			return true;
		});
		
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