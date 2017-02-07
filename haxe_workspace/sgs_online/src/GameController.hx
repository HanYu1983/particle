package;

/**
 * ...
 * @author vic
 */
class GameController extends BasicController
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
	}
	
	public function addPlayerDeckCard( playerId:Int, uuid:String ) {
		getPlayerDeck( playerId ).push( uuid );
	}
	
	public function clearDeckByPlayerId( id:Int ) {
		var deck = getPlayerDeck(id);
		while ( deck.length > 0 ) deck.pop();
	}
	
	public function drawCardFromPlayerDeckToPlayerHand(fromPlayerId:Int, toPlayerId:Int ) {
		var deckFrom:Dynamic = getPlayerDeck( fromPlayerId );
		var toHand:Dynamic = getPlayerHand( toPlayerId );
		var uuid = deckFrom.pop();
		toHand.push( uuid );
		
		mediator.moveCardsFromCards( deckFrom, toHand );
		
		/*
		var stayId = deckFrom.indexOf( uuid );
		if ( stayId != -1 ) {
			deckFrom.splice( stayId, 1 );
			toHand.push( uuid );
		}
		*/
	}
	
	public function createGame() {
		mediator.onGameStart();
	}
	
	public function isInTheHand( uid:String ) {
		var id = players[0].hand.indexOf( uid );
		return id != -1;
	}
	
	private function getPlayerDeck( id:Int ):Dynamic {
		return players[id].deck;
	}
	
	private function getPlayerHand( id:Int ):Dynamic {
		return players[id].hand;
	}
}