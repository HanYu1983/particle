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
	import flash.events.TimerEvent;
	import flash.filesystem.File;
	import flash.filesystem.FileMode;
	import flash.filesystem.FileStream;
	import flash.net.FileFilter;
	import flash.net.FileReference;
	import flash.net.FileReferenceList;
	import flash.utils.ByteArray;
	import flash.utils.SetIntervalTimer;
	import flash.utils.setTimeout;
	import flash.utils.Timer;
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
			dispatchEvent( new Event( 'startProgress' ));
			
			var cardData = e.data.data;
			var template = e.data.template;
			var outputUrl = e.data.outputUrl;
			var serverUrl = e.data.serverUrl;
			var packageName = e.data.packageName;
			
			cardData.forEach( function( card ) {
				var cardView = new template();
				switch( packageName ) {
					case 'fighter':
						cardView['txt_weapon_name'].text = card.Params.Wname;
						cardView['txt_weapon_level'].text = card.Params.Wlevel;
						cardView['txt_weapon_weight'].text = card.Params.Wweight;
						cardView['txt_weapon_power'].text = card.Params.Wpower;
						cardView['txt_weapon_type'].text = card.Params.Wtype;
						cardView['txt_skill_name'].text = card.Params.Sname;
						cardView['txt_skill_type'].text = card.Params.Stype;
						cardView['txt_skill_cost'].text = card.Params.Scost;
						cardView['txt_skill_text'].text = card.Params.Stext;
						break;
					case 'army':
						cardView['txt_v1'].text = card.Params.Ntype;
						cardView['txt_v2'].text = card.Params.Ctype;
						cardView['txt_v3'].text = card.Params.Name;
						cardView['txt_v4'].text = card.Params.Cost;
						cardView['txt_v5'].text = card.Params.Speed;
						cardView['txt_v6'].text = card.Params.Psky;
						cardView['txt_v7'].text = card.Params.Pland;
						cardView['txt_v8'].text = card.Params.Psoilder;
						cardView['txt_v9'].text = card.Params.Pcity;
						cardView['txt_v11'].text = card.Params.Ab1;
						cardView['txt_v12'].text = card.Params.Ab2;
						cardView['txt_v13'].text = card.Params.Ab3;
						cardView['txt_v14'].text = card.Params.Ab4;
						cardView['txt_v15'].text = card.Params.Ab5;
						cardView['txt_v10'].text = card.Params.Text;
						
						switch( card.Params.Ntype ) {
							case '資本':cardView['mc_ntype'].gotoAndStop( 1 ); break;
							case '共產':cardView['mc_ntype'].gotoAndStop( 2 ); break;
							case '第三世界':cardView['mc_ntype'].gotoAndStop( 3 ); break;
						}
						
						switch( card.Params.Ctype ) {
							case '部隊':cardView['mc_ctype'].gotoAndStop( 1 ); break;
							case '建築':cardView['mc_ctype'].gotoAndStop( 2 ); break;
							case '戰術':cardView['mc_ctype'].gotoAndStop( 3 ); break;
						}
						
						break;
				}
				cardView['txt_id'].text = card.Id;
				cardView['data'] = card;
				_ary_cardView.push( cardView );
			} );
			
			var t:Timer = new Timer( 100 );
			t.addEventListener( TimerEvent.TIMER, function( e:Event ) {
				outputMapping( outputUrl, serverUrl, packageName );
				outputImage( outputUrl, packageName );
				t = null;
			});
			t.start();
		}
		
		function outputMapping( root:String, serverUrl:String, packageName:String ) {
			var output = {
				images:{}
			}
			
			_ary_cardView.forEach( function( cardView ) {
				var data:Object = cardView['data'];
				output.images[ data.Id ] = serverUrl + packageName + '/' + data.Id + '.jpg';
			});
			writeString( root, packageName, JSON.stringify( output ));
		}
		
		function outputImage( root:String, packageName:String ) {
			_ary_cardView.forEach( function( cardView ) {
				drawCard( root, packageName, cardView );
			});
			
			dispatchEvent( new Event( 'stopProgress' ));
		}
		
		function drawCard( root:String, packageName:String, mc:DisplayObject ) {
			var bitmap:BitmapData = new BitmapData( mc.width, mc.height );
			bitmap.draw( mc );
			var jpeg:JPEGEncoder = new JPEGEncoder(80 );
			var bytes:ByteArray = jpeg.encode( bitmap );
			saveImage( root, packageName, mc['data'].Id, bytes );
		}
		
		function saveImage( root:String, packageName:String, fileName:Object, bytes:ByteArray ) {
			var strem:FileStream = new FileStream();
			var path = root + packageName + '/' + fileName + '.jpg';
			strem.open( new File( path ), FileMode.WRITE);
			strem.writeBytes( bytes );
			strem.close();
		}
		
		function writeString( root:String, fileName:Object, str:String ) {
			var strem:FileStream = new FileStream();
			var path = root + fileName + '.json';
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