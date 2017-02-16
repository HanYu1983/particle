package;
import js.Browser;
import js.JQuery;
import js.Lib;
using Lambda;
using Reflect;
/**
 * ...
 * @author vic
 */

class Main 
{
	public static var async:Dynamic = untyped __js__('async');
	
	public function new(){
		
		
		Browser.window.setField( 'onHtmlClick', onHtmlClick );
	}
	
	static function main() 
	{
		new Main();
	}		
	
	function createGame(){
		function gameStart( context:Dynamic ) {
			//trace( context );
			var app =  new AppController();
			app.context = context;
			app.start();
		}
		
		var waterFunc:Array<Dynamic> = [
			function ( cb:Dynamic ) {
				untyped __js__( "vic.tools.loadDAE" )( 'asset/scene.dae', function( dae:Dynamic ) {
					cb( null, {dae:dae});
				});
			},
			function ( context:Dynamic, cb:Dynamic ):Void {
				var ary_str = ['asset/sgs_desktop.jpg', 'asset/cardback3.png', 'asset/01030.jpg'];
				async.map( ary_str, function( path:String, cb:Dynamic ) {
					var t:Dynamic = untyped __js__("new THREE.TextureLoader" )();
					t.load(path, function( t:Dynamic ):Void {
						cb( null, t );
					});
				}, function(err:Dynamic, result:Dynamic ):Void {
					context.textures = result;
					cb( null, context );
				});
			}
		];
		
		async.waterfall( waterFunc, function( err, context ) {
			if ( err == null ) {
				gameStart( context );
			}
		});
	}
	
	function onHtmlClick( type:String, val:Dynamic ){
		switch( type ){
			case 'onGameStart':
				//trace( val );
				GameInfo.userName = val.user;
				GameInfo.roomData = val.room;
				//GameInfo.roomID = val.room.ID;
				createGame();
			case 'onCmdClick':
				GameInfo.pushCommand( val, function( err:Dynamic, val:Dynamic ){
					trace(err, val );
					
					GameInfo.tableInfo( function( err:Dynamic, val:Dynamic ){
						trace(err, val );
						
						if ( GameInfo.isMe( val ) ){
							GameInfo.collectCommand( function( err:Dynamic, val:Dynamic ){
								trace(err, val );
								if( err == null ) untyped __js__("window.createCmdButton")( val );
							});
						}else{
							untyped __js__("window.clearCmdbutton")();
						}
					});
				});
		}
	}
}
