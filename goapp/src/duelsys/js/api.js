var api = api || {};

(function(module){
	
	function talk(des, cb){
		$.ajax({
			url: '../fn/duelsys/talk',
			data:{
				"Talk": des
			},
			datatype:"json",
			success:function(res){
				cb(res.Error, res.Info)
			},
			eror: function(xhr, res, err){
				cb(err)
			}
		})
	}
	
	module.talk = talk
	module.createDuel = "建立(.+)比賽。期間從(.+)到(.+)。報名日期(.+)"	//期間的格式為yyyy-Jan-dd
	module.duelContext = "比賽本文"
	module.addPeople = "(.+)要參加(.+)比賽"
	module.winState = "確認(.+)比賽的(.+)決鬥者和(.+)決鬥者的比賽結果"
	module.assignWinner = "(.+)比賽的(.+)決鬥者([勝|負])(.+)決鬥者"
	module.forward = "(.+)比賽的(.+)決鬥者升格"
	module.whoistarget = "(.+)比賽的(.+)決鬥者的決鬥對象是誰？"
	
}) (api)