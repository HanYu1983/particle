const rx = require('rx')
const _ = require('underscore')
const request = require('request')
const fs = require('fs')

function fetch(url){
	return new Promise((res, rej)=>{
		const urlKey = encodeURIComponent(url)
		const path = "cache/"+urlKey+".html"
		if (fs.existsSync(path)) {
			console.log('use cache:'+path)
			fs.readFile(path, 'utf8', function (err,data) {
				if (err) {
					rej(err)
					return
				}
				res(data)
			});
			return
		}
		request
			.get(url)
			.on('error', err => {
				rej(err)
				end()
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

async function gundamCrossWar(outputPath){
	let reg = /<a href="(\/gundam-cw\/tw\/cardlist\/\?page=0&search=true&category=[\s\S]*?)">([\s\S]*?)<\/a>/g
	let reg2 = /<td colspan="2" class="popup_type">([\s\S]*?)<\/td>[\s\S]*?<td class="popup_num">([\s\S]*?)<\/td>[\s\S]*?<td class="popup_name">([\s\S]*?)<\/td>[\s\S]*?<table class="popup_cardDetail">([\s\S]*?)<\/table>/g
	let regUnit = /<th>尺寸<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>顏色拘束1：數量<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>DEF<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?"popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?"popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?<\/tr>[\s\S]*?<\/tr>[\s\S]*?colspan="2">([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>/g
	let reg_spec = /<td>([\s\S]*?)<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td colspan="2">([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td colspan="3" class="popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3" class="popup_longtxt">([\s\S]*?)<\/td>/g
	let regCrew = /<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td colspan="3" class="popup_longtxt">([\s\S]*?)<\/tr>/g
	let regEvent = /<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?class="popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?class="popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?<tr>[\s\S]*?<td colspan="2">([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>/g
	let regCounter = /<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?class="popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td colspan="2">([\s\S]*?)<\/td>[\s\S]*?class="popup_longtxt">([\s\S]*?)<\/td>/g
	let regPilot = /<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td colspan="2">([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td colspan="3" class="popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3" class="popup_longtxt">([\s\S]*?)<\/td>/g
	let regWarship = /<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td colspan="3" class="popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3" class="popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?<th colspan="2">([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>/g
	
	let datas = []
	let page = await fetch('http://www.carddass.com/gundam-cw/tw/cardlist/?page=0&search=true&category=312006')
	var row = 0
	while(row = reg.exec(page)){
		var [ignore, nextUrl, name] = row
		console.log(nextUrl)
		var page2 = await fetch('http://www.carddass.com'+nextUrl)
		var row2 = 0
		while(row2 = reg2.exec(page2)){
			let [ignore, ...info] = row2
			let type = info[0]
			let html = info[3] 
			switch(type){
				case 'ＵＮＩＴ':
				case 'Counter':
				case 'Event':
				case 'Warship':
				{
					var row3 = 0
					while(row3 = reg_spec.exec(html)){
						let [ignore, ...sub] = row3
						info.pop()
						info = info.concat(sub)
					}
				}
				break
				case 'UNIT':
				{
					var row3 = 0
					while(row3 = regUnit.exec(html)){
						let [ignore, ...sub] = row3
						info.pop()
						info = info.concat(sub)
					}
				}
				break
				case 'CREW':
				{
					var row3 = 0
					while(row3 = regCrew.exec(html)){
						let [ignore, ...sub] = row3
						info.pop()
						info = info.concat(sub)
					}
				}
				break
				case 'EVENT':
				{
					var row3 = 0
					while(row3 = regEvent.exec(html)){
						let [ignore, ...sub] = row3
						info.pop()
						info = info.concat(sub)
					}
				}
				break
				case 'COUNTER':
				{
					var row3 = 0
					while(row3 = regCounter.exec(html)){
						let [ignore, ...sub] = row3
						info.pop()
						info = info.concat(sub)
					}
				}
				break
				case 'PILOT':
				case 'Pilot':
				{
					var row3 = 0
					while(row3 = regPilot.exec(html)){
						let [ignore, ...sub] = row3
						info.pop()
						info = info.concat(sub)
					}
				}
				break
				case 'WARSHIP':
				{
					var row3 = 0
					while(row3 = regWarship.exec(html)){
						let [ignore, ...sub] = row3
						info.pop()
						info = info.concat(sub)
					}
				}
				break
			}
			
			
			datas.push(info)
		}
	}
	
	var output = datas.reduce((acc, info)=>{
		acc.push(info)
		return acc
	}, [])
	
	await writeFile(outputPath, JSON.stringify(output, null, 2))
}


(async function(){
	await gundamCrossWar('build/gundamCrossWar.json')
})()
