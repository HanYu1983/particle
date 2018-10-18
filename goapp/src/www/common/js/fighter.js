var fighter = fighter || {};

(function( module ){
	
	function load( path, cb ){
		$.ajax({
			url: path,
			dataType:'text',
			success:function(data){
				// skip first line
				var [_, ...lines] = data.split('\n')
				var jsons = lines.map(line=>line.split('\t')).map(info=>{
					return {
						id: info[0],
						cid: info[0],
						level: parseInt(info[1]),
						cname: info[2],
						weight: parseInt(info[3]),
						ctype: info[4],
						atk: parseInt(info[5]),
						abi1: info[6],
						abi2: info[7],
						abi3: info[8]
					}
				})
				cb(null, jsons)
			},
			error: function(xhr, res, err){
				cb(err)
			}
		})
	}

	module.load = load
	
}) ( fighter )