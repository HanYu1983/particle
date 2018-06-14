const rx = require('rx')
const _ = require('underscore')
const request = require('request')
const fs = require('fs')

function fetch(url){
	return new Promise((res, rej)=>{
		const urlKey = encodeURIComponent(url)
		const path = "cache/"+urlKey+".html"
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

async function sgsCh(outputPath){
	getUrl = (volId, page)=>{
		return 'http://tcg.sanguosha.com/card/list?vol_id='+volId+'&page='+page
	}
	
	var currVolId = 1
	var currPage = 1
	var data = []
	while(true){
		// 必須再宣告一次
		let regPkgUrl = /http:\/\/tcg.sanguosha.com\/card\/list\?vol_id=(\d+)&page=(\d+)/g
		
		let url = getUrl(currVolId, currPage)
		console.log(url)
		let page = await fetch(url)
		
		let prevUrl = regPkgUrl.exec(page)
		let nextUrl = regPkgUrl.exec(page)
		if(nextUrl == null){
			console.log('next url not found, break')
			break
		}
		let [_, nextVolId, nextPage] = nextUrl
		if(nextVolId == currVolId && nextPage == currPage ){
			currVolId = parseInt(nextVolId) + 1
			currPage = 1
		}else{
			currVolId = parseInt(nextVolId)
			currPage = parseInt(nextPage)
		}

		let regDtail = /http:\/\/tcg.sanguosha.com\/card\/(\d+)\/detail/g
		var row = 0
		while(row = regDtail.exec(page)){
			let [url] = row
			console.log(url)
			
			let regName = /<div class=\"name\">(.*)<\/div>/
			let regCost = /<td class=\"key\">费用：<\/td>\s+<td class=\"value\">(.*)<\/td>/
			let regPower = /<td class=\"key\">武\/体：<\/td>\s+<td class=\"value\">(.*)<\/td>/
			let regColor = /<td class=\"key\">势力：<\/td>\s+<td class=\"value\">(.*)<\/td>/
			let regType = /<td class=\"key\">类别：<\/td>\s+<td class=\"value\" colspan=\"3\">(.*)<\/td>/
			let regPkg = /<td class=\"key\">系列名称：<\/td>\s+<td class=\"value\">(.*)<\/td>/
			let regId = /<td class=\"key\">卡牌编号：<\/td>\s+<td class=\"value\">(.*)<\/td>/
			let regText = /<div class=\"content\">([\s\S]+?)<\/div>/
			let regImg = /\"\/upload\/cards\/.+\/(.+).jpg\"/
			
			let detail = await fetch(url)
			let [_, name] = regName.exec(detail)
			let [_2, cost] = regCost.exec(detail)
			let [_3, power] = regPower.exec(detail)
			let [_4, color] = regColor.exec(detail)
			let [_5, type] = regType.exec(detail)
			let [_6, pkg] = regPkg.exec(detail)
			let [_7, id] = regId.exec(detail)
			let [_8, text] = regText.exec(detail)
			let [_9, img] = regImg.exec(detail)
			
			let c = parseInt(cost)
			if(isNaN(c)){
				c = 0
			}
			
			var obj = {
				"img": img,
				"id": id,
				"pkg":pkg,
				"name":name,
				"type":type,
				"color":color,
				"cost": c,
				"power": power,
				"text": text
			}
			
			data.push(obj)
		}
	}
	
	await writeFile(outputPath, JSON.stringify(data, null, 2))
}


(async function(){
	// 記得抓之前把要抓首頁的快取檔清掉, 不然抓不到最新的
	try{
		await sgsCh('build/sgsList.json')
	}catch(e){
		console.log(e)
	}
})()