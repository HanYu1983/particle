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

// 戰國大戰
async function sengokuCh(outputPath){
	let reg = /<a href="(cardList\.php\?id=\d+)">([\s\S]*?)<\/a>/g
	let reg2 = /<a class="cardInfo" rel="data1" data-fancybox-type="iframe" href="(cardDetail\.php\?id=\d+)">/g
	let reg3 = /<img class="cardDetail_pic" src="http:\/\/sengoku-taisen-tcg\.segataiwan\.com\.tw\/upload\/card\/([\s\S]*?)" \/>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>[\s\S]*?<th>[\s\S]*?<\/th>[\s\S]*?<td colspan="3">([\s\S]*?)<\/td>/

	let datas = []
	let host = 'http://sengoku-taisen-tcg.segataiwan.com.tw/'
	let page = await fetch(host + 'card.php')
	var row = 0
	while(row = reg.exec(page)){
		var [ignore, nextUrl, name] = row
		console.log(name)
		var page2 = await fetch(host+nextUrl)
		var row2 = 0
		while(row2 = reg2.exec(page2)){
			var [ignore, nextUrl] = row2
			var page3 = await fetch(host+nextUrl)
			var row3 = reg3.exec(page3)
			var [ignore, ...info] = row3
			datas.push(info)
		}
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
			cost:parseCost( info[14] ),
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

// 戰國大戰
async function sengokuJp(outputPath){
	let reg = /<a href="(http:\/\/sengoku-taisen-tcg.sega.jp\/cards\/\?id=[\s\S]+?)">([\s\S]*?)<\/a>/g
	let reg2 = /<a href="#card-detail_\d+">[\s\S]<img src="http:\/\/sengoku-taisen-tcg\.sega\.jp\/wp-content\/uploads\/([\s\S]*?)">[\s\S]*?<span class="name">[\s\S]*?<\/span>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>[\s\S]*?<th scope="row">[\s\S]*?<\/th><td>([\s\S]*?)<\/td>/g
	
	let datas = []
	let page = await fetch('http://sengoku-taisen-tcg.sega.jp/cards/')
	var row = 0
	while(row = reg.exec(page)){
		var [ignore, nextUrl, name] = row
		var page2 = await fetch(nextUrl)
		var row2 = 0
		while(row2 = reg2.exec(page2)){
			var [ignore, ...info] = row2
			datas.push(info)
		}
	}
	
	var output = datas.reduce((acc, info)=>{
		var jsonObj = {
			id: info[0],
			cid:info[1],
			cname:info[2],
			set:info[5],
			color:info[6],
			atype:info[8],
			atype2:info[9],
			cost:parseCost( info[10] ),
			ability:info[11],
			power:info[12],
			city:info[13],
			symbol:info[19],
			rarity:info[15],
			content:info[16]+'\n'+info[17],
			counter:info[18]
		}
		acc.push(jsonObj)
		return acc
	}, [])
	/*
	[
    0"1-001_web.png",
    1"1-001",
    2"ねね",
    3"ねね",
    4"-",
    5"第一弾ブースター",
    6"蒼",
    7"織田",
    8"武将",
    9"弓足軽",
    10"青",
    11"-",
    12"1000",
    13"1",
    14"女性",
    15"C",
    16"お尻ぺんぺん！",
    17"｛メイン｝｛待機⇒疲弊｝：自陣にいる他の武将１体を対象とし、このターン中、対象武将の武力を５００上昇させる。対象武将が「豊臣秀吉」の場合、代わりに武力を１０００上昇させる。",
    18"-",
    19"ねね（1549～1624）<br />\n羽柴秀吉の正室。実母の反対を押し切って、秀吉の下に嫁ぐ。その後、日の出の勢いで立身出世する夫を支え続けた。",
    20"伊藤未生"
  ],*/
	await writeFile(outputPath, JSON.stringify(output, null, 2))
}


(async function(){
	// 記得抓之前把要抓首頁的快取檔清掉, 不然抓不到最新的
	await sengokuCh('build/sengoku.json')
})()
