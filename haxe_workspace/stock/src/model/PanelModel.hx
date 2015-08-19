package model;

/**
 * ...
 * @author vic
 */
class PanelModel extends Model implements IPanel
{
	public static var ON_INIT = 'on_init';
	public static var ON_CHANGE_STOCK_SUCCESS = 'on_change_stock_success';
	public static var ON_OFFSET_CHANGE = 'on_offset_change';
	public static var ON_ADD_PANEL = 'on_add_panel';
	public static var ON_REMOVE_PANEL = 'on_remove_panel';
	
	public var currentStockId(default, default):String;
	public var currentOffset(default, set):Int = 0;
	public var currentCount(default, default):Int = 100;
	
	var ary_panel_obj = new Array<Dynamic>();
	

	public function new() 
	{
		super();
		
	}
	
	public function getAryPanel():Array<Dynamic> {
		return ary_panel_obj;
	}
	
	public function changeStockId( stockId:String ):Void {
		Main.getStock( stockId, true, function( params:Dynamic ) {
			notify( ON_CHANGE_STOCK_SUCCESS );
		});
	}
	
	function set_currentOffset( offset:Int ) {
		currentOffset = offset;
		if ( currentOffset < 0 ) currentOffset = 0;
		notify( ON_OFFSET_CHANGE, { stockId:currentStockId, offset:currentOffset } );
		return currentOffset;
	}
	
	public function addPanel( id:Dynamic, data:Dynamic, ?extra:Dynamic ):Void{
		var obj = {
			id:id,
			data:data,
			root:null //add by panelView
		};
		ary_panel_obj.push( obj );
		
		notify( ON_ADD_PANEL, {stockId:currentStockId, panelObj:obj } );
	}
	
	public function removePanel( id:Dynamic ) {
		Lambda.foreach( ary_panel_obj, function ( stockMap ) {
			if ( stockMap.id == id ) {
				ary_panel_obj.remove( stockMap );
				return true;
			}
			return false;
		});
		notify( ON_REMOVE_PANEL, { id:id } );
	}
	
	override function init() 
	{
		super.init();
		
		var j = untyped __js__('$');
		
		var stock = config.stocks[0];
		currentStockId = stock.id;
		currentOffset = stock.offset;
		currentCount = stock.count;
		
		function parserSub( sub ):Array<Dynamic> {
			Lambda.foreach( sub, function( obj:Dynamic ) {
				obj.type = Type.createEnum( EProp, obj.type );
				return true;
			});
			return Lambda.array( sub );
		}
		
		Lambda.foreach( stock.lines, function( obj:Dynamic ) {
			obj.type = Type.createEnum( EType, obj.type );
			obj.sub = parserSub( obj.sub );
			return true;
		});
			
		Main.getStock( currentStockId, true, function( params:Dynamic ) {
			
			Lambda.foreach( stock.lines, function( obj:Dynamic ) {
				addPanel( obj.id, obj );
				return true;
			});
			
			notify( ON_INIT, { 'stockId':currentStockId } );
		});
	}
	
	public function getSaveData():Dynamic {
		
		var output = {
			facebookId:config.facebookId,
			stocks:config.stocks
		}
		/*
		var stockobj:Dynamic = Lambda.find( output.stocks, function( obj ) {
			if ( obj.id == currentStockId ) return true;
			return false;
		});
		stockobj.lines = [];
		
		Lambda.map( ary_panel_obj, function( stockMap ) {
			stockobj.lines.push( {
				id:stockMap.id,
				type:Std.string( stockMap.type ),
			});
		});
		*/
		return output;
	}
}