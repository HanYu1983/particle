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
		var top = {
			text: '所有比賽',
			children:[pending, public, start, end],
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
					text: p.Name+"("+p.ID+")",
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
		var d = new Date(contest.StartTime)
		var timeStr = (d.getUTCMonth()+1)+"/"+(d.getDate())+"/"+d.getUTCFullYear()
		$(document.form_contest).form('load',{
	        name:contest.Name,
	        description:contest.Description,
			game:contest.Game,
			startTime:timeStr,
			state:contest.State+"",
			pwd:contest.Password,
			owner: contest.Owner
	    });
	}
	
	function getContestDetail(){
		var game = document.form_contest.game.value
		var name = document.form_contest.name.value
		var description = document.form_contest.description.value
		var startTime = new Date(document.form_contest.startTime.value).getTime()
		var pwd = document.form_contest.pwd.value
		var value = {
			game: game,
			name: name,
			description: description,
			startTime: startTime,
			pwd: pwd
		}
		return value
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
				Power: p.Power
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
				domElement.innerHTML = "未定義("+pos+")" 
			}else{
				var msg = pos
				for(var peopleId in ctx.ContestSys.Contests[contestId].Peoples){
					var people = ctx.ContestSys.Contests[contestId].Peoples[peopleId]
					if( people.Pos == pos ){
						msg = people.Name+"("+people.ID+")"
					}
				}
				if(dual.IsTop){
					msg += "(GOAL)"
				}
				domElement.innerHTML = msg+"/"+dual.Power
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
		var name = document.form_peopleJoin.name.value
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
	
	function updateWinnerForm(ctx, pos){
		$(document.form_winner).form('load', {
			pos: pos
		})
	}
	
	
	module.updateContestListView = updateContestListView
	module.updateContestDetailView = updateContestDetailView
	module.updateContestPeopleListView = updateContestPeopleListView
	module.getContestDetail = getContestDetail
	module.updateContestFlowView = updateContestFlowView
	module.updateDualsListView = updateDualsListView
	module.alert = alert
	module.confirm = confirm
	module.getJoinInfo = getJoinInfo
	module.selectMainTab = selectMainTab
	module.selectPeople = selectPeople
	module.updatePeoplePowerForm = updatePeoplePowerForm
	module.getPeoplePowerFormValue = getPeoplePowerFormValue
	module.updateWinnerForm = updateWinnerForm
	
})(view)