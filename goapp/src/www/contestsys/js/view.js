var view = {};
(function(module){
	
	function updateContestListView(ctx, id){
		
		var pending = {
			text: '草搞',
			children:[],
			isGroup: true
		}
		var public = {
			text: '公佈',
			children:[],
			isGroup: true
		}
		var start = {
			text: '開始',
			children:[],
			isGroup: true
		}
		var end = {
			text: '結束',
			children:[],
			isGroup: true
		}
		var failEnd = {
			text: '流局',
			children:[],
			isGroup: true
		}
		var top = {
			text: '所有比賽',
			children:[pending, public, start, end, failEnd],
			isGroup: true
		}
		var root = [top]
		for(var k in ctx.ContestSys.Contests){
			var contest = ctx.ContestSys.Contests[k]
			// 草搞中只能看到自己的
			if(contest.State == 0){
				if(contest.Owner != id){
					continue
				}
			}
			
			var sub = []
			for(var j in contest.Peoples){
				var p = contest.Peoples[j]
				var subNode = {
					id: p.ID,
					text: p.Name,
					belongContest: contest.ID,
					isContest: false,
					isGroup: false
				}
				sub.push(subNode)
			}
			var node = {
				id: contest.ID,
				text: contest.Name+"("+contest.ID+")",
				children: sub,
				isContest: true,
				isGroup: false
			}
			top.children[contest.State].children.push(node)
		}
		$('#gameTree').tree({data: root})
	}
	
	function updateContestDetailView(ctx, contestId){
		if((!!contestId) == false){
			return
		}
		var contest = ctx.ContestSys.Contests[contestId]
		if((!!contest) == false){
			return
		}
		var createTimeUtc = new Date(contest.CreateTime)
		var createTimeLocal = toLocalTime(createTimeUtc)
		
		var d = new Date(contest.StartTime)
		var timeStr = (d.getMonth()+1)+"/"+(d.getDate())+"/"+d.getFullYear()
		var info = {cards:[]}
		var cardsStr = ""
		try{
			info = JSON.parse(contest.Info)
		}catch(e){
			console.log('parse info error')
		}
		if(info.cards.length > 0){
			cardsStr = "\"" + info.cards.join("\",\"")+"\""
		}
		$(document.form_contest).form('load',{
			id:contest.ID,
	        name:contest.Name,
	        description:contest.Description,
			game:contest.Game,
			startTime:timeStr,
			createTime: createTimeLocal.toISOString(),
			state:contest.State+"",
			pwd:contest.Password,
			owner: contest.OwnerName+"("+contest.Owner+")",
			infoCards: cardsStr
	    });
	}
	
	function getContestDetail(){
		var game = document.form_contest.game.value
		var name = document.form_contest.name.value
		var description = document.form_contest.description.value
		var startTime = new Date(document.form_contest.startTime.value).getTime()
		var pwd = document.form_contest.pwd.value
		var infoCards = document.form_contest.infoCards.value.replace(/\"/g, "").split(',').filter(c=>c.trim() != "")
		var infoCardsStr = ""
		if(infoCards.length > 0){
			infoCardsStr = JSON.stringify({"cards":infoCards})
		}
		var value = {
			game: game,
			name: name,
			description: description,
			startTime: startTime,
			pwd: pwd,
			info: infoCardsStr
		}
		return value
	}
	
	function findRank(ctx, contestId, peopleId){
		var contest = ctx.ContestSys.Contests[contestId]
		if((!!contest) == false){
			console.log('contest not found')
			return -1
		}
		var people = contest.Peoples[peopleId]
		if((!!people) == false){
			console.log('people not found')
			return -1
		}
		var duals = ctx.DualSys.Duals.filter(d=>d.Contest == contestId)
		var top = duals.filter(d=>d.IsTop)
		if(top.length == 0){
			console.log('must has top!')
			return -1
		}
		top = top[0]
		
		function find(nodeId, depth){
			var node = duals.find(d=>d.ID == nodeId)
			if(node == null){
				console.log('dual not found')
				return -1
			}
			if(node.ID == people.Pos){
				return depth
			}
			if(node.Left != ""){
				// 使用arguments.callee的話, 所在的函式不能使用lambda的形式
				var ret = arguments.callee(node.Left, depth+1)
				if( ret != -1 ){
					return ret
				}
			}
			if(node.Right != ""){
				ret = arguments.callee(node.Right, depth+1)
				if( ret != -1 ){
					return ret
				}
			}
			return -1
		}
		
		return find(top.ID, 0)
	}
	
	function rank2str(rank){
		if(rank < 0){
			return "無法排名"
		}
		if(rank == 0){
			return "冠軍"
		}
		return "前" +(1 << rank)+"強"
	}
	
	function updateContestPeopleListView(ctx, contestId){
		if((!!contestId) == false){
			console.log('no contestId')
			return
		}
		var contest = ctx.ContestSys.Contests[contestId]
		if((!!contest) == false){
			console.log('no contest')
			return
		}
		var rows = []
		for(var k in contest.Peoples){
			var p = contest.Peoples[k]
			var node = {
				ID: p.ID,
				Name: p.Name,
				Power: p.Power,
				Rank: rank2str(findRank(ctx, contestId, p.ID))
			}
			rows.push(node)
		}
		var data = {
			total: rows.length,
			rows: rows
		}
		$('#dg_people').datagrid({data: data})
	}
	
	function updateDualsListView(ctx, id, duals){
		var rows = duals.map(d=>{
			var confirm = ctx.ConfirmSys.Confirms.find(c=>c.Pos == d.ID && c.People == id)
			var contest = ctx.ContestSys.Contests[d.Contest]
			var peopleLeft = null
			var peopleRight = null
			for(var k in contest.Peoples){
				var p = contest.Peoples[k]
				if(p.Pos == d.Left){
					peopleLeft = p
				}
				if(p.Pos == d.Right){
					peopleRight = p
				}
			}
			return {
				contestId: contest.ID,
				contestName: contest.Name,
				left: peopleLeft ? peopleLeft.Name+"("+peopleLeft.ID+")" : "unknown",
				right: peopleRight ? peopleRight.Name+"("+peopleRight.ID+")" : "unknown",
				pos: d.ID,
				winner: (!!confirm) ? confirm.Winner : "unknown"
			}
		})
		var data = {
			total: rows.length,
			rows: rows
		}
		$('#dg_duals').datagrid({data: data})
	}
	
	function state2str(state){
		return ["等待玩家中","缺左玩家宣告","缺右玩家宣告","宣告沖突","完成","未知錯誤"][state]
	}
	
	function updateOwnerDualsListView(ctx, id, duals, states){
		var rows = duals.map(d=>{
			var confirms = ctx.ConfirmSys.Confirms.filter(c=>c.Pos == d.ID)
			var contest = ctx.ContestSys.Contests[d.Contest]
			var peopleLeft = null
			var peopleRight = null
			for(var k in contest.Peoples){
				var p = contest.Peoples[k]
				if(p.Pos == d.Left){
					peopleLeft = p
				}
				if(p.Pos == d.Right){
					peopleRight = p
				}
			}
			var isLeftPeopleFail = peopleLeft != null ? peopleLeft.Lose : false
			var isRightPeopleFail = peopleRight != null ? peopleRight.Lose : false
			var state = (isLeftPeopleFail | isRightPeopleFail) ? "結束" : state2str(states[d.ID])
			var dualTimes = []
			if(peopleLeft != null){
				dualTimes.push(peopleLeft.DualTime)
			}
			if(peopleRight != null){
				dualTimes.push(peopleRight.DualTime)
			}
			var dualTimeOk = false
			dualTimes = dualTimes.filter(t=>t.trim() != "")
			if(dualTimes.length == 2){
				if(dualTimes[0] == dualTimes[1]){
					dualTimeOk = true
				}
			}
			return {
				contestId: contest.ID,
				contestName: contest.Name,
				left: peopleLeft ? peopleLeft.Name+"("+peopleLeft.ID+")" : "unknown",
				right: peopleRight ? peopleRight.Name+"("+peopleRight.ID+")" : "unknown",
				pos: d.ID,
				winner: confirms.map(c=>c.Winner).join(','),
				state: state,
				dualTime: dualTimeOk ? "敲定 "+dualTimes[0] : "協商 "+dualTimes.join(",")
			}
		})
		var data = {
			total: rows.length,
			rows: rows
		}
		$('#dg_ownerDuals').datagrid({data: data})
	}
	
	var st = new $jit.RGraph({  
	    //Where to append the visualization  
	    injectInto: 'infovis',  
		duration: 100, 
	    //Optional: create a background canvas that plots  
	    //concentric circles.  
	    background: {  
	      CanvasStyles: {  
	        strokeStyle: '#555'  
	      }  
	    },  
	    //Add navigation capabilities:  
	    //zooming by scrolling and panning.  
	    Navigation: {  
	      enable: true,  
	      panning: true,  
	      zooming: 50  
	    },  
	    //Set Node and Edge styles.  
	    Node: {  
	        color: '#ddeeff'  
	    },  
	      
	    Edge: {  
	      color: '#C17878',  
	      lineWidth:3  
	    },  
	  
	    onBeforeCompute: function(node){  
		
	    },  
	      
	    //Add the name of the node in the correponding label  
	    //and a click handler to move the graph.  
	    //This method is called once, on label creation.  
	    onCreateLabel: function(domElement, node){
			var ctx = node.data.ctx
			var contestId = node.data.contest
			var pos = node.id
			var dual = ctx.DualSys.Duals.find(d=>d.ID == pos)
			if(dual == null){
				domElement.innerHTML = "未定義<br>("+pos+")" 
			}else{
				var msg = pos
				if(dual.IsTop){
					msg += "(GOAL)"
				}
				for(var peopleId in ctx.ContestSys.Contests[contestId].Peoples){
					var people = ctx.ContestSys.Contests[contestId].Peoples[peopleId]
					if( people.Pos == pos ){
						msg += "<br>"+(people.Name == "" ? people.ID : people.Name)
					}
				}
				domElement.innerHTML = msg
			} 
	        domElement.onclick = function(){  
	            st.onClick(node.id, {  
	                onComplete: function() {
						
	                }  
	            });  
	        };  
	    },  
	    //Change some label dom properties.  
	    //This method is called each time a label is plotted.  
	    onPlaceLabel: function(domElement, node){  
	        var style = domElement.style;  
	        style.display = '';  
	        style.cursor = 'pointer';  
	  
	        style.fontSize = "1em";  
	        style.color = "#ccc"; 
	  
	        var left = parseInt(style.left);  
	        var w = domElement.offsetWidth;  
	        style.left = (left - w / 2) + 'px';  
	    }  
	});
	
	function updateContestFlowView(ctx, contestId, pos){
		if((!!contestId) == false){
			return
		}
		var list = ctx.DualSys.Duals.filter(data=>data.Contest == contestId)
		if(list.length == 0){
			st.loadJSON({id:0, data:{ctx: ctx, contest: contestId}, children:[]})
			st.compute('end')
			st.fx.animate({  
			  modes:['polar'],  
			  duration: 1000  
			});
			st.onClick(0)
			return
		}
		var top = list.find(data=>data.IsTop)
		if(top == null){
			console.log("top is null")
			return
		}
		var nodes = {}
		var getNode = (id)=>{
			if(nodes[id] != null){
				return nodes[id]
			}
			var node = {
				id: id,
				data: {
					ctx: ctx,
					contest: contestId
				},
				children: []
			}
			nodes[node.id] = node
			return node
		}
		var newList = list.reduce((acc, data)=>{
			var node = getNode(data.ID)
			if(data.Left != ""){
				node.children.push(getNode(data.Left))
			}
			if(data.Right != ""){
				node.children.push(getNode(data.Right))
			}
			acc.push(node)
			return acc
		}, [])

		var root = getNode(top.ID)
		//load JSON data  
		st.loadJSON(root);  
		//trigger small animation  
		st.graph.eachNode(function(n) {  
		  var pos = n.getPos();  
		  pos.setc(-200, -200);  
		});  
		st.compute('end');  
		st.fx.animate({  
		  modes:['polar'],  
		  duration: 1000  
		});
		if(!!pos){
			st.onClick(pos, 'animate')
		}else{
			st.onClick(st.root); 
		}
	}
	
	function alert(type, msg){
		$.messager.alert('系統',msg,type);
	}
	
	function confirm(msg, cb){
		$.messager.confirm('系統', msg, cb);
	}
	
	function getJoinInfo(){
		var name = ""
		var pwd = document.form_peopleJoin.pwd.value
		return {
			name: name,
			pwd: pwd
		}
	}
	
	function getFakeJoinInfo(){
		var name = document.form_fakeJoin.name.value
		var pwd = document.form_peopleJoin.pwd.value
		return {
			name: name,
			pwd: pwd
		}
	}
	
	function selectMainTab(idx){
		$('#tab_main').tabs('select', idx)
	}
	
	function selectPeople(ctx, contestId, peopleId){
		var contest = ctx.ContestSys.Contests[contestId]
		if((!!contest) == false){
			return
		}
		var people = contest.Peoples[peopleId]
		if((!!people) == false){
			return
		}
		var idx = 0
		for(var k in contest.Peoples){
			if(k == peopleId){
				break
			}
			++idx
		}
		$('#dg_people').datagrid('selectRow', idx)
	}
	
	function updatePeoplePowerForm(ctx, contestId, peopleId){
		var contest = ctx.ContestSys.Contests[contestId]
		if((!!contest) == false){
			return
		}
		var people = contest.Peoples[peopleId]
		if((!!people) == false){
			return
		}
		$(document.form_peoplePower).form('load', {
			id: peopleId,
			power: people.Power
		})
	}
	
	function getPeoplePowerFormValue(){
		var id = document.form_peoplePower.id.value
		var power = document.form_peoplePower.power.value
		return {
			id: id,
			power: power
		}
	}
	
	function getWinnerFormValue(){
		var dualTime = document.form_winner.dualTime.value
		var makeDualTime = document.form_winner.makeDualTime.value
		return {
			dualTime: dualTime,
			makeDualTime: makeDualTime
		}
	}
	
	function updateWinnerForm(ctx, id, pos){
		var dual = ctx.DualSys.Duals.find(d=>d.ID == pos)
		if(dual == null){
			console.log('no dual')
			return
		}
		var contest = ctx.ContestSys.Contests[dual.Contest]
		if((!!contest) == false){
			console.log('no contest')
			return
		}
		
		var me = contest.Peoples[id]
		if(!!me == false){
			console.log('me not found')
			return
		}
		var meDual = ctx.DualSys.Duals.find(d=>d.Contest == contest.ID && (me.Pos == d.Left || me.Pos == d.Right))
		var opponent = null
		if(meDual != null){
			for(var k in contest.Peoples){
				var p = contest.Peoples[k]
				if(p.Pos == meDual.Left){
					opponent = p
				} else if(p.Pos == meDual.Right){
					opponent = p
				}
			}
		}
		var lastTime = ""
		var makeDualTime = ""
		if(me != null && opponent != null){
			var d1 = new Date(me.DualTime).getTime()
			var d2 = new Date(opponent.DualTime).getTime()
			if(isNaN(d1)){
				d1 = 0
			}
			if(isNaN(d2)){
				d2 = 0
			}
			var max = Math.max(d1, d2)
			if(max == d1){
				lastTime = me.DualTime
			}else if(max == d2){
				lastTime = opponent.DualTime
			}
			
			if(me.ID == id){
				makeDualTime = me.DualTime
			}else if(opponent.ID == id){
				makeDualTime = opponent.DualTime
			}
		}
		$(document.form_winner).form('load', {
			contestName: contest.Name,
			pos: pos,
			dualTime: lastTime,
			makeDualTime: makeDualTime
		})
	}
	
	function updateCards(ctx, contestId){
		$('#cards').empty()
		
		var contest = ctx.ContestSys.Contests[contestId]
		if((!!contest) == false){
			console.log('no contest')
			return
		}
		
		var info = {cards:[]} 
		try{
			info = JSON.parse(contest.Info)
		}catch(e){
			console.log('parse info error')
		}
		
		var game = contest.Game
		for(var i in info.cards){
			var id = info.cards[i]
			if(id.trim() == ""){
				continue
			}
			var label = $('<span></span>').text(id)
			var img = $('<img style="width: 100px; height: 120px"></img>').attr('src', cardinfoloader.cardimageurl(game, id))
			var div = $('<div></div>').append(label).append(img)
			$('#cards').append(div)
		}
	}
	
	function openAccorDual(){
		$('#accor_dual').accordion('select', '賽程')
	}
	
	function updateMessageForm(ctx, msgId){
		var msg = ctx.MessageSys.Messages.find(m=>m.ID == msgId)
		if(msg == null){
			console.log("msg not found")
			return
		}
		var htmlText = decodeURIComponent(msg.Text)
		$(document.form_message).form('load', {
			text: htmlText
		})
	}
	
	function getMessageFormValue(){
		/*
		var ary = $(document.form_message).serializeArray()
		return ary.reduce((acc, {name,value})=>{
			acc[name] = value
			return acc
		}, {})
		*/
		
		var txt = removeScriptTag(document.form_message.text.value)
		return {
			text: txt
		}
	}
	
	function removeScriptTag(htmlText){
		var wrappedString = '<div>' + htmlText + '</div>'
		var noScript = wrappedString.replace(/script/g, "THISISNOTASCRIPTREALLY")
		var html = $(noScript);
		html.find('THISISNOTASCRIPTREALLY').remove();
		return html.html()	
	}
	
	function toLocalTime(date){
		return new Date(date.getTime() + (-date.getTimezoneOffset() * 60000))
	}
	
	function updateMessageListView(ctx, contestId){
		var contest = ctx.ContestSys.Contests[contestId]
		if((!!contest) == false){
			console.log('no contest')
			return
		}
		var sortByTime = (a, b)=>{
			var aTime = new Date(a.CreateTime).getTime()
			var bTime = new Date(b.CreateTime).getTime()
			return bTime - aTime
		}
		
		var rows = ctx.MessageSys.Messages.filter(m=>m.Contest == contestId).sort(sortByTime).map(m=>{
			var p = contest.Peoples[m.People]
			var htmlText = removeScriptTag(decodeURIComponent(m.Text))
			htmlText = htmlText.replace(/\n/g, "<br>")
			
			var utc = new Date(m.CreateTime)
			var local = toLocalTime(utc)
			
			return {
				id: m.ID,
				peopleName: ((!!p) != false) ? p.Name : m.People,
				createTime: local.toISOString(),
				text: htmlText
			}
		})
		
		var data = {
			total: rows.length,
			rows: rows
		}
		$('#dg_message').datagrid({data: data})
	}
	
	module.updateContestListView = updateContestListView
	module.updateContestDetailView = updateContestDetailView
	module.updateContestPeopleListView = updateContestPeopleListView
	module.getContestDetail = getContestDetail
	module.updateContestFlowView = updateContestFlowView
	module.updateDualsListView = updateDualsListView
	module.updateOwnerDualsListView = updateOwnerDualsListView
	module.alert = alert
	module.confirm = confirm
	module.getJoinInfo = getJoinInfo
	module.getFakeJoinInfo = getFakeJoinInfo
	module.selectMainTab = selectMainTab
	module.selectPeople = selectPeople
	module.updatePeoplePowerForm = updatePeoplePowerForm
	module.getPeoplePowerFormValue = getPeoplePowerFormValue
	module.getMessageFormValue = getMessageFormValue
	module.updateWinnerForm = updateWinnerForm
	module.updateCards = updateCards
	module.openAccorDual = openAccorDual
	module.updateMessageListView = updateMessageListView
	module.updateMessageForm = updateMessageForm
	module.getWinnerFormValue = getWinnerFormValue
	
})(view)