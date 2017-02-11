var magic = magic || {};

( function( module ) {
	
	function parseCost( cost ){
		var costary = [0,0,0,0,0,0]
		if( cost == null ){
			return costary
		}
		cost = cost.replace(/\//g, "")
		if( cost == null ){
			return costary
		}
		var colorStr = 'WBRUG'
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
					
					var sets = card.find('set')
					var setary = _.map( sets, function( set ){
						return $(set).html()
					}).join(",")
					
					return {
						id: card.find('name').html(),
						name: card.find('name').html(),
						color: colorsary,
						set: setary,
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
	
	function loadCh( path, cb ){
		var fns = 
			_.chain(_.range(1, 550))
				.map(function(i){
					return path + i + ".json"
				})
				.map(function(path){
					return function(cb){
						$.ajax({
							url: path,
							dataType:'json',
							success:function(data){
								cb(null, data)
							},
							error: function(xhr, res, err){
								cb(err)
							}
						})
					}
				}).value()
		async.parallel(fns, function(err, datas){
			var list = _.reduce(datas, function(all, curr){
				return all.concat(curr)
			}, [])
			list = _.map(list, function(info){
				return {
					name:info[0],
					text:info[2],
					"set":info[3],
					id:info[4],
					type:info[5],
					atk:info[6],
					def:info[7],
					manacost: parseCost(info[8]),
					cmc:info[9]
				}
			})
			cb(err, list)
		})
	}
	
	module.load = load
	module.loadCh = loadCh
	module.formatKey = formatKey
	
}) ( magic )