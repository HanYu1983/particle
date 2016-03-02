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
	module.createDuel = "建立%s比賽。期間從%s到%s"
	module.deleteDuel = "刪除%s比賽"
	module.duelContext = "比賽本文"
	module.addPeople = "%s要參加%s比賽"
	module.winState = "確認%s比賽的%s選手和%s選手的比賽結果"
	module.assignWinner = "%s比賽的%s選手([勝|負])%s選手"
	
}) (api)