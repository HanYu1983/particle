package view 
{
	import air.update.utils.FileUtils;
	import flash.desktop.NativeApplication;
	import flash.display.Bitmap;
	import flash.display.BitmapData;
	import flash.display.DisplayObject;
	import flash.display.DisplayObjectContainer;
	import flash.display.Loader;
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.events.IEventDispatcher;
	import flash.events.IOErrorEvent;
	import flash.events.MouseEvent;
	import flash.events.TimerEvent;
	import flash.filesystem.File;
	import flash.filesystem.FileMode;
	import flash.filesystem.FileStream;
	import flash.net.FileFilter;
	import flash.net.FileReference;
	import flash.net.FileReferenceList;
	import flash.net.URLRequest;
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
		private var _ary_imgPool:Object = { };
		
		public function UI( target:flash.events.IEventDispatcher=null ) 
		{
			super(target);
			
			addEventListener( 'browseFile', browseFile );
			addEventListener( 'appendCard', appendCard );
			addEventListener( 'setImgPool', setImgPool );
			
		}
		
		function browseFile( event:Event ):void {
			var f:FileReference = new FileReference();
			f.addEventListener( Event.SELECT, onFileSelect );
			f.browse( [ new FileFilter("*.txt","*.txt;*.json;") ]);
		}
		
		function setImgPool( e:VicEvent):void {
			_ary_imgPool = e.data;
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
						cardView['txt_type'].text = card.Params.Ctype;
						if ( card.Params.Atype != null ) {
							cardView['txt_type'].text += '-' + card.Params.Atype;
						}
						
						switch( card.Params.Speed ) {
							case '0':cardView['mc_speed'].gotoAndStop( 1 ); break;
							case '1':cardView['mc_speed'].gotoAndStop( 2 ); break;
							case '2':cardView['mc_speed'].gotoAndStop( 3 ); break;
							case '3':cardView['mc_speed'].gotoAndStop( 4 ); break;
							case '4':cardView['mc_speed'].gotoAndStop( 5 ); break;
						}
						
						switch( card.Params.Psky ) {
							case '精通': cardView['mc_sky'].gotoAndStop( 1 ); break;
							case '抵抗': cardView['mc_sky'].gotoAndStop( 2 ); break;
							case '不可': cardView['mc_sky'].gotoAndStop( 3 ); break;
						}
						
						switch( card.Params.Pland ) {
							case '精通': cardView['mc_land'].gotoAndStop( 1 ); break;
							case '抵抗': cardView['mc_land'].gotoAndStop( 2 ); break;
							case '不可': cardView['mc_land'].gotoAndStop( 3 ); break;
						}
						
						switch( card.Params.Psoilder ) {
							case '精通': cardView['mc_soilder'].gotoAndStop( 1 ); break;
							case '抵抗': cardView['mc_soilder'].gotoAndStop( 2 ); break;
							case '不可': cardView['mc_soilder'].gotoAndStop( 3 ); break;
						}
						
						switch( card.Params.Pcity ) {
							case '精通': cardView['mc_city'].gotoAndStop( 1 ); break;
							case '抵抗': cardView['mc_city'].gotoAndStop( 2 ); break;
							case '不可': cardView['mc_city'].gotoAndStop( 3 ); break;
						}
						
						switch( card.Params.Ntype ) {
							case '資本':cardView['mc_ntype'].gotoAndStop( 1 ); break;
							case '共產':cardView['mc_ntype'].gotoAndStop( 2 ); break;
							case '人民':cardView['mc_ntype'].gotoAndStop( 3 ); break;
							case '無':cardView['mc_ntype'].gotoAndStop( 4 ); break;
						}
						
						cardView['txt_content'].text = card.Params.Ab1 + ' ' + card.Params.Ab2 + ' ' + card.Params.Ab3 + ' ' + card.Params.Ab4 + ' ' + card.Params.Ab5;
						cardView['txt_content'].text += '\n';
						cardView['txt_content'].text += card.Params.Text;
						
						cardView['txt_name'].text = card.Params.Name;
						cardView['txt_cost'].text = card.Params.Cost;
						
						if( card.Params.Nation != null ){
							switch( card.Params.Nation ) {
								case '中國': cardView['mc_flag'].gotoAndStop( 2 ); break;
								case '美國': cardView['mc_flag'].gotoAndStop( 3 ); break;
								case '德國': cardView['mc_flag'].gotoAndStop( 5 ); break;
								case '英國': cardView['mc_flag'].gotoAndStop( 6 ); break;
								case '以色列': cardView['mc_flag'].gotoAndStop( 4 ); break;
								default: cardView['mc_flag'].gotoAndStop( 1 ); break;
							}
						}else {
							cardView['mc_flag'].gotoAndStop( 1 ); break;
						}
						
						switch( card.Params.Ctype ) {
							case '部隊':
								if( card.Params.Atype != null ){
									switch( card.Params.Atype ) {
										case '戰鬥機':
											cardView['mc_ctype'].gotoAndStop( 1 ); break;
										case '攻擊機':
											cardView['mc_ctype'].gotoAndStop( 1 ); break;
										case '戰鬥攻擊機':
											cardView['mc_ctype'].gotoAndStop( 1 ); break;
										case '戰略轟炸機':
											cardView['mc_ctype'].gotoAndStop( 1 ); break;
										case '支援機':
											cardView['mc_ctype'].gotoAndStop( 1 ); break;
										case '直升機':
											cardView['mc_ctype'].gotoAndStop( 1 ); break;
										case '坦克':
											cardView['mc_ctype'].gotoAndStop( 2 ); break;
										case '裝甲車':
											cardView['mc_ctype'].gotoAndStop( 2 ); break;
										case '士兵':
											cardView['mc_ctype'].gotoAndStop( 3 ); break;
										case '對空炮':
											cardView['mc_ctype'].gotoAndStop( 2 ); break;
										case '自走炮':
											cardView['mc_ctype'].gotoAndStop( 2 ); break;
										case '戰略火炮':
											cardView['mc_ctype'].gotoAndStop( 2 ); break;
										
									}
								}else {
									cardView['mc_ctype'].gotoAndStop( 1 ); break;
								}
								break;
							case '建築':
								cardView['mc_ctype'].gotoAndStop( 4 ); 
								break;
							case '戰術':
								cardView['mc_ctype'].gotoAndStop( 5 ); 
								cardView['mc_speed'].visible = false;
								cardView['mc_sky'].visible = false;
								cardView['mc_land'].visible = false;
								cardView['mc_soilder'].visible = false;
								cardView['mc_city'].visible = false;
								break;
						}
						break;
				}
				
				cardView['txt_id'].text = card.Id;
				if ( _ary_imgPool[card.Id] != null ) {
					cardView['mc_img'].addChild( _ary_imgPool[card.Id] );
				}
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