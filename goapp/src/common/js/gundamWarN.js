var gundamWarN = gundamWarN || {};

(function( module ){
	
	var prods = [
    "179030",
    "179029",
    "179028",
    "179027",
    "179026",
    "179025",
    "179024",
    "179023",
    "179022",
    "179021",
    "179020",
    "179019",
    "179018",
    "179017",
    "179016",
    "179015",
    "179014",
    "179013",
    "179012",
    "179011",
    "179010",
    "179009",
    "179008",
    "179007",
    "179006",
    "179005",
    "179004",
    "179003",
    "179002",
    "179001",
    "179901",
		"179031"
	]
	
	var transMap = {
		'した':'了',
		'サイン':'簽名',
		'サイコミュ':'感應炮',
		'ユニット':'機體',
		'リロール':'重置',
		'ロール':'橫置',
		'ターン':'回合',
		'する':'執行',
		'その':'那個',
		'カード':'卡',
		'与える':'給予',
		'ダメージ':'傷害',
		'られない':'不可以',
		'られる':'可以',
		'与え':'給予',
		'持たない':'不持有的',
		'持つ':'持有的',
		'ある':'存在的',
		'全て':'全部',
		'フェイズ':'階段',
		'得る':'獲得',
		'この':'這個',
		'のみ':'只有',
		'こ':'這',
		'の':'的',
		'プレイされた':'被使用的',
		'プレイヤー':'玩家',
		'プレイ':'使用',
		'できる':'可以',
		'できない':'不可以',
		'できず':'不可以並',
		'同じ':'相同的',
		'エリア':'區域',
		'ではない':'不是的',
		'ている':'正在的',
		'ていない':'不正在的',
		'いる':'存在',
		'いない':'不存在',
		'されず':'不被使',
		'され':'被使',
		'受けない':'不受到',
		'受ける':'受到',
		'受けた':'受到的',
		'コイン':'指示物',
		'乗せる':'放上去',
		'場に出た':'出場',
		'ハンガー':'機庫',
		'引く':'抽',
		'引い':'抽',
		'しない':'不執行',
		'しか':'超過',
		'シャッフル':'洗牌',
		'移す':'移動',
		'支払':'支付',
		'ジャンクヤード':'墓地',
		'まで':'前',
		'いずれ':'任何一個',
		'直後':'之後馬上',
		'より':'比較',
		'少ない':'少',
		'ゲーム':'遊戲',
		'から':'從',
		'取り除く':'除外',
		'または':'或',
		'置き換える':'替換',
		'コマンド':'指令',
		'持ち主':'持有者',
		'残り':'剩下的',
		'ように':'模樣的',
		'コスト':'費用',
		'抜き出':'抽出',
		'テキスト':'敍述',
		'セット':'配置',
		'グループ':'群',
		'ステップ':'階段',
		'オペ':'OP',
		'さらに':'再來',
		'ならない':'不能',
		'新たな':'新的',
		'行われる':'運行',
		'キャラ':'角色',
		'カット':'切入',
		'マイナス':'負數',
		'おいて':'為前題',
		'代わり':'代替',
		'まだ':'或是',
		'なった':'變成了',
		'なる':'變成',
		'クイック':'快速',
		'ゲイン':'紅利',
		'レベル':'等級',
		'つき':'每'
	}
	
	function load( path, cb ){
		var paths = _.map( prods, function( prod){
			return path + prod + ".json"
		})
		async.waterfall([
			function(cb){
				async.map(paths, function(path, cb){
					$.ajax({
						url: path,
						dataType: 'json',
						success: function( ret ){
							cb( null, ret )
						},
						error: function(xhr, res, err){
							cb( err )
						}
					})
				}, cb)
			},
			function( rets, cb ){
				var list = _.reduce( rets, function( all, curr ){
					return all.concat( curr.data )
				}, [])
				for( var i in list ){
					var obj = list[i]
					var originContent = obj['info_12']
					if( originContent != null ){
						for(var key in transMap ){
							var target = transMap[key]
							originContent = originContent.replace(new RegExp(key, "g"), target)
						}
					}
					obj['trans'] = originContent
					obj.cardId = obj.id
					obj.id = obj.prodid +'_'+ obj.info_25
					var shouldInt = [4,5,7,8,9]
					for( var i in shouldInt ){
						var idx = shouldInt[i]
						try{
							obj['info_'+idx] = parseInt(obj['info_'+idx])
							if( isNaN( obj['info_'+idx] ) ){
								obj['info_'+idx] = 0
							}
						} catch (e){
							obj['info_'+idx] = 0
						}
					}
				}
				cb( null, list )
			}
		], cb)
	}
	
	module.load = load
	
})( gundamWarN )