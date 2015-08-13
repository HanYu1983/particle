(function (console) { "use strict";
var $hxClasses = {};
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
Math.__name__ = ["Math"];
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	add: function(x) {
		this.b += Std.string(x);
	}
	,__class__: StringBuf
};
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) return null;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw new js__$Boot_HaxeError("Too many arguments");
	}
	return null;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = ["haxe","IMap"];
var ash_ClassMap = function() {
	this.h = new haxe_ds_StringMap();
};
$hxClasses["ash.ClassMap"] = ash_ClassMap;
ash_ClassMap.__name__ = ["ash","ClassMap"];
ash_ClassMap.__interfaces__ = [haxe_IMap];
ash_ClassMap.prototype = {
	get: function(k) {
		return this.h.get(Type.getClassName(k));
	}
	,set: function(k,v) {
		this.h.set(Type.getClassName(k),v);
	}
	,exists: function(k) {
		return this.h.exists(Type.getClassName(k));
	}
	,remove: function(k) {
		return this.h.remove(Type.getClassName(k));
	}
	,keys: function() {
		var i = this.h.keys();
		return { hasNext : $bind(i,i.hasNext), next : function() {
			return Type.resolveClass(i.next());
		}};
	}
	,iterator: function() {
		return this.h.iterator();
	}
	,toString: function() {
		return this.h.toString();
	}
	,__class__: ash_ClassMap
};
var ash_GenericListIterator = function(head) {
	this.previous = { next : head};
};
$hxClasses["ash.GenericListIterator"] = ash_GenericListIterator;
ash_GenericListIterator.__name__ = ["ash","GenericListIterator"];
ash_GenericListIterator.prototype = {
	hasNext: function() {
		return this.previous.next != null;
	}
	,next: function() {
		var node = this.previous.next;
		this.previous = node;
		return node;
	}
	,__class__: ash_GenericListIterator
};
var ash_core_IFamily = function() { };
$hxClasses["ash.core.IFamily"] = ash_core_IFamily;
ash_core_IFamily.__name__ = ["ash","core","IFamily"];
ash_core_IFamily.prototype = {
	__class__: ash_core_IFamily
};
var ash_core_ComponentMatchingFamily = function(nodeClass,engine) {
	this.nodeClass = nodeClass;
	this.engine = engine;
	this.init();
};
$hxClasses["ash.core.ComponentMatchingFamily"] = ash_core_ComponentMatchingFamily;
ash_core_ComponentMatchingFamily.__name__ = ["ash","core","ComponentMatchingFamily"];
ash_core_ComponentMatchingFamily.__interfaces__ = [ash_core_IFamily];
ash_core_ComponentMatchingFamily.prototype = {
	init: function() {
		this.nodeList = new ash_core_NodeList();
		this.entities = new haxe_ds_ObjectMap();
		this.components = this.nodeClass._getComponents();
		this.nodePool = new ash_core_NodePool(this.nodeClass,this.components);
	}
	,newEntity: function(entity) {
		this.addIfMatch(entity);
	}
	,componentAddedToEntity: function(entity,componentClass) {
		this.addIfMatch(entity);
	}
	,componentRemovedFromEntity: function(entity,componentClass) {
		if(this.components.h.exists(Type.getClassName(componentClass))) this.removeIfMatch(entity);
	}
	,removeEntity: function(entity) {
		this.removeIfMatch(entity);
	}
	,addIfMatch: function(entity) {
		if(!(this.entities.h.__keys__[entity.__id__] != null)) {
			var $it0 = this.components.keys();
			while( $it0.hasNext() ) {
				var componentClass = $it0.next();
				if(!entity.has(componentClass)) return;
			}
			var node = this.nodePool.get();
			node.entity = entity;
			var $it1 = this.components.keys();
			while( $it1.hasNext() ) {
				var componentClass1 = $it1.next();
				Reflect.setField(node,this.components.h.get(Type.getClassName(componentClass1)),entity.get(componentClass1));
			}
			this.entities.set(entity,node);
			this.nodeList.add(node);
		}
	}
	,removeIfMatch: function(entity) {
		if(this.entities.h.__keys__[entity.__id__] != null) {
			var node = this.entities.h[entity.__id__];
			this.entities.remove(entity);
			this.nodeList.remove(node);
			if(this.engine.updating) {
				this.nodePool.cache(node);
				this.engine.updateComplete.add($bind(this,this.releaseNodePoolCache));
			} else this.nodePool.dispose(node);
		}
	}
	,releaseNodePoolCache: function() {
		this.engine.updateComplete.remove($bind(this,this.releaseNodePoolCache));
		this.nodePool.releaseCache();
	}
	,cleanUp: function() {
		var _g = new ash_GenericListIterator(this.nodeList.head);
		while(_g.previous.next != null) {
			var node = _g.next();
			this.entities.remove(node.entity);
		}
		this.nodeList.removeAll();
	}
	,__class__: ash_core_ComponentMatchingFamily
};
var ash_core_Engine = function() {
	this.familyClass = ash_core_ComponentMatchingFamily;
	this.entityList = new ash_core_EntityList();
	this.entityNames = new haxe_ds_StringMap();
	this.systemList = new ash_core_SystemList();
	this.families = new ash_ClassMap();
	this.entityAdded = new ash_signals_Signal1();
	this.entityRemoved = new ash_signals_Signal1();
	this.updateComplete = new ash_signals_Signal0();
	this.updating = false;
};
$hxClasses["ash.core.Engine"] = ash_core_Engine;
ash_core_Engine.__name__ = ["ash","core","Engine"];
ash_core_Engine.prototype = {
	addEntity: function(entity) {
		if(this.entityNames.exists(entity.name)) throw new js__$Boot_HaxeError("The entity name " + entity.name + " is already in use by another entity.");
		this.entityList.add(entity);
		this.entityNames.set(entity.name,entity);
		entity.componentAdded.add($bind(this,this.componentAdded));
		entity.componentRemoved.add($bind(this,this.componentRemoved));
		entity.nameChanged.add($bind(this,this.entityNameChanged));
		var $it0 = this.families.h.iterator();
		while( $it0.hasNext() ) {
			var family = $it0.next();
			family.newEntity(entity);
		}
		this.entityAdded.dispatch(entity);
	}
	,removeEntity: function(entity) {
		entity.componentAdded.remove($bind(this,this.componentAdded));
		entity.componentRemoved.remove($bind(this,this.componentRemoved));
		entity.nameChanged.remove($bind(this,this.entityNameChanged));
		var $it0 = this.families.h.iterator();
		while( $it0.hasNext() ) {
			var family = $it0.next();
			family.removeEntity(entity);
		}
		this.entityNames.remove(entity.name);
		this.entityList.remove(entity);
		this.entityRemoved.dispatch(entity);
	}
	,entityNameChanged: function(entity,oldName) {
		if(this.entityNames.get(oldName) == entity) {
			this.entityNames.remove(oldName);
			this.entityNames.set(entity.name,entity);
		}
	}
	,getEntityByName: function(name) {
		return this.entityNames.get(name);
	}
	,removeAllEntities: function() {
		while(this.entityList.head != null) this.removeEntity(this.entityList.head);
	}
	,get_entities: function() {
		return this.entityList;
	}
	,componentAdded: function(entity,componentClass) {
		var $it0 = this.families.h.iterator();
		while( $it0.hasNext() ) {
			var family = $it0.next();
			family.componentAddedToEntity(entity,componentClass);
		}
	}
	,componentRemoved: function(entity,componentClass) {
		var $it0 = this.families.h.iterator();
		while( $it0.hasNext() ) {
			var family = $it0.next();
			family.componentRemovedFromEntity(entity,componentClass);
		}
	}
	,getNodeList: function(nodeClass) {
		if(this.families.h.exists(Type.getClassName(nodeClass))) return this.families.h.get(Type.getClassName(nodeClass)).nodeList;
		var family = Type.createInstance(this.familyClass,[nodeClass,this]);
		this.families.h.set(Type.getClassName(nodeClass),family);
		var _g = new ash_GenericListIterator(this.entityList.head);
		while(_g.previous.next != null) {
			var entity = _g.next();
			family.newEntity(entity);
		}
		return family.nodeList;
	}
	,releaseNodeList: function(nodeClass) {
		if(this.families.h.exists(Type.getClassName(nodeClass))) {
			this.families.h.get(Type.getClassName(nodeClass)).cleanUp();
			this.families.h.remove(Type.getClassName(nodeClass));
		}
	}
	,addSystem: function(system,priority) {
		system.priority = priority;
		system.addToEngine(this);
		this.systemList.add(system);
	}
	,getSystem: function(type) {
		return this.systemList.get(type);
	}
	,get_systems: function() {
		return this.systemList;
	}
	,removeSystem: function(system) {
		this.systemList.remove(system);
		system.removeFromEngine(this);
	}
	,removeAllSystems: function() {
		while(this.systemList.head != null) {
			var system = this.systemList.head;
			this.systemList.head = this.systemList.head.next;
			system.previous = null;
			system.next = null;
			system.removeFromEngine(this);
			this.removeSystem(this.systemList.head);
		}
		this.systemList.tail = null;
	}
	,update: function(time) {
		this.updating = true;
		var _g = new ash_GenericListIterator(this.systemList.head);
		while(_g.previous.next != null) {
			var system = _g.next();
			system.update(time);
		}
		this.updating = false;
		this.updateComplete.dispatch();
	}
	,__class__: ash_core_Engine
};
var ash_core_Entity = function(name) {
	if(name == null) name = "";
	this.componentAdded = new ash_signals_Signal2();
	this.componentRemoved = new ash_signals_Signal2();
	this.nameChanged = new ash_signals_Signal2();
	this.components = new ash_ClassMap();
	if(name != "") this.set_name(name); else this.set_name("_entity" + ++ash_core_Entity.nameCount);
};
$hxClasses["ash.core.Entity"] = ash_core_Entity;
ash_core_Entity.__name__ = ["ash","core","Entity"];
ash_core_Entity.prototype = {
	set_name: function(value) {
		if(this.name != value) {
			var previous = this.name;
			this.name = value;
			this.nameChanged.dispatch(this,previous);
		}
		return value;
	}
	,add: function(component,componentClass) {
		if(componentClass == null) if(component == null) componentClass = null; else componentClass = js_Boot.getClass(component);
		if(this.components.h.exists(Type.getClassName(componentClass))) this.remove(componentClass);
		this.components.h.set(Type.getClassName(componentClass),component);
		this.componentAdded.dispatch(this,componentClass);
		return this;
	}
	,remove: function(componentClass) {
		var component = this.components.h.get(Type.getClassName(componentClass));
		if(component != null) {
			this.components.h.remove(Type.getClassName(componentClass));
			this.componentRemoved.dispatch(this,componentClass);
			return component;
		}
		return null;
	}
	,get: function(componentClass) {
		return this.components.h.get(Type.getClassName(componentClass));
	}
	,getAll: function() {
		var componentArray = [];
		var $it0 = this.components.h.iterator();
		while( $it0.hasNext() ) {
			var component = $it0.next();
			componentArray.push(component);
		}
		return componentArray;
	}
	,has: function(componentClass) {
		return this.components.h.exists(Type.getClassName(componentClass));
	}
	,__class__: ash_core_Entity
};
var ash_core_EntityList = function() {
};
$hxClasses["ash.core.EntityList"] = ash_core_EntityList;
ash_core_EntityList.__name__ = ["ash","core","EntityList"];
ash_core_EntityList.prototype = {
	add: function(entity) {
		if(this.head == null) {
			this.head = this.tail = entity;
			entity.next = entity.previous = null;
		} else {
			this.tail.next = entity;
			entity.previous = this.tail;
			entity.next = null;
			this.tail = entity;
		}
	}
	,remove: function(entity) {
		if(this.head == entity) this.head = this.head.next;
		if(this.tail == entity) this.tail = this.tail.previous;
		if(entity.previous != null) entity.previous.next = entity.next;
		if(entity.next != null) entity.next.previous = entity.previous;
	}
	,removeAll: function() {
		while(this.head != null) {
			var entity = this.head;
			this.head = this.head.next;
			entity.previous = null;
			entity.next = null;
		}
		this.tail = null;
	}
	,iterator: function() {
		return new ash_GenericListIterator(this.head);
	}
	,__class__: ash_core_EntityList
};
var ash_core_Node = function() { };
$hxClasses["ash.core.Node"] = ash_core_Node;
ash_core_Node.__name__ = ["ash","core","Node"];
ash_core_Node.prototype = {
	__class__: ash_core_Node
};
var ash_core_NodeList = function() {
	this.nodeAdded = new ash_signals_Signal1();
	this.nodeRemoved = new ash_signals_Signal1();
};
$hxClasses["ash.core.NodeList"] = ash_core_NodeList;
ash_core_NodeList.__name__ = ["ash","core","NodeList"];
ash_core_NodeList.prototype = {
	add: function(node) {
		if(this.head == null) {
			this.head = this.tail = node;
			node.next = node.previous = null;
		} else {
			this.tail.next = node;
			node.previous = this.tail;
			node.next = null;
			this.tail = node;
		}
		this.nodeAdded.dispatch(node);
	}
	,remove: function(node) {
		if(this.head == node) this.head = this.head.next;
		if(this.tail == node) this.tail = this.tail.previous;
		if(node.previous != null) node.previous.next = node.next;
		if(node.next != null) node.next.previous = node.previous;
		this.nodeRemoved.dispatch(node);
	}
	,removeAll: function() {
		while(this.head != null) {
			var node = this.head;
			this.head = this.head.next;
			node.previous = null;
			node.next = null;
			this.nodeRemoved.dispatch(node);
		}
		this.tail = null;
	}
	,get_empty: function() {
		return this.head == null;
	}
	,iterator: function() {
		return new ash_GenericListIterator(this.head);
	}
	,swap: function(node1,node2) {
		if(node1.previous == node2) {
			node1.previous = node2.previous;
			node2.previous = node1;
			node2.next = node1.next;
			node1.next = node2;
		} else if(node2.previous == node1) {
			node2.previous = node1.previous;
			node1.previous = node2;
			node1.next = node2.next;
			node2.next = node1;
		} else {
			var temp = node1.previous;
			node1.previous = node2.previous;
			node2.previous = temp;
			temp = node1.next;
			node1.next = node2.next;
			node2.next = temp;
		}
		if(this.head == node1) this.head = node2; else if(this.head == node2) this.head = node1;
		if(this.tail == node1) this.tail = node2; else if(this.tail == node2) this.tail = node1;
		if(node1.previous != null) node1.previous.next = node1;
		if(node2.previous != null) node2.previous.next = node2;
		if(node1.next != null) node1.next.previous = node1;
		if(node2.next != null) node2.next.previous = node2;
	}
	,insertionSort: function(sortFunction) {
		if(this.head == this.tail) return;
		var remains = this.head.next;
		var node = remains;
		while(node != null) {
			remains = node.next;
			var other = node.previous;
			while(other != null) {
				if(sortFunction(node,other) >= 0) {
					if(node != other.next) {
						if(this.tail == node) this.tail = node.previous;
						node.previous.next = node.next;
						if(node.next != null) node.next.previous = node.previous;
						node.next = other.next;
						node.previous = other;
						node.next.previous = node;
						other.next = node;
					}
					break;
				}
				other = other.previous;
			}
			if(other == null) {
				if(this.tail == node) this.tail = node.previous;
				node.previous.next = node.next;
				if(node.next != null) node.next.previous = node.previous;
				node.next = this.head;
				this.head.previous = node;
				node.previous = null;
				this.head = node;
			}
			node = remains;
		}
	}
	,mergeSort: function(sortFunction) {
		if(this.head == this.tail) return;
		var lists = [];
		var start = this.head;
		var end;
		while(start != null) {
			end = start;
			while(end.next != null && sortFunction(end,end.next) <= 0) end = end.next;
			var next = end.next;
			start.previous = end.next = null;
			lists.push(start);
			start = next;
		}
		while(lists.length > 1) lists.push(this.merge(lists.shift(),lists.shift(),sortFunction));
		this.tail = this.head = lists[0];
		while(this.tail.next != null) this.tail = this.tail.next;
	}
	,merge: function(head1,head2,sortFunction) {
		var node;
		var head;
		if(sortFunction(head1,head2) <= 0) {
			head = node = head1;
			head1 = head1.next;
		} else {
			head = node = head2;
			head2 = head2.next;
		}
		while(head1 != null && head2 != null) if(sortFunction(head1,head2) <= 0) {
			node.next = head1;
			head1.previous = node;
			node = head1;
			head1 = head1.next;
		} else {
			node.next = head2;
			head2.previous = node;
			node = head2;
			head2 = head2.next;
		}
		if(head1 != null) {
			node.next = head1;
			head1.previous = node;
		} else {
			node.next = head2;
			head2.previous = node;
		}
		return head;
	}
	,__class__: ash_core_NodeList
};
var ash_core_NodePool = function(nodeClass,components) {
	this.nodeClass = nodeClass;
	this.components = components;
};
$hxClasses["ash.core.NodePool"] = ash_core_NodePool;
ash_core_NodePool.__name__ = ["ash","core","NodePool"];
ash_core_NodePool.prototype = {
	get: function() {
		if(this.tail != null) {
			var node = this.tail;
			this.tail = this.tail.previous;
			node.previous = null;
			return node;
		} else return Type.createEmptyInstance(this.nodeClass);
	}
	,dispose: function(node) {
		var $it0 = this.components.h.iterator();
		while( $it0.hasNext() ) {
			var componentName = $it0.next();
			node[componentName] = null;
		}
		node.entity = null;
		node.next = null;
		node.previous = this.tail;
		this.tail = node;
	}
	,cache: function(node) {
		node.previous = this.cacheTail;
		this.cacheTail = node;
	}
	,releaseCache: function() {
		while(this.cacheTail != null) {
			var node = this.cacheTail;
			this.cacheTail = node.previous;
			node.next = null;
			node.previous = this.tail;
			this.tail = node;
		}
	}
	,__class__: ash_core_NodePool
};
var ash_core_System = function() {
	this.priority = 0;
};
$hxClasses["ash.core.System"] = ash_core_System;
ash_core_System.__name__ = ["ash","core","System"];
ash_core_System.prototype = {
	addToEngine: function(engine) {
	}
	,removeFromEngine: function(engine) {
	}
	,update: function(time) {
	}
	,__class__: ash_core_System
};
var ash_core_SystemList = function() {
};
$hxClasses["ash.core.SystemList"] = ash_core_SystemList;
ash_core_SystemList.__name__ = ["ash","core","SystemList"];
ash_core_SystemList.prototype = {
	add: function(system) {
		if(this.head == null) {
			this.head = this.tail = system;
			system.next = system.previous = null;
		} else {
			var node = this.tail;
			while(node != null) {
				if(node.priority <= system.priority) break;
				node = node.previous;
			}
			if(node == this.tail) {
				this.tail.next = system;
				system.previous = this.tail;
				system.next = null;
				this.tail = system;
			} else if(node == null) {
				system.next = this.head;
				system.previous = null;
				this.head.previous = system;
				this.head = system;
			} else {
				system.next = node.next;
				system.previous = node;
				node.next.previous = system;
				node.next = system;
			}
		}
	}
	,remove: function(system) {
		if(this.head == system) this.head = this.head.next;
		if(this.tail == system) this.tail = this.tail.previous;
		if(system.previous != null) system.previous.next = system.next;
		if(system.next != null) system.next.previous = system.previous;
	}
	,removeAll: function() {
		while(this.head != null) {
			var system = this.head;
			this.head = this.head.next;
			system.previous = null;
			system.next = null;
		}
		this.tail = null;
	}
	,get: function(type) {
		var system = this.head;
		while(system != null) {
			if(js_Boot.__instanceof(system,type)) return system;
			system = system.next;
		}
		return null;
	}
	,iterator: function() {
		return new ash_GenericListIterator(this.head);
	}
	,__class__: ash_core_SystemList
};
var ash_signals_ListenerNode = function() {
};
$hxClasses["ash.signals.ListenerNode"] = ash_signals_ListenerNode;
ash_signals_ListenerNode.__name__ = ["ash","signals","ListenerNode"];
ash_signals_ListenerNode.prototype = {
	__class__: ash_signals_ListenerNode
};
var ash_signals_ListenerNodePool = function() {
};
$hxClasses["ash.signals.ListenerNodePool"] = ash_signals_ListenerNodePool;
ash_signals_ListenerNodePool.__name__ = ["ash","signals","ListenerNodePool"];
ash_signals_ListenerNodePool.prototype = {
	get: function() {
		if(this.tail != null) {
			var node = this.tail;
			this.tail = this.tail.previous;
			node.previous = null;
			return node;
		} else return new ash_signals_ListenerNode();
	}
	,dispose: function(node) {
		node.listener = null;
		node.once = false;
		node.next = null;
		node.previous = this.tail;
		this.tail = node;
	}
	,cache: function(node) {
		node.listener = null;
		node.previous = this.cacheTail;
		this.cacheTail = node;
	}
	,releaseCache: function() {
		while(this.cacheTail != null) {
			var node = this.cacheTail;
			this.cacheTail = node.previous;
			node.next = null;
			node.previous = this.tail;
			this.tail = node;
		}
	}
	,__class__: ash_signals_ListenerNodePool
};
var ash_signals_SignalBase = function() {
	this.listenerNodePool = new ash_signals_ListenerNodePool();
	this.numListeners = 0;
};
$hxClasses["ash.signals.SignalBase"] = ash_signals_SignalBase;
ash_signals_SignalBase.__name__ = ["ash","signals","SignalBase"];
ash_signals_SignalBase.prototype = {
	startDispatch: function() {
		this.dispatching = true;
	}
	,endDispatch: function() {
		this.dispatching = false;
		if(this.toAddHead != null) {
			if(this.head == null) {
				this.head = this.toAddHead;
				this.tail = this.toAddTail;
			} else {
				this.tail.next = this.toAddHead;
				this.toAddHead.previous = this.tail;
				this.tail = this.toAddTail;
			}
			this.toAddHead = null;
			this.toAddTail = null;
		}
		this.listenerNodePool.releaseCache();
	}
	,getNode: function(listener) {
		var node = this.head;
		while(node != null) {
			if(Reflect.compareMethods(node.listener,listener)) break;
			node = node.next;
		}
		if(node == null) {
			node = this.toAddHead;
			while(node != null) {
				if(Reflect.compareMethods(node.listener,listener)) break;
				node = node.next;
			}
		}
		return node;
	}
	,nodeExists: function(listener) {
		return this.getNode(listener) != null;
	}
	,add: function(listener) {
		if(this.getNode(listener) != null) return;
		var node = this.listenerNodePool.get();
		node.listener = listener;
		this.addNode(node);
	}
	,addOnce: function(listener) {
		if(this.getNode(listener) != null) return;
		var node = this.listenerNodePool.get();
		node.listener = listener;
		node.once = true;
		this.addNode(node);
	}
	,addNode: function(node) {
		if(this.dispatching) {
			if(this.toAddHead == null) this.toAddHead = this.toAddTail = node; else {
				this.toAddTail.next = node;
				node.previous = this.toAddTail;
				this.toAddTail = node;
			}
		} else if(this.head == null) this.head = this.tail = node; else {
			this.tail.next = node;
			node.previous = this.tail;
			this.tail = node;
		}
		this.numListeners++;
	}
	,remove: function(listener) {
		var node = this.getNode(listener);
		if(node != null) {
			if(this.head == node) this.head = this.head.next;
			if(this.tail == node) this.tail = this.tail.previous;
			if(this.toAddHead == node) this.toAddHead = this.toAddHead.next;
			if(this.toAddTail == node) this.toAddTail = this.toAddTail.previous;
			if(node.previous != null) node.previous.next = node.next;
			if(node.next != null) node.next.previous = node.previous;
			if(this.dispatching) this.listenerNodePool.cache(node); else this.listenerNodePool.dispose(node);
			this.numListeners--;
		}
	}
	,removeAll: function() {
		while(this.head != null) {
			var node = this.head;
			this.head = this.head.next;
			this.listenerNodePool.dispose(node);
		}
		this.tail = null;
		this.toAddHead = null;
		this.toAddTail = null;
		this.numListeners = 0;
	}
	,__class__: ash_signals_SignalBase
};
var ash_signals_Signal0 = function() {
	ash_signals_SignalBase.call(this);
};
$hxClasses["ash.signals.Signal0"] = ash_signals_Signal0;
ash_signals_Signal0.__name__ = ["ash","signals","Signal0"];
ash_signals_Signal0.__super__ = ash_signals_SignalBase;
ash_signals_Signal0.prototype = $extend(ash_signals_SignalBase.prototype,{
	dispatch: function() {
		this.startDispatch();
		var node = this.head;
		while(node != null) {
			node.listener();
			if(node.once) this.remove(node.listener);
			node = node.next;
		}
		this.endDispatch();
	}
	,__class__: ash_signals_Signal0
});
var ash_signals_Signal1 = function() {
	ash_signals_SignalBase.call(this);
};
$hxClasses["ash.signals.Signal1"] = ash_signals_Signal1;
ash_signals_Signal1.__name__ = ["ash","signals","Signal1"];
ash_signals_Signal1.__super__ = ash_signals_SignalBase;
ash_signals_Signal1.prototype = $extend(ash_signals_SignalBase.prototype,{
	dispatch: function(object1) {
		this.startDispatch();
		var node = this.head;
		while(node != null) {
			node.listener(object1);
			if(node.once) this.remove(node.listener);
			node = node.next;
		}
		this.endDispatch();
	}
	,__class__: ash_signals_Signal1
});
var ash_signals_Signal2 = function() {
	ash_signals_SignalBase.call(this);
};
$hxClasses["ash.signals.Signal2"] = ash_signals_Signal2;
ash_signals_Signal2.__name__ = ["ash","signals","Signal2"];
ash_signals_Signal2.__super__ = ash_signals_SignalBase;
ash_signals_Signal2.prototype = $extend(ash_signals_SignalBase.prototype,{
	dispatch: function(object1,object2) {
		this.startDispatch();
		var node = this.head;
		while(node != null) {
			node.listener(object1,object2);
			if(node.once) this.remove(node.listener);
			node = node.next;
		}
		this.endDispatch();
	}
	,__class__: ash_signals_Signal2
});
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe_Timer;
haxe_Timer.__name__ = ["haxe","Timer"];
haxe_Timer.prototype = {
	run: function() {
	}
	,__class__: haxe_Timer
};
var haxe_ds_ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe_ds_ObjectMap;
haxe_ds_ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe_ds_ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds__$StringMap_StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
};
$hxClasses["haxe.ds._StringMap.StringMapIterator"] = haxe_ds__$StringMap_StringMapIterator;
haxe_ds__$StringMap_StringMapIterator.__name__ = ["haxe","ds","_StringMap","StringMapIterator"];
haxe_ds__$StringMap_StringMapIterator.prototype = {
	hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		return this.map.get(this.keys[this.index++]);
	}
	,__class__: haxe_ds__$StringMap_StringMapIterator
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = ["haxe","ds","StringMap"];
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
		if(__map_reserved[key] != null) this.setReserved(key,value); else this.h[key] = value;
	}
	,get: function(key) {
		if(__map_reserved[key] != null) return this.getReserved(key);
		return this.h[key];
	}
	,exists: function(key) {
		if(__map_reserved[key] != null) return this.existsReserved(key);
		return this.h.hasOwnProperty(key);
	}
	,setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) return null; else return this.rh["$" + key];
	}
	,existsReserved: function(key) {
		if(this.rh == null) return false;
		return this.rh.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		if(__map_reserved[key] != null) {
			key = "$" + key;
			if(this.rh == null || !this.rh.hasOwnProperty(key)) return false;
			delete(this.rh[key]);
			return true;
		} else {
			if(!this.h.hasOwnProperty(key)) return false;
			delete(this.h[key]);
			return true;
		}
	}
	,keys: function() {
		var _this = this.arrayKeys();
		return HxOverrides.iter(_this);
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) out.push(key);
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) out.push(key.substr(1));
			}
		}
		return out;
	}
	,iterator: function() {
		return new haxe_ds__$StringMap_StringMapIterator(this,this.arrayKeys());
	}
	,toString: function() {
		var s = new StringBuf();
		s.b += "{";
		var keys = this.arrayKeys();
		var _g1 = 0;
		var _g = keys.length;
		while(_g1 < _g) {
			var i = _g1++;
			var k = keys[i];
			if(k == null) s.b += "null"; else s.b += "" + k;
			s.b += " => ";
			s.add(Std.string(__map_reserved[k] != null?this.getReserved(k):this.h[k]));
			if(i < keys.length) s.b += ", ";
		}
		s.b += "}";
		return s.b;
	}
	,__class__: haxe_ds_StringMap
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
$hxClasses["js._Boot.HaxeError"] = js__$Boot_HaxeError;
js__$Boot_HaxeError.__name__ = ["js","_Boot","HaxeError"];
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = ["js","Boot"];
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return (Function("return typeof " + name + " != \"undefined\" ? " + name + " : null"))();
};
var test_testAsh_TestAsh = function() {
	var engine = new ash_core_Engine();
	var gameManager = new test_testAsh_GameManager();
	engine.addSystem(gameManager,0);
	var player = new ash_core_Entity();
	engine.addEntity(player);
	var timestamp = Math.floor(33.333333333333336);
	new haxe_Timer(timestamp).run = function() {
		engine.update(timestamp);
	};
};
$hxClasses["test.testAsh.TestAsh"] = test_testAsh_TestAsh;
test_testAsh_TestAsh.__name__ = ["test","testAsh","TestAsh"];
test_testAsh_TestAsh.main = function() {
	new test_testAsh_TestAsh();
};
test_testAsh_TestAsh.prototype = {
	__class__: test_testAsh_TestAsh
};
var test_testAsh_GameManager = function() {
	ash_core_System.call(this);
};
$hxClasses["test.testAsh.GameManager"] = test_testAsh_GameManager;
test_testAsh_GameManager.__name__ = ["test","testAsh","GameManager"];
test_testAsh_GameManager.__super__ = ash_core_System;
test_testAsh_GameManager.prototype = $extend(ash_core_System.prototype,{
	__class__: test_testAsh_GameManager
});
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
$hxClasses.Math = Math;
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
var __map_reserved = {}
ash_core_Entity.nameCount = 0;
haxe_ds_ObjectMap.count = 0;
js_Boot.__toStr = {}.toString;
test_testAsh_TestAsh.main();
})(typeof console != "undefined" ? console : {log:function(){}});

//# sourceMappingURL=haxe.js.map