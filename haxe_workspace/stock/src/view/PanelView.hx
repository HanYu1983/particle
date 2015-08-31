package view;

import haxe.Timer;
import model.Model;
import model.PanelModel;

/**
 * ...
 * @author vic
 */
class PanelView extends Model
{
	public static var ON_SLT_STOCKID_CHANGE = 'on_stockid_change';
	public static var ON_BTN_CONTROLLER_CLICK = 'on_offset_change';
	public static var ON_TXT_SHOWLINE_VALUE_CHANGE = 'on_showline_value_change';
	public static var ON_SWB_SHOWLINE_CHANGE = 'on_showline_change';
	public static var ON_SWB_SHOWKLINE_CHANGE = 'on_showline_k_change';
	public static var ON_SWB_FAVOR_CHANGE = 'on_favor_change';
	public static var ON_BTN_ADDPANEL_CLICK = 'on_btn_addPanel_click';
	public static var ON_BTN_REMOVEPANEL_CLICK = 'on_btn_removePanel_click';
	public static var ON_BTN_LOGIN_CLICK = 'on_btn_login_click';
	public static var ON_BTN_LOGOUT_CLICK = 'on_btn_logout_click';
	public static var ON_BTN_SAVE_CLICK = 'ON_BTN_SAVE_CLICK';
//	public static var ON_BTN_LOADPRICE_CLICK = 'on_btn_loadPrice_click';
	public static var ON_TXT_OFFSET_CHANGE = 'on_txt_offset_change';
	public static var ON_TXT_COUNT_CHANGE = 'on_txt_count_change';
	public static var ON_TXT_NOTE_CHANGE = 'on_txt_note_change';
	public static var ON_COMBO_FAVOR_CHANGE = 'on_combo_favor_change';
	public static var ON_COMBO_PREFER_CHANGE = 'ON_COMBO_PREFER_CHANGE';
	
	var j:Dynamic = untyped __js__('$');
	
	var doc:Dynamic;
	var body:Dynamic;
	var tmpl_panel:Dynamic;
	var slt_stockId:Dynamic;
	var swb_favor:Dynamic;
	var combo_favor:Dynamic;
	var combo_prefer:Dynamic;
	var mc_accordionContainer:Dynamic;
	var btn_controller:Dynamic;
	var btn_addPanel:Dynamic;
	var btn_login:Dynamic;
	var btn_logout:Dynamic;
	var btn_save:Dynamic;
	var btn_about:Dynamic;
	//var btn_loadPrice:Dynamic;
	var table_stockPrice:Dynamic;
	var txt_count:Dynamic;
	var txt_offset:Dynamic;
	var txt_note:Dynamic;
	var dia_about:Dynamic;
	var currentScrollX:Int = null;
	
	public function new() 
	{
		super();
		
	}
	
