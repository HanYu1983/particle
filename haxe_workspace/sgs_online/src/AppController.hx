package;
import js.Browser;

/**
 * ...
 * @author vic
 */
class AppController
{
	public var context(default, default):Dynamic;
	
	var threeEngineController:ThreeEngineController;
	var keyboardController:KeyboardController;
	var gameController:GameController;

	public function new() 
	{
		
	}
	
	public function start() {
		Browser.document.addEventListener( 'contextmenu', function( event ) {
			event.preventDefault();
			
			trace("DD");
		});
		
		threeEngineController = new ThreeEngineController();
		threeEngineController.mediator = this;
		threeEngineController.context = context;
		
		keyboardController = new KeyboardController();
		keyboardController.mediator = this;
		
		gameController = new GameController();
		gameController.mediator = this;
		gameController.createGame();
	}
	
	public function onGameStart() {
		threeEngineController.initGame();
		keyboardController.start();
		
		gameController.clearDeckByPlayerId(0);
		
		for ( i in 0...50 ) {
			var pos = threeEngineController.getMeshByName( "Player_deck_position" ).position.clone();
			pos.y += i * .05;
			var uuid = threeEngineController.createCard( context.textures[2], pos );
			gameController.addPlayerDeckCard(0, uuid );
		}
	}
	
	public function moveCardsFromCards( from:Array<String>, to:Array<String>, ?pos:Dynamic = null ) {
		threeEngineController.moveCardsFromCards( from, to, pos );
	}
	
	public function moveCardByUuid( uuid:String, ?pos:Dynamic = null ) {
		threeEngineController.moveCard( uuid, pos );
	}
	
	public function getCardByUuid( uuid:String ):ICardController {
		return threeEngineController.getCardByUuid(uuid);
	}
	
	public function onFUp() {
		//threeEngineController.flipCard();
		
		gameController.drawCardFromPlayerDeckToPlayerHand( 0, 0 );
	}
	
	public function isInTheHand( uid:String ) {
		return gameController.isInTheHand( uid);
	}
}