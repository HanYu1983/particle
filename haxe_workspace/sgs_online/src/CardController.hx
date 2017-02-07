package;
import js.JQuery;

/**
 * ...
 * @author vic
 */
class CardController extends BasicController implements ICardController
{
	public var mesh(default, set):Dynamic;
	function set_mesh( m:Dynamic ):Dynamic {
		mesh = m;
		getFaceMesh().children[0].material = untyped __js__("new THREE.MeshLambertMaterial" )();
		getFaceMesh().children[0].material.needsUpdate = true;
		getBackMesh().children[0].material.needsUpdate = true;
		return mesh;
	}
	
	public var isFaceUp(get, never):Bool;
	function get_isFaceUp() {
		if ( mesh == null ) return false;
		return mesh.rotation.z < (10 / 180 * Math.PI);
	}
	
	public function setFaceTexture(texture:Dynamic):Void 
	{
		getFaceMesh().children[0].material.map = texture;
	}
	
	public function setBackTexture(texture:Dynamic):Void {
		getBackMesh().children[0].material.map = texture;
	}
	
	public function flip():Void {
		if ( isFaceUp ) {
			addTweener( mesh.rotation, { z:Math.PI, time:AppConfig.moveTime, transition:AppConfig.moveEasingType } );
		}else {
			addTweener( mesh.rotation, { z:0, time:AppConfig.moveTime, transition:AppConfig.moveEasingType } );
		}
	}
	
	var standPos = null;
	
	public function overCardInHand() {
		standPos = mesh.position.clone();
		
		var newPos = mesh.position.clone();
		newPos.y += 2;
		moveCard( newPos.x, newPos.y, newPos.z );
	}
	
	public function releaseCardInHand() {
		if ( standPos != null ) {
			moveCard( standPos.x, standPos.y, standPos.z );
		}
	}
	
	public function moveCard( x:Float, y:Float, z:Float ):Void {
		addTweener( mesh.position, { x:x, y:y, z:z, time:AppConfig.moveTime, transition:AppConfig.moveEasingType } );
	}
	
	public function rotateCard( x:Float, y:Float, z:Float ):Void {
		addTweener( mesh.rotation, { x:x, y:y, z:z, time:AppConfig.moveTime, transition:AppConfig.moveEasingType } );
	}
	
	function getFaceMesh():Dynamic {
		return mesh.children[1];
	}
	
	function getBackMesh():Dynamic {
		return mesh.children[0];
	}
	
	function addTweener( obj:Dynamic, props:Dynamic ) {
		untyped __js__("Tweener" ).addTween( obj, props );
	}
}
