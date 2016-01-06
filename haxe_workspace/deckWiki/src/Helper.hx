package;
import haxe.Json;
import js.Browser;

using Lambda;
using Reflect;
using StringTools;
/**
 * ...
 * @author vic
 */
class Helper
{
	static var j:Dynamic = untyped __js__('$');
	
	public static function initFb( cb ) {
		#if debug
		untyped __js__('myapp.facebook.init')( '679171275511375', cb );
		#else
		untyped __js__('myapp.facebook.init')( '425311264344425', cb );
		#end
	}
	
	public static function shareFb( name:String, link:String, picture:String, caption:String, description:String, cb:Dynamic -> Void ) {
		untyped __js__('myapp.facebook.postMessageToMyboard')( {
			name:name,
			link:link,
			picture:picture,
			caption:caption,
			description:description,
			callback:cb
		});
	}
	
	public static function getUrlHash():Dynamic {
		return untyped __js__( 'leo.utils.getHash' )();
	}
	
	public static function loginFb( cb:String -> String -> Void ) {
		untyped __js__( 'myapp.facebook.login' )( function( ret ){
			cb( ret.authResponse.userID, ret.authResponse.accessToken );
		});
	}
	
	public static function getUUID() {
		return untyped __js__('leo.utils.generateUUID')();
	}
	
	public static function getCardsuits( fbid, token, cb ) {
		untyped __js__('cardSuit.load2')( fbid, token, handleModel( function( ret ){
			cb( ret );
		}));
	}
	
	public static function saveDeck( fbid, token, model, cb ) {
		untyped __js__('cardSuit.save2')( fbid, token, model, handleModel( function( ret ) {
			cb( ret );
		}));
	}
	/*
	public static function showDeckList( model, sort ) {
		untyped __js__('app.card.showDeckList')( model, sort );
	}
	
	public static function addDeck( model ) {
		untyped __js__('cardSuit.editCardSuit')( model, {
			name: 'default',
			game: "army",
			cards:[]
		});
		showDeckList( model, false );
	}
	*/

	public static function createItem( model:Dynamic ) {
		model.url = getImageUrlByGameAndId( model.game, model.cards[0] );
		return j('#tmpl_item' ).tmpl( model );
	}
	
	public static function loadDetail( game:String, cb ) {
		untyped __js__('api.cardInfo')( game, function(err, data) {
			cb( data );
		});
	}
	
	public static function loadList( cb ) {
		untyped __js__('api.load')( cb );
	}
	
	public static function getImageUrlByGameAndId( game:String, id:String ) {
		return untyped __js__('api.cardimageurl')( game, id );
	}
	
	public static function createDetail( game:String, card:Dynamic ) {
		switch( game ) {
			case 'sangoWar':
				card.url = getImageUrlByGameAndId( game, untyped __js__( 'sangoWar.formatKey' )( card.id ) );
			case _:
				card.url = getImageUrlByGameAndId( game, card.id );
		}
		if( card.url == null ) {
			card.url = '../common/images/card/cardback_0.png';
		}
		var div = j("#tmpl_bigCard").tmpl( card );
		div.find( 'div[game]' ).hide();
		div.find( 'div[game=' + game + ']' ).show();
		div.attr( 'data', Json.stringify( card ));
		return div;
	}
	
	public static function EnToCh( en ) {
		return switch( en ) {
			case 'army':'軍武gogogo';
			case 'gundamWar':'鋼彈大戰';
			case 'gundamWarN':'鋼彈大戰Nex-A';
			case 'sangoWar':'三國志大戰';
			case 'sgs':'三國殺陣面對決';
			case 'magic':'魔法風雲會';
			case 'battleSpirit':'戰魂';
			case 'crusade':'Crusade';
			case 'ws':'黑白雙翼';
			case 'dragonZ':'七龍珠TCG';
			case 'yugioh':'遊戲王';
			
			case 'high_speed':'小快';
			case 'middle_speed':'中速';
			case 'low_speed':'後期';
			case 'balance':'均衡';
			case 'control':'控制';
			case 'disgust':'噁心';
			case _:'';
		}
	}
	
	public static function isAdmin() {
		return untyped __js__('admin.admin' );
	}
	
	public static function handleModel( func ){
		return function( err, ret ){
			if( err != null ){
				Browser.alert( err );
				Browser.window.location.reload();
			}else{
				func( ret );
			}
		}
	}
}