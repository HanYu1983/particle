package;

import flash.Lib;
import flash.display.Sprite;

/**
 * ...
 * @author vic
 */
class Main extends Sprite 
{

	public function new() 
	{
		super();

		 // Entry point
		 // New to AIR? Please read the readme.txt files *carefully*!
	}

	static function main() 
	{
		Lib.current.addChild(new Main());
	}

}