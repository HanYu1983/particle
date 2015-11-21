var army = army || {};

( function( module ){
	
	function load( cb ){
		$.ajax({
			url: '../fn/cardInfo/cardList',
			dataType: 'json',
			success: function( ret ){
				if( ret.Error ){
					cb( ret.Error )
				} else {
					var info = JSON.parse(ret.Info).Info
					var list = []
					for( var i in info ){
						var obj = info[i]
						var id = obj.Id
						var param = obj.Params
						param.id = id
						param.Abs = [param.Ab1, param.Ab2, param.Ab3, param.Ab4, param.Ab5].join(",")
						param.CostAry = param.Cost.split("-")
						param.text = param.Text // Text是dom物件的關鍵字，最好不要用
						list.push(param)
					}
				}
				cb( null, list )
			},
			error: function( xhr, res, err ){
				cb( err )
			}
		})
	}
	
	module.load = load
	
}) ( army )