	override function init() 
	{
		super.init();
		
		doc = config.doc;
		doc.keydown( onKeyDown );
		doc.keyup( onKeyUp );
		
		body = config.body;
		body.find( '.easyui-tooltip' ).tooltip( {
			position:'right',
			onShow:function( e ) {
				var self = j( e.currentTarget );
				var hoverInfo = untyped __js__( 'app.config.hoverInfo' );
				var hoverstr = switch( Reflect.field( hoverInfo, self.attr( 'id' ) ) ) {
					case null:Reflect.field( hoverInfo, 'default' );
					case hstr:hstr;
				}
				self.tooltip( 'update', hoverstr );
			}
		});
		
		mc_accordionContainer = config.mc_accordionContainer;
		mc_accordionContainer.accordion();
		
		tmpl_panel = config.tmpl_panel;
		
		btn_addPanel = config.btn_addPanel;
		btn_addPanel.click( function( e ) {
			notify( ON_BTN_ADDPANEL_CLICK );
		});
		
		btn_login = config.btn_login;
		btn_login.click( function() {
			notify( ON_BTN_LOGIN_CLICK );
		});
		
		btn_logout = config.btn_logout;
		btn_logout.click( function() {
			notify( ON_BTN_LOGOUT_CLICK );
		});
		
		/*
		btn_loadPrice = config.btn_loadPrice;
		btn_loadPrice.click( function( e ) {
			notify( ON_BTN_LOADPRICE_CLICK );
		});
		*/
		txt_offset = config.txt_offset;
		txt_offset.textbox( {
			value:0,
			onChange:function(newValue, oldValue) {
				notify( ON_TXT_OFFSET_CHANGE, { offset:Std.parseInt( newValue ) } );
			}
		});
		
		txt_count = config.txt_count;
		txt_count.textbox( {
			value:200,
			onChange:function(newValue, oldValue) {
				notify( ON_TXT_COUNT_CHANGE, { count:Std.parseInt( newValue ) } );
			}
		});
		
		txt_note = config.txt_note;
		txt_note.textbox( {
			onChange:function( newv, oldv ) {
				notify( ON_TXT_NOTE_CHANGE, { note:newv } );
			}
		});
		
		txt_note.parent().focusin( function() {
			doc.off( 'keydown' );
			doc.off( 'keyup' );
		});
		
		txt_note.parent().focusout( function() {
			doc.keydown( onKeyDown );
			doc.keyup( onKeyUp );
		});
		
		slt_stockId = config.slt_stockId;
		slt_stockId.textbox( {
			onChange:function(newValue, oldValue) {
				var stockId = newValue;
				if ( stockId.length != 4 ) return;
				notify( ON_SLT_STOCKID_CHANGE, { 'stockId':stockId } );
			}
		});
		
		swb_favor = config.swb_favor;
		swb_favor.switchbutton( {
			onChange:function( checked ) {
				notify( ON_SWB_FAVOR_CHANGE, { favor:checked } );
			}
		});
		
		combo_favor = config.combo_favor;
		combo_favor.combobox( {
			onSelect:function( record ) {
				var value = record.value;
				if ( value == '' ) return;
				notify( ON_COMBO_FAVOR_CHANGE, { stockId:value } );
			}
		});
		
		combo_prefer = config.combo_prefer;
		combo_prefer.append( '<option value=""><option>' );
		Lambda.foreach( untyped __js__('app.config.preferStocks' ), function( ary ) {
			combo_prefer.append( '<option value="' + ary[0] + '">' + ary[0] + ' ' + ary[1] + '<option>' );
			return true;
		});
		combo_prefer.combobox( {
			onSelect:function( record ) {
				var value = record.value;
				if ( value == '' ) return;
				notify( ON_COMBO_PREFER_CHANGE, { stockId:value } );
			}
		});
		
		btn_controller = config.btn_controller;
		btn_controller.delegate( '.btn_controller', 'click', function( e ) {
			var target = e.currentTarget;
			var id = j( target ).attr( 'id' );
			switch( id ) {
				case 'btn_first':
					notify( ON_BTN_CONTROLLER_CLICK, { value:-10000 } );
				case 'btn_prev10':
					notify( ON_BTN_CONTROLLER_CLICK, { value:-20 } );
				case 'btn_prev':
					notify( ON_BTN_CONTROLLER_CLICK, { value:-1 } );
				case 'btn_next':
					notify( ON_BTN_CONTROLLER_CLICK, { value:1 } );
				case 'btn_next10':
					notify( ON_BTN_CONTROLLER_CLICK, { value:20 } );
				case 'btn_last':
					notify( ON_BTN_CONTROLLER_CLICK, { value:10000 } );
			}
		});
		
		dia_about = config.dia_about;
		dia_about.attr( 'isOpen', 0 );
		dia_about.dialog( {
			closed:true,
			onClose:function() {
				dia_about.attr( 'isOpen', 0 );
			}
		});
		
		btn_about = config.btn_about;
		btn_about.click( function() {
			if ( dia_about.attr( 'isOpen' ) == 1) {
				dia_about.dialog( 'close' );
				dia_about.attr( 'isOpen', 0 );
			}else {
				dia_about.dialog( 'open' );
				dia_about.attr( 'isOpen', 1 );
			}
		});
		
		btn_save = config.btn_save;
		btn_save.click( function() {
			notify( ON_BTN_SAVE_CLICK );
		});
		btn_save.linkbutton();
		
		table_stockPrice = config.table_stockPrice;
	}
	
	public function initPanel( model:Dynamic, stock:Dynamic, stockInfo:Dynamic ):Void {
		//trace( stock );
		
		var stockId = stock.id;
		var offset = stock.offset;
		var count = stock.count;
		var favor = stock.favor;
		var note = stock.note;
		
		setTxtStockId( stockId );
		setTxtNote( note );
		
		swb_favor.switchbutton( {
			checked:favor
		});
		
		changeOffset( offset );
		changeCount( count );
	}
	
	public function setSavable( savable ) {
		if ( savable ) {
			btn_save.linkbutton('enable');
		}else {
			btn_save.linkbutton('disable');
		}
	}
	
	public function setLogin( login:Bool ) {
		if ( login ) {
			btn_login.hide();
			btn_logout.show();
		}else {
			btn_login.show();
			btn_logout.hide();
		}
	}
	
	public function setTxtStockId( stockId:String ):Void {
		//用這個下法才不會trigger事件出來
		slt_stockId.textbox( {
			value:stockId
		});
	}
	
	public function setTxtNote( note:String ):Void {
		txt_note.textbox( {
			value:note
		});
	}
	
