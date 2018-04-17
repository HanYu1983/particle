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
async function sengoku(outputPath){
	let reg = /<a href="(cardList\.php\?id=\d+)">([\s\S]*?)<\/a>/g
	let reg2 = /<a class="cardInfo" rel="data1" data-fancybox-type="iframe" href="(cardDetail\.php\?id=\d+)">/g
	let reg3 = /<img class="cardDetail_pic" src="http:\/\/sengoku-taisen-tcg\.segataiwan\.com\.tw\/upload\/card\/([\s\S]*?)" \/>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>/

	let datas = []
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
			datas.push(info)
		}
	}
	
	function parseCost( text ){
		var map2 = "①②③④⑤"
		var ret = [0, 0]
		for( var k in text ){
			var c = text[k]
			if( map2.indexOf( c ) != -1 ){
				ret[1] = map2.indexOf( c ) + 1
			} else {
				ret[0] ++
			}
		}
		return ret
	}
	
	var output = datas.reduce((acc, info)=>{
		var jsonObj = {
			id: info[0],
			cid:info[1],
			cname:info[2],
			set:info[5],
			color:info[6],
			atype:info[10],
			atype2:info[12],
			cost:parseCost( info[10] ),
			ability:info[7],
			power:info[9],
			city:info[11],
			symbol:info[13],
			rarity:info[15],
			content:info[16]+'\n'+info[17],
			counter:info[18]
		}
		acc.push(jsonObj)
		return acc
	}, [])
	
	/*[
    "card_1_132.png",0
    "1-001",1
    "ねね",2
    "ねね",3
    "",4
    "第一彈補充包",5
    "蒼",6
    "-",7
    "織田",8
    "1000",9
    "武将",10
    "1",11
    "弓足軽",12
    "女性",13
    "青",14
    "C",15
    "お尻ぺんぺん！",16
    "｛主要｝｛待機⇒疲弊｝：以自陣中其他武將1名為對象，此回合中，對象武將武力上昇500。對象武將「豐臣秀吉」的話，武力則上昇1000。<br />\r\n",17
    "-",18
    "ねね（1549～1624）<br />\r\n羽柴秀吉の正室。実母の反対を押し切って、秀吉の下に嫁ぐ。その後、日の出の勢いで立身出世する夫を支え続けた。",19
    "伊藤未生"20
  ],*/
	
	await writeFile(outputPath, JSON.stringify(output, null, 2))
}


(async function(){
	await sengoku('build/sengoku.json')
})()
