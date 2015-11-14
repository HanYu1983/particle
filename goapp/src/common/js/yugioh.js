var yugioh = yugioh || {};

(function( module ) {
	
	function load( path, cb ){
		$.ajax({
			url: path,
			dataType: 'text',
			success: function( data ){
				data = data.replace(/\uCR/gi, '')
				var rows = data.split('\n')
				var ary = []
				
				for( var i in rows ){
					var col = rows[i]
					var coldata = col.split('\t')
					if( coldata[0] == undefined || coldata[0] == "" ){
						continue
					}
					
					var decode = ""
					if( typeof coldata[10] == 'string' ){
						var text = coldata[10]
							.replace(/\uFEFF/gi, '')
							.replace(/%22/g, '')
							.replace(/%A9/gi, '')
							.replace(/%C9/gi, '')
							.replace(/%B1/gi, '')
							.replace(/%B4/gi, '\`')
							.replace(/%2C/gi,'')
							.replace(/%E9/gi,'')
							.replace(/%FA/gi, '')
							.replace(/%FB/gi, '')
							.replace(/%D7/gi, '')
							.replace(/%0D/gi, '')
							.replace(/%0A/gi, '')
							.replace(/%CF/gi, '')
						
						try{
							decoded = decodeURIComponent(text)
						} catch ( e ){
							console.log( text )
						}
					}
					
					ary.push({
						id: coldata[0],
						name: coldata[1],
						level: parseInt(coldata[2]),
						attribute: coldata[3],
						race: coldata[4],
						type: coldata[5],
						lscale: parseInt(coldata[6]),
						rscale: parseInt(coldata[7]),
						attack: parseInt(coldata[8]),
						defence: parseInt(coldata[9]),
						text: decoded,
						alias: coldata[11],
						setcode: coldata[12]
					})
				}
				
				ary.shift()
				cb( null, ary )
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
	
}) ( yugioh )