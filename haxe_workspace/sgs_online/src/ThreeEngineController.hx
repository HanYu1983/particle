package;
import js.Browser;
import js.Lib;
import js.html.Point;

/**
 * ...
 * @author vic
 */
class ThreeEngineController extends BasicController
{
	public var context(default, set):Dynamic;
	
	private var renderer:Dynamic;
	private var camera:Dynamic;
	private var scene:Dynamic;
	private var raycastMeshs = [];
	
	private var cards:Array<ICardController> = new Array<ICardController>();
	private var stackPosition:Map<String,Dynamic> = new Map<String,Dynamic>();
	
	private var raycaster:Dynamic = untyped __js__("new THREE.Raycaster()");
	private var mousePos = untyped __js__("new THREE.Vector2()");
	/*
	private var composer:Dynamic = null;
	private var outlinePass:Dynamic = null;
	private var effectFXAA:Dynamic = null;
	*/
	function set_context( c:Dynamic ):Dynamic {
		context = c;
		createEnviroment();
		return context;
	}
	
	private function setStackPosition( name:String, pos:Dynamic, rot:Dynamic ) {
		stackPosition.set(name, {pos:pos,rot:rot} );
	}
	
	public function createCard( texture:Dynamic, pos:Dynamic, uuid:String ):String {
		var card:ICardController = new CardController(uuid);
		
		card.mesh = getMeshByName( "Card", true );
		card.setFaceTexture( texture );
		card.setBackTexture( context.textures[1] );
		cards.push( card );
		card.mesh.position.x = pos.x;
		card.mesh.position.y = pos.y;
		card.mesh.position.z = pos.z;
		
		card.flip();
		scene.add( card.mesh );
		
		var mesh_needraycast = card.mesh.children[0].children[0];
		mesh_needraycast.target = card;
		raycastMeshs.push( mesh_needraycast );
		
		mesh_needraycast = card.mesh.children[1].children[0];
		mesh_needraycast.target = card;
		raycastMeshs.push( mesh_needraycast );
		
		return card.uid;
	}
	
	public function moveCard( uuid:String, cards:Array<String>, ?pos:Dynamic = null ) {
		if ( pos == null ) {
			pos = {x:0,y:0,z:0 };
		}
		var card:ICardController = getCardByUuid( uuid );
		var moveTo = stackPosition["Player_hand_position"];
		card.moveCard( moveTo.pos.x, moveTo.pos.y, moveTo.pos.z );
	}
	
	public function moveCardsFromCards( from:Array<String>, to:Array<String>, ?pos:Dynamic = null ) {
		var moveTo = stackPosition["Player_deck_position"];
		for ( i in 0...from.length ) {
			getCardByUuid( from[i] ).moveCard( moveTo.pos.x, moveTo.pos.y + i * .05 , moveTo.pos.z );
		}
		moveTo = stackPosition["Player_hand_position"];
		var dist:Float = 10 / to.length;
		for ( i in 0...to.length ) {
			var posFac:Float = 0;
			if ( to.length > 1 ) {
				posFac = i - to.length / 2;
			}
			if ( to.length < 5 ) {
				dist = 2;
			}
			var card:ICardController = getCardByUuid( to[i] );
			card.moveCard( moveTo.pos.x + posFac * dist, moveTo.pos.y + i * .01 , moveTo.pos.z );
			card.rotateCard( moveTo.rot.x, moveTo.rot.y , moveTo.rot.z );
			if ( !card.isFaceUp ) card.flip();
		}
	}
	
	public function getCardByUuid( uuid:String):ICardController {
		for ( c in cards ) {
			if ( c.uid == uuid ) return c;
		}
		return null;
	}
	
	public function flipCard() {
		var card = cards[cards.length-1];
		card.flip();
	}
	
	public function initGame() {
		var board = getMeshByName("Board");
		board.children[0].material.map = context.textures[0];
		board.children[0].material.needsUpdate = true;
	}
	
