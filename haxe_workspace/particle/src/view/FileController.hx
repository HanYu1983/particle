package view;

import js.Browser;
import js.html.Image;
import model.Model;
import view.component.FileView;

/**
 * ...
 * @author vic
 */
class FileController extends Model
{
	public static var ON_TEXTURE_CLICK = 'ON_TEXTURE_CLICK';
	public static var ON_BTN_REMOVE_TEXTURE_CLICK = 'ON_BTN_REMOVE_TEXTURE_CLICK';
	
	var fileview = new FileView();
	var mc_textContainer:Dynamic;
	var btn_removeTexture:Dynamic;
	var ary_images = new Array<Dynamic>();
	
	public function new() 
	{
		super();
		
	}
	
	public function focus( id:String ) {
		if( id == '' ) removeAllFocus();
		if ( getImage( id ) == null ) return;
		removeAllFocus();
		getImage( id ).addClass( 'outline' );
	}
	
	public function getImage( id:String ):Dynamic {
		return Lambda.find( ary_images, function( imgdom ) {
			return imgdom.attr( 'id' ) == id;
		});
	}
	
	public function addNewImage( img ) {
		Browser.document.body.appendChild( img );
		var imgDom:Dynamic = Main.j( img );
		imgDom.attr( 'id', Main.getId() );
		imgDom.addClass( 'textImg' );
		
		mc_textContainer.prepend( imgDom );
		
		ary_images.push( imgDom );
		Main.addTexture( imgDom.attr( 'id' ), imgDom[0] );
		
		addListener();
	}
	
	override function init() 
	{
		super.init();
		
		fileview.config = {
			file:config.file_upload
		}
		fileview.config.file.on( 'change', handleUpload );
		
		mc_textContainer = config.mc_textContainer;
		
		btn_removeTexture = config.btn_removeTexture;
		btn_removeTexture.click( function() {
			notify( ON_BTN_REMOVE_TEXTURE_CLICK );
		});
		
	}
	
	function removeAllFocus() {
		Lambda.foreach( ary_images, function( imgDom ) {
			imgDom.removeClass( 'outline' );
			return true;
		});
	}
	
	function handleUpload( elem ) {
		var elem:Dynamic = fileview.config.file[0];
		if ( elem.files && elem.files[0] ) {
			untyped __js__( 'loadImage.parseMetaData' )( elem.files[0], function (data) {
				var orientation = data.exif ? data.exif.get('Orientation') : 1;// 1 is keep orientation
				untyped __js__( 'loadImage' )( elem.files[0], function (img) {
					addNewImage( img );
					
				});
			});
		}
	}
	
	function addListener() {
		
		Lambda.foreach( ary_images, function( imgDom ) {
			imgDom.off( 'click' );
			imgDom.click( function( e ) {
				var jdom = Main.j( e.currentTarget );
				focus( jdom.attr( 'id' ));
				
				notify( ON_TEXTURE_CLICK, {textureId: jdom.attr( 'id' ) } );
			});
			return true;
		});
	}
}