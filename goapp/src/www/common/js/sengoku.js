var sengoku = sengoku || {};

(function( module ){
	
	function parseCost( text ){
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
			
			"0_http://sengoku-taisen-tcg.sega.jp/wp-content/uploads/1-003_web.png",
			"1_1-003",
			"2_江",
			"3_ごう",
			"4_浅井三姉妹",
			"5_第一弾ブースター",
			"6_蒼",
			"7_浅井",
			"8_武将",
			"9_弓足軽",
			"10_青",
			"11_【防柵】",
			"12_500",
			"13_1",
			"14_女性",
			"15_R",
			"16_｛メイン｝｛待機⇒疲弊｝｛青｝：あなたは手札を１枚捨てる。そうした場合、敵陣にいる武将１体を対象とし、対象武将に１０００特殊ダメージを与える。<br />\n【防柵】（｛自陣配備時｝：自分の山札の上から１枚を裏向きで、自陣にいる疲弊状態の武将の防柵カードとして自陣へ配備してもよい）",
			"17_-"
			
			list = _.map(list, function(info){
				return {
					id:info[1],
					cname:info[2],
					set:info[5],
					color:info[6],
					atype:info[8],
					atype2:info[9],
					cost:parseCost( info[10] ),
					ability:info[11],
					power:info[12],
					city:info[13],
					symbol:info[14],
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