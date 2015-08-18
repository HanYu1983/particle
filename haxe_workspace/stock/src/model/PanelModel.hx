package model;

/**
 * ...
 * @author vic
 */
class PanelModel extends Model
{
	public static var ON_INIT = 'on_init';
	public static var ON_ADD_PANEL = 'on_add_panel';
	public static var ON_REMOVE_PANEL = 'on_remove_panel';
	
	var ary_panel_obj = new Array<Dynamic>();
	var currentStockId = null;

	public function new() 
	{
		super();
		
	}
	
	public function addPanel( id:Dynamic, type:EType, needMove:Bool, props ) {
		var obj = {
			'id':id,
			'needMove':needMove,
			'type':type,
			'props':props,
			'root':null //add by panelView
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
		notify( ON_REMOVE_PANEL, { id:id } );
	}
	
	override public function execute(type:String, ?params:Dynamic):Dynamic 
	{
		switch( type ) {
			case 'getAry':
				return ary_panel_obj;
			case 'addPanel':
				addPanel( params.id, params.type, params.needMove, params.props );
				return null;
			case 'removePanel':
				removePanel( params.id );
				return null;
			case 'getSaveData':
				return getSaveData();
			case _:
				return null;
		}
	}
	
	override function init() 
	{
		super.init();
		
		var j = untyped __js__('$');
		
		Lambda.map( config.stocks[0].lines, function( obj ) {
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
		
		currentStockId = config.stocks[0].id;
		notify( ON_INIT, { 'stockId':currentStockId } );
	}
	
	function getSaveData():Dynamic {
		var output = {
			facebookId:config.facebookId,
			stocks:config.stocks
		}
		
		var stockobj:Dynamic = Lambda.find( output.stocks, function( obj ) {
			if ( obj.id == currentStockId ) return true;
			return false;
		});
		stockobj.lines = [];
		trace( stockobj );
		
		
		Lambda.map( ary_panel_obj, function( stockMap ) {
			trace( stockMap );
			output.stocks.push( {
				
			});
		});
		
		
		/*
		panelModel.config = {
			facebookId:'12233',
			stocks:[
				{
					id:'2330',
					kline:[
						{
							id:0,
							type:'clock',
							sub:[
								{t: "ma", d: {n: 5, color: "blue"}}, 
								{t: "ma", d: {n: 10, color: "yellow"}} 
							]
						},
						{
							id:1,
							type:'volume',
							sub:[
								{t: "ma", d: {n: 5, color: "blue"}}, 
								{t: "ma", d: {n: 10, color: "yellow"}} 
							]
						},
						{
							id:2,
							type:'kline',
							sub:[
								{t: "ma", d: {n: 5, color: "blue"}}, 
								{t: "ma", d: {n: 10, color: "yellow"}} 
							]
						},
						{
							id:3,
							type:'kline',
							sub:[
								{t: "ma", d: {n: 5, color: "blue"}}, 
								{t: "ma", d: {n: 10, color: "yellow"}} 
							]
						},
						{
							id:4,
							type:'kline',
							sub:[
								{t: "ma", d: {n: 5, color: "blue"}}, 
								{t: "ma", d: {n: 10, color: "yellow"}} 
							]
						}
					]
				}
			]
		};
		
		*/
		return null;
	}
}