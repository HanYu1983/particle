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
	public static var ON_COUNT_CHANGE = 'on_count_change';
	public static var ON_SHOWLINE_CHANGE = 'on_showline_change';
	public static var ON_ADD_PANEL = 'on_add_panel';
	public static var ON_REMOVE_PANEL = 'on_remove_panel';
	
	public var currentStockId(default, set):String;
	public var currentOffset(default, set):Int = 0;
	public var currentCount(default, set):Int = 100;
	public var maxCount(default, set ):Int;
	
	var ary_panel_obj = new Array<Dynamic>();

	public function new() 
	{
		super();
		
	}
	
	public function getAryPanel():Array<Dynamic> {
		return ary_panel_obj;
	}
	
	public function changeShow( id:Dynamic, type:String, show:Bool ):Void {
		var panelData:Dynamic = getPanelById( id );
		Reflect.setField( getPanelSubByType( panelData, type ) , 'show', show );
		notify( ON_SHOWLINE_CHANGE, { panelData:panelData } );
	}
	
	public function changeShowK( id:Dynamic, show:Bool ):Void {
		var panelData:Dynamic = getPanelById( id );
		panelData.data.type = show ? 'kline' : 'none';
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
			needMove: data.type != 'click',
			root:null //add by panelView
		};
		ary_panel_obj.push( obj );
		
		//add to model
		if ( extra.addToModel ) {
			getStockById( currentStockId ).lines.push( data );
		}
		
		notify( ON_ADD_PANEL, {stockId:currentStockId, panelObj:obj } );
	}
	
	public function removePanel( id:Dynamic ) {
		Lambda.foreach( ary_panel_obj, function ( stockMap ) {
			if ( stockMap.id == id ) {
				ary_panel_obj.remove( stockMap );
				
				//remove from model
				var ary_lines:Array<Dynamic> = getStockById( currentStockId ).lines;
				Lambda.foreach( ary_lines, function( obj ) {
					if ( obj == stockMap.data ) {
						ary_lines.remove( obj );
						return false;
					}
					return true;
				});
				return false;
			}
			return true;
		});
		notify( ON_REMOVE_PANEL, { id:id } );
	}
	
	public function getSaveData():Dynamic {
		
		var output = {
			facebookId:config.facebookId,
			stocks:config.stocks
		}
		
		return output;
	}
	
	override function init() 
	{
		super.init();
		
		var j = untyped __js__('$');
		
		var stock = config.stocks[0];
		if( stock != null )
			currentStockId = stock.id;
	}
	
	function resetPanelData() {
		Lambda.foreach( ary_panel_obj, function( panelObj ) {
			notify( ON_REMOVE_PANEL, { id:panelObj.id } );
			return true;
		});
		ary_panel_obj = [];
	}
	
	public function setStockData( stock:Dynamic ):Void {
		
		currentOffset = stock.offset;
		currentCount = stock.count;
	
		resetPanelData();
		
		Main.getStock( currentStockId, true ).pipe( Main.getStockInfo ).done( function( err, data ) {
			var state = data[0];
			var dataInfo = data[1];//[[date open high low close volume]],
			var date = data[3];
			
			maxCount = dataInfo.length;
			
			Lambda.foreach( stock.lines, function( obj:Dynamic ) {
				addPanel( obj.id, obj, {addToModel:false} );
				return true;
			});
			
			notify( ON_STOCKID_CHANGE, { stock:stock } );
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
	
	function getStockById( stockId:String ):Dynamic {
		return Lambda.find( config.stocks, function( obj ) {
			return obj.id == stockId;
		});
	}
	
	function set_currentOffset( offset:Int ) {
		currentOffset = offset;
		if ( currentOffset < 0 ) currentOffset = 0;
		else if ( currentOffset > maxCount - 100 ) currentOffset = maxCount - 100;
		notify( ON_OFFSET_CHANGE, { stockId:currentStockId, offset:currentOffset } );
		return currentOffset;
	}
	
	function set_currentCount( count:Int ) {
		currentCount = count;
		if ( currentCount < 50 ) currentCount = 50;
		notify( ON_COUNT_CHANGE, { stockId:currentStockId, count:currentCount } );
		return currentCount;
	}
	
	function set_currentStockId( stockId:String ) {
		currentStockId = stockId;
		setStockData( switch( getStockById( stockId ) ) {
			case null:
				var obj = Main.createNewStock( stockId, [
					['ma', true, 5, 10, 20, 40 ],
					['ema', false, 5, 10, 20, 40 ],
					['bbi', false, 3, 2, 6, 2 ],
					['yu-car', false, 1, .025, .7, 0 ],
					['sar', false, 3, 0, 0, 0 ],
					['osc', false, 10, 20, 0, 0 ],
					['rsi', false, 14, 9, 0, 0 ],
					['kd', false, 9, 3, 9, 0 ],
					['macd', false, 12, 26, 0, 0 ],
					['Chaikin', false, 3, 10, 9, 0 ],
					['eom', false, 14, 3, 9, 0 ],
					['yu-clock', false, 20, 20, 0, 0 ],
					['yu-macd', false, 5, 12, 0, 0 ]
				] );
				config.stocks.push( obj );
				obj;
			case o:
				o;
		});
		return currentStockId;
	}
	
	function set_maxCount( mcount ) {
		return maxCount = mcount;
	}
}