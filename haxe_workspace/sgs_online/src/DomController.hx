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
	private var acc_leftPanel:Dynamic = new JQuery("#acc_leftPanel" );

	public function new(_uid:String="") 
	{
		super(_uid);
		
		AppConfig.screenWidth = dom_webgl.width();
		AppConfig.screenHeight = dom_webgl.height();
		
		/*
		dom_webgl.on( 'contextmenu', function( event ) {
			event.preventDefault();
			
			openDialogCommand(true, null);
		});
		*/
		acc_leftPanel.accordion( 'select', 1 );
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
	
	public function createCmdButton( val:Dynamic ){
		untyped __js__("window.createCmdButton")( val );
	}
	
	public function clearCmdButton(){
		untyped __js__("window.clearCmdbutton")();
	}
}