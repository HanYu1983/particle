package model;

/**
 * @author vic
 */

interface IModel 
{
	var config(default, set):Dynamic;
	function addHandler( handler:String -> Dynamic -> Void ):Void;
	function notify( type:String, ?params:Dynamic ):Void;
}