const rx = require('rx')
const _ = require('underscore')
const request = require('request')
const fs = require('fs')

var crypto = require('crypto');


function delay(time){
	return new Promise((res, rej)=>{
		setTimeout(()=>{
			res(true)
		}, time)
	})
}

function fetch(url, dontUseCache){
	return new Promise((res, rej)=>{
		// url太長無法當成檔名
		// 所以改用md5編碼
		//const urlKey = encodeURIComponent(url)
		const urlKey = crypto.createHash('md5').update(url).digest('hex')
		const path = "cache/"+urlKey+".html"
		//console.log(urlKey)
		
		if((!!dontUseCache) == false){
			if (fs.existsSync(path)) {
				//console.log('use cache:'+path)
				fs.readFile(path, 'utf8', function (err,data) {
					if (err) {
						rej(err)
						return
					}
					res(data)
				});
				return
			}
		}
		request
			.get(url)
			.on('error', err => {
				rej(err)
			})
			.on('end', ()=>{
				if (fs.existsSync(path) == false) {
					rej('save lost')
				} else {
					fs.readFile(path, 'utf8', function (err,data) {
						if (err) {
							rej(err)
							return
						}
						res(data)
					});
				}
			})
			.pipe(fs.createWriteStream(path))
	})
}

function writeFile(path, data){
	return new Promise((res,rej)=>{
		fs.writeFile(path, data, function(err) {
			if(err) {
				rej(err)
				return
			}
			res()
		})
	})
}

function readFile(path){
	return new Promise((res,rej)=>{
		fs.readFile(path, 'utf8', function (err,data) {
			if (err) {
				rej(err)
				return
			}
			res(data)
		});
	})
}

async function test(url){
	var cardDetailReq = /<section class="mosaic section card-detail">\n\s+<div.+>\n\s+<!-- START: MAIN CARD PICTURE -->\n\s+<div.+>\n\s+<img src="(.+)"\n\s+.+>[\s\S]+<!-- START: POKEMON CARD BASIC DESCRIPTION -->\n\s+<div class=.+>\n\s+<div.+>\n\s+<h1>(.+)<\/h1>\n\s+<\/div>\n\s+<div.+>\n\s+<div.+>\n\s+<h2>(.+)<\/h2>\n\s+[\s\S]+?<\/div>\n\s+<div.+>\n\s+<span class="card-hp"><span>HP<\/span>(.+)<\/span>\n\s+.+"energy (.+)">[\s\S]+<!-- START: POKEMON CARD ABILITIES -->([\s\S]+?)<!-- ENDS: POKEMON CARD ABILITIES -->\n\s+<!-- START: POKEMON CARD STATS AND EXPANSIONS -->([\s\S]+?)<!-- ENDS: POKEMON CARD STATS AND EXPANSIONS -->\n\s+<!-- START: ILLUSTRATOR -->([\s\S]+?)<!-- ENDS: ILLUSTRATOR -->/g
	var cardPage = await fetch(url)
	var parseDetail = cardDetailReq.exec(cardPage)
	try{
		var [ignore, img, name, type, hp, energy, abi, state, ill] = parseDetail
		console.log(img, name, type, hp, energy)
	}catch(e){
		console.log(e)
	}
}


var host = 'https://www.pokemon.com'
var path = '/us/pokemon-tcg/pokemon-cards/'
var querystring = '?cardName=&cardText=&evolvesFrom=&simpleSubmit=&format=unlimited&hitPointsMin=0&hitPointsMax=250&retreatCostMin=0&retreatCostMax=5&totalAttackCostMin=0&totalAttackCostMax=5&particularArtist=&sort=number&sort=number'

async function getPackages(){
	var pkgNameReq = /<li class=".+">\n\s+<input type="checkbox"\n\s+id="(.+)"\n\s+name=".+"\n\s+class=".+"\n\s+data-check-group=".+">\n\s+<label for=".+"\n\s+class=".+">\n\s+<i class="expansion"[\s\S]+?<span>(.+)<\/span>/g
	var page = await fetch(host + path, true)
	var ret = []
	var row = 0
	while(row = pkgNameReq.exec(page)){
		var [ignore, pkgId, pkg] = row
		ret.push([pkgId, pkg])
	}
	return ret
}

