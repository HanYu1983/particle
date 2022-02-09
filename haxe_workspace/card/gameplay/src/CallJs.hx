package;

import js.Syntax;

/**
 * ...
 * @author vic
 */
// @:build(AutoJs.build([	'setCookie', 
// 						'getCookie',
// 						'cardSuit.load2',
// 						'cardSuit.defaultModel',
// 						'api.invite',
// 						'api.startReceiveInvitation',
// 						'api.createUser',
// 						'api.users',
// 						'api.message',
// 						'api.pollMessage',
// 						'api.installPollMessageCallback',
// 						'api.clear',
// 						'api.getCardPackage',
// 						'api.getCardPackageWithUrl',
// 						'api.getCardSuitPackageWithUrl',
// 						'api.getCardImageWithPackageName',
// 						'api.getCardSuit',
// 						'api.startHeartbeat',
// 						'api.createChannel',
// 						'api.getTimerContext',
// 						'api.resetTimer',
// 						'api.startTimer',
// 						'api.stopTimer',
// 						'api.switchUser',
// 						'api.getTime',
// 						'api.saveUserConfig',
// 						'api.loadUserConfig',
// 						'myapp.facebook.login',
// 						'myapp.facebook.init',
// 						'leo.utils.initRectSelect',
// 						'yugioh.load',
// 						'sangoWar.loadCh',
// 						'gundamWar.load',
// 						'gundamWarN.load',
// 						'battleSpirits.load',
// 						'sgs.load',
// 						'dragonZ.load',
// 						'crusade.load',
// 						'ws.load',
// 						'magic.load',
// 						'googleTracking.click',
// 						'cardinfoloader.load'
// 					]))

class CallJs{
	public static function setCookie(cmd, otherPlayers) {
		Syntax.code('setCookie')(cmd, otherPlayers);
	}

	public static function api_loadUserConfig(cmd, value:Null<Dynamic>):Array<Dynamic> {
		return Syntax.code('api.loadUserConfig')(cmd, value);
	}

	public static function api_saveUserConfig(cmd, saveAry) {
		Syntax.code('api.saveUserConfig')(cmd, saveAry);
	}

	public static function api_getTimerContext() {
		return Syntax.code('api.getTimerContext')();
	}

	public static function api_getTime(name) {
		return Syntax.code('api.getTime')(name);
	}

	public static function api_getCardImageWithPackageName(select, key) {
		return Syntax.code('api.getCardImageWithPackageName')(select, key);
	}

	public static function cardinfoloader_load(game, lang, cb) {
		Syntax.code('cardinfoloader.load')(game, lang, cb);
	}

	public static function myapp_facebook_init(fbid, cb) {
		Syntax.code('myapp.facebook.init')(fbid, cb);
	}

	public static function cardSuit_defaultModel() {
		return Syntax.code('cardSuit.defaultModel')();
	}

	public static function api_resetTimer(playerId:String, otherPlayerIds:Array<String>, cb:Dynamic) {
		return Syntax.code('api.resetTimer')(playerId, otherPlayerIds, cb);
	}

	public static function api_stopTimer(playerId:String, otherPlayerIds:Array<String>, cb:Dynamic) {
		return Syntax.code('api.stopTimer')(playerId, otherPlayerIds, cb);
	}

	public static function api_startTimer(playerId:String, otherPlayerIds:Array<String>, cb:Dynamic) {
		Syntax.code('api.startTimer')(playerId, otherPlayerIds, cb);
	}

	public static function api_switchUser(playerId:String, otherPlayerIds:Array<String>, cb:Dynamic) {
		Syntax.code('api.switchUser')(playerId, otherPlayerIds, cb);
	}

	public static function api_startReceiveInvitation(playerId:String, otherPlayerIds:String, cb:Dynamic) {
		Syntax.code('api.startReceiveInvitation')(playerId, otherPlayerIds, cb);
	}

	public static function api_invite(playerId:String, otherPlayerIds:Array<String>, cb:Dynamic) {
		Syntax.code('api.invite')(playerId, otherPlayerIds, cb);
	}


	public static function myapp_facebook_login(cb:(ret:{authResponse:{userID:String, accessToken:String}}) -> Void) {
		Syntax.code('myapp.facebook.login')(cb);
	}

	public static function cardSuit_load2(fbid:String, token:String, cb:(err:String, ret:{cardSuit:Array<Dynamic>}) -> Void) {
		Syntax.code('cardSuit.load2')(fbid, token, cb);
	}

	public static function googleTracking_click(type:String) {
		Syntax.code('googleTracking.click')(type);
	}

	public static function getCookie(name:String) {
		return Syntax.code('getCookie')(name);
	}

	public static function api_startHeartbeat(playerId:String, otherPlayerId:String, cb:Bool -> Void) {
		Syntax.code('api.startHeartbeat')(playerId, otherPlayerId, cb);
	}
}