	public function setFavorsSelect( favors:Array<String> ):Void {
		combo_favor.empty();
		combo_favor.append( '<option value="999"><option>' );
		Lambda.foreach( favors, function( str ) {
			combo_favor.append( '<option value="' + str + '">' + str + '<option>' );
			return true;
		});
		combo_favor.combobox();
	}
	
	public function drawPrice( stockInfo:Dynamic, offset:Int = 0 ):Void {
		
		if ( stockInfo == null ) {
			return ;
		}
		
		//btn_loadPrice.parent().parent().hide();
		var eid = switch( offset + 1 ) {
			case o if ( o > stockInfo.length ):
				stockInfo.length;
			case o:
				o;
		}
		
		var oldrow = table_stockPrice.datagrid( 'getRows' ).length;
		while ( oldrow > 0 ) 
			table_stockPrice.datagrid( 'deleteRow', --oldrow );
		
		Lambda.foreach( stockInfo.slice( offset, eid ), function( obj ) {
			table_stockPrice.datagrid( 'appendRow', {
				date:obj[0],
				start:obj[1],
				top:obj[2],
				bottom:obj[3],
				close:obj[4],
				volume:obj[5]
			});
			return true;
		});
	}
	
	public function changeOffset( offset:Int ):Void {
		//用這個下法才不會trigger事件出來
		var oldv = txt_offset.textbox( 'getValue' );
		if ( oldv != offset ) {
			txt_offset.textbox( {
				value:Std.string( offset )
			});
		}
	}
	
	public function changeCount( count:Int ):Void {
		//用這個下法才不會trigger事件出來
		txt_count.textbox( {
			value:Std.string( count )
		});
	}
	
	public function addPanel( stockId:String, offset:Int, count:Int, panelData:Dynamic ):Void {
		
		var stockData = panelData.data;
		var id = stockData.id;
		var type = stockData.type;
		var props = stockData.sub;
		var deletable = stockData.deletable;
		
		var dom:Dynamic = tmpl_panel.tmpl( {id:id, type:type, deletable:deletable } );
		mc_accordionContainer.accordion('add', {
			id:'k_' + id,
			title: '線圖: ' + id,
			content: dom,
			selected: true
		});
		panelData.root = dom;
		
		//resize canvas
		
		if ( type != 'clock' ) {
			var cw = untyped __js__('leo.utils.getScreenWidth' )();
			trace( dom.find( 'canvas' ).parent().width() );
			dom.find( 'canvas' ).attr( 'width', cw - 50 );
		}
		
		if ( type == 'kline' || type == 'none' ){
			dom.find( '#slt_showKline' ).switchbutton( {
				checked:type == 'kline',
				onChange:function( checked ) {
					notify( ON_SWB_SHOWKLINE_CHANGE, { id:panelData.id, show:checked } );
				}
			});
		}
		
		dom.find( '#btn_removePanel' ).click( function() {
			notify( ON_BTN_REMOVEPANEL_CLICK, { id:panelData.id } );
		});
		
		if( props != null )
			createProp( dom.find( '#mc_propContainer' ), props, panelData );
		
		
		drawCanvas( stockId, offset, count, panelData );
	}
	
	public function removePanel( id:String ):Void {
		var deleteName = '線圖: ' + id;
		mc_accordionContainer.accordion( 'remove', deleteName );
	}
	
	public function drawCanvas( stockId:String, offset:Int, count:Int, panelData:Dynamic ):Void {
		Main.drawStock( panelData.root.find( '#canvas_kline' ), stockId, panelData.data.type, offset, count, propsToDraw( panelData.data.sub ) );
	}
	
	public function drawAllCanvas( stockId:String, offset:Int = 0, count:Int, ary_panel:Array<Dynamic> ):Void {
		Lambda.map( ary_panel, function( panelData ) {
			drawCanvas( stockId, offset, count, panelData );
		});
	}
	
	function propsToDraw( props ) {
		return Lambda.fold( props, function( obj, current ) {
			if ( obj.show ) {
				current.push( 
				{
					't': Std.string( obj.type ),
					'd': {
						n:obj.value.n,
						m:obj.value.m,
						o:obj.value.o,
						p:obj.value.p
					},
					'color':'red'
				});
			}
			return current;
		}, [] );
	}

