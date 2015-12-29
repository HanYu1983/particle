var capi2 = capi2 || {};

( function( module ) {
	
	/**
	Id非null或空字串代表修改
	params : {
		Id: string,
		Params: array 的 json string
	}
	*/
	function addCard( params, cb ){
		$.ajax({
			url: '../fn/cardInfo/addCard',
			type: 'post',
			dataType: 'json',
			data: params,
			success: function(ret){
				cb( ret.Error, ret.Info )
			},
			error: function(xhr, res, err){
				cb( err )
			}
		})
	}
	/**
	params : {
		Id: string
	}
	*/
	function deleteCard( params, cb ){
		$.ajax({
			url: '../fn/cardInfo/deleteCard',
			type: 'post',
			dataType: 'json',
			data: params,
			success: function(ret){
				cb( ret.Error, ret.Info )
			},
			error: function(xhr, res, err){
				cb( err )
			}
		})
	}
	
	function cardList( cb ){
		$.ajax({
			url: '../fn/cardInfo/cardList',
			dataType: 'json',
			success: function(ret){
				cb( ret.Error, ret.Info )
			},
			error: function(xhr, res, err){
				cb( err )
			}
		})
	}
	
	module.addCard = addCard
	module.deleteCard = deleteCard
	module.cardList = cardList
	
	
}) ( capi2 )