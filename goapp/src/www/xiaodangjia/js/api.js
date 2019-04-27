var api = api || {};
(function(module){
	var isLocalhost = location.hostname == "localhost" || location.hostname == "127.0.0.1"
	var host = 'https://particle-979.appspot.com/nightmarketssistentdbfile2/'
	var boothPath = 'root/NightmarketAssistant/1e13a986c7022ea2725e9cd7a7bd186c/booth.json'
	var earnPath = 'root/NightmarketAssistant/1e13a986c7022ea2725e9cd7a7bd186c/earns/'

	function getUrl(url, cb){
		$.ajax({
			url: url,
			dataType: 'json',
			success: (data)=>{
				cb(null, data)
			},
			error: (err)=>{
				cb(err)
			}
		})
	}

	function boothList(cb){
		if(isLocalhost){
			var res = {"booths":[{"name":"師大","rent":0,"comment":""},{"name":"樂華","rent":0,"comment":""},{"name":"師大店面","rent":0,"comment":""},{"name":"師大6月","rent":0,"comment":""},{"name":"師大7月","rent":0,"comment":""},{"name":"師大8月","rent":0,"comment":""},{"name":"師大9月","rent":0,"comment":""},{"name":"師大10月","rent":0,"comment":""},{"name":"師大11月","rent":0,"comment":""},{"name":"師大12月","rent":0,"comment":""},{"name":"師大1月","rent":0,"comment":""},{"name":"東區2月","rent":0,"comment":""},{"name":"東區3月","rent":0,"comment":""},{"name":"東區4月","rent":0,"comment":""}],"costEarns":[]}
			setTimeout(()=>{ cb(null, res) }, 0);
		} else {
			getUrl(host+boothPath, cb)
		}
	}

	function earnList(cb){
		if(isLocalhost){
			var res = {"Error":null,"Info":[{"Name":"root/NightmarketAssistant/1e13a986c7022ea2725e9cd7a7bd186c/earns/earn_2019_3.json","Time":"2019-04-22T15:15:24Z"},{"Name":"root/NightmarketAssistant/1e13a986c7022ea2725e9cd7a7bd186c/earns/earn_2018_11.json","Time":"2019-04-22T15:15:21Z"},{"Name":"root/NightmarketAssistant/1e13a986c7022ea2725e9cd7a7bd186c/earns/earn_2018_10.json","Time":"2019-04-22T15:15:19Z"},{"Name":"root/NightmarketAssistant/1e13a986c7022ea2725e9cd7a7bd186c/earns/earn_2019_1.json","Time":"2019-04-22T15:15:17Z"},{"Name":"root/NightmarketAssistant/1e13a986c7022ea2725e9cd7a7bd186c/earns/earn_2019_2.json","Time":"2019-04-22T15:15:17Z"},{"Name":"root/NightmarketAssistant/1e13a986c7022ea2725e9cd7a7bd186c/earns/earn_2018_9.json","Time":"2019-04-22T15:15:14Z"},{"Name":"root/NightmarketAssistant/1e13a986c7022ea2725e9cd7a7bd186c/earns/earn_2018_8.json","Time":"2019-04-22T15:15:13Z"},{"Name":"root/NightmarketAssistant/1e13a986c7022ea2725e9cd7a7bd186c/earns/earn_2018_7.json","Time":"2019-04-22T15:15:12Z"},{"Name":"root/NightmarketAssistant/1e13a986c7022ea2725e9cd7a7bd186c/earns/earn_2018_6.json","Time":"2019-04-22T15:15:12Z"},{"Name":"root/NightmarketAssistant/1e13a986c7022ea2725e9cd7a7bd186c/earns/earn_2018_5.json","Time":"2019-04-22T15:15:11Z"},{"Name":"root/NightmarketAssistant/1e13a986c7022ea2725e9cd7a7bd186c/earns/earn_2018_12.json","Time":"2019-04-22T15:15:10Z"},{"Name":"root/NightmarketAssistant/1e13a986c7022ea2725e9cd7a7bd186c/earns/earn_2018_3.json","Time":"2019-04-22T15:15:10Z"},{"Name":"root/NightmarketAssistant/1e13a986c7022ea2725e9cd7a7bd186c/earns/earn_2019_4.json","Time":"2019-04-22T10:24:45Z"}]}
			setTimeout(()=>{ cb(null, res.Info) }, 0);
		} else {
			getUrl(host+earnPath, (err, data)=>{
				if(err){
					return cb(err)
				} else {
					if( data.Error ){
						return cb(err)
					}
					cb(data.Info)
				}
			})
		}
	}

	function earnsDetail(cb){
		if(isLocalhost){
			var res = {"boothStates":[{"date":636897297050311830,"booth":"東區4月","progress":1},{"date":636897531933962270,"booth":"東區4月","progress":2},{"date":636899116964686570,"booth":"東區4月","progress":1},{"date":636899316024418320,"booth":"東區4月","progress":2},{"date":636899929405462100,"booth":"東區4月","progress":1},{"date":636900141410134040,"booth":"東區4月","progress":2},{"date":636900847921087680,"booth":"東區4月","progress":1},{"date":636901012544771950,"booth":"東區4月","progress":2},{"date":636901629645211980,"booth":"東區4月","progress":1},{"date":636901833174932770,"booth":"東區4月","progress":2},{"date":636902519972590700,"booth":"東區4月","progress":1},{"date":636902721042990850,"booth":"東區4月","progress":2},{"date":636903358339677970,"booth":"東區4月","progress":1},{"date":636903611085328430,"booth":"東區4月","progress":2},{"date":636904312739083010,"booth":"東區4月","progress":1},{"date":636904446021584040,"booth":"東區4月","progress":2},{"date":636905091586715400,"booth":"東區4月","progress":1},{"date":636905356781012680,"booth":"東區4月","progress":2},{"date":636905964870862720,"booth":"東區4月","progress":1},{"date":636906179729896930,"booth":"東區4月","progress":2},{"date":636906960419862530,"booth":"東區4月","progress":1},{"date":636907052924221290,"booth":"東區4月","progress":2},{"date":636907775358449420,"booth":"東區4月","progress":1},{"date":636907925937292530,"booth":"東區4月","progress":2},{"date":636908506410018290,"booth":"東區4月","progress":1},{"date":636908766249574850,"booth":"東區4月","progress":2},{"date":636910517496072670,"booth":"東區4月","progress":1},{"date":636910517515268920,"booth":"東區4月","progress":2},{"date":636911314722967740,"booth":"東區4月","progress":1},{"date":636911382163518880,"booth":"東區4月","progress":2},{"date":636912143405860730,"booth":"東區4月","progress":1},{"date":636912242071397230,"booth":"東區4月","progress":2},{"date":636913097854146880,"booth":"東區4月","progress":1},{"date":636913097872677180,"booth":"東區4月","progress":2},{"date":636913757611540310,"booth":"東區4月","progress":1},{"date":636913967028137890,"booth":"東區4月","progress":2},{"date":636914641159676350,"booth":"東區4月","progress":1},{"date":636914836811287340,"booth":"東區4月","progress":2},{"date":636915542863308220,"booth":"東區4月","progress":1},{"date":636915717179969670,"booth":"東區4月","progress":2},{"date":636916541866205550,"booth":"東區4月","progress":1},{"date":636916548758915070,"booth":"東區4月","progress":2},{"date":636917403430463220,"booth":"東區4月","progress":1},{"date":636917413556939820,"booth":"東區4月","progress":2},{"date":636918275501242530,"booth":"東區4月","progress":1},{"date":636918275530856980,"booth":"東區4月","progress":2},{"date":636918954457478420,"booth":"東區4月","progress":1},{"date":636919176895739340,"booth":"東區4月","progress":2}],"earns":[{"date":636897297063596840,"booth":"東區4月","money":300,"comment":""},{"date":636897344703042600,"booth":"東區4月","money":630,"comment":""},{"date":636897344718975630,"booth":"東區4月","money":180,"comment":""},{"date":636897388460207620,"booth":"東區4月","money":300,"comment":""},{"date":636897511705044880,"booth":"東區4月","money":300,"comment":""},{"date":636899116986275780,"booth":"東區4月","money":180,"comment":""},{"date":636899272296369970,"booth":"東區4月","money":495,"comment":""},{"date":636899300172930740,"booth":"東區4月","money":740,"comment":""},{"date":636899929427258680,"booth":"東區4月","money":150,"comment":""},{"date":636899930402243160,"booth":"東區4月","money":1110,"comment":""},{"date":636899936065177810,"booth":"東區4月","money":680,"comment":""},{"date":636900083945935200,"booth":"東區4月","money":100,"comment":""},{"date":636900091031406440,"booth":"東區4月","money":620,"comment":""},{"date":636900847935691290,"booth":"東區4月","money":280,"comment":""},{"date":636900871335322810,"booth":"東區4月","money":1200,"comment":""},{"date":636900965983919860,"booth":"東區4月","money":250,"comment":""},{"date":636901629664969870,"booth":"東區4月","money":450,"comment":""},{"date":636901635045131600,"booth":"東區4月","money":840,"comment":""},{"date":636901693973698040,"booth":"東區4月","money":560,"comment":""},{"date":636901695180621300,"booth":"東區4月","money":1390,"comment":""},{"date":636901704639554820,"booth":"東區4月","money":1380,"comment":""},{"date":636901746125175460,"booth":"東區4月","money":1870,"comment":""},{"date":636901799192038220,"booth":"東區4月","money":480,"comment":""},{"date":636901825349776690,"booth":"東區4月","money":500,"comment":""},{"date":636902519987018930,"booth":"東區4月","money":320,"comment":""},{"date":636902545847540330,"booth":"東區4月","money":50,"comment":""},{"date":636902556699679010,"booth":"東區4月","money":550,"comment":""},{"date":636902564801960960,"booth":"東區4月","money":400,"comment":""},{"date":636902568680693170,"booth":"東區4月","money":530,"comment":""},{"date":636902569490943610,"booth":"東區4月","money":1360,"comment":""},{"date":636902584476010070,"booth":"東區4月","money":490,"comment":""},{"date":636902584497831500,"booth":"東區4月","money":490,"comment":""},{"date":636902609294241050,"booth":"東區4月","money":340,"comment":""},{"date":636902662311571090,"booth":"東區4月","money":100,"comment":""},{"date":636903358357891010,"booth":"東區4月","money":400,"comment":""},{"date":636903510499230760,"booth":"東區4月","money":770,"comment":""},{"date":636903516455169360,"booth":"東區4月","money":560,"comment":""},{"date":636903540077796880,"booth":"東區4月","money":150,"comment":""},{"date":636904312757707860,"booth":"東區4月","money":340,"comment":""},{"date":636904312776509500,"booth":"東區4月","money":250,"comment":""},{"date":636904317305824540,"booth":"東區4月","money":280,"comment":""},{"date":636904338575662380,"booth":"東區4月","money":250,"comment":""},{"date":636904366009601490,"booth":"東區4月","money":300,"comment":""},{"date":636904381949724730,"booth":"東區4月","money":490,"comment":""},{"date":636904421658754800,"booth":"東區4月","money":250,"comment":""},{"date":636905091613495030,"booth":"東區4月","money":220,"comment":""},{"date":636905091772568100,"booth":"東區4月","money":740,"comment":""},{"date":636905249317142150,"booth":"東區4月","money":200,"comment":""},{"date":636905964893808490,"booth":"東區4月","money":970,"comment":""},{"date":636905976377827560,"booth":"東區4月","money":490,"comment":""},{"date":636906056515722220,"booth":"東區4月","money":840,"comment":""},{"date":636906129860460140,"booth":"東區4月","money":300,"comment":""},{"date":636906131141681240,"booth":"東區4月","money":100,"comment":""},{"date":636906960436380480,"booth":"東區4月","money":680,"comment":""},{"date":636907006880017620,"booth":"東區4月","money":390,"comment":""},{"date":636907013221598020,"booth":"東區4月","money":450,"comment":""},{"date":636907775381459620,"booth":"東區4月","money":250,"comment":""},{"date":636907776596856290,"booth":"東區4月","money":350,"comment":""},{"date":636907812990328690,"booth":"東區4月","money":1190,"comment":""},{"date":636907850155323810,"booth":"東區4月","money":900,"comment":""},{"date":636907854207213130,"booth":"東區4月","money":280,"comment":""},{"date":636908506430200410,"booth":"東區4月","money":210,"comment":""},{"date":636908524813616770,"booth":"東區4月","money":250,"comment":""},{"date":636908567644885300,"booth":"東區4月","money":430,"comment":""},{"date":636911314760072660,"booth":"東區4月","money":150,"comment":""},{"date":636912143422338720,"booth":"東區4月","money":530,"comment":""},{"date":636912185238522580,"booth":"東區4月","money":72,"comment":"史掰包包$480"},{"date":636912199511870870,"booth":"東區4月","money":250,"comment":""},{"date":636913757631288250,"booth":"東區4月","money":100,"comment":""},{"date":636913761106739630,"booth":"東區4月","money":500,"comment":""},{"date":636913764954720310,"booth":"東區4月","money":350,"comment":""},{"date":636913858139365580,"booth":"東區4月","money":280,"comment":""},{"date":636913884610356380,"booth":"東區4月","money":260,"comment":""},{"date":636914641176573840,"booth":"東區4月","money":600,"comment":""},{"date":636915542904128520,"booth":"東區4月","money":180,"comment":""},{"date":636915654726758960,"booth":"東區4月","money":820,"comment":""},{"date":636916545269696020,"booth":"東區4月","money":710,"comment":""},{"date":636917403448397460,"booth":"東區4月","money":150,"comment":""},{"date":636918954475098820,"booth":"東區4月","money":250,"comment":""},{"date":636918954956150920,"booth":"東區4月","money":310,"comment":""},{"date":636918955295088920,"booth":"東區4月","money":150,"comment":""},{"date":636918956183210700,"booth":"東區4月","money":250,"comment":""}]}
			setTimeout(()=>{ cb(null, res) }, 0);
		} else {
			earnList((err, data)=>{
				if(err){
					return cb(err)
				}
				var gets = data.map(f => host + f.Name).map(name => cb => getUrl(name, cb))
				async.parallel(gets, (err, rets)=>{
					var total = rets.reduce((acc, ret)=>{
						acc.boothStates = acc.boothStates.concat(ret.boothStates);
						acc.earns = acc.earns.concat(ret.earns);
						return acc;
					}, {boothStates: [], earns: []})
					cb(err, total);
				})
			})
		}
	}

	function formateTicks(d){
		const till1970 = 621040608000000000
		return (d - till1970) / 10000
	}

	function groupEarns(boothStates, earns){
		var boothStatesOb = rxjs.from(boothStates).pipe(
			rxjs.operators.distinct((d)=>`${d.date}-${d.booth}-${d.progress}`)
		)
		var earnsOb = rxjs.from(earns.sort((a, b) => a.date - b.date)).pipe(
			rxjs.operators.distinct((d)=>`${d.date}-${d.booth}`),
		)
		var earnsGroupOb = boothStatesOb.pipe(
			rxjs.operators.groupBy((d)=>d.booth),
			rxjs.operators.mergeMap((o)=>
				o.pipe(
					rxjs.operators.skipWhile((d)=>d.progress == 2),
					rxjs.operators.bufferCount(2),
					rxjs.operators.flatMap(ary=>{
						if(ary.length == 1){
							return rxjs.zip(
								rxjs.of(ary),
								earnsOb.pipe(
									rxjs.operators.filter(e=> e.booth == o.key),
									rxjs.operators.filter(e=> e.date >= ary[0].date),
									rxjs.operators.toArray()
								)
							)
						}
						return rxjs.zip(
							rxjs.of(ary),
							earnsOb.pipe(
								rxjs.operators.filter(e=> e.booth == o.key),
								rxjs.operators.filter(e=> e.date >= ary[0].date && e.date < ary[1].date),
								rxjs.operators.toArray()
							)
						)
					}),
					rxjs.operators.toArray()
				)
			),
			rxjs.operators.reduce((acc, g)=>{
				if(g.length){
					acc[g[0][0][0].booth] = g;
				}
				return acc;
			}, {})
		)
		
		var ret;
		earnsGroupOb.subscribe((d)=>{
			ret = d;
		})
		
		return ret;
	}
	
	module.boothList = boothList
	module.groupEarns = groupEarns
	module.formateTicks = formateTicks
	module.earnsDetail = earnsDetail
	
})(api);