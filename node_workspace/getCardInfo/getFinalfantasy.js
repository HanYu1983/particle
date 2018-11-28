const rx = require('rx')
const _ = require('underscore')
const request = require('request')
const fs = require('fs')

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

function fetch(url, dontUseCache){
	return new Promise((res, rej)=>{
		const urlKey = encodeURIComponent(url)
		const path = "cache/"+urlKey+".html"
		
		if((!!dontUseCache) == false){
			if (fs.existsSync(path)) {
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

async function getFinalfantasy(outputPath){
	var dataUrl = 'https://fftcg.square-enix-games.com/getcards'
	var data = JSON.parse(await fetch(dataUrl, true))
	for(var i in data.cards){
		data.cards[i].id = data.cards[i].Code
		delete data.cards[i].Name_DE
		delete data.cards[i].Type_DE
		delete data.cards[i].Job_DE
		delete data.cards[i].Text_DE
		
		delete data.cards[i].Name_ES
		delete data.cards[i].Type_ES
		delete data.cards[i].Job_ES
		delete data.cards[i].Text_ES
		
		delete data.cards[i].Name_FR
		delete data.cards[i].Type_FR
		delete data.cards[i].Job_FR
		delete data.cards[i].Text_FR
		
		delete data.cards[i].Name_IT
		delete data.cards[i].Type_IT
		delete data.cards[i].Job_IT
		delete data.cards[i].Text_IT
		
		delete data.cards[i].Name_NA
		delete data.cards[i].Type_NA
		delete data.cards[i].Job_NA
		delete data.cards[i].Text_NA
	}
	await writeFile(outputPath, JSON.stringify(data.cards, null, 2))
}

(async function(){
	await getFinalfantasy('build/finalfantasy.json')

})()
