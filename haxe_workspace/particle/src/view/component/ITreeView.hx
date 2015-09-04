package view.component;

/**
 * @author vic
 */

interface ITreeView 
{
	function getItems():Dynamic;
	function getItem( element:Dynamic ):Dynamic;
	function getItemById( id:String ):Dynamic;
	function getSelectItem():Dynamic;
	function setItemName( id:String, label:String ):Void;
	function addTo( element:Dynamic, parentElement:Dynamic ):Void;
	function addToWithLabel( id:String, label:String, ?parentElement:Dynamic ):Void;
	function remove( element:Dynamic ):Void;
	function selectItem( element:Dynamic ):Void;
}