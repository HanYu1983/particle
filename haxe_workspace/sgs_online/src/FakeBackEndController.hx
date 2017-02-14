package;

/**
 * ...
 * @author vic
 */
class FakeBackEndController extends BasicController
{
	private var players:Array<Dynamic> = new Array<Dynamic>();

	public function new(_uid:String="") 
	{
		super(_uid);
		
		players.push(
			{
				deck:[],
				hand:[]
			}
		);
		
		players.push(
			{
				deck:['ab','cc'],
				hand:[]
			}
		);
	}
	
	public function createPlayerDeck( callback:Dynamic -> Void ){
		
		GameInfo.tableInfo( function( err:Dynamic, val:Dynamic ){
			if ( err == null ){
				trace( val );
			}
		});
		
		//var ret = new Array<Dynamic>();
		clearDeckByPlayerId(0);
		for ( i in 0...50 ) {
			var uuid = Tools.uuid();
			addPlayerDeckCard(0, uuid );
		//	ret.push( uuid );
		}
		callback( getAll() );
	}
	
	public function drawCardFromPlayerDeckToPlayerHand(fromPlayerId:Int, toPlayerId:Int, callback:Dynamic -> Void ) {
		var deckFrom:Dynamic = getPlayerDeck( fromPlayerId );
		var toHand:Dynamic = getPlayerHand( toPlayerId );
		var uuid = deckFrom.pop();
		toHand.push( uuid );
		
		callback( {deckFrom:deckFrom, toHand:toHand } );
	}
	
	public function isInTheHand( uid:String ) {
		var id = players[0].hand.indexOf( uid );
		return id != -1;
	}
	
	public function getAll():Array<Dynamic>{
		return players;
	}
	
	private function getPlayerDeck( id:Int ):Dynamic {
		return players[id].deck;
	}
	
	private function getPlayerHand( id:Int ):Dynamic {
		return players[id].hand;
	}
	
	private function addPlayerDeckCard( playerId:Int, uuid:String ) {
		getPlayerDeck( playerId ).push( uuid );
	}
	
	private function clearDeckByPlayerId( id:Int ) {
		var deck = getPlayerDeck(id);
		while ( deck.length > 0 ) deck.pop();
	}
}