async function getPackage(pkgId){
	var totalPageReq = /<span >\d+ of (\d+)<\/span>/
	var cardLinkReq = /<a href="(\/us\/pokemon-tcg\/pokemon-cards\/.+?\/)">/g
	var pkgPageUrl = host + path + '1' + querystring + '&'+pkgId+'=on'
	var pkgPage = await fetch(pkgPageUrl)
	var parse = totalPageReq.exec(pkgPage)
	var [ignore, totalPage] = parse
	totalPage = parseInt(totalPage)
	
	var detailPageUrls = []
	for(var i=1; i<=totalPage; ++i){
		pkgPageUrl = host + path + i + querystring + '&'+pkgId+'=on'
		pkgPage = await fetch(pkgPageUrl)
		var cardLinkRow = 0
		while(cardLinkRow = cardLinkReq.exec(pkgPage)){
			var [ignore, cardLink] = cardLinkRow
			detailPageUrls.push(cardLink)
		}
	}
	
	return detailPageUrls
}

async function getDetails(detailPageUrls){
	var cardDetailReg = /<section class="mosaic section card-detail">\n\s+<div.+>\n\s+<!-- START: MAIN CARD PICTURE -->\n\s+<div.+>\n\s+<img src="(.+)"[\s\S]+?>[\s\S]+<!-- START: POKEMON CARD BASIC DESCRIPTION -->([\s\S]+?)<!-- ENDS: POKEMON CARD BASIC DESCRIPTION -->[\s\S]+?<!-- START: POKEMON CARD ABILITIES -->([\s\S]+?)<!-- ENDS: POKEMON CARD ABILITIES -->[\s\S]+?<!-- START: POKEMON CARD STATS AND EXPANSIONS -->([\s\S]+?)<!-- ENDS: POKEMON CARD STATS AND EXPANSIONS -->/
	var nameTypeReg = /<div class="card-description">\n\s+<div.+>\n\s+<h1>(.+)<\/h1>\n\s+<\/div>\n\s+<div.+>\n\s+<div.+>\n\s+<h2>(.+)<\/h2>/
	var basicReg = /<div class=.+>\n\s+<div.+>\n\s+<h1>(.+)<\/h1>\n\s+<\/div>\n\s+<div.+>\n\s+<div.+>\n\s+<h2>(.+)<\/h2>\n\s+[\s\S]+?<\/div>\n\s+<div.+>\n\s+<span class="card-hp"><span>HP<\/span>(.+)<\/span>\n\s+.+"energy (.+)">/
	var basicStageReg = /Evolves From:\n\s+<a.+>\n\s+(.+)\n\s+<\/a>/
	
	var abiReg = /<div class="pokemon-abilities">\n\s+<!-- ABILITY -->([\s\S]+?)<!-- RESTORED POKEMON -->([\s\S]+?)<!-- EX RULE -->([\s\S]+?)<!-- POKE-BODY -->([\s\S]+?)<!-- POKE-POWER -->([\s\S]+?)<!-- LV RULE -->([\s\S]+?)<!-- POKE-BODY -->/
	//var abiPowerReq = /<ul class="left">([\s\S]+?)<\/ul>\n\s+<h4 .+">(.+)<\/h4>\n\s+<span .+">(.+)<\/span>\n\s+<pre>([\s\S]*?)<\/pre>/g
	//var abiPowerReg = /<ul class="left">([\s\S]+?)<\/ul>([\s\S]+?)<\/div>/g
	var abiPowerReg = /<ul class="left">([\s\S]+?)<\/ul>\n\s+<h4 .+">(.+)<\/h4>[\s\S]+?<pre>([\s\S]*?)<\/pre>/g
	var abiPowerPowerReg = /<span .+">(.+)<\/span>/
	var abiPowerReg2 = /<pre>([\s\S]*?)<\/pre>/g
	var abiPowerReg3 = /<p>([\s\S]*?)<\/p>/
	var abiPowerCostReg = /<li rel="tooltip" title="(.+)">/g
	var abiAbiReg = /<div>(.+)<\/div>\n\s+<\/h3>\n\s+<p>(.+)<\/p>/
	var abiRuleReg = /<p>(.*)<\/p>/
	
	var stateReg = /<h4>Weakness<\/h4>([\s\S]+?)<h4>Resistance<\/h4>([\s\S]+?)<h4>Retreat Cost<\/h4>([\s\S]+?)<\/div>/
	
	var output = []
	for(var i in detailPageUrls){
		var cardPageUrl = host + detailPageUrls[i]
		var cardPage = await fetch(cardPageUrl)
		var parseDetail = cardDetailReg.exec(cardPage)
		
		try{
			var [ignore, img, basicSection, abiSection, stateSection] = parseDetail
			var name = ""
			var type = ""
			var hp = ""
			var energy = ""
			var evolveFrom = ""
			var powers = []
			var abiName = ""
			var abiTxt = ""
			var exRuleTxt = ""
			var weakness = []
			var resistance = []
			var retreatCost = []
			var body = ""
			
			// basicSection
			try{
				var [ignore, name_, type_] = nameTypeReg.exec(basicSection)
				name_ = name_.replace(/ +<img.+\/>/, "")
				name_ = name_.replace(/<\/?em>/g, "")
				
				name = name_
				type = type_
				
				try{
					var [ignore, name_, type_, hp_, energy_] = basicReg.exec(basicSection)
					energy_ = energy_.replace(/icon-/, "")
					
					hp = hp_
					energy = energy_
				}catch(e){
					// ignore
				}
				
				try{
					var [ignore, evolveFrom_] = basicStageReg.exec(basicSection)
					evolveFrom = evolveFrom_
				}catch(e){
					// ignore
				}
			}catch(e){
				console.log(e)
				console.log(img)
				//break
			}
			
			// abiSection
			try{
				var [ignore, ability, restorePokeman, exRule, pokeBody, pokePower, lvRule] = abiReg.exec(abiSection)
				try{
					var [ignore, exRuleTxt_] = abiRuleReg.exec(exRule)
					exRuleTxt = exRuleTxt_
				}catch(e){
					// ignore
				}
				
				try{
					var [ignore, abiName_, abiTxt_] = abiAbiReg.exec(ability)
					abiName = abiName_
					abiTxt = abiTxt_
				}catch(e){
					// ignore
				}
				
				try{
					var [ignore, txt] = abiPowerReg2.exec(pokeBody)
					txt = powerTxt.replace(/<span .+">/, "<")
					txt = powerTxt.replace(/<\/span>/, ">")
					body = txt
				}catch(e){
					// ignore
				}
				
				try{
					var [ignore, powerTxt] = abiPowerReg3.exec(pokeBody)
					txt = powerTxt.replace(/<span .+">/, "<")
					txt = powerTxt.replace(/<\/span>/, ">")
					body = txt
				}catch(e){
					// ignore
				}
				
				try{
					var [ignore, powerTxt] = abiPowerReg3.exec(pokePower)
					powerTxt = powerTxt.replace(/<span .+">/, "<")
					powerTxt = powerTxt.replace(/<\/span>/, ">")
					powers.push({
						"name": "",
						"power": "",
						"txt": powerTxt,
						"cost": []
					})
				}catch(e){
					// ignore
				}
				
				// 不是Trainer並且有Pokémon的
				if(type.indexOf('Trainer') == -1 && type.indexOf("Pokémon") != -1){
					try{
						var row = 0
						while(row = abiPowerReg.exec(pokePower)){
							var [match, costs, powerName, powerTxt] = row
							var powerCost = []
							var costRow = 0
							var power = ""
							
							while(costRow = abiPowerCostReg.exec(costs)){
								var [ignore, cost] = costRow
								powerCost.push(cost)
							}
							
							try{
								var [ignore, power_] = abiPowerPowerReg.exec(match)
								power = power_
							}catch(e){
								// ignore
							}
							
							powerName = powerName.replace(/<\/?em>/g, "")
							powerTxt = powerTxt.replace(/<span .+">/, "<")
							powerTxt = powerTxt.replace(/<\/span>/, ">")
							powers.push({
								"name": powerName,
								"power": power,
								"txt": powerTxt,
								"cost": powerCost
							})
						}
						
					}catch(e){
						console.log(e)
						// ignore
					}
				} else {
					try{
						var row = 0
						while(row = abiPowerReg2.exec(pokePower)){
							var [ignore, powerTxt] = row

							powerTxt = powerTxt.replace(/<span .+">/, "<")
							powerTxt = powerTxt.replace(/<\/span>/, ">")
							powers.push({
								"name": "",
								"power": "",
								"txt": powerTxt,
								"cost": []
							})
						}
						
					}catch(e){
						// ignore
					}
				}
				
			}catch(e){
				// ignore
			}
			
			// state section
			try{
				var [ignore, weakness_, resistance_, retreatCost_] = stateReg.exec(stateSection)
				var iconReg = /<i class="energy (.+)"><\/i>/g
				
				var row = []
				while(row = iconReg.exec(weakness_)){
					var [ignore, icon] = row
					icon = icon.replace(/icon-/, "")
					weakness.push(icon)
				}
				
				while(row = iconReg.exec(resistance_)){
					var [ignore, icon] = row
					icon = icon.replace(/icon-/, "")
					resistance.push(icon)
				}
				
				while(row = iconReg.exec(retreatCost_)){
					var [ignore, icon] = row
					icon = icon.replace(/icon-/, "")
					retreatCost.push(icon)
				}
			}catch(e){
				// ignore
			}
			
			var id = img.split("/")[img.split("/").length-1]
			var ruleImgReg = /<img class=".+" alt="(.+)" \/>/g
			var row = 0
			while(row = ruleImgReg.exec(exRuleTxt)){
				var [match, ruleImg] = row
				exRuleTxt = exRuleTxt.replace(match, ruleImg)
			}
			
			output.push({
				"id":id,
				"img":img,
				"name":name, 
				"type":type, 
				"hp":hp, 
				"energy":energy, 
				"evolveFrom":evolveFrom,
				"powers":powers,
				"exRuleTxt":exRuleTxt,
				"weakness":weakness,
				"resistance":resistance,
				"retreatCost":retreatCost,
				"abiName":abiName,
				"abiTxt":abiTxt,
				"body":body
				/*
				"ability_":ability, 
				"restorePokeman_":restorePokeman, 
				"exRule_":exRule, 
				"pokeBody_":pokeBody, 
				"pokePower_":pokePower, 
				"lvRule_":lvRule,
				"basicSection_":basicSection, 
				"abiSection_":abiSection, 
				"stateSection_":stateSection
				*/
			})

		}catch(e){
			console.log(e)
			console.log(cardPageUrl)
			var urlKey = crypto.createHash('md5').update(cardPageUrl).digest('hex')
			console.log(urlKey)
			break
		}
	}
	return output
}

async function pokemonEn(outputPath){
	console.log("取得套件...")
	var pkgs = await getPackages()
	var files = []
	for(var i in pkgs){
		var [pkgId, pkgName] = pkgs[i]
		console.log("解析:"+pkgName)
		/*if(pkgName != "Dragon Majesty"){
			continue
		}*/
		var links = await getPackage(pkgId)
		console.log("取得詳細...")
		var output = await getDetails(links)
		for(var i in output){
			output[i].pack = pkgName
		}
		// 記憶體不足,拆成二個部分
		var tmpFileName = 'tmp/'+pkgName+".json"
		console.log("暫存:"+tmpFileName)
		await writeFile(tmpFileName, JSON.stringify(output, null, 2))
		files.push(tmpFileName)
	}
	
	console.log("合併檔案...")
	var output = []
	for(var i in files){
		var tmpFileName = files[i]
		var data = await readFile(tmpFileName)
		data = JSON.parse(data)
		output = output.concat(data)
	}
	await writeFile(outputPath, JSON.stringify(output, null, 2))
	console.log("完成:"+outputPath)
}

async function genImgHtml(){
	var pkgs = await getPackages()
	var files = []
	for(var i in pkgs){
		var [pkgId, pkgName] = pkgs[i]
		var tmpFileName = 'tmp/'+pkgName+".json"
		var data = await readFile(tmpFileName)
		data = JSON.parse(data)
		data = data.map(c=>{
			return "<img src=\""+c.img+"\">"
		}).join('\n')
		await writeFile('tmp/'+pkgName+"_img.html", data)
	}
}


(async function(){
	await pokemonEn('build/pokemonEn.json')
	await genImgHtml()
})()
