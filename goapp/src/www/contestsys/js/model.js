var model = {};
(function(module){
	
	var ctx = null
	function loadContext(cb){
		$.ajax({
			url: '../fn/contestsys/',
			dataType:'json',
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					ctx = info.Info
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	function getCurrentContext(){
		return ctx
	}
	
	var id = null
	function setId(fbid){
		id = fbid
	}
	
	function getId(){
		return id
	}
	
	function updateContest(contestId, info, cb){
		$.ajax({
			url: '../fn/contestsys/UpdateContest/'+contestId+'/'+id,
			dataType:'json',
			data: info,
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	function newContest(info, cb){
		$.ajax({
			url: '../fn/contestsys/CreateContest/'+id,
			dataType:'json',
			data: info,
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	function deleteContest(contestId, cb){
		$.ajax({
			url: '../fn/contestsys/DeleteContest/'+contestId+'/'+id,
			dataType:'json',
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	function upgradeContest(contestId, cb){
		$.ajax({
			url: '../fn/contestsys/UpgradeContest/'+contestId+'/'+id,
			dataType:'json',
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	function joinContest(contestId, peopleId, info, cb){
		$.ajax({
			url: '../fn/contestsys/JoinContest/'+contestId+'/'+peopleId,
			dataType:'json',
			data: info,
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	function leaveContest(contestId, peopleId, cb){
		$.ajax({
			url: '../fn/contestsys/LeaveContest/'+contestId+'/'+peopleId,
			dataType:'json',
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	function failEndContest(contestId, cb){
		$.ajax({
			url: '../fn/contestsys/FailEndContest/'+contestId+'/'+id,
			dataType:'json',
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	function getDuals(cb){
		$.ajax({
			url: '../fn/contestsys/GetDuals/'+id,
			dataType:'json',
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	function getOwnerDuals(cb){
		$.ajax({
			url: '../fn/contestsys/GetDualInfoWithContestOwner/'+id,
			dataType:'json',
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	function prepareDual(contestId, cb){
		$.ajax({
			url: '../fn/contestsys/PrepareDual/'+contestId+'/'+id,
			dataType:'json',
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	function updatePower(contestId, peopleId, power, cb){
		$.ajax({
			url: '../fn/contestsys/UpdatePower/'+contestId+'/'+id+'/'+peopleId+'/'+power,
			dataType:'json',
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	function confirmWinner(contestId, peopleId, cb){
		$.ajax({
			url: '../fn/contestsys/ConfirmWinner/'+contestId+'/'+id+'/'+peopleId,
			dataType:'json',
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	function cancelWinner(contestId, cb){
		$.ajax({
			url: '../fn/contestsys/CancelWinner/'+contestId+'/'+id,
			dataType:'json',
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	function upgrade(contestId, peopleId, info, cb){
		$.ajax({
			url: '../fn/contestsys/Upgrade/'+contestId+'/'+id+'/'+peopleId,
			data: info,
			dataType:'json',
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	function leaveMessage(contestId, info, cb){
		$.ajax({
			url: '../fn/contestsys/LeaveMessage/'+contestId+'/'+id,
			data: info,
			dataType:'json',
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	function deleteMessage(msgId, info, cb){
		$.ajax({
			url: '../fn/contestsys/DeleteMessage/'+id+'/'+msgId,
			data: info,
			dataType:'json',
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	function makeDualTime(contestId, peopleId, info, cb){
		$.ajax({
			url: '../fn/contestsys/MakeDualTime/'+contestId+'/'+peopleId,
			data: info,
			dataType:'json',
			success: (info)=>{
				if(info.Error != null){
					cb(info.Error)
				}else{
					cb(null, info.Info)
				}
			},
			error: (xhr, res, err)=>{
				cb(err)
			}
		})
	}
	
	
	var currentContestId = null
	function setCurrentContestId(id){
		currentContestId = id
	}
	function getCurrentContestId(){
		return currentContestId
	}
	
	var currentPeopleId = null
	function setCurrentPeopleId(id){
		currentPeopleId = id
	}
	function getCurrentPeopleId(){
		return currentPeopleId
	}
	
	var currentPos = null
	function setCurrentPos(id){
		currentPos = id
	}
	function getCurrentPos(){
		return currentPos
	}
	
	var currentName = null
	function setCurrentName(v){
		currentName = v
	}
	function getCurrentName(){
		return currentName
	}
	
	var currentMsgId = null
	function setCurrentMsgId(v){
		currentMsgId = v
	}
	function getCurrentMsgId(){
		return currentMsgId
	}
	
	// getter setter
	module.getCurrentContext = getCurrentContext
	module.setCurrentContestId = setCurrentContestId
	module.getCurrentContestId = getCurrentContestId
	module.setCurrentPeopleId = setCurrentPeopleId
	module.getCurrentPeopleId = getCurrentPeopleId
	module.setCurrentPos = setCurrentPos
	module.getCurrentPos = getCurrentPos
	module.setCurrentName = setCurrentName
	module.getCurrentName = getCurrentName
	module.setCurrentMsgId = setCurrentMsgId
	module.getCurrentMsgId = getCurrentMsgId
	module.setId = setId
	module.getId = getId
	// function
	module.loadContext = loadContext
	module.updateContest = updateContest
	module.newContest = newContest
	module.deleteContest = deleteContest
	module.upgradeContest = upgradeContest
	module.failEndContest = failEndContest
	module.joinContest = joinContest
	module.leaveContest = leaveContest
	module.getDuals = getDuals
	module.getOwnerDuals = getOwnerDuals
	module.prepareDual = prepareDual
	module.updatePower = updatePower
	module.confirmWinner = confirmWinner
	module.cancelWinner = cancelWinner
	module.upgrade = upgrade
	module.leaveMessage = leaveMessage
	module.deleteMessage = deleteMessage
	module.makeDualTime = makeDualTime
	
})(model)