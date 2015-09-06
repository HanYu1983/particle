package view;

import js.Browser;
import model.Model;
import view.component.FileView;

/**
 * ...
 * @author vic
 */
class FileController extends Model
{
	var fileview = new FileView();

	public function new() 
	{
		super();
		
	}
	
	override function init() 
	{
		super.init();
		
		fileview.config = {
			file:config.file_upload
		}
		
		fileview.config.file.on( 'change', handleUpload );
	}
	
	function handleUpload( elem ) {
		var elem:Dynamic = fileview.config.file[0];
		if ( elem.files && elem.files[0] ) {
			untyped __js__( 'loadImage.parseMetaData' )( elem.files[0], function (data) {
				var orientation = data.exif ? data.exif.get('Orientation') : 1;// 1 is keep orientation
				untyped __js__( 'loadImage' )( elem.files[0], function (img) {
					Browser.document.body.appendChild( img );
					var imgDom = Main.j( img );
					imgDom.addClass( 'textImg' );
					j('#mc_textContainer' ).prepend( imgDom );
				});
			});
		}
	}
}