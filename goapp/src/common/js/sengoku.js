var sengoku = sengoku || {};

(function( module ){
	
	function load( path, cb ){
		var fns = 
			_.chain(_.range(1, 2))
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
			
			"http://sengoku-taisen-tcg.sega.jp/wp-content/uploads/1-063_web.png",
			"1-063",
			"射撃訓練",
			"しゃげきくんれん",
			"-",
			"第一弾ブースター",
			"紅",
			"毛利",
			"計略",
			"計略/戦闘",
			"赤",
			"-",
			"-",
			"-",
			"-",
			"C",
			"自陣にいる戦闘中の武将１体を対象とする：このターン中、対象武将の武力を１０００上昇させる。対象武将が槍足軽の武将と戦闘している場合、代わりに武力を２０００上昇させる。",
			"あなたは山札を１枚ドローする。"
			
			list = _.map(list, function(info){
				return {
					id:info[1],
					cname:info[2],
					set:info[4],
					color:info[5],
					atype:info[8],
					atype2:info[9],
					cost:info[10],
					power:info[12],
					city:info[13],
					ability:info[14],
					rarity:info[15],
					content:info[16],
					counter:info[17]
				}
			})
			cb(err, list)
		})
	}

	module.load = load
	
}) ( sengoku )