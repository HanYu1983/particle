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
		
		if ( extra.addToModel ) {
			getStockById( currentStockId ).lines.push( data );
		}
		
		notify( ON_ADD_PANEL, {stockId:currentStockId, panelObj:obj } );
	}
	
	public function removePanel( id:Dynamic ) {
		Lambda.foreach( ary_panel_obj, function ( stockMap ) {
			if ( stockMap.id == id ) {
				ary_panel_obj.remove( stockMap );
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
		
		Lambda.foreach( stock.lines, function( obj:Dynamic ) {
			obj.type = Type.createEnum( EType, obj.type );
			return true;
		});
		
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
				var obj = createNewStock( stockId );
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
	
	function createNewStock( id ) {
		return {
			id:id,
			count:200,
			offset:0,
			lines:[
				{
					id:1,
					type:'kline',
					deletable:false,
					sub:[
						{
							show:true,
							type: 'ma', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 5,
								m: 10,
								o: 20, 
								p: 40,
								color: ''
							}
						},
						{
							show:false,
							type: 'ema', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 5,
								m: 10,
								o: 20, 
								p: 40,
								color: ''
							}
						},
						{
							show:false,
							type: 'bbi', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 12,
								m: 0,
								o: 0, 
								p: 0,
								color: ''
							}
						},
						{
							show:false,
							type: 'yu-sd', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 20,
								m: 0,
								o: 0, 
								p: 0,
								color: ''
							}
						},
						{
							show:false,
							type: 'yu-car', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 1,
								m: .005,
								o: .7, 
								p: 0,
								color: ''
							}
						},
						{
							show:false,
							type: 'kd', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 9,
								m: 1,
								o:3, 
								p:0,
								color: ''
							}
						},
						{
							show:false,
							type: 'macd', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 12,
								m: 26,
								o: 0, 
								p: 0,
								color: ''
							}
						},
						{
							show:false,
							type: 'Chaikin', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 3,
								m: 10,
								o: 9, 
								p: 0,
								color: ''
							}
						},
						{
							show:false,
							type: 'eom', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 14,
								m: 3,
								o: 0, 
								p: 0,
								color: ''
							}
						},
						{
							show:false,
							type: 'yu-clock', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin
							value: {
								n: 20,
								m: 20,
								o: 0, 
								p: 0,
								color: ''
							}
						},
						{
							show:false,
							type: 'yu-macd', // ma | ema | kd | macd | yu-clock | yu-sd | Chaikin | yu-macd | bbi | eom
							value: {
								n: 5,
								m: 12,
								o: 0, 
								p: 0,
								color: ''
							}
						}
					]
				}
			]
		}
	}
}