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
		//console.log(pkg)
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
		//console.log(pkgPageUrl)
		pkgPage = await fetch(pkgPageUrl)
		
		var cardLinkRow = 0
		while(cardLinkRow = cardLinkReq.exec(pkgPage)){
			var [ignore, cardLink] = cardLinkRow
			//console.log(cardLink)
			detailPageUrls.push(cardLink)
		}
	}
	
	return detailPageUrls
}

async function getDetails(detailPageUrls){
	//var cardDetailReg = /<section class="mosaic section card-detail">\n\s+<div.+>\n\s+<!-- START: MAIN CARD PICTURE -->\n\s+<div.+>\n\s+<img src="(.+)"\n\s+.+>[\s\S]+<!-- START: POKEMON CARD BASIC DESCRIPTION -->([\s\S]+?)<!-- ENDS: POKEMON CARD BASIC DESCRIPTION -->[\s\S]+?<!-- START: POKEMON CARD ABILITIES -->([\s\S]+?)<!-- ENDS: POKEMON CARD ABILITIES -->[\s\S]+?<!-- START: POKEMON CARD STATS AND EXPANSIONS -->([\s\S]+?)<!-- ENDS: POKEMON CARD STATS AND EXPANSIONS -->/
	var cardDetailReg = /<section class="mosaic section card-detail">\n\s+<div.+>\n\s+<!-- START: MAIN CARD PICTURE -->\n\s+<div.+>\n\s+<img src="(.+)"[\s\S]+?>[\s\S]+<!-- START: POKEMON CARD BASIC DESCRIPTION -->([\s\S]+?)<!-- ENDS: POKEMON CARD BASIC DESCRIPTION -->[\s\S]+?<!-- START: POKEMON CARD ABILITIES -->([\s\S]+?)<!-- ENDS: POKEMON CARD ABILITIES -->[\s\S]+?<!-- START: POKEMON CARD STATS AND EXPANSIONS -->([\s\S]+?)<!-- ENDS: POKEMON CARD STATS AND EXPANSIONS -->/
	var nameTypeReg = /<div class="card-description">\n\s+<div.+>\n\s+<h1>(.+)<\/h1>\n\s+<\/div>\n\s+<div.+>\n\s+<div.+>\n\s+<h2>(.+)<\/h2>/
	var basicReg = /<div class=.+>\n\s+<div.+>\n\s+<h1>(.+)<\/h1>\n\s+<\/div>\n\s+<div.+>\n\s+<div.+>\n\s+<h2>(.+)<\/h2>\n\s+[\s\S]+?<\/div>\n\s+<div.+>\n\s+<span class="card-hp"><span>HP<\/span>(.+)<\/span>\n\s+.+"energy (.+)">/
	var basicStageReg = /Evolves From:\n\s+<a.+>\n\s+(.+)\n\s+<\/a>/
	var abiReg = /<div class="pokemon-abilities">\n\s+<!-- ABILITY -->([\s\S]+?)<!-- RESTORED POKEMON -->([\s\S]+?)<!-- EX RULE -->([\s\S]+?)<!-- POKE-BODY -->([\s\S]+?)<!-- POKE-POWER -->([\s\S]+?)<!-- LV RULE -->([\s\S]+?)<!-- POKE-BODY -->/
	var abiPowerReq = /<ul class="left">([\s\S]+?)<\/ul>\n\s+<h4 .+">(.+)<\/h4>\n\s+<span .+">(.+)<\/span>\n\s+<pre>([\s\S]*?)<\/pre>/g
	var abiPowerCostReg = /<li rel="tooltip" title="(.+)">/g
	var abiAbiReg = /<div>(.+)<\/div>\n\s+<\/h3>\n\s+<p>(.+)<\/p>/
	var abiRuleReg = /<p>(.*)<\/p>/
	
	var output = []
	for(var i in detailPageUrls){
		var cardPageUrl = host + detailPageUrls[i]
		//console.log(i, "/", detailPageUrls.length, ":", cardPageUrl)
		
		var cardPage = await fetch(cardPageUrl)
		var parseDetail = cardDetailReg.exec(cardPage)
		
		try{
			var [ignore, img, basicSection, abiSection, stateSection] = parseDetail
			var [ignore, ability, restorePokeman, exRule, pokeBody, pokePower, lvRule] = abiReg.exec(abiSection)
			
			var name = ""
			var type = ""
			var hp = ""
			var energy = ""
			var evolveFrom = ""
			var powers = []
			var abiName = ""
			var abiTxt = ""
			var exRuleTxt = ""
			
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
				var row = 0
				while(row = abiPowerReq.exec(pokePower)){
					var [ignore, costs, powerName_, power_, powerTxt_] = row
					var powerName = powerName_
					var power = power_
					var powerTxt = powerTxt_
					
					var powerCost = []
					var costRow = 0
					while(costRow = abiPowerCostReg.exec(costs)){
						var [ignore, cost] = costRow
						powerCost.push(cost)
					}
					
					powerName = powerName.replace(/<\/?em>/g, "")
					powerTxt = powerTxt.replace(/<span .+">/, "<")
					powerTxt = powerTxt.replace(/<\/span>/, ">")
					powers.push({
						"powerName": powerName,
						"power": power,
						"powerTxt": powerTxt,
						"powerCost": powerCost
					})
				}
				
			}catch(e){
				// ignore
			}
			
			try{
				var [ignore, name_, type_] = nameTypeReg.exec(basicSection)
				name_ = name_.replace(/ +<img.+\/>/, "")
				name_ = name_.replace(/<\/?em>/g, "")
				
				name = name_
				type = type_
				
				/*if(type.indexOf("Pokémon") != -1){
					try{
						var [ignore, name_, type_, hp_, energy_] = basicReg.exec(basicSection)
						energy_ = energy_.replace(/icon-/, "")
						
						hp = hp_
						energy = energy_
					}catch(e){
						// ignore
					}
				}
				
				if(type.indexOf("Stage") != -1){
					try{
						var [ignore, evolveFrom_] = basicStageReg.exec(basicSection)
						evolveFrom = evolveFrom_
					}catch(e){
						// ignore
					}
				}
				
				if(type.indexOf("Trainer") != -1){
					try{
						var [ignore, powerTxt_] = /<pre>([\s\S]*?)<\/pre>/.exec(pokePower)
						powerTxt = powerTxt_
						
						powerTxt = powerTxt.replace(/<span .+">/, "<")
						powerTxt = powerTxt.replace(/<\/span>/, ">")
						powers.push({
							"powerName": "",
							"power": "",
							"powerTxt": powerTxt,
							"powerCost": ""
						})
					}catch(e){
						// ignore
					}
				}*/
				
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
				
				try{
					var [ignore, powerTxt_] = /<pre>([\s\S]*?)<\/pre>/.exec(pokePower)
					powerTxt = powerTxt_
					
					powerTxt = powerTxt.replace(/<span .+">/, "<")
					powerTxt = powerTxt.replace(/<\/span>/, ">")
					powers.push({
						"powerName": "",
						"power": "",
						"powerTxt": powerTxt,
						"powerCost": ""
					})
				}catch(e){
					// ignore
				}
			}catch(e){
				console.log(e)
				console.log(img)
				break
			}
			
			img = img.split("/")[img.split("/").length-1]
			ability = ability.trim()
			restorePokeman = restorePokeman.trim()
			exRule = exRule.trim()
			pokeBody = pokeBody.trim()
			pokePower = pokePower.trim()
			lvRule = lvRule.trim()
			
			var ruleImgReg = /<img class=".+" alt="(.+)" \/>/g
			var row = 0
			while(row = ruleImgReg.exec(exRuleTxt)){
				var [match, ruleImg] = row
				exRuleTxt = exRuleTxt.replace(match, ruleImg)
			}
			
			output.push({
				"id":img, 
				"name":name, 
				"type":type, 
				"hp":hp, 
				"energy":energy, 
				"evolveFrom":evolveFrom,
				"powers":powers,
				"abiName":abiName,
				"abiTxt":abiTxt,
				"exRuleTxt":exRuleTxt,
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
	var pkgs = await getPackages()
	//console.log(pkgs)

	var files = []
	for(var i in pkgs){
		var [pkgId, pkgName] = pkgs[i]
		var links = await getPackage(pkgId)
		var output = await getDetails(links)
		// 記憶體不足,拆成二個部分
		var tmpFileName = 'tmp/'+pkgName+".json"
		await writeFile(tmpFileName, JSON.stringify(output, null, 2))
		
		files.push(tmpFileName)
		//if(i == "3")
		//	break
	}
	
	var output = []
	for(var i in files){
		var tmpFileName = files[i]
		var data = await readFile(tmpFileName)
		data = JSON.parse(data)
		output = output.concat(data)
	}
	await writeFile(outputPath, JSON.stringify(output, null, 2))
}


/*
async function pokemonEn(outputPath){
	let cardLinkReq = /<a href="(\/us\/pokemon-tcg\/pokemon-cards\/.+?\/)">/g
	//let cardDetailReq = /<section class="mosaic section card-detail">\n\s+<div.+>\n\s+<!-- START: MAIN CARD PICTURE -->\n\s+<div.+>\n\s+<img src="(.+)"\n\s+.+>[\s\S]+<!-- START: POKEMON CARD BASIC DESCRIPTION -->\n\s+<div class=.+>\n\s+<div.+>\n\s+<h1>(.+)<\/h1>\n\s+<\/div>\n\s+<div.+>\n\s+<div.+>\n\s+<h2>(.+)<\/h2>\n\s+<\/div>\n\s+<div.+>\n\s+<span class="card-hp"><span>HP<\/span>(.+)<\/span>\n\s+.+"energy (.+)">[\s\S]+<!-- START: POKEMON CARD ABILITIES -->([\s\S]+?)<!-- ENDS: POKEMON CARD ABILITIES -->\n\s+<!-- START: POKEMON CARD STATS AND EXPANSIONS -->([\s\S]+?)<!-- ENDS: POKEMON CARD STATS AND EXPANSIONS -->\n\s+<!-- START: ILLUSTRATOR -->([\s\S]+?)<!-- ENDS: ILLUSTRATOR -->/
	let cardDetailReq = /<section class="mosaic section card-detail">\n\s+<div.+>\n\s+<!-- START: MAIN CARD PICTURE -->\n\s+<div.+>\n\s+<img src="(.+)"\n\s+.+>[\s\S]+<!-- START: POKEMON CARD BASIC DESCRIPTION -->\n\s+<div class=.+>\n\s+<div.+>\n\s+<h1>(.+)<\/h1>\n\s+<\/div>\n\s+<div.+>\n\s+<div.+>\n\s+<h2>(.+)<\/h2>\n\s+[\s\S]+?<\/div>\n\s+<div.+>\n\s+<span class="card-hp"><span>HP<\/span>(.+)<\/span>\n\s+.+"energy (.+)">[\s\S]+<!-- START: POKEMON CARD ABILITIES -->([\s\S]+?)<!-- ENDS: POKEMON CARD ABILITIES -->\n\s+<!-- START: POKEMON CARD STATS AND EXPANSIONS -->([\s\S]+?)<!-- ENDS: POKEMON CARD STATS AND EXPANSIONS -->\n\s+<!-- START: ILLUSTRATOR -->([\s\S]+?)<!-- ENDS: ILLUSTRATOR -->/
	//let cardDetailReq = /<section class="mosaic section card-detail">\n\s+<div.+>\n\s+<!-- START: MAIN CARD PICTURE -->\n\s+<div.+>\n\s+<img src="(.+)"\n\s+.+>[\s\S]+<!-- START: POKEMON CARD BASIC DESCRIPTION -->([\s\S]+?)<!-- ENDS: POKEMON CARD BASIC DESCRIPTION -->[\s\S]+?<!-- START: POKEMON CARD ABILITIES -->([\s\S]+?)<!-- ENDS: POKEMON CARD ABILITIES -->[\s\S]+?<!-- START: POKEMON CARD STATS AND EXPANSIONS -->([\s\S]+?)<!-- ENDS: POKEMON CARD STATS AND EXPANSIONS -->/
	
	//let pkgReq = /<li class=".+">\n\s+<input type="checkbox"\n\s+id="(.+)"\n\s+name=".+"\n\s+class=".+"\n\s+data-check-group=".+">\n\s+<label for=".+"\n\s+class=".+">\n\s+<i class="expansion"/g
	let pkgNameReq = /<li class=".+">\n\s+<input type="checkbox"\n\s+id="(.+)"\n\s+name=".+"\n\s+class=".+"\n\s+data-check-group=".+">\n\s+<label for=".+"\n\s+class=".+">\n\s+<i class="expansion"[\s\S]+?<span>(.+)<\/span>/g
	let totalPageReq = /<span >\d+ of (\d+)<\/span>/
	
	
	let datas = []
	let host = 'https://www.pokemon.com'
	let path = '/us/pokemon-tcg/pokemon-cards/'
	let querystring = '?cardName=&cardText=&evolvesFrom=&simpleSubmit=&format=unlimited&hitPointsMin=0&hitPointsMax=250&retreatCostMin=0&retreatCostMax=5&totalAttackCostMin=0&totalAttackCostMax=5&particularArtist=&sort=number&sort=number'
	
	let page = await fetch(host + path, true)
	var row = 0
	
	var detailPageUrls = []
	
	while(row = pkgNameReq.exec(page)){
		var [ignore, pkgId, pkg] = row
		console.log(pkgId, pkg)
		
		var pkgPageUrl = host + path + '1' + querystring + '&'+pkgId+'=on'
		console.log(pkgPageUrl)
		var pkgPage = await fetch(pkgPageUrl)
		var parse = totalPageReq.exec(pkgPage)
		var [ignore, totalPage] = parse
		console.log(totalPage)
		
		totalPage = parseInt(totalPage)
		for(var i=1; i<=totalPage; ++i){
			pkgPageUrl = host + path + i + querystring + '&'+pkgId+'=on'
			console.log(pkgPageUrl)
			pkgPage = await fetch(pkgPageUrl)
			
			var cardLinkRow = 0
			while(cardLinkRow = cardLinkReq.exec(pkgPage)){
				var [ignore, cardLink] = cardLinkRow
				console.log(cardLink)
				detailPageUrls.push(cardLink)
			}
		}
	}
	
	
	var output = []
	for(var i in detailPageUrls){
		var cardPageUrl = host + detailPageUrls[i]
		console.log(i, "/", detailPageUrls.length, ":", cardPageUrl)
		
		var cardPage = await fetch(cardPageUrl)
		var parseDetail = cardDetailReq.exec(cardPage)
		
		try{
			//var [ignore, img, basic, abi, state] = parseDetail
			//output.push([img, basic, abi, state])
			

			var [ignore, img, name, type, hp, energy, abi, state, ill] = parseDetail
			output.push([img, name, type, hp, energy, abi, state, ill])
		}catch(e){
			console.log(e)
			console.log(parseDetail)
		}
	}
	
	await writeFile(outputPath, JSON.stringify(output, null, 2))
}
*/
(async function(){
	await pokemonEn('build/pokemonEn.json')
	
	/*
	var pkgs = await getPackages()
	console.log(pkgs)
	
	var links = await getPackage(pkgs[0][0])
	console.log(links)
	
	var output = await getDetails(links)
	console.log(output)
	*/
	//await pokemonEn('build/pokemonEn.json')
	
	/*
	await test('https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/sm-series/sm75/2/')
	await test('https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/sm-series/sm75/3/')
	await test('https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/sm-series/sm75/4/')
	*/
})()
