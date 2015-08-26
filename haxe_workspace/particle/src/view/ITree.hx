package view;

/**
 * @author vic
 */

interface ITree 
{
	function findNode(nodeId:String):Dynamic;
	function getRootNode():Dynamic;
	function getSelectedNode():Dynamic;
	function removeNode( node:Dynamic ):Void;
	function focusNode( node:Dynamic ):Void;
	function appendNode( toNode:Dynamic ):Void;
}