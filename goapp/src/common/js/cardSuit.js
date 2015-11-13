var cardSuit = cardSuit || {};

(function(module){
  
  function defaultModel() {
    return {
  "cardSuit":[
	
		{
			"name":"初始一",
			"game":"yugioh",
			"cards":[
				"12423762","13032689","14214060","15025844","18446701","21843307","22346472","24291651","2460565","25259669","26082117","29267084","30585393","30608985","32807846","3606728","38999506","40384720","44430454","45141844","50930991","56840427","58628539","59070329","60082869","67775894","69610924","73178098","76080032","77538567","78156759","83764718","84013237","86039057","86778566","90673413","93087299","94203886","94656263","94770493","95281259","97077563","97896503","98865920"
			]
		},
		
		{
			"name":"初始二",
			"game":"yugioh",
			"cards":[
				"11091375","11321183","15025844","17626381","20409757","28348939","28565527","29267084","29687169","32012842","34664411","3819470","40619825","4178474","4206964","44430454","5318639","54747648","55969226","56120475","56681873","56804361","60082869","69162969","73178098","74848038","75953262","77414722","81231742","81354330","82176812","83968380","87151205","8842266","90928333","92924317","93298460","94415058","96005454"
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
		"name":"紅綠精靈",
		"game":"magic",
		"cards":[
			"http://www.cardkingdom.com/media/images/products/standard/131428_1.jpg",
			"http://www.cardkingdom.com/media/images/products/standard/131428_1.jpg",
			"http://www.cardkingdom.com/media/images/products/standard/131428_1.jpg",
			"http://www.cardkingdom.com/media/images/products/standard/131428_1.jpg",
			"http://www.cardkingdom.com/media/images/products/standard/111891_1.jpg",
			"http://www.cardkingdom.com/media/images/products/standard/111891_1.jpg",
			"http://www.cardkingdom.com/media/images/products/standard/111891_1.jpg",
			"http://www.cardkingdom.com/media/images/products/standard/111891_1.jpg",
			"http://www.cardkingdom.com/media/images/products/standard/111776_1.jpg",
			"http://www.cardkingdom.com/media/images/products/standard/111776_1.jpg",
			"http://mtg.akmigames.com/pic/BOK/Loam%20Dweller.full.jpg",
			"http://mtg.akmigames.com/pic/BOK/Loam%20Dweller.full.jpg",
			"http://mtg.akmigames.com/pic/BOK/Loam%20Dweller.full.jpg",
			"http://www.cardkingdom.com/media/images/products/standard/111822_1.jpg",
			"http://www.cardkingdom.com/media/images/products/standard/111822_1.jpg",
			"http://www.cardkingdom.com/media/images/products/standard/111822_1.jpg",
			"http://www.cardkingdom.com/media/images/products/standard/111822_1.jpg",
			"http://i.tcgplayer.com/12384.jpg",
			"http://i.tcgplayer.com/12384.jpg",
			"http://i.tcgplayer.com/12384.jpg",
			"http://i.tcgplayer.com/12384.jpg",
			"http://www.sandreline.com/sites/default/files/imagecache/slider_detail/P1070401.JPG",
			"http://www.sandreline.com/sites/default/files/imagecache/slider_detail/P1070401.JPG",
			"http://xn--hyv330g.net/mtg/pic/CHK/Long-Forgotten%20Gohei.full.jpg",
			"http://www.cardkingdom.com/media/images/products/standard/201139_1.jpg",
			"http://i.tcgplayer.com/12399.jpg",
			"http://www.mtgotraders.com/store/media/products/chk/Kodama_of_the_South_Tree_f.jpg",
			"http://i.tcgplayer.com/12462.jpg",
			"http://shop.goodgames.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/o/sok-spiraling-embers.jpg",
			"http://magiccards.info/scans/en/chk/215.jpg",
			"http://s.mtgprice.com/sets/Modern_Masters/img/Jugan,%20the%20Rising%20Star.full.jpg",
			"http://i.tcgplayer.com/12221.jpg",
			"http://i.tcgplayer.com/12221.jpg",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=74217&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=74217&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=74204&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=74204&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=74204&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=74204&type=card",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card"
			]
	},
	{
		"name":"牛牛強襲",
		"game":"magic",
		"cards":[
			"http://www.menschen-und-magic.de/images/cards/kalt/PirschenderYeti.jpg",
			"http://img.mogg.fr/HIRES/CST/Orcish%20Lumberjack.full.jpg",
			"http://940ee6dce6677fa01d25-0f55c9129972ac85d6b1f4e703468e6b.r99.cf2.rackcdn.com/products/pictures/144402.jpg",
			"http://magiccards.info/scans/en/jvc/51.jpg",
			"http://magiccards.info/scans/en/jvc/51.jpg",
			"http://ecx.images-amazon.com/images/I/41uRpTUW4DL._AC_UL320_SR224,320_.jpg",
			"http://ecx.images-amazon.com/images/I/41uRpTUW4DL._AC_UL320_SR224,320_.jpg",
			"http://www.enndalgames.com/data/enndal/product/csp035.jpg",
			"http://www.enndalgames.com/data/enndal/product/csp035.jpg",
			"http://shop.da-planet.com/store/Images/products/mtg/cld/Balduvian_Rage.jpg",
			"http://shop.da-planet.com/store/Images/products/mtg/cld/Balduvian_Rage.jpg",
			"http://cardmaster.tw/userfiles/images/product/CSTD/38.jpg",
			"http://www.wizards.com/magic/images/mtgcom/fcpics/features/344_l83uau7ktfgnrxr7.jpg",
			"http://magiccards.info/scans/en/cstd/39.jpg",
			"http://xn--hyv330g.net/mtg/pic/CS/Shape%20of%20the%20Wiitigo.full.jpg",
			"http://ecx.images-amazon.com/images/I/51eM-CCpBBL.jpg",
			"http://ecx.images-amazon.com/images/I/61qn0zBtO7L.jpg",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=121193&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=121193&type=card",
			"http://static.tappedout.net/mtg-cards-2/coldsnap/frostweb-spider/frostweb-spider.jpg",
			"http://static.tappedout.net/mtg-cards-2/coldsnap/frostweb-spider/frostweb-spider.jpg",
			"http://www.mtgotraders.com/store/media/products/csp/Rimehorn_Aurochs_f.jpg",
			"http://www.mtgotraders.com/store/media/products/csp/Rimehorn_Aurochs_f.jpg",
			"http://magiccards.info/scans/en/cstd/40.jpg",
			"http://magiccards.info/scans/en/cstd/40.jpg",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=121152&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=121152&type=card",
			"http://xn--hyv330g.net/mtg/pic/CS/Aurochs%20Herd.full.jpg",
			"http://xn--hyv330g.net/mtg/pic/CS/Aurochs%20Herd.full.jpg",
			"http://xn--hyv330g.net/mtg/pic/CS/Aurochs%20Herd.full.jpg",
			"http://crystal-cdn1.crystalcommerce.com/photos/353962/large/37.jpg",
			"http://crystal-cdn1.crystalcommerce.com/photos/353962/large/37.jpg",
			"http://crystal-cdn1.crystalcommerce.com/photos/353962/large/37.jpg",
			"http://xn--hyv330g.net/mtg/pic/CSTD/Woolly%20Mammoths.full.jpg",
			"http://xn--hyv330g.net/mtg/pic/CSTD/Woolly%20Mammoths.full.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://i.tcgplayer.com/59702.jpg",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card",
			"http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=191404&type=card"
		]
	},
    {
      "name": "sword砍人",
      "game": "gundamWar",
      "cards": ["49263.jpg","49263.jpg","1135.jpg","46160.jpg","23078.jpg","50195.jpg","28169.jpg","42267.jpg","33024.jpg","43023.jpg","48001.jpg","48008.jpg","48009.jpg","49263.jpg","61063.jpg","66030.jpg","66059.jpg","66060.jpg","1135.jpg","46160.jpg","23078.jpg","50195.jpg","28169.jpg","42267.jpg","33024.jpg","43023.jpg","48001.jpg","48008.jpg","48009.jpg","54021.jpg","61063.jpg","66030.jpg","66059.jpg","66060.jpg","1135.jpg","46160.jpg","23078.jpg","50195.jpg","28169.jpg","42267.jpg","33024.jpg","43023.jpg","48001.jpg","48008.jpg","48009.jpg","54021.jpg","61063.jpg","66030.jpg","66059.jpg","66060.jpg"]
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