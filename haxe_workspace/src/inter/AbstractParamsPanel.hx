package inter;

/**
 * ...
 * @author vic
 */
class AbstractParamsPanel extends AbstractEvent implements IParamsPanel
{
	var particleData:Dynamic;

	public function new(dom) 
	{
		super(dom);
		
	}
	
	public function setData( data:Dynamic ):Void {
		particleData = data;
	}
	
	public function getData():Dynamic {
		return particleData;
	}
	
	public function setLife(life:Int):Void 
	{
		
	}
	
	public function setMass(mass:Int):Void 
	{
		
	}
	
	public function setPosition(x:Float, y:Float):Void 
	{
		
	}
	
	public function setVelocity(x:Float, y:Float):Void 
	{
		
	}
	
	public function setRotation(r:Float):Void 
	{
		
	}
	
	public function setVelocityRotation(v:Float):Void 
	{
		
	}
	
	public function setSize(width:Float, height:Float):Void 
	{
		
	}
	
	public function setColor(color:Int):Void 
	{
		
	}
	
	public function setName( name:String ):Void {
		
	}
	
	public function getLife():Int 
	{
		return 0;
	}
	
	public function getMass():Int 
	{
		return 0;
	}
	
	public function getPosition():Dynamic 
	{
		return null;
	}
	
	public function getVelocity():Dynamic 
	{
		return null;
	}
	
	public function getRotation():Float 
	{
		return 0;
	}
	
	public function getVelocityRotation():Float 
	{
		return 0;
	}
	
	public function getSize():Dynamic 
	{
		return null;
	}
	
	public function getColor():Int 
	{
		return 0;
	}
	
}