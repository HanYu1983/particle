package model;

/**
 * ...
 * @author vic
 */
class PanelModel extends Model
{
	var ary_panel_obj = new Array<Dynamic>();

	public function new() 
	{
		super();
		
	}
	
	public function addPanel( id:Dynamic, root:Dynamic, canvas:Dynamic, type:EType, needMove:Bool, props ) {
		ary_panel_obj.push({
			id:id,
			canvas:canvas,
			needMove:needMove,
			type:type,
			root:root,
			props:props
		});
	}
	
	public function removePanel( id:Dynamic ) {
		Lambda.foreach( ary_panel_obj, function ( stockMap ) {
			if ( stockMap.id == id ) {
				ary_panel_obj.remove( stockMap );
				return true;
			}
			return false;
		});
	}
	
	override function init() 
	{
		super.init();
		
		Lambda.map( 
		
		trace( config );
	}
}