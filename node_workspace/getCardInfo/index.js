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

// 戰國大戰
async function JGDJ(outputPath){
	let reg = /<a href="(cardList\.php\?id=\d+)">([\s\S]*?)<\/a>/g
	let reg2 = /<a class="cardInfo" rel="data1" data-fancybox-type="iframe" href="(cardDetail\.php\?id=\d+)">/g
	let reg3 = /<img class="cardDetail_pic" src="http:\/\/sengoku-taisen-tcg\.segataiwan\.com\.tw\/upload\/card\/([\s\S]*?)" \/>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>/

	let outputs = []
	let host = 'http://sengoku-taisen-tcg.segataiwan.com.tw/'
	let page = await fetch(host + 'card.php')
	var row = 0
	while(row = reg.exec(page)){
		var [ignore, nextUrl, name] = row
		var page2 = await fetch(host+nextUrl)
		var row2 = 0
		while(row2 = reg2.exec(page2)){
			var [ignore, nextUrl] = row2
			console.log(nextUrl)
			var page3 = await fetch(host+nextUrl)
			var row3 = reg3.exec(page3)
			var [ignore, ...info] = row3
			outputs.push(info)
		}
	}
	
	await writeFile(outputPath, JSON.stringify(outputs, null, 2))
}


(async function(){
	await JGDJ('JGDJ.json')
})()
