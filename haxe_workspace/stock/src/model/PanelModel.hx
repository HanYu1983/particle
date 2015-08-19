package model;

/**
 * ...
 * @author vic
 */
class PanelModel extends Model implements IPanel
{
	public static var ON_INIT = 'on_init';
	public static var ON_STOCKID_CHANGE = 'on_stockid_change';
	public static var ON_CHANGE_STOCK_SUCCESS = 'on_change_stock_success';
	public static var ON_OFFSET_CHANGE = 'on_offset_change';
	public static var ON_SHOWLINE_CHANGE = 'on_showline_change';
	public static var ON_ADD_PANEL = 'on_add_panel';
	public static var ON_REMOVE_PANEL = 'on_remove_panel';
	
	public var currentStockId(default, set):String;
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
	
	public function changeShow( id:Dynamic, type:String, show:Bool ):Void {
		var panelData:Dynamic = getPanelById( id );
		Reflect.setField( getPanelSubByType( panelData, type ) , 'show', show );
		notify( ON_SHOWLINE_CHANGE, { panelData:panelData } );
	}
	
	public function changeShowK( id:Dynamic, show:Bool ):Void {
		var panelData:Dynamic = getPanelById( id );
		panelData.data.type = show ? EType.kline : EType.none;
		notify( ON_SHOWLINE_CHANGE, { panelData:panelData } );
	}
	
	public function changeShowValue( id:Dynamic, type:String, value:Array<Int> ):Void {
		var panelData:Dynamic = getPanelById( id );
		var subObj:Dynamic = getPanelSubByType( panelData, type );
		subObj.value.n = value[0];
		subObj.value.m = value[1];
		subObj.value.o = value[2];
		subObj.value.p = value[3];
		notify( ON_SHOWLINE_CHANGE, { panelData:panelData } );
	}
	
	public function addPanel( id:Dynamic, data:Dynamic, ?extra:Dynamic ):Void{
		var obj = {
			id:id,
			data:data,
			needMove: data.type != EType.clock,
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
	
	override function init() 
	{
		super.init();
		
		var j = untyped __js__('$');
		
		var stock = config.stocks[0];
		currentStockId = stock.id;
		currentOffset = stock.offset;
		currentCount = stock.count;
		/*
		function parserSub( sub ):Array<Dynamic> {
			Lambda.foreach( sub, function( obj:Dynamic ) {
				obj.type = Type.createEnum( EProp, obj.type );
				return true;
			});
			return Lambda.array( sub );
		}
		*/
		Lambda.foreach( stock.lines, function( obj:Dynamic ) {
			obj.type = Type.createEnum( EType, obj.type );
			//obj.sub = parserSub( obj.sub );
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
	
	function getPanelById( id ) {
		return Lambda.find( ary_panel_obj, function( panelObj ) {
			return panelObj.id == id;
		});
	}
	
	function getPanelSubByType( panelData:Dynamic, type:String ) {
		return Lambda.find( panelData.data.sub, function( subObj ) {
			return subObj.type == type;
		});
	}
	
	function set_currentOffset( offset:Int ) {
		currentOffset = offset;
		if ( currentOffset < 0 ) currentOffset = 0;
		notify( ON_OFFSET_CHANGE, { stockId:currentStockId, offset:currentOffset } );
		return currentOffset;
	}
	
	function set_currentStockId( stockId:String ) {
		notify( ON_STOCKID_CHANGE, { stockId:stockId } );
		return currentStockId = stockId;
	}
}