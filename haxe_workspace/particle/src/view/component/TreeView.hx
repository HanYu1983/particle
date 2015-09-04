package view.component;

import model.Model;

/**
 * ...
 * @author vic
 */
class TreeView extends Model
{
	var _tree:Dynamic;
	
	public static var ON_TREE_NODE_CLICK = 'ON_TREE_NODE_CLICK';
	public static var ON_TREE_DRAG = 'ON_TREE_DRAG';
	
	var _selectItem:Dynamic;

	public function new() 
	{
		super();
		
	}
	
	public function getItems():Dynamic 
	{
		return _tree.jqxTree('getItems');
	}
	
	public function getItem(element:Dynamic):Dynamic 
	{
		return _tree.jqxTree('getItem', element);
	}
	
	public function getItemById( id:String ):Dynamic {
		return Lambda.find( getItems(), function( item ) {
			return item.id == id;
		});
	}
	
	public function getSelectItem():Dynamic {
		return _selectItem;
	}
	
	public function setItemName( id:String, label:String ):Void {
		switch( getItemById( id ) ) {
			case null:return;
			case item:
				_tree.jqxTree('updateItem', item, { label: label });
		}
	}
	
	public function addTo(element:Dynamic, parentElement:Dynamic):Void 
	{
		_tree.jqxTree('addTo', element, parentElement);
	}
	
	public function addToWithLabel( id:String, label:String, ?parentElement:Dynamic ):Void {
		switch( parentElement ) {
			case null:
				_tree.jqxTree('addTo', { id:id, label: label });
			case pid:
				_tree.jqxTree('addTo', { id:id, label: label }, parentElement);
		}
	}
	
	public function remove(element:Dynamic):Void 
	{
		_tree.jqxTree('removeItem', element);
	}
	
	public function selectItem(element:Dynamic):Void 
	{
		_tree.jqxTree('selectItem', element);
	}
	
	override function init() 
	{
		super.init();
		
		_tree = config.tree;
		_tree.on('select',function (event){
			var item = getItem( event.args.element );
			_selectItem = item;
			notify( ON_TREE_NODE_CLICK, { item:item } );
		});
	}
	
}