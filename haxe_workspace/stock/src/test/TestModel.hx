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
					count:200,
					offset:13,
					lines:[
						{
							id:0,
							type:'clock',
							sub:[
								{t: "ma", d: {n: 5, color: "blue"}}, 
								{t: "ma", d: {n: 10, color: "yellow"}} 
							]
						},
						{
							id:1,
							type:'volume',
							sub:[
								{t: "ma", d: {n: 5, color: "blue"}}, 
								{t: "ma", d: {n: 10, color: "yellow"}} 
							]
						},
						{
							id:2,
							type:'kline',
							sub:[
								{t: "ma", d: {n: 5, color: "blue"}}, 
								{t: "ma", d: {n: 10, color: "yellow"}} 
							]
						},
						{
							id:3,
							type:'kline',
							sub:[
								{t: "ma", d: {n: 5, color: "blue"}}, 
								{t: "ma", d: {n: 10, color: "yellow"}} 
							]
						},
						{
							id:4,
							type:'kline',
							sub:[
								{t: "ma", d: {n: 5, color: "blue"}}, 
								{t: "ma", d: {n: 10, color: "yellow"}} 
							]
						}
					]
				}
			]
		};
		
		var output = panelModel.getSaveData();
		
		assertEquals( Json.stringify( panelModel.config ).length, Json.stringify( output ).length );
	}
}