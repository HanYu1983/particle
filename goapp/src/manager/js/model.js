var model = model || {};

(function(module){
  
  function defaultModel() {
    return {
      cardSuit: [
        {
          name: "test",
          game: "鋼彈大戰",
          cards: ["55062.jpg", "55062.jpg"]
        }
      ]
    }
  }
  
  /**
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
  
  function removeCardSuit( mo, name ){
    var target = _.find(mo.cardSuit, function(item){
      return item.name == name
    })
    if( target ){
      mo.cardSuit = _.without( mo.cardSuit, target )
    }
  }
  
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
          cb( nil, defaultModel() )
          
        } else {
          cb( nil, JSON.parse( ret ))
          
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