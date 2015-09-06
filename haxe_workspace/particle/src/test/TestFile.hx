package test;

import haxe.unit.TestCase;
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
		file.config.file.on('uploadStart', function (event) {
			var fileName = event.args.file;
		//	trace( event.args );
		//	trace( fileName );
			// Your code here.
		}); 
		
		file.config.file.on('uploadEnd', function (event) {
			var args = event.args;
			var fileName = args.file;
			var serverResponce = args.response;
			
			trace( args );
			// Your code here.
		});
	}
	
}