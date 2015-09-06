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
	public static var ON_TEXTURE_CLICK = 'ON_TEXTURE_CLICK';
	
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
					var imgDom:Dynamic = Main.j( img );
					imgDom.attr( 'id', Main.getId() );
					imgDom.addClass( 'textImg' );
					
					mc_textContainer.prepend( imgDom );
					
					ary_images.push( imgDom );
					Main.addTexture( imgDom.attr( 'id' ), imgDom[0] );
					
					addListener();
				});
			});
		}
	}
	
	function addListener() {
		Lambda.foreach( ary_images, function( imgDom ) {
			imgDom.off( 'click' );
			imgDom.click( function( e ) {
				var jdom = Main.j( e.currentTarget );
				notify( ON_TEXTURE_CLICK, {textureId: jdom.attr( 'id' ) } );
			});
			return true;
		});
	}
}