var cardSuit = cardSuit || {};

(function(module){
  
  function defaultModel() {
    return {
  "cardSuit":[
		{
			"name":"神龍",
			"game":"gundamWarN",
			"cards":[
				"179003_01A_C_WT001U_white","179003_01A_C_WT001U_white","179003_01A_C_WT001U_white","179003_01A_C_WT002U_white","179003_01A_C_WT002U_white","179003_01A_C_WT002U_white","179003_01A_C_WT003R_white","179003_01A_O_WT001C_white","179003_01A_O_WT001C_white","179003_01A_O_WT001C_white","179004_01A_C_WT010C_white","179004_01A_C_WT010C_white","179004_01A_C_WT010C_white","179007_02A_C_WT013C_white","179009_03B_CH_WT020R_white","179009_03B_CH_WT020R_white","179009_03B_O_WT004U_white","179016_04B_C_WT036C_white","179016_04B_C_WT036C_white","179016_04B_C_WT036C_white","179016_04B_U_WT068R_white_haku","179016_04B_U_WT068R_white_haku","179016_04B_U_WT068R_white_haku","179019_02A_U_WT028R_white","179019_02A_U_WT028R_white","179019_02A_U_WT028R_white","179024_03B_U_WT057U_white","179024_04B_U_WT074C_white","179024_04B_U_WT074C_white","179024_04B_U_WT074C_white","179025_07D_G_VT016C_purple","179025_07D_G_VT016C_purple","179025_07D_G_VT016C_purple","179025_07D_O_WT011C_white","179025_07D_U_WT138C_white","179025_07D_U_WT138C_white","179025_07D_U_WT138C_white","179027_09D_O_WT014N_white","179028_10D_O_WT015N_white","179028_10D_O_WT015N_white","179028_10D_O_WT015N_white","179028_10D_U_WT181N_white","179028_10D_U_WT181N_white","179028_10D_U_WT181N_white","179030_11E_G_VT020N_purple","179030_11E_G_VT020N_purple","179030_11E_G_VT020N_purple","179901_00_A_WT002P_white","179901_00_C_WT002P_white","179901_00_C_WT009P_white"
			]
		},
		{
			"name":"貝吉塔",
			"game":"dragonZ",
			"cards":[
				"C1","C2","C3","C53","C55","C57","C59","C60","P20","P7","R121","R146","R147","R148","R158","R160","S1","S103","S103","S103","S109","S121","S122","S130","S150","S150","S150","S2","S25","S3","S36","S36","S36","S4","S44","S44","S44","S50","S62","S63","S70","S81","S82","S95","S95","S95","U102","U103","U104","U105","U106","U108","U109","U112","U113","U117","U118","U61","U62","U63"
			]
		},
		{
			"name":"蓋特變形",
			"game":"crusade",
			"cards":[
				"123001_C-001_red","123001_C-001_red","123001_C-005_red","123001_C-005_red","123001_C-005_red","123001_CH-001_red_02","123001_CH-001_red_02","123001_CH-001_red_02","123001_CH-002_red","123001_CH-002_red","123001_CH-002_red","123001_CH-003_red","123001_CH-003_red","123001_CH-003_red","123001_U-001_red","123001_U-001_red","123001_U-001_red","123001_U-002_red","123001_U-002_red","123001_U-002_red","123001_U-003_red","123001_U-003_red","123001_U-003_red","123001_U-004_red","123001_U-004_red","123001_U-004_red","123001_U-005_red","123001_U-005_red","123001_U-005_red","123001_U-010_red_01","123001_U-010_red_01","123001_U-010_red_01","123001_U-011_red","123001_U-011_red","123001_U-011_red","123001_U-012_red","123001_U-012_red","123001_U-012_red","123002_U-025_red","123002_U-025_red","123002_U-025_red","123101_C-032_red","123101_C-032_red","123101_C-032_red","123101_C-033_red","123101_C-033_red","123101_C-033_red","123901_C-002_red","123901_C-002_red","123901_C-002_red"
			]
		},
		{
			"name":"群蜀快攻",
			"game":"sgs",
			"cards":[
				"01132","01134","01134","01134","01145","01145","01145","01181","01185","01185","01185","01185","01185","01185","01185","01185","01185","02076","02081","02081","02084","02084","02084","02085","02085","02087","02087","02087","02088","02110","02115","02115","02115","03040","03047","03102","03102","03102","03108","03108","03108","03116","03116","03120","03168","03168","03168","03175","03175","03175"
			]
		},
		{
			"name":"拳擊手",
			"game":"yugioh",
			"cards":[
				"65367484","65367484","5361647","5361647","5361647","35537251","53573406","53573406","68144350","68144350","68144350","32750341","32750341","79867938","79867938","79867938","13313278","13313278","4549095","12580477","32807846","32807846","32807846","36916401","36916401","54447022","5318639","5318639","5318639","14087893","27243130","27243130","53582587","83555667","5851097","50078509","50078509","8316565","8316565","84749824","39765958","76774528","83994433","16195942","59627393","94380860","71921856","23232295","23232295","31437713","82633039","82633039","46772449","12014404","93568288"
			]
		},
		{
			"name":"中國99",
			"game":"army",
			"cards":[
				"124","35","35","35","35","35","35","0","0","0","94","94","94","86","86","78","78","78","83","85","85","1","1","1","41","41","41","43","43","43","6","6","6","92","92","92","4","4","54","54","54","71","71","113","113","115","115","162","162","161","161"
			]
		},
		{
			"name":"美國大兵",
			"game":"army",
			"cards":[
				"123","19","21","19","21","40","44","3","14","30","30","42","25","32","30","2","16","19","21","50","21","40","44","3","14","13","13","42","25","32","13","2","16","50","21","50","21","40","44","3","14","13","13","42","25","32","13","2","16","26","26"
			]
		},
		{
			"name":"貪吃老鼠",
			"game":"magic",
			"cards":[
				"Abduction","Abyssal Specter","Abyssal Specter","Abyssal Specter","Abyssal Specter","Counterspell","Counterspell","Counterspell","Counterspell","Dark Ritual","Dark Ritual","Dark Ritual","Dark Ritual","Daze","Duress","Duress","Duress","Hinder","Hinder","Hinder","Island","Island","Island","Island","Island","Island","Island","Island","Island","Island","Island","Island","Masticore","Probe","Probe","Ravenous Rats","Ravenous Rats","Ravenous Rats","Ravenous Rats","Recoil","Recoil","Recoil","Recoil","Repulse","Repulse","Repulse","Swamp","Swamp","Swamp","Swamp","Swamp","Swamp","Swamp","Swamp","Swamp","Swamp","Swamp","Thieving Magpie","Thieving Magpie","Words of Wisdom"
			]
		},
		{
			"name": "阿姆羅",
			"game": "gundamWar",
			"cards":["38211.jpg","38211.jpg","38211.jpg","60025.jpg","60025.jpg","60025.jpg","21006.jpg","21006.jpg","21006.jpg","26009.jpg","26009.jpg","26009.jpg","32023.jpg","32023.jpg","32023.jpg","42031.jpg","42031.jpg","42031.jpg","42037.jpg","42037.jpg","42037.jpg","55024.jpg","55024.jpg","55024.jpg","53027.jpg","53027.jpg","53027.jpg","1189.jpg","1189.jpg","1189.jpg","52025.jpg","52025.jpg","52025.jpg","53025.jpg","53025.jpg","53025.jpg","1195.jpg","1195.jpg","1195.jpg","1046.jpg","1046.jpg","1046.jpg","1046.jpg","1046.jpg","1046.jpg","1046.jpg","1046.jpg","1046.jpg","1046.jpg","1046.jpg"]
		},
		{
			"name": "初始魏",
			"game": "sangoWar",
			"cards":[
			"1-002.jpg",
			"1-002.jpg",
			
			"1-003.jpg",
			"1-003.jpg",
			"1-003.jpg",
			
			"1-006.jpg",
			"1-006.jpg",
			"1-006.jpg",
			
			"1-007.jpg",
			"1-007.jpg",
			"1-007.jpg",
			
			"1-008.jpg",
			"1-008.jpg",
			
			"1-009.jpg",
			"1-009.jpg",
			"1-009.jpg",
			
			"1-011.jpg",
			"1-011.jpg",
			"1-011.jpg",
			
			"1-014.jpg",
			"1-014.jpg",
			"1-014.jpg",
			
			"1-016.jpg",
			"1-016.jpg",
			"1-016.jpg",
			
			"1-019.jpg",
			
			"1-021.jpg",
			"1-021.jpg",
			"1-021.jpg",
			
			"1-022.jpg",
			"1-022.jpg",
			"1-022.jpg",
			"1-022.jpg",
			
			"1-023.jpg",
			"1-023.jpg",
			"1-023.jpg",
			
			"1-024.jpg",
			"1-024.jpg",
			"1-024.jpg",
			"1-024.jpg",
			
			"1-025.jpg",
			"1-025.jpg",
			
			"1-026.jpg",
			"1-026.jpg",
			"1-026.jpg",
			"1-026.jpg",
			
			"1-030.jpg",
			
			"1-124.jpg",
			"1-123.jpg",
			"1-123.jpg"
		]
		
   }
  ]
}
  }
  
  /**
  新增/修改。若找到name代表修改，否則為新增
  params; {
    name: string,
    game: "鋼彈大戰" | "三國誌大戰" | "格鬥風雲錄",
    cards: [string]
  }
  */
  function editCardSuit( mo, params ){
    var target = _.find(mo.cardSuit, function(item){
      return item.name == params.name
    })
    if( target ){
      if( params.game ){
        target.game = params.game
      }
	  if( params.backId ){
        target.backId = params.backId
      }
      if( params.cards ){
        target.cards = params.cards.slice()
      }
    } else {
      var copy = JSON.parse( JSON.stringify(params) )
      mo.cardSuit.push( copy )
    }
  }
  
  /**
  刪除指定名稱的card suit
  */
  function removeCardSuit( mo, name ){
    var target = _.find(mo.cardSuit, function(item){
      return item.name == name
    })
    if( target ){
      mo.cardSuit = _.without( mo.cardSuit, target )
    }
  }
  
  /**
  讀取
  若沒有資料，會回傳預設model
  cb: function( err, model ){
    model: {}
  }
  */
  /*
  function load( fbid, token, cb ){
    store.load({
      FBID: fbid,
      AccessToken: token,
      FileName: 'cardSuit.json'
    }, function( err, ret ){
      if( err ){
        cb( err )
      } else {
        if( ret == "" ){
          cb( null, defaultModel() )
          
        } else {
          cb( null, JSON.parse( ret ))
          
        }
      }
    })
  }
  
  function save( fbid, token, data, cb ){
    store.save({
      FBID: fbid,
      AccessToken: token,
      FileName: 'cardSuit.json',
      Data: JSON.stringify(data)
    }, function( err, ret ){
      cb( err, ret )
    })
  }
  */
  function load2( fbid, token, cb ){
    var path = db2path.sf( db2path.cardSuitJson, [fbid] )
    db2.file( path,
      {
        FBID: fbid,
        AccessToken: token
      },
      'json',
      function( err, ret ){
        if( err == "file not found" ){
          cb( null, defaultModel() )
        } else {
          cb( err, ret)
        }
      })
  }
  
  function save2( fbid, token, data, cb ){
	var path = db2path.sf( db2path.cardSuitJson, [fbid] )
    db2.writefile( path,
      {
        FBID: fbid,
        AccessToken: token,
        Content: JSON.stringify(data),
        Override: true
      },
      cb)
  }
  
  module.defaultModel = defaultModel
  module.editCardSuit = editCardSuit
  module.removeCardSuit = removeCardSuit
  /*
  module.load = load
  module.save = save
  */
  module.load2 = load2
  module.save2 = save2
  
}) (cardSuit)