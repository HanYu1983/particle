package;

/**
 * ...
 * @author vic
 */
class Talk
{
	public static var createDuel = untyped __js__( 'api.createDuel');
	public static var duelContext = untyped __js__( 'api.duelContext');
	public static var addPeople = untyped __js__( 'api.addPeople');
	public static var winState = untyped __js__( 'api.winState');
	public static var assignWinner = untyped __js__( 'api.assignWinner');
	public static var forward = untyped __js__( 'api.forward');
	public static var whoistarget = untyped __js__( 'api.whoistarget');
	public static var deletePeople = untyped __js__( 'api.deletePeople');
	
	/*
	module.createDuel = "建立(.+)比賽。期間從(.+)到(.+)。報名日期(.+)"	//期間的格式為yyyy-Jan-dd
	module.duelContext = "比賽本文"
	module.addPeople = "(.+)要參加(.+)比賽"
	module.winState = "確認(.+)比賽的(.+)決鬥者和(.+)決鬥者的比賽結果"
	module.assignWinner = "(.+)比賽的(.+)決鬥者([勝|負])(.+)決鬥者"
	module.forward = "(.+)比賽的(.+)決鬥者升格"
	module.whoistarget = "(.+)比賽的(.+)決鬥者的決鬥對象是誰？"
	module.deletePeople = "(.+)要取消參加(.+)比賽"
	*/
}