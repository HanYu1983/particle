var cardsearch = cardsearch || {};

(function( module ){
	
	function fullMatch(key, value){
		return function(obj){
			return obj[ key ] == value
		}
	}
	
	function attrEq( key, value ){
		return function( obj ){	
			switch( typeof obj[key] ){
			case "string":
				return obj[ key ].toUpperCase().indexOf( value.toUpperCase() ) != -1
			case "number":
				return obj[ key ] == value
			}
			return false
		}
	}
	
	function attrGe( key, value ){
		return function( obj ){
			switch( typeof obj[key] ){
			case "string":
				var origin = parseInt(obj[key])
				if(isNaN(origin)){
					return false
				}
				return origin >= value
				
				// return obj[ key ].indexOf( value ) != -1
			case "number":
				return obj[ key ] >= value
			}
			return false
		}
	}
	
	function attrLe( key, value ){
		return function( obj ){
			switch( typeof obj[key] ){
			case "string":
				var origin = parseInt(obj[key])
				if(isNaN(origin)){
					return false
				}
				return origin <= value
				
				//return obj[ key ].indexOf( value ) != -1
			case "number":
				return obj[ key ] <= value
			}
			return false
		}
	}
	
	function indexGe( key, idx, value ){
		return function( obj ){
			if( obj[key] ){
				return obj[key][idx] >= value
			}
			return false
		}
	}
	
	function indexLe( key, idx, value ){
		return function( obj ){
			if( obj[key] ){
				return obj[key][idx] <= value
			}
			return false
		}
	}
	
	function indexEq( key, idx, value ){
		return function( obj ){
			if( obj[key] ){
				return obj[key][idx] == value
			}
			return false
		}
	}
	
	function not( fn ){
		return function( obj ){
			return fn( obj ) == false
		}
	}
	
	function and( fns ){
		return function( obj ){
			return _.reduce( fns, function( ret, fn ){
				return ret && fn( obj )
			}, true)
		}
	}
	
	function or( fns ){
		return function( obj ){
			return _.reduce( fns, function( ret, fn ){
				return ret || fn( obj )
			}, false)
		}
	}
	
	function filter( fn, list ){
		var ret = _.filter( list, fn )
		return ret
	}
	
	function search( fns, cardlist ){
		return filter( and( fns ), cardlist )
	}

	// var ret = cardsearch.searchWithInfo({time: 5, count: 4}, fns, cardlist);
	// console.log(ret);
	function searchWithInfo( {time,count}, fns, cardlist ){
		var l = search(fns, cardlist);
		l.sort(() => Math.random() - 0.5);
		var first = l.slice(0, time);
		var ret = []
		for(let i=0; i<count; ++i){
			ret = ret.concat(first);
		}
		return ret;
	}
	
	module.filter = filter
	module.and = and
	module.attrEq = attrEq
	module.attrGe = attrGe
	module.attrLe = attrLe
	module.not = not
	module.or = or
	module.indexGe = indexGe
	module.indexLe = indexLe
	module.indexEq = indexEq
	module.search = search
	module.fullMatch = fullMatch
	module.searchWithInfo = searchWithInfo
	
}) ( cardsearch )