package view 
{
	import air.update.utils.FileUtils;
	import flash.desktop.NativeApplication;
	import flash.display.BitmapData;
	import flash.display.DisplayObject;
	import flash.display.DisplayObjectContainer;
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.events.IEventDispatcher;
	import flash.events.MouseEvent;
	import flash.filesystem.File;
	import flash.filesystem.FileMode;
	import flash.filesystem.FileStream;
	import flash.net.FileFilter;
	import flash.net.FileReference;
	import flash.net.FileReferenceList;
	import flash.utils.ByteArray;
	import mx.graphics.codec.JPEGEncoder;
	import spark.components.Button;
	
	/**
	 * ...
	 * @author vic
	 */
	public class UI extends EventDispatcher 
	{
		private var _ary_cardView:Array = [];
		
		public function UI( target:flash.events.IEventDispatcher=null ) 
		{
			super(target);
			
			addEventListener( 'browseFile', browseFile );
			addEventListener( 'appendCard', appendCard );
			
		}
		
		function browseFile( event:Event ):void {
			var f:FileReference = new FileReference();
			f.addEventListener( Event.SELECT, onFileSelect );
			f.browse( [ new FileFilter("*.txt","*.txt;*.json;") ]);
		}
		
		function appendCard( e:VicEvent ):void {
			var cardData = e.data.data;
			var template = e.data.template;
			
			cardData.info.forEach( function( card ) {
				var cardView = new template();
				cardView['txt_weapon_name'].text = "[武名]" + card.weapon.name;
				cardView['txt_weapon_level'].text = "[武等]" + card.weapon.level;
				cardView['txt_weapon_weight'].text = "[武重]" + card.weapon.weight;
				cardView['txt_weapon_power'].text = "[武力]" + card.weapon.power;
				cardView['txt_weapon_type'].text = "[武別]" + card.weapon.type;
				cardView['txt_skill_name'].text = "[技名]" + card.skill.name;
				cardView['txt_skill_type'].text = "[技別]" + card.skill.type;
				cardView['txt_skill_cost'].text = "[技耗]" + card.skill.cost;
				cardView['txt_skill_text'].text = "[技文]" + card.skill.text;
				cardView['txt_id'].text = card.id;
				cardView['data'] = card;
				_ary_cardView.push( cardView );
			} );
			
			
			outputMapping();
			outputImage();
			
			NativeApplication.nativeApplication.exit();
		}
		
		function outputMapping() {
			var output = {
				images:{}
			}
			_ary_cardView.forEach( function( cardView ) {
				var data:Object = cardView['data'];
				output.images[ data.id ] = 'fighter/' + data.id + '.jpg';
			});
			writeString( 'fighter', JSON.stringify( output ));
		}
		
		function outputImage() {
			_ary_cardView.forEach( function( cardView ) {
				drawCard( cardView );
			});
		}
		
		function drawCard( mc:DisplayObject ) {
			var bitmap:BitmapData = new BitmapData( mc.width, mc.height );
			bitmap.draw( mc );
			var jpeg:JPEGEncoder = new JPEGEncoder(80 );
			var bytes:ByteArray = jpeg.encode( bitmap );
			saveImage( mc['data'].id, bytes );
		}
		
		function saveImage( fileName:Object, bytes:ByteArray ) {
			var strem:FileStream = new FileStream();
			var path = File.desktopDirectory.url + '/cards_output/fighter/' + fileName + '.jpg';
			strem.open( new File( path ), FileMode.WRITE);
			strem.writeBytes( bytes );
			strem.close();
		}
		
		function writeString( fileName:Object, str:String ) {
			var strem:FileStream = new FileStream();
			var path = File.desktopDirectory.url + '/cards_output/' + fileName + '.json';
			strem.open( new File( path ), FileMode.WRITE);
			strem.writeUTFBytes( str );
			strem.close();
		}
		
		function onFileSelect( e:Event ) {
			var f:FileReference = e.currentTarget as FileReference;
			f.load();
			f.addEventListener(Event.COMPLETE, onFileUpload );
		}
		
		function onFileUpload( e:Event ) {
			var f:FileReference = e.currentTarget as FileReference;
			dispatchEvent( new VicEvent( 'onFlieUpload', JSON.parse( String( f.data ) )  ) );
		}
	}

}

/*

{
		"id":'',
		"type":"武具",
		"weapon":{
			"name":"長劍", 
			"level"]2, 
			"weight"]2, 
			"power"]3,
			"type":"劍"
		},
		"skill":{
			"name":"",
			"type":"",
			"cost":"",
			"text":""
		}
	},*/