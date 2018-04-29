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

async function gundamCrossWarCh(outputPath){
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
						/*
						[
							"UNIT",
							"ST03-002",
							"Re-GZ",
							"-",
							"聯邦",
							"M",
							"4",
							"藍色",
							"1",
							"藍色",
							"2",
							"5",
							"【緊急迎擊：1】　你的回合<br />當你為後攻時，在手牌的這張卡片為無色cost-1。<br />",
							"出擊時 <br />ATK在3以下的1台敵方機體顯示為已行動。",
							"一般",
							"Naochika Morishita"
						],
						*/
						/*
						info = {
							id: info[1],
							cid: info[1],
							ctype: info[0],
							
						}
						*/
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

async function gundamCrossWarJp(outputPath){
	let reg = /<a href="(\/cardlist\/index\.php\?search=true&category=[\s\S]*?)">([\s\S]*?)<\/a>/g
	let reg2 = /<td colspan="2" class="popup_type">([\s\S]*?)<\/td>[\s\S]*?<td class="popup_num">([\s\S]*?)<\/td>[\s\S]*?<td class="popup_name">([\s\S]*?)<\/td>[\s\S]*?<table class="popup_cardDetail">([\s\S]*?)<\/table>/g
	let regUnit = /<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td colspan="3" class="popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3" class="popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?<td colspan="2">([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>/g
	let regCrew = /<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td colspan="3" class="popup_longtxt">([\s\S]*?)<\/td>/g
	let regEvent = /<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?class="popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?class="popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?<tr>[\s\S]*?<td colspan="2">([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>/g
	let regCounter = /<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?class="popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td colspan="2">([\s\S]*?)<\/td>[\s\S]*?class="popup_longtxt">([\s\S]*?)<\/td>/g
	let regPilot = /<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td colspan="2">([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td colspan="3" class="popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3" class="popup_longtxt">([\s\S]*?)<\/td>/g
	let regWarship = /<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>[\s\S]*?<td colspan="3" class="popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?<td colspan="3" class="popup_longtxt">([\s\S]*?)<\/td>[\s\S]*?<td colspan="2">([\s\S]*?)<\/td>[\s\S]*?<td>([\s\S]*?)<\/td>/g
	
	let datas = []
	let page = await fetch('https://www.gundam-cw.com/cardlist/index.php?search=true&category=312301')
	var row = 0
	while(row = reg.exec(page)){
		var [ignore, nextUrl, name] = row
		console.log(nextUrl)
		var page2 = await fetch('https://www.gundam-cw.com'+nextUrl)
		var row2 = 0
		while(row2 = reg2.exec(page2)){
			let [ignore, ...info] = row2
			let type = info[0]
			let html = info[3] 
			switch(type){
				case 'UNIT':
				{
					var row3 = 0
					while(row3 = regUnit.exec(html)){
						let [ignore, ...sub] = row3
						info.pop()
						info = info.concat(sub)
						/*
						[
							"UNIT",
							"BT06-038",
							"リック・ドム（ガトー機）",
							"MS-09RS",
							"デラーズ・フリート／ドム",
							"M",
							"3",
							"緑",
							"2",
							"緑",
							"3",
							"2",
							"出撃時<br>あなたは1枚ドローする。",
							"相手のターン<br>あなたのカウンターカードが発揮したとき、このターンの間、《デラーズ・フリート》を持つ味方のユニット全ては、敵のユニットとの戦闘によるダメージを受けない。",
							"ダブルレア",
							"Tomotake Kinoshita"
						],
						*/
						
						var colorCost = 0
						if(info[8] != '-'){
							colorCost = parseInt(info[8])
						}
						
						info = {
							id: info[1],
							cid: info[1],
							ctype: info[0],
							cname: info[3] + info[2],
							ch: info[4],
							size: info[5],
							cost: parseInt(info[6]),
							colorCost: colorCost,
							color: info[9],
							atk: info[10],
							def: info[11],
							abi1: info[12],
							abi2: info[13],
							rarity: info[14],
							painter: info[15]
						}
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
					/*
					[
						"CREW",
						"PR-C007",
						"GUNDAM CROSS WARJAPAN CHAMPIONSHIP 2016 LIMITED",
						"青",
						"プロモーション",
						"-",
						"-"
					],
					*/
					info = {
						id: info[1],
						cid: info[1],
						ctype: info[0],
						cname: info[2],
						ch: '-',
						size: '-',
						cost: 0,
						colorCost: 0,
						color: info[3],
						atk: '-',
						def: '-',
						abi1: '-',
						abi2: '-',
						rarity: info[4],
						painter: info[5]
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
					/*
					[
						"EVENT",
						"BT06-136",
						"激突・赤い彗星",
						"1",
						"赤",
						"1",
						"このターンの間、《ネオ・ジオン》を持つ味方のユニット1機をATK+3する。",
						"-",
						"ノーマル",
						"-"
					],
					*/
					info = {
						id: info[1],
						cid: info[1],
						ctype: info[0],
						cname: info[2],
						ch: '-',
						size: '-',
						cost: parseInt(info[3]),
						colorCost: parseInt(info[5]),
						color: info[4],
						atk: '-',
						def: '-',
						abi1: info[6],
						abi2: info[7],
						rarity: info[8],
						painter: info[9]
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
					
					let parseSkillCost = (txt) => {
						// 黄：1
						let info = txt.trim().split('：')
						if(info.length == 1){
							return ['無', parseInt(info[0])]
						}
						return [info[0], parseInt(info[1])]
					}

					/*
					[
						"COUNTER",
						"BT02-080",
						"月は出ているか",
						"1",
						"黄：1",
						"無色：2",
						"攻撃している敵のユニット1機に3ダメージを与える。<br>この効果によって敵のユニットが破壊されたとき、あなたは1枚ドローする。",
						"ノーマル",
						"-",
						"アクシズ襲来"
					],
					*/
					
					let [skillColor, _] = parseSkillCost(info[4])
					
					info = {
						id: info[1],
						cid: info[1],
						ctype: info[0],
						cname: info[2],
						ch: '-',
						size: '-',
						cost: parseInt(info[3]),
						colorCost: 0,
						color: skillColor,
						atk: '-',
						def: '-',
						abi1: info[4]+info[5]+':'+info[6],
						abi2: '',
						rarity: info[7],
						painter: info[8]
					}
				}
				break
				case 'PILOT':
				{
					var row3 = 0
					while(row3 = regPilot.exec(html)){
						let [ignore, ...sub] = row3
						info.pop()
						info = info.concat(sub)
					}
					/*
					[
						"PILOT",
						"BT02-151",
						"ランバ・ラル",
						"ジオン",
						"±0",
						"+1",
						"レア",
						"Tsukasa Dokite",
						"破壊時<br>搭乗しているユニットが緑であるとき、あなたは1枚ドローする。",
						"-"
					],
					*/
					info = {
						id: info[1],
						cid: info[1],
						ctype: info[0],
						cname: info[2],
						ch: info[3],
						size: '-',
						cost: 0,
						colorCost: 0,
						color: '-',
						atk: info[4],
						def: info[5],
						abi1: info[8],
						abi2: info[9],
						rarity: info[6],
						painter: info[7]
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
					/*
					[
						"WARSHIP",
						"PR-W001",
						"エターナル",
						"1",
						"黄",
						"-",
						"この戦艦にコスト1を支払うたび、ストックを1追加する。<br>パイロットカードで支払う場合は、かわりにストックを2追加する。",
						"【起動：3】（ストック[3]消費）<br>次の相手のターン終了時まで、味方のユニット1機をATK+X/DEF+Xする。<br>Xはこの戦艦のLvと同じとする。",
						"プロモーション",
						"At Factory"
					],
					*/
					info = {
						id: info[1],
						cid: info[1],
						ctype: info[0],
						cname: info[2],
						ch: '-',
						size: '-',
						cost: parseInt(info[3]),
						colorCost: 0,
						color: info[4],
						atk: '-',
						def: '-',
						abi1: info[6],
						abi2: info[7],
						rarity: info[8],
						painter: info[9]
					}
				}
				break
			}
			datas.push(info)
		}
	}
	
	var hashset = {}
	
	var output = datas.reduce((acc, info)=>{
		let isExist = (!!hashset[info.id]) == true
		if(isExist){
			console.log('isExist:'+info.id)
			return acc
		}
		hashset[info.id] = 1
		acc.push(info)
		return acc
	}, [])
	
	await writeFile(outputPath, JSON.stringify(output, null, 2))
}

(async function(){
	await gundamCrossWarJp('build/gundamCrossWarJp.json')
})()
