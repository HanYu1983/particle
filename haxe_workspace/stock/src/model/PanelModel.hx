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
	
	public function addPanel( id:Dynamic, root:Dynamic, canvas:Dynamic, type:EType, needMove:Bool, props ) {
		var obj = {
			id:id,
			canvas:canvas,
			needMove:needMove,
			type:type,
			root:root,
			props:props
		};
		ary_panel_obj.push( obj );
		
		switch( id ) {
			case i if ( i < 3 ):
				trace( id );
			case _:
				trace( id );
				notify( ON_ADD_PANEL, obj );
		}
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
		
		var j = untyped __js__('$');
		Lambda.map( config.panel, function( obj ) {
			switch( obj.id ) {
				case 0:
					addPanel( obj.id, null, j( '#canvas_clock' ), EType.clock, false, null );
				case 1:
					addPanel( obj.id, j('#mc_exchange' ), j( '#canvas_exchange' ), EType.volume, true, [ { type:EProp.avg, value:1, show:false }, { type:EProp.kd, value:2, show:true } ] );
				case 2:
					addPanel( obj.id, j('#mc_kline' ), j( '#canvas_kline' ), EType.kline, true, [ { type:EProp.avg, value:1, show:false }, { type:EProp.kd, value:2, show:true } ] );
				case _:
					//addPanel( obj.id, j('#mc_kline' ), j( '#canvas_kline' ), EType.kline, true, [ { type:EProp.avg, value:1, show:false }, { type:EProp.kd, value:2, show:true } ] );
			}
		});
		
	}
}