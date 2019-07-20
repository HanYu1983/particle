const rx = require('rx')
const _ = require('underscore')
const request = require('request')
const fs = require('fs')

function fetch(url, dontUseCache) {
    return new Promise((res, rej) => {
        const urlKey = encodeURIComponent(url)
        const path = "cache/" + urlKey + ".html"
        if ((!!dontUseCache) == false) {
            if (fs.existsSync(path)) {
                //console.log('use cache:'+path)
                fs.readFile(path, 'utf8', function (err, data) {
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
                end()
            })
            .on('end', () => {
                if (fs.existsSync(path) == false) {
                    rej('save lost')
                } else {
                    fs.readFile(path, 'utf8', function (err, data) {
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

function writeFile(path, data) {
    return new Promise((res, rej) => {
        fs.writeFile(path, data, function (err) {
            if (err) {
                rej(err)
                return
            }
            res()
        })
    })
}

async function performParse(url, reg, dontUseCache) {
    let datas = []
    let page = await fetch(url, dontUseCache)
    let row = 0
    while (row = reg.exec(page)) {
        let [ignore, ...info] = row
        datas.push(info)
    }
    return datas
}

function parseCost( text ){
    var colorValues = "緑赤青紫黒無"
    var countryValues = "蜀魏呉漢群他"
    var costValues = "１２３４５"
    var i1 = []
    var i2 = []
    for( var k in text ){
        var c = text[k]
        if( colorValues.indexOf(c) != -1){
            var color = colorValues.indexOf(c)
            i1.push(color)
        }
        if( costValues.indexOf( c ) != -1 ){
            var cost = costValues.indexOf( c ) + 1
            i2.push(cost)
        }
    }
    if(i1.length != i2.length){
        console.log(i1, i2)
        throw new Error("i1 != i2")
    }
    if(i1.length == 0){
        return [0, 0]
    }
    let ret = [0, 0, countryValues.charAt(i1[0])]
    for(let i=0; i<i1.length; ++i){
        if(i1[i] == '無'){
            ++ret[1]
        } else {
            ++ret[0]
        }
    }
    return ret
}

async function sangoWarJp(outputPath) {
    let parsePage = /<li><a href="([\w.]+)">([A-Z\W]+)<\/a><\/li>/g
    let parseInfo = /<td style="text-align: center; color: #\w{6};" width="24%" bgcolor="#\w{6}">([\s\S]+?)<\/td><td style="text-align: center; color: #\w{6};" width="19%" bgcolor="#\w{6}">カード名<\/td><td style="text-align: center;" colspan="3">([\s\S]+?)<\/td><\/tr><tr><td style="text-align: center; color: #\w{6};" bgcolor="#\w{6}">([\s\S]+?)<\/td><td style="text-align: center; color: #\w{6};" bgcolor="#\w{6}">よみがな<\/td><td style="text-align: center;" colspan="3">([\s\S]+?)<\/td><\/tr><tr><td rowspan="6"><a class="group1" title=".+?"\s+href=".+?"><img class="aligncenter size-full" title=".+?"\s+src=".+?" alt="" width="95" height="134" \/><\/a><\/td><td style="text-align: center; color: #\w{6};" bgcolor="#\w{6}">贈り名<\/td><td style="text-align: center;" colspan="3">([\s\S]+?)<\/td><\/tr><tr><td style="text-align: center; color: #\w{6};" bgcolor="#\w{6}">種別<\/td><td style="text-align: center;" width="19%">([\s\S]+?)<\/td><td style="text-align: center; color: #\w{6};" width="19%" bgcolor="#\w{6}">兵種<\/td><td style="text-align: center;" width="19%">([\W-]+)<\/td><\/tr><tr><td style="text-align: center; color: #\w{6};" bgcolor="#\w{6}\s?">コスト<\/td><td style="text-align: center; color: #\w{6};" bgcolor="#\w{6}\s?">攻城力<\/td><td style="text-align: center; color: #\w{6};" bgcolor="#\w{6}\s?">武力<\/td><td style="text-align: center; color: #\w{6};" bgcolor="#\w{6}\s?">特技<\/td><\/tr><tr><td style="text-align: center;">([\s\S]+?)<\/td><td style="text-align: center;">([\s\S]+?)<\/td><td style="text-align: center;">([\s\S]+?)<\/td><td style="text-align: center;">([\s\S]+?)<\/td><\/tr><tr><td style="text-align: center; color: #\w{6};" bgcolor="#\w{6}" colspan="4">カードテキスト<\/td><\/tr><tr><td style="text-align: left;" colspan="4">([\s\S]+?)<\/td><\/tr><tr><td style="text-align: center; color: #\w{6};" bgcolor="#\w{6}">Illustration<\/td><td style="text-align: center; color: #\w{6};" bgcolor="#\w{6}" colspan="4">フレーバーテキスト\/反撃計略効果<\/td><\/tr><tr><td style="text-align: center;">([\s\S]+?)<\/td>([\s\S]+?)<\/td><\/tr><\/tbody><\/table>/g
    let parseInfoBelow11 = /([\d\w]+-[\d\w]+)<\/span><\/div><\/td>\n<td width="90" bgcolor="#\w{6}">\n<div style="text-align: center;"><span style="color: #\w{6};">カード名<\/span><\/div><\/td>\n<td style="text-align: center;" colspan="3" width="270" bgcolor="#\w{6}">\n<div>\n(.+?)<\/div><\/td>\n<\/tr>\n<tr>\n<td width="110" bgcolor="#\w{6}">\n<div style="text-align: center;"><span style="color: #\w{6};">(.+?)<\/span><\/div><\/td>\n<td width="90" bgcolor="#\w{6}">\n<div style="text-align: center;"><span style="color: #\w{6};">よみがな<\/span><\/div><\/td>\n<td colspan="3" width="270">\n<div style="text-align: center;">(.+?)<\/div><\/td>\n<\/tr>\n<tr>\n<td rowspan="6" width="110">\n<div><a class="group1" title="[\s\S]+?" href="[\s\S]+?"><img class="aligncenter size-full" title="[\s\S]+?" src="[\s\S]+?" alt="" width="95" height="134" \/><\/a><\/div><\/td>\n<td width="90" bgcolor="#\w{6}">\n<div style="text-align: center;"><span style="color: #\w{6};">贈り名<\/span><\/div><\/td>\n<td colspan="3" width="270">\n<div style="text-align: center;">(.+?)<\/div><\/td>\n<\/tr>\n<tr>\n<td width="90" bgcolor="#\w{6}">\n<div style="text-align: center;"><span style="color: #\w{6};">種別<\/span><\/div><\/td>\n<td width="90">\n<div style="text-align: center;">(.+?)<\/div><\/td>\n<td width="90" bgcolor="#\w{6}">\n<div style="text-align: center;"><span style="color: #\w{6};">兵種<\/span><\/div><\/td>\n<td width="90">\n<div style="text-align: center;">(.+?)<\/div><\/td>\n<\/tr>\n<tr>\n<td width="90" bgcolor="#\w{6}">\n<div style="text-align: center;"><span style="color: #\w{6};">コスト<\/span><\/div><\/td>\n<td width="90" bgcolor="#\w{6}">\n<div style="text-align: center;"><span style="color: #\w{6};">攻城力<\/span><\/div><\/td>\n<td width="90" bgcolor="#\w{6}">\n<div style="text-align: center;"><span style="color: #\w{6};">武力<\/span><\/div><\/td>\n<td width="90" bgcolor="#\w{6}">\n<div style="text-align: center;"><span style="color: #\w{6};">特技<\/span><\/div><\/td>\n<\/tr>\n<tr>\n<td width="90">\n<div style="text-align: center;">(.+?)<\/div><\/td>\n<td width="90">\n<div style="text-align: center;">(.+?)<\/div><\/td>\n<td width="90">\n<div style="text-align: center;">(.+?)<\/div><\/td>\n<td width="90">\n<div style="text-align: center;">(.+?)<\/div><\/td>\n<\/tr>\n<tr>\n<td colspan="4" width="360" bgcolor="#\w{6}">\n<div style="text-align: center;"><span style="color: #\w{6};">カードテキスト<\/span><\/div><\/td>\n<\/tr>\n<tr>\n<td colspan="4" width="360">\n<div style="text-align: left;">(.+?)<\/div><\/td>\n<\/tr>\n<tr>\n<td width="110" bgcolor="#\w{6}">\n<div style="text-align: center;"><span style="color: #\w{6};">Illustration<\/span><\/div><\/td>\n<td colspan="4" width="360" bgcolor="#\w{6}">\n<div style="text-align: center;"><span style="color: #\w{6};">フレーバーテキスト\/反撃計略効果<\/span><\/div><\/td>\n<\/tr>\n<tr>\n<td width="110">\n<div style="text-align: center;">(.+?)<\/div><\/td>\n<td colspan="4" width="360">\n<div style="text-align: [centerleft]+;">(.+?)<\/div><\/td>/g
    let host = 'http://sangokushi-taisen-tcg.sega.jp'
    let ignores = ["card117.html"]


    try {
        let datas = []
        let pages = await performParse(host + '/card01.html', parsePage, true)
        for (let i in pages) {
            let [page, name] = pages[i]
            console.log(page, name)
            if (ignores.indexOf(page) >= 0) {
                continue
            }
            // 最後面到14彈就行了
            if (name == "第１３弾ブースターパック：魏") {
                break
            }

            /*
            let ret = name.match(/：(\W)/)
            let country = '他'
            if(ret != null){
                country = ret[1]
            }
            */

            let infos = await performParse(host + '/' + page, parseInfo, false)
            if (infos.length == 0) {
                // 這裡不知道為什麼沒有作用
                // 在網路上測可以解析到
                infos = await performParse(host + '/' + page, parseInfoBelow11, false)
            }
            console.log(infos.length)
            infos = infos.map((info) => {
                return info.map((i) => i.replace(/\t/g, ''))
            })

            
            infos = infos.map((rows) => {
                var cost = parseCost(rows[7])//cost
                var country = cost[2]

                var rare = rows[2]
                var id = rows[0]
                var ntype = country
                var ctype = rows[5];//卡片種類
                var cname = rows[1];//名稱
                var atype = rows[5];//種別
                var atype2 = rows[6];//兵種
                var cost = cost.slice(0, 2)//cost
                var acity = parseInt(rows[8], 10)//攻城
                var power = parseInt(rows[9], 10)//武力
                var ability = rows[10];//能力
                var content = rows[11];//內文
                var counter = rows[13]
                return {
                    id: id,
                    rare: rare,
                    ntype: ntype,
                    ctype: ctype,
                    cname: cname,
                    atype: atype,
                    atype2: atype2,
                    cost: cost,
                    acity: acity,
                    power: power,
                    ability: ability,
                    content: content,
                    counter: counter
                }
            })
            
            datas.push(...infos)
        }

        let output = datas
        await writeFile(outputPath, JSON.stringify(output, null, 2))
    } catch (e) {
        console.log(e)
    }


    /*
    let datas = []
    
    try {
        let page = await fetch(host + '/card109.html', false)
        let row = 0
        while (row = parseInfo.exec(page)) {
            let [ignore, ...info] = row
            console.log(info)
            info = info.map((i) => i.replace(/\t/g, ''))
            datas.push(info)
        }
    } catch (e) {
        console.log(e)
    }
    */

    //let output = datas
    //await writeFile(outputPath, JSON.stringify(output, null, 2))
}


(async function () {
    await sangoWarJp('build/sangoWarJp14_16.json')
})()