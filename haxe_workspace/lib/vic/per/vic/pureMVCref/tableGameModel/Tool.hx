package per.vic.pureMVCref.tableGameModel;

using Lambda;
using Reflect;
/**
 * ...
 * @author vic
 */
class Tool
{
	public static var j:Dynamic = untyped __js__( '$' );
	
	public static function createItem( extra:Array<Dynamic>, pos:Array<Int>, ?type:String = 'card', ?width:Int = 100, ?height:Int = 100, ?back = true, ?lock = false, ?owner = 'desktop', ?viewer = '' ) {
		return { 
			type:type,
			width:width,
			height:height,
			pos: pos,
			back:back,
			deg:0,
			lock:lock,
			owner:owner,
			viewer:viewer,
			id:createDivId(),
			extra: extra,
			action:{
				sequence:Math.random()
			}
		}
	}
	
	public static function createDataFromDeck( deck:Dynamic, owner:String ) {
		return deck.cards.map( function( str:String ) {
			return { extra:[str, deck.backId == null ? '0' : deck.backId, deck.game ], pos:[100, 100], type:'card', width:100, height:150, back:false, lock:false, owner:owner }
		});
	}
	
	public static function createItemFromData( ary_data ) {
		return ary_data.map( function( data:Dynamic ) {
			return createItem( data.extra, data.pos, data.type, data.width, data.height, data.back, data.lock, data.owner );
		});
	}
	
	public static function createItemDiv( type:String, model:Dynamic ) {
		var div:Dynamic = j('#tmpl_' + type ).tmpl( model );
		return div;
	}
	
	public static function createDivId() {
		return untyped __js__('leo.utils.generateUUID')();
	}
	
	public static function slide( msg, ?time = 2000 ){
		j.messager.show({
			title:'提示',
			msg: msg,
			timeout:time,
			showType:'slide'
		});
	}
	
	public static function alert( msg ) {
        j.messager.alert('錯誤', msg );
	}
}