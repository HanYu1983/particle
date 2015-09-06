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
	var mc_textContainer:Dynamic;
	var ary_images = new Array<Dynamic>();

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
		
		mc_textContainer = config.mc_textContainer;
		
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
					
					mc_textContainer.prepend( imgDom );
					
					var imgobj = {
						id:Main.getId(),
						dom:imgDom
					}
					
					ary_images.push( imgobj );
					Main.addTexture( imgobj.id, imgobj.dom );
					
					addListener();
				});
			});
		}
	}
	
	function addListener() {
		Lambda.foreach( ary_images, function( imgobj ) {
			trace( imgobj );
			imgobj.dom.off( 'click' );
			imgobj.dom.click( function( e ) {
				var dom = e.currentTarget;
				trace( dom );
			});
			return true;
		});
	}
}