	private function createEnviroment():Void {
		renderer = untyped __js__("new THREE.WebGLRenderer")( { antialias: true } );
		renderer.setClearColor( 0xf0f0f0 );
		renderer.setPixelRatio( AppConfig.screenWidth / AppConfig.screenHeight );
		renderer.setSize( AppConfig.screenWidth, AppConfig.screenHeight );
		renderer.sortObjects = true;
		
		mediator.setWebgl( renderer.domElement );
		
		var autoCreate = untyped __js__("vic.tools.createSceneByDae")( context.dae.scene );
		scene = autoCreate.scene;
		camera = autoCreate.camera;
		
		camera.aspect = AppConfig.screenWidth / AppConfig.screenHeight;
		camera.updateProjectionMatrix();
		
		/* 测试outline效果
		/*
		composer = untyped __js__("new THREE.EffectComposer")( renderer );
		composer.setSize( AppConfig.screenWidth, AppConfig.screenHeight );
		
		var renderPass:Dynamic = untyped __js__("new THREE.RenderPass")( scene, camera );
		composer.addPass( renderPass );
		
		outlinePass = untyped __js__("new THREE.OutlinePass")( untyped __js__("new THREE.Vector2")(AppConfig.screenWidth, AppConfig.screenHeight), scene, camera);
		outlinePass.edgeStrength = 10;
		composer.addPass( outlinePass );
		
		effectFXAA = untyped __js__("new THREE.ShaderPass")( untyped __js__("THREE.FXAAShader"));
		effectFXAA.uniforms.resolution.value.set(1 / AppConfig.screenWidth, 1 / AppConfig.screenHeight );
		effectFXAA.renderToScreen = true;
		composer.addPass( effectFXAA );
		*/
		context.dae.scene = scene;
		
		var stacks = [
			"Player_deck_position","Player_hand_position"
		];
		
		for ( s in stacks ) setStackPosition( s, getMeshByName(s).position, getMeshByName(s).rotation );
		
		mediator.addWebglListener( 'mousemove', onDocumentMouseMove );
		animate();
	}
	
	private function animate() {
		untyped __js__("requestAnimationFrame")( animate );
		onEngineUpdate();
	}
	
	public function getMeshByName( name:String, clone:Bool = false ):Dynamic {
		var mesh = null;
		for ( i in 0...context.dae.scene.children.length ) {
			var obj = context.dae.scene.children[i];
			if ( obj.name == name ) mesh = obj;
		}
		if ( mesh != null ) {
			if ( clone ) return mesh.clone();
		}
		return mesh;
	}
	
	function onEngineUpdate() {
		for ( c in cards ) c.mesh.updateMatrixWorld();
		
		raycaster.setFromCamera( mousePos, camera );
		
		var intersects:Dynamic = raycaster.intersectObjects( raycastMeshs );
		if ( intersects.length > 0 ) {
			overCard( intersects[0].object.target );
			//outlinePass.selectedObjects = intersects[0].object;
		}else {
			if ( currentOverCard != null )	{
				currentOverCard.releaseCardInHand();
				currentOverCard = null;
			}
		}
		
		//composer.render();
		renderer.render( scene, camera );
	}
	
	var currentOverCard:ICardController;
	
	function overCard( card:ICardController ) {
		
		if ( currentOverCard != null && currentOverCard != card ) {
			currentOverCard.releaseCardInHand();
			currentOverCard = null;
		}
		
		var isInHand = mediator.isInTheHand( card.uid );
		if ( isInHand ) {
			if ( currentOverCard == null || currentOverCard != card ) {
				currentOverCard = card;
				
				currentOverCard.overCardInHand();
			}
		}
	}
	
	function onDocumentMouseMove( event:Dynamic ) {
		event.preventDefault();
		mousePos.x = (event.offsetX / AppConfig.screenWidth ) * 2 - 1;
		mousePos.y = - (event.offsetY / AppConfig.screenHeight ) * 2 + 1;
	}
}