package model;

/**
 * ...
 * @author vic
 */
class PanelModel extends Model
{
	public static var ON_ADD_PANEL = 'on_add_panel';
	
	var ary_panel_obj = new Array<Dynamic>();

	public function new() 
	{
		super();
		
	}
	
	public function addPanel( id:Dynamic, type:EType, needMove:Bool, props ) {
		var obj = {
			id:id,
			needMove:needMove,
			type:type,
			props:props,
			root:null //add by panelView
		};
		ary_panel_obj.push( obj );
		
		notify( ON_ADD_PANEL, obj );
		/*
		switch( id ) {
			case i if ( i < 3 ):
			case _:
				notify( ON_ADD_PANEL, obj );
		}*/
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
	
	override public function execute(type:String, ?params:Dynamic):Dynamic 
	{
		switch( type ) {
			case 'getAry':
				return ary_panel_obj;
			case _:
				return null;
		}
	}
	
	override function init() 
	{
		super.init();
		
		var j = untyped __js__('$');
		Lambda.map( config.panel, function( obj ) {
			switch( obj.id ) {
				case 0:
					addPanel( obj.id, EType.clock, false, null );
				case 1:
					addPanel( obj.id, EType.volume, true, [ { type:EProp.avg, value:1, show:false }, { type:EProp.kd, value:2, show:true } ] );
				case 2:
					addPanel( obj.id, EType.kline, true, [ { type:EProp.avg, value:1, show:false }, { type:EProp.kd, value:2, show:true } ] );
				case _:
					addPanel( obj.id, EType.kline, true, [ { type:EProp.avg, value:1, show:false }, { type:EProp.kd, value:2, show:true } ] );
			}
		});
		
	}
}