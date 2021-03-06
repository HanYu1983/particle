package model;

/**
 * ...
 * @author vic
 */
class PanelModel extends Model
{
	public static var ON_INIT = 'on_init';
	public static var ON_STOCKID_CHANGE = 'on_stockid_change';
	public static var ON_CHANGE_STOCK_SUCCESS = 'on_change_stock_success';
	public static var ON_OFFSET_CHANGE = 'on_offset_change';
	public static var ON_COUNT_CHANGE = 'on_count_change';
	public static var ON_SHOWLINE_CHANGE = 'on_showline_change';
	public static var ON_ADD_PANEL = 'on_add_panel';
	public static var ON_REMOVE_PANEL = 'on_remove_panel';
	public static var ON_FAVOR_LIST_CHANGE = 'on_favor_list_change';
	public static var ON_LOGIN_CHANGE = 'on_login_change';
	public static var ON_PERIOD_CHANGE = 'ON_PERIOD_CHANGE';
	public static var ON_NOTE_CHANGE = 'ON_NOTE_CHANGE';
	
	public var currentStockId(default, set):String;
	public var currentOffset(default, set):Int = 0;
	public var currentCount(default, set):Int = 100;
	public var currentStockInfo( default, set ):Dynamic;
	public var currentFavor( default, set ):Dynamic;
	public var currentNote( default, set ):Dynamic;
//	public var currentLogin( default, set ):Bool;
//	public var currentFbId( default, set ):String;
	public var currentPeriod( default, set ):String;
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
	
	public function addPanel( id:Dynamic, data:Dynamic, ?extra:Dynamic ):Void {
		//add to model
		if ( extra.addToModel ) {
			var stock = getStockById( currentStockId );
			if ( stock == null ) {
				Main.slideMessage( '錯誤', '請先輸入股票代碼!' );
				return;
			}
			stock.lines.push( data );
		}
		
		var obj = {
			id:id,
			data:data,
			needMove: data.type != 'click',
			root:null //add by panelView
		};
		ary_panel_obj.push( obj );
		
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
	
	override function init() 
	{
		super.init();
		
		var j = untyped __js__('$');
		
		var stock = switch( config.current ) {
			case null:
				switch( config.stocks[0] ) {
					case null: 
						null;
					case stockobj:
						stockobj;
				}
			case sid:
				switch( getStockById( sid ) ) {
					case null:
						Main.createNewStock( sid );
					case stockobj:
						stockobj;
				}
		}
		
		if( stock != null )
			currentStockId = stock.id;
		
		notify( ON_INIT, { favorList:getFavorList()} );
	}
	
	public function setStockData( stock:Dynamic ):Void {
		config.current = stock.id;
		
		currentOffset = stock.offset;
		currentCount = stock.count;
		currentFavor = stock.favor;
		currentPeriod = stock.period;
	
		resetPanelData();
		
		Main.getStock( currentStockId, true ).done( function() {
			getStockInfoAndSet( true );
		});
	}
	
	public function getStockInfoAndSet( ?parser = false ) {
		if ( getStockById( currentStockId ) == null ) return;
		
		var periodCount = switch( currentPeriod ) {
			case 'd':1;
			case 'w':5;
			case 'm':20;
			case _:1;
		}
		
		Main.getStockInfo( currentStockId, periodCount ).done( function( err, data ) {
			var state = data[0];
			var dataInfo = data[1];//[[date open high low close volume]],
			var date = data[3];
			var stock = getStockById( currentStockId );
			
			currentStockInfo = dataInfo;
			maxCount = dataInfo.length;
			
			if( parser ){
				Lambda.foreach( stock.lines, function( obj:Dynamic ) {
					addPanel( obj.id, obj, {addToModel:false} );
					return true;
				});
			}
			
			notify( ON_STOCKID_CHANGE, { stock:stock } );
		});
	}
	
	function resetPanelData() {
		Lambda.foreach( ary_panel_obj, function( panelObj ) {
			notify( ON_REMOVE_PANEL, { id:panelObj.id } );
			return true;
		});
		ary_panel_obj = [];
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
	
	function getFavorList() {
		return Lambda.fold( config.stocks, function( stockobj, curr ) {
			if ( stockobj.favor ) curr.push( stockobj.id );
			return curr;
		}, []);
	}
	
	function set_currentOffset( offset:Int ) {
		if ( getStockById( currentStockId ) == null ) return currentOffset;
		currentOffset = offset;
		if ( currentOffset < 0 ) currentOffset = 0;
		else if ( currentOffset > maxCount - 1 ) currentOffset = maxCount - 1;
		getStockById( currentStockId ).offset = currentOffset; 
		notify( ON_OFFSET_CHANGE, { stockId:currentStockId, offset:currentOffset } );
		return currentOffset;
	}
	
	function set_currentCount( count:Int ) {
		currentCount = count;
		if ( currentCount < 0 ) currentCount = 0;
		notify( ON_COUNT_CHANGE, { stockId:currentStockId, count:currentCount } );
		getStockById( currentStockId ).count = currentCount; 
		return currentCount;
	}
	
	function set_currentStockId( stockId:String ) {
		currentStockId = stockId;
		setStockData( switch( getStockById( stockId ) ) {
			case null:
				var obj = Main.createNewStock( stockId );
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
	
	function set_currentStockInfo( info ) {
		return currentStockInfo = info;
	}
	
	function set_currentFavor( favor ) {
		if ( getStockById( currentStockId ) == null ) {
			return currentFavor = false;
		}
		getStockById( currentStockId ).favor = favor; 
		
		notify( ON_FAVOR_LIST_CHANGE, { favorList:getFavorList()} );
		
		return currentFavor = favor;
	}
	
	function set_currentNote( note ) {
		if ( getStockById( currentStockId ) == null ) {
			return currentNote = '';
		}
		getStockById( currentStockId ).note = note; 
		notify( ON_NOTE_CHANGE );
		return currentNote = note;
	}
	/*
	function set_currentFbId( fbid ) {
		currentFbId = fbid;
		notify( ON_LOGIN_CHANGE, { fbid:currentFbId } );
		return currentFbId;
	}
	*/
	function set_currentPeriod( period ) {
		if ( getStockById( currentStockId ) == null ) {
			return currentPeriod = 'd';
		}
		currentPeriod = period;
		getStockById( currentStockId ).period = period; 
		notify( ON_PERIOD_CHANGE, { period: currentPeriod } );
		return currentPeriod;
	}
}