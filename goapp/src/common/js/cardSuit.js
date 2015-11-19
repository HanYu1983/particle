var cardSuit = cardSuit || {};

(function(module){
  
  function defaultModel() {
    return {
  "cardSuit":[
		{
			"name":"拳擊手",
			"game":"yugioh",
			"cards":[
				"65367484","65367484","5361647","5361647","5361647","35537251","53573406","53573406","68144350","68144350","68144350","32750341","32750341","79867938","79867938","79867938","13313278","13313278","4549095","12580477","32807846","32807846","32807846","36916401","36916401","54447022","5318639","5318639","5318639","14087893","27243130","27243130","53582587","83555667","5851097","50078509","50078509","8316565","8316565","84749824","39765958","76774528","83994433","16195942","59627393","94380860","71921856","23232295","23232295","31437713","82633039","82633039","46772449","12014404","93568288"
			]
		},
		{
			"name":"資本",
			"game":"army",
			"cards":[
				"2","2","2",
				"2","2","2",
				"9","9","9",
				"13","13","13",
				"25","25","25",
				"24","24","24",
				"20","20","20",
				"3","3","3",
				"26","26","26",
				"27","27","27",
				"30","30","30",
				"24","24","24",
				"16","16","16"
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
  
  module.defaultModel = defaultModel
  module.editCardSuit = editCardSuit
  module.removeCardSuit = removeCardSuit
  module.load = load
  module.save = save
  
}) (cardSuit)