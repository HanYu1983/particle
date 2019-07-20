var sangoWar = sangoWar || {};

(function( module ){
	
	function load( path, cb ){
		var get14_16 = function(cb){
			$.ajax({
				url: "/common/txt/sangoWarJp14_16.json",
				dataType:'json',
				success:function(data){
					cb(null, data)
				},
				error: function(xhr, res, err){
					console.log("取得sangoWarJp14_16失敗")
					console.log(err)
					return cb(null, [])
				}
			})
		}

		$.get(path)
			.pipe( CSV.parse )
			.done( function(rows) {
				var cardlist = sangoWar.csv2json( rows )
				get14_16(function(err, info){
					if( err ){
						return cb(err)
					}
					cardlist = cardlist.concat(info)
					cb(null, cardlist)
				})
			})
	}
	
	function parseCost( text ){
		//var map1 = "緑黒赤紫青"
		var map2 = "①②③④⑤"
		var ret = [0, 0]
		for( var k in text ){
			var c = text[k]
			if( map2.indexOf( c ) != -1 ){
				ret[1] = map2.indexOf( c ) + 1
			} else {
				ret[0] ++
			}
		}
		return ret
	}
	
	function csv2json( rows ){
		var cardlist = [];
		for( var i =0; i < rows.length; i++){
			switch( rows[i][0] ){
				case 'CP':
				case 'UC':
				case 'PT':
				case 'C':
				case 'SR':
				case 'TR':
				case 'R':
				case 'LE':
				case 'PT/超TR':
				case 'R/TR':
				case 'SR/TR':
				case 'UC/TR':
				case 'SR/TR/EXF':
				case 'UC/EXF':
				case 'C/EXF':
				case 'R/EXF':
				case 'SR/EXF':
				case 'R/TR/超TR':
				case 'ST限定R':
				case 'ST限定SR':
				case 'SR/伝説TR':
				case 'SR/TR/超TR':
				case '転生':
					var rare = rows[i];
					var id = rows[i+1][0];
					var ntype = rows[i+2][0];//勢力
					var ctype = rows[i+3][0];//卡片種類
					var cname = rows[i+4][0];//名稱
					var atype = rows[i+8][0];//種別
					var atype2 = rows[i+9][0];//兵種
					var cost = rows[i+10][0];//cost
					var acity = rows[i+11][0];//攻城
					var power = rows[i+12][0];//武力
					var ability = rows[i+13][0];//能力
					var content = rows[i+14][0];//內文
					var counter;
					if( rows[i+15] != undefined ){
						counter = rows[i+15][0];//解說&反擊技略
					}
					//用這個檢查他是不是少打-
					//console.log( ability );
					cardlist.push({
						id:id,
						rare:rare,
						ntype:ntype,
						ctype:ctype,
						cname:cname,
						atype:atype,
						atype2:atype2,
						cost:parseCost(cost),
						acity:acity,
						power:power,
						ability:ability,
						content:content,
						counter:counter
					})
				break
			}
		}
		console.log(cardlist)
		return cardlist
	}
	
	function formatKey( id ){
		if(id.indexOf(".jpg") != -1){
			return id
		}
		if(id.indexOf(".png") != -1){
			return id
		}
		if( id.indexOf("(") == -1 ){
			return id + ".jpg"
		}
		return id.substring( 0, id.indexOf("(") ) + ".jpg"
	}
	
	function loadCh( path, cb ){
		var fns = 
			_.chain(_.range(1, 126))
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
		var getExtension = function(cb){
			$.ajax({
				url: "/fn/tcg/getExtension?game=sangoWar",
				dataType:'json',
				success:function(data){
					if(data.Error){
						console.log("取得擴充包失敗")
						console.log(data.Error)
						return cb(null, [])
					}
					cb(null, data.Info)
				},
				error: function(xhr, res, err){
					console.log("取得擴充包失敗")
					console.log(err)
					return cb(null, [])
				}
			})
		}
		async.parallel(fns.concat([getExtension]), function(err, datas){
			var list = _.reduce(datas, function(all, curr){
				return all.concat(curr)
			}, [])
			list = _.map(list, function(info){
				var cid = info[1].replace(/\t/g, '')
				var parse = {
					id:cid,
					cid:cid,
					rare:info[0],
					ntype:info[5][2],
					ctype:"",
					cname:info[2],
					atype:info[3],
					atype2:info[4],
					cost:info[5],
					acity:parseInt(info[6]),
					power:parseInt(info[7].replace("+", "")),
					ability:info[8],
					content:info[9],
					counter:info[10]
				}
				// 如果有第12項資料, 代表是三國擴充包來的
				// 這個資料是圖片路徑(也是圖片ID)
				// 前面要加上/tcgdbfile2/root/tcg/extension/
				if(info[11]){
					parse.id = info[11]
				}
				return parse
			})
			cb(err, list)
		})
	}
	
	module.load = load
	module.loadCh = loadCh
	module.csv2json = csv2json
	module.formatKey = formatKey
	
}) ( sangoWar )