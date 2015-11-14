var magic = magic || {};

( function( module ) {
	
	function parseCost( cost ){
		cost = cost.replace(/\//g, "")
		var colorStr = 'WBRUG'
		var costary = [0,0,0,0,0,0]
		for( var i in cost ){
			var c = cost[i]
			var idx = colorStr.indexOf(c)
			switch( idx ){
			case -1:
				costary[ costary.length-1 ] = parseInt(c)
				break
			default:
				++costary[idx]
				break
			}
		}
		return costary
	}
	
	function load( path, cb ){
		$.ajax({
			url: path,
			dataType: 'text',
			success: function( ret ){
				var cardsTag = $(ret).find('cards').find('card')
				var cards = _.map( cardsTag, function( card ){
					card = $(card)
					var atk = 0
					var def = 0
					var pt = card.find('pt').html()
					if( pt && pt.split('/').length == 2 ){
						atk = parseInt( pt.split('/')[0] )
						def = parseInt( pt.split('/')[1] )
					}
					var colors = card.find('color')
					var colorsary = _.map( colors, function( color ){
						return $(color).html()
					}).join("")
					
					return {
						id: card.find('name').html(),
						name: card.find('name').html(),
						color: colorsary,
						manacost: parseCost(card.find('manacost').html()),
						cmc: parseInt(card.find('cmc').html()),
						type: card.find('type').html(),
						tablerow: card.find('tablerow').html(),
						text: card.find('text').html(),
						atk: atk,
						def: def
					}
				})
				cb( null, cards )
			},
			error: function( xhr, res, err ){
				cb( err )
			}
		})
	}
	
	function formatKey( id ){
		if( id.indexOf("(") == -1 ){
			return id + ".jpg"
		}
		return id.substring( 0, id.indexOf("(") ) + ".jpg"
	}
	
	module.load = load
	module.formatKey = formatKey
	
}) ( magic )