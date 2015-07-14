package inter;

/**
 * @author vic
 */
interface IParamsPanel 
{
	function setLife( life:Int ):Void;
	function setMass( mass:Int ):Void;
	function setPosition( x:Float, y:Float ):Void;
	function setVelocity( x:Float, y:Float ):Void;
	function setRotation( r:Float ):Void;
	function setVelocityRotation( v:Float ):Void;
	function setSize( width:Float, height:Float ):Void;
	function setColor( color:Int ):Void;
	function getLife():Int;
	function getMass():Int;
	function getPosition():Dynamic;
	function getVelocity():Dynamic;
	function getRotation():Float;
	function getVelocityRotation():Float;
	function getSize():Dynamic;
	function getColor():Int;
}