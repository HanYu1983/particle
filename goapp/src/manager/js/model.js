var model = model || {};

(function(module){
  
  function defaultModel() {
    return {
  "cardSuit":[
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
		
   },
   {
	  "name": "初始吳",
     "game": "sangoWar",
	  "cards":[
			"1-062.jpg",
			"1-062.jpg",
			"1-062.jpg",
			
			"1-063.jpg",
			"1-063.jpg",
			"1-063.jpg",
			
			"1-066.jpg",
			"1-066.jpg",
			"1-066.jpg",
			
			"1-067.jpg",
			"1-067.jpg",
			"1-067.jpg",
			
			"1-068.jpg",
			"1-068.jpg",
			
			"1-069.jpg",
			"1-069.jpg",
			
			"1-071.jpg",
			"1-071.jpg",
			"1-071.jpg",
			
			"1-075.jpg",
			"1-075.jpg",
			"1-075.jpg",
			
			"1-077.jpg",
			"1-077.jpg",
			"1-077.jpg",
			
			"1-079.jpg",
			
			"1-081.jpg",
			"1-081.jpg",
			"1-081.jpg",
			
			"1-082.jpg",
			"1-082.jpg",
			"1-082.jpg",
			"1-082.jpg",
			
			"1-083.jpg",
			"1-083.jpg",
			"1-083.jpg",
			
			"1-084.jpg",
			"1-084.jpg",
			"1-084.jpg",
			"1-084.jpg",
			
			"1-085.jpg",
			"1-085.jpg",
			"1-085.jpg",
			"1-085.jpg",
			
			"1-087.jpg",
			"1-087.jpg",
			
			"1-090.jpg",
			
			"1-128.jpg",
			"1-127.jpg",
			"1-127.jpg"
			
		]
		
   },
   {
	  "name": "初始蜀",
     "game": "sangoWar",
	  "cards":[
			"1-032.jpg",
			"1-032.jpg",
			"1-032.jpg",
			
			"1-036.jpg",
			"1-036.jpg",
			"1-036.jpg",
			
			"1-037.jpg",
			"1-037.jpg",
			"1-037.jpg",
			
			"1-038.jpg",
			"1-038.jpg",
			
			"1-039.jpg",
			"1-039.jpg",
			
			"1-040.jpg",
			"1-040.jpg",
			"1-040.jpg",
			
			"1-041.jpg",
			"1-041.jpg",
			"1-041.jpg",
			
			"1-045.jpg",
			"1-045.jpg",
			"1-045.jpg",
			
			"1-046.jpg",
			"1-046.jpg",
			"1-046.jpg",
			
			"1-047.jpg",
			
			"1-051.jpg",
			"1-051.jpg",
			"1-051.jpg",
			"1-051.jpg",
			
			"1-052.jpg",
			"1-052.jpg",
			"1-052.jpg",
			
			"1-053.jpg",
			"1-053.jpg",
			"1-053.jpg",
			
			"1-054.jpg",
			"1-054.jpg",
			"1-054.jpg",
			"1-054.jpg",
			
			"1-056.jpg",
			"1-056.jpg",
			
			"1-057.jpg",
			"1-057.jpg",
			"1-057.jpg",
			"1-057.jpg",
			
			"1-060.jpg",
			
			"1-125.jpg",
			"1-125.jpg",
			"1-126.jpg"
			
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
      cb( err || ret.Error, ret )
    })
  }
  
  module.defaultModel = defaultModel
  module.editCardSuit = editCardSuit
  module.removeCardSuit = removeCardSuit
  module.load = load
  module.save = save
  
}) (model)