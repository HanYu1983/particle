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
	var backendController:FakeBackEndController;
	var domController:DomController;

	public function new() 
	{
		
	}
	
	public function start() {
		domController = new DomController();
		
		threeEngineController = new ThreeEngineController();
		threeEngineController.mediator = this;
		threeEngineController.context = context;
		
		keyboardController = new KeyboardController();
		keyboardController.mediator = this;
		
		backendController = new FakeBackEndController();
		backendController.mediator = this;
		gameStart();
		
		
	}
	
	public function addWebglListener( event:String, action:Dynamic -> Void){
		domController.addWebglListener(event, action);
	}
	
	public function setWebgl( dom:Dynamic ){
		domController.setWebgl( dom );
	}
	
	public function gameStart() {
		threeEngineController.initGame();
		keyboardController.start();
		
		var pos = threeEngineController.getMeshByName( "Player_deck_position" ).position.clone();		
		backendController.createPlayerDeck( function( args:Dynamic ):Void{
			for ( i in 0...args.deck.length ) {
				var uuid = args.deck[i];
				var cardpos = pos.clone();
				cardpos.y += i * .05;
				threeEngineController.createCard( context.textures[2], cardpos, uuid );
			}
		});
	}
	
	public function getAll():Dynamic{
		return backendController.getAll();
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
		
		backendController.drawCardFromPlayerDeckToPlayerHand( 0, 0, function( args:Dynamic ){
			moveCardsFromCards( args.deckFrom, args.toHand );
		});
	}
	
	public function onAUp(){
		threeEngineController.selectPrev();
	}
	
	public function onDUp(){
		threeEngineController.selectNext();
	}
	
	public function isInTheHand( uid:String ) {
		return backendController.isInTheHand( uid);
	}
}