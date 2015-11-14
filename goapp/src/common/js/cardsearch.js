var cardsearch = cardsearch || {};

(function( module ){
	
	function attrEq( key, value ){
		return function( obj ){
			if( key == "cost" ){
				return obj[ "cost" ][0] == value
			} else if( key == "costA" ){
				return obj[ "cost" ][0] + obj[ "cost" ][1] == value
			} else {
				switch( typeof obj[key] ){
				case "string":
					//console.log( obj[key], value, obj[ key ].indexOf( value ) )
					return obj[ key ].indexOf( value ) != -1
				case "number":
					return obj[ key ] == value
				}
			}
			return false
		}
	}
	
	function attrGe( key, value ){
		return function( obj ){
			if( key == "cost" ){
				return obj[ "cost" ][0] >= value
			} else if( key == "costA" ){
				return obj[ "cost" ][0] + obj[ "cost" ][1] >= value
			} else {
				switch( typeof obj[key] ){
				case "string":
					return obj[ key ].indexOf( value ) != -1
				case "number":
					return obj[ key ] >= value
				}
			}
			return false
		}
	}
	
	function attrLe( key, value ){
		return function( obj ){
			if( key == "cost" ){
				return obj[ "cost" ][0] <= value
			} else if( key == "costA" ){
				return obj[ "cost" ][0] + obj[ "cost" ][1] <= value
			} else {
				switch( typeof obj[key] ){
				case "string":
					return obj[ key ].indexOf( value ) != -1
				case "number":
					return obj[ key ] <= value
				}
			}
			return false
		}
	}
	
	function and( fns ){
		return function( obj ){
			return _.reduce( fns, function( ret, fn ){
				return ret && fn( obj )
			}, true)
		}
	}
	
	function filter( fn, list ){
		var ret = _.filter( list, fn )
		return ret
	}
	
	function search( fns, cardlist ){
		return filter( and( fns ), cardlist )
	}
	
	module.filter = filter
	module.and = and
	module.attrEq = attrEq
	module.attrGe = attrGe
	module.attrLe = attrLe
	module.search = search
	
}) ( cardsearch )