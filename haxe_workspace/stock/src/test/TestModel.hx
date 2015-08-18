package test;

import haxe.Json;
import haxe.unit.TestCase;
import model.PanelModel;

/**
 * ...
 * @author vic
 */
class TestModel extends TestCase
{

	public function new() 
	{
		super();
		
	}
	
	function testConfig() {
		var panelModel = new PanelModel();
		panelModel.config = {
			facebookId:'12233',
			stocks:[
				{
					id:'2330',
					lines:[
						{
							id:0,
							type:'clock'
						}
					]
				}
			]
		};
		
		var output = panelModel.execute( 'getSaveData' );
		trace( Json.stringify( panelModel.config ));
		trace( Json.stringify( output ));
	}
}