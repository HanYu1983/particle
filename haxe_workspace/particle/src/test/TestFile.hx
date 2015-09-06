package test;

import haxe.unit.TestCase;
import js.Browser;
import view.component.FileView;

/**
 * ...
 * @author vic
 */
class TestFile extends TestCase
{
	var file = new FileView();
	var j:Dynamic = untyped __js__('$');
	public function new() 
	{
		super();
		
		file.config = {
			file:j( '#file_upload' )
		}
		
	}
	
	function testEvent() {
		file.config.file.on( 'change', handleUpload );
	}
	
	function handleUpload( elem ) {
		var elem:Dynamic = file.config.file[0];
		if ( elem.files && elem.files[0] ) {
			untyped __js__( 'loadImage.parseMetaData' )( elem.files[0], function (data) {
				var orientation = data.exif ? data.exif.get('Orientation') : 1;// 1 is keep orientation
				untyped __js__( 'loadImage' )( elem.files[0], function (img) {
					Browser.document.body.appendChild( img );
					var imgDom = j( img );
					imgDom.addClass( 'textImg' );
					j('#mc_textContainer' ).prepend( imgDom );
				});
			});
		}
	}
}