	function createProp( container, props:Dynamic, panelData:Dynamic ) {
		function onInputChange( dom:Dynamic ) {
			return function ( newv, oldv ){
				var target = j( untyped __js__ ( 'this' ));
				var type = dom.find( '.easyui-switchbutton' ).attr( 'ktype' );
				var value = [];
				dom.find( '.easyui-textbox' ).each( function( id, subdom ) {
					value.push( Std.parseFloat( j( subdom ).textbox('getValue' )) );
				});
				notify( ON_TXT_SHOWLINE_VALUE_CHANGE, { id:panelData.id, type:type, value:value } );
			}
		}
		
		Lambda.foreach( props, function( prop:Dynamic ) {
			
			if ( prop.type == 'group' ) {
				var dom = j( '#tmpl_group_line' ).tmpl( prop );
				container.append( dom );
				return true;
			}
			
			prop.sid = 'swb_' + prop.type;
			prop.nid = 'input_n_' + prop.type;
			prop.mid = 'input_m_' + prop.type;
			
			prop.domName = prop.name;
			if ( prop.url == null ) prop.url = '';
			var dom = j( '#tmpl_avg' ).tmpl( prop );
			container.append( dom );
			
			dom.find( '.easyui-linkbutton' ).linkbutton();
			
			dom.find( '.easyui-switchbutton' ).switchbutton( {
				checked:prop.show,
				onChange:function( checked ) {
					var target = j( untyped __js__ ( 'this' ));
					var type = target.attr( 'ktype' );
					notify( ON_SWB_SHOWLINE_CHANGE, { id:panelData.id, type:type, show:checked } );
				}
			});
			dom.find( '.easyui-textbox' ).eq(0).textbox( {
				value:prop.value.n,
				onChange:onInputChange( dom )
			});
			dom.find( '.easyui-textbox' ).eq(1).textbox( {
				value:prop.value.m,
				onChange:onInputChange( dom )
			});
			dom.find( '.easyui-textbox' ).eq(2).textbox( {
				value:prop.value.o,
				onChange:onInputChange( dom )
			});
			dom.find( '.easyui-textbox' ).eq(3).textbox( {
				value:prop.value.p,
				onChange:onInputChange( dom )
			});
			dom.find( '.easyui-tooltip' ).tooltip( {
				position:'right',
				onShow:function( e ) {
					var self = j( e.currentTarget );
					var hoverInfo = untyped __js__( 'app.config.hoverInfo.line' );
					var hoverstr = switch( Reflect.field( hoverInfo, self.attr( 'ptype' ) ) ) {
						case null:Reflect.field( hoverInfo, 'default' );
						case hstr:hstr;
					}
					self.tooltip( 'update', hoverstr );
				}
			});
			return true;
		});
		
	}
	
	public function resetAllCanvasListener( ary_panel_obj:Array<Dynamic> ) {
		Lambda.map( ary_panel_obj, function( stockMap ) {
			if ( stockMap.needMove ) {
				var container = stockMap.root.find( '#canvas_kline' ).parent().parent();
				if ( currentScrollX != null )
					container.scrollLeft( currentScrollX );
				container.off( 'scroll' );
				container.scroll( function( e ) {
					var target = j( e.currentTarget );
					currentScrollX = target.scrollLeft();
					Lambda.map( ary_panel_obj, function( _stockMap ) {
						container = _stockMap.root.find( '#canvas_kline' ).parent().parent();
						container.scrollLeft( currentScrollX );
					});
				});
			}
		});
	}
	
	public function scrollTo( ary_panel_obj:Array<Dynamic>, scrollX:Int ):Void {
		currentScrollX = scrollX;
		Lambda.map( ary_panel_obj, function( stockMap ) {
			if ( stockMap.needMove ) {
				var container = stockMap.root.find( '#canvas_kline' ).parent().parent();
				container = stockMap.root.find( '#canvas_kline' ).parent().parent();
				container.scrollLeft( currentScrollX );
			}
		});
	}
	
	function onKeyDown( e ) {
		switch( e.which ) {
			//shift
			case 16:
				
			//ctrl
			case 17:
				
			//alt
			case 18:
			//,
			case 188:
			//.
			case 190:
				
			///
			case 191:
		}
	}
	
	function onKeyUp( e ) {
		trace( e.which );
		switch( e.which ) {
			//b
			case 66:
				notify( ON_BTN_CONTROLLER_CLICK, { value: -10000 } );
			//n
			case 78:
				notify( ON_BTN_CONTROLLER_CLICK, { value: -20 } );
			//m
			case 77:
				notify( ON_BTN_CONTROLLER_CLICK, { value: -1 } );
			//,
			case 188:
				notify( ON_BTN_CONTROLLER_CLICK, { value: 1 } );
			//.
			case 190:
				notify( ON_BTN_CONTROLLER_CLICK, { value: 20 } );
			///
			case 191:
				notify( ON_BTN_CONTROLLER_CLICK, { value: 10000 } );
			//shift
			case 16:
				
			//ctrl
			case 17:
			//w
			case 87:
			//a
			case 65:
			//s
			case 83:
			//d
			case 68:
			//alt
			case 18:
			//up
			case 38:
			//left
			case 37:
				
			//down
			case 40:
			//right
			case 39:
				
			//f
			case 70:
		}
	}
}