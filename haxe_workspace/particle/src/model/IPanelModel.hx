package model;

/**
 * @author vic
 */

interface IPanelModel extends IModel
{
	var currentParticle(default, set):Dynamic;
	function addParticle( id:Int, parentId:Int, particle:Dynamic, ?extra:Dynamic ):Void;
	function removeParticle( id:Int, ?extra:Dynamic ):Void;
	function moveParticle( to:Dynamic, particle:Dynamic, ?extra:Dynamic ):Void;
}