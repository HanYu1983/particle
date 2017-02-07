package;
import js.Browser;
import js.JQuery;

/**
 * ...
 * @author vic
 */
class DomController extends BasicController 
{
	private var dia_command:Dynamic = new JQuery( "#dia_command" );
	private var dom_webgl:Dynamic = new JQuery("#webgl");

	public function new(_uid:String="") 
	{
		super(_uid);
		
		AppConfig.screenWidth = dom_webgl.width();
		AppConfig.screenHeight = dom_webgl.height();
		
		dom_webgl.on( 'contextmenu', function( event ) {
			event.preventDefault();
			
			openDialogCommand(true, null);
		});
	}
	
	public function openDialogCommand( open:Bool, config:Dynamic ){
		dia_command.dialog( open ? 'open' : 'close' );
	}
	
	public function setWebgl( dom:Dynamic ){
		dom_webgl.append( dom );
	}
	
	public function addWebglListener( event:String, action:Dynamic -> Void){
		dom_webgl.on( event, action );
	}
}