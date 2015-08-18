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
		
		panelModel.execute( 'addPanel' 
		
		var output = panelModel.execute( 'getSaveData' );
		
		assertEquals( Json.stringify( panelModel.config ).length, Json.stringify( output ).length );
	}
}